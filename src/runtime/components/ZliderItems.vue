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
import type { ZliderItems } from "../interface/zlider";

const props = defineProps<ZliderItems>();
const { setSlidesNr } = inject("instance");

setSlidesNr(props.items.length);
</script>
