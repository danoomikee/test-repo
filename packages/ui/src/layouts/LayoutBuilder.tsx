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
import componentRegistry from "../utils/component-registery.js";
import { LayoutBuilderProps } from "../types/layout-config.js";


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