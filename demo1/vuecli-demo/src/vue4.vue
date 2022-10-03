<template>
  <div>
    <a @click="one" href="http://www.baidu.com">baidu</a>
    <hr />
    <a @click="two(10,$event)" href="http://www.taobao.com">taobao</a>
  </div>
</template>

<script>
export default {
  methods: {
    one(e) {
      e.preventDefault();
    },
    two(num, e) {
      e.preventDefault();
    }
  }
}

</script>

<style>

</style>