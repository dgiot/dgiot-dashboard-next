import{r as e,a as f,as as m,j as o,T as g,i as h,l as x}from"./vendor.ed5b4e33.js";/* empty css              */import{D as y}from"./index.f494b683.js";import{u as F}from"./index.eae1e382.js";import{i as C}from"./index.f174501a.js";import"./tslib.70770226.js";function w(){const a=F(C),[s,i]=e.exports.useState([]),[n,r]=e.exports.useState(!0),l=()=>{r(!0),x.get("/api/workplace/content-percentage").then(t=>{i(t.data)}).finally(()=>{r(!1)})};return e.exports.useEffect(()=>{l()},[]),f(m,{children:[o(g.Title,{heading:6,children:a["workplace.contentPercentage"]}),o(h,{loading:n,style:{display:"block"},children:o(y,{autoFit:!0,height:340,data:s,radius:.7,innerRadius:.65,angleField:"count",colorField:"type",color:["#21CCFF","#313CA9","#249EFF"],interactions:[{type:"element-single-selected"}],tooltip:{showMarkers:!1},label:{visible:!0,type:"spider",formatter:t=>`${(t.percent*100).toFixed(0)}%`,style:{fill:"#86909C",fontSize:14}},legend:{position:"bottom"},statistic:{title:{style:{fontSize:"14px",lineHeight:2,color:"rgb(--var(color-text-1))"},formatter:()=>"\u5185\u5BB9\u91CF"},content:{style:{fontSize:"16px",color:"rgb(--var(color-text-1))"},formatter:(t,c)=>{const p=c.reduce((u,d)=>u+d.count,0);return Number(p).toLocaleString()}}}})})]})}export{w as default};
