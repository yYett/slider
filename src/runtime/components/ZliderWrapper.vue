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
import { ZliderInjection } from "../interface/zlider";

const wrapperRef = ref();
const { setSlidesNr } = inject<ZliderInjection>("zliderInstance")!;

onMounted(() => {
  const length = wrapperRef.value.children.length;
  setSlidesNr(length);
});
</script>
