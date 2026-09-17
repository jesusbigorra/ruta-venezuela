"use client";

import { useState } from "react";

export default function Tabs({ destino }) {
  const tabs = [
    { key: "visitar", label: "Qué visitar", items: destino.queVisitar },
    { key: "comer", label: "Dónde comer", items: destino.dondeComer },
    { key: "dormir", label: "Dónde dormir", items: destino.dondeDormir },
  ];

  if (destino.dondeVivir?.enabled) {
    tabs.push({ key: "vivir", label: "Dónde vivir", items: null });
  }

  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active);

  return (
    <div>
      <div className="mx-4 mb-4 flex gap-1 rounded-2xl bg-bg-soft p-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`flex-1 rounded-xl py-2.5 text-xs font-bold transition ${
              active === tab.key ? "bg-navy text-white" : "text-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="px-4 pb-8">
        {current.key === "vivir" ? (
          <DondeVivirSection dondeVivir={destino.dondeVivir} />
        ) : (
          <ul className="space-y-4">
            {(current.items || []).map((item, i) => (
              <li key={i}>
                <p className="text-sm font-extrabold text-ink">{item.title}</p>
                <p className="text-sm text-muted">{item.description}</p>
              </li>
            ))}
            {(!current.items || current.items.length === 0) && (
              <p className="text-sm text-muted">
                Todavía no hay contenido cargado para esta sección.
              </p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

function DondeVivirSection({ dondeVivir }) {
  return (
    <div className="rounded-card border border-brand-green/40 bg-bg-soft p-4">
      <span className="mb-3 inline-block rounded-md bg-brand-green px-2.5 py-1 text-[10px] font-extrabold text-white">
        POWERED BY {dondeVivir.partner?.toUpperCase()}
      </span>
      <p className="mb-4 text-sm leading-relaxed text-ink">{dondeVivir.description}</p>

      <div className="mb-4 flex gap-4">
        {dondeVivir.stats?.map((stat, i) => (
          <div key={i} className="text-xs text-muted">
            <span className="block text-base font-extrabold text-ink">{stat.value}</span>
            {stat.label}
          </div>
        ))}
      </div>

      <a
        href={dondeVivir.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl bg-brand-green py-3 text-center text-sm font-extrabold text-navy-deep"
      >
        {dondeVivir.ctaLabel} →
      </a>
    </div>
  );
}
