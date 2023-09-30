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
import useZlider from "../composables/useZlider";

// import { ref } from "#imports";

const { incActiveSlide, decActiveSlide } = useZlider();

// const props = defineProps<TheSlider>();

const slidePrev = () => decActiveSlide();
const slideNext = () => incActiveSlide();

defineExpose({
  slidePrev,
  slideNext,
});
</script>
<style scoped lang="scss">
@import "../style/navigation.scss";
</style>
