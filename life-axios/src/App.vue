<template>
  <div>
    <h1>Axios use</h1>
    <UseAxios></UseAxios>
    <hr />
    <hr />
    <More></More>
    <hr />
    <hr />
    <Demo ref="de"></Demo>
    <hr />
    <hr />
    <Tick></Tick>
    <hr />
    <hr />

  <ComName></ComName>
  </div>
</template>

<script>
import UseAxios from "./components/UseAxios.vue";
import More from "./components/more.vue";
import Demo from "./components/demo.vue";
import Tick from "./components/Tick.vue";
import Com from "./components/com.vue";
export default {
  components: {
    UseAxios,
    More,
    Demo,
    Tick,
    [Com.name]:Com
  },
  mounted() {
    let obj = this.$refs.de;
    obj.fn();
  },
};
</script>

<style>
</style>