import{j as a,i as h,a as c,r as n,ci as f,cj as w,ck as y,E as k,aA as d,as as x,au as D,cf as C,T as _,l as A}from"./vendor.5f1b4f7e.js";/* empty css               *//* empty css               *//* empty css              */import{u as L}from"./index.de7ed678.js";import{l as S}from"./index.b0c339fc.js";import{C as N,L as T,a as O,T as j,A as E,b as M}from"./index.f3fa2245.js";import{C as F}from"./customer-tooltip.1f850489.js";import"./tslib.b4463e3e.js";const I="_card_p6fw4_1",G="_content_p6fw4_11",U="_skeleton_p6fw4_27";var l={card:I,content:G,"content-icon":"_content-icon_p6fw4_15",skeleton:U};const $=["l (90) 0:rgba(131, 100, 255, 0.5) 1:rgba(80, 52, 255, 0.001)","l (90) 0:rgba(100, 255, 236, 0.5) 1:rgba(52, 255, 243, 0.001)","l (90) 0:rgba(255, 211, 100, 0.5) 1:rgba(255, 235, 52, 0.001)","l (90) 0:rgba(100, 162, 255, 0.5) 1:rgba(52, 105, 255, 0.001)"],H=["#722ED1","#33D1C9","#F77234","#165DFF"];function P({data:e,loading:t}){return a(h,{loading:t,style:{width:"100%"},children:c(N,{height:352,data:e,padding:[10,0,30,30],autoFit:!0,scale:{time:"time"},className:"chart-wrapper",children:[a(T,{shape:"smooth",position:"time*count",color:["name",H]}),a(O,{position:"time*count",shape:"smooth",color:["name",$],tooltip:!1}),a(j,{crosshairs:{type:"x"},showCrosshairs:!0,shared:!0,showMarkers:!0,children:(r,u)=>a(F,{title:r,data:u.sort((s,i)=>i.value-s.value),formatter:s=>Number(s).toLocaleString()})}),a(E,{name:"count",label:{formatter:r=>`${Number(r)/100} k`}}),a(M,{visible:!1})]})})}const{Title:R}=_;var Y=()=>{const e=L(S),[t,r]=n.exports.useState([]),[u,s]=n.exports.useState([]),[i,m]=n.exports.useState(!1),g=async()=>{m(!0);const{data:o}=await A.get("/api/multi-dimension/overview").finally(()=>m(!1)),{overviewData:p,chartData:b}=o;s(b),r(p)};n.exports.useEffect(()=>{g()},[]);const v=n.exports.useMemo(()=>[{title:e["multiDAnalysis.dataOverview.contentProduction"],icon:a(f,{}),value:t[0],background:"rgb(var(--orange-2))",color:"rgb(var(--orange-6))"},{title:e["multiDAnalysis.dataOverview.contentClicks"],icon:a(w,{}),value:t[1],background:"rgb(var(--cyan-2))",color:"rgb(var(--cyan-6))"},{title:e["multiDAnalysis.dataOverview.contextExposure"],value:t[2],icon:a(y,{}),background:"rgb(var(--arcoblue-1))",color:"rgb(var(--arcoblue-6))"},{title:e["multiDAnalysis.dataOverview.activeUsers"],value:t[3],icon:a(k,{}),background:"rgb(var(--purple-1))",color:"rgb(var(--purple-6))"}],[e,t]);return c(d.Row,{justify:"space-between",children:[v.map((o,p)=>a(d.Col,{span:24/v.length,children:c(x,{className:l.card,title:null,children:[a(R,{heading:6,children:o.title}),c("div",{className:l.content,children:[a("div",{style:{backgroundColor:o.background,color:o.color},className:l["content-icon"],children:o.icon}),i?a(D,{animation:!0,text:{rows:1,className:l.skeleton},style:{width:"120px"}}):a(C,{value:o.value,groupSeparator:!0})]})]})},`${p}`)),a(d.Col,{span:24,children:a(P,{data:u,loading:i})})]})};export{Y as default};
