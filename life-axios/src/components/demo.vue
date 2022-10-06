<template>
  <div>
    <p>woshidemozujian</p>
    <hr />
    <hr />
    <p ref="myP">{{ count }}</p>
    <button @click="btn">+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      console.log("zheshizujiandefangfa");
    },
    btn() {
      this.count++;
      //   console.log(this.$refs.myP.innerHTML);
      this.$nextTick(() => {
        console.log("DOMgengxinwan");
        console.log(this.$refs.myP.innerHTML);
      });
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>