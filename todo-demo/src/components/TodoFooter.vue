<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>
        {{ ffarr.length }}
      </strong>
    </span>
    <ul class="filters" @click="fn">
      <li>
        <a
          :class="{ selected: isSel === 'all' }"
          href="javascript:;"
          @click="isSel = 'all'"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'no' }"
          href="javascript:;"
          @click="isSel = 'no'"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'yes' }"
          href="javascript:;"
          @click="isSel = 'yes'"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clearFn">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSel: "all",
    };
  },
  props: ["ffarr"],
  methods: {
    fn() {
      this.$emit("changeType", this.isSel);
    },
    clearFn(){
      this.$emit('clear')
    }
  },
};
</script>