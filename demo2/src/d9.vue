<template>
  <div>
    name: <input type="text" v-model="full">
  </div>
</template>

<script>
export default {
    computed: {
        full:{
            set(val){
                console.log(val);
            },
            get(){
                console.log('ok');
                return 'wumingshi'
            }
        }
    }
}
</script>

<style>

</style>