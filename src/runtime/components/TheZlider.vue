<template>
  <div
    :id="instance"
    ref="zliderRef"
    class="the-zlider"
    :style="{
      '--active-slide': handleActiveSlide,
      '--items-gap': `${zlider.get('gap')}px`,
      '--per-view': zlider.get('perView')?.toString(),
      '--pagination-bullets': zlider.get('slidesNr') || 0,
    }"
    @mousedown="toggleSlide($event, true)"
    @mousemove="handleSlide"
    @mouseup="toggleSlide($event, false)"
    @mouseleave="toggleSlide($event, false)"
  >
    <slot />
    <pre>{{ zliderRef?.offsetWidth }} width</pre>
  </div>
</template>
<script setup lang="ts">
import { useState, clearNuxtState } from "#imports";
import { ref, computed, provide, onBeforeUnmount } from "vue";
import { useTheZlider } from "../composables/useTheZlider";
import { debounce, genUnique } from "../utils/commons";
import { initZlider } from "../utils/core";
import type { TheZliderProps } from "../interface/TheZlider";

const props = withDefaults(defineProps<Partial<TheZliderProps>>(), {
  mounted: true,
  perView: 1,
  gap: 0,
  startAt: 0,
});

const zliderRef = ref<HTMLElement>();
const zliderLst = useState<string[]>("TheZliderLst", () => []);

const instance = ref<string>(genUnique());
const move = ref<boolean>(false);
const initPosition = ref<number>(0);
const diff = ref<number>(0);
const zlider = useTheZlider(instance.value, initZlider(instance.value, props));

zliderLst.value.push(instance.value);

provide("instance", instance.value);

const handleActiveSlide = computed(() => {
  const prev = zlider.get("activeSlide")!;
  const value = prev - (1 / 100) * diff.value;
  return value;
});

const triggerUpdate = () => {
  if (!move.value) return;

  // review slide
  const value = Math.round(handleActiveSlide.value);
  // console.log("slided to", value);

  zlider.canZlide(value) && zlider.set("activeSlide", value);
  diff.value = 0;
};

const toggleSlide = (event: MouseEvent, isSliding?: boolean): void => {
  triggerUpdate();
  const width = zliderRef.value?.offsetWidth!;
  move.value = isSliding ?? !move.value;
  initPosition.value = (event.clientX * 100) / width;
};

const handleSlide = debounce((event: MouseEvent): void => {
  if (!move.value) return;

  const width = zliderRef.value?.offsetWidth!;
  const currPosition = (event.clientX * 100) / width;
  diff.value = currPosition - initPosition.value;
}, 5);

onBeforeUnmount(() => {
  console.log("out");
  // remove from instance
  //

  // delete usestate for x+
  clearNuxtState(instance.value);

  // maybe: pass id as prop and keep it for future use
  // or maybe two slides with one intance an both change at same time
  // just thinking next uses
});
</script>
