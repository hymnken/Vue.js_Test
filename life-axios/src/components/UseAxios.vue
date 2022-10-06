<template>
  <div>
    <p>1:huoqusuoyoutushu</p>
    <button @click="getAllFn">chakan</button>
    <hr>
    <p>chaxunshuji</p>
    <input type="text" placeholder="qingshuru" v-model="bName">
    <button @click="findFn">chaxun</button>
    <hr>
    <p>3 xinzengtushu</p>
    <input type="text" placeholder="shuming" v-model="obj.bookname">
    <input type="text" placeholder="zuozhe" v-model="obj.author">
    <input type="text" placeholder="chubanshe" v-model="obj.publisher">
    <button @click="sendFn">fabu</button>
  </div>
</template>
<script>
import axios from 'axios'
axios.defaults.baseURL ="http://123.57.109.30:3006"
export default {
    data () {
        return {
            bName:"",
            obj:{
                bookname:"",
                author:"",
                publisher:""
            }     
        }
    },
    methods: {
        getAllFn(){
            axios({
                url:"/api/getbooks",
                method:"GET",
            }).then(res =>{
                console.log(res);
            })
        },
        findFn(){
            axios({
                url:"/api/getbooks",
                method:"GET",
                params:{
                    bookname:this.bName
                }
            }).then(res =>{
                console.log(res);
            })
        },
        sendFn(){
            axios({
                url:"/api/addbook",
                method:"POST",
                data:{
                    appkey:"7250d3eb-18e1-41bc-8bb2-11483665535a",
                    // bookname:this.obj.bookname,
                    ...this.obj
                }
            })
        }
    }
}
</script>
<style>
</style>