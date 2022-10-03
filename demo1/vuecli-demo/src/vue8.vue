<template>
  <div>
    <span>username:</span>
    <input type="text" v-model="username">
    <input type="password" v-model="pass">
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pass:""
    }
  }
}
</script>

<style>

</style>