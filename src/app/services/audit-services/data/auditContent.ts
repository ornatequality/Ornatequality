export type TocItem = {
  id: string;
  label: string;
};

export const AUDIT_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-audit", label: "What are Audit & Certification Services?" },
  { id: "importance", label: "Why Audit & Certification Matter" },
  { id: "services-offered", label: "Our Audit & Certification Services" },
  { id: "process", label: "Our Audit Process" },
  { id: "audit-types", label: "Types of Audits We Conduct" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "Audit & Certification Cost" },
  { id: "industries", label: "Industries We Serve" },
  { id: "benefits", label: "Key Benefits" },
  { id: "why-ornate", label: "Why Choose Ornate" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const AUDIT_SERVICES_ROWS = [
  {
    category: "BIS Factory Inspection Support",
    application: "Preparation and support for BIS CRS and ISI Mark factory inspections",
    output: "Inspection readiness + first-time approval",
  },
  {
    category: "ISO Certification Consulting",
    application: "Gap analysis, implementation, and audit preparation for ISO 9001, 14001, 45001, 22000, 27001",
    output: "ISO Management System Certificate",
  },
  {
    category: "NABL Accreditation Support",
    application: "ISO 17025 implementation and NABL assessment preparation for testing and calibration labs",
    output: "NABL Accreditation Certificate",
  },
  {
    category: "Supplier / Vendor Audits",
    application: "Independent assessment of supplier quality, compliance, and capability",
    output: "Supplier audit report with scoring",
  },
  {
    category: "Compliance Gap Assessment",
    application: "Assessment of current practices against applicable regulatory or standard requirements",
    output: "Gap report with prioritised action plan",
  },
  {
    category: "Internal Audit Services",
    application: "Conducting internal audits of management systems on behalf of clients",
    output: "Internal audit report with findings",
  },
  {
    category: "Pre-Certification Audit",
    application: "Readiness assessment before a regulatory or certification body assessment",
    output: "Corrective action plan before formal audit",
  },
  {
    category: "Social Compliance Audit",
    application: "Assessment against SMETA, SA8000, BSCI, or buyer-specific social standards",
    output: "Social compliance audit report",
  },
  {
    category: "Environmental Compliance Audit",
    application: "Assessment of environmental practices against legal requirements and ISO 14001",
    output: "Environmental compliance report",
  },
  {
    category: "Product Compliance Audit",
    application: "Verification of product compliance with BIS, CE, RoHS, FSSAI, or other standards",
    output: "Product compliance report",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Consult",
    color: "#0b57b5",
    title: "Step 1 — Initial Consultation & Scope Definition",
    text: "Every audit and certification engagement begins with a detailed consultation to understand your specific requirement — what you need audited or certified, against which standard or regulation, at what location, and within what timeline. We also assess your current state of readiness to calibrate the level of support required. The output of the initial consultation is a clear scope of work — defining exactly what our engagement will cover, what deliverables you will receive, and what the expected timeline and cost are. We do not begin work without a mutually agreed scope.",
  },
  {
    step: "02",
    label: "Gap",
    color: "#2563eb",
    title: "Step 2 — Gap Assessment",
    text: "For certification and compliance engagements, the next step is a structured Gap Assessment — a systematic comparison of your current practices, documentation, and systems against the requirements of the applicable standard or regulation. The Gap Assessment identifies what is already in place, what needs to be developed, and what needs to be improved. Our Gap Assessments are practical and prioritised — not just lists of requirements you are not yet meeting, but actionable plans that tell you exactly what to do, in what order, to achieve compliance efficiently.",
  },
  {
    step: "03",
    label: "Implement",
    color: "#0891b2",
    title: "Step 3 — Implementation Support",
    text: "For certification engagements — ISO, NABL, BIS, or others — the gap assessment is followed by an implementation phase where we help you close the identified gaps. This may involve developing documentation, establishing processes, training staff, coordinating equipment calibration, or making physical facility improvements. Our implementation support is hands-on and practical. We work alongside your team — not just advise from a distance — to ensure that improvements are genuinely embedded in your operations rather than existing only on paper.",
  },
  {
    step: "04",
    label: "Pre-Audit",
    color: "#059669",
    title: "Step 4 — Internal Audit or Pre-Certification Assessment",
    text: "Before any formal certification or regulatory audit, we conduct an internal audit or pre-certification assessment to verify that all gaps have been closed and that your organisation is genuinely ready for the formal assessment. This step is critical — it is the safety net that catches remaining issues before they become formal audit findings. Our pre-certification assessments are conducted with the same rigour as the formal assessment — so you experience no surprises on the day of the actual audit.",
  },
  {
    step: "05",
    label: "Formal",
    color: "#d97706",
    title: "Step 5 — Formal Audit or Regulatory Inspection Support",
    text: "On the day of the formal certification or regulatory audit, our team provides on-site support — briefing your team, ensuring evidence is presented correctly, and addressing auditor queries in real time. For BIS factory inspections, ISO certification audits, NABL assessments, and other regulatory visits, we remain present throughout the assessment to help your organisation respond confidently. After the formal audit, we support corrective action closure, follow-up submissions, and re-verification until certification or approval is achieved.",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Business Registration Certificate",
    details: "Company incorporation certificate, GST registration, or equivalent",
  },
  {
    no: "2",
    document: "Scope Description",
    details: "Description of the activities, products, processes, and locations to be covered by the audit",
  },
  {
    no: "3",
    document: "Applicable Standard or Regulation",
    details: "The specific standard, regulation, or buyer specification against which the audit will be conducted",
  },
  {
    no: "4",
    document: "Existing Documentation",
    details: "Any existing quality manuals, procedures, or management system documents",
  },
  {
    no: "5",
    document: "Previous Audit Reports",
    details: "Reports from any previous internal or external audits — for context and continuity",
  },
  {
    no: "6",
    document: "Organisational Chart",
    details: "Structure showing key roles and responsibilities relevant to the audit scope",
  },
  {
    no: "7",
    document: "Product or Process Information",
    details: "Technical specifications, process flow charts, or product descriptions relevant to the audit",
  },
  {
    no: "8",
    document: "Regulatory Approvals",
    details: "Existing licences, certificates, or approvals held by the organisation",
  },
  {
    no: "9",
    document: "Site Plan",
    details: "Layout plan of the facility for factory and site audits",
  },
  {
    no: "10",
    document: "Audit Timeline Requirement",
    details: "Required timeline for the audit — for scheduling and planning purposes",
  },
];

export const INDUSTRIES_ROWS = [
  {
    industry: "Electronics & IT",
    audit: "BIS CRS inspection, ISO 9001, RoHS, NABL",
    standard: "BIS Act, ISO 9001, RoHS Directive",
  },
  {
    industry: "Food & Beverage",
    audit: "FSSAI inspection, ISO 22000, HACCP",
    standard: "FSS Act, ISO 22000",
  },
  {
    industry: "Pharmaceuticals & Medical",
    audit: "CDSCO audit, ISO 13485, GMP audit",
    standard: "D&C Act, ISO 13485, WHO GMP",
  },
  {
    industry: "Manufacturing & Engineering",
    audit: "ISO 9001, ISO 14001, ISO 45001, BIS ISI",
    standard: "ISO 9001, IS codes, Factories Act",
  },
  {
    industry: "Oil, Gas & Petroleum",
    audit: "PESO inspection, ISO 45001, PED compliance",
    standard: "Petroleum Act, SMPV Rules",
  },
  {
    industry: "Testing Laboratories",
    audit: "NABL accreditation, ISO 17025",
    standard: "ISO/IEC 17025",
  },
  {
    industry: "Export & Import",
    audit: "Pre-shipment inspection, supplier audit, LMPC",
    standard: "BIS, LMPC Rules, buyer standards",
  },
  {
    industry: "Retail & E-Commerce",
    audit: "EPR compliance, FSSAI, product compliance",
    standard: "EPR Rules, FSS Act, BIS",
  },
];

export const WHY_ORNATE_COMPARISON_ROWS = [
  {
    others: "Single standard expertise",
    ornate: "Multi-standard capability — ISO, BIS, NABL, FSSAI, CDSCO, PESO, and more",
  },
  {
    others: "Generic documentation templates",
    ornate: "Customised documentation that reflects your actual business operations",
  },
  {
    others: "Advisory support only",
    ornate: "Hands-on implementation support — we do the work, not just advise",
  },
  {
    others: "Certification focused only",
    ornate: "Certification + regulatory approval combined — end-to-end compliance",
  },
  {
    others: "One-time engagement model",
    ornate: "Long-term compliance partnership — ongoing support after certification",
  },
  {
    others: "Limited regulatory knowledge",
    ornate: "15+ years of deep regulatory experience across BIS, PESO, FSSAI, CDSCO, and more",
  },
  {
    others: "Slow turnaround on deliverables",
    ornate: "Fast, structured delivery with clear timelines agreed upfront",
  },
];

export const BENEFITS_ITEMS = [
  "Regulatory compliance — meet mandatory audit and certification requirements for all applicable regulations",
  "First-time approval — thorough preparation significantly improves first-time pass rates for regulatory assessments",
  "Risk identification — proactive audits identify compliance gaps before they trigger enforcement action",
  "Buyer confidence — certified and audited businesses build stronger, more sustainable commercial relationships",
  "Operational improvement — audit findings drive process improvement and quality system strengthening",
  "Export readiness — audit certifications meet the requirements of international buyers and supply chain qualification",
  "Legal protection — documented compliance provides protection in regulatory and commercial disputes",
  "Cost efficiency — preventing compliance failures through proactive auditing is always cheaper than dealing with failures after the fact",
  "Continuous improvement — systematic audit programmes build a culture of quality and compliance that compounds over time",
];

export const FAQ_ITEMS = [
  {
    q: "What is the difference between a compliance audit and a certification audit?",
    a: "A compliance audit assesses whether an organisation meets the requirements of a specific regulation or standard — and produces a report identifying conformances and non-conformances. It does not result in a formal certificate. A certification audit is conducted by an accredited certification body and results in the issuance of a formal certificate — such as an ISO certificate or NABL accreditation — that independently confirms the organisation's compliance. Ornate Quality Services conducts compliance audits as a consulting service, and supports organisations through certification audits conducted by accredited certification bodies.",
  },
  {
    q: "How long does an ISO certification audit take?",
    a: "The duration of an ISO certification audit depends on the size of the organisation, the complexity of its scope, and the number of processes covered. For a small to medium manufacturing company, the Stage 2 certification audit typically takes 1 to 3 man-days on-site. For larger organisations with multiple sites or complex operations, audit duration is longer. The audit duration is formally calculated by the certification body using a formula based on number of employees, processes, and sites.",
  },
  {
    q: "Can you support us through both BIS certification and ISO certification at the same time?",
    a: "Yes — and in fact, pursuing both together is often more efficient than pursuing them separately. ISO 9001 and BIS factory inspection requirements overlap significantly in areas like documented quality control procedures, equipment calibration, personnel competency records, and customer complaint handling. An integrated approach that meets both sets of requirements through a single management system is more cost-effective and produces a more coherent quality system than two separate compliance programmes.",
  },
  {
    q: "What happens if our organisation fails a certification audit?",
    a: "If a certification audit identifies non-conformities, the certification body issues a non-conformity report specifying the findings and a timeline for correction — typically 30 to 90 days. The organisation must close all non-conformities with documented corrective actions and evidence before the certificate can be issued. In some cases, a follow-up assessment is required. Our team supports organisations through the corrective action process — helping prepare responses, implement corrections, and close non-conformities as quickly as possible.",
  },
  {
    q: "Do you provide audit services for social compliance standards like SMETA or SA8000?",
    a: "Yes. We provide social compliance audit support for Indian manufacturers supplying to global brands that require SMETA (Sedex Members Ethical Trade Audit), SA8000, BSCI, or buyer-specific social compliance assessments. Social compliance audits cover labour practices, working conditions, health and safety, environmental practices, and business ethics. Our team prepares manufacturers for social compliance audits and supports corrective action for findings identified during assessments.",
  },
];
