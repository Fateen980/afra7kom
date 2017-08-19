/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(9)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getJSON;
/* unused harmony export getScrollBarWidth */
/* unused harmony export translations */
/* harmony export (immutable) */ __webpack_exports__["b"] = delayer;
/* unused harmony export VueFixer */
// coerce convert som types of data into another type
const coerce = {
  // Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
  boolean: val => (typeof val === 'string' ? val === '' || val === 'true' ? true : (val === 'false' || val === 'null' || val === 'undefined' ? false : val) : val),
  // Attempt to convert a string value to a Number. Otherwise, return 0.
  number: (val, alt = null) => (typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val)),
  // Attempt to convert to string any value, except for null or undefined.
  string: val => (val === undefined || val === null ? '' : val + ''),
  // Pattern accept RegExp, function, or string (converted to RegExp). Otherwise return null.
  pattern: val => (val instanceof Function || val instanceof RegExp ? val : typeof val === 'string' ? new RegExp(val) : null)
}
/* harmony export (immutable) */ __webpack_exports__["a"] = coerce;


function getJSON (url) {
  var request = new window.XMLHttpRequest()
  var data = {}
  // p (-simulated- promise)
  var p = {
    then (fn1, fn2) { return p.done(fn1).fail(fn2) },
    catch (fn) { return p.fail(fn) },
    always (fn) { return p.done(fn).fail(fn) }
  };
  ['done', 'fail'].forEach(name => {
    data[name] = []
    p[name] = (fn) => {
      if (fn instanceof Function) data[name].push(fn)
      return p
    }
  })
  p.done(JSON.parse)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      let e = {status: request.status}
      if (request.status === 200) {
        try {
          var response = request.responseText
          for (var i in data.done) {
            var value = data.done[i](response)
            if (value !== undefined) { response = value }
          }
        } catch (err) {
          data.fail.forEach(fail => fail(err))
        }
      } else {
        data.fail.forEach(fail => fail(e))
      }
    }
  }
  request.open('GET', url)
  request.setRequestHeader('Accept', 'application/json')
  request.send()
  return p
}

function getScrollBarWidth () {
  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
    return 0
  }
  let inner = document.createElement('p')
  inner.style.width = '100%'
  inner.style.height = '200px'

  let outer = document.createElement('div')
  outer.style.position = 'absolute'
  outer.style.top = '0px'
  outer.style.left = '0px'
  outer.style.visibility = 'hidden'
  outer.style.width = '200px'
  outer.style.height = '150px'
  outer.style.overflow = 'hidden'
  outer.appendChild(inner)

  document.body.appendChild(outer)
  let w1 = inner.offsetWidth
  outer.style.overflow = 'scroll'
  let w2 = inner.offsetWidth
  if (w1 === w2) w2 = outer.clientWidth

  document.body.removeChild(outer)

  return (w1 - w2)
}

// return all the translations or the default language (english)
function translations (lang = 'en') {
  let text = {
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  }
  return window.VueStrapLang ? window.VueStrapLang(lang) : text
}

// delayer: set a function that execute after a delay
// @params (function, delay_prop or value, default_value)
function delayer (fn, varTimer, ifNaN = 100) {
  function toInt (el) { return /^[0-9]+$/.test(el) ? Number(el) || 1 : null }
  var timerId
  return function (...args) {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, args)
    }, toInt(varTimer) || toInt(this[varTimer]) || ifNaN)
  }
}

// Fix a vue instance Lifecycle to vue 1/2 (just the basic elements, is not a real parser, so this work only if your code is compatible with both)
function VueFixer (vue) {
  var vue2 = !window.Vue || !window.Vue.partial
  var mixin = {
    computed: {
      vue2 () { return !this.$dispatch }
    }
  }
  if (!vue2) {
    if (vue.beforeCreate) {
      mixin.create = vue.beforeCreate
      delete vue.beforeCreate
    }
    if (vue.beforeMount) {
      vue.beforeCompile = vue.beforeMount
      delete vue.beforeMount
    }
    if (vue.mounted) {
      vue.ready = vue.mounted
      delete vue.mounted
    }
  } else {
    if (vue.beforeCompile) {
      vue.beforeMount = vue.beforeCompile
      delete vue.beforeCompile
    }
    if (vue.compiled) {
      mixin.compiled = vue.compiled
      delete vue.compiled
    }
    if (vue.ready) {
      vue.mounted = vue.ready
      delete vue.ready
    }
  }
  if (!vue.mixins) { vue.mixins = [] }
  vue.mixins.unshift(mixin)
  return vue
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(22);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var alert = __webpack_require__(6);
var Typeahead = __webpack_require__(12);
var Checkbox = __webpack_require__(17);
// or
//var alert = require('vue-strap').alert;

new Vue({

    el: '#app',
    components: {
        alert: alert,
        Typeahead: Typeahead,
        Checkbox: Checkbox
    }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(7)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(11),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\inetpub\\wwwroot\\afra7kom\\node_modules\\vue-strap\\src\\alert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] alert.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cbaf381", Component.options)
  } else {
    hotAPI.reload("data-v-4cbaf381", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5c87cdf2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cbaf381\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./alert.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cbaf381\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./alert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.fade-transition {\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  height: 0;\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 1050;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 1050;\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: {
      type: String
    },
    dismissable: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: false
    },
    show: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: true,
      twoWay: true
    },
    duration: {
      type: Number,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].number,
      default: 0
    },
    width: {
      type: String
    },
    placement: {
      type: String
    }
  },
  watch: {
    show: function show(val) {
      var _this = this;

      if (this._timeout) clearTimeout(this._timeout);
      if (val && Boolean(this.duration)) {
        this._timeout = setTimeout(function () {
          _this.show = false;
        }, this.duration);
      }
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    class: {
      'alert': true,
      'alert-success': (_vm.type == 'success'),
      'alert-warning': (_vm.type == 'warning'),
      'alert-info': (_vm.type == 'info'),
      'alert-danger': (_vm.type == 'danger'),
      'top': (_vm.placement === 'top'),
      'top-right': (_vm.placement === 'top-right')
    },
    style: ({
      width: _vm.width
    }),
    attrs: {
      "transition": "fade",
      "role": "alert"
    }
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dismissable),
      expression: "dismissable"
    }],
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.show = false
      }
    }
  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4cbaf381", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(13)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(16),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\inetpub\\wwwroot\\afra7kom\\node_modules\\vue-strap\\src\\Typeahead.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Typeahead.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21b00e68", Component.options)
  } else {
    hotAPI.reload("data-v-21b00e68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("39da44cc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21b00e68\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21b00e68\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Vue = window.Vue;
var _DELAY_ = 200;

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.items = this.primitiveData;
  },

  partials: {
    default: '<span v-html="item | highlight value"></span>'
  },
  props: {
    value: {
      twoWay: true,
      type: String,
      default: ''
    },
    data: {
      type: Array
    },
    limit: {
      type: Number,
      default: 8
    },
    async: {
      type: String
    },
    template: {
      type: String
    },
    templateName: {
      type: String,
      default: 'default'
    },
    key: {
      type: String,
      default: null
    },
    matchCase: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: false
    },
    matchStart: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: false
    },
    onHit: {
      type: Function,
      default: function _default(items) {
        this.reset();
        this.value = items;
      }
    },
    placeholder: {
      type: String
    },
    delay: {
      type: Number,
      default: _DELAY_,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].number
    }
  },
  data: function data() {
    return {
      showDropdown: false,
      noResults: true,
      current: 0,
      items: []
    };
  },

  computed: {
    primitiveData: function primitiveData() {
      var _this = this;

      if (this.data) {
        return this.data.filter(function (value) {
          value = _this.matchCase ? value : value.toLowerCase();
          var query = _this.matchCase ? _this.value : _this.value.toLowerCase();
          return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
        }).slice(0, this.limit);
      }
    }
  },
  ready: function ready() {
    // register a partial:
    if (this.templateName && this.templateName !== 'default') {
      Vue.partial(this.templateName, this.template);
    }
  },

  methods: {
    update: function update() {
      if (!this.value) {
        this.reset();
        return false;
      }
      if (this.data) {
        this.items = this.primitiveData;
        this.showDropdown = this.items.length > 0;
      }
      if (this.async) this.query();
    },

    query: Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["b" /* delayer */])(function () {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["c" /* getJSON */])(this.async + this.value).then(function (data) {
        _this2.items = (_this2.key ? data[_this2.key] : data).slice(0, _this2.limit);
        _this2.showDropdown = _this2.items.length;
      });
    }, 'delay', _DELAY_),
    reset: function reset() {
      this.items = [];
      this.value = '';
      this.loading = false;
      this.showDropdown = false;
    },
    setActive: function setActive(index) {
      this.current = index;
    },
    isActive: function isActive(index) {
      return this.current === index;
    },
    hit: function hit(e) {
      e.preventDefault();
      this.onHit(this.items[this.current], this);
    },
    up: function up() {
      if (this.current > 0) this.current--;
    },
    down: function down() {
      if (this.current < this.items.length - 1) this.current++;
    }
  },
  filters: {
    highlight: function highlight(value, phrase) {
      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: {
      'open': _vm.showDropdown
    },
    staticStyle: {
      "position": "relative"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }, _vm.update],
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        _vm.up($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        _vm.down($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.hit($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.reset($event)
      }],
      "blur": function($event) {
        _vm.showDropdown = false
      }
    }
  }), _vm._v(" "), _c('ul', {
    directives: [{
      name: "el",
      rawName: "v-el:dropdown",
      arg: "dropdown"
    }],
    staticClass: "dropdown-menu"
  }, _vm._l((_vm.items), function(item) {
    return _c('li', {
      class: {
        'active': _vm.isActive(_vm.$index)
      }
    }, [_c('a', {
      on: {
        "mousedown": function($event) {
          $event.preventDefault();
          _vm.hit($event)
        },
        "mousemove": function($event) {
          _vm.setActive(_vm.$index)
        }
      }
    }, [_c('partial', {
      attrs: {
        "name": _vm.templateName
      }
    })], 1)])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-21b00e68", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(21),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-514abc4e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\inetpub\\wwwroot\\afra7kom\\node_modules\\vue-strap\\src\\Checkbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Checkbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-514abc4e", Component.options)
  } else {
    hotAPI.reload("data-v-514abc4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("f60153b4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-514abc4e\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-514abc4e\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\nlabel.checkbox[data-v-514abc4e] {\n  position: relative;\n  padding-left: 18px;\n}\nlabel.checkbox > input[data-v-514abc4e] {\n  box-sizing: border-box;\n  position: absolute;\n  z-index: -1;\n  padding: 0;\n  opacity: 0;\n  margin: 0;\n}\nlabel.checkbox > .icon[data-v-514abc4e] {\n  position: absolute;\n  top: .2rem;\n  left: 0;\n  display: block;\n  width: 1.4rem;\n  height: 1.4rem;\n  line-height:1rem;\n  text-align: center;\n  user-select: none;\n  border-radius: .35rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\nlabel.checkbox:not(.active) > .icon[data-v-514abc4e] {\n  background-color: #ddd;\n  border: 1px solid #bbb;\n}\nlabel.checkbox > input:focus ~ .icon[data-v-514abc4e] {\n  outline: 0;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\nlabel.checkbox.active > .icon[data-v-514abc4e] {\n  background-size: 1rem 1rem;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\n}\nlabel.checkbox.active .btn-default[data-v-514abc4e] { filter: brightness(75%);\n}\nlabel.checkbox.disabled[data-v-514abc4e],\nlabel.checkbox.readonly[data-v-514abc4e],\n.btn.readonly[data-v-514abc4e] {\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\nlabel.btn > input[type=checkbox][data-v-514abc4e] {\n  position: absolute;\n  clip: rect(0,0,0,0);\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      default: true
    },
    checked: {
      twoWay: true
    },
    button: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: false
    },
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    active: function active() {
      return typeof this.value !== 'boolean' && this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value;
    },
    isButton: function isButton() {
      return this.button || this.group && this.$parent.buttons;
    },
    group: function group() {
      return this.$parent && this.$parent._checkboxGroup;
    },
    typeColor: function typeColor() {
      return this.type || this.$parent && this.$parent.type || 'default';
    }
  },
  watch: {
    checked: function checked(val) {
      if (typeof this.value !== 'boolean' && this.group) {
        if (this.checked && !~this.$parent.value.indexOf(this.value)) this.$parent.value.push(this.value);
        if (!this.checked && ~this.$parent.value.indexOf(this.value)) this.$parent.value.$remove(this.value);
      }
    }
  },
  created: function created() {
    if (typeof this.value === 'boolean') {
      return;
    }
    var parent = this.$parent;
    if (parent && parent._btnGroup && !parent._radioGroup) {
      parent._checkboxGroup = true;
      if (!(parent.value instanceof Array)) {
        parent.value = [];
      }
    }
  },
  ready: function ready() {
    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') {
      return;
    }
    if (this.$parent.value.length) {
      this.checked = ~this.$parent.value.indexOf(this.value);
    } else if (this.checked) {
      this.$parent.value.push(this.value);
    }
  },

  methods: {
    eval: function _eval() {
      if (typeof this.value !== 'boolean' && this.group) {
        this.checked = ~this.$parent.value.indexOf(this.value);
      }
    },
    focus: function focus() {
      this.$els.input.focus();
    },
    toggle: function toggle() {
      if (!this.disabled) {
        this.focus();
        if (!this.readonly) {
          this.checked = this.checked ? null : this.value;
          if (this.group && typeof this.value !== 'boolean') {
            var index = this.$parent.value.indexOf(this.value);
            this.$parent.value[~index ? '$remove' : 'push'](this.value);
          }
        }
      }
      return false;
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: [_vm.isButton ? 'btn btn-' + _vm.typeColor : 'open checkbox ' + _vm.typeColor, {
      active: _vm.checked,
      disabled: _vm.disabled,
      readonly: _vm.readonly
    }],
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.toggle($event)
      }
    }
  }, [_c('input', {
    directives: [{
      name: "el",
      rawName: "v-el:input",
      arg: "input"
    }],
    attrs: {
      "type": "checkbox",
      "autocomplete": "off",
      "name": _vm.name,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": _vm.active,
      "value": _vm.value
    }
  }), _vm._v(" "), (!_vm.isButton) ? _c('span', {
    staticClass: "icon dropdown-toggle",
    class: [_vm.active ? 'btn-' + _vm.typeColor : '', {
      bg: _vm.typeColor === 'default'
    }]
  }) : _vm._e(), _vm._v(" "), (!_vm.isButton & _vm.active && _vm.typeColor === 'default') ? _c('span', {
    staticClass: "icon"
  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-514abc4e", module.exports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);