<template>
  <ZliderWrapper>
    <div
      v-for="(item, i) in props.items"
      :key="i"
    >
      <slot :item="item" />
    </div>
  </ZliderWrapper>
</template>
<script setup lang="ts">
import type { ZliderItems } from "../interface/props";
import useZlider from "../composables/useZlider";

const props = defineProps<ZliderItems>();

const { setSlidesNr } = useZlider();

setSlidesNr(props.items.length);
</script>
