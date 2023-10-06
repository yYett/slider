import { StyleValue } from "vue";

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
  breakpoints?: ZliderBreakpoints[];
}

export interface ZliderProps {
  init?: boolean;
  options?: ZliderOptions;
}

export interface ZliderState {
  instance: string;
  init: boolean;
  activeSlide: number;
  slidesNr: number;
  options: ZliderOptions;
}

export interface ZliderMethods {
  set(prop: string, value: string): void;
  get<T extends keyof ZliderState>(prop: T): ZliderState[T] | null;
  canZlide(value: number): boolean;
  setSlideNr(value: number): void;
  slideNext(): void;
  slidePrev(): void;
  getCssVariables(): StyleValue;
}

export interface ZliderItems {
  items: any[];
}

export interface ZliderPagination {
  type?: "progress" | "scrollbar";
}