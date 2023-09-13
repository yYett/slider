<template>
  <slot>
    <button
      class="the-navigation-prev"
      @click="slidePrev()"
    />
    <button
      class="the-navigation-next"
      @click="slideNext()"
    />
  </slot>
</template>
<script setup lang="ts">
// import { ref } from "#imports";
import { slideNext, slidePrev } from "../utils/navigation";

// const props = defineProps<TheSlider>();

defineExpose({
  slidePrev,
  slideNext,
});
</script>
<style scoped lang="scss">
@import "../style/navigation.scss";
</style>
