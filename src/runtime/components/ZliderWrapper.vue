<template>
  <div
    ref="wrapperRef"
    class="the-items"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, inject, onMounted } from "vue";

const wrapperRef = ref();
const { setSlidesNr } = inject("instance");

onMounted(() => {
  const length = wrapperRef.value.children.length;
  setSlidesNr(length);
});
</script>
