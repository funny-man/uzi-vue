/*
 * @Author: zee
 * @Date: 2018-12-28 15:11:18
 * @Last Modified by: zee
 * @Last Modified time: 2018-12-28 18:03:21
 */
<template>
  <div class="z-toast">
    {{txt}}
    <slot></slot>  
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'z-toast',
  props: {
    txt: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
</style>