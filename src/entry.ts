import Vue, { PluginObject } from 'vue';
import Button from '../packages/button';

// 所有组件（全量注册）
const components = [ Button ];

// 全量注册方法
const install = function install(vue: typeof Vue, opts?: BasicObject): void {
  components.forEach(component => {
    vue.component(component.name, component);
  });
};

// 支持 script 引入 Vue 的写法
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

const _default: PluginObject<Vue> = {
  Button,
  install
};

export default _default;
