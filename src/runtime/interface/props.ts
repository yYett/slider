export interface Zlider {
  navigation?: boolean;
  pagination?: boolean;
}

export interface ZliderItems {
  items: any[];
}

export interface ZliderPagination {
  type?: "progress" | "scrollbar";
}
