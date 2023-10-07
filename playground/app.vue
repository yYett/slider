<template>
  <Zlider
    v-for="i in 2"
    :key="i"
    :options="{
      perView: 2,
      gap: 64,
    }"
  >
    i
    {{ i }}
    <ZliderItems
      v-slot="slotProps"
      :items="[1, 2, 3, 4, 5, 6]"
    >
      <h3>Slide - {{ slotProps.item }}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eum
        tempora laudantium aspernatur porro a deleniti totam, reiciendis,
        officiis esse corrupti. Velit aliquam tempore nihil.
      </p>
    </ZliderItems>
    <ZliderArrows />
    <ZliderPagination />
  </Zlider>
</template>

<script setup lang="ts">
//
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
