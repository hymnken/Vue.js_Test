<template>
  <div>
    <p>原来的样子：{{ msg }}</p>
    -------------------------
    <p>fanzhuan: {{ msg | reverse('|') }}</p>
    -----------------------------------
    <p :title="msg | toUp | reverse('|')">shubiao</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "tgryryryr,ghhhhjghjgh",
    };
  },
  filters: {
    toUp(val){
        return val.toUpperCase()
    }
  }
};
</script>

<style>
</style>