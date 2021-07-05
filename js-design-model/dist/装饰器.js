/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./04装饰器模式.js":
/*!********************!*\
  !*** ./04装饰器模式.js ***!
  \********************/
/***/ (() => {

eval("var _dec, _class, _class2;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\nvar Demo = (_dec = test(false), _dec(_class = (_class2 = /*#__PURE__*/function () {\n  function Demo() {\n    _classCallCheck(this, Demo);\n  }\n\n  _createClass(Demo, [{\n    key: \"add\",\n    value: function add(a, b) {\n      return a + b;\n    }\n  }]);\n\n  return Demo;\n}(), (_applyDecoratedDescriptor(_class2.prototype, \"add\", [logDec], Object.getOwnPropertyDescriptor(_class2.prototype, \"add\"), _class2.prototype)), _class2)) || _class);\n\nfunction test(flag) {\n  return function (target) {\n    target.flag = flag;\n  };\n}\n\nfunction logDec(target, name, descriptor) {\n  var oldValue = descriptor.value;\n\n  descriptor.value = function () {\n    console.log('decorator log');\n    oldValue.apply(this, arguments);\n  };\n\n  return descriptor;\n}\n\nconsole.log(Demo.flag);\nvar d1 = new Demo();\nd1.add(1, 2);\n\n//# sourceURL=webpack://js-design-model/./04%E8%A3%85%E9%A5%B0%E5%99%A8%E6%A8%A1%E5%BC%8F.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./04装饰器模式.js"]();
/******/ 	
/******/ })()
;