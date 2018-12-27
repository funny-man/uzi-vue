/*
 * @Author: zee
 * @Date: 2018-12-27 16:46:37
 * @Last Modified by: zee
 * @Last Modified time: 2018-12-27 19:40:34
 */
<template>
  <main class="z-main">
    <slot></slot>
  </main>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'z-main'
};
</script>
<style scoped lang="scss">
.z-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
}
</style>
