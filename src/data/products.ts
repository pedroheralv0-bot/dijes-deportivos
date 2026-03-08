export interface Product {
  name: string;
  ref: string;
  sport: string;
  specs: { label: string; value: string }[];
  finishes: string[];
  material: string;
  weight: string;
  image: string;
  certImage: string;
  isCaseStudy?: boolean;
  fichaImage?: string;
}

export const products: Product[] = [
  {
    name: "Vuelo de Campeon",
    ref: "A001",
    sport: "Voleibol",
    specs: [
      { label: "Alto total", value: "35 mm" },
      { label: "Ancho maximo", value: "28 mm" },
      { label: "Espesor", value: "2 mm" },
      { label: "Argolla", value: "4 mm" },
    ],
    finishes: ["Frontal: Satinado", "Bordes: Pulido Suave", "Reverso: Mate Liso"],
    material: "Acero Inoxidable (316L)",
    weight: "4.5 g",
    image: "vuelo-de-campeon.png",
    certImage: "cert-a001.png",
  },
  {
    name: "Match Point",
    ref: "A002",
    sport: "Tenis",
    isCaseStudy: true,
    specs: [
      { label: "Diametro", value: "30 mm" },
      { label: "Espesor", value: "2 mm" },
      { label: "Argolla", value: "5 mm" },
    ],
    finishes: ["Frontal: Satinado", "Bordes: Pulido Suave", "Reverso: Satinado"],
    material: "Acero Inoxidable (316L)",
    weight: "4.5 g",
    image: "match-point.png",
    fichaImage: "match-point-ficha.png",
    certImage: "cert-a002.png",
  },
  {
    name: "Grand Slam",
    ref: "A003",
    sport: "Tenis",
    specs: [
      { label: "Largo total", value: "40 mm" },
      { label: "Ancho cabeza", value: "20 mm" },
      { label: "Grosor", value: "1.5 mm" },
      { label: "Argolla", value: "5 mm" },
    ],
    finishes: ["Frontal: Cepillado", "Reverso: Cepillado", "Bordes: Pulido Suave"],
    material: "Acero Inoxidable (316L)",
    weight: "3.2 g",
    image: "grand-slam.png",
    certImage: "cert-a003.png",
  },
  {
    name: "90 Minutos",
    ref: "A004",
    sport: "Futbol",
    specs: [
      { label: "Diametro", value: "35 mm" },
      { label: "Grosor", value: "2 mm" },
      { label: "Argolla", value: "5 mm" },
    ],
    finishes: ["Frontal: Cepillado", "Frente: Corte laser pasante", "Reverso: Liso", "Bordes: Pulido Suave"],
    material: "Acero Inoxidable (316L)",
    weight: "2.5 g",
    image: "90-minutos.png",
    certImage: "cert-a004.png",
  },
  {
    name: "Descenso",
    ref: "A005",
    sport: "Ski",
    specs: [
      { label: "Alto total", value: "38 mm" },
      { label: "Ancho total", value: "34 mm" },
      { label: "Grosor", value: "2 mm" },
      { label: "Argolla", value: "4 mm" },
    ],
    finishes: ["Corte exterior: Laser de fibra", "Detalles: Grabado laser profundo", "Frontal: Cepillado", "Bordes: Pulido suave"],
    material: "Acero Inoxidable (316L)",
    weight: "2.8 g",
    image: "descenso.png",
    certImage: "cert-a005.png",
  },
  {
    name: "Birdie",
    ref: "A006",
    sport: "Golf",
    specs: [
      { label: "Diametro", value: "35 mm" },
      { label: "Grosor", value: "2 mm" },
      { label: "Argolla", value: "5 mm" },
    ],
    finishes: ["Detalles: Grabado laser profundo", "Frontal: Cepillado", "Bordes: Pulido suave"],
    material: "Acero Inoxidable (316L)",
    weight: "2.8 g",
    image: "birdie.png",
    certImage: "cert-a006.png",
  },
  {
    name: "El Quarterback",
    ref: "A007",
    sport: "Futbol Americano",
    specs: [
      { label: "Ancho (eje mayor)", value: "35 mm" },
      { label: "Alto (eje menor)", value: "22 mm" },
      { label: "Grosor placa", value: "2.0 mm" },
      { label: "Argolla", value: "4 mm" },
    ],
    finishes: ["Detalles: Grabado laser profundo (0.3mm)", "Frontal: Cepillado", "Bordes: Pulido suave"],
    material: "Acero Inoxidable (316L)",
    weight: "2.8 g",
    image: "el-quarterback.png",
    certImage: "cert-a007.png",
  },
  {
    name: "CHAMP",
    ref: "A008",
    sport: "Trofeo",
    specs: [],
    finishes: [],
    material: "Acero Inoxidable (316L)",
    weight: "-",
    image: "ficha-champ.png",
    certImage: "cert-a008.png",
    fichaImage: "ficha-champ.png",
  },
];
