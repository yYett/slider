import { inicialState } from "../config/inicial-state";
import { ZliderOptions, ZliderState } from "../interface/zlider";

export const initZlider = (
  instance: string,
  options?: ZliderOptions
): ZliderState => {
  options = Object.assign({ ...inicialState.options }, options);
  const obj = Object.assign(
    { ...inicialState },
    {
      instance: instance,
      activeSlide: options?.startAt ?? 0,
      options: options,
    }
  );

  return obj;
};
