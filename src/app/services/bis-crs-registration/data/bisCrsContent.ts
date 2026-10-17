export type TocItem = {
  id: string;
  label: string;
};

export type TableRow = {
  [key: string]: string;
};

export type ProcessStep = {
  step: string;
  label: string;
  color: string;
  title: string;
  text: string;
};

export const WHY_ORNATE_ITEMS = [
  "15+ Years of Compliance Expertise",
  "Dedicated BIS Certification Team",
  "End-to-End Documentation Support",
  "Faster Testing & Approval Timelines",
  "Trusted by 5000+ Manufacturers & Importers",
  "Transparent Pricing with No Hidden Costs",
  "Post-Certification Renewal Assistance",
];

export const LATEST_NOTIFICATIONS = [
  {
    date: "12 May 2026",
    title: "BIS CRS timeline update for wireless products",
  },
  {
    date: "28 Apr 2026",
    title: "New Indian Standard amendments for LED lighting products",
  },
  {
    date: "15 Apr 2026",
    title: "BIS portal update: revised factory inspection guidelines",
  },
  {
    date: "02 Apr 2026",
    title: "Mandatory CRS registration expanded for smart wearables",
  },
];

export const OUR_SERVICES_LINKS = [
  { label: "BIS CRS Registration", href: "/services/bis-certification/bis-crs-registration" },
  { label: "BIS ISI Mark Certification", href: "/services/bis-certification/isi-mark-certification" },
  { label: "BIS FMCS Certification", href: "/services/bis-certification/fmcs-certification" },
  { label: "WPC-ETA Approval", href: "/services/wpc-eta-approval" },
  { label: "BEE Registration", href: "/services/bee-certification" },
  { label: "EPR Registration", href: "/services/epr-registration" },
  { label: "GeM Portal Registration", href: "/services/gem-registration" },
  { label: "IEC Registration", href: "/services/iec-registration" },
  { label: "Trademark Registration", href: "/services/trademark-registration" },
  { label: "ISO Certification", href: "/services/iso-certification" },
  { label: "FSSAI Registration", href: "/services/fssai-registration" },
  { label: "CDSCO Registration", href: "/services/cdsco-registration" },
  { label: "PESO / CCOE Registration", href: "/services/ccoe-peso-certification" },
  { label: "NABL Lab Testing Services", href: "/services/nabl-lab-testing-services" },
  { label: "Third Party Inspection", href: "/services/third-party-inspection" },
  { label: "RoHS Certification", href: "/services/rohs-certification" },
  { label: "Audit Services", href: "/services/audit-services" },
  { label: "LMPC Registration", href: "/services/lmpc-registration" },
  { label: "TEC Certification", href: "/services/tec-certification" },
  { label: "CE Certification", href: "/services/ce-certification" },
];

export const BIS_CRS_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-bis", label: "What Is BIS CRS Registration" },
  { id: "importance", label: "Why BIS CRS Registration Is Important" },
  { id: "who-needs", label: "Who Needs BIS CRS Registration" },
  { id: "benefits", label: "Key Benefits of Working With Us" },
  { id: "key-features", label: "Key Features of Our BIS CRS Registration Service" },
  { id: "products-covered", label: "Products Covered Under BIS CRS Registration" },
  { id: "eligibility", label: "Eligibility Criteria" },
  { id: "documents", label: "Documents Required" },
  { id: "process", label: "Step-by-Step BIS CRS Registration Process" },
  { id: "timeline", label: "BIS CRS Registration Timeline" },
  { id: "cost", label: "Cost Factors" },
  { id: "validity", label: "Validity of BIS CRS Registration" },
  { id: "renewal", label: "Renewal of BIS CRS Registration" },
  { id: "challenges", label: "Common Challenges in BIS CRS Registration" },
  { id: "how-we-help", label: "How We Help You" },
  { id: "why-choose", label: "Why Choose Ornate Quality Services" },
  { id: "industries", label: "Industries We Serve" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
  { id: "expert-tips", label: "Expert Tips for a Smooth BIS CRS Registration" },
  { id: "comparison", label: "BIS CRS vs Other Certifications" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Start Your BIS CRS Registration With a Trusted Partner" },
];

export const BANNER_TITLE = "BIS CRS Registration in India";

export const BANNER_SUBTITLE =
  "Trusted BIS CRS Registration Consultant for Electronics, IT & Solar Products";

export const BANNER_DESCRIPTION =
  "Get your BIS CRS registration in India handled end to end — documentation, test report coordination, application filing, and R-Number tracking — by a dedicated BIS CRS registration company built for manufacturers, importers, and foreign manufacturers selling regulated electronics, IT, and solar products in India.";

export const HERO_ITEMS = [
  "Apply for BIS CRS registration online with a dedicated case manager",
  "Documentation assistance and BIS-recognized testing laboratory coordination",
  "Support for Scheme-II (Compulsory Registration Scheme) across mobile phones, laptops, LED lighting, power banks, UPS systems, solar modules, and more",
];

export const INTRO_PARAGRAPHS = [
  "If you manufacture, import, or sell electronics, IT products, or specified solar equipment in India, BIS CRS registration is very likely required before you can legally place that product in the Indian market. Ornate Quality Services provides BIS CRS registration services designed for manufacturers, importers, foreign manufacturers, OEMs, startups, MSMEs, and e-commerce sellers who need an authorized bis crs registration partner rather than a confusing, self-managed process.",
  "This page explains what BIS CRS registration is, who needs it, how the process works, what it costs to work with us, and how our end to end bis crs certification service — from technical documentation to R-Number issuance — keeps your product compliant with the Compulsory Registration Order and ready for sale on marketplaces, retail, and export channels.",
];

export const WHAT_IS_PARAGRAPHS = [
  "BIS CRS registration is the process of registering a product with the Bureau of Indian Standards (BIS) under Scheme-II, commonly known as the Compulsory Registration Scheme. It applies to specified categories under the Electronics and IT Goods (Requirement of Compulsory Registration) Order and related Quality Control Orders issued under the BIS Act, 2016.",
  "Unlike Scheme-I (BIS Product Certification, associated with the ISI mark), BIS CRS registration is built around self-declaration of conformity: the manufacturer or its Authorized Indian Representative (AIR) submits a test report from a BIS-recognized or NABL accredited testing laboratory through the BIS CRS Portal (crsbis.in), and BIS issues a Registration Number, commonly called the R-Number, once the application is reviewed and accepted.",
];

export const WHAT_IS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Compulsory Registration Scheme (CRS)",
    text: "the regulatory scheme name",
  },
  {
    title: "Scheme-II",
    text: "the BIS scheme classification for self-declared conformity registration",
  },
  {
    title: "R-Number",
    text: "the product registration number issued after successful registration",
  },
  {
    title: "Compulsory Registration Order (CRO)",
    text: "the notification that brings a product category under CRS",
  },
  {
    title: "Quality Control Orders (QCOs)",
    text: "the instruments BIS uses to mandate compliance for notified goods",
  },
];

export const WHY_IMPORTANT_INTRO =
  "BIS CRS registration is not an optional quality badge — for CRS-notified products, it is a legal requirement, and selling a notified product without a valid R-Number carries real compliance risk. Ministry of Electronics and Information Technology (MeitY) and BIS market surveillance activity can result in penalties, product seizure, or registration cancellation for non-compliant products, and marketplaces increasingly verify BIS CRS certificates before allowing a listing to go live.";

export const WHY_IMPORTANT_ITEMS: { title: string; text: string }[] = [
  {
    title: "Legal market access",
    text: "CRS-notified products cannot be legally sold in India without registration",
  },
  {
    title: "Consumer protection",
    text: "the scheme exists to keep unsafe electronics and IT goods off Indian shelves",
  },
  {
    title: "Marketplace compliance",
    text: "Amazon and Flipkart increasingly ask sellers to verify their BIS CRS registration before listing regulated products",
  },
  {
    title: "Risk reduction",
    text: "avoids the non-compliance penalty exposure, market surveillance action, and registration cancellation risk that come with unregistered CRS products",
  },
];

export const GUIDELINES_NOTE =
  "Note: Requirements may vary depending on the latest official regulatory guidelines.";

export const WHO_NEEDS_INTRO =
  "BIS CRS registration eligibility and applicability generally extends to the following stakeholders for any product category on the CRS-notified list:";

export const WHO_NEEDS_ITEMS = [
  "Manufacturers producing CRS-notified electronics, IT, or solar products in India",
  "Importers bringing CRS-notified products into India for sale",
  "Foreign manufacturers, who must register through an Authorized Indian Representative (AIR)",
  "OEMs manufacturing on behalf of another brand",
  "Startups and MSMEs launching a new electronics or IT product line",
  "Brand owners and private-label sellers, including Amazon sellers and Flipkart sellers",
  "Exporters to India who need bis crs registration for exporters to india before market entry",
];

export const BENEFITS_ITEMS = [
  "End to end bis crs certification service — one team for documentation, lab coordination, and filing",
  "Professional bis crs registration help — including bis crs registration for bulk product portfolio and bis crs registration for multiple product lines",
  "Technical guidance for bis crs registration from a dedicated case manager",
  "Clear bis crs registration guidance at every stage, so you always know your application status",
  "Transparent bis crs registration pricing with no hidden line items",
  "Reliable bis crs renewal reminders so your registration never lapses unnoticed",
];

export const FEATURES_ITEMS = [
  "BIS CRS lab coordination service with NABL accredited labs and BIS-recognized testing laboratories",
  "BIS CRS registration project management service for complex, multi-product engagements",
  "BIS CRS registration handholding service from application filing through R-Number issuance",
  "BIS crs registration retainer service and annual compliance package options for ongoing coverage",
  "BIS crs documentation service and accurate bis crs documentation support at every submission stage",
  "BIS crs compliance audit support to review your existing registrations against current requirements",
  "BIS crs registration turnkey solution for electronics brand launches",
];

export const PRODUCTS_INTRO =
  "BIS CRS registration applies across a wide range of CRS-notified product categories. The table below lists every product category in our verified Stage 3 programmatic dataset, its applicable Indian Standard (IS Code), and its dedicated product page status. Dedicated product pages are marked “Coming Soon” and will link back to this Service Page as a pillar-cluster content hub once published.";

export const PRODUCTS_NOTE =
  "Note: ‘Mandatory’ reflects membership in the verified CRS-notified product dataset, not a product-specific legal opinion. Requirements may vary depending on the latest official regulatory guidelines.";

const CRS_AUDIENCE =
  "Manufacturers, Importers, Foreign Manufacturers (via AIR), Brand Owners, OEMs";

function productRow(num: number, product: string, isCode: string): TableRow {
  return {
    num: String(num),
    product,
    isCode,
    mandatory: "Yes",
    audience: CRS_AUDIENCE,
    page: "Coming Soon",
  };
}

export const PRODUCTS_ROWS: TableRow[] = [
  productRow(1, "Mobile Phones", "IS/IEC 62368-1"),
  productRow(2, "Smartphones", "IS/IEC 62368-1"),
  productRow(3, "Feature Phones", "IS/IEC 62368-1"),
  productRow(4, "Laptops", "IS/IEC 62368-1"),
  productRow(5, "Tablets", "IS/IEC 62368-1"),
  productRow(6, "Desktop Computers", "IS/IEC 62368-1"),
  productRow(7, "All-in-One PCs", "IS/IEC 62368-1"),
  productRow(8, "LED Luminaires", "IS 10322"),
  productRow(9, "LED Bulbs", "IS 16102"),
  productRow(10, "LED Lamps", "IS 16102"),
  productRow(11, "LED Drivers", "IS 16102 (Part 2)"),
  productRow(12, "LED Modules", "IS 16107"),
  productRow(13, "Power Banks", "IS 16046"),
  productRow(14, "Mobile Phone Chargers", "IS 13252 (Part 1)"),
  productRow(15, "Laptop Power Adapters", "IS 13252 (Part 1)"),
  productRow(16, "USB Chargers", "IS 13252 (Part 1)"),
  productRow(17, "SMPS Units", "IS 13252 (Part 1)"),
  productRow(18, "UPS Systems", "IS 16242"),
  productRow(19, "Inverters", "IS 16242"),
  productRow(20, "Automatic Voltage Stabilizers", "IS 9815"),
  productRow(21, "Microwave Ovens", "IS 302 (Part 2/Sec 25)"),
  productRow(22, "Induction Cooktops", "IS 302 (Part 2/Sec 15)"),
  productRow(23, "LED Televisions", "IS/IEC 62368-1"),
  productRow(24, "Smart TVs", "IS/IEC 62368-1"),
  productRow(25, "Set-Top Boxes", "IS/IEC 62368-1"),
  productRow(26, "CCTV Cameras", "IS/IEC 62368-1"),
  productRow(27, "DVR Video Recorders", "IS/IEC 62368-1"),
  productRow(28, "Printers", "IS/IEC 62368-1"),
  productRow(29, "Scanners", "IS/IEC 62368-1"),
  productRow(30, "Multi-Function Printers", "IS/IEC 62368-1"),
  productRow(31, "External Hard Disk Drives", "IS/IEC 62368-1"),
  productRow(32, "Solid State Drives", "IS/IEC 62368-1"),
  productRow(33, "Wireless Keyboards", "IS/IEC 62368-1"),
  productRow(34, "Wireless Mouse", "IS/IEC 62368-1"),
  productRow(35, "Bluetooth Headphones", "IS/IEC 62368-1"),
  productRow(36, "Bluetooth Earphones", "IS/IEC 62368-1"),
  productRow(37, "Wired Headphones", "IS/IEC 62368-1"),
  productRow(38, "Smart Watches", "IS/IEC 62368-1"),
  productRow(39, "Fitness Bands", "IS/IEC 62368-1"),
  productRow(40, "Bluetooth Speakers", "IS/IEC 62368-1"),
  productRow(41, "Sound Bars", "IS/IEC 62368-1"),
  productRow(42, "Digital Cameras", "IS/IEC 62368-1"),
  productRow(43, "Video Projectors", "IS/IEC 62368-1"),
  productRow(44, "Smart Plugs", "IS/IEC 62368-1"),
  productRow(45, "Solar Photovoltaic Modules", "IS/IEC 61730"),
  productRow(46, "Solar Charge Controllers", "IS 16221"),
  productRow(47, "Electronic Clocks", "IS 302"),
];

export const ELIGIBILITY_INTRO =
  "BIS crs applicability is determined by product category and applicant type. In general terms:";

export const ELIGIBILITY_ITEMS = [
  "Your product category must appear on the CRS-notified list (see Applicable Indian Standards / IS Codes for your category above)",
  "Domestic manufacturers can apply directly; foreign manufacturers must appoint an Authorized Indian Representative (AIR)",
  "Importers, OEMs, startups, and MSMEs are all eligible applicants under the standard bis crs registration eligibility framework",
  "Exporters to India must complete registration before the product is placed in the Indian market",
];

export const DOCUMENTS_INTRO =
  "Every BIS CRS application is supported by a defined set of technical documents and a valid test report. The categories below reflect the documentation areas covered in our bis crs registration checklist and bis crs registration document format review.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    category: "Technical Documents",
    covers: "Product technical documentation reviewed for the BIS CRS application file",
  },
  {
    category: "Test Report",
    covers: "Test report for BIS application from a BIS-recognized or NABL accredited testing laboratory",
  },
  {
    category: "Self-Declaration of Conformity",
    covers: "The manufacturer's declaration that the product conforms to the applicable Indian Standard",
  },
  {
    category: "Authorized Indian Representative (AIR) Details",
    covers: "Required where the applicant is a foreign manufacturer without an Indian office",
  },
  {
    category: "Product Labelling / Format Documentation",
    covers:
      "Documentation confirming the bis crs product labelling requirement is met, including R-Number placement",
  },
];

export const DOCUMENTS_NOTE =
  "Note: The exact document checklist varies by product category and applicant type. Requirements may vary depending on the latest official regulatory guidelines. Our documentation assistance service confirms your specific requirements before filing.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Confirm applicability",
    color: "#0b57b5",
    title: "1. Confirm applicability",
    text: "verify your product category and Applicable Indian Standards (IS Codes)",
  },
  {
    step: "02",
    label: "Documentation assistance",
    color: "#2563eb",
    title: "2. Documentation assistance",
    text: "prepare Technical Documents and the Self-Declaration of Conformity",
  },
  {
    step: "03",
    label: "Testing",
    color: "#0891b2",
    title: "3. Testing",
    text: "BIS CRS lab coordination service with a BIS-recognized or NABL accredited testing laboratory to obtain your test report",
  },
  {
    step: "04",
    label: "Application filing",
    color: "#059669",
    title: "4. Application filing",
    text: "bis crs application filing service through the BIS CRS Portal (crsbis.in)",
  },
  {
    step: "05",
    label: "BIS review",
    color: "#d97706",
    title: "5. BIS review",
    text: "including factory inspection for bis registration where applicable",
  },
  {
    step: "06",
    label: "R-Number issuance",
    color: "#dc2626",
    title: "6. R-Number issuance",
    text: "your product registration number (R-Number) is issued on approval",
  },
  {
    step: "07",
    label: "Labelling and launch",
    color: "#7c3aed",
    title: "7. Labelling and launch",
    text: "apply the R-Number per the bis crs product labelling requirement before sale",
  },
];

export const PROCESS_CLOSING =
  "You can track application status and BIS crs r number search progress through your dedicated case manager throughout the process.";

export const TIMELINE_PARAGRAPH =
  "BIS crs registration timeline and BIS crs registration processing time depend on document readiness, testing laboratory turnaround, and BIS's own review queue. We offer a bis crs fast track registration service and fast bis crs approval support to help minimise avoidable delay on our side of the process, including same day filing once your file is complete.";

export const TIMELINE_NOTE =
  "Note: Exact processing time depends on BIS's review queue, testing turnaround, and the completeness of the application. Requirements may vary depending on the latest official regulatory guidelines.";

export const COST_INTRO =
  "BIS crs registration cost is influenced by several factors, reflected in our bis crs registration fees breakdown and bis crs registration cost estimate process:";

export const COST_FACTORS = [
  "Product category and the applicable testing standard",
  "Number of models or variants covered under bis crs registration for multiple models",
  "Government fee for bis registration, set independently by BIS",
  "Testing laboratory charges for the required test report",
  "Our bis crs registration consultant fees and bis crs registration service charges, based on scope",
];

export const COST_CLOSING =
  "We provide bis crs registration best price india positioning through transparent bis crs registration pricing and a documented bis crs registration package price before work begins — no hidden charges.";

export const COST_NOTE =
  "Note: Exact government and service fees depend on the product category, number of models, and testing requirements, and may change from time to time. Requirements may vary depending on the latest official regulatory guidelines. Our team shares current, itemised figures before any work begins.";

export const VALIDITY_PARAGRAPH =
  "A BIS CRS registration is generally understood to carry a bis crs registration validity two years term from the date of issue, subject to continued compliance with the applicable Indian Standard.";

export const RENEWAL_PARAGRAPH =
  "We recommend starting your bis crs registration renewal process well before the validity period ends. Our reliable bis crs renewal reminders and bis crs registration renewal fees guidance keep your registration active without a compliance gap.";

export const CHALLENGES_ITEMS = [
  "Bis crs registration rejection reasons tied to incomplete or inconsistent documentation",
  "Delays in bis crs lab coordination service scheduling with an available NABL accredited lab",
  "Confusion between bis crs vs isi mark and other overlapping certification schemes",
  "Missed renewal deadlines leading to bis crs registration cancellation risk",
  "Uncertainty around bis crs registration for multiple product lines and model inclusion",
  "Bis crs registration risk of non-compliance from market surveillance action on unregistered SKUs",
];

export const HOW_WE_HELP_INTRO =
  "Ornate Quality Services acts as your outsource bis crs registration partner, providing bis crs registration support services from first document to final R-Number:";

export const HOW_WE_HELP_ITEMS = [
  "Bis crs registration handholding service through every application stage",
  "Bis crs compliance outsourcing services for corporate bis crs compliance needs",
  "Bis crs registration assistance for brands managing a bis crs registration for bulk product portfolio",
  "A dedicated bis crs case manager as your single point of contact",
  "Bis crs registration for electronics brand launch support timed to your go-to-market plan",
];

export const WHY_CHOOSE_ITEMS = [
  "Experienced bis crs consultant team with industry expertise electronics compliance",
  "Trusted bis crs registration company with a verified bis crs registration process",
  "In-house regulatory compliance team, kept up to date with latest bis cro amendments",
  "Ethical bis crs compliance practices and data confidentiality in bis registration service",
  "High bis crs registration success rate across product categories",
  "Client success stories and case studies bis crs registration available on request",
];

export const WHY_CHOOSE_NOTE =
  "Note: Marketing statements above describe our service approach and are not a guarantee of any specific registration outcome. Requirements may vary depending on the latest official regulatory guidelines.";

export const INDUSTRIES_ITEMS = [
  "Manufacturers of consumer electronics, IT, and solar equipment",
  "Importers bringing CRS-notified products into India",
  "Foreign manufacturers, supported through an Authorized Indian Representative (AIR)",
  "OEMs and private-label brand owners",
  "Startups and MSMEs launching regulated hardware products",
  "Amazon sellers and Flipkart sellers listing CRS-notified categories",
  "Exporters to India across mobile devices, computing, lighting, power, and solar segments",
];

export const MISTAKES_ITEMS = [
  "Assuming a product is exempt without checking the current CRS-notified list",
  "Submitting a bis crs application form with incomplete Technical Documents",
  "Using a testing laboratory that is not BIS-recognized or NABL accredited",
  "Missing the bis crs registration renewal window and risking a compliance gap",
  "Treating bis crs registration for multiple models as a single, identical filing without checking bis crs registration inclusion of model requirements",
  "Ignoring the bis crs product labelling requirement after the R-Number is issued",
];

export const EXPERT_TIPS = [
  "Start documentation assistance early, before your product launch date is fixed",
  "Confirm your Applicable Indian Standards (IS Codes) before committing to a testing laboratory",
  "Use a NABL accredited lab to avoid test report rejection risk",
  "Track your bis crs registration status check and R-Number search regularly",
  "Set a renewal reminder well ahead of your bis crs registration validity two years deadline",
  "Work with an authorized bis crs registration partner if you are a foreign manufacturer without an Indian office",
];

export const COMPARISON_INTRO =
  "BIS CRS registration is often confused with adjacent certification and compliance schemes. The table below gives a high-level comparison; always confirm current scope and applicability for your specific product with BIS or a qualified consultant.";

export const COMPARISON_ROWS: TableRow[] = [
  {
    comparison: "BIS CRS vs ISI Mark",
    differs:
      "BIS CRS (Scheme-II) uses self-declaration of conformity for notified electronics/IT goods; the ISI mark (Scheme-I) is a separate BIS product certification and licensing route for other specified goods.",
  },
  {
    comparison: "BIS CRS Registration vs BIS License (Scheme-I)",
    differs:
      "CRS registration and a Scheme-I BIS license are different BIS pathways with different documentation and ongoing obligations.",
  },
  {
    comparison: "BIS CRS vs FMCS",
    differs:
      "FMCS applies to a different set of notified categories than the Electronics and IT Goods CRS order; applicability depends on the product category.",
  },
  {
    comparison: "BIS CRS vs WPC ETA Certification",
    differs:
      "WPC ETA approval concerns wireless/radio-frequency equipment clearance and is a separate approval from BIS CRS registration.",
  },
  {
    comparison: "BIS CRS vs BEE Star Rating",
    differs:
      "BEE star rating addresses energy efficiency labelling; BIS CRS addresses safety and quality registration under Scheme-II.",
  },
  {
    comparison: "BIS CRS vs CE Marking / FCC Certification",
    differs:
      "CE and FCC are certification marks used outside India (EU and US respectively) and do not substitute for Indian BIS CRS registration.",
  },
  {
    comparison: "BIS CRS Self Registration vs Consultant-Assisted Registration",
    differs:
      "Self registration is handled directly by the applicant; consultant-assisted registration adds documentation, lab coordination, and filing support through a bis crs registration consultant.",
  },
  {
    comparison: "Scheme-I vs Scheme-II (BIS)",
    differs:
      "Scheme-I is BIS's certification/licensing route (associated with the ISI mark); Scheme-II is the Compulsory Registration Scheme built around self-declaration of conformity.",
  },
  {
    comparison: "Mandatory Certification vs Voluntary Certification (BIS)",
    differs:
      "CRS-notified categories require mandatory registration; other BIS marks may be voluntary depending on the product.",
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is BIS CRS registration?",
    a: "BIS CRS registration is the process of registering a CRS-notified electronics, IT, or solar product with the Bureau of Indian Standards under Scheme-II, based on self-declaration of conformity backed by a test report.",
  },
  {
    q: "Is BIS CRS registration mandatory in India?",
    a: "Yes, for product categories on the CRS-notified list under the Electronics and IT Goods (Requirement of Compulsory Registration) Order. Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "Who needs BIS CRS registration?",
    a: "Manufacturers, importers, foreign manufacturers (via an Authorized Indian Representative), OEMs, startups, MSMEs, and exporters to India dealing in CRS-notified products.",
  },
  {
    q: "How much does BIS CRS registration cost?",
    a: "Cost depends on product category, number of models, testing charges, and the government fee. Exact government and service fees depend on the product category, number of models, and testing requirements, and may change from time to time. Requirements may vary depending on the latest official regulatory guidelines. Our team shares current, itemised figures before any work begins.",
  },
  {
    q: "How long does BIS CRS registration take?",
    a: "Timeline depends on document readiness, testing laboratory turnaround, and BIS's review queue. Exact processing time depends on BIS's review queue, testing turnaround, and the completeness of the application. Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "What is the validity of a BIS CRS certificate?",
    a: "BIS CRS registration is generally understood to carry a two-year validity term from issue, subject to compliance. Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "What is an R-Number in BIS registration?",
    a: "The R-Number is the registration number BIS issues once a CRS application is reviewed and approved. It must appear on the product per the labelling requirement.",
  },
  {
    q: "What is the difference between BIS and BIS CRS?",
    a: "BIS is the Bureau of Indian Standards, the regulator. BIS CRS is one specific scheme it administers — Scheme-II, the Compulsory Registration Scheme — for notified electronics and IT goods.",
  },
  {
    q: "What is Scheme-II under BIS?",
    a: "Scheme-II is the Compulsory Registration Scheme: a self-declaration-of-conformity route for CRS-notified product categories, distinct from Scheme-I product certification/licensing.",
  },
  {
    q: "What products need BIS CRS registration?",
    a: "CRS-notified electronics, IT, and specified solar product categories — see the Products Covered table above for the verified list we work with.",
  },
  {
    q: "Can a foreign manufacturer apply for BIS CRS directly?",
    a: "Foreign manufacturers generally apply through an Authorized Indian Representative (AIR) rather than directly. Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "What is an Authorized Indian Representative?",
    a: "An Authorized Indian Representative (AIR) is the India-based entity authorised to act for a foreign manufacturer in the BIS CRS registration process.",
  },
  {
    q: "What documents are required for BIS CRS registration?",
    a: "Technical Documents, a test report from a BIS-recognized or NABL accredited lab, a Self-Declaration of Conformity, and AIR details where applicable. See the Documents Required table above.",
  },
  {
    q: "How do I renew my BIS CRS registration?",
    a: "Start the renewal process before your validity period ends; we send reliable renewal reminders and guide the renewal filing. Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "Is BIS CRS the same as ISI mark?",
    a: "No. BIS CRS (Scheme-II) and the ISI mark (associated with Scheme-I) are different BIS pathways — see the Comparison Table above.",
  },
  {
    q: "What is self-declaration of conformity?",
    a: "It is the manufacturer's formal declaration that a product conforms to the applicable Indian Standard, submitted as part of the BIS CRS application.",
  },
  {
    q: "Where can I check my BIS CRS registration status?",
    a: "Status can be tracked through the BIS CRS Portal (crsbis.in) or through your dedicated case manager if you work with our team.",
  },
  {
    q: "What is a Compulsory Registration Order?",
    a: "A Compulsory Registration Order (CRO) is the notification under which a product category is brought under the CRS registration requirement.",
  },
  {
    q: "What is a Quality Control Order?",
    a: "A Quality Control Order (QCO) is a regulatory instrument BIS uses to mandate compliance for notified goods under the BIS Act, 2016.",
  },
  {
    q: "How do I find a BIS-recognized testing laboratory?",
    a: "Our BIS CRS lab coordination service identifies a BIS-recognized or NABL accredited testing laboratory suited to your product category.",
  },
  {
    q: "Can I sell on Amazon without BIS CRS registration?",
    a: "Marketplaces increasingly verify BIS CRS registration before allowing CRS-notified product listings to go live. Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "What is the penalty for not having BIS CRS registration?",
    a: "Non-compliance can carry penalty and market surveillance risk under the BIS Act, 2016. Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "How can Ornate Quality Services help me get BIS CRS registration faster?",
    a: "Through our fast track registration service, same-day filing once documents are complete, and dedicated case management that reduces avoidable delay on our side of the process.",
  },
  {
    q: "What is the total cost of BIS CRS registration including testing and consultant fees?",
    a: "Exact government and service fees depend on the product category, number of models, and testing requirements, and may change from time to time. Requirements may vary depending on the latest official regulatory guidelines. Our team shares current, itemised figures before any work begins.",
  },
  {
    q: "Can you help me select a BIS-recognized testing laboratory for my product?",
    a: "Yes — BIS CRS lab coordination is part of our end-to-end service, matching your product to a suitable NABL accredited or BIS-recognized lab.",
  },
  {
    q: "What is your typical turnaround time for standard BIS CRS applications?",
    a: "Exact processing time depends on BIS's review queue, testing turnaround, and the completeness of the application. Requirements may vary depending on the latest official regulatory guidelines.",
  },
];

export const CTA_HEADING = "Start Your BIS CRS Registration With a Trusted Partner";

export const CTA_PARAGRAPH =
  "Talk to a BIS CRS registration expert today and get a transparent bis crs registration cost estimate for your product portfolio. Whether you need registration for a single product or bis crs registration for multiple product lines, our end to end bis crs certification service keeps you compliant and market-ready.";
