interface TextLabelList {
  [key: string]: string;
}

interface TemplateConfig {
  textLabelList: TextLabelList;
}

interface EventItem {
  eventType: keyof HTMLElementEventMap;
  callback: (e: Event) => void;
}

type Modifier = 'warning' | 'info' | 'standard';

interface Options {
  textSize?: string;
  fontWeight?: string;
}

export interface ComponentConfig {
  textLabelList: TextLabelList;
  template: (params: TemplateConfig) => string;
  events: EventItem[];
  modifier: Modifier;
  options: Options;
}

export class Component {
  private readonly componentConfig: ComponentConfig;

  public constructor(componentConfig: ComponentConfig) {
    this.componentConfig = componentConfig;
  }

  public mount(componentParentSelector: string) {
    const html = this.componentConfig.template({
      textLabelList: this.componentConfig.textLabelList,
    });

    const parentNode = document.querySelector(componentParentSelector);

    if (parentNode === null) {
      throw new Error('unknownParent');
    }

    parentNode.innerHTML = html;
    const child = parentNode.childNodes[0];

    if (!child) {
      throw new Error('unknownChild');
    }

    this.componentConfig.events.forEach((event) => {
      child.addEventListener(event.eventType, event.callback);
    });

    const el = child as HTMLElement;

    el.classList.add(this.componentConfig.modifier);

    if (this.componentConfig.options.textSize) {
      el.style.fontSize = this.componentConfig.options.textSize;
    }

    if (this.componentConfig.options.fontWeight) {
      el.style.fontWeight = this.componentConfig.options.fontWeight;
    }
  }
}
