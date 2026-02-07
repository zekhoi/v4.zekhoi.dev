'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(_prevState: unknown, formData: FormData) {
  const token = formData.get('cf-turnstile-response') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // 1. Verify Turnstile Token
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

  // 2. Send Email via Resend
  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update this with your verified domain later
      to: ['me@zekhoi.dev'], // Your personal email
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
