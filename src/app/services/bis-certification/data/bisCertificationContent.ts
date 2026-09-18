export type TocItem = {
  id: string;
  label: string;
};

export type TableRow = {
  [key: string]: string;
};

export const BIS_CERT_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-bis", label: "What Is BIS Certification?" },
  { id: "key-terms", label: "Key BIS Certification Terms You Should Know" },
  { id: "why-important", label: "Why Is BIS Certification Important for Your Business?" },
  { id: "compliance-system", label: "How BIS Certification Fits Into India's Product Compliance System" },
  { id: "who-needs", label: "Who Needs BIS Certification?" },
  { id: "benefits", label: "Key Benefits of Working With a BIS Certification Partner" },
  { id: "key-features", label: "Key Features of Our BIS Certification Support" },
  { id: "eligibility", label: "Eligibility for BIS Certification" },
  { id: "documents", label: "Documents Required for BIS Certification" },
  { id: "timeline", label: "BIS Certification Timeline" },
  { id: "cost", label: "Cost Factors in BIS Certification" },
  { id: "validity", label: "Validity of BIS Certification" },
  { id: "renewal", label: "BIS Certification Renewal" },
  { id: "challenges", label: "Common Challenges Businesses Face" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "industries", label: "Industries We Serve" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "How BIS Certification Compares to Other Marks" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Started With BIS Certification" },
];

export const BANNER_TITLE = "BIS Certification Services in India — ISI Mark, BIS CRS & FMCS";

export const BANNER_SUBTITLE =
  "BIS certification in India is the government-mandated route that lets manufacturers, importers, and brand owners legally sell notified products in the Indian market.";

export const BANNER_DESCRIPTION =
  "Whether you need BIS registration under the ISI Mark, BIS CRS registration, or FMCS certification for a foreign manufacturing unit, this page explains the full BIS certification process — in plain business English, with no jargon left unexplained.";

export const HERO_ITEMS: string[] = [
  "One consulting partner across BIS certification schemes — ISI Mark, BIS CRS, and FMCS",
  "Support for Indian manufacturers, foreign manufacturers, importers, OEMs, brand owners, startups, and MSMEs",
  "Documentation, factory inspection coordination, and application filing handled end to end",
  "Clear, honest guidance — we never guarantee approval timelines or outcomes that depend on BIS's own review",
  "Renewal and surveillance-audit support so your BIS license does not lapse",
];

export const HERO_CLOSING =
  "Talk to our team to understand which BIS certification scheme applies to your product, or explore the sections below to research the process, documents, and requirements yourself.";

export const INTRO_PARAGRAPHS: string[] = [
  "If you manufacture, import, or sell products in India that fall under a notified Quality Control Order (QCO), you are required to hold a valid BIS certification before that product can be legally sold, distributed, or imported. BIS certification is issued by the Bureau of Indian Standards, the national standards body responsible for product safety and quality certification in India.",
  '"BIS Certification" is not a single scheme — it is an umbrella term that covers distinct certification routes, each designed for a different situation: the ISI Mark (Scheme-I) for domestic manufacturers, the Compulsory Registration Scheme (BIS CRS, Scheme-II) mainly used for electronics and IT products, and the Foreign Manufacturers Certification Scheme (FMCS) for manufacturing units located outside India. This page acts as the parent guide to these routes; each scheme also has its own dedicated page with scheme-specific detail.',
  "Compliance becomes mandatory the moment your product category is notified under a quality control order — not when it becomes convenient for your production or import schedule. Getting this sequencing wrong is one of the most common (and costly) mistakes manufacturers and importers make, and it is exactly where a structured BIS certification process, started early, protects your business.",
  "On this page you will find a plain-English explanation of what BIS certification is, who needs it, the documents required, cost factors, validity and renewal rules, and how our team supports you at every stage — without ever promising an outcome that is ultimately the Bureau of Indian Standards' own decision.",
];

export const WHAT_IS_INTRO =
  "BIS certification is the process of getting a product formally certified against the relevant Indian Standard (IS Code) by the Bureau of Indian Standards, so that it can be sold, imported, or distributed in India. Depending on the product category and where it is manufactured, this certification is issued under one of these schemes.";

export const SCHEME_ROWS: TableRow[] = [
  {
    scheme: "ISI Mark (Scheme-I)",
    who: "Indian manufacturers",
    summary:
      "The classic BIS product certification and Standard Mark most consumers recognise on Indian-made goods.",
  },
  {
    scheme: "BIS CRS Registration (Scheme-II)",
    who: "Manufacturers of notified electronics, IT and similar categories",
    summary:
      "Compulsory Registration Scheme certification — a registration-based route rather than a licence-based one.",
  },
  {
    scheme: "FMCS Certification",
    who: "Foreign manufacturers exporting to India",
    summary:
      "Foreign Manufacturers Certification Scheme — lets an overseas factory get BIS certification without local manufacturing.",
  },
];

export const WHAT_IS_CLOSING =
  "Each scheme has its own product manual, application form, and testing requirements, but they share the same underlying purpose: giving Indian consumers and buyers confidence that a product meets a recognised Indian Standard, and giving your business the legal right to sell that product in India. Every scheme is administered under the Bureau of Indian Standards Act and BIS (Conformity Assessment) Regulations, 2018.";

export const TERMS_INTRO =
  "BIS certification comes with its own vocabulary. Here are the terms and government bodies you'll come across most often, explained simply:";

export const TERMS_ROWS: TableRow[] = [
  {
    term: "BIS",
    meaning:
      "The Bureau of Indian Standards — India's national standards body, and the authority that issues BIS certification.",
  },
  {
    term: "CRS",
    meaning:
      "Compulsory Registration Scheme — Scheme-II, the registration-based BIS certification route mainly used for electronics and IT products.",
  },
  {
    term: "FMCS",
    meaning:
      "Foreign Manufacturers Certification Scheme — the BIS route for manufacturing units located outside India.",
  },
  {
    term: "Scheme-I",
    meaning: "The formal name for the ISI Mark certification route, used mainly by Indian manufacturers.",
  },
  {
    term: "Scheme-II",
    meaning: "The formal name for the BIS CRS registration route.",
  },
  {
    term: "QCO",
    meaning:
      "Quality Control Order — the government notification that makes BIS certification mandatory for a specific product category.",
  },
  {
    term: "IS Code",
    meaning: "The specific Indian Standard a product must be tested and certified against.",
  },
  {
    term: "AIR",
    meaning:
      "Authorized Indian Representative — required for foreign manufacturers applying without a local Indian entity.",
  },
  {
    term: "MeitY",
    meaning:
      "Ministry of Electronics and Information Technology — relevant for several notified electronics categories.",
  },
  {
    term: "DPIIT",
    meaning:
      "Department for Promotion of Industry and Internal Trade — involved in India's broader industrial and regulatory policy.",
  },
  {
    term: "NABL",
    meaning:
      "National Accreditation Board for Testing and Calibration Laboratories — accredits the labs used for BIS-related sample testing.",
  },
  {
    term: "DGFT",
    meaning: "Directorate General of Foreign Trade — relevant to import/export documentation alongside BIS compliance.",
  },
  {
    term: "Type Test Report",
    meaning: "The formal test report confirming a product sample meets the applicable Indian Standard.",
  },
  {
    term: "Grant of License",
    meaning: "The formal BIS approval stage where a licence or registration number is issued.",
  },
  {
    term: "Product Manual",
    meaning: "The BIS-prescribed technical document describing your product against the applicable IS Code.",
  },
  {
    term: "CE Marking",
    meaning: "A separate EU conformity marking — not a substitute for BIS certification in India.",
  },
  {
    term: "HSN Code",
    meaning:
      "The customs classification code for your product, relevant to import documentation alongside BIS compliance.",
  },
  {
    term: "Import License",
    meaning: "A separate import authorisation that may be required depending on the product category.",
  },
  {
    term: "Customs Clearance",
    meaning:
      "The customs process a notified product must clear, which typically requires proof of valid BIS certification.",
  },
  {
    term: "Notified Product Category",
    meaning: "A product category that has been formally brought under a mandatory Quality Control Order.",
  },
  {
    term: "Sample Testing",
    meaning: "The lab testing step that confirms your product sample meets the applicable Indian Standard.",
  },
  {
    term: "Batch Testing",
    meaning: "Testing conducted on a specific production batch, as required under some BIS schemes.",
  },
  {
    term: "Self-Certification",
    meaning:
      "A compliance declaration route available for certain product categories, where applicable.",
  },
  {
    term: "Third-Party Testing",
    meaning:
      "Testing carried out by an independent, accredited laboratory rather than the manufacturer itself.",
  },
  {
    term: "Standard Mark",
    meaning: "The certification mark (such as the ISI Mark) applied to a BIS-certified product.",
  },
  {
    term: "Hallmarking",
    meaning: "BIS's separate certification scheme specifically for gold and silver jewellery purity.",
  },
  {
    term: "Hallmarking Scheme",
    meaning: "The formal BIS scheme covering hallmarking of precious metals.",
  },
  {
    term: "Ecomark Scheme",
    meaning: "BIS's voluntary scheme recognising environment-friendly products.",
  },
  {
    term: "Central Consumer Protection Authority",
    meaning:
      "The authority responsible for consumer protection matters, which can intersect with product compliance.",
  },
  {
    term: "National Physical Laboratory",
    meaning:
      "India's national metrology institute, relevant to measurement standards underlying certification.",
  },
  {
    term: "BIS Regional Office",
    meaning:
      "The regional BIS office that typically handles applications and inspections for a given territory.",
  },
  {
    term: "BIS Branch Office",
    meaning: "A local BIS office that may be the first point of contact for applicants.",
  },
  {
    term: "Product Certification Department",
    meaning: "The BIS department responsible for product certification schemes.",
  },
  {
    term: "BIS Care Portal",
    meaning:
      "One of the official BIS portals used for certain certification and grievance-related processes.",
  },
  {
    term: "BIS Sathi Portal",
    meaning: "An official BIS portal used for specific application and service processes.",
  },
  {
    term: "Application Form V",
    meaning: "One of the standard BIS application forms used in the certification process.",
  },
  {
    term: "WTO TBT Agreement",
    meaning:
      "The international Technical Barriers to Trade agreement that shapes how standards like BIS interact with global trade.",
  },
  {
    term: "ISO/IEC 17065",
    meaning:
      "The international standard for certification bodies, relevant to how conformity assessment is structured globally.",
  },
  {
    term: "ISO/IEC 17025",
    meaning: "The international standard for testing and calibration laboratory competence.",
  },
  {
    term: "Certificate of Conformity",
    meaning: "A document confirming a product conforms to the applicable standard.",
  },
  {
    term: "Preferential Market Access",
    meaning:
      "A government policy consideration that can favour domestically certified or manufactured products in procurement.",
  },
];

export const WHY_IMPORTANT_INTRO =
  "For a notified product, BIS certification is not optional marketing — it is the legal precondition for selling in India. But beyond compliance, it also shapes how your product is perceived and where it can be sold.";

export const WHY_IMPORTANT_ITEMS: { title: string; text: string }[] = [
  {
    title: "Legal market access",
    text: "without a valid BIS certificate, a notified product cannot be legally sold, imported, or listed on major Indian e-commerce marketplaces.",
  },
  {
    title: "Consumer trust",
    text: "the ISI Mark and other BIS marks are among the most recognised quality marks India consumers look for on electronics, appliances, and machinery.",
  },
  {
    title: "Customs and import compliance",
    text: "importers need BIS certification (typically via FMCS or CRS, as applicable) before goods can clear Indian customs for a notified category.",
  },
  {
    title: "Government tender eligibility",
    text: "many public-sector and government procurement listings require BIS-certified products as a baseline eligibility condition.",
  },
  {
    title: "Risk reduction",
    text: "BIS certification reduces the risk of product seizure, market surveillance action, or denied customs clearance for notified categories.",
  },
  {
    title: "Brand credibility with B2B buyers",
    text: "distributors and large retailers frequently ask for proof of BIS certification before onboarding a new manufacturer or importer.",
  },
];

export const WHY_IMPORTANT_CLOSING =
  "In short, BIS certification affects whether your product can be sold at all, how quickly it clears customs, and how it is perceived by both retailers and end consumers in the Indian market.";

export const COMPLIANCE_INTRO =
  "BIS certification does not exist in isolation — it is one part of a wider product safety and quality control order compliance system in India. Related topics you may also come across while researching this include:";

export const COMPLIANCE_ITEMS: string[] = [
  "Product safety standards India and the broader Indian Standards IS code system that BIS certification is built on.",
  "Conformity assessment India — the general process of checking that a product conforms to a required standard, of which BIS certification is one form.",
  "Government product safety certification and the government mandated product testing that underpins it.",
  "Indian Standards Institution mark — the historical name associated with today's ISI Mark and Standard Mark system.",
  "Compulsory certification scheme India — the general regulatory concept behind BIS CRS and similar mandatory schemes.",
  "Notified products under BIS — the official list of product categories brought under a quality control order.",
  "Consumer product safety India and product quality assurance India as the broader policy goals BIS certification serves.",
  "Indian government product approval and product licensing India as related regulatory concepts.",
  "Type approval India and conformity marking scheme India as terms sometimes used interchangeably with product certification.",
  "National standards body India and national quality mark India, referring to BIS's overall role.",
  "Product safety mark India, Indian standard specification, and product conformity certificate India as related documentation concepts.",
  "Quality assurance certification India and India regulatory certification body as the compliance ecosystem BIS operates within.",
  "India product testing laboratory and accredited testing laboratory India — the lab infrastructure that supports BIS sample testing.",
  "Standard mark licensing India and product certification body India, describing how the certification and licensing function works.",
  "India quality infrastructure and product standardization India as the national policy context.",
  "India product registration authority and product homologation India, terms sometimes used for similar regulatory approval processes.",
  "India safety mark requirements and India certification body accreditation, relevant to how BIS and its recognised labs are accredited.",
  "Product testing standards India, India quality control authority, and India certification mark verification, covering how compliance is checked and confirmed.",
  "India quality control order 2026 update — a reminder that notified categories are reviewed and expanded periodically, so it's worth checking current status for your product.",
];

export const COMPLIANCE_CLOSING =
  "Understanding these adjacent terms helps clarify why BIS certification is treated as core compliance infrastructure — not a one-off form to fill out — by manufacturers, importers, and government buyers alike.";

export const WHO_NEEDS_INTRO =
  "BIS certification requirements apply across a wide range of businesses, not just large manufacturers. If your product falls under a notified quality control order, certification is mandatory regardless of your company's size.";

export const WHO_NEEDS_ITEMS: string[] = [
  "Indian manufacturers producing electronics, appliances, machinery, or other notified categories, who need BIS certification for manufacturers to sell domestically.",
  "Importers who need BIS certification for importers before a notified product can clear Indian customs.",
  "Foreign manufacturers exporting to India, who typically use BIS certification for foreign manufacturers via the FMCS route.",
  "OEMs producing under a brand owner's specification, where BIS certification for OEM and the brand owner's own registration both need to be considered.",
  "Brand owners and private-label sellers, who need BIS certification for brand owners even when manufacturing is outsourced.",
  "Startups and MSMEs launching a notified product, where BIS certification for startups and BIS certification for MSME both apply the same core requirements as larger companies.",
  "Exporters, where BIS certification for exporters may still be relevant if the same product line is also sold in the Indian domestic market.",
  "Foreign manufacturers without a local entity, who must appoint an Authorized Indian Representative (the AIR for BIS certification) to interact with BIS on their behalf.",
];

export const WHO_NEEDS_CLOSING =
  "India certification for startups and MSMEs follows the same documentation and testing standard as any other applicant — there is no reduced compliance bar, though the process can often be planned more efficiently when started early and guided correctly the first time.";

export const BENEFITS_ITEMS: string[] = [
  "End-to-end BIS certification services — from scheme identification to documentation, application filing, and post-approval support — under a single point of contact.",
  "Government-approved testing lab coordination — we help you get your samples to a NABL lab for BIS testing so results are accepted by BIS without avoidable delays.",
  "Reduced back-and-forth with BIS — a properly prepared application, with a documented compliance roadmap for new manufacturers in India, cuts down on clarification queries.",
  "Support across schemes — so if your product portfolio spans ISI Mark, BIS CRS, and FMCS products, you deal with one team, not several.",
  "Ongoing compliance support — including guidance on the BIS certification surveillance audit and renewal cycle, so your certificate stays valid.",
  "Honest expectation-setting — we explain what BIS testing and inspection typically involve, without promising an approval timeline that is ultimately BIS's decision.",
];

export const BENEFITS_NOTE =
  "We do not guarantee approval outcomes or fixed approval timelines — final decisions rest with the Bureau of Indian Standards. What we do guarantee is a properly prepared, professionally filed, and actively followed-up application, delivered as genuinely end-to-end BIS certification services and backed by fast BIS certification approval support wherever the process allows it.";

export const FEATURES_ITEMS: { title: string; text: string }[] = [
  {
    title: "ISI Mark Certification (Scheme-I)",
    text: "For Indian manufacturers, we support the full ISI mark registration process — from identifying the applicable IS Code, to sample testing coordination, to filing and tracking your BIS ISI certification application.",
  },
  {
    title: "BIS CRS Registration (Scheme-II)",
    text: "For notified electronics and IT categories, we support BIS CRS registration under the Compulsory Registration Scheme, including BIS product registration and test report coordination.",
  },
  {
    title: "FMCS Certification",
    text: "For overseas factories, we support FMCS certification end to end, including Authorized Indian Representative appointment support and factory-audit preparation guidance for foreign manufacturers.",
  },
];

export const ELIGIBILITY_INTRO =
  "Eligibility depends primarily on your product category, not your company's size or years in business. The starting question is always the same: is your product listed under a mandatory quality control order?";

export const ELIGIBILITY_ITEMS: string[] = [
  "Mandatory BIS certification applies once your product category is notified under a mandatory quality control order — at that point, certification is a legal requirement, not a choice.",
  "Voluntary BIS certification remains available for product categories that are not yet notified, for businesses that want the ISI Mark as a quality differentiator.",
  "BIS certification eligibility does not depend on company turnover, years of operation, or manufacturing scale — a new manufacturer and an established one follow the same core requirements.",
  "Mandatory product testing India requirements apply once a category falls under a quality control order, regardless of whether the manufacturer is Indian or foreign.",
  "For sellers on government procurement platforms, India GeM portal product eligibility for several categories also requires an underlying valid BIS certificate.",
];

export const DOCUMENTS_INTRO =
  "Exact document checklists vary slightly by scheme and product category. In general, applicants should be prepared to provide:";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Company registration proof",
    purpose: "Establishes the legal applicant entity",
    mandatory: "Mandatory",
    notes: "Varies by entity type (proprietorship, private limited, LLP, etc.)",
  },
  {
    document: "Product technical specification / Product Manual",
    purpose: "Confirms the product matches the applicable IS Code",
    mandatory: "Mandatory",
    notes: "Required in the BIS-prescribed Product Manual format",
  },
  {
    document: "Manufacturing process flow chart",
    purpose: "Shows how the product is made, for factory inspection reference",
    mandatory: "Mandatory",
    notes: "Applies to manufacturer applicants",
  },
  {
    document: "Test reports / sample test results",
    purpose: "Confirms the product meets the Indian Standard",
    mandatory: "Mandatory",
    notes: "Testing is typically done through a BIS-recognised or NABL-accredited lab",
  },
  {
    document: "Factory address and layout details",
    purpose: "Used to schedule the BIS factory inspection",
    mandatory: "Mandatory",
    notes: "Applies to ISI Mark, BIS CRS, and FMCS applicants with a manufacturing site",
  },
  {
    document: "Authorized Indian Representative appointment letter",
    purpose: "Required for applicants without an Indian entity",
    mandatory: "Mandatory for foreign manufacturers",
    notes: "Specifically applies to the FMCS route",
  },
  {
    document: "Import/export documentation (as applicable)",
    purpose: "Supports customs and import-related compliance checks",
    mandatory: "Optional / case-by-case",
    notes: "Relevant mainly to importers and foreign manufacturers",
  },
  {
    document: "Trademark or brand ownership proof (if applicable)",
    purpose: "Confirms right to use the brand name on the certified product",
    mandatory: "Optional / case-by-case",
    notes: "Relevant for brand owners and OEM arrangements",
  },
];

export const DOCUMENTS_CLOSING =
  "We help you prepare and organise the complete BIS certification documents list for your specific scheme — offered as part of our broader BIS certification documentation services and BIS certification and documentation agency support — so nothing is missing when the application is filed. India compliance documentation services of this kind are especially useful for applicants filing under more than one scheme at the same time.";

export const TIMELINE_PARAGRAPHS: string[] = [
  "Processing time depends on the latest regulatory requirements, the completeness of your application, the scheme involved, and how quickly test results and factory inspection are completed. We do not publish a fixed number of days, because the actual BIS certification timeline is set by the Bureau of Indian Standards' own internal review process, not by any consultant.",
  "What we can influence is everything on your side of the process — how completely documentation is prepared, how quickly test samples are submitted, and how promptly any BIS query is answered. For applicants who need an urgent BIS certification service, our role is to expedite the BIS certification process on the applicant's side, not to bypass BIS's own review. The same applies to the India product certification timeline more generally — we manage what we control and stay transparent about what we don't.",
];

export const COST_INTRO =
  "We do not display a fixed BIS certification price list on this page, because actual cost depends on your specific product, scheme, and testing requirements. Instead, here are the factors that typically influence BIS certification cost:";

export const COST_FACTORS: { title: string; text: string }[] = [
  {
    title: "Which scheme applies",
    text: "BIS CRS registration fees, ISI mark certification fees, and FMCS certification cost structures are not identical.",
  },
  {
    title: "Product category and complexity",
    text: "BIS certification cost for electronics, BIS certification cost for machinery, and BIS certification cost for toys can differ based on applicable IS Codes and test parameters.",
  },
  {
    title: "Testing requirements",
    text: "the number of parameters to be tested and whether repeat testing is needed can affect overall cost.",
  },
  {
    title: "Documentation support needed",
    text: "the BIS certification documentation service cost depends on how much preparation and coordination support is required.",
  },
  {
    title: "Factory location",
    text: "BIS certification fees for a foreign manufacturer typically differ from a domestic applicant due to inspection logistics and FMCS-specific requirements.",
  },
  {
    title: "Annual maintenance and renewal",
    text: "ongoing BIS certification annual maintenance contract obligations and renewal costs continue after initial approval.",
  },
];

export const COST_CLOSING =
  "We are happy to walk you through a BIS certification cost calculator style breakdown for your specific product once we understand your scheme and category, and to compare BIS certification consultant fees transparently against the scope of work involved — but we will not quote a number without first understanding your product.";

export const VALIDITY_PARAGRAPHS: string[] = [
  "BIS certification validity period varies by scheme and licence type. Rather than quoting a fixed number of years — which can change with regulatory updates — we recommend verifying the current validity period for your specific scheme and product category with the relevant BIS authority, and we assist with this verification as part of our support.",
  "What stays consistent across schemes is that a BIS licence or certificate is not indefinite — it requires periodic renewal and, in most cases, is subject to surveillance audits during its validity period to confirm continued compliance.",
];

export const RENEWAL_INTRO =
  "Renewal should be planned well before your existing certificate or licence expires, since a lapsed BIS certification can interrupt your ability to legally sell or import the product.";

export const RENEWAL_ITEMS: string[] = [
  "We track your renewal window and flag it in advance, so you are never caught off guard.",
  "We support the BIS certification renewal process — including any updated documentation or re-testing BIS may require at renewal.",
  "If you need to renew BIS license or renew BIS certificate online, we help prepare and file the renewal application through the applicable BIS portal.",
  "Product certification renewal in India often also requires confirming that your product specification and manufacturing process have not changed materially since the original grant.",
];

export const RENEWAL_CLOSING =
  "As a BIS certification renewal service provider, our approach is to start the renewal conversation early — not at the last moment — so there is time to resolve any documentation gap without risking a lapse in your licence.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Incomplete or mismatched documentation",
    text: "one of the most frequent BIS certification rejection reasons is a Product Manual or specification that does not match the actual manufactured product.",
  },
  {
    title: "Choosing the wrong scheme",
    text: "applying under ISI Mark when FMCS applies (or vice versa) because the manufacturing location was not correctly assessed upfront.",
  },
  {
    title: "Factory inspection surprises",
    text: "not being prepared when BIS schedules a factory inspection, leading to avoidable delays or a request to schedule BIS factory inspection again.",
  },
  {
    title: "Underestimating testing time",
    text: "not accounting for the time needed for sample testing and, in some cases, repeat testing.",
  },
  {
    title: "Missing the renewal window",
    text: "treating BIS certification as a one-time task rather than an ongoing compliance obligation with periodic surveillance audits.",
  },
  {
    title: "Foreign manufacturers underestimating AIR requirements",
    text: "not appointing an Authorized Indian Representative early enough in the FMCS process.",
  },
];

export const CHALLENGES_CLOSING =
  "Most of these issues are preventable with early planning and a properly organised application — which is exactly where structured BIS certification support makes the biggest difference.";

export const HOW_WE_HELP_INTRO =
  "Ornate Quality Service Pvt Ltd provides end-to-end BIS certification consultant support across ISI Mark, BIS CRS, and FMCS. Whether you want to hire a BIS certification consultant for a single product or need a BIS certification consultant for multiple product categories, our support typically includes:";

export const HOW_WE_HELP_ITEMS: string[] = [
  "Scheme identification and BIS certification advisory services tailored to your product and manufacturing location.",
  "Documentation and coordination support — including BIS certification documentation and coordination for your full application file.",
  "Sample testing coordination with a BIS-recognised or NABL-accredited lab.",
  "Application filing and follow-up, including responding to BIS clarification queries.",
  "Factory inspection preparation guidance, including scheduling support for a BIS factory inspection.",
  "BIS certification consultant for AIR appointment — helping foreign manufacturers appoint and coordinate with an Authorized Indian Representative.",
  "Ongoing compliance support, including BIS certification surveillance audit preparation and renewal management.",
  "Support across industries — including BIS certification consultant for electronics and BIS certification consultant for machinery categories.",
];

export const HOW_WE_HELP_MID =
  "We work with Indian manufacturers, importers, foreign manufacturers, OEMs, brand owners, startups, and MSMEs — as a BIS certification consultant for startups and a BIS certification consultant for MSME, the approach is scaled to your team's internal documentation capacity, not simplified in terms of compliance requirements.";

export const HOW_WE_HELP_RANGE =
  "Depending on how much of the process you want to hand off, our support can range from focused documentation help to corporate BIS certification services covering an entire product portfolio — including BIS certification project management services, BIS certification turnkey solutions, and BIS sample testing coordination services for larger applicants.";

export const HOW_WE_HELP_EXTRA: string[] = [
  "BIS certification service package options for a single product or a full portfolio, with BIS certification consultation booking available before you commit.",
  "BIS certification EMI payment options may be discussed for larger engagements — ask our team what is currently available.",
  "Support whether you are looking for a BIS certification agency, a BIS certification company, or an individual BIS registration consultant and BIS licensing consultant for a specific filing.",
  "Guidance from a BIS certification expert on BIS sample testing and interpreting your BIS test report before submission.",
  "Help identifying whether QCO compliance certification or Quality Control Order certification applies to a category you're evaluating.",
];

export const WHY_CHOOSE_ITEMS: string[] = [
  "Experience across all four BIS certification schemes, rather than specialising in only one — useful if your product portfolio spans multiple categories.",
  "A BIS certification firm with multi-industry experience, having supported applications across electronics, machinery, and other notified categories.",
  "Transparent process — we explain each step of the BIS certification process with proven track record language you can verify, rather than vague promises.",
  "Professional, responsive communication — as a BIS certification service provider in India, we treat documentation delays and BIS queries as urgent, not routine.",
  "Support available for businesses in Delhi NCR, Noida, Delhi, Mumbai, Bengaluru, and across India — whether you are looking for a BIS certification consultant in Delhi NCR, a BIS certification consultant in Noida, a BIS certification consultant in Mumbai, or a BIS certification consultant in Bengaluru, our process and documentation standards remain the same nationwide.",
  "Certified BIS compliance professionals who stay current on regulatory changes, including Quality Control Order updates.",
];

export const WHY_CHOOSE_MID =
  "We aim to be the best BIS certification consultant in India for businesses that want one accountable partner instead of juggling multiple point solutions for documentation, testing coordination, and application filing. Whether you are comparing a BIS certification service provider India-wide or searching for a reliable BIS certification agency, a BIS licensing agency India option, or a BIS compliance consulting firm closer to your own city, our documentation standards and process discipline stay the same nationwide.";

export const WHY_CHOOSE_EXTRA: string[] = [
  "Recognised among businesses researching top BIS certification companies India for consistent, professional communication.",
  "A professional BIS certification consultant and experienced BIS certification expert team, not a single-person operation.",
  "Support if you are simply searching for BIS certification services near me, a BIS registration consultant near me, or a BIS certification consultant near me and want a properly vetted option.",
  "Affordable BIS certification consultant options for startups and MSMEs, without cutting corners on documentation quality.",
];

export const INDUSTRIES_ITEMS: string[] = [
  "Electronics and IT hardware manufacturers and importers — BIS certification for electronics is one of the most common category groups under both ISI Mark and BIS CRS.",
  "Consumer appliance manufacturers and brand owners selling under private label.",
  "Foreign manufacturing units exporting finished goods to India under the FMCS route.",
  "E-commerce sellers and online marketplace vendors, where India online seller product certification requirements apply to several notified categories.",
  "Startups and MSMEs launching a new notified product for the first time in the Indian market.",
];

export const MISTAKES_ITEMS: string[] = [
  "Waiting until a product is already in the market to start the BIS certification application — this can expose the business to market surveillance action.",
  "Submitting a Product Manual that does not exactly match the manufactured product's technical specification.",
  "Assuming voluntary BIS certification rules apply when the category has since become a mandatory quality control order.",
  "Not budgeting time for a BIS certification surveillance audit after the initial certificate is granted.",
  "Foreign manufacturers delaying the appointment of an Authorized Indian Representative, which can stall the entire FMCS application.",
  "Letting a certificate lapse by not starting the BIS certification renewal process early enough.",
];

export const EXPERT_TIPS: string[] = [
  "Confirm your product's exact classification against the current quality control order list in India before assuming which scheme applies — categories and QCOs are updated periodically.",
  "Keep your Product Manual, technical drawings, and manufacturing process documentation version-controlled, so any product change is easy to cross-reference during a factory inspection.",
  "If you sell the same product to Indian and foreign markets, plan your India certification for startups and MSMEs process alongside — not after — export documentation.",
  "For multi-scheme portfolios, sequence your applications: this can reduce duplicate testing costs across schemes when products share common components.",
  "Start renewal conversations at least a few months before expiry, not at the last minute, so there is time to address any documentation gap without a compliance lapse.",
];

export const COMPARISON_INTRO =
  "Businesses selling internationally sometimes ask how BIS certification relates to other well-known certification marks. Here is a general comparison, based on scope rather than specific technical requirements (which should always be verified against the current official standard for your product):";

export const COMPARISON_ROWS: TableRow[] = [
  {
    comparison: "BIS certification vs ISO certification",
    distinction:
      "BIS certification is a mandatory, product-specific certification required to legally sell a notified product in India. ISO Certification is a voluntary management-system certification (for example, covering quality or environmental management processes) and does not by itself satisfy a product-level BIS requirement.",
  },
  {
    comparison: "BIS certification vs CE marking",
    distinction:
      "BIS certification applies to the Indian market and is issued by the Bureau of Indian Standards against an Indian Standard (IS Code). CE Marking is a separate self-declaration/conformity marking used for products sold in the European Economic Area, based on EU directives — the two are not interchangeable, and a product needing to be sold in both markets typically requires both certifications independently.",
  },
];

export const COMPARISON_CLOSING =
  "If your business already holds ISO Certification or CE Marking, it can support your overall quality documentation, but it does not replace the BIS certification your notified product needs for the Indian market.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "How do you calculate BIS certification consultant fees?",
    a: "It depends on your product's testing requirements, the scheme involved, and the scope of documentation and coordination support needed — we walk through this with you before quoting anything.",
  },
  {
    q: "Can startups get a phased or milestone-based engagement?",
    a: "In many cases, yes — we can discuss a phased engagement structure depending on your product roadmap and cash-flow planning; the exact structure is agreed case by case.",
  },
  {
    q: "Can I get a cost estimate before starting the engagement?",
    a: "Yes, once we understand your product, scheme, and testing scope, we can give you a cost breakdown before you commit to the engagement.",
  },
  {
    q: "How do you help avoid duplicate testing costs across schemes?",
    a: "By reviewing your full product portfolio upfront, we can often identify where the same test parameters or lab visits can be planned together across schemes, reducing repeat testing costs.",
  },
  {
    q: "What is your fee structure — fixed or milestone-based?",
    a: "Our fee structure is discussed transparently based on the scope of work for your specific scheme and product — we do not publish a single fixed number because requirements vary.",
  },
  {
    q: "Can you assist with budgeting for annual license and testing fees?",
    a: "Yes — we can help you plan ahead for recurring annual licence fees and periodic testing costs so they are not a surprise.",
  },
  {
    q: "How do I apply for BIS certification?",
    a: "You start by identifying the correct scheme for your product (ISI Mark, BIS CRS, or FMCS), then prepare documentation, complete sample testing, and file the application through the applicable BIS portal.",
  },
  {
    q: "How much does BIS certification cost in India?",
    a: "Cost depends on your product category, scheme, and testing requirements — we do not quote a fixed price without first reviewing your specific product.",
  },
  {
    q: "Can a foreign company apply for BIS certification without an Indian office?",
    a: "Yes, through the Foreign Manufacturers Certification Scheme (FMCS), a foreign company can apply without a local office, provided it appoints an Authorized Indian Representative.",
  },
  {
    q: "How do I renew my BIS certificate?",
    a: "Renewal involves confirming your product specification hasn't changed, updating any required documentation, and filing a renewal application before your existing certificate expires — we manage this process for you.",
  },
  {
    q: "How do I get an ISI mark for my product?",
    a: "The ISI mark is obtained by applying under Scheme-I, getting your product tested against the applicable Indian Standard, and successfully completing BIS's factory inspection and review process.",
  },
  {
    q: "Can a startup get BIS certification?",
    a: "Yes — there is no reduced compliance bar for startups. The same documentation and testing standards apply, though early planning makes the process considerably smoother.",
  },
  {
    q: "How do foreign manufacturers get an ISI mark?",
    a: "Foreign manufacturers apply under FMCS, appoint an Authorized Indian Representative, and go through the same testing and factory inspection requirements as domestic applicants, adapted for an overseas facility.",
  },
  {
    q: "How is the BIS certification fee calculated?",
    a: "The certification fee itself is set by BIS and varies by scheme and product category; consultant fees (where applicable) are separate and depend on the scope of documentation and coordination support you need.",
  },
  {
    q: "What is included in a BIS certification consultant's service package?",
    a: "Our service package typically covers scheme identification, documentation preparation, testing coordination, application filing, and follow-up support — the exact scope is confirmed with you upfront.",
  },
  {
    q: "What documents should I keep ready before contacting a consultant?",
    a: "Company registration proof, your product's technical specification/Product Manual, and any existing test reports are a good starting point — we'll confirm the complete list for your scheme.",
  },
  {
    q: "Do I need BIS certification to sell on Amazon or Flipkart?",
    a: "If your product falls under a notified category, yes — major marketplaces increasingly require proof of valid BIS certification before listing approval.",
  },
  {
    q: "Can Ornate Quality Services handle BIS certification for multiple product lines?",
    a: "Yes, ornate quality service pvt ltd supports applicants with multiple product lines across different BIS schemes under one coordinated engagement.",
  },
  {
    q: "How soon can I start selling after getting BIS certification?",
    a: "That depends on how quickly your certificate is granted, which is set by BIS's own review timeline — we help make sure delays on your side of the process don't add to it.",
  },
  {
    q: "Will you help with factory inspection scheduling and preparation?",
    a: "Yes, we help you prepare for the factory inspection and coordinate scheduling with BIS wherever possible.",
  },
  {
    q: "Do you assist with appointing an Authorized Indian Representative?",
    a: "Yes — for foreign manufacturers applying under FMCS, we assist with identifying and coordinating the Authorized Indian Representative appointment.",
  },
  {
    q: "Can you help if my BIS application was already rejected once?",
    a: "Yes, we review what led to the earlier rejection, correct the underlying documentation or specification gap, and support a fresh, properly prepared application.",
  },
  {
    q: "What is your typical turnaround time for BIS CRS registration?",
    a: "Turnaround time depends on BIS's own review process and is not something we control or guarantee — we focus on making sure nothing on your side causes avoidable delay.",
  },
  {
    q: "Do you provide support for BIS license renewal every year?",
    a: "Yes, we track your renewal window in advance and support the annual renewal filing so your licence does not lapse.",
  },
  {
    q: "Can you help a foreign manufacturer with no India presence?",
    a: "Yes — we specifically support foreign manufacturers with no existing India presence through the FMCS and Authorized Indian Representative route.",
  },
  {
    q: "What if my product falls under more than one BIS scheme?",
    a: "Yes — if your product falls under more than one BIS scheme, we assess all applicable requirements together and plan a single coordinated application approach rather than treating them separately.",
  },
];

export const CTA_HEADING = "Get Started With BIS Certification";

export const CTA_INTRO =
  "Whether you need to register for BIS certification for the first time, get BIS certification for my product currently in development, or renew an existing BIS license, our team can guide you through the correct scheme, documentation, and process — with clear, honest expectations at every step.";

export const CTA_ITEMS: string[] = [
  "Book BIS certification service support tailored to your product category and scheme, or simply request BIS certification quote information to start the conversation.",
  "Get a documented compliance roadmap before you begin manufacturing or importing.",
  "Get in touch to register product under BIS the right way the first time — whether you want to get BIS license online, get ISI mark for product, or buy BIS certification service support for an existing application.",
  "If timing matters, ask about our approach to help you get BIS certificate fast within what BIS's own review process allows.",
];

export const CTA_CLOSING =
  "Reach out to discuss your product, and we will help you understand exactly what BIS certification for your product will involve — no guesswork, no fabricated promises about approval timelines.";
