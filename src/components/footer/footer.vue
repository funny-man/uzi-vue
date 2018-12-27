/*
 * @Author: zee
 * @Date: 2018-12-27 16:46:54
 * @Last Modified by: zee
 * @Last Modified time: 2018-12-27 19:38:08
 */
<template>
  <footer class="z-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'z-footer',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
};
</script>
<style scoped lang="scss">
.z-footer {
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
