<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="reBtn">fanzhuan</button>
    <button @click="jBtn">jiequqiansange</button>
    <button @click="upBtn">gaibian</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [5, 3, 9, 2, 1],
    };
  },
  methods: {
    reBtn(){
      this.arr.reverse();
    },
    jBtn(){
      this.arr = this.arr.slice(0,3)
    },
    upBtn(){
      this.$set(this.arr,0,1000)
    }
  },
};
</script>

<style>
</style>