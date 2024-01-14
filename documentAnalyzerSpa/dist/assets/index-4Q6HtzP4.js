(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const _=(e,t)=>e===t,D={equals:_};let G=I;const y=1,b=2,P={owned:null,cleanups:null,context:null,owner:null};var a=null;let T=null,f=null,u=null,g=null,E=0;function H(e,t){const s=f,l=a,n=e.length===0,i=t===void 0?l:t,r=n?P:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=n?e:()=>e(()=>v(()=>C(r)));a=r,f=null;try{return m(o,!0)}finally{f=s,a=l}}function K(e,t){t=t?Object.assign({},D,t):D;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=n=>(typeof n=="function"&&(n=n(s.value)),U(s,n));return[Q.bind(s),l]}function N(e,t,s){const l=W(e,t,!1,y);O(l)}function v(e){if(f===null)return e();const t=f;f=null;try{return e()}finally{f=t}}function Q(){if(this.sources&&this.state)if(this.state===y)O(this);else{const e=u;u=null,m(()=>A(this),!1),u=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function U(e,t,s){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&m(()=>{for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n],r=T&&T.running;r&&T.disposed.has(i),(r?!i.tState:!i.state)&&(i.pure?u.push(i):g.push(i),i.observers&&j(i)),r||(i.state=y)}if(u.length>1e6)throw u=[],new Error},!1)),t}function O(e){if(!e.fn)return;C(e);const t=E;V(e,e.value,t)}function V(e,t,s){let l;const n=a,i=f;f=a=e;try{l=e.fn(t)}catch(r){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(C),e.owned=null),e.updatedAt=s+1,M(r)}finally{f=i,a=n}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?U(e,l):e.value=l,e.updatedAt=s)}function W(e,t,s,l=y,n){const i={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:a?a.context:null,pure:s};return a===null||a!==P&&(a.owned?a.owned.push(i):a.owned=[i]),i}function q(e){if(e.state===0)return;if(e.state===b)return A(e);if(e.suspense&&v(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<E);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===y)O(e);else if(e.state===b){const l=u;u=null,m(()=>A(e,t[0]),!1),u=l}}function m(e,t){if(u)return e();let s=!1;t||(u=[]),g?s=!0:g=[],E++;try{const l=e();return J(s),l}catch(l){s||(g=null),u=null,M(l)}}function J(e){if(u&&(I(u),u=null),e)return;const t=g;g=null,t.length&&m(()=>G(t),!1)}function I(e){for(let t=0;t<e.length;t++)q(e[t])}function A(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];if(l.sources){const n=l.state;n===y?l!==t&&(!l.updatedAt||l.updatedAt<E)&&q(l):n===b&&A(l,t)}}}function j(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=b,s.pure?u.push(s):g.push(s),s.observers&&j(s))}}function C(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),l=e.sourceSlots.pop(),n=s.observers;if(n&&n.length){const i=n.pop(),r=s.observerSlots.pop();l<n.length&&(i.sourceSlots[r]=l,n[l]=i,s.observerSlots[l]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)C(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function X(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function M(e,t=a){throw X(e)}function R(e,t){return v(()=>e(t||{}))}function Y(e,t,s){let l=s.length,n=t.length,i=l,r=0,o=0,c=t[n-1].nextSibling,p=null;for(;r<n||o<i;){if(t[r]===s[o]){r++,o++;continue}for(;t[n-1]===s[i-1];)n--,i--;if(n===r){const h=i<l?o?s[o-1].nextSibling:s[i-o]:c;for(;o<i;)e.insertBefore(s[o++],h)}else if(i===o)for(;r<n;)(!p||!p.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[i-1]&&s[o]===t[n-1]){const h=t[--n].nextSibling;e.insertBefore(s[o++],t[r++].nextSibling),e.insertBefore(s[--i],h),t[n]=s[i]}else{if(!p){p=new Map;let d=o;for(;d<i;)p.set(s[d],d++)}const h=p.get(t[r]);if(h!=null)if(o<h&&h<i){let d=r,x=1,B;for(;++d<n&&d<i&&!((B=p.get(t[d]))==null||B!==h+x);)x++;if(x>h-o){const $=t[r];for(;o<h;)e.insertBefore(s[o++],$)}else e.replaceChild(s[o++],t[r++])}else r++;else t[r++].remove()}}}function Z(e,t,s,l={}){let n;return H(i=>{n=i,t===document?e():k(t,e(),t.firstChild?null:void 0,s)},l.owner),()=>{n(),t.textContent=""}}function z(e,t,s){let l;const n=()=>{const r=document.createElement("template");return r.innerHTML=e,s?r.content.firstChild.firstChild:r.content.firstChild},i=t?()=>v(()=>document.importNode(l||(l=n()),!0)):()=>(l||(l=n())).cloneNode(!0);return i.cloneNode=i,i}function k(e,t,s,l){if(s!==void 0&&!l&&(l=[]),typeof t!="function")return S(e,t,l,s);N(n=>S(e,t(),n,s),l)}function S(e,t,s,l,n){for(;typeof s=="function";)s=s();if(t===s)return s;const i=typeof t,r=l!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),r){let o=s[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),s=w(e,s,l,o)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t;else if(t==null||i==="boolean")s=w(e,s,l);else{if(i==="function")return N(()=>{let o=t();for(;typeof o=="function";)o=o();s=S(e,o,s,l)}),()=>s;if(Array.isArray(t)){const o=[],c=s&&Array.isArray(s);if(L(o,t,s,n))return N(()=>s=S(e,o,s,l,!0)),()=>s;if(o.length===0){if(s=w(e,s,l),r)return s}else c?s.length===0?F(e,o,l):Y(e,s,o):(s&&w(e),F(e,o));s=o}else if(t.nodeType){if(Array.isArray(s)){if(r)return s=w(e,s,l,t);w(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function L(e,t,s,l){let n=!1;for(let i=0,r=t.length;i<r;i++){let o=t[i],c=s&&s[i],p;if(!(o==null||o===!0||o===!1))if((p=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))n=L(e,o,c)||n;else if(p==="function")if(l){for(;typeof o=="function";)o=o();n=L(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||n}else e.push(o),n=!0;else{const h=String(o);c&&c.nodeType===3&&c.data===h?e.push(c):e.push(document.createTextNode(h))}}return n}function F(e,t,s=null){for(let l=0,n=t.length;l<n;l++)e.insertBefore(t[l],s)}function w(e,t,s,l){if(s===void 0)return e.textContent="";const n=l||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(n!==o){const c=o.parentNode===e;!i&&!r?c?e.replaceChild(n,o):e.insertBefore(n,s):c&&o.remove()}else i=!0}}else e.insertBefore(n,s);return[n]}async function ee(e){const t=new FormData;return t.append("file",e),await(await fetch("https://localhost:5198/filemanager/upload",{method:"POST",body:t})).json()}const te=z("<div class=file-uploader>Drop files here !!!");function se(){const e=async t=>{t.preventDefault();let s=t.dataTransfer.files[0];await ee(s)};return(()=>{const t=te();return t.addEventListener("drop",e),t.addEventListener("dragover",s=>s.preventDefault()),t})()}function ne(){return K(!1),R(se,{})}const le=document.getElementById("root");Z(()=>R(ne,{}),le);