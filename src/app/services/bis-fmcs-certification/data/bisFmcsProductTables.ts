export type FmcsProductRow = {
  product: string;
  isNumber: string;
  mandatory: string;
  dedicatedPage: string;
};

export const CONSTRUCTION_PRODUCTS: FmcsProductRow[] = [
  {
    product: "Cement",
    isNumber: "IS 269, IS 8112, IS 12269, IS 1489 (Parts 1 & 2), IS 12330, IS 455 (grade-dependent)",
    mandatory: "Yes — Cement (Quality Control) Order, 2003",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Steel bars and rods",
    isNumber: "IS 1786",
    mandatory: "Yes — Steel and Steel Products (Quality Control) Order",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Building blocks (e.g. AAC / cellular concrete blocks)",
    isNumber: "IS 2185 (Part 3)",
    mandatory: "Not confirmed as mandatory in our review — confirm current QCO status with BIS",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Roofing sheets (GI plain / corrugated)",
    isNumber: "IS 277",
    mandatory: "Yes, under the steel-sheet QCO — confirm exact order name/date",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Tiles (ceramic tiles)",
    isNumber: "IS 15622",
    mandatory: "Yes — confirm exact order name/date",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Safety glass",
    isNumber: "IS 2553 (Part 1) architectural, (Part 2) road transport",
    mandatory: "Yes — Safety Glass (Quality Control) Order, 2020, as amended",
    dedicatedPage: "Coming Soon",
  },
];

export const ELECTRICAL_PRODUCTS: FmcsProductRow[] = [
  {
    product: "Geysers / water heaters",
    isNumber: "IS 302 (Part 2/Sec 21), IS 2082",
    mandatory: "Yes",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Electric motors",
    isNumber: "IS 12615",
    mandatory: "Yes — Energy Efficient Induction Motors (Three Phase Squirrel Cage) (Quality Control) Order, 2017, as amended",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Transformers",
    isNumber: "IS 1180 (Part 1) — outdoor oil-immersed distribution transformers up to 2500 kVA, 33 kV",
    mandatory: "Yes, for this scope — confirm coverage for power transformers separately",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Pressure cookers",
    isNumber: "IS 2347",
    mandatory: "Yes — confirm exact order name/date",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Kitchen appliances",
    isNumber: "Varies by appliance under IS 302 (Part 2) sections",
    mandatory: "Likely yes under the household-appliances QCO — confirm the exact sub-standard per appliance",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Switches and sockets",
    isNumber: "IS 3854 (switches), IS 1293 (plugs / socket-outlets)",
    mandatory: "Yes — confirm exact QCO date",
    dedicatedPage: "Coming Soon",
  },
];

export const AUTOMOTIVE_PRODUCTS: FmcsProductRow[] = [
  {
    product: "Automotive tyres",
    isNumber: "IS 15627 (2/3-wheeler), IS 15633 (passenger car), IS 15636 (commercial vehicle), IS 13098 (tubes)",
    mandatory: "Yes — Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Vehicle safety glass",
    isNumber: "IS 2553 (Part 2)",
    mandatory: "Yes — Safety Glass (Quality Control) Order",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Auto electrical parts (e.g. wiring harness)",
    isNumber: "Not confirmed in our review",
    mandatory: "Not confirmed as a BIS QCO item as of this review — confirm directly with BIS",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Brake components (e.g. brake fluid)",
    isNumber: "IS 8654 (standard exists)",
    mandatory: "Not confirmed as mandatory in our review — confirm current QCO status",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Seat belts",
    isNumber: "Not confirmed in our review",
    mandatory: "Not confirmed as a BIS QCO item — seat belts are generally governed by CMVR / AIS homologation, not a standalone BIS QCO",
    dedicatedPage: "Coming Soon",
  },
];

export const METALS_STEEL_PRODUCTS: FmcsProductRow[] = [
  {
    product: "Steel bars",
    isNumber: "IS 1786",
    mandatory: "Yes — Steel and Steel Products (Quality Control) Order",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Structural Steel — Part 1 Hot Rolled Medium and High Tensile Steel",
    isNumber: "IS 2062 Part 1",
    mandatory: "Yes — Steel and Steel Products (Quality Control) Order",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Structural Steel — Part 2 Hot Rolled Quenched and Tempered Steel Plates, Sheets, Strips and Wide Flats",
    isNumber: "IS 2062 Part 2",
    mandatory: "Yes",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Stainless steel products",
    isNumber: "IS 6911 (sheet / plate / strip); IS 17875 & IS 17876 (pipes / tubes)",
    mandatory: "Yes — Steel and Steel Products QCO (sheet / plate / strip); separate Stainless Steel Pipes and Tubes (Quality Control) Order, 2025 (pipes / tubes)",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Steel pipes and tubes (non-stainless)",
    isNumber: "IS 1239, IS 3589 (standards exist)",
    mandatory: "Not directly confirmed for these specific standards in our review — confirm current QCO linkage",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Steel wires",
    isNumber: "IS 2266 (steel wire ropes)",
    mandatory: "Yes for wire ropes; plain steel wire (IS 280) QCO status not confirmed in our review",
    dedicatedPage: "Coming Soon",
  },
];

export const CHEMICAL_PRODUCTS: FmcsProductRow[] = [
  {
    product: "Industrial chemicals (e.g. caustic soda)",
    isNumber: "IS 252",
    mandatory: "Yes — Caustic Soda (Quality Control) Order, effective 2018",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Consumer chemical products (e.g. detergents, toilet soap)",
    isNumber: "IS 4955 (detergents), IS 2888 (toilet soap)",
    mandatory: "Likely yes — confirm exact order name/date per product",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Paints and varnishes (e.g. synthetic enamel)",
    isNumber: "IS 2932",
    mandatory: "Not confirmed as mandatory in our review — confirm current QCO status",
    dedicatedPage: "Coming Soon",
  },
];

export const TOY_PRODUCTS: FmcsProductRow[] = [
  {
    product: "Electronic toys",
    isNumber: "IS 15644 (Safety of Electric Toys)",
    mandatory: "Yes — Toys (Quality Control) Order, 2020",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Non-electronic toys",
    isNumber: "IS 9873 (Part 1), plus related parts covering flammability, migration of elements and age-labelling",
    mandatory: "Yes — Toys (Quality Control) Order, 2020",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Plastic toys",
    isNumber: "IS 9873 (Part 1 and related parts)",
    mandatory: "Yes — Toys (Quality Control) Order, 2020",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Battery-operated toys",
    isNumber: "IS 15644, plus applicable parts of IS 9873",
    mandatory: "Yes — Toys (Quality Control) Order, 2020",
    dedicatedPage: "Coming Soon",
  },
];

export const FURNITURE_PRODUCTS: FmcsProductRow[] = [
  {
    product: "Work chairs (office / ergonomic / task chairs)",
    isNumber: "IS 17631:2022",
    mandatory: "Yes — Furniture (Quality Control) Order, 2025 (in force from 13 Feb 2026)",
    dedicatedPage: "/services/bis-fmcs-certification/furniture",
  },
  {
    product: "General-purpose chairs and stools",
    isNumber: "IS 17632:2022",
    mandatory: "Yes — Furniture (Quality Control) Order, 2025",
    dedicatedPage: "/services/bis-fmcs-certification/furniture",
  },
  {
    product: "Tables and desks",
    isNumber: "IS 17633:2022",
    mandatory: "Yes — Furniture (Quality Control) Order, 2025",
    dedicatedPage: "/services/bis-fmcs-certification/furniture",
  },
  {
    product: "Storage units (wardrobes, cabinets, bookshelves)",
    isNumber: "IS 17634:2022",
    mandatory: "Yes — Furniture (Quality Control) Order, 2025",
    dedicatedPage: "/services/bis-fmcs-certification/furniture",
  },
  {
    product: "Beds",
    isNumber: "IS 17635:2022",
    mandatory: "Yes — Furniture (Quality Control) Order, 2025",
    dedicatedPage: "/services/bis-fmcs-certification/furniture",
  },
  {
    product: "Bunk beds",
    isNumber: "IS 17636:2022",
    mandatory: "Yes — Furniture (Quality Control) Order, 2025",
    dedicatedPage: "/services/bis-fmcs-certification/furniture",
  },
];

export const FOOTWEAR_PRODUCTS: FmcsProductRow[] = [
  {
    product: "Leather footwear (safety, protective, canvas, sports, service footwear)",
    isNumber:
      "IS 1989 (Parts 1 & 2), IS 11226, IS 14544, IS 3735/3736, IS 3976, IS 15844 (Parts 1–3), IS 17012, IS 17037, IS 17043 (Parts 1 & 2) — coverage depends on the exact footwear type",
    mandatory: "Yes — Footwear made from Leather and other Materials (Quality Control) Order, 2024",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Rubber and polymeric footwear (sandals, slippers, industrial / municipal boots)",
    isNumber:
      "IS 6721, IS 10702, IS 5557 (Parts), IS 6719, IS 12254, IS 16645, IS 16994 — coverage depends on the exact footwear type",
    mandatory: "Yes — Footwear made from all Rubber and all Polymeric Material (Quality Control) Order, 2024",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Safety and protective (PPE) footwear",
    isNumber: "IS 15298 (Part 2) safety, (Part 3) protective, (Part 4) occupational",
    mandatory: "Yes — Personal Protective Equipment – Footwear (Quality Control) Order, as amended",
    dedicatedPage: "Coming Soon",
  },
];
