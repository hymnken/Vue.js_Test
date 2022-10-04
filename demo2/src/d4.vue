<template>
  <div>
    <p :class="{ redStr: bool }" >gddgfdg</p>
    <p :style="{ backgroundColor:'pink'}">5414gyufsgusfgsd</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true,
    };
  },
};
</script>

<style>
.redStr {
  color: red;
}
</style>