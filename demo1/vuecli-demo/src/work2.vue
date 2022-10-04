<template>
  <div>
    <div>qingxuanze</div>
    <input type="checkbox" v-model="hobby" value="kehuan">kehuan
    <input type="checkbox" v-model="hobby" value="xiju">xiju
    <input type="checkbox" v-model="hobby" value="dongman">dongman
    <input type="checkbox" v-model="hobby" value="maoxian">maoxian
    <input type="checkbox" v-model="hobby" value="keji">keji
    <input type="checkbox" v-model="hobby" value="junshi">junshi
    <input type="checkbox" v-model="hobby" value="yule">yule
    <input type="checkbox" v-model="hobby" value="qiwen">qiwen
    <div>
        <ul>
            <li v-for="item in hobby" :key="item">
                <span>{{item}}</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
data () {
    return {
        hobby:[]
    }
},
methods: {
    
}
}
</script>

<style>

</style>