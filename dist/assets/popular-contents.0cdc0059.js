import{r,l as w,j as t,T as c,a as l,aB as b,aC as f,as as v,ah as C,aD as S,aE as I}from"./vendor.ed5b4e33.js";/* empty css              *//* empty css              */import{u as T}from"./index.eae1e382.js";import{i as j}from"./index.3f3682c1.js";const D="_symbol_okjyb_1";var L={symbol:D};function E(){const a=T(j),[s,p]=r.exports.useState(0),[u,d]=r.exports.useState([]),[m,n]=r.exports.useState(!0),[o,y]=r.exports.useState(1),[g,h]=r.exports.useState(0),i=r.exports.useCallback(()=>{n(!0),w.get(`/api/workplace/popular-contents?page=${o}&pageSize=5&category=${s}`).then(e=>{d(e.data.list),h(e.data.total)}).finally(()=>{n(!1)})},[o,s]);r.exports.useEffect(()=>{i()},[o,i]);const x=[{title:a["workplace.column.rank"],dataIndex:"rank",width:65},{title:a["workplace.column.title"],dataIndex:"title",render:e=>t(c.Paragraph,{style:{margin:0},ellipsis:!0,children:e})},{title:a["workplace.column.pv"],dataIndex:"pv",width:100,render:e=>`${e/1e3}k`},{title:a["workplace.column.increase"],dataIndex:"increase",sorter:(e,k)=>e.increase-k.increase,width:110,render:e=>l("span",{children:[`${(e*100).toFixed(2)}%`,t("span",{className:L.symbol,children:e<0?t(b,{style:{color:"rgb(var(--green-6))"}}):t(f,{style:{color:"rgb(var(--red-6))"}})})]})}];return l(v,{children:[l("div",{style:{display:"flex",justifyContent:"space-between"},children:[t(c.Title,{heading:6,children:a["workplace.popularContents"]}),t(C,{children:a["workplace.seeMore"]})]}),t(S.Group,{type:"button",value:s,onChange:p,options:[{label:a["workplace.text"],value:0},{label:a["workplace.image"],value:1},{label:a["workplace.video"],value:2}],style:{marginBottom:16}}),t(I,{rowKey:"rank",columns:x,data:u,loading:m,tableLayoutFixed:!0,onChange:e=>{y(e.current)},pagination:{total:g,current:o,pageSize:5,simple:!0}})]})}export{E as default};
