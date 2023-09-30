<template>
  <div
    ref="wrapperRef"
    class="the-items"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import useZlider from "../composables/useZlider";

const { setSlidesNr } = useZlider();
const wrapperRef = ref();

onMounted(() => {
  const length = wrapperRef.value.children.length;
  setSlidesNr(length);
});
</script>
