<template>
  <div>
    <input ref="myinp" type="text" name="" id="" placeholder="qingshuru" v-if="isShow">
    <button v-else @click="btn">dianwojinxingsousuo</button>
  </div>
</template>

<script>

export default {
    data () {
        return {
            isShow:false
        }
    },
    methods:{
        async btn(){
            this.isShow = true;
            // this.$refs.myinp.focus()
            // this.$nextTick(() => {
            //     this.$refs.myinp.focus()
            // })
            await this.$nextTick()
            this.$refs.myinp.focus()
        }
    }
}
</script>

<style>

</style>