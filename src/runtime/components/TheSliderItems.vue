<template>
  <TheSliderWrapper>
    <div v-for="(item, i) in props.items" :key="i">
      <slot :item="item" />
    </div>
  </TheSliderWrapper>
</template>
<script setup lang="ts">
import { TheSliderItems } from "../interface/props";

const props = defineProps<TheSliderItems>();
</script>
