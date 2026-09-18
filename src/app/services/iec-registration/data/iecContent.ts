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
  deliverable?: string;
  note?: string;
};

export const IEC_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-iec", label: "What Is IEC Registration?" },
  { id: "why-important", label: "Why Is IEC Registration Important?" },
  { id: "who-needs", label: "Who Needs IEC Registration?" },
  { id: "benefits", label: "Key Benefits of IEC Registration" },
  { id: "key-features", label: "Key Features of IEC Registration" },
  { id: "eligibility", label: "Eligibility for IEC Registration" },
  { id: "documents", label: "Documents Required for IEC Registration" },
  { id: "process", label: "Step-by-Step IEC Registration Process" },
  { id: "timeline", label: "Timeline for IEC Registration" },
  { id: "cost", label: "Cost Factors for IEC Registration" },
  { id: "validity", label: "Validity of the Import Export Code" },
  { id: "renewal", label: "Renewal, Annual Update, Modification and Surrender" },
  { id: "challenges", label: "Common Challenges in IEC Registration" },
  { id: "how-we-help", label: "How We Help With IEC Registration" },
  { id: "why-choose", label: "Why Choose Ornate Quality Service Pvt Ltd" },
  { id: "industries", label: "Industries We Serve" },
  { id: "mistakes", label: "Common Mistakes in IEC Registration" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "Doing It Yourself, an Individual Consultant, or a Professional Firm" },
  { id: "key-terms", label: "Key Terms You Will Encounter" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Start Your IEC Registration" },
];

export const BANNER_TITLE =
  "IEC Registration Consultant in India — Import Export Code Registration, Annual Update & Reactivation";

export const BANNER_SUBTITLE =
  "Get your Import Export Code registered with the DGFT, correctly the first time.";

export const BANNER_DESCRIPTION =
  "We check your documents before filing, submit your application on the official portal, follow it through to approval, and keep your code active every year afterwards.";

export const KEY_HIGHLIGHTS_HEADING = "Key highlights";

export const KEY_HIGHLIGHTS: string[] = [
  "IEC registration services for importers, exporters, manufacturers, startups and MSMEs across India",
  "Documents verified before filing — we catch the name and bank mismatches that cause most rejections",
  "Filed on the official DGFT portal under your own login, so your business keeps control of its account",
  "Annual update handled — the April to June window managed for you, so your code is never deactivated",
  "IEC reactivation, modification and surrender support, not just new applications",
  "Beyond the code — guidance on AD Code, ICEGATE and RCMC so you can actually ship",
];

export const HERO_CTAS = [
  { label: "Request a Callback", href: "/contact" },
  { label: "Send Your Enquiry", href: "/contact" },
];

export const INTRO_LEAD =
  "If your business plans to send goods out of India or bring goods in, there is one registration you cannot skip. It is called the Import Export Code, or IEC.";

export const INTRO_PARAGRAPHS: string[] = [
  "The IEC is a 10-digit number issued by the Directorate General of Foreign Trade (DGFT), which works under the Ministry of Commerce and Industry. It is issued under the Foreign Trade (Development and Regulation) Act, 1992 and administered through the Foreign Trade Policy and its Handbook of Procedures.",
];

export const INTRO_PARTS: { title: string; text: string }[] = [
  {
    title: "Why businesses need it",
    text: "Without a valid IEC, a shipping bill cannot be filed for an export. A bill of entry cannot be cleared for an import. Your bank cannot properly process the foreign payment tied to the trade. The shipment simply stops moving, and the charges start adding up.",
  },
  {
    title: "When it becomes mandatory",
    text: "The requirement begins before your first commercial shipment — not after it. Many businesses discover this when a container is already at the port. The registration itself is quick. Fixing a document problem while cargo waits is not.",
  },
  {
    title: "Why compliance matters after approval",
    text: "This is where most guidance stops, and where most businesses get caught. The IEC does not expire. But DGFT requires every holder to confirm their details online every financial year between 1 April and 30 June, even when nothing has changed. Miss that window and the code is deactivated. A deactivated IEC does not arrive as a warning letter. It arrives as a held consignment.",
  },
  {
    title: "What you can expect from this page",
    text: "We explain what the IEC is, who needs it, who is exempt, what documents you need by entity type, how the process works step by step, what affects the timeline and the cost, and what to do if your code has already been deactivated. Where a rule depends on current government guidelines, we say so instead of guessing.",
  },
];

export const WHAT_IS_INTRO =
  "IEC registration is the process of obtaining a 10-digit Importer Exporter Code from the DGFT. Every business that imports or exports goods from India must quote this code for customs clearance and for trade-related bank payments. The application is filed online on the DGFT portal in Form ANF 2A. The code carries lifetime validity but must be confirmed electronically once every financial year.";

export const WHAT_IS_PARTS: { title: string; text: string; bullets?: string[] }[] = [
  {
    title: "The purpose of the code",
    text: "The IEC gives your business a single identity in international trade. Customs uses it to recognise you. Your bank uses it to classify your trade remittances. DGFT uses it to link you to any scheme benefit you claim. One number, used by three different systems.",
  },
  {
    title: "It is PAN-based, and there is only one per PAN",
    text: "Your IEC is issued against your Permanent Account Number. In practice, the code and the PAN are the same 10 characters. Two things follow from this, and both are commonly misunderstood:",
    bullets: [
      "One PAN gets one IEC. If your company runs three product lines under a single legal entity, all three trade under one code. You do not apply three times. A separate legal entity with its own PAN gets its own code.",
      "Having a PAN does not mean you have an IEC. The numbers may match, but the code does not exist until DGFT issues it against a filed application. Customs checks for an issued, active IEC — not for a PAN.",
    ],
  },
];

export const WHAT_IS_EXPERT_NOTE =
  'Expert note: We regularly meet businesses who assumed that because "IEC is the same as PAN", they were already covered. They were not. The application is separate, and it is mandatory.';

export const WHAT_IS_DIGITAL: { title: string; text: string } = {
  title: "It is issued digitally",
  text: "DGFT issues the code as an e-IEC — a digital certificate you download from your dashboard whenever you need it. There is no printed certificate to wait for, and a standard application needs no visit to a regional office.",
};

export const WHAT_IS_INDUSTRY: { title: string; text: string } = {
  title: "Why this matters to your industry",
  text: "For a manufacturer, the IEC is what turns a domestic factory into an exporter. For an importer of regulated goods, it sits underneath every product approval you will also need. For a startup, it is usually the first government registration that touches your actual revenue model. For an MSME taking a first export order, it is the simplest part of a compliance stack that can otherwise look intimidating.",
};

export const WHY_IMPORTANT_ITEMS: { title: string; text: string }[] = [
  {
    title: "Legal importance",
    text: "The IEC is the statutory basis on which your business is permitted to trade across India's borders. It is quoted on the shipping bill when you export and on the bill of entry when you import. Where product-specific approvals also apply — BIS, FSSAI, CDSCO, WPC, LMPC — the IEC is the trade identity those approvals attach to.",
  },
  {
    title: "Business benefits",
    text: "International buyers, marketplaces and freight forwarders treat a valid IEC as basic evidence that you are set up to ship. It shortens the diligence conversation and removes a question mark from your first order.",
  },
  {
    title: "Market access",
    text: "A trading identity is what sits underneath certificates of origin, Free Trade Agreement benefits and export promotion council membership. None of those are available to a business that has not registered.",
  },
  {
    title: "Financial benefits",
    text: "Banks reference your IEC when handling export proceeds coming in and import payments going out. The e-BRC, which evidences that your export proceeds were realised, depends on your IEC and bank records being correctly linked. Export incentive claims all run through IEC-linked shipments.",
  },
  {
    title: "Compliance benefits",
    text: "An accurate, active IEC is the anchor record that DGFT, Customs, GSTN and your bank all check against. Keeping it correct prevents small mismatches from becoming clearance problems later.",
  },
  {
    title: "Operational advantages",
    text: "The IEC unlocks the rest of the chain — AD Code registration at your customs station, ICEGATE enrolment for electronic filing, and RCMC from your export promotion council. Each of these depends on the code already existing. Getting it early keeps your first shipment on schedule.",
  },
  {
    title: "Consumer and partner trust",
    text: "For overseas partners, a verifiable trade registration signals that you operate inside the regulatory system rather than around it. That matters more in categories where buyers audit their supply chain.",
  },
];

export const WHO_NEEDS_INTRO =
  "The IEC requirement follows the activity, not the product. If goods cross India's border commercially in your business's name, you need the code.";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Importers",
    text: "Any commercial import into India needs an IEC on the bill of entry. Importers of regulated goods — electronics, packaged commodities, food, medical devices — need it alongside their product approvals, and the order matters. Registering the IEC late is a common reason first imports get held.",
  },
  {
    title: "Exporters",
    text: "Both merchant exporters and manufacturer exporters need the code. It is also the gateway to export promotion council membership, which is where scheme benefits and market intelligence come from.",
  },
  {
    title: "Manufacturers entering international trade",
    text: "If you manufacture in India and are moving from domestic supply into exports, the IEC comes before the buyer contract and before the freight quote. It is also required to claim input duty relief on materials that go into exported goods.",
  },
  {
    title: "MSMEs",
    text: "An MSME holding a Udyam registration still needs a separate IEC. The two are unrelated registrations from different authorities, and one does not imply the other.",
  },
  {
    title: "Startups",
    text: "Recognition under Startup India does not substitute for an IEC. Startups selling abroad need the code in their own entity's name. Get it early — it is far more difficult to arrange under deadline pressure.",
  },
  {
    title: "Large enterprises and group companies",
    text: "Each legal entity with its own PAN needs its own IEC. Groups running several registered entities end up managing several codes, each with its own annual update obligation. This is exactly where compliance slips: one entity's code lapses while everyone assumes the group is covered.",
  },
  {
    title: "E-commerce sellers and online exporters",
    text: "Selling to overseas buyers through international marketplaces, shipping through courier or postal export channels, or running a dropshipping operation out of India — if goods cross the border commercially in your name, you need an IEC. Marketplace onboarding frequently asks for it directly.",
  },
  {
    title: "Brand owners and private label businesses",
    text: "Brand owners sourcing from overseas suppliers, or exporting under their own label, trade in their own name. A supplier relationship with an IEC-holding partner does not extend that partner's code to you.",
  },
  {
    title: "Service exporters and freelancers",
    text: "This one needs stating precisely rather than simply. Service exporters are not required to hold an IEC in the same blanket way that goods exporters are. However, where a service provider wants to claim benefits under the Foreign Trade Policy, the IEC becomes necessary. Software exporters, consulting firms and independent professionals receiving foreign remittances often need one for that reason, and banks may ask for it depending on how the remittance is routed.",
  },
];

export const WHO_NEEDS_SERVICE_NOTE =
  "Important note: If you export services and are unsure whether you need an IEC, the deciding questions are usually whether you intend to claim any Foreign Trade Policy benefit, and how your bank treats your inward remittances. Requirements may vary depending on the latest official regulatory guidelines, so this is worth confirming for your specific case before you either register unnecessarily or skip a registration you needed.";

export const WHO_NEEDS_GOVERNMENT: { title: string; text: string } = {
  title: "Government suppliers and OEMs",
  text: "Suppliers who import components, and OEMs shipping to overseas principals, trade in their own name and need their own code.",
};

export const ENTITY_TABLE_HEADING = "Entity types eligible to apply";

export const ENTITY_ROWS: TableRow[] = [
  {
    entity: "Proprietorship",
    applies: "Proprietor's own PAN",
    signing: "Aadhaar e-Sign",
  },
  {
    entity: "Partnership firm",
    applies: "Firm's PAN, supported by the partnership deed",
    signing: "Digital Signature Certificate",
  },
  {
    entity: "LLP",
    applies: "LLP's PAN, supported by the LLP agreement",
    signing: "Digital Signature Certificate",
  },
  {
    entity: "Private or public limited company",
    applies: "Company's PAN, supported by the certificate of incorporation",
    signing: "Digital Signature Certificate",
  },
  {
    entity: "HUF",
    applies: "HUF's PAN, applied through the Karta",
    signing: "As applicable to the entity",
  },
  {
    entity: "Trust",
    applies: "Trust's PAN, supported by the trust deed",
    signing: "As applicable to the entity",
  },
  {
    entity: "Society",
    applies: "Society's PAN, supported by the registration certificate",
    signing: "As applicable to the entity",
  },
];

export const ENTITY_TABLE_NOTE =
  "Requirements may vary depending on the latest official regulatory guidelines. We confirm the applicable signing route for your entity type before filing.";

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Legal authorisation to trade.",
    text: "The foundational benefit. Everything else follows from it.",
  },
  {
    title: "Customs clearance.",
    text: "The code quoted on your shipping bill or bill of entry is what allows the customs system to recognise you as an authorised trader.",
  },
  {
    title: "Trade payments through your bank.",
    text: "Export proceeds and import payments are both tied to your trade identity.",
  },
  {
    title: "Eligibility for export incentives.",
    text: "Remission and rebate schemes are claimed against IEC-linked exports.",
  },
  {
    title: "Access to duty-free input schemes.",
    text: "The Advance Authorisation Scheme allows qualifying exporters to import inputs without paying duty, subject to an export obligation.",
  },
  {
    title: "Access to concessional capital goods imports.",
    text: "The EPCG Scheme allows import of capital goods at concessional duty against an export obligation.",
  },
  {
    title: "Duty drawback claims.",
    text: "Refund of duties suffered on exported goods, claimed against IEC-linked shipments.",
  },
  {
    title: "AD Code registration at your port.",
    text: "Your bank's Authorised Dealer Code is registered at the customs station against your IEC. Without it, you cannot file shipping bills there.",
  },
  {
    title: "ICEGATE enrolment.",
    text: "Electronic filing of customs documents runs on top of your IEC.",
  },
  {
    title: "RCMC eligibility.",
    text: "Export promotion council membership, which gates several scheme benefits, requires an IEC first.",
  },
  {
    title: "Correct e-BRC generation.",
    text: "Evidence of export proceeds realisation flows from correctly linked IEC and bank records.",
  },
  {
    title: "One code for your whole catalogue.",
    text: "No re-registration when you add a product line.",
  },
  {
    title: "Risk reduction.",
    text: "The cheapest port charge is the one you never incur. An active, accurate code prevents a category of delay entirely.",
  },
  {
    title: "Business growth.",
    text: 'A registered trade identity is what lets you quote seriously to an overseas buyer instead of explaining that you are "in the process".',
  },
];

export const FEATURES_ITEMS: string[] = [
  "A 10-digit code used by customs, banks and DGFT to identify your business in trade transactions",
  "PAN-based issuance — one IEC per PAN, covering all business lines of that entity",
  "Entirely online — applied for, tracked, downloaded and updated on the DGFT portal",
  "Issued as an e-IEC — a digital certificate available from your dashboard at any time",
  "Lifetime validity — no expiry date and no paid renewal",
  "Free annual confirmation — one electronic update each financial year, within the April to June window",
  "Product-independent — covers every product you trade, with no per-product registration",
  "Entity-wide — covers all branches and business lines under the same legal entity",
  "Flexible authentication — signed using Aadhaar e-Sign or a registered Digital Signature Certificate, depending on entity type",
  "Amendable — address, bank, branch and management details can be modified as your business changes",
  "Surrenderable — can be formally surrendered when the entity stops trading",
  "Publicly verifiable — status can be checked online, which matters when you are verifying a new counterparty",
];

export const ELIGIBILITY_INTRO =
  "Any person or entity engaged in the import or export of goods from India is eligible, and generally required, to hold an IEC. This includes proprietorships, partnership firms, LLPs, private and public limited companies, HUFs, trusts and societies. Only one IEC is issued per PAN.";

export const ELIGIBILITY_WHO_HEADING = "Who qualifies";

export const ELIGIBILITY_WHO: string[] = [
  "Indian individuals trading in their own name, including sole proprietors",
  "Registered business entities of every common structure",
  "Companies incorporated in India with foreign shareholding — they apply like any other Indian company, against their Indian PAN",
  "MSMEs, startups and first-time exporters, regardless of size or turnover",
];

export const ELIGIBILITY_BASIC_HEADING = "Basic requirements";

export const ELIGIBILITY_BASIC: string[] = [
  "A valid PAN for the applicant entity",
  "A bank account in the entity's name, with the name matching the PAN exactly",
  "A verifiable business address with supporting proof",
  "An active mobile number and email address controlled by the business",
  "The ability to sign electronically, by Aadhaar e-Sign or Digital Signature Certificate",
];

export const ELIGIBILITY_EXEMPT_HEADING = "Who does not need one";

export const ELIGIBILITY_EXEMPT =
  "Certain categories are treated as exempt from the IEC requirement. Personal, non-commercial imports are generally treated differently from commercial trade, and service providers have their own specific position under the Foreign Trade Policy.";

export const ELIGIBILITY_NOTE =
  "Important note: Exemption categories are defined by DGFT and can change. We do not advise relying on an assumed exemption. It costs less to hold an IEC you did not strictly need than to discover at the port that you did. Requirements may vary depending on the latest official regulatory guidelines — ask us to confirm the current position for your specific activity.";

export const ACTIVITY_TABLE_HEADING = "Eligibility by activity, at a glance";

export const ACTIVITY_ROWS: TableRow[] = [
  {
    activity: "Commercial import of goods into India",
    position: "Required",
  },
  {
    activity: "Commercial export of goods from India",
    position: "Required",
  },
  {
    activity: "E-commerce, courier or postal export in your own name",
    position: "Required",
  },
  {
    activity: "Export of services",
    position:
      "Conditional — generally becomes necessary where Foreign Trade Policy benefits are claimed",
  },
  {
    activity: "Personal, non-commercial import",
    position:
      "Generally outside the commercial requirement; treatment depends on the nature of the import",
  },
];

export const DOCUMENTS_INTRO =
  "The document set is short, but it must be internally consistent. Most rejections come from a mismatch between documents, not from a missing document.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "PAN of the applicant entity",
    purpose: "The IEC is issued against this PAN",
    mandatory: "Mandatory",
    notes:
      "The entity's own PAN, not a director's or partner's personal PAN, for non-proprietor entities",
  },
  {
    document: "Aadhaar of the signatory",
    purpose: "Used for e-Sign authentication",
    mandatory: "Mandatory where Aadhaar e-Sign is the signing route",
    notes: "Must be linked to a mobile number you can access for OTP",
  },
  {
    document: "Digital Signature Certificate",
    purpose: "Alternative authentication method",
    mandatory: "Mandatory where Aadhaar e-Sign is not available for the entity type",
    notes: "Must be registered on the DGFT portal before filing",
  },
  {
    document: "Proof of business address",
    purpose: "Establishes the registered place of business",
    mandatory: "Mandatory",
    notes: "Must match the address you declare in the application",
  },
  {
    document: "Cancelled cheque or bank certificate",
    purpose: "Links the IEC to the account handling trade remittances",
    mandatory: "Mandatory",
    notes: "Must be in the entity's name for non-proprietor entities",
  },
  {
    document: "Certificate of incorporation",
    purpose: "Establishes legal existence",
    mandatory: "Mandatory for companies",
    notes: "—",
  },
  {
    document: "LLP agreement",
    purpose: "Establishes the LLP and its designated partners",
    mandatory: "Mandatory for LLPs",
    notes: "—",
  },
  {
    document: "Partnership deed",
    purpose: "Establishes the firm and its partners",
    mandatory: "Mandatory for partnership firms",
    notes: "—",
  },
  {
    document: "Trust deed or society registration certificate",
    purpose: "Establishes the entity",
    mandatory: "Mandatory for trusts and societies",
    notes: "—",
  },
  {
    document: "Details of proprietor, partners, directors or trustees",
    purpose: "Identifies the persons behind the entity",
    mandatory: "Mandatory",
    notes: "Must match the constitution document",
  },
  {
    document: "Board resolution or authorisation letter",
    purpose: "Evidences who may sign on the entity's behalf",
    mandatory: "Optional to mandatory, by entity type and signatory",
    notes: "Commonly required for companies",
  },
  {
    document: "Active mobile number and email ID",
    purpose: "OTP verification and all future DGFT correspondence",
    mandatory: "Mandatory",
    notes: "Should belong to the business, not an individual employee",
  },
  {
    document: "GSTIN",
    purpose: "Cross-checked at customs",
    mandatory: "Optional at application",
    notes: "Practically necessary for trading",
  },
];

export const DOCUMENTS_CHECKLIST_HEADING = "Before you file — a short checklist";

export const DOCUMENTS_CHECKLIST: string[] = [
  "Entity name identical across PAN, bank proof and constitution document",
  "Bank proof in the entity's name, not a personal name, for non-proprietor entities",
  "Address proof current and matching the declared address",
  "Mobile and email under the business's control",
  "Digital Signature Certificate procured and registered, if your entity type needs one",
  "Scanned files legible and within the portal's file size limits",
];

export const DOCUMENTS_CLOSING =
  "DGFT can revise documentary requirements through public notices and amendments to the Handbook of Procedures. Requirements may vary depending on the latest official regulatory guidelines, so we treat the live application form as authoritative and confirm the current list before we file.";

export const PROCESS_INTRO =
  "To apply for IEC registration, register on the DGFT portal with your PAN, email and mobile number; open Form ANF 2A under the IEC services menu; enter your entity, address and bank details; upload your documents; sign using Aadhaar e-Sign or a Digital Signature Certificate; pay the government application fee; and download your e-IEC once DGFT approves it.";

export const PROCESS_LEAD =
  "Below is how each stage actually runs, and what we do at each one.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Assessment",
    color: "#0b57b5",
    title: "Step 1 — Eligibility and requirement assessment",
    text: "Preparation. We establish whether you need an IEC at all, and in whose name it should be issued. We confirm the legal entity that will trade, check that no IEC already exists against that PAN, and identify your product or service category so that any parallel approvals can be planned into the same timeline. This step matters more than it looks. The code follows the PAN, so choosing the wrong applicant entity is expensive to unwind later.",
    deliverable: "Deliverable: a confirmed applicant entity and a written requirement note.",
  },
  {
    step: "02",
    label: "Documents",
    color: "#2563eb",
    title: "Step 2 — Document collection and verification",
    text: 'Documentation. We collect your PAN, constitution documents, address proof and bank proof — then check them against each other before anything reaches DGFT. The single most common cause of a query is a name mismatch between the PAN and the bank account. "M/s Sharma Exports" on the cheque and "Sharma Exports" on the PAN is enough to cause a problem. We find that at the start, not after a rejection.',
    deliverable: "Deliverable: a verified document set, formatted and sized for portal upload.",
  },
  {
    step: "03",
    label: "Portal setup",
    color: "#0891b2",
    title: "Step 3 — DGFT portal registration",
    text: "Account setup. We create your DGFT portal account using your business email and mobile, and complete OTP verification.",
    note: "Expert note: We register this account in your business's own name and contact details — never a consultant's. You will need this login every April for as long as the business trades. It should not live with someone else.",
    deliverable: "Deliverable: an active DGFT portal account under your control.",
  },
  {
    step: "04",
    label: "Filing",
    color: "#059669",
    title: "Step 4 — Filing Form ANF 2A",
    text: "Application. We complete the IEC application — entity type, address, bank details, and details of the proprietor, partners or directors as applicable — and upload the supporting documents. Where a GSTIN is linked, some fields pre-fill. Those still get checked rather than assumed correct.",
    deliverable: "Deliverable: a completed application ready for signature.",
  },
  {
    step: "05",
    label: "Signing",
    color: "#d97706",
    title: "Step 5 — Digital signing",
    text: "Authentication. The application is signed using Aadhaar e-Sign with OTP, or using a registered Digital Signature Certificate. Which route applies depends on your entity type.",
    note: "Pro tip: If your entity type needs a DSC and you do not already hold one, start that procurement alongside document collection. It is the most common avoidable delay in the entire process.",
    deliverable: "Deliverable: a signed, submission-ready application.",
  },
  {
    step: "06",
    label: "Submission",
    color: "#dc2626",
    title: "Step 6 — Fee payment and submission",
    text: "Submission. The government application fee is paid through the portal's payment gateway and the application is submitted. The fee is set by DGFT and published on the official portal. It can be revised by public notice, so we confirm the current amount at the time of filing rather than quoting a figure that may have changed.",
    deliverable: "Deliverable: submission acknowledgement and application reference number.",
  },
  {
    step: "07",
    label: "Review",
    color: "#7c3aed",
    title: "Step 7 — Review, query response and approval",
    text: "Review. We track the application on the portal daily. If DGFT raises a query, we respond with corrected information or documents straight away. This is where a filing service earns its fee — not in typing the form, but in noticing a query the day it appears and knowing what DGFT actually wants in response. An unanswered query is the single biggest reason a short process becomes a long one.",
    deliverable: "Deliverable: an issued e-IEC, downloaded and archived for you.",
  },
  {
    step: "08",
    label: "After approval",
    color: "#0f766e",
    title: "Step 8 — Post-approval setup and ongoing compliance",
    text: "After approval. Receiving the code is not the finish line. We guide you through AD Code registration at your customs station, ICEGATE enrolment, and RCMC from the relevant export promotion council if you intend to claim scheme benefits. We also diarise your annual update window and remind you before it opens.",
    note: "Important note: Businesses that treat the certificate as the end of the job often discover at the port that they cannot file a shipping bill, because the AD Code was never registered. Plan the IEC, AD Code and ICEGATE as one project.",
    deliverable: "Deliverable: a trade-ready compliance position, not just a certificate.",
  },
];

export const TIMELINE_INTRO: string[] = [
  "There are really two clocks running, and most businesses only think about one of them.",
  "Your clock — document readiness. Obtaining a bank certificate in the exact entity name, procuring a Digital Signature Certificate, or correcting a name mismatch with your bank. This is where days, and sometimes weeks, actually go.",
  "DGFT's clock — processing. Short for a clean, consistent application. Extended when a query is raised.",
  "Processing time depends on the latest regulatory requirements and on the completeness of the application, so we do not publish a guaranteed approval date. What we do commit to is what we control: document review turnaround, filing as soon as documents are complete, and same-day monitoring of any query.",
];

export const TIMELINE_FACTORS_HEADING = "Factors that affect your timeline";

export const TIMELINE_FACTORS: { title: string; text: string }[] = [
  {
    title: "Entity type.",
    text: "Proprietorships using Aadhaar e-Sign generally move fastest. Entities needing a DSC add procurement time at the front.",
  },
  {
    title: "Name consistency.",
    text: "A mismatch between PAN, bank proof and constitution documents is the classic delay.",
  },
  {
    title: "Bank proof availability.",
    text: "Some branches take several days to issue a certificate in the required format.",
  },
  {
    title: "Document quality.",
    text: "Illegible scans and oversized files cause avoidable failures at the upload stage.",
  },
  {
    title: "Query responsiveness.",
    text: "How quickly you answer DGFT determines the tail of the process.",
  },
  {
    title: "Application accuracy.",
    text: "A wrong entity type or misdeclared address means a correction after issue — which is a separate modification process, not a quick edit.",
  },
];

export const DELAYS_HEADING = "Common delays, and how we prevent them";

export const DELAYS_ROWS: TableRow[] = [
  {
    delay: "Bank proof rejected",
    cause: "Account name does not match entity name",
    prevent: "Three-way name check before the file is opened",
  },
  {
    delay: "DSC not ready",
    cause: "Procurement started after filing began",
    prevent: "DSC arranged in parallel with document collection",
  },
  {
    delay: "OTP not reachable",
    cause: "Mobile or email belongs to someone no longer with the business",
    prevent: "Contact details confirmed at onboarding",
  },
  {
    delay: "Query left unanswered",
    cause: "Nobody monitoring the portal",
    prevent: "Daily status tracking until the code is issued",
  },
  {
    delay: "Wrong entity type selected",
    cause: "Application filled without confirming legal structure",
    prevent: "Entity confirmed at the assessment stage",
  },
];

export const TIMELINE_NOTE =
  "Pro tip: If you already have a shipment date, work backwards and include the AD Code and ICEGATE steps. The IEC is usually the fast part. Port-level registration is what businesses forget to budget time for.";

export const COST_INTRO =
  "We do not publish a fixed price, because the honest answer depends on what your case actually requires. Here is exactly what drives the cost, so you can judge any quotation — ours or anyone else's.";

export const COST_ITEMS: { title: string; text: string }[] = [
  {
    title: "Government fee",
    text: "DGFT charges a one-time application fee for a new IEC, payable online at the time of filing. The fee is published on the official DGFT portal and can be revised by public notice, so we confirm the current amount before payment rather than quoting a figure that may be out of date. Separately, the annual updation filed within the April to June window with no change in details carries no government fee. Modifications to IEC details may attract their own fee.",
  },
  {
    title: "Documentation cost",
    text: "If your paperwork is already consistent, this is minimal. If a name mismatch has to be resolved with your bank first, or an address proof has to be arranged, coordination time increases.",
  },
  {
    title: "Digital Signature Certificate",
    text: "Where your entity type requires a DSC, this is a separate cost with its own vendor pricing. It is not part of the government fee and should never be bundled invisibly into a consultancy quote.",
  },
  {
    title: "Consultancy fee",
    text: "Our professional fee reflects the actual scope: entity complexity, number of signatories, whether documents need remedial work, and whether the engagement covers only the IEC or the wider registration chain.",
  },
  {
    title: "Remedial work",
    text: "Reactivating a deactivated code, correcting details filed incorrectly by someone else, or responding to an existing DGFT query is remedial work. It is scoped and priced separately from a fresh application.",
  },
  {
    title: "Renewal and ongoing compliance cost",
    text: "There is no paid renewal for an IEC. Where we handle your annual update on a continuing basis, that is a small ongoing engagement rather than a repeat of the registration fee.",
  },
  {
    title: "Scope beyond the IEC",
    text: "AD Code registration, ICEGATE enrolment and RCMC are separate pieces of work. A bundled engagement prices differently from a standalone IEC filing.",
  },
];

export const COST_NOTE =
  "Expert note: Be cautious of any quotation that does not separate the government fee from the professional fee. You should always be able to see which rupees go to DGFT and which go to the service provider. Ask us for a written scope and quotation for your specific case.";

export const VALIDITY_INTRO: string[] = [
  "An IEC is valid for the lifetime of the entity. There is no expiry date and no paid renewal.",
  "This makes the IEC unusual among Indian business registrations. Most certifications run for a fixed term and lapse on a date. The IEC does not.",
  "But lifetime validity is conditional, and this is the part that catches businesses out. The code remains valid only while the holder keeps confirming their details each financial year. Validity is permanent; active status is not automatic.",
  "There are two different states worth understanding:",
];

export const VALIDITY_STATES: { title: string; text: string }[] = [
  {
    title: "Valid",
    text: "the code exists and belongs to your entity, permanently",
  },
  {
    title: "Active",
    text: "the code is usable for customs clearance and trade payments right now",
  },
];

export const VALIDITY_CLOSING: string[] = [
  "A code can be valid and still be inactive. An inactive code stops your trade just as effectively as never having registered.",
  "If you are unsure of your current status, it can be checked online against your entity's details. We recommend checking before you plan a shipment, not after one is booked.",
];

export const RENEWAL_INTRO =
  "There is no renewal fee for an IEC — but there is an annual obligation, and several situations where the code must be changed rather than renewed.";

export const RENEWAL_PARTS: { title: string; text: string; bullets?: string[] }[] = [
  {
    title: "The annual update",
    text: "DGFT requires every IEC holder to log in and confirm their IEC details each financial year, between 1 April and 30 June. This applies even when nothing has changed. Confirming unchanged details carries no government fee and takes minutes.",
  },
  {
    title: "What happens if the window is missed",
    text: "The code is deactivated. Deactivation is systemic — it does not arrive as a letter that someone in your office will reliably notice and act on. Most businesses discover it when a consignment is already at the port.",
  },
  {
    title: "Reactivation",
    text: "A deactivated IEC is recoverable. Filing the pending update reactivates the code. The registration is not lost and you do not start again. What is lost is the time your shipment spends waiting.",
  },
  {
    title: "Modification — when details change",
    text: "Any change to your business details should be filed as a modification, not left until it is discovered:",
    bullets: [
      "Address change, including adding a branch",
      "Bank account change — important, because customs and your bank cross-check this",
      "Change in directors, partners or authorised signatory",
      "Contact detail changes for the mobile and email that receive DGFT correspondence",
      "Entity name change",
    ],
  },
  {
    title: "Restructuring",
    text: "If your business converts from a proprietorship to an LLP or a company, that is a new PAN — and therefore a different IEC position, not an amendment. DGFT must be informed. Add the IEC to your restructuring checklist alongside GST and bank account changes.",
  },
  {
    title: "Surrender",
    text: "If the entity stops trading, the IEC can be formally surrendered through the portal. Leaving a dormant code unattended, with an unfiled annual update, is untidy rather than dangerous — but surrendering properly closes the record.",
  },
];

export const RENEWAL_NOTE =
  "Important precaution: Treat 1 April as a fixed compliance date, in the same way you treat statutory filing deadlines. The annual update is one of the least demanding compliance tasks your business has, and one of the most disruptive to miss.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Name mismatch between PAN and bank account",
    text: "The application is queried or the bank proof rejected. Bank accounts are often opened under a trade style that does not exactly match the PAN name. The fix is to correct the account name with your bank, or obtain a bank certificate reflecting the PAN name, before filing. A three-way name check should be the first task in any application.",
  },
  {
    title: "The code was deactivated and nobody noticed",
    text: "A shipment stalls at customs. The annual update was missed, quite possibly years earlier. Filing the pending update restores the code, but the container is already accruing charges. This is the most common and most preventable problem we see.",
  },
  {
    title: "Digital Signature Certificate confusion",
    text: "The application cannot be signed and stalls at the final step, because the signing route depends on entity type and the requirement is discovered only at the signature screen. Confirming the route at the assessment stage removes the problem entirely.",
  },
  {
    title: "Portal credentials held by the wrong person",
    text: "The business cannot log in to update its own IEC, because the account was created on a former employee's or former consultant's email and mobile. Recovering access takes time that a compliance deadline rarely allows.",
  },
  {
    title: "Documentation inconsistencies",
    text: "Address proof that does not match the declared address, illegible scans, oversized files, or constitution documents that name people who have since left. Each is small. Together they are the reason a straightforward application becomes a query.",
  },
  {
    title: "Look-alike portals",
    text: "Search results and advertisements surface sites that resemble the official portal. Money is paid and documents handed over to something that is not DGFT. Apply only through the official portal, or through a provider who files there under your own credentials and shows you the submission.",
  },
  {
    title: "Assuming the IEC is enough to ship",
    text: "A shipping bill cannot be filed at the port because the AD Code was never registered at that customs station. The IEC is necessary, but it is not sufficient on its own.",
  },
  {
    title: "Approval delays from unanswered queries",
    text: "DGFT raises a query and nobody is watching the portal. Days pass. The application is not rejected — it is simply waiting on you.",
  },
];

export const HOW_WE_HELP_INTRO =
  "Our role is to remove the parts of this process that go wrong, and to keep the code working after it is issued.";

export const HOW_WE_HELP_ITEMS: { title: string; text: string }[] = [
  {
    title: "Eligibility and requirement assessment",
    text: "We confirm whether you need an IEC, which entity should hold it, and what else your product category will require. For service exporters, we help you reach a defensible answer rather than a guess.",
  },
  {
    title: "Documentation support",
    text: "We collect, check and format your documents before anything is filed. The name-match check, the bank proof format, the address proof, the signing route for your entity type — all confirmed at the start. This is where most rejections are prevented.",
  },
  {
    title: "Application assistance and portal filing",
    text: "We complete Form ANF 2A on the official DGFT portal, under your own login, and manage the signing and fee payment steps with you.",
  },
  {
    title: "Query resolution",
    text: "We monitor your application daily and respond to DGFT queries as they arise, with the information DGFT is actually asking for.",
  },
  {
    title: "Annual update management",
    text: "We track your April to June window and file your annual updation, so your code does not lapse quietly between shipments.",
  },
  {
    title: "Reactivation and modification",
    text: "If your code is already deactivated, we file the pending update and restore it. If your address, bank account or management details have changed, we file the modification correctly.",
  },
  {
    title: "Compliance guidance beyond the code",
    text: "We guide you through AD Code registration, ICEGATE enrolment and RCMC, and we map the product-specific approvals your category needs — BIS, FSSAI, CDSCO, WPC, LMPC and others — so the whole requirement is visible at once instead of arriving in pieces.",
  },
  {
    title: "End-to-end coordination",
    text: "One team, one point of contact, from the first assessment to the annual update three years later.",
  },
];

export const HOW_WE_HELP_NOTE =
  "What we do not do: we do not promise approval, and we do not promise a DGFT decision date. Those are not ours to give. We commit to accurate filing, fast response and honest status updates. Be cautious of anyone who promises more.";

export const WHY_CHOOSE_ITEMS: { title: string; text: string }[] = [
  {
    title: "Experience across the full compliance stack",
    text: "We are not a single-registration shop. We work across DGFT registrations, BIS certification, FSSAI, BEE, EPR, WPC-ETA, CDSCO and inspection services. That matters for IEC because most businesses needing one also need something else — an electronics importer needs BIS, a packaged goods importer needs LMPC, a food exporter needs FSSAI. We see the whole requirement rather than the one piece in front of us.",
  },
  {
    title: "Regulatory expertise, not form-filling",
    text: "Anyone can type into an application form. The value is in knowing which entity should hold the code, whether a service exporter genuinely needs one, why a bank certificate keeps being rejected, and what DGFT actually wants when it raises a query.",
  },
  {
    title: "Government portal knowledge",
    text: "We file on the official DGFT portal, under your credentials, so your business retains control of its own account. You will need that account every year. It should not live with your consultant.",
  },
  {
    title: "Documentation and coordination support",
    text: "Documents are verified before filing rather than after rejection. It is an unglamorous step and it is the main reason applications go through cleanly.",
  },
  {
    title: "Dedicated coordinator",
    text: "One point of contact from document collection through to certificate download and beyond. Not a ticket queue.",
  },
  {
    title: "Transparent communication",
    text: "A written scope, a clear split between government fees and professional fees, and visibility of status while your application is live. If something will take longer than expected, we tell you when we know, not when you ask.",
  },
  {
    title: "Defined timelines on what we control",
    text: "We commit to document review turnaround, filing once documents are complete, and same-day query monitoring. We do not commit to DGFT's decision date.",
  },
  {
    title: "Industry knowledge",
    text: "Exporters in textiles, engineering goods, chemicals, pharmaceuticals, agriculture and handicrafts each face a different set of parallel requirements. So do importers of electronics, machinery and packaged goods. We have worked across these categories and plan for them at the assessment stage.",
  },
  {
    title: "Post-approval support",
    text: "Annual update reminders, modification handling, reactivation of deactivated codes, and guidance on the registrations that follow the IEC.",
  },
];

export const WHY_CHOOSE_CTAS = [
  { label: "Request a Callback", href: "/contact" },
  { label: "Send Your Enquiry", href: "/contact" },
  { label: "Talk to our IEC team", href: "/contact" },
];

export const INDUSTRIES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Engineering and capital goods.",
    text: "Exporters shipping components, machinery and fabricated products, usually alongside destination-market certification requirements.",
  },
  {
    title: "Textiles and apparel.",
    text: "Exporters where the IEC sits alongside council registration and participation in rebate schemes.",
  },
  {
    title: "Chemicals and allied products.",
    text: "Exporters whose shipments carry additional classification and documentation demands.",
  },
  {
    title: "Pharmaceuticals and life sciences.",
    text: "Exporters where the IEC works alongside CDSCO requirements and destination-market approvals.",
  },
  {
    title: "Food, agriculture and spices.",
    text: "Exporters who typically need FSSAI and commodity board registration in parallel with the IEC.",
  },
  {
    title: "Electronics and electricals.",
    text: "Importers facing BIS registration and, for wireless products, WPC approval alongside the IEC.",
  },
  {
    title: "Handicrafts and handlooms.",
    text: "Often small units taking a first export order, who need the whole compliance stack explained plainly rather than assumed.",
  },
  {
    title: "E-commerce and consumer brands.",
    text: "Online sellers, marketplace exporters and dropshipping operations shipping in their own name.",
  },
  {
    title: "Software and IT services.",
    text: "Software export companies and consulting firms, where the IEC question is tied to Foreign Trade Policy benefits and remittance handling.",
  },
  {
    title: "Trading companies.",
    text: "Merchant exporters and import trading houses whose entire business model runs on the code.",
  },
];

export const WHERE_WE_WORK_HEADING = "Where we work";

export const WHERE_WE_WORK =
  "Our office is in Noida, and we file for businesses across India. The DGFT process is national and fully online, so your location does not limit where we can act — but local presence helps when documents need collecting or a conversation is easier in person.";

export const LOCATION_ROWS: TableRow[] = [
  {
    location: "Noida",
    coverage: "Local office; IEC registration consultant support in person or remotely",
  },
  {
    location: "Greater Noida",
    coverage: "Served from our Noida office",
  },
  {
    location: "Delhi NCR",
    coverage: "IEC code registration across the National Capital Region",
  },
  {
    location: "Delhi",
    coverage: "Serving importers, exporters and trading firms in the city",
  },
  {
    location: "Ghaziabad",
    coverage: "Served from our Noida office",
  },
  {
    location: "Gurugram",
    coverage: "Served from our Noida office",
  },
  {
    location: "Mumbai",
    coverage: "IEC registration support for Maharashtra-based exporters and importers",
  },
  {
    location: "Maharashtra",
    coverage: "Statewide coverage, including port-linked businesses",
  },
  {
    location: "Ahmedabad",
    coverage: "Support for Gujarat's exporter base",
  },
  {
    location: "Gujarat",
    coverage: "Statewide coverage for exporters in engineering, chemicals and textiles",
  },
  {
    location: "Chennai",
    coverage: "Support for Tamil Nadu exporters and importers",
  },
  {
    location: "Tamil Nadu",
    coverage: "Statewide coverage, including automotive and textile exporters",
  },
  {
    location: "Bengaluru",
    coverage: "Support for technology, electronics and service export businesses",
  },
  {
    location: "Hyderabad",
    coverage: "Support for pharmaceutical and engineering exporters",
  },
  {
    location: "Pune",
    coverage: "Support for manufacturing and engineering exporters",
  },
  {
    location: "Kolkata",
    coverage: "Support for eastern India importers and exporters",
  },
];

export const LOCATION_CLOSING =
  "Requirements are the same nationwide. What changes by location is which customs station you register your AD Code with, and which regional DGFT office handles any query.";

export const MISTAKES_ROWS: TableRow[] = [
  {
    mistake: "Assuming a PAN means you already have an IEC",
    impact: "Consignment held at customs on the first shipment",
    avoid: "Apply formally and verify the code shows as issued and active",
  },
  {
    mistake: "Missing the April to June annual update",
    impact: "Automatic deactivation; trade stops",
    avoid: "Diarise 1 April; use a reminder service",
  },
  {
    mistake: "Bank account name not matching the PAN name",
    impact: "Query or rejection",
    avoid: "Run a three-way name check before filing",
  },
  {
    mistake: "Registering the portal account on a personal or consultant's email",
    impact: "The business cannot access its own IEC later",
    avoid: "Use a business-controlled email and mobile",
  },
  {
    mistake: "Applying through a look-alike portal",
    impact: "Money lost and documents exposed",
    avoid: "Use the official DGFT portal only",
  },
  {
    mistake: "Selecting the wrong entity type",
    impact: "Post-issue modification required",
    avoid: "Confirm legal structure at the assessment stage",
  },
  {
    mistake: "Applying for a second IEC on the same PAN",
    impact: "The application fails",
    avoid: "One PAN, one IEC — use the existing code",
  },
  {
    mistake: "Ignoring AD Code and ICEGATE",
    impact: "Cannot file shipping bills despite holding an IEC",
    avoid: "Plan port-level registration alongside the IEC",
  },
  {
    mistake: "Not updating after restructuring",
    impact: "The IEC no longer matches the trading entity",
    avoid: "Add IEC to your restructuring checklist",
  },
  {
    mistake: "Relying on an assumed exemption",
    impact: "Discovering the requirement at the port",
    avoid: "Verify the current position for your activity",
  },
  {
    mistake: "Treating the IEC as the whole requirement",
    impact: "Product approvals missing at import",
    avoid: "Map BIS, FSSAI, CDSCO, WPC and LMPC needs early",
  },
  {
    mistake: "Losing the certificate and the login together",
    impact: "An avoidable scramble under deadline pressure",
    avoid: "Archive the e-IEC and record the credentials",
  },
];

export const EXPERT_TIPS: { title: string; text: string }[] = [
  {
    title: "1. Register before you need it.",
    text: "The IEC is inexpensive and permanent. Obtaining it under deadline pressure, with a name mismatch to resolve, is the expensive version.",
  },
  {
    title: "2. Own your DGFT login.",
    text: "Business email, business mobile, credentials recorded in your compliance file.",
  },
  {
    title: "3. Make 1 April a fixed internal date.",
    text: "The annual update takes minutes. Missing it stops your business.",
  },
  {
    title: "4. Fix the bank name first.",
    text: "It is the most common cause of delay and the slowest to resolve, because it depends on your bank rather than on you.",
  },
  {
    title: "5. Plan the IEC, AD Code and ICEGATE together.",
    text: "Holding a code you cannot ship against helps nobody.",
  },
  {
    title: "6. Choose the applicant entity deliberately.",
    text: "The code follows the PAN, so restructuring means revisiting it.",
  },
  {
    title: "7. Check a new counterparty's IEC.",
    text: "Verification is available online and is basic diligence on an unfamiliar supplier.",
  },
  {
    title: "8. Do not over-rely on exemptions.",
    text: "Confirm the current position for your specific activity before deciding you are outside the requirement.",
  },
  {
    title: "9. File changes as they happen.",
    text: "Address, bank and management changes should be filed as modifications, not discovered during a customs check.",
  },
  {
    title: "10. Map your product approvals early.",
    text: "For regulated categories, the IEC is the straightforward part. BIS, FSSAI, CDSCO or WPC timelines are what will actually determine your launch date.",
  },
];

export const COMPARISON_ROWS: TableRow[] = [
  {
    factor: "Government fee",
    diy: "Identical in all three cases",
    consultant: "Identical",
    firm: "Identical",
  },
  {
    factor: "Professional fee",
    diy: "None",
    consultant: "Usually lower",
    firm: "Scoped to the actual work",
  },
  {
    factor: "Document verification",
    diy: "Your own judgement",
    consultant: "Varies by individual",
    firm: "Structured pre-filing check",
  },
  {
    factor: "Entity-type guidance",
    diy: "Self-researched",
    consultant: "Usually sound",
    firm: "Documented assessment",
  },
  {
    factor: "DSC procurement",
    diy: "Arranged yourself",
    consultant: "Sometimes assisted",
    firm: "Coordinated in parallel",
  },
  {
    factor: "Query handling",
    diy: "You must monitor the portal",
    consultant: "Depends on availability",
    firm: "Daily tracking until issue",
  },
  {
    factor: "Continuity if the person is unavailable",
    diy: "Not applicable",
    consultant: "Single point of failure",
    firm: "Team coverage",
  },
  {
    factor: "Annual update follow-up",
    diy: "Your responsibility",
    consultant: "Rarely included",
    firm: "Reminder support available",
  },
  {
    factor: "Adjacent registrations",
    diy: "Separate effort each time",
    consultant: "Limited scope",
    firm: "AD Code, ICEGATE and RCMC coordinated",
  },
  {
    factor: "Product approvals",
    diy: "Separate vendors",
    consultant: "Usually out of scope",
    firm: "Handled by the same team",
  },
  {
    factor: "Best suited to",
    diy: "A proprietor with consistent documents and time",
    consultant: "A simple case with a trusted contact",
    firm: "Companies, regulated categories, group entities and remedial cases",
  },
];

export const COMPARISON_NOTE =
  "Our honest position: if you are a proprietor whose PAN and bank account already match, and you have an afternoon, you can file this yourself on the official portal. We would rather say so than take a fee for something you did not need. Where we genuinely add value is complex entity structures, regulated product categories, deactivated codes, rejected applications, group companies managing several IECs, and businesses that want the whole trade compliance stack handled by one team.";

export const TERMS_ROWS: TableRow[] = [
  {
    term: "Import Export Code (IEC)",
    meaning: "The 10-digit code issued by DGFT that identifies your business in international trade",
  },
  {
    term: "DGFT",
    meaning: "Directorate General of Foreign Trade, the authority that issues the IEC",
  },
  {
    term: "Foreign Trade Policy",
    meaning: "The policy framework governing India's foreign trade and its schemes",
  },
  {
    term: "Handbook of Procedures",
    meaning: "The procedural companion to the Foreign Trade Policy",
  },
  {
    term: "FTDR Act, 1992",
    meaning: "The Foreign Trade (Development and Regulation) Act, under which the IEC is issued",
  },
  {
    term: "ANF 2A",
    meaning: "The prescribed application form for IEC on the DGFT portal",
  },
  {
    term: "e-IEC",
    meaning: "The electronic certificate in which the IEC is issued",
  },
  {
    term: "PAN",
    meaning: "Permanent Account Number; the IEC is issued against it",
  },
  {
    term: "Digital Signature Certificate",
    meaning: "An electronic signing credential used to authenticate applications",
  },
  {
    term: "Aadhaar e-Sign",
    meaning: "An OTP-based electronic signing method available to certain entity types",
  },
  {
    term: "AD Code",
    meaning: "Your bank's Authorised Dealer Code, registered at a customs station",
  },
  {
    term: "ICEGATE",
    meaning: "The customs electronic filing gateway",
  },
  {
    term: "Shipping bill",
    meaning: "The customs document filed for an export consignment",
  },
  {
    term: "Bill of entry",
    meaning: "The customs document filed for an import consignment",
  },
  {
    term: "ITC (HS) Code",
    meaning: "The classification system used to identify traded goods",
  },
  {
    term: "RCMC",
    meaning: "Registration-cum-Membership Certificate from an export promotion council",
  },
  {
    term: "Export Promotion Council",
    meaning: "A sector body that issues RCMC and supports exporters",
  },
  {
    term: "e-BRC",
    meaning: "Electronic Bank Realisation Certificate, evidencing realisation of export proceeds",
  },
  {
    term: "Advance Authorisation",
    meaning: "A scheme allowing duty-free import of inputs against an export obligation",
  },
  {
    term: "EPCG Scheme",
    meaning: "A scheme allowing concessional import of capital goods against an export obligation",
  },
  {
    term: "Duty drawback",
    meaning: "Refund of duties suffered on goods that are exported",
  },
  {
    term: "RoDTEP",
    meaning: "A remission scheme for duties and taxes on exported products",
  },
  {
    term: "Letter of Undertaking",
    meaning: "A tax instrument allowing export without payment of IGST",
  },
  {
    term: "Annual updation",
    meaning: "The yearly confirmation of IEC details required between April and June",
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is IEC registration?",
    a: "It is the process of obtaining a 10-digit Importer Exporter Code from the DGFT. The code is required to clear goods through Indian customs and to route trade-related payments through your bank.",
  },
  {
    q: "What is the full form of IEC?",
    a: "IEC stands for Importer Exporter Code, also written as Import Export Code.",
  },
  {
    q: "Who issues the Import Export Code in India?",
    a: "The Directorate General of Foreign Trade, which operates under the Ministry of Commerce and Industry.",
  },
  {
    q: "Is IEC mandatory for export from India?",
    a: "For export of goods, yes. For export of services the position is conditional and generally becomes relevant where Foreign Trade Policy benefits are claimed.",
  },
  {
    q: "Is IEC mandatory for import into India?",
    a: "Yes. Commercial imports cannot be cleared through customs without a valid IEC quoted on the bill of entry.",
  },
  {
    q: "How much does IEC registration cost?",
    a: "DGFT charges a one-time application fee, published on the official portal and payable online at the time of filing. Professional fees are separate and depend on entity complexity and scope. We confirm the current government fee before payment.",
  },
  {
    q: "How long does IEC registration take?",
    a: "Processing time depends on the latest regulatory requirements and on how complete your application is. In practice, document readiness usually affects the total timeline more than DGFT processing does.",
  },
  {
    q: "Is the IEC valid for a lifetime?",
    a: "Yes. There is no expiry date and no paid renewal — but the code must be confirmed electronically each financial year between 1 April and 30 June to remain active.",
  },
  {
    q: "Do I need to renew my IEC every year?",
    a: "There is no paid renewal. What is required is the free annual updation within the April to June window, even if nothing has changed.",
  },
  {
    q: "What happens if the IEC annual update is missed?",
    a: "The code is deactivated. A deactivated IEC blocks customs clearance and trade payments until the pending update is filed.",
  },
  {
    q: "How do I reactivate a deactivated IEC?",
    a: "File the pending annual update on the DGFT portal. The code reactivates on successful submission; the registration itself is not lost.",
  },
  {
    q: "Is the IEC the same as my PAN?",
    a: "The number is the same, because the IEC is PAN-based. But the code does not exist until DGFT issues it against a filed application.",
  },
  {
    q: "Can one PAN have two IEC codes?",
    a: "No. One IEC is issued per PAN, covering all business lines and branches of that entity.",
  },
  {
    q: "Can an individual apply for an IEC?",
    a: "Yes. A sole proprietor can apply using their own PAN, without forming a separate legal entity.",
  },
  {
    q: "Do freelancers need an IEC?",
    a: "Not automatically. Freelancers exporting services typically need one where they claim Foreign Trade Policy benefits, and depending on how their bank routes inward remittances.",
  },
  {
    q: "Can I get an IEC without GST registration?",
    a: "GST registration is not what triggers IEC issuance. In practice a GSTIN becomes necessary for customs clearance, because customs cross-checks it against your filings.",
  },
  {
    q: "What documents are required for IEC registration?",
    a: "PAN, proof of business address, bank proof in the entity's name, constitution documents appropriate to your entity type, details of the persons behind the entity, and an active business mobile and email.",
  },
  {
    q: "What is Form ANF 2A?",
    a: "ANF 2A is the prescribed IEC application form, filed online on the DGFT portal.",
  },
  {
    q: "Can I apply for an IEC without a Digital Signature Certificate?",
    a: "Proprietors can generally use Aadhaar e-Sign. Other entity types are typically expected to use a registered DSC. Requirements may vary depending on the latest official regulatory guidelines, so we confirm the route for your entity before filing.",
  },
  {
    q: "How do I check my IEC status?",
    a: "Log in to the DGFT portal and view your IEC profile, which shows whether the code is active or deactivated.",
  },
  {
    q: "How do I download my IEC certificate?",
    a: "The e-IEC can be downloaded from your DGFT dashboard at any time.",
  },
  {
    q: "How do I change the bank account or address in my IEC?",
    a: "Through the modification process on the DGFT portal, supported by the relevant proof. It should be filed when the change happens, not later.",
  },
  {
    q: "What is the difference between IEC and AD Code?",
    a: "The IEC is your trade identity issued by DGFT. The AD Code is your bank's Authorised Dealer code, registered at a specific customs station so you can file shipping bills there. You need both.",
  },
  {
    q: "What is the difference between IEC and RCMC?",
    a: "The IEC is mandatory for trading. RCMC is membership of an export promotion council, obtained after the IEC, and needed to claim certain scheme benefits.",
  },
  {
    q: "Do I need an IEC to export samples?",
    a: "Commercial movement of goods in your business's name generally requires an IEC. Treatment can vary with the mode and value of the shipment, so confirm your specific case.",
  },
  {
    q: "Does a marketplace or global e-commerce seller need an IEC?",
    a: "If goods cross the border commercially in your name, yes. Marketplace onboarding frequently asks for it directly.",
  },
  {
    q: "Can I surrender my IEC?",
    a: "Yes. A formal surrender can be filed on the DGFT portal when the entity stops trading.",
  },
  {
    q: "What happens to my IEC if my business structure changes?",
    a: "A conversion from proprietorship to LLP or company means a new PAN, and therefore a different IEC position rather than a simple amendment. DGFT must be informed.",
  },
  {
    q: "What happens if I import or export without an IEC?",
    a: "The immediate consequence is operational — customs will not clear the consignment, and charges accrue while it waits. Consequences under the applicable law depend on the circumstances, so take specific advice if a shipment is already affected.",
  },
  {
    q: "Can you help if my IEC application was rejected?",
    a: "Yes. We review the rejection reason, correct the underlying issue — usually a document or name mismatch — and refile.",
  },
];

export const CTA_HEADING = "Start Your IEC Registration";

export const CTA_PARAGRAPHS: string[] = [
  "The Import Export Code is the smallest registration standing between an Indian business and international trade. It is also the one most likely to quietly stop a shipment years after it was first obtained.",
  "We handle the whole of it: assessing whether you need the code and in whose name, verifying your documents before they reach DGFT, filing the application on the official portal under your own credentials, tracking it through to approval, and keeping you inside the April to June window every year afterwards. Where your category needs more — AD Code, ICEGATE, RCMC, BIS, FSSAI, CDSCO or WPC — the same team handles that too.",
  "Tell us what you trade and which entity will hold the code. We will tell you what your case actually requires, and what it will take to get there.",
];

export const CTA_BUTTONS = [
  { label: "Request a Callback", href: "/contact" },
  { label: "Send Your Enquiry", href: "/contact" },
  { label: "Talk to our IEC team", href: "/contact" },
  { label: "Message us on WhatsApp", href: "/contact" },
];
