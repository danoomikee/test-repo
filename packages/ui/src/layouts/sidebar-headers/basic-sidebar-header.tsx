
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from "@workspace/ui/components/sidebar"

import {BasicHeaderProps} from "@workspace/ui/types/layout-data"

export default function BasicSidebarHeader({ header }: BasicHeaderProps) {
  return (
    <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" asChild>
        <a href="#">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <header.Logo className="size-4" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">{header.title}</span>
            <span className="">{header.version}</span>
          </div>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
  )
}
