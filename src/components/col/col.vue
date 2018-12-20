<template>
<div class="z-col">
  <slot></slot>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'z-col',
  components: {
  },
  computed: {
    // 通过$parent获取父组件的gutter值
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  props: {
    span: {
      type: [Number, String]
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../sass/var.scss';
  @import '../../sass/animation.scss';
  @import "../../sass/utils.scss";
  .z-col {
    width: 100%;
    box-sizing: border-box;
  }
</style>
