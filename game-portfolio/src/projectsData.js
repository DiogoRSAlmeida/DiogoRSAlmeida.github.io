// projectsData.js
export const projects = [
  {
    id: "FracturedEgo-01",
    title: { pt: "Fractured Ego", en: "Fractured Ego" },
    category: "personal",
    image: "/Images/project1.webp",
    description: { pt: "Um jogo de terror 3D investigativo.", en: "An investigative 3D horror game." },
    carousel: ["/Images/NDA.webp", "/Images/NDA.webp", "/Images/NDA.webp"],
    tags: { pt: ["Unity", "C#", "3D", "Terror", "Investigação"], en: ["Unity", "C#", "3D", "Horror", "Investigation"] }
  },
  {
    id: "Fazendinha-02",
    title: { pt: "Fazendinha", en: "Fazendinha" },
    category: "commercial",
    image: "/Images/MobileFarm.webp",
    description: { pt: "Um jogo 3D mobile de gestão de fazenda.", en: "A 3D mobile farm management game." },
    carousel: [],
    tags: { pt: ["Unity", "C#", "3D", "Mobile", "Gestão"], en: ["Unity", "C#", "3D", "Mobile", "Management"] }
  },
  {
    id: "plantacao-vr-03",
    title: { pt: "Plantação VR", en: "Crop Farming VR" },
    category: "commercial",
    image: "/Images/VRfarm.webp",
    description: { pt: "Um jogo VR sobre cuidado com o solo para plantação.", en: "A VR game about soil care for crop farming." },
    carousel: [],
    tags: { pt: ["Unity", "C#", "VR", "Educacional"], en: ["Unity", "C#", "VR", "Educational"] }
  },
  {
    id: "Transformaçao digital",
    title: "Transformaçao digital",
    category: "Comercial",
    image: "/Images/projectAmongUs.png",
    description: "um jogo 2D isometrico webgl multi player sobre transformaçao digital",
    link: "#",
    carousel: ["/Images/NDA.png", "/Images/projectAmongUs.png"],
    infographic: [
      { icon: "fas fa-brain", label: "Reinforcement Learning", progress: 88 },
      { icon: "fas fa-dice-d20", label: "Decision Making", progress: 78 }
    ]
  },
  {
    id: "Cooperativismo roblox",
    title: "Cooperativismo roblox",
    category: "Comercial",
    image: "/Images/N.png",
    description: "um jogo feito na plataforma roblox para fomentar o cooperativismo",
    link: "#",
    carousel: ["/Images/NDA.png", "/Images/NDA.png"],
    infographic: [
      { icon: "fas fa-brain", label: "Reinforcement Learning", progress: 88 },
      { icon: "fas fa-dice-d20", label: "Decision Making", progress: 78 }
    ]
  }
];
