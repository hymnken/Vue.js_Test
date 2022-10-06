<template>
  <div>
    <p>xuexishengmingzhouqi</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUl">
        <li v-for="(val,index) in arr" :key="index">
            {{val}}
        </li>
    </ul>
    <button @click="arr.push(1000)">+++++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "vuevevuevueue",
      arr:[5,8,2,3],
      timer:null
    };
  },
  beforeCreate() {
    console.log("beforecreate ok");
    console.log(this.msg);
  },
  created() {
    console.log("created ok");
    // console.log(this.msg);
    this.timer = setInterval(() => {
        console.log("hahaha");
    },1000)
  },
  beforeMount() {
    console.log("beforemount =====okok");
    console.log(document.getElementById("myP"));
  },
  mounted() {
    console.log("mounted");
    console.log(document.getElementById("myP"));
  },
  beforeUpdate () {
    console.log("beforeUpdate");
    console.log(document.querySelectorAll("#myUl>li")[4]);
  },
  updated () {
    console.log("updated");
    console.log(document.querySelectorAll("#myUl>li")[4]);
  },
  beforeDestroy(){
    console.log("beforedestory");
    clearInterval(this.timer)
  },
  destroyed(){
    console.log("destoryed");
  }
};
</script>

<style>
</style>