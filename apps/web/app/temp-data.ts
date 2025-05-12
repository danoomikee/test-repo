import { BasicSidebarHeaderProps, HeaderBreadcrumbsProps, MainNavItemProps, NavFavoritesProps, NavProjectsProps, NavSecondaryProps, NavWorkspacesProps, TeamSwitcherProps, VersionSwitcherProps } from "@workspace/ui/types/layout-props"
import { SystemConfig } from "@workspace/ui/types/layout-config"

// This is sample data.
const navMain: MainNavItemProps = {
  items: [
    {
      title: "Getting Started",
      url: "/feature1", // there is no feature 1
      items: [
        {
          title: "Installation",
          url: "/feature1", // TO GO TO FEATURE 2 !!!
        },
        {
          title: "Project Structure",
          url: "/", // TO GO BACK TO FEATURE 1 WITH !!!
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

const navSecondary: NavSecondaryProps = {
  items: [
    {
      title: "Calendar",
      url: "/feature1",
      icon: "Calendar",
    },
    {
      title: "Settings",
      url: "/",
      icon: "Settings2",
    },
    {
      title: "Templates",
      url: "#",
      icon: "Blocks",
    },
    {
      title: "Trash",
      url: "#",
      icon: "Trash2",
    },
    {
      title: "Help",
      url: "#",
      icon: "MessageCircleQuestion",
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
          url: "/feature2", // TO GO TO FEATURE 2 !!!
          emoji: "📔",
        },
        {
          name: "Health & Wellness Tracker",
          url: "/",  // TO GO BACK TO FEATURE 1 WITH !!!
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
  data: {
    title: "Documentation",
    logo: "GalleryVerticalEnd",
    version: "v1.0.0",
  }
}

const versionData: VersionSwitcherProps = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  defaultVersion: "1.0.0",
}

const teamsData: TeamSwitcherProps = {
  teams: [
    {
      name: "Acme Inc",
      logo: "GalleryHorizontalEnd",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      plan: "Startup",
      logo: "AudioWaveform",
    },
    {
      name: "Evil Corp.",
      logo: "Command",
      plan: "Free",
    },
  ]
}

const projectsData: NavProjectsProps = {
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: "Frame",
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: "PieChart",
    },
    {
      name: "Travel",
      url: "#",
      icon: "Map",
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

// export const sidebar06Data: Sidebar06Props = {
//   header: headerData,
//   body: {
//     navMain: navMain,
//   },
// }

// export const sidebar07Props: Sidebar07Props = {
//   header: teamsData,
//   body: {
//     navMain: navMain,
//     navProjects: projectsData
//   },
//   footer: userData
// }

export const mainSystemConfig1: SystemConfig = {
  header: {
    variant: "withSearch",
    props: headerBreadCrumbs,
  },
  sidebar: {
    sidebarHeader: {
      variant: "teamSwitch",
      props: teamsData,
      // props: headerData,
    },
    sidebarBody: [
      {
        variant: "projectsNav",
        props: projectsData
      },
      {
        variant: "mainNav",
        props: navMain,
      },
      // {
      //   variant: "workspacesNav",
      //   props: workspaces,
      // }

    ],
    sidebarFooter: {
      variant: "navOptInForm",
      props: userData,
    },
  },
}