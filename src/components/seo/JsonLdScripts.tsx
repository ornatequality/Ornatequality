"use client";

import { useEffect } from "react";
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
  const payload = JSON.stringify(schemas);

  useEffect(() => {
    const list = JSON.parse(payload) as object[];
    const added: HTMLScriptElement[] = [];

    list.forEach((schema, index) => {
      const id = schemaScriptId(schema, index);
      if (document.getElementById(id)) return;
      const el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      el.text = jsonLdScript(schema);
      document.head.appendChild(el);
      added.push(el);
    });

    return () => {
      added.forEach((el) => el.remove());
    };
  }, [payload]);

  return null;
}
