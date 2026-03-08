export interface GlossaryTerm {
  acronym: string;
  name: string;
  nameEs: string;
  description: string;
  color: string;
  searchTerms: string;
}

export const glossary: GlossaryTerm[] = [
  {
    acronym: "CAPP",
    name: "Computer-Aided Process Planning",
    nameEs: "Planeación de la Producción Asistida por Computadora",
    description: "Sistema que utiliza software para determinar y definir la secuencia de operaciones y procesos de manufactura necesarios para producir una pieza a partir de su diseño CAD. Automatiza la selección de procesos, herramientas y parámetros de corte.",
    color: "bg-[#1e40af]",
    searchTerms: "capp planeacion produccion computadora",
  },
  {
    acronym: "CNC",
    name: "Computer Numerical Control",
    nameEs: "Control Numérico Computarizado",
    description: "Tecnología de automatización de máquinas herramienta controladas mediante instrucciones programadas en código G/M. Permite la producción de piezas con alta precisión y repetibilidad, eliminando la intervención manual directa durante el maquinado.",
    color: "bg-[#166534]",
    searchTerms: "cnc control numerico computarizado maquinado",
  },
  {
    acronym: "HMI",
    name: "Human-Machine Interface",
    nameEs: "Interfaz Humano-Máquina",
    description: "Dispositivo o panel (pantalla táctil, display, tablero) que permite al operador interactuar, monitorear y controlar un proceso o máquina industrial. Facilita la visualización de parámetros en tiempo real como velocidades, temperaturas, alarmas y estados del proceso.",
    color: "bg-[#6b21a8]",
    searchTerms: "hmi human machine interface interfaz humano maquina",
  },
  {
    acronym: "PLM",
    name: "Product Lifecycle Management",
    nameEs: "Gestión del Ciclo de Vida del Producto",
    description: "Estrategia de negocio que integra procesos, personas y tecnología para gestionar el ciclo de vida completo de un producto: desde su concepción y diseño hasta su manufactura, servicio y retiro. Permite la colaboración y el control centralizado de toda la información del producto.",
    color: "bg-[#b45309]",
    searchTerms: "plm product life cycle management ciclo vida producto",
  },
  {
    acronym: "CAD",
    name: "Computer-Aided Design",
    nameEs: "Diseño Asistido por Computadora",
    description: "Uso de software especializado para crear, modificar, analizar y optimizar diseños en 2D y 3D. Herramienta fundamental para la creación de modelos digitales precisos de los dijes antes de su manufactura.",
    color: "bg-[#991b1b]",
    searchTerms: "cad computer aided design diseño asistido computadora",
  },
  {
    acronym: "CAM",
    name: "Computer-Aided Manufacturing",
    nameEs: "Manufactura Asistida por Computadora",
    description: "Uso de software para controlar herramientas de máquina y maquinaria relacionada en la manufactura de piezas. Genera automáticamente trayectorias de herramienta (toolpaths) a partir del modelo CAD para la programación CNC.",
    color: "bg-[#115e59]",
    searchTerms: "cam computer aided manufacturing manufactura asistida computadora",
  },
  {
    acronym: "BOM",
    name: "Bill of Materials",
    nameEs: "Lista de Materiales",
    description: "Documento que lista todos los materiales, componentes, subensambles y cantidades necesarios para fabricar un producto terminado. Es la base para la planeación de materiales (MRP) y el cálculo de costos de producción.",
    color: "bg-[#3f3f46]",
    searchTerms: "bom bill of materials lista materiales",
  },
  {
    acronym: "EPP",
    name: "Equipo de Protección Personal",
    nameEs: "Personal Protective Equipment (PPE)",
    description: "Conjunto de dispositivos o artículos diseñados para proteger al trabajador de lesiones y enfermedades ocupacionales. Incluye cascos, guantes, gafas de seguridad, protección auditiva, calzado de seguridad, entre otros, según el riesgo de cada operación.",
    color: "bg-[#854d0e]",
    searchTerms: "epp equipo proteccion personal seguridad industrial",
  },
];
