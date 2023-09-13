<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="the-slider"
    :style="{'--active-slide': getZlideProp('activeSlide')}"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import type { Zlider } from "../interface/props";
import useZlider from "../composables/useZlider";

const { init, getZlideProp } = useZlider();

const props = defineProps<Zlider>();
</script>
