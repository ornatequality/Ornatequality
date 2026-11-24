import Script from "next/script";
import {
  jsonLdScript,
  organizationSchema,
  professionalServiceSchema,
  webSiteSchema,
} from "@/lib/seo/schemas";

type JsonLdScriptsProps = {
  extra?: object[];
};

function schemaScriptId(schema: object, index: number) {
  const type = "@type" in schema ? String(schema["@type"]) : "schema";
  const id = "@id" in schema ? String(schema["@id"]) : String(index);
  return `jsonld-${type}-${index}-${id}`.replace(/[^a-zA-Z0-9_-]/g, "");
}

export function JsonLdScripts({ extra = [] }: JsonLdScriptsProps) {
  const schemas = [organizationSchema, professionalServiceSchema, webSiteSchema, ...extra];

  return <JsonLdList schemas={schemas} />;
}

export function JsonLdList({ schemas }: { schemas: object[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={schemaScriptId(schema, index)}
          id={schemaScriptId(schema, index)}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }}
        />
      ))}
    </>
  );
}
