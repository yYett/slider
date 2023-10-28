import { TheZliderProps, ZliderUseState } from "../interface/TheZlider";

export const initZlider = (
  instance: string,
  payload: Partial<TheZliderProps>
): ZliderUseState => {
  console.log("props", payload);

  const obj = {
    instance: instance,
    mounted: payload.mounted!,
    activeSlide: payload.startAt!,
    slidesNr: 0,
    perView: payload?.perView!,
    gap: payload?.gap || 32,
    hasBreakpoints: payload?.breakpoints
      ? Object.keys(payload.breakpoints)?.length != 0
      : false,
    params: payload,
  };

  return obj;
};
