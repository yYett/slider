<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    ref="zliderRef"
    class="the-slider"
    :style="[getZlideCssVariables(), { '--active-slide': handleActiveSlide }]"
    @mousedown="toggleSlide($event, true)"
    @mousemove="handleSlide"
    @mouseup="toggleSlide($event, false)"
    @mouseleave="toggleSlide($event, false)"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
// import type { Zlider } from "../interface/props";
import useZlider from "../composables/useZlider";
import { computed, ref } from "vue";
import { debounce } from "../utils/commons";

// const props = defineProps<Zlider>();

const { getZlideCssVariables, getZlideProp, setZlideState, canZlide } =
  useZlider();

const zliderRef = ref();

const move = ref<boolean>(false);
const initPosition = ref<number>(0);
const diff = ref<number>(0);

const handleActiveSlide = computed(() => {
  const prev = getZlideProp("activeSlide")!;
  const value = prev - (1 / 100) * diff.value;
  return value;
});

const triggerUpdate = () => {
  if (move.value) {
    const value = Math.round(handleActiveSlide.value);
    canZlide(value) && setZlideState({ activeSlide: value });
    diff.value = 0;
  }
};

const toggleSlide = (event: any, state?: boolean): void => {
  triggerUpdate();
  const width = (zliderRef.value as HTMLElement).offsetWidth;
  move.value = state ?? !move.value;
  initPosition.value = (event.clientX * 100) / width;
};

const handleSlide = debounce((event: any): void => {
  if (!move.value) return;

  const width = (zliderRef.value as HTMLElement).offsetWidth;
  const currPosition = (event.clientX * 100) / width;
  diff.value = currPosition - initPosition.value;
}, 5);
</script>
