<template>
  <div>
    <van-cell
      center
      :title="name"
      :label="author + ' - ' + name"
      :key="id"
    >
      <template #right-icon>
        <van-icon name="play" size="0.6rem" 
        @click="playFn"/>
      </template>
    </van-cell>
  </div>
</template>

<script>

export default {
  props: {
    name: String,
    author:String,
    id:Number
  },
  methods: {
    playFn(){
        this.$router.push({
            path:'/play',
            query:{
                id:this.id
            }
        })
    }
  }
};
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid lightgrey;
}
</style>