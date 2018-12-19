import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Button from '@/components/button/button.vue';
import Icon from '@/components/icon/icon.vue';
import sinon from 'sinon';

describe('Button.vue', () => {
  // 现在挂载组件，你便得到了这个包裹器
  // 包裹器的作用是Vue为其添加了方便的方法
  // 也可以通过wrapper.vm获取实例进行原生操作
  // 具体文档：https://vue-test-utils.vuejs.org/zh/api/wrapper/#%E5%B1%9E%E6%80%A7
  let wrapper = mount(Button);

  it('可以禁用button', () => {
    const disabled = true;
    wrapper.setProps({ disabled });
    // 写法一
    // 从包裹器wrapper结构得到实例vm
    const { vm } = wrapper;
    // 通过实例的方法getAttribute()获取对应的属性
    // 通过实例的方法我们可以进行原生js的dom操作获取想要的属性
    expect(vm.$el.getAttribute('disabled')).to.eq('disabled');
    expect(vm.$el.getAttribute('class')).to.include('is-disabled');

    // 写法二
    // Vue直接在包裹器wrapper上定义了一些方便的方法如：attributes()
    // expect(wrapper.attributes('disabled')).to.eq('disabled');
    // expect(wrapper.attributes('class')).to.include('is-disabled');
  });
  it('改变button尺寸', () => {
    expect(wrapper.classes().indexOf('large')).to.not.eq(-1);
    let size = 'medium';
    wrapper.setProps({ size });
    expect(wrapper.classes().indexOf('medium')).to.not.eq(-1);
    size = 'small';
    wrapper.setProps({ size });
    expect(wrapper.classes().indexOf('small')).to.not.eq(-1);
    // expect(wrapper.classes()).to.include('small');
  });
  it('改变button类型', () => {
    expect(wrapper.classes().indexOf('type-default')).to.not.eq(-1);
    let type = 'primary';
    wrapper.setProps({ type });
    expect(wrapper.classes().indexOf('type-primary')).to.not.eq(-1);
    type = 'success';
    wrapper.setProps({ type });
    expect(wrapper.classes().indexOf('type-success')).to.not.eq(-1);
    type = 'warning';
    wrapper.setProps({ type });
    expect(wrapper.classes().indexOf('type-warning')).to.not.eq(-1);
    type = 'error';
    wrapper.setProps({ type });
    expect(wrapper.classes().indexOf('type-error')).to.not.eq(-1);
  });
  it('设置成幽灵按钮', () => {
    expect(wrapper.classes().indexOf('is-ghost')).to.eq(-1);
    const ghost = true;
    wrapper.setProps({ ghost });
    expect(wrapper.classes().indexOf('is-ghost')).to.not.eq(-1);
  });
  it('设置成虚线按钮', () => {
    expect(wrapper.classes().indexOf('is-dashed')).to.eq(-1);
    const dashed = true;
    wrapper.setProps({ dashed });
    expect(wrapper.classes().indexOf('is-dashed')).to.not.eq(-1);
  });
  it('设置成大圆角按钮', () => {
    expect(wrapper.classes().indexOf('is-round')).to.eq(-1);
    const round = true;
    wrapper.setProps({ round });
    expect(wrapper.classes().indexOf('is-round')).to.not.eq(-1);
  });
  it('设置成圆形按钮', () => {
    expect(wrapper.classes().indexOf('is-circle')).to.eq(-1);
    const circle = true;
    wrapper.setProps({ circle });
    expect(wrapper.classes().indexOf('is-circle')).to.not.eq(-1);
  });
  it('设置成锋利的直角按钮', () => {
    expect(wrapper.classes().indexOf('is-edge')).to.eq(-1);
    const edge = true;
    wrapper.setProps({ edge });
    expect(wrapper.classes().indexOf('is-edge')).to.not.eq(-1);
  });
  it('为按钮设置阴影', () => {
    expect(wrapper.classes().indexOf('is-shadow')).to.eq(-1);
    const shadow = true;
    wrapper.setProps({ shadow });
    expect(wrapper.classes().indexOf('is-shadow')).to.not.eq(-1);
  });
  it('设置为全宽的按钮', () => {
    expect(wrapper.classes().indexOf('is-block')).to.eq(-1);
    const block = true;
    wrapper.setProps({ block });
    expect(wrapper.classes().indexOf('is-block')).to.not.eq(-1);
  });
  it('设置为loading状态', () => {
    const loading = true;
    wrapper.setProps({ loading });
    const useElement = wrapper.find('use');
    expect(useElement.attributes('href')).to.eq('#i-loading');
    // 还原loading参数方便测试下面的icon参数
    wrapper.setProps({ loading: false });
  });
  it('正确添加icon', () => {
    // expect(wrapper.contains(Icon)).to.be.false;
    expect(wrapper.find(Icon).isVisible()).to.be.false;
    const icon = 'settings';
    wrapper.setProps({ icon });
    // 选中子组件
    const useElement = wrapper.find('use');
    // expect(wrapper.contains(Icon)).to.be.true;
    expect(wrapper.find(Icon).isVisible()).to.be.true;
    expect(useElement.attributes('href')).to.eq(`#i-${icon}`);
  });
  it('设置icon的位置', () => {
    // TODO: css没有测试，后面加上（测试lift和right的css值差异）
    expect(wrapper.classes().indexOf('icon-left')).to.not.eq(-1);
    expect(wrapper.classes().indexOf('icon-right')).to.eq(-1);
    const iconPosition = 'right';
    wrapper.setProps({ iconPosition });
    expect(wrapper.classes().indexOf('icon-left')).to.eq(-1);
    expect(wrapper.classes().indexOf('icon-right')).to.not.eq(-1);
  });
  it('测试slot的内容', () => {
    let sloteDefault = wrapper.vm.$slots.default;
    expect(wrapper.find('div').text()).to.eq('');
    expect(sloteDefault && sloteDefault.length ? sloteDefault.length : undefined).to.be.undefined;
    expect(wrapper.classes().indexOf('icon-center')).to.not.eq(-1);
    // 销毁实例
    wrapper.destroy();
    wrapper = mount(Button, {
      slots: {
        default: ['Button Name', '<div></div>', '<span></span>'],
      }
    });
    sloteDefault = wrapper.vm.$slots.default;
    expect(sloteDefault && sloteDefault.length ? sloteDefault.length : undefined).to.eq(3);
    expect(wrapper.find('div').text()).to.eq('Button Name');
    expect(wrapper.classes().indexOf('icon-center')).to.eq(-1);
  });
  it('测试按钮点击事件', () => {
    wrapper.trigger('click');
    // 判断点击按钮后有没有触发$emit的click事件
    expect(wrapper.emitted().click).to.exist;

    // 通过sinon判断函数是否被调用
    // 一般当点击事件没有判断依据时候用这个
    const clickHandler = sinon.stub();
    wrapper.vm.$on('click', clickHandler);
    wrapper.vm.$el.click();
    expect(clickHandler.called).to.be.true;
    // 最后一个用例销毁实例
    wrapper.destroy();
  });
});
