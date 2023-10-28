<template>
  <div class="the-zlider-items">
    <div v-for="(slide, i) in props.items" :key="i">
      <slot :slide="slide" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { useTheZlider } from "../composables/useTheZlider";
import type { TheZliderItems } from "../interface/TheZlider";

const props = defineProps<TheZliderItems>();
const intance = inject<string>("instance");
const { setSlidesNr } = useTheZlider(intance!);

setSlidesNr(props.items.length);
</script>
