"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import * as React from "react";
import ElementItem from "./components/element-item";
import { ElementDetails } from "./components/element-details";

import { mockElements } from "./data";

export default function Page() {
  const [selectedItem, setSelectedItem] = React.useState<any>(null);
  const [open, setOpen] = React.useState(false);

  const handleCardClick = (item: any) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-8 p-4">
        {/* Components Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Popular</h2>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              View all <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="my-4 -ml-4">
              {mockElements.map((element) => (
                <CarouselItem
                  key={element.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/4"
                >
                  <ElementItem
                    element={element}
                    handleCardClick={handleCardClick}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>
      </div>
      <ElementDetails
        open={open}
        setOpen={setOpen}
        selectedItem={selectedItem}
      />
    </>
  );
}
