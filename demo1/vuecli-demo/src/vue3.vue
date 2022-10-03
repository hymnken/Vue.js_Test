<template>
  <div>
    <p>count:{{count}}</p>
    <button v-on:click="count+=1">+1</button>
    <button v-on:click="addFn">+1</button>
    <button v-on:click="addCountFn(5)">+5</button>
    <button @click="MinusFn()">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    addFn() {
      this.count++
    },
    addCountFn(num) {
      this.count += num
    },
    MinusFn() {
      this.count-=1
    }

  }
}

</script>

<style>

</style>