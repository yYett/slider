<template>
  <slot>
    <div
      class="the-zlider-pagination"
      :style="{
        '--pagination-bullets': get('slidesNr') || 0,
      }"
    >
      <div :class="`the-pagination-${type || 'scrollbar'}`" />
    </div>
  </slot>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { useTheZlider } from "../composables/useTheZlider";
import { ZliderPagination } from "../interface/TheZlider";

defineProps<Partial<ZliderPagination>>();

const intance = inject<string>("instance");
const { get } = useTheZlider(intance!);
</script>
<style scoped lang="scss">
@import "../style/pagination.scss";
</style>
