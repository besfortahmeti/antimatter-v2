import { Button } from "@/components/ui";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Bookmark,
  Copy,
  ExternalLink,
  Link,
  Moon,
  RefreshCcw,
  Share,
  X,
} from "lucide-react";
import { Runner } from "react-runner";
import * as ShadcnUI from "@/components/ui";
import { cn } from "@/lib/utils";
import * as React from "react";

import { FieldGroup, Field, FieldLabel, FieldDescription } from "../data";

interface ElementDetailsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedItem: any;
}

export const ElementDetails = ({
  open,
  setOpen,
  selectedItem,
}: ElementDetailsProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white gap-0 [&>button]:hidden">
        {/* Header / Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
              {selectedItem?.icon || "A"}
            </div>
            <div>
              <div className="text-sm font-semibold">
                {selectedItem?.title || "Timeline"}
              </div>
              <div className="text-xs text-muted-foreground">
                {selectedItem?.subtitle || "Aceternity UI"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground"
            >
              <Moon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground"
            >
              <RefreshCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground"
            >
              <Link className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground"
            >
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground"
            >
              <Share className="h-4 w-4" />
            </Button>
            <div className="h-4 w-px bg-border mx-1"></div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs font-medium"
              onClick={() =>
                window.open(`/preview/${selectedItem?.id || 1}`, "_blank")
              }
            >
              Open <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
            <Button
              size="sm"
              className="h-8 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white gap-1 rounded-full px-4"
            >
              <Copy className="h-3 w-3" /> COPY PROMPT
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-0 overflow-y-auto max-h-[80vh]">
          <Runner
            code={selectedItem?.code || ""}
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
      </DialogContent>
    </Dialog>
  );
};
