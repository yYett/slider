<template>
  <div class="the-slider">
    <div class="the-items">
      <slot name="items" />
    </div>

    <slot name="navigation">
      <div class="the-navigation-prev" />
      <div class="the-navigation-next" @click="slideNext()" />
    </slot>
    <slot name="pagination">
      <div class="the-slider-pagination" />
    </slot>
  </div>
</template>
<script setup lang="ts">
import { TheSlider } from "../interface/props";
import { slideNext } from "../utils/navigation";

const props = defineProps<TheSlider>();
</script>
