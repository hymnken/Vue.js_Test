<template>
  <div>
    <MyHeader 
    :background="'blue'" 
    fontColor="white" 
    title="TabBar"
    ></MyHeader>
    <div class="main">
      <component :is="comName">
      </component>
    </div>

    <MyTabBar :arr="tabList"
    @changeCom="changeConFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyGoodsList from "./views/MyGoodsList.vue"
import MyGoodsSearch from "./views/MyGoodsSearch.vue"
import MyUserInfo from "./views/MyUserInfo.vue"
export default {
  data() {
    return {
      comName:"MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  methods: {
    changeConFn(cName){
      this.comName = cName
    }
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },
};
</script>

<style scoped>
.main{
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>