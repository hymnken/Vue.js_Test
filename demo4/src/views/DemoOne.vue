<template>
  <div>
    <button @click="comName = 'UserName'">zhanghaomima</button>
    <button @click="comName = 'UserInfo'">gerenxinxi</button>

    <p>xiamianxianshi:</p>
    <div style="border:1px solid red;">
      <keep-alive>
      <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserName from '../components/UserName.vue'
import UserInfo from '../components/UserInfo.vue'
export default {
  data () {
    return {
      comName:"UserName"  
    }
  },
  components: {
    UserName,
    UserInfo
  }
}
</script>

<style>

</style>