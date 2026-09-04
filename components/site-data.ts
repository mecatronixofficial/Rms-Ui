import {
  Activity,
  CircleDot,
  Grid3X3,
  Layers3,
  Shirt,
  Waves,
} from "lucide-react";

export const machineRows = [
  { diameter: 26, feeders: 78, machines: 1 },
  { diameter: 28, feeders: 84, machines: 2 },
  { diameter: 30, feeders: 90, machines: 2 },
  { diameter: 32, feeders: 96, machines: 2 },
  { diameter: 34, feeders: 102, machines: 1 },
  { diameter: 36, feeders: 108, machines: 1 },
  { diameter: 40, feeders: 120, machines: 1 },
] as const;

export const fabrics = [
  {
    name: "Single Jersey",
    short: "A clean, versatile base knit for everyday apparel.",
    description:
      "A lightweight circular-knit structure with a smooth face and natural drape, suited to T-shirts, innerwear and other everyday garment programs.",
    applications: ["T-shirts", "Innerwear", "Lightweight apparel"],
    icon: Shirt,
    tone: "from-teal-950 to-teal-700",
  },
  {
    name: "Pattinai",
    short: "Pattern-led construction for distinctive garment surfaces.",
    description:
      "A developed knit structure created for visual surface interest, giving garment teams an alternative to plain constructions.",
    applications: ["Fashion tops", "Casualwear", "Surface development"],
    icon: Grid3X3,
    tone: "from-slate-950 to-cyan-800",
  },
  {
    name: "Air Tex",
    short: "An open, breathable texture for comfort-driven styles.",
    description:
      "A texture-focused circular knit designed to support airflow and a lighter hand feel in warm-weather and active casual applications.",
    applications: ["Summer apparel", "Active casual", "Breathable panels"],
    icon: Waves,
    tone: "from-cyan-950 to-teal-600",
  },
  {
    name: "Honey Comb",
    short: "Dimensional cellular texture with a structured look.",
    description:
      "A recognizable textured construction that brings depth and character to polos, casual separates and detail panels.",
    applications: ["Polos", "Casualwear", "Textured panels"],
    icon: CircleDot,
    tone: "from-stone-900 to-amber-700",
  },
  {
    name: "Two Thread Fleece",
    short: "Soft warmth and body for casual, layered garments.",
    description:
      "A comfortable knit with added body, intended for sweatshirts, joggers and season-spanning leisurewear programs.",
    applications: ["Sweatshirts", "Joggers", "Leisurewear"],
    icon: Layers3,
    tone: "from-slate-950 to-slate-600",
  },
  {
    name: "Lycra Jersey",
    short: "Stretch-enabled jersey using all-feeder Lycra capability.",
    description:
      "A close-fitting stretch knit for styles that need movement and recovery, developed with yarn and construction requirements in view.",
    applications: ["Stretch tops", "Leggings", "Fitted garments"],
    icon: Activity,
    tone: "from-emerald-950 to-teal-600",
  },
] as const;

export const contacts = [
  {
    name: "P. Ramasamy",
    role: "Managing Director",
    phone: "+91 98434 19599",
    tel: "+919843419599",
  },
  {
    name: "R. Mohan Prasanth",
    role: "General Manager",
    phone: "+91 77081 07473",
    tel: "+917708107473",
  },
] as const;

export const address =
  "No. 10/524/E, Malliyanan Thottam, Kunnangalpalayam, Karaipudur Village, Tiruppur – 641605, Tamil Nadu, India";

