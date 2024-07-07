export interface RouteItem {
  path: string;
  element?: JSX.Element | null | undefined;
  children?: RouteItem[];
  meta?: {
    title?: string;
    icon?: JSX.Element;
    hidden?: boolean;
  };
}
