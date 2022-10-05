<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <!-- <li>水浒传<button @click="buy(index)">buy</button></li>
      <li>西游记<button @click="buy(index)">buy</button></li>
      <li>三国演艺<button @click="buy(index)">buy</button></li>
      <li>红楼梦<button @click="buy(index)">buy</button></li> -->
      <li v-for="(item, ind) in arr" :key="ind">
        <span>{{ item["name"] }}</span>
        <button @click="buy(ind)">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(item, index) in arr" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item["name"] }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.count }}</td>
        <td>{{ item.price * item.count }}</td>
      </tr>
    </table>
    <p>总价格为:{{ allprice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
    };
  },
  methods: {
    // shuihu() {
    //   let index = this.arr.findIndex((obj) => obj.name === "水浒传");
    //   this.arr[index].count++;
    // },
    // xiyou() {
    //   let index = this.arr.findIndex((obj) => obj.price === 192);
    //   this.arr[index].count++;
    // },
    // sanguo() {
    //   this.arr[2].count++;
    // },
    // honglou() {
    //   this.arr[3].count++;
    // },
    buy(index) {
      this.arr[index].count++;
    },
  },
  computed: {
    allprice() {
      return this.arr.reduce((sum, obj) => {
        return (sum += obj.price * obj.count);
      }, 0);
    },
  },
};
</script>

<style>
td,
th {
  border: 1px solid black;
}
</style>