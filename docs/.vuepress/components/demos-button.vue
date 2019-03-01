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
      <pre><code v-text="buttonType"></code></pre>
    </div>

    <div class="demo-warpper">
      <z-button type="primary" ghost>Large</z-button>
      <z-button type="primary" ghost size="medium">Medium</z-button>
      <z-button type="primary" ghost size="small">Small</z-button>
      <div class="text">
        <h5>按钮尺寸</h5>
        <p>按钮有大、中、小三种尺寸。通过设置 size 为 Medium small 分别把按钮设为中、小尺寸。若不设置 size，则尺寸为大</p>
      </div>
      <pre><code v-text="buttonSize"></code></pre>
    </div>

    <div class="demo-warpper">
      <z-button type="primary" ghost>默认</z-button>
      <z-button type="primary" ghost round>Round</z-button>
      <z-button type="primary" ghost edge>Edge</z-button>
      <z-button type="primary" loading ghost circle></z-button>
      <div class="text">
        <h5>按钮倒角</h5>
        <p>按钮有正常、直角、圆角、圆形。通过设置 round edge circle 把按钮设置为圆角 直角 圆形 默认为小倒角</p>
      </div>
      <pre><code v-text="buttonBorder"></code></pre>
    </div>

    <div class="demo-warpper">
      <z-button type="primary" ghost loading>Loading</z-button>
      <z-button type="primary" ghost circle @click="goShares" :loading="isLoading" icon="shares">
      </z-button>
      <z-button type="primary" ghost @click="goShares" :loading="isLoading" icon="shares">
      </z-button>
      <div class="text">
        <h5>加载状态</h5>
        <p>添加 loading 属性即可让按钮处于加载状态</p>
      </div>
      <pre><code v-text="buttonLoading"></code></pre>
    </div>

    <div class="demo-warpper">
      <z-button-group style="margin-right:20px;margin-bottom:20px">
        <z-button round icon="left">上一页</z-button><z-button round icon="shares"></z-button><z-button round icon="right" iconPosition="right">下一页</z-button>
      </z-button-group>
      <z-button-group>
        <z-button size="medium" ghost icon="left">上一页</z-button><z-button size="medium" ghost icon="shares"></z-button><z-button size="medium" ghost icon="right" iconPosition="right">下一页</z-button>
      </z-button-group>
      <z-button-group>
        <z-button type="primary" size="small" icon="left">上一页</z-button><z-button type="primary" size="small" icon="shares"></z-button><z-button type="primary" size="small" icon="right" iconPosition="right">下一页</z-button>
      </z-button-group>
      <div class="text">
        <h5>组合按钮</h5>
        <p>可以将多个 Button 放入 Button.Group 的容器中组合使用</p>
      </div>
      <pre><code v-text="buttonGroup"></code></pre>
    </div>

    <div class="demo-warpper">
      <z-button class="top" block type="primary" size="medium" shadow>Primary</z-button>
      <z-button class="top" block shadow size="medium">Default</z-button>
      <z-button class="top" block ghost size="medium" shadow>幽灵按钮</z-button>
      <z-button class="top" block dashed size="medium" shadow>虚线按钮</z-button>
      <div class="text">
        <h5>块状按钮</h5>
        <p>按钮为容器最大宽度</p>
      </div>
      <pre><code v-text="buttonBlock"></code></pre>
    </div>

    <div class="demo-warpper">
      <z-button class="my-icon" round type="success" size="small">success</z-button>
      <z-button class="my-icon" shadow  round type="warning" size="small">warning</z-button>
      <z-button class="my-icon" round type="error" size="small">error</z-button>
      <div class="top"></div>
      <z-button class="my-icon" ghost size="small">+ 关注</z-button>
      <z-button class="my-icon" round ghost type="success" size="small">success</z-button>
      <z-button class="my-icon" shadow edge ghost type="warning" size="small">warning</z-button>
      <z-button class="my-icon" ghost type="error" size="small">error</z-button>
      <div class="top"></div>
      <z-button class="my-icon" dashed size="small">Small Button</z-button>
      <z-button class="my-icon" dashed round type="success" size="small">success</z-button>
      <z-button class="my-icon" shadow dashed edge type="warning" size="small">warning</z-button>
      <z-button class="my-icon" dashed type="error" size="small">error</z-button>
    <div class="gap"/>
      <div class="text">
        <h5>辅助按钮</h5>
        <p>一些警告提示类按钮</p>
      </div>
      <pre><code v-text="buttonBlock"></code></pre>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/components/button/button.vue';
  import ButtonGroup from '../../../src/components/button_group/button_group.vue';
  export default {
    components: {
      'z-button': Button,
      'z-button-group': ButtonGroup
    },
    data() {
      return {
        isLoading: false,
        buttonType:`    
    <z-button type="primary" size="medium" shadow>Primary</z-button>
  <z-button size="medium" shadow>Default</z-button>
  <z-button type="primary" ghost size="medium" shadow>幽灵按钮</z-button>
  <z-button type="primary" dashed size="medium" shadow>虚线按钮</z-button>`.trim(),
        buttonSize:`
    <z-button type="primary" ghost>Large Button</z-button>
  <z-button type="primary" ghost size="medium">Medium Button</z-button>
  <z-button type="primary" ghost size="small">Small Button</z-button>`.trim(),
        buttonBorder:`
    <z-button type="primary" ghost>默认</z-button>
  <z-button type="primary" ghost round>Round</z-button>
  <z-button type="primary" ghost edge>Edge</z-button>
  <z-button type="primary" loading ghost circle></z-button>`.trim(),
        buttonLoading:`
    <z-button type="primary" ghost loading>Loading</z-button>
  <z-button type="primary" ghost circle @click="goShares" :loading="isLoading" icon="shares"></z-button>
  <z-button type="primary" ghost @click="goShares" :loading="isLoading" icon="shares"></z-button>`.trim(),
        buttonGroup:`
    <z-button-group style="margin-right:20px;margin-bottom:20px">
    <z-button round icon="left">上一页</z-button>
    <z-button round icon="shares"></z-button>
    <z-button round icon="right" iconPosition="right">下一页</z-button>
  </z-button-group>
  <z-button-group>
    <z-button size="medium" ghost icon="left">上一页</z-button>
    <z-button size="medium" ghost icon="shares"></z-button>
    <z-button size="medium" ghost icon="right" iconPosition="right">下一页</z-button>
  </z-button-group>s
  <z-button-group>
    <z-button type="primary" size="small" icon="left">上一页</z-button>
    <z-button type="primary" size="small" icon="shares"></z-button>
    <z-button type="primary" size="small" icon="right" iconPosition="right">下一页</z-button>
  </z-button-group>`.trim(),
        buttonBlock: `
    <z-button block type="primary" size="medium" shadow>Primary</z-button>
  <z-button block shadow size="medium">Default</z-button>
  <z-button block ghost size="medium" shadow>幽灵按钮</z-button>
  <z-button block dashed size="medium" shadow>虚线按钮</z-button>`.trim()
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
    .top {
      margin-top: 10px;
    }
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

