<template>
  <div class="the-zlider-items">
    <div v-for="(slide, i) in props.items" :key="i">
      <slot :slide="slide" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, onBeforeMount } from "vue";
import { useTheZlider } from "../composables/useTheZlider";
import type { TheZliderItems } from "../interface/TheZlider";

const props = defineProps<TheZliderItems>();
const intance = inject<string>("instance");
const { get, setSlidesNr, handleBreakpoint } = useTheZlider(intance!);

const update = (): void => {
  handleBreakpoint(window.innerWidth);
  setSlidesNr(props.items.length);
};

onBeforeMount(async () => {
  update();
  if (get("hasBreakpoints")) window.onresize = async () => update;
});
</script>
<style scoped lang="scss">
@import "../style/items.scss";
</style>
