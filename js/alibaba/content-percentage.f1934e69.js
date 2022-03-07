import{r as e,R as r}from"../react/react.e5edc743.js";import{D as t}from"../bizcharts/bizcharts.c6efc88a.js";import{a as o}from"../axios/axios.a1c8d7fd.js";import{u as s}from"../../assets/index.bf498f5b.js";import{i}from"../index/index.f476e017.js";import{a1 as a,T as c,g as p}from"../@arco-design/@arco-design.eb9ea931.js";import"../object-assign/object-assign.e5889995.js";import"../@antv/@antv.69345435.js";import"../tslib/tslib.1f2a8160.js";import"../gl-matrix/gl-matrix.6cb8c67a.js";import"../detect-browser/detect-browser.a469391e.js";import"../d3-regression/d3-regression.e10b4046.js";import"../size-sensor/size-sensor.bb5b1f74.js";import"../pdfast/pdfast.ade5acbe.js";import"../fmin/fmin.ea32ba89.js";import"../d3-ease/d3-ease.8a89d0f5.js";import"../d3-interpolate/d3-interpolate.0bdd19ab.js";import"../d3-color/d3-color.a47736f8.js";import"../d3-timer/d3-timer.e3046964.js";import"../fecha/fecha.a0123310.js";import"../react-dom/react-dom.7870d50f.js";import"../react-reconciler/react-reconciler.706a5d5b.js";import"../scheduler/scheduler.5c61b0c9.js";import"../react-error-boundary/react-error-boundary.5a3745e3.js";import"../@babel/@babel.7c7b387f.js";import"../@juggle/@juggle.9199f3c3.js";import"../warning/warning.81404603.js";import"../redux/redux.72fa486b.js";import"../react-redux/react-redux.d68aa07b.js";import"../hoist-non-react-statics/hoist-non-react-statics.f706a956.js";import"../react-is/react-is.6d438ee5.js";import"../react-router-dom/react-router-dom.0d10f02d.js";import"../react-router/react-router.974aaf84.js";import"../history/history.4b019394.js";import"../resolve-pathname/resolve-pathname.7568f23f.js";import"../value-equal/value-equal.37c1230a.js";import"../tiny-invariant/tiny-invariant.5c14a1cf.js";import"../mini-create-react-context/mini-create-react-context.dca41909.js";import"../prop-types/prop-types.1fb3bfd4.js";import"../path-to-regexp/path-to-regexp.a08c7b11.js";import"../isarray/isarray.1454ffe5.js";import"../classnames/classnames.6cb9bdf2.js";import"../query-string/query-string.d3c07f4a.js";import"../strict-uri-encode/strict-uri-encode.d44e34ea.js";import"../decode-uri-component/decode-uri-component.6e89d477.js";import"../split-on-first/split-on-first.a76c9921.js";import"../filter-obj/filter-obj.f86166b1.js";import"../nprogress/nprogress.b66e7714.js";import"../js-cookie/js-cookie.431252a9.js";import"../lodash/lodash.33fc63e8.js";import"../copy-to-clipboard/copy-to-clipboard.56ab9a99.js";import"../toggle-selection/toggle-selection.46a0207d.js";import"../react-color/react-color.3532779f.js";import"../tinycolor2/tinycolor2.042e481d.js";import"../reactcss/reactcss.a713c77f.js";import"../lodash-es/lodash-es.ff5a4c9c.js";import"../material-colors/material-colors.3f277444.js";import"../@icons/@icons.1a9e107a.js";import"../@loadable/@loadable.21d502e1.js";import"../mockjs/mockjs.a38611cc.js";import"../react-transition-group/react-transition-group.f287b4c6.js";import"../dom-helpers/dom-helpers.46084422.js";import"../b-tween/b-tween.a10812db.js";import"../dayjs/dayjs.0c483328.js";import"../react-focus-lock/react-focus-lock.81a9569f.js";import"../focus-lock/focus-lock.749b4a34.js";import"../use-sidecar/use-sidecar.7fce5ba3.js";import"../use-callback-ref/use-callback-ref.208c8b26.js";import"../react-clientside-effect/react-clientside-effect.a7232328.js";import"../scroll-into-view-if-needed/scroll-into-view-if-needed.153ec066.js";import"../b-validate/b-validate.168022c4.js";import"../lodash.isequal/lodash.isequal.b5c40efb.js";import"../number-precision/number-precision.063ca7db.js";import"../resize-observer-polyfill/resize-observer-polyfill.54970ac0.js";import"../color/color.d8ca9408.js";import"../color-string/color-string.0956b1ae.js";import"../color-name/color-name.c23643db.js";import"../simple-swizzle/simple-swizzle.1c142a9d.js";import"../color-convert/color-convert.cd11f981.js";function l(){const l=s(i),[m,n]=e.exports.useState([]),[d,j]=e.exports.useState(!0);return e.exports.useEffect((()=>{j(!0),o.get("/api/workplace/content-percentage").then((e=>{n(e.data)})).finally((()=>{j(!1)}))}),[]),r.createElement(a,null,r.createElement(c.Title,{heading:6},l["workplace.contentPercentage"]),r.createElement(p,{loading:d,style:{display:"block"}},r.createElement(t,{autoFit:!0,height:340,data:m,radius:.7,innerRadius:.65,angleField:"count",colorField:"type",color:["#21CCFF","#313CA9","#249EFF"],interactions:[{type:"element-single-selected"}],tooltip:{showMarkers:!1},label:{visible:!0,type:"spider",formatter:e=>`${(100*e.percent).toFixed(0)}%`,style:{fill:"#86909C",fontSize:14}},legend:{position:"bottom"},statistic:{title:{style:{fontSize:"14px",lineHeight:2,color:"rgb(--var(color-text-1))"},formatter:()=>"内容量"},content:{style:{fontSize:"16px",color:"rgb(--var(color-text-1))"},formatter:(e,r)=>{const t=r.reduce(((e,r)=>e+r.count),0);return Number(t).toLocaleString()}}}})))}export{l as default};
