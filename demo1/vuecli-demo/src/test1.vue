<template>
  <div>
    <ul>
        <li v-for="(item,index) in arr" :key="index">
            {{item}}
        </li>
    </ul>
    <div>
      <button @click="cli">zouyizou</button>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            arr:['meinv','shuaige','chengxuyuan'],
        }
    },
    methods: {
        cli(){
          this.arr.push(this.arr[0])
          // console.log(arr);
          this.arr.shift()
        }
    }
}
</script>

<style>

</style>