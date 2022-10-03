<template>
  <div>
    <div @click="fatherFn">
        <p @click.stop="oneFn">.stop</p>
        <a href="http://www.baidu.com" @click.prevent.stop>
            123
        </a>
        <p @click.once="twoFn">42342</p>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        fatherFn() {
            console.log('1111111');
        },
        oneFn() {
            console.log('11123133');
        },
        twoFn() {
            console.log('34');
        }
    }
}
</script>

<style>

</style>