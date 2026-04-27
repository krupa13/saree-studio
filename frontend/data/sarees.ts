export type Saree = {
  id: string;
  name: string;
  description: string;
  images: string[];
};

export const sarees: Saree[] = [
  {
    id: "kanjivaram-silk",
    name: "Kanjivaram Silk Saree",
    description: "Temple borders, luminous silk, and heirloom bridal grandeur.",
    images: ["/gallery/kanjivaram-silk/kanjivaram-silk-01.jpg"]
  },
  {
    id: "banarasi-brocade",
    name: "Banarasi Brocade Saree",
    description: "Gold zari woven with Mughal florals and festive opulence.",
    images: [
      "/gallery/banarasi-brocade/banarasi-brocade-01.jpg",
      "/gallery/banarasi-brocade/banarasi-brocade-02.jpg",
      "/gallery/banarasi-brocade/banarasi-brocade-03.jpg"
    ]
  },
  {
    id: "chanderi-cotton",
    name: "Chanderi Cotton Saree",
    description: "Feather-light cotton silk with quiet shimmer and grace.",
    images: ["/gallery/chanderi-cotton/chanderi-cotton-01.jpg", "/gallery/chanderi-cotton/chanderi-cotton-02.jpg"]
  },
  {
    id: "bandhani-tie-dye",
    name: "Bandhani Tie-Dye Saree",
    description: "Joyful dotted resist-dye artistry from Gujarat and Rajasthan.",
    images: ["/gallery/bandhani-tie-dye/bandhani-tie-dye-01.jpg"]
  },
  {
    id: "patola-double-ikat",
    name: "Patola Double Ikat Saree",
    description: "Geometric precision, jewel tones, and rare weaving mastery.",
    images: ["/gallery/patola-double-ikat/patola-double-ikat-01.jpg"]
  },
  {
    id: "kalamkari-printed",
    name: "Kalamkari Printed Saree",
    description: "Mythic hand-drawn stories in earthy, painterly palettes.",
    images: ["/gallery/kalamkari-printed/kalamkari-printed-01.jpg"]
  },
  {
    id: "pochampally-ikat",
    name: "Pochampally Ikat Saree",
    description: "Rhythmic ikat motifs with crisp Telangana craft heritage.",
    images: [
      "/gallery/pochampally-ikat/pochampally-ikat-01.jpg",
      "/gallery/pochampally-ikat/pochampally-ikat-02.jpg",
      "/gallery/pochampally-ikat/pochampally-ikat-03.jpg"
    ]
  },
  {
    id: "mysore-crepe-silk",
    name: "Mysore Crepe Silk Saree",
    description: "Fluid crepe silk with understated sheen and refined fall.",
    images: [
      "/gallery/mysore-crepe-silk/mysore-crepe-silk-01.jpg",
      "/gallery/mysore-crepe-silk/mysore-crepe-silk-02.jpg",
      "/gallery/mysore-crepe-silk/mysore-crepe-silk-03.jpg"
    ]
  }
];
