<template>
  <div>
    <p>dongtaizujian</p>
    <Demo1></Demo1>
    <hr />
    <hr />
    <UseSlot></UseSlot>
    <hr />
    <hr />
    <UseTable></UseTable>
    <hr>
    <hr>
    <UseDirective></UseDirective>
  </div>
</template>

<script>
import Demo1 from "./views/DemoOne.vue";
import UseSlot from "./views/UseSlot.vue";
import UseTable from "./views/UseTable.vue";
import UseDirective from "./views/UseDirective.vue";
export default {
  components: {
    Demo1,
    UseSlot,
    UseTable,
    UseDirective,
  },
};
</script>

<style>
</style>