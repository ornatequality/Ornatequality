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

export const TRADEMARK_TOC: TocItem[] = [
  { id: "what-this-page-covers", label: "Trademark Registration: What This Page Covers" },
  { id: "what-is", label: "What Is Trademark Registration?" },
  { id: "why-matters", label: "Why Trademark Registration Matters for Your Business" },
  { id: "who-needs", label: "Who Needs Trademark Registration?" },
  { id: "industries", label: "Industries We File For" },
  { id: "benefits", label: "Key Benefits of Registering Your Trademark" },
  { id: "service-includes", label: "What Our Trademark Registration Service Includes" },
  { id: "eligibility", label: "Eligibility: Who Can Apply" },
  { id: "documents", label: "Documents Required for Trademark Registration" },
  { id: "process", label: "Step-by-Step Trademark Registration Process" },
  { id: "online", label: "What Happens Online, and Who Does It" },
  { id: "timeline", label: "Trademark Registration Timeline" },
  { id: "cost", label: "Trademark Registration Cost: What Actually Drives It" },
  { id: "validity", label: "Validity of a Registered Trademark" },
  { id: "renewal", label: "Trademark Renewal, Assignment and Ownership Changes" },
  { id: "challenges", label: "Common Challenges — and How They Are Avoided" },
  { id: "how-we-help", label: "How We Help" },
  { id: "choosing", label: "Choosing a Trademark Consultant" },
  { id: "why-choose", label: "Why Businesses Choose Ornate Quality Service Pvt Ltd" },
  { id: "classes", label: "Trademark Classes We Cover" },
  { id: "where-we-work", label: "Where We Work" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
  { id: "expert-tips", label: "Expert Tips Before You File" },
  { id: "comparison", label: "Trademark Registration Compared With Related Registrations" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Start Your Trademark Registration" },
];

export const BANNER_TITLE = "Trademark Registration in India";

export const BANNER_SUBTITLE =
  "Protect your brand name, logo and tagline with a filing that is prepared properly the first time.";

export const BANNER_PARAGRAPHS: string[] = [
  "Ornate Quality Service Pvt Ltd handles trademark registration in india for manufacturers, exporters, startups, MSMEs, e-commerce sellers and established companies. We run the clearance search, pick the correct class, prepare the application, file it, and stay with the case through examination, objection and registration.",
  "Whether you need brand name registration, logo trademark registration, or both, the filing is handled end to end. Trademark registration online through the IP India portal is the only route now, and online trademark registration india filings are prepared, submitted and tracked by our team rather than handed back to you as a form to complete.",
];

export const WHAT_YOU_GET_HEADING = "What you get with us";

export const WHAT_YOU_GET: string[] = [
  "Pre-filing trademark search services so you do not file a mark that is already taken",
  "Class selection guided by nice classification, with an accurate specification of goods and services",
  "Complete trademark application filing, prepared for registry scrutiny",
  "Objection handling experience and registry hearing representation experience if the Registry raises a query",
  "Application tracked till registration, with proactive status updates during registration",
  "Renewal reminder and lifecycle management after your certificate is issued",
];

export const PAGE_COVERS_PARAGRAPHS: string[] = [
  "A brand name has commercial value long before it has legal protection. The moment your product reaches a shelf, a marketplace listing or an export catalogue, someone else can adopt a similar name. Without registration, stopping them is slow, expensive and uncertain.",
  "Trademark registration is how you convert a brand you use into a brand you own. It gives you a statutory right to use that name, logo or tagline for the goods and services you registered it for, and the legal standing to act when someone copies it.",
  "This page explains the full picture: what trademark registration is, who should apply, what documents are needed, how the process runs from search to certificate, what drives the trademark registration cost, and how validity and renewal work. It also explains where a consultant genuinely adds value and where you can handle things yourself.",
  'Trademark registration for business owners is often described loosely — as tm registration, as brand registration in india, or simply as "getting the brand registered". All of these describe the same statutory filing. What changes from case to case is the class strategy, the strength of the mark and the documentation, and those are the parts that decide the outcome.',
  "Ornate Quality Service Pvt Ltd is a noida based compliance consultancy. We work with corporate clients across certification and registration services, so brand protection sits alongside the product-compliance work many of our clients already need. If you want end to end trademark registration support with one point of contact, that is what this service is.",
];

export const WHAT_IS_PARAGRAPHS: string[] = [
  "A trademark is any sign that tells buyers where a product or service comes from. It can be a brand name, a logo, a combination of both, a tagline, or in some cases a shape or a sound.",
  "Trademark registration in india is the statutory process of recording that mark in the Register of Trade Marks maintained by the Trade Marks Registry, under the Trade Marks Act, 1999 and the Trade Marks Rules, 2017. The system is administered by the Controller General of Patents, Designs and Trade Marks through the IP India portal, and filing is done online.",
  "Three points decide almost everything about your application:",
];

export const WHAT_IS_POINTS: { title: string; text: string }[] = [
  {
    title: "1. Protection is tied to a class, not to your whole business.",
    text: "Goods and services are divided under the Nice Classification into 45 classes — 34 for goods and 11 for services. A registration in one class does not automatically protect you in another. This is why trademark class selection is the single most consequential decision in the filing, and why we treat it as a separate step rather than a form field.",
  },
  {
    title: "2. Protection is territorial.",
    text: "An Indian registration protects you in India. Selling into other markets means filing there as well, either country by country or through international trademark registration under the Madrid Protocol.",
  },
  {
    title: "3. The mark must be capable of distinguishing you.",
    text: "Marks that simply describe the product, or that are too close to an existing mark, face objection. The descriptive marks and distinctiveness requirement india applies to every application, which is why a search before filing matters more than most applicants expect.",
  },
];

export const WORD_DEVICE_HEADING = "Word Mark, Device Mark, or Both?";

export const WORD_DEVICE_ITEMS: string[] = [
  "Word mark registration protects the text of your brand name in any styling. It is usually the broader protection.",
  "Device mark registration protects the logo exactly as you submit it — the artwork, layout and styling.",
  "Many businesses file both. Whether logo and wordmark separate trademark application india makes sense for you depends on how your brand actually appears in the market. We will tell you plainly when one filing is enough.",
  "A tagline trademark registration or slogan trademark registration is filed the same way, provided the phrase is distinctive rather than a common advertising line.",
  "Sound mark registration india is possible for distinctive audio identifiers, though it is far less common.",
];

export const WHY_MATTERS_ITEMS: { title: string; text: string }[] = [
  {
    title: "It gives you a right you can actually enforce",
    text: "Using a brand name gives you limited rights. Registering it gives you a documented, dated, statutory right. If a competitor adopts a confusingly similar name, a registered proprietor has a far stronger and faster route to act than an unregistered user relying on a passing off action for unregistered trademark india.",
  },
  {
    title: "It protects the money you spend on marketing",
    text: "Every rupee spent on packaging, catalogues, ads and marketplace listings builds recognition around a name. If that name is not protected, the value can be taken by someone else, or lost entirely if you are forced to rebrand.",
  },
  {
    title: "It is increasingly a commercial requirement, not just a legal one",
    text: "Marketplaces, distributors and institutional buyers ask for it. A trademark requirement for amazon brand registry is the clearest example: sellers need a registered or applied-for mark to access brand-protection tools. Trademark registration for products sold on amazon india has become a practical condition of doing business, not an optional legal nicety. Sellers who ask whether a trademark needed for amazon brand registry india is really compulsory usually find out the hard way when a hijacked listing cannot be removed. We file specifically to register trademark for amazon brand registry purposes, with the applicant details matched to the seller account. Manufacturers dealing with product approvals often run trademark registration along with bis certification for manufacturers as one combined project, so the brand on the certificate and the brand on the register are the same.",
  },
  {
    title: "It supports exports",
    text: "For exporters, an Indian registration is the base mark for international filing. Trademark registration compliance for indian exporters usually starts at home and extends outward, which is why we look at your export markets before advising on class strategy.",
  },
  {
    title: "It turns a brand into an asset",
    text: "A registered mark can be assigned, licensed or franchised. It appears on your balance sheet as an intangible asset and it is something a buyer or investor can actually value.",
  },
];

export const WHO_NEEDS_INTRO =
  "Almost any business that sells under a name benefits. These are the groups we work with most often:";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Manufacturers.",
    text: "Trademark registration for manufacturers matters where the brand travels further than the factory — through distributors, dealers and retail. We regularly handle trademark registration for machinery manufacturer clients, trademark registration for electrical appliances manufacturer units, trademark registration for cosmetics manufacturer businesses, trademark registration for furniture manufacturer india units and trademark registration for auto parts manufacturer india suppliers.",
  },
  {
    title: "Exporters.",
    text: "Trademark registration for export business protects the brand in the home market and creates the basis for filings abroad. Our trademark registration consultant for export house in india work usually pairs with international planning.",
  },
  {
    title: "Startups.",
    text: "Trademark registration for startups should happen before the launch spend, not after. A trademark registration for startup recognised by dpiit may qualify for a concessional fee category.",
  },
  {
    title: "MSMEs.",
    text: "Trademark registration for msme businesses is often the first IP filing a company makes. Where a valid Udyam registration exists, a concessional applicant category may apply.",
  },
  {
    title: "E-commerce sellers.",
    text: "Trademark registration for ecommerce sellers, trademark registration for amazon seller india and trademark registration for flipkart seller cases usually move fastest, because a marketplace deadline is driving them.",
  },
  {
    title: "D2C and private-label brands.",
    text: "Trademark registration for d2c brand and trademark registration for private label brand india work needs careful class planning, because these brands often expand across categories quickly.",
  },
  {
    title: "Service businesses.",
    text: "Trademark registration for it services company, trademark registration for logistics company, trademark registration for coaching institute, trademark registration for educational institute name, trademark registration for clinic name and trademark registration for clinic and healthcare services all fall into service classes rather than goods classes.",
  },
  {
    title: "Small and home-based businesses.",
    text: "Trademark registration for small business in india and trademark registration for home based business are handled the same way as any other filing. The process does not change with company size; only the fee category can.",
  },
];

export const INDUSTRIES_INTRO =
  "The sector decides the class, the specification and often the risk of objection. These are the industries we work in most, and what a filing usually looks like in each.";

export const INDUSTRY_ROWS: TableRow[] = [
  {
    industry: "Food and FMCG",
    filing:
      "Trademark registration for food products, and trademark registration for packaged food brand owners selling under their own label",
    watch:
      "Descriptive food names are the most heavily objected category. Trademark registration for food brand under fssai licence conditions is a normal combined requirement",
  },
  {
    industry: "Apparel and textiles",
    filing:
      "Trademark registration for apparel brand owners, trademark registration for clothing brand in india labels, and trademark registration for textile and apparel exporter units",
    watch: "Crowded class; a proper similarity search matters more here than almost anywhere else",
  },
  {
    industry: "Footwear",
    filing: "Trademark registration for footwear brand businesses",
    watch: "Often needs both the goods class and a retail class if the brand also sells other labels",
  },
  {
    industry: "Electronics and electricals",
    filing:
      "Trademark registration for electronics brand owners and trademark registration for electrical appliances brand manufacturers",
    watch:
      "Frequently paired with product certification; the brand on the label and the brand on the certificate should match",
  },
  {
    industry: "Machinery and engineering",
    filing:
      "Trademark registration for machinery and equipment manufacturer groups and engineering exporters",
    watch: "Export markets usually need to be planned into the class strategy from day one",
  },
  {
    industry: "Automotive components",
    filing: "Trademark registration for auto parts manufacturer india suppliers",
    watch: "Part numbers are not brands; the house mark is what gets protected",
  },
  {
    industry: "Chemicals and industrial goods",
    filing:
      "Trademark registration for chemical products and trademark registration for chemical and industrial products businesses",
    watch: "Specifications need care, because chemical classes are defined by use as much as by composition",
  },
  {
    industry: "Cosmetics and personal care",
    filing:
      "Trademark registration for cosmetics brand owners and trademark registration for cosmetics and personal care brand companies, including trademark registration for ayurvedic products",
    watch: "Ingredient-led names are usually descriptive and struggle at examination",
  },
  {
    industry: "Spices and agri products",
    filing: "Trademark registration for spice brand owners",
    watch: "Geographic and generic names are difficult to protect; invented house marks are the safer route",
  },
  {
    industry: "Toys and games",
    filing:
      "Trademark registration for toy brand india and trademark registration for toys and games brand india sellers",
    watch: "Character names and lookalike branding are a common conflict source",
  },
  {
    industry: "Furniture and home goods",
    filing: "Trademark registration for furniture brand manufacturers",
    watch: "Design protection and trademark protection do different jobs; most brands need the trademark first",
  },
  {
    industry: "Jewellery and watches",
    filing:
      "Trademark registration for jewellery brand owners and trademark registration for jewellery and watches brand sellers",
    watch: "House mark plus collection names usually needs a planned filing sequence",
  },
  {
    industry: "Packaging and allied products",
    filing: "Trademark registration for packaging products company clients",
    watch: "Often filed alongside the goods class of the products being packed",
  },
  {
    industry: "Hospitality and food service",
    filing:
      "Trademark registration for hotel and restaurant brand groups and trademark registration for restaurant name india owners",
    watch: "Service classes, not goods classes — a mistake that costs restaurants their protection",
  },
  {
    industry: "Digital and app brands",
    filing:
      "Trademark registration for youtube channel name owners and trademark registration for mobile app name founders",
    watch: "Usually needs a goods class and a service class together",
  },
  {
    industry: "E-commerce and marketplace sellers",
    filing:
      "Trademark registration for products sold on amazon india, plus trademark and epr registration for ecommerce brand owners who also carry packaging obligations",
    watch: "Marketplace brand programmes ask for the filing details, so applicant accuracy matters",
  },
];

export const INDUSTRIES_CLOSING =
  "Whatever the sector, the same two decisions drive everything: is the mark distinctive enough, and are you filing in the classes where you actually trade.";

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Exclusive rights in your class.",
    text: "A registration gives you the right to use the mark for the goods or services it covers, and to stop others from using something deceptively similar.",
  },
  {
    title: "A public record of ownership.",
    text: "Your filing date, applicant details and specification are on record. In a dispute, that record does most of the work.",
  },
  {
    title: "Stronger enforcement.",
    text: "A registered proprietor can act on trademark infringement remedies for registered proprietor india. Without registration, you are limited to slower common-law routes.",
  },
  {
    title: "Marketplace and platform access.",
    text: "Brand registry programmes, distributor agreements and tender documents increasingly ask for proof of a trademark.",
  },
  {
    title: "Licensing and franchising.",
    text: "You cannot cleanly license what you do not own. Registration makes trademark licensing agreement support and franchise arrangements straightforward.",
  },
  {
    title: "A foundation for international protection.",
    text: "An Indian filing supports international trademark protection for indian exporters through the Madrid route.",
  },
  {
    title: "Reduced risk of forced rebranding.",
    text: "The most expensive outcome is discovering, three years in, that someone else registered your name first.",
  },
];

export const SERVICE_INCLUDES_INTRO =
  "We do not treat filing as a one-day job. These are the trademark registration services we actually perform:";

export const SERVICE_INCLUDES: { title: string; text: string }[] = [
  {
    title: "Clearance search.",
    text: "Trademark clearance search service and trademark similarity check india before anything is filed, so you know the risk you are taking.",
  },
  {
    title: "Class strategy.",
    text: "Trademark class selection across single and multi class trademark application options, with a clear explanation of what each additional class buys you.",
  },
  {
    title: "Application preparation.",
    text: "Complete trademark registration paperwork, prepared so it survives examination rather than merely reaching the portal.",
  },
  {
    title: "Filing.",
    text: "Online trademark filing portal assistance and submission on the IP India system.",
  },
  {
    title: "Examination support.",
    text: "Trademark objection reply services if an examination report is issued, and trademark hearing representation where a hearing is scheduled.",
  },
  {
    title: "Opposition support.",
    text: "Trademark opposition services if a third party opposes after publication.",
  },
  {
    title: "Post-registration.",
    text: "Trademark renewal services, trademark assignment services, trademark rectification services and trademark watch services once the mark is on the register.",
  },
  {
    title: "Ongoing monitoring.",
    text: "Trademark monitoring service india and trademark watch service provider support, so you learn about a conflicting mark while you can still act on it.",
  },
];

export const SERVICE_INCLUDES_CLOSING =
  "Larger clients often take trademark portfolio management services india, where we manage every mark, class and renewal date across the group as one portfolio rather than as separate files.";

export const ELIGIBILITY_INTRO =
  "Any person or entity claiming to be the proprietor of a mark can apply. In practice this covers:";

export const ELIGIBILITY_ROWS: TableRow[] = [
  {
    type: "Individual / sole proprietor",
    applies: "Individual or proprietary concern",
    point: "Trademark registration for proprietorship is filed in the proprietor's name",
  },
  {
    type: "Partnership firm",
    applies: "Firm, with partner details",
    point: "Trademark registration for partnership firm requires details of all partners",
  },
  {
    type: "LLP",
    applies: "The LLP itself",
    point: "Trademark registration for llp is filed in the LLP's own name",
  },
  {
    type: "Private limited / public company",
    applies: "The company",
    point:
      "Trademark registration for private limited company is filed in the company's name, not a director's",
  },
  {
    type: "Trust, society, association",
    applies: "The registered body",
    point: "Filed through its authorised signatory",
  },
  {
    type: "Foreign applicant",
    applies: "The foreign entity",
    point:
      "Trademark registration requirements for foreign applicant in india include an address for service in India",
  },
];

export const ELIGIBILITY_POINTS_HEADING = "A few points that matter more than they look:";

export const ELIGIBILITY_POINTS: { title: string; text: string }[] = [
  {
    title: "File in the right name.",
    text: "A mark filed in a director's personal name, when the company is the real user, creates an ownership problem later. Correcting it means a separate assignment.",
  },
  {
    title: "Startup and MSME fee categories.",
    text: "A trademark registration for startup recognised by dpiit or a business with a valid Udyam registration may fall into a concessional applicant category. The certificate must be valid at the time of filing.",
  },
  {
    title: "Foreign companies can file.",
    text: "Trademark registration process for foreign company in india is open, but the address for service requirement for foreign trademark applicant must be met so the Registry can correspond within India.",
  },
];

export const GUIDELINES_NOTE =
  "Requirements may vary depending on the latest official regulatory guidelines. We confirm your applicant category before filing rather than after.";

export const DOCUMENTS_INTRO: string[] = [
  "Trademark registration documents required are fewer than most applicants expect. What matters is that they are accurate and consistent. The documents required for trademark registration in india do not change with the size of the applicant — only the proof of the entity changes. Trademark registration with documentation support means we prepare, check and format everything before it reaches the Registry; for clients who want us to manage the collection and follow-up too, trademark registration with documentation and coordination support covers the whole exercise.",
];

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Brand name or logo file",
    purpose: "The mark being applied for",
    mandatory: "Mandatory",
    notes: "Logo submitted as an image file; the mark is protected as submitted",
  },
  {
    document: "Applicant proof (PAN, ID, incorporation or registration document)",
    purpose: "Establishes the legal identity of the applicant",
    mandatory: "Mandatory",
    notes: "Trademark registration documents for private limited company differ from those for an individual",
  },
  {
    document: "Address proof of the applicant",
    purpose: "Registry correspondence and record",
    mandatory: "Mandatory",
    notes: "Must match the applicant's official records",
  },
  {
    document: "Power of attorney (Form TM-48)",
    purpose: "Authorises the agent to act for you",
    mandatory: "Mandatory where an agent files",
    notes: "Signed by the applicant; we prepare and share the draft",
  },
  {
    document: "Digital signature",
    purpose: "Required for online filing",
    mandatory: "Mandatory for electronic filing",
    notes: "Either the applicant's or the filing agent's",
  },
  {
    document: "Udyam registration certificate",
    purpose: "Supports a concessional applicant category",
    mandatory: "Optional; required if claiming that category",
    notes: "Must be valid at the time of filing",
  },
  {
    document: "DPIIT recognition certificate",
    purpose: "Supports the startup applicant category",
    mandatory: "Optional; required if claiming that category",
    notes: "Must be valid at the time of filing",
  },
  {
    document: "User affidavit and proof of use",
    purpose: "Supports a claim of use from an earlier date",
    mandatory: "Optional; required only when claiming prior use",
    notes: "Invoices, packaging, advertisements or listings of the relevant period",
  },
  {
    document: "List of goods or services",
    purpose: "Defines the scope of protection",
    mandatory: "Mandatory",
    notes: "Drafted with you; this becomes your specification",
  },
];

export const DOCUMENTS_CLOSING =
  "For trademark registration documents for proprietorship firm cases, the proprietor's ID and address proof plus the firm's registration document are usually sufficient. Clients often ask for the trademark registration for proprietorship firm documents list on its own — we share it as a single checklist rather than in instalments. We share a trademark registration checklist for new brand at the start so nothing is collected twice.";

export const PROCESS_INTRO: string[] = [
  "The trademark registration process runs in five stages. Here is what happens in each, and what we do. The trademark registration procedure is identical whether you are a first-time applicant or filing your tenth mark, so the trademark registration process for new brand in india is the same statutory route an established company follows. Only the evidence and the class strategy change. The trademark registration process for ecommerce sellers in india is also the same, though marketplace deadlines usually make it more urgent.",
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Search",
    color: "#0b57b5",
    title: "Step 1 — Trademark search and availability check",
    text: "Before anything is filed, we run a trademark public search on the IP India database and a broader trademark similarity check india covering phonetic and visual near-matches. A trademark availability check before filing is the cheapest risk control in the entire process: an objection discovered now costs a conversation, the same objection discovered after filing costs months. You receive a trademark search report explaining what exists, how close it is, and what it means for your chances.",
  },
  {
    step: "02",
    label: "Class selection",
    color: "#2563eb",
    title: "Step 2 — Class selection and specification drafting",
    text: "We identify the correct class or classes for your goods and services, and draft the specification. Using a trademark class finder for goods or a trademark class finder for services gives you a starting point; the judgement lies in how the specification is written, because it defines the outer boundary of your protection. If your range spans categories, we will explain the trade-off in a multi class trademark application — broader cover, but a government fee for each class. Single application for multiple classes trademark india is permitted, so a multi-class filing does not mean multiple separate applications.",
  },
  {
    step: "03",
    label: "Filing",
    color: "#0891b2",
    title: "Step 3 — Application preparation and filing",
    text: "We prepare and file Form TM-A on the IP India portal, with the power of attorney and supporting documents. You receive the application number immediately on filing, which is when you can start using the ™ symbol alongside your brand.",
  },
  {
    step: "04",
    label: "Examination",
    color: "#059669",
    title: "Step 4 — Examination and objection handling",
    text: "The Registry examines the application for distinctiveness, conflict with earlier marks, and procedural compliance. If an examination report is issued, a reply must be filed within the prescribed period. This is where our trademark examination report reply consultant work matters most — a reply that addresses the specific ground raised, with evidence where available, rather than a template response. If a hearing is scheduled, we appear on your behalf. Trademark hearing through video conferencing india is now routine, which has made the hearing stage considerably less disruptive for clients outside Delhi NCR.",
  },
  {
    step: "05",
    label: "Registration",
    color: "#d97706",
    title: "Step 5 — Publication, opposition window and registration",
    text: "An accepted application is advertised in the Trade Marks Journal. Trademark journal publication and opposition period india gives third parties a window to oppose. If nobody opposes — which is the common outcome — the mark proceeds to registration and the certificate is issued. If an opposition is filed, we handle the counter-statement and evidence stages through our trademark opposition services. Trademark opposition procedure after journal publication is a structured, document-heavy process, and it is where most self-filed applications run into trouble.",
  },
];

export const PROCESS_CLOSING =
  "Throughout, you can check trademark application status online, and we send updates at each stage rather than waiting for you to ask.";

export const ONLINE_INTRO =
  "Everything below happens on the IP India system. The difference is who prepares it, and whether it is done correctly the first time.";

export const ONLINE_ROWS: TableRow[] = [
  {
    action: "Trademark public search online india",
    involves: "Checking the register for identical and similar marks before filing",
    handled:
      "We run it and give you a search report; you can also order trademark clearance search work as a standalone service",
  },
  {
    action: "Get trademark search report",
    involves: "A written read on availability and risk",
    handled: "Us",
  },
  {
    action: "Get trademark class recommendation",
    involves: "Mapping your goods and services to the correct classes",
    handled: "Us",
  },
  {
    action: "File tm-a form online",
    involves: "The main application form under the Trade Marks Rules, 2017",
    handled:
      "Us. This is where register trademark online india, register brand name online and register logo online india filings actually happen",
  },
  {
    action: "Submit trademark application india / trademark registration online application form",
    involves: "Uploading the mark, applicant details and specification",
    handled: "Us",
  },
  {
    action: "Apply for trademark in multiple classes",
    involves: "A single application covering more than one class",
    handled: "Us",
  },
  {
    action: "Apply trademark under class 9 / apply trademark under class 35",
    involves: "The two most common classes for product and service brands respectively",
    handled: "Us",
  },
  {
    action: "Apply trademark for company name, product name or logo design",
    involves: "Deciding what exactly is being claimed, and in whose name",
    handled: "Decided with you, filed by us",
  },
  {
    action: "Apply trademark with udyam certificate",
    involves: "Claiming the small-enterprise fee category",
    handled: "Us, after checking the certificate is valid",
  },
  {
    action: "File reply to examination report online",
    involves: "Responding to objections within the prescribed period",
    handled: "Us",
  },
  {
    action: "File trademark objection reply online",
    involves: "The same step, filed through the portal",
    handled: "Us",
  },
  {
    action: "Apply for trademark hearing adjournment",
    involves: "Where more time is genuinely needed before a hearing",
    handled: "Us",
  },
  {
    action: "File trademark opposition notice",
    involves: "Opposing a third party's mark, or defending against one",
    handled: "Us",
  },
  {
    action: "File trademark rectification application",
    involves: "Correcting or removing a wrongly registered mark",
    handled: "Us",
  },
  {
    action: "File international trademark application from india",
    involves: "Madrid route filing using your Indian mark as the basic mark",
    handled: "Us",
  },
  {
    action: "Check trademark application status online",
    involves: "Tracking progress and understanding trademark registration status codes on ip india portal",
    handled: "You can check anytime; we report at every stage",
  },
  {
    action: "Download trademark registration certificate",
    involves: "Obtaining the certificate once registration is granted",
    handled:
      "Us. Trademark certificate download and get trademark certificate online requests are handled as part of the file handover",
  },
];

export const ONLINE_CLOSING =
  "If you would rather begin with a conversation than a form, you can request trademark consultation, contact trademark registration consultant support, schedule trademark filing appointment slots with our team, or simply book trademark registration service work with a defined scope. Once documents are ready we start trademark registration process work the same week. To start brand registration process online with us, send the brand name and product list — that is enough to begin. Clients who want to register trademark with professional help from the first step usually start there.";

export const TIMELINE_INTRO =
  "The honest answer is that trademark registration timeline depends on what happens at examination.";

export const TIMELINE_ROWS: TableRow[] = [
  {
    stage: "Search and class finalisation",
    duration:
      "Usually the fastest stage — it depends mainly on how quickly your brand and product details are confirmed",
  },
  {
    stage: "Filing",
    duration:
      "Same-day once documents and the power of attorney are ready; the application number is generated on filing",
  },
  {
    stage: "Examination",
    duration: "Depends on the Registry's current workload",
  },
  {
    stage: "Reply to examination report",
    duration: "Must be filed within the prescribed period from receipt of the report",
  },
  {
    stage: "Hearing, if scheduled",
    duration: "Depends on the Registry's hearing calendar",
  },
  {
    stage: "Journal publication and opposition window",
    duration: "A fixed statutory window runs from the date of advertisement",
  },
  {
    stage: "Registration and certificate",
    duration:
      "Issued after the opposition window closes with no opposition, or after an opposition is decided",
  },
];

export const TIMELINE_CLOSING: string[] = [
  "A clean application with no objection and no opposition takes considerably less time than one that attracts either. Trademark registration timeline with objection and opposition can extend the case substantially, and nobody can predict that at the filing stage.",
  "Expedited trademark examination in india process is available for applicants who qualify and pay the higher prescribed fee. It speeds up examination, not the opposition window.",
];

export const TIMELINE_NOTE =
  "We do not publish a guaranteed timeline. Processing time depends on the latest regulatory requirements and on the Registry's workload at the time of filing. Any consultant who promises you a fixed date is guessing.";

export const COST_INTRO =
  "We do not publish a price list on this page, because a trademark registration cost that ignores your class count and your objection risk is not a quote — it is a hook. Here is what the trademark registration fees actually consist of.";

export const COST_ITEMS: { title: string; text: string }[] = [
  {
    title: "1. Government fee, charged per class.",
    text: "This is the statutory fee payable to the Trade Marks Registry, not to us. It varies by applicant category — individuals, startups and small enterprises fall in a lower category than companies — and it is charged for every class you file in. Cost of trademark registration for private limited company in india is therefore higher than for an individual filing the same mark, purely because of the applicant category.",
  },
  {
    title: "2. Number of classes.",
    text: "Each additional class adds a government fee. This is the main reason class strategy is a commercial decision, not just a technical one.",
  },
  {
    title: "3. Professional fee.",
    text: "Our trademark registration consultant fees cover the search, class advice, drafting, filing and status tracking.",
  },
  {
    title: "4. Contingent work.",
    text: "Trademark objection reply service cost applies only if an examination report is issued. Opposition defence is separate again. Neither is charged unless it actually happens.",
  },
  {
    title: "5. Concessional categories.",
    text: "Dpiit startup trademark fee benefit and the msme trademark registration fee concession requirement can reduce the government fee, provided the supporting certificate is valid at the time of filing. Udyam certificate for trademark fee concession claims are checked before we file, because a claim made without a valid certificate creates a defect.",
  },
  {
    title: "6. Renewal, later.",
    text: "Trademark renewal service charges apply once every renewal cycle, not annually.",
  },
];

export const COST_GOVT =
  "Government fees are as prescribed under the rules in force and are paid at actuals. We will give you a written trademark registration quotation with the government fee and the professional fee shown separately, so you can see exactly what goes where.";

export const COST_QUOTE_HEADING = "What a quotation actually contains";

export const COST_QUOTE_PARAGRAPHS: string[] = [
  "Ask any provider for a trademark registration quote india businesses can compare, and it should show four things: the number of marks, the number of classes, the government fee per class for your applicant category, and the professional fee against a defined scope. Anything less is a headline number, not a quote.",
  "Trademark registration cost for startup filings and trademark registration cost for company filings differ mainly because of the applicant fee category, not because the work changes. Cost of logo trademark registration india cases are quoted the same way as a wordmark, since the process is identical. If you are filing several marks at once, ask for a trademark registration price list india style breakdown across all of them before you commit — it is usually cheaper to plan the whole portfolio than to file one mark at a time.",
  "Clients who prefer a fixed, packaged scope can buy trademark registration package options covering search, filing and status tracking; a trademark registration package price is quoted per mark and per class. Trademark registration service charges for objection replies, hearings and oppositions are quoted separately when and if those stages arise, so you are never pre-paying for work that may never happen.",
  "To enquire trademark registration cost for your specific case, send us the brand name, the products or services, and your entity type. That is enough for us to get trademark registration quotation figures to you.",
];

export const VALIDITY_INTRO: string[] = [
  "A registered trademark in India is valid for ten years, counted from the date of application rather than the date the certificate is issued. That is worth repeating, because it surprises people: the clock starts when you file, not when you receive the certificate.",
  "Two other points define trademark registration validity:",
];

export const VALIDITY_POINTS: { title: string; text: string }[] = [
  {
    title: "It is territorial.",
    text: "An Indian registration protects you in India. It does not extend to other countries by itself.",
  },
  {
    title: "It is class-bound.",
    text: "The registration covers the goods or services in your specification. A registration in one class does not stop a different trader using a similar name in an unrelated class.",
  },
];

export const VALIDITY_CLOSING =
  "Unlike most other intellectual property, a trademark does not have a final expiry date. Renew it on time and it can stay on the register indefinitely. Trademark registration validity period and renewal in india is therefore a maintenance question, not a countdown.";

export const VALIDITY_NOTE =
  "Requirements may vary depending on the latest official regulatory guidelines, so we confirm the current renewal window against the Registry's records before acting on any mark.";

export const RENEWAL_INTRO =
  "A registration that is not maintained is a registration you can lose. These are the post-registration actions that matter.";

export const RENEWAL_PARTS: { title: string; text: string }[] = [
  {
    title: "Renewal",
    text: "Renewal is filed on Form TM-R, before the registration expires. The renewal window opens ahead of the expiry date, and a grace period follows expiry during which a late renewal can still be filed with an additional prescribed fee. If that period passes without action, the Registry may remove the mark from the register — and getting it back is a restoration application, which is slower and more uncertain than renewing on time. Our trademark renewal services exist mainly to prevent that outcome. As your trademark renewal consultant india we track the date, remind you well in advance, and file trademark renewal application papers on Form TM-R. Clients who want to file tm-r renewal form themselves can do so; we will still send the reminder. Clients who want to handle it themselves can still renew trademark before expiry online; we will tell you the date either way. Trademark renewal service charges apply per renewal cycle.",
  },
  {
    title: "Assignment and transfer",
    text: "Ownership can change. Trademark assignment services cover the transfer of a registered mark from one proprietor to another, with or without the goodwill of the business. We prepare the documentation, and our trademark assignment deed drafting service covers the underlying deed. The trademark assignment process for change of ownership has to be recorded with the Registry — a private agreement alone does not update the register. We file trademark assignment application papers and follow them through to the recordal, so the register reflects the real owner rather than a historical one. Trademark transfer after company name change india is a common trigger. If your company name changes, or the business moves into a new entity, the mark on record still names the old proprietor until you correct it. Left unattended, this creates a mismatch that causes problems at renewal, in due diligence, and in enforcement.",
  },
  {
    title: "Licensing",
    text: "You can let another party use your mark without giving it away. Trademark licensing agreement support covers franchise arrangements, distributor agreements and group-company usage. The important part is that the licence is documented and consistent with what is on the register.",
  },
];

export const CHALLENGES_INTRO =
  "Most trademark applications that fail do so for reasons that were visible before filing.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "The name is descriptive.",
    text: "A mark that simply describes the product, its quality or its purpose struggles on distinctiveness. This is the most common ground of objection we see, and no amount of drafting fully repairs a genuinely descriptive name. The fix happens at the naming stage.",
  },
  {
    title: "A similar mark already exists.",
    text: "Applicants search for the exact spelling, find nothing, and assume they are clear. The Registry looks at phonetic and visual similarity too. A trademark similarity check india catches near-matches that an exact search misses.",
  },
  {
    title: "The wrong class was selected.",
    text: "Filing in a class that does not cover your actual goods gives you a certificate that protects nothing useful. Adding the right class later means a new application and a new fee.",
  },
  {
    title: "The specification is too vague or too wide.",
    text: "A loose specification invites objections. An over-broad one invites opposition from businesses in adjacent categories.",
  },
  {
    title: "The applicant name is wrong.",
    text: "Filing in a director's personal name instead of the company's, or in a trade name that is not a legal entity, creates an ownership defect that has to be cured by assignment.",
  },
  {
    title: "Deadlines are missed.",
    text: "An examination report has a prescribed reply period. Miss it and the application can be treated as abandoned. This single failure accounts for a large share of dead applications.",
  },
  {
    title: "A concessional fee was claimed without valid backing.",
    text: "If you claim a startup or small-enterprise category, the supporting certificate must be valid at the time of filing.",
  },
  {
    title: "Nobody is watching the journal.",
    text: "A conflicting mark can be published and registered while you are unaware. Trademark watch services close that gap.",
  },
];

export const HOW_WE_HELP_INTRO =
  "Our role is to make sure the application is correct before it reaches the Registry, and properly defended after it does.";

export const HOW_WE_HELP_ITEMS: { title: string; text: string }[] = [
  {
    title: "Search and risk assessment.",
    text: "We run the trademark search service india applicants need before committing to a name, and explain what the results actually mean for your chances.",
  },
  {
    title: "Class and specification advice.",
    text: "We get trademark class recommendation decisions right the first time, including where a multi class trademark registration service makes commercial sense and where it is simply an extra fee.",
  },
  {
    title: "Documentation.",
    text: "Trademark documentation assistance covers everything from the power of attorney to the supporting proofs, with documentation prepared for registry scrutiny. Documentation and coordination support for trademark filings means you send the basics once and we handle the rest.",
  },
  {
    title: "Filing and follow-up.",
    text: "We file, track and report. Trademark registration status check updates are sent to you at each stage, not just at the end.",
  },
  {
    title: "Objection and hearing work.",
    text: "Our trademark examination report reply consultant and trademark objection reply consultant india teams draft replies against the specific ground raised. Where a hearing is listed, we provide registry hearing representation experience on your behalf. If a matter needs more time, we can apply for a trademark hearing adjournment.",
  },
  {
    title: "Opposition defence.",
    text: "Trademark opposition reply consultant support through counter-statement, evidence and hearing.",
  },
  {
    title: "International filing.",
    text: "International trademark filing services india through the Madrid route, where an Indian application or registration serves as the basic mark. Our madrid protocol filing consultant india support covers trademark registration through madrid protocol from india, including country selection advice for exporters.",
  },
  {
    title: "Enforcement support.",
    text: "Where a conflict arises after registration, trademark infringement support india covers the trademark infringement notice stage, and trademark rectification services cover the removal or correction of a wrongly registered mark.",
  },
  {
    title: "Lifecycle management.",
    text: "Renewal reminder and lifecycle management, plus post registration brand protection support, so the mark stays protected without you tracking dates.",
  },
];

export const HOW_WE_HELP_NOTE =
  "We do not promise outcomes we do not control. There are no false approval guarantees here — the Registry decides registration, not us. What we control is the quality of the application and the speed of our response, and that is what we commit to.";

export const CHOOSING_INTRO =
  "There is no shortage of providers. Searching for a trademark registration company, a trademark registration agency or a trademark registration expert returns hundreds of results, and most of them look identical from the outside. These are the things worth checking before you pay anyone.";

export const CHOOSING_ITEMS: { title: string; text: string }[] = [
  {
    title: "Who will actually represent you before the Registry.",
    text: "Trademark attorney services and the work of a trademark agent in india are not the same thing as an admin team filling in a portal form. Ask who signs the reply if an objection arrives.",
  },
  {
    title: "Whether the search comes before the quote.",
    text: "A provider who quotes without looking at the register is selling a filing, not advice.",
  },
  {
    title: "What the price includes.",
    text: "Some of the lowest headline prices exclude the objection reply entirely — which is the stage most likely to decide your case.",
  },
  {
    title: "Sector understanding.",
    text: "Trademark registration consultancy for manufacturers is a different conversation from consumer-brand work. If the provider cannot follow what your product is, the class selection will suffer.",
  },
  {
    title: "Continuity.",
    text: "Ask who your point of contact is at month eight, not month one.",
  },
];

export const CHOOSING_CLOSING: string[] = [
  "When clients hire trademark consultant india support, or hire trademark agent for filing work specifically, they are usually buying three things: a correct class decision, a properly drafted application, and someone who responds when the Registry does. That is what trademark consultancy services should mean.",
  "We would rather be judged on those points than on being the cheapest. If you are comparing us against the top trademark registration consultants in india, ask all of us the same questions. A trusted trademark filing agency india should be comfortable answering every one of them in writing.",
  "Ornate Quality Service Pvt Ltd works as a brand registration service provider india businesses use alongside their other approvals, and as a compliance consultant for trademark registration where the brand sits on a regulated product. For smaller clients we are often the best trademark consultant for msme work precisely because we do not upsell classes that add nothing. Our trademark registration support services continue after the certificate, and our trademark registration service provider role includes telling you when a filing is not worth making.",
];

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Experience across regulated industries.",
    text: "As an experienced trademark registration consultant and a trademark compliance specialist india businesses return to, we are a compliance partner for indian brands across certification and registration work. Legal compliance support for brand registration is not a side offering here; it is what the firm does. That means a trademark consultant with manufacturing sector experience and a trademark consultant with export sector experience, who understands what your product is before advising on the class it belongs in.",
  },
  {
    title: "One partner for related compliance.",
    text: "Most of our clients need more than one approval. As a single point compliance and certification partner, we handle trademark registration with bis and epr support where required, and offer single window trademark and certification services so you are not coordinating three consultants who never speak to each other.",
  },
  {
    title: "Correct legal grounding.",
    text: "We follow the government prescribed trademark registration process end to end: trademark registration guidance as per trade marks act 1999, filing as per trade marks rules 2017, and a procedure aligned with ip india guidelines. Technical guidance for trademark filing comes from people who have handled the stage in question, which is why our objection handling experience and opposition handling experience matter more than a brochure claim. Our class selection guided by nice classification is documented, so you can see why a class was chosen.",
  },
  {
    title: "Qualified handling.",
    text: "Trademark filing handled by qualified professionals, with authorised trademark agent representation india before the Registry.",
  },
  {
    title: "Transparency.",
    text: "A transparent trademark registration process with a clear scope of work for trademark registration, written quotations, and a verifiable process and documentation trail. You get a dedicated trademark case manager rather than a new contact every time you call.",
  },
  {
    title: "Honest advice.",
    text: "If your mark is weak, we will say so before you spend money. If you do not need a second class, we will tell you. Some clients ask whether trademark registration without agent in india is possible — it is, and for a simple, clearly distinctive mark with one obvious class, self-filing is a reasonable choice. We would rather explain that than sell you work you do not need.",
  },
  {
    title: "Support that continues.",
    text: "End to end trademark registration support does not stop at the certificate. Application tracked till registration, then renewal reminders, watch services and portfolio management after it.",
  },
];

export const CLASSES_INTRO: string[] = [
  "Trademark protection in India is organised under the Nice Classification into 45 classes. Your registration only covers the classes you file in, which is why class strategy decides how much protection you actually buy.",
  "We file across all 45 classes. The class groups below are the ones our clients use most, and each will have its own detailed page.",
];

export const CLASS_ROWS: TableRow[] = [
  {
    cls: "Class 9 — Electronics, Electricals & Software",
    covers:
      "Electronic and electrical goods, software, apps, cables, batteries, LED and lighting products, measuring and safety equipment",
    who: "Electronics manufacturers, electrical appliance brands, LED and lighting companies, software and mobile app companies, IT hardware importers",
    page: "Coming Soon",
  },
  {
    cls: "Class 35 — Business, Advertising & Retail Services",
    covers:
      "Retail and online retail services, trading and distribution, advertising, marketing, business administration and consultancy",
    who: "E-commerce sellers and marketplaces, trading and distribution firms, retail chains, consultancies, marketing and advertising agencies, import-export businesses",
    page: "Coming Soon",
  },
  {
    cls: "Class 7 — Machinery & Machine Tools",
    covers:
      "Machines, machine tools, motors and engines (other than for land vehicles), industrial equipment and parts",
    who: "Machinery and machine-tool manufacturers, industrial equipment makers, pump, motor and compressor brands, auto-component manufacturers, engineering exporters",
    page: "Coming Soon",
  },
  {
    cls: "Class 3 — Cosmetics & Personal Care",
    covers:
      "Cosmetics, skincare, haircare, soaps, detergents, perfumery and non-medicated toiletries",
    who: "Cosmetic and skincare brands, ayurvedic and herbal personal-care makers, soap and detergent manufacturers, D2C beauty brands, contract manufacturers and private-label sellers",
    page: "Coming Soon",
  },
  {
    cls: "Class 25 — Apparel, Footwear & Headgear",
    covers: "Clothing, footwear and headgear of all kinds",
    who: "Clothing and garment brands, footwear manufacturers, textile exporters, D2C fashion labels, hosiery and knitwear units, uniform suppliers",
    page: "Coming Soon",
  },
  {
    cls: "Class 42 — Technology & IT Services",
    covers:
      "Software development, IT services, design and engineering services, scientific and technological research, testing and analysis services",
    who: "IT and software services companies, SaaS platforms, engineering and design consultancies, testing, inspection and certification providers, R&D and lab service firms",
    page: "Coming Soon",
  },
];

export const CLASS_NOTES_HEADING = "A few practical notes on classes:";

export const CLASS_NOTES: { title: string; text: string }[] = [
  {
    title: "Class 9 registration.",
    text: "Trademark class 9 registration is the most common filing for hardware and software brands. Trademark class for software and mobile apps india often involves Class 9 for the product and Class 42 for the service around it.",
  },
  {
    title: "Selling versus making.",
    text: "If you manufacture goods, you file in the goods class. If you also sell third-party products, Class 35 may apply as well. This is the most frequently missed combination among e-commerce sellers.",
  },
  {
    title: "Services.",
    text: "Trademark class for business consultancy services sits in the service classes, which start at Class 35.",
  },
  {
    title: "Apparel.",
    text: "The best class for trademark registration of clothing brand is usually Class 25, though a brand that also retails other labels may need Class 35.",
  },
];

export const CLASS_CLOSING =
  "If you are unsure, send us your product list. We will map it before you file, not after an objection arrives.";

export const WHERE_INTRO =
  "We are based in Noida and work with clients across India. Filing is entirely online, so your location does not restrict where you can file — but it does help to have someone who can appear at the Registry and understand your local business context.";

export const WHERE_ROWS: TableRow[] = [
  {
    region: "Noida",
    handle:
      "Trademark registration in noida, trademark registration consultant in noida, trademark registration agency in noida, trademark registration firm in noida, trademark registration consultant in noida for msme, trademark registration for manufacturing company in noida, ipr consultant in noida",
  },
  {
    region: "Delhi NCR",
    handle:
      "Trademark registration in delhi, trademark registration charges in delhi, best trademark registration company in delhi ncr, trademark registration service provider in delhi ncr, ip services company in delhi ncr, trademark hearing consultant in delhi ncr, trademark registration for small business owners in delhi ncr, trademark registration in gurgaon",
  },
  {
    region: "Western India",
    handle: "Trademark registration in mumbai, trademark registration in pune, trademark registration in ahmedabad",
  },
  {
    region: "Southern India",
    handle:
      "Trademark registration in bangalore, trademark registration in hyderabad, trademark registration in chennai",
  },
  {
    region: "Northern and Eastern India",
    handle: "Trademark registration in jaipur, trademark registration in kolkata",
  },
  {
    region: "Anywhere else",
    handle:
      "Searching for a trademark registration company near me or trademark registration near me works only if the consultant can actually act for you. Ours is a national practice run from one office, so you get the same team wherever you are",
  },
];

export const MISTAKES_ITEMS: string[] = [
  "1. Launching first, filing later. Packaging, signage and listings are cheap to change before launch and expensive to change afterwards.",
  "2. Searching only for the exact name. Similarity is judged on sound and appearance, not spelling alone.",
  "3. Filing the logo only. A device mark protects the artwork. Change the design and the protection weakens. The wordmark is what protects the name.",
  "4. Filing in one class to save money. A saved fee is a false economy if the class you skipped is where your competitor operates.",
  "5. Assuming a company or GST registration protects the brand. It does not. Different registers, different purposes.",
  "6. Using ® before registration. Using the registered symbol on an unregistered mark is improper. Use TM until the certificate is issued.",
  "7. Ignoring the examination report. The reply period is prescribed and unforgiving.",
  "8. Letting the renewal date pass. A lapsed mark can often be restored, but never as easily or cheaply as it could have been renewed.",
  "9. Claiming prior use without evidence. A use claim needs genuine, dated proof. An unsupported claim weakens the whole application.",
  "10. Filing in the wrong name. The applicant becomes the proprietor. Correcting it later costs an assignment.",
];

export const EXPERT_TIPS: string[] = [
  "Pick an invented or arbitrary name. The more meaningless the word is in your trade, the stronger the protection.",
  "Search before you print. Run the availability check before you commission packaging or a website.",
  "File the wordmark first if the budget is tight. It gives broader protection than the logo.",
  "Map your two-year plan, not just today's product. If you will launch a new category next year, decide now whether it belongs in the filing.",
  "Keep your applicant details consistent. The name on the application should match your incorporation or registration records exactly.",
  "Start using TM immediately after filing. It signals a claim and costs nothing.",
  "Keep dated evidence of use. Invoices, packaging and advertisements with clear dates are useful in objection, opposition and enforcement.",
  "Diarise the renewal. Or use a consultant who does it for you.",
  "Watch the journal. Knowing about a conflicting mark during the opposition window is far better than discovering it after registration.",
  "Plan export markets early. An Indian filing can serve as the basic mark for international filing, but the sequence matters.",
];

export const COMPARISON_INTRO =
  "Business owners often ask how trademark registration sits against the other registrations they hold. This table covers the ones we are asked about most.";

export const COMPARISON_ROWS: TableRow[] = [
  {
    comparison: "Trademark vs company name registration",
    protects:
      "A company name registration creates a legal entity on the MCA records. A trademark protects the brand you trade under",
    brand: "Only the trademark does",
  },
  {
    comparison: "Trademark vs trade name",
    protects:
      "A trade name is the name a business operates under. A trademark is an enforceable right in that name for specific goods or services",
    brand: "Only the trademark does",
  },
  {
    comparison: "Trademark vs domain name",
    protects: "A domain is an address you rent from a registrar. A trademark is a statutory right",
    brand: "Only the trademark does",
  },
  {
    comparison: "Trademark registration vs udyam registration",
    protects:
      "Udyam recognises your enterprise as an MSME and can affect your fee category. It grants no brand rights",
    brand: "Only the trademark does",
  },
  {
    comparison: "Trademark registration vs fssai licence",
    protects:
      "An FSSAI licence permits you to operate in the food business. It says nothing about who owns the brand name on the pack",
    brand: "Only the trademark does",
  },
  {
    comparison: "Trademark registration vs bis certification",
    protects:
      "BIS certification concerns whether the product meets an Indian Standard. A trademark concerns who owns the name on that product",
    brand: "Only the trademark does",
  },
  {
    comparison: "Trademark vs copyright",
    protects:
      "Copyright protects original creative work, including the artistic elements of a logo. A trademark protects the mark as an identifier of source",
    brand: "Both can apply to a logo; only the trademark protects it as a brand",
  },
  {
    comparison: "Registered trademark vs unregistered trademark",
    protects:
      "A registered mark gives statutory rights and a presumption of ownership. An unregistered mark relies on proving reputation",
    brand: "Registration is the stronger position",
  },
];

export const COMPARISON_CLOSING =
  "Food brands frequently need both: trademark registration for food brand under fssai licence conditions is a normal combined requirement, and the two registrations do entirely different jobs.";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What does a trademark registration service include?",
    a: "A complete service covers the pre-filing search, class selection, drafting of the specification, filing of Form TM-A, replies to any examination report, hearing representation, opposition defence if required, and delivery of the registration certificate. Ours also includes status updates throughout and renewal reminders afterwards.",
  },
  {
    q: "How do I start trademark registration with a consultant?",
    a: "Send us your brand name or logo, a short description of what you sell, and your entity details. We run the search first and give you an honest read before any filing is done.",
  },
  {
    q: "Do you conduct a trademark search before filing?",
    a: "Always. Filing without a search is the most expensive shortcut in this process.",
  },
  {
    q: "What happens if my chosen brand name is already taken?",
    a: "We tell you before filing and explain the options: modify the mark, narrow or shift the class strategy, or choose a different name. The decision stays with you.",
  },
  {
    q: "How do you select the right trademark class for my product?",
    a: "We map your actual goods and services against the Nice Classification, then consider what you plan to sell in the next year or two. We explain the reasoning so you can see what each class buys you.",
  },
  {
    q: "Can you register both my logo and brand name?",
    a: "Yes. These are usually filed as separate applications — a word mark for the name and a device mark for the logo. We will tell you whether both are needed in your case.",
  },
  {
    q: "What documents will you need from my company?",
    a: "The brand name or logo file, applicant identity and address proof, your entity document, a signed power of attorney, and a list of your goods or services. Concessional fee claims need a valid Udyam or DPIIT certificate.",
  },
  {
    q: "Do you need a digital signature for filing?",
    a: "Online filing is done using a digital signature — either yours or that of the agent filing on your behalf. We will tell you which applies to your case.",
  },
  {
    q: "Who will be shown as the applicant on the application?",
    a: "Whoever is intended to own the mark. For a company, that should be the company itself rather than a director personally. Getting this right at filing avoids an assignment later.",
  },
  {
    q: "Can a proprietorship apply for a trademark?",
    a: "Yes. The application is filed in the proprietor's name, with the firm's details on record.",
  },
  {
    q: "Can a partnership firm apply for a trademark?",
    a: "Yes, with the details of all partners included in the application.",
  },
  {
    q: "Can an LLP apply for a trademark?",
    a: "Yes. The LLP applies in its own name as a separate legal entity.",
  },
  {
    q: "Can a private limited company apply for a trademark?",
    a: "Yes, and it should — in the company's name, not a director's.",
  },
  {
    q: "Can an individual apply for a trademark in India?",
    a: "Yes. Any person claiming to be the proprietor of a mark can apply, whether or not they run a registered business.",
  },
  {
    q: "Do you file trademarks for foreign applicants?",
    a: "Yes. Foreign applicants can file in India, and an address for service in India is required for Registry correspondence.",
  },
  {
    q: "Can you file under the Madrid Protocol from India?",
    a: "Yes, where you have an Indian application or registration to serve as the basic mark. We advise on which countries to designate based on where you actually sell.",
  },
  {
    q: "Which countries should exporters register in?",
    a: "Start with the markets where you already ship, then the markets where you have distributors or listings. Registering everywhere is rarely worth the cost; registering nowhere is a real risk.",
  },
  {
    q: "Do startups get a fee concession?",
    a: "Applicants recognised as startups by DPIIT fall into a concessional government fee category. The recognition must be valid at the time of filing.",
  },
  {
    q: "Do MSMEs get a fee concession?",
    a: "Small enterprises holding a valid Udyam registration fall into the same lower fee category.",
  },
  {
    q: "Is a Udyam certificate required for the concession?",
    a: "Yes, if you are claiming the small-enterprise category. It must be valid on the filing date — obtaining it afterwards does not help.",
  },
  {
    q: "Is DPIIT recognition required for the startup concession?",
    a: "Yes. A company describing itself as a startup without DPIIT recognition is charged at the standard rate.",
  },
  {
    q: "Are government fees included in your charges?",
    a: "No. Government fees are shown separately and paid at actuals to the Registry. Our professional fee is quoted against a defined scope.",
  },
  {
    q: "How are government fees paid?",
    a: "They are paid to the Trade Marks Registry at the time of filing, per class. We show you the amount payable before anything is submitted.",
  },
  {
    q: "Can I see the fee breakup before filing?",
    a: "Yes. Every quotation separates the government fee from the professional fee, class by class.",
  },
  {
    q: "How long will the whole process take?",
    a: "It depends on the Registry's workload and on whether an objection or opposition arises. Filing is same-day; the stages after that are outside anyone's control. We do not give guaranteed dates.",
  },
  {
    q: "What is the fastest stage of trademark registration?",
    a: "Filing. You receive the application number the same day, and you can use the TM symbol from that point.",
  },
  {
    q: "Will you track my application status after filing?",
    a: "Yes. We monitor the file and send updates at each stage. You can also check the status yourself on the IP India portal at any time.",
  },
  {
    q: "Can the applicant name be corrected?",
    a: "Minor corrections can be requested through the prescribed forms. A genuine change of owner is handled as an assignment and recorded with the Registry.",
  },
  {
    q: "Do you provide trademark watch services?",
    a: "Yes. A watch service monitors new filings and journal publications for marks similar to yours, so you can oppose within the window rather than litigate afterwards.",
  },
  {
    q: "What is the success rate of trademark applications?",
    a: "No honest consultant quotes a success rate as a promise. What improves the odds is a proper search, a distinctive mark, the right class and a well-drafted reply if an objection is raised. Registration is decided by the Registry.",
  },
];

export const CTA_HEADING = "Start Your Trademark Registration";

export const CTA_PARAGRAPHS: string[] = [
  "If you are launching a brand, or you have been trading under a name that is still unprotected, the useful next step is a search — not a filing. It costs little, it takes very little time, and it tells you whether the name you are about to invest in is actually available.",
  "Send us your brand name, logo and product list. We will run the search, recommend the classes, and give you a written quotation with the government fee and professional fee shown separately. If the mark is weak, we will tell you that too.",
];
