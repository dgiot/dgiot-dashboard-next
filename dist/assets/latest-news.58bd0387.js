import{r as e,j as t,L as s,au as c,A as d,T as u,l as x}from"./vendor.ed5b4e33.js";/* empty css               */import{s as m}from"./index.module.a5c0f729.js";const{Paragraph:f}=u;function w(){const[r,i]=e.exports.useState(new Array(4).fill({})),[o,n]=e.exports.useState(!0),l=async()=>{const{data:a}=await x.get("/api/user/latestNews").finally(()=>n(!1));i(a)};return e.exports.useEffect(()=>{l()},[]),t(s,{dataSource:r,render:(a,p)=>t(s.Item,{style:{padding:"24px 20px 24px 0px"},children:o?t(c,{animation:!0,text:{width:["60%","90%"],rows:2},image:{shape:"circle"}}):t(s.Item.Meta,{className:m["list-meta-ellipsis"],avatar:t(d,{size:48,children:t("img",{src:a.avatar})}),title:a.title,description:t(f,{ellipsis:{rows:1},type:"secondary",style:{fontSize:"12px",margin:0},children:a.description})})},p)})}export{w as default};
