import { BlockTool, API } from "../../../../types";
import { HTMLPasteEvent } from "../../../../types";


//require('./index.css').toString();

//class BlockData {
//  public type: string;
//  public data: Array<DataField> = new Array();

//  constructor(name) { this.type = name; }
//}

class DataField {
  public type: string = 'Text';
  public data: any;
}

export default class Paragraph implements BlockTool {
  api: API;
  _CSS: { block: string, wrapper: string }
  _placeholder: string;
  _data: Array<DataField> | null;
  _element: HTMLElement;
  
  static get DEFAULT_PLACEHOLDER() {
    return '';
  }

  constructor({data, config, api}) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-paragraph'
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    //this.api.events.on('link', this.link.bind(this));
    //this.api.events.on('unlink', this.unlink.bind(this));

    this._placeholder = config.placeholder ? config.placeholder : Paragraph.DEFAULT_PLACEHOLDER;

    this._data = null;

    this._element = this.drawView();

    this.data = data;
  }

  link(event) {
    //this.api.events.emit.on()

    var event1 = new CustomEvent('inlineTool', event);
    //this.dispatchEvent(event1);
    this.api.events.emit('inlineTool', event1);
  }

  unlink(event) {
    console.log(event);
  }

  //handleClick() {
  //  //let event = new Event('link-inlinetool-event', { type: 'link', value: 'sss' });
  //  //this.dispatchEvent(event);
  //}

  onKeyUp(e) {
    if (e.code !== 'Backspace' && e.code !== 'Delete') {
      return;
    }

    const {textContent} = this._element;

    if (textContent === '') {
      this._element.innerHTML = '';
    }
  }

  drawView() {
    let div = document.createElement('DIV') as HTMLDivElement;

    div.classList.add(this._CSS.wrapper, this._CSS.block);
    div.contentEditable = 'true';
    div.dataset.placeholder = this._placeholder;

    div.addEventListener('keyup', this.onKeyUp);

    return div;
  }

  render() {
    return this._element;
  }

  //merge(data) {
  //  let newData = {
  //    text : this.data.text + data.text
  //  };

  //  this.data = newData;
  //}

  validate(savedData) {
    if (savedData.text.trim() === '') {
      return false;
    }

    return true;
  }

  save(toolsContent) {
    return {
      text: toolsContent.innerHTML
    };
  }

  onPaste(event: HTMLPasteEvent) {
    const data = {
      text: event.detail.data.innerHTML
    };

    let paste = new DataField();
    paste.type = 'Text';
    paste.data = data;

    this.data.push(paste);
  }

  static get conversionConfig() {
    return {
      export: 'text',
      import: 'text'
    };
  }

  static get sanitize() {
    return {
      text: {
        br: true,
      }
    };
  }

  get data(): Array<DataField> {
    return this._data;
  }

  set data(data: Array<DataField>) {
    this._data = data;

    this.dataToHtml(this._data);
  }

  dataToHtml(data: Array<DataField>) : void {
    let html: string = '';

    data.forEach(info => {
      if (info.type !== 'text') {
        let f = this.api.tools.getInlineRenderHtml(info.type);
        let result = f(info) as HTMLElement;
        this._element.appendChild(result);
      }
      else {
        let element = document.createElement('span');
        element.innerHTML = info.data;
        this._element.appendChild(element); 
      }
    });
  }

  static get pasteConfig() {
    return {
      tags: [ 'P' ]
    };
  }

  static get toolbox() {
    return {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">< path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z" /></svg>',
      title: 'Text'
    };
  }

  private inlineToolEmit(value: any): void {
    //this.tool.inlineToolEvent
    var event = new CustomEvent('inlineTool', value);

    //this.holder.dispatchEvent(event);
  }
};
