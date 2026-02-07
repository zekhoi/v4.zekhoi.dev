import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Khoironi Kurnia Syah',
  description:
    'Get in touch with me for projects, consulting, or collaborations. Available for remote and global work.',
  alternates: {
    canonical: 'https://zekhoi.dev/contact'
  },
  openGraph: {
    title: 'Contact | Khoironi Kurnia Syah',
    description:
      "Available for projects, consulting, and collaborations. Let's build something amazing together.",
    url: 'https://zekhoi.dev/contact',
    type: 'website'
  }
};

export default function ContactPage() {
  return (
    <>
      <main className="relative z-10 pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Info Column */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-48 flex flex-col gap-12">
              <div className="border border-black p-6 bg-white">
                <p className="text-[10px] text-black/40 mb-4 tracking-[0.2em] uppercase font-mono">
                  SYSTEM_STATUS
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 animate-pulse"></span>
                  <span className="font-bold text-xs uppercase tracking-widest font-mono">
                    Available for Projects
                  </span>
                </div>
              </div>
              <div className="space-y-8 font-mono">
                <div>
                  <p className="text-[10px] text-black/40 mb-2 tracking-[0.2em] uppercase">
                    COMM_CHANNELS
                  </p>
                  <div className="flex flex-col gap-1 text-sm font-bold uppercase">
                    <a className="hover:underline" href="mailto:me@zekhoi.dev">
                      ME@ZEKHOI.DEV
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-black/40 mb-2 tracking-[0.2em] uppercase">
                    LOCATION
                  </p>
                  <p className="text-sm font-bold uppercase">REMOTE / GLOBAL</p>
                </div>
                <div>
                  <p className="text-[10px] text-black/40 mb-2 tracking-[0.2em] uppercase">
                    RESUME
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1ZfDHKW1rYWNgZ1r4CyOhj0UM5dzw1SLRx1UJY3Z9IYI/export?format=pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold uppercase hover:underline flex items-center gap-2"
                  >
                    DOWNLOAD_PDF
                    <span className="material-symbols-outlined text-xs">
                      download
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content / Form Column */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <h1 className="font-display font-black text-6xl md:text-8xl leading-none tracking-tight uppercase mb-16">
              GET_IN
              <br />
              TOUCH
            </h1>
            <ContactForm />
          </div>
        </div>

        <div className="mt-32">
          <Footer />
        </div>
      </main>
    </>
  );
}
