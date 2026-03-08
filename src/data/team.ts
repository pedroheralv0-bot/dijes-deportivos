export interface TeamMember {
  name: string;
  role: string;
  dije: string;
  isCaseStudy?: boolean;
  orgLevel: "director-general" | "director" | "jefe";
  orgTitle: string;
}

export const team: TeamMember[] = [
  { name: "Pedro Hernandez", role: "Director General", dije: "Match Point (Tenis)", isCaseStudy: true, orgLevel: "director-general", orgTitle: "Director General" },
  { name: "Javier Mallet", role: "Director de Operaciones", dije: "90 Minutos (Futbol)", orgLevel: "director", orgTitle: "Dir. Operaciones" },
  { name: "Jeronimo Alverde", role: "Director de Marketing", dije: "Grand Slam (Raqueta)", orgLevel: "director", orgTitle: "Dir. Marketing" },
  { name: "Ernesto Flores", role: "Jefe de Diseno de Producto", dije: "Vuelo de Campeon (Basquetbol)", orgLevel: "jefe", orgTitle: "Jefe de Diseno" },
  { name: "Emilia de Cardenas", role: "Directora de Ventas", dije: "Birdie (Golf)", orgLevel: "director", orgTitle: "Dir. Ventas" },
  { name: "David Rosas", role: "Jefe de Produccion", dije: "Descenso (Bota de esqui)", orgLevel: "jefe", orgTitle: "Jefe de Produccion" },
  { name: "Diego Zerkovitz", role: "Logistica y Cadena de Suministro", dije: "El Quarterback (Fut. Americano)", orgLevel: "jefe", orgTitle: "Logistica" },
  { name: "Fernando Penafiel", role: "Relaciones Publicas", dije: "El Trofeo (Golf)", orgLevel: "jefe", orgTitle: "Relaciones Publicas" },
];
