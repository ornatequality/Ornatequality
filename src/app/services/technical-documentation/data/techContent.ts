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

export const TECH_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is", label: "What Is Technical Documentation & Compliance Support?" },
  { id: "why-important", label: "Why Technical Documentation Matters" },
  { id: "who-needs", label: "Who Needs This Service?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "service-includes", label: "What Our Service Includes" },
  { id: "schemes", label: "Certification Schemes We Prepare Documentation For" },
  { id: "eligibility", label: "Eligibility" },
  { id: "inputs", label: "What We Need From You" },
  { id: "process", label: "Our Documentation Process" },
  { id: "timeline", label: "Timeline" },
  { id: "cost", label: "What Affects the Cost" },
  { id: "validity", label: "Validity and When Documents Expire" },
  { id: "keeping-current", label: "Keeping Documentation Current" },
  { id: "challenges", label: "Common Challenges" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "scope-split", label: "What We Handle and What Stays With You" },
  { id: "how-we-work", label: "How We Work" },
  { id: "industries", label: "Industries We Support" },
  { id: "locations", label: "Where We Work" },
  { id: "how-to-start", label: "How to Start" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Let's Get Your Documentation in Order" },
];

export const BANNER_TITLE = "Technical Documentation & Compliance Support";

export const BANNER_SUBTITLE =
  "Certification applications rarely fail because a product is unsafe. They fail because the paperwork behind the product is incomplete, inconsistent or in the wrong format. Our technical documentation and compliance support service exists to close that gap.";

export const BANNER_DESCRIPTION =
  "Ornate Quality Service Pvt Ltd provides technical documentation services in India for manufacturers, importers, exporters and brand owners. We build the technical file, the declaration of conformity, the manuals, the labelling checks and the submission dossier that sit behind a certification application — and we keep them audit ready long after approval.";

export const BANNER_LEAD =
  "Share product details for a technical file and we will tell you exactly what is missing before you spend anything on testing.";

export const KEY_HIGHLIGHTS: string[] = [
  "Complete product technical file preparation, from bill of materials to test report compilation",
  "Declaration of conformity preparation, drafting and review against the applicable standard",
  "User manual, labelling and packaging compliance review before your artwork goes to print",
  "Regulatory submission support services, including query and deficiency reply drafting",
  "End to end compliance documentation services across BIS, CDSCO, BEE, WPC, EPR and more",
  "A dedicated project manager for documentation, working under a signed NDA",
];

export const INTRO_PARAGRAPHS: string[] = [
  "Every certification, registration and approval in India rests on a set of documents. The authority does not visit your factory first. It reads your file first.",
  "That file has to prove three things: what the product is, how it is made, and how it meets the standard it claims to meet. When any one of those threads is broken — a missing component approval, a test report that covers a different model, a manual that contradicts the rating plate — the application stops moving.",
  "Compliance documentation services fix that problem at the source. Instead of assembling documents in a rush after an application is filed, you build a complete, consistent file first and submit once.",
  "This matters at different moments for different businesses. A manufacturer needs it when a product falls under a mandatory scheme. An importer needs it before the first consignment lands. An exporter needs it when an overseas buyer asks for a technical file. A brand owner needs it the moment their name goes on the label, because the responsibility follows the name.",
];

export const INTRO_EXPECT =
  "What you can expect from this page: a clear explanation of what technical documentation and compliance support covers, who needs it, what we need from you, how the work runs, and what affects the cost. No fee tables, no promised approval dates — those depend on your product, your scheme and the latest official government guidelines.";

export const WHAT_IS_PARAGRAPHS: string[] = [
  "Technical documentation and compliance support is a professional service that prepares, reviews and maintains the documents a business needs to demonstrate that its product complies with an applicable regulation or standard.",
  "It is not one document. It is a structured set of evidence, usually built around a core technical file, supported by test reports, declarations, manuals, labelling artwork, process records and application forms.",
];

export const WHAT_IS_ITEMS: { title: string; text: string }[] = [
  {
    title: "The purpose of the service",
    text: "The purpose is simple: make the file say clearly and provably what your product is. A good technical file lets a reviewer — whether that is a certification officer, a factory inspector, an overseas buyer or an e-commerce marketplace compliance team — answer their questions without writing back to you. Every question they have to ask adds a cycle. Every cycle adds delay.",
  },
  {
    title: "What this service is not",
    text: "We are not a testing laboratory and we do not issue test reports or certificates. We do not approve products, and no consultant can. What we do is prepare the documentation, coordinate with accredited laboratories and the certification authority, and present your evidence in the form the process expects.",
  },
  {
    title: "Why it exists as a separate discipline",
    text: "In most Indian manufacturing businesses, documentation lands on whoever is least busy. A production engineer writes the process description. A purchase executive lists the components. Marketing supplies the manual. Nobody owns the file as a whole, so nobody notices that the three versions contradict each other. Regulatory documentation services solve an ownership problem as much as a writing problem. Standards based documentation preparation means one person holds the whole file, checks it against one standard, and keeps it consistent as the product changes.",
  },
];

export const WHY_ITEMS: { title: string; text: string }[] = [
  {
    title: "It decides how fast your application moves",
    text: "Document scrutiny is usually the first real checkpoint in any certification process. A file that arrives complete moves to the next stage. A file with gaps generates a query letter, and the clock effectively restarts while you answer it.",
  },
  {
    title: "It protects market access",
    text: "Mandatory schemes are the obvious case: without compliant documentation there is no licence, and without a licence the product cannot legally be sold in that category. But documentation gates commercial access too. Marketplaces ask sellers for compliance documents before listing. Government buyers ask before onboarding. Overseas buyers ask before the first purchase order. A technical file is often the deciding factor in whether a deal closes.",
  },
  {
    title: "It reduces risk after approval",
    text: "Approval is not the end of the documentation obligation. Market surveillance, complaint handling and factory audits all look backwards at records. Compliance record keeping is what turns a one-time approval into a defensible position years later.",
  },
  {
    title: "It builds trust with everyone who reads it",
    text: "A clean, well-organised file signals a serious manufacturer. Buyers notice. Auditors notice. So do certification officers, who see hundreds of files and can tell within minutes which businesses take compliance seriously.",
  },
  {
    title: "It saves money that is easy to overlook",
    text: 'Re-testing because a report did not cover the right model. Re-printing labels because a mandatory declaration was missing. Re-submitting because an undertaking was on the wrong letterhead. None of these costs appear in a budget line called "documentation", but all of them are documentation failures.',
  },
];

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Manufacturers",
    text: "Domestic manufacturers carry the primary responsibility for demonstrating conformity. This covers large plants and small units alike — technical documentation support for small manufacturers is often more valuable, because smaller businesses rarely have a dedicated compliance function.",
  },
  {
    title: "Importers",
    text: "Compliance documentation help for first time importers is one of our most common engagements. Foreign supplier documents are usually complete for their own market and incomplete for India. Import documentation compliance support bridges that gap, including translation support where the source documents are not in English.",
  },
  {
    title: "Exporters",
    text: "Export documentation compliance service work runs in the opposite direction. Your buyer's market has its own expectations, and technical documentation services for exporters to EU markets look different from documentation prepared for Gulf or US buyers.",
  },
  {
    title: "Brand owners and private label businesses",
    text: "If your brand is on the product, the compliance responsibility is yours even when someone else manufactures it. Private label product documentation support gives brand owners a file they control rather than one they inherit.",
  },
  {
    title: "Contract manufacturers and OEM suppliers",
    text: "Technical documentation for contract manufacturers has an extra dimension: the file often has to serve several customers, each with different naming, labelling and confidentiality requirements.",
  },
  {
    title: "Traders, MSMEs and growing brands",
    text: "Compliance documentation for trading companies in India, technical documentation service for MSME exporters, and support for growing brands all share one feature — the volume of compliance work has outgrown the team, but not yet justified a full-time compliance department.",
  },
  {
    title: "E-commerce and marketplace sellers",
    text: "Marketplace compliance documentation support has become a distinct need. Platforms increasingly ask for the same evidence a regulator would, and listings are suspended when sellers cannot produce it quickly.",
  },
  {
    title: "Foreign manufacturers",
    text: "Technical documentation support for foreign manufacturers covers the specific paperwork that applies when the manufacturing site is outside India and the product is destined for the Indian market.",
  },
];

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "One complete file instead of scattered documents",
    text: "Everything a reviewer needs, organised the way the process expects, held in one place with one version history.",
  },
  {
    title: "Fewer submission cycles",
    text: "Most rejections trace back to gaps that a pre-submission review would have caught. Catching them before filing is dramatically cheaper than answering a deficiency letter afterwards.",
  },
  {
    title: "Audit ready documentation delivery",
    text: "Your file stays ready for a factory inspection or a customer audit, not just for the day you submitted it.",
  },
  {
    title: "Access to markets that ask questions",
    text: "Serious buyers, marketplaces and government purchasers all ask for documentation. Having it ready turns a two-week scramble into a same-day reply.",
  },
  {
    title: "Consistency across a product range",
    text: "Technical documentation services for multiple products keep naming, specifications and declarations aligned, so a reviewer checking two models does not find two different stories.",
  },
  {
    title: "Capacity without headcount",
    text: "A technical documentation service without an in-house team gives you a compliance function when you need one, without a permanent salary line.",
  },
  {
    title: "Risk reduction",
    text: "Legal compliance documentation support means someone is actively checking whether your evidence still matches your product, your standard and your label.",
  },
];

export const SERVICE_INCLUDE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Technical file preparation and compilation",
    text: "Technical file compilation service work covers the full structure: product description, specifications, design and manufacturing file content, schematics where applicable, bill of materials documentation support, critical components list preparation, and the test evidence that ties it together. For export-facing work we also prepare technical construction file content in the format the destination market expects.",
  },
  {
    title: "Declaration of conformity",
    text: "Declaration of conformity preparation, drafting and verification — including self declaration of conformity support where the scheme allows it, and checking that every claim on the declaration is actually backed by evidence in the file.",
  },
  {
    title: "Manuals and product literature",
    text: "Product manual writing service work in India, instruction manual compliance service reviews, safety instructions documentation, installation and maintenance content, warranty and after sales documentation support, and multilingual manual compliance support where more than one language is required.",
  },
  {
    title: "Labelling and packaging",
    text: "Product labelling compliance service work covers label artwork compliance check before printing, packaging compliance documentation, and technical documentation support for Hindi labelling where it applies to your product category.",
  },
  {
    title: "Test reports and laboratory coordination",
    text: "Test report compilation service work, lab test report documentation support, and coordination with accredited laboratories so the reports you commission actually cover the models and clauses your file needs. Accredited laboratory coordinated documentation avoids the most expensive documentation mistake there is — paying for the wrong test.",
  },
  {
    title: "Quality and factory documentation",
    text: "Quality manual preparation service work, standard operating procedure documentation service, process flow chart documentation service, factory documentation support, and product traceability documentation service for businesses that need to show material-to-dispatch linkage.",
  },
  {
    title: "Risk and safety documentation",
    text: "Risk assessment documentation service and risk analysis file preparation, structured so the hazards you identified and the controls you applied are both visible in the file.",
  },
  {
    title: "Review, audit and gap work",
    text: "Technical file audit service and technical file gap assessment for existing files, documentation readiness assessment before an inspection, and a compliance gap analysis documentation report that tells you plainly what is missing.",
  },
  {
    title: "Submission and regulatory interface",
    text: "Application form filling support for certification, licence application documentation support, document scrutiny support, query reply drafting, and deficiency reply preparation service work when the authority comes back with observations.",
  },
  {
    title: "Systems and handover",
    text: "Document control system setup, compliance document templates service, compliance record keeping service, technical file version control support, and technical documentation handover support to client so your team can maintain the file after we step back.",
  },
];

export const SERVICE_NOTE =
  "Please note: We prepare, organise and verify documentation. We do not issue certificates, test reports or approvals, and we never state or imply that an approval is guaranteed.";

export const SCHEMES_INTRO =
  "This service is scheme-agnostic. The documentation logic is similar across schemes; the specific evidence set is not. The table below shows where our documentation support is most often used.";

export const SCHEME_ROWS: TableRow[] = [
  {
    scheme: "BIS certification",
    focus: "Technical documentation for BIS certification, document preparation for BIS licence application, factory and process records",
    who: "Manufacturers and foreign manufacturers",
  },
  {
    scheme: "BIS licence applications",
    focus: "Application documentation, critical components list, test report mapping",
    who: "Manufacturers seeking a BIS licence",
  },
  {
    scheme: "CE marking",
    focus: "Technical file for CE marking India, conformity documentation for the destination market",
    who: "Exporters to EU markets",
  },
  {
    scheme: "CDSCO",
    focus: "CDSCO dossier preparation support, dossier preparation help for CDSCO import licence",
    who: "Medical device importers and manufacturers",
  },
  {
    scheme: "BEE registration",
    focus: "BEE documentation support service, product data and label artwork records",
    who: "Appliance manufacturers and importers",
  },
  {
    scheme: "WPC / ETA",
    focus: "WPC ETA documentation support, product and technical specification records",
    who: "Wireless and RF product businesses",
  },
  {
    scheme: "EPR",
    focus: "EPR documentation support service, EPR annual return documentation support",
    who: "Producers, importers and brand owners",
  },
  {
    scheme: "FSSAI",
    focus: "FSSAI documentation support service, product and labelling records",
    who: "Food and packaging businesses",
  },
  {
    scheme: "ISO management systems",
    focus: "ISO documentation support service, manuals, procedures and records",
    who: "Any organisation building a management system",
  },
  {
    scheme: "Quality Control Orders",
    focus: "Documentation support for quality control order compliance, including textile QCO compliance and footwear QCO documentation",
    who: "Manufacturers and importers in notified categories",
  },
];

export const SCHEMES_NOTE =
  "Applicability, scope and evidence requirements differ by product and change over time. Requirements may vary depending on the latest official regulatory guidelines, and the scheme that applies to your product should always be confirmed against current official notifications before you act on it.";

export const SCHEMES_TABLE_NOTE =
  "Please note: This table is a navigation aid showing where documentation support is commonly needed. It is not a determination that a particular scheme applies to your product.";

export const ELIGIBILITY_PARAGRAPHS: string[] = [
  "There is no eligibility barrier to engaging documentation support. Any business that manufactures, imports, exports, brands or trades a product can use it.",
  "What does vary is whether a particular certification or registration applies to your product — and that is a separate question with a real answer. Applicability depends on the product category, its intended use, whether it falls under a notified order, and the market it is sold into.",
  "We handle that question first. Before any file is built, we confirm what you are actually preparing for. Building a well-organised file for the wrong scheme helps nobody.",
];

export const ELIGIBILITY_LEAD = "Useful to know before you start:";

export const ELIGIBILITY_ITEMS: string[] = [
  "Documentation support works best when the product design is settled. A file built around a moving target has to be rebuilt.",
  "If a previous consultant or an internal team started the file, we can take it over. Technical file gap assessment is usually faster and cheaper than starting again.",
  "If your application has already been rejected or queried, that is not a barrier. It is often the clearest brief we can get, because the authority has told us exactly what was missing.",
  "Where the product is manufactured outside India, we will need the overseas manufacturer's cooperation for parts of the file. We will tell you upfront which parts.",
];

export const INPUTS_INTRO =
  "The list below is what we typically ask for at the start of a documentation project. It is not a statutory list, and it is not the list of documents the authority will finally require — that depends on your scheme, product and the latest official government guidelines.";

export const INPUT_ROWS: TableRow[] = [
  {
    input: "Product description and models covered",
    why: "Defines the scope of the file and whether one file can cover a range",
    required: "Mandatory",
    notes: "Include model numbers, ratings and variants",
  },
  {
    input: "Technical specifications and datasheets",
    why: "Forms the core technical content of the file",
    required: "Mandatory",
    notes: "Draft versions are fine; we finalise the format",
  },
  {
    input: "Bill of materials",
    why: "Identifies components, materials and suppliers",
    required: "Mandatory",
    notes: "We prepare or restructure this if you do not have one",
  },
  {
    input: "Critical component details",
    why: "Links safety-relevant components to their approvals",
    required: "Usually mandatory",
    notes: "Applies mainly to electrical and electronic products",
  },
  {
    input: "Existing test reports",
    why: "Establishes what evidence you already hold",
    required: "If available",
    notes: "We check coverage before you commission more testing",
  },
  {
    input: "Drawings, schematics or layouts",
    why: "Supports the design and manufacturing file",
    required: "Product dependent",
    notes: "Circuit diagrams, PCB layouts, assembly drawings",
  },
  {
    input: "Manufacturing process description",
    why: "Shows how the product is consistently produced",
    required: "Usually required",
    notes: "We can build this from a factory walkthrough",
  },
  {
    input: "Existing manuals and label artwork",
    why: "Basis for the compliance review",
    required: "If available",
    notes: "Editable files save considerable time",
  },
  {
    input: "Company registration documents",
    why: "Establishes the applicant's identity",
    required: "Mandatory",
    notes: "Exact set depends on the scheme and authority",
  },
  {
    input: "Factory details and records",
    why: "Supports inspection readiness",
    required: "Scheme dependent",
    notes: "Layout, equipment list, calibration and quality records",
  },
  {
    input: "Previous correspondence with the authority",
    why: "Tells us what has already been asked and answered",
    required: "If applicable",
    notes: "Query letters and deficiency notices are especially useful",
  },
];

export const INPUTS_CLOSING =
  "If something on this list does not exist yet, that is normal. A large part of our work is creating these documents, not just collecting them.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Capture",
    color: "#0b57b5",
    title: "1. Requirement capture",
    text: "We start with the product, the market and the scheme. What is it, where is it sold, and what is it being prepared for? This is also where we confirm whether the scheme you named is the one that actually applies.",
  },
  {
    step: "02",
    label: "Gaps",
    color: "#2563eb",
    title: "2. Gap analysis",
    text: "We review what you already hold against what the file needs. You receive a compliance gap analysis report listing what exists, what is incomplete and what is missing entirely — before any drafting begins.",
  },
  {
    step: "03",
    label: "Evidence",
    color: "#0891b2",
    title: "3. Evidence planning",
    text: "Where testing is needed, we map exactly which tests cover which models and clauses, then coordinate with accredited laboratories so the reports you pay for are the reports your file can use.",
  },
  {
    step: "04",
    label: "Draft",
    color: "#059669",
    title: "4. Drafting and compilation",
    text: "We write and assemble the file: technical content, declarations, manuals, labelling review, process and quality records. Everything is written against one standard and one product description so nothing contradicts anything else.",
  },
  {
    step: "05",
    label: "Review",
    color: "#d97706",
    title: "5. Internal quality check",
    text: "A second reviewer who did not write the file checks it. Expert reviewed technical file work catches the errors that the author has stopped being able to see.",
  },
  {
    step: "06",
    label: "Submit",
    color: "#ea580c",
    title: "6. Submission support",
    text: "We prepare application forms, covering documents and the submission set in the format the authority expects, and support you through the document scrutiny stage.",
  },
  {
    step: "07",
    label: "Queries",
    color: "#7c3aed",
    title: "7. Query and deficiency handling",
    text: "If observations come back, we draft the reply and rebuild whatever part of the file needs rebuilding. This is included in the engagement, not treated as a new project.",
  },
  {
    step: "08",
    label: "Handover",
    color: "#0b57b5",
    title: "8. Handover and maintenance",
    text: "You receive the complete documentation set in editable format, along with a version-controlled structure your team can maintain. Ongoing support is optional — see the renewal section below.",
  },
];

export const PROCESS_NOTE =
  "Get a compliance gap analysis done first. It is the fastest way to find out how much work your file actually needs.";

export const TIMELINE_PARAGRAPHS: string[] = [
  "We do not publish fixed turnaround days, and you should be cautious of anyone who does.",
  "Documentation timelines are driven by three things we do not control: how complete your existing inputs are, whether new testing is required, and how the reviewing authority responds. A file for a single, well-documented model with valid test reports moves quickly. A file for a ten-model range with no bill of materials and expired reports does not.",
  "What we can commit to is sequence and visibility. After the gap analysis you receive an indicative schedule with the stages laid out, the inputs we need from you at each stage, and where the dependencies sit. If you need technical documentation services with fast turnaround for a shipment deadline or an audit date, tell us the date at the start — we will tell you honestly whether it is achievable and what would have to be prioritised.",
  "Official processing times at the authority's end depend on the latest regulatory requirements and are outside any consultant's control.",
];

export const COST_INTRO =
  "We do not publish standard prices, because documentation scope varies enormously between a single-model review and a multi-product technical file programme. What we can explain is what drives the number.";

export const COST_ITEMS: { title: string; text: string }[] = [
  {
    title: "Number of products and models",
    text: "A single product costs less than a range. Technical documentation services for a product range are usually priced as a programme rather than per file, and bulk technical file preparation work is more economical per product.",
  },
  {
    title: "Starting condition",
    text: "A file that needs review costs less than a file that needs building. This is why we run the gap analysis first — it converts an unknown into a defined scope.",
  },
  {
    title: "Number of schemes",
    text: "Documentation for one certification is simpler than documentation that has to satisfy BIS, EPR and an overseas buyer at the same time.",
  },
  {
    title: "Depth of factory documentation",
    text: "Quality manuals, SOPs and process records add scope, particularly for a first-time system.",
  },
  {
    title: "Testing coordination",
    text: "We do not charge you laboratory fees — those are billed by the laboratory directly — but coordination effort varies with the number of samples and reports involved.",
  },
  {
    title: "Language requirements",
    text: "Multilingual manuals and Hindi labelling add translation and review work.",
  },
  {
    title: "Engagement model",
    text: "One-time project work is priced differently from a monthly compliance documentation support plan or an annual retainer.",
  },
];

export const COST_CLOSING =
  "You will always receive a written scope and a technical documentation project quotation before any work starts. Government fees, laboratory charges and statutory costs, where they apply, are separate and payable to those bodies directly — we never mark them up or estimate them without a current source.";

export const VALIDITY_PARAGRAPHS: string[] = [
  "A technical file does not have its own expiry date. It stays valid for as long as it accurately describes the product, references the correct standard, and is supported by evidence that is still current.",
  "Individual documents inside the file are different. Test reports, calibration certificates and licences each have their own validity, and a file can quietly become invalid because one input inside it lapsed.",
];

export const VALIDITY_LEAD = "The practical rule: your file is valid until something changes. Anything on this list should trigger a review.";

export const VALIDITY_ITEMS: string[] = [
  'A design, component or supplier change, including a "minor" component substitution',
  "A change in the applicable standard or a new notification affecting your product category",
  "A new model or variant added to an existing range",
  "A change in the product's name, branding, packaging or labelling",
  "A change of manufacturing site or a significant process change",
  "Expiry of a test report, calibration record or supporting licence",
  "A licence renewal or scope expansion application",
  "An observation raised during an audit, inspection or market complaint",
];

export const VALIDITY_NOTE =
  "Validity of a specific certificate or registration is determined by the issuing authority and should be verified against current official guidelines for your scheme.";

export const CURRENT_INTRO =
  "Most documentation problems we are called in to fix were created by neglect rather than error. The file was correct when it was submitted, and then the product moved on without it.";

export const CURRENT_LEAD = "Three practical approaches work:";

export const CURRENT_ITEMS: { title: string; text: string }[] = [
  {
    title: "Version control",
    text: "Technical file version control support means every document carries a version and a date, superseded versions are archived rather than deleted, and there is never a question about which copy is current.",
  },
  {
    title: "Scheduled review",
    text: "A compliance documentation annual maintenance arrangement reviews the whole file on a fixed cycle — before audit season, before renewals, and whenever a standard changes.",
  },
  {
    title: "Ongoing support",
    text: "A technical documentation retainer service in India or a monthly compliance documentation support plan suits businesses with a steady flow of new models, new markets or recurring returns such as EPR annual filings. You get a long term compliance documentation partner instead of a fresh scramble each time.",
  },
];

export const CURRENT_CLOSING =
  "Compliance documentation archiving service work matters more than it sounds. Records you can no longer find are records you do not have, and retention obligations usually outlast the people who created the documents.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Documents exist but do not agree with each other",
    text: "The rating plate says one thing, the manual says another, the test report covers a third configuration. Reviewers find these contradictions quickly.",
  },
  {
    title: "Test reports do not cover what the file claims",
    text: "A report for one model used to support a range, or a report against a superseded clause. This is the single most common cause of re-testing.",
  },
  {
    title: "The bill of materials is a purchase document, not a compliance document",
    text: "It lists what was bought, not what matters for safety, and critical components are not identified as such.",
  },
  {
    title: "Foreign supplier documents do not fit the Indian format",
    text: "The content may be complete, but the structure, language and declarations are built for another market.",
  },
  {
    title: "Labels are finalised before the compliance review",
    text: "Artwork goes to print, then someone notices a mandatory declaration is missing. Reprinting is expensive and slow.",
  },
  {
    title: "Nobody owns the file",
    text: "Three departments hold three parts of it and no one holds the whole. When a query letter arrives, the first week goes on finding documents.",
  },
  {
    title: "Query replies are written defensively",
    text: "A reply that argues rather than supplies evidence usually generates a second query.",
  },
  {
    title: "The file stops being maintained after approval",
    text: "It was accurate on submission day and has not been touched since, while the product has changed twice.",
  },
];

export const MISTAKES_ITEMS: string[] = [
  "Starting testing before scoping the file. Decide what the file must prove, then test. Testing first and documenting later is how businesses pay twice.",
  "Treating the declaration of conformity as a formality. It is a signed claim. Every statement on it should be traceable to evidence inside the file.",
  "Copying a competitor's manual. Beyond the copyright issue, their manual describes their product. Yours will contain statements you cannot support.",
  "Leaving labelling to the packaging vendor. Vendors design for print, not for compliance. The review belongs with whoever owns the file.",
  'Submitting an incomplete file to "start the clock". It does not start the clock. It starts a query cycle.',
  "Not keeping copies of what was submitted. When a query arrives months later, you need to know exactly what the authority is looking at.",
  "Assuming one file covers every variant. Grouping models into a family is a documented justification, not an assumption.",
  "Ignoring post-approval obligations. Records, complaints and surveillance responses all depend on documentation that has to be maintained.",
];

export const TIPS_ITEMS: string[] = [
  "Run a gap analysis before you budget. You cannot price documentation work you have not scoped.",
  "Keep one master product description and reuse it everywhere — file, manual, label, application. Most inconsistencies start with two descriptions.",
  "Ask your laboratory to confirm, in writing, which models and clauses each report covers before you accept it.",
  "Photograph your label artwork against the requirement list before the print run, not after.",
  "Keep a simple document register: document name, version, date, owner, next review. A spreadsheet is enough.",
  "When a query letter arrives, answer exactly what was asked, supply the evidence, and resist the urge to explain.",
  "Build the file so a stranger can follow it. The reviewer has no context about your product and no reason to hunt.",
  "If you use contract manufacturers, agree at contract stage who owns and maintains the technical file.",
];

export const SCOPE_INTRO =
  "Clear scope prevents the most common friction in documentation projects. This is how we normally divide the work.";

export const SCOPE_ROWS: TableRow[] = [
  {
    area: "Product and technical inputs",
    ornate: "Structuring, drafting, formatting and verification",
    you: "Supplying accurate product data and design information",
  },
  {
    area: "Bill of materials and components",
    ornate: "Preparing and restructuring into compliance format",
    you: "Confirming actual components and suppliers used",
  },
  {
    area: "Testing",
    ornate: "Planning coverage, coordinating with accredited laboratories",
    you: "Commissioning samples and paying laboratory charges directly",
  },
  {
    area: "Manuals and labelling",
    ornate: "Writing, reviewing and compliance checking",
    you: "Final approval, print and artwork production",
  },
  {
    area: "Factory and quality records",
    ornate: "Preparing manuals, SOPs, formats and registers",
    you: "Operating the system and maintaining live records",
  },
  {
    area: "Application and submission",
    ornate: "Preparing forms, covering documents and the submission set",
    you: "Signing, authorising and making statutory payments",
  },
  {
    area: "Queries and deficiencies",
    ornate: "Drafting replies and rebuilding affected file sections",
    you: "Providing any new factual information required",
  },
  {
    area: "Certificates and approvals",
    ornate: "Not issued by us",
    you: "Granted solely by the competent authority",
  },
  {
    area: "File maintenance after handover",
    ornate: "Available as an ongoing arrangement",
    you: "Your team, if you prefer to maintain it internally",
  },
];

export const HOW_WE_WORK_INTRO =
  "We are a technical documentation and certification support company, not a broker. The work is done by our in-house compliance and technical team, and the person who writes your file is someone you can speak to directly.";

export const HOW_WE_WORK_ITEMS: { title: string; text: string }[] = [
  {
    title: "A single point of contact",
    text: "Every project gets a dedicated project manager for documentation. You are not re-explaining your product to a new person each time.",
  },
  {
    title: "Confidentiality by default",
    text: "Product data, drawings and supplier details are commercially sensitive. Confidential documentation handling is standard, and we work under a signed NDA.",
  },
  {
    title: "Transparent scope and process",
    text: "You get a written scope before work starts, a documented process while it runs, and a clear statement of what is included. A transparent documentation process means no surprise additions halfway through.",
  },
  {
    title: "Independent quality checking",
    text: "Every file is reviewed by someone who did not write it before it reaches you. Quality checked compliance documents are the point of the service, not an upgrade.",
  },
  {
    title: "Honest positioning",
    text: "We tell you when a scheme does not apply, when your existing file is good enough, and when the honest answer is that a deadline is not achievable. Consultants who never say no are not doing you a favour.",
  },
  {
    title: "Experience across sectors",
    text: "Our documentation work spans electrical and electronic products, food and packaging, chemicals, textiles, footwear, furniture, toys, medical devices and industrial machinery.",
  },
  {
    title: "Support after submission",
    text: "Post submission documentation support is part of the engagement. Filing is a milestone, not the finish line.",
  },
];

export const INDUSTRY_ROWS: TableRow[] = [
  {
    sector: "Electronics and electrical",
    work: "Technical file preparation for electronics manufacturers in India, critical components lists, safety and EMC evidence mapping",
  },
  {
    sector: "Lighting",
    work: "Compliance paperwork for LED lighting manufacturers, product specifications and labelling review",
  },
  {
    sector: "Cables and wiring",
    work: "Technical documentation help for cable manufacturers, specification sheets and test coverage mapping",
  },
  {
    sector: "Batteries and energy storage",
    work: "Technical file support for battery manufacturers in India, safety documentation and producer obligations",
  },
  {
    sector: "Solar and renewables",
    work: "Technical documentation for solar panel manufacturers in India, performance and specification records",
  },
  {
    sector: "Machinery and industrial equipment",
    work: "Technical file work for machinery manufacturers, risk assessment and manual documentation",
  },
  {
    sector: "Medical devices",
    work: "Technical documentation for medical device importers in India, dossier structuring and submission support",
  },
  {
    sector: "Chemicals",
    work: "Documentation service for chemical manufacturers' compliance, safety data and handling documentation",
  },
  {
    sector: "Food and packaging",
    work: "Compliance documentation for food packaging manufacturers, labelling and declaration review",
  },
  {
    sector: "Textiles and footwear",
    work: "Documentation support for textile QCO compliance and footwear QCO documentation",
  },
  {
    sector: "Furniture",
    work: "Technical file work for furniture QCO compliance, specification and material records",
  },
  {
    sector: "Toys",
    work: "Documentation support for toy manufacturers in India, safety and labelling evidence",
  },
  {
    sector: "Trading and distribution",
    work: "Compliance documentation for trading companies in India, import documentation and supplier records",
  },
  {
    sector: "E-commerce and marketplaces",
    work: "Marketplace compliance documentation support, seller documentation packs",
  },
  {
    sector: "Inspection-linked work",
    work: "Documentation support for third party inspection and pre-shipment inspection files",
  },
];

export const INDUSTRIES_CLOSING =
  "If your sector is not listed, it does not mean we cannot help. The documentation discipline transfers; the evidence set changes.";

export const LOCATIONS_INTRO =
  "We are based in Noida and work with clients across India and with overseas manufacturers supplying the Indian market. Documentation work is largely remote, with site visits arranged where factory documentation or inspection readiness requires them.";

export const LOCATION_ROWS: TableRow[] = [
  {
    region: "Delhi NCR",
    coverage: "Noida, Greater Noida, Ghaziabad, Sahibabad, Faridabad, Gurgaon and Delhi",
  },
  {
    region: "North India",
    coverage: "Jaipur, Ludhiana, Kanpur, Baddi and Manesar",
  },
  {
    region: "West India",
    coverage: "Mumbai, Pune, Ahmedabad, Surat, Rajkot and Indore",
  },
  {
    region: "South India",
    coverage: "Bangalore, Chennai, Hyderabad and Coimbatore",
  },
  {
    region: "East India",
    coverage: "Kolkata and surrounding industrial belts",
  },
  {
    region: "International",
    coverage: "Foreign manufacturers and suppliers preparing documentation for the Indian market",
  },
];

export const START_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Product",
    color: "#0b57b5",
    title: "Tell us about the product",
    text: "Send the product details, the models involved and the scheme or market you are preparing for.",
  },
  {
    step: "02",
    label: "Proposal",
    color: "#2563eb",
    title: "Get a scoped proposal",
    text: "We respond with what we believe the file needs, what we need from you, and a written quotation. No work begins without an agreed scope.",
  },
  {
    step: "03",
    label: "Gaps",
    color: "#0891b2",
    title: "Gap analysis",
    text: "Once engaged, the first deliverable is an honest assessment of where your documentation stands today.",
  },
  {
    step: "04",
    label: "Build",
    color: "#059669",
    title: "Build and review",
    text: "We draft, you review, and the file goes through independent quality checking before submission.",
  },
  {
    step: "05",
    label: "Submit",
    color: "#d97706",
    title: "Submit and support",
    text: "We support the submission and handle any queries that follow.",
  },
];

export const START_CLOSING =
  "Send your technical documentation requirement and we will come back with a written scope of work — the product details, the models and your target market are enough to start.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What does your technical documentation and compliance support service include?",
    a: "Technical file preparation, declaration of conformity drafting, manuals and labelling review, test report compilation, quality and factory documentation, submission support and query handling. Scope is agreed in writing before work starts.",
  },
  {
    q: "Do you prepare technical files from scratch?",
    a: "Yes. Many clients come to us with nothing more than product drawings and a purchase list, and we build the file from there.",
  },
  {
    q: "Can you review documents we have already prepared?",
    a: "Yes. A technical file audit or gap assessment is often the right starting point, and it is usually faster and less expensive than rebuilding.",
  },
  {
    q: "Which certification schemes do you support documentation for?",
    a: "We work across BIS, CDSCO, BEE, WPC-ETA, EPR, FSSAI, ISO, CE marking and Quality Control Order requirements, among others. Which one applies to your product is confirmed at the start.",
  },
  {
    q: "Do you work with manufacturers outside India?",
    a: "Yes. We support foreign manufacturers and overseas suppliers preparing documentation for the Indian market.",
  },
  {
    q: "Can you handle documentation for multiple products at once?",
    a: "Yes. Multi-product and full product range programmes are common, and we keep specifications and declarations consistent across the range.",
  },
  {
    q: "How do you protect our confidential product information?",
    a: "Product data is handled confidentially by default, access is restricted to the assigned team, and we work under a signed non-disclosure agreement.",
  },
  {
    q: "Do you sign a non-disclosure agreement?",
    a: "Yes. We are happy to sign yours or provide ours before technical information is shared.",
  },
  {
    q: "What information do you need from us to start?",
    a: "Product description, models, technical specifications, any existing test reports, manuals and label artwork, and details of the scheme or market you are targeting.",
  },
  {
    q: "What if our product information is incomplete?",
    a: "That is common and not a problem. Part of our work is creating the documents that do not exist yet, using information gathered from your technical and production teams.",
  },
  {
    q: "Do you coordinate with testing laboratories on our behalf?",
    a: "Yes. We plan test coverage and coordinate with accredited laboratories so reports match what your file needs. Laboratory fees are billed to you directly by the laboratory.",
  },
  {
    q: "Do you help with query and deficiency replies?",
    a: "Yes. Drafting query replies and deficiency responses is a core part of the service, including rebuilding whichever sections of the file need it.",
  },
  {
    q: "Can you help if our application was already rejected?",
    a: "Yes. A rejection or query letter tells us precisely what the reviewer found missing, which usually makes the corrective work faster to scope.",
  },
  {
    q: "Do you prepare declarations of conformity?",
    a: "Yes, including self-declaration formats where the scheme permits them, with every claim checked against the evidence in the file.",
  },
  {
    q: "Do you write user manuals and instruction sheets?",
    a: "Yes — user manuals, instruction sheets, safety instructions, installation and maintenance content, and warranty documentation.",
  },
  {
    q: "Do you help with label artwork compliance?",
    a: "Yes. We review artwork against the requirements applicable to your product category before it goes to print, including Hindi and multilingual labelling where required.",
  },
  {
    q: "Do you prepare risk assessment documents?",
    a: "Yes. Risk assessment and risk analysis file documentation is prepared so both the hazards identified and the controls applied are visible in the file.",
  },
  {
    q: "Do you create SOPs and quality manuals for factories?",
    a: "Yes. Quality manuals, standard operating procedures, process flow charts and record formats are part of our factory documentation work.",
  },
  {
    q: "Do you help with document control and version numbering?",
    a: "Yes. We can set up a document control system with version numbering, ownership and review cycles that your team can maintain.",
  },
  {
    q: "How many revisions are included?",
    a: "Revision scope is agreed in the written proposal. Revisions arising from authority queries during the engagement are part of the service, not a separate charge.",
  },
  {
    q: "How long does a documentation project take?",
    a: "It depends on the number of products, the completeness of your inputs and whether new testing is needed. You receive an indicative schedule after the gap analysis. Authority-side processing time depends on the latest regulatory requirements.",
  },
  {
    q: "How do you price documentation work?",
    a: "By scope — number of products, starting condition, number of schemes and depth of factory documentation. You receive a written quotation before work begins.",
  },
  {
    q: "Do you offer monthly or annual support?",
    a: "Yes. Monthly support plans and annual retainers are available for businesses with continuous documentation needs.",
  },
  {
    q: "Do you guarantee certification approval?",
    a: "No, and no consultant honestly can. Approval is granted by the competent authority. What we control is the quality, completeness and consistency of the documentation you submit.",
  },
  {
    q: "What if the authority asks for more documents later?",
    a: "We prepare the additional documents and draft the response. Follow-up requests are a normal part of the process.",
  },
  {
    q: "Can you update our technical file after a design change?",
    a: "Yes. Design changes, component substitutions and new variants all trigger a file update, and this is a common reason clients move to an ongoing arrangement.",
  },
  {
    q: "Do you provide the documents in editable format?",
    a: "Yes. You receive the complete set in editable format so your team can maintain it after handover.",
  },
  {
    q: "Can you take over documentation from another consultant?",
    a: "Yes. We start with a gap assessment of the existing file so you know exactly what you inherited.",
  },
  {
    q: "Do you train our internal team on documentation?",
    a: "Yes. Handover support includes walking your team through the file structure, the document control system and what to do when the product changes.",
  },
  {
    q: "Which industries do you work with?",
    a: "Electronics, lighting, cables, batteries, solar, machinery, medical devices, chemicals, food and packaging, textiles, footwear, furniture, toys, trading and e-commerce, among others.",
  },
  {
    q: "Where are you located?",
    a: "We are based in Noida and work with clients across Delhi NCR and the rest of India, as well as with overseas manufacturers supplying the Indian market.",
  },
];

export const CTA_TITLE = "Let's Get Your Documentation in Order";

export const CTA_PARAGRAPHS: string[] = [
  "Whether you are preparing a first certification application, fixing a file that has already been queried, or looking for a long-term documentation partner, the starting point is the same conversation: what is the product, what is it being prepared for, and what do you already have?",
  "Send us the product details and your target market. You will get an honest assessment of what your documentation needs, a written scope of work, and a quotation — before any commitment.",
  "Contact our technical documentation team to discuss your requirement, request a proposal, or book a call with a compliance documentation specialist.",
];
