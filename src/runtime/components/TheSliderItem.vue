<template>
  <div v-for="(item, i) in props.items" :key="i" class="the-item">
    <slot :item="item" />
  </div>
</template>
<script setup lang="ts">
import { TheSliderItems } from "../interface/props";

const props = defineProps<TheSliderItems>();
</script>
