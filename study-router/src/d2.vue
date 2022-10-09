<template>
  <div>
    <div class="footer_wrap">
      <span @click="btn('/find','Find')">发现音乐</span>
      <span @click="btn('/my','My')">我的音乐</span>
      <span @click="btn('/part','Part')">朋友</span>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(targetPath,targetName){
      this.$router.push({
        // path:targetPath
        name:targetName
      })
    }
  }
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}

.footer_wrap .router-link-active{
  color: white;
  background: black;
}
</style>