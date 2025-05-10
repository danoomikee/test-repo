export interface ComponentConfig<T = any> {
  variant: string
  props?: T
}

export interface SystemConfig {
  header?: ComponentConfig
  sidebar?: {
    sidebarHeader?: ComponentConfig
    sidebarBody?: ComponentConfig[]
    sidebarFooter?: ComponentConfig
  }
  
  // sidebarRail?: ComponentConfig
  footer?: ComponentConfig
  featureList?: ComponentConfig
}

export interface LayoutBuilderProps {
  config: SystemConfig;
  children: React.ReactNode; // For the main content area
}