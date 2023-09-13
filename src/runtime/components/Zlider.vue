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
// import { ref } from "#imports";
import type { Zlider } from "../interface/props";
import useZlider from "../composables/useZlider";

const { getZlideProp } = useZlider();

const props = defineProps<Zlider>();
</script>
