"use client";

import * as ShadcnUI from "@/components/ui";
import { Runner } from "react-runner";

import { cn } from "@/lib/utils";

export const CategoryItem = ({
  name,
  icon,
  className,
}: {
  name?: string | null;
  icon?: string | null;
  className?: string;
}) => (
  <div
    className={cn(
      "group relative h-[100px] w-full overflow-hidden border border-gray-200 rounded-[2rem] bg-gray-100 shadow-sm transition-all hover:shadow-md",
      className
    )}
  >
    <div className="flex h-full w-full items-center justify-center p-4 text-slate-400 [&>svg]:h-auto [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:max-w-full">
      <Runner
        code={(() => {
          const code = icon || "";
          return code
            .replace(/class=/g, "className=")
            .replace(/stroke-width=/g, "strokeWidth=")
            .replace(/stroke-linecap=/g, "strokeLinecap=")
            .replace(/stroke-linejoin=/g, "strokeLinejoin=")
            .replace(/stroke-dasharray=/g, "strokeDasharray=")
            .replace(/stroke-opacity=/g, "strokeOpacity=")
            .replace(/fill-opacity=/g, "fillOpacity=")
            .replace(/fill-rule=/g, "fillRule=")
            .replace(/clip-path=/g, "clipPath=")
            .replace(/clip-rule=/g, "clipRule=")
            .replace(/stop-color=/g, "stopColor=")
            .replace(/stop-opacity=/g, "stopOpacity=")
            .replace(/view[Bb]ox=/g, "viewBox=")
            .replace(/gradient[Uu]nits=/g, "gradientUnits=");
        })()}
        scope={{ ...ShadcnUI }}
      />
    </div>

    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-800 text-sm font-medium">
          {name}
        </div>
      </div>
    </div>
  </div>
);
