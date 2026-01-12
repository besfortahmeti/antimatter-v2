"use client";

import { Runner } from "react-runner";
import * as ShadcnUI from "@/components/ui";
import { Edit, Trash } from "lucide-react";

export const CategoryItem = ({
  name,
  icon,
  onEdit,
  onDelete,
}: {
  name?: string | null;
  icon?: string | null;
  onEdit?: () => void;
  onDelete?: () => void;
}) => (
  <div className="group relative h-[400px] w-full overflow-hidden rounded-[2rem] bg-gray-100 shadow-sm transition-all hover:shadow-md">
    <div className="flex h-full w-full items-center justify-center p-8 text-slate-400 [&>svg]:h-auto [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:max-w-full">
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

    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
      <div className="mb-4">
        <h3 className="flex items-center gap-2 text-2xl font-bold">
          {name}
          <span className="rounded-full bg-white/20 p-1">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </span>
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-1">
            <span className="opacity-70">Items</span>
            <span>24</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="opacity-70">Views</span>
            <span>1.2k</span>
          </div>
        </div>

        <div className="flex gap-2">
          <ShadcnUI.Button
            className="h-10 rounded-full bg-white px-6 text-black hover:bg-white/90"
            onClick={(e) => {
              e.preventDefault();
              onEdit?.();
            }}
          >
            Edit <Edit className="ml-2 h-4 w-4" />
          </ShadcnUI.Button>
          <ShadcnUI.Button
            size="icon"
            variant="ghost"
            className="h-10 w-10 text-white hover:bg-white/20 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              onDelete?.();
            }}
          >
            <Trash className="h-5 w-5" />
          </ShadcnUI.Button>
        </div>
      </div>
    </div>
  </div>
);
