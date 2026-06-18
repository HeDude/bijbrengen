export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Projecten",
    items: [
      { label: "Alle projecten", href: "projecten/" },
      { label: "Entreprenasium", href: "entreprenasium/" },
      { label: "Leerparadijs", href: "leerparadijs/" },
      { label: "Leerpretpark", href: "projecten/#leerpretpark" },
      { label: "Humanature", href: "projecten/#humanature" }
    ]
  },
  {
    label: "Diensten",
    items: [
      { label: "Alle diensten", href: "diensten/" },
      { label: "MeTherapy", href: "diensten/#metherapy" },
      { label: "Onderwijsarchitect", href: "diensten/#onderwijsarchitect" },
      { label: "HeDude", href: "hedude/" }
    ]
  },
  { label: "Over ons", href: "over-ons/" }
];

export const heroImages = [
  {
    src: "media/photos/metherapy.webp",
    alt: "MeTherapy"
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
    src: "media/photos/mecoaching.webp",
    alt: "MeCoaching"
  }
];

export const projectOverview = [
  {
    title: "Entreprenasium",
    description: "Ondernemend leren voor leerlingen die hun eigen initiatief willen verbinden aan echte projecten.",
    href: "entreprenasium/",
    image: "media/logos/entreprenasium.svg"
  },
  {
    title: "Leerparadijs",
    description: "Een kleinschalig onderwijsconcept voor jongeren die persoonlijk, passend en ondernemend willen leren.",
    href: "leerparadijs/",
    image: "media/logos/leerparadijs.svg"
  },
  {
    title: "Leerpretpark",
    description: "De leerpret-engine waarin spel, ICT, AI en onderwijs samenkomen in een speelse leeromgeving.",
    href: "projecten/#leerpretpark",
    image: "media/photos/leerparadijs.webp"
  },
  {
    title: "Humanature",
    description: "Een project rond natuur, herstel en harmonie tussen mens, omgeving en duurzame ontwikkeling.",
    href: "projecten/#humanature",
    image: "media/logos/humanature.svg"
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
    href: "diensten/#onderwijsarchitect",
    image: "media/logos/onderwijsarchitect.svg"
  },
  {
    title: "HeDude",
    description: "AI-ondersteuning en technische sparring voor gepersonaliseerd, vrij en ondernemend leren.",
    href: "hedude/"
  }
];
