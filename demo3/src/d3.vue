<template>
  <div>
    <Product title="fdaf" price="250" intro="ffgdgdgfdgfd"></Product>
    <Product title="fdaf" price="250" intro="ffgdgdgfdgfd"></Product>
    <Product title="fdaf" price="250" :intro="str"></Product>
  </div>
</template>

<script>
import Product from "./components/product.vue";
export default {
    data () {
        return {
            str:"gdgdfgdfgdgdfgfdgfd"
        }
    },
  components: {
    Product,
  },
};
</script>

<style>
</style>