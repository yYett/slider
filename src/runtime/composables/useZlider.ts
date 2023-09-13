import { useState } from "#imports";
import { StyleValue } from "vue";
import { ZliderState, ZliderOptions } from "../interface/state";

const useZlider = () => {
  const inicialState: ZliderState = {
    activeSlide: 0,
    slidesNr: 1,
    options: {
      perView: 2,
      gap: 24,
      startAt: 1,
    },
  };

  const state = useState<ZliderState>("Zlider", () => inicialState);

  const setZlideState = (payload: any): void => {
    payload && Object.assign(state.value, payload);
  };

  const init = (options?: ZliderOptions): void => {
    if (!options) return;

    const obj = {
      activeSlide: options.startAt ?? 0,
      options: options,
    };

    setZlideState(obj);
  };

  const setSlidesNr = (num: number): void => {
    num &&
      setZlideState({
        slidesNr: num - state.value.options.perView!,
      });
  };

  const getZlideCssVariables = (): StyleValue => {
    const options = state.value.options;

    return {
      "--items-gap": `${options.gap}px`,
      "--per-view": options.perView,
    };
  };

  const incActiveSlide = (): void => {
    state.value.activeSlide < state.value.slidesNr && state.value.activeSlide++;
  };

  const decActiveSlide = (): void => {
    state.value.activeSlide > 0 && state.value.activeSlide--;
  };

  const getZlideProp = <T extends keyof ZliderState>(
    prop: T
  ): ZliderState[T] | undefined => {
    return state.value?.[prop];
  };
  return {
    state,
    setZlideState,
    init,
    setSlidesNr,
    getZlideCssVariables,
    incActiveSlide,
    decActiveSlide,
    getZlideProp,
  };
};

export default useZlider;