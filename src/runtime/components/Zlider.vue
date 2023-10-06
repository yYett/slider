<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :id="state.instance"
    ref="zliderRef"
    class="the-slider"
    @mousedown="toggleSlide($event, true)"
    @mousemove="handleSlide"
    @mouseup="toggleSlide($event, false)"
    @mouseleave="toggleSlide($event, false)"
  >
    <!-- :style="[getZlideCssVariables(), { '--active-slide': handleActiveSlide }]" -->
    <slot />
  </div>
</template>
<script setup lang="ts">
import type { ZliderProps } from "../interface/zlider";
import { computed, reactive, ref, onBeforeUnmount } from "vue";
import useZlider from "../composables/useZlider";
import { debounce, genUnique } from "../utils/commons";
import { onUpdated } from "vue";

const props = defineProps<ZliderProps>();

const { init, removeZlide } = useZlider();

interface ZliderState {
  instance: string;
  move: boolean;
  initPosition: number;
  diff: number;
}

const inicialState: ZliderState = {
  instance: genUnique(),
  move: false,
  initPosition: 0,
  diff: 0,
};

const state = reactive<ZliderState>({ ...inicialState });
const zliderRef = ref<HTMLElement>();

onUpdated(() => console.log("onUpdated", state.instance));

onBeforeUnmount(() => removeZlide(state.instance));

const handleActiveSlide = computed(() => {
  // const prev = getZlideProp("activeSlide")!;
  // const value = prev - (1 / 100) * state.diff;
  // return value;
  return 0;
});

const triggerUpdate = () => {
  if (!state.move) return;

  // const value = Math.round(handleActiveSlide.value);
  // canZlide(value) && setSlideNr(value);
  state.diff = 0;
};

const toggleSlide = (event: any, isSliding?: boolean): void => {
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
</script>
