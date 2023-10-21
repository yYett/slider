import {
  ZliderBreakpoints,
  ZliderProps,
  ZliderUseState,
} from "../interface/zlider";

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

export const genBreakpointsStyle = (
  element: string,
  breakpoints: ZliderBreakpoints
): string => {
  const content = Object.entries(breakpoints)
    .map(([key, value]) => {
      const style: string[] = [];

      if (value.gap) style.push(`--items-gap: ${value.gap}px;`);
      if (value.perView) style.push(`--per-view: ${value.perView};`);

      if (style.length) {
        return `@media (min-width: ${key}px) { ${style.join(" ")} }`;
      }

      return "";
    })
    .join(" ");

  const result = `#${element} { ${content} }`;
  return result;
};
