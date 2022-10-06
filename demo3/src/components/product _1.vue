<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
    <p><button @click="kanFn">kanyiyuan</button>
    </p>
  </div>
</template>

<script>
import eventBus from '../EventBus'
export default {
  props: ["index","title", "price", "intro"],
  methods: {
    // subFn() {
    //   this.price = this.price - 1;
    // },
  kanFn(){
    // this.$emit("subprice",this.index,1)
    eventBus.$emit("send",this.index,1)
  }
  },
};
</script>
 
<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>