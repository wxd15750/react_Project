export interface RouteItem {
  path: string;
  element?: React.ReactNode;
  children?: RouteItem[];
  meta?: {
    title?: string;
    icon?: JSX.Element;
    hidden?: boolean;
  };
}
