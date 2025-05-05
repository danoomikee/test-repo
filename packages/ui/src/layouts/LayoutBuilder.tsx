import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Separator } from "@workspace/ui/components/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"



// src/components/layout/LayoutBuilder.tsx
import React from 'react';
import { LayoutConfig, SidebarConfig, MainHeaderConfig } from '@workspace/ui/types/layout-config'; // Adjust path

// Import all your component variations
// Sidebar Headers
import BasicSidebarHeader from '@workspace/ui/layouts/sidebar-headers/basic-sidebar-header';
import TeamSwitcher from  '@workspace/ui/layouts/sidebar-headers/team-switcher';
import VersionSwitcher from  '@workspace/ui/layouts/sidebar-headers/version-switcher';

// Sidebar Bodies
import NavMain from '@workspace/ui/layouts/sidebar-bodies/main-nav';
import NavProjects from '@workspace/ui/layouts/sidebar-bodies/nav-projects';
import NavSecondary from '@workspace/ui/layouts/sidebar-bodies/nav-secondary';
import NavFavorites from '@workspace/ui/layouts/sidebar-bodies/nav-favorites';
import NavWorkspaces from '@workspace/ui/layouts/sidebar-bodies/nav-workspaces';

// Sidebar Footers
import NavUser from '@workspace/ui/layouts/sidebar-footers/nav-user';
import SidebarOptInForm from '@workspace/ui/layouts/sidebar-footers/sidebar-opt-in-form';

// Main Headers
import BasicMainHeader from '@workspace/ui/layouts/main-headers/basic-main-header';
import HeaderWithSearch from '@workspace/ui/layouts/main-headers/header-with-search';

// Sidebar Wrappers (Optional, if you have structural sidebar variants like DefaultSidebar)
import Sidebar07 from "@workspace/ui/layouts/sidebars/sidebar-07"
import Sidebar06 from "@workspace/ui/layouts/sidebars/sidebar-06"


// import DefaultSidebar from './variations/sidebars/DefaultSidebar';

interface LayoutBuilderProps {
  config: LayoutConfig;
  children: React.ReactNode; // For the main content area
}

// --- Component Mapping (Example - helps keep the render logic cleaner) ---
const sidebarHeaderMap = {
  basic: BasicSidebarHeader,
  teamSwitch: TeamSwitcher,
  versionSwitch: VersionSwitcher,
  // Add more header variants here...
};

const sidebarBodyMap = {
  mainNav: NavMain,
  secondaryNav: NavSecondary,
  favoritesNav: NavFavorites,
  projectsNav: NavProjects,
  workspacesNav: NavWorkspaces,

};

const sidebarFooterMap = {
    navUser: NavUser,
    navOptInForm: SidebarOptInForm,
}

const mainHeaderMap = {
    basic: BasicMainHeader,
    withSearch: HeaderWithSearch,
}

const sidebarWrapperMap = {
    "07": Sidebar07,
    "06": Sidebar06,
}

const LayoutBuilder: React.FC<LayoutBuilderProps> = ({ config, children }) => {

//   const renderSidebar = (sidebarConfig: SidebarConfig) => {
//     if (sidebarConfig.variant === 'none') {
//       return null;
//     }

//     // Dynamically select components based on config variants
//     // The type safety comes from the discriminated unions in LayoutConfig
//     const HeaderComponent = sidebarConfig.header.variant !== 'none'
//       ? sidebarHeaderMap[sidebarConfig.header.variant]
//       : null;
//     const BodyComponent = sidebarBodyMap[sidebarConfig.body.variant];
//     const FooterComponent = sidebarConfig.footer.variant !== 'none'
//       ? sidebarFooterMap[sidebarConfig.footer.variant]
//       : null;

//     // You might wrap this in a specific sidebar structure component (e.g., DefaultSidebar)
//     // based on `sidebarConfig.variant` ('default', 'compact')
//     return (
//         <div className="home">Working</div>
//     //   <aside className="w-64 border-r bg-background flex flex-col"> {/* Example basic sidebar structure */}
//     //     {HeaderComponent && 'data' in sidebarConfig.header && <HeaderComponent data={sidebarConfig.header.data as any} />}
//     //     {BodyComponent && <BodyComponent data={sidebarConfig.body.data as any} />}
//     //     {FooterComponent && 'data' in sidebarConfig.footer && <FooterComponent data={sidebarConfig.footer.data as any} />}
//     //   </aside>
//     );
//     // NOTE: The 'as any' casts above are sometimes necessary because TypeScript might struggle
//     //       to perfectly narrow down the union type within the dynamic rendering logic.
//     //       Ensure your config types and component props align to minimize risks.
//     //       Alternatively, use more explicit if/else or switch statements for full type safety without casts.
//   }

//    const renderMainHeader = (headerConfig: MainHeaderConfig) => {
//     if (headerConfig.variant === 'none') {
//         return null;
//     }
//     const HeaderComponent = mainHeaderMap[headerConfig.variant];
//     return <HeaderComponent data={headerConfig.data as any} />;
//    }


   const renderSidebarWrapper = (sidebarConfig: SidebarConfig) => {
    if (sidebarConfig.variant === 'none') { 
        return null;
        }
    const SidebarWrapperComponent = sidebarWrapperMap[sidebarConfig.variant];
    return <SidebarWrapperComponent {...sidebarConfig} />;


//   return (
//     <div className="flex h-screen"> {/* Example overall layout */}
//       {renderSidebar(config.sidebar)}
//       <main className="flex-1 flex flex-col">
//           {renderMainHeader(config.mainHeader)}
//           <div className="flex-1 overflow-y-auto p-6"> {/* Main content area */}
//              {children}
//           </div>
//       </main>
//     </div>
//   );
    }



   return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
   )


};

export default LayoutBuilder;