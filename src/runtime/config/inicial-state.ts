import type {
  ZliderMethods as IZliderMethods,
  ZliderState,
} from "../interface/zlider";

export const inicialState: ZliderState = {
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

export const ZliderMethods: IZliderMethods = {
  set: function (prop, value) {
    if (prop) this[prop] = value;
  },
  get: function (prop) {
    return prop ? this[prop] : null;
  },
  canZlide: function (value) {
    return value >= 0 && value <= this.slidesNr;
  },
  setSlideNr: function (value) {
    value && this.set("slidesNr", value - this.options.perView);
  },
  slideNext: function () {
    this.activeSlide < this.slidesNr && this.activeSlide++;
  },
  slidePrev: function () {
    this.activeSlide > 0 && this.activeSlide--;
  },
  getCssVariables: function () {
    const options = this.options;
    return {
      "--items-gap": `${options.gap}px`,
      "--per-view": options.perView,
    };
  },
};
