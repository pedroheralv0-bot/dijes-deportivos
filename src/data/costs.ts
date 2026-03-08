export const capex = [
  { id: 1, concepto: "Troquel", costo: "$800,000.00", vidaUtil: "120 meses", depreciacion: "$6,666.67" },
  { id: 2, concepto: "Maquina Laser", costo: "$8,000,000.00", vidaUtil: "120 meses", depreciacion: "$66,666.67" },
  { id: 3, concepto: "Instalacion", costo: "$40,000.00", vidaUtil: "120 meses", depreciacion: "$333.33" },
];

export const capexTotal = { costo: "$8,840,000.00", depreciacion: "$73,666.67" };

export const bom = [
  { id: 1, material: "Lamina Acero Inox. Cal. 18", pzas: "1", costo: "$1.44" },
  { id: 2, material: "Aro para dije", pzas: "1", costo: "$0.30" },
  { id: 3, material: "Cadena Acero Inoxidable", pzas: "1", costo: "$10.00" },
  { id: 4, material: "Caja premium de carton", pzas: "1", costo: "$100.00" },
  { id: 5, material: "Costal para dije", pzas: "1", costo: "$10.00" },
  { id: 6, material: "Certificado de autenticidad", pzas: "1", costo: "$20.00" },
  { id: 7, material: "Pano de limpieza", pzas: "1", costo: "$1.00" },
];

export const bomTotal = "$142.74";

export const opex = [
  { category: "Mano de Obra Directa", items: [
    { concepto: "Tecnico de Laser", costo: "$15,000" },
    { concepto: "Tecnico de Troquelado", costo: "$13,000" },
    { concepto: "Operador Rebabeo y Pulido", costo: "$9,528" },
    { concepto: "Operador de Empaque", costo: "$9,528" },
  ]},
  { category: "Mano de Obra Indirecta", items: [
    { concepto: "Ing. Produccion y Calidad", costo: "$25,000" },
  ]},
  { category: "Servicios", items: [
    { concepto: "Renta del Local / Taller", costo: "$22,000" },
    { concepto: "Energia, Agua, Comunicaciones", costo: "$8,300" },
    { concepto: "Mantenimiento + Seguridad", costo: "$8,000" },
  ]},
  { category: "Gastos Administrativos", items: [
    { concepto: "Contabilidad, Publicidad, Seguro", costo: "$15,300" },
    { concepto: "Capacitacion, Insumos, Residuos", costo: "$5,500" },
    { concepto: "Gastos Bancarios + Imprevistos", costo: "$4,200" },
  ]},
];

export const opexTotal = "$135,356.00";

export const resumen = [
  { metrica: "Volumen de Produccion Mensual Meta", valor: "10,000", bold: true },
  { metrica: "Total Costo Variable (BOM x Volumen)", valor: "$1,427,400.00" },
  { metrica: "Total Gastos Fijos (OPEX Mensual)", valor: "$135,356.00" },
  { metrica: "Total Depreciacion Mensual (CAPEX)", valor: "$73,666.67" },
  { metrica: "COSTO TOTAL MENSUAL DEL PROYECTO", valor: "$1,636,422.67", bold: true },
  { metrica: "COSTO UNITARIO REAL POR DIJE", valor: "$163.64", highlight: true },
];
