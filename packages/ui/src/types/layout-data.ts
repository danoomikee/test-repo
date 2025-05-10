import { type LucideIcon } from "lucide-react"

// // Sidebar

// // Siderbar Headers

// /// team switch header
export interface SwitchTeam {
    name: string
    logo: LucideIcon
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
    icon?: LucideIcon
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
    icon: LucideIcon
}


// /// Nav Secondary
export interface NavSecondaryItem {
    title: string
    url: string
    icon: LucideIcon
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

