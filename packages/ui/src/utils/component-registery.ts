import BasicSidebarHeader from '@workspace/ui/layouts/sidebar-headers/basic-sidebar-header';
import TeamSwitcher from '@workspace/ui/layouts/sidebar-headers/team-switcher';
import VersionSwitcher from '@workspace/ui/layouts/sidebar-headers/version-switcher';

import NavMain from '@workspace/ui/layouts/sidebar-bodies/main-nav';
import NavProjects from '@workspace/ui/layouts/sidebar-bodies/nav-projects';
import NavSecondary from '@workspace/ui/layouts/sidebar-bodies/nav-secondary';
import NavFavorites from '@workspace/ui/layouts/sidebar-bodies/nav-favorites';
import NavWorkspaces from '@workspace/ui/layouts/sidebar-bodies/nav-workspaces';

import NavUser from '@workspace/ui/layouts/sidebar-footers/nav-user';
import SidebarOptInForm, { SidebarOptInFormPadded } from '@workspace/ui/layouts/sidebar-footers/sidebar-opt-in-form';

import BasicMainHeader from '@workspace/ui/layouts/main-headers/basic-main-header';
import HeaderWithSearch from '@workspace/ui/layouts/main-headers/header-with-search';

const componentRegistry = {
  sidebarHeader: {
    basic: BasicSidebarHeader,
    teamSwitch: TeamSwitcher,
    versionSwitch: VersionSwitcher,
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
    navOptInForm: SidebarOptInFormPadded,
  },
  mainHeader: {
    basic: BasicMainHeader,
    withSearch: HeaderWithSearch,
  },
};

export type ComponentRegistry = typeof componentRegistry;
export type SidebarHeaderVariants = keyof ComponentRegistry['sidebarHeader'];
export type SidebarBodyVariants = keyof ComponentRegistry['sidebarBody'];
export type SidebarFooterVariants = keyof ComponentRegistry['sidebarFooter'];
export type MainHeaderVariants = keyof ComponentRegistry['mainHeader'];

export default componentRegistry;