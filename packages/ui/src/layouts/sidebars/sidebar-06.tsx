import {
    Sidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SidebarRail
} from "@workspace/ui/components/sidebar"
import NavMain from "@workspace/ui/layouts/sidebar-bodies/main-nav"
import { BasicHeaderType, NavMainItem } from "@workspace/ui/types/layout-data.js"
import BasicHeader from "@workspace/ui/layouts/sidebar-headers/basic-sidebar-header.js"
import SidebarOptInForm from "@workspace/ui/layouts/sidebar-footers/sidebar-opt-in-form"

// interface for the sidebar component
import { Sidebar06Props } from "@workspace/ui/types/layout-data"

export default function Sidebar06({ header, body, ...props }: Sidebar06Props & React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
        <SidebarHeader>
          <BasicHeader header={header.header} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={body.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <div className="p-1">
            <SidebarOptInForm />
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  }