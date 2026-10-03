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

export const FRI_TOC: TocItem[] = [
  { id: "introduction", label: "Why Check Goods Before They Ship?" },
  { id: "what-is", label: "What Is Final Random Inspection (FRI)?" },
  { id: "why-important", label: "Why Is Final Random Inspection Important?" },
  { id: "who-needs", label: "Who Needs Final Random Inspection Services?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "features", label: "Key Features" },
  { id: "eligibility", label: "Eligibility" },
  { id: "documents", label: "Documents and Information Required" },
  { id: "process", label: "Step-by-Step Final Random Inspection Procedure" },
  { id: "aql", label: "AQL Sampling Explained" },
  { id: "inspector-checks", label: "What the Inspector Checks" },
  { id: "report", label: "Your FRI Report and Verdict" },
  { id: "timeline", label: "Timeline" },
  { id: "cost", label: "Cost Factors" },
  { id: "validity", label: "Validity" },
  { id: "renewal", label: "Re-inspection and Repeat Orders" },
  { id: "challenges", label: "Common Challenges" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "industries", label: "Industries We Serve" },
  { id: "products", label: "Products and Categories Covered" },
  { id: "locations", label: "Locations We Cover" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "FRI Compared with Other Inspection Types" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Your Next Shipment Checked" },
];

export const BANNER_TITLE = "Final Random Inspection (FRI) Services in India";

export const BANNER_SUBTITLE =
  "Independent, AQL-based final random inspection that checks yours finished, packed goods at the supplier's factory in India — before goods leave the factory and before you release payment.";

export const WHAT_YOU_GET: string[] = [
  "ISO 2859-1 compliant sampling at the agreed AQL levels",
  "Photo and video documented reports with a clear pass, fail or pending verdict",
  "Workmanship, quantity, packing and labelling checks based on buyer specifications",
  "On-site tests matched to your product, from carton drop tests to function tests",
  "Inspectors in major manufacturing hubs, coordinated by one team",
  "Certification and inspection under one roof for products that also need Indian compliance",
];

export const INTRO_TITLE = "Introduction: Why Check Goods Before They Ship?";

export const INTRO_PARAGRAPHS: string[] = [
  "A final random inspection is the last quality check before your order leaves the supplier. An inspector visits the factory, picks randomly selected cartons from finished and packed goods, and checks a statistical sample against your approved sample and specifications. You get a detailed report with photographs, and you decide whether to approve shipment or ask the supplier to fix problems first. If you want extra evidence, you can ask for final random inspection with photos and video.",
  "For importers, brand owners, buying agents and e-commerce sellers, this matters for a simple reason. Once goods are loaded and paid for, fixing a quality problem becomes slow and expensive. Defects found in your warehouse, or worse, by your customers, lead to returns, chargebacks and damaged ratings. A product inspection before shipment moves that discovery to the one point where you still have control.",
  "Final random inspection services are not usually a government requirement. They are a commercial safeguard that buyers write into purchase orders, supplier agreements and, in some cases, letter of credit terms. A pre-shipment inspection for letter of credit shipments gives the bank and both parties an independent record of the goods before documents are presented. Some export products and some goods sold in India do fall under official inspection, testing or labelling rules, and those rules are separate from an FRI.",
];

export const INTRO_NOTE =
  "Requirements may vary depending on the latest official regulatory guidelines. If your product falls under a mandatory government inspection or certification scheme, an FRI does not replace it. We can help you check which rules apply before you ship.";

export const INTRO_CLOSING =
  "On this page you will learn how a final random inspection works, when to book it, what the inspector checks, how AQL sampling decides pass or fail, what affects the cost, and how Ornate Quality Service Pvt Ltd supports you from booking to shipment release.";

export const WHAT_IS_PARAGRAPHS: string[] = [
  "A final random inspection (FRI) is an on-site quality inspection of finished goods, carried out once production is complete and at least 80% of the order is packed. It is also called a pre-shipment inspection (PSI) or final shipment inspection. The inspector draws a random sample according to ISO 2859-1 sampling tables, checks it against your requirements, and records every defect found.",
  "The purpose is straightforward: confirm that the goods you are about to receive match what you ordered. An FRI answers four practical questions:",
];

export const WHAT_IS_QUESTIONS: { title: string; text: string }[] = [
  {
    title: "Is the quantity right?",
    text: "The inspector counts cartons and verifies quantity against the packing list.",
  },
  {
    title: "Is the product right?",
    text: "Style, color, size, materials and functions are compared against the approved sample and product specifications.",
  },
  {
    title: "Is the quality acceptable?",
    text: "Defects are counted and classified, then compared with the acceptance number for your AQL.",
  },
  {
    title: "Is the shipment ready to travel?",
    text: "Packaging, labels, shipping marks and carton strength are checked before container loading begins.",
  },
];

export const NAMES_TITLE = "Names you may see for the same service";

export const NAMES_INTRO =
  "Buyers, agents and suppliers use several names for this inspection. Knowing them helps you compare offers and read supplier emails correctly.";

export const NAMES_ROWS: TableRow[] = [
  {
    term: "FRI inspection / FRI inspection services",
    meaning: "Short form of final random inspection; same scope as described on this page",
  },
  {
    term: "Pre shipment inspection services / PSI inspection services",
    meaning: "Industry name for the same final check before goods are shipped",
  },
  {
    term: "Pre shipment quality inspection",
    meaning: "A PSI with the focus on product quality rather than paperwork",
  },
  {
    term: "Final inspection services / final quality inspection services",
    meaning: "General names used by many factories and agents for the last QC check",
  },
  {
    term: "Final product inspection / finished goods inspection",
    meaning: "Inspection of finished, packed products rather than materials or work in progress",
  },
  {
    term: "Final shipment inspection",
    meaning: "FRI carried out on the exact lot being shipped",
  },
  {
    term: "Third party pre shipment inspection India",
    meaning: "A PSI done by an inspector independent of both buyer and supplier",
  },
  {
    term: "FRI quality control",
    meaning: "The FRI stage within your wider quality control plan",
  },
  {
    term: "Final random inspection company / agency / service provider",
    meaning: "An independent firm that supplies trained inspectors and the report",
  },
  {
    term: "Pre-shipment inspection company / pre shipment inspection agency",
    meaning: "Same as above; the name more common with exporters and banks",
  },
];

export const NAMES_CLOSING =
  "Whatever the name, check three things in any offer: the sampling standard used, the AQL levels applied, and what the report contains.";

export const QC_LIFECYCLE_TITLE = "How FRI fits into the QC lifecycle";

export const QC_LIFECYCLE =
  "An FRI is one stage in a wider quality control process. A pre production inspection checks materials and components before bulk production starts. A during production inspection catches problems on the line while they can still be corrected. The final random inspection checks the finished lot. A container loading inspection then supervises how the goods are loaded. Many buyers use only the FRI for repeat orders from trusted suppliers, and add earlier stages for new suppliers or high-risk products.";

export const RANDOM_TITLE = 'Why it is called "random"';

export const RANDOM_TEXT =
  'The word "random" is important. The inspector, not the factory, chooses which cartons to open and which units to pull. Random carton opening and sample pulling from across the whole lot make the result statistically meaningful. If the factory picks the samples, the inspection can easily miss hidden problems.';

export const WHY_INTRO =
  "A third party final inspection protects your money, your brand and your supply chain. Here is what it does in practical terms.";

export const WHY_ITEMS: { title: string; text: string }[] = [
  {
    title: "It protects your payment.",
    text: "Many buyers pay a deposit when they place an order and the balance once goods are ready. A final random inspection before balance payment gives you evidence to release payment with confidence, or to hold it until the supplier completes rework and reinspection.",
  },
  {
    title: "It reduces product returns.",
    text: "Returns caused by wrong sizes, broken parts, missing accessories or poor finishing cost more than the product itself. An FRI helps reduce product returns by stopping obvious defects at the source.",
  },
  {
    title: "It supports market access.",
    text: "Buyers in the US, EU, UK, Middle East and Australia often have strict labelling, packaging and safety expectations. An inspection that follows your buyer standard and your destination market's labelling needs lowers the risk of goods being rejected on arrival. For example, a final random inspection for EU market compliance can check that the labels and markings your buyer lists are present, and a final random inspection for US market CPSIA compliance can check that required labelling on children's products is in place. Formal laboratory testing for these markets is a separate step.",
  },
  {
    title: "It builds trust with your customers.",
    text: "Consistent quality is what keeps retail partners and online ratings healthy. Regular inspection gives you proof that each lot met your standard.",
  },
  {
    title: "It gives your supplier clear feedback.",
    text: "An evidence-based report with defect photos turns vague complaints into specific corrective actions. Good suppliers welcome this because it helps them improve.",
  },
  {
    title: "It supports documentation needs.",
    text: "Some buyers, banks and trade partners ask for an inspection report or an inspection certificate for export as part of their paperwork. A PSI report gives a clear record of what was checked and what was found.",
  },
];

export const WHO_NEEDS_INTRO =
  "Anyone who buys finished goods from a factory they do not control can benefit from FRI. The most common users are:";

export const WHO_NEEDS_BLOCKS: { title: string; text: string }[] = [
  {
    title: "Importers.",
    text: "Importers buying from Indian factories use final random inspection for importers to verify each lot before it leaves the country. The inspection gives you eyes on the ground without travelling. We regularly plan final random inspection for US importers, final random inspection for UK importers and UK retailers, final random inspection for EU buyers, final random inspection for Middle East importers and final random inspection for Australian importers. If you are asking how to make sure an Indian supplier ships good quality, an independent FRI is the most direct answer. For regular programmes, we act as an inspection partner for importers rather than a one-off visitor.",
  },
  {
    title: "Brand owners and private label brands.",
    text: "If your brand name is on the product, your reputation is on the line. Final random inspection for private label brands checks that logos, colours, packaging and labels match your brand standards on every order. Our QC inspection services for brands also track results over time, so you can see which suppliers stay consistent.",
  },
  {
    title: "E-commerce and marketplace sellers.",
    text: "Final random inspection for Amazon sellers and Shopify brands focuses on sellable condition, correct labels and packaging that survives courier handling. An Amazon FBA inspection can also include an FNSKU label check before goods are sent to the fulfilment centre.",
  },
  {
    title: "Buying agents and buying houses.",
    text: "Buying agent inspection services give agents an independent result they can share with their clients. It separates the quality decision from the commercial relationship. Our inspection services for buying houses follow the buyer's own quality manual where one exists.",
  },
  {
    title: "Retail sourcing teams.",
    text: "Retail sourcing inspection helps sourcing teams manage many suppliers and many styles with a consistent method and reporting format.",
  },
  {
    title: "Startups and small brands.",
    text: "Final random inspection for small orders and startups is often the most valuable, because a single bad shipment can hurt a young business badly.",
  },
  {
    title: "Exporters and manufacturers.",
    text: "Some Indian exporters book a third-party quality inspection on their own goods to show buyers an independent result, or to prepare for a buyer's own inspection.",
  },
];

export const WHO_NEEDS_SITUATIONS_TITLE = "Common buyer situations";

export const WHO_NEEDS_SITUATIONS: string[] = [
  "You are paying the balance next week and want to know if the order is ready.",
  'You are asking yourself, "Is my supplier shipment ready to go?" and need a clear answer.',
  "You want to check quality before paying your supplier. You need someone to check your factory order because you cannot travel.",
  "You are working with a new supplier and have no quality history yet.",
  "The order has a mixed SKU shipment, many sizes or many colours.",
  "The goods are for a peak selling season and there is no time for a second shipment.",
];

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Lower risk before you pay",
    text: "You make the shipment decision with evidence, not assumptions. If the lot fails, you can ask for rework and reinspection while the goods are still at the factory.",
  },
  {
    title: "Fewer returns and complaints",
    text: "Catching workmanship defects, functional defects and missing accessories early reduces returns, chargebacks and customer complaints later.",
  },
  {
    title: "Consistent quality across orders",
    text: "The same checklist and AQL levels applied to every order give you comparable results over time. You can see which suppliers improve and which do not.",
  },
  {
    title: "Clear, shareable proof",
    text: "A photo-documented report is easy to share with your team, your supplier, your buying agent or your client.",
  },
  {
    title: "Better supplier conversations",
    text: "Defect photos and a defect tally make feedback objective. Discussions move from opinion to evidence.",
  },
  {
    title: "Protection for your brand and market access",
    text: "Packaging, labelling and marking checks help your goods meet buyer and destination market expectations before they travel.",
  },
];

export const FEATURES_INTRO = "Every final random inspection we arrange includes these core elements:";

export const FEATURES_ITEMS: string[] = [
  "ISO 2859-1 compliant sampling. Sample size and pass or fail limits come from the ISO 2859-1 sampling tables, using the inspection level and AQL agreed with you.",
  "Industry-specific inspection checklists. A garment is not checked like a ceiling fan. Checklists are built around your product category and your buyer specifications.",
  "Quantity verification inspection. Carton count, quantity per carton and assortment check against the packing list.",
  "Workmanship inspection. Visual inspection of appearance, finishing, assembly and materials against the approved sample.",
  "Product specification check. Measurement check, weight check, colour check and dimension check against your specifications and tolerances.",
  "On-site testing during inspection. Practical tests such as carton drop tests, barcode scanning checks, function tests and product-specific tests.",
  "Packaging inspection services and labelling inspection. Inner packing, master carton, care labels, hangtags, polybag warning labels, carton marks and country of origin marking.",
  "Defect classification. Every defect is recorded as critical, major or minor and counted against the acceptance number.",
  "Photo and video documented reports. Detailed photographs of the product, packaging and every defect found, with video where needed.",
  "Clear verdict. Pass, fail or pending decision, with the reasons explained.",
];

export const ELIGIBILITY_INTRO =
  "An FRI is not about whether your business qualifies. It is about whether the goods are ready to be inspected. The inspection gives a meaningful result only when it reflects the real, finished shipment.";

export const ELIGIBILITY_READY_INTRO = "Your order is ready for FRI when:";

export const ELIGIBILITY_READY: string[] = [
  "Production is complete for the lot being inspected.",
  'At least 80% of the order is packed in export cartons. This is why you will often hear "final random inspection when 80 percent goods are packed".',
  "The finished products are available at one location for random carton selection.",
  "You have shared the purchase order, specifications, approved sample details and AQL requirements.",
];

export const ELIGIBILITY_NOT_READY_INTRO = "Your order is not ready when:";

export const ELIGIBILITY_NOT_READY: string[] = [
  "Goods are still on the production line or partly finished.",
  "Most goods are unpacked, so cartons, labels and shipping marks cannot be checked.",
  "Goods are spread across several locations without access for the inspector.",
];

export const ELIGIBILITY_NOTE =
  "If your supplier says the goods are ready but the production status check on the day shows less than 80% packed, the inspector records this in the report. You can then decide to continue with a limited inspection or reschedule. Ask your supplier to confirm packing status in writing before the inspection date.";

export const ELIGIBILITY_WHO =
  "Who can book? Any buyer, brand owner, buying agent, seller or exporter with the right to access the goods can book. The supplier must allow the inspector into the factory or warehouse on the agreed date.";

export const DOCUMENTS_INTRO =
  "Good inspections start with good information. The inspector checks the goods against what you share, so incomplete information leads to incomplete results.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Purchase order (PO)",
    purpose: "Confirms styles, colours, sizes and quantities to verify",
    mandatory: "Mandatory",
    notes: "Share the final PO, including any amendments.",
  },
  {
    document: "Packing list",
    purpose: "Used for carton count and packing list verification",
    mandatory: "Mandatory",
    notes: "Should show quantity per carton and total cartons.",
  },
  {
    document: "Product specifications / tech pack",
    purpose: "Basis for measurement, material and function checks",
    mandatory: "Mandatory",
    notes: "Include tolerances wherever possible.",
  },
  {
    document: "Approved sample or golden sample details",
    purpose: "Reference to compare with golden sample during inspection",
    mandatory: "Strongly recommended",
    notes: "Photos or a sealed sample at the factory both works.",
  },
  {
    document: "AQL levels and inspection level",
    purpose: "Decides sample size and acceptance number",
    mandatory: "Mandatory",
    notes: "If you have none, we can guide you on common choices.",
  },
  {
    document: "Artwork and label files",
    purpose: "Checks for labels, hangtags, barcodes and carton marks",
    mandatory: "Recommended",
    notes: "Include barcode numbers and marketplace labels if any.",
  },
  {
    document: "Buyer quality manual or checklist",
    purpose: "Applies your buyer's own rules",
    mandatory: "Optional",
    notes: "Useful for retailers and buying houses.",
  },
  {
    document: "Test requirements",
    purpose: "Lists any on-site tests required",
    mandatory: "Optional",
    notes: "Product-specific tests are agreed at booking.",
  },
  {
    document: "Factory address and contact",
    purpose: "For scheduling and access",
    mandatory: "Mandatory",
    notes: "Include a person who can confirm readiness.",
  },
];

export const DOCUMENTS_CLOSING =
  "We keep all inspection documentation confidential and use it only for your inspection.";

export const PROCESS_INTRO =
  "Here is how the final random inspection procedure works from booking to shipment release.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Booking",
    color: "#0b57b5",
    title: "Step 1 — Booking and preparation",
    text: "You book an inspection through our booking form, by phone or by email. We confirm the product, quantity, factory location, inspection date and scope.",
  },
  {
    step: "02",
    label: "Documents",
    color: "#2563eb",
    title: "Step 2 — Documentation review",
    text: "We review your purchase order, specifications and approved sample details. We confirm the AQL levels, inspection level and on-site tests. Where needed, we prepare an inspection checklist template for your product.",
  },
  {
    step: "03",
    label: "Coordinate",
    color: "#0891b2",
    title: "Step 3 — Supplier coordination",
    text: "We coordinate with the supplier to confirm the inspection date and packing status. This reduces the risk of an inspector arriving when goods are not ready.",
  },
  {
    step: "04",
    label: "Quantity",
    color: "#059669",
    title: "Step 4 — Quantity check and carton selection",
    text: "On the day of inspection, the inspector checks the total quantity, counts cartons and confirms that at least 80% of the order is packed. Cartons are then selected at random from across the lot.",
  },
  {
    step: "05",
    label: "Sampling",
    color: "#d97706",
    title: "Step 5 — Random sample selection",
    text: "The inspector opens the selected cartons and pulls the sample size required by the ISO 2859-1 tables. Sample pulling is spread across cartons, sizes and colours.",
  },
  {
    step: "06",
    label: "Workmanship",
    color: "#ea580c",
    title: "Step 6 — Workmanship and specification check",
    text: "Each sample unit is checked for workmanship defects, cosmetic defects, dimensional defects and functional defects. The inspector compares units with the golden sample and your specifications.",
  },
  {
    step: "07",
    label: "Tests",
    color: "#7c3aed",
    title: "Step 7 — On-site tests",
    text: "Agreed tests are carried out, for example carton drop test, barcode readability, function test, stability test or product-specific safety checks.",
  },
  {
    step: "08",
    label: "Packing",
    color: "#0b57b5",
    title: "Step 8 — Packing and labelling check",
    text: "The inspector checks inner packing, master carton dimensions, gross weight and net weight, carton marks, labels and shipping mark verification.",
  },
  {
    step: "09",
    label: "Verdict",
    color: "#2563eb",
    title: "Step 9 — Defect classification and verdict",
    text: "Defects are classified as critical, major or minor and totaled in a defect tally. The totals are compared with the acceptance and rejection numbers for your AQL. The inspector records a pass, fail or pending decision.",
  },
  {
    step: "10",
    label: "Report",
    color: "#0891b2",
    title: "Step 10 — Inspection report and your decision",
    text: "We issue the inspection report with photographs and findings. You decide whether to approve shipment, ask for rework and reinspection, or discuss options with your supplier.",
  },
];

export const AQL_INTRO =
  "Acceptable Quality Level (AQL) is the backbone of a final random inspection. Instead of checking every unit, the inspector checks a statistical sample. The AQL tells you the maximum number of defects that can be found in that sample for the lot to pass.";

export const AQL_SAMPLE_TITLE = "Sample size, inspection level and lot size";

export const AQL_SAMPLE_PARAGRAPHS: string[] = [
  "The sample size depends on the lot size and the inspection level. Most FRIs use General Inspection Level II, the default general inspection level in ISO 2859-1. Special inspection levels use smaller samples and are usually applied to on-site tests that take time or damage the product.",
  "The standard also defines normal inspection, tightened inspection and reduced inspection. Normal inspection is the starting point. Tightened inspection is used when a supplier's results show problems. Reduced inspection may apply when a supplier has a strong, consistent track record. Most FRIs use a single sampling plan.",
];

export const AQL_DEFECT_TITLE = "Defect classes and common AQL choices";

export const AQL_DEFECT_ROWS: TableRow[] = [
  {
    defect: "Critical defect",
    meaning: "Could harm the user or break safety or legal rules",
    aql: "0 (zero tolerance for critical defects)",
    example: "Sharp edge on a toy, exposed live wire",
  },
  {
    defect: "Major defect",
    meaning: "Likely to cause a return or make the product unsellable",
    aql: "2.5",
    example: "Broken zipper, wrong size label, product not working",
  },
  {
    defect: "Minor defect",
    meaning: "Does not affect use but falls below the quality standard",
    aql: "4.0",
    example: "Small loose threads, minor stains and spots",
  },
];

export const AQL_DEFECT_CLOSING =
  "These are common choices, not fixed rules. You set the AQL based on your product, price point and market. Some electronics and safety-sensitive products use a tighter AQL for major defects.";

export const AQL_EXAMPLE_TITLE = "A simple example";

export const AQL_EXAMPLE_INTRO =
  "The table below shows how the sampling plan works at General Inspection Level II under normal inspection, using a final random inspection using AQL 2.5 and 4.0.";

export const AQL_EXAMPLE_ROWS: TableRow[] = [
  {
    lot: "1,000 pieces",
    sample: "80",
    major: "5 / 6",
    minor: "7 / 8",
  },
  {
    lot: "5,000 pieces",
    sample: "200",
    major: "10 / 11",
    minor: "14 / 15",
  },
];

export const AQL_EXAMPLE_CLOSING =
  "So, for an AQL sample size for a 1000 pcs order, the inspector checks 80 units. If 5 or fewer major defects are found, the major result passes. If 6 or more are found, it fails. For the final random inspection sample size for 5000 pieces, 200 units are checked.";

export const AQL_NOTE =
  "These figures come from the ISO 2859-1 sampling tables for single sampling, normal inspection, General Inspection Level II. Always confirm values against the current edition of the standard (ISO 2859-1 on iso.org) or against your buyer's own AQL table and AQL chart.";

export const CHECKS_INTRO =
  "A final quality check covers much more than a quick look at a few units. Here is what a full inspection usually includes.";

export const CHECKS_BLOCKS: { title: string; text: string }[] = [
  {
    title: "Quantity and assortment",
    text: "The inspector verifies quantity at carton level and unit level. This includes carton count, quantity per carton and an assortment check for sizes, colours and styles. Short shipments and wrong assortments are among the most common findings.",
  },
  {
    title: "Workmanship and appearance",
    text: "Visual inspection looks for workmanship defects and cosmetic defects. In textiles, this means fabric defects, stitching defects, broken stitches, seam puckering, print defects and embroidery defects. In hard goods, it means scratches, dents, assembly defects, rust and poor surface finish. The inspector also carries out an odour check and a mould and mildew check where relevant, especially for leather, wood and textiles.",
  },
  {
    title: "Measurements and specifications",
    text: "A measurement check compares each sample with the specification sheet and tolerances. Weight check, colour check and material check confirm that the product was made as agreed. For textiles, shade variation is checked against a shade band or approved colour standard, so that one shipment does not contain visibly different colours.",
  },
  {
    title: "Function and safety",
    text: "Function tests confirm that the product works as intended, from zipper function tests and button pull tests on garments to switches and moving parts on electrical goods. For electrical products, the final random inspection hi pot test, ground continuity test and polarity check are common on-site safety checks.",
  },
];

export const PACKING_TITLE = "Packaging and labelling";

export const PACKING_INTRO = "Packaging and labelling mistakes cause more rejections than many buyers expect. The inspector checks:";

export const PACKING_ITEMS: string[] = [
  "Inner packing and master carton condition",
  "Carton dimensions, gross weight and net weight",
  "Carton marks and shipping marks",
  "Care labels, hangtags and polybag warning labels",
  "Country of origin marking",
  "Barcode readability through a barcode scanning check",
  "Marketplace labels, such as a final random inspection Amazon FNSKU label check",
  "Export packing strength, including seaworthy packing where required",
];

export const ONSITE_TITLE = "On-site tests";

export const ONSITE_INTRO = "On-site tests are agreed at booking and depend on the product. Common tests include:";

export const ONSITE_ITEMS: string[] = [
  "Carton drop test to see whether packaging protects the goods in transit. The final inspection carton drop test procedure follows the method agreed with you.",
  "Barcode scanning check to confirm every barcode scans correctly.",
  "Function test for electrical and mechanical products.",
  "Tape test for print adhesion on printed surfaces.",
  "Stability test for furniture and similar products.",
  "Trims and accessories check for garments and soft goods.",
];

export const CHECKS_NOTE =
  "On-site tests are practical checks, not laboratory tests. If your product needs formal laboratory testing, such as chemical or safety testing, that is arranged separately through an accredited testing laboratory.";

export const REPORT_INTRO =
  "The report is what you pay for, so it should be easy to read and hard to dispute. Every final random inspection report we issue follows the same structure.";

export const REPORT_ITEMS: { title: string; text: string }[] = [
  {
    title: "Summary page.",
    text: "The first page shows the inspection verdict — pass, fail or pending decision — along with the order details, sample size, AQL levels used and the defect totals. A busy buyer can make a shipment decision from this page alone.",
  },
  {
    title: "Quantity and packing findings.",
    text: "Carton count, quantity check results, packing list verification and any shortfall.",
  },
  {
    title: "Defect list.",
    text: "Every defect found, grouped as critical, major or minor, with the defect tally compared against the acceptance and rejection numbers. This is where non-conformities and any quality deviation from the approved sample are recorded.",
  },
  {
    title: "Defect photos.",
    text: "Clear inspection photos for each defect, with a note on location and severity. A final inspection report with photos is far more useful than a checklist of ticks.",
  },
  {
    title: "On-site test results.",
    text: "Each test, how it was done and whether it passed.",
  },
  {
    title: "Inspector remarks.",
    text: "Observations that are not defects but still matter, such as packing risks or signs of a quality issue building up in production.",
  },
];

export const VERDICT_TITLE = "What the verdict means";

export const VERDICT_ITEMS: { title: string; text: string }[] = [
  {
    title: "Pass.",
    text: "The defects found are within the acceptable quality limits for your AQL. You can give shipment approval and quality sign off with confidence.",
  },
  {
    title: "Fail.",
    text: "Defects exceed the quality threshold for at least one class, or a critical defect was found. The report explains why, so you and the supplier know what to fix.",
  },
  {
    title: "Pending.",
    text: "The inspector could not complete a judgement on site, for example because a specification was missing or a test result needs your review. You make the final quality approval after reading the report.",
  },
];

export const REPORT_CLOSING =
  'A PSI report or QC report is also useful beyond one order. Over time, your pass rate, failure rate and rejection rate by supplier show where to focus your sourcing effort. If a final random inspection failed, what next? The "Re-inspection and Repeat Orders" section below explains the steps.';

export const TIMELINE_INTRO =
  "An FRI moves through four stages: booking, supplier confirmation, the inspection day and report delivery.";

export const TIMELINE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Booking and confirmation.",
    text: "It helps to book as soon as you know the expected packing date. Earlier booking gives time to review documents and confirm the date with the supplier. We also handle urgent pre shipment inspection requests and next day final inspection requests when an inspector is available.",
  },
  {
    title: "Inspection day.",
    text: "Inspections are planned in man-days. Many single-style orders at one factory fit into one man-day, but the actual time depends on quantity, number of styles, sample size and tests.",
  },
  {
    title: "Report delivery.",
    text: "Fast inspection report turnaround matters because shipping schedules are tight. If you need a final random inspection 24 hour report or a same-day summary, tell us when you book. We confirm the report timeline for each order before the inspection, and we share real-time inspection updates when a critical issue is found on the day.",
  },
];

export const TIMELINE_NOTE =
  "Timelines depend on factory readiness, location, inspector availability and the scope of inspection. We do not promise a fixed turnaround until your booking details are confirmed.";

export const COST_INTRO =
  "The final random inspection cost is usually based on inspector time, often called a man-day. The final random inspection price for your order depends on these factors:";

export const COST_ITEMS: string[] = [
  "Order quantity and sample size. Larger lots need larger samples and more time.",
  "Number of styles, colours and SKUs. A mixed SKU shipment takes longer than one style in one colour.",
  "Product complexity. Electrical goods with function and safety tests need more time than simple textiles.",
  "On-site tests required. Each additional test adds time.",
  "Factory location. Travel to remote locations can add cost and time.",
  "Multiple factories. Final random inspection at multiple factories in one city may be planned more efficiently than separate trips.",
  "Urgency. Short-notice bookings may affect scheduling.",
  "Reinspection. If a lot fails, a reinspection is a separate visit.",
];

export const COST_CLOSING =
  "Some buyers prefer a single one man day inspection per order. Others with regular orders look for final random inspection packages. We explain the pricing basis before you confirm, so you know the final random inspection charges up front. We believe in transparent inspection pricing rather than surprise add-ons.";

export const COST_COMPARE_TITLE = "How to compare quotes";

export const COST_COMPARE_INTRO =
  "When you compare pre shipment inspection charges in India from different providers, look beyond the headline figure. A low cost final inspection service that skips on-site tests, uses a smaller sample or sends a thin report can cost you far more if defects slip through. A cost-effective inspection is one that gives you a reliable decision, not only the lowest price.";

export const COST_COMPARE_ASK = "Ask every provider the same questions:";

export const COST_COMPARE_ITEMS: string[] = [
  "Is the price per man-day, and what does one final random inspection man day include?",
  "Is the sample size based on ISO 2859-1 at your AQL levels?",
  "Are travel charges included?",
  "Which on-site tests are included and which are extra?",
  "How is a reinspection charged?",
];

export const COST_COMPARE_CLOSING =
  "This makes the real pre shipment inspection cost in India comparable across providers, whether you are looking at AQL inspection cost for a single order or third party pre shipment inspection cost for a full season.";

export const COST_NOTE =
  "We do not publish a fixed price list because every order is different. Request a quote with your product, quantity, location and date to get the exact cost for your order.";

export const VALIDITY_INTRO =
  "An FRI report does not have a validity period in the way a licence or certificate does. It is a record of one inspection of one lot, on one date.";

export const VALIDITY_ITEMS: string[] = [
  "The report applies only to the goods inspected under that purchase order.",
  "If goods are reworked, repacked or changed after inspection, the original result no longer reflects the shipment.",
  "A new order needs a new inspection, even from the same supplier.",
];

export const VALIDITY_CLOSING =
  "Some buyers ask for an inspection certificate for export in addition to the report. If your buyer, bank or trade partner needs a specific certificate format, share the requirement at booking so we can confirm what can be provided.";

export const RENEWAL_INTRO =
  'Because every FRI covers one lot, "renewal" for this service means two things: reinspection after a failed result, and planning inspections for repeat orders.';

export const RENEWAL_WHEN_TITLE = "When reinspection is needed.";

export const RENEWAL_WHEN =
  "If the lot fails, the supplier sorts and reworks the goods. A second visit then checks the reworked lot. Reinspection services follow the same method, so the new result can be compared fairly with the first one.";

export const RENEWAL_HOW_TITLE = "How reinspection works.";

export const RENEWAL_HOW =
  "You share the failed report with your supplier and agree on corrective actions. Once the supplier confirms rework is complete, you request reinspection, and we book reinspection on the next suitable date. The inspector checks a fresh random sample, not only the units that failed.";

export const RENEWAL_PRECAUTIONS_INTRO = "Important precautions:";

export const RENEWAL_PRECAUTIONS: string[] = [
  "Ask the supplier to rework the whole lot, not only the defects shown in the photos.",
  "Agree in advance who pays for reinspection. Many buyers write this into the supplier agreement.",
  "Keep the original report. It is your evidence if problems return.",
];

export const RENEWAL_CLOSING =
  "For repeat orders, many buyers keep the same inspection level and AQL, and move to tightened inspection if results get worse.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Goods not ready on the inspection day.",
    text: "This is the most frequent problem. Suppliers may be optimistic about packing dates. Confirming the packing status a day before reduces wasted visits.",
  },
  {
    title: "Missing or unclear specifications.",
    text: "Without tolerances, the inspector cannot fairly judge a measurement. Vague instructions lead to arguments later.",
  },
  {
    title: "No approved sample at the factory.",
    text: "Without a golden sample, colour, feel and finish are hard to judge objectively.",
  },
  {
    title: "Mixed lots.",
    text: "Many sizes, colours or SKUs in one shipment need careful sampling so that every variant is represented.",
  },
  {
    title: "Test equipment access.",
    text: "Some on-site tests need equipment or power supply at the factory. This must be arranged before the date.",
  },
  {
    title: "Disagreements over results.",
    text: "Suppliers may dispute findings. Clear defect photos, a defect list and evidence-based pass fail decisions make these discussions easier.",
  },
];

export const HELP_INTRO =
  "Ornate Quality Service Pvt Ltd supports you through every part of the inspection, not only the factory visit.";

export const HELP_ITEMS: string[] = [
  "Scope and checklist setup. We help define what to check, prepare an industry-specific checklist and offer technical guidance on AQL levels.",
  "Documentation and coordination support. We review your PO, packing list and specifications, and coordinate the date with your supplier.",
  "On-site inspection. A trained inspector carries out the inspection at the supplier's factory.",
  "Reporting. You receive a detailed inspection report with photographs, defect classification and a clear verdict.",
  "Follow-up. If the lot fails, we help you plan rework and reinspection, and answer questions about the findings.",
  "Wider quality control support. We also support pre production inspection, during production inspection and container loading inspection, so you can build end-to-end quality control support around your orders.",
  "Compliance guidance. Because we also work on certification and registration, we can flag when a product may need separate Indian or export compliance, and point you to the right service.",
];

export const RELATED_TITLE = "Related quality and compliance services";

export const RELATED_INTRO = "Many FRI clients need more than one service. These are the services most often combined with a final random inspection:";

export const RELATED_ITEMS: string[] = [
  "Inspection services: pre production inspection (PPI inspection services), during production inspection (DUPRO inspection services), container loading inspection and container loading supervision services, factory inspection services and manufacturing process audit, product inspection services and quality monitoring services in India, and third party inspection services (TPI services India).",
  "Testing and audits: NABL lab testing through a product testing lab in India, supplier audit services and social compliance audit services.",
  "Indian product certification: BIS certification, BIS certification for imported products, BIS CRS registration (BIS registration for electronics), BIS ISI mark certification (ISI mark license), FMCS certification (foreign manufacturer certification scheme), BEE registration for the BEE star rating label, WPC ETA approval (WPC certificate for wireless devices), TEC certification (MTCTE certification) and PESO certification or CCOE approval where applicable.",
  "Registrations for importers and brands: EPR registration (EPR plastic packaging registration), LMPC registration (LMPC certificate for importers), IEC registration (import export code registration), trademark registration (brand name registration in India), FSSAI registration (FSSAI license for food importers), CDSCO registration (medical device registration in India) and GeM registration (GeM seller registration).",
  "International and system certification: CE certification (CE marking for export to Europe), ISO certification (ISO 9001 certification in India), RoHS compliance and RoHS certification in India.",
  "Documentation: technical documentation services and compliance documentation support.",
];

export const HELP_NOTE =
  "An inspection reports what the inspector finds on the day. It does not guarantee the quality of units that were not sampled, and it does not replace any government certification, registration or testing your product may need.";

export const WHY_CHOOSE_ITEMS: string[] = [
  "Independent third-party inspection. As an inspection provider, we work for you, not for the supplier. Every final random inspection by independent inspector follows the same method, so results are verified inspection results you can rely on. We follow an inspector integrity policy and an anti-bribery inspection policy, so your results stay unbiased.",
  "Trained QC inspectors. Inspections are carried out by trained QC inspectors and QA/QC professionals with industry background. Inspector credentials and training records are available on request.",
  "Transparent methodology. We explain our inspection methodology, sampling plan and defect classification before the visit, so there are no surprises in the report.",
  "Clear, evidence-based reports. Every pass or fail decision is backed by photographs, a defect tally and the AQL table used. As an AQL inspection company using ISO 2859 sampling, we show exactly how each result was reached.",
  "Confidential handling. We handle your inspection data confidentially and offer NDA-backed inspection services on request.",
  "Multi-industry inspection experience. We use checklists built for textiles, electronics, toys, furniture, footwear and home goods, and we offer inspection services for export orders as well as goods sold in India.",
  "Certification and inspection under one roof. If your product also needs Indian compliance, such as BIS, BEE or EPR, our wider team can support you without you finding another consultant.",
  "Responsive support. You get a single point of contact who coordinates the booking, the supplier and the report. We offer supplier coordination support and inspection documentation assistance, so you do not have to chase the factory yourself.",
  "The right people for your product. Depending on the product, your inspection may be handled by a field inspector with category experience or an inspection engineer for technical and electrical goods. Behind them, an experienced QC inspection consultant reviews scope and reports, so every inspection gets a final random inspection expert's eye.",
  "Buyer standard compliant inspections. Where your retailer or buying house has its own manual, we follow it. Where you have none, our technical guidance on AQL levels helps you set sensible limits.",
  "Regulation-aware inspection process. We are not only an inspection firm. As a compliance consultancy, we bring an export quality compliance specialist view to packaging and marking checks, including a labelling legal compliance check where your market needs one.",
];

export const INDUSTRIES_INTRO =
  "Final random inspection works for almost any finished consumer or industrial product. The checks change by product, so we plan each inspection around your industry.";

export const INDUSTRY_BLOCKS: { title: string; text: string }[] = [
  {
    title: "Textiles and apparel.",
    text: "Garments, knitwear, denim, home textiles, rugs and handloom products. Focus areas include measurements, shade variation, stitching, needle detection where required, labels and trims.",
  },
  {
    title: "Electronics and electricals.",
    text: "LED lighting, mobile accessories, small appliances and electrical goods. Focus areas include function tests, electrical safety checks, rating labels and packaging.",
  },
  {
    title: "Toys.",
    text: "Wooden toys, plush toys and educational toys. Focus areas include small parts, sharp edges, age labelling and warning labels.",
  },
  {
    title: "Furniture.",
    text: "Solid wood, upholstered, metal and outdoor furniture. Focus areas include stability, assembly, finish and moisture content.",
  },
  {
    title: "Footwear.",
    text: "Leather shoes, sports shoes and safety shoes. Focus areas include sole bonding, pair matching, sizing and odour.",
  },
  {
    title: "Home goods and housewares.",
    text: "Kitchenware, cookware, glassware, ceramics, home decor and handicrafts. Focus areas include finish, function, coating and fragile packing.",
  },
];

export const PRODUCTS_INTRO =
  "The table below lists the product categories covered by our final random inspection services. Dedicated pages for each category are being prepared.";

export const PRODUCTS_ROWS: TableRow[] = [
  { industry: "Textiles & Apparel", page: "Apparel pre shipment inspection company", focus: "Garment workmanship, measurements, labels, AQL", dedicated: "Coming Soon" },
  { industry: "Textiles & Apparel", page: "Final random inspection for cotton t shirts", focus: "Size-set measurements, print, stitching, trims", dedicated: "Coming Soon" },
  { industry: "Textiles & Apparel", page: "FRI inspection for knitwear", focus: "Fabric weight, measurement, shade, seams", dedicated: "Coming Soon" },
  { industry: "Textiles & Apparel", page: "FRI inspection for denim", focus: "Shade consistency, button and rivet pull, measurements", dedicated: "Coming Soon" },
  { industry: "Textiles & Apparel", page: "Home textile final inspection", focus: "Size and weight, hemming, shade, labels", dedicated: "Coming Soon" },
  { industry: "Textiles & Apparel", page: "Final random inspection for rugs and carpets", focus: "Size tolerance, pile, colour, backing", dedicated: "Coming Soon" },
  { industry: "Electronics & Electricals", page: "Electronics pre shipment inspection", focus: "Function, electrical safety, rating labels", dedicated: "Coming Soon" },
  { industry: "Electronics & Electricals", page: "FRI inspection for LED lights", focus: "Light output, function, marking", dedicated: "Coming Soon" },
  { industry: "Electronics & Electricals", page: "FRI inspection for mobile accessories", focus: "Charging, cable pull, labels", dedicated: "Coming Soon" },
  { industry: "Electronics & Electricals", page: "Final random inspection for small kitchen appliances", focus: "Run test, hi-pot, earth continuity", dedicated: "Coming Soon" },
  { industry: "Toys", page: "Toy final inspection", focus: "Small parts, sharp edges, warnings", dedicated: "Coming Soon" },
  { industry: "Toys", page: "FRI inspection for wooden toys", focus: "Finish, paint adhesion, small parts", dedicated: "Coming Soon" },
  { industry: "Toys", page: "FRI inspection for plush toys", focus: "Seam strength, pull tests, needle detection", dedicated: "Coming Soon" },
  { industry: "Toys", page: "Final random inspection for educational toys", focus: "Component count, function, labels", dedicated: "Coming Soon" },
  { industry: "Furniture", page: "Furniture final inspection", focus: "Stability, assembly, finish, drop test", dedicated: "Coming Soon" },
  { industry: "Furniture", page: "FRI inspection for solid wood furniture", focus: "Moisture, joints, polish", dedicated: "Coming Soon" },
  { industry: "Furniture", page: "Final random inspection for sofa and upholstered furniture", focus: "Upholstery defects, stitching, labels", dedicated: "Coming Soon" },
  { industry: "Furniture", page: "Final random inspection for metal furniture", focus: "Weld quality, coating adhesion, rust", dedicated: "Coming Soon" },
  { industry: "Footwear", page: "Footwear final inspection", focus: "Pair matching, sizing, bonding, odour", dedicated: "Coming Soon" },
  { industry: "Footwear", page: "Final random inspection for leather shoes", focus: "Leather finish, lining, stitching", dedicated: "Coming Soon" },
  { industry: "Footwear", page: "Final random inspection for sports shoes", focus: "Sole bonding, flex, size labels", dedicated: "Coming Soon" },
  { industry: "Footwear", page: "FRI inspection for safety shoes", focus: "Marking, sizing, construction checks", dedicated: "Coming Soon" },
  { industry: "Home Goods & Housewares", page: "Housewares inspection services", focus: "Function, finish, drop test, weight", dedicated: "Coming Soon" },
  { industry: "Home Goods & Housewares", page: "FRI inspection for kitchenware", focus: "Thickness, handles, coating", dedicated: "Coming Soon" },
  { industry: "Home Goods & Housewares", page: "Final random inspection for glassware and ceramics", focus: "Chips, bubbles, fragile packing", dedicated: "Coming Soon" },
  { industry: "Home Goods & Housewares", page: "FRI inspection for home decor", focus: "Finish vs sample, handmade variation, packing", dedicated: "Coming Soon" },
  { industry: "Other Products", page: "Final random inspection for sandals and slippers", focus: "Pair matching, sizing, bonding", dedicated: "Coming Soon" },
  { industry: "Other Products", page: "Final random inspection for fashion jewellery", focus: "Finish, plating, fastenings, packing", dedicated: "Coming Soon" },
  { industry: "Other Products", page: "Final random inspection for bags and luggage", focus: "Stitching, zips, handles, wheels", dedicated: "Coming Soon" },
  { industry: "Other Products", page: "Final random inspection for stationery products", focus: "Count, print, finish, packing", dedicated: "Coming Soon" },
  { industry: "Other Products", page: "Final random inspection for sporting goods", focus: "Function, assembly, labels", dedicated: "Coming Soon" },
  { industry: "Other Products", page: "Final random inspection for medical disposables", focus: "Packing integrity, labels, count", dedicated: "Coming Soon" },
  { industry: "Other Products", page: "Final random inspection for auto parts", focus: "Dimensions, finish, marking", dedicated: "Coming Soon" },
  { industry: "Other Products", page: "Final random inspection for hand tools and hardware", focus: "Function, finish, dimensions", dedicated: "Coming Soon" },
];

export const PRODUCTS_NOTE =
  "The focus areas above are typical examples. The final checklist for each order is agreed with you and follows your buyer specifications.";

export const LOCATIONS_INTRO =
  "Final random inspection happens at the supplier's factory in India, so location matters. We coordinate inspections across major manufacturing hubs through our pan india inspector network. Coverage and dates are confirmed for each booking.";

export const LOCATION_ROWS: TableRow[] = [
  { hub: "Noida and Delhi NCR", products: "Garments, electronics, home goods", service: "Final random inspection services in Noida, Delhi NCR and Gurgaon" },
  { hub: "Tirupur", products: "Knitwear, garments", service: "Final random inspection in Tirupur for knitwear exporters and buyers" },
  { hub: "Ludhiana", products: "Hosiery, woollens, garments", service: "Final random inspection in Ludhiana" },
  { hub: "Jaipur", products: "Textiles, home decor, handicrafts", service: "Final random inspection in Jaipur" },
  { hub: "Moradabad", products: "Brass and metal handicrafts", service: "Final random inspection in Moradabad" },
  { hub: "Panipat", products: "Home textiles", service: "Final random inspection in Panipat" },
  { hub: "Agra", products: "Footwear", service: "Final random inspection for Agra footwear units" },
  { hub: "Kanpur", products: "Leather goods", service: "Final inspection for Kanpur leather goods" },
  { hub: "Karur", products: "Home textiles", service: "Final inspection for Karur home textiles" },
  { hub: "Jodhpur", products: "Furniture", service: "Final inspection for Jodhpur furniture" },
  { hub: "Saharanpur", products: "Wooden handicrafts", service: "Final inspection for Saharanpur wooden handicrafts" },
  { hub: "Firozabad", products: "Glassware", service: "Final inspection for Firozabad glassware" },
  { hub: "Mumbai, Surat, Ahmedabad", products: "Textiles, mixed consumer goods", service: "Pre shipment inspection in Mumbai, Surat and Ahmedabad" },
  { hub: "Chennai, Bangalore", products: "Leather, footwear, garments, electronics", service: "Pre shipment inspection in Chennai and Bangalore" },
  { hub: "Kolkata", products: "Leather, mixed goods", service: "Pre shipment inspection in Kolkata" },
];

export const LOCATIONS_CLOSING =
  "If you are searching for a final random inspection company near me or a pre shipment inspection company near me, share your factory address and we will confirm availability.";

export const MISTAKES_ROWS: TableRow[] = [
  {
    mistake: "Booking before goods are packed.",
    hurts: "An FRI on half-packed goods cannot check cartons, labels or the real lot.",
    avoid: "Book when at least 80% of the order is packed, and ask the supplier to confirm in writing.",
  },
  {
    mistake: "Letting the factory choose samples.",
    hurts: "Samples picked by the supplier are rarely random.",
    avoid: "Use an independent inspector who selects cartons and units personally.",
  },
  {
    mistake: "No AQL agreed with the supplier.",
    hurts: "If the supplier does not know your AQL, they may dispute a failed result.",
    avoid: "Put the AQL levels in the purchase order.",
  },
  {
    mistake: "Ignoring packaging and labels.",
    hurts: "Many shipments are rejected for label or carton problems, not product defects.",
    avoid: "Include full packaging and labelling checks in every FRI.",
  },
  {
    mistake: "Skipping reinspection after a fail.",
    hurts: "Accepting the supplier's word that problems are fixed is risky.",
    avoid: "Book a reinspection before releasing payment.",
  },
  {
    mistake: "Treating FRI as a certificate.",
    hurts: "An FRI does not replace mandatory certification or laboratory testing.",
    avoid: "Check separately whether your product needs government compliance.",
  },
];

export const TIPS_ITEMS: string[] = [
  "Share the golden sample early. Make sure the factory has a sealed approved sample for the inspector to compare against.",
  'Write tolerances into your specifications. "About 70 cm" is hard to judge; "70 cm ± 1 cm" is not.',
  "Link inspection to payment. Make balance payment depend on a passed FRI. This keeps suppliers focused on quality.",
  "Plan for peak season. Inspector calendars fill up before festive and holiday shipments. Book early for final random inspection for festive season orders.",
  "Use the same checklist every time. Consistent checklists make supplier performance easy to compare.",
  "Read the whole report, not just the verdict. A pass with many minor defects may still signal a trend you should address.",
  "Combine inspections when it makes sense. You can book container loading and final inspection together to protect the goods through loading.",
  "Keep records. Store every report. Over time, your pass rate, failure rate and rejection rate by supplier tell you where to focus.",
];

export const COMPARISON_INTRO =
  "Final random inspection is often confused with other inspections. This table shows how they differ.";

export const COMPARISON_ROWS: TableRow[] = [
  {
    type: "Pre-production inspection (PPI)",
    when: "Before bulk production",
    purpose: "Check materials, components and first samples",
    bestFor: "New suppliers, new products",
  },
  {
    type: "During production inspection (DPI)",
    when: "When part of the order is produced",
    purpose: "Find defects early while they can be fixed",
    bestFor: "Large or complex orders",
  },
  {
    type: "Final random inspection (FRI)",
    when: "Production complete, at least 80% packed",
    purpose: "Check the finished lot before shipment and payment",
    bestFor: "Almost every order",
  },
  {
    type: "Container loading inspection (CLI)",
    when: "During loading",
    purpose: "Check quantity, condition and loading method",
    bestFor: "High-value or fragile goods",
  },
  {
    type: "100 percent inspection",
    when: "Any stage, every unit",
    purpose: "Sort good units from defective units",
    bestFor: "Failed lots, critical items",
  },
];

export const COMPARISON_BLOCKS: { title: string; text: string }[] = [
  {
    title: "Final random inspection vs pre shipment inspection.",
    text: 'These are the same service under different names. "FRI vs PSI" is a question of wording, not scope.',
  },
  {
    title: "Final random inspection vs container loading inspection.",
    text: "An FRI checks product quality before shipment. A container loading inspection checks how the goods are loaded. Many buyers book both.",
  },
  {
    title: "FRI vs during production inspection.",
    text: "A DPI finds problems early; an FRI confirms the final result. They work best together on large or new orders.",
  },
  {
    title: "FRI vs pre-production inspection.",
    text: "A PPI prevents problems by checking inputs; an FRI verifies outputs.",
  },
  {
    title: "Final random inspection vs 100 percent inspection.",
    text: "An FRI uses statistical sampling to judge the whole lot. A 100 percent inspection or sorting inspection checks every unit and is usually used to fix a failed lot.",
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is final random inspection?",
    a: "A final random inspection is an on-site quality check of finished goods when production is complete and at least 80% of the order is packed. An inspector checks a random sample using AQL sampling and reports whether the lot passes.",
  },
  {
    q: "How much does final random inspection cost in India?",
    a: "Cost depends on inspector man-days, order quantity, number of styles, on-site tests and factory location. We share a quote for your specific order before you confirm the booking.",
  },
  {
    q: "What is the price of one man-day inspection?",
    a: "The man-day price depends on location, travel and scope. Please request a quote with your order details, as we do not publish a fixed price list.",
  },
  {
    q: "Are travel charges included in inspection fee?",
    a: "This depends on the factory location. The quote clearly shows whether travel is included or charged separately.",
  },
  {
    q: "How do I book a final random inspection with you?",
    a: "Share your product, quantity, factory address, expected packing date and AQL requirements through our booking form or by email. We confirm the date after checking with the supplier.",
  },
  {
    q: "How early should I book a final random inspection?",
    a: "Book as soon as you know the expected packing date. Earlier booking gives time for document review and supplier confirmation.",
  },
  {
    q: "Can I book an inspection at short notice?",
    a: "Yes, where an inspector is available. Urgent requests are handled on a best-effort basis and confirmed before the visit.",
  },
  {
    q: "How soon will I receive the FRI report?",
    a: "The report timeline is confirmed at booking. If you need a same-day or next-day report, tell us in advance so we can plan for it.",
  },
  {
    q: "Does the FRI report include photos?",
    a: "Yes. The report includes photographs of the product, packaging, labels and every defect found. Video can be added on request.",
  },
  {
    q: "Which AQL levels do you follow?",
    a: "We follow the AQL levels you specify. If you have none, we explain common choices, such as zero for critical defects, 2.5 for major and 4.0 for minor defects.",
  },
  {
    q: "Can I set my own AQL levels?",
    a: "Yes. Your AQL levels and inspection level are applied as agreed at booking.",
  },
  {
    q: "Do you use ISO 2859-1 sampling tables?",
    a: "Yes. Sample size and acceptance numbers are based on ISO 2859-1 sampling tables, unless your buyer requires a different method.",
  },
  {
    q: "What documents should I share before inspection?",
    a: "Share the purchase order, packing list, specifications, approved sample details, AQL requirements, artwork and label files, and any test requirements.",
  },
  {
    q: "Do I need to send a golden sample?",
    a: "A golden sample is strongly recommended. It gives the inspector a clear reference for colour, finish and workmanship.",
  },
  {
    q: "What if goods are less than 80 percent packed?",
    a: "The inspector records the packing status. You can choose to continue with a limited inspection or reschedule once more goods are packed.",
  },
  {
    q: "What happens if my inspection fails?",
    a: "You share the report with your supplier, agree on rework, and book a reinspection. We help you plan the next steps.",
  },
  {
    q: "Is reinspection charged separately?",
    a: "Yes, a reinspection is a separate visit. Many buyers agree with their supplier in advance on who covers this cost.",
  },
  {
    q: "Can you combine FRI with container loading inspection?",
    a: "Yes. Combining both protects the goods from the final quality check through to loading.",
  },
  {
    q: "Can you also do pre-production and during production inspection?",
    a: "Yes. We support PPI, DPI, FRI and CLI, so you can plan inspections across the full production cycle.",
  },
  {
    q: "Do you offer lab testing along with FRI?",
    a: "On-site tests are part of FRI. Formal laboratory testing is arranged separately through an accredited testing laboratory when needed.",
  },
  {
    q: "Which cities in India do you cover?",
    a: "We coordinate inspections across major manufacturing hubs, including Delhi NCR, Tirupur, Ludhiana, Jaipur, Moradabad, Panipat, Agra and other cities. Coverage is confirmed for each booking.",
  },
  {
    q: "Which product categories do you inspect?",
    a: "We inspect textiles and apparel, electronics and electricals, toys, furniture, footwear, home goods and housewares, and many other consumer products.",
  },
  {
    q: "Do you inspect for Amazon and Flipkart sellers?",
    a: "Yes. Inspections can include marketplace labels, barcode checks and packaging that suits marketplace and courier handling.",
  },
  {
    q: "Do you work with small brands and startups?",
    a: "Yes. Small orders and startup brands often benefit most from an independent inspection.",
  },
  {
    q: "Are your inspectors independent from suppliers?",
    a: "Yes. Our inspectors are independent and follow an integrity policy. They do not accept payment or favours from suppliers.",
  },
  {
    q: "How do you keep my product information confidential?",
    a: "Your documents are used only for your inspection. We can sign an NDA on request.",
  },
];

export const CTA_TITLE = "Get Your Next Shipment Checked Before It Leaves the Factory";

export const CTA_PARAGRAPHS: string[] = [
  "You have already invested in your product, your supplier and your brand. A final random inspection makes sure that investment arrives the way you planned. Ornate Quality Service Pvt Ltd helps you define the right checks, coordinates with your supplier, inspects your goods at the factory and gives you a clear, evidence-based report, so you can release payment and ship with confidence.",
  "Share your product, quantity, factory location and expected packing date, and our team will guide you through the next steps.",
];

export const CTA_WAYS_INTRO = "Ways to get started:";

export const CTA_WAYS: string[] = [
  "Fill in the final random inspection booking form to schedule final random inspection on your packing date.",
  "Request a final random inspection quote by email if you want pricing for your order first.",
  "Call the final random inspection contact number for urgent pre shipment inspection, a next day final inspection or a same week inspection booking.",
  "Book FRI for Amazon FBA shipment runs, book inspection for private label order runs, or book pre shipment inspection for LC shipments where the bank needs a report.",
  "Arrange third party inspection across several suppliers with a single inspection proposal covering your whole programme.",
];
