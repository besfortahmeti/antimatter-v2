"use client";

import React from "react";
import { Runner } from "react-runner";
import * as ShadcnUI from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  mockElements,
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
} from "../../elements/data";

export default function PreviewPage({ params }: { params: { id: string } }) {
  // Use React.use to unwrap params in Next.js 15+ if needed, or just access directly in 14
  // Assuming Next.js 14 for now effectively.
  // For proper Next.js 15 async params, we'd need: const { id } = React.use(params);
  // Let's stick to safe synchronous access or simple conversion if possible, but safe bet is params.id.

  const elementId = parseInt(params.id);
  const element = mockElements.find((e) => e.id === elementId);

  if (!element) {
    return (
      <div className="flex items-center justify-center h-screen">
        Element not found
      </div>
    );
  }

  const code = element.code || "";

  return (
    <div className="w-full h-screen bg-background p-0 m-0">
      <Runner
        code={code}
        scope={{
          ...ShadcnUI,
          React,
          cn,
          FieldGroup,
          Field,
          FieldLabel,
          FieldDescription,
        }}
      />
    </div>
  );
}
