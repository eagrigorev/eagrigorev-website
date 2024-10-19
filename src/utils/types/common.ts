export interface Slug {
  slug: string;
}

export interface NavigationItem {
  title: string;
  url: string;
}

export interface PostsAmount {
  grid: {
    toShow: number;
    toLoad: number;
  };
  related: {
    toShow: number;
    toLoad: number;
  };
}
