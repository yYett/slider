/**
 * COMMONS
 */
export interface ZliderBreakpoints {
  [key: number]: {
    perView?: number;
    gap?: number;
  };
}

/**
 * PROPS
 */

export interface ZliderProps {
  mounted: boolean;
  perView: number;
  gap: number;
  startAt: number;
  breakpoints?: ZliderBreakpoints;
}

export interface ZliderItems {
  items: any[];
}

export interface ZliderPagination {
  type?: "progress" | "scrollbar";
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
  params: Partial<ZliderProps>;
}

export interface ZliderInjection {
  instance: string;
  get<T extends keyof ZliderUseState>(prop: T): ZliderUseState[T] | null;
  setSlidesNr(value: number): void;
  slideNext(): void;
  slidePrev(): void;
}
