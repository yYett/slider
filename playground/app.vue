<template>
  <TheSlider>
    <template #items>
      <TheSliderItem class="test" v-for="i in 5" :key="i">
        Slider {{ i }} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Saepe eum tempora laudantium aspernatur porro a deleniti totam,
        reiciendis, officiis esse corrupti. Velit aliquam tempore nihil.
      </TheSliderItem>
    </template>
  </TheSlider>
</template>

<script setup>
import TheSlider from "../dist/runtime/components/TheSlider.vue";
import TheSliderItem from "../dist/runtime/components/TheSliderItem.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.test {
  box-shadow: #64646f8a 0px 7px 29px 0px;
  z-index:1;
  position: relative;
}
</style>
