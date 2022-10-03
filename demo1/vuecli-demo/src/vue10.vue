<template>
  <div>
    <p v-text="str"></p>
    <p v-html="str"> </p>

  </div>
</template>
<script>
export default {
  data() {
    return {
      str : "<span>woshi</span>"
    }
  }
}
</script>

<style>

</style>