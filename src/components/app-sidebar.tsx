"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Search,
  Sparkles,
  Monitor,
  Home,
  LayoutTemplate,
  Megaphone,
  Image,
  Square,
  MousePointerClick,
  Users,
  ArrowLeftRight,
  PanelBottom,
  List,
  Star,
  Webhook,
  Wand2,
  MessageSquare,
  Package,
} from "lucide-react";

import Link from "next/link";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
} from "@/components/ui/sidebar";

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
  components: [
    {
      title: "Main",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Feed",
      url: "#",
      icon: Sparkles, // Or Rss
      badge: "Beta",
      badgeClassName:
        "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "Best of the Week",
      url: "#",
      icon: Star, // Trophy not in import, using Star or Sparkles
      badge: "Back!",
      badgeClassName:
        "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      title: "Marketing Blocks",
      url: "#",
      icon: LayoutTemplate,
    },
    {
      title: "Announcements",
      url: "#",
      icon: Megaphone,
      badge: 10,
    },
    {
      title: "Beckgrounds",
      url: "#",
      icon: Image,
      badge: 33,
    },
    {
      title: "Borders",
      url: "#",
      icon: Square,
      badge: 12,
    },
    {
      title: "Calls to Action",
      url: "#",
      icon: MousePointerClick,
      badge: 34,
    },
    {
      title: "Clients",
      url: "#",
      icon: Users,
      badge: 16,
    },
    {
      title: "Comparisons",
      url: "#",
      icon: ArrowLeftRight,
      badge: 6,
    },
    {
      title: "Docks",
      url: "#",
      icon: PanelBottom,
      badge: 6,
    },
    {
      title: "Features",
      url: "#",
      icon: List,
      badge: 36,
    },
    {
      title: "Footers",
      url: "#",
      icon: PanelBottom,
      badge: 14,
    },
    {
      title: "Heroes",
      url: "#",
      icon: Star,
      badge: 73,
    },
    {
      title: "Hooks",
      url: "#",
      icon: Webhook,
      badge: 31,
    },
  ],
  legacy: [
    {
      title: "Magic MCP",
      url: "#",
      icon: Wand2,
    },
    {
      title: "Magic Chat",
      url: "#",
      icon: MessageSquare,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <NavMain items={data.components} label="Components" />
        <NavMain items={data.legacy} label="Legacy tools" />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <span>Log in</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
