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

export const LMPC_TOC: TocItem[] = [
  { id: "what-is", label: "What Is LMPC Registration?" },
  { id: "why-important", label: "Why Is LMPC Registration Important?" },
  { id: "who-needs", label: "Who Needs LMPC Registration?" },
  { id: "benefits", label: "Key Benefits of LMPC Registration" },
  { id: "eligibility", label: "Eligibility for LMPC Registration" },
  { id: "documents", label: "Documents Required for LMPC Registration" },
  { id: "process", label: "LMPC Registration Process: Step by Step" },
  { id: "label-declarations", label: "Mandatory Label Declarations Under LMPC" },
  { id: "timeline", label: "LMPC Registration Timeline" },
  { id: "cost", label: "LMPC Registration Cost & Government Fees" },
  { id: "validity", label: "LMPC Certificate Validity" },
  { id: "renewal", label: "LMPC Certificate Renewal & Amendment" },
  { id: "exemptions", label: "Exemptions Under the Packaged Commodities Rules" },
  { id: "industries", label: "Industry Categories Covered Under LMPC Registration" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "challenges", label: "Common Challenges in LMPC Registration" },
  { id: "how-we-help", label: "How Ornate Quality Service Pvt. Ltd. Helps With LMPC Registration" },
  { id: "why-choose", label: "Why Choose Ornate Quality Service Pvt. Ltd. for LMPC Registration?" },
  { id: "mistakes", label: "Common LMPC Registration Mistakes to Avoid" },
  { id: "expert-tips", label: "Expert Tips for LMPC Compliance" },
  { id: "comparison", label: "LMPC Registration vs Other Indian Approvals" },
  { id: "faq", label: "Frequently Asked Questions — LMPC Registration" },
  { id: "get-started", label: "Start Your LMPC Registration Today" },
];

export const BANNER_TITLE = "LMPC Registration in India";

export const BANNER_SUBTITLE =
  "Legal Metrology Packaged Commodities Certificate for Importers, Manufacturers and Packers";

export const BANNER_PARAGRAPHS: string[] = [
  "If your business imports, manufactures or packs pre-packaged goods for sale in India, LMPC registration is not optional — it is a legal prerequisite. The Legal Metrology Packaged Commodities Certificate, issued under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011, registers your name and address with the Director or Controller of Legal Metrology and confirms that your product labels meet the mandatory declaration requirements set by the Government of India.",
  "Ornate Quality Service Pvt. Ltd. provides end-to-end LMPC registration support — from document preparation and label review to application filing, departmental liaison and post-approval compliance — for importers, manufacturers, packers, brand owners, e-commerce sellers and FMCG companies across India.",
];

export const AT_A_GLANCE_HEADING = "At a Glance";

export const AT_A_GLANCE: string[] = [
  "Mandatory under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011",
  "Applies to importers, manufacturers, packers, repackers and brand owners",
  "Required before customs clearance, marketplace listing and retail distribution",
  "Issued by the Director of Legal Metrology (central) or Controller of Legal Metrology (state)",
  "Covers any pre-packaged commodity offered for sale in the Indian market",
  "Supported by documented documentation, filing and label compliance expertise",
];

export const WHAT_IS_PARAGRAPHS: string[] = [
  "LMPC stands for Legal Metrology Packaged Commodities. It refers to the mandatory registration that every manufacturer, packer and importer of pre-packaged commodities must obtain before selling or distributing goods in India.",
  "A pre-packaged commodity is any product that is packed in a predetermined quantity without the purchaser being present — think packaged food, cosmetics, electronics accessories, hardware, stationery or textiles sold in sealed, labelled retail packs. The Legal Metrology Act, 2009 governs weights, measures and packaging standards in India to protect consumers from inaccurate quantity declarations and misleading labels.",
  "The technical name for the registration is Importer Registration under Rule 27 (for importers) or Manufacturer/Packer Registration (for domestic producers). The resulting document — variously called the LMPC certificate, LMPC registration certificate, LMPC import license or Legal Metrology Packaged Commodities certificate — is issued by the Director of Legal Metrology at the central level or by the Controller of Legal Metrology at the state level, depending on the nature of your business and where your goods are sold.",
];

export const QUICK_DEFINITION_HEADING = "Quick Definition";

export const QUICK_DEFINITION =
  "LMPC (Legal Metrology Packaged Commodities) registration is the formal enrolment of a manufacturer, packer or importer of pre-packaged goods with the Legal Metrology Department under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011.";

export const WHAT_IS_CLOSING =
  "It is separate from your GST registration, IEC code, FSSAI licence and BIS certification — and required in addition to them, not instead of them.";

export const WHY_INTRO =
  "LMPC registration is not a procedural formality. It has direct, practical consequences for your ability to operate, import, sell and grow.";

export const WHY_ITEMS: { title: string; text: string }[] = [
  {
    title: "1. Customs Clearance",
    text: "If your business imports pre-packaged goods, an LMPC certificate for import is what customs officials look for when clearing your consignment. Even on a first shipment, the certificate is now routinely requested. Without it, your consignment can be held at the port, leading to demurrage charges and supply disruptions. The LMPC certificate for import gives customs the confirmation they need that your labels will comply with Indian mandatory declaration requirements.",
  },
  {
    title: "2. Marketplace and Retail Listing",
    text: "Major e-commerce platforms including Amazon India and Flipkart require sellers of packaged goods to provide their LMPC registration details. Non-compliance can result in listing removal, restricted access or account-level action. The same applies to offline retail — distributors and organised trade channels increasingly conduct compliance checks before onboarding brands.",
  },
  {
    title: "3. Consumer Protection and Brand Trust",
    text: "The Legal Metrology Act, 2009 exists to protect consumers from short measure, incorrect pricing and misleading declarations on packages. When your labels correctly declare the net quantity, MRP inclusive of all taxes, manufacturer or importer name and address, date of manufacture and consumer care details, you build genuine trust with buyers. A legally compliant package tells consumers that your brand is transparent and accountable.",
  },
  {
    title: "4. Legal Compliance and Penalty Avoidance",
    text: "Non-compliance with the Legal Metrology (Packaged Commodities) Rules, 2011 carries consequences. Legal Metrology officers can inspect your business, seize non-compliant stock and initiate proceedings under Section 36 of the Legal Metrology Act. The rules also allow for compounding of offences, but that route carries costs and reputational risk. Registering proactively eliminates this exposure entirely.",
  },
  {
    title: "5. Supporting Business Scalability",
    text: "An LMPC certificate can be amended to add new products, new premises or updated contact details. This flexibility makes it a scalable compliance tool that grows with your business rather than becoming a bottleneck every time you expand your product range or distribution network.",
  },
];

export const WHO_NEEDS_INTRO: string[] = [
  "LMPC registration applies broadly across the supply chain. If your business activity involves any pre-packaged commodity intended for sale or distribution in India, the requirement almost certainly applies to you.",
];

export const WHO_NEEDS_ROWS: TableRow[] = [
  {
    type: "Importers",
    why: "Every importer of pre-packaged goods must register before or at the earliest opportunity after commencing import operations. Customs now require this certificate as standard. Central registration (Director of Legal Metrology) applies.",
    route: "Central – Director of Legal Metrology, New Delhi",
  },
  {
    type: "Manufacturers",
    why: "Domestic producers packing goods into retail or wholesale packs must register at the state level with the Controller of Legal Metrology before commencing production.",
    route: "State – Controller of Legal Metrology (respective state)",
  },
  {
    type: "Packers and Repackers",
    why: "Businesses that pack bulk commodities into labelled retail units — even when they did not manufacture the product — are treated as packers and must register. The registration must cover every packing premises.",
    route: "State – Controller of Legal Metrology",
  },
  {
    type: "Brand Owners / Private Label",
    why: "If your brand name and address appear on the package as the responsible party, you are accountable for label compliance regardless of who manufactured or imported the product.",
    route: "Depends on whether goods are imported or manufactured domestically",
  },
  {
    type: "E-commerce Sellers",
    why: "Marketplace sellers handling pre-packaged goods must comply with LMPC labelling rules and are increasingly required to furnish registration details to the platform. This applies to both direct sellers and marketplace operators.",
    route: "As per underlying business activity",
  },
  {
    type: "FMCG Companies",
    why: "FMCG brands distributing packaged goods across multiple states require central or state-level registration depending on their distribution model. Multi-state sales typically route through the central authority.",
    route: "Central or State depending on distribution scope",
  },
  {
    type: "Distributors / Wholesale Entities",
    why: "Where the distributor is the declared importer or repacker on the label, registration is mandatory. Pure logistics or wholesale entities whose name does not appear on the label may not require their own registration, but this must be verified.",
    route: "Depends on label declaration",
  },
  {
    type: "D2C Brands Launching in India",
    why: "Direct-to-consumer brands, whether foreign or domestic, must ensure their Indian-destined packaged goods bear compliant labels and that the responsible party has valid LMPC registration.",
    route: "Central (for imports); State (for domestic packing)",
  },
];

export const WHO_NEEDS_NOTE =
  "The above is a general guide. The exact registration type — central or state, and the specific authority — depends on the applicant's business activity, the states where goods are sold, and the product categories involved. Requirements may vary depending on the latest official regulatory guidelines.";

export const BENEFITS_INTRO =
  "Obtaining LMPC registration delivers practical advantages at every stage of your commercial operation.";

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Customs clearance confidence:",
    text: "Your certificate is your authorisation to import. It removes the risk of consignments being held at ports for compliance queries.",
  },
  {
    title: "Marketplace access:",
    text: "Amazon India, Flipkart and other major platforms require valid LMPC registration for sellers of packaged goods. Registration unlocks these sales channels.",
  },
  {
    title: "Consumer trust:",
    text: "Legally compliant labelling — correct net quantity, accurate MRP, visible consumer care details — signals transparency and improves brand credibility with retail buyers.",
  },
  {
    title: "Penalty protection:",
    text: "Registration and compliant labelling protect your business from inspections, seizures and proceedings under the Legal Metrology Act, 2009.",
  },
  {
    title: "Business scalability:",
    text: "The certificate can be amended to add new product categories, new premises and updated business details without requiring a fresh application in most cases.",
  },
  {
    title: "Operational certainty:",
    text: "An LMPC registration certificate, combined with compliant label artwork, enables your operations team to plan imports and manufacturing with regulatory confidence.",
  },
  {
    title: "Cross-compliance foundation:",
    text: "LMPC registration often functions as a prerequisite signal for other compliance activities — distributors, institutional buyers and procurement teams look for it alongside BIS certification, FSSAI licence and IEC code.",
  },
];

export const ELIGIBILITY_INTRO =
  "Under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011, the following persons and entities are eligible — and in most cases obligated — to apply for LMPC registration:";

export const ELIGIBILITY_WHO: string[] = [
  "Individuals (sole proprietors)",
  "Partnership firms",
  "Limited Liability Partnerships (LLPs)",
  "Private Limited companies",
  "Public Limited companies",
  "Hindu Undivided Families (HUFs)",
  "Societies and trusts",
  "Foreign brands operating in India through an Indian legal entity",
];

export const ELIGIBILITY_PARAGRAPHS: string[] = [
  "The eligibility criterion is straightforward: if your entity manufactures, packs or imports any commodity for sale, distribution or delivery in pre-packaged form in India, you are eligible and required to register.",
  "Central vs State: Importers who import goods for sale across India register with the Director of Legal Metrology (central, New Delhi). Domestic manufacturers and packers register with the Controller of Legal Metrology in their respective state. If you sell packaged goods in more than one state, your situation may require central-level registration — this needs to be confirmed with the relevant authority.",
  "There is no minimum turnover, no minimum volume and no product-count threshold that triggers the requirement — it applies from the moment you import or manufacture the first pre-packaged commodity for retail distribution. The registration is not transferable; if your company undergoes a name change, merger or change of control, a fresh or amended application is required.",
];

export const DOCUMENTS_INTRO =
  "While exact requirements may vary between the central authority and different state controllers, the following documents are commonly required. Prepare these before initiating the application to avoid delays.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Application Form (prescribed format)",
    purpose: "Formal request for registration under Rule 27",
    notes: "Mandatory – obtain the current form from the relevant Legal Metrology authority",
  },
  {
    document: "Certificate of Incorporation / Business Registration",
    purpose: "Proves the legal existence of your entity",
    notes: "Mandatory – CoI for companies; Registration Certificate for LLPs/firms",
  },
  {
    document: "GST Registration Certificate",
    purpose: "Confirms the entity's tax identity and registered address",
    notes: "Mandatory",
  },
  {
    document: "PAN Card of the Company / Proprietor",
    purpose: "Tax identity of the applicant",
    notes: "Mandatory",
  },
  {
    document: "Import Export Code (IEC)",
    purpose: "Required specifically for importer applications",
    notes: "Mandatory for importers; may not apply to domestic-only manufacturers",
  },
  {
    document: "Address Proof of Registered Premises",
    purpose: "Confirms the packing/import premises covered by the application",
    notes:
      "Mandatory – rent agreement, electricity bill, or government-issued document acceptable (verify with authority)",
  },
  {
    document: "Packaging Material Specimens / Label Samples",
    purpose: "Allows the authority to verify that label declarations meet the prescribed requirements",
    notes: "Mandatory – provide one sample per product or product category listed in the application",
  },
  {
    document: "List of Products to be Imported / Packed",
    purpose: "Defines the scope of the registration",
    notes: "Mandatory – be specific; amendments are needed to add products later",
  },
  {
    document: "Photographs of Premises and Applicant",
    purpose: "Identity and premises verification",
    notes: "Typically required at state level; confirm with the specific Controller's office",
  },
  {
    document: "Digital Signature Certificate (DSC)",
    purpose: "Needed for online portal submission (where applicable)",
    notes: "Required for online applications; verify with the applicable portal",
  },
  {
    document: "Board Resolution (for companies)",
    purpose: "Authorises a director or officer to sign the application on behalf of the company",
    notes: "Required for Private Limited and Public Limited companies",
  },
];

export const DOCUMENTS_NOTE =
  "Requirements may vary depending on the latest official regulatory guidelines and the specific state authority. Always download the current checklist from the official Legal Metrology portal or the applicable state Controller's office before submitting your application. Our team checks the current requirements for each applicant's specific state and product category before filing.";

export const PROCESS_INTRO =
  "The LMPC registration process follows a structured sequence. Our team manages every step on your behalf so you can focus on your business.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Authority",
    color: "#0b57b5",
    title: "1. Identify the Correct Registration Authority",
    text: "Determine whether you need central registration (Director of Legal Metrology, for importers and multi-state sellers) or state registration (Controller of Legal Metrology, for domestic manufacturers and packers operating within a single state). This decision affects the application portal, the form format and the fee structure.",
  },
  {
    step: "02",
    label: "Documents",
    color: "#2563eb",
    title: "2. Prepare and Verify Your Documentation",
    text: "Compile all required documents (see Documents Required above). Our team performs a document verification check to confirm completeness and correctness before any submission. Incomplete applications are a leading cause of unnecessary delays.",
  },
  {
    step: "03",
    label: "Label review",
    color: "#0891b2",
    title: "3. Prepare and Review Label Artwork",
    text: "Before submitting the application, verify that your proposed product labels meet all mandatory declaration requirements under the Legal Metrology (Packaged Commodities) Rules, 2011. Our label vetting service identifies compliance gaps before you print, saving costly reprints or re-stickering of imported stock.",
  },
  {
    step: "04",
    label: "Submit",
    color: "#059669",
    title: "4. Submit the Application",
    text: "File the application online or offline, as required by the specific authority, along with the prescribed government fees and all supporting documents. Our team handles the submission and provides you with an acknowledgement reference.",
  },
  {
    step: "05",
    label: "Review",
    color: "#0d9488",
    title: "5. Departmental Review and Queries",
    text: "The Legal Metrology Department reviews the application and may raise queries on product descriptions, label samples or premises details. Our team monitors the status regularly and prepares query responses on your behalf, ensuring they meet the authority's requirements the first time.",
  },
  {
    step: "06",
    label: "Inspection",
    color: "#d97706",
    title: "6. Premises Inspection (if applicable)",
    text: "Some state authorities conduct a physical inspection of the packing or storage premises before granting registration. Our team prepares you for what inspectors typically check and ensures your premises and records are inspection-ready.",
  },
  {
    step: "07",
    label: "Certificate",
    color: "#ea580c",
    title: "7. Certificate Issuance",
    text: "Once the authority is satisfied, the LMPC registration certificate is issued in your entity's name. This document must be kept readily accessible for customs inspections, marketplace compliance checks and regulatory audits.",
  },
  {
    step: "08",
    label: "Compliance",
    color: "#7c3aed",
    title: "8. Post-Approval Compliance",
    text: "Registration is the beginning, not the end of your compliance obligation. Your labels must continue to conform to the Rules, and any changes to your business — new products, change of address, new premises — require timely amendments to the certificate.",
  },
];

export const PROCESS_CLOSING =
  "To apply for LMPC registration online, visit the Legal Metrology portal maintained by the Department of Consumer Affairs or the applicable state portal. Our team can guide you through the portal login, form filling and online payment process.";

export const LABELS_INTRO: string[] = [
  "The LMPC registration does not just register your business — it commits you to ensuring every pre-packaged commodity you sell carries specific mandatory declarations on its label. The Legal Metrology (Packaged Commodities) Rules, 2011 prescribe what must appear on the principal display panel and in what form.",
  "The following declarations are compulsory for most retail packages:",
];

export const LABEL_ROWS: TableRow[] = [
  {
    declaration: "Name and address of the manufacturer, packer or importer",
    where: "Principal display panel or label",
    rules: "The entity whose name appears is legally responsible for label accuracy",
  },
  {
    declaration: "Generic name of the commodity",
    where: "Principal display panel",
    rules: "Must describe what is inside the package, not just the brand name",
  },
  {
    declaration: "Net quantity (weight, volume or number as applicable)",
    where: "Principal display panel",
    rules: "Must be in metric (SI) units. Error tolerances apply; quantity must be accurate",
  },
  {
    declaration: "Maximum Retail Price (MRP) inclusive of all taxes",
    where: "Principal display panel",
    rules:
      "Declared in Indian Rupees. The words 'MRP' and 'Inclusive of all taxes' are required alongside the figure",
  },
  {
    declaration: "Unit sale price (where applicable)",
    where: "Principal display panel",
    rules: "Required for certain categories of goods; helps consumers compare value",
  },
  {
    declaration: "Month and year of manufacture, packing or import",
    where: "Label",
    rules: "The date format and placement must meet the prescribed requirements",
  },
  {
    declaration: "Best before / expiry date (where applicable)",
    where: "Label",
    rules: "Mandatory for perishable and semi-perishable goods",
  },
  {
    declaration: "Consumer care details",
    where: "Label",
    rules: "A name and contact number (phone / email) for consumer queries is required",
  },
  {
    declaration: "Country of origin (for imported goods)",
    where: "Label",
    rules: "Mandatory for all imported pre-packaged commodities",
  },
];

export const LABELS_CLOSING =
  "In addition to the above, the Rules specify minimum dimensions for numerals, letter height and the surface area of the principal display panel on which declarations appear. Stickers bearing the MRP and other declarations are permitted on imported goods in certain circumstances, but must conform to prescribed size and font requirements.";

export const ECOMMERCE_NOTE =
  "Online product listings must include the same mandatory declarations as physical packaging. If your product is sold on Amazon India or Flipkart, the platform may ask you to provide MRP, net quantity, country of origin and importer details in the listing fields — these must match your physical label exactly.";

export const LABELS_NOTE =
  "Label requirements may vary for specific product categories such as packaged food (where FSSAI rules also apply), pharmaceuticals and electronics. Requirements may vary depending on the latest official regulatory guidelines. Always verify the current requirements for your specific product category.";

export const TIMELINE_INTRO =
  "The processing time for an LMPC registration certificate varies significantly depending on the registering authority (central or state), the completeness of the application and the current workload of the Legal Metrology Department.";

export const TIMELINE_ITEMS: string[] = [
  "For importers registering centrally with the Director of Legal Metrology, anecdotal industry timelines range from a few working days for straightforward applications to several weeks when queries are raised or premises inspections are scheduled.",
  "State-level registrations for manufacturers and packers follow the processing timelines and procedures of the respective state Controller's office, which differ across states.",
  "Applications submitted with complete documents, a verified label sample and no errors tend to progress significantly faster than incomplete or queried applications.",
];

export const TIMELINE_NOTE =
  "Sources vary on the exact registration deadline for importers. It is commonly cited that importers must apply within 90 days of commencing import operations, with late applications potentially attracting additional scrutiny or a late fee. Verify the current deadline under the Rules and the applicable authority's guidelines before your first shipment arrives.";

export const TIMELINE_CLOSING: string[] = [
  "Our team monitors application status continuously and manages all query responses to keep your registration on track.",
  "Our LMPC registration service includes turnaround monitoring and status-check support. We notify you at every milestone — submission, query raised, query resolved, certificate issued — so you always know where your application stands.",
];

export const COST_INTRO =
  "The cost of obtaining LMPC registration has two distinct components: the government fee payable to the Legal Metrology authority, and the professional support fee if you engage a consultant to manage the process.";

export const COST_GOVT_HEADING = "Government Fee";

export const COST_GOVT: string[] = [
  "A government fee is payable at the time of application. The applicable amount depends on the registering authority — central or state — and the category of applicant. Fee schedules are set by the Government of India and respective state governments and are subject to revision. We verify the current applicable fee for your specific situation before initiating the application and guide you through the online payment process.",
  "We do not publish a specific fee figure here because fee schedules vary by state and applicant category, and figures in the public domain are not always current. Contact our team to confirm the fee applicable to your registration.",
];

export const COST_PROF_HEADING = "Professional Support Fee";

export const COST_PROF =
  "Our LMPC registration service fees depend on the complexity of your application — number of products, number of premises, registration type (central or state), and the amount of label review and documentation work involved. We provide a clear, itemised quotation before any engagement begins. There are no hidden charges.";

export const COST_ITEMS: string[] = [
  "Single-entity, single-state registrations are typically simpler and faster.",
  "Multi-product or multi-premises registrations require more preparation time.",
  "Importers registering for the first time with a large product range may require label review as an additional component.",
  "Our LMPC registration and labelling service combines the registration filing with a full label compliance audit, which can save significant costs compared to discovering label defects after goods have already been imported.",
];

export const COST_CLOSING =
  "To request a quotation for your specific situation, contact our team with your entity details, the number of products and premises involved, and whether you need label review as part of the engagement.";

export const VALIDITY_PARAGRAPHS: string[] = [
  "The validity period of an LMPC registration certificate depends on the issuing authority — central or state — and the applicant category. Industry references cite periods ranging from one year to five years for different categories, with some states issuing certificates that are valid for three years from the date of issue.",
  "We do not publish a specific validity period here because it varies by authority and category, and misstating this figure could cause businesses to miss renewal deadlines. Our team confirms the applicable validity period for your certificate at the time of registration so you know exactly when renewal needs to begin.",
];

export const VALIDITY_NOTE =
  "Note your certificate issue date and expiry date the moment you receive it. Set a calendar reminder at least 60 to 90 days before expiry to initiate renewal. An expired certificate creates an immediate compliance gap — your goods technically cannot be legally imported or sold under the lapsed certificate while renewal is pending.";

export const RENEWAL_HEADING = "Renewal";

export const RENEWAL_PARAGRAPHS: string[] = [
  "LMPC registration must be renewed before the certificate's expiry date. The renewal process generally mirrors the original application in terms of documentation and fee payment, though the authority may require updated premises proof, updated label samples if products have changed, and any other documentation that has changed since the original registration.",
  "Renewal applications should be filed well in advance of the expiry date. Operating after expiry — even while a renewal application is pending — carries legal risk. Our renewal reminder and compliance tracking service notifies you when your certificate approaches its renewal window so that the process begins with enough lead time.",
];

export const AMENDMENT_HEADING = "Amendment";

export const AMENDMENT_INTRO =
  "The LMPC rules permit amendments to an existing certificate to account for:";

export const AMENDMENT_ITEMS: string[] = [
  "Addition of new product categories",
  "Addition of new packing or import premises",
  "Change of registered business address or premises details",
  "Change of contact person or nominated officer",
  "Company name change or entity restructuring",
];

export const AMENDMENT_CLOSING =
  "An amendment application is filed with the same authority that issued the original certificate, along with supporting documentation and the applicable fee. Our LMPC amendment service in India covers the full amendment lifecycle — from assessing whether an amendment or fresh application is more appropriate, through to filing and follow-up.";

export const AMENDMENT_NOTE =
  "If your company undergoes a name change, a demerger, a change of CIN or a significant change of control, the original LMPC certificate may not automatically transfer to the new entity. Contact our team to assess whether an amendment or a fresh application is appropriate for your situation.";

export const EXEMPTIONS_INTRO: string[] = [
  "Not every packaged commodity automatically falls under the LMPC registration requirement. The Legal Metrology (Packaged Commodities) Rules, 2011 carve out specific exemptions. Common exemptions cited across regulatory guidance include:",
];

export const EXEMPTIONS_ITEMS: string[] = [
  "Packages containing a net quantity of 10 grams or 10 millilitres or less (verify the applicable rule text for your product category)",
  "Agricultural produce in packages exceeding 50 kilograms or 50 litres sold at the farm level (specific conditions apply)",
  "Food items packed on the premises where they are sold for immediate consumption — for example, goods packaged and sold at hotels, restaurants and street food vendors",
  "Packages intended purely for export and not offered for retail sale within India",
  "Institutional and industrial consumer packages not intended for retail sale (specific conditions and declaration requirements still apply)",
];

export const EXEMPTIONS_CLOSING =
  "However, exemptions are narrowly defined and should not be assumed. For example, even exempt categories may have specific declaration requirements under the Rules, and categories that appear exempt based on weight may still be subject to labelling obligations if they carry an MRP.";

export const EXEMPTIONS_NOTE =
  "Verify your specific product's exemption status against the current text of the Legal Metrology (Packaged Commodities) Rules, 2011 — Rules 26 and 32 are the primary references. Requirements may vary depending on the latest official regulatory guidelines. Our team confirms exemption applicability for your products before you build your compliance plan around an assumed exemption.";

export const INDUSTRIES_INTRO =
  "LMPC registration applies to virtually any business that handles pre-packaged commodities for retail sale in India. Unlike sector-specific approvals (BIS certification or FSSAI licence), LMPC operates across all industries. Below are the six primary industry categories we serve, each supported by a dedicated resource page.";

export const INDUSTRY_ROWS: TableRow[] = [
  {
    category: "Food & Beverages",
    products:
      "Packaged snacks, spices, tea and coffee, sauces, bottled beverages, breakfast cereals, condiments",
    page: "Coming Soon",
  },
  {
    category: "Cosmetics & Personal Care",
    products:
      "Skincare creams, shampoos, soaps, perfumes, colour cosmetics, grooming kits, hair care products",
    page: "Coming Soon",
  },
  {
    category: "Electronics & Appliances",
    products:
      "Mobile accessories, LED lighting, small kitchen appliances, audio devices, power banks, adapters",
    page: "Coming Soon",
  },
  {
    category: "Hardware & Tools",
    products:
      "Hand tools, fasteners, adhesives, plumbing fittings, power tool accessories, construction materials",
    page: "Coming Soon",
  },
  {
    category: "Stationery & Office Supplies",
    products: "Notebooks, pens and markers, art supplies, files and folders, adhesives, desk organisers",
    page: "Coming Soon",
  },
  {
    category: "Textiles & Apparel",
    products: "Readymade garments, home textiles, socks, innerwear, bags, footwear, fabric rolls",
    page: "Coming Soon",
  },
];

export const INDUSTRIES_CLOSING =
  "Whether you import packaged food products, manufacture cosmetics, or distribute electronics accessories, the packaged commodity labelling requirements under the Legal Metrology (Packaged Commodities) Rules, 2011 apply equally. Our team has experience across all six categories and maintains current knowledge of any product-specific labelling requirements that layer on top of the core LMPC rules.";

export const PENALTIES_INTRO =
  "Selling, distributing or importing pre-packaged commodities without valid LMPC registration, or with non-compliant labels, attracts enforcement action under the Legal Metrology Act, 2009.";

export const PENALTIES_ITEMS: string[] = [
  "Section 36 of the Legal Metrology Act provides for penalties for contravention of the provisions of the Act and the Rules made thereunder. Penalties can include fines and, in certain cases, imprisonment for repeat or aggravated offences.",
  "Legal Metrology officers are empowered to inspect business premises, seize stock, test net quantity and examine label declarations without prior notice.",
  "Customs authorities can hold or reject imported consignments where LMPC documentation is absent or where the proposed labels are visibly non-compliant.",
  "E-commerce platforms can delist products that fail mandatory compliance checks — a consequence with immediate commercial impact.",
  "Compounding of offences is available in some situations as an alternative to prosecution, but it carries a cost and creates a compliance history that can complicate future applications or market access.",
];

export const PENALTIES_NOTE =
  "We do not publish specific penalty amounts here because they vary by offence type and state, and figures cited across advisory sources do not always reflect current law. The most reliable reference is the current text of the Legal Metrology Act, 2009 and the applicable state enforcement guidelines.";

export const CHALLENGES_INTRO =
  "Most delays and rejections in LMPC registration come down to a small set of avoidable problems. Knowing them in advance significantly improves first-time success rates.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "1. Incomplete or Mismatched Documentation",
    text: "The most common cause of delays is submitting documents that are incomplete, inconsistent with each other, or that do not match the business details in the application form. For example, if your GST registration shows a different address from your premises proof, the authority will raise a query before proceeding.",
  },
  {
    title: "2. Non-Compliant Label Artwork",
    text: "Authorities review your label samples as part of the application. Labels that are missing a required declaration, use incorrect font sizes, omit the MRP statement in the prescribed format, or are in a language not accepted by the authority result in queries. Having your label artwork reviewed before submission avoids this entirely.",
  },
  {
    title: "3. Selecting the Wrong Registration Authority",
    text: "Applying to the state Controller when central registration is required (or vice versa) is an error that requires the entire application to be restarted with the correct authority — losing all the time and fees already spent.",
  },
  {
    title: "4. Missing the Application Deadline for Importers",
    text: "Importers who do not apply promptly after commencing import operations may face a late-application scrutiny or additional fees. Customs-related delays make this more damaging — if your shipment arrives at port and your certificate is not yet in hand, your cargo may be held.",
  },
  {
    title: "5. Adding Products After Registration Without Amendment",
    text: "Your LMPC registration covers only the products listed in the original application. Importing or packing a new product category without amending the certificate is a compliance breach even if your registration is otherwise valid.",
  },
];

export const HOW_WE_HELP_INTRO =
  "Our LMPC registration service is designed to take the entire process off your plate — from the first assessment call through to receiving your certificate — with transparent communication at every step.";

export const HOW_WE_HELP_ROWS: TableRow[] = [
  {
    what: "Authority and route determination",
    why: "We confirm whether you need central or state registration and which specific office to approach, eliminating the risk of filing with the wrong authority",
  },
  {
    what: "Document checklist and verification",
    why: "We prepare a tailored document checklist for your entity type and product categories and check every document before submission for completeness and consistency",
  },
  {
    what: "Label artwork review",
    why: "We review your proposed label against the mandatory declaration requirements of the Legal Metrology (Packaged Commodities) Rules, 2011 before printing or importing, identifying non-compliance gaps that could delay approval",
  },
  {
    what: "Application preparation and filing",
    why: "We complete the application form, compile the full submission package and file on your behalf — online or offline, as required by the relevant authority",
  },
  {
    what: "Status monitoring and query management",
    why: "We track your application status with the Legal Metrology Department, prepare and submit responses to any queries raised, and keep you informed at every milestone",
  },
  {
    what: "Premises inspection support",
    why: "Where a state authority requires a premises inspection, we prepare you for what inspectors check and ensure your records and premises are inspection-ready",
  },
  {
    what: "Certificate verification and handover",
    why: "Once the certificate is issued, we verify its details against your application, flag any discrepancies immediately, and provide you with a clear summary of its scope, validity period and renewal timeline",
  },
  {
    what: "Amendment support",
    why: "When you need to add products, change premises or update registration details, we manage the amendment application from start to finish",
  },
  {
    what: "Renewal tracking",
    why: "Our renewal reminder and compliance tracking system alerts you well before your certificate approaches expiry so renewal never slips through the cracks",
  },
];

export const WHY_CHOOSE_INTRO =
  "There is no shortage of compliance consultants in India. These are the factors that differentiate our approach.";

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Experienced Legal Metrology Consultant Team:",
    text: "Our consultants have hands-on experience with both central (Director of Legal Metrology) and state-level (Controller of Legal Metrology) registration processes across multiple states, and stay current with rule amendments and authority-specific requirements.",
  },
  {
    title: "Single Point of Contact:",
    text: "You work with one dedicated case manager who knows your application, your product categories and your entity details. There are no handoffs between teams and no need to re-explain your situation every time you reach out.",
  },
  {
    title: "Label Vetting as Standard Practice:",
    text: "Most consultants help you file the application; we also review your label artwork. This is where the real compliance risk sits, and addressing it before submission is far less expensive than correcting it after goods have arrived.",
  },
  {
    title: "Departmental Liaison Support:",
    text: "We have established working familiarity with the Legal Metrology application processes and handle all communication with the authority on your behalf, including query responses, inspection coordination and follow-up.",
  },
  {
    title: "Compliance Team with BIS and LMPC Expertise:",
    text: "For businesses that need both BIS certification and LMPC registration — a common combination for electronics and appliance importers — our team handles both processes, avoiding the coordination gaps that arise when different consultants work in isolation.",
  },
  {
    title: "Post-Approval Support:",
    text: "Our engagement does not end when the certificate is issued. We provide post-approval LMPC compliance support, including amendment guidance, renewal reminders and label compliance advice as your product range evolves.",
  },
  {
    title: "Pan India Legal Metrology Support:",
    text: "We serve businesses across Delhi, Noida, Gurgaon, Mumbai, Bengaluru, Chennai, Hyderabad, Ahmedabad, Kolkata, Pune and other major trade centres, as well as businesses operating from multiple states through our pan India team.",
  },
  {
    title: "Transparent Engagement:",
    text: "We provide clear, itemised quotations before any work begins. No hidden fees, no surprise charges, no pressure.",
  },
];

export const WHY_CHOOSE_NOTE =
  "LMPC consultants are not 'government approved' — the registration process is governed by the government, but the consultant assisting you is an independent professional. Be cautious of any advisory that claims to offer government-authorised or government-guaranteed certification approval.";

export const MISTAKES_ITEMS: string[] = [
  "Assuming your GST number or IEC code is sufficient for customs clearance of packaged goods — it is not. LMPC registration is a separate requirement.",
  "Filing for state registration when your distribution covers more than one state — multi-state sellers are typically required to register centrally.",
  "Using label artwork designed for another country's market without verifying Indian declaration requirements — country of origin, MRP in INR and consumer care details are often missing on labels designed for export markets.",
  "Listing only your top products in the application and leaving others off — every product category your certificate does not cover is a compliance gap.",
  "Treating the certificate as permanent — validity is finite, and operating on an expired certificate is a compliance breach even if the renewal application has been filed.",
  "Not checking whether label stickers on imported goods meet the size, font and placement requirements — a sticker that covers required information from the original label also creates a compliance issue.",
];

export const EXPERT_TIPS: string[] = [
  "Start your LMPC registration process before your first shipment is ordered, not after it arrives at port. This is especially important for first-time importers.",
  "Get your label artwork reviewed before printing or importing. Discovering a label defect after 10,000 units are in a warehouse is far more expensive than a label review before the print run.",
  "Maintain a copy of your LMPC certificate in both physical and digital form. Customs inspectors, marketplace compliance teams and institutional buyers may ask for it at short notice.",
  "Create a simple compliance calendar that tracks your certificate expiry date, any amendment deadlines and the renewal filing target date. Renewal should begin at least 60 days before expiry.",
  "If you plan to expand into a new product category, check whether it is already covered by your existing certificate or whether an amendment application is needed before you begin importing or packing.",
  "Maintain records of your LMPC application, correspondence with the Legal Metrology Department and all label versions associated with your registered products. These records are essential if you face an inspection.",
  "For FMCG companies and food importers, remember that LMPC is one of several overlapping compliance requirements. FSSAI, BIS and LMPC requirements can affect the same package — coordinate your label design to satisfy all applicable sets of rules simultaneously.",
];

export const COMPARISON_INTRO =
  "Importers and manufacturers often encounter overlapping compliance requirements and need to understand how LMPC relates to the other approvals that may apply to their goods.";

export const CENTRAL_STATE_HEADING = "Central vs State LMPC Registration";

export const CENTRAL_STATE_ROWS: TableRow[] = [
  {
    central: "Issued by the Director of Legal Metrology, New Delhi",
    state: "Issued by the Controller of Legal Metrology in the applicant's state",
  },
  {
    central: "Applicable to importers of pre-packaged goods",
    state: "Applicable to domestic manufacturers and packers",
  },
  {
    central: "Required when goods are imported for sale across India",
    state: "Registration required in the state where packing operations are based",
  },
  {
    central: "Single registration at the central level covers all import activities",
    state: "State registration scope covers the registered packing premises",
  },
  {
    central: "Application submitted to the Director's office (central portal)",
    state: "Application submitted to the applicable state Legal Metrology department",
  },
];

export const VS_BIS_HEADING = "LMPC Registration vs BIS Certification";

export const VS_BIS_INTRO =
  "These two are separate requirements, and both may apply to the same product.";

export const VS_BIS_ROWS: TableRow[] = [
  {
    basis: "What it covers",
    lmpc: "Labels and quantity declarations on all pre-packaged goods",
    bis: "Product safety and quality against specific Indian Standards (IS codes)",
  },
  {
    basis: "Governing Act",
    lmpc: "Legal Metrology Act, 2009",
    bis: "Bureau of Indian Standards Act, 2016",
  },
  {
    basis: "Who issues it",
    lmpc: "Director / Controller of Legal Metrology",
    bis: "Bureau of Indian Standards (BIS)",
  },
  {
    basis: "When required",
    lmpc: "Before any packaged commodity is sold or imported",
    bis: "Only for products notified under Quality Control Orders (QCOs)",
  },
  {
    basis: "What it confirms",
    lmpc: "That your label declarations are accurate and compliant",
    bis: "That your product meets the required Indian Standard",
  },
  {
    basis: "Can they coexist?",
    lmpc:
      "Yes — and they often must. Electronics importers, for example, may need both CRS registration (BIS) and LMPC registration for the same product",
    bis: "Yes — BIS certification does not replace LMPC compliance",
  },
];

export const VS_FSSAI_HEADING = "LMPC Registration vs FSSAI Licence";

export const VS_FSSAI =
  "For packaged food products, both FSSAI (Food Safety and Standards Authority of India) and LMPC requirements apply simultaneously. FSSAI governs food safety, labelling standards specific to food, and business licensing — while LMPC governs quantity declarations, MRP labelling and the registration of the manufacturer, packer or importer. A food importer typically needs both an FSSAI central licence and an LMPC registration certificate before distributing goods.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is LMPC registration?",
    a: "LMPC registration, or Legal Metrology Packaged Commodities registration, is the mandatory registration of every manufacturer, packer and importer of pre-packaged goods with the Director or Controller of Legal Metrology under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011. It confirms that the registered entity's name and address are recorded with the government and that the entity is accountable for the label compliance of its packaged goods.",
  },
  {
    q: "What is the full form of LMPC?",
    a: "LMPC stands for Legal Metrology Packaged Commodities.",
  },
  {
    q: "Is LMPC registration mandatory?",
    a: "Yes. Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011 makes it mandatory for every manufacturer, packer and importer of pre-packaged commodities to register with the Director or Controller of Legal Metrology before selling or distributing goods in India.",
  },
  {
    q: "Who issues the LMPC certificate in India?",
    a: "For importers: the Director of Legal Metrology (central, based in New Delhi). For domestic manufacturers and packers: the Controller of Legal Metrology in the applicable state.",
  },
  {
    q: "How do I apply for LMPC registration online?",
    a: "The application can be filed through the Legal Metrology portal maintained by the Department of Consumer Affairs or through the applicable state portal. The process involves creating a login, filling in the prescribed application form, uploading supporting documents and paying the government fee. Our team manages this process for you.",
  },
  {
    q: "What documents are needed for LMPC registration?",
    a: "Key documents typically include: prescribed application form, Certificate of Incorporation or business registration, GST certificate, PAN card, IEC code (for importers), address proof of premises, packaging specimen or label samples, and a board resolution (for companies). Exact requirements vary by authority and are verified before each submission.",
  },
  {
    q: "How long does LMPC registration take?",
    a: "Processing time varies by authority and application completeness. Complete applications with compliant label samples and consistent documentation progress significantly faster. Our team monitors application status and manages queries to minimise delays. Requirements may vary depending on the latest official regulatory guidelines.",
  },
  {
    q: "What is the 90-day rule for LMPC registration?",
    a: "It is commonly cited that importers must apply for LMPC registration within 90 days of commencing import operations. We recommend applying before the first shipment if possible, and verifying the current deadline under the applicable rules and authority guidelines.",
  },
  {
    q: "Can customs hold my shipment without an LMPC certificate?",
    a: "Yes. Customs officials are increasingly checking for LMPC certificates when clearing pre-packaged goods imports. A shipment arriving without a valid certificate may be held, leading to demurrage charges and supply delays.",
  },
  {
    q: "What is the validity period of an LMPC certificate?",
    a: "Validity depends on the issuing authority and applicant category. Our team confirms the specific validity period for your certificate at the time of registration. We recommend setting a renewal reminder well before expiry.",
  },
  {
    q: "How do I renew an LMPC certificate?",
    a: "A renewal application is filed with the same authority that issued the original certificate, with updated documents and the applicable renewal fee. We recommend starting the process at least 60 days before expiry. Our renewal tracking service monitors your certificate expiry and initiates the renewal process on time.",
  },
  {
    q: "Can I add products to my existing LMPC certificate?",
    a: "Yes, through an amendment application. Your certificate covers only the products listed in the original application; importing or packing additional product categories requires an amendment before those goods can be legally sold.",
  },
  {
    q: "Can I update my address in the LMPC certificate?",
    a: "Yes. A change of registered address, whether your business address or the premises address, requires an amendment application. Continuing to operate with an outdated address in the certificate creates a compliance risk.",
  },
  {
    q: "Is LMPC registration required for e-commerce sellers?",
    a: "Yes, if you sell pre-packaged goods on Amazon India, Flipkart or other platforms. Marketplace compliance teams check for LMPC registration. Non-compliant sellers risk listing removal or account action.",
  },
  {
    q: "Do I need LMPC registration if I sell only on one state?",
    a: "If your business is a domestic manufacturer or packer selling within one state, you typically need state-level registration with the Controller of Legal Metrology in that state. Importers generally register centrally regardless of where they sell.",
  },
  {
    q: "Is LMPC the same as BIS certification?",
    a: "No. LMPC registration governs label declarations and quantity accuracy for all pre-packaged goods. BIS certification confirms that specific products meet Indian Standards (IS codes) notified under Quality Control Orders. Both may apply to the same product — for example, electronic goods importers often need both.",
  },
  {
    q: "Do I need FSSAI and LMPC for packaged food?",
    a: "Yes, both typically apply. FSSAI governs food safety and food-specific labelling. LMPC governs quantity declarations, MRP labelling and registration of the manufacturer, packer or importer. Both requirements apply to packaged food importers simultaneously.",
  },
  {
    q: "What happens if I sell packaged goods without LMPC registration?",
    a: "Selling without LMPC registration exposes your business to inspection, stock seizure and proceedings under Section 36 of the Legal Metrology Act, 2009. Customs may also hold imported consignments if the certificate is absent.",
  },
  {
    q: "Can an LLP or proprietorship firm apply for LMPC registration?",
    a: "Yes. The registration is available to individuals, proprietorship firms, partnership firms, LLPs, private limited companies and other legal entities. The required documentation differs slightly by entity type.",
  },
  {
    q: "Is LMPC registration transferable?",
    a: "No. The registration is not transferable. A company name change, merger or change in entity structure requires a fresh or amended application.",
  },
  {
    q: "What is the principal display panel?",
    a: "The principal display panel (PDP) is the side or surface of the package most likely to be displayed to the consumer at the point of purchase. Mandatory declarations such as MRP, net quantity, generic name and the manufacturer's or importer's name and address must appear on the PDP.",
  },
  {
    q: "Are stickers allowed on imported packages to declare MRP?",
    a: "Stickers are commonly used to add Indian mandatory declarations (MRP, consumer care details, importer name and address) to imported packages. However, the sticker must meet size, font and placement requirements and must not obscure required declarations from the original label. Our team reviews sticker artwork as part of our label vetting service.",
  },
  {
    q: "What is an LMPC import license?",
    a: "LMPC import license is another common name for the LMPC registration certificate held by an importer. The technical term in the Rules is Importer Registration under Rule 27.",
  },
  {
    q: "How do I check my LMPC application status?",
    a: "Application status can typically be checked through the same portal used for submission — the Legal Metrology portal for central applications, or the applicable state portal for state-level applications. Our team tracks your application status on your behalf.",
  },
  {
    q: "Do I need separate LMPC registration for each state?",
    a: "This depends on your business activity. Importers generally register once at the central level. Domestic manufacturers with packing premises in multiple states may need separate state registrations for each set of premises. Our team determines the correct approach for your specific situation.",
  },
];

export const CTA_HEADING = "Start Your LMPC Registration Today";

export const CTA_PARAGRAPHS: string[] = [
  "LMPC registration is a legal requirement that protects your ability to import, manufacture, distribute and sell pre-packaged goods in India. Delaying it creates supply chain risk, customs exposure and marketplace compliance gaps.",
  "Ornate Quality Service Pvt. Ltd. provides complete LMPC registration support — documentation, filing, label review, departmental liaison and post-approval compliance — for businesses of all sizes across India. Whether you are a first-time importer or an established FMCG company expanding your product range, our experienced legal metrology consultant team is equipped to manage the process efficiently and transparently.",
];

export const CTA_READY_HEADING = "Ready to proceed? Contact Ornate Quality Service Pvt. Ltd. to:";

export const CTA_READY_ITEMS: string[] = [
  "Get a tailored quotation for your LMPC registration",
  "Confirm which authority and registration type applies to your business",
  "Get your label artwork reviewed before printing or importing",
  "Initiate the LMPC registration process immediately",
];
