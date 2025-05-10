"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarRail,
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar"



// src/components/layout/LayoutBuilder.tsx
import { LayoutBuilderProps } from '@workspace/ui/types/layout-config'; // Adjust path

// Import all your component variations
// Sidebar Headers
import BasicSidebarHeader from '@workspace/ui/layouts/sidebar-headers/basic-sidebar-header';
import TeamSwitcher from '@workspace/ui/layouts/sidebar-headers/team-switcher';
import VersionSwitcher from '@workspace/ui/layouts/sidebar-headers/version-switcher';

// Sidebar Bodies
import NavMain from '@workspace/ui/layouts/sidebar-bodies/main-nav';
import NavProjects from '@workspace/ui/layouts/sidebar-bodies/nav-projects';
import NavSecondary from '@workspace/ui/layouts/sidebar-bodies/nav-secondary';
import NavFavorites from '@workspace/ui/layouts/sidebar-bodies/nav-favorites';
import NavWorkspaces from '@workspace/ui/layouts/sidebar-bodies/nav-workspaces';

// Sidebar Footers
import NavUser from '@workspace/ui/layouts/sidebar-footers/nav-user';
import SidebarOptInForm, { SidebarOptInFormPadded } from '@workspace/ui/layouts/sidebar-footers/sidebar-opt-in-form';

// Main Headers
import BasicMainHeader from '@workspace/ui/layouts/main-headers/basic-main-header';
import HeaderWithSearch from '@workspace/ui/layouts/main-headers/header-with-search';

// Sidebar Wrappers (Optional, if you have structural sidebar variants like DefaultSidebar)
import Sidebar07 from "@workspace/ui/layouts/sidebars/sidebar-07"
import Sidebar06 from "@workspace/ui/layouts/sidebars/sidebar-06"



// --- Component Mapping (Example - helps keep the render logic cleaner) ---

const componentRegistry = {
  sidebarHeader: {
    basic: BasicSidebarHeader,
    teamSwitch: TeamSwitcher,
    versionSwitch: VersionSwitcher,
    // Add more header variants here...
  },
  sidebarBody: {
    mainNav: NavMain,
    secondaryNav: NavSecondary,
    favoritesNav: NavFavorites,
    projectsNav: NavProjects,
    workspacesNav: NavWorkspaces,

  },
  sidebarFooter: {
    navUser: NavUser,
    // navOptInForm: SidebarOptInForm,
    navOptInForm: SidebarOptInFormPadded,
  },
  mainHeader: {
    basic: BasicMainHeader,
    withSearch: HeaderWithSearch,
  },
  // sidebarWrapper: {
  //   "07": Sidebar07,
  //   "06": Sidebar06,
  // },
}

// import DefaultSidebar from './variations/sidebars/DefaultSidebar';



export function AppShell({ config, children, ...props }: LayoutBuilderProps & React.ComponentProps<typeof Sidebar>) {

  const HeaderComponent = config.header ? componentRegistry.mainHeader[config.header.variant as keyof typeof componentRegistry.mainHeader] : null;
  const SideBarHeaderComponent = config.sidebar?.sidebarHeader ? componentRegistry.sidebarHeader[config.sidebar.sidebarHeader.variant as keyof typeof componentRegistry.sidebarHeader] : null;
  const SideBarBodyComponents = config.sidebar?.sidebarBody?.map((bodyConfig) => 
    componentRegistry.sidebarBody[bodyConfig.variant as keyof typeof componentRegistry.sidebarBody]
  ) || [];

  const SideBarFooterComponent = config.sidebar?.sidebarFooter ? componentRegistry.sidebarFooter[config.sidebar.sidebarFooter.variant as keyof typeof componentRegistry.sidebarFooter] : null;

  // const SidebarComponent = config.sidebar && componentRegistry.sidebarWrapper[config.sidebar.variant as keyof typeof componentRegistry.sidebarWrapper] || Sidebar07;
  return (
    <SidebarProvider>
      {/* <SidebarComponent {...config.sidebar?.props} /> */}
      <Sidebar {...props}>
        <SidebarHeader>
          {SideBarHeaderComponent ? <SideBarHeaderComponent {...config.sidebar?.sidebarHeader?.props} /> : <div className="p-2">No Header Provided</div>}
          {/* Maybe we can also do a secondary level default messaging for no header info */}
        </SidebarHeader>
        <SidebarContent>
          {/* Render All Body components for the Sidebar */}
            {SideBarBodyComponents.length > 0 ? (
            SideBarBodyComponents.map((SideBarBodyComponent, index) => (
              <SideBarBodyComponent key={index} {...config.sidebar?.sidebarBody?.[index]?.props} />
            ))
            ) : (
            <div className="p-2">No Link Navigation Data Provided</div>
            )}
        </SidebarContent>
        <SidebarFooter>
          {SideBarFooterComponent ? <SideBarFooterComponent {...config.sidebar?.sidebarFooter?.props} /> : <div className="p-2">No Footer Provided</div>}
          {/* Maybe we can also do a secondary level default messaging for no footer info */}
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        {HeaderComponent ? <HeaderComponent {...config.header?.props} /> : <div className="p-2">No Header Provided</div>}
        {children}
      </SidebarInset>
    </SidebarProvider>
  )


};