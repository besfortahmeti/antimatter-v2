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
import ElementItem from "./components/element-item";

export default function Page() {
  return (
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
            {/* Card 1: Timeline */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/4">
              <ElementItem handleCardClick={() => {}} />
            </CarouselItem>

            {/* Card 2: Sidebar */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/4">
              <ElementItem handleCardClick={() => {}} />
            </CarouselItem>

            {/* Card 3: Container Scroll */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/4">
              <ElementItem handleCardClick={() => {}} />
            </CarouselItem>

            {/* Card 4: Expandable Tabs */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/4">
              <ElementItem handleCardClick={() => {}} />
            </CarouselItem>

            {/* Card 5: Container Scroll */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/4">
              <ElementItem handleCardClick={() => {}} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>
    </div>
  );
}
