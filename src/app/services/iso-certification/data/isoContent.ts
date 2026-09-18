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

export const ISO_TOC: TocItem[] = [
  { id: "what-this-page-covers", label: "What This Page Covers" },
  { id: "introduction", label: "Introduction" },
  { id: "what-is-iso", label: "What Is ISO Certification?" },
  { id: "who-issues", label: "Who Issues the Certificate, and Why Accreditation Decides Its Value" },
  { id: "why-important", label: "Why Is ISO Certification Important?" },
  { id: "who-needs", label: "Who Needs ISO Certification?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "key-features", label: "Key Features of Our ISO Certification Service" },
  { id: "eligibility", label: "Eligibility for ISO Certification" },
  { id: "documents", label: "Documents Required for ISO Certification" },
  { id: "process", label: "Step-by-Step ISO Certification Process" },
  { id: "timeline", label: "ISO Certification Timeline" },
  { id: "cost", label: "ISO Certification Cost Factors" },
  { id: "validity", label: "Validity of ISO Certification" },
  { id: "renewal", label: "ISO Certification Renewal and Recertification" },
  { id: "challenges", label: "Common Challenges" },
  { id: "how-we-help", label: "How We Help" },
  { id: "evaluate-provider", label: "How to Evaluate an ISO Certification Provider" },
  { id: "why-choose", label: "Why Choose Ornate Quality Service Pvt Ltd" },
  { id: "standards", label: "Standards Covered Under ISO Certification" },
  { id: "industries", label: "Industries We Serve" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "Comparison: Choosing the Right Standard and the Right Certificate" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Start Your ISO Certification" },
];

export const BANNER_TITLE = "ISO Certification in India";

export const BANNER_SUBTITLE =
  "Structured, audit-ready support for companies that need a management system certificate they can actually stand behind.";

export const BANNER_DESCRIPTION =
  "Ornate Quality Service Pvt Ltd provides end to end iso certification handling for manufacturers, exporters, service companies, MSMEs and startups across India. We help you pick the right standard, build the documentation, prepare your team for the audit, and coordinate with an accredited certification body from the first application to the certificate in your hand.";

export const WHY_WORK_HEADING = "Why businesses work with us";

export const WHY_WORK_ITEMS: { title: string; text: string }[] = [
  {
    title: "Right standard, first time.",
    text: "We help you choose between ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000, ISO 13485 and ISO 20000-1 based on what your buyers and tenders actually ask for — not on what is easiest to sell.",
  },
  {
    title: "Accredited route only.",
    text: "We work through accredited certification body coordination so the certificate you receive stands up when a client, a bank or a tender committee checks it.",
  },
  {
    title: "Documentation done properly.",
    text: "Audit ready documentation preparation built around how your business really runs, not a downloaded template pack.",
  },
  {
    title: "One point of contact.",
    text: "A dedicated compliance manager assigned to your file, from kick-off to certificate.",
  },
  {
    title: "Support after the certificate.",
    text: "Post certification maintenance support so your surveillance audits do not become an annual emergency.",
  },
  {
    title: "Clear commercials.",
    text: "Transparent iso certification pricing with no hidden charges iso certification — you see the scope and the cost structure before you commit.",
  },
];

export const HERO_CTA_NOTE =
  "Request a scope-based proposal — share your activity, site count and employee strength, and we will come back with a written scope. Talk to iso certification expert — if you are not sure which standard you need, start here.";

export const HERO_CLOSING = [
  "Whether you are searching for an iso certification company, an iso certification agency or an iso certification service provider in india, the question to ask is the same: who prepares you, who certifies you, and who stands behind the certificate. We do the first, coordinate the second, and explain the third before you commit. If all you need is an iso certificate for company records, tenders or a buyer file, tell us that — the scope work is the same, but the timeline planning is different.",
];

export const PAGE_COVERS =
  "This page explains iso certification in india in plain language: what it is, who needs it, how the process runs, what affects the cost, how long the certificate stays valid, and what we do for you at each step. If you are comparing providers, the sections on eligibility, process and cost factors will tell you more than a brochure will.";

export const INTRO_PARAGRAPHS = [
  "Most Indian businesses meet ISO certification for the first time because somebody else asks for it. A tender document lists it. An overseas buyer sends a vendor form. A large customer updates its supplier policy. Suddenly a certificate that nobody thought about becomes the thing standing between you and an order.",
  "That is the practical reality. ISO certification is not a licence issued by the government, and in most cases it is not legally compulsory. But it has become the common language of business credibility in India — the quickest way for a customer who has never visited your factory to believe that you run a controlled, repeatable operation.",
  "ISO certification services exist because building a management system and passing an audit is a project, not a purchase. There is documentation to prepare, people to train, records to generate, an internal audit to run and a management review to hold — all before an external auditor arrives. Companies that try to do this in the last two weeks before a tender deadline usually end up with either a rushed system nobody follows or a certificate from a body their customer will not accept.",
  "Terminology varies in the market and it causes confusion. Some businesses call it iso registration, some call it certification, and some ask for iso compliance services when they mean the whole exercise. They are all pointing at the same thing: an audited management system and a certificate that proves it. We provide iso certification support services across that full range, from first advice to renewal.",
  "What you can expect from this page, and from us: a realistic view of the work involved, an honest explanation of what affects cost and time, and iso implementation support that leaves you with a system your team can actually run after we leave.",
];

export const WHAT_IS_INTRO = [
  "ISO certification is formal confirmation by an independent certification body that your organisation’s management system meets the requirements of a published ISO standard.",
  "Three parts of that sentence matter.",
];

export const WHAT_IS_PARTS: { title: string; text: string }[] = [
  {
    title: "“Management system.”",
    text: "ISO certification covers the way you manage a function — quality, environment, safety, information security, food safety — not an individual product. This is management system certification, which is why an ISO certificate never says a specific product is approved. Product approvals in India come through separate routes such as BIS certification or CE certification.",
  },
  {
    title: "“Independent certification body.”",
    text: "ISO itself — the International Organization for Standardization — writes the standards. It does not audit companies and it does not issue certificates. Your certificate comes from a certification body, and the credibility of that body depends on who accredits it. In India, accreditation for management system certification bodies runs through NABCB under the Quality Council of India.",
  },
  {
    title: "“Requirements of a published standard.”",
    text: "Each standard sets out what your system must include. ISO 9001 covers quality management. ISO 14001 covers environmental management. ISO 45001 covers occupational health and safety. ISO 27001 covers information security. ISO 22000 covers food safety. ISO 13485 covers quality management for medical devices. ISO 20000-1 covers IT service management.",
  },
];

export const WHAT_IS_CLOSING = [
  "The purpose is consistency. A certified system means the business has defined how work should be done, has evidence that it is being done that way, and has a method for finding and fixing problems. For a buyer, that is a shortcut to trust. For you, it is usually the first time the whole operation gets written down in one place.",
  "One more distinction worth knowing early, because it causes real problems later: certification and accreditation are not the same thing. Certification is what happens to you. Accreditation is what happens to the certification body. Anyone can print a certificate; only an accredited body’s certificate carries weight when it is checked. That difference is the single most common reason a certificate gets rejected in a tender.",
];

export const WHO_ISSUES_PARAGRAPHS = [
  "Your certificate does not come from ISO. It comes from a certification body — an independent company licensed to audit and certify management systems. In India there is no shortage of them, and the gap between the best and the worst is enormous.",
  "What separates them is accreditation. An accredited certification body in india has itself been assessed against international requirements for competence and impartiality. That assessment is what gives your certificate weight. A certificate from a body nobody assesses is a printed document with a logo on it.",
  "In India, accreditation for management system certification runs through NABCB, which operates under the Quality Council of India. Qci accreditation for iso covers the certification body, not your company — a point that trips up many first-time applicants. When a tender asks for an accredited certificate, it is asking whether your iso certification body in india is itself accredited.",
  "Before you sign with anyone, ask three questions and check the answers yourself:",
];

export const WHO_ISSUES_QUESTIONS: { title: string; text: string }[] = [
  {
    title: "Which accreditation body covers the certification body?",
    text: "Then verify it on that accreditation body’s own directory. A nabcb accredited certification body will be listed there.",
  },
  {
    title: "Will the certificate carry the accreditation mark?",
    text: "Some bodies offer both accredited and non-accredited certificates. The cheaper one is usually the second kind.",
  },
  {
    title: "Is the certification body independent of the consultant?",
    text: "If one company offers to implement and certify, walk away. That arrangement breaks impartiality, and an informed customer will spot it.",
  },
];

export const WHO_ISSUES_CLOSING =
  "We arrange accredited iso certification services in india only. If you want to compare iso certification providers before deciding, we will tell you what to check rather than just telling you to pick us — a genuine iso certification provider has no problem with you verifying anything.";

export const WHY_IMPORTANT_ITEMS: { title: string; text: string }[] = [
  {
    title: "It opens doors that are otherwise closed.",
    text: "Many tender documents, vendor registration forms and buyer questionnaires list an ISO certificate as a basic eligibility requirement. Without it, your bid is filtered out before anyone reads your price. Iso certification for tender participation is the reason a large share of Indian companies start the process at all.",
  },
  {
    title: "It shortens the trust conversation.",
    text: "An overseas buyer cannot visit your unit before a first order. A certificate from an accredited body, verifiable independently, does part of the persuading for you. This matters especially for iso certification for export business, where the buyer is working entirely on documents.",
  },
  {
    title: "It reduces the cost of disorder.",
    text: "This is the benefit companies notice last and value most. Defined processes, controlled documents, calibrated equipment, recorded corrective action — these reduce rework, complaints and the amount of firefighting your senior people do. Iso certification benefits show up in the operation long after the certificate is filed away.",
  },
  {
    title: "It gives you a structure for growth.",
    text: "When headcount doubles, informal knowledge stops transferring. A management system is how a company keeps working the same way when the founder is not in the room.",
  },
  {
    title: "It supports regulatory discipline.",
    text: "An ISO system does not replace your legal obligations, but it forces you to list them, assign owners and check compliance regularly. Companies with a working system usually find statutory inspections far less stressful.",
  },
];

export const WHY_IMPORTANT_NOTE =
  "A realistic note: certification does not fix a business that has no discipline. It documents and strengthens discipline that is at least partly there. That is why iso gap analysis at the start is worth more than a thicker manual at the end.";

export const WHO_NEEDS_INTRO =
  "ISO certification is voluntary for most businesses in India. The pressure to hold one usually comes from customers, tenders or buyers rather than from law. These are the groups that most often need it.";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Manufacturers.",
    text: "The largest group by far. Iso certification for manufacturing company covers everything from a small workshop to a multi-line plant. Iso certification for auto component supplier, iso certification for electrical panel manufacturer, iso certification for injection moulding unit, iso certification for packaging manufacturer and iso certification for furniture manufacturer are all common requests, usually triggered by an OEM or a large customer.",
  },
  {
    title: "Exporters.",
    text: "Iso certification for exporters is often the first document an overseas buyer asks for. We regularly handle iso certification for garment exporter in india, iso certification for handicraft exporter, iso certification for leather goods exporter and iso certification for spice exporter, along with iso certification support for exporters shipping to europe, where buyer audits are stricter.",
  },
  {
    title: "Service companies.",
    text: "Iso certification for service companies is growing quickly. Facilities, manpower, security, housekeeping and logistics firms need it because their clients — often large corporates or PSUs — require it in the contract. Iso certification for logistics and warehousing companies and iso certification for logistics and freight forwarder are typical examples.",
  },
  {
    title: "IT and software businesses.",
    text: "Iso certification for it company is usually about information security rather than quality. Iso certification for software development company in india and iso certification for bpo and call centre normally point to ISO 27001, because client security questionnaires ask for it directly.",
  },
  {
    title: "MSMEs and startups.",
    text: "Iso certification for msme and iso certification for startups are common where the business is bidding for institutional work. Iso certification for startup india registered company enquiries usually come from teams preparing for their first institutional client. Iso certification for small business is entirely workable — a small company does not need a large system, it needs a system that matches its size.",
  },
  {
    title: "Support-service businesses.",
    text: "Iso certification for facility management company, iso certification for housekeeping services company, iso certification for manpower supply agency and iso certification for security services company are almost always contract-driven — the client’s procurement policy requires it. Iso certification for engineering consultancy firm and iso certification for trading company in india follow the same pattern.",
  },
  {
    title: "Traders and e-commerce sellers.",
    text: "Iso certification for traders and iso certification for e commerce seller apply where the company does not manufacture but still controls sourcing, storage and dispatch quality.",
  },
  {
    title: "Regulated and sensitive sectors.",
    text: "Iso certification for pharmaceutical company, iso certification for ayurvedic manufacturing unit, iso certification for cosmetics manufacturer, iso certification for food business and iso certification for hospitals sit alongside statutory approvals rather than replacing them. Iso certification for hospitals and diagnostic centres in india and iso certification for diagnostic laboratory often run together with laboratory-specific requirements.",
  },
  {
    title: "Institutions and projects.",
    text: "Iso certification for schools, iso certification for educational institutions and training centres, iso certification for coaching institute, iso certification for construction company and iso certification for solar epc company all come up where funding bodies or project owners set the requirement.",
  },
  {
    title: "Government suppliers.",
    text: "Iso certification for government tenders, iso certification for gem portal registration, iso certification for psu vendor registration and iso certification for railway vendor approval are driven entirely by the buying organisation’s own criteria. Always read the tender clause carefully — it usually specifies the standard and sometimes the accreditation.",
  },
];

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Tender and vendor eligibility.",
    text: "The most immediate return. A valid, accredited certificate keeps you inside the qualifying set instead of outside it.",
  },
  {
    title: "Buyer confidence.",
    text: "Iso certification benefits for small and medium enterprises are strongest here. A certificate lets a small supplier compete with a larger one on credibility, not just price.",
  },
  {
    title: "Better process control.",
    text: "Written procedures, defined responsibilities and recorded checks reduce variation. Fewer surprises reach the customer.",
  },
  {
    title: "Lower rework and complaint cost.",
    text: "Corrective action that finds root causes instead of symptoms stops the same failure from repeating.",
  },
  {
    title: "Clear accountability.",
    text: "Everyone knows who owns which process. Handovers stop being verbal.",
  },
  {
    title: "Faster onboarding.",
    text: "New employees learn a documented method instead of copying whoever sits next to them.",
  },
  {
    title: "Structured risk handling.",
    text: "The standards require you to identify what could go wrong and plan for it, rather than reacting after it does.",
  },
  {
    title: "A platform for more standards.",
    text: "Once one system is running, adding a second standard is far less work. Integrated management system certification is usually cheaper and faster than two separate projects.",
  },
  {
    title: "Renewal without panic.",
    text: "A system that is genuinely used stays audit-ready. Surveillance visits become routine.",
  },
];

export const FEATURES_ITEMS: { title: string; text: string }[] = [
  {
    title: "End to end iso certification handling.",
    text: "From standard selection to certificate issue, including all coordination with the certification body. You deal with one team, not four.",
  },
  {
    title: "Iso gap analysis before anything is written.",
    text: "We look at what you already do, and document that, instead of dropping a generic manual on your business.",
  },
  {
    title: "Accurate scope definition guidance.",
    text: "Scope decides your audit effort, your cost and what your certificate actually says. Getting it wrong is expensive; we spend real time here.",
  },
  {
    title: "Documentation assistance for iso standards.",
    text: "Iso manual preparation, procedures, formats and registers built around your processes. Iso certification with documentation support means we draft with your team, not for a file.",
  },
  {
    title: "Technical guidance for iso implementation.",
    text: "Practical help putting the system into daily use — who records what, when, and where it is kept.",
  },
  {
    title: "Iso awareness training for your team.",
    text: "People cannot follow a system they have never been told about. Auditors notice this immediately.",
  },
  {
    title: "Internal audit and management review support.",
    text: "We help you run a genuine iso internal audit and a management review that produces decisions, because auditors check both.",
  },
  {
    title: "On site audit support by consultants.",
    text: "We are with you for the certification audit and help you handle auditor questions calmly.",
  },
  {
    title: "Corrective action closure assistance.",
    text: "Findings are normal. We help you write corrective actions that address causes, so they close the first time.",
  },
  {
    title: "Post certification maintenance support.",
    text: "Surveillance planning, record upkeep and iso certification annual maintenance service so year two and three do not fall apart.",
  },
  {
    title: "Confidential handling of company documents.",
    text: "Your drawings, client lists and cost data stay yours. Nda backed consultancy engagement is available on request.",
  },
];

export const FEATURES_NOTE =
  "We do not promise certification. No consultant can, and anyone who does is telling you something about how they work. What we commit to is preparation good enough that the audit holds no surprises.";

export const ELIGIBILITY_INTRO =
  "Iso certification eligibility is broader than most people expect. There is no minimum turnover, no minimum age of business and no government pre-approval.";

export const ELIGIBILITY_WHO_HEADING = "Who generally qualifies";

export const ELIGIBILITY_WHO: { title: string; text: string }[] = [
  {
    title: "Any legally constituted business entity.",
    text: "Iso certification for proprietorship firm in india, iso certification for partnership firm and iso certification for one person company are all possible — the entity type does not decide eligibility.",
  },
  {
    title: "Businesses of any size.",
    text: "There is no minimum employees required for iso 9001 certification. A five-person firm can be certified; the system simply needs to match that scale.",
  },
  {
    title: "New businesses.",
    text: "Iso certification requirements for a new startup company are the same as for an established one, with one condition — you need enough operating records to show the system is running. A company that has not yet started operations has nothing for an auditor to examine.",
  },
  {
    title: "Single-site and multi-site organisations.",
    text: "Iso certification for companies with multiple locations in india is handled through multi site iso certification, where sampling rules decide how many sites are visited.",
  },
  {
    title: "Manufacturers and non-manufacturers alike.",
    text: "Iso certification process for a service based company follows the same structure; only the evidence changes.",
  },
];

export const ELIGIBILITY_BASIC_HEADING = "Basic requirements before an audit can succeed";

export const ELIGIBILITY_BASIC = [
  "A defined scope and defined processes.",
  "Documented information appropriate to your size and risk.",
  "Records showing the system has actually operated for a reasonable period.",
  "At least one completed internal audit and one management review.",
  "Trained people who understand their part of the system.",
];

export const ELIGIBILITY_NOTES_HEADING = "Important notes";

export const ELIGIBILITY_NOTES: { title: string; text: string }[] = [
  {
    title: "Iso certification requirement for msme udyam registered unit",
    text: "is no different from any other company. Udyam registration helps with recognition and schemes; it does not change ISO eligibility.",
  },
  {
    title: "Iso certification requirement for pharmaceutical manufacturing units",
    text: "sits on top of statutory licences, not instead of them. The same applies to food, medical device and laboratory operations.",
  },
  {
    title: "Certain sector standards carry additional expectations of the auditor.",
    text: "Iso certification requirements may vary depending on the latest official regulatory guidelines and the certification body’s own accreditation rules.",
  },
];

export const DOCUMENTS_INTRO =
  "Iso certification documents required depend on the standard, your scope and your size. The list below covers the document categories an auditor will normally look for. Nothing here is a government-prescribed form.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Business registration proof",
    purpose: "Confirms the legal identity and the name that will appear on the certificate",
    mandatory: "Mandatory",
    notes: "The certificate name must match this exactly — mismatches cause reprints later",
  },
  {
    document: "Scope and site details",
    purpose: "Defines what activities and locations the certificate covers",
    mandatory: "Mandatory",
    notes: "Drives audit effort and cost; worth getting right at the start",
  },
  {
    document: "Organisation chart and responsibilities",
    purpose: "Shows who owns each process",
    mandatory: "Mandatory",
    notes: "Auditors use this to decide whom to interview",
  },
  {
    document: "Process map or activity flow",
    purpose: "Explains how work moves through the business",
    mandatory: "Mandatory",
    notes: "Can be a simple diagram; it does not need to be elaborate",
  },
  {
    document: "Policy and objectives",
    purpose: "States management’s intent and measurable targets",
    mandatory: "Mandatory",
    notes: "Objectives must be measurable and reviewed, not decorative",
  },
  {
    document: "Procedures and work instructions",
    purpose: "Documents how key activities are carried out",
    mandatory: "Mandatory",
    notes: "Iso manual preparation and procedure drafting is where most of our documentation work sits",
  },
  {
    document: "Risk and opportunity records",
    purpose:
      "Evidence of risk assessment requirements under iso 9001 2015 and equivalent clauses in other standards",
    mandatory: "Mandatory",
    notes: "Format is your choice; a simple register is acceptable",
  },
  {
    document: "Operational records and registers",
    purpose: "Day-to-day evidence that the system runs",
    mandatory: "Mandatory",
    notes: "Auditors sample these; they must be real, not created the night before",
  },
  {
    document: "Internal audit records",
    purpose: "Shows you checked yourself first",
    mandatory: "Mandatory",
    notes: "Internal audit checklist for iso 9001 2015 certification, reports and findings",
  },
  {
    document: "Management review minutes",
    purpose: "Shows top management reviewed performance and took decisions",
    mandatory: "Mandatory",
    notes: "Attendance of senior management matters",
  },
  {
    document: "Corrective action records",
    purpose: "Demonstrates that problems are investigated and closed",
    mandatory: "Mandatory",
    notes: "Corrective action report format for iso audit findings is part of our documentation pack",
  },
  {
    document: "Training and competence records",
    purpose: "Evidence that people are capable of their roles",
    mandatory: "Mandatory",
    notes: "Attendance sheets, skill matrices, certificates",
  },
  {
    document: "Calibration and maintenance records",
    purpose: "Applies where measurement or equipment affects output",
    mandatory: "Conditional",
    notes: "Required where the standard and your processes call for it",
  },
  {
    document: "Supplier evaluation records",
    purpose: "Shows purchased inputs are controlled",
    mandatory: "Conditional",
    notes: "Scale it to how much you depend on outside suppliers",
  },
  {
    document: "Legal and regulatory register",
    purpose: "Lists applicable obligations and how compliance is checked",
    mandatory: "Conditional",
    notes: "Especially relevant for ISO 14001, ISO 45001 and ISO 22000",
  },
  {
    document: "Standard-specific records",
    purpose: "Hazard assessments, environmental aspects, food safety plans, security controls",
    mandatory: "Conditional",
    notes: "Depends entirely on which standard you are certifying",
  },
];

export const DOCUMENTS_CLOSING = [
  "What we provide, and what stays with you. We share a working iso certification checklist at kick-off so your team knows what to collect before drafting starts, and you can download iso certification checklist copies for each department. Where a business prefers to do more in-house, you can order iso documentation kit support covering formats and registers only. We will also show you a sanitised iso certificate format so you know what the final document looks like and what wording to check on it.",
  "Standard-specific documentation differs. A list of documents needed for iso 14001 certification includes an environmental aspects register and a legal obligations register that ISO 9001 does not require. Iso information security certification adds a risk assessment and a statement of applicability. Iso 9001 clause wise documentation requirements explained is one of the first things we walk a new client through, because it prevents over-documentation — most companies write far more than the standard asks for. We also supply a practical management review meeting agenda for iso 9001 so that review meetings produce decisions rather than attendance sheets. Exporters who need to get iso certificate for export documentation should tell us at the start, since buyer and bank documentation sometimes needs specific scope wording.",
  "Iso documentation services and iso certification documentation for msme unit are handled the same way: we work from your existing formats wherever possible, because a system built on documents your team already uses is one they will keep using. Documents to be maintained after getting iso certification are largely the same set, kept live.",
];

export const PROCESS_INTRO =
  "This is the step by step iso certification process in india as it actually runs. The iso certification process is the same in structure for every standard; only the evidence changes.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Scope discussion",
    color: "#0b57b5",
    title: "1. Scope discussion and standard selection.",
    text: "We establish what your customers or tenders actually require, then define the activities and sites to be covered. This is where the iso certification scope statement takes shape. A scope that is too wide inflates cost; one that is too narrow gets your certificate rejected.",
  },
  {
    step: "02",
    label: "Gap analysis",
    color: "#2563eb",
    title: "2. Iso gap analysis.",
    text: "We compare how you work today against the standard’s requirements and produce a written gap list with owners. You see the real size of the project before spending on it.",
  },
  {
    step: "03",
    label: "Documentation",
    color: "#0891b2",
    title: "3. Documentation development.",
    text: "Policy, objectives, procedures, formats and registers are drafted around your processes. This is the bulk of the iso certification with documentation support phase.",
  },
  {
    step: "04",
    label: "Implementation",
    color: "#059669",
    title: "4. Implementation.",
    text: "The system goes live. People start recording what they do. This step cannot be shortened much — auditors need to see the system operating, not just written.",
  },
  {
    step: "05",
    label: "Awareness training",
    color: "#d97706",
    title: "5. Iso awareness training.",
    text: "Your team is briefed on the policy, their responsibilities and what the auditor may ask. Where you want in-house audit capability, iso lead auditor training can be arranged separately.",
  },
  {
    step: "06",
    label: "Internal audit",
    color: "#dc2626",
    title: "6. Iso internal audit.",
    text: "A full internal audit against every clause and process, with findings recorded. This is a requirement of the standard, not an optional rehearsal.",
  },
  {
    step: "07",
    label: "Management review",
    color: "#7c3aed",
    title: "7. Management review.",
    text: "Top management reviews performance, audit results, objectives and resources, and records decisions. Auditors check this closely, and missing minutes is a common finding.",
  },
  {
    step: "08",
    label: "Corrective action",
    color: "#0f766e",
    title: "8. Corrective action on internal findings.",
    text: "Issues found internally are closed before the external auditor sees them. Far cheaper than closing them afterwards.",
  },
  {
    step: "09",
    label: "Application",
    color: "#c2410c",
    title: "9. Application to the certification body.",
    text: "We help you apply for iso certification with the right scope, headcount and site details, because these determine the audit plan. Apply for iso certification online is possible with most bodies, and we prepare the submission either way.",
  },
  {
    step: "10",
    label: "Stage 1 audit",
    color: "#1d4ed8",
    title: "10. Iso stage 1 audit.",
    text: "A readiness review. The auditor checks documentation, scope, internal audit and management review, and confirms you are ready for the main audit. Any gaps identified here must be addressed before Stage 2.",
  },
  {
    step: "11",
    label: "Stage 2 audit",
    color: "#be185d",
    title: "11. Iso stage 2 audit.",
    text: "The full implementation audit. The auditor samples records, interviews staff and verifies that the system works in practice across your processes and sites.",
  },
  {
    step: "12",
    label: "Close findings",
    color: "#4338ca",
    title: "12. Closure of non-conformities.",
    text: "Findings are classified by severity, and you submit corrective action with evidence. We provide corrective action closure assistance so responses address causes rather than symptoms.",
  },
  {
    step: "13",
    label: "Certification decision",
    color: "#0e7490",
    title: "13. Certification decision.",
    text: "An independent reviewer inside the certification body — not your auditor — decides on certification. This separation is deliberate and is part of what makes an accredited certificate meaningful.",
  },
  {
    step: "14",
    label: "Certificate issue",
    color: "#b45309",
    title: "14. Certificate issue.",
    text: "The certificate is issued with your scope, sites and standard. Verified and traceable certificate issuance means it can be checked independently by your customers.",
  },
  {
    step: "15",
    label: "Surveillance",
    color: "#15803d",
    title: "15. Ongoing surveillance.",
    text: "The system moves into its maintenance cycle. See the validity and renewal sections below.",
  },
];

export const PROCESS_EXTRA: { title: string; text: string }[] = [
  {
    title: "Audit-side support.",
    text: "Alongside implementation, we provide iso audit services covering internal audit, pre-audit readiness checks and audit attendance. Companies that want independent audit capability in-house can hire iso lead auditor training for their own staff instead. As an iso certification and audit support company we can take either role — build the system, or check a system somebody else built.",
  },
  {
    title: "Applying online.",
    text: "Most certification bodies now accept digital applications, and clients often ask how to apply iso certification online in india. The mechanics are simple; the accuracy is not. Headcount, shift pattern, site list and scope wording drive the audit plan, so we review the form before submission. Businesses working on public procurement — iso certification for companies applying on gem portal, or iso certification help for psu vendor registration in india — should share the portal’s exact requirement text with us, because the scope wording has to match what the portal will accept.",
  },
];

export const PROCESS_CLOSING =
  "We handle iso certification onboarding process start to finish, including scheduling. If you already know what you need, you can book iso certification audit planning with us directly, or schedule iso stage 1 audit once documentation is ready.";

export const TIMELINE_INTRO = [
  "There is no fixed statutory timeline for ISO certification, because it is not a government approval. The iso certification timeline depends on factors within your control and the certification body’s schedule.",
];

export const TIMELINE_DRIVES_HEADING = "What drives the duration";

export const TIMELINE_DRIVES: { title: string; text: string }[] = [
  {
    title: "Where you start.",
    text: "A company with written procedures and running records moves quickly. One starting from nothing needs implementation time.",
  },
  {
    title: "Scope and sites.",
    text: "More processes and more locations mean more to prepare and more to audit.",
  },
  {
    title: "Evidence period.",
    text: "The system must run long enough to produce records the auditor can sample, and to complete one internal audit and one management review. This is usually the real constraint.",
  },
  {
    title: "Team availability.",
    text: "Documentation moves at the speed of the people who own the processes.",
  },
  {
    title: "Certification body scheduling.",
    text: "Audit dates depend on auditor availability in your sector and region.",
  },
  {
    title: "Findings at Stage 2.",
    text: "Major findings require corrective action and verification before the decision.",
  },
];

export const TIMELINE_SPEED_HEADING = "Where speed is genuinely possible";

export const TIMELINE_SPEED =
  "Fast iso certification in india is realistic when a business already operates in a controlled way and simply has not documented it. It is not realistic when the system has to be built from zero — and any provider offering a certificate without an implementation period is not offering an accredited one. If your deadline is tight, tell us at the start: urgent iso certification services and iso certification turnaround time service planning work by sequencing the project around your audit date, not by skipping steps. For companies that need to get iso certificate urgently for a tender, we will tell you honestly whether the date is achievable.";

export const TIMELINE_NOTE =
  "Processing time depends on the latest regulatory requirements and on your certification body’s own procedures.";

export const COST_INTRO = [
  "We do not publish a price list, and you should be careful with anyone who does before seeing your scope. Iso certification cost in india is not one number — it is at least two, and often three.",
];

export const COST_TOTAL_HEADING = "What makes up the total";

export const COST_TOTAL: { title: string; text: string }[] = [
  {
    title: "Certification body charges.",
    text: "Iso certification body charges are calculated mainly from audit man-days, which in turn depend on your headcount, number of sites, processes and risk level. These rules come from the accreditation framework, not from negotiation.",
  },
  {
    title: "Consultancy charges.",
    text: "Iso certification consultant charges cover gap analysis, documentation, training, internal audit support and audit attendance. This depends on how much of the work you want to keep in-house.",
  },
  {
    title: "Testing or calibration costs.",
    text: "Applicable only where your processes need calibrated equipment or laboratory work.",
  },
  {
    title: "Internal cost.",
    text: "Your team’s time. Real, and usually underestimated.",
  },
  {
    title: "Ongoing cost.",
    text: "Surveillance audits during the cycle and the recertification audit at the end. Iso certification annual maintenance service is a recurring line, not a one-time one.",
  },
];

export const COST_MOVE_HEADING = "Factors that move the number up or down";

export const COST_MOVE = [
  "Number of employees and shifts",
  "Number and location of sites",
  "Complexity and risk of your processes",
  "Number of standards being certified together — integrated management system certification typically costs less than the same standards done separately",
  "Current documentation maturity",
  "Whether you need training and internal audit support or only documentation",
  "Accreditation status of the certification body",
];

export const COST_QUOTE_HEADING = "How we quote";

export const COST_QUOTE =
  "We quote after understanding your scope, not before. You get transparent iso certification pricing broken into consultancy and certification-body components so you can see what you are paying for, with no hidden charges iso certification. Iso certification cost for small company and iso certification cost for startup are usually lower simply because audit effort scales with size — not because the system is weaker.";

export const COST_QUESTIONS_HEADING = "The questions we are asked most";

export const COST_QUESTIONS = [
  "People search for iso certification fees, iso certification charges, iso certification price and even an iso certification cost calculator hoping for a single figure. There is no honest single figure, and an iso certification price list published without seeing your scope is a marketing device, not a quotation. What we can tell you is how the number is built: iso audit cost in india follows the audit man-day rules of the accreditation framework, while iso consultant fees in india follow the amount of preparation work you want handed over. An iso certification package price makes sense only once both parts are defined.",
  "Be careful with low cost iso certification in india offers that skip the implementation period entirely. The saving is real, but so is the risk — those certificates are usually the non-accredited kind, and the customer who asked for the certificate is often the one who discovers it. Affordable iso certification services are possible; instant ones are not.",
  "Administration is straightforward at our end. Send an iso certification quote request with your scope, and once work is agreed we raise the paperwork you need — iso certification invoice request handling and iso certification payment online options are both available.",
  "If you want a number to work with, send us your activity, employee count and site list and request iso certification proposal. We will respond with a written scope and an iso certification quotation.",
];

export const VALIDITY_INTRO =
  "Under the accreditation rules that certification bodies work to, an ISO certificate is normally issued for a three-year certification cycle, with surveillance audits during that period. Iso certification validity therefore depends on two things: the calendar, and your continued compliance.";

export const VALIDITY_KEEP_HEADING = "What keeps it valid";

export const VALIDITY_KEEP = [
  "Completing each surveillance audit on schedule.",
  "Keeping the system running and generating records between audits.",
  "Closing any findings within the agreed time.",
  "Keeping the certified scope accurate — if your activities, sites or entity name change, the certificate must be updated.",
];

export const VALIDITY_END_HEADING = "What can end it early";

export const VALIDITY_END = [
  "Missed or repeatedly postponed surveillance audits.",
  "Unclosed major non-conformities.",
  "Misuse of the certification mark or the accreditation symbol.",
  "A system that has clearly stopped operating.",
];

export const VALIDITY_NOTE =
  "Certification bodies can suspend a certificate and, if the issue is not resolved, withdraw it. Exact cycle dates, surveillance intervals and conditions are set by your certification body’s agreement and may vary depending on the latest applicable accreditation requirements — always confirm them against your own certificate and contract.";

export const RENEWAL_INTRO =
  "Iso certification renewal is not a form-filling exercise at the end of the cycle. It is a full reassessment.";

export const RENEWAL_DURING: { title: string; text: string }[] = [
  {
    title: "During the cycle:",
    text: "surveillance audits check that the system is still operating. These are narrower than the certification audit but they are not a formality. Iso surveillance audit planning is part of our maintenance support, and you can arrange iso audit booking for surveillance well in advance to avoid scheduling pressure.",
  },
  {
    title: "At the end of the cycle:",
    text: "an iso recertification audit reassesses the entire system, similar in depth to the original Stage 2. The iso certification renewal process after three years works best when it starts several months before expiry, not weeks.",
  },
];

export const RENEWAL_PRECAUTIONS_HEADING = "Precautions that save trouble";

export const RENEWAL_PRECAUTIONS: { title: string; text: string }[] = [
  {
    title: "Do not let the certificate lapse.",
    text: "A gap in certification can affect tender eligibility and buyer contracts, and restarting is more work than renewing.",
  },
  {
    title: "Keep records current throughout the cycle.",
    text: "Recreating a year of records before an audit is obvious to any experienced auditor, and it is a finding.",
  },
  {
    title: "Update your scope when the business changes.",
    text: "Add new site to iso certificate or change scope of iso certificate as soon as the change happens, not at renewal.",
  },
  {
    title: "Plan standard upgrades early.",
    text: "When a standard is revised, there is a transition window. Iso certification upgrade work — for example upgrade iso 9001 2008 to 2015 for organisations still holding a very old certificate — should be planned, not rushed.",
  },
];

export const RENEWAL_TRANSFER: { title: string; text: string }[] = [
  {
    title: "Changing your certification body.",
    text: "Iso certification transfer to another body is possible during a cycle, subject to transfer rules and the status of your current certificate. We handle the iso certification transfer application and the coordination. This is common when a company discovers its existing certificate is not accredited, or when a customer specifies a particular accreditation.",
  },
];

export const RENEWAL_CLOSING =
  "We also handle routine certificate administration: renew iso certificate online where the body supports it, iso certificate correction request for name or address changes, iso certificate reprint request, add new standard to existing iso certificate, and surrender iso certificate where a scope is discontinued.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Documentation that does not match reality.",
    text: "The most frequent problem we inherit. A previous consultant supplied a generic manual, nobody read it, and the auditor finds a gap between the written system and the actual one within an hour.",
  },
  {
    title: "No usable records.",
    text: "The system was documented but never operated, so there is nothing to sample. This cannot be fixed quickly, and it is the main reason audits get postponed.",
  },
  {
    title: "Internal audit treated as paperwork.",
    text: "A checklist ticked without evidence is visible immediately. Common non conformities found in iso 9001 audits cluster here, along with management review and corrective action.",
  },
  {
    title: "Corrective actions that treat symptoms.",
    text: "“Operator counselled” is not a root cause. Findings reopen at the next audit, and the same issue keeps returning.",
  },
  {
    title: "Scope defined carelessly.",
    text: "Too narrow and your customer rejects the certificate. Too wide and you pay for audit effort you did not need.",
  },
  {
    title: "Wrong standard chosen.",
    text: "An IT company certified to ISO 9001 when the client questionnaire asked for ISO 27001 has spent money without solving the problem.",
  },
  {
    title: "Unaccredited certificates.",
    text: "A business buys a cheap certificate, uses it for two years, then fails a vendor check. The cost of doing it again properly is higher than doing it once. There are also real consequences to misrepresentation — penalty for using a fake iso certificate in india is a question we are asked often, and the commercial damage of being caught usually arrives before anything else does.",
  },
  {
    title: "Calibration and supplier control gaps.",
    text: "Easy to overlook, consistently checked by auditors.",
  },
  {
    title: "Losing momentum after certification.",
    text: "The system decays, and the first surveillance audit becomes a crisis.",
  },
];

export const HOW_WE_HELP_ITEMS: { title: string; text: string }[] = [
  {
    title: "Standard selection.",
    text: "We start by reading what your customer, tender or buyer actually asks for. Choosing between ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000, ISO 13485 and ISO 20000-1 is a commercial decision as much as a technical one.",
  },
  {
    title: "Gap analysis and planning.",
    text: "A documented gap list, owners and a sequence — so you know the size of the project before committing.",
  },
  {
    title: "Documentation and coordination support.",
    text: "Manuals, procedures, formats and registers, drafted with your team. Audit ready documentation preparation that reflects your actual process.",
  },
  {
    title: "Training.",
    text: "Awareness sessions for staff and internal auditor capability where you want it in-house.",
  },
  {
    title: "Internal audit and management review.",
    text: "We help you run both properly, because both are checked at Stage 1.",
  },
  {
    title: "Certification body coordination.",
    text: "Application, scope submission, scheduling and communication. Accredited certification body coordination throughout, with certification body impartiality explained clearly — the body audits and certifies; we prepare and support. The two roles are separate for good reason.",
  },
  {
    title: "Audit attendance.",
    text: "On site audit support by consultants, so your team is not facing the auditor alone.",
  },
  {
    title: "Findings closure.",
    text: "Corrective action closure assistance with evidence packs that close findings the first time.",
  },
  {
    title: "Maintenance.",
    text: "Surveillance planning, record reviews and renewal scheduling through the full cycle.",
  },
  {
    title: "Sector-focused teams.",
    text: "Iso certification consultancy for exporters, iso certification consultancy for msme, iso certification consultancy for it companies and iso certification consultancy for food industry are handled by consultants who work in those sectors regularly, because the evidence an auditor asks for differs sharply between a food line and a data centre.",
  },
  {
    title: "Multi-standard and multi-site work.",
    text: "Multi standard iso certification services and multi site iso certification where you need more than one standard or more than one location under a single, coherent system.",
  },
];

export const HOW_WE_HELP_NOTE =
  "We cannot and do not guarantee certification — the decision belongs to the certification body alone.";

export const EVALUATE_INTRO =
  "Most companies hire the first firm that calls them back. A short evaluation saves far more than it costs.";

export const EVALUATE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Separate the two roles first.",
    text: "You are buying two different things: consultancy, and certification. Iso consultancy services prepare you. The certification body assesses you. If a single firm offers both, that is a problem, not a convenience.",
  },
  {
    title: "Ask what is included in writing.",
    text: "Does the fee cover gap analysis, documentation, training, internal audit and audit attendance — or only documentation? This single question explains most price differences when people compare iso certification providers.",
  },
  {
    title: "Check sector experience, not just years.",
    text: "An experienced iso certification consultant who has worked in your sector will know what your auditor asks. Ask for examples from your industry before you sign.",
  },
  {
    title: "Verify the accreditation, not the brochure.",
    text: "Ask which body will issue the certificate and check its accreditation yourself.",
  },
  {
    title: "Ask who will actually do the work.",
    text: "Many firms sell with a senior person and deliver with a junior one. Ask for the name of the consultant assigned to your file.",
  },
  {
    title: "Look for a written scope.",
    text: "Any professional iso consultancy firm will give you a scope document before taking money. If you only get a price, ask again.",
  },
  {
    title: "Treat guarantees as a warning.",
    text: "Nobody can guarantee a certification decision. A trusted iso certification consultancy will tell you what could go wrong, not promise that nothing will.",
  },
  {
    title: "Check what happens after certification.",
    text: "Ask what support you get during surveillance years — this is where a reliable iso certification agency separates itself from a one-transaction seller.",
  },
];

export const EVALUATE_CLOSING = [
  "Searching for an iso certification consultant near me or an iso certification agency near me is a reasonable starting point, and proximity does help during audit weeks. But the certification body’s auditor travels to you anyway, so do not let distance alone decide. Iso certification company reviews are worth reading, with the usual caution that they are easy to manufacture. An iso certification consultant comparison based on written scopes will tell you more than any review page.",
  "If you want to hire iso certification consultant support after that comparison, or simply engage iso implementation consultant help for the documentation stage only, we are happy to quote for either. You can book an iso certification appointment with consultant at a time that suits your team.",
];

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Experience across sectors.",
    text: "Iso consultants with manufacturing sector experience and iso consultants with export sector experience, which matters because an auditor’s questions in a fabrication unit are nothing like those in a software firm. Industry specific iso implementation experience shortens the whole project.",
  },
  {
    title: "Iso certification expert team.",
    text: "Certified iso lead auditors on panel and compliance specialist for management systems — people who have sat on both sides of the audit table.",
  },
  {
    title: "A structured method.",
    text: "Structured implementation methodology with defined stages, deliverables and owners, so you always know what happens next and who is responsible.",
  },
  {
    title: "One accountable contact.",
    text: "A dedicated compliance manager assigned to your account. Responsive iso certification support team — questions get answered the same working day.",
  },
  {
    title: "Transparency.",
    text: "Transparent iso certification pricing, a written scope before work starts, and no hidden charges iso certification.",
  },
  {
    title: "Confidentiality.",
    text: "Confidential handling of company documents and nda backed consultancy engagement on request. Your technical and commercial information stays with us.",
  },
  {
    title: "Accredited route, always.",
    text: "Government recognised accreditation route through accredited certification body coordination. We will not arrange a certificate that cannot survive a customer’s verification.",
  },
  {
    title: "Support that does not end at the certificate.",
    text: "Post certification maintenance support and legal and regulatory compliance support across the cycle.",
  },
  {
    title: "Track record.",
    text: "Proven iso certification track record across manufacturing, export, services, IT, food and healthcare clients. Client references available on request.",
  },
  {
    title: "Work at any scale.",
    text: "End to end iso certification services for a twelve-person workshop and corporate iso certification services for a multi-plant group run on the same method, with different depth. Iso certification advisory services india clients who only need guidance — standard selection, scope review, a second opinion on an existing system — are welcome to engage us for that alone.",
  },
  {
    title: "Wider compliance capability.",
    text: "We work as an iso and bis certification consultant, so if your product also needs BIS, EPR, LMPC or other approvals, one team can see the whole compliance picture.",
  },
];

export const STANDARDS_INTRO =
  "These are the management system standards we support. Each will have its own detailed page as we publish them.";

export const STANDARDS_ROWS: TableRow[] = [
  {
    standard: "ISO 9001",
    covers: "Quality management system",
    required: "Almost all tenders, OEM supplier programmes, general buyer requirements",
    page: "Coming Soon",
  },
  {
    standard: "ISO 14001",
    covers: "Environmental management system",
    required: "Buyers with ESG requirements, large projects, process industries",
    page: "Coming Soon",
  },
  {
    standard: "ISO 45001",
    covers: "Occupational health and safety management system",
    required: "Construction, infrastructure, EPC and contractor prequalification",
    page: "Coming Soon",
  },
  {
    standard: "ISO 27001",
    covers: "Information security management system",
    required: "IT, SaaS, BPO and any business handling client data",
    page: "Coming Soon",
  },
  {
    standard: "ISO 22000",
    covers: "Food safety management system",
    required: "Food processing, packaged food brands, agro and spice exporters",
    page: "Coming Soon",
  },
  {
    standard: "ISO 13485",
    covers: "Quality management system for medical devices",
    required: "Medical device manufacturers, importers and their suppliers",
    page: "Coming Soon",
  },
  {
    standard: "ISO 20000-1",
    covers: "IT service management system",
    required: "Managed service providers and government IT vendors",
    page: "Coming Soon",
  },
];

export const STANDARDS_DETAIL_INTRO =
  "There are many published ISO standards, but only a handful are certified in practice. Below is the short version — the full types of iso certification and iso certification standards list can run to dozens of documents, most of which are guidance rather than certifiable.";

export const STANDARDS_DETAILS: { title: string; text: string }[] = [
  {
    title: "ISO 9001 — quality.",
    text: "The default. Iso quality certification is what most tenders and OEM supplier programmes mean when they simply say “ISO certified”. If you are starting from nothing, start here. Companies asking what iso 9001 certification cost in india looks like should read the cost section — the answer depends on headcount and sites, not on a price list. And a caution worth stating plainly: you cannot buy iso 9001 certification as a product. You can only start iso 9001 implementation and be assessed on it. Iso 9001 certification for small manufacturing unit work — a fabrication shop, an iso certification for cnc machining workshop, a small assembly unit — is completely routine.",
  },
  {
    title: "ISO 14001 — environment.",
    text: "Iso environmental certification covers environmental aspects, legal obligations and impact control. Companies usually get iso 14001 certificate for factory operations when a buyer raises ESG questions or a project owner requires it. Iso 14001 certification cost tracks closely with site count and process complexity.",
  },
  {
    title: "ISO 45001 — occupational health and safety.",
    text: "Iso safety certification for workplaces with real physical risk. Iso 45001 certification requirements for construction companies are stricter in practice because the auditor will look at sites, not just the head office. Contractors who need to get iso 45001 certificate for construction site prequalification should plan for site visits in the audit programme. Iso 45001 certification cost reflects that.",
  },
  {
    title: "ISO 27001 — information security.",
    text: "The standard client security questionnaires ask for by name. Iso 27001 certification requirements for it and saas companies centre on a risk assessment, a statement of applicability and evidence that controls actually operate. Businesses that start iso 27001 implementation early usually find the documentation lighter than expected and the evidence heavier. Iso 27001 certification cost in india depends heavily on the number of systems and locations in scope.",
  },
  {
    title: "ISO 22000 — food safety.",
    text: "Iso food safety certification built on hazard analysis and prerequisite programmes. Iso 22000 certification requirements for food manufacturers include a food safety plan supported by real monitoring records. Businesses that need to get iso 22000 certificate for food unit operations should expect the auditor to walk the line, not just read the file. Iso 22000 certification cost varies with product range and process steps.",
  },
  {
    title: "ISO 13485 — medical devices.",
    text: "Iso medical device certification with a regulatory focus. Iso 13485 certification requirements for medical device manufacturers cover design controls, traceability and, where applicable, sterile product requirements. Companies that need to get iso 13485 certificate for medical device company purposes usually hold statutory licences as well — the two run side by side. Iso 13485 certification cost is higher per employee than ISO 9001 because the audit is deeper.",
  },
  {
    title: "ISO 20000-1 — IT service management.",
    text: "Iso 20000 certification covers how IT services are delivered and supported. Managed service providers and government IT vendors are the usual applicants, often alongside ISO 27001.",
  },
];

export const STANDARDS_RELATED =
  "Related capabilities we support alongside these include iso 17025 laboratory accreditation for testing and calibration laboratories, iso energy management certification, and integrated management system certification for iso 9001 14001 45001 where several standards are run as one system.";

export const INDUSTRIES_ROWS: TableRow[] = [
  {
    sector: "Engineering and general manufacturing",
    standards: "ISO 9001, ISO 14001, ISO 45001",
    why: "OEM supplier requirements and tender eligibility",
  },
  {
    sector: "Auto components",
    standards: "ISO 9001, ISO 14001",
    why: "Customer supplier development programmes",
  },
  {
    sector: "Electrical and electronics",
    standards: "ISO 9001, ISO 14001",
    why: "Institutional buyers and project contracts",
  },
  {
    sector: "Textiles and garments",
    standards: "ISO 9001, ISO 14001",
    why: "Overseas buyer audits and compliance questionnaires",
  },
  {
    sector: "Food processing",
    standards: "ISO 22000, ISO 9001",
    why: "Retail and export buyer requirements; iso certification for food processing units in india",
  },
  {
    sector: "Pharmaceuticals, ayurveda and cosmetics",
    standards: "ISO 9001, ISO 14001",
    why: "Buyer and institutional requirements alongside statutory licences",
  },
  {
    sector: "Medical devices and diagnostics",
    standards: "ISO 13485, ISO 9001",
    why: "Regulatory expectations and distributor requirements",
  },
  {
    sector: "Hospitals and laboratories",
    standards: "ISO 9001, ISO 45001",
    why: "Empanelment, insurer and institutional requirements",
  },
  {
    sector: "IT, software and BPO",
    standards: "ISO 27001, ISO 20000-1, ISO 9001",
    why: "Client security questionnaires and data protection clauses",
  },
  {
    sector: "Construction and infrastructure",
    standards: "ISO 45001, ISO 9001, ISO 14001",
    why: "Contractor prequalification and project safety requirements",
  },
  {
    sector: "Solar and renewable energy",
    standards: "ISO 9001, ISO 14001",
    why: "Iso certification for solar and renewable energy companies in india, driven by EPC and tender requirements",
  },
  {
    sector: "Logistics and warehousing",
    standards: "ISO 9001, ISO 45001",
    why: "Corporate client contracts and 3PL vendor onboarding",
  },
  {
    sector: "Facility, manpower and security services",
    standards: "ISO 9001, ISO 45001",
    why: "Large-client contract clauses",
  },
  {
    sector: "Chemicals and plastics",
    standards: "ISO 9001, ISO 14001",
    why: "Iso certification for plastic recycling unit and process-industry buyer requirements",
  },
  {
    sector: "Education and training",
    standards: "ISO 9001",
    why: "Accreditation, funding and institutional credibility",
  },
  {
    sector: "Trading and e-commerce",
    standards: "ISO 9001",
    why: "Marketplace and institutional buyer requirements",
  },
];

export const INDUSTRIES_CLOSING = [
  "Regional focus: we work nationally and are active in the northern manufacturing belt. Iso certification consultant in noida, iso certification consultant in delhi, iso certification consultant in gurgaon, iso certification consultant in ghaziabad and iso certification consultant in faridabad cover the NCR cluster, including iso certification consultant for msme units in delhi ncr. We also support iso certification consultant in mumbai, iso certification consultant in pune, iso certification consultant in ahmedabad, iso certification consultant in chennai, iso certification consultant in bangalore, iso certification consultant in hyderabad, iso certification consultant in kolkata, iso certification consultant in jaipur, iso certification consultant in ludhiana and iso certification consultant in coimbatore.",
  "Sector-and-location work we handle regularly includes iso certification for electronics manufacturers in noida, iso certification for auto ancillary units in pune, iso certification for engineering goods exporters in ludhiana, iso certification for chemical manufacturing plants in gujarat and iso certification for textile and garment units in tirupur. Clients asking about cost of iso certification for a manufacturing unit in noida, iso certification in delhi, iso certification in mumbai, iso certification in pune, iso certification in gurgaon, iso certification in noida, iso certification in ghaziabad, iso certification in faridabad, iso certification in chennai, iso certification in bangalore or iso certification in ahmedabad get the same answer: the cost follows your scope and headcount, not your pin code.",
];

export const MISTAKES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Choosing on price alone.",
    text: "The cheapest quote usually excludes training, internal audit and audit attendance — or points to a certificate that will not survive verification.",
  },
  {
    title: "Not checking accreditation.",
    text: "Ask which accreditation body the certification body works under, and verify it. Difference between nabcb accredited and non accredited iso certificate is the difference between a certificate that is accepted and one that is questioned.",
  },
  {
    title: "Confusing the consultant with the certifier.",
    text: "They must be different organisations. A single entity that both implements and certifies compromises impartiality, and that certificate carries the risk.",
  },
  {
    title: "Believing a consultant is “government approved”.",
    text: "Consultants are not approved by the government. The accreditation route behind the certification body is what carries official recognition. Treat “government approved consultant” claims as a warning sign.",
  },
  {
    title: "Leaving top management out.",
    text: "Auditors interview senior management. If leadership cannot explain the policy and objectives, that is a finding regardless of how good the paperwork is.",
  },
  {
    title: "Writing a scope nobody checked against the tender.",
    text: "Read the tender clause first, then write the scope.",
  },
  {
    title: "Backdating records.",
    text: "Experienced auditors identify this quickly, and it puts the whole certificate at risk.",
  },
  {
    title: "Forgetting the certificate exists until it expires.",
    text: "Renewal planning should start well before the cycle ends.",
  },
  {
    title: "Using the ISO logo incorrectly.",
    text: "Iso certification logo usage rules and accreditation symbol rules are set by the certification body and accreditation body. Misuse can lead to suspension.",
  },
];

export const EXPERT_TIPS = [
  "Start with the requirement document, not the standard. The tender clause or buyer questionnaire tells you exactly which standard and which accreditation you need. Everything else follows from that.",
  "Ask for a written scope before paying anything. It should state the standard, the activities, the sites, what is included and what is not.",
  "Verify any certificate you rely on. Use iso certificate verification online and the certification body’s own register, and check the accreditation mark. Do this for your own suppliers too.",
  "Do the internal audit properly, once. A genuine internal audit finds the issues the external auditor would have found — at a fraction of the cost.",
  "Keep records in the format your team already uses. A system on familiar formats survives; a system on unfamiliar ones does not.",
  "Certify several standards together if you know you will need them. Integrated management system certification saves audit days and duplicate documentation.",
  "Name a real owner internally. Someone in your organisation must own the system. A consultant can build and support it, but cannot be the person who runs it every day.",
  "Plan around your audit calendar. Surveillance dates are fixed by the cycle. Diarise them the day you receive the certificate.",
  "Keep the scope current. New site, new activity, new entity name — update the certificate when it happens.",
  "Check the certificate before you circulate it. Legal name, address, scope wording and standard version should all match what your customer expects.",
];

export const COMPARISON_ROWS: TableRow[] = [
  {
    comparison: "ISO 9001 vs ISO 14001",
    different: "Quality management versus environmental management",
    takeaway: "Start with ISO 9001 unless a buyer or project specifically asks for environmental performance",
  },
  {
    comparison: "ISO 9001 vs ISO 45001",
    different: "Process quality versus worker health and safety",
    takeaway: "Construction and high-risk operations usually need ISO 45001 alongside ISO 9001",
  },
  {
    comparison: "ISO 9001 vs ISO 27001",
    different: "Product and service quality versus information security",
    takeaway: "If the requirement came from a client security questionnaire, you need ISO 27001",
  },
  {
    comparison: "ISO 14001 vs ISO 45001",
    different: "Environmental impact versus occupational risk",
    takeaway: "Different registers, different legal obligations; often implemented together",
  },
  {
    comparison: "ISO 22000 vs HACCP",
    different: "Full food safety management system versus hazard control methodology",
    takeaway: "ISO 22000 includes HACCP principles within a wider management system",
  },
  {
    comparison: "ISO 13485 vs ISO 9001",
    different: "Medical device regulatory focus versus general quality",
    takeaway: "Device manufacturers need ISO 13485; ISO 9001 alone rarely satisfies the buyer",
  },
  {
    comparison: "ISO 20000-1 vs ISO 27001",
    different: "Service management versus information security",
    takeaway: "Managed service providers are frequently asked for both",
  },
  {
    comparison: "Certification body vs accreditation body",
    different: "One audits and certifies you; the other assesses the certification body",
    takeaway: "You buy certification; the value comes from the accreditation behind it",
  },
  {
    comparison: "Accredited vs non-accredited certificate",
    different: "Whether the issuing body is itself assessed",
    takeaway: "Non-accredited certificates are cheaper and are the ones that get rejected",
  },
  {
    comparison: "Certification vs accreditation",
    different:
      "Difference between iso certification and iso accreditation — certification applies to your management system; accreditation applies to bodies and, separately, to laboratories",
    takeaway: "Businesses get certified. Laboratories under ISO/IEC 17025 get accredited",
  },
  {
    comparison: "Internal audit vs external audit",
    different: "Self-check versus independent assessment",
    takeaway: "Both are mandatory; the internal one protects you in the external one",
  },
  {
    comparison: "Stage 1 vs Stage 2 audit",
    different: "Readiness review versus full implementation audit",
    takeaway: "Stage 1 tells you where you stand before it counts",
  },
  {
    comparison: "Surveillance vs recertification audit",
    different: "Periodic check versus full cycle-end reassessment",
    takeaway: "Recertification is closer in depth to your original audit",
  },
  {
    comparison: "ISO 9001:2008 vs ISO 9001:2015",
    different:
      "Difference between iso 9001 2008 and iso 9001 2015 versions — risk-based thinking, context of the organisation and leadership requirements were introduced",
    takeaway: "Any certificate still on an obsolete version needs an upgrade, not a renewal",
  },
  {
    comparison: "Single standard vs integrated system",
    different: "One system covering several standards versus separate systems",
    takeaway: "Integration reduces duplicate documentation and audit effort",
  },
  {
    comparison: "Management system certification vs product certification",
    different: "Systems versus products",
    takeaway: "ISO covers the system. BIS, CE and similar schemes cover products",
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Do we need an iso consultant or can we apply directly?",
    a: "You can apply directly. Many companies do, especially if someone in-house has run a management system before. A consultant is worth it when you have no internal experience, a tight deadline, or a buyer requirement you cannot afford to get wrong. The certification body audits either way — it does not care who prepared you.",
  },
  {
    q: "What is your iso certification process step by step?",
    a: "Scope discussion, gap analysis, documentation, implementation, training, internal audit, management review, application, Stage 1 audit, Stage 2 audit, closure of findings, certification decision, certificate issue, then surveillance. The full sequence is explained in the process section above.",
  },
  {
    q: "How quickly can you complete our iso certification?",
    a: "It depends on how much of the system already exists and how quickly your team can produce records. We will give you an honest assessment after the gap analysis rather than a number before it. Processing time also depends on your certification body’s audit schedule.",
  },
  {
    q: "Which iso standard do you recommend for our industry?",
    a: "We recommend based on what your customers and tenders ask for. Manufacturing usually starts with ISO 9001. IT and SaaS usually need ISO 27001. Food businesses need ISO 22000. Construction adds ISO 45001. Send us the requirement document and we will tell you which standard actually satisfies it.",
  },
  {
    q: "Do you provide documentation or do we prepare it?",
    a: "We prepare it with your input. Your team knows how the work is done; we know what the standard expects and what an auditor will look for. Documentation written without your team never gets used.",
  },
  {
    q: "Will you conduct our internal audit as well?",
    a: "We support it, and we can conduct it where your structure allows. Many clients prefer their own trained internal auditors with us reviewing the output — that builds capability you keep.",
  },
  {
    q: "Do you support us during the certification body audit?",
    a: "Yes. On site audit support by consultants is part of our service. We are present to help your team answer accurately and to keep the audit on track.",
  },
  {
    q: "Is the certificate you arrange nabcb accredited?",
    a: "We work through accredited certification bodies. The specific accreditation is confirmed in writing before you engage, because different customers sometimes specify different accreditation. If your tender names a particular accreditation, tell us at the start.",
  },
  {
    q: "Will the certificate be accepted in government tenders?",
    a: "An accredited certificate from a recognised body is what tender committees normally look for. Acceptance is always decided by the tender clause, so we read the clause first and build the scope to match.",
  },
  {
    q: "Will the certificate be accepted by foreign buyers?",
    a: "Generally yes, where the accreditation body is an internationally recognised signatory. Some buyers specify their own preferred bodies or additional standards — check the buyer’s vendor manual before certifying.",
  },
  {
    q: "What information do you need to give us a proposal?",
    a: "Your legal entity name, activities to be covered, number of employees, number of sites, and the standard or the requirement document. That is enough for a written scope and an iso certification quotation.",
  },
  {
    q: "Do you work with companies outside delhi ncr?",
    a: "Yes. We work across India and coordinate audits wherever your sites are located.",
  },
  {
    q: "Do you handle multiple sites under one certificate?",
    a: "Yes. Multi site iso certification is common. Audit sampling rules decide how many sites the auditor visits, which affects both effort and cost.",
  },
  {
    q: "Can you certify more than one standard together?",
    a: "Yes, and it is usually the better choice if you know you will need them. An integrated system shares documentation and audit time.",
  },
  {
    q: "What happens if we fail the certification audit?",
    a: "“Failure” is rare in the way people imagine. What usually happens is that findings are raised and must be closed with evidence before the certification decision. Major findings may require a follow-up visit. We help you close them properly.",
  },
  {
    q: "Who pays the certification body fee?",
    a: "You do, directly to the certification body. We keep it separate from our consultancy fee so you can see both clearly.",
  },
  {
    q: "Is the audit conducted onsite or remotely?",
    a: "Certification audits are normally conducted on site, since the auditor needs to see operations and records in place. Some elements may be handled remotely depending on the certification body’s procedures and your scope.",
  },
  {
    q: "How many days will the audit take at our premises?",
    a: "Audit duration is calculated by the certification body from your headcount, sites and process complexity under its accreditation rules. We will confirm the planned duration with you once the application is submitted, rather than estimate it here.",
  },
  {
    q: "Do you provide training for our staff?",
    a: "Yes. Iso awareness training for all staff, and internal auditor training where you want in-house capability. Iso lead auditor training can be arranged separately.",
  },
  {
    q: "What records do we need to maintain after certification?",
    a: "Broadly the same records the system generated before it — operational records, internal audits, management reviews, corrective actions, training and calibration. The system has to keep running; a certificate does not pause it.",
  },
  {
    q: "What happens in the first surveillance audit?",
    a: "The auditor checks that the system is still operating, reviews your internal audit and management review since certification, and follows up on earlier findings. It is narrower than the certification audit, not lighter in seriousness.",
  },
  {
    q: "What if we miss a surveillance audit deadline?",
    a: "The certification body may suspend the certificate. Suspension can usually be resolved by completing the audit and closing findings, but a suspended or withdrawn certificate can affect tenders and contracts in the meantime. Do not let the date slip.",
  },
  {
    q: "Can we change our certification body mid cycle?",
    a: "Yes, subject to transfer rules and the standing of your current certificate. We handle iso certification transfer to another body, including the application and coordination.",
  },
  {
    q: "Can we add a standard later to the same certificate?",
    a: "Yes. Add new standard to existing iso certificate is a common scope extension, usually handled at a surveillance visit or through a separate extension audit.",
  },
  {
    q: "Can we expand our scope after certification?",
    a: "Yes — add new site to iso certificate or change scope of iso certificate as your business changes. Update it when the change happens, not at renewal.",
  },
  {
    q: "What if our company name changes after certification?",
    a: "Raise an iso certificate correction request with the certification body and supply the supporting legal document. The name on the certificate must match your registration exactly.",
  },
  {
    q: "How do we verify our certificate online?",
    a: "Through the certification body’s own certificate register and the accreditation body’s directory. Iso certificate verification online is worth doing for your own suppliers as well as for yourself.",
  },
  {
    q: "Can we use the iso logo on our website?",
    a: "Certification mark and accreditation symbol usage is governed by rules set by your certification body and its accreditation body. Follow those rules exactly — misuse can lead to suspension.",
  },
  {
    q: "Do you guarantee certification?",
    a: "No, and no honest consultant will. The certification decision belongs to an independent reviewer inside the certification body. What we guarantee is preparation — that you go into the audit knowing what will be asked and having the evidence to answer it.",
  },
  {
    q: "How do we start the process with you?",
    a: "Send us your activity details, employee strength and site list, or share the tender or buyer document that triggered the requirement. We will come back with a written scope, a proposed plan and a quotation.",
  },
];

export const CTA_HEADING = "Start Your ISO Certification";

export const CTA_PARAGRAPHS = [
  "If you know which standard you need, send us your scope and we will prepare a written proposal with a clear cost breakdown.",
  "If you are not sure — because the tender clause is vague, or the buyer questionnaire mentions three standards, or you are not certain whether your existing certificate is accredited — that is exactly the conversation to have first. Get iso certification for my company usually starts with one question: what does the person asking for the certificate actually need to see?",
];

export const CTA_REACH_HEADING = "How to reach us";

export const CTA_REACH: { title: string; text: string }[] = [
  {
    title: "Iso certification enquiry",
    text: "share your requirement and we will respond with next steps.",
  },
  {
    title: "Request iso certification proposal",
    text: "send scope, headcount and sites for a written quotation.",
  },
  {
    title: "Iso certification consultation booking",
    text: "book a scheduled call with a consultant to work through standard selection.",
  },
  {
    title: "Contact iso certification consultant in india",
    text: "for existing certificates, transfers, scope changes and renewals.",
  },
  {
    title: "Iso certification whatsapp enquiry and iso certification callback request",
    text: "if you would rather we call you.",
  },
];

export const CTA_CLOSING = [
  "You can also complete the iso certification service enquiry form on this site. Once we agree the scope, we prepare the certification body’s iso certification application form with you and handle the iso certification online application submission. If you prefer to review the paperwork first, an iso certification registration form download is available on request, along with a sanitised iso certificate sample so you can see the final output. Existing clients can use iso certificate download online access from their certification body’s portal, and anyone can run an iso certification number check against the issuing body’s register before relying on a certificate.",
];

export const CTA_TAGLINE =
  "Ornate Quality Service Pvt Ltd — documentation and coordination support, accredited certification body coordination, and post certification maintenance support, for companies that want a certificate that holds up when someone checks it.";
