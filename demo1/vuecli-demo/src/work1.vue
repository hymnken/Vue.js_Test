<template>
  <div>
    <span>welcome</span>
    <div class="t1">苹果10￥/斤,&lt;折扣 8折&gt;</div>
    <div>请输入斤数 <input type="text" v-model.lazy="num"></div>
    <div><button @click="cli()">click</button></div>
    <div>zongjia:{{num * 10}}$yuan zhehoujia:{{(num*10) * 0.8}}$yuan shengle:{{(num * 10)-((num*10) * 0.8)}}$yuan</div>
  </div>
</template>

<script>
export default {
data () {
  return {
    num:"",
    zongjia:"",
    zhehoujia:"",
    shengle:""
  }
},
methods: {
  cli(){
    this.num = num
  }
}
}
</script>

<style>

</style>