<template>
    <div>
      <ul>
        <li v-for="obj in arr" :key="obj.id">
          {{ obj.name }}
          <input type="text">
        </li>
      </ul>
      <button @click="btn">charu</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        arr: [
        {
          name: '老大',
          id: 50
        },
        {
          name: '老二',
          id: 31
        },
        {
          name: '老三',
          id: 10
        }
      ],
      };
    },
    methods: {
      btn(){
        
        this.arr.splice(1,0,{
            id:19,
            name:'xinlaide'
            
        })
    },
  }
}
  </script>
  
  <style>
  </style>