const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Sensor-BJdLA4Rl.js","assets/Aside-By4iDkyO.js","assets/Aperture-DaZ5-LFy.js"])))=>i.map(i=>d[i]);
var F0=Object.defineProperty;var k0=(t,e,n)=>e in t?F0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var tt=(t,e,n)=>k0(t,typeof e!="symbol"?e+"":e,n);function B0(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function z0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ag={exports:{}},cu={},Cg={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),H0=Symbol.for("react.portal"),V0=Symbol.for("react.fragment"),G0=Symbol.for("react.strict_mode"),W0=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),Y0=Symbol.for("react.forward_ref"),$0=Symbol.for("react.suspense"),K0=Symbol.for("react.memo"),q0=Symbol.for("react.lazy"),Gh=Symbol.iterator;function Z0(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rg=Object.assign,Pg={};function qs(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||bg}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lg(){}Lg.prototype=qs.prototype;function Sf(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||bg}var Ef=Sf.prototype=new Lg;Ef.constructor=Sf;Rg(Ef,qs.prototype);Ef.isPureReactComponent=!0;var Wh=Array.isArray,Dg=Object.prototype.hasOwnProperty,Mf={current:null},Ig={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dg.call(e,i)&&!Ig.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:fa,type:t,key:s,ref:o,props:r,_owner:Mf.current}}function Q0(t,e){return{$$typeof:fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wf(t){return typeof t=="object"&&t!==null&&t.$$typeof===fa}function J0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xh=/\/+/g;function Nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J0(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fa:case H0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Nu(o,0):i,Wh(r)?(n="",t!=null&&(n=t.replace(Xh,"$&/")+"/"),hl(r,e,n,"",function(u){return u})):r!=null&&(wf(r)&&(r=Q0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Xh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Nu(s,a);o+=hl(s,e,n,l,r)}else if(l=Z0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Nu(s,a++),o+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ex(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},pl={transition:null},tx={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Mf};function Ng(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!wf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=qs;Ge.Fragment=V0;Ge.Profiler=W0;Ge.PureComponent=Sf;Ge.StrictMode=G0;Ge.Suspense=$0;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tx;Ge.act=Ng;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Rg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dg.call(e,l)&&!Ig.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:fa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:j0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X0,_context:t},t.Consumer=t};Ge.createElement=Ug;Ge.createFactory=function(t){var e=Ug.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Y0,render:t}};Ge.isValidElement=wf;Ge.lazy=function(t){return{$$typeof:q0,_payload:{_status:-1,_result:t},_init:ex}};Ge.memo=function(t,e){return{$$typeof:K0,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};Ge.unstable_act=Ng;Ge.useCallback=function(t,e){return nn.current.useCallback(t,e)};Ge.useContext=function(t){return nn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return nn.current.useEffect(t,e)};Ge.useId=function(){return nn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return nn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Ge.useRef=function(t){return nn.current.useRef(t)};Ge.useState=function(t){return nn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return nn.current.useTransition()};Ge.version="18.3.1";Cg.exports=Ge;var ge=Cg.exports;const Tf=z0(ge),nx=B0({__proto__:null,default:Tf},[ge]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix=ge,rx=Symbol.for("react.element"),sx=Symbol.for("react.fragment"),ox=Object.prototype.hasOwnProperty,ax=ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lx={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ox.call(e,i)&&!lx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:rx,type:t,key:s,ref:o,props:r,_owner:ax.current}}cu.Fragment=sx;cu.jsx=Og;cu.jsxs=Og;Ag.exports=cu;var xe=Ag.exports,kc={},Fg={exports:{}},Sn={},kg={exports:{}},Bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,K){var Z=I.length;I.push(K);e:for(;0<Z;){var le=Z-1>>>1,we=I[le];if(0<r(we,K))I[le]=K,I[Z]=we,Z=le;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],Z=I.pop();if(Z!==K){I[0]=Z;e:for(var le=0,we=I.length,We=we>>>1;le<We;){var Y=2*(le+1)-1,se=I[Y],de=Y+1,fe=I[de];if(0>r(se,Z))de<we&&0>r(fe,se)?(I[le]=fe,I[de]=Z,le=de):(I[le]=se,I[Y]=Z,le=Y);else if(de<we&&0>r(fe,Z))I[le]=fe,I[de]=Z,le=de;else break e}}return K}function r(I,K){var Z=I.sortIndex-K.sortIndex;return Z!==0?Z:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,v=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=I)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function M(I){if(x=!1,g(I),!v)if(n(l)!==null)v=!0,X(R);else{var K=n(u);K!==null&&te(M,K.startTime-I)}}function R(I,K){v=!1,x&&(x=!1,f(L),L=-1),m=!0;var Z=h;try{for(g(K),d=n(l);d!==null&&(!(d.expirationTime>K)||I&&!D());){var le=d.callback;if(typeof le=="function"){d.callback=null,h=d.priorityLevel;var we=le(d.expirationTime<=K);K=t.unstable_now(),typeof we=="function"?d.callback=we:d===n(l)&&i(l),g(K)}else i(l);d=n(l)}if(d!==null)var We=!0;else{var Y=n(u);Y!==null&&te(M,Y.startTime-K),We=!1}return We}finally{d=null,h=Z,m=!1}}var C=!1,A=null,L=-1,T=5,S=-1;function D(){return!(t.unstable_now()-S<T)}function j(){if(A!==null){var I=t.unstable_now();S=I;var K=!0;try{K=A(!0,I)}finally{K?V():(C=!1,A=null)}}else C=!1}var V;if(typeof _=="function")V=function(){_(j)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Q=$.port2;$.port1.onmessage=j,V=function(){Q.postMessage(null)}}else V=function(){p(j,0)};function X(I){A=I,C||(C=!0,V())}function te(I,K){L=p(function(){I(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,X(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var Z=h;h=K;try{return I()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=h;h=I;try{return K()}finally{h=Z}},t.unstable_scheduleCallback=function(I,K,Z){var le=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?le+Z:le):Z=le,I){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=Z+we,I={id:c++,callback:K,priorityLevel:I,startTime:Z,expirationTime:we,sortIndex:-1},Z>le?(I.sortIndex=Z,e(u,I),n(l)===null&&I===n(u)&&(x?(f(L),L=-1):x=!0,te(M,Z-le))):(I.sortIndex=we,e(l,I),v||m||(v=!0,X(R))),I},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(I){var K=h;return function(){var Z=h;h=K;try{return I.apply(this,arguments)}finally{h=Z}}}})(Bg);kg.exports=Bg;var ux=kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=ge,yn=ux;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zg=new Set,Go={};function zr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Go[t]=e,t=0;t<e.length;t++)zg.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,dx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jh={},Yh={};function fx(t){return Bc.call(Yh,t)?!0:Bc.call(jh,t)?!1:dx.test(t)?Yh[t]=!0:(jh[t]=!0,!1)}function hx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function px(t,e,n,i){if(e===null||typeof e>"u"||hx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Af,Cf);Vt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Af,Cf);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Af,Cf);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function bf(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(px(e,n,r,i)&&(n=null),i||r===null?fx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),Hg=Symbol.for("react.provider"),Vg=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Gg=Symbol.for("react.offscreen"),$h=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=$h&&t[$h]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,Ou;function Eo(t){if(Ou===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ou=e&&e[1]||""}return`
`+Ou+t}var Fu=!1;function ku(t,e){if(!t||Fu)return"";Fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function mx(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function Gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case zc:return"Profiler";case Rf:return"StrictMode";case Hc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vg:return(t.displayName||"Context")+".Consumer";case Hg:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:Gc(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return Gc(t(e))}catch{}}return null}function gx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gc(e);case 8:return e===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _x(t){var e=Wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Aa(t){t._valueTracker||(t._valueTracker=_x(t))}function Xg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Wg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jg(t,e){e=e.checked,e!=null&&bf(t,"checked",e,!1)}function Xc(t,e){jg(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&jc(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jc(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Mo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function Yg(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $g(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$g(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,Kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vx=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){vx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function Zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=qg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var xx=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(xx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qc=null,Ps=null,Ls=null;function Jh(t){if(t=ma(t)){if(typeof Qc!="function")throw Error(re(280));var e=t.stateNode;e&&(e=mu(e),Qc(t.stateNode,t.type,e))}}function Qg(t){Ps?Ls?Ls.push(t):Ls=[t]:Ps=t}function Jg(){if(Ps){var t=Ps,e=Ls;if(Ls=Ps=null,Jh(t),e)for(t=0;t<e.length;t++)Jh(e[t])}}function e_(t,e){return t(e)}function t_(){}var Bu=!1;function n_(t,e,n){if(Bu)return t(e,n);Bu=!0;try{return e_(t,e,n)}finally{Bu=!1,(Ps!==null||Ls!==null)&&(t_(),Jg())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var i=mu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Jc=!1;if(yi)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Jc=!1}function yx(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Po=!1,Dl=null,Il=!1,ed=null,Sx={onError:function(t){Po=!0,Dl=t}};function Ex(t,e,n,i,r,s,o,a,l){Po=!1,Dl=null,yx.apply(Sx,arguments)}function Mx(t,e,n,i,r,s,o,a,l){if(Ex.apply(this,arguments),Po){if(Po){var u=Dl;Po=!1,Dl=null}else throw Error(re(198));Il||(Il=!0,ed=u)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ep(t){if(Hr(t)!==t)throw Error(re(188))}function wx(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ep(r),t;if(s===i)return ep(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function r_(t){return t=wx(t),t!==null?s_(t):null}function s_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s_(t);if(e!==null)return e;t=t.sibling}return null}var o_=yn.unstable_scheduleCallback,tp=yn.unstable_cancelCallback,Tx=yn.unstable_shouldYield,Ax=yn.unstable_requestPaint,Et=yn.unstable_now,Cx=yn.unstable_getCurrentPriorityLevel,If=yn.unstable_ImmediatePriority,a_=yn.unstable_UserBlockingPriority,Ul=yn.unstable_NormalPriority,bx=yn.unstable_LowPriority,l_=yn.unstable_IdlePriority,du=null,ni=null;function Rx(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:Dx,Px=Math.log,Lx=Math.LN2;function Dx(t){return t>>>=0,t===0?32:31-(Px(t)/Lx|0)|0}var ba=64,Ra=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=wo(a):(s&=o,s!==0&&(i=wo(s)))}else o=n&~r,o!==0?i=wo(o):s!==0&&(i=wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ix(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ux(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ix(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u_(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function Nx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function c_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d_,Nf,f_,h_,p_,nd=!1,Pa=[],Wi=null,Xi=null,ji=null,jo=new Map,Yo=new Map,ki=[],Ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ma(e),e!==null&&Nf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Fx(t,e,n,i,r){switch(e){case"focusin":return Wi=ao(Wi,t,e,n,i,r),!0;case"dragenter":return Xi=ao(Xi,t,e,n,i,r),!0;case"mouseover":return ji=ao(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return jo.set(s,ao(jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Yo.set(s,ao(Yo.get(s)||null,t,e,n,i,r)),!0}return!1}function m_(t){var e=Tr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=i_(n),e!==null){t.blockedOn=e,p_(t.priority,function(){f_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zc=i,n.target.dispatchEvent(i),Zc=null}else return e=ma(n),e!==null&&Nf(e),t.blockedOn=n,!1;e.shift()}return!0}function ip(t,e,n){ml(t)&&n.delete(e)}function kx(){nd=!1,Wi!==null&&ml(Wi)&&(Wi=null),Xi!==null&&ml(Xi)&&(Xi=null),ji!==null&&ml(ji)&&(ji=null),jo.forEach(ip),Yo.forEach(ip)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,nd||(nd=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,kx)))}function $o(t){function e(r){return lo(r,t)}if(0<Pa.length){lo(Pa[0],t);for(var n=1;n<Pa.length;n++){var i=Pa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&lo(Wi,t),Xi!==null&&lo(Xi,t),ji!==null&&lo(ji,t),jo.forEach(e),Yo.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)m_(n),n.blockedOn===null&&ki.shift()}var Ds=Ti.ReactCurrentBatchConfig,Ol=!0;function Bx(t,e,n,i){var r=nt,s=Ds.transition;Ds.transition=null;try{nt=1,Of(t,e,n,i)}finally{nt=r,Ds.transition=s}}function zx(t,e,n,i){var r=nt,s=Ds.transition;Ds.transition=null;try{nt=4,Of(t,e,n,i)}finally{nt=r,Ds.transition=s}}function Of(t,e,n,i){if(Ol){var r=id(t,e,n,i);if(r===null)qu(t,e,i,Fl,n),np(t,i);else if(Fx(r,t,e,n,i))i.stopPropagation();else if(np(t,i),e&4&&-1<Ox.indexOf(t)){for(;r!==null;){var s=ma(r);if(s!==null&&d_(s),s=id(t,e,n,i),s===null&&qu(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qu(t,e,i,null,n)}}var Fl=null;function id(t,e,n,i){if(Fl=null,t=Df(i),t=Tr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function g_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cx()){case If:return 1;case a_:return 4;case Ul:case bx:return 16;case l_:return 536870912;default:return 16}default:return 16}}var Hi=null,Ff=null,gl=null;function __(){if(gl)return gl;var t,e=Ff,n=e.length,i,r="value"in Hi?Hi.value:Hi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function rp(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:rp,this.isPropagationStopped=rp,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kf=En(Zs),pa=mt({},Zs,{view:0,detail:0}),Hx=En(pa),Hu,Vu,uo,fu=mt({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Hu=t.screenX-uo.screenX,Vu=t.screenY-uo.screenY):Vu=Hu=0,uo=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Vu}}),sp=En(fu),Vx=mt({},fu,{dataTransfer:0}),Gx=En(Vx),Wx=mt({},pa,{relatedTarget:0}),Gu=En(Wx),Xx=mt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=En(Xx),Yx=mt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$x=En(Yx),Kx=mt({},Zs,{data:0}),op=En(Kx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qx[t])?!!e[t]:!1}function Bf(){return Jx}var ey=mt({},pa,{key:function(t){if(t.key){var e=qx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ty=En(ey),ny=mt({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=En(ny),iy=mt({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),ry=En(iy),sy=mt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=En(sy),ay=mt({},fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=En(ay),uy=[9,13,27,32],zf=yi&&"CompositionEvent"in window,Lo=null;yi&&"documentMode"in document&&(Lo=document.documentMode);var cy=yi&&"TextEvent"in window&&!Lo,v_=yi&&(!zf||Lo&&8<Lo&&11>=Lo),lp=" ",up=!1;function x_(t,e){switch(t){case"keyup":return uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function dy(t,e){switch(t){case"compositionend":return y_(e);case"keypress":return e.which!==32?null:(up=!0,lp);case"textInput":return t=e.data,t===lp&&up?null:t;default:return null}}function fy(t,e){if(gs)return t==="compositionend"||!zf&&x_(t,e)?(t=__(),gl=Ff=Hi=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v_&&e.locale!=="ko"?null:e.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hy[t.type]:e==="textarea"}function S_(t,e,n,i){Qg(i),e=kl(e,"onChange"),0<e.length&&(n=new kf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Do=null,Ko=null;function py(t){D_(t,0)}function hu(t){var e=xs(t);if(Xg(e))return t}function my(t,e){if(t==="change")return e}var E_=!1;if(yi){var Wu;if(yi){var Xu="oninput"in document;if(!Xu){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Xu=typeof dp.oninput=="function"}Wu=Xu}else Wu=!1;E_=Wu&&(!document.documentMode||9<document.documentMode)}function fp(){Do&&(Do.detachEvent("onpropertychange",M_),Ko=Do=null)}function M_(t){if(t.propertyName==="value"&&hu(Ko)){var e=[];S_(e,Ko,t,Df(t)),n_(py,e)}}function gy(t,e,n){t==="focusin"?(fp(),Do=e,Ko=n,Do.attachEvent("onpropertychange",M_)):t==="focusout"&&fp()}function _y(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(Ko)}function vy(t,e){if(t==="click")return hu(e)}function xy(t,e){if(t==="input"||t==="change")return hu(e)}function yy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:yy;function qo(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bc.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,e){var n=hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function w_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?w_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T_(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sy(t){var e=T_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&w_(n.ownerDocument.documentElement,n)){if(i!==null&&Hf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pp(n,s);var o=pp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ey=yi&&"documentMode"in document&&11>=document.documentMode,_s=null,rd=null,Io=null,sd=!1;function mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||_s==null||_s!==Ll(i)||(i=_s,"selectionStart"in i&&Hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&qo(Io,i)||(Io=i,i=kl(rd,"onSelect"),0<i.length&&(e=new kf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},ju={},A_={};yi&&(A_=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function pu(t){if(ju[t])return ju[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in A_)return ju[t]=e[n];return t}var C_=pu("animationend"),b_=pu("animationiteration"),R_=pu("animationstart"),P_=pu("transitionend"),L_=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){L_.set(t,e),zr(e,[t])}for(var Yu=0;Yu<gp.length;Yu++){var $u=gp[Yu],My=$u.toLowerCase(),wy=$u[0].toUpperCase()+$u.slice(1);or(My,"on"+wy)}or(C_,"onAnimationEnd");or(b_,"onAnimationIteration");or(R_,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(P_,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function _p(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Mx(i,e,void 0,t),t.currentTarget=null}function D_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;_p(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;_p(r,a,u),s=l}}}if(Il)throw t=ed,Il=!1,ed=null,t}function ot(t,e){var n=e[cd];n===void 0&&(n=e[cd]=new Set);var i=t+"__bubble";n.has(i)||(I_(e,t,2,!1),n.add(i))}function Ku(t,e,n){var i=0;e&&(i|=4),I_(n,t,i,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[Ia]){t[Ia]=!0,zg.forEach(function(n){n!=="selectionchange"&&(Ty.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Ku("selectionchange",!1,e))}}function I_(t,e,n,i){switch(g_(e)){case 1:var r=Bx;break;case 4:r=zx;break;default:r=Of}n=r.bind(null,e,n,t),r=void 0,!Jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}n_(function(){var u=s,c=Df(n),d=[];e:{var h=L_.get(t);if(h!==void 0){var m=kf,v=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":m=ty;break;case"focusin":v="focus",m=Gu;break;case"focusout":v="blur",m=Gu;break;case"beforeblur":case"afterblur":m=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ry;break;case C_:case b_:case R_:m=jx;break;case P_:m=oy;break;case"scroll":m=Hx;break;case"wheel":m=ly;break;case"copy":case"cut":case"paste":m=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ap}var x=(e&4)!==0,p=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,f!==null&&(M=Xo(_,f),M!=null&&x.push(Qo(_,M,g)))),p)break;_=_.return}0<x.length&&(h=new m(h,v,null,n,c),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Zc&&(v=n.relatedTarget||n.fromElement)&&(Tr(v)||v[Si]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Tr(v):null,v!==null&&(p=Hr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=sp,M="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=ap,M="onPointerLeave",f="onPointerEnter",_="pointer"),p=m==null?h:xs(m),g=v==null?h:xs(v),h=new x(M,_+"leave",m,n,c),h.target=p,h.relatedTarget=g,M=null,Tr(c)===u&&(x=new x(f,_+"enter",v,n,c),x.target=g,x.relatedTarget=p,M=x),p=M,m&&v)t:{for(x=m,f=v,_=0,g=x;g;g=Xr(g))_++;for(g=0,M=f;M;M=Xr(M))g++;for(;0<_-g;)x=Xr(x),_--;for(;0<g-_;)f=Xr(f),g--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=Xr(x),f=Xr(f)}x=null}else x=null;m!==null&&vp(d,h,m,x,!1),v!==null&&p!==null&&vp(d,p,v,x,!0)}}e:{if(h=u?xs(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=my;else if(cp(h))if(E_)R=xy;else{R=_y;var C=gy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=vy);if(R&&(R=R(t,u))){S_(d,R,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&jc(h,"number",h.value)}switch(C=u?xs(u):window,t){case"focusin":(cp(C)||C.contentEditable==="true")&&(_s=C,rd=u,Io=null);break;case"focusout":Io=rd=_s=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,mp(d,n,c);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":mp(d,n,c)}var A;if(zf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else gs?x_(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(v_&&n.locale!=="ko"&&(gs||L!=="onCompositionStart"?L==="onCompositionEnd"&&gs&&(A=__()):(Hi=c,Ff="value"in Hi?Hi.value:Hi.textContent,gs=!0)),C=kl(u,L),0<C.length&&(L=new op(L,t,null,n,c),d.push({event:L,listeners:C}),A?L.data=A:(A=y_(n),A!==null&&(L.data=A)))),(A=cy?dy(t,n):fy(t,n))&&(u=kl(u,"onBeforeInput"),0<u.length&&(c=new op("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}D_(d,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xo(t,n),s!=null&&i.unshift(Qo(t,s,r)),s=Xo(t,e),s!=null&&i.push(Qo(t,s,r))),t=t.return}return i}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Xo(n,s),l!=null&&o.unshift(Qo(n,l,a))):r||(l=Xo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ay=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function xp(t){return(typeof t=="string"?t:""+t).replace(Ay,`
`).replace(Cy,"")}function Ua(t,e,n){if(e=xp(e),xp(t)!==e&&n)throw Error(re(425))}function Bl(){}var od=null,ad=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(Py)}:ud;function Py(t){setTimeout(function(){throw t})}function Zu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$o(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$o(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Qs,Jo="__reactProps$"+Qs,Si="__reactContainer$"+Qs,cd="__reactEvents$"+Qs,Ly="__reactListeners$"+Qs,Dy="__reactHandles$"+Qs;function Tr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sp(t);t!==null;){if(n=t[Jn])return n;t=Sp(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[Jn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function mu(t){return t[Jo]||null}var dd=[],ys=-1;function ar(t){return{current:t}}function ut(t){0>ys||(t.current=dd[ys],dd[ys]=null,ys--)}function it(t,e){ys++,dd[ys]=t.current,t.current=e}var tr={},Kt=ar(tr),ln=ar(!1),Ir=tr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function zl(){ut(ln),ut(Kt)}function Ep(t,e,n){if(Kt.current!==tr)throw Error(re(168));it(Kt,e),it(ln,n)}function U_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,gx(t)||"Unknown",r));return mt({},n,i)}function Hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ir=Kt.current,it(Kt,t),it(ln,ln.current),!0}function Mp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=U_(t,e,Ir),i.__reactInternalMemoizedMergedChildContext=t,ut(ln),ut(Kt),it(Kt,t)):ut(ln),it(ln,n)}var pi=null,gu=!1,Qu=!1;function N_(t){pi===null?pi=[t]:pi.push(t)}function Iy(t){gu=!0,N_(t)}function lr(){if(!Qu&&pi!==null){Qu=!0;var t=0,e=nt;try{var n=pi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pi=null,gu=!1}catch(r){throw pi!==null&&(pi=pi.slice(t+1)),o_(If,lr),r}finally{nt=e,Qu=!1}}return null}var Ss=[],Es=0,Vl=null,Gl=0,Tn=[],An=0,Ur=null,mi=1,gi="";function yr(t,e){Ss[Es++]=Gl,Ss[Es++]=Vl,Vl=t,Gl=e}function O_(t,e,n){Tn[An++]=mi,Tn[An++]=gi,Tn[An++]=Ur,Ur=t;var i=mi;t=gi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mi=1<<32-Vn(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function Vf(t){t.return!==null&&(yr(t,1),O_(t,1,0))}function Gf(t){for(;t===Vl;)Vl=Ss[--Es],Ss[Es]=null,Gl=Ss[--Es],Ss[Es]=null;for(;t===Ur;)Ur=Tn[--An],Tn[An]=null,gi=Tn[--An],Tn[An]=null,mi=Tn[--An],Tn[An]=null}var xn=null,vn=null,dt=!1,Bn=null;function F_(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,vn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,vn=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hd(t){if(dt){var e=vn;if(e){var n=e;if(!wp(t,e)){if(fd(t))throw Error(re(418));e=Yi(n.nextSibling);var i=xn;e&&wp(t,e)?F_(i,n):(t.flags=t.flags&-4097|2,dt=!1,xn=t)}}else{if(fd(t))throw Error(re(418));t.flags=t.flags&-4097|2,dt=!1,xn=t}}}function Tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Na(t){if(t!==xn)return!1;if(!dt)return Tp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=vn)){if(fd(t))throw k_(),Error(re(418));for(;e;)F_(t,e),e=Yi(e.nextSibling)}if(Tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=xn?Yi(t.stateNode.nextSibling):null;return!0}function k_(){for(var t=vn;t;)t=Yi(t.nextSibling)}function zs(){vn=xn=null,dt=!1}function Wf(t){Bn===null?Bn=[t]:Bn.push(t)}var Uy=Ti.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ap(t){var e=t._init;return e(t._payload)}function B_(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Zi(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,M){return _===null||_.tag!==6?(_=sc(g,f.mode,M),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,M){var R=g.type;return R===ms?c(f,_,g.props.children,M,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ni&&Ap(R)===_.type)?(M=r(_,g.props),M.ref=co(f,_,g),M.return=f,M):(M=wl(g.type,g.key,g.props,null,f.mode,M),M.ref=co(f,_,g),M.return=f,M)}function u(f,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=oc(g,f.mode,M),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function c(f,_,g,M,R){return _===null||_.tag!==7?(_=Lr(g,f.mode,M,R),_.return=f,_):(_=r(_,g),_.return=f,_)}function d(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=sc(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ta:return g=wl(_.type,_.key,_.props,null,f.mode,g),g.ref=co(f,null,_),g.return=f,g;case ps:return _=oc(_,f.mode,g),_.return=f,_;case Ni:var M=_._init;return d(f,M(_._payload),g)}if(Mo(_)||so(_))return _=Lr(_,f.mode,g,null),_.return=f,_;Oa(f,_)}return null}function h(f,_,g,M){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(f,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ta:return g.key===R?l(f,_,g,M):null;case ps:return g.key===R?u(f,_,g,M):null;case Ni:return R=g._init,h(f,_,R(g._payload),M)}if(Mo(g)||so(g))return R!==null?null:c(f,_,g,M,null);Oa(f,g)}return null}function m(f,_,g,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(g)||null,a(_,f,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ta:return f=f.get(M.key===null?g:M.key)||null,l(_,f,M,R);case ps:return f=f.get(M.key===null?g:M.key)||null,u(_,f,M,R);case Ni:var C=M._init;return m(f,_,g,C(M._payload),R)}if(Mo(M)||so(M))return f=f.get(g)||null,c(_,f,M,R,null);Oa(_,M)}return null}function v(f,_,g,M){for(var R=null,C=null,A=_,L=_=0,T=null;A!==null&&L<g.length;L++){A.index>L?(T=A,A=null):T=A.sibling;var S=h(f,A,g[L],M);if(S===null){A===null&&(A=T);break}t&&A&&S.alternate===null&&e(f,A),_=s(S,_,L),C===null?R=S:C.sibling=S,C=S,A=T}if(L===g.length)return n(f,A),dt&&yr(f,L),R;if(A===null){for(;L<g.length;L++)A=d(f,g[L],M),A!==null&&(_=s(A,_,L),C===null?R=A:C.sibling=A,C=A);return dt&&yr(f,L),R}for(A=i(f,A);L<g.length;L++)T=m(A,f,L,g[L],M),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?L:T.key),_=s(T,_,L),C===null?R=T:C.sibling=T,C=T);return t&&A.forEach(function(D){return e(f,D)}),dt&&yr(f,L),R}function x(f,_,g,M){var R=so(g);if(typeof R!="function")throw Error(re(150));if(g=R.call(g),g==null)throw Error(re(151));for(var C=R=null,A=_,L=_=0,T=null,S=g.next();A!==null&&!S.done;L++,S=g.next()){A.index>L?(T=A,A=null):T=A.sibling;var D=h(f,A,S.value,M);if(D===null){A===null&&(A=T);break}t&&A&&D.alternate===null&&e(f,A),_=s(D,_,L),C===null?R=D:C.sibling=D,C=D,A=T}if(S.done)return n(f,A),dt&&yr(f,L),R;if(A===null){for(;!S.done;L++,S=g.next())S=d(f,S.value,M),S!==null&&(_=s(S,_,L),C===null?R=S:C.sibling=S,C=S);return dt&&yr(f,L),R}for(A=i(f,A);!S.done;L++,S=g.next())S=m(A,f,L,S.value,M),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?L:S.key),_=s(S,_,L),C===null?R=S:C.sibling=S,C=S);return t&&A.forEach(function(j){return e(f,j)}),dt&&yr(f,L),R}function p(f,_,g,M){if(typeof g=="object"&&g!==null&&g.type===ms&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ta:e:{for(var R=g.key,C=_;C!==null;){if(C.key===R){if(R=g.type,R===ms){if(C.tag===7){n(f,C.sibling),_=r(C,g.props.children),_.return=f,f=_;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ni&&Ap(R)===C.type){n(f,C.sibling),_=r(C,g.props),_.ref=co(f,C,g),_.return=f,f=_;break e}n(f,C);break}else e(f,C);C=C.sibling}g.type===ms?(_=Lr(g.props.children,f.mode,M,g.key),_.return=f,f=_):(M=wl(g.type,g.key,g.props,null,f.mode,M),M.ref=co(f,_,g),M.return=f,f=M)}return o(f);case ps:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=oc(g,f.mode,M),_.return=f,f=_}return o(f);case Ni:return C=g._init,p(f,_,C(g._payload),M)}if(Mo(g))return v(f,_,g,M);if(so(g))return x(f,_,g,M);Oa(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=sc(g,f.mode,M),_.return=f,f=_),o(f)):n(f,_)}return p}var Hs=B_(!0),z_=B_(!1),Wl=ar(null),Xl=null,Ms=null,Xf=null;function jf(){Xf=Ms=Xl=null}function Yf(t){var e=Wl.current;ut(Wl),t._currentValue=e}function pd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Xl=t,Xf=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Xf!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Xl===null)throw Error(re(308));Ms=t,Xl.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Ar=null;function $f(t){Ar===null?Ar=[t]:Ar.push(t)}function H_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$f(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,$f(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}function Cp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=mt({},d,h);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Or|=o,t.lanes=o,t.memoizedState=d}}function bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ga={},ii=ar(ga),ea=ar(ga),ta=ar(ga);function Cr(t){if(t===ga)throw Error(re(174));return t}function qf(t,e){switch(it(ta,e),it(ea,t),it(ii,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$c(e,t)}ut(ii),it(ii,e)}function Vs(){ut(ii),ut(ea),ut(ta)}function G_(t){Cr(ta.current);var e=Cr(ii.current),n=$c(e,t.type);e!==n&&(it(ea,t),it(ii,n))}function Zf(t){ea.current===t&&(ut(ii),ut(ea))}var ft=ar(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ju=[];function Qf(){for(var t=0;t<Ju.length;t++)Ju[t]._workInProgressVersionPrimary=null;Ju.length=0}var xl=Ti.ReactCurrentDispatcher,ec=Ti.ReactCurrentBatchConfig,Nr=0,ht=null,Rt=null,Nt=null,$l=!1,Uo=!1,na=0,Ny=0;function Gt(){throw Error(re(321))}function Jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function eh(t,e,n,i,r,s){if(Nr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?By:zy,t=n(i,r),Uo){s=0;do{if(Uo=!1,na=0,25<=s)throw Error(re(301));s+=1,Nt=Rt=null,e.updateQueue=null,xl.current=Hy,t=n(i,r)}while(Uo)}if(xl.current=Kl,e=Rt!==null&&Rt.next!==null,Nr=0,Nt=Rt=ht=null,$l=!1,e)throw Error(re(300));return t}function th(){var t=na!==0;return na=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Ln(){if(Rt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Nt===null?ht.memoizedState:Nt.next;if(e!==null)Nt=e,Rt=t;else{if(t===null)throw Error(re(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function ia(t,e){return typeof e=="function"?e(t):e}function tc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ht.lanes|=c,Or|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Wn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Or|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Wn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function W_(){}function X_(t,e){var n=ht,i=Ln(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,nh($_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,ra(9,Y_.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(re(349));Nr&30||j_(n,e,r)}return r}function j_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y_(t,e,n,i){e.value=n,e.getSnapshot=i,K_(e)&&q_(t)}function $_(t,e,n){return n(function(){K_(e)&&q_(t)})}function K_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function q_(t){var e=Ei(t,1);e!==null&&Gn(e,t,1,-1)}function Rp(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=ky.bind(null,ht,t),[e.memoizedState,t]}function ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Z_(){return Ln().memoizedState}function yl(t,e,n,i){var r=qn();ht.flags|=t,r.memoizedState=ra(1|e,n,void 0,i===void 0?null:i)}function _u(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Jf(i,o.deps)){r.memoizedState=ra(e,n,s,i);return}}ht.flags|=t,r.memoizedState=ra(1|e,n,s,i)}function Pp(t,e){return yl(8390656,8,t,e)}function nh(t,e){return _u(2048,8,t,e)}function Q_(t,e){return _u(4,2,t,e)}function J_(t,e){return _u(4,4,t,e)}function ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tv(t,e,n){return n=n!=null?n.concat([t]):null,_u(4,4,ev.bind(null,e,t),n)}function ih(){}function nv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function iv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function rv(t,e,n){return Nr&21?(Wn(n,e)||(n=u_(),ht.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function Oy(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=ec.transition;ec.transition={};try{t(!1),e()}finally{nt=n,ec.transition=i}}function sv(){return Ln().memoizedState}function Fy(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ov(t))av(e,n);else if(n=H_(t,e,n,i),n!==null){var r=Jt();Gn(n,t,i,r),lv(n,e,i)}}function ky(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ov(t))av(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(r.next=r,$f(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=H_(t,e,r,i),n!==null&&(r=Jt(),Gn(n,t,i,r),lv(n,e,i))}}function ov(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function av(t,e){Uo=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}var Kl={readContext:Pn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},By={readContext:Pn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Fy.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Rp,useDebugValue:ih,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Rp(!1),e=t[0];return t=Oy.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=qn();if(dt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ot===null)throw Error(re(349));Nr&30||j_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Pp($_.bind(null,i,s,t),[t]),i.flags|=2048,ra(9,Y_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Ot.identifierPrefix;if(dt){var n=gi,i=mi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ny++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zy={readContext:Pn,useCallback:nv,useContext:Pn,useEffect:nh,useImperativeHandle:tv,useInsertionEffect:Q_,useLayoutEffect:J_,useMemo:iv,useReducer:tc,useRef:Z_,useState:function(){return tc(ia)},useDebugValue:ih,useDeferredValue:function(t){var e=Ln();return rv(e,Rt.memoizedState,t)},useTransition:function(){var t=tc(ia)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:X_,useId:sv,unstable_isNewReconciler:!1},Hy={readContext:Pn,useCallback:nv,useContext:Pn,useEffect:nh,useImperativeHandle:tv,useInsertionEffect:Q_,useLayoutEffect:J_,useMemo:iv,useReducer:nc,useRef:Z_,useState:function(){return nc(ia)},useDebugValue:ih,useDeferredValue:function(t){var e=Ln();return Rt===null?e.memoizedState=t:rv(e,Rt.memoizedState,t)},useTransition:function(){var t=nc(ia)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:X_,useId:sv,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=qi(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Gn(e,t,r,i),vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=qi(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Gn(e,t,r,i),vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=qi(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Gn(e,t,i,n),vl(e,t,i))}};function Lp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,i)||!qo(r,s):!0}function uv(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=un(e)?Ir:Kt.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function gd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=un(e)?Ir:Kt.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vu.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=mx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vy=typeof WeakMap=="function"?WeakMap:Map;function cv(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zl||(Zl=!0,Cd=i),_d(t,e)},n}function dv(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_d(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Vy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=nS.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Np(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var Gy=Ti.ReactCurrentOwner,an=!1;function Qt(t,e,n,i){e.child=t===null?z_(e,null,n,i):Hs(e,t.child,n,i)}function Op(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=eh(t,e,n,i,s,r),n=th(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(dt&&n&&Vf(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Fp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fv(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function fv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qo(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return vd(t,e,n,i,r)}function hv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Ts,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(Ts,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(Ts,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(Ts,gn),gn|=i;return Qt(t,e,r,n),e.child}function pv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,i,r){var s=un(n)?Ir:Kt.current;return s=Bs(e,s),Is(e,r),n=eh(t,e,n,i,s,r),i=th(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(dt&&i&&Vf(e),e.flags|=1,Qt(t,e,n,r),e.child)}function kp(t,e,n,i,r){if(un(n)){var s=!0;Hl(e)}else s=!1;if(Is(e,r),e.stateNode===null)Sl(t,e),uv(e,n,i),gd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=un(n)?Ir:Kt.current,u=Bs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Dp(e,o,i,u),Oi=!1;var h=e.memoizedState;o.state=h,jl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ln.current||Oi?(typeof c=="function"&&(md(e,n,c,i),l=e.memoizedState),(a=Oi||Lp(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,V_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=un(n)?Ir:Kt.current,l=Bs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Dp(e,o,i,l),Oi=!1,h=e.memoizedState,o.state=h,jl(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||ln.current||Oi?(typeof m=="function"&&(md(e,n,m,i),v=e.memoizedState),(u=Oi||Lp(e,n,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return xd(t,e,n,i,s,r)}function xd(t,e,n,i,r,s){pv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mp(e,n,!1),Mi(t,e,s);i=e.stateNode,Gy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&Mp(e,n,!0),e.child}function mv(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),qf(t,e.containerInfo)}function Bp(t,e,n,i,r){return zs(),Wf(r),e.flags|=256,Qt(t,e,n,i),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function gv(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Su(o,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sd(n),e.memoizedState=yd,t):rh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Wy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zi(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yd,i}return s=t.child,t=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function rh(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,i){return i!==null&&Wf(i),Hs(e,t.child,null,n),t=rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ic(Error(re(422))),Fa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Su({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=Sd(o),e.memoizedState=yd,s);if(!(e.mode&1))return Fa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=ic(s,i,void 0),Fa(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),Gn(i,t,r,-1))}return ch(),i=ic(Error(re(421))),Fa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=iS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=Yi(r.nextSibling),xn=e,dt=!0,Bn=null,t!==null&&(Tn[An++]=mi,Tn[An++]=gi,Tn[An++]=Ur,mi=t.id,gi=t.overflow,Ur=e),e=rh(e,i.children),e.flags|=4096,e)}function zp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pd(t.return,e,n)}function rc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function _v(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zp(t,n,e);else if(t.tag===19)zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),rc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}rc(e,!0,n,null,s);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Xy(t,e,n){switch(e.tag){case 3:mv(e),zs();break;case 5:G_(e);break;case 1:un(e.type)&&Hl(e);break;case 4:qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?gv(t,e,n):(it(ft,ft.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _v(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return Mi(t,e,n)}var vv,Ed,xv,yv;vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ed=function(){};xv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(ii.current);var s=null;switch(n){case"input":r=Wc(t,r),i=Wc(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Yc(t,r),i=Yc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bl)}Kc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Go.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Go.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function fo(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jy(t,e,n){var i=e.pendingProps;switch(Gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return un(e.type)&&zl(),Wt(e),null;case 3:return i=e.stateNode,Vs(),ut(ln),ut(Kt),Qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(Pd(Bn),Bn=null))),Ed(t,e),Wt(e),null;case 5:Zf(e);var r=Cr(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)xv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Wt(e),null}if(t=Cr(ii.current),Na(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<To.length;r++)ot(To[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Kh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Zh(i,s),ot("invalid",i)}Kc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",""+a]):Go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":Aa(i),qh(i,s,!0);break;case"textarea":Aa(i),Qh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$g(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Jo]=i,vv(t,e,!1,!1),e.stateNode=t;e:{switch(o=qc(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<To.length;r++)ot(To[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Kh(t,i),r=Wc(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Zh(t,i),r=Yc(t,i),ot("invalid",t);break;default:r=i}Kc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wo(t,l):typeof l=="number"&&Wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&bf(t,s,l,o))}switch(n){case"input":Aa(t),qh(t,i,!1);break;case"textarea":Aa(t),Qh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Cr(ta.current),Cr(ii.current),Na(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Wt(e),null;case 13:if(ut(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&vn!==null&&e.mode&1&&!(e.flags&128))k_(),zs(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Jn]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Bn!==null&&(Pd(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Pt===0&&(Pt=3):ch())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Vs(),Ed(t,e),t===null&&Zo(e.stateNode.containerInfo),Wt(e),null;case 10:return Yf(e.type._context),Wt(e),null;case 17:return un(e.type)&&zl(),Wt(e),null;case 19:if(ut(ft),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fo(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yl(t),o!==null){for(e.flags|=128,fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Ws&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Wt(e),null}else 2*Et()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Yy(t,e){switch(Gf(e),e.tag){case 1:return un(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),ut(ln),ut(Kt),Qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zf(e),null;case 13:if(ut(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ft),null;case 4:return Vs(),null;case 10:return Yf(e.type._context),null;case 22:case 23:return uh(),null;case 24:return null;default:return null}}var ka=!1,Yt=!1,$y=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Md(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Hp=!1;function Ky(t,e){if(od=Ol,t=T_(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},Ol=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,p=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Fn(e.type,x),p);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(M){yt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return v=Hp,Hp=!1,v}function No(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Md(e,n,s)}r=r.next}while(r!==i)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sv(t){var e=t.alternate;e!==null&&(t.alternate=null,Sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Jo],delete e[cd],delete e[Ly],delete e[Dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function Vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var zt=null,kn=!1;function bi(t,e,n){for(n=n.child;n!==null;)Mv(t,e,n),n=n.sibling}function Mv(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:Yt||ws(n,e);case 6:var i=zt,r=kn;zt=null,bi(t,e,n),zt=i,kn=r,zt!==null&&(kn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(kn?(t=zt,n=n.stateNode,t.nodeType===8?Zu(t.parentNode,n):t.nodeType===1&&Zu(t,n),$o(t)):Zu(zt,n.stateNode));break;case 4:i=zt,r=kn,zt=n.stateNode.containerInfo,kn=!0,bi(t,e,n),zt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Md(n,e,o),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!Yt&&(ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,bi(t,e,n),Yt=i):bi(t,e,n);break;default:bi(t,e,n)}}function Gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $y),e.forEach(function(i){var r=rS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,kn=!1;break e;case 3:zt=a.stateNode.containerInfo,kn=!0;break e;case 4:zt=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(zt===null)throw Error(re(160));Mv(s,o,r),zt=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wv(e,t),e=e.sibling}function wv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),$n(t),i&4){try{No(3,t,t.return),xu(3,t)}catch(x){yt(t,t.return,x)}try{No(5,t,t.return)}catch(x){yt(t,t.return,x)}}break;case 1:In(e,t),$n(t),i&512&&n!==null&&ws(n,n.return);break;case 5:if(In(e,t),$n(t),i&512&&n!==null&&ws(n,n.return),t.flags&32){var r=t.stateNode;try{Wo(r,"")}catch(x){yt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jg(r,s),qc(a,o);var u=qc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Zg(r,d):c==="dangerouslySetInnerHTML"?Kg(r,d):c==="children"?Wo(r,d):bf(r,c,d,u)}switch(a){case"input":Xc(r,s);break;case"textarea":Yg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Rs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Jo]=s}catch(x){yt(t,t.return,x)}}break;case 6:if(In(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){yt(t,t.return,x)}}break;case 3:if(In(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(x){yt(t,t.return,x)}break;case 4:In(e,t),$n(t);break;case 13:In(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ah=Et())),i&4&&Gp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(u=Yt)||c,In(e,t),Yt=u):In(e,t),$n(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(_e=t,c=t.child;c!==null;){for(d=_e=c;_e!==null;){switch(h=_e,m=h.child,h.tag){case 0:case 11:case 14:case 15:No(4,h,h.return);break;case 1:ws(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){yt(i,n,x)}}break;case 5:ws(h,h.return);break;case 22:if(h.memoizedState!==null){Xp(d);continue}}m!==null?(m.return=h,_e=m):Xp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qg("display",o))}catch(x){yt(t,t.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){yt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:In(e,t),$n(t),i&4&&Gp(t);break;case 21:break;default:In(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wo(r,""),i.flags&=-33);var s=Vp(t);Ad(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Vp(t);Td(t,a,o);break;default:throw Error(re(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qy(t,e,n){_e=t,Tv(t)}function Tv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ka;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=ka;var u=Yt;if(ka=o,(Yt=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?jp(r):l!==null?(l.return=o,_e=l):jp(r);for(;s!==null;)_e=s,Tv(s),s=s.sibling;_e=r,ka=a,Yt=u}Wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Wp(t)}}function Wp(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||xu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$o(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Yt||e.flags&512&&wd(e)}catch(h){yt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Xp(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function jp(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{wd(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{wd(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var Zy=Math.ceil,ql=Ti.ReactCurrentDispatcher,sh=Ti.ReactCurrentOwner,Rn=Ti.ReactCurrentBatchConfig,Ye=0,Ot=null,At=null,Ht=0,gn=0,Ts=ar(0),Pt=0,sa=null,Or=0,yu=0,oh=0,Oo=null,sn=null,ah=0,Ws=1/0,hi=null,Zl=!1,Cd=null,Ki=null,Ba=!1,Vi=null,Ql=0,Fo=0,bd=null,El=-1,Ml=0;function Jt(){return Ye&6?Et():El!==-1?El:El=Et()}function qi(t){return t.mode&1?Ye&2&&Ht!==0?Ht&-Ht:Uy.transition!==null?(Ml===0&&(Ml=u_()),Ml):(t=nt,t!==0||(t=window.event,t=t===void 0?16:g_(t.type)),t):1}function Gn(t,e,n,i){if(50<Fo)throw Fo=0,bd=null,Error(re(185));ha(t,n,i),(!(Ye&2)||t!==Ot)&&(t===Ot&&(!(Ye&2)&&(yu|=n),Pt===4&&Bi(t,Ht)),cn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Ws=Et()+500,gu&&lr()))}function cn(t,e){var n=t.callbackNode;Ux(t,e);var i=Nl(t,t===Ot?Ht:0);if(i===0)n!==null&&tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tp(n),e===1)t.tag===0?Iy(Yp.bind(null,t)):N_(Yp.bind(null,t)),Ry(function(){!(Ye&6)&&lr()}),n=null;else{switch(c_(i)){case 1:n=If;break;case 4:n=a_;break;case 16:n=Ul;break;case 536870912:n=l_;break;default:n=Ul}n=Iv(n,Av.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Av(t,e){if(El=-1,Ml=0,Ye&6)throw Error(re(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=Nl(t,t===Ot?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jl(t,i);else{e=i;var r=Ye;Ye|=2;var s=bv();(Ot!==t||Ht!==e)&&(hi=null,Ws=Et()+500,Pr(t,e));do try{eS();break}catch(a){Cv(t,a)}while(!0);jf(),ql.current=s,Ye=r,At!==null?e=0:(Ot=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=td(t),r!==0&&(i=r,e=Rd(t,r))),e===1)throw n=sa,Pr(t,0),Bi(t,i),cn(t,Et()),n;if(e===6)Bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Qy(r)&&(e=Jl(t,i),e===2&&(s=td(t),s!==0&&(i=s,e=Rd(t,s))),e===1))throw n=sa,Pr(t,0),Bi(t,i),cn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Sr(t,sn,hi);break;case 3:if(Bi(t,i),(i&130023424)===i&&(e=ah+500-Et(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ud(Sr.bind(null,t,sn,hi),e);break}Sr(t,sn,hi);break;case 4:if(Bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Zy(i/1960))-i,10<i){t.timeoutHandle=ud(Sr.bind(null,t,sn,hi),i);break}Sr(t,sn,hi);break;case 5:Sr(t,sn,hi);break;default:throw Error(re(329))}}}return cn(t,Et()),t.callbackNode===n?Av.bind(null,t):null}function Rd(t,e){var n=Oo;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=sn,sn=n,e!==null&&Pd(e)),t}function Pd(t){sn===null?sn=t:sn.push.apply(sn,t)}function Qy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bi(t,e){for(e&=~oh,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function Yp(t){if(Ye&6)throw Error(re(327));Us();var e=Nl(t,0);if(!(e&1))return cn(t,Et()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var i=td(t);i!==0&&(e=i,n=Rd(t,i))}if(n===1)throw n=sa,Pr(t,0),Bi(t,e),cn(t,Et()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,sn,hi),cn(t,Et()),null}function lh(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Ws=Et()+500,gu&&lr())}}function Fr(t){Vi!==null&&Vi.tag===0&&!(Ye&6)&&Us();var e=Ye;Ye|=1;var n=Rn.transition,i=nt;try{if(Rn.transition=null,nt=1,t)return t()}finally{nt=i,Rn.transition=n,Ye=e,!(Ye&6)&&lr()}}function uh(){gn=Ts.current,ut(Ts)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,by(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Vs(),ut(ln),ut(Kt),Qf();break;case 5:Zf(i);break;case 4:Vs();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:Yf(i.type._context);break;case 22:case 23:uh()}n=n.return}if(Ot=t,At=t=Zi(t.current,null),Ht=gn=e,Pt=0,sa=null,oh=yu=Or=0,sn=Oo=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ar=null}return t}function Cv(t,e){do{var n=At;try{if(jf(),xl.current=Kl,$l){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$l=!1}if(Nr=0,Nt=Rt=ht=null,Uo=!1,na=0,sh.current=null,n===null||n.return===null){Pt=1,sa=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Up(o);if(m!==null){m.flags&=-257,Np(m,o,a,s,e),m.mode&1&&Ip(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Ip(s,u,e),ch();break e}l=Error(re(426))}}else if(dt&&a.mode&1){var p=Up(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Np(p,o,a,s,e),Wf(Gs(l,a));break e}}s=l=Gs(l,a),Pt!==4&&(Pt=2),Oo===null?Oo=[s]:Oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=cv(s,l,e);Cp(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ki===null||!Ki.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=dv(s,a,e);Cp(s,M);break e}}s=s.return}while(s!==null)}Pv(n)}catch(R){e=R,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function bv(){var t=ql.current;return ql.current=Kl,t===null?Kl:t}function ch(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(Or&268435455)&&!(yu&268435455)||Bi(Ot,Ht)}function Jl(t,e){var n=Ye;Ye|=2;var i=bv();(Ot!==t||Ht!==e)&&(hi=null,Pr(t,e));do try{Jy();break}catch(r){Cv(t,r)}while(!0);if(jf(),Ye=n,ql.current=i,At!==null)throw Error(re(261));return Ot=null,Ht=0,Pt}function Jy(){for(;At!==null;)Rv(At)}function eS(){for(;At!==null&&!Tx();)Rv(At)}function Rv(t){var e=Dv(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?Pv(t):At=e,sh.current=null}function Pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yy(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,At=null;return}}else if(n=jy(n,e,gn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Pt===0&&(Pt=5)}function Sr(t,e,n){var i=nt,r=Rn.transition;try{Rn.transition=null,nt=1,tS(t,e,n,i)}finally{Rn.transition=r,nt=i}return null}function tS(t,e,n,i){do Us();while(Vi!==null);if(Ye&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nx(t,s),t===Ot&&(At=Ot=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,Iv(Ul,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=nt;nt=1;var a=Ye;Ye|=4,sh.current=null,Ky(t,n),wv(n,t),Sy(ad),Ol=!!od,ad=od=null,t.current=n,qy(n),Ax(),Ye=a,nt=o,Rn.transition=s}else t.current=n;if(Ba&&(Ba=!1,Vi=t,Ql=r),s=t.pendingLanes,s===0&&(Ki=null),Rx(n.stateNode),cn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zl)throw Zl=!1,t=Cd,Cd=null,t;return Ql&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===bd?Fo++:(Fo=0,bd=t):Fo=0,lr(),null}function Us(){if(Vi!==null){var t=c_(Ql),e=Rn.transition,n=nt;try{if(Rn.transition=null,nt=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Ql=0,Ye&6)throw Error(re(331));var r=Ye;for(Ye|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:No(8,c,s)}var d=c.child;if(d!==null)d.return=c,_e=d;else for(;_e!==null;){c=_e;var h=c.sibling,m=c.return;if(Sv(c),c===u){_e=null;break}if(h!==null){h.return=m,_e=h;break}_e=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,_e=f;break e}_e=s.return}}var _=t.current;for(_e=_;_e!==null;){o=_e;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,_e=g;else e:for(o=_;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xu(9,a)}}catch(R){yt(a,a.return,R)}if(a===o){_e=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,_e=M;break e}_e=a.return}}if(Ye=r,lr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(du,t)}catch{}i=!0}return i}finally{nt=n,Rn.transition=e}}return!1}function $p(t,e,n){e=Gs(n,e),e=cv(t,e,1),t=$i(t,e,1),e=Jt(),t!==null&&(ha(t,1,e),cn(t,e))}function yt(t,e,n){if(t.tag===3)$p(t,t,n);else for(;e!==null;){if(e.tag===3){$p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Gs(n,t),t=dv(e,t,1),e=$i(e,t,1),t=Jt(),e!==null&&(ha(e,1,t),cn(e,t));break}}e=e.return}}function nS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>Et()-ah?Pr(t,0):oh|=n),cn(t,e)}function Lv(t,e){e===0&&(t.mode&1?(e=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):e=1);var n=Jt();t=Ei(t,e),t!==null&&(ha(t,e,n),cn(t,n))}function iS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lv(t,n)}function rS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Lv(t,n)}var Dv;Dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,Xy(t,e,n);an=!!(t.flags&131072)}else an=!1,dt&&e.flags&1048576&&O_(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=Bs(e,Kt.current);Is(e,n),r=eh(null,e,i,t,r,n);var s=th();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kf(e),r.updater=vu,e.stateNode=r,r._reactInternals=e,gd(e,i,t,n),e=xd(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Vf(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oS(i),t=Fn(i,t),r){case 0:e=vd(null,e,i,t,n);break e;case 1:e=kp(null,e,i,t,n);break e;case 11:e=Op(null,e,i,t,n);break e;case 14:e=Fp(null,e,i,Fn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),kp(t,e,i,r,n);case 3:e:{if(mv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,V_(t,e),jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(re(423)),e),e=Bp(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(re(424)),e),e=Bp(t,e,i,n,r);break e}else for(vn=Yi(e.stateNode.containerInfo.firstChild),xn=e,dt=!0,Bn=null,n=z_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),i===r){e=Mi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return G_(e),t===null&&hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ld(i,r)?o=null:s!==null&&ld(i,s)&&(e.flags|=32),pv(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&hd(e),null;case 13:return gv(t,e,n);case 4:return qf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Op(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Wl,i._currentValue),i._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===r.children&&!ln.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=Pn(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),Fp(t,e,i,r,n);case 15:return fv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Sl(t,e),e.tag=1,un(i)?(t=!0,Hl(e)):t=!1,Is(e,n),uv(e,i,r),gd(e,i,r,n),xd(null,e,i,!0,t,n);case 19:return _v(t,e,n);case 22:return hv(t,e,n)}throw Error(re(156,e.tag))};function Iv(t,e){return o_(t,e)}function sS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new sS(t,e,n,i)}function dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oS(t){if(typeof t=="function")return dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Lf)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Lr(n.children,r,s,e);case Rf:o=8,r|=8;break;case zc:return t=Cn(12,n,e,r|2),t.elementType=zc,t.lanes=s,t;case Hc:return t=Cn(13,n,e,r),t.elementType=Hc,t.lanes=s,t;case Vc:return t=Cn(19,n,e,r),t.elementType=Vc,t.lanes=s,t;case Gg:return Su(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hg:o=10;break e;case Vg:o=9;break e;case Pf:o=11;break e;case Lf:o=14;break e;case Ni:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Cn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function Su(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=Gg,t.lanes=n,t.stateNode={isHidden:!1},t}function sc(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function oc(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zu(0),this.expirationTimes=zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fh(t,e,n,i,r,s,o,a,l){return t=new aS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kf(s),t}function lS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Uv(t){if(!t)return tr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(un(n))return U_(t,n,e)}return e}function Nv(t,e,n,i,r,s,o,a,l){return t=fh(n,i,!0,t,r,s,o,a,l),t.context=Uv(null),n=t.current,i=Jt(),r=qi(n),s=xi(i,r),s.callback=e??null,$i(n,s,r),t.current.lanes=r,ha(t,r,i),cn(t,i),t}function Eu(t,e,n,i){var r=e.current,s=Jt(),o=qi(r);return n=Uv(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,o),t!==null&&(Gn(t,r,o,s),vl(t,r,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hh(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function uS(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function ph(t){this._internalRoot=t}Mu.prototype.render=ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Eu(t,e,null,null)};Mu.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){Eu(null,t,null,null)}),e[Si]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=h_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&m_(t)}};function mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qp(){}function cS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=eu(o);s.call(u)}}var o=Nv(e,i,t,0,null,!1,!1,"",qp);return t._reactRootContainer=o,t[Si]=o.current,Zo(t.nodeType===8?t.parentNode:t),Fr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=eu(l);a.call(u)}}var l=fh(t,0,!1,null,null,!1,!1,"",qp);return t._reactRootContainer=l,t[Si]=l.current,Zo(t.nodeType===8?t.parentNode:t),Fr(function(){Eu(e,l,n,i)}),l}function Tu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=eu(o);a.call(l)}}Eu(e,o,t,r)}else o=cS(n,e,t,r,i);return eu(o)}d_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(Uf(e,n|1),cn(e,Et()),!(Ye&6)&&(Ws=Et()+500,lr()))}break;case 13:Fr(function(){var i=Ei(t,1);if(i!==null){var r=Jt();Gn(i,t,1,r)}}),hh(t,1)}};Nf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Jt();Gn(e,t,134217728,n)}hh(t,134217728)}};f_=function(t){if(t.tag===13){var e=qi(t),n=Ei(t,e);if(n!==null){var i=Jt();Gn(n,t,e,i)}hh(t,e)}};h_=function(){return nt};p_=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Qc=function(t,e,n){switch(e){case"input":if(Xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mu(i);if(!r)throw Error(re(90));Xg(i),Xc(i,r)}}}break;case"textarea":Yg(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};e_=lh;t_=Fr;var dS={usingClientEntryPoint:!1,Events:[ma,xs,mu,Qg,Jg,lh]},ho={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fS={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r_(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||uS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{du=za.inject(fS),ni=za}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mh(e))throw Error(re(200));return lS(t,e,null,n)};Sn.createRoot=function(t,e){if(!mh(t))throw Error(re(299));var n=!1,i="",r=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fh(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Zo(t.nodeType===8?t.parentNode:t),new ph(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=r_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Fr(t)};Sn.hydrate=function(t,e,n){if(!wu(e))throw Error(re(200));return Tu(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!mh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nv(e,null,t,1,n??null,r,!1,s,o),t[Si]=e.current,Zo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mu(e)};Sn.render=function(t,e,n){if(!wu(e))throw Error(re(200));return Tu(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!wu(t))throw Error(re(40));return t._reactRootContainer?(Fr(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};Sn.unstable_batchedUpdates=lh;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Tu(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function Fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fv)}catch(t){console.error(t)}}Fv(),Fg.exports=Sn;var hS=Fg.exports,Zp=hS;kc.createRoot=Zp.createRoot,kc.hydrateRoot=Zp.hydrateRoot;const pS="modulepreload",mS=function(t){return"/shooting-star/"+t},Qp={},kv=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(n.map(a=>{if(a=mS(a),a in Qp)return;Qp[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":pS,l||(c.as="script",c.crossOrigin=""),c.href=a,o&&c.setAttribute("nonce",o),document.head.appendChild(c),l)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},oa.apply(this,arguments)}var Gi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gi||(Gi={}));const Jp="popstate";function gS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Ld("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:zv(r)}return vS(e,n,null,t)}function Lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _S(){return Math.random().toString(36).substr(2,8)}function em(t,e){return{usr:t.state,key:t.key,idx:e}}function Ld(t,e,n,i){return n===void 0&&(n=null),oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Js(e):e,{state:n,key:e&&e.key||i||_S()})}function zv(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Js(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function vS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Gi.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(oa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Gi.Pop;let p=c(),f=p==null?null:p-u;u=p,l&&l({action:a,location:x.location,delta:f})}function h(p,f){a=Gi.Push;let _=Ld(x.location,p,f);u=c()+1;let g=em(_,u),M=x.createHref(_);try{o.pushState(g,"",M)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(M)}s&&l&&l({action:a,location:x.location,delta:1})}function m(p,f){a=Gi.Replace;let _=Ld(x.location,p,f);u=c();let g=em(_,u),M=x.createHref(_);o.replaceState(g,"",M),s&&l&&l({action:a,location:x.location,delta:0})}function v(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof p=="string"?p:zv(p);return _=_.replace(/ $/,"%20"),Lt(f,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,f)}let x={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Jp,d),l=p,()=>{r.removeEventListener(Jp,d),l=null}},createHref(p){return e(r,p)},createURL:v,encodeLocation(p){let f=v(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(p){return o.go(p)}};return x}var tm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(tm||(tm={}));function xS(t,e,n){return n===void 0&&(n="/"),yS(t,e,n,!1)}function yS(t,e,n,i){let r=typeof e=="string"?Js(e):e,s=Gv(r.pathname||"/",n);if(s==null)return null;let o=Hv(t);SS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=DS(s);a=PS(o[l],u,i)}return a}function Hv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Lt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Dr([i,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Lt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:bS(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Vv(s.path))r(s,o,l)}),e}function Vv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Vv(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function SS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:RS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const ES=/^:[\w-]+$/,MS=3,wS=2,TS=1,AS=10,CS=-2,nm=t=>t==="*";function bS(t,e){let n=t.split("/"),i=n.length;return n.some(nm)&&(i+=CS),e&&(i+=wS),n.filter(r=>!nm(r)).reduce((r,s)=>r+(ES.test(s)?MS:s===""?TS:AS),i)}function RS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function PS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=im({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!d&&u&&n&&!i[i.length-1].route.index&&(d=im({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:Dr([s,d.pathname]),pathnameBase:kS(Dr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Dr([s,d.pathnameBase]))}return o}function im(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=LS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{let{paramName:h,isOptional:m}=c;if(h==="*"){let x=a[d]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[d];return m&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function LS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function DS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function IS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Js(t):t;return{pathname:n?n.startsWith("/")?n:US(n,e):e,search:BS(i),hash:zS(r)}}function US(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ac(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function OS(t,e){let n=NS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function FS(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Js(t):(r=oa({},t),Lt(!r.pathname||!r.pathname.includes("?"),ac("?","pathname","search",r)),Lt(!r.pathname||!r.pathname.includes("#"),ac("#","pathname","hash",r)),Lt(!r.search||!r.search.includes("#"),ac("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=IS(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Dr=t=>t.join("/").replace(/\/\/+/g,"/"),kS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function HS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Wv=["post","put","patch","delete"];new Set(Wv);const VS=["get",...Wv];new Set(VS);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},aa.apply(this,arguments)}const gh=ge.createContext(null),GS=ge.createContext(null),Au=ge.createContext(null),Cu=ge.createContext(null),eo=ge.createContext({outlet:null,matches:[],isDataRoute:!1}),Xv=ge.createContext(null);function bu(){return ge.useContext(Cu)!=null}function _h(){return bu()||Lt(!1),ge.useContext(Cu).location}function jv(t){ge.useContext(Au).static||ge.useLayoutEffect(t)}function WS(){let{isDataRoute:t}=ge.useContext(eo);return t?iE():XS()}function XS(){bu()||Lt(!1);let t=ge.useContext(gh),{basename:e,future:n,navigator:i}=ge.useContext(Au),{matches:r}=ge.useContext(eo),{pathname:s}=_h(),o=JSON.stringify(OS(r,n.v7_relativeSplatPath)),a=ge.useRef(!1);return jv(()=>{a.current=!0}),ge.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let d=FS(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Dr([e,d.pathname])),(c.replace?i.replace:i.push)(d,c.state,c)},[e,i,o,s,t])}function jS(t,e){return YS(t,e)}function YS(t,e,n,i){bu()||Lt(!1);let{navigator:r}=ge.useContext(Au),{matches:s}=ge.useContext(eo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=_h(),c;if(e){var d;let p=typeof e=="string"?Js(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||Lt(!1),c=p}else c=u;let h=c.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=xS(t,{pathname:m}),x=QS(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Dr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Dr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?ge.createElement(Cu.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Gi.Pop}},x):x}function $S(){let t=nE(),e=HS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ge.createElement(ge.Fragment,null,ge.createElement("h2",null,"Unexpected Application Error!"),ge.createElement("h3",{style:{fontStyle:"italic"}},e),n?ge.createElement("pre",{style:r},n):null,null)}const KS=ge.createElement($S,null);class qS extends ge.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ge.createElement(eo.Provider,{value:this.props.routeContext},ge.createElement(Xv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZS(t){let{routeContext:e,match:n,children:i}=t,r=ge.useContext(gh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ge.createElement(eo.Provider,{value:e},i)}function QS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Lt(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:m}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let m,v=!1,x=null,p=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||KS,l&&(u<0&&h===0?(v=!0,p=null):u===h&&(v=!0,p=d.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,h+1)),_=()=>{let g;return m?g=x:v?g=p:d.route.Component?g=ge.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,ge.createElement(ZS,{match:d,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?ge.createElement(qS,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:_(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):_()},null)}var Yv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Yv||{}),tu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(tu||{});function JS(t){let e=ge.useContext(gh);return e||Lt(!1),e}function eE(t){let e=ge.useContext(GS);return e||Lt(!1),e}function tE(t){let e=ge.useContext(eo);return e||Lt(!1),e}function $v(t){let e=tE(),n=e.matches[e.matches.length-1];return n.route.id||Lt(!1),n.route.id}function nE(){var t;let e=ge.useContext(Xv),n=eE(tu.UseRouteError),i=$v(tu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function iE(){let{router:t}=JS(Yv.UseNavigateStable),e=$v(tu.UseNavigateStable),n=ge.useRef(!1);return jv(()=>{n.current=!0}),ge.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,aa({fromRouteId:e},s)))},[t,e])}function Ao(t){Lt(!1)}function rE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Gi.Pop,navigator:s,static:o=!1,future:a}=t;bu()&&Lt(!1);let l=e.replace(/^\/*/,"/"),u=ge.useMemo(()=>({basename:l,navigator:s,static:o,future:aa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Js(i));let{pathname:c="/",search:d="",hash:h="",state:m=null,key:v="default"}=i,x=ge.useMemo(()=>{let p=Gv(c,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:v},navigationType:r}},[l,c,d,h,m,v,r]);return x==null?null:ge.createElement(Au.Provider,{value:u},ge.createElement(Cu.Provider,{children:n,value:x}))}function sE(t){let{children:e,location:n}=t;return jS(Dd(e),n)}new Promise(()=>{});function Dd(t,e){e===void 0&&(e=[]);let n=[];return ge.Children.forEach(t,(i,r)=>{if(!ge.isValidElement(i))return;let s=[...e,r];if(i.type===ge.Fragment){n.push.apply(n,Dd(i.props.children,s));return}i.type!==Ao&&Lt(!1),!i.props.index||!i.props.children||Lt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Dd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const oE="6";try{window.__reactRouterVersion=oE}catch{}const aE="startTransition",rm=nx[aE];function lE(t){let{basename:e,children:n,future:i,window:r}=t,s=ge.useRef();s.current==null&&(s.current=gS({window:r,v5Compat:!0}));let o=s.current,[a,l]=ge.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=ge.useCallback(d=>{u&&rm?rm(()=>l(d)):l(d)},[l,u]);return ge.useLayoutEffect(()=>o.listen(c),[o,c]),ge.createElement(rE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var sm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(sm||(sm={}));var om;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(om||(om={}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="167",jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uE=0,am=1,cE=2,Kv=1,dE=2,fi=3,nr=0,dn=1,ei=2,Qi=0,Ns=1,lm=2,um=3,cm=4,fE=5,Mr=100,hE=101,pE=102,mE=103,gE=104,_E=200,vE=201,xE=202,yE=203,Id=204,Ud=205,SE=206,EE=207,ME=208,wE=209,TE=210,AE=211,CE=212,bE=213,RE=214,PE=0,LE=1,DE=2,nu=3,IE=4,UE=5,NE=6,OE=7,xh=0,FE=1,kE=2,Ji=0,BE=1,zE=2,HE=3,VE=4,GE=5,WE=6,XE=7,qv=300,Xs=301,js=302,Nd=303,Od=304,Ru=306,Fd=1e3,br=1001,kd=1002,bn=1003,jE=1004,Ha=1005,zn=1006,lc=1007,Rr=1008,wi=1009,Zv=1010,Qv=1011,la=1012,yh=1013,kr=1014,_i=1015,_a=1016,Sh=1017,Eh=1018,Ys=1020,Jv=35902,e0=1021,t0=1022,Hn=1023,n0=1024,i0=1025,Os=1026,$s=1027,r0=1028,Mh=1029,s0=1030,wh=1031,Th=1033,Tl=33776,Al=33777,Cl=33778,bl=33779,Bd=35840,zd=35841,Hd=35842,Vd=35843,Gd=36196,Wd=37492,Xd=37496,jd=37808,Yd=37809,$d=37810,Kd=37811,qd=37812,Zd=37813,Qd=37814,Jd=37815,ef=37816,tf=37817,nf=37818,rf=37819,sf=37820,of=37821,Rl=36492,af=36494,lf=36495,o0=36283,uf=36284,cf=36285,df=36286,YE=3200,$E=3201,a0=0,KE=1,zi="",Zn="srgb",ur="srgb-linear",Ah="display-p3",Pu="display-p3-linear",iu="linear",at="srgb",ru="rec709",su="p3",$r=7680,dm=519,qE=512,ZE=513,QE=514,l0=515,JE=516,eM=517,tM=518,nM=519,fm=35044,hm="300 es",vi=2e3,ou=2001;class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pm=1234567;const ko=Math.PI/180,ua=180/Math.PI;function to(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function Ch(t,e){return(t%e+e)%e}function iM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function rM(t,e,n){return t!==e?(n-t)/(e-t):0}function Bo(t,e,n){return(1-n)*t+n*e}function sM(t,e,n,i){return Bo(t,e,1-Math.exp(-n*i))}function oM(t,e=1){return e-Math.abs(Ch(t,e*2)-e)}function aM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function lM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function uM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function cM(t,e){return t+Math.random()*(e-t)}function dM(t){return t*(.5-Math.random())}function fM(t){t!==void 0&&(pm=t);let e=pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hM(t){return t*ko}function pM(t){return t*ua}function mM(t){return(t&t-1)===0&&t!==0}function gM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function _M(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*v,l*m,a*u);break;case"YXY":t.set(l*m,a*c,l*v,a*u);break;case"ZYZ":t.set(l*v,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const u0={DEG2RAD:ko,RAD2DEG:ua,generateUUID:to,clamp:$t,euclideanModulo:Ch,mapLinear:iM,inverseLerp:rM,lerp:Bo,damp:sM,pingpong:oM,smoothstep:aM,smootherstep:lM,randInt:uM,randFloat:cM,randFloatSpread:dM,seededRandom:fM,degToRad:hM,radToDeg:pM,isPowerOfTwo:mM,ceilPowerOfTwo:gM,floorPowerOfTwo:_M,setQuaternionFromProperEuler:vM,normalize:qt,denormalize:ds};class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],m=i[5],v=i[8],x=r[0],p=r[3],f=r[6],_=r[1],g=r[4],M=r[7],R=r[2],C=r[5],A=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*p+a*g+l*C,s[6]=o*f+a*M+l*A,s[1]=u*x+c*_+d*R,s[4]=u*p+c*g+d*C,s[7]=u*f+c*M+d*A,s[2]=h*x+m*_+v*R,s[5]=h*p+m*g+v*C,s[8]=h*f+m*M+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,m=u*s-o*l,v=n*d+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(uc.makeScale(e,n)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,n){return this.premultiply(uc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new He;function c0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ca(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xM(){const t=ca("canvas");return t.style.display="block",t}const mm={};function zo(t){t in mm||(mm[t]=!0,console.warn(t))}function yM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const gm=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_m=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),po={[ur]:{transfer:iu,primaries:ru,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Zn]:{transfer:at,primaries:ru,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pu]:{transfer:iu,primaries:su,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(_m),fromReference:t=>t.applyMatrix3(gm)},[Ah]:{transfer:at,primaries:su,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(_m),fromReference:t=>t.applyMatrix3(gm).convertLinearToSRGB()}},SM=new Set([ur,Pu]),et={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!SM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=po[e].toReference,r=po[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return po[t].primaries},getTransfer:function(t){return t===zi?iu:po[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(po[e].luminanceCoefficients)}};function Fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class EM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=ca("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ca("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fs(n[i]/255)*255):n[i]=Fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MM=0;class d0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dc(r[o].image)):s.push(dc(r[o]))}else s=dc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?EM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wM=0;class en extends Vr{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=br,r=br,s=zn,o=Rr,a=Hn,l=wi,u=en.DEFAULT_ANISOTROPY,c=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=to(),this.name="",this.source=new d0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fd:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fd:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=qv;en.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],m=l[5],v=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,M=(m+1)/2,R=(f+1)/2,C=(c+h)/4,A=(d+x)/4,L=(v+p)/4;return g>M&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=A/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=L/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(d-x)/_,this.z=(h-c)/_,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TM extends Vr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new d0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends TM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class f0 extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AM extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||u!==m||c!==v){let p=1-a;const f=l*h+u*m+c*v+d*x,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const R=Math.sqrt(g),C=Math.atan2(R,f*_);p=Math.sin(p*C)/R,a=Math.sin(a*C)/R}const M=a*_;if(l=l*p+h*M,u=u*p+m*M,c=c*p+v*M,d=d*p+x*M,p===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=R,u*=R,c*=R,d*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+c*d+l*m-u*h,e[n+1]=l*v+c*h+u*d-a*m,e[n+2]=u*v+c*m+a*h-l*d,e[n+3]=c*v-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*m*v,this._y=u*m*d-h*c*v,this._z=u*c*v+h*m*d,this._w=u*c*d-h*m*v;break;case"YXZ":this._x=h*c*d+u*m*v,this._y=u*m*d-h*c*v,this._z=u*c*v-h*m*d,this._w=u*c*d+h*m*v;break;case"ZXY":this._x=h*c*d-u*m*v,this._y=u*m*d+h*c*v,this._z=u*c*v+h*m*d,this._w=u*c*d-h*m*v;break;case"ZYX":this._x=h*c*d-u*m*v,this._y=u*m*d+h*c*v,this._z=u*c*v-h*m*d,this._w=u*c*d+h*m*v;break;case"YZX":this._x=h*c*d+u*m*v,this._y=u*m*d+h*c*v,this._z=u*c*v-h*m*d,this._w=u*c*d-h*m*v;break;case"XZY":this._x=h*c*d-u*m*v,this._y=u*m*d-h*c*v,this._z=u*c*v+h*m*d,this._w=u*c*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fc=new N,vm=new ir;class va{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Ga.subVectors(this.max,mo),qr.subVectors(e.a,mo),Zr.subVectors(e.b,mo),Qr.subVectors(e.c,mo),Ri.subVectors(Zr,qr),Pi.subVectors(Qr,Zr),pr.subVectors(qr,Qr);let n=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-pr.z,pr.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,pr.z,0,-pr.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-pr.y,pr.x,0];return!hc(n,qr,Zr,Qr,Ga)||(n=[1,0,0,0,1,0,0,0,1],!hc(n,qr,Zr,Qr,Ga))?!1:(Wa.crossVectors(Ri,Pi),n=[Wa.x,Wa.y,Wa.z],hc(n,qr,Zr,Qr,Ga))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new N,new N,new N,new N,new N,new N,new N,new N],Un=new N,Va=new va,qr=new N,Zr=new N,Qr=new N,Ri=new N,Pi=new N,pr=new N,mo=new N,Ga=new N,Wa=new N,mr=new N;function hc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){mr.fromArray(t,s);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),u=n.dot(mr),c=i.dot(mr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const CM=new va,go=new N,pc=new N;class bh{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(pc)),this.expandByPoint(go.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new N,mc=new N,Xa=new N,Li=new N,gc=new N,ja=new N,_c=new N;class Rh{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mc.copy(e).add(n).multiplyScalar(.5),Xa.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(mc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xa),a=Li.dot(this.direction),l=-Li.dot(Xa),u=Li.lengthSq(),c=Math.abs(1-o*o);let d,h,m,v;if(c>0)if(d=o*l-a,h=o*a-l,v=s*c,d>=0)if(h>=-v)if(h<=v){const x=1/c;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(mc).addScaledVector(Xa,h),m}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){gc.subVectors(n,e),ja.subVectors(i,e),_c.crossVectors(gc,ja);let o=this.direction.dot(_c),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(ja.crossVectors(Li,ja));if(l<0)return null;const u=a*this.direction.dot(gc.cross(Li));if(u<0||l+u>o)return null;const c=-a*Li.dot(_c);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,u,c,d,h,m,v,x,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,h,m,v,x,p)}set(e,n,i,r,s,o,a,l,u,c,d,h,m,v,x,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=m,f[7]=v,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*d,v=a*c,x=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=m+v*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*d,v=u*c,x=u*d;n[0]=h+x*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=m*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*d,v=u*c,x=u*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*c,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*d,v=a*c,x=a*d;n[0]=l*c,n[4]=v*u-m,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=x-h*d,n[8]=v*d+m,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+x,n[5]=o*c,n[9]=m*d-v,n[2]=v*d-m,n[6]=a*c,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bM,e,RM)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Di.crossVectors(i,pn),Di.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Di.crossVectors(i,pn)),Di.normalize(),Ya.crossVectors(pn,Di),r[0]=Di.x,r[4]=Ya.x,r[8]=pn.x,r[1]=Di.y,r[5]=Ya.y,r[9]=pn.y,r[2]=Di.z,r[6]=Ya.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],m=i[13],v=i[2],x=i[6],p=i[10],f=i[14],_=i[3],g=i[7],M=i[11],R=i[15],C=r[0],A=r[4],L=r[8],T=r[12],S=r[1],D=r[5],j=r[9],V=r[13],$=r[2],Q=r[6],X=r[10],te=r[14],I=r[3],K=r[7],Z=r[11],le=r[15];return s[0]=o*C+a*S+l*$+u*I,s[4]=o*A+a*D+l*Q+u*K,s[8]=o*L+a*j+l*X+u*Z,s[12]=o*T+a*V+l*te+u*le,s[1]=c*C+d*S+h*$+m*I,s[5]=c*A+d*D+h*Q+m*K,s[9]=c*L+d*j+h*X+m*Z,s[13]=c*T+d*V+h*te+m*le,s[2]=v*C+x*S+p*$+f*I,s[6]=v*A+x*D+p*Q+f*K,s[10]=v*L+x*j+p*X+f*Z,s[14]=v*T+x*V+p*te+f*le,s[3]=_*C+g*S+M*$+R*I,s[7]=_*A+g*D+M*Q+R*K,s[11]=_*L+g*j+M*X+R*Z,s[15]=_*T+g*V+M*te+R*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],m=e[14],v=e[3],x=e[7],p=e[11],f=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+p*(+n*u*d-n*a*m-s*o*d+i*o*m+s*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],m=e[11],v=e[12],x=e[13],p=e[14],f=e[15],_=d*p*u-x*h*u+x*l*m-a*p*m-d*l*f+a*h*f,g=v*h*u-c*p*u-v*l*m+o*p*m+c*l*f-o*h*f,M=c*x*u-v*d*u+v*a*m-o*x*m-c*a*f+o*d*f,R=v*d*l-c*x*l-v*a*h+o*x*h+c*a*p-o*d*p,C=n*_+i*g+r*M+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*f-i*h*f)*A,e[2]=(a*p*s-x*l*s+x*r*u-i*p*u-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*m-i*l*m)*A,e[4]=g*A,e[5]=(c*p*s-v*h*s+v*r*m-n*p*m-c*r*f+n*h*f)*A,e[6]=(v*l*s-o*p*s-v*r*u+n*p*u+o*r*f-n*l*f)*A,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*m+n*l*m)*A,e[8]=M*A,e[9]=(v*d*s-c*x*s-v*i*m+n*x*m+c*i*f-n*d*f)*A,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*f+n*a*f)*A,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*m-n*a*m)*A,e[12]=R*A,e[13]=(c*x*r-v*d*r+v*i*h-n*x*h-c*i*p+n*d*p)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*p-n*a*p)*A,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,h=s*u,m=s*c,v=s*d,x=o*c,p=o*d,f=a*d,_=l*u,g=l*c,M=l*d,R=i.x,C=i.y,A=i.z;return r[0]=(1-(x+f))*R,r[1]=(m+M)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(h+f))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(v+g)*A,r[9]=(p-_)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,c=1/o,d=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=c,Nn.elements[5]*=c,Nn.elements[6]*=c,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(a===vi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ou)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-s),h=(n+e)*u,m=(i+r)*c;let v,x;if(a===vi)v=(o+s)*d,x=-2*d;else if(a===ou)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new N,Nn=new pt,bM=new N(0,0,0),RM=new N(1,1,1),Di=new N,Ya=new N,pn=new N,xm=new pt,ym=new ir;class Xn{constructor(e=0,n=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PM=0;const Sm=new N,es=new ir,ui=new pt,$a=new N,_o=new N,LM=new N,DM=new ir,Em=new N(1,0,0),Mm=new N(0,1,0),wm=new N(0,0,1),Tm={type:"added"},IM={type:"removed"},ts={type:"childadded",child:null},vc={type:"childremoved",child:null};class tn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new N,n=new Xn,i=new ir,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new He}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Em,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,n){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Em,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(_o,$a,this.up):ui.lookAt($a,_o,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),es.setFromRotationMatrix(ui),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IM),vc.child=e,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,LM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,DM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new N(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new N,ci=new N,xc=new N,di=new N,ns=new N,is=new N,Am=new N,yc=new N,Sc=new N,Ec=new N;class ti{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),ci.subVectors(i,n),xc.subVectors(e,n);const o=On.dot(On),a=On.dot(ci),l=On.dot(xc),u=ci.dot(ci),c=ci.dot(xc),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),ci.subVectors(e,n),On.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),On.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ns.subVectors(r,i),is.subVectors(s,i),yc.subVectors(e,i);const l=ns.dot(yc),u=is.dot(yc);if(l<=0&&u<=0)return n.copy(i);Sc.subVectors(e,r);const c=ns.dot(Sc),d=is.dot(Sc);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ns,o);Ec.subVectors(e,s);const m=ns.dot(Ec),v=is.dot(Ec);if(v>=0&&m<=v)return n.copy(s);const x=m*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(is,a);const p=c*v-m*d;if(p<=0&&d-c>=0&&m-v>=0)return Am.subVectors(s,r),a=(d-c)/(d-c+(m-v)),n.copy(r).addScaledVector(Am,a);const f=1/(p+x+h);return o=x*f,a=h*f,n.copy(i).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Mc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let qe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Ch(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Mc(o,s,e+1/3),this.g=Mc(o,s,e),this.b=Mc(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=h0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return et.fromWorkingColorSpace(jt.copy(this),e),Math.round($t(jt.r*255,0,255))*65536+Math.round($t(jt.g*255,0,255))*256+Math.round($t(jt.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Zn){et.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Ka);const i=Bo(Ii.h,Ka.h,n),r=Bo(Ii.s,Ka.s,n),s=Bo(Ii.l,Ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const jt=new qe;qe.NAMES=h0;let UM=0;class xa extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Ns,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Ud,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=nu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Id&&(i.blendSrc=this.blendSrc),this.blendDst!==Ud&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class au extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new N,qa=new Pe;class ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qa.fromBufferAttribute(this,n),qa.applyMatrix3(e),this.setXY(n,qa.x,qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fm&&(e.usage=this.usage),e}}class p0 extends ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class m0 extends ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class si extends ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NM=0;const wn=new pt,wc=new tn,rs=new N,mn=new va,vo=new va,Ut=new N;class cr extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?m0:p0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new si(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(mn.min,vo.min),mn.expandByPoint(Ut),Ut.addVectors(mn.max,vo.max),mn.expandByPoint(Ut)):(mn.expandByPoint(vo.min),mn.expandByPoint(vo.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ut.fromBufferAttribute(a,u),l&&(rs.fromBufferAttribute(e,u),Ut.add(rs)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new N,l[L]=new N;const u=new N,c=new N,d=new N,h=new Pe,m=new Pe,v=new Pe,x=new N,p=new N;function f(L,T,S){u.fromBufferAttribute(i,L),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,L),m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,S),c.sub(u),d.sub(u),m.sub(h),v.sub(h);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(x.copy(c).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(D),p.copy(d).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(D),a[L].add(x),a[T].add(x),a[S].add(x),l[L].add(p),l[T].add(p),l[S].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,T=_.length;L<T;++L){const S=_[L],D=S.start,j=S.count;for(let V=D,$=D+j;V<$;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const g=new N,M=new N,R=new N,C=new N;function A(L){R.fromBufferAttribute(r,L),C.copy(R);const T=a[L];g.copy(T),g.sub(R.multiplyScalar(R.dot(T))).normalize(),M.crossVectors(C,T);const D=M.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,D)}for(let L=0,T=_.length;L<T;++L){const S=_[L],D=S.start,j=S.count;for(let V=D,$=D+j;V<$;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,d=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*c;for(let f=0;f<c;f++)h[v++]=u[m++]}return new ri(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,m=d.length;h<m;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cm=new pt,gr=new Rh,Za=new bh,bm=new N,ss=new N,os=new N,as=new N,Tc=new N,Qa=new N,Ja=new Pe,el=new Pe,tl=new Pe,Rm=new N,Pm=new N,Lm=new N,nl=new N,il=new N;class on extends tn{constructor(e=new cr,n=new au){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Tc.fromBufferAttribute(d,e),o?Qa.addScaledVector(Tc,c):Qa.addScaledVector(Tc.sub(n),c))}n.add(Qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Za.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Za,bm)===null||gr.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Cm.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Cm),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],f=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,R=g;M<R;M+=3){const C=a.getX(M),A=a.getX(M+1),L=a.getX(M+2);r=rl(this,f,e,i,u,c,d,C,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,f=x;p<f;p+=3){const _=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=rl(this,o,e,i,u,c,d,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],f=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,R=g;M<R;M+=3){const C=M,A=M+1,L=M+2;r=rl(this,f,e,i,u,c,d,C,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,f=x;p<f;p+=3){const _=p,g=p+1,M=p+2;r=rl(this,o,e,i,u,c,d,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function OM(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===nr,a),l===null)return null;il.copy(a),il.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(il);return u<n.near||u>n.far?null:{distance:u,point:il.clone(),object:t}}function rl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ss),t.getVertexPosition(l,os),t.getVertexPosition(u,as);const c=OM(t,e,n,i,ss,os,as,nl);if(c){r&&(Ja.fromBufferAttribute(r,a),el.fromBufferAttribute(r,l),tl.fromBufferAttribute(r,u),c.uv=ti.getInterpolation(nl,ss,os,as,Ja,el,tl,new Pe)),s&&(Ja.fromBufferAttribute(s,a),el.fromBufferAttribute(s,l),tl.fromBufferAttribute(s,u),c.uv1=ti.getInterpolation(nl,ss,os,as,Ja,el,tl,new Pe)),o&&(Rm.fromBufferAttribute(o,a),Pm.fromBufferAttribute(o,l),Lm.fromBufferAttribute(o,u),c.normal=ti.getInterpolation(nl,ss,os,as,Rm,Pm,Lm,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new N,materialIndex:0};ti.getNormal(ss,os,as,d.normal),c.face=d}return c}class no extends cr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new si(u,3)),this.setAttribute("normal",new si(c,3)),this.setAttribute("uv",new si(d,2));function v(x,p,f,_,g,M,R,C,A,L,T){const S=M/A,D=R/L,j=M/2,V=R/2,$=C/2,Q=A+1,X=L+1;let te=0,I=0;const K=new N;for(let Z=0;Z<X;Z++){const le=Z*D-V;for(let we=0;we<Q;we++){const We=we*S-j;K[x]=We*_,K[p]=le*g,K[f]=$,u.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[f]=C>0?1:-1,c.push(K.x,K.y,K.z),d.push(we/A),d.push(1-Z/L),te+=1}}for(let Z=0;Z<L;Z++)for(let le=0;le<A;le++){const we=h+le+Q*Z,We=h+le+Q*(Z+1),Y=h+(le+1)+Q*(Z+1),se=h+(le+1)+Q*Z;l.push(we,We,se),l.push(We,Y,se),I+=6}a.addGroup(m,I,T),m+=I,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function FM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function g0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const kM={clone:Ks,merge:Zt};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _0 extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new N,Dm=new Pe,Im=new Pe;class _n extends _0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,Dm,Im),n.subVectors(Im,Dm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ko*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ls=-90,us=1;class HM extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(ls,us,e,n);r.layers=this.layers,this.add(r);const s=new _n(ls,us,e,n);s.layers=this.layers,this.add(s);const o=new _n(ls,us,e,n);o.layers=this.layers,this.add(o);const a=new _n(ls,us,e,n);a.layers=this.layers,this.add(a);const l=new _n(ls,us,e,n);l.layers=this.layers,this.add(l);const u=new _n(ls,us,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ou)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class v0 extends en{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VM extends Br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new v0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new no(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Qi});s.uniforms.tEquirect.value=n;const o=new on(r,s),a=n.minFilter;return n.minFilter===Rr&&(n.minFilter=zn),new HM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ac=new N,GM=new N,WM=new He;class Fi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ac.subVectors(i,n).cross(GM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ac),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WM.getNormalMatrix(e),r=this.coplanarPoint(Ac).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new bh,sl=new N;class Lh{constructor(e=new Fi,n=new Fi,i=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],f=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-u,p-m,M-f).normalize(),i[1].setComponents(l+s,h+u,p+m,M+f).normalize(),i[2].setComponents(l+o,h+c,p+v,M+_).normalize(),i[3].setComponents(l-o,h-c,p-v,M-_).normalize(),i[4].setComponents(l-a,h-d,p-x,M-g).normalize(),n===vi)i[5].setComponents(l+a,h+d,p+x,M+g).normalize();else if(n===ou)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sl.x=r.normal.x>0?e.max.x:e.min.x,sl.y=r.normal.y>0?e.max.y:e.min.y,sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function x0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function XM(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),d.count===-1&&h.length===0&&t.bufferSubData(u,0,c),h.length!==0){for(let m=0,v=h.length;m<v;m++){const x=h[m];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class ya extends cr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,m=[],v=[],x=[],p=[];for(let f=0;f<c;f++){const _=f*h-o;for(let g=0;g<u;g++){const M=g*d-s;v.push(M,-_,0),x.push(0,0,1),p.push(g/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+u*f,M=_+u*(f+1),R=_+1+u*(f+1),C=_+1+u*f;m.push(g,M,C),m.push(M,R,C)}this.setIndex(m),this.setAttribute("position",new si(v,3)),this.setAttribute("normal",new si(x,3)),this.setAttribute("uv",new si(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var jM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ew=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ow=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_w=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Aw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ow=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ww=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$w=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,S1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ST=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:jM,alphahash_pars_fragment:YM,alphamap_fragment:$M,alphamap_pars_fragment:KM,alphatest_fragment:qM,alphatest_pars_fragment:ZM,aomap_fragment:QM,aomap_pars_fragment:JM,batching_pars_vertex:ew,batching_vertex:tw,begin_vertex:nw,beginnormal_vertex:iw,bsdfs:rw,iridescence_fragment:sw,bumpmap_pars_fragment:ow,clipping_planes_fragment:aw,clipping_planes_pars_fragment:lw,clipping_planes_pars_vertex:uw,clipping_planes_vertex:cw,color_fragment:dw,color_pars_fragment:fw,color_pars_vertex:hw,color_vertex:pw,common:mw,cube_uv_reflection_fragment:gw,defaultnormal_vertex:_w,displacementmap_pars_vertex:vw,displacementmap_vertex:xw,emissivemap_fragment:yw,emissivemap_pars_fragment:Sw,colorspace_fragment:Ew,colorspace_pars_fragment:Mw,envmap_fragment:ww,envmap_common_pars_fragment:Tw,envmap_pars_fragment:Aw,envmap_pars_vertex:Cw,envmap_physical_pars_fragment:kw,envmap_vertex:bw,fog_vertex:Rw,fog_pars_vertex:Pw,fog_fragment:Lw,fog_pars_fragment:Dw,gradientmap_pars_fragment:Iw,lightmap_pars_fragment:Uw,lights_lambert_fragment:Nw,lights_lambert_pars_fragment:Ow,lights_pars_begin:Fw,lights_toon_fragment:Bw,lights_toon_pars_fragment:zw,lights_phong_fragment:Hw,lights_phong_pars_fragment:Vw,lights_physical_fragment:Gw,lights_physical_pars_fragment:Ww,lights_fragment_begin:Xw,lights_fragment_maps:jw,lights_fragment_end:Yw,logdepthbuf_fragment:$w,logdepthbuf_pars_fragment:Kw,logdepthbuf_pars_vertex:qw,logdepthbuf_vertex:Zw,map_fragment:Qw,map_pars_fragment:Jw,map_particle_fragment:e1,map_particle_pars_fragment:t1,metalnessmap_fragment:n1,metalnessmap_pars_fragment:i1,morphinstance_vertex:r1,morphcolor_vertex:s1,morphnormal_vertex:o1,morphtarget_pars_vertex:a1,morphtarget_vertex:l1,normal_fragment_begin:u1,normal_fragment_maps:c1,normal_pars_fragment:d1,normal_pars_vertex:f1,normal_vertex:h1,normalmap_pars_fragment:p1,clearcoat_normal_fragment_begin:m1,clearcoat_normal_fragment_maps:g1,clearcoat_pars_fragment:_1,iridescence_pars_fragment:v1,opaque_fragment:x1,packing:y1,premultiplied_alpha_fragment:S1,project_vertex:E1,dithering_fragment:M1,dithering_pars_fragment:w1,roughnessmap_fragment:T1,roughnessmap_pars_fragment:A1,shadowmap_pars_fragment:C1,shadowmap_pars_vertex:b1,shadowmap_vertex:R1,shadowmask_pars_fragment:P1,skinbase_vertex:L1,skinning_pars_vertex:D1,skinning_vertex:I1,skinnormal_vertex:U1,specularmap_fragment:N1,specularmap_pars_fragment:O1,tonemapping_fragment:F1,tonemapping_pars_fragment:k1,transmission_fragment:B1,transmission_pars_fragment:z1,uv_pars_fragment:H1,uv_pars_vertex:V1,uv_vertex:G1,worldpos_vertex:W1,background_vert:X1,background_frag:j1,backgroundCube_vert:Y1,backgroundCube_frag:$1,cube_vert:K1,cube_frag:q1,depth_vert:Z1,depth_frag:Q1,distanceRGBA_vert:J1,distanceRGBA_frag:eT,equirect_vert:tT,equirect_frag:nT,linedashed_vert:iT,linedashed_frag:rT,meshbasic_vert:sT,meshbasic_frag:oT,meshlambert_vert:aT,meshlambert_frag:lT,meshmatcap_vert:uT,meshmatcap_frag:cT,meshnormal_vert:dT,meshnormal_frag:fT,meshphong_vert:hT,meshphong_frag:pT,meshphysical_vert:mT,meshphysical_frag:gT,meshtoon_vert:_T,meshtoon_frag:vT,points_vert:xT,points_frag:yT,shadow_vert:ST,shadow_frag:ET,sprite_vert:MT,sprite_frag:wT},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Qn={basic:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Zt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Zt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Zt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Zt([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Zt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Qn.physical={uniforms:Zt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const ol={r:0,b:0,g:0},vr=new Xn,TT=new pt;function AT(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,d=null,h=0,m=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function x(_){let g=!1;const M=v(_);M===null?f(a,l):M&&M.isColor&&(f(M,1),g=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===Ru)?(c===void 0&&(c=new on(new no(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Ks(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),vr.copy(g.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(vr)),c.material.toneMapped=et.getTransfer(M.colorSpace)!==at,(d!==M||h!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new on(new ya(2,2),new rr({name:"BackgroundMaterial",uniforms:Ks(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=et.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function f(_,g){_.getRGB(ol,g0(t)),i.buffers.color.setClear(ol.r,ol.g,ol.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:p}}function CT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,j,V,$){let Q=!1;const X=d(V,j,D);s!==X&&(s=X,u(s.object)),Q=m(S,V,j,$),Q&&v(S,V,j,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(S,D,j,V),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function d(S,D,j){const V=j.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let Q=$[D.id];Q===void 0&&(Q={},$[D.id]=Q);let X=Q[V];return X===void 0&&(X=h(l()),Q[V]=X),X}function h(S){const D=[],j=[],V=[];for(let $=0;$<n;$++)D[$]=0,j[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:j,attributeDivisors:V,object:S,attributes:{},index:null}}function m(S,D,j,V){const $=s.attributes,Q=D.attributes;let X=0;const te=j.getAttributes();for(const I in te)if(te[I].location>=0){const Z=$[I];let le=Q[I];if(le===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;X++}return s.attributesNum!==X||s.index!==V}function v(S,D,j,V){const $={},Q=D.attributes;let X=0;const te=j.getAttributes();for(const I in te)if(te[I].location>=0){let Z=Q[I];Z===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),$[I]=le,X++}s.attributes=$,s.attributesNum=X,s.index=V}function x(){const S=s.newAttributes;for(let D=0,j=S.length;D<j;D++)S[D]=0}function p(S){f(S,0)}function f(S,D){const j=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;j[S]=1,V[S]===0&&(t.enableVertexAttribArray(S),V[S]=1),$[S]!==D&&(t.vertexAttribDivisor(S,D),$[S]=D)}function _(){const S=s.newAttributes,D=s.enabledAttributes;for(let j=0,V=D.length;j<V;j++)D[j]!==S[j]&&(t.disableVertexAttribArray(j),D[j]=0)}function g(S,D,j,V,$,Q,X){X===!0?t.vertexAttribIPointer(S,D,j,$,Q):t.vertexAttribPointer(S,D,j,V,$,Q)}function M(S,D,j,V){x();const $=V.attributes,Q=j.getAttributes(),X=D.defaultAttributeValues;for(const te in Q){const I=Q[te];if(I.location>=0){let K=$[te];if(K===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const Z=K.normalized,le=K.itemSize,we=e.get(K);if(we===void 0)continue;const We=we.buffer,Y=we.type,se=we.bytesPerElement,de=Y===t.INT||Y===t.UNSIGNED_INT||K.gpuType===yh;if(K.isInterleavedBufferAttribute){const fe=K.data,Fe=fe.stride,Be=K.offset;if(fe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<I.locationSize;Ve++)f(I.location+Ve,fe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ve=0;Ve<I.locationSize;Ve++)p(I.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Ve=0;Ve<I.locationSize;Ve++)g(I.location+Ve,le/I.locationSize,Y,Z,Fe*se,(Be+le/I.locationSize*Ve)*se,de)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<I.locationSize;fe++)f(I.location+fe,K.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<I.locationSize;fe++)p(I.location+fe);t.bindBuffer(t.ARRAY_BUFFER,We);for(let fe=0;fe<I.locationSize;fe++)g(I.location+fe,le/I.locationSize,Y,Z,le*se,le/I.locationSize*fe*se,de)}}else if(X!==void 0){const Z=X[te];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(I.location,Z);break;case 3:t.vertexAttrib3fv(I.location,Z);break;case 4:t.vertexAttrib4fv(I.location,Z);break;default:t.vertexAttrib1fv(I.location,Z)}}}}_()}function R(){L();for(const S in i){const D=i[S];for(const j in D){const V=D[j];for(const $ in V)c(V[$].object),delete V[$];delete D[j]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const j in D){const V=D[j];for(const $ in V)c(V[$].object),delete V[$];delete D[j]}delete i[S.id]}function A(S){for(const D in i){const j=i[D];if(j[S.id]===void 0)continue;const V=j[S.id];for(const $ in V)c(V[$].object),delete V[$];delete j[S.id]}}function L(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function bT(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let m=0;for(let v=0;v<d;v++)m+=c[v];n.update(m,i,1)}function l(u,c,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)o(u[v],c[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=c[x];for(let x=0;x<h.length;x++)n.update(v,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Hn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const A=C===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==wi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_i&&!A)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:M,maxSamples:R}}function PT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,g=_*4;let M=f.clippingState||null;l.value=M,M=c(v,h,g,m);for(let R=0;R!==g;++R)M[R]=n[R];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const f=m+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,M=m;g!==x;++g,M+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function LT(t){let e=new WeakMap;function n(o,a){return a===Nd?o.mapping=Xs:a===Od&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nd||a===Od)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new VM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class DT extends _0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,Um=[.125,.215,.35,.446,.526,.582],wr=20,Cc=new DT,Nm=new qe;let bc=null,Rc=0,Pc=0,Lc=!1;const Er=(1+Math.sqrt(5))/2,cs=1/Er,Om=[new N(-Er,cs,0),new N(Er,cs,0),new N(-cs,0,Er),new N(cs,0,Er),new N(0,Er,-cs),new N(0,Er,cs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Rc,Pc),this._renderer.xr.enabled=Lc,e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:_a,format:Hn,colorSpace:ur,depthBuffer:!1},r=km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IT(s)),this._blurMaterial=UT(s,e,n)}return r}_compileMaterial(e){const n=new on(this._lodPlanes[0],e);this._renderer.compile(n,Cc)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Nm),c.toneMapping=Ji,c.autoClear=!1;const m=new au({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),v=new on(new no,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Nm),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;al(r,_*g,f>2?g:0,g,g),c.setRenderTarget(r),x&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Cc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Om[(r-s-1)%Om.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new on(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wr-1),x=s/v,p=isFinite(s)?1+Math.floor(c*x):wr;p>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wr}`);const f=[];let _=0;for(let A=0;A<wr;++A){const L=A/x,T=Math.exp(-L*L/2);f.push(T),A===0?_+=T:A<p&&(_+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const M=this._sizeLods[r],R=3*M*(r>g-As?r-g+As:0),C=4*(this._cubeSize-M);al(n,R,C,3*M,2*M),l.setRenderTarget(n),l.render(d,Cc)}}function IT(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+Um.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-As?l=Um[o-t+As-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,v=6,x=3,p=2,f=1,_=new Float32Array(x*v*m),g=new Float32Array(p*v*m),M=new Float32Array(f*v*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,L=C>2?0:-1,T=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];_.set(T,x*v*C),g.set(h,p*v*C);const S=[C,C,C,C,C,C];M.set(S,f*v*C)}const R=new cr;R.setAttribute("position",new ri(_,x)),R.setAttribute("uv",new ri(g,p)),R.setAttribute("faceIndex",new ri(M,f)),e.push(R),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function km(t,e,n){const i=new Br(t,e,n);return i.texture.mapping=Ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UT(t,e,n){const i=new Float32Array(wr),r=new N(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Bm(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function zm(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Nd||l===Od,c=l===Xs||l===js;if(u||c){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Fm(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&r(m)?(n===null&&(n=new Fm(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function OT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FT(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,f=x.length;p<f;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let g=0,M=_.length;g<M;g+=3){const R=_[g+0],C=_[g+1],A=_[g+2];h.push(R,C,C,A,A,R)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const R=g+0,C=g+1,A=g+2;h.push(R,C,C,A,A,R)}}else return;const p=new(c0(h)?m0:p0)(h,1);p.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function c(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function kT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function u(h,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,h*o,v),n.update(m,i,v))}function c(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,v);let p=0;for(let f=0;f<v;f++)p+=m[f];n.update(p,i,1)}function d(h,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)u(h[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,v);let f=0;for(let _=0;_<v;_++)f+=m[_];for(let _=0;_<x.length;_++)n.update(f,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function BT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zT(t,e,n){const i=new WeakMap,r=new lt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let T=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let g=0;m===!0&&(g=1),v===!0&&(g=2),x===!0&&(g=3);let M=a.attributes.position.count*g,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*R*4*d),A=new f0(C,M,R,d);A.type=_i,A.needsUpdate=!0;const L=g*4;for(let S=0;S<d;S++){const D=p[S],j=f[S],V=_[S],$=M*R*4*S;for(let Q=0;Q<D.count;Q++){const X=Q*L;m===!0&&(r.fromBufferAttribute(D,Q),C[$+X+0]=r.x,C[$+X+1]=r.y,C[$+X+2]=r.z,C[$+X+3]=0),v===!0&&(r.fromBufferAttribute(j,Q),C[$+X+4]=r.x,C[$+X+5]=r.y,C[$+X+6]=r.z,C[$+X+7]=0),x===!0&&(r.fromBufferAttribute(V,Q),C[$+X+8]=r.x,C[$+X+9]=r.y,C[$+X+10]=r.z,C[$+X+11]=V.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new Pe(M,R)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let x=0;x<u.length;x++)m+=u[x];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function HT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class y0 extends en{constructor(e,n,i,r,s,o,a,l,u,c=Os){if(c!==Os&&c!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Os&&(i=kr),i===void 0&&c===$s&&(i=Ys),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const S0=new en,Hm=new y0(1,1),E0=new f0,M0=new AM,w0=new v0,Vm=[],Gm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),jm=new Float32Array(4);function io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vm[r];if(s===void 0&&(s=new Float32Array(r),Vm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lu(t,e){let n=Gm[e];n===void 0&&(n=new Int32Array(e),Gm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function VT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function jT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;jm.set(i),t.uniformMatrix2fv(this.addr,!1,jm),It(n,i)}}function YT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Xm.set(i),t.uniformMatrix3fv(this.addr,!1,Xm),It(n,i)}}function $T(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Wm.set(i),t.uniformMatrix4fv(this.addr,!1,Wm),It(n,i)}}function KT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function JT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function iA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Hm.compareFunction=l0,s=Hm):s=S0,n.setTexture2D(e||s,r)}function rA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||M0,r)}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||w0,r)}function oA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||E0,r)}function aA(t){switch(t){case 5126:return VT;case 35664:return GT;case 35665:return WT;case 35666:return XT;case 35674:return jT;case 35675:return YT;case 35676:return $T;case 5124:case 35670:return KT;case 35667:case 35671:return qT;case 35668:case 35672:return ZT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return oA}}function lA(t,e){t.uniform1fv(this.addr,e)}function uA(t,e){const n=io(e,this.size,2);t.uniform2fv(this.addr,n)}function cA(t,e){const n=io(e,this.size,3);t.uniform3fv(this.addr,n)}function dA(t,e){const n=io(e,this.size,4);t.uniform4fv(this.addr,n)}function fA(t,e){const n=io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hA(t,e){const n=io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pA(t,e){const n=io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mA(t,e){t.uniform1iv(this.addr,e)}function gA(t,e){t.uniform2iv(this.addr,e)}function _A(t,e){t.uniform3iv(this.addr,e)}function vA(t,e){t.uniform4iv(this.addr,e)}function xA(t,e){t.uniform1uiv(this.addr,e)}function yA(t,e){t.uniform2uiv(this.addr,e)}function SA(t,e){t.uniform3uiv(this.addr,e)}function EA(t,e){t.uniform4uiv(this.addr,e)}function MA(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||S0,s[o])}function wA(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||M0,s[o])}function TA(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||w0,s[o])}function AA(t,e,n){const i=this.cache,r=e.length,s=Lu(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||E0,s[o])}function CA(t){switch(t){case 5126:return lA;case 35664:return uA;case 35665:return cA;case 35666:return dA;case 35674:return fA;case 35675:return hA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return _A;case 35669:case 35673:return vA;case 5125:return xA;case 36294:return yA;case 36295:return SA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return AA}}class bA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aA(n.type)}}class RA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CA(n.type)}}class PA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Dc=/(\w+)(\])?(\[|\.)?/g;function Ym(t,e){t.seq.push(e),t.map[e.id]=e}function LA(t,e,n){const i=t.name,r=i.length;for(Dc.lastIndex=0;;){const s=Dc.exec(i),o=Dc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ym(n,u===void 0?new bA(a,t,e):new RA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new PA(a),Ym(n,d)),n=d}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);LA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function $m(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DA=37297;let IA=0;function UA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function NA(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===su&&n===ru?i="LinearDisplayP3ToLinearSRGB":e===ru&&n===su&&(i="LinearSRGBToLinearDisplayP3"),t){case ur:case Pu:return[i,"LinearTransferOETF"];case Zn:case Ah:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Km(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+UA(t.getShaderSource(e),o)}else return r}function OA(t,e){const n=NA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function FA(t,e){let n;switch(e){case BE:n="Linear";break;case zE:n="Reinhard";break;case HE:n="OptimizedCineon";break;case VE:n="ACESFilmic";break;case WE:n="AgX";break;case XE:n="Neutral";break;case GE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ll=new N;function kA(){et.getLuminanceCoefficients(ll);const t=ll.x.toFixed(4),e=ll.y.toFixed(4),n=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function zA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function HA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function qm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(t){return t.replace(VA,WA)}const GA=new Map;function WA(t,e){let n=ze[e];if(n===void 0){const i=GA.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(n)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(t){return t.replace(XA,jA)}function jA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Kv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function $A(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function qA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case xh:e="ENVMAP_BLENDING_MULTIPLY";break;case FE:e="ENVMAP_BLENDING_MIX";break;case kE:e="ENVMAP_BLENDING_ADD";break}return e}function ZA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=YA(n),u=$A(n),c=KA(n),d=qA(n),h=ZA(n),m=BA(n),v=zA(s),x=r.createProgram();let p,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Co).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Co).join(`
`),f.length>0&&(f+=`
`)):(p=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),f=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ji?FA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,OA("linearToOutputTexel",n.outputColorSpace),kA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=ff(o),o=qm(o,n),o=Zm(o,n),a=ff(a),a=qm(a,n),a=Zm(a,n),o=Qm(o),a=Qm(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+p+o,M=_+f+a,R=$m(r,r.VERTEX_SHADER,g),C=$m(r,r.FRAGMENT_SHADER,M);r.attachShader(x,R),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(D){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(C).trim();let Q=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,C);else{const te=Km(r,R,"vertex"),I=Km(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+te+`
`+I)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||$==="")&&(X=!1);X&&(D.diagnostics={runnable:Q,programLog:j,vertexShader:{log:V,prefix:p},fragmentShader:{log:$,prefix:f}})}r.deleteShader(R),r.deleteShader(C),L=new Pl(r,x),T=HA(r,x)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,DA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=C,this}let JA=0;class eC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tC(e),n.set(e,i)),i}}class tC{constructor(e){this.id=JA++,this.code=e,this.usedTimes=0}}function nC(t,e,n,i,r,s,o){const a=new Ph,l=new eC,u=new Set,c=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function p(T,S,D,j,V){const $=j.fog,Q=V.geometry,X=T.isMeshStandardMaterial?j.environment:null,te=(T.isMeshStandardMaterial?n:e).get(T.envMap||X),I=te&&te.mapping===Ru?te.image.height:null,K=v[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const Z=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,le=Z!==void 0?Z.length:0;let we=0;Q.morphAttributes.position!==void 0&&(we=1),Q.morphAttributes.normal!==void 0&&(we=2),Q.morphAttributes.color!==void 0&&(we=3);let We,Y,se,de;if(K){const je=Qn[K];We=je.vertexShader,Y=je.fragmentShader}else We=T.vertexShader,Y=T.fragmentShader,l.update(T),se=l.getVertexShaderID(T),de=l.getFragmentShaderID(T);const fe=t.getRenderTarget(),Fe=V.isInstancedMesh===!0,Be=V.isBatchedMesh===!0,Ve=!!T.map,st=!!T.matcap,P=!!te,gt=!!T.aoMap,$e=!!T.lightMap,Ke=!!T.bumpMap,Ee=!!T.normalMap,_t=!!T.displacementMap,Ue=!!T.emissiveMap,Oe=!!T.metalnessMap,b=!!T.roughnessMap,E=T.anisotropy>0,G=T.clearcoat>0,ee=T.dispersion>0,ie=T.iridescence>0,J=T.sheen>0,Ae=T.transmission>0,ue=E&&!!T.anisotropyMap,pe=G&&!!T.clearcoatMap,ke=G&&!!T.clearcoatNormalMap,oe=G&&!!T.clearcoatRoughnessMap,me=ie&&!!T.iridescenceMap,Xe=ie&&!!T.iridescenceThicknessMap,be=J&&!!T.sheenColorMap,ve=J&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Ne=!!T.specularColorMap,ct=!!T.specularIntensityMap,y=Ae&&!!T.transmissionMap,F=Ae&&!!T.thicknessMap,k=!!T.gradientMap,W=!!T.alphaMap,ne=T.alphaTest>0,Me=!!T.alphaHash,De=!!T.extensions;let St=Ji;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(St=t.toneMapping);const Ct={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:We,fragmentShader:Y,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:de,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Be,batchingColor:Be&&V._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&V.instanceColor!==null,instancingMorph:Fe&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ur,alphaToCoverage:!!T.alphaToCoverage,map:Ve,matcap:st,envMap:P,envMapMode:P&&te.mapping,envMapCubeUVHeight:I,aoMap:gt,lightMap:$e,bumpMap:Ke,normalMap:Ee,displacementMap:h&&_t,emissiveMap:Ue,normalMapObjectSpace:Ee&&T.normalMapType===KE,normalMapTangentSpace:Ee&&T.normalMapType===a0,metalnessMap:Oe,roughnessMap:b,anisotropy:E,anisotropyMap:ue,clearcoat:G,clearcoatMap:pe,clearcoatNormalMap:ke,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ie,iridescenceMap:me,iridescenceThicknessMap:Xe,sheen:J,sheenColorMap:be,sheenRoughnessMap:ve,specularMap:Le,specularColorMap:Ne,specularIntensityMap:ct,transmission:Ae,transmissionMap:y,thicknessMap:F,gradientMap:k,opaque:T.transparent===!1&&T.blending===Ns&&T.alphaToCoverage===!1,alphaMap:W,alphaTest:ne,alphaHash:Me,combine:T.combine,mapUv:Ve&&x(T.map.channel),aoMapUv:gt&&x(T.aoMap.channel),lightMapUv:$e&&x(T.lightMap.channel),bumpMapUv:Ke&&x(T.bumpMap.channel),normalMapUv:Ee&&x(T.normalMap.channel),displacementMapUv:_t&&x(T.displacementMap.channel),emissiveMapUv:Ue&&x(T.emissiveMap.channel),metalnessMapUv:Oe&&x(T.metalnessMap.channel),roughnessMapUv:b&&x(T.roughnessMap.channel),anisotropyMapUv:ue&&x(T.anisotropyMap.channel),clearcoatMapUv:pe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(T.sheenRoughnessMap.channel),specularMapUv:Le&&x(T.specularMap.channel),specularColorMapUv:Ne&&x(T.specularColorMap.channel),specularIntensityMapUv:ct&&x(T.specularIntensityMap.channel),transmissionMapUv:y&&x(T.transmissionMap.channel),thicknessMapUv:F&&x(T.thicknessMap.channel),alphaMapUv:W&&x(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ee||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(Ve||W),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:Ve&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===at,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ei,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ct.vertexUv1s=u.has(1),Ct.vertexUv2s=u.has(2),Ct.vertexUv3s=u.has(3),u.clear(),Ct}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)S.push(D),S.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(_(S,T),g(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function g(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function M(T){const S=v[T.type];let D;if(S){const j=Qn[S];D=kM.clone(j.uniforms)}else D=T.uniforms;return D}function R(T,S){let D;for(let j=0,V=c.length;j<V;j++){const $=c[j];if($.cacheKey===S){D=$,++D.usedTimes;break}}return D===void 0&&(D=new QA(t,S,T,s),c.push(D)),D}function C(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function A(T){l.remove(T)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:L}}function iC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function rC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function eg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function tg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,v,x,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=x,f.group=p),e++,f}function a(d,h,m,v,x,p){const f=o(d,h,m,v,x,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,v,x,p){const f=o(d,h,m,v,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||rC),i.length>1&&i.sort(h||eg),r.length>1&&r.sort(h||eg)}function c(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function sC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new tg,t.set(i,[o])):r>=s.length?(o=new tg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function oC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new qe};break;case"SpotLight":n={position:new N,direction:new N,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function aC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lC=0;function uC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cC(t){const e=new oC,n=aC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new pt,o=new pt;function a(u){let c=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,v=0,x=0,p=0,f=0,_=0,g=0,M=0,R=0,C=0,A=0;u.sort(uC);for(let T=0,S=u.length;T<S;T++){const D=u[T],j=D.color,V=D.intensity,$=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=j.r*V,d+=j.g*V,h+=j.b*V;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],V);A++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,I=n.get(D);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=D.shadow.matrix,_++}i.directional[m]=X,m++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(j).multiplyScalar(V),X.distance=$,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[x]=X;const te=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,te.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[x]=te.matrix,D.castShadow){const I=n.get(D);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=Q,M++}x++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(j).multiplyScalar(V),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=X,p++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const te=D.shadow,I=n.get(D);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,I.shadowCameraNear=te.camera.near,I.shadowCameraFar=te.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=D.shadow.matrix,g++}i.point[v]=X,v++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(V),X.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[f]=X,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==v||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==f||L.numDirectionalShadows!==_||L.numPointShadows!==g||L.numSpotShadows!==M||L.numSpotMaps!==R||L.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,L.directionalLength=m,L.pointLength=v,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=f,L.numDirectionalShadows=_,L.numPointShadows=g,L.numSpotShadows=M,L.numSpotMaps=R,L.numLightProbes=A,i.version=lC++)}function l(u,c){let d=0,h=0,m=0,v=0,x=0;const p=c.matrixWorldInverse;for(let f=0,_=u.length;f<_;f++){const g=u[f];if(g.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(g.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),h++}else if(g.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function ng(t){const e=new cC(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ng(t),e.set(r,[a])):s>=o.length?(a=new ng(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class fC extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hC extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gC(t,e,n){let i=new Lh;const r=new Pe,s=new Pe,o=new lt,a=new fC({depthPacking:$E}),l=new hC,u={},c=n.maxTextureSize,d={[nr]:dn,[dn]:nr,[ei]:ei},h=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:pC,fragmentShader:mC}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new cr;v.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new on(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kv;let f=this.type;this.render=function(C,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Qi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=f!==fi&&this.type===fi,$=f===fi&&this.type!==fi;for(let Q=0,X=C.length;Q<X;Q++){const te=C[Q],I=te.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||V===!0||$===!0){const le=this.type!==fi?{minFilter:bn,magFilter:bn}:{};I.map!==null&&I.map.dispose(),I.map=new Br(r.x,r.y,le),I.map.texture.name=te.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Z=I.getViewportCount();for(let le=0;le<Z;le++){const we=I.getViewport(le);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),j.viewport(o),I.updateMatrices(te,le),i=I.getFrustum(),M(A,L,I.camera,te,this.type)}I.isPointLightShadow!==!0&&this.type===fi&&_(I,L),I.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(T,S,D)};function _(C,A){const L=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Br(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,L,h,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,L,m,x,null)}function g(C,A,L,T){let S=null;const D=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const j=S.uuid,V=A.uuid;let $=u[j];$===void 0&&($={},u[j]=$);let Q=$[V];Q===void 0&&(Q=S.clone(),$[V]=Q,A.addEventListener("dispose",R)),S=Q}if(S.visible=A.visible,S.wireframe=A.wireframe,T===fi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=t.properties.get(S);j.light=L}return S}function M(C,A,L,T,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===fi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const V=e.update(C),$=C.material;if(Array.isArray($)){const Q=V.groups;for(let X=0,te=Q.length;X<te;X++){const I=Q[X],K=$[I.materialIndex];if(K&&K.visible){const Z=g(C,K,T,S);C.onBeforeShadow(t,C,A,L,V,Z,I),t.renderBufferDirect(L,null,V,Z,C,I),C.onAfterShadow(t,C,A,L,V,Z,I)}}}else if($.visible){const Q=g(C,$,T,S);C.onBeforeShadow(t,C,A,L,V,Q,null),t.renderBufferDirect(L,null,V,Q,C,null),C.onAfterShadow(t,C,A,L,V,Q,null)}}const j=C.children;for(let V=0,$=j.length;V<$;V++)M(j[V],A,L,T,S)}function R(C){C.target.removeEventListener("dispose",R);for(const L in u){const T=u[L],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function _C(t){function e(){let y=!1;const F=new lt;let k=null;const W=new lt(0,0,0,0);return{setMask:function(ne){k!==ne&&!y&&(t.colorMask(ne,ne,ne,ne),k=ne)},setLocked:function(ne){y=ne},setClear:function(ne,Me,De,St,Ct){Ct===!0&&(ne*=St,Me*=St,De*=St),F.set(ne,Me,De,St),W.equals(F)===!1&&(t.clearColor(ne,Me,De,St),W.copy(F))},reset:function(){y=!1,k=null,W.set(-1,0,0,0)}}}function n(){let y=!1,F=null,k=null,W=null;return{setTest:function(ne){ne?de(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(ne){F!==ne&&!y&&(t.depthMask(ne),F=ne)},setFunc:function(ne){if(k!==ne){switch(ne){case PE:t.depthFunc(t.NEVER);break;case LE:t.depthFunc(t.ALWAYS);break;case DE:t.depthFunc(t.LESS);break;case nu:t.depthFunc(t.LEQUAL);break;case IE:t.depthFunc(t.EQUAL);break;case UE:t.depthFunc(t.GEQUAL);break;case NE:t.depthFunc(t.GREATER);break;case OE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}k=ne}},setLocked:function(ne){y=ne},setClear:function(ne){W!==ne&&(t.clearDepth(ne),W=ne)},reset:function(){y=!1,F=null,k=null,W=null}}}function i(){let y=!1,F=null,k=null,W=null,ne=null,Me=null,De=null,St=null,Ct=null;return{setTest:function(je){y||(je?de(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(je){F!==je&&!y&&(t.stencilMask(je),F=je)},setFunc:function(je,bt,Mt){(k!==je||W!==bt||ne!==Mt)&&(t.stencilFunc(je,bt,Mt),k=je,W=bt,ne=Mt)},setOp:function(je,bt,Mt){(Me!==je||De!==bt||St!==Mt)&&(t.stencilOp(je,bt,Mt),Me=je,De=bt,St=Mt)},setLocked:function(je){y=je},setClear:function(je){Ct!==je&&(t.clearStencil(je),Ct=je)},reset:function(){y=!1,F=null,k=null,W=null,ne=null,Me=null,De=null,St=null,Ct=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,h=[],m=null,v=!1,x=null,p=null,f=null,_=null,g=null,M=null,R=null,C=new qe(0,0,0),A=0,L=!1,T=null,S=null,D=null,j=null,V=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,X=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(te)[1]),Q=X>=1):te.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Q=X>=2);let I=null,K={};const Z=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),we=new lt().fromArray(Z),We=new lt().fromArray(le);function Y(y,F,k,W){const ne=new Uint8Array(4),Me=t.createTexture();t.bindTexture(y,Me),t.texParameteri(y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<k;De++)y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY?t.texImage3D(F,0,t.RGBA,1,1,W,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(F+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return Me}const se={};se[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(nu),Ke(!1),Ee(am),de(t.CULL_FACE),gt(Qi);function de(y){u[y]!==!0&&(t.enable(y),u[y]=!0)}function fe(y){u[y]!==!1&&(t.disable(y),u[y]=!1)}function Fe(y,F){return c[y]!==F?(t.bindFramebuffer(y,F),c[y]=F,y===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=F),y===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=F),!0):!1}function Be(y,F){let k=h,W=!1;if(y){k=d.get(F),k===void 0&&(k=[],d.set(F,k));const ne=y.textures;if(k.length!==ne.length||k[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,De=ne.length;Me<De;Me++)k[Me]=t.COLOR_ATTACHMENT0+Me;k.length=ne.length,W=!0}}else k[0]!==t.BACK&&(k[0]=t.BACK,W=!0);W&&t.drawBuffers(k)}function Ve(y){return m!==y?(t.useProgram(y),m=y,!0):!1}const st={[Mr]:t.FUNC_ADD,[hE]:t.FUNC_SUBTRACT,[pE]:t.FUNC_REVERSE_SUBTRACT};st[mE]=t.MIN,st[gE]=t.MAX;const P={[_E]:t.ZERO,[vE]:t.ONE,[xE]:t.SRC_COLOR,[Id]:t.SRC_ALPHA,[TE]:t.SRC_ALPHA_SATURATE,[ME]:t.DST_COLOR,[SE]:t.DST_ALPHA,[yE]:t.ONE_MINUS_SRC_COLOR,[Ud]:t.ONE_MINUS_SRC_ALPHA,[wE]:t.ONE_MINUS_DST_COLOR,[EE]:t.ONE_MINUS_DST_ALPHA,[AE]:t.CONSTANT_COLOR,[CE]:t.ONE_MINUS_CONSTANT_COLOR,[bE]:t.CONSTANT_ALPHA,[RE]:t.ONE_MINUS_CONSTANT_ALPHA};function gt(y,F,k,W,ne,Me,De,St,Ct,je){if(y===Qi){v===!0&&(fe(t.BLEND),v=!1);return}if(v===!1&&(de(t.BLEND),v=!0),y!==fE){if(y!==x||je!==L){if((p!==Mr||g!==Mr)&&(t.blendEquation(t.FUNC_ADD),p=Mr,g=Mr),je)switch(y){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lm:t.blendFunc(t.ONE,t.ONE);break;case um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}f=null,_=null,M=null,R=null,C.set(0,0,0),A=0,x=y,L=je}return}ne=ne||F,Me=Me||k,De=De||W,(F!==p||ne!==g)&&(t.blendEquationSeparate(st[F],st[ne]),p=F,g=ne),(k!==f||W!==_||Me!==M||De!==R)&&(t.blendFuncSeparate(P[k],P[W],P[Me],P[De]),f=k,_=W,M=Me,R=De),(St.equals(C)===!1||Ct!==A)&&(t.blendColor(St.r,St.g,St.b,Ct),C.copy(St),A=Ct),x=y,L=!1}function $e(y,F){y.side===ei?fe(t.CULL_FACE):de(t.CULL_FACE);let k=y.side===dn;F&&(k=!k),Ke(k),y.blending===Ns&&y.transparent===!1?gt(Qi):gt(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const W=y.stencilWrite;o.setTest(W),W&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),Ue(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(y){T!==y&&(y?t.frontFace(t.CW):t.frontFace(t.CCW),T=y)}function Ee(y){y!==uE?(de(t.CULL_FACE),y!==S&&(y===am?t.cullFace(t.BACK):y===cE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),S=y}function _t(y){y!==D&&(Q&&t.lineWidth(y),D=y)}function Ue(y,F,k){y?(de(t.POLYGON_OFFSET_FILL),(j!==F||V!==k)&&(t.polygonOffset(F,k),j=F,V=k)):fe(t.POLYGON_OFFSET_FILL)}function Oe(y){y?de(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function b(y){y===void 0&&(y=t.TEXTURE0+$-1),I!==y&&(t.activeTexture(y),I=y)}function E(y,F,k){k===void 0&&(I===null?k=t.TEXTURE0+$-1:k=I);let W=K[k];W===void 0&&(W={type:void 0,texture:void 0},K[k]=W),(W.type!==y||W.texture!==F)&&(I!==k&&(t.activeTexture(k),I=k),t.bindTexture(y,F||se[y]),W.type=y,W.texture=F)}function G(){const y=K[I];y!==void 0&&y.type!==void 0&&(t.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Xe(){try{t.texImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function be(y){we.equals(y)===!1&&(t.scissor(y.x,y.y,y.z,y.w),we.copy(y))}function ve(y){We.equals(y)===!1&&(t.viewport(y.x,y.y,y.z,y.w),We.copy(y))}function Le(y,F){let k=l.get(F);k===void 0&&(k=new WeakMap,l.set(F,k));let W=k.get(y);W===void 0&&(W=t.getUniformBlockIndex(F,y.name),k.set(y,W))}function Ne(y,F){const W=l.get(F).get(y);a.get(F)!==W&&(t.uniformBlockBinding(F,W,y.__bindingPointIndex),a.set(F,W))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,K={},c={},d=new WeakMap,h=[],m=null,v=!1,x=null,p=null,f=null,_=null,g=null,M=null,R=null,C=new qe(0,0,0),A=0,L=!1,T=null,S=null,D=null,j=null,V=null,we.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:fe,bindFramebuffer:Fe,drawBuffers:Be,useProgram:Ve,setBlending:gt,setMaterial:$e,setFlipSided:Ke,setCullFace:Ee,setLineWidth:_t,setPolygonOffset:Ue,setScissorTest:Oe,activeTexture:b,bindTexture:E,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:me,texImage3D:Xe,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:ke,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:pe,scissor:be,viewport:ve,reset:ct}}function ig(t,e,n,i){const r=vC(i);switch(n){case e0:return t*e;case n0:return t*e;case i0:return t*e*2;case r0:return t*e/r.components*r.byteLength;case Mh:return t*e/r.components*r.byteLength;case s0:return t*e*2/r.components*r.byteLength;case wh:return t*e*2/r.components*r.byteLength;case t0:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case Th:return t*e*4/r.components*r.byteLength;case Tl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cl:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:case Vd:return Math.max(t,16)*Math.max(e,8)/4;case Bd:case Hd:return Math.max(t,8)*Math.max(e,8)/2;case Gd:case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case of:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rl:case af:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case o0:case uf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cf:case df:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vC(t){switch(t){case wi:case Zv:return{byteLength:1,components:1};case la:case Qv:case _a:return{byteLength:2,components:1};case Sh:case Eh:return{byteLength:2,components:4};case kr:case yh:case _i:return{byteLength:4,components:1};case Jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function xC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Pe,c=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,E){return m?new OffscreenCanvas(b,E):ca("canvas")}function x(b,E,G){let ee=1;const ie=Oe(b);if((ie.width>G||ie.height>G)&&(ee=G/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const J=Math.floor(ee*ie.width),Ae=Math.floor(ee*ie.height);d===void 0&&(d=v(J,Ae));const ue=E?v(J,Ae):d;return ue.width=J,ue.height=Ae,ue.getContext("2d").drawImage(b,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Ae+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==bn&&b.minFilter!==zn}function f(b){t.generateMipmap(b)}function _(b,E,G,ee,ie=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=E;if(E===t.RED&&(G===t.FLOAT&&(J=t.R32F),G===t.HALF_FLOAT&&(J=t.R16F),G===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.R8UI),G===t.UNSIGNED_SHORT&&(J=t.R16UI),G===t.UNSIGNED_INT&&(J=t.R32UI),G===t.BYTE&&(J=t.R8I),G===t.SHORT&&(J=t.R16I),G===t.INT&&(J=t.R32I)),E===t.RG&&(G===t.FLOAT&&(J=t.RG32F),G===t.HALF_FLOAT&&(J=t.RG16F),G===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RG8UI),G===t.UNSIGNED_SHORT&&(J=t.RG16UI),G===t.UNSIGNED_INT&&(J=t.RG32UI),G===t.BYTE&&(J=t.RG8I),G===t.SHORT&&(J=t.RG16I),G===t.INT&&(J=t.RG32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),E===t.RGBA){const Ae=ie?iu:et.getTransfer(ee);G===t.FLOAT&&(J=t.RGBA32F),G===t.HALF_FLOAT&&(J=t.RGBA16F),G===t.UNSIGNED_BYTE&&(J=Ae===at?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(b,E){let G;return b?E===null||E===kr||E===Ys?G=t.DEPTH24_STENCIL8:E===_i?G=t.DEPTH32F_STENCIL8:E===la&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===kr||E===Ys?G=t.DEPTH_COMPONENT24:E===_i?G=t.DEPTH_COMPONENT32F:E===la&&(G=t.DEPTH_COMPONENT16),G}function M(b,E){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==bn&&b.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function R(b){const E=b.target;E.removeEventListener("dispose",R),A(E),E.isVideoTexture&&c.delete(E)}function C(b){const E=b.target;E.removeEventListener("dispose",C),T(E)}function A(b){const E=i.get(b);if(E.__webglInit===void 0)return;const G=b.source,ee=h.get(G);if(ee){const ie=ee[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(b),Object.keys(ee).length===0&&h.delete(G)}i.remove(b)}function L(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const G=b.source,ee=h.get(G);delete ee[E.__cacheKey],o.memory.textures--}function T(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ie=0;ie<E.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=b.textures;for(let ee=0,ie=G.length;ee<ie;ee++){const J=i.get(G[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(b)}let S=0;function D(){S=0}function j(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function V(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function $(b,E){const G=i.get(b);if(b.isVideoTexture&&_t(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(G,b,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function Q(b,E){const G=i.get(b);if(b.version>0&&G.__version!==b.version){We(G,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function X(b,E){const G=i.get(b);if(b.version>0&&G.__version!==b.version){We(G,b,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function te(b,E){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Y(G,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const I={[Fd]:t.REPEAT,[br]:t.CLAMP_TO_EDGE,[kd]:t.MIRRORED_REPEAT},K={[bn]:t.NEAREST,[jE]:t.NEAREST_MIPMAP_NEAREST,[Ha]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[lc]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},Z={[qE]:t.NEVER,[nM]:t.ALWAYS,[ZE]:t.LESS,[l0]:t.LEQUAL,[QE]:t.EQUAL,[tM]:t.GEQUAL,[JE]:t.GREATER,[eM]:t.NOTEQUAL};function le(b,E){if(E.type===_i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===lc||E.magFilter===Ha||E.magFilter===Rr||E.minFilter===zn||E.minFilter===lc||E.minFilter===Ha||E.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,I[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,I[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,I[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bn||E.minFilter!==Ha&&E.minFilter!==Rr||E.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function we(b,E){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",R));const ee=E.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const J=V(E);if(J!==b.__cacheKey){ie[J]===void 0&&(ie[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[J].usedTimes++;const Ae=ie[b.__cacheKey];Ae!==void 0&&(ie[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&L(E)),b.__cacheKey=J,b.__webglTexture=ie[J].texture}return G}function We(b,E,G){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=we(b,E),J=E.source;n.bindTexture(ee,b.__webglTexture,t.TEXTURE0+G);const Ae=i.get(J);if(J.version!==Ae.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const ue=et.getPrimaries(et.workingColorSpace),pe=E.colorSpace===zi?null:et.getPrimaries(E.colorSpace),ke=E.colorSpace===zi||ue===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let oe=x(E.image,!1,r.maxTextureSize);oe=Ue(E,oe);const me=s.convert(E.format,E.colorSpace),Xe=s.convert(E.type);let be=_(E.internalFormat,me,Xe,E.colorSpace,E.isVideoTexture);le(ee,E);let ve;const Le=E.mipmaps,Ne=E.isVideoTexture!==!0,ct=Ae.__version===void 0||ie===!0,y=J.dataReady,F=M(E,oe);if(E.isDepthTexture)be=g(E.format===$s,E.type),ct&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,be,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,be,oe.width,oe.height,0,me,Xe,null));else if(E.isDataTexture)if(Le.length>0){Ne&&ct&&n.texStorage2D(t.TEXTURE_2D,F,be,Le[0].width,Le[0].height);for(let k=0,W=Le.length;k<W;k++)ve=Le[k],Ne?y&&n.texSubImage2D(t.TEXTURE_2D,k,0,0,ve.width,ve.height,me,Xe,ve.data):n.texImage2D(t.TEXTURE_2D,k,be,ve.width,ve.height,0,me,Xe,ve.data);E.generateMipmaps=!1}else Ne?(ct&&n.texStorage2D(t.TEXTURE_2D,F,be,oe.width,oe.height),y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,me,Xe,oe.data)):n.texImage2D(t.TEXTURE_2D,0,be,oe.width,oe.height,0,me,Xe,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,be,Le[0].width,Le[0].height,oe.depth);for(let k=0,W=Le.length;k<W;k++)if(ve=Le[k],E.format!==Hn)if(me!==null)if(Ne){if(y)if(E.layerUpdates.size>0){const ne=ig(ve.width,ve.height,E.format,E.type);for(const Me of E.layerUpdates){const De=ve.data.subarray(Me*ne/ve.data.BYTES_PER_ELEMENT,(Me+1)*ne/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,Me,ve.width,ve.height,1,me,De,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,ve.width,ve.height,oe.depth,me,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,k,be,ve.width,ve.height,oe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?y&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,ve.width,ve.height,oe.depth,me,Xe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,k,be,ve.width,ve.height,oe.depth,0,me,Xe,ve.data)}else{Ne&&ct&&n.texStorage2D(t.TEXTURE_2D,F,be,Le[0].width,Le[0].height);for(let k=0,W=Le.length;k<W;k++)ve=Le[k],E.format!==Hn?me!==null?Ne?y&&n.compressedTexSubImage2D(t.TEXTURE_2D,k,0,0,ve.width,ve.height,me,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,k,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?y&&n.texSubImage2D(t.TEXTURE_2D,k,0,0,ve.width,ve.height,me,Xe,ve.data):n.texImage2D(t.TEXTURE_2D,k,be,ve.width,ve.height,0,me,Xe,ve.data)}else if(E.isDataArrayTexture)if(Ne){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,be,oe.width,oe.height,oe.depth),y)if(E.layerUpdates.size>0){const k=ig(oe.width,oe.height,E.format,E.type);for(const W of E.layerUpdates){const ne=oe.data.subarray(W*k/oe.data.BYTES_PER_ELEMENT,(W+1)*k/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,W,oe.width,oe.height,1,me,Xe,ne)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Xe,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,oe.width,oe.height,oe.depth,0,me,Xe,oe.data);else if(E.isData3DTexture)Ne?(ct&&n.texStorage3D(t.TEXTURE_3D,F,be,oe.width,oe.height,oe.depth),y&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Xe,oe.data)):n.texImage3D(t.TEXTURE_3D,0,be,oe.width,oe.height,oe.depth,0,me,Xe,oe.data);else if(E.isFramebufferTexture){if(ct)if(Ne)n.texStorage2D(t.TEXTURE_2D,F,be,oe.width,oe.height);else{let k=oe.width,W=oe.height;for(let ne=0;ne<F;ne++)n.texImage2D(t.TEXTURE_2D,ne,be,k,W,0,me,Xe,null),k>>=1,W>>=1}}else if(Le.length>0){if(Ne&&ct){const k=Oe(Le[0]);n.texStorage2D(t.TEXTURE_2D,F,be,k.width,k.height)}for(let k=0,W=Le.length;k<W;k++)ve=Le[k],Ne?y&&n.texSubImage2D(t.TEXTURE_2D,k,0,0,me,Xe,ve):n.texImage2D(t.TEXTURE_2D,k,be,me,Xe,ve);E.generateMipmaps=!1}else if(Ne){if(ct){const k=Oe(oe);n.texStorage2D(t.TEXTURE_2D,F,be,k.width,k.height)}y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Xe,oe)}else n.texImage2D(t.TEXTURE_2D,0,be,me,Xe,oe);p(E)&&f(ee),Ae.__version=J.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Y(b,E,G){if(E.image.length!==6)return;const ee=we(b,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+G);const J=i.get(ie);if(ie.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const Ae=et.getPrimaries(et.workingColorSpace),ue=E.colorSpace===zi?null:et.getPrimaries(E.colorSpace),pe=E.colorSpace===zi||Ae===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,me=[];for(let W=0;W<6;W++)!ke&&!oe?me[W]=x(E.image[W],!0,r.maxCubemapSize):me[W]=oe?E.image[W].image:E.image[W],me[W]=Ue(E,me[W]);const Xe=me[0],be=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),Le=_(E.internalFormat,be,ve,E.colorSpace),Ne=E.isVideoTexture!==!0,ct=J.__version===void 0||ee===!0,y=ie.dataReady;let F=M(E,Xe);le(t.TEXTURE_CUBE_MAP,E);let k;if(ke){Ne&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Le,Xe.width,Xe.height);for(let W=0;W<6;W++){k=me[W].mipmaps;for(let ne=0;ne<k.length;ne++){const Me=k[ne];E.format!==Hn?be!==null?Ne?y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,0,0,Me.width,Me.height,be,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,0,0,Me.width,Me.height,be,ve,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,Le,Me.width,Me.height,0,be,ve,Me.data)}}}else{if(k=E.mipmaps,Ne&&ct){k.length>0&&F++;const W=Oe(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Le,W.width,W.height)}for(let W=0;W<6;W++)if(oe){Ne?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,me[W].width,me[W].height,be,ve,me[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,me[W].width,me[W].height,0,be,ve,me[W].data);for(let ne=0;ne<k.length;ne++){const De=k[ne].image[W].image;Ne?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,0,0,De.width,De.height,be,ve,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,Le,De.width,De.height,0,be,ve,De.data)}}else{Ne?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,be,ve,me[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,be,ve,me[W]);for(let ne=0;ne<k.length;ne++){const Me=k[ne];Ne?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,0,0,be,ve,Me.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,Le,be,ve,Me.image[W])}}}p(E)&&f(t.TEXTURE_CUBE_MAP),J.__version=ie.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function se(b,E,G,ee,ie,J){const Ae=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),pe=_(G.internalFormat,Ae,ue,G.colorSpace);if(!i.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>J),me=Math.max(1,E.height>>J);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,J,pe,oe,me,E.depth,0,Ae,ue,null):n.texImage2D(ie,J,pe,oe,me,0,Ae,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ee(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get(G).__webglTexture,0,Ke(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get(G).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(b,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer){const ee=E.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,J=g(E.stencilBuffer,ie),Ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Ke(E);Ee(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,J,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,b)}else{const ee=E.textures;for(let ie=0;ie<ee.length;ie++){const J=ee[ie],Ae=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),pe=_(J.internalFormat,Ae,ue,J.colorSpace),ke=Ke(E);G&&Ee(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,pe,E.width,E.height):Ee(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,pe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,pe,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,ie=Ke(E);if(E.depthTexture.format===Os)Ee(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===$s)Ee(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Fe(b){const E=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");fe(E.__webglFramebuffer,b)}else if(G){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=t.createRenderbuffer(),de(E.__webglDepthbuffer[ee],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),de(E.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(b,E,G){const ee=i.get(b);E!==void 0&&se(ee.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Fe(b)}function Ve(b){const E=b.texture,G=i.get(b),ee=i.get(E);b.addEventListener("dispose",C);const ie=b.textures,J=b.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let pe=0;pe<E.mipmaps.length;pe++)G.__webglFramebuffer[ue][pe]=t.createFramebuffer()}else G.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)G.__webglFramebuffer[ue]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let ue=0,pe=ie.length;ue<pe;ue++){const ke=i.get(ie[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Ee(b)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const pe=ie[ue];G.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const ke=s.convert(pe.format,pe.colorSpace),oe=s.convert(pe.type),me=_(pe.internalFormat,ke,oe,pe.colorSpace,b.isXRRenderTarget===!0),Xe=Ke(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,me,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),de(G.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),le(t.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)se(G.__webglFramebuffer[ue][pe],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else se(G.__webglFramebuffer[ue],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let ue=0,pe=ie.length;ue<pe;ue++){const ke=ie[ue],oe=i.get(ke);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),le(t.TEXTURE_2D,ke),se(G.__webglFramebuffer,b,ke,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),p(ke)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,ee.__webglTexture),le(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)se(G.__webglFramebuffer[pe],b,E,t.COLOR_ATTACHMENT0,ue,pe);else se(G.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,ue,0);p(E)&&f(ue),n.unbindTexture()}b.depthBuffer&&Fe(b)}function st(b){const E=b.textures;for(let G=0,ee=E.length;G<ee;G++){const ie=E[G];if(p(ie)){const J=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(ie).__webglTexture;n.bindTexture(J,Ae),f(J),n.unbindTexture()}}}const P=[],gt=[];function $e(b){if(b.samples>0){if(Ee(b)===!1){const E=b.textures,G=b.width,ee=b.height;let ie=t.COLOR_BUFFER_BIT;const J=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(b),ue=E.length>1;if(ue)for(let pe=0;pe<E.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let pe=0;pe<E.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[pe]);const ke=i.get(E[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,G,ee,0,0,G,ee,ie,t.NEAREST),l===!0&&(P.length=0,gt.length=0,P.push(t.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(P.push(J),gt.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,gt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let pe=0;pe<E.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[pe]);const ke=i.get(E[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ke(b){return Math.min(r.maxSamples,b.samples)}function Ee(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _t(b){const E=o.render.frame;c.get(b)!==E&&(c.set(b,E),b.update())}function Ue(b,E){const G=b.colorSpace,ee=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==ur&&G!==zi&&(et.getTransfer(G)===at?(ee!==Hn||ie!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=X,this.setTextureCube=te,this.rebindTextures=Be,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ee}function yC(t,e){function n(i,r=zi){let s;const o=et.getTransfer(r);if(i===wi)return t.UNSIGNED_BYTE;if(i===Sh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Jv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zv)return t.BYTE;if(i===Qv)return t.SHORT;if(i===la)return t.UNSIGNED_SHORT;if(i===yh)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===_a)return t.HALF_FLOAT;if(i===e0)return t.ALPHA;if(i===t0)return t.RGB;if(i===Hn)return t.RGBA;if(i===n0)return t.LUMINANCE;if(i===i0)return t.LUMINANCE_ALPHA;if(i===Os)return t.DEPTH_COMPONENT;if(i===$s)return t.DEPTH_STENCIL;if(i===r0)return t.RED;if(i===Mh)return t.RED_INTEGER;if(i===s0)return t.RG;if(i===wh)return t.RG_INTEGER;if(i===Th)return t.RGBA_INTEGER;if(i===Tl||i===Al||i===Cl||i===bl)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===zd||i===Hd||i===Vd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gd||i===Wd||i===Xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gd||i===Wd)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jd||i===Yd||i===$d||i===Kd||i===qd||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===of)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$d)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jd)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ef)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===of)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===af||i===lf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rl)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===af)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===o0||i===uf||i===cf||i===df)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===df)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class SC extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cs extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EC={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),f=this._getHandJoint(u,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const MC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rr({vertexShader:MC,fragmentShader:wC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new on(new ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AC extends Vr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,m=null,v=null;const x=new TC,p=n.getContextAttributes();let f=null,_=null;const g=[],M=[],R=new Pe;let C=null;const A=new _n;A.layers.enable(1),A.viewport=new lt;const L=new _n;L.layers.enable(2),L.viewport=new lt;const T=[A,L],S=new SC;S.layers.enable(1),S.layers.enable(2);let D=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=g[Y];return se===void 0&&(se=new Ic,g[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=g[Y];return se===void 0&&(se=new Ic,g[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=g[Y];return se===void 0&&(se=new Ic,g[Y]=se),se.getHandSpace()};function V(Y){const se=M.indexOf(Y.inputSource);if(se===-1)return;const de=g[se];de!==void 0&&(de.update(Y.inputSource,Y.frame,u||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<g.length;Y++){const se=M[Y];se!==null&&(M[Y]=null,g[Y].disconnect(se))}D=null,j=null,x.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,_=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Br(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,de=null,fe=null;p.depth&&(fe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=p.stencil?$s:Os,de=p.stencil?Ys:kr);const Fe={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Br(h.textureWidth,h.textureHeight,{format:Hn,type:wi,depthTexture:new y0(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(Y){for(let se=0;se<Y.removed.length;se++){const de=Y.removed[se],fe=M.indexOf(de);fe>=0&&(M[fe]=null,g[fe].disconnect(de))}for(let se=0;se<Y.added.length;se++){const de=Y.added[se];let fe=M.indexOf(de);if(fe===-1){for(let Be=0;Be<g.length;Be++)if(Be>=M.length){M.push(de),fe=Be;break}else if(M[Be]===null){M[Be]=de,fe=Be;break}if(fe===-1)break}const Fe=g[fe];Fe&&Fe.connect(de)}}const X=new N,te=new N;function I(Y,se,de){X.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const fe=X.distanceTo(te),Fe=se.projectionMatrix.elements,Be=de.projectionMatrix.elements,Ve=Fe[14]/(Fe[10]-1),st=Fe[14]/(Fe[10]+1),P=(Fe[9]+1)/Fe[5],gt=(Fe[9]-1)/Fe[5],$e=(Fe[8]-1)/Fe[0],Ke=(Be[8]+1)/Be[0],Ee=Ve*$e,_t=Ve*Ke,Ue=fe/(-$e+Ke),Oe=Ue*-$e;se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Oe),Y.translateZ(Ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Ve+Ue,E=st+Ue,G=Ee-Oe,ee=_t+(fe-Oe),ie=P*st/E*b,J=gt*st/E*b;Y.projectionMatrix.makePerspective(G,ee,ie,J,b,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function K(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;x.texture!==null&&(Y.near=x.depthNear,Y.far=x.depthFar),S.near=L.near=A.near=Y.near,S.far=L.far=A.far=Y.far,(D!==S.near||j!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,j=S.far,A.near=D,A.far=j,L.near=D,L.far=j,A.updateProjectionMatrix(),L.updateProjectionMatrix(),Y.updateProjectionMatrix());const se=Y.parent,de=S.cameras;K(S,se);for(let fe=0;fe<de.length;fe++)K(de[fe],se);de.length===2?I(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),Z(Y,S,se)};function Z(Y,se,de){de===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ua*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let le=null;function we(Y,se){if(c=se.getViewerPose(u||o),v=se,c!==null){const de=c.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let fe=!1;de.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Be=0;Be<de.length;Be++){const Ve=de[Be];let st=null;if(m!==null)st=m.getViewport(Ve);else{const gt=d.getViewSubImage(h,Ve);st=gt.viewport,Be===0&&(e.setRenderTargetTextures(_,gt.colorTexture,h.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(_))}let P=T[Be];P===void 0&&(P=new _n,P.layers.enable(Be),P.viewport=new lt,T[Be]=P),P.matrix.fromArray(Ve.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Ve.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(st.x,st.y,st.width,st.height),Be===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(P)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Be=d.getDepthInformation(de[0]);Be&&Be.isValid&&Be.texture&&x.init(e,Be,r.renderState)}}for(let de=0;de<g.length;de++){const fe=M[de],Fe=g[de];fe!==null&&Fe!==void 0&&Fe.update(fe,se,u||o)}le&&le(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),v=null}const We=new x0;We.setAnimationLoop(we),this.setAnimationLoop=function(Y){le=Y},this.dispose=function(){}}}const xr=new Xn,CC=new pt;function bC(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,g0(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,_,g,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),c(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),v(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,_,g):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===dn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===dn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f),g=_.envMap,M=_.envMapRotation;g&&(p.envMap.value=g,xr.copy(M),xr.x*=-1,xr.y*=-1,xr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),p.envMapRotation.value.setFromMatrix4(CC.makeRotationFromEuler(xr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,_,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=g*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const _=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function u(_,g){let M=r[_.id];M===void 0&&(v(_),M=c(_),r[_.id]=M,_.addEventListener("dispose",p));const R=g.program;i.updateUBOMapping(_,R);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function c(_){const g=d();_.__bindingPointIndex=g;const M=t.createBuffer(),R=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],M=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,A=M.length;C<A;C++){const L=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,S=L.length;T<S;T++){const D=L[T];if(m(D,C,T,R)===!0){const j=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let Q=0;Q<V.length;Q++){const X=V[Q],te=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,j+$,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,$),$+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,M,R){const C=_.value,A=g+"_"+M;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const L=R[A];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return R[A]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function v(_){const g=_.uniforms;let M=0;const R=16;for(let A=0,L=g.length;A<L;A++){const T=Array.isArray(g[A])?g[A]:[g[A]];for(let S=0,D=T.length;S<D;S++){const j=T[S],V=Array.isArray(j.value)?j.value:[j.value];for(let $=0,Q=V.length;$<Q;$++){const X=V[$],te=x(X),I=M%R,K=I%te.boundary,Z=I+K;M+=K,Z!==0&&R-Z<te.storage&&(M+=R-Z),j.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=M,M+=te.storage}}}const C=M%R;return C>0&&(M+=R-C),_.__size=M,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class PC{constructor(e={}){const{canvas:n=xM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=Ji,this.toneMappingExposure=1;const g=this;let M=!1,R=0,C=0,A=null,L=-1,T=null;const S=new lt,D=new lt;let j=null;const V=new qe(0);let $=0,Q=n.width,X=n.height,te=1,I=null,K=null;const Z=new lt(0,0,Q,X),le=new lt(0,0,Q,X);let we=!1;const We=new Lh;let Y=!1,se=!1;const de=new pt,fe=new N,Fe=new lt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function st(){return A===null?te:1}let P=i;function gt(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vh}`),n.addEventListener("webglcontextlost",k,!1),n.addEventListener("webglcontextrestored",W,!1),n.addEventListener("webglcontextcreationerror",ne,!1),P===null){const U="webgl2";if(P=gt(U,w),P===null)throw gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $e,Ke,Ee,_t,Ue,Oe,b,E,G,ee,ie,J,Ae,ue,pe,ke,oe,me,Xe,be,ve,Le,Ne,ct;function y(){$e=new OT(P),$e.init(),Le=new yC(P,$e),Ke=new RT(P,$e,e,Le),Ee=new _C(P),_t=new BT(P),Ue=new iC,Oe=new xC(P,$e,Ee,Ue,Ke,Le,_t),b=new LT(g),E=new NT(g),G=new XM(P),Ne=new CT(P,G),ee=new FT(P,G,_t,Ne),ie=new HT(P,ee,G,_t),Xe=new zT(P,Ke,Oe),ke=new PT(Ue),J=new nC(g,b,E,$e,Ke,Ne,ke),Ae=new bC(g,Ue),ue=new sC,pe=new dC($e),me=new AT(g,b,E,Ee,ie,h,l),oe=new gC(g,ie,Ke),ct=new RC(P,_t,Ke,Ee),be=new bT(P,$e,_t),ve=new kT(P,$e,_t),_t.programs=J.programs,g.capabilities=Ke,g.extensions=$e,g.properties=Ue,g.renderLists=ue,g.shadowMap=oe,g.state=Ee,g.info=_t}y();const F=new AC(g,P);this.xr=F,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(Q,X,!1))},this.getSize=function(w){return w.set(Q,X)},this.setSize=function(w,U,z=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,X=U,n.width=Math.floor(w*te),n.height=Math.floor(U*te),z===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Q*te,X*te).floor()},this.setDrawingBufferSize=function(w,U,z){Q=w,X=U,te=z,n.width=Math.floor(w*z),n.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,U,z,H){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,U,z,H),Ee.viewport(S.copy(Z).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,U,z,H){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,U,z,H),Ee.scissor(D.copy(le).multiplyScalar(te).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){Ee.setScissorTest(we=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(w=!0,U=!0,z=!0){let H=0;if(w){let O=!1;if(A!==null){const ae=A.texture.format;O=ae===Th||ae===wh||ae===Mh}if(O){const ae=A.texture.type,he=ae===wi||ae===kr||ae===la||ae===Ys||ae===Sh||ae===Eh,ye=me.getClearColor(),Se=me.getClearAlpha(),Re=ye.r,Ie=ye.g,Ce=ye.b;he?(m[0]=Re,m[1]=Ie,m[2]=Ce,m[3]=Se,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Re,v[1]=Ie,v[2]=Ce,v[3]=Se,P.clearBufferiv(P.COLOR,0,v))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",k,!1),n.removeEventListener("webglcontextrestored",W,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),ue.dispose(),pe.dispose(),Ue.dispose(),b.dispose(),E.dispose(),ie.dispose(),Ne.dispose(),ct.dispose(),J.dispose(),F.dispose(),F.removeEventListener("sessionstart",Mt),F.removeEventListener("sessionend",Ai),kt.stop()};function k(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=_t.autoReset,U=oe.enabled,z=oe.autoUpdate,H=oe.needsUpdate,O=oe.type;y(),_t.autoReset=w,oe.enabled=U,oe.autoUpdate=z,oe.needsUpdate=H,oe.type=O}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Me(w){const U=w.target;U.removeEventListener("dispose",Me),De(U)}function De(w){St(w),Ue.remove(w)}function St(w){const U=Ue.get(w).programs;U!==void 0&&(U.forEach(function(z){J.releaseProgram(z)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,H,O,ae){U===null&&(U=Be);const he=O.isMesh&&O.matrixWorld.determinant()<0,ye=I0(w,U,z,H,O);Ee.setMaterial(H,he);let Se=z.index,Re=1;if(H.wireframe===!0){if(Se=ee.getWireframeAttribute(z),Se===void 0)return;Re=2}const Ie=z.drawRange,Ce=z.attributes.position;let Ze=Ie.start*Re,vt=(Ie.start+Ie.count)*Re;ae!==null&&(Ze=Math.max(Ze,ae.start*Re),vt=Math.min(vt,(ae.start+ae.count)*Re)),Se!==null?(Ze=Math.max(Ze,0),vt=Math.min(vt,Se.count)):Ce!=null&&(Ze=Math.max(Ze,0),vt=Math.min(vt,Ce.count));const xt=vt-Ze;if(xt<0||xt===1/0)return;Ne.setup(O,H,ye,z,Se);let fn,Qe=be;if(Se!==null&&(fn=G.get(Se),Qe=ve,Qe.setIndex(fn)),O.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*st()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(O.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Ee.setLineWidth(Te*st()),O.isLineSegments?Qe.setMode(P.LINES):O.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else O.isPoints?Qe.setMode(P.POINTS):O.isSprite&&Qe.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Te=O._multiDrawStarts,Bt=O._multiDrawCounts,Je=O._multiDrawCount,Dn=Se?G.get(Se).bytesPerElement:1,Wr=Ue.get(H).currentProgram.getUniforms();for(let hn=0;hn<Je;hn++)Wr.setValue(P,"_gl_DrawID",hn),Qe.render(Te[hn]/Dn,Bt[hn])}else if(O.isInstancedMesh)Qe.renderInstances(Ze,xt,O.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Bt=Math.min(z.instanceCount,Te);Qe.renderInstances(Ze,xt,Bt)}else Qe.render(Ze,xt)};function Ct(w,U,z){w.transparent===!0&&w.side===ei&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,Ma(w,U,z),w.side=nr,w.needsUpdate=!0,Ma(w,U,z),w.side=ei):Ma(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),p=pe.get(z),p.init(U),_.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==z&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return w.traverse(function(O){const ae=O.material;if(ae)if(Array.isArray(ae))for(let he=0;he<ae.length;he++){const ye=ae[he];Ct(ye,z,O),H.add(ye)}else Ct(ae,z,O),H.add(ae)}),_.pop(),p=null,H},this.compileAsync=function(w,U,z=null){const H=this.compile(w,U,z);return new Promise(O=>{function ae(){if(H.forEach(function(he){Ue.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){O(w);return}setTimeout(ae,10)}$e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let je=null;function bt(w){je&&je(w)}function Mt(){kt.stop()}function Ai(){kt.start()}const kt=new x0;kt.setAnimationLoop(bt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(w){je=w,F.setAnimationLoop(w),w===null?kt.stop():kt.start()},F.addEventListener("sessionstart",Mt),F.addEventListener("sessionend",Ai),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(U),U=F.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,U,A),p=pe.get(w,_.length),p.init(U),_.push(p),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),We.setFromProjectionMatrix(de),se=this.localClippingEnabled,Y=ke.init(this.clippingPlanes,se),x=ue.get(w,f.length),x.init(),f.push(x),F.enabled===!0&&F.isPresenting===!0){const ae=g.xr.getDepthSensingMesh();ae!==null&&oi(ae,U,-1/0,g.sortObjects)}oi(w,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,K),Ve=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Ve&&me.addToRenderList(x,w),this.info.render.frame++,Y===!0&&ke.beginShadows();const z=p.state.shadowsArray;oe.render(z,w,U),Y===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,O=x.transmissive;if(p.setupLights(),U.isArrayCamera){const ae=U.cameras;if(O.length>0)for(let he=0,ye=ae.length;he<ye;he++){const Se=ae[he];ro(H,O,w,Se)}Ve&&me.render(w);for(let he=0,ye=ae.length;he<ye;he++){const Se=ae[he];hr(x,w,Se,Se.viewport)}}else O.length>0&&ro(H,O,w,U),Ve&&me.render(w),hr(x,w,U);A!==null&&(Oe.updateMultisampleRenderTarget(A),Oe.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(g,w,U),Ne.resetDefaultState(),L=-1,T=null,_.pop(),_.length>0?(p=_[_.length-1],Y===!0&&ke.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function oi(w,U,z,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||We.intersectsSprite(w)){H&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);const he=ie.update(w),ye=w.material;ye.visible&&x.push(w,he,ye,z,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||We.intersectsObject(w))){const he=ie.update(w),ye=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Fe.copy(he.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(de)),Array.isArray(ye)){const Se=he.groups;for(let Re=0,Ie=Se.length;Re<Ie;Re++){const Ce=Se[Re],Ze=ye[Ce.materialIndex];Ze&&Ze.visible&&x.push(w,he,Ze,z,Fe.z,Ce)}}else ye.visible&&x.push(w,he,ye,z,Fe.z,null)}}const ae=w.children;for(let he=0,ye=ae.length;he<ye;he++)oi(ae[he],U,z,H)}function hr(w,U,z,H){const O=w.opaque,ae=w.transmissive,he=w.transparent;p.setupLightsView(z),Y===!0&&ke.setGlobalState(g.clippingPlanes,z),H&&Ee.viewport(S.copy(H)),O.length>0&&Ea(O,U,z),ae.length>0&&Ea(ae,U,z),he.length>0&&Ea(he,U,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ro(w,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Br(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?_a:wi,minFilter:Rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ae=p.state.transmissionRenderTarget[H.id],he=H.viewport||S;ae.setSize(he.z,he.w);const ye=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(V),$=g.getClearAlpha(),$<1&&g.setClearColor(16777215,.5),g.clear(),Ve&&me.render(z);const Se=g.toneMapping;g.toneMapping=Ji;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Y===!0&&ke.setGlobalState(g.clippingPlanes,H),Ea(w,z,H),Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ce=0,Ze=U.length;Ce<Ze;Ce++){const vt=U[Ce],xt=vt.object,fn=vt.geometry,Qe=vt.material,Te=vt.group;if(Qe.side===ei&&xt.layers.test(H.layers)){const Bt=Qe.side;Qe.side=dn,Qe.needsUpdate=!0,Bh(xt,z,H,fn,Qe,Te),Qe.side=Bt,Qe.needsUpdate=!0,Ie=!0}}Ie===!0&&(Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae))}g.setRenderTarget(ye),g.setClearColor(V,$),Re!==void 0&&(H.viewport=Re),g.toneMapping=Se}function Ea(w,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ae=w.length;O<ae;O++){const he=w[O],ye=he.object,Se=he.geometry,Re=H===null?he.material:H,Ie=he.group;ye.layers.test(z.layers)&&Bh(ye,U,z,Se,Re,Ie)}}function Bh(w,U,z,H,O,ae){w.onBeforeRender(g,U,z,H,O,ae),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.transparent===!0&&O.side===ei&&O.forceSinglePass===!1?(O.side=dn,O.needsUpdate=!0,g.renderBufferDirect(z,U,H,O,w,ae),O.side=nr,O.needsUpdate=!0,g.renderBufferDirect(z,U,H,O,w,ae),O.side=ei):g.renderBufferDirect(z,U,H,O,w,ae),w.onAfterRender(g,U,z,H,O,ae)}function Ma(w,U,z){U.isScene!==!0&&(U=Be);const H=Ue.get(w),O=p.state.lights,ae=p.state.shadowsArray,he=O.state.version,ye=J.getParameters(w,O.state,ae,U,z),Se=J.getProgramCacheKey(ye);let Re=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(w.isMeshStandardMaterial?E:b).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Re===void 0&&(w.addEventListener("dispose",Me),Re=new Map,H.programs=Re);let Ie=Re.get(Se);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===he)return Hh(w,ye),Ie}else ye.uniforms=J.getUniforms(w),w.onBeforeCompile(ye,g),Ie=J.acquireProgram(ye,Se),Re.set(Se,Ie),H.uniforms=ye.uniforms;const Ce=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=ke.uniform),Hh(w,ye),H.needsLights=N0(w),H.lightsStateVersion=he,H.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function zh(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Pl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Hh(w,U){const z=Ue.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function I0(w,U,z,H,O){U.isScene!==!0&&(U=Be),Oe.resetTextureUnits();const ae=U.fog,he=H.isMeshStandardMaterial?U.environment:null,ye=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ur,Se=(H.isMeshStandardMaterial?E:b).get(H.envMap||he),Re=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!z.morphAttributes.position,Ze=!!z.morphAttributes.normal,vt=!!z.morphAttributes.color;let xt=Ji;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=g.toneMapping);const fn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qe=fn!==void 0?fn.length:0,Te=Ue.get(H),Bt=p.state.lights;if(Y===!0&&(se===!0||w!==T)){const Mn=w===T&&H.id===L;ke.setState(H,w,Mn)}let Je=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Bt.state.version||Te.outputColorSpace!==ye||O.isBatchedMesh&&Te.batching===!1||!O.isBatchedMesh&&Te.batching===!0||O.isBatchedMesh&&Te.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Te.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Te.instancing===!1||!O.isInstancedMesh&&Te.instancing===!0||O.isSkinnedMesh&&Te.skinning===!1||!O.isSkinnedMesh&&Te.skinning===!0||O.isInstancedMesh&&Te.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Te.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Te.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Te.instancingMorph===!1&&O.morphTexture!==null||Te.envMap!==Se||H.fog===!0&&Te.fog!==ae||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ke.numPlanes||Te.numIntersection!==ke.numIntersection)||Te.vertexAlphas!==Re||Te.vertexTangents!==Ie||Te.morphTargets!==Ce||Te.morphNormals!==Ze||Te.morphColors!==vt||Te.toneMapping!==xt||Te.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Te.__version=H.version);let Dn=Te.currentProgram;Je===!0&&(Dn=Ma(H,U,O));let Wr=!1,hn=!1,Du=!1;const wt=Dn.getUniforms(),Ci=Te.uniforms;if(Ee.useProgram(Dn.program)&&(Wr=!0,hn=!0,Du=!0),H.id!==L&&(L=H.id,hn=!0),Wr||T!==w){wt.setValue(P,"projectionMatrix",w.projectionMatrix),wt.setValue(P,"viewMatrix",w.matrixWorldInverse);const Mn=wt.map.cameraPosition;Mn!==void 0&&Mn.setValue(P,fe.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&wt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,hn=!0,Du=!0)}if(O.isSkinnedMesh){wt.setOptional(P,O,"bindMatrix"),wt.setOptional(P,O,"bindMatrixInverse");const Mn=O.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),wt.setValue(P,"boneTexture",Mn.boneTexture,Oe))}O.isBatchedMesh&&(wt.setOptional(P,O,"batchingTexture"),wt.setValue(P,"batchingTexture",O._matricesTexture,Oe),wt.setOptional(P,O,"batchingIdTexture"),wt.setValue(P,"batchingIdTexture",O._indirectTexture,Oe),wt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&wt.setValue(P,"batchingColorTexture",O._colorsTexture,Oe));const Iu=z.morphAttributes;if((Iu.position!==void 0||Iu.normal!==void 0||Iu.color!==void 0)&&Xe.update(O,z,Dn),(hn||Te.receiveShadow!==O.receiveShadow)&&(Te.receiveShadow=O.receiveShadow,wt.setValue(P,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ci.envMap.value=Se,Ci.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Ci.envMapIntensity.value=U.environmentIntensity),hn&&(wt.setValue(P,"toneMappingExposure",g.toneMappingExposure),Te.needsLights&&U0(Ci,Du),ae&&H.fog===!0&&Ae.refreshFogUniforms(Ci,ae),Ae.refreshMaterialUniforms(Ci,H,te,X,p.state.transmissionRenderTarget[w.id]),Pl.upload(P,zh(Te),Ci,Oe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Pl.upload(P,zh(Te),Ci,Oe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&wt.setValue(P,"center",O.center),wt.setValue(P,"modelViewMatrix",O.modelViewMatrix),wt.setValue(P,"normalMatrix",O.normalMatrix),wt.setValue(P,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Mn=H.uniformsGroups;for(let Uu=0,O0=Mn.length;Uu<O0;Uu++){const Vh=Mn[Uu];ct.update(Vh,Dn),ct.bind(Vh,Dn)}}return Dn}function U0(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function N0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,z){Ue.get(w.texture).__webglTexture=U,Ue.get(w.depthTexture).__webglTexture=z;const H=Ue.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const z=Ue.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,z=0){A=w,R=U,C=z;let H=!0,O=null,ae=!1,he=!1;if(w){const Se=Ue.get(w);Se.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(P.FRAMEBUFFER,null),H=!1):Se.__webglFramebuffer===void 0?Oe.setupRenderTarget(w):Se.__hasExternalTextures&&Oe.rebindTextures(w,Ue.get(w.texture).__webglTexture,Ue.get(w.depthTexture).__webglTexture);const Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(he=!0);const Ie=Ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?O=Ie[U][z]:O=Ie[U],ae=!0):w.samples>0&&Oe.useMultisampledRTT(w)===!1?O=Ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[z]:O=Ie,S.copy(w.viewport),D.copy(w.scissor),j=w.scissorTest}else S.copy(Z).multiplyScalar(te).floor(),D.copy(le).multiplyScalar(te).floor(),j=we;if(Ee.bindFramebuffer(P.FRAMEBUFFER,O)&&H&&Ee.drawBuffers(w,O),Ee.viewport(S),Ee.scissor(D),Ee.setScissorTest(j),ae){const Se=Ue.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,z)}else if(he){const Se=Ue.get(w.texture),Re=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,z||0,Re)}L=-1},this.readRenderTargetPixels=function(w,U,z,H,O,ae,he){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){Ee.bindFramebuffer(P.FRAMEBUFFER,ye);try{const Se=w.texture,Re=Se.format,Ie=Se.type;if(!Ke.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&z>=0&&z<=w.height-O&&P.readPixels(U,z,H,O,Le.convert(Re),Le.convert(Ie),ae)}finally{const Se=A!==null?Ue.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,H,O,ae,he){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){Ee.bindFramebuffer(P.FRAMEBUFFER,ye);try{const Se=w.texture,Re=Se.format,Ie=Se.type;if(!Ke.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-H&&z>=0&&z<=w.height-O){const Ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),P.readPixels(U,z,H,O,Le.convert(Re),Le.convert(Ie),0),P.flush();const Ze=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await yM(P,Ze,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae)}finally{P.deleteBuffer(Ce),P.deleteSync(Ze)}return ae}}finally{const Se=A!==null?Ue.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-z),O=Math.floor(w.image.width*H),ae=Math.floor(w.image.height*H),he=U!==null?U.x:0,ye=U!==null?U.y:0;Oe.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,he,ye,O,ae),Ee.unbindTexture()},this.copyTextureToTexture=function(w,U,z=null,H=null,O=0){w.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],U=arguments[2],O=arguments[3]||0,z=null);let ae,he,ye,Se,Re,Ie;z!==null?(ae=z.max.x-z.min.x,he=z.max.y-z.min.y,ye=z.min.x,Se=z.min.y):(ae=w.image.width,he=w.image.height,ye=0,Se=0),H!==null?(Re=H.x,Ie=H.y):(Re=0,Ie=0);const Ce=Le.convert(U.format),Ze=Le.convert(U.type);Oe.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const vt=P.getParameter(P.UNPACK_ROW_LENGTH),xt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),fn=P.getParameter(P.UNPACK_SKIP_PIXELS),Qe=P.getParameter(P.UNPACK_SKIP_ROWS),Te=P.getParameter(P.UNPACK_SKIP_IMAGES),Bt=w.isCompressedTexture?w.mipmaps[O]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Se),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Re,Ie,ae,he,Ce,Ze,Bt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Re,Ie,Bt.width,Bt.height,Ce,Bt.data):P.texSubImage2D(P.TEXTURE_2D,O,Re,Ie,ae,he,Ce,Ze,Bt),P.pixelStorei(P.UNPACK_ROW_LENGTH,vt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,fn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te),O===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,H=null,O=0){w.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,w=arguments[2],U=arguments[3],O=arguments[4]||0);let ae,he,ye,Se,Re,Ie,Ce,Ze,vt;const xt=w.isCompressedTexture?w.mipmaps[O]:w.image;z!==null?(ae=z.max.x-z.min.x,he=z.max.y-z.min.y,ye=z.max.z-z.min.z,Se=z.min.x,Re=z.min.y,Ie=z.min.z):(ae=xt.width,he=xt.height,ye=xt.depth,Se=0,Re=0,Ie=0),H!==null?(Ce=H.x,Ze=H.y,vt=H.z):(Ce=0,Ze=0,vt=0);const fn=Le.convert(U.format),Qe=Le.convert(U.type);let Te;if(U.isData3DTexture)Oe.setTexture3D(U,0),Te=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Oe.setTexture2DArray(U,0),Te=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Bt=P.getParameter(P.UNPACK_ROW_LENGTH),Je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Dn=P.getParameter(P.UNPACK_SKIP_PIXELS),Wr=P.getParameter(P.UNPACK_SKIP_ROWS),hn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Se),P.pixelStorei(P.UNPACK_SKIP_ROWS,Re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Te,O,Ce,Ze,vt,ae,he,ye,fn,Qe,xt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Te,O,Ce,Ze,vt,ae,he,ye,fn,xt.data):P.texSubImage3D(Te,O,Ce,Ze,vt,ae,he,ye,fn,Qe,xt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Dn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,hn),O===0&&U.generateMipmaps&&P.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(w){Ue.get(w).__webglFramebuffer===void 0&&Oe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Oe.setTextureCube(w,0):w.isData3DTexture?Oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Oe.setTexture2DArray(w,0):Oe.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){R=0,C=0,A=null,Ee.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ah?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Pu?"display-p3":"srgb"}}let LC=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};class Ih extends cr{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new N,c=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const m=i+d/n*r;u.x=e*Math.cos(m),u.y=e*Math.sin(m),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[h]/e+1)/2,c.y=(o[h+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new si(o,3)),this.setAttribute("normal",new si(a,3)),this.setAttribute("uv",new si(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rg extends xa{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const sg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class DC{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const m=u[d],v=u[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return v}return null}}}const IC=new DC;class Uh{constructor(e){this.manager=e!==void 0?e:IC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Uh.DEFAULT_MATERIAL_NAME="__DEFAULT";class UC extends Uh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=sg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ca("img");function l(){c(),sg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class NC extends Uh{constructor(e){super(e)}load(e,n,i,r){const s=new en,o=new UC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class OC extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Uc=new pt,og=new N,ag=new N;class FC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ag),n.updateMatrixWorld(),Uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lg=new pt,xo=new N,Nc=new N;class kC extends FC{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),Nc.copy(i.position),Nc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Nc),i.updateMatrixWorld(),r.makeTranslation(-xo.x,-xo.y,-xo.z),lg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lg)}}class BC extends OC{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}const ug=new pt;class zC{constructor(e,n,i=0,r=1/0){this.ray=new Rh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ug.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ug),this}intersectObject(e,n=!0,i=[]){return hf(e,this,i,n),i.sort(cg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)hf(e[r],this,i,n);return i.sort(cg),i}}function cg(t,e){return t.distance-e.distance}function hf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)hf(s[o],e,n,!0)}}class dg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);const fg={type:"change"},Oc={type:"start"},hg={type:"end"},ul=new Rh,pg=new Fi,HC=Math.cos(70*u0.DEG2RAD);class VC extends Vr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",pe),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fg),i.update(),s=r.NONE},this.update=function(){const y=new N,F=new ir().setFromUnitVectors(e.up,new N(0,1,0)),k=F.clone().invert(),W=new N,ne=new ir,Me=new N,De=2*Math.PI;return function(Ct=null){const je=i.object.position;y.copy(je).sub(i.target),y.applyQuaternion(F),a.setFromVector3(y),i.autoRotate&&s===r.NONE&&j(S(Ct)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let bt=i.minAzimuthAngle,Mt=i.maxAzimuthAngle;isFinite(bt)&&isFinite(Mt)&&(bt<-Math.PI?bt+=De:bt>Math.PI&&(bt-=De),Mt<-Math.PI?Mt+=De:Mt>Math.PI&&(Mt-=De),bt<=Mt?a.theta=Math.max(bt,Math.min(Mt,a.theta)):a.theta=a.theta>(bt+Mt)/2?Math.max(bt,a.theta):Math.min(Mt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ai=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)a.radius=Z(a.radius);else{const kt=a.radius;a.radius=Z(a.radius*u),Ai=kt!=a.radius}if(y.setFromSpherical(a),y.applyQuaternion(k),je.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&C){let kt=null;if(i.object.isPerspectiveCamera){const oi=y.length();kt=Z(oi*u);const hr=oi-kt;i.object.position.addScaledVector(M,hr),i.object.updateMatrixWorld(),Ai=!!hr}else if(i.object.isOrthographicCamera){const oi=new N(R.x,R.y,0);oi.unproject(i.object);const hr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ai=hr!==i.object.zoom;const ro=new N(R.x,R.y,0);ro.unproject(i.object),i.object.position.sub(ro).add(oi),i.object.updateMatrixWorld(),kt=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;kt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(kt).add(i.object.position):(ul.origin.copy(i.object.position),ul.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ul.direction))<HC?e.lookAt(i.target):(pg.setFromNormalAndCoplanarPoint(i.object.up,i.target),ul.intersectPlane(pg,i.target))))}else if(i.object.isOrthographicCamera){const kt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),kt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ai=!0)}return u=1,C=!1,Ai||W.distanceToSquared(i.object.position)>o||8*(1-ne.dot(i.object.quaternion))>o||Me.distanceToSquared(i.target)>o?(i.dispatchEvent(fg),W.copy(i.object.position),ne.copy(i.object.quaternion),Me.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",me),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",E),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",E),i.domElement.getRootNode().removeEventListener("keydown",Ae,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",pe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new dg,l=new dg;let u=1;const c=new N,d=new Pe,h=new Pe,m=new Pe,v=new Pe,x=new Pe,p=new Pe,f=new Pe,_=new Pe,g=new Pe,M=new N,R=new Pe;let C=!1;const A=[],L={};let T=!1;function S(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function D(y){const F=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*F)}function j(y){l.theta-=y}function V(y){l.phi-=y}const $=function(){const y=new N;return function(k,W){y.setFromMatrixColumn(W,0),y.multiplyScalar(-k),c.add(y)}}(),Q=function(){const y=new N;return function(k,W){i.screenSpacePanning===!0?y.setFromMatrixColumn(W,1):(y.setFromMatrixColumn(W,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(k),c.add(y)}}(),X=function(){const y=new N;return function(k,W){const ne=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;y.copy(Me).sub(i.target);let De=y.length();De*=Math.tan(i.object.fov/2*Math.PI/180),$(2*k*De/ne.clientHeight,i.object.matrix),Q(2*W*De/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(k*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),Q(W*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(y,F){if(!i.zoomToCursor)return;C=!0;const k=i.domElement.getBoundingClientRect(),W=y-k.left,ne=F-k.top,Me=k.width,De=k.height;R.x=W/Me*2-1,R.y=-(ne/De)*2+1,M.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function le(y){d.set(y.clientX,y.clientY)}function we(y){K(y.clientX,y.clientX),f.set(y.clientX,y.clientY)}function We(y){v.set(y.clientX,y.clientY)}function Y(y){h.set(y.clientX,y.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const F=i.domElement;j(2*Math.PI*m.x/F.clientHeight),V(2*Math.PI*m.y/F.clientHeight),d.copy(h),i.update()}function se(y){_.set(y.clientX,y.clientY),g.subVectors(_,f),g.y>0?te(D(g.y)):g.y<0&&I(D(g.y)),f.copy(_),i.update()}function de(y){x.set(y.clientX,y.clientY),p.subVectors(x,v).multiplyScalar(i.panSpeed),X(p.x,p.y),v.copy(x),i.update()}function fe(y){K(y.clientX,y.clientY),y.deltaY<0?I(D(y.deltaY)):y.deltaY>0&&te(D(y.deltaY)),i.update()}function Fe(y){let F=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),F=!0;break}F&&(y.preventDefault(),i.update())}function Be(y){if(A.length===1)d.set(y.pageX,y.pageY);else{const F=Ne(y),k=.5*(y.pageX+F.x),W=.5*(y.pageY+F.y);d.set(k,W)}}function Ve(y){if(A.length===1)v.set(y.pageX,y.pageY);else{const F=Ne(y),k=.5*(y.pageX+F.x),W=.5*(y.pageY+F.y);v.set(k,W)}}function st(y){const F=Ne(y),k=y.pageX-F.x,W=y.pageY-F.y,ne=Math.sqrt(k*k+W*W);f.set(0,ne)}function P(y){i.enableZoom&&st(y),i.enablePan&&Ve(y)}function gt(y){i.enableZoom&&st(y),i.enableRotate&&Be(y)}function $e(y){if(A.length==1)h.set(y.pageX,y.pageY);else{const k=Ne(y),W=.5*(y.pageX+k.x),ne=.5*(y.pageY+k.y);h.set(W,ne)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const F=i.domElement;j(2*Math.PI*m.x/F.clientHeight),V(2*Math.PI*m.y/F.clientHeight),d.copy(h)}function Ke(y){if(A.length===1)x.set(y.pageX,y.pageY);else{const F=Ne(y),k=.5*(y.pageX+F.x),W=.5*(y.pageY+F.y);x.set(k,W)}p.subVectors(x,v).multiplyScalar(i.panSpeed),X(p.x,p.y),v.copy(x)}function Ee(y){const F=Ne(y),k=y.pageX-F.x,W=y.pageY-F.y,ne=Math.sqrt(k*k+W*W);_.set(0,ne),g.set(0,Math.pow(_.y/f.y,i.zoomSpeed)),te(g.y),f.copy(_);const Me=(y.pageX+F.x)*.5,De=(y.pageY+F.y)*.5;K(Me,De)}function _t(y){i.enableZoom&&Ee(y),i.enablePan&&Ke(y)}function Ue(y){i.enableZoom&&Ee(y),i.enableRotate&&$e(y)}function Oe(y){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",E)),!ve(y)&&(Xe(y),y.pointerType==="touch"?ke(y):G(y)))}function b(y){i.enabled!==!1&&(y.pointerType==="touch"?oe(y):ee(y))}function E(y){switch(be(y),A.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",E),i.dispatchEvent(hg),s=r.NONE;break;case 1:const F=A[0],k=L[F];ke({pointerId:F,pageX:k.x,pageY:k.y});break}}function G(y){let F;switch(y.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case jr.DOLLY:if(i.enableZoom===!1)return;we(y),s=r.DOLLY;break;case jr.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;We(y),s=r.PAN}else{if(i.enableRotate===!1)return;le(y),s=r.ROTATE}break;case jr.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;le(y),s=r.ROTATE}else{if(i.enablePan===!1)return;We(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Oc)}function ee(y){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Y(y);break;case r.DOLLY:if(i.enableZoom===!1)return;se(y);break;case r.PAN:if(i.enablePan===!1)return;de(y);break}}function ie(y){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(y.preventDefault(),i.dispatchEvent(Oc),fe(J(y)),i.dispatchEvent(hg))}function J(y){const F=y.deltaMode,k={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(F){case 1:k.deltaY*=16;break;case 2:k.deltaY*=100;break}return y.ctrlKey&&!T&&(k.deltaY*=10),k}function Ae(y){y.key==="Control"&&(T=!0,i.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(y){y.key==="Control"&&(T=!1,i.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function pe(y){i.enabled===!1||i.enablePan===!1||Fe(y)}function ke(y){switch(Le(y),A.length){case 1:switch(i.touches.ONE){case Yr.ROTATE:if(i.enableRotate===!1)return;Be(y),s=r.TOUCH_ROTATE;break;case Yr.PAN:if(i.enablePan===!1)return;Ve(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Yr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;P(y),s=r.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;gt(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Oc)}function oe(y){switch(Le(y),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;$e(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ke(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_t(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ue(y),i.update();break;default:s=r.NONE}}function me(y){i.enabled!==!1&&y.preventDefault()}function Xe(y){A.push(y.pointerId)}function be(y){delete L[y.pointerId];for(let F=0;F<A.length;F++)if(A[F]==y.pointerId){A.splice(F,1);return}}function ve(y){for(let F=0;F<A.length;F++)if(A[F]==y.pointerId)return!0;return!1}function Le(y){let F=L[y.pointerId];F===void 0&&(F=new Pe,L[y.pointerId]=F),F.set(y.pageX,y.pageY)}function Ne(y){const F=y.pointerId===A[0]?A[1]:A[0];return L[F]}i.domElement.addEventListener("contextmenu",me),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",E),i.domElement.addEventListener("wheel",ie,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Ae,{passive:!0,capture:!0}),this.update()}}function GC(t){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e),t}}function bs(t,e){var n=t.__state.conversionName.toString(),i=Math.round(t.r),r=Math.round(t.g),s=Math.round(t.b),o=t.a,a=Math.round(t.h),l=t.s.toFixed(1),u=t.v.toFixed(1);if(e||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var c=t.hex.toString(16);c.length<6;)c="0"+c;return"#"+c}else{if(n==="CSS_RGB")return"rgb("+i+","+r+","+s+")";if(n==="CSS_RGBA")return"rgba("+i+","+r+","+s+","+o+")";if(n==="HEX")return"0x"+t.hex.toString(16);if(n==="RGB_ARRAY")return"["+i+","+r+","+s+"]";if(n==="RGBA_ARRAY")return"["+i+","+r+","+s+","+o+"]";if(n==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+s+"}";if(n==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+s+",a:"+o+"}";if(n==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(n==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+o+"}"}return"unknown format"}var mg=Array.prototype.forEach,yo=Array.prototype.slice,q={BREAK:{},extend:function(e){return this.each(yo.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(r){this.isUndefined(n[r])||(e[r]=n[r])}).bind(this))},this),e},defaults:function(e){return this.each(yo.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(r){this.isUndefined(e[r])&&(e[r]=n[r])}).bind(this))},this),e},compose:function(){var e=yo.call(arguments);return function(){for(var n=yo.call(arguments),i=e.length-1;i>=0;i--)n=[e[i].apply(this,n)];return n[0]}},each:function(e,n,i){if(e){if(mg&&e.forEach&&e.forEach===mg)e.forEach(n,i);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&n.call(i,e[r],r)===this.BREAK)return}else for(var o in e)if(n.call(i,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,n,i){var r=void 0;return function(){var s=this,o=arguments;function a(){r=null,i||e.apply(s,o)}var l=i||!r;clearTimeout(r),r=setTimeout(a,n),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():yo.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(t){function e(n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return isNaN(t)}),isArray:Array.isArray||function(t){return t.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},WC=[{litmus:q.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:bs},SIX_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:bs},CSS_RGB:{read:function(e){var n=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:bs},CSS_RGBA:{read:function(e){var n=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:bs}}},{litmus:q.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:q.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:q.isObject,conversions:{RGBA_OBJ:{read:function(e){return q.isNumber(e.r)&&q.isNumber(e.g)&&q.isNumber(e.b)&&q.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return q.isNumber(e.r)&&q.isNumber(e.g)&&q.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return q.isNumber(e.h)&&q.isNumber(e.s)&&q.isNumber(e.v)&&q.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return q.isNumber(e.h)&&q.isNumber(e.s)&&q.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],So=void 0,cl=void 0,pf=function(){cl=!1;var e=arguments.length>1?q.toArray(arguments):arguments[0];return q.each(WC,function(n){if(n.litmus(e))return q.each(n.conversions,function(i,r){if(So=i.read(e),cl===!1&&So!==!1)return cl=So,So.conversionName=r,So.conversion=i,q.BREAK}),q.BREAK}),cl},gg=void 0,lu={hsv_to_rgb:function(e,n,i){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=i*(1-n),a=i*(1-s*n),l=i*(1-(1-s)*n),u=[[i,l,o],[a,i,o],[o,i,l],[o,a,i],[l,o,i],[i,o,a]][r];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,n,i){var r=Math.min(e,n,i),s=Math.max(e,n,i),o=s-r,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(n-i)/o:n===s?a=2+(i-e)/o:a=4+(e-n)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,n,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,n),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,n){return e>>n*8&255},hex_with_component:function(e,n,i){return i<<(gg=n*8)|e&~(255<<gg)}},XC=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Yn=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),sr=function t(e,n,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:t(s,n,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},dr=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},fr=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Ft=function(){function t(){if(jn(this,t),this.__state=pf.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Yn(t,[{key:"toString",value:function(){return bs(this)}},{key:"toHexString",value:function(){return bs(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),t}();function Nh(t,e,n){Object.defineProperty(t,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Ft.recalculateRGB(this,e,n),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Ft.recalculateRGB(this,e,n),this.__state.space="RGB"),this.__state[e]=r}})}function Oh(t,e){Object.defineProperty(t,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Ft.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Ft.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Ft.recalculateRGB=function(t,e,n){if(t.__state.space==="HEX")t.__state[e]=lu.component_from_hex(t.__state.hex,n);else if(t.__state.space==="HSV")q.extend(t.__state,lu.hsv_to_rgb(t.__state.h,t.__state.s,t.__state.v));else throw new Error("Corrupted color state")};Ft.recalculateHSV=function(t){var e=lu.rgb_to_hsv(t.r,t.g,t.b);q.extend(t.__state,{s:e.s,v:e.v}),q.isNaN(e.h)?q.isUndefined(t.__state.h)&&(t.__state.h=0):t.__state.h=e.h};Ft.COMPONENTS=["r","g","b","h","s","v","hex","a"];Nh(Ft.prototype,"r",2);Nh(Ft.prototype,"g",1);Nh(Ft.prototype,"b",0);Oh(Ft.prototype,"h");Oh(Ft.prototype,"s");Oh(Ft.prototype,"v");Object.defineProperty(Ft.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Ft.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=lu.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Gr=function(){function t(e,n){jn(this,t),this.initialValue=e[n],this.domElement=document.createElement("div"),this.object=e,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return Yn(t,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),t}(),jC={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},T0={};q.each(jC,function(t,e){q.each(t,function(n){T0[n]=e})});var YC=/(\d+(\.\d+)?)px/;function Kn(t){if(t==="0"||q.isUndefined(t))return 0;var e=t.match(YC);return q.isNull(e)?0:parseFloat(e[1])}var B={makeSelectable:function(e,n){e===void 0||e.style===void 0||(e.onselectstart=n?function(){return!1}:function(){},e.style.MozUserSelect=n?"auto":"none",e.style.KhtmlUserSelect=n?"auto":"none",e.unselectable=n?"on":"off")},makeFullscreen:function(e,n,i){var r=i,s=n;q.isUndefined(s)&&(s=!0),q.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,n,i,r){var s=i||{},o=T0[n];if(!o)throw new Error("Event type "+n+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,u=s.y||s.clientY||0;a.initMouseEvent(n,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var c=a.initKeyboardEvent||a.initKeyEvent;q.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(n,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(n,s.bubbles||!1,s.cancelable||!0);break}}q.defaults(a,r),e.dispatchEvent(a)},bind:function(e,n,i,r){var s=r||!1;return e.addEventListener?e.addEventListener(n,i,s):e.attachEvent&&e.attachEvent("on"+n,i),B},unbind:function(e,n,i,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(n,i,s):e.detachEvent&&e.detachEvent("on"+n,i),B},addClass:function(e,n){if(e.className===void 0)e.className=n;else if(e.className!==n){var i=e.className.split(/ +/);i.indexOf(n)===-1&&(i.push(n),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return B},removeClass:function(e,n){if(n)if(e.className===n)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(n);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return B},hasClass:function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var n=getComputedStyle(e);return Kn(n["border-left-width"])+Kn(n["border-right-width"])+Kn(n["padding-left"])+Kn(n["padding-right"])+Kn(n.width)},getHeight:function(e){var n=getComputedStyle(e);return Kn(n["border-top-width"])+Kn(n["border-bottom-width"])+Kn(n["padding-top"])+Kn(n["padding-bottom"])+Kn(n.height)},getOffset:function(e){var n=e,i={left:0,top:0};if(n.offsetParent)do i.left+=n.offsetLeft,i.top+=n.offsetTop,n=n.offsetParent;while(n);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},A0=function(t){dr(e,t);function e(n,i){jn(this,e);var r=fr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return B.bind(r.__checkbox,"change",o,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Yn(e,[{key:"setValue",value:function(i){var r=sr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),sr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Gr),$C=function(t){dr(e,t);function e(n,i,r){jn(this,e);var s=fr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),o=r,a=s;if(s.__select=document.createElement("select"),q.isArray(o)){var l={};q.each(o,function(u){l[u]=u}),o=l}return q.each(o,function(u,c){var d=document.createElement("option");d.innerHTML=c,d.setAttribute("value",u),a.__select.appendChild(d)}),s.updateDisplay(),B.bind(s.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),s.domElement.appendChild(s.__select),s}return Yn(e,[{key:"setValue",value:function(i){var r=sr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return B.isActive(this.__select)?this:(this.__select.value=this.getValue(),sr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Gr),KC=function(t){dr(e,t);function e(n,i){jn(this,e);var r=fr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=r;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),B.bind(r.__input,"keyup",o),B.bind(r.__input,"change",o),B.bind(r.__input,"blur",a),B.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Yn(e,[{key:"updateDisplay",value:function(){return B.isActive(this.__input)||(this.__input.value=this.getValue()),sr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Gr);function _g(t){var e=t.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var C0=function(t){dr(e,t);function e(n,i,r){jn(this,e);var s=fr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),o=r||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,q.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=_g(s.__impliedStep),s}return Yn(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),sr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=_g(i),this}}]),e}(Gr);function qC(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}var uu=function(t){dr(e,t);function e(n,i,r){jn(this,e);var s=fr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,r));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var v=parseFloat(o.__input.value);q.isNaN(v)||o.setValue(v)}function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function c(){u()}function d(v){var x=a-v.clientY;o.setValue(o.getValue()+x*o.__impliedStep),a=v.clientY}function h(){B.unbind(window,"mousemove",d),B.unbind(window,"mouseup",h),u()}function m(v){B.bind(window,"mousemove",d),B.bind(window,"mouseup",h),a=v.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),B.bind(s.__input,"change",l),B.bind(s.__input,"blur",c),B.bind(s.__input,"mousedown",m),B.bind(s.__input,"keydown",function(v){v.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Yn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():qC(this.getValue(),this.__precision),sr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(C0);function vg(t,e,n,i,r){return i+(r-i)*((t-e)/(n-e))}var mf=function(t){dr(e,t);function e(n,i,r,s,o){jn(this,e);var a=fr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,{min:r,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),B.bind(a.__background,"mousedown",u),B.bind(a.__background,"touchstart",h),B.addClass(a.__background,"slider"),B.addClass(a.__foreground,"slider-fg");function u(x){document.activeElement.blur(),B.bind(window,"mousemove",c),B.bind(window,"mouseup",d),c(x)}function c(x){x.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(vg(x.clientX,p.left,p.right,l.__min,l.__max)),!1}function d(){B.unbind(window,"mousemove",c),B.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(x){x.touches.length===1&&(B.bind(window,"touchmove",m),B.bind(window,"touchend",v),m(x))}function m(x){var p=x.touches[0].clientX,f=l.__background.getBoundingClientRect();l.setValue(vg(p,f.left,f.right,l.__min,l.__max))}function v(){B.unbind(window,"touchmove",m),B.unbind(window,"touchend",v),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Yn(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",sr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(C0),b0=function(t){dr(e,t);function e(n,i,r){jn(this,e);var s=fr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,B.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),B.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Yn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Gr),gf=function(t){dr(e,t);function e(n,i){jn(this,e);var r=fr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));r.__color=new Ft(r.getValue()),r.__temp=new Ft(0);var s=r;r.domElement=document.createElement("div"),B.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",B.bind(r.__input,"keydown",function(x){x.keyCode===13&&d.call(this)}),B.bind(r.__input,"blur",d),B.bind(r.__selector,"mousedown",function(){B.addClass(this,"drag").bind(window,"mouseup",function(){B.removeClass(s.__selector,"drag")})}),B.bind(r.__selector,"touchstart",function(){B.addClass(this,"drag").bind(window,"touchend",function(){B.removeClass(s.__selector,"drag")})});var o=document.createElement("div");q.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),q.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),q.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),q.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),q.extend(o.style,{width:"100%",height:"100%",background:"none"}),xg(o,"top","rgba(0,0,0,0)","#000"),q.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),QC(r.__hue_field),q.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),B.bind(r.__saturation_field,"mousedown",a),B.bind(r.__saturation_field,"touchstart",a),B.bind(r.__field_knob,"mousedown",a),B.bind(r.__field_knob,"touchstart",a),B.bind(r.__hue_field,"mousedown",l),B.bind(r.__hue_field,"touchstart",l);function a(x){m(x),B.bind(window,"mousemove",m),B.bind(window,"touchmove",m),B.bind(window,"mouseup",u),B.bind(window,"touchend",u)}function l(x){v(x),B.bind(window,"mousemove",v),B.bind(window,"touchmove",v),B.bind(window,"mouseup",c),B.bind(window,"touchend",c)}function u(){B.unbind(window,"mousemove",m),B.unbind(window,"touchmove",m),B.unbind(window,"mouseup",u),B.unbind(window,"touchend",u),h()}function c(){B.unbind(window,"mousemove",v),B.unbind(window,"touchmove",v),B.unbind(window,"mouseup",c),B.unbind(window,"touchend",c),h()}function d(){var x=pf(this.value);x!==!1?(s.__color.__state=x,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function h(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(o),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function m(x){x.type.indexOf("touch")===-1&&x.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),f=x.touches&&x.touches[0]||x,_=f.clientX,g=f.clientY,M=(_-p.left)/(p.right-p.left),R=1-(g-p.top)/(p.bottom-p.top);return R>1?R=1:R<0&&(R=0),M>1?M=1:M<0&&(M=0),s.__color.v=R,s.__color.s=M,s.setValue(s.__color.toOriginal()),!1}function v(x){x.type.indexOf("touch")===-1&&x.preventDefault();var p=s.__hue_field.getBoundingClientRect(),f=x.touches&&x.touches[0]||x,_=f.clientY,g=1-(_-p.top)/(p.bottom-p.top);return g>1?g=1:g<0&&(g=0),s.__color.h=g*360,s.setValue(s.__color.toOriginal()),!1}return r}return Yn(e,[{key:"updateDisplay",value:function(){var i=pf(this.getValue());if(i!==!1){var r=!1;q.each(Ft.COMPONENTS,function(a){if(!q.isUndefined(i[a])&&!q.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return r=!0,{}},this),r&&q.extend(this.__color.__state,i)}q.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;q.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,xg(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),q.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Gr),ZC=["-moz-","-o-","-webkit-","-ms-",""];function xg(t,e,n,i){t.style.background="",q.each(ZC,function(r){t.style.cssText+="background: "+r+"linear-gradient("+e+", "+n+" 0%, "+i+" 100%); "})}function QC(t){t.style.background="",t.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",t.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var JC={load:function(e,n){var i=n||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,n){var i=n||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},eb=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,tb=function(e,n){var i=e[n];return q.isArray(arguments[2])||q.isObject(arguments[2])?new $C(e,n,arguments[2]):q.isNumber(i)?q.isNumber(arguments[2])&&q.isNumber(arguments[3])?q.isNumber(arguments[4])?new mf(e,n,arguments[2],arguments[3],arguments[4]):new mf(e,n,arguments[2],arguments[3]):q.isNumber(arguments[4])?new uu(e,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new uu(e,n,{min:arguments[2],max:arguments[3]}):q.isString(i)?new KC(e,n):q.isFunction(i)?new b0(e,n,""):q.isBoolean(i)?new A0(e,n):null};function nb(t){setTimeout(t,1e3/60)}var ib=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||nb,rb=function(){function t(){jn(this,t),this.backgroundElement=document.createElement("div"),q.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),B.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),q.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;B.bind(this.backgroundElement,"click",function(){e.hide()})}return Yn(t,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),q.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,i=function r(){n.domElement.style.display="none",n.backgroundElement.style.display="none",B.unbind(n.domElement,"webkitTransitionEnd",r),B.unbind(n.domElement,"transitionend",r),B.unbind(n.domElement,"oTransitionEnd",r)};B.bind(this.domElement,"webkitTransitionEnd",i),B.bind(this.domElement,"transitionend",i),B.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-B.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-B.getHeight(this.domElement)/2+"px"}}]),t}(),sb=GC(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);JC.inject(sb);var yg="dg",Sg=72,Eg=20,da="Default",bo=function(){try{return!!window.localStorage}catch{return!1}}(),Ho=void 0,Mg=!0,fs=void 0,Fc=!1,R0=[],rt=function t(e){var n=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),B.addClass(this.domElement,yg),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=q.defaults(i,{closeOnTop:!1,autoPlace:!0,width:t.DEFAULT_WIDTH}),i=q.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),q.isUndefined(i.load)?i.load={preset:da}:i.preset&&(i.load.preset=i.preset),q.isUndefined(i.parent)&&i.hideable&&R0.push(this),i.resizable=q.isUndefined(i.parent)&&i.resizable,i.autoPlace&&q.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=bo&&localStorage.getItem(hs(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:i.load.preset},set:function(h){n.parent?n.getRoot().preset=h:i.load.preset=h,ub(this),n.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,xf(n,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,o&&(o.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?B.addClass(n.__ul,t.CLASS_CLOSED):B.removeClass(n.__ul,t.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=h?t.TEXT_OPEN:t.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(h){bo&&(r=h,h?B.bind(window,"unload",s):B.unbind(window,"unload",s),localStorage.setItem(hs(n,"isLocal"),h))}}}),q.isUndefined(i.parent)){if(this.closed=i.closed||!1,B.addClass(this.domElement,t.CLASS_MAIN),B.makeSelectable(this.domElement,!1),bo&&r){n.useLocalStorage=!0;var a=localStorage.getItem(hs(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=t.TEXT_CLOSED,B.addClass(this.__closeButton,t.CLASS_CLOSE_BUTTON),i.closeOnTop?(B.addClass(this.__closeButton,t.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(B.addClass(this.__closeButton,t.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),B.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);B.addClass(l,"controller-name"),o=Fh(n,l);var u=function(h){return h.preventDefault(),n.closed=!n.closed,!1};B.addClass(this.__ul,t.CLASS_CLOSED),B.addClass(o,"title"),B.bind(o,"click",u),i.closed||(this.closed=!1)}i.autoPlace&&(q.isUndefined(i.parent)&&(Mg&&(fs=document.createElement("div"),B.addClass(fs,yg),B.addClass(fs,t.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(fs),Mg=!1),fs.appendChild(this.domElement),B.addClass(this.domElement,t.CLASS_AUTO_PLACE)),this.parent||xf(n,i.width)),this.__resizeHandler=function(){n.onResizeDebounced()},B.bind(window,"resize",this.__resizeHandler),B.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),B.bind(this.__ul,"transitionend",this.__resizeHandler),B.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&lb(this),s=function(){bo&&localStorage.getItem(hs(n,"isLocal"))==="true"&&localStorage.setItem(hs(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function c(){var d=n.getRoot();d.width+=1,q.defer(function(){d.width-=1})}i.parent||c()};rt.toggleHide=function(){Fc=!Fc,q.each(R0,function(t){t.domElement.style.display=Fc?"none":""})};rt.CLASS_AUTO_PLACE="a";rt.CLASS_AUTO_PLACE_CONTAINER="ac";rt.CLASS_MAIN="main";rt.CLASS_CONTROLLER_ROW="cr";rt.CLASS_TOO_TALL="taller-than-window";rt.CLASS_CLOSED="closed";rt.CLASS_CLOSE_BUTTON="close-button";rt.CLASS_CLOSE_TOP="close-top";rt.CLASS_CLOSE_BOTTOM="close-bottom";rt.CLASS_DRAG="drag";rt.DEFAULT_WIDTH=245;rt.TEXT_CLOSED="Close Controls";rt.TEXT_OPEN="Open Controls";rt._keydownHandler=function(t){document.activeElement.type!=="text"&&(t.which===Sg||t.keyCode===Sg)&&rt.toggleHide()};B.bind(window,"keydown",rt._keydownHandler,!1);q.extend(rt.prototype,{add:function(e,n){return Vo(this,e,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,n){return Vo(this,e,n,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var n=this;q.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&fs.removeChild(this.domElement);var e=this;q.each(this.__folders,function(n){e.removeFolder(n)}),B.unbind(window,"keydown",rt._keydownHandler,!1),wg(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var n={name:e,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(n.closed=this.load.folders[e].closed,n.load=this.load.folders[e]);var i=new rt(n);this.__folders[e]=i;var r=Fh(this,i.domElement);return B.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],wg(e);var n=this;q.each(e.__folders,function(i){e.removeFolder(i)}),q.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var n=B.getOffset(e.__ul).top,i=0;q.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=B.getHeight(r))}),window.innerHeight-n-Eg<i?(B.addClass(e.domElement,rt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-n-Eg+"px"):(B.removeClass(e.domElement,rt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&q.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:q.debounce(function(){this.onResize()},50),remember:function(){if(q.isUndefined(Ho)&&(Ho=new rb,Ho.domElement.innerHTML=eb),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;q.each(Array.prototype.slice.call(arguments),function(n){e.__rememberedObjects.length===0&&ab(e),e.__rememberedObjects.indexOf(n)===-1&&e.__rememberedObjects.push(n)}),this.autoPlace&&xf(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=dl(this)),e.folders={},q.each(this.__folders,function(n,i){e.folders[i]=n.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=dl(this),_f(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[da]=dl(this,!0)),this.load.remembered[e]=dl(this),this.preset=e,vf(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){q.each(this.__controllers,function(n){this.getRoot().load.remembered?P0(e||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),q.each(this.__folders,function(n){n.revert(n)}),e||_f(this.getRoot(),!1)},listen:function(e){var n=this.__listening.length===0;this.__listening.push(e),n&&L0(this.__listening)},updateDisplay:function(){q.each(this.__controllers,function(e){e.updateDisplay()}),q.each(this.__folders,function(e){e.updateDisplay()})}});function Fh(t,e,n){var i=document.createElement("li");return e&&i.appendChild(e),n?t.__ul.insertBefore(i,n):t.__ul.appendChild(i),t.onResize(),i}function wg(t){B.unbind(window,"resize",t.__resizeHandler),t.saveToLocalStorageIfPossible&&B.unbind(window,"unload",t.saveToLocalStorageIfPossible)}function _f(t,e){var n=t.__preset_select[t.__preset_select.selectedIndex];e?n.innerHTML=n.value+"*":n.innerHTML=n.value}function ob(t,e,n){if(n.__li=e,n.__gui=t,q.extend(n,{options:function(o){if(arguments.length>1){var a=n.__li.nextElementSibling;return n.remove(),Vo(t,n.object,n.property,{before:a,factoryArgs:[q.toArray(arguments)]})}if(q.isArray(o)||q.isObject(o)){var l=n.__li.nextElementSibling;return n.remove(),Vo(t,n.object,n.property,{before:l,factoryArgs:[o]})}},name:function(o){return n.__li.firstElementChild.firstElementChild.innerHTML=o,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof mf){var i=new uu(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});q.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=n[s],a=i[s];n[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),o.apply(n,l)}}),B.addClass(e,"has-slider"),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof uu){var r=function(o){if(q.isNumber(n.__min)&&q.isNumber(n.__max)){var a=n.__li.firstElementChild.firstElementChild.innerHTML,l=n.__gui.__listening.indexOf(n)>-1;n.remove();var u=Vo(t,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return u.name(a),l&&u.listen(),u}return o};n.min=q.compose(r,n.min),n.max=q.compose(r,n.max)}else n instanceof A0?(B.bind(e,"click",function(){B.fakeEvent(n.__checkbox,"click")}),B.bind(n.__checkbox,"click",function(s){s.stopPropagation()})):n instanceof b0?(B.bind(e,"click",function(){B.fakeEvent(n.__button,"click")}),B.bind(e,"mouseover",function(){B.addClass(n.__button,"hover")}),B.bind(e,"mouseout",function(){B.removeClass(n.__button,"hover")})):n instanceof gf&&(B.addClass(e,"color"),n.updateDisplay=q.compose(function(s){return e.style.borderLeftColor=n.__color.toString(),s},n.updateDisplay),n.updateDisplay());n.setValue=q.compose(function(s){return t.getRoot().__preset_select&&n.isModified()&&_f(t.getRoot(),!0),s},n.setValue)}function P0(t,e){var n=t.getRoot(),i=n.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=n.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},n.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,n.load&&n.load.remembered){var s=n.load.remembered,o=void 0;if(s[t.preset])o=s[t.preset];else if(s[da])o=s[da];else return;if(o[i]&&o[i][e.property]!==void 0){var a=o[i][e.property];e.initialValue=a,e.setValue(a)}}}}function Vo(t,e,n,i){if(e[n]===void 0)throw new Error('Object "'+e+'" has no property "'+n+'"');var r=void 0;if(i.color)r=new gf(e,n);else{var s=[e,n].concat(i.factoryArgs);r=tb.apply(t,s)}i.before instanceof Gr&&(i.before=i.before.__li),P0(t,r),B.addClass(r.domElement,"c");var o=document.createElement("span");B.addClass(o,"property-name"),o.innerHTML=r.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(r.domElement);var l=Fh(t,a,i.before);return B.addClass(l,rt.CLASS_CONTROLLER_ROW),r instanceof gf?B.addClass(l,"color"):B.addClass(l,XC(r.getValue())),ob(t,l,r),t.__controllers.push(r),r}function hs(t,e){return document.location.href+"."+e}function vf(t,e,n){var i=document.createElement("option");i.innerHTML=e,i.value=e,t.__preset_select.appendChild(i),n&&(t.__preset_select.selectedIndex=t.__preset_select.length-1)}function Tg(t,e){e.style.display=t.useLocalStorage?"block":"none"}function ab(t){var e=t.__save_row=document.createElement("li");B.addClass(t.domElement,"has-save"),t.__ul.insertBefore(e,t.__ul.firstChild),B.addClass(e,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",B.addClass(n,"button gears");var i=document.createElement("span");i.innerHTML="Save",B.addClass(i,"button"),B.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",B.addClass(r,"button"),B.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",B.addClass(s,"button"),B.addClass(s,"revert");var o=t.__preset_select=document.createElement("select");if(t.load&&t.load.remembered?q.each(t.load.remembered,function(d,h){vf(t,h,h===t.preset)}):vf(t,da,!1),B.bind(o,"change",function(){for(var d=0;d<t.__preset_select.length;d++)t.__preset_select[d].innerHTML=t.__preset_select[d].value;t.preset=this.value}),e.appendChild(o),e.appendChild(n),e.appendChild(i),e.appendChild(r),e.appendChild(s),bo){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(hs(t,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Tg(t,a),B.bind(l,"change",function(){t.useLocalStorage=!t.useLocalStorage,Tg(t,a)})}var c=document.getElementById("dg-new-constructor");B.bind(c,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Ho.hide()}),B.bind(n,"click",function(){c.innerHTML=JSON.stringify(t.getSaveObject(),void 0,2),Ho.show(),c.focus(),c.select()}),B.bind(i,"click",function(){t.save()}),B.bind(r,"click",function(){var d=prompt("Enter a new preset name.");d&&t.saveAs(d)}),B.bind(s,"click",function(){t.revert()})}function lb(t){var e=void 0;t.__resize_handle=document.createElement("div"),q.extend(t.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(s){return s.preventDefault(),t.width+=e-s.clientX,t.onResize(),e=s.clientX,!1}function i(){B.removeClass(t.__closeButton,rt.CLASS_DRAG),B.unbind(window,"mousemove",n),B.unbind(window,"mouseup",i)}function r(s){return s.preventDefault(),e=s.clientX,B.addClass(t.__closeButton,rt.CLASS_DRAG),B.bind(window,"mousemove",n),B.bind(window,"mouseup",i),!1}B.bind(t.__resize_handle,"mousedown",r),B.bind(t.__closeButton,"mousedown",r),t.domElement.insertBefore(t.__resize_handle,t.domElement.firstElementChild)}function xf(t,e){t.domElement.style.width=e+"px",t.__save_row&&t.autoPlace&&(t.__save_row.style.width=e+"px"),t.__closeButton&&(t.__closeButton.style.width=e+"px")}function dl(t,e){var n={};return q.each(t.__rememberedObjects,function(i,r){var s={},o=t.__rememberedObjectIndecesToControllers[r];q.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),n[r]=s}),n}function ub(t){for(var e=0;e<t.__preset_select.length;e++)t.__preset_select[e].value===t.preset&&(t.__preset_select.selectedIndex=e)}function L0(t){t.length!==0&&ib.call(window,function(){L0(t)}),q.each(t,function(e){e.updateDisplay()})}var cb=rt;const yf=[1,3,9],kh={items:{sensor:{name:{zh:"感光元件",en:"Sensor"},description:"數位攝影中的影像感測器",content:"感光元件是相機中負責捕捉光線並將其轉換為電子信號的重要部分。常見類型包括CMOS和CCD。CMOS常用於多數數位相機因其低功耗特性；CCD則因其出色的光線捕捉能力在高品質影像方面表現卓越。"},aperture:{name:{zh:"光圈",en:"Aperture"},description:"鏡頭中用於控制進光量的開口大小",content:"光圈的大小直接影響到影像的景深和亮度。開大光圈可以增加背景模糊，使主體更突出，適合肖像攝影；縮小光圈則能提高景深，保持更多的場景焦點清晰，適合風景攝影。"},shutter:{name:{zh:"快門",en:"Shutter"},description:"控制接收光線的時間長短",content:"快門速度決定了相機感光元件曝光的時間長短。快門速度越快，適合拍攝運動或快速移動的主題，可以凍結畫面；慢快門則適合拍攝夜景或流水等靜態場景，產生流暢的效果。"},iso:{name:{zh:"感光度",en:"ISO"},description:"感光元件對光的敏感程度",content:"ISO 的設置影響攝影中的光線捕捉能力。提高 ISO 可以在低光環境中拍攝，但同時會增加影像的雜訊。適當的控制 ISO 能夠在不同光線條件下獲得清晰的照片。"},"exposure-value":{name:{zh:"曝光值",en:"Exposure Value (EV)"},description:"影像的總曝光量",content:"曝光值是根據 ISO、光圈和快門速度的設定來確定的，它決定了照片的總光量。正確的曝光能夠使照片展現出最佳的亮度和對比，避免過曝或欠曝。"},"white-balance":{name:{zh:"白平衡",en:"White Balance"},description:"調整相機色溫的設定",content:"白平衡用於調整攝影圖像中的色溫，使色彩呈現自然。根據不同光源的色溫差異調整，可以消除不自然的色彩偏差，如日光、螢光燈或白熾燈下的攝影。"},"dynamic-range":{name:{zh:"動態範圍",en:"Dynamic Range"},description:"相機捕捉亮部和暗部細節的能力",content:"動態範圍描述相機感測光線強度的範圍，高動態範圍有助於在同一幅圖片中保留更多的細節，特別是在非常亮或非常暗的區域。這是風景攝影中非常重要的特性。"},"metering-mode":{name:{zh:"測光模式",en:"Metering Mode"},description:"相機測量場景亮度的方法",content:"測光模式影響相機如何評估場景中的光線分布，進而決定適當的曝光設定。常見的測光模式包括點測光、中央重點測光和評價測光，適用於不同的拍攝情境。"},"depth-of-field":{name:{zh:"景深",en:"Depth of Field"},description:"圖像中清晰範圍的深度",content:"景深是指在照片中清晰顯示的距離範圍，通過調整光圈大小來控制。小光圈提高景深，使得更多的背景和前景保持清晰；大光圈則減少景深，突出主題。"},focus:{name:{zh:"對焦",en:"Focus"},description:"調整鏡頭使畫面清晰的過程",content:"對焦是確保照片中所需部分清晰可見的過程。自動對焦系統可以快速定位到主題，而手動對焦則允許攝影師更精確地控制焦點。"},"frame-rate":{name:{zh:"幀率",en:"Frame Rate"},description:"每秒顯示的影格數",content:"幀率決定了視頻播放的流暢程度。高幀率如60幀/秒，可以使動作看起來更流暢自然，適合高速動作的拍攝；較低的幀率可能產生較為跳躍的效果，有時用於特殊效果或節省儲存空間。"},"focal-length":{name:{zh:"焦距",en:"Focal Length"},description:"鏡頭與成像感光元件之間的距離",content:"焦距影響鏡頭的視角，短焦距鏡頭提供廣闊的視野，適合風景或建築攝影；長焦距鏡頭能放大遠處物體，常用於野生動物或運動攝影。"},format:{name:{zh:"格式",en:"Format"},description:"影像或視頻的檔案格式",content:"影像或視頻的格式決定了其數據的組織方式，如 JPEG、RAW、MP4 等。不同的格式有不同的特點，如壓縮比、編輯靈活性和檔案大小。"}}};class db{constructor(e){tt(this,"init",()=>{console.log("galaxy.js loaded"),this.initScene(),this.initCamera(),this.initRenderer(),this.initControls(),this.initLights(),this.createGalaxy(),this.setupEventListeners(),this.initGUI(),this.animate(),window.sceneLoaded=!0});tt(this,"initScene",()=>{this.visual=document.getElementById(this.containerId),this.scene=new LC,this.cameraAnchor=new Cs,this.scene.add(this.cameraAnchor),this.starGroup=new Cs,this.scene.add(this.starGroup);const e=new no,n=new au({color:65280}),i=new au({color:16711680});this.cube=new on(e,n);const r=new on(e,i);r.position.set(0,0,1),r.scale.set(.2,.2,1),this.cube.add(r),this.cube2=new on(e,i),this.cube2.position.set(0,1,0);const s=new ya(150,150,150,150),o=new rg({color:16777215,wireframe:!0}),a=new on(s,o);a.position.y=-1.5,a.rotation.x=-Math.PI/2,this.scene.add(a)});tt(this,"initCamera",()=>{this.camera=new _n(50,this.visual.clientWidth/this.visual.clientHeight,.1,1e3),this.camTarget=new N(0,1.2,6),this.cameraAnchor.add(this.camera),this.camInit()});tt(this,"initRenderer",()=>{this.renderer=new PC({antialias:!0,alpha:!0}),this.renderer.setSize(this.visual.clientWidth,this.visual.clientHeight),this.visual.appendChild(this.renderer.domElement)});tt(this,"initControls",()=>{this.controls=new VC(this.camera,this.renderer.domElement),this.controls.enabled=!1});tt(this,"initLights",()=>{const e=new BC(16777215,50,200,1.8);this.camera.add(e)});tt(this,"createGalaxy",()=>{const e=new rg({color:16777215,side:ei});let n=0;const i=new NC;for(let r=0;r<this.orbit.length;r++){this.galaxy[r]=[];for(let s=0;s<this.orbit[r];s++){const o=new Ih(this.starSize[r],64),a=new on(o,e.clone());i.load(`${this.config.baseUrl}/img/${this.items[n]}.png`,u=>{a.material.map=u,a.material.needsUpdate=!0}),a.userData={orbit:r,index:s,order:n,name:this.items[n]};const l=new tn;l.add(a),a.position.set(0,0,this.params.radius*r),l.rotation.y=Math.PI*2/this.orbit[r]*s,this.galaxy[r].push(l),this.starGroup.add(l),n++}}});tt(this,"getCurrentItem",()=>this.state.currentItem);tt(this,"setupEventListeners",()=>{document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp),window.addEventListener("resize",this.onWindowResize),window.addEventListener("orientationchange",this.onWindowResize),new ResizeObserver(this.onResize).observe(this.visual)});tt(this,"initGUI",()=>{this.gui=new cb,this.gui.add(this.params,"radius",0,10).onChange(this.adjustRadius),document.getElementsByClassName("dg ac")[0].style.display="none"});tt(this,"animate",()=>{this.starLookAt(),this.keyControl(),this.camControl(),this.locateChecker(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate)});tt(this,"starLookAt",()=>{this.starGroup.children.forEach(e=>{e.children[0].lookAt(this.camera.getWorldPosition(new N))})});tt(this,"keyControl",()=>{(this.controlState.leftKey||this.controlState.rightKey)&&(console.log("side"),this.controlState.leftKey?this.state.cubeAngle+=this.state.rotSpeed:this.state.cubeAngle-=this.state.rotSpeed,this.state.rotSpeed<this.config.maxSpeed&&(this.state.rotSpeed+=this.config.speed),(this.controlState.leftFirst||this.controlState.rightFirst)&&(this.state.rotSpeed=0,this.controlState.leftFirst=this.controlState.rightFirst=!1)),(this.controlState.leftKeyUp||this.controlState.rightKeyUp)&&(this.state.currentOrbit!=0&&(this.state.cubeAngle=Math[this.controlState.leftKeyUp?"ceil":"floor"](this.state.cubeAngle/this.state.targetAngle)*this.state.targetAngle),this.controlState.leftKeyUp?this.controlState.leftFirst=!0:this.controlState.rightFirst=!0,this.state.rotSpeed=0),(this.controlState.upKey||this.controlState.downKey)&&(this.controlState.upKey&&this.state.camPos>0&&(this.state.camPos-=this.config.speed*3),this.controlState.downKey&&this.state.camPos<this.params.radius*(this.galaxy.length-1)&&(this.state.camPos+=this.config.speed)),(this.controlState.upKeyUp||this.controlState.downKeyUp)&&(this.state.camPos>=0&&this.state.camPos<this.params.radius*(this.galaxy.length-1)&&(this.state.camPos=Math[this.controlState.upKeyUp?"floor":"ceil"](this.state.camPos/this.params.radius)*this.params.radius,this.state.currentOrbit=this.state.camPos/this.params.radius),this.state.camPos>this.params.radius*(this.galaxy.length-1)&&(this.state.camPos=this.params.radius*(this.galaxy.length-1),this.state.currentOrbit=this.galaxy.length-1),this.state.targetAngle=360/this.orbit[this.state.currentOrbit]),this.state.cubeAngle=this.state.cubeAngle%360,this.cube.rotation.y=u0.degToRad(this.state.cubeAngle),this.cube2.quaternion.slerp(this.cube.quaternion,this.config.maxSpeed/20),this.starGroup.quaternion.slerp(this.cube.quaternion,this.config.maxSpeed/20)});tt(this,"camControl",()=>{let e=new ir().setFromEuler(new Xn(this.mouse.y/-20,this.mouse.x/-10,0));this.cameraAnchor.quaternion.slerp(e,this.config.respondTime),this.camera.position.lerp(this.camTarget,this.config.respondTime);const n=new N(0,0,this.state.camPos);this.cameraAnchor.position.lerp(n,.1),this.cameraAnchor.scale.lerp(new N(this.starSize[this.state.currentOrbit]*this.camDistance,this.starSize[this.state.currentOrbit]*this.camDistance,this.starSize[this.state.currentOrbit]*this.camDistance),.1),this.camera.lookAt(this.cameraAnchor.position),this.state.camPos<0&&(this.state.camPos=0)});tt(this,"locateChecker",()=>{let e=.004/((this.state.currentOrbit+.2)*5);Math.abs(this.cameraAnchor.position.z-this.state.camPos)<e?this.state.currentOrbit==0?this.camera.position.distanceTo(this.camTarget)<e*10?window.itemReady=!0:window.itemReady=!1:this.cube2.quaternion.angleTo(this.cube.quaternion)<e?window.itemReady=!0:window.itemReady=!1:window.itemReady=!1;let n=document.querySelector(".window-view");n&&window.itemReady&&(n.classList.add("ready"),this.performRaycast("hide"),n.style.backgroundImage=`url("${this.config.baseUrl}/img/${this.state.currentItem}.png")`),!window.itemReady&&!n.classList.contains("active")&&n.classList.contains("ready")&&(n.classList.remove("ready"),console.log("remove ready"))});tt(this,"performRaycast",e=>{const n=new zC;n.near=0,n.set(this.camera.position,this.camera.getWorldDirection(new N)),n.intersectObjects(this.scene.children)});tt(this,"onMouseMove",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1});tt(this,"onKeyDown",e=>{e.key==="ArrowLeft"?this.handleInput("left","down"):e.key==="ArrowUp"?this.handleInput("up","down"):e.key==="ArrowRight"?this.handleInput("right","down"):e.key==="ArrowDown"?this.handleInput("down","down"):(e.key==="`"||e.key==="~"||e.code==="Backquote")&&(this.isDebug=!this.isDebug,this.debug())});tt(this,"onKeyUp",e=>{e.key==="ArrowLeft"?this.handleInput("left","up"):e.key==="ArrowRight"?this.handleInput("right","up"):e.key==="ArrowUp"?this.handleInput("up","up"):e.key==="ArrowDown"&&this.handleInput("down","up")});tt(this,"onWindowResize",()=>{this.camera.aspect=this.visual.clientWidth/this.visual.clientHeight,this.camInit(),this.renderer.setSize(this.visual.clientWidth,this.visual.clientHeight)});tt(this,"onResize",e=>{for(let n of e)if(n.target===this.visual){const{width:i,height:r}=n.contentRect;this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.applyShift(this.camera,this.camShift,0),this.renderer.setSize(i,r),this.renderer.render(this.scene,this.camera)}});tt(this,"handleInput",(e,n)=>{if(console.log(e,n),window.itemReady&&this.performRaycast("show"),n=="down")switch(e){case"left":this.controlState.leftKey=!0,this.controlState.rightKey=this.controlState.leftKeyUp=this.controlState.rightKeyUp=!1;break;case"up":this.controlState.upKey=!0,this.controlState.downKey=this.controlState.upKeyUp=this.controlState.downKeyUp=!1;break;case"right":this.controlState.rightKey=!0,this.controlState.leftKey=this.controlState.leftKeyUp=this.controlState.rightKeyUp=!1;break;case"down":this.controlState.downKey=!0,this.controlState.upKey=this.controlState.upKeyUp=this.controlState.downKeyUp=!1;break}if(n=="up"){switch(e){case"left":this.controlState.leftKey=!1,this.controlState.leftKeyUp=!0,this.controlState.rightKeyUp=!1;break;case"up":this.controlState.upKey=!1,this.controlState.upKeyUp=!0,this.controlState.downKeyUp=!1;break;case"right":this.controlState.rightKey=!1,this.controlState.leftKeyUp=!1,this.controlState.rightKeyUp=!0;break;case"down":this.controlState.downKey=!1,this.controlState.upKeyUp=!1,this.controlState.downKeyUp=!0;break}this.listItemActive(),console.log(this.state.currentOrbit,this.state.currentItem)}});tt(this,"listItemActive",()=>{setTimeout(()=>{if(this.state.currentOrbit!=0){const n=this.galaxy[this.state.currentOrbit].find(i=>i.children[0].userData.index==Math.abs(this.state.cubeAngle/this.state.targetAngle));if(!n){console.log("undefined"),this.listItemActive();return}this.state.currentItem=n.children[0].userData.name}else this.state.currentItem=this.items[0];document.querySelectorAll(".mx-list-item").forEach(n=>{n.classList.remove("hover")}),console.log(this.state.currentItem);const e=document.getElementById(`${this.state.currentItem}`);e.classList.add("hover"),scrollTo(e)},10)});tt(this,"selector",e=>{console.log(e),e!=null&&this.galaxy.flat().forEach(n=>{n.children[0].userData.name===e&&(this.state.currentItem=e,this.state.currentOrbit=n.children[0].userData.orbit,this.state.camPos=this.state.currentOrbit*this.params.radius,this.state.targetAngle=360/-this.orbit[this.state.currentOrbit],this.state.cubeAngle=n.children[0].userData.index*this.state.targetAngle)})});tt(this,"debug",()=>{this.isDebug?(this.scene.add(this.cube,this.cube2),this.controls.enabled=!0):(this.scene.remove(this.cube,this.cube2),this.controls.enabled=!1)});tt(this,"adjustRadius",()=>{this.galaxy.forEach((e,n)=>{e.forEach(i=>{i.children[0].position.set(0,0,this.params.radius*n)})}),this.cameraAnchor.position.z=this.params.radius*2});tt(this,"camInit",()=>{window.innerWidth<=this.config.breakpoint?(this.camDistance=this.config.mobileDistance,this.camShift=this.config.mobileShift):(this.camDistance=this.config.pcDistance,this.camShift=this.config.pcShift),this.camera.updateProjectionMatrix(),this.applyShift(this.camera,this.camShift)});tt(this,"applyShift",(e,n)=>{const i=e.projectionMatrix.clone();let r=n[0],s=n[1];i.elements[8]=-r*2,i.elements[9]=-s*2,e.projectionMatrix.copy(i),e.projectionMatrixInverse.copy(i).invert()});this.containerId=e,this.isDebug=!1,this.config={mobileDistance:1,pcDistance:.8,pcShift:[-2/10,0],mobileShift:[0,1/4],respondTime:.02,breakpoint:785.9,maxSpeed:2,speed:.05,baseUrl:"/shooting-star"},this.state={cubeAngle:0,rotSpeed:0,camPos:0,currentOrbit:0,currentItem:"sensor",targetAngle:0},this.controlState={leftKey:!1,rightKey:!1,leftKeyUp:!1,rightKeyUp:!1,upKey:!1,downKey:!1,upKeyUp:!1,downKeyUp:!0,leftFirst:!0,rightFirst:!0},this.params={radius:5},this.orbit=yf,this.items=Object.keys(kh.items),this.starSize=[1,.4,.2],this.galaxy=[],this.mouse=new Pe,this.init()}}const Sa=ge.createContext({galaxy:null,setGalaxy:()=>{}});function fb(){const t=ge.useRef(null),{setGalaxy:e}=ge.useContext(Sa);return ge.useEffect(()=>{if(t.current){const n=new db(t.current.id);return e(n),console.log("Scene useEffect"),()=>{}}},[]),xe.jsxs(xe.Fragment,{children:[xe.jsx("div",{id:"scene",className:"scene mx-mask-fade",ref:t,children:console.log("Scene")}),xe.jsxs("div",{className:"daylight",children:[xe.jsx("div",{className:"grad background-1"}),xe.jsx("div",{className:"grad background-2"}),xe.jsx("div",{className:"grad background-3"}),xe.jsx("div",{className:"grad background-4"}),xe.jsx("div",{className:"grad background-5"}),xe.jsx("div",{className:"grad background-6"}),xe.jsx("div",{className:"grad background-7"}),xe.jsx("div",{className:"grad background-8"}),xe.jsx("div",{className:"grad background-9"})]})]})}function hb(t){const e=WS(),{galaxy:n}=ge.useContext(Sa),i="/shooting-star",r=o=>{if(window.itemReady)e(o);else{const a=setInterval(()=>{window.itemReady&&(clearInterval(a),e(o))},100)}};ge.useEffect(()=>{if(!n)return;const o=document.querySelectorAll(".mx-list-item");let a;o.forEach(l=>{const u=()=>{let h=document.querySelector(".mx-list-item.hover");h&&h.classList.remove("hover"),a=setTimeout(()=>{n.selector(l.id),console.log(l.id)},100)},c=()=>{clearTimeout(a),n.selector(null)},d=()=>{n.selector(l.id),document.querySelector(".mx-list").classList.add("fade-out");const h=setInterval(()=>{window.itemReady&&(document.getElementById("visual").classList.add("shrink"),clearInterval(h))},100)};return l.addEventListener("mouseover",u),l.addEventListener("mouseout",c),l.addEventListener("click",d),()=>{l.removeEventListener("mouseover",u),l.removeEventListener("mouseout",c),l.removeEventListener("click",d)}})},[n]);const s=o=>{let a=o===0?0:yf.slice(0,o).reduce((u,c)=>u+c,0),l=a+yf[o];return Object.entries(kh.items).slice(a,l).map(([u,c])=>xe.jsxs("div",{id:u,className:"mx-list-item",onClick:()=>r(`.${i+"/"+u}`),children:[xe.jsxs("h3",{children:[c.name.zh,xe.jsx("span",{className:"subTitle",children:c.name.en})]}),xe.jsx("p",{children:c.description})]},u))};return xe.jsx(xe.Fragment,{children:xe.jsxs("div",{className:`mx-list ${t.className==null?"":t.className}`,children:[xe.jsx("h1",{children:"Lorem ipsum dolor sit amet consectetur."}),xe.jsx("p",{className:"mb-1",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident sequi est dolores neque corporis sunt nihil aspernatur nulla hic?"}),s(0),xe.jsx("hr",{}),xe.jsx("h2",{children:"曝光三要素"}),s(1),xe.jsx("hr",{}),xe.jsx("h2",{children:"其他"}),s(2),xe.jsx("div",{})]})})}function pb(t){const{galaxy:e}=ge.useContext(Sa);return console.log("no effect: ",e),ge.useEffect(()=>{if(console.log("useEffect: ",e),!e)return;const n=(a,l)=>{e.handleInput(a,l)},i=document.getElementById("button-left"),r=document.getElementById("button-right"),s=document.getElementById("button-up"),o=document.getElementById("button-down");return i.addEventListener("mousedown",()=>n("left","down")),s.addEventListener("mousedown",()=>n("up","down")),r.addEventListener("mousedown",()=>n("right","down")),o.addEventListener("mousedown",()=>n("down","down")),i.addEventListener("mouseup",()=>n("left","up")),s.addEventListener("mouseup",()=>n("up","up")),r.addEventListener("mouseup",()=>n("right","up")),o.addEventListener("mouseup",()=>n("down","up")),i.addEventListener("touchstart",a=>{a.preventDefault(),n("left","down")},{passive:!0}),s.addEventListener("touchstart",a=>{a.preventDefault(),n("up","down")},{passive:!0}),r.addEventListener("touchstart",a=>{a.preventDefault(),dleInput("right","down")},{passive:!0}),o.addEventListener("touchstart",a=>{a.preventDefault(),ndleInput("down","down")},{passive:!0}),i.addEventListener("touchend",a=>{a.preventDefault(),n("left","up")},{passive:!0}),s.addEventListener("touchend",a=>{a.preventDefault(),n("up","up")},{passive:!0}),r.addEventListener("touchend",a=>{a.preventDefault(),andleInput("right","up")},{passive:!0}),o.addEventListener("touchend",a=>{a.preventDefault(),n("down","up")},{passive:!0}),()=>{i.removeEventListener("mousedown",()=>n("left","down")),s.removeEventListener("mousedown",()=>n("up","down")),r.removeEventListener("mousedown",()=>n("right","down")),o.removeEventListener("mousedown",()=>n("down","down")),i.removeEventListener("mouseup",()=>n("left","up")),s.removeEventListener("mouseup",()=>n("up","up")),r.removeEventListener("mouseup",()=>n("right","up")),o.removeEventListener("mouseup",()=>n("down","up")),i.removeEventListener("touchstart",a=>{a.preventDefault(),n("left","down")}),s.removeEventListener("touchstart",a=>{a.preventDefault(),n("up","down")}),r.removeEventListener("touchstart",a=>{a.preventDefault(),dleInput("right","down")}),o.removeEventListener("touchstart",a=>{a.preventDefault(),ndleInput("down","down")}),i.removeEventListener("touchend",a=>{a.preventDefault(),n("left","up")}),s.removeEventListener("touchend",a=>{a.preventDefault(),n("up","up")}),r.removeEventListener("touchend",a=>{a.preventDefault(),andleInput("right","up")}),o.removeEventListener("touchend",a=>{a.preventDefault(),n("down","up")})}},[e]),xe.jsx("div",{id:"navigate",className:`arrows-container ${t.className==null?"":t.className}`,children:xe.jsxs("div",{className:"arrows",children:[xe.jsx("div",{className:"mx-button",id:"button-left"}),xe.jsx("div",{className:"mx-button",id:"button-right"}),xe.jsx("div",{className:"mx-button",id:"button-up"}),xe.jsx("div",{className:"mx-button",id:"button-down"})]})})}function mb(t){return xe.jsx("div",{className:"window",children:xe.jsx("div",{className:`window-view ${t.className}`})})}function D0(){const t=_h(),e="/shooting-star";return t.pathname==="/"||t.pathname===""||t.pathname===e||t.pathname===e+"/"}function gb(t){const{galaxy:e}=ge.useContext(Sa),[n,i]=ge.useState(null);return ge.useEffect(()=>{if(!e)return;const r=e.getCurrentItem(),s=kh.items[r];i(s)},[e]),xe.jsx("div",{className:`info d-flex align-items-center px-4 pe-lg-5 full-size ${t.className===void 0?"":t.className}`,children:n?xe.jsxs("div",{className:"info-content",children:[xe.jsxs("h1",{children:[n.name.zh," (",n.name.en,")"]}),xe.jsx("h2",{children:n.description}),xe.jsx("p",{children:n.content})]}):xe.jsx("h1",{children:"No item selected"})})}function _b(){const t=D0();return xe.jsxs("div",{className:"mx-container",children:[xe.jsxs("div",{className:"mx-first",children:[xe.jsx(mb,{className:t?"":"active"}),xe.jsx(pb,{className:t?"fade-in":"fade-out"})]}),xe.jsxs("div",{className:"mx-last",children:[xe.jsx(hb,{className:t?"fade-in":"fade-out"}),t?null:xe.jsx(gb,{})]})]})}const fl="/shooting-star",vb=Tf.lazy(()=>kv(()=>import("./Sensor-BJdLA4Rl.js"),__vite__mapDeps([0,1]))),xb=Tf.lazy(()=>kv(()=>import("./Aperture-DaZ5-LFy.js"),__vite__mapDeps([2,1])));function yb(){const t=D0(),[e,n]=ge.useState(null);return xe.jsxs(Sa.Provider,{value:{galaxy:e,setGalaxy:n},children:[xe.jsxs("div",{id:"visual",className:t?"":"shrink",children:[xe.jsx(fb,{}),xe.jsx(_b,{})]}),xe.jsx("div",{id:"content",children:xe.jsx(ge.Suspense,{fallback:xe.jsx("div",{children:"Loading..."}),children:xe.jsxs(sE,{children:[xe.jsx(Ao,{path:fl+"/",element:""}),xe.jsx(Ao,{path:fl,element:""}),xe.jsx(Ao,{path:fl+"/sensor",element:xe.jsx(vb,{})}),xe.jsx(Ao,{path:fl+"/aperture",element:xe.jsx(xb,{})})]})})})]})}kc.createRoot(document.getElementById("root")).render(xe.jsx(lE,{children:xe.jsx(yb,{})}));export{xe as j,ge as r};
