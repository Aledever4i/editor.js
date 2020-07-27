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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\src\\\\index.js: Unexpected token (151:10)\\n\\n\\u001b[0m \\u001b[90m 149 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 150 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 151 | \\u001b[39m  private inlineToolEmit(value\\u001b[33m:\\u001b[39m any)\\u001b[33m:\\u001b[39m \\u001b[36mvoid\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 152 | \\u001b[39m    \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mtool\\u001b[33m.\\u001b[39minlineToolEvent\\u001b[0m\\n\\u001b[0m \\u001b[90m 153 | \\u001b[39m    \\u001b[36mvar\\u001b[39m event \\u001b[33m=\\u001b[39m \\u001b[36mnew\\u001b[39m \\u001b[33mCustomEvent\\u001b[39m(\\u001b[32m'inlineTool'\\u001b[39m\\u001b[33m,\\u001b[39m value)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 154 | \\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3831:17)\\n    at Parser.unexpected (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5143:16)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8168:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8067:10)\\n    at C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8022:14\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7150:14)\\n    at Parser.parseClassBody (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7999:10)\\n    at Parser.parseClass (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7973:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7289:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7810:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7797:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7181:10)\\n    at Parser.parse (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8660:17)\\n    at parse (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10660:38)\\n    at parser (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\\n    at normalizeFile (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:138:11)\\n    at runSync (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at C:\\\\Users\\\\z003c3ee\\\\source\\\\repos\\\\editor.js\\\\example\\\\tools\\\\paragraph2\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34\\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)\");\n\n//# sourceURL=webpack://Paragraph2/./src/index.js?");

/***/ })

/******/ });
});