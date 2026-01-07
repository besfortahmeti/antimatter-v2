"use client"

import { ChartAreaInteractive } from "./components/chart-area-interactive";
import data from "./components/data.json";
import { DataTable } from "./components/data-table";
import { SectionCards } from "./components/section-cards";

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <SectionCards />
      <ChartAreaInteractive />
      <DataTable data={data} />
    </div>
  );
}
