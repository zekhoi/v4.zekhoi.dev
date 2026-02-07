// src/components/home/TechStack.tsx
import React from 'react';

const stack = [
  {
    category: 'LANGUAGES',
    items: ['JavaScript', 'TypeScript', 'Node.js', 'Go', 'Python', 'PHP']
  },
  {
    category: 'FRAMEWORKS',
    items: ['Fastify', 'Next.js', 'Nuxt.js', 'Laravel', 'Tailwind CSS']
  },
  {
    category: 'INFRASTRUCTURE',
    items: ['Docker', 'Ansible', 'Nginx', 'PostgreSQL', 'Git']
  },
  {
    category: 'SPECIALIZED',
    items: ['Automation', 'REST API', 'RAG / LLM']
  }
];

export default function TechStack() {
  return (
    <section id="stack" className="w-full max-w-7xl mx-auto px-6 md:px-12">
      <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/10 pt-12 mt-16">
        <div className="lg:col-span-1">
          <span className="text-4xl font-black text-black/10 font-mono">
            04
          </span>
        </div>
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-4xl">terminal</span>
            <h2 className="font-display font-bold text-4xl uppercase tracking-tighter">
              Core Technologies
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-black/70 mb-8 max-w-md font-mono">
            A curated arsenal of languages, frameworks, and infrastructure tools
            selected for type safety, performance, and developer experience.
          </p>
          <div className="p-6 bg-zinc-50 border border-black/5">
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-40 font-mono">
              Selection Criteria
            </h3>
            <p className="text-xs leading-relaxed italic font-mono">
              &quot;We prioritize long-term maintainability over hype. Our stack
              is built on battle-tested technologies that offer strong static
              analysis and ecosystem maturity.&quot;
            </p>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
            {stack.map((group) => (
              <div
                key={group.category}
                className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
              >
                <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                  {group.category}
                </h4>
                <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-black"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
