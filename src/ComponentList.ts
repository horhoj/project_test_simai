import { ComponentConfig } from './Component';

//В ЭТОМ МОДУЛЕ СОДЕРЖИТСЯ КОНФИГУРАЦИЯ КОМПОНЕНТОВ

export const component1Config: ComponentConfig = {
  template: ({ textLabelList }) => `<button>${textLabelList.text}</button>`,
  textLabelList: { text: 'text1' },
  modifier: 'standard',
  options: { textSize: '20px', fontWeight: '700' },
  events: [
    {
      eventType: 'click',
      callback: (e) => {
        e.preventDefault();
        alert('Вы кликнули по кнопке 1');
      },
    },
    {
      eventType: 'mousemove',
      callback: (e) => {
        e.preventDefault();
        const display = document.querySelector('#display');
        if (display) {
          display.innerHTML = 'вы навели мышь на кнопку 1';
        }
      },
    },
    {
      eventType: 'mouseleave',
      callback: (e) => {
        e.preventDefault();
        const display = document.querySelector('#display');
        if (display) {
          display.innerHTML = '';
        }
      },
    },
  ],
};

export const component2Config: ComponentConfig = {
  template: ({ textLabelList }) =>
    `<button>${textLabelList.textL}...${textLabelList.textR}</button>`,
  textLabelList: { textL: 'textL', textR: 'textR' },
  modifier: 'warning',
  options: { textSize: '30px', fontWeight: '500' },
  events: [
    {
      eventType: 'click',
      callback: (e) => {
        e.preventDefault();
        alert('Вы кликнули по кнопке 2');
      },
    },
    {
      eventType: 'mousemove',
      callback: (e) => {
        e.preventDefault();
        const display = document.querySelector('#display');
        if (display) {
          display.innerHTML = 'вы навели мышь на кнопку 2';
        }
      },
    },
    {
      eventType: 'mouseleave',
      callback: (e) => {
        e.preventDefault();
        const display = document.querySelector('#display');
        if (display) {
          display.innerHTML = '';
        }
      },
    },
  ],
};

export const component3Config: ComponentConfig = {
  template: ({ textLabelList }) => `<button>${textLabelList.text}</button>`,
  textLabelList: { text: 'text3' },
  modifier: 'info',
  options: { textSize: '20px', fontWeight: '300' },
  events: [
    {
      eventType: 'click',
      callback: (e) => {
        e.preventDefault();
        alert('Вы кликнули по кнопке 3');
      },
    },
    {
      eventType: 'mousemove',
      callback: (e) => {
        e.preventDefault();
        const display = document.querySelector('#display');
        if (display) {
          display.innerHTML = 'вы навели мышь на кнопку 3';
        }
      },
    },
    {
      eventType: 'mouseleave',
      callback: (e) => {
        e.preventDefault();
        const display = document.querySelector('#display');
        if (display) {
          display.innerHTML = '';
        }
      },
    },
  ],
};
