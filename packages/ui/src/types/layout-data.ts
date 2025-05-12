import * as Lucide from "lucide-react";

// // Main Header
export interface HeaderBreadcrumbsProps {
    base?: string
    currentPage?: string
}

// // Sidebar

// // Siderbar Headers

export interface BasicSidebarHeader {
    title?: string
    logo?: keyof typeof Lucide // lucide icon name
    version?: string
}

// /// team switch header
export interface SwitchTeam {
    name: string
    logo: keyof typeof Lucide // lucide icon type
    plan: string
}

// // Sidebar Footers

export interface UserProfile {
    name: string
    email: string
    avatar: string
}


// // Sidebar Bodies

// /// Main Nav
export interface NavMainItem {
    title: string
    url: string
    icon?: keyof typeof Lucide // lucide icon name
    isActive?: boolean
    items?: {
        title: string
        url: string
        isActive?: boolean
    }[]
}

// /// Nav Favorites
export interface NavFavoritesItem {
    name: string
    url: string
    emoji: string
}



// /// Nav Projects
export interface NavProjectsItem {
    name: string
    url: string
    icon: keyof typeof Lucide // lucide icon name
}


// /// Nav Secondary
export interface NavSecondaryItem {
    title: string
    url: string
    icon: keyof typeof Lucide // lucide icon name
}

// /// Nav Workspaces
export interface NavWorkspaceItem {
    name: string
    emoji: React.ReactNode
    pages: {
        name: string
        url: string
        emoji: React.ReactNode
    }[]
}

