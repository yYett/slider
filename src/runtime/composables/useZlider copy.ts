import { useState } from "#imports";
import { inicialState } from "../../../dist/runtime/config/inicial-state";
import { ZliderState, ZliderOptions } from "../interface/zlider";

const xxx = () => {
  const state = useState<{ [id: string]: ZliderState }>(
    "xxx",
    () => ({})
  );

  const updateZlide = (payload: any): void => {
    if (payload?.instance) {
      state.value[payload.instance] = Object.assign(
        state.value[payload.instance] || {},
        payload
      );
    }
  };

  const removeZlide = (instance: string): void => {
    delete state.value[instance];
  };

  const init = (instance: string, options?: ZliderOptions): void => {
    options = Object.assign({ ...inicialState.options }, options);
    const obj = Object.assign(
      { ...inicialState },
      {
        instance: instance,
        activeSlide: options?.startAt ?? 0,
        options: options,
      }
    );

    updateZlide(obj);

    console.log("%c state.value", "color:teal", state.value);
  };

  return {
    state,
    updateZlide,
    removeZlide,
    init,
  };
};

export default xxx;
