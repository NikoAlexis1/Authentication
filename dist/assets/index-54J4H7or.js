const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-BVjzRsh9.js","assets/AboutView-C6Dx7pxG.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $s(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Q={},en=[],Ve=()=>{},gl=()=>!1,Or=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hs=t=>t.startsWith("onUpdate:"),ae=Object.assign,Bs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ml=Object.prototype.hasOwnProperty,K=(t,e)=>ml.call(t,e),$=Array.isArray,tn=t=>kr(t)==="[object Map]",Xo=t=>kr(t)==="[object Set]",B=t=>typeof t=="function",ie=t=>typeof t=="string",Tt=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",Qo=t=>(re(t)||B(t))&&B(t.then)&&B(t.catch),Zo=Object.prototype.toString,kr=t=>Zo.call(t),_l=t=>kr(t).slice(8,-1),ea=t=>kr(t)==="[object Object]",js=t=>ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Sn=$s(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vl=/-(\w)/g,De=Nr(t=>t.replace(vl,(e,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,Vt=Nr(t=>t.replace(yl,"-$1").toLowerCase()),Dr=Nr(t=>t.charAt(0).toUpperCase()+t.slice(1)),zr=Nr(t=>t?`on${Dr(t)}`:""),St=(t,e)=>!Object.is(t,e),ar=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ta=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wi;const na=()=>wi||(wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vs(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ie(r)?Il(r):Vs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ie(t)||re(t))return t}const bl=/;(?![^(]*\))/g,El=/:([^]+)/,wl=/\/\*[^]*?\*\//g;function Il(t){const e={};return t.replace(wl,"").split(bl).forEach(n=>{if(n){const r=n.split(El);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ws(t){let e="";if(ie(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Ws(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tl=$s(Sl);function ra(t){return!!t||t===""}const sa=t=>!!(t&&t.__v_isRef===!0),ia=t=>ie(t)?t:t==null?"":$(t)||re(t)&&(t.toString===Zo||!B(t.toString))?sa(t)?ia(t.value):JSON.stringify(t,oa,2):String(t),oa=(t,e)=>sa(e)?oa(t,e.value):tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[qr(r,i)+" =>"]=s,n),{})}:Xo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qr(n))}:Tt(e)?qr(e):re(e)&&!$(e)&&!ea(e)?String(e):e,qr=(t,e="")=>{var n;return Tt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class Rl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Cl(){return we}let te;const Gr=new WeakSet;class aa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gr.has(this)&&(Gr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||la(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ii(this),ua(this);const e=te,n=ke;te=this,ke=!0;try{return this.fn()}finally{fa(this),te=e,ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qs(e);this.deps=this.depsTail=void 0,Ii(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ms(this)&&this.run()}get dirty(){return ms(this)}}let ca=0,Qt;function la(t){t.flags|=8,t.next=Qt,Qt=t}function Ks(){ca++}function zs(){if(--ca>0)return;let t;for(;Qt;){let e=Qt,n;for(;e;)e.flags&=-9,e=e.next;for(e=Qt,Qt=void 0;e;){if(e.flags&1)try{e.trigger()}catch(r){t||(t=r)}n=e.next,e.next=void 0,e=n}}if(t)throw t}function ua(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fa(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),qs(r),Al(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ms(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(da(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function da(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Dn))return;t.globalVersion=Dn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ms(t)){t.flags&=-3;return}const n=te,r=ke;te=t,ke=!0;try{ua(t);const s=t.fn(t._value);(e.version===0||St(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{te=n,ke=r,fa(t),t.flags&=-3}}function qs(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qs(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Al(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ke=!0;const ha=[];function Rt(){ha.push(ke),ke=!1}function Ct(){const t=ha.pop();ke=t===void 0?!0:t}function Ii(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=te;te=void 0;try{e()}finally{te=n}}}let Dn=0;class Pl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!te||!ke||te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==te)n=this.activeLink=new Pl(te,this),te.deps?(n.prevDep=te.depsTail,te.depsTail.nextDep=n,te.depsTail=n):te.deps=te.depsTail=n,pa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=te.depsTail,n.nextDep=void 0,te.depsTail.nextDep=n,te.depsTail=n,te.deps===n&&(te.deps=r)}return n}trigger(e){this.version++,Dn++,this.notify(e)}notify(e){Ks();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zs()}}}function pa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pa(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const _s=new WeakMap,Ut=Symbol(""),vs=Symbol(""),Mn=Symbol("");function fe(t,e,n){if(ke&&te){let r=_s.get(t);r||_s.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Gs),s.target=t,s.map=r,s.key=n),s.track()}}function rt(t,e,n,r,s,i){const o=_s.get(t);if(!o){Dn++;return}const c=a=>{a&&a.trigger()};if(Ks(),e==="clear")o.forEach(c);else{const a=$(t),u=a&&js(n);if(a&&n==="length"){const f=Number(r);o.forEach((d,p)=>{(p==="length"||p===Mn||!Tt(p)&&p>=f)&&c(d)})}else switch(n!==void 0&&c(o.get(n)),u&&c(o.get(Mn)),e){case"add":a?u&&c(o.get("length")):(c(o.get(Ut)),tn(t)&&c(o.get(vs)));break;case"delete":a||(c(o.get(Ut)),tn(t)&&c(o.get(vs)));break;case"set":tn(t)&&c(o.get(Ut));break}}zs()}function Gt(t){const e=z(t);return e===t?e:(fe(e,"iterate",Mn),Ne(t)?e:e.map(he))}function Js(t){return fe(t=z(t),"iterate",Mn),t}const Ol={__proto__:null,[Symbol.iterator](){return Jr(this,Symbol.iterator,he)},concat(...t){return Gt(this).concat(...t.map(e=>$(e)?Gt(e):e))},entries(){return Jr(this,"entries",t=>(t[1]=he(t[1]),t))},every(t,e){return Ge(this,"every",t,e,void 0,arguments)},filter(t,e){return Ge(this,"filter",t,e,n=>n.map(he),arguments)},find(t,e){return Ge(this,"find",t,e,he,arguments)},findIndex(t,e){return Ge(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ge(this,"findLast",t,e,he,arguments)},findLastIndex(t,e){return Ge(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ge(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yr(this,"includes",t)},indexOf(...t){return Yr(this,"indexOf",t)},join(t){return Gt(this).join(t)},lastIndexOf(...t){return Yr(this,"lastIndexOf",t)},map(t,e){return Ge(this,"map",t,e,void 0,arguments)},pop(){return _n(this,"pop")},push(...t){return _n(this,"push",t)},reduce(t,...e){return Si(this,"reduce",t,e)},reduceRight(t,...e){return Si(this,"reduceRight",t,e)},shift(){return _n(this,"shift")},some(t,e){return Ge(this,"some",t,e,void 0,arguments)},splice(...t){return _n(this,"splice",t)},toReversed(){return Gt(this).toReversed()},toSorted(t){return Gt(this).toSorted(t)},toSpliced(...t){return Gt(this).toSpliced(...t)},unshift(...t){return _n(this,"unshift",t)},values(){return Jr(this,"values",he)}};function Jr(t,e,n){const r=Js(t),s=r[e]();return r!==t&&!Ne(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const kl=Array.prototype;function Ge(t,e,n,r,s,i){const o=Js(t),c=o!==t&&!Ne(t),a=o[e];if(a!==kl[e]){const d=a.apply(t,i);return c?he(d):d}let u=n;o!==t&&(c?u=function(d,p){return n.call(this,he(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const f=a.call(o,u,r);return c&&s?s(f):f}function Si(t,e,n,r){const s=Js(t);let i=n;return s!==t&&(Ne(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,he(c),a,t)}),s[e](i,...r)}function Yr(t,e,n){const r=z(t);fe(r,"iterate",Mn);const s=r[e](...n);return(s===-1||s===!1)&&Zs(n[0])?(n[0]=z(n[0]),r[e](...n)):s}function _n(t,e,n=[]){Rt(),Ks();const r=z(t)[e].apply(t,n);return zs(),Ct(),r}const Nl=$s("__proto__,__v_isRef,__isVue"),ga=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tt));function Dl(t){Tt(t)||(t=String(t));const e=z(this);return fe(e,"has",t),e.hasOwnProperty(t)}class ma{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zl:ba:i?ya:va).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){let a;if(o&&(a=Ol[n]))return a;if(n==="hasOwnProperty")return Dl}const c=Reflect.get(e,n,ue(e)?e:r);return(Tt(n)?ga.has(n):Nl(n))||(s||fe(e,"get",n),i)?c:ue(c)?o&&js(n)?c:c.value:re(c)?s?wa(c):xr(c):c}}class _a extends ma{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=$t(i);if(!Ne(r)&&!$t(r)&&(i=z(i),r=z(r)),!$(e)&&ue(i)&&!ue(r))return a?!1:(i.value=r,!0)}const o=$(e)&&js(n)?Number(n)<e.length:K(e,n),c=Reflect.set(e,n,r,ue(e)?e:s);return e===z(s)&&(o?St(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),c}deleteProperty(e,n){const r=K(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tt(n)||!ga.has(n))&&fe(e,"has",n),r}ownKeys(e){return fe(e,"iterate",$(e)?"length":Ut),Reflect.ownKeys(e)}}class Ml extends ma{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xl=new _a,Ll=new Ml,Ul=new _a(!0);const Ys=t=>t,Mr=t=>Reflect.getPrototypeOf(t);function er(t,e,n=!1,r=!1){t=t.__v_raw;const s=z(t),i=z(e);n||(St(e,i)&&fe(s,"get",e),fe(s,"get",i));const{has:o}=Mr(s),c=r?Ys:n?ei:he;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function tr(t,e=!1){const n=this.__v_raw,r=z(n),s=z(t);return e||(St(t,s)&&fe(r,"has",t),fe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function nr(t,e=!1){return t=t.__v_raw,!e&&fe(z(t),"iterate",Ut),Reflect.get(t,"size",t)}function Ti(t,e=!1){!e&&!Ne(t)&&!$t(t)&&(t=z(t));const n=z(this);return Mr(n).has.call(n,t)||(n.add(t),rt(n,"add",t,t)),this}function Ri(t,e,n=!1){!n&&!Ne(e)&&!$t(e)&&(e=z(e));const r=z(this),{has:s,get:i}=Mr(r);let o=s.call(r,t);o||(t=z(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?St(e,c)&&rt(r,"set",t,e):rt(r,"add",t,e),this}function Ci(t){const e=z(this),{has:n,get:r}=Mr(e);let s=n.call(e,t);s||(t=z(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function Ai(){const t=z(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function rr(t,e){return function(r,s){const i=this,o=i.__v_raw,c=z(o),a=e?Ys:t?ei:he;return!t&&fe(c,"iterate",Ut),o.forEach((u,f)=>r.call(s,a(u),a(f),i))}}function sr(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=tn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,u=s[t](...r),f=n?Ys:e?ei:he;return!e&&fe(i,"iterate",a?vs:Ut),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:c?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function dt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Fl(){const t={get(i){return er(this,i)},get size(){return nr(this)},has:tr,add:Ti,set:Ri,delete:Ci,clear:Ai,forEach:rr(!1,!1)},e={get(i){return er(this,i,!1,!0)},get size(){return nr(this)},has:tr,add(i){return Ti.call(this,i,!0)},set(i,o){return Ri.call(this,i,o,!0)},delete:Ci,clear:Ai,forEach:rr(!1,!0)},n={get(i){return er(this,i,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:rr(!0,!1)},r={get(i){return er(this,i,!0,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),e[i]=sr(i,!1,!0),r[i]=sr(i,!0,!0)}),[t,n,e,r]}const[$l,Hl,Bl,jl]=Fl();function Xs(t,e){const n=e?t?jl:Bl:t?Hl:$l;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Vl={get:Xs(!1,!1)},Wl={get:Xs(!1,!0)},Kl={get:Xs(!0,!1)};const va=new WeakMap,ya=new WeakMap,ba=new WeakMap,zl=new WeakMap;function ql(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gl(t){return t.__v_skip||!Object.isExtensible(t)?0:ql(_l(t))}function xr(t){return $t(t)?t:Qs(t,!1,xl,Vl,va)}function Ea(t){return Qs(t,!1,Ul,Wl,ya)}function wa(t){return Qs(t,!0,Ll,Kl,ba)}function Qs(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Gl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Tn(t){return $t(t)?Tn(t.__v_raw):!!(t&&t.__v_isReactive)}function $t(t){return!!(t&&t.__v_isReadonly)}function Ne(t){return!!(t&&t.__v_isShallow)}function Zs(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Jl(t){return!K(t,"__v_skip")&&Object.isExtensible(t)&&ta(t,"__v_skip",!0),t}const he=t=>re(t)?xr(t):t,ei=t=>re(t)?wa(t):t;function ue(t){return t?t.__v_isRef===!0:!1}function Yl(t){return Ia(t,!1)}function Xl(t){return Ia(t,!0)}function Ia(t,e){return ue(t)?t:new Ql(t,e)}class Ql{constructor(e,n){this.dep=new Gs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:z(e),this._value=n?e:he(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ne(e)||$t(e);e=r?e:z(e),St(e,n)&&(this._rawValue=e,this._value=r?e:he(e),this.dep.trigger())}}function nn(t){return ue(t)?t.value:t}const Zl={get:(t,e,n)=>e==="__v_raw"?t:nn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Sa(t){return Tn(t)?t:new Proxy(t,Zl)}class eu{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&te!==this)return la(this),!0}get value(){const e=this.dep.track();return da(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tu(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new eu(r,s,n)}const ir={},vr=new WeakMap;let Mt;function nu(t,e=!1,n=Mt){if(n){let r=vr.get(n);r||vr.set(n,r=[]),r.push(t)}}function ru(t,e,n=Q){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,u=O=>s?O:Ne(O)||s===!1||s===0?Ze(O,1):Ze(O);let f,d,p,m,C=!1,P=!1;if(ue(t)?(d=()=>t.value,C=Ne(t)):Tn(t)?(d=()=>u(t),C=!0):$(t)?(P=!0,C=t.some(O=>Tn(O)||Ne(O)),d=()=>t.map(O=>{if(ue(O))return O.value;if(Tn(O))return u(O);if(B(O))return a?a(O,2):O()})):B(t)?e?d=a?()=>a(t,2):t:d=()=>{if(p){Rt();try{p()}finally{Ct()}}const O=Mt;Mt=f;try{return a?a(t,3,[m]):t(m)}finally{Mt=O}}:d=Ve,e&&s){const O=d,V=s===!0?1/0:s;d=()=>Ze(O(),V)}const H=Cl(),x=()=>{f.stop(),H&&Bs(H.effects,f)};if(i&&e){const O=e;e=(...V)=>{O(...V),x()}}let k=P?new Array(t.length).fill(ir):ir;const M=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const V=f.run();if(s||C||(P?V.some((se,Z)=>St(se,k[Z])):St(V,k))){p&&p();const se=Mt;Mt=f;try{const Z=[V,k===ir?void 0:P&&k[0]===ir?[]:k,m];a?a(e,3,Z):e(...Z),k=V}finally{Mt=se}}}else f.run()};return c&&c(M),f=new aa(d),f.scheduler=o?()=>o(M,!1):M,m=O=>nu(O,!1,f),p=f.onStop=()=>{const O=vr.get(f);if(O){if(a)a(O,4);else for(const V of O)V();vr.delete(f)}},e?r?M(!0):k=f.run():o?o(M.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function Ze(t,e=1/0,n){if(e<=0||!re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ue(t))Ze(t.value,e,n);else if($(t))for(let r=0;r<t.length;r++)Ze(t[r],e,n);else if(Xo(t)||tn(t))t.forEach(r=>{Ze(r,e,n)});else if(ea(t)){for(const r in t)Ze(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ze(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wn(t,e,n,r){try{return r?t(...r):t()}catch(s){Lr(s,e,n)}}function ze(t,e,n,r){if(B(t)){const s=Wn(t,e,n,r);return s&&Qo(s)&&s.catch(i=>{Lr(i,e,n)}),s}if($(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ze(t[i],e,n,r));return s}}function Lr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Q;if(e){let c=e.parent;const a=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,a,u)===!1)return}c=c.parent}if(i){Rt(),Wn(i,null,10,[t,a,u]),Ct();return}}su(t,n,s,r,o)}function su(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let xn=!1,ys=!1;const pe=[];let He=0;const rn=[];let gt=null,Jt=0;const Ta=Promise.resolve();let ti=null;function Ra(t){const e=ti||Ta;return t?e.then(this?t.bind(this):t):e}function iu(t){let e=xn?He+1:0,n=pe.length;for(;e<n;){const r=e+n>>>1,s=pe[r],i=Ln(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ni(t){if(!(t.flags&1)){const e=Ln(t),n=pe[pe.length-1];!n||!(t.flags&2)&&e>=Ln(n)?pe.push(t):pe.splice(iu(e),0,t),t.flags|=1,Ca()}}function Ca(){!xn&&!ys&&(ys=!0,ti=Ta.then(Pa))}function ou(t){$(t)?rn.push(...t):gt&&t.id===-1?gt.splice(Jt+1,0,t):t.flags&1||(rn.push(t),t.flags|=1),Ca()}function Pi(t,e,n=xn?He+1:0){for(;n<pe.length;n++){const r=pe[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Aa(t){if(rn.length){const e=[...new Set(rn)].sort((n,r)=>Ln(n)-Ln(r));if(rn.length=0,gt){gt.push(...e);return}for(gt=e,Jt=0;Jt<gt.length;Jt++){const n=gt[Jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gt=null,Jt=0}}const Ln=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pa(t){ys=!1,xn=!0;try{for(He=0;He<pe.length;He++){const e=pe[He];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;He<pe.length;He++){const e=pe[He];e&&(e.flags&=-2)}He=0,pe.length=0,Aa(),xn=!1,ti=null,(pe.length||rn.length)&&Pa()}}let Ie=null,Oa=null;function yr(t){const e=Ie;return Ie=t,Oa=t&&t.type.__scopeId||null,e}function cr(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$i(-1);const i=yr(e);let o;try{o=t(...s)}finally{yr(i),r._d&&$i(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Wm(t,e){if(Ie===null)return t;const n=Br(Ie),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Q]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&Ze(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Nt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Rt(),ze(a,n,8,[t.el,c,t,e]),Ct())}}const au=Symbol("_vte"),cu=t=>t.__isTeleport;function ri(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ri(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ka(t,e){return B(t)?ae({name:t.name},e,{setup:t}):t}function Na(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function bs(t,e,n,r,s=!1){if($(t)){t.forEach((C,P)=>bs(C,e&&($(e)?e[P]:e),n,r,s));return}if(Rn(r)&&!s)return;const i=r.shapeFlag&4?Br(r.component):r.el,o=s?null:i,{i:c,r:a}=t,u=e&&e.r,f=c.refs===Q?c.refs={}:c.refs,d=c.setupState,p=z(d),m=d===Q?()=>!1:C=>K(p,C);if(u!=null&&u!==a&&(ie(u)?(f[u]=null,m(u)&&(d[u]=null)):ue(u)&&(u.value=null)),B(a))Wn(a,c,12,[o,f]);else{const C=ie(a),P=ue(a);if(C||P){const H=()=>{if(t.f){const x=C?m(a)?d[a]:f[a]:a.value;s?$(x)&&Bs(x,i):$(x)?x.includes(i)||x.push(i):C?(f[a]=[i],m(a)&&(d[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else C?(f[a]=o,m(a)&&(d[a]=o)):P&&(a.value=o,t.k&&(f[t.k]=o))};o?(H.id=-1,Ee(H,n)):H()}}}const Rn=t=>!!t.type.__asyncLoader,Da=t=>t.type.__isKeepAlive;function lu(t,e){Ma(t,"a",e)}function uu(t,e){Ma(t,"da",e)}function Ma(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ur(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Da(s.parent.vnode)&&fu(r,e,n,s),s=s.parent}}function fu(t,e,n,r){const s=Ur(e,t,r,!0);xa(()=>{Bs(r[e],s)},n)}function Ur(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Rt();const c=Kn(n),a=ze(e,n,t,o);return c(),Ct(),a});return r?s.unshift(i):s.push(i),i}}const ct=t=>(e,n=le)=>{(!Hr||t==="sp")&&Ur(t,(...r)=>e(...r),n)},du=ct("bm"),hu=ct("m"),pu=ct("bu"),gu=ct("u"),mu=ct("bum"),xa=ct("um"),_u=ct("sp"),vu=ct("rtg"),yu=ct("rtc");function bu(t,e=le){Ur("ec",t,e)}const Eu="components";function Oi(t,e){return Iu(Eu,t,!0,e)||t}const wu=Symbol.for("v-ndc");function Iu(t,e,n=!0,r=!1){const s=Ie||le;if(s){const i=s.type;{const c=uf(i,!1);if(c&&(c===e||c===De(e)||c===Dr(De(e))))return i}const o=ki(s[t]||i[t],e)||ki(s.appContext[t],e);return!o&&r?i:o}}function ki(t,e){return t&&(t[e]||t[De(e)]||t[Dr(De(e))])}const Es=t=>t?tc(t)?Br(t):Es(t.parent):null,Cn=ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Es(t.parent),$root:t=>Es(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>si(t),$forceUpdate:t=>t.f||(t.f=()=>{ni(t.update)}),$nextTick:t=>t.n||(t.n=Ra.bind(t.proxy)),$watch:t=>Wu.bind(t)}),Xr=(t,e)=>t!==Q&&!t.__isScriptSetup&&K(t,e),Su={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xr(r,e))return o[e]=1,r[e];if(s!==Q&&K(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&K(u,e))return o[e]=3,i[e];if(n!==Q&&K(n,e))return o[e]=4,n[e];ws&&(o[e]=0)}}const f=Cn[e];let d,p;if(f)return e==="$attrs"&&fe(t.attrs,"get",""),f(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Q&&K(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xr(s,e)?(s[e]=n,!0):r!==Q&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&K(t,o)||Xr(e,o)||(c=i[0])&&K(c,o)||K(r,o)||K(Cn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ni(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ws=!0;function Tu(t){const e=si(t),n=t.proxy,r=t.ctx;ws=!1,e.beforeCreate&&Di(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:u,created:f,beforeMount:d,mounted:p,beforeUpdate:m,updated:C,activated:P,deactivated:H,beforeDestroy:x,beforeUnmount:k,destroyed:M,unmounted:O,render:V,renderTracked:se,renderTriggered:Z,errorCaptured:Te,serverPrefetch:Re,expose:Ce,inheritAttrs:ut,components:kt,directives:Le,filters:gn}=e;if(u&&Ru(u,r,null),o)for(const Y in o){const W=o[Y];B(W)&&(r[Y]=W.bind(n))}if(s){const Y=s.call(n,n);re(Y)&&(t.data=xr(Y))}if(ws=!0,i)for(const Y in i){const W=i[Y],qe=B(W)?W.bind(n,n):B(W.get)?W.get.bind(n,n):Ve,ft=!B(W)&&B(W.set)?W.set.bind(n):Ve,Ue=Oe({get:qe,set:ft});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:_e=>Ue.value=_e})}if(c)for(const Y in c)La(c[Y],r,n,Y);if(a){const Y=B(a)?a.call(n):a;Reflect.ownKeys(Y).forEach(W=>{lr(W,Y[W])})}f&&Di(f,t,"c");function oe(Y,W){$(W)?W.forEach(qe=>Y(qe.bind(n))):W&&Y(W.bind(n))}if(oe(du,d),oe(hu,p),oe(pu,m),oe(gu,C),oe(lu,P),oe(uu,H),oe(bu,Te),oe(yu,se),oe(vu,Z),oe(mu,k),oe(xa,O),oe(_u,Re),$(Ce))if(Ce.length){const Y=t.exposed||(t.exposed={});Ce.forEach(W=>{Object.defineProperty(Y,W,{get:()=>n[W],set:qe=>n[W]=qe})})}else t.exposed||(t.exposed={});V&&t.render===Ve&&(t.render=V),ut!=null&&(t.inheritAttrs=ut),kt&&(t.components=kt),Le&&(t.directives=Le),Re&&Na(t)}function Ru(t,e,n=Ve){$(t)&&(t=Is(t));for(const r in t){const s=t[r];let i;re(s)?"default"in s?i=st(s.from||r,s.default,!0):i=st(s.from||r):i=st(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Di(t,e,n){ze($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function La(t,e,n,r){let s=r.includes(".")?Ya(n,r):()=>n[r];if(ie(t)){const i=e[t];B(i)&&ur(s,i)}else if(B(t))ur(s,t.bind(n));else if(re(t))if($(t))t.forEach(i=>La(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&ur(s,i,t)}}function si(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(u=>br(a,u,o,!0)),br(a,e,o)),re(e)&&i.set(e,a),a}function br(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&br(t,i,n,!0),s&&s.forEach(o=>br(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Cu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Cu={data:Mi,props:xi,emits:xi,methods:En,computed:En,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:En,directives:En,watch:Pu,provide:Mi,inject:Au};function Mi(t,e){return e?t?function(){return ae(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Au(t,e){return En(Is(t),Is(e))}function Is(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?ae(Object.create(null),t,e):e}function xi(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ae(Object.create(null),Ni(t),Ni(e??{})):e}function Pu(t,e){if(!t)return e;if(!e)return t;const n=ae(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function Ua(){return{app:null,config:{isNativeTag:gl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ou=0;function ku(t,e){return function(r,s=null){B(r)||(r=ae({},r)),s!=null&&!re(s)&&(s=null);const i=Ua(),o=new WeakSet,c=[];let a=!1;const u=i.app={_uid:Ou++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:df,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(u,...d)):B(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,p){if(!a){const m=u._ceVNode||ge(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,f):t(m,f,p),a=!0,u._container=f,f.__vue_app__=u,Br(m.component)}},onUnmount(f){c.push(f)},unmount(){a&&(ze(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=sn;sn=u;try{return f()}finally{sn=d}}};return u}}let sn=null;function lr(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function st(t,e,n=!1){const r=le||Ie;if(r||sn){const s=sn?sn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}const Fa={},$a=()=>Object.create(Fa),Ha=t=>Object.getPrototypeOf(t)===Fa;function Nu(t,e,n,r=!1){const s={},i=$a();t.propsDefaults=Object.create(null),Ba(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ea(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Du(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=z(s),[a]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Fr(t.emitsOptions,p))continue;const m=e[p];if(a)if(K(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const C=De(p);s[C]=Ss(a,c,C,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Ba(t,e,s,i)&&(u=!0);let f;for(const d in c)(!e||!K(e,d)&&((f=Vt(d))===d||!K(e,f)))&&(a?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Ss(a,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!K(e,d))&&(delete i[d],u=!0)}u&&rt(t.attrs,"set","")}function Ba(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Sn(a))continue;const u=e[a];let f;s&&K(s,f=De(a))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Fr(t.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,o=!0)}if(i){const a=z(n),u=c||Q;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Ss(s,a,d,u[d],t,!K(u,d))}}return o}function Ss(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=K(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Kn(s);r=u[n]=a.call(null,e),f()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}const Mu=new WeakMap;function ja(t,e,n=!1){const r=n?Mu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const f=d=>{a=!0;const[p,m]=ja(d,e,!0);ae(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return re(t)&&r.set(t,en),en;if($(i))for(let f=0;f<i.length;f++){const d=De(i[f]);Li(d)&&(o[d]=Q)}else if(i)for(const f in i){const d=De(f);if(Li(d)){const p=i[f],m=o[d]=$(p)||B(p)?{type:p}:ae({},p),C=m.type;let P=!1,H=!0;if($(C))for(let x=0;x<C.length;++x){const k=C[x],M=B(k)&&k.name;if(M==="Boolean"){P=!0;break}else M==="String"&&(H=!1)}else P=B(C)&&C.name==="Boolean";m[0]=P,m[1]=H,(P||K(m,"default"))&&c.push(d)}}const u=[o,c];return re(t)&&r.set(t,u),u}function Li(t){return t[0]!=="$"&&!Sn(t)}const Va=t=>t[0]==="_"||t==="$stable",ii=t=>$(t)?t.map(Be):[Be(t)],xu=(t,e,n)=>{if(e._n)return e;const r=cr((...s)=>ii(e(...s)),n);return r._c=!1,r},Wa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Va(s))continue;const i=t[s];if(B(i))e[s]=xu(s,i,r);else if(i!=null){const o=ii(i);e[s]=()=>o}}},Ka=(t,e)=>{const n=ii(e);t.slots.default=()=>n},za=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Lu=(t,e,n)=>{const r=t.slots=$a();if(t.vnode.shapeFlag&32){const s=e._;s?(za(r,e,n),n&&ta(r,"_",s,!0)):Wa(e,r)}else e&&Ka(t,e)},Uu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:za(s,e,n):(i=!e.$stable,Wa(e,s)),o=e}else e&&(Ka(t,e),o={default:1});if(i)for(const c in s)!Va(c)&&o[c]==null&&delete s[c]},Ee=Xu;function Fu(t){return $u(t)}function $u(t,e){const n=na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:u,setElementText:f,parentNode:d,nextSibling:p,setScopeId:m=Ve,insertStaticContent:C}=t,P=(l,h,g,y=null,_=null,b=null,S=void 0,I=null,w=!!h.dynamicChildren)=>{if(l===h)return;l&&!vn(l,h)&&(y=v(l),_e(l,_,b,!0),l=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:E,ref:L,shapeFlag:R}=h;switch(E){case $r:H(l,h,g,y);break;case Ht:x(l,h,g,y);break;case es:l==null&&k(h,g,y,S);break;case Xe:kt(l,h,g,y,_,b,S,I,w);break;default:R&1?V(l,h,g,y,_,b,S,I,w):R&6?Le(l,h,g,y,_,b,S,I,w):(R&64||R&128)&&E.process(l,h,g,y,_,b,S,I,w,N)}L!=null&&_&&bs(L,l&&l.ref,b,h||l,!h)},H=(l,h,g,y)=>{if(l==null)r(h.el=c(h.children),g,y);else{const _=h.el=l.el;h.children!==l.children&&u(_,h.children)}},x=(l,h,g,y)=>{l==null?r(h.el=a(h.children||""),g,y):h.el=l.el},k=(l,h,g,y)=>{[l.el,l.anchor]=C(l.children,h,g,y,l.el,l.anchor)},M=({el:l,anchor:h},g,y)=>{let _;for(;l&&l!==h;)_=p(l),r(l,g,y),l=_;r(h,g,y)},O=({el:l,anchor:h})=>{let g;for(;l&&l!==h;)g=p(l),s(l),l=g;s(h)},V=(l,h,g,y,_,b,S,I,w)=>{h.type==="svg"?S="svg":h.type==="math"&&(S="mathml"),l==null?se(h,g,y,_,b,S,I,w):Re(l,h,_,b,S,I,w)},se=(l,h,g,y,_,b,S,I)=>{let w,E;const{props:L,shapeFlag:R,transition:D,dirs:F}=l;if(w=l.el=o(l.type,b,L&&L.is,L),R&8?f(w,l.children):R&16&&Te(l.children,w,null,y,_,Qr(l,b),S,I),F&&Nt(l,null,y,"created"),Z(w,l,l.scopeId,S,y),L){for(const ee in L)ee!=="value"&&!Sn(ee)&&i(w,ee,null,L[ee],b,y);"value"in L&&i(w,"value",null,L.value,b),(E=L.onVnodeBeforeMount)&&$e(E,y,l)}F&&Nt(l,null,y,"beforeMount");const j=Hu(_,D);j&&D.beforeEnter(w),r(w,h,g),((E=L&&L.onVnodeMounted)||j||F)&&Ee(()=>{E&&$e(E,y,l),j&&D.enter(w),F&&Nt(l,null,y,"mounted")},_)},Z=(l,h,g,y,_)=>{if(g&&m(l,g),y)for(let b=0;b<y.length;b++)m(l,y[b]);if(_){let b=_.subTree;if(h===b||Qa(b.type)&&(b.ssContent===h||b.ssFallback===h)){const S=_.vnode;Z(l,S,S.scopeId,S.slotScopeIds,_.parent)}}},Te=(l,h,g,y,_,b,S,I,w=0)=>{for(let E=w;E<l.length;E++){const L=l[E]=I?mt(l[E]):Be(l[E]);P(null,L,h,g,y,_,b,S,I)}},Re=(l,h,g,y,_,b,S)=>{const I=h.el=l.el;let{patchFlag:w,dynamicChildren:E,dirs:L}=h;w|=l.patchFlag&16;const R=l.props||Q,D=h.props||Q;let F;if(g&&Dt(g,!1),(F=D.onVnodeBeforeUpdate)&&$e(F,g,h,l),L&&Nt(h,l,g,"beforeUpdate"),g&&Dt(g,!0),(R.innerHTML&&D.innerHTML==null||R.textContent&&D.textContent==null)&&f(I,""),E?Ce(l.dynamicChildren,E,I,g,y,Qr(h,_),b):S||W(l,h,I,null,g,y,Qr(h,_),b,!1),w>0){if(w&16)ut(I,R,D,g,_);else if(w&2&&R.class!==D.class&&i(I,"class",null,D.class,_),w&4&&i(I,"style",R.style,D.style,_),w&8){const j=h.dynamicProps;for(let ee=0;ee<j.length;ee++){const G=j[ee],ve=R[G],ce=D[G];(ce!==ve||G==="value")&&i(I,G,ve,ce,_,g)}}w&1&&l.children!==h.children&&f(I,h.children)}else!S&&E==null&&ut(I,R,D,g,_);((F=D.onVnodeUpdated)||L)&&Ee(()=>{F&&$e(F,g,h,l),L&&Nt(h,l,g,"updated")},y)},Ce=(l,h,g,y,_,b,S)=>{for(let I=0;I<h.length;I++){const w=l[I],E=h[I],L=w.el&&(w.type===Xe||!vn(w,E)||w.shapeFlag&70)?d(w.el):g;P(w,E,L,null,y,_,b,S,!0)}},ut=(l,h,g,y,_)=>{if(h!==g){if(h!==Q)for(const b in h)!Sn(b)&&!(b in g)&&i(l,b,h[b],null,_,y);for(const b in g){if(Sn(b))continue;const S=g[b],I=h[b];S!==I&&b!=="value"&&i(l,b,I,S,_,y)}"value"in g&&i(l,"value",h.value,g.value,_)}},kt=(l,h,g,y,_,b,S,I,w)=>{const E=h.el=l?l.el:c(""),L=h.anchor=l?l.anchor:c("");let{patchFlag:R,dynamicChildren:D,slotScopeIds:F}=h;F&&(I=I?I.concat(F):F),l==null?(r(E,g,y),r(L,g,y),Te(h.children||[],g,L,_,b,S,I,w)):R>0&&R&64&&D&&l.dynamicChildren?(Ce(l.dynamicChildren,D,g,_,b,S,I),(h.key!=null||_&&h===_.subTree)&&qa(l,h,!0)):W(l,h,g,L,_,b,S,I,w)},Le=(l,h,g,y,_,b,S,I,w)=>{h.slotScopeIds=I,l==null?h.shapeFlag&512?_.ctx.activate(h,g,y,S,w):gn(h,g,y,_,b,S,w):Kt(l,h,w)},gn=(l,h,g,y,_,b,S)=>{const I=l.component=sf(l,y,_);if(Da(l)&&(I.ctx.renderer=N),of(I,!1,S),I.asyncDep){if(_&&_.registerDep(I,oe,S),!l.el){const w=I.subTree=ge(Ht);x(null,w,h,g)}}else oe(I,l,h,g,_,b,S)},Kt=(l,h,g)=>{const y=h.component=l.component;if(Ju(l,h,g))if(y.asyncDep&&!y.asyncResolved){Y(y,h,g);return}else y.next=h,y.update();else h.el=l.el,y.vnode=h},oe=(l,h,g,y,_,b,S)=>{const I=()=>{if(l.isMounted){let{next:R,bu:D,u:F,parent:j,vnode:ee}=l;{const ye=Ga(l);if(ye){R&&(R.el=ee.el,Y(l,R,S)),ye.asyncDep.then(()=>{l.isUnmounted||I()});return}}let G=R,ve;Dt(l,!1),R?(R.el=ee.el,Y(l,R,S)):R=ee,D&&ar(D),(ve=R.props&&R.props.onVnodeBeforeUpdate)&&$e(ve,j,R,ee),Dt(l,!0);const ce=Zr(l),Pe=l.subTree;l.subTree=ce,P(Pe,ce,d(Pe.el),v(Pe),l,_,b),R.el=ce.el,G===null&&Yu(l,ce.el),F&&Ee(F,_),(ve=R.props&&R.props.onVnodeUpdated)&&Ee(()=>$e(ve,j,R,ee),_)}else{let R;const{el:D,props:F}=h,{bm:j,m:ee,parent:G,root:ve,type:ce}=l,Pe=Rn(h);if(Dt(l,!1),j&&ar(j),!Pe&&(R=F&&F.onVnodeBeforeMount)&&$e(R,G,h),Dt(l,!0),D&&ne){const ye=()=>{l.subTree=Zr(l),ne(D,l.subTree,l,_,null)};Pe&&ce.__asyncHydrate?ce.__asyncHydrate(D,l,ye):ye()}else{ve.ce&&ve.ce._injectChildStyle(ce);const ye=l.subTree=Zr(l);P(null,ye,g,y,l,_,b),h.el=ye.el}if(ee&&Ee(ee,_),!Pe&&(R=F&&F.onVnodeMounted)){const ye=h;Ee(()=>$e(R,G,ye),_)}(h.shapeFlag&256||G&&Rn(G.vnode)&&G.vnode.shapeFlag&256)&&l.a&&Ee(l.a,_),l.isMounted=!0,h=g=y=null}};l.scope.on();const w=l.effect=new aa(I);l.scope.off();const E=l.update=w.run.bind(w),L=l.job=w.runIfDirty.bind(w);L.i=l,L.id=l.uid,w.scheduler=()=>ni(L),Dt(l,!0),E()},Y=(l,h,g)=>{h.component=l;const y=l.vnode.props;l.vnode=h,l.next=null,Du(l,h.props,y,g),Uu(l,h.children,g),Rt(),Pi(l),Ct()},W=(l,h,g,y,_,b,S,I,w=!1)=>{const E=l&&l.children,L=l?l.shapeFlag:0,R=h.children,{patchFlag:D,shapeFlag:F}=h;if(D>0){if(D&128){ft(E,R,g,y,_,b,S,I,w);return}else if(D&256){qe(E,R,g,y,_,b,S,I,w);return}}F&8?(L&16&&Ae(E,_,b),R!==E&&f(g,R)):L&16?F&16?ft(E,R,g,y,_,b,S,I,w):Ae(E,_,b,!0):(L&8&&f(g,""),F&16&&Te(R,g,y,_,b,S,I,w))},qe=(l,h,g,y,_,b,S,I,w)=>{l=l||en,h=h||en;const E=l.length,L=h.length,R=Math.min(E,L);let D;for(D=0;D<R;D++){const F=h[D]=w?mt(h[D]):Be(h[D]);P(l[D],F,g,null,_,b,S,I,w)}E>L?Ae(l,_,b,!0,!1,R):Te(h,g,y,_,b,S,I,w,R)},ft=(l,h,g,y,_,b,S,I,w)=>{let E=0;const L=h.length;let R=l.length-1,D=L-1;for(;E<=R&&E<=D;){const F=l[E],j=h[E]=w?mt(h[E]):Be(h[E]);if(vn(F,j))P(F,j,g,null,_,b,S,I,w);else break;E++}for(;E<=R&&E<=D;){const F=l[R],j=h[D]=w?mt(h[D]):Be(h[D]);if(vn(F,j))P(F,j,g,null,_,b,S,I,w);else break;R--,D--}if(E>R){if(E<=D){const F=D+1,j=F<L?h[F].el:y;for(;E<=D;)P(null,h[E]=w?mt(h[E]):Be(h[E]),g,j,_,b,S,I,w),E++}}else if(E>D)for(;E<=R;)_e(l[E],_,b,!0),E++;else{const F=E,j=E,ee=new Map;for(E=j;E<=D;E++){const be=h[E]=w?mt(h[E]):Be(h[E]);be.key!=null&&ee.set(be.key,E)}let G,ve=0;const ce=D-j+1;let Pe=!1,ye=0;const mn=new Array(ce);for(E=0;E<ce;E++)mn[E]=0;for(E=F;E<=R;E++){const be=l[E];if(ve>=ce){_e(be,_,b,!0);continue}let Fe;if(be.key!=null)Fe=ee.get(be.key);else for(G=j;G<=D;G++)if(mn[G-j]===0&&vn(be,h[G])){Fe=G;break}Fe===void 0?_e(be,_,b,!0):(mn[Fe-j]=E+1,Fe>=ye?ye=Fe:Pe=!0,P(be,h[Fe],g,null,_,b,S,I,w),ve++)}const bi=Pe?Bu(mn):en;for(G=bi.length-1,E=ce-1;E>=0;E--){const be=j+E,Fe=h[be],Ei=be+1<L?h[be+1].el:y;mn[E]===0?P(null,Fe,g,Ei,_,b,S,I,w):Pe&&(G<0||E!==bi[G]?Ue(Fe,g,Ei,2):G--)}}},Ue=(l,h,g,y,_=null)=>{const{el:b,type:S,transition:I,children:w,shapeFlag:E}=l;if(E&6){Ue(l.component.subTree,h,g,y);return}if(E&128){l.suspense.move(h,g,y);return}if(E&64){S.move(l,h,g,N);return}if(S===Xe){r(b,h,g);for(let R=0;R<w.length;R++)Ue(w[R],h,g,y);r(l.anchor,h,g);return}if(S===es){M(l,h,g);return}if(y!==2&&E&1&&I)if(y===0)I.beforeEnter(b),r(b,h,g),Ee(()=>I.enter(b),_);else{const{leave:R,delayLeave:D,afterLeave:F}=I,j=()=>r(b,h,g),ee=()=>{R(b,()=>{j(),F&&F()})};D?D(b,j,ee):ee()}else r(b,h,g)},_e=(l,h,g,y=!1,_=!1)=>{const{type:b,props:S,ref:I,children:w,dynamicChildren:E,shapeFlag:L,patchFlag:R,dirs:D,cacheIndex:F}=l;if(R===-2&&(_=!1),I!=null&&bs(I,null,g,l,!0),F!=null&&(h.renderCache[F]=void 0),L&256){h.ctx.deactivate(l);return}const j=L&1&&D,ee=!Rn(l);let G;if(ee&&(G=S&&S.onVnodeBeforeUnmount)&&$e(G,h,l),L&6)Zn(l.component,g,y);else{if(L&128){l.suspense.unmount(g,y);return}j&&Nt(l,null,h,"beforeUnmount"),L&64?l.type.remove(l,h,g,N,y):E&&!E.hasOnce&&(b!==Xe||R>0&&R&64)?Ae(E,h,g,!1,!0):(b===Xe&&R&384||!_&&L&16)&&Ae(w,h,g),y&&zt(l)}(ee&&(G=S&&S.onVnodeUnmounted)||j)&&Ee(()=>{G&&$e(G,h,l),j&&Nt(l,null,h,"unmounted")},g)},zt=l=>{const{type:h,el:g,anchor:y,transition:_}=l;if(h===Xe){qt(g,y);return}if(h===es){O(l);return}const b=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(l.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:I}=_,w=()=>S(g,b);I?I(l.el,b,w):w()}else b()},qt=(l,h)=>{let g;for(;l!==h;)g=p(l),s(l),l=g;s(h)},Zn=(l,h,g)=>{const{bum:y,scope:_,job:b,subTree:S,um:I,m:w,a:E}=l;Ui(w),Ui(E),y&&ar(y),_.stop(),b&&(b.flags|=8,_e(S,l,h,g)),I&&Ee(I,h),Ee(()=>{l.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ae=(l,h,g,y=!1,_=!1,b=0)=>{for(let S=b;S<l.length;S++)_e(l[S],h,g,y,_)},v=l=>{if(l.shapeFlag&6)return v(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const h=p(l.anchor||l.el),g=h&&h[au];return g?p(g):h};let A=!1;const T=(l,h,g)=>{l==null?h._vnode&&_e(h._vnode,null,null,!0):P(h._vnode||null,l,h,null,null,null,g),h._vnode=l,A||(A=!0,Pi(),Aa(),A=!1)},N={p:P,um:_e,m:Ue,r:zt,mt:gn,mc:Te,pc:W,pbc:Ce,n:v,o:t};let q,ne;return{render:T,hydrate:q,createApp:ku(T,q)}}function Qr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qa(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=mt(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&qa(o,c)),c.type===$r&&(c.el=o.el)}}function Bu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ga(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ga(e)}function Ui(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ju=Symbol.for("v-scx"),Vu=()=>st(ju);function ur(t,e,n){return Ja(t,e,n)}function Ja(t,e,n=Q){const{immediate:r,deep:s,flush:i,once:o}=n,c=ae({},n);let a;if(Hr)if(i==="sync"){const p=Vu();a=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)c.once=!0;else{const p=()=>{};return p.stop=Ve,p.resume=Ve,p.pause=Ve,p}const u=le;c.call=(p,m,C)=>ze(p,u,m,C);let f=!1;i==="post"?c.scheduler=p=>{Ee(p,u&&u.suspense)}:i!=="sync"&&(f=!0,c.scheduler=(p,m)=>{m?p():ni(p)}),c.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=ru(t,e,c);return a&&a.push(d),d}function Wu(t,e,n){const r=this.proxy,s=ie(t)?t.includes(".")?Ya(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=Kn(this),c=Ja(s,i.bind(r),n);return o(),c}function Ya(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ku=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${Vt(e)}Modifiers`];function zu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&Ku(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ie(f)?f.trim():f)),o.number&&(s=n.map(gs)));let c,a=r[c=zr(e)]||r[c=zr(De(e))];!a&&i&&(a=r[c=zr(Vt(e))]),a&&ze(a,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,ze(u,t,6,s)}}function Xa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=u=>{const f=Xa(u,e,!0);f&&(c=!0,ae(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(re(t)&&r.set(t,null),null):($(i)?i.forEach(a=>o[a]=null):ae(o,i),re(t)&&r.set(t,o),o)}function Fr(t,e){return!t||!Or(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Vt(e))||K(t,e))}function Zr(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:u,renderCache:f,props:d,data:p,setupState:m,ctx:C,inheritAttrs:P}=t,H=yr(t);let x,k;try{if(n.shapeFlag&4){const O=s||r,V=O;x=Be(u.call(V,O,f,d,m,p,C)),k=c}else{const O=e;x=Be(O.length>1?O(d,{attrs:c,slots:o,emit:a}):O(d,null)),k=e.props?c:qu(c)}}catch(O){An.length=0,Lr(O,t,1),x=ge(Ht)}let M=x;if(k&&P!==!1){const O=Object.keys(k),{shapeFlag:V}=M;O.length&&V&7&&(i&&O.some(Hs)&&(k=Gu(k,i)),M=un(M,k,!1,!0))}return n.dirs&&(M=un(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&ri(M,n.transition),x=M,yr(H),x}const qu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Or(n))&&((e||(e={}))[n]=t[n]);return e},Gu=(t,e)=>{const n={};for(const r in t)(!Hs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ju(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Fi(r,o,u):!!o;if(a&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!Fr(u,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Fi(r,o,u):!0:!!o;return!1}function Fi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Fr(n,i))return!0}return!1}function Yu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Qa=t=>t.__isSuspense;function Xu(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):ou(t)}const Xe=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),es=Symbol.for("v-stc"),An=[];let Se=null;function Qe(t=!1){An.push(Se=t?null:[])}function Qu(){An.pop(),Se=An[An.length-1]||null}let Un=1;function $i(t){Un+=t,t<0&&Se&&(Se.hasOnce=!0)}function Za(t){return t.dynamicChildren=Un>0?Se||en:null,Qu(),Un>0&&Se&&Se.push(t),t}function Pn(t,e,n,r,s,i){return Za(Lt(t,e,n,r,s,i,!0))}function fr(t,e,n,r,s){return Za(ge(t,e,n,r,s,!0))}function Er(t){return t?t.__v_isVNode===!0:!1}function vn(t,e){return t.type===e.type&&t.key===e.key}const ec=({key:t})=>t??null,dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ie(t)||ue(t)||B(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function Lt(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ec(e),ref:e&&dr(e),scopeId:Oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return c?(oi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ie(n)?8:16),Un>0&&!o&&Se&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Se.push(a),a}const ge=Zu;function Zu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wu)&&(t=Ht),Er(t)){const c=un(t,e,!0);return n&&oi(c,n),Un>0&&!i&&Se&&(c.shapeFlag&6?Se[Se.indexOf(t)]=c:Se.push(c)),c.patchFlag=-2,c}if(ff(t)&&(t=t.__vccOpts),e){e=ef(e);let{class:c,style:a}=e;c&&!ie(c)&&(e.class=Ws(c)),re(a)&&(Zs(a)&&!$(a)&&(a=ae({},a)),e.style=Vs(a))}const o=ie(t)?1:Qa(t)?128:cu(t)?64:re(t)?4:B(t)?2:0;return Lt(t,e,n,r,s,o,i,!0)}function ef(t){return t?Zs(t)||Ha(t)?ae({},t):t:null}function un(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,u=e?tf(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ec(u),ref:e&&e.ref?n&&i?$(i)?i.concat(dr(e)):[i,dr(e)]:dr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&ri(f,a.clone(f)),f}function Ft(t=" ",e=0){return ge($r,null,t,e)}function yn(t="",e=!1){return e?(Qe(),fr(Ht,null,t)):ge(Ht,null,t)}function Be(t){return t==null||typeof t=="boolean"?ge(Ht):$(t)?ge(Xe,null,t.slice()):Er(t)?mt(t):ge($r,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function oi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),oi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ha(e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[Ft(e)]):n=8);t.children=e,t.shapeFlag|=n}function tf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ws([e.class,r.class]));else if(s==="style")e.style=Vs([e.style,r.style]);else if(Or(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $e(t,e,n,r=null){ze(t,e,7,[n,r])}const nf=Ua();let rf=0;function sf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nf,i={uid:rf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ja(r,s),emitsOptions:Xa(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=zu.bind(null,i),t.ce&&t.ce(i),i}let le=null,wr,Ts;{const t=na(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};wr=e("__VUE_INSTANCE_SETTERS__",n=>le=n),Ts=e("__VUE_SSR_SETTERS__",n=>Hr=n)}const Kn=t=>{const e=le;return wr(t),t.scope.on(),()=>{t.scope.off(),wr(e)}},Hi=()=>{le&&le.scope.off(),wr(null)};function tc(t){return t.vnode.shapeFlag&4}let Hr=!1;function of(t,e=!1,n=!1){e&&Ts(e);const{props:r,children:s}=t.vnode,i=tc(t);Nu(t,r,i,e),Lu(t,s,n);const o=i?af(t,e):void 0;return e&&Ts(!1),o}function af(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Su);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?lf(t):null,i=Kn(t);Rt();const o=Wn(r,t,0,[t.props,s]);if(Ct(),i(),Qo(o)){if(Rn(t)||Na(t),o.then(Hi,Hi),e)return o.then(c=>{Bi(t,c,e)}).catch(c=>{Lr(c,t,0)});t.asyncDep=o}else Bi(t,o,e)}else nc(t,e)}function Bi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=Sa(e)),nc(t,n)}let ji;function nc(t,e,n){const r=t.type;if(!t.render){if(!e&&ji&&!r.render){const s=r.template||si(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,u=ae(ae({isCustomElement:i,delimiters:c},o),a);r.render=ji(s,u)}}t.render=r.render||Ve}{const s=Kn(t);Rt();try{Tu(t)}finally{Ct(),s()}}}const cf={get(t,e){return fe(t,"get",""),t[e]}};function lf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cf),slots:t.slots,emit:t.emit,expose:e}}function Br(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sa(Jl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cn)return Cn[n](t)},has(e,n){return n in e||n in Cn}})):t.proxy}function uf(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function ff(t){return B(t)&&"__vccOpts"in t}const Oe=(t,e)=>tu(t,e,Hr);function rc(t,e,n){const r=arguments.length;return r===2?re(e)&&!$(e)?Er(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Er(n)&&(n=[n]),ge(t,e,n))}const df="3.5.9";/**
* @vue/runtime-dom v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rs;const Vi=typeof window<"u"&&window.trustedTypes;if(Vi)try{Rs=Vi.createPolicy("vue",{createHTML:t=>t})}catch{}const sc=Rs?t=>Rs.createHTML(t):t=>t,hf="http://www.w3.org/2000/svg",pf="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,Wi=Ye&&Ye.createElement("template"),gf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ye.createElementNS(hf,t):e==="mathml"?Ye.createElementNS(pf,t):n?Ye.createElement(t,{is:n}):Ye.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ye.createTextNode(t),createComment:t=>Ye.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ye.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wi.innerHTML=sc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Wi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mf=Symbol("_vtc");function _f(t,e,n){const r=t[mf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ki=Symbol("_vod"),vf=Symbol("_vsh"),yf=Symbol(""),bf=/(^|;)\s*display\s*:/;function Ef(t,e,n){const r=t.style,s=ie(n);let i=!1;if(n&&!s){if(e)if(ie(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&hr(r,c,"")}else for(const o in e)n[o]==null&&hr(r,o,"");for(const o in n)o==="display"&&(i=!0),hr(r,o,n[o])}else if(s){if(e!==n){const o=r[yf];o&&(n+=";"+o),r.cssText=n,i=bf.test(n)}}else e&&t.removeAttribute("style");Ki in t&&(t[Ki]=i?r.display:"",t[vf]&&(r.display="none"))}const zi=/\s*!important$/;function hr(t,e,n){if($(n))n.forEach(r=>hr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wf(t,e);zi.test(n)?t.setProperty(Vt(r),n.replace(zi,""),"important"):t[r]=n}}const qi=["Webkit","Moz","ms"],ts={};function wf(t,e){const n=ts[e];if(n)return n;let r=De(e);if(r!=="filter"&&r in t)return ts[e]=r;r=Dr(r);for(let s=0;s<qi.length;s++){const i=qi[s]+r;if(i in t)return ts[e]=i}return e}const Gi="http://www.w3.org/1999/xlink";function Ji(t,e,n,r,s,i=Tl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gi,e.slice(6,e.length)):t.setAttributeNS(Gi,e,n):n==null||i&&!ra(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tt(n)?String(n):n)}function If(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?sc(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=ra(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Yt(t,e,n,r){t.addEventListener(e,n,r)}function Sf(t,e,n,r){t.removeEventListener(e,n,r)}const Yi=Symbol("_vei");function Tf(t,e,n,r,s=null){const i=t[Yi]||(t[Yi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Rf(e);if(r){const u=i[e]=Pf(r,s);Yt(t,c,u,a)}else o&&(Sf(t,c,o,a),i[e]=void 0)}}const Xi=/(?:Once|Passive|Capture)$/;function Rf(t){let e;if(Xi.test(t)){e={};let r;for(;r=t.match(Xi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vt(t.slice(2)),e]}let ns=0;const Cf=Promise.resolve(),Af=()=>ns||(Cf.then(()=>ns=0),ns=Date.now());function Pf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Of(r,n.value),e,5,[r])};return n.value=t,n.attached=Af(),n}function Of(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?_f(t,r,o):e==="style"?Ef(t,n,r):Or(e)?Hs(e)||Tf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nf(t,e,r,o))?(If(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ji(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ji(t,e,r,o))};function Nf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qi(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qi(e)&&ie(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!ie(n)))}const Zi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>ar(e,n):e};function Df(t){t.target.composing=!0}function eo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rs=Symbol("_assign"),Km={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rs]=Zi(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=gs(c)),t[rs](c)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",Df),Yt(t,"compositionend",eo),Yt(t,"change",eo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[rs]=Zi(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?gs(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},Mf=["ctrl","shift","alt","meta"],xf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mf.some(n=>t[`${n}Key`]&&!e.includes(n))},zm=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=xf[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Lf=ae({patchProp:kf},gf);let to;function Uf(){return to||(to=Fu(Lf))}const Ff=(...t)=>{const e=Uf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,$f(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function $f(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Hf(t){return ie(t)?document.querySelector(t):t}var no={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,f=i>>2,d=(i&3)<<4|c>>4;let p=(c&15)<<2|u>>6,m=u&63;a||(m=64,o||(p=64)),r.push(n[f],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ic(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||d==null)throw new jf;const p=i<<2|c>>4;if(r.push(p),u!==64){const m=c<<4&240|u>>2;if(r.push(m),d!==64){const C=u<<6&192|d;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vf=function(t){const e=ic(t);return oc.encodeByteArray(e,!0)},ac=function(t){return Vf(t).replace(/\./g,"")},cc=function(t){try{return oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=()=>Wf().__FIREBASE_DEFAULTS__,zf=()=>{if(typeof process>"u"||typeof no>"u")return;const t=no.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cc(t[1]);return e&&JSON.parse(e)},ai=()=>{try{return Kf()||zf()||qf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gf=t=>{var e,n;return(n=(e=ai())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lc=()=>{var t;return(t=ai())===null||t===void 0?void 0:t.config},uc=t=>{var e;return(e=ai())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Xf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ed(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function td(){try{return typeof indexedDB=="object"}catch{return!1}}function nd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rd,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new At(s,c,r)}}function sd(t,e){return t.replace(id,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const id=/\{\$([^}]+)}/g;function od(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ro(i)&&ro(o)){if(!Ir(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ro(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function In(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ad(t,e){const n=new cd(t,e);return n.subscribe.bind(n)}class cd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ld(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ss),s.error===void 0&&(s.error=ss),s.complete===void 0&&(s.complete=ss);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ld(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ss(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dd(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fd(t){return t===xt?void 0:t}function dd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ud(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const pd={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},gd=X.INFO,md={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},_d=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=md[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fc{constructor(e){this.name=e,this._logLevel=gd,this._logHandler=_d,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const vd=(t,e)=>e.some(n=>t instanceof n);let so,io;function yd(){return so||(so=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bd(){return io||(io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dc=new WeakMap,Cs=new WeakMap,hc=new WeakMap,is=new WeakMap,ci=new WeakMap;function Ed(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dc.set(n,t)}).catch(()=>{}),ci.set(e,t),e}function wd(t){if(Cs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Cs.set(t,e)}let As={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Id(t){As=t(As)}function Sd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(os(this),e,...n);return hc.set(r,e.sort?e.sort():[e]),wt(r)}:bd().includes(t)?function(...e){return t.apply(os(this),e),wt(dc.get(this))}:function(...e){return wt(t.apply(os(this),e))}}function Td(t){return typeof t=="function"?Sd(t):(t instanceof IDBTransaction&&wd(t),vd(t,yd())?new Proxy(t,As):t)}function wt(t){if(t instanceof IDBRequest)return Ed(t);if(is.has(t))return is.get(t);const e=Td(t);return e!==t&&(is.set(t,e),ci.set(e,t)),e}const os=t=>ci.get(t);function Rd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=wt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(wt(o.result),a.oldVersion,a.newVersion,wt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Cd=["get","getKey","getAll","getAllKeys","count"],Ad=["put","add","delete","clear"],as=new Map;function oo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(as.get(e))return as.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ad.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cd.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&a.done]))[0]};return as.set(e,i),i}Id(t=>({...t,get:(e,n,r)=>oo(e,n)||t.get(e,n,r),has:(e,n)=>!!oo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Od(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Od(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ps="@firebase/app",ao="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new fc("@firebase/app"),kd="@firebase/app-compat",Nd="@firebase/analytics-compat",Dd="@firebase/analytics",Md="@firebase/app-check-compat",xd="@firebase/app-check",Ld="@firebase/auth",Ud="@firebase/auth-compat",Fd="@firebase/database",$d="@firebase/database-compat",Hd="@firebase/functions",Bd="@firebase/functions-compat",jd="@firebase/installations",Vd="@firebase/installations-compat",Wd="@firebase/messaging",Kd="@firebase/messaging-compat",zd="@firebase/performance",qd="@firebase/performance-compat",Gd="@firebase/remote-config",Jd="@firebase/remote-config-compat",Yd="@firebase/storage",Xd="@firebase/storage-compat",Qd="@firebase/firestore",Zd="@firebase/vertexai-preview",eh="@firebase/firestore-compat",th="firebase",nh="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="[DEFAULT]",rh={[Ps]:"fire-core",[kd]:"fire-core-compat",[Dd]:"fire-analytics",[Nd]:"fire-analytics-compat",[xd]:"fire-app-check",[Md]:"fire-app-check-compat",[Ld]:"fire-auth",[Ud]:"fire-auth-compat",[Fd]:"fire-rtdb",[$d]:"fire-rtdb-compat",[Hd]:"fire-fn",[Bd]:"fire-fn-compat",[jd]:"fire-iid",[Vd]:"fire-iid-compat",[Wd]:"fire-fcm",[Kd]:"fire-fcm-compat",[zd]:"fire-perf",[qd]:"fire-perf-compat",[Gd]:"fire-rc",[Jd]:"fire-rc-compat",[Yd]:"fire-gcs",[Xd]:"fire-gcs-compat",[Qd]:"fire-fst",[eh]:"fire-fst-compat",[Zd]:"fire-vertex","fire-js":"fire-js",[th]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Map,sh=new Map,ks=new Map;function co(t,e){try{t.container.addComponent(e)}catch(n){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(ks.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;ks.set(e,t);for(const n of Sr.values())co(n,t);for(const n of sh.values())co(n,t);return!0}function pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function je(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},It=new zn("app","Firebase",ih);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=nh;function gc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Os,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw It.create("bad-app-name",{appName:String(s)});if(n||(n=lc()),!n)throw It.create("no-options");const i=Sr.get(s);if(i){if(Ir(n,i.options)&&Ir(r,i.config))return i;throw It.create("duplicate-app",{appName:s})}const o=new hd(s);for(const a of ks.values())o.addComponent(a);const c=new oh(n,r,o);return Sr.set(s,c),c}function ah(t=Os){const e=Sr.get(t);if(!e&&t===Os&&lc())return gc();if(!e)throw It.create("no-app",{appName:t});return e}function on(t,e,n){var r;let s=(r=rh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(c.join(" "));return}Fn(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="firebase-heartbeat-database",lh=1,$n="firebase-heartbeat-store";let cs=null;function mc(){return cs||(cs=Rd(ch,lh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($n)}catch(n){console.warn(n)}}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),cs}async function uh(t){try{const n=(await mc()).transaction($n),r=await n.objectStore($n).get(_c(t));return await n.done,r}catch(e){if(e instanceof At)ot.warn(e.message);else{const n=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(n.message)}}}async function lo(t,e){try{const r=(await mc()).transaction($n,"readwrite");await r.objectStore($n).put(e,_c(t)),await r.done}catch(n){if(n instanceof At)ot.warn(n.message);else{const r=It.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ot.warn(r.message)}}}function _c(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=1024,dh=30*24*60*60*1e3;class hh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=uo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=dh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uo(),{heartbeatsToSend:r,unsentEntries:s}=ph(this._heartbeatsCache.heartbeats),i=ac(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ot.warn(n),""}}}function uo(){return new Date().toISOString().substring(0,10)}function ph(t,e=fh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return td()?nd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fo(t){return ac(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t){Fn(new fn("platform-logger",e=>new Pd(e),"PRIVATE")),Fn(new fn("heartbeat",e=>new hh(e),"PRIVATE")),on(Ps,ao,t),on(Ps,ao,"esm2017"),on("fire-js","")}mh("");function li(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _h=vc,yc=new zn("auth","Firebase",vc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new fc("@firebase/auth");function vh(t,...e){Tr.logLevel<=X.WARN&&Tr.warn(`Auth (${Gn}): ${t}`,...e)}function pr(t,...e){Tr.logLevel<=X.ERROR&&Tr.error(`Auth (${Gn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,...e){throw ui(t,...e)}function We(t,...e){return ui(t,...e)}function bc(t,e,n){const r=Object.assign(Object.assign({},_h()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function it(t){return bc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ui(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yc.create(t,...e)}function U(t,e,...n){if(!t)throw ui(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pr(e),new Error(e)}function at(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yh(){return ho()==="http:"||ho()==="https:"}function ho(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yh()||Qf()||"connection"in navigator)?navigator.onLine:!0}function Eh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=Yf()||Zf()}get(){return bh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new Jn(3e4,6e4);function Pt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ot(t,e,n,r,s={}){return wc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=qn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return Xf()||(u.referrerPolicy="no-referrer"),Ec.fetch()(Ic(t,t.config.apiHost,n,c),u)})}async function wc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wh),e);try{const s=new Th(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw or(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bc(t,f,u);Me(t,f)}}catch(s){if(s instanceof At)throw s;Me(t,"network-request-failed",{message:String(s)})}}async function Yn(t,e,n,r,s={}){const i=await Ot(t,e,n,r,s);return"mfaPendingCredential"in i&&Me(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ic(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fi(t.config,s):`${t.config.apiScheme}://${s}`}function Sh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Th{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),Ih.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=We(t,e,r);return s.customData._tokenResponse=n,s}function po(t){return t!==void 0&&t.enterprise!==void 0}class Rh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Sh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ch(t,e){return Ot(t,"GET","/v2/recaptchaConfig",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t,e){return Ot(t,"POST","/v1/accounts:delete",e)}async function Sc(t,e){return Ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ph(t,e=!1){const n=lt(t),r=await n.getIdToken(e),s=di(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(ls(s.auth_time)),issuedAtTime:On(ls(s.iat)),expirationTime:On(ls(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ls(t){return Number(t)*1e3}function di(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const s=cc(n);return s?JSON.parse(s):(pr("Failed to decode base64 JWT payload"),null)}catch(s){return pr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function go(t){const e=di(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&Oh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Oh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Hn(t,Sc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tc(i.providerUserInfo):[],c=Dh(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ds(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function Nh(t){const e=lt(t);await Rr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tc(t){return t.map(e=>{var{providerId:n}=e,r=li(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(t,e){const n=await wc(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ic(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ec.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xh(t,e){return Ot(t,"POST","/v2/accounts:revokeToken",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):go(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=go(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Mh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new an;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=li(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ds(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ph(this,e)}reload(){return Nh(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await Hn(this,Ah(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,H=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:O,isAnonymous:V,providerData:se,stsTokenManager:Z}=n;U(M&&Z,e,"internal-error");const Te=an.fromJSON(this.name,Z);U(typeof M=="string",e,"internal-error"),ht(d,e.name),ht(p,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof V=="boolean",e,"internal-error"),ht(m,e.name),ht(C,e.name),ht(P,e.name),ht(H,e.name),ht(x,e.name),ht(k,e.name);const Re=new tt({uid:M,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:V,photoURL:C,phoneNumber:m,tenantId:P,stsTokenManager:Te,createdAt:x,lastLoginAt:k});return se&&Array.isArray(se)&&(Re.providerData=se.map(Ce=>Object.assign({},Ce))),H&&(Re._redirectEventId=H),Re}static async _fromIdTokenResponse(e,n,r=!1){const s=new an;s.updateFromServerResponse(n);const i=new tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Rr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new an;c.updateFromIdToken(r);const a=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ds(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map;function nt(t){at(t instanceof Function,"Expected a class definition");let e=mo.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rc.type="NONE";const _o=Rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e,n){return`firebase:${t}:${e}:${n}`}class cn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gr(this.userKey,s.apiKey,i),this.fullPersistenceKey=gr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cn(nt(_o),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||nt(_o);const o=gr(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const d=tt._fromJSON(e,f);u!==i&&(c=d),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new cn(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new cn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nc(e))return"Blackberry";if(Dc(e))return"Webos";if(Ac(e))return"Safari";if((e.includes("chrome/")||Pc(e))&&!e.includes("edge/"))return"Chrome";if(kc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cc(t=me()){return/firefox\//i.test(t)}function Ac(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pc(t=me()){return/crios\//i.test(t)}function Oc(t=me()){return/iemobile/i.test(t)}function kc(t=me()){return/android/i.test(t)}function Nc(t=me()){return/blackberry/i.test(t)}function Dc(t=me()){return/webos/i.test(t)}function hi(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lh(t=me()){var e;return hi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uh(){return ed()&&document.documentMode===10}function Mc(t=me()){return hi(t)||kc(t)||Dc(t)||Nc(t)||/windows phone/i.test(t)||Oc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t,e=[]){let n;switch(t){case"Browser":n=vo(me());break;case"Worker":n=`${vo(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $h(t,e={}){return Ot(t,"GET","/v2/passwordPolicy",Pt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=6;class Bh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Hh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yo(this),this.idTokenSubscription=new yo(this),this.beforeStateQueue=new Fh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sc(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Eh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(it(this));const n=e?lt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $h(this),n=new Bh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wt(t){return lt(t)}class yo{constructor(e){this.auth=e,this.observer=null,this.addObserver=ad(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vh(t){jr=t}function Lc(t){return jr.loadJS(t)}function Wh(){return jr.recaptchaEnterpriseScript}function Kh(){return jr.gapiScript}function zh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qh="recaptcha-enterprise",Gh="NO_RECAPTCHA";class Jh{constructor(e){this.type=qh,this.auth=Wt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Ch(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Rh(a);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;po(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Gh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&po(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Wh();a.length!==0&&(a+=c),Lc(a).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function bo(t,e,n,r=!1){const s=new Jh(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ms(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await bo(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await bo(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t,e){const n=pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ir(i,e??{}))return s;Me(s,"already-initialized")}return n.initialize({options:e})}function Xh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qh(t,e,n){const r=Wt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Uc(e),{host:o,port:c}=Zh(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ep()}function Uc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zh(t){const e=Uc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Eo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Eo(o)}}}function Eo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ep(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function tp(t,e){return Ot(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}async function sp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends pi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ms(e,n,"signInWithPassword",np);case"emailLink":return rp(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ms(e,r,"signUpPassword",tp);case"emailLink":return sp(e,{idToken:n,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="http://localhost";class Bt extends pi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=li(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Bt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ln(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ln(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ln(e,n)}buildRequest(){const e={requestUri:ip,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ap(t){const e=wn(In(t)).link,n=e?wn(In(e)).deep_link_id:null,r=wn(In(t)).deep_link_id;return(r?wn(In(r)).link:null)||r||n||e||t}class gi{constructor(e){var n,r,s,i,o,c;const a=wn(In(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,d=op((s=a.mode)!==null&&s!==void 0?s:null);U(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=ap(e);try{return new gi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.providerId=pn.PROVIDER_ID}static credential(e,n){return Bn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gi.parseLink(n);return U(r,"argument-error"),Bn._fromEmailAndCode(e,r.code,r.tenantId)}}pn.PROVIDER_ID="password";pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Xn{constructor(){super("facebook.com")}static credential(e){return Bt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Xn{constructor(){super("github.com")}static credential(e){return Bt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Bt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(t,e){return Yn(t,"POST","/v1/accounts:signUp",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),o=wo(r);return new jt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wo(r);return new jt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends At{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Cr(e,n,r,s)}}function $c(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Cr._fromErrorAndOperation(t,i,e,r):i})}async function lp(t,e,n=!1){const r=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(t,e,n=!1){const{auth:r}=t;if(je(r.app))return Promise.reject(it(r));const s="reauthenticate";try{const i=await Hn(t,$c(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=di(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),jt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t,e,n=!1){if(je(t.app))return Promise.reject(it(t));const r="signIn",s=await $c(t,r,e),i=await jt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function fp(t,e){return Hc(Wt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(t){const e=Wt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qm(t,e,n){if(je(t.app))return Promise.reject(it(t));const r=Wt(t),o=await Ms(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cp).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Bc(t),a}),c=await jt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Gm(t,e,n){return je(t.app)?Promise.reject(it(t)):fp(lt(t),pn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bc(t),r})}function dp(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function hp(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function pp(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function gp(t){return lt(t).signOut()}const Ar="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ar,"1"),this.storage.removeItem(Ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=1e3,_p=10;class Vc extends jc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Uh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_p):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vc.type="LOCAL";const vp=Vc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends jc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wc.type="SESSION";const Kc=Wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),a=await yp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const u=mi("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function Ep(t){Ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function wp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ip(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sp(){return zc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="firebaseLocalStorageDb",Tp=1,Pr="firebaseLocalStorage",Gc="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wr(t,e){return t.transaction([Pr],e?"readwrite":"readonly").objectStore(Pr)}function Rp(){const t=indexedDB.deleteDatabase(qc);return new Qn(t).toPromise()}function xs(){const t=indexedDB.open(qc,Tp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pr,{keyPath:Gc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pr)?e(r):(r.close(),await Rp(),e(await xs()))})})}async function Io(t,e,n){const r=Wr(t,!0).put({[Gc]:e,value:n});return new Qn(r).toPromise()}async function Cp(t,e){const n=Wr(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function So(t,e){const n=Wr(t,!0).delete(e);return new Qn(n).toPromise()}const Ap=800,Pp=3;class Jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vr._getInstance(Sp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wp(),!this.activeServiceWorker)return;this.sender=new bp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ip()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xs();return await Io(e,Ar,"1"),await So(e,Ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Io(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>So(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wr(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jc.type="LOCAL";const Op=Jc;new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t,e){return e?nt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends pi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Np(t){return Hc(t.auth,new _i(t),t.bypassAuthState)}function Dp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),up(n,new _i(t),t.bypassAuthState)}async function Mp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),lp(n,new _i(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Np;case"linkViaPopup":case"linkViaRedirect":return Mp;case"reauthViaPopup":case"reauthViaRedirect":return Dp;default:Me(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new Jn(2e3,1e4);class Zt extends Yc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xp.get())};e()}}Zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="pendingRedirect",mr=new Map;class Up extends Yc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const r=await Fp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fp(t,e){const n=Bp(e),r=Hp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $p(t,e){mr.set(t._key(),e)}function Hp(t){return nt(t._redirectPersistence)}function Bp(t){return gr(Lp,t.config.apiKey,t.name)}async function jp(t,e,n=!1){if(je(t.app))return Promise.reject(it(t));const r=Wt(t),s=kp(r,e),o=await new Up(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=10*60*1e3;class Wp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vp&&this.cachedEventUids.clear(),this.cachedEventUids.has(To(e))}saveEventToCache(e){this.cachedEventUids.add(To(e)),this.lastProcessedEventTime=Date.now()}}function To(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(t,e={}){return Ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gp=/^https?/;async function Jp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zp(t);for(const n of e)try{if(Yp(n))return}catch{}Me(t,"unauthorized-domain")}function Yp(t){const e=Ns(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gp.test(n))return!1;if(qp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=new Jn(3e4,6e4);function Ro(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qp(t){return new Promise((e,n)=>{var r,s,i;function o(){Ro(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ro(),n(We(t,"network-request-failed"))},timeout:Xp.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)o();else{const c=zh("iframefcb");return Ke()[c]=()=>{gapi.load?o():n(We(t,"network-request-failed"))},Lc(`${Kh()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw _r=null,e})}let _r=null;function Zp(t){return _r=_r||Qp(t),_r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Jn(5e3,15e3),tg="__/auth/iframe",ng="emulator/auth/iframe",rg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ig(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fi(e,ng):`https://${t.config.authDomain}/${tg}`,r={apiKey:e.apiKey,appName:t.name,v:Gn},s=sg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function og(t){const e=await Zp(t),n=Ke().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:ig(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=We(t,"network-request-failed"),c=Ke().setTimeout(()=>{i(o)},eg.get());function a(){Ke().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cg=500,lg=600,ug="_blank",fg="http://localhost";class Co{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dg(t,e,n,r=cg,s=lg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},ag),{width:r.toString(),height:s.toString(),top:i,left:o}),u=me().toLowerCase();n&&(c=Pc(u)?ug:n),Cc(u)&&(e=e||fg,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[m,C])=>`${p}${m}=${C},`,"");if(Lh(u)&&c!=="_self")return hg(e||"",c),new Co(null);const d=window.open(e||"",c,f);U(d,t,"popup-blocked");try{d.focus()}catch{}return new Co(d)}function hg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="__/auth/handler",gg="emulator/auth/handler",mg=encodeURIComponent("fac");async function Ao(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gn,eventId:s};if(e instanceof Fc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",od(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Xn){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),u=a?`#${mg}=${encodeURIComponent(a)}`:"";return`${_g(t)}?${qn(c).slice(1)}${u}`}function _g({config:t}){return t.emulator?fi(t,gg):`https://${t.authDomain}/${pg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="webStorageSupport";class vg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kc,this._completeRedirectFn=jp,this._overrideRedirectResult=$p}async _openPopup(e,n,r,s){var i;at((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ao(e,n,r,Ns(),s);return dg(e,o,mi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ao(e,n,r,Ns(),s);return Ep(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(at(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await og(e),r=new Wp(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(us,{type:us},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[us];o!==void 0&&n(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mc()||Ac()||hi()}}const yg=vg;var Po="@firebase/auth",Oo="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wg(t){Fn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xc(t)},u=new jh(r,s,i,a);return Xh(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new fn("auth-internal",e=>{const n=Wt(e.getProvider("auth").getImmediate());return(r=>new bg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Po,Oo,Eg(t)),on(Po,Oo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=5*60,Sg=uc("authIdTokenMaxAge")||Ig;let ko=null;const Tg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Sg)return;const s=n==null?void 0:n.token;ko!==s&&(ko=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qc(t=ah()){const e=pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yh(t,{popupRedirectResolver:yg,persistence:[Op,vp,Kc]}),r=uc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Tg(i.toString());hp(n,o,()=>o(n.currentUser)),dp(n,c=>o(c))}}const s=Gf("auth");return s&&Qh(n,`http://${s}`),n}function Rg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Vh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=We("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Rg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wg("Browser");var Cg="firebase",Ag="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(Cg,Ag,"app");const Pg={apiKey:"AIzaSyAk7ckPN2plkX_pFWf1CNxfcmWzNPKZApA",authDomain:"authentication-ef6df.firebaseapp.com",projectId:"authentication-ef6df",storageBucket:"authentication-ef6df.appspot.com",messagingSenderId:"409543057265",appId:"1:409543057265:web:0f226bfe203d0fa54e60d0"},Og=gc(Pg),No=Qc(Og),Zc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},kg={data(){return{isLoggedIn:!1}},created(){pp(No,t=>{this.isLoggedIn=!!t})},methods:{async logout(){await gp(No),this.$router.push("/login")}}},Ng={key:1};function Dg(t,e,n,r,s,i){const o=Oi("router-link"),c=Oi("router-view");return Qe(),Pn("div",null,[s.isLoggedIn?yn("",!0):(Qe(),fr(o,{key:0,to:"/login"},{default:cr(()=>e[1]||(e[1]=[Ft("Login")])),_:1})),s.isLoggedIn?yn("",!0):(Qe(),Pn("hr",Ng)),s.isLoggedIn?yn("",!0):(Qe(),fr(o,{key:2,to:"/register"},{default:cr(()=>e[2]||(e[2]=[Ft("Sign Up")])),_:1})),s.isLoggedIn?(Qe(),fr(o,{key:3,to:"/"},{default:cr(()=>e[3]||(e[3]=[Ft("Home")])),_:1})):yn("",!0),ge(c),e[4]||(e[4]=Lt("br",null,null,-1)),s.isLoggedIn?(Qe(),Pn("button",{key:4,onClick:e[0]||(e[0]=(...a)=>i.logout&&i.logout(...a))},"Sign Out")):yn("",!0)])}const Mg=Zc(kg,[["render",Dg],["__scopeId","data-v-4714b61a"]]),xg="modulepreload",Lg=function(t){return"/"+t},Do={},fs=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(a=>{if(a=Lg(a),a in Do)return;Do[a]=!0;const u=a.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":xg,u||(d.as="script"),d.crossOrigin="",d.href=a,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof document<"u";function el(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ug(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&el(t.default)}const J=Object.assign;function ds(t,e){const n={};for(const r in e){const s=e[r];n[r]=xe(s)?s.map(t):t(s)}return n}const kn=()=>{},xe=Array.isArray,tl=/#/g,Fg=/&/g,$g=/\//g,Hg=/=/g,Bg=/\?/g,nl=/\+/g,jg=/%5B/g,Vg=/%5D/g,rl=/%5E/g,Wg=/%60/g,sl=/%7B/g,Kg=/%7C/g,il=/%7D/g,zg=/%20/g;function vi(t){return encodeURI(""+t).replace(Kg,"|").replace(jg,"[").replace(Vg,"]")}function qg(t){return vi(t).replace(sl,"{").replace(il,"}").replace(rl,"^")}function Ls(t){return vi(t).replace(nl,"%2B").replace(zg,"+").replace(tl,"%23").replace(Fg,"%26").replace(Wg,"`").replace(sl,"{").replace(il,"}").replace(rl,"^")}function Gg(t){return Ls(t).replace(Hg,"%3D")}function Jg(t){return vi(t).replace(tl,"%23").replace(Bg,"%3F")}function Yg(t){return t==null?"":Jg(t).replace($g,"%2F")}function jn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Xg=/\/$/,Qg=t=>t.replace(Xg,"");function hs(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=nm(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:jn(o)}}function Zg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function em(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&dn(e.matched[r],n.matched[s])&&ol(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function dn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ol(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tm(t[n],e[n]))return!1;return!0}function tm(t,e){return xe(t)?xo(t,e):xe(e)?xo(e,t):t===e}function xo(t,e){return xe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vn;(function(t){t.pop="pop",t.push="push"})(Vn||(Vn={}));var Nn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Nn||(Nn={}));function rm(t){if(!t)if(Xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qg(t)}const sm=/^[^#]+#/;function im(t,e){return t.replace(sm,"#")+e}function om(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Kr=()=>({left:window.scrollX,top:window.scrollY});function am(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=om(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lo(t,e){return(history.state?history.state.position-e:-1)+t}const Us=new Map;function cm(t,e){Us.set(t,e)}function lm(t){const e=Us.get(t);return Us.delete(t),e}let um=()=>location.protocol+"//"+location.host;function al(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Mo(a,"")}return Mo(n,t)+r+s}function fm(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=al(t,location),C=n.value,P=e.value;let H=0;if(p){if(n.value=m,e.value=p,o&&o===C){o=null;return}H=P?p.position-P.position:0}else r(m);s.forEach(x=>{x(n.value,C,{delta:H,type:Vn.pop,direction:H?H>0?Nn.forward:Nn.back:Nn.unknown})})};function a(){o=n.value}function u(p){s.push(p);const m=()=>{const C=s.indexOf(p);C>-1&&s.splice(C,1)};return i.push(m),m}function f(){const{history:p}=window;p.state&&p.replaceState(J({},p.state,{scroll:Kr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:u,destroy:d}}function Uo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Kr():null}}function dm(t){const{history:e,location:n}=window,r={value:al(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,u,f){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:um()+t+a;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function o(a,u){const f=J({},e.state,Uo(s.value.back,a,s.value.forward,!0),u,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,u){const f=J({},s.value,e.state,{forward:a,scroll:Kr()});i(f.current,f,!0);const d=J({},Uo(r.value,a,null),{position:f.position+1},u);i(a,d,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function hm(t){t=rm(t);const e=dm(t),n=fm(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:im.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pm(t){return typeof t=="string"||t&&typeof t=="object"}function cl(t){return typeof t=="string"||typeof t=="symbol"}const ll=Symbol("");var Fo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fo||(Fo={}));function hn(t,e){return J(new Error,{type:t,[ll]:!0},e)}function Je(t,e){return t instanceof Error&&ll in t&&(e==null||!!(t.type&e))}const $o="[^/]+?",gm={sensitive:!1,strict:!1,start:!0,end:!0},mm=/[.+*?^${}()[\]/\\]/g;function _m(t,e){const n=J({},gm,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(mm,"\\$&"),m+=40;else if(p.type===1){const{value:C,repeatable:P,optional:H,regexp:x}=p;i.push({name:C,repeatable:P,optional:H});const k=x||$o;if(k!==$o){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${C}" (${k}): `+O.message)}}let M=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(M=H&&u.length<2?`(?:/${M})`:"/"+M),H&&(M+="?"),s+=M,m+=20,H&&(m+=-8),P&&(m+=-20),k===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",C=i[p-1];d[C.name]=m&&C.repeatable?m.split("/"):m}return d}function a(u){let f="",d=!1;for(const p of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const m of p)if(m.type===0)f+=m.value;else if(m.type===1){const{value:C,repeatable:P,optional:H}=m,x=C in u?u[C]:"";if(xe(x)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const k=xe(x)?x.join("/"):x;if(!k)if(H)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function vm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ul(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ho(r))return 1;if(Ho(s))return-1}return s.length-r.length}function Ho(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ym={type:0,value:""},bm=/[a-zA-Z0-9_]/;function Em(t){if(!t)return[[]];if(t==="/")return[[ym]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:bm.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function wm(t,e,n){const r=_m(Em(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Im(t,e){const n=[],r=new Map;e=Wo({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const C=!m,P=jo(d);P.aliasOf=m&&m.record;const H=Wo(e,d),x=[P];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of O)x.push(jo(J({},P,{components:m?m.record.components:P.components,path:V,aliasOf:m?m.record:P})))}let k,M;for(const O of x){const{path:V}=O;if(p&&V[0]!=="/"){const se=p.record.path,Z=se[se.length-1]==="/"?"":"/";O.path=p.record.path+(V&&Z+V)}if(k=wm(O,p,H),m?m.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),C&&d.name&&!Vo(k)&&o(d.name)),fl(k)&&a(k),P.children){const se=P.children;for(let Z=0;Z<se.length;Z++)i(se[Z],k,m&&m.children[Z])}m=m||k}return M?()=>{o(M)}:kn}function o(d){if(cl(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function a(d){const p=Rm(d,n);n.splice(p,0,d),d.record.name&&!Vo(d)&&r.set(d.record.name,d)}function u(d,p){let m,C={},P,H;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw hn(1,{location:d});H=m.record.name,C=J(Bo(p.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),d.params&&Bo(d.params,m.keys.map(M=>M.name))),P=m.stringify(C)}else if(d.path!=null)P=d.path,m=n.find(M=>M.re.test(P)),m&&(C=m.parse(P),H=m.record.name);else{if(m=p.name?r.get(p.name):n.find(M=>M.re.test(p.path)),!m)throw hn(1,{location:d,currentLocation:p});H=m.record.name,C=J({},p.params,d.params),P=m.stringify(C)}const x=[];let k=m;for(;k;)x.unshift(k.record),k=k.parent;return{name:H,path:P,params:C,matched:x,meta:Tm(x)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Bo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Sm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Sm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Tm(t){return t.reduce((e,n)=>J(e,n.meta),{})}function Wo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Rm(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ul(t,e[i])<0?r=i:n=i+1}const s=Cm(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Cm(t){let e=t;for(;e=e.parent;)if(fl(e)&&ul(t,e)===0)return e}function fl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Am(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(nl," "),o=i.indexOf("="),c=jn(o<0?i:i.slice(0,o)),a=o<0?null:jn(i.slice(o+1));if(c in e){let u=e[c];xe(u)||(u=e[c]=[u]),u.push(a)}else e[c]=a}return e}function Ko(t){let e="";for(let n in t){const r=t[n];if(n=Gg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(xe(r)?r.map(i=>i&&Ls(i)):[r&&Ls(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Pm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Om=Symbol(""),zo=Symbol(""),yi=Symbol(""),dl=Symbol(""),Fs=Symbol("");function bn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _t(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const u=p=>{p===!1?a(hn(4,{from:n,to:e})):p instanceof Error?a(p):pm(p)?a(hn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(p=>a(p))})}function ps(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(el(a)){const f=(a.__vccOpts||a)[e];f&&i.push(_t(f,n,r,o,c,s))}else{let u=a();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=Ug(f)?f.default:f;o.mods[c]=f,o.components[c]=d;const m=(d.__vccOpts||d)[e];return m&&_t(m,n,r,o,c,s)()}))}}return i}function qo(t){const e=st(yi),n=st(dl),r=Oe(()=>{const a=nn(t.to);return e.resolve(a)}),s=Oe(()=>{const{matched:a}=r.value,{length:u}=a,f=a[u-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(dn.bind(null,f));if(p>-1)return p;const m=Go(a[u-2]);return u>1&&Go(f)===m&&d[d.length-1].path!==m?d.findIndex(dn.bind(null,a[u-2])):p}),i=Oe(()=>s.value>-1&&Mm(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&ol(n.params,r.value.params));function c(a={}){return Dm(a)?e[nn(t.replace)?"replace":"push"](nn(t.to)).catch(kn):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const km=ka({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qo,setup(t,{slots:e}){const n=xr(qo(t)),{options:r}=st(yi),s=Oe(()=>({[Jo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Jo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:rc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Nm=km;function Dm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!xe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Go(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jo=(t,e,n)=>t??e??n,xm=ka({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=st(Fs),s=Oe(()=>t.route||r.value),i=st(zo,0),o=Oe(()=>{let u=nn(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),c=Oe(()=>s.value.matched[o.value]);lr(zo,Oe(()=>o.value+1)),lr(Om,c),lr(Fs,s);const a=Yl();return ur(()=>[a.value,c.value,t.name],([u,f,d],[p,m,C])=>{f&&(f.instances[d]=u,m&&m!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!dn(f,m)||!p)&&(f.enterCallbacks[d]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=c.value,p=d&&d.components[f];if(!p)return Yo(n.default,{Component:p,route:u});const m=d.props[f],C=m?m===!0?u.params:typeof m=="function"?m(u):m:null,H=rc(p,J({},C,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[f]=null)},ref:a}));return Yo(n.default,{Component:H,route:u})||H}}});function Yo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lm=xm;function Um(t){const e=Im(t.routes,t),n=t.parseQuery||Am,r=t.stringifyQuery||Ko,s=t.history,i=bn(),o=bn(),c=bn(),a=Xl(pt);let u=pt;Xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ds.bind(null,v=>""+v),d=ds.bind(null,Yg),p=ds.bind(null,jn);function m(v,A){let T,N;return cl(v)?(T=e.getRecordMatcher(v),N=A):N=v,e.addRoute(N,T)}function C(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function H(v){return!!e.getRecordMatcher(v)}function x(v,A){if(A=J({},A||a.value),typeof v=="string"){const h=hs(n,v,A.path),g=e.resolve({path:h.path},A),y=s.createHref(h.fullPath);return J(h,g,{params:p(g.params),hash:jn(h.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=J({},v,{path:hs(n,v.path,A.path).path});else{const h=J({},v.params);for(const g in h)h[g]==null&&delete h[g];T=J({},v,{params:d(h)}),A.params=d(A.params)}const N=e.resolve(T,A),q=v.hash||"";N.params=f(p(N.params));const ne=Zg(r,J({},v,{hash:qg(q),path:N.path})),l=s.createHref(ne);return J({fullPath:ne,hash:q,query:r===Ko?Pm(v.query):v.query||{}},N,{redirectedFrom:void 0,href:l})}function k(v){return typeof v=="string"?hs(n,v,a.value.path):J({},v)}function M(v,A){if(u!==v)return hn(8,{from:A,to:v})}function O(v){return Z(v)}function V(v){return O(J(k(v),{replace:!0}))}function se(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let N=typeof T=="function"?T(v):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=k(N):{path:N},N.params={}),J({query:v.query,hash:v.hash,params:N.path!=null?{}:v.params},N)}}function Z(v,A){const T=u=x(v),N=a.value,q=v.state,ne=v.force,l=v.replace===!0,h=se(T);if(h)return Z(J(k(h),{state:typeof h=="object"?J({},q,h.state):q,force:ne,replace:l}),A||T);const g=T;g.redirectedFrom=A;let y;return!ne&&em(r,N,T)&&(y=hn(16,{to:g,from:N}),Ue(N,N,!0,!1)),(y?Promise.resolve(y):Ce(g,N)).catch(_=>Je(_)?Je(_,2)?_:ft(_):W(_,g,N)).then(_=>{if(_){if(Je(_,2))return Z(J({replace:l},k(_.to),{state:typeof _.to=="object"?J({},q,_.to.state):q,force:ne}),A||g)}else _=kt(g,N,!0,l,q);return ut(g,N,_),_})}function Te(v,A){const T=M(v,A);return T?Promise.reject(T):Promise.resolve()}function Re(v){const A=qt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Ce(v,A){let T;const[N,q,ne]=Fm(v,A);T=ps(N.reverse(),"beforeRouteLeave",v,A);for(const h of N)h.leaveGuards.forEach(g=>{T.push(_t(g,v,A))});const l=Te.bind(null,v,A);return T.push(l),Ae(T).then(()=>{T=[];for(const h of i.list())T.push(_t(h,v,A));return T.push(l),Ae(T)}).then(()=>{T=ps(q,"beforeRouteUpdate",v,A);for(const h of q)h.updateGuards.forEach(g=>{T.push(_t(g,v,A))});return T.push(l),Ae(T)}).then(()=>{T=[];for(const h of ne)if(h.beforeEnter)if(xe(h.beforeEnter))for(const g of h.beforeEnter)T.push(_t(g,v,A));else T.push(_t(h.beforeEnter,v,A));return T.push(l),Ae(T)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),T=ps(ne,"beforeRouteEnter",v,A,Re),T.push(l),Ae(T))).then(()=>{T=[];for(const h of o.list())T.push(_t(h,v,A));return T.push(l),Ae(T)}).catch(h=>Je(h,8)?h:Promise.reject(h))}function ut(v,A,T){c.list().forEach(N=>Re(()=>N(v,A,T)))}function kt(v,A,T,N,q){const ne=M(v,A);if(ne)return ne;const l=A===pt,h=Xt?history.state:{};T&&(N||l?s.replace(v.fullPath,J({scroll:l&&h&&h.scroll},q)):s.push(v.fullPath,q)),a.value=v,Ue(v,A,T,l),ft()}let Le;function gn(){Le||(Le=s.listen((v,A,T)=>{if(!Zn.listening)return;const N=x(v),q=se(N);if(q){Z(J(q,{replace:!0}),N).catch(kn);return}u=N;const ne=a.value;Xt&&cm(Lo(ne.fullPath,T.delta),Kr()),Ce(N,ne).catch(l=>Je(l,12)?l:Je(l,2)?(Z(l.to,N).then(h=>{Je(h,20)&&!T.delta&&T.type===Vn.pop&&s.go(-1,!1)}).catch(kn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),W(l,N,ne))).then(l=>{l=l||kt(N,ne,!1),l&&(T.delta&&!Je(l,8)?s.go(-T.delta,!1):T.type===Vn.pop&&Je(l,20)&&s.go(-1,!1)),ut(N,ne,l)}).catch(kn)}))}let Kt=bn(),oe=bn(),Y;function W(v,A,T){ft(v);const N=oe.list();return N.length?N.forEach(q=>q(v,A,T)):console.error(v),Promise.reject(v)}function qe(){return Y&&a.value!==pt?Promise.resolve():new Promise((v,A)=>{Kt.add([v,A])})}function ft(v){return Y||(Y=!v,gn(),Kt.list().forEach(([A,T])=>v?T(v):A()),Kt.reset()),v}function Ue(v,A,T,N){const{scrollBehavior:q}=t;if(!Xt||!q)return Promise.resolve();const ne=!T&&lm(Lo(v.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return Ra().then(()=>q(v,A,ne)).then(l=>l&&am(l)).catch(l=>W(l,v,A))}const _e=v=>s.go(v);let zt;const qt=new Set,Zn={currentRoute:a,listening:!0,addRoute:m,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:P,resolve:x,options:t,push:O,replace:V,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:oe.add,isReady:qe,install(v){const A=this;v.component("RouterLink",Nm),v.component("RouterView",Lm),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(a)}),Xt&&!zt&&a.value===pt&&(zt=!0,O(s.location).catch(q=>{}));const T={};for(const q in pt)Object.defineProperty(T,q,{get:()=>a.value[q],enumerable:!0});v.provide(yi,A),v.provide(dl,Ea(T)),v.provide(Fs,a);const N=v.unmount;qt.add(v),v.unmount=function(){qt.delete(v),qt.size<1&&(u=pt,Le&&Le(),Le=null,a.value=pt,zt=!1,Y=!1),N()}}};function Ae(v){return v.reduce((A,T)=>A.then(()=>Re(T)),Promise.resolve())}return Zn}function Fm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>dn(u,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(u=>dn(u,a))||s.push(a))}return[n,r,s]}const $m={class:"greetings"},Hm={class:"green"},Bm={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(Qe(),Pn("div",$m,[Lt("h1",Hm,ia(t.msg),1),n[0]||(n[0]=Lt("h3",null,[Ft(" You’ve successfully created a project with "),Lt("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),Ft(" + "),Lt("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),Ft(". ")],-1))]))}},jm=Zc(Bm,[["__scopeId","data-v-531db362"]]),Vm={__name:"HomeView",setup(t){return(e,n)=>(Qe(),Pn("main",null,[ge(jm,{msg:"You did it!"})]))}},hl=Um({history:hm("/"),routes:[{path:"/",name:"home",component:Vm,meta:{requiredAuth:!0}},{path:"/about",name:"about",component:()=>fs(()=>import("./AboutView-BVjzRsh9.js"),__vite__mapDeps([0,1]))},{path:"/login",name:"login",component:()=>fs(()=>import("./LoginView-D2DO5o00.js"),[])},{path:"/register",name:"register",component:()=>fs(()=>import("./RegisterView-CyUlz81C.js"),[])}]});hl.beforeEach((t,e,n)=>{const s=Qc().currentUser;t.meta.requiredAuth&&!s?n({name:"login",query:{redirect:t.fullPath}}):n()});const pl=Ff(Mg);pl.use(hl);pl.mount("#app");export{Zc as _,Lt as a,No as b,Pn as c,zm as d,qm as e,Qe as o,Gm as s,Km as v,Wm as w};
