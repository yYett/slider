<template>
  <ZliderWrapper>
    <div v-for="(item, i) in props.items" :key="i">
      <slot :item="item" />
    </div>
  </ZliderWrapper>
</template>
<script setup lang="ts">
import { ZliderItems } from "../interface/props";

const props = defineProps<ZliderItems>();
</script>
