import{r as a,j as c}from"./vendor.ed5b4e33.js";import{i as u}from"./index.ca185e3b.js";function y(t){let{columns:i}=t;const[l,f]=a.exports.useState(null);return a.exports.useEffect(()=>{let o=[];i&&i.forEach((n,r)=>{let s={name:t.coltitle[r],type:t.chartType,data:n,smooth:"true",lineStyle:{lineWidth:1}};o.push(s)});let e=l;e||(e=u(document.getElementById("line")),f(e)),e.setOption({title:{text:"\u8BBE\u5907\u5386\u53F2\u6570\u636E",left:"center",top:"2%",width:"12rem",height:"24rem",textStyle:{color:"#fff",fontSize:24,fontWeight:600}},tooltip:{trigger:"axis"},toolbox:{feature:{saveAsImage:{}}},legend:{type:"plain",top:"10%",left:"left",textStyle:{color:"#fff",fontStyle:"normal"},data:t.coltitle||[]},grid:{left:"4%",right:"6%",top:"20%",containLabel:!0,height:"65%"},xAxis:{name:"\u65F6\u95F4",type:"category",boundaryGap:!0,offset:1,nameTextStyle:{color:"#fff"},axisLine:{stroke:"#fff",lineWidth:1},axisLabel:{color:"#fff",fontSize:10,rotate:0},splitLine:{show:!1},data:t.rows||[]},yAxis:{type:"value",nameTextStyle:{color:"#fff"},axisLabel:{color:"#fff",fontSize:10,rotate:0},splitLine:{show:!0}},dataZoom:[{type:"slider",start:0,end:100},{type:"inside",start:0,end:100}],series:o||[]})}),c("div",{id:"line",style:{width:"100%",height:"50%"}})}export{y as default};
