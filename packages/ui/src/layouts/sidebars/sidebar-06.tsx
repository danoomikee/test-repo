// import {
//     Sidebar,
//     SidebarHeader,
//     SidebarFooter,
//     SidebarContent,
//     SidebarRail
// } from "@workspace/ui/components/sidebar"
// import NavMain from "@workspace/ui/layouts/sidebar-bodies/main-nav"


// // interface for the sidebar component
// import { Sidebar06Props } from "@workspace/ui/types/layout-props"
// import BasicSidebarHeader from "@workspace/ui/layouts/sidebar-headers/basic-sidebar-header.js"
// import SidebarOptInForm from "@workspace/ui/layouts/sidebar-footers/sidebar-opt-in-form.js"

// export default function Sidebar06({ header, body, ...props }: Sidebar06Props & React.ComponentProps<typeof Sidebar>) {
//     return (
//         <Sidebar {...props}>
//         <SidebarHeader>
//           {header ? <BasicSidebarHeader {...header} /> : <div className="p-2">No Header Provided</div>}
//           {/* Maybe we can also do a secondary level default messaging for no header info */}
//         </SidebarHeader>
//         <SidebarContent>
//           {body && body.navMain ? <NavMain {...body.navMain} /> : <div className="p-2">No Main Navigation Data Provided</div>}
//         </SidebarContent>
//         <SidebarFooter>
//           <div className="p-1">
//             <SidebarOptInForm />
//           </div>
//         </SidebarFooter>
//         <SidebarRail />
//       </Sidebar>
//     )
//   }