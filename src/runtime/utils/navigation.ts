import useZlider from "../composables/useZlider";

export const slideNext = () => {
  const { incActiveSlide } = useZlider();
  incActiveSlide();
  console.log('inc');
  
};

export const slidePrev = () => {
  const { decActiveSlide } = useZlider();
  decActiveSlide();
  console.log('dec');
};
