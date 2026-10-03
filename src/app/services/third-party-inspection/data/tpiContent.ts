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

export type InternalLink = {
  label: string;
  href?: string;
};

export type InternalLinkGroup = {
  title: string;
  items: InternalLink[];
};

export const TPI_TOC: TocItem[] = [
  { id: "introduction", label: "An Introduction" },
  { id: "what-is", label: "What Is Third Party Inspection (TPI)?" },
  { id: "why-important", label: "Why Third Party Inspection Is Important" },
  { id: "who-needs", label: "Who Needs Third Party Inspection Services?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "types", label: "Types of Third Party Inspection We Provide" },
  { id: "services-include", label: "What Our Service Includes" },
  { id: "eligibility", label: "Who Can Use This Service" },
  { id: "documents", label: "What You Need to Share" },
  { id: "process", label: "Process — Step by Step" },
  { id: "timeline", label: "How Long Does It Take?" },
  { id: "cost", label: "Cost in India" },
  { id: "validity", label: "Validity of the Report" },
  { id: "renewal", label: "Repeat and Ongoing Arrangements" },
  { id: "industries", label: "Industries We Cover" },
  { id: "standards", label: "Standards and Accreditation" },
  { id: "challenges", label: "Common Challenges" },
  { id: "how-we-help", label: "How We Support Your Inspection" },
  { id: "why-choose", label: "Why Choose Ornate Quality Service" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "expert-tips", label: "Practical Tips" },
  { id: "comparison", label: "How Third Party Inspection Compares" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Arrange Your Third Party Inspection" },
];

export const BANNER_TITLE = "Third Party Inspection (TPI) Services in India";

export const BANNER_SUBTITLE =
  "Independent, on-site quality verification at your supplier's factory — before your goods are paid for, dispatched or shipped.";

export const BANNER_DESCRIPTION =
  "Ornate Quality Service Pvt. Ltd. provides third party inspection services across India for importers, exporters, brand owners, sourcing teams and project buyers. Our inspectors visit the manufacturing unit, check the goods against your own specification and agreed checklist, and send you a photo-documented inspection report so you can decide — with evidence in hand — whether to release payment or hold the shipment.";

export const WHAT_YOU_GET_INTRO = "What you get from an independent third party inspection:";

export const WHAT_YOU_GET: string[] = [
  "On-site verification at the factory, warehouse or loading point — not a desk review",
  "Inspection against your purchase order, drawings, approved sample and agreed checklist",
  "Sampling based on recognised international practice, including ISO 2859-1 attribute sampling and AQL levels agreed with you",
  "A clear pass, fail or conditional result with defect classification — critical, major and minor",
  "Photo-documented inspection report with quantity, workmanship, packaging and shipping mark findings",
  "Coverage across Indian manufacturing clusters, including Delhi NCR, Noida, Gurgaon, Ghaziabad, Faridabad and major export hubs",
];

export const QUICK_ANSWER =
  "Quick answer: Third party inspection is a quality check carried out by an independent agency that is neither the buyer nor the supplier. It confirms, on site, that the goods actually match what was ordered — before money moves and before the container leaves.";

export const INTRO_TITLE = "Third Party Inspection Services — An Introduction";

export const INTRO_PARAGRAPHS: string[] = [
  "In most trade relationships, the buyer and the supplier are in two different places. The buyer places an order based on a specification, a drawing or an approved sample. The supplier manufactures, packs and ships. Between those two points there is a gap, and that gap is where quality problems live.",
  "Third party inspection closes that gap. An independent inspection agency goes to the factory on the buyer's behalf, physically examines the goods, and reports what it finds — without any commercial interest in whether the shipment passes or fails. That independence is the whole point. A supplier's own quality control team is checking its own work. A third party quality inspection is checking the work of someone else, with no stake in the outcome.",
  "Third party inspection is not, in most cases, a government licence or a statutory registration. It is usually a commercial requirement — written into a purchase order, demanded by a buyer, required under a letter of credit, or specified in a tender document. In some regulated supply situations, such as certain government and public sector supply orders, an independent inspection requirement is built into the contract or procurement conditions. Requirements vary by buyer, by contract and by sector, so always check what your own purchase order or tender document actually asks for.",
  "This page explains what third party inspection covers, how the process works, what it costs you in terms of effort and planning, what the report gives you, and how our inspection team supports importers, exporters and manufacturers across India.",
];

export const WHAT_IS_PARAGRAPHS: string[] = [
  "Third party inspection (TPI) is independent quality verification carried out by an inspection agency that is separate from both the buyer and the seller. The inspector attends the production site, selects samples from the actual lot, checks them against agreed criteria, and issues a written inspection report recording exactly what was found.",
  "The three parties in any transaction are usually described like this:",
];

export const WHAT_IS_PARTIES: { title: string; text: string }[] = [
  {
    title: "First party",
    text: "the supplier or manufacturer, checking its own production",
  },
  {
    title: "Second party",
    text: "the buyer or the buyer's own quality team, checking the supplier",
  },
  {
    title: "Third party",
    text: "an independent inspection agency, with no commercial interest in the outcome, checking on behalf of whoever engages it",
  },
];

export const WHAT_IS_CLOSING =
  "The purpose of the third party is neutrality. A neutral inspection agency has nothing to gain from passing a bad lot or failing a good one. That is why inspection reports from an independent agency carry weight in a commercial dispute, in a payment decision, and in a letter of credit negotiation, in a way that a supplier's self-declaration usually does not.";

export const VERIFIES_TITLE = "What an inspection actually verifies";

export const VERIFIES_INTRO =
  "A third party inspection is not a general opinion on quality. It is a check against defined, agreed criteria. Typically that includes:";

export const VERIFIES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Quantity verification",
    text: "the number of pieces, cartons and pallets actually present against the packing list",
  },
  {
    title: "Workmanship and visual inspection",
    text: "surface finish, assembly, stitching, joints, finishing defects",
  },
  {
    title: "Dimensional inspection",
    text: "measurements taken against the drawing or approved sample",
  },
  {
    title: "Function and safety checks",
    text: "where the product type and agreed checklist require them",
  },
  {
    title: "Packaging inspection and labelling inspection",
    text: "carton strength, inner packing, barcode verification, shipping marks",
  },
  {
    title: "Document review",
    text: "material test certificates, test reports and other paperwork agreed in advance",
  },
];

export const VERIFIES_CLOSING =
  "Everything in that list is agreed before the inspector travels. An inspection carried out against a vague brief produces a vague report — which is why the checklist matters more than almost anything else in the process.";

export const WHY_INTRO =
  "The value of an independent inspection is that it moves the discovery of a problem to the earliest and cheapest point possible. A defect found at the factory is a rework conversation. The same defect found after the container lands overseas is a claim, a rejected shipment, a lost customer, or all three.";

export const WHY_ITEMS: { title: string; text: string; bullets?: string[] }[] = [
  {
    title: "Commercial protection",
    text: "An inspection carried out before advance payment release or before dispatch gives the buyer a decision point backed by evidence. If the goods are not right, the buyer still holds the leverage that payment provides. Once the money has moved and the container has sailed, that leverage is gone.",
  },
  {
    title: "Evidence that other people accept",
    text: "A photo-documented inspection report from an independent agency is something a buyer can show to a bank, a customer, an insurer or a supplier. It records what was checked, how many pieces were sampled, what was found and what was decided. When a disagreement arises later, that record is far stronger than a recollection of a phone call.",
  },
  {
    title: "Fewer surprises across the supply chain",
    text: "",
    bullets: [
      "Rejection rate reduction — problems are caught while the goods are still in the supplier's hands",
      "Product recall prevention — safety-related defects are far cheaper to catch before distribution than after",
      "Brand protection — a brand owner sourcing from multiple factories gets one consistent standard of checking",
      "Customer complaint reduction — fewer defective units reach the end buyer",
      "Supplier discipline — factories that know an independent inspector will attend tend to prepare better",
    ],
  },
  {
    title: "Market and contract access",
    text: "Many overseas buyers simply will not place an order without an independent inspection clause. Many tenders and institutional purchase orders require an inspection certificate before dispatch or before payment. For an Indian manufacturer or exporter, being comfortable with third party inspection is often the difference between qualifying for an order and not being considered at all.",
  },
];

export const WHO_NEEDS_INTRO =
  "Third party inspection is used by anyone who is buying goods they cannot personally stand next to while they are made, and by anyone who needs to prove to a customer that the goods were checked.";

export const WHO_NEEDS_ROWS: TableRow[] = [
  {
    who: "Importers",
    why: "To verify goods at the Indian factory before payment release and before shipment, rather than discovering problems after arrival.",
  },
  {
    who: "Exporters and manufacturers",
    why: "To satisfy a buyer's inspection clause, to obtain an inspection certificate for export documentation, and to demonstrate consistent quality to new customers.",
  },
  {
    who: "Brand owners",
    why: "To protect the brand across several supplier factories with one common checklist and one reporting standard.",
  },
  {
    who: "Government and institutional buyers",
    why: "To verify supply against tender and purchase order conditions where independent inspection is a contractual requirement.",
  },
  {
    who: "Retail sourcing teams and buying houses",
    why: "To manage quality across many vendors and seasons without placing staff permanently in every cluster.",
  },
  {
    who: "Sourcing agents",
    why: "To give their own clients independent evidence rather than a self-declaration.",
  },
  {
    who: "E-commerce sellers and private label brands",
    why: "To check goods before they enter a fulfilment centre, where returns and negative reviews are expensive.",
  },
  {
    who: "EPC contractors and project buyers",
    why: "To verify fabricated items, equipment and bought-out materials at the vendor works before dispatch to site.",
  },
  {
    who: "MSME manufacturers",
    why: "To meet a large buyer's quality expectations without building a full in-house inspection department.",
  },
];

export const WHO_NEEDS_CLOSING =
  "First-time exporters and first-time importers use inspection most heavily, and for good reason. When you have no history with a supplier, an independent check on the first order is the cheapest insurance available.";

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "1. Payment protection",
    text: "Inspection before advance payment release, or before the balance payment against shipping documents, means you are paying for goods that have actually been verified. This is the single most common reason buyers engage an inspection agency.",
  },
  {
    title: "2. An objective pass or fail, not an opinion",
    text: "Defect classification into critical, major and minor categories, combined with an agreed AQL level, turns a subjective argument into a numerical decision. Either the lot is within the agreed acceptance limits or it is not.",
  },
  {
    title: "3. Evidence you can forward",
    text: "Transparent inspection reporting with photographs means you can forward the report to your own customer, your bank or your insurer without needing to explain it.",
  },
  {
    title: "4. Time to fix problems",
    text: "An inspection carried out during production, rather than only at the end, leaves time for corrective action while the line is still running. A failure discovered on the last day before the vessel cut-off leaves no options at all.",
  },
  {
    title: "5. Consistency across suppliers and locations",
    text: "One checklist, one sampling approach and one report format applied across several factories gives you comparable information. Without that, every supplier reports quality in its own way.",
  },
  {
    title: "6. Lower total cost of quality",
    text: "Inspection is a cost. Rework, air freight replacement, a rejected consignment, a chargeback or a lost account are much larger costs. The purpose of inspection is to convert an unpredictable large cost into a predictable small one.",
  },
];

export const TYPES_INTRO =
  "Third party inspection is not one single activity. It is a set of checks applied at different points in the production and shipping cycle. Which ones you need depends on order value, supplier history and risk.";

export const TYPES_ROWS: TableRow[] = [
  {
    type: "Pre-Production Inspection (PPI)",
    when: "Before mass production starts",
    purpose:
      "Verifying raw materials, components and incoming material against the specification, so that problems are caught before the whole lot is made.",
  },
  {
    type: "During Production Inspection (DPI)",
    when: "While the line is running, typically after part of the order is complete",
    purpose:
      "Catching a systematic defect early, while there is still time and material to correct it.",
  },
  {
    type: "Final Random Inspection (FRI)",
    when: "When production is substantially complete and packed",
    purpose:
      "The pass or fail decision on the finished lot, using random sampling from packed cartons.",
  },
  {
    type: "Container Loading Inspection (CLI)",
    when: "At the loading point, on the day of stuffing",
    purpose:
      "Supervising loading, verifying quantity loaded, checking carton condition, shipping marks and container seal number.",
  },
  {
    type: "Factory & Process Inspection",
    when: "Before or alongside an order",
    purpose:
      "Assessing the manufacturing unit itself — capability, process control, equipment and quality systems — rather than a single lot.",
  },
  {
    type: "Pre-Dispatch Inspection",
    when: "Immediately before goods leave the works",
    purpose: "A final verification against the purchase order before dispatch clearance is given.",
  },
  {
    type: "Stage-Wise Inspection",
    when: "At defined hold points across a longer manufacturing cycle",
    purpose:
      "Used for fabricated items and equipment, where inspection happens at agreed stages rather than only at the end.",
  },
  {
    type: "Witness Testing",
    when: "When a test is performed at the works or at a laboratory",
    purpose:
      "An inspector attends and witnesses the test, and records the observed result rather than relying on a certificate alone.",
  },
  {
    type: "Unannounced Inspection",
    when: "Without prior notice to the production floor",
    purpose:
      "Used when a buyer wants to see normal working conditions rather than a prepared display.",
  },
];

export const TYPES_CLOSING =
  "Most export orders use a combination rather than a single check — commonly a during-production inspection to catch problems early, a final random inspection to make the accept or reject decision, and a container loading inspection on the day of stuffing.";

export const SERVICES_ITEMS: string[] = [
  "Customised inspection checklist built from your purchase order, drawings, approved sample and any buyer-specific requirements",
  "Inspection test plan review, so that hold points and witness points are agreed before work starts",
  "Random sampling from the packed lot, using an agreed sampling plan and AQL level rather than a convenient selection",
  "Quantity verification against the packing list, including carton count and pieces per carton",
  "Visual inspection and workmanship checks for finish, assembly and appearance defects",
  "Dimensional inspection against the drawing or approved sample, with measurements recorded",
  "Function and safety checks where the product and agreed checklist require them",
  "Packaging inspection, carton marking, shipping marks, labelling and barcode verification",
  "Document review — material test certificates, mill test certificate review and test report review where agreed",
  "Defect classification into critical, major and minor, with photographs of each defect found",
  "A clear result — pass, fail or conditional — against the agreed acceptance criteria",
  "Photo-documented inspection report in English, shared electronically",
  "Corrective action follow-up and re-inspection when a lot has failed and been reworked",
  "Coordination with accredited laboratories where a sample needs to be drawn and tested separately",
];

export const SERVICES_CLOSING =
  "Where a buyer needs it, we can also supervise loading, verify the container seal number, and prepare a consolidated inspection report covering several suppliers under the same order.";

export const ELIGIBILITY_INTRO =
  "This is worth stating plainly, because it is often misunderstood: third party inspection is not a licence, a registration or a government approval that a business must qualify for. There is no eligibility test to pass and no application to be accepted. Any buyer, seller or intermediary can engage an inspection agency for any lot of goods.";

export const ELIGIBILITY_VARY_INTRO = "What does vary is whether inspection is required of you:";

export const ELIGIBILITY_NEED: { title: string; text: string }[] = [
  {
    title: "Contractually required",
    text: "your purchase order, supply agreement or tender document names third party inspection as a condition",
  },
  {
    title: "Payment linked",
    text: "your letter of credit or payment terms require an inspection certificate before payment is released",
  },
  {
    title: "Buyer required",
    text: "your overseas customer insists on independent inspection before dispatch, which is common for new supplier relationships",
  },
  {
    title: "Procurement required",
    text: "certain government, public sector and institutional supply orders build independent inspection into the purchase conditions",
  },
  {
    title: "Voluntary and risk based",
    text: "you choose inspection because the order value, the product risk or the supplier's track record justifies it",
  },
];

export const ELIGIBILITY_PARAGRAPHS: string[] = [
  "There are also situations where third party inspection sits alongside a separate statutory certification requirement rather than replacing it. Product certification schemes, food and packaging compliance, and other regulatory approvals have their own rules, their own authorities and their own documentation. An inspection report does not substitute for a certification that the law requires. Requirements vary by product, by scheme and by the latest official guidelines, so confirm your own regulatory position separately.",
];

export const ELIGIBILITY_CLOSING =
  "If you are unsure whether inspection is contractually required for your shipment, read the inspection clause in your purchase order or tender document first. That clause — not a general rule — decides what you need.";

export const DOCUMENTS_INTRO =
  "An inspection is only as good as the brief. These are the inputs an inspector needs in order to check the right things against the right criteria. None of these are government filings — they are your own commercial documents.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Purchase order or order confirmation",
    purpose: "Establishes what was actually ordered — quantity, specification, delivery terms",
    mandatory: "Mandatory",
    notes: "The inspection is checked against this. Without it there is no benchmark.",
  },
  {
    document: "Product specification or technical datasheet",
    purpose: "Defines the measurable requirements",
    mandatory: "Mandatory",
    notes: "Include tolerances wherever they exist.",
  },
  {
    document: "Drawings",
    purpose: "Basis for dimensional inspection",
    mandatory: "Mandatory where dimensions matter",
    notes: "Marked-up drawings showing critical dimensions are far more useful than a full set.",
  },
  {
    document: "Approved sample or golden sample details",
    purpose: "Reference point for appearance, colour and finish",
    mandatory: "Strongly recommended",
    notes: "Tell the inspector where the approved sample is kept at the factory.",
  },
  {
    document: "Inspection checklist or acceptance criteria",
    purpose: "Defines what is checked and what counts as a defect",
    mandatory: "Mandatory",
    notes: "If you do not have one, we prepare a customised inspection checklist for your approval.",
  },
  {
    document: "Agreed AQL level and sampling plan",
    purpose: "Determines sample size and accept or reject limits",
    mandatory: "Mandatory",
    notes: "Agreed in writing before inspection so the result cannot be argued about afterwards.",
  },
  {
    document: "Packing list and packaging specification",
    purpose: "Basis for quantity verification and packaging inspection",
    mandatory: "Mandatory",
    notes: "Include carton dimensions, pieces per carton and shipping mark artwork.",
  },
  {
    document: "Labelling and barcode artwork",
    purpose: "Basis for labelling inspection and barcode verification",
    mandatory: "Where applicable",
    notes: "Small labelling errors cause large downstream problems, especially in retail supply.",
  },
  {
    document: "Factory contact details and site address",
    purpose: "So the inspector can reach the right person at the right location",
    mandatory: "Mandatory",
    notes: "Include a contact who is actually at the site, not only the sales contact.",
  },
  {
    document: "Production and packing readiness date",
    purpose: "For scheduling the visit at the right stage",
    mandatory: "Mandatory",
    notes: "Inspecting a half-packed lot wastes the visit.",
  },
  {
    document: "Test certificates or material test certificates",
    purpose: "For document review and mill test certificate review",
    mandatory: "Where agreed",
    notes: "Share in advance if you want them reviewed rather than only collected.",
  },
  {
    document: "Previous inspection reports or known issues",
    purpose: "Helps target the check at known weak points",
    mandatory: "Optional but useful",
    notes: "Repeat defects are the most valuable thing an inspector can be warned about.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Enquiry",
    color: "#0b57b5",
    title: "1. Enquiry and scope discussion.",
    text: "You tell us the product, the factory location, the quantity, the stage at which you want the check, and any buyer-specific requirements. We confirm what is practical for that product and that site.",
  },
  {
    step: "02",
    label: "Quote",
    color: "#2563eb",
    title: "2. Quotation and confirmation.",
    text: "We share a quotation covering the scope and the expected inspection effort. Third party inspection in India is normally quoted on a man-day basis, so the scope and the number of inspector days are agreed upfront rather than discovered later.",
  },
  {
    step: "03",
    label: "Checklist",
    color: "#0891b2",
    title: "3. Checklist and sampling agreement.",
    text: "We prepare or review the inspection checklist and confirm the sampling plan and AQL level with you in writing. This is the step that decides whether the report will be useful.",
  },
  {
    step: "04",
    label: "Schedule",
    color: "#059669",
    title: "4. Scheduling and coordination.",
    text: "We coordinate with the factory to confirm that the goods will actually be at the agreed stage of production and packing on the inspection date, and we agree the visit with your supplier's site contact.",
  },
  {
    step: "05",
    label: "On-site",
    color: "#d97706",
    title: "5. On-site inspection.",
    text: "The inspector attends the factory, warehouse or loading point, selects samples at random from the actual lot, and carries out the agreed checks — quantity, workmanship, dimensions, function, packaging, marking and documents.",
  },
  {
    step: "06",
    label: "Findings",
    color: "#ea580c",
    title: "6. Findings and defect classification.",
    text: "Defects found are recorded and classified as critical, major or minor, and photographed. The inspector compares the results against the agreed acceptance limits.",
  },
  {
    step: "07",
    label: "Report",
    color: "#7c3aed",
    title: "7. Reporting.",
    text: "You receive a photo-documented inspection report setting out what was checked, how many pieces were sampled, what was found, and the result — pass, fail or conditional.",
  },
  {
    step: "08",
    label: "Decision",
    color: "#0b57b5",
    title: "8. Your decision.",
    text: "You decide whether to release payment, allow dispatch, ask for rework or reject the lot. The inspection agency reports; the commercial decision stays with you.",
  },
  {
    step: "09",
    label: "Rework",
    color: "#2563eb",
    title: "9. Corrective action and re-inspection.",
    text: "Where a lot has failed, the supplier reworks or re-sorts, and a re-inspection verifies whether the corrected lot now meets the agreed criteria.",
  },
  {
    step: "10",
    label: "Close",
    color: "#0891b2",
    title: "10. Inspection certificate and closing documents.",
    text: "Where required for export documentation or for a letter of credit, the relevant inspection document is issued in line with what your buyer or bank requires.",
  },
];

export const PROCESS_CLOSING =
  "The most common reason an inspection fails to deliver value is not the inspector — it is an unclear checklist or goods that are not ready at the agreed stage. Both are fixable before the visit.";

export const TIMELINE_INTRO =
  "There are two separate timelines, and it helps to think about them separately.";

export const TIMELINE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Booking notice",
    text: "Inspection agencies deploy inspectors from the nearest location to your factory, so notice affects availability rather than the inspection itself. Urgent and next-day requirements can often be arranged, particularly in Delhi NCR and other major manufacturing clusters, but availability depends on the location, the product type and the season. Peak export season, when a large number of buyers want inspections in the same weeks, is when notice matters most. Tell us the likely date as early as you can — even a provisional one.",
  },
  {
    title: "Inspection and reporting",
    text: "The on-site time depends on the product, the lot size, the sample size and the number of checks in the agreed checklist. A single-day inspection is common for a straightforward consumer goods lot at one location. Complex products, large quantities, multiple factories or witness testing take longer and are quoted as multiple man-days.",
  },
];

export const TIMELINE_PARAGRAPHS: string[] = [
  "Report turnaround is agreed in advance. Same-day and 24-hour reporting is possible for straightforward inspections. Where laboratory testing or document verification forms part of the scope, the report can only be completed once those results are available.",
  "We do not publish fixed turnaround guarantees on this page, because an honest answer depends on your product, your location and your scope. Ask us for a committed timeline against your specific requirement and we will confirm what we can hold ourselves to in writing.",
];

export const COST_INTRO =
  "We do not publish a rate card, because a single published figure would be misleading for most enquiries. What we can do is explain exactly what moves the number, so you can estimate your own budget and compare quotations sensibly.";

export const COST_BASIS =
  "Third party inspection in India is normally priced on a man-day basis — one inspector, one working day at one location. The total therefore depends on how many inspector days your requirement needs.";

export const COST_INCREASE_INTRO = "Factors that increase the inspection effort";

export const COST_INCREASE: string[] = [
  "Lot size and sample size — a larger lot means a larger sample under the agreed sampling plan, and more pieces to check",
  "Product complexity — a product with many dimensions, functions or safety checks takes longer per piece than a simple one",
  "Number of checks in the checklist — every additional verification adds time",
  "Number of locations — goods at several factories, or several units of one factory, means separate visits",
  "Inspection type — container loading inspection runs for the duration of stuffing, which is a different commitment from a final random inspection",
  "Witness testing — time on site depends on the duration of the test being witnessed",
  "Travel — factories far from an inspector's base carry travel time and travel cost; confirm in the quotation whether travel is included or billed separately",
  "Urgency — short-notice and same-day deployment may carry a premium, depending on availability",
  "Re-inspection — a failed lot that is reworked and re-checked is a separate visit with its own cost",
];

export const COST_CHECK_INTRO = "What to check in any inspection quotation";

export const COST_CHECK: string[] = [
  "Whether the quoted rate is per man-day or per shipment",
  "Whether travel and accommodation are included or extra",
  "What happens on a wasted visit, where goods are not ready on arrival",
  "Whether re-inspection is charged at the same rate",
  "Whether laboratory testing, if needed, is included or quoted separately",
  "What the report deliverable actually includes",
];

export const COST_CLOSING =
  "Ask for a written quotation before you commit. Ask us for one for your specific requirement and we will set out the scope and the man-day basis clearly.";

export const VALIDITY_INTRO =
  "This question comes up constantly, and the honest answer is different from what people expect.";

export const VALIDITY_PARAGRAPHS: string[] = [
  "An inspection report is not a licence and does not carry a validity period in the way a certification or registration does. It is a record of a specific lot, at a specific place, on a specific date. It says: these goods, at this stage, were checked against these criteria, and this is what was found.",
  "That means:",
];

export const VALIDITY_ITEMS: string[] = [
  "The report applies to the lot that was inspected, not to future production from the same factory",
  "A pass result on one shipment says nothing about the next shipment",
  "If the lot is reworked, re-sorted or repacked after inspection, the earlier report no longer describes the goods accurately",
  "If part of the lot is replaced from other stock, the inspection no longer covers what is in the carton",
];

export const VALIDITY_CLOSING =
  "Where a buyer, bank or customer needs an inspection document for their own process, the acceptance rules are theirs — a letter of credit, a purchase order or a procurement condition sets out what document is required and in what form. Confirm those requirements with the party who is asking for it, since they vary by buyer and by transaction.";

export const RENEWAL_INTRO =
  "Because inspection is lot-specific, buyers with continuous supply usually move from one-off bookings to a standing arrangement. There is no renewal process in the regulatory sense — what changes is how the work is organised.";

export const RENEWAL_ITEMS: string[] = [
  "Single shipment inspection — a one-time check, most common for a first order from a new supplier",
  "Order-by-order booking — each shipment is booked individually as production nears completion",
  "Annual or retainer arrangement — an agreed volume of inspections over a period, with a single point of contact and a fixed checklist library",
  "Programme inspection across multiple suppliers — one common standard applied to several factories, with consolidated reporting",
  "Risk-based frequency — full inspection on new or problem suppliers, reduced frequency on suppliers with a consistent record",
];

export const RENEWAL_CLOSING =
  "For repeat buyers, the practical gain from a standing arrangement is not only commercial. It is that the checklist, the AQL level and the defect definitions stop being renegotiated every time, and the reports become comparable across suppliers and seasons.";

export const INDUSTRIES_INTRO =
  "Inspection criteria are product-specific. A defect that matters on a garment is irrelevant on a steel fitting, and the sampling and test expectations are different. We organise our inspection coverage by industry vertical, and detailed category pages are being published for each.";

export const INDUSTRY_ROWS: TableRow[] = [
  {
    industry: "Textiles & Apparel",
    focus:
      "Workmanship and stitching, measurement against the size set, fabric appearance, shade matching, trims, labelling, carton packing and shipping marks",
    page: "Coming Soon",
  },
  {
    industry: "Electronics & Electricals",
    focus:
      "Function checks, electrical safety verification where agreed, assembly quality, markings and ratings, accessories and packing, cable and wire verification",
    page: "Coming Soon",
  },
  {
    industry: "Toys",
    focus:
      "Visual and workmanship checks, assembly, small parts and sharp point concerns, labelling and packaging, sampling for separate laboratory testing where required",
    page: "Coming Soon",
  },
  {
    industry: "Furniture",
    focus:
      "Dimensional checks, assembly and stability, finish quality, hardware and fittings, packaging strength for long transit",
    page: "Coming Soon",
  },
  {
    industry: "Footwear",
    focus:
      "Construction and bonding, sizing and pairing, finish, materials against the approved sample, packing and marking",
    page: "Coming Soon",
  },
  {
    industry: "Home Goods & Housewares",
    focus:
      "Finish and surface quality, dimensional checks, material verification, glassware and utensil condition, retail packaging and barcodes",
    page: "Coming Soon",
  },
];

export const INDUSTRIES_ENGINEERING =
  "We also carry out third party inspection for engineering and industrial supply — including steel fabrication, structural items, pipes and fittings, valves and pumps, electrical panels, cables, machinery, auto components, solar equipment and construction materials — typically using stage-wise inspection, witness testing and document review rather than a single final check. Tell us your product and we will confirm how inspection is best structured for it.";

export const INDUSTRIES_NOTE =
  "The industry pages above are being published in sequence. Until a page is live, the inspection service for that category is already available — the page is a content gap, not a service gap.";

export const STANDARDS_INTRO =
  "Buyers comparing inspection agencies are often told about accreditations without being told what they mean. Here is a plain explanation of the terms that matter, so you can ask better questions — of us and of anyone else you consider.";

export const STANDARDS_ROWS: TableRow[] = [
  {
    term: "ISO 2859-1",
    meaning:
      "An international standard for sampling procedures for inspection by attributes. It is the basis for the AQL sampling tables used to decide how many pieces to check and how many defects are acceptable in a lot.",
  },
  {
    term: "AQL (Acceptance Quality Limit)",
    meaning:
      "The agreed quality level used with a sampling plan to set accept or reject limits. A tighter AQL means fewer defects tolerated and usually a larger sample.",
  },
  {
    term: "Defect classification",
    meaning:
      "The split of findings into critical, major and minor. Critical defects usually carry a zero or near-zero tolerance because they affect safety or legality.",
  },
  {
    term: "ISO/IEC 17020",
    meaning:
      "The international standard setting out requirements for the competence and impartiality of bodies performing inspection. An inspection body can operate to it, and can also be formally accredited against it.",
  },
  {
    term: "Accreditation",
    meaning:
      "Formal third party recognition that an inspection body meets a standard such as ISO/IEC 17020, within a defined scope. Accreditation is scope-specific — it covers named activities, not everything an agency does.",
  },
  {
    term: "NABCB",
    meaning:
      "India's national accreditation body for certification and inspection bodies. Where an inspection body is accredited in India, NABCB is typically the accrediting authority.",
  },
  {
    term: "NABL",
    meaning:
      "India's accreditation body for testing and calibration laboratories. Relevant when your inspection scope includes samples being drawn for laboratory testing.",
  },
  {
    term: "Inspection Test Plan (ITP)",
    meaning:
      "A document listing inspection and test activities across a manufacturing sequence, identifying hold points and witness points.",
  },
  {
    term: "Material Test Certificate (MTC)",
    meaning:
      "A supplier or mill document recording material properties. Reviewing it, and where required witnessing the test behind it, is part of document verification.",
  },
];

export const STANDARDS_ASK_INTRO = "Questions worth asking any inspection agency";

export const STANDARDS_ASK: string[] = [
  "What accreditation do you hold, by which accreditation body, and for what scope — and can I see the current certificate?",
  "Is the accreditation current, and does its scope cover the type of inspection I actually need?",
  "Who will physically attend my factory, and what is their background in my product category?",
  "What sampling standard and AQL level will you apply, and will that be confirmed in writing before the visit?",
  "What does the report include, and how quickly will I receive it?",
  "How do you handle a conflict of interest if you also work for my supplier?",
];

export const STANDARDS_NOTE =
  "Ask for accreditation certificates in writing rather than accepting a logo on a website — including from us. Any agency that hesitates to share current accreditation documents and its scope has told you something useful.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Goods not ready at the agreed stage",
    text: "The most frequent problem. An inspector arrives to find production incomplete or packing not finished. The visit is wasted and the schedule slips. The fix is a readiness confirmation from the factory shortly before the visit — not weeks earlier.",
  },
  {
    title: "A vague or missing checklist",
    text: "When acceptance criteria are not defined, disputes move from the goods to the report. Agree the checklist, the AQL level and the defect definitions in writing before the inspector travels.",
  },
  {
    title: "No approved sample at the factory",
    text: "Appearance, colour and finish are hard to judge against a written description alone. If a golden sample exists, it must be physically available at the site during inspection.",
  },
  {
    title: "Sampling that is not random",
    text: "If the factory presents a prepared set of cartons, the inspection is checking a display rather than the lot. Random selection across the packed lot is the point.",
  },
  {
    title: "Timing too late to act",
    text: "An inspection on the day before the vessel cut-off can only tell you what has gone wrong. It cannot give you time to fix it. Moving one check earlier into production changes the options available.",
  },
  {
    title: "Unclear scope on documents and testing",
    text: "Buyers sometimes assume laboratory testing is included in an inspection. It usually is not, unless it was agreed. Confirm whether you need sample collection and separate testing alongside the inspection visit.",
  },
  {
    title: "Communication gaps",
    text: "Reports that are unclear, arrive late, or come in a language the buyer cannot use create as many problems as the defects themselves. Agree the reporting format and language upfront.",
  },
];

export const HELP_INTRO =
  "Our role is to give you evidence you can act on, and to make the process easy enough that inspection becomes routine rather than a scramble before every shipment.";

export const HELP_ROWS: TableRow[] = [
  {
    what: "Scope discussion before quoting",
    how: "You get a quotation built around your product and risk, not a generic package.",
  },
  {
    what: "Customised inspection checklist",
    how: "Written from your purchase order, drawing and approved sample, and confirmed by you before the visit.",
  },
  {
    what: "Sampling plan and AQL agreement in writing",
    how: "The accept or reject basis is settled before inspection, so results cannot be argued about afterwards.",
  },
  {
    what: "Inspection test plan review",
    how: "For engineering and project supply, hold points and witness points are agreed rather than assumed.",
  },
  {
    what: "Factory coordination and scheduling",
    how: "We confirm readiness with the site contact so the visit is not wasted.",
  },
  {
    what: "On-site inspection by our engineers",
    how: "Physical verification at the factory, warehouse or loading point.",
  },
  {
    what: "Photo-documented reporting in English",
    how: "A report you can forward to your buyer, bank or customer without translation or explanation.",
  },
  {
    what: "Defect classification against agreed limits",
    how: "A clear pass, fail or conditional result rather than a narrative opinion.",
  },
  {
    what: "Corrective action follow-up",
    how: "Support through rework and re-inspection when a lot fails.",
  },
  {
    what: "Laboratory coordination",
    how: "Where your scope needs testing, we coordinate sample collection with accredited laboratories.",
  },
  {
    what: "Documentation and coordination support",
    how: "Help assembling the inspection-related documents your buyer or bank requires.",
  },
  {
    what: "Single point of contact",
    how: "One person who knows your product and your history, rather than a new explanation each time.",
  },
];

export const HELP_NOTE =
  "What we do not do is promise a result. An inspection agency that guarantees your lot will pass is not inspecting it. We report what we find, and the commercial decision remains yours.";

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Independence is the product",
    text: "An inspection has value only if the inspector has no stake in the outcome. We maintain impartiality between buyer and supplier, and we will tell you when a lot fails even when that is the inconvenient answer. A report that always says pass is worth nothing to anyone.",
  },
  {
    title: "Compliance experience across regulated supply",
    text: "Inspection rarely sits alone. Our wider practice covers certification, product compliance and regulatory documentation across a range of Indian schemes, which means we understand the paperwork your buyer or your regulator is likely to ask for next, and where inspection fits alongside it.",
  },
  {
    title: "Coverage across Indian manufacturing clusters",
    text: "We are based in Noida and work across Delhi NCR — including Noida, Gurgaon, Ghaziabad and Faridabad — as well as other major manufacturing and export clusters. Tell us your factory location and we will confirm coverage and deployment for that site before you commit.",
  },
  {
    title: "Reporting built for the person who reads it",
    text: "Reports in English, with photographs, clear defect classification and a stated result. If your buyer has a preferred format, tell us and we will work to it.",
  },
  {
    title: "Structured, standards-based method",
    text: "Sampling based on recognised practice, checklists agreed in writing, defects classified against agreed criteria, findings supported by photographs. The method is the same whether the order is small or large.",
  },
  {
    title: "Direct, responsive communication",
    text: "Inspection problems are time-sensitive. When a lot fails two days before shipment, you need a person who answers, not a ticket number.",
  },
];

export const WHY_CHOOSE_NOTE =
  "On credentials: ask us directly for our current accreditation status, scope and inspector qualifications, and we will provide them in writing. We would rather answer that question properly than display a badge on a page.";

export const MISTAKES_ITEMS: string[] = [
  "Booking inspection only at the end. One final check gives you a verdict but no time. Add an earlier check when the order value or supplier risk justifies it.",
  "Leaving acceptance criteria undefined. 'Good quality' is not a criterion. An AQL level and a defect list are.",
  "Letting the supplier choose the samples. Sampling must be random and taken from the packed lot by the inspector.",
  "Assuming inspection includes laboratory testing. It does not unless you asked for it.",
  "Skipping inspection on repeat orders. Quality drift usually shows up on the third or fourth shipment, not the first.",
  "Inspecting only the product and ignoring packing. Goods that arrive damaged are as rejected as goods that arrive defective.",
  "Not sharing known past defects. If a supplier has a recurring problem, say so — a targeted check is worth more than a general one.",
  "Treating a pass result as permanent. The report covers the lot inspected, not the factory in general.",
  "Choosing an agency on price alone. The cheapest inspection is the one that misses the defect you were paying to find.",
  "Booking too late. Short notice limits inspector availability, especially in peak export season.",
];

export const TIPS_ITEMS: string[] = [
  "Put the inspection clause in the purchase order, not in an email. Name the inspection stage, who pays, and what happens if the lot fails.",
  "Agree who bears the cost of re-inspection after a failure before the first order, not after the first failure.",
  "Keep an approved sample at the factory and make sure the production team knows where it is.",
  "Mark up your drawing with the dimensions that actually matter. An inspector checking twenty dimensions equally is checking none of them well.",
  "Ask for photographs of defects, not just counts. A photograph settles an argument that a number starts.",
  "For a new supplier, consider a during-production check on the first order even if you plan only final inspection later.",
  "Tell the inspection agency your real deadline, including the vessel cut-off. Scheduling backwards from that is more reliable than scheduling forwards from today.",
  "If your buyer has their own checklist, share it in full rather than summarising it.",
  "Record the container seal number at loading and match it against the shipping documents.",
  "Keep your inspection reports. Over a few shipments they become a supplier performance record you can negotiate with.",
];

export const COMPARISON_QC_TITLE = "Third party inspection vs in-house quality control";

export const COMPARISON_ROWS: TableRow[] = [
  {
    point: "Who performs it",
    inhouse: "Your own team, or the supplier's own team",
    tpi: "An independent agency with no stake in the result",
  },
  {
    point: "Independence",
    inhouse: "Limited — the supplier's QC is checking its own work",
    tpi: "Independent by design",
  },
  {
    point: "Coverage",
    inhouse: "Strong where your team is physically present",
    tpi: "Available across locations without permanent staffing",
  },
  {
    point: "Cost structure",
    inhouse: "Fixed cost — salaries, travel, management",
    tpi: "Variable cost — paid per inspection or per man-day",
  },
  {
    point: "Credibility with third parties",
    inhouse: "Lower — a self-declaration",
    tpi: "Higher — accepted by buyers and banks as independent evidence",
  },
  {
    point: "Best used for",
    inhouse: "Continuous, high-volume production at known sites",
    tpi: "Spot verification, new suppliers, distant locations, and evidence for a third party",
  },
];

export const COMPARISON_BLOCKS: { title: string; text: string }[] = [
  {
    title: "Inspection vs testing",
    text: "Inspection is verification against a specification — checking, measuring, counting and observing, usually at the factory. Testing is a laboratory procedure that measures a defined property under controlled conditions. An inspector can witness a test and can draw samples for testing, but the inspection itself is not a test report. Many buyers need both, and they should be scoped separately.",
  },
  {
    title: "Inspection vs audit",
    text: "An inspection examines goods. An audit examines a system or a facility — process control, equipment, procedures, records. A factory audit tells you whether a supplier is capable of making your product consistently. An inspection tells you whether this particular lot is acceptable. They answer different questions and are often used together.",
  },
  {
    title: "Third party inspection vs factory and process inspection",
    text: "Product inspection looks at output. Factory and process inspection looks at the manufacturing unit and how it works. If you are qualifying a new supplier, the factory assessment usually comes first. If you are protecting a shipment that is already in production, product inspection is the priority.",
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is third party inspection?",
    a: "Third party inspection is an independent quality check carried out at the production or loading site by an agency that is neither the buyer nor the supplier. The inspector verifies the goods against your agreed specification and checklist, and issues a report recording what was found.",
  },
  {
    q: "What is the difference between QC and TPI?",
    a: "Quality control is usually performed by the party making or buying the goods. Third party inspection is performed by an independent agency with no stake in the outcome. The activities can look similar; the difference is independence, which is what gives the report weight with a third party such as a bank or an overseas buyer.",
  },
  {
    q: "What is the difference between TPI and PSI?",
    a: "Pre-shipment inspection is a specific timing — a check carried out before goods are shipped. Third party inspection describes who performs it, not when. A pre-shipment inspection carried out by an independent agency is a third party inspection.",
  },
  {
    q: "What is the difference between inspection and testing?",
    a: "Inspection verifies goods against a specification by checking, measuring and observing, usually at the factory. Testing measures a defined property under controlled laboratory conditions. An inspector can witness testing or draw samples for it, but inspection does not replace a laboratory test report.",
  },
  {
    q: "What is the difference between inspection and audit?",
    a: "An inspection examines a specific lot of goods. An audit examines a facility or a system — processes, equipment, records and controls. Buyers often use a factory audit to qualify a supplier and product inspection to protect individual shipments.",
  },
  {
    q: "Is third party inspection mandatory in India?",
    a: "In most cases it is a commercial requirement rather than a general legal one. It becomes compulsory for you when your purchase order, tender document, letter of credit or buyer agreement requires it. Some procurement and supply conditions build it in. Check the inspection clause in your own contract, and confirm any separate statutory certification requirements for your product independently.",
  },
  {
    q: "How do I book an inspection in India?",
    a: "Share your product details, factory location, quantity, required inspection stage and target date. We confirm scope, send a quotation on a man-day basis, agree the checklist and sampling plan with you in writing, coordinate the date with the factory, and deploy an inspector.",
  },
  {
    q: "How much notice does an inspection agency need?",
    a: "As much as you can give. Short-notice and next-day inspections can often be arranged in major clusters, but availability depends on location, product and season. During peak export months, book as early as you can — a provisional date is better than no date.",
  },
  {
    q: "What is the cost of third party inspection in India?",
    a: "Inspection is usually quoted per man-day, so cost depends on lot size, sample size, product complexity, the number of checks, the number of locations, travel, and urgency. We do not publish a fixed rate because it would not be accurate for most enquiries. Ask for a written quotation against your specific scope.",
  },
  {
    q: "Do you charge per man day or per shipment?",
    a: "Our standard basis is per man-day, which is the normal commercial model for inspection in India. Where a requirement is repetitive and predictable, a per-shipment or retainer arrangement can be discussed.",
  },
  {
    q: "Is travel cost included in the inspection fee?",
    a: "This should always be clarified in writing before booking — with us or with any agency. Travel treatment varies with distance and location, and we set it out in the quotation so there is no surprise afterwards.",
  },
  {
    q: "Do you provide a quotation before inspection?",
    a: "Yes. Scope, basis of charging and deliverables are confirmed in a written quotation before any inspector is deployed.",
  },
  {
    q: "How many pieces are checked during an inspection?",
    a: "The sample size follows the sampling plan and AQL level agreed with you, typically based on ISO 2859-1 attribute sampling. Larger lots and tighter AQL levels mean larger samples. The plan is confirmed in writing before the visit so the accept or reject basis is settled in advance.",
  },
  {
    q: "Which AQL level do you normally use?",
    a: "There is no single default. The appropriate level depends on your product, its risk profile and your buyer's requirement. If your buyer has specified a level, we apply that. If not, we recommend one and confirm it with you before inspection.",
  },
  {
    q: "How is sample size decided in inspection?",
    a: "From the lot size, the agreed inspection level and the agreed AQL, using the sampling tables. This is why the lot must be substantially complete and packed at the time of inspection — the sample is drawn at random from the actual packed lot.",
  },
  {
    q: "What happens if a shipment fails the inspection?",
    a: "You receive a report setting out the defects found, with photographs and classification. You then decide: rework, re-sort, partial acceptance, renegotiation or rejection. If the lot is corrected, a re-inspection verifies whether it now meets the agreed criteria. The decision is always yours — we report the facts.",
  },
  {
    q: "Can a failed shipment be re-inspected?",
    a: "Yes. Re-inspection is a separate visit and is quoted separately. Agree in advance with your supplier who bears that cost, because it is a common point of dispute after the event.",
  },
  {
    q: "How soon is the inspection report shared?",
    a: "Report turnaround is agreed as part of the scope. Same-day and 24-hour reporting is achievable for straightforward inspections. Where laboratory results or document verification form part of the scope, the report follows those results.",
  },
  {
    q: "Do you arrange lab testing along with inspection?",
    a: "Testing is not automatically included in an inspection, but we can coordinate sample collection and laboratory testing where your scope requires it. Tell us at the enquiry stage so it is quoted and scheduled correctly.",
  },
  {
    q: "Do you coordinate with NABL accredited labs?",
    a: "Where your requirement calls for laboratory testing, we coordinate with accredited laboratories appropriate to the test. The choice of laboratory depends on the test method and your buyer's requirements.",
  },
  {
    q: "Do you verify quantity and packing list?",
    a: "Yes. Quantity verification against the packing list, carton count, pieces per carton, packing condition, shipping marks and labelling are standard parts of a final and pre-dispatch inspection.",
  },
  {
    q: "Do you check shipping marks and labels?",
    a: "Yes — labelling, carton marking, shipping marks and barcode verification are included where they form part of the agreed checklist. Marking and labelling errors are among the most common causes of downstream rejection in retail supply.",
  },
  {
    q: "Can you inspect at multiple factories for the same order?",
    a: "Yes. Where an order is split across suppliers, we can inspect at each location and provide a consolidated inspection report so you are not comparing several different formats.",
  },
  {
    q: "Can you inspect in tier 2 and tier 3 cities?",
    a: "Deployment depends on the location and the notice available. Share the factory address at enquiry stage and we will confirm coverage for that specific site before you commit.",
  },
  {
    q: "Do you handle inspection for imported goods?",
    a: "Yes. Importers use inspection both at overseas supply points and for goods arriving in India, including verification before customs clearance and before payment release on imported machinery and equipment.",
  },
  {
    q: "Is an inspection report accepted by banks or customs?",
    a: "Acceptance is decided by the party asking for the document — the bank, the buyer or the authority concerned. A letter of credit or purchase order will state what form of inspection document is required. Confirm those requirements with them, and we will issue documentation in line with what is specified.",
  },
  {
    q: "Do you need factory contact details in advance?",
    a: "Yes. We need a working site contact — someone actually at the manufacturing location — plus the full address, so the visit can be confirmed and the inspector can reach the right person.",
  },
  {
    q: "Can you verify whether a factory actually exists?",
    a: "Yes. Supplier verification visits are a common request from importers dealing with a new or unverified supplier, and they are usually carried out before any advance payment is released.",
  },
  {
    q: "Do you work with sourcing agents and buying houses?",
    a: "Yes. Sourcing agents, buying houses and retail sourcing teams use independent inspection to give their own clients objective evidence rather than a self-declaration.",
  },
  {
    q: "Whom do I contact for an urgent inspection?",
    a: "Contact our inspection team directly with the factory location, product and required date. Urgent requirements are handled case by case depending on inspector availability in that area.",
  },
  {
    q: "What should I look for when choosing an inspection agency?",
    a: "Ask what accreditation the agency holds and for what scope, who will physically attend your factory and their experience in your product category, what sampling standard and AQL will be applied, what the report contains, how fast it arrives, and how conflicts of interest are handled. Ask for documents rather than accepting claims — including from us.",
  },
];

export const CTA_TITLE = "Arrange Your Third Party Inspection";

export const CTA_PARAGRAPHS: string[] = [
  "If you are about to release a payment, approve a dispatch or load a container, an independent check is the cheapest point at which to find out whether the goods are right.",
  "Tell us your product, the factory location, the quantity and the stage at which you need the check. We will confirm what is practical, share a written quotation on a man-day basis, and agree the checklist and sampling plan with you before anyone travels.",
];

export const CTA_FOOTER =
  "Ornate Quality Service Pvt. Ltd. — inspection, certification and compliance support for manufacturers, importers, exporters and brand owners across India.";

export const INTERNAL_LINKS_NOTE =
  "Suggestions only — anchor text and URL structure are finalised in Stage 5.";

export const INTERNAL_LINK_GROUPS: InternalLinkGroup[] = [
  {
    title: "Inspection services (child pages of this page)",
    items: [
      { label: "Pre-Production Inspection (PPI)", href: "/services/pre-production-inspection" },
      { label: "During Production Inspection (DPI)", href: "/services/during-production-inspection" },
      { label: "Final Random Inspection (FRI)", href: "/services/final-random-inspection" },
      { label: "Container Loading Inspection (CLI)", href: "/services/container-loading-inspection" },
      { label: "Factory & Process Inspection", href: "/services/factory-process-inspection" },
      { label: "Product Inspection & Quality Monitoring", href: "/services/product-inspection" },
    ],
  },
  {
    title: "Industry vertical pages (from Stage 3 programmatic set)",
    items: [
      { label: "Third party inspection for textiles and apparel" },
      { label: "Third party inspection for electronics and electricals" },
      { label: "Third party inspection for toys" },
      { label: "Third party inspection for furniture" },
      { label: "Third party inspection for footwear" },
      { label: "Third party inspection for home goods and housewares" },
    ],
  },
  {
    title: "Related services (cross-sell)",
    items: [
      { label: "NABL Lab Testing Services", href: "/services/nabl-accreditation" },
      { label: "Audit Services", href: "/services/audit-services" },
      { label: "Technical Documentation & Compliance Support" },
      { label: "BIS Certification", href: "/services/bis-certification" },
      { label: "BIS-ISI Mark Certification", href: "/services/bis-isi-mark-certification" },
      { label: "BIS CRS Registration", href: "/services/bis-crs-registration" },
      { label: "FMCS Certification", href: "/services/bis-fmcs-certification" },
      { label: "ISO Certification", href: "/services/iso-certification" },
      { label: "CE Certification", href: "/services/ce-certification" },
      { label: "CDSCO Certification", href: "/services/cdsco-registration" },
      { label: "CCOE/PESO Certification", href: "/services/peso-ccoe-registration" },
      { label: "FSSAI Registration", href: "/services/fssai-registration" },
      { label: "LMPC Registration", href: "/services/lmpc-registration" },
      { label: "BEE Registration", href: "/services/bee-certification" },
      { label: "EPR Registration", href: "/services/epr-registration" },
      { label: "WPC-ETA Approval", href: "/services/wpc-eta-approval" },
      { label: "TEC Approval", href: "/services/tec-certification" },
      { label: "RoHS Compliance", href: "/services/rohs-certification" },
      { label: "IEC Registration", href: "/services/iec-registration" },
      { label: "GeM Registration", href: "/services/gem-registration" },
      { label: "Trademark Registration", href: "/services/trademark-registration" },
    ],
  },
  {
    title: "Supporting blog content (from Stage 3 blog set)",
    items: [
      { label: "How to choose a third party inspection agency" },
      { label: "Factors that affect third party inspection cost" },
      { label: "How to prepare your factory for a third party inspection" },
      { label: "How to read an inspection report correctly" },
      { label: "Pre shipment inspection vs final random inspection" },
      { label: "What is AQL in quality inspection" },
      { label: "Understanding ISO 2859 sampling standard" },
      { label: "How to handle a failed inspection report" },
    ],
  },
];
