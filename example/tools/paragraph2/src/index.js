/**
 * Build styles
 */
require('./index.css').toString();

class Paragraph {

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
    this.api.events.on('link', this.link.bind(this));
    this.api.events.on('unlink', this.unlink.bind(this));

    this._placeholder = config.placeholder ? config.placeholder : Paragraph.DEFAULT_PLACEHOLDER;
    this._data = {};
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
    let div = document.createElement('DIV');

    div.classList.add(this._CSS.wrapper, this._CSS.block);
    div.contentEditable = true;
    div.dataset.placeholder = this._placeholder;

    div.addEventListener('keyup', this.onKeyUp);

    return div;
  }

  render() {
    return this._element;
  }

  merge(data) {
    let newData = {
      text : this.data.text + data.text
    };

    this.data = newData;
  }

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

  onPaste(event) {
    const data = {
      text: event.detail.data.innerHTML
    };

    this.data = data;
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

  get data() {
    let text = this._element.innerHTML;

    this._data.text = text;

    return this._data;
  }

  set data(data) {
    this._data = data || {};

    this._element.innerHTML = this._data.text || '';
  }

  static get pasteConfig() {
    return {
      tags: [ 'P' ]
    };
  }

  static get toolbox() {
    return {
      icon: require('./toolbox-icon.svg').default,
      title: 'Text'
    };
  }





  private inlineToolEmit(value: any): void {
    this.tool.inlineToolEvent
    var event = new CustomEvent('inlineTool', value);

    this.holder.dispatchEvent(event);
  }



}

module.exports = Paragraph;
