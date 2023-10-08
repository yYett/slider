<template>
  <slot>
    <div
      class="the-pagination"
      :style="{
        '--pagination-bullets': get('slidesNr') || 0,
      }"
    >
      <div :class="`the-pagination-${type ?? 'scrollbar'}`" />
    </div>
  </slot>
</template>
<script setup lang="ts">
import { inject } from "vue";
import type { ZliderInjection, ZliderPagination } from "../interface/zlider";

defineProps<ZliderPagination>();

const { get } = inject<ZliderInjection>("zliderInstance")!;
</script>
<style scoped lang="scss">
@import "../style/pagination.scss";
</style>
