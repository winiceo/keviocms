!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ElRate",[],e):"object"==typeof exports?exports.ElRate=e():t.ElRate=e()}(this,function(){return function(t){function e(a){if(s[a])return s[a].exports;var l=s[a]={exports:{},id:a,loaded:!1};return t[a].call(l.exports,l,l.exports,e),l.loaded=!0,l.exports}var s={};return e.m=t,e.c=s,e.p="/dist/",e(0)}([function(t,e,s){t.exports=s(1)},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var l=s(2),i=a(l);i.default.install=function(t){t.component(i.default.name,i.default)},e.default=i.default},function(t,e,s){var a,l;a=s(3);var i=s(5);l=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(l=a=a.default),"function"==typeof l&&(l=l.options),l.render=i.render,l.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,s){"use strict";e.__esModule=!0;var a=s(4);e.default={name:"el-rate",data:function(){return{classMap:{},colorMap:{},classes:null,pointerAtLeftHalf:!1,currentValue:this.value,hoverIndex:-1}},props:{value:{type:Number,default:0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:Array,default:function(){return["#F7BA2A","#F7BA2A","#F7BA2A"]}},voidColor:{type:String,default:"#C6D1DE"},disabledVoidColor:{type:String,default:"#EFF2F7"},iconClasses:{type:Array,default:function(){return["el-icon-star-on","el-icon-star-on","el-icon-star-on"]}},voidIconClass:{type:String,default:"el-icon-star-off"},disabledVoidIconClass:{type:String,default:"el-icon-star-on"},disabled:{type:Boolean,default:!1},allowHalf:{type:Boolean,default:!1},showText:{type:Boolean,default:!1},textColor:{type:String,default:"1f2d3d"},texts:{type:Array,default:function(){return["极差","失望","一般","满意","惊喜"]}},textTemplate:{type:String,default:"{value}"}},computed:{text:function(){var t="";return t=this.disabled?this.textTemplate.replace(/\{\s*value\s*\}/,this.value):this.texts[Math.ceil(this.currentValue)-1]},decimalStyle:function(){var t="";return this.disabled&&(t=(this.valueDecimal<50?0:50)+"%"),this.allowHalf&&(t="50%"),{color:this.activeColor,width:t}},valueDecimal:function(){return 100*this.value-100*Math.floor(this.value)},decimalIconClass:function(){return this.getValueFromMap(this.value,this.classMap)},voidClass:function(){return this.disabled?this.classMap.disabledVoidClass:this.classMap.voidClass},activeClass:function(){return this.getValueFromMap(this.currentValue,this.classMap)},activeColor:function(){return this.getValueFromMap(this.currentValue,this.colorMap)},classes:function(){var t=[],e=0,s=this.currentValue;for(this.allowHalf&&this.currentValue!==Math.floor(this.currentValue)&&s--;e<s;e++)t.push(this.activeClass);for(;e<this.max;e++)t.push(this.voidClass);return t}},watch:{value:function(t){this.$emit("change",t),this.currentValue=t}},methods:{getValueFromMap:function(t,e){var s="";return s=t<=this.lowThreshold?e.lowColor||e.lowClass:t>=this.highThreshold?e.highColor||e.highClass:e.mediumColor||e.mediumClass},showDecimalIcon:function(t){var e=this.disabled&&this.valueDecimal>0&&t-1<this.value&&t>this.value,s=this.allowHalf&&this.pointerAtLeftHalf&&(t-.5).toFixed(1)===this.currentValue.toFixed(1);return e||s},getIconStyle:function(t){var e=this.disabled?this.colorMap.disabledVoidColor:this.colorMap.voidColor;return{color:t<=this.currentValue?this.activeColor:e}},selectValue:function(t){this.disabled||(this.allowHalf&&this.pointerAtLeftHalf?this.$emit("input",this.currentValue):this.$emit("input",t))},setCurrentValue:function(t,e){if(!this.disabled){if(this.allowHalf){var s=e.target;(0,a.hasClass)(s,"el-rate__item")&&(s=s.querySelector(".el-rate__icon")),(0,a.hasClass)(s,"el-rate__decimal")&&(s=s.parentNode),this.pointerAtLeftHalf=2*e.offsetX<=s.clientWidth,this.currentValue=this.pointerAtLeftHalf?t-.5:t}else this.currentValue=t;this.hoverIndex=t}},resetCurrentValue:function(){this.disabled||(this.allowHalf&&(this.pointerAtLeftHalf=this.value!==Math.floor(this.value)),this.currentValue=this.value,this.hoverIndex=-1)}},created:function(){this.value||this.$emit("input",0),this.classMap={lowClass:this.iconClasses[0],mediumClass:this.iconClasses[1],highClass:this.iconClasses[2],voidClass:this.voidIconClass,disabledVoidClass:this.disabledVoidIconClass},this.colorMap={lowColor:this.colors[0],mediumColor:this.colors[1],highColor:this.colors[2],voidColor:this.voidColor,disabledVoidColor:this.disabledVoidColor}}}},function(t,e){var s=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},a=function(t,e){if(!t||!e)return!1;if(e.indexOf(" ")!=-1)throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1},l=function(t,e){if(t){for(var s=t.className,l=(e||"").split(" "),i=0,o=l.length;i<o;i++){var r=l[i];r&&(t.classList?t.classList.add(r):a(t,r)||(s+=" "+r))}t.classList||(t.className=s)}},i=function(t,e){if(t&&e){for(var l=e.split(" "),i=" "+t.className+" ",o=0,r=l.length;o<r;o++){var n=l[o];n&&(t.classList?t.classList.remove(n):a(t,n)&&(i=i.replace(" "+n+" "," ")))}t.classList||(t.className=s(i))}};t.exports={hasClass:a,addClass:l,removeClass:i}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._c;return e("div",{staticClass:"el-rate"},[t._l(t.max,function(s){return e("span",{staticClass:"el-rate__item",style:{cursor:t.disabled?"auto":"pointer"},on:{mousemove:function(e){t.setCurrentValue(s,e)},mouseleave:t.resetCurrentValue,click:function(e){t.selectValue(s)}}},[e("i",{staticClass:"el-rate__icon",class:[t.classes[s-1],{hover:t.hoverIndex===s}],style:t.getIconStyle(s)},[t.showDecimalIcon(s)?e("i",{staticClass:"el-rate__decimal",class:t.decimalIconClass,style:t.decimalStyle}):t._e()])])})," ",t.showText?e("span",{staticClass:"el-rate__text",style:{color:t.textColor}},[t._s(t.text)]):t._e()])},staticRenderFns:[]}}])});