"use client";

import * as Lucide from "lucide-react";
import { LucideIcon } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  name?: keyof typeof Lucide;
}

const Icon: React.FC<IconProps> = ({ name = "Circle", ...rest }) => {
  const IconComponent = Lucide[name] as LucideIcon;
  return <IconComponent {...rest} />;
};

export default Icon;
