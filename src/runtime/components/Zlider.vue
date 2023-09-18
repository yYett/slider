<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    ref="zliderRef"
    class="the-slider"
    :style="[getZlideCssVariables(), { '--active-slide': handleActiveSlide }]"
    @mousedown="toggleSlide($event, true)"
    @mousemove="slide"
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

const { getZlideCssVariables, getZlideProp, setZlideState } = useZlider();

const zliderRef = ref();

// const props = defineProps<Zlider>();

const move = ref(false);
const initPosition = ref(0);
const diff = ref(0);

const handleActiveSlide = computed(() => {
  const prev = getZlideProp("activeSlide")!;
  const value = prev - (1 / 100) * diff.value;
  return value;
});

const triggerUpdate = () => {
  if (move.value) {
    setZlideState({
      activeSlide: Math.round(handleActiveSlide.value),
    });

    diff.value = 0;
  }
};

const toggleSlide = (event: any, state?: boolean): void => {
  triggerUpdate();
  move.value = state ?? !move.value;
  initPosition.value = (event.clientX * 100) / window.innerWidth;
};

const slide = debounce((event: any): void => {
  if (!move.value) return;

  //  console.log('slide', event);

  // find % on drag/move
  const currPosition = (event.clientX * 100) / window.innerWidth;
  diff.value = currPosition - initPosition.value;
}, 5);
</script>
