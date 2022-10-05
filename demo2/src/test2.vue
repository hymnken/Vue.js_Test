<template>
  <div>
    <div
      v-for="(item, index) in num"
      :key="index"
      style="display: inline-block"
    >
      <input type="checkbox" v-model="savenum" :value="item" />
      <span>{{ item }}</span>
    </div>
    <div>
      <span>leijiawei: {{ allSum }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      savenum: [],
    };
  },
  computed: {
    allSum() {
      return this.savenum.reduce((sum, val) => {
        return (sum += val);
      }, 0);
    },
  },
};
</script>

<style>
</style>