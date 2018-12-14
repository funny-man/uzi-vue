<template>
  <svg class="icon" :class="{'is-loading':loading}">
    <use class="icon-font" :xlink:href="loading?'#i-loading':`#i-${icon}`"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'z-icon',
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../sass/var.scss';
@import '../../sass/animation.scss';
  .icon {
    width: 1em;
    height: 1em;
    line-height: 1;
    fill: currentColor;
    overflow: hidden;
  }
  .is-loading {
    @include rotate-line;
  }
</style>
