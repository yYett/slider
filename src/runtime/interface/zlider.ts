export interface ZliderBreakpoints {
  [key: number]: {
    perView?: number;
    gap?: number;
  };
}

export interface ZliderOptions {
  perView?: number;
  gap?: number;
  startAt?: number;
  // autoplay?: boolean;
  breakpoints?: ZliderBreakpoints;
}

export interface ZliderProps {
  init?: boolean;
  options?: ZliderOptions;
}

export interface ZliderUseState {
  instance: string;
  init: boolean;
  activeSlide: number;
  slidesNr: number;
  options: ZliderOptions;
}

export interface ZliderInjection {
  instance: string;
  get<T extends keyof ZliderUseState>(prop: T): ZliderUseState[T] | null;
  setSlidesNr(value: number): void;
  slideNext(): void;
  slidePrev(): void;
}

export interface ZliderItems {
  items: any[];
}

export interface ZliderPagination {
  type?: "progress" | "scrollbar";
}
