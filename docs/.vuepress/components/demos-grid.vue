<template>
  <div>
    <div class="demo-warpper">
      <z-row gutter="0">
        <z-col span="12" >
          <div class="box"></div>
        </z-col>
        <z-col span="12" >
          <div class="box"></div>
        </z-col>
      </z-row>
      <z-row gutter="0">
        <z-col span="8" >
          <div class="box"></div>
        </z-col>
        <z-col span="8" >
          <div class="box"></div>
        </z-col>
        <z-col span="8" >
          <div class="box"></div>
        </z-col>
      </z-row>
      <z-row gutter="0">
        <z-col span="6" >
          <div class="box"></div>
        </z-col>
        <z-col span="6" >
          <div class="box"></div>
        </z-col>
        <z-col span="6" >
          <div class="box"></div>
        </z-col>
        <z-col span="6" >
          <div class="box"></div>
        </z-col>
      </z-row>
      <div class="text">
        <h5>基础栅格</h5>
        <p>从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统</p>
      </div>
      <pre><code v-text="a"></code></pre>
    </div>

    <div class="demo-warpper">
      <z-row gutter="20">
        <z-col span="6" class="z-col"><div class="box"></div></z-col>
        <z-col span="6" class="z-col"><div class="box"></div></z-col>
        <z-col span="6" class="z-col"><div class="box"></div></z-col>
        <z-col span="6" class="z-col"><div class="box"></div></z-col>
      </z-row>
      <div class="text">
        <h5>区块间隔</h5>
        <p>通过设置gutter设置区块间的间隔</p>
      </div>
      <pre><code v-text="b"></code></pre>
    </div>

    <div class="demo-warpper">
      <z-row gutter="20">
        <z-col span="6" :offset="6" class="z-col"><div class="box"></div></z-col>
        <z-col span="6" :offset="6" class="z-col"><div class="box"></div></z-col>
      </z-row>
      <z-row gutter="20">
        <z-col span="6" class="z-col"><div class="box"></div></z-col>
        <z-col span="6" :offset="6" class="z-col"><div class="box"></div></z-col>
      </z-row>
      <z-row gutter="20">
        <z-col span="12" :offset="6" class="z-col"><div class="box"></div></z-col>
      </z-row>
      <div class="text">
        <h5>左右偏移</h5>
        <p>使用 offset 可以将列向右侧偏</p>
      </div>
      <pre><code v-text="c"></code></pre>
    </div>

    <div class="demo-warpper">
      <z-row gutter="20">
        <z-col :xs="18" :sm="6" :md="4" :lg="3" :xl="1" class="z-col"><div class="box"></div></z-col>
        <z-col :xs="6" :sm="6" :md="8" :lg="9" :xl="11" class="z-col"><div class="box"></div></z-col>
        <z-col :xs="6" :sm="6" :md="8" :lg="9" :xl="11" class="z-col"><div class="box"></div></z-col>
        <z-col :xs="18" :sm="6" :md="4" :lg="3" :xl="1" class="z-col"><div class="box"></div></z-col>
      </z-row>
      <div class="text">
        <h5>响应式</h5>
        <p>通过媒体查询改变块的宽度</p>
      </div>
      <pre><code v-text="d"></code></pre>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Row from '../../../src/components/row/row.vue';
  import Col from '../../../src/components/col/col.vue';
  export default {
    components: {
      'z-row': Row,
      'z-col': Col,
    },
    data() {
      return {
        a: `    
    <z-row gutter="0">
    <z-col span="12" ></z-col>
    <z-col span="12" ></z-col>
  </z-row>
  <z-row gutter="0">
    <z-col span="8" ></z-col>
    <z-col span="8" ></z-col>
    <z-col span="8" ></z-col>
  </z-row>
  <z-row gutter="0">
    <z-col span="6" ></z-col>
    <z-col span="6" ></z-col>
    <z-col span="6" ></z-col>
    <z-col span="6" ></z-col>
  </z-row>`.trim(),
        b: `
    <z-row gutter="20">
    <z-col span="6" class="z-col"></z-col>
    <z-col span="6" class="z-col"></z-col>
    <z-col span="6" class="z-col"></z-col>
    <z-col span="6" class="z-col"></z-col>
  </z-row>`.trim(),
        c: `
    <z-row gutter="20">
    <z-col span="6" :offset="6" class="z-col"></z-col>
    <z-col span="6" :offset="6" class="z-col"></z-col>
  </z-row>
  <z-row gutter="20">
    <z-col span="6" class="z-col"></z-col>
    <z-col span="6" :offset="6" class="z-col"></z-col>
  </z-row>
  <z-row gutter="20">
    <z-col span="12" :offset="6" class="z-col"></z-col>
  </z-row>`.trim(),
        d: `
    <z-row gutter="20">
    <z-col :xs="18" :sm="6" :md="4" :lg="3" :xl="1" class="z-col"></z-col>
    <z-col :xs="6" :sm="6" :md="8" :lg="9" :xl="11" class="z-col"></z-col>
    <z-col :xs="6" :sm="6" :md="8" :lg="9" :xl="11" class="z-col"></z-col>
    <z-col :xs="18" :sm="6" :md="4" :lg="3" :xl="1" class="z-col"></z-col>
  </z-row>`.trim(),
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
    .z-col {
      background-color: rgb(255, 228, 233);
    }
    .box {
      background-color: rgb(255, 112, 143);
      height: 40px;
      border: 1px solid rgb(204, 85, 105);
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