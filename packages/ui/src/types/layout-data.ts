import { type LucideIcon } from "lucide-react"

// Sidebar

// Siderbar Headers

/// basic header

export interface BasicHeaderType {
    title: string
    Logo: React.ElementType
    version: string
}

export interface BasicHeaderProps {
    header: BasicHeaderType }



/// team switch header
export interface SwitchTeam {
    name: string
    logo: React.ElementType
    plan: string
}

export interface TeamSwitcherProps {
    teams: SwitchTeam[]
}

/// version switch header
// interface SwitchVersion {
//     versions: string[]
//     defaultVersion: string
// }

export interface VersionSwitcherProps {
    versions: string[]
    defaultVersion: string
}

// Sidebar Footers

export interface UserProfile {
    name: string
    email: string
    avatar: string
}

export interface UserProfileProps {
    user: UserProfile
}


// Sidebar Bodies

/// Main Nav
export interface NavMainItem {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
        title: string
        url: string
        isActive?: boolean
    }[]
}

export interface MainNavItemProps {
    items: NavMainItem[]
}
/// Nav Favorites
interface NavFavoritesItem {
    name: string
    url: string
    emoji: string
}

export interface NavFavoritesProps {
    favorites: NavFavoritesItem[]
}

/// Nav Projects
export interface NavProjectsItem {
    name: string
    url: string
    icon: LucideIcon
}

export interface NavProjectsProps {
    projects: NavProjectsItem[]
}


/// Nav Secondary
interface SecondaryNavItem {
    title: string
    url: string
    icon: LucideIcon
}
export interface NavSecondaryProps {
    items: SecondaryNavItem[]
}


/// Nav Workspaces
interface NavWorkspaceItem {
    name: string
    emoji: React.ReactNode
    pages: {
      name: string
      emoji: React.ReactNode
    }[]
  }

export interface NavWorkspacesProps {
    workspaces: NavWorkspaceItem[]
}

// Main Headers

/// Breadcrumb Defaults
export interface HeaderBreadcrumbsProps {
    base: string
    currentPage: string
}


// SIDEBAR PROPS 
export interface Sidebar07Props {
    header: {teams: SwitchTeam[]}
    body: {
      navMain: NavMainItem[]
      projects: NavProjectsItem[]
    }
    footer: {user: UserProfile}
  }

export interface Sidebar06Props {
    header: BasicHeaderProps
    body: {
      navMain: NavMainItem[]
    }
    footer: null
}