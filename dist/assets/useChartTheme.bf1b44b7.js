var d=Object.defineProperty,i=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var h=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))g.call(e,r)&&h(t,r,e[r]);if(s)for(var r of s(e))f.call(e,r)&&h(t,r,e[r]);return t},n=(t,e)=>i(t,k(e));import{l as m}from"./index.f494b683.js";import{u as l,r as c}from"./vendor.ed5b4e33.js";const p=m.getTheme("dark");m.registerTheme("darkTheme",n(o({},p),{background:"transparent"}));function N(){const t=l(a=>a.theme),e=t==="dark"?"darkTheme":"light",[r,T]=c.exports.useState(m.getTheme(e));return c.exports.useEffect(()=>{const a=t==="dark"?"darkTheme":"light",u=m.getTheme(a);T(u)},[t]),r}export{N as u};
