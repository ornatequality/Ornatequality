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
  objective: string;
  activities: string;
  timeline: string;
  deliverables: string;
  tip: string;
};

export const PI_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-tpi", label: "What Is Product Inspection & Quality Monitoring?" },
  { id: "why-matters", label: "Why Product Inspection & Quality Monitoring Matters" },
  { id: "who-needs", label: "Who Needs Product Inspection & Quality Monitoring?" },
  { id: "services-offered", label: "Features of Our Product Inspection & Quality Monitoring Services" },
  { id: "benefits", label: "Benefits — Explained One by One" },
  { id: "process", label: "The Complete Product Inspection Process — Step by Step" },
  { id: "documents", label: "Documents & Information Required" },
  { id: "eligibility", label: "Eligibility — Who Can Use This Service" },
  { id: "timeline", label: "Timeline — What to Expect and When" },
  { id: "cost", label: "Cost Factors — What Actually Drives the Price" },
  { id: "challenges", label: "Common Challenges — and How to Solve Them" },
  { id: "why-choose", label: "Why Choose Ornate Quality Services Pvt Ltd" },
  { id: "industries", label: "Industries Served" },
  { id: "regulatory", label: "Latest Updates & Regulatory Context" },
  { id: "mistakes", label: "Common Mistakes Importers Make" },
  { id: "expert-tips", label: "Expert Tips from Our Inspection Team" },
  { id: "comparison", label: "Doing It Yourself vs a Consultant vs a Professional Agency" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Your Next Shipment Verified Before It Leaves the Factory" },
];

export const BANNER_TITLE = "Product Inspection & Quality Monitoring Services in India";

export const BANNER_SUBTITLE =
  "Independent, AQL-based inspection at your supplier's factory — before the goods become your problem.";

export const BANNER_DESCRIPTION =
  "Ornate Quality Services Pvt Ltd provides third party product inspection services in India for importers, brand owners, e-commerce sellers, manufacturers and retail sourcing teams. Our inspectors check your goods at the factory, against your specification, using recognised statistical sampling standards — and send you a photo-backed report before the container leaves.";

export const TRUST_HEADING = "Trust signals";

export const TRUST_ITEMS: string[] = [
  "Independent and unbiased quality verdict — we inspect, we do not manufacture or trade",
  "Standards based inspection methodology aligned to ISO 2859-1 / ANSI ASQ Z1.4 sampling",
  "Photo backed evidence in every report",
  "Pan India inspector network covering major manufacturing clusters",
  "Confidential and impartial inspection under NDA",
  "In house technical and certification team for BIS, ISO, EPR, BEE and related compliance",
];

export const QUICK_BENEFITS_HEADING = "Quick benefits";

export const QUICK_BENEFITS: string[] = [
  "Catch defects while the goods are still in the factory, when rework is still possible",
  "Release payment against evidence, not against a supplier's assurance",
  "Reduce marketplace returns and customer complaints",
  "Build a defect record across orders instead of firefighting each shipment",
  "One partner for inspection, lab testing coordination and certification support",
];

export const INTRO_LEAD =
  "Most quality problems do not appear suddenly at the port. They build quietly during production — a substituted material here, a rushed finishing line there, a packing team that never saw the approved sample. By the time the goods reach your warehouse, the cost of fixing them has multiplied, and your only remaining options are a discount, a return, or a dispute with a supplier who has already been paid.";

export const INTRO_PARAGRAPH =
  "Product inspection and quality monitoring services exist to close that gap. Whether you call it third party quality inspection India, quality control inspection services or product quality monitoring solutions, the discipline is the same. Product inspection is the physical verification of goods against an agreed specification, using a defined sampling method, at a defined stage of production. Quality monitoring is the same discipline applied continuously — across production stages, across repeat orders, and across multiple suppliers — so that defect patterns become visible early enough to act on.";

export const INTRO_IMPACT_HEADING = "What this means for your business";

export const INTRO_IMPACT: { title: string; text: string }[] = [
  {
    title: "Business impact.",
    text: "A single rejected shipment can cost more than a full year of production quality monitoring services. Independent product inspection services and product quality inspection services in India give you a decision point before that money is committed, and give your sourcing team something more useful than a supplier's word.",
  },
  {
    title: "Legal and contractual impact.",
    text: "An inspection report is evidence. It supports your position in a quality dispute, it can be tied to payment terms in your purchase order, and it creates traceable inspection records that stand up when a buyer, a marketplace or a customer challenges your goods. Inspection is not a substitute for statutory certification — where a product falls under a Quality Control Order, BIS registration or similar requirement, that obligation remains separate — but it verifies that what is in the carton matches what was approved.",
  },
  {
    title: "Financial impact.",
    text: "Rework inside the factory is cheap. Rework after shipment is not. Air freight to replace a rejected consignment, marketplace penalties, chargebacks and written-off stock all sit downstream of a quality check that was never done.",
  },
  {
    title: "Operational impact.",
    text: "Continuous quality monitoring turns quality from a recurring emergency into a managed process. Instead of reacting to each complaint, you track defect trends, hold suppliers to a measurable standard and plan production with realistic expectations.",
  },
];

export const BUYERS_CALL_HEADING = "What buyers call this service";

export const BUYERS_CALL =
  "Sourcing teams use different names for the same scope, and that inconsistency causes real confusion when comparing providers. Product quality control services India, product quality check services India, QC inspection services India, product quality audit services India, quality assurance inspection services India and third party inspection agency India all describe the work set out on this page. If you have been quoted for any of those, you are comparing like with like.";

export const WHO_PAGE_FOR_HEADING = "Who this page is for";

export const WHO_PAGE_FOR =
  "If you import from India, source through a buying office, sell on a marketplace, manufacture under a brand name, or supply retail chains and government buyers, this page explains exactly how inspection works, what it costs, what you receive, and when to book it.";

export const WHAT_IS_PARAGRAPHS: string[] = [
  "Product inspection is a structured physical check of a production lot, carried out by a trained inspector who does not work for the supplier. Quality monitoring extends that check across time — before production, during production, at finished-goods stage, and at container loading.",
  "Put simply: inspection tells you the condition of one lot; monitoring tells you the direction your supplier is heading.",
];

export const THREE_THINGS_HEADING = "The three things every inspection compares";

export const THREE_THINGS: { title: string; text: string }[] = [
  {
    title: "1. The goods",
    text: "the actual units pulled from the production lot.",
  },
  {
    title: "2. The reference",
    text: "your approved sample, technical specification sheet, artwork and purchase order specification.",
  },
  {
    title: "3. The standard",
    text: "the acceptance criteria you have agreed, expressed as an Acceptable Quality Level.",
  },
];

export const THREE_THINGS_CLOSING =
  "Where those three align, the lot passes. Where they do not, the inspector records the deviation, classifies it, photographs it and reports it.";

export const AQL_HEADING = "Acceptable Quality Level (AQL), explained without the jargon";

export const AQL_INTRO =
  "You are not paying anyone to open 12,000 cartons. Statistical sampling exists so that a manageable number of units can tell you, with known confidence, whether the whole lot is acceptable.";

export const AQL_ITEMS: { title: string; text: string }[] = [
  {
    title: "Lot size",
    text: "is how many units are offered for inspection.",
  },
  {
    title: "The sample size code letter and inspection level",
    text: "decide how many units are pulled. General Inspection Level II is the common default for consumer goods.",
  },
  {
    title: "The AQL",
    text: "sets how many defects are tolerable in that sample before the lot is rejected. A tighter AQL means a stricter check.",
  },
  {
    title: "The acceptance number and rejection number",
    text: "turn the count of defects into a clear verdict.",
  },
];

export const AQL_CLOSING_BEFORE =
  "This is not an Ornate invention. It follows recognised statistical sampling standards —";

export const AQL_CLOSING_AFTER =
  "— which is precisely why an inspection report carries weight with an overseas buyer who has never met your factory.";

export const DEFECTS_HEADING = "How defects are classified";

export const DEFECTS_INTRO =
  "Not every flaw matters equally, and treating them as if they do is how buyers end up rejecting perfectly saleable stock or accepting genuinely unsafe goods.";

export const DEFECT_ROWS: TableRow[] = [
  {
    cls: "Critical defect",
    meaning: "Renders the product unsafe, unusable or non-compliant with a regulatory requirement",
    consequence: "Lot held; shipment not released",
  },
  {
    cls: "Major defect",
    meaning: "Likely to result in a return, complaint or functional failure in normal use",
    consequence: "Counted strictly against the AQL",
  },
  {
    cls: "Minor defect",
    meaning: "A departure from the standard that most end users would not reject the product over",
    consequence: "Recorded and trended, tolerated within limits",
  },
];

export const DEFECTS_CLOSING =
  "A defect classification matrix is agreed before the inspection, not argued about afterwards. That single step prevents most buyer–supplier quality disputes.";

export const VS_HEADING = "Inspection vs testing vs certification";

export const VS_INTRO = "These three get confused constantly, and the confusion is expensive.";

export const VS_ROWS: TableRow[] = [
  {
    type: "Inspection",
    answers: "Does this specific lot match the approved specification?",
    where: "At the factory or warehouse",
  },
  {
    type: "Testing",
    answers: "Does this product meet a measurable technical or safety parameter?",
    where: "In a laboratory, often NABL accredited",
  },
  {
    type: "Certification",
    answers: "Is this product type approved under a regulatory scheme?",
    where: "Through the relevant authority, e.g. BIS",
  },
];

export const VS_CLOSING =
  "You often need more than one. A product can hold a valid certification and still ship with the wrong colour, the wrong quantity and a broken carton — certification does not inspect your lot. Equally, an inspector can confirm workmanship but cannot declare a substance test result without a lab. Ornate coordinates all three, which is why our clients treat us as a single window compliance partner rather than an inspection vendor.";

export const EXPERT_NOTE =
  "Expert Note: If you take one thing from this page, take this — an inspection is only as good as the reference it is measured against. A vague specification produces a vague report. Before your first inspection, lock down an approved sample and a written specification. Everything else follows from that.";

export const WHY_MATTERS_GROUPS: { heading: string; items: { title: string; text: string }[] }[] = [
  {
    heading: "Business benefits",
    items: [
      {
        title: "Decisions based on evidence.",
        text: "A photo-backed report replaces guesswork in the one conversation where guesswork costs the most.",
      },
      {
        title: "Leverage that survives the order.",
        text: "Suppliers behave differently when they know an independent inspector is coming, and that effect compounds across repeat orders.",
      },
      {
        title: "Supplier comparison on facts.",
        text: "Defect data across vendors shows you which supplier actually deserves your next order.",
      },
    ],
  },
  {
    heading: "Legal and contractual benefits",
    items: [
      {
        title: "Enforceable purchase order terms.",
        text: 'An inspection clause converts "good quality" from an opinion into a testable condition.',
      },
      {
        title: "A defensible record.",
        text: "Traceable inspection records, dated and photographed, are what you rely on when a claim is contested months later.",
      },
      {
        title: "Documentation support.",
        text: "Inspection findings feed cleanly into shipping documentation and, where your payment terms require it, into the paperwork chain around a letter of credit.",
      },
    ],
  },
  {
    heading: "Financial benefits",
    items: [
      {
        title: "Payment released against proof.",
        text: "Verify before you pay, not after.",
      },
      {
        title: "Lower cost of poor quality.",
        text: "Rework at source is a fraction of the cost of replacement after shipment.",
      },
      {
        title: "Fewer returns and chargebacks.",
        text: "For marketplace sellers, return rate is a direct margin line — and most returns trace back to defects that a pre-shipment check would have caught.",
      },
    ],
  },
  {
    heading: "Operational benefits",
    items: [
      {
        title: "Realistic production visibility.",
        text: "During production inspection tells you whether your delivery date is real, weeks before the supplier admits it is not.",
      },
      {
        title: "Root cause instead of firefighting.",
        text: "Non conformance reporting and corrective and preventive action turn a recurring defect into a closed issue.",
      },
      {
        title: "Capacity you do not have to hire.",
        text: "An outsourced quality control partner covers factories in cities where you have no team.",
      },
    ],
  },
  {
    heading: "Brand and market benefits",
    items: [
      {
        title: "Consistency is the brand.",
        text: "A customer forgives one bad unit; they do not forgive a pattern.",
      },
      {
        title: "Credibility with your own buyers.",
        text: "Retail chains and international buyers increasingly ask what quality controls sit behind your supply chain. \"We inspect every shipment through an independent agency\" is a straight answer.",
      },
      {
        title: "Confidence to scale.",
        text: "New suppliers, new categories and larger orders are far less risky when a verification step is already built into your process.",
      },
    ],
  },
];

export const FUTURE_HEADING = "Future benefits";

export const FUTURE_TEXT =
  "Regulatory expectations on consumer goods in India continue to tighten, marketplace quality enforcement continues to sharpen, and buyer audit requirements continue to grow. A supplier quality monitoring program built now is infrastructure you will not have to build under pressure later.";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Manufacturers",
    text: "If you produce under a brand's name or for an overseas buyer, an independent check protects you as much as it protects them. Supplier quality inspection services and vendor inspection services India work equally well in reverse — verifying your own incoming components before they become your defect. Quality monitoring for manufacturers catches process drift before it becomes a rejected lot, and an inspection report from an independent agency answers a buyer's questions without a factory visit.",
  },
  {
    title: "Importers",
    text: "Quality inspection services for importers and quality control services for importers exist for one reason: you are buying goods you cannot see, from a supplier you cannot supervise, with money you send in advance. Inspection converts that into a verified transaction, and an inspection service to verify supplier claims India removes the guesswork from a relationship built entirely on email. For a first order from a new supplier, it is the single highest-value spend in the whole purchase.",
  },
  {
    title: "Exporters",
    text: "Product inspection services for exporters protect the relationship that took you years to build. Export quality inspection services turn a promise into evidence your customer can see. A rejected consignment at a foreign port costs freight, duty, storage and, usually, the customer.",
  },
  {
    title: "MSMEs and small importers",
    text: "Third party product inspection services for small importers in India are often assumed to be unaffordable. They are not — and knowing how to inspect small batch orders cost effectively is most of the answer. A single man day inspection on a small consignment costs far less than one rejected shipment, and we do not impose a minimum order quantity to qualify.",
  },
  {
    title: "Large businesses and retail chains",
    text: "Inspection services for retail sourcing teams must deliver consistency across dozens of vendors and multiple cities, which is why an inspection partner for sourcing companies India is usually engaged centrally rather than plant by plant. That means a standard checklist, a standard AQL, a standard report format, and defect data that can be compared vendor to vendor. Annual inspection contracts exist for exactly this.",
  },
  {
    title: "Startups and D2C brands",
    text: "Your first production run defines your reviews, and your reviews define your first year. Inspect it.",
  },
  {
    title: "Online and marketplace sellers",
    text: "E-commerce product quality check services address the specific way marketplaces punish defects: returns, negative reviews, and account health metrics. An AQL based product inspection service for ecommerce sellers, run before goods enter fulfilment — including before Amazon FBA dispatch — is far cheaper than a removal order later. If your reviews are telling you what your supplier will not, this is how you stop receiving defective goods from India.",
  },
  {
    title: "Government suppliers",
    text: "Supplying against a GeM order or a government tender means supplying exactly what the specification says. An independent verification before dispatch protects against penalties and rejection at the consignee end.",
  },
  {
    title: "OEMs and contract manufacturing buyers",
    text: "When another factory builds your product, a quality monitoring service for contract manufacturers India is the only continuous visibility you have. Where volumes justify it, a dedicated QC inspector for supplier India can be stationed at the unit. Inspection service for OEM suppliers in India typically combines a first article check with in-process verification.",
  },
  {
    title: "Private label brands",
    text: "Your name is on the box; the factory's is not. Inspection services for private label brands protect the only asset you actually own — the brand.",
  },
];

export const WHO_NEEDS_NOTE =
  "Important Note: If you are placing a first order with a new supplier, do not start with a final inspection. Start earlier. A pre shipment inspection service for first time importers works best when it is paired with an earlier check: a pre-production visit and a first article approval cost less and prevent the failure, rather than documenting it after the goods are made.";

export const FEATURES_INTRO =
  "One partner, every stage of the order cycle. Each type answers a different question, and most importers eventually use more than one.";

export const INSPECTION_TYPE_HEADING = "Inspection types we cover";

export const INSPECTION_TYPE_ROWS: TableRow[] = [
  {
    type: "Pre production inspection services India",
    when: "Before mass production starts",
    answers: "Are the materials, components and first samples correct?",
  },
  {
    type: "First article inspection services India",
    when: "At the start of the run",
    answers: "Does the first finished piece match the approved specification?",
  },
  {
    type: "During production inspection services",
    when: "Typically 20-60% completion",
    answers: "Is the process on track, and is the delivery date real?",
  },
  {
    type: "In line inspection services manufacturing",
    when: "Continuously on the line",
    answers: "Are defects caught at source rather than at the end?",
  },
  {
    type: "Incoming quality control services",
    when: "On raw material or component receipt",
    answers: "Is the input material acceptable before it becomes finished stock?",
  },
  {
    type: "Outgoing quality control inspection services",
    when: "Before dispatch from the factory",
    answers: "Is the packed lot ready to leave?",
  },
  {
    type: "Pre shipment product inspection services",
    when: "At substantially finished goods stage",
    answers: "Should this lot be released for shipment?",
  },
  {
    type: "Final random inspection services India",
    when: "On the completed, packed lot",
    answers: "Does the lot pass against the agreed AQL?",
  },
  {
    type: "Container loading inspection services",
    when: "At stuffing",
    answers: "Is the right quantity, in the right condition, actually going into the container?",
  },
  {
    type: "Unannounced factory inspection India",
    when: "Without notice",
    answers: "What do normal operating conditions actually look like?",
  },
  {
    type: "Defect inspection services India",
    when: "On a suspect or returned lot",
    answers: "What went wrong, how widely, and why?",
  },
  {
    type: "Non conformance reporting service India",
    when: "After a failed lot",
    answers: "What is the documented finding and corrective action?",
  },
];

export const FEATURES_STANDALONE =
  "We also provide standalone AQL inspection services India, random sampling inspection services and statistical sampling inspection service India where you need sampling expertise applied to an existing quality process rather than a full inspection programme. Inspection service for stock lot verification India is available where you are buying existing inventory rather than commissioning production.";

export const FEATURE_PARTS: { title: string; text: string }[] = [
  {
    title: "AQL-based statistical sampling",
    text: "Every inspection uses a defined sampling plan, not a random handful of cartons. Lot size, inspection level and AQL are agreed with you in writing before the inspector travels. Single sampling plans are standard; tightened inspection is applied where a supplier's history justifies it. Our ISO 2859-1 sampling inspection service and ANSI ASQ Z1.4 inspection service India follow the published sampling tables rather than an in-house shortcut, and our defect classification service for consumer products is settled as part of that same written agreement.",
  },
  {
    title: "On-site inspection at the factory",
    text: "On site product inspection India means the check happens where the goods are — the production floor, the finishing area, the packing hall or the warehouse. Inspectors see the process, not just the output, and that context is often more valuable than the defect count.",
  },
  {
    title: "Full-stage coverage",
    text: "Pre-production, during production, final random, container loading and factory process inspection are available individually or as a monitored programme across the order cycle.",
  },
  {
    title: "Unannounced inspection",
    text: "Schedule unannounced inspection visits where you want to see normal operating conditions rather than a prepared showcase.",
  },
  {
    title: "Product-specific checklists",
    text: "We inspect against your checklist. If you do not have one, our technical team builds one from your specification, approved sample and category requirements — and you keep it for future orders.",
  },
  {
    title: "Function, safety and dimensional checks",
    text: "Depending on category: function testing, dimensional check against tolerance, material verification, surface finish, hardware and fittings, electrical safety checks, colour and shade matching, and workmanship assessment against the approved sample.",
  },
  {
    title: "Packaging, labelling and marking verification",
    text: "Inner and master carton condition, barcode verification, shipping marks, artwork and label accuracy, carton drop test and weight and quantity verification against the packing list.",
  },
  {
    title: "Container loading supervision",
    text: "Container condition check, stuffing supervision, quantity verification during loading and seal number verification — with photographs at each stage.",
  },
  {
    title: "Laboratory testing coordination",
    text: "Where a parameter cannot be judged on-site, we arrange sample collection and NABL lab testing and product inspection together, and we review supplier-submitted test reports for validity rather than accepting them at face value.",
  },
  {
    title: "Regulatory marking verification",
    text: "Inspectors can verify the presence and correctness of applicable markings — BIS standard mark, packaged-commodity declarations, energy labelling and similar — as part of the physical check. Note: verification of a marking is not the same as certifying the product. Where a statutory approval is required, that is a separate process, and our compliance team handles it as a distinct service.",
  },
  {
    title: "Photo-backed digital reporting",
    text: "Every finding is photographed. Reports are digital, structured, and shared with you directly — not filtered through your supplier.",
  },
  {
    title: "Non-conformance reporting and CAPA support",
    text: "Where a lot fails, we issue a non conformance report, support root cause analysis, and follow the corrective and preventive action through to closure. Re-inspection after rework is available.",
  },
  {
    title: "Supplier performance tracking",
    text: "Across repeat orders we maintain defect trend analysis and supplier scorecards, so quality becomes a measurable vendor KPI rather than an anecdote.",
  },
  {
    title: "Pan-India inspector network",
    text: "Coverage across major manufacturing clusters, including Delhi NCR, Noida, Gurgaon, Faridabad, Ludhiana, Jalandhar, Panipat, Moradabad, Jaipur, Agra, Mumbai, Pune, Surat, Rajkot, Ahmedabad, Chennai, Coimbatore, Tirupur, Bangalore, Hyderabad and Kolkata.",
  },
  {
    title: "Confidentiality",
    text: "All inspections are conducted under confidentiality. Your specifications, samples, pricing and supplier relationships are not disclosed, and our inspectors have no commercial interest in your supplier.",
  },
];

export const BENEFITS_EXPLAINED: { title: string; text: string }[] = [
  {
    title: "1. You see the goods before you own them.",
    text: "The single most important shift inspection creates.",
  },
  {
    title: "2. You pay against evidence.",
    text: "Payment milestones tied to an inspection verdict change supplier behaviour permanently.",
  },
  {
    title: "3. Defects are caught while rework is still possible.",
    text: "A defect found at 40% production can be fixed. The same defect found at the port cannot.",
  },
  {
    title: "4. Your specification becomes enforceable.",
    text: "Written criteria plus an independent check equals a standard, not a hope.",
  },
  {
    title: "5. Disputes get shorter.",
    text: "Photographs and a defect count end arguments that would otherwise run for weeks.",
  },
  {
    title: "6. Returns fall.",
    text: "Especially for online sellers, where a defect rate of a few percent quietly destroys margin.",
  },
  {
    title: "7. Your supplier improves.",
    text: "Consistent inspection plus CAPA follow-up produces measurably better output over time. This is the benefit clients underestimate most.",
  },
  {
    title: "8. Sourcing decisions get objective.",
    text: "Defect data across vendors replaces relationship-based vendor selection.",
  },
  {
    title: "9. You gain capacity without headcount.",
    text: "Inspectors across multiple manufacturing clusters, without hiring a quality team in each one.",
  },
  {
    title: "10. Compliance risk drops.",
    text: "Marking, labelling and documentation errors are caught before they become a regulatory or customs problem.",
  },
  {
    title: "11. Your buyers trust you more.",
    text: "Downstream customers increasingly ask how quality is controlled. You will have an answer with evidence attached.",
  },
  {
    title: "12. You can scale safely.",
    text: "New categories and larger volumes stop being a leap of faith.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Scope",
    color: "#0b57b5",
    title: "Step 1 — Requirement discussion and scope definition",
    objective: "Establish exactly what will be inspected, where, when and against what standard.",
    activities:
      "Share your product details, quantity, factory location, target inspection date, purchase order specification and approved sample. We agree the inspection type, AQL, inspection level and defect classification.",
    timeline: "Usually same day once details are shared.",
    deliverables: "Confirmed scope of work and inspection quotation.",
    tip: "Send the approved sample photographs at this stage, not later. Most scope disputes trace back to a reference that was never properly defined.",
  },
  {
    step: "02",
    label: "Booking",
    color: "#2563eb",
    title: "Step 2 — Booking and inspector allocation",
    objective: "Assign a qualified inspector for your product category and location.",
    activities:
      "Confirm the booking, allocate an inspector with relevant category experience, and coordinate factory access with your supplier — or arrange an unannounced visit if that is what you want.",
    timeline:
      "Standard bookings need advance notice; urgent and same-week scheduling is possible subject to inspector availability in that cluster. Confirm the exact lead time with our team when you book — we will tell you what is realistically possible rather than promise a date we cannot hold.",
    deliverables: "Confirmed inspection date and inspector allocation.",
    tip: "Book the inspection date around your production percentage, not your calendar. A final inspection is meaningful only when goods are substantially finished and packed.",
  },
  {
    step: "03",
    label: "Checklist",
    color: "#0891b2",
    title: "Step 3 — Checklist preparation",
    objective: "Convert your specification into a usable field checklist.",
    activities:
      "Build or review the quality inspection checklist for products, define the pass/fail criteria, list the on-site tests to be performed, and confirm the sampling plan.",
    timeline: "Before the inspection date.",
    deliverables: "Approved inspection checklist.",
    tip: "Keep the checklist. It becomes your quality standard for every future order and every future supplier in that category.",
  },
  {
    step: "04",
    label: "On-site",
    color: "#059669",
    title: "Step 4 — On-site inspection",
    objective: "Physically verify the lot.",
    activities:
      "Verify lot size and production status; draw the sample as per the sampling plan; check workmanship against the approved sample; perform dimensional, function and safety checks as applicable; verify packaging, labelling, barcodes and shipping marks; conduct carton drop test where relevant; count quantity against the packing list; photograph everything.",
    timeline:
      "Typically completed within the inspection man day; larger or mixed-SKU lots may need additional man days.",
    deliverables: "Complete field data and photographic evidence.",
    tip: "If you can, join the last thirty minutes by video call. Seeing the goods live while the inspector is still on-site resolves borderline judgement calls immediately.",
  },
  {
    step: "05",
    label: "Verdict",
    color: "#d97706",
    title: "Step 5 — Defect classification and verdict",
    objective: "Convert findings into a decision.",
    activities:
      "Classify each defect as critical, major or minor; apply the acceptance and rejection numbers; determine the verdict — pass, fail, or pass with conditions.",
    timeline: "Same day as the inspection.",
    deliverables: "Inspection verdict.",
    tip: 'Agree in advance who has authority to accept a "pass with conditions" lot. Deciding that during a shipping deadline never goes well.',
  },
  {
    step: "06",
    label: "Reporting",
    color: "#dc2626",
    title: "Step 6 — Reporting",
    objective: "Give you everything needed to act.",
    activities:
      "Issue the structured product inspection report with photographs, defect counts by classification, measurement records, packaging findings and the verdict.",
    timeline: "Fast report turnaround — confirm the committed timeline with our team at booking.",
    deliverables: "Digital inspection report; certificate of conformity where applicable to your scope.",
    tip: "Read the defect photographs before the summary. The summary tells you the verdict; the photographs tell you the cause.",
  },
  {
    step: "07",
    label: "CAPA",
    color: "#7c3aed",
    title: "Step 7 — Corrective action and re-inspection",
    objective: "Fix the problem, not just record it.",
    activities:
      "Raise the non conformance report, request corrective action from the supplier, support root cause analysis, verify the rework, and re-inspect.",
    timeline: "Depends on the rework scope.",
    deliverables: "Closed NCR and re-inspection report.",
    tip: "Insist that the corrective action addresses the process, not just the affected units. Sorting fixes this lot; process change fixes the next ten.",
  },
  {
    step: "08",
    label: "Monitoring",
    color: "#0f766e",
    title: "Step 8 — Ongoing quality monitoring",
    objective: "Stop repeating the same lesson.",
    activities:
      "Track defect trends across orders, maintain supplier scorecards, adjust inspection frequency and tightness based on performance, and review quality KPIs with you periodically.",
    timeline: "Continuous, under a monthly or annual monitoring arrangement.",
    deliverables: "Trend analysis and supplier performance review.",
    tip: "Reward good suppliers with reduced inspection frequency. It costs you less and gives the supplier a genuine incentive.",
  },
];

export const DOCUMENTS_NOTE =
  "Important: This is a client-input checklist, not a statutory document list. Product inspection is a contractual service — there is no government application involved, and no statutory filing.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Purchase order or order specification",
    purpose: "Defines quantity, variants and agreed terms",
    mandatory: "Mandatory",
  },
  {
    document: "Product technical specification sheet",
    purpose: "The measurable standard the goods are checked against",
    mandatory: "Mandatory",
  },
  {
    document: "Approved sample or golden sample details",
    purpose: "The physical reference for workmanship and appearance",
    mandatory: "Mandatory (photographs acceptable if the sample cannot be shipped)",
  },
  {
    document: "Factory name, address and contact person",
    purpose: "Enables inspector deployment and access",
    mandatory: "Mandatory",
  },
  {
    document: "Production status and readiness date",
    purpose: "Determines the correct inspection date",
    mandatory: "Mandatory",
  },
  {
    document: "Quantity offered for inspection (lot size)",
    purpose: "Determines sample size under the sampling plan",
    mandatory: "Mandatory",
  },
  {
    document: "Your inspection checklist, if you have one",
    purpose: "Ensures we inspect to your existing standard",
    mandatory: "Optional",
  },
  {
    document: "AQL level and inspection level preference",
    purpose: "Sets acceptance criteria; defaults applied if not specified",
    mandatory: "Optional",
  },
  {
    document: "Artwork, label and packaging files",
    purpose: "Enables label, barcode and marking verification",
    mandatory: "Optional but strongly recommended",
  },
  {
    document: "Packing list and carton marking details",
    purpose: "Enables quantity and shipping mark verification",
    mandatory: "Optional",
  },
  {
    document: "Existing lab test reports",
    purpose: "Allows validation rather than duplicate testing",
    mandatory: "Optional",
  },
  {
    document: "Previous inspection or defect history",
    purpose: "Informs risk-based inspection planning",
    mandatory: "Optional",
  },
  {
    document: "Signed NDA, if required by you",
    purpose: "Formalises confidentiality",
    mandatory: "Optional",
  },
];

export const ELIGIBILITY_INTRO =
  "Product inspection has no statutory eligibility bar. There is no registration, no licence and no minimum turnover requirement. If you own or are buying the goods, you can commission an inspection.";

export const ELIGIBILITY_HEADING = "You can engage this service if you are:";

export const ELIGIBILITY_WHO: string[] = [
  "An importer buying from an Indian supplier",
  "An exporter shipping from India",
  "A brand owner producing through a contract manufacturer",
  "An e-commerce or marketplace seller",
  "A retail chain or sourcing office",
  "A buying house or sourcing agent acting for an overseas client",
  "A manufacturer wanting independent verification before dispatch",
  "A government or institutional supplier",
  "A trader verifying a stock lot before purchase",
];

export const ELIGIBILITY_PRACTICAL_HEADING = "Practical requirements:";

export const ELIGIBILITY_PRACTICAL: string[] = [
  "The goods must be physically accessible at a factory, warehouse or port location",
  "A reference standard must exist — an approved sample, specification or both",
  "Factory access must be arranged, either by you or by your supplier",
  "Production must be at the appropriate stage for the inspection type booked",
];

export const ELIGIBILITY_CLOSING =
  "What does not disqualify you: small order value, first-time importing, a single SKU, an unfinished checklist, or a supplier who has never been inspected before. Inspection service without a minimum order quantity is available.";

export const TIMELINE_HEADING = "The realistic sequence";

export const TIMELINE_SEQUENCE: string[] = [
  "Scope and quotation",
  "Booking confirmation and inspector allocation",
  "Inspection day",
  "Verdict",
  "Report delivery",
  "Rework and re-inspection, if required",
];

export const TIMELINE_NOTE =
  "Important: Ornate does not publish fixed turnaround figures on this page. Lead times depend on inspector availability in that cluster, product category, lot size and the number of locations involved. Our team will confirm a specific, committed timeline when you book — and will tell you honestly if a date is not achievable.";

export const TIMELINE_FACTORS_HEADING = "Factors that affect the timeline";

export const TIMELINE_FACTORS: { title: string; text: string }[] = [
  {
    title: "Cluster location.",
    text: "Factories in major clusters are served faster than remote units.",
  },
  {
    title: "Lot size and SKU count.",
    text: "Mixed-SKU shipments need more sampling time.",
  },
  {
    title: "Inspection type.",
    text: "Container loading supervision runs to the loading schedule, not yours.",
  },
  {
    title: "Product complexity.",
    text: "Function-tested goods take longer than simple visual checks.",
  },
  {
    title: "Notice period.",
    text: "Urgent bookings are possible but subject to availability.",
  },
  {
    title: "Season.",
    text: "Pre-holiday export peaks compress capacity across the industry.",
  },
];

export const DELAYS_HEADING = "Common causes of delay";

export const DELAYS: { title: string; text: string }[] = [
  {
    title: "Goods not ready.",
    text: "The most common delay by far. Booking a final inspection at 60% production wastes a man day.",
  },
  {
    title: "Factory access not arranged.",
    text: "Supplier not informed, gate entry not approved, or the contact person unavailable.",
  },
  {
    title: "Missing reference sample.",
    text: "No approved sample means no defensible workmanship judgement.",
  },
  {
    title: "Late scope changes.",
    text: "Adding SKUs or tests on the inspection day extends the visit.",
  },
  {
    title: "Rework cycles.",
    text: "Each round of rework and re-inspection adds time — which is exactly why earlier-stage inspection is cheaper.",
  },
];

export const TIMELINE_TIP =
  "Pro Tip: Ask your supplier to confirm production status with photographs two days before the scheduled inspection. This one habit prevents most wasted inspection visits.";

export const COST_INTRO: string[] = [
  "We do not publish rates on this page, and we will not quote a figure without knowing your scope. Anyone quoting a price for product inspection before knowing your lot size, location and product category is guessing. Request a quotation and you will receive a specific figure against a specific scope.",
];

export const COST_QUESTIONS_HEADING = "The cost questions we answer on a quotation";

export const COST_QUESTIONS =
  "Product inspection cost per man day India, third party inspection cost in India, cost of pre shipment inspection India, AQL inspection cost India, container loading inspection cost India and factory audit cost in India are all answered the same way — against your scope, in writing. What we commit to publicly is transparent inspection pricing: the quotation states the man days, what each includes, and what is billed separately.";

export const COST_PRICED_HEADING = "How inspection is priced";

export const COST_PRICED =
  "Product inspection in India is generally priced on a man day basis — one qualified inspector, at one location, for one working day, including reporting. Your quotation states how many man days your scope requires and what is included. A single man day product inspection service India is available for smaller consignments, and product inspection packages for importers cover regular, planned programmes.";

export const COST_TABLE_HEADING = "Factors that increase or decrease your cost";

export const COST_ROWS: TableRow[] = [
  {
    factor: "Lot size",
    effect: "Larger lots increase sample size",
    why: "More units drawn and checked",
  },
  {
    factor: "Number of SKUs",
    effect: "More SKUs increase time",
    why: "Each SKU needs its own sample and checks",
  },
  {
    factor: "Number of factory locations",
    effect: "Each location is a separate deployment",
    why: "Inspectors cannot be in two places",
  },
  {
    factor: "Product complexity",
    effect: "Function and safety testing adds time",
    why: "More checks per unit",
  },
  {
    factor: "Inspection type",
    effect: "Loading supervision follows the loading schedule",
    why: "Duration is dictated by the operation",
  },
  {
    factor: "AQL tightness",
    effect: "Tighter AQL increases sample size",
    why: "More units inspected",
  },
  {
    factor: "Location accessibility",
    effect: "Remote factories add travel",
    why: "Travel time and cost",
  },
  {
    factor: "Urgency",
    effect: "Short-notice bookings may cost more",
    why: "Schedule disruption",
  },
  {
    factor: "Volume of work",
    effect: "Regular programmes cost less per inspection",
    why: "Planned deployment is more efficient",
  },
  {
    factor: "Re-inspection",
    effect: "Charged separately",
    why: "It is a second deployment",
  },
];

export const COST_INCLUDED_HEADING = "What is included in a standard man day";

export const COST_INCLUDED =
  "The inspector's time at site, sampling and checking as per the agreed checklist, photographic documentation, the defect classification and verdict, and the digital inspection report. Laboratory testing, if required, is quoted separately because it is a separate service with its own laboratory charges.";

export const COST_CONTROL_HEADING = "How to control inspection cost sensibly";

export const COST_CONTROL: string[] = [
  "Inspect earlier, not more. A pre-production check costs one man day and can prevent several later ones.",
  "Consolidate. Where several SKUs are ready at one factory, inspect them in one visit.",
  "Use risk-based frequency. Inspect a proven supplier less often than a new one.",
  "Fix the specification. Most repeat inspections are caused by unclear criteria, not by bad factories.",
  "Ask about programme pricing. Product inspection service plans and pricing for scheduled work are more efficient than booking each visit cold.",
  "Do not over-tighten the AQL. An unnecessarily strict AQL increases sample size, cost and false rejections.",
];

export const COST_WARNING =
  "Warning: Choosing an inspection provider purely on price is the most expensive decision in this category. An inspector who signs off a lot without properly sampling it costs you nothing on the invoice and everything on the shipment.";

export const CHALLENGES: { title: string; why: string; solution: string; best: string }[] = [
  {
    title: "Challenge 1: The supplier resists third-party inspection",
    why: "Concern about delays, about findings reaching the buyer unfiltered, or simply unfamiliarity.",
    solution:
      "Put the inspection clause in the purchase order from the start, so it is a condition of the order rather than a mid-order imposition. Frame it as a payment-release mechanism — most suppliers accept it readily once they understand it accelerates their payment.",
    best: "Share the checklist with the supplier in advance. A supplier who knows the standard usually meets it.",
  },
  {
    title: "Challenge 2: Goods are not ready on the inspection date",
    why: "Optimistic production reporting.",
    solution:
      "Require photographic proof of production status before confirming the date, and set a minimum readiness threshold for final inspection.",
    best: "Add a during production inspection at mid-production. It gives you a genuine progress picture instead of a claimed one.",
  },
  {
    title: "Challenge 3: Defects appear only after the goods arrive",
    why: "Inspection scope did not cover the failure mode — usually transit damage, packaging weakness or a test that was never performed.",
    solution:
      "Extend the checklist to include packaging integrity, carton drop testing and any relevant on-site functional checks.",
    best: "Feed every post-arrival complaint back into the checklist. Your checklist should get smarter with every order.",
  },
  {
    title: "Challenge 4: Disputes over what counts as a defect",
    why: 'Subjective criteria — "poor finish", "colour not matching" — with no measurable reference.',
    solution: "Agree the defect classification matrix and the approved sample before production, not after inspection.",
    best: "Maintain a physical golden sample at the factory, sealed and dated.",
  },
  {
    title: "Challenge 5: The same defect keeps recurring",
    why: "The supplier sorted the affected units but never changed the process.",
    solution:
      "Insist on corrective and preventive action with a documented root cause, and verify the fix at the next inspection.",
    best: "Track defect trends by supplier. A recurring defect is a management problem, not a production accident.",
  },
  {
    title: "Challenge 6: No visibility across multiple suppliers",
    why: "Each factory reports differently and nothing is comparable.",
    solution: "One inspection partner, one checklist standard, one report format, one scorecard.",
    best: "Review supplier scorecards quarterly and let the data drive order allocation.",
  },
  {
    title: "Challenge 7: Urgent shipments leave no time to inspect",
    why: "Inspection is treated as an afterthought in the shipping plan.",
    solution: "Build the inspection date into the production schedule at order placement.",
    best: "Maintain a standing arrangement with your inspection partner so capacity is planned, not begged for.",
  },
];

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Trained and certified quality inspectors, deployed by category.",
    text: "An experienced product inspection consultant India brings category judgement a generalist does not have — a person who has inspected garments for years sees things in a garment factory that nobody else will.",
  },
  {
    title: "Technical and regulatory expertise under one roof.",
    text: "We are a certification and compliance consultancy as well as an inspection provider. When an inspection raises a marking, labelling or approval question, the answer comes from our in-house technical and certification team — not a referral to someone else. That means end to end inspection and certification support, plus technical guidance for quality improvement and legal compliance verification support where your product is regulated.",
  },
  {
    title: "Standards-based methodology.",
    text: "Sampling follows recognised statistical standards. We follow ISO aligned inspection procedures, and our verdicts follow the agreed acceptance criteria rather than an inspector's mood.",
  },
  {
    title: "Independent and conflict-free.",
    text: "We do not manufacture, trade or take commission from suppliers. Our only interest is an accurate verdict.",
  },
  {
    title: "Pan-India inspector network.",
    text: "Coverage across the manufacturing clusters that matter — from the Tirupur knitwear cluster to Moradabad's brassware units, Ludhiana's hosiery lines, Agra's footwear factories and the electronics units around Noida.",
  },
  {
    title: "Fast, responsive coordination.",
    text: "Urgent inspections are handled where capacity allows, and you are told honestly when a date is not achievable.",
  },
  {
    title: "Transparent, scope-based pricing.",
    text: "Your quotation states what is included and what is charged separately. No surprise line items after the visit.",
  },
  {
    title: "Photo-backed, audit ready inspection documentation.",
    text: "Every report is evidence you can forward to your buyer, your insurer or your legal counsel without editing it first. Documentation and coordination support extends to the paperwork around release and dispatch.",
  },
  {
    title: "Dedicated account and coordination support.",
    text: "One point of contact who knows your products, your suppliers and your standards — not a new person on every booking, and documentation assistance for inspection records as your file grows.",
  },
  {
    title: "End-to-end service.",
    text: "Inspection, laboratory testing coordination, technical documentation and certification support, delivered as a single programme.",
  },
];

export const WHY_CHOOSE_CLOSING =
  "A clear escalation and query resolution process, so a disputed finding gets a decision instead of a silence. For clients running continuous programmes this becomes a long term quality monitoring partnership rather than a series of bookings.";

export const INDUSTRIES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Textiles & Apparel",
    text: "Knitted and woven garments, home textiles, bed linen, terry towels and made-ups. Inspection focuses on measurement specification adherence, shade continuity across the lot, GSM verification, seam and stitching quality, labelling and care-label accuracy, and packing ratio and assortment verification. Major clusters: Tirupur, Ludhiana, Panipat, Noida and Karur.",
  },
  {
    title: "Electronics & Electricals",
    text: "LED lighting, small appliances, chargers and adaptors, wiring accessories and electrical fittings. Inspection focuses on function and safety checks, rating-plate and marking verification, insulation and wiring checks, packaging drop resistance and accessory completeness. Where products fall under mandatory registration schemes, marking presence can be verified during inspection — with the certification itself handled separately by our compliance team. Major clusters: Noida, Greater Noida, Bhiwadi, Pune and Chennai.",
  },
  {
    title: "Toys",
    text: "Plastic toys, soft toys, ride-ons, educational and wooden toys. Inspection focuses on small-parts and sharp-edge checks, age grading and warning label verification, mechanical safety, drop testing, and review of restricted-substance test reports. Major clusters: Delhi NCR, Ahmedabad and Rajkot.",
  },
  {
    title: "Furniture",
    text: "Wooden, metal, modular and knock-down furniture, including school and office furniture supply orders. Inspection focuses on moisture content, joinery and hardware quality, surface finish, stability and load checks, knock-down fitment verification and carton drop testing. Major clusters: Jodhpur, Saharanpur, Noida and Bengaluru.",
  },
  {
    title: "Footwear",
    text: "Leather footwear, sports shoes, sandals, slippers and safety footwear. Inspection focuses on sizing and last conformity, sole bonding and flex, material verification, pairing and assortment accuracy and finishing defects. Major clusters: Agra, Kanpur, Chennai and Ambur.",
  },
  {
    title: "Home Goods & Housewares",
    text: "Stainless steel utensils, kitchenware, plastic household items, brassware, decoratives and glassware. Inspection focuses on material grade and thickness, finish and polish, weight and capacity verification, food-contact test report review and packaging integrity. Major clusters: Moradabad, Jagadhri, Rajkot and Firozabad.",
  },
];

export const VERTICALS_HEADING = "Industry Verticals Covered";

export const VERTICAL_ROWS: TableRow[] = [
  {
    vertical: "Textiles & Apparel",
    keyword: "garment inspection services India",
  },
  {
    vertical: "Electronics & Electricals",
    keyword: "electronics product inspection services",
  },
  {
    vertical: "Toys",
    keyword: "toy inspection services India",
  },
  {
    vertical: "Furniture",
    keyword: "furniture inspection services India",
  },
  {
    vertical: "Footwear",
    keyword: "footwear inspection services India",
  },
  {
    vertical: "Home Goods & Housewares",
    keyword: "home goods inspection services India",
  },
];

export const REGULATORY_INTRO: string[] = [
  "Product inspection itself is a contractual service and is not governed by a registration or licensing regime. However, the products you inspect frequently are regulated — and those requirements change.",
  "Where your goods fall under a Quality Control Order, a mandatory certification scheme, packaged-commodity labelling rules, energy labelling, extended producer responsibility or a substance restriction, you should verify the current requirement directly with the issuing authority before relying on any summary, including this one.",
];

export const REGULATORY_HEADING = "Verify current requirements at source:";

export const REGULATORY_LINKS: { label: string; href: string; note: string }[] = [
  {
    label: "bis.gov.in",
    href: "https://www.bis.gov.in/",
    note: "Bureau of Indian Standards, for standards, certification schemes and Quality Control Orders",
  },
  {
    label: "Legal Metrology department portal",
    href: "https://consumeraffairs.nic.in/organisation-and-units/division/legal-metrology",
    note: "for packaged commodity declaration requirements",
  },
  {
    label: "NABL official website",
    href: "https://nabl-india.org/",
    note: "for accredited laboratory scopes",
  },
];

export const REGULATORY_SECTOR =
  "relevant sector regulator portal — for sector-specific approvals";

export const REGULATORY_WARNING =
  "Warning: We do not reproduce notification numbers, standard numbers, fee schedules or statutory timelines on this page. Those change, and an outdated figure on a website is worse than no figure at all. Ask our compliance team for the current position on your specific product, and we will verify it against the authority's own published position.";

export const MISTAKES_ROWS: TableRow[] = [
  {
    mistake: "Mistake 1 — Booking inspection only at the final stage",
    impact:
      "Defects are discovered when the only options are rework under deadline pressure, a discount, or rejection.",
    avoid: "Add at least one during-production check on any order you cannot afford to have fail.",
  },
  {
    mistake: "Mistake 2 — Inspecting without an approved sample",
    impact: "Workmanship findings become opinions, and the supplier disputes them successfully.",
    avoid: "Approve and seal a golden sample before production starts. Keep one, leave one at the factory.",
  },
  {
    mistake: "Mistake 3 — Assuming a certificate means the goods are fine",
    impact:
      "A valid certification on the product type says nothing about the lot in the carton. Certified products still ship with wrong quantities, wrong colours and damaged packaging.",
    avoid: "Treat certification and inspection as two different controls, because they are.",
  },
  {
    mistake: "Mistake 4 — Setting an unrealistically tight AQL",
    impact: "Larger samples, higher cost, and lots rejected for defects your customers would never notice.",
    avoid: "Set the AQL against real commercial consequence, category by category.",
  },
  {
    mistake: "Mistake 5 — Letting the supplier arrange the inspection",
    impact: "An inspector paid by, chosen by, or dependent on your supplier is not independent.",
    avoid: "Engage the inspection agency directly. This is the entire point of third-party inspection.",
  },
  {
    mistake: "Mistake 6 — Not defining defect classification in advance",
    impact: "Every borderline finding becomes a negotiation during a shipping deadline.",
    avoid: "Agree the critical/major/minor matrix in writing before the first order.",
  },
  {
    mistake: "Mistake 7 — Treating the report as paperwork",
    impact: "The same defects recur order after order because nobody acted on the findings.",
    avoid: "Close every non-conformance with documented corrective action and verify it at the next inspection.",
  },
  {
    mistake: "Mistake 8 — No inspection clause in the purchase order",
    impact: "Factory access can be refused, and there is no contractual link between the verdict and payment.",
    avoid: "Include inspection rights and a payment-release condition in the PO terms.",
  },
  {
    mistake: "Mistake 9 — Skipping inspection on repeat orders",
    impact: "Quality drifts quietly. The tenth order rarely matches the first sample.",
    avoid: "Reduce frequency for proven suppliers rather than stopping altogether.",
  },
  {
    mistake: "Mistake 10 — Inspecting at the wrong location",
    impact:
      "Goods checked at a consolidation warehouse have already left the factory, so rework is no longer practical.",
    avoid: "Inspect at the production site wherever possible, and add loading supervision separately if needed.",
  },
];

export const EXPERT_TIPS: string[] = [
  "1. Write the checklist once, use it forever. It is the most valuable asset your quality process will produce.",
  "2. Photograph the golden sample from six angles and attach it to every inspection booking.",
  "3. Inspect at 80% production for final checks — enough finished goods to sample properly, enough time to fix problems.",
  "4. Ask for the defect photographs first. The verdict tells you what happened; the photographs tell you why.",
  "5. Tighten inspection after a failure, and say so. Suppliers respond to consequence.",
  "6. Do not accept \"we will sort it before shipping\" without a re-inspection. Sorting is unverifiable unless it is verified.",
  "7. Track defect rate as a supplier KPI, alongside price and delivery. It belongs in the same conversation.",
  "8. Book loading supervision for high-value containers. Quantity shortfalls and loading damage are more common than most importers realise.",
  "9. Include packaging in the inspection scope. A significant share of arrival damage is packaging failure, not product failure.",
  "10. Use unannounced inspections selectively — enough to keep standards honest, not so often that the relationship becomes adversarial.",
  "11. Review test reports for scope, not just for a pass stamp. A valid report on the wrong parameter proves nothing.",
  "12. Plan peak-season inspections early. Capacity across the entire industry tightens before the year-end export cycle.",
];

export const COMPARISON_ROWS: TableRow[] = [
  {
    factor: "Independence",
    diy: "You are the buyer — but you rely on the supplier's cooperation",
    consultant: "Depends entirely on the individual",
    agency: "Structurally independent, with documented impartiality",
  },
  {
    factor: "Geographic coverage",
    diy: "Limited to where you or your staff can travel",
    consultant: "Usually one region",
    agency: "Pan-India inspector network",
  },
  {
    factor: "Sampling rigour",
    diy: "Often informal; rarely statistically valid",
    consultant: "Varies by individual",
    agency: "Standards-based sampling every time",
  },
  {
    factor: "Category expertise",
    diy: "Strong on your own product only",
    consultant: "Strong in their specialisation",
    agency: "Inspectors allocated by category",
  },
  {
    factor: "Cost per inspection",
    diy: "Travel and staff time, often underestimated",
    consultant: "Lower headline rate",
    agency: "Scope-based; efficient at volume",
  },
  {
    factor: "Reporting",
    diy: "Informal notes and phone calls",
    consultant: "Format varies",
    agency: "Standardised, photo-backed, audit-ready",
  },
  {
    factor: "Availability at short notice",
    diy: "Depends on your own schedule",
    consultant: "Single person, single calendar",
    agency: "Network capacity across clusters",
  },
  {
    factor: "Continuity across orders",
    diy: "Inconsistent",
    consultant: "Ends if the individual is unavailable",
    agency: "Scorecards and trend data maintained",
  },
  {
    factor: "Escalation and accountability",
    diy: "Internal only",
    consultant: "Personal",
    agency: "Defined escalation path and company accountability",
  },
  {
    factor: "Testing and certification support",
    diy: "Separate vendors to manage",
    consultant: "Usually not offered",
    agency: "Integrated",
  },
  {
    factor: "Best suited to",
    diy: "Occasional local orders you can visit personally",
    consultant: "A single trusted category in one cluster",
    agency: "Regular sourcing across multiple suppliers, categories or cities",
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is product inspection?",
    a: "Product inspection is a physical check of a production lot against an agreed specification, carried out by an independent inspector using a defined sampling plan. It confirms whether the goods match what was approved before they are shipped.",
  },
  {
    q: "What is quality monitoring, and how is it different from inspection?",
    a: "Inspection checks one lot at one point in time. Quality monitoring applies that check continuously — across production stages and repeat orders — so defect patterns and supplier performance become visible over time.",
  },
  {
    q: "What is AQL in product inspection?",
    a: "Acceptable Quality Level is the maximum number of defects tolerable in a sample before the lot is rejected. It converts a sample result into a pass or fail decision for the whole lot, using recognised statistical sampling tables.",
  },
  {
    q: "How many samples are checked during an inspection?",
    a: "The sample size is determined by lot size, inspection level and AQL under the sampling plan — not by a fixed percentage. General Inspection Level II is the common default for consumer goods.",
  },
  {
    q: "How much does third-party product inspection cost in India?",
    a: "Inspection is priced per man day, and the total depends on lot size, SKU count, product complexity, factory location and the number of locations involved. We do not publish rates because a rate quoted without scope is meaningless. Request a quotation with your details and you will receive a specific figure.",
  },
  {
    q: "How long does a product inspection take?",
    a: "Most single-location inspections are completed within the booked man day, with the verdict the same day. Larger lots, mixed-SKU shipments and multiple locations need additional man days. Our team confirms a specific timeline at booking.",
  },
  {
    q: "Who pays for third-party inspection — buyer or supplier?",
    a: "Commercially, either arrangement exists. Structurally, the buyer should engage and pay the inspection agency directly, because independence is the entire value of the service.",
  },
  {
    q: "When should I book a pre-shipment inspection?",
    a: "When production is substantially complete and packed — commonly around 80% finished goods — leaving enough time before the shipping date for rework if the lot fails.",
  },
  {
    q: "What happens if the inspection fails?",
    a: "You receive a documented verdict with defect counts and photographs. From there you can require rework and re-inspection, accept the lot with conditions, renegotiate, or reject it. The decision stays with you; we provide the evidence.",
  },
  {
    q: "Is third-party inspection mandatory in India?",
    a: "Inspection itself is a commercial service, not a statutory requirement. Separately, certain products carry mandatory certification or registration obligations under Indian regulations — those are distinct requirements, and you should verify the current position for your specific product with the relevant authority.",
  },
  {
    q: "Do I still need inspection if my supplier holds ISO 9001 certification?",
    a: "Yes. A management system certification confirms the supplier has documented processes. It does not verify the specific lot you are about to pay for.",
  },
  {
    q: "Does BIS certification cover product quality inspection?",
    a: "No. Certification addresses whether a product type meets a scheme's requirements. Inspection addresses whether the specific consignment matches your specification, quantity, packaging and labelling.",
  },
  {
    q: "Can inspection be done at short notice?",
    a: "Often, yes — subject to inspector availability in that cluster. Urgent and same-week scheduling is possible, and we will tell you honestly if a requested date cannot be met.",
  },
  {
    q: "Can I get an inspection for a small order?",
    a: "Yes. There is no minimum order quantity. A single man day inspection is available for small consignments.",
  },
  {
    q: "What documents do I need to provide?",
    a: "At minimum: your purchase order or specification, product technical details, approved sample details, factory address and contact, production status and lot size. Artwork, packing details and prior test reports help but are optional.",
  },
  {
    q: "What is included in the inspection report?",
    a: "Lot and production details, sampling plan applied, defect findings classified as critical, major and minor, measurement and function check results, packaging and labelling findings, photographs, and the verdict.",
  },
  {
    q: "How quickly will I receive the report?",
    a: "Reports are issued on a fast turnaround after the inspection. The committed timeline is confirmed at booking rather than promised generically here.",
  },
  {
    q: "Can I join the inspection remotely?",
    a: "Yes. Live video participation during the inspection is possible, and it is the fastest way to resolve borderline judgement calls.",
  },
  {
    q: "Do you conduct unannounced inspections?",
    a: "Yes. Unannounced visits show normal operating conditions rather than a prepared showcase, and are particularly useful for repeat suppliers.",
  },
  {
    q: "Do you supervise container loading?",
    a: "Yes. Container loading supervision covers container condition, stuffing, quantity verification during loading and seal number verification, with photographic records.",
  },
  {
    q: "Can you arrange laboratory testing as well?",
    a: "Yes. We coordinate NABL laboratory testing alongside inspection, arrange sample collection, and review supplier-submitted test reports for validity and scope.",
  },
  {
    q: "Can you verify BIS, labelling or energy markings on the product?",
    a: "Our inspectors can verify the presence and correctness of applicable markings as part of the physical check. Obtaining the underlying certification or registration is a separate service handled by our compliance team.",
  },
  {
    q: "Will my product information stay confidential?",
    a: "Yes. Inspections are conducted under confidentiality, and we sign a non-disclosure agreement where you require one.",
  },
  {
    q: "Do you inspect goods before Amazon FBA dispatch?",
    a: "Yes. Pre-dispatch checks for marketplace sellers focus on the defect types that drive returns, negative reviews and removal orders — packaging integrity, labelling accuracy, barcode verification and unit-level function.",
  },
  {
    q: "Can you inspect goods for GeM or government tender supplies?",
    a: "Yes. Verification against the tender specification before dispatch reduces the risk of rejection or penalty at the consignee end.",
  },
  {
    q: "Do you offer ongoing monitoring rather than one-off inspections?",
    a: "Yes. Monthly and annual quality monitoring arrangements cover scheduled inspections, defect trend analysis and supplier scorecards.",
  },
  {
    q: "Is the inspection report valid for a fixed period?",
    a: "No — and this is an important distinction. An inspection report describes one specific lot at one specific time. Unlike a certificate, it carries no validity period and no renewal. Continuity comes from ongoing monitoring, not from renewing a document.",
  },
  {
    q: "Can the inspection report be used for customs or payment documentation?",
    a: "It is commonly used as supporting evidence in the documentation chain, including for payment release against agreed terms. Whether a specific buyer, bank or authority accepts it depends on their own requirements, which should be confirmed in advance.",
  },
  {
    q: "What if the same defect keeps appearing across orders?",
    a: "That is a process problem at the supplier. We raise a non-conformance report, support root cause analysis, and verify the corrective action at the next inspection rather than accepting a one-time sorting exercise.",
  },
  {
    q: "How do I get started?",
    a: "Send us your product details, quantity, factory location and target inspection date. You will receive a scope-based quotation, and once confirmed, an allocated inspector and a scheduled date.",
  },
];

export const CTA_HEADING = "Get Your Next Shipment Verified Before It Leaves the Factory";

export const CTA_PARAGRAPHS: string[] = [
  "Every importer who has ever received a container of unsaleable goods can identify the exact moment it could have been prevented — and it was always inside the factory, before the cartons were sealed.",
  "Product inspection and quality monitoring services put a qualified, independent inspector at that moment, with your specification in one hand and a camera in the other. You get a verdict, evidence, and enough time to act on both.",
];

export const CTA_ITEMS: { title: string; text: string }[] = [
  {
    title: "Request a Quotation",
    text: "send us your product, quantity and factory location, and we will come back with a specific scope and price. Whether you need an inspection quotation for a single shipment or a full-season programme, the information we need is the same.",
  },
  {
    title: "Book an Inspection",
    text: "for shipments already scheduled.",
  },
  {
    title: "Talk to Our Inspection Team",
    text: "if you are not sure which inspection type your order needs, tell us where you are in the production cycle and we will tell you.",
  },
];
