var x=Object.defineProperty,w=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var j=(o,i,l)=>i in o?x(o,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[i]=l,B=(o,i)=>{for(var l in i||(i={}))V.call(i,l)&&j(o,l,i[l]);if(E)for(var l of E(i))S.call(i,l)&&j(o,l,i[l]);return o},D=(o,i)=>w(o,y(i));import{j as a,as as k,bW as M,au as O}from"./vendor.ed5b4e33.js";/* empty css               *//* empty css              *//* empty css               */import{u as T}from"./index.30d3e90c.js";const _={"en-US":{"menu.profile":"Profile","menu.profile.basic":"Basic Profile","basicProfile.title.form":"Parameter Approval Process Table","basicProfile.steps.commit":"Commit","basicProfile.steps.approval":"Approval","basicProfile.steps.finish":"Finish","basicProfile.title.currentVideo":"Current Video Parameters","basicProfile.title.currentAudio":"Current Audio Parameters","basicProfile.title.originVideo":"Origin Video Parameters","basicProfile.title.originAudio":"Origin Audio Parameters","basicProfile.label.video.mode":"Config Mode","basicProfile.label.video.acquisition.resolution":"Acquisition Resolution","basicProfile.label.video.acquisition.frameRate":"Acquisition Frame Rate","basicProfile.label.video.encoding.resolution":"Encoding Resolution","basicProfile.label.video.encoding.rate.min":"Encoding Min Rate","basicProfile.label.video.encoding.rate.max":"Encoding Max Rate","basicProfile.label.video.encoding.rate.default":"Encoding Default Rate","basicProfile.label.video.encoding.frameRate":"Encoding Frame Rate","basicProfile.label.video.encoding.profile":"Encoding Profile","basicProfile.label.audio.mode":"Config Mode","basicProfile.label.audio.acquisition.channels":"Acquisition Channels","basicProfile.label.audio.encoding.channels":"Encoding Channels","basicProfile.label.audio.encoding.rate":"Encoding Rate","basicProfile.label.audio.encoding.profile":"Encoding Profile","basicProfile.unit.audio.channels":"channels","basicProfile.goBack":"GoBack","basicProfile.cancel":"Cancel Process","basicProfile.adjustment.record":"Parameter adjustment record","basicProfile.adjustment.contentId":"Content number","basicProfile.adjustment.content":"Adjust content","basicProfile.adjustment.status":"Current state","basicProfile.adjustment.updatedTime":"Change the time","basicProfile.adjustment.operation":"Operation","basicProfile.adjustment.success":"passed","basicProfile.adjustment.waiting":"under review","basicProfile.adjustment.operation.view":"view"},"zh-CN":{"menu.profile":"\u8BE6\u60C5\u9875","menu.profile.basic":"\u57FA\u7840\u8BE6\u60C5\u9875","basicProfile.title.form":"\u53C2\u6570\u5BA1\u6279\u6D41\u7A0B\u8868","basicProfile.steps.commit":"\u63D0\u4EA4\u4FEE\u6539","basicProfile.steps.approval":"\u5BA1\u6279\u4E2D","basicProfile.steps.finish":"\u4FEE\u6539\u5B8C\u6210","basicProfile.title.currentVideo":"\u73B0\u89C6\u9891\u53C2\u6570","basicProfile.title.currentAudio":"\u73B0\u97F3\u9891\u53C2\u6570","basicProfile.title.originVideo":"\u539F\u89C6\u9891\u53C2\u6570","basicProfile.title.originAudio":"\u539F\u97F3\u9891\u53C2\u6570","basicProfile.label.video.mode":"\u914D\u7F6E\u6A21\u5F0F","basicProfile.label.video.acquisition.resolution":"\u91C7\u96C6\u5206\u8FA8\u7387","basicProfile.label.video.acquisition.frameRate":"\u91C7\u96C6\u5E27\u7387","basicProfile.label.video.encoding.resolution":"\u7F16\u7801\u5206\u8FA8\u7387","basicProfile.label.video.encoding.rate.min":"\u7F16\u7801\u7801\u7387\u6700\u5C0F\u503C","basicProfile.label.video.encoding.rate.max":"\u7F16\u7801\u7801\u7387\u6700\u5927\u503C","basicProfile.label.video.encoding.rate.default":"\u7F16\u7801\u7801\u7387\u9ED8\u8BA4\u503C","basicProfile.label.video.encoding.frameRate":"\u7F16\u7801\u5E27\u7387","basicProfile.label.video.encoding.profile":"\u7F16\u7801profile","basicProfile.label.audio.mode":"\u914D\u7F6E\u6A21\u5F0F","basicProfile.label.audio.acquisition.channels":"\u91C7\u96C6\u58F0\u9053\u6570","basicProfile.label.audio.encoding.channels":"\u7F16\u7801\u58F0\u9053\u6570","basicProfile.label.audio.encoding.rate":"\u7F16\u7801\u7801\u7387","basicProfile.label.audio.encoding.profile":"\u7F16\u7801 profile","basicProfile.unit.audio.channels":"\u58F0\u9053","basicProfile.goBack":"\u8FD4\u56DE","basicProfile.cancel":"\u53D6\u6D88\u6D41\u7A0B","basicProfile.adjustment.record":"\u53C2\u6570\u8C03\u6574\u8BB0\u5F55","basicProfile.adjustment.contentId":"\u5185\u5BB9\u7F16\u53F7","basicProfile.adjustment.content":"\u8C03\u6574\u5185\u5BB9","basicProfile.adjustment.status":"\u5F53\u524D\u72B6\u6001","basicProfile.adjustment.updatedTime":"\u4FEE\u6539\u65F6\u95F4","basicProfile.adjustment.operation":"\u64CD\u4F5C","basicProfile.adjustment.success":"\u5DF2\u901A\u8FC7","basicProfile.adjustment.waiting":"\u5BA1\u6838\u4E2D","basicProfile.adjustment.operation.view":"\u67E5\u770B"}};function I(o){var r,s,t,c,b,d,f,P,m,g,v,p,F,C;const i=T(_),{title:l,data:e,type:n,loading:R}=o,u=[];return u.push({title:i[`basicProfile.title.${n}Video`],data:[{label:i["basicProfile.label.video.mode"],value:((r=e==null?void 0:e.video)==null?void 0:r.mode)||"-"},{label:i["basicProfile.label.video.acquisition.resolution"],value:((s=e==null?void 0:e.video)==null?void 0:s.acquisition.resolution)||"-"},{label:i["basicProfile.label.video.acquisition.frameRate"],value:`${((t=e==null?void 0:e.video)==null?void 0:t.acquisition.frameRate)||"-"} fps`},{label:i["basicProfile.label.video.encoding.resolution"],value:((c=e==null?void 0:e.video)==null?void 0:c.encoding.resolution)||"-"},{label:i["basicProfile.label.video.encoding.rate.min"],value:`${((b=e==null?void 0:e.video)==null?void 0:b.encoding.rate.min)||"-"} bps`},{label:i["basicProfile.label.video.encoding.rate.max"],value:`${((d=e==null?void 0:e.video)==null?void 0:d.encoding.rate.max)||"-"} bps`},{label:i["basicProfile.label.video.encoding.rate.default"],value:`${((f=e==null?void 0:e.video)==null?void 0:f.encoding.rate.default)||"-"} bps`},{label:i["basicProfile.label.video.encoding.frameRate"],value:`${((P=e==null?void 0:e.video)==null?void 0:P.encoding.frameRate)||"-"} fpx`},{label:i["basicProfile.label.video.encoding.profile"],value:((m=e==null?void 0:e.video)==null?void 0:m.encoding.profile)||"-"}]}),u.push({title:i[`basicProfile.title.${n}Audio`],data:[{label:i["basicProfile.label.audio.mode"],value:((g=e==null?void 0:e.audio)==null?void 0:g.mode)||"-"},{label:i["basicProfile.label.audio.acquisition.channels"],value:`${((v=e==null?void 0:e.audio)==null?void 0:v.acquisition.channels)||"-"} ${i["basicProfile.unit.audio.channels"]}`},{label:i["basicProfile.label.audio.encoding.channels"],value:`${((p=e==null?void 0:e.audio)==null?void 0:p.encoding.channels)||"-"} ${i["basicProfile.unit.audio.channels"]}`},{label:i["basicProfile.label.audio.encoding.rate"],value:`${((F=e==null?void 0:e.audio)==null?void 0:F.encoding.rate)||"-"} kbps`},{label:i["basicProfile.label.audio.encoding.profile"],value:((C=e==null?void 0:e.audio)==null?void 0:C.encoding.profile)||"-"}]}),a(k,{children:a("div",{children:u.map(({title:q,data:h},A)=>a(M,{colon:":",labelStyle:{textAlign:"right",width:200,paddingRight:10},valueStyle:{width:400},title:q,data:R?h.map($=>D(B({},$),{value:a(O,{text:{rows:1,style:{width:"200px"}},animation:!0})})):h,style:A>0?{marginTop:"20px"}:{}},`${A}`))})})}var H=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{I as P,H as a,_ as i};