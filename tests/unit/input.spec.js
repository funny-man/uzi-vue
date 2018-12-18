import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Input from '@/components/input/input.vue';
import Icon from '@/components/icon/icon.vue';
import sinon from 'sinon';

describe('Input.vue', () => {
  const wrapper = mount(Input);

  it('存在Input', () => {
    expect(Input).to.exist;
  });

  it('接受value参数', () => {
    const { vm } = wrapper;
    const inputElement = vm.$el.querySelector('input');
    expect(inputElement.value).to.eq('');
    const value = 'Nicholas';
    wrapper.setProps({ value });
    expect(inputElement.value).to.eq(value);
  });
  it('接受placeholder参数', () => {
    const inputElement = wrapper.find('input');
    expect(inputElement.attributes('placeholder')).to.eq('请输入内容');
    const placeholder = '请输入您的密码';
    wrapper.setProps({ placeholder });
    expect(inputElement.attributes('placeholder')).to.eq(placeholder);
  });
  it('接受disabled参数', () => {
    const inputElement = wrapper.find('input').element;
    expect(inputElement.disabled).to.be.false;
    expect(wrapper.classes().indexOf('is-disabled')).to.eq(-1);
    const disabled = true;
    wrapper.setProps({ disabled });
    expect(inputElement.disabled).to.be.true;
    expect(wrapper.classes().indexOf('is-disabled')).to.not.eq(-1);
  });
  it('接受readonly参数', () => {
    const inputElement = wrapper.find('input').element;
    expect(inputElement.readOnly).to.be.false;
    expect(wrapper.classes().indexOf('is-readonly')).to.eq(-1);
    const readonly = true;
    wrapper.setProps({ readonly });
    expect(inputElement.readOnly).to.be.true;
    expect(wrapper.classes().indexOf('is-readonly')).to.not.eq(-1);
  });
  it('接受prefix参数', () => {
    const useElement = wrapper.find('use');
    expect(wrapper.classes().indexOf('is-prefix')).to.eq(-1);
    expect(wrapper.find(Icon).isVisible()).to.be.false;
    const prefix = 'settings';
    wrapper.setProps({ prefix });
    expect(useElement.attributes('href')).to.eq(`#i-${prefix}`);
    expect(wrapper.find(Icon).isVisible()).to.be.true;
    expect(wrapper.classes().indexOf('is-prefix')).to.not.eq(-1);
    wrapper.setProps({ prefix: null });
  });
  it('接受suffix参数', () => {
    const useElement = wrapper.find('use');
    expect(wrapper.classes().indexOf('is-suffix')).to.eq(-1);
    expect(wrapper.find(Icon).isVisible()).to.be.false;
    const suffix = 'settings';
    wrapper.setProps({ suffix });
    expect(useElement.attributes('href')).to.eq(`#i-${suffix}`);
    expect(wrapper.find(Icon).isVisible()).to.be.true;
    expect(wrapper.classes().indexOf('is-suffix')).to.not.eq(-1);
  });
  it('测试change/input/focus/blur事件', () => {
    const inputWrapper = wrapper.find('input');
    const clickHandler = sinon.stub();
    ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
      inputWrapper.element.addEventListener(eventName, clickHandler);
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent(eventName, false, true);
      inputWrapper.element.dispatchEvent(evt);
      expect(wrapper.emitted()[eventName]).to.exist;
      expect(clickHandler.called).to.be.true;
      expect(clickHandler.calledWith(evt)).to.be.true;
    });
  });
  // it('测试change事件', () => {
  //   const inputWrapper = wrapper.find('input');
  //   const clickHandler = sinon.stub();
  //   inputWrapper.element.addEventListener('change', clickHandler);
  //   // 由于inputWrapper不是组件实例所以不能用wrapper.trigger触发事件
  //   // 采用原生js方法做浏览器兼容判断（测试只用于chrome所以可以只写兼容chrome的方法）
  //   const evt = document.createEvent('HTMLEvents');
  //   evt.initEvent('change', false, true);
  //   inputWrapper.element.dispatchEvent(evt);
  //   expect(wrapper.emitted().change).to.exist;
  //   expect(clickHandler.called).to.be.true;
  //   expect(clickHandler.calledWith(evt)).to.be.true;
  // });
  // it('测试input事件', () => {
  //   const inputWrapper = wrapper.find('input');
  //   const clickHandler = sinon.stub();
  //   inputWrapper.element.addEventListener('input', clickHandler);
  //   // 由于inputWrapper不是组件实例所以不能用wrapper.trigger触发事件
  //   // 采用原生js方法做浏览器兼容判断（测试只用于chrome所以可以只写兼容chrome的方法）
  //   const evt = document.createEvent('HTMLEvents');
  //   evt.initEvent('input', false, true);
  //   inputWrapper.element.dispatchEvent(evt);
  //   expect(wrapper.emitted().input).to.exist;
  //   expect(clickHandler.called).to.be.true;
  //   expect(clickHandler.calledWith(evt)).to.be.true;
  // });
  // it('测试吧focus事件', () => {
  //   const inputWrapper = wrapper.find('input');
  //   const clickHandler = sinon.stub();
  //   inputWrapper.element.addEventListener('focus', clickHandler);
  //   // 由于inputWrapper不是组件实例所以不能用wrapper.trigger触发事件
  //   // 采用原生js方法做浏览器兼容判断（测试只用于chrome所以可以只写兼容chrome的方法）
  //   const evt = document.createEvent('HTMLEvents');
  //   evt.initEvent('focus', false, true);
  //   inputWrapper.element.dispatchEvent(evt);
  //   expect(wrapper.emitted().focus).to.exist;
  //   expect(clickHandler.called).to.be.true;
  //   expect(clickHandler.calledWith(evt)).to.be.true;
  // });
  // it('测试吧blur事件', () => {
  //   const inputWrapper = wrapper.find('input');
  //   const clickHandler = sinon.stub();
  //   inputWrapper.element.addEventListener('blur', clickHandler);
  //   // 由于inputWrapper不是组件实例所以不能用wrapper.trigger触发事件
  //   // 采用原生js方法做浏览器兼容判断（测试只用于chrome所以可以只写兼容chrome的方法）
  //   const evt = document.createEvent('HTMLEvents');
  //   evt.initEvent('blur', false, true);
  //   inputWrapper.element.dispatchEvent(evt);
  //   expect(wrapper.emitted().blur).to.exist;
  //   expect(clickHandler.called).to.be.true;
  //   expect(clickHandler.calledWith(evt)).to.be.true;
  // });
  it('销毁实例', () => {
    wrapper.destroy();
  });
});
