import{j as e,f as o,aF as s,w as l,aG as m,aH as k,a as c,as as p,T as h,ah as y,D as v,M as f}from"./vendor.5f1b4f7e.js";/* empty css              */import{u as g}from"./index.de7ed678.js";import{i as _}from"./index.f174501a.js";const w="_shortcuts_f9b1x_1",M="_item_f9b1x_5",u="_icon_f9b1x_14",x="_title_f9b1x_20",C="_recent_f9b1x_41";var i={shortcuts:w,item:M,icon:u,title:x,recent:C};function j(){const t=g(_),r=[{title:t["workplace.contentMgmt"],key:"Content Management",icon:e(o,{})},{title:t["workplace.contentStatistic"],key:"Content Statistic",icon:e(s,{})},{title:t["workplace.advancedMgmt"],key:"Advanced Management",icon:e(l,{})},{title:t["workplace.onlinePromotion"],key:"Online Promotion",icon:e(m,{})},{title:t["workplace.marketing"],key:"Marketing",icon:e(k,{})}],d=[{title:t["workplace.contentStatistic"],key:"Content Statistic",icon:e(s,{})},{title:t["workplace.contentMgmt"],key:"Content Management",icon:e(o,{})},{title:t["workplace.advancedMgmt"],key:"Advanced Management",icon:e(l,{})}];function a(n){f.info({content:c("span",{children:["You clicked ",e("b",{children:n})]})})}return c(p,{children:[c("div",{style:{display:"flex",justifyContent:"space-between"},children:[e(h.Title,{heading:6,children:t["workplace.shortcuts"]}),e(y,{children:t["workplace.seeMore"]})]}),e("div",{className:i.shortcuts,children:r.map(n=>c("div",{className:i.item,onClick:()=>a(n.key),children:[e("div",{className:i.icon,children:n.icon}),e("div",{className:i.title,children:n.title})]},n.key))}),e(v,{}),e("div",{className:i.recent,children:t["workplace.recent"]}),e("div",{className:i.shortcuts,children:d.map(n=>c("div",{className:i.item,onClick:()=>a(n.key),children:[e("div",{className:i.icon,children:n.icon}),e("div",{className:i.title,children:n.title})]},n.key))})]})}export{j as default};
