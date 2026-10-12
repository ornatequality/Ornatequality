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

export const NABL_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is", label: "What is NABL Accredited Lab Testing?" },
  { id: "why-important", label: "Why NABL Lab Testing is Important" },
  { id: "applications", label: "Certification and Regulatory Applications" },
  { id: "who-needs", label: "Who Needs These Services?" },
  { id: "benefits", label: "Key Benefits" },
  { id: "features", label: "Key Features" },
  { id: "eligibility", label: "Who Can Use Our Services?" },
  { id: "documents", label: "Information and Documents Required" },
  { id: "process", label: "Step-by-Step Process" },
  { id: "domains", label: "Testing Domains Covered" },
  { id: "timeline", label: "How Long Does Testing Take?" },
  { id: "cost", label: "Cost in India" },
  { id: "validity", label: "Test Report Validity" },
  { id: "retesting", label: "Retesting" },
  { id: "standards", label: "Rules, Standards and Regulatory Framework" },
  { id: "challenges", label: "Common Challenges" },
  { id: "how-we-help", label: "How We Help" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "services-directory", label: "Testing Services We Coordinate" },
  { id: "industries", label: "Industries We Serve" },
  { id: "locations", label: "Services Across India" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "expert-tips", label: "Expert Tips" },
  { id: "comparison", label: "NABL vs the Alternatives" },
  { id: "test-reports", label: "Test Reports and Certificates" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Start Your NABL Lab Testing Engagement" },
];

export const BANNER_TITLE = "NABL Accredited Lab Testing Services in India";

export const BANNER_SUBTITLE =
  "If you are applying for BIS certification, BEE registration, WPC-ETA approval, TEC-MTCTE clearance, FSSAI licensing, CDSCO registration or EPR registration, one thing is common to all of them: you need a test report from an accredited testing laboratory. Getting that report — from the right lab, with the right parameters, in the right format — is exactly what Ornate Quality Services handles for you.";

export const BANNER_DESCRIPTION =
  "We are a professional lab testing coordination service in India. Our team manages the entire testing process on your behalf: identifying the correct NABL accredited laboratory, mapping your product to the applicable Indian and international test standards, preparing the test plan, coordinating sample dispatch, tracking the testing, and delivering your accredited test report with full documentation support.";

export const WHAT_YOU_GET_INTRO = "Why manufacturers and importers choose us:";

export const WHAT_YOU_GET: string[] = [
  "Access to a verified NABL accredited lab network with pan-India coverage",
  "Expert test parameter selection — so your report is accepted the first time",
  "End-to-end testing coordination from sample to signed report",
  "Support for BIS, BEE, WPC, TEC, FSSAI, CDSCO, EPR and government tender applications",
  "Dedicated compliance account manager — one point of contact throughout",
  "Confidential sample handling and documentation support",
];

export const INTRO_TITLE = "Introduction: Why NABL Accredited Lab Testing Matters";

export const INTRO_PARAGRAPHS: string[] = [
  "Every product that enters the Indian market through a certification, registration or import-clearance route eventually passes through a testing laboratory. The test report that comes out of that laboratory is one of the most important documents in your compliance journey — and regulatory authorities are specific about which laboratories they will accept a report from.",
  "In India, the National Accreditation Board for Testing and Calibration Laboratories — known as NABL — is the official accreditation body under the Quality Council of India (QCI). A laboratory accredited by NABL has demonstrated technical competence against the internationally recognised ISO/IEC 17025:2017 standard. It has been independently assessed, and it operates under a rigorous quality system. Its measurements are metrologically traceable, and its results are reported with declared measurement uncertainty.",
  "What this means for you, as a manufacturer or importer, is straightforward: a NABL accredited lab test report carries legal and commercial weight in India and is accepted under international mutual recognition arrangements through the ILAC MRA — so the same report can often support export documentation too.",
  "The challenge that manufacturers face is not usually understanding why they need accredited lab testing. The challenge is navigating how to get it done efficiently — choosing the right laboratory from the NABL directory, identifying every test parameter required by the applicable IS or IEC standard, preparing and dispatching samples correctly, and receiving a report in the format that the certification authority needs. That is where our lab testing coordination services come in.",
];

export const WHAT_IS_PARAGRAPHS: string[] = [
  "NABL accreditation is a formal recognition that a testing or calibration laboratory is competent to perform specific tests on specific materials, products or equipment. The accreditation is granted by NABL, a constituent board of the Quality Council of India, against the ISO/IEC 17025:2017 standard for testing and calibration laboratories.",
  "Every accredited laboratory is granted a defined scope of accreditation — a documented list of tests, test methods and measurement ranges for which it is technically competent. A laboratory can only issue an accredited test report for work that falls within this scope. This is why choosing the right laboratory for your product matters as much as the testing itself.",
  "When you receive a test report from an ISO/IEC 17025 accredited laboratory, it includes something that an ordinary laboratory report typically does not: a clear statement on measurement uncertainty, an identified test method (IS, IEC, ASTM, EN or another recognised standard), and a statement of conformity — which is the lab's declaration of whether your product passed or failed the requirement. These are not optional extras; they are requirements under ISO/IEC 17025.",
  "NABL is India's signatory to the ILAC Mutual Recognition Arrangement (ILAC MRA). This means that accredited test reports issued by NABL laboratories are accepted in over 100 countries under this international framework — making a single NABL test report useful for both domestic certification and international trade documentation.",
  "What we provide is a lab testing coordination service — not a laboratory. Ornate Quality Services acts as a professional nabl testing services provider and nabl lab testing consultant, bridging the gap between manufacturers, importers and the NABL accredited laboratory network in India. We are a nabl testing coordination agency with deep knowledge of how different certification authorities — BIS, BEE, WPC, TEC, FSSAI and CDSCO — evaluate submitted test reports. Our nabl accredited lab testing coordination for manufacturers is built around one objective: getting your accredited test report accepted the first time.",
];

export const WHY_INTRO =
  "The business case for using an accredited testing laboratory goes beyond simply following a rule. Here is why it matters at every level of your compliance and commercial operations.";

export const WHY_ITEMS: { title: string; text: string }[] = [
  {
    title: "Legal Compliance with Indian Regulations",
    text: "Multiple Indian regulatory frameworks require test reports from NABL accredited or BIS recognised laboratories. If you are applying for the BIS ISI Mark, BIS CRS registration, FMCS certification for foreign manufacturers, BEE star rating, WPC-ETA approval, TEC-MTCTE clearance, FSSAI licensing or CDSCO product registration, a non-accredited lab report is simply not accepted. There is no workaround — and a rejected test report means starting the process again.",
  },
  {
    title: "Compliance with Quality Control Orders",
    text: "The Indian government has issued Quality Control Orders (QCOs) covering a wide range of product categories. Under these QCOs, manufacturing or importing products without the required BIS certification is prohibited — and BIS certification itself requires accredited lab testing. Businesses that operate under any active QCO need to keep their testing evidence current and in the right format.",
  },
  {
    title: "Import Clearance and Customs",
    text: "Importers of electronics, electrical goods, chemicals, food products, consumer goods and several other categories may be asked to provide accredited test reports at the port of entry. An accredited lab test report for import purposes, issued by an ISO/IEC 17025 accredited laboratory, carries the evidentiary weight that a customs assessment demands.",
  },
  {
    title: "Government Tenders and GeM Listing",
    text: "Many government procurement tenders and GeM portal product listings require compliance documentation — which includes third-party test reports from accredited laboratories. Without this, a bid or a GeM listing cannot be supported adequately.",
  },
  {
    title: "Export and International Trade",
    text: "Exporters targeting regulated markets in Europe, the US and Southeast Asia must demonstrate RoHS compliance, REACH compliance, EMI/EMC conformity and other international requirements. NABL accredited labs are equipped to test against IEC, CISPR, EN and ASTM standards, and because NABL is an ILAC MRA signatory, the resulting reports are internationally recognised.",
  },
  {
    title: "E-Commerce Marketplace Compliance",
    text: "Online marketplaces are increasingly asking sellers to submit test certificates and compliance documentation for product listings. Third-party lab testing coordination for e-commerce sellers is a growing requirement, and accredited test reports are the most defensible form of evidence a seller can provide.",
  },
];

export const APPLICATIONS_INTRO =
  "Our compliance testing services india cover the full range of Indian regulatory schemes. Here is a direct map of the applications we support and the type of lab testing each requires:";

export const APPLICATION_ROWS: TableRow[] = [
  {
    application: "nabl lab testing services for bis crs applicants",
    service: "Sample submission and report coordination for BIS CRS registration",
    testing: "IS-standard safety, EMC, performance tests per the applicable product schedule",
  },
  {
    application: "arrange nabl lab testing for bis application",
    service: "End-to-end lab testing for BIS ISI Mark licence applications",
    testing: "Parameters per the applicable IS specification cited in the BIS certification scheme",
  },
  {
    application: "nabl lab testing support for bis crs registration",
    service: "Dedicated coordination for BIS CRS applicants across all notified product categories",
    testing: "As per BIS CRS schedule for the specific product HS code",
  },
  {
    application: "nabl lab testing services for tec approval",
    service: "Lab testing coordination for TEC-MTCTE mandatory certification",
    testing: "Telecom equipment safety and performance tests per TEC reference standards",
  },
  {
    application: "nabl lab testing assistance for wpc eta approval",
    service: "Sample submission and report support for WPC-ETA applications",
    testing: "Radio frequency, spurious emission and relevant EMC parameters",
  },
  {
    application: "nabl accredited lab testing for bee star rating",
    service: "Testing coordination for BEE energy labelling programme",
    testing: "Energy efficiency and performance parameters per BEE technical specifications",
  },
  {
    application: "nabl lab testing services for epr compliance",
    service: "Testing for electronic product composition and hazardous substance compliance under EPR",
    testing: "RoHS screening, heavy metal analysis and material composition tests",
  },
  {
    application: "lab testing support for fssai licence",
    service: "Microbiological and chemical testing for FSSAI licence applications",
    testing: "Food safety parameters per FSSAI Food Safety and Standards Regulations",
  },
  {
    application: "lab testing support for cdsco registration",
    service: "Testing coordination for CDSCO medical device and drug related applications",
    testing: "As per applicable pharmacopoeia standards and CDSCO technical dossier requirements",
  },
  {
    application: "nabl lab testing for products under quality control orders",
    service: "Testing coordination for QCO-notified mandatory product categories",
    testing: "Parameters per the IS standard referenced in the applicable QCO Gazette notification",
  },
  {
    application: "nabl accredited lab testing for government tenders",
    service: "Test report preparation for government procurement bid documentation",
    testing: "As per the technical specification cited in the tender document",
  },
  {
    application: "regulatory testing services india",
    service: "Broad regulatory testing support across BIS, BEE, WPC, TEC, FSSAI, CDSCO, EPR and more",
    testing: "Discipline and parameter selection matched to the specific regulatory requirement",
  },
  {
    application: "nabl lab testing for imported samples in india",
    service: "Coordination of testing for imported product samples within India",
    testing: "As per the applicable IS standard or the importing certification scheme requirement",
  },
  {
    application: "lab testing services for importers",
    service: "Import compliance testing for goods entering the Indian market",
    testing: "Testing matched to customs requirement, BIS notification or market access standard",
  },
  {
    application: "nabl lab testing services in delhi ncr for exporters",
    service: "Export compliance testing from our Delhi NCR base",
    testing: "RoHS, REACH, CE-relevant and buyer-specific testing for export markets",
  },
  {
    application: "bis recognised testing laboratory",
    service: "Testing in BIS recognised laboratories where BIS-recognition is a scheme requirement",
    testing: "All tests specified in the applicable BIS product certification scheme document",
  },
  {
    application: "wpc eta testing lab",
    service: "WPC-recognised EMC and radio frequency testing laboratory coordination",
    testing: "RF output power, spurious emissions and electrical safety for radio equipment",
  },
  {
    application: "bee testing laboratory",
    service: "BEE-registered laboratory testing for star rating programme",
    testing: "Energy efficiency measurements per BEE testing protocol for each product category",
  },
  {
    application: "reliable nabl testing lab for bis certification",
    service: "Selection of NABL accredited labs with proven BIS-acceptance track record",
    testing: "Full scope as required under the applicable BIS certification scheme",
  },
];

export const WHO_NEEDS_INTRO =
  "Our lab testing coordination services are designed for any business that needs an accredited test report to satisfy an Indian or international regulatory requirement.";

export const BENEFITS_ITEMS: { title: string; text: string }[] = [
  {
    title: "Globally Accepted Test Reports",
    text: "Because NABL is a signatory to the ILAC MRA, test reports issued by NABL accredited laboratories are accepted not just in India but in over 100 countries party to the arrangement. This means the same report you use for your BIS application can also support export documentation to regulated international markets.",
  },
  {
    title: "Correct Test Parameters — First Time",
    text: "One of the most common reasons test reports are rejected by certification bodies is that the wrong parameters were tested, or the test method cited in the report does not match what the applicable standard requires. Our accurate test parameter selection guidance means we map your product against the applicable IS, IEC, ASTM or EN standard before samples are ever dispatched, reducing the risk of a rejected report and the cost of retesting.",
  },
  {
    title: "End-to-End Testing Coordination",
    text: "We handle everything from scope assessment and lab selection to sample pickup, dispatch, status tracking and report delivery. You hand us the product information and samples; we handle the rest. This end-to-end certification and testing support is especially valuable for businesses running certification projects on a deadline.",
  },
  {
    title: "Traceable, Auditable Test Reports",
    text: "Every report issued by a NABL accredited laboratory is metrologically traceable and carries a statement of conformity. This makes the report defensible in an audit, acceptable to a regulatory assessor and useful across the multiple certification applications that the same product may need.",
  },
  {
    title: "Confidential Sample Handling",
    text: "Product formulations, designs and specifications submitted for testing are confidential. We manage sample collection, packaging and dispatch under a clear confidentiality commitment, and work only with accredited laboratories that maintain the impartiality and confidentiality requirements of ISO/IEC 17025.",
  },
  {
    title: "Single Point of Contact",
    text: "With a dedicated compliance account manager assigned to your testing project, you have one person to call for updates, one person reviewing the scope, and one person chasing the report on your behalf. No managing multiple lab contacts, no chasing emails across three parties.",
  },
];

export const FEATURES_ITEMS: string[] = [
  "Laboratory identification and verification against the NABL directory of accredited laboratories, matched to your product type and applicable scope of accreditation",
  "Test parameter mapping — identifying every test required under the IS, IEC, ASTM or EN standard applicable to your product, before you dispatch a single sample",
  "Sample preparation guidance — quantity required, preparation format, labelling, packaging and preservation for the specific test type",
  "Sample pickup coordination and courier handling between your facility and the accredited laboratory",
  "Witness testing coordination at the laboratory when required by the certification scheme",
  "Test progress tracking with updates at each milestone, so you always know where your report stands",
  "Accredited lab test report delivery with an explanation of key findings — particularly measurement uncertainty, decision rule and statement of conformity",
  "NABL test report interpretation support — helping you understand what the results mean for your certification application",
  "Documentation and coordination support for filing the test report as part of a BIS, BEE, WPC, TEC, FSSAI or CDSCO application",
  "Retesting coordination after a non-conforming result — including guidance on corrective action before retesting",
  "Bulk and repeat testing arrangements — including NABL lab testing AMC services for businesses with ongoing testing needs",
];

export const ELIGIBILITY_INTRO =
  "Our testing coordination service is open to any business or individual who requires an accredited test report for a regulatory, commercial or compliance purpose in India. There is no minimum order, no minimum company size and no restriction by industry sector.";

export const ELIGIBILITY_YOU_MAY = "You may be a:";

export const ELIGIBILITY_ITEMS: string[] = [
  "Domestic manufacturer preparing for a BIS, BEE, WPC or TEC application",
  "Foreign manufacturer applying under the FMCS scheme who needs Indian-standard testing coordinated within India",
  "Importer submitting samples for type testing or import clearance documentation",
  "Start-up launching a product that falls under a QCO or marketplace compliance requirement",
  "MSME unit that needs testing for the first time and is unfamiliar with the NABL system",
  "Established enterprise managing annual testing across multiple product lines",
  "Compliance consultant who needs a reliable lab testing coordination partner",
];

export const ELIGIBILITY_PARAGRAPHS: string[] = [
  "The only prerequisite is that you have a defined product and a clear understanding of the regulatory authority you need the test report for. If you are unsure of the applicable standard or test parameters, that assessment is part of what we do.",
  "We also work with businesses that have annual testing contract india requirements — companies that need third party nabl lab testing on a scheduled, recurring basis for quality management, QCO compliance or customer audit purposes. Our nabl lab testing amc services (annual maintenance contract for testing coordination) are designed for exactly this need.",
];

export const DOCUMENTS_INTRO =
  "To initiate the testing coordination process, we need sufficient information about your product and the regulatory requirement you are targeting. The following table covers the standard documentation and information needed at the enquiry stage.";

export const DOCUMENTS_ROWS: TableRow[] = [
  {
    document: "Product technical specification sheet",
    purpose: "Identifies the product category, composition and key parameters for test planning",
    mandatory: "Mandatory",
    notes: "Manufacturer's own spec sheet, datasheet or drawing acceptable",
  },
  {
    document: "Applicable Indian standard (IS) or international standard reference",
    purpose: "Determines which test methods and parameters apply",
    mandatory: "Mandatory if known",
    notes: "We can assist in identifying the applicable standard if not known",
  },
  {
    document: "Declaration of product composition or material",
    purpose: "Required for chemical, RoHS, REACH and certain electrical testing",
    mandatory: "Mandatory for chemical / material tests",
    notes: "Company letterhead preferred",
  },
  {
    document: "Regulatory scheme or authority being applied to",
    purpose: "Ensures the lab selected has scope matching that authority's acceptance criteria",
    mandatory: "Mandatory",
    notes: "E.g. BIS CRS, BEE, WPC-ETA, TEC, FSSAI, CDSCO, EPR, GeM",
  },
  {
    document: "Previous test reports (if available)",
    purpose: "Avoids retesting already-passed parameters and helps identify gaps",
    mandatory: "Optional but strongly recommended",
    notes: "Include even if the report is from a different lab or format",
  },
  {
    document: "Physical product samples",
    purpose: "Required for destructive and non-destructive testing alike",
    mandatory: "Mandatory",
    notes: "Quantity depends on the test discipline and applicable standard",
  },
  {
    document: "Import documents (for imported samples)",
    purpose: "Required when samples are being tested as imported goods in India",
    mandatory: "For importers",
    notes: "Invoice, packing list, Bill of Entry where applicable",
  },
  {
    document: "Company name and GST / CIN details",
    purpose: "Required for the test report to be issued in the correct company name",
    mandatory: "Mandatory",
    notes: "The test report will be issued in the name provided — verify this carefully",
  },
];

export const DOCUMENTS_NOTE =
  "If you are unsure about what samples to send or which documents apply to your situation, get in touch with our team before dispatching anything. Getting the sample preparation and documentation right at the start avoids delays later.";

export const PROCESS_INTRO =
  "Our coordination process is designed to be straightforward for you while handling all the complexity on the back end. You can start nabl lab testing process with a simple message — share your product, the applicable standard if known, and the regulatory requirement you are targeting. From there, we manage everything.";

export const PROCESS_LEAD = "Here is how the process works, from the initial enquiry to the final signed report:";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Enquiry",
    color: "#0b57b5",
    title: "Step 1: Enquiry and Scope Assessment",
    text: "Share your product information and the regulatory requirement you are targeting. Our team reviews the product category, identifies the applicable Indian or international standard, shortlists NABL accredited laboratories whose scope of accreditation covers your requirement, and prepares a test plan — listing every parameter to be tested and the test method reference.",
  },
  {
    step: "02",
    label: "Quote",
    color: "#2563eb",
    title: "Step 2: Quotation and Confirmation",
    text: "We share a testing proposal covering the scope of testing, the selected NABL accredited laboratory, the estimated timeline and the coordination charges. Once you confirm, we raise the lab booking and initiate the sample preparation guidance.",
  },
  {
    step: "03",
    label: "Samples",
    color: "#0891b2",
    title: "Step 3: Sample Preparation and Dispatch",
    text: "We advise you on how many samples are required, how to label and pack them, and any specific sample conditions the laboratory requires. You can request nabl lab sample pickup directly from your factory or office — we handle the sample courier and handling for nabl lab testing, including documentation such as the Sample Submission Form, and coordinate nabl sample testing services with the accredited laboratory directly. Once you submit sample to nabl accredited lab, we track it through every stage.",
  },
  {
    step: "04",
    label: "Testing",
    color: "#059669",
    title: "Step 4: Testing and Status Tracking",
    text: "The NABL accredited laboratory conducts the testing against the agreed parameters and methods. We track nabl lab test status and keep you informed at every key milestone — sample receipt confirmation, testing commencement, and expected report date. If you need an urgent nabl test report or to get same week nabl test report for a deadline, we explore express testing options with our lab network before confirming. For witness testing at the laboratory, we coordinate the schedule and observer access with faster test report processing support where available.",
  },
  {
    step: "05",
    label: "Review",
    color: "#d97706",
    title: "Step 5: Report Receipt and Review",
    text: "Once testing is complete, the laboratory issues the signed NABL accredited test report. We receive it, review it for completeness — checking that the test methods are correctly cited, the measurement uncertainty is declared, and the statement of conformity is present — and flag any discrepancies before passing it to you.",
  },
  {
    step: "06",
    label: "Delivery",
    color: "#ea580c",
    title: "Step 6: Report Delivery and Interpretation Support",
    text: "We deliver the accredited test report along with an explanation of the key findings. If there are parameters that need clarification — such as the meaning of a non-conforming result, or how to respond to a particular measurement uncertainty range — we walk you through it so you can act on the report immediately.",
  },
  {
    step: "07",
    label: "Filing",
    color: "#7c3aed",
    title: "Step 7: Post-Report Support and Certification Filing",
    text: "The test report is typically the most important document in a certification or registration application. We provide documentation and coordination support for submitting your test report as part of a BIS CRS, ISI Mark, BEE, WPC, TEC, FSSAI, CDSCO, EPR or GeM registration application. If the report reveals a non-conformance and retesting is required, we coordinate that too.",
  },
];

export const DOMAINS_INTRO =
  "NABL accredits laboratories by testing discipline — not by product. This means the type of test your product needs determines which accredited laboratory we use. Our coordination service covers all major testing disciplines:";

export const DOMAIN_ROWS: TableRow[] = [
  {
    domain: "Chemical Testing",
    covers:
      "Composition analysis, heavy metal testing (RoHS, REACH), water and effluent chemical analysis, food chemical analysis, raw material characterisation",
    who: "Chemical processors, food and beverage manufacturers, exporters meeting RoHS and REACH requirements, water treatment plants, building material suppliers",
    page: "Coming Soon",
  },
  {
    domain: "Electrical & Electronics Testing",
    covers:
      "Electrical safety (IEC 60335, IS 302 and related standards), EMI/EMC testing (CISPR), LED and luminaire photometric testing, battery and charger safety (IS 16046), cable and wire testing",
    who: "Appliance manufacturers, LED and lighting brands, battery and charger makers, cable manufacturers, BIS CRS and WPC-ETA applicants",
    page: "Coming Soon",
  },
  {
    domain: "Mechanical Testing",
    covers:
      "Tensile strength, hardness, impact testing, steel and TMT bar testing (IS 1786), cement and concrete testing (IS 269), packaging drop and vibration testing, non-destructive testing (NDT)",
    who: "Steel and metal fabricators, construction material suppliers, packaging units, engineering components manufacturers",
    page: "Coming Soon",
  },
  {
    domain: "Biological & Microbiological Testing",
    covers:
      "Food microbiology, drinking water microbiological testing, cosmetic microbial limit testing, sterility testing, shelf life studies, environmental swab testing",
    who: "Food and beverage processors, packaged water plants, cosmetic and herbal product brands, FSSAI licence holders",
    page: "Coming Soon",
  },
  {
    domain: "Calibration Services",
    covers:
      "Calibration of pressure gauges, weighing balances, temperature instruments, electrical instruments, dimensional instruments — with NABL accredited calibration certificates",
    who: "Manufacturing plants with in-house QC equipment, ISO 9001 holders, engineering workshops, pharma and food processing units",
    page: "Coming Soon",
  },
];

export const DOMAINS_NOTE =
  "Each of these domains has its own dedicated page covering the specific tests, IS and IEC standards, applicable product categories and the process for getting samples tested. As those pages go live, the links above will be updated.";

export const TIMELINE_INTRO =
  "Testing timelines vary significantly depending on the type of testing involved, the number of parameters, the laboratory's current workload and the complexity of your product. There is no single answer that applies across all disciplines and all laboratories — and any coordination service that quotes you a universal timeline without first reviewing your test plan is not being accurate with you.";

export const TIMELINE_FACTORS_INTRO = "What we can tell you is what the factors are:";

export const TIMELINE_FACTORS: string[] = [
  "Test discipline — electrical safety testing typically takes longer than basic physical testing; microbiological tests have inherent incubation periods that cannot be compressed",
  "Number of parameters — a full compliance test covering every parameter in an IS standard takes longer than a partial test covering selected parameters",
  "Sample complexity — products that require conditioning or pre-treatment before testing add preparation time",
  "Laboratory queue — accredited laboratories operate on scheduled testing slots; our network knowledge allows us to identify labs with shorter lead times where the scope permits",
  "Priority and express testing — some accredited laboratories offer priority or same-week test report services for selected test types; we can explore this if your deadline requires it",
];

export const TIMELINE_CLOSING =
  "We track the testing status on your behalf and provide updates at each stage. If you are working to a certification deadline, share that timeline with us upfront and we will build the test plan around it.";

export const COST_INTRO =
  "We maintain transparent testing charges for every engagement, and every quotation we provide breaks down what you are paying for. Testing costs in India are not fixed because they depend on the following variables — understanding them helps you plan your testing budget accurately.";

export const COST_ITEMS: string[] = [
  "Testing discipline and parameter count — chemical analysis has different cost drivers from electrical safety testing or calibration. The more parameters tested, the higher the cost, though multi-parameter tests often achieve economies versus individual parameter testing.",
  "Laboratory selected — NABL testing charges vary between accredited laboratories based on their equipment, turnaround capacity and the complexity of the test being conducted. We shortlist cost-effective options within those that meet the technical scope requirement.",
  "Sample quantity — some standards require multiple samples for a single test; for example, a destructive test may require more sample units than a non-destructive check. More samples mean more testing.",
  "Priority or express testing — if your timeline requires a faster turnaround, laboratories may levy an express testing surcharge. We advise you on whether express is genuinely necessary before recommending it.",
  "Repeat testing or retesting — if a previous report needs updating or if a product has been modified and needs a fresh test, this is treated as a new testing engagement.",
  "Coordination and documentation services — our nabl lab testing coordination charges in india are separate from the laboratory's fees and cover test plan preparation, sample management, tracking, report review and documentation support.",
];

export const COST_CLOSING =
  "We provide a full, itemised NABL testing services quote before any testing commences. There are no hidden charges and no billing surprises. Request a testing proposal before you commit.";

export const VALIDITY_INTRO =
  "A NABL test report is a point-in-time record of how your product performed against a defined set of test parameters on a defined test date. The report itself does not have an expiry date printed on it by the laboratory.";

export const VALIDITY_LEAD =
  "However, the validity of a test report for the purpose of a certification or regulatory application is set by the accepting authority — not by NABL. For example:";

export const VALIDITY_ITEMS: string[] = [
  "The Bureau of Indian Standards (BIS) has its own rules on how old a test report can be when submitted with a licence application",
  "BEE, WPC, TEC and FSSAI each apply their own guidelines on report currency",
  "A test report that a customs authority accepts for import clearance may be treated differently from one submitted for a formal licence application",
];

export const VALIDITY_NOTE =
  'This means the question to ask is not "when does my NABL report expire?" but "what is the maximum report age that my certification authority will accept?" We can advise you on the specific requirement for the authority you are applying to, based on the latest regulatory guidelines applicable to your product.';

export const VALIDITY_CLOSING =
  "As a general principle, if your product formulation, design or manufacturing process has changed since the test was conducted, a fresh test is advisable regardless of the report's nominal age — because the previous report may no longer accurately represent the current product.";

export const RETESTING_INTRO =
  "Retesting is different from renewal. It applies in two main situations: a failed test result, and a product or process change that makes the original report no longer representative.";

export const RETESTING_ITEMS: { title: string; text: string }[] = [
  {
    title: "After a Non-Conforming Test Result",
    text: "When a product fails a test parameter, the first step is understanding why — which may involve a review of the sample preparation, the test conditions, the product formulation or the manufacturing process. Rushing straight to a retest without this analysis typically leads to a second failure. We provide NABL test report interpretation support and help you plan the corrective action before arranging a retest through the appropriate NABL accredited laboratory.",
  },
  {
    title: "After a Product Change",
    text: "If a product has been modified — a component substituted, a process parameter changed, a raw material sourced from a new supplier — the previous accredited test report may no longer be valid as evidence for the modified product. This is a regulatory judgement call that depends on the significance of the change, and one we can help you assess.",
  },
  {
    title: "Arranging a Retest",
    text: "We coordinate retesting in nabl labs after failed test reports through the same or a different NABL accredited laboratory depending on the circumstances. You can request retest in nabl lab through us, and we will review the previous report, help identify the root cause of the non-conformance, and plan the retest engagement to maximise the chance of a pass. Retesting in nabl lab after failed test report is common — what matters is acting on the insight the first result provides rather than simply repeating the test unchanged.",
  },
];

export const STANDARDS_ITEMS: { title: string; text: string }[] = [
  {
    title: "ISO/IEC 17025:2017 — The Core Standard",
    text: "Every NABL accredited laboratory operates under ISO/IEC 17025:2017, the international standard for the competence of testing and calibration laboratories. Key requirements under this standard include: a documented quality management system, technically competent personnel, calibrated equipment with traceability to national standards, validated test methods, and reporting that includes measurement uncertainty and a statement of conformity where required.",
  },
  {
    title: "NABL Reference Documents",
    text: "NABL publishes several documents governing accreditation and its use. NABL 100B covers the general information and application procedure for laboratory accreditation. NABL 120 describes the classification of product groups for testing and calibration. These documents are publicly available on the NABL website (nabl-india.org) and are the authoritative reference for any question about the scope or process of NABL accreditation.",
  },
  {
    title: "Indian Standards (IS Codes)",
    text: "Test methods specified in BIS certifications and QCO-mandated compliance are drawn from the applicable IS (Indian Standard) specifications published by the Bureau of Indian Standards. The specific IS numbers applicable to your product depend on the product category and the certification scheme. We identify the applicable IS code as part of our test planning service.",
  },
  {
    title: "International Standards",
    text: "For electrical safety (IEC standards, including IEC 60335 series), electromagnetic compatibility (CISPR publications), chemical analysis (ASTM and EN standards), and export compliance (RoHS Directive, EN standards for CE marking), NABL accredited laboratories in India are equipped to test against international method references. Our nabl testing services for export documentation covers this international angle.",
  },
  {
    title: "ILAC Mutual Recognition Arrangement (ILAC MRA)",
    text: "India is a signatory to the ILAC MRA through NABL. This international arrangement means that accredited test reports issued by NABL laboratories are accepted in all other ILAC MRA signatory countries. For exporters, this is commercially significant — it means you do not always need to retest abroad to satisfy an importing country's documentary requirement.",
  },
];

export const CHALLENGES_ITEMS: { title: string; text: string }[] = [
  {
    title: "Wrong Test Parameters Selected",
    text: "Selecting the wrong parameters for testing is the most avoidable and most common source of wasted testing cost. It happens when a business identifies the standard for their product category but does not dig into which specific clauses and parameters are mandatory under the certification scheme they are applying to. A BIS CRS registration test report has specific requirements that differ from a general conformance test to the same IS standard. We resolve this by mapping the test plan to the exact requirements of the regulatory scheme before any sample is dispatched.",
  },
  {
    title: "Laboratory Scope Mismatch",
    text: "Not every NABL accredited laboratory is accredited for every test. The scope of accreditation defines exactly what a lab can do. Sending samples to a lab that is not accredited for your specific test produces a report that will not be accepted. We verify the scope of accreditation before recommending any laboratory.",
  },
  {
    title: "Sample Preparation Errors",
    text: "Samples that are incorrectly prepared — wrong quantity, incorrect labelling, improper preservation or packaging, or missing accompanying documentation — are rejected or delayed at the laboratory. Our sample preparation guidance is designed to prevent this.",
  },
  {
    title: "Report Format Issues",
    text: "A test report that does not include the test method reference, or that does not carry the correct statement of conformity, may be rejected by the certification authority even if the product passed every test. We review the report before it reaches you for exactly these issues.",
  },
  {
    title: "Tight Deadlines Without Lead Time Planning",
    text: "Testing takes time — preparation, transit, the test itself and report generation all have inherent minimum durations. Businesses that engage a lab testing coordination service two weeks before a certification deadline are often setting themselves up for a rush. Planning the testing phase early in the certification project timeline significantly reduces cost, stress and risk.",
  },
  {
    title: "Not Knowing What to Do After a Failed Result",
    text: "A non-conforming test result feels like a setback, but it is also information. It tells you what needs to change about the product before it can be certified. The mistake is to retest immediately without analysis. We support you through the interpretation and corrective action phase before coordinating the retest.",
  },
];

export const HELP_PARAGRAPHS: string[] = [
  "Ornate Quality Services is an experienced lab testing consultant and nabl testing coordination agency providing professional lab testing coordination services across India. We are a product compliance testing company that connects manufacturers, importers and startups to the right NABL accredited laboratories, managing the entire engagement from enquiry to report delivery.",
  "As a nabl lab testing service provider in india and nabl accredited lab testing company with deep regulatory knowledge, we serve as a single point of contact for businesses that need compliance testing services india and regulatory testing services india without managing the laboratory relationship directly.",
  "Whether you want to book nabl lab testing online, request nabl lab testing quotation, apply for nabl lab testing, start nabl lab testing process, raise nabl lab testing request or schedule nabl lab test — we handle the coordination from that first message to the final signed report in your hands.",
  "Our nabl lab testing services for manufacturers cover the complete lifecycle of testing required for product certification. For nabl lab testing services for startup product companies, we provide more guided support — walking you through every step rather than assuming familiarity with the accreditation system. For nabl lab testing services for trading companies india and nabl lab testing for small scale manufacturers india, we offer tailored packages that match scale and budget.",
  "We are a manufacturer trusted testing partner for companies that want reliable, nabl approved lab testing services and nabl certified lab testing services — not just a list of labs, but an engaged coordination partner. Our clients include OEM suppliers, trading houses, export units, e-commerce brands and first-time applicants equally.",
  "We are a professional lab testing coordination service, not a laboratory. Our role is to manage the entire testing engagement on your behalf so that the right tests happen in the right laboratory, in the right format, at the right time.",
];

export const HELP_DO_INTRO = "Here is specifically what we do for you:";

export const HELP_DO_ITEMS: { title: string; text: string }[] = [
  {
    title: "Technical consulting",
    text: "We review your product, identify the applicable Indian standard or international test method, and prepare a complete test plan that matches the requirements of your target certification authority.",
  },
  {
    title: "Laboratory selection",
    text: "We identify NABL accredited laboratories whose scope of accreditation covers your requirement, shortlist options by turnaround and cost, and book the testing engagement.",
  },
  {
    title: "Sample management",
    text: "We guide you on sample preparation, coordinate pickup from your location, and manage the dispatch to the laboratory with all required documentation.",
  },
  {
    title: "Active tracking",
    text: "We follow up with the laboratory at each stage and provide you with status updates — so you are never left wondering where your report is.",
  },
  {
    title: "Report review",
    text: "We review the draft and final test report for completeness and accuracy before accepting and forwarding it to you.",
  },
  {
    title: "Interpretation support",
    text: "We explain the findings in plain language and flag anything that needs attention before you submit the report to a certification authority.",
  },
  {
    title: "Documentation support",
    text: "We help you organise and file the test report as part of your BIS, BEE, WPC, TEC, FSSAI, CDSCO or EPR application.",
  },
  {
    title: "Post-failure support",
    text: "If a non-conformance occurs, we help you understand the corrective action required and coordinate a structured retest engagement.",
  },
  {
    title: "Repeat and bulk testing",
    text: "For businesses with ongoing testing needs, we offer annual testing arrangements and bulk coordination packages.",
  },
];

export const WHY_CHOOSE_ROWS: TableRow[] = [
  {
    what: "Experienced lab testing consultants in India",
    means:
      "Our team has first-hand experience navigating the NABL accreditation system, the BIS testing requirements and the laboratory submission process for multiple certification schemes.",
  },
  {
    what: "Verified NABL accredited laboratory network",
    means:
      "We do not recommend laboratories at random. Every lab in our network has been verified against the NABL directory of accredited laboratories for scope and current accreditation status.",
  },
  {
    what: "End-to-end testing coordination",
    means: "From the first enquiry to the final report, we handle everything. You do not need to manage the laboratory directly.",
  },
  {
    what: "Regulatory expertise in Indian standards",
    means:
      "We understand the specific testing requirements of BIS, BEE, WPC, TEC, FSSAI and CDSCO — so your test plan is built for your actual application, not a generic standard.",
  },
  {
    what: "Transparent testing charges",
    means: "Every proposal we provide is itemised. There are no hidden fees between the lab cost and the coordination cost.",
  },
  {
    what: "Dedicated compliance account manager",
    means: "A single point of contact manages your testing from start to finish. You always know who to call.",
  },
  {
    what: "Confidential sample handling",
    means: "Your product designs, formulations and specifications are handled under confidentiality from intake to report.",
  },
  {
    what: "Standards interpretation support",
    means:
      "If the applicable IS or IEC standard is unclear in its scope or requirements, we translate it into a clear testing brief.",
  },
  {
    what: "Support from application to final report",
    means:
      "Our engagement does not end when the report is issued. We support you through the certification filing step as well.",
  },
  {
    what: "Quality assured laboratory coordination",
    means:
      "We follow a structured coordination process that mirrors the quality system requirements of ISO/IEC 17025 — traceability, documentation and accountability throughout.",
  },
];

export const WHY_CHOOSE_CLOSING =
  "We function as a compliance consultant for manufacturers and importers who need an expert partner rather than just a lab contact — providing legal compliance testing support india, technical guidance for product testing, end to end certification and testing support, and standards interpretation support throughout the process.";

export const DIRECTORY_INTRO =
  "Use the directory below to find the specific lab testing coordination you need. Every service listed here is supported by our network of NABL accredited laboratories with verified scope of accreditation.";

export const DIRECTORY_ROWS: TableRow[] = [
  {
    service: "book chemical testing in nabl lab",
    covers: "Composition analysis, heavy metal testing, raw material characterisation, food chemical analysis",
    who: "Chemical processors, food manufacturers, exporters",
  },
  {
    service: "book electrical safety testing in nabl lab",
    covers: "IEC and IS-based electrical safety parameters for appliances, switches, wiring devices",
    who: "Appliance and electrical goods manufacturers, BIS CRS applicants",
  },
  {
    service: "book mechanical testing in nabl lab",
    covers: "Tensile, hardness, impact, fatigue, dimensional verification",
    who: "Steel, metal, engineering and construction material suppliers",
  },
  {
    service: "book microbiological testing in nabl lab",
    covers: "Food microbiology, water micro, cosmetic microbial limits, sterility",
    who: "Food processors, water plants, cosmetic brands",
  },
  {
    service: "book water testing in nabl lab",
    covers: "Physical, chemical and microbiological parameters for drinking and process water",
    who: "Water treatment plants, packaged water manufacturers, FSSAI applicants",
  },
  {
    service: "book rohs testing india",
    covers: "Restricted hazardous substances (Pb, Cd, Hg, Cr VI, PBBs, PBDEs) per IEC 62321 series",
    who: "Electronics exporters to EU, EPR registrants",
  },
  {
    service: "book emi emc testing india",
    covers: "Radiated and conducted emissions, immunity — CISPR and IEC standards",
    who: "Electronics and telecom equipment manufacturers, WPC-ETA applicants",
  },
  {
    service: "book battery testing in nabl lab",
    covers: "Electrochemical, safety and thermal parameters for Li-ion and other battery types",
    who: "Battery manufacturers, BIS CRS applicants, EV component suppliers",
  },
  {
    service: "book led testing in nabl lab",
    covers: "Luminous flux, efficacy, colour rendering index, electrical safety for LED lamps and luminaires",
    who: "LED manufacturers, BEE star rating applicants",
  },
  {
    service: "book food testing in nabl lab",
    covers: "Nutritional analysis, contaminants, additives, pesticide residues, shelf life",
    who: "Food and beverage manufacturers, FSSAI licence holders, exporters",
  },
  {
    service: "book textile testing in nabl lab",
    covers: "Colour fastness, tensile, tear, composition analysis, azo dye testing",
    who: "Textile and garment manufacturers and exporters",
  },
  {
    service: "book toy safety testing india",
    covers: "Mechanical safety, chemical content, flammability, electrical requirements for toys",
    who: "Toy manufacturers and importers, BIS certification applicants",
  },
  {
    service: "book cable testing in nabl lab",
    covers: "Conductor resistance, insulation resistance, voltage withstand, flame retardancy",
    who: "Wire and cable manufacturers, BIS certification applicants",
  },
  {
    service: "book cement testing in nabl lab",
    covers: "Compressive strength, fineness, setting time, chemical composition per IS standards",
    who: "Cement and construction material manufacturers",
  },
  {
    service: "book packaging testing india",
    covers: "Drop test, vibration, compression, burst strength, water vapour transmission",
    who: "Packaging manufacturers, e-commerce and export product packers",
  },
  {
    service: "book calibration service in nabl lab",
    covers: "Dimensional, electrical, thermal, pressure and mass calibration with NABL certificates",
    who: "Manufacturing QC labs, ISO 9001 holders, engineering workshops",
  },
  {
    service: "nabl lab testing for rohs declaration",
    covers: "Full RoHS composition screening for regulatory self-declaration and export compliance",
    who: "Electronics manufacturers, EPR registrants, CE marking applicants",
  },
  {
    service: "nabl accredited water testing lab",
    covers: "Potable water quality as per IS 10500, effluent analysis, environmental water monitoring",
    who: "Municipalities, water treatment plants, food plants with captive water supply",
  },
  {
    service: "nabl calibration laboratory",
    covers: "Metrologically traceable calibration of instruments and reference standards",
    who: "Any facility with process control or QC measurement equipment",
  },
  {
    service: "nabl textile testing laboratory",
    covers: "Full textile testing suite including strength, composition and chemical safety",
    who: "Textile mills, garment exporters, fabric traders meeting buyer QC requirements",
  },
  {
    service: "nabl toy testing laboratory",
    covers: "Comprehensive toy safety compliance testing for IS 9873 and associated standards",
    who: "Toy manufacturers, importers, BIS certification applicants",
  },
  {
    service: "nabl accredited chemical testing lab",
    covers: "Analytical chemistry including ICP, AAS, GC, HPLC and volumetric methods",
    who: "Chemical, food, pharma and material industries requiring analytical certification",
  },
  {
    service: "nabl accredited electrical testing lab",
    covers: "Full range of electrical testing for consumer and industrial electrical products",
    who: "Electrical goods manufacturers, BIS CRS and ISI Mark applicants",
  },
  {
    service: "nabl accredited mechanical testing lab",
    covers: "Universal testing, hardness, impact, NDT and dimensional metrology",
    who: "Engineering, construction and automotive component manufacturers",
  },
  {
    service: "nabl microbiological testing lab",
    covers: "ISO and IS method-based microbiology for food, water, cosmetics and environment",
    who: "FSSAI regulated businesses, pharma units, food exporters",
  },
  {
    service: "nabl accredited food testing lab",
    covers: "Comprehensive food safety and quality testing against FSSAI and export standards",
    who: "Food manufacturers, packaged food brands, restaurant chains with private label products",
  },
  {
    service: "metal testing laboratory services",
    covers: "Chemical composition, mechanical properties and corrosion testing for metals and alloys",
    who: "Metal fabricators, foundries, and engineering goods manufacturers",
  },
  {
    service: "air quality testing lab",
    covers: "Ambient air quality, stack emissions, indoor air quality monitoring",
    who: "Industries with environmental clearance conditions, CPCB/SPCB compliance",
  },
  {
    service: "rohs testing laboratory india",
    covers: "RoHS hazardous substance screening per IEC 62321 series for Indian and export compliance",
    who: "Electronics and electrical product manufacturers and importers",
  },
  {
    service: "emi emc testing lab india",
    covers: "EMC test services covering both emissions and immunity for electronic equipment",
    who: "Electronic product manufacturers targeting BIS CRS, WPC-ETA or export CE marking",
  },
  {
    service: "environmental testing laboratory india",
    covers: "Soil, water, air and noise testing under CPCB and SPCB requirements",
    who: "Industries with EIA conditions and pollution control obligations",
  },
  {
    service: "led testing laboratory india",
    covers: "Photometric and electrical safety testing for LED lamps, drivers and luminaires",
    who: "LED product manufacturers, BIS CRS applicants, BEE registration applicants",
  },
  {
    service: "battery testing laboratory india",
    covers: "Li-ion, NiMH and lead-acid battery testing per IEC and IS safety standards",
    who: "Battery pack manufacturers, EV component suppliers, BIS applicants",
  },
  {
    service: "electronics testing laboratory india",
    covers: "Safety, EMC, energy efficiency and performance testing for electronic products",
    who: "Consumer electronics manufacturers and importers",
  },
  {
    service: "cosmetic testing laboratory india",
    covers: "Microbial limits, heavy metals, stability, pH and preservative efficacy",
    who: "Cosmetic and personal care brand owners, CDSCO notified product manufacturers",
  },
  {
    service: "plastic testing laboratory india",
    covers: "Tensile, flexural, impact, melt flow index, chemical resistance for polymers",
    who: "Plastic processors, packaging manufacturers, BIS certification applicants",
  },
  {
    service: "cement testing laboratory india",
    covers: "Compressive strength, fineness, setting time, chemical analysis per IS 269 and related standards",
    who: "Cement manufacturers, ready-mix concrete suppliers, construction material importers",
  },
  {
    service: "cable testing laboratory india",
    covers: "All electrical, mechanical and fire performance tests for wiring cables and power cables",
    who: "Wire and cable manufacturers seeking BIS ISI Mark or customer QC approval",
  },
  {
    service: "packaging testing laboratory india",
    covers: "Transit simulation, mechanical performance and material quality for packaging",
    who: "Packaging manufacturers, e-commerce fulfilment businesses, export packaging units",
  },
  {
    service: "soil testing laboratory india",
    covers: "Agricultural and geotechnical soil analysis for nutrient profile and contamination",
    who: "Agricultural businesses, land developers, environmental compliance teams",
  },
  {
    service: "pharmaceutical testing laboratory india",
    covers: "Raw material, in-process and finished product testing for pharma manufacturers",
    who: "API manufacturers, formulation units, CDSCO licensed manufacturers",
  },
  {
    service: "nabl accredited lab testing for electrical appliances india",
    covers: "Safety testing for household and commercial electrical appliances per IS 302 series",
    who: "Appliance manufacturers and importers seeking BIS certification or customer compliance",
  },
  {
    service: "nabl accredited lab testing for plastic products india",
    covers: "Polymer identification and mechanical testing for plastic components and packaging",
    who: "Plastic product manufacturers, packaging companies, importers of plastic goods",
  },
  {
    service: "nabl lab testing for textile and garment exporters",
    covers: "Export-focused testing covering buyer and retailer QC requirements for textiles",
    who: "Garment and fabric exporters to EU, US and other regulated markets",
  },
  {
    service: "nabl accredited lab testing for pet food products",
    covers: "Nutritional analysis, microbiological testing and contaminant screening for pet food",
    who: "Pet food manufacturers and importers requiring compliance documentation",
  },
  {
    service: "nabl lab testing for household electronics india",
    covers: "Safety, EMC and performance testing for consumer electronics and home devices",
    who: "Electronics brands, importers and OEM suppliers for the Indian market",
  },
  {
    service: "nabl lab testing for paper and packaging products",
    covers: "Strength, moisture, printability and chemical safety testing for paper and packaging",
    who: "Paper mills, corrugated box manufacturers and flexible packaging converters",
  },
  {
    service: "nabl lab testing for lithium ion battery packs india",
    covers: "Cell-level and pack-level safety testing including thermal, electrical and mechanical abuse tests",
    who: "Li-ion battery pack assemblers, EV and energy storage product manufacturers",
  },
  {
    service: "nabl accredited lab testing for led drivers and luminaires",
    covers: "Photometric efficiency, power factor, THD and electrical safety for LED drivers and fixtures",
    who: "LED driver manufacturers and luminaire brands applying for BEE or BIS",
  },
  {
    service: "nabl lab testing for chemical raw materials india",
    covers: "Incoming quality control testing and specification verification for industrial chemicals",
    who: "Chemical manufacturers, processors and traders managing incoming material quality",
  },
  {
    service: "nabl accredited lab testing for effluent and wastewater",
    covers: "Effluent characterisation against CPCB and SPCB discharge standards",
    who: "Industrial units with effluent treatment obligations",
  },
  {
    service: "nabl lab testing for drinking water packaging units",
    covers: "Water quality testing per IS 10500 and microbiological testing for packaged drinking water",
    who: "Packaged water manufacturers seeking FSSAI licence and BIS ISI Mark",
  },
  {
    service: "nabl accredited lab testing for cosmetics exporters",
    covers: "International compliance testing (EU Cosmetics Regulation, US FDA relevant standards)",
    who: "Indian cosmetic brands exporting to regulated international markets",
  },
];

export const INDUSTRIES_INTRO =
  "Our NABL accredited lab testing services are applicable across a wide range of industries. Here are the sectors we most frequently support:";

export const INDUSTRY_ROWS: TableRow[] = [
  {
    industry: "Consumer Electronics & Electricals",
    needs: "Electrical safety, EMI/EMC, energy efficiency, LED photometry, battery safety",
    certification: "BIS CRS, WPC-ETA, BEE Star Rating, TEC-MTCTE",
  },
  {
    industry: "Steel, Metals & Construction Materials",
    needs: "Tensile strength, TMT bar testing, cement and concrete testing, non-destructive testing",
    certification: "BIS ISI Mark, Government tender compliance",
  },
  {
    industry: "Chemicals & Polymers",
    needs: "Chemical composition, RoHS and REACH compliance, heavy metal analysis, material identification",
    certification: "BIS certification, Export compliance (CE, EU RoHS)",
  },
  {
    industry: "Food & Beverages",
    needs: "Microbiological testing, food chemical analysis, contaminant screening, shelf life studies",
    certification: "FSSAI licence, Export documentation",
  },
  {
    industry: "Textiles, Apparel & Footwear",
    needs: "Colour fastness, physical strength, chemical content, footwear material compliance",
    certification: "Export documentation, BIS certification",
  },
  {
    industry: "Packaging & Paper",
    needs: "Drop and vibration testing, compression testing, material composition",
    certification: "E-commerce and export compliance",
  },
  {
    industry: "LED Lighting",
    needs: "Photometric testing (luminous flux, efficacy, colour rendering), electrical safety",
    certification: "BIS CRS, BEE registration",
  },
  {
    industry: "Batteries & Power Products",
    needs: "Battery safety testing, electrochemical performance, thermal testing",
    certification: "BIS CRS, UN38.3 for transport",
  },
  {
    industry: "Toys & Children's Products",
    needs: "Mechanical safety, chemical content, flammability, electrical safety",
    certification: "BIS certification, Export compliance",
  },
  {
    industry: "Cosmetics & Personal Care",
    needs: "Microbial limit testing, heavy metal analysis, stability testing, pH testing",
    certification: "CDSCO notification, Export compliance",
  },
  {
    industry: "Ayurvedic & Herbal Products",
    needs: "Heavy metal limits, microbiological testing, pesticide residue analysis",
    certification: "AYUSH compliance, Export documentation",
  },
  {
    industry: "Solar & Renewable Energy",
    needs: "Performance testing, electrical safety, materials testing",
    certification: "BIS certification, GeM listing",
  },
  {
    industry: "Environmental & Water",
    needs: "Water quality testing, effluent analysis, air quality monitoring",
    certification: "CPCB/SPCB compliance, FSSAI",
  },
];

export const LOCATIONS_INTRO =
  "Our nabl lab testing coordination services and nabl testing coordination services in noida are available across India. We have coordinated testing for manufacturers, importers, exporters and compliance consultants across all major industrial zones.";

export const LOCATION_ROWS: TableRow[] = [
  {
    city: "nabl lab testing services in noida",
    serve: "Our principal base — fastest sample pickup and delivery coordination in the NCR",
  },
  {
    city: "nabl lab testing services in gurgaon",
    serve: "Coverage for Gurugram industrial and export units",
  },
  {
    city: "nabl lab testing services in faridabad",
    serve: "Coordination for Faridabad manufacturing clusters",
  },
  {
    city: "nabl lab testing services in ghaziabad",
    serve: "Sample pickup from Ghaziabad industrial areas",
  },
  {
    city: "nabl lab testing services in mumbai",
    serve: "Testing coordination for Mumbai and Navi Mumbai manufacturing and trading companies",
  },
  {
    city: "nabl lab testing services in pune",
    serve: "Engineering, auto component and FMCG manufacturers in Pune",
  },
  {
    city: "nabl lab testing services in bangalore",
    serve: "Electronics, software hardware and aerospace supply chain units in Bangalore",
  },
  {
    city: "nabl lab testing services in hyderabad",
    serve: "Pharma, biotech and IT hardware manufacturers in Hyderabad",
  },
  {
    city: "nabl lab testing services in chennai",
    serve: "Auto and electronics manufacturers in Chennai and surrounding industrial zones",
  },
  {
    city: "nabl lab testing services in ahmedabad",
    serve: "Chemical, textile and pharma manufacturers in Ahmedabad and Vadodara",
  },
  {
    city: "nabl lab testing services in surat",
    serve: "Textile, diamond and chemical exporters in Surat",
  },
  {
    city: "nabl lab testing services in kolkata",
    serve: "Engineering goods and jute sector testing coordination from Kolkata",
  },
  {
    city: "nabl lab testing services in ludhiana",
    serve: "Bicycle, hosiery and small engineering goods manufacturers in Ludhiana",
  },
  {
    city: "nabl lab testing services in jaipur",
    serve: "Handicrafts, gems, textile and food product manufacturers in Jaipur",
  },
  {
    city: "nabl lab testing services in coimbatore",
    serve: "Pumps, motors, textiles and FMCG manufacturers in Coimbatore",
  },
  {
    city: "nabl lab testing services in rajkot",
    serve: "Engineering and auto component manufacturers in Rajkot",
  },
  {
    city: "nabl lab testing services for a factory in noida",
    serve: "Factory-level coordination including on-site sample collection and witness testing",
  },
  {
    city: "nabl lab near me",
    serve: "We identify the nearest accredited laboratory with the correct scope for your product anywhere in India",
  },
];

export const LOCATIONS_NOTE =
  "For businesses in cities not listed above, we offer full remote coordination — you dispatch samples, we manage the rest. Contact us with your location and product category.";

export const MISTAKES_ITEMS: string[] = [
  "Sending samples before a test plan is confirmed — always agree on the parameters and test methods before dispatch; once samples are consumed in a wrong test, they cannot be recovered",
  "Choosing a laboratory based on price alone without checking its NABL scope of accreditation for your specific product category and test type",
  "Using a test report from a previous product version for a new or modified product — if the design, formulation or material has changed, the report no longer represents the current product",
  "Not retaining a sample from the same batch as the test sample — if a dispute arises about the test result, having a counter-sample is important",
  "Submitting a test report that was issued more than the permissible period before the certification application date — check the specific report-age limit with the accepting authority before submitting",
  "Assuming that passing one standard automatically means passing another — different certification schemes may reference different clauses or different test methods, even for the same product",
  "Not informing the lab or coordination partner about import-related constraints when samples are being tested for import clearance purposes",
];

export const TIPS_ITEMS: string[] = [
  "Start the testing phase at least 4 to 6 weeks before your certification application deadline — for complex multi-parameter tests or busy laboratories, this buffer is not a luxury but a necessity",
  "Always request a written test plan before samples are dispatched — this document should list every test parameter, the applicable test method reference and the pass/fail acceptance criteria",
  "Check the laboratory's current NABL certificate and scope of accreditation on nabl-india.org before submitting samples — accreditation can lapse or be reduced in scope",
  "If your product covers multiple IS standards or is being certified under multiple schemes, discuss a consolidated test plan — it is often possible to satisfy multiple requirements with a single set of samples and a single report",
  "Keep an organised record of all test reports, scope documents and lab correspondence — a systematic filing system avoids searching through email archives when an auditor or certification officer asks for documentation",
  "If a parameter fails, do not change the product and immediately retest without understanding the root cause — the same failure will repeat if the underlying issue is not addressed first",
  "For annual testing arrangements, plan your testing schedule around your production cycle and certification renewal calendar, not your administrative schedule",
];

export const COMPARISON_ROWS: TableRow[] = [
  {
    aspect: "Acceptance by BIS, BEE, WPC, TEC, FSSAI",
    nabl: "Accepted",
    non: "Generally not accepted",
    inhouse: "Not accepted for regulatory submissions",
  },
  {
    aspect: "Internationally recognised (ILAC MRA)",
    nabl: "Yes — in 100+ countries",
    non: "No",
    inhouse: "No",
  },
  {
    aspect: "Measurement uncertainty declared",
    nabl: "Yes — mandatory under ISO/IEC 17025",
    non: "Typically absent",
    inhouse: "Typically absent",
  },
  {
    aspect: "Statement of conformity",
    nabl: "Yes — standard element of the report",
    non: "May or may not be present",
    inhouse: "May or may not be present",
  },
  {
    aspect: "Test method traceability",
    nabl: "Fully traceable to IS / IEC / ASTM references",
    non: "Variable",
    inhouse: "Variable",
  },
  {
    aspect: "Acceptable for customs / import clearance",
    nabl: "Yes",
    non: "Risk of rejection",
    inhouse: "Not typically accepted",
  },
  {
    aspect: "Suitable for government tenders and GeM",
    nabl: "Yes",
    non: "Typically not adequate",
    inhouse: "Not typically adequate",
  },
  {
    aspect: "Useful for export documentation (RoHS etc.)",
    nabl: "Yes",
    non: "Unlikely to be accepted abroad",
    inhouse: "Not accepted",
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is NABL and why is NABL accreditation important?",
    a: "NABL stands for National Accreditation Board for Testing and Calibration Laboratories. It is the official accreditation body in India, operating under the Quality Council of India (QCI). A laboratory accredited by NABL has been independently assessed against ISO/IEC 17025:2017 and demonstrated technical competence for specific tests. Regulatory bodies in India — including BIS, BEE, WPC, TEC and FSSAI — require test reports from NABL accredited or BIS recognised laboratories for certification and registration applications.",
  },
  {
    q: "Is a NABL test report mandatory for BIS certification?",
    a: "Yes. BIS requires test reports from accredited testing laboratories for most certification schemes, including BIS CRS registration, ISI Mark licence applications and FMCS certification for foreign manufacturers. The specific laboratory requirements depend on the product category and the applicable IS standard. We can confirm the exact requirement for your product.",
  },
  {
    q: "What is the difference between NABL accreditation and ISO 17025?",
    a: "ISO/IEC 17025:2017 is the international standard that defines the requirements for the technical competence of testing and calibration laboratories. NABL accreditation is the formal recognition granted by India's NABL accreditation body to a laboratory that meets those requirements. In short: ISO/IEC 17025 is the standard, and NABL accreditation is the assessment against that standard by an authorised body. The two are inseparable — every NABL accredited laboratory operates under ISO/IEC 17025.",
  },
  {
    q: "How do I check if a laboratory is NABL accredited?",
    a: "The NABL directory of accredited laboratories is publicly available at nabl-india.org. You can search by laboratory name, city, testing discipline or product category. When checking, also verify that the laboratory's specific scope of accreditation covers the test you need — the directory shows the scope alongside the accreditation certificate details.",
  },
  {
    q: "How long does NABL lab testing take?",
    a: "Testing timelines depend on the discipline, the number of parameters, the laboratory's current schedule and the complexity of your product. Biological and microbiological tests have minimum incubation periods; multi-parameter electrical safety tests take longer than single-parameter physical tests. We always share an estimated timeline in the test proposal, and we track progress actively on your behalf.",
  },
  {
    q: "What does the NABL test report contain?",
    a: "A standard NABL accredited test report includes the laboratory's name and accreditation number, the date of testing, the test method reference (IS, IEC, ASTM or EN as applicable), the test results for each parameter, the measurement uncertainty for each result, and a statement of conformity — the laboratory's declaration of whether the product passed or failed the relevant requirement. Our NABL test report interpretation support helps you understand each of these elements.",
  },
  {
    q: "How long is a NABL test report valid?",
    a: "A NABL test report does not carry a fixed expiry date. The validity period for regulatory submission purposes is set by the accepting authority — BIS, BEE, WPC, TEC or whichever body you are applying to. Different authorities have different rules on how recent a test report must be at the time of application. We advise you on the specific requirement for your authority and application type.",
  },
  {
    q: "Can I use one NABL test report for multiple applications?",
    a: "In some cases, yes — if the test parameters, test methods and product description in the report satisfy the requirements of more than one certification scheme, the same report may be usable for both. However, different schemes sometimes require different parameters or different method references even for the same product. We assess this on a case-by-case basis as part of the test planning process.",
  },
  {
    q: "What happens if my product fails the lab test?",
    a: "A non-conforming result is information, not a final verdict. The next step is to understand which parameter failed and why — whether it is a design issue, a manufacturing deviation, a raw material problem or a sample preparation error. We provide NABL test report interpretation support and help you plan the corrective action before coordinating a structured retest.",
  },
  {
    q: "Can you coordinate testing for imported products?",
    a: "Yes. We coordinate NABL lab testing for imported samples in India. If you are an importer who needs testing for customs clearance documentation, type testing for a BIS CRS application or compliance testing for an imported product range, we handle the full coordination — from sample import documentation through to the accredited test report.",
  },
  {
    q: "Do you arrange sample pickup from our factory or office?",
    a: "Yes. We coordinate request for NABL lab sample pickup and manage the logistics from your location to the accredited laboratory. We also advise you on how to package and label samples correctly before pickup.",
  },
  {
    q: "Can I witness the testing at the laboratory?",
    a: "Yes, witness testing at NABL accredited laboratories can be arranged for most test types. We coordinate the schedule and access with the laboratory on your behalf. Witness testing is particularly common for BIS and other official certification schemes where the certification body or the applicant wants independent observation of the testing.",
  },
  {
    q: "Do you provide testing for BEE star rating applications?",
    a: "Yes. We provide NABL accredited lab testing for BEE star rating applications. BEE requires test reports from laboratories recognised or accredited by NABL for energy efficiency and performance parameters. We identify the applicable testing requirements for your product category and manage the full testing engagement.",
  },
  {
    q: "Do you provide testing for WPC-ETA applications?",
    a: "Yes. WPC-ETA approval requires test reports for radio frequency and telecommunication equipment. We coordinate NABL lab testing assistance for WPC-ETA approval and can identify accredited EMI/EMC laboratories with the required WPC-recognition status.",
  },
  {
    q: "Do you support FSSAI testing requirements?",
    a: "Yes. We provide lab testing support for FSSAI licence applications, covering both microbiological and chemical analysis requirements for food products, packaged water, food contact materials and food additives under the FSSAI framework.",
  },
  {
    q: "Can you coordinate testing for EPR compliance?",
    a: "Yes. We provide NABL lab testing services for EPR compliance — including chemical composition analysis, RoHS and hazardous substance testing for electronic and electrical products covered under EPR regulations.",
  },
  {
    q: "Can you handle testing for RoHS and REACH compliance?",
    a: "Yes. Our chemical testing coordination covers RoHS and REACH testing in NABL accredited chemical analysis laboratories. For exporters, this typically means testing against EN 62321 series standards for RoHS and analytical testing for SVHC substances under REACH.",
  },
  {
    q: "Do you work with MSMEs and small manufacturers?",
    a: "Yes. NABL lab testing for small scale manufacturers and MSMEs is a core part of our service. We understand that smaller organisations often have less familiarity with the testing and certification system, and we provide more guided support for first-time users.",
  },
  {
    q: "What is the cost of your NABL lab testing coordination service?",
    a: "Our coordination charges depend on the scope of the engagement — the complexity of the test plan, the number of samples, the laboratory selected and the level of documentation support required. We provide a transparent, itemised quotation before any testing commences. Contact us with your product details and the regulatory requirement you are targeting, and we will prepare a testing proposal.",
  },
  {
    q: "Can you handle bulk or repeated testing across multiple product models?",
    a: "Yes. We offer NABL lab testing service for bulk samples and can structure annual testing arrangements for businesses with ongoing testing needs. If you manage multiple product variants that each need accredited test reports, a coordinated testing programme is more cost-effective than booking tests individually.",
  },
  {
    q: "Do you keep our product information confidential?",
    a: "Yes. All product information, specifications, formulations and test data shared with us are treated as confidential. We work with accredited laboratories that are bound by the impartiality and confidentiality requirements of ISO/IEC 17025.",
  },
  {
    q: "What is your service coverage area?",
    a: "We operate across India. Our laboratory network covers major industrial centres including Delhi NCR (Noida, Gurgaon, Faridabad, Ghaziabad), Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Ahmedabad, Surat, Kolkata, Ludhiana, Jaipur, Coimbatore and Rajkot. For locations outside our standard network, we arrange lab coordination and logistics on a case-by-case basis.",
  },
];

export const CTA_TITLE = "Start Your NABL Lab Testing Engagement";

export const CTA_PARAGRAPHS: string[] = [
  "Whether you are preparing for a BIS certification application, clearing an import shipment, meeting a government tender requirement or simply ensuring your products are tested to the applicable Indian or international standard — we are here to manage the testing process end to end.",
  "Tell us about your product and the regulatory requirement you are working towards. We will review the applicable testing scope, identify the right NABL accredited laboratory, and prepare a clear testing proposal for your review — with no obligation to proceed until you are satisfied with the plan.",
];

export const CTA_FOOTER =
  "Ornate Quality Service Pvt. Ltd. — Certification, Regulatory Compliance and Testing Coordination Services across India";

export const REPORTS_INTRO =
  "A significant part of our service involves helping manufacturers and importers get the right test report, in the right format, from the right accredited laboratory — and then using that report effectively in their compliance application. Here are the most common test report needs we handle:";

export const REPORT_ROWS: TableRow[] = [
  {
    need: "get test report for bis certification",
    do: "We coordinate testing in a NABL accredited or BIS recognised laboratory and deliver a test report in the format BIS requires for your specific certification scheme",
    scheme: "BIS ISI Mark, BIS CRS",
  },
  {
    need: "get test report for bee registration",
    do: "We arrange testing against BEE energy efficiency parameters and deliver the accredited report for your BEE star label application",
    scheme: "BEE Star Rating Programme",
  },
  {
    need: "get test report for wpc eta approval",
    do: "We coordinate EMC and RF testing and deliver the WPC-accepted test report for your Equipment Type Approval application",
    scheme: "WPC-ETA Approval",
  },
  {
    need: "get test report for isi mark licence",
    do: "We manage full IS-standard testing for an ISI Mark application and deliver the NABL accredited report with all required parameters",
    scheme: "BIS ISI Mark (Scheme I / Scheme II)",
  },
  {
    need: "get test report for epr registration",
    do: "We arrange RoHS and chemical composition testing for EPR compliance declarations and deliver the accredited report",
    scheme: "MoEFCC EPR Registration",
  },
  {
    need: "nabl test report service for product certification",
    do: "We provide end-to-end test report coordination — from lab selection to report delivery — for any product certification requirement",
    scheme: "All BIS, BEE, WPC, TEC, FSSAI, CDSCO schemes",
  },
  {
    need: "nabl testing services for export documentation",
    do: "We coordinate RoHS, REACH, CE-relevant and buyer-specific testing and deliver reports suitable for export documentation",
    scheme: "Export compliance, CE Marking, RoHS Directive",
  },
  {
    need: "apply for iso 17025 lab test report",
    do: "We facilitate testing in an ISO/IEC 17025:2017 accredited laboratory and obtain the accredited test report on your behalf",
    scheme: "All schemes requiring ISO/IEC 17025 accreditation",
  },
  {
    need: "get nabl test certificate online",
    do: "We deliver soft copies of signed accredited test reports and can coordinate hard copy dispatch from the laboratory",
    scheme: "All NABL accredited testing programmes",
  },
  {
    need: "laboratory test report for import",
    do: "We coordinate testing of imported product samples in India and deliver accredited reports for customs and import compliance",
    scheme: "Customs clearance, BIS import notification",
  },
  {
    need: "nabl test report requirement for isi mark licence",
    do: "We advise on the exact test report parameters and format required for an ISI Mark application and coordinate the testing accordingly",
    scheme: "BIS ISI Mark certification scheme",
  },
  {
    need: "nabl lab test report for gem portal listing",
    do: "We coordinate testing and deliver the accredited report needed to support quality certification for GeM marketplace listing",
    scheme: "GeM Portal product listing",
  },
  {
    need: "download nabl test report",
    do: "We provide soft-copy accredited test reports via secure transfer immediately upon receipt from the laboratory",
    scheme: "All disciplines and schemes",
  },
  {
    need: "nabl lab test report for certification",
    do: "We review the completed accredited test report before delivery to confirm it is complete, correctly formatted and suitable for your certification filing",
    scheme: "All BIS, BEE, WPC, TEC, FSSAI, CDSCO schemes",
  },
  {
    need: "accredited lab test certificate",
    do: "We coordinate the issuance of an accredited test certificate from a NABL laboratory and provide interpretation support alongside it",
    scheme: "All disciplines",
  },
  {
    need: "nabl lab test report format",
    do: "We advise on the required format — parameters covered, statement of conformity, measurement uncertainty — before testing begins",
    scheme: "All schemes",
  },
  {
    need: "bis approved lab test report",
    do: "We identify laboratories with BIS recognised status (where required) and coordinate testing to produce a BIS-acceptable accredited report",
    scheme: "BIS ISI Mark, BIS CRS, FMCS",
  },
];
