<template>
  <div>
    <p>
        woshiyigegududeren
    </p>
    <h1 ref="myH" id="h"></h1>
  </div>
</template>

<script>
export default {
    mounted () {
        console.log(document.getElementById("h"));
        console.log(this.$refs.myH);
    }

}
</script>

<style>

</style>