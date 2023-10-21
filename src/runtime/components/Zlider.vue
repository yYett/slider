<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :id="state.instance"
    ref="zliderRef"
    class="the-slider"
    :style="[
      {
        '--active-slide': handleActiveSlide,
        '--items-gap': `${get('gap')}px`,
        '--per-view': get('perView')?.toString(),
      },
    ]"
    @mousedown="toggleSlide($event, true)"
    @mousemove="handleSlide"
    @mouseup="toggleSlide($event, false)"
    @mouseleave="toggleSlide($event, false)"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import type { ZliderProps } from "../interface/zlider";
import { computed, reactive, ref, provide, readonly, onBeforeMount } from "vue";
import useZlider from "../composables/useZlider";
import { debounce, genUnique } from "../utils/commons";
import { initZlider } from "../utils/core";
import { useHead } from "#app";

const props = defineProps<Partial<ZliderProps>>();

interface ZliderState {
  instance: string;
  move: boolean;
  initPosition: number;
  diff: number;
}

const state = reactive<ZliderState>({
  instance: genUnique(),
  move: false,
  initPosition: 0,
  diff: 0,
});

const zliderRef = ref<HTMLElement>();
const { set, get, canZlide, setSlidesNr, slideNext, slidePrev } = useZlider(
  initZlider(state.instance, props)
);

const handleActiveSlide = computed(() => {
  const prev = get("activeSlide")!;
  const value = prev - (1 / 100) * state.diff;
  return value;
});

const triggerUpdate = () => {
  if (!state.move) return;

  const value = Math.round(handleActiveSlide.value);
  canZlide(value) && set("activeSlide", value);
  state.diff = 0;
};

const toggleSlide = (event: MouseEvent, isSliding?: boolean): void => {
  triggerUpdate();
  const width = zliderRef.value?.offsetWidth!;
  state.move = isSliding ?? !state.move;
  state.initPosition = (event.clientX * 100) / width;
};

const handleSlide = debounce((event: MouseEvent): void => {
  if (!state.move) return;

  const width = zliderRef.value?.offsetWidth!;
  const currPosition = (event.clientX * 100) / width;
  state.diff = currPosition - state.initPosition;
}, 5);

provide(
  "zliderInstance",
  readonly({
    instance: state?.instance,
    get,
    setSlidesNr,
    slideNext,
    slidePrev,
  })
);

const st = `
#${state.instance}{
  color: red;

  @media (min-width: 700px){
    color: blue;
  }
}

`;

onBeforeMount(() => {
  console.log(window);
});

useHead({
  style: [st],
});
</script>
