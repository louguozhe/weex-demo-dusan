// { "framework": "Vue"} 

!function(e){function n(l){if(t[l])return t[l].exports;var c=t[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,n),c.l=!0,c.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=37)}({1:/*!*********************************************************************************************************************************************!*\
  !*** ./~/weex-vue-loader/lib/script-loader.js!./~/babel-loader/lib!./~/weex-vue-loader/lib/selector.js?type=script&index=0!./src/hello.vue ***!
  \*********************************************************************************************************************************************/
function(module,exports,__webpack_require__){"use strict";eval('\n\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar modal = weex.requireModule("modal");\nvar myMoudle = weex.requireModule("MyModule");\nvar phoneModule = weex.requireModule("PhoneModule");\nvar logModule = weex.requireModule("LogModule");\nmodule.exports = {\n  data: function data() {\n    return {\n      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",\n      target: "Weex"\n    };\n  },\n  mounted: function mounted() {\n    console.log("mounted", "mounted");\n    this.testSupports();\n  },\n\n  methods: {\n    sendMessage: function sendMessage() {\n      console.log("sendMessage", "sendMessage");\n      var bc = new BroadcastChannel("DuQian");\n      bc.postMessage(\'message from weex pageA\');\n    },\n\n    testToast: function testToast() {\n      modal.toast({\n        message: "clicked,A send message to B ",\n        duration: 1\n      });\n      this.target = "Nono";\n      this.sendMessage();\n      this.testSupports();\n    },\n    testEvent: function testEvent() {\n      myMoudle.printLog("myModule from A");\n      var that = this;\n      phoneModule.getPhoneInfo(function (event) {\n        var object = JSON.stringify(event);\n        logModule.log("weex-dq", "getPhoneInfo:" + object);\n        var obj = JSON.parse(event);\n        that.target = "getPhoneInfo=" + event;\n        modal.toast({\n          message: \'getPhoneInfo \' + that.target,\n          duration: 3\n        });\n      });\n    },\n\n    //测试weex是否支持某些模块和功能\n    testSupports: function testSupports() {\n      var net = weex.supports(\'@module/stream\'); // true\n      var my = weex.supports(\'@module/MyMoudle\'); // true\n      var dialog = weex.supports(\'@module/WeexDialogModule\');\n      var duqian = weex.supports(\'@module/MyMoudle.duqian\'); // false\n      var mytest = weex.supports(\'@module/duqian\'); // false\n      console.log("net", net);\n      modal.toast({\n        message: "是否有MyMoudle=" + my + ",dialog=" + dialog + ",是否支持stream= " + net + ",mytest=" + mytest,\n        duration: 10\n      });\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxsby52dWU/NGY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbnZhciBtb2RhbCA9IHdlZXgucmVxdWlyZU1vZHVsZShcIm1vZGFsXCIpO1xudmFyIG15TW91ZGxlID0gd2VleC5yZXF1aXJlTW9kdWxlKFwiTXlNb2R1bGVcIik7XG52YXIgcGhvbmVNb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoXCJQaG9uZU1vZHVsZVwiKTtcbnZhciBsb2dNb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoXCJMb2dNb2R1bGVcIik7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nbzogXCJodHRwczovL2d3LmFsaWNkbi5jb20vdGZzL1RCMXlvcEVkZ29RTWVKankxWGFYWGNTc0ZYYS02NDAtMzAyLnBuZ1wiLFxuICAgICAgdGFyZ2V0OiBcIldlZXhcIlxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJtb3VudGVkXCIsIFwibW91bnRlZFwiKTtcbiAgICB0aGlzLnRlc3RTdXBwb3J0cygpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBzZW5kTWVzc2FnZTogZnVuY3Rpb24gc2VuZE1lc3NhZ2UoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNlbmRNZXNzYWdlXCIsIFwic2VuZE1lc3NhZ2VcIik7XG4gICAgICB2YXIgYmMgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChcIkR1UWlhblwiKTtcbiAgICAgIGJjLnBvc3RNZXNzYWdlKCdtZXNzYWdlIGZyb20gd2VleCBwYWdlQScpO1xuICAgIH0sXG5cbiAgICB0ZXN0VG9hc3Q6IGZ1bmN0aW9uIHRlc3RUb2FzdCgpIHtcbiAgICAgIG1vZGFsLnRvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCJjbGlja2VkLEEgc2VuZCBtZXNzYWdlIHRvIEIgXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxXG4gICAgICB9KTtcbiAgICAgIHRoaXMudGFyZ2V0ID0gXCJOb25vXCI7XG4gICAgICB0aGlzLnNlbmRNZXNzYWdlKCk7XG4gICAgICB0aGlzLnRlc3RTdXBwb3J0cygpO1xuICAgIH0sXG4gICAgdGVzdEV2ZW50OiBmdW5jdGlvbiB0ZXN0RXZlbnQoKSB7XG4gICAgICBteU1vdWRsZS5wcmludExvZyhcIm15TW9kdWxlIGZyb20gQVwiKTtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHBob25lTW9kdWxlLmdldFBob25lSW5mbyhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIG9iamVjdCA9IEpTT04uc3RyaW5naWZ5KGV2ZW50KTtcbiAgICAgICAgbG9nTW9kdWxlLmxvZyhcIndlZXgtZHFcIiwgXCJnZXRQaG9uZUluZm86XCIgKyBvYmplY3QpO1xuICAgICAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShldmVudCk7XG4gICAgICAgIHRoYXQudGFyZ2V0ID0gXCJnZXRQaG9uZUluZm89XCIgKyBldmVudDtcbiAgICAgICAgbW9kYWwudG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICdnZXRQaG9uZUluZm8gJyArIHRoYXQudGFyZ2V0LFxuICAgICAgICAgIGR1cmF0aW9uOiAzXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v5rWL6K+Vd2VleOaYr+WQpuaUr+aMgeafkOS6m+aooeWdl+WSjOWKn+iDvVxuICAgIHRlc3RTdXBwb3J0czogZnVuY3Rpb24gdGVzdFN1cHBvcnRzKCkge1xuICAgICAgdmFyIG5ldCA9IHdlZXguc3VwcG9ydHMoJ0Btb2R1bGUvc3RyZWFtJyk7IC8vIHRydWVcbiAgICAgIHZhciBteSA9IHdlZXguc3VwcG9ydHMoJ0Btb2R1bGUvTXlNb3VkbGUnKTsgLy8gdHJ1ZVxuICAgICAgdmFyIGRpYWxvZyA9IHdlZXguc3VwcG9ydHMoJ0Btb2R1bGUvV2VleERpYWxvZ01vZHVsZScpO1xuICAgICAgdmFyIGR1cWlhbiA9IHdlZXguc3VwcG9ydHMoJ0Btb2R1bGUvTXlNb3VkbGUuZHVxaWFuJyk7IC8vIGZhbHNlXG4gICAgICB2YXIgbXl0ZXN0ID0gd2VleC5zdXBwb3J0cygnQG1vZHVsZS9kdXFpYW4nKTsgLy8gZmFsc2VcbiAgICAgIGNvbnNvbGUubG9nKFwibmV0XCIsIG5ldCk7XG4gICAgICBtb2RhbC50b2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi5piv5ZCm5pyJTXlNb3VkbGU9XCIgKyBteSArIFwiLGRpYWxvZz1cIiArIGRpYWxvZyArIFwiLOaYr+WQpuaUr+aMgXN0cmVhbT0gXCIgKyBuZXQgKyBcIixteXRlc3Q9XCIgKyBteXRlc3QsXG4gICAgICAgIGR1cmF0aW9uOiAxMFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3NjcmlwdC1sb2FkZXIuanMhLi9+L2JhYmVsLWxvYWRlci9saWIhLi9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9oZWxsby52dWVcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n')},18:/*!************************************************************************************************************************************************************************************!*\
  !*** ./~/weex-vue-loader/lib/style-loader.js!./~/weex-vue-loader/lib/style-rewriter.js?id=data-v-be4ac86e!./~/weex-vue-loader/lib/selector.js?type=styles&index=0!./src/hello.vue ***!
  \************************************************************************************************************************************************************************************/
function(module,exports){eval('module.exports = {\n  "wrapper": {\n    "alignItems": "center",\n    "paddingTop": 20,\n    "backgroundColor": "#A9A9A9",\n    "justifyContent": "center"\n  },\n  "title": {\n    "lineHeight": 60,\n    "fontSize": 28,\n    "alignItems": "center",\n    "textAlign": "center",\n    "color": "#0000FF",\n    "marginTop": 15,\n    "marginBottom": 15\n  },\n  "btn": {\n    "width": 350,\n    "backgroundColor": "#FAEBD7",\n    "alignItems": "center",\n    "textAlign": "center",\n    "fontSize": 28,\n    "paddingTop": 10,\n    "paddingRight": 10,\n    "paddingBottom": 10,\n    "paddingLeft": 10,\n    "marginTop": 15,\n    "marginBottom": 15\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8udnVlPzhmMzEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0E5QTlBOVwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInRpdGxlXCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogNjAsXG4gICAgXCJmb250U2l6ZVwiOiAyOCxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMEZGXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMTUsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMTVcbiAgfSxcbiAgXCJidG5cIjoge1xuICAgIFwid2lkdGhcIjogMzUwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZBRUJEN1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAyOCxcbiAgICBcInBhZGRpbmdUb3BcIjogMTAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMTAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDEwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMTAsXG4gICAgXCJtYXJnaW5Ub3BcIjogMTUsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMTVcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLWxvYWRlci5qcyEuL34vd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYmU0YWM4NmUhLi9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9oZWxsby52dWVcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n')},28:/*!*************************************************************************************************************************************************!*\
  !*** ./~/weex-vue-loader/lib/template-compiler.js?id=data-v-be4ac86e!./~/weex-vue-loader/lib/selector.js?type=template&index=0!./src/hello.vue ***!
  \*************************************************************************************************************************************************/
function(module,exports){eval('module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c(\'div\', {\n    staticClass: ["wrapper"]\n  }, [_c(\'button\', {\n    staticClass: ["btn"],\n    on: {\n      "click": _vm.testToast\n    }\n  }, [_vm._v("Hello weex")]), _c(\'text\', {\n    staticClass: ["title"],\n    on: {\n      "click": _vm.testToast\n    }\n  }, [_vm._v("Hello DuQian, " + _vm._s(_vm.target) + " Up!")]), _c(\'button\', {\n    staticClass: ["btn"],\n    on: {\n      "click": _vm.testEvent\n    }\n  }, [_vm._v("测试nono api")])], 1)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8udnVlP2U4ZDMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcIndyYXBwZXJcIl1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcImJ0blwiXSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udGVzdFRvYXN0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSGVsbG8gd2VleFwiKV0pLCBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1widGl0bGVcIl0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRlc3RUb2FzdFxuICAgIH1cbiAgfSwgW192bS5fdihcIkhlbGxvIER1UWlhbiwgXCIgKyBfdm0uX3MoX3ZtLnRhcmdldCkgKyBcIiBVcCFcIildKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogW1wiYnRuXCJdLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50ZXN0RXZlbnRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLmtYvor5Vub25vIGFwaVwiKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1iZTRhYzg2ZSEuL34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaGVsbG8udnVlXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n')},37:/*!**********************************!*\
  !*** ./src/hello.vue?entry=true ***!
  \**********************************/
function(module,exports,__webpack_require__){eval('var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(/*! !weex-vue-loader/lib/style-loader!weex-vue-loader/lib/style-rewriter?id=data-v-be4ac86e!weex-vue-loader/lib/selector?type=styles&index=0!./hello.vue */ 18)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(/*! !weex-vue-loader/lib/script-loader!babel-loader!weex-vue-loader/lib/selector?type=script&index=0!./hello.vue */ 1)\n\n/* template */\nvar __vue_template__ = __webpack_require__(/*! !weex-vue-loader/lib/template-compiler?id=data-v-be4ac86e!weex-vue-loader/lib/selector?type=template&index=0!./hello.vue */ 28)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === "object" ||\n  typeof __vue_exports__.default === "function"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === "function") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = "/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/hello.vue"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = "data-v-a1f38564"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === "function") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\nmodule.exports.el = \'true\'\nnew Vue(module.exports)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8udnVlP2NjNDQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSBbXVxuXG4vKiBzdHlsZXMgKi9cbl9fdnVlX3N0eWxlc19fLnB1c2gocmVxdWlyZShcIiEhd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1sb2FkZXIhd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtYmU0YWM4NmUhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaGVsbG8udnVlXCIpXG4pXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhd2VleC12dWUtbG9hZGVyL2xpYi9zY3JpcHQtbG9hZGVyIWJhYmVsLWxvYWRlciF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9oZWxsby52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhd2VleC12dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYmU0YWM4NmUhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9oZWxsby52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL2R1cWlhbi9EZXZlbG9wbWVudC9NeUdpdEh1Yi93ZWV4LWRlbW8tZHVzYW4vd2VleC1kZW1vL3NyYy9oZWxsby52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWExZjM4NTY0XCJcbl9fdnVlX29wdGlvbnNfXy5zdHlsZSA9IF9fdnVlX29wdGlvbnNfXy5zdHlsZSB8fCB7fVxuX192dWVfc3R5bGVzX18uZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG4gIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlKSB7XG4gICAgX192dWVfb3B0aW9uc19fLnN0eWxlW25hbWVdID0gbW9kdWxlW25hbWVdXG4gIH1cbn0pXG5pZiAodHlwZW9mIF9fcmVnaXN0ZXJfc3RhdGljX3N0eWxlc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX19yZWdpc3Rlcl9zdGF0aWNfc3R5bGVzX18oX192dWVfb3B0aW9uc19fLl9zY29wZUlkLCBfX3Z1ZV9zdHlsZXNfXylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cbm1vZHVsZS5leHBvcnRzLmVsID0gJ3RydWUnXG5uZXcgVnVlKG1vZHVsZS5leHBvcnRzKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVsbG8udnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n')}});