<template>
  <div>
    <div>
      <span>from</span>
      <select v-model="from">
        <option value="beijing">beijing</option>
        <option value="nanjing">nanjing</option>
        <option value="tianjin">tianjin</option>
      </select>
    </div>
    <div>
      <span>hobby</span>
      <input type="checkbox" value="chou" v-model="hobby">chou
      <input type="checkbox" value="he" v-model="hobby">he
      <input type="checkbox" value="xie" v-model="hobby">xie
    </div>
    <div>
      <span></span>
      <input type="radio" value="nan" name="sex" v-model="gender">nan
      <input type="radio" value="nv" name="sex" v-model="gender">nv
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      from: "",
      hobby: [],
      gender:"nan"

    }
  }
}
</script>

<style>

</style>