import {
  SidebarHeaderVariants,
  SidebarBodyVariants,
  SidebarFooterVariants,
  MainHeaderVariants,
} from '@workspace/ui/utils/component-registery';

// export interface ComponentConfig<T = any> {
//   variant: string
//   props?: T
// }

// export interface SystemConfig {
//   header?: ComponentConfig
//   sidebar?: {
//     sidebarHeader?: ComponentConfig
//     sidebarBody?: ComponentConfig[]
//     sidebarFooter?: ComponentConfig
//   }
  
//   // sidebarRail?: ComponentConfig
//   footer?: ComponentConfig
//   featureList?: ComponentConfig
// }

export interface LayoutBuilderProps {
  config: SystemConfig;
  children: React.ReactNode; // For the main content area
}



export interface SystemConfig {
  header?: {
    variant: MainHeaderVariants;
    props?: any; // Replace `any` with the appropriate type for header props
  };
  sidebar?: {
    sidebarHeader?: {
      variant: SidebarHeaderVariants;
      props?: any; // Replace `any` with the appropriate type for sidebar header props
    };
    sidebarBody?: Array<{
      variant: SidebarBodyVariants;
      props?: any; // Replace `any` with the appropriate type for sidebar body props
    }>;
    sidebarFooter?: {
      variant: SidebarFooterVariants;
      props?: any; // Replace `any` with the appropriate type for sidebar footer props
    };
  };
}





