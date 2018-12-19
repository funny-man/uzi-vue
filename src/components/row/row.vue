<template>
<div class="row">
  <slot></slot>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'z-row',
  components: {
  },
  props: {
  }
};
</script>

<style scoped lang="scss">
  @import '../../sass/var.scss';
  @import '../../sass/animation.scss';
  @import "../../sass/utils.scss";
  .row {
    display: flex;
  }
</style>
