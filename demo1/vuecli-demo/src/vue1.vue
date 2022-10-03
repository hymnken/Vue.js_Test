<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{obj.age>18? 'chengnian':'weicehngnian'}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "HEllo,vue",
      obj: {
        name: "vuety",
        age: 6,
      },
    };
  },
};
</script>

<style>

</style>