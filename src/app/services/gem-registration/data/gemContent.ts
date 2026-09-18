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

export const GEM_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-gem", label: "What Is GeM Registration?" },
  { id: "why-register", label: "Why Register on GeM Portal?" },
  { id: "who-needs", label: "Who Needs GeM Registration?" },
  { id: "key-terms", label: "Key GeM Terms You Should Know" },
  { id: "benefits", label: "Key Benefits of Registering Through Us" },
  { id: "services-include", label: "What Our GeM Registration Services Include" },
  { id: "eligibility", label: "GeM Registration Eligibility" },
  { id: "documents", label: "Documents Required for GeM Registration" },
  { id: "process", label: "Step-by-Step GeM Registration Process" },
  { id: "timeline", label: "GeM Registration Timeline" },
  { id: "cost", label: "GeM Registration Fees and Cost Factors" },
  { id: "validity", label: "GeM Registration Validity" },
  { id: "renewal", label: "GeM Registration Renewal" },
  { id: "compliance", label: "Compliance, Rules and Policy Every GeM Seller Should Know" },
  { id: "oem", label: "GeM OEM Registration and Brand Approval" },
  { id: "vendor-assessment", label: "GeM Vendor Assessment" },
  { id: "challenges", label: "Common Challenges in GeM Registration" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "industries", label: "Industries and Business Types We Serve" },
  { id: "personas", label: "Personas and Locations We Cover" },
  { id: "mistakes", label: "Common Mistakes and How to Avoid Them" },
  { id: "expert-tips", label: "Expert Tips for New GeM Sellers" },
  { id: "comparison", label: "GeM Registration vs Traditional Government Tendering" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Start Your GeM Registration" },
];

export const BANNER_TITLE = "GeM Registration Services in India";

export const BANNER_SUBTITLE =
  "Complete GeM Portal Registration Support for Sellers, Manufacturers and Service Providers";

export const BANNER_DESCRIPTION =
  "Get your business registered on the Government e-Marketplace and start selling to government buyers. We handle the complete GeM registration — from GeM seller ID registration and business verification to GeM OEM registration, vendor assessment support and catalogue setup. One team, one point of contact, start to finish.";

export const WHY_COME_HEADING = "Why businesses come to us";

export const WHY_COME_ITEMS = [
  "End-to-end GeM registration support for MSMEs, manufacturers, service providers, traders and startups",
  "GeM registration with documentation and coordination support, so your file is complete before it is submitted",
  "GeM OEM registration, OEM panel registration and brand approval assistance for manufacturers and brand owners",
  "GeM vendor assessment preparation, including the documents the assessment agency asks for",
  "Product and service listing help, so your catalogue goes live — not just your account",
  "A single compliance partner who also handles BIS, ISO, EPR, BEE, WPC-ETA, CDSCO and trademark work",
];

export const INTRO_PARAGRAPHS = [
  "Every year, central ministries, state departments, public sector undertakings and autonomous bodies buy an enormous volume of goods and services. Most of that buying no longer happens through paper tenders. It happens on one platform — the Government e-Marketplace, better known as GeM.",
  "If your business wants a share of that spending, GeM portal registration is the entry gate. Without a registered seller account, government buyers cannot see you, cannot compare you and cannot place an order with you. With one, your products and services sit in front of buyers across the country.",
  "Government e marketplace registration is done online. That sounds simple, and for a very small seller it sometimes is. In practice, most businesses hit friction: a GST mismatch, an Aadhaar authentication that will not go through, a business type selected incorrectly, an OEM claim that cannot be supported with a valid GeM authorisation letter, or a catalogue rejected because specifications were entered in the wrong format.",
  "This page explains what GeM registration is, who needs it, the GeM registration requirements, how the GeM registration process works, and where sellers usually get stuck. It also explains exactly how our team supports you at each step.",
];

export const INTRO_NOTE =
  "One note on figures before you read further. GeM’s charges, deposit rules and processing times are set by the portal and revised from time to time. We have deliberately not published fixed amounts or guaranteed timelines here. Requirements may vary depending on the latest official regulatory guidelines, and we confirm the current position with you before you commit to anything.";

export const WHAT_IS_PARAGRAPHS = [
  "GeM registration is the process of creating and verifying a seller account on the Government e-Marketplace — the national public procurement portal operating under the Ministry of Commerce and Industry.",
  "Completing it gives your business a GeM seller ID. That ID is your identity on the platform. It links your PAN, GSTIN, bank account and business details into one verified profile that government buyers can see and trust. Sellers often ask what is gem seller id and how to get it: it is issued once your GeM seller registration is approved, and it is visible inside your seller account.",
];

export const WHAT_REGISTRATION_DOES_ROWS: TableRow[] = [
  {
    purpose: "Establishes identity",
    means: "You become a registered government supplier rather than an unknown vendor",
  },
  {
    purpose: "Unlocks the marketplace",
    means: "You can list on the GeM online marketplace and buyers across ministries and PSUs can find you",
  },
  {
    purpose: "Enables participation",
    means: "You can respond to bids, reverse auctions and direct purchase requirements",
  },
  {
    purpose: "Supports policy benefits",
    means: "Verified MSME and startup credentials can be linked to your profile",
  },
  {
    purpose: "Creates a track record",
    means: "Orders, ratings and performance build a history buyers can check",
  },
];

export const WHO_RUNS_PARAGRAPHS = [
  "The Government e-Marketplace operates under the Ministry of Commerce and Industry through a dedicated GeM SPV (special purpose vehicle). Its role is anchored in the General Financial Rules 2017 — GFR Rule 149 directs government buyers to procure through GeM for goods and services available on the platform. That single rule is why this matters commercially: it is not an optional channel for buyers, it is the default one.",
  "This is what makes selling to government departments in India different from private B2B selling. GeM is a transparent public procurement system built around a paperless government purchase process, and it is the largest single expression of B2G ecommerce in India.",
];

export const WHAT_IT_IS_NOT =
  "GeM registration is not a certification. It does not certify your product quality and it does not replace product-level approvals. If your goods fall under a mandatory certification scheme — BIS, BEE, CDSCO, FSSAI, WPC-ETA and so on — those obligations continue to apply independently. Registration gets you onto the platform. Compliance keeps you sellable on it.";

export const WHY_REGISTER_ITEMS: { title: string; text: string }[] = [
  {
    title: "1. It is where government demand now sits",
    text: "Buyers are directed to the platform by rule. Central government procurement, state government procurement on GeM and PSU procurement through GeM all run through the same marketplace. If you are not on it, you are not competing for that demand — regardless of how good your product or price is.",
  },
  {
    title: "2. It opens a market that pays",
    text: "Government buyers are institutional buyers. Order volumes are typically larger and more predictable than retail, and payment obligations are governed by the platform’s contract terms rather than by informal arrangements. Facilities such as the GeM Pool Account for payments and GeM Sahay financing for sellers exist to support that flow.",
  },
  {
    title: "3. It gives smaller businesses a real entry point",
    text: "This is the part many owners underestimate. Public procurement policy actively favours small suppliers. MSE purchase preference, GeM EMD exemption for eligible sellers, and relaxations for DPIIT-recognised startups on turnover and prior experience exist specifically to bring newer, smaller businesses into government supply. These GeM registration benefits for sellers only reach you once you are registered and your credentials are linked.",
  },
  {
    title: "4. It supports Make in India objectives",
    text: "Preference to Make in India policy gives weight to local suppliers based on local content. Manufacturers who can substantiate their position are better placed than importers or pure traders in many categories.",
  },
  {
    title: "5. It builds credibility beyond the platform",
    text: "A verified profile, a clean order history and a strong seller rating are commercial assets. Private buyers read them the same way they read any other third-party validation.",
  },
  {
    title: "6. It reduces channel dependence",
    text: "For a business selling only through distributors or one or two large private customers, a government supply business is genuine diversification. Among the clearest advantages of GeM portal registration is that one registration opens a government procurement opportunity across the whole buyer base, not one department at a time.",
  },
];

export const WHO_NEEDS_INTRO =
  "Any business that wants to supply goods or services to a government buyer in India needs GeM portal registration for business. The platform accommodates a wide range of entity types and business models.";

export const WHO_NEEDS_ROWS: TableRow[] = [
  {
    who: "Manufacturers / OEMs",
    why: "List your own manufactured products under your own brand",
    extra: "OEM status, brand approval, vendor assessment",
  },
  {
    who: "MSMEs",
    why: "Access MSE purchase preference and EMD exemption",
    extra: "Linking the Udyam certificate to the profile",
  },
  {
    who: "Startups",
    why: "Use DPIIT recognition for turnover and experience relaxations",
    extra: "Registering with limited or no trading history",
  },
  {
    who: "Traders / resellers",
    why: "Sell products manufactured by others",
    extra: "Valid OEM authorisation and OEM dealer mapping on GeM",
  },
  {
    who: "Service providers",
    why: "Offer manpower, housekeeping, security, transport and IT services",
    extra: "Correct service category selection and scope",
  },
  {
    who: "Importers",
    why: "Supply imported goods to government buyers",
    extra: "IEC linkage and product-level certification",
  },
  {
    who: "Exporters",
    why: "Add a domestic government channel alongside export business",
    extra: "Aligning documentation across both channels",
  },
  {
    who: "Large enterprises",
    why: "Consolidate government business on one platform",
    extra: "Multiple GSTINs, branches and user hierarchies",
  },
  {
    who: "Societies, trusts and SHGs",
    why: "Supply as a registered organisation",
    extra: "Constitution documents and signatory proof",
  },
  {
    who: "FPOs, artisans and weavers",
    why: "Reach institutional buyers directly",
    extra: "Category selection and catalogue presentation",
  },
];

export const WHO_NEEDS_CLOSING =
  "We regularly handle GeM registration for MSME sellers, GeM registration for manufacturer businesses, GeM registration for service provider firms, GeM registration for startup companies, GeM registration for proprietorship and partnership firms, GeM registration for private limited company and LLP structures, GeM registration for one person company setups, GeM registration for trading company clients, GeM registration for IT services company work, GeM registration for manpower supply agency, housekeeping services, security services and transport services providers, GeM registration for stationery supplier and printing services businesses, GeM registration for handicraft sellers, GeM registration for women entrepreneurs and GeM registration for SC ST entrepreneurs, plus GeM registration for society and trust bodies. We also provide GeM portal registration help for small business owners registering for the first time.";

export const TERMS_INTRO =
  "A short glossary, because most registration mistakes trace back to a term being misunderstood.";

function term(name: string, meaning: string): TableRow {
  return { term: name, meaning };
}

export const TERMS_ROWS: TableRow[] = [
  term("Government e-Marketplace", "The national procurement platform; the GeM India portal at the gem gov in portal address"),
  term("GeM SPV", "The special purpose vehicle that operates the marketplace"),
  term("Ministry of Commerce and Industry", "The ministry under which the Government e-Marketplace operates"),
  term("GeM Seller Corner", "The seller-side workspace; also called the seller corner GeM portal or GeM seller panel"),
  term("GeM seller ID", "Your unique identifier as a GeM supplier"),
  term("Primary User", "The account owner; created through GeM primary user registration"),
  term("Secondary User", "A delegated user created under the primary account"),
  term("GeM account / GeM profile", "Your registered identity and the business details attached to it"),
  term("Vendor Assessment", "Structured evaluation of financial and organisational capability"),
  term("Quality Council of India", "The body associated with the GeM vendor assessment framework"),
  term("OEM", "Original equipment manufacturer status for a brand owner or manufacturer"),
  term("Deemed OEM status GeM", "OEM-equivalent standing available to certain sellers"),
  term("Third Party Manufacturer", "A manufacturer producing for another brand owner"),
  term("Brand Owner", "The party owning the brand being listed"),
  term("Reseller", "An authorised seller of another party’s brand"),
  term("GeM authorisation letter", "The OEM’s written authorisation permitting a reseller to list its brand"),
  term("Caution Money Deposit", "The security deposit requirement associated with seller accounts"),
  term("Annual Milestone Charge", "A turnover-linked platform charge under GeM revenue policy"),
  term("Transaction Charge", "An order-value-linked platform charge"),
  term("GeM turnover slab", "The turnover bands used to determine applicable charges"),
  term("Direct Purchase", "Low-value buying route used by government buyers"),
  term("L1 Purchase", "Comparison-based buying route"),
  term("Bid", "Competitive tendering route on the platform"),
  term("Reverse Auction", "Price-discovery route"),
  term("EMD (Earnest Money Deposit)", "Bid security submitted with a tender"),
  term("Performance Bank Guarantee / ePBG", "Post-award security furnished by the seller"),
  term("Consignee", "The party receiving delivery under a GeM order"),
  term("CRAC", "Consignee receipt and acceptance certificate"),
  term("GeM General Terms and Conditions", "The GeM GTC terms and conditions binding on sellers"),
  term("GFR Rule 149", "The rule directing buyers to procure through GeM"),
  term("Public Procurement (Preference to Make in India) Order 2017", "Local content preference framework"),
  term("Public Procurement Policy for MSEs 2012", "Policy mandating an MSE procurement share"),
  term("Class I Local Supplier", "Highest local content category"),
  term("Class II Local Supplier", "Medium local content category"),
  term("Non-Local Supplier", "Lowest local content category"),
  term("Local content certificate GeM", "Declaration substantiating local content claims"),
  term("MSE Purchase Preference", "Preferential position for eligible micro and small enterprises"),
  term("EMD Exemption", "Bid security waiver available to eligible sellers"),
  term("Turnover Exemption / Prior Experience Exemption", "Relaxations available to eligible startups"),
  term("Udyam Registration", "MSME credential issued under the Ministry of MSME"),
  term("Startup India / DPIIT", "Recognition administered by the Department for Promotion of Industry and Internal Trade"),
  term("National Small Industries Corporation", "Body supporting MSME participation in public procurement"),
  term("IEC Code", "Import export code required by importer sellers"),
  term("GeM Sahay", "Financing facility available to sellers"),
  term("GeM Pool Account", "Payment settlement mechanism"),
  term("Gross Merchandise Value", "Measure of transaction volume on the platform"),
  term("Seller Rating", "Performance score visible to buyers"),
];

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Access to government demand",
    text: "Your business becomes visible to buyers across ministries, state departments, PSUs and autonomous bodies through one verified profile on this government procurement platform for sellers.",
  },
  {
    title: "A complete profile, not just an account",
    text: "An account sitting at forty percent completion earns nothing. We complete GeM seller profile work properly — business verification for GeM account, bank linkage, GeM registration company profile details, category mapping and catalogue setup.",
  },
  {
    title: "Correct OEM positioning from day one",
    text: "Claiming the wrong seller role is one of the most expensive mistakes on the platform. We assess whether you qualify as an OEM, a deemed OEM, an authorised seller on GeM portal or a reseller, and build the documentation accordingly.",
  },
  {
    title: "Vendor assessment prepared, not improvised",
    text: "Where it applies, we handle vendor assessment preparation — financial credentials verification GeM requires, organisational capability assessment evidence, and factory inspection for vendor assessment records.",
  },
  {
    title: "Policy benefits actually applied",
    text: "MSME Udyam certificate benefits on GeM and Startup India recognition on GeM only help if they are linked and visible. We make sure eligible benefits appear on your profile.",
  },
  {
    title: "Fewer rejections, fewer restarts",
    text: "Most rejections come from avoidable errors. We review before submission, not after.",
  },
  {
    title: "One partner for the wider compliance picture",
    text: "Because we also provide BIS, ISO, BEE, EPR, WPC-ETA, CDSCO, FSSAI and trademark services, you are not managing five vendors. This is GeM registration with compliance certification support in one place.",
  },
];

export const SERVICES_INCLUDE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Eligibility review",
    text: "confirming entity type, credentials and category fit before anything is filed",
  },
  {
    title: "GeM registration documentation support",
    text: "a GeM seller registration checklist built for your business constitution, not a generic list",
  },
  {
    title: "GeM seller account opening",
    text: "GeM new user registration, GeM primary user registration and authentication",
  },
  {
    title: "Business verification",
    text: "seller verification on GeM and GeM verification of your submitted credentials",
  },
  {
    title: "Company profile completion",
    text: "turnover declaration, bank account linking GeM seller records, address and organisational details",
  },
  {
    title: "Category and product mapping",
    text: "identifying the right categories for what you actually sell",
  },
  {
    title: "GeM OEM registration and brand approval",
    text: "OEM panel registration, brand owner registration on GeM, manufacturer authorisation on GeM and OEM dealer mapping on GeM",
  },
  {
    title: "Vendor assessment preparation service",
    text: "documentation, coordination and readiness support",
  },
  {
    title: "Catalogue and listing support",
    text: "product listing, service listing, specifications and images",
  },
  {
    title: "GeM secondary user creation",
    text: "structuring additional users under your primary account",
  },
  {
    title: "Post-registration assistance",
    text: "profile corrections, detail updates, reactivation support and account management",
  },
  {
    title: "Bid readiness guidance",
    text: "bid participation eligibility, EMD and PBG concepts explained before you bid",
  },
  {
    title: "Compliance coordination",
    text: "arranging product certification for government tenders in your category",
  },
];

export const SERVICES_INCLUDE_CLOSING =
  "We also provide GeM portal training for sellers whose in-house teams want to manage the account themselves after handover.";

export const ELIGIBILITY_WHO_HEADING = "Who can register";

export const ELIGIBILITY_WHO = [
  "Registered business entities in India — proprietorship, partnership, LLP, private limited, public limited, OPC",
  "Registered societies, trusts and self-help groups; self help group GeM registration is accepted",
  "Farmer producer organisations — FPO registration on GeM is permitted — along with artisan and weaver on GeM categories",
  "Manufacturers, importers, traders and service providers",
  "MSME seller on GeM holding a valid Udyam registration for GeM purposes",
  "Startup seller on GeM with DPIIT recognition",
  "Woman owned enterprise GeM registrations",
  "GeM registration for new business without turnover, subject to category conditions",
];

export const ELIGIBILITY_BASIC_HEADING = "Basic GeM registration requirements";

export const ELIGIBILITY_BASIC = [
  "A valid PAN in the name of the business or proprietor",
  "An authorised signatory whose identity can be authenticated",
  "A bank account in the name of the business",
  "GSTIN, where your business is required to hold one",
  "Constitution documents appropriate to your entity type",
];

export const ELIGIBILITY_CARE_HEADING = "Points that need care";

export const ELIGIBILITY_CARE: { title: string; text: string }[] = [
  {
    title: "GST:",
    text: "some categories and seller types operate under exemptions. Whether GeM registration without GST is possible for you depends on your category and current portal conditions. Sellers frequently ask can I register on GeM portal without GST number — the answer is category-specific, and worth checking before you start.",
  },
  {
    title: "Udyam:",
    text: "businesses ask whether is Udyam certificate required for GeM registration, or is Udyam registration compulsory before GeM registration. It is not framed as a universal prerequisite, but for eligible MSMEs it is what unlocks MSE benefits.",
  },
  {
    title: "Turnover:",
    text: "there is frequent confusion about the minimum turnover required for GeM seller registration and the GeM registration turnover requirement generally. Turnover conditions usually arise at bid level rather than at registration, and eligible sellers may qualify for relaxations.",
  },
  {
    title: "Aadhaar:",
    text: "many sellers ask is Aadhaar mandatory for GeM seller registration. Aadhaar based authentication GeM uses is central to verifying the signatory.",
  },
  {
    title: "Premises:",
    text: "whether does GeM registration require a physical office address depends on entity type and category.",
  },
  {
    title: "Single identity:",
    text: "can two sellers use the same PAN on GeM portal is a common question where a group holds several businesses. The PAN–GSTIN–account relationship must be structured correctly at the start.",
  },
];

export const ELIGIBILITY_NOTE =
  "Requirements may vary depending on the latest official regulatory guidelines. We verify your position against current portal requirements before filing.";

export const DOCUMENTS_INTRO =
  "Below is the GeM registration document list we work from. What documents are needed for GeM seller registration in India depends on your entity type, so the final checklist is always built for your specific case.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "PAN card of business or proprietor",
    purpose: "Primary business identity; PAN based verification GeM portal uses",
    mandatory: "Mandatory",
    notes: "Details must exactly match other records",
  },
  {
    document: "Aadhaar of authorised signatory",
    purpose: "Signatory authentication",
    mandatory: "Mandatory",
    notes: "Must be linked to an active mobile number for OTP",
  },
  {
    document: "GST registration certificate",
    purpose: "Tax identity; GSTIN verification on GeM",
    mandatory: "Mandatory where applicable",
    notes: "Legal name must match PAN records",
  },
  {
    document: "Cancelled cheque for GeM registration",
    purpose: "Payment settlement and bank verification",
    mandatory: "Mandatory",
    notes: "Account must be in the business name",
  },
  {
    document: "Business constitution proof GeM requires",
    purpose: "Establishes entity type",
    mandatory: "Mandatory",
    notes: "Incorporation certificate for GeM, partnership deed for GeM registration, LLP agreement or equivalent",
  },
  {
    document: "Udyam registration certificate",
    purpose: "MSME status and policy benefits",
    mandatory: "Optional but recommended",
    notes: "Enables MSE-linked benefits where applicable",
  },
  {
    document: "DPIIT certificate for GeM sellers",
    purpose: "Startup status and relaxations",
    mandatory: "Optional",
    notes: "For DPIIT-recognised startups",
  },
  {
    document: "Income tax return requirement GeM may raise",
    purpose: "Turnover substantiation",
    mandatory: "Situational",
    notes: "Where turnover needs to be evidenced",
  },
  {
    document: "Address proof of business premises",
    purpose: "Location verification",
    mandatory: "Situational",
    notes: "Depends on entity type and category",
  },
  {
    document: "GeM authorisation letter from the OEM",
    purpose: "Establishes right to sell a brand",
    mandatory: "Situational",
    notes: "Required for resellers and dealers",
  },
  {
    document: "Trademark registration or brand ownership proof",
    purpose: "Supports brand approval",
    mandatory: "Situational",
    notes: "When listing under your own brand",
  },
  {
    document: "Product certificates (BIS, BEE, FSSAI, CDSCO, WPC-ETA)",
    purpose: "Category-level compliance",
    mandatory: "Situational",
    notes: "Depends entirely on the product listed",
  },
  {
    document: "Test reports from accredited labs",
    purpose: "Substantiates product claims",
    mandatory: "Situational",
    notes: "Frequently requested in bid conditions",
  },
  {
    document: "Board resolution or authorisation letter",
    purpose: "Confirms who may act for the entity",
    mandatory: "Situational",
    notes: "For companies, LLPs, societies and trusts",
  },
];

export const DOCUMENTS_CLOSING = [
  "We prepare separate checklists — a GeM registration documents checklist for proprietorship firm clients and a GeM registration documents checklist for private limited company clients — because the constitution evidence differs completely. Our GeM registration form fill up service covers the data entry itself, and KYC for GeM seller registration is handled as part of the same pass.",
  "Practical points that save time: keep scans readable, ensure GeM document upload file formats are correct before you begin, and confirm what is the correct way to declare turnover during GeM registration rather than guessing. If you already hold a GSTIN, GeM registration for existing GST holders is straightforward. Where a group operates several GSTINs, we provide GeM registration support for companies with multiple GSTIN structures so the account hierarchy is right from the start.",
  "When you are ready to upload documents for GeM registration, send documents for GeM registration review to our team first — we confirm what is complete and what needs attention before anything is filed.",
];

export const PROCESS_INTRO =
  "This is the GeM registration procedure we follow. The GeM registration steps below describe the full GeM seller onboarding journey, and are written as step by step GeM portal registration for first time sellers.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Eligibility review",
    color: "#0b57b5",
    title: "Step 1 — Eligibility and scope review",
    text: "We establish your entity type, your categories, and whether you are registering as an OEM, a deemed OEM, a reseller or a service provider. Getting this right prevents most later problems.",
  },
  {
    step: "02",
    label: "Document collection",
    color: "#2563eb",
    title: "Step 2 — Document collection and verification",
    text: "We issue your checklist, then check every document for consistency. Name, PAN, GSTIN and bank details must agree. Most rejections originate here.",
  },
  {
    step: "03",
    label: "Account creation",
    color: "#0891b2",
    title: "Step 3 — Account creation",
    text: "The GeM signup page is used to create the seller account with the authorised signatory as primary user. The GeM registration online application form is completed and identity authentication is performed. This is where you apply for GeM registration formally and where sellers register on GeM portal online for the first time.",
  },
  {
    step: "04",
    label: "Business verification",
    color: "#059669",
    title: "Step 4 — Business verification",
    text: "Business details, constitution and GSTIN are submitted for verification. GeM approval at this stage is what moves the file forward.",
  },
  {
    step: "05",
    label: "Profile completion",
    color: "#d97706",
    title: "Step 5 — Company profile completion",
    text: "Turnover declaration, bank linkage, address records, MSME and startup credentials, and the organisational information buyers will see.",
  },
  {
    step: "06",
    label: "OEM positioning",
    color: "#dc2626",
    title: "Step 6 — Seller role and OEM positioning",
    text: "Where you manufacture or own the brand, we prepare the GeM OEM registration and apply for brand approval on GeM. Where you sell another brand, we structure the authorisation documentation and reseller mapping. GeM reseller registration and OEM routes diverge sharply here.",
  },
  {
    step: "07",
    label: "Vendor assessment",
    color: "#7c3aed",
    title: "Step 7 — Vendor assessment, where applicable",
    text: "We submit the GeM vendor assessment application and prepare you for the evaluation itself.",
  },
  {
    step: "08",
    label: "Catalogue creation",
    color: "#0f766e",
    title: "Step 8 — Category selection and catalogue creation",
    text: "Products and services are mapped to correct categories and specifications are entered in the format the platform expects. A live catalogue is what earns orders.",
  },
  {
    step: "09",
    label: "Approval and handover",
    color: "#c2410c",
    title: "Step 9 — Approval and handover",
    text: "Once approvals come through, we hand over a documented account: credential structure, secondary users where needed, and a clear explanation of what you now control. You can download GeM seller certificate records from within the account.",
  },
  {
    step: "10",
    label: "Post-registration",
    color: "#1d4ed8",
    title: "Step 10 — Post-registration support",
    text: "Profile updates, corrections, category additions, catalogue expansion and bid readiness guidance as your business grows.",
  },
];

export const PROCESS_NOTE =
  "A practical note: the portal publishes a GeM portal user manual for sellers, and much of the flow can be followed on a desktop browser. Sellers sometimes ask how to complete GeM registration using mobile phone — parts of it are possible, but document handling and catalogue work are considerably easier on a computer.";

export const TIMELINE_INTRO =
  "GeM registration time is not one single approval. It is a sequence, and different parts move at different speeds.";

export const TIMELINE_ROWS: TableRow[] = [
  {
    stage: "Document preparation",
    pace: "How quickly complete, consistent documents are available — the stage you control",
  },
  {
    stage: "Account creation and authentication",
    pace: "System response and successful signatory verification",
  },
  {
    stage: "Business verification",
    pace: "Verification of credentials against source records",
  },
  {
    stage: "Profile completion",
    pace: "Availability of financial and organisational details",
  },
  {
    stage: "OEM and brand approval",
    pace: "Strength of brand ownership or authorisation documentation",
  },
  {
    stage: "Vendor assessment",
    pace: "Scheduling and completion by the assessment agency",
  },
  {
    stage: "Catalogue approval",
    pace: "Accuracy and completeness of listings",
  },
];

export const TIMELINE_CLOSING =
  "Sellers reasonably ask how long does it take to get GeM seller approval, and what the realistic GeM registration turnaround time is. We do not publish a fixed number of days, and we would treat any such promise with caution — including claims of same day GeM seller registration. Processing time depends on the latest regulatory requirements, portal load, documentation completeness and whether vendor assessment applies. The GeM registration timeline for OEM with vendor assessment is naturally longer than a straightforward reseller account. What we commit to is our side: a complete, correctly structured application filed without avoidable delay.";

export const COST_INTRO = [
  "We do not publish GeM registration charges as a fixed price on this page, for a straightforward reason: what your registration involves determines what it costs. A single-category proprietorship and a multi-GSTIN manufacturer seeking OEM status with vendor assessment are not the same job. There is no honest GeM registration price list that covers both.",
];

export const COST_DRIVES_HEADING = "What drives the total";

export const COST_FACTORS: { title: string; text: string }[] = [
  {
    title: "Portal charges",
    text: "GeM registration fees payable to the platform are set by GeM revenue policy and revised from time to time. These may include a caution money deposit or security deposit requirement, an annual milestone charge linked to your GeM turnover slab, and a transaction charge on order value. We confirm the position that applies to you before you commit.",
  },
  {
    title: "Seller role",
    text: "GeM OEM registration cost is higher in effort than a straightforward reseller account because the documentation burden is greater.",
  },
  {
    title: "Vendor assessment",
    text: "GeM vendor assessment fees and GeM vendor assessment charges are levied by the assessment body and are separate from professional fees. Sellers often ask what is the fee structure for GeM vendor assessment by QCI; this is set by the assessment framework, not by us.",
  },
  {
    title: "Number of entities and GSTINs",
    text: "a group with several registered entities is more work than a single firm.",
  },
  {
    title: "Catalogue size",
    text: "five products is not the same as two hundred SKUs with specifications and images.",
  },
  {
    title: "Product certifications",
    text: "BIS, BEE, EPR, FSSAI, CDSCO or WPC-ETA compliance are separate scopes with their own costs.",
  },
  {
    title: "Ongoing support",
    text: "one-time registration versus an annual account management arrangement.",
  },
  {
    title: "Corrective work",
    text: "cleaning up an account registered incorrectly by someone else usually takes longer than starting fresh.",
  },
];

export const COST_CLOSING = [
  "Our GeM registration consultant fees are quoted in writing after scoping, so you know the GeM registration consultancy charges in India that apply to your case before work begins. GeM registration consultant charges for complete onboarding differ from a simple account setup, and we say which one you need. How much does GeM registration cost for MSME sellers is therefore answered case by case — and government and portal charges are always shown separately from our fees.",
  "On deposits specifically: GeM caution money rules, the GeM caution money refund process and questions such as how to pay caution money on GeM portal step by step, whether you can pay GeM caution money online, what is caution money slab for turnover above one crore, and whether caution money can be refunded after closing GeM account are all governed by the platform’s own policy — which has been revised over time. We verify the current position rather than repeat figures that may be out of date.",
];

export const VALIDITY_PARAGRAPHS = [
  "A GeM seller account is not designed to expire on a fixed date the way a product licence does. GeM registration validity depends on the profile remaining accurate, the business remaining compliant with the platform’s terms, and the account being used in line with the seller obligations in the GeM General Terms and Conditions.",
  "What genuinely has a shelf life is the material inside the profile:",
];

export const VALIDITY_ITEMS = [
  "OEM authorisation letters carry their own validity",
  "GST and Udyam records must reflect your current position",
  "Bank details, addresses and signatory information must be current",
  "Product certificates and test reports have expiry dates",
  "Vendor assessment validity period applies where assessment was conducted",
];

export const VALIDITY_CLOSING =
  "So when sellers ask what is the validity of GeM seller registration in India, the accurate answer is that the account is maintained rather than dated. An account with expired supporting documents can be as unusable as an unregistered one. For the current position on account status and continuing obligations, we recommend verification against the platform’s published terms, which are set by GeM and can change.";

export const RENEWAL_ATTENTION_HEADING = "When attention is needed";

export const RENEWAL_ITEMS = [
  "An OEM authorisation letter is approaching expiry",
  "GST, Udyam or DPIIT records have been updated",
  "Bank account, address or authorised signatory details have changed",
  "Product certificates supporting your listings are due for renewal",
  "Vendor assessment validity is nearing its end",
  "Business constitution has changed — a proprietorship converting to a private limited company, for example",
];

export const RENEWAL_PARAGRAPH =
  "Sellers regularly ask do I need to renew my GeM registration every year. The account itself is not built around an annual renewal cycle; the supporting documents are what lapse. Our GeM registration renewal service tracks those dates, and where a portal action is needed we renew GeM registration online on your behalf.";

export const RENEWAL_PRECAUTIONS_HEADING = "Precautions worth taking";

export const RENEWAL_PRECAUTIONS = [
  "Never let an authorisation letter expire while listings depending on it are live",
  "Update bank details carefully — payment settlement depends on them",
  "Keep a copy of every document submitted, with dates",
  "Do not share primary user credentials informally; use secondary users properly",
  "Check that a change made in one place is reflected everywhere it applies",
];

export const COMPLIANCE_INTRO =
  "Registration is the entry point. What follows is a rulebook, and sellers who understand it win more.";

export const COMPLIANCE_INSTRUMENTS_HEADING = "The instruments that govern the platform";

export const COMPLIANCE_INSTRUMENTS: { title: string; text: string }[] = [
  {
    title: "General Financial Rules 2017",
    text: "GFR Rule 149 government procurement provisions direct buyers to the platform",
  },
  {
    title: "GeM GTC terms and conditions",
    text: "the GeM general terms and conditions GTC set out seller obligations; the GeM terms of use and GeM seller agreement operate alongside them",
  },
  {
    title: "Public Procurement Order 2017",
    text: "the Public Procurement (Preference to Make in India) Order 2017 establishes local content preference",
  },
  {
    title: "Public Procurement Policy for MSEs 2012",
    text: "sets the MSME procurement policy India follows, including procurement share targets",
  },
];

export const COMPLIANCE_LOCAL_HEADING = "Local content and Make in India GeM requirements";

export const COMPLIANCE_LOCAL =
  "Make in India GeM rules classify sellers as Class I local supplier, Class II local supplier or non-local supplier depending on local content. Understanding the Class 1 local supplier definition and how class 2 local supplier GeM status differs matters because many bids restrict participation by class. What is Make in India local content requirement on GeM in your specific category is a bid-level question, and the local content certificate GeM buyers ask for must be substantiated. There are also restrictions on bidders from land border countries that apply to certain procurements.";

export const COMPLIANCE_BENEFITS_HEADING = "Benefits available to eligible sellers";

export const COMPLIANCE_BENEFITS =
  "MSE purchase preference GeM extends to eligible micro and small enterprises, and how does MSE purchase preference work on GeM portal is worth understanding before you bid. GeM EMD exemption is available to eligible sellers, and how MSME sellers get EMD exemption on GeM bids depends on credentials being linked correctly. Turnover exemption and prior experience exemption support recognised startups. Government contract eligibility for MSME suppliers is broader than most owners assume.";

export const COMPLIANCE_CONDUCT_HEADING = "Conduct, ratings and consequences";

export const COMPLIANCE_CONDUCT =
  "GeM guidelines for sellers and the GeM seller code of conduct set behavioural expectations. GeM seller ratings and reviews are visible to buyers, and your GeM profile rating follows you. How to get GeM seller rating improved quickly is largely a delivery-performance question rather than a profile question. GeM incident management policy, the GeM debarment policy and rules on blacklisting of sellers on GeM apply where obligations are breached. GeM procurement rules, GeM policy update notices, GeM circular releases and GeM notification announcements are worth monitoring — our GeM compliance support services include flagging changes that affect your categories.";

export const OEM_INTRO = "For manufacturers, this is the section that matters most.";

export const OEM_STATUS_HEADING = "Establishing OEM status";

export const OEM_STATUS =
  "How to get OEM status on GeM portal as a manufacturer comes down to evidence. Original equipment manufacturer status requires proof of manufacturing or brand ownership. We handle GeM OEM panel registration and GeM OEM panel empanelment service work, prepare the file to apply for GeM OEM status, and support you through to a GeM OEM certificate being issued. Our GeM OEM registration consultant team also advises on deemed OEM status GeM recognises for certain sellers, and on where third party manufacturer arrangements sit.";

export const OEM_BRAND_HEADING = "Brand approval";

export const OEM_BRAND =
  "Brand owner registration on GeM is what lets you list under your own name. How to add brand name on GeM portal for own products is a documented request supported by trademark registration for GeM brand approval or equivalent ownership evidence. We provide GeM registration service with brand approval as a combined scope.";

export const OEM_RESELLER_HEADING = "Resellers and authorisation";

export const OEM_RESELLER =
  "Can a trader register as OEM on GeM portal? Not by declaration. A trader normally registers as an authorised seller on GeM portal with manufacturer authorisation on GeM in place. We handle OEM dealer mapping on GeM so the relationship is recorded correctly. One frequently missed risk: what happens if OEM authorisation letter expires on GeM — listings dependent on it become exposed. Importer registration on GeM follows a related path, with IEC code for importer sellers on GeM linked to the profile.";

export const OEM_SEGMENTS_HEADING = "Manufacturer segments we support";

export const OEM_SEGMENTS =
  "We provide GeM registration assistance for manufacturers across segments, including GeM registration for electrical products, GeM registration for furniture manufacturer clients, GeM registration for lab equipment supplier businesses and GeM registration for medical devices supplier companies. How to do GeM registration for a small manufacturing unit is among the most common enquiries we receive.";

export const VA_WHAT_HEADING = "What it is";

export const VA_WHAT =
  "Vendor assessment GeM portal procedures apply is a structured evaluation of a seller’s capability. It covers financial credentials verification GeM requires, organisational capability assessment, and in many cases factory inspection for vendor assessment purposes.";

export const VA_WHO_HEADING = "Who conducts it";

export const VA_WHO =
  "Who conducts vendor assessment for GeM portal sellers is a common question. It is carried out through a designated assessment agency for GeM sellers; Quality Council of India assessment frameworks are associated with the process, which is why sellers refer to it as QCI vendor assessment.";

export const VA_DO_HEADING = "What we do";

export const VA_DO =
  "Our GeM vendor assessment consultant team provides vendor assessment preparation service support: organising GeM vendor assessment documents, structuring evidence, and coordinating through the process. How to clear GeM vendor assessment in first attempt is mostly about preparation quality — assessments rarely fail on capability, they fail on documentation.";

export const VA_PRACTICAL_HEADING = "Practical points";

export const VA_PRACTICAL =
  "Vendor assessment exemption categories exist, so assessment is not universal. Where it is conducted, vendor assessment validity period applies and re-assessment is eventually required. How many times can vendor assessment be reattempted on GeM is governed by the assessment framework rather than by the seller.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Documentation mismatches",
    text: "The legal name on PAN, GST certificate and bank account must agree. Small variations — an extra initial, a trailing “& Co”, a different spelling — cause verification failures that look like system errors but are not.",
  },
  {
    title: "Aadhaar and OTP authentication failures",
    text: "Authentication depends on the signatory’s Aadhaar being linked to an active mobile number. This is one of the most common points where a registration stalls.",
  },
  {
    title: "Wrong business type selected",
    text: "Selecting the wrong constitution creates a mismatch that runs through the profile and is troublesome to correct.",
  },
  {
    title: "Weak OEM claims",
    text: "Declaring OEM status without evidence leads to rejected brand approval requests and questions about the listings themselves.",
  },
  {
    title: "Vendor assessment unpreparedness",
    text: "Sellers often treat the assessment as a formality. It is a structured evaluation, and it goes better when paperwork is organised in advance.",
  },
  {
    title: "Category selection errors",
    text: "Listing a product in a category that does not match its specifications leads to catalogue rejection or listings buyers never find.",
  },
  {
    title: "Incomplete catalogues",
    text: "An approved account with a thin catalogue produces nothing.",
  },
  {
    title: "Delays that trace back to the seller",
    text: "Missed clarification responses, unreadable scans and unmonitored registered email accounts extend timelines considerably.",
  },
];

export const HOW_WE_HELP_ITEMS: { title: string; text: string }[] = [
  {
    title: "Before the application",
    text: "We review eligibility, confirm your seller role and build a checklist specific to your entity type. If something needs fixing first — a GST detail, a constitution document, a brand ownership question — you know before you start.",
  },
  {
    title: "During the application",
    text: "Our team handles the filing end to end. You have one point of contact who knows your file, not a queue. This is GeM seller account setup service work done properly, and it includes GeM registration guidance for first time government suppliers who have never dealt with the platform before.",
  },
  {
    title: "For OEM and brand matters",
    text: "We assess your status, prepare brand approval requests and structure authorisation documentation.",
  },
  {
    title: "For vendor assessment",
    text: "We prepare, document and coordinate through the assessment.",
  },
  {
    title: "After approval",
    text: "Profile corrections, detail changes, category additions, catalogue expansion, secondary user setup and reactivation support. Our GeM account handling services and GeM portal management services cover ongoing work, and GeM seller account management for growing MSMEs is available as a continuing arrangement. Complete GeM onboarding from registration to first order is the scope most new sellers actually need.",
  },
  {
    title: "Across the wider compliance picture",
    text: "Where your category needs product certification, our own teams handle it — so compliance and registration are managed together rather than in isolation.",
  },
  {
    title: "What we do not do",
    text: "We do not promise approval and we do not promise a specific number of days. Approval rests with the portal and the relevant authorities. What we control is the quality and completeness of what goes in.",
  },
];

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Compliance is our core business, not a side offering",
    text: "We are a regulatory compliance and certification consultancy. GeM work sits alongside BIS, BEE, EPR, CDSCO, FSSAI, WPC-ETA, ISO and trademark services handled by the same organisation — genuine regulatory expertise across BIS, BEE, EPR and GeM in one team.",
  },
  {
    title: "Experienced GeM registration consultant support",
    text: "You work with an experienced GeM portal consultant who has handled the same category before, not a generalist reading a manual. Our GeM registration expert team in Noida supports clients across India.",
  },
  {
    title: "In-house technical experts and compliance capability",
    text: "Our teams prepare technical documentation and compliance support dossiers as routine work. That is what makes GeM registration audit ready documentation possible.",
  },
  {
    title: "End to end certification support",
    text: "As a single window compliance service provider and multi certification consultancy India businesses return to, we cover the whole picture — legal compliance support for sellers and technical guidance for GeM sellers included.",
  },
  {
    title: "GeM registration with transparent pricing",
    text: "Professional fees are quoted in writing after scoping; portal and government charges are shown separately. GeM registration process transparency is a deliberate choice — which is why you will not find invented fees or guaranteed timelines on this page.",
  },
  {
    title: "A dedicated account manager",
    text: "You deal with a person who knows your file, your category and your history — not a general helpline. GeM registration support with post approval assistance continues after the account goes live.",
  },
  {
    title: "Honest positioning",
    text: "If GeM registration is not the right priority for your business right now, we will say so. If your category has a compliance blocker, we will tell you before you spend money on registration. That is how to choose a reliable GeM registration service provider — look for the one willing to talk you out of something.",
  },
];

export const INDUSTRIES_ROWS: TableRow[] = [
  {
    segment: "Electrical and electronics manufacturing",
    supply: "Appliances, components, equipment",
    compliance:
      "BIS CRS registration for GeM sellers, BEE star label for appliances on GeM, EPR authorisation for electronics and plastic",
  },
  {
    segment: "Engineering and industrial goods",
    supply: "Machinery, tools, fabricated items",
    compliance: "ISI mark certification for government supply, ISO certification, third party inspection services India",
  },
  {
    segment: "Furniture and office equipment",
    supply: "Office and institutional furniture",
    compliance: "Product inspection and quality monitoring",
  },
  {
    segment: "Stationery and printing",
    supply: "Office supplies, printed material",
    compliance: "Basic registration; brand approval where branded",
  },
  {
    segment: "Medical devices and healthcare",
    supply: "Devices, consumables, lab items",
    compliance: "CDSCO licence for medical device sellers, NABL accredited lab testing",
  },
  {
    segment: "Food and catering",
    supply: "Packaged food, canteen supply",
    compliance: "FSSAI licence for food suppliers, LMPC certificate for packaged commodities",
  },
  {
    segment: "Telecom and wireless products",
    supply: "Routers, radios, communication devices",
    compliance: "WPC ETA approval for wireless devices, TEC MTCTE certification for telecom products",
  },
  {
    segment: "IT and software services",
    supply: "Software, hardware supply, IT support",
    compliance: "Service category mapping and capability documentation",
  },
  {
    segment: "Manpower and facility services",
    supply: "Housekeeping, security, manpower supply",
    compliance: "Service scope definition, statutory compliance records",
  },
  {
    segment: "Transport and logistics",
    supply: "Vehicle hire, logistics services",
    compliance: "Service category mapping",
  },
  {
    segment: "Textiles, handicrafts and handloom",
    supply: "Uniforms, furnishings, artisan products",
    compliance: "Product quality documentation",
  },
  {
    segment: "Chemicals and hazardous goods",
    supply: "Industrial chemicals, gases",
    compliance: "PESO approval for hazardous goods suppliers",
  },
  {
    segment: "Importers and trading companies",
    supply: "Imported goods across categories",
    compliance: "IEC code, RoHS compliance for electronics suppliers, compliance audit services India",
  },
];

export const INDUSTRIES_CLOSING =
  "Buyers increasingly ask for compliance certification for government supply and a test report requirement for government supply as part of bid conditions. Common questions we field include is BIS certification required for selling products on GeM, do I need ISO certification for GeM tenders, is FSSAI licence needed to sell food products on GeM, WPC ETA approval requirement for wireless products on GeM, BEE registration requirement for appliances listed on GeM, EPR registration requirement for electronics sellers on GeM, and how to sell electronics on GeM with BIS CRS registration. Where the answer is yes, we handle it.";

export const PERSONAS_INTRO =
  "GeM is a business-level onboarding, not a product-level approval. What changes between one seller and the next is the persona — the entity type, the credentials available and the seller role claimed. Dedicated pages for each persona are in development.";

export const PERSONAS_ROWS: TableRow[] = [
  { persona: "GeM registration for MSME", difference: "Udyam linkage, MSE purchase preference, EMD exemption", page: "Coming Soon" },
  { persona: "GeM registration for manufacturer", difference: "OEM status, brand approval, vendor assessment", page: "Coming Soon" },
  { persona: "GeM registration for service provider", difference: "Service category selection and scope definition", page: "Coming Soon" },
  { persona: "GeM registration for startup", difference: "DPIIT recognition, turnover and experience relaxations", page: "Coming Soon" },
  { persona: "GeM registration for proprietorship", difference: "Simplified constitution documents, single signatory", page: "Coming Soon" },
  { persona: "GeM registration for private limited company", difference: "Board authorisation, CIN linkage, multiple users", page: "Coming Soon" },
  { persona: "GeM registration for partnership firm", difference: "Partnership deed and authorised partner identification", page: "Coming Soon" },
  { persona: "GeM registration for LLP", difference: "LLP agreement, designated partner authorisation", page: "Coming Soon" },
  { persona: "GeM registration for one person company", difference: "Single-member structure and nominee records", page: "Coming Soon" },
  { persona: "GeM registration for trading company", difference: "OEM authorisation letters and reseller mapping", page: "Coming Soon" },
  { persona: "GeM registration for society and trust", difference: "Constitution and governing body documents", page: "Coming Soon" },
  { persona: "GeM registration for women entrepreneurs", difference: "Woman-owned enterprise credentials", page: "Coming Soon" },
  { persona: "GeM registration for SC ST entrepreneurs", difference: "Category credentials and applicable benefits", page: "Coming Soon" },
  { persona: "GeM registration for handicraft sellers", difference: "Artisan category placement and catalogue presentation", page: "Coming Soon" },
  { persona: "GeM registration for IT services company", difference: "Service categories and capability evidence", page: "Coming Soon" },
  { persona: "GeM registration for manpower supply agency", difference: "Scope definition and statutory records", page: "Coming Soon" },
  { persona: "GeM registration for housekeeping services", difference: "Service category mapping", page: "Coming Soon" },
  { persona: "GeM registration for security services", difference: "Service category mapping and compliance records", page: "Coming Soon" },
  { persona: "GeM registration for transport services", difference: "Fleet and service scope documentation", page: "Coming Soon" },
  { persona: "GeM registration for stationery supplier", difference: "Catalogue breadth and specification accuracy", page: "Coming Soon" },
  { persona: "GeM registration for printing services", difference: "Service and product hybrid categories", page: "Coming Soon" },
  { persona: "GeM registration for government supply business", difference: "Full onboarding for first-time suppliers", page: "Coming Soon" },
  { persona: "GeM registration support for exporters", difference: "Aligning export and domestic documentation", page: "Coming Soon" },
];

export const PERSONAS_CLOSING =
  "We also handle GeM registration process for service providers in India generally, and the less common cases — GeM registration process for foreign owned Indian company structures, GeM seller registration for companies without prior experience, and how to register multiple business entities on GeM portal under one group.";

export const LOCATIONS_ROWS: TableRow[] = [
  { location: "GeM registration in Noida", coverage: "Head office; GeM registration company in Noida with on-site support", page: "Coming Soon" },
  { location: "GeM registration in Delhi", coverage: "GeM registration firm in Delhi serving the capital", page: "Coming Soon" },
  { location: "GeM registration support in Delhi NCR", coverage: "Full NCR coverage", page: "Coming Soon" },
  { location: "GeM registration online Noida", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Delhi", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Gurgaon", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Ghaziabad", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Mumbai", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Bangalore", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Hyderabad", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Chennai", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Pune", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Ahmedabad", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Jaipur", coverage: "Remote, end-to-end", page: "Coming Soon" },
  { location: "GeM registration online Lucknow", coverage: "Remote, end-to-end", page: "Coming Soon" },
];

export const LOCATIONS_CLOSING = [
  "Searching for a GeM registration consultant near me or a GeM registration service near me will surface many options. Which consultant is best for GeM registration in Delhi NCR is a fair question to ask, and we would encourage you to ask it of us directly. We also provide GeM registration help for manufacturers in Uttar Pradesh, where a large share of our manufacturing clients are based. The process is online, so location is not a constraint on service quality.",
];

export const MISTAKES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Registering first and thinking about category later",
    text: "Category selection shapes everything downstream. Decide what you are selling and where it belongs before creating the account.",
  },
  {
    title: "Claiming OEM status without documentation",
    text: "If you cannot evidence manufacturing or brand ownership, register in the role you can support. Upgrade later with proper documentation.",
  },
  {
    title: "Treating the profile as finished at approval",
    text: "An approved account with an empty catalogue is a dead account.",
  },
  {
    title: "Using a personal email or mobile for the primary user",
    text: "Registered contact details receive verification and clarification messages. Use business-controlled details, and monitor them.",
  },
  {
    title: "Ignoring the difference between primary and secondary users",
    text: "Sharing primary credentials creates accountability problems. Set up secondary users properly instead.",
  },
  {
    title: "Skipping Udyam or DPIIT linkage",
    text: "Businesses that qualify sometimes never link the credential. The benefits are not automatic.",
  },
  {
    title: "Assuming registration removes product compliance obligations",
    text: "It does not. Mandatory certification requirements continue to apply.",
  },
  {
    title: "Reacting to clarification requests late",
    text: "Clarifications have response windows. An unmonitored inbox is a common cause of avoidable delay.",
  },
  {
    title: "Publishing specifications carelessly",
    text: "Comparison on this platform is specification-driven. Vague specifications reduce your visibility.",
  },
];

export const EXPERT_TIPS: { title: string; text: string }[] = [
  {
    title: "1.",
    text: "Fix your documentation before you touch the portal. Reconcile the legal name across PAN, GST and bank records first. This single step prevents most verification failures.",
  },
  {
    title: "2.",
    text: "Confirm the Aadhaar–mobile linkage of your signatory before you begin. It is the most common hard stop.",
  },
  {
    title: "3.",
    text: "Decide your seller role deliberately. OEM, deemed OEM, reseller and service provider carry different obligations and evidence requirements.",
  },
  {
    title: "4.",
    text: "Build a real catalogue, not a token one. Thin catalogues do not surface in buyer comparisons.",
  },
  {
    title: "5.",
    text: "Write specifications the way a buyer compares them. Comparison parameters matter more than marketing copy here.",
  },
  {
    title: "6.",
    text: "Link your MSME and startup credentials immediately. Preference and exemptions only apply when visible on the profile.",
  },
  {
    title: "7.",
    text: "Understand the buying routes before you bid. Direct purchase, L1, bids and reverse auctions reward different behaviour.",
  },
  {
    title: "8.",
    text: "Learn the bid vocabulary early. EMD, PBG, consignee, CRAC and delivery period carry financial consequences.",
  },
  {
    title: "9.",
    text: "Do not price a reverse auction like a retail negotiation. Know your floor before you enter.",
  },
  {
    title: "10.",
    text: "Sort product certifications in parallel. BIS, BEE, EPR, FSSAI and WPC-ETA work takes longer than registration.",
  },
  {
    title: "11.",
    text: "Protect your seller rating from the first order. Delivery performance is visible to every future buyer.",
  },
  {
    title: "12.",
    text: "Keep a document register with expiry dates. Authorisation letters and certificates lapse quietly.",
  },
];

export const EXPERT_TIPS_CLOSING =
  "For newer businesses, how new startups can win first GeM order usually comes down to two things: a well-specified catalogue in a category with live demand, and correctly linked exemptions that let you bid competitively. GeM registration for DPIIT recognised startups benefits from those relaxations in a way established firms do not get.";

export const TENDERING_ROWS: TableRow[] = [
  {
    parameter: "Access",
    gem: "One registration opens access across departments",
    traditional: "Separate registration or empanelment per department",
  },
  {
    parameter: "Discovery",
    gem: "Buyers search a live catalogue",
    traditional: "Sellers monitor and respond to published notices",
  },
  {
    parameter: "Format",
    gem: "Online and standardised",
    traditional: "Often document-heavy and department-specific",
  },
  {
    parameter: "Buying modes",
    gem: "Direct purchase, L1, bids, reverse auction",
    traditional: "Primarily tender-based",
  },
  {
    parameter: "Entry barrier for small sellers",
    gem: "Lower — policy benefits are built in",
    traditional: "Higher — experience and turnover conditions are common",
  },
  {
    parameter: "Effort profile",
    gem: "Front-loaded into registration and catalogue quality",
    traditional: "Repeated for every tender",
  },
];

export const SELLER_VS_OEM_ROWS: TableRow[] = [
  {
    parameter: "Who it fits",
    seller: "Traders, dealers and authorised resellers",
    oem: "Manufacturers and brand owners",
  },
  {
    parameter: "Brand rights",
    seller: "Sells another party’s brand with authorisation",
    oem: "Lists own brand after brand approval",
  },
  {
    parameter: "Key document",
    seller: "Valid OEM authorisation letter",
    oem: "Brand ownership or manufacturing evidence",
  },
  {
    parameter: "Vendor assessment",
    seller: "Often not applicable",
    oem: "Commonly applicable",
  },
  {
    parameter: "Catalogue control",
    seller: "Constrained by the authorising OEM",
    oem: "Full control over own listings",
  },
  {
    parameter: "Setup effort",
    seller: "Lower",
    oem: "Higher, with more documentation",
  },
];

export const COMPARISON_NOTE =
  "These comparisons describe how the routes differ in practice. Conditions applicable to your category and to individual bids are set by GeM and by the buying department.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is GeM registration?",
    a: "It is the process of creating and verifying a seller account on the Government e-Marketplace so your business can sell to government buyers. Completing it gives you a GeM seller ID.",
  },
  {
    q: "What is the full form of GeM?",
    a: "GeM stands for Government e-Marketplace, the public procurement portal India operates under the Ministry of Commerce and Industry.",
  },
  {
    q: "How to become GeM seller in India?",
    a: "Register your business on the portal, complete verification, finish your profile, and list your products or services in the correct categories. We handle the full sequence.",
  },
  {
    q: "Who is eligible for GeM registration?",
    a: "Registered business entities — proprietorships, partnerships, LLPs, companies, societies, trusts, SHGs and FPOs — along with manufacturers, importers, traders and service providers.",
  },
  {
    q: "Is GeM registration free?",
    a: "Creating an account is not the same as the total cost of becoming an active seller. The platform sets its own charges and deposit requirements, revised from time to time, and professional assistance is charged separately. We confirm the current position before you commit.",
  },
  {
    q: "What documents are required for GeM registration?",
    a: "Typically PAN, Aadhaar of the authorised signatory, GST certificate where applicable, bank proof and constitution documents. Udyam, DPIIT, OEM authorisation and product certificates are added depending on your case.",
  },
  {
    q: "How long does GeM registration take?",
    a: "It depends on documentation completeness, verification outcomes, portal processing and whether vendor assessment applies. Processing time depends on the latest regulatory requirements, so we do not quote a guaranteed number of days.",
  },
  {
    q: "Is GST mandatory for GeM registration?",
    a: "GST is required where your business is legally required to hold a GSTIN. Some categories and seller types operate under exemptions. We check this for your category before filing.",
  },
  {
    q: "Is Udyam registration mandatory for GeM?",
    a: "It is not framed as a universal prerequisite, but it is strongly advisable for eligible businesses because MSE-linked benefits depend on it being linked.",
  },
  {
    q: "What is caution money on GeM?",
    a: "It refers to a security deposit requirement associated with seller accounts. Deposit rules, applicability and amounts are set by GeM policy and have been revised over time, so we verify the current position rather than quote a figure.",
  },
  {
    q: "What is vendor assessment on GeM?",
    a: "A structured evaluation of a seller’s financial credentials and organisational capability, typically associated with OEM status, conducted by an assessment agency.",
  },
  {
    q: "Who conducts vendor assessment?",
    a: "It is carried out through a designated assessment body; the Quality Council of India is associated with the assessment framework for GeM sellers.",
  },
  {
    q: "Is vendor assessment mandatory for every seller?",
    a: "No. Applicability depends on seller role and category. Exemption categories exist.",
  },
  {
    q: "What is the difference between OEM and reseller on GeM?",
    a: "An OEM manufactures or owns the brand and lists it directly. A reseller sells another party’s brand and needs a valid authorisation letter to do so.",
  },
  {
    q: "Can a trader register as OEM on GeM portal?",
    a: "Not by declaration. OEM status requires evidence of manufacturing or brand ownership. A trader normally registers as an authorised reseller.",
  },
  {
    q: "How do I get brand approval on GeM?",
    a: "Through a documented request supported by trademark registration or brand ownership evidence for your own brand, or authorisation from the brand owner otherwise.",
  },
  {
    q: "Can a proprietorship firm register on GeM?",
    a: "Yes. How to register a proprietorship firm on GeM portal is one of the most common cases we handle. Constitution documents are simpler, but PAN, GST and bank details must still reconcile.",
  },
  {
    q: "How to register a private limited company on GeM portal?",
    a: "The process is the same, with board authorisation, incorporation documents and CIN linkage added, and usually a multi-user structure.",
  },
  {
    q: "Can a startup with no turnover register on GeM?",
    a: "Yes. DPIIT-recognised startups may additionally qualify for relaxations on turnover and prior-experience conditions in eligible bids.",
  },
  {
    q: "Can I register more than one business on GeM?",
    a: "Separate registered entities register separately. Structuring matters where a group holds several entities or GSTINs, and should be planned before the first account is created.",
  },
  {
    q: "What is a GeM seller ID?",
    a: "The unique identifier assigned to your verified seller account. It represents your business identity on the platform.",
  },
  {
    q: "Why do GeM registrations get rejected?",
    a: "Mismatches between PAN, GST and bank records, incorrect business type selection, authentication failures, unreadable documents and unsupported OEM claims.",
  },
  {
    q: "What should I do if my registration is rejected?",
    a: "Identify the actual cause rather than resubmitting the same file. Most rejections are documentation issues that can be corrected, and we handle rejection resolution work regularly.",
  },
  {
    q: "How do I check my GeM registration status?",
    a: "Status is visible in your seller account and updates go to your registered contact details — one reason to register with business-controlled email and mobile.",
  },
  {
    q: "What is the validity of GeM registration?",
    a: "The account is not built around a fixed expiry date, but the documents supporting it carry their own validity. Maintaining the profile is what keeps the account usable.",
  },
  {
    q: "Do I need to renew my GeM registration every year?",
    a: "The account is maintained rather than renewed on a fixed annual cycle. The supporting documentation is what genuinely needs renewal.",
  },
  {
    q: "How do I get orders after registering?",
    a: "Through direct purchase, L1 comparison, bids and reverse auctions. A complete, well-specified catalogue in the right categories is what makes you visible.",
  },
  {
    q: "Are MSMEs exempt from EMD on GeM?",
    a: "Exemptions and preferences exist for eligible micro and small enterprises under public procurement policy. Applicability depends on individual bid conditions.",
  },
  {
    q: "What is MSE purchase preference?",
    a: "A policy mechanism giving eligible micro and small enterprises a preferential position in public procurement, subject to valid credentials being linked.",
  },
  {
    q: "Do I need BIS certification to sell products on GeM?",
    a: "It depends on your product. Products covered by mandatory certification schemes must comply regardless of sales channel. Registration does not remove product-level obligations.",
  },
  {
    q: "Is ISO certification required for GeM tenders?",
    a: "Not as a universal registration requirement, but buyers frequently include quality certifications in bid conditions.",
  },
  {
    q: "Do I need a consultant for GeM registration?",
    a: "A simple single-category registration with clean documentation can be done independently. Businesses seek help where OEM status, vendor assessment, multiple entities, catalogue building or a previously rejected application is involved.",
  },
];

export const CTA_HEADING = "Start Your GeM Registration";

export const CTA_PARAGRAPHS = [
  "Government buyers are already purchasing in your category. The question is whether your business is visible to them.",
  "Our team will review your eligibility, confirm the seller role that fits, and prepare a document checklist built for your entity type. You will receive a written scope and a written fee quotation before any work begins — with portal and government charges shown separately from our professional fees.",
  "Talk to a GeM registration expert — send your business details and we will tell you where you stand. If you would prefer to schedule a call for GeM registration, we will work to your timing.",
  "Send documents for GeM registration review — we will confirm what is complete and what needs attention before anything is filed.",
  "Request GeM registration quote — a written GeM registration quotation covering your specific scope, with no obligation to proceed.",
];

export const CTA_TAGLINE =
  "Ornate Quality Services — GeM registration, certification and regulatory compliance support for businesses across India.";
