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

export const BIS_ISI_TOC: TocItem[] = [
  { id: "what-is-isi", label: "What Is BIS-ISI Mark Certification?" },
  { id: "why-matters", label: "Why Is BIS-ISI Mark Certification Important?" },
  { id: "who-needs", label: "Who Needs BIS-ISI Mark Certification?" },
  { id: "benefits", label: "Key Benefits of BIS-ISI Mark Certification" },
  { id: "service-includes", label: "Key Features of Our BIS Certification Service" },
  { id: "eligibility", label: "Eligibility for BIS-ISI Mark Certification" },
  { id: "documents", label: "Documents Required for BIS-ISI Mark Certification" },
  { id: "process", label: "Step-by-Step BIS-ISI Mark Certification Process" },
  { id: "timeline", label: "Timeline for BIS-ISI Mark Certification" },
  { id: "cost", label: "Cost Factors in BIS-ISI Mark Certification" },
  { id: "validity", label: "Validity of BIS-ISI Mark Certification" },
  { id: "renewal", label: "Renewal of BIS-ISI Mark Certification" },
  { id: "compliance", label: "Staying Compliant After Certification" },
  { id: "challenges", label: "Common Challenges in BIS-ISI Mark Certification" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-ornate", label: "Why Choose Ornate Quality Service Pvt. Ltd." },
  { id: "where-we-serve", label: "Where We Serve" },
  { id: "industries", label: "Industries We Serve" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "scheme-comparison", label: "BIS Scheme-I in Context: How It Compares" },
  { id: "products-covered", label: "Products Covered Under BIS-ISI Mark Certification" },
  { id: "qco-reference", label: "QCO / Gazette Notification Reference" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Talk to a BIS-ISI Mark Certification Expert" },
  { id: "research-sources", label: "Research Sources for QCO / Gazette References" },
];

export const BANNER_TITLE = "BIS-ISI Mark Certification for Domestic Manufacturers";

export const BANNER_SUBTITLE =
  "Get government-approved ISI Mark Certification for your manufacturing unit — with end-to-end documentation, factory audit preparation, and compliance support from Ornate Quality Service Pvt. Ltd.";

export const BANNER_DESCRIPTION =
  "If your product falls under a BIS Quality Control Order, ISI Mark Certification isn't optional — it's the legal requirement that lets you manufacture and sell in India. Ornate Quality Service Pvt. Ltd. helps manufacturers, MSMEs, startups, and brand owners across India secure their BIS-ISI Mark Certification (Scheme-I) with a transparent, government-approved certification process.";

export const WHAT_YOU_GET_HEADING = "What you get working with us:";

export const WHAT_YOU_GET_ITEMS: string[] = [
  "End-to-end BIS certification assistance — from documentation to factory audit preparation",
  "A government-approved certification process handled by an experienced BIS compliance consultant",
  "Documentation and coordination support at every stage of your ISI mark certification",
  "Test report assistance and lab coordination with BIS-recognized testing laboratories",
  "Post-certification compliance support, including surveillance audit guidance",
  "Consultants experienced across steel, cement, electrical appliances, cables, toys, and other notified product categories",
];

export const WHAT_IS_PARAGRAPHS: string[] = [
  "BIS-ISI Mark Certification India is the government-approved product certification issued under the Bureau of Indian Standards (BIS) framework, granted through what is known as Scheme-I — the standard certification route for domestic manufacturers. When your product qualifies, BIS grants a CM/L Licence (Certification Marks Licence) that allows you to display the ISI Mark on your product, confirming that it conforms to the applicable Indian Standard. If you've come across the term and wondered about cm/l licence meaning in bis certification, this is it: your formal, product-specific authorization to manufacture and mark under the ISI scheme.",
  "The ISI Mark itself is one of the most widely recognized quality marks in India. For manufacturers, ISI Mark Certification is both a compliance requirement and a trust signal — for consumers, retailers, and B2B buyers, it confirms that a product has been independently tested and meets a defined national quality benchmark.",
  "To keep the terminology precise: the certification itself is called ISI Mark Certification; the document BIS issues you is a BIS Licence, formally known as a CM/L Licence — these are the correct terms we use throughout this page and in client communication, in place of looser terms like \"BIS Registration\" or \"BIS License\" (registration is a step in the process, not the name of what you ultimately hold).",
  "BIS-ISI Mark Certification is relevant wherever:",
];

export const WHAT_IS_RELEVANT: string[] = [
  "A product category has been notified under a BIS Quality Control Order (QCO), making certification compulsory",
  "A manufacturer wants to sell into retail chains, e-commerce marketplaces, or B2B channels that require BIS compliance as a precondition",
  "A business wants to demonstrate product quality and safety as part of its market positioning, even where certification is not yet mandatory for that specific product",
];

export const WHAT_IS_CLOSING: string[] = [
  "This service page focuses specifically on Scheme-I, the domestic manufacturer route. If you manufacture outside India and want to sell into the Indian market, a different BIS route (FMCS, for foreign manufacturers) generally applies — our team can help you confirm which route is correct for your business.",
  "Because certification becomes compulsory the moment a product is notified, BIS-ISI Mark Certification is often described as BIS Compulsory Registration Certification — once your product appears on the New BIS QCO Products List, it joins the growing list of Mandatory BIS Certification Products and certification stops being optional. Staying current with BIS Quality Control Order Compliance matters even if your product isn't notified today, since BIS periodically expands QCO coverage into new product categories.",
];

export const WHY_MATTERS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Legal compliance",
    text: "Once a product category is notified under a BIS Quality Control Order, manufacturing, storing, selling, or distributing that product without valid ISI Mark Certification is a compliance violation under the BIS Act, 2016. The exact provisions, notified product list, and any consequences of non-compliance should always be verified against the current official BIS notification for your specific product — regulations are updated periodically and we don't want to guess at specifics that could be out of date by the time you read this.",
  },
  {
    title: "Market access",
    text: "Many organised retail chains, e-commerce marketplaces, and government or institutional buyers now require valid BIS certification documentation before onboarding a supplier for a notified product category. Without it, you may be excluded from these channels entirely, regardless of your product's actual quality.",
  },
  {
    title: "Consumer and buyer trust",
    text: "The ISI Mark is a recognizable quality signal in the Indian market. It tells a buyer — consumer or business — that your product has passed independent testing against a defined national standard, not just your own internal quality checks.",
  },
  {
    title: "Quality benchmarking",
    text: "Preparing for BIS certification typically pushes a manufacturing unit to formalise its quality control processes, documentation, and testing discipline — improvements that tend to benefit the business well beyond the certificate itself.",
  },
  {
    title: "Risk reduction",
    text: "Certified manufacturers are better positioned during market surveillance, customer disputes, and B2B due diligence, since they can produce a valid licence and test history on request.",
  },
];

export const WHO_NEEDS_INTRO =
  "BIS-ISI Mark Certification (Scheme-I) is relevant to a wide range of businesses manufacturing in India, including:";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Domestic manufacturers",
    text: "Any manufacturer producing a BIS-notified product within India for domestic sale needs certification for that product category — this is the core audience for BIS Certification for Manufacturers.",
  },
  {
    title: "Startups and new manufacturing units",
    text: "ISI Mark Certification for startups and new manufacturers is common — a new unit can apply as soon as it is operationally ready for factory inspection and sample testing, without needing years of prior operating history.",
  },
  {
    title: "MSMEs",
    text: "ISI Mark Certification for MSME manufacturers follows the same Scheme-I route as larger companies, though documentation and process planning are often simpler for smaller production setups.",
  },
  {
    title: "Small manufacturers",
    text: "ISI Mark Certification for small manufacturers is scoped to the manufacturer's actual production capacity and product range — certification is not limited to large-scale factories.",
  },
  {
    title: "Brand owners and private-label businesses",
    text: "If you sell under your own brand but the manufacturing is not fully in-house, your eligibility path depends on your specific manufacturing arrangement. Our compliance team can walk you through what applies to private-label and OEM brand owners in your situation.",
  },
  {
    title: "Manufacturers with multiple factory locations",
    text: "Businesses producing the same notified product at more than one manufacturing unit need certification structured across all applicable locations — we help plan and sequence this.",
  },
  {
    title: "Exporters who also sell domestically",
    text: "If you manufacture in India and sell any portion of your output in the Indian market, BIS-ISI Mark Certification applies to your domestically sold, notified products — independent of your export activity, which is typically governed by the importing country's own standards.",
  },
  {
    title: "E-commerce sellers and large enterprises",
    text: "Whether you're a single-product e-commerce brand or a large manufacturing enterprise with multiple product lines, the certification requirement and process framework are the same — it's the scale of documentation and coordination that changes.",
  },
];

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Regulatory compliance",
    text: "Certification keeps your manufacturing and sale of notified products compliant with the applicable Quality Control Order and the BIS Act, 2016 — reducing your exposure to regulatory action.",
  },
  {
    title: "Business growth and market access",
    text: "A valid CM/L Licence opens doors to retail chains, e-commerce marketplaces, government procurement processes, and B2B buyers that specifically require BIS-certified suppliers for notified product categories.",
  },
  {
    title: "Consumer and buyer trust",
    text: "The ISI Mark is one of the most recognized quality indicators in the Indian market — it builds confidence with end consumers and business buyers alike.",
  },
  {
    title: "Demonstrated quality",
    text: "Certification requires your product to meet a defined Indian Standard, verified through factory inspection and independent lab testing — giving you an objective, third-party-verified quality claim.",
  },
  {
    title: "Wider market access",
    text: "Certification removes a common gatekeeping barrier for notified products, helping you access sales channels that would otherwise be closed to uncertified suppliers.",
  },
  {
    title: "Reduced compliance risk",
    text: "With valid certification and an ongoing surveillance-audit routine, you're in a stronger position if your product is ever questioned by a regulator, retailer, or customer.",
  },
];

export const SERVICE_INCLUDES: string[] = [
  "End-to-end BIS certification assistance — from initial eligibility assessment through to licence grant",
  "Documentation and coordination support for every form, application, and portal submission",
  "Factory audit preparation to help your manufacturing unit be ready for BIS inspection",
  "Test report assistance and lab coordination with BIS-recognized testing laboratories",
  "BIS Care / Manak Online portal application support, including status tracking",
  "Government liaison — we manage day-to-day correspondence with BIS on your behalf",
  "Renewal and annual compliance support, so your certification doesn't lapse",
  "Industry-specific experience across steel, cement, electrical appliances, cables and wires, toys, and other notified categories",
  "Multi-location and multi-product support for manufacturers certifying more than one facility or product line",
];

export const ELIGIBILITY_INTRO =
  "Before you apply, it helps to understand the ISI Mark Certification Eligibility Criteria that BIS applies to Scheme-I applicants.";

export const ELIGIBILITY_WHO_HEADING = "Who typically qualifies:";

export const ELIGIBILITY_WHO: string[] = [
  "A business operating a functional manufacturing unit in India that produces a BIS-notified product — this is the baseline scenario covered under BIS Certification for New Manufacturing Unit as well as established factories",
  "Manufacturers with one factory or multiple factory locations producing the same or related notified products — see BIS Certification for Multiple Manufacturing Units below",
  "New manufacturing units, startups, and MSMEs that are operationally ready for factory inspection and sample testing",
  "Manufacturers seeking certification for products sold domestically, regardless of whether they also export — relevant for ISI Mark Certification for Exporters",
];

export const ELIGIBILITY_CLOSER_HEADING = "Situations that need a closer look:";

export const ELIGIBILITY_CLOSER: string[] = [
  "ISI Mark Certification for Brand Owners, including private label and OEM brand owners who don't directly operate the manufacturing facility — eligibility for an isi mark certification for private label brand owner or an isi mark certification for oem brand depends on the specific manufacturing and licensing arrangement in place, and should be reviewed case by case",
  "Isi mark certification without factory ownership (for example, using a leased or shared facility) — this doesn't automatically disqualify an applicant, but the manufacturing setup needs to be verified against current BIS requirements",
  "Isi mark certification for multiple factory locations producing under one brand — sequencing matters here, and we help plan it",
  "Exporters who don't currently sell in the Indian domestic market — certification requirements depend on whether and when domestic sale begins",
];

export const ELIGIBILITY_CLOSING =
  "If you're unsure whether your specific situation qualifies, our team can review your manufacturing setup and confirm the applicable path before you begin the formal application.";

export const DOCUMENTS_INTRO =
  "Use this as your working ISI Mark Certification Documents Checklist — it covers what BIS typically expects to see, and matches what we ask for when we tell you how to apply for isi mark certification online.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Business registration proof (incorporation certificate, partnership deed, or proprietorship proof)",
    purpose: "Confirms the legal identity of the applicant entity",
    mandatory: "Mandatory",
    notes: "Type of proof depends on your business structure",
  },
  {
    document: "PAN and GST registration details",
    purpose: "Statutory identification for the application",
    mandatory: "Mandatory",
    notes: "—",
  },
  {
    document: "Factory / manufacturing unit address proof",
    purpose: "Confirms the location where the notified product is manufactured",
    mandatory: "Mandatory",
    notes: "Required for every manufacturing location covered by the application",
  },
  {
    document: "Manufacturing process flow chart",
    purpose: "Shows BIS how your product is actually produced",
    mandatory: "Mandatory",
    notes: "Should reflect your real production process, not a generic template",
  },
  {
    document: "List of plant and machinery",
    purpose: "Confirms manufacturing capability matches the applied product",
    mandatory: "Mandatory",
    notes: "—",
  },
  {
    document: "In-house quality control / testing facility details",
    purpose: "Confirms your ability to conduct routine quality checks",
    mandatory: "Mandatory where applicable",
    notes: "Requirement varies by product and applicable Indian Standard",
  },
  {
    document: "Product test reports from an accredited or BIS-recognized laboratory",
    purpose: "Demonstrates conformity to the applicable Indian Standard",
    mandatory: "Mandatory",
    notes: "Coordinated as part of our lab coordination service",
  },
  {
    document: "Raw material details and sourcing information",
    purpose: "Supports traceability of inputs used in the notified product",
    mandatory: "Mandatory where applicable",
    notes: "—",
  },
  {
    document: "Applicable Indian Standard (IS) reference for the product",
    purpose: "Confirms the correct standard the product is being certified against",
    mandatory: "Mandatory",
    notes: "Our team helps confirm the applicable IS code for your specific product",
  },
  {
    document: "BIS Application Form for ISI Mark (via BIS Care Manak Portal Application)",
    purpose: "Formal application submission",
    mandatory: "Mandatory",
    notes: "Filed and tracked on your behalf as part of the BIS Certification Online Application Process",
  },
];

export const DOCUMENTS_CLOSING =
  "The exact document checklist can vary by product category and the specific Indian Standard that applies to it — the documents required for BIS-ISI mark certification are confirmed for your specific product before your application is filed, rather than relying on a generic list. Once submitted, we also help with ISI Mark Certification Application Status Tracking, so you always know where your file stands and how to check your ISI mark certificate status online.";

export const PROCESS_INTRO =
  "This is how to get ISI Mark Certification in practice — our BIS Certification Process for Domestic Manufacturers, laid out as the ISI Certification Process step by step:";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Eligibility",
    color: "#0b57b5",
    title: "1. Preparation and eligibility assessment.",
    text: "We review your product, manufacturing setup, and the applicable Indian Standard to confirm you're applying under the correct scope — this is the foundation of the BIS Certification Scheme-I Process.",
  },
  {
    step: "02",
    label: "Documentation",
    color: "#2563eb",
    title: "2. Documentation.",
    text: "We help you gather and organise the required documents, including manufacturing process details and quality control records.",
  },
  {
    step: "03",
    label: "Application",
    color: "#0891b2",
    title: "3. Application filing.",
    text: "Your application is submitted through the official BIS Care / Manak Online portal, with our team managing form accuracy and submission.",
  },
  {
    step: "04",
    label: "BIS review",
    color: "#059669",
    title: "4. BIS review.",
    text: "BIS scrutinizes the submitted application and documentation, and may raise queries — which we help you resolve promptly.",
  },
  {
    step: "05",
    label: "Factory inspection",
    color: "#d97706",
    title: "5. Factory inspection.",
    text: "A BIS officer conducts a Factory Audit for BIS Certification to verify your manufacturing process, quality control systems, and production capability, following the same BIS Factory Inspection Process and bis factory inspection checklist for isi mark we prepare you against in advance.",
  },
  {
    step: "06",
    label: "Sample testing",
    color: "#dc2626",
    title: "6. Sample testing.",
    text: "Product samples go through the standard BIS Sample Testing Procedure at a lab from the BIS Recognized Testing Laboratory List, tested against the applicable Indian Standard. We coordinate this testing on your behalf, and can help you meet the applicable BIS Test Report Requirements.",
  },
  {
    step: "07",
    label: "Decision",
    color: "#7c3aed",
    title: "7. Review and decision.",
    text: "Based on the inspection and test results, BIS reviews the complete application for a certification decision.",
  },
  {
    step: "08",
    label: "Licence grant",
    color: "#0d9488",
    title: "8. Grant of CM/L Licence.",
    text: "On approval, BIS issues your CM/L Licence, authorizing use of the ISI Mark on your certified product.",
  },
  {
    step: "09",
    label: "Compliance",
    color: "#475569",
    title: "9. Post-certification compliance.",
    text: "Once certified, you're expected to maintain ongoing quality control and cooperate with periodic BIS surveillance audits — which our team continues to support. If your product range changes later, we also handle the isi mark certification amendment process and isi mark certification additional product addition on your existing licence.",
  },
];

export const TIMELINE_PARAGRAPH =
  "\"How long does ISI mark certification take?\" is one of the first questions every applicant asks. The honest answer: ISI Mark Certification Timeline and BIS Certification Turnaround Time depend on factors such as your product category, how quickly documentation is finalised, testing laboratory scheduling, and the current processing pace at BIS — which can change based on regulatory workload and the applicable Quality Control Order. The isi mark certification timeline for electrical products, for instance, can look quite different from a construction-materials timeline, purely because of different testing requirements. Rather than quote a fixed number of days, we prefer to give you a realistic, product-specific estimate once we've reviewed your application readiness, and we'll flag anything in your specific case that's likely to speed up or slow down the process.";

export const COST_INTRO =
  "We don't publish a flat price, because ISI Mark Certification Cost genuinely varies by case. The main factors that influence your total cost include:";

export const COST_FACTORS: string[] = [
  "ISI Mark Certification Government Fees and the ISI Mark Licensing Fee India payable to BIS as part of the formal process",
  "Product testing and lab fees, which depend on the applicable Indian Standard and the number of test parameters involved",
  "Documentation and application-preparation effort, which varies with how organised your existing records are",
  "BIS Certification Consultant Charges, based on the scope of support you need — documentation only, versus full end-to-end management (our bis certification consultant charges breakdown is shared upfront, not buried in fine print)",
  "Number of factory locations and product variants being covered under the same or related applications",
  "Renewal and ongoing compliance costs, once your certificate is active",
];

export const COST_CLOSING =
  "Cost also varies meaningfully by category — the isi mark certification cost for small manufacturers is typically lower than for a multi-location enterprise, and the isi mark certification fees for cement manufacturers will differ from an electronics manufacturer's, purely because of different testing scopes. We provide a specific bis certification cost estimate and a clear BIS Certification Fees Structure after understanding your product, manufacturing setup, and scope of support required — never a generic number that doesn't reflect your actual application. If you're comparing options, our isi mark certification consultant fees comparison is available on request.";

export const VALIDITY_PARAGRAPH =
  "The ISI Mark Certification Validity Period is a defined certification period set at the time your CM/L Licence is granted, after which it must be renewed to keep manufacturing and selling the notified product legally. The exact validity period applicable to your licence should be confirmed from your certificate and the current BIS guidelines in force at the time of grant, since terms can be updated by BIS from time to time.";

export const RENEWAL_INTRO =
  "Our ISI Mark Certification Renewal Process — and this isi mark certification validity and renewal guide — cover what to expect as your certificate approaches expiry.";

export const RENEWAL_WHEN_TITLE = "When renewal is required";
export const RENEWAL_WHEN_TEXT =
  "Renewal should be initiated well before your existing CM/L Licence expires, to avoid any gap in your ability to legally manufacture and sell the certified product.";

export const RENEWAL_PROCESS_TITLE = "General renewal process";
export const RENEWAL_PROCESS_TEXT =
  "Renewal typically involves reconfirming your manufacturing setup, updating documentation, and — depending on the product and BIS's current requirements — repeating some element of testing or verification.";

export const RENEWAL_PRECAUTIONS_HEADING = "Important precautions:";

export const RENEWAL_PRECAUTIONS: string[] = [
  "Track your certificate's expiry date well in advance; don't wait for a reminder from BIS",
  "Keep your quality control and production records current between surveillance audits, not just before renewal",
  "Flag any change in manufacturing location, process, or product specification promptly, since this can affect your renewal",
];

export const RENEWAL_CLOSING =
  "Our renewal and annual compliance service is designed specifically to prevent certificate lapses — we track your key dates so you don't have to.";

export const COMPLIANCE_INTRO =
  "Certification is the start of an ongoing relationship with BIS, not a one-time event. We help you work through your own ISI Mark Certification Compliance Checklist, covering:";

export const COMPLIANCE_ITEMS: string[] = [
  "BIS Surveillance Audit Requirements — what is surveillance audit in BIS certification, and how often it applies to your product (our bis surveillance audit frequency for isi mark holders guidance is confirmed per category, since it varies by product)",
  "ISI Mark Certificate Cancellation Reasons and BIS Certificate Suspension and Cancellation triggers — understanding these upfront helps you avoid them entirely",
  "ISI Mark Certification Rejection Reasons — for manufacturers still in the application stage, knowing common isi mark certification rejection reasons and solutions helps you get it right the first time",
];

export const COMPLIANCE_CLOSING =
  "If any of these situations do arise, our post-certification compliance support is built to help you resolve them quickly rather than start over.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Documentation issues",
    text: "Missing, inconsistent, or incorrectly formatted documents are one of the most common reasons applications stall.",
  },
  {
    title: "Compliance and quality control gaps",
    text: "If your in-house quality control processes don't yet match what BIS expects to see, factory inspection can surface issues you weren't tracking.",
  },
  {
    title: "Testing issues",
    text: "Sample test failures — often due to using the wrong Indian Standard, inconsistent raw materials, or process variation — can delay certification significantly.",
  },
  {
    title: "Approval delays",
    text: "Incomplete applications, unclear manufacturing process documentation, or unresolved BIS queries all extend your timeline unnecessarily.",
  },
  {
    title: "Technical mistakes",
    text: "Applying under the wrong IS standard, misjudging which QCO applies to your product, or missing a required document type are avoidable errors that a specialist review can catch early.",
  },
];

export const HOW_WE_HELP_INTRO =
  "Ornate Quality Service Pvt. Ltd. provides end-to-end BIS certification assistance, so you're not managing this process alone:";

export const HOW_WE_HELP_ITEMS: string[] = [
  "Documentation support — preparing, organising, and reviewing every document before submission",
  "Application filing assistance — managing your BIS Care / Manak Online portal application accurately and on time",
  "Factory audit preparation — helping your team get inspection-ready",
  "Test report assistance and lab coordination — working directly with BIS-recognized testing laboratories",
  "Compliance guidance — explaining what applies to your specific product and manufacturing setup",
  "Government liaison — handling routine correspondence and query resolution with BIS on your behalf",
  "Post-certification support — surveillance audit preparation and renewal tracking, so your certificate stays valid",
];

export const HOW_WE_HELP_CLOSING =
  "We do not promise or guarantee certification approval — outcomes depend on your product meeting the applicable Indian Standard and BIS's own review. What we do guarantee is a properly prepared, well-documented, and professionally managed application.";

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Experienced BIS compliance consultant",
    text: "Our team has hands-on experience managing BIS-ISI Mark Certification across multiple product categories, not just a generic compliance overview — we aim to be a genuine Experienced BIS Certification Consultant and Certified Compliance Specialist, not a document-filing middleman.",
  },
  {
    title: "Government-approved, transparent process",
    text: "We follow the official, Verified BIS Certification Process as defined by BIS itself — there are no shortcuts, and our Transparent Certification Process means we're upfront with clients about what each stage genuinely involves.",
  },
  {
    title: "Industry-specific compliance expertise",
    text: "From steel and cement to electrical appliances, cables, and toys, our consultants understand the practical differences between product categories, not just the paperwork. This is backed by a Data-Backed Certification Process and, where relevant, Client Case Studies in ISI Mark Certification we can share on request.",
  },
  {
    title: "Documentation and coordination support you can rely on",
    text: "Our Documentation & Coordination Support covers consistent documentation standards, an Accurate Documentation Guarantee on the paperwork we prepare, and a Dedicated Compliance Case Manager as your single point of contact — backed by a Responsive Certification Support Team for day-to-day questions. This includes hands-on Documentation Assistance for Manufacturers and Technical Guidance for Manufacturers at every stage, plus Legal Compliance Advisory where your certification intersects with wider regulatory questions.",
  },
  {
    title: "Manufacturer-first approach",
    text: "Our Manufacturer-First Certification Approach is built around how manufacturing businesses actually operate, not around what's easiest for us to file — the goal is a Proven Certification Track Record, not just a completed file.",
  },
  {
    title: "Post-certification compliance support",
    text: "Certification isn't the end of our engagement — we continue supporting you through surveillance audits and renewal, so your ISI Mark stays valid.",
  },
  {
    title: "Compliant, ethical practices",
    text: "We operate Compliant with BIS Act 2016 and current BIS guidelines, following Ethical Compliance Practices throughout — we don't offer approval guarantees, and we won't ask you to cut corners on documentation or testing. This is what makes us a Trusted ISI Mark Consultancy and an Authentic Government Liaison Service, not just another filing agent.",
  },
];

export const WHY_CHOOSE_CLOSING =
  "The best way to judge any ISI Mark Certification Consultant is to see how they've helped businesses like yours — for ISI Mark Certification Guidance specific to your product and manufacturing setup, and to see feedback from manufacturers we've worked with, reach out to our team directly.";

export const WHERE_WE_SERVE_INTRO =
  "We work with manufacturers across India — this isn't a service limited to one city or region. Search for an ISI Mark Certification Consultants Near Me or an isi mark certification agency near me, and you'll find our team already active as:";

export const WHERE_WE_SERVE_CITIES: string[] = [
  "isi mark certification consultant in Delhi NCR",
  "isi mark certification consultant in Mumbai",
  "isi mark certification consultant in Pune",
  "isi mark certification consultant in Ahmedabad",
  "isi mark certification consultant in Chennai",
  "isi mark certification consultant in Bangalore",
  "isi mark certification consultant in Hyderabad",
  "isi mark certification consultant in Kolkata",
  "isi mark certification consultant in Ludhiana",
  "isi mark certification consultant in Coimbatore",
];

export const WHERE_WE_SERVE_CLOSING =
  "We also work as an isi mark certification consultant for Gujarat manufacturers, an isi mark certification consultant for Haryana manufacturers, an isi mark certification consultant for Tamil Nadu manufacturers, an isi mark certification consultant for UP manufacturers, an isi mark certification consultant for Punjab manufacturers, and an isi mark certification consultant for Rajasthan manufacturers. Wherever your factory is located, if you're searching for an isi mark certification consultant near my factory, our documentation and coordination support works the same way — you don't need a consultant physically next door to get properly represented with BIS.";

export const INDUSTRIES_INTRO =
  "Our BIS-ISI Mark Certification support covers manufacturers across the major BIS-notified product categories, including:";

export const INDUSTRIES_ITEMS: string[] = [
  "Construction materials — including steel and TMT bars, cement, and taps and sanitary fittings",
  "Electrical appliances and household products — including household electrical appliances, switches and MCBs, cables and wires (we regularly run isi mark certification process for cable manufacturers), and isi mark certification for led lighting manufacturers",
  "Automotive components — including isi mark certification for helmet manufacturers india and related safety-critical parts",
  "Metals and steel products — including stainless steel utensils and cookware",
  "Chemicals — where the applicable product falls under a notified Quality Control Order",
  "Toys — isi mark certification for toy manufacturers india, under the applicable Indian Standard",
  "Furniture — work chairs, general-purpose chairs and stools, tables and desks, storage units, beds, and bunk beds, now mandatory under the 2025 Furniture QCO (see the Products Covered table below); this is a growing part of our client base",
  "Medical devices — where notified under BIS quality control requirements",
  "Food contact materials and household goods — including isi mark certification for packaged water plant operators, isi mark certification for pvc pipe manufacturers, and isi mark certification for pressure cooker manufacturers and isi mark certification for kitchen appliance brand teams",
];

export const INDUSTRIES_CLOSING =
  "Each industry has its own documentation nuances, applicable Indian Standards, and testing requirements — our team works within the specific standard that applies to your product rather than a one-size-fits-all checklist. We also help clarify isi mark certification for imported vs domestic product questions where a manufacturer sources some components from abroad but assembles or manufactures the finished product in India.";

export const MISTAKES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Applying under the wrong Indian Standard",
    text: "Confirm the exact IS code applicable to your product before filing — this single error can derail an otherwise strong application.",
  },
  {
    title: "Incomplete or inconsistent documentation",
    text: "Mismatched details across your business registration, factory documents, and application form are a frequent cause of delay.",
  },
  {
    title: "Underestimating factory audit preparation",
    text: "Treat the inspection as a real evaluation of your production and quality control setup, not a formality.",
  },
  {
    title: "Ignoring renewal timelines",
    text: "A lapsed certificate can interrupt your ability to legally manufacture and sell — track your expiry date well ahead of time.",
  },
  {
    title: "Skipping professional guidance for multi-product or multi-location applications",
    text: "These are more complex to sequence correctly, and mistakes are costlier to fix after the fact.",
  },
];

export const EXPERT_TIPS: string[] = [
  "Start your eligibility assessment and document preparation well before you plan to launch a notified product commercially — certification is not something to leave until the last moment.",
  "Keep your quality control and testing records current on an ongoing basis, not just when preparing for inspection or renewal.",
  "Confirm the applicable Indian Standard early — this determines your testing requirements, documentation, and process expectations.",
  "Work with BIS-recognized testing laboratories from the outset, to avoid rework from using an unrecognized lab.",
  "Track your certificate's validity and renewal window proactively — don't rely on BIS to remind you.",
  "If you manufacture across multiple locations or multiple products, plan your applications together rather than filing them in an uncoordinated, one-off manner.",
];

export const SCHEME_COMPARISON_NOTE =
  "For a detailed breakdown of any of these comparisons, see our dedicated comparison pages, linked below.";

export const SCHEME_COMPARISON_ROWS: TableRow[] = [
  {
    comparison: "BIS Scheme-I vs Scheme-II",
    whatToKnow:
      "Scheme-I is the standard route for domestic manufacturers of BIS-notified products. Other BIS schemes are structured for different manufacturing or testing arrangements. If you're unsure which scheme applies to your setup, our team can confirm this before you apply.",
  },
  {
    comparison: "BIS Scheme-I vs Scheme-X",
    whatToKnow:
      "As with Scheme-II, Scheme-X serves a different manufacturing or product context than the standard domestic manufacturer route covered on this page. We'll confirm the correct scheme for your specific product and setup.",
  },
  {
    comparison: "Domestic Manufacturer Licence vs FMCS (Foreign Manufacturer Licence)",
    whatToKnow:
      "Scheme-I (covered on this page) applies to manufacturers producing within India. FMCS is the separate BIS route for manufacturers based outside India who want to certify products for the Indian market.",
  },
  {
    comparison: "CM/L Licence vs Test Licence",
    whatToKnow:
      "A CM/L Licence is the standard, ongoing certification licence under Scheme-I. A Test Licence serves a different, more limited purpose. Our team can clarify which one is relevant to your situation.",
  },
];

export const PRODUCTS_INTRO =
  "This table lists products notified under BIS Quality Control Orders (QCOs) that fall under the ISI Mark (Scheme-I) certification route, cross-checked against IS-code sources and the specific Gazette Notifications listed in the reference table further below. Two corrections from the previous version of this table, found during that cross-check: the entry previously listed as \"Dry Cell Batteries (IS 15844)\" has been corrected to Multipurpose Dry Batteries (IS 8144) — IS 15844 does not apply to batteries; and Footwear has been expanded below, since a single IS number understated how the category is actually regulated. Please verify every entry against the applicable QCO/Gazette Notification on bis.gov.in or egazette.gov.in before publishing, as QCOs are amended frequently and this table reflects one research pass, not a live legal feed.";

export const FOOTWEAR_EXPANDED_HEADING = "Footwear: Expanded Coverage";

export const FOOTWEAR_EXPANDED =
  "Footwear certification isn't a single standard — it depends on the type of footwear. Safety and personal-protective footwear is covered under IS 15298 (multiple parts). General footwear made from leather and other materials is covered separately under the Footwear made from Leather and other Materials (Quality Control) Order, 2024, which brings in a wider set of standards depending on the specific product: leather safety boots and shoes, canvas shoes and boots with rubber soles, safety boots for miners, leather safety footwear with direct-moulded soles, sports footwear, tactical boots, anti-riot shoes, and service/general-purpose shoes. If you manufacture footwear, we confirm the exact IS standard and whichever QCO applies to your specific product line before your application is filed — please treat the standards listed here as a starting point for that conversation, not a final classification.";

export const QCO_INTRO =
  "The table below records the Quality Control Order and Gazette Notification we could independently verify for each category during this research pass, with a status flag where a reference could not be confirmed. Treat \"Not independently confirmed\" rows as needing your own verification (or your compliance team's) before this goes live — we did not want to publish a specific S.O. number or date without a source we could point to.";

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Do you provide BIS-ISI Mark Certification for all notified products?",
    a: "We work across most BIS-notified product categories under Scheme-I. Share your specific product with us and we'll confirm the applicable Indian Standard and whether we can support your certification.",
  },
  {
    q: "How do I start the ISI mark certification process with your team?",
    a: "We begin with a short eligibility and product review, then map out the documentation and process steps specific to your manufacturing setup.",
  },
  {
    q: "What is your consultant fee for ISI mark certification?",
    a: "Our fees depend on the scope of support required — documentation-only assistance versus full end-to-end management. We provide a specific quote after reviewing your product and current readiness.",
  },
  {
    q: "What is the total cost breakdown for ISI mark certification?",
    a: "Total cost depends on testing, documentation, consultancy scope, government fees, and the number of products or locations involved. We provide a full breakdown as part of your proposal.",
  },
  {
    q: "How long will my ISI mark certification take with your consultancy?",
    a: "Timeline depends on your product category, documentation readiness, and testing and inspection scheduling. We give you a realistic, case-specific estimate rather than a generic number.",
  },
  {
    q: "Can you expedite my ISI mark certification application?",
    a: "We can help ensure your application is complete and error-free, which reduces avoidable delays — but final processing timelines are ultimately determined by BIS.",
  },
  {
    q: "What documents should I keep ready before contacting you?",
    a: "Business registration proof, factory details, manufacturing process information, and any existing quality control or test records are a good starting point. We'll confirm the exact list once we know your product.",
  },
  {
    q: "Do you assist with BIS Care Manak portal registration?",
    a: "Yes, we manage your BIS Care / Manak Online portal application and track its status on your behalf.",
  },
  {
    q: "Do you help schedule and prepare for factory inspection?",
    a: "Yes — we help you understand what the inspection will cover and get your facility genuinely ready for it.",
  },
  {
    q: "Which testing laboratory will test my product samples?",
    a: "Testing is conducted at a BIS-recognized laboratory appropriate for your product and applicable Indian Standard. We coordinate the lab logistics for you.",
  },
  {
    q: "What if my product sample fails BIS testing?",
    a: "We review the test results with you, identify the likely cause, and help you address it before resubmission — this is a normal part of the process for many first-time applicants.",
  },
  {
    q: "What if my ISI mark application is rejected?",
    a: "We review the reason for rejection and help you prepare a stronger reapplication, addressing whatever gap caused the original decision.",
  },
  {
    q: "Do you provide support during BIS surveillance audits?",
    a: "Yes — post-certification compliance support, including surveillance audit preparation, is part of our service.",
  },
  {
    q: "What ongoing compliance support do you offer after certification?",
    a: "We help you maintain quality control documentation, prepare for surveillance audits, and track your renewal timeline.",
  },
  {
    q: "Will you remind me before my ISI mark certificate expires?",
    a: "Yes, tracking your renewal window is part of our annual compliance service.",
  },
  {
    q: "Do you handle the ISI mark renewal process end to end?",
    a: "Yes, from document updates to any required re-verification, we manage your renewal process.",
  },
  {
    q: "Is my ISI mark certificate valid across India?",
    a: "A validly granted CM/L Licence applies to your certified product nationally, subject to the terms specified on your certificate.",
  },
  {
    q: "Can you help transfer my BIS licence to a new factory?",
    a: "Yes, licence transfer to a new manufacturing location is something our team can assist with.",
  },
  {
    q: "Is ISI mark certification mandatory for my specific product?",
    a: "It depends on whether your specific product falls under a current BIS Quality Control Order. Share your product details and we'll confirm.",
  },
  {
    q: "Can brand owners without their own factory get ISI mark?",
    a: "This depends on your specific manufacturing arrangement. We review each case individually to confirm the applicable path.",
  },
  {
    q: "Do you assist private label and OEM brand owners?",
    a: "Yes — we work with private-label and OEM brand owners to clarify and manage their certification path.",
  },
  {
    q: "Is ISI mark certification required if I only export products?",
    a: "If you manufacture in India and sell exclusively outside the country, domestic BIS certification requirements generally don't apply to those export sales — but if you also sell domestically, certification applies to that portion of your business. We can help clarify your specific situation.",
  },
  {
    q: "Can startups and new manufacturing units apply through you?",
    a: "Yes — startups and new manufacturing units can apply as soon as they're operationally ready for inspection and testing.",
  },
  {
    q: "Do you offer any support tailored to MSMEs?",
    a: "Yes, our documentation and process support is scoped to fit smaller manufacturing setups as well as larger enterprises.",
  },
  {
    q: "What is the difference between your service and applying directly to BIS?",
    a: "Applying directly means managing documentation, portal submissions, lab coordination, and BIS correspondence yourself. We manage all of that on your behalf, reducing delays caused by avoidable errors.",
  },
  {
    q: "Do you provide a dedicated point of contact for my application?",
    a: "Yes, you'll have a dedicated case manager throughout your certification process, with regular status updates at each stage — from documentation through to final certification.",
  },
  {
    q: "What is your process for factory audit preparation?",
    a: "We walk through your production process, documentation, and quality control setup in advance, so there are no surprises during the actual BIS inspection.",
  },
  {
    q: "Is there a difference in process for Scheme-I versus other schemes?",
    a: "Yes — Scheme-I is specifically the domestic manufacturer route. Other schemes apply to different manufacturing or product contexts. We confirm the correct scheme for your situation before starting your application.",
  },
  {
    q: "Can you advise if I need ISI mark, ISO, or both?",
    a: "Yes — ISI Mark and ISO Certification serve different purposes (product conformity versus management system certification). We can help you understand which applies, or whether you need both.",
  },
  {
    q: "Do you also assist with related certifications like BEE or FSSAI?",
    a: "Related certification needs are assessed on a case-by-case basis — speak with our team about your specific product portfolio.",
  },
];

export const GET_STARTED_PARAGRAPH =
  "Getting BIS-ISI Mark Certification right the first time saves you time, avoids avoidable rejections, and gets your product to market faster. Whether you're a first-time applicant, an MSME preparing your first factory audit, or an enterprise managing certification across multiple product lines, Ornate Quality Service Pvt. Ltd. provides the documentation support, government liaison, and end-to-end guidance to get you there.";

export const RESEARCH_INTRO =
  "The QCO and Gazette Notification details in the tables above were gathered from a web research pass on official and secondary sources, not from the original Stage 1-3 keyword research (which did not include regulatory citations). Primary sources checked: bis.gov.in, dpiit.gov.in, and egazette.gov.in where reachable; where a primary source wasn't directly accessible, secondary compliance-consultancy summaries were used and are flagged accordingly above. Key sources referenced:";

export const RESEARCH_SOURCES: string[] = [
  "Steel and Steel Products (Quality Control) Order, 2024 — S.O. 574(E): worldtradescanner.com summary",
  "Cement (Quality Control) Order, 2003 — S.O. 191(E): dpiit.gov.in",
  "Household Electrical Appliances QCO — S.O. 4098(E): worldtradescanner.com",
  "Toys (Quality Control) Order — S.O. 853(E) and amendment S.O. 4277(E): standphillindia.in, worldtradescanner.com",
  "Footwear made from Leather and other Materials (Quality Control) Order, 2024 — S.O. 1421(E): taxguru.in",
  "Furniture (Quality Control) Order, 2025 — S.O. 801(E): standphillindia.in",
  "Multipurpose Dry Batteries IS 8144 (correcting the earlier IS 15844 entry): corpseed.com, law.resource.org",
  "Domestic Pressure Cooker QCO (IS 2347:2017, implementation date): tuv.com",
];

export const RESEARCH_CLOSING =
  "Secondary/compliance-consultancy sources are third-party summaries, not the Gazette text itself — please have your compliance team pull the actual Gazette of India notification for any reference you plan to publish or rely on.";
