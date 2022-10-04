<template>
    <div>
      <ul>
        <li v-for="(val, index) in arr" :key="index">
          {{ val }}
        </li>
      </ul>
      <button @click="btn">charu</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        arr: ["re","rerrrrr","ujuj"],
      };
    },
    methods: {
      btn(){
        
        this.arr.splice(1,0,'xinlaide')
    },
  }
}
  </script>
  
  <style>
  </style>