import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { products } from "@/data/products";
import { getAssetPath } from "@/lib/utils";

export default function ProductoPage() {
  const caseStudy = products.find((p) => p.isCaseStudy)!;

  return (
    <>
      <PageHeader
        subtitle="Colección del Equipo"
        title="Los 8"
        titleAccent="Dijes"
        description="Cada integrante diseño su propio dije deportivo. El Match Point (pelota de tenis) es el caso de estudio que se analiza a profundidad."
      />

      {/* Case study highlight */}
      <section className="py-16 px-6 bg-card-dark border-b-4 border-gold">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-gold text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              ★ Caso de Estudio
            </span>
            <h2 className="text-2xl font-extrabold text-white">
              Match Point — Pelota de Tenis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="rounded-lg overflow-hidden border-2 border-gold">
              <Image
                src={getAssetPath(caseStudy.image)}
                alt="Dije Match Point"
                width={600}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{caseStudy.name}</h3>
              <p className="text-[#737373] text-xs mb-5">
                Ref: {caseStudy.ref} · Deporte: {caseStudy.sport}
              </p>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Material", value: "Acero Inoxidable 316L" },
                  { label: "Diametro", value: "30 mm" },
                  { label: "Espesor", value: "2 mm" },
                  { label: "Argolla interior", value: "5 mm" },
                  { label: "Peso", value: "4.5 gramos" },
                  { label: "Acabado frontal", value: "Satinado" },
                  { label: "Bordes", value: "Pulido Suave" },
                  { label: "Reverso", value: "Satinado" },
                ].map((item, i, arr) => (
                  <div
                    key={item.label}
                    className={`flex gap-3 ${
                      i < arr.length - 1
                        ? "border-b border-border-dark pb-3"
                        : ""
                    }`}
                  >
                    <span className="font-semibold text-[#999] w-36 shrink-0">
                      {item.label}
                    </span>
                    <span className="text-[#e5e5e5]">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-body rounded-lg border border-border-dark p-4">
                <p className="text-xs font-bold text-[#e5e5e5] mb-2">
                  Cuidados y Mantenimiento
                </p>
                <ul className="text-[#999] text-xs space-y-1">
                  <li>- Resistencia total al agua.</li>
                  <li>
                    - Limpieza con jabon neutro y secado con toalla suave para
                    evitar rayaduras.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All products grid */}
      <section className="py-16 px-6 bg-body">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Fichas Tecnicas — Todos los Dijes
          </h2>
          <p className="text-[#737373] text-sm mb-2">
            8 modelos de dijes deportivos. El dije de caso de estudio esta
            marcado en dorado.
          </p>
          <div className="w-12 h-1 bg-gold rounded-full mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.ref} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const isChamp = product.ref === "A008";

  return (
    <div
      className={`bg-card-dark rounded-lg overflow-hidden shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] ${
        product.isCaseStudy
          ? "border-2 border-gold"
          : "border border-border-dark"
      }`}
    >
      {!isChamp && (
        <div className="bg-[#c8102e] px-5 py-3 flex items-center justify-between">
          <span className="text-white font-mono font-bold text-xs tracking-widest">
            DIJES DEPORTIVOS
          </span>
          {product.isCaseStudy && (
            <span className="bg-gold text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
              ★ CASO DE ESTUDIO
            </span>
          )}
        </div>
      )}
      <Image
        src={getAssetPath(isChamp ? product.fichaImage! : product.image)}
        alt={`Dije ${product.name}`}
        width={600}
        height={400}
        className={`w-full object-contain ${isChamp ? "" : "bg-white"}`}
      />
      {!isChamp && (
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[#999] text-xs">MODELO:</p>
              <h3
                className={`text-xl font-extrabold ${
                  product.isCaseStudy ? "text-gold" : "text-white"
                }`}
              >
                {product.name}
              </h3>
              <p className="text-[#737373] text-xs mt-1">
                Referencia:{" "}
                <span className="font-mono font-bold text-gold">
                  {product.ref}
                </span>
              </p>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                product.isCaseStudy
                  ? "bg-gold/20 text-gold font-bold"
                  : "bg-border-dark text-[#999]"
              }`}
            >
              {product.sport}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-bold text-gold mb-2">Especificaciones</p>
              <ul className="text-[#999] space-y-1">
                {product.specs.map((s) => (
                  <li key={s.label}>
                    {s.label}: {s.value}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-gold mb-2">Acabados</p>
              <ul className="text-[#999] space-y-1">
                {product.finishes.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`flex gap-4 mt-4 pt-4 border-t text-xs ${
              product.isCaseStudy
                ? "border-gold/30"
                : "border-border-dark"
            }`}
          >
            <span className="text-[#999]">{product.material}</span>
            <span className="text-gold font-bold ml-auto">
              {product.weight}
            </span>
          </div>
        </div>
      )}
      <div className={`${isChamp ? "" : "px-6 pb-6"} p-6`}>
        <p className="text-gold text-xs font-bold mb-2">
          Certificado de Autenticacion
        </p>
        <Image
          src={getAssetPath(product.certImage)}
          alt={`Certificado ${product.ref}`}
          width={600}
          height={400}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
