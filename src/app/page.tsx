"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  CirclePlay,
  Layout,
  Sparkles,
  Home,
  Moon,
  RefreshCcw,
  Link,
  Bookmark,
  Share,
  Copy,
  ExternalLink,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Page() {
  const [selectedItem, setSelectedItem] = React.useState<any>(null);
  const [open, setOpen] = React.useState(false);

  const handleCardClick = (item: any) => {
    setSelectedItem(item);
    setOpen(true);
  };

  // Mock data for the specific Timeline example
  const timelineDetails = {
    title: "Timeline",
    subtitle: "Aceternity UI",
    icon: "A", // Just using the letter for now
    url: "https://ui.aceternity.com/components/timeline",
    content: (
      <div className="flex flex-col items-center justify-center py-10 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-medium mb-4">Changelog from my journey</h2>
        <p className="text-muted-foreground text-lg max-w-lg mb-12">
          I've been working on Aceternity for the past 2 years. Here's a
          timeline of my journey.
        </p>

        <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-4xl text-left">
          <div className="flex gap-4 md:w-1/4">
            <div className="mt-1 h-4 w-4 rounded-full bg-gray-200 shrink-0" />
            <span className="text-4xl font-bold text-gray-400">2024</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4">
              Built and launched Aceternity UI and Aceternity UI Pro from
              scratch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border shadow-sm aspect-video flex flex-col items-center justify-center">
                <span className="font-bold text-xl mb-2">
                  Deploy your website in seconds,{" "}
                  <span className="text-orange-500">not hours.</span>
                </span>
                <div className="flex gap-2 mt-4">
                  <div className="h-2 w-12 bg-black rounded-full"></div>
                  <div className="h-2 w-12 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border shadow-sm aspect-video">
                <div className="text-xs font-semibold mb-2">
                  Deployments made easy
                </div>
                <div className="grid grid-cols-2 gap-2 h-full">
                  <div className="bg-white rounded h-16 w-full shadow-sm"></div>
                  <div className="bg-white rounded h-16 w-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Components Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Components</h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {/* Card 1 */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
              <div
                onClick={() => handleCardClick(timelineDetails)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden border-none shadow-none bg-transparent hover:opacity-90 transition-opacity">
                  <div className="bg-white p-6 rounded-2xl h-[300px] flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div className="text-left">
                        <div className="text-xs font-medium">samuel (sam)</div>
                        <div className="text-[10px] text-muted-foreground">
                          Claude Style Chat Input · Default
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 w-full max-w-[80%]">
                      <div className="text-2xl font-serif text-orange-400 mb-4">
                        Good morning, Saify
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 shadow-inner">
                        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                        <div className="flex gap-2 mt-4">
                          <span className="text-xs border rounded px-1">
                            Write
                          </span>
                          <span className="text-xs border rounded px-1">
                            Search
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>

            {/* Card 2 */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
              <div
                onClick={() => handleCardClick(timelineDetails)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden border-none shadow-none bg-transparent hover:opacity-90 transition-opacity">
                  <div className="bg-black p-6 rounded-2xl h-[300px] flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden text-white">
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                      <div className="text-left">
                        <div className="text-xs font-medium">asman (space)</div>
                        <div className="text-[10px] text-muted-foreground">
                          ASMR background · Default
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-black to-black opacity-80 flex items-center justify-center">
                      <span className="text-xs tracking-widest uppercase text-gray-400">
                        Atmospheric Deep Flow
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
            {/* Card 3 */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
              <div
                onClick={() => handleCardClick(timelineDetails)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden border-none shadow-none bg-transparent hover:opacity-90 transition-opacity">
                  <div className="bg-white p-6 rounded-2xl h-[300px] flex flex-col relative overflow-hidden shadow-sm">
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div className="text-left">
                        <div className="text-xs font-medium">John Hanke</div>
                        <div className="text-[10px] text-muted-foreground">
                          Design Testimonial · Default
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-3xl font-light tracking-tight">
                        Transformed our entire creative process overnight.
                      </h3>
                    </div>
                    <div className="flex gap-4 text-gray-300 font-bold text-xl mt-4 opacity-30">
                      <span>Stripe</span> <span>Linear</span>{" "}
                      <span>Vercel</span>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Popular Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Popular</h2>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View all <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Pop Card 1 */}
          <div
            onClick={() => handleCardClick(timelineDetails)}
            className="cursor-pointer bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <div className="text-sm font-medium">Aceternity UI</div>
                <div className="text-xs text-muted-foreground">
                  Timeline · Default
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg h-40 flex items-center justify-center relative overflow-hidden">
              {/* Mock UI */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 flex flex-col gap-8 py-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 -ml-[3px]"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 -ml-[3px]"></div>
              </div>
              <div className="ml-8 text-xs text-gray-500">
                <div>Early 2023</div>
                <div className="mt-8 font-bold text-black">Changelog</div>
              </div>
            </div>
          </div>

          {/* Pop Card 2 */}
          <div
            onClick={() => handleCardClick(timelineDetails)}
            className="cursor-pointer bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <div className="text-sm font-medium">Aceternity UI</div>
                <div className="text-xs text-muted-foreground">
                  Sidebar · Default
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg h-40 p-2 flex gap-2">
              <div className="w-1/4 h-full bg-white rounded shadow-sm flex flex-col gap-1 p-1">
                <div className="h-2 w-2 rounded-full bg-black mb-1"></div>
                <div className="h-1 w-full bg-gray-100 rounded"></div>
                <div className="h-1 w-2/3 bg-gray-100 rounded"></div>
              </div>
              <div className="flex-1 h-full bg-white rounded shadow-sm"></div>
            </div>
          </div>

          {/* Pop Card 3 */}
          <div
            onClick={() => handleCardClick(timelineDetails)}
            className="cursor-pointer bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <div className="text-sm font-medium">Aceternity UI</div>
                <div className="text-xs text-muted-foreground">
                  Container Scroll Animation · Default
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg h-40 flex flex-col items-center justify-center text-center p-2">
              <div className="text-lg font-bold leading-none mb-1">
                Unleash the power of <br /> Scroll Animations
              </div>
              <div className="w-3/4 h-16 bg-black rounded-t-lg mt-2 shadow-2xl skew-x-12 transform scale-90"></div>
            </div>
          </div>

          {/* Pop Card 4 */}
          <div
            onClick={() => handleCardClick(timelineDetails)}
            className="cursor-pointer bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center"></div>
              <div>
                <div className="text-sm font-medium">Victor Welander</div>
                <div className="text-xs text-muted-foreground">
                  Expandable Tabs
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg h-40 flex items-center justify-center">
              <div className="bg-white rounded-full px-4 py-2 shadow-sm flex gap-4 text-xs text-gray-500">
                <Home className="h-4 w-4" />
                <Layout className="h-4 w-4" />
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shaders Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Shaders</h2>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View all <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        {/* Just placeholders for shaders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="h-24 bg-black rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50"></div>
            <div className="absolute bottom-2 left-2 flex items-center gap-2 z-10 text-white">
              <div className="w-6 h-6 rounded-full bg-black"></div>
              <div className="text-xs">
                Ali Imam <br />{" "}
                <span className="text-[10px] opacity-70">Shader Animation</span>
              </div>
            </div>
          </div>
          <div className="h-24 bg-black rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-slate-900"></div>
            <div className="absolute bottom-2 left-2 flex items-center gap-2 z-10 text-white">
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              <div className="text-xs">
                Le Thanh <br />{" "}
                <span className="text-[10px] opacity-70">Animated Shader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
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
                onClick={() => window.open(selectedItem?.url || "#", "_blank")}
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
            {selectedItem?.content}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
