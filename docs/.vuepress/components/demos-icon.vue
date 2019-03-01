<template>
  <div>
    <div class="demo-warpper">
      <z-icon icon="settings"></z-icon>
      <z-icon icon="download"></z-icon>
      <z-icon icon="shares"></z-icon>
      <z-icon icon="left"></z-icon>
      <z-icon icon="right"></z-icon>
      <z-icon loading></z-icon>
      <div class="text">
        <h5>icon 图标</h5>
        <p>一些常用的语义化图标完善中...</p>
      </div>
      <pre><code v-text="iconCode"></code></pre>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Icon from '../../../src/components/icon/icon.vue';
  export default {
    components: {
      'z-icon': Icon
    },
    data() {
      return {
        iconCode: `    
    <z-icon icon="settings"></z-icon>
  <z-icon icon="download"></z-icon>
  <z-icon icon="shares"></z-icon>
  <z-icon icon="left"></z-icon>
  <z-icon icon="right"></z-icon>
  <z-icon loading></z-icon>`.trim()
      }
    },
  }
</script>

<style scoped lang="scss">
  .container {
    margin-top: 20px;
  }
  .demo-warpper {
    border: 1px solid #eaecef;
    padding: 24px;
    .text {
      h5 {
        font-size: 16px;
        margin: 20px 0 10px 0;
      }
      p {
        font-size: 14px;
        margin: 0;
      }
    }
  }
</style>