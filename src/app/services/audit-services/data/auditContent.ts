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

export const AUDIT_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-audit", label: "What Are Audit Services?" },
  { id: "audit-types", label: "Audit Types Covered" },
  { id: "why-matters", label: "Why Are Audit Services Important?" },
  { id: "who-needs", label: "Who Needs Audit Services?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "key-features", label: "Key Features" },
  { id: "eligibility", label: "Eligibility" },
  { id: "documents", label: "Documents Required" },
  { id: "process", label: "Step-by-Step Process" },
  { id: "timeline", label: "Audit Timeline" },
  { id: "cost", label: "Cost Factors" },
  { id: "validity", label: "Audit Validity" },
  { id: "renewal", label: "Renewal and Repeat Audits" },
  { id: "challenges", label: "Common Challenges" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-ornate", label: "Why Choose Ornate" },
  { id: "industries", label: "Industries We Serve" },
  { id: "where-we-audit", label: "Where We Audit" },
  { id: "choose-partner", label: "How to Choose an Audit Partner" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "Choosing the Right Audit" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Ready to Plan Your Audit?" },
];

export const BANNER_TITLE = "Domestic & International Audit Services in India";

export const BANNER_SUBTITLE =
  "Independent factory, social compliance, supplier and quality management system audits for manufacturers, exporters, brand owners and retail sourcing teams — planned, carried out and reported by Ornate Quality Service Pvt Ltd.";

export const BANNER_DESCRIPTION =
  "Buyers no longer take a supplier's word for it. They want evidence: proof that a factory pays wages correctly, keeps fire exits clear, controls its processes and can deliver what it promises. Our audit services in India give you that evidence in a form buyers, certification bodies and your own management can act on — whether you need a social compliance audit in India, a supplier check or a quality audit services review before certification.";

export const KEY_HIGHLIGHTS: string[] = [
  "Factory audit services, social compliance audit services and supplier audit services under one team",
  "Audits against buyer codes of conduct, SA8000, amfori BSCI, SMETA, WRAP and ISO 9001 requirements",
  "Pre-audit gap assessment, mock audits and CAPA support so findings get closed, not just recorded",
  "Domestic audit services for Indian brands and international audit services for overseas buyers",
  "Evidence based audit reports with clear findings and practical next steps",
  "A Noida based audit company working with clients across India",
];

export const CTA_BOOK = "Book Factory Audit";
export const CTA_QUOTE = "Get Factory Audit Quote";
export const CTA_TALK = "Talk to Audit Expert";
export const CTA_SEND = "Send Audit Requirement";
export const CTA_REQUEST = "Request Audit Quotation";

export const INTRO_PARAGRAPHS: string[] = [
  "If you make, export or source products in India, sooner or later someone will ask to audit you — or you will need to audit someone else. A European retailer may ask your factory for a social compliance audit before the first order. A US brand may want a factory audit of its new supplier in Tirupur. An Indian retail chain may want its vendors checked against labour law before renewing contracts. A manufacturer preparing for ISO or BIS certification may simply want to know where it stands.",
  "Audit services exist to answer one practical question: does this site actually work the way it says it does? An auditor reviews documents, walks the floor, speaks with workers and management, and compares what is found against a defined standard — a buyer's code of conduct, an international standard or Indian law. The output is an audit report that shows what is working, what is not, and what needs to change.",
  "Compliance audit services matter because the cost of finding problems late is high. So do quality audit services and supply chain audit services — they catch weak points while they are still cheap to fix. A failed buyer audit can delay orders. A fire safety gap can put lives at risk. An undocumented process can stall a certification. Most of these issues are visible well before they become a crisis — if someone looks properly.",
  "Whether an audit is mandatory depends on who is asking. Many audits are commercial requirements set by buyers rather than legal requirements set by the government. Others, such as audits linked to certification, follow the rules of the relevant scheme. Requirements may vary depending on the latest official regulatory guidelines and your buyer's policy, so we always confirm the exact requirement before planning the audit.",
  "On this page you will find what audit services cover, the audit types we support, who needs them, the documents auditors ask for, how the process works, what drives cost and timeline, and how to prepare so your audit goes smoothly.",
];

export const WHAT_IS_PARAGRAPHS: string[] = [
  "Audit services are structured, evidence-based assessments of a factory, supplier or management system against agreed criteria. The purpose is to verify compliance, identify risk and give the audited business a clear path to improvement. A good audit does not just tick boxes. It explains why a gap matters and what a realistic fix looks like.",
  "There are three ways an audit is usually classified, and knowing the difference helps you choose the right service.",
];

export const AUDIT_CLASSIFICATION_ROWS: TableRow[] = [
  {
    type: "First party audit (internal audit)",
    meaning:
      "A business audits itself, usually to check its own systems before an external review. ISO 9001, for example, expects organisations to carry out internal audits of their quality management system.",
  },
  {
    type: "Second party audit",
    meaning:
      "A customer audits its supplier, either with its own team or through an appointed provider. Most supplier audit and vendor audit work falls into this category, and second party audit services are what brands and importers usually buy.",
  },
  {
    type: "Third party audit",
    meaning:
      "An independent organisation with no stake in the outcome carries out the audit. Third party audit services are preferred when the result must be impartial — for example, when a buyer wants an unbiased view of a factory.",
  },
];

export const WHAT_IS_CLOSING =
  "You will also hear about internal audit and external audit. An external audit is any audit done by someone outside the organisation — a customer, an independent auditor or a certification body.";

export const AUDIT_TYPES_INTRO =
  "Our audit services in India are organised by audit type. Each one answers a different question for a different decision.";

export const AUDIT_TYPES_ROWS: TableRow[] = [
  {
    type: "Factory audit",
    question: "Can this factory produce consistently, safely and in line with requirements?",
    requestedBy: "Importers, brands, sourcing agents",
  },
  {
    type: "Social compliance audit",
    question: "Are workers treated fairly and legally — wages, hours, safety, age, freedom of association?",
    requestedBy: "European, UK and US retailers and brands",
  },
  {
    type: "Supplier audit / vendor audit",
    question: "Is this supplier legitimate, capable and low-risk to work with?",
    requestedBy: "Brand owners, retail chains, procurement teams",
  },
  {
    type: "Quality management system audit",
    question: "Does the quality system work in practice, and is it ready for certification?",
    requestedBy: "Manufacturers, certification candidates",
  },
  {
    type: "Domestic audit",
    question: "Does the site meet Indian legal and customer requirements for the domestic market?",
    requestedBy: "Indian brands, retailers, MSMEs",
  },
  {
    type: "International audit",
    question: "Does the site meet the standards overseas buyers and schemes expect?",
    requestedBy: "Exporters and their overseas buyers",
  },
];

export const FACTORY_AUDIT_PARAGRAPHS: string[] = [
  "A factory audit looks at the whole site — legal registrations, production capacity, machinery, manpower, quality controls, subcontracting and working conditions. Our factory audit services in India are used as a third party factory audit before placing a purchase order, as a factory audit before signing a manufacturing contract, when a buyer wants to qualify a new manufacturer, or when an existing supplier's performance has slipped.",
  "A factory compliance audit focuses specifically on legal and code-of-conduct compliance, while a factory capability assessment — sometimes called an FCCA audit — focuses on whether the site has the capacity and systems to deliver. Many buyers combine the two into one manufacturer audit. Factory assessment services follow the same approach when a buyer wants a scored overview rather than a pass/fail result.",
  "Manufacturing audit services also include a process audit, where the auditor follows a product through the production line to check that each step is controlled and recorded, and a product quality audit, which checks how the factory controls product quality before goods leave the site.",
];

export const SOCIAL_AUDIT_INTRO =
  "A social compliance audit — also called a social audit or ethical audit — checks how a factory treats its workers. Social audit services and ethical audit services are often requested together with an ethical sourcing audit, where a buyer wants to understand the wider sourcing risk, or a code of conduct audit against the buyer's own code. Auditors review wages, working hours, overtime, age verification, contracts, health and safety, grievance handling, discrimination and freedom of association. Worker interviews are a central part of the process.";

export const SOCIAL_AUDIT_FORMATS_INTRO = "Buyers usually ask for a specific format. The most common ones in India are:";

export const SOCIAL_AUDIT_FORMATS: { title: string; text: string }[] = [
  {
    title: "SA8000 audit",
    text: "SA8000 is a certifiable social accountability standard published by Social Accountability International. SA8000 audit services prepare a site for certification, which is granted by an accredited certification body.",
  },
  {
    title: "BSCI audit",
    text: "An amfori BSCI audit checks a factory against the amfori BSCI Code of Conduct. These audits are carried out by audit companies approved under the amfori system, and the factory receives a rating rather than a certificate. Our amfori BSCI audit services focus on preparation, coordination and closing findings.",
  },
  {
    title: "SMETA audit",
    text: "SMETA is Sedex's audit methodology. A Sedex audit report is shared through the Sedex platform, and SMETA audit services from our side cover readiness and follow-up. Buyers specify either a SMETA 2 pillar audit (labour standards and health and safety) or a SMETA 4 pillar audit, which adds environment and business ethics.",
  },
  {
    title: "WRAP audit services",
    text: "WRAP is a certification programme used mainly by apparel, footwear and sewn-products factories.",
  },
];

export const SOCIAL_AUDIT_NOTE =
  "Official BSCI, SMETA, SA8000 and WRAP audits must be carried out by firms or certification bodies approved by each scheme owner. Our role is to help you understand the requirement, prepare the site, coordinate the audit and close the findings. We will always tell you which parts of the work we perform directly and which must be done by a scheme-approved body.";

export const SOCIAL_SCHEME_LINKS: { label: string; href: string }[] = [
  { label: "Social Accountability International — SA8000", href: "https://sa-intl.org/programs/sa8000/" },
  { label: "amfori — BSCI Code of Conduct", href: "https://www.amfori.org/en/solutions/social/amfori-bsci" },
  { label: "Sedex — SMETA audit methodology", href: "https://www.sedex.com/solutions/smeta-audit/" },
  { label: "WRAP — certification programme", href: "https://wrapcompliance.org/" },
];

export const SOCIAL_AUDIT_CLOSING =
  "Some buyers ask for more specialised social and sustainability checks: an RBA audit for electronics supply chains, an ethical toy program audit for toy factories, Higg FEM verification and Higg FSLM verification for apparel and footwear, SLCP verification, or an ESG audit and sustainability audit for wider environmental and governance performance. We help you understand which one applies and prepare for it.";

export const SUPPLIER_AUDIT_PARAGRAPHS: string[] = [
  "A supplier audit checks whether a business you plan to buy from is real, capable and compliant. Supplier audit services in India are commonly used for a supplier audit before onboarding a new vendor, a supplier qualification audit, a supplier verification audit to confirm legal existence and capability, and an annual review of existing vendors. Vendor audit services work the same way; the term is simply more common in procurement teams.",
  "For brands with many suppliers, outsourced supplier audit services save time and keep results consistent. We can audit vendors across several cities using the same checklist so you can compare them fairly. A risk based supplier audit program focuses audit effort on the suppliers that carry the most risk — new vendors, high-volume vendors and those with past findings.",
];

export const QMS_AUDIT_PARAGRAPHS: string[] = [
  "A quality management system audit — sometimes called a quality system audit — checks whether your quality system works on the shop floor, not just on paper. Our QMS audit services cover document control, process control, calibration, training, complaint handling, corrective action and management review. Many clients use this as an internal audit for ISO before a certification body visits, or as preparation for an external audit for ISO.",
  "ISO 9001 audit services include planned internal audits (including ISO 9001 internal audit services for small business owners who do not have a full-time quality team), management review meeting support for ISO 9001, ISO 9001 surveillance audit preparation and support ahead of a recertification audit. We also support ISO 14001 audit and ISO 45001 audit preparation for environmental and occupational health and safety management systems.",
];

export const DOMESTIC_AUDIT_PARAGRAPH =
  "Domestic audit services serve Indian brands, retail chains, MSMEs and manufacturers selling in India. A domestic compliance audit for Indian brands and retailers checks factories and vendors against Indian legal requirements and the customer's own standards. A labour compliance audit, for example, reviews wage records, working hours, statutory registers and contractor management against Indian labour law. Domestic factory audit services are also used by manufacturers preparing for certification, where a factory's systems need to be in order before an official inspection.";

export const INTERNATIONAL_AUDIT_PARAGRAPH =
  "International audit services support exporters and overseas buyers. An international factory audit services India engagement usually follows a foreign buyer's code of conduct or a recognised scheme. Common examples include a factory audit for US buyers in India, a factory audit for European buyers in India, a factory audit for UK retailers in India and a social audit for Walmart suppliers India. Security-focused buyers may ask for a supply chain security audit such as a C-TPAT audit or GSV audit, while sector-specific buyers may ask for a GOTS audit, BRCGS audit or GMP audit.";

export const EHS_AUDIT_PARAGRAPH =
  "Not every audit is about labour. A health and safety audit checks hazards, machine guarding, personal protective equipment, first aid and emergency preparedness. A fire safety audit for factories looks at fire exits, alarms, extinguishers, evacuation drills and storage of flammable material. A building safety audit reviews structural safety documentation and visible risks. Environmental audit services review waste, effluent, emissions and pollution-control permissions. These audits can be run on their own or combined with a social compliance audit.";

export const WHY_MATTERS_INTRO = "Audits protect four things at once: your market access, your people, your reputation and your margins.";

export const WHY_MATTERS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Market access",
    text: "Many international buyers will not place orders without a recent audit. Compliance audit for exporters supplying to European retailers is now routine, and international audit standards for Indian exporters keep tightening as buyers face their own due-diligence obligations. A clean, recent audit shortens onboarding and keeps you on approved supplier lists.",
  },
  {
    title: "Legal protection",
    text: "A labour compliance audit or fire safety audit highlights gaps that could lead to penalties, stoppages or accidents under Indian law. Finding them in an audit is far better than finding them in an inspection or an incident.",
  },
  {
    title: "Buyer and consumer trust",
    text: "Retailers answer to their customers. When a brand can show that its suppliers have been audited and that findings were closed, it protects its own reputation — and yours as its supplier.",
  },
  {
    title: "Operational improvement",
    text: "Audits often uncover inefficiencies that have nothing to do with compliance: unclear work instructions, poor record keeping, uncalibrated equipment or weak subcontracting control. Fixing these improves quality and reduces rework.",
  },
  {
    title: "Certification readiness",
    text: "For manufacturers preparing for ISO, BIS or other certifications, an audit shows exactly what needs to be fixed before the official assessment. This reduces the risk of a failed assessment and the delay that follows.",
  },
];

export const WHO_NEEDS_INTRO =
  "Audit services are useful to almost anyone involved in making or buying products in India. The most common clients are:";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Manufacturers and exporters facing a buyer audit",
    text: "Buyer audit for exporters is the single most common reason a factory contacts us, and audit services for exporters make up a large share of our work. A factory audit for garment exporters, a social compliance audit for MSME exporters and a factory audit for small manufacturers in India are typical starting points.",
  },
  {
    title: "Importers and overseas buyers who need eyes on the ground",
    text: "Factory audit services for importers and supplier audit services for importers sourcing from India help buyers in the US, UK and Europe make decisions without travelling. A factory audit for importers from USA sourcing from India is a common example.",
  },
  {
    title: "Brand owners who manufacture through third parties",
    text: "Compliance audit for brand owners and supplier audit for private label brands India help you check the factories that make your products. This includes a compliance audit for D2C brands manufacturing in India and a factory audit for Amazon sellers India who source private-label products.",
  },
  {
    title: "Retail sourcing and compliance teams",
    text: "Audit services for retail sourcing teams cover supplier audit services for retailers, supplier audit for retail chains in India, retailer compliance audit programmes and an annual supplier audit program for retailers.",
  },
  {
    title: "Businesses undergoing regulatory or certification audits",
    text: "Audit services for manufacturers preparing for certification, audit services for certification readiness and audit support for brand owners preparing for BIS certification help you get ready before the official visit.",
  },
];

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Compliance you can prove",
    text: "An audit turns \"we comply\" into evidence. Our evidence based audit reports link every finding to what was seen, read or heard, so buyers and certification bodies can rely on the result.",
  },
  {
    title: "Faster buyer approval",
    text: "Preparing for a buyer audit in advance — through a pre-audit gap assessment or a mock audit — reduces the chance of serious findings on audit day and helps you move from audit to order faster.",
  },
  {
    title: "Lower supply chain risk",
    text: "A supply chain audit helps buyers spot weak suppliers before problems reach the customer. For suppliers, it shows where the business is exposed.",
  },
  {
    title: "Better quality",
    text: "A process audit or quality management system audit identifies the root causes of defects and rework, not just the defects themselves.",
  },
  {
    title: "Stronger market position",
    text: "Factories with strong audit results are easier to recommend, easier to onboard and more likely to be offered repeat business.",
  },
  {
    title: "Clear priorities",
    text: "Instead of a long list of problems, you get findings ranked by severity so your team knows what to fix first.",
  },
];

export const KEY_FEATURES: string[] = [
  "One provider for several audit types. Factory, social, supplier, QMS and EHS audits can be planned together, reducing repeated visits and disruption.",
  "Standardised audit checklists. We use standardised audit checklists aligned with the standard or buyer code being audited, so results are consistent across sites and over time.",
  "A documented audit methodology. Our documented audit methodology follows an ISO 19011 based audit approach — planning, opening meeting, evidence collection, worker and management interviews, closing meeting and reporting.",
  "Flexible audit formats. We support announced audit, semi-announced audit and unannounced audit formats, as well as on-site audit, desktop audit and remote audit services, depending on what your buyer accepts.",
  "Remote options for overseas buyers. Remote audit for overseas buyers sourcing from India and virtual factory audit with live video help when travel is not practical. We will tell you when a remote format is not acceptable for a particular requirement.",
  "Bilingual audits. Bilingual factory audit with Hindi speaking auditors helps worker interviews and document reviews go faster and more accurately in Indian factories.",
  "Multi-site coverage. A multi site factory audit in India lets a brand compare several suppliers on the same basis.",
  "Support beyond the report. Audit support from planning to CAPA closure means we stay involved until findings are actually fixed.",
];

export const ELIGIBILITY_INTRO =
  "There is no formal eligibility test for commissioning an audit. Any business can request one — a single-unit MSME, a large exporter with several plants, or an overseas buyer who has never visited India. What matters is that the audit has a clear purpose and a defined standard.";

export const ELIGIBILITY_WHO: string[] = [
  "Factories and workshops that manufacture, assemble or pack products",
  "Exporters asked by buyers to complete a specific audit",
  "Brand owners, importers and retailers who want to audit their suppliers",
  "Manufacturers preparing for certification who want an independent readiness check",
];

export const ELIGIBILITY_BEFORE: string[] = [
  "A clear reason for the audit — buyer request, certification, internal improvement or supplier selection",
  "The standard or checklist to be used — for example, a buyer code of conduct, SA8000, amfori BSCI, SMETA or ISO 9001",
  "Access to the site, records and people on audit day",
  "For supplier audits, the supplier's agreement to be audited",
];

export const ELIGIBILITY_NOTES: string[] = [
  "Some scheme audits, such as an official BSCI or SMETA audit, can only be performed by approved audit firms. In these cases we prepare you and coordinate with the approved body.",
  "Specific requirements, such as social audit requirements for exporting to UK buyers, depend on the buyer's policy. Always share the buyer's written requirement with us.",
  "If a site is unwilling to share records or allow worker interviews, the audit result will reflect that. Transparency is part of passing.",
];

export const DOCUMENTS_INTRO =
  "The documents an auditor reviews depend on the audit type and standard. The documents required for social compliance audit work and the documents required for factory audit in India overlap heavily. So do the documents required for BSCI audit, the documents required for SMETA audit and the documents required for SA8000 audit. The table below lists the records most auditors ask for. Treat it as a starting checklist, not a complete legal list.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Factory licence and business registrations",
    purpose: "Confirms the site is legally registered to operate",
    mandatory: "Usually requested",
    notes: "Must be valid and match the address being audited",
  },
  {
    document: "Building stability or structural safety documentation",
    purpose: "Confirms the building is safe for its current use",
    mandatory: "Usually requested",
    notes: "Especially important for multi-storey buildings",
  },
  {
    document: "Fire safety approval and fire equipment records",
    purpose: "Shows fire risk is managed",
    mandatory: "Usually requested",
    notes: "Includes extinguisher maintenance and drill records",
  },
  {
    document: "Pollution control board consents",
    purpose: "Confirms environmental permissions",
    mandatory: "Depends on audit scope",
    notes: "Relevant for environmental and 4-pillar audits",
  },
  {
    document: "Attendance and time records",
    purpose: "Verifies working hours and overtime",
    mandatory: "Usually requested",
    notes: "Auditors cross-check with payroll and interviews",
  },
  {
    document: "Payroll records, wage slips and payment proof",
    purpose: "Verifies wages and statutory deductions",
    mandatory: "Usually requested",
    notes: "Bank transfer records help prove payment",
  },
  {
    document: "PF and ESI payment records",
    purpose: "Confirms statutory social security compliance",
    mandatory: "Usually requested",
    notes: "Applicability depends on the latest official rules",
  },
  {
    document: "Age-proof records for workers",
    purpose: "Confirms no child labour and correct handling of young workers",
    mandatory: "Usually requested",
    notes: "Keep copies of ID documents on file",
  },
  {
    document: "Contract labour and contractor records",
    purpose: "Shows control over contractors and agency workers",
    mandatory: "Depends on workforce",
    notes: "Include contractor agreements and their compliance records",
  },
  {
    document: "HR policies — recruitment, grievance, anti-harassment, disciplinary",
    purpose: "Shows fair and documented treatment of workers",
    mandatory: "Usually requested",
    notes: "Policies must match actual practice",
  },
  {
    document: "Health and safety records — accidents, PPE issue, training",
    purpose: "Shows how workplace risks are controlled",
    mandatory: "Usually requested",
    notes: "Training records should show dates and attendees",
  },
  {
    document: "Quality manual, procedures and calibration records",
    purpose: "Verifies the quality management system",
    mandatory: "Depends on audit scope",
    notes: "Core for QMS and factory capability audits",
  },
  {
    document: "Previous audit reports and corrective action plans",
    purpose: "Shows how earlier findings were closed",
    mandatory: "Optional but valuable",
    notes: "Auditors check whether old issues have returned",
  },
];

export const DOCUMENTS_CLOSING =
  "Statutory requirements change. Requirements may vary depending on the latest official regulatory guidelines, so we confirm the current list for your site, state and audit standard during the pre-audit stage. Documentation assistance for audits is part of our service.";

export const PROCESS_INTRO = "Every audit follows a predictable sequence. Knowing it in advance removes most of the stress.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Requirement",
    color: "#0b57b5",
    title: "1. Understand the requirement",
    text: "We start by understanding who is asking for the audit, which standard applies and what the result will be used for. If a buyer has sent a checklist or code of conduct, we review it first.",
  },
  {
    step: "02",
    label: "Quote",
    color: "#2563eb",
    title: "2. Agree the scope and quotation",
    text: "We confirm the audit type, site address, number of workers, audit format (announced, semi-announced or unannounced) and reporting needs. You receive a written quotation before any work begins.",
  },
  {
    step: "03",
    label: "Gap",
    color: "#0891b2",
    title: "3. Pre-audit gap assessment (optional but recommended)",
    text: "A gap analysis audit or pre-assessment audit shows where you stand before the real audit. Many clients book a mock audit services visit at this stage.",
  },
  {
    step: "04",
    label: "Documents",
    color: "#059669",
    title: "4. Document preparation",
    text: "We share a document checklist and help organise records. Documentation and coordination support at this stage prevents last-minute gaps.",
  },
  {
    step: "05",
    label: "Plan",
    color: "#d97706",
    title: "5. Audit planning",
    text: "The auditor prepares an audit plan covering the agenda, the areas to visit and the people to interview.",
  },
  {
    step: "06",
    label: "Opening",
    color: "#ea580c",
    title: "6. Opening meeting",
    text: "On audit day, the auditor explains the scope, schedule and confidentiality arrangements to factory management.",
  },
  {
    step: "07",
    label: "Evidence",
    color: "#dc2626",
    title: "7. Site walkthrough and evidence collection",
    text: "The auditor walks the production floor, warehouses, canteen, dormitories (if any) and utilities, and reviews records against what is observed.",
  },
  {
    step: "08",
    label: "Interviews",
    color: "#7c3aed",
    title: "8. Worker and management interviews",
    text: "Workers are interviewed privately, and management is interviewed on systems and policies.",
  },
  {
    step: "09",
    label: "Closing",
    color: "#0f766e",
    title: "9. Closing meeting",
    text: "Findings are shared with management before the auditor leaves, so there are no surprises in the report.",
  },
  {
    step: "10",
    label: "Report",
    color: "#1d4ed8",
    title: "10. Audit report",
    text: "You receive a written report with findings, evidence and severity. If you need to share it, we explain how to get factory audit report copies to buyers, or how to order supplier audit report summaries for your internal teams.",
  },
  {
    step: "11",
    label: "CAPA",
    color: "#b45309",
    title: "11. Corrective action plan and CAPA support",
    text: "A corrective action plan audit approach sets out who will fix what and by when. We provide CAPA closure support after BSCI audit findings and corrective action plan after social audit findings.",
  },
  {
    step: "12",
    label: "Follow-up",
    color: "#166534",
    title: "12. Follow-up audit",
    text: "Where needed, a follow-up audit or desktop review confirms that fixes are in place. This includes a follow up audit after failed social compliance audit results.",
  },
];

export const PROCESS_NOTE =
  "For official scheme audits — SA8000 certification, amfori BSCI, SMETA or WRAP — steps 5 to 10 are carried out by the scheme-approved body. We support you before, during and after that audit. For a government approved process such as BIS certification, the certification decision rests with the authority; our role is readiness and documentation, not approval.";

export const TIMELINE_INTRO =
  "The time an audit takes depends on its type, the size of the site, the number of workers and the format. People often ask how long does a factory audit take or how long does a SMETA audit take. The honest answer is that it depends on scope, and the scheme or buyer may set its own rules for audit duration.";

export const TIMELINE_ROWS: TableRow[] = [
  {
    stage: "Requirement review and quotation",
    duration: "Depends on how quickly the buyer requirement and site details are shared",
  },
  {
    stage: "Preparation and document readiness",
    duration: "Depends on how organised your records already are",
  },
  {
    stage: "Audit day or days",
    duration: "Depends on site size, workforce and the standard being audited",
  },
  {
    stage: "Report delivery",
    duration: "We aim for fast turnaround audit reports, with the delivery date agreed in the quotation",
  },
  {
    stage: "CAPA and follow-up",
    duration: "Depends on the number and severity of findings",
  },
];

export const TIMELINE_CLOSING =
  "Some schemes use scheduling windows. A semi announced BSCI audit window, for example, means the factory knows the period in which the audit will happen but not the exact date. Processing time depends on the latest regulatory requirements and scheme rules, so we confirm timelines for your specific audit at the quotation stage.";

export const COST_INTRO =
  "We do not publish fixed prices because no two audits are the same. Questions such as factory audit cost in India, social compliance audit cost, supplier audit cost, SA8000 audit cost in India, BSCI audit cost in India and SMETA audit cost in India all have the same answer: it depends on scope. Instead, here is what drives the price so you can plan your budget.";

export const COST_FACTORS: string[] = [
  "Audit type and standard. A short supplier verification audit costs less than a full social compliance audit with worker interviews.",
  "Site size and workforce. More workers and larger sites need more auditor time.",
  "Number of sites. Multi-site programmes are planned together, which can make per-site costs more efficient.",
  "Location and travel. Sites outside major industrial centres may add travel time and expenses.",
  "Audit format. Unannounced audits and remote audits can be planned differently from announced visits.",
  "Scheme fees. Official scheme audits may include fees charged by the scheme owner or approved audit body, which are separate from consultancy fees.",
  "Preparation and CAPA support. Gap assessments, mock audits and CAPA follow-up are optional and quoted separately.",
  "Renewal and repeat audits. Annual or recurring audits can be built into an annual audit services contract.",
];

export const COST_CLOSING =
  "If you are a smaller site worried about the cost of BSCI audit for small factory sites, or you want to compare the cost of supplier audit in India per day across providers, ask us for a written breakdown. Our approach is clear audit pricing: you see what each part of the work covers before you commit. To get an accurate figure, request audit quotation details by sharing the audit type, site address, workforce size and buyer requirement. Affordable factory audit services are not about the lowest number — they are about paying only for the scope your buyer actually needs.";

export const VALIDITY_PARAGRAPHS: string[] = [
  "Audit results do not last forever, and validity rules differ by standard and buyer. Some buyers accept an audit for a fixed period. Some schemes link the next audit date to the rating or result achieved. Certifications such as SA8000 or ISO 9001 have their own certification cycle, including surveillance audits.",
  "Because these rules are set by scheme owners and buyers — and change from time to time — we do not quote a single validity period. Please verify validity with the relevant scheme owner, certification body or buyer. We help you track expiry dates so a lapsed audit never holds up an order.",
];

export const RENEWAL_INTRO = "Most audits are repeated. Renewal is usually required when:";

export const RENEWAL_WHEN: string[] = [
  "A buyer's acceptance period for your audit is ending",
  "A certification cycle requires a surveillance audit or recertification audit",
  "A previous audit raised serious findings that need verification",
  "You add a new production site, change ownership or significantly change processes",
];

export const RENEWAL_PROCESS =
  "General renewal process: review the previous report and CAPA, close any open findings, update records, and schedule the next audit before the current one lapses. An annual compliance audit or annual audit services contract makes this predictable. For ISO 9001, this includes ISO 9001 surveillance audit preparation and internal audits before each surveillance visit.";

export const RENEWAL_PRECAUTIONS: string[] = [
  "Do not wait for the buyer to remind you",
  "Old findings that reappear are treated seriously",
  "Keep evidence of every fix, because auditors check whether corrections were sustained",
];

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Documentation gaps",
    text: "Missing or inconsistent attendance, wage and age records are the most common reason for poor results. Records that do not match each other raise more concern than records with honest gaps.",
  },
  {
    title: "Working hours and overtime",
    text: "Excessive or unrecorded overtime is one of the most frequent findings in social compliance audits, especially during peak production.",
  },
  {
    title: "Health and safety basics",
    text: "Blocked exits, missing machine guards, expired extinguishers and lack of PPE are easy to fix but often overlooked.",
  },
  {
    title: "Contractor and agency workers",
    text: "Factories sometimes forget that contract labour must also meet compliance requirements.",
  },
  {
    title: "Approval delays",
    text: "Scheme audits can be delayed by booking availability, buyer approval of the audit firm or slow CAPA closure.",
  },
  {
    title: "Technical mistakes",
    text: "Choosing the wrong standard, the wrong SMETA pillar or the wrong audit format can mean repeating the audit.",
  },
];

export const HOW_WE_HELP_INTRO =
  "Ornate Quality Service Pvt Ltd provides audit support from planning to CAPA closure. Our work includes:";

export const HOW_WE_HELP_ITEMS: { title: string; text: string }[] = [
  {
    title: "Requirement clarification",
    text: "We read your buyer's requirement and confirm which audit, format and standard apply.",
  },
  {
    title: "Pre-audit support",
    text: "Factory audit readiness support, SA8000 pre audit support, BSCI audit preparation support, WRAP audit preparation India and unannounced social audit preparation for factories.",
  },
  {
    title: "Gap assessments and mock audits",
    text: "We book pre-audit gap assessment visits and mock social audit visits so you know your weak points early.",
  },
  {
    title: "Audit execution",
    text: "Second party and third party factory, supplier, QMS, EHS and compliance audits carried out against agreed checklists.",
  },
  {
    title: "Scheme audit coordination",
    text: "We help you apply for BSCI audit, register for SMETA audit, plan Sedex audit booking, and apply for SA8000 certification audit through the appropriate approved bodies, with WRAP audit application support where required.",
  },
  {
    title: "Documentation assistance",
    text: "Checklists, record organisation and document review before audit day.",
  },
  {
    title: "CAPA support",
    text: "Get CAPA support after audit findings, with root-cause guidance and evidence collection for closure.",
  },
  {
    title: "ISO support",
    text: "Internal audit and management review support, and book ISO internal audit or book QMS audit services ahead of certification.",
  },
  {
    title: "Supplier programmes",
    text: "Set up supplier audit program structures for brands and retailers, and start supplier audit program rollouts across multiple vendors.",
  },
  {
    title: "Technical guidance for audits",
    text: "Practical advice on fixing findings in a way that lasts.",
  },
  {
    title: "Legal compliance support",
    text: "Help interpreting findings that relate to Indian legal requirements, so corrective actions address the actual obligation.",
  },
];

export const HOW_WE_HELP_START: string[] = [
  "Book factory audit, book supplier audit or schedule supplier audit visits for a new or existing vendor",
  "Book social compliance audit preparation, book mock social audit visits or book ethical audit India support before a buyer's official audit",
  "Book health and safety audit, book fire safety audit for factory sites or book environmental audit reviews",
  "Book factory capability assessment visits for capacity checks",
  "Book C-TPAT security audit or book GSV audit preparation for security-focused buyers",
  "Book Higg FEM verification or book SLCP verification readiness support for apparel and footwear sites",
  "Book international audit India or book domestic compliance audit work for buyer or domestic retail requirements",
  "Arrange third party factory audit or arrange supplier verification audit on behalf of an overseas buyer",
];

export const HOW_WE_HELP_NOTE =
  "We do not promise that any audit will be passed or any certification will be granted. Results depend on the site's actual conditions. What we do promise is honest assessment, clear guidance and consistent support.";

export const WHY_CHOOSE_ITEMS: string[] = [
  "Experience across industries. Our multi industry audit experience covers textiles, apparel, footwear, furniture, toys, electronics, handicrafts and packaging, so auditors understand how your type of factory actually works.",
  "Expertise in Indian conditions. Regulatory expertise in Indian labour laws helps us explain findings in terms your HR and compliance teams can act on.",
  "Qualified people. Audits are led by a compliance specialist or qualified quality auditors matched to the audit type, with social audits handled by trained social compliance auditors.",
  "Impartial and confidential. We work as impartial third party auditors when an independent view is needed, and we run a confidential audit process — worker interviews are private and reports are shared only as you authorise.",
  "Transparent reporting. Transparent audit reporting means findings are stated clearly, with evidence, and without exaggeration or softening. Brands that rely on professional supplier audit services need findings they can defend in front of their own customers.",
  "Consistent methods. Whether you hire factory auditor support for one site or hire supplier auditor in India for a full vendor base, the same checklist and reporting standard apply.",
  "One team for audit and certification. End-to-end audit and certification support lets you move from audit findings to ISO, BIS or other certification work without changing providers.",
  "Dedicated support. A dedicated audit coordinator manages scheduling, documents and follow-up so you have one point of contact.",
  "Proven process. Our proven audit process — planning, evidence, reporting and CAPA — is the same whether you need one audit or fifty.",
  "Based in Noida, working across India. As a Noida based audit company, we work closely with clients in Delhi NCR and support factory audit services pan India, with travel and availability confirmed at the quotation stage.",
];

export const INDUSTRIES_INTRO = "Audit requirements differ by industry. Here is how audits typically apply in the sectors we serve.";

export const INDUSTRIES_ROWS: TableRow[] = [
  {
    industry: "Garments, apparel and textiles",
    focus: "Working hours, wages, chemical handling, fire safety",
    types:
      "Social audit for apparel manufacturers, social compliance audit for textile manufacturers, factory audit for garment exporters",
  },
  {
    industry: "Leather, footwear and leather goods",
    focus: "Chemical safety, effluent, worker health",
    types: "Supplier audit for footwear manufacturers, social compliance audit for leather goods manufacturers",
  },
  {
    industry: "Furniture and home decor",
    focus: "Capability, wood dust and machine safety",
    types: "Factory audit for furniture manufacturers, factory capability audit for furniture manufacturers",
  },
  {
    industry: "Toys",
    focus: "Product safety controls, worker conditions",
    types: "Factory audit for toy manufacturers, factory audit for toy manufacturers exporting to Europe, ethical toy program audit",
  },
  {
    industry: "Handicrafts",
    focus: "Home-based and subcontracted work, fair wages",
    types: "Social compliance audit for handicraft exporters, supplier audit for home decor and handicraft suppliers",
  },
  {
    industry: "Electronics and components",
    focus: "Process control, quality, responsible sourcing",
    types: "Factory audit for electronics manufacturers, supplier audit for electronics component manufacturers, RBA audit",
  },
  {
    industry: "Packaging, food contact and pharma packaging",
    focus: "Hygiene, GMP, traceability",
    types: "GMP audit for food packaging suppliers, supplier audit for pharma packaging material suppliers",
  },
  {
    industry: "Automotive parts",
    focus: "Process capability and quality systems",
    types: "Supplier audit for automotive parts manufacturers, quality management system audit for MSME manufacturers",
  },
];

export const WHERE_INTRO = "We work with factories in major manufacturing and export clusters, including:";

export const WHERE_ROWS: TableRow[] = [
  {
    region: "Delhi NCR",
    locations:
      "Factory audit services in Noida, factory audit services in Delhi NCR, social compliance audit in Noida, social compliance audit in Delhi, supplier audit services in Delhi, factory audit in Gurgaon, factory audit in Faridabad",
  },
  {
    region: "North India",
    locations:
      "Factory audit in Ludhiana, social compliance audit in Ludhiana, factory audit in Panipat, social audit for home textile exporters in Panipat, factory audit in Moradabad, factory audit in Jaipur, factory audit in Jodhpur for furniture exporters, factory audit in Agra for footwear units, social audit for leather exporters in Kanpur",
  },
  {
    region: "South India",
    locations:
      "Factory audit in Tirupur, social audit in Tirupur, BSCI audit in Tirupur, Sedex audit in Tirupur, social compliance audit in Karur, factory audit in Bangalore, factory audit in Chennai, factory audit in Hyderabad",
  },
  {
    region: "West and East India",
    locations:
      "Factory audit in Mumbai, supplier audit in Pune, factory audit in Ahmedabad, factory audit in Surat, factory audit in Kolkata",
  },
];

export const WHERE_CLOSING =
  "If you are searching for a factory audit near me, supplier audit near me, social compliance audit near me, compliance audit near me or an audit consultant near me, share your site address and we will confirm coverage.";

export const CHOOSE_PARTNER_PARAGRAPHS: string[] = [
  "If you are comparing a factory audit company in India, a supplier audit company or a compliance audit company, ask four questions. Is the provider an independent factory auditor India buyers will accept for this requirement? Does it use industry specific auditors who understand your type of factory? Can it support the scheme your buyer named — for example, do you need a BSCI consultant in India, an SA8000 consultant in India, a SMETA consultant India or a WRAP consultant India for preparation, or a scheme-approved audit firm for the official audit? And will it stay with you after the report through CAPA closure?",
  "A good audit service provider for manufacturers answers these questions plainly. A good third party audit agency India buyers trust will also tell you when it is not the right fit for a particular audit.",
];

export const MISTAKES_ROWS: TableRow[] = [
  {
    mistake: "Preparing only the paperwork",
    why: "Auditors compare records with what they see and hear. Perfect documents that do not match the floor create serious findings.",
    avoid: "Fix the practice first, then the paperwork.",
  },
  {
    mistake: "Coaching workers",
    why: "Telling workers what to say is easy to detect and damages credibility.",
    avoid: "Explain the audit honestly and let workers speak freely.",
  },
  {
    mistake: "Ignoring subcontractors",
    why: "Undisclosed subcontracting is treated as a major issue by many buyers.",
    avoid: "Declare all production locations.",
  },
  {
    mistake: "Booking the wrong audit",
    why: "A SMETA 2 pillar audit will not satisfy a buyer who asked for 4 pillar.",
    avoid: "Get the requirement in writing and confirm it before booking.",
  },
  {
    mistake: "Closing findings on paper only",
    why: "A corrective action that is not sustained will reappear at the next audit.",
    avoid: "Fix the root cause and keep evidence.",
  },
  {
    mistake: "Waiting until the last week",
    why: "Rushed preparation leads to avoidable gaps.",
    avoid: "Start preparing as soon as the buyer requests an audit.",
  },
];

export const EXPERT_TIPS: string[] = [
  "Run an internal audit first. A first party audit with your own team, or a mock audit with us, is the cheapest way to find problems.",
  "Keep one master compliance file. Licences, approvals and key records in one place save hours on audit day.",
  "Reconcile time and wage records monthly. Do not wait for the audit to discover mismatches.",
  "Walk the floor like an auditor. Check exits, aisles, guards, first aid boxes and PPE use every week.",
  "Train supervisors, not just HR. Supervisors control daily working practices that auditors observe.",
  "Track every finding to closure. Use a simple CAPA tracker with owners, dates and evidence.",
  "Plan renewals early. Note expiry dates for every audit and certificate and schedule the next audit in advance.",
];

export const COMPARISON_INTRO = "Two comparisons come up in almost every conversation with clients.";

export const AUDIT_VS_INSPECTION_ROWS: TableRow[] = [
  {
    point: "What is checked",
    audit: "Systems, conditions, processes and compliance at the site",
    inspection: "The products themselves, against specifications",
  },
  {
    point: "Main question",
    audit: "Can this site produce reliably and responsibly?",
    inspection: "Does this batch meet requirements?",
  },
  {
    point: "When it is used",
    audit: "Before onboarding, periodically, or after problems",
    inspection: "Before, during or after production of a specific order",
  },
  {
    point: "Typical output",
    audit: "Audit report with findings and corrective actions",
    inspection: "Inspection report with pass/fail against quality limits",
  },
];

export const AUDIT_VS_INSPECTION_NOTE =
  "Many buyers need both: a factory audit to qualify the supplier and product inspections — such as pre-production, during production and final random inspection — to control each order. That is why audit and inspection services India are often planned together.";

export const PARTY_COMPARISON_ROWS: TableRow[] = [
  {
    point: "Who audits",
    first: "The business itself",
    second: "The customer or its appointed provider",
    third: "An independent organisation",
  },
  {
    point: "Main purpose",
    first: "Self-check and improvement",
    second: "Supplier selection and monitoring",
    third: "Impartial verification or certification",
  },
  {
    point: "Example",
    first: "ISO 9001 internal audit",
    second: "Brand audit of its garment supplier",
    third: "Independent factory audit or certification audit",
  },
];

export const PARTY_COMPARISON_NOTE =
  "Comparisons between specific social audit schemes — such as SMETA, amfori BSCI, SA8000 and WRAP — depend on your buyer's requirement. We explain the differences for your situation during requirement review rather than recommending one scheme for every factory.";

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Which audit services do you provide?",
    a: "We provide factory audits, social compliance audits, supplier and vendor audits, quality management system audits, EHS audits and domestic and international compliance audits. We also offer gap assessments, mock audits, documentation assistance and CAPA support for official scheme audits.",
  },
  {
    q: "What is the difference between a factory audit and a social compliance audit?",
    a: "A factory audit looks at the whole site — legal status, capacity, quality systems and working conditions. A social compliance audit focuses on how workers are treated: wages, hours, safety, age, contracts and grievance handling.",
  },
  {
    q: "Do you conduct factory audits across India?",
    a: "Yes. We are based in Noida and support audits across India's major manufacturing clusters. Share the site address and we will confirm availability and any travel requirements in the quotation.",
  },
  {
    q: "How soon can you schedule a factory audit?",
    a: "Scheduling depends on the audit type, location and auditor availability. Once you share the requirement and site details, we confirm a date in writing. For scheme audits, the approved audit body's availability also matters.",
  },
  {
    q: "How do I book an audit with you?",
    a: "Send your audit requirement — audit type, buyer request (if any), site address and workforce size. We review it, share a written quotation and schedule the audit once you confirm.",
  },
  {
    q: "Can you help us prepare for a BSCI audit?",
    a: "Yes. BSCI audit preparation support includes a gap assessment against the amfori BSCI Code of Conduct, a document review, a mock audit and guidance on fixing gaps before the official audit.",
  },
  {
    q: "Do you provide CAPA support after the audit?",
    a: "Yes. We help you understand each finding, identify the root cause, plan corrective actions and collect evidence of closure for your buyer or audit body.",
  },
  {
    q: "Are your auditors APSCA registered?",
    a: "APSCA membership is required for certain scheme audits. When an audit must be performed by an APSCA registered auditor, we tell you upfront and coordinate with an appropriately approved audit body. Ask us about the credentials of the auditor assigned to your audit before it takes place.",
  },
  {
    q: "Are your auditors experienced in Indian labour law?",
    a: "Yes. Our audits are carried out with a working knowledge of Indian labour law and compliance practice, so findings are relevant to Indian factory conditions.",
  },
  {
    q: "Do your auditors speak Hindi and regional languages?",
    a: "We offer Hindi-speaking auditors for worker interviews and document review. If interviews need another regional language, tell us in advance so we can plan for it.",
  },
  {
    q: "Do you support domestic compliance audits?",
    a: "Yes. We audit factories and vendors for Indian brands, retailers and manufacturers against Indian legal requirements and the customer's own standards.",
  },
  {
    q: "Do you provide international audits for overseas buyers?",
    a: "Yes. We audit Indian factories and suppliers on behalf of buyers in the US, UK, Europe and other markets, using the buyer's code of conduct or an agreed standard.",
  },
  {
    q: "Do you provide ISO 9001 internal audit services?",
    a: "Yes. We conduct ISO 9001 internal audits, support management review meetings and help prepare for surveillance and recertification audits.",
  },
  {
    q: "Do you offer remote or virtual audits?",
    a: "Yes, where the buyer or standard accepts them. Remote audits combine document review with live video walkthroughs. Some requirements still need an on-site audit, and we will tell you when that is the case.",
  },
  {
    q: "Can we get audit and inspection from one provider?",
    a: "Yes. Ornate Quality Service Pvt Ltd also offers product inspections, so you can combine a factory audit with pre-production, during production or final inspections.",
  },
  {
    q: "Is the audit report confidential?",
    a: "Yes. Audit reports are shared only with you and anyone you authorise, such as your buyer. Worker interview information is kept confidential.",
  },
  {
    q: "How do you ensure auditor impartiality?",
    a: "Auditors do not audit sites where they have a conflict of interest, and audit findings are based on evidence. For third party audits, we make sure the auditor has no commercial relationship with the audited site.",
  },
  {
    q: "What documents should we keep ready for the audit?",
    a: "Keep licences, building and fire safety records, attendance and payroll records, statutory payment records, age-proof records, HR policies, health and safety records and previous audit reports ready. The exact list depends on the audit type.",
  },
  {
    q: "Will workers be interviewed during the audit?",
    a: "For social compliance audits, yes. Workers are interviewed privately and without management present. Interviews are a key source of evidence.",
  },
  {
    q: "What if major non conformities are found?",
    a: "Major findings are discussed at the closing meeting and recorded in the report. You then agree a corrective action plan, and a follow-up audit or document review may be needed to verify closure.",
  },
  {
    q: "Do you issue a certificate after the audit?",
    a: "Our second party and third party audits result in an audit report, not a certificate. Certificates such as SA8000 or ISO 9001 are issued by accredited certification bodies. We help you prepare for them.",
  },
  {
    q: "How is the audit fee calculated?",
    a: "Fees depend on the audit type, standard, site size, workforce, location and audit format. You receive a written quotation before the audit, with no hidden charges.",
  },
  {
    q: "Can you audit our vendors in multiple cities?",
    a: "Yes. We plan multi-site supplier audit programmes using the same checklist so results are comparable across vendors and locations.",
  },
  {
    q: "Can you conduct a mock audit before the real audit?",
    a: "Yes. A mock audit follows the same approach as the official audit and shows where you are likely to receive findings, giving you time to fix them.",
  },
  {
    q: "Do you help with renewal audits?",
    a: "Yes. We track upcoming audit expiry dates, prepare you for repeat audits and support surveillance and recertification audits for ISO-based systems.",
  },
  {
    q: "Can the audit report be shared with our buyer?",
    a: "Yes, with your permission. For scheme audits such as SMETA, reports are shared through the scheme's own platform according to its rules.",
  },
];

export const GET_STARTED_PARAGRAPHS: string[] = [
  "Whether your buyer has asked for a social compliance audit, you need to verify a new supplier, or you want to be ready before a certification visit, the first step is the same: tell us what you need. Ornate Quality Service Pvt Ltd will review your requirement, explain which audit applies, and give you a clear quotation and plan.",
  "Our team provides professional guidance, documentation support and end-to-end audit and certification support — from the first gap assessment to the last closed finding.",
];
