"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { glossary } from "@/data/glossary";

export default function GlosarioPage() {
  const [search, setSearch] = useState("");

  const filtered = glossary.filter((term) => {
    const q = search.toLowerCase();
    return (
      term.searchTerms.includes(q) ||
      term.acronym.toLowerCase().includes(q) ||
      term.name.toLowerCase().includes(q) ||
      term.nameEs.toLowerCase().includes(q) ||
      term.description.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <PageHeader
        subtitle="Terminología Técnica"
        title="Glosario"
        titleAccent="de Siglas"
        description="Definiciones de los acrónimos y términos técnicos utilizados en el proyecto."
      >
        <div className="max-w-md mx-auto mt-8">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Buscar sigla o término..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white placeholder-[#666] text-sm flex-1 border-none outline-none"
            />
          </div>
        </div>
      </PageHeader>

      <section className="py-16 px-6 bg-body">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-bold text-gold uppercase tracking-widest mb-4">
            Manufactura &amp; Tecnología
          </h2>
          <div className="space-y-3 mb-12">
            {filtered.map((term) => (
              <div
                key={term.acronym}
                className="border border-border-dark bg-card-dark rounded-lg p-5 transition-colors hover:border-gold cursor-default"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`${term.color} text-white text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 min-w-[60px] text-center`}
                  >
                    {term.acronym}
                  </span>
                  <div>
                    <p className="font-bold text-[#e5e5e5] text-sm">{term.name}</p>
                    <p className="text-[#737373] text-sm mt-0.5">{term.nameEs}</p>
                    <p className="text-[#999] text-xs mt-2 leading-relaxed">
                      {term.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-[#555] text-sm text-center py-8">
                No se encontraron términos para &ldquo;{search}&rdquo;
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
