/**
 * COMMONS
 */
export interface ZliderBreakpoints {
  [key: number]: {
    perView: number;
    gap?: number;
  };
}

/**
 * PROPS
 */

export interface TheZliderProps {
  mounted: boolean;
  perView: number;
  gap: number;
  startAt: number;
  breakpoints?: ZliderBreakpoints;
}

export interface TheZliderItems {
  items: any[];
}

export interface ZliderPagination {
  type: "scrollbar" | "progress";
}

/**
 * STATE
 */

export interface ZliderUseState {
  instance: string;
  mounted: boolean;
  activeSlide: number;
  slidesNr: number;
  perView: number;
  gap: number;
  hasBreakpoints: boolean;
  params: Partial<TheZliderProps>;
}
