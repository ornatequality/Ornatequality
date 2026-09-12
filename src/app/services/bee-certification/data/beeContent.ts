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

export const BEE_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction to BEE Star Rating Registration" },
  { id: "what-is-bee", label: "What Is BEE Star Rating Registration?" },
  { id: "why-matters", label: "Why BEE Star Rating Registration Matters for Your Business" },
  { id: "who-needs", label: "Who Needs BEE Star Rating Registration?" },
  { id: "benefits", label: "Key Benefits of Working With Us" },
  { id: "service-includes", label: "Key Features of Our BEE Registration Service" },
  { id: "eligibility", label: "Eligibility for BEE Star Rating Registration" },
  { id: "process", label: "Step-by-Step BEE Registration Process" },
  { id: "timeline", label: "BEE Registration Timeline" },
  { id: "cost", label: "Cost Factors for BEE Registration" },
  { id: "validity", label: "Validity of BEE Star Rating Registration" },
  { id: "renewal", label: "BEE Registration Renewal" },
  { id: "challenges", label: "Common Challenges in BEE Registration" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-ornate", label: "Why Choose Ornate Quality Service Pvt Ltd" },
  { id: "how-clients-describe", label: "How Clients Typically Describe Us" },
  { id: "industries", label: "Industries and Product Categories We Serve" },
  { id: "popular-searches", label: "Popular Product-Specific Searches We Support" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "BEE Registration: How It Compares" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Started With Your BEE Registration" },
];

export const BANNER_TITLE = "BEE Star Rating Registration Consultant in India";

export const BANNER_DESCRIPTION =
  "Ornate Quality Service Pvt Ltd helps manufacturers, importers, exporters, and brand owners complete BEE registration for electrical and electronic appliances sold in India. Whether you need a straightforward BEE star rating registration for a single product or ongoing support across a full catalogue, our team manages documentation and lab coordination so your products can legally carry the star rating label before they reach the market.";

export const WHY_BUSINESSES_CHOOSE_HEADING = "Why Businesses Choose Us";

export const WHY_BUSINESSES_CHOOSE_ITEMS: string[] = [
  "trusted BEE registration consultancy for manufacturers, importers, traders, and MSMEs across India.",
  "end-to-end BEE certification support — documentation, lab coordination, and portal filing under one roof.",
  "experienced BEE compliance consultant team that understands manufacturer, importer, and exporter workflows.",
  "transparent BEE registration process with clear communication at every stage.",
  "Coverage across the mandatory and voluntary appliance categories currently notified under the BEE Standards & Labelling Programme.",
  "Support available for businesses in Delhi, Mumbai, Bengaluru, and across India.",
];

export const READY_TO_REGISTER =
  "Ready to register Room Air Conditioners for BEE star label now, or a different product? — speak with our compliance team, or request a BEE registration quotation for Self-Ballasted LED Lamps — or any other product on our coverage list.";

export const INTRO_PARAGRAPHS: string[] = [
  "BEE registration in India is the process through which manufacturers and importers get their appliances tested, rated, and labelled under the Bureau of Energy Efficiency's Standards & Labelling Programme. The star rating label — from one star to five stars — tells buyers how energy-efficient a product is compared to similar models. For appliance categories that are currently notified as mandatory, this label is generally a legal requirement before the product can be sold in India, subject to the specific notification governing that category.",
  "Businesses turn to BEE compliance registration for two main reasons. First, for product categories that fall under mandatory labelling, the applicable product generally cannot be legally sold without a valid BEE star label, subject to the specific notification governing that category. Second, even where labelling is voluntary, many manufacturers choose to register anyway because the star rating has become a trust signal that buyers, dealers, and government procurement bodies actively look for.",
  "Exactly when registration becomes mandatory for a specific appliance depends on the current BEE Schedule and notifications in force at the time. Requirements may vary depending on the latest official regulatory guidelines, so businesses should always confirm the applicable category status before planning production or import timelines.",
  "Once registered, our clients can expect documentation and coordination support for BEE registration throughout the process, along with practical guidance on what testing, paperwork, and portal steps apply to their specific product.",
  "It helps to think of BEE registration as an ongoing relationship with the regulator rather than a one-time approval. A product's registration has a defined validity period, the rating criteria for a category can be revised over time, and a business that launches new models regularly will find itself back in the same process again and again. Building a repeatable, well-documented approach from the first registration onward tends to save considerably more time than treating each application as a fresh, unrelated task.",
  "This page focuses specifically on the registration and labelling process itself — what the service involves, who it applies to, and how we support businesses through it. If you are still deciding whether your product needs this service at all, the \"Who Needs This\" and \"Eligibility\" sections further down are the best place to start.",
];

export const WHAT_IS_PARAGRAPHS: string[] = [
  "BEE star label registration is a certification process administered under the Energy Conservation Act framework, through which an appliance model is tested for energy performance and assigned a star rating that must appear on the product and its packaging. The objective is straightforward: help consumers compare products on energy consumption, and push manufacturers toward more efficient designs.",
  "The process typically involves getting the product tested at a recognised laboratory, submitting the test results and supporting documents through the official registration portal, and — once approved — paying the applicable label fee before the star label can be applied to the product. BEE S&L registration is based on manufacturer/permittee declarations, but the documentation and testing requirements are product-specific. Certain categories/schedules require specified test reports, while BEE also independently verifies registered models through check testing at empanelled/accredited third-party laboratories.",
  "A BEE model registration is generally granted at the model level rather than the brand level, though the exact requirement can vary — depending on the applicable product category and BEE's model-grouping or series provisions, related models may in some cases be assessed together rather than requiring a fully separate registration for every individual SKU. The applicable structure should be confirmed against the current BEE requirements for that specific category.",
  "From a business perspective, this service sits at the intersection of regulatory compliance, product testing, and market access. It matters to manufacturers who assemble appliances in India, importers who bring finished appliances into the country, and brand owners who source products under their own label from third-party factories.",
  "The underlying idea behind the scheme is comparative labelling — a star rating only means something because it is measured against defined performance benchmarks for that specific product category, under standardised test conditions. This is why the same appliance type from two different manufacturers can be tested using the same methodology and compared fairly on the label, and why testing needs to happen at a laboratory recognised for that particular category rather than any general facility.",
  "It is also worth understanding that the scheme is not static. Rating thresholds, testing methods, and the list of categories under mandatory labelling are reviewed periodically by the regulator, generally to keep pace with improving manufacturing standards and technology. A rating that qualified for four stars under an older criterion may not automatically qualify for the same rating under a revised one, which is one reason registrations are not indefinite and periodic re-registration is built into the system.",
];

export const WHY_MATTERS_INTRO =
  "For categories where labelling is mandatory, BEE registration penalty for non-compliance is a real business risk — selling an unregistered product in a mandatory category can attract regulatory action, subject to the applicable laws, regulations, and BEE notifications in force at the time. We do not quote a fixed penalty amount here, since the specific consequence depends on the product category and the current regulatory framework rather than a single blanket figure. Beyond the legal angle, the star label has a direct commercial impact.";

export const BUSINESS_BENEFITS_HEADING = "Business Benefits";

export const BUSINESS_BENEFITS: { title: string; text: string }[] = [
  {
    title: "Legal market access",
    text: "for mandatory-category products, a valid registration is generally required before the product can be sold in India, subject to the applicable BEE notification for that category.",
  },
  {
    title: "Consumer trust",
    text: "the star label is a recognised signal of energy performance that buyers actively compare before purchase.",
  },
  {
    title: "Retail and e-commerce eligibility",
    text: "many large retailers and marketplaces require proof of BEE registration before listing eligible appliance categories.",
  },
  {
    title: "Government and institutional procurement",
    text: "public-sector buyers frequently prefer or require energy-labelled products.",
  },
  {
    title: "BEE compliance for electrical appliances",
    text: "reduces the risk of last-minute production or import delays caused by compliance gaps.",
  },
];

export const WHY_MATTERS_CLOSING: string[] = [
  "Even where a category is currently voluntary, registering early can be a competitive advantage — it signals that a brand takes energy performance seriously, and it avoids scrambling to comply if the category is later moved to the mandatory list. Staying ahead of BEE 2026 regulations compliance requirements is one of the most common reasons growing businesses choose to work with a consultant rather than track every notification themselves.",
  "There is also a supply-chain dimension worth considering. Larger retailers, government procurement programmes, and export partners increasingly ask for proof of energy-labelling compliance as a precondition for doing business, independent of whether the category is technically mandatory yet. A business that can produce a valid registration on request avoids losing a sales opportunity to a slower-moving competitor, and avoids the scramble of trying to register a product after a buyer has already asked for the certificate.",
];

export const WHO_NEEDS_INTRO =
  "This service is relevant to any business that manufactures, imports, trades, or sells appliances in India that fall under a BEE-notified category. Based on the products involved, this typically includes:";

export const WHO_NEEDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "BEE registration for manufacturers",
    text: "producing appliances domestically for the Indian market.",
  },
  {
    title: "BEE registration for importers",
    text: "bringing finished appliances into India for resale.",
  },
  {
    title: "BEE registration for exporters",
    text: "who also sell a portion of production within India.",
  },
  {
    title: "Brand owners",
    text: "who private-label appliances manufactured by a third-party factory.",
  },
  {
    title: "MSMEs and startups",
    text: "entering the appliance manufacturing or import business for the first time.",
  },
  {
    title: "Large enterprises",
    text: "managing registration across multiple product lines and factories.",
  },
  {
    title: "E-commerce sellers",
    text: "listing eligible appliance categories on Indian marketplaces.",
  },
];

export const WHO_NEEDS_CLOSING: string[] = [
  "BEE registration for appliances applies across a wide range of product groups — from everyday consumer electronics to industrial and solar equipment. Coverage includes BEE registration for computers and laptops, BEE registration for water heaters, BEE registration for distribution transformers, and dozens of other categories, spanning both everyday household appliances and specialised industrial equipment.",
  "BEE registration for an importer broadly follows the same Standards & Labelling registration framework as registration by an Indian manufacturer. However, importers may have additional documentation requirements to establish the foreign manufacturer's authorization, manufacturing facility and the import/brand relationship. The exact additional documents depend on the applicable product schedule and BEE's portal requirements. Brand owners who source finished products from a contract manufacturer sit somewhere in between — they usually need to coordinate with their manufacturing partner to obtain test data and technical specifications, even though the registration itself is filed under the brand owner's name.",
  "A useful way to think about whether this service applies to you is to ask a simple question: does your product physically enter the Indian market, whether made here or brought in from abroad, and does it fall under a category the regulator has notified for energy labelling? If the answer is yes, registration is not optional paperwork — it is a condition of being able to sell that product legally. If you are unsure whether your specific product is covered, that uncertainty itself is a good reason to check early rather than assume either way.",
];

export const BENEFITS_ITEMS: string[] = [
  "fast and reliable BEE approval service that keeps your product launch or import schedule on track.",
  "client-focused BEE registration assistance tailored to your product category and business size.",
  "consistent post-registration compliance support, so registrations stay valid and up to date.",
  "responsive BEE compliance support team available to answer queries as they come up.",
  "proven track record in BEE registration across multiple appliance categories.",
  "specialists in NABL lab coordination who manage testing logistics on your behalf — including labs that are NABL Accredited (in-house lab), NABL Accredited (other lab), or accredited by an ILAC/APLAC MRA signatory body, depending on what your product category requires.",
  "accurate and updated BEE regulatory guidance so you are not left guessing about current requirements.",
  "Reduced risk — proper documentation and process handling lowers the chance of application rejection or delay.",
];

export const BENEFITS_CLOSING: string[] = [
  "Every engagement is built around ethical and transparent consulting practices. We do not promise outcomes we cannot control, but we do commit to handling your application accurately, communicating clearly, and flagging issues early rather than late.",
  "Many of these benefits compound over time rather than showing up in a single application. A business registering its first product mainly benefits from having someone explain the process clearly and avoid early mistakes. A business managing an ongoing pipeline of new models benefits more from consistent documentation practices, a reliable point of contact, and validity tracking that prevents a lapsed registration from turning into an unplanned compliance gap months later.",
];

export const SERVICE_INTRO =
  "Every BEE registration engagement looks a little different once you get into the details — a cooling appliance and a lighting product do not move through testing the same way, and a manufacturer's paperwork looks different from an importer's. Rather than offering a single fixed package, we structure our support around the features below, so the parts of the process that apply to your product get proper attention and the parts that do not are not padded onto your timeline or your invoice.";

export const SERVICE_INCLUDES: string[] = [
  "BEE registration services for both mandatory and voluntary appliance categories, so you are not turned away simply because your product sits outside the mandatory list today.",
  "Professional BEE registration assistance for Room Air Conditioners and other cooling appliances, where testing typically centres on seasonal energy performance under defined load conditions.",
  "Professional BEE registration assistance for Frost-Free Refrigerators and other refrigeration products, where model-level testing and correct SKU mapping matter more than most applicants expect.",
  "Professional BEE registration assistance for Ceiling Fans and other fan categories, a segment with high model variation across manufacturers.",
  "Professional BEE registration assistance for Distribution Transformers and other electrical equipment, where technical documentation tends to be more extensive.",
  "Professional BEE registration assistance for Self-Ballasted LED Lamps and other lighting products, a category with frequent model refreshes and correspondingly frequent registration needs.",
  "Coordination with NABL-accredited and BEE-empanelled testing laboratories, wherever applicable, including scheduling and follow-up so testing does not become the bottleneck in your timeline.",
  "Documentation preparation, application filing, and BEE query-response assistance, so your team is not learning the portal's requirements from scratch.",
  "Guidance on renewals, label validity, and applicable label security deposit requirements, treated as part of the same relationship rather than a separate transaction each time.",
];

export const SERVICE_CLOSING =
  "In practice, most clients use a mix of these features rather than the full list at once — a first-time applicant tends to lean heavily on documentation and portal guidance, while a manufacturer with an established process mainly wants testing coordination and renewal tracking. We scope the engagement around what you actually need.";

export const ELIGIBILITY_INTRO =
  "Eligibility depends primarily on the product category and whether that category is currently mandatory or voluntary under the BEE Standards & Labelling Programme. Understanding the BEE registration eligibility criteria for your specific product is the first step before starting the application.";

export const ELIGIBILITY_WHO_HEADING = "Who Generally Qualifies";

export const ELIGIBILITY_WHO: string[] = [
  "Indian manufacturers of appliances/products covered under BEE's Standards & Labelling programme.",
  "Importers bringing covered appliances/products into India for sale/marketing.",
  "Brand owners/companies that are responsible for placing a covered product in the Indian market, subject to the applicable BEE category rules.",
  "For voluntary categories, registration is generally available where the product meets the applicable BEE requirements and the applicant can provide the required documentation/testing.",
];

export const ELIGIBILITY_NOTES_HEADING = "Important Notes";

export const ELIGIBILITY_NOTES: string[] = [
  "Products in the mandatory-category group generally require registration before the product can be legally sold in India.",
  "Products in the voluntary-category group may be registered at the manufacturer's discretion.",
  "The current classification of any specific appliance should always be confirmed against the latest official BEE Schedule, since categories can be revised over time.",
];

export const ELIGIBILITY_CLOSING: string[] = [
  "Reviewing the mandatory BEE star rating appliances list and the voluntary BEE star rating appliances list against your specific product line is the fastest way to confirm where your business stands before applying.",
  "Eligibility questions often come up in situations that are not immediately obvious. A business that manufactures a component used inside a larger appliance, for instance, needs to check whether the component itself is separately notified or whether only the finished product carries the labelling obligation. Similarly, a business that rebrands an already-registered product under a new label generally still needs its own registration, since the star label is tied to the specific model and applicant, not just the underlying technology. When in doubt, it is worth getting a direct answer for your exact product rather than assuming based on a similar case.",
];

export const PROCESS_INTRO =
  "Our step by step BEE registration guide below outlines the typical stages a product goes through, from preparation to final certification. The exact sequence can vary slightly depending on the product category.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Preparation",
    color: "#0b57b5",
    title: "1. Preparation and category check",
    text: "we confirm which category your product falls under and whether registration is mandatory or voluntary.",
  },
  {
    step: "02",
    label: "Documentation",
    color: "#2563eb",
    title: "2. Documentation collection",
    text: "company, product, and manufacturer documents are gathered and reviewed for completeness.",
  },
  {
    step: "03",
    label: "Lab testing",
    color: "#0891b2",
    title: "3. Laboratory testing",
    text: "where testing is required for your product category, it is arranged and coordinated through our NABL lab testing for BEE registration network; the applicable testing requirement and laboratory type depend on the specific category and current BEE requirements.",
  },
  {
    step: "04",
    label: "Application",
    color: "#059669",
    title: "4. Application filing",
    text: "the BEE registration application form and supporting documents are submitted through the official portal. Our BEE experts register your brand and models under BEE.",
  },
  {
    step: "05",
    label: "Queries",
    color: "#d97706",
    title: "5. Review and query handling",
    text: "we track the application and respond to any clarifications the department raises.",
  },
  {
    step: "06",
    label: "Approval",
    color: "#dc2626",
    title: "6. Approval",
    text: "once reviewed and accepted, the product receives its registration and applicable star rating.",
  },
  {
    step: "07",
    label: "Label deposit",
    color: "#7c3aed",
    title: "7. Label security deposit and certification",
    text: "the applicable deposit is paid and the official star label certificate is issued.",
  },
  {
    step: "08",
    label: "Post-approval",
    color: "#0d9488",
    title: "8. Post-approval support",
    text: "we assist with label placement compliance and keep you informed ahead of renewal.",
  },
];

export const PROCESS_CLOSING =
  "Not every application moves through these stages without a hitch, and that is normal rather than a sign of a poorly prepared file. The review stage, in particular, can involve a back-and-forth if the department needs a clarification — a slightly different unit of measurement between the test report and the application, for example, or a document that was signed by someone other than the authorised signatory listed on the form. What matters most at that point is a prompt, accurate response, since an unanswered query is what typically turns a minor issue into a real delay.";

export const TIMELINE_PARAGRAPHS: string[] = [
  "BEE registration timeline depends on several factors: the product category, whether testing is required at a specific laboratory, how quickly documentation is finalised, and how the department responds to the application. In broad terms, the process moves through preparation, testing, filing, and review stages before a certificate is issued.",
  "Each of these stages carries its own source of delay, and it helps to understand them separately rather than thinking of the timeline as one fixed number. Preparation time is largely within your control — it depends on how quickly your team can pull together company and product documentation. Testing time depends on laboratory availability, which can vary by season and by how many other applications are ahead of yours in the queue. Filing itself is usually quick once documentation is ready, but review time depends entirely on the regulator, and can include one or more rounds of queries that need a prompt, accurate response to avoid adding weeks to the process.",
  "Businesses planning a product launch or an import shipment often ask how far in advance to start. The honest answer is that starting earlier is almost always better, because the two stages most likely to run long — laboratory testing and department review — are the two stages you have the least direct control over. A well-prepared application with complete documentation reduces the chance of a query round, which is usually the single biggest swing factor in how long the overall process takes.",
  "Processing time depends on the latest regulatory requirements. We recommend planning your product launch or import schedule with a buffer for testing and review, rather than assuming a fixed number of days.",
  "Our team keeps applicants updated at each stage so there are no surprises, and we flag early if a specific category or laboratory queue is likely to affect the expected schedule.",
];

export const COST_INTRO =
  "We do not publish a fixed price list because BEE registration cost varies by product category, the number of models being registered, and the testing laboratory involved. Instead, here is what typically influences the overall BEE registration fees for a given application:";

export const COST_FACTORS: string[] = [
  "Laboratory testing charges, which vary by product type and by the lab conducting the test.",
  "BEE registration government fees, set by the regulatory authority and subject to change.",
  "BEE label security deposit, payable as part of the labelling process.",
  "Number of product models or SKUs being registered together.",
  "Consultancy and documentation support fees, where a consultant is engaged.",
  "Renewal costs at the end of the registration validity period.",
];

export const COST_CLOSING: string[] = [
  "BEE registration cost in India for a specific product — including categories such as BEE registration for EV chargers — is best confirmed directly with our team once we understand your product category and the number of models involved. We are happy to walk you through a cost breakdown before you commit to anything.",
  "A practical way to plan for cost is to separate it into a one-time component and a recurring component. Testing, documentation, and the initial application generally sit on the one-time side, though they repeat for each new model you register. The label security deposit and renewal costs, on the other hand, are more predictable once a product is registered, since they follow the same category and validity rules going forward. Businesses registering several models at once often find it more cost-efficient to plan testing and filing together rather than handling each model as a separate, unrelated project.",
  "It is also worth noting that cost and timeline are connected. Rushed testing or last-minute documentation fixes tend to cost more than a well-planned application, simply because errors and re-submissions add both time and, in some cases, additional laboratory or processing charges. Building in a reasonable lead time before a launch or import date is usually the more cost-effective path, even though it can feel like the slower option upfront.",
];

export const VALIDITY_PARAGRAPHS: string[] = [
  "BEE registration validity period is not indefinite — registrations are issued for a defined period, after which the product must be re-registered to continue carrying the star label. The exact validity period can vary by category and may be revised by the regulatory authority over time, so we recommend verifying the current validity period applicable to your product with the relevant authority rather than assuming a fixed duration.",
  "Validity matters more than many businesses initially realise, because a product's registration status is tied to the model, not just the brand. If you continue selling a specific model after its registration has lapsed, that model is effectively back to being unregistered in the eyes of the regulator, even though it may have carried a valid star label at launch. This is a different situation from a document simply becoming outdated on file — it directly affects whether the product can legally continue to be sold or labelled.",
  "Because validity periods can differ between product categories, and because the underlying rating criteria themselves are periodically revised, it is worth treating validity tracking as an ongoing operational task rather than a one-time step completed at launch. Businesses managing several models across different categories often find it easiest to maintain a simple internal register of registration dates, rather than relying on memory or an annual review that may miss a category-specific deadline.",
  "We track validity dates for our clients as part of our ongoing support, so registrations do not lapse unnoticed. This is particularly useful for businesses managing multiple SKUs, where a single missed renewal date can be easy to overlook until it becomes a compliance issue.",
];

export const RENEWAL_INTRO =
  "BEE registration renewal becomes necessary once the existing validity period is nearing its end, or if there are changes to the product, its technical specifications, or the applicable rating criteria. Selling a product with a lapsed registration carries the same compliance risk as selling one that was never registered in a mandatory category.";

export const RENEWAL_PROCESS_HEADING = "General Renewal Process";

export const RENEWAL_PROCESS: string[] = [
  "Review the current registration status and confirm the applicable renewal window.",
  "Re-test the product if required by the current rating criteria for that category.",
  "Update documentation to reflect any changes since the original registration.",
  "Submit the renewal application through the official portal.",
];

export const RENEWAL_CLOSING: string[] = [
  "Our BEE registration renewal process support includes proactive reminders ahead of expiry, so you have enough time to complete testing and documentation without rushing.",
  "A useful precaution is to review renewal requirements as soon as a registration is issued, not just as expiry approaches. Rating criteria can shift between the original registration and the renewal window, which means a product that comfortably met the threshold the first time may need adjustments, or at minimum fresh testing, to meet a revised criterion the second time. Businesses that plan for this possibility from day one are rarely caught off guard when renewal season arrives; those that treat the original certificate as a permanent fixture sometimes are.",
  "Important: do not wait until the last month before expiry to start renewal — laboratory testing and document review both take time.",
  "For businesses managing several models with staggered expiry dates, it is often more efficient to batch renewals where the timing allows, rather than handling each one as a fully separate exercise. We help clients map out their renewal calendar so nothing is left to a last-minute scramble.",
];

export const CHALLENGES_INTRO =
  "Most businesses do not run into trouble because the requirements are unusually difficult — they run into trouble because the process has several moving parts that are easy to get slightly wrong the first time. The challenges below are the ones we see most often, and understanding them ahead of time is usually enough to avoid them.";

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Incomplete or mismatched documentation",
    text: "which is one of the most common reasons applications get delayed — a mismatch between the product specification sheet and the test report is a frequent, avoidable trigger for a query.",
  },
  {
    title: "Uncertainty about whether a specific product model falls under a mandatory or voluntary category",
    text: "particularly for businesses launching a new product variant that is close to, but not identical to, an existing registered model.",
  },
  {
    title: "Difficulty identifying the correct accredited or empanelled laboratory for a given product",
    text: "since not every laboratory is authorised to test every appliance category.",
  },
  {
    title: "Delayed responses to department queries",
    text: "which can push the timeline further out — a query that sits unanswered for weeks often adds far more delay than the original issue would have caused.",
  },
  {
    title: "Confusion between manufacturer-level and model-level registration requirements",
    text: "which sometimes leads businesses to assume one registered model covers a whole product line when it does not.",
  },
  {
    title: "Missed renewal deadlines that result in a lapsed registration",
    text: "usually because validity tracking was not built into the business's internal process from the start.",
  },
];

export const CHALLENGES_CLOSING =
  "Most of these issues come down to unfamiliarity with the process rather than the complexity of the requirements themselves. Working with a consultant who handles these applications regularly generally reduces the chance of rejection or delay, largely because the same patterns of error tend to repeat across different applicants, and someone who has seen them before can flag them before they become a problem.";

export const HOW_WE_HELP_INTRO =
  "BEE registration end to end support means we take the process off your plate as far as possible — while keeping you informed and in control of key decisions. This is not a guaranteed-approval service; approval decisions rest with the regulatory authority. What we do provide is thorough, professional handling at every stage.";

export const HOW_WE_HELP_ITEMS: string[] = [
  "documentation assistance for energy labelling — preparing and reviewing paperwork before submission.",
  "Application assistance — filing through the official registration portal on your behalf.",
  "Testing coordination — connecting you with the appropriate laboratory and managing logistics.",
  "technical guidance for BEE star rating — explaining what applies to your specific product.",
  "Expert consultation — answering questions at any stage of the process.",
  "End-to-end support — from initial eligibility check through to renewal reminders.",
];

export const HOW_WE_HELP_CLOSING: string[] = [
  "We aim to make the process as smooth as possible, but we never promise outcomes that are outside our control, such as a guaranteed approval timeline or a guaranteed rating.",
  "In practice, our involvement usually starts well before an application is filed. We spend time upfront understanding your product, your existing documentation, and your timeline pressures, so the support we provide is matched to where you actually need it — rather than a generic package applied uniformly to every client regardless of their situation. For a business with an internal compliance team, that might mean a lighter-touch role focused on lab coordination and portal filing. For a business handling this for the first time, it usually means a more hands-on role across documentation, explanation, and follow-up.",
];

export const WHY_CHOOSE_ITEMS: string[] = [
  "long-standing experience in energy compliance across a wide range of appliance categories.",
  "industry-experienced energy labelling consultant team familiar with both manufacturer and importer workflows.",
  "in-depth knowledge of Energy Conservation Act and the broader regulatory framework it sits within.",
  "consultants familiar with BEE portal procedures, reducing back-and-forth during filing.",
  "professional handling of BEE documentation from start to finish.",
  "reliable point of contact for regulatory queries, so you always know who to reach.",
  "dedicated support for BEE applications, not a generic, one-size-fits-all process.",
];

export const WHY_CHOOSE_CLOSING =
  "We are a verified BEE compliance experts team built for businesses that want a authentic BEE certification support partner — one that explains the process clearly rather than treating it as a black box.";

export const HOW_CLIENTS_PARAGRAPHS: string[] = [
  "Businesses researching this service often look for a BEE certification consultant, a BEE label registration consultant, or simply a BEE star label certification consultant who can take ownership of the process. We also work regularly as a BEE registration consultant for MSME clients and as a BEE registration consultant for importers managing cross-border documentation. If cost is part of your evaluation, we are happy to discuss BEE registration consultant fees upfront, before any engagement begins.",
  "Clients also reach us while comparing options for specific products — for example, looking for the best BEE registration consultant for Room Air Conditioners, wanting to hire BEE registration expert for Split Air Conditioners, evaluating a BEE certification agency for Frost-Free Refrigerators manufacturers, or searching for the top BEE star rating consultant for Ceiling Fans. Whatever the product, the underlying support — documentation, testing coordination, and portal filing — stays consistent.",
  "What tends to differentiate one consultant from another is not the checklist itself, since the core requirements are set by the regulator and are the same for everyone. It comes down to how consistently that checklist is applied, how quickly questions get answered, and how well the process is explained along the way. Those are the standards we hold ourselves to on every engagement, regardless of the product category or the size of the business we are working with.",
];

export const INDUSTRIES_INTRO =
  "We support businesses across a broad range of appliance categories, grouped roughly as follows. Coverage spans both mandatory and voluntary categories under the BEE Standards & Labelling Programme, and each category comes with its own testing and documentation nuances that our team can walk you through once we know your specific product.";

export const INDUSTRIES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Cooling",
    text: "room and split air conditioners, package air conditioners, VRF systems.",
  },
  {
    title: "Refrigeration",
    text: "frost-free and direct-cool refrigerators, deep freezers, commercial refrigeration.",
  },
  {
    title: "Lighting",
    text: "LED lamps and tubular fluorescent lamps.",
  },
  {
    title: "Electrical equipment",
    text: "distribution transformers and industrial electric motors.",
  },
  {
    title: "Kitchen appliances",
    text: "microwave ovens, induction cooktops, LPG stoves.",
  },
  {
    title: "Water heating",
    text: "stationary storage water heaters and solar water heaters.",
  },
  {
    title: "Home appliances",
    text: "washing machines and ceiling fans.",
  },
  {
    title: "Industrial equipment",
    text: "chillers, cooling towers, air compressors, pump sets.",
  },
  {
    title: "Solar and energy equipment",
    text: "photovoltaic modules, grid-connected solar inverters, battery energy storage systems.",
  },
  {
    title: "IT and consumer electronics",
    text: "computers, laptops, office automation equipment, colour televisions, set-top boxes.",
  },
  {
    title: "Automotive and EV infrastructure",
    text: "passenger car radial tyres and EV chargers.",
  },
  {
    title: "Power equipment",
    text: "diesel generator sets.",
  },
];

export const INDUSTRIES_CLOSING =
  "BEE registration for electrical appliances spans manufacturers, importers, and brand owners in each of these categories — whether you are launching a single new model or managing registrations across an entire product line.";

export const POPULAR_SEARCHES_INTRO =
  "Clients commonly reach us searching for support with a specific product, including:";

export const POPULAR_SEARCHES: string[] = [
  "BEE star rating certification for AC",
  "BEE star rating for refrigerators",
  "BEE star rating for LED lamps",
  "BEE star rating for ceiling fans",
  "BEE star rating for washing machines",
  "BEE star rating for televisions",
  "BEE registration for solar inverters",
  "BEE registration for deep freezers",
  "BEE registration for chillers",
  "BEE registration for cooling towers",
  "BEE registration for LPG stoves",
  "BEE registration for solar water heaters",
  "BEE registration for tyres",
  "BEE registration for electric motors",
  "BEE registration for air compressors",
  "BEE registration for microwave ovens",
  "BEE registration for package air conditioners",
  "BEE registration for VRF systems",
  "BEE registration for battery energy storage systems",
  "BEE registration for photovoltaic modules",
  "BEE registration for diesel generator sets",
];

export const POPULAR_SEARCHES_CLOSING =
  "Not sure which category your product falls under, or how it compares — for example, the BEE star rating 5 star vs 3 star difference for cooling appliances? As part of our broader BEE star rating scheme India coverage, our team can quickly confirm where your product fits and what applies to it.";

export const MISTAKES_ITEMS: string[] = [
  "Assuming a product category is voluntary without checking the current mandatory list — categories are periodically revised.",
  "Submitting test reports from a laboratory that is not recognised for that specific product category.",
  "Registering at the brand level instead of the required model level.",
  "Waiting until close to a launch or import date to start the registration process.",
  "Overlooking label placement and BEE star label QR code verification requirements on packaging.",
  "Letting an existing registration lapse without starting the renewal process in time.",
  "Submitting false/invalid documents for imported products.",
];

export const MISTAKES_CLOSING: string[] = [
  "Most of these mistakes are avoidable with a clear checklist and enough lead time. This is exactly where working with a BEE registration consultant tends to save businesses both time and rework — particularly a BEE registration consultant in India who already knows how the portal and testing labs work day to day.",
  "One pattern worth calling out specifically is businesses assuming that because a similar product from a competitor is already on the market without a visible star label, their own product must not need one either. This is a risky assumption — the competitor's product may already be registered with the label simply not prominent in marketing images, may be in the process of registration, or may itself be non-compliant. The presence or absence of a competitor's registration says nothing reliable about your own product's obligations, and should never be used as the basis for that decision.",
];

export const EXPERT_TIPS_INTRO =
  "These are the practical habits we see separate businesses that move through BEE registration smoothly from those that run into repeated delays. None of them are complicated, but they are easy to skip when a product launch is already competing for attention with a dozen other priorities.";

export const EXPERT_TIPS: string[] = [
  "Confirm your product's current category status early — do not rely on outdated information from a previous product launch, since categories are reviewed and revised over time.",
  "Keep a single, up-to-date folder of company and product documents so re-registration and renewal are faster, rather than reconstructing paperwork from scratch each time.",
  "Build in extra time for laboratory testing, especially during periods when labs are handling high volumes of applications from other manufacturers and importers.",
  "If you sell multiple similar models, check whether they can be grouped efficiently rather than filed one by one, which can save both time and coordination effort.",
  "Track your registration's validity period from day one, not just when renewal season arrives — a calendar reminder set at registration is far more reliable than remembering months later.",
  "If you are an importer, confirm manufacturer authorisation paperwork before the shipment arrives, not after, since missing authorisation documents are a common and avoidable cause of delay.",
];

export const EXPERT_TIPS_CLOSING =
  "None of these tips replace professional guidance for a specific product, but they do reflect the kind of preparation that consistently shortens the path from application to approval.";

export const COMPARISON_INTRO =
  "Businesses researching this service often ask how BEE registration relates to other certifications, approval schemes, or process choices. The table below gives a quick, general orientation. It is not a substitute for a category-specific review, and the exact regulatory details behind any comparison should always be confirmed against the latest official guidelines.";

export const COMPARISON_ROWS: TableRow[] = [
  {
    comparison: "mandatory vs voluntary BEE star rating",
    answer:
      "Mandatory categories require registration before a product can be sold in India; voluntary categories allow a manufacturer to register at their own discretion. Always confirm which list your product currently falls under.",
    takeaway:
      "Check your category status before finalising a launch date — a mandatory category treated as voluntary is a compliance risk, not a minor oversight.",
  },
  {
    comparison: "old BEE star rating vs new 2026 ISEER-based rating",
    answer:
      "Rating criteria and testing methods can be revised by the regulatory authority over time. Confirm the currently applicable rating basis for your product with the latest official guidelines before testing.",
    takeaway:
      "Confirm the rating basis before you commission testing, since testing to an outdated criterion can mean re-testing later.",
  },
  {
    comparison: "BEE vs EPR registration for appliances",
    answer:
      "BEE registration relates to energy performance labelling, while EPR (Extended Producer Responsibility) registration relates to end-of-life waste management obligations. Many appliance businesses need to address both, separately.",
    takeaway:
      "Treat these as two separate compliance tracks in your planning — completing one does not exempt you from the other.",
  },
  {
    comparison: "BEE registration in-house vs consultant-assisted",
    answer:
      "Businesses can file directly through the official portal themselves, or engage a consultant to manage documentation, testing coordination, and query handling. The right choice depends on internal bandwidth and how many models are involved.",
    takeaway:
      "A single, straightforward model may be manageable in-house; several models across categories usually benefit from dedicated coordination.",
  },
  {
    comparison: "BEE star rating vs ISO certification",
    answer:
      "BEE star rating certifies the energy performance of a specific appliance model. ISO certification typically relates to broader management systems, such as quality or environmental management, at the organisation level.",
    takeaway:
      "These serve different audiences — a star rating speaks to the end consumer, while ISO certification speaks to your broader business processes.",
  },
  {
    comparison: "BEE registration vs WPC-ETA approval",
    answer:
      "BEE registration addresses energy labelling for eligible appliances, while WPC-ETA approval relates to wireless equipment type approval for products that transmit radio signals. A product may need one, both, or neither depending on its features.",
    takeaway:
      "If your product has any wireless functionality, check WPC-ETA applicability alongside BEE rather than assuming BEE alone covers it.",
  },
  {
    comparison: "BEE registration for MSME vs large manufacturer",
    answer:
      "The core registration steps are the same regardless of company size, though larger manufacturers often manage a higher volume of models and may benefit from more structured, ongoing compliance support.",
    takeaway:
      "Smaller businesses should not assume a simplified process — the same documentation standard applies regardless of company size.",
  },
  {
    comparison: "BEE registration renewal vs fresh registration process",
    answer:
      "Renewal generally builds on an existing registration and prior documentation, while a fresh registration starts from scratch. Renewal timelines and requirements should be confirmed against the current validity rules for your category.",
    takeaway:
      "Do not let a lapsed registration drift into treating renewal as optional — once validity expires, the product is effectively unregistered again.",
  },
  {
    comparison: "BEE registration vs BIS certification",
    answer:
      "BEE registration focuses on energy performance labelling, while BIS certification generally addresses product safety and quality standards. Depending on the product, both may apply independently.",
    takeaway:
      "Check both requirements early in product development, since safety and energy-labelling testing can sometimes be planned together for efficiency.",
  },
  {
    comparison: "BEE registration cost vs BIS registration cost",
    answer:
      "Costs for each scheme are structured differently and depend on the product category, testing requirements, and applicable government fees. We recommend requesting a category-specific breakdown for an accurate comparison.",
    takeaway:
      "Budget for each scheme separately rather than assuming a combined, blended cost — the fee structures do not overlap.",
  },
  {
    comparison: "BEE registration vs TEC approval for telecom equipment",
    answer:
      "BEE registration applies to notified energy-labelled appliance categories, while TEC approval applies specifically to telecom equipment meeting network and technical standards. These are separate approval tracks.",
    takeaway:
      "Products with any telecom or network-connectivity feature should be checked against TEC requirements independently of BEE status.",
  },
  {
    comparison: "NABL lab testing vs BEE-empanelled lab testing",
    answer:
      "Some categories require testing at a NABL-accredited laboratory, while others require a laboratory specifically empanelled by BEE. The correct lab type depends on your product category.",
    takeaway:
      "Confirm the required lab type before booking a test slot — testing at the wrong type of laboratory can mean the report is not accepted.",
  },
  {
    comparison: "BEE registration vs FMCS certification",
    answer:
      "BEE registration addresses energy labelling, while FMCS certification is a separate compliance scheme with its own scope. Applicability depends on the specific product and export or import context.",
    takeaway:
      "Do not assume one certification substitutes for the other — check each scheme's applicability to your specific product independently.",
  },
  {
    comparison: "BEE star label vs Energy Star label (US)",
    answer:
      "The BEE star label is India's national energy-labelling scheme, while the Energy Star label is a separate programme used in the United States. A product sold in both markets may need to meet each scheme's own requirements independently.",
    takeaway:
      "Exporters should plan testing and labelling for each destination market separately rather than assuming one label transfers to another market.",
  },
  {
    comparison: "BEE registration vs BIS CRS registration",
    answer:
      "BEE registration relates to energy performance labelling, while BIS CRS (Compulsory Registration Scheme) relates to electronics safety compliance for notified products. Some products require both.",
    takeaway:
      "Electronics manufacturers in particular should check both schemes together early, since many notified products fall under each independently.",
  },
  {
    comparison: "voluntary labelling vs mandatory labelling cost comparison",
    answer:
      "Cost structures for voluntary and mandatory categories follow the same general fee components — testing, government fees, and deposits — but the urgency and business risk of delay differ significantly between the two.",
    takeaway:
      "For a mandatory category, treat cost as a fixed cost of doing business rather than a discretionary spend to defer.",
  },
  {
    comparison: "BEE vs ISI mark for appliances",
    answer:
      "The BEE star label addresses energy efficiency, while the ISI mark (under BIS) addresses product safety and quality benchmarks. They serve different regulatory purposes and are not interchangeable.",
    takeaway:
      "Having one mark does not substitute for the other — check whether your product category requires both separately.",
  },
  {
    comparison: "BEE registration timeline vs BIS registration timeline",
    answer:
      "Each scheme has its own review and testing process, so timelines are not directly comparable. We recommend planning each registration on its own track rather than assuming similar durations.",
    takeaway:
      "Build separate timeline buffers for each scheme in your launch plan rather than assuming they can run on an identical schedule.",
  },
  {
    comparison: "BEE star rating vs GRIHA/LEED green building rating",
    answer:
      "BEE star rating applies to individual appliance models, while GRIHA and LEED are building-level sustainability rating systems. They operate at entirely different scopes.",
    takeaway:
      "A building holding a green rating does not exempt the individual appliances installed in it from their own BEE requirements.",
  },
  {
    comparison: "BEE compliance vs RoHS compliance",
    answer:
      "BEE compliance addresses energy performance labelling, while RoHS compliance addresses restrictions on hazardous substances in electronic products. Many exporters need to satisfy both, especially for international markets.",
    takeaway:
      "Exporters should map both requirements against each destination market rather than treating RoHS as automatically covered by BEE.",
  },
  {
    comparison: "self-certification vs third-party BEE testing",
    answer:
      "Some product categories allow manufacturer self-certification of test results, while others require testing at an accredited or empanelled third-party laboratory. The applicable route depends on the specific category rules.",
    takeaway:
      "Confirm which route your category permits before assuming self-certification is available — using the wrong route can invalidate an application.",
  },
  {
    comparison: "appliance labelling in India vs international energy labelling",
    answer:
      "India's BEE scheme is one of several national energy-labelling systems worldwide. Businesses exporting the same product to multiple countries should check each destination market's own labelling requirements separately.",
    takeaway:
      "Plan labelling artwork per destination market rather than assuming one label design satisfies every country you sell into.",
  },
  {
    comparison: "domestic manufacturer vs importer BEE registration",
    answer:
      "The core registration steps are similar, but importers typically need additional documentation, such as manufacturer authorisation letters and import consignment paperwork, that domestic manufacturers do not.",
    takeaway:
      "Importers should request authorisation documentation from their overseas manufacturer early, since this step is often the longest lead time in the file.",
  },
  {
    comparison: "BEE registration vs CE certification",
    answer:
      "BEE registration is specific to the Indian market's energy labelling requirements, while CE certification relates to product conformity for the European market. A product sold in both regions needs both, independently.",
    takeaway:
      "Treat each market's certification as a separate project with its own testing, documentation, and timeline.",
  },
  {
    comparison: "5 star vs 3 star BEE rating for air conditioners",
    answer:
      "The star rating reflects relative energy efficiency within a category — a higher star rating generally indicates better energy performance, though the exact criteria for each rating tier should be confirmed against the current BEE rating table for that product.",
    takeaway:
      "If a specific star rating matters for your positioning or a tender requirement, confirm the current tier thresholds before finalising the product design.",
  },
];

export const FAQ_INTRO =
  "Here are answers to the questions we hear most often from manufacturers, importers, and brand owners exploring BEE star rating registration.";

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Do you only work with companies based in specific cities?",
    a: "No. We support manufacturers, importers, and brand owners across India, not just in specific cities.",
  },
  {
    q: "Can you help track upcoming BEE regulation changes for my category?",
    a: "Yes. We keep clients informed of relevant changes to their product category as part of our ongoing compliance support.",
  },
  {
    q: "Is there a separate charge for each appliance model?",
    a: "Generally, yes — each model typically requires its own registration and testing, which affects overall cost. We can walk you through the specifics for your product line.",
  },
  {
    q: "Do you provide BEE registration for multiple product models together?",
    a: "Yes. We regularly manage registrations across multiple models or SKUs for the same client, coordinating documentation and testing together where possible.",
  },
  {
    q: "Do you provide compliance support for the new 2026 BEE regulations?",
    a: "Yes, within the limits of what is officially confirmed. Requirements continue to evolve, so we always recommend verifying the latest applicable rules with us before finalising a product launch.",
  },
  {
    q: "Can you help exporters understand BEE-equivalent requirements abroad?",
    a: "We can point exporters toward the general landscape of energy-labelling requirements in other markets, but recommend confirming destination-market specifics with a local expert in that country.",
  },
  {
    q: "Do you assist with GST and IEC documentation needed for BEE filing?",
    a: "Yes, we help ensure your GST and IEC documentation is in order as part of the overall application package.",
  },
  {
    q: "Will you help with document preparation for BEE registration?",
    a: "Yes, document preparation and review is a core part of our service.",
  },
  {
    q: "Can you help if my BEE application was rejected earlier?",
    a: "Yes. We review the reason for rejection, correct the underlying issue, and help you resubmit.",
  },
  {
    q: "What happens if there is a delay from the BEE department?",
    a: "Delays can happen for reasons outside our control. We track your application status and follow up on your behalf where possible.",
  },
  {
    q: "How quickly can you help me become compliant?",
    a: "It depends on your product category and how quickly documentation and testing can be completed. We will give you a realistic estimate once we understand your specific case.",
  },
  {
    q: "Do you provide guidance on choosing the right test lab?",
    a: "Yes. Lab requirements vary by product category, and we help identify the appropriate accredited or empanelled laboratory for your product.",
  },
  {
    q: "What is your process for BEE star rating registration?",
    a: "Our process covers category confirmation, documentation, testing coordination, application filing, query handling, and post-approval support — outlined in detail in the process section above.",
  },
  {
    q: "Can you assist with the label security deposit process?",
    a: "Yes, we guide clients through the label security deposit requirement as part of the registration process.",
  },
  {
    q: "Can you help if my product's star rating needs revision?",
    a: "Yes. If technical specifications change or a rating needs updating, we can help you manage the required revision.",
  },
  {
    q: "Do you use the official BEE Standards & Labelling Portal for filing?",
    a: "Yes, all filings are done through the Official BEE Standards & Labelling Portal, in line with the applicable government registration process.",
  },
  {
    q: "Can I get a cost breakdown before signing up?",
    a: "Yes. We provide a clear cost breakdown based on your product category and number of models before you commit to anything.",
  },
  {
    q: "What happens if the BEE department raises a query on my application?",
    a: "We review the query, prepare the required response or documentation, and respond on your behalf where authorised to do so.",
  },
  {
    q: "Do you support businesses across all Indian states?",
    a: "Yes, our support is not limited by state — we work with clients across India.",
  },
  {
    q: "Can you help set up an internal compliance process for future models?",
    a: "Yes. For clients with ongoing product launches, we help build a repeatable internal checklist for future registrations.",
  },
  {
    q: "Do you handle BEE registration for both manufacturers and importers?",
    a: "Yes, we support manufacturers, importers and traders, each with the documentation path appropriate to their role.",
  },
  {
    q: "Do you help with retailer and distributor list submission?",
    a: "Yes, where this forms part of the registration requirement for a given category, we assist with the required submissions.",
  },
  {
    q: "Can you help notarise manufacturer authorisation letters?",
    a: "We can guide you on what the authorisation letter needs to contain and coordinate the notarisation step with you.",
  },
  {
    q: "Will you handle query responses on my behalf?",
    a: "Yes, subject to the authorisation you provide us, we handle department query responses directly.",
  },
  {
    q: "How do I get started with your BEE registration service?",
    a: "Reach out to our team with your product details. We will confirm the applicable category and outline the next steps.",
  },
  {
    q: "Can you help renew an existing BEE registration?",
    a: "Yes, renewal support — including reminders ahead of expiry — is part of our ongoing service.",
  },
  {
    q: "Will you inform me before my BEE registration expires?",
    a: "Yes, we track validity periods for our clients and follow up ahead of the renewal window.",
  },
  {
    q: "How long will my BEE registration take with your team?",
    a: "Timelines vary by category and testing requirements. Processing time depends on the latest regulatory requirements, and we will give you a realistic, case-specific estimate upfront.",
  },
  {
    q: "What is included in your end-to-end BEE registration package?",
    a: "Our package generally covers documentation, testing coordination, application filing, query handling, and post-approval support — the specific scope is confirmed with you before we begin.",
  },
  {
    q: "Can you help with BEE label artwork and QR code compliance?",
    a: "Yes. We review label artwork against current display requirements, including correct QR code placement, before it goes to print or packaging.",
  },
];

export const GET_STARTED_INTRO =
  "If your appliance falls under a mandatory or voluntary BEE category, the sooner you start the process, the more comfortably you can plan your launch or import schedule around it. Our team at Ornate Quality Service Pvt Ltd provides end-to-end BEE certification support — from your first question about eligibility through to renewal, years down the line.";

export const GET_STARTED_ITEMS: string[] = [
  "BEE registration expert consultant support tailored to your product category.",
  "BEE registration consultant Bangalore, BEE registration consultant Delhi, and BEE registration consultant Mumbai — with support extending across India.",
  "Looking for a BEE star rating consultant near me? Our team works with clients remotely across the country, so location is rarely a barrier.",
];

export const GET_STARTED_CLOSING: string[] = [
  "book BEE registration consultation for Deep Freezers or any other appliance category — reach out to our team today and let us walk you through documentation support and expert consultation, step by step.",
  "Whether you are registering your first product or your fiftieth, the fastest way to get a clear answer is to tell us exactly what you are working with — the product category, whether you manufacture or import it, and roughly when you plan to launch or bring it into India. From there, we can tell you plainly what applies to your situation, what documentation to start gathering, and what a realistic path forward looks like.",
];
