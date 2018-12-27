/*
 * @Author: zee
 * @Date: 2018-12-27 16:47:00
 * @Last Modified by: zee
 * @Last Modified time: 2018-12-27 19:40:04
 */
<template>
  <aside class="z-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'z-aside',
  props: {
    width: {
      type: String,
      default: '360px'
    }
  }
};
</script>
<style scoped lang="scss">
.z-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
