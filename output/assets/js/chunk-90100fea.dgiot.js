/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 11:10:41
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90100fea"],{"0537":function(n,e){(function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=function(n,e){n.focus(),n.undoManager.transact((function(){n.setContent(e)})),n.selection.setCursorLocation(),n.nodeChanged()},t=function(n){return n.getContent({source_view:!0})},r=function(n){var r=t(n);n.windowManager.open({title:"Source Code",size:"large",body:{type:"panel",items:[{type:"textarea",name:"code"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{code:r},onSubmit:function(t){e(n,t.getData().code),t.close()}})},o=function(n){n.addCommand("mceCodeEditor",(function(){r(n)}))},i=function(n){var e=function(){return n.execCommand("mceCodeEditor")};n.ui.registry.addButton("code",{icon:"sourcecode",tooltip:"Source code",onAction:e}),n.ui.registry.addMenuItem("code",{icon:"sourcecode",text:"Source code",onAction:e})};function a(){n.add("code",(function(n){return o(n),i(n),{}}))}a()})()},3979:function(n,e,t){t("8d66")},"4a84":function(n,e,t){t("b9b0")},"4b10":function(n,e,t){t("c34e")},"51cc":function(n,e,t){t("0537")},"8d66":function(n,e){(function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=function(n,e){return n.fire("insertCustomChar",{chr:e})},t=function(n,t){var r=e(n,t).chr;n.execCommand("mceInsertContent",!1,r)},r=function(n){var e=typeof n;return null===n?"null":"object"===e&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===e&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":e},o=function(n){return function(e){return r(e)===n}},i=function(n){return function(e){return n===e}},a=o("array"),u=i(null),c=function(){},l=function(n){return function(){return n}},s=function(n){return n},f=l(!1),d=l(!0),m=function(){return g},g=function(){var n=function(n){return n()},e=s,t={fold:function(n,e){return n()},isSome:f,isNone:d,getOr:e,getOrThunk:n,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(void 0),or:e,orThunk:n,map:m,each:c,bind:m,exists:f,forall:d,filter:function(){return m()},toArray:function(){return[]},toString:l("none()")};return t}(),h=function(n){var e=l(n),t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},isSome:d,isNone:f,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return h(e(n))},each:function(e){e(n)},bind:r,exists:r,forall:r,filter:function(e){return e(n)?o:g},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},p=function(n){return null===n||void 0===n?g:h(n)},y={some:h,none:m,from:p},v=Array.prototype.push,b=function(n,e){for(var t=n.length,r=new Array(t),o=0;o<t;o++){var i=n[o];r[o]=e(i,o)}return r},w=function(n,e){for(var t=0,r=n.length;t<r;t++){var o=n[t];e(o,t)}},C=function(n,e,t){for(var r=0,o=n.length;r<o;r++){var i=n[r];if(e(i,r))return y.some(i);if(t(i,r))break}return y.none()},k=function(n,e){return C(n,e,f)},A=function(n){for(var e=[],t=0,r=n.length;t<r;++t){if(!a(n[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+n);v.apply(e,n[t])}return e},O=function(n,e){return A(b(n,e))},x=tinymce.util.Tools.resolve("tinymce.util.Tools"),S=function(n){return n.getParam("charmap")},T=function(n){return n.getParam("charmap_append")},L=x.isArray,P="User Defined",N=function(){return[{name:"Currency",characters:[[36,"dollar sign"],[162,"cent sign"],[8364,"euro sign"],[163,"pound sign"],[165,"yen sign"],[164,"currency sign"],[8352,"euro-currency sign"],[8353,"colon sign"],[8354,"cruzeiro sign"],[8355,"french franc sign"],[8356,"lira sign"],[8357,"mill sign"],[8358,"naira sign"],[8359,"peseta sign"],[8360,"rupee sign"],[8361,"won sign"],[8362,"new sheqel sign"],[8363,"dong sign"],[8365,"kip sign"],[8366,"tugrik sign"],[8367,"drachma sign"],[8368,"german penny symbol"],[8369,"peso sign"],[8370,"guarani sign"],[8371,"austral sign"],[8372,"hryvnia sign"],[8373,"cedi sign"],[8374,"livre tournois sign"],[8375,"spesmilo sign"],[8376,"tenge sign"],[8377,"indian rupee sign"],[8378,"turkish lira sign"],[8379,"nordic mark sign"],[8380,"manat sign"],[8381,"ruble sign"],[20870,"yen character"],[20803,"yuan character"],[22291,"yuan character, in hong kong and taiwan"],[22278,"yen/yuan character variant one"]]},{name:"Text",characters:[[169,"copyright sign"],[174,"registered sign"],[8482,"trade mark sign"],[8240,"per mille sign"],[181,"micro sign"],[183,"middle dot"],[8226,"bullet"],[8230,"three dot leader"],[8242,"minutes / feet"],[8243,"seconds / inches"],[167,"section sign"],[182,"paragraph sign"],[223,"sharp s / ess-zed"]]},{name:"Quotations",characters:[[8249,"single left-pointing angle quotation mark"],[8250,"single right-pointing angle quotation mark"],[171,"left pointing guillemet"],[187,"right pointing guillemet"],[8216,"left single quotation mark"],[8217,"right single quotation mark"],[8220,"left double quotation mark"],[8221,"right double quotation mark"],[8218,"single low-9 quotation mark"],[8222,"double low-9 quotation mark"],[60,"less-than sign"],[62,"greater-than sign"],[8804,"less-than or equal to"],[8805,"greater-than or equal to"],[8211,"en dash"],[8212,"em dash"],[175,"macron"],[8254,"overline"],[164,"currency sign"],[166,"broken bar"],[168,"diaeresis"],[161,"inverted exclamation mark"],[191,"turned question mark"],[710,"circumflex accent"],[732,"small tilde"],[176,"degree sign"],[8722,"minus sign"],[177,"plus-minus sign"],[247,"division sign"],[8260,"fraction slash"],[215,"multiplication sign"],[185,"superscript one"],[178,"superscript two"],[179,"superscript three"],[188,"fraction one quarter"],[189,"fraction one half"],[190,"fraction three quarters"]]},{name:"Mathematical",characters:[[402,"function / florin"],[8747,"integral"],[8721,"n-ary sumation"],[8734,"infinity"],[8730,"square root"],[8764,"similar to"],[8773,"approximately equal to"],[8776,"almost equal to"],[8800,"not equal to"],[8801,"identical to"],[8712,"element of"],[8713,"not an element of"],[8715,"contains as member"],[8719,"n-ary product"],[8743,"logical and"],[8744,"logical or"],[172,"not sign"],[8745,"intersection"],[8746,"union"],[8706,"partial differential"],[8704,"for all"],[8707,"there exists"],[8709,"diameter"],[8711,"backward difference"],[8727,"asterisk operator"],[8733,"proportional to"],[8736,"angle"]]},{name:"Extended Latin",characters:[[192,"A - grave"],[193,"A - acute"],[194,"A - circumflex"],[195,"A - tilde"],[196,"A - diaeresis"],[197,"A - ring above"],[256,"A - macron"],[198,"ligature AE"],[199,"C - cedilla"],[200,"E - grave"],[201,"E - acute"],[202,"E - circumflex"],[203,"E - diaeresis"],[274,"E - macron"],[204,"I - grave"],[205,"I - acute"],[206,"I - circumflex"],[207,"I - diaeresis"],[298,"I - macron"],[208,"ETH"],[209,"N - tilde"],[210,"O - grave"],[211,"O - acute"],[212,"O - circumflex"],[213,"O - tilde"],[214,"O - diaeresis"],[216,"O - slash"],[332,"O - macron"],[338,"ligature OE"],[352,"S - caron"],[217,"U - grave"],[218,"U - acute"],[219,"U - circumflex"],[220,"U - diaeresis"],[362,"U - macron"],[221,"Y - acute"],[376,"Y - diaeresis"],[562,"Y - macron"],[222,"THORN"],[224,"a - grave"],[225,"a - acute"],[226,"a - circumflex"],[227,"a - tilde"],[228,"a - diaeresis"],[229,"a - ring above"],[257,"a - macron"],[230,"ligature ae"],[231,"c - cedilla"],[232,"e - grave"],[233,"e - acute"],[234,"e - circumflex"],[235,"e - diaeresis"],[275,"e - macron"],[236,"i - grave"],[237,"i - acute"],[238,"i - circumflex"],[239,"i - diaeresis"],[299,"i - macron"],[240,"eth"],[241,"n - tilde"],[242,"o - grave"],[243,"o - acute"],[244,"o - circumflex"],[245,"o - tilde"],[246,"o - diaeresis"],[248,"o slash"],[333,"o macron"],[339,"ligature oe"],[353,"s - caron"],[249,"u - grave"],[250,"u - acute"],[251,"u - circumflex"],[252,"u - diaeresis"],[363,"u - macron"],[253,"y - acute"],[254,"thorn"],[255,"y - diaeresis"],[563,"y - macron"],[913,"Alpha"],[914,"Beta"],[915,"Gamma"],[916,"Delta"],[917,"Epsilon"],[918,"Zeta"],[919,"Eta"],[920,"Theta"],[921,"Iota"],[922,"Kappa"],[923,"Lambda"],[924,"Mu"],[925,"Nu"],[926,"Xi"],[927,"Omicron"],[928,"Pi"],[929,"Rho"],[931,"Sigma"],[932,"Tau"],[933,"Upsilon"],[934,"Phi"],[935,"Chi"],[936,"Psi"],[937,"Omega"],[945,"alpha"],[946,"beta"],[947,"gamma"],[948,"delta"],[949,"epsilon"],[950,"zeta"],[951,"eta"],[952,"theta"],[953,"iota"],[954,"kappa"],[955,"lambda"],[956,"mu"],[957,"nu"],[958,"xi"],[959,"omicron"],[960,"pi"],[961,"rho"],[962,"final sigma"],[963,"sigma"],[964,"tau"],[965,"upsilon"],[966,"phi"],[967,"chi"],[968,"psi"],[969,"omega"]]},{name:"Symbols",characters:[[8501,"alef symbol"],[982,"pi symbol"],[8476,"real part symbol"],[978,"upsilon - hook symbol"],[8472,"Weierstrass p"],[8465,"imaginary part"]]},{name:"Arrows",characters:[[8592,"leftwards arrow"],[8593,"upwards arrow"],[8594,"rightwards arrow"],[8595,"downwards arrow"],[8596,"left right arrow"],[8629,"carriage return"],[8656,"leftwards double arrow"],[8657,"upwards double arrow"],[8658,"rightwards double arrow"],[8659,"downwards double arrow"],[8660,"left right double arrow"],[8756,"therefore"],[8834,"subset of"],[8835,"superset of"],[8836,"not a subset of"],[8838,"subset of or equal to"],[8839,"superset of or equal to"],[8853,"circled plus"],[8855,"circled times"],[8869,"perpendicular"],[8901,"dot operator"],[8968,"left ceiling"],[8969,"right ceiling"],[8970,"left floor"],[8971,"right floor"],[9001,"left-pointing angle bracket"],[9002,"right-pointing angle bracket"],[9674,"lozenge"],[9824,"black spade suit"],[9827,"black club suit"],[9829,"black heart suit"],[9830,"black diamond suit"],[8194,"en space"],[8195,"em space"],[8201,"thin space"],[8204,"zero width non-joiner"],[8205,"zero width joiner"],[8206,"left-to-right mark"],[8207,"right-to-left mark"]]}]},E=function(n){return x.grep(n,(function(n){return L(n)&&2===n.length}))},U=function(n){return L(n)?E(n):"function"===typeof n?n():[]},q=function(n,e){var t=S(n);t&&(e=[{name:P,characters:U(t)}]);var r=T(n);if(r){var o=x.grep(e,(function(n){return n.name===P}));return o.length?(o[0].characters=[].concat(o[0].characters).concat(U(r)),e):e.concat({name:P,characters:U(r)})}return e},I=function(n){var e=q(n,N());return e.length>1?[{name:"All",characters:O(e,(function(n){return n.characters}))}].concat(e):e},D=function(n){var e=function(){return I(n)},r=function(e){t(n,e)};return{getCharMap:e,insertChar:r}},M=function(n){var e=n,t=function(){return e},r=function(n){e=n};return{get:t,set:r}},z=function(n,e){var t=null,r=function(){u(t)||(clearTimeout(t),t=null)},o=function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];r(),t=setTimeout((function(){t=null,n.apply(null,o)}),e)};return{cancel:r,throttle:o}},_=String.fromCodePoint,B=function(n,e){return-1!==n.indexOf(e)},R=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(_)return _.apply(void 0,n);for(var t=[],r=0,o="",i=0,a=n.length;i!==a;++i){var u=+n[i];if(!(u<1114111&&u>>>0===u))throw RangeError("Invalid code point: "+u);u<=65535?r=t.push(u):(u-=65536,r=t.push(55296+(u>>10),u%1024+56320)),r>=16383&&(o+=String.fromCharCode.apply(null,t),t.length=0)}return o+String.fromCharCode.apply(null,t)},$=function(n,e,t){return!!B(R(n).toLowerCase(),t)||(B(e.toLowerCase(),t)||B(e.toLowerCase().replace(/\s+/g,""),t))},Z=function(n,e){var t=[],r=e.toLowerCase();return w(n.characters,(function(n){$(n[0],n[1],r)&&t.push(n)})),b(t,(function(n){return{text:n[1],value:R(n[0]),icon:R(n[0])}}))},j="pattern",H=function(n,e){var r=function(){return[{label:"Search",type:"input",name:j},{type:"collection",name:"results"}]},o=function(){return b(e,(function(n){return{title:n.name,name:n.name,items:r()}}))},i=function(){return{type:"panel",items:r()}},a=function(){return{type:"tabpanel",tabs:o()}},u=1===e.length?M(P):M("All"),c=function(n,t){k(e,(function(n){return n.name===u.get()})).each((function(e){var r=Z(e,t);n.setData({results:r})}))},l=40,s=z((function(n){var e=n.getData().pattern;c(n,e)}),l),f=1===e.length?i():a(),d={pattern:"",results:Z(e[0],"")},m={title:"Special Character",size:"normal",body:f,buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:d,onAction:function(e,r){"results"===r.name&&(t(n,r.value),e.close())},onTabChange:function(n,e){u.set(e.newTabName),s.throttle(n)},onChange:function(n,e){e.name===j&&s.throttle(n)}},g=n.windowManager.open(m);g.focus(j)},V=function(n,e){n.addCommand("mceShowCharmap",(function(){H(n,e)}))},Y=tinymce.util.Tools.resolve("tinymce.util.Promise"),F=function(n,e){n.ui.registry.addAutocompleter("charmap",{ch:":",columns:"auto",minChars:2,fetch:function(n,t){return new Y((function(t,r){t(Z(e,n))}))},onAction:function(e,t,r){n.selection.setRng(t),n.insertContent(r),e.hide()}})},J=function(n){n.ui.registry.addButton("charmap",{icon:"insert-character",tooltip:"Special character",onAction:function(){return n.execCommand("mceShowCharmap")}}),n.ui.registry.addMenuItem("charmap",{icon:"insert-character",text:"Special character...",onAction:function(){return n.execCommand("mceShowCharmap")}})};function W(){n.add("charmap",(function(n){var e=I(n);return V(n,e),J(n),F(n,e[0]),D(n)}))}W()})()},b9b0:function(n,e){(function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=function(n,e,t){return""===e||n.length>=e.length&&n.substr(t,t+e.length)===e},t=function(n,e){return-1!==n.indexOf(e)},r=function(n,t){return e(n,t,0)},o=tinymce.util.Tools.resolve("tinymce.Env"),i=function(){return/(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-+~=.,%()\/\w]*[-+~=%()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g},a=new RegExp("^"+i().source+"$","i"),u=function(n){return n.getParam("autolink_pattern",a)},c=function(n){return n.getParam("default_link_target",!1)},l=function(n){return n.getParam("link_default_protocol","http","string")},s=function(n){return/^[(\[{ \u00a0]$/.test(n)},f=function(n){return 3===n.nodeType},d=function(n){return 1===n.nodeType},m=function(n){return C(n,-1)},g=function(n){return C(n,0)},h=function(n){return C(n,-1)},p=function(n,e){if(e<0&&(e=0),f(n)){var t=n.data.length;e>t&&(e=t)}return e},y=function(n,e,t){!d(e)||e.hasChildNodes()?n.setStart(e,p(e,t)):n.setStartBefore(e)},v=function(n,e,t){!d(e)||e.hasChildNodes()?n.setEnd(e,p(e,t)):n.setEndAfter(e)},b=function(n){return/^([A-Za-z][A-Za-z\d.+-]*:\/\/)|mailto:/.test(n)},w=function(n){return/[?!,.;:]/.test(n)},C=function(n,e){var o,i,a,d,m,g,h,p=u(n),C=c(n);if(null===n.dom.getParent(n.selection.getNode(),"a[href]")){var k=n.selection.getRng().cloneRange();if(k.startOffset<5){if(m=k.endContainer.previousSibling,!m){if(!k.endContainer.firstChild||!k.endContainer.firstChild.nextSibling)return;m=k.endContainer.firstChild.nextSibling}if(g=m.length,y(k,m,g),v(k,m,g),k.endOffset<5)return;o=k.endOffset,i=m}else{if(i=k.endContainer,!f(i)&&i.firstChild){while(!f(i)&&i.firstChild)i=i.firstChild;f(i)&&(y(k,i,0),v(k,i,i.nodeValue.length))}o=1===k.endOffset?2:k.endOffset-1-e}var A=o;do{y(k,i,o>=2?o-2:0),v(k,i,o>=1?o-1:0),o-=1,h=k.toString()}while(!s(h)&&o-2>=0);s(k.toString())?(y(k,i,o),v(k,i,A),o+=1):0===k.startOffset?(y(k,i,0),v(k,i,A)):(y(k,i,o),v(k,i,A)),d=k.toString(),w(d.charAt(d.length-1))&&v(k,i,A-1),d=k.toString().trim();var O=d.match(p),x=l(n);if(O){var S=O[0];r(S,"www.")?S=x+"://"+S:t(S,"@")&&!b(S)&&(S="mailto:"+S),a=n.selection.getBookmark(),n.selection.setRng(k),n.execCommand("createlink",!1,S),!1!==C&&n.dom.setAttrib(n.selection.getNode(),"target",C),n.selection.moveToBookmark(a),n.nodeChanged()}}},k=function(n){var e;n.on("keydown",(function(e){if(13===e.keyCode)return h(n)})),o.browser.isIE()?n.on("focus",(function(){if(!e){e=!0;try{n.execCommand("AutoUrlDetect",!1,!0)}catch(t){}}})):(n.on("keypress",(function(e){if(41===e.keyCode||93===e.keyCode||125===e.keyCode)return m(n)})),n.on("keyup",(function(e){if(32===e.keyCode)return g(n)})))};function A(){n.add("autolink",(function(n){k(n)}))}A()})()},baf7:function(n,e){(function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=function(n,e,t){var r="UL"===e?"InsertUnorderedList":"InsertOrderedList";n.execCommand(r,!1,!1===t?null:{"list-style-type":t})},t=function(n){n.addCommand("ApplyUnorderedListStyle",(function(t,r){e(n,"UL",r["list-style-type"])})),n.addCommand("ApplyOrderedListStyle",(function(t,r){e(n,"OL",r["list-style-type"])}))},r=tinymce.util.Tools.resolve("tinymce.util.Tools"),o=function(n){var e=n.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman");return e?e.split(/[ ,]/):[]},i=function(n){var e=n.getParam("advlist_bullet_styles","default,circle,square");return e?e.split(/[ ,]/):[]},a=function(){},u=function(n){return function(){return n}},c=function(n){return n},l=u(!1),s=u(!0),f=function(){return d},d=function(){var n=function(n){return n()},e=c,t={fold:function(n,e){return n()},isSome:l,isNone:s,getOr:e,getOrThunk:n,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(void 0),or:e,orThunk:n,map:f,each:a,bind:f,exists:l,forall:s,filter:function(){return f()},toArray:function(){return[]},toString:u("none()")};return t}(),m=function(n){var e=u(n),t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},isSome:s,isNone:l,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return m(e(n))},each:function(e){e(n)},bind:r,exists:r,forall:r,filter:function(e){return e(n)?o:d},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},g=function(n){return null===n||void 0===n?d:m(n)},h={some:m,none:f,from:g},p=function(n,e){return n.$.contains(n.getBody(),e)},y=function(n){return n&&/^(TH|TD)$/.test(n.nodeName)},v=function(n){return function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)&&p(n,e)}},b=function(n){var e=n.dom.getParent(n.selection.getNode(),"ol,ul"),t=n.dom.getStyle(e,"listStyleType");return h.from(t)},w=function(n,e){for(var t=0;t<n.length;t++){var r=n[t];if(e(r))return t}return-1},C=function(n){return n.replace(/\-/g," ").replace(/\b\w/g,(function(n){return n.toUpperCase()}))},k=function(n,e,t){var o=w(e.parents,y),i=-1!==o?e.parents.slice(0,o):e.parents,a=r.grep(i,v(n));return a.length>0&&a[0].nodeName===t},A=function(n,e){return function(t){var r=function(r){t.setActive(k(n,r,e))};return n.on("NodeChange",r),function(){return n.off("NodeChange",r)}}},O=function(n,t,o,i,a,u){n.ui.registry.addSplitButton(t,{tooltip:o,icon:"OL"===a?"ordered-list":"unordered-list",presets:"listpreview",columns:3,fetch:function(n){var e=r.map(u,(function(n){var e="OL"===a?"num":"bull",t="disc"===n||"decimal"===n?"default":n,r="default"===n?"":n,o=C(n);return{type:"choiceitem",value:r,icon:"list-"+e+"-"+t,text:o}}));n(e)},onAction:function(){return n.execCommand(i)},onItemAction:function(t,r){e(n,a,r)},select:function(e){var t=b(n);return t.map((function(n){return e===n})).getOr(!1)},onSetup:A(n,a)})},x=function(n,e,t,r,o,i){n.ui.registry.addToggleButton(e,{active:!1,tooltip:t,icon:"OL"===o?"ordered-list":"unordered-list",onSetup:A(n,o),onAction:function(){return n.execCommand(r)}})},S=function(n,e,t,r,o,i){i.length>1?O(n,e,t,r,o,i):x(n,e,t,r,o)},T=function(n){S(n,"numlist","Numbered list","InsertOrderedList","OL",o(n)),S(n,"bullist","Bullet list","InsertUnorderedList","UL",i(n))};function L(){n.add("advlist",(function(n){n.hasPlugin("lists")?(T(n),t(n)):console.error("Please use the Lists plugin together with the Advanced List plugin.")}))}L()})()},c34e:function(n,e){(function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),t=tinymce.util.Tools.resolve("tinymce.util.Tools"),r=function(n){return n.getParam("allow_html_in_named_anchor",!1,"boolean")},o="a:not([href])",i=function(n){return!n},a=function(n){var e=n.getAttribute("id")||n.getAttribute("name");return e||""},u=function(n){return n&&"a"===n.nodeName.toLowerCase()},c=function(n){return u(n)&&!n.getAttribute("href")&&""!==a(n)},l=function(n){return c(n)&&!n.firstChild},s=function(n){var r=n.dom;e(r).walk(n.selection.getRng(),(function(n){t.each(n,(function(n){l(n)&&r.remove(n,!1)}))}))},f=function(n){return/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(n)},d=function(n){return n.dom.getParent(n.selection.getStart(),o)},m=function(n){var e=d(n);return e?a(e):""},g=function(n,e){n.undoManager.transact((function(){r(n)||n.selection.collapse(!0),n.selection.isCollapsed()?n.insertContent(n.dom.createHTML("a",{id:e})):(s(n),n.formatter.remove("namedAnchor",null,null,!0),n.formatter.apply("namedAnchor",{value:e}),n.addVisual())}))},h=function(n,e,t){t.removeAttribute("name"),t.id=e,n.addVisual(),n.undoManager.add()},p=function(n,e){var t=d(n);t?h(n,e,t):g(n,e),n.focus()},y=function(n,e){return f(e)?(p(n,e),!0):(n.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),!1)},v=function(n){var e=m(n);n.windowManager.open({title:"Anchor",size:"normal",body:{type:"panel",items:[{name:"id",type:"input",label:"ID",placeholder:"example"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{id:e},onSubmit:function(e){y(n,e.getData().id)&&e.close()}})},b=function(n){n.addCommand("mceAnchor",(function(){v(n)}))},w=function(n){return n&&i(n.attr("href"))&&!i(n.attr("id")||n.attr("name"))},C=function(n){return w(n)&&!n.firstChild},k=function(n){return function(e){for(var t=0;t<e.length;t++){var r=e[t];C(r)&&r.attr("contenteditable",n)}}},A=function(n){n.on("PreInit",(function(){n.parser.addNodeFilter("a",k("false")),n.serializer.addNodeFilter("a",k(null))}))},O=function(n){n.formatter.register("namedAnchor",{inline:"a",selector:o,remove:"all",split:!0,deep:!0,attributes:{id:"%value"},onmatch:function(n,e,t){return c(n)}})},x=function(n){n.ui.registry.addToggleButton("anchor",{icon:"bookmark",tooltip:"Anchor",onAction:function(){return n.execCommand("mceAnchor")},onSetup:function(e){return n.selection.selectorChangedWithUnbind("a:not([href])",e.setActive).unbind}}),n.ui.registry.addMenuItem("anchor",{icon:"bookmark",text:"Anchor...",onAction:function(){return n.execCommand("mceAnchor")}})};function S(){n.add("anchor",(function(n){A(n),b(n),x(n),n.on("PreInit",(function(){O(n)}))}))}S()})()},ebd6:function(n,e,t){t("baf7")}}]);