'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function sendEmail(_prevState: unknown, formData: FormData) {
  if (!process.env.TURNSTILE_SECRET_KEY || !process.env.RESEND_API_KEY) {
    console.error('sendEmail: missing TURNSTILE_SECRET_KEY or RESEND_API_KEY');
    return { success: false, error: 'Contact form is not configured' };
  }

  const token = getField(formData, 'cf-turnstile-response');
  const name = getField(formData, 'name');
  const email = getField(formData, 'email');
  const message = getField(formData, 'message');

  // 0. Validate input
  if (!token) {
    return { success: false, error: 'Invalid CAPTCHA' };
  }
  if (!name || name.length > 100 || /[\r\n]/.test(name)) {
    return { success: false, error: 'Invalid name' };
  }
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { success: false, error: 'Invalid email' };
  }
  if (!message || message.length > 5000) {
    return { success: false, error: 'Message must be 1-5000 characters' };
  }

  // 1. Verify Turnstile Token
  try {
    const verifyRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token
        })
      }
    );

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return { success: false, error: 'Invalid CAPTCHA' };
    }
  } catch {
    return { success: false, error: 'CAPTCHA verification failed' };
  }

  // 2. Send Email via Resend
  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <website@zekhoi.dev>',
      to: ['me@zekhoi.dev'],
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, message: 'Message sent successfully!' };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}
