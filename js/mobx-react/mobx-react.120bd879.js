import{g as r}from"../@antv/@antv.69345435.js";import{o as e,R as t,a as n,b as o,c as a,$ as i,d as s,u as c,i as u,e as f,f as p}from"../mobx/mobx.12f9c090.js";import{r as l,R as y}from"../react/react.e5edc743.js";import{O as b,o as m,i as d,a as v,u as h,b as O,c as w,d as g}from"../mobx-react-lite/mobx-react-lite.f443a2bc.js";var j=0;var x={};function P(r){return x[r]||(x[r]=function(r){if("function"==typeof Symbol)return Symbol(r);var e="__$mobx-react "+r+" ("+j+")";return j++,e}(r)),x[r]}function C(r,e){if(E(r,e))return!0;if("object"!=typeof r||null===r||"object"!=typeof e||null===e)return!1;var t=Object.keys(r),n=Object.keys(e);if(t.length!==n.length)return!1;for(var o=0;o<t.length;o++)if(!Object.hasOwnProperty.call(e,t[o])||!E(r[t[o]],e[t[o]]))return!1;return!0}function E(r,e){return r===e?0!==r||1/r==1/e:r!=r&&e!=e}var R={$$typeof:1,render:1,compare:1,type:1,childContextTypes:1,contextType:1,contextTypes:1,defaultProps:1,getDefaultProps:1,getDerivedStateFromError:1,getDerivedStateFromProps:1,mixins:1,propTypes:1};function A(r,e,t){Object.hasOwnProperty.call(r,e)?r[e]=t:Object.defineProperty(r,e,{enumerable:!1,configurable:!0,writable:!0,value:t})}var S=P("patchMixins"),k=P("patchedDefinition");function U(r,e){for(var t=this,n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];e.locks++;try{var i;return null!=r&&(i=r.apply(this,o)),i}finally{e.locks--,0===e.locks&&e.methods.forEach((function(r){r.apply(t,o)}))}}function _(r,e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];U.call.apply(U,[this,r,e].concat(n))}}function M(r,e,t){var n=function(r,e){var t=r[S]=r[S]||{},n=t[e]=t[e]||{};return n.locks=n.locks||0,n.methods=n.methods||[],n}(r,e);n.methods.indexOf(t)<0&&n.methods.push(t);var o=Object.getOwnPropertyDescriptor(r,e);if(!o||!o[k]){var a=r[e],i=T(r,e,o?o.enumerable:void 0,n,a);Object.defineProperty(r,e,i)}}function T(r,e,t,n,o){var a,i=_(o,n);return(a={})[k]=!0,a.get=function(){return i},a.set=function(o){if(this===r)i=_(o,n);else{var a=T(this,e,t,n,o);Object.defineProperty(this,e,a)}},a.configurable=!0,a.enumerable=t,a}var $=i,D=P("isMobXReactObserver"),N=P("isUnmounted"),I=P("skipRender"),q=P("isForcingUpdate");function F(r){var e=r.prototype;if(r[D])W(e);else r[D]=!0;if(e.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(r.__proto__!==l.exports.PureComponent)if(e.shouldComponentUpdate){if(e.shouldComponentUpdate!==L)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else e.shouldComponentUpdate=L;H(e,"props"),H(e,"state");var t=e.render;return e.render=function(){return X.call(this,t)},M(e,"componentWillUnmount",(function(){var r;if(!0!==d()&&(null===(r=this.render[$])||void 0===r||r.dispose(),this[N]=!0,!this.render[$]))W(this)})),r}function W(r){return r.displayName||r.name||r.constructor&&(r.constructor.displayName||r.constructor.name)||"<component>"}function X(r){var e=this;if(!0===d())return r.call(this);A(this,I,!1),A(this,q,!1);var o=W(this),a=r.bind(this),i=!1,s=new t(o+".render()",(function(){if(!i&&(i=!0,!0!==e[N])){var r=!0;try{A(e,q,!0),e[I]||l.exports.Component.prototype.forceUpdate.call(e),r=!1}finally{A(e,q,!1),r&&s.dispose()}}}));function c(){i=!1;var r=void 0,e=void 0;if(s.track((function(){try{e=n(!1,a)}catch(t){r=t}})),r)throw r;return e}return s.reactComponent=this,c[$]=s,this.render=c,c.call(this)}function L(r,e){return d(),this.state!==e||!C(this.props,r)}function H(r,e){var t=P("reactProp_"+e+"_valueHolder"),n=P("reactProp_"+e+"_atomHolder");function i(){return this[n]||A(this,n,s("reactive "+e)),this[n]}Object.defineProperty(r,e,{configurable:!0,enumerable:!0,get:function(){var r=!1;return o&&a&&(r=o(!0)),i.call(this).reportObserved(),o&&a&&a(r),this[t]},set:function(r){this[q]||C(this[t],r)?A(this,t,r):(A(this,t,r),A(this,I,!0),i.call(this).reportChanged(),A(this,I,!1))}})}var z="function"==typeof Symbol&&Symbol.for,B=z?Symbol.for("react.forward_ref"):"function"==typeof l.exports.forwardRef&&l.exports.forwardRef((function(r){return null})).$$typeof,Y=z?Symbol.for("react.memo"):"function"==typeof l.exports.memo&&l.exports.memo((function(r){return null})).$$typeof;function G(r){if(r.isMobxInjector,Y&&r.$$typeof===Y)throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(B&&r.$$typeof===B){var e=r.render;if("function"!=typeof e)throw new Error("render property of ForwardRef was not a function");return l.exports.forwardRef((function(){var r=arguments;return l.exports.createElement(b,null,(function(){return e.apply(void 0,r)}))}))}return"function"!=typeof r||r.prototype&&r.prototype.render||r.isReactClass||Object.prototype.isPrototypeOf.call(l.exports.Component,r)?F(r):m(r)}function J(){return J=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},J.apply(this,arguments)}var K=y.createContext({});function Q(r){var e=r.children,t=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,["children"]),n=y.useContext(K),o=y.useRef(J({},n,t)).current;return y.createElement(K.Provider,{value:o},e)}function V(r,e,t,n){var o,a,i,s=y.forwardRef((function(t,n){var o=J({},t),a=y.useContext(K);return Object.assign(o,r(a||{},o)||{}),n&&(o.ref=n),y.createElement(e,o)}));return n&&(s=G(s)),s.isMobxInjector=!0,o=e,a=s,i=Object.getOwnPropertyNames(Object.getPrototypeOf(o)),Object.getOwnPropertyNames(o).forEach((function(r){R[r]||-1!==i.indexOf(r)||Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(o,r))})),s.wrappedComponent=e,s.displayName=function(r,e){var t,n=r.displayName||r.name||r.constructor&&r.constructor.name||"Component";t=e?"inject-with-"+e+"("+n+")":"inject("+n+")";return t}(e,t),s}function Z(r){return function(e,t){return r.forEach((function(r){if(!(r in t)){if(!(r in e))throw new Error("MobX injector: Store '"+r+"' is not available! Make sure it is provided by some Provider");t[r]=e[r]}})),t}}Q.displayName="MobXProvider";var rr=P("disposeOnUnmountProto"),er=P("disposeOnUnmountInst");function tr(){var r=this;[].concat(this[rr]||[],this[er]||[]).forEach((function(e){var t="string"==typeof e?r[e]:e;null!=t&&(Array.isArray(t)?t.map((function(r){return r()})):t())}))}function nr(r){function e(e,t,n,o,a,i){for(var s=arguments.length,u=new Array(s>6?s-6:0),f=6;f<s;f++)u[f-6]=arguments[f];return c((function(){if(o=o||"<<anonymous>>",i=i||n,null==t[n]){if(e){var s=null===t[n]?"null":"undefined";return new Error("The "+a+" `"+i+"` is marked as required in `"+o+"`, but its value is `"+s+"`.")}return null}return r.apply(void 0,[t,n,o,a,i].concat(u))}))}var t=e.bind(null,!1);return t.isRequired=e.bind(null,!0),t}function or(r){var e=typeof r;return Array.isArray(r)?"array":r instanceof RegExp?"object":function(r,e){return"symbol"===r||"Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol}(e,r)?"symbol":e}function ar(r,e){return nr((function(t,n,o,a,i){return c((function(){if(r&&or(t[n])===e.toLowerCase())return null;var a;switch(e){case"Array":a=p;break;case"Object":a=f;break;case"Map":a=u;break;default:throw new Error("Unexpected mobxType: "+e)}var s=t[n];if(!a(s)){var c=function(r){var e=or(r);if("object"===e){if(r instanceof Date)return"date";if(r instanceof RegExp)return"regexp"}return e}(s),l=r?" or javascript `"+e.toLowerCase()+"`":"";return new Error("Invalid prop `"+i+"` of type `"+c+"` supplied to `"+o+"`, expected `mobx.Observable"+e+"`"+l+".")}return null}))}))}function ir(r,e){return nr((function(t,n,o,a,i){for(var s=arguments.length,u=new Array(s>5?s-5:0),f=5;f<s;f++)u[f-5]=arguments[f];return c((function(){if("function"!=typeof e)return new Error("Property `"+i+"` of component `"+o+"` has invalid PropType notation.");var s=ar(r,"Array")(t,n,o,a,i);if(s instanceof Error)return s;for(var c=t[n],f=0;f<c.length;f++)if((s=e.apply(void 0,[c,f,o,a,i+"["+f+"]"].concat(u)))instanceof Error)return s;return null}))}))}var sr={observableArray:ar(!1,"Array"),observableArrayOf:ir.bind(null,!1),observableMap:ar(!1,"Map"),observableObject:ar(!1,"Object"),arrayOrObservableArray:ar(!0,"Array"),arrayOrObservableArrayOf:ir.bind(null,!0),objectOrObservableObject:ar(!0,"Object")};if(!l.exports.Component)throw new Error("mobx-react requires React to be available");if(!e)throw new Error("mobx-react requires mobx to be available");var cr=Object.freeze(Object.defineProperty({__proto__:null,MobXProviderContext:K,PropTypes:sr,Provider:Q,disposeOnUnmount:function r(e,t){if(Array.isArray(t))return t.map((function(t){return r(e,t)}));var n=Object.getPrototypeOf(e).constructor,o=Object.getPrototypeOf(e.constructor),a=Object.getPrototypeOf(Object.getPrototypeOf(e));if(n!==y.Component&&n!==y.PureComponent&&o!==y.Component&&o!==y.PureComponent&&a!==y.Component&&a!==y.PureComponent)throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");if("string"!=typeof t&&"function"!=typeof t&&!Array.isArray(t))throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");var i="string"==typeof t,s=!!e[rr]||!!e[er];return(i?e[rr]||(e[rr]=[]):e[er]||(e[er]=[])).push(t),s||M(e,"componentWillUnmount",tr),"string"!=typeof t?t:void 0},inject:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if("function"==typeof arguments[0]){var n=arguments[0];return function(r){return V(n,r,n.name,!0)}}return function(r){return V(Z(e),r,e.join("-"),!1)}},observer:G,Observer:b,isUsingStaticRendering:d,observerBatching:v,useAsObservableSource:h,useLocalStore:O,useObserver:w,useStaticRendering:g},Symbol.toStringTag,{value:"Module"})),ur=r(cr);export{ur as r};
