var k=Object.defineProperty,w=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(s,t,a)=>t in s?k(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,o=(s,t)=>{for(var a in t||(t={}))N.call(t,a)&&_(s,a,t[a]);if(y)for(var a of y(t))S.call(t,a)&&_(s,a,t[a]);return s},c=(s,t)=>w(s,L(t));import{r as m,j as e,aA as I,a as l,as as F,cf as b,au as A,m as R,cg as j,ch as G,i as P,l as $,T as q}from"./vendor.5f1b4f7e.js";/* empty css               *//* empty css              *//* empty css               */import{C as x,L as B,T as v,I as E}from"./index.f3fa2245.js";import{u as M}from"./index.de7ed678.js";import{l as z}from"./index.b0c339fc.js";import{I as H}from"./index.244c1bd4.js";import"./tslib.b4463e3e.js";const J="_card_19h7s_1",K="_statistic_19h7s_1",O="_title_19h7s_4",Q="_diff_19h7s_16",U="_tooltip_19h7s_24";var n={card:J,statistic:K,title:O,diff:Q,"diff-increment":"_diff-increment_19h7s_21",tooltip:U};const{Row:V,Col:W}=I,{Title:X,Text:Y}=q,C={pure:!0,autoFit:!0,height:80,padding:[0,10,0,10]};function T(s){const{items:t}=s;return e("div",{className:n.tooltip,children:t.map((a,i)=>e("div",{children:e(Y,{bold:!0,children:Number(a.data.y).toLocaleString()})},i))})}function Z(s){const{chartData:t}=s;return l(x,c(o({data:t},C),{children:[e(B,{position:"x*y",shape:["name",["smooth","dash"]],color:["name",["#165DFF","rgba(106,161,255,0.3)"]]}),e(v,{shared:!1,showCrosshairs:!0,children:(a,i)=>e(T,{items:i})})]}))}function tt(s){const{chartData:t}=s;return l(x,c(o({data:t},C),{children:[e(E,{position:"x*y",color:["x",a=>Number(a)%2===0?"#86DF6C":"#468DFF"]}),e(v,{shared:!1,children:(a,i)=>e(T,{items:i})}),e(H,{type:"active-region"})]}))}function et(s){const{chartType:t,title:a,count:i,increment:d,diff:h,chartData:p,loading:r}=s;return l(F,{className:n.card,children:[e("div",{className:n.statistic,children:e(b,{title:e(X,{heading:6,className:n.title,children:a}),loading:r,value:i,extra:e("div",{className:n["compare-yesterday"],children:r?e(A,{text:{rows:1},style:{width:"100px"},animation:!0}):l("span",{className:R(n.diff,{[n["diff-increment"]]:d}),children:[h,d?e(j,{}):e(G,{})]})}),groupSeparator:!0})}),e("div",{className:n.chart,children:l(P,{style:{width:"100%"},loading:r,children:[t==="interval"&&e(tt,{chartData:p}),t==="line"&&e(Z,{chartData:p})]})})]})}const g=[{key:"userRetentionTrend",type:"line"},{key:"userRetention",type:"interval"},{key:"contentConsumptionTrend",type:"line"},{key:"contentConsumption",type:"interval"}];function mt(){const s=M(z),[t,a]=m.exports.useState(!1),[i,d]=m.exports.useState(g.map(r=>c(o({},r),{chartType:r.type}))),h=async()=>{const r=g.map(async f=>{const{data:D}=await $.get(`/api/multi-dimension/card?type=${f.type}`).catch(()=>({data:{}}));return c(o({},D),{key:f.key,chartType:f.type})});a(!0);const u=await Promise.all(r).finally(()=>a(!1));d(u)};m.exports.useEffect(()=>{h()},[]);const p=m.exports.useMemo(()=>i.map(r=>c(o({},r),{title:s[`multiDAnalysis.cardList.${r.key}`]})),[s,i]);return e(V,{gutter:16,children:p.map((r,u)=>e(W,{span:6,children:e(et,c(o({},r),{loading:t}))},u))})}export{mt as default};
