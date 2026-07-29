(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function dx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cg={exports:{}},nc={},ug={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),fx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),px=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),xx=Symbol.for("react.forward_ref"),_x=Symbol.for("react.suspense"),yx=Symbol.for("react.memo"),Sx=Symbol.for("react.lazy"),Vh=Symbol.iterator;function Mx(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var dg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fg=Object.assign,hg={};function Va(t,e,n){this.props=t,this.context=e,this.refs=hg,this.updater=n||dg}Va.prototype.isReactComponent={};Va.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Va.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pg(){}pg.prototype=Va.prototype;function _f(t,e,n){this.props=t,this.context=e,this.refs=hg,this.updater=n||dg}var yf=_f.prototype=new pg;yf.constructor=_f;fg(yf,Va.prototype);yf.isPureReactComponent=!0;var Wh=Array.isArray,mg=Object.prototype.hasOwnProperty,Sf={current:null},gg={key:!0,ref:!0,__self:!0,__source:!0};function vg(t,e,n){var i,r={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)mg.call(e,i)&&!gg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:eo,type:t,key:a,ref:s,props:r,_owner:Sf.current}}function Ex(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function Tx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jh=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tx(""+t.key):e.toString(36)}function il(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case eo:case fx:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ac(s,0):i,Wh(r)?(n="",t!=null&&(n=t.replace(jh,"$&/")+"/"),il(r,e,n,"",function(c){return c})):r!=null&&(Mf(r)&&(r=Ex(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(jh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Wh(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+Ac(a,o);s+=il(a,e,n,l,r)}else if(l=Mx(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+Ac(a,o++),s+=il(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function lo(t,e,n){if(t==null)return t;var i=[],r=0;return il(t,i,"","",function(a){return e.call(n,a,r++)}),i}function wx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},rl={transition:null},Ax={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:rl,ReactCurrentOwner:Sf};function xg(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:lo,forEach:function(t,e,n){lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lo(t,function(){e++}),e},toArray:function(t){return lo(t,function(e){return e})||[]},only:function(t){if(!Mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Va;Xe.Fragment=hx;Xe.Profiler=mx;Xe.PureComponent=_f;Xe.StrictMode=px;Xe.Suspense=_x;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;Xe.act=xg;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=fg({},t.props),r=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=Sf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)mg.call(e,l)&&!gg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:eo,type:t.type,key:r,ref:a,props:i,_owner:s}};Xe.createContext=function(t){return t={$$typeof:vx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gx,_context:t},t.Consumer=t};Xe.createElement=vg;Xe.createFactory=function(t){var e=vg.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:xx,render:t}};Xe.isValidElement=Mf;Xe.lazy=function(t){return{$$typeof:Sx,_payload:{_status:-1,_result:t},_init:wx}};Xe.memo=function(t,e){return{$$typeof:yx,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=rl.transition;rl.transition={};try{t()}finally{rl.transition=e}};Xe.unstable_act=xg;Xe.useCallback=function(t,e){return ln.current.useCallback(t,e)};Xe.useContext=function(t){return ln.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return ln.current.useEffect(t,e)};Xe.useId=function(){return ln.current.useId()};Xe.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return ln.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};Xe.useRef=function(t){return ln.current.useRef(t)};Xe.useState=function(t){return ln.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return ln.current.useTransition()};Xe.version="18.3.1";ug.exports=Xe;var Fe=ug.exports;const bx=dx(Fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=Fe,Rx=Symbol.for("react.element"),Px=Symbol.for("react.fragment"),Nx=Object.prototype.hasOwnProperty,Dx=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lx={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Nx.call(e,i)&&!Lx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Rx,type:t,key:a,ref:s,props:r,_owner:Dx.current}}nc.Fragment=Px;nc.jsx=_g;nc.jsxs=_g;cg.exports=nc;var h=cg.exports,Uu={},yg={exports:{}},bn={},Sg={exports:{}},Mg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,Y){var ie=F.length;F.push(Y);e:for(;0<ie;){var oe=ie-1>>>1,ue=F[oe];if(0<r(ue,Y))F[oe]=Y,F[ie]=ue,ie=oe;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var Y=F[0],ie=F.pop();if(ie!==Y){F[0]=ie;e:for(var oe=0,ue=F.length,Be=ue>>>1;oe<Be;){var Ye=2*(oe+1)-1,We=F[Ye],ee=Ye+1,he=F[ee];if(0>r(We,ie))ee<ue&&0>r(he,We)?(F[oe]=he,F[ee]=ie,oe=ee):(F[oe]=We,F[Ye]=ie,oe=Ye);else if(ee<ue&&0>r(he,ie))F[oe]=he,F[ee]=ie,oe=ee;else break e}}return Y}function r(F,Y){var ie=F.sortIndex-Y.sortIndex;return ie!==0?ie:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],p=1,g=null,f=3,u=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(F){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=F)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(F){if(y=!1,E(F),!v)if(n(l)!==null)v=!0,$(b);else{var Y=n(c);Y!==null&&H(S,Y.startTime-F)}}function b(F,Y){v=!1,y&&(y=!1,d(x),x=-1),u=!0;var ie=f;try{for(E(Y),g=n(l);g!==null&&(!(g.expirationTime>Y)||F&&!L());){var oe=g.callback;if(typeof oe=="function"){g.callback=null,f=g.priorityLevel;var ue=oe(g.expirationTime<=Y);Y=t.unstable_now(),typeof ue=="function"?g.callback=ue:g===n(l)&&i(l),E(Y)}else i(l);g=n(l)}if(g!==null)var Be=!0;else{var Ye=n(c);Ye!==null&&H(S,Ye.startTime-Y),Be=!1}return Be}finally{g=null,f=ie,u=!1}}var w=!1,C=null,x=-1,A=5,N=-1;function L(){return!(t.unstable_now()-N<A)}function I(){if(C!==null){var F=t.unstable_now();N=F;var Y=!0;try{Y=C(!0,F)}finally{Y?q():(w=!1,C=null)}}else w=!1}var q;if(typeof _=="function")q=function(){_(I)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,z=te.port2;te.port1.onmessage=I,q=function(){z.postMessage(null)}}else q=function(){m(I,0)};function $(F){C=F,w||(w=!0,q())}function H(F,Y){x=m(function(){F(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||u||(v=!0,$(b))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var ie=f;f=Y;try{return F()}finally{f=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ie=f;f=F;try{return Y()}finally{f=ie}},t.unstable_scheduleCallback=function(F,Y,ie){var oe=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?oe+ie:oe):ie=oe,F){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=ie+ue,F={id:p++,callback:Y,priorityLevel:F,startTime:ie,expirationTime:ue,sortIndex:-1},ie>oe?(F.sortIndex=ie,e(c,F),n(l)===null&&F===n(c)&&(y?(d(x),x=-1):y=!0,H(S,ie-oe))):(F.sortIndex=ue,e(l,F),v||u||(v=!0,$(b))),F},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(F){var Y=f;return function(){var ie=f;f=Y;try{return F.apply(this,arguments)}finally{f=ie}}}})(Mg);Sg.exports=Mg;var Ix=Sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=Fe,An=Ix;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eg=new Set,Ds={};function Gr(t,e){Da(t,e),Da(t+"Capture",e)}function Da(t,e){for(Ds[t]=e,t=0;t<e.length;t++)Eg.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,Fx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},qh={};function Ox(t){return Fu.call(qh,t)?!0:Fu.call(Xh,t)?!1:Fx.test(t)?qh[t]=!0:(Xh[t]=!0,!1)}function kx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bx(t,e,n,i){if(e===null||typeof e>"u"||kx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ef=/[\-:]([a-z])/g;function Tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ef,Tf);jt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ef,Tf);jt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ef,Tf);jt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bx(e,n,r,i)&&(n=null),i||r===null?Ox(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),ca=Symbol.for("react.portal"),ua=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),wg=Symbol.for("react.context"),bf=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),Ag=Symbol.for("react.offscreen"),$h=Symbol.iterator;function Ja(t){return t===null||typeof t!="object"?null:(t=$h&&t[$h]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,bc;function ps(t){if(bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||""}return`
`+bc+t}var Cc=!1;function Rc(t,e){if(!t||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ps(t):""}function zx(t){switch(t.tag){case 5:return ps(t.type);case 16:return ps("Lazy");case 13:return ps("Suspense");case 19:return ps("SuspenseList");case 0:case 2:case 15:return t=Rc(t.type,!1),t;case 11:return t=Rc(t.type.render,!1),t;case 1:return t=Rc(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ua:return"Fragment";case ca:return"Portal";case Ou:return"Profiler";case Af:return"StrictMode";case ku:return"Suspense";case Bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wg:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case bf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function Hx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gx(t){var e=bg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uo(t){t._valueTracker||(t._valueTracker=Gx(t))}function Cg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=bg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rg(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function Gu(t,e){Rg(t,e);var n=cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ms=Array.isArray;function Ma(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(ms(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function Pg(t,e){var n=cr(e.value),i=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ng(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ng(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fo,Dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vx=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(t){Vx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ss[e]=Ss[t]})});function Lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ss.hasOwnProperty(t)&&Ss[t]?(""+e).trim():e+"px"}function Ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Wx=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(Wx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Ea=null,Ta=null;function Qh(t){if(t=io(t)){if(typeof Yu!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=oc(e),Yu(t.stateNode,t.type,e))}}function Ug(t){Ea?Ta?Ta.push(t):Ta=[t]:Ea=t}function Fg(){if(Ea){var t=Ea,e=Ta;if(Ta=Ea=null,Qh(t),e)for(t=0;t<e.length;t++)Qh(e[t])}}function Og(t,e){return t(e)}function kg(){}var Pc=!1;function Bg(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return Og(t,e,n)}finally{Pc=!1,(Ea!==null||Ta!==null)&&(kg(),Fg())}}function Is(t,e){var n=t.stateNode;if(n===null)return null;var i=oc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Ku=!1;if(Pi)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{Ku=!1}function jx(t,e,n,i,r,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var Ms=!1,Ml=null,El=!1,Zu=null,Xx={onError:function(t){Ms=!0,Ml=t}};function qx(t,e,n,i,r,a,s,o,l){Ms=!1,Ml=null,jx.apply(Xx,arguments)}function $x(t,e,n,i,r,a,s,o,l){if(qx.apply(this,arguments),Ms){if(Ms){var c=Ml;Ms=!1,Ml=null}else throw Error(ce(198));El||(El=!0,Zu=c)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ep(t){if(Vr(t)!==t)throw Error(ce(188))}function Yx(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return ep(r),t;if(a===i)return ep(r),e;a=a.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Hg(t){return t=Yx(t),t!==null?Gg(t):null}function Gg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gg(t);if(e!==null)return e;t=t.sibling}return null}var Vg=An.unstable_scheduleCallback,tp=An.unstable_cancelCallback,Kx=An.unstable_shouldYield,Zx=An.unstable_requestPaint,Ct=An.unstable_now,Jx=An.unstable_getCurrentPriorityLevel,Pf=An.unstable_ImmediatePriority,Wg=An.unstable_UserBlockingPriority,Tl=An.unstable_NormalPriority,Qx=An.unstable_LowPriority,jg=An.unstable_IdlePriority,ic=null,oi=null;function e_(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:i_,t_=Math.log,n_=Math.LN2;function i_(t){return t>>>=0,t===0?32:31-(t_(t)/n_|0)|0}var ho=64,po=4194304;function gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=gs(o):(a&=s,a!==0&&(i=gs(a)))}else s=n&~r,s!==0?i=gs(s):a!==0&&(i=gs(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function r_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-Yn(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=r_(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xg(){var t=ho;return ho<<=1,!(ho&4194240)&&(ho=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function s_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function Nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $g,Df,Yg,Kg,Zg,Qu=!1,mo=[],tr=null,nr=null,ir=null,Us=new Map,Fs=new Map,Yi=[],o_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(e.pointerId)}}function es(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=io(e),e!==null&&Df(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function l_(t,e,n,i,r){switch(e){case"focusin":return tr=es(tr,t,e,n,i,r),!0;case"dragenter":return nr=es(nr,t,e,n,i,r),!0;case"mouseover":return ir=es(ir,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return Us.set(a,es(Us.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Fs.set(a,es(Fs.get(a)||null,t,e,n,i,r)),!0}return!1}function Jg(t){var e=br(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=zg(n),e!==null){t.blockedOn=e,Zg(t.priority,function(){Yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=io(n),e!==null&&Df(e),t.blockedOn=n,!1;e.shift()}return!0}function ip(t,e,n){al(t)&&n.delete(e)}function c_(){Qu=!1,tr!==null&&al(tr)&&(tr=null),nr!==null&&al(nr)&&(nr=null),ir!==null&&al(ir)&&(ir=null),Us.forEach(ip),Fs.forEach(ip)}function ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,c_)))}function Os(t){function e(r){return ts(r,t)}if(0<mo.length){ts(mo[0],t);for(var n=1;n<mo.length;n++){var i=mo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&ts(tr,t),nr!==null&&ts(nr,t),ir!==null&&ts(ir,t),Us.forEach(e),Fs.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)Jg(n),n.blockedOn===null&&Yi.shift()}var wa=Fi.ReactCurrentBatchConfig,Al=!0;function u_(t,e,n,i){var r=at,a=wa.transition;wa.transition=null;try{at=1,Lf(t,e,n,i)}finally{at=r,wa.transition=a}}function d_(t,e,n,i){var r=at,a=wa.transition;wa.transition=null;try{at=4,Lf(t,e,n,i)}finally{at=r,wa.transition=a}}function Lf(t,e,n,i){if(Al){var r=ed(t,e,n,i);if(r===null)Hc(t,e,i,bl,n),np(t,i);else if(l_(r,t,e,n,i))i.stopPropagation();else if(np(t,i),e&4&&-1<o_.indexOf(t)){for(;r!==null;){var a=io(r);if(a!==null&&$g(a),a=ed(t,e,n,i),a===null&&Hc(t,e,i,bl,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var bl=null;function ed(t,e,n,i){if(bl=null,t=Rf(i),t=br(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function Qg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jx()){case Pf:return 1;case Wg:return 4;case Tl:case Qx:return 16;case jg:return 536870912;default:return 16}default:return 16}}var Ji=null,If=null,sl=null;function ev(){if(sl)return sl;var t,e=If,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return sl=r.slice(t,1<i?1-i:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function rp(){return!1}function Cn(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?go:rp,this.isPropagationStopped=rp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),e}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=Cn(Wa),no=St({},Wa,{view:0,detail:0}),f_=Cn(no),Dc,Lc,ns,rc=St({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ns&&(ns&&t.type==="mousemove"?(Dc=t.screenX-ns.screenX,Lc=t.screenY-ns.screenY):Lc=Dc=0,ns=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),ap=Cn(rc),h_=St({},rc,{dataTransfer:0}),p_=Cn(h_),m_=St({},no,{relatedTarget:0}),Ic=Cn(m_),g_=St({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),v_=Cn(g_),x_=St({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),__=Cn(x_),y_=St({},Wa,{data:0}),sp=Cn(y_),S_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=E_[t])?!!e[t]:!1}function Ff(){return T_}var w_=St({},no,{key:function(t){if(t.key){var e=S_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A_=Cn(w_),b_=St({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Cn(b_),C_=St({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),R_=Cn(C_),P_=St({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),N_=Cn(P_),D_=St({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L_=Cn(D_),I_=[9,13,27,32],Of=Pi&&"CompositionEvent"in window,Es=null;Pi&&"documentMode"in document&&(Es=document.documentMode);var U_=Pi&&"TextEvent"in window&&!Es,tv=Pi&&(!Of||Es&&8<Es&&11>=Es),lp=" ",cp=!1;function nv(t,e){switch(t){case"keyup":return I_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var da=!1;function F_(t,e){switch(t){case"compositionend":return iv(e);case"keypress":return e.which!==32?null:(cp=!0,lp);case"textInput":return t=e.data,t===lp&&cp?null:t;default:return null}}function O_(t,e){if(da)return t==="compositionend"||!Of&&nv(t,e)?(t=ev(),sl=If=Ji=null,da=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tv&&e.locale!=="ko"?null:e.data;default:return null}}var k_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k_[t.type]:e==="textarea"}function rv(t,e,n,i){Ug(i),e=Cl(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ts=null,ks=null;function B_(t){mv(t,0)}function ac(t){var e=pa(t);if(Cg(e))return t}function z_(t,e){if(t==="change")return e}var av=!1;if(Pi){var Uc;if(Pi){var Fc="oninput"in document;if(!Fc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Fc=typeof dp.oninput=="function"}Uc=Fc}else Uc=!1;av=Uc&&(!document.documentMode||9<document.documentMode)}function fp(){Ts&&(Ts.detachEvent("onpropertychange",sv),ks=Ts=null)}function sv(t){if(t.propertyName==="value"&&ac(ks)){var e=[];rv(e,ks,t,Rf(t)),Bg(B_,e)}}function H_(t,e,n){t==="focusin"?(fp(),Ts=e,ks=n,Ts.attachEvent("onpropertychange",sv)):t==="focusout"&&fp()}function G_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(ks)}function V_(t,e){if(t==="click")return ac(e)}function W_(t,e){if(t==="input"||t==="change")return ac(e)}function j_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:j_;function Bs(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,e){var n=hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lv(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function X_(t){var e=lv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(i!==null&&kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=pp(n,a);var s=pp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q_=Pi&&"documentMode"in document&&11>=document.documentMode,fa=null,td=null,ws=null,nd=!1;function mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||fa==null||fa!==Sl(i)||(i=fa,"selectionStart"in i&&kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ws&&Bs(ws,i)||(ws=i,i=Cl(td,"onSelect"),0<i.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fa)))}function vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ha={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},Oc={},cv={};Pi&&(cv=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function sc(t){if(Oc[t])return Oc[t];if(!ha[t])return t;var e=ha[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cv)return Oc[t]=e[n];return t}var uv=sc("animationend"),dv=sc("animationiteration"),fv=sc("animationstart"),hv=sc("transitionend"),pv=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){pv.set(t,e),Gr(e,[t])}for(var kc=0;kc<gp.length;kc++){var Bc=gp[kc],$_=Bc.toLowerCase(),Y_=Bc[0].toUpperCase()+Bc.slice(1);hr($_,"on"+Y_)}hr(uv,"onAnimationEnd");hr(dv,"onAnimationIteration");hr(fv,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(hv,"onTransitionEnd");Da("onMouseEnter",["mouseout","mouseover"]);Da("onMouseLeave",["mouseout","mouseover"]);Da("onPointerEnter",["pointerout","pointerover"]);Da("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function vp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$x(i,e,void 0,t),t.currentTarget=null}function mv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;vp(r,o,c),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;vp(r,o,c),a=l}}}if(El)throw t=Zu,El=!1,Zu=null,t}function dt(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var i=t+"__bubble";n.has(i)||(gv(e,t,2,!1),n.add(i))}function zc(t,e,n){var i=0;e&&(i|=4),gv(n,t,i,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function zs(t){if(!t[xo]){t[xo]=!0,Eg.forEach(function(n){n!=="selectionchange"&&(K_.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,zc("selectionchange",!1,e))}}function gv(t,e,n,i){switch(Qg(e)){case 1:var r=u_;break;case 4:r=d_;break;default:r=Lf}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=br(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}Bg(function(){var c=a,p=Rf(n),g=[];e:{var f=pv.get(t);if(f!==void 0){var u=Uf,v=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":u=A_;break;case"focusin":v="focus",u=Ic;break;case"focusout":v="blur",u=Ic;break;case"beforeblur":case"afterblur":u=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=p_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=R_;break;case uv:case dv:case fv:u=v_;break;case hv:u=N_;break;case"scroll":u=f_;break;case"wheel":u=L_;break;case"copy":case"cut":case"paste":u=__;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=op}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,E;_!==null;){E=_;var S=E.stateNode;if(E.tag===5&&S!==null&&(E=S,d!==null&&(S=Is(_,d),S!=null&&y.push(Hs(_,S,E)))),m)break;_=_.return}0<y.length&&(f=new u(f,v,null,n,p),g.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",u=t==="mouseout"||t==="pointerout",f&&n!==$u&&(v=n.relatedTarget||n.fromElement)&&(br(v)||v[Ni]))break e;if((u||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,u?(v=n.relatedTarget||n.toElement,u=c,v=v?br(v):null,v!==null&&(m=Vr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(u=null,v=c),u!==v)){if(y=ap,S="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=op,S="onPointerLeave",d="onPointerEnter",_="pointer"),m=u==null?f:pa(u),E=v==null?f:pa(v),f=new y(S,_+"leave",u,n,p),f.target=m,f.relatedTarget=E,S=null,br(p)===c&&(y=new y(d,_+"enter",v,n,p),y.target=E,y.relatedTarget=m,S=y),m=S,u&&v)t:{for(y=u,d=v,_=0,E=y;E;E=qr(E))_++;for(E=0,S=d;S;S=qr(S))E++;for(;0<_-E;)y=qr(y),_--;for(;0<E-_;)d=qr(d),E--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=qr(y),d=qr(d)}y=null}else y=null;u!==null&&xp(g,f,u,y,!1),v!==null&&m!==null&&xp(g,m,v,y,!0)}}e:{if(f=c?pa(c):window,u=f.nodeName&&f.nodeName.toLowerCase(),u==="select"||u==="input"&&f.type==="file")var b=z_;else if(up(f))if(av)b=W_;else{b=G_;var w=H_}else(u=f.nodeName)&&u.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=V_);if(b&&(b=b(t,c))){rv(g,b,n,p);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Vu(f,"number",f.value)}switch(w=c?pa(c):window,t){case"focusin":(up(w)||w.contentEditable==="true")&&(fa=w,td=c,ws=null);break;case"focusout":ws=td=fa=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,mp(g,n,p);break;case"selectionchange":if(q_)break;case"keydown":case"keyup":mp(g,n,p)}var C;if(Of)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else da?nv(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(tv&&n.locale!=="ko"&&(da||x!=="onCompositionStart"?x==="onCompositionEnd"&&da&&(C=ev()):(Ji=p,If="value"in Ji?Ji.value:Ji.textContent,da=!0)),w=Cl(c,x),0<w.length&&(x=new sp(x,t,null,n,p),g.push({event:x,listeners:w}),C?x.data=C:(C=iv(n),C!==null&&(x.data=C)))),(C=U_?F_(t,n):O_(t,n))&&(c=Cl(c,"onBeforeInput"),0<c.length&&(p=new sp("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:c}),p.data=C))}mv(g,e)})}function Hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Is(t,n),a!=null&&i.unshift(Hs(t,a,r)),a=Is(t,e),a!=null&&i.push(Hs(t,a,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xp(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Is(n,a),l!=null&&s.unshift(Hs(n,l,o))):r||(l=Is(n,a),l!=null&&s.push(Hs(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Z_=/\r\n?/g,J_=/\u0000|\uFFFD/g;function _p(t){return(typeof t=="string"?t:""+t).replace(Z_,`
`).replace(J_,"")}function _o(t,e,n){if(e=_p(e),_p(t)!==e&&n)throw Error(ce(425))}function Rl(){}var id=null,rd=null;function ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,Q_=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(ty)}:sd;function ty(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Os(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Os(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ja=Math.random().toString(36).slice(2),ri="__reactFiber$"+ja,Gs="__reactProps$"+ja,Ni="__reactContainer$"+ja,od="__reactEvents$"+ja,ny="__reactListeners$"+ja,iy="__reactHandles$"+ja;function br(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sp(t);t!==null;){if(n=t[ri])return n;t=Sp(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[ri]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function oc(t){return t[Gs]||null}var ld=[],ma=-1;function pr(t){return{current:t}}function ft(t){0>ma||(t.current=ld[ma],ld[ma]=null,ma--)}function ut(t,e){ma++,ld[ma]=t.current,t.current=e}var ur={},en=pr(ur),pn=pr(!1),Ur=ur;function La(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Pl(){ft(pn),ft(en)}function Mp(t,e,n){if(en.current!==ur)throw Error(ce(168));ut(en,e),ut(pn,n)}function vv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Hx(t)||"Unknown",r));return St({},n,i)}function Nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Ur=en.current,ut(en,t),ut(pn,pn.current),!0}function Ep(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=vv(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,ft(pn),ft(en),ut(en,t)):ft(pn),ut(pn,n)}var Mi=null,lc=!1,Vc=!1;function xv(t){Mi===null?Mi=[t]:Mi.push(t)}function ry(t){lc=!0,xv(t)}function mr(){if(!Vc&&Mi!==null){Vc=!0;var t=0,e=at;try{var n=Mi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,lc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),Vg(Pf,mr),r}finally{at=e,Vc=!1}}return null}var ga=[],va=0,Dl=null,Ll=0,Ln=[],In=0,Fr=null,Ti=1,wi="";function Sr(t,e){ga[va++]=Ll,ga[va++]=Dl,Dl=t,Ll=e}function _v(t,e,n){Ln[In++]=Ti,Ln[In++]=wi,Ln[In++]=Fr,Fr=t;var i=Ti;t=wi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var a=32-Yn(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ti=1<<32-Yn(e)+r|n<<r|i,wi=a+t}else Ti=1<<a|n<<r|i,wi=t}function Bf(t){t.return!==null&&(Sr(t,1),_v(t,1,0))}function zf(t){for(;t===Dl;)Dl=ga[--va],ga[va]=null,Ll=ga[--va],ga[va]=null;for(;t===Fr;)Fr=Ln[--In],Ln[In]=null,wi=Ln[--In],Ln[In]=null,Ti=Ln[--In],Ln[In]=null}var wn=null,Tn=null,pt=!1,qn=null;function yv(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,Tn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:Ti,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,Tn=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(pt){var e=Tn;if(e){var n=e;if(!Tp(t,e)){if(cd(t))throw Error(ce(418));e=rr(n.nextSibling);var i=wn;e&&Tp(t,e)?yv(i,n):(t.flags=t.flags&-4097|2,pt=!1,wn=t)}}else{if(cd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,pt=!1,wn=t}}}function wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function yo(t){if(t!==wn)return!1;if(!pt)return wp(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ad(t.type,t.memoizedProps)),e&&(e=Tn)){if(cd(t))throw Sv(),Error(ce(418));for(;e;)yv(t,e),e=rr(e.nextSibling)}if(wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=wn?rr(t.stateNode.nextSibling):null;return!0}function Sv(){for(var t=Tn;t;)t=rr(t.nextSibling)}function Ia(){Tn=wn=null,pt=!1}function Hf(t){qn===null?qn=[t]:qn.push(t)}var ay=Fi.ReactCurrentBatchConfig;function is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=r.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function So(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ap(t){var e=t._init;return e(t._payload)}function Mv(t){function e(d,_){if(t){var E=d.deletions;E===null?(d.deletions=[_],d.flags|=16):E.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=lr(d,_),d.index=0,d.sibling=null,d}function a(d,_,E){return d.index=E,t?(E=d.alternate,E!==null?(E=E.index,E<_?(d.flags|=2,_):E):(d.flags|=2,_)):(d.flags|=1048576,_)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,_,E,S){return _===null||_.tag!==6?(_=Kc(E,d.mode,S),_.return=d,_):(_=r(_,E),_.return=d,_)}function l(d,_,E,S){var b=E.type;return b===ua?p(d,_,E.props.children,S,E.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qi&&Ap(b)===_.type)?(S=r(_,E.props),S.ref=is(d,_,E),S.return=d,S):(S=pl(E.type,E.key,E.props,null,d.mode,S),S.ref=is(d,_,E),S.return=d,S)}function c(d,_,E,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=Zc(E,d.mode,S),_.return=d,_):(_=r(_,E.children||[]),_.return=d,_)}function p(d,_,E,S,b){return _===null||_.tag!==7?(_=Ir(E,d.mode,S,b),_.return=d,_):(_=r(_,E),_.return=d,_)}function g(d,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Kc(""+_,d.mode,E),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case co:return E=pl(_.type,_.key,_.props,null,d.mode,E),E.ref=is(d,null,_),E.return=d,E;case ca:return _=Zc(_,d.mode,E),_.return=d,_;case qi:var S=_._init;return g(d,S(_._payload),E)}if(ms(_)||Ja(_))return _=Ir(_,d.mode,E,null),_.return=d,_;So(d,_)}return null}function f(d,_,E,S){var b=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return b!==null?null:o(d,_,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case co:return E.key===b?l(d,_,E,S):null;case ca:return E.key===b?c(d,_,E,S):null;case qi:return b=E._init,f(d,_,b(E._payload),S)}if(ms(E)||Ja(E))return b!==null?null:p(d,_,E,S,null);So(d,E)}return null}function u(d,_,E,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(E)||null,o(_,d,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case co:return d=d.get(S.key===null?E:S.key)||null,l(_,d,S,b);case ca:return d=d.get(S.key===null?E:S.key)||null,c(_,d,S,b);case qi:var w=S._init;return u(d,_,E,w(S._payload),b)}if(ms(S)||Ja(S))return d=d.get(E)||null,p(_,d,S,b,null);So(_,S)}return null}function v(d,_,E,S){for(var b=null,w=null,C=_,x=_=0,A=null;C!==null&&x<E.length;x++){C.index>x?(A=C,C=null):A=C.sibling;var N=f(d,C,E[x],S);if(N===null){C===null&&(C=A);break}t&&C&&N.alternate===null&&e(d,C),_=a(N,_,x),w===null?b=N:w.sibling=N,w=N,C=A}if(x===E.length)return n(d,C),pt&&Sr(d,x),b;if(C===null){for(;x<E.length;x++)C=g(d,E[x],S),C!==null&&(_=a(C,_,x),w===null?b=C:w.sibling=C,w=C);return pt&&Sr(d,x),b}for(C=i(d,C);x<E.length;x++)A=u(C,d,x,E[x],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?x:A.key),_=a(A,_,x),w===null?b=A:w.sibling=A,w=A);return t&&C.forEach(function(L){return e(d,L)}),pt&&Sr(d,x),b}function y(d,_,E,S){var b=Ja(E);if(typeof b!="function")throw Error(ce(150));if(E=b.call(E),E==null)throw Error(ce(151));for(var w=b=null,C=_,x=_=0,A=null,N=E.next();C!==null&&!N.done;x++,N=E.next()){C.index>x?(A=C,C=null):A=C.sibling;var L=f(d,C,N.value,S);if(L===null){C===null&&(C=A);break}t&&C&&L.alternate===null&&e(d,C),_=a(L,_,x),w===null?b=L:w.sibling=L,w=L,C=A}if(N.done)return n(d,C),pt&&Sr(d,x),b;if(C===null){for(;!N.done;x++,N=E.next())N=g(d,N.value,S),N!==null&&(_=a(N,_,x),w===null?b=N:w.sibling=N,w=N);return pt&&Sr(d,x),b}for(C=i(d,C);!N.done;x++,N=E.next())N=u(C,d,x,N.value,S),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?x:N.key),_=a(N,_,x),w===null?b=N:w.sibling=N,w=N);return t&&C.forEach(function(I){return e(d,I)}),pt&&Sr(d,x),b}function m(d,_,E,S){if(typeof E=="object"&&E!==null&&E.type===ua&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case co:e:{for(var b=E.key,w=_;w!==null;){if(w.key===b){if(b=E.type,b===ua){if(w.tag===7){n(d,w.sibling),_=r(w,E.props.children),_.return=d,d=_;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qi&&Ap(b)===w.type){n(d,w.sibling),_=r(w,E.props),_.ref=is(d,w,E),_.return=d,d=_;break e}n(d,w);break}else e(d,w);w=w.sibling}E.type===ua?(_=Ir(E.props.children,d.mode,S,E.key),_.return=d,d=_):(S=pl(E.type,E.key,E.props,null,d.mode,S),S.ref=is(d,_,E),S.return=d,d=S)}return s(d);case ca:e:{for(w=E.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(d,_.sibling),_=r(_,E.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Zc(E,d.mode,S),_.return=d,d=_}return s(d);case qi:return w=E._init,m(d,_,w(E._payload),S)}if(ms(E))return v(d,_,E,S);if(Ja(E))return y(d,_,E,S);So(d,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,E),_.return=d,d=_):(n(d,_),_=Kc(E,d.mode,S),_.return=d,d=_),s(d)):n(d,_)}return m}var Ua=Mv(!0),Ev=Mv(!1),Il=pr(null),Ul=null,xa=null,Gf=null;function Vf(){Gf=xa=Ul=null}function Wf(t){var e=Il.current;ft(Il),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Aa(t,e){Ul=t,Gf=xa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(Gf!==t)if(t={context:t,memoizedValue:e,next:null},xa===null){if(Ul===null)throw Error(ce(308));xa=t,Ul.dependencies={lanes:0,firstContext:t}}else xa=xa.next=t;return e}var Cr=null;function jf(t){Cr===null?Cr=[t]:Cr.push(t)}function Tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,jf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nf(t,n)}}function bp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,i){var r=t.updateQueue;$i=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==s&&(o===null?p.firstBaseUpdate=c:o.next=c,p.lastBaseUpdate=l))}if(a!==null){var g=r.baseState;s=0,p=c=l=null,o=a;do{var f=o.lane,u=o.eventTime;if((i&f)===f){p!==null&&(p=p.next={eventTime:u,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(f=e,u=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){g=v.call(u,g,f);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(u,g,f):v,f==null)break e;g=St({},g,f);break e;case 2:$i=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else u={eventTime:u,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(c=p=u,l=g):p=p.next=u,s|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(p===null&&(l=g),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);kr|=s,t.lanes=s,t.memoizedState=g}}function Cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ro={},li=pr(ro),Vs=pr(ro),Ws=pr(ro);function Rr(t){if(t===ro)throw Error(ce(174));return t}function qf(t,e){switch(ut(Ws,e),ut(Vs,t),ut(li,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}ft(li),ut(li,e)}function Fa(){ft(li),ft(Vs),ft(Ws)}function Av(t){Rr(Ws.current);var e=Rr(li.current),n=ju(e,t.type);e!==n&&(ut(Vs,t),ut(li,n))}function $f(t){Vs.current===t&&(ft(li),ft(Vs))}var vt=pr(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function Yf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var cl=Fi.ReactCurrentDispatcher,jc=Fi.ReactCurrentBatchConfig,Or=0,_t=null,It=null,Bt=null,kl=!1,As=!1,js=0,sy=0;function $t(){throw Error(ce(321))}function Kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Zf(t,e,n,i,r,a){if(Or=a,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cl.current=t===null||t.memoizedState===null?uy:dy,t=n(i,r),As){a=0;do{if(As=!1,js=0,25<=a)throw Error(ce(301));a+=1,Bt=It=null,e.updateQueue=null,cl.current=fy,t=n(i,r)}while(As)}if(cl.current=Bl,e=It!==null&&It.next!==null,Or=0,Bt=It=_t=null,kl=!1,e)throw Error(ce(300));return t}function Jf(){var t=js!==0;return js=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?_t.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Bn(){if(It===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Bt===null?_t.memoizedState:Bt.next;if(e!==null)Bt=e,It=t;else{if(t===null)throw Error(ce(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Bt===null?_t.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Xs(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,c=a;do{var p=c.lane;if((Or&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var g={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=g,s=i):l=l.next=g,_t.lanes|=p,kr|=p}c=c.next}while(c!==null&&c!==a);l===null?s=i:l.next=o,Zn(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,_t.lanes|=a,kr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);Zn(a,e.memoizedState)||(hn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function bv(){}function Cv(t,e){var n=_t,i=Bn(),r=e(),a=!Zn(i.memoizedState,r);if(a&&(i.memoizedState=r,hn=!0),i=i.queue,Qf(Nv.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,qs(9,Pv.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ce(349));Or&30||Rv(n,e,r)}return r}function Rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pv(t,e,n,i){e.value=n,e.getSnapshot=i,Dv(e)&&Lv(t)}function Nv(t,e,n){return n(function(){Dv(e)&&Lv(t)})}function Dv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function Lv(t){var e=Di(t,1);e!==null&&Kn(e,t,1,-1)}function Rp(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=cy.bind(null,_t,t),[e.memoizedState,t]}function qs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Iv(){return Bn().memoizedState}function ul(t,e,n,i){var r=ni();_t.flags|=t,r.memoizedState=qs(1|e,n,void 0,i===void 0?null:i)}function cc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var a=void 0;if(It!==null){var s=It.memoizedState;if(a=s.destroy,i!==null&&Kf(i,s.deps)){r.memoizedState=qs(e,n,a,i);return}}_t.flags|=t,r.memoizedState=qs(1|e,n,a,i)}function Pp(t,e){return ul(8390656,8,t,e)}function Qf(t,e){return cc(2048,8,t,e)}function Uv(t,e){return cc(4,2,t,e)}function Fv(t,e){return cc(4,4,t,e)}function Ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kv(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,Ov.bind(null,e,t),n)}function eh(){}function Bv(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function zv(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Hv(t,e,n){return Or&21?(Zn(n,e)||(n=Xg(),_t.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function oy(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=jc.transition;jc.transition={};try{t(!1),e()}finally{at=n,jc.transition=i}}function Gv(){return Bn().memoizedState}function ly(t,e,n){var i=or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Vv(t))Wv(e,n);else if(n=Tv(t,e,n,i),n!==null){var r=an();Kn(n,t,i,r),jv(n,e,i)}}function cy(t,e,n){var i=or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vv(t))Wv(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,Zn(o,s)){var l=e.interleaved;l===null?(r.next=r,jf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Tv(t,e,r,i),n!==null&&(r=an(),Kn(n,t,i,r),jv(n,e,i))}}function Vv(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function Wv(t,e){As=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nf(t,n)}}var Bl={readContext:kn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},uy={readContext:kn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,Ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ly.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Rp,useDebugValue:eh,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Rp(!1),e=t[0];return t=oy.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=ni();if(pt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),zt===null)throw Error(ce(349));Or&30||Rv(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,Pp(Nv.bind(null,i,a,t),[t]),i.flags|=2048,qs(9,Pv.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=ni(),e=zt.identifierPrefix;if(pt){var n=wi,i=Ti;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=js++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dy={readContext:kn,useCallback:Bv,useContext:kn,useEffect:Qf,useImperativeHandle:kv,useInsertionEffect:Uv,useLayoutEffect:Fv,useMemo:zv,useReducer:Xc,useRef:Iv,useState:function(){return Xc(Xs)},useDebugValue:eh,useDeferredValue:function(t){var e=Bn();return Hv(e,It.memoizedState,t)},useTransition:function(){var t=Xc(Xs)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:bv,useSyncExternalStore:Cv,useId:Gv,unstable_isNewReconciler:!1},fy={readContext:kn,useCallback:Bv,useContext:kn,useEffect:Qf,useImperativeHandle:kv,useInsertionEffect:Uv,useLayoutEffect:Fv,useMemo:zv,useReducer:qc,useRef:Iv,useState:function(){return qc(Xs)},useDebugValue:eh,useDeferredValue:function(t){var e=Bn();return It===null?e.memoizedState=t:Hv(e,It.memoizedState,t)},useTransition:function(){var t=qc(Xs)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:bv,useSyncExternalStore:Cv,useId:Gv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=or(t),a=bi(i,r);a.payload=e,n!=null&&(a.callback=n),e=ar(t,a,r),e!==null&&(Kn(e,t,r,i),ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=or(t),a=bi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=ar(t,a,r),e!==null&&(Kn(e,t,r,i),ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=or(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(Kn(e,t,i,n),ll(e,t,i))}};function Np(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!Bs(n,i)||!Bs(r,a):!0}function Xv(t,e,n){var i=!1,r=ur,a=e.contextType;return typeof a=="object"&&a!==null?a=kn(a):(r=mn(e)?Ur:en.current,i=e.contextTypes,a=(i=i!=null)?La(t,r):ur),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xf(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=kn(a):(a=mn(e)?Ur:en.current,r.context=La(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(fd(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uc.enqueueReplaceState(r,r.state,null),Fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Oa(t,e){try{var n="",i=e;do n+=zx(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function qv(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hl||(Hl=!0,Td=i),pd(t,e)},n}function $v(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=by.bind(null,t,e,n),e.then(t,t))}function Ip(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var py=Fi.ReactCurrentOwner,hn=!1;function rn(t,e,n,i){e.child=t===null?Ev(e,null,n,i):Ua(e,t.child,n,i)}function Fp(t,e,n,i,r){n=n.render;var a=e.ref;return Aa(e,r),i=Zf(t,e,n,i,a,r),n=Jf(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(pt&&n&&Bf(e),e.flags|=1,rn(t,e,i,r),e.child)}function Op(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!lh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,Yv(t,e,a,i,r)):(t=pl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Bs,n(s,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=lr(a,i),t.ref=e.ref,t.return=e,e.child=t}function Yv(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(Bs(a,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return md(t,e,n,i,r)}function Kv(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ya,Sn),Sn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(ya,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,ut(ya,Sn),Sn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,ut(ya,Sn),Sn|=i;return rn(t,e,r,n),e.child}function Zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var a=mn(n)?Ur:en.current;return a=La(e,a),Aa(e,r),n=Zf(t,e,n,i,a,r),i=Jf(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(pt&&i&&Bf(e),e.flags|=1,rn(t,e,n,r),e.child)}function kp(t,e,n,i,r){if(mn(n)){var a=!0;Nl(e)}else a=!1;if(Aa(e,r),e.stateNode===null)dl(t,e),Xv(e,n,i),hd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=mn(n)?Ur:en.current,c=La(e,c));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Dp(e,s,i,c),$i=!1;var f=e.memoizedState;s.state=f,Fl(e,i,s,r),l=e.memoizedState,o!==i||f!==l||pn.current||$i?(typeof p=="function"&&(fd(e,n,p,i),l=e.memoizedState),(o=$i||Np(e,n,o,i,f,l,c))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,wv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),s.props=c,g=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=mn(n)?Ur:en.current,l=La(e,l));var u=n.getDerivedStateFromProps;(p=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==g||f!==l)&&Dp(e,s,i,l),$i=!1,f=e.memoizedState,s.state=f,Fl(e,i,s,r);var v=e.memoizedState;o!==g||f!==v||pn.current||$i?(typeof u=="function"&&(fd(e,n,u,i),v=e.memoizedState),(c=$i||Np(e,n,c,i,f,v,l)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),s.props=i,s.state=v,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,a,r)}function gd(t,e,n,i,r,a){Zv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Ep(e,n,!1),Li(t,e,a);i=e.stateNode,py.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ua(e,t.child,null,a),e.child=Ua(e,null,o,a)):rn(t,e,o,a),e.memoizedState=i.state,r&&Ep(e,n,!0),e.child}function Jv(t){var e=t.stateNode;e.pendingContext?Mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mp(t,e.context,!1),qf(t,e.containerInfo)}function Bp(t,e,n,i,r){return Ia(),Hf(r),e.flags|=256,rn(t,e,n,i),e.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qv(t,e,n){var i=e.pendingProps,r=vt.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(vt,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=hc(s,i,0,null),t=Ir(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=xd(n),e.memoizedState=vd,t):th(e,s));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return my(t,e,s,i,o,r,n);if(a){a=i.fallback,s=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=lr(o,a):(a=Ir(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?xd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=vd,i}return a=t.child,t=a.sibling,i=lr(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function th(t,e){return e=hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mo(t,e,n,i){return i!==null&&Hf(i),Ua(e,t.child,null,n),t=th(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function my(t,e,n,i,r,a,s){if(n)return e.flags&256?(e.flags&=-257,i=$c(Error(ce(422))),Mo(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=hc({mode:"visible",children:i.children},r,0,null),a=Ir(a,r,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Ua(e,t.child,null,s),e.child.memoizedState=xd(s),e.memoizedState=vd,a);if(!(e.mode&1))return Mo(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(ce(419)),i=$c(a,i,void 0),Mo(t,e,s,i)}if(o=(s&t.childLanes)!==0,hn||o){if(i=zt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Di(t,r),Kn(i,t,r,-1))}return oh(),i=$c(Error(ce(421))),Mo(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Cy.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,Tn=rr(r.nextSibling),wn=e,pt=!0,qn=null,t!==null&&(Ln[In++]=Ti,Ln[In++]=wi,Ln[In++]=Fr,Ti=t.id,wi=t.overflow,Fr=e),e=th(e,i.children),e.flags|=4096,e)}function zp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Yc(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function e0(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(rn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zp(t,n,e);else if(t.tag===19)zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Yc(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Yc(e,!0,n,null,a);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gy(t,e,n){switch(e.tag){case 3:Jv(e),Ia();break;case 5:Av(e);break;case 1:mn(e.type)&&Nl(e);break;case 4:qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?Qv(t,e,n):(ut(vt,vt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);ut(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return e0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,Kv(t,e,n)}return Li(t,e,n)}var t0,_d,n0,i0;t0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};n0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(li.current);var a=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),a=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),a=[];break;case"textarea":r=Wu(t,r),i=Wu(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rl)}Xu(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ds.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ds.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),a||o===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};i0=function(t,e,n,i){n!==i&&(e.flags|=4)};function rs(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vy(t,e,n){var i=e.pendingProps;switch(zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return mn(e.type)&&Pl(),Yt(e),null;case 3:return i=e.stateNode,Fa(),ft(pn),ft(en),Yf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(bd(qn),qn=null))),_d(t,e),Yt(e),null;case 5:$f(e);var r=Rr(Ws.current);if(n=e.type,t!==null&&e.stateNode!=null)n0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Yt(e),null}if(t=Rr(li.current),yo(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[ri]=e,i[Gs]=a,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<vs.length;r++)dt(vs[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":Yh(i,a),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},dt("invalid",i);break;case"textarea":Zh(i,a),dt("invalid",i)}Xu(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",""+o]):Ds.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&dt("scroll",i)}switch(n){case"input":uo(i),Kh(i,a,!0);break;case"textarea":uo(i),Jh(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ng(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ri]=e,t[Gs]=i,t0(t,e,!1,!1),e.stateNode=t;e:{switch(s=qu(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<vs.length;r++)dt(vs[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":Yh(t,i),r=Hu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),dt("invalid",t);break;case"textarea":Zh(t,i),r=Wu(t,i),dt("invalid",t);break;default:r=i}Xu(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?Ig(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Dg(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ls(t,l):typeof l=="number"&&Ls(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ds.hasOwnProperty(a)?l!=null&&a==="onScroll"&&dt("scroll",t):l!=null&&wf(t,a,l,s))}switch(n){case"input":uo(t),Kh(t,i,!1);break;case"textarea":uo(t),Jh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cr(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Ma(t,!!i.multiple,a,!1):i.defaultValue!=null&&Ma(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)i0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Rr(Ws.current),Rr(li.current),yo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(a=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:_o(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Yt(e),null;case 13:if(ft(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Tn!==null&&e.mode&1&&!(e.flags&128))Sv(),Ia(),e.flags|=98560,a=!1;else if(a=yo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ce(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ce(317));a[ri]=e}else Ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),a=!1}else qn!==null&&(bd(qn),qn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Ut===0&&(Ut=3):oh())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Fa(),_d(t,e),t===null&&zs(e.stateNode.containerInfo),Yt(e),null;case 10:return Wf(e.type._context),Yt(e),null;case 17:return mn(e.type)&&Pl(),Yt(e),null;case 19:if(ft(vt),a=e.memoizedState,a===null)return Yt(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)rs(a,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ol(t),s!==null){for(e.flags|=128,rs(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(vt,vt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Ct()>ka&&(e.flags|=128,i=!0,rs(a,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!pt)return Yt(e),null}else 2*Ct()-a.renderingStartTime>ka&&n!==1073741824&&(e.flags|=128,i=!0,rs(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ct(),e.sibling=null,n=vt.current,ut(vt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return sh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function xy(t,e){switch(zf(e),e.tag){case 1:return mn(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fa(),ft(pn),ft(en),Yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $f(e),null;case 13:if(ft(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Ia()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(vt),null;case 4:return Fa(),null;case 10:return Wf(e.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var Eo=!1,Jt=!1,_y=typeof WeakSet=="function"?WeakSet:Set,Te=null;function _a(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function yd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Hp=!1;function yy(t,e){if(id=Al,t=lv(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,p=0,g=t,f=null;t:for(;;){for(var u;g!==n||r!==0&&g.nodeType!==3||(o=s+r),g!==a||i!==0&&g.nodeType!==3||(l=s+i),g.nodeType===3&&(s+=g.nodeValue.length),(u=g.firstChild)!==null;)f=g,g=u;for(;;){if(g===t)break t;if(f===n&&++c===r&&(o=s),f===a&&++p===i&&(l=s),(u=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=u}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Al=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return v=Hp,Hp=!1,v}function bs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&yd(e,n,a)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r0(t){var e=t.alternate;e!==null&&(t.alternate=null,r0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Gs],delete e[od],delete e[ny],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a0(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var Ht=null,Xn=!1;function zi(t,e,n){for(n=n.child;n!==null;)s0(t,e,n),n=n.sibling}function s0(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:Jt||_a(n,e);case 6:var i=Ht,r=Xn;Ht=null,zi(t,e,n),Ht=i,Xn=r,Ht!==null&&(Xn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Xn?(t=Ht,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),Os(t)):Gc(Ht,n.stateNode));break;case 4:i=Ht,r=Xn,Ht=n.stateNode.containerInfo,Xn=!0,zi(t,e,n),Ht=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&yd(n,e,s),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!Jt&&(_a(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,zi(t,e,n),Jt=i):zi(t,e,n);break;default:zi(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _y),e.forEach(function(i){var r=Ry.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Xn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Xn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(Ht===null)throw Error(ce(160));s0(a,s,r),Ht=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o0(e,t),e=e.sibling}function o0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),Qn(t),i&4){try{bs(3,t,t.return),dc(3,t)}catch(y){Tt(t,t.return,y)}try{bs(5,t,t.return)}catch(y){Tt(t,t.return,y)}}break;case 1:Hn(e,t),Qn(t),i&512&&n!==null&&_a(n,n.return);break;case 5:if(Hn(e,t),Qn(t),i&512&&n!==null&&_a(n,n.return),t.flags&32){var r=t.stateNode;try{Ls(r,"")}catch(y){Tt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Rg(r,a),qu(o,s);var c=qu(o,a);for(s=0;s<l.length;s+=2){var p=l[s],g=l[s+1];p==="style"?Ig(r,g):p==="dangerouslySetInnerHTML"?Dg(r,g):p==="children"?Ls(r,g):wf(r,p,g,c)}switch(o){case"input":Gu(r,a);break;case"textarea":Pg(r,a);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var u=a.value;u!=null?Ma(r,!!a.multiple,u,!1):f!==!!a.multiple&&(a.defaultValue!=null?Ma(r,!!a.multiple,a.defaultValue,!0):Ma(r,!!a.multiple,a.multiple?[]:"",!1))}r[Gs]=a}catch(y){Tt(t,t.return,y)}}break;case 6:if(Hn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(y){Tt(t,t.return,y)}}break;case 3:if(Hn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Os(e.containerInfo)}catch(y){Tt(t,t.return,y)}break;case 4:Hn(e,t),Qn(t);break;case 13:Hn(e,t),Qn(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(rh=Ct())),i&4&&Vp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||p,Hn(e,t),Jt=c):Hn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(Te=t,p=t.child;p!==null;){for(g=Te=p;Te!==null;){switch(f=Te,u=f.child,f.tag){case 0:case 11:case 14:case 15:bs(4,f,f.return);break;case 1:_a(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Tt(i,n,y)}}break;case 5:_a(f,f.return);break;case 22:if(f.memoizedState!==null){jp(g);continue}}u!==null?(u.return=f,Te=u):jp(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{r=g.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=g.stateNode,l=g.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Lg("display",s))}catch(y){Tt(t,t.return,y)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(y){Tt(t,t.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Hn(e,t),Qn(t),i&4&&Vp(t);break;case 21:break;default:Hn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(a0(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ls(r,""),i.flags&=-33);var a=Gp(t);Ed(t,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=Gp(t);Md(t,o,s);break;default:throw Error(ce(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sy(t,e,n){Te=t,l0(t)}function l0(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Eo;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=Eo;var c=Jt;if(Eo=s,(Jt=l)&&!c)for(Te=r;Te!==null;)s=Te,l=s.child,s.tag===22&&s.memoizedState!==null?Xp(r):l!==null?(l.return=s,Te=l):Xp(r);for(;a!==null;)Te=a,l0(a),a=a.sibling;Te=r,Eo=o,Jt=c}Wp(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,Te=a):Wp(t)}}function Wp(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Cp(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cp(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Os(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Jt||e.flags&512&&Sd(e)}catch(f){Tt(e,e.return,f)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function jp(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Xp(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var a=e.return;try{Sd(e)}catch(l){Tt(e,a,l)}break;case 5:var s=e.return;try{Sd(e)}catch(l){Tt(e,s,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var My=Math.ceil,zl=Fi.ReactCurrentDispatcher,nh=Fi.ReactCurrentOwner,On=Fi.ReactCurrentBatchConfig,et=0,zt=null,Dt=null,Vt=0,Sn=0,ya=pr(0),Ut=0,$s=null,kr=0,fc=0,ih=0,Cs=null,fn=null,rh=0,ka=1/0,yi=null,Hl=!1,Td=null,sr=null,To=!1,Qi=null,Gl=0,Rs=0,wd=null,fl=-1,hl=0;function an(){return et&6?Ct():fl!==-1?fl:fl=Ct()}function or(t){return t.mode&1?et&2&&Vt!==0?Vt&-Vt:ay.transition!==null?(hl===0&&(hl=Xg()),hl):(t=at,t!==0||(t=window.event,t=t===void 0?16:Qg(t.type)),t):1}function Kn(t,e,n,i){if(50<Rs)throw Rs=0,wd=null,Error(ce(185));to(t,n,i),(!(et&2)||t!==zt)&&(t===zt&&(!(et&2)&&(fc|=n),Ut===4&&Ki(t,Vt)),gn(t,i),n===1&&et===0&&!(e.mode&1)&&(ka=Ct()+500,lc&&mr()))}function gn(t,e){var n=t.callbackNode;a_(t,e);var i=wl(t,t===zt?Vt:0);if(i===0)n!==null&&tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tp(n),e===1)t.tag===0?ry(qp.bind(null,t)):xv(qp.bind(null,t)),ey(function(){!(et&6)&&mr()}),n=null;else{switch(qg(i)){case 1:n=Pf;break;case 4:n=Wg;break;case 16:n=Tl;break;case 536870912:n=jg;break;default:n=Tl}n=g0(n,c0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function c0(t,e){if(fl=-1,hl=0,et&6)throw Error(ce(327));var n=t.callbackNode;if(ba()&&t.callbackNode!==n)return null;var i=wl(t,t===zt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=et;et|=2;var a=d0();(zt!==t||Vt!==e)&&(yi=null,ka=Ct()+500,Lr(t,e));do try{wy();break}catch(o){u0(t,o)}while(!0);Vf(),zl.current=a,et=r,Dt!==null?e=0:(zt=null,Vt=0,e=Ut)}if(e!==0){if(e===2&&(r=Ju(t),r!==0&&(i=r,e=Ad(t,r))),e===1)throw n=$s,Lr(t,0),Ki(t,i),gn(t,Ct()),n;if(e===6)Ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ey(r)&&(e=Vl(t,i),e===2&&(a=Ju(t),a!==0&&(i=a,e=Ad(t,a))),e===1))throw n=$s,Lr(t,0),Ki(t,i),gn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Mr(t,fn,yi);break;case 3:if(Ki(t,i),(i&130023424)===i&&(e=rh+500-Ct(),10<e)){if(wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sd(Mr.bind(null,t,fn,yi),e);break}Mr(t,fn,yi);break;case 4:if(Ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Yn(i);a=1<<s,s=e[s],s>r&&(r=s),i&=~a}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*My(i/1960))-i,10<i){t.timeoutHandle=sd(Mr.bind(null,t,fn,yi),i);break}Mr(t,fn,yi);break;case 5:Mr(t,fn,yi);break;default:throw Error(ce(329))}}}return gn(t,Ct()),t.callbackNode===n?c0.bind(null,t):null}function Ad(t,e){var n=Cs;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=fn,fn=n,e!==null&&bd(e)),t}function bd(t){fn===null?fn=t:fn.push.apply(fn,t)}function Ey(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Zn(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ki(t,e){for(e&=~ih,e&=~fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function qp(t){if(et&6)throw Error(ce(327));ba();var e=wl(t,0);if(!(e&1))return gn(t,Ct()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Ju(t);i!==0&&(e=i,n=Ad(t,i))}if(n===1)throw n=$s,Lr(t,0),Ki(t,e),gn(t,Ct()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,fn,yi),gn(t,Ct()),null}function ah(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(ka=Ct()+500,lc&&mr())}}function Br(t){Qi!==null&&Qi.tag===0&&!(et&6)&&ba();var e=et;et|=1;var n=On.transition,i=at;try{if(On.transition=null,at=1,t)return t()}finally{at=i,On.transition=n,et=e,!(et&6)&&mr()}}function sh(){Sn=ya.current,ft(ya)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Q_(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(zf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pl();break;case 3:Fa(),ft(pn),ft(en),Yf();break;case 5:$f(i);break;case 4:Fa();break;case 13:ft(vt);break;case 19:ft(vt);break;case 10:Wf(i.type._context);break;case 22:case 23:sh()}n=n.return}if(zt=t,Dt=t=lr(t.current,null),Vt=Sn=e,Ut=0,$s=null,ih=fc=kr=0,fn=Cs=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}Cr=null}return t}function u0(t,e){do{var n=Dt;try{if(Vf(),cl.current=Bl,kl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kl=!1}if(Or=0,Bt=It=_t=null,As=!1,js=0,nh.current=null,n===null||n.return===null){Ut=1,$s=e,Dt=null;break}e:{var a=t,s=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=o,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var u=Ip(s);if(u!==null){u.flags&=-257,Up(u,s,o,a,e),u.mode&1&&Lp(a,c,e),e=u,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Lp(a,c,e),oh();break e}l=Error(ce(426))}}else if(pt&&o.mode&1){var m=Ip(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Up(m,s,o,a,e),Hf(Oa(l,o));break e}}a=l=Oa(l,o),Ut!==4&&(Ut=2),Cs===null?Cs=[a]:Cs.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var d=qv(a,l,e);bp(a,d);break e;case 1:o=l;var _=a.type,E=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(sr===null||!sr.has(E)))){a.flags|=65536,e&=-e,a.lanes|=e;var S=$v(a,o,e);bp(a,S);break e}}a=a.return}while(a!==null)}h0(n)}catch(b){e=b,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function d0(){var t=zl.current;return zl.current=Bl,t===null?Bl:t}function oh(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),zt===null||!(kr&268435455)&&!(fc&268435455)||Ki(zt,Vt)}function Vl(t,e){var n=et;et|=2;var i=d0();(zt!==t||Vt!==e)&&(yi=null,Lr(t,e));do try{Ty();break}catch(r){u0(t,r)}while(!0);if(Vf(),et=n,zl.current=i,Dt!==null)throw Error(ce(261));return zt=null,Vt=0,Ut}function Ty(){for(;Dt!==null;)f0(Dt)}function wy(){for(;Dt!==null&&!Kx();)f0(Dt)}function f0(t){var e=m0(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?h0(t):Dt=e,nh.current=null}function h0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xy(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Dt=null;return}}else if(n=vy(n,e,Sn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Mr(t,e,n){var i=at,r=On.transition;try{On.transition=null,at=1,Ay(t,e,n,i)}finally{On.transition=r,at=i}return null}function Ay(t,e,n,i){do ba();while(Qi!==null);if(et&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(s_(t,a),t===zt&&(Dt=zt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,g0(Tl,function(){return ba(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=On.transition,On.transition=null;var s=at;at=1;var o=et;et|=4,nh.current=null,yy(t,n),o0(n,t),X_(rd),Al=!!id,rd=id=null,t.current=n,Sy(n),Zx(),et=o,at=s,On.transition=a}else t.current=n;if(To&&(To=!1,Qi=t,Gl=r),a=t.pendingLanes,a===0&&(sr=null),e_(n.stateNode),gn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hl)throw Hl=!1,t=Td,Td=null,t;return Gl&1&&t.tag!==0&&ba(),a=t.pendingLanes,a&1?t===wd?Rs++:(Rs=0,wd=t):Rs=0,mr(),null}function ba(){if(Qi!==null){var t=qg(Gl),e=On.transition,n=at;try{if(On.transition=null,at=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,Gl=0,et&6)throw Error(ce(331));var r=et;for(et|=4,Te=t.current;Te!==null;){var a=Te,s=a.child;if(Te.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Te=c;Te!==null;){var p=Te;switch(p.tag){case 0:case 11:case 15:bs(8,p,a)}var g=p.child;if(g!==null)g.return=p,Te=g;else for(;Te!==null;){p=Te;var f=p.sibling,u=p.return;if(r0(p),p===c){Te=null;break}if(f!==null){f.return=u,Te=f;break}Te=u}}}var v=a.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Te=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,Te=s;else e:for(;Te!==null;){if(a=Te,a.flags&2048)switch(a.tag){case 0:case 11:case 15:bs(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,Te=d;break e}Te=a.return}}var _=t.current;for(Te=_;Te!==null;){s=Te;var E=s.child;if(s.subtreeFlags&2064&&E!==null)E.return=s,Te=E;else e:for(s=_;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:dc(9,o)}}catch(b){Tt(o,o.return,b)}if(o===s){Te=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Te=S;break e}Te=o.return}}if(et=r,mr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(ic,t)}catch{}i=!0}return i}finally{at=n,On.transition=e}}return!1}function $p(t,e,n){e=Oa(n,e),e=qv(t,e,1),t=ar(t,e,1),e=an(),t!==null&&(to(t,1,e),gn(t,e))}function Tt(t,e,n){if(t.tag===3)$p(t,t,n);else for(;e!==null;){if(e.tag===3){$p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=Oa(n,t),t=$v(e,t,1),e=ar(e,t,1),t=an(),e!==null&&(to(e,1,t),gn(e,t));break}}e=e.return}}function by(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Vt&n)===n&&(Ut===4||Ut===3&&(Vt&130023424)===Vt&&500>Ct()-rh?Lr(t,0):ih|=n),gn(t,e)}function p0(t,e){e===0&&(t.mode&1?(e=po,po<<=1,!(po&130023424)&&(po=4194304)):e=1);var n=an();t=Di(t,e),t!==null&&(to(t,e,n),gn(t,n))}function Cy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),p0(t,n)}function Ry(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),p0(t,n)}var m0;m0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,gy(t,e,n);hn=!!(t.flags&131072)}else hn=!1,pt&&e.flags&1048576&&_v(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;dl(t,e),t=e.pendingProps;var r=La(e,en.current);Aa(e,n),r=Zf(null,e,i,t,r,n);var a=Jf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(a=!0,Nl(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xf(e),r.updater=uc,e.stateNode=r,r._reactInternals=e,hd(e,i,t,n),e=gd(null,e,i,!0,a,n)):(e.tag=0,pt&&a&&Bf(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ny(i),t=jn(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=kp(null,e,i,t,n);break e;case 11:e=Fp(null,e,i,t,n);break e;case 14:e=Op(null,e,i,jn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),kp(t,e,i,r,n);case 3:e:{if(Jv(e),t===null)throw Error(ce(387));i=e.pendingProps,a=e.memoizedState,r=a.element,wv(t,e),Fl(e,i,null,n);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Oa(Error(ce(423)),e),e=Bp(t,e,i,n,r);break e}else if(i!==r){r=Oa(Error(ce(424)),e),e=Bp(t,e,i,n,r);break e}else for(Tn=rr(e.stateNode.containerInfo.firstChild),wn=e,pt=!0,qn=null,n=Ev(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ia(),i===r){e=Li(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return Av(e),t===null&&ud(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,s=r.children,ad(i,r)?s=null:a!==null&&ad(i,a)&&(e.flags|=32),Zv(t,e),rn(t,e,s,n),e.child;case 6:return t===null&&ud(e),null;case 13:return Qv(t,e,n);case 4:return qf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ua(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Fp(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,s=r.value,ut(Il,i._currentValue),i._currentValue=s,a!==null)if(Zn(a.value,s)){if(a.children===r.children&&!pn.current){e=Li(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=bi(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),dd(a.return,n,e),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ce(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),dd(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Aa(e,n),r=kn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Op(t,e,i,r,n);case 15:return Yv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),dl(t,e),e.tag=1,mn(i)?(t=!0,Nl(e)):t=!1,Aa(e,n),Xv(e,i,r),hd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return e0(t,e,n);case 22:return Kv(t,e,n)}throw Error(ce(156,e.tag))};function g0(t,e){return Vg(t,e)}function Py(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new Py(t,e,n,i)}function lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ny(t){if(typeof t=="function")return lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bf)return 11;if(t===Cf)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pl(t,e,n,i,r,a){var s=2;if(i=t,typeof t=="function")lh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ua:return Ir(n.children,r,a,e);case Af:s=8,r|=8;break;case Ou:return t=Fn(12,n,e,r|2),t.elementType=Ou,t.lanes=a,t;case ku:return t=Fn(13,n,e,r),t.elementType=ku,t.lanes=a,t;case Bu:return t=Fn(19,n,e,r),t.elementType=Bu,t.lanes=a,t;case Ag:return hc(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:s=10;break e;case wg:s=9;break e;case bf:s=11;break e;case Cf:s=14;break e;case qi:s=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Fn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Ir(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function hc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Ag,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Dy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ch(t,e,n,i,r,a,s,o,l){return t=new Dy(t,e,n,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Fn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xf(a),t}function Ly(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ca,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function v0(t){if(!t)return ur;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(mn(n))return vv(t,n,e)}return e}function x0(t,e,n,i,r,a,s,o,l){return t=ch(n,i,!0,t,r,a,s,o,l),t.context=v0(null),n=t.current,i=an(),r=or(n),a=bi(i,r),a.callback=e??null,ar(n,a,r),t.current.lanes=r,to(t,r,i),gn(t,i),t}function pc(t,e,n,i){var r=e.current,a=an(),s=or(r);return n=v0(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,s),t!==null&&(Kn(t,r,s,a),ll(t,r,s)),s}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function uh(t,e){Yp(t,e),(t=t.alternate)&&Yp(t,e)}function Iy(){return null}var _0=typeof reportError=="function"?reportError:function(t){console.error(t)};function dh(t){this._internalRoot=t}mc.prototype.render=dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));pc(t,e,null,null)};mc.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){pc(null,t,null,null)}),e[Ni]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&Jg(t)}};function fh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function Uy(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=Wl(s);a.call(c)}}var s=x0(e,i,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=s,t[Ni]=s.current,zs(t.nodeType===8?t.parentNode:t),Br(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Wl(l);o.call(c)}}var l=ch(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=l,t[Ni]=l.current,zs(t.nodeType===8?t.parentNode:t),Br(function(){pc(e,l,n,i)}),l}function vc(t,e,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=Wl(s);o.call(l)}}pc(e,s,t,r)}else s=Uy(n,e,t,r,i);return Wl(s)}$g=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=gs(e.pendingLanes);n!==0&&(Nf(e,n|1),gn(e,Ct()),!(et&6)&&(ka=Ct()+500,mr()))}break;case 13:Br(function(){var i=Di(t,1);if(i!==null){var r=an();Kn(i,t,1,r)}}),uh(t,1)}};Df=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=an();Kn(e,t,134217728,n)}uh(t,134217728)}};Yg=function(t){if(t.tag===13){var e=or(t),n=Di(t,e);if(n!==null){var i=an();Kn(n,t,e,i)}uh(t,e)}};Kg=function(){return at};Zg=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Yu=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=oc(i);if(!r)throw Error(ce(90));Cg(i),Gu(i,r)}}}break;case"textarea":Pg(t,n);break;case"select":e=n.value,e!=null&&Ma(t,!!n.multiple,e,!1)}};Og=ah;kg=Br;var Fy={usingClientEntryPoint:!1,Events:[io,pa,oc,Ug,Fg,ah]},as={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hg(t),t===null?null:t.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{ic=wo.inject(Oy),oi=wo}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fh(e))throw Error(ce(200));return Ly(t,e,null,n)};bn.createRoot=function(t,e){if(!fh(t))throw Error(ce(299));var n=!1,i="",r=_0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ch(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,zs(t.nodeType===8?t.parentNode:t),new dh(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Hg(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Br(t)};bn.hydrate=function(t,e,n){if(!gc(e))throw Error(ce(200));return vc(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!fh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=_0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=x0(e,null,t,1,n??null,r,!1,a,s),t[Ni]=e.current,zs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mc(e)};bn.render=function(t,e,n){if(!gc(e))throw Error(ce(200));return vc(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!gc(t))throw Error(ce(40));return t._reactRootContainer?(Br(function(){vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};bn.unstable_batchedUpdates=ah;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return vc(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y0)}catch(t){console.error(t)}}y0(),yg.exports=bn;var ky=yg.exports,Zp=ky;Uu.createRoot=Zp.createRoot,Uu.hydrateRoot=Zp.hydrateRoot;const un=[{key:"str",label:"FUE",full:"Fuerza"},{key:"dex",label:"DES",full:"Destreza"},{key:"con",label:"CON",full:"Constitución"},{key:"int",label:"INT",full:"Inteligencia"},{key:"wis",label:"SAB",full:"Sabiduría"},{key:"cha",label:"CAR",full:"Carisma"}],Ys=[{name:"Atletismo",ab:"str"},{name:"Acrobacias",ab:"dex"},{name:"Juego de Manos",ab:"dex"},{name:"Sigilo",ab:"dex"},{name:"Arcanos",ab:"int"},{name:"Historia",ab:"int"},{name:"Investigación",ab:"int"},{name:"Naturaleza",ab:"int"},{name:"Religión",ab:"int"},{name:"Trato con Animales",ab:"wis"},{name:"Perspicacia",ab:"wis"},{name:"Medicina",ab:"wis"},{name:"Percepción",ab:"wis"},{name:"Supervivencia",ab:"wis"},{name:"Engaño",ab:"cha"},{name:"Intimidación",ab:"cha"},{name:"Interpretación",ab:"cha"},{name:"Persuasión",ab:"cha"}],Jc={Humano:{fixed:{str:1,dex:1,con:1,int:1,wis:1,cha:1}},"Alto Elfo":{fixed:{dex:2,int:1}},"Enano de las Colinas":{fixed:{con:2,wis:1}},"Mediano Piesligero":{fixed:{dex:2,cha:1}},Dracónido:{fixed:{str:2,cha:1}},"Gnomo de las Rocas":{fixed:{int:2,con:1}},Semielfo:{fixed:{cha:2},choice:{count:2,amount:1}},Semiorco:{fixed:{str:2,con:1}},Tiefling:{fixed:{cha:2,int:1}}},Tr={Bárbaro:{hitDie:12,saves:["str","con"],spellcasting:null,tabName:"Furia e Instinto",unlockLevel:3,subclasses:["Camino del Berserker","Camino del Guerrero Totémico","Camino del Corazón Salvaje"]},Bardo:{hitDie:8,saves:["dex","cha"],spellcasting:{type:"full",ability:"cha"},tabName:"Repertorio",unlockLevel:3,subclasses:["Colegio del Conocimiento","Colegio del Valor","Colegio de la Glamour"]},Clérigo:{hitDie:8,saves:["wis","cha"],spellcasting:{type:"full",ability:"wis"},tabName:"Dones Divinos",unlockLevel:1,subclasses:["Dominio de la Vida","Dominio de la Guerra","Dominio de la Luz","Dominio Arcano"]},Druida:{hitDie:8,saves:["int","wis"],spellcasting:{type:"full",ability:"wis"},tabName:"Cantos de la Naturaleza",unlockLevel:2,subclasses:["Círculo de la Tierra","Círculo de la Luna","Círculo de las Estrellas"]},Explorador:{hitDie:10,saves:["str","dex"],spellcasting:{type:"half",ability:"wis"},tabName:"Senda Salvaje",unlockLevel:3,subclasses:["Cazador","Señor de las Bestias","Vagabundo Feérico"]},Guerrero:{hitDie:10,saves:["str","con"],spellcasting:null,tabName:"Técnicas de Combate",unlockLevel:3,subclasses:["Campeón","Maestro de Batalla","Caballero Arcano"]},Hechicero:{hitDie:6,saves:["con","cha"],spellcasting:{type:"full",ability:"cha"},tabName:"Linaje Arcano",unlockLevel:1,subclasses:["Linaje Dracónico","Magia Salvaje","Alma Mecánica"]},Mago:{hitDie:6,saves:["int","wis"],spellcasting:{type:"full",ability:"int"},tabName:"Grimorio",unlockLevel:2,subclasses:["Escuela de Evocación","Escuela de Abjuración","Escuela de Nigromancia"]},Monje:{hitDie:8,saves:["str","dex"],spellcasting:null,tabName:"Disciplinas de Ki",unlockLevel:3,subclasses:["Camino de la Mano Abierta","Camino de la Sombra","Camino de los Cuatro Elementos"]},Paladín:{hitDie:10,saves:["wis","cha"],spellcasting:{type:"half",ability:"cha"},tabName:"Juramento Sagrado",unlockLevel:3,subclasses:["Juramento de Devoción","Juramento de Venganza","Juramento de los Ancestros"]},Pícaro:{hitDie:8,saves:["dex","int"],spellcasting:null,tabName:"Trucos del Oficio",unlockLevel:3,subclasses:["Ladrón","Asesino","Embaucador Arcano"]},Brujo:{hitDie:8,saves:["wis","cha"],spellcasting:{type:"pact",ability:"cha"},tabName:"Pacto de Sangre",unlockLevel:1,subclasses:["Patrón Arquihada","Patrón Fiendish","Patrón Great Old One"]}},Jp=[{name:"Alerta",description:"+5 a la Iniciativa. No podés ser sorprendido mientras estés consciente. Otras criaturas no ganan ventaja por atacar sin ser vistas.",category:"utility"},{name:"Afortunado",description:"Tenés 3 puntos de suerte por descanso largo. Podés gastar 1 para tirar un d20 adicional en ataques, pruebas o salvaciones, o forzar a un enemigo a repetir su ataque.",category:"utility"},{name:"Duro de Pelar",description:"Tu máximo de Puntos de Golpe aumenta en una cantidad igual al doble de tu nivel actual. Cada vez que subas de nivel, tus PG aumentan en 2 adicionales.",category:"defense"},{name:"Mago de Guerra",description:"Ventaja en salvaciones de CON para mantener concentración en conjuros. Podés realizar componentes somáticos sosteniendo armas/escudo. Usás reacción para lanzar conjuros como ataque de oportunidad.",prerequisite:"Capacidad de lanzar al menos un conjuro",category:"magic",spellcasterOnly:!0},{name:"Maestro de Armas Grandes",description:"Al asestar un crítico o reducir a 0 PG con un arma pesada cuerpo a cuerpo, podés realizar un ataque adicional como acción bonus. Podés elegir sufrir -5 al ataque para infligir +10 al daño.",prerequisite:"Competencia en armas marciales",category:"combat",martialOnly:!0},{name:"Tirador Certero",description:"Atacar a rango máximo con armas a distancia no impone desventaja. Tus ataques a distancia ignoran cobertura media (1/2) y tres cuartos (3/4). Podés sufrir -5 al ataque para infligir +10 al daño.",prerequisite:"Competencia en armas a distancia",category:"combat",martialOnly:!0},{name:"Resiliente",description:"Aumentás un atributo a tu elección en +1 y ganás competencia en las tiradas de salvación de ese atributo.",category:"defense"},{name:"Móvil",description:"Tu velocidad aumenta en 3 metros. Al usar Esprintar, el terreno difícil no te frena. Al realizar un ataque cuerpo a cuerpo contra una criatura, no provocás ataques de oportunidad de ella el resto del turno.",category:"utility"},{name:"Iniciado en la Magia",description:"Aprendés 2 trucos y 1 hechizo de nivel 1 de la lista de una clase mágica a tu elección (Mago, Clérigo, Druida, Bardo, Hechicero o Brujo). Podés lanzar el hechizo de nivel 1 gratis 1 vez por descanso largo.",category:"magic"},{name:"Curandero",description:"Al usar un kit de curandero para estabilizar, la criatura recupera 1 PG. Además, podés gastar 1 uso del kit para curar 1d6 + 4 + nivel de PG a una criatura (1 vez por descanso).",category:"utility"},{name:"Maestro de los Escudos",description:"Al usar la acción de Atacar con un escudo equipado, podés usar una acción bonus para empujar a una criatura a 1.5m. Sumás la CA del escudo a salvaciones de DES individuales.",prerequisite:"Competencia en Escudos",category:"defense",martialOnly:!0},{name:"Duelista Defensivo",description:"Al empuñar un arma sutil en la que sos competente, podés usar tu reacción cuando te ataquen para sumar tu bono de competencia a la CA contra ese ataque.",prerequisite:"Destreza 13 o superior",category:"defense",martialOnly:!0},{name:"Francotirador de Conjuros",description:"Duplica el alcance de los conjuros que requieren una tirada de ataque. Tus ataques de conjuro ignoran cobertura media y tres cuartos. Aprendés 1 truco con tirada de ataque.",prerequisite:"Capacidad de lanzar al menos un conjuro",category:"magic",spellcasterOnly:!0},{name:"Actor",description:"Aumentá tu Carisma en +1. Tenés ventaja en Pruebas de Engaño e Interpretación al hacerte pasar por otra persona. Podés imitar la voz o sonidos de criaturas escuchadas durante 1 minuto.",category:"utility"},{name:"Observador",description:"Aumentá Inteligencia o Sabiduría en +1. Ganás +5 a tu Percepción pasiva e Investigación pasiva. Podés leer los labios de cualquier criatura si comprendés su idioma.",category:"utility"},{name:"Atacante Salvaje",description:"Una vez por turno, al tirar el daño de un ataque cuerpo a cuerpo con arma, podés volver a tirar los dados de daño y elegir el mayor de los dos resultados.",category:"combat",martialOnly:!0},{name:"Iniciador en el Combate",description:"Aprendés un Estilo de Combate de la lista del Guerrero (Arqueria, Defensa, Duelista, Armas Grandes, Protección, etc.).",prerequisite:"Competencia en armas marciales",category:"combat",martialOnly:!0},{name:"Contendiente Habilidoso",description:"Ganás competencia inmediata en 3 habilidades o herramientas a tu elección.",category:"utility"},{name:"Centinela",description:"Cuando golpeas a una criatura con un ataque de oportunidad, su velocidad se convierte en 0. Podés realizar ataques de oportunidad incluso si usan la acción de Destrabarse.",category:"combat",martialOnly:!0},{name:"Adepto Elemental",description:"Elegís un tipo de daño elemental (Fuego, Frío, Relámpago, Ácido o Trueno). Tus conjuros ignoran la resistencia a ese elemento y los 1s en dados de daño cuentan como 2s.",prerequisite:"Capacidad de lanzar al menos un conjuro",category:"magic",spellcasterOnly:!0}];function By(t,e,n){let i=0;return n==="Humano"&&(i+=1),e>=4&&(i+=1),t==="Guerrero"&&e>=6&&(i+=1),e>=8&&(i+=1),t==="Pícaro"&&e>=10&&(i+=1),e>=12&&(i+=1),t==="Guerrero"&&e>=14&&(i+=1),e>=16&&(i+=1),e>=19&&(i+=1),i}const zy=[{name:"Cegado",emoji:"👁️‍🗨️",description:"Fallas automáticas en pruebas de vista. Desventaja en tus ataques; ataques contra vos tienen ventaja."},{name:"Hechizado",emoji:"💖",description:"No podés atacar al encantador. El encantador tiene ventaja en pruebas de interacción social contigo."},{name:"Ensordecido",emoji:"🔇",description:"Fallas automáticas en pruebas de audición."},{name:"Asustado",emoji:"😱",description:"Desventaja en pruebas y ataques mientras la fuente del miedo sea visible. No podés acercarte a ella."},{name:"Agarrado",emoji:"✊",description:"Velocidad 0. Finaliza si el apresador queda incapacitado o si eres desplazado."},{name:"Incapacitado",emoji:"💤",description:"No podés realizar acciones ni reacciones."},{name:"Invisible",emoji:"👻",description:"Imposible de detectar visualmente sin magia. Ventaja en tus ataques; ataques contra vos tienen desventaja."},{name:"Paralizado",emoji:"⚡",description:"Incapacitado y sin movimiento. Fallas automáticamente salvaciones de FUE y DES. Ataques contra vos tienen ventaja y a 1.5m son críticos."},{name:"Petrificado",emoji:"🗿",description:"Transformado en piedra. Inmune a veneno y enfermedades. Resistencia a todo daño."},{name:"Envenenado",emoji:"☠️",description:"Desventaja en tiradas de ataque y pruebas de habilidad."},{name:"Derribado",emoji:"🤼",description:"Solo podés gatear. Desventaja en tus ataques. Ataques cuerpo a cuerpo a 1.5m tienen ventaja; a distancia tienen desventaja."},{name:"Apresado",emoji:"🕸️",description:"Velocidad 0. Desventaja en tus ataques y en salvaciones de DES. Ataques contra vos tienen ventaja."},{name:"Aturdido",emoji:"💫",description:"Incapacitado, no podés moverte. Fallas salvaciones de FUE y DES. Ataques contra vos tienen ventaja."},{name:"Inconsciente",emoji:"😵",description:"Incapacitado e inconsciente, caes derribado. Fallas salvaciones de FUE y DES. Ataques contra vos tienen ventaja y a 1.5m son críticos."},{name:"Agotamiento 1",emoji:"🍖",description:"Desventaja en pruebas de habilidad."},{name:"Agotamiento 2",emoji:"🍖🍖",description:"Velocidad reducida a la mitad."},{name:"Agotamiento 3",emoji:"🍖🍖🍖",description:"Desventaja en tiradas de ataque y salvaciones."}],Qp=["Gato","Búho","Rata","Cuervo","Araña","Serpiente venenosa","Mefita de fuego","Rana venenosa","Halcón","Tejón","Pez volador","Pseudodragón (nivel alto)"],Hy={1:[2,0,0,0,0,0,0,0,0],2:[3,0,0,0,0,0,0,0,0],3:[4,2,0,0,0,0,0,0,0],4:[4,3,0,0,0,0,0,0,0],5:[4,3,2,0,0,0,0,0,0],6:[4,3,3,0,0,0,0,0,0],7:[4,3,3,1,0,0,0,0,0],8:[4,3,3,2,0,0,0,0,0],9:[4,3,3,3,1,0,0,0,0],10:[4,3,3,3,2,0,0,0,0],11:[4,3,3,3,2,1,0,0,0],12:[4,3,3,3,2,1,0,0,0],13:[4,3,3,3,2,1,1,0,0],14:[4,3,3,3,2,1,1,0,0],15:[4,3,3,3,2,1,1,1,0],16:[4,3,3,3,2,1,1,1,0],17:[4,3,3,3,2,1,1,1,1],18:[4,3,3,3,3,1,1,1,1],19:[4,3,3,3,3,2,1,1,1],20:[4,3,3,3,3,2,2,1,1]},Gy={1:[0,0,0,0,0],2:[2,0,0,0,0],3:[3,0,0,0,0],4:[3,0,0,0,0],5:[4,2,0,0,0],6:[4,2,0,0,0],7:[4,3,0,0,0],8:[4,3,0,0,0],9:[4,3,2,0,0],10:[4,3,2,0,0],11:[4,3,3,0,0],12:[4,3,3,0,0],13:[4,3,3,1,0],14:[4,3,3,1,0],15:[4,3,3,2,0],16:[4,3,3,2,0],17:[4,3,3,3,1],18:[4,3,3,3,1],19:[4,3,3,3,2],20:[4,3,3,3,2]},Vy={1:{count:1,level:1},2:{count:2,level:1},3:{count:2,level:2},4:{count:2,level:2},5:{count:2,level:3},6:{count:2,level:3},7:{count:2,level:4},8:{count:2,level:4},9:{count:2,level:5},10:{count:2,level:5},11:{count:3,level:5},12:{count:3,level:5},13:{count:3,level:5},14:{count:3,level:5},15:{count:3,level:5},16:{count:3,level:5},17:{count:4,level:5},18:{count:4,level:5},19:{count:4,level:5},20:{count:4,level:5}},Ao={8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9};function Nt(t){return Math.floor((t-10)/2)}function Si(t){return t>=17?6:t>=13?5:t>=9?4:t>=5?3:2}function dn(t){return t>=0?`+${t}`:String(t)}function em(t,e,n){const i=Math.floor(t/2)+1;return t+n+(e-1)*(i+n)}function Wy(t,e){const n=[];switch(t){case"Bárbaro":{const i=e>=20?99:e>=17?6:e>=12?5:e>=6?4:e>=3?3:2,r=e>=16?4:e>=9?3:2;n.push({key:"rage",label:`Furia (usos, +${r} daño cuerpo a cuerpo)`,max:i});break}case"Pícaro":{const i=Math.ceil(e/2);n.push({key:"sneak",label:`Ataque Furtivo — ${i}d6 (informativo, no consume usos)`,max:0,info:!0});break}case"Monje":{const i=e>=17?"1d10":e>=11?"1d8":e>=5?"1d6":"1d4";n.push({key:"ki",label:`Puntos de Ki (dado de artes marciales ${i})`,max:e>=2?e:0});break}case"Guerrero":{n.push({key:"secondwind",label:"Aliento de Combate (1/descanso corto)",max:1}),e>=2&&n.push({key:"actionsurge",label:"Acción Adicional",max:e>=17?2:1});break}case"Paladín":{n.push({key:"layonhands",label:`Imposición de Manos (reserva de ${e*5} PG)`,max:e*5});break}case"Druida":{n.push({key:"wildshape",label:"Forma Salvaje (usos/descanso corto)",max:e>=20?99:e>=2?2:0});break}case"Clérigo":{n.push({key:"channel",label:"Canalizar Divinidad (usos)",max:e>=6?2:e>=2?1:0});break}case"Hechicero":{n.push({key:"sorcery",label:"Puntos de Hechicería",max:e>=2?e:0});break}case"Bardo":{const i=e>=15?"1d12":e>=10?"1d10":e>=5?"1d8":"1d6";n.push({key:"inspiration",label:`Inspiración Bárdica (dado ${i})`,max:0,info:!0});break}}return n}const bo=[{name:"Bastón",category:"simple",range:"cuerpo a cuerpo",dice:"1d6",damageType:"contundente",properties:["versátil"],versatileDice:"1d8"},{name:"Clava",category:"simple",range:"cuerpo a cuerpo",dice:"1d4",damageType:"contundente",properties:["ligera"]},{name:"Daga",category:"simple",range:"cuerpo a cuerpo",dice:"1d4",damageType:"perforante",properties:["ligera","sutil","arrojadiza"],throwRange:"6/18 m"},{name:"Gran clava",category:"simple",range:"cuerpo a cuerpo",dice:"1d8",damageType:"contundente",properties:["a dos manos"]},{name:"Hacha de mano",category:"simple",range:"cuerpo a cuerpo",dice:"1d6",damageType:"cortante",properties:["ligera","arrojadiza"],throwRange:"6/18 m"},{name:"Hoz",category:"simple",range:"cuerpo a cuerpo",dice:"1d4",damageType:"cortante",properties:["ligera"]},{name:"Jabalina",category:"simple",range:"cuerpo a cuerpo",dice:"1d6",damageType:"perforante",properties:["arrojadiza"],throwRange:"9/36 m"},{name:"Lanza",category:"simple",range:"cuerpo a cuerpo",dice:"1d6",damageType:"perforante",properties:["arrojadiza","versátil"],throwRange:"6/18 m",versatileDice:"1d8"},{name:"Martillo ligero",category:"simple",range:"cuerpo a cuerpo",dice:"1d4",damageType:"contundente",properties:["ligera","arrojadiza"],throwRange:"6/18 m"},{name:"Maza",category:"simple",range:"cuerpo a cuerpo",dice:"1d6",damageType:"contundente",properties:[]},{name:"Arco corto",category:"simple",range:"a distancia",dice:"1d6",damageType:"perforante",properties:["munición","a dos manos"],ammoRange:"24/96 m"},{name:"Ballesta ligera",category:"simple",range:"a distancia",dice:"1d8",damageType:"perforante",properties:["munición","carga","a dos manos"],ammoRange:"24/96 m"},{name:"Dardo",category:"simple",range:"a distancia",dice:"1d4",damageType:"perforante",properties:["sutil","arrojadiza"],throwRange:"6/18 m"},{name:"Honda",category:"simple",range:"a distancia",dice:"1d4",damageType:"contundente",properties:["munición"],ammoRange:"9/36 m"},{name:"Alabarda",category:"marcial",range:"cuerpo a cuerpo",dice:"1d10",damageType:"cortante",properties:["pesada","alcance","a dos manos"]},{name:"Cimitarra",category:"marcial",range:"cuerpo a cuerpo",dice:"1d6",damageType:"cortante",properties:["ligera","sutil"]},{name:"Espada corta",category:"marcial",range:"cuerpo a cuerpo",dice:"1d6",damageType:"perforante",properties:["ligera","sutil"]},{name:"Espada larga",category:"marcial",range:"cuerpo a cuerpo",dice:"1d8",damageType:"cortante",properties:["versátil"],versatileDice:"1d10"},{name:"Espada ropera",category:"marcial",range:"cuerpo a cuerpo",dice:"1d8",damageType:"perforante",properties:["sutil"]},{name:"Espadón",category:"marcial",range:"cuerpo a cuerpo",dice:"2d6",damageType:"cortante",properties:["pesada","a dos manos"]},{name:"Gran hacha",category:"marcial",range:"cuerpo a cuerpo",dice:"1d12",damageType:"cortante",properties:["pesada","a dos manos"]},{name:"Hacha de batalla",category:"marcial",range:"cuerpo a cuerpo",dice:"1d8",damageType:"cortante",properties:["versátil"],versatileDice:"1d10"},{name:"Látigo",category:"marcial",range:"cuerpo a cuerpo",dice:"1d4",damageType:"cortante",properties:["sutil","alcance"]},{name:"Lucero del alba",category:"marcial",range:"cuerpo a cuerpo",dice:"1d8",damageType:"perforante",properties:[]},{name:"Martillo de guerra",category:"marcial",range:"cuerpo a cuerpo",dice:"1d8",damageType:"contundente",properties:["versátil"],versatileDice:"1d10"},{name:"Mazo",category:"marcial",range:"cuerpo a cuerpo",dice:"2d6",damageType:"contundente",properties:["pesada","a dos manos"]},{name:"Pica",category:"marcial",range:"cuerpo a cuerpo",dice:"1d10",damageType:"perforante",properties:["pesada","alcance","a dos manos"]},{name:"Tridente",category:"marcial",range:"cuerpo a cuerpo",dice:"1d6",damageType:"perforante",properties:["arrojadiza","versátil"],throwRange:"6/18 m",versatileDice:"1d8"},{name:"Arco largo",category:"marcial",range:"a distancia",dice:"1d8",damageType:"perforante",properties:["munición","pesada","a dos manos"],ammoRange:"45/180 m"},{name:"Ballesta de mano",category:"marcial",range:"a distancia",dice:"1d6",damageType:"perforante",properties:["munición","ligera","carga"],ammoRange:"9/36 m"},{name:"Ballesta pesada",category:"marcial",range:"a distancia",dice:"1d10",damageType:"perforante",properties:["munición","pesada","carga","a dos manos"],ammoRange:"30/120 m"},{name:"Red",category:"marcial",range:"a distancia",dice:"—",damageType:"contundente",properties:["especial","arrojadiza"],throwRange:"1.5/4.5 m"}],Sa=[{name:"Acolchada",type:"ligera",acBase:11,addDex:!0,stealthDisadvantage:!0,cost:"5 po"},{name:"Cuero",type:"ligera",acBase:11,addDex:!0,stealthDisadvantage:!1,cost:"10 po"},{name:"Cuero tachonado",type:"ligera",acBase:12,addDex:!0,stealthDisadvantage:!1,cost:"45 po"},{name:"Pieles",type:"media",acBase:12,addDex:!0,maxDex:2,stealthDisadvantage:!1,cost:"10 po"},{name:"Camisa de malla",type:"media",acBase:13,addDex:!0,maxDex:2,stealthDisadvantage:!1,cost:"50 po"},{name:"Coraza",type:"media",acBase:14,addDex:!0,maxDex:2,stealthDisadvantage:!1,cost:"400 po"},{name:"Cota de escamas",type:"media",acBase:14,addDex:!0,maxDex:2,stealthDisadvantage:!0,cost:"50 po"},{name:"Media armadura",type:"media",acBase:15,addDex:!0,maxDex:2,stealthDisadvantage:!0,cost:"750 po"},{name:"Cota de anillas",type:"pesada",acBase:14,addDex:!1,stealthDisadvantage:!0,cost:"30 po"},{name:"Cota de malla",type:"pesada",acBase:16,addDex:!1,stealthDisadvantage:!0,strRequirement:13,cost:"75 po"},{name:"Armadura de bandas",type:"pesada",acBase:17,addDex:!1,stealthDisadvantage:!0,strRequirement:15,cost:"200 po"},{name:"Armadura de placas",type:"pesada",acBase:18,addDex:!1,stealthDisadvantage:!0,strRequirement:15,cost:"1500 po"},{name:"Escudo",type:"escudo",acBase:2,addDex:!1,stealthDisadvantage:!1,cost:"10 po"}],jy=[{name:"Herramientas de alquimista",category:"artesano"},{name:"Herramientas de herrero",category:"artesano"},{name:"Herramientas de cervecero",category:"artesano"},{name:"Herramientas de calígrafo",category:"artesano"},{name:"Herramientas de carpintero",category:"artesano"},{name:"Herramientas de cartógrafo",category:"artesano"},{name:"Herramientas de zapatero",category:"artesano"},{name:"Herramientas de cristalero",category:"artesano"},{name:"Herramientas de joyero",category:"artesano"},{name:"Herramientas de curtidor",category:"artesano"},{name:"Herramientas de albañil",category:"artesano"},{name:"Herramientas de pintor",category:"artesano"},{name:"Herramientas de alfarero",category:"artesano"},{name:"Herramientas de tintorero",category:"artesano"},{name:"Herramientas de tallador de madera",category:"artesano"},{name:"Herramientas de tejedor",category:"artesano"},{name:"Gaita",category:"instrumento"},{name:"Cuerno",category:"instrumento"},{name:"Dulcémele",category:"instrumento"},{name:"Flauta",category:"instrumento"},{name:"Flauta de pan",category:"instrumento"},{name:"Laúd",category:"instrumento"},{name:"Lira",category:"instrumento"},{name:"Tambor",category:"instrumento"},{name:"Viola",category:"instrumento"},{name:"Herramientas de ladrón",category:"kit"},{name:"Kit de herbolario",category:"kit"},{name:"Kit de disfraz",category:"kit"},{name:"Kit de falsificación",category:"kit"},{name:"Kit de envenenador",category:"kit"},{name:"Kit de sanador",category:"kit"},{name:"Herramientas de navegante",category:"kit"},{name:"Juego de dados",category:"juego"},{name:"Juego de cartas",category:"juego"},{name:"Juego de ajedrez draconiano",category:"juego"},{name:"Juego de los Tres Dragones",category:"juego"}],tm=[{name:"Rayo de Fuego",school:"evocación",damageType:"fuego",classes:["Mago","Hechicero"],description:"1d10 fuego, 36m"},{name:"Rayo de Escarcha",school:"evocación",damageType:"frío",classes:["Mago","Hechicero"],description:"1d8 frío, reduce vel. 3m"},{name:"Descarga Eléctrica",school:"evocación",damageType:"relámpago",classes:["Mago","Hechicero"],description:"1d8 relámpago, cuerpo a cuerpo"},{name:"Toque Gélido",school:"nigromancia",damageType:"necrótico",classes:["Mago","Hechicero","Brujo"],description:"1d8 necrótico, impide curación"},{name:"Salpicadura Ácida",school:"conjuración",damageType:"ácido",classes:["Mago","Hechicero"],description:"1d6 ácido, 2 objetivos adyacentes"},{name:"Taumaturgia",school:"transmutación",classes:["Clérigo"],description:"Efecto menor sobrenatural"},{name:"Llama Sagrada",school:"evocación",damageType:"radiante",classes:["Clérigo"],description:"1d8 radiante, sin cobertura"},{name:"Palabra de Sanación",school:"abjuración",classes:["Clérigo"],description:"Estabilizar criatura a 0 PG"},{name:"Prestidigitación",school:"transmutación",classes:["Mago","Hechicero","Bardo","Brujo"],description:"Truco menor mágico"},{name:"Luz",school:"evocación",classes:["Mago","Clérigo","Hechicero","Bardo"],description:"Objeto emite luz brillante"},{name:"Mano de Mago",school:"conjuración",classes:["Mago","Hechicero","Bardo","Brujo"],description:"Mano espectral manipula objetos"},{name:"Mensaje",school:"transmutación",classes:["Mago","Hechicero","Bardo"],description:"Susurro a distancia 36m"},{name:"Trueno",school:"evocación",damageType:"trueno",classes:["Mago","Hechicero","Bardo","Druida"],description:"Sonido ensordecedor en cono"},{name:"Burla Viciosa",school:"encantamiento",damageType:"psíquico",classes:["Bardo"],description:"1d4 psíquico, desventaja"},{name:"Producir Llama",school:"conjuración",damageType:"fuego",classes:["Druida"],description:"1d8 fuego, luz y ataque"},{name:"Druídica",school:"transmutación",classes:["Druida"],description:"Efecto menor natural"},{name:"Espinas",school:"transmutación",damageType:"perforante",classes:["Druida"],description:"1d6 perforante, crecen espinas"},{name:"Descarga Sobrecogedora",school:"evocación",damageType:"fuerza",classes:["Brujo"],description:"1d10 fuerza, empuja 3m"},{name:"Ilusión Menor",school:"ilusión",classes:["Mago","Hechicero","Bardo","Brujo"],description:"Sonido o imagen ilusoria"},{name:"Reparar",school:"transmutación",classes:["Mago","Clérigo","Druida"],description:"Repara objeto pequeño roto"},{name:"Hoja Verde",school:"transmutación",damageType:"fuego",classes:["Mago","Hechicero","Brujo","Druida"],description:"1d8 + extra si se mueve"},{name:"Golpe Certero",school:"adivinación",classes:["Mago","Hechicero","Bardo","Brujo"],description:"Siguiente ataque con ventaja"}],nm=[{name:"Proyectil Mágico",school:"evocación",damageType:"fuerza",classes:["Mago","Hechicero"],description:"3 dardos, 1d4+1 fuerza c/u, impacto seguro"},{name:"Escudo",school:"abjuración",classes:["Mago","Hechicero"],description:"+5 CA hasta siguiente turno (reacción)"},{name:"Detectar Magia",school:"adivinación",classes:["Mago","Clérigo","Bardo","Druida","Hechicero","Paladín","Explorador"],description:"Sentir magia en 9m",ritual:!0},{name:"Manos Ardientes",school:"evocación",damageType:"fuego",classes:["Mago","Hechicero"],description:"3d6 fuego en cono de 4.5m"},{name:"Rayo de Brujo",school:"evocación",damageType:"fuerza",classes:["Brujo"],description:"1d10 fuerza, empuja y derriba"},{name:"Armadura de Mago",school:"abjuración",classes:["Mago","Hechicero"],description:"CA base 13+DES (sin armadura)"},{name:"Dormir",school:"encantamiento",classes:["Mago","Hechicero","Bardo"],description:"5d8 PG de criaturas caen dormidas"},{name:"Curar Heridas",school:"evocación",classes:["Clérigo","Druida","Bardo","Paladín","Explorador"],description:"1d8+mod curación por toque"},{name:"Infligir Heridas",school:"nigromancia",damageType:"necrótico",classes:["Clérigo"],description:"3d10 necrótico, ataque cuerpo a cuerpo"},{name:"Palabra Sanadora",school:"evocación",classes:["Clérigo","Bardo","Druida"],description:"1d4+mod curación a distancia (acción extra)"},{name:"Bendición",school:"encantamiento",classes:["Clérigo","Paladín"],description:"+1d4 a ataques y salvaciones a 3 criaturas"},{name:"Castigo Atronador",school:"evocación",damageType:"trueno",classes:["Paladín"],description:"2d6 trueno extra en ataque cuerpo a cuerpo"},{name:"Escudo de la Fe",school:"abjuración",classes:["Clérigo","Paladín"],description:"+2 CA a criatura (concentración)"},{name:"Onda Atronadora",school:"evocación",damageType:"trueno",classes:["Mago","Hechicero","Bardo","Druida"],description:"2d8 trueno en 4.5m cubo"},{name:"Enmarañar",school:"conjuración",classes:["Druida","Explorador"],description:"Terreno difícil y atrapamiento"},{name:"Saeta Guía del Cazador",school:"adivinación",classes:["Explorador"],description:"1d6 extra al siguiente ataque a distancia"},{name:"Hechizar Persona",school:"encantamiento",classes:["Mago","Hechicero","Bardo","Brujo","Druida"],description:"Objetivo encantado te ve como amigo"},{name:"Orbe Cromático",school:"evocación",classes:["Mago","Hechicero"],description:"3d8 daño de tipo elegido (ácido, frío, fuego, relámpago, veneno, trueno)"},{name:"Comprensión Idiomática",school:"adivinación",classes:["Mago","Bardo","Hechicero","Brujo"],description:"Entender cualquier idioma 1h",ritual:!0},{name:"Retirada Acelerada",school:"transmutación",classes:["Mago","Hechicero","Brujo"],description:"Acción de Carrera como extra"},{name:"Represalia Infernal",school:"evocación",damageType:"fuego",classes:["Brujo"],description:"2d10 fuego como reacción al recibir daño"},{name:"Favor del Cazador",school:"adivinación",classes:["Explorador"],description:"+1d6 daño extra a objetivo marcado"}],Xy={Bárbaro:{skills:["Atletismo","Percepción","Intimidación","Supervivencia"],tools:[],cantrips:[],spells:[],weapons:["Gran hacha","Hacha de mano","Jabalina"],armor:["Sin armadura (FUE+CON)","Escudo"],description:"Competente en armaduras ligeras y medias, escudos, armas simples y marciales. Tu CA sin armadura = 10 + DES + CON."},Bardo:{skills:["Persuasión","Interpretación","Engaño","Perspicacia","Acrobacias"],tools:["Laúd","Flauta","Viola"],cantrips:["Burla Viciosa","Prestidigitación","Luz"],spells:["Curar Heridas","Hechizar Persona","Dormir","Palabra Sanadora","Onda Atronadora"],weapons:["Espada ropera","Daga","Espada corta"],armor:["Cuero","Cuero tachonado"],description:"Competente en armaduras ligeras, armas simples, espadas cortas, roperas y largas. Conoce 2 trucos y 4 hechizos de nivel 1 al inicio. Elige 3 instrumentos musicales."},Clérigo:{skills:["Religión","Medicina","Perspicacia","Historia","Persuasión"],tools:[],cantrips:["Llama Sagrada","Taumaturgia","Palabra de Sanación"],spells:["Curar Heridas","Bendición","Escudo de la Fe","Infligir Heridas","Detectar Magia"],weapons:["Maza","Martillo de guerra","Ballesta ligera"],armor:["Cota de malla","Cota de escamas","Escudo"],description:"Competente en armaduras ligeras, medias, escudos y armas simples. Conoce 3 trucos al inicio. Prepara hechizos de la lista completa de clérigo cada día (SAB + nivel)."},Druida:{skills:["Naturaleza","Percepción","Supervivencia","Trato con Animales","Medicina"],tools:["Kit de herbolario"],cantrips:["Producir Llama","Druídica","Espinas"],spells:["Curar Heridas","Enmarañar","Detectar Magia","Onda Atronadora","Palabra Sanadora"],weapons:["Cimitarra","Bastón","Daga"],armor:["Cuero","Pieles","Escudo"],description:"Competente en armaduras ligeras y medias (no metálicas), escudos (no metálicos). Conoce 2 trucos al inicio. Prepara hechizos cada día (SAB + nivel)."},Explorador:{skills:["Percepción","Supervivencia","Sigilo","Naturaleza","Atletismo"],tools:[],cantrips:[],spells:["Favor del Cazador","Saeta Guía del Cazador","Curar Heridas","Detectar Magia","Enmarañar"],weapons:["Arco largo","Espada larga","Espada corta","Daga"],armor:["Cuero tachonado","Cota de escamas"],description:"Competente en armaduras ligeras, medias, escudos, armas simples y marciales. Hechizos desde nivel 2 (SAB)."},Guerrero:{skills:["Atletismo","Percepción","Intimidación","Supervivencia","Acrobacias"],tools:[],cantrips:[],spells:[],weapons:["Espada larga","Espadón","Arco largo","Hacha de batalla","Escudo"],armor:["Cota de malla","Cuero tachonado","Escudo"],description:"Competente en TODAS las armaduras, escudos, armas simples y marciales. Elige un estilo de combate al nivel 1. Aliento de combate 1d10+nivel PG."},Hechicero:{skills:["Arcanos","Persuasión","Engaño","Intimidación","Religión"],tools:[],cantrips:["Rayo de Fuego","Prestidigitación","Descarga Eléctrica","Luz"],spells:["Proyectil Mágico","Escudo","Manos Ardientes","Dormir"],weapons:["Daga","Dardo","Honda","Bastón"],armor:[],description:"Sin competencia en armaduras. Conoce 4 trucos y 2 hechizos de nivel 1 al inicio. La magia proviene de tu linaje innato (CAR)."},Mago:{skills:["Arcanos","Investigación","Historia","Religión","Perspicacia"],tools:[],cantrips:["Rayo de Fuego","Prestidigitación","Mano de Mago","Luz","Rayo de Escarcha"],spells:["Proyectil Mágico","Escudo","Detectar Magia","Manos Ardientes","Armadura de Mago","Dormir"],weapons:["Bastón","Daga","Ballesta ligera"],armor:[],description:"Sin competencia en armaduras. Conoce 3 trucos y 6 hechizos de nivel 1 en tu grimorio al inicio. Preparás INT + nivel cada día."},Monje:{skills:["Acrobacias","Atletismo","Sigilo","Historia","Perspicacia"],tools:[],cantrips:[],spells:[],weapons:["Espada corta","Daga","Bastón"],armor:[],description:"Sin competencia en armaduras. Armas simples y espadas cortas. CA sin armadura = 10 + DES + SAB. Dado de artes marciales 1d4."},Paladín:{skills:["Atletismo","Persuasión","Religión","Medicina","Perspicacia"],tools:[],cantrips:[],spells:["Bendición","Curar Heridas","Castigo Atronador","Escudo de la Fe","Detectar Magia"],weapons:["Espada larga","Espadón","Martillo de guerra","Jabalina"],armor:["Cota de malla","Escudo","Armadura de placas"],description:"Competente en TODAS las armaduras, escudos, armas simples y marciales. Hechizos desde nivel 2 (CAR). Imposición de manos: nivel×5 PG."},Pícaro:{skills:["Sigilo","Juego de Manos","Acrobacias","Engaño","Percepción","Investigación","Persuasión"],tools:["Herramientas de ladrón"],cantrips:[],spells:[],weapons:["Espada ropera","Espada corta","Daga","Arco corto","Ballesta de mano"],armor:["Cuero","Cuero tachonado"],description:"Competente en armaduras ligeras, armas simples, ballestas de mano, espadas cortas y roperas. Elige 4 pericias. Ataque furtivo 1d6. Competente en herramientas de ladrón."},Brujo:{skills:["Arcanos","Engaño","Intimidación","Investigación","Naturaleza","Religión"],tools:[],cantrips:["Descarga Sobrecogedora","Toque Gélido","Prestidigitación"],spells:["Rayo de Brujo","Represalia Infernal","Hechizar Persona","Retirada Acelerada"],weapons:["Daga","Bastón","Ballesta ligera"],armor:["Cuero"],description:"Competente en armaduras ligeras y armas simples. Conoce 2 trucos y 2 hechizos de nivel 1. Ranuras de pacto: se recuperan en descanso corto (CAR)."}},qy=["Cabeza","Torso","Manos","Pies","Cuello","Anillo","Cintura","Espalda","Mano Principal","Mano Secundaria","Accesorio"],Qc=[{name:"Pack de Explorador",description:"Mochila, saco de dormir, kit de cocina, yesca/pedernal, 10 antorchas, 10 raciones, odre de agua, 15m de cuerda.",items:[{name:"Mochila",qty:1,notes:"Contenedor de viaje"},{name:"Saco de dormir",qty:1,notes:"Para descansos largos"},{name:"Kit de cocina",qty:1,notes:"Cazo, cubiertos y sartén pequeña"},{name:"Yesca y pedernal",qty:1,notes:"Para encender fuego"},{name:"Antorcha",qty:10,notes:"Arde durante 1 hora (luz brillante 6m)"},{name:"Raciones de viaje",qty:10,notes:"1 ración por día"},{name:"Odre de agua",qty:1,notes:"Lleno de agua potable"},{name:"Cuerda de cáñamo (15m)",qty:1,notes:"Resistente"}]},{name:"Pack de Mazmorreo",description:"Mochila, palanca, martillo, 10 pitones, 10 antorchas, yesca/pedernal, 10 raciones, odre de agua, 15m de cuerda.",items:[{name:"Mochila",qty:1,notes:"Contenedor de viaje"},{name:"Palanca de hierro",qty:1,notes:"Ventaja en pruebas de FUE para forzar"},{name:"Martillo de artesano",qty:1,notes:"Para clavar pitones"},{name:"Pitones de hierro",qty:10,notes:"Para anclaje de cuerdas"},{name:"Yesca y pedernal",qty:1,notes:"Para encender fuego"},{name:"Antorcha",qty:10,notes:"Arde durante 1 hora"},{name:"Raciones de viaje",qty:10,notes:"1 ración por día"},{name:"Odre de agua",qty:1,notes:"Lleno de agua"},{name:"Cuerda de cáñamo (15m)",qty:1,notes:"Resistente"}]},{name:"Pack de Sacerdote",description:"Mochila, manta, 10 velas, yesca/pedernal, caja de limosnas, incienso (2 bloques), incensario, vestiduras, 2 raciones, odre.",items:[{name:"Mochila",qty:1,notes:"Contenedor"},{name:"Manta de abrigo",qty:1,notes:"Para el frío"},{name:"Velas",qty:10,notes:"Luz tenue 1.5m"},{name:"Yesca y pedernal",qty:1,notes:"Para encender"},{name:"Bloques de incienso",qty:2,notes:"Ritos sagrados"},{name:"Incensario",qty:1,notes:"Bronce ritual"},{name:"Vestiduras sagradas",qty:1,notes:"Ropa ceremonial"},{name:"Raciones de viaje",qty:2,notes:"2 días de alimento"},{name:"Odre de agua",qty:1,notes:"Agua bendita o potable"}]},{name:"Pack de Diplómata",description:"Cofre, 2 estuches de pergaminos, ropa fina, frasco de tinta, pluma, 5 hojas de papel, perfume, cera de sellar, jabón.",items:[{name:"Cofre de madera",qty:1,notes:"Cofre de viaje"},{name:"Estuche de mapas/pergaminos",qty:2,notes:"Protege documentos"},{name:"Ropa fina de gala",qty:1,notes:"Para audiencias nobiliarias"},{name:"Frasco de tinta",qty:1,notes:"Tinta negra"},{name:"Pluma de caligrafía",qty:1,notes:"Para escribir"},{name:"Hojas de papel fino",qty:5,notes:"Documentos oficiales"},{name:"Frasco de perfume",qty:1,notes:"Aroma refinado"},{name:"Cera para sellar",qty:1,notes:"Sellos reales"}]},{name:"Pack de Erudito",description:"Mochila, libro de estudio, frasco de tinta, pluma, 10 hojas de pergamino, bolsa de arena, cuchillo pequeño.",items:[{name:"Mochila",qty:1,notes:"Contenedor"},{name:"Libro de estudio/apuntes",qty:1,notes:"Grimorio o tratado"},{name:"Frasco de tinta",qty:1,notes:"Tinta negra"},{name:"Pluma",qty:1,notes:"Escribir"},{name:"Hojas de pergamino",qty:10,notes:"Notas y mapas"},{name:"Bolsita de arena seca",qty:1,notes:"Para secar tinta"},{name:"Cuchillo pequeño",qty:1,notes:"Para afilar plumas"}]}];function jl(){return{name:"",race:"Humano",raceChoiceA:"str",raceChoiceB:"dex",background:"",className:"Guerrero",subclass:"",subclassNotes:"",level:1,abilities:{str:10,dex:10,con:10,int:10,wis:10,cha:10},hpCur:10,hpMax:10,tempHp:0,ac:10,inspiration:!1,conditions:"",deathSaves:{success:0,fail:0},hitDiceRemaining:1,proficientSkills:[],armorProf:[],weaponProf:[],toolProf:"",languages:"",feats:[],featsCustom:"",equipment:[],equippedGear:[],gold:15,weapons:[],spellsKnown:[],spellSlotsUsed:{},classResourceUsed:{},companions:[],familiars:[],notes:"",equippedArmor:"",equippedShield:!1,selectedTools:[]}}function Pr(t){const e=new Uint32Array(1);return crypto.getRandomValues(e),e[0]%t+1}function xs({advantage:t=!1,disadvantage:e=!1}={}){const n=Pr(20);if(!t&&!e)return{rolls:[n],result:n};const i=Pr(20);return{rolls:[n,i],result:t?Math.max(n,i):Math.min(n,i)}}function $y(t){const e=t.replace(/\s+/g,""),n=e.match(/^(\d*)d(\d+)([+-]\d+)?$/i);if(!n){const o=parseInt(e);return isNaN(o)?null:{rolls:[],mod:0,total:o,formula:t}}const i=n[1]?parseInt(n[1]):1,r=parseInt(n[2]),a=n[3]?parseInt(n[3]):0,s=[];for(let o=0;o<i;o++)s.push(Pr(r));return{rolls:s,mod:a,total:s.reduce((o,l)=>o+l,0)+a,formula:t}}const Ps={cortante:"⚔️",contundente:"🔨",perforante:"🏹",fuego:"🔥",frío:"❄️",relámpago:"⚡",trueno:"💥",ácido:"🧪",veneno:"☠️",necrótico:"💀",radiante:"☀️",fuerza:"✨",psíquico:"🧠"},Co={cortante:"#e74c3c",contundente:"#95a5a6",perforante:"#27ae60",fuego:"#e67e22",frío:"#3498db",relámpago:"#f1c40f",trueno:"#8e44ad",ácido:"#2ecc71",veneno:"#16a085",necrótico:"#2c3e50",radiante:"#f39c12",fuerza:"#9b59b6",psíquico:"#e91e9b"},Yy=({onSummarize:t,onReset:e})=>h.jsxs("header",{children:[h.jsxs("div",{children:[h.jsx("h1",{children:"El Cuaderno del Explorador"}),h.jsx("div",{className:"sub",children:"DM solitario · D&D 5e · dados reales, sin trampa"})]}),h.jsxs("div",{className:"actions",children:[h.jsx("button",{onClick:t,children:"Resumir crónica"}),h.jsx("button",{onClick:e,children:"Nueva campaña"})]})]}),Ky=({onCreateCharacter:t})=>{var ge;const[e,n]=Fe.useState("Kaelen Vent"),[i,r]=Fe.useState(1),[a,s]=Fe.useState("Humano"),[o,l]=Fe.useState("Guerrero"),[c,p]=Fe.useState("Forastero"),[g,f]=Fe.useState("str"),[u,v]=Fe.useState("dex"),[y,m]=Fe.useState("standard"),d=[15,14,13,12,10,8],[_,E]=Fe.useState(null),[S,b]=Fe.useState({str:null,dex:null,con:null,int:null,wis:null,cha:null}),[w,C]=Fe.useState({str:8,dex:8,con:8,int:8,wis:8,cha:8}),[x,A]=Fe.useState({str:10,dex:10,con:10,int:10,wis:10,cha:10}),[N,L]=Fe.useState([]),[I,q]=Fe.useState([]),[te,z]=Fe.useState([]),[$,H]=Fe.useState(""),[F,Y]=Fe.useState(!1),[ie,oe]=Fe.useState([]),[ue,Be]=Fe.useState([]),[Ye,We]=Fe.useState("Pack de Explorador"),[ee,he]=Fe.useState(15),[le,Le]=Fe.useState("identity"),pe=Xy[o],Ie=Tr[o],mt=()=>{const R=[Pr(6),Pr(6),Pr(6),Pr(6)];return R.sort((K,se)=>K-se),R.shift(),R.reduce((K,se)=>K+se,0)},Ge=()=>{const R=un.map(()=>mt());E(R),b({str:null,dex:null,con:null,int:null,wis:null,cha:null})},it=R=>{const K=y==="standard"?d:_||[],se=new Map;for(const de of K)se.set(de,(se.get(de)||0)+1);const D=new Map;for(const[de,ne]of Object.entries(S))de!==R&&ne!==null&&D.set(ne,(D.get(ne)||0)+1);const J=[],X=new Map;for(let de=0;de<K.length;de++){const ne=K[de],Ae=se.get(ne)||0,we=D.get(ne)||0,Re=X.get(ne)||0;Re<Ae-we&&(J.push({value:ne,index:de}),X.set(ne,Re+1))}const ae=S[R];return ae!==null&&!J.some(de=>de.value===ae)&&J.push({value:ae,index:-1}),J},Ke=()=>{let R;y==="manual"?R={...x}:y==="pointbuy"?R={...w}:R={str:S.str||10,dex:S.dex||10,con:S.con||10,int:S.int||10,wis:S.wis||10,cha:S.cha||10};const K=Jc[a],se={...R};return K!=null&&K.fixed&&Object.entries(K.fixed).forEach(([D,J])=>{const X=D;se[X]=(se[X]||10)+(J||0)}),K!=null&&K.choice&&(se[g]=(se[g]||10)+K.choice.amount,u!==g&&(se[u]=(se[u]||10)+K.choice.amount)),se},ze=Fe.useMemo(()=>Ke(),[y,x,w,S,a,g,u]),Mt=R=>{L(K=>K.includes(R)?K.filter(se=>se!==R):[...K,R])},wt=R=>{q(K=>K.includes(R)?K.filter(se=>se!==R):[...K,R])},Rt=R=>{z(K=>K.includes(R)?K.filter(se=>se!==R):[...K,R])},Lt=R=>{oe(K=>K.includes(R)?K.filter(se=>se!==R):[...K,R])},ht=R=>{Be(K=>K.includes(R)?K.filter(se=>se!==R):[...K,R])},gt=(R,K)=>{const se=w[R],D=se+K;if(D<8||D>15)return;const J=Object.values(w).reduce((ae,de)=>ae+Ao[de],0),X=Ao[D]-Ao[se];27-J-X<0||C(ae=>({...ae,[R]:D}))},U=()=>{pe&&L(R=>{const K=new Set([...R,...pe.skills.slice(0,M())]);return Array.from(K)})},Xt=()=>{pe&&q(R=>{const K=new Set([...R,...pe.tools]);return Array.from(K)})},nt=()=>{pe&&z(R=>{const K=new Set([...R,...pe.weapons]);return Array.from(K)})},P=()=>{pe&&(oe(R=>{const K=new Set([...R,...pe.cantrips]);return Array.from(K)}),Be(R=>{const K=new Set([...R,...pe.spells]);return Array.from(K)}))},M=()=>{switch(o){case"Pícaro":return 4;case"Bardo":return 3;case"Explorador":return 3;default:return 2}},k=R=>{const K=R.properties.includes("sutil")||R.range==="a distancia";return{name:R.name,ability:K?"dex":"str",dice:R.dice,type:R.damageType,proficient:!0,notes:R.properties.join(", "),category:R.category,damageType:R.damageType,properties:[...R.properties],magical:R.magical||!1,range:R.range,versatileDice:R.versatileDice}},W=(R,K,se)=>{const D=Nt(R.dex);let J=10+D;if(K){const X=Sa.find(ae=>ae.name===K);if(X)if(X.addDex){const ae=X.maxDex!==void 0?Math.min(D,X.maxDex):D;J=X.acBase+ae}else J=X.acBase}return se&&(J+=2),o==="Bárbaro"&&!K&&(J=10+D+Nt(R.con),se&&(J+=2)),o==="Monje"&&!K&&!se&&(J=10+D+Nt(R.wis)),J},Z=()=>{const R=e.trim()||"Sin nombre",K=Ke(),se=Tr[o]||Tr.Guerrero,D=Nt(K.con),J=jl();J.name=R,J.race=a,J.raceChoiceA=g,J.raceChoiceB=u,J.background=c,J.className=o,J.level=i,J.abilities=K,J.hpMax=em(se.hitDie,i,D),J.hpCur=J.hpMax,J.hitDiceRemaining=i,J.proficientSkills=[...N],J.selectedTools=[...I],J.toolProf=I.join(", "),J.equippedArmor=$,J.equippedShield=F,J.ac=W(K,$,F),J.weapons=te.map(Re=>{const Pe=bo.find(tt=>tt.name===Re);return Pe?k(Pe):{name:Re,ability:"str",dice:"1d6",type:"contundente",proficient:!0,notes:""}});const X=[];for(const Re of ie){const Pe=tm.find(tt=>tt.name===Re);X.push({name:Re,level:"Truco",notes:(Pe==null?void 0:Pe.description)||"",damageType:Pe==null?void 0:Pe.damageType,school:Pe==null?void 0:Pe.school})}for(const Re of ue){const Pe=nm.find(tt=>tt.name===Re);X.push({name:Re,level:"1",notes:(Pe==null?void 0:Pe.description)||"",damageType:Pe==null?void 0:Pe.damageType,school:Pe==null?void 0:Pe.school})}J.spellsKnown=X;const ae=[],de=Qc.find(Re=>Re.name===Ye)||Qc[0];de&&ae.push(...de.items.map(Re=>({...Re})));for(const Re of I)ae.push({name:Re,qty:1,notes:"Herramienta de competencia"});if($){const Re=Sa.find(Pe=>Pe.name===$);ae.push({name:$,qty:1,notes:Re?`Armadura ${Re.type} (CA ${Re.acBase})`:"Armadura"})}F&&ae.push({name:"Escudo",qty:1,notes:"+2 a la CA"});for(const Re of te){const Pe=bo.find(tt=>tt.name===Re);ae.push({name:Re,qty:1,notes:Pe?`${Pe.dice} ${Pe.damageType}`:"Arma"})}J.equipment=ae,J.gold=ee;const ne=[];if($){const Re=Sa.find(tt=>tt.name===$),Pe=Re?`CA ${Re.acBase}${Re.addDex?" + DES":""}${Re.stealthDisadvantage?", Desventaja sigilo":""}`:"";ne.push({name:$,slot:"Torso",notes:Re?`Armadura ${Re.type}`:"Armadura equipada",properties:Pe})}F&&ne.push({name:"Escudo",slot:"Mano Secundaria",notes:"Escudo protector",properties:"CA +2"}),te.forEach((Re,Pe)=>{const tt=bo.find(Ec=>Ec.name===Re),Rn=Pe===0?"Mano Principal":(tt==null?void 0:tt.range)==="a distancia"?"Espalda":"Mano Secundaria";ne.push({name:Re,slot:Rn,notes:tt?`${tt.dice} ${tt.damageType}`:"",properties:tt?tt.properties.join(", "):"",magical:(tt==null?void 0:tt.magical)||!1})}),I.forEach(Re=>{ne.push({name:Re,slot:"Cintura",notes:"Herramienta activa",properties:"Competencia"})}),J.equippedGear=ne;const Ae=`${R}, ${a.toLowerCase()} de vocación ${o.toLowerCase()}, se detiene un instante antes del umbral. La aventura todavía no tiene forma — decidí vos cómo empieza.`,we=`La crónica de ${R} (${a}, ${o}, nivel ${i}) está por comenzar.`;t(J,Ae,we)},fe=()=>{const R=jl();R.name="Kaelen Vent",R.race="Semielfo",R.raceChoiceA="str",R.raceChoiceB="dex",R.background="Forastero",R.className="Explorador",R.level=3,R.abilities={str:13,dex:17,con:14,int:10,wis:15,cha:12};const K=Nt(R.abilities.con);R.hpMax=em(Tr.Explorador.hitDie,3,K),R.hpCur=R.hpMax,R.hitDiceRemaining=3,R.ac=14,R.proficientSkills=["Sigilo","Percepción","Supervivencia"],R.equippedArmor="Cuero tachonado",R.selectedTools=["Herramientas de cartógrafo"],R.gold=25,R.equipment=[{name:"Mochila de explorador",qty:1,notes:"Capacidad de carga"},{name:"Saco de dormir",qty:1,notes:"Para descansos"},{name:"Raciones de viaje",qty:5,notes:"1 por día"},{name:"Cuerda de cáñamo (15m)",qty:1,notes:"Resistente"},{name:"Antorcha",qty:5,notes:"Arde 1 hora"},{name:"Odre de agua",qty:1,notes:"Agua potable"},{name:"Cuero tachonado",qty:1,notes:"Armadura ligera (CA 12)"},{name:"Arco corto",qty:1,notes:"1d6 perforante"}],R.equippedGear=[{name:"Cuero tachonado",slot:"Torso",notes:"Armadura ligera",properties:"CA 12 + DES"},{name:"Arco corto",slot:"Espalda",notes:"1d6 perforante",properties:"munición, a dos manos"}],R.weapons=[{name:"Arco corto",ability:"dex",dice:"1d6",type:"perforante",proficient:!0,notes:"munición: 20 flechas",category:"simple",damageType:"perforante",properties:["munición","a dos manos"],range:"a distancia"}],t(R,"La niebla del amanecer cubre el sendero que sale de Umbraluz. Cargás tu arco al hombro y el bosque empieza a susurrar. ¿Qué hacés?","La crónica comienza en las afueras del pueblo de Umbraluz, al amanecer, en el límite de un bosque.")},Q=27-Object.values(w).reduce((R,K)=>R+Ao[K],0),re=(ge=Jc[a])==null?void 0:ge.choice,me=tm.filter(R=>R.classes.includes(o)),be=nm.filter(R=>R.classes.includes(o)),xe=[{key:"identity",label:"① Identidad"},{key:"abilities",label:"② Atributos"},{key:"skills",label:"③ Habilidades"},{key:"equipment",label:"④ Equipo"},{key:"review",label:"⑤ Revisión"}];return h.jsxs("div",{id:"creation",children:[h.jsx("h2",{children:"Antes de cruzar el umbral…"}),h.jsx("p",{className:"lead",children:"Creá tu personaje. Todo lo que definas acá va a vivir después en tu hoja, organizada en solapas, y va a guiar cómo tira los dados el motor y cómo narra el DM."}),h.jsx("div",{className:"creation-steps",children:xe.map(R=>h.jsx("button",{className:`creation-step-btn ${le===R.key?"active":""}`,onClick:()=>Le(R.key),children:R.label},R.key))}),le==="identity"&&h.jsxs("div",{className:"creation-section",children:[h.jsx("h3",{children:"Identidad"}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Nombre"}),h.jsx("input",{type:"text",value:e,onChange:R=>n(R.target.value),placeholder:"Kaelen Vent"})]}),h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Nivel inicial"}),h.jsx("input",{type:"number",min:1,max:20,value:i,onChange:R=>r(parseInt(R.target.value)||1)})]})]}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Raza"}),h.jsx("select",{value:a,onChange:R=>s(R.target.value),children:Object.keys(Jc).map(R=>h.jsx("option",{value:R,children:R},R))})]}),h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Clase"}),h.jsx("select",{value:o,onChange:R=>{l(R.target.value),L([]),q([]),z([]),oe([]),Be([]),H(""),Y(!1)},children:Object.keys(Tr).map(R=>h.jsx("option",{value:R,children:R},R))})]})]}),re&&h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Bonificación racial +1 (opción A)"}),h.jsx("select",{value:g,onChange:R=>f(R.target.value),children:un.map(R=>h.jsx("option",{value:R.key,children:R.full},R.key))})]}),h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Bonificación racial +1 (opción B)"}),h.jsx("select",{value:u,onChange:R=>v(R.target.value),children:un.map(R=>h.jsx("option",{value:R.key,children:R.full},R.key))})]})]}),h.jsxs("div",{className:"field",style:{marginTop:"6px"},children:[h.jsx("label",{children:"Trasfondo"}),h.jsx("input",{type:"text",list:"bg-list",value:c,onChange:R=>p(R.target.value),placeholder:"Acólito, Soldado, Criminal..."}),h.jsxs("datalist",{id:"bg-list",children:[h.jsx("option",{value:"Acólito"}),h.jsx("option",{value:"Criminal"}),h.jsx("option",{value:"Forastero"}),h.jsx("option",{value:"Sabio"}),h.jsx("option",{value:"Soldado"}),h.jsx("option",{value:"Charlatán"}),h.jsx("option",{value:"Ermitaño"}),h.jsx("option",{value:"Artesano Gremial"}),h.jsx("option",{value:"Héroe del Pueblo"}),h.jsx("option",{value:"Noble"}),h.jsx("option",{value:"Marino"}),h.jsx("option",{value:"Huérfano"})]})]}),pe&&h.jsxs("div",{className:"rec-panel",children:[h.jsxs("div",{className:"rec-header",children:["💡 Descripción de clase: ",o]}),h.jsx("p",{className:"rec-description",children:pe.description})]}),h.jsxs("div",{className:"step-nav",children:[h.jsx("span",{}),h.jsx("button",{className:"step-next-btn",onClick:()=>Le("abilities"),children:"Siguiente →"})]})]}),le==="abilities"&&h.jsxs("div",{className:"creation-section",children:[h.jsx("h3",{children:"Generación de atributos"}),h.jsxs("div",{className:"method-tabs",children:[h.jsx("button",{className:y==="standard"?"active":"",onClick:()=>m("standard"),children:"Standard Array"}),h.jsx("button",{className:y==="pointbuy"?"active":"",onClick:()=>m("pointbuy"),children:"Point Buy"}),h.jsx("button",{className:y==="rolled"?"active":"",onClick:()=>m("rolled"),children:"Tirada de dados"}),h.jsx("button",{className:y==="manual"?"active":"",onClick:()=>m("manual"),children:"Manual"})]}),h.jsxs("div",{children:[(y==="standard"||y==="rolled")&&h.jsx("div",{children:y==="rolled"&&!_?h.jsx("button",{className:"add-row-btn",onClick:Ge,children:"🎲 Tirar 4d6 (descartando el menor) × 6"}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"small-note",style:{marginBottom:"8px"},children:["Valores disponibles: ",(y==="standard"?d:_||[]).join(", ")]}),y==="rolled"&&h.jsx("button",{className:"add-row-btn",onClick:Ge,style:{marginBottom:"8px",fontSize:"0.62rem"},children:"🎲 Volver a tirar"}),un.map(R=>{const K=it(R.key);return h.jsxs("div",{className:"assign-row",children:[h.jsxs("label",{children:[R.label," ",h.jsxs("span",{className:"assign-full",children:["(",R.full,")"]})]}),h.jsxs("select",{value:S[R.key]??"",onChange:se=>b({...S,[R.key]:se.target.value?parseInt(se.target.value):null}),children:[h.jsx("option",{value:"",children:"—"}),K.map((se,D)=>h.jsx("option",{value:se.value,children:se.value},`${se.value}-${D}`))]})]},R.key)})]})}),y==="pointbuy"&&h.jsxs("div",{children:[un.map(R=>h.jsxs("div",{className:"pb-row",children:[h.jsx("label",{children:R.label}),h.jsx("button",{onClick:()=>gt(R.key,-1),children:"−"}),h.jsx("span",{className:"pbval",children:w[R.key]}),h.jsx("button",{onClick:()=>gt(R.key,1),children:"+"})]},R.key)),h.jsxs("div",{id:"pb-remaining",children:["Puntos restantes: ",Q," / 27"]})]}),y==="manual"&&h.jsx("div",{className:"grid3",children:un.map(R=>h.jsxs("div",{className:"field",children:[h.jsx("label",{children:R.label}),h.jsx("input",{type:"number",value:x[R.key],onChange:K=>A({...x,[R.key]:parseInt(K.target.value)||10})})]},R.key))})]}),h.jsx("p",{className:"small-note",style:{marginTop:"8px"},children:"Los valores finales ya incluirán la bonificación racial seleccionada."}),h.jsxs("div",{className:"abilities-preview",children:[h.jsx("div",{className:"block-label",children:"Vista previa (con raciales)"}),h.jsx("div",{className:"grid3",style:{marginTop:"6px"},children:un.map(R=>{const K=ze[R.key],se=Nt(K);return h.jsxs("div",{className:"ability-box mini",children:[h.jsx("div",{className:"name",children:R.label}),h.jsx("div",{className:"mod",children:se>=0?`+${se}`:se}),h.jsx("div",{className:"score",children:K})]},R.key)})})]}),h.jsxs("div",{className:"step-nav",children:[h.jsx("button",{className:"step-prev-btn",onClick:()=>Le("identity"),children:"← Anterior"}),h.jsx("button",{className:"step-next-btn",onClick:()=>Le("skills"),children:"Siguiente →"})]})]}),le==="skills"&&h.jsxs("div",{className:"creation-section",children:[h.jsx("h3",{children:"Competencias, herramientas y magia"}),h.jsxs("div",{className:"subsection",children:[h.jsxs("div",{className:"block-label",children:["Competencias de habilidades",h.jsxs("span",{className:"skill-count-badge",children:[N.length," / ",M()," sugeridas"]})]}),pe&&pe.skills.length>0&&h.jsxs("button",{className:"rec-apply-btn",onClick:U,children:["✨ Aplicar recomendadas para ",o]}),h.jsx("div",{className:"skills-list",children:Ys.map(R=>{var J,X;const K=((J=un.find(ae=>ae.key===R.ab))==null?void 0:J.label)||R.ab.toUpperCase(),se=Nt(ze[R.ab]),D=pe==null?void 0:pe.skills.includes(R.name);return h.jsxs("div",{className:`skill-row-creation ${D?"recommended":""}`,children:[h.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center",flex:1},children:[h.jsx("input",{type:"checkbox",checked:N.includes(R.name),onChange:()=>Mt(R.name)}),h.jsx("span",{className:"skill-name-label",children:R.name}),h.jsx("span",{className:"skill-stat-badge",title:(X=un.find(ae=>ae.key===R.ab))==null?void 0:X.full,children:K}),h.jsx("span",{className:`skill-mod-preview ${se>=0?"positive":"negative"}`,children:se>=0?`+${se}`:se})]}),D&&h.jsx("span",{className:"rec-star",title:"Recomendada para esta clase",children:"★"})]},R.name)})})]}),h.jsxs("div",{className:"subsection",children:[h.jsx("div",{className:"block-label",children:"Herramientas"}),pe&&pe.tools.length>0&&h.jsxs("button",{className:"rec-apply-btn",onClick:Xt,children:["✨ Aplicar recomendadas para ",o]}),h.jsx("div",{className:"tools-grid",children:["kit","instrumento","artesano","juego"].map(R=>{const K=jy.filter(D=>D.category===R),se={kit:"🔧 Kits y herramientas especiales",instrumento:"🎵 Instrumentos musicales",artesano:"⚒️ Herramientas de artesano",juego:"🎲 Juegos"};return h.jsxs("div",{className:"tool-category",children:[h.jsx("div",{className:"tool-cat-label",children:se[R]}),h.jsx("div",{className:"tool-items",children:K.map(D=>{const J=pe==null?void 0:pe.tools.includes(D.name);return h.jsxs("label",{className:`tool-chip ${I.includes(D.name)?"selected":""} ${J?"recommended":""}`,children:[h.jsx("input",{type:"checkbox",checked:I.includes(D.name),onChange:()=>wt(D.name)}),h.jsx("span",{children:D.name}),J&&h.jsx("span",{className:"rec-star",children:"★"})]},D.name)})})]},R)})})]}),Ie.spellcasting&&h.jsxs("div",{className:"subsection",children:[h.jsx("div",{className:"block-label",children:"Trucos y hechizos iniciales"}),pe&&(pe.cantrips.length>0||pe.spells.length>0)&&h.jsxs("button",{className:"rec-apply-btn",onClick:P,children:["✨ Aplicar recomendados para ",o]}),me.length>0&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"spell-section-label",children:"Trucos (nivel 0)"}),h.jsx("div",{className:"spell-grid",children:me.map(R=>{const K=pe==null?void 0:pe.cantrips.includes(R.name);return h.jsxs("label",{className:`spell-chip ${ie.includes(R.name)?"selected":""} ${K?"recommended":""}`,children:[h.jsx("input",{type:"checkbox",checked:ie.includes(R.name),onChange:()=>Lt(R.name)}),h.jsxs("div",{className:"spell-chip-content",children:[h.jsx("span",{className:"spell-chip-name",children:R.name}),h.jsxs("span",{className:"spell-chip-meta",children:[R.damageType&&h.jsxs("span",{className:"dmg-badge-small",style:{color:`var(--dmg-${R.damageType}, var(--parchment-dim))`},children:[Ps[R.damageType]||""," ",R.damageType]}),h.jsx("span",{className:"spell-school",children:R.school})]}),h.jsx("span",{className:"spell-chip-desc",children:R.description})]}),K&&h.jsx("span",{className:"rec-star",children:"★"})]},R.name)})})]}),be.length>0&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"spell-section-label",children:"Hechizos de nivel 1"}),h.jsx("div",{className:"spell-grid",children:be.map(R=>{const K=pe==null?void 0:pe.spells.includes(R.name);return h.jsxs("label",{className:`spell-chip ${ue.includes(R.name)?"selected":""} ${K?"recommended":""}`,children:[h.jsx("input",{type:"checkbox",checked:ue.includes(R.name),onChange:()=>ht(R.name)}),h.jsxs("div",{className:"spell-chip-content",children:[h.jsx("span",{className:"spell-chip-name",children:R.name}),h.jsxs("span",{className:"spell-chip-meta",children:[R.damageType&&h.jsxs("span",{className:"dmg-badge-small",children:[Ps[R.damageType]||""," ",R.damageType]}),h.jsx("span",{className:"spell-school",children:R.school}),R.ritual&&h.jsx("span",{className:"ritual-badge",children:"ritual"})]}),h.jsx("span",{className:"spell-chip-desc",children:R.description})]}),K&&h.jsx("span",{className:"rec-star",children:"★"})]},R.name)})})]})]}),h.jsxs("div",{className:"step-nav",children:[h.jsx("button",{className:"step-prev-btn",onClick:()=>Le("abilities"),children:"← Anterior"}),h.jsx("button",{className:"step-next-btn",onClick:()=>Le("equipment"),children:"Siguiente →"})]})]}),le==="equipment"&&h.jsxs("div",{className:"creation-section",children:[h.jsx("h3",{children:"Equipo inicial"}),h.jsxs("div",{className:"subsection",children:[h.jsx("div",{className:"block-label",children:"🎒 Pack de aventuras inicial"}),h.jsx("div",{className:"pack-grid",children:Qc.map(R=>h.jsxs("label",{className:`armor-option ${Ye===R.name?"selected":""}`,children:[h.jsx("input",{type:"radio",name:"startingPack",checked:Ye===R.name,onChange:()=>We(R.name)}),h.jsxs("div",{className:"armor-option-content",children:[h.jsx("span",{className:"armor-option-name",children:R.name}),h.jsx("span",{className:"armor-option-details",style:{marginTop:"4px",display:"block"},children:R.description})]})]},R.name))})]}),h.jsxs("div",{className:"subsection",children:[h.jsx("div",{className:"block-label",children:"🪙 Monedas iniciales"}),h.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[h.jsxs("div",{className:"field",style:{maxWidth:"180px"},children:[h.jsx("label",{children:"Piezas de Oro (PO)"}),h.jsx("input",{type:"number",min:0,value:ee,onChange:R=>he(parseInt(R.target.value)||0)})]}),h.jsx("span",{className:"small-note",style:{alignSelf:"center",marginTop:"12px"},children:"Fondo inicial para alimentos, posadas y compras durante la aventura."})]})]}),h.jsxs("div",{className:"subsection",children:[h.jsx("div",{className:"block-label",children:"🛡️ Armadura"}),h.jsxs("div",{className:"armor-grid",children:[h.jsxs("label",{className:`armor-option ${$===""?"selected":""}`,children:[h.jsx("input",{type:"radio",name:"armor",checked:$==="",onChange:()=>H("")}),h.jsxs("div",{className:"armor-option-content",children:[h.jsx("span",{className:"armor-option-name",children:"Sin armadura"}),h.jsxs("span",{className:"armor-option-ac",children:["CA 10 + DES",o==="Bárbaro"?" + CON":o==="Monje"?" + SAB":""]})]})]}),Sa.filter(R=>R.type!=="escudo").map(R=>{const K=pe==null?void 0:pe.armor.includes(R.name);return h.jsxs("label",{className:`armor-option ${$===R.name?"selected":""} ${K?"recommended":""}`,children:[h.jsx("input",{type:"radio",name:"armor",checked:$===R.name,onChange:()=>H(R.name)}),h.jsxs("div",{className:"armor-option-content",children:[h.jsxs("div",{className:"armor-option-top",children:[h.jsx("span",{className:"armor-option-name",children:R.name}),h.jsx("span",{className:`armor-type-badge ${R.type}`,children:R.type}),K&&h.jsx("span",{className:"rec-star",children:"★"})]}),h.jsxs("span",{className:"armor-option-ac",children:["CA ",R.acBase,R.addDex?` + DES${R.maxDex!==void 0?` (máx ${R.maxDex})`:""}`:""]}),h.jsxs("span",{className:"armor-option-details",children:[R.stealthDisadvantage&&"⚠️ Desventaja sigilo",R.strRequirement&&` · FUE ${R.strRequirement} req.`," · ",R.cost]})]})]},R.name)})]}),h.jsx("div",{className:"shield-toggle",children:h.jsxs("label",{className:`tool-chip ${F?"selected":""}`,children:[h.jsx("input",{type:"checkbox",checked:F,onChange:R=>Y(R.target.checked)}),h.jsx("span",{children:"🛡️ Escudo (+2 CA)"})]})})]}),h.jsxs("div",{className:"subsection",children:[h.jsx("div",{className:"block-label",children:"⚔️ Armas"}),pe&&pe.weapons.length>0&&h.jsxs("button",{className:"rec-apply-btn",onClick:nt,children:["✨ Aplicar recomendadas para ",o]}),["simple","marcial"].map(R=>{const K=R==="simple"?"Armas simples":"Armas marciales",se=bo.filter(D=>D.category===R);return h.jsxs("div",{className:"weapon-category-section",children:[h.jsx("div",{className:"weapon-cat-label",children:K}),h.jsx("div",{className:"weapon-grid",children:se.map(D=>{const J=pe==null?void 0:pe.weapons.includes(D.name),X=te.includes(D.name);return h.jsxs("label",{className:`weapon-card ${X?"selected":""} ${J?"recommended":""}`,children:[h.jsx("input",{type:"checkbox",checked:X,onChange:()=>Rt(D.name)}),h.jsxs("div",{className:"weapon-card-content",children:[h.jsxs("div",{className:"weapon-card-top",children:[h.jsx("span",{className:"weapon-card-name",children:D.name}),J&&h.jsx("span",{className:"rec-star",children:"★"})]}),h.jsxs("div",{className:"weapon-card-stats",children:[h.jsx("span",{className:"weapon-dice",children:D.dice}),h.jsxs("span",{className:"weapon-dmg-type",children:[Ps[D.damageType]||""," ",D.damageType]})]}),h.jsxs("div",{className:"weapon-card-props",children:[D.properties.map(ae=>h.jsx("span",{className:"weapon-prop-chip",children:ae},ae)),D.versatileDice&&h.jsxs("span",{className:"weapon-prop-chip",children:["versátil ",D.versatileDice]})]}),D.ammoRange&&h.jsxs("div",{className:"weapon-range-note",children:["Alcance: ",D.ammoRange]}),D.throwRange&&!D.ammoRange&&h.jsxs("div",{className:"weapon-range-note",children:["Lanzamiento: ",D.throwRange]})]})]},D.name)})})]},R)})]}),h.jsxs("div",{className:"step-nav",children:[h.jsx("button",{className:"step-prev-btn",onClick:()=>Le("skills"),children:"← Anterior"}),h.jsx("button",{className:"step-next-btn",onClick:()=>Le("review"),children:"Siguiente →"})]})]}),le==="review"&&h.jsxs("div",{className:"creation-section",children:[h.jsx("h3",{children:"Resumen del personaje"}),h.jsxs("div",{className:"review-grid",children:[h.jsxs("div",{className:"review-block",children:[h.jsx("div",{className:"review-label",children:"Identidad"}),h.jsxs("div",{className:"review-value",children:[e||"Sin nombre"," · ",a," · ",o," · Nivel ",i]}),h.jsxs("div",{className:"review-value",style:{fontSize:"0.78rem"},children:["Trasfondo: ",c||"—"]})]}),h.jsxs("div",{className:"review-block",children:[h.jsx("div",{className:"review-label",children:"Atributos (finales)"}),h.jsx("div",{className:"review-abilities",children:un.map(R=>h.jsxs("span",{className:"review-ability",children:[h.jsx("strong",{children:R.label})," ",ze[R.key]," (",Nt(ze[R.key])>=0?"+":"",Nt(ze[R.key]),")"]},R.key))})]}),h.jsxs("div",{className:"review-block",children:[h.jsxs("div",{className:"review-label",children:["Competencias (",N.length,")"]}),h.jsx("div",{className:"review-value",children:N.length>0?N.join(", "):"— Ninguna seleccionada —"})]}),I.length>0&&h.jsxs("div",{className:"review-block",children:[h.jsx("div",{className:"review-label",children:"Herramientas"}),h.jsx("div",{className:"review-value",children:I.join(", ")})]}),h.jsxs("div",{className:"review-block",children:[h.jsx("div",{className:"review-label",children:"Armadura"}),h.jsxs("div",{className:"review-value",children:[$||"Sin armadura",F?" + Escudo":""," · CA estimada: ",W(ze,$,F)]})]}),te.length>0&&h.jsxs("div",{className:"review-block",children:[h.jsxs("div",{className:"review-label",children:["Armas (",te.length,")"]}),h.jsx("div",{className:"review-value",children:te.join(", ")})]}),(ie.length>0||ue.length>0)&&h.jsxs("div",{className:"review-block",children:[h.jsx("div",{className:"review-label",children:"Magia"}),ie.length>0&&h.jsxs("div",{className:"review-value",children:["Trucos: ",ie.join(", ")]}),ue.length>0&&h.jsxs("div",{className:"review-value",children:["Hechizos nv.1: ",ue.join(", ")]})]})]}),h.jsx("button",{className:"cta",onClick:Z,children:"Crear personaje y cruzar el umbral"}),h.jsx("button",{className:"quickstart",onClick:fe,children:"…o probar rápido con un personaje de ejemplo (Kaelen Vent)"})]})]})},Zy=({character:t,onUpdateCharacter:e,onQuickSkillRoll:n})=>{var f;const[i,r]=Fe.useState("stats"),a=Tr[t.className]||Tr.Guerrero,s=u=>{e({...t,...u})},o=()=>{const u=Ys.filter(m=>!t.proficientSkills.includes(m.name));if(!u.length){alert("Ya tenés todas las competencias disponibles.");return}const v=prompt(`¿Qué competencia nueva querés agregar?
`+u.map(m=>m.name).join(", "));if(!v)return;const y=u.find(m=>m.name.toLowerCase()===v.trim().toLowerCase());if(!y){alert("No reconozco esa habilidad.");return}t.proficientSkills.includes(y.name)||s({proficientSkills:[...t.proficientSkills,y.name]})},l=(u,v)=>{const y=t.spellSlotsUsed[u]||0,m=Math.max(0,y+v);s({spellSlotsUsed:{...t.spellSlotsUsed,[u]:m}})},c=(u,v,y)=>{const m=t.classResourceUsed[u]||0,d=Math.max(0,Math.min(y,m+v));s({classResourceUsed:{...t.classResourceUsed,[u]:d}})},p=[{key:"stats",label:"Estadísticas y Comp."},{key:"status",label:"Estado"},{key:"inventory",label:"Inventario"},{key:"dynamic",label:a.tabName},{key:"subclass",label:"Subclase"},{key:"gear",label:"Equipo"},{key:"feats",label:"Dotes"},{key:"companions",label:"Compañeros"},{key:"familiars",label:"Familiares"}],g=t.equippedArmor?Sa.find(u=>u.name===t.equippedArmor):null;return h.jsxs("aside",{id:"sheet-panel",children:[h.jsxs("div",{className:"sheet-header",children:[h.jsx("div",{className:"who-name",children:t.name||"—"}),h.jsx("div",{className:"who-sub",children:`${t.race} · ${t.className}${t.subclass?" ("+t.subclass+")":""} · Nivel ${t.level}`}),h.jsxs("div",{className:"who-vitals",children:[h.jsxs("span",{children:["PG ",h.jsx("b",{children:`${t.hpCur}/${t.hpMax}`})]}),h.jsxs("span",{children:["CA ",h.jsx("b",{children:t.ac})]}),h.jsxs("span",{children:["Comp. ",h.jsx("b",{children:dn(Si(t.level))})]}),h.jsxs("span",{children:["Insp. ",h.jsx("b",{children:t.inspiration?"sí":"no"})]})]})]}),h.jsx("div",{className:"tabbar",children:p.map(u=>h.jsx("button",{className:i===u.key?"active":"",onClick:()=>r(u.key),children:u.label},u.key))}),h.jsxs("div",{className:"tab-panel active",children:[i==="stats"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",children:"Atributos Principales"}),h.jsx("div",{className:"grid3",children:un.map(u=>h.jsxs("div",{className:"ability-box",children:[h.jsx("div",{className:"name",children:u.label}),h.jsx("div",{className:"mod",children:dn(Nt(t.abilities[u.key]))}),h.jsx("div",{className:"score",children:t.abilities[u.key]})]},u.key))}),h.jsx("div",{className:"block-label",style:{marginTop:"10px"},children:"Habilidades de Personaje"}),h.jsx("div",{className:"skills-grid-2col",children:Ys.map(u=>{var d,_;const v=t.proficientSkills.includes(u.name),y=Nt(t.abilities[u.ab])+(v?Si(t.level):0),m=((d=un.find(E=>E.key===u.ab))==null?void 0:d.label)||u.ab.toUpperCase();return h.jsxs("div",{className:`skill-row-card ${v?"proficient":""}`,children:[h.jsx("span",{className:"abbr",title:(_=un.find(E=>E.key===u.ab))==null?void 0:_.full,children:m}),h.jsx("span",{className:"skill-title",children:u.name}),h.jsx("span",{className:"mod",children:dn(y)}),h.jsx("span",{className:"prof-check",children:v?"✓":"·"}),h.jsx("button",{className:"roll-btn",onClick:()=>n(u.name,u.ab),children:"🎲"})]},u.name)})}),h.jsx("button",{className:"add-row-btn",onClick:o,style:{marginTop:"8px"},children:"+ añadir competencia de habilidad"}),h.jsx("div",{className:"block-label",style:{marginTop:"12px"},children:"Salvaciones de Clase"}),h.jsx("div",{className:"save-badge",children:a.saves.map(u=>`${u.toUpperCase()} ${dn(Nt(t.abilities[u])+Si(t.level))}`).join(" · ")}),h.jsx("div",{className:"block-label",style:{marginTop:"10px"},children:"Competencias de Armaduras"}),h.jsx("div",{className:"checks-row",children:["Ligera","Media","Pesada","Escudos"].map(u=>h.jsxs("label",{children:[h.jsx("input",{type:"checkbox",checked:t.armorProf.includes(u),onChange:v=>{const y=v.target.checked?[...t.armorProf,u]:t.armorProf.filter(m=>m!==u);s({armorProf:y})}}),u]},u))}),h.jsx("div",{className:"block-label",style:{marginTop:"10px"},children:"Competencias de Armas"}),h.jsx("div",{className:"checks-row",children:["Simples","Marciales"].map(u=>h.jsxs("label",{children:[h.jsx("input",{type:"checkbox",checked:t.weaponProf.includes(u),onChange:v=>{const y=v.target.checked?[...t.weaponProf,u]:t.weaponProf.filter(m=>m!==u);s({weaponProf:y})}}),u]},u))}),h.jsxs("div",{className:"field",style:{marginTop:"10px"},children:[h.jsx("label",{children:"Herramientas"}),h.jsx("input",{type:"text",value:t.toolProf,onChange:u=>s({toolProf:u.target.value}),placeholder:"Herramientas de ladrón, alquimia..."}),t.selectedTools&&t.selectedTools.length>0&&h.jsx("div",{className:"tool-tags",style:{marginTop:"4px"},children:t.selectedTools.map(u=>h.jsx("span",{className:"tool-tag",children:u},u))})]}),h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Idiomas"}),h.jsx("input",{type:"text",value:t.languages||"Común",onChange:u=>s({languages:u.target.value}),placeholder:"Común, Elfico, Enano..."})]})]}),i==="status"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",children:"Vitalidad"}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"PG actuales"}),h.jsx("input",{type:"number",value:t.hpCur,onChange:u=>s({hpCur:parseInt(u.target.value)||0})})]}),h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"PG máximos"}),h.jsx("input",{type:"number",value:t.hpMax,onChange:u=>s({hpMax:parseInt(u.target.value)||0})})]}),h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"PG temporales"}),h.jsx("input",{type:"number",value:t.tempHp,onChange:u=>s({tempHp:parseInt(u.target.value)||0})})]})]}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Clase de Armadura"}),h.jsx("input",{type:"number",value:t.ac,onChange:u=>s({ac:parseInt(u.target.value)||10})})]}),h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Dados de golpe restantes"}),h.jsx("input",{type:"number",value:t.hitDiceRemaining,onChange:u=>s({hitDiceRemaining:parseInt(u.target.value)||0})})]})]}),g&&h.jsxs("div",{className:"armor-info-box",children:[h.jsxs("span",{className:"armor-info-name",children:["🛡️ ",g.name]}),h.jsx("span",{className:`armor-type-badge ${g.type}`,children:g.type}),g.stealthDisadvantage&&h.jsx("span",{className:"armor-warn",children:"⚠️ Sigilo"}),t.equippedShield&&h.jsx("span",{className:"armor-info-shield",children:"+ Escudo"})]}),h.jsx("div",{className:"block-label",style:{marginTop:"6px"},children:"Salvaciones de muerte"}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Éxitos (0-3)"}),h.jsx("input",{type:"number",min:0,max:3,value:t.deathSaves.success,onChange:u=>s({deathSaves:{...t.deathSaves,success:parseInt(u.target.value)||0}})})]}),h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Fallos (0-3)"}),h.jsx("input",{type:"number",min:0,max:3,value:t.deathSaves.fail,onChange:u=>s({deathSaves:{...t.deathSaves,fail:parseInt(u.target.value)||0}})})]})]}),h.jsx("div",{className:"checks-row",children:h.jsxs("label",{children:[h.jsx("input",{type:"checkbox",checked:t.inspiration,onChange:u=>s({inspiration:u.target.checked})}),"Inspiración"]})}),h.jsx("div",{className:"block-label",style:{marginTop:"10px"},children:"⚡ Condiciones Activas (D&D 5e)"}),h.jsx("div",{className:"conditions-grid",children:zy.map(u=>{const v=(t.conditions||"").split(",").map(m=>m.trim()).filter(Boolean),y=v.includes(u.name);return h.jsxs("button",{type:"button",className:`condition-chip-btn ${y?"active":""}`,title:`${u.name}: ${u.description}`,onClick:()=>{const m=y?v.filter(d=>d!==u.name):[...v,u.name];s({conditions:m.join(", ")})},children:[h.jsx("span",{children:u.emoji}),h.jsx("span",{children:u.name})]},u.name)})})]}),i==="inventory"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",children:"💰 Monedas y Riquezas"}),h.jsxs("div",{className:"gold-card-panel",children:[h.jsxs("div",{className:"field",style:{flex:1,maxWidth:"220px"},children:[h.jsx("label",{children:"🪙 Piezas de Oro (PO)"}),h.jsx("input",{type:"number",min:0,value:t.gold||0,onChange:u=>s({gold:parseInt(u.target.value)||0}),style:{fontSize:"1.1rem",fontWeight:"bold",color:"var(--brass)"}})]}),h.jsxs("div",{className:"gold-summary-badge",children:["Tesoro actual: ",h.jsxs("strong",{children:[t.gold||0," PO"]})]})]}),h.jsx("div",{className:"block-label",style:{marginTop:"12px"},children:"🎒 Objetos e Inventario General"}),h.jsxs("div",{className:"inventory-table-header",children:[h.jsx("span",{className:"col-name",children:"Nombre del Objeto"}),h.jsx("span",{className:"col-qty",children:"Cantidad"}),h.jsx("span",{className:"col-notes",children:"Descripción / Notas"}),h.jsx("span",{className:"col-actions"})]}),h.jsx("div",{className:"list-rows",children:(t.equipment||[]).map((u,v)=>h.jsxs("div",{className:"inventory-sheet-row",children:[h.jsx("input",{type:"text",placeholder:"Nombre del objeto",value:u.name,onChange:y=>{const m=[...t.equipment||[]];m[v].name=y.target.value,s({equipment:m})},className:"inv-name-input"}),h.jsx("input",{type:"number",min:1,placeholder:"Cant.",value:u.qty,onChange:y=>{const m=[...t.equipment||[]];m[v].qty=parseInt(y.target.value)||1,s({equipment:m})},className:"inv-qty-input"}),h.jsx("input",{type:"text",placeholder:"Descripción o notas del objeto",value:u.notes,onChange:y=>{const m=[...t.equipment||[]];m[v].notes=y.target.value,s({equipment:m})},className:"inv-notes-input"}),h.jsx("button",{className:"rm",onClick:()=>s({equipment:(t.equipment||[]).filter((y,m)=>m!==v)}),children:"✕"})]},v))}),h.jsx("button",{className:"add-row-btn",onClick:()=>s({equipment:[...t.equipment||[],{name:"",qty:1,notes:""}]}),style:{marginTop:"8px"},children:"+ añadir objeto al inventario"})]}),i==="dynamic"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",children:a.tabName}),a.spellcasting&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"flavor",children:["Habilidad de lanzamiento: ",(f=un.find(u=>{var v;return u.key===((v=a.spellcasting)==null?void 0:v.ability)}))==null?void 0:f.full,". CD de salvación de conjuro: ",8+Si(t.level)+Nt(t.abilities[a.spellcasting.ability]),". Bono de ataque con conjuro: ",dn(Si(t.level)+Nt(t.abilities[a.spellcasting.ability])),"."]}),h.jsx("div",{className:"block-label",style:{marginTop:"8px"},children:"Ranuras de conjuro"}),h.jsx("div",{children:a.spellcasting.type==="pact"?(()=>{const u=Vy[t.level],v=t.spellSlotsUsed.pact||0;return h.jsxs("div",{className:"resource",children:[h.jsxs("div",{className:"rlabel",children:["Ranuras de Pacto (nivel ",u.level,")"]}),h.jsxs("div",{className:"rctrl",children:[h.jsx("button",{onClick:()=>l("pact",1),children:"−"}),h.jsxs("span",{children:[u.count-v,"/",u.count]}),h.jsx("button",{onClick:()=>l("pact",-1),children:"+"})]})]})})():(a.spellcasting.type==="full"?Hy[t.level]:Gy[t.level]).map((v,y)=>{if(v<=0)return null;const m=y+1,d=t.spellSlotsUsed[m]||0;return h.jsxs("div",{className:"resource",children:[h.jsxs("div",{className:"rlabel",children:["Nivel ",m]}),h.jsxs("div",{className:"rctrl",children:[h.jsx("button",{onClick:()=>l(String(m),1),children:"−"}),h.jsxs("span",{children:[v-d,"/",v]}),h.jsx("button",{onClick:()=>l(String(m),-1),children:"+"})]})]},m)})})]}),h.jsx("div",{className:"block-label",style:{marginTop:"8px"},children:"Recursos de clase"}),h.jsx("div",{children:Wy(t.className,t.level).map(u=>{if(u.info)return h.jsx("div",{className:"resource",children:h.jsx("div",{className:"rlabel",children:u.label})},u.key);const v=t.classResourceUsed[u.key]||0;return h.jsxs("div",{className:"resource",children:[h.jsx("div",{className:"rlabel",children:u.label}),h.jsxs("div",{className:"rctrl",children:[h.jsx("button",{onClick:()=>c(u.key,1,u.max),children:"−"}),h.jsxs("span",{children:[u.max-v,"/",u.max]}),h.jsx("button",{onClick:()=>c(u.key,-1,u.max),children:"+"})]})]},u.key)})}),h.jsx("div",{className:"block-label",style:{marginTop:"8px"},children:a.spellcasting?"Conjuros y trucos conocidos":"Técnicas y maniobras conocidas"}),h.jsx("div",{className:"list-rows",children:t.spellsKnown.map((u,v)=>h.jsxs("div",{className:"spell-sheet-row",children:[h.jsxs("div",{className:"spell-sheet-main",children:[h.jsx("input",{type:"text",placeholder:"Nombre",value:u.name,onChange:y=>{const m=[...t.spellsKnown];m[v].name=y.target.value,s({spellsKnown:m})}}),h.jsx("input",{type:"text",placeholder:"Nivel",value:u.level,onChange:y=>{const m=[...t.spellsKnown];m[v].level=y.target.value,s({spellsKnown:m})},style:{width:"60px"}}),h.jsx("button",{className:"rm",onClick:()=>s({spellsKnown:t.spellsKnown.filter((y,m)=>m!==v)}),children:"✕"})]}),h.jsxs("div",{className:"spell-sheet-meta",children:[u.damageType&&h.jsxs("span",{className:"dmg-badge-inline",style:{borderColor:Co[u.damageType]||"var(--seam)",color:Co[u.damageType]||"var(--parchment-dim)"},children:[Ps[u.damageType]||""," ",u.damageType]}),u.school&&h.jsx("span",{className:"spell-school-badge",children:u.school}),h.jsx("input",{type:"text",placeholder:"Notas",value:u.notes,onChange:y=>{const m=[...t.spellsKnown];m[v].notes=y.target.value,s({spellsKnown:m})},className:"spell-notes-input"})]})]},v))}),h.jsxs("button",{className:"add-row-btn",onClick:()=>s({spellsKnown:[...t.spellsKnown,{name:"",level:"",notes:""}]}),children:["+ añadir ",a.spellcasting?"conjuro":"técnica"]})]}),i==="proficiencies"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",children:"Salvaciones (de clase)"}),h.jsx("div",{className:"save-badge",children:a.saves.map(u=>`${u.toUpperCase()} ${dn(Nt(t.abilities[u])+Si(t.level))}`).join(" · ")}),h.jsx("div",{className:"block-label",style:{marginTop:"8px"},children:"Armaduras"}),h.jsx("div",{className:"checks-row",children:["Ligera","Media","Pesada","Escudos"].map(u=>h.jsxs("label",{children:[h.jsx("input",{type:"checkbox",checked:t.armorProf.includes(u),onChange:v=>{const y=v.target.checked?[...t.armorProf,u]:t.armorProf.filter(m=>m!==u);s({armorProf:y})}}),u]},u))}),h.jsx("div",{className:"block-label",style:{marginTop:"8px"},children:"Armas"}),h.jsx("div",{className:"checks-row",children:["Simples","Marciales"].map(u=>h.jsxs("label",{children:[h.jsx("input",{type:"checkbox",checked:t.weaponProf.includes(u),onChange:v=>{const y=v.target.checked?[...t.weaponProf,u]:t.weaponProf.filter(m=>m!==u);s({weaponProf:y})}}),u]},u))}),h.jsxs("div",{className:"field",style:{marginTop:"8px"},children:[h.jsx("label",{children:"Herramientas"}),h.jsx("input",{type:"text",value:t.toolProf,onChange:u=>s({toolProf:u.target.value})}),t.selectedTools&&t.selectedTools.length>0&&h.jsx("div",{className:"tool-tags",children:t.selectedTools.map(u=>h.jsx("span",{className:"tool-tag",children:u},u))})]}),h.jsxs("div",{className:"field",children:[h.jsx("label",{children:"Idiomas"}),h.jsx("input",{type:"text",value:t.languages,onChange:u=>s({languages:u.target.value})})]})]}),i==="subclass"&&h.jsx(h.Fragment,{children:t.level<a.unlockLevel?h.jsxs("div",{className:"flavor",children:["Tu subclase se desbloquea en nivel ",a.unlockLevel,". Todavía sos nivel ",t.level,"."]}):h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",children:"Elegí tu senda"}),h.jsxs("select",{value:t.subclass,onChange:u=>s({subclass:u.target.value}),children:[h.jsx("option",{value:"",children:"— sin elegir —"}),a.subclasses.map(u=>h.jsx("option",{value:u,children:u},u))]}),h.jsxs("div",{className:"field",style:{marginTop:"10px"},children:[h.jsx("label",{children:"Notas de tu subclase (rasgos, votos, tradición)"}),h.jsx("textarea",{rows:5,value:t.subclassNotes||"",onChange:u=>s({subclassNotes:u.target.value})})]})]})}),i==="gear"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",children:"🛡️ Equipo Equipado (por Zonas)"}),h.jsx("div",{className:"list-rows",style:{marginBottom:"16px"},children:(t.equippedGear||[]).length===0?h.jsx("div",{className:"flavor",children:"No hay objetos equipados por el momento. Podés añadir o sincronizar desde armas y armaduras."}):(t.equippedGear||[]).map((u,v)=>h.jsxs("div",{className:"gear-sheet-card",children:[h.jsxs("div",{className:"gear-sheet-top",children:[h.jsx("input",{type:"text",placeholder:"Nombre del equipo",value:u.name,onChange:y=>{const m=[...t.equippedGear||[]];m[v].name=y.target.value,s({equippedGear:m})},className:"gear-name-input"}),h.jsxs("div",{className:"gear-slot-selector",children:[h.jsx("span",{className:"slot-icon",children:"📍 Zona:"}),h.jsx("select",{value:u.slot,onChange:y=>{const m=[...t.equippedGear||[]];m[v].slot=y.target.value,s({equippedGear:m})},children:qy.map(y=>h.jsx("option",{value:y,children:y},y))})]}),h.jsxs("label",{className:"gear-magic-label",children:[h.jsx("input",{type:"checkbox",checked:u.magical||!1,onChange:y=>{const m=[...t.equippedGear||[]];m[v].magical=y.target.checked,s({equippedGear:m})}}),"✨ Mágica"]}),h.jsx("button",{className:"rm",onClick:()=>s({equippedGear:(t.equippedGear||[]).filter((y,m)=>m!==v)}),children:"✕"})]}),h.jsxs("div",{className:"gear-sheet-details",children:[h.jsx("input",{type:"text",placeholder:"Descripción o efecto del equipo",value:u.notes,onChange:y=>{const m=[...t.equippedGear||[]];m[v].notes=y.target.value,s({equippedGear:m})},className:"gear-notes-input"}),h.jsx("input",{type:"text",placeholder:"Propiedades (ej: CA 16, 1d8 cortante, Sutil)",value:u.properties,onChange:y=>{const m=[...t.equippedGear||[]];m[v].properties=y.target.value,s({equippedGear:m})},className:"gear-props-input"})]})]},v))}),h.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"16px"},children:[h.jsx("button",{className:"add-row-btn",onClick:()=>s({equippedGear:[...t.equippedGear||[],{name:"",slot:"Torso",notes:"",properties:""}]}),children:"+ añadir objeto equipado"}),h.jsx("button",{className:"add-row-btn",style:{borderColor:"var(--brass-dim)",color:"var(--brass)"},onClick:()=>{const u=[];if(t.equippedArmor){const v=Sa.find(y=>y.name===t.equippedArmor);u.push({name:t.equippedArmor,slot:"Torso",notes:v?`Armadura ${v.type}`:"",properties:v?`CA ${v.acBase}${v.addDex?" + DES":""}`:""})}t.equippedShield&&u.push({name:"Escudo",slot:"Mano Secundaria",notes:"Protector",properties:"CA +2"}),t.weapons.forEach((v,y)=>{const m=y===0?"Mano Principal":v.range==="a distancia"?"Espalda":"Mano Secundaria";u.push({name:v.name,slot:m,notes:`${v.dice} ${v.damageType||v.type}`,properties:v.notes||(v.properties?v.properties.join(", "):""),magical:v.magical})}),s({equippedGear:u})},children:"🔄 Sincronizar desde armas y armadura"})]}),h.jsx("div",{className:"block-label",children:"⚔️ Armas y ataques"}),h.jsx("div",{className:"list-rows",children:t.weapons.map((u,v)=>{const y=Nt(t.abilities[u.ability])+(u.proficient?Si(t.level):0);return h.jsxs("div",{className:"weapon-sheet-card",children:[h.jsxs("div",{className:"weapon-sheet-header",children:[h.jsx("input",{type:"text",placeholder:"Arma",value:u.name,onChange:m=>{const d=[...t.weapons];d[v].name=m.target.value,s({weapons:d})},className:"weapon-name-input"}),u.magical&&h.jsx("span",{className:"magical-badge",children:"✨ Mágica"}),h.jsx("button",{className:"rm",onClick:()=>s({weapons:t.weapons.filter((m,d)=>d!==v)}),children:"✕"})]}),h.jsxs("div",{className:"weapon-sheet-stats",children:[h.jsxs("select",{value:u.ability,onChange:m=>{const d=[...t.weapons];d[v].ability=m.target.value,s({weapons:d})},children:[h.jsx("option",{value:"str",children:"FUE"}),h.jsx("option",{value:"dex",children:"DES"})]}),h.jsx("input",{type:"text",placeholder:"Dado daño",value:u.dice,onChange:m=>{const d=[...t.weapons];d[v].dice=m.target.value,s({weapons:d})},style:{width:"60px"}}),h.jsxs("span",{className:"weapon-sheet-attack",children:["Ataque ",dn(y)]}),h.jsxs("label",{className:"weapon-prof-label",children:[h.jsx("input",{type:"checkbox",checked:u.proficient,onChange:m=>{const d=[...t.weapons];d[v].proficient=m.target.checked,s({weapons:d})},style:{width:"auto",verticalAlign:"middle"}}),"Comp."]})]}),h.jsxs("div",{className:"weapon-sheet-badges",children:[u.category&&h.jsx("span",{className:`weapon-cat-badge ${u.category}`,children:u.category==="simple"?"Simple":"Marcial"}),u.range&&h.jsx("span",{className:"weapon-range-badge",children:u.range}),u.damageType&&h.jsxs("span",{className:"dmg-badge-inline",style:{borderColor:Co[u.damageType]||"var(--seam)",color:Co[u.damageType]||"var(--parchment-dim)"},children:[Ps[u.damageType]||""," ",u.damageType]}),u.properties&&u.properties.map(m=>h.jsx("span",{className:"weapon-prop-badge",children:m},m)),u.versatileDice&&h.jsxs("span",{className:"weapon-prop-badge",children:["versátil ",u.versatileDice]})]})]},v)})}),h.jsx("button",{className:"add-row-btn",onClick:()=>s({weapons:[...t.weapons,{name:"",ability:"str",dice:"1d6",type:"contundente",proficient:!0,notes:""}]}),children:"+ añadir arma"})]}),i==="feats"&&h.jsx(h.Fragment,{children:(()=>{const u=By(t.className,t.level,t.race),v=t.feats.length,y=Math.max(0,u-v),m=a.spellcasting!==null||t.spellsKnown&&t.spellsKnown.length>0||t.feats.includes("Iniciado en la Magia"),d=["Bárbaro","Guerrero","Paladín","Explorador","Monje"].includes(t.className)||t.weaponProf&&t.weaponProf.includes("Marciales"),_=(E,S)=>{const b=[4,8,12,16,19];return S==="Guerrero"&&b.push(6,14),S==="Pícaro"&&b.push(10),b.sort((w,C)=>w-C),b.find(w=>w>E)||20};return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"feat-header-card",children:[h.jsxs("div",{className:"feat-counter-title",children:["🎯 Progreso de Dotes (Nivel ",t.level,")"]}),h.jsxs("div",{className:"feat-counter-badge",children:["Dotes adquiridas: ",h.jsxs("strong",{children:[v," / ",u]})]}),y>0?h.jsxs("div",{className:"feat-unlocked-msg",children:["✨ ¡Tenés ",h.jsx("strong",{children:y})," dote(s) disponible(s) para elegir! Elegí una dote del catálogo para bloquearla en tu personaje."]}):h.jsxs("div",{className:"feat-locked-msg",children:["🔒 No tenés dotes disponibles en este momento. Alcanzarás tu siguiente dote al nivel ",h.jsx("strong",{children:_(t.level,t.className)}),"."]})]}),t.feats.length>0&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",style:{marginTop:"12px"},children:"🔒 Dotes Adquiridas (Bloqueadas)"}),h.jsx("div",{className:"acquired-feats-list",children:t.feats.map(E=>{const S=Jp.find(b=>b.name===E);return h.jsxs("div",{className:"acquired-feat-card",children:[h.jsxs("div",{className:"acquired-feat-header",children:[h.jsxs("span",{className:"acquired-feat-title",children:["✨ ",E]}),h.jsx("span",{className:"acquired-feat-locked-tag",children:"🔒 Bloqueada en personaje"})]}),h.jsx("p",{className:"acquired-feat-desc",children:(S==null?void 0:S.description)||"Dote adquirida."})]},E)})})]}),h.jsxs("div",{className:"block-label",style:{marginTop:"12px"},children:["📖 Catálogo de Dotes Elegibles para ",t.className]}),h.jsx("div",{className:"feat-catalog-list",children:Jp.map(E=>{if(t.feats.includes(E.name))return null;let b=!0,w="";return E.spellcasterOnly&&!m&&(b=!1,w="Requiere capacidad de lanzar conjuros (Brujo, Mago, Clérigo, Bardo, etc.)"),E.martialOnly&&!d&&(b=!1,w="Requiere clase marcial o competencia en armas marciales"),h.jsxs("div",{className:`feat-catalog-card ${b?"":"ineligible"} ${y===0?"locked-out":""}`,children:[h.jsxs("div",{className:"feat-card-header",children:[h.jsx("span",{className:"feat-card-name",children:E.name}),h.jsx("span",{className:`feat-cat-chip ${E.category}`,children:E.category})]}),E.prerequisite&&h.jsxs("div",{className:"feat-prereq-note",children:["Prerrequisito: ",E.prerequisite]}),h.jsx("p",{className:"feat-card-desc",children:E.description}),h.jsx("div",{className:"feat-card-footer",children:b?y>0?h.jsxs("button",{type:"button",className:"choose-feat-btn",onClick:()=>{s({feats:[...t.feats,E.name]})},children:["➕ Elegir Dote (",E.name,")"]}):h.jsxs("span",{className:"feat-locked-badge",children:["🔒 Bloqueado (Siguiente al nivel ",_(t.level,t.className),")"]}):h.jsxs("span",{className:"feat-reason-badge",children:["⚠️ ",w]})})]},E.name)})}),h.jsxs("div",{className:"field",style:{marginTop:"14px"},children:[h.jsx("label",{children:"Dotes personalizadas / notas caseras"}),h.jsx("textarea",{rows:2,value:t.featsCustom,onChange:E=>s({featsCustom:E.target.value}),placeholder:"Añade rasgos o reglas caseras de tu DM..."})]})]})})()}),i==="companions"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",children:"Compañeros, monturas y aliados"}),h.jsx("div",{className:"list-rows",children:t.companions.map((u,v)=>h.jsxs("div",{className:"list-row wide",children:[h.jsx("input",{type:"text",placeholder:"Nombre",value:u.name,onChange:y=>{const m=[...t.companions];m[v].name=y.target.value,s({companions:m})}}),h.jsx("input",{type:"text",placeholder:"Tipo",value:u.type,onChange:y=>{const m=[...t.companions];m[v].type=y.target.value,s({companions:m})}}),h.jsx("input",{type:"number",placeholder:"PG",value:u.hp||"",onChange:y=>{const m=[...t.companions];m[v].hp=parseInt(y.target.value)||0,s({companions:m})}}),h.jsx("input",{type:"text",placeholder:"Notas",value:u.notes,onChange:y=>{const m=[...t.companions];m[v].notes=y.target.value,s({companions:m})}}),h.jsx("button",{className:"rm",onClick:()=>s({companions:t.companions.filter((y,m)=>m!==v)}),children:"✕"})]},v))}),h.jsx("button",{className:"add-row-btn",onClick:()=>s({companions:[...t.companions,{name:"",type:"",hp:0,notes:""}]}),children:"+ añadir compañero"})]}),i==="familiars"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"block-label",children:"Familiares"}),h.jsx("div",{className:"list-rows",children:t.familiars.map((u,v)=>h.jsxs("div",{className:"list-row",children:[h.jsx("input",{type:"text",placeholder:"Nombre",value:u.name,onChange:y=>{const m=[...t.familiars];m[v].name=y.target.value,s({familiars:m})}}),h.jsx("select",{value:u.form,onChange:y=>{const m=[...t.familiars];m[v].form=y.target.value,s({familiars:m})},children:Qp.map(y=>h.jsx("option",{value:y,children:y},y))}),h.jsx("input",{type:"text",placeholder:"Notas (sentidos, vínculo)",value:u.notes,onChange:y=>{const m=[...t.familiars];m[v].notes=y.target.value,s({familiars:m})}}),h.jsx("button",{className:"rm",onClick:()=>s({familiars:t.familiars.filter((y,m)=>m!==v)}),children:"✕"})]},v))}),h.jsx("button",{className:"add-row-btn",onClick:()=>s({familiars:[...t.familiars,{name:"",form:Qp[0],notes:""}]}),children:"+ añadir familiar"})]})]})]})},Jy=({character:t,pendingRolls:e,onAddPendingRoll:n,onTriggerAnimation:i})=>{const r=p=>{const g=p==="adv"?{advantage:!0}:p==="dis"?{disadvantage:!0}:{},{rolls:f,result:u}=xs(g),v=p==="adv"?"d20 con ventaja":p==="dis"?"d20 con desventaja":"d20",y=u===20?"crit":u===1?"fail":"";i({dieType:"d20",label:`Lanzando ${v}`,rolls:f,finalResult:u,crit:y,onComplete:()=>{n({text:`🎲 ${v}: [${f.join(", ")}] → ${u}`,cls:y})}})},a=()=>{const p=Ys.map(u=>u.name).join(", "),g=prompt(`¿Qué habilidad? Opciones:
`+p);if(!g)return;const f=Ys.find(u=>u.name.toLowerCase()===g.trim().toLowerCase());if(!f){alert("No reconozco esa habilidad.");return}s(f.name,f.ab)},s=(p,g)=>{const f=t.proficientSkills.includes(p),u=Nt(t.abilities[g]),v=f?Si(t.level):0,{result:y}=xs({}),m=y+u+v,d=y===20?" (¡20 natural!)":y===1?" (1 natural)":"",_=y===20?"crit":y===1?"fail":"";i({dieType:"d20",label:`Prueba de ${p}`,rolls:[y],finalResult:y,mod:u+v,total:m,crit:_,onComplete:()=>{n({text:`🎲 ${p}: [${y}] ${dn(u)}(${g.toUpperCase()})${f?dn(v)+"(comp)":""} = ${m}${d}`,cls:_})}})},o=()=>{const p=prompt("¿Salvación de qué atributo? (FUE / DES / CON / INT / SAB / CAR)");if(!p)return;const f={FUE:"str",STR:"str",FUERZA:"str",DES:"dex",DEX:"dex",DESTREZA:"dex",CON:"con",CONSTITUCION:"con",CONSTITUCIÓN:"con",INT:"int",INTELIGENCIA:"int",SAB:"wis",WIS:"wis",SABIDURIA:"wis",SABIDURÍA:"wis",CAR:"cha",CHA:"cha",CARISMA:"cha"}[p.trim().toUpperCase()];if(!f){alert("No reconozco ese atributo.");return}const u=Nt(t.abilities[f]),{result:v}=xs({}),y=v+u,m=v===20?" (¡20 natural!)":v===1?" (1 natural)":"",d=v===20?"crit":v===1?"fail":"";i({dieType:"d20",label:`Salvación de ${f.toUpperCase()}`,rolls:[v],finalResult:v,mod:u,total:y,crit:d,onComplete:()=>{n({text:`🛡️ Salvación de ${f.toUpperCase()}: [${v}] ${dn(u)} = ${y}${m}`,cls:d})}})},l=()=>{const p=prompt("Fórmula de daño (ej: 1d8+3):");if(!p)return;const g=$y(p);if(!g){alert("Formato inválido. Usá algo como 1d8+3");return}let f="d6";p.includes("d20")?f="d20":p.includes("d12")?f="d12":p.includes("d10")?f="d10":p.includes("d8")?f="d8":p.includes("d4")&&(f="d4"),i({dieType:f,label:`Tirada de Daño (${p})`,rolls:g.rolls,finalResult:g.rolls[0]||g.total,mod:g.mod,total:g.total,crit:"crit",onComplete:()=>{n({text:`⚔️ Daño (${p}): [${g.rolls.join(", ")}]${g.mod?dn(g.mod):""} = ${g.total}`,cls:"crit"})}})},c=()=>{const p=Nt(t.abilities.dex),{result:g}=xs({}),f=g+p,u=g===20?"crit":g===1?"fail":"";i({dieType:"d20",label:"Tirada de Iniciativa",rolls:[g],finalResult:g,mod:p,total:f,crit:u,onComplete:()=>{n({text:`⏱️ Iniciativa: [${g}] ${dn(p)}(DES) = ${f}`,cls:u})}})};return h.jsxs(h.Fragment,{children:[e.length>0&&h.jsx("div",{id:"pending-rolls",children:e.map((p,g)=>h.jsx("div",{className:`roll-chip ${p.cls||""}`,children:p.text},g))}),h.jsxs("div",{id:"dice-tray",children:[h.jsx("span",{className:"label",children:"Mesa de dados"}),h.jsx("button",{onClick:()=>r(),children:"d20"}),h.jsx("button",{onClick:()=>r("adv"),children:"d20 (ventaja)"}),h.jsx("button",{onClick:()=>r("dis"),children:"d20 (desventaja)"}),h.jsx("button",{onClick:a,children:"Tirada de habilidad…"}),h.jsx("button",{onClick:o,children:"Tirada de salvación…"}),h.jsx("button",{onClick:l,className:"seal",children:"Tirada de daño…"}),h.jsx("button",{onClick:c,children:"Iniciativa"})]})]})},Qy=({characterName:t,log:e,isThinking:n,onSendTurn:i})=>{const[r,a]=Fe.useState(""),s=Fe.useRef(null);Fe.useEffect(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[e,n]);const o=()=>{n||(i(r),a(""))},l=c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),o())};return h.jsxs("div",{id:"journal-col",children:[h.jsxs("div",{id:"journal",ref:s,children:[e.map((c,p)=>h.jsxs("div",{className:`entry ${c.role==="player"?"player":"dm"}`,children:[h.jsx("div",{className:"who",children:c.role==="player"?t||"Vos":"El Dungeon Master"}),h.jsx("div",{className:"text",children:c.text}),c.rolls&&c.rolls.length>0&&h.jsx("div",{children:c.rolls.map((g,f)=>h.jsx("span",{className:"roll-chip",children:g},f))})]},p)),n&&h.jsx("div",{className:"entry dm thinking",children:"El DM consulta sus notas..."})]}),h.jsxs("div",{id:"input-bar",children:[h.jsx("textarea",{id:"player-input",placeholder:"¿Qué hacés? (Presioná Enter para enviar, Shift+Enter para nueva línea)",value:r,onChange:c=>a(c.target.value),onKeyDown:l}),h.jsx("button",{id:"send-btn",onClick:o,disabled:n,children:"Actuar"})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="185",eS=0,im=1,tS=2,ml=1,nS=2,_s=3,dr=0,vn=1,Ei=2,Ci=0,Ca=1,rm=2,am=3,sm=4,iS=5,wr=100,rS=101,aS=102,sS=103,oS=104,lS=200,cS=201,uS=202,dS=203,Cd=204,Rd=205,fS=206,hS=207,pS=208,mS=209,gS=210,vS=211,xS=212,_S=213,yS=214,Pd=0,Nd=1,Dd=2,Ba=3,Ld=4,Id=5,Ud=6,Fd=7,S0=0,SS=1,MS=2,ci=0,M0=1,E0=2,T0=3,w0=4,A0=5,b0=6,C0=7,R0=300,zr=301,za=302,eu=303,tu=304,xc=306,Od=1e3,Ai=1001,kd=1002,Gt=1003,ES=1004,Ro=1005,Qt=1006,nu=1007,Nr=1008,En=1009,P0=1010,N0=1011,Ks=1012,ph=1013,fi=1014,ai=1015,Ii=1016,mh=1017,gh=1018,Zs=1020,D0=35902,L0=35899,I0=1021,U0=1022,$n=1023,Ui=1026,Dr=1027,F0=1028,vh=1029,Hr=1030,xh=1031,_h=1033,gl=33776,vl=33777,xl=33778,_l=33779,Bd=35840,zd=35841,Hd=35842,Gd=35843,Vd=36196,Wd=37492,jd=37496,Xd=37488,qd=37489,Xl=37490,$d=37491,Yd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,ef=37813,tf=37814,nf=37815,rf=37816,af=37817,sf=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,ql=36285,mf=36286,TS=3200,gf=0,wS=1,Zi="",Dn="srgb",$l="srgb-linear",Yl="linear",rt="srgb",$r=7680,om=519,AS=512,bS=513,CS=514,yh=515,RS=516,PS=517,Sh=518,NS=519,lm=35044,cm="300 es",si=2e3,Js=2001;function DS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LS(){const t=Kl("canvas");return t.style.display="block",t}const um={};function dm(...t){const e="THREE."+t.shift();console.log(e,...t)}function O0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=O0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=O0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ra(...t){const e=t.join(" ");e in um||(um[e]=!0,Ue(...t))}function IS(t,e,n){return new Promise(function(i,r){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}const US={[Pd]:Nd,[Dd]:Ud,[Ld]:Fd,[Ba]:Id,[Nd]:Pd,[Ud]:Dd,[Fd]:Ld,[Id]:Ba};class Wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fm=1234567;const Pa=Math.PI/180,Qs=180/Math.PI;function Xa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function Mh(t,e){return(t%e+e)%e}function FS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function OS(t,e,n){return t!==e?(n-t)/(e-t):0}function Ns(t,e,n){return(1-n)*t+n*e}function kS(t,e,n,i){return Ns(t,e,1-Math.exp(-n*i))}function BS(t,e=1){return e-Math.abs(Mh(t,e*2)-e)}function zS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function HS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function GS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function VS(t,e){return t+Math.random()*(e-t)}function WS(t){return t*(.5-Math.random())}function jS(t){t!==void 0&&(fm=t);let e=fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XS(t){return t*Pa}function qS(t){return t*Qs}function $S(t){return(t&t-1)===0&&t!==0}function YS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function KS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ZS(t,e,n,i,r){const a=Math.cos,s=Math.sin,o=a(n/2),l=s(n/2),c=a((e+i)/2),p=s((e+i)/2),g=a((e-i)/2),f=s((e-i)/2),u=a((i-e)/2),v=s((i-e)/2);switch(r){case"XYX":t.set(o*p,l*g,l*f,o*c);break;case"YZY":t.set(l*f,o*p,l*g,o*c);break;case"ZXZ":t.set(l*g,l*f,o*p,o*c);break;case"XZX":t.set(o*p,l*v,l*u,o*c);break;case"YXY":t.set(l*u,o*p,l*v,o*c);break;case"ZYZ":t.set(l*v,l*u,o*p,o*c);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function la(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ss={DEG2RAD:Pa,RAD2DEG:Qs,generateUUID:Xa,clamp:qe,euclideanModulo:Mh,mapLinear:FS,inverseLerp:OS,lerp:Ns,damp:kS,pingpong:BS,smoothstep:zS,smootherstep:HS,randInt:GS,randFloat:VS,randFloatSpread:WS,seededRandom:jS,degToRad:XS,radToDeg:qS,isPowerOfTwo:$S,ceilPowerOfTwo:YS,floorPowerOfTwo:KS,setQuaternionFromProperEuler:ZS,normalize:tn,denormalize:la},Rh=class Rh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;let je=Rh;class qa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],c=i[r+1],p=i[r+2],g=i[r+3],f=a[s+0],u=a[s+1],v=a[s+2],y=a[s+3];if(g!==y||l!==f||c!==u||p!==v){let m=l*f+c*u+p*v+g*y;m<0&&(f=-f,u=-u,v=-v,y=-y,m=-m);let d=1-o;if(m<.9995){const _=Math.acos(m),E=Math.sin(_);d=Math.sin(d*_)/E,o=Math.sin(o*_)/E,l=l*d+f*o,c=c*d+u*o,p=p*d+v*o,g=g*d+y*o}else{l=l*d+f*o,c=c*d+u*o,p=p*d+v*o,g=g*d+y*o;const _=1/Math.sqrt(l*l+c*c+p*p+g*g);l*=_,c*=_,p*=_,g*=_}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],p=i[r+3],g=a[s],f=a[s+1],u=a[s+2],v=a[s+3];return e[n]=o*v+p*g+l*u-c*f,e[n+1]=l*v+p*f+c*g-o*u,e[n+2]=c*v+p*u+o*f-l*g,e[n+3]=p*v-o*g-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(r/2),g=o(a/2),f=l(i/2),u=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=f*p*g+c*u*v,this._y=c*u*g-f*p*v,this._z=c*p*v+f*u*g,this._w=c*p*g-f*u*v;break;case"YXZ":this._x=f*p*g+c*u*v,this._y=c*u*g-f*p*v,this._z=c*p*v-f*u*g,this._w=c*p*g+f*u*v;break;case"ZXY":this._x=f*p*g-c*u*v,this._y=c*u*g+f*p*v,this._z=c*p*v+f*u*g,this._w=c*p*g-f*u*v;break;case"ZYX":this._x=f*p*g-c*u*v,this._y=c*u*g+f*p*v,this._z=c*p*v-f*u*g,this._w=c*p*g+f*u*v;break;case"YZX":this._x=f*p*g+c*u*v,this._y=c*u*g+f*p*v,this._z=c*p*v-f*u*g,this._w=c*p*g-f*u*v;break;case"XZY":this._x=f*p*g-c*u*v,this._y=c*u*g-f*p*v,this._z=c*p*v+f*u*g,this._w=c*p*g+f*u*v;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],p=n[6],g=n[10],f=i+o+g;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(p-l)*u,this._y=(a-c)*u,this._z=(s-r)*u}else if(i>o&&i>g){const u=2*Math.sqrt(1+i-o-g);this._w=(p-l)/u,this._x=.25*u,this._y=(r+s)/u,this._z=(a+c)/u}else if(o>g){const u=2*Math.sqrt(1+o-i-g);this._w=(a-c)/u,this._x=(r+s)/u,this._y=.25*u,this._z=(l+p)/u}else{const u=2*Math.sqrt(1+g-i-o);this._w=(s-r)/u,this._x=(a+c)/u,this._y=(l+p)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+s*o+r*c-a*l,this._y=r*p+s*l+a*o-i*c,this._z=a*p+s*c+i*l-r*o,this._w=s*p-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,n=Math.sin(n*c)/p,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+a*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+a*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ph=class Ph{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),p=2*(o*n-a*r),g=2*(a*i-s*n);return this.x=n+l*c+s*g-o*p,this.y=i+l*p+o*c-a*g,this.z=r+l*g+a*p-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;let B=Ph;const iu=new B,hm=new qa,Nh=class Nh{constructor(e,n,i,r,a,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c)}set(e,n,i,r,a,s,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=a,p[5]=l,p[6]=i,p[7]=s,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],p=i[4],g=i[7],f=i[2],u=i[5],v=i[8],y=r[0],m=r[3],d=r[6],_=r[1],E=r[4],S=r[7],b=r[2],w=r[5],C=r[8];return a[0]=s*y+o*_+l*b,a[3]=s*m+o*E+l*w,a[6]=s*d+o*S+l*C,a[1]=c*y+p*_+g*b,a[4]=c*m+p*E+g*w,a[7]=c*d+p*S+g*C,a[2]=f*y+u*_+v*b,a[5]=f*m+u*E+v*w,a[8]=f*d+u*S+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return n*s*p-n*o*c-i*a*p+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],p=e[8],g=p*s-o*c,f=o*l-p*a,u=c*a-s*l,v=n*g+i*f+r*u;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=g*y,e[1]=(r*c-p*i)*y,e[2]=(o*i-r*s)*y,e[3]=f*y,e[4]=(p*n-r*l)*y,e[5]=(r*a-o*n)*y,e[6]=u*y,e[7]=(i*l-c*n)*y,e[8]=(s*n-i*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return Ra("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ru.makeScale(e,n)),this}rotate(e){return Ra("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ru.makeRotation(-e)),this}translate(e,n){return Ra("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nh.prototype.isMatrix3=!0;let Oe=Nh;const ru=new Oe,pm=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mm=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JS(){const t={enabled:!0,workingColorSpace:$l,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===rt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(r.r=Na(r.r),r.g=Na(r.g),r.b=Na(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zi?Yl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ra("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ra("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[$l]:{primaries:e,whitePoint:i,transfer:Yl,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const $e=JS();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Na(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Yr;class QS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yr===void 0&&(Yr=Kl("canvas")),Yr.width=e.width,Yr.height=e.height;const r=Yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ri(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class Eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(au(r[s].image)):a.push(au(r[s]))}else a=au(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function au(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?QS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let tM=0;const su=new B;class sn extends Wr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Ai,r=Ai,a=Qt,s=Nr,o=$n,l=En,c=sn.DEFAULT_ANISOTROPY,p=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Xa(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(su).x}get height(){return this.source.getSize(su).y}get depth(){return this.source.getSize(su).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=R0;sn.DEFAULT_ANISOTROPY=1;const Dh=class Dh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],p=l[4],g=l[8],f=l[1],u=l[5],v=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(p-f)<.01&&Math.abs(g-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(p+f)<.1&&Math.abs(g+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,S=(u+1)/2,b=(d+1)/2,w=(p+f)/4,C=(g+y)/4,x=(v+m)/4;return E>S&&E>b?E<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(E),r=w/i,a=C/i):S>b?S<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),i=w/r,a=x/r):b<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(b),i=C/a,r=x/a),this.set(i,r,a,n),this}let _=Math.sqrt((m-v)*(m-v)+(g-y)*(g-y)+(f-p)*(f-p));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(g-y)/_,this.z=(f-p)/_,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dh.prototype.isVector4=!0;let xt=Dh;class nM extends Wr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},a=new sn(r),s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Eh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends nM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class k0 extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iM extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tc=class tc{constructor(e,n,i,r,a,s,o,l,c,p,g,f,u,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c,p,g,f,u,v,y,m)}set(e,n,i,r,a,s,o,l,c,p,g,f,u,v,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=p,d[10]=g,d[14]=f,d[3]=u,d[7]=v,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),a=1/Kr.setFromMatrixColumn(e,1).length(),s=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const f=s*p,u=s*g,v=o*p,y=o*g;n[0]=l*p,n[4]=-l*g,n[8]=c,n[1]=u+v*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=v+u*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*p,u=l*g,v=c*p,y=c*g;n[0]=f+y*o,n[4]=v*o-u,n[8]=s*c,n[1]=s*g,n[5]=s*p,n[9]=-o,n[2]=u*o-v,n[6]=y+f*o,n[10]=s*l}else if(e.order==="ZXY"){const f=l*p,u=l*g,v=c*p,y=c*g;n[0]=f-y*o,n[4]=-s*g,n[8]=v+u*o,n[1]=u+v*o,n[5]=s*p,n[9]=y-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const f=s*p,u=s*g,v=o*p,y=o*g;n[0]=l*p,n[4]=v*c-u,n[8]=f*c+y,n[1]=l*g,n[5]=y*c+f,n[9]=u*c-v,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,u=s*c,v=o*l,y=o*c;n[0]=l*p,n[4]=y-f*g,n[8]=v*g+u,n[1]=g,n[5]=s*p,n[9]=-o*p,n[2]=-c*p,n[6]=u*g+v,n[10]=f-y*g}else if(e.order==="XZY"){const f=s*l,u=s*c,v=o*l,y=o*c;n[0]=l*p,n[4]=-g,n[8]=c*p,n[1]=f*g+y,n[5]=s*p,n[9]=u*g-v,n[2]=v*g-u,n[6]=o*p,n[10]=y*g+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,aM)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Hi.crossVectors(i,_n),Hi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Hi.crossVectors(i,_n)),Hi.normalize(),Po.crossVectors(_n,Hi),r[0]=Hi.x,r[4]=Po.x,r[8]=_n.x,r[1]=Hi.y,r[5]=Po.y,r[9]=_n.y,r[2]=Hi.z,r[6]=Po.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],p=i[1],g=i[5],f=i[9],u=i[13],v=i[2],y=i[6],m=i[10],d=i[14],_=i[3],E=i[7],S=i[11],b=i[15],w=r[0],C=r[4],x=r[8],A=r[12],N=r[1],L=r[5],I=r[9],q=r[13],te=r[2],z=r[6],$=r[10],H=r[14],F=r[3],Y=r[7],ie=r[11],oe=r[15];return a[0]=s*w+o*N+l*te+c*F,a[4]=s*C+o*L+l*z+c*Y,a[8]=s*x+o*I+l*$+c*ie,a[12]=s*A+o*q+l*H+c*oe,a[1]=p*w+g*N+f*te+u*F,a[5]=p*C+g*L+f*z+u*Y,a[9]=p*x+g*I+f*$+u*ie,a[13]=p*A+g*q+f*H+u*oe,a[2]=v*w+y*N+m*te+d*F,a[6]=v*C+y*L+m*z+d*Y,a[10]=v*x+y*I+m*$+d*ie,a[14]=v*A+y*q+m*H+d*oe,a[3]=_*w+E*N+S*te+b*F,a[7]=_*C+E*L+S*z+b*Y,a[11]=_*x+E*I+S*$+b*ie,a[15]=_*A+E*q+S*H+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],p=e[2],g=e[6],f=e[10],u=e[14],v=e[3],y=e[7],m=e[11],d=e[15],_=l*u-c*f,E=o*u-c*g,S=o*f-l*g,b=s*u-c*p,w=s*f-l*p,C=s*g-o*p;return n*(y*_-m*E+d*S)-i*(v*_-m*b+d*w)+r*(v*E-y*b+d*C)-a*(v*S-y*w+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],o=e[9],l=e[2],c=e[6],p=e[10];return n*(s*p-o*c)-i*(a*p-o*l)+r*(a*c-s*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],p=e[8],g=e[9],f=e[10],u=e[11],v=e[12],y=e[13],m=e[14],d=e[15],_=n*o-i*s,E=n*l-r*s,S=n*c-a*s,b=i*l-r*o,w=i*c-a*o,C=r*c-a*l,x=p*y-g*v,A=p*m-f*v,N=p*d-u*v,L=g*m-f*y,I=g*d-u*y,q=f*d-u*m,te=_*q-E*I+S*L+b*N-w*A+C*x;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/te;return e[0]=(o*q-l*I+c*L)*z,e[1]=(r*I-i*q-a*L)*z,e[2]=(y*C-m*w+d*b)*z,e[3]=(f*w-g*C-u*b)*z,e[4]=(l*N-s*q-c*A)*z,e[5]=(n*q-r*N+a*A)*z,e[6]=(m*S-v*C-d*E)*z,e[7]=(p*C-f*S+u*E)*z,e[8]=(s*I-o*N+c*x)*z,e[9]=(i*N-n*I-a*x)*z,e[10]=(v*w-y*S+d*_)*z,e[11]=(g*S-p*w-u*_)*z,e[12]=(o*A-s*L-l*x)*z,e[13]=(n*L-i*A+r*x)*z,e[14]=(y*E-v*b-m*_)*z,e[15]=(p*b-g*E+f*_)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,p=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+i,p*l-r*s,0,c*l-r*o,p*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,p=s+s,g=o+o,f=a*c,u=a*p,v=a*g,y=s*p,m=s*g,d=o*g,_=l*c,E=l*p,S=l*g,b=i.x,w=i.y,C=i.z;return r[0]=(1-(y+d))*b,r[1]=(u+S)*b,r[2]=(v-E)*b,r[3]=0,r[4]=(u-S)*w,r[5]=(1-(f+d))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(v+E)*C,r[9]=(m-_)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),l=Kr.set(r[8],r[9],r[10]).length();a<0&&(s=-s),Gn.copy(this);const c=1/s,p=1/o,g=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=p,Gn.elements[5]*=p,Gn.elements[6]*=p,Gn.elements[8]*=g,Gn.elements[9]*=g,Gn.elements[10]*=g,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,r,a,s,o=si,l=!1){const c=this.elements,p=2*a/(n-e),g=2*a/(i-r),f=(n+e)/(n-e),u=(i+r)/(i-r);let v,y;if(l)v=a/(s-a),y=s*a/(s-a);else if(o===si)v=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===Js)v=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=g,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=si,l=!1){const c=this.elements,p=2/(n-e),g=2/(i-r),f=-(n+e)/(n-e),u=-(i+r)/(i-r);let v,y;if(l)v=1/(s-a),y=s/(s-a);else if(o===si)v=-2/(s-a),y=-(s+a)/(s-a);else if(o===Js)v=-1/(s-a),y=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=g,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};tc.prototype.isMatrix4=!0;let yt=tc;const Kr=new B,Gn=new yt,rM=new B(0,0,0),aM=new B(1,1,1),Hi=new B,Po=new B,_n=new B,gm=new yt,vm=new qa;class fr{constructor(e=0,n=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],p=r[9],g=r[2],f=r[6],u=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,u),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,u),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-qe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-p,u),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class B0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sM=0;const xm=new B,Zr=new qa,mi=new yt,No=new B,os=new B,oM=new B,lM=new qa,_m=new B(1,0,0),ym=new B(0,1,0),Sm=new B(0,0,1),Mm={type:"added"},cM={type:"removed"},Jr={type:"childadded",child:null},ou={type:"childremoved",child:null};class Wt extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new B,n=new fr,i=new qa,r=new B(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Oe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?No.copy(e):No.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(os,No,this.up):mi.lookAt(No,os,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(mi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cM),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*r,a[13]+=i-a[1]*n-a[5]*i-a[9]*r,a[14]+=r-a[2]*n-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const g=l[c];a(e.shapes,g)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),p=s(e.images),g=s(e.shapes),f=s(e.skeletons),u=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new B(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Do extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const p=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],f=p.position.distanceTo(g.position),u=.02,v=.005;c.inputState.pinching&&f>u+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=Mh(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=cu(s,a,e+1/3),this.g=cu(s,a,e),this.b=cu(s,a,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Dn){function i(a){a!==void 0&&parseFloat(a)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=z0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return $e.workingToColorSpace(Zt.copy(this),e),Math.round(qe(Zt.r*255,0,255))*65536+Math.round(qe(Zt.g*255,0,255))*256+Math.round(qe(Zt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,a=Zt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const p=(o+s)/2;if(o===s)l=0,c=0;else{const g=s-o;switch(c=p<=.5?g/(s+o):g/(2-s-o),s){case i:l=(r-a)/g+(r<a?6:0);break;case r:l=(a-i)/g+2;break;case a:l=(i-r)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Dn){$e.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+n,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gi),e.getHSL(Lo);const i=Ns(Gi.h,Lo.h,n),r=Ns(Gi.s,Lo.s,n),a=Ns(Gi.l,Lo.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ze;Ze.NAMES=z0;class dM extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vn=new B,gi=new B,uu=new B,vi=new B,Qr=new B,ea=new B,Em=new B,du=new B,fu=new B,hu=new B,pu=new xt,mu=new xt,gu=new xt;class Un{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Vn.subVectors(r,n),gi.subVectors(i,n),uu.subVectors(e,n);const s=Vn.dot(Vn),o=Vn.dot(gi),l=Vn.dot(uu),c=gi.dot(gi),p=gi.dot(uu),g=s*c-o*o;if(g===0)return a.set(0,0,0),null;const f=1/g,u=(c*l-o*p)*f,v=(s*p-o*l)*f;return a.set(1-u-v,v,u)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,vi.x),l.addScaledVector(s,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,a,s){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(pu,a.x),s.addScaledVector(mu,a.y),s.addScaledVector(gu,a.z),s}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),gi.subVectors(e,n),Vn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;Qr.subVectors(r,i),ea.subVectors(a,i),du.subVectors(e,i);const l=Qr.dot(du),c=ea.dot(du);if(l<=0&&c<=0)return n.copy(i);fu.subVectors(e,r);const p=Qr.dot(fu),g=ea.dot(fu);if(p>=0&&g<=p)return n.copy(r);const f=l*g-p*c;if(f<=0&&l>=0&&p<=0)return s=l/(l-p),n.copy(i).addScaledVector(Qr,s);hu.subVectors(e,a);const u=Qr.dot(hu),v=ea.dot(hu);if(v>=0&&u<=v)return n.copy(a);const y=u*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ea,o);const m=p*v-u*g;if(m<=0&&g-p>=0&&u-v>=0)return Em.subVectors(a,r),o=(g-p)/(g-p+(u-v)),n.copy(r).addScaledVector(Em,o);const d=1/(m+y+f);return s=y*d,o=f*d,n.copy(i).addScaledVector(Qr,s).addScaledVector(ea,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Wn):Wn.fromBufferAttribute(a,s),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Uo.subVectors(this.max,ls),ta.subVectors(e.a,ls),na.subVectors(e.b,ls),ia.subVectors(e.c,ls),Vi.subVectors(na,ta),Wi.subVectors(ia,na),vr.subVectors(ta,ia);let n=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-vr.z,vr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,vr.z,0,-vr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-vr.y,vr.x,0];return!vu(n,ta,na,ia,Uo)||(n=[1,0,0,0,1,0,0,0,1],!vu(n,ta,na,ia,Uo))?!1:(Fo.crossVectors(Vi,Wi),n=[Fo.x,Fo.y,Fo.z],vu(n,ta,na,ia,Uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new B,new B,new B,new B,new B,new B,new B,new B],Wn=new B,Io=new ao,ta=new B,na=new B,ia=new B,Vi=new B,Wi=new B,vr=new B,ls=new B,Uo=new B,Fo=new B,xr=new B;function vu(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){xr.fromArray(t,a);const o=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),c=n.dot(xr),p=i.dot(xr);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const Pt=new B,Oo=new je;let fM=0;class di extends Wr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=lm,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oo.fromBufferAttribute(this,n),Oo.applyMatrix3(e),this.setXY(n,Oo.x,Oo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=la(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=la(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=la(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=la(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=la(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),a=tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class H0 extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class G0 extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class on extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const hM=new ao,cs=new B,xu=new B;class _c{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hM.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const n=cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(xu)),this.expandByPoint(cs.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pM=0;const Nn=new yt,_u=new Wt,ra=new B,yn=new ao,us=new ao,kt=new B;class zn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DS(e)?G0:H0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Oe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new on(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const a=e[r];n.setXYZ(r,a.x,a.y,a.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];yn.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _c);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];us.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(yn.min,us.min),yn.expandByPoint(kt),kt.addVectors(yn.max,us.max),yn.expandByPoint(kt)):(yn.expandByPoint(us.min),yn.expandByPoint(us.max))}yn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)kt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)kt.fromBufferAttribute(o,c),l&&(ra.fromBufferAttribute(e,c),kt.add(ra)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,a=n.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new B,l[x]=new B;const c=new B,p=new B,g=new B,f=new je,u=new je,v=new je,y=new B,m=new B;function d(x,A,N){c.fromBufferAttribute(i,x),p.fromBufferAttribute(i,A),g.fromBufferAttribute(i,N),f.fromBufferAttribute(a,x),u.fromBufferAttribute(a,A),v.fromBufferAttribute(a,N),p.sub(c),g.sub(c),u.sub(f),v.sub(f);const L=1/(u.x*v.y-v.x*u.y);isFinite(L)&&(y.copy(p).multiplyScalar(v.y).addScaledVector(g,-u.y).multiplyScalar(L),m.copy(g).multiplyScalar(u.x).addScaledVector(p,-v.x).multiplyScalar(L),o[x].add(y),o[A].add(y),o[N].add(y),l[x].add(m),l[A].add(m),l[N].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,A=_.length;x<A;++x){const N=_[x],L=N.start,I=N.count;for(let q=L,te=L+I;q<te;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const E=new B,S=new B,b=new B,w=new B;function C(x){b.fromBufferAttribute(r,x),w.copy(b);const A=o[x];E.copy(A),E.sub(b.multiplyScalar(b.dot(A))).normalize(),S.crossVectors(w,A);const L=S.dot(l[x])<0?-1:1;s.setXYZW(x,E.x,E.y,E.z,L)}for(let x=0,A=_.length;x<A;++x){const N=_[x],L=N.start,I=N.count;for(let q=L,te=L+I;q<te;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);const r=new B,a=new B,s=new B,o=new B,l=new B,c=new B,p=new B,g=new B;if(e)for(let f=0,u=e.count;f<u;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),p.subVectors(s,a),g.subVectors(r,a),p.cross(g),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(p),l.add(p),c.add(p),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=n.count;f<u;f+=3)r.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),p.subVectors(s,a),g.subVectors(r,a),p.cross(g),i.setXYZ(f+0,p.x,p.y,p.z),i.setXYZ(f+1,p.x,p.y,p.z),i.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,g=o.normalized,f=new c.constructor(l.length*p);let u=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?u=l[y]*o.data.stride+o.offset:u=l[y]*p;for(let d=0;d<p;d++)f[v++]=c[u++]}return new di(f,p,g)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let p=0,g=c.length;p<g;p++){const f=c[p],u=e(f,i);l.push(u)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let g=0,f=c.length;g<f;g++){const u=c[g];p.push(u.toJSON(e.data))}p.length>0&&(r[l]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(n))}const a=e.morphAttributes;for(const c in a){const p=[],g=a[c];for(let f=0,u=g.length;f<u;f++)p.push(g[f].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,p=s.length;c<p;c++){const g=s[c];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mM=0;class $a extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Ca,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ca&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new B,yu=new B,ko=new B,ji=new B,Su=new B,Bo=new B,Mu=new B;class V0{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yu.copy(e).add(n).multiplyScalar(.5),ko.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(yu);const a=e.distanceTo(n)*.5,s=-this.direction.dot(ko),o=ji.dot(this.direction),l=-ji.dot(ko),c=ji.lengthSq(),p=Math.abs(1-s*s);let g,f,u,v;if(p>0)if(g=s*l-o,f=s*o-l,v=a*p,g>=0)if(f>=-v)if(f<=v){const y=1/p;g*=y,f*=y,u=g*(g+s*f+2*o)+f*(s*g+f+2*l)+c}else f=a,g=Math.max(0,-(s*f+o)),u=-g*g+f*(f+2*l)+c;else f=-a,g=Math.max(0,-(s*f+o)),u=-g*g+f*(f+2*l)+c;else f<=-v?(g=Math.max(0,-(-s*a+o)),f=g>0?-a:Math.min(Math.max(-a,-l),a),u=-g*g+f*(f+2*l)+c):f<=v?(g=0,f=Math.min(Math.max(-a,-l),a),u=f*(f+2*l)+c):(g=Math.max(0,-(s*a+o)),f=g>0?a:Math.min(Math.max(-a,-l),a),u=-g*g+f*(f+2*l)+c);else f=s>0?-a:a,g=Math.max(0,-(s*f+o)),u=-g*g+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(yu).addScaledVector(ko,f),u}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const c=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),p>=0?(a=(e.min.y-f.y)*p,s=(e.max.y-f.y)*p):(a=(e.max.y-f.y)*p,s=(e.min.y-f.y)*p),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),g>=0?(o=(e.min.z-f.z)*g,l=(e.max.z-f.z)*g):(o=(e.max.z-f.z)*g,l=(e.min.z-f.z)*g),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,a){Su.subVectors(n,e),Bo.subVectors(i,e),Mu.crossVectors(Su,Bo);let s=this.direction.dot(Mu),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ji.subVectors(this.origin,e);const l=o*this.direction.dot(Bo.crossVectors(ji,Bo));if(l<0)return null;const c=o*this.direction.dot(Su.cross(ji));if(c<0||l+c>s)return null;const p=-o*ji.dot(Mu);return p<0?null:this.at(p/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class W0 extends $a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=S0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tm=new yt,_r=new V0,zo=new _c,wm=new B,Ho=new B,Go=new B,Vo=new B,Eu=new B,Wo=new B,Am=new B,jo=new B;class hi extends Wt{constructor(e=new zn,n=new W0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Wo.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const p=o[l],g=a[l];p!==0&&(Eu.fromBufferAttribute(g,e),s?Wo.addScaledVector(Eu,p):Wo.addScaledVector(Eu.sub(n),p))}n.add(Wo)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(a),_r.copy(e.ray).recast(e.near),!(zo.containsPoint(_r.origin)===!1&&(_r.intersectSphere(zo,wm)===null||_r.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Tm.copy(a).invert(),_r.copy(e.ray).applyMatrix4(Tm),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,f=a.groups,u=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,y=f.length;v<y;v++){const m=f[v],d=s[m.materialIndex],_=Math.max(m.start,u.start),E=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let S=_,b=E;S<b;S+=3){const w=o.getX(S),C=o.getX(S+1),x=o.getX(S+2);r=Xo(this,d,e,i,c,p,g,w,C,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let m=v,d=y;m<d;m+=3){const _=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);r=Xo(this,s,e,i,c,p,g,_,E,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,y=f.length;v<y;v++){const m=f[v],d=s[m.materialIndex],_=Math.max(m.start,u.start),E=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let S=_,b=E;S<b;S+=3){const w=S,C=S+1,x=S+2;r=Xo(this,d,e,i,c,p,g,w,C,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let m=v,d=y;m<d;m+=3){const _=m,E=m+1,S=m+2;r=Xo(this,s,e,i,c,p,g,_,E,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function gM(t,e,n,i,r,a,s,o){let l;if(e.side===vn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===dr,o),l===null)return null;jo.copy(o),jo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jo);return c<n.near||c>n.far?null:{distance:c,point:jo.clone(),object:t}}function Xo(t,e,n,i,r,a,s,o,l,c){t.getVertexPosition(o,Ho),t.getVertexPosition(l,Go),t.getVertexPosition(c,Vo);const p=gM(t,e,n,i,Ho,Go,Vo,Am);if(p){const g=new B;Un.getBarycoord(Am,Ho,Go,Vo,g),r&&(p.uv=Un.getInterpolatedAttribute(r,o,l,c,g,new je)),a&&(p.uv1=Un.getInterpolatedAttribute(a,o,l,c,g,new je)),s&&(p.normal=Un.getInterpolatedAttribute(s,o,l,c,g,new B),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};Un.getNormal(Ho,Go,Vo,f.normal),p.face=f,p.barycoord=g}return p}class vM extends sn{constructor(e=null,n=1,i=1,r,a,s,o,l,c=Gt,p=Gt,g,f){super(null,s,o,l,c,p,r,a,g,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=new B,xM=new B,_M=new Oe;class Er{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tu.subVectors(i,n).cross(xM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Tu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_M.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new _c,yM=new je(.5,.5),qo=new B;class Th{constructor(e=new Er,n=new Er,i=new Er,r=new Er,a=new Er,s=new Er){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],p=a[4],g=a[5],f=a[6],u=a[7],v=a[8],y=a[9],m=a[10],d=a[11],_=a[12],E=a[13],S=a[14],b=a[15];if(r[0].setComponents(c-s,u-p,d-v,b-_).normalize(),r[1].setComponents(c+s,u+p,d+v,b+_).normalize(),r[2].setComponents(c+o,u+g,d+y,b+E).normalize(),r[3].setComponents(c-o,u-g,d-y,b-E).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(c-l,u-f,d-m,b-S).normalize();else if(r[4].setComponents(c-l,u-f,d-m,b-S).normalize(),n===si)r[5].setComponents(c+l,u+f,d+m,b+S).normalize();else if(n===Js)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const n=yM.distanceTo(e.center);return yr.radius=.7071067811865476+n,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(qo.x=r.normal.x>0?e.max.x:e.min.x,qo.y=r.normal.y>0?e.max.y:e.min.y,qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class j0 extends $a{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new B,Jl=new B,bm=new yt,ds=new V0,$o=new _c,wu=new B,Cm=new B;class SM extends Wt{constructor(e=new zn,n=new j0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,a=n.count;r<a;r++)Zl.fromBufferAttribute(n,r-1),Jl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Zl.distanceTo(Jl);e.setAttribute("lineDistance",new on(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),$o.radius+=a,e.ray.intersectsSphere($o)===!1)return;bm.copy(r).invert(),ds.copy(e.ray).applyMatrix4(bm);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,p=i.index,f=i.attributes.position;if(p!==null){const u=Math.max(0,s.start),v=Math.min(p.count,s.start+s.count);for(let y=u,m=v-1;y<m;y+=c){const d=p.getX(y),_=p.getX(y+1),E=Yo(this,e,ds,l,d,_,y);E&&n.push(E)}if(this.isLineLoop){const y=p.getX(v-1),m=p.getX(u),d=Yo(this,e,ds,l,y,m,v-1);d&&n.push(d)}}else{const u=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let y=u,m=v-1;y<m;y+=c){const d=Yo(this,e,ds,l,y,y+1,y);d&&n.push(d)}if(this.isLineLoop){const y=Yo(this,e,ds,l,v-1,u,v-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Yo(t,e,n,i,r,a,s){const o=t.geometry.attributes.position;if(Zl.fromBufferAttribute(o,r),Jl.fromBufferAttribute(o,a),n.distanceSqToSegment(Zl,Jl,wu,Cm)>i)return;wu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(wu);if(!(c<e.near||c>e.far))return{distance:c,point:Cm.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}const Rm=new B,Pm=new B;class MM extends SM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,a=n.count;r<a;r+=2)Rm.fromBufferAttribute(n,r),Pm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Rm.distanceTo(Pm);e.setAttribute("lineDistance",new on(i,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class X0 extends sn{constructor(e=[],n=zr,i,r,a,s,o,l,c,p){super(e,n,i,r,a,s,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ha extends sn{constructor(e,n,i=fi,r,a,s,o=Gt,l=Gt,c,p=Ui,g=1){if(p!==Ui&&p!==Dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:g};super(f,r,a,s,o,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class EM extends Ha{constructor(e,n=fi,i=zr,r,a,s=Gt,o=Gt,l,c=Ui){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,n,i,r,a,s,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class q0 extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ya extends zn{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],p=[],g=[];let f=0,u=0;v("z","y","x",-1,-1,i,n,e,s,a,0),v("z","y","x",1,-1,i,n,-e,s,a,1),v("x","z","y",1,1,e,i,n,r,s,2),v("x","z","y",1,-1,e,i,-n,r,s,3),v("x","y","z",1,-1,e,n,i,r,a,4),v("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(p,3)),this.setAttribute("uv",new on(g,2));function v(y,m,d,_,E,S,b,w,C,x,A){const N=S/C,L=b/x,I=S/2,q=b/2,te=w/2,z=C+1,$=x+1;let H=0,F=0;const Y=new B;for(let ie=0;ie<$;ie++){const oe=ie*L-q;for(let ue=0;ue<z;ue++){const Be=ue*N-I;Y[y]=Be*_,Y[m]=oe*E,Y[d]=te,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[d]=w>0?1:-1,p.push(Y.x,Y.y,Y.z),g.push(ue/C),g.push(1-ie/x),H+=1}}for(let ie=0;ie<x;ie++)for(let oe=0;oe<C;oe++){const ue=f+oe+z*ie,Be=f+oe+z*(ie+1),Ye=f+(oe+1)+z*(ie+1),We=f+(oe+1)+z*ie;l.push(ue,Be,We),l.push(Be,Ye,We),F+=6}o.addGroup(u,F,A),u+=F,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ka extends zn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const a=[],s=[];o(r),c(i),p(),this.setAttribute("position",new on(a,3)),this.setAttribute("normal",new on(a.slice(),3)),this.setAttribute("uv",new on(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const E=new B,S=new B,b=new B;for(let w=0;w<n.length;w+=3)u(n[w+0],E),u(n[w+1],S),u(n[w+2],b),l(E,S,b,_)}function l(_,E,S,b){const w=b+1,C=[];for(let x=0;x<=w;x++){C[x]=[];const A=_.clone().lerp(S,x/w),N=E.clone().lerp(S,x/w),L=w-x;for(let I=0;I<=L;I++)I===0&&x===w?C[x][I]=A:C[x][I]=A.clone().lerp(N,I/L)}for(let x=0;x<w;x++)for(let A=0;A<2*(w-x)-1;A++){const N=Math.floor(A/2);A%2===0?(f(C[x][N+1]),f(C[x+1][N]),f(C[x][N])):(f(C[x][N+1]),f(C[x+1][N+1]),f(C[x+1][N]))}}function c(_){const E=new B;for(let S=0;S<a.length;S+=3)E.x=a[S+0],E.y=a[S+1],E.z=a[S+2],E.normalize().multiplyScalar(_),a[S+0]=E.x,a[S+1]=E.y,a[S+2]=E.z}function p(){const _=new B;for(let E=0;E<a.length;E+=3){_.x=a[E+0],_.y=a[E+1],_.z=a[E+2];const S=m(_)/2/Math.PI+.5,b=d(_)/Math.PI+.5;s.push(S,1-b)}v(),g()}function g(){for(let _=0;_<s.length;_+=6){const E=s[_+0],S=s[_+2],b=s[_+4],w=Math.max(E,S,b),C=Math.min(E,S,b);w>.9&&C<.1&&(E<.2&&(s[_+0]+=1),S<.2&&(s[_+2]+=1),b<.2&&(s[_+4]+=1))}}function f(_){a.push(_.x,_.y,_.z)}function u(_,E){const S=_*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function v(){const _=new B,E=new B,S=new B,b=new B,w=new je,C=new je,x=new je;for(let A=0,N=0;A<a.length;A+=9,N+=6){_.set(a[A+0],a[A+1],a[A+2]),E.set(a[A+3],a[A+4],a[A+5]),S.set(a[A+6],a[A+7],a[A+8]),w.set(s[N+0],s[N+1]),C.set(s[N+2],s[N+3]),x.set(s[N+4],s[N+5]),b.copy(_).add(E).add(S).divideScalar(3);const L=m(b);y(w,N+0,_,L),y(C,N+2,E,L),y(x,N+4,S,L)}}function y(_,E,S,b){b<0&&_.x===1&&(s[E]=_.x-1),S.x===0&&S.z===0&&(s[E]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.vertices,e.indices,e.radius,e.detail)}}class wh extends Ka{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new wh(e.radius,e.detail)}}const Ko=new B,Zo=new B,Au=new B,Jo=new Un;class TM extends zn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),a=Math.cos(Pa*n),s=e.getIndex(),o=e.getAttribute("position"),l=s?s.count:o.count,c=[0,0,0],p=["a","b","c"],g=new Array(3),f={},u=[];for(let v=0;v<l;v+=3){s?(c[0]=s.getX(v),c[1]=s.getX(v+1),c[2]=s.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:y,b:m,c:d}=Jo;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),Jo.getNormal(Au),g[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,g[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,g[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let _=0;_<3;_++){const E=(_+1)%3,S=g[_],b=g[E],w=Jo[p[_]],C=Jo[p[E]],x=`${S}_${b}`,A=`${b}_${S}`;A in f&&f[A]?(Au.dot(f[A].normal)<=a&&(u.push(w.x,w.y,w.z),u.push(C.x,C.y,C.z)),f[A]=null):x in f||(f[x]={index0:c[_],index1:c[E],normal:Au.clone()})}}for(const v in f)if(f[v]){const{index0:y,index1:m}=f[v];Ko.fromBufferAttribute(o,y),Zo.fromBufferAttribute(o,m),u.push(Ko.x,Ko.y,Ko.z),u.push(Zo.x,Zo.y,Zo.z)}this.setAttribute("position",new on(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ql extends Ka{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ql(e.radius,e.detail)}}class ec extends Ka{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ec(e.radius,e.detail)}}class yc extends zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,p=l+1,g=e/o,f=n/l,u=[],v=[],y=[],m=[];for(let d=0;d<p;d++){const _=d*f-s;for(let E=0;E<c;E++){const S=E*g-a;v.push(S,-_,0),y.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const E=_+c*d,S=_+c*(d+1),b=_+1+c*(d+1),w=_+1+c*d;u.push(E,S,w),u.push(S,b,w)}this.setIndex(u),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(y,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ah extends Ka{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ah(e.radius,e.detail)}}function Ga(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Nm(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Nm(r[0])){const a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();e[n][i]=a}else e[n][i]=r.slice();else e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Ga(t[n]);for(const r in i)e[r]=i[r]}return e}function Nm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function wM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const AM={clone:Ga,merge:nn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends $a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=CM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class RM extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class PM extends $a{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class NM extends $a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DM extends $a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bh extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const bu=new yt,Dm=new B,Lm=new B;class Y0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Th,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Js||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qo=new B,el=new qa,ei=new B;class K0 extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qo,el,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,el,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Qo,el,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,el,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new B,Im=new je,Um=new je;class Mn extends K0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,n){return this.getViewBounds(e,Im,Um),n.subVectors(Um,Im)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class LM extends Y0{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}}class IM extends bh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new LM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ch extends K0{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UM extends Y0{constructor(){super(new Ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fm extends bh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new UM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class FM extends bh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const aa=-90,sa=1;class OM extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(aa,sa,e,n);r.layers=this.layers,this.add(r);const a=new Mn(aa,sa,e,n);a.layers=this.layers,this.add(a);const s=new Mn(aa,sa,e,n);s.layers=this.layers,this.add(s);const o=new Mn(aa,sa,e,n);o.layers=this.layers,this.add(o);const l=new Mn(aa,sa,e,n);l.layers=this.layers,this.add(l);const c=new Mn(aa,sa,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,p]=this.children,g=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(g,f,u),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class kM extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Lh=class Lh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const a=this.elements;return a[0]=e,a[2]=n,a[1]=i,a[3]=r,this}};Lh.prototype.isMatrix2=!0;let Om=Lh;function km(t,e,n,i){const r=BM(i);switch(n){case I0:return t*e;case F0:return t*e/r.components*r.byteLength;case vh:return t*e/r.components*r.byteLength;case Hr:return t*e*2/r.components*r.byteLength;case xh:return t*e*2/r.components*r.byteLength;case U0:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case _h:return t*e*4/r.components*r.byteLength;case gl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xl:case _l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:case Gd:return Math.max(t,16)*Math.max(e,8)/4;case Bd:case Hd:return Math.max(t,8)*Math.max(e,8)/2;case Vd:case Wd:case Xd:case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jd:case Xl:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ql:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BM(t){switch(t){case En:case P0:return{byteLength:1,components:1};case Ks:case N0:case Ii:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case fi:case ph:case ai:return{byteLength:4,components:1};case D0:case L0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Z0(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function zM(t){const e=new WeakMap;function n(o,l){const c=o.array,p=o.usage,g=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,p),o.onUploadCallback();let u;if(c instanceof Float32Array)u=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=t.HALF_FLOAT:u=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=t.SHORT;else if(c instanceof Uint32Array)u=t.UNSIGNED_INT;else if(c instanceof Int32Array)u=t.INT;else if(c instanceof Int8Array)u=t.BYTE;else if(c instanceof Uint8Array)u=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function i(o,l,c){const p=l.array,g=l.updateRanges;if(t.bindBuffer(c,o),g.length===0)t.bufferSubData(c,0,p);else{g.sort((u,v)=>u.start-v.start);let f=0;for(let u=1;u<g.length;u++){const v=g[f],y=g[u];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,g[f]=y)}g.length=f+1;for(let u=0,v=g.length;u<v;u++){const y=g[u];t.bufferSubData(c,y.start*p.BYTES_PER_ELEMENT,p,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var HM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
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
#endif`,VM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
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
#endif`,$M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YM=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,KM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eE=`#ifdef USE_IRIDESCENCE
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
#endif`,tE=`#ifdef USE_BUMPMAP
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
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uE=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,dE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fE=`vec3 transformedNormal = objectNormal;
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
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vE="gl_FragColor = linearToOutputTexel( gl_FragColor );",xE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
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
#endif`,ME=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CE=`#ifdef USE_GRADIENTMAP
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
}`,RE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DE=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,LE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,BE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,WE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZE=`#if defined( USE_POINTS_UV )
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
#endif`,JE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
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
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u1=`#ifdef USE_NORMALMAP
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
#endif`,d1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,v1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,A1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,R1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G1=`uniform sampler2D t2D;
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`#include <common>
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
}`,$1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y1=`#define DISTANCE
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
}`,K1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`uniform float scale;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#define LAMBERT
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
}`,rT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,aT=`#define MATCAP
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
}`,sT=`#define MATCAP
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
}`,oT=`#define NORMAL
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
}`,lT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cT=`#define PHONG
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
}`,uT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,dT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,hT=`#define TOON
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
}`,pT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,mT=`uniform float size;
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
}`,gT=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,xT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,_T=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,yT=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:HM,alphahash_pars_fragment:GM,alphamap_fragment:VM,alphamap_pars_fragment:WM,alphatest_fragment:jM,alphatest_pars_fragment:XM,aomap_fragment:qM,aomap_pars_fragment:$M,batching_pars_vertex:YM,batching_vertex:KM,begin_vertex:ZM,beginnormal_vertex:JM,bsdfs:QM,iridescence_fragment:eE,bumpmap_pars_fragment:tE,clipping_planes_fragment:nE,clipping_planes_pars_fragment:iE,clipping_planes_pars_vertex:rE,clipping_planes_vertex:aE,color_fragment:sE,color_pars_fragment:oE,color_pars_vertex:lE,color_vertex:cE,common:uE,cube_uv_reflection_fragment:dE,defaultnormal_vertex:fE,displacementmap_pars_vertex:hE,displacementmap_vertex:pE,emissivemap_fragment:mE,emissivemap_pars_fragment:gE,colorspace_fragment:vE,colorspace_pars_fragment:xE,envmap_fragment:_E,envmap_common_pars_fragment:yE,envmap_pars_fragment:SE,envmap_pars_vertex:ME,envmap_physical_pars_fragment:LE,envmap_vertex:EE,fog_vertex:TE,fog_pars_vertex:wE,fog_fragment:AE,fog_pars_fragment:bE,gradientmap_pars_fragment:CE,lightmap_pars_fragment:RE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:NE,lights_pars_begin:DE,lights_toon_fragment:IE,lights_toon_pars_fragment:UE,lights_phong_fragment:FE,lights_phong_pars_fragment:OE,lights_physical_fragment:kE,lights_physical_pars_fragment:BE,lights_fragment_begin:zE,lights_fragment_maps:HE,lights_fragment_end:GE,lightprobes_pars_fragment:VE,logdepthbuf_fragment:WE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:XE,logdepthbuf_vertex:qE,map_fragment:$E,map_pars_fragment:YE,map_particle_fragment:KE,map_particle_pars_fragment:ZE,metalnessmap_fragment:JE,metalnessmap_pars_fragment:QE,morphinstance_vertex:e1,morphcolor_vertex:t1,morphnormal_vertex:n1,morphtarget_pars_vertex:i1,morphtarget_vertex:r1,normal_fragment_begin:a1,normal_fragment_maps:s1,normal_pars_fragment:o1,normal_pars_vertex:l1,normal_vertex:c1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:d1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:p1,opaque_fragment:m1,packing:g1,premultiplied_alpha_fragment:v1,project_vertex:x1,dithering_fragment:_1,dithering_pars_fragment:y1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:E1,shadowmap_pars_vertex:T1,shadowmap_vertex:w1,shadowmask_pars_fragment:A1,skinbase_vertex:b1,skinning_pars_vertex:C1,skinning_vertex:R1,skinnormal_vertex:P1,specularmap_fragment:N1,specularmap_pars_fragment:D1,tonemapping_fragment:L1,tonemapping_pars_fragment:I1,transmission_fragment:U1,transmission_pars_fragment:F1,uv_pars_fragment:O1,uv_pars_vertex:k1,uv_vertex:B1,worldpos_vertex:z1,background_vert:H1,background_frag:G1,backgroundCube_vert:V1,backgroundCube_frag:W1,cube_vert:j1,cube_frag:X1,depth_vert:q1,depth_frag:$1,distance_vert:Y1,distance_frag:K1,equirect_vert:Z1,equirect_frag:J1,linedashed_vert:Q1,linedashed_frag:eT,meshbasic_vert:tT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:rT,meshmatcap_vert:aT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:dT,meshphysical_frag:fT,meshtoon_vert:hT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:vT,shadow_frag:xT,sprite_vert:_T,sprite_frag:yT},_e={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ii={basic:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:nn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:nn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:nn([_e.points,_e.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:nn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:nn([_e.common,_e.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:nn([_e.sprite,_e.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:nn([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:nn([_e.lights,_e.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ii.physical={uniforms:nn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const tl={r:0,b:0,g:0},ST=new yt,J0=new Oe;J0.set(-1,0,0,0,1,0,0,0,1);function MT(t,e,n,i,r,a){const s=new Ze(0);let o=r===!0?0:1,l,c,p=null,g=0,f=null;function u(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){const S=_.backgroundBlurriness>0;E=e.get(E,S)}return E}function v(_){let E=!1;const S=u(_);S===null?m(s,o):S&&S.isColor&&(m(S,1),E=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(_,E){const S=u(E);S&&(S.isCubeTexture||S.mapping===xc)?(c===void 0&&(c=new hi(new Ya(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ga(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(J0),c.material.toneMapped=$e.getTransfer(S.colorSpace)!==rt,(p!==S||g!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,p=S,g=S.version,f=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new hi(new yc(2,2),new pi({name:"BackgroundMaterial",uniforms:Ga(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||g!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,p=S,g=S.version,f=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,E){_.getRGB(tl,$0(t)),n.buffers.color.setClear(tl.r,tl.g,tl.b,E,a)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(_,E=1){s.set(_),o=E,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(s,o)},render:v,addToRenderList:y,dispose:d}}function ET(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let a=r,s=!1;function o(L,I,q,te,z){let $=!1;const H=g(L,te,q,I);a!==H&&(a=H,c(a.object)),$=u(L,te,q,z),$&&v(L,te,q,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,S(L,I,q,te),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function p(L){return t.deleteVertexArray(L)}function g(L,I,q,te){const z=te.wireframe===!0;let $=i[I.id];$===void 0&&($={},i[I.id]=$);const H=L.isInstancedMesh===!0?L.id:0;let F=$[H];F===void 0&&(F={},$[H]=F);let Y=F[q.id];Y===void 0&&(Y={},F[q.id]=Y);let ie=Y[z];return ie===void 0&&(ie=f(l()),Y[z]=ie),ie}function f(L){const I=[],q=[],te=[];for(let z=0;z<n;z++)I[z]=0,q[z]=0,te[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:q,attributeDivisors:te,object:L,attributes:{},index:null}}function u(L,I,q,te){const z=a.attributes,$=I.attributes;let H=0;const F=q.getAttributes();for(const Y in F)if(F[Y].location>=0){const oe=z[Y];let ue=$[Y];if(ue===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;H++}return a.attributesNum!==H||a.index!==te}function v(L,I,q,te){const z={},$=I.attributes;let H=0;const F=q.getAttributes();for(const Y in F)if(F[Y].location>=0){let oe=$[Y];oe===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor));const ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),z[Y]=ue,H++}a.attributes=z,a.attributesNum=H,a.index=te}function y(){const L=a.newAttributes;for(let I=0,q=L.length;I<q;I++)L[I]=0}function m(L){d(L,0)}function d(L,I){const q=a.newAttributes,te=a.enabledAttributes,z=a.attributeDivisors;q[L]=1,te[L]===0&&(t.enableVertexAttribArray(L),te[L]=1),z[L]!==I&&(t.vertexAttribDivisor(L,I),z[L]=I)}function _(){const L=a.newAttributes,I=a.enabledAttributes;for(let q=0,te=I.length;q<te;q++)I[q]!==L[q]&&(t.disableVertexAttribArray(q),I[q]=0)}function E(L,I,q,te,z,$,H){H===!0?t.vertexAttribIPointer(L,I,q,z,$):t.vertexAttribPointer(L,I,q,te,z,$)}function S(L,I,q,te){y();const z=te.attributes,$=q.getAttributes(),H=I.defaultAttributeValues;for(const F in $){const Y=$[F];if(Y.location>=0){let ie=z[F];if(ie===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),ie!==void 0){const oe=ie.normalized,ue=ie.itemSize,Be=e.get(ie);if(Be===void 0)continue;const Ye=Be.buffer,We=Be.type,ee=Be.bytesPerElement,he=We===t.INT||We===t.UNSIGNED_INT||ie.gpuType===ph;if(ie.isInterleavedBufferAttribute){const le=ie.data,Le=le.stride,pe=ie.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Y.locationSize;Ie++)d(Y.location+Ie,le.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)m(Y.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let Ie=0;Ie<Y.locationSize;Ie++)E(Y.location+Ie,ue/Y.locationSize,We,oe,Le*ee,(pe+ue/Y.locationSize*Ie)*ee,he)}else{if(ie.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)d(Y.location+le,ie.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let le=0;le<Y.locationSize;le++)m(Y.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let le=0;le<Y.locationSize;le++)E(Y.location+le,ue/Y.locationSize,We,oe,ue*ee,ue/Y.locationSize*le*ee,he)}}else if(H!==void 0){const oe=H[F];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(Y.location,oe);break;case 3:t.vertexAttrib3fv(Y.location,oe);break;case 4:t.vertexAttrib4fv(Y.location,oe);break;default:t.vertexAttrib1fv(Y.location,oe)}}}}_()}function b(){A();for(const L in i){const I=i[L];for(const q in I){const te=I[q];for(const z in te){const $=te[z];for(const H in $)p($[H].object),delete $[H];delete te[z]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const I=i[L.id];for(const q in I){const te=I[q];for(const z in te){const $=te[z];for(const H in $)p($[H].object),delete $[H];delete te[z]}}delete i[L.id]}function C(L){for(const I in i){const q=i[I];for(const te in q){const z=q[te];if(z[L.id]===void 0)continue;const $=z[L.id];for(const H in $)p($[H].object),delete $[H];delete z[L.id]}}}function x(L){for(const I in i){const q=i[I],te=L.isInstancedMesh===!0?L.id:0,z=q[te];if(z!==void 0){for(const $ in z){const H=z[$];for(const F in H)p(H[F].object),delete H[F];delete z[$]}delete q[te],Object.keys(q).length===0&&delete i[I]}}}function A(){N(),s=!0,a!==r&&(a=r,c(a.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function TT(t,e,n){let i;function r(l){i=l}function a(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,p){p!==0&&(t.drawArraysInstanced(i,l,c,p),n.update(c,i,p))}function o(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let f=0;for(let u=0;u<p;u++)f+=c[u];n.update(f,i,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function wT(t,e,n,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==$n&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==En&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ai&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(Ue("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const g=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:S,maxSamples:b,samples:w}}function AT(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new Er,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){const u=g.length!==0||f||i!==0||r;return r=f,i=g.length,u},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,f){n=p(g,f,0)},this.setState=function(g,f,u){const v=g.clippingPlanes,y=g.clipIntersection,m=g.clipShadows,d=t.get(g);if(!r||v===null||v.length===0||a&&!m)a?p(null):c();else{const _=a?0:i,E=_*4;let S=d.clippingState||null;l.value=S,S=p(v,f,E,u);for(let b=0;b!==E;++b)S[b]=n[b];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,f,u,v){const y=g!==null?g.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const d=u+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=u;E!==y;++E,S+=4)s.copy(g[E]).applyMatrix4(_,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const er=4,Bm=[.125,.215,.35,.446,.526,.582],Ar=20,bT=256,fs=new Ch,zm=new Ze;let Cu=null,Ru=0,Pu=0,Nu=!1;const CT=new B;class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,a={}){const{size:s=256,position:o=CT}=a;Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Ru,Pu),this._renderer.xr.enabled=Nu,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zr||e.mapping===za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ii,format:$n,colorSpace:$l,depthBuffer:!1},r=Gm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gm(e,n,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RT(a)),this._blurMaterial=NT(a,e,n),this._ggxMaterial=PT(a,e,n)}return r}_compileMaterial(e){const n=new hi(new zn,e);this._renderer.compile(n,fs)}_sceneToCubeUV(e,n,i,r,a){const l=new Mn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,f=g.autoClear,u=g.toneMapping;g.getClearColor(zm),g.toneMapping=ci,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hi(new Ya,new W0({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let d=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,d=!0):(m.color.copy(zm),d=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+p[E],a.y,a.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+p[E],a.z)):(l.up.set(0,c[E],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+p[E]));const b=this._cubeSize;oa(r,S*b,E>2?b:0,b,b),g.setRenderTarget(r),d&&g.render(y,l),g.render(e,l)}g.toneMapping=u,g.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zr||e.mapping===za;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;oa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,fs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),g=Math.sqrt(c*c-p*p),f=0+c*1.25,u=g*f,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-er?i-v+er:0),d=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=v-n,oa(a,m,d,3*y,2*y),r.setRenderTarget(a),r.render(o,fs),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,oa(e,m,d,3*y,2*y),r.setRenderTarget(e),r.render(o,fs)}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[r];g.material=c;const f=c.uniforms,u=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*u):2*Math.PI/(2*Ar-1),y=a/v,m=isFinite(a)?1+Math.floor(p*y):Ar;m>Ar&&Ue(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const d=[];let _=0;for(let C=0;C<Ar;++C){const x=C/y,A=Math.exp(-x*x/2);d.push(A),C===0?_+=A:C<m&&(_+=2*A)}for(let C=0;C<d.length;C++)d[C]=d[C]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-i;const S=this._sizeLods[r],b=3*S*(r>E-er?r-E+er:0),w=4*(this._cubeSize-S);oa(n,b,w,3*S,2*S),l.setRenderTarget(n),l.render(g,fs)}}function RT(t){const e=[],n=[],i=[];let r=t;const a=t-er+1+Bm.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>t-er?l=Bm[s-t+er-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),p=-c,g=1+c,f=[p,p,g,p,g,g,p,p,g,g,p,g],u=6,v=6,y=3,m=2,d=1,_=new Float32Array(y*v*u),E=new Float32Array(m*v*u),S=new Float32Array(d*v*u);for(let w=0;w<u;w++){const C=w%3*2/3-1,x=w>2?0:-1,A=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];_.set(A,y*v*w),E.set(f,m*v*w);const N=[w,w,w,w,w,w];S.set(N,d*v*w)}const b=new zn;b.setAttribute("position",new di(_,y)),b.setAttribute("uv",new di(E,m)),b.setAttribute("faceIndex",new di(S,d)),i.push(new hi(b,null)),r>er&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Gm(t,e,n){const i=new ui(t,e,n);return i.texture.mapping=xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PT(t,e,n){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function NT(t,e,n){const i=new Float32Array(Ar),r=new B(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Vm(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Wm(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}class Q0 extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new X0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ya(5,5,5),a=new pi({name:"CubemapFromEquirect",uniforms:Ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ci});a.uniforms.tEquirect.value=n;const s=new hi(r,a),o=n.minFilter;return n.minFilter===Nr&&(n.minFilter=Qt),new OM(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}function DT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,u=!1){return f==null?null:u?s(f):a(f)}function a(f){if(f&&f.isTexture){const u=f.mapping;if(u===eu||u===tu)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const y=new Q0(v.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const u=f.mapping,v=u===eu||u===tu,y=u===zr||u===za;if(v||y){let m=n.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Hm(t)),m=v?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const _=f.image;return v&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new Hm(t)),m=v?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",p),m.texture):null}}}return f}function o(f,u){return u===eu?f.mapping=zr:u===tu&&(f.mapping=za),f}function l(f){let u=0;const v=6;for(let y=0;y<v;y++)f[y]!==void 0&&u++;return u===v}function c(f){const u=f.target;u.removeEventListener("dispose",c);const v=e.get(u);v!==void 0&&(e.delete(u),v.dispose())}function p(f){const u=f.target;u.removeEventListener("dispose",p);const v=n.get(u);v!==void 0&&(n.delete(u),v.dispose())}function g(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:g}}function LT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ra("WebGLRenderer: "+i+" extension not supported."),r}}}function IT(t,e,n,i){const r={},a=new WeakMap;function s(g){const f=g.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",s),delete r[f.id];const u=a.get(f);u&&(e.remove(u),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(g,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(g){const f=g.attributes;for(const u in f)e.update(f[u],t.ARRAY_BUFFER)}function c(g){const f=[],u=g.index,v=g.attributes.position;let y=0;if(v===void 0)return;if(u!==null){const _=u.array;y=u.version;for(let E=0,S=_.length;E<S;E+=3){const b=_[E+0],w=_[E+1],C=_[E+2];f.push(b,w,w,C,C,b)}}else{const _=v.array;y=v.version;for(let E=0,S=_.length/3-1;E<S;E+=3){const b=E+0,w=E+1,C=E+2;f.push(b,w,w,C,C,b)}}const m=new(v.count>=65535?G0:H0)(f,1);m.version=y;const d=a.get(g);d&&e.remove(d),a.set(g,m)}function p(g){const f=a.get(g);if(f){const u=g.index;u!==null&&f.version<u.version&&c(g)}else c(g);return a.get(g)}return{get:o,update:l,getWireframeAttribute:p}}function UT(t,e,n){let i;function r(g){i=g}let a,s;function o(g){a=g.type,s=g.bytesPerElement}function l(g,f){t.drawElements(i,f,a,g*s),n.update(f,i,1)}function c(g,f,u){u!==0&&(t.drawElementsInstanced(i,f,a,g*s,u),n.update(f,i,u))}function p(g,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,g,0,u);let y=0;for(let m=0;m<u;m++)y+=f[m];n.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function FT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:Qe("WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function OT(t,e,n){const i=new WeakMap,r=new xt;function a(s,o,l){const c=s.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=p!==void 0?p.length:0;let f=i.get(o);if(f===void 0||f.count!==g){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var u=N;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*w*4*g),x=new k0(C,b,w,g);x.type=ai,x.needsUpdate=!0;const A=S*4;for(let L=0;L<g;L++){const I=d[L],q=_[L],te=E[L],z=b*w*4*L;for(let $=0;$<I.count;$++){const H=$*A;v===!0&&(r.fromBufferAttribute(I,$),C[z+H+0]=r.x,C[z+H+1]=r.y,C[z+H+2]=r.z,C[z+H+3]=0),y===!0&&(r.fromBufferAttribute(q,$),C[z+H+4]=r.x,C[z+H+5]=r.y,C[z+H+6]=r.z,C[z+H+7]=0),m===!0&&(r.fromBufferAttribute(te,$),C[z+H+8]=r.x,C[z+H+9]=r.y,C[z+H+10]=r.z,C[z+H+11]=te.itemSize===4?r.w:1)}}f={count:g,texture:x,size:new je(b,w)},i.set(o,f),o.addEventListener("dispose",N)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:a}}function kT(t,e,n,i,r){let a=new WeakMap;function s(c){const p=r.render.frame,g=c.geometry,f=e.get(c,g);if(a.get(f)!==p&&(e.update(f),a.set(f,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==p&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),a.set(c,p))),c.isSkinnedMesh){const u=c.skeleton;a.get(u)!==p&&(u.update(),a.set(u,p))}return f}function o(){a=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:s,dispose:o}}const BT={[M0]:"LINEAR_TONE_MAPPING",[E0]:"REINHARD_TONE_MAPPING",[T0]:"CINEON_TONE_MAPPING",[w0]:"ACES_FILMIC_TONE_MAPPING",[b0]:"AGX_TONE_MAPPING",[C0]:"NEUTRAL_TONE_MAPPING",[A0]:"CUSTOM_TONE_MAPPING"};function zT(t,e,n,i,r,a){const s=new ui(e,n,{type:t,depthBuffer:r,stencilBuffer:a,samples:i?4:0,depthTexture:r?new Ha(e,n):void 0}),o=new ui(e,n,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new zn;l.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new on([0,2,0,0,2,0],2));const c=new RM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new hi(l,c),g=new Ch(-1,1,1,-1,0,1);let f=null,u=null,v=!1,y,m=null,d=[],_=!1;this.setSize=function(E,S){s.setSize(E,S),o.setSize(E,S);for(let b=0;b<d.length;b++){const w=d[b];w.setSize&&w.setSize(E,S)}},this.setEffects=function(E){d=E,_=d.length>0&&d[0].isRenderPass===!0;const S=s.width,b=s.height;for(let w=0;w<d.length;w++){const C=d[w];C.setSize&&C.setSize(S,b)}},this.begin=function(E,S){if(v||E.toneMapping===ci&&d.length===0)return!1;if(m=S,S!==null){const b=S.width,w=S.height;(s.width!==b||s.height!==w)&&this.setSize(b,w)}return _===!1&&E.setRenderTarget(s),y=E.toneMapping,E.toneMapping=ci,!0},this.hasRenderPass=function(){return _},this.end=function(E,S){E.toneMapping=y,v=!0;let b=s,w=o;for(let C=0;C<d.length;C++){const x=d[C];if(x.enabled!==!1&&(x.render(E,w,b,S),x.needsSwap!==!1)){const A=b;b=w,w=A}}if(f!==E.outputColorSpace||u!==E.toneMapping){f=E.outputColorSpace,u=E.toneMapping,c.defines={},$e.getTransfer(f)===rt&&(c.defines.SRGB_TRANSFER="");const C=BT[u];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(m),E.render(p,g),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),l.dispose(),c.dispose()}}const ex=new sn,vf=new Ha(1,1),tx=new k0,nx=new iM,ix=new X0,jm=[],Xm=[],qm=new Float32Array(16),$m=new Float32Array(9),Ym=new Float32Array(4);function Za(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=jm[r];if(a===void 0&&(a=new Float32Array(r),jm[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=Xm[e];n===void 0&&(n=new Int32Array(e),Xm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function jT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Ym.set(i),t.uniformMatrix2fv(this.addr,!1,Ym),Ot(n,i)}}function XT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;$m.set(i),t.uniformMatrix3fv(this.addr,!1,$m),Ot(n,i)}}function qT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;qm.set(i),t.uniformMatrix4fv(this.addr,!1,qm),Ot(n,i)}}function $T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function JT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let a;this.type===t.SAMPLER_2D_SHADOW?(vf.compareFunction=n.isReversedDepthBuffer()?Sh:yh,a=vf):a=ex,n.setTexture2D(e||a,r)}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nx,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ix,r)}function aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tx,r)}function sw(t){switch(t){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return WT;case 35674:return jT;case 35675:return XT;case 35676:return qT;case 5124:case 35670:return $T;case 35667:case 35671:return YT;case 35668:case 35672:return KT;case 35669:case 35673:return ZT;case 5125:return JT;case 36294:return QT;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return aw}}function ow(t,e){t.uniform1fv(this.addr,e)}function lw(t,e){const n=Za(e,this.size,2);t.uniform2fv(this.addr,n)}function cw(t,e){const n=Za(e,this.size,3);t.uniform3fv(this.addr,n)}function uw(t,e){const n=Za(e,this.size,4);t.uniform4fv(this.addr,n)}function dw(t,e){const n=Za(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fw(t,e){const n=Za(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hw(t,e){const n=Za(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pw(t,e){t.uniform1iv(this.addr,e)}function mw(t,e){t.uniform2iv(this.addr,e)}function gw(t,e){t.uniform3iv(this.addr,e)}function vw(t,e){t.uniform4iv(this.addr,e)}function xw(t,e){t.uniform1uiv(this.addr,e)}function _w(t,e){t.uniform2uiv(this.addr,e)}function yw(t,e){t.uniform3uiv(this.addr,e)}function Sw(t,e){t.uniform4uiv(this.addr,e)}function Mw(t,e,n){const i=this.cache,r=e.length,a=Mc(n,r);Ft(i,a)||(t.uniform1iv(this.addr,a),Ot(i,a));let s;this.type===t.SAMPLER_2D_SHADOW?s=vf:s=ex;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||s,a[o])}function Ew(t,e,n){const i=this.cache,r=e.length,a=Mc(n,r);Ft(i,a)||(t.uniform1iv(this.addr,a),Ot(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||nx,a[s])}function Tw(t,e,n){const i=this.cache,r=e.length,a=Mc(n,r);Ft(i,a)||(t.uniform1iv(this.addr,a),Ot(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||ix,a[s])}function ww(t,e,n){const i=this.cache,r=e.length,a=Mc(n,r);Ft(i,a)||(t.uniform1iv(this.addr,a),Ot(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||tx,a[s])}function Aw(t){switch(t){case 5126:return ow;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return dw;case 35675:return fw;case 35676:return hw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return xw;case 36294:return _w;case 36295:return yw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return ww}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sw(n.type)}}class Cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Aw(n.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Km(t,e){t.seq.push(e),t.map[e.id]=e}function Pw(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const a=Du.exec(i),s=Du.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Km(n,c===void 0?new bw(o,t,e):new Cw(o,t,e));break}else{let g=n.map[o];g===void 0&&(g=new Rw(o),Km(n,g)),n=g}}}class yl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);Pw(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Nw=37297;let Dw=0;function Lw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Jm=new Oe;function Iw(t){$e._getMatrix(Jm,$e.workingColorSpace,t);const e=`mat3( ${Jm.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Yl:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Qm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),a=(t.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+Lw(t.getShaderSource(e),o)}else return a}function Uw(t,e){const n=Iw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Fw={[M0]:"Linear",[E0]:"Reinhard",[T0]:"Cineon",[w0]:"ACESFilmic",[b0]:"AgX",[C0]:"Neutral",[A0]:"Custom"};function Ow(t,e){const n=Fw[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nl=new B;function kw(){$e.getLuminanceCoefficients(nl);const t=nl.x.toFixed(4),e=nl.y.toFixed(4),n=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function zw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Hw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function ys(t){return t!==""}function eg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(t){return t.replace(Gw,Ww)}const Vw=new Map;function Ww(t,e){let n=He[e];if(n===void 0){const i=Vw.get(e);if(i!==void 0)n=He[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xf(n)}const jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(t){return t.replace(jw,Xw)}function Xw(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ig(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const qw={[ml]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function $w(t){return qw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yw={[zr]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE",[xc]:"ENVMAP_TYPE_CUBE_UV"};function Kw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Yw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zw={[za]:"ENVMAP_MODE_REFRACTION"};function Jw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Zw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qw={[S0]:"ENVMAP_BLENDING_MULTIPLY",[SS]:"ENVMAP_BLENDING_MIX",[MS]:"ENVMAP_BLENDING_ADD"};function eA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Qw[t.combine]||"ENVMAP_BLENDING_NONE"}function tA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nA(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=$w(n),c=Kw(n),p=Jw(n),g=eA(n),f=tA(n),u=Bw(n),v=zw(a),y=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ys).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ys).join(`
`),d.length>0&&(d+=`
`)):(m=[ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),d=[ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ci?"#define TONE_MAPPING":"",n.toneMapping!==ci?He.tonemapping_pars_fragment:"",n.toneMapping!==ci?Ow("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Uw("linearToOutputTexel",n.outputColorSpace),kw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ys).join(`
`)),s=xf(s),s=eg(s,n),s=tg(s,n),o=xf(o),o=eg(o,n),o=tg(o,n),s=ng(s),o=ng(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=_+m+s,S=_+d+o,b=Zm(r,r.VERTEX_SHADER,E),w=Zm(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(L){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y)||"",q=r.getShaderInfoLog(b)||"",te=r.getShaderInfoLog(w)||"",z=I.trim(),$=q.trim(),H=te.trim();let F=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,w);else{const ie=Qm(r,b,"vertex"),oe=Qm(r,w,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+ie+`
`+oe)}else z!==""?Ue("WebGLProgram: Program Info Log:",z):($===""||H==="")&&(Y=!1);Y&&(L.diagnostics={runnable:F,programLog:z,vertexShader:{log:$,prefix:m},fragmentShader:{log:H,prefix:d}})}r.deleteShader(b),r.deleteShader(w),x=new yl(r,y),A=Hw(r,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(y,Nw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=w,this}let iA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aA(e),n.set(e,i)),i}}class aA{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}}function sA(t){return t===Hr||t===Xl||t===ql}function oA(t,e,n,i,r,a){const s=new B0,o=new rA,l=new Set,c=[],p=new Map,g=i.logarithmicDepthBuffer;let f=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,A,N,L,I,q){const te=L.fog,z=I.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||$,H),Y=F&&F.mapping===xc?F.image.height:null,ie=u[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=oe!==void 0?oe.length:0;let Be=0;z.morphAttributes.position!==void 0&&(Be=1),z.morphAttributes.normal!==void 0&&(Be=2),z.morphAttributes.color!==void 0&&(Be=3);let Ye,We,ee,he;if(ie){const we=ii[ie];Ye=we.vertexShader,We=we.fragmentShader}else{Ye=x.vertexShader,We=x.fragmentShader;const we=o.getVertexShaderStage(x),Re=o.getFragmentShaderStage(x);o.update(x,we,Re),ee=we.id,he=Re.id}const le=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),pe=I.isInstancedMesh===!0,Ie=I.isBatchedMesh===!0,mt=!!x.map,Ge=!!x.matcap,it=!!F,Ke=!!x.aoMap,ze=!!x.lightMap,Mt=!!x.bumpMap&&x.wireframe===!1,wt=!!x.normalMap,Rt=!!x.displacementMap,Lt=!!x.emissiveMap,ht=!!x.metalnessMap,gt=!!x.roughnessMap,U=x.anisotropy>0,Xt=x.clearcoat>0,nt=x.dispersion>0,P=x.iridescence>0,M=x.sheen>0,k=x.transmission>0,W=U&&!!x.anisotropyMap,Z=Xt&&!!x.clearcoatMap,fe=Xt&&!!x.clearcoatNormalMap,ve=Xt&&!!x.clearcoatRoughnessMap,Q=P&&!!x.iridescenceMap,re=P&&!!x.iridescenceThicknessMap,me=M&&!!x.sheenColorMap,be=M&&!!x.sheenRoughnessMap,xe=!!x.specularMap,ge=!!x.specularColorMap,R=!!x.specularIntensityMap,K=k&&!!x.transmissionMap,se=k&&!!x.thicknessMap,D=!!x.gradientMap,J=!!x.alphaMap,X=x.alphaTest>0,ae=!!x.alphaHash,de=!!x.extensions;let ne=ci;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Ae={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:We,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&I._colorsTexture!==null,instancing:pe,instancingColor:pe&&I.instanceColor!==null,instancingMorph:pe&&I.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:mt,matcap:Ge,envMap:it,envMapMode:it&&F.mapping,envMapCubeUVHeight:Y,aoMap:Ke,lightMap:ze,bumpMap:Mt,normalMap:wt,displacementMap:Rt,emissiveMap:Lt,normalMapObjectSpace:wt&&x.normalMapType===wS,normalMapTangentSpace:wt&&x.normalMapType===gf,packedNormalMap:wt&&x.normalMapType===gf&&sA(x.normalMap.format),metalnessMap:ht,roughnessMap:gt,anisotropy:U,anisotropyMap:W,clearcoat:Xt,clearcoatMap:Z,clearcoatNormalMap:fe,clearcoatRoughnessMap:ve,dispersion:nt,iridescence:P,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:M,sheenColorMap:me,sheenRoughnessMap:be,specularMap:xe,specularColorMap:ge,specularIntensityMap:R,transmission:k,transmissionMap:K,thicknessMap:se,gradientMap:D,opaque:x.transparent===!1&&x.blending===Ca&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:X,alphaHash:ae,combine:x.combine,mapUv:mt&&v(x.map.channel),aoMapUv:Ke&&v(x.aoMap.channel),lightMapUv:ze&&v(x.lightMap.channel),bumpMapUv:Mt&&v(x.bumpMap.channel),normalMapUv:wt&&v(x.normalMap.channel),displacementMapUv:Rt&&v(x.displacementMap.channel),emissiveMapUv:Lt&&v(x.emissiveMap.channel),metalnessMapUv:ht&&v(x.metalnessMap.channel),roughnessMapUv:gt&&v(x.roughnessMap.channel),anisotropyMapUv:W&&v(x.anisotropyMap.channel),clearcoatMapUv:Z&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(x.sheenRoughnessMap.channel),specularMapUv:xe&&v(x.specularMap.channel),specularColorMapUv:ge&&v(x.specularColorMap.channel),specularIntensityMapUv:R&&v(x.specularIntensityMap.channel),transmissionMapUv:K&&v(x.transmissionMap.channel),thicknessMapUv:se&&v(x.thicknessMap.channel),alphaMapUv:J&&v(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(wt||U),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(mt||J),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&wt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Le,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Be,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:mt&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ei,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)A.push(N),A.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(d(A,x),_(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function d(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function E(x){const A=u[x.type];let N;if(A){const L=ii[A];N=AM.clone(L.uniforms)}else N=x.uniforms;return N}function S(x,A){let N=p.get(A);return N!==void 0?++N.usedTimes:(N=new nA(t,A,x,r),c.push(N),p.set(A,N)),N}function b(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),p.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:C}}function lA(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function r(s,o,l){t.get(s)[o]=l}function a(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:a}}function cA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function rg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ag(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,v,y,m,d){let _=t[e];return _===void 0?(_={id:f.id,object:f,geometry:u,material:v,materialVariant:s(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:d},t[e]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=v,_.materialVariant=s(f),_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function l(f,u,v,y,m,d){const _=o(f,u,v,y,m,d);v.transmission>0?i.push(_):v.transparent===!0?r.push(_):n.push(_)}function c(f,u,v,y,m,d){const _=o(f,u,v,y,m,d);v.transmission>0?i.unshift(_):v.transparent===!0?r.unshift(_):n.unshift(_)}function p(f,u,v){n.length>1&&n.sort(f||cA),i.length>1&&i.sort(u||rg),r.length>1&&r.sort(u||rg),v&&(n.reverse(),i.reverse(),r.reverse())}function g(){for(let f=e,u=t.length;f<u;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:l,unshift:c,finish:g,sort:p}}function uA(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new ag,t.set(i,[s])):r>=a.length?(s=new ag,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function dA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ze};break;case"SpotLight":n={position:new B,direction:new B,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function fA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hA=0;function pA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mA(t){const e=new dA,n=fA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,a=new yt,s=new yt;function o(c){let p=0,g=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let u=0,v=0,y=0,m=0,d=0,_=0,E=0,S=0,b=0,w=0,C=0;c.sort(pA);for(let A=0,N=c.length;A<N;A++){const L=c[A],I=L.color,q=L.intensity,te=L.distance;let z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Hr?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)p+=I.r*q,g+=I.g*q,f+=I.b*q;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],q);C++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,F=n.get(L);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.directionalShadow[u]=F,i.directionalShadowMap[u]=z,i.directionalShadowMatrix[u]=L.shadow.matrix,_++}i.directional[u]=$,u++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(I).multiplyScalar(q),$.distance=te,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[y]=$;const H=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,H.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[y]=H.matrix,L.castShadow){const F=n.get(L);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=z,S++}y++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(I).multiplyScalar(q),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=$,m++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const H=L.shadow,F=n.get(L);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,F.shadowCameraNear=H.camera.near,F.shadowCameraFar=H.camera.far,i.pointShadow[v]=F,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=L.shadow.matrix,E++}i.point[v]=$,v++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(q),$.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[d]=$,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==u||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==_||x.numPointShadows!==E||x.numSpotShadows!==S||x.numSpotMaps!==b||x.numLightProbes!==C)&&(i.directional.length=u,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,x.directionalLength=u,x.pointLength=v,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=_,x.numPointShadows=E,x.numSpotShadows=S,x.numSpotMaps=b,x.numLightProbes=C,i.version=hA++)}function l(c,p){let g=0,f=0,u=0,v=0,y=0;const m=p.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const E=c[d];if(E.isDirectionalLight){const S=i.directional[g];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(E.isSpotLight){const S=i.spot[u];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(E.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),s.identity(),a.copy(E.matrixWorld),a.premultiply(m),s.extractRotation(a),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(E.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function sg(t){const e=new mA(t),n=[],i=[],r=[];function a(f){g.camera=f,n.length=0,i.length=0,r.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function p(f){e.setupView(n,f)}const g={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:c,setupLightsView:p,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function gA(t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new sg(t),e.set(r,[o])):a>=s.length?(o=new sg(t),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_A=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],yA=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],og=new yt,hs=new B,Lu=new B;function SA(t,e,n){let i=new Th;const r=new je,a=new je,s=new xt,o=new NM,l=new DM,c={},p=n.maxTextureSize,g={[dr]:vn,[vn]:dr,[Ei]:Ei},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:vA,fragmentShader:xA}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const v=new zn;v.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new hi(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let d=this.type;this.render=function(w,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===nS&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ml);const A=t.getRenderTarget(),N=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ci),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const q=d!==this.type;q&&C.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(z=>z.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,z=w.length;te<z;te++){const $=w[te],H=$.shadow;if(H===void 0){Ue("WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const F=H.getFrameExtents();r.multiply(F),a.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/F.x),r.x=a.x*F.x,H.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/F.y),r.y=a.y*F.y,H.mapSize.y=a.y));const Y=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===_s){if($.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ui(r.x,r.y,{format:Hr,type:Ii,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),H.map.texture.name=$.name+".shadowMap",H.map.depthTexture=new Ha(r.x,r.y,ai),H.map.depthTexture.name=$.name+".shadowMapDepth",H.map.depthTexture.format=Ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt}else $.isPointLight?(H.map=new Q0(r.x),H.map.depthTexture=new EM(r.x,fi)):(H.map=new ui(r.x,r.y),H.map.depthTexture=new Ha(r.x,r.y,fi)),H.map.depthTexture.name=$.name+".shadowMap",H.map.depthTexture.format=Ui,this.type===ml?(H.map.depthTexture.compareFunction=Y?Sh:yh,H.map.depthTexture.minFilter=Qt,H.map.depthTexture.magFilter=Qt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt);H.camera.updateProjectionMatrix()}const ie=H.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ie;oe++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(H.map),t.clear());const ue=H.getViewport(oe);s.set(a.x*ue.x,a.y*ue.y,a.x*ue.z,a.y*ue.w),I.viewport(s)}if($.isPointLight){const ue=H.camera,Be=H.matrix,Ye=$.distance||ue.far;Ye!==ue.far&&(ue.far=Ye,ue.updateProjectionMatrix()),hs.setFromMatrixPosition($.matrixWorld),ue.position.copy(hs),Lu.copy(ue.position),Lu.add(_A[oe]),ue.up.copy(yA[oe]),ue.lookAt(Lu),ue.updateMatrixWorld(),Be.makeTranslation(-hs.x,-hs.y,-hs.z),og.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),H._frustum.setFromProjectionMatrix(og,ue.coordinateSystem,ue.reversedDepth)}else H.updateMatrices($);i=H.getFrustum(),S(C,x,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===_s&&_(H,x),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(A,N,L)};function _(w,C){const x=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ui(r.x,r.y,{format:Hr,type:Ii})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,x,f,y,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,x,u,y,null)}function E(w,C,x,A){let N=null;const L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)N=L;else if(N=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=N.uuid,q=C.uuid;let te=c[I];te===void 0&&(te={},c[I]=te);let z=te[q];z===void 0&&(z=N.clone(),te[q]=z,C.addEventListener("dispose",b)),N=z}if(N.visible=C.visible,N.wireframe=C.wireframe,A===_s?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:g[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const I=t.properties.get(N);I.light=x}return N}function S(w,C,x,A,N){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===_s)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const q=e.update(w),te=w.material;if(Array.isArray(te)){const z=q.groups;for(let $=0,H=z.length;$<H;$++){const F=z[$],Y=te[F.materialIndex];if(Y&&Y.visible){const ie=E(w,Y,A,N);w.onBeforeShadow(t,w,C,x,q,ie,F),t.renderBufferDirect(x,null,q,ie,w,F),w.onAfterShadow(t,w,C,x,q,ie,F)}}}else if(te.visible){const z=E(w,te,A,N);w.onBeforeShadow(t,w,C,x,q,z,null),t.renderBufferDirect(x,null,q,z,w,null),w.onAfterShadow(t,w,C,x,q,z,null)}}const I=w.children;for(let q=0,te=I.length;q<te;q++)S(I[q],C,x,A,N)}function b(w){w.target.removeEventListener("dispose",b);for(const x in c){const A=c[x],N=w.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function MA(t,e){function n(){let D=!1;const J=new xt;let X=null;const ae=new xt(0,0,0,0);return{setMask:function(de){X!==de&&!D&&(t.colorMask(de,de,de,de),X=de)},setLocked:function(de){D=de},setClear:function(de,ne,Ae,we,Re){Re===!0&&(de*=we,ne*=we,Ae*=we),J.set(de,ne,Ae,we),ae.equals(J)===!1&&(t.clearColor(de,ne,Ae,we),ae.copy(J))},reset:function(){D=!1,X=null,ae.set(-1,0,0,0)}}}function i(){let D=!1,J=!1,X=null,ae=null,de=null;return{setReversed:function(ne){if(J!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),J=ne;const we=de;de=null,this.setClear(we)}},getReversed:function(){return J},setTest:function(ne){ne?le(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(ne){X!==ne&&!D&&(t.depthMask(ne),X=ne)},setFunc:function(ne){if(J&&(ne=US[ne]),ae!==ne){switch(ne){case Pd:t.depthFunc(t.NEVER);break;case Nd:t.depthFunc(t.ALWAYS);break;case Dd:t.depthFunc(t.LESS);break;case Ba:t.depthFunc(t.LEQUAL);break;case Ld:t.depthFunc(t.EQUAL);break;case Id:t.depthFunc(t.GEQUAL);break;case Ud:t.depthFunc(t.GREATER);break;case Fd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=ne}},setLocked:function(ne){D=ne},setClear:function(ne){de!==ne&&(de=ne,J&&(ne=1-ne),t.clearDepth(ne))},reset:function(){D=!1,X=null,ae=null,de=null,J=!1}}}function r(){let D=!1,J=null,X=null,ae=null,de=null,ne=null,Ae=null,we=null,Re=null;return{setTest:function(Pe){D||(Pe?le(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(Pe){J!==Pe&&!D&&(t.stencilMask(Pe),J=Pe)},setFunc:function(Pe,tt,Rn){(X!==Pe||ae!==tt||de!==Rn)&&(t.stencilFunc(Pe,tt,Rn),X=Pe,ae=tt,de=Rn)},setOp:function(Pe,tt,Rn){(ne!==Pe||Ae!==tt||we!==Rn)&&(t.stencilOp(Pe,tt,Rn),ne=Pe,Ae=tt,we=Rn)},setLocked:function(Pe){D=Pe},setClear:function(Pe){Re!==Pe&&(t.clearStencil(Pe),Re=Pe)},reset:function(){D=!1,J=null,X=null,ae=null,de=null,ne=null,Ae=null,we=null,Re=null}}}const a=new n,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let p={},g={},f={},u=new WeakMap,v=[],y=null,m=!1,d=null,_=null,E=null,S=null,b=null,w=null,C=null,x=new Ze(0,0,0),A=0,N=!1,L=null,I=null,q=null,te=null,z=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=F>=1):Y.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=F>=2);let ie=null,oe={};const ue=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),Ye=new xt().fromArray(ue),We=new xt().fromArray(Be);function ee(D,J,X,ae){const de=new Uint8Array(4),ne=t.createTexture();t.bindTexture(D,ne),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<X;Ae++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(J,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(J+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ne}const he={};he[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(Ba),Mt(!1),wt(im),le(t.CULL_FACE),Ke(Ci);function le(D){p[D]!==!0&&(t.enable(D),p[D]=!0)}function Le(D){p[D]!==!1&&(t.disable(D),p[D]=!1)}function pe(D,J){return f[D]!==J?(t.bindFramebuffer(D,J),f[D]=J,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=J),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=J),!0):!1}function Ie(D,J){let X=v,ae=!1;if(D){X=u.get(J),X===void 0&&(X=[],u.set(J,X));const de=D.textures;if(X.length!==de.length||X[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Ae=de.length;ne<Ae;ne++)X[ne]=t.COLOR_ATTACHMENT0+ne;X.length=de.length,ae=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,ae=!0);ae&&t.drawBuffers(X)}function mt(D){return y!==D?(t.useProgram(D),y=D,!0):!1}const Ge={[wr]:t.FUNC_ADD,[rS]:t.FUNC_SUBTRACT,[aS]:t.FUNC_REVERSE_SUBTRACT};Ge[sS]=t.MIN,Ge[oS]=t.MAX;const it={[lS]:t.ZERO,[cS]:t.ONE,[uS]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[gS]:t.SRC_ALPHA_SATURATE,[pS]:t.DST_COLOR,[fS]:t.DST_ALPHA,[dS]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[mS]:t.ONE_MINUS_DST_COLOR,[hS]:t.ONE_MINUS_DST_ALPHA,[vS]:t.CONSTANT_COLOR,[xS]:t.ONE_MINUS_CONSTANT_COLOR,[_S]:t.CONSTANT_ALPHA,[yS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ke(D,J,X,ae,de,ne,Ae,we,Re,Pe){if(D===Ci){m===!0&&(Le(t.BLEND),m=!1);return}if(m===!1&&(le(t.BLEND),m=!0),D!==iS){if(D!==d||Pe!==N){if((_!==wr||b!==wr)&&(t.blendEquation(t.FUNC_ADD),_=wr,b=wr),Pe)switch(D){case Ca:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rm:t.blendFunc(t.ONE,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",D);break}else switch(D){case Ca:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case am:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sm:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",D);break}E=null,S=null,w=null,C=null,x.set(0,0,0),A=0,d=D,N=Pe}return}de=de||J,ne=ne||X,Ae=Ae||ae,(J!==_||de!==b)&&(t.blendEquationSeparate(Ge[J],Ge[de]),_=J,b=de),(X!==E||ae!==S||ne!==w||Ae!==C)&&(t.blendFuncSeparate(it[X],it[ae],it[ne],it[Ae]),E=X,S=ae,w=ne,C=Ae),(we.equals(x)===!1||Re!==A)&&(t.blendColor(we.r,we.g,we.b,Re),x.copy(we),A=Re),d=D,N=!1}function ze(D,J){D.side===Ei?Le(t.CULL_FACE):le(t.CULL_FACE);let X=D.side===vn;J&&(X=!X),Mt(X),D.blending===Ca&&D.transparent===!1?Ke(Ci):Ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),a.setMask(D.colorWrite);const ae=D.stencilWrite;o.setTest(ae),ae&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(D){L!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),L=D)}function wt(D){D!==eS?(le(t.CULL_FACE),D!==I&&(D===im?t.cullFace(t.BACK):D===tS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),I=D}function Rt(D){D!==q&&(H&&t.lineWidth(D),q=D)}function Lt(D,J,X){D?(le(t.POLYGON_OFFSET_FILL),(te!==J||z!==X)&&(te=J,z=X,s.getReversed()&&(J=-J),t.polygonOffset(J,X))):Le(t.POLYGON_OFFSET_FILL)}function ht(D){D?le(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function gt(D){D===void 0&&(D=t.TEXTURE0+$-1),ie!==D&&(t.activeTexture(D),ie=D)}function U(D,J,X){X===void 0&&(ie===null?X=t.TEXTURE0+$-1:X=ie);let ae=oe[X];ae===void 0&&(ae={type:void 0,texture:void 0},oe[X]=ae),(ae.type!==D||ae.texture!==J)&&(ie!==X&&(t.activeTexture(X),ie=X),t.bindTexture(D,J||he[D]),ae.type=D,ae.texture=J)}function Xt(){const D=oe[ie];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function M(){try{t.texSubImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function k(){try{t.texSubImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function fe(){try{t.texStorage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function ve(){try{t.texStorage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function Q(){try{t.texImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function re(){try{t.texImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function me(D){return g[D]!==void 0?g[D]:t.getParameter(D)}function be(D,J){g[D]!==J&&(t.pixelStorei(D,J),g[D]=J)}function xe(D){Ye.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function ge(D){We.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),We.copy(D))}function R(D,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let ae=X.get(D);ae===void 0&&(ae=t.getUniformBlockIndex(J,D.name),X.set(D,ae))}function K(D,J){const ae=c.get(J).get(D);l.get(J)!==ae&&(t.uniformBlockBinding(J,ae,D.__bindingPointIndex),l.set(J,ae))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},g={},ie=null,oe={},f={},u=new WeakMap,v=[],y=null,m=!1,d=null,_=null,E=null,S=null,b=null,w=null,C=null,x=new Ze(0,0,0),A=0,N=!1,L=null,I=null,q=null,te=null,z=null,Ye.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:le,disable:Le,bindFramebuffer:pe,drawBuffers:Ie,useProgram:mt,setBlending:Ke,setMaterial:ze,setFlipSided:Mt,setCullFace:wt,setLineWidth:Rt,setPolygonOffset:Lt,setScissorTest:ht,activeTexture:gt,bindTexture:U,unbindTexture:Xt,compressedTexImage2D:nt,compressedTexImage3D:P,texImage2D:Q,texImage3D:re,pixelStorei:be,getParameter:me,updateUBOMapping:R,uniformBlockBinding:K,texStorage2D:fe,texStorage3D:ve,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:xe,viewport:ge,reset:se}}function EA(t,e,n,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,p=new WeakMap,g=new Set;let f;const u=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,M){return v?new OffscreenCanvas(P,M):Kl("canvas")}function m(P,M,k){let W=1;const Z=nt(P);if((Z.width>k||Z.height>k)&&(W=k/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(W*Z.width),ve=Math.floor(W*Z.height);f===void 0&&(f=y(fe,ve));const Q=M?y(fe,ve):f;return Q.width=fe,Q.height=ve,Q.getContext("2d").drawImage(P,0,0,fe,ve),Ue("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+fe+"x"+ve+")."),Q}else return"data"in P&&Ue("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function d(P){return P.generateMipmaps}function _(P){t.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(P,M,k,W,Z,fe=!1){if(P!==null){if(t[P]!==void 0)return t[P];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ve;W&&(ve=e.get("EXT_texture_norm16"),ve||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=M;if(M===t.RED&&(k===t.FLOAT&&(Q=t.R32F),k===t.HALF_FLOAT&&(Q=t.R16F),k===t.UNSIGNED_BYTE&&(Q=t.R8),k===t.UNSIGNED_SHORT&&ve&&(Q=ve.R16_EXT),k===t.SHORT&&ve&&(Q=ve.R16_SNORM_EXT)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.R8UI),k===t.UNSIGNED_SHORT&&(Q=t.R16UI),k===t.UNSIGNED_INT&&(Q=t.R32UI),k===t.BYTE&&(Q=t.R8I),k===t.SHORT&&(Q=t.R16I),k===t.INT&&(Q=t.R32I)),M===t.RG&&(k===t.FLOAT&&(Q=t.RG32F),k===t.HALF_FLOAT&&(Q=t.RG16F),k===t.UNSIGNED_BYTE&&(Q=t.RG8),k===t.UNSIGNED_SHORT&&ve&&(Q=ve.RG16_EXT),k===t.SHORT&&ve&&(Q=ve.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.RG8UI),k===t.UNSIGNED_SHORT&&(Q=t.RG16UI),k===t.UNSIGNED_INT&&(Q=t.RG32UI),k===t.BYTE&&(Q=t.RG8I),k===t.SHORT&&(Q=t.RG16I),k===t.INT&&(Q=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),k===t.UNSIGNED_INT&&(Q=t.RGB32UI),k===t.BYTE&&(Q=t.RGB8I),k===t.SHORT&&(Q=t.RGB16I),k===t.INT&&(Q=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),k===t.UNSIGNED_INT&&(Q=t.RGBA32UI),k===t.BYTE&&(Q=t.RGBA8I),k===t.SHORT&&(Q=t.RGBA16I),k===t.INT&&(Q=t.RGBA32I)),M===t.RGB&&(k===t.UNSIGNED_SHORT&&ve&&(Q=ve.RGB16_EXT),k===t.SHORT&&ve&&(Q=ve.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),M===t.RGBA){const re=fe?Yl:$e.getTransfer(Z);k===t.FLOAT&&(Q=t.RGBA32F),k===t.HALF_FLOAT&&(Q=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Q=re===rt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ve&&(Q=ve.RGBA16_EXT),k===t.SHORT&&ve&&(Q=ve.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(P,M){let k;return P?M===null||M===fi||M===Zs?k=t.DEPTH24_STENCIL8:M===ai?k=t.DEPTH32F_STENCIL8:M===Ks&&(k=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fi||M===Zs?k=t.DEPTH_COMPONENT24:M===ai?k=t.DEPTH_COMPONENT32F:M===Ks&&(k=t.DEPTH_COMPONENT16),k}function w(P,M){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Gt&&P.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){const M=P.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&p.delete(M),M.isHTMLTexture&&g.delete(M)}function x(P){const M=P.target;M.removeEventListener("dispose",x),L(M)}function A(P){const M=i.get(P);if(M.__webglInit===void 0)return;const k=P.source,W=u.get(k);if(W){const Z=W[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(P),Object.keys(W).length===0&&u.delete(k)}i.remove(P)}function N(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const k=P.source,W=u.get(k);delete W[M.__cacheKey],s.memory.textures--}function L(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let Z=0;Z<M.__webglFramebuffer[W].length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[W][Z]);else t.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)t.deleteFramebuffer(M.__webglFramebuffer[W]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=P.textures;for(let W=0,Z=k.length;W<Z;W++){const fe=i.get(k[W]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),s.memory.textures--),i.remove(k[W])}i.remove(P)}let I=0;function q(){I=0}function te(){return I}function z(P){I=P}function $(){const P=I;return P>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function H(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function F(P,M){const k=i.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const W=P.image;if(W===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,P,M);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function Y(P,M){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){Le(k,P,M);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function ie(P,M){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){Le(k,P,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function oe(P,M){const k=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){pe(k,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const ue={[Od]:t.REPEAT,[Ai]:t.CLAMP_TO_EDGE,[kd]:t.MIRRORED_REPEAT},Be={[Gt]:t.NEAREST,[ES]:t.NEAREST_MIPMAP_NEAREST,[Ro]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[nu]:t.LINEAR_MIPMAP_NEAREST,[Nr]:t.LINEAR_MIPMAP_LINEAR},Ye={[AS]:t.NEVER,[NS]:t.ALWAYS,[bS]:t.LESS,[yh]:t.LEQUAL,[CS]:t.EQUAL,[Sh]:t.GEQUAL,[RS]:t.GREATER,[PS]:t.NOTEQUAL};function We(P,M){if(M.type===ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===nu||M.magFilter===Ro||M.magFilter===Nr||M.minFilter===Qt||M.minFilter===nu||M.minFilter===Ro||M.minFilter===Nr)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,ue[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,ue[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,ue[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Be[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Be[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==Ro&&M.minFilter!==Nr||M.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ee(P,M){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));const W=M.source;let Z=u.get(W);Z===void 0&&(Z={},u.set(W,Z));const fe=H(M);if(fe!==P.__cacheKey){Z[fe]===void 0&&(Z[fe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,k=!0),Z[fe].usedTimes++;const ve=Z[P.__cacheKey];ve!==void 0&&(Z[P.__cacheKey].usedTimes--,ve.usedTimes===0&&N(M)),P.__cacheKey=fe,P.__webglTexture=Z[fe].texture}return k}function he(P,M,k){return Math.floor(Math.floor(P/k)/M)}function le(P,M,k,W){const fe=P.updateRanges;if(fe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,k,W,M.data);else{fe.sort((be,xe)=>be.start-xe.start);let ve=0;for(let be=1;be<fe.length;be++){const xe=fe[ve],ge=fe[be],R=xe.start+xe.count,K=he(ge.start,M.width,4),se=he(xe.start,M.width,4);ge.start<=R+1&&K===se&&he(ge.start+ge.count-1,M.width,4)===K?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++ve,fe[ve]=ge)}fe.length=ve+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let be=0,xe=fe.length;be<xe;be++){const ge=fe[be],R=Math.floor(ge.start/4),K=Math.ceil(ge.count/4),se=R%M.width,D=Math.floor(R/M.width),J=K,X=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,se,D,J,X,k,W,M.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function Le(P,M,k){let W=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=t.TEXTURE_3D);const Z=ee(P,M),fe=M.source;n.bindTexture(W,P.__webglTexture,t.TEXTURE0+k);const ve=i.get(fe);if(fe.version!==ve.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const X=$e.getPrimaries($e.workingColorSpace),ae=M.colorSpace===Zi?null:$e.getPrimaries(M.colorSpace),de=M.colorSpace===Zi||X===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let re=m(M.image,!1,r.maxTextureSize);re=Xt(M,re);const me=a.convert(M.format,M.colorSpace),be=a.convert(M.type);let xe=S(M.internalFormat,me,be,M.normalized,M.colorSpace,M.isVideoTexture);We(W,M);let ge;const R=M.mipmaps,K=M.isVideoTexture!==!0,se=ve.__version===void 0||Z===!0,D=fe.dataReady,J=w(M,re);if(M.isDepthTexture)xe=b(M.format===Dr,M.type),se&&(K?n.texStorage2D(t.TEXTURE_2D,1,xe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,xe,re.width,re.height,0,me,be,null));else if(M.isDataTexture)if(R.length>0){K&&se&&n.texStorage2D(t.TEXTURE_2D,J,xe,R[0].width,R[0].height);for(let X=0,ae=R.length;X<ae;X++)ge=R[X],K?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,me,be,ge.data):n.texImage2D(t.TEXTURE_2D,X,xe,ge.width,ge.height,0,me,be,ge.data);M.generateMipmaps=!1}else K?(se&&n.texStorage2D(t.TEXTURE_2D,J,xe,re.width,re.height),D&&le(M,re,me,be)):n.texImage2D(t.TEXTURE_2D,0,xe,re.width,re.height,0,me,be,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){K&&se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,J,xe,R[0].width,R[0].height,re.depth);for(let X=0,ae=R.length;X<ae;X++)if(ge=R[X],M.format!==$n)if(me!==null)if(K){if(D)if(M.layerUpdates.size>0){const de=km(ge.width,ge.height,M.format,M.type);for(const ne of M.layerUpdates){const Ae=ge.data.subarray(ne*de/ge.data.BYTES_PER_ELEMENT,(ne+1)*de/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,ne,ge.width,ge.height,1,me,Ae)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,re.depth,me,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,xe,ge.width,ge.height,re.depth,0,ge.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,re.depth,me,be,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,xe,ge.width,ge.height,re.depth,0,me,be,ge.data)}else{K&&se&&n.texStorage2D(t.TEXTURE_2D,J,xe,R[0].width,R[0].height);for(let X=0,ae=R.length;X<ae;X++)ge=R[X],M.format!==$n?me!==null?K?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,me,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,X,xe,ge.width,ge.height,0,ge.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,me,be,ge.data):n.texImage2D(t.TEXTURE_2D,X,xe,ge.width,ge.height,0,me,be,ge.data)}else if(M.isDataArrayTexture)if(K){if(se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,J,xe,re.width,re.height,re.depth),D)if(M.layerUpdates.size>0){const X=km(re.width,re.height,M.format,M.type);for(const ae of M.layerUpdates){const de=re.data.subarray(ae*X/re.data.BYTES_PER_ELEMENT,(ae+1)*X/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,re.width,re.height,1,me,be,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,be,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,me,be,re.data);else if(M.isData3DTexture)K?(se&&n.texStorage3D(t.TEXTURE_3D,J,xe,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,be,re.data)):n.texImage3D(t.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,me,be,re.data);else if(M.isFramebufferTexture){if(se)if(K)n.texStorage2D(t.TEXTURE_2D,J,xe,re.width,re.height);else{let X=re.width,ae=re.height;for(let de=0;de<J;de++)n.texImage2D(t.TEXTURE_2D,de,xe,X,ae,0,me,be,null),X>>=1,ae>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const X=t.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),re.parentNode!==X){X.appendChild(re),g.add(M),X.onpaint=ae=>{const de=ae.changedElements;for(const ne of g)de.includes(ne.image)&&(ne.needsUpdate=!0)},X.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{const de=t.RGBA,ne=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,de,ne,Ae,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(R.length>0){if(K&&se){const X=nt(R[0]);n.texStorage2D(t.TEXTURE_2D,J,xe,X.width,X.height)}for(let X=0,ae=R.length;X<ae;X++)ge=R[X],K?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,me,be,ge):n.texImage2D(t.TEXTURE_2D,X,xe,me,be,ge);M.generateMipmaps=!1}else if(K){if(se){const X=nt(re);n.texStorage2D(t.TEXTURE_2D,J,xe,X.width,X.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,be,re)}else n.texImage2D(t.TEXTURE_2D,0,xe,me,be,re);d(M)&&_(W),ve.__version=fe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function pe(P,M,k){if(M.image.length!==6)return;const W=ee(P,M),Z=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+k);const fe=i.get(Z);if(Z.version!==fe.__version||W===!0){n.activeTexture(t.TEXTURE0+k);const ve=$e.getPrimaries($e.workingColorSpace),Q=M.colorSpace===Zi?null:$e.getPrimaries(M.colorSpace),re=M.colorSpace===Zi||ve===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let ne=0;ne<6;ne++)!me&&!be?xe[ne]=m(M.image[ne],!0,r.maxCubemapSize):xe[ne]=be?M.image[ne].image:M.image[ne],xe[ne]=Xt(M,xe[ne]);const ge=xe[0],R=a.convert(M.format,M.colorSpace),K=a.convert(M.type),se=S(M.internalFormat,R,K,M.normalized,M.colorSpace),D=M.isVideoTexture!==!0,J=fe.__version===void 0||W===!0,X=Z.dataReady;let ae=w(M,ge);We(t.TEXTURE_CUBE_MAP,M);let de;if(me){D&&J&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,se,ge.width,ge.height);for(let ne=0;ne<6;ne++){de=xe[ne].mipmaps;for(let Ae=0;Ae<de.length;Ae++){const we=de[Ae];M.format!==$n?R!==null?D?X&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,we.width,we.height,R,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,se,we.width,we.height,0,we.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,we.width,we.height,R,K,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,se,we.width,we.height,0,R,K,we.data)}}}else{if(de=M.mipmaps,D&&J){de.length>0&&ae++;const ne=nt(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,se,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(be){D?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe[ne].width,xe[ne].height,R,K,xe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,xe[ne].width,xe[ne].height,0,R,K,xe[ne].data);for(let Ae=0;Ae<de.length;Ae++){const Re=de[Ae].image[ne].image;D?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Re.width,Re.height,R,K,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,se,Re.width,Re.height,0,R,K,Re.data)}}else{D?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,R,K,xe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,R,K,xe[ne]);for(let Ae=0;Ae<de.length;Ae++){const we=de[Ae];D?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,R,K,we.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,se,R,K,we.image[ne])}}}d(M)&&_(t.TEXTURE_CUBE_MAP),fe.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ie(P,M,k,W,Z,fe){const ve=a.convert(k.format,k.colorSpace),Q=a.convert(k.type),re=S(k.internalFormat,ve,Q,k.normalized,k.colorSpace),me=i.get(M),be=i.get(k);if(be.__renderTarget=M,!me.__hasExternalTextures){const xe=Math.max(1,M.width>>fe),ge=Math.max(1,M.height>>fe);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,fe,re,xe,ge,M.depth,0,ve,Q,null):n.texImage2D(Z,fe,re,xe,ge,0,ve,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),gt(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Z,be.__webglTexture,0,ht(M)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Z,be.__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(P,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const W=M.depthTexture,Z=W&&W.isDepthTexture?W.type:null,fe=b(M.stencilBuffer,Z),ve=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;gt(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(M),fe,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(M),fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,P)}else{const W=M.textures;for(let Z=0;Z<W.length;Z++){const fe=W[Z],ve=a.convert(fe.format,fe.colorSpace),Q=a.convert(fe.type),re=S(fe.internalFormat,ve,Q,fe.normalized,fe.colorSpace);gt(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(M),re,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(M),re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(P,M,k){const W=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),We(t.TEXTURE_CUBE_MAP,M.depthTexture);const me=a.convert(M.depthTexture.format),be=a.convert(M.depthTexture.type);let xe;M.depthTexture.format===Ui?xe=t.DEPTH_COMPONENT24:M.depthTexture.format===Dr&&(xe=t.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,M.width,M.height,0,me,be,null)}}else F(M.depthTexture,0);const fe=Z.__webglTexture,ve=ht(M),Q=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,re=M.depthTexture.format===Dr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ui)gt(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,Q,fe,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,re,Q,fe,0);else if(M.depthTexture.format===Dr)gt(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,Q,fe,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,re,Q,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){const M=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const W=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=W}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Ge(M.__webglFramebuffer[W],P,W);else{const W=P.texture.mipmaps;W&&W.length>0?Ge(M.__webglFramebuffer[0],P,0):Ge(M.__webglFramebuffer,P,0)}else if(k){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=t.createRenderbuffer(),mt(M.__webglDepthbuffer[W],P,!1);else{const Z=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,fe)}}else{const W=P.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),mt(M.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,fe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(P,M,k){const W=i.get(P);M!==void 0&&Ie(W.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&it(P)}function ze(P){const M=P.texture,k=i.get(P),W=i.get(M);P.addEventListener("dispose",x);const Z=P.textures,fe=P.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=M.version,s.memory.textures++),fe){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let re=0;re<M.mipmaps.length;re++)k.__webglFramebuffer[Q][re]=t.createFramebuffer()}else k.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)k.__webglFramebuffer[Q]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ve)for(let Q=0,re=Z.length;Q<re;Q++){const me=i.get(Z[Q]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),s.memory.textures++)}if(P.samples>0&&gt(P)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const re=Z[Q];k.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);const me=a.convert(re.format,re.colorSpace),be=a.convert(re.type),xe=S(re.internalFormat,me,be,re.normalized,re.colorSpace,P.isXRRenderTarget===!0),ge=ht(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,xe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),mt(k.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),We(t.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Ie(k.__webglFramebuffer[Q][re],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,re);else Ie(k.__webglFramebuffer[Q],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(M)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let Q=0,re=Z.length;Q<re;Q++){const me=Z[Q],be=i.get(me);let xe=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,be.__webglTexture),We(xe,me),Ie(k.__webglFramebuffer,P,me,t.COLOR_ATTACHMENT0+Q,xe,0),d(me)&&_(xe)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,W.__webglTexture),We(Q,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Ie(k.__webglFramebuffer[re],P,M,t.COLOR_ATTACHMENT0,Q,re);else Ie(k.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,Q,0);d(M)&&_(Q),n.unbindTexture()}P.depthBuffer&&it(P)}function Mt(P){const M=P.textures;for(let k=0,W=M.length;k<W;k++){const Z=M[k];if(d(Z)){const fe=E(P),ve=i.get(Z).__webglTexture;n.bindTexture(fe,ve),_(fe),n.unbindTexture()}}}const wt=[],Rt=[];function Lt(P){if(P.samples>0){if(gt(P)===!1){const M=P.textures,k=P.width,W=P.height;let Z=t.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(P),Q=M.length>1;if(Q)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const re=P.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let me=0;me<M.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);const be=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,k,W,0,0,k,W,Z,t.NEAREST),l===!0&&(wt.length=0,Rt.length=0,wt.push(t.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(wt.push(fe),Rt.push(fe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Rt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,wt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);const be=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ht(P){return Math.min(r.maxSamples,P.samples)}function gt(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(P){const M=s.render.frame;p.get(P)!==M&&(p.set(P,M),P.update())}function Xt(P,M){const k=P.colorSpace,W=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==$l&&k!==Zi&&($e.getTransfer(k)===rt?(W!==$n||Z!==En)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",k)),M}function nt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=q,this.getTextureUnits=te,this.setTextureUnits=z,this.setTexture2D=F,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=oe,this.rebindTextures=Ke,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function TA(t,e){function n(i,r=Zi){let a;const s=$e.getTransfer(r);if(i===En)return t.UNSIGNED_BYTE;if(i===mh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===gh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===D0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===L0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===P0)return t.BYTE;if(i===N0)return t.SHORT;if(i===Ks)return t.UNSIGNED_SHORT;if(i===ph)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===I0)return t.ALPHA;if(i===U0)return t.RGB;if(i===$n)return t.RGBA;if(i===Ui)return t.DEPTH_COMPONENT;if(i===Dr)return t.DEPTH_STENCIL;if(i===F0)return t.RED;if(i===vh)return t.RED_INTEGER;if(i===Hr)return t.RG;if(i===xh)return t.RG_INTEGER;if(i===_h)return t.RGBA_INTEGER;if(i===gl||i===vl||i===xl||i===_l)if(s===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===gl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===gl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===zd||i===Hd||i===Gd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Bd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Wd||i===jd||i===Xd||i===qd||i===Xl||i===$d)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Vd||i===Wd)return s===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===jd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xd)return a.COMPRESSED_R11_EAC;if(i===qd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Xl)return a.COMPRESSED_RG11_EAC;if(i===$d)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yd||i===Kd||i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===af||i===sf||i===of||i===lf||i===cf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Yd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ef)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tf)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nf)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rf)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===af)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sf)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===of)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lf)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cf)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uf||i===df||i===ff)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===uf)return s===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===df)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ff)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hf||i===pf||i===ql||i===mf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===hf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===pf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ql)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const wA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AA=`
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

}`;class bA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new q0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new pi({vertexShader:wA,fragmentShader:AA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hi(new yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CA extends Wr{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,p=null,g=null,f=null,u=null,v=null;const y=typeof XRWebGLBinding<"u",m=new bA,d={},_=n.getContextAttributes();let E=null,S=null;const b=[],w=[],C=new je;let x=null;const A=new Mn;A.viewport=new xt;const N=new Mn;N.viewport=new xt;const L=[A,N],I=new kM;let q=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=b[ee];return he===void 0&&(he=new lu,b[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=b[ee];return he===void 0&&(he=new lu,b[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=b[ee];return he===void 0&&(he=new lu,b[ee]=he),he.getHandSpace()};function z(ee){const he=w.indexOf(ee.inputSource);if(he===-1)return;const le=b[he];le!==void 0&&(le.update(ee.inputSource,ee.frame,c||s),le.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",H);for(let ee=0;ee<b.length;ee++){const he=w[ee];he!==null&&(w[ee]=null,b[ee].disconnect(he))}q=null,te=null,m.reset();for(const ee in d)delete d[ee];e.setRenderTarget(E),u=null,f=null,g=null,r=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return g===null&&y&&(g=new XRWebGLBinding(r,n)),g},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Le=null,pe=null;_.depth&&(pe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=_.stencil?Dr:Ui,Le=_.stencil?Zs:fi);const Ie={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:a};g=this.getBinding(),f=g.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ui(f.textureWidth,f.textureHeight,{format:$n,type:En,depthTexture:new Ha(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new ui(u.framebufferWidth,u.framebufferHeight,{format:$n,type:En,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(ee){for(let he=0;he<ee.removed.length;he++){const le=ee.removed[he],Le=w.indexOf(le);Le>=0&&(w[Le]=null,b[Le].disconnect(le))}for(let he=0;he<ee.added.length;he++){const le=ee.added[he];let Le=w.indexOf(le);if(Le===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=w.length){w.push(le),Le=Ie;break}else if(w[Ie]===null){w[Ie]=le,Le=Ie;break}if(Le===-1)break}const pe=b[Le];pe&&pe.connect(le)}}const F=new B,Y=new B;function ie(ee,he,le){F.setFromMatrixPosition(he.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const Le=F.distanceTo(Y),pe=he.projectionMatrix.elements,Ie=le.projectionMatrix.elements,mt=pe[14]/(pe[10]-1),Ge=pe[14]/(pe[10]+1),it=(pe[9]+1)/pe[5],Ke=(pe[9]-1)/pe[5],ze=(pe[8]-1)/pe[0],Mt=(Ie[8]+1)/Ie[0],wt=mt*ze,Rt=mt*Mt,Lt=Le/(-ze+Mt),ht=Lt*-ze;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ht),ee.translateZ(Lt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),pe[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const gt=mt+Lt,U=Ge+Lt,Xt=wt-ht,nt=Rt+(Le-ht),P=it*Ge/U*gt,M=Ke*Ge/U*gt;ee.projectionMatrix.makePerspective(Xt,nt,P,M,gt,U),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function oe(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let he=ee.near,le=ee.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(le=m.depthFar)),I.near=N.near=A.near=he,I.far=N.far=A.far=le,(q!==I.near||te!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),q=I.near,te=I.far),I.layers.mask=ee.layers.mask|6,A.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;const Le=ee.parent,pe=I.cameras;oe(I,Le);for(let Ie=0;Ie<pe.length;Ie++)oe(pe[Ie],Le);pe.length===2?ie(I,A,N):I.projectionMatrix.copy(A.projectionMatrix),ue(ee,I,Le)};function ue(ee,he,le){le===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(le.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Qs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(ee){return d[ee]};let Be=null;function Ye(ee,he){if(p=he.getViewerPose(c||s),v=he,p!==null){const le=p.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let Le=!1;le.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let Ge=0;Ge<le.length;Ge++){const it=le[Ge];let Ke=null;if(u!==null)Ke=u.getViewport(it);else{const Mt=g.getViewSubImage(f,it);Ke=Mt.viewport,Ge===0&&(e.setRenderTargetTextures(S,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(S))}let ze=L[Ge];ze===void 0&&(ze=new Mn,ze.layers.enable(Ge),ze.viewport=new xt,L[Ge]=ze),ze.matrix.fromArray(it.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(it.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ge===0&&(I.matrix.copy(ze.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(ze)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){g=i.getBinding();const Ge=g.getDepthInformation(le[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,r.renderState)}if(pe&&pe.includes("camera-access")&&y){e.state.unbindTexture(),g=i.getBinding();for(let Ge=0;Ge<le.length;Ge++){const it=le[Ge].camera;if(it){let Ke=d[it];Ke||(Ke=new q0,d[it]=Ke);const ze=g.getCameraImage(it);Ke.sourceTexture=ze}}}}for(let le=0;le<b.length;le++){const Le=w[le],pe=b[le];Le!==null&&pe!==void 0&&pe.update(Le,he,c||s)}Be&&Be(ee,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),v=null}const We=new Z0;We.setAnimationLoop(Ye),this.setAnimationLoop=function(ee){Be=ee},this.dispose=function(){}}}const RA=new yt,rx=new Oe;rx.set(-1,0,0,0,1,0,0,0,1);function PA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,$0(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,E,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?a(m,d):d.isMeshLambertMaterial?(a(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(a(m,d),g(m,d)):d.isMeshPhongMaterial?(a(m,d),p(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&u(m,d,S)):d.isMeshMatcapMaterial?(a(m,d),v(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),y(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===vn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===vn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),E=_.envMap,S=_.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(RA.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rx),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=E*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function p(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function g(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function u(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NA(t,e,n,i){let r={},a={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const w=b.program;i.uniformBlockBinding(S,w)}function c(S,b){let w=r[S.id];w===void 0&&(m(S),w=p(S),r[S.id]=w,S.addEventListener("dispose",_));const C=b.program;i.updateUBOMapping(S,C);const x=e.render.frame;a[S.id]!==x&&(f(S),a[S.id]=x)}function p(S){const b=g();S.__bindingPointIndex=b;const w=t.createBuffer(),C=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,w),w}function g(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=r[S.id],w=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let x=0,A=w.length;x<A;x++){const N=w[x];if(Array.isArray(N))for(let L=0,I=N.length;L<I;L++)u(N[L],x,L,C);else u(N,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(S,b,w,C){if(y(S,b,w,C)===!0){const x=S.__offset,A=S.value;if(Array.isArray(A)){let N=0;for(let L=0;L<A.length;L++){const I=A[L],q=d(I);v(I,S.__data,N),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function v(S,b,w){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,w)}function y(S,b,w,C){const x=S.value,A=b+"_"+w;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{const N=C[A];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function m(S){const b=S.uniforms;let w=0;const C=16;for(let A=0,N=b.length;A<N;A++){const L=Array.isArray(b[A])?b[A]:[b[A]];for(let I=0,q=L.length;I<q;I++){const te=L[I],z=Array.isArray(te.value)?te.value:[te.value];for(let $=0,H=z.length;$<H;$++){const F=z[$],Y=d(F),ie=w%C,oe=ie%Y.boundary,ue=ie+oe;w+=oe,ue!==0&&C-ue<Y.storage&&(w+=C-ue),te.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=w,w+=Y.storage}}}const x=w%C;return x>0&&(w+=C-x),S.__size=w,S.__cache={},this}function d(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",S),b}function _(S){const b=S.target;b.removeEventListener("dispose",_);const w=s.indexOf(b.__bindingPointIndex);s.splice(w,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function E(){for(const S in r)t.deleteBuffer(r[S]);s=[],r={},a={}}return{bind:l,update:c,dispose:E}}const DA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function LA(){return ti===null&&(ti=new vM(DA,16,16,Hr,Ii),ti.name="DFG_LUT",ti.minFilter=Qt,ti.magFilter=Qt,ti.wrapS=Ai,ti.wrapT=Ai,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class IA{constructor(e={}){const{canvas:n=LS(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:u=En}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const y=u,m=new Set([_h,xh,vh]),d=new Set([En,fi,Ks,Zs,mh,gh]),_=new Uint32Array(4),E=new Int32Array(4),S=new B;let b=null,w=null;const C=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let L=!1,I=null,q=null,te=null,z=null;this._outputColorSpace=Dn;let $=0,H=0,F=null,Y=-1,ie=null;const oe=new xt,ue=new xt;let Be=null;const Ye=new Ze(0);let We=0,ee=n.width,he=n.height,le=1,Le=null,pe=null;const Ie=new xt(0,0,ee,he),mt=new xt(0,0,ee,he);let Ge=!1;const it=new Th;let Ke=!1,ze=!1;const Mt=new yt,wt=new B,Rt=new xt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function gt(){return F===null?le:1}let U=i;function Xt(T,O){return n.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hh}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",tt,!1),U===null){const O="webgl2";if(U=Xt(O,T),U===null)throw Xt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Qe("WebGLRenderer: "+T.message),T}let nt,P,M,k,W,Z,fe,ve,Q,re,me,be,xe,ge,R,K,se,D,J,X,ae,de,ne;function Ae(){nt=new LT(U),nt.init(),ae=new TA(U,nt),P=new wT(U,nt,e,ae),M=new MA(U,nt),P.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),q=U.createFramebuffer(),te=U.createFramebuffer(),z=U.createFramebuffer(),k=new FT(U),W=new lA,Z=new EA(U,nt,M,W,P,ae,k),fe=new DT(N),ve=new zM(U),de=new ET(U,ve),Q=new IT(U,ve,k,de),re=new kT(U,Q,ve,de,k),D=new OT(U,P,Z),R=new AT(W),me=new oA(N,fe,nt,P,de,R),be=new PA(N,W),xe=new uA,ge=new gA(nt),se=new MT(N,fe,M,re,v,l),K=new SA(N,re,P),ne=new NA(U,k,P,M),J=new TT(U,nt,k),X=new UT(U,nt,k),k.programs=me.programs,N.capabilities=P,N.extensions=nt,N.properties=W,N.renderLists=xe,N.shadowMap=K,N.state=M,N.info=k}Ae(),y!==En&&(A=new zT(y,n.width,n.height,o,r,a));const we=new CA(N,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(T){T!==void 0&&(le=T,this.setSize(ee,he,!1))},this.getSize=function(T){return T.set(ee,he)},this.setSize=function(T,O,j=!0){if(we.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,he=O,n.width=Math.floor(T*le),n.height=Math.floor(O*le),j===!0&&(n.style.width=T+"px",n.style.height=O+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(ee*le,he*le).floor()},this.setDrawingBufferSize=function(T,O,j){ee=T,he=O,le=j,n.width=Math.floor(T*j),n.height=Math.floor(O*j),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(y===En){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(oe)},this.getViewport=function(T){return T.copy(Ie)},this.setViewport=function(T,O,j,G){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,O,j,G),M.viewport(oe.copy(Ie).multiplyScalar(le).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,O,j,G){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,O,j,G),M.scissor(ue.copy(mt).multiplyScalar(le).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(T){M.setScissorTest(Ge=T)},this.setOpaqueSort=function(T){Le=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,j=!0){let G=0;if(T){let V=!1;if(F!==null){const Se=F.texture.format;V=m.has(Se)}if(V){const Se=F.texture.type,Ee=d.has(Se),ye=se.getClearColor(),Ce=se.getClearAlpha(),Ne=ye.r,ke=ye.g,Ve=ye.b;Ee?(_[0]=Ne,_[1]=ke,_[2]=Ve,_[3]=Ce,U.clearBufferuiv(U.COLOR,0,_)):(E[0]=Ne,E[1]=ke,E[2]=Ve,E[3]=Ce,U.clearBufferiv(U.COLOR,0,E))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",tt,!1),se.dispose(),xe.dispose(),ge.dispose(),W.dispose(),fe.dispose(),re.dispose(),de.dispose(),ne.dispose(),me.dispose(),we.dispose(),we.removeEventListener("sessionstart",Uh),we.removeEventListener("sessionend",Fh),gr.stop()};function Re(T){T.preventDefault(),dm("WebGLRenderer: Context Lost."),L=!0}function Pe(){dm("WebGLRenderer: Context Restored."),L=!1;const T=k.autoReset,O=K.enabled,j=K.autoUpdate,G=K.needsUpdate,V=K.type;Ae(),k.autoReset=T,K.enabled=O,K.autoUpdate=j,K.needsUpdate=G,K.type=V}function tt(T){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Rn(T){const O=T.target;O.removeEventListener("dispose",Rn),Ec(O)}function Ec(T){ax(T),W.remove(T)}function ax(T){const O=W.get(T).programs;O!==void 0&&(O.forEach(function(j){me.releaseProgram(j)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,j,G,V,Se){O===null&&(O=Lt);const Ee=V.isMesh&&V.matrixWorld.determinantAffine()<0,ye=lx(T,O,j,G,V);M.setMaterial(G,Ee);let Ce=j.index,Ne=1;if(G.wireframe===!0){if(Ce=Q.getWireframeAttribute(j),Ce===void 0)return;Ne=2}const ke=j.drawRange,Ve=j.attributes.position;let De=ke.start*Ne,st=(ke.start+ke.count)*Ne;Se!==null&&(De=Math.max(De,Se.start*Ne),st=Math.min(st,(Se.start+Se.count)*Ne)),Ce!==null?(De=Math.max(De,0),st=Math.min(st,Ce.count)):Ve!=null&&(De=Math.max(De,0),st=Math.min(st,Ve.count));const At=st-De;if(At<0||At===1/0)return;de.setup(V,G,ye,j,Ce);let Et,ot=J;if(Ce!==null&&(Et=ve.get(Ce),ot=X,ot.setIndex(Et)),V.isMesh)G.wireframe===!0?(M.setLineWidth(G.wireframeLinewidth*gt()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(V.isLine){let qt=G.linewidth;qt===void 0&&(qt=1),M.setLineWidth(qt*gt()),V.isLineSegments?ot.setMode(U.LINES):V.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else V.isPoints?ot.setMode(U.POINTS):V.isSprite&&ot.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qt=V._multiDrawStarts,Me=V._multiDrawCounts,xn=V._multiDrawCount,Je=Ce?ve.get(Ce).bytesPerElement:1,Pn=W.get(G).currentProgram.getUniforms();for(let Jn=0;Jn<xn;Jn++)Pn.setValue(U,"_gl_DrawID",Jn),ot.render(qt[Jn]/Je,Me[Jn])}else if(V.isInstancedMesh)ot.renderInstances(De,At,V.count);else if(j.isInstancedBufferGeometry){const qt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Me=Math.min(j.instanceCount,qt);ot.renderInstances(De,At,Me)}else ot.render(De,At)};function Ih(T,O,j){T.transparent===!0&&T.side===Ei&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,oo(T,O,j),T.side=dr,T.needsUpdate=!0,oo(T,O,j),T.side=Ei):oo(T,O,j)}this.compile=function(T,O,j=null){j===null&&(j=T),w=ge.get(j),w.init(O),x.push(w),j.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),T!==j&&T.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const G=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Ee=0;Ee<Se.length;Ee++){const ye=Se[Ee];Ih(ye,j,V),G.add(ye)}else Ih(Se,j,V),G.add(Se)}),w=x.pop(),G},this.compileAsync=function(T,O,j=null){const G=this.compile(T,O,j);return new Promise(V=>{function Se(){if(G.forEach(function(Ee){W.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){V(T);return}setTimeout(Se,10)}nt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Tc=null;function sx(T){Tc&&Tc(T)}function Uh(){gr.stop()}function Fh(){gr.start()}const gr=new Z0;gr.setAnimationLoop(sx),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(T){Tc=T,we.setAnimationLoop(T),T===null?gr.stop():gr.start()},we.addEventListener("sessionstart",Uh),we.addEventListener("sessionend",Fh),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(T,O);const j=we.enabled===!0&&we.isPresenting===!0,G=A!==null&&(F===null||j)&&A.begin(N,F);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(O),O=we.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,O,F),w=ge.get(T,x.length),w.init(O),w.state.textureUnits=Z.getTextureUnits(),x.push(w),Mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),it.setFromProjectionMatrix(Mt,si,O.reversedDepth),ze=this.localClippingEnabled,Ke=R.init(this.clippingPlanes,ze),b=xe.get(T,C.length),b.init(),C.push(b),we.enabled===!0&&we.isPresenting===!0){const Ee=N.xr.getDepthSensingMesh();Ee!==null&&wc(Ee,O,-1/0,N.sortObjects)}wc(T,O,0,N.sortObjects),b.finish(),N.sortObjects===!0&&b.sort(Le,pe,O.reversedDepth),ht=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ht&&se.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&R.beginShadows();const V=w.state.shadowsArray;if(K.render(V,T,O),Ke===!0&&R.endShadows(),(G&&A.hasRenderPass())===!1){const Ee=b.opaque,ye=b.transmissive;if(w.setupLights(),O.isArrayCamera){const Ce=O.cameras;if(ye.length>0)for(let Ne=0,ke=Ce.length;Ne<ke;Ne++){const Ve=Ce[Ne];kh(Ee,ye,T,Ve)}ht&&se.render(T);for(let Ne=0,ke=Ce.length;Ne<ke;Ne++){const Ve=Ce[Ne];Oh(b,T,Ve,Ve.viewport)}}else ye.length>0&&kh(Ee,ye,T,O),ht&&se.render(T),Oh(b,T,O)}F!==null&&H===0&&(Z.updateMultisampleRenderTarget(F),Z.updateRenderTargetMipmap(F)),G&&A.end(N),T.isScene===!0&&T.onAfterRender(N,T,O),de.resetDefaultState(),Y=-1,ie=null,x.pop(),x.length>0?(w=x[x.length-1],Z.setTextureUnits(w.state.textureUnits),Ke===!0&&R.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,I!==null&&I.renderEnd()};function wc(T,O,j,G){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||it.intersectsSprite(T)){G&&Rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Mt);const Ee=re.update(T),ye=T.material;ye.visible&&b.push(T,Ee,ye,j,Rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||it.intersectsObject(T))){const Ee=re.update(T),ye=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Rt.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Rt.copy(Ee.boundingSphere.center)),Rt.applyMatrix4(T.matrixWorld).applyMatrix4(Mt)),Array.isArray(ye)){const Ce=Ee.groups;for(let Ne=0,ke=Ce.length;Ne<ke;Ne++){const Ve=Ce[Ne],De=ye[Ve.materialIndex];De&&De.visible&&b.push(T,Ee,De,j,Rt.z,Ve)}}else ye.visible&&b.push(T,Ee,ye,j,Rt.z,null)}}const Se=T.children;for(let Ee=0,ye=Se.length;Ee<ye;Ee++)wc(Se[Ee],O,j,G)}function Oh(T,O,j,G){const{opaque:V,transmissive:Se,transparent:Ee}=T;w.setupLightsView(j),Ke===!0&&R.setGlobalState(N.clippingPlanes,j),G&&M.viewport(oe.copy(G)),V.length>0&&so(V,O,j),Se.length>0&&so(Se,O,j),Ee.length>0&&so(Ee,O,j),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function kh(T,O,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const De=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new ui(1,1,{generateMipmaps:!0,type:De?Ii:En,minFilter:Nr,samples:Math.max(4,P.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const Se=w.state.transmissionRenderTarget[G.id],Ee=G.viewport||oe;Se.setSize(Ee.z*N.transmissionResolutionScale,Ee.w*N.transmissionResolutionScale);const ye=N.getRenderTarget(),Ce=N.getActiveCubeFace(),Ne=N.getActiveMipmapLevel();N.setRenderTarget(Se),N.getClearColor(Ye),We=N.getClearAlpha(),We<1&&N.setClearColor(16777215,.5),N.clear(),ht&&se.render(j);const ke=N.toneMapping;N.toneMapping=ci;const Ve=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Ke===!0&&R.setGlobalState(N.clippingPlanes,G),so(T,j,G),Z.updateMultisampleRenderTarget(Se),Z.updateRenderTargetMipmap(Se),nt.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let st=0,At=O.length;st<At;st++){const Et=O[st],{object:ot,geometry:qt,material:Me,group:xn}=Et;if(Me.side===Ei&&ot.layers.test(G.layers)){const Je=Me.side;Me.side=vn,Me.needsUpdate=!0,Bh(ot,j,G,qt,Me,xn),Me.side=Je,Me.needsUpdate=!0,De=!0}}De===!0&&(Z.updateMultisampleRenderTarget(Se),Z.updateRenderTargetMipmap(Se))}N.setRenderTarget(ye,Ce,Ne),N.setClearColor(Ye,We),Ve!==void 0&&(G.viewport=Ve),N.toneMapping=ke}function so(T,O,j){const G=O.isScene===!0?O.overrideMaterial:null;for(let V=0,Se=T.length;V<Se;V++){const Ee=T[V],{object:ye,geometry:Ce,group:Ne}=Ee;let ke=Ee.material;ke.allowOverride===!0&&G!==null&&(ke=G),ye.layers.test(j.layers)&&Bh(ye,O,j,Ce,ke,Ne)}}function Bh(T,O,j,G,V,Se){T.onBeforeRender(N,O,j,G,V,Se),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(N,O,j,G,T,Se),V.transparent===!0&&V.side===Ei&&V.forceSinglePass===!1?(V.side=vn,V.needsUpdate=!0,N.renderBufferDirect(j,O,G,V,T,Se),V.side=dr,V.needsUpdate=!0,N.renderBufferDirect(j,O,G,V,T,Se),V.side=Ei):N.renderBufferDirect(j,O,G,V,T,Se),T.onAfterRender(N,O,j,G,V,Se)}function oo(T,O,j){O.isScene!==!0&&(O=Lt);const G=W.get(T),V=w.state.lights,Se=w.state.shadowsArray,Ee=V.state.version,ye=me.getParameters(T,V.state,Se,O,j,w.state.lightProbeGridArray),Ce=me.getProgramCacheKey(ye);let Ne=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=fe.get(T.envMap||G.environment,ke),G.envMapRotation=G.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Rn),Ne=new Map,G.programs=Ne);let Ve=Ne.get(Ce);if(Ve!==void 0){if(G.currentProgram===Ve&&G.lightsStateVersion===Ee)return Hh(T,ye),Ve}else ye.uniforms=me.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,j,ye),T.onBeforeCompile(ye,N),Ve=me.acquireProgram(ye,Ce),Ne.set(Ce,Ve),G.uniforms=ye.uniforms;const De=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=R.uniform),Hh(T,ye),G.needsLights=ux(T),G.lightsStateVersion=Ee,G.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=Ve,G.uniformsList=null,Ve}function zh(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=yl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Hh(T,O){const j=W.get(T);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function ox(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let j=0,G=T.length;j<G;j++){const V=T[j];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function lx(T,O,j,G,V){O.isScene!==!0&&(O=Lt),Z.resetTextureUnits();const Se=O.fog,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,ye=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:$e.workingColorSpace,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=fe.get(G.envMap||Ee,Ce),ke=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!j.morphAttributes.position,st=!!j.morphAttributes.normal,At=!!j.morphAttributes.color;let Et=ci;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Et=N.toneMapping);const ot=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,qt=ot!==void 0?ot.length:0,Me=W.get(G),xn=w.state.lights;if(Ke===!0&&(ze===!0||T!==ie)){const ct=T===ie&&G.id===Y;R.setState(G,T,ct)}let Je=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==xn.state.version||Me.outputColorSpace!==ye||V.isBatchedMesh&&Me.batching===!1||!V.isBatchedMesh&&Me.batching===!0||V.isBatchedMesh&&Me.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Me.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Me.instancing===!1||!V.isInstancedMesh&&Me.instancing===!0||V.isSkinnedMesh&&Me.skinning===!1||!V.isSkinnedMesh&&Me.skinning===!0||V.isInstancedMesh&&Me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Me.instancingMorph===!1&&V.morphTexture!==null||Me.envMap!==Ne||G.fog===!0&&Me.fog!==Se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==R.numPlanes||Me.numIntersection!==R.numIntersection)||Me.vertexAlphas!==ke||Me.vertexTangents!==Ve||Me.morphTargets!==De||Me.morphNormals!==st||Me.morphColors!==At||Me.toneMapping!==Et||Me.morphTargetsCount!==qt||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,Me.__version=G.version);let Pn=Me.currentProgram;Je===!0&&(Pn=oo(G,O,V),I&&G.isNodeMaterial&&I.onUpdateProgram(G,Pn,Me));let Jn=!1,Oi=!1,jr=!1;const lt=Pn.getUniforms(),bt=Me.uniforms;if(M.useProgram(Pn.program)&&(Jn=!0,Oi=!0,jr=!0),G.id!==Y&&(Y=G.id,Oi=!0),Me.needsLights){const ct=ox(w.state.lightProbeGridArray,V);Me.lightProbeGrid!==ct&&(Me.lightProbeGrid=ct,Oi=!0)}if(Jn||ie!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),lt.setValue(U,"projectionMatrix",T.projectionMatrix),lt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Bi=lt.map.cameraPosition;Bi!==void 0&&Bi.setValue(U,wt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),ie!==T&&(ie=T,Oi=!0,jr=!0)}if(Me.needsLights&&(xn.state.directionalShadowMap.length>0&&lt.setValue(U,"directionalShadowMap",xn.state.directionalShadowMap,Z),xn.state.spotShadowMap.length>0&&lt.setValue(U,"spotShadowMap",xn.state.spotShadowMap,Z),xn.state.pointShadowMap.length>0&&lt.setValue(U,"pointShadowMap",xn.state.pointShadowMap,Z)),V.isSkinnedMesh){lt.setOptional(U,V,"bindMatrix"),lt.setOptional(U,V,"bindMatrixInverse");const ct=V.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),lt.setValue(U,"boneTexture",ct.boneTexture,Z))}V.isBatchedMesh&&(lt.setOptional(U,V,"batchingTexture"),lt.setValue(U,"batchingTexture",V._matricesTexture,Z),lt.setOptional(U,V,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",V._indirectTexture,Z),lt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",V._colorsTexture,Z));const ki=j.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&D.update(V,j,Pn),(Oi||Me.receiveShadow!==V.receiveShadow)&&(Me.receiveShadow=V.receiveShadow,lt.setValue(U,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(bt.envMapIntensity.value=O.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=LA()),Oi){if(lt.setValue(U,"toneMappingExposure",N.toneMappingExposure),Me.needsLights&&cx(bt,jr),Se&&G.fog===!0&&be.refreshFogUniforms(bt,Se),be.refreshMaterialUniforms(bt,G,le,he,w.state.transmissionRenderTarget[T.id]),Me.needsLights&&Me.lightProbeGrid){const ct=Me.lightProbeGrid;bt.probesSH.value=ct.texture,bt.probesMin.value.copy(ct.boundingBox.min),bt.probesMax.value.copy(ct.boundingBox.max),bt.probesResolution.value.copy(ct.resolution)}yl.upload(U,zh(Me),bt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(yl.upload(U,zh(Me),bt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(U,"center",V.center),lt.setValue(U,"modelViewMatrix",V.modelViewMatrix),lt.setValue(U,"normalMatrix",V.normalMatrix),lt.setValue(U,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const ct=G.uniformsGroups;for(let Bi=0,Xr=ct.length;Bi<Xr;Bi++){const Gh=ct[Bi];ne.update(Gh,Pn),ne.bind(Gh,Pn)}}return Pn}function cx(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function ux(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,O,j){const G=W.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(T.texture).__webglTexture=O,W.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:j,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const j=W.get(T);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,j=0){F=T,$=O,H=j;let G=null,V=!1,Se=!1;if(T){const ye=W.get(T);if(ye.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(U.FRAMEBUFFER,ye.__webglFramebuffer),oe.copy(T.viewport),ue.copy(T.scissor),Be=T.scissorTest,M.viewport(oe),M.scissor(ue),M.setScissorTest(Be),Y=-1;return}else if(ye.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(ye.__hasExternalTextures)Z.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(ye.__boundDepthTexture!==ke){if(ke!==null&&W.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Se=!0);const Ne=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?G=Ne[O][j]:G=Ne[O],V=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?G=W.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[j]:G=Ne,oe.copy(T.viewport),ue.copy(T.scissor),Be=T.scissorTest}else oe.copy(Ie).multiplyScalar(le).floor(),ue.copy(mt).multiplyScalar(le).floor(),Be=Ge;if(j!==0&&(G=q),M.bindFramebuffer(U.FRAMEBUFFER,G)&&M.drawBuffers(T,G),M.viewport(oe),M.scissor(ue),M.setScissorTest(Be),V){const ye=W.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,j)}else if(Se){const ye=O;for(let Ce=0;Ce<T.textures.length;Ce++){const Ne=W.get(T.textures[Ce]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ce,Ne.__webglTexture,j,ye)}}else if(T!==null&&j!==0){const ye=W.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,j)}Y=-1},this.readRenderTargetPixels=function(T,O,j,G,V,Se,Ee,ye=0){if(!(T&&T.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){M.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Ne=T.textures[ye],ke=Ne.format,Ve=Ne.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye),!P.textureFormatReadable(ke)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Ve)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-G&&j>=0&&j<=T.height-V&&U.readPixels(O,j,G,V,ae.convert(ke),ae.convert(Ve),Se)}finally{const Ne=F!==null?W.get(F).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,O,j,G,V,Se,Ee,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(O>=0&&O<=T.width-G&&j>=0&&j<=T.height-V){M.bindFramebuffer(U.FRAMEBUFFER,Ce);const Ne=T.textures[ye],ke=Ne.format,Ve=Ne.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye),!P.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,De),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(O,j,G,V,ae.convert(ke),ae.convert(Ve),0);const st=F!==null?W.get(F).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,st);const At=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await IS(U,At,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,De),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.deleteBuffer(De),U.deleteSync(At),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,j=0){const G=Math.pow(2,-j),V=Math.floor(T.image.width*G),Se=Math.floor(T.image.height*G),Ee=O!==null?O.x:0,ye=O!==null?O.y:0;Z.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Ee,ye,V,Se),M.unbindTexture()},this.copyTextureToTexture=function(T,O,j=null,G=null,V=0,Se=0){let Ee,ye,Ce,Ne,ke,Ve,De,st,At;const Et=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(j!==null)Ee=j.max.x-j.min.x,ye=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,ke=j.min.y,Ve=j.isBox3?j.min.z:0;else{const bt=Math.pow(2,-V);Ee=Math.floor(Et.width*bt),ye=Math.floor(Et.height*bt),T.isDataArrayTexture?Ce=Et.depth:T.isData3DTexture?Ce=Math.floor(Et.depth*bt):Ce=1,Ne=0,ke=0,Ve=0}G!==null?(De=G.x,st=G.y,At=G.z):(De=0,st=0,At=0);const ot=ae.convert(O.format),qt=ae.convert(O.type);let Me;O.isData3DTexture?(Z.setTexture3D(O,0),Me=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Z.setTexture2DArray(O,0),Me=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(O,0),Me=U.TEXTURE_2D),M.activeTexture(U.TEXTURE0),M.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const xn=M.getParameter(U.UNPACK_ROW_LENGTH),Je=M.getParameter(U.UNPACK_IMAGE_HEIGHT),Pn=M.getParameter(U.UNPACK_SKIP_PIXELS),Jn=M.getParameter(U.UNPACK_SKIP_ROWS),Oi=M.getParameter(U.UNPACK_SKIP_IMAGES);M.pixelStorei(U.UNPACK_ROW_LENGTH,Et.width),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et.height),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),M.pixelStorei(U.UNPACK_SKIP_ROWS,ke),M.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const jr=T.isDataArrayTexture||T.isData3DTexture,lt=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const bt=W.get(T),ki=W.get(O),ct=W.get(bt.__renderTarget),Bi=W.get(ki.__renderTarget);M.bindFramebuffer(U.READ_FRAMEBUFFER,ct.__webglFramebuffer),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Xr=0;Xr<Ce;Xr++)jr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(T).__webglTexture,V,Ve+Xr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(O).__webglTexture,Se,At+Xr)),U.blitFramebuffer(Ne,ke,Ee,ye,De,st,Ee,ye,U.DEPTH_BUFFER_BIT,U.NEAREST);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||W.has(T)){const bt=W.get(T),ki=W.get(O);M.bindFramebuffer(U.READ_FRAMEBUFFER,te),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let ct=0;ct<Ce;ct++)jr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,V,Ve+ct):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,V),lt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ki.__webglTexture,Se,At+ct):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ki.__webglTexture,Se),V!==0?U.blitFramebuffer(Ne,ke,Ee,ye,De,st,Ee,ye,U.COLOR_BUFFER_BIT,U.NEAREST):lt?U.copyTexSubImage3D(Me,Se,De,st,At+ct,Ne,ke,Ee,ye):U.copyTexSubImage2D(Me,Se,De,st,Ne,ke,Ee,ye);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else lt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Me,Se,De,st,At,Ee,ye,Ce,ot,qt,Et.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,Se,De,st,At,Ee,ye,Ce,ot,Et.data):U.texSubImage3D(Me,Se,De,st,At,Ee,ye,Ce,ot,qt,Et):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,De,st,Ee,ye,ot,qt,Et.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,De,st,Et.width,Et.height,ot,Et.data):U.texSubImage2D(U.TEXTURE_2D,Se,De,st,Ee,ye,ot,qt,Et);M.pixelStorei(U.UNPACK_ROW_LENGTH,xn),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Pn),M.pixelStorei(U.UNPACK_SKIP_ROWS,Jn),M.pixelStorei(U.UNPACK_SKIP_IMAGES,Oi),Se===0&&O.generateMipmaps&&U.generateMipmap(Me),M.unbindTexture()},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){$=0,H=0,F=null,M.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}const UA=({animationData:t})=>{const[e,n]=Fe.useState(1),[i,r]=Fe.useState(!0),[a,s]=Fe.useState(!1),[o,l]=Fe.useState([]),c=Fe.useRef(null);if(Fe.useEffect(()=>{if(!t||!c.current)return;const f=c.current,u=260,v=260,y=new dM,m=new Mn(45,u/v,.1,1e3);m.position.z=6;const d=new IA({canvas:f,alpha:!0,antialias:!0,powerPreference:"high-performance"});d.setSize(u,v),d.setPixelRatio(Math.min(window.devicePixelRatio,2));const _=new FM(16774634,.8);y.add(_);const E=new Fm(16770484,2.2);E.position.set(5,8,5),y.add(E);const S=new Fm(13214247,1.2);S.position.set(-5,-4,-3),y.add(S);const b=new IM(t.crit==="crit"?16096779:t.crit==="fail"?15680580:13214247,3,12);b.position.set(0,0,3),y.add(b);let w;switch(t.dieType){case"d20":w=new Ql(1.5,0);break;case"d12":w=new wh(1.5,0);break;case"d10":case"d100":w=new ec(1.5,0),w.scale(1,1.35,1);break;case"d8":w=new ec(1.5,0);break;case"d6":w=new Ya(2,2,2);break;case"d4":w=new Ah(1.6,0);break;default:w=new Ql(1.5,0)}const x=new PM({color:1906450,roughness:.3,metalness:.7,flatShading:!0}),A=new hi(w,x);y.add(A);const N=new TM(w),L=new j0({color:t.crit==="crit"?16498468:t.crit==="fail"?15680580:13938487,linewidth:2}),I=new MM(N,L);A.add(I);let q,te=!0,z=.18+Math.random()*.1,$=.22+Math.random()*.1,H=.14+Math.random()*.1,F=0;const Y=()=>{te?(A.rotation.x+=z,A.rotation.y+=$,A.rotation.z+=H,F+=.08,A.position.y=Math.sin(F)*.35,A.position.z=Math.cos(F)*.25,z*=.992,$*=.992,H*=.992):(A.rotation.x=ss.lerp(A.rotation.x,.2,.15),A.rotation.y=ss.lerp(A.rotation.y,0,.15),A.rotation.z=ss.lerp(A.rotation.z,0,.15),A.position.y=ss.lerp(A.position.y,0,.2),A.position.z=ss.lerp(A.position.z,.5,.2)),d.render(y,m),q=requestAnimationFrame(Y)};return Y(),()=>{te=!1,cancelAnimationFrame(q),w.dispose(),x.dispose(),N.dispose(),L.dispose(),d.dispose()}},[t]),Fe.useEffect(()=>{if(!t)return;r(!0),s(!1),l([]);const u={d20:20,d12:12,d10:10,d8:8,d6:6,d4:4,d100:100}[t.dieType]||20;let v=35,y;const m=()=>{n(Math.floor(Math.random()*u)+1),v=Math.min(v*1.07,130),y=setTimeout(m,v)};y=setTimeout(m,v);const d=setTimeout(()=>{clearTimeout(y),n(t.finalResult),r(!1),s(!0);const _=t.crit==="crit",E=t.crit==="fail",S=_?32:E?24:18,b=_?["#f59e0b","#fbbf24","#fef08a","#ffffff"]:E?["#ef4444","#b91c1c","#7f1d1d","#15130f"]:["#c9a227","#e7dcc0","#d4af37","#f4e09a"],w=Array.from({length:S}).map((x,A)=>{const N=A/S*2*Math.PI+(Math.random()-.5)*.4,L=70+Math.random()*120;return{id:A,tx:Math.cos(N)*L,ty:Math.sin(N)*L,size:4+Math.random()*7,color:b[Math.floor(Math.random()*b.length)],delay:Math.random()*.08}});l(w);const C=setTimeout(()=>{t.onComplete()},1400);return()=>clearTimeout(C)},1100);return()=>{clearTimeout(y),clearTimeout(d)}},[t]),!t)return null;const p=t.crit==="crit",g=t.crit==="fail";return h.jsx("div",{className:"dice-overlay",onClick:()=>!i&&t.onComplete(),children:h.jsxs("div",{className:`dice-modal ${i?"rolling":"settled"} ${a?"impact-shake":""} ${p?"crit-glow":""} ${g?"fail-glow":""}`,children:[h.jsx("div",{className:"dice-modal-header",children:t.label}),h.jsx("div",{className:`runic-circle-container ${i?"spinning":"glow-pulse"}`,children:h.jsxs("svg",{viewBox:"0 0 200 200",className:"runic-circle-svg",children:[h.jsx("circle",{cx:"100",cy:"100",r:"92",fill:"none",stroke:"var(--brass)",strokeWidth:"1.2",strokeDasharray:"6 4",opacity:"0.4"}),h.jsx("circle",{cx:"100",cy:"100",r:"82",fill:"none",stroke:"var(--brass-dim)",strokeWidth:"1",opacity:"0.3"}),h.jsx("circle",{cx:"100",cy:"100",r:"70",fill:"none",stroke:"var(--brass)",strokeWidth:"0.8",strokeDasharray:"12 8 4 8",opacity:"0.5"}),h.jsxs("g",{fill:"var(--brass)",opacity:"0.6",children:[h.jsx("polygon",{points:"100,6 104,14 96,14"}),h.jsx("polygon",{points:"100,194 104,186 96,186"}),h.jsx("polygon",{points:"6,100 14,104 14,96"}),h.jsx("polygon",{points:"194,100 186,104 186,96"}),h.jsx("circle",{cx:"34",cy:"34",r:"3"}),h.jsx("circle",{cx:"166",cy:"34",r:"3"}),h.jsx("circle",{cx:"34",cy:"166",r:"3"}),h.jsx("circle",{cx:"166",cy:"166",r:"3"})]})]})}),h.jsxs("div",{className:"webgl-die-stage",children:[h.jsx("div",{className:`die-shadow ${i?"tumbling-shadow":"settled-shadow"}`}),h.jsx("canvas",{ref:c,className:"webgl-canvas"}),h.jsx("div",{className:"webgl-num-overlay",children:h.jsx("span",{className:`die-number ${i?"blur-num":"final-num"} ${p?"crit-num":""} ${g?"fail-num":""}`,children:e})}),a&&h.jsx("div",{className:`die-shockwave ${p?"crit-wave":g?"fail-wave":""}`}),h.jsx("div",{className:"particle-container",children:o.map(f=>h.jsx("span",{className:"spark-particle",style:{backgroundColor:f.color,width:`${f.size}px`,height:`${f.size}px`,boxShadow:`0 0 8px ${f.color}`,animationDelay:`${f.delay}s`,transform:`translate(${f.tx}px, ${f.ty}px) scale(0)`}},f.id))})]}),!i&&h.jsxs("div",{className:"dice-modal-result",children:[t.rolls.length>1&&h.jsxs("div",{className:"dice-rolls-list",children:["Tiradas: [",t.rolls.join(", "),"]"]}),t.total!==void 0&&t.total!==t.finalResult?h.jsxs("div",{className:"dice-total-box",children:["Resultado final: ",h.jsx("strong",{children:t.total})]}):h.jsxs("div",{className:"dice-total-box",children:["Dado: ",h.jsx("strong",{children:t.finalResult})]}),p&&h.jsx("div",{className:"crit-badge",children:"✨ ¡20 NATURAL! ✨"}),g&&h.jsx("div",{className:"fail-badge",children:"💀 ¡1 NATURAL! 💀"}),h.jsx("div",{className:"click-hint",children:"Toca cualquier parte para continuar"})]})]})})},Iu="campaign:main";function FA(){const[t,e]=Fe.useState(jl()),[n,i]=Fe.useState([]),[r,a]=Fe.useState(""),[s,o]=Fe.useState(!1),[l,c]=Fe.useState([]),[p,g]=Fe.useState(!1),[f,u]=Fe.useState(null);Fe.useEffect(()=>{try{const x=localStorage.getItem(Iu);if(x){const A=JSON.parse(x);A&&A.started&&(e(A.character),i(A.log||[]),a(A.worldMemory||""),o(!0))}}catch(x){console.error("Error cargando el estado:",x)}},[]);const v=(x,A,N,L)=>{try{const I={character:x,log:A,worldMemory:N,started:L};localStorage.setItem(Iu,JSON.stringify(I))}catch(I){console.error("Error guardando el estado:",I)}},y=(x,A,N)=>{const L=[{role:"dm",text:A,rolls:[]}];e(x),i(L),a(N),o(!0),c([]),v(x,L,N,!0)},m=x=>{e(x),v(x,n,r,s)},d=x=>{c(A=>[...A,x])},_=x=>{u({...x,onComplete:()=>{x.onComplete(),u(null)}})},E=(x,A)=>{const N=t.proficientSkills.includes(x),L=Nt(t.abilities[A]),I=N?Si(t.level):0,{result:q}=xs({}),te=q+L+I,z=q===20?" (¡20 natural!)":q===1?" (1 natural)":"",$=q===20?"crit":q===1?"fail":"";_({dieType:"d20",label:`Prueba de ${x}`,rolls:[q],finalResult:q,mod:L+I,total:te,crit:$,onComplete:()=>{d({text:`🎲 ${x}: [${q}] ${dn(L)}(${A.toUpperCase()})${N?dn(I)+"(comp)":""} = ${te}${z}`,cls:$})}})},S=(x,A)=>{const N=(x||"").trim().toLowerCase();let L="";return N.includes("ataco")||N.includes("combato")||N.includes("espada")||N.includes("arco")?L=`La tensión se vuelve palpable. El entorno responde con una amenaza concreta y el peligro se cierne sobre ${t.name||"tu personaje"}.`:N.includes("investigo")||N.includes("buscar")||N.includes("exploro")||N.includes("miro")?L="El lugar revela un detalle escondido. La pista es pequeña, pero suficiente para alterar la ruta de la campaña.":N.includes("hablo")||N.includes("negocio")||N.includes("dialogo")||N.includes("pregunto")?L="El encuentro se vuelve político y cargado de intención. Un rostro nuevo recuerda tu nombre y lo guarda para más tarde.":L=`La escena avanza con un nuevo giro. El mundo no se queda inmóvil y ${t.name||"tu personaje"} deja una marca en la memoria del lugar.`,A.length>0&&(L+=`

Tiradas registradas: ${A.join(" | ")}`),L},b=async x=>{const A=x.trim();if(!A&&l.length===0)return;const N=l.map(q=>q.text),L={role:"player",text:A||"(acción implícita en la tirada)",rolls:N},I=[...n,L];i(I),c([]),g(!0),setTimeout(async()=>{const te={role:"dm",text:S(A,N),rolls:[]},z=[...I,te];i(z),g(!1),v(t,z,r,s)},700)},w=()=>{if(n.length<3)return;const x=`${r}

Resumen reciente: ${n.slice(-6).map(A=>A.text).join(" / ")}`;a(x),v(t,n,x,s),alert("Crónica resumida y guardada en la memoria del mundo.")},C=()=>{if(!confirm("Esto borra el personaje y la crónica guardados. ¿Continuar?"))return;const x=jl();e(x),i([]),a(""),o(!1),c([]),localStorage.removeItem(Iu)};return h.jsxs("div",{className:"app-container",children:[h.jsx(Yy,{onSummarize:w,onReset:C}),h.jsx(UA,{animationData:f}),s?h.jsxs("div",{className:"layout",children:[h.jsx(Zy,{character:t,onUpdateCharacter:m,onQuickSkillRoll:E}),h.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[h.jsx(Qy,{characterName:t.name,log:n,isThinking:p,onSendTurn:b}),h.jsx(Jy,{character:t,pendingRolls:l,onAddPendingRoll:d,onTriggerAnimation:_})]})]}):h.jsx(Ky,{onCreateCharacter:y})]})}const lg=document.getElementById("root");lg&&Uu.createRoot(lg).render(h.jsx(bx.StrictMode,{children:h.jsx(FA,{})}));
