const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};W();function b(){}function H(e){return e()}function q(){return Object.create(null)}function C(e){e.forEach(H)}function X(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Y(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function T(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function w(){return z(" ")}function Z(){return z("")}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function s(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let j;function A(e){j=e}const k=[],B=[],O=[],D=[],te=Promise.resolve();let P=!1;function ne(){P||(P=!0,te.then(G))}function S(e){O.push(e)}const L=new Set;let E=0;function G(){const e=j;do{for(;E<k.length;){const t=k[E];E++,A(t),re(t.$$)}for(A(null),k.length=0,E=0;B.length;)B.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];L.has(n)||(L.add(n),n())}O.length=0}while(k.length);for(;D.length;)D.pop()();P=!1,L.clear(),A(e)}function re(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const N=new Set;let oe;function J(e,t){e&&e.i&&(N.delete(e),e.i(t))}function le(e,t,n,r){if(e&&e.o){if(N.has(e))return;N.add(e),oe.c.push(()=>{N.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function ce(e){e&&e.c()}function Q(e,t,n,r){const{fragment:o,on_mount:l,on_destroy:c,after_update:u}=e.$$;o&&o.m(t,n),r||S(()=>{const a=l.map(H).filter(X);c?c.push(...a):C(a),e.$$.on_mount=[]}),u.forEach(S)}function R(e,t){const n=e.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(k.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,r,o,l,c,u=[-1]){const a=j;A(e);const i=e.$$={fragment:null,ctx:null,props:l,update:b,not_equal:o,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:t.target||a.$$.root};c&&c(i.root);let x=!1;if(i.ctx=n?n(e,t.props||{},(m,d,...f)=>{const p=f.length?f[0]:d;return i.ctx&&o(i.ctx[m],i.ctx[m]=p)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](p),x&&ie(e,m)),d}):[],i.update(),x=!0,C(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const m=ee(t.target);i.fragment&&i.fragment.l(m),m.forEach(v)}else i.fragment&&i.fragment.c();t.intro&&J(e.$$.fragment),Q(e,t.target,t.anchor,t.customElement),G()}A(a)}class V{$destroy(){R(this,1),this.$destroy=b}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(e,t,n){const r=e.slice();return r[6]=t[n],r[8]=n,r}function se(e,t,n){const r=e.slice();return r[6]=t[n],r[10]=n,r}function fe(e){let t;return{c(){t=g("div"),y(t,"class","peow bk svelte-6sn43"),s(t,"width","1px"),s(t,"height","25px"),s(t,"transform","rotate(calc(30deg * "+(e[8]+1)+" + 6deg * "+(e[10]+1)+"))")},m(n,r){$(n,t,r)},p:b,d(n){n&&v(t)}}}function I(e){let t,n,r,o=Array(4),l=[];for(let c=0;c<o.length;c+=1)l[c]=fe(se(e,o,c));return{c(){t=g("div"),n=w();for(let c=0;c<l.length;c+=1)l[c].c();r=Z(),y(t,"class","peow bk svelte-6sn43"),s(t,"width","2px"),s(t,"height","40px"),s(t,"transform","rotate(calc(30deg * "+(e[8]+1)+"))")},m(c,u){$(c,t,u),$(c,n,u);for(let a=0;a<l.length;a+=1)l[a].m(c,u);$(c,r,u)},p:b,d(c){c&&v(t),c&&v(n),T(l,c),c&&v(r)}}}function ue(e){let t,n,r,o,l,c,u,a,i,x,m=Array(12),d=[];for(let f=0;f<m.length;f+=1)d[f]=I(F(e,m,f));return{c(){t=g("main"),n=g("div"),r=g("div"),o=w(),l=g("div"),c=w(),u=g("div"),a=w(),i=g("div"),x=w();for(let f=0;f<d.length;f+=1)d[f].c();y(r,"class","chim center circle bt bk svelte-6sn43"),s(r,"width","40px"),s(r,"height","40px"),y(l,"class","chim hour bt bk svelte-6sn43"),s(l,"width","15px"),s(l,"height","100px"),s(l,"transform","rotate(calc(30deg * "+e[0]+"))"),y(u,"class","chim hour bt svelte-6sn43"),s(u,"background-color","#00f"),s(u,"width","8px"),s(u,"height","130px"),s(u,"bottom","50%"),s(u,"transform","rotate(calc(calc(6deg * "+e[1]+")))"),y(i,"class","chim second bt svelte-6sn43"),s(i,"background-color","red"),s(i,"width","4px"),s(i,"height","160px"),s(i,"transform","rotate(calc(0.006deg * "+e[3]+" + 6deg * "+e[2]+"))"),y(n,"class","container svelte-6sn43")},m(f,p){$(f,t,p),_(t,n),_(n,r),_(n,o),_(n,l),_(n,c),_(n,u),_(n,a),_(n,i),_(n,x);for(let h=0;h<d.length;h+=1)d[h].m(n,null)},p(f,[p]){if(p&1&&s(l,"transform","rotate(calc(30deg * "+f[0]+"))"),p&2&&s(u,"transform","rotate(calc(calc(6deg * "+f[1]+")))"),p&12&&s(i,"transform","rotate(calc(0.006deg * "+f[3]+" + 6deg * "+f[2]+"))"),p&0){m=Array(12);let h;for(h=0;h<m.length;h+=1){const M=F(f,m,h);d[h]?d[h].p(M,p):(d[h]=I(M),d[h].c(),d[h].m(n,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=m.length}},i:b,o:b,d(f){f&&v(t),T(d,f)}}}function ae(e,t,n){let r=new Date,o,l,c,u;const a=()=>{n(4,r=new Date),requestAnimationFrame(a)};return a(),e.$$.update=()=>{e.$$.dirty&16&&(n(0,o=r.getHours()),n(1,l=r.getMinutes()),n(2,c=r.getSeconds()),n(3,u=r.getMilliseconds()))},[o,l,c,u,r]}class de extends V{constructor(t){super(),U(this,t,ae,ue,K,{})}}function he(e){let t,n,r;return n=new de({}),{c(){t=g("main"),ce(n.$$.fragment),y(t,"class","svelte-1vlrom")},m(o,l){$(o,t,l),Q(n,t,null),r=!0},p:b,i(o){r||(J(n.$$.fragment,o),r=!0)},o(o){le(n.$$.fragment,o),r=!1},d(o){o&&v(t),R(n)}}}class me extends V{constructor(t){super(),U(this,t,null,he,K,{})}}new me({target:document.getElementById("app")});
