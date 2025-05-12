import {
 AppWindow
} from "lucide-react"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from "@workspace/ui/components/sidebar"

import { BasicSidebarHeaderProps } from "@workspace/ui/types/layout-props"
import Icon from "@workspace/ui/utils/icon-render.js"

export default function BasicSidebarHeader({ data }: BasicSidebarHeaderProps) {
  return (
    <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" asChild>
        <a href="#">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            {data?.logo ? <Icon name={data.logo} className="size-4" /> : <AppWindow />}
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">{data?.title ? data.title : "Window EIP"}</span>
            <span className="">{data?.version ? data.version : "Version EIP"}</span>
          </div>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
  )
}
