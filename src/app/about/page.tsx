import { PageHeader } from "@/components/layout/page-header";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/features-section";
import { team } from "@/data/team";
import {
  IconTarget,
  IconEye,
  IconBulb,
} from "@tabler/icons-react";

const missionFeatures = [
  {
    title: "Mision",
    description:
      "Disenar y comercializar dijes que representen la identidad y pasion de los aficionados al deporte, ofreciendo productos de alta calidad, fabricados con materiales duraderos y procesos de manufactura eficientes, que permitan a nuestros clientes llevar consigo un simbolo unico de su disciplina favorita.",
    icon: <IconTarget size={22} />,
  },
  {
    title: "Vision",
    description:
      "Convertirnos en la marca de accesorios de referencia para la comunidad deportiva, reconocida por la innovacion en el diseno, la excelencia en la manufactura y la capacidad de conectar emocionalmente con los atletas y aficionados a traves de piezas con significado.",
    icon: <IconEye size={22} />,
  },
  {
    title: "Objetivo General",
    description:
      "Desarrollar y lanzar al mercado nuestra primera coleccion de 8 dijes deportivos, aplicando los conocimientos de Ingenieria Industrial en diseno de producto, manufactura, layout de planta, costos, seguridad y ergonomia para lograr un proceso productivo eficiente y rentable.",
    icon: <IconBulb size={22} />,
  },
];

export default function AboutPage() {
  const directors = team.filter((m) => m.orgLevel === "director");
  const jefes = team.filter((m) => m.orgLevel === "jefe");
  const dg = team.find((m) => m.orgLevel === "director-general")!;

  return (
    <>
      <PageHeader
        subtitle="El Equipo"
        title="Quiénes"
        titleAccent="Somos"
        description="Equipo de estudiantes de Ingeniería Industrial trabajando en el diseño y manufactura de dijes deportivos mediante tecnologías avanzadas de producción."
      />

      {/* About the project */}
      <section className="py-20 px-6 bg-body">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-2">Acerca del Proyecto</h2>
          <div className="w-12 h-1 bg-gold rounded-full mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#999] text-sm leading-relaxed mb-6">
                Dijes Deportivos es un proyecto de Ingenieria Industrial que busca disenar y manufacturar accesorios deportivos unicos. Combinamos tecnologias avanzadas de produccion como corte laser, troquelado CNC y grabado laser con procesos de calidad industrial para crear dijes que representan la pasion por el deporte. Nuestra planta de 400 m² integra automatizacion, seguridad industrial y ergonomia para una produccion eficiente de 10,000 piezas mensuales.
              </p>
              <FeaturesSectionWithHoverEffects features={missionFeatures} className="grid-cols-1" />
            </div>
            <div className="bg-card-dark rounded-lg border border-border-dark p-6 flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <p className="text-white font-bold text-lg">
                Dijes <span className="text-gold">Deportivos</span>
              </p>
              <p className="text-[#737373] text-xs mt-1">Proyecto de Ingenieria Industrial</p>
              <p className="text-[#999] text-xs mt-4 text-center">8 dijes unicos — 8 deportes — 1 equipo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team members */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-2">Integrantes del Equipo</h2>
          <div className="w-12 h-1 bg-gold rounded-full mb-10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className={`bg-card-dark rounded-lg shadow-lg shadow-black/30 overflow-hidden ${
                  member.isCaseStudy
                    ? "border-2 border-gold"
                    : "border border-border-dark"
                }`}
              >
                {member.isCaseStudy && (
                  <div className="bg-gold py-1 text-center">
                    <span className="text-black text-xs font-bold">Caso de Estudio</span>
                  </div>
                )}
                <div className="p-5 text-center">
                  <div
                    className={`w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center ${
                      member.isCaseStudy ? "bg-[#2a2418]" : "bg-body"
                    }`}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={member.isCaseStudy ? "#d4a853" : "#666"}
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
                    </svg>
                  </div>
                  <p className="font-bold text-[#e5e5e5] text-sm">{member.name}</p>
                  <p className="text-[#737373] text-xs mt-1">{member.role}</p>
                  <p
                    className={`text-xs mt-2 ${
                      member.isCaseStudy
                        ? "text-gold font-semibold"
                        : "text-[#999]"
                    }`}
                  >
                    {member.dije}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Org chart */}
      <section className="py-20 px-6 bg-body">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-2">Organigrama</h2>
          <div className="w-12 h-1 bg-gold rounded-full mb-10" />

          <div className="bg-card-dark rounded-lg border border-border-dark p-8">
            <div className="flex flex-col items-center gap-6">
              {/* DG */}
              <div className="bg-gold text-black rounded-lg px-6 py-3 text-center">
                <p className="font-bold text-sm">{dg.name}</p>
                <p className="text-xs">{dg.orgTitle}</p>
              </div>
              <div className="w-px h-6 bg-[#555]" />
              {/* Directors */}
              <div className="grid grid-cols-3 gap-8">
                {directors.map((d) => (
                  <div key={d.name} className="bg-body border border-gold rounded-lg px-4 py-2.5 text-center">
                    <p className="font-bold text-xs text-[#e5e5e5]">{d.name}</p>
                    <p className="text-[#999] text-[10px]">{d.orgTitle}</p>
                  </div>
                ))}
              </div>
              <div className="w-px h-4 bg-[#555]" />
              {/* Jefes */}
              <div className="grid grid-cols-4 gap-4">
                {jefes.map((j) => (
                  <div key={j.name} className="bg-body border border-border-dark rounded-lg px-3 py-2 text-center">
                    <p className="font-bold text-[10px] text-[#e5e5e5]">{j.name}</p>
                    <p className="text-[#737373] text-[9px]">{j.orgTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
