import { ZliderProps, ZliderUseState } from "../interface/zlider";

export const initZlider = (
  instance: string,
  payload: Partial<ZliderProps>
): ZliderUseState => {
  const obj = {
    instance: instance,
    mounted: payload?.mounted || true,
    activeSlide: payload?.startAt || 0,
    slidesNr: 0,
    perView: payload?.perView || 1,
    gap: payload?.gap || 32,
    hasBreakpoints: payload.breakpoints
      ? Object.keys(payload.breakpoints)?.length != 0
      : false,
    params: payload,
  };

  return obj;
};
