import { Component } from './Component';
import {
  component1Config,
  component2Config,
  component3Config,
} from './ComponentList';

export const app = () => {
  //МОНТИРУЕМ КОМПОНЕНТЫ
  const component1 = new Component(component1Config);
  component1.mount('#component1Parent');

  const component2 = new Component(component2Config);
  component2.mount('#component2Parent');

  const component3 = new Component(component3Config);
  component3.mount('#component3Parent');
};
