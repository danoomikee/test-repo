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
import { Sidebar07Props } from "@workspace/ui/types/layout-data"





export default function Sidebar07({  header, body, footer, ...props }: Sidebar07Props & React.ComponentProps<typeof Sidebar>) {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={header.teams} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={body.navMain} />
          <NavProjects projects={body.projects} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={footer.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  }