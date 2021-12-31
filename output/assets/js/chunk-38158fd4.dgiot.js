/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 14:49:48
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38158fd4"],{"07fb":function(t,e,a){"use strict";a("d14d")},"0c50":function(t,e,a){"use strict";a("8da7")},1605:function(t,e,a){"use strict";a("c54f")},2981:function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"38b8":function(t,e,a){},"4d4a":function(t,e,a){"use strict";a("2981")},"4e5b":function(t,e,a){"use strict";a.r(e);var n,s,o=a("bdd7"),i={},r=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=r.exports},6323:function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"69a5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alarms-view"},[a("div",{staticClass:"page-title"},[t._v(" "+t._s(t.$translateTitle("leftbar.alarms"))+" ")]),a("div",{staticClass:"table-title"},[t._v(" "+t._s(t.$translateTitle("analysis.currentAlarms"))+" ")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{border:"",data:t.currentTableData}},[a("el-table-column",{attrs:{label:t.$translateTitle("analysis.alarmName"),prop:"name"}}),a("el-table-column",{attrs:{label:t.$translateTitle("analysis.alarmMessage"),"min-width":"140px",prop:"message","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-popover",{attrs:{"open-delay":500,placement:"top",trigger:"hover",width:"160"}},[t._l(n.details,(function(e,n){return a("div",{key:n},[t._v(" "+t._s(n)+": "+t._s(e)+" ")])})),a("span",{staticClass:"details",attrs:{slot:"reference"},slot:"reference"},[a("i",{staticClass:"iconfont icon-bangzhu"})])],2),a("span",[t._v(t._s(n.message))])]}}])}),a("el-table-column",{attrs:{label:t.$translateTitle("clients.node"),"min-width":"60px",prop:"node","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:t.$translateTitle("analysis.activateAt"),prop:"activate_at"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.dateFormat(a.activate_at))+" ")]}}])}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.getDuration(a.duration))+" ")]}}])},[a("span",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$translateTitle("analysis.duration"))+" "),a("el-popover",{attrs:{placement:"top",trigger:"hover"}},[t._v(" "+t._s(t.$translateTitle("analysis.durationTips"))+" "),a("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1)]),a("el-table-column",{attrs:{fixed:"right",label:t.$translateTitle("oper.oper"),width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,s=e.$index,o=e._self;return[a("el-popover",{ref:"popover-"+s,attrs:{placement:"right",trigger:"click"}},[a("p",[t._v(t._s(t.$translateTitle("analysis.confirmDeactivate")))]),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{staticClass:"cache-btn",attrs:{size:"mini",type:"text"},on:{click:function(t){o.$refs["popover-"+s].doClose()}}},[t._v(" "+t._s(t.$translateTitle("oper.cancel"))+" ")]),a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(e){return t.handleCancelAlarm(n,s,o)}}},[t._v(" "+t._s(t.$translateTitle("oper.confirm"))+" ")])],1),a("el-button",{attrs:{slot:"reference",plain:"",size:"mini",type:"danger"},slot:"reference"},[t._v(" "+t._s(t.$translateTitle("analysis.deactivate"))+" ")])],1)]}}])})],1),a("div",{staticClass:"table-title"},[t._v(" "+t._s(t.$translateTitle("analysis.historicalAlarm"))+" "),a("el-button",{staticClass:"table-oper",attrs:{disabled:!t.historicalTableData.length,plain:"",size:"mini",type:"danger"},on:{click:t.handleClearAll}},[t._v(" "+t._s(t.$translateTitle("analysis.clearAll"))+" ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{border:"",data:t.historicalTableData}},[a("el-table-column",{attrs:{label:t.$translateTitle("analysis.alarmName"),prop:"name"}}),a("el-table-column",{attrs:{label:t.$translateTitle("analysis.alarmMessage"),"min-width":"140px",prop:"message","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-popover",{attrs:{"open-delay":500,placement:"top",trigger:"hover",width:"160"}},[t._l(n.details,(function(e,n){return a("div",{key:n},[t._v(" "+t._s(n)+": "+t._s(e)+" ")])})),a("span",{staticClass:"details",attrs:{slot:"reference"},slot:"reference"},[a("i",{staticClass:"iconfont icon-bangzhu"})])],2),a("span",[t._v(t._s(n.message))])]}}])}),a("el-table-column",{attrs:{label:t.$translateTitle("clients.node"),"min-width":"60px",prop:"node","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:t.$translateTitle("analysis.activateAt"),prop:"activate_at"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.dateFormat(a.activate_at))+" ")]}}])}),a("el-table-column",{attrs:{label:t.$translateTitle("analysis.deactivateAt"),prop:"deactivate_at"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t.dateFormat(a.deactivate_at))+" ")]}}])})],1)],1)},s=[],o=(a("3dec"),a("9c6a"),a("16b8"),a("4208")),i=a("ed08"),r=a("926a"),l={name:"AlarmsView",components:{"el-table":o["Table"],"el-table-column":o["TableColumn"],"el-popover":o["Popover"],"el-tooltip":o["Tooltip"]},data:function(){return{loading:!1,currentTableData:[],historicalTableData:[],lang:window.localStorage.getItem("language")||"en"}},created:function(){this.loadData()},methods:{loadData:function(){this.loadAlarmData("activated","currentTableData"),this.loadAlarmData("deactivated","historicalTableData")},loadAlarmData:function(t,e){var a=this;this.loading=!0,this.$httpGet("/alarms/".concat(t)).then((function(t){var n=t.data,s=[];n.forEach((function(t){t.alarms.forEach((function(e){e.node=t.node,s.push(e)}))})),a[e]=s,a.loading=!1})).catch((function(t){a.loading=!1,a.$message.error(t||a.$translateTitle("error.networkError"))}))},getDuration:function(t){return Object(i["getDateDiff"])(t/1e3)},dateFormat:function(t){return"number"!==typeof t&&"infinity"===t?"":Object(r["default"])(t/1e3,"yyyy-mm-dd HH:MM:ss")},handleCancelAlarm:function(t,e,a){var n=this,s={node:t.node,name:t.name};this.$httpPost("/alarms/deactivated",s).then((function(){a.$refs["popover-".concat(e)].doClose(),n.loadData()})).catch((function(t){n.$message.error(t||n.$translateTitle("error.networkError"))}))},handleClearAll:function(){var t=this;this.$confirm(this.$translateTitle("analysis.confirmClear"),this.$translateTitle("oper.warning"),{confirmButtonClass:"confirm-btn",cancelButtonClass:"cache-btn el-button--text",type:"warning"}).then((function(){t.$httpDelete("/alarms/deactivated").then((function(){t.loadData()})).catch((function(e){t.$message.error(e||t.$translateTitle("error.networkError"))}))})).catch((function(){}))}}},c=l,d=(a("e76f"),a("bdd7")),u=Object(d["a"])(c,n,s,!1,null,null,null);e["default"]=u.exports},"6de3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clients-subscriptions"},[a("el-card",{staticClass:"el-card--self tabs-card"},[a("el-row",[a("el-col",{staticClass:"card-subtitle",attrs:{span:12}},[t._v(" "+t._s(t.$t("clients.currentSubs"))+" ")]),a("el-col",{staticClass:"oper-btn-group",attrs:{span:12}},[a("el-button",{attrs:{icon:"el-icon-refresh",plain:"",size:"mini",type:"success"},on:{click:t.reload}},[t._v(" "+t._s(t.$t("oper.refresh"))+" ")]),a("el-button",{attrs:{icon:"el-icon-plus",plain:"",size:"mini",type:"success"},on:{click:t.open}},[t._v(" "+t._s(t.$t("clients.addSubs"))+" ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.$store.state.loading,expression:"$store.state.loading"}],staticClass:"client-sub-table",attrs:{border:"",data:t.tableData}},[a("el-table-column",{attrs:{label:t.$t("subscriptions.topic"),prop:"topic"}}),a("el-table-column",{attrs:{label:t.$t("subscriptions.qoS"),prop:"qos"}}),a("el-table-column",{attrs:{label:t.$t("oper.oper"),width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-button",{attrs:{plain:"",size:"mini",type:"danger"},on:{click:function(e){return t.handleUnsub(n)}}},[t._v(" "+t._s(t.$t("oper.unsubscribe"))+" ")])]}}])})],1)],1),a("el-dialog",{staticClass:"create-subscribe",attrs:{"append-to-body":!0,title:t.$t("clients.addSubs"),visible:t.addVisible,width:"400px"},on:{"update:visible":function(e){t.addVisible=e}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleAdd.apply(null,arguments)}}},[a("el-form",{ref:"record",staticClass:"el-form--public",attrs:{"label-position":"top",model:t.record,rules:t.rules,size:"small"}},[a("el-form-item",{attrs:{label:t.$t("subscriptions.topic"),prop:"topic"}},[a("el-input",{attrs:{placeholder:"Topic"},model:{value:t.record.topic,callback:function(e){t.$set(t.record,"topic",e)},expression:"record.topic"}})],1),a("el-form-item",{attrs:{label:"QoS",prop:"qos"}},[a("vab-emq-select",{staticClass:"el-select--public",attrs:{field:{list:[0,1,2]},"popper-class":"el-select--public",size:"small"},model:{value:t.record.qos,callback:function(e){t.$set(t.record,"qos",e)},expression:"record.qos"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:t.handleClose}},[t._v(" "+t._s(t.$t("oper.cancel"))+" ")]),a("el-button",{staticClass:"confirm-btn",attrs:{loading:t.$store.state.loading,type:"success"},on:{click:t.handleAdd}},[t._v(" "+t._s(t.$t("oper.add"))+" ")])],1)],1)],1)},s=[],o=(a("1d17"),a("98da"),{name:"ClientsSubscriptions",components:{},props:{clientId:{type:String,required:!0},tableData:{type:Array,required:!0},reload:{type:Function,default:function(){}},mountpoint:{type:String,default:""}},data:function(){return{addVisible:!1,record:{topic:"",qos:0},rules:{clientid:{required:!0,message:this.$t("oper.pleaseEnter")},topic:{required:!0,message:this.$t("oper.pleaseEnter")}}}},methods:{handleUnsub:function(t){var e=this;this.$msgbox.confirm(this.$t("oper.unsubscribeConfirm"),this.$t("oper.warning"),{type:"warning"}).then((function(){var a=t.topic,n=t.clientid,s=e.mountpoint?a.replace(e.mountpoint,""):a,o={topic:s,clientid:n};e.$httpPost("/mqtt/unsubscribe",o).then((function(){e.reload()})).catch((function(){}))})).catch((function(){}))},open:function(){this.addVisible=!0,this.record.clientid=this.clientId},handleAdd:function(){var t=this;this.$refs.record.validate((function(e){if(e){var a={};Object.assign(a,t.record),t.$httpPost("/mqtt/subscribe",a).then((function(){t.handleClose(),t.reload()})).catch((function(){}))}}))},handleClose:function(){this.$refs.record.resetFields(),this.addVisible=!1}}}),i=o,r=(a("e374"),a("bdd7")),l=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=l.exports},"72de":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player-container"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{lg:24,md:24,sm:24,xl:24,xs:24}},[a("el-row",{directives:[{name:"show",rawName:"v-show",value:!t.$route.query.url,expression:"!$route.query.url"}],attrs:{gutter:24}},[a("el-col",{attrs:{span:23}},[a("el-input",{staticClass:"input-with-select",attrs:{disabled:t.$route.query.url,placeholder:"请输入内容"},model:{value:t.flvsrc,callback:function(e){t.flvsrc=e},expression:"flvsrc"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{slot:"append",disabled:t.$route.query.type,placeholder:"请选择視頻流格式"},on:{change:t.changeType},slot:"append",model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.videoType,(function(t){return a("el-option",{key:t.type,attrs:{label:t.type,value:t.type}})})),1)],1)],1),a("el-col",{attrs:{span:1}},[a("el-button",{attrs:{plain:"",type:"primary"},on:{click:function(e){return t.Play()}}},[t._v("播放")])],1)],1),a("el-card",{staticClass:"player_card",attrs:{shadow:"hover"}},[a("vab-player",{ref:"vabPlayer",attrs:{autoplay:t.mp4Play,height:t.height,source:t.flvsrc,type:t.type,width:t.width}})],1)],1)],1)],1)},s=[],o=(a("a0e0"),a("3dec"),{name:"Player",data:function(){return{height:this.$baseTableHeight(0),type:this.$route.query?this.$route.query.type:"mp4",width:1600,flvsrc:this.$route.query?this.$route.query.url:"https://media.w3.org/2010/05/sintel/trailer.mp4",mp4Play:!1,videoType:[{type:"mp4",url:"https://media.w3.org/2010/05/sintel/trailer.mp4"},{type:"flv",url:"https://rtmp01open.ys7.com:9188/v3/openlive/C45644828_1_2.flv?expire=1656812988&id=333182878081585152&t=9d9c1b3187ff62633be8573281bff2ae7318ae200908c388bb6c092f54f29c52&ev=100"}]}},computed:{},mounted:function(){var t=this;this.$route.query.type&&this.$route.query.url&&setTimeout((function(){t.mp4Play=!0}),1500)},methods:{changeType:function(t){var e=this.videoType.filter((function(e){if(e.type==t)return e}));dgiotlog.log(t,e[0].url),this.flvsrc=e[0].url},Play:function(){this.$refs.vabPlayer.createVideo()}}}),i=o,r=(a("82f8"),a("bdd7")),l=Object(r["a"])(i,n,s,!1,null,"2d5d49f0",null);e["default"]=l.exports},"82f8":function(t,e,a){"use strict";a("38b8")},"840b":function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"8c57":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player-container"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{lg:24,md:24,sm:24,xl:24,xs:24}},[a("el-card",{staticClass:"player_card",attrs:{shadow:"hover"}},[a("vab-aliplayer",{ref:"vabPlayer",attrs:{autoplay:t.mp4Play,height:t.height,playsource:t.flvsrc,type:t.type,width:t.width}})],1)],1)],1)],1)},s=[],o=(a("a0e0"),a("3dec"),{name:"Player",data:function(){return{height:this.$baseTableHeight(0)+"px",type:this.$route.query?this.$route.query.type:"mp4",width:"100%",flvsrc:this.$route.query?this.$route.query.url:"https://media.w3.org/2010/05/sintel/trailer.mp4",mp4Play:!1,videoType:[{type:"mp4",url:"https://media.w3.org/2010/05/sintel/trailer.mp4"},{type:"flv",url:"https://rtmp01open.ys7.com:9188/v3/openlive/C45644828_1_2.flv?expire=1656812988&id=333182878081585152&t=9d9c1b3187ff62633be8573281bff2ae7318ae200908c388bb6c092f54f29c52&ev=100"}]}},computed:{},mounted:function(){var t=this;this.$route.query.type&&this.$route.query.url&&setTimeout((function(){t.mp4Play=!0}),1500)},methods:{changeType:function(t){var e=this.videoType.filter((function(e){if(e.type==t)return e}));dgiotlog.log(t,e[0].url),this.flvsrc=e[0].url},Play:function(){this.$refs.vabPlayer.createVideo()}}}),i=o,r=(a("07fb"),a("bdd7")),l=Object(r["a"])(i,n,s,!1,null,"0b6c5854",null);e["default"]=l.exports},"8d37":function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"8da7":function(t,e,a){},"904a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topics"},[t._v(" "+t._s(t.pageTitle)+" ")])},s=[],o={name:"Topics",components:{},data:function(){return{pageTitle:"topics"}},computed:{},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){},methods:{}},i=o,r=(a("1605"),a("bdd7")),l=Object(r["a"])(i,n,s,!1,null,"38f2ee62",null);e["default"]=l.exports},"9a55":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"listeners-view"},[a("div",{staticClass:"page-title"},[t._v(" "+t._s(t.$translateTitle("leftbar.listeners"))+" "),a("el-select",{staticClass:"select-radius",attrs:{disabled:t.$store.state.loading,placeholder:t.$translateTitle("select.placeholder")},on:{change:t.loadListeners},model:{value:t.nodeName,callback:function(e){t.nodeName=e},expression:"nodeName"}},t._l(t.nodes,(function(t){return a("el-option",{key:t.node,attrs:{label:t.node,value:t.node}})})),1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.$store.state.loading,expression:"$store.state.loading"}],attrs:{border:"",data:t.listeners}},[a("el-table-column",{attrs:{label:t.$translateTitle("listeners.protocol"),prop:"protocol",width:"240"}}),a("el-table-column",{attrs:{label:t.$translateTitle("listeners.listenOn"),"min-width":"240",prop:"listen_on"}}),a("el-table-column",{attrs:{label:t.$translateTitle("listeners.maxConnections"),"min-width":"180",prop:"max_conns"}}),a("el-table-column",{attrs:{label:t.$translateTitle("listeners.currentConnections"),"min-width":"120",prop:"current_conns"}})],1)],1)},s=[],o=a("e97b"),i=a("5880"),r=a("4208"),l={name:"ListenersView",components:{"el-select":r["Select"],"el-option":r["Option"],"el-table":r["Table"],"el-table-column":r["TableColumn"]},data:function(){return{nodeName:"",nodes:[],listeners:[]}},methods:Object(o["a"])(Object(o["a"])({},Object(i["mapActions"])(["CURRENT_NODE"])),{},{loadData:function(){var t=this;this.$httpGet("/nodes").then((function(e){t.nodeName=t.$store.state.nodeName||e.data[0].node,t.nodes=e.data,t.loadListeners()})).catch((function(e){t.$message.error(e||t.$translateTitle("error.networkError"))}))},loadListeners:function(){var t=this;this.CURRENT_NODE(this.nodeName),this.$httpGet("/nodes/".concat(this.nodeName,"/listeners")).then((function(e){t.listeners=e.data})).catch((function(e){t.$message.error(e||t.$translateTitle("error.networkError"))}))}}),created:function(){this.loadData()}},c=l,d=(a("b464"),a("bdd7")),u=Object(d["a"])(c,n,s,!1,null,null,null);e["default"]=u.exports},b464:function(t,e,a){"use strict";a("840b")},c54f:function(t,e,a){},c787:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player-container"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{lg:24,md:24,sm:24,xl:24,xs:24}},[a("el-card",{staticClass:"player_card",attrs:{shadow:"hover"}},[a("div",{attrs:{id:"video-container"}})])],1)],1)],1)},s=[],o={name:"Ys7",data:function(){return{}},computed:{},created:function(){},mounted:function(){this.initYs7()},methods:{initYs7:function(){var t=this;axios.get("https://hotel.coboriel.com/api_screen").then((function(e){var a=e.data;dgiotlog.log(a),a.data.data.accessToken&&a.data.data.look_url&&(t.$message("初始化".concat(a.data.data.village_name)),t.init(a.data.data.look_url[0],a.data.data.accessToken))})).catch((function(t){dgiotlog.log("e",t)}))},init:function(t,e){player=new EZUIKit.EZUIKitPlayer({autoplay:!0,id:"video-container",accessToken:e,url:t,template:"simple",width:600,height:400}),setTimeout((function(){dgiotlog.log(player),player.play()}),2e3)}}},i=o,r=(a("0c50"),a("bdd7")),l=Object(r["a"])(i,n,s,!1,null,"1d8d51f6",null);e["default"]=l.exports},ce70:function(t,e,a){"use strict";a.r(e),a.d(e,"ruleEngineProvider",(function(){return o}));var n="en",s=lang[n],o=[{name:"clientid",documentation:s.rule.clientid_doc,type:"Field",default:"c_emqx",valueType:"string"},{name:"username",documentation:s.rule.username_doc,type:"Field",default:"u_emqx",valueType:"string"},{name:"event",documentation:s.rule.event_doc,type:"Field",default:"disconnect",valueType:"string"},{name:"id",documentation:s.rule.id_doc,type:"Field",default:"--",valueType:"string"},{name:"payload",documentation:s.rule.payload_doc,type:"Field",default:'{"msg": "hello"}',valueType:"string"},{name:"peername",documentation:s.rule.peername_doc,type:"Field",default:"127.0.0.1:63412",valueType:"string"},{name:"qos",documentation:s.rule.qos_doc,type:"Field",default:1,valueType:"integer"},{name:"timestamp",documentation:s.rule.timestamp_doc,type:"Field",default:1576549961086,valueType:"integer"},{name:"topic",documentation:s.rule.topic_doc,type:"Field",default:"t/a",valueType:"string"},{name:"node",documentation:s.rule.node_doc,type:"Field",default:"emqx@127.0.0.1",valueType:"string"},{name:'"$events/message_delivered"',documentation:s.rule.message_delivered,type:"Method"},{name:'"$events/message_acked"',documentation:s.rule.message_acked,type:"Method"},{name:'"$events/message_dropped"',documentation:s.rule.message_dropped,type:"Method"},{name:'"$events/client_connected"',documentation:s.rule.client_connected,type:"Method"},{name:'"$events/client_disconnected"',documentation:s.rule.client_disconnected,type:"Method"},{name:'"$events/session_subscribed"',documentation:s.rule.session_subscribed,type:"Method"},{name:'"$events/session_unsubscribed"',documentation:s.rule.session_unsubscribed,type:"Method"}];e["default"]=[]},cf57:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topic-metrics"},[a("div",{staticClass:"page-title"},[t._v(" "+t._s(t.$t("analysis.topicMetrics"))+" "),a("span",{staticClass:"sub-tip"},[t._v(t._s(t.$t("analysis.metricsTip")))]),t.modClosed?a("el-button",{staticClass:"confirm-btn",staticStyle:{float:"right"},attrs:{disable:t.$store.state.loading,plain:"",round:"",size:"medium",type:"success"},on:{click:t.handleModLoad}},[t._v(" "+t._s(t.$t("modules.enable"))+" ")]):a("el-button",{staticClass:"confirm-btn",staticStyle:{float:"right"},attrs:{disable:t.$store.state.loading,icon:"el-icon-plus",plain:"",round:"",size:"medium",type:"success"},on:{click:t.handleOperation}},[t._v(" "+t._s(t.$t("rule.create"))+" ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.$store.state.loading,expression:"$store.state.loading"}],ref:"crudTable",attrs:{border:"",data:t.topics,"expand-row-keys":t.expands,"row-key":t.getRowKeys},on:{"expand-change":t.handleExpandChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"expand-header"},[t._v(" "+t._s(t.$t("analysis.details"))+" "),a("el-radio-group",{staticClass:"topic-qos-radio",attrs:{prop:e,size:"mini"},model:{value:t.topicQos,callback:function(e){t.topicQos=e},expression:"topicQos"}},[a("el-radio-button",{attrs:{label:"all"}},[t._v(" "+t._s(t.$t("analysis.all"))+" ")]),a("el-radio-button",{attrs:{label:"qos0"}},[t._v("QoS 0")]),a("el-radio-button",{attrs:{label:"qos1"}},[t._v("QoS 1")]),a("el-radio-button",{attrs:{label:"qos2"}},[t._v("QoS 2")])],1)],1),a("el-row",{staticClass:"expand-body",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"message-card in"},[a("div",[t._v(" "+t._s(t.$t("analysis.messageIn"))+" "),a("span",{staticClass:"message-rate"},[t._v(" "+t._s(t.$t("analysis.rateItem",[t.getCurrentTopicData("in","rate")]))+" "+t._s(t.$t("analysis.rate"))+" ")])]),a("div",{staticClass:"message-card--body"},[t._v(" "+t._s(t.getCurrentTopicData("in","count"))+" ")])])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"message-card out"},[a("div",[t._v(" "+t._s(t.$t("analysis.messageOut"))+" "),a("span",{staticClass:"message-rate"},[t._v(" "+t._s(t.$t("analysis.rateItem",[t.getCurrentTopicData("out","rate")]))+" "+t._s(t.$t("analysis.rate"))+" ")])]),a("div",{staticClass:"message-card--body"},[t._v(" "+t._s(t.getCurrentTopicData("out","count"))+" ")])])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"message-card drop"},[a("div",[t._v(" "+t._s(t.$t("analysis.messageDrop"))+" "),a("span",{staticClass:"message-rate"},[t._v(" "+t._s(t.$t("analysis.rateItem",[t.getCurrentTopicDropRate(t.currentTopic["messages.dropped.rate"])]))+" "+t._s(t.$t("analysis.rate"))+" ")])]),a("div",{staticClass:"message-card--body"},[t._v(" "+t._s(t.currentTopic["messages.dropped.count"])+" ")])])])],1)]}}])}),a("el-table-column",{attrs:{label:t.$t("topics.topic"),prop:"topic"}}),a("el-table-column",{attrs:{label:t.$t("analysis.messageIn"),prop:"messageIn"}}),a("el-table-column",{attrs:{label:t.$t("analysis.messageOut"),prop:"messageOut"}}),a("el-table-column",{attrs:{label:t.$t("analysis.messageDrop"),prop:"messageDrop"}}),a("el-table-column",{attrs:{label:t.$t("oper.oper"),width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{plain:"",size:"mini",type:"success"},on:{click:function(a){return t.viewTopicDetails(e.row,e.$index)}}},[t._v(" "+t._s(t.$t("oper.view"))+" ")]),a("el-popover",{attrs:{placement:"right",trigger:"click",value:t.popoverVisible}},[a("p",[t._v(t._s(t.$t("oper.confirmDelete")))]),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{staticClass:"cache-btn",attrs:{size:"mini",type:"text"},on:{click:t.hidePopover}},[t._v(" "+t._s(t.$t("oper.cancel"))+" ")]),a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return t.deleteTopicMetric(e.row)}}},[t._v(" "+t._s(t.$t("oper.confirm"))+" ")])],1),a("el-button",{attrs:{slot:"reference",plain:"",size:"mini",type:"danger"},slot:"reference"},[t._v(" "+t._s(t.$t("oper.delete"))+" ")])],1)]}}])})],1),a("el-dialog",{staticClass:"create-subscribe",attrs:{"append-to-body":!0,title:t.$t("analysis.addTopic"),visible:t.addVisible,width:"400px"},on:{"update:visible":function(e){t.addVisible=e}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleAdd.apply(null,arguments)}}},[a("el-form",{ref:"record",staticClass:"el-form--public",attrs:{"label-position":"top",model:t.record,rules:t.rules,size:"small"}},[a("el-form-item",{attrs:{label:t.$t("subscriptions.topic"),prop:"topic"}},[a("el-input",{attrs:{placeholder:"Topic"},model:{value:t.record.topic,callback:function(e){t.$set(t.record,"topic",e)},expression:"record.topic"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:t.handleClose}},[t._v(" "+t._s(t.$t("oper.cancel"))+" ")]),a("el-button",{staticClass:"confirm-btn",attrs:{loading:t.$store.state.loading,type:"success"},on:{click:t.handleAdd}},[t._v(" "+t._s(t.$t("oper.add"))+" ")])],1)],1)],1)},s=[],o=(a("c4bc"),a("f1e1"),a("5ac5"),{name:"TopicMetrics",components:{},beforeRouteLeave:function(t,e,a){clearInterval(this.timer),a()},props:{},data:function(){return{expands:[],addVisible:!1,popoverVisible:!1,modClosed:!1,topicQos:"all",timer:0,topics:[],currentExpandRow:{},currentTopic:{},record:{},rules:{topic:{required:!0,message:this.$t("oper.pleaseEnter")}}}},watch:{currentExpandRow:{deep:!0,handler:function(){clearInterval(this.timer)}}},created:function(){this.loadData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{getRowKeys:function(t){return t.topic},loadData:function(){var t=this;this.$httpGet("/topic-metrics").then((function(e){var a=e.data;t.topics=a.map((function(t){var e=t.metrics;return{topic:t.topic,messageIn:e["messages.in.count"],messageOut:e["messages.out.count"],messageDrop:e["messages.dropped.count"]}})),t.modClosed=!1})).catch((function(e){t.$message.warning(t.$t("error.".concat(e.message))),t.modClosed=!0}))},hidePopover:function(){var t=this;this.popoverVisible=!0,setTimeout((function(){t.popoverVisible=!1}),0)},handleOperation:function(){this.addVisible=!0},handleModLoad:function(){var t=this;this.$httpPut("/modules/emqx_mod_topic_metrics/load").then((function(){t.$message.success(t.$t("oper.enableSuccess")),t.loadData(),t.modClosed=!1})).catch((function(e){t.$message.error(e||t.$t("error.networkError"))}))},deleteTopicMetric:function(t){var e=this;this.$httpDelete("/topic-metrics/".concat(encodeURIComponent(t.topic))).then((function(){e.loadData(),e.hidePopover()})).catch((function(t){e.$message.error(t||e.$t("error.networkError"))}))},handleAdd:function(){var t=this;this.$refs.record.validate((function(e){if(e){var a={};Object.assign(a,t.record),t.$httpPost("/topic-metrics",a).then((function(){t.handleClose(),t.loadData()})).catch((function(){}))}}))},handleClose:function(){this.addVisible=!1,this.$refs.record.resetFields()},viewTopicDetails:function(t,e){var a=document.querySelectorAll(".el-table__expand-icon")[e];a&&a.click()},loadDetail:function(){var t=this;this.$httpGet("/topic-metrics/".concat(encodeURIComponent(this.currentTopic.topic))).then((function(e){t.currentTopic=e.data,t.loadData()})).catch((function(){}))},setLoadDetailInterval:function(){var t=this;this.timer=setInterval((function(){t.$httpGet("/topic-metrics/".concat(encodeURIComponent(t.currentExpandRow.topic))).then((function(e){t.currentTopic=e.data})).catch((function(){}))}),1e4)},handleExpandChange:function(t,e){var a=this;if(!e.length)return this.currentExpandRow={},void clearInterval(this.timer);this.currentExpandRow=t,this.currentTopic={},this.$httpGet("/topic-metrics/".concat(encodeURIComponent(t.topic))).then((function(n){a.currentTopic=n.data,a.$refs.crudTable.store.states.expandRows=e.length?[t]:[],a.loadData(),a.setLoadDetailInterval()})).catch((function(){}))},getCurrentTopicData:function(t,e){var a={all:"messages",qos0:"messages.qos0",qos1:"messages.qos1",qos2:"messages.qos2"},n=a[this.topicQos],s=this.currentTopic["".concat(n,".").concat(t,".").concat(e)];return"rate"===e&&s?s.toFixed(2):s},getCurrentTopicDropRate:function(t){return t?t.toFixed(2):t}}}),i=o,r=(a("4d4a"),a("bdd7")),l=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=l.exports},d14d:function(t,e,a){},dfa1:function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},e374:function(t,e,a){"use strict";a("6323")},e76f:function(t,e,a){"use strict";a("dfa1")},e83b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clients-view"},[a("div",{staticClass:"page-title"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/clients"}}},[t._v(" "+t._s(t.$translateTitle("leftbar.clients"))+" ")]),a("el-breadcrumb-item",{staticClass:"breadcrumb-name"},[t._v(" "+t._s(t.$translateTitle("clients.view"))+" ")])],1)],1),a("div",{staticClass:"client-oper"},[a("span",{class:[t.basicRecord.connected?"connected":"disconnected","status-circle"]}),t.clientId.length>90?a("el-popover",{attrs:{content:t.clientId,placement:"top-start",trigger:"hover"}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t.interceptString(t.clientId,90)))])]):a("span",[t._v(t._s(t.clientId))]),a("el-button",{class:[t.basicRecord.connected?"connected":"disconnected","connect-btn"],attrs:{size:"mini"},on:{click:t.handleDisconnect}},[t._v(" "+t._s(t.basicRecord.connected?t.$translateTitle("clients.kickOut"):t.$translateTitle("websocket.cleanSession"))+" ")])],1),a("el-tabs",{staticClass:"normal-tabs",attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:t.$translateTitle("clients.basicInfo"),name:"basic"}},[a("vab-clients-basic",{attrs:{record:t.basicRecord}})],1),a("el-tab-pane",{attrs:{label:t.$translateTitle("clients.subsInfo"),name:"subscription"}},[a("vab-clients-subscriptions",{attrs:{"client-id":t.clientId,mountpoint:t.mountpoint,reload:t.loadSubscription,"table-data":t.subscriptionsData}})],1)],1)],1)},s=[],o=(a("f1e1"),a("ed08")),i={name:"ClientsView",data:function(){return{activeName:"basic",basicRecord:{},subscriptionsData:[],nodeName:"",mountpoint:""}},computed:{clientId:function(){return this.$route.params.id}},watch:{activeName:function(t){"basic"===t?this.loadBasicData():"subscription"===t&&this.loadSubscription()}},created:function(){this.loadBasicData()},methods:{interceptString:function(t,e){return Object(o["intercept"])(t,e)},handleCommand:function(t){this[t]()},handleDisconnect:function(){var t=this,e=this.basicRecord.connected?this.$translateTitle("oper.confirmKickOut"):this.$translateTitle("oper.confirmCleanSession");this.$confirm(e,this.$translateTitle("oper.warning"),{confirmButtonClass:"confirm-btn",cancelButtonClass:"cache-btn el-button--text",type:"warning"}).then((function(){t.$httpDelete("/clients/".concat(encodeURIComponent(t.clientId))).then((function(){t.$message.success(t.$translateTitle("oper.disconnectSuccess")),t.$set(t.basicRecord,"connected",!1),setTimeout((function(){t.$router.push({path:"/clients"})}),500)})).catch((function(e){t.$message.error(e||t.$translateTitle("error.networkError"))}))})).catch((function(){}))},loadBasicData:function(){var t=this;this.$httpGet("/clients/".concat(encodeURIComponent(this.clientId))).then((function(e){t.basicRecord=e.data[0],t.nodeName=t.basicRecord.node,e.data[0].mountpoint&&(t.mountpoint=e.data[0].mountpoint),t.loadSubscription()})).catch((function(){}))},loadSubscription:function(){var t=this;this.$httpGet("/nodes/".concat(this.nodeName,"/subscriptions/").concat(encodeURIComponent(this.clientId))).then((function(e){t.subscriptionsData=e.data})).catch((function(){}))}}},r=i,l=(a("ecf5"),a("bdd7")),c=Object(l["a"])(r,n,s,!1,null,null,null);e["default"]=c.exports},ecf5:function(t,e,a){"use strict";a("8d37")},eecf:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dgiot-mqtt-dashboard",{ref:"mqtt-dashboard"})},s=[],o=(a("3dec"),a("9c6a"),a("df9e")),i=a.n(o);console.error("mqtt",i.a);var r={name:"Mqtt",components:{"dgiot-mqtt-dashboard":i.a},mounted:function(){this.hiddenClass(["websocket-container-header","websocket-container-footer"]),this.$dgiotBus.$emit("MqttStatus",this.routerKey)},methods:{hiddenClass:function(t){var e=this.$refs["mqtt-dashboard"].$el;e&&t.forEach((function(t){e.getElementsByClassName("".concat(t))[0].style.display="none"}))}}},l=r,c=a("bdd7"),d=Object(c["a"])(l,n,s,!1,null,null,null);e["default"]=d.exports},fa5c:function(t,e){```
│   ├── views                                   # 页面组件目录结构图
│   │   ├── dashboard                           # 总控台
│   │   ├── DeviceCloud                         # 设备云
│   │   ├── MultiTenant                         # 多租户
│   │   ├── CloudOT                             # 云运维
│   │   ├── ClodTest                            # 云检测
│   │   ├── CloudSystem                         # 云系统
│   │   ├── CloudFunction                       # 云函数
│   │   ├── Tools                               # 工具集
│   │   ├── 403                                 # 403权限页面
│   │   ├── 404                                 # 404权限页面
│   │   
```}}]);