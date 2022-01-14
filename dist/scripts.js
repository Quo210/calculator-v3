/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n box-sizing: border-box;\\n}\\n\\n\\n:root {\\n--crimson: #d7263dff;\\n--oxford-blue: #02182bff;\\n--tufts-blue: #0197f6ff;\\n--blue-munsell: #448fa3ff;\\n--middle-blue: #68c5dbff;\\n}\\n\\nhtml {\\n    background-color: rgb(2, 24, 43);\\n    color: whitesmoke;\\n}\\n\\nmain {\\n    height: 750px;\\n    width: 900px;\\n    min-height: 75vh;\\n    min-width: 50vw;\\n    margin: auto;\\n\\n    border: 5px whitesmoke double;\\n    padding: 1rem;\\n\\n    display: grid;\\n    grid-template-columns: 50% auto;\\n    column-gap: 1rem;\\n    \\n    background-color: #0197F6;\\n\\n}\\n\\n.panel{\\n    display: grid;\\n    grid-template-columns: repeat(3,1fr);\\n    row-gap: 0.2rem;\\n    column-gap: 0.2rem;\\n    background-color: whitesmoke;\\n    border: 5px var(--oxford-blue) solid;\\n    padding: 0.25rem;\\n}\\n\\n.screen{\\n    border: 5px white solid;\\n    font-size: 32px;\\n    padding: 0.5rem;\\n\\n    display: grid;\\n    grid-template-rows: 90% auto;\\n    row-gap: 1rem;\\n\\n    overflow-y: hidden;\\n    background-color: var(--oxford-blue);\\n\\n}\\n\\n.row {\\n    background-color: #448FA3;\\n    text-align: right;\\n    border: 5px  solid;\\n    padding: 0.25rem;\\n\\n}\\n\\n.log{\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    align-content: flex-end;\\n    overflow-y: hidden;\\n    \\n}\\n\\n.logbox{\\n    width: 20px;\\n    min-width: 100%;\\n    background-color: aliceblue;\\n    color: black;\\n    margin-top: 0.5rem;\\n    margin: 2.5px black solid;\\n    transition: 0.25s;\\n}\\n\\n.logbox:hover{\\n    background-color: var(--crimson);\\n    cursor: pointer;\\n    color: white;\\n}\\n\\n.panel > button {\\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n    font-size: 200%;\\n}\\n\\nh1 {\\n    text-align: center;\\n    color: var(--crimson);\\n    font-size: 300%;\\n    transition: 0.25s;\\n}\\n\\nh1:hover{\\n    color: white;\\n}\\n\\nbutton{\\n    border-color: black;\\n    transition-duration: 0.25s;\\n}\\n\\nbutton:hover{\\n    color: white;\\n    font-weight: bold;\\n}\\n\\nbutton.number{\\n    background-color: var(--middle-blue);\\n}\\n\\nbutton.number:hover{\\n    background-color: var(--crimson);\\n}\\n\\nbutton.opbtn:hover{\\n    background-color: var(--blue-munsell);\\n}\\n\\nbutton.fnbtn:hover{\\n    background-color: var(--crimson);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator-v3/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calculator-v3/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calculator-v3/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calculator-v3/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator-v3/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calculator-v3/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator-v3/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calculator-v3/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator-v3/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calculator-v3/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/html-elements.js":
/*!******************************!*\
  !*** ./src/html-elements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlElements\": () => (/* binding */ htmlElements)\n/* harmony export */ });\nconst htmlElements = (()=>{\n\n    function numbButtons(){\n        const buttons = [];//Create Buttons from 1 to 9\n        for (let i = 1;i < 10; i++){\n            const newButton = document.createElement('button');\n            newButton.classList.add('number');\n            newButton.setAttribute('data-key',`${i}`);\n            newButton.textContent = i;\n            buttons.push(newButton);\n        }\n        \n        //add 0 and dot to the button array\n        const zero = document.createElement('button');\n        zero.classList.add('number');\n        zero.setAttribute('data-key','0');\n        zero.textContent = '0';\n        const dot = document.createElement('button');\n        dot.classList.add('number');\n        dot.setAttribute('data-key','.');\n        dot.textContent = '.' \n\n        buttons.push(zero,dot);\n\n        return Array.from(buttons);\n    }\n\n    function operatorButtons(){\n        const opbuttons = makeButtons(4,'opbtn');\n        const fnButtons = makeButtons(3,'fnbtn')\n        const opTxt = ['+','-','*','/'];\n        const fnTxt = ['DEL','C','=']\n        const opKeys = ['add','subs','mult','div']\n        const fnKeys = ['del','clear','equals'];\n\n        identifyButtons(opbuttons,opTxt,opKeys);\n        identifyButtons(fnButtons,fnTxt,fnKeys);\n\n        const finalArr = opbuttons.concat(fnButtons);\n        \n        return finalArr\n    }\n\n    function makeButtons(quant,clazz){\n        const buttons = [];\n        for (let i = 0; i<quant; i++){\n            const newButton = document.createElement('button');\n            newButton.classList.add(clazz);\n            buttons.push(newButton)\n        }\n\n        return Array.from(buttons);\n    }\n\n    function makeLogBox(){\n        const newBox = document.createElement('div');\n        newBox.classList.toggle('logbox');\n        return newBox;\n    }\n\n    function identifyButtons(targetArr,txtArr,keyArr){\n        for (let i = 0; i < targetArr.length; i++){\n            targetArr[i].textContent = txtArr[i];\n            targetArr[i].setAttribute('data-key',`${keyArr[i]}`)\n        }\n    }\n\n    return {\n        mkNums: numbButtons,\n        mkOper: operatorButtons,\n        mkLBox: makeLogBox,\n    }\n\n})()\n\n//# sourceURL=webpack://calculator-v3/./src/html-elements.js?");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"math\": () => (/* binding */ math)\n/* harmony export */ });\nconst math = (()=>{\n\n    // Storage\n\n    const wVals = {\n        a: undefined,\n        b: undefined,\n        op: undefined,\n    }\n\n    // Getters, Setters\n\n\n    function getA(){\n        return wVals.a\n    }\n\n    function getB(){\n        return wVals.b\n    }\n\n    function getOp(){\n        return wVals.op\n    }\n\n    function setA(val){\n        wVals.a = val\n    }\n\n    function setB(val){\n        wVals.b = val\n    }\n\n    function setOp(val){\n        wVals.op = val\n    }\n\n    //Math Logic \n\n    function add(a,b){\n        return a + b\n    }\n\n    function subs(a,b){\n        return a - b\n    }\n\n    function mult(a,b){\n        return a * b\n    }\n\n    function divs(a,b){\n        if (b === 0){\n            alert('Can not divide by zero')\n            return a\n        }\n        return a / b\n    }\n\n    function verifyInteger(a){\n        if ( (typeof a) === 'number' ){\n            return a\n        } else {\n            return parseFloat(a)\n        }\n    }\n\n    function roundDecimals(val){\n        return Math.round( val * 100 ) / 100\n    }\n\n    function enableMath(val){\n        const myVal = verifyInteger(val);\n        const myRoundedVal = roundDecimals(myVal);\n        return myRoundedVal\n    }\n\n    function operate(a,b,operator){\n\n        const verfa = verifyInteger(a);\n        const verfb = verifyInteger(b);\n        let myResult = undefined;\n\n        console.log(verfa)\n        console.log(verfb)\n\n        switch(operator){\n            case '+':\n                myResult = add(verfa,verfb);\n                break;\n            case '-':\n                myResult = subs(verfa,verfb);\n                break;\n            case '*':\n                myResult = mult(verfa,verfb);\n                break;\n            case '/':\n                myResult = divs(verfa,verfb);\n                break;\n            default:\n                console.log('lol js so hard brain hurt :(')\n        }\n\n        return roundDecimals(myResult);\n    }\n  \n    function storeOnA(){\n        const aStatus = getA();\n        if (aStatus === undefined){\n            return true\n        } else {\n            return false\n        }\n    }\n\n    return {\n        getA,\n        getB,\n        getOp,\n        setA,\n        setB,\n        setOp,\n        operate,\n        verifyInteger,\n        choose: storeOnA,\n    }\n\n})()\n\n//# sourceURL=webpack://calculator-v3/./src/math.js?");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _html_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-elements */ \"./src/html-elements.js\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math */ \"./src/math.js\");\n\n\n\n\n\nconst myModule = (()=>{//Mostly DOM and joining other modules\n\nconst panel = document.querySelector('section.panel');\n\nconst numbers = _html_elements__WEBPACK_IMPORTED_MODULE_1__.htmlElements.mkNums();\nconst operators = _html_elements__WEBPACK_IMPORTED_MODULE_1__.htmlElements.mkOper();\n\n_tools__WEBPACK_IMPORTED_MODULE_2__.myTools.appendFromArr(panel,numbers)\n_tools__WEBPACK_IMPORTED_MODULE_2__.myTools.appendFromArr(panel,operators)\n\nfunction listenNumbers(){\n    const numbers = Array.from( document.querySelectorAll('.number') )\n    numbers.forEach(element => {\n\n        const key = element.getAttribute('data-key')\n\n        if (key != '.'){\n            element.addEventListener('click',function(e){\n                const data = e.target.textContent;\n                const intro = getIntro();\n                if (intro.textContent != '' && intro.textContent != '0'){\n                    intro.textContent += data;\n                } else {\n                    intro.textContent = data;\n                }\n            })    \n        } else {\n            element.addEventListener('click',function(e){\n                const data = e.target.textContent;\n                const intro = getIntro();\n                if (dotAllow()){\n                    if (intro.textContent != ''){\n                        intro.textContent += data;\n                    } else if (intro.textContent == '') {\n                        intro.textContent = `0${data}`;\n                    }\n            }\n            })\n        }\n\n        \n    })\n}\n\nfunction listenOperators(){\n    const operators = Array.from( document.querySelectorAll('.opbtn') );\n    operators.forEach(element => {\n        element.addEventListener('click',function(e){\n            const operator = e.target.textContent; // Get Operator string\n            // after it passes the check, get the number\n\n            let introBoxContent = getIntro().textContent;\n\n            const valueFallback = () => {\n                if (introBoxContent == '' || introBoxContent == undefined){\n                    return '0'\n                } else {\n                    return checkIfLastNumIsDot(introBoxContent)\n                }\n            }\n\n            let value = valueFallback();\n\n            //Also check if the last action was using an operator, if so... modify the display to reflect the new input and do not allow the function to continue it's normal path\n            const operatorStatus = checkOperatorStatus();\n            const dry = () => {\n                //store the value and the operator\n                //for the operator simply save it\n                _math__WEBPACK_IMPORTED_MODULE_3__.math.setOp(operator);\n                //for the value, a function decides where to store it: A or B value of the wVals object\n                let boolCheck = _math__WEBPACK_IMPORTED_MODULE_3__.math.choose();\n                setAorBTo(boolCheck,value);\n                //finally, post on the logbox. First Create two boxes:\n                const numBox = _html_elements__WEBPACK_IMPORTED_MODULE_1__.htmlElements.mkLBox();\n                const opBox = _html_elements__WEBPACK_IMPORTED_MODULE_1__.htmlElements.mkLBox();\n                // Fill them with info\n                numBox.textContent = value;\n                opBox.textContent = operator;\n                //Post them\n                postOnLog(numBox)\n                postOnLog(opBox)\n                //Reset Intro for new number\n                resetIntro();\n            }\n\n            //A condition for the case an user tries to input an operator without any number\n\n            if (operatorStatus === false){\n                dry();\n            } else {\n                const boxArr = Array.from( document.querySelectorAll('div.logbox') );\n                const lastBox = boxArr[boxArr.length-1];\n                lastBox.textContent = operator;\n                _math__WEBPACK_IMPORTED_MODULE_3__.math.setOp(operator);\n            }\n            \n        })\n    })\n}\n\nfunction listenClearAllBtn(){\n    const tar = getFnBtns()[1];\n    tar.addEventListener('click',function(e){\n        clearAll()\n    })\n}\n\nfunction listenDelBtn(){\n    const tar = getFnBtns()[0];\n    tar.addEventListener('click',function(e){\n        const newNumb = deleteLastNumber();\n        const intro = getIntro();\n        intro.textContent = newNumb;\n    })   \n}\n\nfunction listenEqualBtn(){\n    const tar = getFnBtns()[2];\n    tar.addEventListener('click',function(e){\n        //Declare varables to be used\n        const intro = getIntro();\n        const log = getLog();\n\n        //Determine and capture last number introduced by the user\n        const lastVal = checkIfLastNumIsDot(intro.textContent);\n        const boolCheck = _math__WEBPACK_IMPORTED_MODULE_3__.math.choose();\n        console.log(boolCheck)\n        setAorBTo(boolCheck,lastVal);\n\n        //Check if the conditions are given to call the math function\n        const v = checkNGetConditionsForMath();\n        console.log(v);\n        let result = undefined;\n\n        if (v != false){\n            result = _math__WEBPACK_IMPORTED_MODULE_3__.math.operate(v[0],v[1],v[2]);\n        } else {\n            alert('You need two numbers and one operator before calculating something.')\n            return\n        }\n\n        //Report the operator and the number in the logbox, reset the intro slot\n        const lastValBox = _html_elements__WEBPACK_IMPORTED_MODULE_1__.htmlElements.mkLBox();\n        lastValBox.textContent = lastVal;\n        log.appendChild(lastValBox);\n        resetIntro();\n\n       \n\n\n\n        //Make a box that posts an equal sign on the log\n        const eqBox = _html_elements__WEBPACK_IMPORTED_MODULE_1__.htmlElements.mkLBox();\n        eqBox.textContent = '=';\n        log.appendChild(eqBox);\n\n        //Post the result on the log\n        // const rBox = htmlElements.mkLBox();\n        // rBox.textContent = result;\n        // log.appendChild(rBox);\n\n        //Display result on the intro box\n        intro.textContent = result;\n\n        //Reset memory in preparation for new inputs\n        resetMemory();\n        _math__WEBPACK_IMPORTED_MODULE_3__.math.setOp(undefined);\n    })\n};\n\n// Tools\n\nfunction getFnBtns(){\n    return Array.from( document.querySelectorAll('.fnbtn') )  \n}\n\nfunction getIntro(){\n    return document.querySelector('.intro');\n}\n\nfunction postOnLog(item){\n    const log = document.querySelector('.log');\n    log.appendChild(item)\n}\n\nfunction setAorBTo(bool,value){\n    if (bool === true){\n        _math__WEBPACK_IMPORTED_MODULE_3__.math.setA(value);\n    } else {\n        _math__WEBPACK_IMPORTED_MODULE_3__.math.setB(value);\n    }\n}\n\nfunction getLog(){\n    return document.querySelector('.log');\n}\n\nfunction checkNGetConditionsForMath(){\n    const a = _math__WEBPACK_IMPORTED_MODULE_3__.math.getA();\n    const b = _math__WEBPACK_IMPORTED_MODULE_3__.math.getB();\n    const o = _math__WEBPACK_IMPORTED_MODULE_3__.math.getOp();\n    const myArr = [];\n    myArr.push(a,b,o);\n    const check = (value) => value != undefined && value != '';\n    const answer = myArr.every(check);\n    if (answer === true){\n        return myArr\n    } else {\n        console.log('CONDITIONS ARE NOT MET')\n        return false \n    }\n }\n\n function checkOperatorStatus(){\n     const myStatus = _math__WEBPACK_IMPORTED_MODULE_3__.math.getOp();\n     if (myStatus === undefined){\n         return false\n     } else {\n         return true\n     }\n }\n\n function getDotBtn(){\n     return document.querySelector('button[data-key=\".\"]')\n }\n\n function dotAllow(){//Check if we can allow another dot to be written in the introbox\n    const introText = getIntro().textContent;\n    if (introText.includes(\".\")){\n        return false\n    } else {\n        return true\n    }\n }\n\n function checkIfLastNumIsDot (str) {\n    const lastchar = str.charAt(str.length-1);\n    if (lastchar === '.'){\n        return str.substr(0,str.length-1);\n    } else {\n        return str\n    }\n}\n\n\n\n// Enable Listeners for Buttons\n\nlistenNumbers();\nlistenOperators();\nlistenClearAllBtn();\nlistenDelBtn();\nlistenEqualBtn();\n\n// Reset Area\n\nfunction resetIntro(){\n    const intro = getIntro();\n    intro.textContent = '';\n}\n\nfunction resetLog(){\n    const log = getLog();\n    log.innerHTML = '';\n}\n\nfunction resetMemory(){\n    _math__WEBPACK_IMPORTED_MODULE_3__.math.setA(undefined);\n    _math__WEBPACK_IMPORTED_MODULE_3__.math.setB(undefined);\n    _math__WEBPACK_IMPORTED_MODULE_3__.math.setOp(undefined);\n}\n\nfunction clearAll(){\n    resetIntro();\n    resetMemory();\n    resetLog();\n}\n\nfunction deleteLastNumber(){\n    const intro = getIntro().textContent;\n    let newStr = undefined;\n    const lastChar = intro.charAt(intro.length-1);\n\n    if (intro.length > 1){\n        const foo = intro.length-1;\n        newStr = intro.slice(0,foo);\n    } else {\n        newStr = '';\n    }\n\n    return newStr;\n}\n\n\nreturn {\n\n}\n\n\n})()\n\n//# sourceURL=webpack://calculator-v3/./src/scripts.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myTools\": () => (/* binding */ myTools)\n/* harmony export */ });\nconst myTools = (()=>{\n\n    function appendFromArr(target,array){\n        const mtar = target;\n        const marr = array;\n        marr.forEach(element => {\n            mtar.appendChild(element)\n        })\n    }\n\n    return {\n        appendFromArr,\n\n    }\n\n})()\n\n//# sourceURL=webpack://calculator-v3/./src/tools.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts.js");
/******/ 	
/******/ })()
;