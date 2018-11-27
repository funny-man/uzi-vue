<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'z-button-group',
  props: {
  },
};
</script>

<style scoped lang="scss">
@import "../../sass/var.scss";
@import "../../sass/animation.scss";
.z-button-group {
  .z-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: $radius-size-base;
      border-bottom-left-radius: $radius-size-base;
    }
    &:last-child {
      border-top-right-radius: $radius-size-base;
      border-bottom-right-radius: $radius-size-base
    }
  }
}
</style>
