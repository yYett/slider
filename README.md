# Use:
TheZliderItems makes use of [scoped slots](https://vuejs.org/guide/components/slots.html#scoped-slots)
```
  const zliderProps = {
    mounted: true, // optional
    perView: 2,
    gap: 32,
    startAt: 0, // optional
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
  };

  <TheZlider v-bind="zliderProps" :key="i">
    <TheZliderItems :items="[1,2,3]" v-slot="slideData">
      <p>My Slider number  {{ slideData.slide }} </p>
    </TheZliderItems>
    <TheZliderArrows />
    <TheZliderPagination />
  </TheZlider>
```
