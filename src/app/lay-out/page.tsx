"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { getAssetPath } from "@/lib/utils";

const legend = [
  { color: "bg-orange-500", label: "Estaciones de produccion" },
  { color: "bg-blue-500", label: "Estaciones automatizadas" },
  { color: "bg-green-500", label: "Area verde / seguridad" },
  { color: "bg-amber-400", label: "Almacen MP / PT" },
  { color: "bg-purple-400", label: "Control de calidad" },
  { color: "bg-red-400", label: "Lavado de ojos / emergencia" },
];

const layoutData = {
  area: "400 m² (20x20 m)",
  type: "Por proceso",
  stations: "14",
};

export default function LayoutPage() {
  const [view, setView] = useState<"2d" | "3d">("2d");

  return (
    <>
      <PageHeader
        subtitle="Distribución de Planta"
        title="Lay-out del"
        titleAccent="Área de Manufactura"
        description="Disposición física de máquinas, estaciones de trabajo y flujos de material en el área de producción de dijes deportivos."
      />

      <section className="py-16 px-6 bg-body">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setView("2d")}
              className={`border-2 rounded-lg px-8 py-3 text-sm transition-all ${
                view === "2d"
                  ? "bg-gold text-black font-bold border-gold"
                  : "border-border-dark text-[#737373]"
              }`}
            >
              Vista 2D — Plano de Planta
            </button>
            <button
              onClick={() => setView("3d")}
              className={`border-2 rounded-lg px-8 py-3 text-sm transition-all ${
                view === "3d"
                  ? "bg-gold text-black font-bold border-gold"
                  : "border-border-dark text-[#737373]"
              }`}
            >
              Vista 3D — Modelo / Render
            </button>
          </div>

          {/* 2D View */}
          {view === "2d" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="col-span-1 bg-card-dark rounded-lg border border-border-dark p-6">
                  <h3 className="font-bold text-[#e5e5e5] mb-4 text-sm">Leyenda</h3>
                  <div className="space-y-3">
                    {legend.map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className={`w-8 h-5 ${item.color} rounded`} />
                        <span className="text-[#999] text-xs">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-dark">
                    <h4 className="font-semibold text-[#737373] text-xs mb-3">Datos del lay-out</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#737373]">Area total</span>
                        <span className="text-[#e5e5e5] font-semibold">{layoutData.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#737373]">Tipo de distribucion</span>
                        <span className="text-[#e5e5e5] font-semibold">{layoutData.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#737373]">N° de estaciones</span>
                        <span className="text-[#e5e5e5] font-semibold">{layoutData.stations}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <Image src={getAssetPath("layout-2d.jpeg")} alt="Plano 2D" width={1200} height={800} className="w-full rounded-lg" />
                  <div className="mt-4">
                    <Image src={getAssetPath("layout-esquema.jpeg")} alt="Esquema de estaciones" width={1200} height={800} className="w-full rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="bg-[#141c24] border-l-4 border-[#4b7399] rounded-r-lg p-6">
                <h3 className="font-bold text-[#4b7399] text-sm mb-2">Descripcion del Lay-out 2D</h3>
                <p className="text-[#7fa8c9] text-xs leading-relaxed">
                  Distribucion <strong>por proceso</strong> en planta de 400 m² (20 x 20 m). Estaciones: Corte Laser, Troquelado, Rebabeo, Pulido, Limpieza, Insercion de Aro (x3), Grabado Laser, Calidad, Empaque (x2), Almacen MP/PT. Transporte via AGVs con sensores 360° y bandas transportadoras. Piso epoxico antiderrapante, estaciones de lavado de ojos, senalizacion NOM-026 y equipo de seguridad en cada area. Cuarto de maquinas y area verde de emergencia integrados.
                </p>
              </div>
            </div>
          )}

          {/* 3D View */}
          {view === "3d" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="col-span-1 bg-card-dark rounded-lg border border-border-dark p-6">
                  <h3 className="font-bold text-[#e5e5e5] mb-4 text-sm">Informacion del Modelo 3D</h3>
                  <div className="space-y-3 text-xs">
                    {[
                      ["Software usado", "SketchUp / Render"],
                      ["Escala", "1:1"],
                      ["Area representada", "400 m²"],
                      ["Version", "Final"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between border-b border-border-dark pb-2">
                        <span className="text-[#737373]">{label}</span>
                        <span className="text-[#e5e5e5] font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-dark">
                    <h4 className="font-semibold text-[#737373] text-xs mb-3">Vistas disponibles</h4>
                    <div className="space-y-2">
                      <div className="w-full text-left text-xs px-3 py-2 bg-body rounded-lg border border-gold text-gold">Vista isometrica</div>
                      <div className="w-full text-left text-xs px-3 py-2 bg-body rounded-lg border border-border-dark text-[#999]">Vista lateral</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <Image src={getAssetPath("layout-3d.jpeg")} alt="Render 3D isometrico" width={1200} height={800} className="w-full rounded-lg mb-4" />
                  <Image src={getAssetPath("layout-3d-lateral.jpeg")} alt="Render 3D vista lateral" width={1200} height={800} className="w-full rounded-lg" />
                </div>
              </div>
              <div className="bg-[#1c1424] border-l-4 border-[#7b4b99] rounded-r-lg p-6">
                <h3 className="font-bold text-[#7b4b99] text-sm mb-2">Descripcion del Modelo 3D</h3>
                <p className="text-[#9b6fbf] text-xs leading-relaxed">
                  Render 3D de la planta de manufactura mostrando la distribucion fisica de todas las estaciones de trabajo, maquinaria, AGVs, bandas transportadoras y areas de seguridad. Se incluyen vista isometrica y vista lateral para apreciar alturas de equipos, iluminacion y flujo general del proceso productivo.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
