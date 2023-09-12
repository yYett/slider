import { useState } from "#imports";

const useTheSlider = () => {
  const state = () =>
    useState<any>({
      none: true,
    });

  return {
    state,
  };
};

export default useTheSlider;
