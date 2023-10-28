<template>
  <slot>
    <button class="the-zlider-nav-prev" @click="slidePrev()" />
    <button class="the-zlider-nav-next" @click="slideNext()" />
  </slot>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { useTheZlider } from "../composables/useTheZlider";

// const props = defineProps<unknown>();

const intance = inject<string>("instance");
const { slidePrev, slideNext } = useTheZlider(intance!);

defineExpose({
  slidePrev,
  slideNext,
});
</script>
<style scoped lang="scss">
@import "../style/navigation.scss";
</style>
