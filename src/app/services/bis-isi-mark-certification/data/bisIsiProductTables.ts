export type IsiProductRow = {
  product: string;
  isNumber: string;
  mandatory: string;
  audience: string;
  dedicatedPage: string;
};

export type IsiQcoRow = {
  category: string;
  qco: string;
  gazette: string;
  keyDates: string;
  status: string;
};

export const PRODUCTS_COVERED: IsiProductRow[] = [
  {
    product: "TMT Bars",
    isNumber: "IS 1786",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Structural Steel",
    isNumber: "IS 2062",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Cement",
    isNumber: "IS 269 / IS 1489",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Household Electrical Appliances",
    isNumber: "IS 302 (Part 1)",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Switches and MCBs",
    isNumber: "IS 3854 / IS 8828",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Cables and Wires",
    isNumber: "IS 694 / IS 1554",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "LED Products",
    isNumber: "IS 16102",
    mandatory:
      "Mandatory — confirm scope; some lighting/electronics categories fall under BIS CRS rather than Scheme-I, verify which route applies",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "LPG Stoves",
    isNumber: "IS 4246",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Pressure Cookers",
    isNumber: "IS 2347",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Helmets",
    isNumber: "IS 4151",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Multipurpose Dry Batteries",
    isNumber: "IS 8144 (corrected — see note above)",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Packaged Drinking Water",
    isNumber: "IS 14543",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "PVC Pipes",
    isNumber: "IS 4985",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Toys",
    isNumber: "IS 9873 (Parts 1/2/3/4/7/9) + IS 15644",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Footwear",
    isNumber: "Multiple standards by footwear type — see expanded note below",
    mandatory: "Mandatory — confirm scope by footwear type against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "/services/bis-isi-mark-certification/footwear",
  },
  {
    product: "Stainless Steel Utensils / Cookware",
    isNumber:
      "IS 15263 (sheet/strip) or IS 14756 (finished cookware/utensils) — confirm which applies to your product",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Taps and Sanitary Fittings",
    isNumber: "IS 8931",
    mandatory: "Mandatory — confirm against applicable QCO/Gazette Notification",
    audience: "Manufacturer",
    dedicatedPage: "Coming Soon",
  },
  {
    product: "Work Chairs",
    isNumber: "IS 17631:2022",
    mandatory: "Mandatory — Furniture QCO now in force, confirm your enterprise's applicable enforcement date",
    audience: "Manufacturer",
    dedicatedPage: "/services/bis-isi-mark-certification/furniture",
  },
  {
    product: "General-Purpose Chairs & Stools",
    isNumber: "IS 17632:2022",
    mandatory: "Mandatory — Furniture QCO now in force, confirm your enterprise's applicable enforcement date",
    audience: "Manufacturer",
    dedicatedPage: "/services/bis-isi-mark-certification/furniture",
  },
  {
    product: "Tables & Desks",
    isNumber: "IS 17633:2022",
    mandatory: "Mandatory — Furniture QCO now in force, confirm your enterprise's applicable enforcement date",
    audience: "Manufacturer",
    dedicatedPage: "/services/bis-isi-mark-certification/furniture",
  },
  {
    product: "Storage Units",
    isNumber: "IS 17634:2022",
    mandatory: "Mandatory — Furniture QCO now in force, confirm your enterprise's applicable enforcement date",
    audience: "Manufacturer",
    dedicatedPage: "/services/bis-isi-mark-certification/furniture",
  },
  {
    product: "Beds",
    isNumber: "IS 17635:2022",
    mandatory: "Mandatory — Furniture QCO now in force, confirm your enterprise's applicable enforcement date",
    audience: "Manufacturer",
    dedicatedPage: "/services/bis-isi-mark-certification/furniture",
  },
  {
    product: "Bunk Beds",
    isNumber: "IS 17636:2022",
    mandatory: "Mandatory — Furniture QCO now in force, confirm your enterprise's applicable enforcement date",
    audience: "Manufacturer",
    dedicatedPage: "/services/bis-isi-mark-certification/furniture",
  },
];

export const QCO_ROWS: IsiQcoRow[] = [
  {
    category: "TMT Bars, Structural Steel",
    qco: "Steel and Steel Products (Quality Control) Order, 2024 (Ministry of Steel)",
    gazette: "S.O. 574(E)",
    keyDates: "Notified 5 Feb 2024",
    status: "Order confirmed; please confirm TMT Bars/Structural Steel appear in its product schedule",
  },
  {
    category: "Cement",
    qco: "Cement (Quality Control) Order, 2003 (DPIIT)",
    gazette: "S.O. 191(E)",
    keyDates: "Notified 17 Feb 2003",
    status:
      'Confirmed — order refers to "the Specified Standard" generically; IS 269/IS 1489 apply per BIS product manuals',
  },
  {
    category: "Household Electrical Appliances",
    qco: "Safety of Household, Commercial and Similar Electrical Appliances QCO",
    gazette: "S.O. 4098(E)",
    keyDates: "Notified 17 Sept 2024",
    status: "Confirmed",
  },
  {
    category: "Switches and MCBs",
    qco: "Switches for Domestic and Similar Purposes QCO (and related MCB order)",
    gazette: "Not independently confirmed this pass",
    keyDates: "—",
    status: "Verify on bis.gov.in / egazette.gov.in",
  },
  {
    category: "Cables and Wires",
    qco: "Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003",
    gazette: "Exact S.O. number not independently confirmed this pass",
    keyDates: "Order dated 2003",
    status: "Verify on bis.gov.in / egazette.gov.in",
  },
  {
    category: "LED Products",
    qco: "Self-Ballasted LED Lamps QCO (or BIS CRS, depending on product)",
    gazette: "Not independently confirmed this pass",
    keyDates: "—",
    status: "Confirm whether Scheme-I or CRS applies, then verify reference",
  },
  {
    category: "LPG Stoves",
    qco: "Domestic Gas Stoves QCO",
    gazette: "Not independently confirmed this pass",
    keyDates: "—",
    status: "Verify on bis.gov.in / egazette.gov.in",
  },
  {
    category: "Pressure Cookers",
    qco: "Domestic Pressure Cooker (Quality Control) Order, 2020",
    gazette: "Exact S.O. number not independently confirmed this pass",
    keyDates: "Implementation 1 Aug 2020",
    status: "IS 2347:2017 and implementation date confirmed; S.O. number to verify",
  },
  {
    category: "Helmets",
    qco: "Protective Helmets for Two-Wheeler Riders QCO",
    gazette: "Not independently confirmed this pass",
    keyDates: "—",
    status: "Verify on bis.gov.in / egazette.gov.in",
  },
  {
    category: "Multipurpose Dry Batteries",
    qco: "Multipurpose Dry Batteries QCO",
    gazette: "Not independently confirmed this pass",
    keyDates: "—",
    status: "Verify on bis.gov.in / egazette.gov.in",
  },
  {
    category: "Packaged Drinking Water",
    qco: "Packaged Drinking Water QCO",
    gazette: "Not independently confirmed this pass",
    keyDates: "—",
    status: "Verify on bis.gov.in / egazette.gov.in",
  },
  {
    category: "PVC Pipes",
    qco: "Unplasticized PVC Pipes QCO",
    gazette: "Not independently confirmed this pass",
    keyDates: "—",
    status: "Verify on bis.gov.in / egazette.gov.in",
  },
  {
    category: "Toys",
    qco: "Toys (Quality Control) Order, 2020, as amended",
    gazette: "S.O. 853(E); amended by S.O. 4277(E)",
    keyDates: "Notified 25 Feb 2020, implementation 1 Sept 2020; amendment 30 Sept 2024",
    status: "Confirmed",
  },
  {
    category: "Footwear (general)",
    qco: "Footwear made from Leather and other Materials (Quality Control) Order, 2024",
    gazette: "S.O. 1421(E)",
    keyDates: "Notified 15 Mar 2024, commencement 1 Aug 2024",
    status: "Confirmed",
  },
  {
    category: "Footwear (safety/PPE)",
    qco: "Separate PPE-footwear standard track (IS 15298)",
    gazette: "Not independently confirmed this pass",
    keyDates: "—",
    status: "Verify which QCO governs safety footwear specifically",
  },
  {
    category: "Stainless Steel Utensils / Cookware",
    qco: "Cookware and Utensils QCO",
    gazette: "Not independently confirmed this pass",
    keyDates: "—",
    status: "Confirm IS 15263 vs IS 14756 scope, then verify reference",
  },
  {
    category: "Taps and Sanitary Fittings",
    qco: "Not independently confirmed this pass",
    gazette: "—",
    keyDates: "—",
    status: "Verify on bis.gov.in / egazette.gov.in",
  },
  {
    category: "Furniture (all 6 categories)",
    qco: "Furniture (Quality Control) Order, 2025",
    gazette: "S.O. 801(E)",
    keyDates: "Notified 13 Feb 2025; enforcement 13 Feb 2026 (general), 13 Aug 2026 (micro & small enterprises)",
    status: "Confirmed",
  },
];
