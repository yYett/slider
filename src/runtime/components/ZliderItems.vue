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
import { inject } from "vue";
import type { ZliderInjection, ZliderItems } from "../interface/zlider";

const props = defineProps<ZliderItems>();
const { setSlidesNr } = inject<ZliderInjection>("zliderInstance")!;

setSlidesNr(props.items.length);
</script>
