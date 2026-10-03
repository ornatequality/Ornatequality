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

export const DPI_TOC: TocItem[] = [
  { id: "what-is", label: "What Is During Production Inspection (DPI)?" },
  { id: "why-important", label: "Why DUPRO Inspection Is Important" },
  { id: "who-needs", label: "Who Needs This Service" },
  { id: "features", label: "Key Features" },
  { id: "benefits", label: "Key Benefits" },
  { id: "scope", label: "Scope of Inspection" },
  { id: "process", label: "Step-by-Step Process" },
  { id: "aql", label: "AQL Sampling and Inspection Standards" },
  { id: "defects", label: "Defect Classification and Corrective Action" },
  { id: "documents", label: "Documents and Information Required" },
  { id: "eligibility", label: "Eligibility" },
  { id: "timeline", label: "Timeline and Scheduling" },
  { id: "cost", label: "Cost Factors" },
  { id: "report", label: "Inspection Report and Deliverables" },
  { id: "industries", label: "Industries We Cover" },
  { id: "locations", label: "Service Coverage Across India" },
  { id: "how-we-help", label: "How We Help and Why Choose Us" },
  { id: "challenges", label: "Common Challenges" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "Comparison" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Book Your Inspection" },
];

export const BANNER_TITLE = "During Production Inspection (DPI) Services in India";

export const BANNER_SUBTITLE =
  "Catch defects while your order is still on the line — not after it is packed.";

export const BANNER_DESCRIPTION =
  "A DUPRO inspection puts an independent inspector inside your supplier's factory while manufacturing is still running. The inspector draws a random sample from what has been produced so far, checks it against your specification, verifies the quantity actually made, and reports what is really happening on the floor. If something is wrong, there is still time to correct it.";

export const BANNER_AGENCY =
  "Ornate Quality Service Pvt Ltd is a during production inspection agency India and production inspection company India that businesses rely on for DPI inspection India and during production inspection service India — covering the country's manufacturing clusters with AQL-based sampling, photo-documented reporting and corrective action follow-up.";

export const WHAT_IS_PARAGRAPHS: string[] = [
  "During production inspection is a third-party quality check carried out while an order is still being manufactured, typically once 20–80% of production is complete, so that defects can be identified and corrected before the run finishes. It is not a factory tour and not a supplier self-declaration. It is an independent, sampling-based verification performed by someone who does not work for the manufacturer.",
  "Across the trade the same service is called DUPRO inspection, dupro quality inspection, a during production check, a dupro check, a mid-production check, a mid production inspection, factory production inspection, factory inspection during production, onsite production inspection or simply goods inspection during production. Agencies market it as DPI inspection services, dupro inspection services, DPI quality inspection services, production inspection services India, manufacturing quality inspection India, inline inspection India or in production inspection services. Terminology varies between buying offices and factories; the method does not. If you are unsure whether what a supplier is offering is the same thing, send us the scope and we will tell you.",
  "Product inspection during production — also called production stage inspection, or inspection while goods are in production — sits in the middle of the inspection sequence. Seeing where it falls explains why it exists:",
];

export const STAGE_ROWS: TableRow[] = [
  {
    stage: "Pre-production inspection",
    when: "Before the line starts",
    answers: "Are the right materials and components in place before production begins?",
  },
  {
    stage: "During production inspection (DUPRO)",
    when: "Typically 20–80% of production complete",
    answers: "Is what is being made actually correct — and is there still time to fix it?",
  },
  {
    stage: "Final random inspection",
    when: "100% produced, around 80% packed",
    answers: "Is the finished lot acceptable to ship?",
  },
  {
    stage: "Container loading inspection",
    when: "At the point of loading",
    answers: "Did the approved goods actually go into the container?",
  },
];

export const WHAT_IS_DEFINING =
  "The defining characteristic of DPI is recoverability. Every other inspection stage tells you the outcome. This one gives you time to change it.";

export const QUESTIONS_TITLE = "The three questions a DPI answers";

export const QUESTIONS_ITEMS: { title: string; text: string }[] = [
  {
    title: "First, is the product correct?",
    text: "The inspector compares produced units against your approved reference — the golden sample, the technical data sheet, the specification in your purchase order. This covers workmanship, dimensions and tolerance, materials, function, colour and finish.",
  },
  {
    title: "Second, is the quantity real?",
    text: "Produced, semi-finished and packed quantities are counted or estimated from the floor and the packing area. This is often the single most valuable line in the report, because supplier progress reporting is optimistic by nature.",
  },
  {
    title: "Third, will it ship correctly?",
    text: "Packing, inner and master cartons, shipping marks, barcodes and labelling are checked against your requirements. A perfect product in the wrong packaging is still a rejected shipment.",
  },
];

export const EXAMPLE_TITLE = "A worked example";

export const EXAMPLE_PARAGRAPHS: string[] = [
  "You have ordered 12,000 units and the supplier reports 60% completion. Your inspector attends and finds 7,100 units produced of which 2,400 are packed, broadly consistent with the claim. A random sample drawn per the agreed sampling plan shows a run of units where a fastening component differs from the approved sample. Master carton shipping marks are missing the destination port.",
  "None of those findings are catastrophic at this moment. The component issue is confined to a batch that can be reworked, and carton marking can be corrected before the remaining cartons are printed. Discovered four weeks later at final inspection, the same three findings mean full rework of a packed lot, or a shipment you accept knowing it is wrong. That is the entire argument for inspecting during production rather than after it.",
];

export const WHY_INTRO =
  "Quality inspection during manufacturing exists because quality is not stable across a production run. The first cartons off a line are frequently the supplier's best work, often made from the approved sample batch. Problems appear later — when a material substitution happens mid-run, when a second shift takes over, when subcontracted units are brought in to hit a delivery date, or when a component runs short and something similar is used instead.";

export const WHY_CLOSING =
  "An inspection at the end of production tells you that this happened. Quality control during production tells you it is happening, while the supplier can still do something about it — which is why quality assurance during production is structurally different from quality assurance after it.";

export const WHY_ITEMS: { title: string; text: string }[] = [
  {
    title: "Commercial impact",
    text: "A failed shipment is rarely a single cost. It is the goods, the freight, the delayed launch, the retailer chargeback and the customer relationship. During production quality inspection converts an unknown into a measured risk while the order is still recoverable. It also protects the balance payment, which is usually the buyer's last remaining leverage — releasing it against an unverified production run removes that leverage entirely.",
  },
  {
    title: "Operational impact",
    text: "Beyond defects, a DUPRO visit reports what has actually been produced. Buyers routinely discover that a supplier reporting 70% complete has 70% of components cut but very little assembled and packed. That single fact changes your shipping plan while the plan can still be changed. Production monitoring at this stage also gives early warning of delay, which is visible on the factory floor long before it appears in a supplier's schedule, and frequently exposes unauthorised subcontracting.",
  },
  {
    title: "Compliance impact",
    text: "Where your product is subject to Indian conformity requirements — marking, labelling, packaged commodity declarations — those obligations do not pause because the goods were made to a tight deadline. Verification during production gives you documented evidence of what was produced and how it was marked on a specific date.",
  },
  {
    title: "Supplier behaviour",
    text: "Factories that know an independent inspector will attend mid-run manage the run differently. This effect is real and immediate, and it is one of the reasons a scheduled inspection programme outperforms a single end-of-production check even when the findings themselves are minor.",
  },
];

export const WHY_COMPLIANCE_NOTE =
  "Confirm the requirements applicable to your specific product category with the relevant authority before relying on any general statement.";

export const WHO_NEEDS_INTRO =
  "Any buyer whose money is committed before the goods are in their control. In practice the service is used by the following groups, each for a slightly different reason.";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Importers",
    text: "the core audience. During production inspection for importers, and inspection services for importers India, exist because the importer carries the entire commercial risk of an order they cannot see; an inspection partner for overseas buyers India, or an inspection company for import quality control, closes that gap. A sourcing inspection company India plays the same role while you are still evaluating suppliers. Distance, time zones and language make direct supervision impractical; an inspector at the factory closes that gap.",
  },
  {
    title: "Brand owners and private label businesses",
    text: "the product carries your name. Marketplace returns, negative reviews and listing suspensions follow quality failures regardless of which factory caused them.",
  },
  {
    title: "Buying agents and sourcing offices",
    text: "answerable to an overseas principal, and judged on shipments they did not personally make.",
  },
  {
    title: "Retail sourcing teams",
    text: "working to fixed delivery windows where a late or rejected shipment has knock-on cost across a season.",
  },
  {
    title: "Exporters",
    text: "inspection services for export orders India are increasingly commissioned by the exporter rather than the buyer, to protect their own relationship with an overseas customer. Catching a problem before the buyer's inspector finds it is a materially better outcome for the supplier.",
  },
  {
    title: "Manufacturers",
    text: "in-process quality inspection, production quality control inspection and manufacturing process inspection services as an independent second opinion on their own line, particularly where an overseas customer has imposed a standard the factory must demonstrably meet.",
  },
  {
    title: "MSMEs and smaller importers",
    text: "a smaller business has less balance-sheet capacity to absorb a failed shipment, so the case for inspection is stronger, not weaker. Scope can be sized to the order.",
  },
  {
    title: "Online and marketplace sellers",
    text: "quality problems surface as returns and reviews, after the inventory is already committed. Verification during production is the only intervention point that helps.",
  },
  {
    title: "OEM and contract manufacturing buyers",
    text: "a DPI inspection service for OEM orders and inspection services for contract manufacturing cover production to another party's specification, where deviation is not a matter of taste but of contractual conformity.",
  },
  {
    title: "Government and institutional suppliers",
    text: "public procurement contracts frequently carry explicit third-party inspection requirements.",
  },
];

export const WHO_NEEDS_CLOSING =
  "First orders carry the highest quality risk of any order a business will ever place: new supplier, unproven specification, no shared history. If you inspect only one order with a factory, inspect that one.";

export const FEATURES_INTRO =
  "Every inspection we run is built on the same core features, regardless of product category or factory location.";

export const FEATURES_ITEMS: string[] = [
  "An independent and impartial inspection agency — our inspectors have no commercial relationship with the factories they inspect, so third party during production inspection means independent production inspection in practice, not just in name.",
  "AQL-based sampling — sample size, accept and reject numbers are derived from your lot size and the agreed inspection level using a recognised sampling standard, not chosen arbitrarily on site.",
  "Buyer-defined scope — the checklist is built from your purchase order, approved sample and packing specification. A generic checklist finds generic problems.",
  "On-site quality inspection services — function checks, measurement against the specification and packing durability checks, within what can genuinely be done outside a laboratory.",
  "Photo-documented reporting — as an inspection company with photo video report capability, every finding is evidenced, so disputes are settled by looking at the evidence rather than by argument.",
  "Quantity verification — produced, semi-finished and packed quantities recorded as observed, not as reported.",
  "Defect classification — findings graded as critical, major or minor against criteria agreed before the visit, so the result is a decision rather than a description.",
  "Corrective action support — where findings require a fix, we document it, agree it with the factory, and verify it on a follow-up visit.",
  "English reporting inspection company India — reports are written for the buyer, not for the factory's file, and a production inspection report India the buyer cannot read is one that will not be acted on.",
  "Confidentiality — order details, pricing and specifications handled under a confidentiality agreement.",
  "Pan-India inspector network — coverage across the manufacturing clusters where your suppliers actually operate, including locations outside the major metros.",
];

export const ENGAGEMENT_TITLE = "How the engagement is usually structured";

export const ENGAGEMENT_PARAGRAPHS: string[] = [
  "Choosing a during production inspection service provider is partly a question of structure. Buyers engage us in one of three ways, and the right one depends on how much production you have running.",
  "Single attendance is the standard engagement — one inspector, one factory, one visit — and suits most one-off orders, including bulk order inspection services India for large runs and mass production inspection services. Programme-based engagements involve recurring attendances across a production season, sometimes weekly; this is closer to production monitoring services or product quality monitoring services than to a single inspection, and is how buyers with continuous production usually work. Where the requirement is continuous rather than periodic, in-line inspection services, inline quality control services, production line inspection services and in-process inspection services are the appropriate scope — an inspector present through the run rather than attending once. Buyers who want the whole upstream function run externally move to quality inspection outsourcing India.",
  "Combined engagements suit buyers whose concern is supplier capability as much as product quality. Production audit and inspection services put a factory assessment and product verification into a single visit; a during production inspection and factory audit package is common for new suppliers, and a factory quality audit and inspection company arrangement suits buyers auditing several sites. Supplier production inspection, vendor inspection services India and supplier quality management services India describe the same work scaled across a vendor base, which is what a quality control company for Indian suppliers is normally engaged to do. Buyers preparing to ship shortly afterwards often combine pre-shipment and during production inspection into one booking rather than commissioning them separately.",
];

export const BENEFITS_INTRO =
  "The benefits follow directly from timing. Because the inspection happens while production is live, every finding still has a cheap resolution available.";

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "You keep your leverage.",
    text: "The single most useful thing a DPI does is preserve your negotiating position while it still exists. Once goods are finished, packed and paid for, the conversation with your supplier changes completely.",
  },
  {
    title: "You find out what is really happening.",
    text: "Production status reported by a supplier and production status observed by an inspector are frequently different documents. The gap is not usually dishonesty — it is optimism, pressure and internal reporting lag.",
  },
  {
    title: "Defects get classified, not just listed.",
    text: "A list of observations is not actionable. A classified result — critical, major, minor, measured against agreed limits — produces a clear outcome: proceed, rework, or hold.",
  },
  {
    title: "Rework happens at the cheapest possible moment.",
    text: "Reworking 2,000 unpacked units on the factory floor is a manageable operational task. Reworking 12,000 packed units, or sorting them at destination, is a different order of cost entirely.",
  },
  {
    title: "Your specification gets tested.",
    text: "Many quality disputes are specification failures rather than manufacturing failures — an ambiguous tolerance, an unstated packing requirement, a colour reference nobody confirmed. A DPI surfaces these while they can still be clarified.",
  },
  {
    title: "You build a supplier record.",
    text: "Inspection reports across multiple orders become evidence: which supplier improves, which repeats the same defect, which one needs a tighter inspection schedule. That record is the foundation of any serious supplier quality management programme.",
  },
  {
    title: "Your shipment decision becomes defensible.",
    text: 'Internally, to your management or your principal, "we inspected and this is what we found" is a materially stronger position than "the supplier confirmed it was fine".',
  },
];

export const SCOPE_INTRO =
  "The exact checklist is built from your specification, but a DPI normally covers the following areas. Where your product category needs additional checks, they are added to the scope at booking rather than improvised on site.";

export const SCOPE_ITEMS: string[] = [
  "Workmanship and finish against the approved sample, including surface defects, appearance defects and finishing quality",
  "Measurements and dimensions against the specification, including tolerance limits and, for apparel, the measurement chart",
  "Materials and components verified against the bill of materials, with particular attention to substitution",
  "Function and performance checks appropriate to the product and feasible on site",
  "Colour, shade and print quality against the approved reference or shade band",
  "Quantity produced, semi-finished and packed, with an assessment of output rate against the shipment date",
  "Packing method, inner and master carton construction, and protection adequate for transit",
  "Labelling, hangtags, care labels and any declaration required for the destination market",
  "Shipping marks and carton marking against your instructions",
  "Barcode presence and scannability",
  "On-site tests within the agreed scope, such as a carton drop test or a basic function test",
];

export const SCOPE_NOTE =
  "Where a check requires laboratory conditions, it belongs in a laboratory. Samples can be drawn during the inspection and submitted for accredited testing separately — we will tell you plainly which checks cannot be done on a factory floor.";

export const PROCESS_INTRO =
  "The during production inspection process below is how a standard single-attendance visit runs from first contact to closure. Each step has a defined output, so you always know what you are waiting for.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Scope",
    color: "#0b57b5",
    title: "1. Scope definition and booking",
    text: "you share the purchase order or specification, approved sample details, packing and labelling requirements, target quantity, factory address and contact. We agree the inspection level and AQL limits and confirm the inspection window. Output: confirmed scope, agreed sampling plan, confirmed date.",
  },
  {
    step: "02",
    label: "Readiness",
    color: "#2563eb",
    title: "2. Production readiness confirmation",
    text: "we confirm with the factory that sufficient production is complete and that some units are finished and packed. Attending too early produces a report with nothing to sample; attending too late removes the correction window. Output: confirmed attendance date coordinated with the production plan.",
  },
  {
    step: "03",
    label: "Sample",
    color: "#0891b2",
    title: "3. Inspector attendance and sample draw",
    text: "the inspector attends, verifies the production and packing areas, and draws a random sample from produced units according to the agreed plan. Sample selection is made by the inspector, not presented by the factory. Output: sample drawn and recorded, floor observations logged.",
  },
  {
    step: "04",
    label: "Quantity",
    color: "#059669",
    title: "4. Quantity and production status verification",
    text: "produced, semi-finished and packed quantities are verified or estimated from the floor, and remaining production is assessed against the shipment date. Output: recorded quantity status and an assessment of schedule risk.",
  },
  {
    step: "05",
    label: "Product",
    color: "#d97706",
    title: "5. Product inspection against specification",
    text: "workmanship, measurements and tolerances, materials and components, function, colour and finish are checked against the approved reference. Output: recorded findings with photographic evidence for each observation.",
  },
  {
    step: "06",
    label: "Packing",
    color: "#ea580c",
    title: "6. Packing, marking and labelling verification",
    text: "carton construction, packing method, shipping marks, barcode scannability and labelling are verified against your requirements. Output: packing and marking findings with photographic evidence.",
  },
  {
    step: "07",
    label: "Result",
    color: "#7c3aed",
    title: "7. Defect classification and result",
    text: "each defect is classified as critical, major or minor against the agreed criteria, and totals are compared against the accept and reject numbers from the sampling plan. Output: classified defect summary and an overall pass, fail or conditional result.",
  },
  {
    step: "08",
    label: "Report",
    color: "#0b57b5",
    title: "8. Reporting",
    text: "the full report is compiled, including findings, classified defects, quantity status, photographic evidence and the inspector's observations. Report turnaround is agreed in writing before the visit. Output: complete inspection report with evidence.",
  },
  {
    step: "09",
    label: "Follow-up",
    color: "#2563eb",
    title: "9. Corrective action and follow-up",
    text: "where findings require correction, a corrective action record is raised documenting the defect, the agreed fix, responsibility and deadline. A follow-up inspection verifies the correction on the goods themselves. Output: corrective action record and, where booked, a follow-up report.",
  },
];

export const PROCESS_WINDOW =
  "The practical inspection window is once roughly 20–30% of the order is complete and some units are fully finished and packed. Both conditions matter — 30% cut and sewn but nothing packed means packing and marking cannot be verified.";

export const PROCESS_CLOSING =
  "Most buyers book a single attendance. On long runs a second is worth considering: an inspection at 20 percent production catches setup and material problems at their cheapest, while an inspection at 50 percent production confirms the line held its standard once volume and shift changes came into play. A first article inspection during production is a narrower, earlier check and does not replace inspection during mass production.";

export const AQL_PARAGRAPHS: string[] = [
  'A defined during production inspection standard is what separates an inspection from an opinion. Without a documented sampling method, "we checked some units and they looked fine" is the entire finding, and it is worthless in a dispute.',
  "Sample size is calculated, not chosen. The number of units inspected is derived from your lot size and the agreed inspection level using a recognised acceptance sampling standard. ISO 2859-1 inspection services are the most widely used basis internationally; ANSI/ASQ Z1.4 is its close equivalent and some buyers specify it by name. Both produce a sample size code letter, a sample size, and accept and reject numbers for each defect class.",
  "AQL sets the acceptance threshold. The acceptable quality level defines how many defects of each class can appear in the sample while the lot is still accepted, and different limits normally apply to critical, major and minor defects. During production inspection AQL limits, and AQL inspection services generally, are only meaningful when those limits are fixed before the inspection, not negotiated after the findings are known, which is what AQL based inspection India should always mean in practice. Standalone inspection sampling services India — a sampling plan designed for your own QC team to apply — can be scoped separately from an attendance.",
  "Sampling is random. Random sampling inspection during production means the inspector selects units across the produced lot, not from a set the factory has prepared. This is the single most important procedural control in the entire method, and the most common way an inspection is quietly neutralised when it is absent.",
  "Inspection level is a risk decision. A tighter level means a larger sample, more inspection time and more cost — and correspondingly more confidence. A new supplier or a high-value order justifies a tighter level than a proven supplier on a repeat run. When you evaluate an inspection agency with AQL expertise, ask how sample size is determined and who selects the units; the answers tell you immediately whether the sampling is real.",
];

export const AQL_NOTE =
  "We apply recognised sampling standards but do not reproduce their tables, clauses or numbers here. Standards are copyrighted and periodically revised — the applicable edition and levels are confirmed in writing at booking.";

export const DEFECTS_INTRO =
  "Findings are only useful once they are graded. Defect classification inspection services grade each finding into one of three classes, against criteria agreed with you before the inspector attends.";

export const DEFECTS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Critical defects",
    text: "findings that create a safety, legal or regulatory risk for the end user or the importer. These normally carry a zero or near-zero acceptance limit.",
  },
  {
    title: "Major defects",
    text: "findings that affect function, durability, saleability or conformity to the specification. A major defect is one a customer would reasonably reject or return.",
  },
  {
    title: "Minor defects",
    text: "cosmetic deviations from the standard that a typical customer would accept, counted against a looser limit.",
  },
];

export const DEFECTS_PARAGRAPHS: string[] = [
  "Where the result is a fail or a conditional pass, the corrective action report inspection cycle begins: record the defect, agree the fix and the deadline with the factory, have the factory rework, then verify the correction on the goods. A corrective action record with no verification visit is a promise, not a control. An inspection company with corrective action support should mean the fix is checked, not merely requested.",
];

export const DEFECTS_NOTE =
  "Agree defect classification criteria before the inspection, not after. Arguing about whether a finding is major or minor once the report is issued is a far harder conversation, and the factory has every incentive to reclassify downwards.";

export const DOCUMENTS_INTRO =
  "The inspection is only as precise as the reference you provide. These are the inputs we work from, and the earlier they arrive the tighter the scope can be.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Purchase order or order sheet",
    purpose: "Establishes quantity, product and delivery terms",
    mandatory: "Mandatory",
  },
  {
    document: "Product specification or technical data sheet",
    purpose: "The standard the goods are measured against",
    mandatory: "Mandatory",
  },
  {
    document: "Approved sample or golden sample details",
    purpose: "Physical reference for workmanship, colour and finish",
    mandatory: "Mandatory where a sample exists",
  },
  {
    document: "Packing specification",
    purpose: "Inner and master carton, packing method, quantity per carton",
    mandatory: "Mandatory",
  },
  {
    document: "Shipping marks and labelling artwork",
    purpose: "Verification of carton marking and product labelling",
    mandatory: "Mandatory where marking is specified",
  },
  {
    document: "Agreed AQL levels and inspection level",
    purpose: "Determines sample size and accept or reject limits",
    mandatory: "Mandatory",
  },
  {
    document: "Factory name, address and contact person",
    purpose: "Enables inspector deployment and coordination",
    mandatory: "Mandatory",
  },
  {
    document: "Production schedule or completion status",
    purpose: "Determines the correct inspection window",
    mandatory: "Mandatory",
  },
  {
    document: "Inspection checklist or buyer QC standard",
    purpose: "Buyer-specific checkpoints beyond the default scope",
    mandatory: "Optional, strongly recommended",
  },
  {
    document: "Previous inspection reports for this supplier",
    purpose: "Focuses the inspection on known recurring issues",
    mandatory: "Optional",
  },
  {
    document: "Applicable marking or declaration requirements",
    purpose: "Verification of conformity marking where relevant",
    mandatory: "Optional, product-dependent",
  },
  {
    document: "Signed confidentiality agreement",
    purpose: "Protects specification and commercial confidentiality",
    mandatory: "Optional",
  },
];

export const FACTORY_READY_TITLE = "What the factory needs to have ready";

export const FACTORY_READY_ITEMS: string[] = [
  "Sufficient completed production to sample from, plus some fully packed units",
  "Access to the production floor and the packing area",
  "The approved sample or the factory's counter-sample",
  "Packing materials, cartons and printed marking in their final form",
  "A responsible person available to receive and acknowledge the findings",
];

export const FACTORY_READY_NOTE =
  "If an approved sample does not exist, say so at booking rather than leaving the inspector to infer the standard on site. An inspection without a reference can verify quantity, packing and obvious defects, but cannot properly assess conformity.";

export const ELIGIBILITY_PARAGRAPHS: string[] = [
  "Unlike a certification or a registration, a DUPRO inspection has no regulatory eligibility gate. There is no application to qualify for and no approval to be granted. Any party with a legitimate commercial interest in an order can commission one.",
  "An inspection is meaningful, however, only under certain conditions. You need a defined specification — something must exist to measure the goods against, whether a technical data sheet, an approved sample or a written packing standard. Production must be genuinely underway, because there must be produced units to sample; an order that has not started cannot be DUPRO-inspected, and that is a pre-production inspection instead. Correction time must remain: if production is effectively complete, a final random inspection is the correct instrument. You also need access rights to the factory, which is normally a purchase order term.",
];

export const ELIGIBILITY_NOTE =
  "There is no minimum order quantity, but for very small orders the economics should be weighed against the value at risk. We will tell you honestly when an inspection is not worth commissioning.";

export const ELIGIBILITY_SCENARIOS_TITLE = "Common scenarios";

export const ELIGIBILITY_SCENARIOS =
  "Where an order is split across units, each location generally requires its own attendance — confirm all production locations at booking, including subcontracted units. Buyers managing several sites usually move to a supplier quality management or vendor inspection arrangement rather than booking each attendance separately, because an engagement covering the whole vendor base produces comparable data across every factory. Bulk order inspections on very large runs frequently justify more than one attendance spaced across the production curve. A supplier with a strong documented history may justify a reduced inspection level rather than no inspection at all; prior reports inform that decision.";

export const TIMELINE_INTRO =
  "We do not publish fixed turnaround figures here, because booking lead time, inspector availability and report turnaround vary with location, product and season. All three are confirmed in writing at booking rather than estimated on a web page.";

export const TIMELINE_SHAPE =
  "What we can describe is the shape of the schedule. Booking and scope agreement normally happen when the order is placed or as production approaches. Scheduling is confirmed with the factory ahead of the visit, and earlier booking secures preferred dates. The inspection itself sits at roughly 20–80% production completion. Reporting follows the visit on the agreed turnaround, corrective action is addressed by the factory immediately afterwards, and a follow-up visit verifies the correction before production completes wherever possible.";

export const TIMELINE_FACTORS_TITLE = "Factors that affect the schedule";

export const TIMELINE_FACTORS: string[] = [
  "Factory location — metro and major-cluster locations schedule faster than remote units",
  "Season — demand concentrates around the export production peak in the second half of the year, so book earlier during peak months",
  "Product complexity — more checkpoints and more on-site verification means a longer inspection day",
  "Order size and number of production lines — large or multi-line orders may need more than one inspection day",
  "Number of locations — split production requires separate attendances",
  "Factory readiness — an inspector arriving to find insufficient production is a wasted day for everyone",
];

export const TIMELINE_DELAY_TITLE = "Common causes of delay";

export const TIMELINE_DELAY =
  "The most frequent cause of a rescheduled inspection is simply that the factory is not as far along as reported, so confirm actual completion rather than planned completion before fixing the date. Close behind it is production at 40% with nothing yet packed, which means packing and marking cannot be verified. Access problems on the day, late booking during peak season and specification documents arriving late account for most of the rest.";

export const COST_INTRO =
  "We do not publish a during production inspection price list, and you should be cautious of any inspection provider that does. During production inspection pricing India is quoted against the specific order, and a headline number that ignores travel, product complexity and duration tells you nothing about during production inspection charges in India for your order. These are the factors that determine during production inspection cost.";

export const COST_ITEMS: string[] = [
  "Inspection duration — inspection is normally quoted on a man-day basis, being the work of one inspector for one working day at the factory",
  "Number of inspectors — some inspections require more than one inspector to complete in a single day",
  "Factory location — travel time and distance from the nearest inspector base; remote units cost more to reach than units in a major cluster",
  "Product complexity — number of models, colours, sizes and variants, number of checkpoints, and the extent of on-site verification",
  "Sample size — driven by lot size and the agreed inspection level; a tighter inspection level means more units checked and more time",
  "On-site testing scope — practical checks performed at the factory add time",
  "Reporting requirements — standard reporting versus extended photographic or video documentation",
  "Number of locations — split production means separate visits",
  "Booking notice — urgent and short-notice deployments carry different economics than planned scheduling",
  "Volume of work — buyers running a regular inspection programme are quoted differently to single ad-hoc bookings",
  "Re-inspection — follow-up visits to verify corrective action are a separate engagement",
];

export const COST_STRUCTURE_TITLE = "How pricing is normally structured";

export const COST_STRUCTURE_PARAGRAPHS: string[] = [
  "Most single orders are quoted per visit, so the DPI inspection cost per visit covers the inspector's day at the factory, the sampling, the verification and the report. Where an inspection needs more than one day or more than one inspector, the during production inspection rate per man day is the unit the quotation is built from. Buyers running regular inspections are better served by during production inspection service packages, a during production inspection annual contract or during production inspection retainer services, which fix commercial terms across a season and secure inspector availability during peak months — often worth more than the rate itself. For programme buyers we issue an inspection service rate card India covering the categories and locations you actually source from, along with the inspection service invoice India your accounts team needs.",
];

export const COST_NOTE =
  "Compare inspection quotes on scope, not on headline rate. Best value production inspection services are the ones where the scope matches the risk in your order, not the ones with the lowest line item. A cheaper man-day that excludes travel, uses a smaller sample or omits packing verification is not cheaper — it is a smaller inspection. Buyers chasing the cheapest during production inspection India, or the lowest possible during production inspection service cost India, should understand what gets cut to reach that number: sample size, time on site, packing verification, or the independence of the inspector. Any of those makes the report less useful than no report at all, because it creates false confidence.";

export const REPORT_PARAGRAPHS: string[] = [
  "The report is the product you actually receive, so it is worth knowing what it contains before you commission one. A during production inspection report from us includes the inspection scope and the sampling plan applied, verified quantity status covering produced, semi-finished and packed units, and the full list of findings with photographic evidence for each observation.",
  "It also carries the defect classification summary with critical, major and minor counts measured against the agreed accept and reject numbers, the overall result as pass, fail or conditional, packing and marking verification, the inspector's observations on the production floor, and where applicable the corrective action record.",
  "Read it in a specific order: the quantity and schedule section first, then the defect classification, then the photographs. In that sequence the report tells you a coherent story about the order rather than a list of disconnected observations.",
];

export const INDUSTRIES_INTRO =
  "Our inspectors are assigned by product category, because an inspector who has worked garment production reads a stitching defect differently to one who has not. We act as an inspection company for garment exporters, an inspection agency for electronics manufacturers and a provider of inspection services for furniture exporters, and we handle third party inspection for toy manufacturers, during production inspection for footwear exporters and during production inspection for home textile exporters on the same basis. Each vertical below carries its own checkpoints.";

export const INDUSTRY_ROWS: TableRow[] = [
  {
    industry: "Textiles & Apparel",
    products: "Knitwear, woven garments, home textiles, made-ups, hosiery, denim",
    checkpoints:
      "Measurement chart tolerance, stitching and seam quality, shade band matching, colour fastness, trims and labels, poly-bagging and carton packing",
  },
  {
    industry: "Electronics & Electricals",
    products: "LED lighting, cables and wires, small appliances, adaptors, assemblies, wireless devices",
    checkpoints:
      "Component verification against the bill of materials, function and safety checks, rating plate accuracy, label and declaration verification, packing protection",
  },
  {
    industry: "Toys",
    products: "Plastic toys, soft toys, ride-ons, board games, educational toys",
    checkpoints:
      "Construction and finish, sharp edge and small-part checks within the agreed on-site scope, age grading and warning marks, print and colour quality",
  },
  {
    industry: "Furniture",
    products: "Wooden, metal, upholstered and knock-down furniture",
    checkpoints:
      "Moisture content, joinery and fitment, load bearing, finish uniformity, hardware and fittings count, assembly instructions, transit packing",
  },
  {
    industry: "Footwear",
    products: "Leather footwear, sports shoes, sandals, safety footwear",
    checkpoints:
      "Sole bonding and flexing, size and last conformity, stitching quality, material verification, pairing and size runs, box and inner packing",
  },
  {
    industry: "Home Goods & Housewares",
    products: "Kitchenware, tableware, ceramics, metalware, handicrafts, plasticware",
    checkpoints:
      "Dimension and weight, food-contact material verification, surface and finish defects, chip and crack checks, declaration and labelling, master carton drop test",
  },
];

export const INDUSTRIES_CLOSING =
  "Each vertical can be booked as a dedicated engagement — an inspection service for garment production, electronics production inspection services, furniture production inspection India or toy production inspection services. Category-specific notes worth knowing: for electronics, component substitution is the finding we see most often and the one with the widest downstream consequences. For furniture, packing carries unusual weight because transit damage is as commercially damaging as a manufacturing defect. For footwear, pairing and size-run errors are almost impossible to correct economically once cartons are sealed. For toys, safety-related verification frequently requires laboratory testing — on-site checks confirm construction and marking, not laboratory-grade conformity.";

export const LOCATIONS_PARAGRAPHS: string[] = [
  "Our inspector network covers the manufacturing clusters where sourcing actually happens, not only the metros. We operate as an inspection company with pan-India coverage, which in practice means a network deployed from regional bases rather than a single office dispatching people across the country. That distinction matters to both your cost and your lead time.",
  "During production inspection Delhi NCR requests are our fastest to schedule, and a during production inspection company in Noida covers the electronics and consumer goods units concentrated there. Coverage extends to the apparel and knitwear clusters of the north and south, the furniture and handicraft clusters of the west, and the footwear and housewares clusters in between.",
  "Buyers searching for a during production inspection service provider near me, or simply during production inspection near me, are usually asking one practical question: can you actually reach my supplier? Send us the factory address and we will answer it directly rather than claiming blanket coverage. If your supplier is located outside a major cluster, we will confirm coverage and any travel implications before you commit.",
];

export const HELP_PARAGRAPHS: string[] = [
  "Ornate Quality Service Pvt Ltd works across certification, registration and inspection, which means that where an inspection finding touches a marking or declaration obligation, we can see the connection. That is what distinguishes a compliance specialist for import quality from an inspection-only provider, and it is why end to end inspection and compliance services India — and, where a product also needs certifying, end to end inspection and certification support — sit under one engagement. Legal compliance support for exports India and technical guidance for quality control India are available alongside the inspection itself.",
  "Buyers engage us in several ways: hire third party inspector India support for a single attendance, hire inspector for factory India on a named basis, a dedicated inspector service India arrangement across one supplier, or hire resident inspector India and hire on site QC inspector India cover for continuous production. You can also hire during production inspection agency support for a programme, or engage an inspection agency for production monitoring across a season; where you need a quality inspector for factory visit on a specific date, we get inspector assigned India within the agreed notice. We are an inspection company with trained inspectors assigned by category rather than by availability alone, and professional during production inspection services mean the same method, the same report structure and the same evidential standard on every visit. Support continues past the report, with documentation and coordination support inspection where a finding needs to be closed with the factory formally; inspection documentation assistance India covers the corrective action records and evidence packs your team needs internally. Multi industry inspection expertise means one provider produces comparable data across every category you source.",
  "Transparent inspection pricing India means commercial terms are stated in writing before you commit — scope, duration, inclusions and turnaround — so you see what is included and what is not before an inspector is deployed. Fast inspection report turnaround India is committed in writing at booking rather than advertised as a slogan. Confidential inspection services NDA cover order details, pricing and supplier relationships as standard. Verified inspection reports India are traceable to a named inspector, a date, a location and photographic evidence.",
];

export const EVALUATE_TITLE = "How to evaluate us against anyone else";

export const EVALUATE_INTRO =
  "We are not going to tell you we are the best during production inspection company in India or a leading DPI inspection company India, and you should treat those claims sceptically wherever you see them. Buyers comparing top during production inspection agencies India are better served by evidence than by superlatives. Ask us, and every other provider on your shortlist, these five questions:";

export const EVALUATE_QUESTIONS: string[] = [
  "Who selects the sample — your inspector, or the factory?",
  "How is sample size determined, and against which standard?",
  "Is every finding photographed?",
  "Does the report state the inspector's name, the date and the location?",
  "Is corrective action verified, or only recorded?",
];

export const EVALUATE_PARAGRAPHS: string[] = [
  "A reliable third party inspection company India will answer all five without hesitation. An independent quality inspection agency India that becomes vague on the first or the last question is worth avoiding, and the same test applies to any third party inspection during production you commission. Ask also for during production inspection company reviews from buyers in your category and for inspection company case studies India showing what a real finding looked like and what happened next — an inspection agency with industry experience in your product category will have both, and that is what a trusted production inspection partner India relationship is built on. If you would rather talk it through first, our experienced during production inspection consultant team will tell you what scope your order actually needs; a during production inspection consultant conversation is often more useful than a quotation request on a first order.",
  "Buyers often look for a certified during production inspection agency, an ISO 17020 accredited inspection company India or an ISO 17020 accredited inspection body India, a qualified during production inspection expert, an experienced quality inspection consultant India, or a government approved inspection process India. Every one of those is a claim that should be substantiated rather than asserted — by us and by anyone else you are considering.",
];

export const EVALUATE_NOTE = "Ask for evidence before you appoint.";

export const CHALLENGES_INTRO =
  "The same handful of problems account for most of what goes wrong with these inspections. Each has a practical answer.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "The factory presents a prepared sample.",
    text: "A neat set of units handed to the inspector is the easiest way to produce a passing result without changing anything on the line. Our inspectors draw samples themselves, from the production and packing areas, according to the agreed plan. Make random sample selection an explicit term in your purchase order.",
  },
  {
    title: "The order is subcontracted without disclosure.",
    text: "Capacity shortfalls against delivery deadlines push part of production into units you never approved. Production status verification frequently exposes this, because the observed floor cannot explain the reported output. Require disclosure of all production locations at order placement.",
  },
  {
    title: "Defect classification is disputed after the report.",
    text: "The supplier argues a major defect is cosmetic, usually because classification criteria were never agreed in writing. We set those criteria at booking, before anyone knows what will be found.",
  },
  {
    title: "The inspection is booked too late.",
    text: "Production reaches 95% and findings can no longer be corrected, because the visit was timed against the shipment date rather than the production curve. We confirm actual completion status before fixing the date.",
  },
  {
    title: "The same defect recurs across orders.",
    text: "The corrective action addressed the symptom, not the cause. Corrective action records that require a stated cause and a verification visit break that cycle; review inspection history across orders rather than one report at a time.",
  },
  {
    title: "Quantity shortfall is discovered late.",
    text: "Supplier progress reporting lags reality, and the order will not be complete for the booked shipment. Independent quantity verification at the inspection gives you a planning number you can actually use.",
  },
];

export const MISTAKES_ROWS: TableRow[] = [
  {
    mistake: "Booking the inspection against the shipment date",
    impact: "The inspector arrives when correction is no longer possible",
    avoid: "Time the visit against production completion percentage, not the ship date",
  },
  {
    mistake: "Skipping DPI because a final inspection is already booked",
    impact: "Problems surface when the only options are rework of packed goods or acceptance",
    avoid: "Treat them as different instruments — one preserves options, the other confirms an outcome",
  },
  {
    mistake: "Not supplying an approved sample",
    impact: "The inspector has no reference for workmanship, colour or finish",
    avoid: "Approve a reference sample before production starts and share its details at booking",
  },
  {
    mistake: "Leaving AQL levels undefined",
    impact: "Accept and reject limits become a negotiation after the findings are known",
    avoid: "Agree inspection level and AQL limits at booking",
  },
  {
    mistake: "Letting the factory choose the sample",
    impact: "The inspection measures the factory's best work, not the lot",
    avoid: "Make independent random sampling a purchase order term",
  },
  {
    mistake: "Ignoring the quantity section of the report",
    impact: "A delivery failure that was visible weeks earlier",
    avoid: "Treat verified quantity as your planning number",
  },
  {
    mistake: "Treating a corrective action record as a resolution",
    impact: "The same defect ships anyway",
    avoid: "Book the verification visit at the same time as the corrective action",
  },
  {
    mistake: "Inspecting only the first order with a supplier",
    impact: "Quality drift on later orders goes undetected, and drift is the normal pattern",
    avoid: "Set an inspection frequency across orders, adjusted by supplier performance",
  },
];

export const TIPS_ITEMS: string[] = [
  "Write inspection rights into the purchase order — independent access, random sampling and the consequences of a fail result belong in the contract, not in an email during a crisis.",
  "Approve a golden sample and keep a counter-sample. Most conformity disputes are reference disputes.",
  "Agree defect classification before the first inspection, while neutral criteria are still possible.",
  "Book the inspection window at order placement, then confirm the date later against real progress.",
  "Require some packed units at the visit — without them, packing and marking cannot be verified.",
  "Insist that photographs accompany every finding. Evidence closes arguments.",
  "Send previous reports for the same supplier so known recurring defects are explicitly checked.",
  "Do not compare quotes on rate alone. Compare scope, sample size, inclusions and turnaround.",
  "Separate laboratory testing from on-site checks, and ask for samples to be drawn during the inspection where testing is needed.",
  "Review inspection history quarterly rather than per order — patterns are invisible one report at a time.",
  "For split production, confirm every location at booking. Undisclosed units are a common failure point.",
  "Where marking or declaration requirements apply, add them to the checklist explicitly. A packing check is not automatically a compliance check.",
];

export const COMPARISON_TYPES_TITLE = "During production inspection versus other inspection types";

export const COMPARISON_TYPES_ROWS: TableRow[] = [
  {
    comparison: "DPI vs Pre-Production Inspection",
    difference:
      "PPI checks materials and components before the line starts; DPI checks actual output mid-run",
    when: "Run PPI for new suppliers or new materials; DPI once production is genuinely underway",
  },
  {
    comparison: "DPI vs Final Random Inspection",
    difference: "DPI happens while correction is possible; FRI confirms the finished lot before shipment",
    when: "Large, high-value or first-time orders usually justify both",
  },
  {
    comparison: "DPI vs Pre-Shipment Inspection",
    difference: "PSI is an end-of-production check on packed goods; DPI is mid-production",
    when: "Use DPI to protect the outcome, PSI to confirm it",
  },
  {
    comparison: "DPI vs Container Loading Inspection",
    difference: "CLI supervises what physically enters the container; DPI verifies what was made",
    when: "They solve different risks and are not substitutes",
  },
  {
    comparison: "DPI vs Factory Audit",
    difference: "An audit assesses the factory's capability and systems; DPI assesses one order's output",
    when: "Audit when selecting a supplier; DPI when a specific order is running",
  },
  {
    comparison: "DPI vs First Article Inspection",
    difference: "FAI verifies the first units off a new line or tool; DPI samples across volume production",
    when: "Run FAI early to confirm setup, DPI once volume has built",
  },
];

export const COMPARISON_WHO_TITLE = "Doing it yourself, a consultant, or a professional agency";

export const COMPARISON_WHO_ROWS: TableRow[] = [
  {
    factor: "Independence from the factory",
    diy: "High, but you are also the buyer",
    consultant: "High",
    agency: "High, with documented impartiality",
  },
  {
    factor: "Travel and time cost",
    diy: "Very high for overseas buyers",
    consultant: "Moderate",
    agency: "Included in the engagement",
  },
  {
    factor: "Geographic coverage",
    diy: "Limited to where you can travel",
    consultant: "Limited to the consultant's region",
    agency: "Network across manufacturing clusters",
  },
  {
    factor: "Sampling rigour",
    diy: "Depends on your own QC knowledge",
    consultant: "Varies by individual",
    agency: "Standard sampling plan applied consistently",
  },
  {
    factor: "Category expertise",
    diy: "Strong for your own product",
    consultant: "Varies",
    agency: "Inspectors matched to category",
  },
  {
    factor: "Reporting format",
    diy: "Ad hoc",
    consultant: "Varies by individual",
    agency: "Standardised and photo-documented",
  },
  {
    factor: "Consistency across suppliers",
    diy: "Difficult",
    consultant: "Difficult across regions",
    agency: "Comparable data across all sites",
  },
  {
    factor: "Corrective action follow-up",
    diy: "Your own time",
    consultant: "Usually chargeable extra",
    agency: "Part of the service",
  },
  {
    factor: "Best suited to",
    diy: "A single nearby supplier you know well",
    consultant: "One region, one category",
    agency: "Multi-supplier, multi-category sourcing",
  },
];

export const COMPARISON_NOTE =
  "If you have one supplier, in one city, making one product you understand thoroughly, and you can attend yourself — do that. Independent inspection earns its cost when distance, supplier count, category breadth or order value make direct supervision impractical.";

export const FAQ_INTRO =
  "These are the questions buyers ask most often before commissioning a during production inspection.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is a during production inspection?",
    a: "A DUPRO inspection is an independent quality check carried out at a supplier's factory while an order is still being manufactured, so defects can be found and corrected before production finishes.",
  },
  {
    q: "What does DUPRO stand for?",
    a: "DUPRO is the trade abbreviation for during production inspection. The two terms are interchangeable.",
  },
  {
    q: "When should a DPI be scheduled?",
    a: "Once roughly 20–30% of the order is complete and some units are fully finished and packed. Both conditions matter — without packed units, packing and marking cannot be checked.",
  },
  {
    q: "What percentage of production is inspected?",
    a: "Inspection normally begins between 20% and 80% completion. The number of units actually checked comes from the sampling plan, not from a fixed percentage of the order.",
  },
  {
    q: "How long does a DPI take?",
    a: "Most inspections take one inspector-day at the factory. Large orders, multiple lines or complex products may need more. The duration is confirmed at booking.",
  },
  {
    q: "How much does a DPI cost in India?",
    a: "Pricing is quoted per order and depends on duration, factory location, product complexity, sample size and reporting scope. We do not publish a fixed rate — ask for a quotation against your specific order.",
  },
  {
    q: "Who pays for the inspection, the buyer or the supplier?",
    a: "In most import arrangements the buyer commissions and pays for it, since the buyer carries the risk. Some suppliers absorb it commercially. It is a contract term, not a rule.",
  },
  {
    q: "Is DUPRO inspection mandatory?",
    a: "It is generally not a legal requirement. It is a commercial and contractual control, though some procurement contracts do require third-party inspection explicitly.",
  },
  {
    q: "What is checked during a DPI?",
    a: "Workmanship, measurements and tolerances, materials and components, function, quantity produced and packed, packing, marking, labelling, and any agreed on-site checks.",
  },
  {
    q: "What is AQL in a DPI?",
    a: "AQL, or acceptable quality level, is the maximum number of defects that can be present in the sample for the lot to still be accepted. Levels are agreed at booking, before findings are known.",
  },
  {
    q: "How is the sample size decided?",
    a: "From your lot size and the agreed inspection level, using a recognised sampling standard. It is not chosen on site by the inspector or the factory.",
  },
  {
    q: "What are critical, major and minor defects?",
    a: "Critical defects create safety or compliance risk. Major defects affect function, durability or saleability. Minor defects are cosmetic deviations that a typical customer would accept.",
  },
  {
    q: "What happens if the inspection fails?",
    a: "A corrective action record is raised, the factory reworks or corrects, and a follow-up inspection verifies the fix before shipment proceeds.",
  },
  {
    q: "Can the supplier dispute the findings?",
    a: "Yes, and that is why findings are photo-documented and classified against criteria agreed in advance. Evidence and pre-agreed criteria settle most disputes quickly.",
  },
  {
    q: "Can a DPI be done remotely?",
    a: "Video or remote checks can supplement an inspection but do not replace physical sampling, measurement and packing verification. We do not present remote checks as equivalent.",
  },
  {
    q: "What is the difference between DPI and pre-shipment inspection?",
    a: "DPI happens mid-production, when defects can still be corrected. A pre-shipment or final inspection happens once production is complete, when the only options are rework of finished goods or acceptance.",
  },
  {
    q: "Do I need both a DPI and a final inspection?",
    a: "Large, high-value, first-time or high-risk orders usually justify both. Small repeat orders with a proven supplier often need only one. It is a risk decision, not a formula.",
  },
  {
    q: "How many inspections does a large order need?",
    a: "It depends on order size, production duration and supplier history. Long production runs across several weeks often justify more than one attendance.",
  },
  {
    q: "What is a golden sample?",
    a: "An approved reference unit, agreed between buyer and supplier before production, used as the physical standard during inspection.",
  },
  {
    q: "What documents does the inspector need from me?",
    a: "Purchase order or specification, approved sample details, packing and labelling requirements, agreed AQL levels, factory address and contact, and current production status.",
  },
  {
    q: "What does the factory need to have ready?",
    a: "Sufficient produced units to sample, some fully packed units, access to the production and packing areas, final packing materials and marking, and a responsible person to receive the findings.",
  },
  {
    q: "How far in advance should I book?",
    a: "Earlier booking secures preferred dates, particularly during the peak export production season. Short-notice requests are accommodated where inspector availability permits.",
  },
  {
    q: "Can you inspect at short notice?",
    a: "Often yes, subject to inspector availability and factory readiness. Tell us the constraint at enquiry and we will confirm honestly whether we can meet it.",
  },
  {
    q: "Do you cover factories outside major cities?",
    a: "Our network covers manufacturing clusters across India, including locations outside the metros. Share the factory address at enquiry and we will confirm coverage.",
  },
  {
    q: "Can one inspection cover multiple factories?",
    a: "Generally no. Each production location normally requires its own attendance. Confirm all locations, including subcontracted units, at booking.",
  },
  {
    q: "Is there a charge for re-inspection?",
    a: "A follow-up visit to verify corrective action is a separate engagement and is quoted separately.",
  },
  {
    q: "How do I know an inspection report is genuine?",
    a: "Reports should be traceable to a named inspector, a specific date and location, and photographic evidence. Ask any provider how report authenticity can be verified.",
  },
  {
    q: "Are inspection details kept confidential?",
    a: "Yes. Order details, specifications and pricing are handled under a confidentiality agreement where required.",
  },
  {
    q: "Can inspection be combined with a factory audit?",
    a: "Yes. Where a supplier assessment is needed alongside product verification, the two can be combined into one engagement.",
  },
  {
    q: "Does the inspection include laboratory testing?",
    a: "On-site practical checks are included within the agreed scope. Where laboratory conditions are required, samples can be drawn during the inspection and submitted for accredited testing separately.",
  },
  {
    q: "How do I book an inspection?",
    a: "Share your order details, factory address and specification. We confirm scope, sampling plan and date, deploy the inspector, and issue the report.",
  },
];

export const BOOK_TITLE = "How to Book";

export const BOOK_INTRO =
  "Booking is deliberately simple. Tell us four things and we can confirm scope in writing the same day.";

export const BOOK_ITEMS: { title: string; text: string }[] = [
  {
    title: "The product category",
    text: "we assign an inspector with that background, whether you need to book garment production inspection, book electronics production inspection, book furniture production inspection, book toy production inspection, book footwear production inspection or book home goods production inspection.",
  },
  {
    title: "The structure",
    text: "a single visit, book multi day production inspection for a large run, or book weekly production monitoring across a season. For a new supplier, book supplier evaluation and inspection together; where shipment follows quickly, book combined dupro and pre shipment inspection as one engagement. To verify a fix, book follow up production inspection or book re-inspection service india.",
  },
  {
    title: "The date, and the real constraint",
    text: "standard scheduling, same week production inspection booking india, or short-notice cover. Urgent production inspection booking and emergency factory inspection india requests are accommodated where inspector availability and factory readiness allow.",
  },
  {
    title: "The factory address and your specification",
    text: "so we can confirm coverage, sampling and cost before anyone is deployed.",
  },
];

export const BOOK_CLOSING =
  "Reach us by phone or through the enquiry form. The same route handles production inspection booking india, book production inspection online, schedule during production inspection, arrange factory inspection india and dpi inspection appointment booking. If you want commercial terms first, request during production inspection quote or get during production inspection quotation — we do not promise an instant inspection quote india, because a real quotation needs your order details.";

export const BOOK_TALK =
  "Prefer to talk it through first? Request inspection callback india, talk to inspection expert india or speak to quality inspector india, and we will tell you what scope your order actually needs. To see the output before committing, ask to get dpi report sample and we will share an anonymised example.";

export const CTA_TITLE = "Book Your Inspection";

export const CTA_PARAGRAPHS: string[] = [
  "There is a narrow window in every production run where a quality problem is still cheap to fix. It opens when the first units come off the line and closes when the last carton is sealed.",
  "Everything after that window is damage control — rework on packed goods, a delayed shipment, a discount you did not plan to give, or a customer who does not order again. Everything inside it is a phone call to a factory.",
  "Tell us the product, the factory location and where production currently stands. We will confirm the scope, the sampling plan, the date and the cost in writing — and we will tell you honestly if an inspection is not worth commissioning for your order.",
];
