!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ElCheckbox",[],t):"object"==typeof exports?exports.ElCheckbox=t():e.ElCheckbox=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="/dist/",t(0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){e.component(c.default.name,c.default),e.component(i.default.name,i.default)}t.__esModule=!0,t.ElCheckboxGroup=t.ElCheckbox=void 0,t.default=a;var l=o(2),i=n(l),s=o(6),c=n(s);t.ElCheckbox=i.default,t.ElCheckboxGroup=c.default},function(e,t,o){var n,a;n=o(3);var l=o(5);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=l.render,a.staticRenderFns=l.staticRenderFns,e.exports=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=o(4),l=n(a);t.default={name:"ElCheckbox",mixins:[l.default],componentName:"ElCheckbox",computed:{model:{get:function(){return this.isGroup?this.store:this.value},set:function(e){this.isGroup?this.dispatch("ElCheckboxGroup","input",[e]):this.$emit("input",e)}},isChecked:function(){return"[object Boolean]"==={}.toString.call(this.model)?this.model:Array.isArray(this.model)?this.model.indexOf(this.label)>-1:null!==this.model&&void 0!==this.model?this.model===this.trueLabel:void 0},isGroup:function(){for(var e=this.$parent;e;){if("ElCheckboxGroup"===e.$options.componentName)return this._checkboxGroup=e,!0;e=e.$parent}return!1},store:function(){return this._checkboxGroup.value}},props:{value:{},label:{},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:String,trueLabel:[String,Number],falseLabel:[String,Number]},methods:{addToStore:function(){Array.isArray(this.model)?this.model.indexOf(this.label)===-1&&this.model.push(this.label):this.model=this.trueLabel||!0}},created:function(){this.checked&&this.addToStore()}}},function(e,t){"use strict";function o(e,t,n){this.$children.forEach(function(a){var l=a.$options.componentName;l===e?a.$emit.apply(a,[t].concat(n)):o.apply(a,[e,t].concat([n]))})}t.__esModule=!0,t.default={methods:{dispatch:function(e,t,o){for(var n=this.$parent||this.$root,a=n.$options.componentName;n&&(!a||a!==e);)n=n.$parent,n&&(a=n.$options.componentName);n&&n.$emit.apply(n,[t].concat(o))},broadcast:function(e,t,n){o.call(this,e,t,n)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._c;return t("label",{staticClass:"el-checkbox"},[t("span",{staticClass:"el-checkbox__input"},[t("span",{staticClass:"el-checkbox__inner",class:{"is-disabled":e.disabled,"is-checked":e.isChecked,"is-indeterminate":e.indeterminate,"is-focus":e.focus}})," ",e.trueLabel||e.falseLabel?t("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"el-checkbox__original",attrs:{type:"checkbox",name:e.name,disabled:e.disabled,"true-value":e.trueLabel,"false-value":e.falseLabel},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e._q(e.model,e.trueLabel)},on:{change:[function(t){var o=e.model,n=t.target,a=n.checked?e.trueLabel:e.falseLabel;if(Array.isArray(o)){var l=null,i=e._i(o,l);a?i<0&&(e.model=o.concat(l)):i>-1&&(e.model=o.slice(0,i).concat(o.slice(i+1)))}else e.model=a},function(t){e.$emit("change",t)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"el-checkbox__original",attrs:{type:"checkbox",disabled:e.disabled,name:e.name},domProps:{value:e.label,checked:Array.isArray(e.model)?e._i(e.model,e.label)>-1:e._q(e.model,!0)},on:{change:[function(t){var o=e.model,n=t.target,a=!!n.checked;if(Array.isArray(o)){var l=e.label,i=e._i(o,l);a?i<0&&(e.model=o.concat(l)):i>-1&&(e.model=o.slice(0,i).concat(o.slice(i+1)))}else e.model=a},function(t){e.$emit("change",t)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}})," "])," ",e.$slots.default||e.label?t("span",{staticClass:"el-checkbox__label"},[e._t("default")," ",e.$slots.default?e._e():[e._s(e.label)]]):e._e()])},staticRenderFns:[]}},function(e,t,o){var n,a;n=o(7);var l=o(8);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=l.render,a.staticRenderFns=l.staticRenderFns,e.exports=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=o(4),l=n(a);t.default={name:"ElCheckboxGroup",componentName:"ElCheckboxGroup",mixins:[l.default],props:{value:{}},watch:{value:function(e){this.$emit("change",e),this.dispatch("ElFormItem","el.form.change",[e])}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._c;return t("div",{staticClass:"el-checkbox-group"},[e._t("default")])},staticRenderFns:[]}}])});