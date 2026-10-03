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

export const FAC_TOC: TocItem[] = [
  { id: "introduction", label: "What This Page Covers" },
  { id: "what-is", label: "What Is Factory & Process Inspection?" },
  { id: "why-important", label: "Why Is Factory & Process Inspection Important?" },
  { id: "who-needs", label: "Who Needs a Factory & Process Inspection?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "features", label: "Key Features" },
  { id: "services-glance", label: "Our Factory Audit Services at a Glance" },
  { id: "audit-types", label: "Audit Types and Standards We Cover" },
  { id: "eligibility", label: "Eligibility" },
  { id: "documents", label: "Documents Required" },
  { id: "process", label: "Step-by-Step Factory Audit Process" },
  { id: "timeline", label: "Factory Audit Timeline" },
  { id: "cost", label: "Factory Audit Cost in India" },
  { id: "validity", label: "Validity of a Factory Audit" },
  { id: "renewal", label: "Re-Audits and Renewal" },
  { id: "challenges", label: "Common Challenges" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "industries", label: "Industries Served" },
  { id: "locations", label: "Where We Conduct Factory Audits" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "Factory Audit vs Other Checks" },
  { id: "terms", label: "Factory Audit Terms Explained" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "starting-point", label: "Choose Your Starting Point" },
  { id: "get-started", label: "Talk to Our Audit Team" },
];

export const BANNER_TITLE = "Factory & Process Inspection Services in India";

export const BANNER_SUBTITLE =
  "Know how your supplier really works before you commit to an order.";

export const BANNER_DESCRIPTION =
  "Ornate Quality Service Pvt Ltd provides independent factory and process inspection services for importers, brand owners, retail chains and manufacturers. Our auditors visit the factory and check the things that decide whether an order goes well: the quality system, the production process, real capacity, and working conditions. You get a clear, evidence-based report that shows what is working, what is risky and what needs to be fixed.";

export const WHAT_YOU_GET: string[] = [
  "Impartial third-party audit. Our auditors work for you, not for the factory.",
  "Quality management system review. We check whether the factory's documented system actually runs on the shop floor.",
  "Production capability assessment and production capacity verification. Can the factory make your product, and can it make enough on time?",
  "Social compliance audit. We check labour practices, health and safety, and ethics against your buyer code of conduct.",
  "Photo-documented audit report. Objective audit scoring, photographic evidence and actionable audit findings.",
  "Pan-India factory audit coverage. Audits across India's major manufacturing clusters.",
];

export const INTRO_TITLE = "Factory Audit Services in India: What This Page Covers";

export const INTRO_PARAGRAPHS: string[] = [
  'A factory audit is an on-site visit to a manufacturing unit. A trained auditor checks how the factory is set up, how it makes products and how it treats its people. Factory and process inspection goes one step further. It does not stop at "Does this factory exist?" It asks "Can this factory make my product correctly, consistently and ethically, in the volume I need?"',
];

export const INTRO_WHEN_INTRO = "Most businesses need this check at a turning point:";

export const INTRO_WHEN_ITEMS: string[] = [
  "Before placing a bulk order with a new supplier.",
  "During supplier onboarding, when you are choosing between two or three factories.",
  "Prior to mass production of a new product.",
  "For buyer approval, when your customer asks for proof that your supplier meets their code of conduct.",
  "As part of supplier due diligence when you expand sourcing in India.",
];

export const INTRO_CLOSING: string[] = [
  "Factory audits are usually not a government registration or certificate. In most cases, they are required by buyers, brands and retailers as a condition of doing business. However, the audit does check whether the factory follows Indian law, such as labour, safety and environmental rules. So a good audit protects you commercially and legally at the same time.",
  "On this page, you will learn what a supplier factory audit covers, who needs one, which documents the auditor reviews, how the process works step by step, what affects cost, and how Ornate Quality Service Pvt Ltd supports you from scoping to corrective action.",
];

export const WHAT_IS_PARAGRAPHS: string[] = [
  "Factory & process inspection is an independent on-site assessment of a manufacturer. It checks the factory's legal set-up, quality management system, production processes, technical capability, real production capacity and social compliance. The goal is to tell a buyer, with evidence, whether the supplier can deliver the right quality, on time, in an ethical way.",
  "You may also hear it called a factory assessment, manufacturing audit, production audit, supplier evaluation or vendor assessment. When a buyer sends its own team, it is a second-party audit. When an outside firm does it, it is an independent factory inspection or third party factory audit.",
  "It combines several checks that are often sold separately. The table below shows what each part looks at and what you learn from it.",
];

export const WHAT_IS_ROWS: TableRow[] = [
  {
    component: "Factory profile and manufacturer verification",
    checks:
      "Legal existence, ownership, factory licence, GST registration, site address and the actual production activity at the site",
    learn: "Whether you are dealing with a real manufacturer or a trader or middleman",
  },
  {
    component: "Quality management system review",
    checks:
      "Quality manual, standard operating procedures, work instructions, internal audit program, management review meeting records, customer complaint handling",
    learn: "Whether quality is managed by a system or by chance",
  },
  {
    component: "Process inspection (including in-process inspection and production line audit)",
    checks:
      "Incoming quality control, in-process quality control, outgoing quality control, process controls on each line, nonconforming product control",
    learn: "Whether defects are prevented during production, not just caught at the end",
  },
  {
    component: "Production capability assessment",
    checks: "Machinery, technology, skills, testing tools and product experience",
    learn: "Whether the factory can technically make your product to specification",
  },
  {
    component: "Production capacity verification",
    checks:
      "Installed capacity, utilized capacity, shift pattern, workforce headcount verification, existing order load",
    learn: "Whether the factory can make enough, within agreed lead times",
  },
  {
    component: "Social compliance audit",
    checks:
      "Wages, working hours, age verification, health and safety, grievance mechanism, freedom of association",
    learn: "Whether the factory meets your buyer code of conduct and Indian labour law",
  },
];

export const PROCESS_VS_AUDIT_TITLE = "How process inspection differs from a general factory audit";

export const PROCESS_VS_AUDIT =
  "A general factory audit gives you a snapshot of the whole site. Process inspection focuses on the production line itself. The auditor follows the product from raw material to finished goods. They look at how each step is controlled and checked. This is where a manufacturing process audit adds real value. A factory can have a neat office and a thick quality manual, yet still ship defects because one process step is not controlled. Process inspection finds that gap.";

export const PURPOSE_TITLE = "Purpose and objectives";

export const PURPOSE_INTRO =
  "The purpose is simple: reduce the risk of choosing the wrong supplier. The main objectives are to:";

export const PURPOSE_ITEMS: string[] = [
  "confirm the supplier is a genuine, legally operating manufacturer",
  "check that the quality system is real and in daily use",
  "validate process controls on the lines that will make your product",
  "verify capacity against your order volume and delivery dates",
  "check working conditions against your code of conduct and Indian law",
  "give you a clear list of gaps and a path to close them",
];

export const WHY_INDUSTRY_TITLE = "Why it matters to industry and regulators";

export const WHY_INDUSTRY =
  "For businesses, the audit supports sourcing decisions and brand protection. For compliance teams, it is evidence that the supply chain has been checked. The audit also connects to government rules. Indian factories must follow laws on licensing, wages, working hours, safety and pollution control. A factory compliance audit checks whether the factory keeps these obligations. It does not replace any government inspection or approval.";

export const WHAT_IS_NOTE =
  "Statutory requirements for factories depend on the state, the industry and the size of the unit. Requirements may vary depending on the latest official regulatory guidelines. Our audit checks for evidence of compliance; it is not legal advice and not a government approval.";

export const WHY_INTRO =
  "A purchase order is a promise. A factory audit tells you whether the supplier can keep it. Here is why businesses invest in a factory quality audit before they commit.";

export const WHY_ITEMS: { title: string; text: string }[] = [
  {
    title: "It reduces sourcing risk before money moves",
    text: "Most sourcing losses happen because a buyer trusted a sales pitch. A catalogue, a video call and a golden sample do not show you how the factory runs on a normal working day. An on-site factory audit checks the real conditions. This is the most practical way to verify supplier claims before payment and to mitigate sourcing risk early.",
  },
  {
    title: "It protects delivery dates",
    text: "Many suppliers accept orders they cannot finish on time. They may already be full with other orders, or their capacity figures may count machines that do not run. Production capacity verification compares what the factory says with what it can actually produce. This protects your launch dates and seasonal windows.",
  },
  {
    title: "It protects product quality",
    text: "Final inspections catch defects after they happen. A process audit looks at why defects happen. When process controls, calibration and training are weak, quality problems keep coming back. Fixing these at the start is cheaper than rejecting shipments later.",
  },
  {
    title: "It supports legal compliance and ethical sourcing",
    text: "Buyers are now expected to know how their products are made. An ethical sourcing audit checks for serious issues such as child labour, forced labour, unsafe buildings and unpaid wages. For factories, the audit is also a way to confirm legal compliance under Indian labour law before a buyer or authority finds a problem.",
  },
  {
    title: "It opens doors to new buyers and markets",
    text: "Many international brands and large retail chains will not onboard a supplier without an audit. For manufacturers and exporters, a clean audit report and a closed corrective action plan make it easier to win and keep these customers.",
  },
  {
    title: "It builds trust with your own customers",
    text: "When you can show that your suppliers have been checked, your customers trust your products more. This matters for private label brands, D2C brands and marketplace sellers whose name is on the product, even though someone else makes it.",
  },
];

export const WHO_NEEDS_INTRO =
  "Anyone who depends on a factory they do not own or fully control can benefit from a factory audit. The table below shows the most common situations.";

export const WHO_NEEDS_ROWS: TableRow[] = [
  {
    who: "Importers and first-time importers",
    situation: "Sourcing from a new Indian supplier, often from overseas",
    gives: "Proof the manufacturer is genuine and capable before you pay a deposit",
  },
  {
    who: "Brand owners and private label brands",
    situation: "Your brand name is on a product made by a contract manufacturer",
    gives: "Confidence in quality systems and ethics that protect your brand",
  },
  {
    who: "D2C brands and e-commerce sellers",
    situation: "Fast-growing brands scaling production with a new factory",
    gives: "A realistic view of capacity and quality before you scale",
  },
  {
    who: "Retail chains and compliance teams",
    situation: "Managing a large supplier base with approval rules",
    gives: "Consistent audit results to approve, monitor and rank suppliers",
  },
  {
    who: "Ethical sourcing teams",
    situation: "Meeting code of conduct and responsible sourcing commitments",
    gives: "Evidence on labour, health, safety and ethics",
  },
  {
    who: "Procurement teams",
    situation: "Qualifying new vendors and managing supplier risk",
    gives: "Comparable scores to benchmark suppliers",
  },
  {
    who: "Manufacturers, exporters and MSMEs",
    situation: "Preparing for a customer audit or a new buyer",
    gives: "A mock audit that shows gaps before the real one",
  },
  {
    who: "Large enterprises with many suppliers",
    situation: "Running audits across several sites and states",
    gives: "A multi-site programme with one standard and one report format",
  },
];

export const WHO_NEEDS_BLOCKS: { title: string; text: string }[] = [
  {
    title: "Importers sourcing from India",
    text: "Factory audit services for importers sourcing from India are one of the most common requests we handle. Overseas buyers often cannot visit every supplier. A factory audit for importers gives them eyes on the ground. A factory audit for first time importers is especially useful, because new buyers have no history with the supplier. This includes factory audit for US importers sourcing from India, factory audit for UK buyers in India, and factory audit for European brands in India. Each group may follow different buyer standards, so we align the checklist to your requirements.",
  },
  {
    title: "Brand owners, private label and D2C brands",
    text: "A factory audit for brand owners focuses on what could damage the brand: poor quality control, hidden subcontracting and unethical labour practices. Supplier audit for private label brands in India and factory audit for D2C brands sourcing in India follow the same idea. A factory audit for Amazon sellers and other marketplace sellers follows the same logic. Your customers judge your brand, not your supplier's.",
  },
  {
    title: "Retail chains and compliance teams",
    text: "A factory audit for retail chains often forms part of a formal supplier approval process. A factory audit for compliance teams of retail chains needs results they can compare across many factories, and a factory audit for ethical sourcing teams adds depth on labour and ethics. Compliance teams need results they can compare across many factories. We follow a standardised audit checklist or your buyer-approved audit format, so scores stay consistent.",
  },
  {
    title: "Manufacturers seeking audit readiness",
    text: "Manufacturers use audits too. Audit readiness support for manufacturers helps a factory find and fix gaps before a customer audit. A factory audit for export house teams, MSMEs and small manufacturers is useful when they are new to buyer audits and want to get it right the first time.",
  },
];

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Verified supplier capability",
    text: "You learn whether the factory has the machines, skills and controls to make your product. A technical factory audit looks at equipment condition, process knowledge and testing tools. This tells you if the supplier can meet your specification, not just promise it.",
  },
  {
    title: "Realistic capacity and on-time delivery",
    text: "Capacity claims are often based on installed capacity, not what the factory actually produces. We check utilized capacity, the capacity utilisation rate, shift patterns and current order load. You then plan orders based on what the factory can really deliver.",
  },
  {
    title: "Fewer quality failures",
    text: "A detailed process inspection finds the root causes of defects: missing controls, uncalibrated gauges, untrained operators or poor material storage. Fixing these before production lowers defect rates and reduces rework, returns and rejected shipments.",
  },
  {
    title: "Stronger compliance and ethics assurance",
    text: "A social compliance audit checks wages, working hours, age documents, safety and grievance systems. It shows whether the factory meets your code of conduct and Indian law. This protects you from reputational damage and helps meet responsible sourcing commitments.",
  },
  {
    title: "Faster, fairer supplier decisions",
    text: "Audit scores let you compare suppliers on the same basis. Procurement teams can benchmark suppliers, build a supplier scorecard and qualify new vendors with evidence instead of opinion.",
  },
  {
    title: "A clear improvement path",
    text: "Every gap comes with a corrective action. Factories get a practical to-do list. Buyers get a way to track progress. Over time, this raises quality across your whole supply base.",
  },
];

export const FEATURES_ITEMS: string[] = [
  "Scope built around your risk. We agree the scope before the visit: quality, process, capability, capacity, social compliance, EHS or a mix. You pay for what you need.",
  "Standardised audit checklist or your own format. We use a structured checklist so results are consistent. If you have a buyer-approved audit format, we follow it.",
  "Announced, semi-announced or unannounced visits. We can audit on an announced or unannounced basis. An unannounced factory audit in India shows day-to-day reality. A semi-announced social audit gives the factory a time window without an exact date.",
  "Document review and interviews. Auditors verify records through document review and interviews with management and workers.",
  "Confidential worker interviews. We conduct confidential worker interviews away from supervisors, so workers can speak freely.",
  "Capacity and capability checks on the floor. We check production capacity line by line, not just from the factory's brochure.",
  "Photo-documented audit report. Every key finding is supported with photographic evidence and a clear description.",
  "Objective audit scoring. Findings are graded by severity so you can see overall risk at a glance.",
  "Actionable audit findings. Each finding comes with a recommended corrective action and a suggested timeline to agree with the factory.",
  "Corrective action follow-up. We verify fixes through a document review or a follow up factory audit.",
  "Remote options where suitable. A desktop supplier audit or video factory audit can be useful for early screening. We explain clearly what a remote check cannot confirm.",
  "Programmes, not just one-off visits. For larger supply bases, we run an annual supplier audit program or a multi-site factory audit program across India.",
];

export const GLANCE_INTRO =
  "Each service below can be booked on its own or combined into one visit.";

export const GLANCE_ROWS: TableRow[] = [
  {
    service: "Factory assessment services",
    covers:
      "A full-site review of legal set-up, systems, processes, capacity and working conditions",
    bestFor: "First evaluation of a new supplier",
  },
  {
    service: "Manufacturer verification services",
    covers: "Legal existence, ownership, site address and real production activity",
    bestFor: "Avoiding traders or middlemen posing as factories",
  },
  {
    service: "Vendor audit services",
    covers: "Periodic audits of approved vendors against one standard",
    bestFor: "Procurement teams managing a vendor list",
  },
  {
    service: "Process audit services",
    covers: "Line-level controls, inspection points, set-ups and records",
    bestFor: "Suppliers with repeat quality problems",
  },
  {
    service: "Capability assessment services",
    covers: "Machines, skills, tooling, testing tools and product experience",
    bestFor: "New or technically demanding products",
  },
  {
    service: "Production capacity audit services",
    covers: "Real output, shift patterns, current load and bottlenecks",
    bestFor: "Large orders and tight delivery windows",
  },
  {
    service: "Quality system audit services",
    covers: "Quality manual, procedures, internal audits, complaint handling",
    bestFor: "Buyers who need a stable quality system",
  },
  {
    service: "Technical audit services for suppliers",
    covers: "Equipment condition, process knowledge and engineering controls",
    bestFor: "Engineered, electrical or safety-critical products",
  },
  {
    service: "Manufacturing process verification services",
    covers: "Whether the approved process is followed for your product",
    bestFor: "New product launches and process changes",
  },
  {
    service: "Mock factory audit services",
    covers: "A practice audit using your customer's checklist",
    bestFor: "Manufacturers preparing for a buyer audit",
  },
];

export const AUDIT_TYPES_INTRO =
  "Different buyers ask for different audits. Below are the main types we support. The exact scope is always agreed with you before the visit.";

export const AUDIT_TYPE_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Technical and quality audits",
    items: [
      "Quality management system audit. Also called a QMS audit or quality system audit. It checks whether the factory follows its own procedures, and whether the system is built according to ISO 9001 requirements where the buyer asks for it.",
      "ISO-aligned factory audit and gap analysis. For factories preparing for certification, a gap analysis audit before ISO 9001 certification shows what is missing. ISO 9001 certificates themselves are issued by certification bodies, not by the auditor who does the gap audit.",
      "Manufacturing process audit. A line-by-line process control audit of inspection points, set-ups and records.",
      "Quality control audit. Checks how the quality team inspects, records and acts on defects.",
      "Technical audit for suppliers. Focus on machines, tooling, process knowledge and testing equipment.",
    ],
  },
  {
    title: "Social compliance and ethical audits",
    items: [
      "Social compliance audit. Checks labour, wages, working hours, health and safety, and management systems against your code of conduct.",
      "SMETA, amfori BSCI, SA8000 and WRAP readiness. Many buyers ask for audits under these schemes. An official SMETA audit, BSCI audit, SA8000 audit or WRAP audit is carried out only by auditing bodies approved by each scheme owner, and certificates are issued only by those bodies. We help factories prepare with pre-audits and gap closure, and we help buyers understand results. Scheme rules change, so confirm current requirements with the scheme owner.",
      "Ethical audit and responsible sourcing audit. Focused checks on high-risk issues such as child labour and forced labour.",
      "Labour compliance audit. A legal compliance audit for factories in India that checks wages, working hours, leave and statutory contributions under Indian labour law.",
    ],
  },
  {
    title: "Environment, health and safety (EHS) audits",
    items: [
      "EHS audit (factory health and safety audit). Checks health and safety systems, chemical storage, waste handling and emergency preparedness.",
      "Fire safety audit services for factories. Fire exits, alarms, extinguishers, drills and evacuation readiness.",
      "Building safety audit. For export factories, this is a visual review of building condition and structural safety documents. Detailed structural assessment needs a qualified structural engineer.",
      "Factory environmental audit. Checks pollution control consents, waste records and environmental practices.",
      "Chemical management checks. Where buyers require them, such as ZDHC MRSL-related checks or Higg FEM verification readiness for textile units.",
    ],
  },
  {
    title: "Supply chain security audits",
    items: [
      "C-TPAT audit services in India. Security checks many US importers expect from their suppliers, such as access control, container security and personnel security.",
      "Factory security audit and GSV audit readiness. Similar security checks under other buyer programmes.",
    ],
  },
  {
    title: "Capability and capacity audits",
    items: [
      "FCCA audit readiness. The FCCA audit is a structured review of a factory's capability and capacity used by some retailers.",
      "Production capacity verification before a large purchase order. A focused check when a big order depends on one supplier.",
    ],
  },
];

export const AUDIT_TYPES_NOTE =
  "Scheme names such as SMETA, amfori BSCI, SA8000, WRAP, C-TPAT, GSV, FCCA and Higg FEM belong to their respective scheme owners. Each owner sets its own audit rules, approved auditors and fees. Always confirm the latest requirements on the scheme owner's official website before you plan a scheme audit.";

export const ELIGIBILITY_INTRO =
  "Factory audits are open to any business with a legitimate interest in a manufacturing site. There is no government eligibility test. What matters is access to the factory and a clear scope.";

export const ELIGIBILITY_QUALIFIES_INTRO = "Who qualifies";

export const ELIGIBILITY_QUALIFIES: string[] = [
  "Buyers such as importers, brand owners, retail chains and e-commerce sellers who want to verify a manufacturer in India.",
  "Buying agents and sourcing offices acting for an overseas buyer.",
  "Manufacturers and exporters who want a mock factory audit or buyer audit preparation before their customer's audit.",
  "Contract manufacturers that want an independent quality management system review to show new clients.",
  "Businesses with sub-suppliers that need a subcontractor factory audit or sub-supplier verification audit to see deeper into the supply chain.",
];

export const ELIGIBILITY_RIGHT_INTRO = "When an audit is the right tool";

export const ELIGIBILITY_RIGHT: string[] = [
  "As a pre-sourcing audit or new supplier audit, to approve a supplier before signing a contract. A third party factory audit before signing a supplier contract is far cheaper than exiting a bad contract later.",
  "To check a supplier before placing an order, especially the first order or a much larger one.",
  "To confirm a manufacturing readiness assessment before mass production of a new product.",
  "To prepare for a buyer audit. An audit readiness assessment shows a factory what its customer is likely to find.",
  "To prepare for a certification process. For example, ISO 9001 readiness audit services, or an internal check before a BIS factory inspection for the ISI Mark or BIS FMCS certification. BIS decides its own inspection criteria for each scheme, so confirm the current rules on the official BIS website.",
];

export const ELIGIBILITY_OTHER_INTRO = "When a different service fits better";

export const ELIGIBILITY_OTHER: string[] = [
  "You need to check a specific order, not the supplier. Use a pre-production inspection, during production inspection or final random inspection instead.",
  "You need a legal certificate. A factory audit does not issue BIS, ISO or other certificates. It can help you prepare for them.",
  "The supplier is a trader with no factory. The audit must happen at the actual manufacturing site. We will ask for the real factory address before scheduling.",
];

export const ELIGIBILITY_BASIC_INTRO = "Basic requirements before we schedule";

export const ELIGIBILITY_BASIC: string[] = [
  "The factory's full name, address and a contact person",
  "Written consent from the factory to allow the visit (except for agreed unannounced formats)",
  "Your audit scope, product details and any buyer checklist or code of conduct",
  "Preferred dates and any deadline linked to an order",
];

export const ELIGIBILITY_NOTE =
  "A factory that refuses access, or does not share key records, is itself an important finding. We record the refusal clearly in the report so you can decide what to do next.";

export const DOCUMENTS_INTRO =
  "During the audit, the auditor reviews factory records. The exact list depends on the scope and your buyer's checklist. The table below lists the documents we most often review and why they matter.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Factory licence and legal registrations",
    purpose: "Confirms the unit is legally allowed to operate at that address",
    mandatory: "Core for all audits",
    notes: "Licence rules differ by state and industry",
  },
  {
    document: "GST registration and company documents",
    purpose: "Supports factory ownership and legal existence verification",
    mandatory: "Core for all audits",
    notes: "Name and address should match the site being audited",
  },
  {
    document: "Quality manual",
    purpose: "Shows how the factory says it manages quality",
    mandatory: "Core for quality audits",
    notes: "We check that the manual matches practice on the floor",
  },
  {
    document: "Standard operating procedures and work instructions",
    purpose: "Shows how each process should be run",
    mandatory: "Core for quality and process audits",
    notes: "Should be available at the workstation, not only in the office",
  },
  {
    document: "Process flow chart and control plan",
    purpose: "Shows process steps and where checks happen",
    mandatory: "Scope-based",
    notes: "Very useful for engineered or safety-critical products",
  },
  {
    document: "Machinery list",
    purpose: "Supports capability and capacity checks",
    mandatory: "Core for capacity audits",
    notes: "Compared with machines actually installed and running",
  },
  {
    document: "Calibration records",
    purpose: "Shows measuring equipment is accurate",
    mandatory: "Core for quality audits",
    notes: "Expired calibration is a common finding",
  },
  {
    document: "Preventive maintenance records",
    purpose: "Shows machines are maintained to avoid breakdowns",
    mandatory: "Scope-based",
    notes: "Linked to delivery reliability",
  },
  {
    document: "Batch records and traceability system",
    purpose: "Shows products can be traced to materials and dates",
    mandatory: "Scope-based",
    notes: "Important for recalls and complaints",
  },
  {
    document: "Training records and skill matrix",
    purpose: "Shows workers are trained for their tasks",
    mandatory: "Core for quality and social audits",
    notes: "Should match the workers seen on the line",
  },
  {
    document: "Payroll records and overtime records",
    purpose: "Checks wages, overtime and working hours",
    mandatory: "Core for social compliance audits",
    notes: "Cross-checked with attendance data and worker interviews",
  },
  {
    document: "Age verification documents",
    purpose: "Confirms no underage workers are employed",
    mandatory: "Core for social compliance audits",
    notes: "A zero tolerance area in most buyer codes",
  },
  {
    document: "Provident fund and ESI records",
    purpose: "Checks statutory social security contributions",
    mandatory: "Scope-based (social audits)",
    notes: "Applicability depends on unit size and current law",
  },
  {
    document: "Anti-harassment policy and grievance mechanism records",
    purpose: "Shows workers have safe ways to raise concerns",
    mandatory: "Core for social compliance audits",
    notes: "We also check whether workers know about them",
  },
  {
    document: "Fire safety and building safety records",
    purpose: "Supports fire and building safety checks",
    mandatory: "Core for EHS audits",
    notes: "Includes fire drill and equipment maintenance records",
  },
  {
    document: "Environmental consents and waste records",
    purpose: "Supports environmental compliance checks",
    mandatory: "Scope-based (EHS audits)",
    notes: "Consents are issued by the relevant pollution control authority",
  },
  {
    document: "Supplier code of conduct acknowledgement",
    purpose: "Shows the factory accepts the buyer code of conduct",
    mandatory: "Optional",
    notes: "Often requested by retail and brand buyers",
  },
  {
    document: "Needle control policy",
    purpose: "Controls broken needles and sharp tools",
    mandatory: "Industry-specific (apparel)",
    notes: "Common in garment buyer requirements",
  },
];

export const DOCUMENTS_NOTE =
  "Statutory document requirements differ by state, industry and number of workers. Requirements may vary depending on the latest official regulatory guidelines. We check what applies to the factory being audited and record any gaps.";

export const PROCESS_INTRO =
  "Here is how a typical factory and process inspection runs with Ornate Quality Service Pvt Ltd. Each step builds on the one before it.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Scope",
    color: "#0b57b5",
    title: "1. Define the factory audit scope and criteria.",
    text: "We agree what the audit covers: quality, process, capability, capacity, social compliance, EHS or security. We fix the inspection checklist and the factory audit scoring method, and we explain our factory audit methodology. If you have a buyer checklist, we use it.",
  },
  {
    step: "02",
    label: "Quote",
    color: "#2563eb",
    title: "2. Share a quote and schedule the audit.",
    text: "Our quote is based on the number of auditor man-days, the location and the scope. Once approved, we schedule the factory audit with the factory, or plan an unannounced visit if agreed.",
  },
  {
    step: "03",
    label: "Pre-audit",
    color: "#0891b2",
    title: "3. Pre-audit information request.",
    text: "For announced audits, the factory receives a short list of records to keep ready. For some screening needs, a desktop supplier audit of shared documents can come first.",
  },
  {
    step: "04",
    label: "Opening",
    color: "#059669",
    title: "4. Opening meeting.",
    text: "The auditor meets factory management, explains the scope and confirms the plan for the day. This keeps the audit transparent and avoids confusion.",
  },
  {
    step: "05",
    label: "Walkthrough",
    color: "#d97706",
    title: "5. Site walkthrough.",
    text: "The auditor walks the entire site: raw material storage, production floor, quality control areas, packing area, warehouse, canteen, toilets, dormitories if any, and emergency routes. We collect audit evidence, including photographs, throughout, and keep an audit trail of what was seen and where.",
  },
  {
    step: "06",
    label: "Process",
    color: "#ea580c",
    title: "6. Process inspection across the production line.",
    text: "The auditor follows the product from incoming material to finished goods. They check incoming quality control, in-process quality control, final quality control and how nonconforming product is handled. Where your scope includes product checks, we use an ISO 2859-1 sampling plan (AQL sampling).",
  },
  {
    step: "07",
    label: "Records",
    color: "#7c3aed",
    title: "7. Document review and interviews.",
    text: "The auditor verifies records and holds a management interview. For social audits, we conduct confidential worker interviews. Each worker interview is compared with payroll and attendance records.",
  },
  {
    step: "08",
    label: "Capacity",
    color: "#0b57b5",
    title: "8. Capability and capacity verification.",
    text: "The auditor checks machine capacity, installed capacity, utilized capacity, shift pattern, headcount and current order load. This shows whether the factory can meet your quantity within agreed lead times.",
  },
  {
    step: "09",
    label: "Closing",
    color: "#2563eb",
    title: "9. Closing meeting.",
    text: "The auditor explains the audit findings to management and helps the team identify non-conformities clearly. This includes any critical non-compliance, major non-conformance and minor non-conformance. The factory gets a fair chance to respond and share missing evidence.",
  },
  {
    step: "10",
    label: "Report",
    color: "#0891b2",
    title: "10. Audit report.",
    text: "After an internal audit quality review, we issue the audit report. It includes a summary, an overall audit score, detailed findings with photographic evidence and recommended corrective actions.",
  },
  {
    step: "11",
    label: "CAPA",
    color: "#059669",
    title: "11. Corrective action plan.",
    text: "The factory prepares a corrective action plan. Good plans use root cause analysis and corrective and preventive action, not quick fixes. A non-conformity is only closed when the cause is removed. We guide suppliers on the steps needed to close non-conformities properly.",
  },
  {
    step: "12",
    label: "Follow-up",
    color: "#d97706",
    title: "12. Follow-up verification.",
    text: "Depending on the issue, we verify fixes through submitted evidence or a follow-up factory audit, sometimes called a CAPA verification audit.",
  },
];

export const CAPACITY_TITLE = "How production capacity is checked: a simple example";

export const CAPACITY_PARAGRAPHS: string[] = [
  "Capacity checks should be based on real numbers. A basic method looks like this:",
  "Daily capacity = number of working machines × output per machine per hour × effective working hours × efficiency",
  'Illustrative example only: suppose a line has 20 working machines. Each machine makes 30 pieces per hour. The line runs 8 effective hours a day at 70% efficiency. Daily capacity is 20 × 30 × 8 × 0.70 = 3,360 pieces. If the factory already uses half of this for other buyers, only about 1,680 pieces a day are available for your order. This simple check often shows why "we can do it" is not the same as "we can do it on time."',
  "Real audits also look for bottlenecks. A factory may have enough sewing, moulding or assembly machines, but too little capacity in one step, such as finishing, testing or packing. That one step then controls the output of the whole line.",
];

export const TIMELINE_INTRO =
  "There is no government timeline for factory audits, because they are commercial audits, not statutory approvals. The time needed depends on the scope, factory size, number of workers, location and auditor availability.";

export const TIMELINE_STAGES_INTRO = "Typical stages:";

export const TIMELINE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Scoping and quote.",
    text: "Depends on how quickly the scope and factory details are shared.",
  },
  {
    title: "Scheduling.",
    text: "Depends on the factory's location, the audit format and auditor availability.",
  },
  {
    title: "On-site audit.",
    text: "Measured in auditor man-days. A small, single-product unit needs less time than a large multi-building site with several hundred workers.",
  },
  {
    title: "Reporting.",
    text: "Includes an internal review before the report is issued.",
  },
  {
    title: "Corrective actions and follow-up.",
    text: "Depends on how serious the gaps are and how fast the factory acts.",
  },
];

export const TIMELINE_URGENT_TITLE = "Urgent requests";

export const TIMELINE_URGENT =
  "If you need an urgent factory audit, tell us your location and deadline when you enquire. We confirm feasibility before booking. A rapid factory audit, a same week factory audit in India or a factory audit within 48 hours may be possible in some locations. It is never guaranteed, because it depends on auditor availability, travel and factory cooperation. We would rather tell you honestly than promise a slot we cannot staff.";

export const TIMELINE_NOTE =
  "Scheme-based audits and certifications (such as SA8000 or WRAP) follow timelines set by the scheme owner and the certification body. Processing time depends on the latest requirements of that scheme.";

export const COST_INTRO =
  "We do not publish a fixed price, because no two audits have the same scope. Most providers, including us, price factory audits by the number of auditor man-days plus travel. A man-day is one auditor working one day at the site or on the report. Factory audit cost in India depends mainly on the factors below.";

export const COST_ROWS: TableRow[] = [
  {
    factor: "Audit scope",
    why: "A combined quality, process and social audit needs more time than a single-topic audit",
    keep: "Choose the modules that match your real risk",
  },
  {
    factor: "Factory size and headcount",
    why: "More buildings, lines and workers mean more to walk, sample and interview",
    keep: "Share accurate factory size details up front",
  },
  {
    factor: "Audit standard or buyer checklist",
    why: "Some buyer checklists and scheme formats are longer and need more evidence",
    keep: "Share your checklist early so we can plan correctly",
  },
  {
    factor: "Location and travel",
    why: "Remote locations add travel time and cost",
    keep: "Group nearby factories into one trip",
  },
  {
    factor: "Number of sites",
    why: "A multi-site programme spreads planning and travel cost",
    keep: "Plan audits as a programme rather than one-offs",
  },
  {
    factor: "Audit format",
    why: "Unannounced audits may need extra planning",
    keep: "Use unannounced visits where authenticity matters most",
  },
  {
    factor: "Follow-up visits",
    why: "A follow-up audit adds man-days",
    keep: "Ask the factory to share strong evidence of fixes",
  },
  {
    factor: "Scheme and third-party fees",
    why: "Scheme membership, platform or certification fees are set by scheme owners, not by us",
    keep: "Check scheme fees with the scheme owner before you commit",
  },
];

export const COST_QUESTIONS_INTRO = "Other cost questions buyers often ask:";

export const COST_QUESTIONS: string[] = [
  "Factory inspection cost per man day. The man-day rate reflects auditor skill, audit type and location. We share it clearly in your quote.",
  "Social audit cost in India. It depends on headcount, because worker interviews and payroll sampling grow with the size of the workforce.",
  "SMETA audit cost, BSCI audit cost, SA8000 certification cost and WRAP certification cost in India. These include fees set by the scheme owner or certification body. We can explain what is included, but final scheme fees must be confirmed with the scheme owner.",
  "Factory audit cost for a single site manufacturer. Usually lower than multi-site audits because planning and travel are simpler.",
  "Supplier audit cost. For programmes covering many suppliers, the cost per audit usually falls because planning is shared.",
  "Factory audit package. Buyers who need both a supplier audit and order inspections can combine them into one plan.",
];

export const COST_CLOSING =
  "A cost-effective supplier audit is one that is scoped to real risk. The cheapest option is rarely an affordable factory audit in the long run if it misses a critical issue. We follow transparent audit pricing. Your quote lists man-days, travel and any scheme-related costs separately, so you know exactly what you are paying for.";

export const COST_NOTE =
  "Government or scheme fees, where they apply, are set by the relevant authority or scheme owner and can change. Always verify current fees from the official source.";

export const VALIDITY_PARAGRAPHS: string[] = [
  "A factory audit has no single government-defined validity period. It is a snapshot of the factory on the audit date. Conditions can change quickly when a factory changes ownership, management, location, products or workforce.",
];

export const VALIDITY_DECIDED_INTRO = "In practice, validity is decided by:";

export const VALIDITY_ITEMS: string[] = [
  "Your buyer or your own sourcing policy. Many buyer programmes set their own re-audit cycle.",
  "The scheme owner, for scheme-based audits and certificates such as SA8000 or WRAP. Each scheme sets its own validity and surveillance rules.",
  "Risk. A factory with serious findings usually needs a follow-up much sooner than a low-risk factory.",
];

export const VALIDITY_CLOSING =
  "If an audit is linked to a certificate or a buyer requirement, verify the current validity rules with the relevant scheme owner or buyer.";

export const RENEWAL_INTRO =
  "Since audits are point-in-time checks, most buyers repeat them. A re-audit keeps your supplier information current.";

export const RENEWAL_WHEN_INTRO = "When a re-audit is usually needed";

export const RENEWAL_WHEN: string[] = [
  "At the end of the cycle set in your annual supplier audit program",
  "After a failed audit or serious findings, through a follow-up factory audit or CAPA verification audit",
  "When the factory moves, expands or changes ownership",
  "When you add a new product category that needs different processes",
  "When a buyer, retailer or scheme owner asks for a fresh audit",
  "When quality or delivery problems suggest something has changed",
];

export const RENEWAL_PROCESS_TITLE = "General re-audit process";

export const RENEWAL_PROCESS =
  "The steps are similar to the first audit. The difference is focus. The auditor reviews the previous report, checks that past findings were closed and looks for new risks. This makes the annual re-audit of existing suppliers faster and more useful over time.";

export const RENEWAL_PRECAUTIONS_INTRO = "Important precautions";

export const RENEWAL_PRECAUTIONS: string[] = [
  "Keep all corrective action evidence organised. Auditors will ask for it.",
  "Do not wait for the re-audit to fix problems. Buyers value steady improvement.",
  "Tell your buyer about major changes, such as a new site or subcontractor, before the audit.",
];

export const CHALLENGES_INTRO =
  "Knowing the usual problems helps both buyers and factories prepare. These are the issues auditors see most often.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Documentation issues",
    text: "Records are missing, incomplete or created just before the audit. A common example is payroll that does not match attendance or worker interviews. Another is calibration records that show dates but no results. Auditors treat inconsistent records as a risk, even when the factory's intentions are good.",
  },
  {
    title: "Compliance issues",
    text: "Excessive overtime, unclear wage calculations and missing statutory contributions are frequent findings in social compliance audits. On the safety side, blocked exits, missing fire drill records and poor chemical storage are common. Some issues, such as underage workers or forced labour, are treated as zero tolerance issues by most buyers.",
  },
  {
    title: "Process and quality issues",
    text: "Many factories rely on final inspection instead of process control. There may be no control plan, weak incoming checks or uncontrolled rework. These gaps often explain repeat defects that buyers see later.",
  },
  {
    title: "Capacity overstatement",
    text: "Factories sometimes quote installed capacity rather than what they actually produce. Others do not mention that most of their capacity is already booked. Without production capacity verification, buyers only discover this when deliveries slip.",
  },
  {
    title: "Hidden subcontracting",
    text: "When a factory is short on capacity or lacks a process, it may send work to another unit without telling the buyer. Unauthorised subcontracting can break quality and compliance commitments. Good subcontractor management and transparency are key checks in a supplier audit.",
  },
  {
    title: "Delays in approval",
    text: "Buyers may delay supplier approval while waiting for corrective actions. Slow responses from the factory, vague action plans or weak evidence of fixes are the usual causes.",
  },
];

export const HELP_INTRO =
  "We support buyers and manufacturers from the first question to the final corrective action. Our role is to give you reliable facts and practical guidance. We do not promise that any factory will pass an audit or that any buyer will approve a supplier.";

export const HELP_BUYERS_TITLE = "For buyers, brands and retail compliance teams";

export const HELP_BUYERS: string[] = [
  "Audit scoping. We help you choose the right audit type and depth for your risk.",
  "Audit documentation and coordination support. We coordinate dates, share document lists with the factory and manage communication, so your team does not have to.",
  "On-ground factory inspection. Our auditors visit the site and verify claims directly.",
  "Clear reporting. You receive a structured report with an audit score, photographic evidence and prioritised findings.",
  "Supplier audit program management. For larger supply bases, we plan and run audits across suppliers and track results over time.",
  "Links to order-level inspection. When the supplier is approved, we can support pre-production inspection, during production inspection and final random inspection for your orders.",
];

export const HELP_CHOOSE_TITLE = "Choosing a factory audit company in India";

export const HELP_CHOOSE =
  "When you compare a third party factory audit company, a factory inspection agency or an independent audit consultant, look past the price. Check who will actually visit the factory. A social auditor needs different skills from a quality or process auditor. For social audits, ask whether the lead auditor is an APSCA auditor or has equivalent training. For quality audits, ask about the lead auditor's factory experience. If you plan factory audit outsourcing for many suppliers, check that the provider can keep one standard across all sites.";

export const HELP_MFG_TITLE = "For manufacturers and exporters";

export const HELP_MFG: string[] = [
  "Mock factory audit services. A realistic practice audit that shows gaps before your customer's audit.",
  "Buyer audit preparation services. We explain what buyers usually check and help you organise records.",
  "Audit documentation assistance. Practical help in setting up missing records, registers and procedures.",
  "Technical guidance for audit readiness. Advice on process controls, calibration, training and traceability.",
  "Corrective action guidance for suppliers. Help writing corrective action plans that address root causes, not just symptoms.",
  "Compliance advisory for manufacturers. Guidance on common labour, safety and quality expectations, with a clear note of what needs legal or specialist advice.",
];

export const HELP_NOTE =
  "Final approval of a supplier is always the buyer's decision. Scheme certificates are issued only by approved certification bodies. We help you prepare and understand results; we do not guarantee approval or certification.";

export const WHY_INTRO_CHOOSE =
  "Choosing a factory audit company is a trust decision. Here is how we work.";

export const WHY_CHOOSE_ITEMS: string[] = [
  "Impartial third-party audit. We work for the party that commissions the audit. We do not accept payment from a factory to change results. If an auditor has any link with the factory, we assign someone else. This is our no conflict of interest audit approach.",
  "Documented audit methodology. Our audits follow a documented method with standardised audit protocols, so results are consistent across auditors and sites. We use an ISO 19011 based audit methodology built on evidence, fair presentation and independence.",
  "Auditor code of ethics. Every factory and process inspection expert on our team follows an auditor code of ethics covering honesty, confidentiality and fair treatment of workers.",
  "Buyer-accepted audit formats. We can work in your format or a standard format that buyers commonly accept.",
  "Audit quality review process. Reports are reviewed before release to check that every finding is supported by evidence.",
  "Photo and video evidence in audit reports. Where the factory permits, we support findings with images, so you can see what the auditor saw.",
  "Data-backed audit scoring. Findings are graded by severity. This gives you a consistent basis to compare and benchmark suppliers.",
  "Confidential audit reporting. Reports are shared only with the client and people the client authorises.",
  "Transparent audit pricing. Man-days, travel and any scheme fees are shown separately in the quote.",
  "Dedicated audit coordinator. One contact person handles your audit from scheduling to report delivery.",
  "Industry-experienced auditors. We assign auditors who understand the relevant industry and processes.",
  "Multilingual auditors, India-wide. Worker interviews work best in the worker's language. We plan language needs in advance.",
  "Real-time audit status updates. You know when the audit is scheduled, in progress and reported.",
];

export const INDUSTRIES_INTRO =
  "Factory audits are most valuable in industries with complex processes, high labour intensity or strict buyer requirements. Our programmatic industry pages will cover each vertical in detail. Here is a short overview.";

export const INDUSTRY_BLOCKS: { title: string; text: string }[] = [
  {
    title: "Textiles and apparel",
    text: "Garment and textile supply chains involve many steps, from spinning and weaving to cutting, sewing, printing and washing. They are labour-intensive, so social compliance is a key focus. Buyers commonly ask for checks on wages, working hours, subcontracting and chemical management, along with quality controls such as needle control and measurement checks.",
  },
  {
    title: "Electronics and electricals",
    text: "Electronics buyers focus on process control and traceability. Typical checks cover incoming component control, ESD protection, soldering and assembly processes, testing stations and batch traceability. Capacity and capability checks matter when a brand moves production to a new contract manufacturer.",
  },
  {
    title: "Toys",
    text: "Toy buyers care about product safety processes, small parts control, material control and ethical manufacturing. Process controls in moulding, stitching and finishing are central, together with social compliance.",
  },
  {
    title: "Furniture",
    text: "Furniture audits look at material sourcing, timber drying and moisture control, finishing processes, dust and fire safety, and packaging. Capacity checks are common because furniture orders are often large and seasonal.",
  },
  {
    title: "Footwear and leather",
    text: "Footwear and leather audits review cutting, stitching, lasting and sole attachment processes, adhesive and chemical safety, and working conditions. Tanneries also involve significant environmental checks.",
  },
  {
    title: "Home goods and housewares",
    text: "Kitchenware, dinnerware, glassware, utensils and home decor buyers focus on material safety, surface finish, process control in furnaces and kilns, packaging and labour conditions. Food-contact products need extra attention to material control.",
  },
];

export const PRODUCTS_INTRO_TITLE = "Products and categories covered";

export const PRODUCTS_INTRO =
  "The table below lists the product groups covered by our industry-vertical audit framework. Factory audits are buyer-driven assessments, not government certifications, so no Indian Standard (IS) number or legal mandate is shown against these audits. If your product itself needs a government certification, such as BIS certification, check the applicable rules separately on the official website of the relevant authority.";

export const PRODUCTS_ROWS: TableRow[] = [
  { vertical: "Textiles & Apparel", group: "Apparel (supplier level)", focus: "Apparel supplier social audit", emphasis: "Wages, working hours, subcontracting and code-of-conduct checks for apparel suppliers", audience: "Brand owners, retailers, ethical sourcing teams", page: "Coming Soon" },
  { vertical: "Textiles & Apparel", group: "Knitwear", focus: "Knitwear factory audit", emphasis: "Knitting-to-finishing process controls, outsourced dyeing or printing, measurement checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Textiles & Apparel", group: "Home textiles", focus: "Home textile factory audit", emphasis: "Weaving, stitching and finishing controls; colour and size consistency; labour conditions", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Textiles & Apparel", group: "Denim mills", focus: "Denim mill process audit", emphasis: "Weaving, washing and finishing process control; chemical handling and wastewater", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Textiles & Apparel", group: "Spinning & weaving mills", focus: "Spinning and weaving mill audit", emphasis: "Machine capability, yarn and fabric quality controls, capacity and shift patterns", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Textiles & Apparel", group: "Garments", focus: "Garment factory capacity verification", emphasis: "Line capacity, operator headcount, current order load and bottlenecks in finishing", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Electronics & Electricals", group: "EMS / contract electronics", focus: "EMS contract manufacturer audit", emphasis: "Component control, assembly and test processes, traceability, capacity for new programmes", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Electronics & Electricals", group: "PCB assembly", focus: "PCB assembly process audit", emphasis: "Soldering and assembly process control, inspection stations, ESD protection, traceability", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Electronics & Electricals", group: "LED lighting", focus: "LED lighting factory audit", emphasis: "Assembly and testing process, component control, ageing tests and quality records", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Electronics & Electricals", group: "Cables & wires", focus: "Cable and wire manufacturer audit", emphasis: "Raw material control, extrusion process checks, in-process testing and calibration", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Electronics & Electricals", group: "Electrical appliances", focus: "Electrical appliance factory audit", emphasis: "Assembly controls, safety testing stations, calibration and final checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Electronics & Electricals", group: "Electronics (ESD-sensitive)", focus: "ESD control audit electronics factory", emphasis: "ESD-protected areas, grounding, handling practices and training", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Toys", group: "Toys (all)", focus: "Toy factory social compliance audit", emphasis: "Labour, safety and ethics checks for toy manufacturing sites", audience: "Brand owners, retailers, ethical sourcing teams", page: "Coming Soon" },
  { vertical: "Toys", group: "Toys (all)", focus: "Ethical toy program audit", emphasis: "Readiness for toy-industry ethical programme requirements (scheme owner sets the rules)", audience: "Brand owners, retailers, ethical sourcing teams", page: "Coming Soon" },
  { vertical: "Toys", group: "Soft toys", focus: "Soft toy factory audit", emphasis: "Stitching and stuffing process control, small-part and needle control, material storage", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Toys", group: "Plastic moulded toys", focus: "Plastic toy moulding process audit", emphasis: "Moulding process control, material and colourant control, sharp-edge and small-part checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Toys", group: "Toys (safety-critical)", focus: "Toy safety process audit", emphasis: "Process controls that support product safety, such as material control and in-line checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Toys", group: "Wooden toys", focus: "Wooden toy factory audit", emphasis: "Timber and finish control, sanding and edge checks, dust and fire safety", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Furniture", group: "Wooden furniture", focus: "Wooden furniture factory audit", emphasis: "Timber sourcing and moisture control, joinery and finishing processes, dust and fire safety", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Furniture", group: "Metal furniture", focus: "Metal furniture factory audit", emphasis: "Welding, surface treatment and coating process control, load-bearing checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Furniture", group: "Upholstered furniture", focus: "Upholstery process audit", emphasis: "Frame, foam and fabric control, stitching quality, flammability-related process checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Furniture", group: "Timber furniture (FSC)", focus: "FSC chain of custody audit furniture", emphasis: "Readiness for timber traceability requirements (certificate issued by approved bodies)", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Furniture", group: "Furniture (all)", focus: "Furniture capacity verification", emphasis: "Line capacity, seasonal order load, drying and finishing bottlenecks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Furniture", group: "Outdoor furniture", focus: "Outdoor furniture factory audit", emphasis: "Material durability controls, coating and weather-resistance processes, packaging", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Footwear", group: "Leather (tanneries)", focus: "Leather tannery audit", emphasis: "Chemical management, effluent treatment, worker safety and process records", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Footwear", group: "Leather footwear", focus: "Leather footwear process audit", emphasis: "Cutting, stitching, lasting and sole attachment controls; adhesive safety", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Footwear", group: "Leather (tanneries)", focus: "LWG audit tannery india", emphasis: "Readiness for tannery environmental programme requirements (scheme owner sets the rules)", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Footwear", group: "Sports shoes", focus: "Sports shoe factory audit", emphasis: "Assembly line control, adhesive and chemical handling, capacity checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Footwear", group: "Footwear (all)", focus: "Footwear factory social audit", emphasis: "Wages, working hours, safety and grievance checks in footwear units", audience: "Brand owners, retailers, ethical sourcing teams", page: "Coming Soon" },
  { vertical: "Footwear", group: "Sandals & slippers", focus: "Sandal and slipper factory audit", emphasis: "Moulding or cutting process control, material checks, capacity", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Home Goods & Housewares", group: "Kitchenware", focus: "Kitchenware factory audit", emphasis: "Material control, surface finish and coating processes, food-contact care", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Home Goods & Housewares", group: "Ceramic dinnerware", focus: "Ceramic dinnerware factory audit", emphasis: "Kiln and glazing process control, material control, breakage and packing checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Home Goods & Housewares", group: "Glassware", focus: "Glassware factory audit", emphasis: "Furnace and forming process control, heat safety, breakage and packing checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Home Goods & Housewares", group: "Home decor", focus: "Home decor factory audit", emphasis: "Handcraft process consistency, finishing materials, labour and home-worker transparency", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Home Goods & Housewares", group: "Stainless steel utensils", focus: "Stainless steel utensils factory audit", emphasis: "Material grade control, forming and polishing processes, finish checks", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
  { vertical: "Home Goods & Housewares", group: "Food-contact products", focus: "Food contact products process audit", emphasis: "Material traceability, hygiene controls and process records for food-contact items", audience: "Importers, brand owners, retailers", page: "Coming Soon" },
];

export const PRODUCTS_NOTE =
  "This table shows audit coverage, not a legal requirement. Whether a buyer requires a factory audit, and which standard applies, depends on that buyer's sourcing policy.";

export const LOCATIONS_INTRO =
  "We schedule audits across India's manufacturing clusters. The table lists common locations and the industries typically found there. Coverage in any specific town is confirmed when we schedule your audit.";

export const LOCATION_ROWS: TableRow[] = [
  { location: "Factory inspection company in Noida", industries: "Electronics, garments, consumer goods" },
  { location: "Factory audit services Greater Noida", industries: "Electronics, engineering goods" },
  { location: "Factory audit company in Delhi NCR", industries: "Garments, home furnishings, consumer goods" },
  { location: "Factory inspection services Delhi", industries: "Garments, consumer goods, small manufacturing units" },
  { location: "Factory audit in Gurgaon", industries: "Garments, auto components" },
  { location: "Factory audit services Manesar", industries: "Auto components, engineering" },
  { location: "Factory audit in Faridabad", industries: "Engineering goods, auto components" },
  { location: "Factory audit services Sonipat", industries: "Engineering and industrial units" },
  { location: "Factory audit services Bhiwadi", industries: "Engineering, auto parts, consumer goods" },
  { location: "Factory audit in Panipat", industries: "Home textiles, rugs, blankets" },
  { location: "Factory audit in Ludhiana", industries: "Knitwear, hosiery, engineering goods" },
  { location: "Factory audit in Jaipur", industries: "Textiles, home decor, handicrafts" },
  { location: "Factory audit in Jodhpur", industries: "Wooden furniture, handicrafts" },
  { location: "Factory audit in Moradabad", industries: "Brassware and metal handicrafts" },
  { location: "Factory audit in Agra", industries: "Leather footwear" },
  { location: "Factory audit in Kanpur", industries: "Leather and leather goods" },
  { location: "Factory audit in Kolkata", industries: "Jute, leather goods, garments" },
  { location: "Factory audit in Mumbai", industries: "Garments, consumer goods, packaging" },
  { location: "Factory audit in Ahmedabad", industries: "Textiles, engineering, chemicals" },
  { location: "Factory audit in Surat", industries: "Textiles and fabrics" },
  { location: "Factory audit services Vadodara", industries: "Engineering, chemicals" },
  { location: "Factory audit services Rajkot", industries: "Engineering components, auto parts" },
  { location: "Factory audit in Pune", industries: "Auto components, engineering" },
  { location: "Factory audit in Hyderabad", industries: "Engineering, electronics, consumer goods" },
  { location: "Factory audit in Bangalore", industries: "Garments, electronics" },
  { location: "Factory audit services Hosur", industries: "Auto components, electronics" },
  { location: "Factory audit in Chennai", industries: "Auto components, electronics, leather" },
  { location: "Factory audit services Coimbatore", industries: "Textiles, pumps, engineering" },
  { location: "Factory audit in Tiruppur", industries: "Knitwear and garments" },
];

export const LOCATIONS_CLOSING =
  "Searching for a factory audit near me, a factory inspection near me or a factory auditor near me? Share the factory address, and we will confirm auditor availability for that location before we schedule.";

export const MISTAKES_ROWS: TableRow[] = [
  {
    mistake: "Treating a factory visit by a sales agent as an audit",
    hurts: "Sales visits are guided tours, not evidence-based checks",
    avoid: "Use an independent auditor with a clear checklist",
  },
  {
    mistake: "Auditing the office, not the actual production site",
    hurts: "Traders may show a showroom or another unit",
    avoid: "Confirm the exact production address and verify legal existence",
  },
  {
    mistake: "Checking only capacity, or only compliance",
    hurts: "A factory can be ethical but not capable, or capable but unsafe",
    avoid: "Combine capability, capacity and social checks where risk is high",
  },
  {
    mistake: "Relying on an old audit report",
    hurts: "Conditions change after audits",
    avoid: "Check the audit date and scope; re-audit when needed",
  },
  {
    mistake: "Not sharing your buyer checklist in advance",
    hurts: "The audit may miss points your customer cares about",
    avoid: "Share your code of conduct and checklist at the scoping stage",
  },
  {
    mistake: "Ignoring minor findings",
    hurts: "Minor issues often grow into major failures",
    avoid: "Track every finding in a corrective action plan",
  },
  {
    mistake: 'Accepting "closed" corrective actions without evidence',
    hurts: "The same issues reappear in the next audit",
    avoid: "Ask for photos, records or a verification visit",
  },
  {
    mistake: "Preparing records only on the day before the audit",
    hurts: "Auditors quickly spot documents made in a rush",
    avoid: "Keep records updated as part of daily work",
  },
];

export const TIPS_BUYERS_TITLE = "For importers, brands and retail buyers";

export const TIPS_BUYERS: string[] = [
  "Audit before the first big order. The best time to audit is before a large deposit or purchase order, not after a problem.",
  "Match the audit to the risk. A simple accessory supplier needs a lighter audit than a supplier making a safety-critical or high-value product.",
  "Ask the right questions when choosing a provider. Ask to see a redacted sample audit report. Ask whether the auditors assigned to your audit are APSCA registered social auditors, where relevant to your programme. Ask whether the lead auditor holds a certified ISO 9001 lead auditor qualification, if your audit includes a quality system review. Ask for factory audit case studies from similar industries. A reliable audit partner will answer openly.",
  "Use scores, but read the details. A good overall score can still hide one critical finding.",
  "Build a supplier scorecard. Combine audit results with delivery and quality data to rank suppliers over time.",
];

export const TIPS_MFG_TITLE = "For manufacturers and exporters";

export const TIPS_MFG: string[] = [
  "Run a mock audit first. It is the cheapest way to find gaps before your customer does.",
  "Keep one master compliance file. Licences, consents, policies and key records in one place save hours during an audit.",
  "Train supervisors on what auditors check. Many findings happen because line staff do not know the procedure.",
  "Fix root causes, not symptoms. If overtime is high, look at planning and capacity, not just the records.",
  "Be transparent about subcontracting. Declare subcontractors to your buyer. Hidden subcontracting damages trust more than the subcontracting itself.",
];

export const COMPARISON_INTRO =
  "Buyers often ask how a factory audit differs from other quality and compliance services. The table below gives a simple view.";

export const COMPARISON_ROWS: TableRow[] = [
  {
    point: "Main question",
    factory: "Is this supplier capable, reliable and compliant?",
    product: "Is this specific order or batch acceptable?",
    cert: "Does the organisation meet the standard for certification?",
  },
  {
    point: "Focus",
    factory: "Systems, processes, capacity, working conditions",
    product: "Product quality, quantity, packing and specifications",
    cert: "The management system against the standard's requirements",
  },
  {
    point: "Usual timing",
    factory: "Before choosing a supplier, then periodic re-audits",
    product: "At set points of an order",
    cert: "At initial certification and scheduled surveillance audits",
  },
  {
    point: "Who usually asks for it",
    factory: "Buyers, brands, retailers, compliance teams",
    product: "Buyers and importers for each shipment",
    cert: "The organisation seeking certification, often driven by customers",
  },
  {
    point: "Output",
    factory: "Audit report, score and corrective action plan",
    product: "Inspection report with pass or fail result for the lot",
    cert: "A certificate issued by the certification body, if requirements are met",
  },
  {
    point: "Does it certify the factory?",
    factory: "No",
    product: "No",
    cert: "Yes, through an accredited certification body",
  },
];

export const FORMATS_TITLE = "Audit formats compared";

export const FORMAT_ROWS: TableRow[] = [
  {
    format: "Announced audit",
    works: "Date agreed with the factory in advance",
    strengths: "Records and people are available; efficient",
    limits: "The factory can prepare, so it may not show daily reality",
  },
  {
    format: "Semi-announced audit",
    works: "The factory gets a time window, not an exact date",
    strengths: "Balance of preparation and authenticity",
    limits: "Needs flexible scheduling",
  },
  {
    format: "Unannounced audit",
    works: "The auditor arrives without notice",
    strengths: "Best view of normal conditions",
    limits: "Risk of access refusal; key people may be absent",
  },
  {
    format: "Remote or video audit",
    works: "Documents and live video instead of a site visit",
    strengths: "Fast screening; useful for follow-ups",
    limits: "Cannot fully verify conditions, capacity or worker experience",
  },
];

export const COMPARISON_CLOSING =
  "For deeper side-by-side guides on these topics, see our comparison pages when they are published.";

export const TERMS_INTRO =
  "Audit reports use technical terms. This quick guide explains the ones buyers ask about most.";

export const TERMS_ROWS: TableRow[] = [
  { term: "Non-conformity", meaning: "A gap between a requirement and what the factory actually does", why: "Shows exactly where the factory falls short of your standard" },
  { term: "Statistical process control", meaning: "Using simple data charts to track a process and spot drift early", why: "Shows whether a process is stable before defects appear" },
  { term: "Process FMEA", meaning: "A structured review of what can go wrong at each process step and how it is prevented", why: "Shows whether risks were thought through before production" },
  { term: "First article inspection", meaning: "A full check of the first piece made after a machine set-up", why: "Stops a wrong set-up from producing a whole batch" },
  { term: "Measurement system analysis", meaning: "A check that gauges and measuring methods give reliable results", why: "Unreliable measurement can hide defects" },
  { term: "Lot traceability", meaning: "The ability to trace a lot back to its materials, machines and dates", why: "Needed to handle complaints and recalls quickly" },
  { term: "Defect rate", meaning: "The share of units found defective", why: "A basic indicator of process health" },
  { term: "First pass yield", meaning: "The share of units made right the first time, without rework", why: "Reveals hidden rework that inflates cost and lead time" },
  { term: "Overall equipment effectiveness", meaning: "A measure that combines machine availability, speed and quality", why: "Links machine performance to real capacity" },
  { term: "Production line balancing", meaning: "Spreading work evenly across operations on a line", why: "Unbalanced lines create bottlenecks and overtime" },
  { term: "Bottleneck analysis", meaning: "Finding the slowest step that limits total output", why: "Decides the factory's true capacity" },
  { term: "Lead time capability", meaning: "The time the factory needs from order to shipment", why: "Tests whether delivery promises are realistic" },
  { term: "Production planning", meaning: "How orders are scheduled on lines and shifts", why: "Weak planning drives excessive overtime and delays" },
  { term: "Housekeeping 5S", meaning: "Sort, set in order, shine, standardise and sustain", why: "Organised floors reduce errors and accidents" },
  { term: "Kaizen", meaning: "Small, continuous improvements made by the team", why: "Shows a culture of improvement, not just compliance" },
  { term: "Lean manufacturing practices", meaning: "Methods that remove waste from processes", why: "Linked to cost, lead time and consistency" },
  { term: "Metal detection", meaning: "Checking finished goods for broken needles or metal parts", why: "Critical for apparel, toys and some home goods" },
  { term: "Pest control", meaning: "Controls that keep pests away from materials and products", why: "Important for textiles, paper goods and food-contact items" },
  { term: "Packing area control", meaning: "Separation, labelling and checks in the packing area", why: "Prevents mix-ups, damage and contamination" },
  { term: "Warehouse management", meaning: "How materials and finished goods are stored, labelled and moved", why: "Prevents damage and wrong shipments" },
  { term: "Product safety risk assessment", meaning: "A review of hazards linked to the product and how it is made", why: "Key for toys, electricals and food-contact items" },
  { term: "Supplier performance evaluation", meaning: "Rating a supplier over time on quality, delivery and compliance", why: "Feeds a fair supplier scorecard" },
  { term: "Supplier risk rating", meaning: "A risk level given to a supplier based on audit and performance data", why: "Helps decide how often to re-audit" },
  { term: "Vendor rating system", meaning: "A structured scoring method used to compare vendors", why: "Makes supplier decisions consistent" },
  { term: "Minimum wage compliance", meaning: "Paying at least the legally notified minimum wage", why: "A core social compliance check" },
  { term: "Provident fund compliance", meaning: "Making statutory provident fund contributions for eligible workers", why: "Checked through payroll and challan records" },
  { term: "ESI compliance", meaning: "Making statutory employees' state insurance contributions for eligible workers", why: "Checked through payroll and contribution records" },
  { term: "Contract labour compliance", meaning: "Fair treatment, payment and records for contract workers", why: "Contract workers are often at higher risk of violations" },
];

export const TERMS_NOTE =
  "Legal terms such as minimum wage, provident fund and ESI apply based on current law, the state and the size of the unit. Requirements may vary depending on the latest official regulatory guidelines.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What does your factory and process inspection service include?",
    a: "It covers factory profile and manufacturer verification, quality management system review, process inspection, production capability assessment, production capacity verification and social compliance audit. You can choose all modules or only the ones you need. EHS and security checks can be added.",
  },
  {
    q: "How long does a factory audit take?",
    a: "On-site time is measured in auditor man-days. It depends on factory size, number of workers and scope. A small single-product unit needs less time than a large multi-building site. We confirm the expected man-days in your quote.",
  },
  {
    q: "How much does a factory audit cost?",
    a: "There is no fixed factory audit price. The cost depends on man-days, location, scope, factory size and any scheme fees. We share a clear quote after understanding your needs.",
  },
  {
    q: "How is the audit fee calculated?",
    a: "The fee is based mainly on auditor man-days, plus travel. Scheme or third-party fees, if any, are listed separately. Factory audit charges are always shown line by line in our quote, including the man day rate for factory audit in your location.",
  },
  {
    q: "What documents are needed for a factory audit?",
    a: "Typical records include the factory licence, GST and company documents, quality manual, procedures, machinery list, calibration and maintenance records, training records, payroll and attendance records, age proof and safety records. The exact list depends on your scope and checklist.",
  },
  {
    q: "What happens if a factory fails an audit?",
    a: "The factory receives a list of findings and prepares a corrective action plan. Serious issues may need a follow-up audit. Whether the supplier is still approved is the buyer's decision. We help both sides understand the findings and the next steps.",
  },
  {
    q: "Do you conduct unannounced factory audits?",
    a: "Yes, where the buyer requests it and it is practical. Unannounced audits give the most realistic picture, but there is a risk that access is refused or key people are absent. We discuss this with you before planning.",
  },
  {
    q: "Is the factory informed before the audit?",
    a: "For announced and semi-announced audits, yes. For unannounced audits, the factory is not told the date in advance, as agreed with the buyer.",
  },
  {
    q: "Which cities in India do you cover?",
    a: "We plan audits across India's main manufacturing clusters, including Delhi NCR, Tiruppur, Ludhiana, Moradabad, Jodhpur, Panipat, Agra, Kanpur, Chennai, Bangalore, Mumbai, Ahmedabad, Surat, Pune, Kolkata and Hyderabad. We confirm coverage for your exact location when scheduling.",
  },
  {
    q: "How quickly will I receive the audit report?",
    a: "The report is issued after our internal quality review. We confirm the reporting timeline in your quote, based on the scope. If you have a deadline, tell us at the start.",
  },
  {
    q: "Can the audit report be shared with my buyer?",
    a: "Yes. The report belongs to the client who commissioned it. You can share it with your buyer or authorise us to share it directly.",
  },
  {
    q: "Can you audit against my own buyer code of conduct?",
    a: "Yes. We can follow your code of conduct and your own checklist or buyer-approved audit format, so the results match what your customer expects.",
  },
  {
    q: "Are your auditors independent of the factory?",
    a: "Yes. We follow an impartial, no conflict of interest approach. Auditors with any link to the factory are not assigned to that audit.",
  },
  {
    q: "What is the difference between a factory audit and an inspection?",
    a: "A factory audit checks the supplier: its systems, processes, capacity and working conditions. An inspection checks a specific product lot against your specifications. Most buyers use both: an audit to approve the supplier, and inspections to check each order.",
  },
  {
    q: "Can you verify production capacity for a specific order?",
    a: "Yes. We compare the factory's real output, current order load and line balance with your order quantity and delivery date. This is often requested before a large purchase order.",
  },
  {
    q: "Do you audit subcontractors and sub-suppliers?",
    a: "Yes, if the main supplier discloses them and they agree to the audit. We also check for signs of undisclosed subcontracting during the main audit.",
  },
  {
    q: "Can you audit multiple factories in one trip?",
    a: "Yes. Grouping nearby factories into one trip saves travel time and cost. This is common in clusters such as Tiruppur, Ludhiana or Delhi NCR.",
  },
  {
    q: "Do you offer virtual or video audits?",
    a: "Yes, for screening, document checks and some follow-ups. A remote factory audit cannot fully confirm working conditions, capacity or worker experience, so we recommend an on-site audit for approval decisions.",
  },
  {
    q: "What if the factory refuses the audit?",
    a: "We record the refusal and inform you right away. A refusal is itself important information for your sourcing decision.",
  },
  {
    q: "How is confidentiality of audit results maintained?",
    a: "Reports are shared only with the client and people the client authorises. Factory information collected during the audit is used only for the audit.",
  },
  {
    q: "Do you offer re-audits after corrective actions?",
    a: "Yes. We verify corrective actions through evidence review or a follow-up visit, depending on how serious the findings were.",
  },
  {
    q: "Do you provide mock audits before buyer audits?",
    a: "Yes. A mock audit follows the same approach as a real audit and gives the factory a clear list of gaps to fix before the customer's audit.",
  },
  {
    q: "Do you audit against Indian labour codes?",
    a: "Yes. Our social compliance checks consider India's labour codes, such as the Code on Wages, 2019 and the Occupational Safety, Health and Working Conditions Code, 2020, along with applicable state rules. Rules and notifications continue to evolve, so requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "Can manufacturers book an audit for themselves?",
    a: "Yes. Many manufacturers book a mock audit or audit readiness review before a buyer audit or a certification process.",
  },
  {
    q: "Do you audit MSME and small workshops?",
    a: "Yes. We adjust the checklist and time needed to the size of the unit. An MSME factory audit is often shorter and focuses on the most important risks.",
  },
  {
    q: "How do I request an audit quote?",
    a: "Share the factory name and address, product details, audit scope, any buyer checklist and your preferred dates. We will send a quote with man-days, travel and any other costs listed separately.",
  },
];

export const STARTING_INTRO = "Not sure which service to book? Start with your goal.";

export const STARTING_ROWS: TableRow[] = [
  {
    goal: "Verify supplier before payment",
    service: "Manufacturer verification and factory audit",
    next: "Book Supplier Audit",
  },
  {
    goal: "Check factory before placing order",
    service: "Factory assessment with capability check",
    next: "Book Factory Audit",
  },
  {
    goal: "Inspect factory before bulk order",
    service: "Production capacity verification",
    next: "Book Production Capacity Verification",
  },
  {
    goal: "Meet a buyer's social compliance requirement",
    service: "Social compliance audit",
    next: "Book Social Compliance Audit",
  },
  {
    goal: "Check the quality system",
    service: "QMS audit",
    next: "Book QMS Audit",
  },
  {
    goal: "Find the cause of repeat defects",
    service: "Process inspection",
    next: "Book Process Inspection",
  },
  {
    goal: "Check safety and environment",
    service: "EHS audit",
    next: "Book EHS Audit for Factory",
  },
  {
    goal: "Meet US importer security expectations",
    service: "Supply chain security audit",
    next: "Book C-TPAT Security Audit",
  },
  {
    goal: "Prepare for a customer's audit",
    service: "Mock audit",
    next: "Book Mock Audit for Buyer Audit",
  },
  {
    goal: "Confirm corrective actions are closed",
    service: "Follow-up audit",
    next: "Book CAPA Closure Audit",
  },
];

export const CTA_TITLE = "Talk to Our Audit Team";

export const CTA_PARAGRAPHS: string[] = [
  "Choosing the right supplier is one of the most important decisions you make. A well-planned factory and process inspection gives you facts instead of assumptions. It shows how the factory works, what it can deliver and where the risks are.",
  "Ornate Quality Service Pvt Ltd supports you with clear scoping, on-ground factory audits, evidence-based reports and practical corrective action guidance. Whether you are an importer checking a new supplier, a brand owner protecting your name, or a manufacturer preparing for a buyer audit, our team is ready to help.",
];
