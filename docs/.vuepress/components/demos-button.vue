<template>
  <div class="container">
    <div class="demo-warpper">
      <z-button type="primary" size="medium" shadow>Primary</z-button>
      <z-button size="medium" shadow>Default</z-button>
      <z-button type="primary" ghost size="medium" shadow>幽灵按钮</z-button>
      <z-button type="primary" dashed size="medium" shadow>虚线按钮</z-button>
      <div class="text">
        <h5>按钮类型</h5>
        <p>按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。</p>
      </div>
      <pre>
        <code v-text="buttonType"></code>
      </pre>
    </div>

    <div class="demo-warpper">
      <z-button type="primary" ghost>Large</z-button>
      <z-button type="primary" ghost size="medium">Medium</z-button>
      <z-button type="primary" ghost size="small">Small</z-button>
      <div class="text">
        <h5>按钮尺寸</h5>
        <p>按钮有大、中、小三种尺寸。通过设置 size 为 Medium small 分别把按钮设为中、小尺寸。若不设置 size，则尺寸为大</p>
      </div>
      <pre>
        <code v-text="buttonSize"></code>
      </pre>
    </div>

    <div class="demo-warpper">
      <z-button type="primary" ghost>默认</z-button>
      <z-button type="primary" ghost round>Round</z-button>
      <z-button type="primary" ghost edge>Edge</z-button>
      <!-- <z-button type="primary" loading ghost circle></z-button> -->
      <div class="text">
        <h5>按钮倒角</h5>
        <p>按钮有正常、直角、圆角、圆形。通过设置 round edge circle 把按钮设置为圆角 直角 圆形 默认为小倒角</p>
      </div>
      <pre>
        <code v-text="buttonSize"></code>
      </pre>
    </div>
  </div>
</template>
<script src="//at.alicdn.com/t/font_930724_t8wqkiim6g.js"></script>
<script>
  import Button from '../../../src/components/button/button.vue';
  import Icon from '../../../src/components/icon/icon.vue';
  import ButtonGroup from '../../../src/components/button_group/button_group.vue';
  export default {
    components: {
      'z-button': Button,
      'z-icon': Icon,
      'z-button-group': ButtonGroup
    },
    data() {
      return {
        isLoading: false,
        buttonType:`    
    <z-button type="primary" size="medium" shadow>Primary</z-button>
    <z-button size="medium" shadow>Default</z-button>
    <z-button type="primary" ghost size="medium" shadow>幽灵按钮</z-button>
    <z-button type="primary" dashed size="medium" shadow>虚线按钮</z-button>`,
        buttonSize:`
    <z-button type="primary" ghost>Large Button</z-button>
    <z-button type="primary" ghost size="medium">Medium Button</z-button>
    <z-button type="primary" ghost size="small">Small Button</z-button>`,
      };
    },
    methods: {
      goShares() {
        // eslint-disable-next-line
        console.log('分享成功');
        this.isLoading = !this.isLoading;
      }
    },
  }
</script>

<style lang="scss">
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

