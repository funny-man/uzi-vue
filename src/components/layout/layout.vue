/*
 * @Author: zee
 * @Date: 2018-12-27 16:46:43
 * @Last Modified by: zee
 * @Last Modified time: 2018-12-27 19:17:03
 */
<template>
  <section class="z-layout" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'z-layout',
  props: {
    // 设置容器的垂直布局还是水平布局
    direction: String
  },
  mounted() {
    console.log(this.$slots.default[0]);
  },
  computed: {
    // 计算是否是垂直方向
    isVertical() {
      if (this.direction === 'vertical') return true;
      if (this.direction === 'horizontal') return false;
      return this.$slots && this.$slots.default
        ? this.$slots.default.some((node) => {
          const tag = node.componentOptions && node.componentOptions.tag;
          return tag === 'z-header' || tag === 'z-footer';
        })
        : false;
    }
  }
};
</script>
<style scoped lang="scss">
.z-layout {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  // min-width: 0;
}
.is-vertical {
  flex-direction: column;
}
</style>
