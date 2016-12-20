!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define("ElUpload",["vue"],t):"object"==typeof exports?exports.ElUpload=t(require("vue")):e.ElUpload=t(e.Vue)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o);i.default.install=function(e){e.component(i.default.name,i.default)},t.default=i.default},function(e,t,n){var r,o;r=n(3),o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){}t.__esModule=!0;var i=n(4),a=r(i),s=n(15),u=r(s),l=n(22),c=r(l),f=n(12),d=r(f);t.default={name:"el-upload",components:{ElProgress:d.default,UploadList:a.default,Upload:u.default,IframeUpload:c.default},props:{action:{type:String,required:!0},headers:{type:Object,default:function(){return{}}},data:Object,multiple:Boolean,name:{type:String,default:"file"},withCredentials:Boolean,thumbnailMode:Boolean,showUploadList:{type:Boolean,default:!0},accept:String,type:{type:String,default:"select"},beforeUpload:Function,onRemove:{type:Function,default:o},onChange:{type:Function,default:o},onPreview:{type:Function,default:o},onSuccess:{type:Function,default:o},onError:{type:Function,default:o},defaultFileList:{type:Array,default:function(){return[]}}},data:function(){return{fileList:[],dragOver:!1,draging:!1,tempIndex:1}},watch:{defaultFileList:{immediate:!0,handler:function(e){var t=this;this.fileList=e.map(function(e){return e.status="finished",e.percentage=100,e.uid=Date.now()+t.tempIndex++,e})}}},methods:{handleStart:function(e){e.uid=Date.now()+this.tempIndex++;var t={status:"uploading",name:e.name,size:e.size,percentage:0,uid:e.uid,showProgress:!0};try{t.url=URL.createObjectURL(e)}catch(e){return void console.error(e)}this.fileList.push(t)},handleProgress:function(e,t){var n=this.getFile(t);n.percentage=e.percent||0},handleSuccess:function(e,t){var n=this.getFile(t);n&&(n.status="finished",n.response=e,this.onSuccess(e,n,this.fileList),setTimeout(function(){n.showProgress=!1},1e3))},handleError:function(e,t,n){var r=this.getFile(n),o=this.fileList;r.status="fail",o.splice(o.indexOf(r),1),this.onError(e,t,n)},handleRemove:function(e){var t=this.fileList;t.splice(t.indexOf(e),1),this.onRemove(e,t)},getFile:function(e){var t,n=this.fileList;return n.every(function(n){return t=e.uid===n.uid?n:null,!t}),t},handlePreview:function(e){"finished"===e.status&&this.onPreview(e)},clearFiles:function(){this.fileList=[]}},render:function(e){var t;this.showUploadList&&!this.thumbnailMode&&this.fileList.length&&(t=e(a.default,{attrs:{files:this.fileList},on:{remove:this.handleRemove,preview:this.handlePreview}},[]));var n={props:{type:this.type,action:this.action,multiple:this.multiple,"before-upload":this.beforeUpload,"with-credentials":this.withCredentials,headers:this.headers,name:this.name,data:this.data,accept:this.thumbnailMode?"image/gif, image/png, image/jpeg, image/bmp, image/webp":this.accept,"on-start":this.handleStart,"on-progress":this.handleProgress,"on-success":this.handleSuccess,"on-error":this.handleError,"on-preview":this.handlePreview,"on-remove":this.handleRemove},ref:"upload-inner"},r="undefined"!=typeof FormData?e("upload",n,[this.$slots.default]):e("iframeUpload",n,[this.$slots.default]);return"select"===this.type?e("div",{class:"el-upload"},[t,r,this.$slots.tip]):"drag"===this.type?e("div",{class:"el-upload"},[r,this.$slots.tip,t]):void 0}}},function(e,t,n){var r,o;r=n(5);var i=n(14);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(6),i=r(o),a=n(12),s=r(a);t.default={mixins:[i.default],components:{ElProgress:s.default},props:{files:{type:Array,default:function(){return[]}}},methods:{parsePercentage:function(e){return parseInt(e,10)}}}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(7);t.default={methods:{t:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.t.apply(this,t)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.use=t.t=void 0;var o=n(8),i=r(o),a=n(9),s=r(a),u=n(10),l=r(u),c=n(11),f=r(c),d=(0,f.default)(s.default),p=i.default,h=!1,v=t.t=function(e,t){var n=Object.getPrototypeOf(this||s.default).$t;if("function"==typeof n)return h||(h=!0,s.default.locale(s.default.config.lang,(0,l.default)(p,s.default.locale(s.default.config.lang)||{},{clone:!0}))),n.apply(this,[e,t]);for(var r=e.split("."),o=p,i=0,a=r.length;i<a;i++){var u=r[i],c=o[u];if(i===a-1)return d(c,t);if(!c)return"";o=c}return""},m=t.use=function(e){p=e||p};t.default={use:m,t:v}},function(e,t){"use strict";t.__esModule=!0,t.default={el:{datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!"},upload:{delete:"删除",preview:"查看图片",continue:"继续上传"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部"},tree:{emptyText:"暂无数据"}}}},function(t,n){t.exports=e},function(e,t,n){var r,o;!function(i,a){r=a,o="function"==typeof r?r.call(t,n,t,e):r,!(void 0!==o&&(e.exports=o))}(this,function(){function e(e){var t=e&&"object"==typeof e;return t&&"[object RegExp]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e)}function t(e){return Array.isArray(e)?[]:{}}function n(n,r){var o=r&&r.clone===!0;return o&&e(n)?i(t(n),n,r):n}function r(t,r,o){var a=t.slice();return r.forEach(function(r,s){"undefined"==typeof a[s]?a[s]=n(r,o):e(r)?a[s]=i(t[s],r,o):t.indexOf(r)===-1&&a.push(n(r,o))}),a}function o(t,r,o){var a={};return e(t)&&Object.keys(t).forEach(function(e){a[e]=n(t[e],o)}),Object.keys(r).forEach(function(s){e(r[s])&&t[s]?a[s]=i(t[s],r[s],o):a[s]=n(r[s],o)}),a}function i(e,t,i){var a=Array.isArray(t),s=i||{arrayMerge:r},u=s.arrayMerge||r;return a?Array.isArray(e)?u(e,t,i):n(t,i):o(e,t,i)}return i.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce(function(e,n){return i(e,n,t)})},i})},function(e,t){"use strict";t.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){function t(e){for(var t=arguments.length,i=Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];return 1===i.length&&"object"===n(i[0])&&(i=i[0]),i&&i.hasOwnProperty||(i={}),e.replace(r,function(t,n,r,a){var s=void 0;return"{"===e[a-1]&&"}"===e[a+t.length]?r:(s=o(i,r)?i[r]:null,null===s||void 0===s?"":s)})}var o=e.util.hasOwn;return t};var r=/(%|)\{([0-9a-zA-Z_]+)\}/g},function(e,t,n){var r,o,i;(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(a,s){"object"==n(t)&&"object"==n(e)?e.exports=s():(o=[],r=s,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i)))}(void 0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o);i.default.install=function(e){e.component(i.default.name,i.default)},t.default=i.default},function(e,t,r){var o,i;o=r(3);var a=r(4);i=o=o||{},"object"!=n(o.default)&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=o},function(e,t){t.__esModule=!0,t.default={name:"ElProgress",props:{type:{type:String,default:"line",validator:function(e){return["line","circle"].indexOf(e)>-1}},percentage:{type:Number,default:0,required:!0,validator:function(e){return e>=0&&e<=100}},status:{type:String},strokeWidth:{type:Number,default:6},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0}},computed:{barStyle:function(){var e={};return e.width=this.percentage+"%",e},relativeStrokeWidth:function(){return(this.strokeWidth/this.width*100).toFixed(1)},trackPath:function(){var e=parseInt(50-parseFloat(this.relativeStrokeWidth)/2,10);return"M 50 50 m 0 -"+e+" a "+e+" "+e+" 0 1 1 0 "+2*e+" a "+e+" "+e+" 0 1 1 0 -"+2*e},perimeter:function(){var e=50-parseFloat(this.relativeStrokeWidth)/2;return 2*Math.PI*e},circlePathStyle:function(){var e=this.perimeter;return{strokeDasharray:e+"px,"+e+"px",strokeDashoffset:(1-this.percentage/100)*e+"px",transition:"stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"}},stroke:function(){var e;switch(this.status){case"success":e="#13ce66";break;case"exception":e="#ff4949";break;default:e="#20a0ff"}return e},iconClass:function(){return"line"===this.type?"success"===this.status?"el-icon-circle-check":"el-icon-circle-cross":"success"===this.status?"el-icon-check":"el-icon-close"},progressTextSize:function(){return"line"===this.type?12+.4*this.strokeWidth:.111111*this.width+2}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return e._c,t("div",{staticClass:"el-progress",class:["el-progress--"+e.type,e.status?"is-"+e.status:"",{"el-progress--without-text":!e.showText,"el-progress--text-inside":e.textInside}]},["line"===e.type?t("div",{staticClass:"el-progress-bar"},[t("div",{staticClass:"el-progress-bar__outer",style:{height:e.strokeWidth+"px"}},[t("div",{staticClass:"el-progress-bar__inner",style:e.barStyle},[e.showText&&e.textInside?t("div",{staticClass:"el-progress-bar__innerText"},[e._s(e.percentage)+"%"]):e._e()])])]):t("div",{staticClass:"el-progress-circle",style:{height:e.width+"px",width:e.width+"px"}},[t("svg",{attrs:{viewBox:"0 0 100 100"}},[t("path",{staticClass:"el-progress-circle__track",attrs:{d:e.trackPath,stroke:"#e5e9f2","stroke-width":e.relativeStrokeWidth,fill:"none"}})," ",t("path",{staticClass:"el-progress-circle__path",style:e.circlePathStyle,attrs:{d:e.trackPath,"stroke-linecap":"round",stroke:e.stroke,"stroke-width":e.relativeStrokeWidth,fill:"none"}})])])," "," ",e.showText&&!e.textInside?t("div",{staticClass:"el-progress__text",style:{fontSize:e.progressTextSize+"px"}},[e.status?t("i",{class:e.iconClass}):[e._s(e.percentage)+"%"]," "]):e._e()])},staticRenderFns:[]}}])})}).call(t,n(13)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._c;return t("transition-group",{staticClass:"el-upload__files",attrs:{tag:"ul",name:"list"}},[e._l(e.files,function(n){return t("li",{key:n,staticClass:"el-upload__file",class:{"is-finished":"finished"===n.status},on:{click:function(t){e.$emit("clickFile",n)}}},[t("a",{staticClass:"el-upload__file__name",on:{click:function(t){e.$emit("preview",n)}}},[e._m(0,!0),e._s(n.name)+"\n    "])," ",t("span",{directives:[{name:"show",rawName:"v-show",value:"finished"===n.status,expression:"file.status === 'finished'"}],staticClass:"el-upload__btn-delete",on:{click:function(t){e.$emit("remove",n)}}},[e._s(e.t("el.upload.delete"))])," ",n.showProgress?t("el-progress",{attrs:{"stroke-width":2,percentage:e.parsePercentage(n.percentage),status:"finished"===n.status&&n.showProgress?"success":""}}):e._e()])})])},staticRenderFns:[function(){var e=this,t=e.$createElement;e._c;return t("i",{staticClass:"el-icon-document"})}]}},function(e,t,n){var r,o;r=n(16);var i=n(21);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(17),i=r(o),a=n(18),s=r(a);t.default={components:{Cover:s.default},props:{type:String,action:{type:String,required:!0},name:{type:String,default:"file"},data:Object,headers:Object,withCredentials:Boolean,multiple:Boolean,accept:String,onStart:Function,onProgress:Function,onSuccess:Function,onError:Function,beforeUpload:Function,onPreview:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}}},data:function(){return{dragOver:!1,mouseover:!1}},computed:{lastestFile:function(){var e=this.$parent.fileList;return e[e.length-1]},showCover:function(){var e=this.lastestFile;return this.thumbnailMode&&e&&"fail"!==e.status},thumbnailMode:function(){return this.$parent.thumbnailMode}},methods:{isImage:function(e){return e.indexOf("image")!==-1},handleChange:function(e){var t=e.target.files;t&&(this.uploadFiles(t),this.$refs.input.value=null)},uploadFiles:function(e){var t=this,n=Array.prototype.slice.call(e);this.multiple||(n=n.slice(0,1)),0!==n.length&&n.forEach(function(e){var n=t.isImage(e.type);t.thumbnailMode&&!n||t.upload(e)})},upload:function(e){var t=this;if(!this.beforeUpload)return this.post(e);var n=this.beforeUpload(e);n&&n.then?n.then(function(n){"[object File]"===Object.prototype.toString.call(n)?t.post(n):t.post(e)},function(){}):n!==!1&&this.post(e)},post:function(e){var t=this;this.onStart(e);var n=new FormData;n.append(this.name,e),(0,i.default)({headers:this.headers,withCredentials:this.withCredentials,file:e,data:this.data,filename:this.name,action:this.action,onProgress:function(n){t.onProgress(n,e)},onSuccess:function(n){t.onSuccess(n,e)},onError:function(n,r){t.onError(n,r,e)}})},onDrop:function(e){this.dragOver=!1,this.uploadFiles(e.dataTransfer.files)},handleClick:function(){this.$refs.input.click()}}}},function(e,t){"use strict";function n(e,t,n){var r="fail to post "+e+" "+n.status+"'",o=new Error(r);return o.status=n.status,o.method="post",o.url=e,o}function r(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(e){return t}}function o(e){if("undefined"!=typeof XMLHttpRequest){var t=new XMLHttpRequest,o=e.action;t.upload&&(t.upload.onprogress=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.onProgress(t)});var i=new FormData;e.data&&Object.keys(e.data).map(function(t){i.append(t,e.data[t])}),i.append(e.filename,e.file),t.onerror=function(t){e.onError(t)},t.onload=function(){return t.status<200||t.status>=300?e.onError(n(o,e,t),r(t)):void e.onSuccess(r(t))},t.open("post",o,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var a=e.headers||{};for(var s in a)a.hasOwnProperty(s)&&null!==a[s]&&t.setRequestHeader(s,a[s]);t.send(i)}}t.__esModule=!0,t.default=o},function(e,t,n){var r,o;r=n(19);var i=n(20);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(6),i=r(o),a=n(12),s=r(a);t.default={mixins:[i.default],components:{ElProgress:s.default},props:{image:{},onPreview:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}}},data:function(){return{mouseover:!1}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._c;return e.image?t("div",{staticClass:"el-dragger__cover",on:{click:function(e){e.stopPropagation()}}},[t("transition",{attrs:{name:"el-fade-in"}},["uploading"===e.image.status?t("el-progress",{staticClass:"el-dragger__cover__progress",attrs:{percentage:e.image.percentage,"show-text":!1,status:"finished"===e.image.status?"success":""}}):e._e()])," ","finished"===e.image.status?t("div",{staticClass:"el-dragger__cover__content",on:{mouseenter:function(t){e.mouseover=!0},mouseleave:function(t){e.mouseover=!1}}},[t("img",{attrs:{src:e.image.url}})," ",t("transition",{attrs:{name:"el-fade-in"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.mouseover,expression:"mouseover"}],staticClass:"el-dragger__cover__interact"},[t("div",{staticClass:"el-draggeer__cover__btns"},[t("span",{staticClass:"btn",on:{click:function(t){e.$parent.handleClick()}}},[e._m(0),t("span",[e._s(e.t("el.upload.continue"))])])," ",t("span",{staticClass:"btn",on:{click:function(t){e.onPreview(e.image)}}},[e._m(1),t("span",[e._s(e.t("el.upload.preview"))])])," ",t("span",{staticClass:"btn",on:{click:function(t){e.onRemove(e.image)}}},[e._m(2),t("span",[e._s(e.t("el.upload.delete"))])])])])])," ",t("transition",{attrs:{name:"el-zoom-in-bottom"}},[t("h4",{directives:[{name:"show",rawName:"v-show",value:e.mouseover,expression:"mouseover"}],staticClass:"el-dragger__cover__title"},[e._s(e.image.name)])])]):e._e()]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement;e._c;return t("i",{staticClass:"el-icon-upload2"})},function(){var e=this,t=e.$createElement;e._c;return t("i",{staticClass:"el-icon-view"})},function(){var e=this,t=e.$createElement;e._c;return t("i",{staticClass:"el-icon-delete2"})}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._c;return t("div",{staticClass:"el-upload__inner",class:{"el-dragger":"drag"===e.type,"is-dragOver":e.dragOver,"is-showCover":e.showCover},on:{click:e.handleClick,drop:function(t){t.preventDefault(),e.onDrop(t)},dragover:function(t){t.preventDefault(),e.dragOver=!0},dragleave:function(t){t.preventDefault(),e.dragOver=!1}}},[e.showCover?t("cover",{attrs:{image:e.lastestFile,"on-preview":e.onPreview,"on-remove":e.onRemove}}):e._t("default")," "," ",t("input",{ref:"input",staticClass:"el-upload__input",attrs:{type:"file",multiple:e.multiple,accept:e.accept},on:{change:e.handleChange}})])},staticRenderFns:[]}},function(e,t,n){var r,o;r=n(23),o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(18),i=r(o);t.default={components:{Cover:i.default},props:{type:String,data:{},action:{type:String,required:!0},name:{type:String,default:"file"},withCredentials:Boolean,accept:String,onStart:Function,onProgress:Function,onSuccess:Function,onError:Function,beforeUpload:Function,onPreview:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}}},data:function(){return{dragOver:!1,mouseover:!1,domain:"",file:null,disabled:!1}},computed:{lastestFile:function(){var e=this.$parent.fileList;return e[e.length-1]},showCover:function(){var e=this.lastestFile;return this.thumbnailMode&&e&&"fail"!==e.status},thumbnailMode:function(){return this.$parent.thumbnailMode}},methods:{isImage:function(e){return e.indexOf("image")!==-1},handleClick:function(){this.disabled||this.$refs.input.click()},handleChange:function(e){var t=e.target.files[0];this.file=t,this.onStart(t);var n=this.getFormNode(),r=this.getFormDataNode(),o=this.data;"function"==typeof o&&(o=o(t));var i=[];for(var a in o)o.hasOwnProperty(a)&&i.push('<input name="'+a+'" value="'+o[a]+'"/>');r.innerHTML=i.join(""),n.submit(),r.innerHTML="",this.disabled=!0},getFormNode:function(){return this.$refs.form},getFormDataNode:function(){return this.$refs.data},onDrop:function(e){e.preventDefault(),this.dragOver=!1,this.uploadFiles(e.dataTransfer.files)},handleDragover:function(e){e.preventDefault(),this.onDrop=!0},handleDragleave:function(e){e.preventDefault(),this.onDrop=!1},onload:function(e){this.disabled=!1}},mounted:function(){var e=this;window.addEventListener("message",function(t){var n=new URL(e.action).origin;if(t.origin!==n)return!1;var r=t.data;"success"===r.result?e.onSuccess(r,e.file):"failed"===r.result&&e.onSuccess(r,e.file)},!1)},render:function(e){var t=e("cover",{attrs:{image:this.lastestFile},on:{preview:this.onPreview,remove:this.onRemove}},[]),n="frame-"+Date.now();return e("div",{class:{"el-upload__inner":!0,"el-dragger":"drag"===this.type,"is-dragOver":this.dragOver,"is-showCover":this.showCover},on:{click:this.handleClick},nativeOn:{drop:this.onDrop,dragover:this.handleDragover,dragleave:this.handleDragleave}},[e("iframe",{on:{load:this.onload},ref:"iframe",attrs:{name:n}},[]),e("form",{ref:"form",attrs:{action:this.action,target:n,enctype:"multipart/form-data",method:"POST"}},[e("input",{class:"el-upload__input",attrs:{type:"file",name:"file",accept:this.accept},ref:"input",on:{change:this.handleChange}},[]),e("input",{attrs:{type:"hidden",name:"documentDomain",value:document.domain}},[]),e("span",{ref:"data"},[])]),this.showCover?t:this.$slots.default])}}}])});