import F from"./overview.78aa4f67.js";import{aj as u,$ as p,j as B}from"./vendor.5f1b4f7e.js";import{s}from"./index.de7ed678.js";/* empty css               *//* empty css              */import"./index.f174501a.js";import"./tslib.b4463e3e.js";s({mock:!1,setup:()=>{u.mock(new RegExp("/api/workplace/overview-content"),()=>{const t=new Date().getFullYear();return{allContents:"373.5w+",liveContents:"368",increaseComments:"8874",growthRate:"2.8%",chartData:(()=>new Array(12).fill(0).map((o,r)=>({date:`${t}-${r+1}`,count:u.Random.natural(2e4,75e3)})))()}});const e=()=>{const{list:t}=u.mock({"list|100":[{"rank|+1":1,title:()=>u.Random.pick(["\u7ECF\u6D4E\u65E5\u62A5\uFF1A\u8D22\u653F\u653F\u7B56\u8981\u7CBE\u51C6\u63D0\u5347\u6548\u80FD","\u201C\u53CC12\u201D\u9047\u51B7\u6D88\u8D39\u8005\u538C\u5026\u4E86\u7535\u5546\u5E73\u53F0\u7684\u4FC3\u9500\u201C\u5957\u8DEF\u201D","\u81F4\u656C\u575A\u5B88\u6218\u201C\u75AB\u201D\u4E00\u7EBF\u7684\u793E\u533A\u5DE5\u4F5C\u8005","\u666E\u9AD8\u8FD8\u662F\u804C\u9AD8\uFF1F\u5BB6\u957F\u4EEC\u9677\u5165\u9009\u6821\u96BE\u9898"]),pv:function(){return 5e5-3200*this.rank},increase:"@float(-1, 1)"}]});return t},c=e(),a=e(),i=e();u.mock(new RegExp("/api/workplace/popular-contents"),t=>{const{page:n=1,pageSize:o=5,category:r=0}=p.parseUrl(t.url).query;return{list:[c,a,i][Number(r)].slice((n-1)*o,n*o),total:100}}),u.mock(new RegExp("/api/workplace/content-percentage"),()=>[{type:"\u7EAF\u6587\u672C",count:148564,percent:.16},{type:"\u56FE\u6587\u7C7B",count:334271,percent:.36},{type:"\u89C6\u9891\u7C7B",count:445695,percent:.48}]),u.mock(new RegExp("/api/workplace/announcement"),()=>[{type:"activity",key:"1",content:"\u5185\u5BB9\u6700\u65B0\u4F18\u60E0\u6D3B\u52A8"},{type:"info",key:"2",content:"\u65B0\u589E\u5185\u5BB9\u5C1A\u672A\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"},{type:"notice",key:"3",content:"\u5F53\u524D\u4EA7\u54C1\u8BD5\u7528\u671F\u5373\u5C06\u7ED3\u675F\uFF0C\u5982\u9700\u7EED\u8D39\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"},{type:"notice",key:"4",content:"1 \u6708\u65B0\u7CFB\u7EDF\u5347\u7EA7\u8BA1\u5212\u901A\u77E5"},{type:"info",key:"5",content:"\u65B0\u589E\u5185\u5BB9\u5DF2\u7ECF\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"}])}});function g(){return B(F,{})}export{g as default};
