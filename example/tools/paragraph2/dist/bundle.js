(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Paragraph2"] = factory();
	else
		root["Paragraph2"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Paragraph; });\n//require('./index.css').toString();\n//class BlockData {\n//  public type: string;\n//  public data: Array<DataField> = new Array();\n//  constructor(name) { this.type = name; }\n//}\nclass DataField {\n  constructor() {\n    this.type = 'Text';\n  }\n\n}\n\nclass Paragraph {\n  constructor({\n    data,\n    config,\n    api\n  }) {\n    this.api = api;\n    this._CSS = {\n      block: this.api.styles.block,\n      wrapper: 'ce-paragraph'\n    };\n    this.onKeyUp = this.onKeyUp.bind(this); //this.api.events.on('link', this.link.bind(this));\n    //this.api.events.on('unlink', this.unlink.bind(this));\n\n    this._placeholder = config.placeholder ? config.placeholder : Paragraph.DEFAULT_PLACEHOLDER;\n    this._data = null;\n    this._element = this.drawView();\n    this.data = data;\n  }\n\n  static get DEFAULT_PLACEHOLDER() {\n    return '';\n  }\n\n  link(event) {\n    //this.api.events.emit.on()\n    var event1 = new CustomEvent('inlineTool', event); //this.dispatchEvent(event1);\n\n    this.api.events.emit('inlineTool', event1);\n  }\n\n  unlink(event) {\n    console.log(event);\n  } //handleClick() {\n  //  //let event = new Event('link-inlinetool-event', { type: 'link', value: 'sss' });\n  //  //this.dispatchEvent(event);\n  //}\n\n\n  onKeyUp(e) {\n    if (e.code !== 'Backspace' && e.code !== 'Delete') {\n      return;\n    }\n\n    const {\n      textContent\n    } = this._element;\n\n    if (textContent === '') {\n      this._element.innerHTML = '';\n    }\n  }\n\n  drawView() {\n    let div = document.createElement('DIV');\n    div.classList.add(this._CSS.wrapper, this._CSS.block);\n    div.contentEditable = 'true';\n    div.dataset.placeholder = this._placeholder;\n    div.addEventListener('keyup', this.onKeyUp);\n    return div;\n  }\n\n  render() {\n    return this._element;\n  } //merge(data) {\n  //  let newData = {\n  //    text : this.data.text + data.text\n  //  };\n  //  this.data = newData;\n  //}\n\n\n  validate(savedData) {\n    if (savedData.text.trim() === '') {\n      return false;\n    }\n\n    return true;\n  }\n\n  save(toolsContent) {\n    return {\n      text: toolsContent.innerHTML\n    };\n  }\n\n  onPaste(event) {\n    const data = {\n      text: event.detail.data.innerHTML\n    };\n    let paste = new DataField();\n    paste.type = 'Text';\n    paste.data = data;\n    this.data.push(paste);\n  }\n\n  static get conversionConfig() {\n    return {\n      export: 'text',\n      import: 'text'\n    };\n  }\n\n  static get sanitize() {\n    return {\n      text: {\n        br: true\n      }\n    };\n  }\n\n  get data() {\n    return this._data;\n  }\n\n  set data(data) {\n    this._data = data;\n    this.dataToHtml(this._data);\n  }\n\n  dataToHtml(data) {\n    let html = '';\n    data.forEach(info => {\n      if (info.type !== 'text') {\n        let f = this.api.tools.getInlineRenderHtml(info.type);\n        let result = f(info);\n\n        this._element.appendChild(result);\n      } else {\n        let element = document.createElement('span');\n        element.innerHTML = info.data;\n\n        this._element.appendChild(element);\n      }\n    });\n  }\n\n  static get pasteConfig() {\n    return {\n      tags: ['P']\n    };\n  }\n\n  static get toolbox() {\n    return {\n      icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0.2 -0.3 9 11.4\" width=\"12\" height=\"14\">< path d=\"M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z\" /></svg>',\n      title: 'Text'\n    };\n  }\n\n  inlineToolEmit(value) {\n    //this.tool.inlineToolEvent\n    var event = new CustomEvent('inlineTool', value); //this.holder.dispatchEvent(event);\n  }\n\n}\n;\n\n//# sourceURL=webpack://Paragraph2/./src/index.ts?");

/***/ })

/******/ });
});