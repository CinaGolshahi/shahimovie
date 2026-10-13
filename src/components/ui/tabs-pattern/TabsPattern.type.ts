import type { ReactNode } from "react";

interface ITabItem {
  label: string;
  content: ReactNode;
}

interface ITabsProps {
  tabs: ITabItem[];
}

export type { ITabsProps };
