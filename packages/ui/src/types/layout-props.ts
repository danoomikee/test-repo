import { NavFavoritesItem, NavMainItem, NavProjectsItem, NavSecondaryItem, NavWorkspaceItem, SwitchTeam, UserProfile } from "./layout-data.js"

// main header
export interface HeaderBreadcrumbsProps {
    base?: string
    currentPage?: string
}

// sidebar-body
export interface MainNavItemProps {
    items?: NavMainItem[]
}

export interface NavFavoritesProps {
    favorites?: NavFavoritesItem[]
}

export interface NavProjectsProps {
    projects?: NavProjectsItem[]
}

export interface NavWorkspacesProps {
    workspaces?: NavWorkspaceItem[]
}

export interface NavSecondaryProps {
    items?: NavSecondaryItem[]
}

// sidebar-footer
export interface UserProfileProps {
    user?: UserProfile
}


// sidebar-header
export interface BasicSidebarHeaderProps {
    title?: string
    Logo?: React.ElementType
    version?: string
}

export interface TeamSwitcherProps {
    teams?: SwitchTeam[]
}

export interface VersionSwitcherProps {
    versions?: string[]
    defaultVersion?: string
}

// sidebar {with header, body, footer} schema
export interface Sidebar06Props {
    header?: BasicSidebarHeaderProps
    body?: {
        navMain: MainNavItemProps
    }
    footer?: undefined
    }

export interface Sidebar07Props {
    header?: TeamSwitcherProps
    body?: {
        navMain?: MainNavItemProps
        navProjects?: NavProjectsProps
    }
    footer?: UserProfileProps
}

export interface SidebarProps {
    header?: {
        basic?: BasicSidebarHeaderProps
        teams?: SwitchTeam[]
        versionSwitcher?: VersionSwitcherProps
    }
    body?: {
        navMain?: MainNavItemProps
        navProjects?: NavProjectsProps
        navFavorites?: NavFavoritesProps
        navWorkspaces?: NavWorkspacesProps
        navSecondary?: NavSecondaryProps
    }
    footer?: {
        user?: UserProfile
    }
}