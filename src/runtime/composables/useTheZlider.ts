import { useState } from "#imports";
import { ZliderUseState } from "../interface/TheZlider";

export const useTheZlider = (instance: string, data?: ZliderUseState) => {
  const state = useState<ZliderUseState>(
    instance,
    () => data as ZliderUseState
  );

  const set = <T extends keyof ZliderUseState>(
    prop: T,
    value: ZliderUseState[T]
  ): void => {
    if (prop) state.value[prop] = value;
  };

  const get = <T extends keyof ZliderUseState>(prop: T): ZliderUseState[T] => {
    return state.value?.[prop];
  };

  const canZlide = (value: number): boolean => {
    return value >= 0 && value <= state.value.slidesNr!;
  };

  const slideTo = (slide: number): void => {
    if (!canZlide(slide)) return;
    state.value.activeSlide = slide;
  };

  const slideNext = (): void => {
    state.value.activeSlide < state.value.slidesNr && state.value.activeSlide++;
  };

  const slidePrev = (): void => {
    state.value.activeSlide > 0 && state.value.activeSlide--;
  };

  const setSlidesNr = (value: number): void => {
    value && set("slidesNr", value - state.value.perView!);
  };

  const handleBreakpoint = (width: number): void => {
    const { hasBreakpoints, params } = state.value;
    if (!hasBreakpoints) return;

    const matched = Object.entries(params.breakpoints!).find(
      ([breakpoint]) => width > parseInt(breakpoint)
    );
    const { perView, gap } = matched ? matched[1] : params;

    perView && set("perView", perView);
    gap && set("gap", gap);
  };

  return {
    state,
    set,
    get,
    canZlide,
    slideNext,
    slidePrev,
    slideTo,
    setSlidesNr,
    handleBreakpoint,
  };
};
