<template>
  <slot>
    <div class="the-zlider-pagination">
      <div :class="`the-zlider-pagination-${type || 'scrollbar'}`" />
    </div>
  </slot>
</template>
<script setup lang="ts">
import { ZliderPagination } from "../interface/TheZlider";

defineProps<Partial<ZliderPagination>>();
</script>
<style scoped lang="scss">
@import "../style/pagination.scss";
</style>
