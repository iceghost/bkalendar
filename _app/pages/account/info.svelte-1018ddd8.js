import{S as q,i as D,s as L,a6 as M,l as p,g as S,a7 as U,M as s,d as _,e as y,t as u,k as E,c as I,a as x,h as d,m as w,b as V,I as i,U as j}from"../../chunks/vendor-8d656f49.js";import{g as z}from"../../chunks/gapi-03ea28c0.js";function N(c,t,l){const e=c.slice();return e[1]=t[l],e}function A(c){return{c:s,l:s,m:s,p:s,d:s}}function B(c){let t,l=c[0].items,e=[];for(let a=0;a<l.length;a+=1)e[a]=P(N(c,l,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=p()},l(a){for(let o=0;o<e.length;o+=1)e[o].l(a);t=p()},m(a,o){for(let n=0;n<e.length;n+=1)e[n].m(a,o);S(a,t,o)},p(a,o){if(o&0){l=a[0].items;let n;for(n=0;n<l.length;n+=1){const r=N(a,l,n);e[n]?e[n].p(r,o):(e[n]=P(r),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=l.length}},d(a){j(e,a),a&&_(t)}}}function P(c){let t,l,e,a=c[1].summary+"",o,n,r,f,C=c[1].id+"",k,b;return{c(){t=y("div"),l=y("p"),e=u("Summary: "),o=u(a),n=E(),r=y("p"),f=u("Id: "),k=u(C),b=E(),this.h()},l(m){t=I(m,"DIV",{class:!0});var h=x(t);l=I(h,"P",{});var g=x(l);e=d(g,"Summary: "),o=d(g,a),g.forEach(_),n=w(h),r=I(h,"P",{});var v=x(r);f=d(v,"Id: "),k=d(v,C),v.forEach(_),b=w(h),h.forEach(_),this.h()},h(){V(t,"class","mt-4 space-y-2")},m(m,h){S(m,t,h),i(t,l),i(l,e),i(l,o),i(t,n),i(t,r),i(r,f),i(r,k),i(t,b)},p:s,d(m){m&&_(t)}}}function F(c){return{c:s,l:s,m:s,p:s,d:s}}function G(c){let t,l={ctx:c,current:null,token:null,hasCatch:!1,pending:F,then:B,catch:A,value:0};return M(z(),l),{c(){t=p(),l.block.c()},l(e){t=p(),l.block.l(e)},m(e,a){S(e,t,a),l.block.m(e,l.anchor=a),l.mount=()=>t.parentNode,l.anchor=t},p(e,[a]){c=e,U(l,c,a)},i:s,o:s,d(e){e&&_(t),l.block.d(e),l.token=null,l=null}}}class K extends q{constructor(t){super();D(this,t,null,G,L,{})}}export{K as default};