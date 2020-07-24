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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _styles_screen_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_screen_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dist_index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _dist_index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dist_index_html__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body {\n  background-color: black;\n  color: white;\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0 auto;\n  overflow-x: hidden;\n  position: relative;\n}\n\n/* Apply a filter to background image: https://css-tricks.com/apply-a-filter-to-a-background-image/ */\n\n.background-image,\n.background-container {\n  position: relative;\n}\n\n.background-image::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-blend-mode: darken;\n  background-image: url(\n    " + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n    linear-gradient(\n      to right,\n      #45607c 0%,\n      #56698f 50%,\n      #6e5887 75%,\n      #825a7a 100%\n    );\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(4px);\n}\n\n.visually-hidden:not(:focus):not(:active) {\n  clip-path: inset(50%);\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.skip-link {\n  color: #fff;\n  font-size: 1em;\n  left: 0;\n  padding: 0.5em 1em;\n  position: fixed;\n  right: 0;\n  text-align: center;\n  top: -30em;\n  transition: top 0.1s linear;\n  z-index: 20;\n}\n\n.content-wrapper {\n  margin: 0 auto;\n  max-width: 90vw;\n}\n\nmain {\n  margin: 0 auto;\n  padding: 2vw 0;\n}\n\n.main-header,\n.footer, .fine-print {\n  padding: 1rem 0;\n}\n\n.main-nav,\n.footer {\n  margin-top: 1em;\n}\n\n.ul-links {\n  align-items: center;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.main-nav-list {\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.main-nav-item,\n.privacy-link {\n  font-size: 0.9em;\n}\n\n.ul-link a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.ul-link a:hover {\n  text-align: white;\n  text-decoration: underline;\n  text-decoration-skip-ink: auto;\n}\n\n.ul-link a:focus  {\n  background-color: #493072;\n  border-radius: 4px;\n  font-weight: bold;\n  padding: 0.5em 1em;\n}\n\n.featured-links {\n  display: flex;\n  flex-direction: column;\n}\n\n.featured-video,\n.featured-project,\n.album-cover {\n  max-width: 100%;\n}\n\n.featured-project {\n  align-self: center;\n  padding-top: 1rem;\n}\n\n.iframe-container {\n  overflow: hidden;\n  padding-top: 56.25%;\n  position: relative;\n}\n\n.iframe-container iframe {\n  border: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n/* 4x3 Aspect Ratio */\n.iframe-container-4x3 {\n  padding-top: 75%;\n}\n\n.footer,\n.privacy-links {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.social-media-links {\n  flex-direction: row;\n}\n\n.social-media-link {\n  font-size: 1.5em;\n  padding: 0 0.5em;\n}\n\n.privacy-link {\n  padding: 0.25em 0;\n}\n\n.fine-print {\n  font-size: 0.9em;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1ed767162b2d4531a6810d7d2c08d388.jpg");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(8);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (min-width: 360px) {\n  .main-nav-list {\n    flex-direction: row;\n  }\n}\n\n@media (min-width: 768px) {\n  .main-nav-list {\n    padding: 0 15%;\n  }\n\n  .featured-links {\n    margin: 0 10vw;\n  }\n}\n\n@media (min-width: 1024px) {\n  .main-nav-list {\n    padding: 0 35%;\n  }\n\n  .main-nav-item {\n    font-size: 1rem;\n  }\n\n  .background-image::before {\n    filter: blur(8px);\n  }\n\n  .featured-links {\n    margin: 0 25vw;\n  }\n\n  .privacy-links {\n    flex-direction: row;\n  }\n\n  .privacy-link {\n    padding: 0 0.5em;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(10);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(11);
// Module
var ___HTML_LOADER_REPLACER_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Still need to review & add applicable meta tags. -->\n    <meta charset=\"UTF-8\" />\n    <meta name=\"language\" content=\"en\" />\n    <meta\n      name=\"description\"\n      content=\"Drea Da Kidd - American rapper and songwriter\"\n    />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Drea Da Kidd, American rapper and songwriter</title>\n    <script\n      src=\"https://kit.fontawesome.com/67fd6c9032.js\"\n      crossorigin=\"anonymous\"\n    ></script>\n  </head>\n  <body>\n    <div class=\"background-image\">\n      <div class=\"background-container\">\n        <a href=\"#main\" class=\"skip-link\">Skip to main content</a>\n        <header class=\"main-header\">\n          <div class=\"content-wrapper\">\n            <h1>\n              <a href=\"#\" title=\"DreaDaKidd.com\">\n                <span class=\"visually-hidden\">Drea Da Kidd</span>\n                <!-- Still waiting on logo, may be an img or svg. -->\n                <img src=\"#\" alt=\"\" />\n              </a>\n            </h1>\n            <nav id=\"main-nav\" class=\"main-nav\" aria-label=\"Main\">\n              <ul class=\"main-nav-list ul-links\">\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Merch</a></li>\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Shows</a></li>\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Videos</a></li>\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Music</a></li>\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Booking</a></li>\n              </ul>\n            </nav>\n          </div>\n        </header>\n        <main id=\"main\">\n          <div class=\"content-wrapper featured-links\">\n            <div class=\"iframe-container\">\n              <iframe\n                title=\"Drea Da Kidd performing 'I Can't Wait'\"\n                name=\"featured-video\"\n                class=\"featured-video\"\n                src=\"https://www.youtube-nocookie.com/embed/oZrfzjwLGZA\"\n                allowfullscreen\n              ></iframe>\n            </div>\n            <a href=\"https://linktr.ee/\" class=\"featured-project\">\n              <span class=\"visually-hidden\">Drea Da Kidd - See The Vision</span>\n              <picture>\n                <img\n                  class=\"album-cover\"\n                  sizes=\"(max-width: 508px) 100vw, 508px\"\n                  srcset=\"\n                    /images/dreadakidd-seethevision-albumcover__200.jpg 200w,\n                    /images/dreadakidd-seethevision-albumcover__330.jpg 330w,\n                    /images/dreadakidd-seethevision-albumcover__439.jpg 439w,\n                    /images/dreadakidd-seethevision-albumcover__508.jpg 508w\n                  \"\n                  src=\"/images/dreadakidd-seethevision-albumcover__508.jpg\"\n                  alt=\"\"\n                />\n              </picture>\n            </a>\n          </div>\n        </main>\n        <footer id=\"footer\">\n          <div class=\"content-wrapper footer\">\n            <ul class=\"social-media-links ul-links\">\n              <!-- Visual (but accessible) icons: https://a11y-101.com/development/icons-and-links -->\n              <li class=\"social-media-link ul-link\">\n                <a href=\"https://www.facebook.com/DreaDaKidd/\">\n                  <i class=\"fab fa-facebook-square\" aria-hidden=\"true\"></i>\n                  <span class=\"visually-hidden\">Facebook</span>\n                </a>\n              </li>\n              <li class=\"social-media-link ul-link\">\n                <a href=\"https://www.instagram.com/dreadakidd\">\n                  <i class=\"fab fa-instagram-square\" aria-hidden=\"true\"></i>\n                  <span class=\"visually-hidden\">Instagram</span>\n                </a>\n              </li>\n              <li class=\"social-media-link ul-link\">\n                <a href=\"https://twitter.com/dreadakidd\">\n                  <i class=\"fab fa-twitter-square\" aria-hidden=\"true\"></i>\n                  <span class=\"visually-hidden\">Twitter</span>\n                </a>\n              </li>\n              <li class=\"social-media-link ul-link\">\n                <a href=\"https://www.youtube.com/user/HeardGangWGB\">\n                  <i class=\"fab fa-youtube-square\" aria-hidden=\"true\"></i>\n                  <span class=\"visually-hidden\">YouTube</span>\n                </a>\n              </li>\n            </ul>\n            <p>\n              <small class=\"fine-print\">\n                &copy; 2020 / Copyright Drea Da Kidd. All rights reserved.\n              </small>\n            </p>\n            <ul class=\"privacy-links ul-links\">\n              <li class=\"ul-link\"><a href=\"#\">Privacy Policy</a></li>\n              <li class=\"ul-link\"><a href=\"#\">Terms and Conditions</a></li>\n            </ul>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"" + ___HTML_LOADER_REPLACER_0___ + "\"></script>\n  </body>\n</html>\n";
// Exports
module.exports = code;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  /* harmony import */


  var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */


  var _styles_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
  /* harmony import */


  var _styles_screen_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_screen_css__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */


  var _dist_index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
  /* harmony import */


  var _dist_index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dist_index_html__WEBPACK_IMPORTED_MODULE_2__);
  /***/

},
/* 1 */

/***/
function (module, exports, __webpack_require__) {
  var api = __webpack_require__(2);

  var content = __webpack_require__(3);

  content = content.__esModule ? content["default"] : content;

  if (typeof content === 'string') {
    content = [[module.i, content, '']];
  }

  var options = {};
  options.insert = "head";
  options.singleton = false;
  var update = api(content, options);
  module.exports = content.locals || {};
  /***/
},
/* 2 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  var isOldIE = function isOldIE() {
    var memo;
    return function memorize() {
      if (typeof memo === 'undefined') {
        // Test for IE <= 9 as proposed by Browserhacks
        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
        // Tests for existence of standard globals is to allow style-loader
        // to operate correctly into non-standard environments
        // @see https://github.com/webpack-contrib/style-loader/issues/177
        memo = Boolean(window && document && document.all && !window.atob);
      }

      return memo;
    };
  }();

  var getTarget = function getTarget() {
    var memo = {};
    return function memorize(target) {
      if (typeof memo[target] === 'undefined') {
        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
          try {
            // This will throw an exception if access to iframe is blocked
            // due to cross-origin restrictions
            styleTarget = styleTarget.contentDocument.head;
          } catch (e) {
            // istanbul ignore next
            styleTarget = null;
          }
        }

        memo[target] = styleTarget;
      }

      return memo[target];
    };
  }();

  var stylesInDom = [];

  function getIndexByIdentifier(identifier) {
    var result = -1;

    for (var i = 0; i < stylesInDom.length; i++) {
      if (stylesInDom[i].identifier === identifier) {
        result = i;
        break;
      }
    }

    return result;
  }

  function modulesToDom(list, options) {
    var idCountMap = {};
    var identifiers = [];

    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var id = options.base ? item[0] + options.base : item[0];
      var count = idCountMap[id] || 0;
      var identifier = "".concat(id, " ").concat(count);
      idCountMap[id] = count + 1;
      var index = getIndexByIdentifier(identifier);
      var obj = {
        css: item[1],
        media: item[2],
        sourceMap: item[3]
      };

      if (index !== -1) {
        stylesInDom[index].references++;
        stylesInDom[index].updater(obj);
      } else {
        stylesInDom.push({
          identifier: identifier,
          updater: addStyle(obj, options),
          references: 1
        });
      }

      identifiers.push(identifier);
    }

    return identifiers;
  }

  function insertStyleElement(options) {
    var style = document.createElement('style');
    var attributes = options.attributes || {};

    if (typeof attributes.nonce === 'undefined') {
      var nonce = true ? __webpack_require__.nc : undefined;

      if (nonce) {
        attributes.nonce = nonce;
      }
    }

    Object.keys(attributes).forEach(function (key) {
      style.setAttribute(key, attributes[key]);
    });

    if (typeof options.insert === 'function') {
      options.insert(style);
    } else {
      var target = getTarget(options.insert || 'head');

      if (!target) {
        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      }

      target.appendChild(style);
    }

    return style;
  }

  function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
      return false;
    }

    style.parentNode.removeChild(style);
  }
  /* istanbul ignore next  */


  var replaceText = function replaceText() {
    var textStore = [];
    return function replace(index, replacement) {
      textStore[index] = replacement;
      return textStore.filter(Boolean).join('\n');
    };
  }();

  function applyToSingletonTag(style, index, remove, obj) {
    var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

    /* istanbul ignore if  */

    if (style.styleSheet) {
      style.styleSheet.cssText = replaceText(index, css);
    } else {
      var cssNode = document.createTextNode(css);
      var childNodes = style.childNodes;

      if (childNodes[index]) {
        style.removeChild(childNodes[index]);
      }

      if (childNodes.length) {
        style.insertBefore(cssNode, childNodes[index]);
      } else {
        style.appendChild(cssNode);
      }
    }
  }

  function applyToTag(style, options, obj) {
    var css = obj.css;
    var media = obj.media;
    var sourceMap = obj.sourceMap;

    if (media) {
      style.setAttribute('media', media);
    } else {
      style.removeAttribute('media');
    }

    if (sourceMap && btoa) {
      css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
    } // For old IE

    /* istanbul ignore if  */


    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  }

  var singleton = null;
  var singletonCounter = 0;

  function addStyle(obj, options) {
    var style;
    var update;
    var remove;

    if (options.singleton) {
      var styleIndex = singletonCounter++;
      style = singleton || (singleton = insertStyleElement(options));
      update = applyToSingletonTag.bind(null, style, styleIndex, false);
      remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
      style = insertStyleElement(options);
      update = applyToTag.bind(null, style, options);

      remove = function remove() {
        removeStyleElement(style);
      };
    }

    update(obj);
    return function updateStyle(newObj) {
      if (newObj) {
        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
          return;
        }

        update(obj = newObj);
      } else {
        remove();
      }
    };
  }

  module.exports = function (list, options) {
    options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page

    if (!options.singleton && typeof options.singleton !== 'boolean') {
      options.singleton = isOldIE();
    }

    list = list || [];
    var lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
      newList = newList || [];

      if (Object.prototype.toString.call(newList) !== '[object Array]') {
        return;
      }

      for (var i = 0; i < lastIdentifiers.length; i++) {
        var identifier = lastIdentifiers[i];
        var index = getIndexByIdentifier(identifier);
        stylesInDom[index].references--;
      }

      var newLastIdentifiers = modulesToDom(newList, options);

      for (var _i = 0; _i < lastIdentifiers.length; _i++) {
        var _identifier = lastIdentifiers[_i];

        var _index = getIndexByIdentifier(_identifier);

        if (stylesInDom[_index].references === 0) {
          stylesInDom[_index].updater();

          stylesInDom.splice(_index, 1);
        }
      }

      lastIdentifiers = newLastIdentifiers;
    };
  };
  /***/

},
/* 3 */

/***/
function (module, exports, __webpack_require__) {
  // Imports
  var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);

  var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);

  var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);

  exports = ___CSS_LOADER_API_IMPORT___(false);

  var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___); // Module


  exports.push([module.i, "body {\n  background-color: black;\n  color: white;\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0 auto;\n  overflow-x: hidden;\n  position: relative;\n}\n\n/* Apply a filter to background image: https://css-tricks.com/apply-a-filter-to-a-background-image/ */\n\n.background-image,\n.background-container {\n  position: relative;\n}\n\n.background-image::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-blend-mode: darken;\n  background-image: url(\n    " + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n    linear-gradient(\n      to right,\n      #45607c 0%,\n      #56698f 50%,\n      #6e5887 75%,\n      #825a7a 100%\n    );\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(4px);\n}\n\n.visually-hidden:not(:focus):not(:active) {\n  clip-path: inset(50%);\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.skip-link {\n  color: #fff;\n  font-size: 1em;\n  left: 0;\n  padding: 0.5em 1em;\n  position: fixed;\n  right: 0;\n  text-align: center;\n  top: -30em;\n  transition: top 0.1s linear;\n  z-index: 20;\n}\n\n.content-wrapper {\n  margin: 0 auto;\n  max-width: 90vw;\n}\n\nmain {\n  margin: 0 auto;\n  padding: 2vw 0;\n}\n\n.main-header,\n.footer, .fine-print {\n  padding: 1rem 0;\n}\n\n.main-nav,\n.footer {\n  margin-top: 1em;\n}\n\n.ul-links {\n  align-items: center;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.main-nav-list {\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.main-nav-item,\n.privacy-link {\n  font-size: 0.9em;\n}\n\n.ul-link a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.ul-link a:hover {\n  text-align: white;\n  text-decoration: underline;\n  text-decoration-skip-ink: auto;\n}\n\n.ul-link a:focus  {\n  background-color: #493072;\n  border-radius: 4px;\n  font-weight: bold;\n  padding: 0.5em 1em;\n}\n\n.featured-links {\n  display: flex;\n  flex-direction: column;\n}\n\n.featured-video,\n.featured-project,\n.album-cover {\n  max-width: 100%;\n}\n\n.featured-project {\n  align-self: center;\n  padding-top: 1rem;\n}\n\n.iframe-container {\n  overflow: hidden;\n  padding-top: 56.25%;\n  position: relative;\n}\n\n.iframe-container iframe {\n  border: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n/* 4x3 Aspect Ratio */\n.iframe-container-4x3 {\n  padding-top: 75%;\n}\n\n.footer,\n.privacy-links {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.social-media-links {\n  flex-direction: row;\n}\n\n.social-media-link {\n  font-size: 1.5em;\n  padding: 0 0.5em;\n}\n\n.privacy-link {\n  padding: 0.25em 0;\n}\n\n.fine-print {\n  font-size: 0.9em;\n}", ""]); // Exports

  module.exports = exports;
  /***/
},
/* 4 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";
  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  // eslint-disable-next-line func-names

  module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string

    list.toString = function toString() {
      return this.map(function (item) {
        var content = cssWithMappingToString(item, useSourceMap);

        if (item[2]) {
          return "@media ".concat(item[2], " {").concat(content, "}");
        }

        return content;
      }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names


    list.i = function (modules, mediaQuery, dedupe) {
      if (typeof modules === 'string') {
        // eslint-disable-next-line no-param-reassign
        modules = [[null, modules, '']];
      }

      var alreadyImportedModules = {};

      if (dedupe) {
        for (var i = 0; i < this.length; i++) {
          // eslint-disable-next-line prefer-destructuring
          var id = this[i][0];

          if (id != null) {
            alreadyImportedModules[id] = true;
          }
        }
      }

      for (var _i = 0; _i < modules.length; _i++) {
        var item = [].concat(modules[_i]);

        if (dedupe && alreadyImportedModules[item[0]]) {
          // eslint-disable-next-line no-continue
          continue;
        }

        if (mediaQuery) {
          if (!item[2]) {
            item[2] = mediaQuery;
          } else {
            item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
          }
        }

        list.push(item);
      }
    };

    return list;
  };

  function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

    var cssMapping = item[3];

    if (!cssMapping) {
      return content;
    }

    if (useSourceMap && typeof btoa === 'function') {
      var sourceMapping = toComment(cssMapping);
      var sourceURLs = cssMapping.sources.map(function (source) {
        return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
      });
      return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }

    return [content].join('\n');
  } // Adapted from convert-source-map (MIT)


  function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
  }
  /***/

},
/* 5 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  module.exports = function (url, options) {
    if (!options) {
      // eslint-disable-next-line no-param-reassign
      options = {};
    } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


    url = url && url.__esModule ? url["default"] : url;

    if (typeof url !== 'string') {
      return url;
    } // If url is already wrapped in quotes, remove them


    if (/^['"].*['"]$/.test(url)) {
      // eslint-disable-next-line no-param-reassign
      url = url.slice(1, -1);
    }

    if (options.hash) {
      // eslint-disable-next-line no-param-reassign
      url += options.hash;
    } // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls


    if (/["'() \t\n]/.test(url) || options.needQuotes) {
      return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
    }

    return url;
  };
  /***/

},
/* 6 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */


  __webpack_exports__["default"] = __webpack_require__.p + "1ed767162b2d4531a6810d7d2c08d388.jpg";
  /***/
},
/* 7 */

/***/
function (module, exports, __webpack_require__) {
  var api = __webpack_require__(2);

  var content = __webpack_require__(8);

  content = content.__esModule ? content["default"] : content;

  if (typeof content === 'string') {
    content = [[module.i, content, '']];
  }

  var options = {};
  options.insert = "head";
  options.singleton = false;
  var update = api(content, options);
  module.exports = content.locals || {};
  /***/
},
/* 8 */

/***/
function (module, exports, __webpack_require__) {
  // Imports
  var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);

  exports = ___CSS_LOADER_API_IMPORT___(false); // Module

  exports.push([module.i, "@media (min-width: 360px) {\n  .main-nav-list {\n    flex-direction: row;\n  }\n}\n\n@media (min-width: 768px) {\n  .main-nav-list {\n    padding: 0 15%;\n  }\n\n  .featured-links {\n    margin: 0 10vw;\n  }\n}\n\n@media (min-width: 1024px) {\n  .main-nav-list {\n    padding: 0 35%;\n  }\n\n  .main-nav-item {\n    font-size: 1rem;\n  }\n\n  .background-image::before {\n    filter: blur(8px);\n  }\n\n  .featured-links {\n    margin: 0 25vw;\n  }\n\n  .privacy-links {\n    flex-direction: row;\n  }\n\n  .privacy-link {\n    padding: 0 0.5em;\n  }\n}\n", ""]); // Exports

  module.exports = exports;
  /***/
},
/* 9 */

/***/
function (module, exports, __webpack_require__) {
  // Imports
  var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(10);

  var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(11); // Module


  var ___HTML_LOADER_REPLACER_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);

  var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Still need to review & add applicable meta tags. -->\n    <meta charset=\"UTF-8\" />\n    <meta name=\"language\" content=\"en\" />\n    <meta\n      name=\"description\"\n      content=\"Drea Da Kidd - American rapper and songwriter\"\n    />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Drea Da Kidd, American rapper and songwriter</title>\n    <script\n      src=\"https://kit.fontawesome.com/67fd6c9032.js\"\n      crossorigin=\"anonymous\"\n    ></script>\n  </head>\n  <body>\n    <div class=\"background-image\">\n      <div class=\"background-container\">\n        <a href=\"#main\" class=\"skip-link\">Skip to main content</a>\n        <header class=\"main-header\">\n          <div class=\"content-wrapper\">\n            <h1>\n              <a href=\"#\" title=\"DreaDaKidd.com\">\n                <span class=\"visually-hidden\">Drea Da Kidd</span>\n                <!-- Still waiting on logo, may be an img or svg. -->\n                <img src=\"#\" alt=\"\" />\n              </a>\n            </h1>\n            <nav id=\"main-nav\" class=\"main-nav\" aria-label=\"Main\">\n              <ul class=\"main-nav-list ul-links\">\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Merch</a></li>\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Shows</a></li>\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Videos</a></li>\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Music</a></li>\n                <li class=\"main-nav-item ul-link\"><a href=\"#\">Booking</a></li>\n              </ul>\n            </nav>\n          </div>\n        </header>\n        <main id=\"main\">\n          <div class=\"content-wrapper featured-links\">\n            <div class=\"iframe-container\">\n              <iframe\n                title=\"Drea Da Kidd performing 'I Can't Wait'\"\n                name=\"featured-video\"\n                class=\"featured-video\"\n                src=\"https://www.youtube-nocookie.com/embed/oZrfzjwLGZA\"\n                allowfullscreen\n              ></iframe>\n            </div>\n            <a href=\"https://linktr.ee/\" class=\"featured-project\">\n              <span class=\"visually-hidden\">Drea Da Kidd - See The Vision</span>\n              <picture>\n                <img\n                  class=\"album-cover\"\n                  sizes=\"(max-width: 508px) 100vw, 508px\"\n                  srcset=\"\n                    /images/dreadakidd-seethevision-albumcover__200.jpg 200w,\n                    /images/dreadakidd-seethevision-albumcover__330.jpg 330w,\n                    /images/dreadakidd-seethevision-albumcover__439.jpg 439w,\n                    /images/dreadakidd-seethevision-albumcover__508.jpg 508w\n                  \"\n                  src=\"/images/dreadakidd-seethevision-albumcover__508.jpg\"\n                  alt=\"\"\n                />\n              </picture>\n            </a>\n          </div>\n        </main>\n        <footer id=\"footer\">\n          <div class=\"content-wrapper footer\">\n            <ul class=\"social-media-links ul-links\">\n              <!-- Visual (but accessible) icons: https://a11y-101.com/development/icons-and-links -->\n              <li class=\"social-media-link ul-link\">\n                <a href=\"https://www.facebook.com/DreaDaKidd/\">\n                  <i class=\"fab fa-facebook-square\" aria-hidden=\"true\"></i>\n                  <span class=\"visually-hidden\">Facebook</span>\n                </a>\n              </li>\n              <li class=\"social-media-link ul-link\">\n                <a href=\"https://www.instagram.com/dreadakidd\">\n                  <i class=\"fab fa-instagram-square\" aria-hidden=\"true\"></i>\n                  <span class=\"visually-hidden\">Instagram</span>\n                </a>\n              </li>\n              <li class=\"social-media-link ul-link\">\n                <a href=\"https://twitter.com/dreadakidd\">\n                  <i class=\"fab fa-twitter-square\" aria-hidden=\"true\"></i>\n                  <span class=\"visually-hidden\">Twitter</span>\n                </a>\n              </li>\n              <li class=\"social-media-link ul-link\">\n                <a href=\"https://www.youtube.com/user/HeardGangWGB\">\n                  <i class=\"fab fa-youtube-square\" aria-hidden=\"true\"></i>\n                  <span class=\"visually-hidden\">YouTube</span>\n                </a>\n              </li>\n            </ul>\n            <p>\n              <small class=\"fine-print\">\n                &copy; 2020 / Copyright Drea Da Kidd. All rights reserved.\n              </small>\n            </p>\n            <ul class=\"privacy-links ul-links\">\n              <li class=\"ul-link\"><a href=\"#\">Privacy Policy</a></li>\n              <li class=\"ul-link\"><a href=\"#\">Terms and Conditions</a></li>\n            </ul>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"" + ___HTML_LOADER_REPLACER_0___ + "\"></script>\n  </body>\n</html>\n"; // Exports

  module.exports = code;
  /***/
},
/* 10 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  module.exports = function (url, options) {
    if (!options) {
      // eslint-disable-next-line no-param-reassign
      options = {};
    } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


    url = url && url.__esModule ? url["default"] : url;

    if (typeof url !== 'string') {
      return url;
    }

    if (options.hash) {
      // eslint-disable-next-line no-param-reassign
      url += options.hash;
    }

    if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
      return "\"".concat(url, "\"");
    }

    return url;
  };
  /***/

},
/* 11 */

/***/
function (module, exports, __webpack_require__) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }
  /******/


  (function (modules) {
    // webpackBootstrap

    /******/
    // The module cache

    /******/
    var installedModules = {};
    /******/

    /******/
    // The require function

    /******/

    function __webpack_require__(moduleId) {
      /******/

      /******/
      // Check if module is in cache

      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/
      // Create a new module (and put it into the cache)

      /******/


      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,

        /******/
        l: false,

        /******/
        exports: {}
        /******/

      };
      /******/

      /******/
      // Execute the module function

      /******/

      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/

      /******/
      // Flag the module as loaded

      /******/

      module.l = true;
      /******/

      /******/
      // Return the exports of the module

      /******/

      return module.exports;
      /******/
    }
    /******/

    /******/

    /******/
    // expose the modules object (__webpack_modules__)

    /******/


    __webpack_require__.m = modules;
    /******/

    /******/
    // expose the module cache

    /******/

    __webpack_require__.c = installedModules;
    /******/

    /******/
    // define getter function for harmony exports

    /******/

    __webpack_require__.d = function (exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/

    };
    /******/

    /******/
    // define __esModule on exports

    /******/


    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

    /******/
    // create a fake namespace object

    /******/
    // mode & 1: value is a module id, require it

    /******/
    // mode & 2: merge all properties of value into the ns

    /******/
    // mode & 4: return value when already ns object

    /******/
    // mode & 8|1: behave like require

    /******/


    __webpack_require__.t = function (value, mode) {
      /******/
      if (mode & 1) value = __webpack_require__(value);
      /******/

      if (mode & 8) return value;
      /******/

      if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
      /******/

      var ns = Object.create(null);
      /******/

      __webpack_require__.r(ns);
      /******/


      Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/

      if (mode & 2 && typeof value != 'string') for (var key in value) {
        __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
      }
      /******/

      return ns;
      /******/
    };
    /******/

    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/


    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
      /******/
      function getDefault() {
        return module['default'];
      } :
      /******/
      function getModuleExports() {
        return module;
      };
      /******/

      __webpack_require__.d(getter, 'a', getter);
      /******/


      return getter;
      /******/
    };
    /******/

    /******/
    // Object.prototype.hasOwnProperty.call

    /******/


    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/

    /******/
    // __webpack_public_path__

    /******/


    __webpack_require__.p = "";
    /******/

    /******/

    /******/
    // Load entry module and return exports

    /******/

    return __webpack_require__(__webpack_require__.s = 0);
    /******/
  })(
  /************************************************************************/

  /******/
  [
  /* 0 */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
    /* harmony import */


    var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _styles_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
    /* harmony import */


    var _styles_screen_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_screen_css__WEBPACK_IMPORTED_MODULE_1__);
    /***/

  },
  /* 1 */

  /***/
  function (module, exports, __webpack_require__) {
    var api = __webpack_require__(2);

    var content = __webpack_require__(3);

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    module.exports = content.locals || {};
    /***/
  },
  /* 2 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },
  /* 3 */

  /***/
  function (module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);

    var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);

    var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);

    exports = ___CSS_LOADER_API_IMPORT___(false);

    var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___); // Module


    exports.push([module.i, "body {\n  background-color: black;\n  color: white;\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0 auto;\n  overflow-x: hidden;\n  position: relative;\n}\n\n/* Apply a filter to background image: https://css-tricks.com/apply-a-filter-to-a-background-image/ */\n\n.background-image,\n.background-container {\n  position: relative;\n}\n\n.background-image::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-blend-mode: darken;\n  background-image: url(\n      " + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n    linear-gradient(\n      to right,\n      #45607c 0%,\n      #56698f 50%,\n      #6e5887 75%,\n      #825a7a 100%\n    );\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(4px);\n}\n\n.visually-hidden:not(:focus):not(:active) {\n  clip-path: inset(50%);\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.skip-link {\n  color: #fff;\n  font-size: 1em;\n  left: 0;\n  padding: 0.5em 1em;\n  position: fixed;\n  right: 0;\n  text-align: center;\n  top: -30em;\n  transition: top 0.1s linear;\n  z-index: 20;\n}\n\n.content-wrapper {\n  margin: 0 auto;\n  max-width: 90vw;\n}\n\nmain {\n  margin: 0 auto;\n  padding: 2vw 0;\n}\n\n.main-header,\n.footer, .fine-print {\n  padding: 1rem 0;\n}\n\n.main-nav,\n.footer {\n  margin-top: 1em;\n}\n\n.ul-links {\n  align-items: center;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.main-nav-list {\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.main-nav-item,\n.privacy-link {\n  font-size: 0.9em;\n}\n\n.ul-link a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.ul-link a:hover {\n  text-align: white;\n  text-decoration: underline;\n  text-decoration-skip-ink: auto;\n}\n\n.ul-link a:focus  {\n  background-color: #493072;\n  border-radius: 4px;\n  font-weight: bold;\n  padding: 0.5em 1em;\n}\n\n.featured-links {\n  display: flex;\n  flex-direction: column;\n}\n\n.featured-video,\n.featured-project,\n.album-cover {\n  max-width: 100%;\n}\n\n.featured-project {\n  align-self: center;\n  padding-top: 1rem;\n}\n\n.iframe-container {\n  overflow: hidden;\n  padding-top: 56.25%;\n  position: relative;\n}\n\n.iframe-container iframe {\n  border: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n/* 4x3 Aspect Ratio */\n.iframe-container-4x3 {\n  padding-top: 75%;\n}\n\n.footer,\n.privacy-links {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.social-media-links {\n  flex-direction: row;\n}\n\n.social-media-link {\n  font-size: 1.5em;\n  padding: 0 0.5em;\n}\n\n.privacy-link {\n  padding: 0.25em 0;\n}\n\n.fine-print {\n  font-size: 0.9em;\n}", ""]); // Exports

    module.exports = exports;
    /***/
  },
  /* 4 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },
  /* 5 */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = function (url, options) {
      if (!options) {
        // eslint-disable-next-line no-param-reassign
        options = {};
      } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


      url = url && url.__esModule ? url["default"] : url;

      if (typeof url !== 'string') {
        return url;
      } // If url is already wrapped in quotes, remove them


      if (/^['"].*['"]$/.test(url)) {
        // eslint-disable-next-line no-param-reassign
        url = url.slice(1, -1);
      }

      if (options.hash) {
        // eslint-disable-next-line no-param-reassign
        url += options.hash;
      } // Should url be wrapped?
      // See https://drafts.csswg.org/css-values-3/#urls


      if (/["'() \t\n]/.test(url) || options.needQuotes) {
        return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
      }

      return url;
    };
    /***/

  },
  /* 6 */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = __webpack_require__.p + "1ed767162b2d4531a6810d7d2c08d388.jpg";
    /***/
  },
  /* 7 */

  /***/
  function (module, exports, __webpack_require__) {
    var api = __webpack_require__(2);

    var content = __webpack_require__(8);

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    module.exports = content.locals || {};
    /***/
  },
  /* 8 */

  /***/
  function (module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);

    exports = ___CSS_LOADER_API_IMPORT___(false); // Module

    exports.push([module.i, "@media (min-width: 360px) {\n  .main-nav-list {\n    flex-direction: row;\n  }\n}\n\n@media (min-width: 768px) {\n  .main-nav-list {\n    padding: 0 15%;\n  }\n\n  .featured-links {\n    margin: 0 10vw;\n  }\n}\n\n@media (min-width: 1024px) {\n  .main-nav-list {\n    padding: 0 35%;\n  }\n\n  .main-nav-item {\n    font-size: 1rem;\n  }\n\n  .background-image::before {\n    filter: blur(8px);\n  }\n\n  .featured-links {\n    margin: 0 25vw;\n  }\n\n  .privacy-links {\n    flex-direction: row;\n  }\n\n  .privacy-link {\n    padding: 0 0.5em;\n  }\n}\n", ""]); // Exports

    module.exports = exports;
    /***/
  }
  /******/
  ]);
  /***/

}
/******/
]);

/***/ })
/******/ ]);