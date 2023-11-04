<template>
  <TheZlider v-for="(j, i) in c" v-bind="zliderProps" :key="i">
    <TheZliderItems v-slot="slideData" :items="[1, 2, 3, 5, 6, 7]">
      {{ slideData }}
    </TheZliderItems>
    <TheZliderArrows />
    <TheZliderPagination />
  </TheZlider>
</template>

<script setup lang="ts">
import { ref } from "vue";

const zliderProps = ref({
  mounted: true,
  perView: 2,
  gap: 64,
  startAt: 2,
  breakpoints: {
    456: {
      perView: 4,
      gap: 24,
    },
    950: {
      perView: 4,
      gap: 24,
    },
  },
});

const c = ref(1);

// setInterval(() => c.value++, 5000);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.test {
  box-shadow: #64646f8a 0px 7px 29px 0px;
  z-index: 1;
  position: relative;
}
</style>
