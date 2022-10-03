<template>
  <div>
    <a v-bind:href="url">baidu</a>
    <img :src="imgUrl" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://www.baidu.com',
      imgUrl:'https://book.itheima.net/uploads/images/subject/176%C3%97176/java.png'
      }
    }
  }

</script>

<style>

</style>