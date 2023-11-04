# Use:
TheZliderItems make use of [scoped slots](https://vuejs.org/guide/components/slots.html#scoped-slots)
```
  <TheZlider v-for="(j, i) in c" v-bind="zliderProps" :key="i">
    <TheZliderItems :items="[1,2,3]" v-slot="slideData">
      <p>My Slider cotent  {{ slideData.slide }} </p>
    </TheZliderItems>
    <TheZliderArrows />
    <TheZliderPagination />
  </TheZlider>
```
