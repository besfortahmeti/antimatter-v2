"use client";

import { Monitor, Package, Search } from "lucide-react";
import * as React from "react";

import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useCategories } from "../services/query";
import { ScrollArea } from "./ui/scroll-area";

const data = {
  top: [
    {
      title: "Apps",
      url: "/applications",
      icon: Package,
    },
    {
      title: "Canvas Prototyping",
      url: "#",
      icon: Monitor,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: categories } = useCategories();
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">21st</span>
          <Search className="ml-auto size-4 opacity-50" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.top.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link href={item.url || "#"}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <div className="px-2">
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">
              Categories
            </h3>
            <ScrollArea className="h-[670px] pr-4">
              <div className="flex flex-col gap-3 ml-2">
                {categories?.items?.map((item: any) => (
                  <Link
                    key={item.id}
                    href={`/categories/${item.id}`}
                    className="flex items-center gap-2"
                  >
                    {/* category icon from lucide-react */}
                    <Package className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{item.name}</span>
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
