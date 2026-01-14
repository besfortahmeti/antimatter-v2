import { Button } from "@/components/ui";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Bookmark,
  Copy,
  ExternalLink,
  Link,
  Monitor,
  Moon,
  RefreshCcw,
  RotateCw,
  Share,
  Smartphone,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

import { Runner } from "react-runner";
import * as ShadcnUI from "@/components/ui";
import { cn } from "@/lib/utils";
import * as React from "react";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import {
  Pre,
  Code,
  Table,
  Anchor,
  Details,
  Summary,
  Image,
  Steps,
  Callout,
  Cards,
  Tabs,
  FileTree,
  Bleed,
} from "nextra/components";

import "nextra-theme-docs/style.css";

import { FieldGroup, Field, FieldLabel, FieldDescription } from "../data";

interface ElementDetailsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedItem: any;
}

const mdxExample = `


<Tabs items={['pnpm', 'npm', 'yarn']}>
  <Tabs.Tab>**pnpm**: Fast, disk space efficient package manager.</Tabs.Tab>
  <Tabs.Tab>**npm** is a package manager for the JavaScript programming language.</Tabs.Tab>
  <Tabs.Tab>**Yarn** is a software packaging system.</Tabs.Tab>
</Tabs>

<Callout>Helpful advice for doing things better or more easily.</Callout>

<FileTree>
  <FileTree.Folder name="content" defaultOpen>
    <FileTree.File name="_meta.js" />
    <FileTree.File name="contact.md" />
    <FileTree.File name="index.mdx" />
    <FileTree.Folder name="about">
      <FileTree.File name="_meta.js" />
      <FileTree.File name="legal.md" />
      <FileTree.File name="index.mdx" />
    </FileTree.Folder>
  </FileTree.Folder>
</FileTree>

 <Table>
  <thead>
    <Table.Tr>
      <Table.Th>Country</Table.Th>
      <Table.Th>Flag</Table.Th>
    </Table.Tr>
  </thead>
  <tbody>
    <Table.Tr>
      <Table.Td>France</Table.Td>
      <Table.Td>🇫🇷</Table.Td>
    </Table.Tr>
    <Table.Tr>
      <Table.Td>Ukraine</Table.Td>
      <Table.Td>🇺🇦</Table.Td>
    </Table.Tr>
  </tbody>
</Table>
## Getting Started
 
Here is some description.
 
<Steps>
### Step 1
 
Contents for step 1.
 
### Step 2
 
Contents for step 2.
</Steps>
`;

export const ElementDetails = ({
  open,
  setOpen,
  selectedItem,
}: ElementDetailsProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-6xl p-0 overflow-hidden bg-white gap-0 [&>button]:hidden">
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
          <div className="p-4">
            <MdxRunner code={mdxExample} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const mdxComponents = {
  pre: Pre,
  code: Code,
  table: Table,
  Table: Table,
  a: Anchor,
  details: Details,
  summary: Summary,
  img: Image,
  Steps,
  Callout,
  Cards,
  Tabs,
  FileTree,
  Bleed,
  h1: (props: any) => (
    <h1
      className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="mt-10 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="mt-8 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="mt-8 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props: any) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
  ),
  ul: (props: any) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
  ),
};

function MdxRunner({ code }: { code: string }) {
  const [Component, setComponent] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!code) return;

    const run = async () => {
      try {
        const { default: Content } = await evaluate(code, {
          ...runtime,
          baseUrl: window.location.href,
        } as any);
        setComponent(() => Content);
        setError(null);
      } catch (err: any) {
        console.error("MDX Evaluation Error:", err);
        setError(err.message);
      }
    };
    run();
  }, [code]);

  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (!Component)
    return <div className="p-4 text-muted-foreground">Loading MDX...</div>;

  return (
    <div className="nx-prose dark:nx-prose-invert w-full max-w-none">
      <Component components={mdxComponents} />
    </div>
  );
}
