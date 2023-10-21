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
import { inject } from "vue";
import { ZliderInjection } from "../interface/zlider";
// const props = defineProps<unknown>();

const { slideNext, slidePrev } = inject<ZliderInjection>("zliderInstance")!;

defineExpose({
  slidePrev,
  slideNext,
});
</script>
<style scoped lang="scss">
@import "../style/navigation.scss";
</style>
