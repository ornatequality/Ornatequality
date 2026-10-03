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

export const PPI_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is", label: "What Is Pre-Production Inspection (PPI)?" },
  { id: "why-important", label: "Why Is Pre-Production Inspection Important?" },
  { id: "who-needs", label: "Who Needs Pre-Production Inspection?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "features", label: "Key Features" },
  { id: "eligibility", label: "Eligibility" },
  { id: "documents", label: "Documents Required" },
  { id: "process", label: "Step-by-Step Process" },
  { id: "timeline", label: "Timeline" },
  { id: "cost", label: "Cost Factors" },
  { id: "validity", label: "Validity" },
  { id: "renewal", label: "Renewal" },
  { id: "challenges", label: "Common Challenges" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "industries", label: "Industries Served" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "How PPI Compares to Other Inspection Types" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Ready to Verify Your Production Before It Scales Up?" },
];

export const BANNER_TITLE = "Pre-Production Inspection (PPI) Services in India";

export const BANNER_SUBTITLE =
  "Catch quality problems before they leave the factory — not after they reach your customers.";

export const BANNER_DESCRIPTION =
  "Ornate Quality Service Pvt. Ltd. provides pre-production inspection services for manufacturers, importers, exporters, and brand owners who need verified product quality before mass production begins. Our inspectors check raw materials, workmanship, and product specifications against your approved sample, using AQL-based sampling aligned with the ISO 2859-1:2026 standard — so you approve production with confidence, not guesswork.";

export const WHAT_YOU_GET: string[] = [
  "Independent, third-party pre-production inspection — not a self-report from your factory",
  "AQL-based sampling, ISO 2859-1:2026 aligned, with clear critical / major / minor defect classification",
  "Trained and experienced inspectors with pan-India coverage",
  "Detailed inspection reports with photo and video documentation",
  "Support across textiles, electronics, toys, furniture, footwear, and more",
  "Fast booking, with same-day and next-day report options where scheduling allows",
];

export const INTRO_PARAGRAPHS: string[] = [
  "A pre-production inspection (PPI) is a quality check carried out before a factory starts mass production. An inspector visits the factory, verifies the raw materials and components against your specifications, checks workmanship on early samples, and confirms the production line is genuinely ready — before thousands of units are made.",
  "Businesses request PPI for one simple reason: it is far cheaper to fix a problem before mass production than after it. Once a factory has cut fabric, molded plastic, or assembled thousands of units, a defect found during a final inspection can mean a delayed shipment, expensive rework, or a batch that has to be scrapped.",
];

export const INTRO_WHEN_INTRO = "PPI becomes especially important when:";

export const INTRO_WHEN_ITEMS: string[] = [
  "You are working with a new or unfamiliar factory",
  "The order is large enough that a mistake would be costly to fix",
  "The product has strict specifications (color, size, material, safety features)",
  "You are sourcing for the first time and cannot visit the factory yourself",
  "The buyer or retail partner requires third-party quality verification",
];

export const INTRO_CLOSING =
  "On this page, you will find what pre-production inspection covers, who needs it, the step-by-step process, what a report includes, and how Ornate Quality Service supports you through it.";

export const WHAT_IS_PARAGRAPHS: string[] = [
  "Pre-production inspection is an on-site quality check performed after your order is confirmed but before the factory begins full-scale manufacturing. It sits at the very start of the production cycle — typically once the golden sample is approved, the purchase order is finalized, and raw materials have started arriving at the factory.",
];

export const WHAT_IS_VERIFY_INTRO = "During the visit, an inspector verifies:";

export const WHAT_IS_VERIFY_ITEMS: { title: string; text: string }[] = [
  {
    title: "Raw material verification",
    text: "that the materials on hand match your specification sheet",
  },
  {
    title: "Workmanship on early samples",
    text: "stitching, molding, assembly, or finishing quality",
  },
  {
    title: "Production readiness",
    text: "whether the factory genuinely has the capacity and setup to deliver your order",
  },
  {
    title: "Conformity to your approved (golden) sample",
    text: "color, size, and construction",
  },
];

export const WHAT_IS_CLOSING: string[] = [
  "The purpose is simple: catch a specification mismatch, a material substitution, or a workmanship issue while it is still cheap and fast to correct — not after thousands of units have already been produced.",
  "PPI is relevant across almost every manufacturing industry that ships in bulk, from garments and electronics to toys, furniture, and footwear. For any business bringing in factory-made goods, it is one of the earliest and most cost-effective quality checkpoints available.",
];

export const WHY_IMPORTANT_ITEMS: { title: string; text: string }[] = [
  {
    title: "It protects your investment.",
    text: "Mass production is expensive to reverse. Catching a problem before the factory scales up avoids the cost of reworking or scrapping a bulk order.",
  },
  {
    title: "It reduces product returns and chargebacks.",
    text: "When defects are caught early, fewer defective units reach your customers or retail partners — which means fewer returns, fewer chargebacks, and a lower defect rate over time.",
  },
  {
    title: "It builds trust with your buyers and partners.",
    text: "An independent inspection report gives your buyers, retail partners, or marketplace accounts documented proof that quality was verified before shipment — not just claimed.",
  },
  {
    title: "It supports export quality compliance.",
    text: "For exporters, a documented pre-production check is part of demonstrating quality control to overseas buyers who cannot visit the factory themselves.",
  },
  {
    title: "It improves market access.",
    text: "Many international buyers, retail chains, and marketplaces expect third-party quality verification as a standard part of sourcing from a new factory.",
  },
  {
    title: "It reduces operational risk.",
    text: "A pre-production inspection surfaces factory capability issues — understaffing, equipment problems, material shortages — before they turn into a missed delivery deadline.",
  },
];

export const WHO_NEEDS_TYPE_INTRO = "By business type:";

export const WHO_NEEDS_TYPES: { title: string; text: string }[] = [
  {
    title: "Importers",
    text: "verifying goods before they leave the country of origin",
  },
  {
    title: "Exporters",
    text: "demonstrating quality control to overseas buyers",
  },
  {
    title: "Manufacturers",
    text: "checking their own supply chain and sub-contracted production",
  },
  {
    title: "Brand owners and private label brands",
    text: "protecting product quality under their own name",
  },
  {
    title: "Buying agents and sourcing managers",
    text: "verifying factories on behalf of their clients",
  },
  {
    title: "E-commerce sellers, including Amazon FBA sellers",
    text: "reducing returns and negative reviews caused by defective stock",
  },
  {
    title: "Retail sourcing teams and wholesale buyers",
    text: "checking bulk orders before they reach the warehouse",
  },
  {
    title: "MSMEs, startups, and large enterprises",
    text: "any business ordering factory-made goods in volume, regardless of size",
  },
];

export const WHO_NEEDS_INDUSTRY =
  "By industry, pre-production inspection is commonly used for textiles, garments and apparel, electronics and electrical appliances, toys, furniture, footwear, home goods and houseware, hardware, plastic products, leather goods, kitchenware, gift items, bags and luggage, and sporting goods.";

export const WHO_NEEDS_CLOSING =
  "If your business places bulk orders with a factory and cannot personally inspect every unit before it ships, pre-production inspection is relevant to you — whether this is your first order with a supplier or your fiftieth.";

export const BENEFITS_ROWS: TableRow[] = [
  {
    benefit: "Compliance",
    meaning:
      "Independent verification that production matches your specifications and buyer requirements, backed by a documented report",
  },
  {
    benefit: "Business growth",
    meaning:
      "Fewer disrupted shipments and reworks means more capacity to take on new orders and new factories with confidence",
  },
  {
    benefit: "Trust",
    meaning:
      "An independent, third-party inspection report gives your buyers and partners evidence — not just assurances — that quality was checked",
  },
  {
    benefit: "Quality",
    meaning:
      "AQL-based sampling and clear critical / major / minor defect classification catch real issues, not just cosmetic ones",
  },
  {
    benefit: "Market access",
    meaning:
      "Many international buyers and retail chains expect third-party quality verification as standard practice",
  },
  {
    benefit: "Risk reduction",
    meaning:
      "Identifying defects before mass production reduces your exposure to reduced product return rates, chargebacks, and reputational damage",
  },
];

export const BENEFITS_CLOSING =
  "Together, these benefits are why pre-production inspection is treated as a standard step in professional sourcing — not an optional extra.";

export const FEATURES_ITEMS: string[] = [
  "AQL-based sampling — inspections follow Acceptable Quality Level (AQL) sampling, aligned with the ISO 2859-1:2026 standard, rather than checking every single unit",
  "Clear defect classification — every issue found is logged as a critical, major, or minor defect, so you know exactly how serious it is",
  "Trained and experienced inspectors — with pan-India coverage across factory clusters",
  "Photo and video documentation — every defect is documented, not just described",
  "Checklist-based process — inspections follow a structured checklist built around your product specifications, not an informal walkthrough",
  "Transparent reporting — clear, consistent inspection report format so you can compare results across factories and orders",
  "Multilingual inspectors — for factories where language could otherwise be a barrier to clear communication",
  "Fast booking and scheduling — including same-day and next-day report options where factory location and inspector availability allow",
  "Support for repeat and multi-factory sourcing — useful if you work with more than one supplier or place recurring orders",
];

export const ELIGIBILITY_INTRO =
  "Pre-production inspection is not a licensed or government-regulated service, so there is no formal eligibility criteria to meet. In practice, it is relevant to any business placing a bulk manufacturing order where quality needs to be verified before mass production.";

export const ELIGIBILITY_FIT_INTRO = "You are a good fit for this service if:";

export const ELIGIBILITY_FIT_ITEMS: string[] = [
  "You have a confirmed purchase order with a factory",
  "Production has reached, or is about to reach, the raw material or early-sample stage",
  "You want quality verified before the factory scales up to full production",
];

export const ELIGIBILITY_NOTES_INTRO = "A few important notes:";

export const ELIGIBILITY_NOTES: string[] = [
  "An approved sample (often called a golden sample) makes the inspection more accurate, since inspectors check production against it. If one is not yet available, this can be discussed at the time of booking.",
  "The inspection is most useful when scheduled before the factory begins bulk manufacturing — not after.",
  "Requirements can vary by product category and order size; specific expectations are confirmed with our team when you book.",
];

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Purchase Order (PO)",
    purpose: "Confirms order quantity, specifications, and delivery terms",
    mandatory: "Mandatory",
    notes: "Production is checked against what the PO specifies",
  },
  {
    document: "Buyer Specification Sheet / Technical Data Sheet",
    purpose: "Defines exact product specifications, materials, and tolerances",
    mandatory: "Mandatory",
    notes: "Forms the basis of the inspection checklist",
  },
  {
    document: "Approved Sample (Golden Sample)",
    purpose: "Reference sample that production is compared against",
    mandatory: "Mandatory where available",
    notes: "If no approved sample exists yet, this is discussed at booking",
  },
  {
    document: "Reference Sample",
    purpose: "Extra sample used for comparison (fabric, color, packaging)",
    mandatory: "Optional",
    notes: "Useful for color, shade, or material comparisons",
  },
  {
    document: "Buyer Quality Requirements / Vendor Compliance Manual",
    purpose: "Any buyer-specific quality manual or compliance requirements",
    mandatory: "Optional",
    notes: "Shared in advance so inspectors check accordingly",
  },
  {
    document: "Export Documentation",
    purpose: "Export-specific paperwork relevant to the shipment",
    mandatory: "Optional",
    notes: "Depends on the buyer's and destination country's requirements",
  },
];

export const DOCUMENTS_NOTE =
  "Exact document requirements can vary depending on your product category and the factory involved. Our team confirms the specific list with you when you book an inspection.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Book",
    color: "#0b57b5",
    title: "1. Book the inspection.",
    text: "Share your purchase order, specification sheet, and (if available) your approved sample. We schedule the inspection based on your factory's production timeline.",
  },
  {
    step: "02",
    label: "Confirm",
    color: "#2563eb",
    title: "2. Confirm the inspection stage.",
    text: "Ideally, the visit happens once raw materials have started arriving, the golden sample is approved, and the factory is close to starting bulk production — not after mass production has already begun.",
  },
  {
    step: "03",
    label: "Materials",
    color: "#0891b2",
    title: "3. Raw material verification.",
    text: "The inspector checks incoming materials and components against your specification sheet.",
  },
  {
    step: "04",
    label: "Samples",
    color: "#059669",
    title: "4. Sample and workmanship inspection.",
    text: "Early production samples are checked for construction, finishing, and workmanship quality.",
  },
  {
    step: "05",
    label: "AQL",
    color: "#d97706",
    title: "5. AQL-based sampling.",
    text: "Inspectors apply an Acceptable Quality Level (AQL) sampling plan, aligned with the ISO 2859-1:2026 standard, appropriate to your order size — rather than checking every unit.",
  },
  {
    step: "06",
    label: "Defects",
    color: "#ea580c",
    title: "6. Defect identification and classification.",
    text: "Any issues found are logged and classified as critical, major, or minor defects.",
  },
  {
    step: "07",
    label: "Readiness",
    color: "#7c3aed",
    title: "7. Production readiness assessment.",
    text: "The inspector evaluates whether the factory genuinely has the capacity, staffing, and materials to deliver your order on time.",
  },
  {
    step: "08",
    label: "Report",
    color: "#0b57b5",
    title: "8. Report preparation.",
    text: "Findings are compiled into a structured inspection report with photo (and, where applicable, video) documentation.",
  },
  {
    step: "09",
    label: "Review",
    color: "#2563eb",
    title: "9. Report delivery and review.",
    text: "You receive the report and can review the findings with our team before deciding whether to approve the factory to proceed to mass production.",
  },
  {
    step: "10",
    label: "Sign-off",
    color: "#0891b2",
    title: "10. Sign-off or corrective action.",
    text: "If the inspection passes, production can move ahead. If issues are found, we can help you communicate corrective actions to the factory before a re-check.",
  },
];

export const TIMELINE_INTRO =
  "The exact schedule for a pre-production inspection depends on your factory's location, your product category, and inspector availability, so it is best confirmed at the time of booking. In general, the process involves these stages:";

export const TIMELINE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Booking and scheduling",
    text: "once your documents are shared, an inspection date is confirmed with the factory",
  },
  {
    title: "Factory visit",
    text: "typically a single day, though larger or more complex orders may need more time on-site",
  },
  {
    title: "Report preparation and delivery",
    text: "we offer fast turnaround options, including same-day and next-day report delivery, depending on the scope of the inspection and scheduling",
  },
];

export const TIMELINE_CLOSING =
  "For time-sensitive orders, let us know at booking — we can discuss options like urgent or same-day scheduling based on inspector availability in your factory's location.";

export const COST_INTRO =
  "We do not publish a fixed price list, because pre-production inspection cost depends on several factors specific to your order. Instead of quoting a flat number, here is what actually drives the cost:";

export const COST_ITEMS: string[] = [
  "Product category and complexity — a simple houseware item takes less inspection time than a multi-component electronic product",
  "Number of inspector-days required — larger or more complex orders may need more time on-site, which affects the per-day rate applied",
  "Factory location — travel distance to the factory can affect overall cost",
  "Order size and sampling level chosen — a stricter AQL sampling plan (for example, AQL 1.5 versus AQL 4.0) generally involves checking a larger sample, which can affect cost",
  "Testing add-ons — if functional, safety, or durability testing is required beyond a standard visual and workmanship check",
  "Booking frequency — businesses with recurring or multi-factory sourcing needs may benefit from a package or annual arrangement rather than paying per single order",
];

export const COST_NOTE =
  "For an accurate cost, share your product category, order size, and factory location when you request a quotation — we will confirm pricing based on your specific inspection.";

export const VALIDITY_PARAGRAPHS: string[] = [
  "A pre-production inspection is not a certificate with an expiry date. It is a point-in-time check tied to one specific production order or batch — it confirms that, at the time of the visit, the raw materials, workmanship, and production readiness matched your requirements for that order.",
  "Because of this, a PPI result does not automatically apply to a different order, a different product variation, or a future production run with the same factory. Each new order is its own inspection.",
];

export const RENEWAL_PARAGRAPHS: string[] = [
  "Since pre-production inspection is not a certificate, there is no formal renewal process. Instead, a fresh inspection is booked for each new production order or repeat sourcing run.",
  "If you work with the same factory regularly, this does not mean starting from scratch every time — businesses with repeat sourcing orders often set up an annual package or ongoing arrangement with us, so booking each new inspection is quick and the process stays consistent across orders.",
];

export const RENEWAL_PRECAUTIONS_INTRO = "A few precautions worth keeping in mind:";

export const RENEWAL_PRECAUTIONS: string[] = [
  "Do not assume a factory that passed inspection once will automatically pass again — staffing, materials, and processes can change between orders",
  "Re-inspect after any major change to your product specification, even with a familiar factory",
  "Keep your specification sheets and approved samples up to date, since these form the basis of every inspection",
];

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Incomplete or outdated specification sheets.",
    text: "If the buyer specification sheet does not clearly define materials, tolerances, and construction details, inspectors have less to check against — and issues can slip through.",
  },
  {
    title: "No approved sample.",
    text: "Without a golden sample, it is harder to confirm that color, size, and construction match what was actually agreed with the factory.",
  },
  {
    title: "Booking too late.",
    text: "Scheduling the inspection after the factory has already started bulk production defeats much of the purpose — by then, correcting an issue is far more expensive.",
  },
  {
    title: "Unclear defect severity.",
    text: "Not every issue found is equally serious. Without clear critical / major / minor defect classification, buyers and factories can disagree about what actually needs fixing before production continues.",
  },
  {
    title: "Language and communication gaps.",
    text: "Miscommunication between buyer, factory, and inspector can lead to requirements being misunderstood — this is one reason multilingual inspectors matter.",
  },
  {
    title: "Treating PPI as a one-off step.",
    text: "Some buyers only inspect their very first order with a new factory and assume future batches will be the same. Staffing, materials, and processes can change, so ongoing spot checks matter for repeat sourcing.",
  },
];

export const HOW_WE_HELP_INTRO =
  "Ornate Quality Service supports you through the full pre-production inspection process, not just the factory visit itself:";

export const HOW_WE_HELP_ITEMS: string[] = [
  "Documentation and coordination support — helping you organize the purchase order, specification sheet, and sample information before the inspection",
  "Booking and scheduling assistance — coordinating inspection dates directly with your factory",
  "Technical guidance for first-time exporters and importers — explaining what to expect and how to prepare, especially if this is your first time working with a new factory",
  "AQL sampling and testing coordination — applying the right sampling level for your order size and product type",
  "Compliance guidance — helping you understand how inspection findings relate to your buyer's or retail partner's quality requirements",
  "Clear, data-backed reporting — a consistent report format with photo documentation, so results are easy to compare across factories and orders",
  "End-to-end support — from initial booking through to report delivery and, if needed, guidance on next steps after a failed inspection",
];

export const HOW_WE_HELP_NOTE =
  "We act as your quality assurance partner throughout the process — we do not offer guarantees of certification or approval outcomes, since those decisions depend on what the inspection actually finds.";

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Trained and experienced inspectors.",
    text: "Our team includes ISO-trained pre-production inspectors with verified credentials, applying a consistent, checklist-based methodology on every visit.",
  },
  {
    title: "Independent, third-party verification.",
    text: "We inspect on your behalf, not the factory's — our findings reflect what we actually observe, not what we're told.",
  },
  {
    title: "Pan-India coverage.",
    text: "From major manufacturing hubs to smaller factory clusters, we coordinate inspections across India.",
  },
  {
    title: "Transparent reporting.",
    text: "Every report follows a clear, consistent format with photo documentation, so you know exactly what was checked and what was found — no vague summaries.",
  },
  {
    title: "Clear methodology.",
    text: "We are upfront about how our sampling and defect classification works, so you understand exactly what a passed or failed inspection means.",
  },
  {
    title: "Backed by experienced QC professionals.",
    text: "Our inspectors bring hands-on quality control experience across multiple industries, not just a checklist to follow.",
  },
  {
    title: "Support beyond the visit.",
    text: "From documentation help before the inspection to guidance on next steps afterward, we work with you through the full process — not just the day of the factory visit.",
  },
];

export const INDUSTRIES_ROWS: TableRow[] = [
  {
    industry: "Textiles, garments & apparel",
    why: "Fabric quality, stitching, shade matching, and sizing are common sources of defects",
  },
  {
    industry: "Electronics & electrical appliances",
    why: "Component quality and functional readiness need verification before mass assembly",
  },
  {
    industry: "Toys",
    why: "Safety-related workmanship and material checks matter before bulk production",
  },
  {
    industry: "Furniture",
    why: "Material quality, joinery, and finish are hard to fix once large batches are built",
  },
  {
    industry: "Footwear",
    why: "Sole bonding, stitching, and sizing consistency are easier to catch early",
  },
  {
    industry: "Home goods & houseware",
    why: "Functional and dimensional accuracy checks reduce returns",
  },
  {
    industry: "Hardware & plastic products",
    why: "Material and dimensional verification before large production runs",
  },
  {
    industry: "Leather goods, kitchenware & gift items",
    why: "Workmanship and finish consistency checks before bulk manufacturing",
  },
  {
    industry: "Bags & luggage, sporting goods",
    why: "Construction and material checks relevant to durability",
  },
];

export const INDUSTRIES_CLOSING =
  "If your product category is not listed above, our inspection approach — raw material verification, workmanship checks, and AQL-based sampling — applies broadly across manufactured goods. Get in touch to confirm coverage for your specific product.";

export const MISTAKES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Skipping inspection to save time or cost.",
    text: "This is the most expensive mistake in the long run — the cost of a defective bulk shipment almost always exceeds the cost of the inspection itself.",
  },
  {
    title: "Not sharing a complete specification sheet.",
    text: "Inspectors can only check what they know to check. Vague or incomplete specifications lead to gaps in coverage.",
  },
  {
    title: "Skipping the golden sample approval step.",
    text: "Without an approved reference sample, it is much harder to confirm the factory is producing exactly what was agreed.",
  },
  {
    title: "Booking the inspection too late.",
    text: "Waiting until after bulk production has started removes most of the value — by then, fixing an issue is far more disruptive.",
  },
  {
    title: "Ignoring defect severity.",
    text: "Treating every defect as equally serious (or equally minor) leads to poor decisions. Critical, major, and minor defects call for different responses.",
  },
  {
    title: "Not verifying inspector experience.",
    text: "Not all inspections are equal — trained, experienced inspectors with a clear methodology produce more reliable results than an informal check.",
  },
  {
    title: "Assuming one good inspection means every future batch will be fine.",
    text: "Factory conditions change. Repeat sourcing still benefits from ongoing checks.",
  },
];

export const EXPERT_TIPS: string[] = [
  "Book before bulk production starts — ideally once raw materials arrive and the golden sample is approved, not after.",
  "Always approve a reference sample first. It gives inspectors a clear, objective benchmark to check production against.",
  "Match your sampling level to your order. A stricter AQL level (like AQL 1.5) makes sense for high-value or safety-relevant products; a standard level may be sufficient for lower-risk goods.",
  "Ask for photo and video documentation, not just a written summary — it is far easier to assess a defect visually.",
  "Request a clear, consistent report format so you can compare results across different factories and orders over time.",
  "Share your full specification sheet up front — the more detail inspectors have, the more thorough the check.",
  "Plan for the possibility of a re-check. If major defects are found, build a little buffer time into your schedule for corrective action and a follow-up inspection.",
  "Treat repeat orders with the same factory as separate inspections, especially after any change in specification, season, or staffing at the factory.",
];

export const COMPARISON_INTRO =
  "Pre-production inspection is one checkpoint among several used across the sourcing process. Here is how it compares:";

export const COMPARISON_ROWS: TableRow[] = [
  {
    type: "Pre-Production Inspection (PPI)",
    when: "Before mass production begins",
    focus: "Raw materials, early workmanship, and production readiness",
  },
  {
    type: "During Production Inspection (DPI)",
    when: "While the order is actively being produced",
    focus: "Ongoing workmanship and progress, partway through the run",
  },
  {
    type: "Final Random Inspection (FRI)",
    when: "Once a significant share of the order is finished and packed",
    focus: "Finished goods, ready for shipment",
  },
  {
    type: "Container Loading Inspection (CLI)",
    when: "At the time goods are loaded for shipment",
    focus: "Loading process, quantity, and container condition",
  },
  {
    type: "Factory Audit",
    when: "Before or independent of a specific order",
    focus: "The factory's overall capability, processes, and compliance — not a specific product",
  },
  {
    type: "Social Compliance Audit",
    when: "Independent of a specific order",
    focus: "Labor practices and ethical sourcing standards, rather than product quality",
  },
  {
    type: "In-house Quality Control",
    when: "Ongoing, managed internally",
    focus: "Whatever checks the factory or buyer's own team chooses to run",
  },
  {
    type: "Third-Party Inspection",
    when: "Any stage",
    focus: "An independent inspector, rather than the factory or buyer's own staff",
  },
];

export const COMPARISON_NOTE =
  "A note on sampling strictness: within AQL-based sampling, a lower AQL number (such as AQL 1.5) means a stricter tolerance for defects than a higher one (such as AQL 4.0). Which level makes sense depends on your product's risk profile — our team can help you choose.";

export const COMPARISON_CLOSING =
  "Many businesses use more than one of these checkpoints together — for example, a pre-production inspection followed by a final random inspection before shipment — rather than relying on just one.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Why is pre-production inspection important?",
    a: "It catches material, workmanship, and specification issues before mass production begins, when they are cheapest and fastest to fix.",
  },
  {
    q: "When should pre-production inspection be done?",
    a: "Ideally once raw materials have started arriving and the golden sample is approved — before the factory begins bulk manufacturing.",
  },
  {
    q: "How much does pre-production inspection cost?",
    a: "Cost depends on your product category, order size, factory location, and the sampling level chosen. Share your order details for an accurate quotation.",
  },
  {
    q: "What is the difference between pre-production inspection and final inspection?",
    a: "PPI happens before mass production starts and checks materials and readiness. Final inspection (like FRI) happens once goods are largely finished and packed, checking the completed product.",
  },
  {
    q: "What is AQL in quality inspection?",
    a: "AQL (Acceptable Quality Level) is a sampling standard, aligned with ISO 2859-1:2026, used to check a representative sample of a batch rather than every single unit.",
  },
  {
    q: "How is sample size determined in AQL sampling?",
    a: "Sample size is based on the sampling standard applied and your order's batch size — our team applies the appropriate sampling plan for your order.",
  },
  {
    q: "What is the cost difference between PPI and full production inspection?",
    a: "PPI checks a sample before mass production, which is generally more time- and cost-efficient than inspecting a fully completed, much larger batch later in the process.",
  },
  {
    q: "What is checked during a pre-production inspection for kitchenware?",
    a: "Material safety, functional testing, dimensional and weight accuracy, surface finish, and packaging integrity are typical checks for this category.",
  },
  {
    q: "Do you provide pre-production inspection across India?",
    a: "Yes, we offer pan-India coverage across major manufacturing hubs and factory clusters.",
  },
  {
    q: "How do I schedule an inspection with your team?",
    a: "Share your purchase order, specification sheet, and sample details (if available), and we will coordinate a date directly with your factory.",
  },
  {
    q: "What is your inspection report turnaround time?",
    a: "We offer fast turnaround options, including same-day and next-day report delivery, depending on the scope of the inspection and scheduling.",
  },
  {
    q: "Do you offer AQL-based sampling?",
    a: "Yes, our inspections are AQL-based and aligned with the ISO 2859-1:2026 sampling standard.",
  },
  {
    q: "Can you inspect products for multiple industries?",
    a: "Yes — we cover textiles, electronics, toys, furniture, footwear, home goods, and more. Contact us to confirm coverage for your specific product.",
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "This is confirmed as part of your service agreement at booking — contact our team for current terms.",
  },
  {
    q: "Do you provide photo and video documentation in reports?",
    a: "Yes, findings are documented with photos, and video where applicable, alongside the written report.",
  },
  {
    q: "How do you assign inspectors for a booking?",
    a: "Inspectors are assigned based on your factory's location and your product category, drawing on our pan-India inspector coverage.",
  },
  {
    q: "What defects are checked during pre-production inspection?",
    a: "Inspectors check for issues in raw materials, workmanship, and construction, classifying each as a critical, major, or minor defect.",
  },
  {
    q: "Is pre-production inspection mandatory for exporters?",
    a: "It is not a legal requirement, but many buyers, retail partners, and marketplaces expect it as standard practice before accepting a shipment.",
  },
  {
    q: "Can pre-production inspection prevent bad shipments?",
    a: "It significantly reduces the risk by catching issues before mass production, though no inspection can guarantee a defect-free outcome.",
  },
  {
    q: "What documents are required for pre-production inspection?",
    a: "Typically a purchase order, specification sheet, and an approved sample where available. See the Documents Required section above for details.",
  },
  {
    q: "How long does a pre-production inspection take?",
    a: "A single factory visit is typically completed in a day, though larger or more complex orders may need more time.",
  },
  {
    q: "What happens if a pre-production inspection fails?",
    a: "We share the findings with you, and you can decide on corrective action with the factory before requesting a re-check.",
  },
  {
    q: "What is the difference between PPI and DPI?",
    a: "PPI happens before mass production starts; During Production Inspection (DPI) happens while the order is actively being produced.",
  },
  {
    q: "What is the difference between PPI and FRI?",
    a: "PPI happens before mass production; Final Random Inspection (FRI) happens once a large share of the order is finished and packed, closer to shipment.",
  },
  {
    q: "Do I need pre-production inspection for small orders?",
    a: "It can still be valuable, especially with a new or unfamiliar factory, though the scope may be adjusted for smaller batch sizes.",
  },
  {
    q: "What industries need pre-production inspection?",
    a: "Most manufactured-goods industries benefit, including textiles, electronics, toys, furniture, footwear, and home goods.",
  },
  {
    q: "What is a critical defect versus a major or minor defect?",
    a: "A critical defect typically affects safety or usability, a major defect affects functionality or appearance significantly, and a minor defect is a smaller cosmetic issue — each calls for a different response.",
  },
];

export const CTA_TITLE = "Ready to Verify Your Production Before It Scales Up?";

export const CTA_PARAGRAPHS: string[] = [
  "A pre-production inspection is one of the most cost-effective checkpoints in your sourcing process — catching issues while they are still cheap and fast to fix. Whether this is your first order with a new factory or a recurring production run, our team is ready to help.",
  "Share your purchase order and product specifications, and we will confirm inspector availability, scheduling, and pricing for your order — with clear, transparent reporting every step of the way.",
];
