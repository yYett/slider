<template>
  <TheSlider>
    <template #items>
      <TheSliderItem
        v-for="i in 5"
        :key="i"
      >
        Slider {{ i }}
      </TheSliderItem>
    </template>
  </TheSlider>
</template>

<script setup>
import TheSlider from "../dist/runtime/components/TheSlider.vue";
</script>
