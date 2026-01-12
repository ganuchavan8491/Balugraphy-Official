(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var ad={exports:{}},Yo={},od={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Gy(){if(rg)return ht;rg=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(O,se,Ae){this.props=O,this.context=se,this.refs=M,this.updater=Ae||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,se){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,se,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=S.prototype;function R(O,se,Ae){this.props=O,this.context=se,this.refs=M,this.updater=Ae||y}var L=R.prototype=new x;L.constructor=R,E(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,b=Object.prototype.hasOwnProperty,N={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function k(O,se,Ae){var Ue,Be={},oe=null,de=null;if(se!=null)for(Ue in se.ref!==void 0&&(de=se.ref),se.key!==void 0&&(oe=""+se.key),se)b.call(se,Ue)&&!I.hasOwnProperty(Ue)&&(Be[Ue]=se[Ue]);var Se=arguments.length-2;if(Se===1)Be.children=Ae;else if(1<Se){for(var ze=Array(Se),Ie=0;Ie<Se;Ie++)ze[Ie]=arguments[Ie+2];Be.children=ze}if(O&&O.defaultProps)for(Ue in Se=O.defaultProps,Se)Be[Ue]===void 0&&(Be[Ue]=Se[Ue]);return{$$typeof:a,type:O,key:oe,ref:de,props:Be,_owner:N.current}}function T(O,se){return{$$typeof:a,type:O.type,key:se,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function B(O){var se={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ae){return se[Ae]})}var X=/\/+/g;function W(O,se){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):se.toString(36)}function ne(O,se,Ae,Ue,Be){var oe=typeof O;(oe==="undefined"||oe==="boolean")&&(O=null);var de=!1;if(O===null)de=!0;else switch(oe){case"string":case"number":de=!0;break;case"object":switch(O.$$typeof){case a:case e:de=!0}}if(de)return de=O,Be=Be(de),O=Ue===""?"."+W(de,0):Ue,C(Be)?(Ae="",O!=null&&(Ae=O.replace(X,"$&/")+"/"),ne(Be,se,Ae,"",function(Ie){return Ie})):Be!=null&&(P(Be)&&(Be=T(Be,Ae+(!Be.key||de&&de.key===Be.key?"":(""+Be.key).replace(X,"$&/")+"/")+O)),se.push(Be)),1;if(de=0,Ue=Ue===""?".":Ue+":",C(O))for(var Se=0;Se<O.length;Se++){oe=O[Se];var ze=Ue+W(oe,Se);de+=ne(oe,se,Ae,ze,Be)}else if(ze=g(O),typeof ze=="function")for(O=ze.call(O),Se=0;!(oe=O.next()).done;)oe=oe.value,ze=Ue+W(oe,Se++),de+=ne(oe,se,Ae,ze,Be);else if(oe==="object")throw se=String(O),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return de}function te(O,se,Ae){if(O==null)return O;var Ue=[],Be=0;return ne(O,Ue,"","",function(oe){return se.call(Ae,oe,Be++)}),Ue}function Q(O){if(O._status===-1){var se=O._result;se=se(),se.then(function(Ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ae)},function(Ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ae)}),O._status===-1&&(O._status=0,O._result=se)}if(O._status===1)return O._result.default;throw O._result}var q={current:null},j={transition:null},fe={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:j,ReactCurrentOwner:N};function ae(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:te,forEach:function(O,se,Ae){te(O,function(){se.apply(this,arguments)},Ae)},count:function(O){var se=0;return te(O,function(){se++}),se},toArray:function(O){return te(O,function(se){return se})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ht.Component=S,ht.Fragment=t,ht.Profiler=s,ht.PureComponent=R,ht.StrictMode=i,ht.Suspense=d,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,ht.act=ae,ht.cloneElement=function(O,se,Ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ue=E({},O.props),Be=O.key,oe=O.ref,de=O._owner;if(se!=null){if(se.ref!==void 0&&(oe=se.ref,de=N.current),se.key!==void 0&&(Be=""+se.key),O.type&&O.type.defaultProps)var Se=O.type.defaultProps;for(ze in se)b.call(se,ze)&&!I.hasOwnProperty(ze)&&(Ue[ze]=se[ze]===void 0&&Se!==void 0?Se[ze]:se[ze])}var ze=arguments.length-2;if(ze===1)Ue.children=Ae;else if(1<ze){Se=Array(ze);for(var Ie=0;Ie<ze;Ie++)Se[Ie]=arguments[Ie+2];Ue.children=Se}return{$$typeof:a,type:O.type,key:Be,ref:oe,props:Ue,_owner:de}},ht.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},ht.createElement=k,ht.createFactory=function(O){var se=k.bind(null,O);return se.type=O,se},ht.createRef=function(){return{current:null}},ht.forwardRef=function(O){return{$$typeof:c,render:O}},ht.isValidElement=P,ht.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:Q}},ht.memo=function(O,se){return{$$typeof:h,type:O,compare:se===void 0?null:se}},ht.startTransition=function(O){var se=j.transition;j.transition={};try{O()}finally{j.transition=se}},ht.unstable_act=ae,ht.useCallback=function(O,se){return q.current.useCallback(O,se)},ht.useContext=function(O){return q.current.useContext(O)},ht.useDebugValue=function(){},ht.useDeferredValue=function(O){return q.current.useDeferredValue(O)},ht.useEffect=function(O,se){return q.current.useEffect(O,se)},ht.useId=function(){return q.current.useId()},ht.useImperativeHandle=function(O,se,Ae){return q.current.useImperativeHandle(O,se,Ae)},ht.useInsertionEffect=function(O,se){return q.current.useInsertionEffect(O,se)},ht.useLayoutEffect=function(O,se){return q.current.useLayoutEffect(O,se)},ht.useMemo=function(O,se){return q.current.useMemo(O,se)},ht.useReducer=function(O,se,Ae){return q.current.useReducer(O,se,Ae)},ht.useRef=function(O){return q.current.useRef(O)},ht.useState=function(O){return q.current.useState(O)},ht.useSyncExternalStore=function(O,se,Ae){return q.current.useSyncExternalStore(O,se,Ae)},ht.useTransition=function(){return q.current.useTransition()},ht.version="18.3.1",ht}var sg;function sp(){return sg||(sg=1,od.exports=Gy()),od.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Wy(){if(ag)return Yo;ag=1;var a=sp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,_={},g=null,y=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)i.call(d,p)&&!o.hasOwnProperty(p)&&(_[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)_[p]===void 0&&(_[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:y,props:_,_owner:s.current}}return Yo.Fragment=t,Yo.jsx=u,Yo.jsxs=u,Yo}var og;function Xy(){return og||(og=1,ad.exports=Wy()),ad.exports}var K=Xy(),Iu={},ld={exports:{}},Zn={},ud={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function jy(){return lg||(lg=1,(function(a){function e(j,fe){var ae=j.length;j.push(fe);e:for(;0<ae;){var O=ae-1>>>1,se=j[O];if(0<s(se,fe))j[O]=fe,j[ae]=se,ae=O;else break e}}function t(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var fe=j[0],ae=j.pop();if(ae!==fe){j[0]=ae;e:for(var O=0,se=j.length,Ae=se>>>1;O<Ae;){var Ue=2*(O+1)-1,Be=j[Ue],oe=Ue+1,de=j[oe];if(0>s(Be,ae))oe<se&&0>s(de,Be)?(j[O]=de,j[oe]=ae,O=oe):(j[O]=Be,j[Ue]=ae,O=Ue);else if(oe<se&&0>s(de,ae))j[O]=de,j[oe]=ae,O=oe;else break e}}return fe}function s(j,fe){var ae=j.sortIndex-fe.sortIndex;return ae!==0?ae:j.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();a.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,_=null,g=3,y=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(j){for(var fe=t(h);fe!==null;){if(fe.callback===null)i(h);else if(fe.startTime<=j)i(h),fe.sortIndex=fe.expirationTime,e(d,fe);else break;fe=t(h)}}function C(j){if(M=!1,L(j),!E)if(t(d)!==null)E=!0,Q(b);else{var fe=t(h);fe!==null&&q(C,fe.startTime-j)}}function b(j,fe){E=!1,M&&(M=!1,x(k),k=-1),y=!0;var ae=g;try{for(L(fe),_=t(d);_!==null&&(!(_.expirationTime>fe)||j&&!B());){var O=_.callback;if(typeof O=="function"){_.callback=null,g=_.priorityLevel;var se=O(_.expirationTime<=fe);fe=a.unstable_now(),typeof se=="function"?_.callback=se:_===t(d)&&i(d),L(fe)}else i(d);_=t(d)}if(_!==null)var Ae=!0;else{var Ue=t(h);Ue!==null&&q(C,Ue.startTime-fe),Ae=!1}return Ae}finally{_=null,g=ae,y=!1}}var N=!1,I=null,k=-1,T=5,P=-1;function B(){return!(a.unstable_now()-P<T)}function X(){if(I!==null){var j=a.unstable_now();P=j;var fe=!0;try{fe=I(!0,j)}finally{fe?W():(N=!1,I=null)}}else N=!1}var W;if(typeof R=="function")W=function(){R(X)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,te=ne.port2;ne.port1.onmessage=X,W=function(){te.postMessage(null)}}else W=function(){S(X,0)};function Q(j){I=j,N||(N=!0,W())}function q(j,fe){k=S(function(){j(a.unstable_now())},fe)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(j){j.callback=null},a.unstable_continueExecution=function(){E||y||(E=!0,Q(b))},a.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_getFirstCallbackNode=function(){return t(d)},a.unstable_next=function(j){switch(g){case 1:case 2:case 3:var fe=3;break;default:fe=g}var ae=g;g=fe;try{return j()}finally{g=ae}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(j,fe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ae=g;g=j;try{return fe()}finally{g=ae}},a.unstable_scheduleCallback=function(j,fe,ae){var O=a.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?O+ae:O):ae=O,j){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ae+se,j={id:p++,callback:fe,priorityLevel:j,startTime:ae,expirationTime:se,sortIndex:-1},ae>O?(j.sortIndex=ae,e(h,j),t(d)===null&&j===t(h)&&(M?(x(k),k=-1):M=!0,q(C,ae-O))):(j.sortIndex=se,e(d,j),E||y||(E=!0,Q(b))),j},a.unstable_shouldYield=B,a.unstable_wrapCallback=function(j){var fe=g;return function(){var ae=g;g=fe;try{return j.apply(this,arguments)}finally{g=ae}}}})(cd)),cd}var ug;function Yy(){return ug||(ug=1,ud.exports=jy()),ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function qy(){if(cg)return Zn;cg=1;var a=sp(),e=Yy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function g(n){return d.call(_,n)?!0:d.call(p,n)?!1:h.test(n)?_[n]=!0:(p[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,v,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,R);S[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,R);S[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,R);S[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,f){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var C=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),N=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),B=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),j=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,O;function se(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Ae=!1;function Ue(n,r){if(!n||Ae)return"";Ae=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(le){var f=le}Reflect.construct(n,[],r)}else{try{r.call()}catch(le){f=le}n.call(r.prototype)}else{try{throw Error()}catch(le){f=le}n()}}catch(le){if(le&&f&&typeof le.stack=="string"){for(var m=le.stack.split(`
`),v=f.stack.split(`
`),A=m.length-1,F=v.length-1;1<=A&&0<=F&&m[A]!==v[F];)F--;for(;1<=A&&0<=F;A--,F--)if(m[A]!==v[F]){if(A!==1||F!==1)do if(A--,F--,0>F||m[A]!==v[F]){var z=`
`+m[A].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=A&&0<=F);break}}}finally{Ae=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?se(n):""}function Be(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=Ue(n.type,!1),n;case 11:return n=Ue(n.type.render,!1),n;case 1:return n=Ue(n.type,!0),n;default:return""}}function oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case N:return"Portal";case T:return"Profiler";case k:return"StrictMode";case W:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case X:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return r=n.displayName||null,r!==null?r:oe(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return oe(n(r))}catch{}}return null}function de(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(r);case 8:return r===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ie(n){var r=ze(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(A){f=""+A,v.call(this,A)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function pt(n){n._valueTracker||(n._valueTracker=Ie(n))}function nn(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=ze(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xt(n,r){var l=r.checked;return ae({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Dt(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Se(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function lt(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function Ht(n,r){lt(n,r);var l=Se(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Gt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Gt(n,r.type,Se(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function V(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Gt(n,r,l){(r!=="number"||dt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var mt=Array.isArray;function yt(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Se(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function je(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function U(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(mt(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Se(l)}}function w(n,r){var l=Se(r.value),f=Se(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function Y(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Te(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(n){nt.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ve[r]=Ve[n]})});function ye(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ve.hasOwnProperty(n)&&Ve[n]?(""+r).trim():r+"px"}function Re(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=ye(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var We=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(n,r){if(r){if(We[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ce(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,Me=null,Le=null;function ve(n){if(n=Lo(n)){if(typeof De!="function")throw Error(t(280));var r=n.stateNode;r&&(r=$l(r),De(n.stateNode,n.type,r))}}function pe(n){Me?Le?Le.push(n):Le=[n]:Me=n}function be(){if(Me){var n=Me,r=Le;if(Le=Me=null,ve(n),r)for(n=0;n<r.length;n++)ve(r[n])}}function it(n,r){return n(r)}function Nt(){}var St=!1;function si(n,r,l){if(St)return n(r,l);St=!0;try{return it(n,r,l)}finally{St=!1,(Me!==null||Le!==null)&&(Nt(),be())}}function kn(n,r){var l=n.stateNode;if(l===null)return null;var f=$l(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var co=!1;if(c)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){co=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{co=!1}function fo(n,r,l,f,m,v,A,F,z){var le=Array.prototype.slice.call(arguments,3);try{r.apply(l,le)}catch(ge){this.onError(ge)}}var Ss=!1,Ms=null,Es=!1,Ii=null,ho={onError:function(n){Ss=!0,Ms=n}};function bl(n,r,l,f,m,v,A,F,z){Ss=!1,Ms=null,fo.apply(ho,arguments)}function Rl(n,r,l,f,m,v,A,F,z){if(bl.apply(this,arguments),Ss){if(Ss){var le=Ms;Ss=!1,Ms=null}else throw Error(t(198));Es||(Es=!0,Ii=le)}}function yi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function po(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ts(n){if(yi(n)!==n)throw Error(t(188))}function Pl(n){var r=n.alternate;if(!r){if(r=yi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var v=m.alternate;if(v===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===l)return Ts(m),n;if(v===f)return Ts(m),r;v=v.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=v;else{for(var A=!1,F=m.child;F;){if(F===l){A=!0,l=m,f=v;break}if(F===f){A=!0,f=m,l=v;break}F=F.sibling}if(!A){for(F=v.child;F;){if(F===l){A=!0,l=v,f=m;break}if(F===f){A=!0,f=v,l=m;break}F=F.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function mo(n){return n=Pl(n),n!==null?Dl(n):null}function Dl(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Dl(n);if(r!==null)return r;n=n.sibling}return null}var Ll=e.unstable_scheduleCallback,Nl=e.unstable_cancelCallback,bc=e.unstable_shouldYield,Rc=e.unstable_requestPaint,jt=e.unstable_now,D=e.unstable_getCurrentPriorityLevel,$=e.unstable_ImmediatePriority,ue=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,J=e.unstable_LowPriority,Pe=e.unstable_IdlePriority,Fe=null,we=null;function Ge(n){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Fe,n,void 0,(n.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:ct,tt=Math.log,Ze=Math.LN2;function ct(n){return n>>>=0,n===0?32:31-(tt(n)/Ze|0)|0}var Mt=64,Ft=4194304;function Ut(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wt(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,v=n.pingedLanes,A=l&268435455;if(A!==0){var F=A&~m;F!==0?f=Ut(F):(v&=A,v!==0&&(f=Ut(v)))}else A=l&~m,A!==0?f=Ut(A):v!==0&&(f=Ut(v));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,v=r&-r,m>=v||m===16&&(v&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-ke(r),m=1<<l,f|=n[l],r&=~m;return f}function Qe(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-ke(v),F=1<<A,z=m[A];z===-1?((F&l)===0||(F&f)!==0)&&(m[A]=Qe(F,r)):z<=r&&(n.expiredLanes|=F),v&=~F}}function _t(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),n}function Yi(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function un(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ke(r),n[r]=l}function ws(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-ke(l),v=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~v}}function Lt(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-ke(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var st=0;function Bn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pn,mn,aa,qi,zp,Pc=!1,Il=[],Or=null,kr=null,Br=null,_o=new Map,go=new Map,zr=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(n,r){switch(n){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":_o.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(r.pointerId)}}function vo(n,r,l,f,m,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:v,targetContainers:[m]},r!==null&&(r=Lo(r),r!==null&&mn(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function dx(n,r,l,f,m){switch(r){case"focusin":return Or=vo(Or,n,r,l,f,m),!0;case"dragenter":return kr=vo(kr,n,r,l,f,m),!0;case"mouseover":return Br=vo(Br,n,r,l,f,m),!0;case"pointerover":var v=m.pointerId;return _o.set(v,vo(_o.get(v)||null,n,r,l,f,m)),!0;case"gotpointercapture":return v=m.pointerId,go.set(v,vo(go.get(v)||null,n,r,l,f,m)),!0}return!1}function Hp(n){var r=As(n.target);if(r!==null){var l=yi(r);if(l!==null){if(r=l.tag,r===13){if(r=po(l),r!==null){n.blockedOn=r,zp(n.priority,function(){aa(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ul(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Lc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);ot=f,l.target.dispatchEvent(f),ot=null}else return r=Lo(l),r!==null&&mn(r),n.blockedOn=l,!1;r.shift()}return!0}function Gp(n,r,l){Ul(n)&&l.delete(r)}function hx(){Pc=!1,Or!==null&&Ul(Or)&&(Or=null),kr!==null&&Ul(kr)&&(kr=null),Br!==null&&Ul(Br)&&(Br=null),_o.forEach(Gp),go.forEach(Gp)}function xo(n,r){n.blockedOn===r&&(n.blockedOn=null,Pc||(Pc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hx)))}function yo(n){function r(m){return xo(m,n)}if(0<Il.length){xo(Il[0],n);for(var l=1;l<Il.length;l++){var f=Il[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Or!==null&&xo(Or,n),kr!==null&&xo(kr,n),Br!==null&&xo(Br,n),_o.forEach(r),go.forEach(r),l=0;l<zr.length;l++)f=zr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<zr.length&&(l=zr[0],l.blockedOn===null);)Hp(l),l.blockedOn===null&&zr.shift()}var oa=C.ReactCurrentBatchConfig,Fl=!0;function px(n,r,l,f){var m=st,v=oa.transition;oa.transition=null;try{st=1,Dc(n,r,l,f)}finally{st=m,oa.transition=v}}function mx(n,r,l,f){var m=st,v=oa.transition;oa.transition=null;try{st=4,Dc(n,r,l,f)}finally{st=m,oa.transition=v}}function Dc(n,r,l,f){if(Fl){var m=Lc(n,r,l,f);if(m===null)$c(n,r,f,Ol,l),Vp(n,f);else if(dx(m,n,r,l,f))f.stopPropagation();else if(Vp(n,f),r&4&&-1<fx.indexOf(n)){for(;m!==null;){var v=Lo(m);if(v!==null&&pn(v),v=Lc(n,r,l,f),v===null&&$c(n,r,f,Ol,l),v===m)break;m=v}m!==null&&f.stopPropagation()}else $c(n,r,f,null,l)}}var Ol=null;function Lc(n,r,l,f){if(Ol=null,n=H(f),n=As(n),n!==null)if(r=yi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=po(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ol=n,null}function Wp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D()){case $:return 1;case ue:return 4;case re:case J:return 16;case Pe:return 536870912;default:return 16}default:return 16}}var Vr=null,Nc=null,kl=null;function Xp(){if(kl)return kl;var n,r=Nc,l=r.length,f,m="value"in Vr?Vr.value:Vr.textContent,v=m.length;for(n=0;n<l&&r[n]===m[n];n++);var A=l-n;for(f=1;f<=A&&r[l-f]===m[v-f];f++);return kl=m.slice(n,1<f?1-f:void 0)}function Bl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function zl(){return!0}function jp(){return!1}function ai(n){function r(l,f,m,v,A){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(l=n[F],this[F]=l?l(v):v[F]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?zl:jp,this.isPropagationStopped=jp,this}return ae(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),r}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=ai(la),So=ae({},la,{view:0,detail:0}),_x=ai(So),Uc,Fc,Mo,Vl=ae({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Mo&&(Mo&&n.type==="mousemove"?(Uc=n.screenX-Mo.screenX,Fc=n.screenY-Mo.screenY):Fc=Uc=0,Mo=n),Uc)},movementY:function(n){return"movementY"in n?n.movementY:Fc}}),Yp=ai(Vl),gx=ae({},Vl,{dataTransfer:0}),vx=ai(gx),xx=ae({},So,{relatedTarget:0}),Oc=ai(xx),yx=ae({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=ai(yx),Mx=ae({},la,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ex=ai(Mx),Tx=ae({},la,{data:0}),qp=ai(Tx),wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Cx[n])?!!r[n]:!1}function kc(){return bx}var Rx=ae({},So,{key:function(n){if(n.key){var r=wx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Bl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ax[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(n){return n.type==="keypress"?Bl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Px=ai(Rx),Dx=ae({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=ai(Dx),Lx=ae({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),Nx=ai(Lx),Ix=ae({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=ai(Ix),Fx=ae({},Vl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=ai(Fx),kx=[9,13,27,32],Bc=c&&"CompositionEvent"in window,Eo=null;c&&"documentMode"in document&&(Eo=document.documentMode);var Bx=c&&"TextEvent"in window&&!Eo,Kp=c&&(!Bc||Eo&&8<Eo&&11>=Eo),Zp=" ",Qp=!1;function Jp(n,r){switch(n){case"keyup":return kx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ua=!1;function zx(n,r){switch(n){case"compositionend":return em(r);case"keypress":return r.which!==32?null:(Qp=!0,Zp);case"textInput":return n=r.data,n===Zp&&Qp?null:n;default:return null}}function Vx(n,r){if(ua)return n==="compositionend"||!Bc&&Jp(n,r)?(n=Xp(),kl=Nc=Vr=null,ua=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Kp&&r.locale!=="ko"?null:r.data;default:return null}}var Hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Hx[n.type]:r==="textarea"}function nm(n,r,l,f){pe(f),r=jl(r,"onChange"),0<r.length&&(l=new Ic("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var To=null,wo=null;function Gx(n){ym(n,0)}function Hl(n){var r=pa(n);if(nn(r))return n}function Wx(n,r){if(n==="change")return r}var im=!1;if(c){var zc;if(c){var Vc="oninput"in document;if(!Vc){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),Vc=typeof rm.oninput=="function"}zc=Vc}else zc=!1;im=zc&&(!document.documentMode||9<document.documentMode)}function sm(){To&&(To.detachEvent("onpropertychange",am),wo=To=null)}function am(n){if(n.propertyName==="value"&&Hl(wo)){var r=[];nm(r,wo,n,H(n)),si(Gx,r)}}function Xx(n,r,l){n==="focusin"?(sm(),To=r,wo=l,To.attachEvent("onpropertychange",am)):n==="focusout"&&sm()}function jx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Hl(wo)}function Yx(n,r){if(n==="click")return Hl(r)}function qx(n,r){if(n==="input"||n==="change")return Hl(r)}function $x(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ui=typeof Object.is=="function"?Object.is:$x;function Ao(n,r){if(Ui(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!Ui(n[m],r[m]))return!1}return!0}function om(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lm(n,r){var l=om(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=om(l)}}function um(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?um(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function cm(){for(var n=window,r=dt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=dt(n.document)}return r}function Hc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Kx(n){var r=cm(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&um(l.ownerDocument.documentElement,l)){if(f!==null&&Hc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,v=Math.min(f.start,m);f=f.end===void 0?v:Math.min(f.end,m),!n.extend&&v>f&&(m=f,f=v,v=m),m=lm(l,v);var A=lm(l,f);m&&A&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),v>f?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zx=c&&"documentMode"in document&&11>=document.documentMode,ca=null,Gc=null,Co=null,Wc=!1;function fm(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Wc||ca==null||ca!==dt(f)||(f=ca,"selectionStart"in f&&Hc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Co&&Ao(Co,f)||(Co=f,f=jl(Gc,"onSelect"),0<f.length&&(r=new Ic("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=ca)))}function Gl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var fa={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},Xc={},dm={};c&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function Wl(n){if(Xc[n])return Xc[n];if(!fa[n])return n;var r=fa[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in dm)return Xc[n]=r[l];return n}var hm=Wl("animationend"),pm=Wl("animationiteration"),mm=Wl("animationstart"),_m=Wl("transitionend"),gm=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,r){gm.set(n,r),o(r,[n])}for(var jc=0;jc<vm.length;jc++){var Yc=vm[jc],Qx=Yc.toLowerCase(),Jx=Yc[0].toUpperCase()+Yc.slice(1);Hr(Qx,"on"+Jx)}Hr(hm,"onAnimationEnd"),Hr(pm,"onAnimationIteration"),Hr(mm,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(_m,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function xm(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Rl(f,r,void 0,n),n.currentTarget=null}function ym(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var v=void 0;if(r)for(var A=f.length-1;0<=A;A--){var F=f[A],z=F.instance,le=F.currentTarget;if(F=F.listener,z!==v&&m.isPropagationStopped())break e;xm(m,F,le),v=z}else for(A=0;A<f.length;A++){if(F=f[A],z=F.instance,le=F.currentTarget,F=F.listener,z!==v&&m.isPropagationStopped())break e;xm(m,F,le),v=z}}}if(Es)throw n=Ii,Es=!1,Ii=null,n}function zt(n,r){var l=r[tf];l===void 0&&(l=r[tf]=new Set);var f=n+"__bubble";l.has(f)||(Sm(r,n,2,!1),l.add(f))}function qc(n,r,l){var f=0;r&&(f|=4),Sm(l,n,f,r)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Ro(n){if(!n[Xl]){n[Xl]=!0,i.forEach(function(l){l!=="selectionchange"&&(ey.has(l)||qc(l,!1,n),qc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Xl]||(r[Xl]=!0,qc("selectionchange",!1,r))}}function Sm(n,r,l,f){switch(Wp(r)){case 1:var m=px;break;case 4:m=mx;break;default:m=Dc}l=m.bind(null,r,l,n),m=void 0,!co||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function $c(n,r,l,f,m){var v=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var F=f.stateNode.containerInfo;if(F===m||F.nodeType===8&&F.parentNode===m)break;if(A===4)for(A=f.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;A=A.return}for(;F!==null;){if(A=As(F),A===null)return;if(z=A.tag,z===5||z===6){f=v=A;continue e}F=F.parentNode}}f=f.return}si(function(){var le=v,ge=H(l),xe=[];e:{var _e=gm.get(n);if(_e!==void 0){var Oe=Ic,Xe=n;switch(n){case"keypress":if(Bl(l)===0)break e;case"keydown":case"keyup":Oe=Px;break;case"focusin":Xe="focus",Oe=Oc;break;case"focusout":Xe="blur",Oe=Oc;break;case"beforeblur":case"afterblur":Oe=Oc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Nx;break;case hm:case pm:case mm:Oe=Sx;break;case _m:Oe=Ux;break;case"scroll":Oe=_x;break;case"wheel":Oe=Ox;break;case"copy":case"cut":case"paste":Oe=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=$p}var qe=(r&4)!==0,rn=!qe&&n==="scroll",Z=qe?_e!==null?_e+"Capture":null:_e;qe=[];for(var G=le,ee;G!==null;){ee=G;var Ee=ee.stateNode;if(ee.tag===5&&Ee!==null&&(ee=Ee,Z!==null&&(Ee=kn(G,Z),Ee!=null&&qe.push(Po(G,Ee,ee)))),rn)break;G=G.return}0<qe.length&&(_e=new Oe(_e,Xe,null,l,ge),xe.push({event:_e,listeners:qe}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",_e&&l!==ot&&(Xe=l.relatedTarget||l.fromElement)&&(As(Xe)||Xe[hr]))break e;if((Oe||_e)&&(_e=ge.window===ge?ge:(_e=ge.ownerDocument)?_e.defaultView||_e.parentWindow:window,Oe?(Xe=l.relatedTarget||l.toElement,Oe=le,Xe=Xe?As(Xe):null,Xe!==null&&(rn=yi(Xe),Xe!==rn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Oe=null,Xe=le),Oe!==Xe)){if(qe=Yp,Ee="onMouseLeave",Z="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(qe=$p,Ee="onPointerLeave",Z="onPointerEnter",G="pointer"),rn=Oe==null?_e:pa(Oe),ee=Xe==null?_e:pa(Xe),_e=new qe(Ee,G+"leave",Oe,l,ge),_e.target=rn,_e.relatedTarget=ee,Ee=null,As(ge)===le&&(qe=new qe(Z,G+"enter",Xe,l,ge),qe.target=ee,qe.relatedTarget=rn,Ee=qe),rn=Ee,Oe&&Xe)t:{for(qe=Oe,Z=Xe,G=0,ee=qe;ee;ee=da(ee))G++;for(ee=0,Ee=Z;Ee;Ee=da(Ee))ee++;for(;0<G-ee;)qe=da(qe),G--;for(;0<ee-G;)Z=da(Z),ee--;for(;G--;){if(qe===Z||Z!==null&&qe===Z.alternate)break t;qe=da(qe),Z=da(Z)}qe=null}else qe=null;Oe!==null&&Mm(xe,_e,Oe,qe,!1),Xe!==null&&rn!==null&&Mm(xe,rn,Xe,qe,!0)}}e:{if(_e=le?pa(le):window,Oe=_e.nodeName&&_e.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&_e.type==="file")var Ke=Wx;else if(tm(_e))if(im)Ke=qx;else{Ke=jx;var Je=Xx}else(Oe=_e.nodeName)&&Oe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ke=Yx);if(Ke&&(Ke=Ke(n,le))){nm(xe,Ke,l,ge);break e}Je&&Je(n,_e,le),n==="focusout"&&(Je=_e._wrapperState)&&Je.controlled&&_e.type==="number"&&Gt(_e,"number",_e.value)}switch(Je=le?pa(le):window,n){case"focusin":(tm(Je)||Je.contentEditable==="true")&&(ca=Je,Gc=le,Co=null);break;case"focusout":Co=Gc=ca=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,fm(xe,l,ge);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":fm(xe,l,ge)}var et;if(Bc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ua?Jp(n,l)&&(rt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(rt="onCompositionStart");rt&&(Kp&&l.locale!=="ko"&&(ua||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ua&&(et=Xp()):(Vr=ge,Nc="value"in Vr?Vr.value:Vr.textContent,ua=!0)),Je=jl(le,rt),0<Je.length&&(rt=new qp(rt,n,null,l,ge),xe.push({event:rt,listeners:Je}),et?rt.data=et:(et=em(l),et!==null&&(rt.data=et)))),(et=Bx?zx(n,l):Vx(n,l))&&(le=jl(le,"onBeforeInput"),0<le.length&&(ge=new qp("onBeforeInput","beforeinput",null,l,ge),xe.push({event:ge,listeners:le}),ge.data=et))}ym(xe,r)})}function Po(n,r,l){return{instance:n,listener:r,currentTarget:l}}function jl(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,v=m.stateNode;m.tag===5&&v!==null&&(m=v,v=kn(n,l),v!=null&&f.unshift(Po(n,v,m)),v=kn(n,r),v!=null&&f.push(Po(n,v,m))),n=n.return}return f}function da(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mm(n,r,l,f,m){for(var v=r._reactName,A=[];l!==null&&l!==f;){var F=l,z=F.alternate,le=F.stateNode;if(z!==null&&z===f)break;F.tag===5&&le!==null&&(F=le,m?(z=kn(l,v),z!=null&&A.unshift(Po(l,z,F))):m||(z=kn(l,v),z!=null&&A.push(Po(l,z,F)))),l=l.return}A.length!==0&&n.push({event:r,listeners:A})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function Em(n){return(typeof n=="string"?n:""+n).replace(ty,`
`).replace(ny,"")}function Yl(n,r,l){if(r=Em(r),Em(n)!==r&&l)throw Error(t(425))}function ql(){}var Kc=null,Zc=null;function Qc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(n){return Tm.resolve(null).then(n).catch(sy)}:Jc;function sy(n){setTimeout(function(){throw n})}function ef(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),yo(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);yo(r)}function Gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function wm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var ha=Math.random().toString(36).slice(2),$i="__reactFiber$"+ha,Do="__reactProps$"+ha,hr="__reactContainer$"+ha,tf="__reactEvents$"+ha,ay="__reactListeners$"+ha,oy="__reactHandles$"+ha;function As(n){var r=n[$i];if(r)return r;for(var l=n.parentNode;l;){if(r=l[hr]||l[$i]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=wm(n);n!==null;){if(l=n[$i])return l;n=wm(n)}return r}n=l,l=n.parentNode}return null}function Lo(n){return n=n[$i]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function pa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function $l(n){return n[Do]||null}var nf=[],ma=-1;function Wr(n){return{current:n}}function Vt(n){0>ma||(n.current=nf[ma],nf[ma]=null,ma--)}function Bt(n,r){ma++,nf[ma]=n.current,n.current=r}var Xr={},Cn=Wr(Xr),jn=Wr(!1),Cs=Xr;function _a(n,r){var l=n.type.contextTypes;if(!l)return Xr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},v;for(v in l)m[v]=r[v];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function Yn(n){return n=n.childContextTypes,n!=null}function Kl(){Vt(jn),Vt(Cn)}function Am(n,r,l){if(Cn.current!==Xr)throw Error(t(168));Bt(Cn,r),Bt(jn,l)}function Cm(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,de(n)||"Unknown",m));return ae({},l,f)}function Zl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,Cs=Cn.current,Bt(Cn,n),Bt(jn,jn.current),!0}function bm(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=Cm(n,r,Cs),f.__reactInternalMemoizedMergedChildContext=n,Vt(jn),Vt(Cn),Bt(Cn,n)):Vt(jn),Bt(jn,l)}var pr=null,Ql=!1,rf=!1;function Rm(n){pr===null?pr=[n]:pr.push(n)}function ly(n){Ql=!0,Rm(n)}function jr(){if(!rf&&pr!==null){rf=!0;var n=0,r=st;try{var l=pr;for(st=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}pr=null,Ql=!1}catch(m){throw pr!==null&&(pr=pr.slice(n+1)),Ll($,jr),m}finally{st=r,rf=!1}}return null}var ga=[],va=0,Jl=null,eu=0,Si=[],Mi=0,bs=null,mr=1,_r="";function Rs(n,r){ga[va++]=eu,ga[va++]=Jl,Jl=n,eu=r}function Pm(n,r,l){Si[Mi++]=mr,Si[Mi++]=_r,Si[Mi++]=bs,bs=n;var f=mr;n=_r;var m=32-ke(f)-1;f&=~(1<<m),l+=1;var v=32-ke(r)+m;if(30<v){var A=m-m%5;v=(f&(1<<A)-1).toString(32),f>>=A,m-=A,mr=1<<32-ke(r)+m|l<<m|f,_r=v+n}else mr=1<<v|l<<m|f,_r=n}function sf(n){n.return!==null&&(Rs(n,1),Pm(n,1,0))}function af(n){for(;n===Jl;)Jl=ga[--va],ga[va]=null,eu=ga[--va],ga[va]=null;for(;n===bs;)bs=Si[--Mi],Si[Mi]=null,_r=Si[--Mi],Si[Mi]=null,mr=Si[--Mi],Si[Mi]=null}var oi=null,li=null,Wt=!1,Fi=null;function Dm(n,r){var l=Ai(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Lm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,oi=n,li=Gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,oi=n,li=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=bs!==null?{id:mr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ai(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,oi=n,li=null,!0):!1;default:return!1}}function of(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lf(n){if(Wt){var r=li;if(r){var l=r;if(!Lm(n,r)){if(of(n))throw Error(t(418));r=Gr(l.nextSibling);var f=oi;r&&Lm(n,r)?Dm(f,l):(n.flags=n.flags&-4097|2,Wt=!1,oi=n)}}else{if(of(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,oi=n}}}function Nm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function tu(n){if(n!==oi)return!1;if(!Wt)return Nm(n),Wt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Qc(n.type,n.memoizedProps)),r&&(r=li)){if(of(n))throw Im(),Error(t(418));for(;r;)Dm(n,r),r=Gr(r.nextSibling)}if(Nm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){li=Gr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}li=null}}else li=oi?Gr(n.stateNode.nextSibling):null;return!0}function Im(){for(var n=li;n;)n=Gr(n.nextSibling)}function xa(){li=oi=null,Wt=!1}function uf(n){Fi===null?Fi=[n]:Fi.push(n)}var uy=C.ReactCurrentBatchConfig;function No(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(A){var F=m.refs;A===null?delete F[v]:F[v]=A},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function nu(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Um(n){var r=n._init;return r(n._payload)}function Fm(n){function r(Z,G){if(n){var ee=Z.deletions;ee===null?(Z.deletions=[G],Z.flags|=16):ee.push(G)}}function l(Z,G){if(!n)return null;for(;G!==null;)r(Z,G),G=G.sibling;return null}function f(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function m(Z,G){return Z=es(Z,G),Z.index=0,Z.sibling=null,Z}function v(Z,G,ee){return Z.index=ee,n?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<G?(Z.flags|=2,G):ee):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function A(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,G,ee,Ee){return G===null||G.tag!==6?(G=ed(ee,Z.mode,Ee),G.return=Z,G):(G=m(G,ee),G.return=Z,G)}function z(Z,G,ee,Ee){var Ke=ee.type;return Ke===I?ge(Z,G,ee.props.children,Ee,ee.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&Um(Ke)===G.type)?(Ee=m(G,ee.props),Ee.ref=No(Z,G,ee),Ee.return=Z,Ee):(Ee=Au(ee.type,ee.key,ee.props,null,Z.mode,Ee),Ee.ref=No(Z,G,ee),Ee.return=Z,Ee)}function le(Z,G,ee,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=td(ee,Z.mode,Ee),G.return=Z,G):(G=m(G,ee.children||[]),G.return=Z,G)}function ge(Z,G,ee,Ee,Ke){return G===null||G.tag!==7?(G=Os(ee,Z.mode,Ee,Ke),G.return=Z,G):(G=m(G,ee),G.return=Z,G)}function xe(Z,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=ed(""+G,Z.mode,ee),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case b:return ee=Au(G.type,G.key,G.props,null,Z.mode,ee),ee.ref=No(Z,null,G),ee.return=Z,ee;case N:return G=td(G,Z.mode,ee),G.return=Z,G;case Q:var Ee=G._init;return xe(Z,Ee(G._payload),ee)}if(mt(G)||fe(G))return G=Os(G,Z.mode,ee,null),G.return=Z,G;nu(Z,G)}return null}function _e(Z,G,ee,Ee){var Ke=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ke!==null?null:F(Z,G,""+ee,Ee);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case b:return ee.key===Ke?z(Z,G,ee,Ee):null;case N:return ee.key===Ke?le(Z,G,ee,Ee):null;case Q:return Ke=ee._init,_e(Z,G,Ke(ee._payload),Ee)}if(mt(ee)||fe(ee))return Ke!==null?null:ge(Z,G,ee,Ee,null);nu(Z,ee)}return null}function Oe(Z,G,ee,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(ee)||null,F(G,Z,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case b:return Z=Z.get(Ee.key===null?ee:Ee.key)||null,z(G,Z,Ee,Ke);case N:return Z=Z.get(Ee.key===null?ee:Ee.key)||null,le(G,Z,Ee,Ke);case Q:var Je=Ee._init;return Oe(Z,G,ee,Je(Ee._payload),Ke)}if(mt(Ee)||fe(Ee))return Z=Z.get(ee)||null,ge(G,Z,Ee,Ke,null);nu(G,Ee)}return null}function Xe(Z,G,ee,Ee){for(var Ke=null,Je=null,et=G,rt=G=0,vn=null;et!==null&&rt<ee.length;rt++){et.index>rt?(vn=et,et=null):vn=et.sibling;var At=_e(Z,et,ee[rt],Ee);if(At===null){et===null&&(et=vn);break}n&&et&&At.alternate===null&&r(Z,et),G=v(At,G,rt),Je===null?Ke=At:Je.sibling=At,Je=At,et=vn}if(rt===ee.length)return l(Z,et),Wt&&Rs(Z,rt),Ke;if(et===null){for(;rt<ee.length;rt++)et=xe(Z,ee[rt],Ee),et!==null&&(G=v(et,G,rt),Je===null?Ke=et:Je.sibling=et,Je=et);return Wt&&Rs(Z,rt),Ke}for(et=f(Z,et);rt<ee.length;rt++)vn=Oe(et,Z,rt,ee[rt],Ee),vn!==null&&(n&&vn.alternate!==null&&et.delete(vn.key===null?rt:vn.key),G=v(vn,G,rt),Je===null?Ke=vn:Je.sibling=vn,Je=vn);return n&&et.forEach(function(ts){return r(Z,ts)}),Wt&&Rs(Z,rt),Ke}function qe(Z,G,ee,Ee){var Ke=fe(ee);if(typeof Ke!="function")throw Error(t(150));if(ee=Ke.call(ee),ee==null)throw Error(t(151));for(var Je=Ke=null,et=G,rt=G=0,vn=null,At=ee.next();et!==null&&!At.done;rt++,At=ee.next()){et.index>rt?(vn=et,et=null):vn=et.sibling;var ts=_e(Z,et,At.value,Ee);if(ts===null){et===null&&(et=vn);break}n&&et&&ts.alternate===null&&r(Z,et),G=v(ts,G,rt),Je===null?Ke=ts:Je.sibling=ts,Je=ts,et=vn}if(At.done)return l(Z,et),Wt&&Rs(Z,rt),Ke;if(et===null){for(;!At.done;rt++,At=ee.next())At=xe(Z,At.value,Ee),At!==null&&(G=v(At,G,rt),Je===null?Ke=At:Je.sibling=At,Je=At);return Wt&&Rs(Z,rt),Ke}for(et=f(Z,et);!At.done;rt++,At=ee.next())At=Oe(et,Z,rt,At.value,Ee),At!==null&&(n&&At.alternate!==null&&et.delete(At.key===null?rt:At.key),G=v(At,G,rt),Je===null?Ke=At:Je.sibling=At,Je=At);return n&&et.forEach(function(Hy){return r(Z,Hy)}),Wt&&Rs(Z,rt),Ke}function rn(Z,G,ee,Ee){if(typeof ee=="object"&&ee!==null&&ee.type===I&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case b:e:{for(var Ke=ee.key,Je=G;Je!==null;){if(Je.key===Ke){if(Ke=ee.type,Ke===I){if(Je.tag===7){l(Z,Je.sibling),G=m(Je,ee.props.children),G.return=Z,Z=G;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&Um(Ke)===Je.type){l(Z,Je.sibling),G=m(Je,ee.props),G.ref=No(Z,Je,ee),G.return=Z,Z=G;break e}l(Z,Je);break}else r(Z,Je);Je=Je.sibling}ee.type===I?(G=Os(ee.props.children,Z.mode,Ee,ee.key),G.return=Z,Z=G):(Ee=Au(ee.type,ee.key,ee.props,null,Z.mode,Ee),Ee.ref=No(Z,G,ee),Ee.return=Z,Z=Ee)}return A(Z);case N:e:{for(Je=ee.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){l(Z,G.sibling),G=m(G,ee.children||[]),G.return=Z,Z=G;break e}else{l(Z,G);break}else r(Z,G);G=G.sibling}G=td(ee,Z.mode,Ee),G.return=Z,Z=G}return A(Z);case Q:return Je=ee._init,rn(Z,G,Je(ee._payload),Ee)}if(mt(ee))return Xe(Z,G,ee,Ee);if(fe(ee))return qe(Z,G,ee,Ee);nu(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(l(Z,G.sibling),G=m(G,ee),G.return=Z,Z=G):(l(Z,G),G=ed(ee,Z.mode,Ee),G.return=Z,Z=G),A(Z)):l(Z,G)}return rn}var ya=Fm(!0),Om=Fm(!1),iu=Wr(null),ru=null,Sa=null,cf=null;function ff(){cf=Sa=ru=null}function df(n){var r=iu.current;Vt(iu),n._currentValue=r}function hf(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Ma(n,r){ru=n,cf=Sa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(qn=!0),n.firstContext=null)}function Ei(n){var r=n._currentValue;if(cf!==n)if(n={context:n,memoizedValue:r,next:null},Sa===null){if(ru===null)throw Error(t(308));Sa=n,ru.dependencies={lanes:0,firstContext:n}}else Sa=Sa.next=n;return r}var Ps=null;function pf(n){Ps===null?Ps=[n]:Ps.push(n)}function km(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,pf(r)):(l.next=m.next,m.next=l),r.interleaved=l,gr(n,f)}function gr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Yr=!1;function mf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(Et&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,gr(n,l)}return m=f.interleaved,m===null?(r.next=r,pf(f)):(r.next=m.next,m.next=r),f.interleaved=r,gr(n,l)}function su(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Lt(n,l)}}function zm(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?m=v=A:v=v.next=A,l=l.next}while(l!==null);v===null?m=v=r:v=v.next=r}else m=v=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function au(n,r,l,f){var m=n.updateQueue;Yr=!1;var v=m.firstBaseUpdate,A=m.lastBaseUpdate,F=m.shared.pending;if(F!==null){m.shared.pending=null;var z=F,le=z.next;z.next=null,A===null?v=le:A.next=le,A=z;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,F=ge.lastBaseUpdate,F!==A&&(F===null?ge.firstBaseUpdate=le:F.next=le,ge.lastBaseUpdate=z))}if(v!==null){var xe=m.baseState;A=0,ge=le=z=null,F=v;do{var _e=F.lane,Oe=F.eventTime;if((f&_e)===_e){ge!==null&&(ge=ge.next={eventTime:Oe,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=n,qe=F;switch(_e=r,Oe=l,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){xe=Xe.call(Oe,xe,_e);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,_e=typeof Xe=="function"?Xe.call(Oe,xe,_e):Xe,_e==null)break e;xe=ae({},xe,_e);break e;case 2:Yr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,_e=m.effects,_e===null?m.effects=[F]:_e.push(F))}else Oe={eventTime:Oe,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ge===null?(le=ge=Oe,z=xe):ge=ge.next=Oe,A|=_e;if(F=F.next,F===null){if(F=m.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,m.lastBaseUpdate=_e,m.shared.pending=null}}while(!0);if(ge===null&&(z=xe),m.baseState=z,m.firstBaseUpdate=le,m.lastBaseUpdate=ge,r=m.shared.interleaved,r!==null){m=r;do A|=m.lane,m=m.next;while(m!==r)}else v===null&&(m.shared.lanes=0);Ns|=A,n.lanes=A,n.memoizedState=xe}}function Vm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Io={},Ki=Wr(Io),Uo=Wr(Io),Fo=Wr(Io);function Ds(n){if(n===Io)throw Error(t(174));return n}function _f(n,r){switch(Bt(Fo,r),Bt(Uo,n),Bt(Ki,Io),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:me(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=me(r,n)}Vt(Ki),Bt(Ki,r)}function Ea(){Vt(Ki),Vt(Uo),Vt(Fo)}function Hm(n){Ds(Fo.current);var r=Ds(Ki.current),l=me(r,n.type);r!==l&&(Bt(Uo,n),Bt(Ki,l))}function gf(n){Uo.current===n&&(Vt(Ki),Vt(Uo))}var Yt=Wr(0);function ou(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var vf=[];function xf(){for(var n=0;n<vf.length;n++)vf[n]._workInProgressVersionPrimary=null;vf.length=0}var lu=C.ReactCurrentDispatcher,yf=C.ReactCurrentBatchConfig,Ls=0,qt=null,cn=null,_n=null,uu=!1,Oo=!1,ko=0,cy=0;function bn(){throw Error(t(321))}function Sf(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ui(n[l],r[l]))return!1;return!0}function Mf(n,r,l,f,m,v){if(Ls=v,qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,lu.current=n===null||n.memoizedState===null?py:my,n=l(f,m),Oo){v=0;do{if(Oo=!1,ko=0,25<=v)throw Error(t(301));v+=1,_n=cn=null,r.updateQueue=null,lu.current=_y,n=l(f,m)}while(Oo)}if(lu.current=du,r=cn!==null&&cn.next!==null,Ls=0,_n=cn=qt=null,uu=!1,r)throw Error(t(300));return n}function Ef(){var n=ko!==0;return ko=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?qt.memoizedState=_n=n:_n=_n.next=n,_n}function Ti(){if(cn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var r=_n===null?qt.memoizedState:_n.next;if(r!==null)_n=r,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},_n===null?qt.memoizedState=_n=n:_n=_n.next=n}return _n}function Bo(n,r){return typeof r=="function"?r(n):r}function Tf(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=cn,m=f.baseQueue,v=l.pending;if(v!==null){if(m!==null){var A=m.next;m.next=v.next,v.next=A}f.baseQueue=m=v,l.pending=null}if(m!==null){v=m.next,f=f.baseState;var F=A=null,z=null,le=v;do{var ge=le.lane;if((Ls&ge)===ge)z!==null&&(z=z.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),f=le.hasEagerState?le.eagerState:n(f,le.action);else{var xe={lane:ge,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};z===null?(F=z=xe,A=f):z=z.next=xe,qt.lanes|=ge,Ns|=ge}le=le.next}while(le!==null&&le!==v);z===null?A=f:z.next=F,Ui(f,r.memoizedState)||(qn=!0),r.memoizedState=f,r.baseState=A,r.baseQueue=z,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do v=m.lane,qt.lanes|=v,Ns|=v,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function wf(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,v=r.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do v=n(v,A.action),A=A.next;while(A!==m);Ui(v,r.memoizedState)||(qn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,f]}function Gm(){}function Wm(n,r){var l=qt,f=Ti(),m=r(),v=!Ui(f.memoizedState,m);if(v&&(f.memoizedState=m,qn=!0),f=f.queue,Af(Ym.bind(null,l,f,n),[n]),f.getSnapshot!==r||v||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,zo(9,jm.bind(null,l,f,m,r),void 0,null),gn===null)throw Error(t(349));(Ls&30)!==0||Xm(l,r,m)}return m}function Xm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function jm(n,r,l,f){r.value=l,r.getSnapshot=f,qm(r)&&$m(n)}function Ym(n,r,l){return l(function(){qm(r)&&$m(n)})}function qm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ui(n,l)}catch{return!0}}function $m(n){var r=gr(n,1);r!==null&&zi(r,n,1,-1)}function Km(n){var r=Zi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},r.queue=n,n=n.dispatch=hy.bind(null,qt,n),[r.memoizedState,n]}function zo(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function Zm(){return Ti().memoizedState}function cu(n,r,l,f){var m=Zi();qt.flags|=n,m.memoizedState=zo(1|r,l,void 0,f===void 0?null:f)}function fu(n,r,l,f){var m=Ti();f=f===void 0?null:f;var v=void 0;if(cn!==null){var A=cn.memoizedState;if(v=A.destroy,f!==null&&Sf(f,A.deps)){m.memoizedState=zo(r,l,v,f);return}}qt.flags|=n,m.memoizedState=zo(1|r,l,v,f)}function Qm(n,r){return cu(8390656,8,n,r)}function Af(n,r){return fu(2048,8,n,r)}function Jm(n,r){return fu(4,2,n,r)}function e_(n,r){return fu(4,4,n,r)}function t_(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function n_(n,r,l){return l=l!=null?l.concat([n]):null,fu(4,4,t_.bind(null,r,n),l)}function Cf(){}function i_(n,r){var l=Ti();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Sf(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function r_(n,r){var l=Ti();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Sf(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function s_(n,r,l){return(Ls&21)===0?(n.baseState&&(n.baseState=!1,qn=!0),n.memoizedState=l):(Ui(l,r)||(l=An(),qt.lanes|=l,Ns|=l,n.baseState=!0),r)}function fy(n,r){var l=st;st=l!==0&&4>l?l:4,n(!0);var f=yf.transition;yf.transition={};try{n(!1),r()}finally{st=l,yf.transition=f}}function a_(){return Ti().memoizedState}function dy(n,r,l){var f=Qr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},o_(n))l_(r,l);else if(l=km(n,r,l,f),l!==null){var m=Vn();zi(l,n,f,m),u_(l,r,f)}}function hy(n,r,l){var f=Qr(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(o_(n))l_(r,m);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var A=r.lastRenderedState,F=v(A,l);if(m.hasEagerState=!0,m.eagerState=F,Ui(F,A)){var z=r.interleaved;z===null?(m.next=m,pf(r)):(m.next=z.next,z.next=m),r.interleaved=m;return}}catch{}finally{}l=km(n,r,m,f),l!==null&&(m=Vn(),zi(l,n,f,m),u_(l,r,f))}}function o_(n){var r=n.alternate;return n===qt||r!==null&&r===qt}function l_(n,r){Oo=uu=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function u_(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Lt(n,l)}}var du={readContext:Ei,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},py={readContext:Ei,useCallback:function(n,r){return Zi().memoizedState=[n,r===void 0?null:r],n},useContext:Ei,useEffect:Qm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,cu(4194308,4,t_.bind(null,r,n),l)},useLayoutEffect:function(n,r){return cu(4194308,4,n,r)},useInsertionEffect:function(n,r){return cu(4,2,n,r)},useMemo:function(n,r){var l=Zi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Zi();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=dy.bind(null,qt,n),[f.memoizedState,n]},useRef:function(n){var r=Zi();return n={current:n},r.memoizedState=n},useState:Km,useDebugValue:Cf,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=Km(!1),r=n[0];return n=fy.bind(null,n[1]),Zi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=qt,m=Zi();if(Wt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),gn===null)throw Error(t(349));(Ls&30)!==0||Xm(f,r,l)}m.memoizedState=l;var v={value:l,getSnapshot:r};return m.queue=v,Qm(Ym.bind(null,f,v,n),[n]),f.flags|=2048,zo(9,jm.bind(null,f,v,l,r),void 0,null),l},useId:function(){var n=Zi(),r=gn.identifierPrefix;if(Wt){var l=_r,f=mr;l=(f&~(1<<32-ke(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=ko++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=cy++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},my={readContext:Ei,useCallback:i_,useContext:Ei,useEffect:Af,useImperativeHandle:n_,useInsertionEffect:Jm,useLayoutEffect:e_,useMemo:r_,useReducer:Tf,useRef:Zm,useState:function(){return Tf(Bo)},useDebugValue:Cf,useDeferredValue:function(n){var r=Ti();return s_(r,cn.memoizedState,n)},useTransition:function(){var n=Tf(Bo)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Gm,useSyncExternalStore:Wm,useId:a_,unstable_isNewReconciler:!1},_y={readContext:Ei,useCallback:i_,useContext:Ei,useEffect:Af,useImperativeHandle:n_,useInsertionEffect:Jm,useLayoutEffect:e_,useMemo:r_,useReducer:wf,useRef:Zm,useState:function(){return wf(Bo)},useDebugValue:Cf,useDeferredValue:function(n){var r=Ti();return cn===null?r.memoizedState=n:s_(r,cn.memoizedState,n)},useTransition:function(){var n=wf(Bo)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Gm,useSyncExternalStore:Wm,useId:a_,unstable_isNewReconciler:!1};function Oi(n,r){if(n&&n.defaultProps){r=ae({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function bf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:ae({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var hu={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Vn(),m=Qr(n),v=vr(f,m);v.payload=r,l!=null&&(v.callback=l),r=qr(n,v,m),r!==null&&(zi(r,n,m,f),su(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Vn(),m=Qr(n),v=vr(f,m);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=qr(n,v,m),r!==null&&(zi(r,n,m,f),su(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Vn(),f=Qr(n),m=vr(l,f);m.tag=2,r!=null&&(m.callback=r),r=qr(n,m,f),r!==null&&(zi(r,n,f,l),su(r,n,f))}};function c_(n,r,l,f,m,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,v,A):r.prototype&&r.prototype.isPureReactComponent?!Ao(l,f)||!Ao(m,v):!0}function f_(n,r,l){var f=!1,m=Xr,v=r.contextType;return typeof v=="object"&&v!==null?v=Ei(v):(m=Yn(r)?Cs:Cn.current,f=r.contextTypes,v=(f=f!=null)?_a(n,m):Xr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=hu,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=v),r}function d_(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&hu.enqueueReplaceState(r,r.state,null)}function Rf(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},mf(n);var v=r.contextType;typeof v=="object"&&v!==null?m.context=Ei(v):(v=Yn(r)?Cs:Cn.current,m.context=_a(n,v)),m.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(bf(n,r,v,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&hu.enqueueReplaceState(m,m.state,null),au(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Ta(n,r){try{var l="",f=r;do l+=Be(f),f=f.return;while(f);var m=l}catch(v){m=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:m,digest:null}}function Pf(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Df(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var gy=typeof WeakMap=="function"?WeakMap:Map;function h_(n,r,l){l=vr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){yu||(yu=!0,jf=f),Df(n,r)},l}function p_(n,r,l){l=vr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Df(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Df(n,r),typeof f!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),l}function m_(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new gy;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=Dy.bind(null,n,r,l),r.then(n,n))}function __(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function g_(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=vr(-1,1),r.tag=2,qr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var vy=C.ReactCurrentOwner,qn=!1;function zn(n,r,l,f){r.child=n===null?Om(r,null,l,f):ya(r,n.child,l,f)}function v_(n,r,l,f,m){l=l.render;var v=r.ref;return Ma(r,m),f=Mf(n,r,l,f,v,m),l=Ef(),n!==null&&!qn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,xr(n,r,m)):(Wt&&l&&sf(r),r.flags|=1,zn(n,r,f,m),r.child)}function x_(n,r,l,f,m){if(n===null){var v=l.type;return typeof v=="function"&&!Jf(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,y_(n,r,v,f,m)):(n=Au(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&m)===0){var A=v.memoizedProps;if(l=l.compare,l=l!==null?l:Ao,l(A,f)&&n.ref===r.ref)return xr(n,r,m)}return r.flags|=1,n=es(v,f),n.ref=r.ref,n.return=r,r.child=n}function y_(n,r,l,f,m){if(n!==null){var v=n.memoizedProps;if(Ao(v,f)&&n.ref===r.ref)if(qn=!1,r.pendingProps=f=v,(n.lanes&m)!==0)(n.flags&131072)!==0&&(qn=!0);else return r.lanes=n.lanes,xr(n,r,m)}return Lf(n,r,l,f,m)}function S_(n,r,l){var f=r.pendingProps,m=f.children,v=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Aa,ui),ui|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Bt(Aa,ui),ui|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:l,Bt(Aa,ui),ui|=f}else v!==null?(f=v.baseLanes|l,r.memoizedState=null):f=l,Bt(Aa,ui),ui|=f;return zn(n,r,m,l),r.child}function M_(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Lf(n,r,l,f,m){var v=Yn(l)?Cs:Cn.current;return v=_a(r,v),Ma(r,m),l=Mf(n,r,l,f,v,m),f=Ef(),n!==null&&!qn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,xr(n,r,m)):(Wt&&f&&sf(r),r.flags|=1,zn(n,r,l,m),r.child)}function E_(n,r,l,f,m){if(Yn(l)){var v=!0;Zl(r)}else v=!1;if(Ma(r,m),r.stateNode===null)mu(n,r),f_(r,l,f),Rf(r,l,f,m),f=!0;else if(n===null){var A=r.stateNode,F=r.memoizedProps;A.props=F;var z=A.context,le=l.contextType;typeof le=="object"&&le!==null?le=Ei(le):(le=Yn(l)?Cs:Cn.current,le=_a(r,le));var ge=l.getDerivedStateFromProps,xe=typeof ge=="function"||typeof A.getSnapshotBeforeUpdate=="function";xe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==f||z!==le)&&d_(r,A,f,le),Yr=!1;var _e=r.memoizedState;A.state=_e,au(r,f,A,m),z=r.memoizedState,F!==f||_e!==z||jn.current||Yr?(typeof ge=="function"&&(bf(r,l,ge,f),z=r.memoizedState),(F=Yr||c_(r,l,F,f,_e,z,le))?(xe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=z),A.props=f,A.state=z,A.context=le,f=F):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{A=r.stateNode,Bm(n,r),F=r.memoizedProps,le=r.type===r.elementType?F:Oi(r.type,F),A.props=le,xe=r.pendingProps,_e=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=Ei(z):(z=Yn(l)?Cs:Cn.current,z=_a(r,z));var Oe=l.getDerivedStateFromProps;(ge=typeof Oe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==xe||_e!==z)&&d_(r,A,f,z),Yr=!1,_e=r.memoizedState,A.state=_e,au(r,f,A,m);var Xe=r.memoizedState;F!==xe||_e!==Xe||jn.current||Yr?(typeof Oe=="function"&&(bf(r,l,Oe,f),Xe=r.memoizedState),(le=Yr||c_(r,l,le,f,_e,Xe,z)||!1)?(ge||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,Xe,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,Xe,z)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Xe),A.props=f,A.state=Xe,A.context=z,f=le):(typeof A.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),f=!1)}return Nf(n,r,l,f,v,m)}function Nf(n,r,l,f,m,v){M_(n,r);var A=(r.flags&128)!==0;if(!f&&!A)return m&&bm(r,l,!1),xr(n,r,v);f=r.stateNode,vy.current=r;var F=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&A?(r.child=ya(r,n.child,null,v),r.child=ya(r,null,F,v)):zn(n,r,F,v),r.memoizedState=f.state,m&&bm(r,l,!0),r.child}function T_(n){var r=n.stateNode;r.pendingContext?Am(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Am(n,r.context,!1),_f(n,r.containerInfo)}function w_(n,r,l,f,m){return xa(),uf(m),r.flags|=256,zn(n,r,l,f),r.child}var If={dehydrated:null,treeContext:null,retryLane:0};function Uf(n){return{baseLanes:n,cachePool:null,transitions:null}}function A_(n,r,l){var f=r.pendingProps,m=Yt.current,v=!1,A=(r.flags&128)!==0,F;if((F=A)||(F=n!==null&&n.memoizedState===null?!1:(m&2)!==0),F?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Bt(Yt,m&1),n===null)return lf(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=f.children,n=f.fallback,v?(f=r.mode,v=r.child,A={mode:"hidden",children:A},(f&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=Cu(A,f,0,null),n=Os(n,f,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Uf(l),r.memoizedState=If,n):Ff(r,A));if(m=n.memoizedState,m!==null&&(F=m.dehydrated,F!==null))return xy(n,r,A,f,F,m,l);if(v){v=f.fallback,A=r.mode,m=n.child,F=m.sibling;var z={mode:"hidden",children:f.children};return(A&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=z,r.deletions=null):(f=es(m,z),f.subtreeFlags=m.subtreeFlags&14680064),F!==null?v=es(F,v):(v=Os(v,A,l,null),v.flags|=2),v.return=r,f.return=r,f.sibling=v,r.child=f,f=v,v=r.child,A=n.child.memoizedState,A=A===null?Uf(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~l,r.memoizedState=If,f}return v=n.child,n=v.sibling,f=es(v,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Ff(n,r){return r=Cu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function pu(n,r,l,f){return f!==null&&uf(f),ya(r,n.child,null,l),n=Ff(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function xy(n,r,l,f,m,v,A){if(l)return r.flags&256?(r.flags&=-257,f=Pf(Error(t(422))),pu(n,r,A,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=f.fallback,m=r.mode,f=Cu({mode:"visible",children:f.children},m,0,null),v=Os(v,m,A,null),v.flags|=2,f.return=r,v.return=r,f.sibling=v,r.child=f,(r.mode&1)!==0&&ya(r,n.child,null,A),r.child.memoizedState=Uf(A),r.memoizedState=If,v);if((r.mode&1)===0)return pu(n,r,A,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var F=f.dgst;return f=F,v=Error(t(419)),f=Pf(v,f,void 0),pu(n,r,A,f)}if(F=(A&n.childLanes)!==0,qn||F){if(f=gn,f!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|A))!==0?0:m,m!==0&&m!==v.retryLane&&(v.retryLane=m,gr(n,m),zi(f,n,m,-1))}return Qf(),f=Pf(Error(t(421))),pu(n,r,A,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=Ly.bind(null,n),m._reactRetry=r,null):(n=v.treeContext,li=Gr(m.nextSibling),oi=r,Wt=!0,Fi=null,n!==null&&(Si[Mi++]=mr,Si[Mi++]=_r,Si[Mi++]=bs,mr=n.id,_r=n.overflow,bs=r),r=Ff(r,f.children),r.flags|=4096,r)}function C_(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),hf(n.return,r,l)}function Of(n,r,l,f,m){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=l,v.tailMode=m)}function b_(n,r,l){var f=r.pendingProps,m=f.revealOrder,v=f.tail;if(zn(n,r,f.children,l),f=Yt.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&C_(n,l,r);else if(n.tag===19)C_(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Bt(Yt,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&ou(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Of(r,!1,m,l,v);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&ou(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Of(r,!0,l,null,v);break;case"together":Of(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function mu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function xr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Ns|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=es(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=es(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function yy(n,r,l){switch(r.tag){case 3:T_(r),xa();break;case 5:Hm(r);break;case 1:Yn(r.type)&&Zl(r);break;case 4:_f(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Bt(iu,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Bt(Yt,Yt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?A_(n,r,l):(Bt(Yt,Yt.current&1),n=xr(n,r,l),n!==null?n.sibling:null);Bt(Yt,Yt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return b_(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Bt(Yt,Yt.current),f)break;return null;case 22:case 23:return r.lanes=0,S_(n,r,l)}return xr(n,r,l)}var R_,kf,P_,D_;R_=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},kf=function(){},P_=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,Ds(Ki.current);var v=null;switch(l){case"input":m=xt(n,m),f=xt(n,f),v=[];break;case"select":m=ae({},m,{value:void 0}),f=ae({},f,{value:void 0}),v=[];break;case"textarea":m=je(n,m),f=je(n,f),v=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=ql)}Ye(l,f);var A;l=null;for(le in m)if(!f.hasOwnProperty(le)&&m.hasOwnProperty(le)&&m[le]!=null)if(le==="style"){var F=m[le];for(A in F)F.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(s.hasOwnProperty(le)?v||(v=[]):(v=v||[]).push(le,null));for(le in f){var z=f[le];if(F=m!=null?m[le]:void 0,f.hasOwnProperty(le)&&z!==F&&(z!=null||F!=null))if(le==="style")if(F){for(A in F)!F.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&F[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(v||(v=[]),v.push(le,l)),l=z;else le==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(v=v||[]).push(le,z)):le==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(le,""+z):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(s.hasOwnProperty(le)?(z!=null&&le==="onScroll"&&zt("scroll",n),v||F===z||(v=[])):(v=v||[]).push(le,z))}l&&(v=v||[]).push("style",l);var le=v;(r.updateQueue=le)&&(r.flags|=4)}},D_=function(n,r,l,f){l!==f&&(r.flags|=4)};function Vo(n,r){if(!Wt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Rn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function Sy(n,r,l){var f=r.pendingProps;switch(af(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(r),null;case 1:return Yn(r.type)&&Kl(),Rn(r),null;case 3:return f=r.stateNode,Ea(),Vt(jn),Vt(Cn),xf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(tu(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Fi!==null&&($f(Fi),Fi=null))),kf(n,r),Rn(r),null;case 5:gf(r);var m=Ds(Fo.current);if(l=r.type,n!==null&&r.stateNode!=null)P_(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Rn(r),null}if(n=Ds(Ki.current),tu(r)){f=r.stateNode,l=r.type;var v=r.memoizedProps;switch(f[$i]=r,f[Do]=v,n=(r.mode&1)!==0,l){case"dialog":zt("cancel",f),zt("close",f);break;case"iframe":case"object":case"embed":zt("load",f);break;case"video":case"audio":for(m=0;m<bo.length;m++)zt(bo[m],f);break;case"source":zt("error",f);break;case"img":case"image":case"link":zt("error",f),zt("load",f);break;case"details":zt("toggle",f);break;case"input":Dt(f,v),zt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},zt("invalid",f);break;case"textarea":U(f,v),zt("invalid",f)}Ye(l,v),m=null;for(var A in v)if(v.hasOwnProperty(A)){var F=v[A];A==="children"?typeof F=="string"?f.textContent!==F&&(v.suppressHydrationWarning!==!0&&Yl(f.textContent,F,n),m=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(v.suppressHydrationWarning!==!0&&Yl(f.textContent,F,n),m=["children",""+F]):s.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&zt("scroll",f)}switch(l){case"input":pt(f),V(f,v,!0);break;case"textarea":pt(f),Y(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=ql)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=A.createElement(l,{is:f.is}):(n=A.createElement(l),l==="select"&&(A=n,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):n=A.createElementNS(n,l),n[$i]=r,n[Do]=f,R_(n,r,!1,!1),r.stateNode=n;e:{switch(A=Ce(l,f),l){case"dialog":zt("cancel",n),zt("close",n),m=f;break;case"iframe":case"object":case"embed":zt("load",n),m=f;break;case"video":case"audio":for(m=0;m<bo.length;m++)zt(bo[m],n);m=f;break;case"source":zt("error",n),m=f;break;case"img":case"image":case"link":zt("error",n),zt("load",n),m=f;break;case"details":zt("toggle",n),m=f;break;case"input":Dt(n,f),m=xt(n,f),zt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=ae({},f,{value:void 0}),zt("invalid",n);break;case"textarea":U(n,f),m=je(n,f),zt("invalid",n);break;default:m=f}Ye(l,m),F=m;for(v in F)if(F.hasOwnProperty(v)){var z=F[v];v==="style"?Re(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&$e(n,z)):v==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Te(n,z):typeof z=="number"&&Te(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?z!=null&&v==="onScroll"&&zt("scroll",n):z!=null&&L(n,v,z,A))}switch(l){case"input":pt(n),V(n,f,!1);break;case"textarea":pt(n),Y(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Se(f.value));break;case"select":n.multiple=!!f.multiple,v=f.value,v!=null?yt(n,!!f.multiple,v,!1):f.defaultValue!=null&&yt(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=ql)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Rn(r),null;case 6:if(n&&r.stateNode!=null)D_(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ds(Fo.current),Ds(Ki.current),tu(r)){if(f=r.stateNode,l=r.memoizedProps,f[$i]=r,(v=f.nodeValue!==l)&&(n=oi,n!==null))switch(n.tag){case 3:Yl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yl(f.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[$i]=r,r.stateNode=f}return Rn(r),null;case 13:if(Vt(Yt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&li!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Im(),xa(),r.flags|=98560,v=!1;else if(v=tu(r),f!==null&&f.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[$i]=r}else xa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Rn(r),v=!1}else Fi!==null&&($f(Fi),Fi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Yt.current&1)!==0?fn===0&&(fn=3):Qf())),r.updateQueue!==null&&(r.flags|=4),Rn(r),null);case 4:return Ea(),kf(n,r),n===null&&Ro(r.stateNode.containerInfo),Rn(r),null;case 10:return df(r.type._context),Rn(r),null;case 17:return Yn(r.type)&&Kl(),Rn(r),null;case 19:if(Vt(Yt),v=r.memoizedState,v===null)return Rn(r),null;if(f=(r.flags&128)!==0,A=v.rendering,A===null)if(f)Vo(v,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=ou(n),A!==null){for(r.flags|=128,Vo(v,!1),f=A.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)v=l,n=f,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Bt(Yt,Yt.current&1|2),r.child}n=n.sibling}v.tail!==null&&jt()>Ca&&(r.flags|=128,f=!0,Vo(v,!1),r.lanes=4194304)}else{if(!f)if(n=ou(A),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Vo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!Wt)return Rn(r),null}else 2*jt()-v.renderingStartTime>Ca&&l!==1073741824&&(r.flags|=128,f=!0,Vo(v,!1),r.lanes=4194304);v.isBackwards?(A.sibling=r.child,r.child=A):(l=v.last,l!==null?l.sibling=A:r.child=A,v.last=A)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=jt(),r.sibling=null,l=Yt.current,Bt(Yt,f?l&1|2:l&1),r):(Rn(r),null);case 22:case 23:return Zf(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(ui&1073741824)!==0&&(Rn(r),r.subtreeFlags&6&&(r.flags|=8192)):Rn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function My(n,r){switch(af(r),r.tag){case 1:return Yn(r.type)&&Kl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ea(),Vt(jn),Vt(Cn),xf(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return gf(r),null;case 13:if(Vt(Yt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));xa()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Vt(Yt),null;case 4:return Ea(),null;case 10:return df(r.type._context),null;case 22:case 23:return Zf(),null;case 24:return null;default:return null}}var _u=!1,Pn=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,He=null;function wa(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Qt(n,r,f)}else l.current=null}function Bf(n,r,l){try{l()}catch(f){Qt(n,r,f)}}var L_=!1;function Ty(n,r){if(Kc=Fl,n=cm(),Hc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var A=0,F=-1,z=-1,le=0,ge=0,xe=n,_e=null;t:for(;;){for(var Oe;xe!==l||m!==0&&xe.nodeType!==3||(F=A+m),xe!==v||f!==0&&xe.nodeType!==3||(z=A+f),xe.nodeType===3&&(A+=xe.nodeValue.length),(Oe=xe.firstChild)!==null;)_e=xe,xe=Oe;for(;;){if(xe===n)break t;if(_e===l&&++le===m&&(F=A),_e===v&&++ge===f&&(z=A),(Oe=xe.nextSibling)!==null)break;xe=_e,_e=xe.parentNode}xe=Oe}l=F===-1||z===-1?null:{start:F,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zc={focusedElem:n,selectionRange:l},Fl=!1,He=r;He!==null;)if(r=He,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,He=n;else for(;He!==null;){r=He;try{var Xe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,rn=Xe.memoizedState,Z=r.stateNode,G=Z.getSnapshotBeforeUpdate(r.elementType===r.type?qe:Oi(r.type,qe),rn);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Qt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,He=n;break}He=r.return}return Xe=L_,L_=!1,Xe}function Ho(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var v=m.destroy;m.destroy=void 0,v!==void 0&&Bf(r,l,v)}m=m.next}while(m!==f)}}function gu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function zf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function N_(n){var r=n.alternate;r!==null&&(n.alternate=null,N_(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[$i],delete r[Do],delete r[tf],delete r[ay],delete r[oy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function I_(n){return n.tag===5||n.tag===3||n.tag===4}function U_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||I_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ql));else if(f!==4&&(n=n.child,n!==null))for(Vf(n,r,l),n=n.sibling;n!==null;)Vf(n,r,l),n=n.sibling}function Hf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Hf(n,r,l),n=n.sibling;n!==null;)Hf(n,r,l),n=n.sibling}var Sn=null,ki=!1;function $r(n,r,l){for(l=l.child;l!==null;)F_(n,r,l),l=l.sibling}function F_(n,r,l){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Fe,l)}catch{}switch(l.tag){case 5:Pn||wa(l,r);case 6:var f=Sn,m=ki;Sn=null,$r(n,r,l),Sn=f,ki=m,Sn!==null&&(ki?(n=Sn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Sn.removeChild(l.stateNode));break;case 18:Sn!==null&&(ki?(n=Sn,l=l.stateNode,n.nodeType===8?ef(n.parentNode,l):n.nodeType===1&&ef(n,l),yo(n)):ef(Sn,l.stateNode));break;case 4:f=Sn,m=ki,Sn=l.stateNode.containerInfo,ki=!0,$r(n,r,l),Sn=f,ki=m;break;case 0:case 11:case 14:case 15:if(!Pn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var v=m,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&Bf(l,r,A),m=m.next}while(m!==f)}$r(n,r,l);break;case 1:if(!Pn&&(wa(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){Qt(l,r,F)}$r(n,r,l);break;case 21:$r(n,r,l);break;case 22:l.mode&1?(Pn=(f=Pn)||l.memoizedState!==null,$r(n,r,l),Pn=f):$r(n,r,l);break;default:$r(n,r,l)}}function O_(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Ey),r.forEach(function(f){var m=Ny.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Bi(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var v=n,A=r,F=A;e:for(;F!==null;){switch(F.tag){case 5:Sn=F.stateNode,ki=!1;break e;case 3:Sn=F.stateNode.containerInfo,ki=!0;break e;case 4:Sn=F.stateNode.containerInfo,ki=!0;break e}F=F.return}if(Sn===null)throw Error(t(160));F_(v,A,m),Sn=null,ki=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(le){Qt(m,r,le)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)k_(r,n),r=r.sibling}function k_(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bi(r,n),Qi(n),f&4){try{Ho(3,n,n.return),gu(3,n)}catch(qe){Qt(n,n.return,qe)}try{Ho(5,n,n.return)}catch(qe){Qt(n,n.return,qe)}}break;case 1:Bi(r,n),Qi(n),f&512&&l!==null&&wa(l,l.return);break;case 5:if(Bi(r,n),Qi(n),f&512&&l!==null&&wa(l,l.return),n.flags&32){var m=n.stateNode;try{Te(m,"")}catch(qe){Qt(n,n.return,qe)}}if(f&4&&(m=n.stateNode,m!=null)){var v=n.memoizedProps,A=l!==null?l.memoizedProps:v,F=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{F==="input"&&v.type==="radio"&&v.name!=null&&lt(m,v),Ce(F,A);var le=Ce(F,v);for(A=0;A<z.length;A+=2){var ge=z[A],xe=z[A+1];ge==="style"?Re(m,xe):ge==="dangerouslySetInnerHTML"?$e(m,xe):ge==="children"?Te(m,xe):L(m,ge,xe,le)}switch(F){case"input":Ht(m,v);break;case"textarea":w(m,v);break;case"select":var _e=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!v.multiple;var Oe=v.value;Oe!=null?yt(m,!!v.multiple,Oe,!1):_e!==!!v.multiple&&(v.defaultValue!=null?yt(m,!!v.multiple,v.defaultValue,!0):yt(m,!!v.multiple,v.multiple?[]:"",!1))}m[Do]=v}catch(qe){Qt(n,n.return,qe)}}break;case 6:if(Bi(r,n),Qi(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,v=n.memoizedProps;try{m.nodeValue=v}catch(qe){Qt(n,n.return,qe)}}break;case 3:if(Bi(r,n),Qi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{yo(r.containerInfo)}catch(qe){Qt(n,n.return,qe)}break;case 4:Bi(r,n),Qi(n);break;case 13:Bi(r,n),Qi(n),m=n.child,m.flags&8192&&(v=m.memoizedState!==null,m.stateNode.isHidden=v,!v||m.alternate!==null&&m.alternate.memoizedState!==null||(Xf=jt())),f&4&&O_(n);break;case 22:if(ge=l!==null&&l.memoizedState!==null,n.mode&1?(Pn=(le=Pn)||ge,Bi(r,n),Pn=le):Bi(r,n),Qi(n),f&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!ge&&(n.mode&1)!==0)for(He=n,ge=n.child;ge!==null;){for(xe=He=ge;He!==null;){switch(_e=He,Oe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ho(4,_e,_e.return);break;case 1:wa(_e,_e.return);var Xe=_e.stateNode;if(typeof Xe.componentWillUnmount=="function"){f=_e,l=_e.return;try{r=f,Xe.props=r.memoizedProps,Xe.state=r.memoizedState,Xe.componentWillUnmount()}catch(qe){Qt(f,l,qe)}}break;case 5:wa(_e,_e.return);break;case 22:if(_e.memoizedState!==null){V_(xe);continue}}Oe!==null?(Oe.return=_e,He=Oe):V_(xe)}ge=ge.sibling}e:for(ge=null,xe=n;;){if(xe.tag===5){if(ge===null){ge=xe;try{m=xe.stateNode,le?(v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(F=xe.stateNode,z=xe.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=ye("display",A))}catch(qe){Qt(n,n.return,qe)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=le?"":xe.memoizedProps}catch(qe){Qt(n,n.return,qe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Bi(r,n),Qi(n),f&4&&O_(n);break;case 21:break;default:Bi(r,n),Qi(n)}}function Qi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(I_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Te(m,""),f.flags&=-33);var v=U_(n);Hf(n,v,m);break;case 3:case 4:var A=f.stateNode.containerInfo,F=U_(n);Vf(n,F,A);break;default:throw Error(t(161))}}catch(z){Qt(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function wy(n,r,l){He=n,B_(n)}function B_(n,r,l){for(var f=(n.mode&1)!==0;He!==null;){var m=He,v=m.child;if(m.tag===22&&f){var A=m.memoizedState!==null||_u;if(!A){var F=m.alternate,z=F!==null&&F.memoizedState!==null||Pn;F=_u;var le=Pn;if(_u=A,(Pn=z)&&!le)for(He=m;He!==null;)A=He,z=A.child,A.tag===22&&A.memoizedState!==null?H_(m):z!==null?(z.return=A,He=z):H_(m);for(;v!==null;)He=v,B_(v),v=v.sibling;He=m,_u=F,Pn=le}z_(n)}else(m.subtreeFlags&8772)!==0&&v!==null?(v.return=m,He=v):z_(n)}}function z_(n){for(;He!==null;){var r=He;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Pn||gu(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Pn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Oi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Vm(r,v,f);break;case 3:var A=r.updateQueue;if(A!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Vm(r,A,l)}break;case 5:var F=r.stateNode;if(l===null&&r.flags&4){l=F;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var le=r.alternate;if(le!==null){var ge=le.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&yo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||r.flags&512&&zf(r)}catch(_e){Qt(r,r.return,_e)}}if(r===n){He=null;break}if(l=r.sibling,l!==null){l.return=r.return,He=l;break}He=r.return}}function V_(n){for(;He!==null;){var r=He;if(r===n){He=null;break}var l=r.sibling;if(l!==null){l.return=r.return,He=l;break}He=r.return}}function H_(n){for(;He!==null;){var r=He;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{gu(4,r)}catch(z){Qt(r,l,z)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(z){Qt(r,m,z)}}var v=r.return;try{zf(r)}catch(z){Qt(r,v,z)}break;case 5:var A=r.return;try{zf(r)}catch(z){Qt(r,A,z)}}}catch(z){Qt(r,r.return,z)}if(r===n){He=null;break}var F=r.sibling;if(F!==null){F.return=r.return,He=F;break}He=r.return}}var Ay=Math.ceil,vu=C.ReactCurrentDispatcher,Gf=C.ReactCurrentOwner,wi=C.ReactCurrentBatchConfig,Et=0,gn=null,an=null,Mn=0,ui=0,Aa=Wr(0),fn=0,Go=null,Ns=0,xu=0,Wf=0,Wo=null,$n=null,Xf=0,Ca=1/0,yr=null,yu=!1,jf=null,Kr=null,Su=!1,Zr=null,Mu=0,Xo=0,Yf=null,Eu=-1,Tu=0;function Vn(){return(Et&6)!==0?jt():Eu!==-1?Eu:Eu=jt()}function Qr(n){return(n.mode&1)===0?1:(Et&2)!==0&&Mn!==0?Mn&-Mn:uy.transition!==null?(Tu===0&&(Tu=An()),Tu):(n=st,n!==0||(n=window.event,n=n===void 0?16:Wp(n.type)),n)}function zi(n,r,l,f){if(50<Xo)throw Xo=0,Yf=null,Error(t(185));un(n,l,f),((Et&2)===0||n!==gn)&&(n===gn&&((Et&2)===0&&(xu|=l),fn===4&&Jr(n,Mn)),Kn(n,f),l===1&&Et===0&&(r.mode&1)===0&&(Ca=jt()+500,Ql&&jr()))}function Kn(n,r){var l=n.callbackNode;Pt(n,r);var f=wt(n,n===gn?Mn:0);if(f===0)l!==null&&Nl(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&Nl(l),r===1)n.tag===0?ly(W_.bind(null,n)):Rm(W_.bind(null,n)),ry(function(){(Et&6)===0&&jr()}),l=null;else{switch(Bn(f)){case 1:l=$;break;case 4:l=ue;break;case 16:l=re;break;case 536870912:l=Pe;break;default:l=re}l=Q_(l,G_.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function G_(n,r){if(Eu=-1,Tu=0,(Et&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ba()&&n.callbackNode!==l)return null;var f=wt(n,n===gn?Mn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=wu(n,f);else{r=f;var m=Et;Et|=2;var v=j_();(gn!==n||Mn!==r)&&(yr=null,Ca=jt()+500,Us(n,r));do try{Ry();break}catch(F){X_(n,F)}while(!0);ff(),vu.current=v,Et=m,an!==null?r=0:(gn=null,Mn=0,r=fn)}if(r!==0){if(r===2&&(m=_t(n),m!==0&&(f=m,r=qf(n,m))),r===1)throw l=Go,Us(n,0),Jr(n,f),Kn(n,jt()),l;if(r===6)Jr(n,f);else{if(m=n.current.alternate,(f&30)===0&&!Cy(m)&&(r=wu(n,f),r===2&&(v=_t(n),v!==0&&(f=v,r=qf(n,v))),r===1))throw l=Go,Us(n,0),Jr(n,f),Kn(n,jt()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Fs(n,$n,yr);break;case 3:if(Jr(n,f),(f&130023424)===f&&(r=Xf+500-jt(),10<r)){if(wt(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){Vn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Jc(Fs.bind(null,n,$n,yr),r);break}Fs(n,$n,yr);break;case 4:if(Jr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var A=31-ke(f);v=1<<A,A=r[A],A>m&&(m=A),f&=~v}if(f=m,f=jt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*Ay(f/1960))-f,10<f){n.timeoutHandle=Jc(Fs.bind(null,n,$n,yr),f);break}Fs(n,$n,yr);break;case 5:Fs(n,$n,yr);break;default:throw Error(t(329))}}}return Kn(n,jt()),n.callbackNode===l?G_.bind(null,n):null}function qf(n,r){var l=Wo;return n.current.memoizedState.isDehydrated&&(Us(n,r).flags|=256),n=wu(n,r),n!==2&&(r=$n,$n=l,r!==null&&$f(r)),n}function $f(n){$n===null?$n=n:$n.push.apply($n,n)}function Cy(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],v=m.getSnapshot;m=m.value;try{if(!Ui(v(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Jr(n,r){for(r&=~Wf,r&=~xu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ke(r),f=1<<l;n[l]=-1,r&=~f}}function W_(n){if((Et&6)!==0)throw Error(t(327));ba();var r=wt(n,0);if((r&1)===0)return Kn(n,jt()),null;var l=wu(n,r);if(n.tag!==0&&l===2){var f=_t(n);f!==0&&(r=f,l=qf(n,f))}if(l===1)throw l=Go,Us(n,0),Jr(n,r),Kn(n,jt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Fs(n,$n,yr),Kn(n,jt()),null}function Kf(n,r){var l=Et;Et|=1;try{return n(r)}finally{Et=l,Et===0&&(Ca=jt()+500,Ql&&jr())}}function Is(n){Zr!==null&&Zr.tag===0&&(Et&6)===0&&ba();var r=Et;Et|=1;var l=wi.transition,f=st;try{if(wi.transition=null,st=1,n)return n()}finally{st=f,wi.transition=l,Et=r,(Et&6)===0&&jr()}}function Zf(){ui=Aa.current,Vt(Aa)}function Us(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,iy(l)),an!==null)for(l=an.return;l!==null;){var f=l;switch(af(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Kl();break;case 3:Ea(),Vt(jn),Vt(Cn),xf();break;case 5:gf(f);break;case 4:Ea();break;case 13:Vt(Yt);break;case 19:Vt(Yt);break;case 10:df(f.type._context);break;case 22:case 23:Zf()}l=l.return}if(gn=n,an=n=es(n.current,null),Mn=ui=r,fn=0,Go=null,Wf=xu=Ns=0,$n=Wo=null,Ps!==null){for(r=0;r<Ps.length;r++)if(l=Ps[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,v=l.pending;if(v!==null){var A=v.next;v.next=m,f.next=A}l.pending=f}Ps=null}return n}function X_(n,r){do{var l=an;try{if(ff(),lu.current=du,uu){for(var f=qt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}uu=!1}if(Ls=0,_n=cn=qt=null,Oo=!1,ko=0,Gf.current=null,l===null||l.return===null){fn=1,Go=r,an=null;break}e:{var v=n,A=l.return,F=l,z=r;if(r=Mn,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var le=z,ge=F,xe=ge.tag;if((ge.mode&1)===0&&(xe===0||xe===11||xe===15)){var _e=ge.alternate;_e?(ge.updateQueue=_e.updateQueue,ge.memoizedState=_e.memoizedState,ge.lanes=_e.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Oe=__(A);if(Oe!==null){Oe.flags&=-257,g_(Oe,A,F,v,r),Oe.mode&1&&m_(v,le,r),r=Oe,z=le;var Xe=r.updateQueue;if(Xe===null){var qe=new Set;qe.add(z),r.updateQueue=qe}else Xe.add(z);break e}else{if((r&1)===0){m_(v,le,r),Qf();break e}z=Error(t(426))}}else if(Wt&&F.mode&1){var rn=__(A);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),g_(rn,A,F,v,r),uf(Ta(z,F));break e}}v=z=Ta(z,F),fn!==4&&(fn=2),Wo===null?Wo=[v]:Wo.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Z=h_(v,z,r);zm(v,Z);break e;case 1:F=z;var G=v.type,ee=v.stateNode;if((v.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Kr===null||!Kr.has(ee)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=p_(v,F,r);zm(v,Ee);break e}}v=v.return}while(v!==null)}q_(l)}catch(Ke){r=Ke,an===l&&l!==null&&(an=l=l.return);continue}break}while(!0)}function j_(){var n=vu.current;return vu.current=du,n===null?du:n}function Qf(){(fn===0||fn===3||fn===2)&&(fn=4),gn===null||(Ns&268435455)===0&&(xu&268435455)===0||Jr(gn,Mn)}function wu(n,r){var l=Et;Et|=2;var f=j_();(gn!==n||Mn!==r)&&(yr=null,Us(n,r));do try{by();break}catch(m){X_(n,m)}while(!0);if(ff(),Et=l,vu.current=f,an!==null)throw Error(t(261));return gn=null,Mn=0,fn}function by(){for(;an!==null;)Y_(an)}function Ry(){for(;an!==null&&!bc();)Y_(an)}function Y_(n){var r=Z_(n.alternate,n,ui);n.memoizedProps=n.pendingProps,r===null?q_(n):an=r,Gf.current=null}function q_(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Sy(l,r,ui),l!==null){an=l;return}}else{if(l=My(l,r),l!==null){l.flags&=32767,an=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,an=null;return}}if(r=r.sibling,r!==null){an=r;return}an=r=n}while(r!==null);fn===0&&(fn=5)}function Fs(n,r,l){var f=st,m=wi.transition;try{wi.transition=null,st=1,Py(n,r,l,f)}finally{wi.transition=m,st=f}return null}function Py(n,r,l,f){do ba();while(Zr!==null);if((Et&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(ws(n,v),n===gn&&(an=gn=null,Mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Su||(Su=!0,Q_(re,function(){return ba(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=wi.transition,wi.transition=null;var A=st;st=1;var F=Et;Et|=4,Gf.current=null,Ty(n,l),k_(l,n),Kx(Zc),Fl=!!Kc,Zc=Kc=null,n.current=l,wy(l),Rc(),Et=F,st=A,wi.transition=v}else n.current=l;if(Su&&(Su=!1,Zr=n,Mu=m),v=n.pendingLanes,v===0&&(Kr=null),Ge(l.stateNode),Kn(n,jt()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(yu)throw yu=!1,n=jf,jf=null,n;return(Mu&1)!==0&&n.tag!==0&&ba(),v=n.pendingLanes,(v&1)!==0?n===Yf?Xo++:(Xo=0,Yf=n):Xo=0,jr(),null}function ba(){if(Zr!==null){var n=Bn(Mu),r=wi.transition,l=st;try{if(wi.transition=null,st=16>n?16:n,Zr===null)var f=!1;else{if(n=Zr,Zr=null,Mu=0,(Et&6)!==0)throw Error(t(331));var m=Et;for(Et|=4,He=n.current;He!==null;){var v=He,A=v.child;if((He.flags&16)!==0){var F=v.deletions;if(F!==null){for(var z=0;z<F.length;z++){var le=F[z];for(He=le;He!==null;){var ge=He;switch(ge.tag){case 0:case 11:case 15:Ho(8,ge,v)}var xe=ge.child;if(xe!==null)xe.return=ge,He=xe;else for(;He!==null;){ge=He;var _e=ge.sibling,Oe=ge.return;if(N_(ge),ge===le){He=null;break}if(_e!==null){_e.return=Oe,He=_e;break}He=Oe}}}var Xe=v.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var rn=qe.sibling;qe.sibling=null,qe=rn}while(qe!==null)}}He=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,He=A;else e:for(;He!==null;){if(v=He,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Ho(9,v,v.return)}var Z=v.sibling;if(Z!==null){Z.return=v.return,He=Z;break e}He=v.return}}var G=n.current;for(He=G;He!==null;){A=He;var ee=A.child;if((A.subtreeFlags&2064)!==0&&ee!==null)ee.return=A,He=ee;else e:for(A=G;He!==null;){if(F=He,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:gu(9,F)}}catch(Ke){Qt(F,F.return,Ke)}if(F===A){He=null;break e}var Ee=F.sibling;if(Ee!==null){Ee.return=F.return,He=Ee;break e}He=F.return}}if(Et=m,jr(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Fe,n)}catch{}f=!0}return f}finally{st=l,wi.transition=r}}return!1}function $_(n,r,l){r=Ta(l,r),r=h_(n,r,1),n=qr(n,r,1),r=Vn(),n!==null&&(un(n,1,r),Kn(n,r))}function Qt(n,r,l){if(n.tag===3)$_(n,n,l);else for(;r!==null;){if(r.tag===3){$_(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Kr===null||!Kr.has(f))){n=Ta(l,n),n=p_(r,n,1),r=qr(r,n,1),n=Vn(),r!==null&&(un(r,1,n),Kn(r,n));break}}r=r.return}}function Dy(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Vn(),n.pingedLanes|=n.suspendedLanes&l,gn===n&&(Mn&l)===l&&(fn===4||fn===3&&(Mn&130023424)===Mn&&500>jt()-Xf?Us(n,0):Wf|=l),Kn(n,r)}function K_(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var l=Vn();n=gr(n,r),n!==null&&(un(n,r,l),Kn(n,l))}function Ly(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),K_(n,l)}function Ny(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),K_(n,l)}var Z_;Z_=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||jn.current)qn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return qn=!1,yy(n,r,l);qn=(n.flags&131072)!==0}else qn=!1,Wt&&(r.flags&1048576)!==0&&Pm(r,eu,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;mu(n,r),n=r.pendingProps;var m=_a(r,Cn.current);Ma(r,l),m=Mf(null,r,f,n,m,l);var v=Ef();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yn(f)?(v=!0,Zl(r)):v=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,mf(r),m.updater=hu,r.stateNode=m,m._reactInternals=r,Rf(r,f,n,l),r=Nf(null,r,f,!0,v,l)):(r.tag=0,Wt&&v&&sf(r),zn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(mu(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=Uy(f),n=Oi(f,n),m){case 0:r=Lf(null,r,f,n,l);break e;case 1:r=E_(null,r,f,n,l);break e;case 11:r=v_(null,r,f,n,l);break e;case 14:r=x_(null,r,f,Oi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Oi(f,m),Lf(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Oi(f,m),E_(n,r,f,m,l);case 3:e:{if(T_(r),n===null)throw Error(t(387));f=r.pendingProps,v=r.memoizedState,m=v.element,Bm(n,r),au(r,f,null,l);var A=r.memoizedState;if(f=A.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){m=Ta(Error(t(423)),r),r=w_(n,r,f,l,m);break e}else if(f!==m){m=Ta(Error(t(424)),r),r=w_(n,r,f,l,m);break e}else for(li=Gr(r.stateNode.containerInfo.firstChild),oi=r,Wt=!0,Fi=null,l=Om(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(xa(),f===m){r=xr(n,r,l);break e}zn(n,r,f,l)}r=r.child}return r;case 5:return Hm(r),n===null&&lf(r),f=r.type,m=r.pendingProps,v=n!==null?n.memoizedProps:null,A=m.children,Qc(f,m)?A=null:v!==null&&Qc(f,v)&&(r.flags|=32),M_(n,r),zn(n,r,A,l),r.child;case 6:return n===null&&lf(r),null;case 13:return A_(n,r,l);case 4:return _f(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=ya(r,null,f,l):zn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Oi(f,m),v_(n,r,f,m,l);case 7:return zn(n,r,r.pendingProps,l),r.child;case 8:return zn(n,r,r.pendingProps.children,l),r.child;case 12:return zn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,v=r.memoizedProps,A=m.value,Bt(iu,f._currentValue),f._currentValue=A,v!==null)if(Ui(v.value,A)){if(v.children===m.children&&!jn.current){r=xr(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var F=v.dependencies;if(F!==null){A=v.child;for(var z=F.firstContext;z!==null;){if(z.context===f){if(v.tag===1){z=vr(-1,l&-l),z.tag=2;var le=v.updateQueue;if(le!==null){le=le.shared;var ge=le.pending;ge===null?z.next=z:(z.next=ge.next,ge.next=z),le.pending=z}}v.lanes|=l,z=v.alternate,z!==null&&(z.lanes|=l),hf(v.return,l,r),F.lanes|=l;break}z=z.next}}else if(v.tag===10)A=v.type===r.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=l,F=A.alternate,F!==null&&(F.lanes|=l),hf(A,l,r),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===r){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}zn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,Ma(r,l),m=Ei(m),f=f(m),r.flags|=1,zn(n,r,f,l),r.child;case 14:return f=r.type,m=Oi(f,r.pendingProps),m=Oi(f.type,m),x_(n,r,f,m,l);case 15:return y_(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Oi(f,m),mu(n,r),r.tag=1,Yn(f)?(n=!0,Zl(r)):n=!1,Ma(r,l),f_(r,f,m),Rf(r,f,m,l),Nf(null,r,f,!0,n,l);case 19:return b_(n,r,l);case 22:return S_(n,r,l)}throw Error(t(156,r.tag))};function Q_(n,r){return Ll(n,r)}function Iy(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,r,l,f){return new Iy(n,r,l,f)}function Jf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Uy(n){if(typeof n=="function")return Jf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===X)return 11;if(n===te)return 14}return 2}function es(n,r){var l=n.alternate;return l===null?(l=Ai(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Au(n,r,l,f,m,v){var A=2;if(f=n,typeof n=="function")Jf(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case I:return Os(l.children,m,v,r);case k:A=8,m|=8;break;case T:return n=Ai(12,l,r,m|2),n.elementType=T,n.lanes=v,n;case W:return n=Ai(13,l,r,m),n.elementType=W,n.lanes=v,n;case ne:return n=Ai(19,l,r,m),n.elementType=ne,n.lanes=v,n;case q:return Cu(l,m,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:A=10;break e;case B:A=9;break e;case X:A=11;break e;case te:A=14;break e;case Q:A=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ai(A,l,r,m),r.elementType=n,r.type=f,r.lanes=v,r}function Os(n,r,l,f){return n=Ai(7,n,f,r),n.lanes=l,n}function Cu(n,r,l,f){return n=Ai(22,n,f,r),n.elementType=q,n.lanes=l,n.stateNode={isHidden:!1},n}function ed(n,r,l){return n=Ai(6,n,null,r),n.lanes=l,n}function td(n,r,l){return r=Ai(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Fy(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function nd(n,r,l,f,m,v,A,F,z){return n=new Fy(n,r,l,F,z),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Ai(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(v),n}function Oy(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function J_(n){if(!n)return Xr;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Yn(l))return Cm(n,l,r)}return r}function eg(n,r,l,f,m,v,A,F,z){return n=nd(l,f,!0,n,m,v,A,F,z),n.context=J_(null),l=n.current,f=Vn(),m=Qr(l),v=vr(f,m),v.callback=r??null,qr(l,v,m),n.current.lanes=m,un(n,m,f),Kn(n,f),n}function bu(n,r,l,f){var m=r.current,v=Vn(),A=Qr(m);return l=J_(l),r.context===null?r.context=l:r.pendingContext=l,r=vr(v,A),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=qr(m,r,A),n!==null&&(zi(n,m,A,v),su(n,m,A)),A}function Ru(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function tg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function id(n,r){tg(n,r),(n=n.alternate)&&tg(n,r)}function ky(){return null}var ng=typeof reportError=="function"?reportError:function(n){console.error(n)};function rd(n){this._internalRoot=n}Pu.prototype.render=rd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));bu(n,r,null,null)},Pu.prototype.unmount=rd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Is(function(){bu(null,n,null,null)}),r[hr]=null}};function Pu(n){this._internalRoot=n}Pu.prototype.unstable_scheduleHydration=function(n){if(n){var r=qi();n={blockedOn:null,target:n,priority:r};for(var l=0;l<zr.length&&r!==0&&r<zr[l].priority;l++);zr.splice(l,0,n),l===0&&Hp(n)}};function sd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ig(){}function By(n,r,l,f,m){if(m){if(typeof f=="function"){var v=f;f=function(){var le=Ru(A);v.call(le)}}var A=eg(r,f,n,0,null,!1,!1,"",ig);return n._reactRootContainer=A,n[hr]=A.current,Ro(n.nodeType===8?n.parentNode:n),Is(),A}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var F=f;f=function(){var le=Ru(z);F.call(le)}}var z=nd(n,0,!1,null,null,!1,!1,"",ig);return n._reactRootContainer=z,n[hr]=z.current,Ro(n.nodeType===8?n.parentNode:n),Is(function(){bu(r,z,l,f)}),z}function Lu(n,r,l,f,m){var v=l._reactRootContainer;if(v){var A=v;if(typeof m=="function"){var F=m;m=function(){var z=Ru(A);F.call(z)}}bu(r,A,n,m)}else A=By(l,r,n,m,f);return Ru(A)}pn=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Ut(r.pendingLanes);l!==0&&(Lt(r,l|1),Kn(r,jt()),(Et&6)===0&&(Ca=jt()+500,jr()))}break;case 13:Is(function(){var f=gr(n,1);if(f!==null){var m=Vn();zi(f,n,1,m)}}),id(n,1)}},mn=function(n){if(n.tag===13){var r=gr(n,134217728);if(r!==null){var l=Vn();zi(r,n,134217728,l)}id(n,134217728)}},aa=function(n){if(n.tag===13){var r=Qr(n),l=gr(n,r);if(l!==null){var f=Vn();zi(l,n,r,f)}id(n,r)}},qi=function(){return st},zp=function(n,r){var l=st;try{return st=n,r()}finally{st=l}},De=function(n,r,l){switch(r){case"input":if(Ht(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=$l(f);if(!m)throw Error(t(90));nn(f),Ht(f,m)}}}break;case"textarea":w(n,l);break;case"select":r=l.value,r!=null&&yt(n,!!l.multiple,r,!1)}},it=Kf,Nt=Is;var zy={usingClientEntryPoint:!1,Events:[Lo,pa,$l,pe,be,Kf]},jo={findFiberByHostInstance:As,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vy={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=mo(n),n===null?null:n.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{Fe=Nu.inject(Vy),we=Nu}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zy,Zn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(r))throw Error(t(200));return Oy(n,r,null,l)},Zn.createRoot=function(n,r){if(!sd(n))throw Error(t(299));var l=!1,f="",m=ng;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=nd(n,1,!1,null,null,l,!1,f,m),n[hr]=r.current,Ro(n.nodeType===8?n.parentNode:n),new rd(r)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=mo(r),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return Is(n)},Zn.hydrate=function(n,r,l){if(!Du(r))throw Error(t(200));return Lu(null,n,r,!0,l)},Zn.hydrateRoot=function(n,r,l){if(!sd(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,v="",A=ng;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),r=eg(r,null,n,1,l??null,m,!1,v,A),n[hr]=r.current,Ro(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new Pu(r)},Zn.render=function(n,r,l){if(!Du(r))throw Error(t(200));return Lu(null,n,r,!1,l)},Zn.unmountComponentAtNode=function(n){if(!Du(n))throw Error(t(40));return n._reactRootContainer?(Is(function(){Lu(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},Zn.unstable_batchedUpdates=Kf,Zn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Du(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Lu(n,r,l,!1,f)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var fg;function $y(){if(fg)return ld.exports;fg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ld.exports=qy(),ld.exports}var dg;function Ky(){if(dg)return Iu;dg=1;var a=$y();return Iu.createRoot=a.createRoot,Iu.hydrateRoot=a.hydrateRoot,Iu}var Zy=Ky(),Ni=sp();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jy=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),hg=a=>{const e=Jy(a);return e.charAt(0).toUpperCase()+e.slice(1)},D0=(...a)=>a.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=Ni.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:o,iconNode:u,...c},d)=>Ni.createElement("svg",{ref:d,...eS,width:e,height:e,stroke:a,strokeWidth:i?Number(t)*24/Number(e):t,className:D0("lucide",s),...c},[...u.map(([h,p])=>Ni.createElement(h,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=(a,e)=>{const t=Ni.forwardRef(({className:i,...s},o)=>Ni.createElement(tS,{ref:o,iconNode:e,className:D0(`lucide-${Qy(hg(a))}`,`lucide-${a}`,i),...s}));return t.displayName=hg(a),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],iS=On("award",nS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],sS=On("building-2",rS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Sc=On("camera",aS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],lS=On("chevron-down",oS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],cS=On("facebook",uS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],L0=On("heart",fS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],hS=On("image",dS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],mS=On("instagram",pS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],gS=On("mail",_S);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],xS=On("map-pin",vS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],SS=On("menu",yS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],ES=On("package",MS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],wS=On("phone",TS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],CS=On("twitter",AS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],RS=On("users",bS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],DS=On("x",PS);function LS(){const[a,e]=Ni.useState(!1),[t,i]=Ni.useState(!1);Ni.useEffect(()=>{const o=()=>i(window.scrollY>20);return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const s=o=>{const u=document.getElementById(o);u==null||u.scrollIntoView({behavior:"smooth"}),e(!1)};return K.jsx("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4np p-2 ${t?"py-3 bg-black/80 backdrop-blur-lg border-b border-white/10":"py-5 bg-transparent"}`,children:K.jsxs("nav",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[K.jsxs("div",{className:"flex items-center justify-between",children:[K.jsxs("div",{className:"flex items-center gap-3 cursor-pointer group",onClick:()=>s("hero"),children:[K.jsx("div",{className:"p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors border border-white/10",children:K.jsx(Sc,{className:"w-5 h-5 text-white"})}),K.jsxs("span",{className:"text-xl font-black tracking-tighter text-white uppercase italic",children:["Balu",K.jsx("span",{className:"text-white/40",children:"graphy"})]})]}),K.jsx("div",{className:"hidden md:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md",children:["About","Gallery","Services","Contact"].map(o=>K.jsx("button",{onClick:()=>s(o.toLowerCase()),className:"px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all hover:bg-white/5 rounded-full",children:o},o))}),K.jsx("button",{className:"hidden md:block bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all",children:"Book Now"}),K.jsx("button",{onClick:()=>e(!a),className:"md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10",children:a?K.jsx(DS,{size:24}):K.jsx(SS,{size:24})})]}),K.jsx("div",{className:`fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${a?"opacity-100 translate-x-0":"opacity-0 translate-x-full"}`,children:K.jsx("div",{className:"flex flex-col items-center justify-center h-full gap-8",children:["About","Gallery","Services","Contact"].map((o,u)=>K.jsx("button",{style:{transitionDelay:`${u*100}ms`},onClick:()=>s(o.toLowerCase()),className:"text-3xl font-black uppercase italic text-white/40 hover:text-white transition-all",children:o},o))})})]})})}function NS(){const a=()=>{const e=document.getElementById("gallery");e==null||e.scrollIntoView({behavior:"smooth"})};return K.jsxs("section",{id:"hero",className:"relative h-screen flex items-center justify-center",children:[K.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[K.jsx("iframe",{className:"absolute top-1/2 left-1/2 h-[120%] w-[200%] -translate-x-1/2 -translate-y-1/2",src:"https://www.youtube.com/embed/iexmudnsUBY?start=0&end=45&autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=iexmudnsUBY,AltZDl-dFKw",allow:"autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),K.jsx("div",{className:"absolute inset-0 bg-black/40"})]}),K.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-end text-center text-white px-4 h-full pb-24",children:[K.jsx("h1",{className:"text-3xl md:text-4xl mb-4",children:"Balugraphy Official"}),K.jsx("p",{className:"text-xl md:text-1xl mb-8 text-gray-200",children:"Professional Photographer | Storyteller Through Lens"}),K.jsx("button",{onClick:a,className:"px-8 py-3 bg-transparent text-white border-2 border-white transition-colors rounded-sm hover:bg-white hover:text-black , hero-btn",children:"View My Work"})]}),K.jsx("button",{onClick:a,className:"absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce",children:K.jsx(lS,{className:"w-8 h-8"})})]})}function IS(){return K.jsx("section",{id:"about",className:"py-20 px-4 bg-[#0a0a0a] text-white",children:K.jsx("div",{className:"max-w-6xl mx-auto",children:K.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[K.jsx("div",{children:K.jsx("img",{src:"https://images.unsplash.com/photo-1692754107964-b0e0422ada3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjB3b3JraW5nJTIwY2FtZXJhfGVufDF8fHx8MTc2Nzg5ODE1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",alt:"Photographer at work",className:"w-full h-[500px] object-cover rounded-sm border border-white/10"})}),K.jsxs("div",{children:[K.jsx("h2",{className:"text-4xl md:text-5xl mb-6 font-bold",children:"About Me"}),K.jsx("p",{className:"text-lg text-gray-400 mb-6",children:"With over 10 years of experience in professional photography, I specialize in capturing authentic moments that tell compelling stories. My passion lies in creating timeless images that evoke emotion and preserve precious memories."}),K.jsx("p",{className:"text-lg text-gray-400 mb-8",children:"From intimate portraits to grand celebrations, I approach each project with dedication, creativity, and attention to detail. My work has been featured in numerous publications and I've had the privilege of working with clients worldwide."}),K.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[K.jsxs("div",{className:"text-center",children:[K.jsx(Sc,{className:"w-10 h-10 mx-auto mb-2 text-gray-300"}),K.jsx("p",{className:"text-2xl mb-1 font-bold",children:"10+"}),K.jsx("p",{className:"text-sm text-gray-500",children:"Years Experience"})]}),K.jsxs("div",{className:"text-center",children:[K.jsx(iS,{className:"w-10 h-10 mx-auto mb-2 text-gray-300"}),K.jsx("p",{className:"text-2xl mb-1 font-bold",children:"25+"}),K.jsx("p",{className:"text-sm text-gray-500",children:"Awards Won"})]}),K.jsxs("div",{className:"text-center",children:[K.jsx(L0,{className:"w-10 h-10 mx-auto mb-2 text-gray-300"}),K.jsx("p",{className:"text-2xl mb-1 font-bold",children:"500+"}),K.jsx("p",{className:"text-sm text-gray-500",children:"Happy Clients"})]})]})]})]})})})}function pg(a,e){const{width:t,height:i,top:s,left:o}=e.getBoundingClientRect(),u=(a.clientX-o-t/2)*(t>i?i/t:1),c=(a.clientY-s-i/2)*(i>t?t/i:1),d=Math.round((Math.atan2(c,u)*(180/Math.PI)+180)/90+3)%4;return["top","right","bottom","left"][d]}const mg=[{id:1,url:"https://images.unsplash.com/photo-1647730346059-c7c75506451e?auto=format&fit=crop&w=1200&q=80",category:"wedding",title:"Romantic Wedding"},{id:2,url:"https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?auto=format&fit=crop&w=1200&q=80",category:"portrait",title:"Portrait Session"},{id:3,url:"https://images.unsplash.com/photo-1699885846876-85bdb95c6e40?auto=format&fit=crop&w=1200&q=80",category:"landscape",title:"Nature's Beauty"},{id:4,url:"https://instagram.fbom28-1.fna.fbcdn.net/v/t51.82787-15/580996174_18539447569065444_6583299072560307293_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc2NjI1MDM1OTk0MjMxNTU5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=N0PP7iOK-SUQ7kNvwEgjq-l&_nc_oc=Adktz2O5-Z-5szIrY9nwweEK8J_mEF7fLMq6kC5hMbQBsoq9lGr7L-vAmtqAZCtEKBs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbom28-1.fna&_nc_gid=YTe5SLeuPLjikieEiyICLA&oh=00_AfrEfO75BUXFbKkQkooylRLZ78rZkQEh_Yna7h91ktOYzw&oe=69671BE2",category:"fashion",title:"Fashion Editorial"},{id:5,url:"https://images.unsplash.com/photo-1647542582327-ae2f66c5854d?auto=format&fit=crop&w=1200&q=80",category:"architecture",title:"Urban Architecture"},{id:6,url:"https://images.unsplash.com/photo-1682078234868-412ec5566118?auto=format&fit=crop&w=1200&q=80",category:"product",title:"Product Photography"}],US=["all","wedding","portrait","landscape","fashion","architecture","product"];function FS(){const[a,e]=Ni.useState("all"),t=a==="all"?mg:mg.filter(i=>i.category===a);return Ni.useEffect(()=>{const i=document.querySelectorAll(".dir-card"),s=u=>{const c=u.currentTarget,d=c.querySelector(".dir-overlay"),h=pg(u,c);d.classList.remove("out-top","out-right","out-bottom","out-left"),d.classList.remove("from-top","from-right","from-bottom","from-left"),d.classList.add(`from-${h}`),requestAnimationFrame(()=>d.classList.add("in"))},o=u=>{const c=u.currentTarget,d=c.querySelector(".dir-overlay"),h=pg(u,c);d.classList.remove("in"),d.classList.add(`out-${h}`)};return i.forEach(u=>{u.addEventListener("mouseenter",s),u.addEventListener("mouseleave",o)}),()=>{i.forEach(u=>{u.removeEventListener("mouseenter",s),u.removeEventListener("mouseleave",o)})}},[t]),K.jsx("section",{id:"gallery",className:"py-16 px-4",children:K.jsxs("div",{className:"max-w-7xl mx-auto",children:[K.jsx("h2",{className:"text-4xl font-semibold text-center mb-3",children:"Portfolio"}),K.jsx("p",{className:"text-center text-gray-600 mb-10",children:"My recent photography works"}),K.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-10",children:US.map(i=>K.jsx("button",{onClick:()=>e(i),className:`px-5 py-2 rounded-full capitalize transition ${a===i?"bg-black text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:i},i))}),K.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(i=>K.jsxs("div",{className:"dir-card aspect-square relative cursor-pointer overflow-hidden",children:[K.jsx("img",{src:i.url,alt:i.title,className:"w-full h-full object-cover"}),K.jsx("div",{className:"dir-overlay",children:K.jsxs("div",{className:"text-center",children:[K.jsx("p",{className:"text-xl font-medium",children:i.title}),K.jsx("p",{className:"text-sm text-gray-200 capitalize",children:i.category})]})})]},i.id))})]})})}const OS=[{icon:L0,title:"Wedding Photography",description:"Capture your special day with beautiful, timeless images that tell your unique love story.",price:"Starting at $2,500"},{icon:RS,title:"Portrait Sessions",description:"Professional portraits for individuals, families, and corporate headshots.",price:"Starting at $350"},{icon:Sc,title:"Event Photography",description:"Document your corporate events, parties, and celebrations with professional quality.",price:"Starting at $500"},{icon:sS,title:"Real Estate",description:"Showcase properties with stunning architectural and interior photography.",price:"Starting at $400"},{icon:ES,title:"Product Photography",description:"High-quality product images for e-commerce, catalogs, and marketing materials.",price:"Starting at $300"},{icon:hS,title:"Fashion & Editorial",description:"Creative fashion shoots and editorial content for brands and publications.",price:"Custom Pricing"}];function kS(){return K.jsx("section",{id:"services",className:"py-20 px-4 bg-[#0a0a0a] text-white",children:K.jsxs("div",{className:"max-w-7xl mx-auto",children:[K.jsx("h2",{className:"text-4xl md:text-5xl mb-4 text-center font-bold",children:"Services"}),K.jsx("p",{className:"text-center text-gray-400 mb-12 max-w-2xl mx-auto",children:"Professional photography services tailored to your needs"}),K.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:OS.map((a,e)=>{const t=a.icon;return K.jsxs("div",{className:"bg-white/5 p-8 rounded-sm border border-white/5 hover:border-white/20 transition-all duration-300 group",children:[K.jsx(t,{className:"w-12 h-12 mb-4 text-gray-300 group-hover:text-white transition-colors"}),K.jsx("h3",{className:"text-2xl mb-3 font-semibold",children:a.title}),K.jsx("p",{className:"text-gray-400 mb-4 leading-relaxed",children:a.description}),K.jsx("p",{className:"text-sm font-bold tracking-widest uppercase text-gray-300",children:a.price})]},e)})}),K.jsxs("div",{className:"mt-12 text-center",children:[K.jsx("p",{className:"text-gray-500 mb-6",children:"All packages include high-resolution digital files and professional editing"}),K.jsx("button",{onClick:()=>{const a=document.getElementById("contact");a==null||a.scrollIntoView({behavior:"smooth"})},className:"px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors rounded-sm uppercase tracking-wider text-sm",children:"Get a Custom Quote"})]})]})})}function BS(){const[a,e]=Ni.useState({name:"",email:"",service:"",message:""}),t=o=>{o.preventDefault(),alert("Thank you for your message! I'll get back to you soon."),e({name:"",email:"",service:"",message:""})},i=o=>{e({...a,[o.target.name]:o.target.value})},s="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-500 transition-all";return K.jsx("section",{id:"contact",className:"py-20 px-4 bg-[#0a0a0a] text-white",children:K.jsxs("div",{className:"max-w-6xl mx-auto",children:[K.jsx("h2",{className:"text-4xl md:text-5xl mb-4 text-center font-bold",children:"Get In Touch"}),K.jsx("p",{className:"text-center text-gray-400 mb-12 max-w-2xl mx-auto",children:"Let's create something beautiful together. Reach out to discuss your photography needs."}),K.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[K.jsx("div",{className:"bg-white/5 p-8 rounded-lg border border-white/5",children:K.jsxs("form",{onSubmit:t,className:"space-y-6",children:[K.jsxs("div",{children:[K.jsx("label",{htmlFor:"name",className:"block text-sm mb-2 text-gray-300",children:"Name"}),K.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your Name",value:a.name,onChange:i,required:!0,className:s})]}),K.jsxs("div",{children:[K.jsx("label",{htmlFor:"email",className:"block text-sm mb-2 text-gray-300",children:"Email"}),K.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Email Address",value:a.email,onChange:i,required:!0,className:s})]}),K.jsxs("div",{children:[K.jsx("label",{htmlFor:"service",className:"block text-sm mb-2 text-gray-300",children:"Service Interested In"}),K.jsxs("select",{id:"service",name:"service",value:a.service,onChange:i,required:!0,className:`${s} appearance-none cursor-pointer`,children:[K.jsx("option",{value:"",className:"bg-[#1a1a1a]",children:"Select a service"}),K.jsx("option",{value:"wedding",className:"bg-[#1a1a1a]",children:"Wedding Photography"}),K.jsx("option",{value:"portrait",className:"bg-[#1a1a1a]",children:"Portrait Session"}),K.jsx("option",{value:"event",className:"bg-[#1a1a1a]",children:"Event Photography"}),K.jsx("option",{value:"real-estate",className:"bg-[#1a1a1a]",children:"Real Estate"}),K.jsx("option",{value:"product",className:"bg-[#1a1a1a]",children:"Product Photography"}),K.jsx("option",{value:"fashion",className:"bg-[#1a1a1a]",children:"Fashion & Editorial"}),K.jsx("option",{value:"other",className:"bg-[#1a1a1a]",children:"Other"})]})]}),K.jsxs("div",{children:[K.jsx("label",{htmlFor:"message",className:"block text-sm mb-2 text-gray-300",children:"Message"}),K.jsx("textarea",{id:"message",name:"message",placeholder:"Tell me about your project...",value:a.message,onChange:i,required:!0,rows:5,className:`${s} resize-none`})]}),K.jsx("button",{type:"submit",className:"w-full px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-colors rounded-sm uppercase tracking-widest text-sm",children:"Send Message"})]})}),K.jsxs("div",{className:"flex flex-col justify-between",children:[K.jsxs("div",{className:"space-y-8 mb-8",children:[K.jsxs("div",{className:"flex items-start gap-5",children:[K.jsx("div",{className:"p-3 bg-white/5 rounded-full border border-white/10",children:K.jsx(gS,{className:"w-6 h-6 text-gray-300"})}),K.jsxs("div",{children:[K.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Email"}),K.jsx("p",{className:"text-gray-400",children:"balupatil@photography.com"})]})]}),K.jsxs("div",{className:"flex items-start gap-5",children:[K.jsx("div",{className:"p-3 bg-white/5 rounded-full border border-white/10",children:K.jsx(wS,{className:"w-6 h-6 text-gray-300"})}),K.jsxs("div",{children:[K.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Phone"}),K.jsx("p",{className:"text-gray-400",children:"+1 (555) 123-4567"})]})]}),K.jsxs("div",{className:"flex items-start gap-5",children:[K.jsx("div",{className:"p-3 bg-white/5 rounded-full border border-white/10",children:K.jsx(xS,{className:"w-6 h-6 text-gray-300"})}),K.jsxs("div",{children:[K.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Location"}),K.jsxs("p",{className:"text-gray-400",children:["Panvel, Navi Mumbai",K.jsx("br",{}),"Available for travel worldwide"]})]})]})]}),K.jsxs("div",{children:[K.jsx("h3",{className:"text-lg font-semibold mb-4 uppercase tracking-wider text-gray-500",children:"Follow Me"}),K.jsx("div",{className:"flex gap-4",children:[{Icon:mS,label:"Instagram"},{Icon:cS,label:"Facebook"},{Icon:CS,label:"Twitter"}].map(({Icon:o,label:u})=>K.jsx("a",{href:"#",className:"w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-white","aria-label":u,children:K.jsx(o,{className:"w-5 h-5"})},u))})]}),K.jsxs("div",{className:"mt-8 p-6 bg-white/5 border border-white/5 rounded-lg",children:[K.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-400 mb-3",children:"Business Hours"}),K.jsxs("p",{className:"text-gray-500 text-sm leading-relaxed",children:["Monday - Friday: 9:00 AM - 6:00 PM",K.jsx("br",{}),"Saturday: 10:00 AM - 4:00 PM",K.jsx("br",{}),"Sunday: By Appointment Only"]})]})]})]})]})})}function zS(){const a=new Date().getFullYear();return K.jsx("footer",{className:"bg-[#050505] text-white py-16 px-4 border-t border-white/5",children:K.jsxs("div",{className:"max-w-7xl mx-auto",children:[K.jsxs("div",{className:"grid md:grid-cols-3 gap-12 mb-12",children:[K.jsxs("div",{children:[K.jsxs("div",{className:"flex items-center gap-2 mb-6 group cursor-default",children:[K.jsx(Sc,{className:"w-6 h-6 text-gray-300 group-hover:text-white transition-colors"}),K.jsx("span",{className:"text-xl font-bold tracking-tight",children:"Balugraphy Official"})]}),K.jsx("p",{className:"text-gray-500 text-sm leading-relaxed max-w-xs",children:"Professional photographer specializing in weddings, portraits, and creative storytelling through imagery. Capturing your best moments."})]}),K.jsxs("div",{children:[K.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest mb-6 text-gray-300",children:"Quick Links"}),K.jsxs("ul",{className:"space-y-3 text-sm text-gray-500",children:[K.jsx("li",{children:K.jsx("a",{href:"#about",className:"hover:text-white transition-colors duration-300",children:"About"})}),K.jsx("li",{children:K.jsx("a",{href:"#gallery",className:"hover:text-white transition-colors duration-300",children:"Gallery"})}),K.jsx("li",{children:K.jsx("a",{href:"#services",className:"hover:text-white transition-colors duration-300",children:"Services"})}),K.jsx("li",{children:K.jsx("a",{href:"#contact",className:"hover:text-white transition-colors duration-300",children:"Contact"})})]})]}),K.jsxs("div",{children:[K.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest mb-6 text-gray-300",children:"Newsletter"}),K.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Subscribe to get updates on new work and special offers."}),K.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[K.jsx("input",{type:"email",placeholder:"Your email",className:"flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-white/30 text-white placeholder-gray-600 transition-all"}),K.jsx("button",{className:"px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors rounded-sm text-xs uppercase tracking-widest",children:"Subscribe"})]})]})]}),K.jsx("div",{className:"border-t border-white/5 pt-8 text-center",children:K.jsxs("p",{className:"text-xs text-gray-600 tracking-wide uppercase",children:["© ",a," Balugraphy Official. Designed with ❤️ by ",K.jsx("span",{className:"text-gray-400",children:"Ganesh Chavan"}),"."]})})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="182",VS=0,_g=1,HS=2,nc=1,GS=2,nl=3,_s=0,Jn=1,br=2,Pr=0,ja=1,gg=2,vg=3,xg=4,WS=5,$s=100,XS=101,jS=102,YS=103,qS=104,$S=200,KS=201,ZS=202,QS=203,Zd=204,Qd=205,JS=206,eM=207,tM=208,nM=209,iM=210,rM=211,sM=212,aM=213,oM=214,Jd=0,eh=1,th=2,Za=3,nh=4,ih=5,rh=6,sh=7,op=0,lM=1,uM=2,ar=0,N0=1,I0=2,U0=3,F0=4,O0=5,k0=6,B0=7,z0=300,ra=301,Qa=302,ah=303,oh=304,Mc=306,lh=1e3,Rr=1001,uh=1002,Tn=1003,cM=1004,Uu=1005,In=1006,fd=1007,Zs=1008,hi=1009,V0=1010,H0=1011,fl=1012,lp=1013,ur=1014,ir=1015,Lr=1016,up=1017,cp=1018,dl=1020,G0=35902,W0=35899,X0=1021,j0=1022,Xi=1023,Nr=1026,Qs=1027,Y0=1028,fp=1029,Ja=1030,dp=1031,hp=1033,ic=33776,rc=33777,sc=33778,ac=33779,ch=35840,fh=35841,dh=35842,hh=35843,ph=36196,mh=37492,_h=37496,gh=37488,vh=37489,xh=37490,yh=37491,Sh=37808,Mh=37809,Eh=37810,Th=37811,wh=37812,Ah=37813,Ch=37814,bh=37815,Rh=37816,Ph=37817,Dh=37818,Lh=37819,Nh=37820,Ih=37821,Uh=36492,Fh=36494,Oh=36495,kh=36283,Bh=36284,zh=36285,Vh=36286,fM=3200,q0=0,dM=1,ls="",Ri="srgb",eo="srgb-linear",fc="linear",It="srgb",Ra=7680,yg=519,hM=512,pM=513,mM=514,pp=515,_M=516,gM=517,mp=518,vM=519,Sg=35044,Mg="300 es",rr=2e3,dc=2001;function $0(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function hc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function xM(){const a=hc("canvas");return a.style.display="block",a}const Eg={};function Tg(...a){const e="THREE."+a.shift();console.log(e,...a)}function at(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Ct(...a){const e="THREE."+a.shift();console.error(e,...a)}function hl(...a){const e=a.join(" ");e in Eg||(Eg[e]=!0,at(...a))}function yM(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}class lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Hh=180/Math.PI;function Ml(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[a&255]+Dn[a>>8&255]+Dn[a>>16&255]+Dn[a>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function gt(a,e,t){return Math.max(e,Math.min(t,a))}function SM(a,e){return(a%e+e)%e}function hd(a,e,t){return(1-t)*a+t*e}function qo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*s+e.x,this.y=o*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class El{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,u,c){let d=i[s+0],h=i[s+1],p=i[s+2],_=i[s+3],g=o[u+0],y=o[u+1],E=o[u+2],M=o[u+3];if(c<=0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_;return}if(c>=1){e[t+0]=g,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(_!==M||d!==g||h!==y||p!==E){let S=d*g+h*y+p*E+_*M;S<0&&(g=-g,y=-y,E=-E,M=-M,S=-S);let x=1-c;if(S<.9995){const R=Math.acos(S),L=Math.sin(R);x=Math.sin(x*R)/L,c=Math.sin(c*R)/L,d=d*x+g*c,h=h*x+y*c,p=p*x+E*c,_=_*x+M*c}else{d=d*x+g*c,h=h*x+y*c,p=p*x+E*c,_=_*x+M*c;const R=1/Math.sqrt(d*d+h*h+p*p+_*_);d*=R,h*=R,p*=R,_*=R}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,o,u){const c=i[s],d=i[s+1],h=i[s+2],p=i[s+3],_=o[u],g=o[u+1],y=o[u+2],E=o[u+3];return e[t]=c*E+p*_+d*y-h*g,e[t+1]=d*E+p*g+h*_-c*y,e[t+2]=h*E+p*y+c*g-d*_,e[t+3]=p*E-c*_-d*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),p=c(s/2),_=c(o/2),g=d(i/2),y=d(s/2),E=d(o/2);switch(u){case"XYZ":this._x=g*p*_+h*y*E,this._y=h*y*_-g*p*E,this._z=h*p*E+g*y*_,this._w=h*p*_-g*y*E;break;case"YXZ":this._x=g*p*_+h*y*E,this._y=h*y*_-g*p*E,this._z=h*p*E-g*y*_,this._w=h*p*_+g*y*E;break;case"ZXY":this._x=g*p*_-h*y*E,this._y=h*y*_+g*p*E,this._z=h*p*E+g*y*_,this._w=h*p*_-g*y*E;break;case"ZYX":this._x=g*p*_-h*y*E,this._y=h*y*_+g*p*E,this._z=h*p*E-g*y*_,this._w=h*p*_+g*y*E;break;case"YZX":this._x=g*p*_+h*y*E,this._y=h*y*_+g*p*E,this._z=h*p*E-g*y*_,this._w=h*p*_-g*y*E;break;case"XZY":this._x=g*p*_-h*y*E,this._y=h*y*_-g*p*E,this._z=h*p*E+g*y*_,this._w=h*p*_+g*y*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],_=t[10],g=i+c+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-d)*y,this._y=(o-h)*y,this._z=(u-s)*y}else if(i>c&&i>_){const y=2*Math.sqrt(1+i-c-_);this._w=(p-d)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(o+h)/y}else if(c>_){const y=2*Math.sqrt(1+c-i-_);this._w=(o-h)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+_-i-c);this._w=(u-s)/y,this._x=(o+h)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+u*c+s*h-o*d,this._y=s*p+u*d+o*c-i*h,this._z=o*p+u*h+i*d-s*c,this._w=u*p-i*c-s*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,o=e._z,u=e._w,c=this.dot(e);c<0&&(i=-i,s=-s,o=-o,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,i=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*s-c*i),p=2*(c*t-o*s),_=2*(o*i-u*t);return this.x=t+d*h+u*_-c*p,this.y=i+d*p+c*h-o*_,this.z=s+d*_+o*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-o*c,this.y=o*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new ie,wg=new El;class ut{constructor(e,t,i,s,o,u,c,d,h){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,d,h)}set(e,t,i,s,o,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=d,p[6]=i,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],p=i[4],_=i[7],g=i[2],y=i[5],E=i[8],M=s[0],S=s[3],x=s[6],R=s[1],L=s[4],C=s[7],b=s[2],N=s[5],I=s[8];return o[0]=u*M+c*R+d*b,o[3]=u*S+c*L+d*N,o[6]=u*x+c*C+d*I,o[1]=h*M+p*R+_*b,o[4]=h*S+p*L+_*N,o[7]=h*x+p*C+_*I,o[2]=g*M+y*R+E*b,o[5]=g*S+y*L+E*N,o[8]=g*x+y*C+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-i*o*p+i*c*d+s*o*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],_=p*u-c*h,g=c*d-p*o,y=h*o-u*d,E=t*_+i*g+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(s*h-p*i)*M,e[2]=(c*i-s*u)*M,e[3]=g*M,e[4]=(p*t-s*d)*M,e[5]=(s*o-c*t)*M,e[6]=y*M,e[7]=(i*d-h*t)*M,e[8]=(u*t-i*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,u,c){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(md.makeScale(e,t)),this}rotate(e){return this.premultiply(md.makeRotation(-e)),this}translate(e,t){return this.premultiply(md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const md=new ut,Ag=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MM(){const a={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===It&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(s.r=Ya(s.r),s.g=Ya(s.g),s.b=Ya(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ls?fc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[eo]:{primaries:e,whitePoint:i,transfer:fc,toXYZ:Ag,fromXYZ:Cg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:i,transfer:It,toXYZ:Ag,fromXYZ:Cg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),a}const Tt=MM();function Dr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ya(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Pa;class EM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pa===void 0&&(Pa=hc("canvas")),Pa.width=e.width,Pa.height=e.height;const s=Pa.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Pa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Dr(o[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Dr(t[i]/255)*255):t[i]=Dr(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TM=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(_d(s[u].image)):o.push(_d(s[u]))}else o=_d(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function _d(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?EM.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let wM=0;const gd=new ie;class Wn extends lo{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,i=Rr,s=Rr,o=In,u=Zs,c=Xi,d=hi,h=Wn.DEFAULT_ANISOTROPY,p=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Ml(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=z0;Wn.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,t=0,i=0,s=1){Jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const d=e.elements,h=d[0],p=d[4],_=d[8],g=d[1],y=d[5],E=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(p-g)<.01&&Math.abs(_-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,C=(y+1)/2,b=(x+1)/2,N=(p+g)/4,I=(_+M)/4,k=(E+S)/4;return L>C&&L>b?L<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(L),s=N/i,o=I/i):C>b?C<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(C),i=N/s,o=k/s):b<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),i=I/o,s=k/o),this.set(i,s,o,t),this}let R=Math.sqrt((S-E)*(S-E)+(_-M)*(_-M)+(g-p)*(g-p));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(_-M)/R,this.z=(g-p)/R,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AM extends lo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);const s={width:e,height:t,depth:i.depth},o=new Wn(s);this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new _p(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends AM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class K0 extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CM extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Vi):Vi.fromBufferAttribute(o,u),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fu.copy(i.boundingBox)),Fu.applyMatrix4(e.matrixWorld),this.union(Fu)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Ou.subVectors(this.max,$o),Da.subVectors(e.a,$o),La.subVectors(e.b,$o),Na.subVectors(e.c,$o),ns.subVectors(La,Da),is.subVectors(Na,La),ks.subVectors(Da,Na);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-ks.z,ks.y,ns.z,0,-ns.x,is.z,0,-is.x,ks.z,0,-ks.x,-ns.y,ns.x,0,-is.y,is.x,0,-ks.y,ks.x,0];return!vd(t,Da,La,Na,Ou)||(t=[1,0,0,0,1,0,0,0,1],!vd(t,Da,La,Na,Ou))?!1:(ku.crossVectors(ns,is),t=[ku.x,ku.y,ku.z],vd(t,Da,La,Na,Ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Vi=new ie,Fu=new Tl,Da=new ie,La=new ie,Na=new ie,ns=new ie,is=new ie,ks=new ie,$o=new ie,Ou=new ie,ku=new ie,Bs=new ie;function vd(a,e,t,i,s){for(let o=0,u=a.length-3;o<=u;o+=3){Bs.fromArray(a,o);const c=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),d=e.dot(Bs),h=t.dot(Bs),p=i.dot(Bs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const bM=new Tl,Ko=new ie,xd=new ie;class gp{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bM.setFromPoints(e).getCenter(i);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ko,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(xd)),this.expandByPoint(Ko.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mr=new ie,yd=new ie,Bu=new ie,rs=new ie,Sd=new ie,zu=new ie,Md=new ie;class RM{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yd.copy(e).add(t).multiplyScalar(.5),Bu.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(yd);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Bu),c=rs.dot(this.direction),d=-rs.dot(Bu),h=rs.lengthSq(),p=Math.abs(1-u*u);let _,g,y,E;if(p>0)if(_=u*d-c,g=u*c-d,E=o*p,_>=0)if(g>=-E)if(g<=E){const M=1/p;_*=M,g*=M,y=_*(_+u*g+2*c)+g*(u*_+g+2*d)+h}else g=o,_=Math.max(0,-(u*g+c)),y=-_*_+g*(g+2*d)+h;else g=-o,_=Math.max(0,-(u*g+c)),y=-_*_+g*(g+2*d)+h;else g<=-E?(_=Math.max(0,-(-u*o+c)),g=_>0?-o:Math.min(Math.max(-o,-d),o),y=-_*_+g*(g+2*d)+h):g<=E?(_=0,g=Math.min(Math.max(-o,-d),o),y=g*(g+2*d)+h):(_=Math.max(0,-(u*o+c)),g=_>0?o:Math.min(Math.max(-o,-d),o),y=-_*_+g*(g+2*d)+h);else g=u>0?-o:o,_=Math.max(0,-(u*g+c)),y=-_*_+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(yd).addScaledVector(Bu,g),y}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);const i=Mr.dot(this.direction),s=Mr.dot(Mr)-i*i,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),i>u||o>s||((o>i||isNaN(i))&&(i=o),(u<s||isNaN(s))&&(s=u),_>=0?(c=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(c=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,i,s,o){Sd.subVectors(t,e),zu.subVectors(i,e),Md.crossVectors(Sd,zu);let u=this.direction.dot(Md),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;rs.subVectors(this.origin,e);const d=c*this.direction.dot(zu.crossVectors(rs,zu));if(d<0)return null;const h=c*this.direction.dot(Sd.cross(rs));if(h<0||d+h>u)return null;const p=-c*rs.dot(Md);return p<0?null:this.at(p/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,i,s,o,u,c,d,h,p,_,g,y,E,M,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,d,h,p,_,g,y,E,M,S)}set(e,t,i,s,o,u,c,d,h,p,_,g,y,E,M,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=o,x[5]=u,x[9]=c,x[13]=d,x[2]=h,x[6]=p,x[10]=_,x[14]=g,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ia.setFromMatrixColumn(e,0).length(),o=1/Ia.setFromMatrixColumn(e,1).length(),u=1/Ia.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const g=u*p,y=u*_,E=c*p,M=c*_;t[0]=d*p,t[4]=-d*_,t[8]=h,t[1]=y+E*h,t[5]=g-M*h,t[9]=-c*d,t[2]=M-g*h,t[6]=E+y*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*p,y=d*_,E=h*p,M=h*_;t[0]=g+M*c,t[4]=E*c-y,t[8]=u*h,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=y*c-E,t[6]=M+g*c,t[10]=u*d}else if(e.order==="ZXY"){const g=d*p,y=d*_,E=h*p,M=h*_;t[0]=g-M*c,t[4]=-u*_,t[8]=E+y*c,t[1]=y+E*c,t[5]=u*p,t[9]=M-g*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const g=u*p,y=u*_,E=c*p,M=c*_;t[0]=d*p,t[4]=E*h-y,t[8]=g*h+M,t[1]=d*_,t[5]=M*h+g,t[9]=y*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,y=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-g*_,t[8]=E*_+y,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=y*_+E,t[10]=g-M*_}else if(e.order==="XZY"){const g=u*d,y=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-_,t[8]=h*p,t[1]=g*_+M,t[5]=u*p,t[9]=y*_-E,t[2]=E*_-y,t[6]=c*p,t[10]=M*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,DM)}lookAt(e,t,i){const s=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ss.crossVectors(i,ci),ss.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ss.crossVectors(i,ci)),ss.normalize(),Vu.crossVectors(ci,ss),s[0]=ss.x,s[4]=Vu.x,s[8]=ci.x,s[1]=ss.y,s[5]=Vu.y,s[9]=ci.y,s[2]=ss.z,s[6]=Vu.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],p=i[1],_=i[5],g=i[9],y=i[13],E=i[2],M=i[6],S=i[10],x=i[14],R=i[3],L=i[7],C=i[11],b=i[15],N=s[0],I=s[4],k=s[8],T=s[12],P=s[1],B=s[5],X=s[9],W=s[13],ne=s[2],te=s[6],Q=s[10],q=s[14],j=s[3],fe=s[7],ae=s[11],O=s[15];return o[0]=u*N+c*P+d*ne+h*j,o[4]=u*I+c*B+d*te+h*fe,o[8]=u*k+c*X+d*Q+h*ae,o[12]=u*T+c*W+d*q+h*O,o[1]=p*N+_*P+g*ne+y*j,o[5]=p*I+_*B+g*te+y*fe,o[9]=p*k+_*X+g*Q+y*ae,o[13]=p*T+_*W+g*q+y*O,o[2]=E*N+M*P+S*ne+x*j,o[6]=E*I+M*B+S*te+x*fe,o[10]=E*k+M*X+S*Q+x*ae,o[14]=E*T+M*W+S*q+x*O,o[3]=R*N+L*P+C*ne+b*j,o[7]=R*I+L*B+C*te+b*fe,o[11]=R*k+L*X+C*Q+b*ae,o[15]=R*T+L*W+C*q+b*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],_=e[6],g=e[10],y=e[14],E=e[3],M=e[7],S=e[11],x=e[15],R=d*y-h*g,L=c*y-h*_,C=c*g-d*_,b=u*y-h*p,N=u*g-d*p,I=u*_-c*p;return t*(M*R-S*L+x*C)-i*(E*R-S*b+x*N)+s*(E*L-M*b+x*I)-o*(E*C-M*N+S*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],_=e[9],g=e[10],y=e[11],E=e[12],M=e[13],S=e[14],x=e[15],R=_*S*h-M*g*h+M*d*y-c*S*y-_*d*x+c*g*x,L=E*g*h-p*S*h-E*d*y+u*S*y+p*d*x-u*g*x,C=p*M*h-E*_*h+E*c*y-u*M*y-p*c*x+u*_*x,b=E*_*d-p*M*d-E*c*g+u*M*g+p*c*S-u*_*S,N=t*R+i*L+s*C+o*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=R*I,e[1]=(M*g*o-_*S*o-M*s*y+i*S*y+_*s*x-i*g*x)*I,e[2]=(c*S*o-M*d*o+M*s*h-i*S*h-c*s*x+i*d*x)*I,e[3]=(_*d*o-c*g*o-_*s*h+i*g*h+c*s*y-i*d*y)*I,e[4]=L*I,e[5]=(p*S*o-E*g*o+E*s*y-t*S*y-p*s*x+t*g*x)*I,e[6]=(E*d*o-u*S*o-E*s*h+t*S*h+u*s*x-t*d*x)*I,e[7]=(u*g*o-p*d*o+p*s*h-t*g*h-u*s*y+t*d*y)*I,e[8]=C*I,e[9]=(E*_*o-p*M*o-E*i*y+t*M*y+p*i*x-t*_*x)*I,e[10]=(u*M*o-E*c*o+E*i*h-t*M*h-u*i*x+t*c*x)*I,e[11]=(p*c*o-u*_*o-p*i*h+t*_*h+u*i*y-t*c*y)*I,e[12]=b*I,e[13]=(p*M*s-E*_*s+E*i*g-t*M*g-p*i*S+t*_*S)*I,e[14]=(E*c*s-u*M*s-E*i*d+t*M*d+u*i*S-t*c*S)*I,e[15]=(u*_*s-p*c*s+p*i*d-t*_*d-u*i*g+t*c*g)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,u=e.x,c=e.y,d=e.z,h=o*u,p=o*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,p*c+i,p*d-s*u,0,h*d-s*c,p*d+s*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,u){return this.set(1,i,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,u=t._y,c=t._z,d=t._w,h=o+o,p=u+u,_=c+c,g=o*h,y=o*p,E=o*_,M=u*p,S=u*_,x=c*_,R=d*h,L=d*p,C=d*_,b=i.x,N=i.y,I=i.z;return s[0]=(1-(M+x))*b,s[1]=(y+C)*b,s[2]=(E-L)*b,s[3]=0,s[4]=(y-C)*N,s[5]=(1-(g+x))*N,s[6]=(S+R)*N,s[7]=0,s[8]=(E+L)*I,s[9]=(S-R)*I,s[10]=(1-(g+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let o=Ia.set(s[0],s[1],s[2]).length();const u=Ia.set(s[4],s[5],s[6]).length(),c=Ia.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),Hi.copy(this);const h=1/o,p=1/u,_=1/c;return Hi.elements[0]*=h,Hi.elements[1]*=h,Hi.elements[2]*=h,Hi.elements[4]*=p,Hi.elements[5]*=p,Hi.elements[6]*=p,Hi.elements[8]*=_,Hi.elements[9]*=_,Hi.elements[10]*=_,t.setFromRotationMatrix(Hi),i.x=o,i.y=u,i.z=c,this}makePerspective(e,t,i,s,o,u,c=rr,d=!1){const h=this.elements,p=2*o/(t-e),_=2*o/(i-s),g=(t+e)/(t-e),y=(i+s)/(i-s);let E,M;if(d)E=o/(u-o),M=u*o/(u-o);else if(c===rr)E=-(u+o)/(u-o),M=-2*u*o/(u-o);else if(c===dc)E=-u/(u-o),M=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,o,u,c=rr,d=!1){const h=this.elements,p=2/(t-e),_=2/(i-s),g=-(t+e)/(t-e),y=-(i+s)/(i-s);let E,M;if(d)E=1/(u-o),M=u/(u-o);else if(c===rr)E=-2/(u-o),M=-(u+o)/(u-o);else if(c===dc)E=-1/(u-o),M=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ia=new ie,Hi=new tn,PM=new ie(0,0,0),DM=new ie(1,1,1),ss=new ie,Vu=new ie,ci=new ie,bg=new tn,Rg=new El;class cr{constructor(e=0,t=0,i=0,s=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],d=s[1],h=s[5],p=s[9],_=s[2],g=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class Z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LM=0;const Pg=new ie,Ua=new El,Er=new tn,Hu=new ie,Zo=new ie,NM=new ie,IM=new El,Dg=new ie(1,0,0),Lg=new ie(0,1,0),Ng=new ie(0,0,1),Ig={type:"added"},UM={type:"removed"},Fa={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Un extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new ie,t=new cr,i=new El,s=new ie(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new ut}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ua.setFromAxisAngle(e,t),this.quaternion.multiply(Ua),this}rotateOnWorldAxis(e,t){return Ua.setFromAxisAngle(e,t),this.quaternion.premultiply(Ua),this}rotateX(e){return this.rotateOnAxis(Dg,e)}rotateY(e){return this.rotateOnAxis(Lg,e)}rotateZ(e){return this.rotateOnAxis(Ng,e)}translateOnAxis(e,t){return Pg.copy(e).applyQuaternion(this.quaternion),this.position.add(Pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dg,e)}translateY(e){return this.translateOnAxis(Lg,e)}translateZ(e){return this.translateOnAxis(Ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hu.copy(e):Hu.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Zo,Hu,this.up):Er.lookAt(Hu,Zo,this.up),this.quaternion.setFromRotationMatrix(Er),s&&(Er.extractRotation(s.matrixWorld),Ua.setFromRotationMatrix(Er),this.quaternion.premultiply(Ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ig),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(UM),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ig),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,NM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,IM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const _=d[h];o(e.shapes,_)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(o(e.materials,this.material[d]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(o(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),_=u(e.shapes),g=u(e.skeletons),y=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=s,i;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Un.DEFAULT_UP=new ie(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new ie,Tr=new ie,Td=new ie,wr=new ie,Oa=new ie,ka=new ie,Ug=new ie,wd=new ie,Ad=new ie,Cd=new ie,bd=new Jt,Rd=new Jt,Pd=new Jt;class Wi{constructor(e=new ie,t=new ie,i=new ie){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gi.subVectors(e,t),s.cross(Gi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Gi.subVectors(s,t),Tr.subVectors(i,t),Td.subVectors(e,t);const u=Gi.dot(Gi),c=Gi.dot(Tr),d=Gi.dot(Td),h=Tr.dot(Tr),p=Tr.dot(Td),_=u*h-c*c;if(_===0)return o.set(0,0,0),null;const g=1/_,y=(h*d-c*p)*g,E=(u*p-c*d)*g;return o.set(1-y-E,E,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,i,s,o,u,c,d){return this.getBarycoord(e,t,i,s,wr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,wr.x),d.addScaledVector(u,wr.y),d.addScaledVector(c,wr.z),d)}static getInterpolatedAttribute(e,t,i,s,o,u){return bd.setScalar(0),Rd.setScalar(0),Pd.setScalar(0),bd.fromBufferAttribute(e,t),Rd.fromBufferAttribute(e,i),Pd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(bd,o.x),u.addScaledVector(Rd,o.y),u.addScaledVector(Pd,o.z),u}static isFrontFacing(e,t,i,s){return Gi.subVectors(i,t),Tr.subVectors(e,t),Gi.cross(Tr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Gi.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Wi.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let u,c;Oa.subVectors(s,i),ka.subVectors(o,i),wd.subVectors(e,i);const d=Oa.dot(wd),h=ka.dot(wd);if(d<=0&&h<=0)return t.copy(i);Ad.subVectors(e,s);const p=Oa.dot(Ad),_=ka.dot(Ad);if(p>=0&&_<=p)return t.copy(s);const g=d*_-p*h;if(g<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(Oa,u);Cd.subVectors(e,o);const y=Oa.dot(Cd),E=ka.dot(Cd);if(E>=0&&y<=E)return t.copy(o);const M=y*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(i).addScaledVector(ka,c);const S=p*E-y*_;if(S<=0&&_-p>=0&&y-E>=0)return Ug.subVectors(o,s),c=(_-p)/(_-p+(y-E)),t.copy(s).addScaledVector(Ug,c);const x=1/(S+M+g);return u=M*x,c=g*x,t.copy(i).addScaledVector(Oa,u).addScaledVector(ka,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Gu={h:0,s:0,l:0};function Dd(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=SM(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=Dd(u,o,e+1/3),this.g=Dd(u,o,e),this.b=Dd(u,o,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ri){function i(o){o!==void 0&&parseFloat(o)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ri){const i=Q0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Tt.workingToColorSpace(Ln.copy(this),e),Math.round(gt(Ln.r*255,0,255))*65536+Math.round(gt(Ln.g*255,0,255))*256+Math.round(gt(Ln.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,o=Ln.b,u=Math.max(i,s,o),c=Math.min(i,s,o);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const _=u-c;switch(h=p<=.5?_/(u+c):_/(2-u-c),u){case i:d=(s-o)/_+(s<o?6:0);break;case s:d=(o-i)/_+2;break;case o:d=(i-s)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Ri){Tt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,s=Ln.b;return e!==Ri?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Gu);const i=hd(as.h,Gu.h,t),s=hd(as.s,Gu.s,t),o=hd(as.l,Gu.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new bt;bt.NAMES=Q0;let FM=0;class wl extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=ja,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Qd,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ja&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zd&&(i.blendSrc=this.blendSrc),this.blendDst!==Qd&&(i.blendDst=this.blendDst),this.blendEquation!==$s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ra&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ra&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ra&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const u=[];for(const c in o){const d=o[c];delete d.metadata,u.push(d)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vp extends wl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new ie,Wu=new Rt;let OM=0;class lr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sg,this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wu.fromBufferAttribute(this,t),Wu.applyMatrix3(e),this.setXY(t,Wu.x,Wu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),s=Qn(s,this.array),o=Qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sg&&(e.usage=this.usage),e}}class J0 extends lr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ev extends lr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xn extends lr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kM=0;const Ci=new tn,Ld=new Un,Ba=new ie,fi=new Tl,Qo=new Tl,xn=new ie;class ji extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($0(e)?ev:J0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ut().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ba).negate(),this.translate(Ba.x,Ba.y,Ba.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];fi.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];Qo.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(fi.min,Qo.min),fi.expandByPoint(xn),xn.addVectors(fi.max,Qo.max),fi.expandByPoint(xn)):(fi.expandByPoint(Qo.min),fi.expandByPoint(Qo.max))}fi.getCenter(i);let s=0;for(let o=0,u=e.count;o<u;o++)xn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)xn.fromBufferAttribute(c,h),d&&(Ba.fromBufferAttribute(e,h),xn.add(Ba)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lr(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let k=0;k<i.count;k++)c[k]=new ie,d[k]=new ie;const h=new ie,p=new ie,_=new ie,g=new Rt,y=new Rt,E=new Rt,M=new ie,S=new ie;function x(k,T,P){h.fromBufferAttribute(i,k),p.fromBufferAttribute(i,T),_.fromBufferAttribute(i,P),g.fromBufferAttribute(o,k),y.fromBufferAttribute(o,T),E.fromBufferAttribute(o,P),p.sub(h),_.sub(h),y.sub(g),E.sub(g);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(B),S.copy(_).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(B),c[k].add(M),c[T].add(M),c[P].add(M),d[k].add(S),d[T].add(S),d[P].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let k=0,T=R.length;k<T;++k){const P=R[k],B=P.start,X=P.count;for(let W=B,ne=B+X;W<ne;W+=3)x(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const L=new ie,C=new ie,b=new ie,N=new ie;function I(k){b.fromBufferAttribute(s,k),N.copy(b);const T=c[k];L.copy(T),L.sub(b.multiplyScalar(b.dot(T))).normalize(),C.crossVectors(N,T);const B=C.dot(d[k])<0?-1:1;u.setXYZW(k,L.x,L.y,L.z,B)}for(let k=0,T=R.length;k<T;++k){const P=R[k],B=P.start,X=P.count;for(let W=B,ne=B+X;W<ne;W+=3)I(e.getX(W+0)),I(e.getX(W+1)),I(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new lr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,y=i.count;g<y;g++)i.setXYZ(g,0,0,0);const s=new ie,o=new ie,u=new ie,c=new ie,d=new ie,h=new ie,p=new ie,_=new ie;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),M=e.getX(g+1),S=e.getX(g+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),p.subVectors(u,o),_.subVectors(s,o),p.cross(_),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),c.add(p),d.add(p),h.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,y=t.count;g<y;g+=3)s.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,o),_.subVectors(s,o),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,_=c.normalized,g=new h.constructor(d.length*p);let y=0,E=0;for(let M=0,S=d.length;M<S;M++){c.isInterleavedBufferAttribute?y=d[M]*c.data.stride+c.offset:y=d[M]*p;for(let x=0;x<p;x++)g[E++]=h[y++]}return new lr(g,p,_)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ji,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const d=[],h=o[c];for(let p=0,_=h.length;p<_;p++){const g=h[p],y=e(g,i);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let _=0,g=h.length;_<g;_++){const y=h[_];p.push(y.toJSON(e.data))}p.length>0&&(s[d]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],_=o[h];for(let g=0,y=_.length;g<y;g++)p.push(_[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fg=new tn,zs=new RM,Xu=new gp,Og=new ie,ju=new ie,Yu=new ie,qu=new ie,Nd=new ie,$u=new ie,kg=new ie,Ku=new ie;class En extends Un{constructor(e=new ji,t=new vp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){$u.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=c[d],_=o[d];p!==0&&(Nd.fromBufferAttribute(_,e),u?$u.addScaledVector(Nd,p):$u.addScaledVector(Nd.sub(t),p))}t.add($u)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xu.copy(i.boundingSphere),Xu.applyMatrix4(o),zs.copy(e.ray).recast(e.near),!(Xu.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Xu,Og)===null||zs.origin.distanceToSquared(Og)>(e.far-e.near)**2))&&(Fg.copy(o).invert(),zs.copy(e.ray).applyMatrix4(Fg),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,i){let s;const o=this.geometry,u=this.material,c=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,g=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const S=g[E],x=u[S.materialIndex],R=Math.max(S.start,y.start),L=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let C=R,b=L;C<b;C+=3){const N=c.getX(C),I=c.getX(C+1),k=c.getX(C+2);s=Zu(this,x,e,i,h,p,_,N,I,k),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const R=c.getX(S),L=c.getX(S+1),C=c.getX(S+2);s=Zu(this,u,e,i,h,p,_,R,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const S=g[E],x=u[S.materialIndex],R=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=R,b=L;C<b;C+=3){const N=C,I=C+1,k=C+2;s=Zu(this,x,e,i,h,p,_,N,I,k),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const R=S,L=S+1,C=S+2;s=Zu(this,u,e,i,h,p,_,R,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function BM(a,e,t,i,s,o,u,c){let d;if(e.side===Jn?d=i.intersectTriangle(u,o,s,!0,c):d=i.intersectTriangle(s,o,u,e.side===_s,c),d===null)return null;Ku.copy(c),Ku.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(Ku);return h<t.near||h>t.far?null:{distance:h,point:Ku.clone(),object:a}}function Zu(a,e,t,i,s,o,u,c,d,h){a.getVertexPosition(c,ju),a.getVertexPosition(d,Yu),a.getVertexPosition(h,qu);const p=BM(a,e,t,i,ju,Yu,qu,kg);if(p){const _=new ie;Wi.getBarycoord(kg,ju,Yu,qu,_),s&&(p.uv=Wi.getInterpolatedAttribute(s,c,d,h,_,new Rt)),o&&(p.uv1=Wi.getInterpolatedAttribute(o,c,d,h,_,new Rt)),u&&(p.normal=Wi.getInterpolatedAttribute(u,c,d,h,_,new ie),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new ie,materialIndex:0};Wi.getNormal(ju,Yu,qu,g.normal),p.face=g,p.barycoord=_}return p}class hs extends ji{constructor(e=1,t=1,i=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],p=[],_=[];let g=0,y=0;E("z","y","x",-1,-1,i,t,e,u,o,0),E("z","y","x",1,-1,i,t,-e,u,o,1),E("x","z","y",1,1,e,i,t,s,u,2),E("x","z","y",1,-1,e,i,-t,s,u,3),E("x","y","z",1,-1,e,t,i,s,o,4),E("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(d),this.setAttribute("position",new Xn(h,3)),this.setAttribute("normal",new Xn(p,3)),this.setAttribute("uv",new Xn(_,2));function E(M,S,x,R,L,C,b,N,I,k,T){const P=C/I,B=b/k,X=C/2,W=b/2,ne=N/2,te=I+1,Q=k+1;let q=0,j=0;const fe=new ie;for(let ae=0;ae<Q;ae++){const O=ae*B-W;for(let se=0;se<te;se++){const Ae=se*P-X;fe[M]=Ae*R,fe[S]=O*L,fe[x]=ne,h.push(fe.x,fe.y,fe.z),fe[M]=0,fe[S]=0,fe[x]=N>0?1:-1,p.push(fe.x,fe.y,fe.z),_.push(se/I),_.push(1-ae/k),q+=1}}for(let ae=0;ae<k;ae++)for(let O=0;O<I;O++){const se=g+O+te*ae,Ae=g+O+te*(ae+1),Ue=g+(O+1)+te*(ae+1),Be=g+(O+1)+te*ae;d.push(se,Ae,Be),d.push(Ae,Ue,Be),j+=6}c.addGroup(y,j,T),y+=j,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Hn(a){const e={};for(let t=0;t<a.length;t++){const i=to(a[t]);for(const s in i)e[s]=i[s]}return e}function zM(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function tv(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const VM={clone:to,merge:Hn};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends wl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=zM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=rr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const os=new ie,Bg=new Rt,zg=new Rt;class Pi extends nv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Bg,zg),t.subVectors(zg,Bg)}setViewOffset(e,t,i,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dd*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const za=-90,Va=1;class WM extends Un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pi(za,Va,e,t);s.layers=this.layers,this.add(s);const o=new Pi(za,Va,e,t);o.layers=this.layers,this.add(o);const u=new Pi(za,Va,e,t);u.layers=this.layers,this.add(u);const c=new Pi(za,Va,e,t);c.layers=this.layers,this.add(c);const d=new Pi(za,Va,e,t);d.layers=this.layers,this.add(d);const h=new Pi(za,Va,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,u,c,d]=t;for(const h of t)this.remove(h);if(e===rr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,d,h,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(_,g,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class iv extends Wn{constructor(e=[],t=ra,i,s,o,u,c,d,h,p){super(e,t,i,s,o,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rv extends or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new iv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hs(5,5,5),o=new fr({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Pr});o.uniforms.tEquirect.value=t;const u=new En(s,o),c=t.minFilter;return t.minFilter===Zs&&(t.minFilter=In),new WM(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(o)}}class il extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),x=this._getHandJoint(h,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=p.position.distanceTo(_.position),y=.02,E=.005;h.inputState.pinching&&g>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new il;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class YM extends Wn{constructor(e=null,t=1,i=1,s,o,u,c,d,h=Tn,p=Tn,_,g){super(null,u,c,d,h,p,s,o,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ud=new ie,qM=new ie,$M=new ut;class Ys{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ud.subVectors(i,t).cross(qM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ud),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$M.getNormalMatrix(e),s=this.coplanarPoint(Ud).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new gp,KM=new Rt(.5,.5),Qu=new ie;class xp{constructor(e=new Ys,t=new Ys,i=new Ys,s=new Ys,o=new Ys,u=new Ys){this.planes=[e,t,i,s,o,u]}set(e,t,i,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=rr,i=!1){const s=this.planes,o=e.elements,u=o[0],c=o[1],d=o[2],h=o[3],p=o[4],_=o[5],g=o[6],y=o[7],E=o[8],M=o[9],S=o[10],x=o[11],R=o[12],L=o[13],C=o[14],b=o[15];if(s[0].setComponents(h-u,y-p,x-E,b-R).normalize(),s[1].setComponents(h+u,y+p,x+E,b+R).normalize(),s[2].setComponents(h+c,y+_,x+M,b+L).normalize(),s[3].setComponents(h-c,y-_,x-M,b-L).normalize(),i)s[4].setComponents(d,g,S,C).normalize(),s[5].setComponents(h-d,y-g,x-S,b-C).normalize();else if(s[4].setComponents(h-d,y-g,x-S,b-C).normalize(),t===rr)s[5].setComponents(h+d,y+g,x+S,b+C).normalize();else if(t===dc)s[5].setComponents(d,g,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const t=KM.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Qu.x=s.normal.x>0?e.max.x:e.min.x,Qu.y=s.normal.y>0?e.max.y:e.min.y,Qu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pl extends Wn{constructor(e,t,i=ur,s,o,u,c=Tn,d=Tn,h,p=Nr,_=1){if(p!==Nr&&p!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,s,o,u,c,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ZM extends pl{constructor(e,t=ur,i=ra,s,o,u=Tn,c=Tn,d,h=Nr){const p={width:e,height:e,depth:1},_=[p,p,p,p,p,p];super(e,e,t,i,s,o,u,c,d,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sv extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ol extends ji{constructor(e=1,t=1,i=1,s=32,o=1,u=!1,c=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:u,thetaStart:c,thetaLength:d};const h=this;s=Math.floor(s),o=Math.floor(o);const p=[],_=[],g=[],y=[];let E=0;const M=[],S=i/2;let x=0;R(),u===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new Xn(_,3)),this.setAttribute("normal",new Xn(g,3)),this.setAttribute("uv",new Xn(y,2));function R(){const C=new ie,b=new ie;let N=0;const I=(t-e)/i;for(let k=0;k<=o;k++){const T=[],P=k/o,B=P*(t-e)+e;for(let X=0;X<=s;X++){const W=X/s,ne=W*d+c,te=Math.sin(ne),Q=Math.cos(ne);b.x=B*te,b.y=-P*i+S,b.z=B*Q,_.push(b.x,b.y,b.z),C.set(te,I,Q).normalize(),g.push(C.x,C.y,C.z),y.push(W,1-P),T.push(E++)}M.push(T)}for(let k=0;k<s;k++)for(let T=0;T<o;T++){const P=M[T][k],B=M[T+1][k],X=M[T+1][k+1],W=M[T][k+1];(e>0||T!==0)&&(p.push(P,B,W),N+=3),(t>0||T!==o-1)&&(p.push(B,X,W),N+=3)}h.addGroup(x,N,0),x+=N}function L(C){const b=E,N=new Rt,I=new ie;let k=0;const T=C===!0?e:t,P=C===!0?1:-1;for(let X=1;X<=s;X++)_.push(0,S*P,0),g.push(0,P,0),y.push(.5,.5),E++;const B=E;for(let X=0;X<=s;X++){const ne=X/s*d+c,te=Math.cos(ne),Q=Math.sin(ne);I.x=T*Q,I.y=S*P,I.z=T*te,_.push(I.x,I.y,I.z),g.push(0,P,0),N.x=te*.5+.5,N.y=Q*.5*P+.5,y.push(N.x,N.y),E++}for(let X=0;X<s;X++){const W=b+X,ne=B+X;C===!0?p.push(ne,ne+1,W):p.push(ne+1,ne,W),k+=3}h.addGroup(x,k,C===!0?1:2),x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Al extends ji{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,p=d+1,_=e/c,g=t/d,y=[],E=[],M=[],S=[];for(let x=0;x<p;x++){const R=x*g-u;for(let L=0;L<h;L++){const C=L*_-o;E.push(C,-R,0),M.push(0,0,1),S.push(L/c),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let R=0;R<c;R++){const L=R+h*x,C=R+h*(x+1),b=R+1+h*(x+1),N=R+1+h*x;y.push(L,C,N),y.push(C,b,N)}this.setIndex(y),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(M,3)),this.setAttribute("uv",new Xn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}class yp extends ji{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(u+c,Math.PI);let h=0;const p=[],_=new ie,g=new ie,y=[],E=[],M=[],S=[];for(let x=0;x<=i;x++){const R=[],L=x/i;let C=0;x===0&&u===0?C=.5/t:x===i&&d===Math.PI&&(C=-.5/t);for(let b=0;b<=t;b++){const N=b/t;_.x=-e*Math.cos(s+N*o)*Math.sin(u+L*c),_.y=e*Math.cos(u+L*c),_.z=e*Math.sin(s+N*o)*Math.sin(u+L*c),E.push(_.x,_.y,_.z),g.copy(_).normalize(),M.push(g.x,g.y,g.z),S.push(N+C,1-L),R.push(h++)}p.push(R)}for(let x=0;x<i;x++)for(let R=0;R<t;R++){const L=p[x][R+1],C=p[x][R],b=p[x+1][R],N=p[x+1][R+1];(x!==0||u>0)&&y.push(L,C,N),(x!==i-1||d<Math.PI)&&y.push(C,b,N)}this.setIndex(y),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(M,3)),this.setAttribute("uv",new Xn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class QM extends fr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hs extends wl{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q0,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JM extends wl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e1 extends wl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class av extends Un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Fd=new tn,Vg=new ie,Hg=new ie;class t1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xp,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vg),Hg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hg),t.updateMatrixWorld(),Fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sp extends nv{constructor(e=-1,t=1,i=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class n1 extends t1{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class i1 extends av{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new n1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class r1 extends av{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class s1 extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Gg(a,e,t,i){const s=a1(i);switch(t){case X0:return a*e;case Y0:return a*e/s.components*s.byteLength;case fp:return a*e/s.components*s.byteLength;case Ja:return a*e*2/s.components*s.byteLength;case dp:return a*e*2/s.components*s.byteLength;case j0:return a*e*3/s.components*s.byteLength;case Xi:return a*e*4/s.components*s.byteLength;case hp:return a*e*4/s.components*s.byteLength;case ic:case rc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case sc:case ac:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fh:case hh:return Math.max(a,16)*Math.max(e,8)/4;case ch:case dh:return Math.max(a,8)*Math.max(e,8)/2;case ph:case mh:case gh:case vh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case _h:case xh:case yh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case bh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Uh:case Fh:case Oh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case kh:case Bh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case zh:case Vh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a1(a){switch(a){case hi:case V0:return{byteLength:1,components:1};case fl:case H0:case Lr:return{byteLength:2,components:1};case up:case cp:return{byteLength:2,components:4};case ur:case lp:case ir:return{byteLength:4,components:1};case G0:case W0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let a=null,e=!1,t=null,i=null;function s(o,u){t(o,u),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function o1(a){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,_=h.byteLength,g=a.createBuffer();a.bindBuffer(d,g),a.bufferData(d,h,p),c.onUploadCallback();let y;if(h instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=a.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=a.SHORT;else if(h instanceof Uint32Array)y=a.UNSIGNED_INT;else if(h instanceof Int32Array)y=a.INT;else if(h instanceof Int8Array)y=a.BYTE;else if(h instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:_}}function i(c,d,h){const p=d.array,_=d.updateRanges;if(a.bindBuffer(h,c),_.length===0)a.bufferSubData(h,0,p);else{_.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<_.length;y++){const E=_[g],M=_[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,_[g]=M)}_.length=g+1;for(let y=0,E=_.length;y<E;y++){const M=_[y];a.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(a.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:s,remove:o,update:u}}var l1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u1=`#ifdef USE_ALPHAHASH
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
#endif`,c1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p1=`#ifdef USE_AOMAP
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
#endif`,m1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_1=`#ifdef USE_BATCHING
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
#endif`,g1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S1=`#ifdef USE_IRIDESCENCE
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
#endif`,M1=`#ifdef USE_BUMPMAP
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
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,D1=`#define PI 3.141592653589793
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
} // validated`,L1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N1=`vec3 transformedNormal = objectNormal;
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
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",B1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
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
}`,K1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J1=`uniform bool receiveShadow;
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
#endif`,eE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
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
#endif`,aE=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,oE=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lE=`#if defined( RE_IndirectDiffuse )
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gE=`#if defined( USE_POINTS_UV )
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
#endif`,vE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ME=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jE=`float getShadowMask() {
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
}`,YE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,$E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nT=`#ifdef USE_TRANSMISSION
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lT=`uniform sampler2D t2D;
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`#include <common>
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
}`,pT=`#if DEPTH_PACKING == 3200
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
}`,mT=`#define DISTANCE
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
}`,_T=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`uniform float scale;
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
}`,yT=`uniform vec3 diffuse;
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
}`,ST=`#include <common>
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
}`,MT=`uniform vec3 diffuse;
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
}`,ET=`#define LAMBERT
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
}`,TT=`#define LAMBERT
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
}`,wT=`#define MATCAP
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
}`,AT=`#define MATCAP
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
}`,CT=`#define NORMAL
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
}`,bT=`#define NORMAL
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
}`,RT=`#define PHONG
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
}`,PT=`#define PHONG
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
}`,DT=`#define STANDARD
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
}`,LT=`#define STANDARD
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
}`,NT=`#define TOON
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
}`,IT=`#define TOON
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
}`,UT=`uniform float size;
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
}`,FT=`uniform vec3 diffuse;
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
}`,OT=`#include <common>
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
}`,kT=`uniform vec3 color;
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
}`,BT=`uniform float rotation;
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
}`,zT=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:l1,alphahash_pars_fragment:u1,alphamap_fragment:c1,alphamap_pars_fragment:f1,alphatest_fragment:d1,alphatest_pars_fragment:h1,aomap_fragment:p1,aomap_pars_fragment:m1,batching_pars_vertex:_1,batching_vertex:g1,begin_vertex:v1,beginnormal_vertex:x1,bsdfs:y1,iridescence_fragment:S1,bumpmap_pars_fragment:M1,clipping_planes_fragment:E1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:A1,color_fragment:C1,color_pars_fragment:b1,color_pars_vertex:R1,color_vertex:P1,common:D1,cube_uv_reflection_fragment:L1,defaultnormal_vertex:N1,displacementmap_pars_vertex:I1,displacementmap_vertex:U1,emissivemap_fragment:F1,emissivemap_pars_fragment:O1,colorspace_fragment:k1,colorspace_pars_fragment:B1,envmap_fragment:z1,envmap_common_pars_fragment:V1,envmap_pars_fragment:H1,envmap_pars_vertex:G1,envmap_physical_pars_fragment:eE,envmap_vertex:W1,fog_vertex:X1,fog_pars_vertex:j1,fog_fragment:Y1,fog_pars_fragment:q1,gradientmap_pars_fragment:$1,lightmap_pars_fragment:K1,lights_lambert_fragment:Z1,lights_lambert_pars_fragment:Q1,lights_pars_begin:J1,lights_toon_fragment:tE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:rE,lights_physical_fragment:sE,lights_physical_pars_fragment:aE,lights_fragment_begin:oE,lights_fragment_maps:lE,lights_fragment_end:uE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:fE,logdepthbuf_pars_vertex:dE,logdepthbuf_vertex:hE,map_fragment:pE,map_pars_fragment:mE,map_particle_fragment:_E,map_particle_pars_fragment:gE,metalnessmap_fragment:vE,metalnessmap_pars_fragment:xE,morphinstance_vertex:yE,morphcolor_vertex:SE,morphnormal_vertex:ME,morphtarget_pars_vertex:EE,morphtarget_vertex:TE,normal_fragment_begin:wE,normal_fragment_maps:AE,normal_pars_fragment:CE,normal_pars_vertex:bE,normal_vertex:RE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:IE,opaque_fragment:UE,packing:FE,premultiplied_alpha_fragment:OE,project_vertex:kE,dithering_fragment:BE,dithering_pars_fragment:zE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:HE,shadowmap_pars_fragment:GE,shadowmap_pars_vertex:WE,shadowmap_vertex:XE,shadowmask_pars_fragment:jE,skinbase_vertex:YE,skinning_pars_vertex:qE,skinning_vertex:$E,skinnormal_vertex:KE,specularmap_fragment:ZE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:eT,transmission_fragment:tT,transmission_pars_fragment:nT,uv_pars_fragment:iT,uv_pars_vertex:rT,uv_vertex:sT,worldpos_vertex:aT,background_vert:oT,background_frag:lT,backgroundCube_vert:uT,backgroundCube_frag:cT,cube_vert:fT,cube_frag:dT,depth_vert:hT,depth_frag:pT,distance_vert:mT,distance_frag:_T,equirect_vert:gT,equirect_frag:vT,linedashed_vert:xT,linedashed_frag:yT,meshbasic_vert:ST,meshbasic_frag:MT,meshlambert_vert:ET,meshlambert_frag:TT,meshmatcap_vert:wT,meshmatcap_frag:AT,meshnormal_vert:CT,meshnormal_frag:bT,meshphong_vert:RT,meshphong_frag:PT,meshphysical_vert:DT,meshphysical_frag:LT,meshtoon_vert:NT,meshtoon_frag:IT,points_vert:UT,points_frag:FT,shadow_vert:OT,shadow_frag:kT,sprite_vert:BT,sprite_frag:zT},Ne={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},tr={basic:{uniforms:Hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new bt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Hn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Hn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new bt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Hn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Hn([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Hn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Hn([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Hn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Hn([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Hn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Hn([Ne.lights,Ne.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};tr.physical={uniforms:Hn([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ju={r:0,b:0,g:0},Gs=new cr,VT=new tn;function HT(a,e,t,i,s,o,u){const c=new bt(0);let d=o===!0?0:1,h,p,_=null,g=0,y=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function M(L){let C=!1;const b=E(L);b===null?x(c,d):b&&b.isColor&&(x(b,1),C=!0);const N=a.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(a.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(L,C){const b=E(C);b&&(b.isCubeTexture||b.mapping===Mc)?(p===void 0&&(p=new En(new hs(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:to(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Gs.copy(C.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),p.material.uniforms.envMap.value=b,p.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(VT.makeRotationFromEuler(Gs)),p.material.toneMapped=Tt.getTransfer(b.colorSpace)!==It,(_!==b||g!==b.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,_=b,g=b.version,y=a.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new En(new Al(2,2),new fr({name:"BackgroundMaterial",uniforms:to(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(b.colorSpace)!==It,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(_!==b||g!==b.version||y!==a.toneMapping)&&(h.material.needsUpdate=!0,_=b,g=b.version,y=a.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,C){L.getRGB(Ju,tv(a)),i.buffers.color.setClear(Ju.r,Ju.g,Ju.b,C,u)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,C=1){c.set(L),d=C,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,x(c,d)},render:M,addToRenderList:S,dispose:R}}function GT(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=g(null);let o=s,u=!1;function c(P,B,X,W,ne){let te=!1;const Q=_(W,X,B);o!==Q&&(o=Q,h(o.object)),te=y(P,W,X,ne),te&&E(P,W,X,ne),ne!==null&&e.update(ne,a.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,C(P,B,X,W),ne!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function d(){return a.createVertexArray()}function h(P){return a.bindVertexArray(P)}function p(P){return a.deleteVertexArray(P)}function _(P,B,X){const W=X.wireframe===!0;let ne=i[P.id];ne===void 0&&(ne={},i[P.id]=ne);let te=ne[B.id];te===void 0&&(te={},ne[B.id]=te);let Q=te[W];return Q===void 0&&(Q=g(d()),te[W]=Q),Q}function g(P){const B=[],X=[],W=[];for(let ne=0;ne<t;ne++)B[ne]=0,X[ne]=0,W[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:W,object:P,attributes:{},index:null}}function y(P,B,X,W){const ne=o.attributes,te=B.attributes;let Q=0;const q=X.getAttributes();for(const j in q)if(q[j].location>=0){const ae=ne[j];let O=te[j];if(O===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),ae===void 0||ae.attribute!==O||O&&ae.data!==O.data)return!0;Q++}return o.attributesNum!==Q||o.index!==W}function E(P,B,X,W){const ne={},te=B.attributes;let Q=0;const q=X.getAttributes();for(const j in q)if(q[j].location>=0){let ae=te[j];ae===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const O={};O.attribute=ae,ae&&ae.data&&(O.data=ae.data),ne[j]=O,Q++}o.attributes=ne,o.attributesNum=Q,o.index=W}function M(){const P=o.newAttributes;for(let B=0,X=P.length;B<X;B++)P[B]=0}function S(P){x(P,0)}function x(P,B){const X=o.newAttributes,W=o.enabledAttributes,ne=o.attributeDivisors;X[P]=1,W[P]===0&&(a.enableVertexAttribArray(P),W[P]=1),ne[P]!==B&&(a.vertexAttribDivisor(P,B),ne[P]=B)}function R(){const P=o.newAttributes,B=o.enabledAttributes;for(let X=0,W=B.length;X<W;X++)B[X]!==P[X]&&(a.disableVertexAttribArray(X),B[X]=0)}function L(P,B,X,W,ne,te,Q){Q===!0?a.vertexAttribIPointer(P,B,X,ne,te):a.vertexAttribPointer(P,B,X,W,ne,te)}function C(P,B,X,W){M();const ne=W.attributes,te=X.getAttributes(),Q=B.defaultAttributeValues;for(const q in te){const j=te[q];if(j.location>=0){let fe=ne[q];if(fe===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),fe!==void 0){const ae=fe.normalized,O=fe.itemSize,se=e.get(fe);if(se===void 0)continue;const Ae=se.buffer,Ue=se.type,Be=se.bytesPerElement,oe=Ue===a.INT||Ue===a.UNSIGNED_INT||fe.gpuType===lp;if(fe.isInterleavedBufferAttribute){const de=fe.data,Se=de.stride,ze=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<j.locationSize;Ie++)x(j.location+Ie,de.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<j.locationSize;Ie++)S(j.location+Ie);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let Ie=0;Ie<j.locationSize;Ie++)L(j.location+Ie,O/j.locationSize,Ue,ae,Se*Be,(ze+O/j.locationSize*Ie)*Be,oe)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)x(j.location+de,fe.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<j.locationSize;de++)S(j.location+de);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let de=0;de<j.locationSize;de++)L(j.location+de,O/j.locationSize,Ue,ae,O*Be,O/j.locationSize*de*Be,oe)}}else if(Q!==void 0){const ae=Q[q];if(ae!==void 0)switch(ae.length){case 2:a.vertexAttrib2fv(j.location,ae);break;case 3:a.vertexAttrib3fv(j.location,ae);break;case 4:a.vertexAttrib4fv(j.location,ae);break;default:a.vertexAttrib1fv(j.location,ae)}}}}R()}function b(){k();for(const P in i){const B=i[P];for(const X in B){const W=B[X];for(const ne in W)p(W[ne].object),delete W[ne];delete B[X]}delete i[P]}}function N(P){if(i[P.id]===void 0)return;const B=i[P.id];for(const X in B){const W=B[X];for(const ne in W)p(W[ne].object),delete W[ne];delete B[X]}delete i[P.id]}function I(P){for(const B in i){const X=i[B];if(X[P.id]===void 0)continue;const W=X[P.id];for(const ne in W)p(W[ne].object),delete W[ne];delete X[P.id]}}function k(){T(),u=!0,o!==s&&(o=s,h(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:k,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:S,disableUnusedAttributes:R}}function WT(a,e,t){let i;function s(h){i=h}function o(h,p){a.drawArrays(i,h,p),t.update(p,i,1)}function u(h,p,_){_!==0&&(a.drawArraysInstanced(i,h,p,_),t.update(p,i,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,_);let y=0;for(let E=0;E<_;E++)y+=p[E];t.update(y,i,1)}function d(h,p,_,g){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<h.length;E++)u(h[E],p[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,p,0,g,0,_);let E=0;for(let M=0;M<_;M++)E+=p[M]*g[M];t.update(E,i,1)}}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function XT(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==Xi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const k=I===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==hi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ir&&!k)}function d(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(at("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),R=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),b=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:C,maxSamples:b,samples:N}}function jT(a){const e=this;let t=null,i=0,s=!1,o=!1;const u=new Ys,c=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||i!==0||s;return s=g,i=_.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,y){const E=_.clippingPlanes,M=_.clipIntersection,S=_.clipShadows,x=a.get(_);if(!s||E===null||E.length===0||o&&!S)o?p(null):h();else{const R=o?0:i,L=R*4;let C=x.clippingState||null;d.value=C,C=p(E,g,L,y);for(let b=0;b!==L;++b)C[b]=t[b];x.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,g,y,E){const M=_!==null?_.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const x=y+M*4,R=g.matrixWorldInverse;c.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,C=y;L!==M;++L,C+=4)u.copy(_[L]).applyMatrix4(R,c),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function YT(a){let e=new WeakMap;function t(u,c){return c===ah?u.mapping=ra:c===oh&&(u.mapping=Qa),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===ah||c===oh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new rv(d.height);return h.fromEquirectangularTexture(a,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const us=4,Wg=[.125,.215,.35,.446,.526,.582],Ks=20,qT=256,Jo=new Sp,Xg=new bt;let Od=null,kd=0,Bd=0,zd=!1;const $T=new ie;class jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:u=256,position:c=$T}=o;Od=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,kd,Bd),this._renderer.xr.enabled=zd,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ra||e.mapping===Qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Lr,format:Xi,colorSpace:eo,depthBuffer:!1},s=Yg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KT(o)),this._blurMaterial=QT(o,e,t),this._ggxMaterial=ZT(o,e,t)}return s}_compileMaterial(e){const t=new En(new ji,e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,i,s,o){const d=new Pi(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(Xg),_.toneMapping=ar,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new hs,new vp({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,S=M.material;let x=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,x=!0):(S.color.copy(Xg),x=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(d.up.set(0,h[L],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[L],o.y,o.z)):C===1?(d.up.set(0,0,h[L]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[L],o.z)):(d.up.set(0,h[L],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[L]));const b=this._cubeSize;Ha(s,C*b,L>2?b:0,b,b),_.setRenderTarget(s),x&&_.render(M,d),_.render(e,d)}_.toneMapping=y,_.autoClear=g,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ra||e.mapping===Qa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const o=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;Ha(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[i];c.material=u;const d=u.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-p*p),g=0+h*1.25,y=_*g,{_lodMax:E}=this,M=this._sizeLods[i],S=3*M*(i>E-us?i-E+us:0),x=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=E-t,Ha(o,S,x,3*M,2*M),s.setRenderTarget(o),s.render(c,Jo),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=E-i,Ha(e,S,x,3*M,2*M),s.setRenderTarget(e),s.render(c,Jo)}_blur(e,t,i,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",o),this._halfBlur(u,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const p=3,_=this._lodMeshes[s];_.material=h;const g=h.uniforms,y=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Ks-1),M=o/E,S=isFinite(o)?1+Math.floor(p*M):Ks;S>Ks&&at(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ks}`);const x=[];let R=0;for(let I=0;I<Ks;++I){const k=I/M,T=Math.exp(-k*k/2);x.push(T),I===0?R+=T:I<S&&(R+=2*T)}for(let I=0;I<x.length;I++)x[I]=x[I]/R;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-i;const C=this._sizeLods[s],b=3*C*(s>L-us?s-L+us:0),N=4*(this._cubeSize-C);Ha(t,b,N,3*C,2*C),d.setRenderTarget(t),d.render(_,Jo)}}function KT(a){const e=[],t=[],i=[];let s=a;const o=a-us+1+Wg.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);e.push(c);let d=1/c;u>a-us?d=Wg[u-a+us-1]:u===0&&(d=0),t.push(d);const h=1/(c-2),p=-h,_=1+h,g=[p,p,_,p,_,_,p,p,_,_,p,_],y=6,E=6,M=3,S=2,x=1,R=new Float32Array(M*E*y),L=new Float32Array(S*E*y),C=new Float32Array(x*E*y);for(let N=0;N<y;N++){const I=N%3*2/3-1,k=N>2?0:-1,T=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];R.set(T,M*E*N),L.set(g,S*E*N);const P=[N,N,N,N,N,N];C.set(P,x*E*N)}const b=new ji;b.setAttribute("position",new lr(R,M)),b.setAttribute("uv",new lr(L,S)),b.setAttribute("faceIndex",new lr(C,x)),i.push(new En(b,null)),s>us&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Yg(a,e,t){const i=new or(a,e,t);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ha(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function ZT(a,e,t){return new fr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function QT(a,e,t){const i=new Float32Array(Ks),s=new ie(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function qg(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function $g(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function JT(a){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,h=d===ah||d===oh,p=d===ra||d===Qa;if(h||p){let _=e.get(c);const g=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new jg(a)),_=h?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const y=c.image;return h&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new jg(a)),_=h?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",o),_.texture):null}}}return c}function s(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function o(c){const d=c.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function ew(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&hl("WebGLRenderer: "+i+" extension not supported."),s}}}function tw(a,e,t,i){const s={},o=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete s[g.id];const y=o.get(g);y&&(e.remove(y),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(_,g){return s[g.id]===!0||(g.addEventListener("dispose",u),s[g.id]=!0,t.memory.geometries++),g}function d(_){const g=_.attributes;for(const y in g)e.update(g[y],a.ARRAY_BUFFER)}function h(_){const g=[],y=_.index,E=_.attributes.position;let M=0;if(y!==null){const R=y.array;M=y.version;for(let L=0,C=R.length;L<C;L+=3){const b=R[L+0],N=R[L+1],I=R[L+2];g.push(b,N,N,I,I,b)}}else if(E!==void 0){const R=E.array;M=E.version;for(let L=0,C=R.length/3-1;L<C;L+=3){const b=L+0,N=L+1,I=L+2;g.push(b,N,N,I,I,b)}}else return;const S=new($0(g)?ev:J0)(g,1);S.version=M;const x=o.get(_);x&&e.remove(x),o.set(_,S)}function p(_){const g=o.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&h(_)}else h(_);return o.get(_)}return{get:c,update:d,getWireframeAttribute:p}}function nw(a,e,t){let i;function s(g){i=g}let o,u;function c(g){o=g.type,u=g.bytesPerElement}function d(g,y){a.drawElements(i,y,o,g*u),t.update(y,i,1)}function h(g,y,E){E!==0&&(a.drawElementsInstanced(i,y,o,g*u,E),t.update(y,i,E))}function p(g,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,o,g,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];t.update(S,i,1)}function _(g,y,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<g.length;x++)h(g[x]/u,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,o,g,0,M,0,E);let x=0;for(let R=0;R<E;R++)x+=y[R]*M[R];t.update(x,i,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function iw(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case a.TRIANGLES:t.triangles+=c*(o/3);break;case a.LINES:t.lines+=c*(o/2);break;case a.LINE_STRIP:t.lines+=c*(o-1);break;case a.LINE_LOOP:t.lines+=c*o;break;case a.POINTS:t.points+=c*o;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rw(a,e,t){const i=new WeakMap,s=new Jt;function o(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(c);if(g===void 0||g.count!==_){let P=function(){k.dispose(),i.delete(c),c.removeEventListener("dispose",P)};var y=P;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let C=0;E===!0&&(C=1),M===!0&&(C=2),S===!0&&(C=3);let b=c.attributes.position.count*C,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*N*4*_),k=new K0(I,b,N,_);k.type=ir,k.needsUpdate=!0;const T=C*4;for(let B=0;B<_;B++){const X=x[B],W=R[B],ne=L[B],te=b*N*4*B;for(let Q=0;Q<X.count;Q++){const q=Q*T;E===!0&&(s.fromBufferAttribute(X,Q),I[te+q+0]=s.x,I[te+q+1]=s.y,I[te+q+2]=s.z,I[te+q+3]=0),M===!0&&(s.fromBufferAttribute(W,Q),I[te+q+4]=s.x,I[te+q+5]=s.y,I[te+q+6]=s.z,I[te+q+7]=0),S===!0&&(s.fromBufferAttribute(ne,Q),I[te+q+8]=s.x,I[te+q+9]=s.y,I[te+q+10]=s.z,I[te+q+11]=ne.itemSize===4?s.w:1)}}g={count:_,texture:k,size:new Rt(b,N)},i.set(c,g),c.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(a,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(a,"morphTargetBaseInfluence",M),d.getUniforms().setValue(a,"morphTargetInfluences",h)}d.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:o}}function sw(a,e,t,i){let s=new WeakMap;function o(d){const h=i.render.frame,p=d.geometry,_=e.get(d,p);if(s.get(_)!==h&&(e.update(_),s.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,a.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return _}function u(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:u}}const aw={[N0]:"LINEAR_TONE_MAPPING",[I0]:"REINHARD_TONE_MAPPING",[U0]:"CINEON_TONE_MAPPING",[F0]:"ACES_FILMIC_TONE_MAPPING",[k0]:"AGX_TONE_MAPPING",[B0]:"NEUTRAL_TONE_MAPPING",[O0]:"CUSTOM_TONE_MAPPING"};function ow(a,e,t,i,s){const o=new or(e,t,{type:a,depthBuffer:i,stencilBuffer:s}),u=new or(e,t,{type:Lr,depthBuffer:!1,stencilBuffer:!1}),c=new ji;c.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xn([0,2,0,0,2,0],2));const d=new QM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new En(c,d),p=new Sp(-1,1,1,-1,0,1);let _=null,g=null,y=!1,E,M=null,S=[],x=!1;this.setSize=function(R,L){o.setSize(R,L),u.setSize(R,L);for(let C=0;C<S.length;C++){const b=S[C];b.setSize&&b.setSize(R,L)}},this.setEffects=function(R){S=R,x=S.length>0&&S[0].isRenderPass===!0;const L=o.width,C=o.height;for(let b=0;b<S.length;b++){const N=S[b];N.setSize&&N.setSize(L,C)}},this.begin=function(R,L){if(y||R.toneMapping===ar&&S.length===0)return!1;if(M=L,L!==null){const C=L.width,b=L.height;(o.width!==C||o.height!==b)&&this.setSize(C,b)}return x===!1&&R.setRenderTarget(o),E=R.toneMapping,R.toneMapping=ar,!0},this.hasRenderPass=function(){return x},this.end=function(R,L){R.toneMapping=E,y=!0;let C=o,b=u;for(let N=0;N<S.length;N++){const I=S[N];if(I.enabled!==!1&&(I.render(R,b,C,L),I.needsSwap!==!1)){const k=C;C=b,b=k}}if(_!==R.outputColorSpace||g!==R.toneMapping){_=R.outputColorSpace,g=R.toneMapping,d.defines={},Tt.getTransfer(_)===It&&(d.defines.SRGB_TRANSFER="");const N=aw[g];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(M),R.render(h,p),M=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),u.dispose(),c.dispose(),d.dispose()}}const lv=new Wn,Gh=new pl(1,1),uv=new K0,cv=new CM,fv=new iv,Kg=[],Zg=[],Qg=new Float32Array(16),Jg=new Float32Array(9),e0=new Float32Array(4);function uo(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=Kg[s];if(o===void 0&&(o=new Float32Array(s),Kg[s]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,a[u].toArray(o,c)}return o}function dn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function hn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Tc(a,e){let t=Zg[e];t===void 0&&(t=new Int32Array(e),Zg[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function lw(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function uw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;a.uniform2fv(this.addr,e),hn(t,e)}}function cw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;a.uniform3fv(this.addr,e),hn(t,e)}}function fw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;a.uniform4fv(this.addr,e),hn(t,e)}}function dw(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;e0.set(i),a.uniformMatrix2fv(this.addr,!1,e0),hn(t,i)}}function hw(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;Jg.set(i),a.uniformMatrix3fv(this.addr,!1,Jg),hn(t,i)}}function pw(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;Qg.set(i),a.uniformMatrix4fv(this.addr,!1,Qg),hn(t,i)}}function mw(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function _w(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;a.uniform2iv(this.addr,e),hn(t,e)}}function gw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;a.uniform3iv(this.addr,e),hn(t,e)}}function vw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;a.uniform4iv(this.addr,e),hn(t,e)}}function xw(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function yw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;a.uniform2uiv(this.addr,e),hn(t,e)}}function Sw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;a.uniform3uiv(this.addr,e),hn(t,e)}}function Mw(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;a.uniform4uiv(this.addr,e),hn(t,e)}}function Ew(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(Gh.compareFunction=t.isReversedDepthBuffer()?mp:pp,o=Gh):o=lv,t.setTexture2D(e||o,s)}function Tw(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cv,s)}function ww(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||fv,s)}function Aw(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||uv,s)}function Cw(a){switch(a){case 5126:return lw;case 35664:return uw;case 35665:return cw;case 35666:return fw;case 35674:return dw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return _w;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return xw;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Aw}}function bw(a,e){a.uniform1fv(this.addr,e)}function Rw(a,e){const t=uo(e,this.size,2);a.uniform2fv(this.addr,t)}function Pw(a,e){const t=uo(e,this.size,3);a.uniform3fv(this.addr,t)}function Dw(a,e){const t=uo(e,this.size,4);a.uniform4fv(this.addr,t)}function Lw(a,e){const t=uo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Nw(a,e){const t=uo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Iw(a,e){const t=uo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Uw(a,e){a.uniform1iv(this.addr,e)}function Fw(a,e){a.uniform2iv(this.addr,e)}function Ow(a,e){a.uniform3iv(this.addr,e)}function kw(a,e){a.uniform4iv(this.addr,e)}function Bw(a,e){a.uniform1uiv(this.addr,e)}function zw(a,e){a.uniform2uiv(this.addr,e)}function Vw(a,e){a.uniform3uiv(this.addr,e)}function Hw(a,e){a.uniform4uiv(this.addr,e)}function Gw(a,e,t){const i=this.cache,s=e.length,o=Tc(t,s);dn(i,o)||(a.uniform1iv(this.addr,o),hn(i,o));let u;this.type===a.SAMPLER_2D_SHADOW?u=Gh:u=lv;for(let c=0;c!==s;++c)t.setTexture2D(e[c]||u,o[c])}function Ww(a,e,t){const i=this.cache,s=e.length,o=Tc(t,s);dn(i,o)||(a.uniform1iv(this.addr,o),hn(i,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||cv,o[u])}function Xw(a,e,t){const i=this.cache,s=e.length,o=Tc(t,s);dn(i,o)||(a.uniform1iv(this.addr,o),hn(i,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||fv,o[u])}function jw(a,e,t){const i=this.cache,s=e.length,o=Tc(t,s);dn(i,o)||(a.uniform1iv(this.addr,o),hn(i,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||uv,o[u])}function Yw(a){switch(a){case 5126:return bw;case 35664:return Rw;case 35665:return Pw;case 35666:return Dw;case 35674:return Lw;case 35675:return Nw;case 35676:return Iw;case 5124:case 35670:return Uw;case 35667:case 35671:return Fw;case 35668:case 35672:return Ow;case 35669:case 35673:return kw;case 5125:return Bw;case 36294:return zw;case 36295:return Vw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return jw}}class qw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cw(t.type)}}class $w{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yw(t.type)}}class Kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],i)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function t0(a,e){a.seq.push(e),a.map[e.id]=e}function Zw(a,e,t){const i=a.name,s=i.length;for(Vd.lastIndex=0;;){const o=Vd.exec(i),u=Vd.lastIndex;let c=o[1];const d=o[2]==="]",h=o[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){t0(t,h===void 0?new qw(c,a,e):new $w(c,a,e));break}else{let _=t.map[c];_===void 0&&(_=new Kw(c),t0(t,_)),t=_}}}class oc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const c=e.getActiveUniform(t,u),d=e.getUniformLocation(t,c.name);Zw(c,d,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function n0(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Qw=37297;let Jw=0;function eA(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const i0=new ut;function tA(a){Tt._getMatrix(i0,Tt.workingColorSpace,a);const e=`mat3( ${i0.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(a)){case fc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function r0(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+eA(a.getShaderSource(e),c)}else return o}function nA(a,e){const t=tA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iA={[N0]:"Linear",[I0]:"Reinhard",[U0]:"Cineon",[F0]:"ACESFilmic",[k0]:"AgX",[B0]:"Neutral",[O0]:"Custom"};function rA(a,e){const t=iA[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ec=new ie;function sA(){Tt.getLuminanceCoefficients(ec);const a=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function oA(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lA(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),u=o.name;let c=1;o.type===a.FLOAT_MAT2&&(c=2),o.type===a.FLOAT_MAT3&&(c=3),o.type===a.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:a.getAttribLocation(e,u),locationSize:c}}return t}function rl(a){return a!==""}function s0(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(a){return a.replace(uA,fA)}const cA=new Map;function fA(a,e){let t=ft[e];if(t===void 0){const i=cA.get(e);if(i!==void 0)t=ft[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(a){return a.replace(dA,hA)}function hA(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function l0(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pA={[nc]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function mA(a){return pA[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _A={[ra]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE",[Mc]:"ENVMAP_TYPE_CUBE_UV"};function gA(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":_A[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const vA={[Qa]:"ENVMAP_MODE_REFRACTION"};function xA(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":vA[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yA={[op]:"ENVMAP_BLENDING_MULTIPLY",[lM]:"ENVMAP_BLENDING_MIX",[uM]:"ENVMAP_BLENDING_ADD"};function SA(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":yA[a.combine]||"ENVMAP_BLENDING_NONE"}function MA(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function EA(a,e,t,i){const s=a.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=mA(t),h=gA(t),p=xA(t),_=SA(t),g=MA(t),y=aA(t),E=oA(o),M=s.createProgram();let S,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(rl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(rl).join(`
`),x.length>0&&(x+=`
`)):(S=[l0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),x=[l0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?ft.tonemapping_pars_fragment:"",t.toneMapping!==ar?rA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,nA("linearToOutputTexel",t.outputColorSpace),sA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),u=Wh(u),u=s0(u,t),u=a0(u,t),c=Wh(c),c=s0(c,t),c=a0(c,t),u=o0(u),c=o0(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=R+S+u,C=R+x+c,b=n0(s,s.VERTEX_SHADER,L),N=n0(s,s.FRAGMENT_SHADER,C);s.attachShader(M,b),s.attachShader(M,N),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(B){if(a.debug.checkShaderErrors){const X=s.getProgramInfoLog(M)||"",W=s.getShaderInfoLog(b)||"",ne=s.getShaderInfoLog(N)||"",te=X.trim(),Q=W.trim(),q=ne.trim();let j=!0,fe=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,M,b,N);else{const ae=r0(s,b,"vertex"),O=r0(s,N,"fragment");Ct("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+te+`
`+ae+`
`+O)}else te!==""?at("WebGLProgram: Program Info Log:",te):(Q===""||q==="")&&(fe=!1);fe&&(B.diagnostics={runnable:j,programLog:te,vertexShader:{log:Q,prefix:S},fragmentShader:{log:q,prefix:x}})}s.deleteShader(b),s.deleteShader(N),k=new oc(s,M),T=lA(s,M)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,Qw)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=N,this}let TA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AA(e),t.set(e,i)),i}}class AA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function CA(a,e,t,i,s,o,u){const c=new Z0,d=new wA,h=new Set,p=[],_=new Map,g=s.logarithmicDepthBuffer;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function S(T,P,B,X,W){const ne=X.fog,te=W.geometry,Q=T.isMeshStandardMaterial?X.environment:null,q=(T.isMeshStandardMaterial?t:e).get(T.envMap||Q),j=q&&q.mapping===Mc?q.image.height:null,fe=E[T.type];T.precision!==null&&(y=s.getMaxPrecision(T.precision),y!==T.precision&&at("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const ae=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,O=ae!==void 0?ae.length:0;let se=0;te.morphAttributes.position!==void 0&&(se=1),te.morphAttributes.normal!==void 0&&(se=2),te.morphAttributes.color!==void 0&&(se=3);let Ae,Ue,Be,oe;if(fe){const St=tr[fe];Ae=St.vertexShader,Ue=St.fragmentShader}else Ae=T.vertexShader,Ue=T.fragmentShader,d.update(T),Be=d.getVertexShaderID(T),oe=d.getFragmentShaderID(T);const de=a.getRenderTarget(),Se=a.state.buffers.depth.getReversed(),ze=W.isInstancedMesh===!0,Ie=W.isBatchedMesh===!0,pt=!!T.map,nn=!!T.matcap,dt=!!q,xt=!!T.aoMap,Dt=!!T.lightMap,lt=!!T.bumpMap,Ht=!!T.normalMap,V=!!T.displacementMap,Gt=!!T.emissiveMap,mt=!!T.metalnessMap,yt=!!T.roughnessMap,je=T.anisotropy>0,U=T.clearcoat>0,w=T.dispersion>0,Y=T.iridescence>0,he=T.sheen>0,me=T.transmission>0,ce=je&&!!T.anisotropyMap,$e=U&&!!T.clearcoatMap,Te=U&&!!T.clearcoatNormalMap,Ve=U&&!!T.clearcoatRoughnessMap,nt=Y&&!!T.iridescenceMap,ye=Y&&!!T.iridescenceThicknessMap,Re=he&&!!T.sheenColorMap,We=he&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,Ce=!!T.specularColorMap,ot=!!T.specularIntensityMap,H=me&&!!T.transmissionMap,De=me&&!!T.thicknessMap,Me=!!T.gradientMap,Le=!!T.alphaMap,ve=T.alphaTest>0,pe=!!T.alphaHash,be=!!T.extensions;let it=ar;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(it=a.toneMapping);const Nt={shaderID:fe,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:Ue,defines:T.defines,customVertexShaderID:Be,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Ie,batchingColor:Ie&&W._colorsTexture!==null,instancing:ze,instancingColor:ze&&W.instanceColor!==null,instancingMorph:ze&&W.morphTexture!==null,outputColorSpace:de===null?a.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:eo,alphaToCoverage:!!T.alphaToCoverage,map:pt,matcap:nn,envMap:dt,envMapMode:dt&&q.mapping,envMapCubeUVHeight:j,aoMap:xt,lightMap:Dt,bumpMap:lt,normalMap:Ht,displacementMap:V,emissiveMap:Gt,normalMapObjectSpace:Ht&&T.normalMapType===dM,normalMapTangentSpace:Ht&&T.normalMapType===q0,metalnessMap:mt,roughnessMap:yt,anisotropy:je,anisotropyMap:ce,clearcoat:U,clearcoatMap:$e,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ve,dispersion:w,iridescence:Y,iridescenceMap:nt,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Re,sheenRoughnessMap:We,specularMap:Ye,specularColorMap:Ce,specularIntensityMap:ot,transmission:me,transmissionMap:H,thicknessMap:De,gradientMap:Me,opaque:T.transparent===!1&&T.blending===ja&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:ve,alphaHash:pe,combine:T.combine,mapUv:pt&&M(T.map.channel),aoMapUv:xt&&M(T.aoMap.channel),lightMapUv:Dt&&M(T.lightMap.channel),bumpMapUv:lt&&M(T.bumpMap.channel),normalMapUv:Ht&&M(T.normalMap.channel),displacementMapUv:V&&M(T.displacementMap.channel),emissiveMapUv:Gt&&M(T.emissiveMap.channel),metalnessMapUv:mt&&M(T.metalnessMap.channel),roughnessMapUv:yt&&M(T.roughnessMap.channel),anisotropyMapUv:ce&&M(T.anisotropyMap.channel),clearcoatMapUv:$e&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&M(T.sheenRoughnessMap.channel),specularMapUv:Ye&&M(T.specularMap.channel),specularColorMapUv:Ce&&M(T.specularColorMap.channel),specularIntensityMapUv:ot&&M(T.specularIntensityMap.channel),transmissionMapUv:H&&M(T.transmissionMap.channel),thicknessMapUv:De&&M(T.thicknessMap.channel),alphaMapUv:Le&&M(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ht||je),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!te.attributes.uv&&(pt||Le),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Se,skinning:W.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:se,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:Gt&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===br,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&T.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=h.has(1),Nt.vertexUv2s=h.has(2),Nt.vertexUv3s=h.has(3),h.clear(),Nt}function x(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)P.push(B),P.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(R(P,T),L(P,T),P.push(a.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function R(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function L(T,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),T.push(c.mask)}function C(T){const P=E[T.type];let B;if(P){const X=tr[P];B=VM.clone(X.uniforms)}else B=T.uniforms;return B}function b(T,P){let B=_.get(P);return B!==void 0?++B.usedTimes:(B=new EA(a,P,T,o),p.push(B),_.set(P,B)),B}function N(T){if(--T.usedTimes===0){const P=p.indexOf(T);p[P]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function I(T){d.remove(T)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:b,releaseProgram:N,releaseShaderCache:I,programs:p,dispose:k}}function bA(){let a=new WeakMap;function e(u){return a.has(u)}function t(u){let c=a.get(u);return c===void 0&&(c={},a.set(u,c)),c}function i(u){a.delete(u)}function s(u,c,d){a.get(u)[c]=d}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function RA(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function u0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function c0(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function u(_,g,y,E,M,S){let x=a[e];return x===void 0?(x={id:_.id,object:_,geometry:g,material:y,groupOrder:E,renderOrder:_.renderOrder,z:M,group:S},a[e]=x):(x.id=_.id,x.object=_,x.geometry=g,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=M,x.group=S),e++,x}function c(_,g,y,E,M,S){const x=u(_,g,y,E,M,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function d(_,g,y,E,M,S){const x=u(_,g,y,E,M,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(_,g){t.length>1&&t.sort(_||RA),i.length>1&&i.sort(g||u0),s.length>1&&s.sort(g||u0)}function p(){for(let _=e,g=a.length;_<g;_++){const y=a[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:c,unshift:d,finish:p,sort:h}}function PA(){let a=new WeakMap;function e(i,s){const o=a.get(i);let u;return o===void 0?(u=new c0,a.set(i,[u])):s>=o.length?(u=new c0,o.push(u)):u=o[s],u}function t(){a=new WeakMap}return{get:e,dispose:t}}function DA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new bt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return a[e.id]=t,t}}}function LA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let NA=0;function IA(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function UA(a){const e=new DA,t=LA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new ie);const s=new ie,o=new tn,u=new tn;function c(h){let p=0,_=0,g=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,R=0,L=0,C=0,b=0,N=0,I=0;h.sort(IA);for(let T=0,P=h.length;T<P;T++){const B=h[T],X=B.color,W=B.intensity,ne=B.distance;let te=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ja?te=B.shadow.map.texture:te=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=X.r*W,_+=X.g*W,g+=X.b*W;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(B.sh.coefficients[Q],W);I++}else if(B.isDirectionalLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,j=t.get(B);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.directionalShadow[y]=j,i.directionalShadowMap[y]=te,i.directionalShadowMatrix[y]=B.shadow.matrix,R++}i.directional[y]=Q,y++}else if(B.isSpotLight){const Q=e.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(X).multiplyScalar(W),Q.distance=ne,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,i.spot[M]=Q;const q=B.shadow;if(B.map&&(i.spotLightMap[b]=B.map,b++,q.updateMatrices(B),B.castShadow&&N++),i.spotLightMatrix[M]=q.matrix,B.castShadow){const j=t.get(B);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.spotShadow[M]=j,i.spotShadowMap[M]=te,C++}M++}else if(B.isRectAreaLight){const Q=e.get(B);Q.color.copy(X).multiplyScalar(W),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=Q,S++}else if(B.isPointLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const q=B.shadow,j=t.get(B);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,i.pointShadow[E]=j,i.pointShadowMap[E]=te,i.pointShadowMatrix[E]=B.shadow.matrix,L++}i.point[E]=Q,E++}else if(B.isHemisphereLight){const Q=e.get(B);Q.skyColor.copy(B.color).multiplyScalar(W),Q.groundColor.copy(B.groundColor).multiplyScalar(W),i.hemi[x]=Q,x++}}S>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const k=i.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==M||k.rectAreaLength!==S||k.hemiLength!==x||k.numDirectionalShadows!==R||k.numPointShadows!==L||k.numSpotShadows!==C||k.numSpotMaps!==b||k.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=x,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+b-N,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=I,k.directionalLength=y,k.pointLength=E,k.spotLength=M,k.rectAreaLength=S,k.hemiLength=x,k.numDirectionalShadows=R,k.numPointShadows=L,k.numSpotShadows=C,k.numSpotMaps=b,k.numLightProbes=I,i.version=NA++)}function d(h,p){let _=0,g=0,y=0,E=0,M=0;const S=p.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const L=h[x];if(L.isDirectionalLight){const C=i.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),_++}else if(L.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const C=i.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),u.identity(),o.copy(L.matrixWorld),o.premultiply(S),u.extractRotation(o),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),g++}else if(L.isHemisphereLight){const C=i.hemi[M];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),M++}}}return{setup:c,setupView:d,state:i}}function f0(a){const e=new UA(a),t=[],i=[];function s(p){h.camera=p,t.length=0,i.length=0}function o(p){t.push(p)}function u(p){i.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:u}}function FA(a){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let c;return u===void 0?(c=new f0(a),e.set(s,[c])):o>=u.length?(c=new f0(a),u.push(c)):c=u[o],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const OA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
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
}`,BA=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],zA=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],d0=new tn,el=new ie,Hd=new ie;function VA(a,e,t){let i=new xp;const s=new Rt,o=new Rt,u=new Jt,c=new JM,d=new e1,h={},p=t.maxTextureSize,_={[_s]:Jn,[Jn]:_s,[br]:br},g=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:OA,fragmentShader:kA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new ji;E.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new En(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let x=this.type;this.render=function(N,I,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;N.type===GS&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),N.type=nc);const T=a.getRenderTarget(),P=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),X=a.state;X.setBlending(Pr),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=x!==this.type;W&&I.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(te=>te.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,te=N.length;ne<te;ne++){const Q=N[ne],q=Q.shadow;if(q===void 0){at("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const j=q.getFrameExtents();if(s.multiply(j),o.copy(q.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/j.x),s.x=o.x*j.x,q.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/j.y),s.y=o.y*j.y,q.mapSize.y=o.y)),q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===nl){if(Q.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new or(s.x,s.y,{format:Ja,type:Lr,minFilter:In,magFilter:In,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new pl(s.x,s.y,ir),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=Nr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tn,q.map.depthTexture.magFilter=Tn}else{Q.isPointLight?(q.map=new rv(s.x),q.map.depthTexture=new ZM(s.x,ur)):(q.map=new or(s.x,s.y),q.map.depthTexture=new pl(s.x,s.y,ur)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=Nr;const ae=a.state.buffers.depth.getReversed();this.type===nc?(q.map.depthTexture.compareFunction=ae?mp:pp,q.map.depthTexture.minFilter=In,q.map.depthTexture.magFilter=In):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tn,q.map.depthTexture.magFilter=Tn)}q.camera.updateProjectionMatrix()}const fe=q.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<fe;ae++){if(q.map.isWebGLCubeRenderTarget)a.setRenderTarget(q.map,ae),a.clear();else{ae===0&&(a.setRenderTarget(q.map),a.clear());const O=q.getViewport(ae);u.set(o.x*O.x,o.y*O.y,o.x*O.z,o.y*O.w),X.viewport(u)}if(Q.isPointLight){const O=q.camera,se=q.matrix,Ae=Q.distance||O.far;Ae!==O.far&&(O.far=Ae,O.updateProjectionMatrix()),el.setFromMatrixPosition(Q.matrixWorld),O.position.copy(el),Hd.copy(O.position),Hd.add(BA[ae]),O.up.copy(zA[ae]),O.lookAt(Hd),O.updateMatrixWorld(),se.makeTranslation(-el.x,-el.y,-el.z),d0.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q._frustum.setFromProjectionMatrix(d0,O.coordinateSystem,O.reversedDepth)}else q.updateMatrices(Q);i=q.getFrustum(),C(I,k,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===nl&&R(q,k),q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,a.setRenderTarget(T,P,B)};function R(N,I){const k=e.update(M);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new or(s.x,s.y,{format:Ja,type:Lr})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(I,null,k,g,M,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(I,null,k,y,M,null)}function L(N,I,k,T){let P=null;const B=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)P=B;else if(P=k.isPointLight===!0?d:c,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=P.uuid,W=I.uuid;let ne=h[X];ne===void 0&&(ne={},h[X]=ne);let te=ne[W];te===void 0&&(te=P.clone(),ne[W]=te,I.addEventListener("dispose",b)),P=te}if(P.visible=I.visible,P.wireframe=I.wireframe,T===nl?P.side=I.shadowSide!==null?I.shadowSide:I.side:P.side=I.shadowSide!==null?I.shadowSide:_[I.side],P.alphaMap=I.alphaMap,P.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,P.map=I.map,P.clipShadows=I.clipShadows,P.clippingPlanes=I.clippingPlanes,P.clipIntersection=I.clipIntersection,P.displacementMap=I.displacementMap,P.displacementScale=I.displacementScale,P.displacementBias=I.displacementBias,P.wireframeLinewidth=I.wireframeLinewidth,P.linewidth=I.linewidth,k.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const X=a.properties.get(P);X.light=k}return P}function C(N,I,k,T,P){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&P===nl)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const W=e.update(N),ne=N.material;if(Array.isArray(ne)){const te=W.groups;for(let Q=0,q=te.length;Q<q;Q++){const j=te[Q],fe=ne[j.materialIndex];if(fe&&fe.visible){const ae=L(N,fe,T,P);N.onBeforeShadow(a,N,I,k,W,ae,j),a.renderBufferDirect(k,null,W,ae,N,j),N.onAfterShadow(a,N,I,k,W,ae,j)}}}else if(ne.visible){const te=L(N,ne,T,P);N.onBeforeShadow(a,N,I,k,W,te,null),a.renderBufferDirect(k,null,W,te,N,null),N.onAfterShadow(a,N,I,k,W,te,null)}}const X=N.children;for(let W=0,ne=X.length;W<ne;W++)C(X[W],I,k,T,P)}function b(N){N.target.removeEventListener("dispose",b);for(const k in h){const T=h[k],P=N.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}const HA={[Jd]:eh,[th]:rh,[nh]:sh,[Za]:ih,[eh]:Jd,[rh]:th,[sh]:nh,[ih]:Za};function GA(a,e){function t(){let H=!1;const De=new Jt;let Me=null;const Le=new Jt(0,0,0,0);return{setMask:function(ve){Me!==ve&&!H&&(a.colorMask(ve,ve,ve,ve),Me=ve)},setLocked:function(ve){H=ve},setClear:function(ve,pe,be,it,Nt){Nt===!0&&(ve*=it,pe*=it,be*=it),De.set(ve,pe,be,it),Le.equals(De)===!1&&(a.clearColor(ve,pe,be,it),Le.copy(De))},reset:function(){H=!1,Me=null,Le.set(-1,0,0,0)}}}function i(){let H=!1,De=!1,Me=null,Le=null,ve=null;return{setReversed:function(pe){if(De!==pe){const be=e.get("EXT_clip_control");pe?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),De=pe;const it=ve;ve=null,this.setClear(it)}},getReversed:function(){return De},setTest:function(pe){pe?de(a.DEPTH_TEST):Se(a.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!H&&(a.depthMask(pe),Me=pe)},setFunc:function(pe){if(De&&(pe=HA[pe]),Le!==pe){switch(pe){case Jd:a.depthFunc(a.NEVER);break;case eh:a.depthFunc(a.ALWAYS);break;case th:a.depthFunc(a.LESS);break;case Za:a.depthFunc(a.LEQUAL);break;case nh:a.depthFunc(a.EQUAL);break;case ih:a.depthFunc(a.GEQUAL);break;case rh:a.depthFunc(a.GREATER);break;case sh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Le=pe}},setLocked:function(pe){H=pe},setClear:function(pe){ve!==pe&&(De&&(pe=1-pe),a.clearDepth(pe),ve=pe)},reset:function(){H=!1,Me=null,Le=null,ve=null,De=!1}}}function s(){let H=!1,De=null,Me=null,Le=null,ve=null,pe=null,be=null,it=null,Nt=null;return{setTest:function(St){H||(St?de(a.STENCIL_TEST):Se(a.STENCIL_TEST))},setMask:function(St){De!==St&&!H&&(a.stencilMask(St),De=St)},setFunc:function(St,si,kn){(Me!==St||Le!==si||ve!==kn)&&(a.stencilFunc(St,si,kn),Me=St,Le=si,ve=kn)},setOp:function(St,si,kn){(pe!==St||be!==si||it!==kn)&&(a.stencilOp(St,si,kn),pe=St,be=si,it=kn)},setLocked:function(St){H=St},setClear:function(St){Nt!==St&&(a.clearStencil(St),Nt=St)},reset:function(){H=!1,De=null,Me=null,Le=null,ve=null,pe=null,be=null,it=null,Nt=null}}}const o=new t,u=new i,c=new s,d=new WeakMap,h=new WeakMap;let p={},_={},g=new WeakMap,y=[],E=null,M=!1,S=null,x=null,R=null,L=null,C=null,b=null,N=null,I=new bt(0,0,0),k=0,T=!1,P=null,B=null,X=null,W=null,ne=null;const te=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,q=0;const j=a.getParameter(a.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),Q=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Q=q>=2);let fe=null,ae={};const O=a.getParameter(a.SCISSOR_BOX),se=a.getParameter(a.VIEWPORT),Ae=new Jt().fromArray(O),Ue=new Jt().fromArray(se);function Be(H,De,Me,Le){const ve=new Uint8Array(4),pe=a.createTexture();a.bindTexture(H,pe),a.texParameteri(H,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(H,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let be=0;be<Me;be++)H===a.TEXTURE_3D||H===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Le,0,a.RGBA,a.UNSIGNED_BYTE,ve):a.texImage2D(De+be,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ve);return pe}const oe={};oe[a.TEXTURE_2D]=Be(a.TEXTURE_2D,a.TEXTURE_2D,1),oe[a.TEXTURE_CUBE_MAP]=Be(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[a.TEXTURE_2D_ARRAY]=Be(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),oe[a.TEXTURE_3D]=Be(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),de(a.DEPTH_TEST),u.setFunc(Za),lt(!1),Ht(_g),de(a.CULL_FACE),xt(Pr);function de(H){p[H]!==!0&&(a.enable(H),p[H]=!0)}function Se(H){p[H]!==!1&&(a.disable(H),p[H]=!1)}function ze(H,De){return _[H]!==De?(a.bindFramebuffer(H,De),_[H]=De,H===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=De),H===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=De),!0):!1}function Ie(H,De){let Me=y,Le=!1;if(H){Me=g.get(De),Me===void 0&&(Me=[],g.set(De,Me));const ve=H.textures;if(Me.length!==ve.length||Me[0]!==a.COLOR_ATTACHMENT0){for(let pe=0,be=ve.length;pe<be;pe++)Me[pe]=a.COLOR_ATTACHMENT0+pe;Me.length=ve.length,Le=!0}}else Me[0]!==a.BACK&&(Me[0]=a.BACK,Le=!0);Le&&a.drawBuffers(Me)}function pt(H){return E!==H?(a.useProgram(H),E=H,!0):!1}const nn={[$s]:a.FUNC_ADD,[XS]:a.FUNC_SUBTRACT,[jS]:a.FUNC_REVERSE_SUBTRACT};nn[YS]=a.MIN,nn[qS]=a.MAX;const dt={[$S]:a.ZERO,[KS]:a.ONE,[ZS]:a.SRC_COLOR,[Zd]:a.SRC_ALPHA,[iM]:a.SRC_ALPHA_SATURATE,[tM]:a.DST_COLOR,[JS]:a.DST_ALPHA,[QS]:a.ONE_MINUS_SRC_COLOR,[Qd]:a.ONE_MINUS_SRC_ALPHA,[nM]:a.ONE_MINUS_DST_COLOR,[eM]:a.ONE_MINUS_DST_ALPHA,[rM]:a.CONSTANT_COLOR,[sM]:a.ONE_MINUS_CONSTANT_COLOR,[aM]:a.CONSTANT_ALPHA,[oM]:a.ONE_MINUS_CONSTANT_ALPHA};function xt(H,De,Me,Le,ve,pe,be,it,Nt,St){if(H===Pr){M===!0&&(Se(a.BLEND),M=!1);return}if(M===!1&&(de(a.BLEND),M=!0),H!==WS){if(H!==S||St!==T){if((x!==$s||C!==$s)&&(a.blendEquation(a.FUNC_ADD),x=$s,C=$s),St)switch(H){case ja:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case gg:a.blendFunc(a.ONE,a.ONE);break;case vg:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case xg:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ct("WebGLState: Invalid blending: ",H);break}else switch(H){case ja:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case gg:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case vg:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xg:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",H);break}R=null,L=null,b=null,N=null,I.set(0,0,0),k=0,S=H,T=St}return}ve=ve||De,pe=pe||Me,be=be||Le,(De!==x||ve!==C)&&(a.blendEquationSeparate(nn[De],nn[ve]),x=De,C=ve),(Me!==R||Le!==L||pe!==b||be!==N)&&(a.blendFuncSeparate(dt[Me],dt[Le],dt[pe],dt[be]),R=Me,L=Le,b=pe,N=be),(it.equals(I)===!1||Nt!==k)&&(a.blendColor(it.r,it.g,it.b,Nt),I.copy(it),k=Nt),S=H,T=!1}function Dt(H,De){H.side===br?Se(a.CULL_FACE):de(a.CULL_FACE);let Me=H.side===Jn;De&&(Me=!Me),lt(Me),H.blending===ja&&H.transparent===!1?xt(Pr):xt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),o.setMask(H.colorWrite);const Le=H.stencilWrite;c.setTest(Le),Le&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(a.SAMPLE_ALPHA_TO_COVERAGE):Se(a.SAMPLE_ALPHA_TO_COVERAGE)}function lt(H){P!==H&&(H?a.frontFace(a.CW):a.frontFace(a.CCW),P=H)}function Ht(H){H!==VS?(de(a.CULL_FACE),H!==B&&(H===_g?a.cullFace(a.BACK):H===HS?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Se(a.CULL_FACE),B=H}function V(H){H!==X&&(Q&&a.lineWidth(H),X=H)}function Gt(H,De,Me){H?(de(a.POLYGON_OFFSET_FILL),(W!==De||ne!==Me)&&(a.polygonOffset(De,Me),W=De,ne=Me)):Se(a.POLYGON_OFFSET_FILL)}function mt(H){H?de(a.SCISSOR_TEST):Se(a.SCISSOR_TEST)}function yt(H){H===void 0&&(H=a.TEXTURE0+te-1),fe!==H&&(a.activeTexture(H),fe=H)}function je(H,De,Me){Me===void 0&&(fe===null?Me=a.TEXTURE0+te-1:Me=fe);let Le=ae[Me];Le===void 0&&(Le={type:void 0,texture:void 0},ae[Me]=Le),(Le.type!==H||Le.texture!==De)&&(fe!==Me&&(a.activeTexture(Me),fe=Me),a.bindTexture(H,De||oe[H]),Le.type=H,Le.texture=De)}function U(){const H=ae[fe];H!==void 0&&H.type!==void 0&&(a.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function w(){try{a.compressedTexImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Y(){try{a.compressedTexImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function he(){try{a.texSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function me(){try{a.texSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function ce(){try{a.compressedTexSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function $e(){try{a.compressedTexSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Te(){try{a.texStorage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Ve(){try{a.texStorage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function nt(){try{a.texImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function ye(){try{a.texImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Re(H){Ae.equals(H)===!1&&(a.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function We(H){Ue.equals(H)===!1&&(a.viewport(H.x,H.y,H.z,H.w),Ue.copy(H))}function Ye(H,De){let Me=h.get(De);Me===void 0&&(Me=new WeakMap,h.set(De,Me));let Le=Me.get(H);Le===void 0&&(Le=a.getUniformBlockIndex(De,H.name),Me.set(H,Le))}function Ce(H,De){const Le=h.get(De).get(H);d.get(De)!==Le&&(a.uniformBlockBinding(De,Le,H.__bindingPointIndex),d.set(De,Le))}function ot(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),p={},fe=null,ae={},_={},g=new WeakMap,y=[],E=null,M=!1,S=null,x=null,R=null,L=null,C=null,b=null,N=null,I=new bt(0,0,0),k=0,T=!1,P=null,B=null,X=null,W=null,ne=null,Ae.set(0,0,a.canvas.width,a.canvas.height),Ue.set(0,0,a.canvas.width,a.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:de,disable:Se,bindFramebuffer:ze,drawBuffers:Ie,useProgram:pt,setBlending:xt,setMaterial:Dt,setFlipSided:lt,setCullFace:Ht,setLineWidth:V,setPolygonOffset:Gt,setScissorTest:mt,activeTexture:yt,bindTexture:je,unbindTexture:U,compressedTexImage2D:w,compressedTexImage3D:Y,texImage2D:nt,texImage3D:ye,updateUBOMapping:Ye,uniformBlockBinding:Ce,texStorage2D:Te,texStorage3D:Ve,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:$e,scissor:Re,viewport:We,reset:ot}}function WA(a,e,t,i,s,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,p=new WeakMap;let _;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,w){return y?new OffscreenCanvas(U,w):hc("canvas")}function M(U,w,Y){let he=1;const me=je(U);if((me.width>Y||me.height>Y)&&(he=Y/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ce=Math.floor(he*me.width),$e=Math.floor(he*me.height);_===void 0&&(_=E(ce,$e));const Te=w?E(ce,$e):_;return Te.width=ce,Te.height=$e,Te.getContext("2d").drawImage(U,0,0,ce,$e),at("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+$e+")."),Te}else return"data"in U&&at("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){a.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(U,w,Y,he,me=!1){if(U!==null){if(a[U]!==void 0)return a[U];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ce=w;if(w===a.RED&&(Y===a.FLOAT&&(ce=a.R32F),Y===a.HALF_FLOAT&&(ce=a.R16F),Y===a.UNSIGNED_BYTE&&(ce=a.R8)),w===a.RED_INTEGER&&(Y===a.UNSIGNED_BYTE&&(ce=a.R8UI),Y===a.UNSIGNED_SHORT&&(ce=a.R16UI),Y===a.UNSIGNED_INT&&(ce=a.R32UI),Y===a.BYTE&&(ce=a.R8I),Y===a.SHORT&&(ce=a.R16I),Y===a.INT&&(ce=a.R32I)),w===a.RG&&(Y===a.FLOAT&&(ce=a.RG32F),Y===a.HALF_FLOAT&&(ce=a.RG16F),Y===a.UNSIGNED_BYTE&&(ce=a.RG8)),w===a.RG_INTEGER&&(Y===a.UNSIGNED_BYTE&&(ce=a.RG8UI),Y===a.UNSIGNED_SHORT&&(ce=a.RG16UI),Y===a.UNSIGNED_INT&&(ce=a.RG32UI),Y===a.BYTE&&(ce=a.RG8I),Y===a.SHORT&&(ce=a.RG16I),Y===a.INT&&(ce=a.RG32I)),w===a.RGB_INTEGER&&(Y===a.UNSIGNED_BYTE&&(ce=a.RGB8UI),Y===a.UNSIGNED_SHORT&&(ce=a.RGB16UI),Y===a.UNSIGNED_INT&&(ce=a.RGB32UI),Y===a.BYTE&&(ce=a.RGB8I),Y===a.SHORT&&(ce=a.RGB16I),Y===a.INT&&(ce=a.RGB32I)),w===a.RGBA_INTEGER&&(Y===a.UNSIGNED_BYTE&&(ce=a.RGBA8UI),Y===a.UNSIGNED_SHORT&&(ce=a.RGBA16UI),Y===a.UNSIGNED_INT&&(ce=a.RGBA32UI),Y===a.BYTE&&(ce=a.RGBA8I),Y===a.SHORT&&(ce=a.RGBA16I),Y===a.INT&&(ce=a.RGBA32I)),w===a.RGB&&(Y===a.UNSIGNED_INT_5_9_9_9_REV&&(ce=a.RGB9_E5),Y===a.UNSIGNED_INT_10F_11F_11F_REV&&(ce=a.R11F_G11F_B10F)),w===a.RGBA){const $e=me?fc:Tt.getTransfer(he);Y===a.FLOAT&&(ce=a.RGBA32F),Y===a.HALF_FLOAT&&(ce=a.RGBA16F),Y===a.UNSIGNED_BYTE&&(ce=$e===It?a.SRGB8_ALPHA8:a.RGBA8),Y===a.UNSIGNED_SHORT_4_4_4_4&&(ce=a.RGBA4),Y===a.UNSIGNED_SHORT_5_5_5_1&&(ce=a.RGB5_A1)}return(ce===a.R16F||ce===a.R32F||ce===a.RG16F||ce===a.RG32F||ce===a.RGBA16F||ce===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(U,w){let Y;return U?w===null||w===ur||w===dl?Y=a.DEPTH24_STENCIL8:w===ir?Y=a.DEPTH32F_STENCIL8:w===fl&&(Y=a.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ur||w===dl?Y=a.DEPTH_COMPONENT24:w===ir?Y=a.DEPTH_COMPONENT32F:w===fl&&(Y=a.DEPTH_COMPONENT16),Y}function b(U,w){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Tn&&U.minFilter!==In?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function N(U){const w=U.target;w.removeEventListener("dispose",N),k(w),w.isVideoTexture&&p.delete(w)}function I(U){const w=U.target;w.removeEventListener("dispose",I),P(w)}function k(U){const w=i.get(U);if(w.__webglInit===void 0)return;const Y=U.source,he=g.get(Y);if(he){const me=he[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&T(U),Object.keys(he).length===0&&g.delete(Y)}i.remove(U)}function T(U){const w=i.get(U);a.deleteTexture(w.__webglTexture);const Y=U.source,he=g.get(Y);delete he[w.__cacheKey],u.memory.textures--}function P(U){const w=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let me=0;me<w.__webglFramebuffer[he].length;me++)a.deleteFramebuffer(w.__webglFramebuffer[he][me]);else a.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)a.deleteFramebuffer(w.__webglFramebuffer[he]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=U.textures;for(let he=0,me=Y.length;he<me;he++){const ce=i.get(Y[he]);ce.__webglTexture&&(a.deleteTexture(ce.__webglTexture),u.memory.textures--),i.remove(Y[he])}i.remove(U)}let B=0;function X(){B=0}function W(){const U=B;return U>=s.maxTextures&&at("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),B+=1,U}function ne(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function te(U,w){const Y=i.get(U);if(U.isVideoTexture&&mt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Y.__version!==U.version){const he=U.image;if(he===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(Y,U,w);return}}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,Y.__webglTexture,a.TEXTURE0+w)}function Q(U,w){const Y=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){oe(Y,U,w);return}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,Y.__webglTexture,a.TEXTURE0+w)}function q(U,w){const Y=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){oe(Y,U,w);return}t.bindTexture(a.TEXTURE_3D,Y.__webglTexture,a.TEXTURE0+w)}function j(U,w){const Y=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Y.__version!==U.version){de(Y,U,w);return}t.bindTexture(a.TEXTURE_CUBE_MAP,Y.__webglTexture,a.TEXTURE0+w)}const fe={[lh]:a.REPEAT,[Rr]:a.CLAMP_TO_EDGE,[uh]:a.MIRRORED_REPEAT},ae={[Tn]:a.NEAREST,[cM]:a.NEAREST_MIPMAP_NEAREST,[Uu]:a.NEAREST_MIPMAP_LINEAR,[In]:a.LINEAR,[fd]:a.LINEAR_MIPMAP_NEAREST,[Zs]:a.LINEAR_MIPMAP_LINEAR},O={[hM]:a.NEVER,[vM]:a.ALWAYS,[pM]:a.LESS,[pp]:a.LEQUAL,[mM]:a.EQUAL,[mp]:a.GEQUAL,[_M]:a.GREATER,[gM]:a.NOTEQUAL};function se(U,w){if(w.type===ir&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===In||w.magFilter===fd||w.magFilter===Uu||w.magFilter===Zs||w.minFilter===In||w.minFilter===fd||w.minFilter===Uu||w.minFilter===Zs)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,fe[w.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,fe[w.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,fe[w.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,ae[w.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Tn||w.minFilter!==Uu&&w.minFilter!==Zs||w.type===ir&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ae(U,w){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",N));const he=w.source;let me=g.get(he);me===void 0&&(me={},g.set(he,me));const ce=ne(w);if(ce!==U.__cacheKey){me[ce]===void 0&&(me[ce]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),me[ce].usedTimes++;const $e=me[U.__cacheKey];$e!==void 0&&(me[U.__cacheKey].usedTimes--,$e.usedTimes===0&&T(w)),U.__cacheKey=ce,U.__webglTexture=me[ce].texture}return Y}function Ue(U,w,Y){return Math.floor(Math.floor(U/Y)/w)}function Be(U,w,Y,he){const ce=U.updateRanges;if(ce.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,w.width,w.height,Y,he,w.data);else{ce.sort((ye,Re)=>ye.start-Re.start);let $e=0;for(let ye=1;ye<ce.length;ye++){const Re=ce[$e],We=ce[ye],Ye=Re.start+Re.count,Ce=Ue(We.start,w.width,4),ot=Ue(Re.start,w.width,4);We.start<=Ye+1&&Ce===ot&&Ue(We.start+We.count-1,w.width,4)===Ce?Re.count=Math.max(Re.count,We.start+We.count-Re.start):(++$e,ce[$e]=We)}ce.length=$e+1;const Te=a.getParameter(a.UNPACK_ROW_LENGTH),Ve=a.getParameter(a.UNPACK_SKIP_PIXELS),nt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,w.width);for(let ye=0,Re=ce.length;ye<Re;ye++){const We=ce[ye],Ye=Math.floor(We.start/4),Ce=Math.ceil(We.count/4),ot=Ye%w.width,H=Math.floor(Ye/w.width),De=Ce,Me=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ot),a.pixelStorei(a.UNPACK_SKIP_ROWS,H),t.texSubImage2D(a.TEXTURE_2D,0,ot,H,De,Me,Y,he,w.data)}U.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Te),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ve),a.pixelStorei(a.UNPACK_SKIP_ROWS,nt)}}function oe(U,w,Y){let he=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=a.TEXTURE_3D);const me=Ae(U,w),ce=w.source;t.bindTexture(he,U.__webglTexture,a.TEXTURE0+Y);const $e=i.get(ce);if(ce.version!==$e.__version||me===!0){t.activeTexture(a.TEXTURE0+Y);const Te=Tt.getPrimaries(Tt.workingColorSpace),Ve=w.colorSpace===ls?null:Tt.getPrimaries(w.colorSpace),nt=w.colorSpace===ls||Te===Ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ye=M(w.image,!1,s.maxTextureSize);ye=yt(w,ye);const Re=o.convert(w.format,w.colorSpace),We=o.convert(w.type);let Ye=L(w.internalFormat,Re,We,w.colorSpace,w.isVideoTexture);se(he,w);let Ce;const ot=w.mipmaps,H=w.isVideoTexture!==!0,De=$e.__version===void 0||me===!0,Me=ce.dataReady,Le=b(w,ye);if(w.isDepthTexture)Ye=C(w.format===Qs,w.type),De&&(H?t.texStorage2D(a.TEXTURE_2D,1,Ye,ye.width,ye.height):t.texImage2D(a.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Re,We,null));else if(w.isDataTexture)if(ot.length>0){H&&De&&t.texStorage2D(a.TEXTURE_2D,Le,Ye,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Ce=ot[ve],H?Me&&t.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Re,We,Ce.data):t.texImage2D(a.TEXTURE_2D,ve,Ye,Ce.width,Ce.height,0,Re,We,Ce.data);w.generateMipmaps=!1}else H?(De&&t.texStorage2D(a.TEXTURE_2D,Le,Ye,ye.width,ye.height),Me&&Be(w,ye,Re,We)):t.texImage2D(a.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Re,We,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){H&&De&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ye,ot[0].width,ot[0].height,ye.depth);for(let ve=0,pe=ot.length;ve<pe;ve++)if(Ce=ot[ve],w.format!==Xi)if(Re!==null)if(H){if(Me)if(w.layerUpdates.size>0){const be=Gg(Ce.width,Ce.height,w.format,w.type);for(const it of w.layerUpdates){const Nt=Ce.data.subarray(it*be/Ce.data.BYTES_PER_ELEMENT,(it+1)*be/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,it,Ce.width,Ce.height,1,Re,Nt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,ye.depth,Re,Ce.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,Ye,Ce.width,Ce.height,ye.depth,0,Ce.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,ye.depth,Re,We,Ce.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ve,Ye,Ce.width,Ce.height,ye.depth,0,Re,We,Ce.data)}else{H&&De&&t.texStorage2D(a.TEXTURE_2D,Le,Ye,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Ce=ot[ve],w.format!==Xi?Re!==null?H?Me&&t.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(a.TEXTURE_2D,ve,Ye,Ce.width,Ce.height,0,Ce.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&t.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Re,We,Ce.data):t.texImage2D(a.TEXTURE_2D,ve,Ye,Ce.width,Ce.height,0,Re,We,Ce.data)}else if(w.isDataArrayTexture)if(H){if(De&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ye,ye.width,ye.height,ye.depth),Me)if(w.layerUpdates.size>0){const ve=Gg(ye.width,ye.height,w.format,w.type);for(const pe of w.layerUpdates){const be=ye.data.subarray(pe*ve/ye.data.BYTES_PER_ELEMENT,(pe+1)*ve/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,ye.width,ye.height,1,Re,We,be)}w.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Re,We,ye.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ye,ye.width,ye.height,ye.depth,0,Re,We,ye.data);else if(w.isData3DTexture)H?(De&&t.texStorage3D(a.TEXTURE_3D,Le,Ye,ye.width,ye.height,ye.depth),Me&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Re,We,ye.data)):t.texImage3D(a.TEXTURE_3D,0,Ye,ye.width,ye.height,ye.depth,0,Re,We,ye.data);else if(w.isFramebufferTexture){if(De)if(H)t.texStorage2D(a.TEXTURE_2D,Le,Ye,ye.width,ye.height);else{let ve=ye.width,pe=ye.height;for(let be=0;be<Le;be++)t.texImage2D(a.TEXTURE_2D,be,Ye,ve,pe,0,Re,We,null),ve>>=1,pe>>=1}}else if(ot.length>0){if(H&&De){const ve=je(ot[0]);t.texStorage2D(a.TEXTURE_2D,Le,Ye,ve.width,ve.height)}for(let ve=0,pe=ot.length;ve<pe;ve++)Ce=ot[ve],H?Me&&t.texSubImage2D(a.TEXTURE_2D,ve,0,0,Re,We,Ce):t.texImage2D(a.TEXTURE_2D,ve,Ye,Re,We,Ce);w.generateMipmaps=!1}else if(H){if(De){const ve=je(ye);t.texStorage2D(a.TEXTURE_2D,Le,Ye,ve.width,ve.height)}Me&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Re,We,ye)}else t.texImage2D(a.TEXTURE_2D,0,Ye,Re,We,ye);S(w)&&x(he),$e.__version=ce.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function de(U,w,Y){if(w.image.length!==6)return;const he=Ae(U,w),me=w.source;t.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+Y);const ce=i.get(me);if(me.version!==ce.__version||he===!0){t.activeTexture(a.TEXTURE0+Y);const $e=Tt.getPrimaries(Tt.workingColorSpace),Te=w.colorSpace===ls?null:Tt.getPrimaries(w.colorSpace),Ve=w.colorSpace===ls||$e===Te?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const nt=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let pe=0;pe<6;pe++)!nt&&!ye?Re[pe]=M(w.image[pe],!0,s.maxCubemapSize):Re[pe]=ye?w.image[pe].image:w.image[pe],Re[pe]=yt(w,Re[pe]);const We=Re[0],Ye=o.convert(w.format,w.colorSpace),Ce=o.convert(w.type),ot=L(w.internalFormat,Ye,Ce,w.colorSpace),H=w.isVideoTexture!==!0,De=ce.__version===void 0||he===!0,Me=me.dataReady;let Le=b(w,We);se(a.TEXTURE_CUBE_MAP,w);let ve;if(nt){H&&De&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ot,We.width,We.height);for(let pe=0;pe<6;pe++){ve=Re[pe].mipmaps;for(let be=0;be<ve.length;be++){const it=ve[be];w.format!==Xi?Ye!==null?H?Me&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,it.width,it.height,Ye,it.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ot,it.width,it.height,0,it.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,it.width,it.height,Ye,Ce,it.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ot,it.width,it.height,0,Ye,Ce,it.data)}}}else{if(ve=w.mipmaps,H&&De){ve.length>0&&Le++;const pe=je(Re[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ot,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ye){H?Me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Re[pe].width,Re[pe].height,Ye,Ce,Re[pe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,Re[pe].width,Re[pe].height,0,Ye,Ce,Re[pe].data);for(let be=0;be<ve.length;be++){const Nt=ve[be].image[pe].image;H?Me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,Nt.width,Nt.height,Ye,Ce,Nt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ot,Nt.width,Nt.height,0,Ye,Ce,Nt.data)}}else{H?Me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ye,Ce,Re[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,Ye,Ce,Re[pe]);for(let be=0;be<ve.length;be++){const it=ve[be];H?Me&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,Ye,Ce,it.image[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ot,Ye,Ce,it.image[pe])}}}S(w)&&x(a.TEXTURE_CUBE_MAP),ce.__version=me.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Se(U,w,Y,he,me,ce){const $e=o.convert(Y.format,Y.colorSpace),Te=o.convert(Y.type),Ve=L(Y.internalFormat,$e,Te,Y.colorSpace),nt=i.get(w),ye=i.get(Y);if(ye.__renderTarget=w,!nt.__hasExternalTextures){const Re=Math.max(1,w.width>>ce),We=Math.max(1,w.height>>ce);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?t.texImage3D(me,ce,Ve,Re,We,w.depth,0,$e,Te,null):t.texImage2D(me,ce,Ve,Re,We,0,$e,Te,null)}t.bindFramebuffer(a.FRAMEBUFFER,U),Gt(w)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,me,ye.__webglTexture,0,V(w)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,he,me,ye.__webglTexture,ce),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ze(U,w,Y){if(a.bindRenderbuffer(a.RENDERBUFFER,U),w.depthBuffer){const he=w.depthTexture,me=he&&he.isDepthTexture?he.type:null,ce=C(w.stencilBuffer,me),$e=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Gt(w)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,V(w),ce,w.width,w.height):Y?a.renderbufferStorageMultisample(a.RENDERBUFFER,V(w),ce,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,ce,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,$e,a.RENDERBUFFER,U)}else{const he=w.textures;for(let me=0;me<he.length;me++){const ce=he[me],$e=o.convert(ce.format,ce.colorSpace),Te=o.convert(ce.type),Ve=L(ce.internalFormat,$e,Te,ce.colorSpace);Gt(w)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,V(w),Ve,w.width,w.height):Y?a.renderbufferStorageMultisample(a.RENDERBUFFER,V(w),Ve,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,Ve,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ie(U,w,Y){const he=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(w.depthTexture);if(me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,w.depthTexture.addEventListener("dispose",N)),me.__webglTexture===void 0){me.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),se(a.TEXTURE_CUBE_MAP,w.depthTexture);const nt=o.convert(w.depthTexture.format),ye=o.convert(w.depthTexture.type);let Re;w.depthTexture.format===Nr?Re=a.DEPTH_COMPONENT24:w.depthTexture.format===Qs&&(Re=a.DEPTH24_STENCIL8);for(let We=0;We<6;We++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Re,w.width,w.height,0,nt,ye,null)}}else te(w.depthTexture,0);const ce=me.__webglTexture,$e=V(w),Te=he?a.TEXTURE_CUBE_MAP_POSITIVE_X+Y:a.TEXTURE_2D,Ve=w.depthTexture.format===Qs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(w.depthTexture.format===Nr)Gt(w)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ve,Te,ce,0,$e):a.framebufferTexture2D(a.FRAMEBUFFER,Ve,Te,ce,0);else if(w.depthTexture.format===Qs)Gt(w)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ve,Te,ce,0,$e):a.framebufferTexture2D(a.FRAMEBUFFER,Ve,Te,ce,0);else throw new Error("Unknown depthTexture format")}function pt(U){const w=i.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),w.__depthDisposeCallback=me}w.__boundDepthTexture=he}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let he=0;he<6;he++)Ie(w.__webglFramebuffer[he],U,he);else{const he=U.texture.mipmaps;he&&he.length>0?Ie(w.__webglFramebuffer[0],U,0):Ie(w.__webglFramebuffer,U,0)}else if(Y){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=a.createRenderbuffer(),ze(w.__webglDepthbuffer[he],U,!1);else{const me=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer[he];a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,ce)}}else{const he=U.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),ze(w.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,ce)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function nn(U,w,Y){const he=i.get(U);w!==void 0&&Se(he.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Y!==void 0&&pt(U)}function dt(U){const w=U.texture,Y=i.get(U),he=i.get(w);U.addEventListener("dispose",I);const me=U.textures,ce=U.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture()),he.__version=w.version,u.memory.textures++),ce){Y.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Te]=[];for(let Ve=0;Ve<w.mipmaps.length;Ve++)Y.__webglFramebuffer[Te][Ve]=a.createFramebuffer()}else Y.__webglFramebuffer[Te]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)Y.__webglFramebuffer[Te]=a.createFramebuffer()}else Y.__webglFramebuffer=a.createFramebuffer();if($e)for(let Te=0,Ve=me.length;Te<Ve;Te++){const nt=i.get(me[Te]);nt.__webglTexture===void 0&&(nt.__webglTexture=a.createTexture(),u.memory.textures++)}if(U.samples>0&&Gt(U)===!1){Y.__webglMultisampledFramebuffer=a.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const Ve=me[Te];Y.__webglColorRenderbuffer[Te]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Y.__webglColorRenderbuffer[Te]);const nt=o.convert(Ve.format,Ve.colorSpace),ye=o.convert(Ve.type),Re=L(Ve.internalFormat,nt,ye,Ve.colorSpace,U.isXRRenderTarget===!0),We=V(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,We,Re,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.RENDERBUFFER,Y.__webglColorRenderbuffer[Te])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=a.createRenderbuffer(),ze(Y.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ce){t.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),se(a.TEXTURE_CUBE_MAP,w);for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Se(Y.__webglFramebuffer[Te][Ve],U,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ve);else Se(Y.__webglFramebuffer[Te],U,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(w)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Te=0,Ve=me.length;Te<Ve;Te++){const nt=me[Te],ye=i.get(nt);let Re=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Re,ye.__webglTexture),se(Re,nt),Se(Y.__webglFramebuffer,U,nt,a.COLOR_ATTACHMENT0+Te,Re,0),S(nt)&&x(Re)}t.unbindTexture()}else{let Te=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),se(Te,w),w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Se(Y.__webglFramebuffer[Ve],U,w,a.COLOR_ATTACHMENT0,Te,Ve);else Se(Y.__webglFramebuffer,U,w,a.COLOR_ATTACHMENT0,Te,0);S(w)&&x(Te),t.unbindTexture()}U.depthBuffer&&pt(U)}function xt(U){const w=U.textures;for(let Y=0,he=w.length;Y<he;Y++){const me=w[Y];if(S(me)){const ce=R(U),$e=i.get(me).__webglTexture;t.bindTexture(ce,$e),x(ce),t.unbindTexture()}}}const Dt=[],lt=[];function Ht(U){if(U.samples>0){if(Gt(U)===!1){const w=U.textures,Y=U.width,he=U.height;let me=a.COLOR_BUFFER_BIT;const ce=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,$e=i.get(U),Te=w.length>1;if(Te)for(let nt=0;nt<w.length;nt++)t.bindFramebuffer(a.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,$e.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ve=U.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let nt=0;nt<w.length;nt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),Te){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const ye=i.get(w[nt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ye,0)}a.blitFramebuffer(0,0,Y,he,0,0,Y,he,me,a.NEAREST),d===!0&&(Dt.length=0,lt.length=0,Dt.push(a.COLOR_ATTACHMENT0+nt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Dt.push(ce),lt.push(ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,lt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Te)for(let nt=0;nt<w.length;nt++){t.bindFramebuffer(a.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const ye=i.get(w[nt]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,$e.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,ye,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const w=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function V(U){return Math.min(s.maxSamples,U.samples)}function Gt(U){const w=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function mt(U){const w=u.render.frame;p.get(U)!==w&&(p.set(U,w),U.update())}function yt(U,w){const Y=U.colorSpace,he=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==eo&&Y!==ls&&(Tt.getTransfer(Y)===It?(he!==Xi||me!==hi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",Y)),w}function je(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=te,this.setTexture2DArray=Q,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=nn,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XA(a,e){function t(i,s=ls){let o;const u=Tt.getTransfer(s);if(i===hi)return a.UNSIGNED_BYTE;if(i===up)return a.UNSIGNED_SHORT_4_4_4_4;if(i===cp)return a.UNSIGNED_SHORT_5_5_5_1;if(i===G0)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===W0)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===V0)return a.BYTE;if(i===H0)return a.SHORT;if(i===fl)return a.UNSIGNED_SHORT;if(i===lp)return a.INT;if(i===ur)return a.UNSIGNED_INT;if(i===ir)return a.FLOAT;if(i===Lr)return a.HALF_FLOAT;if(i===X0)return a.ALPHA;if(i===j0)return a.RGB;if(i===Xi)return a.RGBA;if(i===Nr)return a.DEPTH_COMPONENT;if(i===Qs)return a.DEPTH_STENCIL;if(i===Y0)return a.RED;if(i===fp)return a.RED_INTEGER;if(i===Ja)return a.RG;if(i===dp)return a.RG_INTEGER;if(i===hp)return a.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===ac)if(u===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ic)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ac)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ic)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ac)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ch||i===fh||i===dh||i===hh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ch)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ph||i===mh||i===_h||i===gh||i===vh||i===xh||i===yh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ph||i===mh)return u===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===_h)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===gh)return o.COMPRESSED_R11_EAC;if(i===vh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===xh)return o.COMPRESSED_RG11_EAC;if(i===yh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===bh||i===Rh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Sh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Th)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ah)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ch)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nh)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ih)return u===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uh||i===Fh||i===Oh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Uh)return u===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kh||i===Bh||i===zh||i===Vh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===kh)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dl?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
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

}`;class qA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new sv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fr({vertexShader:jA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new Al(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $A extends lo{constructor(e,t){super();const i=this;let s=null,o=1,u=null,c="local-floor",d=1,h=null,p=null,_=null,g=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",S=new qA,x={},R=t.getContextAttributes();let L=null,C=null;const b=[],N=[],I=new Rt;let k=null;const T=new Pi;T.viewport=new Jt;const P=new Pi;P.viewport=new Jt;const B=[T,P],X=new s1;let W=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let de=b[oe];return de===void 0&&(de=new Id,b[oe]=de),de.getTargetRaySpace()},this.getControllerGrip=function(oe){let de=b[oe];return de===void 0&&(de=new Id,b[oe]=de),de.getGripSpace()},this.getHand=function(oe){let de=b[oe];return de===void 0&&(de=new Id,b[oe]=de),de.getHandSpace()};function te(oe){const de=N.indexOf(oe.inputSource);if(de===-1)return;const Se=b[de];Se!==void 0&&(Se.update(oe.inputSource,oe.frame,h||u),Se.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Q(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",q);for(let oe=0;oe<b.length;oe++){const de=N[oe];de!==null&&(N[oe]=null,b[oe].disconnect(de))}W=null,ne=null,S.reset();for(const oe in x)delete x[oe];e.setRenderTarget(L),y=null,g=null,_=null,s=null,C=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){c=oe,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",q),R.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ze=null,Ie=null;R.depth&&(Ie=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=R.stencil?Qs:Nr,ze=R.stencil?dl:ur);const pt={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:o};_=this.getBinding(),g=_.createProjectionLayer(pt),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new or(g.textureWidth,g.textureHeight,{format:Xi,type:hi,depthTexture:new pl(g.textureWidth,g.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new or(y.framebufferWidth,y.framebufferHeight,{format:Xi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(oe){for(let de=0;de<oe.removed.length;de++){const Se=oe.removed[de],ze=N.indexOf(Se);ze>=0&&(N[ze]=null,b[ze].disconnect(Se))}for(let de=0;de<oe.added.length;de++){const Se=oe.added[de];let ze=N.indexOf(Se);if(ze===-1){for(let pt=0;pt<b.length;pt++)if(pt>=N.length){N.push(Se),ze=pt;break}else if(N[pt]===null){N[pt]=Se,ze=pt;break}if(ze===-1)break}const Ie=b[ze];Ie&&Ie.connect(Se)}}const j=new ie,fe=new ie;function ae(oe,de,Se){j.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const ze=j.distanceTo(fe),Ie=de.projectionMatrix.elements,pt=Se.projectionMatrix.elements,nn=Ie[14]/(Ie[10]-1),dt=Ie[14]/(Ie[10]+1),xt=(Ie[9]+1)/Ie[5],Dt=(Ie[9]-1)/Ie[5],lt=(Ie[8]-1)/Ie[0],Ht=(pt[8]+1)/pt[0],V=nn*lt,Gt=nn*Ht,mt=ze/(-lt+Ht),yt=mt*-lt;if(de.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(yt),oe.translateZ(mt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ie[10]===-1)oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=nn+mt,U=dt+mt,w=V-yt,Y=Gt+(ze-yt),he=xt*dt/U*je,me=Dt*dt/U*je;oe.projectionMatrix.makePerspective(w,Y,he,me,je,U),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function O(oe,de){de===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(de.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let de=oe.near,Se=oe.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),X.near=P.near=T.near=de,X.far=P.far=T.far=Se,(W!==X.near||ne!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),W=X.near,ne=X.far),X.layers.mask=oe.layers.mask|6,T.layers.mask=X.layers.mask&3,P.layers.mask=X.layers.mask&5;const ze=oe.parent,Ie=X.cameras;O(X,ze);for(let pt=0;pt<Ie.length;pt++)O(Ie[pt],ze);Ie.length===2?ae(X,T,P):X.projectionMatrix.copy(T.projectionMatrix),se(oe,X,ze)};function se(oe,de,Se){Se===null?oe.matrix.copy(de.matrixWorld):(oe.matrix.copy(Se.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(de.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Hh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(X)},this.getCameraTexture=function(oe){return x[oe]};let Ae=null;function Ue(oe,de){if(p=de.getViewerPose(h||u),E=de,p!==null){const Se=p.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let ze=!1;Se.length!==X.cameras.length&&(X.cameras.length=0,ze=!0);for(let dt=0;dt<Se.length;dt++){const xt=Se[dt];let Dt=null;if(y!==null)Dt=y.getViewport(xt);else{const Ht=_.getViewSubImage(g,xt);Dt=Ht.viewport,dt===0&&(e.setRenderTargetTextures(C,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(C))}let lt=B[dt];lt===void 0&&(lt=new Pi,lt.layers.enable(dt),lt.viewport=new Jt,B[dt]=lt),lt.matrix.fromArray(xt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(xt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),dt===0&&(X.matrix.copy(lt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ze===!0&&X.cameras.push(lt)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){_=i.getBinding();const dt=_.getDepthInformation(Se[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,s.renderState)}if(Ie&&Ie.includes("camera-access")&&M){e.state.unbindTexture(),_=i.getBinding();for(let dt=0;dt<Se.length;dt++){const xt=Se[dt].camera;if(xt){let Dt=x[xt];Dt||(Dt=new sv,x[xt]=Dt);const lt=_.getCameraImage(xt);Dt.sourceTexture=lt}}}}for(let Se=0;Se<b.length;Se++){const ze=N[Se],Ie=b[Se];ze!==null&&Ie!==void 0&&Ie.update(ze,de,h||u)}Ae&&Ae(oe,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),E=null}const Be=new ov;Be.setAnimationLoop(Ue),this.setAnimationLoop=function(oe){Ae=oe},this.dispose=function(){}}}const Ws=new cr,KA=new tn;function ZA(a,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,tv(a)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,R,L,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(S,x):x.isMeshToonMaterial?(o(S,x),_(S,x)):x.isMeshPhongMaterial?(o(S,x),p(S,x)):x.isMeshStandardMaterial?(o(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(o(S,x),E(S,x)):x.isMeshDepthMaterial?o(S,x):x.isMeshDistanceMaterial?(o(S,x),M(S,x)):x.isMeshNormalMaterial?o(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&c(S,x)):x.isPointsMaterial?d(S,x,R,L):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Jn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Jn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=e.get(x),L=R.envMap,C=R.envMapRotation;L&&(S.envMap.value=L,Ws.copy(C),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),S.envMapRotation.value.setFromMatrix4(KA.makeRotationFromEuler(Ws)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function c(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,R,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=L*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const R=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QA(a,e,t,i){let s={},o={},u=[];const c=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,L){const C=L.program;i.uniformBlockBinding(R,C)}function h(R,L){let C=s[R.id];C===void 0&&(E(R),C=p(R),s[R.id]=C,R.addEventListener("dispose",S));const b=L.program;i.updateUBOMapping(R,b);const N=e.render.frame;o[R.id]!==N&&(g(R),o[R.id]=N)}function p(R){const L=_();R.__bindingPointIndex=L;const C=a.createBuffer(),b=R.__size,N=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,b,N),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,C),C}function _(){for(let R=0;R<c;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const L=s[R.id],C=R.uniforms,b=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let N=0,I=C.length;N<I;N++){const k=Array.isArray(C[N])?C[N]:[C[N]];for(let T=0,P=k.length;T<P;T++){const B=k[T];if(y(B,N,T,b)===!0){const X=B.__offset,W=Array.isArray(B.value)?B.value:[B.value];let ne=0;for(let te=0;te<W.length;te++){const Q=W[te],q=M(Q);typeof Q=="number"||typeof Q=="boolean"?(B.__data[0]=Q,a.bufferSubData(a.UNIFORM_BUFFER,X+ne,B.__data)):Q.isMatrix3?(B.__data[0]=Q.elements[0],B.__data[1]=Q.elements[1],B.__data[2]=Q.elements[2],B.__data[3]=0,B.__data[4]=Q.elements[3],B.__data[5]=Q.elements[4],B.__data[6]=Q.elements[5],B.__data[7]=0,B.__data[8]=Q.elements[6],B.__data[9]=Q.elements[7],B.__data[10]=Q.elements[8],B.__data[11]=0):(Q.toArray(B.__data,ne),ne+=q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,X,B.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(R,L,C,b){const N=R.value,I=L+"_"+C;if(b[I]===void 0)return typeof N=="number"||typeof N=="boolean"?b[I]=N:b[I]=N.clone(),!0;{const k=b[I];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return b[I]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function E(R){const L=R.uniforms;let C=0;const b=16;for(let I=0,k=L.length;I<k;I++){const T=Array.isArray(L[I])?L[I]:[L[I]];for(let P=0,B=T.length;P<B;P++){const X=T[P],W=Array.isArray(X.value)?X.value:[X.value];for(let ne=0,te=W.length;ne<te;ne++){const Q=W[ne],q=M(Q),j=C%b,fe=j%q.boundary,ae=j+fe;C+=fe,ae!==0&&b-ae<q.storage&&(C+=b-ae),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=C,C+=q.storage}}}const N=C%b;return N>0&&(C+=b-N),R.__size=C,R.__cache={},this}function M(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",R),L}function S(R){const L=R.target;L.removeEventListener("dispose",S);const C=u.indexOf(L.__bindingPointIndex);u.splice(C,1),a.deleteBuffer(s[L.id]),delete s[L.id],delete o[L.id]}function x(){for(const R in s)a.deleteBuffer(s[R]);u=[],s={},o={}}return{bind:d,update:h,dispose:x}}const JA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function eC(){return Ji===null&&(Ji=new YM(JA,16,16,Ja,Lr),Ji.name="DFG_LUT",Ji.minFilter=In,Ji.magFilter=In,Ji.wrapS=Rr,Ji.wrapT=Rr,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class tC{constructor(e={}){const{canvas:t=xM(),context:i=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:y=hi}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=u;const M=y,S=new Set([hp,dp,fp]),x=new Set([hi,ur,fl,dl,up,cp]),R=new Uint32Array(4),L=new Int32Array(4);let C=null,b=null;const N=[],I=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1;this._outputColorSpace=Ri;let B=0,X=0,W=null,ne=-1,te=null;const Q=new Jt,q=new Jt;let j=null;const fe=new bt(0);let ae=0,O=t.width,se=t.height,Ae=1,Ue=null,Be=null;const oe=new Jt(0,0,O,se),de=new Jt(0,0,O,se);let Se=!1;const ze=new xp;let Ie=!1,pt=!1;const nn=new tn,dt=new ie,xt=new Jt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ht(){return W===null?Ae:1}let V=i;function Gt(D,$){return t.getContext(D,$)}try{const D={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ap}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",St,!1),V===null){const $="webgl2";if(V=Gt($,D),V===null)throw Gt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Ct("WebGLRenderer: "+D.message),D}let mt,yt,je,U,w,Y,he,me,ce,$e,Te,Ve,nt,ye,Re,We,Ye,Ce,ot,H,De,Me,Le,ve;function pe(){mt=new ew(V),mt.init(),Me=new XA(V,mt),yt=new XT(V,mt,e,Me),je=new GA(V,mt),yt.reversedDepthBuffer&&g&&je.buffers.depth.setReversed(!0),U=new iw(V),w=new bA,Y=new WA(V,mt,je,w,yt,Me,U),he=new YT(T),me=new JT(T),ce=new o1(V),Le=new GT(V,ce),$e=new tw(V,ce,U,Le),Te=new sw(V,$e,ce,U),ot=new rw(V,yt,Y),We=new jT(w),Ve=new CA(T,he,me,mt,yt,Le,We),nt=new ZA(T,w),ye=new PA,Re=new FA(mt),Ce=new HT(T,he,me,je,Te,E,d),Ye=new VA(T,Te,yt),ve=new QA(V,U,yt,je),H=new WT(V,mt,U),De=new nw(V,mt,U),U.programs=Ve.programs,T.capabilities=yt,T.extensions=mt,T.properties=w,T.renderLists=ye,T.shadowMap=Ye,T.state=je,T.info=U}pe(),M!==hi&&(k=new ow(M,t.width,t.height,s,o));const be=new $A(T,V);this.xr=be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=mt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=mt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(D){D!==void 0&&(Ae=D,this.setSize(O,se,!1))},this.getSize=function(D){return D.set(O,se)},this.setSize=function(D,$,ue=!0){if(be.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,se=$,t.width=Math.floor(D*Ae),t.height=Math.floor($*Ae),ue===!0&&(t.style.width=D+"px",t.style.height=$+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(O*Ae,se*Ae).floor()},this.setDrawingBufferSize=function(D,$,ue){O=D,se=$,Ae=ue,t.width=Math.floor(D*ue),t.height=Math.floor($*ue),this.setViewport(0,0,D,$)},this.setEffects=function(D){if(M===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let $=0;$<D.length;$++)if(D[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(Q)},this.getViewport=function(D){return D.copy(oe)},this.setViewport=function(D,$,ue,re){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,$,ue,re),je.viewport(Q.copy(oe).multiplyScalar(Ae).round())},this.getScissor=function(D){return D.copy(de)},this.setScissor=function(D,$,ue,re){D.isVector4?de.set(D.x,D.y,D.z,D.w):de.set(D,$,ue,re),je.scissor(q.copy(de).multiplyScalar(Ae).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(D){je.setScissorTest(Se=D)},this.setOpaqueSort=function(D){Ue=D},this.setTransparentSort=function(D){Be=D},this.getClearColor=function(D){return D.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,ue=!0){let re=0;if(D){let J=!1;if(W!==null){const Pe=W.texture.format;J=S.has(Pe)}if(J){const Pe=W.texture.type,Fe=x.has(Pe),we=Ce.getClearColor(),Ge=Ce.getClearAlpha(),ke=we.r,tt=we.g,Ze=we.b;Fe?(R[0]=ke,R[1]=tt,R[2]=Ze,R[3]=Ge,V.clearBufferuiv(V.COLOR,0,R)):(L[0]=ke,L[1]=tt,L[2]=Ze,L[3]=Ge,V.clearBufferiv(V.COLOR,0,L))}else re|=V.COLOR_BUFFER_BIT}$&&(re|=V.DEPTH_BUFFER_BIT),ue&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Ce.dispose(),ye.dispose(),Re.dispose(),w.dispose(),he.dispose(),me.dispose(),Te.dispose(),Le.dispose(),ve.dispose(),Ve.dispose(),be.dispose(),be.removeEventListener("sessionstart",Ms),be.removeEventListener("sessionend",Es),Ii.stop()};function it(D){D.preventDefault(),Tg("WebGLRenderer: Context Lost."),P=!0}function Nt(){Tg("WebGLRenderer: Context Restored."),P=!1;const D=U.autoReset,$=Ye.enabled,ue=Ye.autoUpdate,re=Ye.needsUpdate,J=Ye.type;pe(),U.autoReset=D,Ye.enabled=$,Ye.autoUpdate=ue,Ye.needsUpdate=re,Ye.type=J}function St(D){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function si(D){const $=D.target;$.removeEventListener("dispose",si),kn($)}function kn(D){co(D),w.remove(D)}function co(D){const $=w.get(D).programs;$!==void 0&&($.forEach(function(ue){Ve.releaseProgram(ue)}),D.isShaderMaterial&&Ve.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,ue,re,J,Pe){$===null&&($=Dt);const Fe=J.isMesh&&J.matrixWorld.determinant()<0,we=Dl(D,$,ue,re,J);je.setMaterial(re,Fe);let Ge=ue.index,ke=1;if(re.wireframe===!0){if(Ge=$e.getWireframeAttribute(ue),Ge===void 0)return;ke=2}const tt=ue.drawRange,Ze=ue.attributes.position;let ct=tt.start*ke,Mt=(tt.start+tt.count)*ke;Pe!==null&&(ct=Math.max(ct,Pe.start*ke),Mt=Math.min(Mt,(Pe.start+Pe.count)*ke)),Ge!==null?(ct=Math.max(ct,0),Mt=Math.min(Mt,Ge.count)):Ze!=null&&(ct=Math.max(ct,0),Mt=Math.min(Mt,Ze.count));const Ft=Mt-ct;if(Ft<0||Ft===1/0)return;Le.setup(J,re,we,ue,Ge);let Ut,wt=H;if(Ge!==null&&(Ut=ce.get(Ge),wt=De,wt.setIndex(Ut)),J.isMesh)re.wireframe===!0?(je.setLineWidth(re.wireframeLinewidth*Ht()),wt.setMode(V.LINES)):wt.setMode(V.TRIANGLES);else if(J.isLine){let Qe=re.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*Ht()),J.isLineSegments?wt.setMode(V.LINES):J.isLineLoop?wt.setMode(V.LINE_LOOP):wt.setMode(V.LINE_STRIP)}else J.isPoints?wt.setMode(V.POINTS):J.isSprite&&wt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)hl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))wt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qe=J._multiDrawStarts,Pt=J._multiDrawCounts,_t=J._multiDrawCount,An=Ge?ce.get(Ge).bytesPerElement:1,Yi=w.get(re).currentProgram.getUniforms();for(let un=0;un<_t;un++)Yi.setValue(V,"_gl_DrawID",un),wt.render(Qe[un]/An,Pt[un])}else if(J.isInstancedMesh)wt.renderInstances(ct,Ft,J.count);else if(ue.isInstancedBufferGeometry){const Qe=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Pt=Math.min(ue.instanceCount,Qe);wt.renderInstances(ct,Ft,Pt)}else wt.render(ct,Ft)};function Fr(D,$,ue){D.transparent===!0&&D.side===br&&D.forceSinglePass===!1?(D.side=Jn,D.needsUpdate=!0,Ts(D,$,ue),D.side=_s,D.needsUpdate=!0,Ts(D,$,ue),D.side=br):Ts(D,$,ue)}this.compile=function(D,$,ue=null){ue===null&&(ue=D),b=Re.get(ue),b.init($),I.push(b),ue.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),D!==ue&&D.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),b.setupLights();const re=new Set;return D.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){const we=Pe[Fe];Fr(we,ue,J),re.add(we)}else Fr(Pe,ue,J),re.add(Pe)}),b=I.pop(),re},this.compileAsync=function(D,$,ue=null){const re=this.compile(D,$,ue);return new Promise(J=>{function Pe(){if(re.forEach(function(Fe){w.get(Fe).currentProgram.isReady()&&re.delete(Fe)}),re.size===0){J(D);return}setTimeout(Pe,10)}mt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let fo=null;function Ss(D){fo&&fo(D)}function Ms(){Ii.stop()}function Es(){Ii.start()}const Ii=new ov;Ii.setAnimationLoop(Ss),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(D){fo=D,be.setAnimationLoop(D),D===null?Ii.stop():Ii.start()},be.addEventListener("sessionstart",Ms),be.addEventListener("sessionend",Es),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const ue=be.enabled===!0&&be.isPresenting===!0,re=k!==null&&(W===null||ue)&&k.begin(T,W);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera($),$=be.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,$,W),b=Re.get(D,I.length),b.init($),I.push(b),nn.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ze.setFromProjectionMatrix(nn,rr,$.reversedDepth),pt=this.localClippingEnabled,Ie=We.init(this.clippingPlanes,pt),C=ye.get(D,N.length),C.init(),N.push(C),be.enabled===!0&&be.isPresenting===!0){const Fe=T.xr.getDepthSensingMesh();Fe!==null&&ho(Fe,$,-1/0,T.sortObjects)}ho(D,$,0,T.sortObjects),C.finish(),T.sortObjects===!0&&C.sort(Ue,Be),lt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,lt&&Ce.addToRenderList(C,D),this.info.render.frame++,Ie===!0&&We.beginShadows();const J=b.state.shadowsArray;if(Ye.render(J,D,$),Ie===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&k.hasRenderPass())===!1){const Fe=C.opaque,we=C.transmissive;if(b.setupLights(),$.isArrayCamera){const Ge=$.cameras;if(we.length>0)for(let ke=0,tt=Ge.length;ke<tt;ke++){const Ze=Ge[ke];Rl(Fe,we,D,Ze)}lt&&Ce.render(D);for(let ke=0,tt=Ge.length;ke<tt;ke++){const Ze=Ge[ke];bl(C,D,Ze,Ze.viewport)}}else we.length>0&&Rl(Fe,we,D,$),lt&&Ce.render(D),bl(C,D,$)}W!==null&&X===0&&(Y.updateMultisampleRenderTarget(W),Y.updateRenderTargetMipmap(W)),re&&k.end(T),D.isScene===!0&&D.onAfterRender(T,D,$),Le.resetDefaultState(),ne=-1,te=null,I.pop(),I.length>0?(b=I[I.length-1],Ie===!0&&We.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,N.pop(),N.length>0?C=N[N.length-1]:C=null};function ho(D,$,ue,re){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)ue=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)b.pushLight(D),D.castShadow&&b.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ze.intersectsSprite(D)){re&&xt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(nn);const Fe=Te.update(D),we=D.material;we.visible&&C.push(D,Fe,we,ue,xt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ze.intersectsObject(D))){const Fe=Te.update(D),we=D.material;if(re&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),xt.copy(D.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),xt.copy(Fe.boundingSphere.center)),xt.applyMatrix4(D.matrixWorld).applyMatrix4(nn)),Array.isArray(we)){const Ge=Fe.groups;for(let ke=0,tt=Ge.length;ke<tt;ke++){const Ze=Ge[ke],ct=we[Ze.materialIndex];ct&&ct.visible&&C.push(D,Fe,ct,ue,xt.z,Ze)}}else we.visible&&C.push(D,Fe,we,ue,xt.z,null)}}const Pe=D.children;for(let Fe=0,we=Pe.length;Fe<we;Fe++)ho(Pe[Fe],$,ue,re)}function bl(D,$,ue,re){const{opaque:J,transmissive:Pe,transparent:Fe}=D;b.setupLightsView(ue),Ie===!0&&We.setGlobalState(T.clippingPlanes,ue),re&&je.viewport(Q.copy(re)),J.length>0&&yi(J,$,ue),Pe.length>0&&yi(Pe,$,ue),Fe.length>0&&yi(Fe,$,ue),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Rl(D,$,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[re.id]===void 0){const ct=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[re.id]=new or(1,1,{generateMipmaps:!0,type:ct?Lr:hi,minFilter:Zs,samples:yt.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Pe=b.state.transmissionRenderTarget[re.id],Fe=re.viewport||Q;Pe.setSize(Fe.z*T.transmissionResolutionScale,Fe.w*T.transmissionResolutionScale);const we=T.getRenderTarget(),Ge=T.getActiveCubeFace(),ke=T.getActiveMipmapLevel();T.setRenderTarget(Pe),T.getClearColor(fe),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),lt&&Ce.render(ue);const tt=T.toneMapping;T.toneMapping=ar;const Ze=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),b.setupLightsView(re),Ie===!0&&We.setGlobalState(T.clippingPlanes,re),yi(D,ue,re),Y.updateMultisampleRenderTarget(Pe),Y.updateRenderTargetMipmap(Pe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Mt=0,Ft=$.length;Mt<Ft;Mt++){const Ut=$[Mt],{object:wt,geometry:Qe,material:Pt,group:_t}=Ut;if(Pt.side===br&&wt.layers.test(re.layers)){const An=Pt.side;Pt.side=Jn,Pt.needsUpdate=!0,po(wt,ue,re,Qe,Pt,_t),Pt.side=An,Pt.needsUpdate=!0,ct=!0}}ct===!0&&(Y.updateMultisampleRenderTarget(Pe),Y.updateRenderTargetMipmap(Pe))}T.setRenderTarget(we,Ge,ke),T.setClearColor(fe,ae),Ze!==void 0&&(re.viewport=Ze),T.toneMapping=tt}function yi(D,$,ue){const re=$.isScene===!0?$.overrideMaterial:null;for(let J=0,Pe=D.length;J<Pe;J++){const Fe=D[J],{object:we,geometry:Ge,group:ke}=Fe;let tt=Fe.material;tt.allowOverride===!0&&re!==null&&(tt=re),we.layers.test(ue.layers)&&po(we,$,ue,Ge,tt,ke)}}function po(D,$,ue,re,J,Pe){D.onBeforeRender(T,$,ue,re,J,Pe),D.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(T,$,ue,re,D,Pe),J.transparent===!0&&J.side===br&&J.forceSinglePass===!1?(J.side=Jn,J.needsUpdate=!0,T.renderBufferDirect(ue,$,re,J,D,Pe),J.side=_s,J.needsUpdate=!0,T.renderBufferDirect(ue,$,re,J,D,Pe),J.side=br):T.renderBufferDirect(ue,$,re,J,D,Pe),D.onAfterRender(T,$,ue,re,J,Pe)}function Ts(D,$,ue){$.isScene!==!0&&($=Dt);const re=w.get(D),J=b.state.lights,Pe=b.state.shadowsArray,Fe=J.state.version,we=Ve.getParameters(D,J.state,Pe,$,ue),Ge=Ve.getProgramCacheKey(we);let ke=re.programs;re.environment=D.isMeshStandardMaterial?$.environment:null,re.fog=$.fog,re.envMap=(D.isMeshStandardMaterial?me:he).get(D.envMap||re.environment),re.envMapRotation=re.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,ke===void 0&&(D.addEventListener("dispose",si),ke=new Map,re.programs=ke);let tt=ke.get(Ge);if(tt!==void 0){if(re.currentProgram===tt&&re.lightsStateVersion===Fe)return mo(D,we),tt}else we.uniforms=Ve.getUniforms(D),D.onBeforeCompile(we,T),tt=Ve.acquireProgram(we,Ge),ke.set(Ge,tt),re.uniforms=we.uniforms;const Ze=re.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ze.clippingPlanes=We.uniform),mo(D,we),re.needsLights=Nl(D),re.lightsStateVersion=Fe,re.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMap.value=J.state.directionalShadowMap,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotShadowMap.value=J.state.spotShadowMap,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMap.value=J.state.pointShadowMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=tt,re.uniformsList=null,tt}function Pl(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=oc.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function mo(D,$){const ue=w.get(D);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Dl(D,$,ue,re,J){$.isScene!==!0&&($=Dt),Y.resetTextureUnits();const Pe=$.fog,Fe=re.isMeshStandardMaterial?$.environment:null,we=W===null?T.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:eo,Ge=(re.isMeshStandardMaterial?me:he).get(re.envMap||Fe),ke=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,tt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ze=!!ue.morphAttributes.position,ct=!!ue.morphAttributes.normal,Mt=!!ue.morphAttributes.color;let Ft=ar;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ft=T.toneMapping);const Ut=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,wt=Ut!==void 0?Ut.length:0,Qe=w.get(re),Pt=b.state.lights;if(Ie===!0&&(pt===!0||D!==te)){const pn=D===te&&re.id===ne;We.setState(re,D,pn)}let _t=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Pt.state.version||Qe.outputColorSpace!==we||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==Ge||re.fog===!0&&Qe.fog!==Pe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==We.numPlanes||Qe.numIntersection!==We.numIntersection)||Qe.vertexAlphas!==ke||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==ct||Qe.morphColors!==Mt||Qe.toneMapping!==Ft||Qe.morphTargetsCount!==wt)&&(_t=!0):(_t=!0,Qe.__version=re.version);let An=Qe.currentProgram;_t===!0&&(An=Ts(re,$,J));let Yi=!1,un=!1,ws=!1;const Lt=An.getUniforms(),st=Qe.uniforms;if(je.useProgram(An.program)&&(Yi=!0,un=!0,ws=!0),re.id!==ne&&(ne=re.id,un=!0),Yi||te!==D){je.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Lt.setValue(V,"projectionMatrix",D.projectionMatrix),Lt.setValue(V,"viewMatrix",D.matrixWorldInverse);const mn=Lt.map.cameraPosition;mn!==void 0&&mn.setValue(V,dt.setFromMatrixPosition(D.matrixWorld)),yt.logarithmicDepthBuffer&&Lt.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),te!==D&&(te=D,un=!0,ws=!0)}if(Qe.needsLights&&(Pt.state.directionalShadowMap.length>0&&Lt.setValue(V,"directionalShadowMap",Pt.state.directionalShadowMap,Y),Pt.state.spotShadowMap.length>0&&Lt.setValue(V,"spotShadowMap",Pt.state.spotShadowMap,Y),Pt.state.pointShadowMap.length>0&&Lt.setValue(V,"pointShadowMap",Pt.state.pointShadowMap,Y)),J.isSkinnedMesh){Lt.setOptional(V,J,"bindMatrix"),Lt.setOptional(V,J,"bindMatrixInverse");const pn=J.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Lt.setValue(V,"boneTexture",pn.boneTexture,Y))}J.isBatchedMesh&&(Lt.setOptional(V,J,"batchingTexture"),Lt.setValue(V,"batchingTexture",J._matricesTexture,Y),Lt.setOptional(V,J,"batchingIdTexture"),Lt.setValue(V,"batchingIdTexture",J._indirectTexture,Y),Lt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Lt.setValue(V,"batchingColorTexture",J._colorsTexture,Y));const Bn=ue.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&ot.update(J,ue,An),(un||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,Lt.setValue(V,"receiveShadow",J.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(st.envMap.value=Ge,st.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&$.environment!==null&&(st.envMapIntensity.value=$.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=eC()),un&&(Lt.setValue(V,"toneMappingExposure",T.toneMappingExposure),Qe.needsLights&&Ll(st,ws),Pe&&re.fog===!0&&nt.refreshFogUniforms(st,Pe),nt.refreshMaterialUniforms(st,re,Ae,se,b.state.transmissionRenderTarget[D.id]),oc.upload(V,Pl(Qe),st,Y)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(oc.upload(V,Pl(Qe),st,Y),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(V,"center",J.center),Lt.setValue(V,"modelViewMatrix",J.modelViewMatrix),Lt.setValue(V,"normalMatrix",J.normalMatrix),Lt.setValue(V,"modelMatrix",J.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const pn=re.uniformsGroups;for(let mn=0,aa=pn.length;mn<aa;mn++){const qi=pn[mn];ve.update(qi,An),ve.bind(qi,An)}}return An}function Ll(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function Nl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(D,$,ue){const re=w.get(D);re.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),w.get(D.texture).__webglTexture=$,w.get(D.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const ue=w.get(D);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0};const bc=V.createFramebuffer();this.setRenderTarget=function(D,$=0,ue=0){W=D,B=$,X=ue;let re=null,J=!1,Pe=!1;if(D){const we=w.get(D);if(we.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(V.FRAMEBUFFER,we.__webglFramebuffer),Q.copy(D.viewport),q.copy(D.scissor),j=D.scissorTest,je.viewport(Q),je.scissor(q),je.setScissorTest(j),ne=-1;return}else if(we.__webglFramebuffer===void 0)Y.setupRenderTarget(D);else if(we.__hasExternalTextures)Y.rebindTextures(D,w.get(D.texture).__webglTexture,w.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const tt=D.depthTexture;if(we.__boundDepthTexture!==tt){if(tt!==null&&w.has(tt)&&(D.width!==tt.image.width||D.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(D)}}const Ge=D.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Pe=!0);const ke=w.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ke[$])?re=ke[$][ue]:re=ke[$],J=!0):D.samples>0&&Y.useMultisampledRTT(D)===!1?re=w.get(D).__webglMultisampledFramebuffer:Array.isArray(ke)?re=ke[ue]:re=ke,Q.copy(D.viewport),q.copy(D.scissor),j=D.scissorTest}else Q.copy(oe).multiplyScalar(Ae).floor(),q.copy(de).multiplyScalar(Ae).floor(),j=Se;if(ue!==0&&(re=bc),je.bindFramebuffer(V.FRAMEBUFFER,re)&&je.drawBuffers(D,re),je.viewport(Q),je.scissor(q),je.setScissorTest(j),J){const we=w.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,we.__webglTexture,ue)}else if(Pe){const we=$;for(let Ge=0;Ge<D.textures.length;Ge++){const ke=w.get(D.textures[Ge]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ge,ke.__webglTexture,ue,we)}}else if(D!==null&&ue!==0){const we=w.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,we.__webglTexture,ue)}ne=-1},this.readRenderTargetPixels=function(D,$,ue,re,J,Pe,Fe,we=0){if(!(D&&D.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=w.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){je.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const ke=D.textures[we],tt=ke.format,Ze=ke.type;if(!yt.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ze)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-re&&ue>=0&&ue<=D.height-J&&(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+we),V.readPixels($,ue,re,J,Me.convert(tt),Me.convert(Ze),Pe))}finally{const ke=W!==null?w.get(W).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(D,$,ue,re,J,Pe,Fe,we=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=w.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge)if($>=0&&$<=D.width-re&&ue>=0&&ue<=D.height-J){je.bindFramebuffer(V.FRAMEBUFFER,Ge);const ke=D.textures[we],tt=ke.format,Ze=ke.type;if(!yt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ct),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+we),V.readPixels($,ue,re,J,Me.convert(tt),Me.convert(Ze),0);const Mt=W!==null?w.get(W).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,Mt);const Ft=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await yM(V,Ft,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ct),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe),V.deleteBuffer(ct),V.deleteSync(Ft),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,ue=0){const re=Math.pow(2,-ue),J=Math.floor(D.image.width*re),Pe=Math.floor(D.image.height*re),Fe=$!==null?$.x:0,we=$!==null?$.y:0;Y.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,ue,0,0,Fe,we,J,Pe),je.unbindTexture()};const Rc=V.createFramebuffer(),jt=V.createFramebuffer();this.copyTextureToTexture=function(D,$,ue=null,re=null,J=0,Pe=null){Pe===null&&(J!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=J,J=0):Pe=0);let Fe,we,Ge,ke,tt,Ze,ct,Mt,Ft;const Ut=D.isCompressedTexture?D.mipmaps[Pe]:D.image;if(ue!==null)Fe=ue.max.x-ue.min.x,we=ue.max.y-ue.min.y,Ge=ue.isBox3?ue.max.z-ue.min.z:1,ke=ue.min.x,tt=ue.min.y,Ze=ue.isBox3?ue.min.z:0;else{const Bn=Math.pow(2,-J);Fe=Math.floor(Ut.width*Bn),we=Math.floor(Ut.height*Bn),D.isDataArrayTexture?Ge=Ut.depth:D.isData3DTexture?Ge=Math.floor(Ut.depth*Bn):Ge=1,ke=0,tt=0,Ze=0}re!==null?(ct=re.x,Mt=re.y,Ft=re.z):(ct=0,Mt=0,Ft=0);const wt=Me.convert($.format),Qe=Me.convert($.type);let Pt;$.isData3DTexture?(Y.setTexture3D($,0),Pt=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Y.setTexture2DArray($,0),Pt=V.TEXTURE_2D_ARRAY):(Y.setTexture2D($,0),Pt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const _t=V.getParameter(V.UNPACK_ROW_LENGTH),An=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Yi=V.getParameter(V.UNPACK_SKIP_PIXELS),un=V.getParameter(V.UNPACK_SKIP_ROWS),ws=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ut.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ut.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ke),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);const Lt=D.isDataArrayTexture||D.isData3DTexture,st=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const Bn=w.get(D),pn=w.get($),mn=w.get(Bn.__renderTarget),aa=w.get(pn.__renderTarget);je.bindFramebuffer(V.READ_FRAMEBUFFER,mn.__webglFramebuffer),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let qi=0;qi<Ge;qi++)Lt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,w.get(D).__webglTexture,J,Ze+qi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,w.get($).__webglTexture,Pe,Ft+qi)),V.blitFramebuffer(ke,tt,Fe,we,ct,Mt,Fe,we,V.DEPTH_BUFFER_BIT,V.NEAREST);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||D.isRenderTargetTexture||w.has(D)){const Bn=w.get(D),pn=w.get($);je.bindFramebuffer(V.READ_FRAMEBUFFER,Rc),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,jt);for(let mn=0;mn<Ge;mn++)Lt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Bn.__webglTexture,J,Ze+mn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Bn.__webglTexture,J),st?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,Pe,Ft+mn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,Pe),J!==0?V.blitFramebuffer(ke,tt,Fe,we,ct,Mt,Fe,we,V.COLOR_BUFFER_BIT,V.NEAREST):st?V.copyTexSubImage3D(Pt,Pe,ct,Mt,Ft+mn,ke,tt,Fe,we):V.copyTexSubImage2D(Pt,Pe,ct,Mt,ke,tt,Fe,we);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else st?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(Pt,Pe,ct,Mt,Ft,Fe,we,Ge,wt,Qe,Ut.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(Pt,Pe,ct,Mt,Ft,Fe,we,Ge,wt,Ut.data):V.texSubImage3D(Pt,Pe,ct,Mt,Ft,Fe,we,Ge,wt,Qe,Ut):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pe,ct,Mt,Fe,we,wt,Qe,Ut.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pe,ct,Mt,Ut.width,Ut.height,wt,Ut.data):V.texSubImage2D(V.TEXTURE_2D,Pe,ct,Mt,Fe,we,wt,Qe,Ut);V.pixelStorei(V.UNPACK_ROW_LENGTH,_t),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,An),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yi),V.pixelStorei(V.UNPACK_SKIP_ROWS,un),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ws),Pe===0&&$.generateMipmaps&&V.generateMipmap(Pt),je.unbindTexture()},this.initRenderTarget=function(D){w.get(D).__webglFramebuffer===void 0&&Y.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Y.setTextureCube(D,0):D.isData3DTexture?Y.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Y.setTexture2DArray(D,0):Y.setTexture2D(D,0),je.unbindTexture()},this.resetState=function(){B=0,X=0,W=null,je.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function Ar(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function dv(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},no={duration:.5,overwrite:!1,delay:0},Mp,wn,Xt,Di=1e8,kt=1/Di,Xh=Math.PI*2,nC=Xh/4,iC=0,hv=Math.sqrt,rC=Math.cos,sC=Math.sin,yn=function(e){return typeof e=="string"},en=function(e){return typeof e=="function"},Ir=function(e){return typeof e=="number"},Ep=function(e){return typeof e>"u"},dr=function(e){return typeof e=="object"},ei=function(e){return e!==!1},Tp=function(){return typeof window<"u"},tc=function(e){return en(e)||yn(e)},pv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,aC=/random\([^)]+\)/g,oC=/,\s*/g,h0=/(?:-?\.?\d|\.)+/gi,mv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_v=/[+-]=-?[.\d]+/,lC=/[^,'"\[\]\s]+/gi,uC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Kt,er,jh,wp,vi={},pc={},gv,vv=function(e){return(pc=io(e,vi))&&ri},Ap=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ml=function(e,t){return!t&&console.warn(e)},xv=function(e,t){return e&&(vi[e]=t)&&pc&&(pc[e]=t)||vi},_l=function(){return 0},cC={suppressEvents:!0,isStart:!0,kill:!1},lc={suppressEvents:!0,kill:!1},fC={suppressEvents:!0},Cp={},ps=[],Yh={},yv,di={},Wd={},p0=30,uc=[],bp="",Rp=function(e){var t=e[0],i,s;if(dr(t)||en(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=uc.length;s--&&!uc[s].targetTest(t););i=uc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Wv(e[s],i)))||e.splice(s,1);return e},ea=function(e){return e._gsap||Rp(Li(e))[0]._gsap},Sv=function(e,t,i){return(i=e[t])&&en(i)?e[t]():Ep(i)&&e.getAttribute&&e.getAttribute(t)||i},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},qa=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},dC=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},mc=function(){var e=ps.length,t=ps.slice(0),i,s;for(Yh={},ps.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Pp=function(e){return!!(e._initted||e._startAt||e.add)},Mv=function(e,t,i,s){ps.length&&!wn&&mc(),e.render(t,i,!!(wn&&t<0&&Pp(e))),ps.length&&!wn&&mc()},Ev=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lC).length<2?t:yn(e)?e.trim():e},Tv=function(e){return e},xi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},hC=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},io=function(e,t){for(var i in t)e[i]=t[i];return e},m0=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=dr(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},_c=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},ll=function(e){var t=e.parent||Kt,i=e.keyframes?hC(Fn(e.keyframes)):xi;if(ei(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},pC=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},wv=function(e,t,i,s,o){var u=e[s],c;if(o)for(c=t[o];u&&u[o]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},wc=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var o=t._prev,u=t._next;o?o._next=u:e[i]===t&&(e[i]=u),u?u._prev=o:e[s]===t&&(e[s]=o),t._next=t._prev=t.parent=null},gs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ta=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},mC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qh=function(e,t,i,s){return e._startAt&&(wn?e._startAt.revert(lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},_C=function a(e){return!e||e._ts&&a(e.parent)},_0=function(e){return e._repeat?ro(e._tTime,e=e.duration()+e._rDelay)*e:0},ro=function(e,t){var i=Math.floor(e=$t(e/t));return e&&i===e?i-1:i},gc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ac=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||kt)||0))},Cc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=$t(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ac(e),i._dirty||ta(i,e)),e},Av=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=gc(e.rawTime(),t),(!t._dur||Cl(0,t.totalDuration(),i)-t._tTime>kt)&&t.render(i,!0)),ta(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-kt}},nr=function(e,t,i,s){return t.parent&&gs(t),t._start=$t((Ir(i)?i:i||e!==Kt?bi(e,i,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wv(e,t,"_first","_last",e._sort?"_start":0),$h(t)||(e._recent=t),s||Av(e,t),e._ts<0&&Cc(e,e._tTime),e},Cv=function(e,t){return(vi.ScrollTrigger||Ap("scrollTrigger",t))&&vi.ScrollTrigger.create(t,e)},bv=function(e,t,i,s,o){if(Lp(e,t,o),!e._initted)return 1;if(!i&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yv!==pi.frame)return ps.push(e),e._lazy=[o,s],1},gC=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},$h=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vC=function(e,t,i,s){var o=e.ratio,u=t<0||!t&&(!e._start&&gC(e)&&!(!e._initted&&$h(e))||(e._ts<0||e._dp._ts<0)&&!$h(e))?0:1,c=e._rDelay,d=0,h,p,_;if(c&&e._repeat&&(d=Cl(0,e._tDur,t),p=ro(d,c),e._yoyo&&p&1&&(u=1-u),p!==ro(e._tTime,c)&&(o=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==o||wn||s||e._zTime===kt||!t&&e._zTime){if(!e._initted&&bv(e,t,s,i,d))return;for(_=e._zTime,e._zTime=t||(i?kt:0),i||(i=t&&!_),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&qh(e,t,i,!0),e._onUpdate&&!i&&mi(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&gs(e,1),!i&&!wn&&(mi(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xC=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},so=function(e,t,i,s){var o=e._repeat,u=$t(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=o?o<0?1e10:$t(u*(o+1)+e._rDelay*o):u,c>0&&!s&&Cc(e,e._tTime=e._tDur*c),e.parent&&Ac(e),i||ta(e.parent,e),e},g0=function(e){return e instanceof Gn?ta(e):so(e,e._dur)},yC={_start:0,endTime:_l,totalDuration:_l},bi=function a(e,t,i){var s=e.labels,o=e._recent||yC,u=e.duration()>=Di?o.endTime(!1):e._dur,c,d,h;return yn(t)&&(isNaN(t)||t in s)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?o:i).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&i&&(d=d/100*(Fn(i)?i[0]:i).totalDuration()),c>1?a(e,t.substr(0,c-1),i)+d:u+d)):t==null?u:+t},ul=function(e,t,i){var s=Ir(t[1]),o=(s?2:1)+(e<2?0:1),u=t[o],c,d;if(s&&(u.duration=t[1]),u.parent=i,e){for(c=u,d=i;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=ei(d.vars.inherit)&&d.parent;u.immediateRender=ei(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[o-1]}return new ln(t[0],u,t[o+1])},ys=function(e,t){return e||e===0?t(e):t},Cl=function(e,t,i){return i<e?e:i>t?t:i},Nn=function(e,t){return!yn(e)||!(t=uC.exec(e))?"":t[1]},SC=function(e,t,i){return ys(i,function(s){return Cl(e,t,s)})},Kh=[].slice,Rv=function(e,t){return e&&dr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&dr(e[0]))&&!e.nodeType&&e!==er},MC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var o;return yn(s)&&!t||Rv(s,1)?(o=i).push.apply(o,Li(s)):i.push(s)})||i},Li=function(e,t,i){return Xt&&!t&&Xt.selector?Xt.selector(e):yn(e)&&!i&&(jh||!ao())?Kh.call((t||wp).querySelectorAll(e),0):Fn(e)?MC(e,i):Rv(e)?Kh.call(e,0):e?[e]:[]},Zh=function(e){return e=Li(e)[0]||ml("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Li(t,i.querySelectorAll?i:i===e?ml("Invalid scope")||wp.createElement("div"):e)}},Pv=function(e){return e.sort(function(){return .5-Math.random()})},Dv=function(e){if(en(e))return e;var t=dr(e)?e:{each:e},i=na(t.ease),s=t.from||0,o=parseFloat(t.base)||0,u={},c=s>0&&s<1,d=isNaN(s)||c,h=t.axis,p=s,_=s;return yn(s)?p=_={center:.5,edges:.5,end:1}[s]||0:!c&&d&&(p=s[0],_=s[1]),function(g,y,E){var M=(E||t).length,S=u[M],x,R,L,C,b,N,I,k,T;if(!S){if(T=t.grid==="auto"?0:(t.grid||[1,Di])[1],!T){for(I=-Di;I<(I=E[T++].getBoundingClientRect().left)&&T<M;);T<M&&T--}for(S=u[M]=[],x=d?Math.min(T,M)*p-.5:s%T,R=T===Di?0:d?M*_/T-.5:s/T|0,I=0,k=Di,N=0;N<M;N++)L=N%T-x,C=R-(N/T|0),S[N]=b=h?Math.abs(h==="y"?C:L):hv(L*L+C*C),b>I&&(I=b),b<k&&(k=b);s==="random"&&Pv(S),S.max=I-k,S.min=k,S.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(T>M?M-1:h?h==="y"?M/T:T:Math.max(T,M/T))||0)*(s==="edges"?-1:1),S.b=M<0?o-M:o,S.u=Nn(t.amount||t.each)||0,i=i&&M<0?Vv(i):i}return M=(S[g]-S.min)/S.max||0,$t(S.b+(i?i(M):M)*S.v)+S.u}},Qh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=$t(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(Ir(i)?0:Nn(i))}},Lv=function(e,t){var i=Fn(e),s,o;return!i&&dr(e)&&(s=i=e.radius||Di,e.values?(e=Li(e.values),(o=!Ir(e[0]))&&(s*=s)):e=Qh(e.increment)),ys(t,i?en(e)?function(u){return o=e(u),Math.abs(o-u)<=s?o:u}:function(u){for(var c=parseFloat(o?u.x:u),d=parseFloat(o?u.y:0),h=Di,p=0,_=e.length,g,y;_--;)o?(g=e[_].x-c,y=e[_].y-d,g=g*g+y*y):g=Math.abs(e[_]-c),g<h&&(h=g,p=_);return p=!s||h<=s?e[p]:u,o||p===u||Ir(u)?p:p+Nn(u)}:Qh(e))},Nv=function(e,t,i,s){return ys(Fn(e)?!t:i===!0?!!(i=0):!s,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},EC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(o,u){return u(o)},s)}},TC=function(e,t){return function(i){return e(parseFloat(i))+(t||Nn(i))}},wC=function(e,t,i){return Uv(e,t,0,1,i)},Iv=function(e,t,i){return ys(i,function(s){return e[~~t(s)]})},AC=function a(e,t,i){var s=t-e;return Fn(e)?Iv(e,a(0,e.length),t):ys(i,function(o){return(s+(o-e)%s)%s+e})},CC=function a(e,t,i){var s=t-e,o=s*2;return Fn(e)?Iv(e,a(0,e.length-1),t):ys(i,function(u){return u=(o+(u-e)%o)%o||0,e+(u>s?o-u:u)})},gl=function(e){return e.replace(aC,function(t){var i=t.indexOf("[")+1,s=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(oC);return Nv(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},Uv=function(e,t,i,s,o){var u=t-e,c=s-i;return ys(o,function(d){return i+((d-e)/u*c||0)})},bC=function a(e,t,i,s){var o=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!o){var u=yn(e),c={},d,h,p,_,g;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(p=[],_=e.length,g=_-2,h=1;h<_;h++)p.push(a(e[h-1],e[h]));_--,o=function(E){E*=_;var M=Math.min(g,~~E);return p[M](E-M)},i=t}else s||(e=io(Fn(e)?[]:{},e));if(!p){for(d in t)Dp.call(c,e,d,"get",t[d]);o=function(E){return Up(E,c)||(u?e.p:e)}}}return ys(i,o)},v0=function(e,t,i){var s=e.labels,o=Di,u,c,d;for(u in s)c=s[u]-t,c<0==!!i&&c&&o>(c=Math.abs(c))&&(d=u,o=c);return d},mi=function(e,t,i){var s=e.vars,o=s[t],u=Xt,c=e._ctx,d,h,p;if(o)return d=s[t+"Params"],h=s.callbackScope||e,i&&ps.length&&mc(),c&&(Xt=c),p=d?o.apply(h,d):o.call(h),Xt=u,p},sl=function(e){return gs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&mi(e,"onInterrupt"),e},Xa,Fv=[],Ov=function(e){if(e)if(e=!e.name&&e.default||e,Tp()||e.headless){var t=e.name,i=en(e),s=t&&!i&&e.init?function(){this._props=[]}:e,o={init:_l,render:Up,add:Dp,kill:WC,modifier:GC,rawVars:0},u={targetTest:0,get:0,getSetter:Ip,aliases:{},register:0};if(ao(),e!==s){if(di[t])return;xi(s,xi(_c(e,o),u)),io(s.prototype,io(o,_c(e,u))),di[s.prop=t]=s,e.targetTest&&(uc.push(s),Cp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xv(t,s),e.register&&e.register(ri,s,ni)}else Fv.push(e)},Ot=255,al={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},Xd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ot+.5|0},kv=function(e,t,i){var s=e?Ir(e)?[e>>16,e>>8&Ot,e&Ot]:0:al.black,o,u,c,d,h,p,_,g,y,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),al[e])s=al[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+o+o+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Ot,s&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(h0),!t)d=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(h+1):p+h-p*h,o=p*2-u,s.length>3&&(s[3]*=1),s[0]=Xd(d+1/3,o,u),s[1]=Xd(d,o,u),s[2]=Xd(d-1/3,o,u);else if(~e.indexOf("="))return s=e.match(mv),i&&s.length<4&&(s[3]=1),s}else s=e.match(h0)||al.transparent;s=s.map(Number)}return t&&!E&&(o=s[0]/Ot,u=s[1]/Ot,c=s[2]/Ot,_=Math.max(o,u,c),g=Math.min(o,u,c),p=(_+g)/2,_===g?d=h=0:(y=_-g,h=p>.5?y/(2-_-g):y/(_+g),d=_===o?(u-c)/y+(u<c?6:0):_===u?(c-o)/y+2:(o-u)/y+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},Bv=function(e){var t=[],i=[],s=-1;return e.split(ms).forEach(function(o){var u=o.match(Wa)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},x0=function(e,t,i){var s="",o=(e+s).match(ms),u=t?"hsla(":"rgba(",c=0,d,h,p,_;if(!o)return e;if(o=o.map(function(g){return(g=kv(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(p=Bv(e),d=i.c,d.join(s)!==p.c.join(s)))for(h=e.replace(ms,"1").split(Wa),_=h.length-1;c<_;c++)s+=h[c]+(~d.indexOf(c)?o.shift()||u+"0,0,0,0)":(p.length?p:o.length?o:i).shift());if(!h)for(h=e.split(ms),_=h.length-1;c<_;c++)s+=h[c]+o[c];return s+h[_]},ms=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in al)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),RC=/hsl[a]?\(/,zv=function(e){var t=e.join(" "),i;if(ms.lastIndex=0,ms.test(t))return i=RC.test(t),e[1]=x0(e[1],i),e[0]=x0(e[0],i,Bv(e[1])),!0},vl,pi=(function(){var a=Date.now,e=500,t=33,i=a(),s=i,o=1e3/240,u=o,c=[],d,h,p,_,g,y,E=function M(S){var x=a()-s,R=S===!0,L,C,b,N;if((x>e||x<0)&&(i+=x-t),s+=x,b=s-i,L=b-u,(L>0||R)&&(N=++_.frame,g=b-_.time*1e3,_.time=b=b/1e3,u+=L+(L>=o?4:o-L),C=1),R||(d=h(M)),C)for(y=0;y<c.length;y++)c[y](b,g,N,S)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return g/(1e3/(S||60))},wake:function(){gv&&(!jh&&Tp()&&(er=jh=window,wp=er.document||{},vi.gsap=ri,(er.gsapVersions||(er.gsapVersions=[])).push(ri.version),vv(pc||er.GreenSockGlobals||!er.gsap&&er||{}),Fv.forEach(Ov)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&_.sleep(),h=p||function(S){return setTimeout(S,u-_.time*1e3+1|0)},vl=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),vl=0,h=_l},lagSmoothing:function(S,x){e=S||1/0,t=Math.min(x||33,e)},fps:function(S){o=1e3/(S||240),u=_.time*1e3+o},add:function(S,x,R){var L=x?function(C,b,N,I){S(C,b,N,I),_.remove(L)}:S;return _.remove(S),c[R?"unshift":"push"](L),ao(),L},remove:function(S,x){~(x=c.indexOf(S))&&c.splice(x,1)&&y>=x&&y--},_listeners:c},_})(),ao=function(){return!vl&&pi.wake()},vt={},PC=/^[\d.\-M][\d.\-,\s]/,DC=/["']/g,LC=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],o=1,u=i.length,c,d,h;o<u;o++)d=i[o],c=o!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[s]=isNaN(h)?h.replace(DC,"").trim():+h,s=d.substr(c+1).trim();return t},NC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},IC=function(e){var t=(e+"").split("("),i=vt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[LC(t[1])]:NC(e).split(",").map(Ev)):vt._CE&&PC.test(e)?vt._CE("",e):i},Vv=function(e){return function(t){return 1-e(1-t)}},Hv=function a(e,t){for(var i=e._first,s;i;)i instanceof Gn?a(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?a(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},na=function(e,t){return e&&(en(e)?e:vt[e]||IC(e))||t},sa=function(e,t,i,s){i===void 0&&(i=function(d){return 1-t(1-d)}),s===void 0&&(s=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var o={easeIn:t,easeOut:i,easeInOut:s},u;return ti(e,function(c){vt[c]=vi[c]=o,vt[u=c.toLowerCase()]=i;for(var d in o)vt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=vt[c+"."+d]=o[d]}),o},Gv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},jd=function a(e,t,i){var s=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),u=o/Xh*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*sC((p-u)*o)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:Gv(c);return o=Xh/o,d.config=function(h,p){return a(e,h,p)},d},Yd=function a(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:Gv(i);return s.config=function(o){return a(e,o)},s};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;sa(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;sa("Elastic",jd("in"),jd("out"),jd());(function(a,e){var t=1/e,i=2*t,s=2.5*t,o=function(c){return c<t?a*c*c:c<i?a*Math.pow(c-1.5/e,2)+.75:c<s?a*(c-=2.25/e)*c+.9375:a*Math.pow(c-2.625/e,2)+.984375};sa("Bounce",function(u){return 1-o(1-u)},o)})(7.5625,2.75);sa("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});sa("Circ",function(a){return-(hv(1-a*a)-1)});sa("Sine",function(a){return a===1?1:-rC(a*nC)+1});sa("Back",Yd("in"),Yd("out"),Yd());vt.SteppedEase=vt.steps=vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),o=t?1:0,u=1-kt;return function(c){return((s*Cl(0,u,c)|0)+o)*i}}};no.ease=vt["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return bp+=a+","+a+"Params,"});var Wv=function(e,t){this.id=iC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Sv,this.set=t?t.getSetter:Ip},xl=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,so(this,+t.duration,1,1),this.data=t.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),vl||pi.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,so(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(ao(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Cc(this,i),!o._dp||o.parent||Av(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&nr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===kt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Mv(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_0(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_0(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,s):this._repeat?ro(this._tTime,o)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-kt?0:this._rts;if(this._rts===i)return this;var o=this.parent&&this._ts?gc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-kt?0:this._rts,this.totalTime(Cl(-Math.abs(this._delay),this.totalDuration(),o),s!==!1),Ac(this),mC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ao(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kt&&(this._tTime-=kt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=$t(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&nr(s,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ei(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gc(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=fC);var s=wn;return wn=i,Pp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),wn=s,this},e.globalTime=function(i){for(var s=this,o=arguments.length?i:s.rawTime();s;)o=s._start+o/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):o},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,g0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,g0(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(bi(this,i),ei(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,ei(s)),this._dur||(this._zTime=-kt),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-kt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-kt,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=s&&o<this.endTime(!0)-kt)},e.eventCallback=function(i,s,o){var u=this.vars;return arguments.length>1?(s?(u[i]=s,o&&(u[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this,o=s._prom;return new Promise(function(u){var c=en(i)?i:Tv,d=function(){var p=s.then;s.then=null,o&&o(),en(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),u(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},e.kill=function(){sl(this)},a})();xi(xl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-kt,_prom:0,_ps:!1,_rts:1});var Gn=(function(a){dv(e,a);function e(i,s){var o;return i===void 0&&(i={}),o=a.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=ei(i.sortChildren),Kt&&nr(i.parent||Kt,Ar(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&Cv(Ar(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(s,o,u){return ul(0,arguments,this),this},t.from=function(s,o,u){return ul(1,arguments,this),this},t.fromTo=function(s,o,u,c){return ul(2,arguments,this),this},t.set=function(s,o,u){return o.duration=0,o.parent=this,ll(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new ln(s,o,bi(this,u),1),this},t.call=function(s,o,u){return nr(this,ln.delayedCall(0,s,o),u)},t.staggerTo=function(s,o,u,c,d,h,p){return u.duration=o,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new ln(s,u,bi(this,d)),this},t.staggerFrom=function(s,o,u,c,d,h,p){return u.runBackwards=1,ll(u).immediateRender=ei(u.immediateRender),this.staggerTo(s,o,u,c,d,h,p)},t.staggerFromTo=function(s,o,u,c,d,h,p,_){return c.startAt=u,ll(c).immediateRender=ei(c.immediateRender),this.staggerTo(s,o,c,d,h,p,_)},t.render=function(s,o,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:$t(s),_=this._zTime<0!=s<0&&(this._initted||!h),g,y,E,M,S,x,R,L,C,b,N,I;if(this!==Kt&&p>d&&s>=0&&(p=d),p!==this._tTime||u||_){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),g=p,C=this._start,L=this._ts,x=!L,_&&(h||(c=this._zTime),(s||!o)&&(this._zTime=s)),this._repeat){if(N=this._yoyo,S=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,o,u);if(g=$t(p%S),p===d?(M=this._repeat,g=h):(b=$t(p/S),M=~~b,M&&M===b&&(g=h,M--),g>h&&(g=h)),b=ro(this._tTime,S),!c&&this._tTime&&b!==M&&this._tTime-b*S-this._dur<=0&&(b=M),N&&M&1&&(g=h-g,I=1),M!==b&&!this._lock){var k=N&&b&1,T=k===(N&&M&1);if(M<b&&(k=!k),c=k?0:p%h?h:p,this._lock=1,this.render(c||(I?0:$t(M*S)),o,!h)._lock=0,this._tTime=p,!o&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1,b=M),c&&c!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,T&&(this._lock=2,c=k?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Hv(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=xC(this,$t(c),$t(g)),R&&(p-=g-(g=R._start))),this._tTime=p,this._time=g,this._act=!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&h&&!o&&!b&&(mi(this,"onStart"),this._tTime!==p))return this;if(g>=c&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||g>=y._start)&&y._ts&&R!==y){if(y.parent!==this)return this.render(s,o,u);if(y.render(y._ts>0?(g-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(g-y._start)*y._ts,o,u),g!==this._time||!this._ts&&!x){R=0,E&&(p+=this._zTime=-kt);break}}y=E}else{y=this._last;for(var P=s<0?s:g;y;){if(E=y._prev,(y._act||P<=y._end)&&y._ts&&R!==y){if(y.parent!==this)return this.render(s,o,u);if(y.render(y._ts>0?(P-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(P-y._start)*y._ts,o,u||wn&&Pp(y)),g!==this._time||!this._ts&&!x){R=0,E&&(p+=this._zTime=P?-kt:kt);break}}y=E}}if(R&&!o&&(this.pause(),R.render(g>=c?0:-kt)._zTime=g>=c?1:-1,this._ts))return this._start=C,Ac(this),this.render(s,o,u);this._onUpdate&&!o&&mi(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(C===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&gs(this,1),!o&&!(s<0&&!c)&&(p||c||!d)&&(mi(this,p===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,o){var u=this;if(Ir(o)||(o=bi(this,o,s)),!(s instanceof xl)){if(Fn(s))return s.forEach(function(c){return u.add(c,o)}),this;if(yn(s))return this.addLabel(s,o);if(en(s))s=ln.delayedCall(0,s);else return this}return this!==s?nr(this,s,o):this},t.getChildren=function(s,o,u,c){s===void 0&&(s=!0),o===void 0&&(o=!0),u===void 0&&(u=!0),c===void 0&&(c=-Di);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof ln?o&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,o,u)))),h=h._next;return d},t.getById=function(s){for(var o=this.getChildren(1,1,1),u=o.length;u--;)if(o[u].vars.id===s)return o[u]},t.remove=function(s){return yn(s)?this.removeLabel(s):en(s)?this.killTweensOf(s):(s.parent===this&&wc(this,s),s===this._recent&&(this._recent=this._last),ta(this))},t.totalTime=function(s,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(pi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),a.prototype.totalTime.call(this,s,o),this._forcing=0,this):this._tTime},t.addLabel=function(s,o){return this.labels[s]=bi(this,o),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,o,u){var c=ln.delayedCall(0,o||_l,u);return c.data="isPause",this._hasPause=1,nr(this,c,bi(this,s))},t.removePause=function(s){var o=this._first;for(s=bi(this,s);o;)o._start===s&&o.data==="isPause"&&gs(o),o=o._next},t.killTweensOf=function(s,o,u){for(var c=this.getTweensOf(s,u),d=c.length;d--;)cs!==c[d]&&c[d].kill(s,o);return this},t.getTweensOf=function(s,o){for(var u=[],c=Li(s),d=this._first,h=Ir(o),p;d;)d instanceof ln?dC(d._targets,c)&&(h?(!cs||d._initted&&d._ts)&&d.globalTime(0)<=o&&d.globalTime(d.totalDuration())>o:!o||d.isActive())&&u.push(d):(p=d.getTweensOf(c,o)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(s,o){o=o||{};var u=this,c=bi(u,s),d=o,h=d.startAt,p=d.onStart,_=d.onStartParams,g=d.immediateRender,y,E=ln.to(u,xi({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||kt,onStart:function(){if(u.pause(),!y){var S=o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==S&&so(E,S,0,1).render(E._time,!0,!0),y=1}p&&p.apply(E,_||[])}},o));return g?E.render(0):E},t.tweenFromTo=function(s,o,u){return this.tweenTo(o,xi({startAt:{time:bi(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),v0(this,bi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),v0(this,bi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+kt)},t.shiftChildren=function(s,o,u){u===void 0&&(u=0);var c=this._first,d=this.labels,h;for(s=$t(s);c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(o)for(h in d)d[h]>=u&&(d[h]+=s);return ta(this)},t.invalidate=function(s){var o=this._first;for(this._lock=0;o;)o.invalidate(s),o=o._next;return a.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var o=this._first,u;o;)u=o._next,this.remove(o),o=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ta(this)},t.totalDuration=function(s){var o=0,u=this,c=u._last,d=Di,h,p,_;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(_=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,nr(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(o-=p,(!_&&!u._dp||_&&_.smoothChildTiming)&&(u._start+=$t(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>o&&c._ts&&(o=c._end),c=h;so(u,u===Kt&&u._time>o?u._time:o,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(Kt._ts&&(Mv(Kt,gc(s,Kt)),yv=pi.frame),pi.frame>=p0){p0+=gi.autoSleep||120;var o=Kt._first;if((!o||!o._ts)&&gi.autoSleep&&pi._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||pi.sleep()}}},e})(xl);xi(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var UC=function(e,t,i,s,o,u,c){var d=new ni(this._pt,e,t,0,1,Kv,null,o),h=0,p=0,_,g,y,E,M,S,x,R;for(d.b=i,d.e=s,i+="",s+="",(x=~s.indexOf("random("))&&(s=gl(s)),u&&(R=[i,s],u(R,e,t),i=R[0],s=R[1]),g=i.match(Gd)||[];_=Gd.exec(s);)E=_[0],M=s.substring(h,_.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==g[p++]&&(S=parseFloat(g[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:S,c:E.charAt(1)==="="?qa(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},h=Gd.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=c,(_v.test(s)||x)&&(d.e=0),this._pt=d,d},Dp=function(e,t,i,s,o,u,c,d,h,p){en(s)&&(s=s(o||0,e,u));var _=e[t],g=i!=="get"?i:en(_)?h?e[t.indexOf("set")||!en(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,y=en(_)?h?zC:qv:Np,E;if(yn(s)&&(~s.indexOf("random(")&&(s=gl(s)),s.charAt(1)==="="&&(E=qa(g,s)+(Nn(g)||0),(E||E===0)&&(s=E))),!p||g!==s||Jh)return!isNaN(g*s)&&s!==""?(E=new ni(this._pt,e,t,+g||0,s-(g||0),typeof _=="boolean"?HC:$v,0,y),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!_&&!(t in e)&&Ap(t,s),UC.call(this,e,t,g,s,y,d||gi.stringFilter,h))},FC=function(e,t,i,s,o){if(en(e)&&(e=cl(e,o,t,i,s)),!dr(e)||e.style&&e.nodeType||Fn(e)||pv(e))return yn(e)?cl(e,o,t,i,s):e;var u={},c;for(c in e)u[c]=cl(e[c],o,t,i,s);return u},Xv=function(e,t,i,s,o,u){var c,d,h,p;if(di[e]&&(c=new di[e]).init(o,c.rawVars?t[e]:FC(t[e],s,o,u,i),i,s,u)!==!1&&(i._pt=d=new ni(i._pt,o,e,0,1,c.render,c,0,c.priority),i!==Xa))for(h=i._ptLookup[i._targets.indexOf(o)],p=c._props.length;p--;)h[c._props[p]]=d;return c},cs,Jh,Lp=function a(e,t,i){var s=e.vars,o=s.ease,u=s.startAt,c=s.immediateRender,d=s.lazy,h=s.onUpdate,p=s.runBackwards,_=s.yoyoEase,g=s.keyframes,y=s.autoRevert,E=e._dur,M=e._startAt,S=e._targets,x=e.parent,R=x&&x.data==="nested"?x.vars.targets:S,L=e._overwrite==="auto"&&!Mp,C=e.timeline,b,N,I,k,T,P,B,X,W,ne,te,Q,q;if(C&&(!g||!o)&&(o="none"),e._ease=na(o,no.ease),e._yEase=_?Vv(na(_===!0?o:_,no.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!C&&!!s.runBackwards,!C||g&&!s.stagger){if(X=S[0]?ea(S[0]).harness:0,Q=X&&s[X.prop],b=_c(s,Cp),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!y?M.render(-1,!0):M.revert(p&&E?lc:cC),M._lazy=0),u){if(gs(e._startAt=ln.set(S,xi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ei(d),startAt:null,delay:0,onUpdate:h&&function(){return mi(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!c&&!y)&&e._startAt.revert(lc),c&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),I=xi({overwrite:!1,data:"isFromStart",lazy:c&&!M&&ei(d),immediateRender:c,stagger:0,parent:x},b),Q&&(I[X.prop]=Q),gs(e._startAt=ln.set(S,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(lc):e._startAt.render(-1,!0)),e._zTime=t,!c)a(e._startAt,kt,kt);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&ei(d)||d&&!E,N=0;N<S.length;N++){if(T=S[N],B=T._gsap||Rp(S)[N]._gsap,e._ptLookup[N]=ne={},Yh[B.id]&&ps.length&&mc(),te=R===S?N:R.indexOf(T),X&&(W=new X).init(T,Q||b,e,te,R)!==!1&&(e._pt=k=new ni(e._pt,T,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(j){ne[j]=k}),W.priority&&(P=1)),!X||Q)for(I in b)di[I]&&(W=Xv(I,b,e,te,T,R))?W.priority&&(P=1):ne[I]=k=Dp.call(e,T,I,"get",b[I],te,R,0,s.stringFilter);e._op&&e._op[N]&&e.kill(T,e._op[N]),L&&e._pt&&(cs=e,Kt.killTweensOf(T,ne,e.globalTime(t)),q=!e.parent,cs=0),e._pt&&d&&(Yh[B.id]=1)}P&&Zv(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!q,g&&t<=0&&C.render(Di,!0,!0)},OC=function(e,t,i,s,o,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,_,g,y;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,y=e._targets.length;y--;){if(p=g[y][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Jh=1,e.vars[t]="+=0",Lp(e,c),Jh=0,d?ml(t+" not eligible for reset"):1;h.push(p)}for(y=h.length;y--;)_=h[y],p=_._pt||_,p.s=(s||s===0)&&!o?s:p.s+(s||0)+u*p.c,p.c=i-p.s,_.e&&(_.e=sn(i)+Nn(_.e)),_.b&&(_.b=p.s+Nn(_.b))},kC=function(e,t){var i=e[0]?ea(e[0]).harness:0,s=i&&i.aliases,o,u,c,d;if(!s)return t;o=io({},t);for(u in s)if(u in o)for(d=s[u].split(","),c=d.length;c--;)o[d[c]]=o[u];return o},BC=function(e,t,i,s){var o=t.ease||s||"power1.inOut",u,c;if(Fn(t))c=i[e]||(i[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:o})});else for(u in t)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:o})},cl=function(e,t,i,s,o){return en(e)?e.call(t,i,s,o):yn(e)&&~e.indexOf("random(")?gl(e):e},jv=bp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yv={};ti(jv+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Yv[a]=1});var ln=(function(a){dv(e,a);function e(i,s,o,u){var c;typeof s=="number"&&(o.duration=s,s=o,o=null),c=a.call(this,u?s:ll(s))||this;var d=c.vars,h=d.duration,p=d.delay,_=d.immediateRender,g=d.stagger,y=d.overwrite,E=d.keyframes,M=d.defaults,S=d.scrollTrigger,x=d.yoyoEase,R=s.parent||Kt,L=(Fn(i)||pv(i)?Ir(i[0]):"length"in s)?[i]:Li(i),C,b,N,I,k,T,P,B;if(c._targets=L.length?Rp(L):ml("GSAP target "+i+" not found. https://gsap.com",!gi.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=y,E||g||tc(h)||tc(p)){if(s=c.vars,C=c.timeline=new Gn({data:"nested",defaults:M||{},targets:R&&R.data==="nested"?R.vars.targets:L}),C.kill(),C.parent=C._dp=Ar(c),C._start=0,g||tc(h)||tc(p)){if(I=L.length,P=g&&Dv(g),dr(g))for(k in g)~jv.indexOf(k)&&(B||(B={}),B[k]=g[k]);for(b=0;b<I;b++)N=_c(s,Yv),N.stagger=0,x&&(N.yoyoEase=x),B&&io(N,B),T=L[b],N.duration=+cl(h,Ar(c),b,T,L),N.delay=(+cl(p,Ar(c),b,T,L)||0)-c._delay,!g&&I===1&&N.delay&&(c._delay=p=N.delay,c._start+=p,N.delay=0),C.to(T,N,P?P(b,T,L):0),C._ease=vt.none;C.duration()?h=p=0:c.timeline=0}else if(E){ll(xi(C.vars.defaults,{ease:"none"})),C._ease=na(E.ease||s.ease||"none");var X=0,W,ne,te;if(Fn(E))E.forEach(function(Q){return C.to(L,Q,">")}),C.duration();else{N={};for(k in E)k==="ease"||k==="easeEach"||BC(k,E[k],N,E.easeEach);for(k in N)for(W=N[k].sort(function(Q,q){return Q.t-q.t}),X=0,b=0;b<W.length;b++)ne=W[b],te={ease:ne.e,duration:(ne.t-(b?W[b-1].t:0))/100*h},te[k]=ne.v,C.to(L,te,X),X+=te.duration;C.duration()<h&&C.to({},{duration:h-C.duration()})}}h||c.duration(h=C.duration())}else c.timeline=0;return y===!0&&!Mp&&(cs=Ar(c),Kt.killTweensOf(L),cs=0),nr(R,Ar(c),o),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(_||!h&&!E&&c._start===$t(R._time)&&ei(_)&&_C(Ar(c))&&R.data!=="nested")&&(c._tTime=-kt,c.render(Math.max(0,-p)||0)),S&&Cv(Ar(c),S),c}var t=e.prototype;return t.render=function(s,o,u){var c=this._time,d=this._tDur,h=this._dur,p=s<0,_=s>d-kt&&!p?d:s<kt?0:s,g,y,E,M,S,x,R,L,C;if(!h)vC(this,s,o,u);else if(_!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=_,L=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+s,o,u);if(g=$t(_%M),_===d?(E=this._repeat,g=h):(S=$t(_/M),E=~~S,E&&E===S?(g=h,E--):g>h&&(g=h)),x=this._yoyo&&E&1,x&&(C=this._yEase,g=h-g),S=ro(this._tTime,M),g===c&&!u&&this._initted&&E===S)return this._tTime=_,this;E!==S&&(L&&this._yEase&&Hv(L,x),this.vars.repeatRefresh&&!x&&!this._lock&&g!==M&&this._initted&&(this._lock=u=1,this.render($t(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(bv(this,p?s:g,u,o,_))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==S))return this;if(h!==this._dur)return this.render(s,o,u)}if(this._tTime=_,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(C||this._ease)(g/h),this._from&&(this.ratio=R=1-R),!c&&_&&!o&&!S&&(mi(this,"onStart"),this._tTime!==_))return this;for(y=this._pt;y;)y.r(R,y.d),y=y._next;L&&L.render(s<0?s:L._dur*L._ease(g/this._dur),o,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!o&&(p&&qh(this,s,o,u),mi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!o&&this.parent&&mi(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(p&&!this._onUpdate&&qh(this,s,!0,!0),(s||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&gs(this,1),!o&&!(p&&!c)&&(_||c||x)&&(mi(this,_===d?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),a.prototype.invalidate.call(this,s)},t.resetTo=function(s,o,u,c,d){vl||pi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Lp(this,h),p=this._ease(h/this._dur),OC(this,s,o,u,c,p,h,d)?this.resetTo(s,o,u,c,1):(Cc(this,0),this.parent||wv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,o){if(o===void 0&&(o="all"),!s&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?sl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,o,cs&&cs.vars.overwrite!==!0)._first||sl(this),this.parent&&u!==this.timeline.totalDuration()&&so(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=s?Li(s):c,h=this._ptLookup,p=this._pt,_,g,y,E,M,S,x;if((!o||o==="all")&&pC(c,d))return o==="all"&&(this._pt=0),sl(this);for(_=this._op=this._op||[],o!=="all"&&(yn(o)&&(M={},ti(o,function(R){return M[R]=1}),o=M),o=kC(c,o)),x=c.length;x--;)if(~d.indexOf(c[x])){g=h[x],o==="all"?(_[x]=o,E=g,y={}):(y=_[x]=_[x]||{},E=o);for(M in E)S=g&&g[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&wc(this,S,"_pt"),delete g[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&p&&sl(this),this},e.to=function(s,o){return new e(s,o,arguments[2])},e.from=function(s,o){return ul(1,arguments)},e.delayedCall=function(s,o,u,c){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:o,onReverseComplete:o,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,o,u){return ul(2,arguments)},e.set=function(s,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(s,o)},e.killTweensOf=function(s,o,u){return Kt.killTweensOf(s,o,u)},e})(xl);xi(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(a){ln[a]=function(){var e=new Gn,t=Kh.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Np=function(e,t,i){return e[t]=i},qv=function(e,t,i){return e[t](i)},zC=function(e,t,i,s){return e[t](s.fp,i)},VC=function(e,t,i){return e.setAttribute(t,i)},Ip=function(e,t){return en(e[t])?qv:Ep(e[t])&&e.setAttribute?VC:Np},$v=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},HC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Kv=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},Up=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},GC=function(e,t,i,s){for(var o=this._pt,u;o;)u=o._next,o.p===s&&o.modifier(e,t,i),o=u},WC=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?wc(this,t,"_pt"):t.dep||(i=1),t=s;return!i},XC=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},Zv=function(e){for(var t=e._pt,i,s,o,u;t;){for(i=t._next,s=o;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:o=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=o},ni=(function(){function a(t,i,s,o,u,c,d,h,p){this.t=i,this.s=o,this.c=u,this.p=s,this.r=c||$v,this.d=d||this,this.set=h||Np,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,s,o){this.mSet=this.mSet||this.set,this.set=XC,this.m=i,this.mt=o,this.tween=s},a})();ti(bp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Cp[a]=1});vi.TweenMax=vi.TweenLite=ln;vi.TimelineLite=vi.TimelineMax=Gn;Kt=new Gn({sortChildren:!1,defaults:no,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gi.stringFilter=zv;var ia=[],cc={},jC=[],y0=0,YC=0,qd=function(e){return(cc[e]||jC).map(function(t){return t()})},ep=function(){var e=Date.now(),t=[];e-y0>2&&(qd("matchMediaInit"),ia.forEach(function(i){var s=i.queries,o=i.conditions,u,c,d,h;for(c in s)u=er.matchMedia(s[c]).matches,u&&(d=1),u!==o[c]&&(o[c]=u,h=1);h&&(i.revert(),d&&t.push(i))}),qd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),y0=e,qd("matchMedia"))},Qv=(function(){function a(t,i){this.selector=i&&Zh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=YC++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,s,o){en(i)&&(o=s,s=i,i=en);var u=this,c=function(){var h=Xt,p=u.selector,_;return h&&h!==u&&h.data.push(u),o&&(u.selector=Zh(o)),Xt=u,_=s.apply(u,arguments),en(_)&&u._r.push(_),Xt=h,u.selector=p,u.isReverted=!1,_};return u.last=c,i===en?c(u,function(d){return u.add(null,d)}):i?u[i]=c:c},e.ignore=function(i){var s=Xt;Xt=null,i(this),Xt=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof a?i.push.apply(i,s.getTweens()):s instanceof ln&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var o=this;if(i?(function(){for(var c=o.getTweens(),d=o.data.length,h;d--;)h=o.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,_){return _.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),d=o.data.length;d--;)h=o.data[d],h instanceof Gn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof ln)&&h.revert&&h.revert(i);o._r.forEach(function(p){return p(i,o)}),o.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=ia.length;u--;)ia[u].id===this.id&&ia.splice(u,1)},e.revert=function(i){this.kill(i||{})},a})(),qC=(function(){function a(t){this.contexts=[],this.scope=t,Xt&&Xt.data.push(this)}var e=a.prototype;return e.add=function(i,s,o){dr(i)||(i={matches:i});var u=new Qv(0,o||this.scope),c=u.conditions={},d,h,p;Xt&&!u.selector&&(u.selector=Xt.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?p=1:(d=er.matchMedia(i[h]),d&&(ia.indexOf(u)<0&&ia.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(ep):d.addEventListener("change",ep)));return p&&s(u,function(_){return u.add(null,_)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},a})(),vc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return Ov(s)})},timeline:function(e){return new Gn(e)},getTweensOf:function(e,t){return Kt.getTweensOf(e,t)},getProperty:function(e,t,i,s){yn(e)&&(e=Li(e)[0]);var o=ea(e||{}).get,u=i?Tv:Ev;return i==="native"&&(i=""),e&&(t?u((di[t]&&di[t].get||o)(e,t,i,s)):function(c,d,h){return u((di[c]&&di[c].get||o)(e,c,d,h))})},quickSetter:function(e,t,i){if(e=Li(e),e.length>1){var s=e.map(function(p){return ri.quickSetter(p,t,i)}),o=s.length;return function(p){for(var _=o;_--;)s[_](p)}}e=e[0]||{};var u=di[t],c=ea(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var _=new u;Xa._pt=0,_.init(e,i?p+i:p,Xa,0,[e]),_.render(1,_),Xa._pt&&Up(1,Xa)}:c.set(e,d);return u?h:function(p){return h(e,d,i?p+i:p,c,1)}},quickTo:function(e,t,i){var s,o=ri.to(e,xi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,p){return o.resetTo(t,d,h,p)};return u.tween=o,u},isTweening:function(e){return Kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=na(e.ease,no.ease)),m0(no,e||{})},config:function(e){return m0(gi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,o=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!di[c]&&!vi[c]&&ml(t+" effect requires "+c+" plugin.")}),Wd[t]=function(c,d,h){return i(Li(c),xi(d||{},o),h)},u&&(Gn.prototype[t]=function(c,d,h){return this.add(Wd[t](c,dr(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){vt[e]=na(t)},parseEase:function(e,t){return arguments.length?na(e,t):vt},getById:function(e){return Kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Gn(e),s,o;for(i.smoothChildTiming=ei(e.smoothChildTiming),Kt.remove(i),i._dp=0,i._time=i._tTime=Kt._time,s=Kt._first;s;)o=s._next,(t||!(!s._dur&&s instanceof ln&&s.vars.onComplete===s._targets[0]))&&nr(i,s,s._start-s._delay),s=o;return nr(Kt,i,0),i},context:function(e,t){return e?new Qv(e,t):Xt},matchMedia:function(e){return new qC(e)},matchMediaRefresh:function(){return ia.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||ep()},addEventListener:function(e,t){var i=cc[e]||(cc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=cc[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:AC,wrapYoyo:CC,distribute:Dv,random:Nv,snap:Lv,normalize:wC,getUnit:Nn,clamp:SC,splitColor:kv,toArray:Li,selector:Zh,mapRange:Uv,pipe:EC,unitize:TC,interpolate:bC,shuffle:Pv},install:vv,effects:Wd,ticker:pi,updateRoot:Gn.updateRoot,plugins:di,globalTimeline:Kt,core:{PropTween:ni,globals:xv,Tween:ln,Timeline:Gn,Animation:xl,getCache:ea,_removeLinkedListItem:wc,reverting:function(){return wn},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return Mp=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return vc[a]=ln[a]});pi.add(Gn.updateRoot);Xa=vc.to({},{duration:0});var $C=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},KC=function(e,t){var i=e._targets,s,o,u;for(s in t)for(o=i.length;o--;)u=e._ptLookup[o][s],u&&(u=u.d)&&(u._pt&&(u=$C(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[o],s))},$d=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,o,u){u._onInit=function(c){var d,h;if(yn(o)&&(d={},ti(o,function(p){return d[p]=1}),o=d),t){d={};for(h in o)d[h]=t(o[h]);o=d}KC(c,o)}}}},ri=vc.registerPlugin({name:"attr",init:function(e,t,i,s,o){var u,c,d;this.tween=i;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],s,o,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)wn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},$d("roundProps",Qh),$d("modifiers"),$d("snap",Lv))||vc;ln.version=Gn.version=ri.version="3.14.2";gv=1;Tp()&&ao();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var S0,fs,$a,Fp,Js,M0,Op,ZC=function(){return typeof window<"u"},Ur={},qs=180/Math.PI,Ka=Math.PI/180,Ga=Math.atan2,E0=1e8,kp=/([A-Z])/g,QC=/(left|right|width|margin|padding|x)/i,JC=/[\s,\(]\S/,sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ib=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Jv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ex=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rb=function(e,t,i){return e.style[t]=i},sb=function(e,t,i){return e.style.setProperty(t,i)},ab=function(e,t,i){return e._gsap[t]=i},ob=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},lb=function(e,t,i,s,o){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(o,u)},ub=function(e,t,i,s,o){var u=e._gsap;u[t]=i,u.renderTransform(o,u)},Zt="transform",ii=Zt+"Origin",cb=function a(e,t){var i=this,s=this.target,o=s.style,u=s._gsap;if(e in Ur&&o){if(this.tfm=this.tfm||{},e!=="transform")e=sr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=Cr(s,c)}):this.tfm[e]=u.x?u[e]:Cr(s,e),e===ii&&(this.tfm.zOrigin=u.zOrigin);else return sr.transform.split(",").forEach(function(c){return a.call(i,c,t)});if(this.props.indexOf(Zt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Zt}(o||t)&&this.props.push(e,t,o[e])},tx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fb=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,o,u;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?i[e[o]]=e[o+2]:i.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(kp,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Op(),(!o||!o.isStart)&&!i[Zt]&&(tx(i),s.zOrigin&&i[ii]&&(i[ii]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},nx=function(e,t){var i={target:e,props:[],revert:fb,save:cb};return e._gsap||ri.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},ix,np=function(e,t){var i=fs.createElementNS?fs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fs.createElement(e);return i&&i.style?i:fs.createElement(e)},_i=function a(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(kp,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&a(e,oo(t)||t,1)||""},T0="O,Moz,ms,Ms,Webkit".split(","),oo=function(e,t,i){var s=t||Js,o=s.style,u=5;if(e in o&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(T0[u]+e in o););return u<0?null:(u===3?"ms":u>=0?T0[u]:"")+e},ip=function(){ZC()&&window.document&&(S0=window,fs=S0.document,$a=fs.documentElement,Js=np("div")||{style:{}},np("div"),Zt=oo(Zt),ii=Zt+"Origin",Js.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ix=!!oo("perspective"),Op=ri.core.reverting,Fp=1)},w0=function(e){var t=e.ownerSVGElement,i=np("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),o;s.style.display="block",i.appendChild(s),$a.appendChild(i);try{o=s.getBBox()}catch{}return i.removeChild(s),$a.removeChild(i),o},A0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},rx=function(e){var t,i;try{t=e.getBBox()}catch{t=w0(e),i=1}return t&&(t.width||t.height)||i||(t=w0(e)),t&&!t.width&&!t.x&&!t.y?{x:+A0(e,["x","cx","x1"])||0,y:+A0(e,["y","cy","y1"])||0,width:0,height:0}:t},sx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rx(e))},vs=function(e,t){if(t){var i=e.style,s;t in Ur&&t!==ii&&(t=Zt),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(kp,"-$1").toLowerCase())):i.removeAttribute(t)}},ds=function(e,t,i,s,o,u){var c=new ni(e._pt,t,i,0,1,u?ex:Jv);return e._pt=c,c.b=s,c.e=o,e._props.push(i),c},C0={deg:1,rad:1,turn:1},db={grid:1,flex:1},xs=function a(e,t,i,s){var o=parseFloat(i)||0,u=(i+"").trim().substr((o+"").length)||"px",c=Js.style,d=QC.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),_=100,g=s==="px",y=s==="%",E,M,S,x;if(s===u||!o||C0[s]||C0[u])return o;if(u!=="px"&&!g&&(o=a(e,t,i,"px")),x=e.getCTM&&sx(e),(y||u==="%")&&(Ur[t]||~t.indexOf("adius")))return E=x?e.getBBox()[d?"width":"height"]:e[p],sn(y?o/E*_:o/100*E);if(c[d?"width":"height"]=_+(g?u:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===fs||!M.appendChild)&&(M=fs.body),S=M._gsap,S&&y&&S.width&&d&&S.time===pi.time&&!S.uncache)return sn(o/S.width*_);if(y&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=_+s,E=e[p],R?e.style[t]=R:vs(e,t)}else(y||u==="%")&&!db[_i(M,"display")]&&(c.position=_i(e,"position")),M===e&&(c.position="static"),M.appendChild(Js),E=Js[p],M.removeChild(Js),c.position="absolute";return d&&y&&(S=ea(M),S.time=pi.time,S.width=M[p]),sn(g?E*o/_:E&&o?_/E*o:0)},Cr=function(e,t,i,s){var o;return Fp||ip(),t in sr&&t!=="transform"&&(t=sr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ur[t]&&t!=="transform"?(o=Sl(e,s),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:yc(_i(e,ii))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||s||~(o+"").indexOf("calc("))&&(o=xc[t]&&xc[t](e,t,i)||_i(e,t)||Sv(e,t)||(t==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?xs(e,t,o,i)+i:o},hb=function(e,t,i,s){if(!i||i==="none"){var o=oo(t,e,1),u=o&&_i(e,o,1);u&&u!==i?(t=o,i=u):t==="borderColor"&&(i=_i(e,"borderTopColor"))}var c=new ni(this._pt,e.style,t,0,1,Kv),d=0,h=0,p,_,g,y,E,M,S,x,R,L,C,b;if(c.b=i,c.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=_i(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=_i(e,t)||s,M?e.style[t]=M:vs(e,t)),p=[i,s],zv(p),i=p[0],s=p[1],g=i.match(Wa)||[],b=s.match(Wa)||[],b.length){for(;_=Wa.exec(s);)S=_[0],R=s.substring(d,_.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),S!==(M=g[h++]||"")&&(y=parseFloat(M)||0,C=M.substr((y+"").length),S.charAt(1)==="="&&(S=qa(y,S)+C),x=parseFloat(S),L=S.substr((x+"").length),d=Wa.lastIndex-L.length,L||(L=L||gi.units[t]||C,d===s.length&&(s+=L,c.e+=L)),C!==L&&(y=xs(e,t,M,L)||0),c._pt={_next:c._pt,p:R||h===1?R:",",s:y,c:x-y,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<s.length?s.substring(d,s.length):""}else c.r=t==="display"&&s==="none"?ex:Jv;return _v.test(s)&&(c.e=0),this._pt=c,c},b0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pb=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=b0[i]||i,t[1]=b0[s]||s,t.join(" ")},mb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,o=t.u,u=i._gsap,c,d,h;if(o==="all"||o===!0)s.cssText="",d=1;else for(o=o.split(","),h=o.length;--h>-1;)c=o[h],Ur[c]&&(d=1,c=c==="transformOrigin"?ii:Zt),vs(i,c);d&&(vs(i,Zt),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Sl(i,1),u.uncache=1,tx(s)))}},xc={clearProps:function(e,t,i,s,o){if(o.data!=="isFromStart"){var u=e._pt=new ni(e._pt,t,i,0,0,mb);return u.u=s,u.pr=-10,u.tween=o,e._props.push(i),1}}},yl=[1,0,0,1,0,0],ax={},ox=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},R0=function(e){var t=_i(e,Zt);return ox(t)?yl:t.substr(7).match(mv).map(sn)},Bp=function(e,t){var i=e._gsap||ea(e),s=e.style,o=R0(e),u,c,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,o=[d.a,d.b,d.c,d.d,d.e,d.f],o.join(",")==="1,0,0,1,0,0"?yl:o):(o===yl&&!e.offsetParent&&e!==$a&&!i.svg&&(d=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,$a.appendChild(e)),o=R0(e),d?s.display=d:vs(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):$a.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},rp=function(e,t,i,s,o,u){var c=e._gsap,d=o||Bp(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,_=c.xOffset||0,g=c.yOffset||0,y=d[0],E=d[1],M=d[2],S=d[3],x=d[4],R=d[5],L=t.split(" "),C=parseFloat(L[0])||0,b=parseFloat(L[1])||0,N,I,k,T;i?d!==yl&&(I=y*S-E*M)&&(k=C*(S/I)+b*(-M/I)+(M*R-S*x)/I,T=C*(-E/I)+b*(y/I)-(y*R-E*x)/I,C=k,b=T):(N=rx(e),C=N.x+(~L[0].indexOf("%")?C/100*N.width:C),b=N.y+(~(L[1]||L[0]).indexOf("%")?b/100*N.height:b)),s||s!==!1&&c.smooth?(x=C-h,R=b-p,c.xOffset=_+(x*y+R*M)-x,c.yOffset=g+(x*E+R*S)-R):c.xOffset=c.yOffset=0,c.xOrigin=C,c.yOrigin=b,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!i,e.style[ii]="0px 0px",u&&(ds(u,c,"xOrigin",h,C),ds(u,c,"yOrigin",p,b),ds(u,c,"xOffset",_,c.xOffset),ds(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",C+" "+b)},Sl=function(e,t){var i=e._gsap||new Wv(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,o=i.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=_i(e,ii)||"0",p,_,g,y,E,M,S,x,R,L,C,b,N,I,k,T,P,B,X,W,ne,te,Q,q,j,fe,ae,O,se,Ae,Ue,Be;return p=_=g=M=S=x=R=L=C=0,y=E=1,i.svg=!!(e.getCTM&&sx(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[Zt]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Zt]!=="none"?d[Zt]:"")),s.scale=s.rotate=s.translate="none"),I=Bp(e,i.svg),i.svg&&(i.uncache?(j=e.getBBox(),h=i.xOrigin-j.x+"px "+(i.yOrigin-j.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),rp(e,q||h,!!q||i.originIsAbsolute,i.smooth!==!1,I)),b=i.xOrigin||0,N=i.yOrigin||0,I!==yl&&(B=I[0],X=I[1],W=I[2],ne=I[3],p=te=I[4],_=Q=I[5],I.length===6?(y=Math.sqrt(B*B+X*X),E=Math.sqrt(ne*ne+W*W),M=B||X?Ga(X,B)*qs:0,R=W||ne?Ga(W,ne)*qs+M:0,R&&(E*=Math.abs(Math.cos(R*Ka))),i.svg&&(p-=b-(b*B+N*W),_-=N-(b*X+N*ne))):(Be=I[6],Ae=I[7],ae=I[8],O=I[9],se=I[10],Ue=I[11],p=I[12],_=I[13],g=I[14],k=Ga(Be,se),S=k*qs,k&&(T=Math.cos(-k),P=Math.sin(-k),q=te*T+ae*P,j=Q*T+O*P,fe=Be*T+se*P,ae=te*-P+ae*T,O=Q*-P+O*T,se=Be*-P+se*T,Ue=Ae*-P+Ue*T,te=q,Q=j,Be=fe),k=Ga(-W,se),x=k*qs,k&&(T=Math.cos(-k),P=Math.sin(-k),q=B*T-ae*P,j=X*T-O*P,fe=W*T-se*P,Ue=ne*P+Ue*T,B=q,X=j,W=fe),k=Ga(X,B),M=k*qs,k&&(T=Math.cos(k),P=Math.sin(k),q=B*T+X*P,j=te*T+Q*P,X=X*T-B*P,Q=Q*T-te*P,B=q,te=j),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=sn(Math.sqrt(B*B+X*X+W*W)),E=sn(Math.sqrt(Q*Q+Be*Be)),k=Ga(te,Q),R=Math.abs(k)>2e-4?k*qs:0,C=Ue?1/(Ue<0?-Ue:Ue):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ox(_i(e,Zt)),q&&e.setAttribute("transform",q))),Math.abs(R)>90&&Math.abs(R)<270&&(o?(y*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=_-((i.yPercent=_&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=g+u,i.scaleX=sn(y),i.scaleY=sn(E),i.rotation=sn(M)+c,i.rotationX=sn(S)+c,i.rotationY=sn(x)+c,i.skewX=R+c,i.skewY=L+c,i.transformPerspective=C+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[ii]=yc(h)),i.xOffset=i.yOffset=0,i.force3D=gi.force3D,i.renderTransform=i.svg?gb:ix?lx:_b,i.uncache=0,i},yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kd=function(e,t,i){var s=Nn(t);return sn(parseFloat(t)+parseFloat(xs(e,"x",i+"px",s)))+s},_b=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lx(e,t)},Xs="0deg",tl="0px",js=") ",lx=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.z,h=i.rotation,p=i.rotationY,_=i.rotationX,g=i.skewX,y=i.skewY,E=i.scaleX,M=i.scaleY,S=i.transformPerspective,x=i.force3D,R=i.target,L=i.zOrigin,C="",b=x==="auto"&&e&&e!==1||x===!0;if(L&&(_!==Xs||p!==Xs)){var N=parseFloat(p)*Ka,I=Math.sin(N),k=Math.cos(N),T;N=parseFloat(_)*Ka,T=Math.cos(N),u=Kd(R,u,I*T*-L),c=Kd(R,c,-Math.sin(N)*-L),d=Kd(R,d,k*T*-L+L)}S!==tl&&(C+="perspective("+S+js),(s||o)&&(C+="translate("+s+"%, "+o+"%) "),(b||u!==tl||c!==tl||d!==tl)&&(C+=d!==tl||b?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+js),h!==Xs&&(C+="rotate("+h+js),p!==Xs&&(C+="rotateY("+p+js),_!==Xs&&(C+="rotateX("+_+js),(g!==Xs||y!==Xs)&&(C+="skew("+g+", "+y+js),(E!==1||M!==1)&&(C+="scale("+E+", "+M+js),R.style[Zt]=C||"translate(0, 0)"},gb=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.rotation,h=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,y=i.target,E=i.xOrigin,M=i.yOrigin,S=i.xOffset,x=i.yOffset,R=i.forceCSS,L=parseFloat(u),C=parseFloat(c),b,N,I,k,T;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=Ka,h*=Ka,b=Math.cos(d)*_,N=Math.sin(d)*_,I=Math.sin(d-h)*-g,k=Math.cos(d-h)*g,h&&(p*=Ka,T=Math.tan(h-p),T=Math.sqrt(1+T*T),I*=T,k*=T,p&&(T=Math.tan(p),T=Math.sqrt(1+T*T),b*=T,N*=T)),b=sn(b),N=sn(N),I=sn(I),k=sn(k)):(b=_,k=g,N=I=0),(L&&!~(u+"").indexOf("px")||C&&!~(c+"").indexOf("px"))&&(L=xs(y,"x",u,"px"),C=xs(y,"y",c,"px")),(E||M||S||x)&&(L=sn(L+E-(E*b+M*I)+S),C=sn(C+M-(E*N+M*k)+x)),(s||o)&&(T=y.getBBox(),L=sn(L+s/100*T.width),C=sn(C+o/100*T.height)),T="matrix("+b+","+N+","+I+","+k+","+L+","+C+")",y.setAttribute("transform",T),R&&(y.style[Zt]=T)},vb=function(e,t,i,s,o){var u=360,c=yn(o),d=parseFloat(o)*(c&&~o.indexOf("rad")?qs:1),h=d-s,p=s+h+"deg",_,g;return c&&(_=o.split("_")[1],_==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),_==="cw"&&h<0?h=(h+u*E0)%u-~~(h/u)*u:_==="ccw"&&h>0&&(h=(h-u*E0)%u-~~(h/u)*u)),e._pt=g=new ni(e._pt,t,i,s,h,eb),g.e=p,g.u="deg",e._props.push(i),g},P0=function(e,t){for(var i in t)e[i]=t[i];return e},xb=function(e,t,i){var s=P0({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,d,h,p,_,g,y,E;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[Zt]=t,c=Sl(i,1),vs(i,Zt),i.setAttribute("transform",h)):(h=getComputedStyle(i)[Zt],u[Zt]=t,c=Sl(i,1),u[Zt]=h);for(d in Ur)h=s[d],p=c[d],h!==p&&o.indexOf(d)<0&&(y=Nn(h),E=Nn(p),_=y!==E?xs(i,d,h,E):parseFloat(h),g=parseFloat(p),e._pt=new ni(e._pt,c,d,_,g-_,tp),e._pt.u=E||0,e._props.push(d));P0(c,s)};ti("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",s="Bottom",o="Left",u=(e<3?[t,i,s,o]:[t+o,t+i,s+i,s+o]).map(function(c){return e<2?a+c:"border"+c+a});xc[e>1?"border"+a:a]=function(c,d,h,p,_){var g,y;if(arguments.length<4)return g=u.map(function(E){return Cr(c,E,h)}),y=g.join(" "),y.split(g[0]).length===5?g[0]:y;g=(p+"").split(" "),y={},u.forEach(function(E,M){return y[E]=g[M]=g[M]||g[(M-1)/2|0]}),c.init(d,y,_)}});var ux={name:"css",register:ip,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,o){var u=this._props,c=e.style,d=i.vars.startAt,h,p,_,g,y,E,M,S,x,R,L,C,b,N,I,k,T;Fp||ip(),this.styles=this.styles||nx(e),k=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(p=t[M],!(di[M]&&Xv(M,t,i,s,e,o)))){if(y=typeof p,E=xc[M],y==="function"&&(p=p.call(i,s,e,o),y=typeof p),y==="string"&&~p.indexOf("random(")&&(p=gl(p)),E)E(this,e,M,p,i)&&(I=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",ms.lastIndex=0,ms.test(h)||(S=Nn(h),x=Nn(p),x?S!==x&&(h=xs(e,M,h,x)+x):S&&(p+=S)),this.add(c,"setProperty",h,p,s,o,0,0,M),u.push(M),k.push(M,0,c[M]);else if(y!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(i,s,e,o):d[M],yn(h)&&~h.indexOf("random(")&&(h=gl(h)),Nn(h+"")||h==="auto"||(h+=gi.units[M]||Nn(Cr(e,M))||""),(h+"").charAt(1)==="="&&(h=Cr(e,M))):h=Cr(e,M),g=parseFloat(h),R=y==="string"&&p.charAt(1)==="="&&p.substr(0,2),R&&(p=p.substr(2)),_=parseFloat(p),M in sr&&(M==="autoAlpha"&&(g===1&&Cr(e,"visibility")==="hidden"&&_&&(g=0),k.push("visibility",0,c.visibility),ds(this,c,"visibility",g?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=sr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),L=M in Ur,L){if(this.styles.save(M),T=p,y==="string"&&p.substring(0,6)==="var(--"){if(p=_i(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=p,p=_i(e,"perspective"),P?e.style.perspective=P:vs(e,"perspective")}_=parseFloat(p)}if(C||(b=e._gsap,b.renderTransform&&!t.parseTransform||Sl(e,t.parseTransform),N=t.smoothOrigin!==!1&&b.smooth,C=this._pt=new ni(this._pt,c,Zt,0,1,b.renderTransform,b,0,-1),C.dep=1),M==="scale")this._pt=new ni(this._pt,b,"scaleY",b.scaleY,(R?qa(b.scaleY,R+_):_)-b.scaleY||0,tp),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){k.push(ii,0,c[ii]),p=pb(p),b.svg?rp(e,p,0,N,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==b.zOrigin&&ds(this,b,"zOrigin",b.zOrigin,x),ds(this,c,M,yc(h),yc(p)));continue}else if(M==="svgOrigin"){rp(e,p,1,N,0,this);continue}else if(M in ax){vb(this,b,M,g,R?qa(g,R+p):p);continue}else if(M==="smoothOrigin"){ds(this,b,"smooth",b.smooth,p);continue}else if(M==="force3D"){b[M]=p;continue}else if(M==="transform"){xb(this,p,e);continue}}else M in c||(M=oo(M)||M);if(L||(_||_===0)&&(g||g===0)&&!JC.test(p)&&M in c)S=(h+"").substr((g+"").length),_||(_=0),x=Nn(p)||(M in gi.units?gi.units[M]:S),S!==x&&(g=xs(e,M,h,x)),this._pt=new ni(this._pt,L?b:c,M,g,(R?qa(g,R+_):_)-g,!L&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?ib:tp),this._pt.u=x||0,L&&T!==p?(this._pt.b=h,this._pt.e=T,this._pt.r=nb):S!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=tb);else if(M in c)hb.call(this,e,M,h,R?R+p:p);else if(M in e)this.add(e,M,h||e[M],R?R+p:p,s,o);else if(M!=="parseTransform"){Ap(M,p);continue}L||(M in c?k.push(M,0,c[M]):typeof e[M]=="function"?k.push(M,2,e[M]()):k.push(M,1,h||e[M])),u.push(M)}}I&&Zv(this)},render:function(e,t){if(t.tween._time||!Op())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Cr,aliases:sr,getSetter:function(e,t,i){var s=sr[t];return s&&s.indexOf(",")<0&&(t=s),t in Ur&&t!==ii&&(e._gsap.x||Cr(e,"x"))?i&&M0===i?t==="scale"?ob:ab:(M0=i||{})&&(t==="scale"?lb:ub):e.style&&!Ep(e.style[t])?rb:~t.indexOf("-")?sb:Ip(e,t)},core:{_removeProperty:vs,_getMatrix:Bp}};ri.utils.checkPrefix=oo;ri.core.getStyleSaver=nx;(function(a,e,t,i){var s=ti(a+","+e+","+t,function(o){Ur[o]=1});ti(e,function(o){gi.units[o]="deg",ax[o]=1}),sr[s[13]]=a+","+e,ti(i,function(o){var u=o.split(":");sr[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){gi.units[a]="px"});ri.registerPlugin(ux);var cx=ri.registerPlugin(ux)||ri;cx.core.Tween;function yb(){return Ni.useEffect(()=>{let a,e,t,i,s,o=0,u=0,c=0,d=0;function h(){a=new jM,e=new Pi(45,window.innerWidth/window.innerHeight,1,1e3),e.position.z=350,t=new tC({canvas:document.getElementById("camera-canvas"),antialias:!0,alpha:!0}),t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),i=new il,a.add(i);const y=new Hs({color:1710618,shininess:80}),E=new En(new hs(100,65,25),y);i.add(E);const M=new En(new hs(25,65,32),new Hs({color:1118481}));M.position.x=42,i.add(M);const S=new En(new ol(10,10,6,24),new Hs({color:3355443}));S.position.set(20,32,0),i.add(S);const x=new En(new ol(5,5,4,16),new Hs({color:13369344}));x.position.set(40,32,8),i.add(x);const R=new En(new hs(20,12,10),new Hs({color:328965}));R.position.y=35,i.add(R);const L=new En(new Al(70,45),new Hs({color:0,emissive:4386,shininess:100}));L.position.set(-8,0,13),i.add(L);const C=new En(new ol(25,28,20,32),new Hs({color:657930}));C.rotation.x=Math.PI/2,C.position.z=-20,i.add(C),s=new En(new yp(1.5,16,16),new vp({color:16711680})),s.position.set(-35,18,14),i.add(s),a.add(new r1(16777215,.7));const b=new i1(16777215,.8);b.position.set(5,5,10),a.add(b),p()}function p(){const y=window.innerWidth<168?.5:.75;i.scale.set(y,y,y)}function _(y,E){o=y-window.innerWidth/2,u=E-window.innerHeight/2}window.addEventListener("mousemove",y=>_(y.clientX,y.clientY)),window.addEventListener("touchmove",y=>_(y.touches[0].clientX,y.touches[0].clientY)),window.addEventListener("mousedown",()=>{document.getElementById("flash").style.opacity=1,setTimeout(()=>document.getElementById("flash").style.opacity=0,80),cx.to(i.scale,{x:"-=0.1",y:"-=0.1",duration:.1,yoyo:!0,repeat:1})});function g(y){requestAnimationFrame(g),c+=(o-c)*.12,d+=(u-d)*.12,i.position.x=c*.65,i.position.y=-d*.65,i.rotation.y=c*.002,i.rotation.x=d*.002,s.visible=Math.sin(y*.005)>0,t.render(a,e)}window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),p()}),h(),g()},[]),K.jsxs(K.Fragment,{children:[K.jsx("div",{id:"flash"}),K.jsx("canvas",{id:"camera-canvas"})]})}function Sb(){return K.jsxs("div",{className:"size-full",children:[K.jsx(yb,{}),K.jsx(LS,{}),K.jsx(NS,{}),K.jsx(IS,{}),K.jsx(FS,{}),K.jsx(kS,{}),K.jsx(BS,{}),K.jsx(zS,{})]})}Zy.createRoot(document.getElementById("root")).render(K.jsx(Sb,{}));
