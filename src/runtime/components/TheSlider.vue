<template>
  <div class="the-slider">
    <div class="the-items">
      <slot name="items" />
    </div>

    <slot name="navigation">
      <div class="the-navigation-prev" />
      <div class="the-navigation-next" />
    </slot>
    <slot name="pagination">
      <div class="the-slider-pagination" />
    </slot>
  </div>
</template>
<script setup></script>
