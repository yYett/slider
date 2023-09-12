export interface ZliderState {
  activeSlide: number;
  options: ZliderOptions;
  slidesNr: number;
}

export interface ZliderOptions {
  perView?: number;
  gap?: number;
  startAt: number;
  // autoplay?: boolean;
  // breakpoints: unknown;
}
