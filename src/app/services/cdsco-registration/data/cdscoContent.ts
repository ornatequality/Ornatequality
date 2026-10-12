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
  objective?: string;
  activities?: string;
  timeline?: string;
  deliverables?: string;
  note?: string;
};

export const CDSCO_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is", label: "What is CDSCO certification?" },
  { id: "why-important", label: "Why CDSCO certification is important" },
  { id: "who-needs", label: "Who needs CDSCO certification?" },
  { id: "service-includes", label: "What our service includes" },
  { id: "consultant-benefits", label: "Benefits of working with a specialist consultant" },
  { id: "process", label: "The complete CDSCO certification process" },
  { id: "documents", label: "Documents required" },
  { id: "eligibility", label: "Eligibility" },
  { id: "timeline", label: "Timeline" },
  { id: "cost", label: "Cost factors" },
  { id: "validity", label: "Validity and renewal" },
  { id: "challenges", label: "Common challenges" },
  { id: "why-choose", label: "Why choose Ornate Quality Services" },
  { id: "industries", label: "Industries we serve" },
  { id: "products-covered", label: "Products covered" },
  { id: "updates", label: "Latest updates and regulatory changes" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "expert-tips", label: "Expert tips" },
  { id: "comparison", label: "Doing it yourself vs a consultant vs a full-service agency" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Start your CDSCO certification with a clear plan" },
];

export const BANNER_TITLE = "CDSCO Certification for Medical Devices in India";

export const BANNER_SUBTITLE =
  "Expert CDSCO certification consultant support for manufacturers, importers and diagnostic companies — from device classification to licence in hand.";

export const BANNER_DESCRIPTION =
  "Ornate Quality Services is a CDSCO registration consultant and certification agency handling CDSCO license for medical devices, drugs, cosmetics and in vitro diagnostics across India.";

export const BANNER_LEAD =
  "Getting a medical device into the Indian market is not a paperwork problem. It is a regulatory sequencing problem. Classify the device wrong and every document you prepare after that is wrong too. Ornate Quality Services Pvt Ltd handles the full CDSCO registration process — classification, dossier, filing, query response and post-approval compliance — so your product reaches the market without avoidable rework.";

export const HIGHLIGHTS_TITLE = "Quick benefits at a glance";

export const KEY_HIGHLIGHTS: string[] = [
  "Correct device class identified before a single document is drafted",
  "Complete CDSCO documentation prepared in-house — Device Master File, Plant Master File, technical dossier",
  "Filing and follow-up handled on the CDSCO online portal, including query replies",
  "One point of contact from classification to licence, and after it",
  "Support for related approvals your product may also need — ISO, CE, WPC-ETA, EPR, LMPC",
  "CDSCO compliance services that continue after the licence is granted, not just until it",
];

export const INTRO_TITLE = "Introduction: what CDSCO certification actually decides for your business";

export const INTRO_PARAGRAPHS: string[] = [
  "CDSCO certification is the legal permission to manufacture, import or sell a regulated medical device in India. Without it, the product cannot lawfully enter the supply chain — not into hospitals, not into distributor networks, not onto e-commerce listings, and not into government tenders.",
  "The Central Drugs Standard Control Organization is India's national regulator for drugs, cosmetics and medical devices, functioning under the Directorate General of Health Services, Ministry of Health and Family Welfare. Medical devices are regulated under the Medical Device Rules, 2017, framed under the Drugs and Cosmetics Act, 1940. That legal parentage matters: a medical device in India is treated as a drug for regulatory purposes, which is why the licensing language, the inspection powers and the penalties are drawn from drug law rather than from product-safety law.",
];

export const INTRO_ITEMS: { title: string; text: string; linkHref?: string; linkLabel?: string }[] = [
  {
    title: "Who this affects",
    text: "Indian manufacturers of notified devices. Importers bringing devices in from overseas. Foreign manufacturers who want Indian market access and therefore need an authorised Indian agent. Diagnostic kit manufacturers working with in vitro diagnostic products. Pharma companies handling drug-device combinations. And increasingly, distributors and online sellers who are being asked by their buyers to prove that the product they are supplying is covered by a valid licence.",
  },
  {
    title: "Business impact",
    text: "A new CDSCO registration is not optional for a regulated product — no licence means no legal sale. It also means no GeM listing, no participation in hospital tenders, and rejected consignments at the port.",
  },
  {
    title: "Legal impact",
    text: "Manufacturing, importing or selling a regulated device without the required licence is an offence under the Drugs and Cosmetics Act, 1940, and can attract penalties, seizure and prosecution.",
    linkHref: "https://cdsco.gov.in",
    linkLabel: "cdsco.gov.in",
  },
  {
    title: "Financial impact",
    text: "The visible cost of certification is the government fee and the consultant fee. The invisible cost — and usually the larger one — is a consignment stuck at a port, a rejected application that has to be refiled, or a product launch that slips two quarters because the device class was assessed incorrectly at the start.",
  },
  {
    title: "Operational impact",
    text: "Certification is not a one-time event. Once a licence exists, the obligations begin: record keeping, labelling compliance, adverse event reporting, and readiness for inspection.",
  },
];

export const WHAT_IS_QUICK_ANSWER =
  "Quick answer: CDSCO certification is the licence or registration granted by India's Central Drugs Standard Control Organization that legally permits a company to manufacture, import or sell a regulated medical device in India. The licence type depends on the device's risk class and on whether you are manufacturing it in India or importing it.";

export const WHAT_IS_PARAGRAPHS: string[] = [
  'There is no single document called a "CDSCO certificate". That phrase is how the market talks about a family of approvals. What you actually receive is a specific licence in a specific form, tied to a specific activity and a specific risk class.',
];

export const RISK_CLASSES_TITLE = "The four risk classes";

export const RISK_CLASSES_INTRO =
  "The Medical Device Rules, 2017 classify devices by the risk they pose to the patient and the user:";

export const RISK_CLASS_ROWS: TableRow[] = [
  {
    class: "Class A",
    risk: "Low risk",
    who: "State Licensing Authority",
    meaning:
      "Lightest route. CDSCO class A medical device registration is the simplest path, and a sub-set that is neither sterile nor measuring is simpler still",
  },
  {
    class: "Class B",
    risk: "Low–moderate risk",
    who: "State Licensing Authority",
    meaning:
      "CDSCO class B medical device registration requires the manufacturing site to be audited by a CDSCO-registered notified body",
  },
  {
    class: "Class C",
    risk: "Moderate–high risk",
    who: "Central Licensing Authority",
    meaning:
      "CDSCO class C medical device registration is handled centrally, with site inspection by the central authority",
  },
  {
    class: "Class D",
    risk: "High risk",
    who: "Central Licensing Authority",
    meaning:
      "CDSCO class D medical device registration carries the highest evidence burden; the CDSCO licence for class D high risk devices typically covers implantable and life-supporting products",
  },
];

export const RISK_CLASS_NOTE =
  "Important note. Do not assume your device's class from a similar product on a competitor's website. Classification is determined against CDSCO's official classification lists, and the same broad product family can contain items in different classes depending on intended use, duration of contact, invasiveness and whether the device is sterile or measuring.";

export const LICENCE_ROUTES_TITLE = "The main licence routes";

export const LICENCE_ROUTE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Manufacturing in India",
    text: "Application in Form MD-3 leading to a licence in Form MD-5 for Class A and Class B devices, granted by the State Licensing Authority. Application in Form MD-7 leading to a licence in Form MD-9 for Class C and Class D devices, granted by the Central Licensing Authority.",
  },
  {
    title: "Importing into India",
    text: "The CDSCO import license route: application in Form MD-14 leading to an import licence in Form MD-15, granted centrally. This is the route almost every importer and foreign manufacturer ends up on, and the CDSCO MD 15 license is what actually permits the consignment to clear.",
  },
  {
    title: "Manufacturing route in short",
    text: "The CDSCO manufacturing license is granted as MD-5 for lower-risk classes and MD-9 for higher-risk classes, depending on which authority has jurisdiction over your device.",
  },
  {
    title: "Loan licence",
    text: "Where you use somebody else's approved manufacturing facility rather than your own — Form MD-4 leading to MD-6 for Class A and B, Form MD-8 leading to MD-10 for Class C and D.",
  },
  {
    title: "Test licence",
    text: "A CDSCO test license is applied for in Form MD-12 and granted in Form MD-13, used to import or manufacture small quantities for testing, evaluation, demonstration or clinical investigation — not for commercial sale. This is also the route for a CDSCO import licence for medical device samples.",
  },
  {
    title: "Loan licence",
    text: "A CDSCO loan license covers the situation where you manufacture at somebody else's approved site rather than your own.",
  },
];

export const RULES_NOTE =
  "Expert note. Form numbers and the exact route for your device should be confirmed against the current version of the Medical Device Rules, 2017 and any amendments in force on the date you file. Rules are amended periodically, and filing on last year's understanding is one of the commonest causes of a rejected application.";

export const AGENT_TITLE = "The CDSCO authorised Indian agent";

export const AGENT_PARAGRAPHS: string[] = [
  "A foreign manufacturer cannot hold an Indian import licence directly. The import licence is applied for by an authorised agent in India — an entity holding an appropriate licence, formally appointed by the manufacturer, who becomes the regulator's point of accountability for that product in India.",
  "This is a genuine legal relationship, not a formality. The agent's name sits on the licence. If the product has a problem in the Indian market, the agent is who CDSCO contacts. Choosing the agent casually — or letting a distributor hold the licence and then falling out with them — is one of the most expensive mistakes a foreign manufacturer can make, because moving a licence to a new agent is a fresh regulatory exercise, not an administrative edit.",
];

export const NOT_WHOLE_ANSWER_TITLE = "Where CDSCO certification is not the whole answer";

export const NOT_WHOLE_ANSWER =
  "CDSCO regulates the device. It does not cover everything else your product touches. A connected device may also need WPC-ETA approval. Electronics may attract BIS requirements. Packaged goods may need LMPC registration under Legal Metrology. Importers usually carry EPR obligations for packaging and e-waste. We flag these at the scoping stage so you are not surprised three months in.";

export const WHY_ITEMS: { title: string; text: string }[] = [
  {
    title: "Legal benefits",
    text: "The licence is what makes your commercial activity lawful. It also gives you a defensible position during inspection: a company with a valid licence, complete records and a documented quality system is in a fundamentally different conversation with a drug inspector than one without.",
  },
  {
    title: "Business benefits",
    text: 'Most serious Indian buyers now ask for licence details before onboarding a supplier. Hospital procurement teams, large distributors and e-commerce marketplaces increasingly verify regulatory status as a condition of listing. Certification converts you from "cannot be considered" to "can be evaluated".',
  },
  {
    title: "Financial benefits",
    text: "Avoided costs dominate here. A consignment held at a port accrues demurrage every day. A refiled application costs the government fee again plus months of delay. Certification done correctly the first time is almost always cheaper than certification done twice.",
  },
  {
    title: "Operational benefits",
    text: "Preparing for CDSCO forces documentation discipline — a controlled Device Master File, a current Plant Master File, traceable batch records, a defined labelling standard. Companies routinely tell us the compliance system they built for the licence made their operations easier to run.",
  },
  {
    title: "Brand and market benefits",
    text: "Regulatory approval is a trust signal in a market where buyers cannot inspect manufacturing quality themselves. For a foreign manufacturer, an Indian licence signals genuine commitment to the market rather than opportunistic export.",
  },
  {
    title: "Future benefits",
    text: "India's device regulation has been steadily widening in scope. Companies that build a compliance function now handle each expansion as an incremental task. Companies that treat certification as a one-off scramble repeat the scramble every time the rules move.",
  },
];

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Medical device manufacturers in India",
    text: "CDSCO certification for medical device manufacturers in India starts here. If you manufacture a regulated device in India, you need a manufacturing licence for the class your device falls into, granted by the appropriate authority — state for Class A and B, central for Class C and D. This applies whether you sell under your own brand or manufacture for someone else.",
  },
  {
    title: "Importers of medical devices",
    text: "If you bring a regulated device into India for sale, you need an import licence in Form MD-15 obtained through the MD-14 application route. This applies to a first-time importer and to an established distributor adding a new product line.",
  },
  {
    title: "Foreign medical device manufacturers",
    text: "CDSCO certification for foreign medical device companies runs through an authorised Indian agent who applies for and holds the import licence. You will need to supply manufacturing evidence, quality system certification, regulatory approvals from your home market and free sale evidence from the country of origin.",
  },
  {
    title: "Diagnostic kit and IVD manufacturers",
    text: "In vitro diagnostics are regulated with their own classification logic and evidence expectations, including performance evaluation requirements. Reagents, calibrators, rapid test kits and molecular diagnostic kits each sit differently depending on what the test is used for.",
  },
  {
    title: "Pharma companies and drug-device combinations",
    text: "Where a product combines a drug and a device, the regulatory route depends on the primary mode of action. Getting this determination wrong sends you down the wrong licensing pathway entirely — worth resolving before anything else.",
  },
  {
    title: "MSMEs and startups",
    text: "Smaller manufacturers usually face the same evidence requirements as large ones, with fewer internal resources. The realistic approach is to sequence: fix classification, build the quality system, then file — rather than filing early and absorbing query cycles.",
  },
  {
    title: "Large businesses and multi-site manufacturers",
    text: "Multiple sites, multiple classes and multiple product families mean parallel applications under different authorities, plus a renewal calendar that has to be actively managed.",
  },
  {
    title: "Online sellers and marketplaces",
    text: "Marketplaces increasingly require regulatory documentation before a health-related listing goes live. Selling online does not create a separate exemption — the underlying product still needs its licence.",
  },
  {
    title: "Government suppliers",
    text: "Selling to government hospitals through tender platforms requires the licence up front. Tender timelines rarely accommodate a certification that has not been started.",
  },
  {
    title: "OEMs, private label brands and contract manufacturers",
    text: "Where manufacturing and branding sit in different companies, the licensing responsibility must be settled contractually and reflected correctly in the application. Assumptions here surface later as licence-scope problems.",
  },
];

export const SERVICE_INCLUDE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Regulatory scoping and device classification",
    text: "Risk based classification of medical devices is where every engagement starts. We determine the class of each product against CDSCO's classification lists and confirm which licence route applies. This is the step that determines everything downstream, and it is where we spend disproportionate effort.",
  },
  {
    title: "CDSCO registration assistance from gap assessment onward",
    text: "Before drafting anything, we assess what you already have against what the application will require — quality system status, test evidence, labelling, site readiness — and give you a written gap list.",
  },
  {
    title: "Device Master File preparation",
    text: "Product description, intended use, design and manufacturing information, materials, performance and safety evidence, risk management output, labelling and packaging, assembled to a structure the regulator can review efficiently.",
  },
  {
    title: "Plant Master File preparation",
    text: "Site details, organisational structure, quality management system, premises and equipment, personnel and process controls.",
  },
  {
    title: "Regulatory dossier compilation",
    text: "Home-market approvals, free sale certificate, quality certification such as ISO 13485, test reports, authorisation documents and undertakings — collected, checked for internal consistency and assembled. Our CDSCO documentation services cover device master file preparation services and plant master file preparation services as standard, rather than as an add-on.",
  },
  {
    title: "Application filing",
    text: "Preparation and submission through the CDSCO online portal, with fee payment coordination and submission tracking.",
  },
  {
    title: "Query handling by a CDSCO regulatory affairs consultant",
    text: "Regulatory queries are normal, not a failure signal. We draft technical responses, coordinate any additional evidence needed, and manage the response within the timeline allowed.",
  },
  {
    title: "Inspection and audit readiness",
    text: "For manufacturing licences we prepare the site for notified body audit or licensing authority inspection — document review, mock walkthrough, and closure of observations.",
  },
  {
    title: "Post-approval compliance",
    text: "Labelling review, record-keeping structure, adverse event reporting workflow, retention and renewal tracking, and licence amendments when you add products or change details.",
  },
  {
    title: "Adjacent approvals",
    text: "Where your product also needs ISO certification, CE marking support, WPC-ETA approval, LMPC registration, EPR registration or NABL-accredited lab testing, we handle those under the same engagement rather than sending you to three vendors.",
  },
  {
    title: "Adjacent CDSCO routes",
    text: "The same team handles CDSCO cosmetic registration, CDSCO wholesale drug license work and the drug import licence route, so a company with a mixed portfolio is not split across providers. If you need to apply for drug import licence India work or cosmetic import registration India alongside your device filing, it runs as one project.",
  },
];

export const CONSULTANT_BENEFITS: { title: string; text: string }[] = [
  {
    title: "You get the classification right the first time",
    text: "Most expensive CDSCO problems trace back to a wrong class assumed at the start.",
  },
  {
    title: "Your dossier is reviewed before it is filed, not after",
    text: "Internal inconsistency between the DMF, PMF and application form is a leading cause of query letters. We check for it deliberately.",
  },
  {
    title: "Query cycles get shorter",
    text: "A technical response drafted by someone who has answered similar queries before closes faster than one drafted by trial and error.",
  },
  {
    title: "Your team stays on product",
    text: "Your engineers and QA staff spend their time on evidence generation rather than on portal mechanics and form conventions.",
  },
  {
    title: "You know what is coming",
    text: "A written scope, a document checklist and a realistic sequence, so your commercial team can plan launch dates against something credible.",
  },
  {
    title: "You have one accountable point of contact",
    text: "Not a call centre, and not a different person each time you follow up.",
  },
  {
    title: "Your compliance does not end at the licence",
    text: "Renewal windows, amendments and post-market obligations stay tracked.",
  },
];

export const PROCESS_QUICK_ANSWER =
  "Quick answer: The CDSCO registration process runs in seven stages — classify the device, assess gaps, prepare the technical files, compile the dossier, file on the CDSCO online portal, respond to regulatory queries and clear the site inspection or notified body audit, and finally receive the licence and move into post-approval compliance.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Classify",
    color: "#0b57b5",
    title: "Step 1 — Device classification and route determination",
    objective: "Establish the risk class of every product in scope and the exact licence route that follows from it.",
    activities:
      "Review intended use, duration of contact, invasiveness, sterility and measuring function for each product. Check against CDSCO's official classification lists. Determine whether the State Licensing Authority or the Central Licensing Authority has jurisdiction. Group products into device families where grouping is permissible, so you are not filing separately for variants that can travel together.",
    timeline: "Usually the fastest stage, but do not compress it. Indicative only — confirm against your product list.",
    deliverables: "Written classification statement per product, licence route map, jurisdiction confirmation.",
    note: "Pro tip. If two of your products fall into different classes, you are running two different projects with different authorities and different timelines. Find that out in week one, not in month four.",
  },
  {
    step: "02",
    label: "Gaps",
    color: "#2563eb",
    title: "Step 2 — Regulatory gap assessment",
    objective: "Identify everything missing before you start drafting.",
    activities:
      "Review existing quality certification, test reports, home-market approvals, labelling artwork and site documentation against what the application will demand. Flag evidence that must be generated — testing that has not been done, validation that is incomplete, documents that have expired.",
    deliverables: "Written gap register with owner and sequence for each item.",
    note: "Expert note. Companies lose more time waiting for test reports and home-country documents than they do on the CDSCO review itself. Start the long-lead items in this step.",
  },
  {
    step: "03",
    label: "Files",
    color: "#0891b2",
    title: "Step 3 — Technical file preparation",
    objective: "Build the Device Master File and, for manufacturing routes, the Plant Master File.",
    activities:
      "Draft the DMF covering product description, intended use, design and manufacturing detail, materials, sterilisation where applicable, performance and safety data, risk management output, stability and shelf life, and labelling with instructions for use. Draft the PMF covering site, quality management system, premises, equipment, personnel and process controls.",
    deliverables: "Complete DMF, complete PMF, labelling pack reviewed against Indian requirements.",
    note: "Warning. The commonest DMF failure is not missing content — it is contradiction. The shelf life in the stability section disagreeing with the shelf life on the label is the kind of thing a reviewer notices immediately.",
  },
  {
    step: "04",
    label: "Dossier",
    color: "#059669",
    title: "Step 4 — Dossier compilation and internal review",
    objective: "Assemble a filing-ready dossier that is internally consistent.",
    activities:
      "Collect the manufacturer's authorisation, free sale certificate, quality certification such as ISO 13485, regulatory approvals from the country of origin, test reports from accredited laboratories, undertakings and declarations. Cross-check every product name, model number, class and address for consistency across all documents.",
    deliverables: "Filing-ready dossier with an index and internal review sign-off.",
  },
  {
    step: "05",
    label: "Filing",
    color: "#d97706",
    title: "Step 5 — Application filing on the CDSCO online portal",
    objective: "Submit correctly the first time.",
    activities:
      "Create or verify portal credentials on the CDSCO online registration portal, complete the application in the correct form for the route, upload documents against the correct fields, coordinate the government fee payment, and submit. Record the application reference so CDSCO application status can be tracked. Filing through the SUGAM portal CDSCO system — or the relevant online licensing system for your route — has its own conventions, and they are not documented anywhere obvious.",
    deliverables: "Submitted application, payment record, tracking reference.",
    note: "Pro tip. Upload conventions matter. Documents attached to the wrong field are treated as missing, and you find out weeks later in a query letter.",
  },
  {
    step: "06",
    label: "Queries",
    color: "#ea580c",
    title: "Step 6 — Query response, audit and inspection",
    objective: "Close the regulator's questions and pass the site assessment.",
    activities:
      "Analyse each query, draft a technical response supported by evidence, submit within the permitted window. For Class A and B manufacturing, coordinate the notified body audit. For Class C and D manufacturing, prepare for licensing authority inspection — document readiness, walkthrough rehearsal, and closure of observations with evidence.",
    deliverables: "Query responses, audit and inspection readiness pack, observation closure report.",
    note: "Important note. A query is not a rejection. Treated properly it is simply the next step. Treated as an emergency — with a rushed, unsupported answer — it becomes the reason the application fails.",
  },
  {
    step: "07",
    label: "Licence",
    color: "#7c3aed",
    title: "Step 7 — Licence grant and post-approval compliance",
    objective: "Receive the licence and stay compliant after it.",
    activities:
      "Handle the CDSCO registration certificate download, verify the licence, check the scope covers every product you intended, set up the record-keeping structure, establish the adverse event reporting and CDSCO post market surveillance workflow under materiovigilance, and calendar the retention and renewal obligations.",
    deliverables: "Verified licence, compliance calendar, post-market surveillance workflow.",
    note: "Expert note. Check the granted licence against your product list line by line on day one. A product accidentally left out of scope is far easier to fix immediately than after you have started importing.",
  },
];

export const DOCUMENTS_INTRO =
  "Requirements vary by route and device class. This is the working checklist we start from; the final list is confirmed at scoping.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Constitution documents of the applicant firm",
    purpose: "Establishes legal identity of the licence applicant",
    mandatory: "Mandatory",
  },
  {
    document: "Applicant's existing licence (where the agent holds one)",
    purpose: "Establishes eligibility to apply as an authorised agent",
    mandatory: "Mandatory for import route",
  },
  {
    document: "Authorisation letter from the foreign manufacturer",
    purpose: "Formally appoints the Indian agent",
    mandatory: "Mandatory for import route",
  },
  {
    document: "Power of attorney",
    purpose: "Grants authority to act in regulatory matters",
    mandatory: "Mandatory for import route",
  },
  {
    document: "Device Master File",
    purpose: "Complete technical evidence for the device",
    mandatory: "Mandatory",
  },
  {
    document: "Plant Master File",
    purpose: "Site and quality system evidence",
    mandatory: "Mandatory for manufacturing route",
  },
  {
    document: "ISO 13485 certificate",
    purpose: "Evidence of a compliant quality management system",
    mandatory: "Mandatory in practice for most routes",
  },
  {
    document: "Free sale certificate from country of origin",
    purpose: "Shows the device is freely sold in its home market",
    mandatory: "Mandatory for import route",
  },
  {
    document: "Regulatory approvals from other jurisdictions",
    purpose: "Supports the safety and performance case",
    mandatory: "Recommended where available",
  },
  {
    document: "Test reports from accredited laboratories",
    purpose: "Objective evidence of performance and safety",
    mandatory: "Mandatory where applicable",
  },
  {
    document: "Risk management file",
    purpose: "Demonstrates hazards are identified and controlled",
    mandatory: "Mandatory",
  },
  {
    document: "Labelling and instructions for use",
    purpose: "Demonstrates compliance with Indian labelling requirements",
    mandatory: "Mandatory",
  },
  {
    document: "Stability and shelf life data",
    purpose: "Justifies the declared shelf life",
    mandatory: "Mandatory where applicable",
  },
  {
    document: "Sterilisation validation",
    purpose: "Validates the sterilisation process",
    mandatory: "Mandatory for sterile devices",
  },
  {
    document: "Details of competent technical staff",
    purpose: "Demonstrates qualified personnel",
    mandatory: "Mandatory for manufacturing route",
  },
  {
    document: "Premises and equipment details",
    purpose: "Demonstrates site suitability",
    mandatory: "Mandatory for manufacturing route",
  },
  {
    document: "Undertakings and declarations",
    purpose: "Formal commitments required with the application",
    mandatory: "Mandatory",
  },
  {
    document: "Government fee payment proof",
    purpose: "Evidences the statutory fee",
    mandatory: "Mandatory",
  },
];

export const DOCUMENTS_CHECKLIST_INTRO = "Checklist — before you file, confirm:";

export const DOCUMENTS_CHECKLIST: string[] = [
  "Every product name and model number reads identically across all documents",
  "The device class stated on the form matches the classification statement",
  "The manufacturing site address matches the free sale certificate and the ISO certificate",
  "The shelf life on the label matches the stability data",
  "Every certificate is currently valid, not expired",
  "The authorisation letter names the correct Indian entity",
  "The product list in the application matches the product list in the DMF",
];

export const ELIGIBILITY_ITEMS: { title: string; text: string }[] = [
  {
    title: "Indian manufacturer",
    text: "CDSCO registration for manufacturers requires a legally constituted entity with a manufacturing site meeting premises, equipment and personnel requirements, a functioning quality management system, and competent technical staff with the prescribed qualifications. Applies to the State Licensing Authority for Class A and B, and to the Central Licensing Authority for Class C and D.",
  },
  {
    title: "Indian importer",
    text: "CDSCO registration for importers requires an entity holding an appropriate licence, formally authorised by the overseas manufacturer, applying centrally in Form MD-14 for a licence in Form MD-15. What you receive is effectively the CDSCO registration certificate for imported medical devices covering the listed products.",
  },
  {
    title: "Foreign manufacturer",
    text: "Not eligible to hold the Indian import licence directly. Reaches the market through an authorised Indian agent, and must supply manufacturing, quality and home-market regulatory evidence.",
  },
  {
    title: "Loan licence applicant",
    text: "An entity that does not own a manufacturing facility but uses an approved one, subject to a valid arrangement with the site owner.",
  },
  {
    title: "Test licence applicant",
    text: "An entity needing limited quantities for testing, evaluation, demonstration or clinical investigation. A test licence does not permit commercial sale.",
  },
  {
    title: "Class A non-sterile, non-measuring devices",
    text: "A simplified route exists for this sub-set. Confirm your device genuinely qualifies before relying on it — sterility or a measuring function moves the product to a different pathway.",
  },
];

export const ELIGIBILITY_NOTE =
  "Important note. Eligibility is about the applicant entity, not just the product. A well-documented device filed by an entity that does not meet the applicant conditions will still fail.";

export const TIMELINE_QUICK_ANSWER =
  "Quick answer: The CDSCO registration timeline depends on device class, route, dossier quality and query cycles. Class A and B routes typically move faster than Class C and D. Because statutory processing periods and actual authority workload both change, we give a project-specific estimate at scoping rather than a headline number.";

export const TIMELINE_INTRO =
  "We do not publish a fixed day count, and we would treat any consultant who guarantees one with caution. The regulator's processing time is not within any consultant's control. What is within our control is the number of query cycles your application goes through — and that is where the real time is won or lost.";

export const TIMELINE_FACTORS_INTRO = "Factors that affect the timeline";

export const TIMELINE_FACTORS: { title: string; text: string }[] = [
  {
    title: "Device class",
    text: "Higher risk classes carry a heavier evidence burden and central processing.",
  },
  {
    title: "Dossier completeness at filing",
    text: "The single biggest lever. A complete, internally consistent dossier can avoid an entire query round.",
  },
  {
    title: "Query cycles",
    text: "Each round adds the regulator's review time plus your response time.",
  },
  {
    title: "Availability of home-country documents",
    text: "Free sale certificates and apostilled documents from overseas are frequently the critical path.",
  },
  {
    title: "Test report availability",
    text: "Testing that has not started when you file will delay you regardless of how good the paperwork is.",
  },
  {
    title: "Site inspection or audit scheduling",
    text: "Dependent on the authority's or notified body's calendar.",
  },
  {
    title: "Authority workload",
    text: "Varies through the year and is outside anyone's control.",
  },
];

export const TIMELINE_DELAYS_INTRO = "Common causes of delay";

export const TIMELINE_DELAYS: string[] = [
  "Device classified incorrectly, discovered mid-review",
  "Documents uploaded against the wrong portal field",
  "Inconsistent product naming across the dossier",
  "Expired certificates submitted without noticing",
  "Query responses drafted without supporting evidence",
  "Site not genuinely ready when the audit date arrives",
];

export const COST_INTRO =
  "We do not publish fee figures on this page, and here is why. Government fees are set by notification and vary by device class, route and number of products. Quoting a number that goes stale helps nobody. What we can do is set out exactly what drives your cost, so the quotation you receive is intelligible.";

export const COST_FACTORS_INTRO = "What makes up the total cost";

export const COST_FACTORS: { title: string; text: string; linkHref?: string; linkLabel?: string }[] = [
  {
    title: "Government fee",
    text: "Determined by class, route and product count, as notified. Confirm the current fee at the time of filing.",
    linkHref: "https://cdsco.gov.in",
    linkLabel: "cdsco.gov.in",
  },
  {
    title: "Number of products and device families",
    text: "More distinct products and more families mean more fee and more documentation.",
  },
  {
    title: "Device class",
    text: "Class C and D applications require deeper evidence and therefore more preparation effort than Class A and B.",
  },
  {
    title: "Route",
    text: "Import, manufacturing, loan licence and test licence each carry a different workload.",
  },
  {
    title: "Existing documentation maturity",
    text: "A company with current ISO 13485 certification, complete test reports and a maintained DMF needs far less preparation than one starting from scratch.",
  },
  {
    title: "Testing requirements",
    text: "Laboratory testing is a separate cost, driven by the standards applicable to your device.",
  },
  {
    title: "Site readiness",
    text: "Gaps found during audit preparation may require remediation investment.",
  },
  {
    title: "Translation, notarisation and apostille",
    text: "Overseas documents frequently need legalisation.",
  },
  {
    title: "Scope of engagement",
    text: "Filing-only support costs less than end-to-end handling that includes gap closure, audit preparation and post-approval compliance.",
  },
];

export const COST_WARNING =
  "Warning — on suspiciously cheap quotes. A quotation far below the market usually means one of three things: the government fee has been excluded, the scope stops at filing and every query is billed extra, or the classification has been assumed rather than assessed. Ask which of the three it is before comparing prices.";

export const VALIDITY_INTRO =
  "CDSCO license validity works differently from most certifications. Licences under the Medical Device Rules, 2017 are designed to continue in force rather than expire on a fixed anniversary, subject to the licence holder meeting the prescribed retention obligations at the notified interval. CDSCO license renewal is therefore less about a deadline and more about not missing a retention obligation. Confirm the current retention period, fee and procedure applicable to your licence type before relying on any date — this is exactly the kind of detail that gets amended.";

export const VALIDITY_LEAD = "What this means practically:";

export const VALIDITY_ITEMS: string[] = [
  "A licence is not something you can forget about for five years and then look up",
  "Missing a retention obligation can put an otherwise valid licence at risk",
  "Adding products, changing a site address, or changing the authorised agent requires an amendment, not a fresh assumption that the existing licence covers it",
  "Licences can be suspended or cancelled for non-compliance, independent of any expiry date",
];

export const VALIDITY_CLOSING =
  "We track retention and renewal dates for clients under our compliance support so the reminder does not depend on somebody remembering. Our CDSCO licence renewal service covers the filing itself, and where the process permits it we renew CDSCO licence online on your behalf.";

export const CHALLENGES_ITEMS: { title: string; why: string; solution: string }[] = [
  {
    title: "Challenge: the device class is genuinely ambiguous",
    why: "Intended use language in the manufacturer's literature does not map cleanly onto CDSCO's classification logic, particularly for combination products, software-driven devices and accessories.",
    solution:
      "Assess against intended use as it will be claimed in India, document the reasoning in writing, and confirm the position before drafting. A documented rationale is also what you rely on if the classification is questioned later.",
  },
  {
    title: "Challenge: overseas documents are slow to arrive",
    why: "Free sale certificates, apostilles and notarised authorisations depend on foreign authorities and timelines you cannot compress.",
    solution: "Start these in the gap assessment stage, in parallel with technical file preparation, not after it.",
  },
  {
    title: "Challenge: the quality system exists on paper but not in practice",
    why: "ISO certification obtained for a customer requirement rather than operated as a live system.",
    solution: "Honest pre-audit assessment and closure of the real gaps before the notified body arrives.",
  },
  {
    title: "Challenge: query letters arrive and nobody knows who owns the response",
    why: "Filing was treated as the end of the project.",
    solution: "Named response owner, evidence pack maintained from the start, response drafted technically rather than defensively.",
  },
  {
    title: "Challenge: multiple approvals needed and none of them coordinated",
    why: "Different vendors handling CDSCO, WPC, BIS and EPR with no shared sequence.",
    solution: "One compliance plan covering every approval the product needs, with dependencies mapped.",
  },
  {
    title: "Challenge: the licence scope does not cover a product you are about to import",
    why: "Product list changed between scoping and launch; nobody amended the licence.",
    solution: "Treat the licence scope as a controlled document and review it before every new SKU.",
  },
];

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Experience across the full certification landscape, not just one scheme",
    text: "As a CDSCO certification service provider we also work as a medical device compliance consultant India-wide. We work daily across BIS, WPC-ETA, EPR, LMPC, ISO, CE and CDSCO. When your device needs three approvals, you are not managing three vendors with three interpretations.",
  },
  {
    title: "Regulatory expertise applied to your product, not a template",
    text: "Classification assessed against your actual intended use. Dossiers drafted for your device rather than adapted from a previous client's. You work with an experienced medical device regulatory consultant and a compliance specialist for medical devices — not a generalist filing agent.",
  },
  {
    title: "A CDSCO certification expert who knows how the authorities actually operate",
    text: "Which authority has jurisdiction, what a notified body looks for during audit, how queries are framed and what a satisfactory response contains.",
  },
  {
    title: "Dedicated team and one point of contact",
    text: "A named person who knows your file, from scoping through to post-approval compliance.",
  },
  {
    title: "Transparent communication",
    text: "A written scope before we start. Status updates you do not have to chase. Clear separation between government fees and professional fees on the quotation.",
  },
  {
    title: "Structured, realistic timelines",
    text: "A project plan with dependencies mapped, and honest flagging when something is outside our control — rather than a promise we cannot keep.",
  },
  {
    title: "End-to-end service",
    text: "Classification, gap assessment, documentation, filing, query handling, audit preparation, licence, and the compliance obligations that follow it.",
  },
  {
    title: "Where we work",
    text: "We provide CDSCO registration services for importers and CDSCO registration services for manufacturers across India. Our team operates as a CDSCO registration consultant in Noida and as a CDSCO certification consultant in Delhi NCR, with client work extending to Gurgaon, Mumbai, Bangalore, Chennai, Hyderabad, Pune and Ahmedabad. Regulatory filing is largely online, so location affects meetings and site visits rather than eligibility.",
  },
];

export const CLAIMS_NOTE =
  'A note on claims. We do not publish a "success rate" percentage or guarantee approval timelines, because no consultant controls the regulator\'s decision or calendar. What we commit to is the quality and completeness of what gets filed, and the speed and technical quality of our response when the regulator asks a question.';

export const INDUSTRY_ITEMS: { title: string; text: string }[] = [
  {
    title: "Medical device manufacturing",
    text: "Domestic manufacturers across surgical, orthopaedic, disposable and equipment categories, on both state and central licensing routes.",
  },
  {
    title: "Medical device import and distribution",
    text: "Importers and authorised agents bringing products from Europe, the United States, China, Japan and Korea into the Indian market.",
  },
  {
    title: "In vitro diagnostics",
    text: "Reagent, kit and analyser companies working through IVD-specific classification and performance evaluation expectations. CDSCO registration for IVD kits and a CDSCO license for diagnostic kits follow the same overall licensing architecture as other devices, but the evidence expectations differ enough that an IVD registration consultant India engagement is usually worth keeping separate from a general device filing.",
  },
  {
    title: "Pharmaceuticals",
    text: "Companies handling drug import licensing, new drug permissions and drug-device combination products.",
  },
  {
    title: "Hospital equipment and capital medical devices",
    text: "Imaging, monitoring, respiratory and life-support equipment suppliers.",
  },
  {
    title: "Contract manufacturing and private label",
    text: "Where manufacturing and branding responsibilities sit in different entities and licensing accountability must be defined precisely.",
  },
  {
    title: "E-commerce and modern trade",
    text: "Sellers who need documented regulatory status to list and to stay listed.",
  },
  {
    title: "Government supply and institutional sales",
    text: "Suppliers who need certification in place before tender deadlines rather than after them.",
  },
];

export const PRODUCTS_INTRO =
  "The following product categories have dedicated pages planned under our CDSCO certification service. Each row links to that product's page.";

export const PRODUCT_ROWS: TableRow[] = [
  { product: "Surgical Instruments", keyword: "cdsco registration for surgical instruments", page: "Coming Soon" },
  { product: "Implants", keyword: "cdsco registration for implants", page: "Coming Soon" },
  { product: "Hospital Equipment", keyword: "cdsco certification for hospital equipment", page: "Coming Soon" },
  { product: "Syringes", keyword: "cdsco license for syringes", page: "Coming Soon" },
  { product: "Gloves", keyword: "cdsco registration for gloves", page: "Coming Soon" },
  { product: "Ventilators", keyword: "cdsco certification for ventilators", page: "Coming Soon" },
  { product: "X Ray Machine", keyword: "cdsco approval for x ray machine", page: "Coming Soon" },
  { product: "Dental Products", keyword: "cdsco registration for dental products", page: "Coming Soon" },
  { product: "Ophthalmic Devices", keyword: "cdsco license for ophthalmic devices", page: "Coming Soon" },
  { product: "Catheters", keyword: "cdsco registration for catheters", page: "Coming Soon" },
  { product: "Thermometers", keyword: "cdsco registration for thermometers", page: "Coming Soon" },
  { product: "Glucometer", keyword: "cdsco approval for glucometer", page: "Coming Soon" },
  { product: "Rapid Test Kits", keyword: "cdsco licence for rapid test kits", page: "Coming Soon" },
  { product: "Wheelchairs", keyword: "cdsco registration for wheelchairs", page: "Coming Soon" },
  { product: "Blood Bank Equipment", keyword: "cdsco licence for blood bank equipment", page: "Coming Soon" },
  { product: "Sterilisation Equipment", keyword: "cdsco registration for sterilisation equipment", page: "Coming Soon" },
  { product: "Surgical Masks", keyword: "cdsco licence for surgical masks", page: "Coming Soon" },
  { product: "Nebulizers", keyword: "cdsco registration for nebulizers", page: "Coming Soon" },
  { product: "Blood Pressure Monitor", keyword: "cdsco registration for blood pressure monitor", page: "Coming Soon" },
  { product: "Pulse Oximeter", keyword: "cdsco licence for pulse oximeter", page: "Coming Soon" },
  { product: "Hearing Aids", keyword: "cdsco registration for hearing aids", page: "Coming Soon" },
  { product: "Infusion Pump", keyword: "cdsco licence for infusion pump", page: "Coming Soon" },
  { product: "Iv Cannula", keyword: "cdsco registration for iv cannula", page: "Coming Soon" },
  { product: "Surgical Sutures", keyword: "cdsco licence for surgical sutures", page: "Coming Soon" },
  { product: "Reagents And Calibrators", keyword: "cdsco licence for reagents and calibrators", page: "Coming Soon" },
  { product: "Molecular Diagnostic Kits", keyword: "cdsco registration for molecular diagnostic kits", page: "Coming Soon" },
  { product: "Orthopaedic Implant", keyword: "cdsco registration for orthopaedic implant manufacturers", page: "Coming Soon" },
  { product: "Cardiac Stents", keyword: "cdsco licence for cardiac stents in india", page: "Coming Soon" },
  { product: "Dialysis Machines", keyword: "cdsco registration for dialysis machines", page: "Coming Soon" },
  { product: "Patient Monitoring Systems", keyword: "cdsco approval for patient monitoring systems", page: "Coming Soon" },
  { product: "Anaesthesia Machines", keyword: "cdsco licence for anaesthesia machines", page: "Coming Soon" },
  { product: "Laboratory Analysers", keyword: "cdsco registration for laboratory analysers", page: "Coming Soon" },
  { product: "Elisa Test Kits", keyword: "cdsco licence for elisa test kits", page: "Coming Soon" },
  { product: "Hiv Test Kits", keyword: "cdsco registration for hiv test kits in india", page: "Coming Soon" },
  { product: "Blood Collection Tubes", keyword: "cdsco licence for blood collection tubes", page: "Coming Soon" },
  { product: "Contact Lens Solution", keyword: "cdsco registration for contact lens solution", page: "Coming Soon" },
  { product: "Surgical Dressings And Bandages", keyword: "cdsco licence for surgical dressings and bandages", page: "Coming Soon" },
];

export const UPDATES_INTRO =
  "India's medical device regulation has changed repeatedly since the Medical Device Rules, 2017 came into force, with amendments widening the scope of regulated devices and adjusting procedural requirements.";

export const UPDATES_NOTE =
  "We deliberately do not list specific notification numbers, dates or fee figures on this page. Published regulatory summaries go stale quietly, and a company that plans its filing against an outdated summary loses months. Before you file, verify the current position directly:";

export const UPDATE_LINKS: { label: string; href: string }[] = [
  { label: "Current Medical Device Rules and all amendments in force", href: "https://cdsco.gov.in" },
  { label: "Official device classification lists", href: "https://cdsco.gov.in" },
  { label: "Current fee schedule", href: "https://cdsco.gov.in" },
  { label: "Ministry notifications and gazette publications", href: "https://mohfw.gov.in" },
  { label: "Consolidated legislation text", href: "https://www.indiacode.nic.in" },
];

export const UPDATES_CLOSING =
  "For clients under our compliance support, we monitor changes that affect their licences and flag them directly.";

export const MISTAKES_ROWS: TableRow[] = [
  {
    mistake: "Assuming the device class",
    impact: "Wrong authority, wrong form, wrong evidence — usually discovered after months of preparation",
    avoid: "Assess against the official classification list at the very start and document the reasoning",
  },
  {
    mistake: "Treating the authorised Indian agent as an administrative choice",
    impact: "The licence sits with an entity you may later want to leave. Transferring it is a fresh regulatory exercise",
    avoid: "Decide the agent relationship commercially and contractually before the application is filed",
  },
  {
    mistake: 'Filing an incomplete dossier to "get into the queue"',
    impact: "Query cycles that cost more time than the wait would have",
    avoid: "File when complete. The queue does not reward early incomplete entries",
  },
  {
    mistake: "Inconsistent product naming across documents",
    impact: "The reviewer cannot confirm that the certificate, the DMF and the application refer to the same product",
    avoid: "Fix one controlled product name and model list, and use it everywhere without exception",
  },
  {
    mistake: "Leaving overseas documents to the end",
    impact: "Everything else is ready and the project waits on an apostille",
    avoid: "Start these first, during gap assessment",
  },
  {
    mistake: "Preparing for the audit in the week before the audit",
    impact: "Observations that require real remediation are found with no time to close them",
    avoid: "Pre-audit assessment early enough to fix what it finds",
  },
  {
    mistake: "Ignoring adjacent approvals",
    impact: "CDSCO licence granted, product still cannot legally ship because a wireless approval or packaging registration is missing",
    avoid: "Map every approval the product needs at scoping",
  },
  {
    mistake: "Forgetting the licence after it is granted",
    impact: "Missed retention obligations, uncovered new products, unreported adverse events",
    avoid: "A live compliance calendar with named owners",
  },
];

export const TIPS_ITEMS: string[] = [
  "Settle classification before you spend money on anything else. It determines the authority, the form, the evidence and the timeline.",
  "Build the product list as a controlled document. Every name, model and variant fixed and used identically everywhere.",
  "Start long-lead items on day one — testing, apostilles, free sale certificates.",
  "Treat the DMF as a reviewer's document, not a warehouse. Structured and navigable beats voluminous.",
  "Read your own dossier as an adversary would. The contradiction you find yourself is free; the one the reviewer finds costs a query cycle.",
  "Answer queries technically, with evidence attached. Assertion without evidence invites a second query.",
  "Rehearse the audit. A walkthrough with your own team finds the gaps a real audit would.",
  "Check licence scope on grant day, line by line against your product list.",
  "Plan launch dates against filing plus query cycles, not against filing alone.",
  "Be sceptical of guaranteed timelines. Nobody outside the regulator controls the regulator's calendar.",
];

export const COMPARISON_ROWS: TableRow[] = [
  {
    factor: "Classification accuracy",
    inhouse: "Depends entirely on internal regulatory experience",
    consultant: "Usually reliable within their specialisation",
    agency: "Assessed formally and documented",
  },
  {
    factor: "Documentation effort",
    inhouse: "Falls on your QA and engineering team",
    consultant: "Shared — you draft, they review",
    agency: "Handled end to end",
  },
  {
    factor: "Query handling",
    inhouse: "Learn by trial and error",
    consultant: "Supported, subject to availability",
    agency: "Named owner with defined response process",
  },
  {
    factor: "Audit preparation",
    inhouse: "Often underestimated",
    consultant: "Advisory",
    agency: "Pre-audit assessment and rehearsal",
  },
  {
    factor: "Multiple approvals",
    inhouse: "Coordinated by you across vendors",
    consultant: "Usually limited to their scheme",
    agency: "Single coordinated compliance plan",
  },
  {
    factor: "Cost",
    inhouse: "Lowest cash cost, highest internal time and rework risk",
    consultant: "Moderate",
    agency: "Higher fee, lower total cost when rework is counted",
  },
  {
    factor: "Best suited to",
    inhouse: "Companies with an established regulatory function and a repeat filing",
    consultant: "A single straightforward application",
    agency: "Multiple products, multiple classes, or a first-time entrant",
  },
];

export const COMPARISON_CLOSING =
  "There is no universally correct answer here. If you have filed successfully before and your next product is in the same class through the same route, doing it in-house is entirely reasonable. If this is your first entry, or you are handling several classes at once, the arithmetic usually favours specialist support.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is CDSCO certification?",
    a: "It is the licence or registration granted by the Central Drugs Standard Control Organization that legally permits you to manufacture, import or sell a regulated medical device in India. The specific licence depends on your device's risk class and on whether you manufacture locally or import.",
  },
  {
    q: "Is CDSCO registration mandatory for all medical devices in India?",
    a: "It is mandatory for devices that fall within the notified scope of regulation. The scope has widened significantly over time, so a product that was outside it a few years ago may be inside it now. Verify current status against the official notification rather than assuming. See cdsco.gov.in.",
  },
  {
    q: "Who needs a CDSCO licence?",
    a: "Indian manufacturers of regulated devices, importers, authorised Indian agents acting for foreign manufacturers, and entities carrying out limited import or manufacture for testing under a test licence. In short: anyone who wants to get CDSCO licence for medical device sale, manufacture or import in India.",
  },
  {
    q: "What is the difference between CDSCO registration and a CDSCO licence?",
    a: "In everyday use the terms are used interchangeably. Formally, what you receive is a licence or registration certificate in a prescribed form, tied to a specific activity and device class.",
  },
  {
    q: "Is CDSCO approval the same as DCGI approval?",
    a: 'CDSCO is the organisation; the Drugs Controller General of India heads it. "DCGI approval" is commonly used to describe approvals issued centrally under CDSCO.',
  },
  {
    q: "How are medical devices classified in India, and what is CDSCO medical device registration based on?",
    a: "Into Classes A, B, C and D by risk, under the Medical Device Rules, 2017. Classification depends on intended use, invasiveness, duration of contact, and whether the device is sterile or has a measuring function.",
  },
  {
    q: "Who issues the licence for Class A and Class B devices?",
    a: "The State Licensing Authority, for manufacturing. Import licences are issued centrally regardless of class.",
  },
  {
    q: "Who issues the licence for Class C and Class D devices?",
    a: "The Central Licensing Authority.",
  },
  {
    q: "What is Form MD-14 and Form MD-15?",
    a: "MD-14 is the application for an import licence; MD-15 is the import licence granted on that application.",
  },
  {
    q: "What is Form MD-5 and Form MD-9?",
    a: "MD-5 is the manufacturing licence for Class A and B devices, applied for in Form MD-3. MD-9 is the manufacturing licence for Class C and D devices, applied for in Form MD-7.",
  },
  {
    q: "What is a CDSCO test licence?",
    a: "A licence permitting import or manufacture of limited quantities for testing, evaluation, demonstration or clinical investigation. It does not permit commercial sale.",
  },
  {
    q: "Can a foreign company apply for a CDSCO licence directly?",
    a: "No. A foreign manufacturer reaches the Indian market through an authorised Indian agent who applies for and holds the import licence.",
  },
  {
    q: "What is an authorised Indian agent?",
    a: "An Indian entity holding an appropriate licence, formally appointed by the overseas manufacturer, who applies for the import licence and is accountable to the regulator for that product in India.",
  },
  {
    q: "How long does CDSCO registration take?",
    a: "It varies by class, route, dossier quality and the number of query cycles. We give a project-specific estimate at scoping. Treat any guaranteed timeline with caution.",
  },
  {
    q: "How much does CDSCO certification cost — what drives CDSCO certification cost?",
    a: "The total is made up of the government fee, which varies by class, route and product count, plus professional fees, plus testing and document legalisation where required. Confirm the current government fee at filing. See cdsco.gov.in.",
  },
  {
    q: "What are the CDSCO registration fees?",
    a: "CDSCO registration fees are set by notification and vary by device class, route and the number of products covered. Confirm the current figure at the time of filing rather than relying on any published summary. See cdsco.gov.in.",
  },
  {
    q: "What is the CDSCO registration timeline?",
    a: "It depends on class, route, dossier completeness and how many query cycles the application goes through. We give a project-specific estimate at scoping.",
  },
  {
    q: "What documents are required for CDSCO certification?",
    a: "The CDSCO registration documents required broadly comprise: applicant constitution documents, authorisation and power of attorney for the import route, the CDSCO device master file, the CDSCO plant master file for manufacturing, ISO 13485 certificate, CDSCO free sale certificate, test reports, risk management file, labelling, and undertakings. The exact list depends on your route.",
  },
  {
    q: "Is ISO 13485 mandatory for CDSCO registration?",
    a: "In practice a compliant quality management system is expected, and ISO 13485 for CDSCO registration is the normal way of evidencing it.",
  },
  {
    q: "Is CE marking or US FDA clearance accepted for CDSCO registration?",
    a: "They are valuable supporting evidence and are routinely submitted, but they do not replace the Indian licence. India runs its own approval process.",
  },
  {
    q: "What is a Device Master File?",
    a: "The complete technical file for the device — description, intended use, design and manufacturing information, materials, performance and safety evidence, risk management, stability and labelling.",
  },
  {
    q: "What is a Plant Master File?",
    a: "The site file — manufacturing location, organisational structure, quality management system, premises, equipment, personnel and process controls.",
  },
  {
    q: "How long is a CDSCO licence valid?",
    a: "Licences under the Medical Device Rules, 2017 are structured to continue in force subject to the licence holder meeting the prescribed retention obligations at the notified interval. Confirm the current period and procedure for your licence type. See cdsco.gov.in.",
  },
  {
    q: "What happens if my CDSCO licence lapses?",
    a: "Your legal permission to carry out the licensed activity is affected, which can halt import or manufacture. Retention and renewal obligations should be tracked actively rather than remembered.",
  },
  {
    q: "Can a CDSCO licence be amended?",
    a: "Yes. Adding products, changing a site address, or changing the authorised agent requires a formal amendment. Do not assume the existing licence covers a change.",
  },
  {
    q: "Can CDSCO reject an application?",
    a: "Yes. Common reasons include incorrect classification, incomplete or inconsistent documentation, inadequate query responses and unsatisfactory site inspection.",
  },
  {
    q: "What should I do if I receive a query letter?",
    a: "Respond within the permitted window with a technical answer supported by evidence. A query is a normal part of the process, not a rejection.",
  },
  {
    q: "Do I need a CDSCO licence to sell medical devices online?",
    a: "Selling online does not create an exemption. The underlying product still requires its licence, and marketplaces increasingly ask for proof before listing.",
  },
  {
    q: "How do I check whether a device or supplier is CDSCO approved?",
    a: "Licence details can be verified through the CDSCO online portal. Ask a supplier for licence particulars and verify them rather than accepting a claim. See cdsco.gov.in.",
  },
  {
    q: "Does CDSCO regulate in vitro diagnostic kits?",
    a: "Yes. IVDs are regulated with their own classification logic and performance evaluation expectations.",
  },
  {
    q: "Do medical devices need BIS certification as well?",
    a: "It depends on the product. Some components and electronics attract separate BIS requirements, and wireless-enabled devices may need WPC-ETA approval. We map every applicable approval at scoping. See bis.gov.in.",
  },
  {
    q: "What compliance obligations continue after the licence is granted?",
    a: "Record keeping, labelling compliance, adverse event reporting under materiovigilance, post-market surveillance, retention and renewal obligations, and readiness for inspection.",
  },
];

export const CTA_TITLE = "Start your CDSCO certification with a clear plan";

export const CTA_PARAGRAPHS: string[] = [
  "Most CDSCO problems are not caused by difficult regulations. They are caused by starting in the wrong place — a class assumed instead of assessed, a dossier filed to get into the queue, an agent chosen without thinking about who will hold the licence in three years.",
  "Tell us what you make or import, and where you are selling it. We will confirm the device class, identify the licence route, and give you a written scope with a document checklist and a realistic sequence — so your commercial team can plan against something credible.",
  "Whether you need to register a medical device in India for the first time, apply for CDSCO licence on an existing product line, or start CDSCO registration process work across several classes at once, the first conversation is the same: what is the product, and what is it claimed to do.",
];

export const CTA_PRIMARY_NOTE =
  "Request a Scope & Quote — tell us your product list and we will confirm what it takes to get CDSCO certificate coverage for it.";
