(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{227:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=""},229:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# async\n\n这个是 es7的特性\n\nasync 类似于 generator，用 async 代替 *，用 await 代替 yield\n\nasync 表示函数里面有异步操作，await 表示紧跟在后面的表达式需要等待结果\n\n但是 async 内置执行器，会自动执行\n"},230:function(module,exports,__webpack_require__){__webpack_require__(231),__webpack_require__(334),module.exports=__webpack_require__(335)},335:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(54),req=(__webpack_require__(499),__webpack_require__(517));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(109)(module))},517:function(module,exports,__webpack_require__){var map={"./stories/css/weather.stories.tsx":518,"./stories/js/async.stories.tsx":521};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=517},518:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54),_weather_md__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(520),__webpack_require__(227)),withStorySource=__webpack_require__(224).withStorySource,__STORY__="import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\n\nimport './weather.css';\nimport notes from './weather.md';\n\nstoriesOf('css|weather', module).add('all', () => <All />, {\n  notes: { markdown: notes },\n});\n\nfunction All() {\n  return (\n    <>\n      <div className=\"weather sunny\" style={{ marginRight: 10 }} />\n      <div className=\"weather cloudy\" style={{ marginRight: 10 }} />\n      <div className=\"weather rainy\" style={{ marginRight: 10 }} />\n      <div className=\"weather snowy\" />\n    </>\n  );\n}\n",__ADDS_MAP__={"css-weather--all":{startLoc:{col:37,line:8},endLoc:{col:1,line:10}}};function All(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"weather sunny",style:{marginRight:10}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"weather cloudy",style:{marginRight:10}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"weather rainy",style:{marginRight:10}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"weather snowy"}))}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("css|weather",module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).add("all",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(All,null)},{notes:{markdown:_weather_md__WEBPACK_IMPORTED_MODULE_3__.a}})}.call(this,__webpack_require__(109)(module))},520:function(module,exports,__webpack_require__){},521:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var _Users_huangrupeng_Code_js_hey_xiaohuanghuang_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(139),_Users_huangrupeng_Code_js_hey_xiaohuanghuang_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_huangrupeng_Code_js_hey_xiaohuanghuang_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_Users_huangrupeng_Code_js_hey_xiaohuanghuang_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(228),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(54),_async_md__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(229),withStorySource=__webpack_require__(224).withStorySource,__STORY__="import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\n\nimport notes from './async.md';\n\nstoriesOf('js|async', module).add('async', () => <Async />, {\n  notes: { markdown: notes },\n});\n\nfunction testAsync() {\n  function timeout(ms: number) {\n    return new Promise((resolve: any) => {\n      setTimeout(resolve('123'), ms);\n    });\n  }\n  // 返回是一个 Promise 对象\n  async function asyncPrint(value: string, ms: number) {\n    let x = 12;\n    let b = await timeout(ms);\n    console.log('b' + b);\n    console.log(value);\n    return x;\n  }\n\n  // async 表示函数内部有异步操作，调用该函数会立即返回一个 Promise 对象\n  // 遇到 await 会闲返回，等到异步操作完成，接着执行后面的语句\n  asyncPrint('hello world', 5000).then(function(result) {\n    console.log('result:' + result);\n  });\n}\n\nfunction Async() {\n  testAsync();\n  return <></>;\n}\n",__ADDS_MAP__={"js-async--async":{startLoc:{col:34,line:7},endLoc:{col:1,line:9}}};function Async(){return function testAsync(){function timeout(ms){return new Promise(function(resolve){setTimeout(resolve("123"),ms)})}function _asyncPrint(){return(_asyncPrint=Object(_Users_huangrupeng_Code_js_hey_xiaohuanghuang_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_huangrupeng_Code_js_hey_xiaohuanghuang_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value,ms){var x,b;return _Users_huangrupeng_Code_js_hey_xiaohuanghuang_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return x=12,_context.next=3,timeout(ms);case 3:return b=_context.sent,console.log("b"+b),console.log(value),_context.abrupt("return",x);case 7:case"end":return _context.stop()}},_callee)}))).apply(this,arguments)}(function asyncPrint(_x,_x2){return _asyncPrint.apply(this,arguments)})("hello world",5e3).then(function(result){console.log("result:"+result)})}(),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null)}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("js|async",module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).add("async",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Async,null)},{notes:{markdown:_async_md__WEBPACK_IMPORTED_MODULE_4__.a}})}.call(this,__webpack_require__(109)(module))}},[[230,1,2]]]);
//# sourceMappingURL=main.c586a74559f1818a8ea2.bundle.js.map