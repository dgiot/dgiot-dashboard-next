import{R as e}from"../react/react.e5edc743.js";import{a as t}from"../classnames/classnames.6cb9bdf2.js";import{S as s,T as a,ad as m,ae as i}from"../@arco-design/@arco-design.eb9ea931.js";var c={"message-item":"_message-item_wn64e_1","message-item-footer":"_message-item-footer_wn64e_7","message-item-actions":"_message-item-actions_wn64e_12","message-item-actions-item":"_message-item-actions-item_wn64e_16","message-item-collected":"_message-item-collected_wn64e_34","message-item-actions-collect":"_message-item-actions-collect_wn64e_34"};function n(n){const{data:l={}}=n,o=t(c["message-item"],{[c["message-item-collected"]]:l.isCollect});return e.createElement("div",{className:o},e.createElement(s,{size:4,direction:"vertical",style:{width:"100%"}},e.createElement(a.Text,{type:"warning"},l.username),e.createElement(a.Text,null,l.content),e.createElement("div",{className:c["message-item-footer"]},e.createElement("div",{className:c["message-item-time"]},e.createElement(a.Text,{type:"secondary"},l.time)),e.createElement("div",{className:c["message-item-actions"]},e.createElement("div",{className:c["message-item-actions-item"]},e.createElement(m,null)),e.createElement("div",{className:t(c["message-item-actions-item"],c["message-item-actions-collect"])},e.createElement(i,null))))))}var l=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"}));export{n as M,l as i,c as s};
