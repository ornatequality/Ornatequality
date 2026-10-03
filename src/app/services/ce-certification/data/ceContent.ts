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

export const CE_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is", label: "What Is CE Certification?" },
  { id: "terminology", label: "Why the Terminology Matters" },
  { id: "why-important", label: "Why CE Certification Matters" },
  { id: "who-needs", label: "Who Needs CE Certification?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "services-include", label: "What Our CE Certification Services Include" },
  { id: "eligibility", label: "Eligibility" },
  { id: "documents", label: "Documents Required" },
  { id: "process", label: "Step-by-Step CE Certification Process" },
  { id: "timeline", label: "Timeline" },
  { id: "cost", label: "Cost Factors" },
  { id: "validity", label: "Validity" },
  { id: "renewal", label: "Renewal and Maintenance" },
  { id: "testing", label: "Testing and Verification" },
  { id: "directives", label: "Directives and Product Coverage" },
  { id: "challenges", label: "Common Challenges" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "How CE Marking Compares With Other Certifications" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "locations", label: "Where We Work" },
  { id: "industries", label: "Industries Served" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Talk to Our CE Certification Team" },
];

export const BANNER_TITLE = "CE Certification & CE Marking Services in India";

export const BANNER_SUBTITLE =
  "Take your product into the European market with documentation that stands up to scrutiny.";

export const BANNER_DESCRIPTION =
  "Ornate Quality Service Pvt Ltd provides end-to-end CE certification services for Indian manufacturers and exporters. We identify the EU directives that apply to your product, build the technical file, coordinate testing, and prepare the EU Declaration of Conformity — so your consignment is not stopped at an EU port for paperwork you did not know you needed.";

export const SERVICES_LEAD =
  "Complete CE marking services India, from directive identification through to the signed declaration:";

export const WHAT_YOU_GET: string[] = [
  "CE technical file preparation, handled by a compliance team with engineering background",
  "CE marking gap analysis before any money is spent on testing",
  "CE marking testing coordination with accredited laboratories",
  "Notified body coordination services where your product needs third-party assessment",
  "EU authorised representative services for manufacturers with no EU establishment",
  "Post certification compliance support, so your file stays current after the first shipment",
];

export const INTRO_PARAGRAPHS: string[] = [
  "If you sell a physical product in the European Union, CE marking is usually not optional. It is how the EU decides whether your product is allowed on the market at all. Without it, your buyer cannot legally place the goods on sale, and your shipment can be held, returned or refused entry.",
  "Most Indian exporters meet CE certification for the first time in an uncomfortable way: a European customer sends a purchase order, and the order includes a line asking for the CE mark and an EU Declaration of Conformity. The deadline is short. The requirement is unfamiliar. And the people who can explain it are usually in a different time zone.",
  "This page explains CE certification India and CE marking India in plain language — what the CE mark actually is, who carries the responsibility, what documents you need, how the process runs, and where projects usually go wrong. It is written for manufacturers and exporters who need to act, not just to read.",
  'Whether your buyer has asked for CE marking certification, CE mark certification or simply "the CE papers", the underlying work and the CE certification requirements are the same. We are a regulatory compliance specialist firm, and CE certification assistance is what we do every week — for machinery makers, electronics brands, PPE manufacturers and medical device companies across India.',
];

export const WHAT_IS_PARAGRAPHS: string[] = [
  "CE marking is a declaration by the manufacturer that a product meets the applicable European Union requirements for safety, health and environmental protection. The letters stand for Conformité Européenne — European Conformity.",
];

export const WHAT_IS_POINT =
  "The point most exporters get wrong: In most product categories, CE marking is not a certificate that a government office issues to you. It is a legal declaration that YOU, the manufacturer, make — backed by evidence you must be able to produce on demand.";

export const WHAT_IS_CLOSING: string[] = [
  "That is why the term CE certificate can be misleading. For many products there is no certificate at all. What exists instead is a technical file, an EU Declaration of Conformity, and the CE marking logo on the product itself.",
  "For higher-risk products a notified body must be involved, and that body does issue a document — for example an EU type examination certificate. But even then, the legal responsibility for the CE mark stays with the manufacturer, and no CE certification body takes it on for you. What a third party grants is assessment evidence, not CE marking approval of your business.",
];

export const TERMINOLOGY_INTRO =
  "Different people use different words for the same thing, and the confusion costs time.";

export const TERMINOLOGY_ROWS: TableRow[] = [
  { term: "CE certification", meaning: "The overall process of achieving and declaring conformity" },
  { term: "CE certificate", meaning: "Usually a notified body document — it only exists for some product types" },
  { term: "CE marking", meaning: "The physical mark applied to the product" },
  { term: "CE compliance", meaning: "The ongoing state of meeting the applicable requirements" },
  { term: "EU Declaration of Conformity", meaning: "The signed legal statement listing the legislation and standards your product meets" },
  { term: "Technical file", meaning: "The evidence pack that supports the declaration" },
  { term: "Notified body", meaning: "A body designated by an EU member state to carry out conformity assessment where a directive requires it" },
];

export const TERMINOLOGY_CLOSING =
  "When we begin a project, the first thing we do is establish which of these your buyer is actually asking for. It is a short conversation that prevents weeks of wasted effort.";

export const WHY_ITEMS: { title: string; text: string }[] = [
  {
    title: "Legal market access",
    text: "CE marking is the entry condition for the European Economic Area. CE certification for export to Europe is the legal basis on which your goods move — not a marketing badge.",
  },
  {
    title: "Your buyer is exposed too",
    text: "Under EU rules, the importer and the distributor also carry obligations. A CE marking requirement for EU importer means your European customer must verify that you completed conformity assessment properly. If your documentation is weak, they carry the risk. Increasingly, they will simply choose a supplier whose paperwork is clean.",
  },
  {
    title: "Customs and market surveillance",
    text: "EU market surveillance authorities can inspect products already on sale and can require the technical file. Customs can stop a consignment at the border. Neither is a theoretical risk, and neither gives you time to assemble documents afterwards.",
  },
  {
    title: "Tenders and marketplaces",
    text: "CE certification for EU tender submissions almost always require the declaration as an annex. A CE marking for Amazon Europe listing may be blocked or removed if compliance documents cannot be produced.",
  },
  {
    title: "Commercial credibility and liability",
    text: "A CE certification for European buyer requirement handled quickly tells a new customer something useful about how you run your factory. And a properly built technical file is the evidence that you assessed risk — if something goes wrong, that file is what you will be asked for.",
  },
];

export const WHO_NEEDS_INTRO =
  "CE marking follows the product, not the company size. If the product falls within the scope of a relevant EU directive and is placed on the EU market, it needs the mark.";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Manufacturers.",
    text: "CE certification for manufacturers applies whether you make the complete product or assemble it from bought-in parts. The name on the rating plate carries the responsibility.",
  },
  {
    title: "Exporters and trading houses.",
    text: "CE certification for exporters matters even when you do not manufacture. If you export under your own brand, you may be treated as the manufacturer under EU law.",
  },
  {
    title: "Startups and first-time exporters.",
    text: "CE marking for startups is often the first regulatory project a young company faces. It is manageable, but it must start before the purchase order arrives.",
  },
  {
    title: "Companies supplying EU importers.",
    text: "If your customer is the importer of record, they will ask for your evidence pack. Build it once and reuse it for every buyer.",
  },
  {
    title: "Contract and OEM manufacturers.",
    text: "Responsibility depends on whose brand appears on the product. Settle this in writing before production starts.",
  },
  {
    title: "Brand owners and private label sellers.",
    text: "Putting your name on someone else's product generally brings the manufacturer's obligations with it.",
  },
];

export const BENEFITS_ITEMS: string[] = [
  "Legal access to the EU and EEA market. The mark is the condition of entry. Everything else follows from it.",
  "Fewer shipment surprises. Documentation prepared before dispatch means no scramble when a buyer's compliance team asks for the file.",
  "Lower product liability exposure. Documented risk assessment is your evidence that hazards were considered and addressed.",
  "Stronger buyer confidence. CE compliance handled professionally signals a supplier who can be relied on for repeat orders.",
  "One file, many markets. Risk assessment, test reports and user instructions feed directly into other market approvals.",
  "Reduced rework. Correct directive selection at the start avoids retesting the same product against the wrong standard.",
  "Audit readiness. Audit ready documentation turns a market surveillance request into a routine task rather than a crisis.",
];

export const SERVICES_INTRO =
  "Our CE certification package is built around the work that actually decides whether a project succeeds.";

export const SERVICES_ITEMS: string[] = [
  "Directive and standard identification. We determine which EU directives apply and which harmonised standards CE marking selection gives you presumption of conformity. This is where most technical errors begin.",
  "CE marking gap analysis. We assess your existing design, drawings and test evidence against the requirements before any money is spent on testing.",
  "CE marking risk assessment. Required in its own right for several product categories, and the backbone of the technical file for machinery.",
  "CE technical file preparation. Drawings, schematics, component evidence, test reports, instructions and the conformity route, compiled as one coherent pack with version control.",
  "CE marking testing services. Test programme planning, CE marking lab testing India, CE marking sample submission and report review.",
  "Notified body coordination services. Where third-party involvement is required, we manage the submission, respond to queries and track the file through to decision.",
  "EU Declaration of Conformity. Drafting, technical review and version control of the signed legal statement.",
  "Labelling and instructions. CE marking label requirements and CE marking user manual requirements — marking artwork, rating plate content, warnings and instructions.",
  "EU authorised representative services. Where your product needs a CE marking authorised representative inside the EU, we help you appoint one and define the mandate.",
  "CE marking documentation review. An independent check of a file you have already built, before it reaches a buyer.",
  "Post certification compliance support. Including CE marking corrective action support if an issue is raised after launch, and CE marking training for manufacturers who want to build the capability internally.",
];

export const ELIGIBILITY_PARAGRAPHS: string[] = [
  "CE marking does not have an eligibility test the way a licence application does. There is no approved-applicant list and no minimum turnover. The question is not whether you are eligible — it is whether your product is in scope, and whether you can produce the evidence.",
  "You are in scope if your product falls within one or more EU directives or regulations, and it will be placed on the market in the European Economic Area. You are generally not in scope if your product is not covered by any CE directive, or it will never be sold into the EU or EEA. Several categories have no CE requirement at all, and applying the mark where it does not belong is itself a problem.",
  "Some products sit on a boundary and need assessment before anything else happens: components sold separately, assemblies of several machines, refurbished equipment, and products that have gained a new wireless or software function.",
];

export const ELIGIBILITY_NEED_INTRO = "What you need before we start";

export const ELIGIBILITY_NEED: string[] = [
  "A clear, final product specification and model identification, including variants",
  "Bill of materials and component information",
  "Drawings, schematics and, where relevant, software or firmware details",
  "Any test reports you already hold",
  "The draft user instructions",
  "Clarity on whose brand will appear on the product",
];

export const ELIGIBILITY_NOTE =
  "Scope and applicability can change as EU rules are revised. Requirements may vary depending on the latest official regulatory guidelines, and we confirm the current position for your specific product at the start of every project.";

export const DOCUMENTS_INTRO = "CE certification documentation is the deliverable. Everything else supports it.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Product description and identification",
    purpose: "Defines exactly what is being declared",
    mandatory: "Mandatory",
    notes: "Include model, variants and serial or batch identification method",
  },
  {
    document: "General arrangement and assembly drawings",
    purpose: "Shows construction and safety-relevant features",
    mandatory: "Mandatory",
    notes: "Depth depends on product complexity",
  },
  {
    document: "Circuit diagrams and schematics",
    purpose: "Demonstrates electrical design and protection",
    mandatory: "Mandatory for electrical products",
    notes: "—",
  },
  {
    document: "Bill of materials with component evidence",
    purpose: "Traces compliance down the supply chain",
    mandatory: "Mandatory",
    notes: "Supplier declarations and datasheets",
  },
  {
    document: "Risk assessment",
    purpose: "Records hazards, measures taken and residual risk",
    mandatory: "Mandatory where the directive requires it",
    notes: "Central for machinery",
  },
  {
    document: "List of applied standards",
    purpose: "Establishes the basis of the conformity claim",
    mandatory: "Mandatory",
    notes: "Confirm the current harmonised list before signing",
  },
  {
    document: "Test reports",
    purpose: "Evidence that requirements are met",
    mandatory: "Mandatory where testing is required",
    notes: "From accredited laboratories",
  },
  {
    document: "Notified body documents",
    purpose: "Third-party assessment evidence",
    mandatory: "Only where a notified body is required",
    notes: "Such as an EU type examination certificate",
  },
  {
    document: "User instructions and safety information",
    purpose: "Required content in the correct languages",
    mandatory: "Mandatory",
    notes: "Language requirements depend on destination countries",
  },
  {
    document: "Marking and label artwork",
    purpose: "Shows the mark, identification and warnings",
    mandatory: "Mandatory",
    notes: "Placement and legibility rules apply",
  },
  {
    document: "EU Declaration of Conformity",
    purpose: "The signed legal statement",
    mandatory: "Mandatory",
    notes: "Signed by an authorised person of the manufacturer",
  },
  {
    document: "Authorised representative mandate",
    purpose: "Defines the EU representative's authority",
    mandatory: "Where applicable",
    notes: "Required where the directive calls for an EU representative",
  },
];

export const DOCUMENTS_CLOSING =
  "Our CE marking documentation services cover the whole pack, not selected parts of it. We provide a CE technical file template, a CE Declaration of Conformity template download and a working CE marking checklist download at project start, so your team knows exactly what to collect. You then submit CE marking documents to us in whatever format you hold them, and we convert them into structured CE marking technical documentation. Clients who want the pack built from scratch can simply order CE marking documentation as a defined deliverable. We never ask for documents the applicable rules do not require, and we never invent document names to pad a list.";

export const PROCESS_INTRO =
  "The CE certification process looks different for a control panel and for a surgical instrument, but the sequence is consistent. The CE marking process below is the same one we follow on every project, and the CE marking application procedure your buyer refers to is steps 1 to 9 of it.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Scoping",
    color: "#0b57b5",
    title: "Step 1 — Product scoping and directive identification.",
    text: "We establish exactly what the product is, how it is used, and which EU directives apply. Several directives can apply to one product at the same time — an electrically powered machine with a wireless module is a common example.",
  },
  {
    step: "02",
    label: "Standards",
    color: "#2563eb",
    title: "Step 2 — Standard selection.",
    text: "We identify the harmonised standards that correspond to those directives for your product type. Choosing the right standard is what makes testing efficient; choosing the wrong one is what makes it expensive.",
  },
  {
    step: "03",
    label: "Gap analysis",
    color: "#0891b2",
    title: "Step 3 — Gap analysis.",
    text: "We compare your current design, components and existing evidence against those requirements and produce a written gap list with an action owner against each item.",
  },
  {
    step: "04",
    label: "Route",
    color: "#059669",
    title: "Step 4 — Conformity assessment route.",
    text: "The CE marking conformity assessment procedure differs by directive. We confirm whether CE marking self declaration is available for your product or whether a notified body must be involved. This decision drives both cost and duration, so it is settled early and in writing.",
  },
  {
    step: "05",
    label: "Design",
    color: "#d97706",
    title: "Step 5 — Design corrections.",
    text: "Where the gap analysis finds issues, changes are made before testing. Testing a known-non-compliant sample wastes both the sample and the fee.",
  },
  {
    step: "06",
    label: "Testing",
    color: "#ea580c",
    title: "Step 6 — Testing.",
    text: "We plan the test programme, arrange CE product testing, manage sample logistics and review the reports when they arrive. Reports are checked for scope, model identification and standard version before they enter the file.",
  },
  {
    step: "07",
    label: "File",
    color: "#7c3aed",
    title: "Step 7 — Technical file compilation.",
    text: "All evidence is assembled into a structured file with a contents index, version control and traceability to the declared standards.",
  },
  {
    step: "08",
    label: "Notified body",
    color: "#0b57b5",
    title: "Step 8 — Notified body assessment, where required.",
    text: "We prepare the submission, manage correspondence and track queries through to the body's decision.",
  },
  {
    step: "09",
    label: "Declaration",
    color: "#2563eb",
    title: "Step 9 — Declaration and marking.",
    text: "The EU Declaration of Conformity is drafted, reviewed and signed. Marking artwork, rating plate and instructions are finalised, and the mark is applied to the product.",
  },
  {
    step: "10",
    label: "Handover",
    color: "#0891b2",
    title: "Step 10 — Handover and retention.",
    text: "You receive the complete file with guidance on retention, on who must be able to produce it, and on what to do if a market surveillance authority asks for it.",
  },
  {
    step: "11",
    label: "Maintenance",
    color: "#059669",
    title: "Step 11 — Ongoing maintenance.",
    text: "Design changes, standard revisions and directive updates all affect an existing file. Long term compliance maintenance support keeps it current.",
  },
];

export const PROCESS_APPLY =
  "How to apply for CE marking in India: There is no government portal to log into and no CE certification application form to file with an authority. The CE marking registration process that some buyers describe is, in practice, this assessment work plus the declaration. Nobody can apply for CE marking online on a government website, and there is no counter at which to apply for CE certification. To start CE certification process, send us your product specification and target EU markets.";

export const TIMELINE_INTRO =
  "CE marking timeline depends far more on your product than on our process. Projects generally move through four phases, and only one of them is fully within our control:";

export const TIMELINE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Scoping and gap analysis",
    text: "the fastest phase, driven by how quickly your technical documents reach us",
  },
  {
    title: "Design correction",
    text: "the most variable phase; it depends entirely on what the gap analysis finds",
  },
  {
    title: "Testing",
    text: "driven by laboratory scheduling and the number of standards involved",
  },
  {
    title: "File compilation, declaration and marking",
    text: "predictable once test reports are in hand",
  },
];

export const TIMELINE_CLOSING: string[] = [
  "Where a notified body is involved, the assessment period is controlled by that body, not by us.",
  "We do not publish fixed turnaround figures, because a CE certification turnaround time quoted before we have seen the product would be a guess. After scoping, we give you a project schedule with named milestones. For genuinely time-critical shipments we offer fast track CE marking support, which means resequencing the work and running activities in parallel — not skipping steps, which is neither legal nor useful. Processing time depends on the latest regulatory requirements and on laboratory and notified body availability.",
];

export const COST_INTRO =
  "We do not publish a price list, because CE certification cost is driven by the product, not by a standard rate card. Three different numbers get confused in this conversation: CE marking consultant fees (our work), testing charges (the laboratory's), and notified body fees where a third party is involved. We separate them in writing so you can see each one.";

export const COST_INCREASE_INTRO = "What increases cost";

export const COST_INCREASE: string[] = [
  "Number of applicable directives — a machine that is also a wireless device is a multi-directive project",
  "Testing scope — every applicable standard adds test time, and this is usually the largest single line",
  "Notified body involvement — third-party assessment carries the body's own fees, set by them",
  "Product complexity — more components, more software and more variants means more documentation",
  "Design gaps found late — corrections after testing cost far more than corrections during gap analysis",
];

export const COST_REDUCE_INTRO = "What reduces cost";

export const COST_REDUCE: string[] = [
  "Complete, accurate technical documents supplied at the start",
  "Component suppliers who can produce their own compliance evidence",
  "Grouping variants correctly into families, where the grouping is technically defensible",
  "Fixing design issues before samples go to the laboratory",
];

export const COST_CLOSING =
  "Manufacturers often ask about the cheapest way to get CE marking in India. The honest answer: the cheapest route is the one that is correct the first time. Skipping gap analysis to save a small amount at the start is the most reliable way to pay for testing twice. CE marking cost for small manufacturers in India is usually controlled best by narrowing scope precisely rather than by cutting steps.";

export const COST_NOTE =
  "There is no fixed CE marking price in India, and any firm quoting CE certification charges before seeing your product is quoting a template, not your project. CE marking fees and CE certification consultancy charges in India vary with directive count more than with anything else, and there is no government CE marking application cost to budget for, because there is no government application. Request a CE certification quote with your product specification for a written, itemised proposal.";

export const VALIDITY_PARAGRAPHS: string[] = [
  "CE marking does not generally work like a national licence with a printed expiry date. Once the product is correctly assessed, marked and declared, the declaration stands for that product as assessed — for as long as the product and the applicable rules remain unchanged.",
  "Two things end that position. The first is a change to the product: a design modification, a component substitution, a firmware update or a new variant can all affect the assessment. The second is a change to the rules: directives are replaced, and harmonised standards are revised and withdrawn, so a declaration referencing a withdrawn standard weakens over time. Separately, where a notified body issued a certificate, that certificate carries its own validity terms set by the body.",
  "Because the position varies by directive, we confirm CE certification validity for your specific product and route as part of the project, against the latest official guidance rather than a general rule. Clients who need to get EU Declaration of Conformity documents reissued after a change, or who need a CE certificate format their buyer will accept, can have that handled as a standalone task.",
];

export const RENEWAL_INTRO =
  "CE certification renewal is better understood as maintenance. There is usually nothing to re-apply for — there is a file to keep accurate. Review your file when:";

export const RENEWAL_WHEN: string[] = [
  "You change the design, materials or a safety-relevant component",
  "You add a variant or a new model to an existing family",
  "You update software or firmware in a way that affects safety or performance",
  "A harmonised standard you referenced is revised or withdrawn",
  "A directive or regulation in your scope is replaced",
  "A notified body certificate you rely on approaches its own expiry",
  "A buyer, importer or authority raises a question about the product",
];

export const RENEWAL_CLOSING: string[] = [
  "Maintenance means reassessing whether the change is significant, retesting only what the change actually affects, updating the technical file and, where needed, the declaration, and re-issuing marking or instructions if the change touches them.",
  "We hold update CE technical file and amend EU Declaration of Conformity work on retainer for clients with active product lines, so changes are handled as they happen rather than discovered during an audit. CE marking annual contract and CE marking retainer services are available for manufacturers with frequent product updates. Where a product line moves to a different legal manufacturer, we also handle CE marking transfer to new manufacturer, which is a documentation exercise rather than a re-application.",
];

export const TESTING_INTRO =
  "Testing is evidence, not a formality. Accredited laboratories in India can carry out testing to EN standards, and their reports are widely used in CE technical files. This is worth knowing, because it removes a common assumption that all testing must be done in Europe.";

export const TESTING_MANAGE_INTRO = "What we manage on the testing side:";

export const TESTING_ITEMS: string[] = [
  "Test programme planning against the selected standards, so nothing is tested twice and nothing is missed",
  "Laboratory selection and CE marking lab test booking",
  "CE marking sample submission, including sample preparation requirements and logistics",
  "Review of reports for scope, model identification and standard version before they enter the file",
  "Retest planning when a report shows a failure",
  "CE marking certificate sample review, where a buyer has sent you an example of what they expect",
];

export const TESTING_NOTE =
  'A laboratory issues a test report against a standard. It does not issue a CE certificate and does not make the conformity declaration. That distinction matters when a supplier offers you a "CE certificate" from a testing company. CE marking certificate verification and CE marking verification of inherited documentation is one of the more common requests we receive, and it frequently finds gaps.';

export const DIRECTIVES_INTRO =
  "CE marking is not one rule. It is a set of separate EU directives and regulations, each with its own product scope and its own conformity assessment route. A CE marking directives list for your product is the first deliverable of any serious project.";

export const DIRECTIVES_COMMON =
  "Commonly encountered instruments include the Low Voltage Directive, the EMC Directive, the Machinery Directive and its replacement Machinery Regulation, the RoHS Directive, the Radio Equipment Directive, the Toy Safety Directive, the PPE Regulation, the Medical Devices Regulation and the Construction Products Regulation. The table below maps product categories we regularly work on to the directives typically in scope.";

export const DIRECTIVES_ROWS: TableRow[] = [
  {
    category: "Machinery & Industrial Equipment",
    products: "CE marking for CNC machines; packaging machines; textile machinery; agricultural machinery; air compressors; water pumps; hand tools; garden equipment",
    directive: "Machinery Directive / Machinery Regulation; Low Voltage Directive; EMC Directive",
    audience: "Manufacturer / Exporter",
    page: "Coming Soon",
  },
  {
    category: "Electrical & Electronic Products",
    products: "CE marking for LED drivers; power adapters; battery chargers; switchgear; solar inverters; kitchen appliances; laboratory equipment; gas appliances",
    directive: "Low Voltage Directive; EMC Directive; RoHS Directive",
    audience: "Manufacturer / Brand Owner",
    page: "Coming Soon",
  },
  {
    category: "Wireless & Radio Products",
    products: "CE marking for Bluetooth devices; WiFi products",
    directive: "Radio Equipment Directive; RoHS Directive",
    audience: "Manufacturer / Brand Owner",
    page: "Coming Soon",
  },
  {
    category: "Safety & PPE Products",
    products: "CE marking for safety shoes; helmets; gloves",
    directive: "PPE Regulation",
    audience: "Manufacturer / Exporter",
    page: "Coming Soon",
  },
  {
    category: "Medical Devices",
    products: "CE marking for surgical instruments; diagnostic devices",
    directive: "Medical Devices Regulation",
    audience: "Manufacturer / Importer",
    page: "Coming Soon",
  },
  {
    category: "Pressure, Lifts & Gas Equipment",
    products: "CE marking for pressure vessels; lifts and elevators",
    directive: "Pressure Equipment Directive; Lifts Directive; Gas Appliances Regulation",
    audience: "Manufacturer / Exporter",
    page: "Coming Soon",
  },
  {
    category: "Furniture & Consumer Goods",
    products: "CE marking for furniture",
    directive: "General product safety requirements; product-specific rules where applicable",
    audience: "Manufacturer / Brand Owner",
    page: "Coming Soon",
  },
];

export const DIRECTIVES_NOTE =
  "This table is a navigation aid, not a compliance determination. Directive applicability depends on the specific design, function and intended use of your product, and EU legislation is revised regularly. We confirm the applicable directives and the current legal references for your product in writing at the scoping stage, against official EU sources.";

export const DIRECTIVES_CLOSING =
  "Where your buyer needs to get CE marking for my product answered quickly, scoping is the fastest path to a reliable answer. Other categories we support include CE marking for industrial equipment, CE certification for electrical products, CE marking for lighting products, CE marking for cables and wires, CE marking for construction products, CE certification for toys, CE marking for electronics, CE marking for PPE, CE marking for medical devices and CE certification for machinery India.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Directive selection errors.",
    text: "The most expensive mistake in CE marking is assessing against the wrong directive. It is discovered after testing, and the testing has to be repeated.",
  },
  {
    title: "Weak component evidence.",
    text: "Your product can only be as compliant as the parts inside it. Suppliers who cannot produce their own declarations create gaps you inherit.",
  },
  {
    title: "Documentation that exists but does not connect.",
    text: "Many manufacturers have drawings, some test reports and a manual — but nothing that ties them together into a defensible file. A buyer's compliance team spots this immediately.",
  },
  {
    title: "Manuals written after the product.",
    text: "Instructions, warnings and language requirements are part of the conformity requirement, not an afterthought.",
  },
  {
    title: "Undocumented design changes.",
    text: "A component substituted on the shop floor for availability reasons, never recorded, quietly invalidates the assessment.",
  },
  {
    title: "Believing a test report is a certificate.",
    text: "A report proves a sample met a standard. It is not a declaration, and it is not, by itself, CE marking.",
  },
  {
    title: "Starting too late.",
    text: "A purchase order with a shipping date is the worst possible moment to begin. The testing phase in particular is bounded by laboratory availability.",
  },
];

export const MISTAKES_ROWS: TableRow[] = [
  {
    mistake: "Assuming a laboratory issues CE certification",
    causes: "False confidence; no valid declaration",
    avoid: "Confirm who is making the declaration — it is you",
  },
  {
    mistake: "Copying another company's declaration",
    causes: "An inaccurate legal statement in your name",
    avoid: "Build the declaration from your own assessment",
  },
  {
    mistake: "Using the CE mark on a product outside CE scope",
    causes: "Incorrect marking and regulatory exposure",
    avoid: "Confirm scope before marking",
  },
  {
    mistake: "Ignoring the difference between the CE mark and lookalike marks",
    causes: "Buyer rejection; customs questions",
    avoid: "Check the mark against the official form",
  },
  {
    mistake: "Leaving the technical file with one individual",
    causes: "File cannot be produced when needed",
    avoid: "Store centrally with version control",
  },
  {
    mistake: "Treating variants as one product without justification",
    causes: "The declaration does not cover what you shipped",
    avoid: "Group families only where technically defensible",
  },
  {
    mistake: "Skipping gap analysis to save time",
    causes: "Retesting and a longer overall project",
    avoid: "Do the analysis first — it shortens everything after",
  },
];

export const TIPS_ITEMS: string[] = [
  'Start with the buyer\'s exact wording. "Send CE certificate" and "send the Declaration of Conformity" call for different work.',
  "Collect component declarations continuously, not at project time. Make it a purchase-order condition with your own suppliers.",
  "Write the manual early. It surfaces design assumptions while they can still be changed cheaply.",
  "Keep one controlled master file per product family, with a change log.",
  "Record every design change, even when you believe it is minor. The assessment of significance is a decision, and decisions should be written down.",
  "Plan testing around laboratory lead times, not around your shipping date.",
  "Ask us to review inherited documentation before you rely on it. A CE marking documentation review is a short exercise that regularly prevents a long problem.",
];

export const COMPARISON_INTRO =
  "Exporters frequently hold several approvals at once and want to know how they relate. The comparisons below are general orientation only — the applicable requirements for your product must be confirmed case by case.";

export const COMPARISON_ROWS: TableRow[] = [
  {
    comparison: "CE marking vs BIS certification",
    difference: "CE marking governs access to the EU and EEA market; BIS certification is India's own product certification framework. They are separate schemes and one does not substitute for the other.",
  },
  {
    comparison: "CE marking vs UKCA marking",
    difference: "CE marking applies to the EU and EEA; UKCA is Great Britain's own conformity marking. Exporters supplying both markets should plan for both.",
  },
  {
    comparison: "CE marking vs ISO certification",
    difference: "CE marking is product conformity against EU legal requirements. ISO certification covers management systems. A quality management system supports a CE file but does not replace it.",
  },
  {
    comparison: "CE marking vs RoHS compliance",
    difference: "RoHS is one of the directives that can sit inside a CE project, not an alternative to it.",
  },
  {
    comparison: "CE certificate vs Declaration of Conformity",
    difference: "A certificate, where it exists, is typically issued by a notified body. The Declaration of Conformity is always issued and signed by the manufacturer.",
  },
  {
    comparison: "Self declaration vs notified body involvement",
    difference: "Which route applies is determined by the directive and the product's risk category — it is not a commercial choice made by the manufacturer.",
  },
];

export const COMPARISON_CLOSING =
  "We also support manufacturers who need both European and Indian approvals in parallel. A CE marking and RoHS consultant engagement and a CE and UKCA marking consultant engagement are commonly combined for exporters serving both the EU and Great Britain.";

export const HELP_INTRO =
  "We work as a CE marking compliance partner, not a document vendor. Clients come to us as a CE marking consultancy firm, a CE marking service provider or a CE certification service provider in India — the label matters less than the scope, so we define the scope in writing before work starts. Our CE marking consultancy services run from single-product projects to programme-level engagements. For exporters we act as an export compliance consultant India and, where the brief is wider than CE alone, as a EU compliance consultant India and EU market access consultant covering European market entry as a whole.";

export const HELP_ITEMS: { title: string; text: string }[] = [
  {
    title: "Scoping and strategy.",
    text: "We establish applicability, route and evidence requirements before any spend is committed. This is where a project is won or lost.",
  },
  {
    title: "Documentation.",
    text: "Accurate technical file preparation with documentation and coordination support across your engineering, purchase and quality teams. As a CE marking documentation service provider we also take on CE marking technical file service work for teams with engineering capability but no compliance bandwidth.",
  },
  {
    title: "Testing and third-party coordination.",
    text: "Laboratory selection, scheduling, sample management and report review, plus notified body coordination experience across multiple directives, including managing queries and resubmissions.",
  },
  {
    title: "EU representation.",
    text: "Support to appoint EU authorised representative where your product requires one, and to define the mandate correctly.",
  },
  {
    title: "Ongoing support.",
    text: "CE certification audit support, CE marking corrective action support and compliance risk reduction support after the product is on the market.",
  },
  {
    title: "Project management.",
    text: "CE certification project management for multi-product or multi-directive programmes, with one schedule and one reporting line. Manufacturers working to a shipping date use our CE certification for export orders support, and CE certification for immediate export handling where the order is already confirmed. Same week CE marking documentation is possible on files that are already substantially complete — not on projects starting from zero.",
  },
  {
    title: "Engagement models.",
    text: "CE marking compliance services on a project basis, or end to end CE certification services and CE marking end to end support under a continuing agreement. CE certification guidance services are available as advisory-only, where your own team does the work and wants a second opinion at each milestone.",
  },
];

export const HELP_NOTE =
  "We do not promise approval. No consultant can, and any consultant who does is telling you something that is not true. What we commit to is a transparent CE marking process, a structured CE marking methodology, and honest reporting of what your product actually needs.";

export const WHY_CHOOSE_ITEMS: string[] = [
  "Engineering-led, not form-filling. Our compliance team with engineering background reads your drawings and schematics. Compliance work that treats the technical file as paperwork produces files that fail the first serious review.",
  "Multi-directive experience. Multi directive compliance experience matters because most real products are not covered by a single directive.",
  'A standards-based approach. CE marking guidance backed by standards — we tell you which requirement drives each recommendation, not simply that it is "required".',
  "One accountable owner. Every project has a dedicated compliance project manager. You do not re-explain your product to a new contact each week.",
  "Straight answers on cost and duration. A written, itemised proposal. No figure quoted before we have seen the product.",
  "Evidence you can check. Proven CE marking track record, CE marking case studies India and verified compliance references available on request under NDA. CE marking client testimonials can be shared with prospective clients who ask.",
  "Legal and regulatory depth. Legal compliance support for exporters, EU compliance advisory and industry specific compliance expertise across the directives that matter to Indian manufacturing.",
  "Confidentiality. Confidential documentation handling — your drawings, BOM and test data are commercially sensitive and are treated that way.",
  "Continuity after launch. Post certification compliance support and long term compliance maintenance support, so your file does not quietly go stale.",
];

export const LOCATIONS_INTRO =
  "We support manufacturers and exporters across India's main manufacturing and export clusters. Site visits are arranged where the product or the audit requires them; otherwise the work runs remotely, which keeps cost down for everyone.";

export const LOCATION_ROWS: TableRow[] = [
  { location: "Noida", support: "CE certification consultant in Noida — engineering-led scoping for electronics, machinery and component makers. CE marking consultant charges in Noida are quoted per project after scoping." },
  { location: "Delhi NCR", support: "CE marking consultant in Delhi NCR support across the NCR manufacturing belt; CE marking office in Delhi for document handovers and review meetings" },
  { location: "Gurgaon", support: "CE certification services in Gurgaon for auto components, electronics and equipment exporters" },
  { location: "Faridabad", support: "CE certification consultant in Faridabad for engineering, fabrication and machinery units" },
  { location: "Mumbai", support: "CE marking consultant in Mumbai for trading houses, exporters and process equipment makers" },
  { location: "Pune", support: "CE certification company in Pune for capital goods, automation and industrial equipment" },
  { location: "Ahmedabad", support: "CE marking consultant in Ahmedabad for machinery and engineering goods" },
  { location: "Surat", support: "CE marking consultant in Surat for textile machinery and allied equipment" },
  { location: "Rajkot", support: "CE certification services in Rajkot for castings, pumps, engines and engineering exporters" },
  { location: "Chennai", support: "CE marking services in Chennai for auto components, electricals and heavy engineering" },
  { location: "Coimbatore", support: "CE marking consultant in Coimbatore for pumps, motors and textile machinery" },
  { location: "Bangalore", support: "CE certification consultant in Bangalore for electronics, medical devices and IoT hardware" },
  { location: "Hyderabad", support: "CE certification in Hyderabad for pharma-adjacent equipment, electricals and devices" },
  { location: "Kolkata", support: "CE certification agency in Kolkata for engineering goods and industrial equipment" },
  { location: "Jaipur", support: "CE marking services in Jaipur for engineering units and export-oriented manufacturing" },
  { location: "Ludhiana", support: "CE marking consultant in Ludhiana for hand tools, bicycle parts, fasteners and light engineering" },
];

export const LOCATIONS_CLOSING =
  "If you are searching for a CE marking consultant near me or a CE certification near me, distance is rarely the constraint — document quality is. We work on site or remotely depending on what the project actually needs.";

export const INDUSTRIES_INTRO =
  "Different sectors need different specialists. We field a CE marking consultant for machinery manufacturers, a CE marking consultant for electronics manufacturers, a CE certification consultant for medical device companies, a CE marking consultant for toy manufacturers and a CE certification consultant for PPE manufacturers — because directive knowledge does not transfer neatly between them.";

export const INDUSTRY_ROWS: TableRow[] = [
  { industry: "Industrial machinery and capital goods", why: "Machinery requirements, plus electrical and EMC requirements for powered equipment" },
  { industry: "Electrical and electronic manufacturing", why: "Electrical safety, electromagnetic compatibility and hazardous substance restrictions" },
  { industry: "Lighting and LED", why: "Electrical safety, EMC and substance restrictions across drivers and luminaires" },
  { industry: "Wireless, IoT and telecom hardware", why: "Radio equipment requirements alongside electrical and EMC requirements" },
  { industry: "Medical devices and laboratory equipment", why: "Device-specific regulation with classification-driven assessment routes" },
  { industry: "Personal protective equipment", why: "Category-driven assessment under PPE rules" },
  { industry: "Toys and children's products", why: "Toy safety requirements including chemical and mechanical safety" },
  { industry: "Construction products", why: "Product-specific European assessment requirements" },
  { industry: "Automotive components and aftermarket parts", why: "Requirements depend on the specific component and its intended use" },
  { industry: "Pumps, compressors and process equipment", why: "Machinery and, where applicable, pressure equipment requirements" },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Is CE marking mandatory for exporting to Europe?",
    a: "If your product falls within the scope of an applicable EU directive and will be placed on the EU or EEA market, yes. If it falls outside every CE directive, the mark should not be applied at all.",
  },
  {
    q: "Who issues CE certification?",
    a: 'For most product categories, no one "issues" it. The manufacturer declares conformity. Where the directive requires it, a notified body carries out an assessment and issues its own document, but the declaration remains the manufacturer\'s.',
  },
  {
    q: "What is a notified body?",
    a: "An organisation designated by an EU member state to carry out conformity assessment for specific directives and product categories. Involvement is required only where the applicable directive says so.",
  },
  {
    q: "Can Indian manufacturers self-declare?",
    a: "For many product categories, yes. CE marking self declaration is a legitimate route defined in the directives themselves. Higher-risk categories require third-party involvement.",
  },
  {
    q: "What is a technical file?",
    a: "The evidence pack behind your declaration — design documentation, risk assessment, applied standards, test reports and instructions. You must be able to produce it on request.",
  },
  {
    q: "What is an EU Declaration of Conformity?",
    a: "The signed legal statement in which the manufacturer declares the product meets the applicable EU requirements and lists the legislation and standards applied.",
  },
  {
    q: "How much does CE certification cost?",
    a: "It depends on directive count, testing scope, notified body involvement and product complexity. We provide an itemised written proposal after scoping. We do not quote a figure before seeing the product.",
  },
  {
    q: "What drives CE marking testing cost?",
    a: "The number of applicable standards and the test duration each one requires. Multi-directive products cost more because they need more test programmes.",
  },
  {
    q: "What does a CE marking consultant actually provide?",
    a: "Directive identification, standard selection, gap analysis, technical file preparation, testing coordination, notified body management, declaration drafting and ongoing maintenance.",
  },
  {
    q: "How long does CE marking take?",
    a: "It depends on product complexity, design gaps found, laboratory scheduling and — where applicable — notified body timelines. We issue a milestone schedule after scoping.",
  },
  {
    q: "Does a CE certificate expire?",
    a: "CE marking is generally not issued as a licence with a fixed expiry. Certificates issued by a notified body carry their own validity terms. The practical trigger for review is a change to the product or to the applicable rules.",
  },
  {
    q: "What is the CE certification renewal process?",
    a: "There is usually no renewal application. There is file maintenance: reassess when the product changes, when standards are revised, or when a notified body certificate approaches expiry.",
  },
  {
    q: "Which products are exempt from CE marking?",
    a: "Products not covered by any CE directive. Exemption is determined by scope, not by product size or value. Applying the mark to an out-of-scope product is itself incorrect.",
  },
  {
    q: "Does CE marking apply to OEM and private-label products?",
    a: "Responsibility generally follows the brand on the product. CE marking for OEM products and rebranded goods should be settled contractually between the parties before production.",
  },
  {
    q: "What about contract manufacturers?",
    a: "The party whose name and address appear on the product typically carries the manufacturer's obligations. Get this agreed in writing.",
  },
  {
    q: "Can one declaration cover multiple product variants?",
    a: "Sometimes. CE marking for product families is possible where the variants are technically similar and the grouping is justified in the technical file. It cannot be assumed.",
  },
  {
    q: "What happens after a design change?",
    a: "Assess whether the change is significant. If it affects safety, performance or the basis of the assessment, the file — and possibly the testing and declaration — must be updated.",
  },
  {
    q: "Do software or firmware updates affect CE marking?",
    a: "They can, where the software affects safety or the product's essential performance. Treat firmware as a controlled item.",
  },
  {
    q: "Does CE marking apply to imported components used in my product?",
    a: "Component evidence supports your assessment, but the finished product carries its own conformity obligation. A CE-marked component does not make the assembled product compliant.",
  },
  {
    q: "What about assembled products and machinery lines?",
    a: "Where separate machines are combined into a line, the assembly itself may need its own assessment. This is a common and frequently missed requirement.",
  },
  {
    q: "Can testing be done in India?",
    a: "Yes. Accredited Indian laboratories test to EN standards and their reports are widely used in CE technical files. The laboratory does not issue the CE declaration.",
  },
  {
    q: "Is a test report the same as CE certification?",
    a: "No. A report shows a sample met a standard. CE marking requires the full assessment, the technical file and the signed declaration.",
  },
  {
    q: "How do I verify a CE document I was given?",
    a: "Send it to us. CE marking certificate verification establishes what the document actually covers, who issued it and whether it supports a valid declaration.",
  },
  {
    q: "What records do I need to keep, and for how long?",
    a: "The technical file and declaration must be retainable and producible on request. Retention periods are set by the applicable legislation — we confirm the requirement for your directive during the project.",
  },
  {
    q: "Does CE marking apply to refurbished or second-hand equipment?",
    a: "It can, particularly where refurbishment is substantial enough to be treated as placing a new product on the market. This needs case-by-case assessment.",
  },
  {
    q: "Do I need an EU authorised representative?",
    a: "It depends on the directive and on whether you have an EU establishment. Where it is required, the mandate must be documented properly. We support you to appoint one.",
  },
  {
    q: "What is the CE marking scope of application?",
    a: "The EU and EEA markets, for products covered by applicable CE legislation. The CE marking applicable countries list should be confirmed for your target markets at project start.",
  },
  {
    q: "What if a buyer or authority raises a compliance issue after shipment?",
    a: "Respond quickly and in writing, with evidence. CE marking corrective action support covers investigation, response drafting and any corrective work required.",
  },
];

export const CTA_TITLE = "Talk to Our CE Certification Team";

export const CTA_INTRO =
  "If you have a European order on the table, or a buyer asking for documents you do not yet have, the useful next step is a short technical conversation about your product — not a brochure. Send us your product specification and target EU markets, and we will tell you which directives apply, whether a notified body is likely to be involved, and what the work realistically looks like.";

export const CTA_WAYS: string[] = [
  "Request a CE certification quote — written and itemised",
  "Book a CE marking consultation with our technical team",
  "Schedule a CE marking assessment of your existing documentation",
  "Request a CE marking audit of a file you already hold",
  "Book a CE marking site visit where the product needs to be seen",
  "Book a notified body assessment through our coordination service",
  "Arrange CE product testing with an accredited laboratory",
  "Contact a CE marking consultant for an urgent export shipment",
];

export const CTA_URGENT =
  "Need to get CE marking for export shipment already in progress? Tell us the dispatch date first — it changes how we sequence the work. We also handle urgent CE certification requests, and hire EU authorised representative India enquiries where an EU representative must be in place before shipping.";

export const CTA_FOOTER =
  "Ornate Quality Service Pvt Ltd — experienced CE marking consultant support for Indian manufacturers and exporters entering the European market.";
