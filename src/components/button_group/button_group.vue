<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'z-button-group',
  props: {
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/var.scss";
@import "../../sass/animation.scss";
.z-button-group {
  display: inline-block;
  .z-button {
    margin-left: -1px;
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:not(:first-child) {
      border-left: 1px solid rgba(255, 255, 255, 0.1);
    }
    &:not(:last-child) {
      // border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    &:hover,
    &:focus {
      position: relative;
      z-index: 1;
    }
    &:active {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
