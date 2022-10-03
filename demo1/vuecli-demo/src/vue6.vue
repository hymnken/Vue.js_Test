<template>
  <div>
    <input type="text" @keydown.enter="enterFn">
    <hr>
    <input type="text" @keydown.esc="escFn">
  </div>
</template>

<script>
export default {
    methods: {
        enterFn() {
            console.log('2442');
        },
        escFn() {
            console.log('34343343');
        }
    }
}
</script>

<style>

</style>