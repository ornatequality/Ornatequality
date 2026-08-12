export type TocItem = {
  id: string;
  label: string;
};

export const TPI_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-tpi", label: "What is Third Party Inspection?" },
  { id: "importance", label: "Why TPI Matters" },
  { id: "services-offered", label: "Our Inspection Services" },
  { id: "process", label: "Inspection Process" },
  { id: "industries", label: "Industries We Serve" },
  { id: "documents", label: "Information Required" },
  { id: "cost", label: "Inspection Cost" },
  { id: "standards", label: "Inspection Standards" },
  { id: "benefits", label: "Benefits of TPI" },
  { id: "why-ornate", label: "Why Choose Ornate" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const INSPECTION_SERVICES_ROWS = [
  {
    service: "Pre-Shipment Inspection (PSI)",
    application: "Final quality check before goods leave factory",
    deliverable: "Inspection report with pass/fail verdict",
  },
  {
    service: "During Production Inspection (DPI)",
    application: "Mid-production quality check to catch issues early",
    deliverable: "Defect report with corrective action recommendations",
  },
  {
    service: "Initial Production Check (IPC)",
    application: "Verify raw materials and production setup before bulk manufacturing",
    deliverable: "Production readiness report",
  },
  {
    service: "Factory Audit / Supplier Audit",
    application: "Assess manufacturing capability, quality systems, and compliance",
    deliverable: "Detailed audit report with scoring",
  },
  {
    service: "BIS Inspection Support",
    application: "Preparation and support for BIS CRS / ISI factory inspections",
    deliverable: "Inspection readiness report + support during BIS visit",
  },
  {
    service: "PESO Inspection Coordination",
    application: "Third party inspection for PESO product approvals",
    deliverable: "PESO-format inspection certificate",
  },
  {
    service: "Loading Supervision",
    application: "Verify quantity and condition of goods during loading",
    deliverable: "Loading report with photographic evidence",
  },
  {
    service: "Product Compliance Verification",
    application: "Check product against regulatory standards (BIS, IS, CE, RoHS)",
    deliverable: "Compliance verification report",
  },
  {
    service: "Vendor Assessment",
    application: "Evaluate new or existing vendors against buyer-defined criteria",
    deliverable: "Vendor qualification report with recommendation",
  },
  {
    service: "Container / Cargo Inspection",
    application: "Verify container condition and loading quality before sealing",
    deliverable: "Container inspection report",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Assess",
    color: "#0b57b5",
    title: "Step 1 — Inspection Requirement Assessment",
    text: "The first step is understanding your specific inspection requirement — what you need inspected, where it is located, what standards or specifications it must be assessed against, and when the inspection needs to take place. Our team conducts a brief initial assessment to confirm the scope, standard, and timeline — and recommends the most appropriate inspection service for your situation.",
  },
  {
    step: "02",
    label: "Plan",
    color: "#2563eb",
    title: "Step 2 — Inspection Plan & Checklist Preparation",
    text: "Based on the agreed scope and applicable standards, our team prepares a detailed inspection plan and checklist. The checklist defines exactly what will be checked, how it will be checked, what sampling plan will be used, and what the acceptance criteria are for each check point. For factory audits, the checklist is based on ISO 9001, BIS factory inspection criteria, or the client's supplier qualification requirements.",
  },
  {
    step: "03",
    label: "Deploy",
    color: "#0891b2",
    title: "Step 3 — Inspector Deployment",
    text: "Our inspector is deployed to the inspection location at the agreed time. Our inspectors are located across India's major industrial cities, enabling rapid deployment typically within 24 to 48 hours of booking for standard inspection types. For regulatory inspections, our team coordinates timing with the regulatory authority and accompanies the inspector to ensure the process runs smoothly.",
  },
  {
    step: "04",
    label: "Inspect",
    color: "#059669",
    title: "Step 4 — On-Site Inspection Execution",
    text: "The on-site inspection is conducted strictly in accordance with the agreed inspection plan and checklist. For product inspections, this involves visual examination, dimensional measurement, functional testing, labelling checks, packaging assessment, and quantity verification. For factory audits, the inspection covers facility infrastructure, production processes, quality control systems, documentation, and staff competency — all documented with photographic evidence.",
  },
  {
    step: "05",
    label: "Testing",
    color: "#d97706",
    title: "Step 5 — Sample Collection & Testing Coordination (If Required)",
    text: "Where the inspection scope includes product testing — for example, product safety testing for BIS compliance or chemical analysis for RoHS verification — our team collects samples during the inspection and coordinates dispatch to the appropriate NABL-accredited laboratory. We manage the complete testing coordination process from sample labelling to test report collection and review.",
  },
  {
    step: "06",
    label: "Report",
    color: "#dc2626",
    title: "Step 6 — Inspection Report Preparation & Delivery",
    text: "Following the on-site inspection, our team prepares a detailed inspection report covering all findings, photographic evidence, measurement data, and a clear overall verdict — pass, fail, or conditional. Reports are typically delivered within 24 to 48 hours of inspection completion for standard inspections. The report clearly identifies non-conformances, their severity, and recommended corrective actions.",
  },
  {
    step: "07",
    label: "Follow-up",
    color: "#7c3aed",
    title: "Step 7 — Corrective Action Follow-Up (If Required)",
    text: "Where inspection findings require corrective action by the supplier or manufacturer, our team can conduct a re-inspection after corrections have been made — verifying that all non-conformances have been addressed to the required standard before the shipment is released or the regulatory application is re-submitted.",
  },
];

export const COMMISSION_INFO_ROWS = [
  {
    no: "1",
    information: "Product Description",
    details: "Name, model, specification, and intended use of the product to be inspected",
  },
  {
    no: "2",
    information: "Applicable Standard or Specification",
    details: "Indian Standard (IS), international standard, or client specification to inspect against",
  },
  {
    no: "3",
    information: "Inspection Location",
    details: "Full address of the factory, warehouse, or facility where inspection is to be conducted",
  },
  {
    no: "4",
    information: "Inspection Type",
    details: "Pre-shipment, during production, factory audit, regulatory compliance check, etc.",
  },
  {
    no: "5",
    information: "Total Quantity",
    details: "Total quantity of goods available for inspection — for sampling plan calculation",
  },
  {
    no: "6",
    information: "Product Specifications",
    details: "Technical drawings, approved samples, or specification sheets for the product",
  },
  {
    no: "7",
    information: "Inspection Date Requirement",
    details: "Required inspection date or date range — for inspector scheduling",
  },
  {
    no: "8",
    information: "Contact at Factory",
    details: "Name and contact details of the factory or supplier contact for coordination",
  },
  {
    no: "9",
    information: "Specific Client Requirements",
    details: "Any additional checks, tests, or client-specific criteria beyond the standard specification",
  },
  {
    no: "10",
    information: "Previous Inspection Reports",
    details: "Any earlier inspection reports for reference — particularly for re-inspection requests",
  },
];

export const WHY_ORNATE_COMPARISON_ROWS = [
  {
    others: "Generic inspection checklists",
    ornate: "Product and standard-specific checklists tailored to your requirement",
  },
  {
    others: "Inspection-only service",
    ornate: "Inspection + regulatory compliance guidance combined",
  },
  {
    others: "Report delivered in 3 to 5 days",
    ornate: "Standard reports within 24 to 48 hours of inspection",
  },
  {
    others: "Pass/fail verdict only",
    ornate: "Actionable findings with corrective action recommendations",
  },
  {
    others: "Limited regulatory expertise",
    ornate: "15+ years of BIS, PESO, CE, and product certification expertise",
  },
  {
    others: "Inspectors unfamiliar with regulatory requirements",
    ornate: "Inspectors trained in applicable Indian and international standards",
  },
  {
    others: "No post-inspection support",
    ornate: "Ongoing support for corrective action verification and re-inspection",
  },
];

export const BENEFITS_ITEMS = [
  "Risk reduction — catch quality defects before shipment rather than after delivery",
  "Independent credibility — inspection findings carry more weight than self-assessment or supplier claims",
  "Regulatory compliance — support for BIS, PESO, CE, and other regulatory factory and product inspections",
  "Supplier accountability — regular third party inspection keeps suppliers focused on quality performance",
  "Dispute resolution — independent inspection reports provide objective evidence in quality disputes",
  "Cost savings — the cost of pre-shipment inspection is always lower than the cost of defective shipment returns",
  "Supply chain visibility — factory audits provide genuine insight into supplier capabilities and risks",
  "Export confidence — TPI reports build overseas buyer confidence in Indian manufactured goods",
  "Continuous improvement — regular inspection data drives supplier development and quality improvement",
];

export const FAQ_ITEMS = [
  {
    q: "What is AQL and how does it work in product inspection?",
    a: "AQL stands for Acceptable Quality Level — a statistical sampling standard used in product inspections to determine how many units from a batch should be inspected and how many defects are acceptable before the batch is rejected. AQL 2.5 is the most commonly used level for general consumer goods. AQL sampling plans are defined in ANSI/ASQ Z1.4 and ISO 2859, and our inspectors apply them consistently across all product inspections.",
  },
  {
    q: "How quickly can you mobilise an inspector?",
    a: "For standard pre-shipment and during-production inspections at factories within our coverage areas — including all major Indian manufacturing cities — we can typically deploy an inspector within 24 to 48 hours of booking confirmation. For urgent inspections, we offer same-day or next-day deployment in many locations.",
  },
  {
    q: "Can you inspect products against a specific buyer specification, not just a standard?",
    a: "Yes. Many clients provide their own product specifications, approved sample photographs, or specific inspection criteria — and we prepare the inspection checklist accordingly. Inspection against buyer-specific criteria is common for retail chain supplier inspections, branded product quality verification, and corporate supplier audits.",
  },
  {
    q: "Do you provide inspection services for BIS factory visits?",
    a: "Yes. One of our most requested services is BIS inspection support — helping manufacturers prepare for BIS CRS and ISI Mark factory inspections and providing on-site support during the BIS inspector's visit. Our team knows exactly what BIS inspectors look for. We have supported hundreds of BIS factory inspections across India.",
  },
  {
    q: "What happens if products fail the pre-shipment inspection?",
    a: "If products fail the pre-shipment inspection, we issue a failed inspection report with detailed findings and recommended corrective actions. The buyer can negotiate corrective action with the supplier, request 100% sorting, or reject the shipment. Once corrective action is completed, we can conduct a re-inspection to verify that issues have been resolved.",
  },
];
