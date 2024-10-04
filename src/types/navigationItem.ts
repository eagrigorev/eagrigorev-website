export interface NavigationItem {
  title: string;
  url: string;
}

export interface NavigationItems {
  journal: NavigationItem[];
  library: NavigationItem[];
  works: NavigationItem[];
  top: NavigationItem[];
  error: NavigationItem[];
}
