<template>
<div class="z-col"
     :class="{[`z-col-${span}`]:true}"
     :style="`paddingLeft:${gutter?gutter/2:0}px;paddingRight:${gutter?gutter/2:0}px`"
>
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
      while (parent && parent.$options.name !== 'z-row') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter * 1 : 0;
    }
  },
  props: {
    span: {
      type: [Number, String],
      default: 0
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../sass/var.scss';
  @import '../../sass/animation.scss';
  @import "../../sass/utils.scss";
  .z-col {
    display: block;
    box-sizing: border-box;
  }

  .z-col-0 {
    display: none;
  }
  @for $n from 1 through 24 {
    .z-col-#{$n} {
      width: ($n/24)*100%;
      float: left;
    }
  }
</style>
