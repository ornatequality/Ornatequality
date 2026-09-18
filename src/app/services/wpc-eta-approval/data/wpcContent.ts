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

export const WPC_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-wpc", label: "What Is WPC ETA Approval?" },
  { id: "why-important", label: "Why Is WPC ETA Approval Important?" },
  { id: "who-needs", label: "Who Needs WPC ETA Approval?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "key-features", label: "Key Features" },
  { id: "eligibility", label: "Eligibility for WPC ETA Approval" },
  { id: "documents", label: "Documents Required" },
  { id: "process", label: "Step-by-Step WPC ETA Approval Process" },
  { id: "timeline", label: "WPC ETA Approval Timeline" },
  { id: "cost", label: "WPC ETA Cost Factors" },
  { id: "validity", label: "Validity of WPC ETA Approval" },
  { id: "renewal", label: "Renewal of WPC ETA Approval" },
  { id: "challenges", label: "Common Challenges" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-choose", label: "Why Choose Ornate Quality Service Pvt Ltd" },
  { id: "industries", label: "Industries We Serve" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "WPC ETA Approval vs. Other Indian Compliance Approvals" },
  { id: "products-covered", label: "WPC-ETA Approval Coverage" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Your WPC ETA Approval Started" },
];

export const BANNER_TITLE =
  "WPC-ETA Approval Consultant in India — Equipment Type Approval for Wireless Products";

export const BANNER_SUBTITLE =
  "Get Your Wireless Product WPC-ETA Approved — Fast, Compliant, Hassle-Free";

export const BANNER_PARAGRAPHS = [
  "Selling or importing a wireless product in India? Every device that transmits or receives radio frequency signals — from a simple Bluetooth speaker to an industrial RFID reader — needs Equipment Type Approval (ETA) from the Wireless Planning & Coordination (WPC) Wing under the Department of Telecommunications (DoT) before it can legally enter the Indian market.",
  "Ornate Quality Service Pvt Ltd is a WPC ETA Approval Consultant helping manufacturers, importers, and brand owners across India get their wireless products approved correctly the first time — from documentation and RF test coordination to filing on the Saral Sanchar portal.",
];

export const WHAT_YOU_GET_HEADING = "What you get with our WPC ETA Approval services:";

export const WHAT_YOU_GET_ITEMS = [
  "End-to-end WPC ETA Approval Process support, from eligibility check to certificate",
  "Coordination with NABL-accredited labs for your RF test report",
  "Application filing and tracking on the Saral Sanchar government portal",
  "Support for both Indian manufacturers and overseas manufacturers (via Authorized Indian Representative)",
  "Transparent WPC ETA fees and charges — no hidden costs",
  "Dedicated support for startups, importers, and e-commerce sellers",
];

export const INTRO_PARAGRAPHS = [
  "If your product uses Wi-Fi, Bluetooth, RFID, GPS, or any other radio-frequency technology, Indian law requires it to carry a valid WPC ETA Approval before import or sale. This is not optional — customs authorities and market surveillance teams check for a valid Equipment Type Approval number, and products without one can be held at port, seized, or pulled from sale.",
  "Compliance becomes mandatory the moment a wireless product is imported into India or manufactured for the Indian market, regardless of the brand's country of origin. For most product categories, WPC ETA Approval now works on a self-declaration basis through the Saral Sanchar portal — meaning the process is faster than it used to be, but it still requires accurate technical documentation and a valid RF test report to go through cleanly.",
  "Working with an experienced WPC ETA Registration Consultant means you avoid the two most common causes of delay: incomplete documentation and non-compliant test reports. This page walks you through what WPC ETA Approval is, who needs it, what it costs, how long it takes, and how our team supports you at every stage.",
];

export const WHAT_IS_PARAGRAPHS = [
  "WPC ETA Approval (Wireless Planning & Coordination – Equipment Type Approval) is the regulatory clearance issued by the WPC Wing, DoT, Government of India, confirming that a specific wireless product model meets India's technical and radio-frequency compliance requirements.",
  "The purpose of Equipment Type Approval is straightforward: India's radio spectrum is a shared, regulated national resource, and every device that transmits or receives on it must be verified so it does not interfere with licensed networks, emergency services, or other approved equipment. ETA is device-model specific — each unique model requires its own approval, since RF characteristics (frequency band, power output, modulation) can differ even between similar-looking products from the same brand.",
  "For businesses, WPC ETA Approval is a market-access requirement. Without it, a wireless product legally cannot be imported, distributed, or sold in India, whatever its build quality or safety certifications from other countries. It sits alongside — but separately from — other Indian regulatory approvals such as BIS Registration, TEC Approval, and SACFA Clearance, each of which covers a different aspect of compliance.",
];

export const WHY_IMPORTANT_ITEMS: { title: string; text: string }[] = [
  {
    title: "Market access.",
    text: "Customs clearance for wireless products is directly tied to a valid ETA number. Import consignments without one are routinely held or rejected at Indian ports.",
  },
  {
    title: "Legal compliance.",
    text: "Selling a non-approved wireless device in India is a violation of the Indian Wireless Telegraphy Act and related DoT regulations, with consequences ranging from product seizure to penalties for the importer or seller of record.",
  },
  {
    title: "Consumer and buyer trust.",
    text: "For B2B buyers, distributors, and marketplaces (including major e-commerce platforms), a valid WPC ETA certificate is often a documented listing requirement — it signals that the product has been through India's radio-frequency compliance process.",
  },
  {
    title: "Business continuity.",
    text: "Because ETA approval is largely lifetime-valid (unless the device's frequency, power, or model specifications change), it is a one-time compliance investment per product model rather than a recurring cost — reducing long-term regulatory risk for manufacturers and importers who plan to keep the product in the Indian market.",
  },
  {
    title: "Operational advantage.",
    text: "A completed, filed, and properly documented ETA approval also gives distributors and resellers the paperwork they need to move quickly, without regulatory delays holding up stock movement or marketplace listings.",
  },
];

export const WHO_NEEDS_INTRO =
  "WPC ETA Approval for wireless devices applies broadly across industries. If your business falls into any of the categories below, you likely need it before your product reaches the Indian market:";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Manufacturers",
    text: "producing wireless-enabled electronics in India for domestic sale or export re-import",
  },
  {
    title: "Importers",
    text: "bringing in wireless products — from consumer electronics to industrial RF equipment — from overseas",
  },
  {
    title: "Exporters",
    text: "whose products route through India or require Indian compliance documentation for buyers",
  },
  {
    title: "Brand Owners",
    text: "launching wireless products under their own label, whether manufactured in-house or by a contract manufacturer",
  },
  {
    title: "MSMEs",
    text: "entering electronics manufacturing or import for the first time and needing guidance on the self-declaration process",
  },
  {
    title: "Startups",
    text: "building connected hardware (IoT, smart home, wearables) who need compliance sorted before their first production run",
  },
  {
    title: "Large Enterprises",
    text: "managing ETA approval across large, multi-SKU product portfolios",
  },
  {
    title: "E-commerce Sellers",
    text: "listing wireless products on Indian marketplaces, where a valid ETA number is frequently required for listing approval",
  },
];

export const WHO_NEEDS_CLOSING =
  "WPC ETA Approval for importers and WPC ETA for manufacturers follow the same underlying process, but differ in who signs the application and, for overseas manufacturers, whether an Authorized Indian Representative is required (covered under Eligibility below).";

export const BENEFITS_ROWS: TableRow[] = [
  {
    benefit: "Compliance",
    means:
      "Your product is cleared against current DoT/WPC Wing radio-frequency requirements, reducing legal and customs risk.",
  },
  {
    benefit: "Business Growth",
    means:
      "A compliant product can be imported, distributed, and listed without regulatory roadblocks slowing down launch timelines.",
  },
  {
    benefit: "Trust",
    means: "A valid ETA certificate is documentation your buyers, distributors, and marketplaces can verify.",
  },
  {
    benefit: "Quality",
    means:
      "The RF test report process, coordinated through NABL-accredited labs, confirms your device performs within its declared technical specifications.",
  },
  {
    benefit: "Market Access",
    means: "Customs clearance and pan-India distribution become straightforward once ETA is in place.",
  },
  {
    benefit: "Risk Reduction",
    means:
      "Avoids the cost and disruption of held shipments, compliance notices, or having to withdraw a non-compliant product from sale.",
  },
];

export const FEATURES_ITEMS = [
  "WPC ETA Approval Consultant support across the full approval journey — not just paperwork filing",
  "Documentation & Coordination Support for WPC ETA Approval, including checklist preparation and gap review before submission",
  "RF test report coordination with NABL-accredited testing laboratories",
  "Saral Sanchar portal filing and application status tracking, so you always know where your application stands",
  "Authorized Indian Representative (AIR) support for overseas manufacturers without an Indian entity",
  "WPC ETA Compliance Consultant guidance for businesses managing renewals, model changes, or multi-product portfolios",
  "Transparent, itemized WPC ETA cost and charges breakdown before you commit",
];

export const ELIGIBILITY_ITEMS: { title: string; text: string }[] = [
  {
    title: "Who qualifies:",
    text: "Any manufacturer, importer, or brand owner placing a wireless (radio-frequency emitting or receiving) product in the Indian market is required to obtain WPC ETA Approval for that device model, whether the product is manufactured domestically or imported.",
  },
  {
    title: "Self-declaration eligibility:",
    text: "Most standard, license-exempt category wireless products (operating in specified de-licensed frequency bands) are eligible for the faster self-declaration route on the Saral Sanchar portal, provided the applicant submits accurate technical documentation and a compliant RF test report.",
  },
  {
    title: "Overseas manufacturers:",
    text: "A foreign manufacturer without a registered Indian business entity must apply through an Authorized Indian Representative (AIR) — typically a consultant, distributor, or Indian subsidiary authorized to file and take compliance responsibility on the manufacturer's behalf.",
  },
  {
    title: "Who does not qualify for self-declaration:",
    text: "Devices operating in restricted, licensed, or non-de-licensed frequency bands may fall outside the standard self-declaration route and require additional clearance (such as SACFA Clearance) — these should be reviewed case by case.",
  },
  {
    title: "Exemptions:",
    text: "Certain limited situations — such as small-quantity sample imports for testing, R&D, exhibition, or personal non-commercial use — may be exempt from full ETA requirements under WPC Wing exemption provisions. Exemption eligibility is specific and should always be confirmed for your exact use case before assuming it applies; do not treat exemption as a default.",
  },
];

export const ELIGIBILITY_NOTE =
  "Important note: Eligibility categories and self-declaration frequency bands are periodically updated by the WPC Wing. Always confirm your product's specific eligibility against the latest official list before filing.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "RF Test Report",
    purpose: "Confirms the device meets declared frequency, power, and technical parameters",
    mandatory: "Mandatory",
    notes: "Must be from a NABL-accredited (or otherwise recognized) laboratory",
  },
  {
    document: "Technical Literature / Datasheet",
    purpose: "Provides the device's technical specifications for review",
    mandatory: "Mandatory",
    notes: "Should match the exact model under application",
  },
  {
    document: "User Manual",
    purpose: "Demonstrates intended use and operating instructions",
    mandatory: "Mandatory",
    notes: "Applies to the specific model variant",
  },
  {
    document: "Product Photographs",
    purpose: "Visual identification of the device and labeling",
    mandatory: "Mandatory",
    notes: "Should clearly show branding/model number",
  },
  {
    document: "Block Diagram",
    purpose: "Shows the internal RF circuit/module architecture",
    mandatory: "Mandatory",
    notes: "Required for technical evaluation",
  },
  {
    document: "Application Form (Saral Sanchar)",
    purpose: "Formal request for Equipment Type Approval",
    mandatory: "Mandatory",
    notes: "Filed online through the Saral Sanchar portal",
  },
  {
    document: "Self-Declaration Form",
    purpose: "Declares compliance for eligible self-declaration category products",
    mandatory: "Mandatory (where applicable)",
    notes: "Only for products in the self-declaration category",
  },
  {
    document: "Authorization Letter / AIR Appointment",
    purpose: "Authorizes an Indian representative to file on behalf of an overseas manufacturer",
    mandatory: "Mandatory for foreign manufacturers",
    notes: "Not required for Indian-registered applicants",
  },
  {
    document: "Business Proof (GST/IEC, as applicable)",
    purpose: "Establishes the applicant's legal business identity in India",
    mandatory: "Mandatory",
    notes: "Standard business registration/import documentation",
  },
  {
    document: "Payment Receipt (BharatKosh)",
    purpose: "Confirms government fee payment",
    mandatory: "Mandatory",
    notes: "Generated after fee payment on the government payment portal",
  },
];

export const DOCUMENTS_CLOSING =
  "We help you prepare, review, and organize this checklist before submission — one of the most common causes of delay is an application filed with incomplete or mismatched documentation.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Eligibility Check",
    color: "#0b57b5",
    title: "1. Eligibility Check",
    text: "We review your device's technical specifications to confirm whether it qualifies for the self-declaration route or requires standard WPC Wing review.",
  },
  {
    step: "02",
    label: "Documentation",
    color: "#2563eb",
    title: "2. Documentation Preparation",
    text: "Technical literature, user manual, block diagram, and photographs are compiled into the required submission format.",
  },
  {
    step: "03",
    label: "RF Test Coordination",
    color: "#0891b2",
    title: "3. RF Test Coordination",
    text: "Your device sample is sent to a NABL-accredited lab for RF testing; we coordinate this end-to-end.",
  },
  {
    step: "04",
    label: "Application Filing",
    color: "#059669",
    title: "4. Application Filing",
    text: "The complete application is filed on the Saral Sanchar portal, along with the self-declaration form (where applicable).",
  },
  {
    step: "05",
    label: "Fee Payment",
    color: "#d97706",
    title: "5. Government Fee Payment",
    text: "The applicable government fee is paid through the BharatKosh payment portal, and the receipt is attached to the application.",
  },
  {
    step: "06",
    label: "Review",
    color: "#dc2626",
    title: "6. Review",
    text: "For self-declaration category devices, this stage is largely automated; for others, the WPC Wing reviews the submitted technical file.",
  },
  {
    step: "07",
    label: "Testing Verification",
    color: "#7c3aed",
    title: "7. Testing Verification",
    text: "The WPC Wing may cross-check the submitted RF test report against declared parameters.",
  },
  {
    step: "08",
    label: "ETA Certificate",
    color: "#0f766e",
    title: "8. Approval & ETA Certificate Issuance",
    text: "Once cleared, your Equipment Type Approval number and certificate are issued and downloadable from the portal.",
  },
  {
    step: "09",
    label: "Post-Approval",
    color: "#c2410c",
    title: "9. Post-Approval",
    text: "We help you archive your certificate, RF test report, and application record for future customs, marketplace, or audit reference.",
  },
];

export const TIMELINE_PARAGRAPHS = [
  "Processing time depends on the device category, documentation accuracy, and current WPC Wing/Saral Sanchar processing volumes. Self-declaration category applications, filed with complete and accurate documentation, are generally processed faster than devices requiring full WPC Wing technical review. Applications with missing documents, mismatched test reports, or technical queries will take longer while those issues are resolved.",
  "For the current expected timeline for your specific device category, please confirm directly with the Saral Sanchar portal or your WPC ETA Approval consultant at the time of filing — we do not quote a fixed number of days on this page, since official timelines are subject to change.",
];

export const COST_INTRO =
  "We do not publish a flat price here because WPC ETA cost depends on several factors specific to your product and application. What affects your total WPC ETA approval cost:";

export const COST_FACTORS = [
  "Government application fee — currently around ₹10,000 per application under the WPC Wing's published fee schedule, payable via BharatKosh (subject to periodic revision — always confirm the current fee before payment)",
  "RF testing charges — vary by lab, device complexity, and number of frequency bands tested",
  "Documentation preparation — technical writing, block diagrams, and compliance formatting, if not already available in the required format",
  "Consultancy fees — professional charges for end-to-end filing, coordination, and application management",
  "Number of models — each distinct device model requires its own application and, typically, its own test report",
  "Renewal-related costs — only applicable if a device's frequency, power, or technical parameters change after approval, requiring reapplication",
];

export const COST_CLOSING =
  "We provide a transparent, itemized quotation before starting any engagement — no hidden charges added later.";

export const VALIDITY_PARAGRAPH =
  "A WPC ETA Approval certificate is generally valid for the lifetime of the approved device model, as long as its frequency, power output, and core technical specifications remain unchanged. There is no periodic renewal requirement for an unmodified, already-approved model.";

export const RENEWAL_INTRO = "Renewal is not a routine requirement — it becomes necessary only when:";

export const RENEWAL_ITEMS = [
  "The device's RF frequency band or power output changes",
  "The product undergoes a hardware revision affecting its wireless module",
  "A new model variant is introduced that differs technically from the originally approved model",
];

export const RENEWAL_CLOSING =
  "In these cases, the changed specifications require a fresh Equipment Type Approval application rather than a simple renewal of the existing certificate. Important precaution: continuing to sell a modified device under an old, no-longer-matching ETA number is a compliance risk — always re-verify approval status whenever a product's RF specifications change.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Documentation issues",
    text: "incomplete technical literature, mismatched block diagrams, or photographs that don't match the exact model under review",
  },
  {
    title: "Compliance issues",
    text: "applying under the wrong eligibility category (self-declaration vs. standard review)",
  },
  {
    title: "Testing issues",
    text: "RF test reports from non-accredited labs, or reports that don't cover all frequency bands the device actually uses",
  },
  {
    title: "Approval delays",
    text: "caused by incomplete BharatKosh payment records or portal-level application errors",
  },
  {
    title: "Technical mistakes",
    text: "filing generic specifications instead of the actual tested model's exact parameters",
  },
];

export const CHALLENGES_CLOSING =
  "Most of these issues are avoidable with a proper pre-submission review — which is where a dedicated WPC ETA Approval Consultant adds the most value.";

export const HOW_WE_HELP_INTRO =
  "Our WPC ETA Approval Consultant services cover the entire journey, not just form-filling:";

export const HOW_WE_HELP_ITEMS: { title: string; text: string }[] = [
  {
    title: "Documentation",
    text: "preparing and reviewing your full technical file before submission",
  },
  {
    title: "Application Assistance",
    text: "filing correctly on the Saral Sanchar portal, including the self-declaration form where applicable",
  },
  {
    title: "Testing Coordination",
    text: "connecting you with NABL-accredited labs and managing sample logistics",
  },
  {
    title: "Compliance Guidance",
    text: "advising on eligibility, exemption applicability, and AIR requirements for overseas manufacturers",
  },
  {
    title: "Expert Consultation",
    text: "one-on-one guidance for complex or multi-model portfolios",
  },
  {
    title: "End-to-End Support",
    text: "from your first query to certificate download and post-approval documentation archiving",
  },
];

export const HOW_WE_HELP_CLOSING =
  "We do not promise guaranteed approval or a fixed approval date — no consultant legitimately can, since final clearance rests with the WPC Wing. What we do guarantee is a complete, technically accurate, correctly filed application, which is the single biggest factor within your control.";

export const WHY_CHOOSE_ITEMS = [
  "Experience across certification and regulatory compliance work, including WPC ETA, BIS, BEE, and EPR Registration",
  "Expertise in navigating both self-declaration and standard WPC Wing review pathways",
  "Transparency — itemized WPC ETA fees and charges, explained upfront, with no last-minute additions",
  "Dedicated support for manufacturers, importers, startups, and e-commerce sellers alike",
  "Industry knowledge across multiple wireless product categories — from consumer electronics to industrial RF equipment",
  "Fast, responsive communication at every stage of your application",
  "Professional assistance — end-to-end documentation, testing coordination, and filing support under one roof",
];

export const INDUSTRIES_PARAGRAPH =
  "WPC ETA Approval applies across a wide range of industries producing or importing wireless-enabled products, including consumer electronics, smart home and IoT hardware, networking and telecom equipment, security and surveillance systems, wearables and audio devices, industrial and commercial RF equipment, and logistics/tracking hardware. See the full product coverage table below for specific device categories.";

export const MISTAKES_ITEMS = [
  "Assuming CE or FCC certification is sufficient for India — these are foreign approvals and do not substitute for WPC ETA Approval, though existing test data may sometimes support (not replace) the Indian RF test process",
  "Submitting generic specifications instead of the exact tested model's declared parameters",
  "Filing under the wrong eligibility category without confirming whether self-declaration applies to your specific frequency band",
  "Skipping the Authorized Indian Representative requirement for overseas manufacturers without an Indian entity",
  "Treating ETA as a one-time task and forgetting to reapply when a device's RF specifications change",
  "Using a non-NABL-accredited lab for RF testing, resulting in a rejected or queried application",
];

export const EXPERT_TIPS = [
  "Confirm your device's exact frequency band and power output before assuming it qualifies for self-declaration",
  "Keep your RF test report, technical literature, and application form consistent — mismatches are a common cause of delay",
  "If you sell multiple similar-looking models, verify each one separately; ETA approval does not automatically extend across variants",
  "For overseas brands, appoint your Authorized Indian Representative early — this affects who can legally file and hold compliance responsibility",
  "Retain your ETA certificate and RF test report indefinitely; customs and marketplace compliance checks can happen well after initial approval",
];

export const COMPARISON_ROWS: TableRow[] = [
  {
    approval: "BIS CRS Registration",
    regulator: "Bureau of Indian Standards (BIS)",
    covers: "Product safety and quality compliance for electronics under the Compulsory Registration Scheme",
    differs:
      "Covers general electronic safety/quality, not radio-frequency spectrum compliance — a wireless product may need both",
  },
  {
    approval: "TEC Approval",
    regulator: "Telecommunication Engineering Centre (TEC), DoT",
    covers: "Network interoperability and telecom-equipment technical standards",
    differs: "Focused on telecom network compatibility, not spectrum/frequency emission compliance",
  },
  {
    approval: "SACFA Clearance",
    regulator: "Standing Advisory Committee on Frequency Allocation",
    covers: "Frequency allocation clearance for equipment operating on licensed/restricted bands",
    differs:
      "Required for select equipment outside the self-declaration/de-licensed category that WPC ETA typically covers",
  },
  {
    approval: "CE Certification",
    regulator: "European Union",
    covers: "Conformity with EU health, safety, and environmental standards",
    differs: "A foreign (EU-market) certification — not recognized as a substitute for WPC ETA in India",
  },
  {
    approval: "FCC Certification",
    regulator: "Federal Communications Commission (USA)",
    covers: "US radio-frequency and interference compliance",
    differs: "A foreign (US-market) certification — separate from and not a substitute for WPC ETA",
  },
  {
    approval: "BIS ISI Mark",
    regulator: "Bureau of Indian Standards (BIS)",
    covers: "Product quality/safety certification against a specific Indian Standard (IS Number)",
    differs: "An IS-Number-based quality mark, unrelated to radio-frequency/spectrum compliance",
  },
  {
    approval: "Wireless Operating License",
    regulator: "WPC Wing, DoT",
    covers: "Authorization to operate wireless equipment on regulated frequencies",
    differs:
      "ETA approves the device/model; an Operating License, where applicable, authorizes its use on specific frequencies",
  },
  {
    approval: "NABL Test Report vs. ILAC Test Report",
    regulator: "NABL (India) / ILAC (international)",
    covers:
      "NABL is India's national lab accreditation body; ILAC is the international mutual-recognition framework NABL is a signatory to",
    differs:
      "Acceptance of overseas ILAC MRA-recognized lab reports depends on current WPC Wing policy — always confirm before submitting an overseas test report",
  },
];

export const COMPARISON_NOTE =
  "Note: this table gives a general orientation only. Some products may require more than one of the above approvals depending on their exact specifications — confirm your product's full compliance requirement with our team.";

export const PRODUCTS_INTRO =
  "The table below covers the wireless product categories WPC-ETA Approval applies to. Every category listed requires Equipment Type Approval before import or sale in India (limited exemptions may apply for sample, R&D, or personal-use quantities — see Eligibility above). Dedicated pages for each product category are being built out; until then, this table serves as the reference list";

function productRow(name: string, audience: string): TableRow {
  return {
    product: name,
    basis: "WPC-ETA (DoT / WPC Wing)",
    mandatory: "Yes",
    audience,
    page: "Coming Soon",
  };
}

export const PRODUCTS_ROWS: TableRow[] = [
  productRow("Wi-Fi router", "Importer / Manufacturer / Brand Owner"),
  productRow("Wireless router", "Importer / Manufacturer / Brand Owner"),
  productRow("Wireless repeater", "Importer / Manufacturer / Brand Owner"),
  productRow("Wi-Fi extender", "Importer / Manufacturer / Brand Owner"),
  productRow("Mesh Wi-Fi system", "Importer / Manufacturer / Brand Owner"),
  productRow("Access point", "Manufacturer / Importer / System Integrator"),
  productRow("Wireless gateway", "Manufacturer / Importer / System Integrator"),
  productRow("USB Wi-Fi adapter", "Importer / Manufacturer / Brand Owner"),
  productRow("Bluetooth speaker", "Importer / Brand Owner"),
  productRow("Bluetooth earbuds", "Importer / Brand Owner"),
  productRow("Wireless earphones", "Importer / Brand Owner"),
  productRow("Smartwatch", "Importer / Manufacturer / Brand Owner"),
  productRow("Fitness band", "Importer / Brand Owner"),
  productRow("Wireless microphone", "Importer / Manufacturer"),
  productRow("Smart speaker", "Importer / Brand Owner"),
  productRow("IoT device", "Manufacturer / Importer / Startup"),
  productRow("Smart home device", "Importer / Brand Owner"),
  productRow("Smart plug", "Importer / Brand Owner"),
  productRow("Smart bulb", "Importer / Brand Owner"),
  productRow("Zigbee device", "Manufacturer / Importer"),
  productRow("Wireless sensor", "Manufacturer / Importer"),
  productRow("LoRa device", "Manufacturer / Importer"),
  productRow("Wireless camera", "Importer / Brand Owner"),
  productRow("IP camera", "Importer / Manufacturer"),
  productRow("Wireless CCTV camera", "Importer / Brand Owner"),
  productRow("Wireless doorbell", "Importer / Brand Owner"),
  productRow("Wireless alarm system", "Importer / Manufacturer"),
  productRow("Smart lock", "Importer / Brand Owner"),
  productRow("GPS tracker", "Manufacturer / Importer"),
  productRow("RFID reader", "Manufacturer / Importer / System Integrator"),
  productRow("RFID tag", "Manufacturer / Importer"),
  productRow("NFC device", "Manufacturer / Importer"),
  productRow("GPS device", "Manufacturer / Importer"),
  productRow("Wireless POS terminal", "Manufacturer / Importer / System Integrator"),
  productRow("Wireless printer", "Importer / Manufacturer"),
  productRow("Barcode scanner", "Manufacturer / Importer / System Integrator"),
  productRow("RF module", "Manufacturer / System Integrator"),
  productRow("Walkie talkie", "Manufacturer / Importer"),
  productRow("Two-way radio", "Manufacturer / Importer"),
  productRow("Baby monitor", "Importer / Brand Owner"),
  productRow("Mobile handset", "Manufacturer / Importer / Brand Owner"),
  productRow("Tablet", "Manufacturer / Importer / Brand Owner"),
  productRow("Wireless keyboard", "Importer / Manufacturer"),
  productRow("Drone", "Manufacturer / Importer"),
  productRow("Remote control toy", "Importer / Brand Owner"),
  productRow("Car remote", "Manufacturer / Importer"),
  productRow("Garage door remote", "Manufacturer / Importer"),
];

export const PRODUCTS_NOTE =
  'Note: "Mandatory" reflects the general requirement for commercial import/sale of the wireless-enabled version of each product; case-by-case exemptions (sample quantities, R&D, personal use) may apply — see Eligibility above.';

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is the process to apply for WPC ETA approval?",
    a: "The process involves an eligibility check, document and RF test report preparation, filing on the Saral Sanchar portal, government fee payment via BharatKosh, WPC Wing review (or automated processing for self-declaration category devices), and certificate issuance.",
  },
  {
    q: "How do I download my WPC ETA certificate?",
    a: "Once approved, your ETA certificate is available for download directly from your application dashboard on the Saral Sanchar portal.",
  },
  {
    q: "What is the government fee for a WPC ETA certificate?",
    a: "The current government application fee is around ₹10,000 per application, payable through the BharatKosh payment portal. This is separate from lab testing and consultancy charges, and is subject to change — always confirm the live fee before payment.",
  },
  {
    q: "Can I apply for WPC ETA online?",
    a: "Yes. WPC ETA Approval applications are filed online through the Saral Sanchar portal.",
  },
  {
    q: "Can I track my ETA certificate number online?",
    a: "Yes, application status can be tracked through your Saral Sanchar portal account once your application is submitted.",
  },
  {
    q: "What is the cost of hiring a WPC ETA consultant?",
    a: "Consultant charges vary depending on the number of models, complexity of documentation, and scope of support required. We provide a transparent quotation upfront rather than a flat published rate.",
  },
  {
    q: "Can a foreign company apply for WPC ETA directly?",
    a: "A foreign manufacturer without a registered Indian entity generally applies through an Authorized Indian Representative (AIR), who files and holds compliance responsibility on their behalf.",
  },
  {
    q: "How do I choose a WPC ETA consultant?",
    a: "Look for experience with your specific product category, transparency on fees, and a clear process for RF test coordination and documentation review — not just form-filing.",
  },
  {
    q: "What is the BharatKosh payment portal?",
    a: "BharatKosh is the Government of India's online payment platform used to pay the WPC ETA government application fee.",
  },
  {
    q: "Can a consultant file WPC ETA on my behalf?",
    a: "Yes — an authorized consultant or Authorized Indian Representative can prepare and file your application on your behalf.",
  },
  {
    q: "What are the WPC ETA certificate download steps?",
    a: "Log in to your Saral Sanchar portal account, locate your approved application, and download the certificate from the application status page.",
  },
  {
    q: "What is the breakdown of WPC ETA consultant charges?",
    a: "Charges typically cover documentation preparation, RF test coordination, application filing, and follow-up support — each itemized separately in our quotation.",
  },
  {
    q: "Is a payment receipt required for WPC ETA?",
    a: "Yes, the BharatKosh payment receipt must be attached to your application as proof of government fee payment.",
  },
  {
    q: "What is the WPC ETA package pricing for startups?",
    a: "Pricing depends on product category and number of models; we offer tailored guidance for startups filing their first application. Contact us for a specific quotation.",
  },
  {
    q: "Where can I download the WPC ETA self-declaration form?",
    a: "The self-declaration form is available on the Saral Sanchar portal for eligible product categories; we also help you complete it accurately as part of our service.",
  },
  {
    q: "What are the WPC ETA BharatKosh payment steps?",
    a: "Generate your application reference on Saral Sanchar, proceed to BharatKosh for fee payment, complete the transaction, and attach the receipt to your application.",
  },
  {
    q: "What are the government charges involved in WPC ETA?",
    a: "The primary government charge is the ETA application fee, paid per product model through BharatKosh.",
  },
  {
    q: "Does WPC ETA cost differ for multiple models?",
    a: "Yes — each distinct product model typically requires its own application, test report, and associated fee.",
  },
  {
    q: "What is the WPC ETA cost for a single product?",
    a: "Cost depends on the government fee, RF testing charges for that specific model, and any documentation or consultancy support required — we provide an itemized quote per product.",
  },
  {
    q: "How can I track my WPC ETA certificate status?",
    a: "Status can be tracked directly through your Saral Sanchar portal account under your submitted application.",
  },
  {
    q: "What is the validity period of a WPC ETA certificate?",
    a: "WPC ETA Approval is generally valid for the lifetime of the approved device model, provided its technical specifications remain unchanged.",
  },
  {
    q: "Do I need to renew my WPC ETA certificate?",
    a: "Renewal is not routinely required — only if the device's frequency, power, or technical specifications change, requiring a fresh application.",
  },
  {
    q: "Is WPC ETA approval mandatory for all wireless devices, or are there exemptions?",
    a: "It is mandatory for the large majority of wireless products sold or imported commercially in India. Limited exemptions exist for specific sample, R&D, or personal-use situations — always confirm applicability for your exact case rather than assuming an exemption applies.",
  },
  {
    q: "Can I find a WPC ETA approval consultant near me?",
    a: "Yes — we support clients across India, including Delhi, Noida, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and Ahmedabad, both remotely and with local coordination where needed.",
  },
  {
    q: "What documents are required for WPC ETA approval?",
    a: "Key documents include the RF test report, technical literature, user manual, block diagram, product photographs, application form, self-declaration form (where applicable), and business proof — see the full checklist above.",
  },
];

export const CTA_PARAGRAPH =
  "Whether you're a first-time importer or managing a multi-product portfolio, our team handles the documentation, testing coordination, and government filing so you can focus on your launch. Talk to our WPC ETA Approval Consultant team today for a clear, itemized plan and honest timeline guidance for your specific product.";
