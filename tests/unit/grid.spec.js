import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import col from '@/components/col/col.vue';
import row from '@/components/row/row.vue';

// import Icon from '@/components/icon/icon.vue';
// import sinon from 'sinon';

describe('row.vue&col.vue', () => {
  const wrapperRow = mount(row);
  // const wrapperCol = mount(col);

  it('存在row&col', () => {
    expect(col).to.exist;
    expect(row).to.exist;
  });
  it('接受参数gutter', () => {
    const gutter = 1234;
    wrapperRow.setProps({ gutter });
    expect(wrapperRow.attributes('style')).to.eq(`margin-left: -${gutter / 2}px; margin-right: -${gutter / 2}px;`);
  });
  // it('接受placeholder参数', () => {
  //   const inputElement = wrapper.find('input');
  //   expect(inputElement.attributes('placeholder')).to.eq('请输入内容');
  //   const placeholder = '请输入您的密码';
  //   wrapper.setProps({ placeholder });
  //   expect(inputElement.attributes('placeholder')).to.eq(placeholder);
  // });
  // it('接受disabled参数', () => {
  //   const inputElement = wrapper.find('input').element;
  //   expect(inputElement.disabled).to.be.false;
  //   expect(wrapper.classes().indexOf('is-disabled')).to.eq(-1);
  //   const disabled = true;
  //   wrapper.setProps({ disabled });
  //   expect(inputElement.disabled).to.be.true;
  //   expect(wrapper.classes().indexOf('is-disabled')).to.not.eq(-1);
  // });
  // it('接受readonly参数', () => {
  //   const inputElement = wrapper.find('input').element;
  //   expect(inputElement.readOnly).to.be.false;
  //   expect(wrapper.classes().indexOf('is-readonly')).to.eq(-1);
  //   const readonly = true;
  //   wrapper.setProps({ readonly });
  //   expect(inputElement.readOnly).to.be.true;
  //   expect(wrapper.classes().indexOf('is-readonly')).to.not.eq(-1);
  // });
  // it('接受prefix参数', () => {
  //   const useElement = wrapper.find('use');
  //   expect(wrapper.classes().indexOf('is-prefix')).to.eq(-1);
  //   expect(wrapper.find(Icon).isVisible()).to.be.false;
  //   const prefix = 'settings';
  //   wrapper.setProps({ prefix });
  //   expect(useElement.attributes('href')).to.eq(`#i-${prefix}`);
  //   expect(wrapper.find(Icon).isVisible()).to.be.true;
  //   expect(wrapper.classes().indexOf('is-prefix')).to.not.eq(-1);
  //   wrapper.setProps({ prefix: null });
  // });
  // it('接受suffix参数', () => {
  //   const useElement = wrapper.find('use');
  //   expect(wrapper.classes().indexOf('is-suffix')).to.eq(-1);
  //   expect(wrapper.find(Icon).isVisible()).to.be.false;
  //   const suffix = 'settings';
  //   wrapper.setProps({ suffix });
  //   expect(useElement.attributes('href')).to.eq(`#i-${suffix}`);
  //   expect(wrapper.find(Icon).isVisible()).to.be.true;
  //   expect(wrapper.classes().indexOf('is-suffix')).to.not.eq(-1);
  // });
  // it('测试change/input/focus/blur事件', () => {
  //   const inputWrapper = wrapper.find('input');
  //   const clickHandler = sinon.stub();
  //   ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
  //     inputWrapper.element.addEventListener(eventName, clickHandler);
  //     const evt = document.createEvent('HTMLEvents');
  //     evt.initEvent(eventName, false, true);
  //     inputWrapper.element.dispatchEvent(evt);
  //     expect(wrapper.emitted()[eventName]).to.exist;
  //     expect(clickHandler.called).to.be.true;
  //     expect(clickHandler.calledWith(evt)).to.be.true;
  //     // 最后一个用例销毁实例
  //     wrapper.destroy();
  //   });
  // });
});
