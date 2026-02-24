(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Se={},Mr=[],Kt=()=>{},of=()=>!1,Uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wl=t=>t.startsWith("onUpdate:"),ht=Object.assign,zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d_=Object.prototype.hasOwnProperty,Ae=(t,e)=>d_.call(t,e),ce=Array.isArray,Lr=t=>li(t)==="[object Map]",Bo=t=>li(t)==="[object Set]",ah=t=>li(t)==="[object Date]",fe=t=>typeof t=="function",He=t=>typeof t=="string",Zt=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",af=t=>(Pe(t)||fe(t))&&fe(t.then)&&fe(t.catch),lf=Object.prototype.toString,li=t=>lf.call(t),f_=t=>li(t).slice(8,-1),cf=t=>li(t)==="[object Object]",Kl=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vs=Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$o=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},p_=/-\w/g,Hn=$o(t=>t.replace(p_,e=>e.slice(1).toUpperCase())),g_=/\B([A-Z])/g,Tr=$o(t=>t.replace(g_,"-$1").toLowerCase()),uf=$o(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oa=$o(t=>t?`on${uf(t)}`:""),Bn=(t,e)=>!Object.is(t,e),Xi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let lh;const qo=()=>lh||(lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?v_(r):Gl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Pe(t))return t}const m_=/;(?![^(]*\))/g,__=/:([^]+)/,y_=/\/\*[^]*?\*\//g;function v_(t){const e={};return t.replace(y_,"").split(m_).forEach(n=>{if(n){const r=n.split(__);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Wr(t){let e="";if(He(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Wr(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const E_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",T_=Hl(E_);function df(t){return!!t||t===""}function w_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ho(t[r],e[r]);return n}function Ho(t,e){if(t===e)return!0;let n=ah(t),r=ah(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Zt(t),r=Zt(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?w_(t,e):!1;if(n=Pe(t),r=Pe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Ho(t[a],e[a]))return!1}}return String(t)===String(e)}function I_(t,e){return t.findIndex(n=>Ho(n,e))}const ff=t=>!!(t&&t.__v_isRef===!0),pe=t=>He(t)?t:t==null?"":ce(t)||Pe(t)&&(t.toString===lf||!fe(t.toString))?ff(t)?pe(t.value):JSON.stringify(t,pf,2):String(t),pf=(t,e)=>ff(e)?pf(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xa(r,i)+" =>"]=s,n),{})}:Bo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xa(n))}:Zt(e)?xa(e):Pe(e)&&!ce(e)&&!cf(e)?String(e):e,xa=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vt;class A_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){++this._on===1&&(this.prevScope=vt,vt=this)}off(){this._on>0&&--this._on===0&&(vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function b_(){return vt}let Ce;const Ma=new WeakSet;class gf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vt&&vt.active&&vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ma.has(this)&&(Ma.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_f(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ch(this),yf(this);const e=Ce,n=xt;Ce=this,xt=!0;try{return this.fn()}finally{vf(this),Ce=e,xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jl(e);this.deps=this.depsTail=void 0,ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ma.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sl(this)&&this.run()}get dirty(){return sl(this)}}let mf=0,Ns,Os;function _f(t,e=!1){if(t.flags|=8,e){t.next=Os,Os=t;return}t.next=Ns,Ns=t}function Ql(){mf++}function Yl(){if(--mf>0)return;if(Os){let e=Os;for(Os=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ns;){let e=Ns;for(Ns=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function yf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Jl(r),R_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function sl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ef(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ef(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ks)||(t.globalVersion=Ks,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!sl(t))))return;t.flags|=2;const e=t.dep,n=Ce,r=xt;Ce=t,xt=!0;try{yf(t);const s=t.fn(t._value);(e.version===0||Bn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ce=n,xt=r,vf(t),t.flags&=-3}}function Jl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Jl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function R_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let xt=!0;const Tf=[];function yn(){Tf.push(xt),xt=!1}function vn(){const t=Tf.pop();xt=t===void 0?!0:t}function ch(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ce;Ce=void 0;try{e()}finally{Ce=n}}}let Ks=0;class S_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ce||!xt||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new S_(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,wf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=r)}return n}trigger(e){this.version++,Ks++,this.notify(e)}notify(e){Ql();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Yl()}}}function wf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)wf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const il=new WeakMap,ur=Symbol(""),ol=Symbol(""),Gs=Symbol("");function lt(t,e,n){if(xt&&Ce){let r=il.get(t);r||il.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xl),s.map=r,s.key=n),s.track()}}function un(t,e,n,r,s,i){const a=il.get(t);if(!a){Ks++;return}const l=c=>{c&&c.trigger()};if(Ql(),e==="clear")a.forEach(l);else{const c=ce(t),h=c&&Kl(n);if(c&&n==="length"){const f=Number(r);a.forEach((g,y)=>{(y==="length"||y===Gs||!Zt(y)&&y>=f)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Gs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(ur)),Lr(t)&&l(a.get(ol)));break;case"delete":c||(l(a.get(ur)),Lr(t)&&l(a.get(ol)));break;case"set":Lr(t)&&l(a.get(ur));break}}Yl()}function Dr(t){const e=Ie(t);return e===t?e:(lt(e,"iterate",Gs),Vt(t)?e:e.map(Ft))}function Wo(t){return lt(t=Ie(t),"iterate",Gs),t}function Vn(t,e){return En(t)?zr(hr(t)?Ft(e):e):Ft(e)}const C_={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,t=>Vn(this,t))},concat(...t){return Dr(this).concat(...t.map(e=>ce(e)?Dr(e):e))},entries(){return La(this,"entries",t=>(t[1]=Vn(this,t[1]),t))},every(t,e){return ln(this,"every",t,e,void 0,arguments)},filter(t,e){return ln(this,"filter",t,e,n=>n.map(r=>Vn(this,r)),arguments)},find(t,e){return ln(this,"find",t,e,n=>Vn(this,n),arguments)},findIndex(t,e){return ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ln(this,"findLast",t,e,n=>Vn(this,n),arguments)},findLastIndex(t,e){return ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return Fa(this,"includes",t)},indexOf(...t){return Fa(this,"indexOf",t)},join(t){return Dr(this).join(t)},lastIndexOf(...t){return Fa(this,"lastIndexOf",t)},map(t,e){return ln(this,"map",t,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...t){return Is(this,"push",t)},reduce(t,...e){return uh(this,"reduce",t,e)},reduceRight(t,...e){return uh(this,"reduceRight",t,e)},shift(){return Is(this,"shift")},some(t,e){return ln(this,"some",t,e,void 0,arguments)},splice(...t){return Is(this,"splice",t)},toReversed(){return Dr(this).toReversed()},toSorted(t){return Dr(this).toSorted(t)},toSpliced(...t){return Dr(this).toSpliced(...t)},unshift(...t){return Is(this,"unshift",t)},values(){return La(this,"values",t=>Vn(this,t))}};function La(t,e,n){const r=Wo(t),s=r[e]();return r!==t&&!Vt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const P_=Array.prototype;function ln(t,e,n,r,s,i){const a=Wo(t),l=a!==t&&!Vt(t),c=a[e];if(c!==P_[e]){const g=c.apply(t,i);return l?Ft(g):g}let h=n;a!==t&&(l?h=function(g,y){return n.call(this,Vn(t,g),y,t)}:n.length>2&&(h=function(g,y){return n.call(this,g,y,t)}));const f=c.call(a,h,r);return l&&s?s(f):f}function uh(t,e,n,r){const s=Wo(t);let i=n;return s!==t&&(Vt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,Vn(t,l),c,t)}),s[e](i,...r)}function Fa(t,e,n){const r=Ie(t);lt(r,"iterate",Gs);const s=r[e](...n);return(s===-1||s===!1)&&nc(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Is(t,e,n=[]){yn(),Ql();const r=Ie(t)[e].apply(t,n);return Yl(),vn(),r}const k_=Hl("__proto__,__v_isRef,__isVue"),If=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function D_(t){Zt(t)||(t=String(t));const e=Ie(this);return lt(e,"has",t),e.hasOwnProperty(t)}class Af{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?$_:Cf:i?Sf:Rf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ce(e);if(!s){let c;if(a&&(c=C_[n]))return c;if(n==="hasOwnProperty")return D_}const l=Reflect.get(e,n,ut(e)?e:r);if((Zt(n)?If.has(n):k_(n))||(s||lt(e,"get",n),i))return l;if(ut(l)){const c=a&&Kl(n)?l:l.value;return s&&Pe(c)?ll(c):c}return Pe(l)?s?ll(l):ec(l):l}}class bf extends Af{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=ce(e)&&Kl(n);if(!this._isShallow){const h=En(i);if(!Vt(r)&&!En(r)&&(i=Ie(i),r=Ie(r)),!a&&ut(i)&&!ut(r))return h||(i.value=r),!0}const l=a?Number(n)<e.length:Ae(e,n),c=Reflect.set(e,n,r,ut(e)?e:s);return e===Ie(s)&&(l?Bn(r,i)&&un(e,"set",n,r):un(e,"add",n,r)),c}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zt(n)||!If.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",ce(e)?"length":ur),Reflect.ownKeys(e)}}class V_ extends Af{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const N_=new bf,O_=new V_,x_=new bf(!0);const al=t=>t,Bi=t=>Reflect.getPrototypeOf(t);function M_(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),a=Lr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),f=n?al:e?zr:Ft;return!e&&lt(i,"iterate",c?ol:ur),ht(Object.create(h),{next(){const{value:g,done:y}=h.next();return y?{value:g,done:y}:{value:l?[f(g[0]),f(g[1])]:f(g),done:y}}})}}function $i(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function L_(t,e){const n={get(s){const i=this.__v_raw,a=Ie(i),l=Ie(s);t||(Bn(s,l)&&lt(a,"get",s),lt(a,"get",l));const{has:c}=Bi(a),h=e?al:t?zr:Ft;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&lt(Ie(s),"iterate",ur),s.size},has(s){const i=this.__v_raw,a=Ie(i),l=Ie(s);return t||(Bn(s,l)&&lt(a,"has",s),lt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ie(l),h=e?al:t?zr:Ft;return!t&&lt(c,"iterate",ur),l.forEach((f,g)=>s.call(i,h(f),h(g),a))}};return ht(n,t?{add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear")}:{add(s){!e&&!Vt(s)&&!En(s)&&(s=Ie(s));const i=Ie(this);return Bi(i).has.call(i,s)||(i.add(s),un(i,"add",s,s)),this},set(s,i){!e&&!Vt(i)&&!En(i)&&(i=Ie(i));const a=Ie(this),{has:l,get:c}=Bi(a);let h=l.call(a,s);h||(s=Ie(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?Bn(i,f)&&un(a,"set",s,i):un(a,"add",s,i),this},delete(s){const i=Ie(this),{has:a,get:l}=Bi(i);let c=a.call(i,s);c||(s=Ie(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&un(i,"delete",s,void 0),h},clear(){const s=Ie(this),i=s.size!==0,a=s.clear();return i&&un(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=M_(s,t,e)}),n}function Zl(t,e){const n=L_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const F_={get:Zl(!1,!1)},U_={get:Zl(!1,!0)},B_={get:Zl(!0,!1)};const Rf=new WeakMap,Sf=new WeakMap,Cf=new WeakMap,$_=new WeakMap;function j_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function q_(t){return t.__v_skip||!Object.isExtensible(t)?0:j_(f_(t))}function ec(t){return En(t)?t:tc(t,!1,N_,F_,Rf)}function H_(t){return tc(t,!1,x_,U_,Sf)}function ll(t){return tc(t,!0,O_,B_,Cf)}function tc(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=q_(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function hr(t){return En(t)?hr(t.__v_raw):!!(t&&t.__v_isReactive)}function En(t){return!!(t&&t.__v_isReadonly)}function Vt(t){return!!(t&&t.__v_isShallow)}function nc(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function W_(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&hf(t,"__v_skip",!0),t}const Ft=t=>Pe(t)?ec(t):t,zr=t=>Pe(t)?ll(t):t;function ut(t){return t?t.__v_isRef===!0:!1}function Ke(t){return z_(t,!1)}function z_(t,e){return ut(t)?t:new K_(t,e)}class K_{constructor(e,n){this.dep=new Xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:Ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Vt(e)||En(e);e=r?e:Ie(e),Bn(e,n)&&(this._rawValue=e,this._value=r?e:Ft(e),this.dep.trigger())}}function G_(t){return ut(t)?t.value:t}const Q_={get:(t,e,n)=>e==="__v_raw"?t:G_(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pf(t){return hr(t)?t:new Proxy(t,Q_)}class Y_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return _f(this,!0),!0}get value(){const e=this.dep.track();return Ef(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function J_(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Y_(r,s,n)}const ji={},go=new WeakMap;let ir;function X_(t,e=!1,n=ir){if(n){let r=go.get(n);r||go.set(n,r=[]),r.push(t)}}function Z_(t,e,n=Se){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=m=>s?m:Vt(m)||s===!1||s===0?hn(m,1):hn(m);let f,g,y,S,N=!1,M=!1;if(ut(t)?(g=()=>t.value,N=Vt(t)):hr(t)?(g=()=>h(t),N=!0):ce(t)?(M=!0,N=t.some(m=>hr(m)||Vt(m)),g=()=>t.map(m=>{if(ut(m))return m.value;if(hr(m))return h(m);if(fe(m))return c?c(m,2):m()})):fe(t)?e?g=c?()=>c(t,2):t:g=()=>{if(y){yn();try{y()}finally{vn()}}const m=ir;ir=f;try{return c?c(t,3,[S]):t(S)}finally{ir=m}}:g=Kt,e&&s){const m=g,j=s===!0?1/0:s;g=()=>hn(m(),j)}const O=b_(),z=()=>{f.stop(),O&&O.active&&zl(O.effects,f)};if(i&&e){const m=e;e=(...j)=>{m(...j),z()}}let Q=M?new Array(t.length).fill(ji):ji;const k=m=>{if(!(!(f.flags&1)||!f.dirty&&!m))if(e){const j=f.run();if(s||N||(M?j.some((re,A)=>Bn(re,Q[A])):Bn(j,Q))){y&&y();const re=ir;ir=f;try{const A=[j,Q===ji?void 0:M&&Q[0]===ji?[]:Q,S];Q=j,c?c(e,3,A):e(...A)}finally{ir=re}}}else f.run()};return l&&l(k),f=new gf(g),f.scheduler=a?()=>a(k,!1):k,S=m=>X_(m,!1,f),y=f.onStop=()=>{const m=go.get(f);if(m){if(c)c(m,4);else for(const j of m)j();go.delete(f)}},e?r?k(!0):Q=f.run():a?a(k.bind(null,!0),!0):f.run(),z.pause=f.pause.bind(f),z.resume=f.resume.bind(f),z.stop=z,z}function hn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ut(t))hn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)hn(t[r],e,n);else if(Bo(t)||Lr(t))t.forEach(r=>{hn(r,e,n)});else if(cf(t)){for(const r in t)hn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&hn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(t,e,n,r){try{return r?t(...r):t()}catch(s){zo(s,e,n)}}function en(t,e,n,r){if(fe(t)){const s=ci(t,e,n,r);return s&&af(s)&&s.catch(i=>{zo(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(en(t[i],e,n,r));return s}}function zo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Se;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](t,c,h)===!1)return}l=l.parent}if(i){yn(),ci(i,null,10,[t,c,h]),vn();return}}ey(t,n,s,r,a)}function ey(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const mt=[];let qt=-1;const Fr=[];let Nn=null,Vr=0;const kf=Promise.resolve();let mo=null;function Df(t){const e=mo||kf;return t?e.then(this?t.bind(this):t):e}function ty(t){let e=qt+1,n=mt.length;for(;e<n;){const r=e+n>>>1,s=mt[r],i=Qs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function rc(t){if(!(t.flags&1)){const e=Qs(t),n=mt[mt.length-1];!n||!(t.flags&2)&&e>=Qs(n)?mt.push(t):mt.splice(ty(e),0,t),t.flags|=1,Vf()}}function Vf(){mo||(mo=kf.then(Of))}function ny(t){ce(t)?Fr.push(...t):Nn&&t.id===-1?Nn.splice(Vr+1,0,t):t.flags&1||(Fr.push(t),t.flags|=1),Vf()}function hh(t,e,n=qt+1){for(;n<mt.length;n++){const r=mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Nf(t){if(Fr.length){const e=[...new Set(Fr)].sort((n,r)=>Qs(n)-Qs(r));if(Fr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Vr=0;Vr<Nn.length;Vr++){const n=Nn[Vr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nn=null,Vr=0}}const Qs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Of(t){try{for(qt=0;qt<mt.length;qt++){const e=mt[qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qt<mt.length;qt++){const e=mt[qt];e&&(e.flags&=-2)}qt=-1,mt.length=0,Nf(),mo=null,(mt.length||Fr.length)&&Of()}}let Dt=null,xf=null;function _o(t){const e=Dt;return Dt=t,xf=t&&t.type.__scopeId||null,e}function ry(t,e=Dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Th(-1);const i=_o(e);let a;try{a=t(...s)}finally{_o(i),r._d&&Th(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function kt(t,e){if(Dt===null)return t;const n=Jo(Dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Se]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&hn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function rr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(yn(),en(c,n,8,[t.el,l,t,e]),vn())}}function sy(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function Zi(t,e,n=!1){const r=rv();if(r||Ur){let s=Ur?Ur._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const iy=Symbol.for("v-scx"),oy=()=>Zi(iy);function Ua(t,e,n){return Mf(t,e,n)}function Mf(t,e,n=Se){const{immediate:r,deep:s,flush:i,once:a}=n,l=ht({},n),c=e&&r||!e&&i!=="post";let h;if(Js){if(i==="sync"){const S=oy();h=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=Kt,S.resume=Kt,S.pause=Kt,S}}const f=_t;l.call=(S,N,M)=>en(S,f,N,M);let g=!1;i==="post"?l.scheduler=S=>{It(S,f&&f.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(S,N)=>{N?S():rc(S)}),l.augmentJob=S=>{e&&(S.flags|=4),g&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const y=Z_(t,e,l);return Js&&(h?h.push(y):c&&y()),y}function ay(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?Lf(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const a=ui(this),l=Mf(s,i.bind(r),n);return a(),l}function Lf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ly=Symbol("_vte"),cy=t=>t.__isTeleport,uy=Symbol("_leaveCb");function sc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,sc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ff(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const yo=new WeakMap;function xs(t,e,n,r,s=!1){if(ce(t)){t.forEach((N,M)=>xs(N,e&&(ce(e)?e[M]:e),n,r,s));return}if(Ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&xs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Jo(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Se?l.refs={}:l.refs,g=l.setupState,y=Ie(g),S=g===Se?of:N=>Ae(y,N);if(h!=null&&h!==c){if(dh(e),He(h))f[h]=null,S(h)&&(g[h]=null);else if(ut(h)){h.value=null;const N=e;N.k&&(f[N.k]=null)}}if(fe(c))ci(c,l,12,[a,f]);else{const N=He(c),M=ut(c);if(N||M){const O=()=>{if(t.f){const z=N?S(c)?g[c]:f[c]:c.value;if(s)ce(z)&&zl(z,i);else if(ce(z))z.includes(i)||z.push(i);else if(N)f[c]=[i],S(c)&&(g[c]=f[c]);else{const Q=[i];c.value=Q,t.k&&(f[t.k]=Q)}}else N?(f[c]=a,S(c)&&(g[c]=a)):M&&(c.value=a,t.k&&(f[t.k]=a))};if(a){const z=()=>{O(),yo.delete(t)};z.id=-1,yo.set(t,z),It(z,n)}else dh(t),O()}}}function dh(t){const e=yo.get(t);e&&(e.flags|=8,yo.delete(t))}qo().requestIdleCallback;qo().cancelIdleCallback;const Ms=t=>!!t.type.__asyncLoader,Uf=t=>t.type.__isKeepAlive;function hy(t,e){Bf(t,"a",e)}function dy(t,e){Bf(t,"da",e)}function Bf(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ko(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Uf(s.parent.vnode)&&fy(r,e,n,s),s=s.parent}}function fy(t,e,n,r){const s=Ko(e,t,r,!0);$f(()=>{zl(r[e],s)},n)}function Ko(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{yn();const l=ui(n),c=en(e,n,t,a);return l(),vn(),c});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=_t)=>{(!Js||t==="sp")&&Ko(t,(...r)=>e(...r),n)},py=Rn("bm"),Go=Rn("m"),gy=Rn("bu"),my=Rn("u"),_y=Rn("bum"),$f=Rn("um"),yy=Rn("sp"),vy=Rn("rtg"),Ey=Rn("rtc");function Ty(t,e=_t){Ko("ec",t,e)}const wy=Symbol.for("v-ndc");function cl(t,e,n,r){let s;const i=n,a=ce(t);if(a||He(t)){const l=a&&hr(t);let c=!1,h=!1;l&&(c=!Vt(t),h=En(t),t=Wo(t)),s=new Array(t.length);for(let f=0,g=t.length;f<g;f++)s[f]=e(c?h?zr(Ft(t[f])):Ft(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const ul=t=>t?ap(t)?Jo(t):ul(t.parent):null,Ls=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ul(t.parent),$root:t=>ul(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qf(t),$forceUpdate:t=>t.f||(t.f=()=>{rc(t.update)}),$nextTick:t=>t.n||(t.n=Df.bind(t.proxy)),$watch:t=>ay.bind(t)}),Ba=(t,e)=>t!==Se&&!t.__isScriptSetup&&Ae(t,e),Iy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ba(r,e))return a[e]=1,r[e];if(s!==Se&&Ae(s,e))return a[e]=2,s[e];if(Ae(i,e))return a[e]=3,i[e];if(n!==Se&&Ae(n,e))return a[e]=4,n[e];hl&&(a[e]=0)}}const h=Ls[e];let f,g;if(h)return e==="$attrs"&&lt(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Se&&Ae(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,Ae(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ba(s,e)?(s[e]=n,!0):r!==Se&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(n[l]||t!==Se&&l[0]!=="$"&&Ae(t,l)||Ba(e,l)||Ae(i,l)||Ae(r,l)||Ae(Ls,l)||Ae(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hl=!0;function Ay(t){const e=qf(t),n=t.proxy,r=t.ctx;hl=!1,e.beforeCreate&&ph(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:g,mounted:y,beforeUpdate:S,updated:N,activated:M,deactivated:O,beforeDestroy:z,beforeUnmount:Q,destroyed:k,unmounted:m,render:j,renderTracked:re,renderTriggered:A,errorCaptured:_,serverPrefetch:T,expose:I,inheritAttrs:R,components:C,directives:E,filters:nt}=e;if(h&&by(h,r,null),a)for(const Ee in a){const me=a[Ee];fe(me)&&(r[Ee]=me.bind(n))}if(s){const Ee=s.call(n,n);Pe(Ee)&&(t.data=ec(Ee))}if(hl=!0,i)for(const Ee in i){const me=i[Ee],yt=fe(me)?me.bind(n,n):fe(me.get)?me.get.bind(n,n):Kt,Bt=!fe(me)&&fe(me.set)?me.set.bind(n):Kt,ee=Us({get:yt,set:Bt});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>ee.value,set:Ne=>ee.value=Ne})}if(l)for(const Ee in l)jf(l[Ee],r,n,Ee);if(c){const Ee=fe(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(me=>{sy(me,Ee[me])})}f&&ph(f,t,"c");function Be(Ee,me){ce(me)?me.forEach(yt=>Ee(yt.bind(n))):me&&Ee(me.bind(n))}if(Be(py,g),Be(Go,y),Be(gy,S),Be(my,N),Be(hy,M),Be(dy,O),Be(Ty,_),Be(Ey,re),Be(vy,A),Be(_y,Q),Be($f,m),Be(yy,T),ce(I))if(I.length){const Ee=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(Ee,me,{get:()=>n[me],set:yt=>n[me]=yt,enumerable:!0})})}else t.exposed||(t.exposed={});j&&t.render===Kt&&(t.render=j),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),E&&(t.directives=E),T&&Ff(t)}function by(t,e,n=Kt){ce(t)&&(t=dl(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=Zi(s.from||r,s.default,!0):i=Zi(s.from||r):i=Zi(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ph(t,e,n){en(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function jf(t,e,n,r){let s=r.includes(".")?Lf(n,r):()=>n[r];if(He(t)){const i=e[t];fe(i)&&Ua(s,i)}else if(fe(t))Ua(s,t.bind(n));else if(Pe(t))if(ce(t))t.forEach(i=>jf(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Ua(s,i,t)}}function qf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>vo(c,h,a,!0)),vo(c,e,a)),Pe(e)&&i.set(e,c),c}function vo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vo(t,i,n,!0),s&&s.forEach(a=>vo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=Ry[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const Ry={data:gh,props:mh,emits:mh,methods:Ss,computed:Ss,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Ss,directives:Ss,watch:Cy,provide:gh,inject:Sy};function gh(t,e){return e?t?function(){return ht(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function Sy(t,e){return Ss(dl(t),dl(e))}function dl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ss(t,e){return t?ht(Object.create(null),t,e):e}function mh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:ht(Object.create(null),fh(t),fh(e??{})):e}function Cy(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Hf(){return{app:null,config:{isNativeTag:of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Py=0;function ky(t,e){return function(r,s=null){fe(r)||(r=ht({},r)),s!=null&&!Pe(s)&&(s=null);const i=Hf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Py++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:cv,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&fe(f.install)?(a.add(f),f.install(h,...g)):fe(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,y){if(!c){const S=h._ceVNode||Gt(r,s);return S.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(S,f,y),c=!0,h._container=f,f.__vue_app__=h,Jo(S.component)}},onUnmount(f){l.push(f)},unmount(){c&&(en(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=Ur;Ur=h;try{return f()}finally{Ur=g}}};return h}}let Ur=null;const Dy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Hn(e)}Modifiers`]||t[`${Tr(e)}Modifiers`];function Vy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let s=n;const i=e.startsWith("update:"),a=i&&Dy(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>He(f)?f.trim():f)),a.number&&(s=n.map(jo)));let l,c=r[l=Oa(e)]||r[l=Oa(Hn(e))];!c&&i&&(c=r[l=Oa(Tr(e))]),c&&en(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,en(h,t,6,s)}}const Ny=new WeakMap;function Wf(t,e,n=!1){const r=n?Ny:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!fe(t)){const c=h=>{const f=Wf(h,e,!0);f&&(l=!0,ht(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Pe(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>a[c]=null):ht(a,i),Pe(t)&&r.set(t,a),a)}function Qo(t,e){return!t||!Uo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Tr(e))||Ae(t,e))}function _h(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:g,data:y,setupState:S,ctx:N,inheritAttrs:M}=t,O=_o(t);let z,Q;try{if(n.shapeFlag&4){const m=s||r,j=m;z=Ht(h.call(j,m,f,g,S,y,N)),Q=l}else{const m=e;z=Ht(m.length>1?m(g,{attrs:l,slots:a,emit:c}):m(g,null)),Q=e.props?l:Oy(l)}}catch(m){Fs.length=0,zo(m,t,1),z=Gt(Wn)}let k=z;if(Q&&M!==!1){const m=Object.keys(Q),{shapeFlag:j}=k;m.length&&j&7&&(i&&m.some(Wl)&&(Q=xy(Q,i)),k=Kr(k,Q,!1,!0))}return n.dirs&&(k=Kr(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&sc(k,n.transition),z=k,_o(O),z}const Oy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Uo(n))&&((e||(e={}))[n]=t[n]);return e},xy=(t,e)=>{const n={};for(const r in t)(!Wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function My(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yh(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const y=f[g];if(a[y]!==r[y]&&!Qo(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?yh(r,a,h):!0:!!a;return!1}function yh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qo(n,i))return!0}return!1}function Ly({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const zf={},Kf=()=>Object.create(zf),Gf=t=>Object.getPrototypeOf(t)===zf;function Fy(t,e,n,r=!1){const s={},i=Kf();t.propsDefaults=Object.create(null),Qf(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:H_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Uy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ie(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let y=f[g];if(Qo(t.emitsOptions,y))continue;const S=e[y];if(c)if(Ae(i,y))S!==i[y]&&(i[y]=S,h=!0);else{const N=Hn(y);s[N]=fl(c,l,N,S,t,!1)}else S!==i[y]&&(i[y]=S,h=!0)}}}else{Qf(t,e,s,i)&&(h=!0);let f;for(const g in l)(!e||!Ae(e,g)&&((f=Tr(g))===g||!Ae(e,f)))&&(c?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=fl(c,l,g,void 0,t,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!Ae(e,g))&&(delete i[g],h=!0)}h&&un(t.attrs,"set","")}function Qf(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Vs(c))continue;const h=e[c];let f;s&&Ae(s,f=Hn(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:Qo(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ie(n),h=l||Se;for(let f=0;f<i.length;f++){const g=i[f];n[g]=fl(s,c,g,h[g],t,!Ae(h,g))}}return a}function fl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ae(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&fe(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=ui(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Tr(n))&&(r=!0))}return r}const By=new WeakMap;function Yf(t,e,n=!1){const r=n?By:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!fe(t)){const f=g=>{c=!0;const[y,S]=Yf(g,e,!0);ht(a,y),S&&l.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Pe(t)&&r.set(t,Mr),Mr;if(ce(i))for(let f=0;f<i.length;f++){const g=Hn(i[f]);vh(g)&&(a[g]=Se)}else if(i)for(const f in i){const g=Hn(f);if(vh(g)){const y=i[f],S=a[g]=ce(y)||fe(y)?{type:y}:ht({},y),N=S.type;let M=!1,O=!0;if(ce(N))for(let z=0;z<N.length;++z){const Q=N[z],k=fe(Q)&&Q.name;if(k==="Boolean"){M=!0;break}else k==="String"&&(O=!1)}else M=fe(N)&&N.name==="Boolean";S[0]=M,S[1]=O,(M||Ae(S,"default"))&&l.push(g)}}const h=[a,l];return Pe(t)&&r.set(t,h),h}function vh(t){return t[0]!=="$"&&!Vs(t)}const ic=t=>t==="_"||t==="_ctx"||t==="$stable",oc=t=>ce(t)?t.map(Ht):[Ht(t)],$y=(t,e,n)=>{if(e._n)return e;const r=ry((...s)=>oc(e(...s)),n);return r._c=!1,r},Jf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ic(s))continue;const i=t[s];if(fe(i))e[s]=$y(s,i,r);else if(i!=null){const a=oc(i);e[s]=()=>a}}},Xf=(t,e)=>{const n=oc(e);t.slots.default=()=>n},Zf=(t,e,n)=>{for(const r in e)(n||!ic(r))&&(t[r]=e[r])},jy=(t,e,n)=>{const r=t.slots=Kf();if(t.vnode.shapeFlag&32){const s=e._;s?(Zf(r,e,n),n&&hf(r,"_",s,!0)):Jf(e,r)}else e&&Xf(t,e)},qy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Se;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Zf(s,e,n):(i=!e.$stable,Jf(e,s)),a=e}else e&&(Xf(t,e),a={default:1});if(i)for(const l in s)!ic(l)&&a[l]==null&&delete s[l]},It=Gy;function Hy(t){return Wy(t)}function Wy(t,e){const n=qo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:g,nextSibling:y,setScopeId:S=Kt,insertStaticContent:N}=t,M=(v,b,V,B=null,L=null,F=null,K=void 0,H=null,q=!!b.dynamicChildren)=>{if(v===b)return;v&&!As(v,b)&&(B=sn(v),Ne(v,L,F,!0),v=null),b.patchFlag===-2&&(q=!1,b.dynamicChildren=null);const{type:U,ref:se,shapeFlag:G}=b;switch(U){case Yo:O(v,b,V,B);break;case Wn:z(v,b,V,B);break;case eo:v==null&&Q(b,V,B,K);break;case At:C(v,b,V,B,L,F,K,H,q);break;default:G&1?j(v,b,V,B,L,F,K,H,q):G&6?E(v,b,V,B,L,F,K,H,q):(G&64||G&128)&&U.process(v,b,V,B,L,F,K,H,q,$t)}se!=null&&L?xs(se,v&&v.ref,F,b||v,!b):se==null&&v&&v.ref!=null&&xs(v.ref,null,F,v,!0)},O=(v,b,V,B)=>{if(v==null)r(b.el=l(b.children),V,B);else{const L=b.el=v.el;b.children!==v.children&&h(L,b.children)}},z=(v,b,V,B)=>{v==null?r(b.el=c(b.children||""),V,B):b.el=v.el},Q=(v,b,V,B)=>{[v.el,v.anchor]=N(v.children,b,V,B,v.el,v.anchor)},k=({el:v,anchor:b},V,B)=>{let L;for(;v&&v!==b;)L=y(v),r(v,V,B),v=L;r(b,V,B)},m=({el:v,anchor:b})=>{let V;for(;v&&v!==b;)V=y(v),s(v),v=V;s(b)},j=(v,b,V,B,L,F,K,H,q)=>{if(b.type==="svg"?K="svg":b.type==="math"&&(K="mathml"),v==null)re(b,V,B,L,F,K,H,q);else{const U=v.el&&v.el._isVueCE?v.el:null;try{U&&U._beginPatch(),T(v,b,L,F,K,H,q)}finally{U&&U._endPatch()}}},re=(v,b,V,B,L,F,K,H)=>{let q,U;const{props:se,shapeFlag:G,transition:te,dirs:oe}=v;if(q=v.el=a(v.type,F,se&&se.is,se),G&8?f(q,v.children):G&16&&_(v.children,q,null,B,L,$a(v,F),K,H),oe&&rr(v,null,B,"created"),A(q,v,v.scopeId,K,B),se){for(const de in se)de!=="value"&&!Vs(de)&&i(q,de,null,se[de],F,B);"value"in se&&i(q,"value",null,se.value,F),(U=se.onVnodeBeforeMount)&&jt(U,B,v)}oe&&rr(v,null,B,"beforeMount");const ie=zy(L,te);ie&&te.beforeEnter(q),r(q,b,V),((U=se&&se.onVnodeMounted)||ie||oe)&&It(()=>{U&&jt(U,B,v),ie&&te.enter(q),oe&&rr(v,null,B,"mounted")},L)},A=(v,b,V,B,L)=>{if(V&&S(v,V),B)for(let F=0;F<B.length;F++)S(v,B[F]);if(L){let F=L.subTree;if(b===F||rp(F.type)&&(F.ssContent===b||F.ssFallback===b)){const K=L.vnode;A(v,K,K.scopeId,K.slotScopeIds,L.parent)}}},_=(v,b,V,B,L,F,K,H,q=0)=>{for(let U=q;U<v.length;U++){const se=v[U]=H?On(v[U]):Ht(v[U]);M(null,se,b,V,B,L,F,K,H)}},T=(v,b,V,B,L,F,K)=>{const H=b.el=v.el;let{patchFlag:q,dynamicChildren:U,dirs:se}=b;q|=v.patchFlag&16;const G=v.props||Se,te=b.props||Se;let oe;if(V&&sr(V,!1),(oe=te.onVnodeBeforeUpdate)&&jt(oe,V,b,v),se&&rr(b,v,V,"beforeUpdate"),V&&sr(V,!0),(G.innerHTML&&te.innerHTML==null||G.textContent&&te.textContent==null)&&f(H,""),U?I(v.dynamicChildren,U,H,V,B,$a(b,L),F):K||me(v,b,H,null,V,B,$a(b,L),F,!1),q>0){if(q&16)R(H,G,te,V,L);else if(q&2&&G.class!==te.class&&i(H,"class",null,te.class,L),q&4&&i(H,"style",G.style,te.style,L),q&8){const ie=b.dynamicProps;for(let de=0;de<ie.length;de++){const ye=ie[de],Ge=G[ye],Qe=te[ye];(Qe!==Ge||ye==="value")&&i(H,ye,Ge,Qe,L,V)}}q&1&&v.children!==b.children&&f(H,b.children)}else!K&&U==null&&R(H,G,te,V,L);((oe=te.onVnodeUpdated)||se)&&It(()=>{oe&&jt(oe,V,b,v),se&&rr(b,v,V,"updated")},B)},I=(v,b,V,B,L,F,K)=>{for(let H=0;H<b.length;H++){const q=v[H],U=b[H],se=q.el&&(q.type===At||!As(q,U)||q.shapeFlag&198)?g(q.el):V;M(q,U,se,null,B,L,F,K,!0)}},R=(v,b,V,B,L)=>{if(b!==V){if(b!==Se)for(const F in b)!Vs(F)&&!(F in V)&&i(v,F,b[F],null,L,B);for(const F in V){if(Vs(F))continue;const K=V[F],H=b[F];K!==H&&F!=="value"&&i(v,F,H,K,L,B)}"value"in V&&i(v,"value",b.value,V.value,L)}},C=(v,b,V,B,L,F,K,H,q)=>{const U=b.el=v?v.el:l(""),se=b.anchor=v?v.anchor:l("");let{patchFlag:G,dynamicChildren:te,slotScopeIds:oe}=b;oe&&(H=H?H.concat(oe):oe),v==null?(r(U,V,B),r(se,V,B),_(b.children||[],V,se,L,F,K,H,q)):G>0&&G&64&&te&&v.dynamicChildren&&v.dynamicChildren.length===te.length?(I(v.dynamicChildren,te,V,L,F,K,H),(b.key!=null||L&&b===L.subTree)&&ep(v,b,!0)):me(v,b,V,se,L,F,K,H,q)},E=(v,b,V,B,L,F,K,H,q)=>{b.slotScopeIds=H,v==null?b.shapeFlag&512?L.ctx.activate(b,V,B,K,q):nt(b,V,B,L,F,K,q):Nt(v,b,q)},nt=(v,b,V,B,L,F,K)=>{const H=v.component=nv(v,B,L);if(Uf(v)&&(H.ctx.renderer=$t),sv(H,!1,K),H.asyncDep){if(L&&L.registerDep(H,Be,K),!v.el){const q=H.subTree=Gt(Wn);z(null,q,b,V),v.placeholder=q.el}}else Be(H,v,b,V,L,F,K)},Nt=(v,b,V)=>{const B=b.component=v.component;if(My(v,b,V))if(B.asyncDep&&!B.asyncResolved){Ee(B,b,V);return}else B.next=b,B.update();else b.el=v.el,B.vnode=b},Be=(v,b,V,B,L,F,K)=>{const H=()=>{if(v.isMounted){let{next:G,bu:te,u:oe,parent:ie,vnode:de}=v;{const rt=tp(v);if(rt){G&&(G.el=de.el,Ee(v,G,K)),rt.asyncDep.then(()=>{v.isUnmounted||H()});return}}let ye=G,Ge;sr(v,!1),G?(G.el=de.el,Ee(v,G,K)):G=de,te&&Xi(te),(Ge=G.props&&G.props.onVnodeBeforeUpdate)&&jt(Ge,ie,G,de),sr(v,!0);const Qe=_h(v),Ct=v.subTree;v.subTree=Qe,M(Ct,Qe,g(Ct.el),sn(Ct),v,L,F),G.el=Qe.el,ye===null&&Ly(v,Qe.el),oe&&It(oe,L),(Ge=G.props&&G.props.onVnodeUpdated)&&It(()=>jt(Ge,ie,G,de),L)}else{let G;const{el:te,props:oe}=b,{bm:ie,m:de,parent:ye,root:Ge,type:Qe}=v,Ct=Ms(b);sr(v,!1),ie&&Xi(ie),!Ct&&(G=oe&&oe.onVnodeBeforeMount)&&jt(G,ye,b),sr(v,!0);{Ge.ce&&Ge.ce._def.shadowRoot!==!1&&Ge.ce._injectChildStyle(Qe);const rt=v.subTree=_h(v);M(null,rt,V,B,v,L,F),b.el=rt.el}if(de&&It(de,L),!Ct&&(G=oe&&oe.onVnodeMounted)){const rt=b;It(()=>jt(G,ye,rt),L)}(b.shapeFlag&256||ye&&Ms(ye.vnode)&&ye.vnode.shapeFlag&256)&&v.a&&It(v.a,L),v.isMounted=!0,b=V=B=null}};v.scope.on();const q=v.effect=new gf(H);v.scope.off();const U=v.update=q.run.bind(q),se=v.job=q.runIfDirty.bind(q);se.i=v,se.id=v.uid,q.scheduler=()=>rc(se),sr(v,!0),U()},Ee=(v,b,V)=>{b.component=v;const B=v.vnode.props;v.vnode=b,v.next=null,Uy(v,b.props,B,V),qy(v,b.children,V),yn(),hh(v),vn()},me=(v,b,V,B,L,F,K,H,q=!1)=>{const U=v&&v.children,se=v?v.shapeFlag:0,G=b.children,{patchFlag:te,shapeFlag:oe}=b;if(te>0){if(te&128){Bt(U,G,V,B,L,F,K,H,q);return}else if(te&256){yt(U,G,V,B,L,F,K,H,q);return}}oe&8?(se&16&&Xn(U,L,F),G!==U&&f(V,G)):se&16?oe&16?Bt(U,G,V,B,L,F,K,H,q):Xn(U,L,F,!0):(se&8&&f(V,""),oe&16&&_(G,V,B,L,F,K,H,q))},yt=(v,b,V,B,L,F,K,H,q)=>{v=v||Mr,b=b||Mr;const U=v.length,se=b.length,G=Math.min(U,se);let te;for(te=0;te<G;te++){const oe=b[te]=q?On(b[te]):Ht(b[te]);M(v[te],oe,V,null,L,F,K,H,q)}U>se?Xn(v,L,F,!0,!1,G):_(b,V,B,L,F,K,H,q,G)},Bt=(v,b,V,B,L,F,K,H,q)=>{let U=0;const se=b.length;let G=v.length-1,te=se-1;for(;U<=G&&U<=te;){const oe=v[U],ie=b[U]=q?On(b[U]):Ht(b[U]);if(As(oe,ie))M(oe,ie,V,null,L,F,K,H,q);else break;U++}for(;U<=G&&U<=te;){const oe=v[G],ie=b[te]=q?On(b[te]):Ht(b[te]);if(As(oe,ie))M(oe,ie,V,null,L,F,K,H,q);else break;G--,te--}if(U>G){if(U<=te){const oe=te+1,ie=oe<se?b[oe].el:B;for(;U<=te;)M(null,b[U]=q?On(b[U]):Ht(b[U]),V,ie,L,F,K,H,q),U++}}else if(U>te)for(;U<=G;)Ne(v[U],L,F,!0),U++;else{const oe=U,ie=U,de=new Map;for(U=ie;U<=te;U++){const Ye=b[U]=q?On(b[U]):Ht(b[U]);Ye.key!=null&&de.set(Ye.key,U)}let ye,Ge=0;const Qe=te-ie+1;let Ct=!1,rt=0;const Sn=new Array(Qe);for(U=0;U<Qe;U++)Sn[U]=0;for(U=oe;U<=G;U++){const Ye=v[U];if(Ge>=Qe){Ne(Ye,L,F,!0);continue}let Pt;if(Ye.key!=null)Pt=de.get(Ye.key);else for(ye=ie;ye<=te;ye++)if(Sn[ye-ie]===0&&As(Ye,b[ye])){Pt=ye;break}Pt===void 0?Ne(Ye,L,F,!0):(Sn[Pt-ie]=U+1,Pt>=rt?rt=Pt:Ct=!0,M(Ye,b[Pt],V,null,L,F,K,H,q),Ge++)}const us=Ct?Ky(Sn):Mr;for(ye=us.length-1,U=Qe-1;U>=0;U--){const Ye=ie+U,Pt=b[Ye],Ai=b[Ye+1],Rr=Ye+1<se?Ai.el||np(Ai):B;Sn[U]===0?M(null,Pt,V,Rr,L,F,K,H,q):Ct&&(ye<0||U!==us[ye]?ee(Pt,V,Rr,2):ye--)}}},ee=(v,b,V,B,L=null)=>{const{el:F,type:K,transition:H,children:q,shapeFlag:U}=v;if(U&6){ee(v.component.subTree,b,V,B);return}if(U&128){v.suspense.move(b,V,B);return}if(U&64){K.move(v,b,V,$t);return}if(K===At){r(F,b,V);for(let G=0;G<q.length;G++)ee(q[G],b,V,B);r(v.anchor,b,V);return}if(K===eo){k(v,b,V);return}if(B!==2&&U&1&&H)if(B===0)H.beforeEnter(F),r(F,b,V),It(()=>H.enter(F),L);else{const{leave:G,delayLeave:te,afterLeave:oe}=H,ie=()=>{v.ctx.isUnmounted?s(F):r(F,b,V)},de=()=>{F._isLeaving&&F[uy](!0),G(F,()=>{ie(),oe&&oe()})};te?te(F,ie,de):de()}else r(F,b,V)},Ne=(v,b,V,B=!1,L=!1)=>{const{type:F,props:K,ref:H,children:q,dynamicChildren:U,shapeFlag:se,patchFlag:G,dirs:te,cacheIndex:oe}=v;if(G===-2&&(L=!1),H!=null&&(yn(),xs(H,null,V,v,!0),vn()),oe!=null&&(b.renderCache[oe]=void 0),se&256){b.ctx.deactivate(v);return}const ie=se&1&&te,de=!Ms(v);let ye;if(de&&(ye=K&&K.onVnodeBeforeUnmount)&&jt(ye,b,v),se&6)Jn(v.component,V,B);else{if(se&128){v.suspense.unmount(V,B);return}ie&&rr(v,null,b,"beforeUnmount"),se&64?v.type.remove(v,b,V,$t,B):U&&!U.hasOnce&&(F!==At||G>0&&G&64)?Xn(U,b,V,!1,!0):(F===At&&G&384||!L&&se&16)&&Xn(q,b,V),B&&Oe(v)}(de&&(ye=K&&K.onVnodeUnmounted)||ie)&&It(()=>{ye&&jt(ye,b,v),ie&&rr(v,null,b,"unmounted")},V)},Oe=v=>{const{type:b,el:V,anchor:B,transition:L}=v;if(b===At){va(V,B);return}if(b===eo){m(v);return}const F=()=>{s(V),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(v.shapeFlag&1&&L&&!L.persisted){const{leave:K,delayLeave:H}=L,q=()=>K(V,F);H?H(v.el,F,q):q()}else F()},va=(v,b)=>{let V;for(;v!==b;)V=y(v),s(v),v=V;s(b)},Jn=(v,b,V)=>{const{bum:B,scope:L,job:F,subTree:K,um:H,m:q,a:U}=v;Eh(q),Eh(U),B&&Xi(B),L.stop(),F&&(F.flags|=8,Ne(K,v,b,V)),H&&It(H,b),It(()=>{v.isUnmounted=!0},b)},Xn=(v,b,V,B=!1,L=!1,F=0)=>{for(let K=F;K<v.length;K++)Ne(v[K],b,V,B,L)},sn=v=>{if(v.shapeFlag&6)return sn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const b=y(v.anchor||v.el),V=b&&b[ly];return V?y(V):b};let ls=!1;const Ii=(v,b,V)=>{let B;v==null?b._vnode&&(Ne(b._vnode,null,null,!0),B=b._vnode.component):M(b._vnode||null,v,b,null,null,null,V),b._vnode=v,ls||(ls=!0,hh(B),Nf(),ls=!1)},$t={p:M,um:Ne,m:ee,r:Oe,mt:nt,mc:_,pc:me,pbc:I,n:sn,o:t};return{render:Ii,hydrate:void 0,createApp:ky(Ii)}}function $a({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function zy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ep(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=On(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&ep(a,l)),l.type===Yo&&(l.patchFlag!==-1?l.el=a.el:l.__elIndex=i+(t.type===At?1:0)),l.type===Wn&&!l.el&&(l.el=a.el)}}function Ky(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function tp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tp(e)}function Eh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function np(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?np(e.subTree):null}const rp=t=>t.__isSuspense;function Gy(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):ny(t)}const At=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),Wn=Symbol.for("v-cmt"),eo=Symbol.for("v-stc"),Fs=[];let bt=null;function J(t=!1){Fs.push(bt=t?null:[])}function Qy(){Fs.pop(),bt=Fs[Fs.length-1]||null}let Ys=1;function Th(t,e=!1){Ys+=t,t<0&&bt&&e&&(bt.hasOnce=!0)}function sp(t){return t.dynamicChildren=Ys>0?bt||Mr:null,Qy(),Ys>0&&bt&&bt.push(t),t}function Z(t,e,n,r,s,i){return sp(w(t,e,n,r,s,i,!0))}function pl(t,e,n,r,s){return sp(Gt(t,e,n,r,s,!0))}function ip(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const op=({key:t})=>t??null,to=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||ut(t)||fe(t)?{i:Dt,r:t,k:e,f:!!n}:t:null);function w(t,e=null,n=null,r=0,s=null,i=t===At?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&op(e),ref:e&&to(e),scopeId:xf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return l?(ac(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Ys>0&&!a&&bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&bt.push(c),c}const Gt=Yy;function Yy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wy)&&(t=Wn),ip(t)){const l=Kr(t,e,!0);return n&&ac(l,n),Ys>0&&!i&&bt&&(l.shapeFlag&6?bt[bt.indexOf(t)]=l:bt.push(l)),l.patchFlag=-2,l}if(lv(t)&&(t=t.__vccOpts),e){e=Jy(e);let{class:l,style:c}=e;l&&!He(l)&&(e.class=Wr(l)),Pe(c)&&(nc(c)&&!ce(c)&&(c=ht({},c)),e.style=Gl(c))}const a=He(t)?1:rp(t)?128:cy(t)?64:Pe(t)?4:fe(t)?2:0;return w(t,e,n,r,s,a,i,!0)}function Jy(t){return t?nc(t)||Gf(t)?ht({},t):t:null}function Kr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Zy(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&op(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(to(e)):[i,to(e)]:to(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kr(t.ssContent),ssFallback:t.ssFallback&&Kr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&sc(f,c.clone(f)),f}function no(t=" ",e=0){return Gt(Yo,null,t,e)}function Xy(t,e){const n=Gt(eo,null,t);return n.staticCount=e,n}function je(t="",e=!1){return e?(J(),pl(Wn,null,t)):Gt(Wn,null,t)}function Ht(t){return t==null||typeof t=="boolean"?Gt(Wn):ce(t)?Gt(At,null,t.slice()):ip(t)?On(t):Gt(Yo,null,String(t))}function On(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kr(t)}function ac(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ac(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Gf(e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),r&64?(n=16,e=[no(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Wr([e.class,r.class]));else if(s==="style")e.style=Gl([e.style,r.style]);else if(Uo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ce(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function jt(t,e,n,r=null){en(t,e,7,[n,r])}const ev=Hf();let tv=0;function nv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ev,i={uid:tv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new A_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yf(r,s),emitsOptions:Wf(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vy.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const rv=()=>_t||Dt;let Eo,gl;{const t=qo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Eo=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),gl=e("__VUE_SSR_SETTERS__",n=>Js=n)}const ui=t=>{const e=_t;return Eo(t),t.scope.on(),()=>{t.scope.off(),Eo(e)}},wh=()=>{_t&&_t.scope.off(),Eo(null)};function ap(t){return t.vnode.shapeFlag&4}let Js=!1;function sv(t,e=!1,n=!1){e&&gl(e);const{props:r,children:s}=t.vnode,i=ap(t);Fy(t,r,i,e),jy(t,s,n||e);const a=i?iv(t,e):void 0;return e&&gl(!1),a}function iv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Iy);const{setup:r}=n;if(r){yn();const s=t.setupContext=r.length>1?av(t):null,i=ui(t),a=ci(r,t,0,[t.props,s]),l=af(a);if(vn(),i(),(l||t.sp)&&!Ms(t)&&Ff(t),l){if(a.then(wh,wh),e)return a.then(c=>{Ih(t,c)}).catch(c=>{zo(c,t,0)});t.asyncDep=a}else Ih(t,a)}else lp(t)}function Ih(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Pf(e)),lp(t)}function lp(t,e,n){const r=t.type;t.render||(t.render=r.render||Kt);{const s=ui(t);yn();try{Ay(t)}finally{vn(),s()}}}const ov={get(t,e){return lt(t,"get",""),t[e]}};function av(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ov),slots:t.slots,emit:t.emit,expose:e}}function Jo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pf(W_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}})):t.proxy}function lv(t){return fe(t)&&"__vccOpts"in t}const Us=(t,e)=>J_(t,e,Js),cv="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ml;const Ah=typeof window<"u"&&window.trustedTypes;if(Ah)try{ml=Ah.createPolicy("vue",{createHTML:t=>t})}catch{}const cp=ml?t=>ml.createHTML(t):t=>t,uv="http://www.w3.org/2000/svg",hv="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,bh=cn&&cn.createElement("template"),dv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?cn.createElementNS(uv,t):e==="mathml"?cn.createElementNS(hv,t):n?cn.createElement(t,{is:n}):cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>cn.createTextNode(t),createComment:t=>cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bh.innerHTML=cp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=bh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fv=Symbol("_vtc");function pv(t,e,n){const r=t[fv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Rh=Symbol("_vod"),gv=Symbol("_vsh"),mv=Symbol(""),_v=/(?:^|;)\s*display\s*:/;function yv(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ro(r,l,"")}else for(const a in e)n[a]==null&&ro(r,a,"");for(const a in n)a==="display"&&(i=!0),ro(r,a,n[a])}else if(s){if(e!==n){const a=r[mv];a&&(n+=";"+a),r.cssText=n,i=_v.test(n)}}else e&&t.removeAttribute("style");Rh in t&&(t[Rh]=i?r.display:"",t[gv]&&(r.display="none"))}const Sh=/\s*!important$/;function ro(t,e,n){if(ce(n))n.forEach(r=>ro(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vv(t,e);Sh.test(n)?t.setProperty(Tr(r),n.replace(Sh,""),"important"):t[r]=n}}const Ch=["Webkit","Moz","ms"],ja={};function vv(t,e){const n=ja[e];if(n)return n;let r=Hn(e);if(r!=="filter"&&r in t)return ja[e]=r;r=uf(r);for(let s=0;s<Ch.length;s++){const i=Ch[s]+r;if(i in t)return ja[e]=i}return e}const Ph="http://www.w3.org/1999/xlink";function kh(t,e,n,r,s,i=T_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ph,e.slice(6,e.length)):t.setAttributeNS(Ph,e,n):n==null||i&&!df(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zt(n)?String(n):n)}function Dh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?cp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=df(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function ar(t,e,n,r){t.addEventListener(e,n,r)}function Ev(t,e,n,r){t.removeEventListener(e,n,r)}const Vh=Symbol("_vei");function Tv(t,e,n,r,s=null){const i=t[Vh]||(t[Vh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=wv(e);if(r){const h=i[e]=bv(r,s);ar(t,l,h,c)}else a&&(Ev(t,l,a,c),i[e]=void 0)}}const Nh=/(?:Once|Passive|Capture)$/;function wv(t){let e;if(Nh.test(t)){e={};let r;for(;r=t.match(Nh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tr(t.slice(2)),e]}let qa=0;const Iv=Promise.resolve(),Av=()=>qa||(Iv.then(()=>qa=0),qa=Date.now());function bv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;en(Rv(r,n.value),e,5,[r])};return n.value=t,n.attached=Av(),n}function Rv(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Oh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?pv(t,r,a):e==="style"?yv(t,n,r):Uo(e)?Wl(e)||Tv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cv(t,e,r,a))?(Dh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?Dh(t,Hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kh(t,e,r,a))};function Cv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Oh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Oh(e)&&He(n)?!1:e in t}const To=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Xi(e,n):e};function Pv(t){t.target.composing=!0}function xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Br=Symbol("_assign");function Mh(t,e,n){return e&&(t=t.trim()),n&&(t=jo(t)),t}const Wt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Br]=To(s);const i=r||s.props&&s.props.type==="number";ar(t,e?"change":"input",a=>{a.target.composing||t[Br](Mh(t.value,n,i))}),(n||i)&&ar(t,"change",()=>{t.value=Mh(t.value,n,i)}),e||(ar(t,"compositionstart",Pv),ar(t,"compositionend",xh),ar(t,"change",xh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Br]=To(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?jo(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Lh={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Bo(e);ar(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?jo(wo(a)):wo(a));t[Br](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Df(()=>{t._assigning=!1})}),t[Br]=To(r)},mounted(t,{value:e}){Fh(t,e)},beforeUpdate(t,e,n){t[Br]=To(n)},updated(t,{value:e}){t._assigning||Fh(t,e)}};function Fh(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Bo(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],l=wo(a);if(n)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=I_(e,l)>-1}else a.selected=e.has(l);else if(Ho(wo(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function wo(t){return"_value"in t?t._value:t.value}const kv=["ctrl","shift","alt","meta"],Dv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kv.some(n=>t[`${n}Key`]&&!e.includes(n))},Bs=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=Dv[e[a]];if(l&&l(s,e))return}return t(s,...i)})},Vv=ht({patchProp:Sv},dv);let Uh;function Nv(){return Uh||(Uh=Hy(Vv))}const Ov=(...t)=>{const e=Nv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Mv(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,xv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function xv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mv(t){return He(t)?document.querySelector(t):t}var Bh={};/**
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
 */const up=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Lv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,S=h&63;c||(S=64,a||(y=64)),r.push(n[f],n[g],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(up(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Fv;const y=i<<2|l>>4;if(r.push(y),h!==64){const S=l<<4&240|h>>2;if(r.push(S),g!==64){const N=h<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uv=function(t){const e=up(t);return hp.encodeByteArray(e,!0)},Io=function(t){return Uv(t).replace(/\./g,"")},dp=function(t){try{return hp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $v=()=>Bv().__FIREBASE_DEFAULTS__,jv=()=>{if(typeof process>"u"||typeof Bh>"u")return;const t=Bh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dp(t[1]);return e&&JSON.parse(e)},Xo=()=>{try{return $v()||jv()||qv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fp=t=>{var e,n;return(n=(e=Xo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pp=t=>{const e=fp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gp=()=>{var t;return(t=Xo())===null||t===void 0?void 0:t.config},mp=t=>{var e;return(e=Xo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Hv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _p(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Io(JSON.stringify(n)),Io(JSON.stringify(a)),""].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function zv(){var t;const e=(t=Xo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yv(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jv(){return!zv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xv(){try{return typeof indexedDB=="object"}catch{return!1}}function Zv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const eE="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eE,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?tE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new rn(s,l,r)}}function tE(t,e){return t.replace(nE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nE=/\{\$([^}]+)}/g;function rE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ao(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if($h(i)&&$h(a)){if(!Ao(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $h(t){return t!==null&&typeof t=="object"}/**
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
 */function di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sE(t,e){const n=new iE(t,e);return n.subscribe.bind(n)}class iE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ha),s.error===void 0&&(s.error=Ha),s.complete===void 0&&(s.complete=Ha);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ha(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const or="[DEFAULT]";/**
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
 */class aE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Hv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cE(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lE(t){return t===or?void 0:t}function cE(t){return t.instantiationMode==="EAGER"}/**
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
 */class uE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const hE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},dE=_e.INFO,fE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},pE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=dE,this._logHandler=pE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const gE=(t,e)=>e.some(n=>t instanceof n);let jh,qh;function mE(){return jh||(jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _E(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yp=new WeakMap,_l=new WeakMap,vp=new WeakMap,Wa=new WeakMap,cc=new WeakMap;function yE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n($n(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&yp.set(n,t)}).catch(()=>{}),cc.set(e,t),e}function vE(t){if(_l.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});_l.set(t,e)}let yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _l.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EE(t){yl=t(yl)}function TE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(za(this),e,...n);return vp.set(r,e.sort?e.sort():[e]),$n(r)}:_E().includes(t)?function(...e){return t.apply(za(this),e),$n(yp.get(this))}:function(...e){return $n(t.apply(za(this),e))}}function wE(t){return typeof t=="function"?TE(t):(t instanceof IDBTransaction&&vE(t),gE(t,mE())?new Proxy(t,yl):t)}function $n(t){if(t instanceof IDBRequest)return yE(t);if(Wa.has(t))return Wa.get(t);const e=wE(t);return e!==t&&(Wa.set(t,e),cc.set(e,t)),e}const za=t=>cc.get(t);function IE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=$n(a);return r&&a.addEventListener("upgradeneeded",c=>{r($n(a.result),c.oldVersion,c.newVersion,$n(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const AE=["get","getKey","getAll","getAllKeys","count"],bE=["put","add","delete","clear"],Ka=new Map;function Hh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ka.get(e))return Ka.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||AE.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Ka.set(e,i),i}EE(t=>({...t,get:(e,n,r)=>Hh(e,n)||t.get(e,n,r),has:(e,n)=>!!Hh(e,n)||t.has(e,n)}));/**
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
 */class RE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vl="@firebase/app",Wh="0.10.13";/**
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
 */const Tn=new lc("@firebase/app"),CE="@firebase/app-compat",PE="@firebase/analytics-compat",kE="@firebase/analytics",DE="@firebase/app-check-compat",VE="@firebase/app-check",NE="@firebase/auth",OE="@firebase/auth-compat",xE="@firebase/database",ME="@firebase/data-connect",LE="@firebase/database-compat",FE="@firebase/functions",UE="@firebase/functions-compat",BE="@firebase/installations",$E="@firebase/installations-compat",jE="@firebase/messaging",qE="@firebase/messaging-compat",HE="@firebase/performance",WE="@firebase/performance-compat",zE="@firebase/remote-config",KE="@firebase/remote-config-compat",GE="@firebase/storage",QE="@firebase/storage-compat",YE="@firebase/firestore",JE="@firebase/vertexai-preview",XE="@firebase/firestore-compat",ZE="firebase",eT="10.14.1";/**
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
 */const El="[DEFAULT]",tT={[vl]:"fire-core",[CE]:"fire-core-compat",[kE]:"fire-analytics",[PE]:"fire-analytics-compat",[VE]:"fire-app-check",[DE]:"fire-app-check-compat",[NE]:"fire-auth",[OE]:"fire-auth-compat",[xE]:"fire-rtdb",[ME]:"fire-data-connect",[LE]:"fire-rtdb-compat",[FE]:"fire-fn",[UE]:"fire-fn-compat",[BE]:"fire-iid",[$E]:"fire-iid-compat",[jE]:"fire-fcm",[qE]:"fire-fcm-compat",[HE]:"fire-perf",[WE]:"fire-perf-compat",[zE]:"fire-rc",[KE]:"fire-rc-compat",[GE]:"fire-gcs",[QE]:"fire-gcs-compat",[YE]:"fire-fst",[XE]:"fire-fst-compat",[JE]:"fire-vertex","fire-js":"fire-js",[ZE]:"fire-js-all"};/**
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
 */const bo=new Map,nT=new Map,Tl=new Map;function zh(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gr(t){const e=t.name;if(Tl.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Tl.set(e,t);for(const n of bo.values())zh(n,t);for(const n of nT.values())zh(n,t);return!0}function Zo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t.settings!==void 0}/**
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
 */const rT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new hi("app","Firebase",rT);/**
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
 */class sT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=eT;function ea(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:El,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=gp()),!n)throw jn.create("no-options");const i=bo.get(s);if(i){if(Ao(n,i.options)&&Ao(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const a=new uE(s);for(const c of Tl.values())a.addComponent(c);const l=new sT(n,r,a);return bo.set(s,l),l}function uc(t=El){const e=bo.get(t);if(!e&&t===El&&gp())return ea();if(!e)throw jn.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let s=(r=tT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}gr(new zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const iT="firebase-heartbeat-database",oT=1,Xs="firebase-heartbeat-store";let Ga=null;function Ep(){return Ga||(Ga=IE(iT,oT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xs)}catch(n){console.warn(n)}}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),Ga}async function aT(t){try{const n=(await Ep()).transaction(Xs),r=await n.objectStore(Xs).get(Tp(t));return await n.done,r}catch(e){if(e instanceof rn)Tn.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function Kh(t,e){try{const r=(await Ep()).transaction(Xs,"readwrite");await r.objectStore(Xs).put(e,Tp(t)),await r.done}catch(n){if(n instanceof rn)Tn.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function Tp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lT=1024,cT=30*24*60*60*1e3;class uT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=cT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gh(),{heartbeatsToSend:r,unsentEntries:s}=hT(this._heartbeatsCache.heartbeats),i=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tn.warn(n),""}}}function Gh(){return new Date().toISOString().substring(0,10)}function hT(t,e=lT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Qh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xv()?Zv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qh(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fT(t){gr(new zn("platform-logger",e=>new RE(e),"PRIVATE")),gr(new zn("heartbeat",e=>new uT(e),"PRIVATE")),Qt(vl,Wh,t),Qt(vl,Wh,"esm2017"),Qt("fire-js","")}fT("");var pT="firebase",gT="10.14.1";/**
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
 */Qt(pT,gT,"app");function hc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mT=wp,Ip=new hi("auth","Firebase",wp());/**
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
 */const Ro=new lc("@firebase/auth");function _T(t,...e){Ro.logLevel<=_e.WARN&&Ro.warn(`Auth (${wr}): ${t}`,...e)}function so(t,...e){Ro.logLevel<=_e.ERROR&&Ro.error(`Auth (${wr}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw fc(t,...e)}function Mt(t,...e){return fc(t,...e)}function dc(t,e,n){const r=Object.assign(Object.assign({},mT()),{[e]:n});return new hi("auth","Firebase",r).create(e,{appName:t.name})}function dr(t){return dc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tn(t,"argument-error"),dc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ip.create(t,...e)}function ae(t,e,...n){if(!t)throw fc(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function wn(t,e){t||pn(e)}/**
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
 */function wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vT(){return Yh()==="http:"||Yh()==="https:"}function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ET(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vT()||Gv()||"connection"in navigator)?navigator.onLine:!0}function TT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=Wv()||Qv()}get(){return ET()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pc(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ap{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IT=new fi(3e4,6e4);function gc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ns(t,e,n,r,s={}){return bp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=di(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return Kv()||(h.referrerPolicy="no-referrer"),Ap.fetch()(Rp(t,t.config.apiHost,n,l),h)})}async function bp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wT),e);try{const s=new bT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw qi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw qi(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw qi(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw dc(t,f,h);tn(t,f)}}catch(s){if(s instanceof rn)throw s;tn(t,"network-request-failed",{message:String(s)})}}async function AT(t,e,n,r,s={}){const i=await ns(t,e,n,r,s);return"mfaPendingCredential"in i&&tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?pc(t.config,s):`${t.config.apiScheme}://${s}`}class bT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),IT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function RT(t,e){return ns(t,"POST","/v1/accounts:delete",e)}async function Sp(t,e){return ns(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ST(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=mc(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$s(Qa(s.auth_time)),issuedAtTime:$s(Qa(s.iat)),expirationTime:$s(Qa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qa(t){return Number(t)*1e3}function mc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const s=dp(n);return s?JSON.parse(s):(so("Failed to decode base64 JWT payload"),null)}catch(s){return so("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jh(t){const e=mc(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&CT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class PT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Il{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zs(t,Sp(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cp(i.providerUserInfo):[],l=DT(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Il(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function kT(t){const e=Me(t);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Cp(t){return t.map(e=>{var{providerId:n}=e,r=hc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VT(t,e){const n=await bp(t,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=Rp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ap.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NT(t,e){return ns(t,"POST","/v2/accounts:revokeToken",gc(t,e))}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Jh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await VT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new $r;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
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
 */function Dn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=hc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Il(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ST(this,e)}reload(){return kT(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await Zs(this,RT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,Q=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:m,isAnonymous:j,providerData:re,stsTokenManager:A}=n;ae(k&&A,e,"internal-error");const _=$r.fromJSON(this.name,A);ae(typeof k=="string",e,"internal-error"),Dn(g,e.name),Dn(y,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof j=="boolean",e,"internal-error"),Dn(S,e.name),Dn(N,e.name),Dn(M,e.name),Dn(O,e.name),Dn(z,e.name),Dn(Q,e.name);const T=new gn({uid:k,auth:e,email:y,emailVerified:m,displayName:g,isAnonymous:j,photoURL:N,phoneNumber:S,tenantId:M,stsTokenManager:_,createdAt:z,lastLoginAt:Q});return re&&Array.isArray(re)&&(T.providerData=re.map(I=>Object.assign({},I))),O&&(T._redirectEventId=O),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new $r;s.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await So(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new $r;l.updateFromIdToken(r);const c=new gn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Il(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Xh=new Map;function mn(t){wn(t instanceof Function,"Expected a class definition");let e=Xh.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xh.set(t,e),e)}/**
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
 */class Pp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pp.type="NONE";const Zh=Pp;/**
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
 */function io(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=io(this.userKey,s.apiKey,i),this.fullPersistenceKey=io("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jr(mn(Zh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||mn(Zh);const a=io(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){const g=gn._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new jr(i,e,r))}}/**
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
 */function ed(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Np(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xp(e))return"Blackberry";if(Mp(e))return"Webos";if(Dp(e))return"Safari";if((e.includes("chrome/")||Vp(e))&&!e.includes("edge/"))return"Chrome";if(Op(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kp(t=dt()){return/firefox\//i.test(t)}function Dp(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vp(t=dt()){return/crios\//i.test(t)}function Np(t=dt()){return/iemobile/i.test(t)}function Op(t=dt()){return/android/i.test(t)}function xp(t=dt()){return/blackberry/i.test(t)}function Mp(t=dt()){return/webos/i.test(t)}function _c(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OT(t=dt()){var e;return _c(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xT(){return Yv()&&document.documentMode===10}function Lp(t=dt()){return _c(t)||Op(t)||Mp(t)||xp(t)||/windows phone/i.test(t)||Np(t)}/**
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
 */function Fp(t,e=[]){let n;switch(t){case"Browser":n=ed(dt());break;case"Worker":n=`${ed(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
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
 */class MT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function LT(t,e={}){return ns(t,"GET","/v2/passwordPolicy",gc(t,e))}/**
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
 */const FT=6;class UT{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:FT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class BT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new td(this),this.idTokenSubscription=new td(this),this.beforeStateQueue=new MT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ip,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sp(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(dr(this));const n=e?Me(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LT(this),n=new UT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_T(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ta(t){return Me(t)}class td{constructor(e){this.auth=e,this.observer=null,this.addObserver=sE(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $T(t){yc=t}function jT(t){return yc.loadJS(t)}function qT(){return yc.gapiScript}function HT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function WT(t,e){const n=Zo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ao(i,e??{}))return s;tn(s,"already-initialized")}return n.initialize({options:e})}function zT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KT(t,e,n){const r=ta(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Up(e),{host:a,port:l}=GT(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),QT()}function Up(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GT(t){const e=Up(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:nd(a)}}}function nd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
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
 */async function qr(t,e){return AT(t,"POST","/v1/accounts:signInWithIdp",gc(t,e))}/**
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
 */const YT="http://localhost";class mr extends Bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=hc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new mr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:YT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
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
 */class vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pi extends vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xn extends pi{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class Mn extends pi{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class Ln extends pi{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),a=rd(r);return new Gr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=rd(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Co extends rn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Co(e,n,r,s)}}function $p(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(t,i,e,r):i})}async function JT(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function XT(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(dr(r));const s="reauthenticate";try{const i=await Zs(t,$p(r,s,e,t),n);ae(i.idToken,r,"internal-error");const a=mc(i.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
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
 */async function ZT(t,e,n=!1){if(fn(t.app))return Promise.reject(dr(t));const r="signIn",s=await $p(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function ew(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function tw(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function nw(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function rw(t){return Me(t).signOut()}const Po="__sak";/**
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
 */class jp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sw=1e3,iw=10;class qp extends jp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);xT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qp.type="LOCAL";const ow=qp;/**
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
 */class Hp extends jp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hp.type="SESSION";const Wp=Hp;/**
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
 */function aw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await aw(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
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
 */function Ec(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Ec("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Yt(){return window}function cw(t){Yt().location.href=t}/**
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
 */function zp(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function uw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dw(){return zp()?self:null}/**
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
 */const Kp="firebaseLocalStorageDb",fw=1,ko="firebaseLocalStorage",Gp="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ra(t,e){return t.transaction([ko],e?"readwrite":"readonly").objectStore(ko)}function pw(){const t=indexedDB.deleteDatabase(Kp);return new gi(t).toPromise()}function Al(){const t=indexedDB.open(Kp,fw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ko,{keyPath:Gp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ko)?e(r):(r.close(),await pw(),e(await Al()))})})}async function sd(t,e,n){const r=ra(t,!0).put({[Gp]:e,value:n});return new gi(r).toPromise()}async function gw(t,e){const n=ra(t,!1).get(e),r=await new gi(n).toPromise();return r===void 0?null:r.value}function id(t,e){const n=ra(t,!0).delete(e);return new gi(n).toPromise()}const mw=800,_w=3;class Qp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Al(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_w)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(dw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uw(),!this.activeServiceWorker)return;this.sender=new lw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Al();return await sd(e,Po,"1"),await id(e,Po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>id(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ra(s,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qp.type="LOCAL";const yw=Qp;new fi(3e4,6e4);/**
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
 */function Yp(t,e){return e?mn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tc extends Bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vw(t){return ZT(t.auth,new Tc(t),t.bypassAuthState)}function Ew(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),XT(n,new Tc(t),t.bypassAuthState)}async function Tw(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),JT(n,new Tc(t),t.bypassAuthState)}/**
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
 */class Jp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vw;case"linkViaPopup":case"linkViaRedirect":return Tw;case"reauthViaPopup":case"reauthViaRedirect":return Ew;default:tn(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ww=new fi(2e3,1e4);async function Iw(t,e,n){if(fn(t.app))return Promise.reject(Mt(t,"operation-not-supported-in-this-environment"));const r=ta(t);yT(t,e,vc);const s=Yp(r,n);return new lr(r,"signInViaPopup",e,s).executeNotNull()}class lr extends Jp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ww.get())};e()}}lr.currentPopupAction=null;/**
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
 */const Aw="pendingRedirect",oo=new Map;class bw extends Jp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oo.get(this.auth._key());if(!e){try{const r=await Rw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oo.set(this.auth._key(),e)}return this.bypassAuthState||oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rw(t,e){const n=Pw(e),r=Cw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Sw(t,e){oo.set(t._key(),e)}function Cw(t){return mn(t._redirectPersistence)}function Pw(t){return io(Aw,t.config.apiKey,t.name)}async function kw(t,e,n=!1){if(fn(t.app))return Promise.reject(dr(t));const r=ta(t),s=Yp(r,e),a=await new bw(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Dw=10*60*1e3;class Vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dw&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))}saveEventToCache(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()}}function od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xp(t);default:return!1}}/**
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
 */async function Ow(t,e={}){return ns(t,"GET","/v1/projects",e)}/**
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
 */const xw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mw=/^https?/;async function Lw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ow(t);for(const n of e)try{if(Fw(n))return}catch{}tn(t,"unauthorized-domain")}function Fw(t){const e=wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Mw.test(n))return!1;if(xw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Uw=new fi(3e4,6e4);function ad(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bw(t){return new Promise((e,n)=>{var r,s,i;function a(){ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ad(),n(Mt(t,"network-request-failed"))},timeout:Uw.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)a();else{const l=HT("iframefcb");return Yt()[l]=()=>{gapi.load?a():n(Mt(t,"network-request-failed"))},jT(`${qT()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ao=null,e})}let ao=null;function $w(t){return ao=ao||Bw(t),ao}/**
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
 */const jw=new fi(5e3,15e3),qw="__/auth/iframe",Hw="emulator/auth/iframe",Ww={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kw(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pc(e,Hw):`https://${t.config.authDomain}/${qw}`,r={apiKey:e.apiKey,appName:t.name,v:wr},s=zw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${di(r).slice(1)}`}async function Gw(t){const e=await $w(t),n=Yt().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:Kw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ww,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Mt(t,"network-request-failed"),l=Yt().setTimeout(()=>{i(a)},jw.get());function c(){Yt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const Qw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yw=500,Jw=600,Xw="_blank",Zw="http://localhost";class ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eI(t,e,n,r=Yw,s=Jw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Qw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=dt().toLowerCase();n&&(l=Vp(h)?Xw:n),kp(h)&&(e=e||Zw,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[S,N])=>`${y}${S}=${N},`,"");if(OT(h)&&l!=="_self")return tI(e||"",l),new ld(null);const g=window.open(e||"",l,f);ae(g,t,"popup-blocked");try{g.focus()}catch{}return new ld(g)}function tI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nI="__/auth/handler",rI="emulator/auth/handler",sI=encodeURIComponent("fac");async function cd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:s};if(e instanceof vc){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",rE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof pi){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${sI}=${encodeURIComponent(c)}`:"";return`${iI(t)}?${di(l).slice(1)}${h}`}function iI({config:t}){return t.emulator?pc(t,rI):`https://${t.authDomain}/${nI}`}/**
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
 */const Ya="webStorageSupport";class oI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wp,this._completeRedirectFn=kw,this._overrideRedirectResult=Sw}async _openPopup(e,n,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await cd(e,n,r,wl(),s);return eI(e,a,Ec())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cd(e,n,r,wl(),s);return cw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Gw(e),r=new Vw(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ya];a!==void 0&&n(!!a),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lp()||Dp()||_c()}}const aI=oI;var ud="@firebase/auth",hd="1.7.9";/**
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
 */class lI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uI(t){gr(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fp(t)},h=new BT(r,s,i,c);return zT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gr(new zn("auth-internal",e=>{const n=ta(e.getProvider("auth").getImmediate());return(r=>new lI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(ud,hd,cI(t)),Qt(ud,hd,"esm2017")}/**
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
 */const hI=5*60,dI=mp("authIdTokenMaxAge")||hI;let dd=null;const fI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dI)return;const s=n==null?void 0:n.token;dd!==s&&(dd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pI(t=uc()){const e=Zo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WT(t,{popupRedirectResolver:aI,persistence:[yw,ow,Wp]}),r=mp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=fI(i.toString());tw(n,a,()=>a(n.currentUser)),ew(n,l=>a(l))}}const s=fp("auth");return s&&KT(n,`http://${s}`),n}function gI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$T({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uI("Browser");const wc={apiKey:"AIzaSyDd65pxbPI0CPu-KVxNniahiW6oYQp1Uqc",authDomain:"fleetsync-f34ef.firebaseapp.com",projectId:"fleetsync-f34ef",storageBucket:"fleetsync-f34ef.firebasestorage.app",messagingSenderId:"89917742680",appId:"1:89917742680:web:9398930c592b3bcab7342d"},fd=["acg1606@gmail.com","rucardona16@gmail.com"],mI=ea(wc),sa=pI(mI),_I=new dn;async function yI(){try{return(await Iw(sa,_I)).user}catch(t){throw console.error("Error signing in:",t),t}}async function Ja(){try{await rw(sa)}catch(t){throw console.error("Error signing out:",t),t}}function vI(t){return nw(sa,t)}function bl(){return sa.currentUser}var pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fr,Zp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function T(){}T.prototype=_.prototype,A.D=_.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(I,R,C){for(var E=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)E[nt-2]=arguments[nt];return _.prototype[R].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,T){T||(T=0);var I=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)I[R]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(R=0;16>R;++R)I[R]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=A.g[0],T=A.g[1],R=A.g[2];var C=A.g[3],E=_+(C^T&(R^C))+I[0]+3614090360&4294967295;_=T+(E<<7&4294967295|E>>>25),E=C+(R^_&(T^R))+I[1]+3905402710&4294967295,C=_+(E<<12&4294967295|E>>>20),E=R+(T^C&(_^T))+I[2]+606105819&4294967295,R=C+(E<<17&4294967295|E>>>15),E=T+(_^R&(C^_))+I[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=_+(C^T&(R^C))+I[4]+4118548399&4294967295,_=T+(E<<7&4294967295|E>>>25),E=C+(R^_&(T^R))+I[5]+1200080426&4294967295,C=_+(E<<12&4294967295|E>>>20),E=R+(T^C&(_^T))+I[6]+2821735955&4294967295,R=C+(E<<17&4294967295|E>>>15),E=T+(_^R&(C^_))+I[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=_+(C^T&(R^C))+I[8]+1770035416&4294967295,_=T+(E<<7&4294967295|E>>>25),E=C+(R^_&(T^R))+I[9]+2336552879&4294967295,C=_+(E<<12&4294967295|E>>>20),E=R+(T^C&(_^T))+I[10]+4294925233&4294967295,R=C+(E<<17&4294967295|E>>>15),E=T+(_^R&(C^_))+I[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=_+(C^T&(R^C))+I[12]+1804603682&4294967295,_=T+(E<<7&4294967295|E>>>25),E=C+(R^_&(T^R))+I[13]+4254626195&4294967295,C=_+(E<<12&4294967295|E>>>20),E=R+(T^C&(_^T))+I[14]+2792965006&4294967295,R=C+(E<<17&4294967295|E>>>15),E=T+(_^R&(C^_))+I[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=_+(R^C&(T^R))+I[1]+4129170786&4294967295,_=T+(E<<5&4294967295|E>>>27),E=C+(T^R&(_^T))+I[6]+3225465664&4294967295,C=_+(E<<9&4294967295|E>>>23),E=R+(_^T&(C^_))+I[11]+643717713&4294967295,R=C+(E<<14&4294967295|E>>>18),E=T+(C^_&(R^C))+I[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=_+(R^C&(T^R))+I[5]+3593408605&4294967295,_=T+(E<<5&4294967295|E>>>27),E=C+(T^R&(_^T))+I[10]+38016083&4294967295,C=_+(E<<9&4294967295|E>>>23),E=R+(_^T&(C^_))+I[15]+3634488961&4294967295,R=C+(E<<14&4294967295|E>>>18),E=T+(C^_&(R^C))+I[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=_+(R^C&(T^R))+I[9]+568446438&4294967295,_=T+(E<<5&4294967295|E>>>27),E=C+(T^R&(_^T))+I[14]+3275163606&4294967295,C=_+(E<<9&4294967295|E>>>23),E=R+(_^T&(C^_))+I[3]+4107603335&4294967295,R=C+(E<<14&4294967295|E>>>18),E=T+(C^_&(R^C))+I[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=_+(R^C&(T^R))+I[13]+2850285829&4294967295,_=T+(E<<5&4294967295|E>>>27),E=C+(T^R&(_^T))+I[2]+4243563512&4294967295,C=_+(E<<9&4294967295|E>>>23),E=R+(_^T&(C^_))+I[7]+1735328473&4294967295,R=C+(E<<14&4294967295|E>>>18),E=T+(C^_&(R^C))+I[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=_+(T^R^C)+I[5]+4294588738&4294967295,_=T+(E<<4&4294967295|E>>>28),E=C+(_^T^R)+I[8]+2272392833&4294967295,C=_+(E<<11&4294967295|E>>>21),E=R+(C^_^T)+I[11]+1839030562&4294967295,R=C+(E<<16&4294967295|E>>>16),E=T+(R^C^_)+I[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=_+(T^R^C)+I[1]+2763975236&4294967295,_=T+(E<<4&4294967295|E>>>28),E=C+(_^T^R)+I[4]+1272893353&4294967295,C=_+(E<<11&4294967295|E>>>21),E=R+(C^_^T)+I[7]+4139469664&4294967295,R=C+(E<<16&4294967295|E>>>16),E=T+(R^C^_)+I[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=_+(T^R^C)+I[13]+681279174&4294967295,_=T+(E<<4&4294967295|E>>>28),E=C+(_^T^R)+I[0]+3936430074&4294967295,C=_+(E<<11&4294967295|E>>>21),E=R+(C^_^T)+I[3]+3572445317&4294967295,R=C+(E<<16&4294967295|E>>>16),E=T+(R^C^_)+I[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=_+(T^R^C)+I[9]+3654602809&4294967295,_=T+(E<<4&4294967295|E>>>28),E=C+(_^T^R)+I[12]+3873151461&4294967295,C=_+(E<<11&4294967295|E>>>21),E=R+(C^_^T)+I[15]+530742520&4294967295,R=C+(E<<16&4294967295|E>>>16),E=T+(R^C^_)+I[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=_+(R^(T|~C))+I[0]+4096336452&4294967295,_=T+(E<<6&4294967295|E>>>26),E=C+(T^(_|~R))+I[7]+1126891415&4294967295,C=_+(E<<10&4294967295|E>>>22),E=R+(_^(C|~T))+I[14]+2878612391&4294967295,R=C+(E<<15&4294967295|E>>>17),E=T+(C^(R|~_))+I[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=_+(R^(T|~C))+I[12]+1700485571&4294967295,_=T+(E<<6&4294967295|E>>>26),E=C+(T^(_|~R))+I[3]+2399980690&4294967295,C=_+(E<<10&4294967295|E>>>22),E=R+(_^(C|~T))+I[10]+4293915773&4294967295,R=C+(E<<15&4294967295|E>>>17),E=T+(C^(R|~_))+I[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=_+(R^(T|~C))+I[8]+1873313359&4294967295,_=T+(E<<6&4294967295|E>>>26),E=C+(T^(_|~R))+I[15]+4264355552&4294967295,C=_+(E<<10&4294967295|E>>>22),E=R+(_^(C|~T))+I[6]+2734768916&4294967295,R=C+(E<<15&4294967295|E>>>17),E=T+(C^(R|~_))+I[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=_+(R^(T|~C))+I[4]+4149444226&4294967295,_=T+(E<<6&4294967295|E>>>26),E=C+(T^(_|~R))+I[11]+3174756917&4294967295,C=_+(E<<10&4294967295|E>>>22),E=R+(_^(C|~T))+I[2]+718787259&4294967295,R=C+(E<<15&4294967295|E>>>17),E=T+(C^(R|~_))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var T=_-this.blockSize,I=this.B,R=this.h,C=0;C<_;){if(R==0)for(;C<=T;)s(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<_;)if(I[R++]=A.charCodeAt(C++),R==this.blockSize){s(this,I),R=0;break}}else for(;C<_;)if(I[R++]=A[C++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var T=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=T&255,T/=256;for(this.u(A),A=Array(16),_=T=0;4>_;++_)for(var I=0;32>I;I+=8)A[T++]=this.g[_]>>>I&255;return A};function i(A,_){var T=l;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=_(A)}function a(A,_){this.h=_;for(var T=[],I=!0,R=A.length-1;0<=R;R--){var C=A[R]|0;I&&C==_||(T[R]=C,I=!1)}this.g=T}var l={};function c(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return O(h(-A));for(var _=[],T=1,I=0;A>=T;I++)_[I]=A/T|0,T*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return O(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(_,8)),I=g,R=0;R<A.length;R+=8){var C=Math.min(8,A.length-R),E=parseInt(A.substring(R,R+C),_);8>C?(C=h(Math.pow(_,C)),I=I.j(C).add(h(E))):(I=I.j(T),I=I.add(h(E)))}return I}var g=c(0),y=c(1),S=c(16777216);t=a.prototype,t.m=function(){if(M(this))return-O(this).m();for(var A=0,_=1,T=0;T<this.g.length;T++){var I=this.i(T);A+=(0<=I?I:4294967296+I)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(N(this))return"0";if(M(this))return"-"+O(this).toString(A);for(var _=h(Math.pow(A,6)),T=this,I="";;){var R=m(T,_).g;T=z(T,R.j(_));var C=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=R,N(T))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function N(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function M(A){return A.h==-1}t.l=function(A){return A=z(this,A),M(A)?-1:N(A)?0:1};function O(A){for(var _=A.g.length,T=[],I=0;I<_;I++)T[I]=~A.g[I];return new a(T,~A.h).add(y)}t.abs=function(){return M(this)?O(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0,R=0;R<=_;R++){var C=I+(this.i(R)&65535)+(A.i(R)&65535),E=(C>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);I=E>>>16,C&=65535,E&=65535,T[R]=E<<16|C}return new a(T,T[T.length-1]&-2147483648?-1:0)};function z(A,_){return A.add(O(_))}t.j=function(A){if(N(this)||N(A))return g;if(M(this))return M(A)?O(this).j(O(A)):O(O(this).j(A));if(M(A))return O(this.j(O(A)));if(0>this.l(S)&&0>A.l(S))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,T=[],I=0;I<2*_;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<A.g.length;R++){var C=this.i(I)>>>16,E=this.i(I)&65535,nt=A.i(R)>>>16,Nt=A.i(R)&65535;T[2*I+2*R]+=E*Nt,Q(T,2*I+2*R),T[2*I+2*R+1]+=C*Nt,Q(T,2*I+2*R+1),T[2*I+2*R+1]+=E*nt,Q(T,2*I+2*R+1),T[2*I+2*R+2]+=C*nt,Q(T,2*I+2*R+2)}for(I=0;I<_;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=_;I<2*_;I++)T[I]=0;return new a(T,0)};function Q(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function k(A,_){this.g=A,this.h=_}function m(A,_){if(N(_))throw Error("division by zero");if(N(A))return new k(g,g);if(M(A))return _=m(O(A),_),new k(O(_.g),O(_.h));if(M(_))return _=m(A,O(_)),new k(O(_.g),_.h);if(30<A.g.length){if(M(A)||M(_))throw Error("slowDivide_ only works with positive integers.");for(var T=y,I=_;0>=I.l(A);)T=j(T),I=j(I);var R=re(T,1),C=re(I,1);for(I=re(I,2),T=re(T,2);!N(I);){var E=C.add(I);0>=E.l(A)&&(R=R.add(T),C=E),I=re(I,1),T=re(T,1)}return _=z(A,R.j(_)),new k(R,_)}for(R=g;0<=A.l(_);){for(T=Math.max(1,Math.floor(A.m()/_.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=h(T),E=C.j(_);M(E)||0<E.l(A);)T-=I,C=h(T),E=C.j(_);N(C)&&(C=y),R=R.add(C),A=z(A,E)}return new k(R,A)}t.A=function(A){return m(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0;I<_;I++)T[I]=this.i(I)&A.i(I);return new a(T,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0;I<_;I++)T[I]=this.i(I)|A.i(I);return new a(T,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0;I<_;I++)T[I]=this.i(I)^A.i(I);return new a(T,this.h^A.h)};function j(A){for(var _=A.g.length+1,T=[],I=0;I<_;I++)T[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(T,A.h)}function re(A,_){var T=_>>5;_%=32;for(var I=A.g.length-T,R=[],C=0;C<I;C++)R[C]=0<_?A.i(C+T)>>>_|A.i(C+T+1)<<32-_:A.i(C+T);return new a(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,fr=a}).apply(typeof pd<"u"?pd:typeof self<"u"?self:typeof window<"u"?window:{});var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eg,Cs,tg,lo,Rl,ng,rg,sg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hi=="object"&&Hi];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in d))break e;d=d[P]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,P={next:function(){if(!p&&d<o.length){var D=d++;return{value:u(D,o[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function y(o,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function S(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,P,D){for(var W=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)W[Re-2]=arguments[Re];return u.prototype[P].apply(p,W)}}function M(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function O(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const P=o.length||0,D=p.length||0;o.length=P+D;for(let W=0;W<D;W++)o[P+W]=p[W]}else o.push(p)}}class z{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Q(o){return/^[\s\xa0]*$/.test(o)}function k(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function m(o){return m[" "](o),o}m[" "]=function(){};var j=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function re(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function _(o){const u={};for(const d in o)u[d]=o[d];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)o[d]=p[d];for(let D=0;D<T.length;D++)d=T[D],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function R(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function C(o){l.setTimeout(()=>{throw o},0)}function E(){var o=yt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class nt{constructor(){this.h=this.g=null}add(u,d){const p=Nt.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Nt=new z(()=>new Be,o=>o.reset());class Be{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,me=!1,yt=new nt,Bt=()=>{const o=l.Promise.resolve(void 0);Ee=()=>{o.then(ee)}};var ee=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){C(d)}var u=Nt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var va=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Jn(o,u){if(Oe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(j){e:{try{m(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Xn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Jn.aa.h.call(this)}}N(Jn,Oe);var Xn={2:"touch",3:"pen",4:"mouse"};Jn.prototype.h=function(){Jn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),ls=0;function Ii(o,u,d,p,P){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=P,this.key=++ls,this.da=this.fa=!1}function $t(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function cs(o){this.src=o,this.g={},this.h=0}cs.prototype.add=function(o,u,d,p,P){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var W=b(o,u,p,P);return-1<W?(u=o[W],d||(u.fa=!1)):(u=new Ii(u,this.src,D,!!p,P),u.fa=d,o.push(u)),u};function v(o,u){var d=u.type;if(d in o.g){var p=o.g[d],P=Array.prototype.indexOf.call(p,u,void 0),D;(D=0<=P)&&Array.prototype.splice.call(p,P,1),D&&($t(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function b(o,u,d,p){for(var P=0;P<o.length;++P){var D=o[P];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==p)return P}return-1}var V="closure_lm_"+(1e6*Math.random()|0),B={};function L(o,u,d,p,P){if(Array.isArray(u)){for(var D=0;D<u.length;D++)L(o,u[D],d,p,P);return null}return d=oe(d),o&&o[sn]?o.K(u,d,h(p)?!!p.capture:!1,P):F(o,u,d,!1,p,P)}function F(o,u,d,p,P,D){if(!u)throw Error("Invalid event type");var W=h(P)?!!P.capture:!!P,Re=G(o);if(Re||(o[V]=Re=new cs(o)),d=Re.add(u,d,p,W,D),d.proxy)return d;if(p=K(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)va||(P=W),P===void 0&&(P=!1),o.addEventListener(u.toString(),p,P);else if(o.attachEvent)o.attachEvent(U(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function K(){function o(d){return u.call(o.src,o.listener,d)}const u=se;return o}function H(o,u,d,p,P){if(Array.isArray(u))for(var D=0;D<u.length;D++)H(o,u[D],d,p,P);else p=h(p)?!!p.capture:!!p,d=oe(d),o&&o[sn]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],d=b(D,d,p,P),-1<d&&($t(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=G(o))&&(u=o.g[u.toString()],o=-1,u&&(o=b(u,d,p,P)),(d=-1<o?u[o]:null)&&q(d))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[sn])v(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(U(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=G(u))?(v(d,o),d.h==0&&(d.src=null,u[V]=null)):$t(o)}}}function U(o){return o in B?B[o]:B[o]="on"+o}function se(o,u){if(o.da)o=!0;else{u=new Jn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&q(o),o=d.call(p,u)}return o}function G(o){return o=o[V],o instanceof cs?o:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(o){return typeof o=="function"?o:(o[te]||(o[te]=function(u){return o.handleEvent(u)}),o[te])}function ie(){Ne.call(this),this.i=new cs(this),this.M=this,this.F=null}N(ie,Ne),ie.prototype[sn]=!0,ie.prototype.removeEventListener=function(o,u,d,p){H(this,o,u,d,p)};function de(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Oe(u,o);else if(u instanceof Oe)u.target=u.target||o;else{var P=u;u=new Oe(p,o),I(u,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var W=u.g=d[D];P=ye(W,p,!0,u)&&P}if(W=u.g=o,P=ye(W,p,!0,u)&&P,P=ye(W,p,!1,u)&&P,d)for(D=0;D<d.length;D++)W=u.g=d[D],P=ye(W,p,!1,u)&&P}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)$t(d[p]);delete o.g[u],o.h--}}this.F=null},ie.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},ie.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function ye(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,D=0;D<u.length;++D){var W=u[D];if(W&&!W.da&&W.capture==d){var Re=W.listener,Je=W.ha||W.src;W.fa&&v(o.i,W),P=Re.call(Je,p)!==!1&&P}}return P&&!p.defaultPrevented}function Ge(o,u,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Qe(o){o.g=Ge(()=>{o.g=null,o.i&&(o.i=!1,Qe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ct extends Ne{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(o){Ne.call(this),this.h=o,this.g={}}N(rt,Ne);var Sn=[];function us(o){re(o.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},o),o.g={}}rt.prototype.N=function(){rt.aa.N.call(this),us(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ye=l.JSON.stringify,Pt=l.JSON.parse,Ai=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Rr(){}Rr.prototype.h=null;function mu(o){return o.h||(o.h=o.i())}function _u(){}var hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ea(){Oe.call(this,"d")}N(Ea,Oe);function Ta(){Oe.call(this,"c")}N(Ta,Oe);var Zn={},yu=null;function bi(){return yu=yu||new ie}Zn.La="serverreachability";function vu(o){Oe.call(this,Zn.La,o)}N(vu,Oe);function ds(o){const u=bi();de(u,new vu(u))}Zn.STAT_EVENT="statevent";function Eu(o,u){Oe.call(this,Zn.STAT_EVENT,o),this.stat=u}N(Eu,Oe);function ft(o){const u=bi();de(u,new Eu(u,o))}Zn.Ma="timingevent";function Tu(o,u){Oe.call(this,Zn.Ma,o),this.size=u}N(Tu,Oe);function fs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function qm(o,u,d,p,P,D){o.info(function(){if(o.g)if(D)for(var W="",Re=D.split("&"),Je=0;Je<Re.length;Je++){var Te=Re[Je].split("=");if(1<Te.length){var st=Te[0];Te=Te[1];var it=st.split("_");W=2<=it.length&&it[1]=="type"?W+(st+"="+Te+"&"):W+(st+"=redacted&")}}else W=null;else W=D;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+u+`
`+d+`
`+W})}function Hm(o,u,d,p,P,D,W){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+u+`
`+d+`
`+D+" "+W})}function Sr(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+zm(o,d)+(p?" "+p:"")})}function Wm(o,u){o.info(function(){return"TIMEOUT: "+u})}ps.prototype.info=function(){};function zm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return Ye(d)}catch{return u}}var Ri={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wa;function Si(){}N(Si,Rr),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},wa=new Si;function Cn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Iu}function Iu(){this.i=null,this.g="",this.h=!1}var Au={},Ia={};function Aa(o,u,d){o.L=1,o.v=Di(on(u)),o.m=d,o.P=!0,bu(o,null)}function bu(o,u){o.F=Date.now(),Ci(o),o.A=on(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Uu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Iu,o.g=rh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Ct(y(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Sn[0]=P.toString()),P=Sn);for(var D=0;D<P.length;D++){var W=L(d,P[D],p||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ds(),qm(o.i,o.u,o.A,o.l,o.R,o.m)}Cn.prototype.ca=function(o){o=o.target;const u=this.M;u&&an(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const it=an(this.g);var u=this.g.Ba();const kr=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||zu(this.g)))){this.J||it!=4||u==7||(u==8||0>=kr?ds(3):ds(2)),ba(this);var d=this.g.Z();this.X=d;t:if(Ru(this)){var p=zu(this.g);o="";var P=p.length,D=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){er(this),gs(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(D&&u==P-1)});p.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,Hm(this.i,this.u,this.A,this.l,this.R,it,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,Je=this.g;if((Re=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Re)){var Te=Re;break t}}Te=null}if(d=Te)Sr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ra(this,d);else{this.o=!1,this.s=3,ft(12),er(this),gs(this);break e}}if(this.P){d=!0;let Ot;for(;!this.J&&this.C<W.length;)if(Ot=Km(this,W),Ot==Ia){it==4&&(this.s=4,ft(14),d=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Au){this.s=4,ft(15),Sr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Sr(this.i,this.l,Ot,null),Ra(this,Ot);if(Ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||W.length!=0||this.h.h||(this.s=1,ft(16),d=!1),this.o=this.o&&d,!d)Sr(this.i,this.l,W,"[Invalid Chunked Response]"),er(this),gs(this);else if(0<W.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Va(st),st.M=!0,ft(11))}}else Sr(this.i,this.l,W,null),Ra(this,W);it==4&&er(this),this.o&&!this.J&&(it==4?Zu(this.j,this):(this.o=!1,Ci(this)))}else u_(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),er(this),gs(this)}}}catch{}finally{}};function Ru(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Km(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Ia:(d=Number(u.substring(d,p)),isNaN(d)?Au:(p+=1,p+d>u.length?Ia:(u=u.slice(p,p+d),o.C=p+d,u)))}Cn.prototype.cancel=function(){this.J=!0,er(this)};function Ci(o){o.S=Date.now()+o.I,Su(o,o.I)}function Su(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=fs(y(o.ba,o),u)}function ba(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Wm(this.i,this.A),this.L!=2&&(ds(),ft(17)),er(this),this.s=2,gs(this)):Su(this,this.S-o)};function gs(o){o.j.G==0||o.J||Zu(o.j,o)}function er(o){ba(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,us(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ra(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Sa(d.h,o))){if(!o.K&&Sa(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Li(d),xi(d);else break e;Da(d),ft(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=fs(y(d.Za,d),6e3));if(1>=ku(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else nr(d,11)}else if((o.K||d.g==o)&&Li(d),!Q(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Te=P[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const st=Te[3];st!=null&&(d.la=st,d.j.info("VER="+d.la));const it=Te[4];it!=null&&(d.Aa=it,d.j.info("SVER="+d.Aa));const kr=Te[5];kr!=null&&typeof kr=="number"&&0<kr&&(p=1.5*kr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ot=o.g;if(Ot){const Ui=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var D=p.h;D.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ca(D,D.h),D.h=null))}if(p.D){const Na=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Na&&(p.ya=Na,ke(p.I,p.D,Na))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var W=o;if(p.qa=nh(p,p.J?p.ia:null,p.W),W.K){Du(p.h,W);var Re=W,Je=p.L;Je&&(Re.I=Je),Re.B&&(ba(Re),Ci(Re)),p.g=W}else Ju(p);0<d.i.length&&Mi(d)}else Te[0]!="stop"&&Te[0]!="close"||nr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?nr(d,7):ka(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}ds(4)}catch{}}var Gm=class{constructor(o,u){this.g=o,this.map=u}};function Cu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ku(o){return o.h?1:o.g?o.g.size:0}function Sa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ca(o,u){o.g?o.g.add(u):o.h=u}function Du(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Cu.prototype.cancel=function(){if(this.i=Vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Vu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return M(o.i)}function Qm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function Ym(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function Nu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Ym(o),p=Qm(o),P=p.length,D=0;D<P;D++)u.call(void 0,p[D],d&&d[D],o)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),P=null;if(0<=p){var D=o[d].substring(0,p);P=o[d].substring(p+1)}else D=o[d];u(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function tr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof tr){this.h=o.h,Pi(this,o.j),this.o=o.o,this.g=o.g,ki(this,o.s),this.l=o.l;var u=o.i,d=new ys;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),xu(this,d),this.m=o.m}else o&&(u=String(o).match(Ou))?(this.h=!1,Pi(this,u[1]||"",!0),this.o=ms(u[2]||""),this.g=ms(u[3]||"",!0),ki(this,u[4]),this.l=ms(u[5]||"",!0),xu(this,u[6]||"",!0),this.m=ms(u[7]||"")):(this.h=!1,this.i=new ys(null,this.h))}tr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(_s(u,Mu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(_s(u,Mu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(_s(d,d.charAt(0)=="/"?e_:Zm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",_s(d,n_)),o.join("")};function on(o){return new tr(o)}function Pi(o,u,d){o.j=d?ms(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ki(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function xu(o,u,d){u instanceof ys?(o.i=u,r_(o.i,o.h)):(d||(u=_s(u,t_)),o.i=new ys(u,o.h))}function ke(o,u,d){o.i.set(u,d)}function Di(o){return ke(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ms(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function _s(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Xm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Xm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Mu=/[#\/\?@]/g,Zm=/[#\?:]/g,e_=/[#\?]/g,t_=/[#\?@]/g,n_=/#/g;function ys(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&Jm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ys.prototype,t.add=function(o,u){Pn(this),this.i=null,o=Cr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Lu(o,u){Pn(o),u=Cr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Fu(o,u){return Pn(o),u=Cr(o,u),o.g.has(u)}t.forEach=function(o,u){Pn(this),this.g.forEach(function(d,p){d.forEach(function(P){o.call(u,P,p,this)},this)},this)},t.na=function(){Pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const P=o[p];for(let D=0;D<P.length;D++)d.push(u[p])}return d},t.V=function(o){Pn(this);let u=[];if(typeof o=="string")Fu(this,o)&&(u=u.concat(this.g.get(Cr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return Pn(this),this.i=null,o=Cr(this,o),Fu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Uu(o,u,d){Lu(o,u),0<d.length&&(o.i=null,o.g.set(Cr(o,u),M(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const D=encodeURIComponent(String(p)),W=this.V(p);for(p=0;p<W.length;p++){var P=D;W[p]!==""&&(P+="="+encodeURIComponent(String(W[p]))),o.push(P)}}return this.i=o.join("&")};function Cr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function r_(o,u){u&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(d,p){var P=p.toLowerCase();p!=P&&(Lu(this,p),Uu(this,P,d))},o)),o.j=u}function s_(o,u){const d=new ps;if(l.Image){const p=new Image;p.onload=S(kn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=S(kn,d,"TestLoadImage: error",!1,u,p),p.onabort=S(kn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(kn,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function i_(o,u){const d=new ps,p=new AbortController,P=setTimeout(()=>{p.abort(),kn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(D=>{clearTimeout(P),D.ok?kn(d,"TestPingServer: ok",!0,u):kn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),kn(d,"TestPingServer: error",!1,u)})}function kn(o,u,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function o_(){this.g=new Ai}function a_(o,u,d){const p=d||"";try{Nu(o,function(P,D){let W=P;h(P)&&(W=Ye(P)),u.push(p+D+"="+encodeURIComponent(W))})}catch(P){throw u.push(p+"type="+encodeURIComponent("_badmap")),P}}function Vi(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Vi,Rr),Vi.prototype.g=function(){return new Ni(this.l,this.j)},Vi.prototype.i=function(o){return function(){return o}}({});function Ni(o,u){ie.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ni,ie),t=Ni.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Es(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?vs(this):Es(this),this.readyState==3&&Bu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,vs(this))},t.Qa=function(o){this.g&&(this.response=o,vs(this))},t.ga=function(){this.g&&vs(this)};function vs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Es(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function $u(o){let u="";return re(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Pa(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=$u(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ke(o,u,d))}function xe(o){ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(xe,ie);var l_=/^https?$/i,c_=["POST","PUT"];t=xe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wa.g(),this.v=this.o?mu(this.o):mu(wa),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){ju(this,D);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())d.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(c_,u,void 0))||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,W]of d)this.g.setRequestHeader(D,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wu(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){ju(this,D)}};function ju(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,qu(o),Oi(o)}function qu(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),Oi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oi(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hu(this):this.bb())},t.bb=function(){Hu(this)};function Hu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||an(o)!=4||o.Z()!=2)){if(o.u&&an(o)==4)Ge(o.Ea,0,o);else if(de(o,"readystatechange"),an(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=W===0){var P=String(o.D).match(Ou)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!l_.test(P?P.toLowerCase():"")}d=p}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var D=2<an(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",qu(o)}}finally{Oi(o)}}}}function Oi(o,u){if(o.g){Wu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||de(o,"ready");try{d.onreadystatechange=p}catch{}}}function Wu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function an(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Pt(u)}};function zu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function u_(o){const u={};o=(o.g&&2<=an(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Q(o[p]))continue;var d=R(o[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[P]||[];u[P]=D,D.push(d)}A(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Ku(o){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ts("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ts("baseRetryDelayMs",5e3,o),this.cb=Ts("retryDelaySeedMs",1e4,o),this.Wa=Ts("forwardChannelMaxRetries",2,o),this.wa=Ts("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Cu(o&&o.concurrentRequestLimit),this.Da=new o_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ku.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,p){ft(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=nh(this,null,this.W),Mi(this)};function ka(o){if(Gu(o),o.G==3){var u=o.U++,d=on(o.I);if(ke(d,"SID",o.K),ke(d,"RID",u),ke(d,"TYPE","terminate"),ws(o,d),u=new Cn(o,o.j,u),u.L=2,u.v=Di(on(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=rh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ci(u)}th(o)}function xi(o){o.g&&(Va(o),o.g.cancel(),o.g=null)}function Gu(o){xi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Li(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Mi(o){if(!Pu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ee||Bt(),me||(Ee(),me=!0),yt.add(u,o),o.B=0}}function h_(o,u){return ku(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=fs(y(o.Ga,o,u),eh(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Cn(this,this.j,o);let D=this.o;if(this.S&&(D?(D=_(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Yu(this,P,u),d=on(this.I),ke(d,"RID",o),ke(d,"CVER",22),this.D&&ke(d,"X-HTTP-Session-Id",this.D),ws(this,d),D&&(this.O?u="headers="+encodeURIComponent(String($u(D)))+"&"+u:this.m&&Pa(d,this.m,D)),Ca(this.h,P),this.Ua&&ke(d,"TYPE","init"),this.P?(ke(d,"$req",u),ke(d,"SID","null"),P.T=!0,Aa(P,d,null)):Aa(P,d,u),this.G=2}}else this.G==3&&(o?Qu(this,o):this.i.length==0||Pu(this.h)||Qu(this))};function Qu(o,u){var d;u?d=u.l:d=o.U++;const p=on(o.I);ke(p,"SID",o.K),ke(p,"RID",d),ke(p,"AID",o.T),ws(o,p),o.m&&o.o&&Pa(p,o.m,o.o),d=new Cn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Yu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ca(o.h,d),Aa(d,p,u)}function ws(o,u){o.H&&re(o.H,function(d,p){ke(u,p,d)}),o.l&&Nu({},function(d,p){ke(u,p,d)})}function Yu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var P=o.i;let D=-1;for(;;){const W=["count="+d];D==-1?0<d?(D=P[0].g,W.push("ofs="+D)):D=0:W.push("ofs="+D);let Re=!0;for(let Je=0;Je<d;Je++){let Te=P[Je].g;const st=P[Je].map;if(Te-=D,0>Te)D=Math.max(0,P[Je].g-100),Re=!1;else try{a_(st,W,"req"+Te+"_")}catch{p&&p(st)}}if(Re){p=W.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function Ju(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ee||Bt(),me||(Ee(),me=!0),yt.add(u,o),o.v=0}}function Da(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=fs(y(o.Fa,o),eh(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Xu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=fs(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),xi(this),Xu(this))};function Va(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Xu(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=on(o.qa);ke(u,"RID","rpc"),ke(u,"SID",o.K),ke(u,"AID",o.T),ke(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ke(u,"TO",o.ja),ke(u,"TYPE","xmlhttp"),ws(o,u),o.m&&o.o&&Pa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Di(on(u)),d.m=null,d.P=!0,bu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,xi(this),Da(this),ft(19))};function Li(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Zu(o,u){var d=null;if(o.g==u){Li(o),Va(o),o.g=null;var p=2}else if(Sa(o.h,u))d=u.D,Du(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;p=bi(),de(p,new Tu(p,d)),Mi(o)}else Ju(o);else if(P=u.s,P==3||P==0&&0<u.X||!(p==1&&h_(o,u)||p==2&&Da(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),P){case 1:nr(o,5);break;case 4:nr(o,10);break;case 3:nr(o,6);break;default:nr(o,2)}}}function eh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function nr(o,u){if(o.j.info("Error code "+u),u==2){var d=y(o.fb,o),p=o.Xa;const P=!p;p=new tr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pi(p,"https"),Di(p),P?s_(p.toString(),d):i_(p.toString(),d)}else ft(2);o.G=0,o.l&&o.l.sa(u),th(o),Gu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function th(o){if(o.G=0,o.ka=[],o.l){const u=Vu(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function nh(o,u,d){var p=d instanceof tr?on(d):new tr(d);if(p.g!="")u&&(p.g=u+"."+p.g),ki(p,p.s);else{var P=l.location;p=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var D=new tr(null);p&&Pi(D,p),u&&(D.g=u),P&&ki(D,P),d&&(D.l=d),p=D}return d=o.D,u=o.ya,d&&u&&ke(p,d,u),ke(p,"VER",o.la),ws(o,p),p}function rh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new xe(new Vi({eb:d})):new xe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}t=sh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fi(){}Fi.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){ie.call(this),this.g=new Ku(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Pr(this)}N(wt,ie),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){ka(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ye(o),o=d);u.i.push(new Gm(u.Ya++,o)),u.G==3&&Mi(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,ka(this.g),delete this.g,wt.aa.N.call(this)};function ih(o){Ea.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}N(ih,Ea);function oh(){Ta.call(this),this.status=1}N(oh,Ta);function Pr(o){this.g=o}N(Pr,sh),Pr.prototype.ua=function(){de(this.g,"a")},Pr.prototype.ta=function(o){de(this.g,new ih(o))},Pr.prototype.sa=function(o){de(this.g,new oh)},Pr.prototype.ra=function(){de(this.g,"b")},Fi.prototype.createWebChannel=Fi.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,sg=function(){return new Fi},rg=function(){return bi()},ng=Zn,Rl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ri.NO_ERROR=0,Ri.TIMEOUT=8,Ri.HTTP_ERROR=6,lo=Ri,wu.COMPLETE="complete",tg=wu,_u.EventType=hs,hs.OPEN="a",hs.CLOSE="b",hs.ERROR="c",hs.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Cs=_u,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,eg=xe}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});const gd="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let rs="10.14.0";/**
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
 */const _r=new lc("@firebase/firestore");function bs(){return _r.logLevel}function X(t,...e){if(_r.logLevel<=_e.DEBUG){const n=e.map(Ic);_r.debug(`Firestore (${rs}): ${t}`,...n)}}function In(t,...e){if(_r.logLevel<=_e.ERROR){const n=e.map(Ic);_r.error(`Firestore (${rs}): ${t}`,...n)}}function Qr(t,...e){if(_r.logLevel<=_e.WARN){const n=e.map(Ic);_r.warn(`Firestore (${rs}): ${t}`,...n)}}function Ic(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function be(t,e){t||le()}function he(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ig{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class TI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wI{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new ig(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new at(e)}}class II{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new II(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new bI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class og{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=SI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Yr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new We(0,0))}static max(){return new ue(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ei{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ei?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends ei{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const CI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends ei{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return CI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Y(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(De.fromString(e))}static fromName(e){return new ne(De.fromString(e).popFirst(5))}static empty(){return new ne(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new De(e.slice()))}}function PI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new Kn(s,ne.empty(),e)}function kI(t){return new Kn(t.readTime,t.key,-1)}class Kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kn(ue.min(),ne.empty(),-1)}static max(){return new Kn(ue.max(),ne.empty(),-1)}}function DI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const VI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function mi(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==VI)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function OI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _i(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ac.oe=-1;function ia(t){return t==null}function Do(t){return t===0&&1/t==-1/0}function xI(t){return typeof t=="number"&&Number.isInteger(t)&&!Do(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function md(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ir(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ag(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _d(this.data.getIterator())}getIteratorFrom(e){return new _d(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class _d{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new et(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lg("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const MI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(be(!!t),typeof t=="string"){let e=0;const n=MI.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function bc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rc(t){const e=t.mapValue.fields.__previous_value__;return bc(e)?Rc(e):e}function ti(t){const e=Gn(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class LI{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zi={mapValue:{}};function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bc(t)?4:UI(t)?9007199254740991:FI(t)?10:11:le()}function nn(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ti(t).isEqual(ti(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Gn(s.timestampValue),l=Gn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yr(s.bytesValue).isEqual(yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ue(s.doubleValue),l=Ue(i.doubleValue);return a===l?Do(a)===Do(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Yr(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(md(a)!==md(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!nn(a[c],l[c])))return!1;return!0}(t,e);default:return le()}}function ri(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ue(i.integerValue||i.doubleValue),c=Ue(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return yd(t.timestampValue,e.timestampValue);case 4:return yd(ti(t),ti(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,a){const l=yr(i),c=yr(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=we(l[h],c[h]);if(f!==0)return f}return we(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=we(Ue(i.latitude),Ue(a.latitude));return l!==0?l:we(Ue(i.longitude),Ue(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vd(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const g=i.fields||{},y=a.fields||{},S=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=(c=y.value)===null||c===void 0?void 0:c.arrayValue,M=we(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return M!==0?M:vd(S,N)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===zi.mapValue&&a===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(a===zi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const y=we(c[g],f[g]);if(y!==0)return y;const S=Jr(l[c[g]],h[f[g]]);if(S!==0)return S}return we(c.length,f.length)}(t.mapValue,e.mapValue);default:throw le()}}function yd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Gn(t),r=Gn(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function vd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Jr(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Xr(t){return Sl(t)}function Sl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Sl(n.fields[a])}`;return s+"}"}(t.mapValue):le()}function Ed(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cl(t){return!!t&&"integerValue"in t}function Sc(t){return!!t&&"arrayValue"in t}function Td(t){return!!t&&"nullValue"in t}function wd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function co(t){return!!t&&"mapValue"in t}function FI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ir(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(n)}setAll(e){let n=Ze.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=js(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];co(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ir(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(js(this.value))}}function cg(t){const e=[];return Ir(t.fields,(n,r)=>{const s=new Ze([n]);if(co(r)){const i=cg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Rt(e)}/**
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
 */class ct{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,ue.min(),ue.min(),ue.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,ue.min(),ue.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ue.min(),ue.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vo{constructor(e,n){this.position=e,this.inclusive=n}}function Id(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),n.key):r=Jr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ad(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class si{constructor(e,n="asc"){this.field=e,this.dir=n}}function BI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ug{}class qe extends ug{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jI(e,n,r):n==="array-contains"?new WI(e,r):n==="in"?new zI(e,r):n==="not-in"?new KI(e,r):n==="array-contains-any"?new GI(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qI(e,r):new HI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jr(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(Jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends ug{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ut(e,n)}matches(e){return hg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hg(t){return t.op==="and"}function dg(t){return $I(t)&&hg(t)}function $I(t){for(const e of t.filters)if(e instanceof Ut)return!1;return!0}function Pl(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Xr(t.value);if(dg(t))return t.filters.map(e=>Pl(e)).join(",");{const e=t.filters.map(n=>Pl(n)).join(",");return`${t.op}(${e})`}}function fg(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)}(t,e):t instanceof Ut?function(r,s){return s instanceof Ut&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&fg(a,s.filters[l]),!0):!1}(t,e):void le()}function pg(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Xr(n.value)}`}(t):t instanceof Ut?function(n){return n.op.toString()+" {"+n.getFilters().map(pg).join(" ,")+"}"}(t):"Filter"}class jI extends qe{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class qI extends qe{constructor(e,n){super(e,"in",n),this.keys=gg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HI extends qe{constructor(e,n){super(e,"not-in",n),this.keys=gg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class WI extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sc(n)&&ri(n.arrayValue,this.value)}}class zI extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ri(this.value.arrayValue,n)}}class KI extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ri(this.value.arrayValue,n)}}class GI extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ri(this.value.arrayValue,r))}}/**
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
 */class QI{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function bd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new QI(t,e,n,r,s,i,a)}function Cc(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ia(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xr(r)).join(",")),e.ue=n}return e.ue}function Pc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!BI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ad(t.startAt,e.startAt)&&Ad(t.endAt,e.endAt)}function kl(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ss{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function YI(t,e,n,r,s,i,a,l){return new ss(t,e,n,r,s,i,a,l)}function kc(t){return new ss(t)}function Rd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mg(t){return t.collectionGroup!==null}function qs(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new et(Ze.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new si(i,r))}),n.has(Ze.keyField().canonicalString())||e.ce.push(new si(Ze.keyField(),r))}return e.ce}function Jt(t){const e=he(t);return e.le||(e.le=JI(e,qs(t))),e.le}function JI(t,e){if(t.limitType==="F")return bd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new si(s.field,i)});const n=t.endAt?new Vo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vo(t.startAt.position,t.startAt.inclusive):null;return bd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dl(t,e){const n=t.filters.concat([e]);return new ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vl(t,e,n){return new ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oa(t,e){return Pc(Jt(t),Jt(e))&&t.limitType===e.limitType}function _g(t){return`${Cc(Jt(t))}|lt:${t.limitType}`}function Nr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>pg(s)).join(", ")}]`),ia(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Xr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Xr(s)).join(",")),`Target(${r})`}(Jt(t))}; limitType=${t.limitType})`}function aa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Id(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,qs(r),s)||r.endAt&&!function(a,l,c){const h=Id(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,qs(r),s))}(t,e)}function XI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yg(t){return(e,n)=>{let r=!1;for(const s of qs(t)){const i=ZI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ZI(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Jr(c,h):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ag(this.inner)}size(){return this.innerSize}}/**
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
 */const eA=new Ve(ne.comparator);function An(){return eA}const vg=new Ve(ne.comparator);function Ps(...t){let e=vg;for(const n of t)e=e.insert(n.key,n);return e}function Eg(t){let e=vg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Hs()}function Tg(){return Hs()}function Hs(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const tA=new Ve(ne.comparator),nA=new et(ne.comparator);function ge(...t){let e=nA;for(const n of t)e=e.add(n);return e}const rA=new et(we);function sA(){return rA}/**
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
 */function Dc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function wg(t){return{integerValue:""+t}}function iA(t,e){return xI(e)?wg(e):Dc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class la{constructor(){this._=void 0}}function oA(t,e,n){return t instanceof No?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bc(i)&&(i=Rc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof ii?Ag(t,e):t instanceof oi?bg(t,e):function(s,i){const a=Ig(s,i),l=Sd(a)+Sd(s.Pe);return Cl(a)&&Cl(s.Pe)?wg(l):Dc(s.serializer,l)}(t,e)}function aA(t,e,n){return t instanceof ii?Ag(t,e):t instanceof oi?bg(t,e):n}function Ig(t,e){return t instanceof Oo?function(r){return Cl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class No extends la{}class ii extends la{constructor(e){super(),this.elements=e}}function Ag(t,e){const n=Rg(e);for(const r of t.elements)n.some(s=>nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class oi extends la{constructor(e){super(),this.elements=e}}function bg(t,e){let n=Rg(e);for(const r of t.elements)n=n.filter(s=>!nn(s,r));return{arrayValue:{values:n}}}class Oo extends la{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Sd(t){return Ue(t.integerValue||t.doubleValue)}function Rg(t){return Sc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ii&&s instanceof ii||r instanceof oi&&s instanceof oi?Yr(r.elements,s.elements,nn):r instanceof Oo&&s instanceof Oo?nn(r.Pe,s.Pe):r instanceof No&&s instanceof No}(t.transform,e.transform)}class cA{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ca{}function Sg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vc(t.key,Lt.none()):new yi(t.key,t.data,Lt.none());{const n=t.data,r=Et.empty();let s=new et(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Yn(t.key,r,new Rt(s.toArray()),Lt.none())}}function uA(t,e,n){t instanceof yi?function(s,i,a){const l=s.value.clone(),c=Pd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Yn?function(s,i,a){if(!uo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Pd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Cg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Ws(t,e,n,r){return t instanceof yi?function(i,a,l,c){if(!uo(i.precondition,a))return l;const h=i.value.clone(),f=kd(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yn?function(i,a,l,c){if(!uo(i.precondition,a))return l;const h=kd(i.fieldTransforms,c,a),f=a.data;return f.setAll(Cg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,a,l){return uo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function hA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ig(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Cd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Yr(r,s,(i,a)=>lA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yi extends ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yn extends ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pd(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,aA(a,l,n[s]))}return r}function kd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,oA(i,a,e))}return r}class Vc extends ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dA extends ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Sg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,(n,r)=>Cd(n,r))&&Yr(this.baseMutations,e.baseMutations,(n,r)=>Cd(n,r))}}class Nc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return tA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Nc(e,n,r,s)}}/**
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
 */class pA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class gA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,ve;function mA(t){switch(t){default:return le();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Pg(t){if(t===void 0)return In("GRPC error has no .code"),x.UNKNOWN;switch(t){case $e.OK:return x.OK;case $e.CANCELLED:return x.CANCELLED;case $e.UNKNOWN:return x.UNKNOWN;case $e.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case $e.INTERNAL:return x.INTERNAL;case $e.UNAVAILABLE:return x.UNAVAILABLE;case $e.UNAUTHENTICATED:return x.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case $e.NOT_FOUND:return x.NOT_FOUND;case $e.ALREADY_EXISTS:return x.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return x.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case $e.ABORTED:return x.ABORTED;case $e.OUT_OF_RANGE:return x.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return x.UNIMPLEMENTED;case $e.DATA_LOSS:return x.DATA_LOSS;default:return le()}}(ve=$e||($e={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _A(){return new TextEncoder}/**
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
 */const yA=new fr([4294967295,4294967295],0);function Dd(t){const e=_A().encode(t),n=new Zp;return n.update(e),new Uint8Array(n.digest())}function Vd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new fr([n,r],0),new fr([s,i],0)]}class Oc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ks(`Invalid padding: ${n}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=fr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(fr.fromNumber(r)));return s.compare(yA)===1&&(s=new fr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Dd(e),[r,s]=Vd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Oc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=Dd(e),[r,s]=Vd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ua{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,vi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ua(ue.min(),s,new Ve(we),An(),ge())}}class vi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vi(r,n,ge(),ge(),ge())}}/**
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
 */class ho{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class kg{constructor(e,n){this.targetId=e,this.me=n}}class Dg{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Nd{constructor(){this.fe=0,this.ge=xd(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new vi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=xd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vA{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=Od(),this.Qe=new Ve(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(kl(i))if(r===0){const a=new ne(i.path);this.Ue(n,a,ct.newNoDocument(a,ue.min()))}else be(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=yr(r).toUint8Array()}catch(c){if(c instanceof lg)return Qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Oc(a,s,i)}catch(c){return Qr(c instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&kl(l.target)){const c=new ne(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,ct.newNoDocument(c,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ua(e,n,this.Qe,this.ke,r);return this.ke=An(),this.qe=Od(),this.Qe=new Ve(we),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Nd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new et(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Od(){return new Ve(ne.comparator)}function xd(){return new Ve(ne.comparator)}const EA={asc:"ASCENDING",desc:"DESCENDING"},TA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wA={and:"AND",or:"OR"};class IA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nl(t,e){return t.useProto3Json||ia(e)?e:{value:e}}function xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AA(t,e){return xo(t,e.toTimestamp())}function Xt(t){return be(!!t),ue.fromTimestamp(function(n){const r=Gn(n);return new We(r.seconds,r.nanos)}(t))}function xc(t,e){return Ol(t,e).canonicalString()}function Ol(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ng(t){const e=De.fromString(t);return be(Fg(e)),e}function xl(t,e){return xc(t.databaseId,e.path)}function Xa(t,e){const n=Ng(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(xg(n))}function Og(t,e){return xc(t.databaseId,e)}function bA(t){const e=Ng(t);return e.length===4?De.emptyPath():xg(e)}function Ml(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xg(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Md(t,e,n){return{name:xl(t,e),fields:n.value.mapValue.fields}}function RA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string"),tt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),tt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?x.UNKNOWN:Pg(h.code);return new Y(f,h.message||"")}(a);n=new Dg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xa(t,r.document.name),i=Xt(r.document.updateTime),a=r.document.createTime?Xt(r.document.createTime):ue.min(),l=new Et({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ho(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xa(t,r.document),i=r.readTime?Xt(r.readTime):ue.min(),a=ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ho([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xa(t,r.document),i=r.removedTargetIds||[];n=new ho([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new gA(s,i),l=r.targetId;n=new kg(l,a)}}return n}function SA(t,e){let n;if(e instanceof yi)n={update:Md(t,e.key,e.value)};else if(e instanceof Vc)n={delete:xl(t,e.key)};else if(e instanceof Yn)n={update:Md(t,e.key,e.data),updateMask:MA(e.fieldMask)};else{if(!(e instanceof dA))return le();n={verify:xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof No)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ii)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Oo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function CA(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?Xt(s.updateTime):Xt(i);return a.isEqual(ue.min())&&(a=Xt(i)),new cA(a,s.transformResults||[])}(n,e))):[]}function PA(t,e){return{documents:[Og(t,e.path)]}}function kA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Og(t,s);const i=function(h){if(h.length!==0)return Lg(Ut.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Or(y.field),direction:NA(y.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Nl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function DA(t){let e=bA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const y=Mg(g);return y instanceof Ut&&dg(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(y=>function(N){return new si(xr(N.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,ia(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(g){const y=!!g.before,S=g.values||[];return new Vo(S,y)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const y=!g.before,S=g.values||[];return new Vo(S,y)}(n.endAt)),YI(e,s,a,i,l,"F",c,h)}function VA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xr(n.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ut.create(n.compositeFilter.filters.map(r=>Mg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function NA(t){return EA[t]}function OA(t){return TA[t]}function xA(t){return wA[t]}function Or(t){return{fieldPath:t.canonicalString()}}function xr(t){return Ze.fromServerFormat(t.fieldPath)}function Lg(t){return t instanceof qe?function(n){if(n.op==="=="){if(wd(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NAN"}};if(Td(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wd(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NAN"}};if(Td(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(n.field),op:OA(n.op),value:n.value}}}(t):t instanceof Ut?function(n){const r=n.getFilters().map(s=>Lg(s));return r.length===1?r[0]:{compositeFilter:{op:xA(n.op),filters:r}}}(t):le()}function MA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Un{constructor(e,n,r,s,i=ue.min(),a=ue.min(),l=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class LA{constructor(e){this.ct=e}}function FA(t){const e=DA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vl(e,e.limit,"L"):e}/**
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
 */class UA{constructor(){this.un=new BA}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Kn.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class BA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(De.comparator)).toArray()}}/**
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
 */class Zr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zr(0)}static kn(){return new Zr(-1)}}/**
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
 */class $A{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class jA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ws(r.mutation,s,Rt.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Ps();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=An();const a=Hs(),l=function(){return Hs()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Yn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ws(f.mutation,h,f.mutation.getFieldMask(),We.now())):a.set(h.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new jA(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Hs();let s=new Ve((a,l)=>a-l),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Rt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const g=(s.get(l.batchId)||ge()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=Tg();f.forEach(y=>{if(!i.has(y)){const S=Sg(n.get(y),r.get(y));S!==null&&g.set(y,S),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return $.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return ne.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(cr());let l=-1,c=i;return a.next(h=>$.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{c=c.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ge())).next(f=>({batchId:l,changes:Eg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=Ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ps();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const h=function(g,y){return new ss(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ct.newInvalidDocument(f)))});let l=Ps();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Ws(f.mutation,h,Rt.empty(),We.now()),aa(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class HA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:FA(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),$.resolve()}}/**
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
 */class WA{constructor(){this.overlays=new Ve(ne.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,a=new ne(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=cr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=cr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return $.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pA(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class zA{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Mc{constructor(){this.Tr=new et(ze.Er),this.dr=new et(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ne(new De([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ne(new De([])),r=new ze(n,e),s=new ze(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ne.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||ne.comparator(e.key,n.key)}}/**
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
 */class KA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new et(ze.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(a)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(we);return n.forEach(s=>{const i=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const a=new ze(new ne(i),0);let l=new et(we);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GA{constructor(e){this.Mr=e,this.docs=function(){return new Ve(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=An();const a=n.path,l=new ne(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||DI(kI(f),r)<=0||(s.has(f.key)||aa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QA(this)}getSize(e){return $.resolve(this.size)}}class QA extends $A{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class YA{constructor(e){this.persistence=e,this.Nr=new is(n=>Cc(n),Pc),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Mc,this.targetCount=0,this.kr=Zr.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Zr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class JA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ac(0),this.Kr=!1,this.Kr=!0,this.$r=new zA,this.referenceDelegate=e(this),this.Ur=new YA(this),this.indexManager=new UA,this.remoteDocumentCache=function(s){return new GA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new LA(n),this.Gr=new HA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new KA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new XA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class XA extends NI{constructor(e){super(),this.currentSequenceNumber=e}}class Lc{constructor(e){this.persistence=e,this.Jr=new Mc,this.Yr=null}static Zr(e){return new Lc(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const s=ne.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Fc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fc(e,n.fromCache,r,s)}}/**
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
 */class ZA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Jv()?8:OI(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ZA;return this.Xi(e,n,a).next(l=>{if(i.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(bs()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Nr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(bs()<=_e.DEBUG&&X("QueryEngine","Query:",Nr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(bs()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Nr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(n))):$.resolve())}Yi(e,n){if(Rd(n))return $.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Vl(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ge(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,a,c.readTime)?this.Yi(e,Vl(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return Rd(n)||s.isEqual(ue.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?$.resolve(null):(bs()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nr(n)),this.rs(e,a,n,PI(s,-1)).next(l=>l))})}ts(e,n){let r=new et(yg(e));return n.forEach((s,i)=>{aa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return bs()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Nr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Kn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class tb{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ve(we),this._s=new is(i=>Cc(i),Pc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function nb(t,e,n,r){return new tb(t,e,n,r)}async function Ug(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ge();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function rb(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const g=h.batch,y=g.keys();let S=$.resolve();return y.forEach(N=>{S=S.next(()=>f.getEntry(c,N)).next(M=>{const O=h.docVersions.get(N);be(O!==null),M.version.compareTo(O)<0&&(g.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),f.addEntry(M)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ge();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Bg(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function sb(t,e){const n=he(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=s.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,g)));let S=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(tt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(g,S),function(M,O,z){return M.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(y,S,f)&&l.push(n.Ur.updateTargetData(i,S))});let c=An(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(ib(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(ue.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function ib(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=An();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function ob(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ab(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new Un(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ll(t,e,n){const r=he(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_i(a))throw a;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ld(t,e,n){const r=he(t);let s=ue.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=he(c),y=g._s.get(f);return y!==void 0?$.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(r,a,Jt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:ue.min(),n?i:ge())).next(l=>(lb(r,XI(e),l),{documents:l,Ts:i})))}function lb(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Fd{constructor(){this.activeTargetIds=sA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cb{constructor(){this.so=new Fd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ub{_o(e){}shutdown(){}}/**
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
 */class Ud{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ki=null;function Za(){return Ki===null?Ki=function(){return 268435456+Math.round(2147483648*Math.random())}():Ki++,"0x"+Ki.toString(16)}/**
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
 */const hb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class db{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ot="WebChannelConnection";class fb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const l=Za(),c=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,c,h,s).then(f=>(X("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Qr("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,a,l){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=hb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Za();return new Promise((a,l)=>{const c=new eg;c.setWithCredentials(!0),c.listenOnce(tg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case lo.NO_ERROR:const f=c.getResponseJson();X(ot,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case lo.TIMEOUT:X(ot,`RPC '${e}' ${i} timed out`),l(new Y(x.DEADLINE_EXCEEDED,"Request time out"));break;case lo.HTTP_ERROR:const g=c.getStatus();if(X(ot,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const N=function(O){const z=O.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(z)>=0?z:x.UNKNOWN}(S.status);l(new Y(N,S.message))}else l(new Y(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(x.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{X(ot,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(ot,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Za(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sg(),l=rg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(ot,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);let y=!1,S=!1;const N=new db({Io:O=>{S?X(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(y||(X(ot,`Opening RPC '${e}' stream ${s} transport.`),g.open(),y=!0),X(ot,`RPC '${e}' stream ${s} sending:`,O),g.send(O))},To:()=>g.close()}),M=(O,z,Q)=>{O.listen(z,k=>{try{Q(k)}catch(m){setTimeout(()=>{throw m},0)}})};return M(g,Cs.EventType.OPEN,()=>{S||(X(ot,`RPC '${e}' stream ${s} transport opened.`),N.yo())}),M(g,Cs.EventType.CLOSE,()=>{S||(S=!0,X(ot,`RPC '${e}' stream ${s} transport closed`),N.So())}),M(g,Cs.EventType.ERROR,O=>{S||(S=!0,Qr(ot,`RPC '${e}' stream ${s} transport errored:`,O),N.So(new Y(x.UNAVAILABLE,"The operation could not be completed")))}),M(g,Cs.EventType.MESSAGE,O=>{var z;if(!S){const Q=O.data[0];be(!!Q);const k=Q,m=k.error||((z=k[0])===null||z===void 0?void 0:z.error);if(m){X(ot,`RPC '${e}' stream ${s} received error:`,m);const j=m.status;let re=function(T){const I=$e[T];if(I!==void 0)return Pg(I)}(j),A=m.message;re===void 0&&(re=x.INTERNAL,A="Unknown error status: "+j+" with message "+m.message),S=!0,N.So(new Y(re,A)),g.close()}else X(ot,`RPC '${e}' stream ${s} received:`,Q),N.bo(Q)}}),M(l,ng.STAT_EVENT,O=>{O.stat===Rl.PROXY?X(ot,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Rl.NOPROXY&&X(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function el(){return typeof document<"u"?document:null}/**
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
 */function ha(t){return new IA(t,!0)}/**
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
 */class $g{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class jg{constructor(e,n,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $g(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pb extends jg{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=RA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ue.min():a.readTime?Xt(a.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ml(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=kl(c)?{documents:PA(i,c)}:{query:kA(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Vg(i,a.resumeToken);const h=Nl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ue.min())>0){l.readTime=xo(i,a.snapshotVersion.toTimestamp());const h=Nl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=VA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ml(this.serializer),n.removeTarget=e,this.a_(n)}}class gb extends jg{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=CA(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ml(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SA(this.serializer,r))};this.a_(n)}}/**
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
 */class mb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Ol(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(x.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Ol(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(x.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class _b{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(In(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class yb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ar(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=he(c);h.L_.add(4),await Ei(h),h.q_.set("Unknown"),h.L_.delete(4),await da(h)}(this))})}),this.q_=new _b(r,s)}}async function da(t){if(Ar(t))for(const e of t.B_)await e(!0)}async function Ei(t){for(const e of t.B_)await e(!1)}function qg(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),jc(n)?$c(n):os(n).r_()&&Bc(n,e))}function Uc(t,e){const n=he(t),r=os(n);n.N_.delete(e),r.r_()&&Hg(n,e),n.N_.size===0&&(r.r_()?r.o_():Ar(n)&&n.q_.set("Unknown"))}function Bc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}os(t).A_(e)}function Hg(t,e){t.Q_.xe(e),os(t).R_(e)}function $c(t){t.Q_=new vA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),os(t).start(),t.q_.v_()}function jc(t){return Ar(t)&&!os(t).n_()&&t.N_.size>0}function Ar(t){return he(t).L_.size===0}function Wg(t){t.Q_=void 0}async function vb(t){t.q_.set("Online")}async function Eb(t){t.N_.forEach((e,n)=>{Bc(t,e)})}async function Tb(t,e){Wg(t),jc(t)?(t.q_.M_(e),$c(t)):t.q_.set("Unknown")}async function wb(t,e,n){if(t.q_.set("Online"),e instanceof Dg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mo(t,r)}else if(e instanceof ho?t.Q_.Ke(e):e instanceof kg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await Bg(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),Hg(i,c);const g=new Un(f.target,c,h,f.sequenceNumber);Bc(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Mo(t,r)}}async function Mo(t,e,n){if(!_i(e))throw e;t.L_.add(1),await Ei(t),t.q_.set("Offline"),n||(n=()=>Bg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await da(t)})}function zg(t,e){return e().catch(n=>Mo(t,n,e))}async function fa(t){const e=he(t),n=Qn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Ib(e);)try{const s=await ob(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Ab(e,s)}catch(s){await Mo(e,s)}Kg(e)&&Gg(e)}function Ib(t){return Ar(t)&&t.O_.length<10}function Ab(t,e){t.O_.push(e);const n=Qn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Kg(t){return Ar(t)&&!Qn(t).n_()&&t.O_.length>0}function Gg(t){Qn(t).start()}async function bb(t){Qn(t).p_()}async function Rb(t){const e=Qn(t);for(const n of t.O_)e.m_(n.mutations)}async function Sb(t,e,n){const r=t.O_.shift(),s=Nc.from(r,e,n);await zg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fa(t)}async function Cb(t,e){e&&Qn(t).V_&&await async function(r,s){if(function(a){return mA(a)&&a!==x.ABORTED}(s.code)){const i=r.O_.shift();Qn(r).s_(),await zg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fa(r)}}(t,e),Kg(t)&&Gg(t)}async function Bd(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Ar(n);n.L_.add(3),await Ei(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await da(n)}async function Pb(t,e){const n=he(t);e?(n.L_.delete(2),await da(n)):e||(n.L_.add(2),await Ei(n),n.q_.set("Unknown"))}function os(t){return t.K_||(t.K_=function(n,r,s){const i=he(n);return i.w_(),new pb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:vb.bind(null,t),Ro:Eb.bind(null,t),mo:Tb.bind(null,t),d_:wb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),jc(t)?$c(t):t.q_.set("Unknown")):(await t.K_.stop(),Wg(t))})),t.K_}function Qn(t){return t.U_||(t.U_=function(n,r,s){const i=he(n);return i.w_(),new gb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bb.bind(null,t),mo:Cb.bind(null,t),f_:Rb.bind(null,t),g_:Sb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await fa(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class qc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new qc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hc(t,e){if(In("AsyncQueue",`${e}: ${t}`),_i(t))return new Y(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Ps(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class $d{constructor(){this.W_=new Ve(ne.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new es(e,n,Hr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class kb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Db{constructor(){this.queries=jd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=jd(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Y(x.ABORTED,"Firestore shutting down"))}}function jd(){return new is(t=>_g(t),oa)}async function Qg(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new kb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Hc(a,`Initialization of query '${Nr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Wc(n)}async function Yg(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Vb(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Wc(n)}function Nb(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Wc(t){t.Y_.forEach(e=>{e.next()})}var Fl,qd;(qd=Fl||(Fl={})).ea="default",qd.Cache="cache";class Jg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Fl.Cache}}/**
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
 */class Xg{constructor(e){this.key=e}}class Zg{constructor(e){this.key=e}}class Ob{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=yg(e),this.Ra=new Hr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new $d,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const y=s.get(f),S=aa(this.query,g)?g:null,N=!!y&&this.mutatedKeys.has(y.key),M=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let O=!1;y&&S?y.data.isEqual(S.data)?N!==M&&(r.track({type:3,doc:S}),O=!0):this.ga(y,S)||(r.track({type:2,doc:S}),O=!0,(c&&this.Aa(S,c)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!y&&S?(r.track({type:0,doc:S}),O=!0):y&&!S&&(r.track({type:1,doc:y}),O=!0,(c||h)&&(l=!0)),O&&(S?(a=a.add(S),i=M?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(S,N){const M=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return M(S)-M(N)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new es(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $d,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Zg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Xg(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return es.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mb{constructor(e){this.key=e,this.va=!1}}class Lb{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new is(l=>_g(l),oa),this.Ma=new Map,this.xa=new Set,this.Oa=new Ve(ne.comparator),this.Na=new Map,this.La=new Mc,this.Ba={},this.ka=new Map,this.qa=Zr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Fb(t,e,n=!0){const r=im(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await em(r,e,n,!0),s}async function Ub(t,e){const n=im(t);await em(n,e,!0,!1)}async function em(t,e,n,r){const s=await ab(t.localStore,Jt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Bb(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&qg(t.remoteStore,s),l}async function Bb(t,e,n,r,s){t.Ka=(g,y,S)=>async function(M,O,z,Q){let k=O.view.ma(z);k.ns&&(k=await Ld(M.localStore,O.query,!1).then(({documents:A})=>O.view.ma(A,k)));const m=Q&&Q.targetChanges.get(O.targetId),j=Q&&Q.targetMismatches.get(O.targetId)!=null,re=O.view.applyChanges(k,M.isPrimaryClient,m,j);return Wd(M,O.targetId,re.wa),re.snapshot}(t,g,y,S);const i=await Ld(t.localStore,e,!0),a=new Ob(e,i.Ts),l=a.ma(i.documents),c=vi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);Wd(t,n,h.wa);const f=new xb(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function $b(t,e,n){const r=he(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!oa(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ll(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Uc(r.remoteStore,s.targetId),Ul(r,s.targetId)}).catch(mi)):(Ul(r,s.targetId),await Ll(r.localStore,s.targetId,!0))}async function jb(t,e){const n=he(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uc(n.remoteStore,r.targetId))}async function qb(t,e,n){const r=Yb(t);try{const s=await function(a,l){const c=he(a),h=We.now(),f=l.reduce((S,N)=>S.add(N.key),ge());let g,y;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=An(),M=ge();return c.cs.getEntries(S,f).next(O=>{N=O,N.forEach((z,Q)=>{Q.isValidDocument()||(M=M.add(z))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,N)).next(O=>{g=O;const z=[];for(const Q of l){const k=hA(Q,g.get(Q.key).overlayedDocument);k!=null&&z.push(new Yn(Q.key,k,cg(k.value.mapValue),Lt.exists(!0)))}return c.mutationQueue.addMutationBatch(S,h,z,l)}).next(O=>{y=O;const z=O.applyToLocalDocumentSet(g,M);return c.documentOverlayCache.saveOverlays(S,O.batchId,z)})}).then(()=>({batchId:y.batchId,changes:Eg(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Ve(we)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,n),await Ti(r,s.changes),await fa(r.remoteStore)}catch(s){const i=Hc(s,"Failed to persist write");n.reject(i)}}async function tm(t,e){const n=he(t);try{const r=await sb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?be(a.va):s.removedDocuments.size>0&&(be(a.va),a.va=!1))}),await Ti(n,r,e)}catch(r){await mi(r)}}function Hd(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=he(a);c.onlineState=l;let h=!1;c.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(h=!0)}),h&&Wc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hb(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Ve(ne.comparator);a=a.insert(i,ct.newNoDocument(i,ue.min()));const l=ge().add(i),c=new ua(ue.min(),new Map,new Ve(we),a,l);await tm(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),zc(r)}else await Ll(r.localStore,e,!1).then(()=>Ul(r,e,n)).catch(mi)}async function Wb(t,e){const n=he(t),r=e.batch.batchId;try{const s=await rb(n.localStore,e);rm(n,r,null),nm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ti(n,s)}catch(s){await mi(s)}}async function zb(t,e,n){const r=he(t);try{const s=await function(a,l){const c=he(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(be(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);rm(r,e,n),nm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ti(r,s)}catch(s){await mi(s)}}function nm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function rm(t,e,n){const r=he(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ul(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||sm(t,r)})}function sm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Uc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),zc(t))}function Wd(t,e,n){for(const r of n)r instanceof Xg?(t.La.addReference(r.key,e),Kb(t,r)):r instanceof Zg?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||sm(t,r.key)):le()}function Kb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),zc(t))}function zc(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ne(De.fromString(e)),r=t.qa.next();t.Na.set(r,new Mb(n)),t.Oa=t.Oa.insert(n,r),qg(t.remoteStore,new Un(Jt(kc(n.path)),r,"TargetPurposeLimboResolution",Ac.oe))}}async function Ti(t,e,n){const r=he(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Fc.Wi(c.targetId,h);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=he(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>$.forEach(h,y=>$.forEach(y.$i,S=>f.persistence.referenceDelegate.addReference(g,y.targetId,S)).next(()=>$.forEach(y.Ui,S=>f.persistence.referenceDelegate.removeReference(g,y.targetId,S)))))}catch(g){if(!_i(g))throw g;X("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const S=f.os.get(y),N=S.snapshotVersion,M=S.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(y,M)}}}(r.localStore,i))}async function Gb(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Ug(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Y(x.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ti(n,r.hs)}}function Qb(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const l=n.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function im(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hb.bind(null,e),e.Ca.d_=Vb.bind(null,e.eventManager),e.Ca.$a=Nb.bind(null,e.eventManager),e}function Yb(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zb.bind(null,e),e}class Lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ha(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return nb(this.persistence,new eb,e.initialUser,this.serializer)}Ga(e){return new JA(Lc.Zr,this.serializer)}Wa(e){return new cb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lo.provider={build:()=>new Lo};class Bl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gb.bind(null,this.syncEngine),await Pb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Db}()}createDatastore(e){const n=ha(e.databaseInfo.databaseId),r=function(i){return new fb(i)}(e.databaseInfo);return function(i,a,l,c){return new mb(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new yb(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Hd(this.syncEngine,n,0),function(){return Ud.D()?new Ud:new ub}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,f){const g=new Lb(s,i,a,l,c,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ei(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bl.provider={build:()=>new Bl};/**
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
 *//**
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
 */class om{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Jb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=og.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tl(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ug(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xb(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Bd(e.remoteStore,s)),t._onlineComponents=e}async function Xb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await tl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await tl(t,new Lo)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await tl(t,new Lo);return t._offlineComponents}async function am(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await zd(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await zd(t,new Bl))),t._onlineComponents}function Zb(t){return am(t).then(e=>e.syncEngine)}async function lm(t){const e=await am(t),n=e.eventManager;return n.onListen=Fb.bind(null,e.syncEngine),n.onUnlisten=$b.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ub.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jb.bind(null,e.syncEngine),n}function e0(t,e,n={}){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new om({next:y=>{f.Za(),a.enqueueAndForget(()=>Yg(i,g));const S=y.docs.has(l);!S&&y.fromCache?h.reject(new Y(x.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&c&&c.source==="server"?h.reject(new Y(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new Jg(kc(l.path),f,{includeMetadataChanges:!0,_a:!0});return Qg(i,g)}(await lm(t),t.asyncQueue,e,n,r)),r.promise}function t0(t,e,n={}){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new om({next:y=>{f.Za(),a.enqueueAndForget(()=>Yg(i,g)),y.fromCache&&c.source==="server"?h.reject(new Y(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new Jg(l,f,{includeMetadataChanges:!0,_a:!0});return Qg(i,g)}(await lm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Kd=new Map;/**
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
 */function um(t,e,n){if(!n)throw new Y(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n0(t,e,n,r){if(e===!0&&r===!0)throw new Y(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gd(t){if(!ne.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qd(t){if(ne.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pa(t);throw new Y(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Yd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ga{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EI;switch(r.type){case"firstParty":return new AI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Kd.delete(n),r.terminate())}(this),Promise.resolve()}}function r0(t,e,n,r={}){var s;const i=(t=bn(t,ga))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=at.MOCK_USER;else{l=_p(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new at(h)}t._authCredentials=new TI(new ig(l,c))}}/**
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
 */class br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new br(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class qn extends br{constructor(e,n,r){super(e,n,kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ne(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function Kc(t,e,...n){if(t=Me(t),um("collection","path",e),t instanceof ga){const r=De.fromString(e,...n);return Qd(r),new qn(t,null,r)}{if(!(t instanceof Tt||t instanceof qn))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Qd(r),new qn(t.firestore,null,r)}}function Gc(t,e,...n){if(t=Me(t),arguments.length===1&&(e=og.newId()),um("doc","path",e),t instanceof ga){const r=De.fromString(e,...n);return Gd(r),new Tt(t,null,new ne(r))}{if(!(t instanceof Tt||t instanceof qn))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Gd(r),new Tt(t.firestore,t instanceof qn?t.converter:null,new ne(r))}}/**
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
 */class Jd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $g(this,"async_queue_retry"),this.Vu=()=>{const r=el();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=el();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=el();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new _n;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_i(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw In("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=qc.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class as extends ga{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Jd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jd(e),this._firestoreClient=void 0,await e}}}function s0(t,e){const n=typeof t=="object"?t:uc(),r=typeof t=="string"?t:"(default)",s=Zo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pp("firestore");i&&r0(s,...i)}return s}function Qc(t){if(t._terminated)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||i0(t),t._firestoreClient}function i0(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new LI(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,cm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Jb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ts(tt.fromBase64String(e))}catch(n){throw new Y(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ts(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ma{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Yc{constructor(e){this._methodName=e}}/**
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
 */class Jc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Xc{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const o0=/^__.*__$/;class a0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms):new yi(e,this.data,n,this.fieldTransforms)}}class hm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Zc{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Zc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(dm(this.Cu)&&o0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class l0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ha(e)}Qu(e,n,r,s=!1){return new Zc({Cu:e,methodName:n,qu:r,path:Ze.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eu(t){const e=t._freezeSettings(),n=ha(t._databaseId);return new l0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function c0(t,e,n,r,s,i={}){const a=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);tu("Data must be an object, but it was:",a,r);const l=fm(r,a);let c,h;if(i.merge)c=new Rt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const y=$l(e,g,n);if(!a.contains(y))throw new Y(x.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);gm(f,y)||f.push(y)}c=new Rt(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new a0(new Et(l),c,h)}class _a extends Yc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _a}}function u0(t,e,n,r){const s=t.Qu(1,e,n);tu("Data must be an object, but it was:",s,r);const i=[],a=Et.empty();Ir(r,(c,h)=>{const f=nu(e,c,n);h=Me(h);const g=s.Nu(f);if(h instanceof _a)i.push(f);else{const y=wi(h,g);y!=null&&(i.push(f),a.set(f,y))}});const l=new Rt(i);return new hm(a,l,s.fieldTransforms)}function h0(t,e,n,r,s,i){const a=t.Qu(1,e,n),l=[$l(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push($l(e,i[y])),c.push(i[y+1]);const h=[],f=Et.empty();for(let y=l.length-1;y>=0;--y)if(!gm(h,l[y])){const S=l[y];let N=c[y];N=Me(N);const M=a.Nu(S);if(N instanceof _a)h.push(S);else{const O=wi(N,M);O!=null&&(h.push(S),f.set(S,O))}}const g=new Rt(h);return new hm(f,g,a.fieldTransforms)}function d0(t,e,n,r=!1){return wi(n,t.Qu(r?4:3,e))}function wi(t,e){if(pm(t=Me(t)))return tu("Unsupported field value:",e,t),fm(t,e);if(t instanceof Yc)return function(r,s){if(!dm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=wi(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:xo(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xo(s.serializer,i)}}if(r instanceof Jc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ts)return{bytesValue:Vg(s.serializer,r._byteString)};if(r instanceof Tt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xc)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Dc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${pa(r)}`)}(t,e)}function fm(t,e){const n={};return ag(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(t,(r,s)=>{const i=wi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function pm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Jc||t instanceof ts||t instanceof Tt||t instanceof Yc||t instanceof Xc)}function tu(t,e,n){if(!pm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=pa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function $l(t,e,n){if((e=Me(e))instanceof ma)return e._internalPath;if(typeof e=="string")return nu(t,e);throw Fo("Field path arguments must be of type string or ",t,!1,void 0,n)}const f0=new RegExp("[~\\*/\\[\\]]");function nu(t,e,n){if(e.search(f0)>=0)throw Fo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ma(...e.split("."))._internalPath}catch{throw Fo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Y(x.INVALID_ARGUMENT,l+t+c)}function gm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ru("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p0 extends mm{data(){return super.data()}}function ru(t,e){return typeof e=="string"?nu(t,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
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
 */function g0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class su{}class _m extends su{}function m0(t,e,...n){let r=[];e instanceof su&&r.push(e),r=r.concat(n),function(i){const a=i.filter(c=>c instanceof ou).length,l=i.filter(c=>c instanceof iu).length;if(a>1||a>0&&l>0)throw new Y(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class iu extends _m{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new iu(e,n,r)}_apply(e){const n=this._parse(e);return ym(e._query,n),new br(e.firestore,e.converter,Dl(e._query,n))}_parse(e){const n=eu(e.firestore);return function(i,a,l,c,h,f,g){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Zd(g,f);const S=[];for(const N of g)S.push(Xd(c,i,N));y={arrayValue:{values:S}}}else y=Xd(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Zd(g,f),y=d0(l,a,g,f==="in"||f==="not-in");return qe.create(h,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ou extends su{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ou(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ut.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)ym(a,c),a=Dl(a,c)}(e._query,n),new br(e.firestore,e.converter,Dl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class au extends _m{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new au(e,n)}_apply(e){const n=function(s,i,a){if(s.startAt!==null)throw new Y(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new si(i,a)}(e._query,this._field,this._direction);return new br(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new ss(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function _0(t,e="asc"){const n=e,r=ru("orderBy",t);return au._create(r,n)}function Xd(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new Y(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mg(e)&&n.indexOf("/")!==-1)throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!ne.isDocumentKey(r))throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ed(t,new ne(r))}if(n instanceof Tt)return Ed(t,n._key);throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(n)}.`)}function Zd(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ym(t,e){const n=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class y0{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ir(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ue(a.doubleValue));return new Xc(i)}convertGeoPoint(e){return new Jc(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ti(e));default:return null}}convertTimestamp(e){const n=Gn(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);be(Fg(r));const s=new ni(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function v0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vm extends mm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ru("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fo extends vm{data(e={}){return super.data(e)}}class E0{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ds(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fo(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:T0(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function T0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
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
 */function w0(t){t=bn(t,Tt);const e=bn(t.firestore,as);return e0(Qc(e),t._key).then(n=>R0(e,t,n))}class Em extends y0{constructor(e){super(),this.firestore=e}convertBytes(e){return new ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function I0(t){t=bn(t,br);const e=bn(t.firestore,as),n=Qc(e),r=new Em(e);return g0(t._query),t0(n,t._query).then(s=>new E0(e,r,t,s))}function A0(t,e,n,...r){t=bn(t,Tt);const s=bn(t.firestore,as),i=eu(s);let a;return a=typeof(e=Me(e))=="string"||e instanceof ma?h0(i,"updateDoc",t._key,e,n,r):u0(i,"updateDoc",t._key,e),lu(s,[a.toMutation(t._key,Lt.exists(!0))])}function b0(t){return lu(bn(t.firestore,as),[new Vc(t._key,Lt.none())])}function Tm(t,e){const n=bn(t.firestore,as),r=Gc(t),s=v0(t.converter,e);return lu(n,[c0(eu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function lu(t,e){return function(r,s){const i=new _n;return r.asyncQueue.enqueueAndForget(async()=>qb(await Zb(r),s,i)),i.promise}(Qc(t),e)}function R0(t,e,n){const r=n.docs.get(e._key),s=new Em(t);return new vm(t,s,e._key,r,new Ds(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){rs=s})(wr),gr(new zn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new as(new wI(r.getProvider("auth-internal")),new RI(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qt(gd,"4.7.3",e),Qt(gd,"4.7.3","esm2017")})();const S0=ea(wc),ai=s0(S0);function wm(t,e=!1){const n=bl(),r=new Date().toISOString(),s={...e?{updatedBy:(n==null?void 0:n.uid)||"unknown",updatedByEmail:(n==null?void 0:n.email)||"unknown",updatedByName:(n==null?void 0:n.displayName)||(n==null?void 0:n.email)||"unknown",updatedAt:r}:{createdBy:(n==null?void 0:n.uid)||"unknown",createdByEmail:(n==null?void 0:n.email)||"unknown",createdByName:(n==null?void 0:n.displayName)||(n==null?void 0:n.email)||"unknown",createdAt:r}};return{...t,...s}}async function Im(t,e){try{const n=wm(e);return{id:(await Tm(Kc(ai,t),n)).id,...n}}catch(n){throw console.error(`Error creating document in ${t}:`,n),n}}async function jl(t,e=null){try{let n=Kc(ai,t);e&&(n=m0(n,_0(e,"desc")));const r=await I0(n),s=[];return r.forEach(i=>{s.push({id:i.id,...i.data()})}),s}catch(n){return console.error(`Error getting documents from ${t}:`,n),[]}}async function po(t,e,n){try{const r=Gc(ai,t,e),s=wm(n,!0);return await A0(r,s),{id:e,...s}}catch(r){throw console.error(`Error updating document ${e}:`,r),r}}async function Am(t,e){var n,r;try{const s=Gc(ai,t,e),i=await w0(s);if(i.exists()){const a={...i.data(),originalId:e,deletedBy:((n=bl())==null?void 0:n.uid)||"unknown",deletedByEmail:((r=bl())==null?void 0:r.email)||"unknown",deletedAt:new Date().toISOString(),originalCollection:t};return await Tm(Kc(ai,`${t}_deleted`),a),await b0(s),!0}return!1}catch(s){throw console.error(`Error deleting document ${e}:`,s),s}}const cu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},C0={class:"vehiculos-view"},P0={class:"view-header"},k0={class:"view-actions"},D0={class:"stats-grid"},V0={class:"stat-card"},N0={class:"stat-content"},O0={class:"stat-value"},x0={class:"stat-card"},M0={class:"stat-content"},L0={class:"stat-value"},F0={class:"stat-card"},U0={class:"stat-content"},B0={class:"stat-value"},$0={class:"stat-card"},j0={class:"stat-content"},q0={class:"stat-value"},H0={class:"content-section"},W0={key:0,class:"loading-container"},z0={key:1,class:"empty-state"},K0={key:2,class:"vehicles-grid"},G0={class:"vehicle-header"},Q0={class:"vehicle-body"},Y0={class:"vehicle-placa"},J0={class:"vehicle-info"},X0={class:"vehicle-info"},Z0={key:0,class:"vehicle-conductor"},eR={class:"vehicle-actions"},tR=["onClick"],nR=["onClick"],rR=["onClick"],sR={class:"modal-content"},iR={class:"modal-header"},oR={class:"form-group"},aR={class:"form-group"},lR={class:"form-group"},cR={class:"form-group"},uR=["max"],hR={class:"form-group"},dR={class:"form-group"},fR=["value"],pR={class:"modal-footer"},gR=["disabled"],mR={__name:"DashboardView",setup(t){const e=Ke([]),n=Ke([]),r=Ke(!0),s=Ke(!1),i=Ke(!1),a=Ke(null),l=Ke({placa:"",marca:"",modelo:"",año:new Date().getFullYear(),estado:"disponible",conductor:""}),c=Us(()=>n.value.filter(k=>k.estado==="disponible").length),h=Us(()=>n.value.filter(k=>k.estado==="ocupado").length),f=Us(()=>n.value.filter(k=>k.estado==="mantenimiento").length);Go(async()=>{await Promise.all([g(),y()])});async function g(){r.value=!0;try{n.value=await jl("vehiculos","createdAt")}catch(k){console.error("Error loading vehicles:",k),alert("Error al cargar los vehículos")}finally{r.value=!1}}async function y(){try{e.value=await jl("conductores","createdAt")}catch(k){console.error("Error loading conductores:",k)}}async function S(){s.value=!0;try{a.value?await po("vehiculos",a.value.id,l.value):await Im("vehiculos",l.value),await g(),z()}catch(k){console.error("Error saving vehicle:",k),alert("Error al guardar el vehículo")}finally{s.value=!1}}function N(k){a.value=k,l.value={placa:k.placa,marca:k.marca,modelo:k.modelo,año:k.año,estado:k.estado,conductor:k.conductor||""},i.value=!0}async function M(k){if(confirm(`¿Estás seguro de eliminar el vehículo ${k.placa}?`))try{await Am("vehiculos",k.id),await g()}catch(m){console.error("Error deleting vehicle:",m),alert("Error al eliminar el vehículo")}}function O(k){alert(`Ver detalles de ${k.placa}

Esta funcionalidad se implementará próximamente.`)}function z(){i.value=!1,a.value=null,l.value={placa:"",marca:"",modelo:"",año:new Date().getFullYear(),estado:"disponible",conductor:""}}function Q(k){return{disponible:"Disponible",ocupado:"En Servicio",mantenimiento:"Mantenimiento"}[k]||k}return(k,m)=>(J(),Z("div",C0,[w("div",P0,[m[8]||(m[8]=w("h2",{class:"view-title"},"Gestión de Vehículos",-1)),w("div",k0,[w("button",{onClick:m[0]||(m[0]=j=>i.value=!0),class:"btn-primary"}," ➕ Agregar Vehículo ")])]),w("div",D0,[w("div",V0,[m[10]||(m[10]=w("div",{class:"stat-icon"},"🚗",-1)),w("div",N0,[w("div",O0,pe(n.value.length),1),m[9]||(m[9]=w("div",{class:"stat-label"},"Vehículos Total",-1))])]),w("div",x0,[m[12]||(m[12]=w("div",{class:"stat-icon disponible"},"✅",-1)),w("div",M0,[w("div",L0,pe(c.value),1),m[11]||(m[11]=w("div",{class:"stat-label"},"Disponibles",-1))])]),w("div",F0,[m[14]||(m[14]=w("div",{class:"stat-icon ocupado"},"🔑",-1)),w("div",U0,[w("div",B0,pe(h.value),1),m[13]||(m[13]=w("div",{class:"stat-label"},"En Servicio",-1))])]),w("div",$0,[m[16]||(m[16]=w("div",{class:"stat-icon mantenimiento"},"🔧",-1)),w("div",j0,[w("div",q0,pe(f.value),1),m[15]||(m[15]=w("div",{class:"stat-label"},"Mantenimiento",-1))])])]),w("div",H0,[r.value?(J(),Z("div",W0,[...m[17]||(m[17]=[w("div",{class:"spinner"},null,-1),w("p",null,"Cargando vehículos...",-1)])])):n.value.length===0?(J(),Z("div",z0,[m[18]||(m[18]=w("div",{class:"empty-icon"},"🚗",-1)),m[19]||(m[19]=w("h3",null,"No hay vehículos registrados",-1)),m[20]||(m[20]=w("p",null,"Comienza agregando tu primer vehículo a la flota",-1)),w("button",{onClick:m[1]||(m[1]=j=>i.value=!0),class:"btn-primary"}," Agregar Primer Vehículo ")])):(J(),Z("div",K0,[(J(!0),Z(At,null,cl(n.value,j=>(J(),Z("div",{key:j.id,class:"vehicle-card"},[w("div",G0,[m[21]||(m[21]=w("div",{class:"vehicle-icon"},"🚗",-1)),w("span",{class:Wr(["vehicle-status",`status-${j.estado}`])},pe(Q(j.estado)),3)]),w("div",Q0,[w("h4",Y0,pe(j.placa),1),w("p",J0,pe(j.marca)+" "+pe(j.modelo),1),w("p",X0,"Año: "+pe(j.año),1),j.conductor?(J(),Z("p",Z0," 👤 "+pe(j.conductor),1)):je("",!0)]),w("div",eR,[w("button",{onClick:re=>O(j),class:"btn-icon",title:"Ver detalles"}," 👁️ ",8,tR),w("button",{onClick:re=>N(j),class:"btn-icon",title:"Editar"}," ✏️ ",8,nR),w("button",{onClick:re=>M(j),class:"btn-icon btn-danger-icon",title:"Eliminar"}," 🗑️ ",8,rR)])]))),128))]))]),i.value?(J(),Z("div",{key:0,class:"modal-overlay",onClick:Bs(z,["self"])},[w("div",sR,[w("div",iR,[w("h3",null,pe(a.value?"Editar Vehículo":"Agregar Nuevo Vehículo"),1),w("button",{onClick:z,class:"btn-close"},"✕")]),w("form",{onSubmit:Bs(S,["prevent"]),class:"modal-body"},[w("div",oR,[m[22]||(m[22]=w("label",{class:"form-label"},"Placa *",-1)),kt(w("input",{"onUpdate:modelValue":m[2]||(m[2]=j=>l.value.placa=j),type:"text",class:"form-input",placeholder:"ABC-123",required:""},null,512),[[Wt,l.value.placa]])]),w("div",aR,[m[23]||(m[23]=w("label",{class:"form-label"},"Marca *",-1)),kt(w("input",{"onUpdate:modelValue":m[3]||(m[3]=j=>l.value.marca=j),type:"text",class:"form-input",placeholder:"Toyota",required:""},null,512),[[Wt,l.value.marca]])]),w("div",lR,[m[24]||(m[24]=w("label",{class:"form-label"},"Modelo *",-1)),kt(w("input",{"onUpdate:modelValue":m[4]||(m[4]=j=>l.value.modelo=j),type:"text",class:"form-input",placeholder:"Corolla",required:""},null,512),[[Wt,l.value.modelo]])]),w("div",cR,[m[25]||(m[25]=w("label",{class:"form-label"},"Año *",-1)),kt(w("input",{"onUpdate:modelValue":m[5]||(m[5]=j=>l.value.año=j),type:"number",class:"form-input",placeholder:"2023",min:"1990",max:new Date().getFullYear()+1,required:""},null,8,uR),[[Wt,l.value.año,void 0,{number:!0}]])]),w("div",hR,[m[27]||(m[27]=w("label",{class:"form-label"},"Estado *",-1)),kt(w("select",{"onUpdate:modelValue":m[6]||(m[6]=j=>l.value.estado=j),class:"form-select",required:""},[...m[26]||(m[26]=[w("option",{value:"disponible"},"Disponible",-1),w("option",{value:"ocupado"},"En Servicio",-1),w("option",{value:"mantenimiento"},"Mantenimiento",-1)])],512),[[Lh,l.value.estado]])]),w("div",dR,[m[29]||(m[29]=w("label",{class:"form-label"},"Conductor Actual",-1)),kt(w("select",{"onUpdate:modelValue":m[7]||(m[7]=j=>l.value.conductor=j),class:"form-select"},[m[28]||(m[28]=w("option",{value:""},"Sin conductor asignado",-1)),(J(!0),Z(At,null,cl(e.value,j=>(J(),Z("option",{key:j.id,value:j.nombre},pe(j.nombre),9,fR))),128))],512),[[Lh,l.value.conductor]])]),w("div",pR,[w("button",{type:"button",onClick:z,class:"btn-secondary"}," Cancelar "),w("button",{type:"submit",class:"btn-primary",disabled:s.value},pe(s.value?"Guardando...":"Guardar"),9,gR)])],32)])])):je("",!0)]))}},_R=cu(mR,[["__scopeId","data-v-94c8d217"]]);/**
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
 */const bm="firebasestorage.googleapis.com",Rm="storageBucket",yR=2*60*1e3,vR=10*60*1e3;/**
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
 */class Fe extends rn{constructor(e,n,r=0){super(nl(e),`Firebase Storage: ${n} (${nl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Le||(Le={}));function nl(t){return"storage/"+t}function uu(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe(Le.UNKNOWN,t)}function ER(t){return new Fe(Le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function TR(t){return new Fe(Le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(Le.UNAUTHENTICATED,t)}function IR(){return new Fe(Le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AR(t){return new Fe(Le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function bR(){return new Fe(Le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RR(){return new Fe(Le.CANCELED,"User canceled the upload/download.")}function SR(t){return new Fe(Le.INVALID_URL,"Invalid URL '"+t+"'.")}function CR(t){return new Fe(Le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function PR(){return new Fe(Le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rm+"' property when initializing the app?")}function kR(){return new Fe(Le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function DR(){return new Fe(Le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VR(t){return new Fe(Le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ql(t){return new Fe(Le.INVALID_ARGUMENT,t)}function Sm(){return new Fe(Le.APP_DELETED,"The Firebase app was deleted.")}function NR(t){return new Fe(Le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(t,e){return new Fe(Le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Rs(t){throw new Fe(Le.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw CR(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),c={bucket:1,path:3};function h(m){m.path_=decodeURIComponent(m.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${f}/b/${s}/o${y}`,"i"),N={bucket:1,path:3},M=n===bm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",z=new RegExp(`^https?://${M}/${s}/${O}`,"i"),k=[{regex:l,indices:c,postModify:i},{regex:S,indices:N,postModify:h},{regex:z,indices:{bucket:1,path:2},postModify:h}];for(let m=0;m<k.length;m++){const j=k[m],re=j.regex.exec(e);if(re){const A=re[j.indices.bucket];let _=re[j.indices.path];_||(_=""),r=new St(A,_),j.postModify(r);break}}if(r==null)throw SR(e);return r}}class OR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function xR(t,e,n){let r=1,s=null,i=null,a=!1,l=0;function c(){return l===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function g(O){s=setTimeout(()=>{s=null,t(S,c())},O)}function y(){i&&clearTimeout(i)}function S(O,...z){if(h){y();return}if(O){y(),f.call(null,O,...z);return}if(c()||a){y(),f.call(null,O,...z);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,g(k)}let N=!1;function M(O){N||(N=!0,y(),!h&&(s!==null?(O||(l=2),clearTimeout(s),g(0)):O||(l=1)))}return g(0),i=setTimeout(()=>{a=!0,M(!0)},n),M}function MR(t){t(!1)}/**
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
 */function LR(t){return t!==void 0}function FR(t){return typeof t=="object"&&!Array.isArray(t)}function hu(t){return typeof t=="string"||t instanceof String}function ef(t){return du()&&t instanceof Blob}function du(){return typeof Blob<"u"}function tf(t,e,n,r){if(r<e)throw ql(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ql(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ya(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Cm(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var pr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pr||(pr={}));/**
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
 */function UR(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class BR{constructor(e,n,r,s,i,a,l,c,h,f,g,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,N)=>{this.resolve_=S,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Gi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===pr.NO_ERROR,c=i.getStatus();if(!l||UR(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===pr.ABORT;r(!1,new Gi(!1,null,f));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new Gi(h,i))})},n=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());LR(c)?i(c):i()}catch(c){a(c)}else if(l!==null){const c=uu();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(s.canceled){const c=this.appDelete_?Sm():RR();a(c)}else{const c=bR();a(c)}};this.canceled_?n(!1,new Gi(!1,null,!0)):this.backoffId_=xR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gi{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $R(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function HR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function WR(t,e,n,r,s,i,a=!0){const l=Cm(t.urlParams),c=t.url+l,h=Object.assign({},t.headers);return qR(h,e),$R(h,n),jR(h,i),HR(h,r),new BR(c,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a)}/**
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
 */function zR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function KR(...t){const e=zR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(du())return new Blob(t);throw new Fe(Le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function GR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function QR(t){if(typeof atob>"u")throw VR("base-64");return atob(t)}/**
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
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rl{constructor(e,n){this.data=e,this.contentType=n||null}}function YR(t,e){switch(t){case zt.RAW:return new rl(Pm(e));case zt.BASE64:case zt.BASE64URL:return new rl(km(t,e));case zt.DATA_URL:return new rl(XR(e),ZR(e))}throw uu()}function Pm(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=t.charCodeAt(++n);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JR(t){let e;try{e=decodeURIComponent(t)}catch{throw zs(zt.DATA_URL,"Malformed data URL.")}return Pm(e)}function km(t,e){switch(t){case zt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw zs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw zs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=QR(e)}catch(s){throw s.message.includes("polyfill")?s:zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Dm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zs(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=eS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function XR(t){const e=new Dm(t);return e.base64?km(zt.BASE64,e.rest):JR(e.rest)}function ZR(t){return new Dm(t).contentType}function eS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Fn{constructor(e,n){let r=0,s="";ef(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ef(this.data_)){const r=this.data_,s=GR(r,e,n);return s===null?null:new Fn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Fn(r,!0)}}static getBlob(...e){if(du()){const n=e.map(r=>r instanceof Fn?r.data_:r);return new Fn(KR.apply(null,n))}else{const n=e.map(a=>hu(a)?YR(zt.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(a=>{for(let l=0;l<a.length;l++)s[i++]=a[l]}),new Fn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Vm(t){let e;try{e=JSON.parse(t)}catch{return null}return FR(e)?e:null}/**
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
 */function tS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nS(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Nm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function rS(t,e){return e}class pt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||rS}}let Qi=null;function sS(t){return!hu(t)||t.length<2?t:Nm(t)}function Om(){if(Qi)return Qi;const t=[];t.push(new pt("bucket")),t.push(new pt("generation")),t.push(new pt("metageneration")),t.push(new pt("name","fullPath",!0));function e(i,a){return sS(a)}const n=new pt("name");n.xform=e,t.push(n);function r(i,a){return a!==void 0?Number(a):a}const s=new pt("size");return s.xform=r,t.push(s),t.push(new pt("timeCreated")),t.push(new pt("updated")),t.push(new pt("md5Hash",null,!0)),t.push(new pt("cacheControl",null,!0)),t.push(new pt("contentDisposition",null,!0)),t.push(new pt("contentEncoding",null,!0)),t.push(new pt("contentLanguage",null,!0)),t.push(new pt("contentType",null,!0)),t.push(new pt("metadata","customMetadata",!0)),Qi=t,Qi}function iS(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new St(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function oS(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const a=n[i];r[a.local]=a.xform(r,e[a.server])}return iS(r,t),r}function xm(t,e,n){const r=Vm(e);return r===null?null:oS(t,r,n)}function aS(t,e,n,r){const s=Vm(e);if(s===null||!hu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,g=t.fullPath,y="/b/"+a(f)+"/o/"+a(g),S=ya(y,n,r),N=Cm({alt:"media",token:h});return S+N})[0]}function lS(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class fu{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Mm(t){if(!t)throw uu()}function cS(t,e){function n(r,s){const i=xm(t,s,e);return Mm(i!==null),i}return n}function uS(t,e){function n(r,s){const i=xm(t,s,e);return Mm(i!==null),aS(i,s,t.host,t._protocol)}return n}function Lm(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=IR():s=wR():n.getStatus()===402?s=TR(t.bucket):n.getStatus()===403?s=AR(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Fm(t){const e=Lm(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=ER(t.path)),i.serverResponse=s.serverResponse,i}return n}function hS(t,e,n){const r=e.fullServerUrl(),s=ya(r,t.host,t._protocol),i="GET",a=t.maxOperationRetryTime,l=new fu(s,i,uS(t,n),a);return l.errorHandler=Fm(e),l}function dS(t,e){const n=e.fullServerUrl(),r=ya(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function a(c,h){}const l=new fu(r,s,a,i);return l.successCodes=[200,204],l.errorHandler=Fm(e),l}function fS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function pS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=fS(null,e)),r}function gS(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let m=0;m<2;m++)k=k+Math.random().toString().slice(2);return k}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const h=pS(e,r,s),f=lS(h,n),g="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+c+"--",S=Fn.getBlob(g,r,y);if(S===null)throw kR();const N={name:h.fullPath},M=ya(i,t.host,t._protocol),O="POST",z=t.maxUploadRetryTime,Q=new fu(M,O,cS(t,n),z);return Q.urlParams=N,Q.headers=a,Q.body=S.uploadData(),Q.errorHandler=Lm(e),Q}class mS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Rs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _S extends mS{initXhr(){this.xhr_.responseType="text"}}function pu(){return new _S}/**
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
 */class Er{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Er(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Nm(this._location.path)}get storage(){return this._service}get parent(){const e=tS(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new Er(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw NR(e)}}function yS(t,e,n){t._throwIfRoot("uploadBytes");const r=gS(t.storage,t._location,Om(),new Fn(e,!0),n);return t.storage.makeRequestWithTokens(r,pu).then(s=>({metadata:s,ref:t}))}function vS(t){t._throwIfRoot("getDownloadURL");const e=hS(t.storage,t._location,Om());return t.storage.makeRequestWithTokens(e,pu).then(n=>{if(n===null)throw DR();return n})}function ES(t){t._throwIfRoot("deleteObject");const e=dS(t.storage,t._location);return t.storage.makeRequestWithTokens(e,pu)}function TS(t,e){const n=nS(t._location.path,e),r=new St(t._location.bucket,n);return new Er(t.storage,r)}/**
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
 */function wS(t){return/^[A-Za-z]+:\/\//.test(t)}function IS(t,e){return new Er(t,e)}function Um(t,e){if(t instanceof gu){const n=t;if(n._bucket==null)throw PR();const r=new Er(n,n._bucket);return e!=null?Um(r,e):r}else return e!==void 0?TS(t,e):t}function AS(t,e){if(e&&wS(e)){if(t instanceof gu)return IS(t,e);throw ql("To use ref(service, url), the first argument must be a Storage instance.")}else return Um(t,e)}function nf(t,e){const n=e==null?void 0:e[Rm];return n==null?null:St.makeFromBucketSpec(n,t)}function bS(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:_p(s,t.app.options.projectId))}class gu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=bm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yR,this._maxUploadRetryTime=vR,this._requests=new Set,s!=null?this._bucket=St.makeFromBucketSpec(s,this._host):this._bucket=nf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=nf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){tf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){tf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Er(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new OR(Sm());{const a=WR(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const rf="@firebase/storage",sf="0.13.2";/**
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
 */const Bm="storage";function RS(t,e,n){return t=Me(t),yS(t,e,n)}function SS(t){return t=Me(t),vS(t)}function CS(t){return t=Me(t),ES(t)}function $m(t,e){return t=Me(t),AS(t,e)}function PS(t=uc(),e){t=Me(t);const r=Zo(t,Bm).getImmediate({identifier:e}),s=pp("storage");return s&&kS(r,...s),r}function kS(t,e,n,r={}){bS(t,e,n,r)}function DS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new gu(n,r,s,e,wr)}function VS(){gr(new zn(Bm,DS,"PUBLIC").setMultipleInstances(!0)),Qt(rf,sf,""),Qt(rf,sf,"esm2017")}VS();const NS=ea(wc),jm=PS(NS);async function OS(t,e){if(!t)throw new Error("No file provided");try{const n=$m(jm,e),r=await RS(n,t);return await SS(r.ref)}catch(n){throw console.error("Error uploading file:",n),n}}async function xS(t){if(t)try{const e=$m(jm,t);await CS(e)}catch(e){throw console.error("Error deleting file:",e),e}}async function Yi(t,e,n){if(!e)return null;const r=Date.now(),s=e.name.split(".").pop(),i=`${n}_${r}.${s}`,a=`conductores/${t}/${i}`;return{url:await OS(e,a),path:a,fileName:e.name,uploadedAt:new Date().toISOString()}}async function Ji(t){if(t)try{await xS(t)}catch(e){console.error("Error deleting conductor document:",e)}}const MS={class:"conductores-view"},LS={class:"view-header"},FS={class:"view-actions"},US={class:"stats-grid"},BS={class:"stat-card"},$S={class:"stat-content"},jS={class:"stat-value"},qS={class:"stat-card"},HS={class:"stat-content"},WS={class:"stat-value"},zS={class:"content-section"},KS={key:0,class:"loading-container"},GS={key:1,class:"empty-state"},QS={key:2,class:"conductores-grid"},YS={class:"conductor-header"},JS={class:"conductor-avatar"},XS=["src","alt"],ZS={key:1,class:"avatar-placeholder"},eC={class:"conductor-main-info"},tC={class:"conductor-name"},nC={key:0,class:"conductor-document"},rC={class:"conductor-phone"},sC={class:"conductor-experience"},iC={class:"conductor-details"},oC={class:"detail-item"},aC={class:"detail-value"},lC={class:"detail-item"},cC={class:"detail-value"},uC={class:"conductor-documents"},hC={class:"document-badges"},dC={key:0,class:"badge badge-success",title:"Cédula cargada"},fC={key:1,class:"badge badge-success",title:"Pase cargado"},pC={key:2,class:"badge badge-success",title:"Contrato cargado"},gC={class:"conductor-actions"},mC=["onClick"],_C=["onClick"],yC=["onClick"],vC={class:"modal-content modal-large"},EC={class:"modal-header"},TC={class:"form-grid"},wC={class:"form-section"},IC={class:"form-group"},AC={class:"form-group"},bC={class:"form-group"},RC={class:"form-group"},SC={class:"form-group"},CC={class:"form-group"},PC={class:"form-section"},kC={class:"form-group"},DC={class:"file-upload-area"},VC={for:"foto-input",class:"file-label"},NC={key:0},OC={key:1},xC={key:2},MC=["src"],LC={class:"form-group"},FC={class:"file-upload-area"},UC={for:"cedula-input",class:"file-label"},BC={key:0},$C={key:1},jC={key:2},qC=["href"],HC={class:"form-group"},WC={class:"file-upload-area"},zC={for:"pase-input",class:"file-label"},KC={key:0},GC={key:1},QC={key:2},YC=["href"],JC={class:"form-group"},XC={class:"file-upload-area"},ZC={for:"contrato-input",class:"file-label"},eP={key:0},tP={key:1},nP={key:2},rP=["href"],sP={class:"modal-footer"},iP=["disabled"],oP={class:"modal-content modal-large"},aP={class:"modal-header"},lP={class:"modal-body conductor-details-view"},cP={class:"details-header"},uP={class:"conductor-avatar-large"},hP=["src","alt"],dP={key:1,class:"avatar-placeholder-large"},fP={class:"details-main"},pP={class:"detail-large"},gP={class:"detail-large"},mP={class:"details-grid"},_P={class:"detail-section"},yP={key:0},vP={class:"detail-section"},EP={class:"documents-list"},TP=["href"],wP={key:1,class:"document-missing"},IP=["href"],AP={key:3,class:"document-missing"},bP=["href"],RP={key:5,class:"document-missing"},SP={class:"modal-footer"},CP={__name:"ConductoresView",setup(t){const e=Ke([]),n=Ke(!0),r=Ke(!1),s=Ke(!1),i=Ke(null),a=Ke(null),l=Ke({nombre:"",numeroDocumento:"",telefono:"",direccion:"",experiencia:"",fechaInicio:"",foto:null,cedula:null,pase:null,contrato:null,fotoFile:null,cedulaFile:null,paseFile:null,contratoFile:null}),c=Us(()=>e.value.length);Go(async()=>{await h()});async function h(){n.value=!0;try{e.value=await jl("conductores","createdAt")}catch(k){console.error("Error loading conductores:",k),alert("Error al cargar los conductores")}finally{n.value=!1}}function f(k,m){const j=k.target.files[0];j&&(l.value[`${m}File`]=j)}function g(k){l.value[`${k}File`]=null,l.value[k]=null;const m=document.getElementById(`${k}-input`);m&&(m.value="")}async function y(){var k;r.value=!0;try{const m={nombre:l.value.nombre,numeroDocumento:l.value.numeroDocumento,telefono:l.value.telefono,direccion:l.value.direccion,experiencia:l.value.experiencia,fechaInicio:l.value.fechaInicio,foto:l.value.foto,cedula:l.value.cedula,pase:l.value.pase,contrato:l.value.contrato};let j=(k=i.value)==null?void 0:k.id;if(j||(j=(await Im("conductores",m)).id),l.value.fotoFile){const re=await Yi(j,l.value.fotoFile,"foto");m.foto=re}if(l.value.cedulaFile){const re=await Yi(j,l.value.cedulaFile,"cedula");m.cedula=re}if(l.value.paseFile){const re=await Yi(j,l.value.paseFile,"pase");m.pase=re}if(l.value.contratoFile){const re=await Yi(j,l.value.contratoFile,"contrato");m.contrato=re}i.value&&(l.value.fotoFile||l.value.cedulaFile||l.value.paseFile||l.value.contratoFile)?await po("conductores",j,m):!i.value&&(l.value.fotoFile||l.value.cedulaFile||l.value.paseFile||l.value.contratoFile)?await po("conductores",j,m):i.value&&await po("conductores",j,m),await h(),O()}catch(m){console.error("Error saving conductor:",m),alert("Error al guardar el conductor. Por favor intenta de nuevo.")}finally{r.value=!1}}function S(k){i.value=k,l.value={nombre:k.nombre,numeroDocumento:k.numeroDocumento||"",telefono:k.telefono,direccion:k.direccion,experiencia:k.experiencia,fechaInicio:k.fechaInicio,foto:k.foto||null,cedula:k.cedula||null,pase:k.pase||null,contrato:k.contrato||null,fotoFile:null,cedulaFile:null,paseFile:null,contratoFile:null},s.value=!0}async function N(k){var m,j,re,A;if(confirm(`¿Estás seguro de eliminar a ${k.nombre}?`))try{(m=k.foto)!=null&&m.path&&await Ji(k.foto.path),(j=k.cedula)!=null&&j.path&&await Ji(k.cedula.path),(re=k.pase)!=null&&re.path&&await Ji(k.pase.path),(A=k.contrato)!=null&&A.path&&await Ji(k.contrato.path),await Am("conductores",k.id),await h()}catch(_){console.error("Error deleting conductor:",_),alert("Error al eliminar el conductor")}}function M(k){a.value=k}function O(){s.value=!1,i.value=null,l.value={nombre:"",numeroDocumento:"",telefono:"",direccion:"",experiencia:"",fechaInicio:"",foto:null,cedula:null,pase:null,contrato:null,fotoFile:null,cedulaFile:null,paseFile:null,contratoFile:null}}function z(k){if(!k)return"??";const m=k.split(" ");return m.length>=2?(m[0][0]+m[1][0]).toUpperCase():k.substring(0,2).toUpperCase()}function Q(k){return k?new Date(k+"T00:00:00").toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}):""}return(k,m)=>{var j,re,A,_,T,I,R,C,E,nt,Nt,Be,Ee,me,yt,Bt;return J(),Z("div",MS,[w("div",LS,[m[20]||(m[20]=w("h2",{class:"view-title"},"Gestión de Conductores",-1)),w("div",FS,[w("button",{onClick:m[0]||(m[0]=ee=>s.value=!0),class:"btn-primary"}," ➕ Agregar Conductor ")])]),w("div",US,[w("div",BS,[m[22]||(m[22]=w("div",{class:"stat-icon"},"👥",-1)),w("div",$S,[w("div",jS,pe(e.value.length),1),m[21]||(m[21]=w("div",{class:"stat-label"},"Conductores Total",-1))])]),w("div",qS,[m[24]||(m[24]=w("div",{class:"stat-icon disponible"},"✅",-1)),w("div",HS,[w("div",WS,pe(c.value),1),m[23]||(m[23]=w("div",{class:"stat-label"},"Activos",-1))])])]),w("div",zS,[n.value?(J(),Z("div",KS,[...m[25]||(m[25]=[w("div",{class:"spinner"},null,-1),w("p",null,"Cargando conductores...",-1)])])):e.value.length===0?(J(),Z("div",GS,[m[26]||(m[26]=w("div",{class:"empty-icon"},"👥",-1)),m[27]||(m[27]=w("h3",null,"No hay conductores registrados",-1)),m[28]||(m[28]=w("p",null,"Comienza agregando tu primer conductor",-1)),w("button",{onClick:m[1]||(m[1]=ee=>s.value=!0),class:"btn-primary"}," Agregar Primer Conductor ")])):(J(),Z("div",QS,[(J(!0),Z(At,null,cl(e.value,ee=>{var Ne;return J(),Z("div",{key:ee.id,class:"conductor-card"},[w("div",YS,[w("div",JS,[(Ne=ee.foto)!=null&&Ne.url?(J(),Z("img",{key:0,src:ee.foto.url,alt:ee.nombre},null,8,XS)):(J(),Z("div",ZS,pe(z(ee.nombre)),1))]),w("div",eC,[w("h4",tC,pe(ee.nombre),1),ee.numeroDocumento?(J(),Z("p",nC,"📋 "+pe(ee.numeroDocumento),1)):je("",!0),w("p",rC,"📞 "+pe(ee.telefono),1),w("p",sC,"🚗 "+pe(ee.experiencia),1)])]),w("div",iC,[w("p",oC,[m[29]||(m[29]=w("span",{class:"detail-label"},"Dirección:",-1)),w("span",aC,pe(ee.direccion),1)]),w("p",lC,[m[30]||(m[30]=w("span",{class:"detail-label"},"Inicio contrato:",-1)),w("span",cC,pe(Q(ee.fechaInicio)),1)])]),w("div",uC,[w("div",hC,[ee.cedula?(J(),Z("span",dC," 📄 Cédula ")):je("",!0),ee.pase?(J(),Z("span",fC," 🪪 Pase ")):je("",!0),ee.contrato?(J(),Z("span",pC," 📋 Contrato ")):je("",!0)])]),w("div",gC,[w("button",{onClick:Oe=>M(ee),class:"btn-icon",title:"Ver detalles"}," 👁️ ",8,mC),w("button",{onClick:Oe=>S(ee),class:"btn-icon",title:"Editar"}," ✏️ ",8,_C),w("button",{onClick:Oe=>N(ee),class:"btn-icon btn-danger-icon",title:"Eliminar"}," 🗑️ ",8,yC)])])}),128))]))]),s.value?(J(),Z("div",{key:0,class:"modal-overlay",onClick:Bs(O,["self"])},[w("div",vC,[w("div",EC,[w("h3",null,pe(i.value?"Editar Conductor":"Agregar Nuevo Conductor"),1),w("button",{onClick:O,class:"btn-close"},"✕")]),w("form",{onSubmit:Bs(y,["prevent"]),class:"modal-body"},[w("div",TC,[w("div",wC,[m[37]||(m[37]=w("h4",{class:"section-subtitle"},"Información Personal",-1)),w("div",IC,[m[31]||(m[31]=w("label",{class:"form-label"},"Nombre Completo *",-1)),kt(w("input",{"onUpdate:modelValue":m[2]||(m[2]=ee=>l.value.nombre=ee),type:"text",class:"form-input",placeholder:"Juan Pérez González",required:""},null,512),[[Wt,l.value.nombre]])]),w("div",AC,[m[32]||(m[32]=w("label",{class:"form-label"},"Número de Documento *",-1)),kt(w("input",{"onUpdate:modelValue":m[3]||(m[3]=ee=>l.value.numeroDocumento=ee),type:"text",class:"form-input",placeholder:"1234567890",required:""},null,512),[[Wt,l.value.numeroDocumento]])]),w("div",bC,[m[33]||(m[33]=w("label",{class:"form-label"},"Teléfono *",-1)),kt(w("input",{"onUpdate:modelValue":m[4]||(m[4]=ee=>l.value.telefono=ee),type:"tel",class:"form-input",placeholder:"+57 300 123 4567",required:""},null,512),[[Wt,l.value.telefono]])]),w("div",RC,[m[34]||(m[34]=w("label",{class:"form-label"},"Dirección de Residencia *",-1)),kt(w("textarea",{"onUpdate:modelValue":m[5]||(m[5]=ee=>l.value.direccion=ee),class:"form-textarea",placeholder:"Calle 123 #45-67, Barrio, Ciudad",rows:"2",required:""},null,512),[[Wt,l.value.direccion]])]),w("div",SC,[m[35]||(m[35]=w("label",{class:"form-label"},"Experiencia Manejando *",-1)),kt(w("input",{"onUpdate:modelValue":m[6]||(m[6]=ee=>l.value.experiencia=ee),type:"text",class:"form-input",placeholder:"5 años, 3 años en Uber",required:""},null,512),[[Wt,l.value.experiencia]])]),w("div",CC,[m[36]||(m[36]=w("label",{class:"form-label"},"Fecha de Inicio del Contrato *",-1)),kt(w("input",{"onUpdate:modelValue":m[7]||(m[7]=ee=>l.value.fechaInicio=ee),type:"date",class:"form-input",required:""},null,512),[[Wt,l.value.fechaInicio]])])]),w("div",PC,[m[42]||(m[42]=w("h4",{class:"section-subtitle"},"Documentos",-1)),w("div",kC,[m[38]||(m[38]=w("label",{class:"form-label"},"Foto del Conductor (opcional)",-1)),w("div",DC,[w("input",{type:"file",onChange:m[8]||(m[8]=ee=>f(ee,"foto")),accept:"image/*",class:"file-input",id:"foto-input"},null,32),w("label",VC,[!l.value.fotoFile&&!((j=l.value.foto)!=null&&j.url)?(J(),Z("span",NC,"📷 Seleccionar foto")):l.value.fotoFile?(J(),Z("span",OC,"✅ "+pe(l.value.fotoFile.name),1)):(J(),Z("span",xC,"✅ Foto cargada"))]),(re=l.value.foto)!=null&&re.url||l.value.fotoFile?(J(),Z("button",{key:0,type:"button",onClick:m[9]||(m[9]=ee=>g("foto")),class:"btn-clear-file"}," ✕ ")):je("",!0)]),(A=l.value.foto)!=null&&A.url&&!l.value.fotoFile?(J(),Z("img",{key:0,src:l.value.foto.url,class:"preview-image"},null,8,MC)):je("",!0)]),w("div",LC,[m[39]||(m[39]=w("label",{class:"form-label"},"Cédula (Foto o PDF)",-1)),w("div",FC,[w("input",{type:"file",onChange:m[10]||(m[10]=ee=>f(ee,"cedula")),accept:"image/*,.pdf",class:"file-input",id:"cedula-input"},null,32),w("label",UC,[!l.value.cedulaFile&&!((_=l.value.cedula)!=null&&_.url)?(J(),Z("span",BC,"📄 Seleccionar cédula")):l.value.cedulaFile?(J(),Z("span",$C,"✅ "+pe(l.value.cedulaFile.name),1)):(J(),Z("span",jC,"✅ Cédula cargada"))]),(T=l.value.cedula)!=null&&T.url||l.value.cedulaFile?(J(),Z("button",{key:0,type:"button",onClick:m[11]||(m[11]=ee=>g("cedula")),class:"btn-clear-file"}," ✕ ")):je("",!0)]),(I=l.value.cedula)!=null&&I.url&&!l.value.cedulaFile?(J(),Z("a",{key:0,href:l.value.cedula.url,target:"_blank",class:"file-link"}," Ver documento ",8,qC)):je("",!0)]),w("div",HC,[m[40]||(m[40]=w("label",{class:"form-label"},"Pase de Conducción (Foto o PDF)",-1)),w("div",WC,[w("input",{type:"file",onChange:m[12]||(m[12]=ee=>f(ee,"pase")),accept:"image/*,.pdf",class:"file-input",id:"pase-input"},null,32),w("label",zC,[!l.value.paseFile&&!((R=l.value.pase)!=null&&R.url)?(J(),Z("span",KC,"🪪 Seleccionar pase")):l.value.paseFile?(J(),Z("span",GC,"✅ "+pe(l.value.paseFile.name),1)):(J(),Z("span",QC,"✅ Pase cargado"))]),(C=l.value.pase)!=null&&C.url||l.value.paseFile?(J(),Z("button",{key:0,type:"button",onClick:m[13]||(m[13]=ee=>g("pase")),class:"btn-clear-file"}," ✕ ")):je("",!0)]),(E=l.value.pase)!=null&&E.url&&!l.value.paseFile?(J(),Z("a",{key:0,href:l.value.pase.url,target:"_blank",class:"file-link"}," Ver documento ",8,YC)):je("",!0)]),w("div",JC,[m[41]||(m[41]=w("label",{class:"form-label"},"Contrato Firmado (Foto o PDF)",-1)),w("div",XC,[w("input",{type:"file",onChange:m[14]||(m[14]=ee=>f(ee,"contrato")),accept:"image/*,.pdf",class:"file-input",id:"contrato-input"},null,32),w("label",ZC,[!l.value.contratoFile&&!((nt=l.value.contrato)!=null&&nt.url)?(J(),Z("span",eP,"📋 Seleccionar contrato")):l.value.contratoFile?(J(),Z("span",tP,"✅ "+pe(l.value.contratoFile.name),1)):(J(),Z("span",nP,"✅ Contrato cargado"))]),(Nt=l.value.contrato)!=null&&Nt.url||l.value.contratoFile?(J(),Z("button",{key:0,type:"button",onClick:m[15]||(m[15]=ee=>g("contrato")),class:"btn-clear-file"}," ✕ ")):je("",!0)]),(Be=l.value.contrato)!=null&&Be.url&&!l.value.contratoFile?(J(),Z("a",{key:0,href:l.value.contrato.url,target:"_blank",class:"file-link"}," Ver documento ",8,rP)):je("",!0)])])]),w("div",sP,[w("button",{type:"button",onClick:O,class:"btn-secondary"}," Cancelar "),w("button",{type:"submit",class:"btn-primary",disabled:r.value},pe(r.value?"Guardando...":"Guardar"),9,iP)])],32)])])):je("",!0),a.value?(J(),Z("div",{key:1,class:"modal-overlay",onClick:m[19]||(m[19]=Bs(ee=>a.value=null,["self"]))},[w("div",oP,[w("div",aP,[m[43]||(m[43]=w("h3",null,"Detalles del Conductor",-1)),w("button",{onClick:m[16]||(m[16]=ee=>a.value=null),class:"btn-close"},"✕")]),w("div",lP,[w("div",cP,[w("div",uP,[(Ee=a.value.foto)!=null&&Ee.url?(J(),Z("img",{key:0,src:a.value.foto.url,alt:a.value.nombre},null,8,hP)):(J(),Z("div",dP,pe(z(a.value.nombre)),1))]),w("div",fP,[w("h2",null,pe(a.value.nombre),1),w("p",pP,"📞 "+pe(a.value.telefono),1),w("p",gP,"🚗 "+pe(a.value.experiencia),1)])]),w("div",mP,[w("div",_P,[m[47]||(m[47]=w("h4",null,"Información Personal",-1)),a.value.numeroDocumento?(J(),Z("p",yP,[m[44]||(m[44]=w("strong",null,"Número de documento:",-1)),no(" "+pe(a.value.numeroDocumento),1)])):je("",!0),w("p",null,[m[45]||(m[45]=w("strong",null,"Dirección:",-1)),no(" "+pe(a.value.direccion),1)]),w("p",null,[m[46]||(m[46]=w("strong",null,"Fecha inicio contrato:",-1)),no(" "+pe(Q(a.value.fechaInicio)),1)])]),w("div",vP,[m[48]||(m[48]=w("h4",null,"Documentos",-1)),w("div",EP,[(me=a.value.cedula)!=null&&me.url?(J(),Z("a",{key:0,href:a.value.cedula.url,target:"_blank",class:"document-link"}," 📄 Ver Cédula ",8,TP)):(J(),Z("span",wP,"📄 Cédula no cargada")),(yt=a.value.pase)!=null&&yt.url?(J(),Z("a",{key:2,href:a.value.pase.url,target:"_blank",class:"document-link"}," 🪪 Ver Pase de Conducción ",8,IP)):(J(),Z("span",AP,"🪪 Pase no cargado")),(Bt=a.value.contrato)!=null&&Bt.url?(J(),Z("a",{key:4,href:a.value.contrato.url,target:"_blank",class:"document-link"}," 📋 Ver Contrato ",8,bP)):(J(),Z("span",RP,"📋 Contrato no cargado"))])])])]),w("div",SP,[w("button",{onClick:m[17]||(m[17]=ee=>a.value=null),class:"btn-secondary"},"Cerrar"),w("button",{onClick:m[18]||(m[18]=ee=>{S(a.value),a.value=null}),class:"btn-primary"}," Editar ")])])])):je("",!0)])}}},PP=cu(CP,[["__scopeId","data-v-5f3e9c7d"]]),kP={id:"app"},DP={key:0,class:"login-container"},VP={class:"login-card"},NP=["disabled"],OP={key:0},xP={key:1},MP={key:0,class:"error-message"},LP={key:1,class:"app-container"},FP={class:"app-header"},UP={class:"header-content"},BP={class:"header-right"},$P={class:"user-info"},jP=["src"],qP={class:"user-name"},HP={class:"app-nav"},WP={class:"nav-content"},zP={class:"main-content"},KP={__name:"App",setup(t){const e=Ke(null),n=Ke("vehiculos"),r=Ke(!1),s=Ke("");Go(()=>{vI(l=>{l&&fd.includes(l.email)?(e.value=l,s.value=""):(l&&(s.value="Usuario no autorizado. Contacta al administrador.",Ja()),e.value=null),r.value=!1})});async function i(){r.value=!0,s.value="";try{const l=await yI();fd.includes(l.email)?e.value=l:(s.value="Usuario no autorizado. Contacta al administrador.",await Ja(),e.value=null)}catch(l){console.error("Error signing in:",l),s.value="Error al iniciar sesión. Intenta de nuevo."}finally{r.value=!1}}async function a(){try{await Ja(),e.value=null}catch(l){console.error("Error signing out:",l)}}return(l,c)=>(J(),Z("div",kP,[e.value?(J(),Z("div",LP,[w("header",FP,[w("div",UP,[c[4]||(c[4]=w("div",{class:"header-left"},[w("div",{class:"app-icon-small"},"⚡"),w("h1",{class:"header-title"},"FleetSync")],-1)),w("div",BP,[w("div",$P,[e.value.photoURL?(J(),Z("img",{key:0,src:e.value.photoURL,alt:"User",class:"user-avatar"},null,8,jP)):je("",!0),w("span",qP,pe(e.value.displayName||e.value.email),1)]),w("button",{onClick:a,class:"btn-logout"},"Cerrar Sesión")])])]),w("nav",HP,[w("div",WP,[w("button",{onClick:c[0]||(c[0]=h=>n.value="vehiculos"),class:Wr(["nav-item",{active:n.value==="vehiculos"}])}," 🚗 Vehículos ",2),w("button",{onClick:c[1]||(c[1]=h=>n.value="conductores"),class:Wr(["nav-item",{active:n.value==="conductores"}])}," 👥 Conductores ",2)])]),w("main",zP,[n.value==="vehiculos"?(J(),pl(_R,{key:0})):n.value==="conductores"?(J(),pl(PP,{key:1})):je("",!0)])])):(J(),Z("div",DP,[w("div",VP,[c[3]||(c[3]=w("div",{class:"login-header"},[w("div",{class:"app-icon"},"⚡"),w("h1",{class:"app-title"},"FleetSync"),w("p",{class:"app-subtitle"},"Tu flota siempre en sync")],-1)),w("button",{onClick:i,class:"btn-login",disabled:r.value},[r.value?(J(),Z("span",xP,"Cargando...")):(J(),Z("span",OP,[...c[2]||(c[2]=[Xy('<svg class="google-icon" viewBox="0 0 24 24" data-v-dddfd016><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" data-v-dddfd016></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" data-v-dddfd016></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" data-v-dddfd016></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" data-v-dddfd016></path></svg> Iniciar Sesión con Google ',2)])]))],8,NP),s.value?(J(),Z("p",MP,pe(s.value),1)):je("",!0)])]))]))}},GP=cu(KP,[["__scopeId","data-v-dddfd016"]]);Ov(GP).mount("#app");
