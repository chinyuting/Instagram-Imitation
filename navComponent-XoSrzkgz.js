import{l as V,m as Ot,_ as kt,r as H,o as Lt,a as W,c as U,b as v,e as ht,p as It,q as Rt,k as $t,s as Vt,i as J,v as et,w as jt,F as qt}from"./index-e7oKsTDA.js";const Ft="/Instagram-Imitation/assets/Instagram_logo_light-WGj1KLTg.png",Bt="/Instagram-Imitation/assets/test-hzjYY4YN.jpg";var Nt={exports:{}},X={exports:{}};/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var _t;function K(){return _t||(_t=1,function(w,k){(function(n,o){o(k)})(V,function(n){const e="transitionend",s=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),u=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},l=t=>{let a=t.getAttribute("data-bs-target");if(!a||a==="#"){let h=t.getAttribute("href");if(!h||!h.includes("#")&&!h.startsWith("."))return null;h.includes("#")&&!h.startsWith("#")&&(h=`#${h.split("#")[1]}`),a=h&&h!=="#"?h.trim():null}return a},y=t=>{const a=l(t);return a&&document.querySelector(a)?a:null},E=t=>{const a=l(t);return a?document.querySelector(a):null},d=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:h}=window.getComputedStyle(t);const C=Number.parseFloat(a),x=Number.parseFloat(h);return!C&&!x?0:(a=a.split(",")[0],h=h.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(h))*1e3)},A=t=>{t.dispatchEvent(new Event(e))},c=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),b=t=>c(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,m=t=>{if(!c(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",h=t.closest("details:not([open])");if(!h)return a;if(h!==t){const C=t.closest("summary");if(C&&C.parentNode!==h||C===null)return!1}return a},_=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",O=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?O(t.parentNode):null},j=()=>{},T=t=>{t.offsetHeight},R=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,M=[],i=t=>{document.readyState==="loading"?(M.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of M)a()}),M.push(t)):t()},r=()=>document.documentElement.dir==="rtl",p=t=>{i(()=>{const a=R();if(a){const h=t.NAME,C=a.fn[h];a.fn[h]=t.jQueryInterface,a.fn[h].Constructor=t,a.fn[h].noConflict=()=>(a.fn[h]=C,t.jQueryInterface)}})},g=t=>{typeof t=="function"&&t()},S=(t,a,h=!0)=>{if(!h){g(t);return}const x=d(a)+5;let L=!1;const $=({target:F})=>{F===a&&(L=!0,a.removeEventListener(e,$),g(t))};a.addEventListener(e,$),setTimeout(()=>{L||A(a)},x)},N=(t,a,h,C)=>{const x=t.length;let L=t.indexOf(a);return L===-1?!h&&C?t[x-1]:t[0]:(L+=h?1:-1,C&&(L=(L+x)%x),t[Math.max(0,Math.min(L,x-1))])};n.defineJQueryPlugin=p,n.execute=g,n.executeAfterTransition=S,n.findShadowRoot=O,n.getElement=b,n.getElementFromSelector=E,n.getNextActiveElement=N,n.getSelectorFromElement=y,n.getTransitionDurationFromElement=d,n.getUID=u,n.getjQuery=R,n.isDisabled=_,n.isElement=c,n.isRTL=r,n.isVisible=m,n.noop=j,n.onDOMContentLoaded=i,n.reflow=T,n.toType=s,n.triggerTransitionEnd=A,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(X,X.exports)),X.exports}var nt={exports:{}};/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pt;function Q(){return pt||(pt=1,function(w,k){(function(n,o){w.exports=o(K())})(V,function(n){const o=/[^.]*(?=\..*)\.|.*/,f=/\..*/,e=/::\d+$/,s={};let u=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},y=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function E(i,r){return r&&`${r}::${u++}`||i.uidEvent||u++}function d(i){const r=E(i);return i.uidEvent=r,s[r]=s[r]||{},s[r]}function A(i,r){return function p(g){return M(g,{delegateTarget:i}),p.oneOff&&R.off(i,g.type,r),r.apply(i,[g])}}function c(i,r,p){return function g(S){const N=i.querySelectorAll(r);for(let{target:t}=S;t&&t!==this;t=t.parentNode)for(const a of N)if(a===t)return M(S,{delegateTarget:t}),g.oneOff&&R.off(i,S.type,r,p),p.apply(t,[S])}}function b(i,r,p=null){return Object.values(i).find(g=>g.callable===r&&g.delegationSelector===p)}function m(i,r,p){const g=typeof r=="string",S=g?p:r||p;let N=T(i);return y.has(N)||(N=i),[g,S,N]}function _(i,r,p,g,S){if(typeof r!="string"||!i)return;let[N,t,a]=m(r,p,g);r in l&&(t=(tt=>function(B){if(!B.relatedTarget||B.relatedTarget!==B.delegateTarget&&!B.delegateTarget.contains(B.relatedTarget))return tt.call(this,B)})(t));const h=d(i),C=h[a]||(h[a]={}),x=b(C,t,N?p:null);if(x){x.oneOff=x.oneOff&&S;return}const L=E(t,r.replace(o,"")),$=N?c(i,p,t):A(i,t);$.delegationSelector=N?p:null,$.callable=t,$.oneOff=S,$.uidEvent=L,C[L]=$,i.addEventListener(a,$,N)}function O(i,r,p,g,S){const N=b(r[p],g,S);N&&(i.removeEventListener(p,N,!!S),delete r[p][N.uidEvent])}function j(i,r,p,g){const S=r[p]||{};for(const N of Object.keys(S))if(N.includes(g)){const t=S[N];O(i,r,p,t.callable,t.delegationSelector)}}function T(i){return i=i.replace(f,""),l[i]||i}const R={on(i,r,p,g){_(i,r,p,g,!1)},one(i,r,p,g){_(i,r,p,g,!0)},off(i,r,p,g){if(typeof r!="string"||!i)return;const[S,N,t]=m(r,p,g),a=t!==r,h=d(i),C=h[t]||{},x=r.startsWith(".");if(typeof N<"u"){if(!Object.keys(C).length)return;O(i,h,t,N,S?p:null);return}if(x)for(const L of Object.keys(h))j(i,h,L,r.slice(1));for(const L of Object.keys(C)){const $=L.replace(e,"");if(!a||r.includes($)){const F=C[L];O(i,h,t,F.callable,F.delegationSelector)}}},trigger(i,r,p){if(typeof r!="string"||!i)return null;const g=n.getjQuery(),S=T(r),N=r!==S;let t=null,a=!0,h=!0,C=!1;N&&g&&(t=g.Event(r,p),g(i).trigger(t),a=!t.isPropagationStopped(),h=!t.isImmediatePropagationStopped(),C=t.isDefaultPrevented());let x=new Event(r,{bubbles:a,cancelable:!0});return x=M(x,p),C&&x.preventDefault(),h&&i.dispatchEvent(x),x.defaultPrevented&&t&&t.preventDefault(),x}};function M(i,r){for(const[p,g]of Object.entries(r||{}))try{i[p]=g}catch{Object.defineProperty(i,p,{configurable:!0,get(){return g}})}return i}return R})}(nt)),nt.exports}var st={exports:{}};/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mt;function dt(){return mt||(mt=1,function(w,k){(function(n,o){w.exports=o(K())})(V,function(n){return{find(f,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,f))},findOne(f,e=document.documentElement){return Element.prototype.querySelector.call(e,f)},children(f,e){return[].concat(...f.children).filter(s=>s.matches(e))},parents(f,e){const s=[];let u=f.parentNode.closest(e);for(;u;)s.push(u),u=u.parentNode.closest(e);return s},prev(f,e){let s=f.previousElementSibling;for(;s;){if(s.matches(e))return[s];s=s.previousElementSibling}return[]},next(f,e){let s=f.nextElementSibling;for(;s;){if(s.matches(e))return[s];s=s.nextElementSibling}return[]},focusableChildren(f){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(s=>`${s}:not([tabindex^="-"])`).join(",");return this.find(e,f).filter(s=>!n.isDisabled(s)&&n.isVisible(s))}}})}(st)),st.exports}var ot={exports:{}},it={exports:{}};/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gt;function Tt(){return gt||(gt=1,function(w,k){(function(n,o){w.exports=o()})(V,function(){function n(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function o(e){return e.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}return{setDataAttribute(e,s,u){e.setAttribute(`data-bs-${o(s)}`,u)},removeDataAttribute(e,s){e.removeAttribute(`data-bs-${o(s)}`)},getDataAttributes(e){if(!e)return{};const s={},u=Object.keys(e.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of u){let y=l.replace(/^bs/,"");y=y.charAt(0).toLowerCase()+y.slice(1,y.length),s[y]=n(e.dataset[l])}return s},getDataAttribute(e,s){return n(e.getAttribute(`data-bs-${o(s)}`))}}})}(it)),it.exports}/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bt;function Kt(){return bt||(bt=1,function(w,k){(function(n,o){w.exports=o(dt(),Tt(),K())})(V,function(n,o,f){const e=c=>c&&typeof c=="object"&&"default"in c?c:{default:c},s=e(n),u=e(o),l=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",y=".sticky-top",E="padding-right",d="margin-right";class A{constructor(){this._element=document.body}getWidth(){const b=document.documentElement.clientWidth;return Math.abs(window.innerWidth-b)}hide(){const b=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,E,m=>m+b),this._setElementAttributes(l,E,m=>m+b),this._setElementAttributes(y,d,m=>m-b)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,E),this._resetElementAttributes(l,E),this._resetElementAttributes(y,d)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(b,m,_){const O=this.getWidth(),j=T=>{if(T!==this._element&&window.innerWidth>T.clientWidth+O)return;this._saveInitialAttribute(T,m);const R=window.getComputedStyle(T).getPropertyValue(m);T.style.setProperty(m,`${_(Number.parseFloat(R))}px`)};this._applyManipulationCallback(b,j)}_saveInitialAttribute(b,m){const _=b.style.getPropertyValue(m);_&&u.default.setDataAttribute(b,m,_)}_resetElementAttributes(b,m){const _=O=>{const j=u.default.getDataAttribute(O,m);if(j===null){O.style.removeProperty(m);return}u.default.removeDataAttribute(O,m),O.style.setProperty(m,j)};this._applyManipulationCallback(b,_)}_applyManipulationCallback(b,m){if(f.isElement(b)){m(b);return}for(const _ of s.default.find(b,this._element))m(_)}}return A})}(ot)),ot.exports}var rt={exports:{}},at={exports:{}};/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Et;function Pt(){return Et||(Et=1,function(w,k){(function(n,o){w.exports=o()})(V,function(){const n=new Map;return{set(f,e,s){n.has(f)||n.set(f,new Map);const u=n.get(f);if(!u.has(e)&&u.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(u.keys())[0]}.`);return}u.set(e,s)},get(f,e){return n.has(f)&&n.get(f).get(e)||null},remove(f,e){if(!n.has(f))return;const s=n.get(f);s.delete(e),s.size===0&&n.delete(f)}}})}(at)),at.exports}var lt={exports:{}};/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vt;function ft(){return vt||(vt=1,function(w,k){(function(n,o){w.exports=o(K(),Tt())})(V,function(n,o){const e=(u=>u&&typeof u=="object"&&"default"in u?u:{default:u})(o);class s{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,y){const E=n.isElement(y)?e.default.getDataAttribute(y,"config"):{};return{...this.constructor.Default,...typeof E=="object"?E:{},...n.isElement(y)?e.default.getDataAttributes(y):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,y=this.constructor.DefaultType){for(const E of Object.keys(y)){const d=y[E],A=l[E],c=n.isElement(A)?"element":n.toType(A);if(!new RegExp(d).test(c))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${E}" provided type "${c}" but expected type "${d}".`)}}}return s})}(lt)),lt.exports}/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var yt;function Yt(){return yt||(yt=1,function(w,k){(function(n,o){w.exports=o(Pt(),K(),Q(),ft())})(V,function(n,o,f,e){const s=A=>A&&typeof A=="object"&&"default"in A?A:{default:A},u=s(n),l=s(f),y=s(e),E="5.2.3";class d extends y.default{constructor(c,b){super(),c=o.getElement(c),c&&(this._element=c,this._config=this._getConfig(b),u.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){u.default.remove(this._element,this.constructor.DATA_KEY),l.default.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,b,m=!0){o.executeAfterTransition(c,b,m)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return u.default.get(o.getElement(c),this.DATA_KEY)}static getOrCreateInstance(c,b={}){return this.getInstance(c)||new this(c,typeof b=="object"?b:null)}static get VERSION(){return E}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}return d})}(rt)),rt.exports}var ct={exports:{}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var At;function Ht(){return At||(At=1,function(w,k){(function(n,o){w.exports=o(Q(),K(),ft())})(V,function(n,o,f){const e=m=>m&&typeof m=="object"&&"default"in m?m:{default:m},s=e(n),u=e(f),l="backdrop",y="fade",E="show",d=`mousedown.bs.${l}`,A={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},c={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class b extends u.default{constructor(_){super(),this._config=this._getConfig(_),this._isAppended=!1,this._element=null}static get Default(){return A}static get DefaultType(){return c}static get NAME(){return l}show(_){if(!this._config.isVisible){o.execute(_);return}this._append();const O=this._getElement();this._config.isAnimated&&o.reflow(O),O.classList.add(E),this._emulateAnimation(()=>{o.execute(_)})}hide(_){if(!this._config.isVisible){o.execute(_);return}this._getElement().classList.remove(E),this._emulateAnimation(()=>{this.dispose(),o.execute(_)})}dispose(){this._isAppended&&(s.default.off(this._element,d),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const _=document.createElement("div");_.className=this._config.className,this._config.isAnimated&&_.classList.add(y),this._element=_}return this._element}_configAfterMerge(_){return _.rootElement=o.getElement(_.rootElement),_}_append(){if(this._isAppended)return;const _=this._getElement();this._config.rootElement.append(_),s.default.on(_,d,()=>{o.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(_){o.executeAfterTransition(_,this._getElement(),this._config.isAnimated)}}return b})}(ct)),ct.exports}var ut={exports:{}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Dt;function Wt(){return Dt||(Dt=1,function(w,k){(function(n,o){w.exports=o(Q(),dt(),ft())})(V,function(n,o,f){const e=R=>R&&typeof R=="object"&&"default"in R?R:{default:R},s=e(n),u=e(o),l=e(f),y="focustrap",d=".bs.focustrap",A=`focusin${d}`,c=`keydown.tab${d}`,b="Tab",m="forward",_="backward",O={autofocus:!0,trapElement:null},j={autofocus:"boolean",trapElement:"element"};class T extends l.default{constructor(M){super(),this._config=this._getConfig(M),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return O}static get DefaultType(){return j}static get NAME(){return y}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),s.default.off(document,d),s.default.on(document,A,M=>this._handleFocusin(M)),s.default.on(document,c,M=>this._handleKeydown(M)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,s.default.off(document,d))}_handleFocusin(M){const{trapElement:i}=this._config;if(M.target===document||M.target===i||i.contains(M.target))return;const r=u.default.focusableChildren(i);r.length===0?i.focus():this._lastTabNavDirection===_?r[r.length-1].focus():r[0].focus()}_handleKeydown(M){M.key===b&&(this._lastTabNavDirection=M.shiftKey?_:m)}}return T})}(ut)),ut.exports}var Z={exports:{}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var wt;function Ut(){return wt||(wt=1,function(w,k){(function(n,o){o(k,Q(),K())})(V,function(n,o,f){const s=(l=>l&&typeof l=="object"&&"default"in l?l:{default:l})(o),u=(l,y="hide")=>{const E=`click.dismiss${l.EVENT_KEY}`,d=l.NAME;s.default.on(document,E,`[data-bs-dismiss="${d}"]`,function(A){if(["A","AREA"].includes(this.tagName)&&A.preventDefault(),f.isDisabled(this))return;const c=f.getElementFromSelector(this)||this.closest(`.${d}`);l.getOrCreateInstance(c)[y]()})};n.enableDismissTrigger=u,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Z,Z.exports)),Z.exports}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(w,k){(function(n,o){w.exports=o(K(),Q(),dt(),Kt(),Yt(),Ht(),Wt(),Ut())})(V,function(n,o,f,e,s,u,l,y){const E=Y=>Y&&typeof Y=="object"&&"default"in Y?Y:{default:Y},d=E(o),A=E(f),c=E(e),b=E(s),m=E(u),_=E(l),O="modal",T=".bs.modal",R=".data-api",M="Escape",i=`hide${T}`,r=`hidePrevented${T}`,p=`hidden${T}`,g=`show${T}`,S=`shown${T}`,N=`resize${T}`,t=`click.dismiss${T}`,a=`mousedown.dismiss${T}`,h=`keydown.dismiss${T}`,C=`click${T}${R}`,x="modal-open",L="fade",$="show",F="modal-static",tt=".modal.show",B=".modal-dialog",St=".modal-body",xt='[data-bs-toggle="modal"]',Ct={backdrop:!0,focus:!0,keyboard:!0},Mt={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class P extends b.default{constructor(D,I){super(D,I),this._dialog=A.default.findOne(B,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new c.default,this._addEventListeners()}static get Default(){return Ct}static get DefaultType(){return Mt}static get NAME(){return O}toggle(D){return this._isShown?this.hide():this.show(D)}show(D){this._isShown||this._isTransitioning||d.default.trigger(this._element,g,{relatedTarget:D}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(x),this._adjustDialog(),this._backdrop.show(()=>this._showElement(D)))}hide(){!this._isShown||this._isTransitioning||d.default.trigger(this._element,i).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove($),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const D of[window,this._dialog])d.default.off(D,T);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new m.default({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new _.default({trapElement:this._element})}_showElement(D){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const I=A.default.findOne(St,this._dialog);I&&(I.scrollTop=0),n.reflow(this._element),this._element.classList.add($);const q=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,d.default.trigger(this._element,S,{relatedTarget:D})};this._queueCallback(q,this._dialog,this._isAnimated())}_addEventListeners(){d.default.on(this._element,h,D=>{if(D.key===M){if(this._config.keyboard){D.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),d.default.on(window,N,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),d.default.on(this._element,a,D=>{d.default.one(this._element,t,I=>{if(!(this._element!==D.target||this._element!==I.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(x),this._resetAdjustments(),this._scrollBar.reset(),d.default.trigger(this._element,p)})}_isAnimated(){return this._element.classList.contains(L)}_triggerBackdropTransition(){if(d.default.trigger(this._element,r).defaultPrevented)return;const I=this._element.scrollHeight>document.documentElement.clientHeight,q=this._element.style.overflowY;q==="hidden"||this._element.classList.contains(F)||(I||(this._element.style.overflowY="hidden"),this._element.classList.add(F),this._queueCallback(()=>{this._element.classList.remove(F),this._queueCallback(()=>{this._element.style.overflowY=q},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const D=this._element.scrollHeight>document.documentElement.clientHeight,I=this._scrollBar.getWidth(),q=I>0;if(q&&!D){const z=n.isRTL()?"paddingLeft":"paddingRight";this._element.style[z]=`${I}px`}if(!q&&D){const z=n.isRTL()?"paddingRight":"paddingLeft";this._element.style[z]=`${I}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(D,I){return this.each(function(){const q=P.getOrCreateInstance(this,D);if(typeof D=="string"){if(typeof q[D]>"u")throw new TypeError(`No method named "${D}"`);q[D](I)}})}}return d.default.on(document,C,xt,function(Y){const D=n.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&Y.preventDefault(),d.default.one(D,g,z=>{z.defaultPrevented||d.default.one(D,p,()=>{n.isVisible(this)&&this.focus()})});const I=A.default.findOne(tt);I&&P.getInstance(I).hide(),P.getOrCreateInstance(D).toggle(this)}),y.enableDismissTrigger(P),n.defineJQueryPlugin(P),P})})(Nt);var zt=Nt.exports;const Qt=Ot(zt),G=w=>(It("data-v-0ce0653b"),w=w(),Rt(),w),Gt=G(()=>v("button",{type:"button",class:"btn-close btn-close-white position-absolute top-0 end-0 m-3","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),Jt={class:"modal-content my-5"},Xt={class:"modal-header d-flex justify-content-center"},Zt=G(()=>v("h5",{class:"modal-title",id:"exampleModalLabel"},"建立新貼文",-1)),te={class:"d-flex"},ee={key:0,class:"modal-body d-flex flex-column align-items-center p-5"},ne={class:"d-flex flex-column align-items-center"},se=G(()=>v("i",{class:"bi bi-image pic-icon"},null,-1)),oe=G(()=>v("div",null,"將相片和影片拖曳到這裡",-1)),ie=G(()=>v("label",{for:"file-input",class:"file-input-button btn btn-primary m-3"},"從電腦選擇",-1)),re={key:1,class:"modal-body d-flex flex-column align-items-center input-img-area p-0"},ae=["src"],le={key:2,class:"border-start p-2"},ce=$t('<div class="d-flex align-self-center align-middle" data-v-0ce0653b><div class="rounded-circle user-pic" data-v-0ce0653b><img src="'+Bt+'" alt="" data-v-0ce0653b></div><p class="align-middle my-auto ms-2 fw-bold" data-v-0ce0653b>shelly</p></div><textarea type="text" placeholder="撰寫說明文字......" class="postDescriptionInput py-2" data-v-0ce0653b></textarea>',2),ue=[ce],de={__name:"addNewModalComponent",setup(w,{expose:k}){const n=H(null),o=H(null);k({showModal:function(){n.value.show(),e.value="",l.value=!1,u.value.style.maxWidth="750px"}}),Lt(()=>{n.value=new Qt(o.value)});const e=H(null),s=function(E){let d=E.target;if(d.files){let A=new FileReader;A.onload=c=>{e.value=c.target.result},this.image=d.files[0],A.readAsDataURL(d.files[0])}},u=H(null),l=H(!1),y=function(){u.value.style.maxWidth="1000px",l.value=!0};return(E,d)=>(W(),U("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"addNewModal",ref:o},[Gt,v("div",{class:"modal-dialog",ref_key:"modalDialog",ref:u},[v("div",Jt,[v("div",Xt,[Zt,e.value?(W(),U("button",{key:0,class:"btn position-absolute end-0 mx-3 text-primary",onClick:y}," 下一步 ")):ht("",!0)]),v("div",te,[e.value?(W(),U("div",re,[v("img",{src:e.value,alt:"",class:"input-img"},null,8,ae)])):(W(),U("div",ee,[v("div",ne,[se,oe,ie,v("input",{type:"file",id:"file-input",accept:"audio/*,video/*,image/*",onChange:d[0]||(d[0]=A=>s(A))},null,32)])])),l.value?(W(),U("div",le,ue)):ht("",!0)])])],512)],512))}},fe=kt(de,[["__scopeId","data-v-0ce0653b"]]),he={class:"col-md-2 nav-all ps-md-4 overflow-hidden"},_e=v("div",{class:"justify-content-start"},[v("nav",{class:"navbar navbar-light header-nav my-md-3 my-sm-0"},[v("img",{src:Ft,alt:"",class:"logo"})])],-1),pe={class:"d-flex justify-content-center justify-content-md-start"},me={class:"bg-body my-md-3 nav-selection align-items-md-stretch d-flex flex-md-column"},ge={class:"nav-item rounded"},be=v("div",null,[v("i",{class:"bi bi-house-door icon-size"})],-1),Ee=v("div",null,[v("span",{class:"d-none d-lg-inline p-2"},"首頁")],-1),ve={class:"nav-item rounded"},ye=v("div",null,[v("i",{class:"bi bi-plus-square icon-size"})],-1),Ae=v("div",null,[v("span",{class:"d-none d-lg-inline p-2"},"建立")],-1),De={class:"nav-item rounded"},we=v("div",null,[v("i",{class:"bi bi-person-circle icon-size"})],-1),Ne=v("div",null,[v("span",{class:"d-none d-lg-inline p-2"},"個人檔案")],-1),Se={__name:"navComponent",setup(w){const k=H(null),n=function(){k.value.showModal()};return(o,f)=>{const e=Vt("RouterLink");return W(),U(qt,null,[v("div",he,[_e,v("div",pe,[v("nav",me,[v("div",ge,[J(e,{to:"/",class:"mx-4 mx-md-0 text-decoration-none text-secondary d-flex px-2"},{default:et(()=>[be,Ee]),_:1})]),v("div",ve,[J(e,{to:"/",class:"mx-4 mx-md-0 text-decoration-none text-secondary d-flex px-2",onClick:jt(n,["prevent"])},{default:et(()=>[ye,Ae]),_:1})]),v("div",De,[J(e,{to:"/profile",class:"mx-4 mx-md-0 text-decoration-none text-secondary d-flex px-2"},{default:et(()=>[we,Ne]),_:1})])])])]),J(fe,{ref_key:"addNewModal",ref:k},null,512)],64)}}};export{Qt as M,Bt as _,Se as a};
