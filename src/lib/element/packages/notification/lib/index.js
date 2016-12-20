!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define("ElNotification",["vue"],t):"object"==typeof exports?exports.ElNotification=t(require("vue")):e.ElNotification=t(e.Vue)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="/dist/",t(0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=o(2),s=n(i);t.default=s.default},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=o(3),s=n(i),l=o(4),r=s.default.extend(o(5)),a=void 0,d=[],u=1,c=function e(t){t=t||{};var o=t.onClose,n="notification_"+u++;t.onClose=function(){e.close(n,o)},a=new r({data:t}),a.id=n,a.vm=a.$mount(),document.body.appendChild(a.vm.$el),a.vm.visible=!0,a.dom=a.vm.$el,a.dom.style.zIndex=l.PopupManager.nextZIndex();for(var i=t.offset||0,s=i,c=0,f=d.length;c<f;c++)s+=d[c].$el.offsetHeight+16;return s+=16,a.top=s,d.push(a),a.vm};["success","warning","info","error"].forEach(function(e){c[e]=function(t){return"string"==typeof t&&(t={message:t}),t.type=e,c(t)}}),c.close=function(e,t){for(var o=void 0,n=void 0,i=0,s=d.length;i<s;i++)if(e===d[i].id){"function"==typeof t&&t(d[i]),o=i,n=d[i].dom.offsetHeight,d.splice(i,1);break}if(s>1)for(i=o;i<s-1;i++)d[i].dom.style.top=parseInt(d[i].dom.style.top,10)-n-16+"px"},t.default=c},function(t,o){t.exports=e},function(e,t,o){!function(t,n){e.exports=n(o(3))}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,t,o){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/lib/",t(t.s=6)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.PopupManager=void 0;var i=o(5),s=n(i),l=o(3),r=o(2),a=n(r);o(4);var d=1,u=[],c=function(e){if(u.indexOf(e)===-1){var t=function(e){var t=e.__vue__;if(!t){var o=e.previousSibling;o.__vue__&&(t=o.__vue__)}return t};s.default.transition(e,{afterEnter:function(e){var o=t(e);o&&o.doAfterOpen&&o.doAfterOpen()},afterLeave:function(e){var o=t(e);o&&o.doAfterClose&&o.doAfterClose()}})}},f=void 0,p=function(){if(void 0!==f)return f;var e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var o=document.createElement("div");o.style.width="100%",e.appendChild(o);var n=o.offsetWidth;return e.parentNode.removeChild(e),t-n},h=function e(t){return 3===t.nodeType&&(t=t.nextElementSibling||t.nextSibling,e(t)),t};t.default={props:{value:{type:Boolean,default:!1},transition:{type:String,default:""},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,default:!1},modalFade:{type:Boolean,default:!0},modalClass:{},lockScroll:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!1}},created:function(){this.transition&&c(this.transition)},beforeMount:function(){this._popupId="popup-"+d++,a.default.register(this._popupId,this)},beforeDestroy:function(){a.default.deregister(this._popupId),a.default.closeModal(this._popupId),this.modal&&null!==this.bodyOverflow&&"hidden"!==this.bodyOverflow&&(document.body.style.overflow=this.bodyOverflow,document.body.style.paddingRight=this.bodyPaddingRight),this.bodyOverflow=null,this.bodyPaddingRight=null},data:function(){return{opened:!1,bodyOverflow:null,bodyPaddingRight:null,rendered:!1}},watch:{value:function(e){var t=this;if(e){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,s.default.nextTick(function(){t.open()}))}else this.close()}},methods:{open:function(e){var t=this;this.rendered||(this.rendered=!0,this.$emit("input",!0));var o=(0,l.merge)({},this,e);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var n=Number(o.openDelay);n>0?this._openTimer=setTimeout(function(){t._openTimer=null,t.doOpen(o)},n):this.doOpen(o)},doOpen:function(e){if((!this.willOpen||this.willOpen())&&!this.opened){this._opening=!0,this.visible=!0,this.$emit("input",!0);var t=h(this.$el),o=e.modal,n=e.zIndex;if(n&&(a.default.zIndex=n),o&&(this._closing&&(a.default.closeModal(this._popupId),this._closing=!1),a.default.openModal(this._popupId,a.default.nextZIndex(),t,e.modalClass,e.modalFade),e.lockScroll)){this.bodyOverflow||(this.bodyPaddingRight=document.body.style.paddingRight,this.bodyOverflow=document.body.style.overflow),f=p();var i=document.documentElement.clientHeight<document.body.scrollHeight;f>0&&i&&(document.body.style.paddingRight=f+"px"),document.body.style.overflow="hidden"}"static"===getComputedStyle(t).position&&(t.style.position="absolute"),o?t.style.zIndex=a.default.nextZIndex():n&&(t.style.zIndex=n),this.opened=!0,this.onOpen&&this.onOpen(),this.transition||this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var e=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var t=Number(this.closeDelay);t>0?this._closeTimer=setTimeout(function(){e._closeTimer=null,e.doClose()},t):this.doClose()}},doClose:function(){var e=this;this.visible=!1,this.$emit("input",!1),this._closing=!0,this.onClose&&this.onClose(),this.lockScroll&&setTimeout(function(){e.modal&&"hidden"!==e.bodyOverflow&&(document.body.style.overflow=e.bodyOverflow,document.body.style.paddingRight=e.bodyPaddingRight),e.bodyOverflow=null,e.bodyPaddingRight=null},200),this.opened=!1,this.transition||this.doAfterClose()},doAfterClose:function(){a.default.closeModal(this._popupId),this._closing=!1}}},t.PopupManager=a.default},function(e,t){var o=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},n=function(e,t){if(!e||!t)return!1;if(t.indexOf(" ")!=-1)throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1},i=function(e,t){if(e){for(var o=e.className,i=(t||"").split(" "),s=0,l=i.length;s<l;s++){var r=i[s];r&&(e.classList?e.classList.add(r):n(e,r)||(o+=" "+r))}e.classList||(e.className=o)}},s=function(e,t){if(e&&t){for(var i=t.split(" "),s=" "+e.className+" ",l=0,r=i.length;l<r;l++){var a=i[l];a&&(e.classList?e.classList.remove(a):n(e,a)&&(s=s.replace(" "+a+" "," ")))}e.classList||(e.className=o(s))}};e.exports={hasClass:n,addClass:i,removeClass:s}},function(e,t,o){"use strict";t.__esModule=!0;var n=o(1),i=!1,s=function(){var e=r.modalDom;return e?i=!0:(i=!1,e=document.createElement("div"),r.modalDom=e,e.addEventListener("touchmove",function(e){e.preventDefault(),e.stopPropagation()}),e.addEventListener("click",function(){r.doOnModalClick&&r.doOnModalClick()})),e},l={},r={zIndex:2e3,modalFade:!0,getInstance:function(e){return l[e]},register:function(e,t){e&&t&&(l[e]=t)},deregister:function(e){e&&(l[e]=null,delete l[e])},nextZIndex:function(){return r.zIndex++},modalStack:[],doOnModalClick:function(){var e=r.modalStack[r.modalStack.length-1];if(e){var t=r.getInstance(e.id);t&&t.closeOnClickModal&&t.close()}},openModal:function(e,t,o,l,r){if(e&&void 0!==t){this.modalFade=r;for(var a=this.modalStack,d=0,u=a.length;d<u;d++){var c=a[d];if(c.id===e)return}var f=s();if((0,n.addClass)(f,"v-modal"),this.modalFade&&!i&&(0,n.addClass)(f,"v-modal-enter"),l){var p=l.trim().split(/\s+/);p.forEach(function(e){return(0,n.addClass)(f,e)})}setTimeout(function(){(0,n.removeClass)(f,"v-modal-enter")},200),o&&o.parentNode&&11!==o.parentNode.nodeType?o.parentNode.appendChild(f):document.body.appendChild(f),t&&(f.style.zIndex=t),f.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:l})}},closeModal:function(e){var t=this.modalStack,o=s();if(t.length>0){var i=t[t.length-1];if(i.id===e){if(i.modalClass){var l=i.modalClass.trim().split(/\s+/);l.forEach(function(e){return(0,n.removeClass)(o,e)})}t.pop(),t.length>0&&(o.style.zIndex=t[t.length-1].zIndex)}else for(var a=t.length-1;a>=0;a--)if(t[a].id===e){t.splice(a,1);break}}0===t.length&&(this.modalFade&&(0,n.addClass)(o,"v-modal-leave"),setTimeout(function(){0===t.length&&(o.parentNode&&o.parentNode.removeChild(o),o.style.display="none",r.modalDom=void 0),(0,n.removeClass)(o,"v-modal-leave")},200))}};window.addEventListener("keydown",function(e){if(27===e.keyCode&&r.modalStack.length>0){var t=r.modalStack[r.modalStack.length-1];if(!t)return;var o=r.getInstance(t.id);o.closeOnPressEscape&&o.close()}}),t.default=r},function(e,t){"use strict";function o(e){for(var t=1,o=arguments.length;t<o;t++){var n=arguments[t];for(var i in n)if(n.hasOwnProperty(i)){var s=n[i];void 0!==s&&(e[i]=s)}}return e}t.__esModule=!0,t.merge=o},function(e,t){},function(t,o){t.exports=e},function(e,t,o){e.exports=o(0)}])})},function(e,t,o){var n,i;n=o(6);var s=o(7);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=n},function(e,t){"use strict";t.__esModule=!0;var o={success:"circle-check",info:"information",warning:"warning",error:"circle-cross"};t.default={data:function(){return{visible:!1,title:"",message:"",duration:4500,type:"",onClose:null,closed:!1,top:null,timer:null}},computed:{typeClass:function(){return this.type&&o[this.type]?"el-icon-"+o[this.type]:""}},watch:{closed:function(e){e&&(this.visible=!1,this.$el.addEventListener("transitionend",this.destroyElement))}},methods:{destroyElement:function(){this.$el.removeEventListener("transitionend",this.destroyElement),this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0,"function"==typeof this.onClose&&this.onClose()},clearTimer:function(){clearTimeout(this.timer)},startTimer:function(){var e=this;this.duration>0&&(this.timer=setTimeout(function(){e.closed||e.close()},this.duration))}},mounted:function(){var e=this;this.duration>0&&(this.timer=setTimeout(function(){e.closed||e.close()},this.duration))}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._c;return t("transition",{attrs:{name:"el-notification-fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-notification",style:{top:e.top?e.top+"px":"auto"},on:{mouseenter:function(t){e.clearTimer()},mouseleave:function(t){e.startTimer()}}},[e.type?t("i",{staticClass:"el-notification__icon",class:[e.typeClass]}):e._e()," ",t("div",{staticClass:"el-notification__group",style:{"margin-left":e.typeClass?"55px":"0"}},[t("span",[e._s(e.title)])," ",t("p",[e._s(e.message)])," ",t("div",{staticClass:"el-notification__closeBtn el-icon-close",on:{click:e.close}})])])])},staticRenderFns:[]}}])});