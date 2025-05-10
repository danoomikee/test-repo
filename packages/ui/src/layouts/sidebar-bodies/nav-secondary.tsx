import * as React from "react"
import { Sidebar, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

// interfaces for the secondary navigation component
import { NavSecondaryProps } from "@workspace/ui/types/layout-props.js"


export default function NavSecondary({
  items,
  ...props
}: NavSecondaryProps & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items ? items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )) : <SidebarMenuItem>No Secondary Items</SidebarMenuItem>}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
