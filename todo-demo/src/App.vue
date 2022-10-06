<template>
  <div class="todoapp">
    <TodoHeader :arr="list" @create="createFn" ></TodoHeader>
    <TodoMain :arr="showArr" @del="deleFn"></TodoMain>
    <TodoFooter
      :ffarr="showArr"
      @changeType="typeFn"
      @clear="clearFun"
    ></TodoFooter>
  </div>
</template>

<script>
import "./styles/base.css";
import "./styles/index.css";

import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem("todolist")) || [],
      getSel: "all",
    };
  },
  methods: {
    createFn(taskName) {
      let id =
        this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1;
      this.list.push({
        id: id,
        name: taskName,
        isDone: false,
      });
    },
    deleFn(theId) {
      let index = this.list.findIndex((obj) => obj.id === theId);
      this.list.splice(index, 1);
    },
    typeFn(str) {
      this.getSel = str;
    },
    clearFun() {
      this.list = this.list.filter((obj) => obj.isDone == false);
    },
  },
  computed: {
    showArr() {
      if (this.getSel === "yes") {
        return this.list.filter((obj) => obj.isDone === true);
      } else if (this.getSel === "no") {
        return this.list.filter((obj) => obj.isDone === false);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem("todolist", JSON.stringify(this.list));
      },
    },
  },
};
</script>

<style>
</style>