/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2022-01-17 03:27:36
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app-dgiot-dbc60588"],{"0c57":function(e,t,n){},"0d67":function(e,t,n){"use strict";n("e9c6")},"121c":function(e,t,n){},1442:function(e,t,n){"use strict";n("413b")},"14e0":function(e,t,n){"use strict";n("cb61")},"19af":function(e,t,n){var a={"./FRender.js":"d82d","./amis.js":"5030","./beFull.js":"d463","./dataV.js":"adaf","./dgiot.js":"59ab7","./directive.js":"3f21","./drag.js":"7062","./driver.js":"9d39","./element.js":"73b5","./errorLog.js":"f46a","./permissions.js":"2576","./support.js":"a7e8","./vue-audio-visual.js":"5b72"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="19af"},"250f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-admin-beautiful-wrapper",class:e.classObj},[n("vab-layout-"+e.theme.layout,{tag:"component",attrs:{collapse:e.collapse,device:e.device,"fixed-header":e.theme.fixedHeader,"show-tabs":e.theme.showTabs}}),n("el-backtop",{attrs:{target:"#dgiot"}}),n("vab-theme-drawer"),n("vab-theme-setting")],1)},o=[],s=n("e97b"),i=n("5880"),r={name:"Layouts",data:function(){return{isMobile:!1,oldLayout:""}},computed:Object(s["a"])(Object(s["a"])({},Object(i["mapGetters"])({device:"settings/device",collapse:"settings/collapse",theme:"settings/theme"})),{},{classObj:function(){return{mobile:"mobile"===this.device}}}),beforeMount:function(){this.oldLayout=this.theme.layout,window.addEventListener("resize",this.handleLayouts)},beforeDestroy:function(){window.removeEventListener("resize",this.handleLayouts),this.theme.layout=this.oldLayout},mounted:function(){this.handleLayouts()},methods:Object(s["a"])(Object(s["a"])({},Object(i["mapActions"])({toggleDevice:"settings/toggleDevice",foldSideBar:"settings/foldSideBar",openSideBar:"settings/openSideBar"})),{},{handleLayouts:function(){var e=document.body.getBoundingClientRect().width-1<992;this.isMobile!==e&&(e?(this.oldLayout=this.theme.layout,this.foldSideBar()):this.openSideBar(),this.theme.layout=e?"vertical":this.oldLayout,this.toggleDevice(e?"mobile":"desktop"),this.isMobile=e)}})},c=r,u=(n("1442"),n("bdd7")),l=Object(u["a"])(c,a,o,!1,null,"b6e5481e",null);t["default"]=l.exports},2576:function(e,t,n){"use strict";n.r(t);var a=n("e97b"),o=n("fb07"),s=n("d0d7"),i=n.n(s),r=(n("7690"),n("f764"),n("5662"),n("a18c")),c=n("4360"),u=n("1af2"),l=n.n(u),d=n("bcc7"),f=n("1e51"),b=n("f121");l.a.configure({easing:"ease",speed:500,trickleSpeed:200,showSpinner:!1}),r["default"].beforeEach(function(){var e=Object(o["a"])(i.a.mark((function e(t,n,o){var s,r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c["default"].dispatch("routes/setRoutesOpenTime",{router:t.meta.component,timestamp:moment(new Date).valueOf()}),s=c["default"].getters["settings/theme"].showProgressBar,s&&l.a.start(),r=c["default"].getters["user/token"],b["loginInterception"]||(r=!0),!r){e.next=29;break}if(!c["default"].getters["routes/routes"].length){e.next=10;break}"/login"===t.path?(o({path:"/dashboard"}),s&&l.a.done()):o(),e.next=27;break;case 10:if(e.prev=10,!b["loginInterception"]){e.next=14;break}e.next=16;break;case 14:return e.next=16,c["default"].dispatch("user/setVirtualRoles");case 16:return e.next=18,c["default"].dispatch("routes/setRoutes",b["authentication"]);case 18:o(Object(a["a"])(Object(a["a"])({},t),{},{replace:!0})),e.next=27;break;case 21:return e.prev=21,e.t0=e["catch"](10),dgiotlog.warn("错误拦截:",e.t0),e.next=26,c["default"].dispatch("user/resetAll");case 26:o(Object(f["toLoginRoute"])(t));case 27:e.next=40;break;case 29:if(!b["routesWhiteList"].includes(t.path)){e.next=39;break}if(!b["supportVisit"]||c["default"].getters["routes/routes"].length){e.next=36;break}return e.next=33,c["default"].dispatch("routes/setRoutes","visit");case 33:o(Object(a["a"])(Object(a["a"])({},t),{},{replace:!0})),e.next=37;break;case 36:o();case 37:e.next=40;break;case 39:o(Object(f["toLoginRoute"])(t));case 40:case"end":return e.stop()}}),e,null,[[10,21]])})));return function(t,n,a){return e.apply(this,arguments)}}()),r["default"].afterEach((function(e){var t;e.meta&&e.meta.title?(t=e.meta.component,document.title=Object(d["default"])("".concat(e.meta.title))):t=e,_.isPlainObject(t)||dgiotlog.getDgiotlog("src/dgiot/plugins/permissions.js").info("router ->",t),dgiot.router=t,l.a.status&&l.a.done()}))},"25b8":function(e,t,n){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"30e1":function(e,t,n){"use strict";n("5306")},"391c":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vab-layout-horizontal",class:{fixed:e.fixedHeader,"no-tabs-bar":!e.showTabs}},[n("div",{staticClass:"vab-layout-header",class:{"fixed-header":e.fixedHeader}},[n("vab-header"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showTabs,expression:"showTabs"}],class:{"vab-tabs-horizontal":e.showTabs}},[n("div",{staticClass:"vab-main"},[n("vab-tabs")],1)])],1),n("div",{staticClass:"vab-main main-padding"},[n("vab-app-main")],1)])},o=[],s={name:"VabLayoutHorizontal",props:{collapse:{type:Boolean,default:function(){return!1}},fixedHeader:{type:Boolean,default:function(){return!0}},showTabs:{type:Boolean,default:function(){return!0}},device:{type:String,default:function(){return"desktop"}}}},i=s,r=(n("0d67"),n("bdd7")),c=Object(r["a"])(i,a,o,!1,null,"06afd8b7",null);t["default"]=c.exports},"3f21":function(e,t,n){"use strict";n.r(t);n("f764"),n("5662"),n("1d17"),n("98da"),n("f1e1"),n("b037");var a=n("b0a0");Vue.directive("permissions",{inserted:function(e,t){var n=t.value;n&&(Object(a["hasAccess"])(n)||e.parentNode&&e.parentNode.removeChild(e))}}),Vue.directive("drag-dialog",{inserted:function(e,t,n){var a=e.querySelector(".el-dialog__header"),o=e.querySelector(".el-dialog");a.style.cssText+=";cursor:move;",o.style.cssText+=";top:0px;";var s=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();a.onmousedown=function(e){var t=e.clientX-a.offsetLeft,n=e.clientY-a.offsetTop,i=o.offsetWidth,r=o.offsetHeight,c=document.body.clientWidth,u=document.body.clientHeight,l=o.offsetLeft,d=c-o.offsetLeft-i,f=o.offsetTop,b=u-o.offsetTop-r,m=s(o,"left"),p=s(o,"top");m.includes("%")?(m=+document.body.clientWidth*(+m.replace(/\%/g,"")/100),p=+document.body.clientHeight*(+p.replace(/\%/g,"")/100)):(m=+m.replace(/\px/g,""),p=+p.replace(/\px/g,"")),document.onmousemove=function(e){var a=e.clientX-t,s=e.clientY-n;-a>l?a=-l:a>d&&(a=d),-s>f?s=-f:s>b&&(s=b),o.style.cssText+=";left:".concat(a+m,"px;top:").concat(s+p,"px;")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}}),Vue.directive("drag",{bind:function(e,t,n){if(e.querySelector(".el-dialog__header")&&e.querySelector(".el-dialog")){var a=e.querySelector(".el-dialog__header"),o=e.querySelector(".el-dialog");a.style.cssText+=";cursor:move;",o.style.cssText+=";top:0;";var s=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,null)[t]}}();a.onmousedown=function(e){var t=e.clientX-a.offsetLeft,i=e.clientY-a.offsetTop,r=o.offsetWidth,c=o.offsetHeight,u=document.body.clientWidth,l=document.body.clientHeight,d=o.offsetLeft,f=u-o.offsetLeft-r,b=o.offsetTop,m=l-o.offsetTop-c,p=s(o,"left"),v=s(o,"top");p.includes("%")?(p=+document.body.clientWidth*(+p/100),v=+document.body.clientHeight*(+v/100)):(p=+p.slice(0,-2),v=+v.slice(0,-2)),document.onmousemove=function(e){var a=e.clientX-t,s=e.clientY-i;-a>d?a=-d:a>f&&(a=f),-s>b?s=-b:s>m&&(s=m),o.style.cssText+=";left:".concat(a+p,"px;top:").concat(s+v,"px;"),n.child.$emit("drag-dialog")},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}}})},"413b":function(e,t,n){},"47d1":function(e,t,n){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"4c7b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vab-layout-common",class:{fixed:e.fixedHeader,"no-tabs-bar":!e.showTabs}},[n("div",{staticClass:"vab-layout-header",class:{"fixed-header":e.fixedHeader}},[n("vab-header",{attrs:{layout:"common"}}),n("div",[n("vab-side-bar",{attrs:{layout:"common"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showTabs,expression:"showTabs"}],staticClass:"vab-main",class:{"is-collapse-main":e.collapse}},[n("vab-tabs",{attrs:{layout:"common"}})],1)],1)],1),n("div",{staticClass:"vab-main main-padding",class:{"is-collapse-main":e.collapse}},[n("vab-app-main")],1)])},o=[],s={name:"VabLayoutCommon",props:{collapse:{type:Boolean,default:function(){return!1}},fixedHeader:{type:Boolean,default:function(){return!0}},showTabs:{type:Boolean,default:function(){return!0}},device:{type:String,default:function(){return"desktop"}}}},i=s,r=(n("7c75"),n("bdd7")),c=Object(r["a"])(i,a,o,!1,null,"52bb064a",null);t["default"]=c.exports},5030:function(e,t,n){"use strict";n.r(t);n("c3b8"),n("cd7d"),n("8b05");var a=n("796d");window.qs=a},5306:function(e,t,n){},"59ab7":function(e,t,n){"use strict";n.r(t);var a=n("f121"),o=n("4208"),s=n("4360"),i=n("5d7c"),r=n("12cb"),c=s["default"].getters["user/token"],u=(s["default"].getters["settings/language"],r["default"].t("vabI18n.".concat("developer.Data is loading")));Vue.prototype.$baseToken=function(){return c||Object(i["getToken"])()},Vue.prototype.$baseLoading=function(e,t){var n;return n=e?o["Loading"].service({lock:!0,text:t||u,spinner:"vab-loading-type"+e,background:"hsla(0,0%,100%,0.8)"}):o["Loading"].service({lock:!0,text:t||u,background:"hsla(0,0%,100%,.8)"}),n},Vue.prototype.$baseColorfullLoading=function(e,t){var n;if(e){switch(e){case 1:e="dots";break;case 2:e="gauge";break;case 3:e="inner-circles";break;case 4:e="plus";break}n=o["Loading"].service({lock:!0,text:t||u,spinner:e+"-loader",background:"hsla(0,0%,100%,.8)"})}else n=o["Loading"].service({lock:!0,text:t||u,spinner:"dots-loader",background:"hsla(0,0%,100%,.8)"});return n},Vue.prototype.$baseMessage=function(e,t,n,s){Object(o["Message"])({showClose:!0,message:e,type:t,dangerouslyUseHTMLString:n,duration:a["messageDuration"],customClass:s})},Vue.prototype.$baseAlert=function(e,t,n){o["MessageBox"].alert(e,t||"温馨提示",{confirmButtonText:"确定",dangerouslyUseHTMLString:!0,callback:function(){n&&n()}}).then((function(){}))},Vue.prototype.$baseConfirm=function(e,t,n,a,s,i){o["MessageBox"].confirm(e,t||"温馨提示",{confirmButtonText:s||"确定",cancelButtonText:i||"取消",closeOnClickModal:!1,type:"warning",lockScroll:!1}).then((function(){n&&n()}))["catch"]((function(){a&&a()}))},Vue.prototype.$baseNotify=function(e,t,n,s,i){Object(o["Notification"])({title:t,message:e,position:s||"top-right",type:n||"success",duration:i||a["messageDuration"]})},Vue.prototype.$baseTableHeight=function(e){var t=window.innerHeight,n=291,a=60;return"number"==typeof e?t=t-n-a*e:t-=n,t},Vue.prototype.$baseEventBus=new Vue},"5b72":function(e,t,n){"use strict";n.r(t);var a=n("8ac7");Vue.use(a["a"])},7062:function(e,t,n){"use strict";n.r(t);n("f764"),n("5662"),n("1d17"),n("98da"),n("f1e1");t["default"]={bind:function(e,t,n){var a=e.querySelector(".el-dialog__header"),o=e.querySelector(".el-dialog");a.style.cssText+=";cursor:move;",o.style.cssText+=";top:0px;";var s=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();a.onmousedown=function(e){var t=e.clientX-a.offsetLeft,i=e.clientY-a.offsetTop,r=o.offsetWidth,c=o.offsetHeight,u=document.body.clientWidth,l=document.body.clientHeight,d=o.offsetLeft,f=u-o.offsetLeft-r,b=o.offsetTop,m=l-o.offsetTop-c,p=s(o,"left"),v=s(o,"top");p.includes("%")?(p=+document.body.clientWidth*(+p.replace(/\%/g,"")/100),v=+document.body.clientHeight*(+v.replace(/\%/g,"")/100)):(p=+p.replace(/\px/g,""),v=+v.replace(/\px/g,"")),document.onmousemove=function(e){var a=e.clientX-t,s=e.clientY-i;-a>d?a=-d:a>f&&(a=f),-s>b?s=-b:s>m&&(s=m),o.style.cssText+=";left:".concat(a+p,"px;top:").concat(s+v,"px;"),n.child.$emit("dragDialog")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}}},"73b5":function(e,t,n){"use strict";n.r(t);n("16b8");var a=n("4208"),o=n.n(a),s=(n("6693"),n("ede3"),n("12cb")),i=(n("44e4"),n("8a4c")),r=n.n(i);Vue.component(r.a.name,r.a),Vue.use(o.a,{size:"small",i18n:function(e,t){return s["default"].t(e,t)}})},"752a":function(e,t,n){"use strict";n("121c")},"7c75":function(e,t,n){"use strict";n("bf57")},"7c97":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vab-layout-comprehensive",class:{fixed:e.fixedHeader,"no-tabs-bar":!e.showTabs}},[n("vab-side-bar",{attrs:{layout:"comprehensive"}}),n("div",{staticClass:"vab-main",class:{"is-collapse-main":e.collapse}},[n("div",{staticClass:"vab-layout-header",class:{"fixed-header":e.fixedHeader}},[n("vab-nav",{attrs:{layout:"comprehensive"}}),n("vab-tabs",{directives:[{name:"show",rawName:"v-show",value:e.showTabs,expression:"showTabs"}]})],1),n("vab-app-main")],1)],1)},o=[],s={name:"VabLayoutComprehensive",props:{collapse:{type:Boolean,default:function(){return!1}},fixedHeader:{type:Boolean,default:function(){return!0}},showTabs:{type:Boolean,default:function(){return!0}},device:{type:String,default:function(){return"desktop"}}}},i=s,r=(n("14e0"),n("bdd7")),c=Object(r["a"])(i,a,o,!1,null,"1d432a01",null);t["default"]=c.exports},"9d39":function(e,t,n){"use strict";n.r(t);var a=n("b730"),o=n.n(a);n("f90c");Vue.prototype.$Driver=o.a},"9e0e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive")},o=[],s={name:"VabEmptyLayout"},i=s,r=n("bdd7"),c=Object(r["a"])(i,a,o,!1,null,null,null);t["default"]=c.exports},a55b:function(e,t,n){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},a7e8:function(e,t,n){"use strict";n.r(t);var a=n("4208"),o=n("f121");(window.ActiveXObject||"ActiveXObject"in window)&&Object(a["MessageBox"])({title:"温馨提示",message:'检测到您当前浏览器使用的是IE内核，自2015年3月起，微软已宣布弃用IE，且不再对IE提供任何更新维护，请<a target="_blank" style="color:blue" href="https://www.microsoft.com/zh-cn/edge/">点击此处</a>访问微软官网更新浏览器，如果您使用的是双核浏览器,请您切换浏览器内核为极速模式',type:"warning",showClose:!0,showConfirmButton:!1,closeOnClickModal:!1,closeOnPressEscape:!1,closeOnHashChange:!1,dangerouslyUseHTMLString:!0}),dgiotlog.log(" %c ".concat(o["title"],"  %c 基于dgiot构建 "),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;")},adaf:function(e,t,n){"use strict";n.r(t);var a=n("0f0a");Vue.use(a["a"])},bf57:function(e,t,n){},c3f4:function(e,t,n){"use strict";n.r(t);var a=function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return a("el-scrollbar",{staticClass:"column-bar-container",class:(e={"is-collapse":t.collapse},e["column-bar-container-"+t.theme.columnStyle]=!0,e)},[a("vab-logo"),a("el-tabs",{attrs:{"tab-position":"left"},on:{"tab-click":t.handleTabClick},model:{value:t.extra.first,callback:function(e){t.$set(t.extra,"first",e)},expression:"extra.first"}},t._l(t.handleRoutes,(function(e){var n;return a("el-tab-pane",{key:e.name,attrs:{name:e.name}},[a("template",{slot:"label"},[a("div",{staticClass:"column-grid",class:(n={},n["column-grid-"+t.theme.columnStyle]=!0,n),attrs:{title:t.$translateTitle("route."+e.meta.title)}},[a("div",[e.meta.icon&&e.meta.icon.includes("dgiot")?a("el-image",{staticStyle:{float:"left",width:"16px",height:"16px"},attrs:{alt:t.$FileServe,src:t.$FileServe+e.meta.icon}},[a("img",{staticStyle:{float:"left",width:"16px",height:"16px"},attrs:{slot:"error",src:t.$FileServe+e.meta.icon,title:t.$FileServe+e.meta.icon},slot:"error"})]):a("dgiot-icon",{attrs:{alt:t.$FileServe,icon:e.meta.icon,"is-custom-svg":e.meta.isCustomSvg}}),a("span",[t._v(" "+t._s(t.$translateTitle("route."+e.meta.title))+" ")])],1)])])],2)})),1),a("el-menu",{attrs:{"background-color":t.variables["column-second-menu-background"],"default-active":t.activeMenu,"default-openeds":t.defaultOpeneds,mode:"vertical","unique-opened":t.uniqueOpened}},[a("el-divider",[t._v(" "+t._s(t.$translateTitle(t.handleGroupTitle))+" ")]),t._l(t.handlePartialRoutes,(function(e){return[e.hidden?t._e():a("vab-menu",{key:e.path,attrs:{item:e}})]}))],2)],1)},o=[],s=n("e97b"),i=(n("a0e0"),n("3dec"),n("7983"),n("16b8"),n("b4ff")),r=n.n(i),c=n("5880"),u=n("f121"),l=n("1e51"),d={name:"ColumnBar",data:function(){return{activeMenu:"",groupTitle:"",defaultOpeneds:u["defaultOpeneds"],uniqueOpened:u["uniqueOpened"],variables:r.a}},computed:Object(s["a"])(Object(s["a"])({},Object(c["mapGetters"])({collapse:"settings/collapse",routes:"routes/routes",theme:"settings/theme",extra:"settings/extra"})),{},{handleRoutes:function(){return this.routes.filter((function(e){return!0!==e.hidden&&e.meta}))},handlePartialRoutes:function(){var e=this,t=this.routes.find((function(t){return t.name===e.extra.first}));return t?t.children:[]},handleGroupTitle:function(){var e=this,t=this.routes.find((function(t){return t.name===e.extra.first}));return t?t.meta.title:""}}),watch:{$route:{handler:function(e){this.activeMenu=Object(l["handleActivePath"])(e);var t=e.matched[0].name;this.extra.first!==t&&(this.extra.first=t,this.handleTabClick(!0))},immediate:!0}},methods:{handleTabClick:function(e){!0!==e&&u["openFirstMenu"]&&(this.$router.push(this.handlePartialRoutes[0].path),this.$store.dispatch("settings/openSideBar"))}}},f=d,b=(n("30e1"),n("bdd7")),m=Object(b["a"])(f,a,o,!1,null,"07d69920",null);t["default"]=m.exports},cb61:function(e,t,n){},d463:function(e,t){function n(e){function t(e){if(e.requestFullscreen)e.requestFullscreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.webkitRequestFullScreen)e.webkitRequestFullScreen();else{if(!e.msRequestFullScreen)return alert("当前浏览器不支持全屏，请更换浏览器"),!1;e.msRequestFullScreen()}}return t(document.getElementById("".concat(e)))}function a(e){function t(e){if(dgiotlog.log("exitFullscreen",e),document.exitFullscreen)document.exitFullscreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else{if(!document.msExitFullscreen)return alert("当前浏览器不支持全屏，请更换浏览器"),!1;document.msExitFullscreen()}}return t(document.getElementById("".concat(e)))}Vue.prototype.$beFull=n,Vue.prototype.$exitFull=a},d82d:function(e,t){},e0bc:function(e,t,n){"use strict";n("0c57")},e866:function(e,t,n){"use strict";n.r(t);var a=function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"vab-layout-column",class:{fixed:t.fixedHeader,"no-tabs-bar":!t.showTabs}},[a("column-bar"),a("div",{staticClass:"vab-main",class:(e={},e["vab-main-"+t.theme.columnStyle]=!0,e["is-collapse-main"]=t.collapse,e)},[a("div",{staticClass:"vab-layout-header",class:{"fixed-header":t.fixedHeader}},[a("vab-nav"),a("vab-tabs",{directives:[{name:"show",rawName:"v-show",value:t.showTabs,expression:"showTabs"}]})],1),a("vab-app-main")],1)],1)},o=[],s=n("e97b"),i=n("5880"),r={name:"VabLayoutColumn",props:{collapse:{type:Boolean,default:function(){return!1}},fixedHeader:{type:Boolean,default:function(){return!0}},showTabs:{type:Boolean,default:function(){return!0}}},computed:Object(s["a"])({},Object(i["mapGetters"])({theme:"settings/theme"}))},c=r,u=(n("e0bc"),n("bdd7")),l=Object(u["a"])(c,a,o,!1,null,"488948a6",null);t["default"]=l.exports},e9c6:function(e,t,n){},ed67:function(e,t,n){var a={"./VabEmptyLayout/index.vue":"9e0e","./VabLayoutColumn/components/ColumnBar.vue":"c3f4","./VabLayoutColumn/index.vue":"e866","./VabLayoutCommon/index.vue":"4c7b","./VabLayoutComprehensive/index.vue":"7c97","./VabLayoutHorizontal/index.vue":"391c","./VabLayoutVertical/index.vue":"efaf","./index.vue":"250f"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="ed67"},efaf:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vab-layout-vertical",class:{fixed:e.fixedHeader,"no-tabs-bar":!e.showTabs}},[n("vab-side-bar"),"mobile"!==e.device||e.collapse?e._e():n("div",{staticClass:"v-modal",on:{click:e.handleFoldSideBar}}),n("div",{staticClass:"vab-main",class:{"is-collapse-main":e.collapse}},[n("div",{staticClass:"vab-layout-header",class:{"fixed-header":e.fixedHeader}},[n("vab-nav"),n("vab-tabs",{directives:[{name:"show",rawName:"v-show",value:e.showTabs,expression:"showTabs"}]})],1),n("vab-app-main")],1)],1)},o=[],s=n("e97b"),i=n("5880"),r={name:"VabLayoutVertical",props:{collapse:{type:Boolean,default:function(){return!1}},fixedHeader:{type:Boolean,default:function(){return!0}},showTabs:{type:Boolean,default:function(){return!0}},device:{type:String,default:function(){return"desktop"}}},methods:Object(s["a"])({},Object(i["mapActions"])({handleFoldSideBar:"settings/foldSideBar"}))},c=r,u=(n("752a"),n("bdd7")),l=Object(u["a"])(c,a,o,!1,null,"5b4829b2",null);t["default"]=l.exports},f46a:function(e,t,n){"use strict";n.r(t);n("f764"),n("5662");var a=n("4360"),o=n("28d7"),s=n("f121"),i=s["errorLog"],r=function(){var e="production";return Object(o["isString"])(i)?e===i:!!Object(o["isArray"])(i)&&i.includes(e)};r()&&(Vue.config.errorHandler=function(e,t,n){dgiotlog.warn("错误拦截:",e,t,n);var o=window.location.href;Vue.nextTick((function(){a["default"].dispatch("errorLog/addErrorLog",{err:e,vm:t,info:n,url:o}).then((function(){}))}))})},f642:function(e,t,n){var a={"./asian.scss":"47d1","./blue-black.scss":"fae4","./blue-white.scss":"25b8","./element-green.scss":"4bba","./green-black.scss":"188e","./green-white.scss":"aa43","./green.scss":"7f48","./ocean.scss":"ff4f","./red-black.scss":"7f33","./red-white.scss":"6799","./red.scss":"c350","./white.scss":"2b83"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="f642"},fae4:function(e,t,n){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}}}]);