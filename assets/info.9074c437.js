import{ae as l,r as p,a as o,j as a,au as m,O as n,P as f,ce as g,S,B as c,M as b}from"./vendor.5f1b4f7e.js";/* empty css               */import{u as v,G as A}from"./index.de7ed678.js";import{l as C}from"./index.69444b8c.js";function k({loading:i}){const e=v(C),[t]=l.useForm(),{lang:u}=p.exports.useContext(A),d=async()=>{try{await t.validate(),b.success("userSetting.saveSuccess")}catch{}},h=()=>{t.resetFields()},r=(s=1)=>a(m,{text:{rows:s,width:new Array(s).fill("100%")},animation:!0});return o(l,{style:{width:"500px",marginTop:"6px"},form:t,labelCol:{span:u==="en-US"?7:6},wrapperCol:{span:u==="en-US"?17:18},children:[a(l.Item,{label:e["userSetting.info.email"],field:"email",rules:[{type:"email",required:!0,message:e["userSetting.info.email.placeholder"]}],children:i?r():a(n,{placeholder:e["userSetting.info.email.placeholder"]})}),a(l.Item,{label:e["userSetting.info.nickName"],field:"nickName",rules:[{required:!0,message:e["userSetting.info.nickName.placeholder"]}],children:i?r():a(n,{placeholder:e["userSetting.info.nickName.placeholder"]})}),a(l.Item,{label:e["userSetting.info.area"],field:"rangeArea",rules:[{required:!0,message:e["userSetting.info.area.placeholder"]}],children:i?r():a(f,{options:["\u4E2D\u56FD"],placeholder:e["userSetting.info.area.placeholder"]})}),a(l.Item,{label:e["userSetting.info.location"],field:"location",initialValue:["BeiJing","BeiJing","HaiDian"],rules:[{required:!0}],children:i?r():a(g,{options:[{label:"\u5317\u4EAC\u5E02",value:"BeiJing",children:[{label:"\u5317\u4EAC\u5E02",value:"BeiJing",children:[{label:"\u6D77\u6DC0\u533A",value:"HaiDian"},{label:"\u671D\u9633\u533A",value:"ChaoYang"}]}]},{label:"\u4E0A\u6D77\u5E02",value:"ShangHai",children:[{label:"\u4E0A\u6D77\u5E02",value:"ShangHai",children:[{label:"\u9EC4\u6D66\u533A",value:"HuangPu"},{label:"\u9759\u5B89\u533A",value:"JingAn"}]}]}]})}),a(l.Item,{label:e["userSetting.info.address"],field:"address",children:i?r():a(n,{placeholder:e["userSetting.info.address.placeholder"]})}),a(l.Item,{label:e["userSetting.info.profile"],field:"profile",children:i?r(3):a(n.TextArea,{placeholder:e["userSetting.info.profile.placeholder"]})}),a(l.Item,{label:" ",children:o(S,{children:[a(c,{type:"primary",onClick:d,children:e["userSetting.save"]}),a(c,{onClick:h,children:e["userSetting.reset"]})]})})]})}export{k as default};
