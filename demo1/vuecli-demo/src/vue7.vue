<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="btn">12333</button>
  </div>
</template>

<script>
export default {
  data() {
    return{
      msg: 'hello '

    }
  },
  methods: {
    btn() {
      let arr = this.msg.split('')
      arr.reverse()
      this.msg = arr.join('')
    }
  }
}
</script>

<style>

</style>