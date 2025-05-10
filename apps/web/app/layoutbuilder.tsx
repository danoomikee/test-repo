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

}

import {BasicSidebarHeaderProps, HeaderBreadcrumbsProps, MainNavItemProps, NavFavoritesProps, NavProjectsProps, NavSecondaryProps, NavWorkspacesProps, Sidebar06Props, Sidebar07Props, TeamSwitcherProps } from "@workspace/ui/types/layout-props"
import { SystemConfig } from "@workspace/ui/types/layout-config"
import { AudioWaveform, Command, Frame, GalleryVerticalEnd, PieChart,Map, Calendar, Settings2, Blocks, Trash2, MessageCircleQuestion  } from "lucide-react"

// This is sample data.
const navMain: MainNavItemProps =  {
  items: [
      {
        title: "Getting Started",
        url: "#",
        items: [
          {
            title: "Installation",
            url: "#",
          },
          {
            title: "Project Structure",
            url: "#",
          },
        ],
      },
      {
        title: "Building Your Application",
        url: "#",
        items: [
          {
            title: "Routing",
            url: "#",
          },
          {
            title: "Data Fetching",
            url: "#",
            isActive: true,
          },
          {
            title: "Rendering",
            url: "#",
          },
          {
            title: "Caching",
            url: "#",
          },
          {
            title: "Styling",
            url: "#",
          },
          {
            title: "Optimizing",
            url: "#",
          },
          {
            title: "Configuring",
            url: "#",
          },
          {
            title: "Testing",
            url: "#",
          },
          {
            title: "Authentication",
            url: "#",
          },
          {
            title: "Deploying",
            url: "#",
          },
          {
            title: "Upgrading",
            url: "#",
          },
          {
            title: "Examples",
            url: "#",
          },
        ],
      },
      {
        title: "API Reference",
        url: "#",
        items: [
          {
            title: "Components",
            url: "#",
          },
          {
            title: "File Conventions",
            url: "#",
          },
          {
            title: "Functions",
            url: "#",
          },
          {
            title: "next.config.js Options",
            url: "#",
          },
          {
            title: "CLI",
            url: "#",
          },
          {
            title: "Edge Runtime",
            url: "#",
          },
        ],
      },
      {
        title: "Architecture",
        url: "#",
        items: [
          {
            title: "Accessibility",
            url: "#",
          },
          {
            title: "Fast Refresh",
            url: "#",
          },
          {
            title: "Next.js Compiler",
            url: "#",
          },
          {
            title: "Supported Browsers",
            url: "#",
          },
          {
            title: "Turbopack",
            url: "#",
          },
        ],
      },
    ]
}

const navSecondary: NavSecondaryProps= {
  items: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
]
}

const navFavorites: NavFavoritesProps = {
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      emoji: "💪",
    },
    {
      name: "Book Notes & Reading List",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Sustainable Gardening Tips & Plant Care",
      url: "#",
      emoji: "🌱",
    },
    {
      name: "Language Learning Progress & Resources",
      url: "#",
      emoji: "🗣️",
    },
    {
      name: "Home Renovation Ideas & Budget Tracker",
      url: "#",
      emoji: "🏠",
    },
    {
      name: "Personal Finance & Investment Portfolio",
      url: "#",
      emoji: "💰",
    },
    {
      name: "Movie & TV Show Watchlist with Reviews",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
  ],
}

const workspaces: NavWorkspacesProps = {
  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          emoji: "📔",
        },
        {
          name: "Health & Wellness Tracker",
          url: "#",
          emoji: "🍏",
        },
        {
          name: "Personal Growth & Learning Goals",
          url: "#",
          emoji: "🌟",
        },
      ],
    },
    {
      name: "Professional Development",
      emoji: "💼",
      pages: [
        {
          name: "Career Objectives & Milestones",
          url: "#",
          emoji: "🎯",
        },
        {
          name: "Skill Acquisition & Training Log",
          url: "#",
          emoji: "🧠",
        },
        {
          name: "Networking Contacts & Events",
          url: "#",
          emoji: "🤝",
        },
      ],
    },
    {
      name: "Creative Projects",
      emoji: "🎨",
      pages: [
        {
          name: "Writing Ideas & Story Outlines",
          url: "#",
          emoji: "✍️",
        },
        {
          name: "Art & Design Portfolio",
          url: "#",
          emoji: "🖼️",
        },
        {
          name: "Music Composition & Practice Log",
          url: "#",
          emoji: "🎵",
        },
      ],
    },
    {
      name: "Home Management",
      emoji: "🏡",
      pages: [
        {
          name: "Household Budget & Expense Tracking",
          url: "#",
          emoji: "💰",
        },
        {
          name: "Home Maintenance Schedule & Tasks",
          url: "#",
          emoji: "🔧",
        },
        {
          name: "Family Calendar & Event Planning",
          url: "#",
          emoji: "📅",
        },
      ],
    },
    {
      name: "Travel & Adventure",
      emoji: "🧳",
      pages: [
        {
          name: "Trip Planning & Itineraries",
          url: "#",
          emoji: "🗺️",
        },
        {
          name: "Travel Bucket List & Inspiration",
          url: "#",
          emoji: "🌎",
        },
        {
          name: "Travel Journal & Photo Gallery",
          url: "#",
          emoji: "📸",
        },
      ],
    },
  ]

}

const headerBreadCrumbs: HeaderBreadcrumbsProps = {
  base: "Building Your Application",
  currentPage: "Data Fetching"
}

const headerData: BasicSidebarHeaderProps = {
    title: "Documentation",
    Logo: GalleryVerticalEnd,
    version: "v1.0.0", 

}

const teamsData: TeamSwitcherProps = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      plan: "Startup",
      logo: AudioWaveform,
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ]
}

const projectsData: NavProjectsProps = {
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ]
}

const userData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }
}

export const sidebar06Data: Sidebar06Props = {
    header: headerData,
    body: {
        navMain:  navMain,
    },
}

export const sidebar07Props: Sidebar07Props = {
  header: teamsData,
  body: {
    navMain:  navMain,
    navProjects: projectsData
  },
  footer: userData
}

export const mainSystemConfig1: SystemConfig = {
  header: {
    variant: "basic",
    props: headerBreadCrumbs,
  },
  sidebar: {
    sidebarHeader: {
      variant: "basic",
      // props: teamsData,
      props: headerData,
    },
    sidebarBody: [
      // { variant: "projectsNav", 
      //   props: projectsData 
      // },
      {
        variant: "mainNav",
        props: navMain,
      },
      {
        variant: "workspacesNav",
        props: workspaces,
        // props: navMain,
      },
    ],
    sidebarFooter: {
      variant: "navOptInForm",
      // props: userData,
    },
  },
  // featureList: {
  //   variant: "feature-list-01",
  // },
}

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