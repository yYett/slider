<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="the-slider">
    <slot />
  </div>
</template>
<script setup lang="ts">
// import { ref } from "#imports";
import { Zlider } from "../interface/props";

const props = defineProps<Zlider>();
</script>
