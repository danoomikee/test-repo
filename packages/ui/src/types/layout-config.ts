// src/types/layout-config.ts
// import { LinkGroup, UserProfile, FooterInfo, LinkItem } from './layout-data';
import { BasicHeaderProps, BasicHeaderType, HeaderBreadcrumbsProps, MainNavItemProps, NavMainItem, NavProjectsItem, SwitchTeam, TeamSwitcherProps, UserProfile, UserProfileProps, VersionSwitcherProps } from './layout-data.js';

// --- Sidebar Header ---
type BasicSidebarHeaderConfig = {
  variant: 'basic';
  data: BasicHeaderProps; // Simple title data
};
type TeamSwitchSidebarHeaderConfig = {
  variant: 'teamSwitch';
  data: TeamSwitcherProps;
};
type VersionSwitchSidebarHeaderConfig = {
  variant: 'versionSwitch';
  data: VersionSwitcherProps;
};


// Add more header variants here...
// type NoSidebarHeaderConfig = { variant: 'none'; data?: never };

export type SidebarHeaderConfig =
  | BasicSidebarHeaderConfig
  | TeamSwitchSidebarHeaderConfig
  | VersionSwitchSidebarHeaderConfig
  | { variant: 'none' } // Example for no header
// | NoSidebarHeaderConfig;



// --- Sidebar Body ---

type MainNavBodyConfig = {
  variant: 'mainNav';
  data: MainNavItemProps[];
};

type SecondaryNavBodyConfig = {
  variant: 'secondaryNav';
  data: MainNavItemProps[];
};

type FavoritesNavBodyConfig = {
  variant: 'favoritesNav';
  data: MainNavItemProps[];
};

type ProjectsNavBodyConfig = {
  variant: 'projectsNav';
  data: MainNavItemProps[];
};
type WorkspacesNavBodyConfig = {
  variant: 'workspacesNav';
  data: MainNavItemProps[];
};

// Add more body variants here... (e.g., collapsible, search)
// type SearchableLinkGroupBodyConfig = { variant: 'searchableLinkGroup', data: LinkGroup[], searchPlaceholder: string };

export type SidebarBodyConfig =
  | MainNavBodyConfig
  | SecondaryNavBodyConfig
  | FavoritesNavBodyConfig
  | ProjectsNavBodyConfig 
  | WorkspacesNavBodyConfig
  // | { variant: 'none' } // Example for no body

// | SearchableLinkGroupBodyConfig;


// --- Sidebar Footer ---
type UserProfileFooterConfig = {
  variant: 'navUser';
  data: UserProfileProps;
};

type OptInFormFooterConfig = {
    variant: 'navOptInForm';
    data: null; // Example structure
}
// Add more footer variants here...
// type NoSidebarFooterConfig = { variant: 'none'; data?: never };

export type SidebarFooterConfig =
  | UserProfileFooterConfig
  | OptInFormFooterConfig
  | { variant: 'none' } // Example for no footer
// | NoSidebarFooterConfig


// --- Sidebar Data Config ---
type Sidebar07DataConfig = {
    header: {teams: SwitchTeam[]}
    body: {
      navMain: NavMainItem[]
      projects: NavProjectsItem[]
    }
    footer: {user: UserProfile}
  }

type Sidebar06DataConfig = {
    header: {header: BasicHeaderType}
    body: {
      navMain: NavMainItem[]
    }
    footer: null
}

export type SidebarDataConfig =
 | Sidebar06DataConfig
 | Sidebar07DataConfig
  | { variant: 'none' } // Example for no data



// --- Sidebar Structure ---
// Defines the overall structure and component choices for the sidebar
export type SidebarConfig = {
  variant: '06' | '07'; // Structural variants of the sidebar itself
  data: SidebarDataConfig; // Data structure for the sidebar
  header: SidebarHeaderConfig;
  body: SidebarBodyConfig;
  footer: SidebarFooterConfig;
} | {
    variant: 'none'; // Option for no sidebar
}

// --- Main Header --- (Example)
type BasicMainHeaderConfig = {
    variant: 'basic';
    data: HeaderBreadcrumbsProps;
}
type HeaderWithSearchConfig = {
    variant: 'withSearch';
    data: HeaderBreadcrumbsProps;
}

export type MainHeaderConfig =
 | BasicMainHeaderConfig
 | HeaderWithSearchConfig
 | { variant: 'none' };


// --- Overall Layout Configuration ---
export interface LayoutConfig {
  // Define top-level structure variations if needed (e.g., 'sidebarLeft', 'topNavOnly')
  // layoutVariant: 'defaultWithSidebar' | 'minimal';

  sidebar: SidebarConfig;
  mainHeader: MainHeaderConfig;
  // Add other configurable sections if needed (e.g., main footer)
}

// --- Helper Type (Optional but useful) ---
// Maps variant strings to actual component types
// You might not need this directly in config, but useful for the LayoutBuilder
export type ComponentMap<V extends string, P> = {
  [key in V]: React.ComponentType<P>;
};