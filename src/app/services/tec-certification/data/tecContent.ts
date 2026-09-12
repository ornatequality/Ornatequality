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

export const TEC_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction / Overview" },
  { id: "what-is-tec", label: "What Is TEC Approval?" },
  { id: "regulatory-framework", label: "Regulatory Framework & Legal Basis" },
  { id: "who-needs", label: "Who Needs TEC Approval?" },
  { id: "our-services", label: "Our TEC Approval Services" },
  { id: "process", label: "TEC Approval Process" },
  { id: "documents", label: "Documents & Requirements" },
  { id: "eligibility", label: "Eligibility Criteria" },
  { id: "timeline", label: "Timeline" },
  { id: "cost", label: "Cost & Fees" },
  { id: "validity", label: "Validity & Renewal" },
  { id: "compliance-updates", label: "Compliance & Regulatory Updates" },
  { id: "industries", label: "Industries & Businesses We Serve" },
  { id: "why-choose", label: "Why Choose Ornate Quality Service Pvt Ltd" },
  { id: "consultant-advantage", label: "The Ornate Quality Service Consultant Advantage" },
  { id: "local-presence", label: "Local Presence Across India" },
  { id: "comparison", label: "TEC Approval vs. Other Certification Frameworks" },
  { id: "related-services", label: "Related Regulatory & Compliance Services" },
  { id: "additional-scenarios", label: "Additional Scenarios We Support" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Final Call to Action" },
];

export const BANNER_TITLE = "TEC Approval Services in India";

export const BANNER_DESCRIPTION =
  "Ornate Quality Service Pvt Ltd helps manufacturers, importers, brand owners, and system integrators secure TEC approval and MTCTE certification for telecom equipment sold, imported, or deployed in India. From documentation and test coordination to MTCTE portal filing, our TEC certification services India are built to take the compliance workload off your team so your product reaches the market without avoidable delays.";

export const BANNER_FOLLOW_UP =
  "Whether you need TEC approval for telecom equipment for the first time, TEC approval for telecom products across multiple categories, or ongoing TEC certification services India for a growing product line, our team manages the process end to end.";

export const INTRO_PARAGRAPHS = [
  "Selling, importing, or deploying telecom equipment in India means working within a regulatory system designed to protect network integrity, user safety, and electromagnetic compatibility. At the center of that system is TEC approval — the certification issued under India's Mandatory Testing and Certification of Telecom Equipment (MTCTE) framework.",
  "Ornate Quality Service Pvt Ltd provides TEC approval services covering the full spectrum of telecom equipment certification India requires: from initial eligibility assessment and documentation to test coordination and final certificate issuance. TEC approval and MTCTE certification are granted to the manufacturer (OEM) or importer of a telecom product, so our TEC approval services are built primarily around their day-to-day needs — while also supporting the exporters, brand owners, MSMEs, startups, enterprises, and e-commerce sellers in the supply chain who rely on that certification for the telecom equipment approval India recognizes as compliant.",
  "This page explains what TEC approval and MTCTE certification involve, who needs them, what the process looks like, what it typically costs and takes, which products are covered, and how our TEC approval consultant team supports your certification journey from start to finish. Businesses sometimes refer to the underlying process simply as TEC registration — the terminology varies, but the compliance outcome required is the same.",
];

export const WHAT_IS_INTRO =
  "TEC approval is the certification granted under the MTCTE certification scheme once a telecom product is verified to meet the Essential Requirements (ER) notified for its equipment category. In practice, businesses refer to this certification interchangeably as TEC approval, TEC certification, a TEC certificate, MTCTE approval, MTCTE registration, or an MTCTE certificate — all of these describe the same underlying compliance outcome: a TEC type approval certificate confirming the product may be lawfully sold, imported, or deployed as telecom equipment in India.";

export const WHAT_IS_FRAMEWORK_LEAD =
  "The certification system sits within a defined legal and institutional structure:";

export const WHAT_IS_BULLETS = [
  "The Telecommunication Engineering Centre (TEC) is the technical body, functioning under the Department of Telecommunications (DoT), responsible for notifying Essential Requirements and administering certification.",
  "Mandatory Testing and Certification of Telecom Equipment (MTCTE) is the scheme under which this certification is carried out.",
  "The scheme derives its authority from the Telecommunications Act, 2023, the Telecommunications (Framework to Notify Standards, Conformity Assessment and Certification) Rules, 2025, and — for background context on the scheme's evolution — the earlier Indian Telegraph (Amendment) Rules, 2017.",
  "Certification is documented through a Certificate of Conformity Assessment, commonly referred to as the TEC certificate.",
  "Products may qualify for testing under the General Category Service (GCS) or the Specific Category Service (SCS), depending on the notified requirements for that equipment type, with Self-Certification (MTCTE) available for eligible categories.",
  "Applications and status tracking are handled through the DoT eServices Portal (commonly called the MTCTE portal).",
];

export const WHAT_IS_CLOSING =
  "Because this regulatory framework is periodically updated, Requirements may vary depending on the latest official regulatory guidelines — applicants should always confirm current notifications before relying on any specific procedural detail.";

export const REGULATORY_INTRO = [
  "TEC approval is not a single static checklist — it is built around a phased notification system. Since MTCTE was introduced, telecom equipment categories have been brought under mandatory certification in stages, generally referred to as the MTCTE Phase-wise Notification (Phase I–VI). Each phase adds new equipment categories to the mandatory certification list, along with the specific Essential Requirements (ER) applicable to those categories.",
  "Key regulatory and institutional entities referenced throughout the TEC approval process include:",
];

export const REGULATORY_ENTITIES: { title: string; text: string }[] = [
  {
    title: "Essential Requirements (ER)",
    text: "the technical, safety, and EMC standards a product must meet.",
  },
  {
    title: "Import License Exemption Certificate (ILEC)",
    text: "a conditional exemption route for specific import scenarios such as R&D, testing, or demonstration units.",
  },
  {
    title: "TEC Test House and Designated Test Labs",
    text: "facilities authorized to conduct MTCTE testing.",
  },
  {
    title: "National Accreditation Board for Testing and Calibration Laboratories (NABL) and the International Laboratory Accreditation Cooperation (ILAC)",
    text: "accreditation frameworks relevant to recognized test houses, including any TEC Recognized Laboratory or Foreign Testing Facility Recognition arrangement.",
  },
  {
    title: "Conformity Assessment Body (CAB)",
    text: "an entity authorized to assess conformity with notified standards.",
  },
  {
    title: "Regional Licensing Office (RLO) and the Directorate General of Foreign Trade (DGFT)",
    text: "bodies relevant to import documentation and Customs Clearance for Telecom Equipment.",
  },
  {
    title: "Telecom Regulatory Authority of India (TRAI)",
    text: "the broader sector regulator whose mandate intersects with telecom equipment compliance.",
  },
];

export const REGULATORY_COMPARISON_NOTE =
  "TEC approval is sometimes confused with adjacent regulatory schemes. Two clarifications worth noting: a WPC ETA vs TEC approval comparison is common because both fall under the Department of Telecommunications ecosystem but serve different purposes — Equipment Type Approval (ETA) issued by the Wireless Planning & Coordination Wing (WPC) governs wireless spectrum-using devices, while TEC approval addresses wired and wireless telecom equipment conformity under MTCTE. Similarly, an MTCTE vs BIS CRS comparison is common because both the MTCTE scheme and the Bureau of Indian Standards (BIS) Compulsory Registration Scheme (CRS) are mandatory product-conformity regimes in India, but they apply to different product categories under different governing bodies.";

export const REGULATORY_CLOSING =
  "As with all regulatory content on this page, Requirements may vary depending on the latest official regulatory guidelines, and the applicable phase, ER version, and exemption rules should be confirmed for each specific product before proceeding.";

export const GLOSSARY_HEADING = "Key Terms & Equipment Glossary";

export const GLOSSARY_PROCESS =
  "Because MTCTE certification spans many equipment categories and procedural terms, the following glossary summarizes commonly referenced terms used throughout this page and across our documentation: Essential Requirements TEC, MTCTE test house list, TEC test house accreditation, TEC test report requirements, Test Report / Test Certificate, Application Reference Number (MTCTE), Certificate Validity Period, Certificate Renewal (TEC), Regulatory Compliance Certificate, Power of Attorney (TEC Application), TEC Fee Structure, Telecom Equipment Homologation, Product Testing Report, Import of Telecom Equipment, and the MTCTE Phase-wise Notification (Phase I-VI) structure that organizes equipment categories.";

export const GLOSSARY_EQUIPMENT =
  "On the equipment side, categories referenced under MTCTE include GPON (Gigabit Passive Optical Network) infrastructure such as the Optical Line Terminal (OLT) and Optical Network Terminal (ONT), Digital Subscriber Line (DSL) Equipment, Local Area Network (LAN) Switch and Network Switch (Telecom Interface) hardware, Private Automatic Branch Exchange (PABX) systems, Session Border Controller (SBC) units, Base Transceiver Station (BTS) equipment, GSM/CDMA Mobile Equipment, VHF/UHF Radio Equipment, E-band Point-to-Point Radio links, Wi-Fi Customer Premises Equipment (CPE), Access Point (Telecom) devices, Repeater/Booster (Telecom Interface) units, Set-Top Box (Telecom Interface) devices, Modem (Telecom Equipment), Conference Equipment (Telecom), Smartwatch with Telecom Interface products, Machine-to-Machine (M2M) Devices, IP Router hardware, and earlier-phase categories such as Two-Wire Telephone Equipment, ISDN Customer Premises Equipment, G3 Fax Machine units, Cordless Telephone handsets, and Satellite Communication Equipment (VSAT) terminals. Technical conformity for these categories is generally assessed against Radio Frequency (RF) Emission Standard and Electromagnetic Compatibility (EMC) Standard parameters, among other applicable Essential Requirements. General telecom equipment testing India capacity — covering everything from a single device to a full product line — is coordinated through our test house network as part of this glossary of services.";

export const WHO_NEEDS_INTRO =
  "Under the MTCTE framework, TEC approval is granted to the manufacturer (OEM) or the importer of the telecom equipment — these are the two categories of applicant who directly hold the certificate for a notified product:";

export const WHO_NEEDS_HOLDERS: { title: string; text: string }[] = [
  {
    title: "Manufacturers",
    text: "including telecom OEMs, producing telecom equipment domestically, including telecom equipment manufacturer compliance India obligations for locally made products. References under MTCTE to a Telecom OEM (Original Equipment Manufacturer) fall under this same manufacturer category.",
  },
  {
    title: "Importers",
    text: "who must meet telecom equipment importer compliance India requirements before customs clearance and sale — including cases where a TEC approval foreign manufacturer appoints an Indian entity to import on its behalf.",
  },
];

export const WHO_NEEDS_SUPPLY_INTRO =
  "Other businesses across the telecom equipment supply chain interact with TEC approval indirectly, by making sure the products they sell, deploy, or integrate already carry valid certification obtained by the responsible manufacturer or importer:";

export const WHO_NEEDS_SUPPLY: { title: string; text: string }[] = [
  {
    title: "Exporters and foreign manufacturers",
    text: "supplying into the Indian market through local distributors or subsidiaries, where the distributor or subsidiary typically takes on the importer role for certification purposes.",
  },
  {
    title: "Brand owners",
    text: "who source telecom hardware under their own label but do not manufacture it directly — the certificate is held by the actual manufacturer or by the importer bringing the product into India, and our team can help coordinate this on your behalf.",
  },
  {
    title: "System integrators",
    text: "including TEC approval for system integrators deploying multi-vendor telecom infrastructure for enterprise or government clients, who need to confirm each deployed device is certified.",
  },
  {
    title: "MSMEs and startups",
    text: "such as TEC approval consultant support for small telecom startups and TEC approval consultant for IoT hardware startups building connected hardware products, where the startup itself is typically the manufacturer or importer of record.",
  },
  {
    title: "Enterprises and PSU/government vendors",
    text: "including TEC approval for government telecom vendors and TEC approval consultant for PSU telecom vendor engagements tied to public-sector tenders, supported by a dedicated TEC approval consultant for government tender telecom track.",
  },
  {
    title: "E-commerce sellers",
    text: "listing telecom-interface products such as routers, IoT gateways, or telecom-interface CCTV equipment for online sale, who should confirm that their supplying manufacturer or importer holds valid certification for each listed product.",
  },
  {
    title: "Network operators and telecom service providers",
    text: "referred to under MTCTE more broadly as a System Integrator (Telecom) or Network Operator / Telecom Service Provider, who deploy certified equipment within their networks.",
  },
];

export const WHO_NEEDS_CLOSING =
  "Applicability depends on whether the specific product falls under a notified MTCTE phase and category, and on whether your business is acting as the manufacturer or importer of record for that product. Requirements may vary depending on the latest official regulatory guidelines, so each product line and business role should be individually assessed rather than assumed to be exempt or covered.";

export const OUR_SERVICES_INTRO =
  "Ornate Quality Service Pvt Ltd offers TEC approval services designed around the practical needs of Indian and international telecom equipment businesses. Our TEC approval consulting services and end to end TEC certification support cover:";

export const OUR_SERVICES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Eligibility and category assessment",
    text: "determining which MTCTE phase and Essential Requirements apply to your product.",
  },
  {
    title: "Documentation preparation",
    text: "building a complete, accurate application file.",
  },
  {
    title: "Test coordination",
    text: "liaising with accredited test houses on your behalf for TEC approval for routers, TEC approval for Wi-Fi devices, TEC approval for IoT devices, TEC approval for GPON equipment, TEC approval for PABX systems, TEC approval for modems, TEC approval for VoIP phones, TEC approval for CCTV telecom equipment, TEC approval for LTE equipment, TEC approval for base transceiver stations, TEC approval for small cell equipment, TEC approval for session border controllers, TEC approval for media gateways, TEC approval for satellite communication equipment, and TEC approval for smartwatches, among other notified categories.",
  },
  {
    title: "MTCTE portal filing",
    text: "submitting and tracking your application through the MTCTE portal (the DoT eServices Portal).",
  },
  {
    title: "Post-certification support",
    text: "assisting with renewal, amendments, and compliance monitoring.",
  },
];

export const OUR_SERVICES_CLOSING =
  "For businesses managing certification across a wide product range, we also provide guidance on the TEC approval phase wise product list and TEC approval GCS SCS categories, so you understand which testing route applies before committing time and budget. Our TEC certification testing coordination service and best MTCTE test house coordination service are designed to keep your application moving without you having to manage multiple external parties directly. We position our offering as a fast TEC approval service where documentation and testing coordination allow it, and as one of the more affordable TEC approval services India businesses can access without compromising on accuracy or compliance.";

export const PROCESS_INTRO =
  "The TEC approval process generally follows a defined sequence, though the exact steps and document set can differ by product category. At a high level, applicants move through:";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Category and eligibility check",
    color: "#0b57b5",
    title: "1. Category and eligibility check",
    text: "confirming which MTCTE phase and Essential Requirements apply, and whether TEC approval self certification under GCS or third-party testing under SCS applies to the product.",
  },
  {
    step: "02",
    label: "Documentation preparation",
    color: "#2563eb",
    title: "2. Documentation preparation",
    text: "compiling the TEC approval application form, technical datasheets, and supporting declarations.",
  },
  {
    step: "03",
    label: "Test sample submission",
    color: "#0891b2",
    title: "3. Test sample submission",
    text: "where testing is required, samples are submitted to a designated TEC test house or accredited lab.",
  },
  {
    step: "04",
    label: "MTCTE portal application",
    color: "#059669",
    title: "4. MTCTE portal application",
    text: "the formal application is filed through the MTCTE portal, generating an application reference number.",
  },
  {
    step: "05",
    label: "Review and clarification",
    color: "#d97706",
    title: "5. Review and clarification",
    text: "DoT/TEC may raise queries; timely responses reduce the risk of TEC approval rejection reasons such as incomplete data or non-conformance.",
  },
  {
    step: "06",
    label: "Certificate issuance",
    color: "#dc2626",
    title: "6. Certificate issuance",
    text: "once compliance is confirmed, the TEC certificate is issued and can be downloaded (TEC certificate download) for use in customs, tenders, or distribution documentation.",
  },
];

export const PROCESS_EXTRA = [
  "For imported units used in testing, demonstration, or trade shows rather than commercial sale, a separate TEC NOC application for used telecom equipment import or import license exemption process may apply instead of the standard commercial certification path — this also covers a TEC approval process for used telecom equipment import scenario, which follows a different documentation track than a new-product application.",
  "Businesses that want a visual reference often ask for a TEC approval process flowchart PDF, run a TEC approval status check partway through, or ask how to track MTCTE application status online — our team provides status updates directly rather than requiring you to monitor the portal yourself, and offers TEC approval online application assistance, TEC approval application submission service, and professional MTCTE application filing service so your application is filed correctly the first time. If a TEC approval application rejected next steps situation arises, we help identify the gap and manage resubmission.",
  "This process differs depending on equipment type — for example, TEC certification process for GPON ONT step by step or TEC approval process for session border controller import may involve different test parameters than a simpler consumer device. Requirements may vary depending on the latest official regulatory guidelines, and actual processing steps should be confirmed against the current MTCTE procedure at the time of filing.",
];

export const DOCUMENTS_INTRO =
  "A complete and accurate document set is one of the most common factors that determines whether a TEC application moves smoothly or stalls. Typical TEC approval documents required include:";

export const DOCUMENTS_ITEMS = [
  "Duly filled TEC approval application form",
  "Technical specifications and product datasheets",
  "TEC test report format for telecom equipment submission — the test report itself, once testing is complete",
  "TEC certificate power of attorney format — required where a consultant or authorized representative files on the applicant's behalf",
  "TEC approval sample application letter format for cover correspondence",
  "Manufacturer authorization letter (for imported products)",
  "TEC approval sample certificate references, where applicable, for format guidance",
];

export const DOCUMENTS_EXTRA = [
  "For specific product categories, documentation can vary — for instance, the documents required for MTCTE registration of Wi-Fi router differ somewhat from the documents needed for TEC approval of CCTV telecom device, particularly around technical parameters tested. We provide TEC approval documentation support and TEC approval documentation consultant services to prepare and review your file before submission, along with a TEC approval document submission service that manages the filing itself.",
  "Because document checklists are tied to the applicable Essential Requirements and can be updated by TEC, Requirements may vary depending on the latest official regulatory guidelines — we recommend confirming the current checklist for your specific product category before finalizing your submission.",
];

export const ELIGIBILITY_PARAGRAPHS = [
  "Understanding TEC approval eligibility criteria starts with identifying whether your product falls under a notified MTCTE phase. Whether that product qualifies for the General Category Service (GCS) self-certification route or requires testing under the Specific Category Service (SCS) is determined by the specific device/equipment category as notified by TEC — this GCS/SCS classification is fixed per product category, not decided case by case for individual applicants.",
  "Beyond this device-based GCS/SCS classification, eligibility can also be affected by separate factors such as:",
];

export const ELIGIBILITY_FACTORS = [
  "Whether the equipment is being imported for commercial sale versus R&D, testing, or demonstration purposes (relevant to Import License Exemption Certificate eligibility).",
  "Whether the product has already been certified under an equivalent recognized scheme in another jurisdiction.",
  "Whether the applicant is the manufacturer, an authorized representative, or an importer filing on behalf of a foreign OEM.",
];

export const ELIGIBILITY_CLOSING =
  "Because eligibility rules — including which device categories fall under GCS versus SCS — are set out in the current MTCTE procedure and phase notifications, Requirements may vary depending on the latest official regulatory guidelines. Our team reviews your specific product and business scenario against the current framework before recommending a certification path.";

export const TIMELINE_PARAGRAPHS = [
  "TEC approval timeline expectations depend on several variables: whether third-party testing or self-certification applies, test house scheduling and capacity, the completeness of the submitted documentation, and whether the product falls under a category with a well-established testing protocol.",
  "Timelines vary mainly by whether a category requires third-party security or EMC testing under the Specific Category Service (SCS) or is eligible for the faster self-certification route under the General Category Service (GCS). Categories that require extensive third-party testing naturally take longer to plan for, while GCS-eligible categories — IoT gateways among them — generally do not require extensive third-party security testing and so tend to move faster. TEC approval timeline for phase 6 products such as Wi-Fi CPE can still vary depending on the specific test parameters involved, and how long does MTCTE certification take for modems and MTCTE certification timeline for LAN switches can likewise differ based on test parameter complexity. Businesses working against a launch date or tender deadline often ask about a TEC approval express service request or request TEC approval turnaround estimate — while we cannot alter statutory review timelines, our TEC certificate fast-track consultant approach focuses on eliminating avoidable delays through complete, correctly prepared documentation and proactive test house coordination, backed by TEC approval consultant response time India that keeps you informed at every stage.",
  "Because actual timelines depend on test house workload and DoT processing capacity at any given time, Requirements may vary depending on the latest official regulatory guidelines, and we recommend building buffer time into product launch or tender submission plans.",
];

export const COST_PARAGRAPHS = [
  "TEC approval cost depends on multiple factors: the product category and applicable Essential Requirements, whether third-party testing is required, the number of product models or variants covered, and any consultant service fees for documentation and filing support.",
  "Businesses evaluating TEC approval fees often want a clearer picture before committing budget — for example, TEC approval cost for PABX system in India or MTCTE registration fees for GCS category products will differ from MTCTE certification cost for small cell base station, given the different testing scope involved. We offer a TEC certification cost calculator India approach during initial consultation, along with transparent TEC approval consultant pricing India and a documented TEC approval consultant charges structure, so you can compare TEC approval consultant fees comparison India options and choose a TEC certification package price India that fits your certification scope. Where needed, we can also guide you through the TEC approval application fee payment process itself.",
  "Because government fee schedules, test house charges, and category-specific testing scope can change, Requirements may vary depending on the latest official regulatory guidelines — we do not quote fixed fees on this page and instead provide a scope-based estimate once your product and category are confirmed. If you would like a cost estimate for your specific product, our team can walk you through the applicable factors.",
];

export const VALIDITY_PARAGRAPHS = [
  "A TEC certificate is issued for a defined TEC approval validity period. Where the product has been fully tested against all applicable requirements, this validity period is typically 10 years, with renewal falling due at the end of that 10-year cycle. Businesses commonly ask about MTCTE certificate validity for imported routers and other product-specific validity questions, since validity periods and renewal conditions can still differ depending on the category, the certification route (GCS or SCS), and whether any requirements applicable to the product change in the meantime.",
  "To avoid a lapse in certification, we recommend reviewing renewal requirements well before expiry. Our team supports the steps to renew TEC certificate before expiry, helps applicants work through the TEC certificate renewal documents checklist, and manages the process so you can get TEC certificate renewal done or apply for TEC certificate renewal online without last-minute pressure. This overall TEC approval renewal support applies equally to first-time renewals and to certificates being renewed for a second or subsequent cycle.",
  "Because renewal conditions — including whether re-testing is required if the product or its applicable Essential Requirements have changed — are set by the current MTCTE procedure, Requirements may vary depending on the latest official regulatory guidelines.",
];

export const COMPLIANCE_PARAGRAPHS = [
  "TEC approval is one part of a broader telecom equipment compliance picture in India. Beyond the certificate itself, businesses need to manage telecom equipment manufacturer compliance India and telecom equipment importer compliance India obligations on an ongoing basis, including keeping documentation ready for a telecom equipment compliance audit India if one is requested by a customer, tender authority, or regulator.",
  "Related compliance elements referenced under the MTCTE framework include the Import License Exemption Certificate (ILEC) — commonly filed as an import license exemption certificate telecom submission — for exempted import scenarios, and the TEC NOC for import process for specific shipments. Because the regulatory landscape evolves — including updates such as the Telecommunications Rules 2025 MTCTE framework and periodic MTCTE certification exemption list 2026 revisions — we track TEC approval latest rules 2026 developments as part of our ongoing client support, rather than relying on outdated guidance.",
  "For businesses that prefer not to manage this internally, we offer to outsource TEC certification compliance, function as your TEC MTCTE compliance consulting firm, or act as a dedicated compliance partner for TEC MTCTE certification and TEC certification legal compliance partner for ongoing regulatory monitoring. As always, Requirements may vary depending on the latest official regulatory guidelines, and we recommend verifying current rules directly with TEC/DoT for any decision with significant business impact.",
];

export const INDUSTRIES_INTRO =
  "Our TEC approval and MTCTE certification support is built for a wide range of businesses across the telecom equipment value chain:";

export const INDUSTRIES: { title: string; text: string }[] = [
  {
    title: "System integrators",
    text: "TEC approval for system integrators managing multi-brand telecom deployments, supported through MTCTE certification agency for system integrators services.",
  },
  {
    title: "Government and PSU telecom vendors",
    text: "TEC approval for government telecom vendors, TEC approval consultant for PSU telecom vendor engagements, and TEC certification advisory for PSU tenders.",
  },
  {
    title: "Startups and MSMEs",
    text: "TEC approval consultant for small telecom startups and TEC approval consultant for IoT hardware startups building connected products, supported by our TEC certification company for startups offering.",
  },
  {
    title: "Manufacturers",
    text: "TEC approval service for manufacturers and TEC approval consultant for network switch manufacturer engagements.",
  },
  {
    title: "Importers",
    text: "TEC approval service for importers managing customs and market-entry timelines.",
  },
  {
    title: "Foreign OEMs",
    text: "TEC certification requirements for foreign telecom OEM and TEC approval consultant for telecom OEM support, including a TEC approval firm for telecom equipment brands role for international suppliers entering India.",
  },
  {
    title: "Router, network, and Wi-Fi device brands",
    text: "TEC certification consultant for router brands, TEC approval consultant for Wi-Fi device brands, TEC approval consultant for network equipment brands, and get TEC certification for Wi-Fi router brand support for e-commerce and retail-focused sellers.",
  },
  {
    title: "Government vendors requiring liaison support",
    text: "TEC certification consultant for government vendors and TEC approval consultant with government liaison for tender-linked certification needs.",
  },
];

export const INDUSTRIES_CLOSING =
  "Whatever your role in the supply chain, our team tailors documentation, testing coordination, and timeline planning to your specific business model and product category.";

export const WHY_CHOOSE_INTRO = [
  "Certification decisions carry real business consequences — a delayed or rejected TEC application can push back a product launch, a tender submission, or a customs clearance. We built our TEC approval service around the qualities that matter most when compliance is on the line:",
  "Our team functions as a TEC approval expert India resource and an Experienced TEC approval consultant, offering an experienced MTCTE certification consultant, TEC approval expert consultant India, and TEC certification compliance specialist who understands both the regulatory framework and the practical realities of getting a product certified on schedule. We aim to be recognized as a reliable TEC MTCTE consultant India and trusted TEC certification agency India, backed by a government approved TEC approval process approach that follows official procedure at every step.",
];

export const WHY_CHOOSE_PRACTICE_HEADING = "What this looks like in practice:";

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Documentation and coordination support for TEC approval",
    text: "from application preparation to TEC approval documentation assistance, we manage the paperwork so you don't have to interpret regulatory language yourself.",
  },
  {
    title: "Fast and reliable TEC approval service",
    text: "built around complete first-time submissions rather than repeated corrections.",
  },
  {
    title: "End-to-end TEC certification support",
    text: "from eligibility assessment through certificate issuance and renewal.",
  },
  {
    title: "Legal compliance for telecom equipment India",
    text: "grounded in current rules rather than outdated assumptions, with technical guidance for MTCTE certification available throughout your engagement.",
  },
  {
    title: "TEC approval expert with government liaison experience",
    text: "helpful for PSU and government tender scenarios where procedural familiarity matters.",
  },
  {
    title: "Transparent TEC approval pricing",
    text: "scope-based estimates instead of vague quotes.",
  },
  {
    title: "TEC approval consultant with proven track record",
    text: "and TEC approval case studies and client results available on request, supported by TEC approval consultant client testimonials and TEC certification consultant case studies from businesses we have worked with.",
  },
  {
    title: "Authorized TEC approval documentation partner approach",
    text: "working within the formal application and power-of-attorney framework rather than shortcuts.",
  },
  {
    title: "TEC approval consultant with test house network",
    text: "established relationships with accredited labs to reduce coordination friction.",
  },
  {
    title: "Trusted MTCTE compliance advisor",
    text: "supporting compliance decisions, not just one-time filings.",
  },
  {
    title: "TEC certification consultant with industry expertise",
    text: "across product categories from routers to satellite communication equipment.",
  },
  {
    title: "Verified TEC approval process knowledge",
    text: "and accurate and updated TEC approval guidance, maintained as a TEC approval consultant tracking regulatory updates continuously.",
  },
  {
    title: "TEC approval consultant familiar with DoT processes",
    text: "reducing back-and-forth during application review.",
  },
  {
    title: "Data-backed TEC approval timelines",
    text: "realistic expectations set from real case experience rather than generic promises.",
  },
  {
    title: "Ethical and compliant TEC certification practices",
    text: "we do not encourage shortcuts around Essential Requirements or testing obligations.",
  },
  {
    title: "Dedicated TEC approval project manager",
    text: "for each engagement, so you always have a single point of contact.",
  },
  {
    title: "TEC approval consultant with multi-sector experience",
    text: "as a TEC approval consultant serving PSU and private clients alike, and TEC approval consultant with in-depth ER knowledge across notified categories.",
  },
  {
    title: "Responsive TEC approval customer support",
    text: "and long-standing experience in telecom compliance consulting.",
  },
];

export const ADVANTAGE_INTRO = [
  "As a TEC approval consultant, TEC certification consultant, and TEC certification service provider India, Ornate Quality Service Pvt Ltd positions itself as a professional TEC approval consultant offering rather than a document-filing service alone. We aim to be considered among the best TEC approval consultant in India options for businesses that want a TEC approval consultancy firm India that understands the full compliance lifecycle — not just the initial application.",
  "Businesses evaluating consultants often compare TEC approval consultants India on criteria such as TEC approval consultant success rate India, TEC approval consultant customer support, and TEC approval consultant reviews. We encourage that comparison. Our positioning includes:",
];

export const ADVANTAGE_ITEMS = [
  "Functioning as a TEC approval end-to-end service provider and TEC approval regulatory consultant India, not a narrow single-service vendor.",
  "Offering a TEC MTCTE certification outsourcing company model for businesses that want to fully hand off compliance management.",
  "Providing TEC MTCTE certification project management service so multi-product certification programs stay on track.",
  "Being recognized as a top rated MTCTE certification company and, among top MTCTE certification consultants India, a best TEC certification company India contender based on client outcomes.",
  "Supporting TEC approval consultant appointment booking and TEC approval consultant contact form submissions for a straightforward way to start a conversation about your certification needs.",
  "Working through an TEC approval service enquiry form or a request TEC approval quote flow so you receive a scoped response rather than a generic reply, with a TEC approval consultant with test lab network already in place for testing coordination.",
];

export const ADVANTAGE_CLOSING =
  "We are also a TEC MTCTE consultant serving system integrators, manufacturers, and importers alike — TEC approval consultancy firm India credentials aside, our focus stays on getting your specific product certified correctly and on schedule.";

export const LOCAL_PARAGRAPHS = [
  "While TEC approval is a national certification issued through the DoT eServices Portal regardless of where your business is located, many companies prefer working with a TEC approval consultant near me for easier coordination, site visits, or document handling. Ornate Quality Service Pvt Ltd supports clients nationally and serves businesses looking for a TEC approval consultant in Delhi, TEC approval consultant in Mumbai, TEC approval consultant in Bangalore, TEC approval consultant in Noida, and TEC approval consultant in Gurugram, along with broader TEC certification consultant Delhi NCR coverage. Importers based in Maharashtra frequently look for a TEC approval consultant Mumbai for importers who can coordinate port and customs-linked documentation locally.",
  "We also support category-specific regional needs, such as businesses searching for MTCTE test house for LTE equipment near me, a best TEC approval agency near me, or TEC certification agency Bangalore for IoT-focused product lines. Regardless of your location, the certification process itself follows the same national MTCTE framework — our regional presence is about making coordination easier, not about a different regulatory pathway.",
];

export const COMPARISON_INTRO =
  "Two comparisons come up often enough among manufacturers and importers that they are worth addressing directly.";

export const COMPARISON_ROWS: TableRow[] = [
  {
    comparison: "WPC ETA vs TEC approval",
    answer:
      "Both fall under the Department of Telecommunications ecosystem, but they address different regulatory concerns. Equipment Type Approval (ETA) under the Wireless Planning & Coordination Wing (WPC) governs devices that use wireless spectrum, while TEC approval under MTCTE addresses broader telecom equipment conformity with Essential Requirements.",
    takeaway:
      "A single product may need to satisfy both frameworks depending on its wireless functionality and equipment category.",
  },
  {
    comparison: "MTCTE vs BIS CRS",
    answer:
      "MTCTE certification and the Bureau of Indian Standards Compulsory Registration Scheme (CRS) are both mandatory Indian conformity schemes, but they are administered by different regulatory bodies and apply to different product scopes — MTCTE to notified telecom equipment categories, and BIS CRS to electronics and IT goods notified under that separate scheme.",
    takeaway:
      'Products that sit at the intersection of "telecom equipment" and "electronics/IT hardware" sometimes need to evaluate both requirements.',
  },
];

export const COMPARISON_CLOSING =
  "Because scheme boundaries and notified category lists can be updated, Requirements may vary depending on the latest official regulatory guidelines — we recommend confirming which framework(s) apply to your specific product before assuming either certification alone is sufficient.";

export const RELATED_INTRO =
  "Many businesses that need TEC approval also need other product or business compliance certifications, either for the same product line or across their broader portfolio. Ornate Quality Service Pvt Ltd supports several related services alongside TEC approval, including:";

export const RELATED_CERTIFICATION = [
  "BIS CRS Registration consultant India",
  "BIS-ISI Mark Certification consultant India",
  "BIS Certification consultant India",
  "ISO Certification consultant India",
  "CE Certification consultant India",
  "FMCS Certification consultant India",
  "CCOE/PESO Certification consultant India",
  "CDSCO Certification consultant India",
  "BEE Registration consultant India",
  "EPR Registration consultant India",
  "GeM Registration consultant India",
  "Trademark Registration consultant India",
  "IEC Registration consultant India",
  "LMPC Registration consultant India",
  "WPC-ETA Approval consultant India",
  "RoHS Compliance consultant India",
  "NABL Lab Testing Services consultant India",
];

export const RELATED_QUALITY_INTRO =
  "For quality and supply-chain compliance beyond certification, we also support Pre-Production Inspection (PPI) consultant India, During Production Inspection (DPI) consultant India, Final Random Inspection (FRI) consultant India, Container Loading Inspection (CLI) consultant India, Factory & Process Inspection consultant India, Product Inspection & Quality Monitoring consultant India, and Third-Party Inspection (TPI) consultant India services, along with FSSAI Registration consultant India for applicable product categories, Audit Services consultant India, and Technical Documentation & Compliance Support consultant India for businesses that need ongoing documentation help across multiple regulatory schemes.";

export const RELATED_CLOSING =
  "Bringing these services together with TEC approval under one consulting relationship can simplify compliance planning for businesses managing multiple certifications at once.";

export const SCENARIOS_INTRO =
  "Beyond standard TEC approval and MTCTE certification filings, we also help clients with a range of specific and less common scenarios, including:";

export const SCENARIOS = [
  "TEC approval exemption for R&D telecom equipment — for products imported strictly for research, development, or internal testing rather than commercial sale.",
  "TEC approval for telecom equipment manufactured in India — domestic production scenarios with their own documentation considerations.",
  "TEC approval for imported IP PBX systems and similar enterprise communication hardware.",
  "How to check TEC certificate authenticity online — verification support for buyers, tender authorities, or partners who need to confirm a certificate's validity.",
  "TEC approval for smartwatch with SIM card India and other cellular-connected wearables.",
  "MTCTE certification for E-band radio equipment, relevant to wireless backhaul deployments.",
  "TEC approval for telecom equipment re-export — scenarios where equipment is imported and subsequently re-exported rather than sold domestically.",
  "MTCTE certification for machine to machine module — M2M and embedded connectivity components.",
  "TEC approval for VHF UHF radio equipment India — relevant to government and industrial radio communication users.",
  "TEC approval for telecom equipment demo units and TEC certification for telecom equipment trade show samples — short-term, non-commercial import scenarios that often qualify for different documentation treatment.",
  "MTCTE certification for satellite VSAT terminal — satellite communication equipment requiring specific test parameters.",
  "MTCTE test sample submission guidelines — practical guidance on preparing and shipping test samples correctly.",
  "TEC approval for conference room video equipment — enterprise AV and video-conferencing hardware with telecom interfaces.",
  "MTCTE certification for two way radio telecom device — professional and industrial two-way radio equipment.",
];

export const SCENARIOS_EXTRA = [
  "If you have a specific product scenario not listed above, our team can assess whether it falls under a notified MTCTE category and, if so, what the appropriate certification path looks like. You can also reach our TEC approval helpline contact number for a direct conversation about your situation.",
  "Because exemption eligibility and category-specific rules can change, Requirements may vary depending on the latest official regulatory guidelines — always confirm current applicability before relying on an exemption or special-case treatment.",
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is TEC approval?",
    a: "TEC approval is the certification issued under India's Mandatory Testing and Certification of Telecom Equipment (MTCTE) framework, administered by the Telecommunication Engineering Centre (TEC) under the Department of Telecommunications (DoT). It confirms that a telecom product meets the Essential Requirements (ER) notified for its equipment category before the product can be sold, imported, or deployed in India.",
  },
  {
    q: "Who needs TEC approval?",
    a: "Any manufacturer, importer, brand owner, or system integrator that sells, imports, or deploys telecom equipment falling under a notified MTCTE phase generally needs TEC approval. This includes Indian manufacturers, foreign OEMs supplying into India, e-commerce sellers of telecom-interface devices, and system integrators bidding on government or PSU telecom tenders. Requirements may vary depending on the latest official regulatory guidelines, so applicability should always be confirmed against the current MTCTE phase notification for the specific product.",
  },
  {
    q: "What is MTCTE certification?",
    a: "MTCTE certification is the umbrella compliance scheme under which TEC approval is granted. It requires telecom equipment to be tested — either by an accredited test house or through self-certification, depending on whether the product falls under the General Category Service (GCS) or Specific Category Service (SCS) — against the applicable Essential Requirements before market entry.",
  },
  {
    q: "What is the TEC approval process?",
    a: "The TEC approval process typically involves identifying the applicable MTCTE phase and Essential Requirements for the product, preparing technical documentation, submitting samples for testing (where required), filing the application through the MTCTE portal, and receiving the TEC certificate once compliance is verified. The exact steps can differ by product category and Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "What is the ILEC certificate?",
    a: "The Import License Exemption Certificate (ILEC) is a document that allows specific categories of telecom equipment imports — such as those meant for research and development, testing, demonstration, or trade show samples — to be exempted from certain MTCTE certification requirements under defined conditions. Eligibility for an ILEC certificate depends on the intended use and quantity of the imported equipment, so it should be verified against current DoT guidance.",
  },
  {
    q: "What is Essential Requirements (ER) in TEC approval?",
    a: "Essential Requirements (ER) are the technical, safety, and electromagnetic compatibility standards notified by TEC for each category of telecom equipment. A product must demonstrate conformity with its applicable ER before it can receive a TEC certificate. ER documents are updated periodically, so the applicable version should always be confirmed at the time of application.",
  },
  {
    q: "What is TEC approval validity?",
    a: "A TEC certificate is typically issued for a defined validity period, after which renewal is required to keep the certification active. The exact validity period can differ across product categories and certification types, and Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "What is TEC certificate renewal?",
    a: "TEC certificate renewal is the process of re-validating an existing certification before or after its expiry, so that the telecom product can continue to be sold or deployed in India without interruption. Renewal generally involves reviewing whether the product and its applicable Essential Requirements have changed since the original certificate was issued.",
  },
  {
    q: "What happens if a TEC application is rejected?",
    a: "A TEC application can be rejected for reasons such as incomplete documentation, non-conformance with Essential Requirements, incorrect category classification, or discrepancies in test reports. When this happens, applicants typically need to review the rejection reasons, correct the identified gaps, and resubmit the application or supporting documents.",
  },
  {
    q: "What does hiring a TEC approval consultant involve?",
    a: "Hiring a TEC approval consultant means engaging a specialist team to manage documentation, coordinate testing with recognized test houses, prepare and file the MTCTE application, and track the certificate through to approval. This is intended to reduce the compliance burden on manufacturers, importers, and system integrators who may not have in-house regulatory teams.",
  },
  {
    q: "Is TEC approval in India mandatory?",
    a: "Yes, TEC approval is mandatory in India for telecom equipment categories notified under the applicable MTCTE phase, unless a specific exemption (such as an ILEC) applies. Requirements may vary depending on the latest official regulatory guidelines, so the mandatory status of a specific product should be verified before manufacturing, import, or sale.",
  },
  {
    q: "What is the cost of TEC approval in India?",
    a: "The cost of TEC approval depends on factors such as the product category, applicable testing requirements, the number of models covered, and whether third-party test house charges apply. Because these factors vary widely, Requirements may vary depending on the latest official regulatory guidelines, and it is best to request a scope-based estimate rather than rely on a fixed figure.",
  },
  {
    q: "How long does TEC approval in India take?",
    a: "TEC approval timelines depend on the complexity of the product, test house scheduling, and the completeness of the submitted documentation. Because these factors differ case by case, Requirements may vary depending on the latest official regulatory guidelines, and applicants should plan for adequate lead time before a product launch or tender deadline.",
  },
  {
    q: "What documents are needed for TEC approval in India?",
    a: "Commonly required documents include the application form, technical specifications and datasheets, test reports, manufacturer authorization letters (for imported products), and a power of attorney where a consultant is filing on the applicant's behalf. The exact document checklist can vary by product category and Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "Can I expedite TEC approval in India?",
    a: "Certain steps in the TEC approval process, such as documentation preparation and test scheduling coordination, can be managed more efficiently with experienced support, which may help avoid avoidable delays. However, statutory review and testing timelines are set by the regulatory framework and test houses, so Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "Is MTCTE registration mandatory?",
    a: "Yes, MTCTE registration and certification are mandatory for telecom equipment categories that fall under a notified MTCTE phase, subject to any applicable exemptions. The applicable phase and category should be confirmed for each specific product.",
  },
  {
    q: "Is TEC approval for imported equipment mandatory?",
    a: "Yes, imported telecom equipment falling under a notified MTCTE category generally requires TEC approval before customs clearance and sale in India, unless a valid exemption such as an ILEC applies. Importers should confirm current applicability before shipment.",
  },
  {
    q: "Is TEC approval for manufacturers mandatory?",
    a: "Yes, Indian manufacturers producing telecom equipment under a notified MTCTE category are generally required to obtain TEC approval before the product can be marketed or sold domestically.",
  },
  {
    q: "Is a TEC test report mandatory?",
    a: "A TEC test report demonstrating conformity with the applicable Essential Requirements is generally required as part of the certification file, whether the testing is conducted by an accredited test house or through self-certification where permitted under the GCS/SCS framework.",
  },
  {
    q: "Is TEC approval for government tenders mandatory?",
    a: "Yes, telecom equipment supplied under most government and PSU tenders is generally required to hold valid TEC approval for the applicable product category, as certification is commonly listed as an eligibility or compliance requirement in such tenders.",
  },
  {
    q: "Is TEC approval for a new product launch mandatory?",
    a: "If the new product falls under a notified MTCTE category, TEC approval is generally required before the product can be commercially launched in India. Planning for certification early in the product development cycle can help avoid launch delays.",
  },
  {
    q: "Is a TEC approval consultant mandatory?",
    a: "No, engaging a TEC approval consultant is not a legal requirement — applicants can file directly through the MTCTE portal. However, many manufacturers, importers, and system integrators choose to work with a consultant to manage documentation, testing coordination, and portal filing more efficiently.",
  },
  {
    q: "Is TEC approval exemption mandatory to check before import?",
    a: "Checking exemption eligibility, such as under an Import License Exemption Certificate, is strongly advisable before importing telecom equipment for purposes like R&D, testing, or demonstration, since claiming an exemption incorrectly can create compliance issues at customs.",
  },
  {
    q: "Is TEC approval for IoT products mandatory?",
    a: "Yes, IoT devices with a telecom interface — such as IoT gateways and M2M modules — that fall under a notified MTCTE phase generally require TEC approval before sale or deployment in India.",
  },
  {
    q: "Is TEC approval for imported routers mandatory?",
    a: "Yes, imported routers and Wi-Fi customer premises equipment falling under the applicable MTCTE phase generally require TEC approval before they can be sold or distributed in India.",
  },
];

export const CTA_INTRO = [
  "If your telecom product needs TEC approval, MTCTE certification, or ongoing compliance support, Ornate Quality Service Pvt Ltd is ready to help you move forward. You can apply for TEC approval online, apply for MTCTE certification online, or simply get started with TEC certification by reaching out with your product details. If you are still exploring the basics, our team can also walk you through how to apply for TEC certification and how to apply TEC certificate on MTCTE portal before you begin.",
  "Whether you need to register for TEC approval India for the first time, submit TEC approval application documents for review, hire TEC approval consultant support for an urgent tender deadline, or book TEC certification consultation to plan a multi-product certification roadmap, our team is available to guide you through every step — from request TEC approval quote through to get TEC certificate for telecom equipment in hand. Businesses ready to move immediately often choose to hire TEC approval consultant India or hire TEC approval consultant now, while others prefer to start TEC certification process today with an initial scoping call.",
];

export const CTA_TALK_HEADING = "Talk to our team today:";

export const CTA_ITEMS = [
  "Request a callback: request callback TEC approval consultant",
  "Start your application: TEC approval consultant contact form",
  "Get a scoped estimate: get TEC approval cost estimate, or get quote for TEC approval services",
  "Move fast on a deadline: TEC approval order testing samples, request TEC approval sample testing, or get MTCTE certificate fast",
  "New product launch: get TEC approval before product launch",
  "IoT hardware: how to get TEC approval for IoT gateway in India",
  "Government tender: get TEC approval for government tender",
  "Import shipment: apply for import license exemption certificate, get ILEC certificate for telecom equipment, get TEC certificate before customs clearance, or get TEC NOC for telecom import",
  "Already have a product in mind: get TEC approval for router brand, apply TEC certification for IoT device, get MTCTE certificate for GPON equipment, apply TEC approval for PABX system, apply TEC approval for smartwatch brand, or get TEC approval for LTE equipment brand",
  "Need a status update or copy: request TEC approval status update or request TEC certificate copy",
  "Need a compliance review: request TEC MTCTE compliance audit",
  "Need test house scheduling: request MTCTE test house appointment",
  "Outsourcing an application: hire consultant for MTCTE application, or request MTCTE certification proposal",
  "Booking a program: TEC approval package booking",
  "Ready to proceed: apply now for TEC MTCTE certification or apply MTCTE portal registration",
];

export const CTA_CLOSING =
  "Get TEC approval support today, and get TEC certification support today — reach out to Ornate Quality Service Pvt Ltd to begin.";
