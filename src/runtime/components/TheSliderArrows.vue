<template>
  <slot>
    <div class="the-navigation-prev" />
    <div class="the-navigation-next" @click="slideNext()" />
  </slot>
</template>
<script setup lang="ts">
// import { ref } from "#imports";
import { slideNext } from "../utils/navigation";

// const props = defineProps<TheSlider>();

defineExpose({
  slideNext,
});
</script>
<style scoped lang="scss">
@import "../style/navigation.scss";
</style>
