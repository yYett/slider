<template>
  <!-- <Zlider>
    <items>
      <myCard />
    </items>
    <Nav ref="nav" />
    <Pag ref="pag" />
  </Zlider>

  <Zlider>
    <wrapper>
      <myCard v-for="i in 5" :key="i" />
    </wrapper>
    <Nav ref="nav" />
    <Pag ref="pag" />
  </Zlider> -->

  <TheSlider>
    <TheSliderItems v-slot="slotProps" :items="[1, 2, 3, 4, 5, 6]">
      <h3>Slide - {{ slotProps.item }}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eum
        tempora laudantium aspernatur porro a deleniti totam, reiciendis,
        officiis esse corrupti. Velit aliquam tempore nihil.
      </p>
    </TheSliderItems>
    <TheSliderArrows>
      <!-- <p>myCustomNav</p> -->
    </TheSliderArrows>
  </TheSlider>
</template>

<script setup>
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
