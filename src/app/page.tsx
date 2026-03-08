"use client";

import Image from "next/image";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SectionHeader } from "@/components/layout/section-header";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/features-section";
import { getAssetPath } from "@/lib/utils";
import { capex, capexTotal, bom, bomTotal, opex, opexTotal, resumen } from "@/data/costs";
import { safetySheets } from "@/data/safety-sheets";
import {
  IconShield,
  IconClipboardCheck,
  IconAlertTriangle,
} from "@tabler/icons-react";
import { useState } from "react";

const pills = [
  { href: "#producto", label: "Producto", primary: true },
  { href: "#causa-efecto", label: "Causa-Efecto" },
  { href: "#flujo", label: "Flujo del Producto" },
  { href: "#layout", label: "Lay-out" },
  { href: "#costos", label: "Costos y BOM" },
  { href: "#seguridad", label: "Seguridad Industrial" },
  { href: "#ergonomia", label: "Ergonomia" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero with ContainerScroll */}
      <section className="bg-gradient-to-br from-dark via-body to-dark">
        <ContainerScroll
          titleComponent={
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Proyecto de Ingeniería Industrial
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Dijes <span className="text-gold">Deportivos</span>
              </h1>
              <p className="text-[#999] text-base max-w-2xl mx-auto leading-relaxed mb-8">
                Diseño y manufactura de dijes deportivos mediante tecnologías CNC, CAPP y PLM —
                análisis completo del proceso productivo desde el concepto hasta el producto terminado.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {pills.map((pill) => (
                  <a
                    key={pill.href}
                    href={pill.href}
                    className={
                      pill.primary
                        ? "bg-gold text-black font-semibold text-xs px-4 py-2 rounded-full hover:opacity-90 transition-colors"
                        : "border border-[#555] text-[#999] text-xs px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors"
                    }
                  >
                    {pill.label}
                  </a>
                ))}
              </div>
            </div>
          }
        >
          <Image
            src={getAssetPath("match-point.png")}
            alt="Match Point - Dije de Tenis"
            width={800}
            height={800}
            className="w-full h-full object-contain rounded-2xl"
          />
        </ContainerScroll>
      </section>

      {/* #01 Producto */}
      <section id="producto" className="py-20 px-6 bg-body">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="01"
            title="Producto"
            description="Descripción general del dije de caso de estudio y sus características principales."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="border-l-[3px] border-gold bg-card-dark border-t border-r border-b border-t-border-dark border-r-border-dark border-b-border-dark rounded-lg p-8 shadow-lg shadow-black/30">
              <h3 className="text-lg font-bold text-white mb-1">Match Point</h3>
              <p className="text-[#737373] text-xs mb-4">Modelo A002 · Dije de pelota de tenis · Caso de estudio</p>
              <p className="text-[#999] text-sm leading-relaxed">
                Dije circular que representa una pelota de tenis, fabricado en acero inoxidable 316L con acabado satinado. Forma parte de la coleccion de 7 dijes deportivos diseñados y manufacturados como proyecto de Ingenieria Industrial.
              </p>
              <div className="mt-4 flex gap-3">
                <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">★ Caso de estudio</span>
                <span className="bg-border-dark text-[#999] text-xs px-3 py-1 rounded-full">Tenis</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Ficha Tecnica</h3>
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {[
                    ["Material", "Acero Inoxidable 316L"],
                    ["Diametro", "30 mm"],
                    ["Espesor", "2 mm"],
                    ["Acabado", "Satinado (frontal y reverso), Bordes pulido suave"],
                    ["Argolla interior", "5 mm"],
                    ["Peso", "4.5 gramos"],
                  ].map(([label, value], i, arr) => (
                    <tr key={label} className={i < arr.length - 1 ? "border-b border-border-dark" : ""}>
                      <td className="py-3 pr-4 font-semibold text-[#999] w-44">{label}</td>
                      <td className="py-3 text-[#e5e5e5]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link href="/producto" className="inline-block mt-6 text-gold font-semibold text-sm hover:underline">
                Ver los 7 dijes del equipo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* #02 Causa-Efecto */}
      <section id="causa-efecto" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="02"
            title="Diagrama Causa-Efecto"
            description="Análisis de Ishikawa — identificación de causas raíz antes y después de mejoras."
          />
          <IshikawaSection />
        </div>
      </section>

      {/* #03 Diagrama de Flujo */}
      <section id="flujo" className="py-20 px-6 bg-body">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="03"
            title="Diagrama de Flujo del Producto"
            description="Representación visual de cada etapa del proceso productivo, desde materia prima hasta producto terminado."
          />
          <FlowDiagram />
        </div>
      </section>

      {/* #04 Layout */}
      <section id="layout" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="04"
            title="Lay-out"
            description="Distribución de planta — vistas 2D y 3D del área de manufactura."
          />
          <LayoutViewer />
        </div>
      </section>

      {/* #05 Costos */}
      <section id="costos" className="py-20 px-6 bg-body">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="05"
            title="Costos de Producción y BOM"
            description="Bill of Materials (Lista de materiales) y desglose de costos directos e indirectos."
          />
          <CostSection />
        </div>
      </section>

      {/* #06 Seguridad */}
      <section id="seguridad" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="06"
            title="Seguridad Industrial"
            description="Normas, EPP y medidas de seguridad aplicadas durante el proceso de manufactura."
          />
          <SafetySection />
        </div>
      </section>

      {/* #07 Ergonomía */}
      <section id="ergonomia" className="py-20 px-6 bg-body">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="07"
            title="Analisis Ergonomico"
            description="Evaluacion de posturas, movimientos y condiciones de trabajo del operador."
          />
          <div className="bg-card-dark rounded-lg border border-border-dark p-12 text-center shadow-lg shadow-black/30">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="1.5" className="mx-auto mb-4">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <h3 className="text-white text-lg font-bold mb-2">Proximamente</h3>
            <p className="text-[#737373] text-sm">Contenido en desarrollo. Esta seccion se actualizara con el analisis ergonomico completo.</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ──── Sub-components ──── */

function IshikawaSection() {
  const before6m = [
    { title: "Mano de Obra", items: ["Trabajo manual en casi todas las operaciones", "Mucho tiempo dedicado al pulido", "Fatiga por tareas repetitivas", "Resultados dependen del operador", "Bajo interes en el trabajo"] },
    { title: "Metodo", items: ["Operaciones sin orden definido", "Reprocesos por acabado superficial", "Ajustes improvisados durante fabricacion", "Flujo interrumpido entre estaciones", "Tiempos de produccion muy largos"] },
    { title: "Maquinaria", items: ["Corte mecanico tradicional", "Precision limitada en formas complejas", "Bajo rendimiento del equipo", "Necesidad constante de intervencion humana", "Produccion inestable"] },
    { title: "Materiales", items: ["Acero inoxidable dificil de maquinar", "Rebabas despues del corte", "Piezas requieren retrabajo", "Variacion en el acabado", "Desperdicio de material"] },
    { title: "Medio Ambiente", items: ["Lay-out desordenado", "Traslados innecesarios de piezas", "Iluminacion deficiente", "Falta de seguridad", "Espacios poco organizados"] },
    { title: "Medicion", items: ["Inspeccion solo al final", "Defectos detectados tarde", "Sin control de tiempos", "Criterio visual subjetivo", "No se registran datos del proceso"] },
  ];

  const after6m = [
    { title: "Mano de Obra", items: ["Operador supervisa el sistema", "Menor esfuerzo fisico", "Trabajo mas ergonomico", "Menos errores humanos", "Mayor motivacion"] },
    { title: "Metodo", items: ["Proceso definido digitalmente", "Secuencia fija de operaciones", "Eliminacion de reprocesos", "Flujo continuo", "Produccion planificada"] },
    { title: "Maquinaria", items: ["Equipos automatizados", "Precision en geometrias complejas", "Parametros programados", "Produccion estable", "Menos intervencion manual"] },
    { title: "Materiales", items: ["Corte limpio desde el inicio", "Menor desperdicio", "Acabado uniforme", "Piezas listas para ensamble", "Aprovechamiento del material"] },
    { title: "Medio Ambiente", items: ["Lay-out optimizado", "Menos transporte interno", "Iluminacion adecuada", "Areas definidas", "Seguridad industrial"] },
    { title: "Medicion", items: ["Control durante el proceso", "Registro de produccion", "Parametros definidos", "Deteccion temprana de fallas", "Seguimiento de calidad"] },
  ];

  return (
    <>
      <div className="bg-card-dark rounded-lg border border-border-dark overflow-hidden shadow-lg shadow-black/30">
        <div className="bg-[#1c1111] border-b border-[#dc2626] px-6 py-4 flex items-center gap-3 flex-wrap">
          <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </span>
          <h3 className="font-bold text-red-400 text-sm">Diagrama Ishikawa</h3>
          <span className="ml-auto text-red-500 text-xs">Produccion lenta y piezas con mal acabado</span>
        </div>
        <div className="p-6">
          <Image src={getAssetPath("ishikawa.jpeg")} alt="Diagrama Ishikawa" width={1200} height={600} className="w-full rounded-xl bg-white p-4" />
          <p className="text-[#999] text-xs mt-4 text-center"><strong className="text-red-400">Resultado:</strong> baja produccion + alto costo + calidad irregular</p>
        </div>
        <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {before6m.map((m) => (
            <div key={m.title} className="bg-body rounded-lg p-4 border border-border-dark">
              <h4 className="text-xs font-bold text-gold mb-2">{m.title}</h4>
              <ul className="text-[#999] text-xs space-y-1">
                {m.items.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card-dark rounded-lg border border-border-dark overflow-hidden shadow-lg shadow-black/30 mt-10">
        <div className="bg-[#0c1f11] border-b border-[#22c55e] px-6 py-4 flex items-center gap-3 flex-wrap">
          <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
          </span>
          <h3 className="font-bold text-green-400 text-sm">Ishikawa 2 — Despues del Proyecto (Situacion mejorada)</h3>
          <span className="ml-auto text-green-500 text-xs">Produccion continua con calidad uniforme</span>
        </div>
        <div className="p-6">
          <Image src={getAssetPath("ishikawa-2.png")} alt="Diagrama Ishikawa 2" width={1200} height={600} className="w-full rounded-xl bg-white p-4" />
          <p className="text-[#999] text-xs mt-4 text-center"><strong className="text-green-400">Resultado:</strong> mayor volumen + menor costo + calidad constante</p>
        </div>
        <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {after6m.map((m) => (
            <div key={m.title} className="bg-body rounded-lg p-4 border border-border-dark">
              <h4 className="text-xs font-bold text-green-400 mb-2">{m.title}</h4>
              <ul className="text-[#999] text-xs space-y-1">
                {m.items.map((item) => <li key={item}>+ {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FlowDiagram() {
  return (
    <div className="bg-card-dark rounded-lg border border-border-dark p-8 shadow-lg shadow-black/30">
      <div className="bg-gradient-to-r from-card-dark to-body rounded-xl h-80 flex items-center justify-center mb-6 border border-border-dark">
        <div className="text-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" className="mx-auto mb-3">
            <rect x="3" y="3" width="7" height="4" rx="1" /><rect x="14" y="3" width="7" height="4" rx="1" />
            <rect x="3" y="17" width="7" height="4" rx="1" /><rect x="14" y="17" width="7" height="4" rx="1" />
            <path d="M10 5h4M17 7v10M7 7v10M10 19h4" />
          </svg>
          <p className="text-[#666] text-sm">Insertar diagrama de flujo del producto</p>
          <p className="text-[#555] text-xs mt-1">( imagen, SVG, HTML o embed )</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {[
          { n: "1", label: "Materia Prima" },
          null,
          { n: "2", label: "Maquinado CNC" },
          null,
          { n: "3", label: "[ Etapa ]" },
        ].map((step, i) =>
          step ? (
            <div key={i} className="text-center">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-black text-xs font-bold mx-auto mb-2">{step.n}</div>
              <p className="text-[#999] text-xs font-semibold">{step.label}</p>
              <p className="text-[#666] text-xs mt-1 italic">[ Pendiente ]</p>
            </div>
          ) : (
            <div key={i} className="flex items-start pt-3 justify-center text-[#555] text-xl">→</div>
          )
        )}
      </div>
      <p className="text-[#555] text-xs text-center mt-4 italic">Agrega todas las etapas del proceso conforme se definan.</p>
    </div>
  );
}

function LayoutViewer() {
  const [tab, setTab] = useState<"2d" | "3d">("2d");

  return (
    <>
      <div className="bg-card-dark rounded-lg border border-border-dark overflow-hidden shadow-lg shadow-black/30">
        <div className="flex border-b border-border-dark">
          <button
            onClick={() => setTab("2d")}
            className={`flex-1 py-4 text-sm font-semibold transition-colors ${tab === "2d" ? "text-gold bg-card-dark border-b-2 border-gold" : "text-[#737373] hover:text-white bg-transparent"}`}
          >
            Vista 2D
          </button>
          <button
            onClick={() => setTab("3d")}
            className={`flex-1 py-4 text-sm font-semibold transition-colors ${tab === "3d" ? "text-gold bg-card-dark border-b-2 border-gold" : "text-[#737373] hover:text-white bg-transparent"}`}
          >
            Vista 3D
          </button>
        </div>
        {tab === "2d" ? (
          <div className="p-8">
            <Image src={getAssetPath("layout-2d.jpeg")} alt="Lay-out 2D" width={1200} height={800} className="w-full rounded-xl" />
            <p className="text-[#999] text-xs mt-3 text-center">Planta de 400 m² (20x20 m) — Distribucion por proceso — 14 estaciones</p>
          </div>
        ) : (
          <div className="p-8">
            <Image src={getAssetPath("layout-3d.jpeg")} alt="Lay-out 3D" width={1200} height={800} className="w-full rounded-xl" />
            <p className="text-[#999] text-xs mt-3 text-center">Render 3D isometrico de la planta de manufactura</p>
          </div>
        )}
      </div>
      <p className="text-center mt-4">
        <Link href="/lay-out" className="text-gold font-semibold text-sm hover:underline">Ver página completa de Lay-out →</Link>
      </p>
    </>
  );
}

function CostSection() {
  return (
    <>
      <div className="bg-card-dark rounded-lg border border-border-dark p-6 shadow-lg shadow-black/30 mb-8">
        <h3 className="font-bold text-white mb-4">Inversion Inicial (CAPEX)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-black text-gold">
                <th className="text-left px-3 py-2 rounded-tl-lg font-mono uppercase text-[10px]">#</th>
                <th className="text-left px-3 py-2 font-mono uppercase text-[10px]">Concepto</th>
                <th className="text-right px-3 py-2 font-mono uppercase text-[10px]">Costo (MXN)</th>
                <th className="text-right px-3 py-2 font-mono uppercase text-[10px]">Vida Util</th>
                <th className="text-right px-3 py-2 rounded-tr-lg font-mono uppercase text-[10px]">Depreciacion/Mes</th>
              </tr>
            </thead>
            <tbody>
              {capex.map((row) => (
                <tr key={row.id} className="border-b border-border-dark">
                  <td className="px-3 py-2.5 text-[#999]">{row.id}</td>
                  <td className="px-3 py-2.5 text-[#e5e5e5]">{row.concepto}</td>
                  <td className="px-3 py-2.5 text-[#e5e5e5] text-right font-mono">{row.costo}</td>
                  <td className="px-3 py-2.5 text-[#999] text-right">{row.vidaUtil}</td>
                  <td className="px-3 py-2.5 text-[#e5e5e5] text-right font-mono">{row.depreciacion}</td>
                </tr>
              ))}
              <tr className="bg-body">
                <td colSpan={2} className="px-3 py-2.5 font-semibold text-[#999] text-right">TOTAL INVERSION:</td>
                <td className="px-3 py-2.5 font-bold text-gold text-right font-mono">{capexTotal.costo}</td>
                <td className="px-3 py-2.5" />
                <td className="px-3 py-2.5 font-bold text-gold text-right font-mono">{capexTotal.depreciacion}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-l-[3px] border-gold bg-card-dark border-t border-r border-b border-t-border-dark border-r-border-dark border-b-border-dark rounded-lg p-6 shadow-lg shadow-black/30">
          <h3 className="font-bold text-white mb-4">Bill of Materials (BOM) — Por Pieza</h3>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-black text-gold">
                <th className="text-left px-3 py-2 rounded-tl-lg font-mono uppercase text-[10px]">#</th>
                <th className="text-left px-3 py-2 font-mono uppercase text-[10px]">Material / Insumo</th>
                <th className="text-right px-3 py-2 font-mono uppercase text-[10px]">Pzas</th>
                <th className="text-right px-3 py-2 rounded-tr-lg font-mono uppercase text-[10px]">Costo</th>
              </tr>
            </thead>
            <tbody>
              {bom.map((row) => (
                <tr key={row.id} className="border-b border-border-dark">
                  <td className="px-3 py-2.5 text-[#999]">{row.id}</td>
                  <td className="px-3 py-2.5 text-[#e5e5e5]">{row.material}</td>
                  <td className="px-3 py-2.5 text-[#999] text-right">{row.pzas}</td>
                  <td className="px-3 py-2.5 text-[#e5e5e5] text-right font-mono">{row.costo}</td>
                </tr>
              ))}
              <tr className="bg-body">
                <td colSpan={3} className="px-3 py-2.5 font-semibold text-[#999] text-right">TOTAL BOM:</td>
                <td className="px-3 py-2.5 font-bold text-gold text-right font-mono">{bomTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-card-dark rounded-lg p-6 border border-border-dark shadow-lg shadow-black/30">
          <h3 className="font-bold text-white mb-4">OPEX Mensual</h3>
          <div className="space-y-0">
            {opex.map((cat) => (
              <div key={cat.category}>
                <p className="text-[10px] font-bold text-gold uppercase tracking-wider pt-2 pb-1">{cat.category}</p>
                {cat.items.map((item) => (
                  <div key={item.concepto} className="flex justify-between items-center py-1.5 border-b border-border-dark">
                    <span className="text-xs text-[#999]">{item.concepto}</span>
                    <span className="text-xs text-[#e5e5e5] font-mono">{item.costo}</span>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex justify-between items-center py-3 bg-body border border-border-dark rounded-xl px-3 mt-3">
              <span className="font-bold text-white">TOTAL OPEX MENSUAL</span>
              <span className="font-bold text-gold font-mono">{opexTotal}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-card-dark rounded-lg border-2 border-gold p-6 shadow-lg shadow-black/30">
        <h3 className="font-bold text-white mb-4">Resumen — Costo Total del Proyecto</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-black text-gold">
                <th className="text-left px-4 py-2.5 rounded-tl-lg font-mono uppercase text-[10px]">Metrica</th>
                <th className="text-right px-4 py-2.5 rounded-tr-lg font-mono uppercase text-[10px]">Valor</th>
              </tr>
            </thead>
            <tbody>
              {resumen.map((row) => (
                <tr
                  key={row.metrica}
                  className={`border-b border-border-dark ${row.bold ? "bg-body" : ""} ${row.highlight ? "bg-gold/10" : ""}`}
                >
                  <td className={`px-4 py-3 ${row.bold ? "font-bold text-white" : "text-[#999]"} ${row.highlight ? "font-bold text-gold text-lg" : ""}`}>
                    {row.metrica}
                  </td>
                  <td className={`px-4 py-3 text-right font-mono ${row.bold ? "font-semibold text-[#e5e5e5]" : "text-[#e5e5e5]"} ${row.highlight ? "font-bold text-gold text-xl" : ""}`}>
                    {row.valor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function SafetySection() {
  const overviewFeatures = [
    {
      title: "EPP Requerido",
      description: "Lentes de seguridad, guantes anticorte, proteccion auditiva, careta para laser, mandil de cuero, calzado industrial con casquillo, overol / bata industrial.",
      icon: <IconShield size={22} />,
    },
    {
      title: "Normas Aplicables",
      description: "NOM-017 (EPP), NOM-019 (Comision de Seguridad), NOM-026 (Senalizacion), NOM-002 (Contra incendio), NOM-030 (Diagnostico SST), NOM-036-1 (Ergonomia).",
      icon: <IconClipboardCheck size={22} />,
    },
    {
      title: "Riesgos Identificados (IPER)",
      description: "Alto: Atrapamiento en Robot ABB (NR 15), Amputacion en Troquelado (NR 15), Particulas en Rebabeo (NR 12). Medio: Incendio en Laser (NR 8), Colision AGVs (NR 6), Sobreesfuerzo en Empaque (NR 6).",
      icon: <IconAlertTriangle size={22} />,
    },
  ];

  return (
    <>
      <FeaturesSectionWithHoverEffects features={overviewFeatures} />

      <div className="mt-8 bg-card-dark rounded-lg border border-border-dark p-6 shadow-lg shadow-black/30">
        <h3 className="font-bold text-white mb-4">Mapa de Riesgos — Esquema de Estaciones</h3>
        <Image src={getAssetPath("layout-esquema.jpeg")} alt="Mapa de riesgos" width={1200} height={600} className="w-full rounded-xl" />
        <p className="text-[#999] text-xs mt-3 text-center">Esquema de distribucion de estaciones con identificacion de areas de riesgo, senalizacion y EPP requerido por zona.</p>
      </div>

      <div className="mt-12">
        <h3 className="font-bold text-white mb-1">Fichas Técnicas de Seguridad</h3>
        <p className="text-[#737373] text-xs mb-8">Controles de riesgo, EPP, señalización y procedimientos seguros por estación de trabajo.</p>
        <div className="space-y-6">
          {safetySheets.map((sheet) => (
            <SafetyCard key={sheet.title} sheet={sheet} />
          ))}
        </div>
      </div>
    </>
  );
}

function SafetyCard({ sheet }: { sheet: (typeof safetySheets)[0] }) {
  const colorMap: Record<string, string> = {
    red: "border-red-500/40 bg-red-500/10 text-red-400",
    amber: "border-amber-500/40 bg-amber-500/10 text-amber-400",
    orange: "border-orange-500/40 bg-orange-500/10 text-orange-400",
    purple: "border-purple-500/40 bg-purple-500/10 text-purple-400",
    green: "border-green-500/40 bg-green-500/10 text-green-400",
    sky: "border-sky-500/40 bg-sky-500/10 text-sky-400",
  };

  return (
    <div className="bg-card-dark rounded-lg border border-border-dark shadow-lg shadow-black/30 p-6">
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <h4 className="font-bold text-white text-sm">{sheet.title}</h4>
        <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${colorMap[sheet.riskColor] || colorMap.amber}`}>
          {sheet.riskLevel}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <ListBlock label="Riesgos" color="amber" items={sheet.risks} />
          <ListBlock label="Controles de Ingeniería" color="blue" items={sheet.engineeringControls} />
          <ListBlock label="Controles Administrativos" color="blue" items={sheet.adminControls} />
          <ListBlock label="EPP" color="green" items={sheet.epp} />
        </div>
        <div className="space-y-4">
          <ListBlock label="Señalización" color="yellow" items={sheet.signage} />
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-2">Procedimiento Seguro de Operación</p>
            <ol className="text-[#999] text-xs space-y-1 list-decimal list-inside">
              {sheet.procedure.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListBlock({ label, color, items }: { label: string; color: string; items: string[] }) {
  const colorClass: Record<string, string> = {
    amber: "text-amber-400",
    blue: "text-blue-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
  };
  return (
    <div>
      <p className={`text-[10px] font-mono uppercase tracking-widest ${colorClass[color]} mb-2`}>{label}</p>
      <ul className="text-[#999] text-xs space-y-1">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </div>
  );
}
