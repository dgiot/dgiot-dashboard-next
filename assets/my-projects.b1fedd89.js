var m=Object.defineProperty,j=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var l=(a,t,e)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,p=(a,t)=>{for(var e in t||(t={}))y.call(t,e)&&l(a,e,t[e]);if(c)for(var e of c(t))h.call(t,e)&&l(a,e,t[e]);return a},u=(a,t)=>j(a,x(t));import{r as o,j as n,aA as w,l as A}from"./vendor.5f1b4f7e.js";import C from"./project.02662e88.js";/* empty css               *//* empty css              */function G(){const[a,t]=o.exports.useState(new Array(6).fill({})),[e,i]=o.exports.useState(!0),{Row:f,Col:d}=w,g=async()=>{i(!0);const{data:r}=await A.get("/api/user/projectList").finally(()=>{i(!1)});t(r)};return o.exports.useEffect(()=>{g()},[]),n(f,{gutter:12,children:a.map((r,s)=>n(d,{span:8,style:s>a.length-4&&s<a.length?{marginTop:"16px"}:{},children:n(C,u(p({},r),{loading:e}))},s))})}export{G as default};
