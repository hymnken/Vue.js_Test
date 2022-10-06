<template>
  <div>
    <h1>1.shengmingzhouqi</h1>
    <Life v-if="isShow"></Life>
    <button @click="isShow = false">xiaohui</button>
  </div>
</template>

<script>
import Life from './components/Life.vue'
export default {
  data () {
    return {
      isShow:true
    }
  },
  components: {
    Life
  }
}
</script>

<style>

</style>