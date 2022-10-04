<template>
  <div>
    <h1 v-show="isShow">woshih11</h1>
    <h2 v-if="isIf">woshih22</h2>
    <div>
      <p v-if="age >= 18">chengnianle</p>
      <p v-else>NONO</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      isIf: false,
      age: 15,
    };
  },
};
</script>

<style>
</style>