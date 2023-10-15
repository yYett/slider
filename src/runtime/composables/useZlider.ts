import { useState } from "#imports";
import { ZliderUseState } from "../interface/zlider";
import type { StyleValue } from "vue";

const useZlider = (obj: ZliderUseState) => {
  const state = useState<ZliderUseState>(obj.instance, () => obj);

  const set = <T extends keyof ZliderUseState>(
    prop: T,
    value: ZliderUseState[T]
  ): void => {
    if (prop) state.value[prop] = value;
  };

  const get = <T extends keyof ZliderUseState>(
    prop: T
  ): ZliderUseState[T] | null => {
    return prop ? state.value[prop] : null;
  };

  const canZlide = (value: number): boolean => {
    return value >= 0 && value <= state.value.slidesNr!;
  };

  const setSlidesNr = (value: number): void => {
    value && set("slidesNr", value - state.value.options.perView!);
  };

  const slideNext = (): void => {
    state.value.activeSlide < state.value.slidesNr && state.value.activeSlide++;
  };

  const slidePrev = (): void => {
    state.value.activeSlide > 0 && state.value.activeSlide--;
  };

  const slideTo = (slide: number): void => {
    if (!canZlide(slide)) return;
    state.value.activeSlide = slide;
  };

  const getCssVariables = (): StyleValue => {
    const options = state.value.options;
    return {
      "--items-gap": `${options.gap}px`,
      "--per-view": options.perView,
    };
  };

  return {
    state,
    set,
    get,
    canZlide,
    setSlidesNr,
    slideNext,
    slidePrev,
    slideTo,
    getCssVariables,
  };
};

export default useZlider;
