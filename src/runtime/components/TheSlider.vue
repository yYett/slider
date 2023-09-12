<template>
  <div class="the-slider">
    <slot />
  </div>
</template>
<script setup lang="ts">
// import { ref } from "#imports";
import { TheSlider } from "../interface/props";

const props = defineProps<TheSlider>();
</script>
