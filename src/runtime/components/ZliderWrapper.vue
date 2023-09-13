<template>
  <div
    ref="wrapperRef"
    class="the-items"
    :style="[getZlideCssVariables(), { '--active-slide': xp1 }]"
    @mousedown="toggleSlide($event)"
    @mousemove="slide"
    @mouseup="toggleSlide($event)"
  >
    <slot />
  </div>

  <div>
    <br>
    <h3>clientX: {{ clientX }}</h3>
    <h3>initPosition: {{ initPosition }}</h3>
    <br>
    <h3>diff: {{ diff }}</h3>
    <h3>X: {{ x }}</h3>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import useZlider from "../composables/useZlider";
import { slideNext, slidePrev } from "../utils/navigation";
import { debounce } from "../utils/commons";

const { setSlidesNr, getZlideCssVariables, getZlideProp, setZlideState } =
  useZlider();
const wrapperRef = ref();

onMounted(() => {
  const length = wrapperRef.value.children.length;
  setSlidesNr(length);
});

const move = ref(false);
const clientX = ref(0);
const initPosition = ref(0);
const diff = ref(0);

const xp1 = computed(() => {
  const prev = getZlideProp("activeSlide")!;
  console.log("prev", prev);
  console.log((1 / 100) * Math.abs(diff.value));

  const value = prev + (1 / 100) * Math.abs(diff.value);

  return value;
});

const toggleSlide = (event: any): void => {
  move.value = !move.value;
  initPosition.value = (event.clientX * 100) / window.innerWidth;

  move.value &&
    setZlideState({
      activeSlide: xp1.value,
    });

  diff.value = 0;
};

const slide = debounce((event: any): void => {
  if (!move.value) return;

  //  console.log('slide', event);

  clientX.value = event.clientX;

  // find % on drag/move

  const currPosition = (event.clientX * 100) / window.innerWidth;
  diff.value = currPosition - initPosition.value;

  // const isSlidingRight = Math.sign(diff.value);

  // Math.abs(diff.value) > 15 && isSlidingRight ? slideNext() : slidePrev();
}, 0);
</script>
