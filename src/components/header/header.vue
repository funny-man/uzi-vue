/*
 * @Author: zee
 * @Date: 2018-12-27 16:46:48
 * @Last Modified by: zee
 * @Last Modified time: 2018-12-27 19:39:07
 */
<template>
  <header class="z-header" :style="{ height }">
    <slot></slot>
  </header>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'z-header',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
};
</script>
<style scoped lang="scss">
.z-header {
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
