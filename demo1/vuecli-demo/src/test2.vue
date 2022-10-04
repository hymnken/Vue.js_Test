<template>
  <div>
    <ul>
      <li v-for="(item, ind) in arr" :key="item">
        {{ item }} <button @click="show(ind)">shanchu</button>
      </li>
    </ul>
    <div>
      <button @click="shengcheng">dianwo</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 5, 9, 4],
    };
  },
  methods: {
    shengcheng() {
      let i = Math.floor(Math.random() * 100 + 1);
    //   console.log(i);
      this.arr.push(i);
    //   console.log(ind);
    },
    show(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>

<style>
</style>