'use client';

import React, { useRef, useState, useTransition } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { sendEmail } from '@/app/actions';

export default function ContactForm() {
  const ref = useRef<TurnstileInstance>(null);
  const [status, setStatus] = useState<
    'idle' | 'verifying' | 'success' | 'error'
  >('idle');
  const [token, setToken] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      alert('Please complete the verification check.');
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append('cf-turnstile-response', token);

    startTransition(async () => {
      const result = await sendEmail(null, formData);
      if (result.success) {
        alert('Message sent successfully!');
        // Reset form
        (e.target as HTMLFormElement).reset();
        ref.current?.reset();
        setToken(null);
      } else {
        alert(result.error);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-0 border-t border-black/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="group border-b border-black/10 md:border-r border-black/10 relative transition-colors bg-transparent hover:bg-black/[0.02]">
          <label
            className="block text-[10px] text-black/40 p-4 tracking-[0.2em] uppercase transition-colors group-focus-within:text-black font-mono"
            htmlFor="name"
          >
            01 / NAME
          </label>
          <input
            className="w-full bg-transparent border-none p-4 pt-0 focus:ring-0 text-xl font-bold placeholder:text-black/10 uppercase outline-none font-mono"
            id="name"
            name="name"
            placeholder="YOUR NAME"
            required
            type="text"
          />
        </div>
        <div className="group border-b border-black/10 relative transition-colors bg-transparent hover:bg-black/[0.02]">
          <label
            className="block text-[10px] text-black/40 p-4 tracking-[0.2em] uppercase transition-colors group-focus-within:text-black font-mono"
            htmlFor="email"
          >
            02 / EMAIL
          </label>
          <input
            className="w-full bg-transparent border-none p-4 pt-0 focus:ring-0 text-xl font-bold placeholder:text-black/10 uppercase outline-none font-mono"
            id="email"
            name="email"
            placeholder="YOUR@EMAIL.COM"
            required
            type="email"
          />
        </div>
      </div>
      <div className="group border-b border-black/10 relative transition-colors bg-transparent hover:bg-black/[0.02]">
        <label
          className="block text-[10px] text-black/40 p-4 tracking-[0.2em] uppercase transition-colors group-focus-within:text-black font-mono"
          htmlFor="message"
        >
          03 / MESSAGE
        </label>
        <textarea
          className="w-full bg-transparent border-none p-4 pt-0 focus:ring-0 text-xl font-bold placeholder:text-black/10 uppercase resize-none outline-none font-mono min-h-[200px]"
          id="message"
          name="message"
          placeholder="TYPE YOUR MESSAGE HERE..."
          required
          rows={6}
        ></textarea>
      </div>

      <div className="p-4 border-b border-black/10 bg-black/[0.02]">
        <Turnstile
          ref={ref}
          siteKey={
            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
            '1x00000000000000000000AA'
          }
          onSuccess={(token) => {
            setToken(token);
            setStatus('success');
          }}
          onError={() => setStatus('error')}
        />
      </div>

      <div className="pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <p className="text-[10px] text-black/40 max-w-xs uppercase leading-relaxed tracking-widest font-mono">
          By submitting this form, you acknowledge that your data will be
          transmitted via encrypted protocols for processing.
        </p>
        <button
          className="bg-black text-white px-12 py-6 font-bold text-xl uppercase tracking-tighter hover:bg-[var(--color-brutal-primary)] transition-all flex items-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!token || isPending}
        >
          {isPending ? 'SENDING...' : 'SEND_MESSAGE'}
          {!isPending && (
            <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
