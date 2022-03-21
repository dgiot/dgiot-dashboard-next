import{l as m}from"./vendor.ed5b4e33.js";const g=new Set(["ENOTFOUND","ENETUNREACH","UNABLE_TO_GET_ISSUER_CERT","UNABLE_TO_GET_CRL","UNABLE_TO_DECRYPT_CERT_SIGNATURE","UNABLE_TO_DECRYPT_CRL_SIGNATURE","UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY","CERT_SIGNATURE_FAILURE","CRL_SIGNATURE_FAILURE","CERT_NOT_YET_VALID","CERT_HAS_EXPIRED","CRL_NOT_YET_VALID","CRL_HAS_EXPIRED","ERROR_IN_CERT_NOT_BEFORE_FIELD","ERROR_IN_CERT_NOT_AFTER_FIELD","ERROR_IN_CRL_LAST_UPDATE_FIELD","ERROR_IN_CRL_NEXT_UPDATE_FIELD","OUT_OF_MEM","DEPTH_ZERO_SELF_SIGNED_CERT","SELF_SIGNED_CERT_IN_CHAIN","UNABLE_TO_GET_ISSUER_CERT_LOCALLY","UNABLE_TO_VERIFY_LEAF_SIGNATURE","CERT_CHAIN_TOO_LONG","CERT_REVOKED","INVALID_CA","PATH_LENGTH_EXCEEDED","INVALID_PURPOSE","CERT_UNTRUSTED","CERT_REJECTED","HOSTNAME_MISMATCH"]);var S=e=>!g.has(e&&e.code);function p(e,t,r,n,s,i,a){try{var E=e[i](a),o=E.value}catch(_){r(_);return}E.done?t(o):Promise.resolve(o).then(n,s)}function C(e){return function(){var t=this,r=arguments;return new Promise(function(n,s){var i=e.apply(t,r);function a(o){p(i,n,s,a,E,"next",o)}function E(o){p(i,n,s,a,E,"throw",o)}a(void 0)})}}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(n){L(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l="axios-retry";function N(e){return!e.response&&Boolean(e.code)&&e.code!=="ECONNABORTED"&&S(e)}var I=["get","head","options"],P=I.concat(["put","delete"]);function f(e){return e.code!=="ECONNABORTED"&&(!e.response||e.response.status>=500&&e.response.status<=599)}function v(e){return e.config?f(e)&&I.indexOf(e.config.method)!==-1:!1}function A(e){return e.config?f(e)&&P.indexOf(e.config.method)!==-1:!1}function D(e){return N(e)||A(e)}function U(){return 0}function w(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=Math.pow(2,e)*100,r=t*.2*Math.random();return t+r}function h(e){var t=e[l]||{};return t.retryCount=t.retryCount||0,e[l]=t,t}function H(e,t){return d(d({},t),e[l])}function b(e,t){e.defaults.agent===t.agent&&delete t.agent,e.defaults.httpAgent===t.httpAgent&&delete t.httpAgent,e.defaults.httpsAgent===t.httpsAgent&&delete t.httpsAgent}function F(e,t,r,n){return R.apply(this,arguments)}function R(){return R=C(function*(e,t,r,n){var s=r.retryCount<e&&t(n);if(typeof s=="object")try{return yield s,!0}catch{return!1}return s}),R.apply(this,arguments)}function u(e,t){e.interceptors.request.use(r=>{var n=h(r);return n.lastRequestTime=Date.now(),r}),e.interceptors.response.use(null,function(){var r=C(function*(n){var{config:s}=n;if(!s)return Promise.reject(n);var{retries:i=3,retryCondition:a=D,retryDelay:E=U,shouldResetTimeout:o=!1}=H(s,t),_=h(s);if(yield F(i,a,_,n)){_.retryCount+=1;var T=E(_.retryCount,n);if(b(e,s),!o&&s.timeout&&_.lastRequestTime){var y=Date.now()-_.lastRequestTime;s.timeout=Math.max(s.timeout-y-T,1)}return s.transformRequest=[c=>c],new Promise(c=>setTimeout(()=>c(e(s)),T))}return Promise.reject(n)});return function(n){return r.apply(this,arguments)}}())}u.isNetworkError=N;u.isSafeRequestError=v;u.isIdempotentRequestError=A;u.isNetworkOrIdempotentRequestError=D;u.exponentialDelay=w;u.isRetryableError=f;u(m,{retries:3});class B{constructor(){this.instance=m.create({timeout:1e3*12}),u(this.instance,{retries:3}),this.initInterceptors()}getInterceptors(){return this.instance}initInterceptors(){this.instance.interceptors.request.use(t=>{t.headers["Conetent-type"]="application/json";const r=localStorage.getItem("sessionToken");return r&&(t.headers.sessionToken=r),t},t=>{console.log(t)}),this.instance.interceptors.response.use(t=>t.status===200?Promise.resolve(t.data):(this.errorHandle(t),Promise.reject(t.data)),t=>{const{response:r}=t;if(console.log("111",r),r.status==401&&(location.href="/login"),r)return this.errorHandle(r),Promise.reject(r.data)})}errorHandle(t){switch(t.status){case 401:break;case 403:break;case 404:console.log("404 \u8BF7\u6C42\u8D44\u6E90\u4E0D\u5B58\u5728");break;default:console.log("\u8FDE\u63A5\u9519\u8BEF")}}}class G{constructor(){this.axios=new B().getInterceptors()}getClict(t){return new Promise((r,n)=>{this.axios(t).then(s=>{r(s)}).catch(s=>{n(s)})})}resultHandle(t,r){t.status>0?r(t.data):this.errorHandle(t)}errorHandle(t){switch(console.log(t.msg),t.status){}}}export{G as H};
