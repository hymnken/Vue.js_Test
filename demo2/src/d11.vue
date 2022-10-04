<template>
  <div>
    <!-- <input type="text" v-model="name"> -->
    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // name:""
      user: {
        name: "",
        age: 0,
      },
    };
  },
  watch: {
    // name(newVal,oldVal){
    //     console.log(newVal,oldVal);
    //     // console.log(oldVal);
    // }
    user: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
    },
  },
};
</script>

<style>
</style>