import { useState } from "#imports";
import { ZliderState } from "../interface/zlider";
import type { StyleValue } from "vue";

const useZlider = (obj: ZliderState) => {
  const state = useState<ZliderState>(obj.instance, () => obj);

  const set = <T extends keyof ZliderState>(
    prop: T,
    value: ZliderState[T]
  ): void => {
    if (prop) state.value[prop] = value;
  };

  const get = <T extends keyof ZliderState>(prop: T): ZliderState[T] | null => {
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
    getCssVariables,
  };
};

export default useZlider;
