<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template v-slot:body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputVisible"
            v-focus
            @blur="scope.row.inputVisible=false"
            @keydown.enter="enterFn(scope.row)"
            v-model="scope.row.inputValue"
            @keydown.esc="scope.row.inputValue=''"
          />
          <button style="display: block" 
          v-else
          class="btn btn-primary btn-sm add-tag"
          @click="scope.row.inputVisible = true">
            +Tag
          </button>

          <span
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            Delete
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";

export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    axios({
      url: "/api/goods",
    }).then((res) => {
      this.list = res.data.data;
    });
  },
  methods: {
    delFn(id) {
      let index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
    enterFn(obj){
      console.log(obj.inputValue);
      if(obj.inputValue.trim().length === 0){
        alert("qingshuru")
        return
      }

      obj.tags.push(obj.inputValue)
      obj.inputValue=''
    }
  },
};
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>