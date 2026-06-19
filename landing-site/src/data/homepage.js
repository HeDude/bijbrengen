export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Projecten",
    items: [
      { label: "Alle projecten", href: "projecten/" },
      { label: "Leerpretpark", href: "projecten/#leerpretpark" },
      { label: "Entreprenasium", href: "entreprenasium/" },
      { label: "Leerparadijs", href: "leerparadijs/" },
      { label: "Humanature", href: "projecten/#humanature" }
    ]
  },
  {
    label: "Diensten",
    items: [
      { label: "Alle diensten", href: "diensten/" },
      { label: "MeTherapy", href: "diensten/#metherapy" },
      { label: "Onderwijsarchitect", href: "onderwijsarchitect/" },
      { label: "HeDude", href: "hedude/" }
    ]
  },
  { label: "Over ons", href: "over-ons/" }
];

export const heroImages = [
  {
    src: "media/photos/praktijkruimte.jpeg",
    alt: "Praktijkruimte Wijster"
  },
  {
    src: "media/photos/humanature.webp",
    alt: "Humanature"
  },
  {
    src: "media/photos/entreprenasium.webp",
    alt: "Entreprenasium"
  },
  {
    src: "media/photos/leerparadijs.webp",
    alt: "Leerparadijs"
  },
  {
    src: "media/photos/oa_hackathon.jpg",
    alt: "Onderwijsarchitect Hackathon"
  }
];

export const projectOverview = [
  {
    title: "Leerpretpark",
    description: "Het lopende kerninitiatief van Bijbrengen: een innovatieve leerpret-engine waarin spel, ICT, AI en onderwijs samenkomen in een actieve ontwikkelfase.",
    href: "projecten/#leerpretpark",
    image: "media/logos/leerpretpark.svg",
    status: "active",
    statusLabel: "Lopend project"
  },
  {
    title: "Entreprenasium",
    description: "Dit afgeronde pioniersproject rond ondernemend leren is inmiddels duurzaam verankerd; de methodes en cursussen blijven vrij beschikbaar.",
    href: "entreprenasium/",
    image: "media/logos/entreprenasium.svg",
    status: "realized",
    statusLabel: "Gerealiseerd"
  },
  {
    title: "Leerparadijs",
    description: "Een gerealiseerd onderwijsconcept voor unieke jongeren. De opgedane kennis en materialen zijn geborgd en blijven actief inspireren.",
    href: "leerparadijs/",
    image: "media/logos/leerparadijs.svg",
    status: "realized",
    statusLabel: "Gerealiseerd"
  },
  {
    title: "Humanature",
    description: "Een gerealiseerd project rond mens en natuur. Gestart in Nederland en voortgezet in Coutada (Portugal), waar de resultaten nog dagelijks doorwerken.",
    href: "projecten/#humanature",
    image: "media/logos/humanature.svg",
    status: "realized",
    statusLabel: "Gerealiseerd"
  }
];

export const serviceOverview = [
  {
    title: "MeTherapy",
    description: "Integrale psychosociale therapie, hypnotherapie en persoonlijke begeleiding vanuit de Bijbrengen-visie.",
    href: "diensten/#metherapy",
    image: "media/logos/metherapy.webp"
  },
  {
    title: "Onderwijsarchitect",
    description: "Begeleiding bij het ontwerpen van onderwijs, leeromgevingen en ICT-rijke leertrajecten.",
    href: "onderwijsarchitect/",
    image: "media/logos/onderwijsarchitect.svg"
  },
  {
    title: "HeDude",
    description: "AI-ondersteuning en technische sparring voor gepersonaliseerd, vrij en ondernemend leren.",
    href: "hedude/",
    image: "media/photos/hedude_logo.jpg"
  }
];
