import { useState } from "#imports";
import { Ref } from "vue";
import type { ZliderUseState } from "../interface/TheZlider";

export const mapBreakpoints = (zliderLst: string[]) => {
  try {
    type Breakpoints = {
      [key: number]: { [key: string]: { perView?: number; gap?: number } };
    };

    const result: Breakpoints = {};

    zliderLst.forEach((instance) => {
      const zlider = useState<Ref<ZliderUseState>>(instance);
      if (!zlider.value.hasBreakpoints) return;

      const breakpoints = zlider.value.params?.breakpoints;
      breakpoints &&
        Object.keys(breakpoints).forEach((key) => {
          result[key] = { ...result[key], [instance]: { ...breakpoints[key] } };
        });
    });

    return result;
  } catch {
    return undefined;
  }
};

export const genStylesheet = (zliderLst: string[]) => {
  const breakpoints = mapBreakpoints(zliderLst);

  if (!breakpoints) return "";

  return (
    Object.entries(breakpoints)
      .map(([key, value]) => {
        const mediaQueries = Object.keys(value).map((instance) => {
          const { gap, perView } = value[instance];
          const styles: string[] = [];

          if (gap) styles.push(`--items-gap: ${gap}px !important;`);
          if (perView) styles.push(`--per-view: ${perView} !important;`);

          return styles.length > 0
            ? `#${instance} { ${styles.join(" ")} }`
            : "";
        });

        return mediaQueries.length > 0
          ? `@media (min-width: ${key}px) { ${mediaQueries.join(" ")} }`
          : "";
      })
      // filter out any empty strings
      .filter(Boolean)
      .join(" ")
  );
};
