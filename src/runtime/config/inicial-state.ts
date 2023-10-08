import type { ZliderUseState } from "../interface/zlider";

export const inicialState: ZliderUseState = {
  instance: "",
  init: true,
  activeSlide: 0,
  slidesNr: 0,
  options: {
    perView: 3,
    gap: 24,
    startAt: 0,
  },
};
