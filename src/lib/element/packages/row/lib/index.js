!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ElRow",[],e):"object"==typeof exports?exports.ElRow=e():t.ElRow=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(2),i=o(r);i.default.install=function(t){t.component(i.default.name,i.default)},e.default=i.default},function(t,e,n){var o,r;o=n(3);var i=n(4);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e){"use strict";e.__esModule=!0,e.default={name:"ElRow",props:{gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style:function(){var t={};return this.gutter&&(t.marginLeft="-"+this.gutter/2+"px",t.marginRight=t.marginLeft),t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._c;return e("div",{staticClass:"el-row",class:["start"!==t.justify?"is-justify-"+t.justify:"","top"!==t.align?"is-align-"+t.align:"",{"el-row--flex":"flex"===t.type}],style:t.style},[t._t("default")])},staticRenderFns:[]}}])});