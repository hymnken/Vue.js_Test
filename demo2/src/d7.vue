<template>
  <div>
    <p>
      <!-- {{num}}
         -->
    </p>

    <p>{{ reversemsg }}</p>
    <p>{{ reversemsg }}</p>
    <p>{{ reversemsg }}</p>
    <p>{{ getmsg() }}</p>
    <p>{{ getmsg() }}</p>
    <p>{{ getmsg() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
      msg: "ghtuhutg,kj",
    };
  },
  computed: {
    // num(){
    //     return this.a + this.b
    // }

    reversemsg() {
        console.log('com');
      return this.msg.split("").reverse().join("");
    },
  },

  methods: {
    getmsg() {
        console.log('get');
      return this.msg.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>