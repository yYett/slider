<template>
  <slot>
    <div
      class="the-pagination"
      :style="{
        '--pagination-bullets': getZlideProp('slidesNr')
      }"
    >
      <div :class="`the-pagination-${type ?? 'scrollbar'}`" />
    </div>
  </slot>
</template>
<script setup lang="ts">
import type{ ZliderPagination } from '../interface/props';
import useZlider from '../composables/useZlider';

const { getZlideProp } = useZlider();

const props = defineProps<ZliderPagination>();
</script>
<style scoped lang="scss">
@import "../style/pagination.scss";
</style>
