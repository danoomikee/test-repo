import {
    Sidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SidebarRail
} from "@workspace/ui/components/sidebar"
import TeamSwitcher from "@workspace/ui/layouts/sidebar-headers/team-switcher"
import NavMain from "@workspace/ui/layouts/sidebar-bodies/main-nav"
import NavProjects from "@workspace/ui/layouts/sidebar-bodies/nav-projects"
import NavUser from "@workspace/ui/layouts/sidebar-footers/nav-user"

// interface for the sidebar component
import { Sidebar07Props } from "@workspace/ui/types/layout-props"

export default function Sidebar07({  header, body, footer, ...props }: Sidebar07Props & React.ComponentProps<typeof Sidebar>) {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          {header && header.teams ? <TeamSwitcher teams={header.teams} /> : <div className="p-2">No Teams Data Provided</div>}
        </SidebarHeader>
        <SidebarContent>
          {body && body.navMain ? <NavMain {...body.navMain} /> : <div className="p-2">No Main Navigation Data Provided</div>}
          {body && body.navProjects ? <NavProjects {...body.navProjects} /> : <div className="p-2">No Main Projects Data Provided</div>}
        </SidebarContent>
        <SidebarFooter>
          {footer && footer.user ? <NavUser user={footer.user} /> :
            <div className="p-2">No User Data Provided</div>}
          {/* Maybe we can also do a secondary level default messaging for no footer info */}
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  }