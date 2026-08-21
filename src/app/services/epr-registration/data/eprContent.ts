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

export type FaqItem = {
  q: string;
  a: string;
};

export type InternalLink = {
  label: string;
  href: string;
  group?: string;
  description?: string;
};

export type InternalLinkGroup = {
  title: string;
  items: InternalLink[];
};

export const EPR_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-epr", label: "What Is EPR Registration?" },
  { id: "why-matters", label: "Why This Compliance Matters for Your Business" },
  { id: "who-needs", label: "Who Needs EPR Registration?" },
  { id: "waste-streams", label: "Waste Streams Covered Under EPR Registration" },
  { id: "products-covered", label: "Products Covered Under EPR Registration" },
  { id: "benefits", label: "Key Benefits for Your Business" },
  { id: "service-includes", label: "What Our Service Includes" },
  { id: "eligibility", label: "Eligibility for EPR Registration" },
  { id: "documents", label: "Documents Required for EPR Registration" },
  { id: "process", label: "Step-by-Step EPR Registration Process" },
  { id: "timeline", label: "EPR Registration Timeline" },
  { id: "cost", label: "EPR Registration Cost" },
  { id: "validity", label: "EPR Registration Validity" },
  { id: "renewal", label: "EPR Registration Renewal" },
  { id: "challenges", label: "Common Challenges Businesses Face" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-ornate", label: "Why Choose Ornate Quality Services" },
  { id: "industries", label: "Industries We Serve" },
  { id: "mistakes", label: "Common Mistakes and How to Avoid Them" },
  { id: "expert-tips", label: "Expert Tips for a Smooth Application" },
  { id: "stream-comparison", label: "Comparing the EPR Waste Streams" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Start Your EPR Registration" },
];

export const BANNER_TITLE = "EPR Registration in India";

export const BANNER_SUBTITLE =
  "Waste-stream-wise EPR registration support for producers, importers and brand owners — handled end to end, from documentation to certificate.";

export const BANNER_DESCRIPTION =
  "If your business makes, imports or brands electronics, plastic packaging, batteries, tyres or oil products, Indian law makes you responsible for the waste those products become. EPR registration is how you formally accept that responsibility and stay legally allowed to sell.";

export const BANNER_SERVICE_NOTE =
  "Ornate Quality Services handles the full EPR registration process for your business — file preparation, CPCB portal filing, query handling and post-approval compliance.";

export const KEY_HIGHLIGHTS: string[] = [
  "End-to-end EPR registration services across all five waste streams — e-waste, plastic packaging, battery, tyre and used oil",
  "Complete documentation preparation and document upload handled by our team, not left to you",
  "Direct departmental coordination — we respond to CPCB queries on your behalf",
  "Support for producers, importers, brand owners, manufacturers and recyclers",
  "Post-approval support including annual return filing and target fulfilment",
  "Transparent EPR registration pricing, explained before work begins",
];

export const INTRO_PARAGRAPHS: string[] = [
  "Every year, India generates a large volume of electronic waste, plastic packaging waste and battery waste. The government's answer is a simple principle: the company that puts a product into the market should also be responsible for what happens when that product is thrown away.",
  "That principle is called Extended Producer Responsibility. EPR registration is the formal registration through which the Central Pollution Control Board (CPCB) recognises your business as an obligated entity and issues your EPR certificate.",
  "For most businesses, this is not optional. It becomes mandatory the moment your product or its packaging falls under one of the notified waste management rules. Without a valid EPR registration certificate, you may face difficulties at customs clearance, with marketplace listings, in tenders, and during inspections by pollution control authorities.",
  "This page explains what EPR registration is, who needs it, what documents are required, how the process works on the CPCB EPR portal, and how our team manages it for you.",
];

export const INTRO_IMPORTANT_NOTE =
  "Important note on rules: EPR requirements in India are updated regularly through notifications and revised guidelines. Specific fees, processing times, validity periods and target percentages may vary depending on the latest official regulatory guidelines. We confirm the current position with CPCB before starting your file.";

export const WHAT_IS_PARAGRAPHS: string[] = [
  "EPR registration is a mandatory environmental compliance registration in India. It records that a producer, importer or brand owner has accepted legal responsibility for collecting, recycling or safely disposing of the waste generated by its products at the end of their life.",
  "The registration is granted by the Central Pollution Control Board (CPCB) under the Ministry of Environment, Forest and Climate Change. Applications are filed online through the CPCB EPR portal, and the outcome is an EPR certificate carrying a unique registration number.",
];

export const ESTABLISHES_TABLE: TableRow[] = [
  {
    establishes: "Your legal identity as an obligated entity",
    whyItMatters: "Confirms which rules apply to you and in what role",
  },
  {
    establishes: "The products and waste streams you deal in",
    whyItMatters: "Defines the exact scope of your obligation",
  },
  {
    establishes: "Your annual collection and recycling targets",
    whyItMatters: "Sets the quantity of waste you must channelise each year",
  },
  {
    establishes: "Your reporting obligations",
    whyItMatters: "Establishes what returns you must file and when",
  },
];

export const PURPOSE_OBJECTIVES: string[] = [
  "Shift responsibility upstream. The producer, not the municipality, carries the cost and duty of end-of-life management.",
  "Build a traceable recycling chain. Waste moves from consumers to authorised recyclers and dismantlers instead of the informal sector.",
  "Support a circular economy. Materials re-enter manufacturing rather than ending up in landfill.",
  "Create accountability. Every obligated business has a registration number, reported quantities and a compliance record.",
];

export const WHAT_IS_ALT_NAMES =
  "You will also see this registration referred to as an EPR license or an EPR authorization, and the document itself called an EPR authorization certificate. These describe the same thing: the CPCB EPR registration granted to an obligated entity, carrying a unique EPR number. Applications are made entirely online, which is why it is commonly searched as EPR registration online or EPR registration India.";

export const WHAT_IS_COMPLIANCE_NOTE =
  "EPR registration is a compliance registration, not a product quality approval. It says nothing about how good your product is. It says that you have accepted responsibility for the waste it will become.";

export const WHY_MATTERS_INTRO =
  "EPR compliance has moved from a niche environmental concern to a mainstream business requirement in India. Here is why EPR Registration matters — not just for the environment, but for your business.";

export const WHY_MATTERS_ITEMS: { title: string; text: string }[] = [
  {
    title: "It is a legal requirement, not a best practice",
    text: "Once your product category is notified under the applicable waste management rules, registration becomes mandatory. Operating without it exposes your business to enforcement action, including environmental compensation levied by the authorities.",
  },
  {
    title: "It protects your imports",
    text: "Importers routinely find that shipments face questions at the port when compliance documents are incomplete. An EPR certificate for import is a document that customs and enforcement officers increasingly expect for notified categories.",
  },
  {
    title: "It protects your sales channels",
    text: "Large e-commerce marketplaces, institutional buyers and government procurement platforms ask sellers to declare and upload environmental compliance registrations. Missing paperwork means delisted products or rejected bids.",
  },
  {
    title: "It protects your reputation",
    text: "Buyers, investors and enterprise customers now review environmental compliance as part of vendor onboarding. A clean EPR compliance record is evidence that your business is properly run.",
  },
  {
    title: "It reduces long-term risk",
    text: "Businesses that register late usually face a harder situation: past-period obligations still exist, but the time available to fulfil them has shrunk. Registering on time keeps your targets manageable.",
  },
];

export const WHO_NEEDS_INTRO =
  "EPR obligations attach to your role in the supply chain, not to the size of your company. A small importer can carry the same obligation as a large manufacturer.";

export const OBLIGATED_ROLES: TableRow[] = [
  {
    role: "Producer",
    whoCovers: "Manufactures notified products in India",
    obligation: "Registration, targets, returns",
  },
  {
    role: "Importer",
    whoCovers: "Brings notified products or packaging into India",
    obligation: "Registration, targets, returns",
  },
  {
    role: "Brand Owner",
    whoCovers: "Sells under its own brand, even if manufacturing is outsourced",
    obligation: "Registration, targets, returns",
  },
  {
    role: "Recycler / Dismantler",
    whoCovers: "Processes waste and generates EPR certificates",
    obligation: "Separate registration as a processor",
  },
];

export const OBLIGATED_ROLES_NOTE =
  "Together, producers, importers and brand owners are commonly referred to as PIBOs. Our EPR registration for PIBO service covers all three roles.";

export const BUSINESS_TYPES: string[] = [
  "Manufacturers — factories producing electronics, packaging, batteries or tyres. Our EPR registration for manufacturers service covers domestic production across all notified categories.",
  "Importers — including EPR registration for importer of electronics and for e-waste importers bringing notified equipment into India.",
  "Brand owners — companies that outsource production but sell under their own name. EPR registration for brand owners applies even without a factory.",
  "Producers — entities placing notified products in the Indian market.",
  "Plastic and packaging manufacturers — covered under EPR registration for plastic packaging as producers of packaging material.",
  "MSMEs and startups — obligation follows role, not size.",
  "E-commerce sellers, including Amazon and Flipkart sellers who import or sell own-brand goods.",
  "FMCG brands carrying plastic packaging obligations.",
  "Recyclers, dismantlers and refurbishers seeking processor registration.",
];

export const WHO_NEEDS_CLOSING =
  "If you are unsure whether your product falls within scope, we carry out an applicability review before any filing begins. That review is part of our EPR risk assessment for importers and manufacturers.";

export const WASTE_STREAMS_INTRO =
  "EPR in India is organised by waste stream, under separate rules. Each stream has its own registration, its own targets and its own reporting. A company dealing in more than one stream needs more than one registration.";

export const WASTE_STREAMS_ROWS: TableRow[] = [
  {
    wasteStream: "E-Waste",
    governingRules: "E-Waste (Management) Rules, 2022",
    whoMustRegister:
      "Producers, importers, brand owners, manufacturers, refurbishers, dismantlers, recyclers of notified electrical and electronic equipment",
    ourService: "E-waste EPR registration",
  },
  {
    wasteStream: "Plastic Packaging",
    governingRules: "Plastic Waste Management Rules and their amendments",
    whoMustRegister:
      "Producers, importers and brand owners of plastic packaging across the notified packaging categories",
    ourService: "Plastic waste EPR registration",
  },
  {
    wasteStream: "Battery Waste",
    governingRules: "Battery Waste Management Rules, 2022",
    whoMustRegister:
      "Producers, importers and brand owners of portable, automotive, industrial and electric vehicle batteries",
    ourService: "Battery waste EPR registration",
  },
  {
    wasteStream: "Waste Tyre",
    governingRules: "EPR guidelines under the hazardous and other wastes framework",
    whoMustRegister: "Producers and importers of new tyres, and importers of waste tyres",
    ourService: "EPR registration for tyres",
  },
  {
    wasteStream: "Used Oil",
    governingRules: "EPR guidelines under the hazardous and other wastes framework",
    whoMustRegister: "Producers and importers of base oil, lubricating oil and used oil",
    ourService: "EPR registration for used oil",
  },
];

export const WASTE_STREAM_DETAILS: { title: string; text: string }[] = [
  {
    title: "E-waste EPR registration",
    text: "Electrical and electronic equipment notified under the rules is classified using EEE codes. Your product's code determines your category and your targets. We help you classify correctly at the start — misclassification is one of the most common reasons applications get sent back.",
  },
  {
    title: "Plastic waste EPR registration",
    text: "Plastic packaging is divided into notified categories covering rigid packaging, flexible packaging, multilayered packaging and compostable packaging. Each category carries its own obligation. Our service includes category classification based on your actual packaging portfolio.",
  },
  {
    title: "Battery waste EPR registration",
    text: "The battery rules cover all battery types, from small portable cells to large industrial and electric vehicle packs. Demand for EPR registration for lithium ion battery producers and importers has grown sharply as the EV and energy storage markets expand. We handle every notified chemistry and format.",
  },
  {
    title: "Tyre and used oil EPR registration",
    text: "These two streams are less widely understood, and fewer consultants work on them. We support EPR registration for tyres and for used oil producers with the same documentation and coordination process used for the larger streams.",
  },
];

export const PRODUCTS_COVERED_INTRO =
  "Each waste stream is notified down to specific product and category level, not just in general terms. The tables below list the products commonly covered under each EPR registration category, mapped to their applicable classification code. If you are unsure where a specific product fits, our applicability review confirms this before filing begins.";

export const PRODUCTS_EWASTE_INTRO =
  "Electrical and electronic equipment notified under the E-Waste (Management) Rules, 2022 is classified against 106 EEE items across six product categories, each carrying its own EPR code.";

export const PRODUCTS_BATTERY_INTRO =
  "Under the Battery Waste Management Rules, batteries are classified as Portable, Automotive, Electric Vehicle (EV) or Industrial. Unlike e-waste, individual battery products do not carry separate ITEW-style EPR codes; classification instead follows battery category and application.";

export const PRODUCTS_BATTERY_NOTE =
  "Important: This table is illustrative of common product types. Exact EPR applicability depends on the battery type, chemistry, intended use and the status of the obligated entity. We verify the applicable classification against the current CPCB EPR portal before registration.";

export const PRODUCTS_PLASTIC_INTRO =
  "Plastic packaging EPR uses Category I to IV classifications: Category I is rigid plastic packaging, Category II is flexible plastic packaging, Category III is multilayered packaging, and Category IV covers plastic sheet and compostable-plastic packaging and carry bags.";

export const PRODUCTS_PLASTIC_NOTE =
  "Important: This table is illustrative of common product and packaging types. Exact EPR applicability depends on the nature of the packaging, material composition and intended use. We verify the applicable category against the current CPCB EPR portal before registration.";

export const PRODUCTS_TYRE_INTRO =
  "Waste Tyre EPR covers new tyres placed in the market as well as new and used tyres brought into India by importers, across automotive, commercial-vehicle and specialty tyre categories.";

export const PRODUCTS_USED_OIL_INTRO =
  "Used Oil EPR does not assign individual product codes. CPCB instead classifies producers under P1-P8 producer types, while the products covered span base oil, lubricating oil and specified industrial and used-oil categories.";

export const PRODUCTS_USED_OIL_NOTE =
  "Note: CPCB's definition of used oil covers specified categories of spent or used oils, including engine oil, gear oil, hydraulic oil, turbine oil, compressor oil, industrial gear oil, heat-transfer oil, transformer oil and tank-bottom sludge, subject to applicable conditions and regulatory requirements.";

export const BENEFITS_ITEMS: string[] = [
  "Legal compliance. You meet a mandatory statutory requirement and remove a significant enforcement risk from your business.",
  "Smoother imports. Notified consignments move through clearance with the environmental documentation officers expect to see.",
  "Market access. Marketplace listings, distributor onboarding, tenders and enterprise procurement all become possible once your registration is in place.",
  "Buyer confidence. A verifiable EPR number and certificate reassure institutional buyers who audit their supply chain.",
  "Risk reduction. Registering on schedule keeps your annual targets achievable and reduces exposure to environmental compensation.",
  "Operational clarity. Registration forces a clean record of what you sell, where it goes and how much of it there is — useful well beyond compliance.",
  "Sustainability credentials. Your EPR record becomes evidence for ESG reporting and customer sustainability questionnaires.",
];

export const SERVICE_INCLUDES: string[] = [
  "Applicability review first. We confirm whether you are obligated, and in which role, before any filing begins.",
  "Complete documentation support. Our EPR documentation services cover preparation, formatting, review and portal upload.",
  "CPCB portal handling. Account creation, form completion, document upload and submission are managed by our team.",
  "Departmental coordination. We draft and file responses when CPCB raises queries on your application.",
  "Application accuracy review. Every file passes an internal check before submission — our first time right EPR application approach.",
  "Multi-stream capability. One team handles all five waste streams, so a diversified company deals with a single point of contact.",
  "Post-approval support. EPR annual return filing services, quarterly returns, amendments and renewal.",
  "Target fulfilment assistance. Support with EPR target fulfilment and connecting you to authorised processors.",
  "Confidential handling. Your commercial data — sales volumes, import figures, supplier details — stays confidential.",
];

export const ELIGIBILITY_INTRO =
  "EPR registration eligibility depends on three questions:";

export const ELIGIBILITY_QUESTIONS: string[] = [
  "Does your product or its packaging fall under a notified waste stream? If yes, obligation is likely.",
  "What is your role? Producer, importer or brand owner obligations differ from recycler or dismantler obligations.",
  "Is your entity properly constituted? You need a valid registered business entity with the supporting statutory documents.",
];

export const ELIGIBILITY_WHO_QUALIFIES: string[] = [
  "Companies, LLPs, partnership firms and proprietorship firms with valid registration documents",
  "Importers holding a valid Importer Exporter Code",
  "Brand owners selling notified products under their own brand, including those using contract manufacturers",
  "Recyclers, dismantlers and refurbishers seeking processor registration",
];

export const ELIGIBILITY_WHO_NOT: string[] = [
  "Businesses whose products and packaging fall entirely outside the notified categories",
  "Retailers who only sell products already registered by the producer or brand owner, unless they also import or brand",
  "Service businesses with no physical product or packaging obligation",
];

export const ELIGIBILITY_IMPORTANT_NOTES: string[] = [
  "Obligation follows the role, not turnover. There is no general small-business exemption simply because your volumes are low.",
  "A single company dealing in several waste streams needs a separate registration for each stream.",
  "Applicability criteria may vary depending on the latest official regulatory guidelines. We verify your position before filing rather than assuming it.",
];

export const DOCUMENTS_INTRO =
  "Exact requirements vary by waste stream, entity type and the current portal format. The table below sets out what is typically required. We issue you a tailored EPR registration checklist after the applicability review.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Company incorporation certificate or firm registration proof",
    purpose: "Establishes the legal entity",
    mandatory: "Mandatory",
    notes: "Certificate of incorporation, partnership deed or equivalent",
  },
  {
    document: "PAN of the entity",
    purpose: "Entity tax identity",
    mandatory: "Mandatory",
    notes: "Must match the applicant name exactly",
  },
  {
    document: "GST registration certificate",
    purpose: "Business and turnover identity",
    mandatory: "Mandatory in most cases",
    notes: "Should reflect the correct business address",
  },
  {
    document: "Importer Exporter Code (IEC)",
    purpose: "Confirms import authorisation",
    mandatory: "Mandatory for importers",
    notes: "Required where the applicant imports notified goods",
  },
  {
    document: "Udyam / MSME certificate",
    purpose: "Establishes enterprise classification",
    mandatory: "Optional",
    notes: "Useful where MSME status is relevant",
  },
  {
    document: "Address proof of registered office and plant",
    purpose: "Confirms operating locations",
    mandatory: "Mandatory",
    notes: "Utility bill, rent agreement or ownership document",
  },
  {
    document: "Consent to Operate from the State Pollution Control Board",
    purpose: "Confirms state-level environmental clearance",
    mandatory: "Mandatory for manufacturing units",
    notes: "Applicability depends on your operations",
  },
  {
    document: "Authorised signatory letter or board resolution",
    purpose: "Authorises the person filing",
    mandatory: "Mandatory",
    notes: "Must name the person signing the application",
  },
  {
    document: "Product details and technical specifications",
    purpose: "Defines scope and classification",
    mandatory: "Mandatory",
    notes: "Product list, category and applicable codes",
  },
  {
    document: "Sales or import data for the relevant period",
    purpose: "Basis for target calculation",
    mandatory: "Mandatory",
    notes: "Must be internally consistent and defensible",
  },
  {
    document: "Agreement or tie-up documents with authorised processors",
    purpose: "Evidence of the channelisation arrangement",
    mandatory: "Depends on stream and stage",
    notes: "Requirements vary by waste stream",
  },
  {
    document: "Digital Signature Certificate of the authorised signatory",
    purpose: "Authenticates portal submission",
    mandatory: "Mandatory where the portal requires it",
    notes: "Class as specified by the portal",
  },
];

export const DOCUMENTS_CLOSING =
  "We do not ask you to invent documents. If something on this list does not exist in your business, we tell you and work out the correct alternative with you.";

export const PROCESS_INTRO =
  "Here is how the EPR registration process runs when we handle it.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Review",
    color: "#0b57b5",
    title: "Step 1 — Applicability review",
    text: "We examine your products, packaging, imports and role in the supply chain, and confirm which waste streams apply and under which rules. You receive a written position before any cost is committed.",
  },
  {
    step: "02",
    label: "Documents",
    color: "#2563eb",
    title: "Step 2 — Document collection and preparation",
    text: "We issue your tailored checklist, collect what you have, and prepare the rest. Weak or inconsistent documents are fixed at this stage, not after rejection.",
  },
  {
    step: "03",
    label: "Portal",
    color: "#0891b2",
    title: "Step 3 — Portal account creation",
    text: "We set up your entity on the CPCB EPR portal, generate your login credentials and configure the account for your streams. Your EPR registration user ID and password remain yours.",
  },
  {
    step: "04",
    label: "Application",
    color: "#059669",
    title: "Step 4 — Application form completion",
    text: "Product categories, codes, quantities, facility details and processor arrangements are entered accurately. This is where most self-filed applications go wrong.",
  },
  {
    step: "05",
    label: "Accuracy",
    color: "#d97706",
    title: "Step 5 — Internal accuracy review",
    text: "A second reviewer checks the complete file against the current guidelines before anything is submitted.",
  },
  {
    step: "06",
    label: "Submit",
    color: "#dc2626",
    title: "Step 6 — Submission and document upload",
    text: "The application and supporting documents are submitted through the portal. You receive confirmation and the reference details needed to track application status.",
  },
  {
    step: "07",
    label: "Queries",
    color: "#7c3aed",
    title: "Step 7 — Query handling",
    text: "If CPCB raises observations, we prepare and file the response within the permitted window and keep you updated. Queries are normal — how quickly and accurately you answer them decides your outcome.",
  },
  {
    step: "08",
    label: "Certificate",
    color: "#0d9488",
    title: "Step 8 — Approval and certificate download",
    text: "Once approved, we download your EPR certificate from the portal, verify the details on it, and hand over your registration number and a copy for your records.",
  },
  {
    step: "09",
    label: "Compliance",
    color: "#475569",
    title: "Step 9 — Post-approval compliance",
    text: "Your obligations begin, not end, at approval. We set out your return filing schedule, target position and record-keeping requirements, and support you through them.",
  },
];

export const TIMELINE_INTRO =
  "Processing time depends on the latest regulatory requirements, and cannot be promised in advance by any consultant.";

export const TIMELINE_ROWS: TableRow[] = [
  { stage: "Document preparation", duration: "How complete and consistent your existing records are" },
  { stage: "Portal filing", duration: "Straightforward once documents are ready" },
  { stage: "Departmental scrutiny", duration: "CPCB workload and the quality of your submission" },
  { stage: "Query resolution", duration: "How fast queries are answered and how well they are drafted" },
  { stage: "Approval and issue", duration: "Departmental process" },
];

export const TIMELINE_PARAGRAPHS: string[] = [
  "What we can tell you honestly is what drives the timeline:",
  "What actually shortens the timeline: a clean, accurate first submission. An application that draws two rounds of queries takes far longer than one that draws none. That is the reasoning behind our accuracy review — and it is a more honest lever than promising a fixed number of days.",
  "We do not offer same-day EPR registration or guaranteed approval within a fixed number of days. Any consultant who does is describing something they do not control. Where a file is genuinely urgent, we prioritise preparation and query response so that no delay comes from our side.",
];

export const COST_INTRO =
  "We do not publish a fixed EPR registration fee on this page, because a single figure would be misleading. Government fees and consultancy charges both depend on factors specific to your business.";

export const COST_FACTORS: string[] = [
  "Number of waste streams. Each stream is a separate registration with separate work.",
  "Entity type and structure. Multiple facilities or group entities increase scope.",
  "Product portfolio size. More categories and codes mean more classification and data work.",
  "Condition of your documents. Well-maintained records cost less to file than records that must be reconstructed.",
  "Government fees. Applicable statutory fees as prescribed under the current guidelines.",
  "Scope of service. Registration only, or registration plus return filing and target fulfilment support.",
  "Renewal and ongoing compliance. Recurring costs that follow the initial certificate.",
];

export const COST_HOW_WE_QUOTE =
  "You receive a written EPR registration quotation setting out scope, deliverables and charges before work begins. Government fees are shown separately from our professional charges, so you can see exactly what you are paying for. There are no charges introduced later that were not in the original scope.";

export const VALIDITY_PARAGRAPHS: string[] = [
  "An EPR registration certificate is issued for a defined period and is not permanent. The EPR certificate validity period depends on the waste stream and the applicable guidelines in force at the time of issue.",
  "Because validity periods have been revised through amendments, we confirm the current position for your stream at the time of registration rather than quoting a figure that may have changed. Your certificate itself states its validity — that document, and the current CPCB guidance, are the authoritative sources.",
  "Validity is conditional, not automatic. A certificate can be affected if returns are not filed or obligations are not met during its term.",
  "Validity is not the same as compliance. Holding a valid certificate while missing your annual targets is still non-compliance.",
];

export const RENEWAL_INTRO =
  "Renewal is not a formality. It is a fresh assessment of your compliance record.";

export const RENEWAL_WHEN =
  "Before your existing certificate expires. Applying late can create a gap during which you are trading without valid registration.";

export const RENEWAL_PROCESS_STEPS: string[] = [
  "Review your compliance position — returns filed, targets met, records complete",
  "Update entity, product and facility details where anything has changed",
  "Prepare updated supporting documents",
  "File the renewal application through the portal",
  "Respond to any departmental observations",
  "Receive the renewed certificate",
];

export const RENEWAL_PRECAUTIONS: string[] = [
  "Start early. Renewal alongside an unresolved target shortfall is a much harder conversation than renewal with a clean record.",
  "Reconcile your data first. Mismatches between filed returns and actual figures surface at renewal.",
  "Update changes as they happen. Address changes, new products and new brands should be handled through amendment during the term, not disclosed for the first time at renewal.",
];

export const RENEWAL_CLOSING =
  "Our EPR registration renewal services include a compliance review before filing, so you know your position before the department does.";

export const CHALLENGES_ITEMS: string[] = [
  "Wrong product classification. Choosing the wrong EEE code or plastic packaging category changes your entire target calculation. This is the single most common cause of rejection and rework.",
  "Incomplete or inconsistent documentation. Turnover in the GST record not matching the figures in the application. Addresses differing across documents. Signatories without documented authority.",
  "Unreliable sales and import data. Many businesses have never compiled product-wise quantity data in the format the application requires. Reconstructing it late, under pressure, produces errors.",
  "Portal difficulties. Login problems, credential issues and session timeouts are common and can stall a file for days if nobody is actively managing it.",
  "Poorly handled queries. A departmental observation answered vaguely, or answered after the window closes, turns a solvable issue into a rejection. EPR registration rejection reasons are usually procedural, not substantive.",
  "Underestimating post-approval obligations. Businesses celebrate the certificate and then miss the first return. Registration is the start of the obligation.",
  "Multi-stream confusion. A company registers for e-waste, assumes it is covered, and discovers later that its plastic packaging carried a separate obligation all along.",
];

export const HOW_WE_HELP_INTRO =
  "Our role is to take the administrative and technical load off your team while keeping you fully informed.";

export const HOW_WE_HELP_ITEMS: { title: string; text: string }[] = [
  {
    title: "Applicability assessment",
    text: "A clear written position on whether you are obligated, for which streams, and in what role.",
  },
  {
    title: "Documentation preparation",
    text: "Our EPR documentation and coordination support covers checklist, collection, drafting, formatting and upload.",
  },
  {
    title: "Portal management",
    text: "Account setup, form completion, submission and status tracking on the CPCB EPR portal.",
  },
  {
    title: "Departmental coordination",
    text: "We draft query responses and follow up with the department. Our EPR registration support with departmental coordination means you are not translating regulatory language yourself.",
  },
  {
    title: "Technical guidance",
    text: "Product classification, category mapping and target calculation explained in plain terms.",
  },
  {
    title: "Post-approval compliance",
    text: "Annual return filing, quarterly return filing, amendments, renewal and compliance reporting.",
  },
  {
    title: "Target fulfilment support",
    text: "Assistance with EPR target fulfilment, processor tie-ups and the documentation that supports them.",
  },
  {
    title: "Multi-service coordination",
    text: "Where EPR sits alongside other approvals, one team coordinates them.",
  },
];

export const HOW_WE_HELP_NOT_PROMISE =
  "What we do not promise: guaranteed approval, guaranteed timelines, or any outcome that depends on a government department's decision. We control the quality and speed of the work on our side. We are direct with you about the rest.";

export const WHY_CHOOSE_ITEMS: string[] = [
  "Multi-waste-stream expertise. We work across all five EPR streams. Diversified businesses do not need separate consultants for e-waste, plastic and battery obligations.",
  "Experienced compliance team. Our team works across Indian regulatory compliance, so EPR is handled in the context of your wider obligations rather than in isolation.",
  "Accuracy before speed. Our review process exists because a rejected application costs more time than a careful one saves.",
  "Transparent pricing. Scope and charges in writing before work starts, with government fees shown separately.",
  "Dedicated point of contact. A named compliance manager who knows your file, not a rotating support queue.",
  "Direct communication. Status updates when something changes, and a straight answer when something is uncertain.",
  "Confidentiality. Your sales volumes, import data and supplier relationships are commercially sensitive. They are treated that way.",
  "Honest advice. If you do not need a registration, we will tell you. If a deadline is genuinely at risk, we will tell you that too.",
];

export const INDUSTRIES_ROWS: TableRow[] = [
  { industry: "Electronics and IT hardware", obligation: "E-waste EPR for notified equipment" },
  { industry: "Consumer appliances", obligation: "E-waste EPR for household and commercial appliances" },
  { industry: "Mobile and accessories", obligation: "E-waste EPR, often alongside plastic packaging EPR" },
  { industry: "Lighting and LED", obligation: "E-waste EPR for notified lighting products" },
  { industry: "Solar and renewable energy", obligation: "E-waste EPR for notified equipment" },
  { industry: "Battery and energy storage", obligation: "Battery waste EPR across notified battery types" },
  { industry: "Electric vehicles and components", obligation: "Battery waste EPR for EV batteries" },
  { industry: "FMCG and food brands", obligation: "Plastic packaging EPR" },
  { industry: "Pharmaceuticals and healthcare", obligation: "Plastic packaging EPR; e-waste EPR for electronic devices" },
  { industry: "Cosmetics and personal care", obligation: "Plastic packaging EPR" },
  { industry: "Packaging manufacturing", obligation: "Plastic packaging EPR as producer" },
  { industry: "E-commerce and D2C brands", obligation: "Plastic packaging EPR; e-waste EPR where applicable" },
  { industry: "Automotive and tyre", obligation: "Tyre EPR; battery EPR for automotive batteries" },
  { industry: "Lubricants and oil", obligation: "Used oil EPR" },
  { industry: "Waste processing", obligation: "Registration as recycler, dismantler or refurbisher" },
];

export const MISTAKES_ROWS: TableRow[] = [
  {
    mistake: "Assuming EPR does not apply because you do not manufacture",
    why: "Brand owners and importers are obligated even without a factory",
    avoid: "Get an applicability review before assuming",
  },
  {
    mistake: "Registering for one stream and stopping",
    why: "Each waste stream is a separate obligation",
    avoid: "Map every product and its packaging at the start",
  },
  {
    mistake: "Guessing product classification",
    why: "Wrong codes distort targets and trigger rejection",
    avoid: "Classify against the notified schedules with technical input",
  },
  {
    mistake: "Submitting inconsistent data across documents",
    why: "Contradictions are noticed and questioned",
    avoid: "Reconcile GST, import and sales data before filing",
  },
  {
    mistake: "Ignoring departmental queries",
    why: "Response windows close",
    avoid: "Assign clear ownership for query response",
  },
  {
    mistake: "Treating the certificate as the finish line",
    why: "Returns and targets continue throughout the term",
    avoid: "Set up a compliance calendar at approval",
  },
  {
    mistake: "Leaving renewal to the last week",
    why: "No room to fix a shortfall or a data gap",
    avoid: "Begin renewal review well before expiry",
  },
  {
    mistake: "Choosing a consultant on price alone",
    why: "Cheap filings that get rejected cost more overall",
    avoid: "Compare scope and accountability, not just the number",
  },
];

export const EXPERT_TIPS: string[] = [
  "Do the applicability review first. It costs little and prevents the two worst outcomes — registering for the wrong stream, or not registering at all.",
  "Build your product master before you file. Product name, category, code, quantity, period. Everything else depends on this.",
  "Reconcile your numbers across systems. Your application should agree with your GST filings and your import records.",
  "Keep one authorised signatory. Multiple signatories across documents create avoidable questions.",
  "Preserve your portal credentials properly. Losing access mid-application delays everything.",
  "Plan for targets from day one. Registration creates an obligation. Know how you will meet it before you need to.",
  "Diarise your returns immediately. Put the filing dates in a shared calendar at approval, not at year end.",
  "Handle changes through amendment. New address, new brand, new product — file the amendment when it happens.",
  "Keep your records for the full retention period. Inspections look backwards.",
  "Check the current guidelines before relying on anything. Including anything on this page. EPR rules change, and the latest official guidance always governs.",
];

export const STREAM_COMPARISON_INTRO =
  "Businesses often ask how the streams differ. The comparison below is based on the structure of the notified rules, not on any prediction of outcomes.";

export const STREAM_COMPARISON_ROWS: TableRow[] = [
  {
    aspect: "What triggers it",
    eWaste: "Notified electrical and electronic equipment",
    plastic: "Plastic packaging placed in the market",
    battery: "Notified batteries of any type",
  },
  {
    aspect: "Governing framework",
    eWaste: "E-Waste (Management) Rules, 2022",
    plastic: "Plastic Waste Management Rules and amendments",
    battery: "Battery Waste Management Rules, 2022",
  },
  {
    aspect: "Classification basis",
    eWaste: "EEE codes under the notified schedule",
    plastic: "Notified plastic packaging categories",
    battery: "Battery type and application",
  },
  {
    aspect: "Who registers",
    eWaste:
      "Producers, importers, brand owners, manufacturers, refurbishers, dismantlers, recyclers",
    plastic: "Producers, importers, brand owners",
    battery: "Producers, importers, brand owners",
  },
  {
    aspect: "Downstream partners",
    eWaste: "Authorised recyclers, dismantlers, refurbishers",
    plastic: "Registered plastic waste processors",
    battery: "Registered battery recyclers",
  },
  {
    aspect: "Common difficulty",
    eWaste: "Correct EEE code selection",
    plastic: "Correct packaging category split",
    battery: "Data across multiple battery types",
  },
];

export const STREAM_COMPARISON_NOTE =
  "Targets, fees and validity are set by the applicable guidelines for each stream and are revised from time to time. We confirm the current figures for your stream during the applicability review rather than publishing numbers that may date.";

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is EPR registration?",
    a: "It is a mandatory environmental compliance registration granted by CPCB, recording that a producer, importer or brand owner has accepted responsibility for the waste its products generate at end of life.",
  },
  {
    q: "Is this registration mandatory in India?",
    a: "Yes, where your product or packaging falls under a notified waste stream. It is a statutory requirement, not a voluntary certification.",
  },
  {
    q: "Who issues the EPR certificate?",
    a: "The Central Pollution Control Board, through the online EPR portal.",
  },
  {
    q: "Who needs it?",
    a: "Producers, importers and brand owners of notified products, together known as PIBOs, plus recyclers, dismantlers and refurbishers seeking processor registration.",
  },
  {
    q: "Do importers need it?",
    a: "Yes. Importers of notified products or packaging carry the same obligation as domestic producers.",
  },
  {
    q: "Do brand owners need it if they do not manufacture?",
    a: "Yes. Selling under your own brand creates the obligation, regardless of who manufactures.",
  },
  {
    q: "How many types are there?",
    a: "EPR is organised by waste stream — e-waste, plastic packaging, battery, tyre and used oil. Each is a separate registration.",
  },
  {
    q: "Can one registration cover all my products?",
    a: "Only within the same waste stream. A company dealing in more than one stream needs a separate registration for each.",
  },
  {
    q: "How much does EPR registration cost?",
    a: "It depends on your waste streams, entity structure, product portfolio and document condition, plus applicable government fees. We provide a written quotation before work begins.",
  },
  {
    q: "How long does EPR registration take?",
    a: "Processing time depends on the latest regulatory requirements and on departmental scrutiny. Accurate, complete first submissions move faster than files that draw repeated queries.",
  },
  {
    q: "What is the validity of an EPR certificate?",
    a: "It is issued for a defined period that varies by waste stream and current guidelines. We confirm the applicable position at the time of your registration.",
  },
  {
    q: "Is the certificate renewable?",
    a: "Yes. Renewal should be initiated before expiry, and involves a review of your compliance record.",
  },
  {
    q: "What documents are required?",
    a: "Entity registration proof, PAN, GST, IEC for importers, address proof, authorised signatory documents, product details and quantity data, with additional documents depending on the stream. We issue a tailored checklist.",
  },
  {
    q: "Do I need an IEC for EPR registration?",
    a: "An Importer Exporter Code is required where you import notified goods. It is not applicable to purely domestic producers.",
  },
  {
    q: "What is a PIBO?",
    a: "Producer, Importer and Brand Owner — the three obligated roles under India's EPR framework.",
  },
  {
    q: "What is an EPR target?",
    a: "The annual quantity of waste you are required to collect and channelise for recycling, calculated from your quantities placed in the market under the applicable rules.",
  },
  {
    q: "What happens if I miss my EPR target?",
    a: "Shortfalls can attract environmental compensation under the applicable rules. The specific basis and amount depend on the current official guidelines.",
  },
  {
    q: "What is environmental compensation?",
    a: "A financial levy imposed by the authorities for non-compliance with EPR obligations, including target shortfalls.",
  },
  {
    q: "What is an EPR recycling certificate?",
    a: "A certificate generated by a registered processor confirming the quantity of waste it has processed, which obligated entities use to demonstrate target fulfilment.",
  },
  {
    q: "Can I buy EPR credits to meet my target?",
    a: "Certificates generated by registered processors can be used to demonstrate fulfilment, subject to the mechanism and conditions under the current guidelines for your stream.",
  },
  {
    q: "What returns must I file after registration?",
    a: "Annual returns and, depending on the stream, quarterly returns through the portal. We handle both.",
  },
  {
    q: "What happens if my application is rejected?",
    a: "Rejections are usually procedural — classification errors, document gaps or unanswered queries. The file can normally be corrected and resubmitted. We review the reasons before refiling.",
  },
  {
    q: "Can I check my EPR application status?",
    a: "Yes, through the portal. We track it for you and update you when the status changes.",
  },
  {
    q: "Can I make changes after registration?",
    a: "Yes, through an amendment application — for new products, brands, addresses or facility changes. File these when the change happens.",
  },
  {
    q: "Is EPR registration the same as a pollution control board licence?",
    a: "No. EPR registration is a producer responsibility registration granted by CPCB. Consent to Operate is a separate state-level approval. Many businesses need both.",
  },
  {
    q: "Do e-commerce sellers need EPR registration?",
    a: "If you import, manufacture or sell under your own brand, yes. Marketplaces also commonly ask sellers for compliance documentation.",
  },
  {
    q: "Is EPR required for lithium-ion batteries?",
    a: "Batteries notified under the Battery Waste Management Rules, 2022, including lithium-ion, fall within the EPR framework.",
  },
  {
    q: "Do MSMEs and startups need it?",
    a: "Obligation follows your role in the supply chain, not your size. A small importer can be obligated in the same way as a large one.",
  },
  {
    q: "Do you work outside Delhi NCR?",
    a: "Yes. We work with clients across India, and the process is filed online.",
  },
  {
    q: "Can I apply myself instead of using a consultant?",
    a: "You can. The application is online and open to obligated entities. Most businesses use support because classification, target calculation and query handling need regulatory familiarity, and errors are expensive to unwind.",
  },
];

export const GET_STARTED_PARAGRAPHS: string[] = [
  "If your business manufactures, imports or brands products covered by India's waste management rules, EPR registration is a legal obligation — and the sooner it is in place, the more manageable your targets and record-keeping will be.",
  "Our team will review your position, confirm which waste streams apply, and set out exactly what the process involves for your business before you commit to anything.",
];

export const GET_STARTED_TAGLINE =
  "Ornate Quality Services — regulatory compliance and certification support for producers, importers and brand owners across India.";

export const INTERNAL_LINKS: InternalLink[] = [
  { label: "E-Waste EPR Registration", href: "/services/epr-registration#products-covered", group: "waste-stream" },
  { label: "Plastic Waste EPR Registration", href: "/services/epr-registration#products-covered", group: "waste-stream" },
  { label: "Battery Waste EPR Registration", href: "/services/epr-registration#products-covered", group: "waste-stream" },
  { label: "Tyre Waste EPR", href: "/services/epr-registration#products-covered", group: "waste-stream" },
  { label: "Used Oil EPR", href: "/services/epr-registration#products-covered", group: "waste-stream" },
  { label: "BIS CRS Registration", href: "/services/bis-crs-registration", group: "related-service" },
  { label: "BIS-ISI Mark Certification", href: "/services/bis-isi-mark-certification", group: "related-service" },
  { label: "BIS Certification", href: "/services/bis-isi-mark-certification", group: "related-service" },
  { label: "RoHS Compliance", href: "/services/rohs-certification", group: "related-service" },
  { label: "LMPC Registration", href: "/services/lmpc-registration", group: "related-service" },
  { label: "IEC Registration", href: "/services/iec-registration", group: "related-service" },
  { label: "WPC-ETA Approval", href: "/services/wpc-eta-approval", group: "related-service" },
  { label: "TEC Approval", href: "/services/tec-certification", group: "related-service" },
  { label: "BEE Registration", href: "/services/bee-certification", group: "related-service" },
  { label: "CDSCO Registration", href: "/services/cdsco-registration", group: "related-service" },
  { label: "FSSAI Registration", href: "/services/fssai-registration", group: "related-service" },
  { label: "GeM Registration", href: "/services/gem-registration", group: "related-service" },
  { label: "Trademark Registration", href: "/services/trademark-registration", group: "related-service" },
  { label: "ISO Certification", href: "/services/iso-certification", group: "related-service" },
  { label: "NABL Lab Testing Services", href: "/services/nabl-accreditation", group: "related-service" },
  { label: "Third-Party Inspection", href: "/services/third-party-inspection", group: "related-service" },
  { label: "Product Inspection & Quality Monitoring", href: "/services/third-party-inspection", group: "related-service" },
];

export const INTERNAL_LINK_GROUPS: InternalLinkGroup[] = [
  {
    title: "To waste-stream sub-pages (from the Waste Streams Covered section):",
    items: [
      { label: "E-Waste EPR Registration", href: "/services/epr-registration#products-covered" },
      { label: "Plastic Waste EPR Registration", href: "/services/epr-registration#products-covered" },
      { label: "Battery Waste EPR Registration", href: "/services/epr-registration#products-covered" },
      { label: "Tyre Waste EPR", href: "/services/epr-registration#products-covered" },
      { label: "Used Oil EPR", href: "/services/epr-registration#products-covered" },
    ],
  },
  {
    title: "To related compliance services (from Industries Served and How We Help):",
    items: [
      {
        label: "BIS CRS Registration",
        href: "/services/bis-crs-registration",
        description: "electronics importers who also need product certification",
      },
      {
        label: "BIS-ISI Mark Certification and BIS Certification",
        href: "/services/bis-isi-mark-certification",
        description: "domestic manufacturers of notified products",
      },
      {
        label: "RoHS Compliance",
        href: "/services/rohs-certification",
        description: "hazardous substance restrictions connected to the e-waste framework",
      },
      {
        label: "LMPC Registration",
        href: "/services/lmpc-registration",
        description: "packaged commodity declarations alongside plastic packaging EPR",
      },
      {
        label: "IEC Registration",
        href: "/services/iec-registration",
        description: "prerequisite document for importer applicants",
      },
      {
        label: "WPC-ETA Approval and TEC Approval",
        href: "/services/wpc-eta-approval",
        description: "wireless and telecom equipment",
      },
      {
        label: "BEE Registration",
        href: "/services/bee-certification",
        description: "star-labelled appliances",
      },
      {
        label: "CDSCO Registration",
        href: "/services/cdsco-registration",
        description: "electronic medical devices",
      },
      {
        label: "FSSAI Registration",
        href: "/services/fssai-registration",
        description: "food brands with plastic packaging obligations",
      },
      {
        label: "GeM Registration",
        href: "/services/gem-registration",
        description: "suppliers to government procurement",
      },
      {
        label: "Trademark Registration",
        href: "/services/trademark-registration",
        description: "brand owners protecting the brand they register under",
      },
      {
        label: "ISO Certification",
        href: "/services/iso-certification",
        description: "environmental management systems",
      },
      {
        label: "NABL Lab Testing Services",
        href: "/services/nabl-accreditation",
        description: "testing evidence supporting compliance",
      },
      {
        label: "Third-Party Inspection and Product Inspection & Quality Monitoring",
        href: "/services/third-party-inspection",
        description: "supply chain verification",
      },
      {
        label: "Technical Documentation & Compliance Support",
        href: "/contact",
        description: "dossier preparation across filings",
      },
      {
        label: "Compliance Audit Services",
        href: "/services/audit-services",
        description: "periodic EPR and environmental compliance review",
      },
    ],
  },
  {
    title: "To supporting blog content:",
    items: [
      {
        label: "Documents checklists for e-waste, plastic and battery streams",
        href: "/blog",
      },
      { label: "EPR annual return filing guide", href: "/blog" },
      { label: "How EPR targets are calculated for producers", href: "/blog" },
      {
        label: "Common mistakes in EPR applications and how to avoid them",
        href: "/blog",
      },
      { label: "How to choose an EPR consultant", href: "/blog" },
    ],
  },
];

/** @deprecated Use WASTE_STREAMS_ROWS — kept for backward compatibility during page migration */
export const EPR_CATEGORY_ROWS = WASTE_STREAMS_ROWS.map((row) => ({
  category: row.wasteStream,
  whoMustRegister: row.whoMustRegister,
  products: row.ourService,
}));

/** @deprecated Use new violation structure if needed — kept for backward compatibility */
export const PENALTIES_ROWS: TableRow[] = [];
