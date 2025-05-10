import {
 AppWindow
} from "lucide-react"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from "@workspace/ui/components/sidebar"

import {BasicSidebarHeaderProps} from "@workspace/ui/types/layout-props"

export default function BasicSidebarHeader({ title, Logo, version }: BasicSidebarHeaderProps) {
  return (
    <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" asChild>
        <a href="#">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            {Logo ? <Logo className="size-4" /> : <AppWindow />}
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">{title ? title : "Window EIP"}</span>
            <span className="">{version ? version : "Version EIP"}</span>
          </div>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
  )
}
