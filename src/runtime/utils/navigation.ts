import useZlider from "../composables/useZlider";

export const slideNext = () => {
  const { incActiveSlide } = useZlider();
  incActiveSlide();
};

export const slidePrev = () => {
  const { decActiveSlide } = useZlider();
  decActiveSlide();
};
