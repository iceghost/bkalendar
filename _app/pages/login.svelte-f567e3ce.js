import{S as v,i as w,s as B,a2 as N,l as p,g as _,a3 as O,M as o,d as u,a0 as T,t as m,h as b,e as d,k as U,c as h,m as x,a as k,$ as g,b as $,I as y,O as I}from"../chunks/vendor-b4390f7c.js";import{u as L,a as S,s as j}from"../chunks/gapi-cef2d8ea.js";function q(a){return{c:o,l:o,m:o,p:o,d:o}}function C(a){let e,t;function n(s,r){return r&1&&(e=null),e==null&&(e=!s[0].isSignedIn()),e?M:E}let l=n(a,-1),c=l(a);return{c(){c.c(),t=p()},l(s){c.l(s),t=p()},m(s,r){c.m(s,r),_(s,t,r)},p(s,r){l===(l=n(s,r))&&c?c.p(s,r):(c.d(1),c=l(s),c&&(c.c(),c.m(t.parentNode,t)))},d(s){c.d(s),s&&u(t)}}}function E(a){let e,t,n,l,c,s,r;return{c(){e=d("img"),n=U(),l=d("button"),c=m("\u0111\u0103ng xu\u1EA5t"),this.h()},l(i){e=h(i,"IMG",{src:!0}),n=x(i),l=h(i,"BUTTON",{});var f=k(l);c=b(f,"\u0111\u0103ng xu\u1EA5t"),f.forEach(u),this.h()},h(){g(e.src,t=a[0].getBasicProfile().getImageUrl())||$(e,"src",t)},m(i,f){_(i,e,f),_(i,n,f),_(i,l,f),y(l,c),s||(r=I(l,"click",S),s=!0)},p(i,f){f&1&&!g(e.src,t=i[0].getBasicProfile().getImageUrl())&&$(e,"src",t)},d(i){i&&u(e),i&&u(n),i&&u(l),s=!1,r()}}}function M(a){let e,t,n,l;return{c(){e=d("button"),t=m("\u0111\u0103ng nh\u1EADp")},l(c){e=h(c,"BUTTON",{});var s=k(e);t=b(s,"\u0111\u0103ng nh\u1EADp"),s.forEach(u)},m(c,s){_(c,e,s),y(e,t),n||(l=I(e,"click",j),n=!0)},p:o,d(c){c&&u(e),n=!1,l()}}}function P(a){let e;return{c(){e=m("Loading")},l(t){e=b(t,"Loading")},m(t,n){_(t,e,n)},p:o,d(t){t&&u(e)}}}function G(a){let e,t={ctx:a,current:null,token:null,hasCatch:!1,pending:P,then:C,catch:q};return N(a[2](),t),{c(){e=p(),t.block.c()},l(n){e=p(),t.block.l(n)},m(n,l){_(n,e,l),t.block.m(n,t.anchor=l),t.mount=()=>e.parentNode,t.anchor=e},p(n,[l]){a=n,O(t,a,l)},i:o,o,d(n){n&&u(e),t.block.d(n),t.token=null,t=null}}}function z(a,e,t){let n,l=o,c=()=>(l(),l=T(s,i=>t(0,n=i)),s);a.$$.on_destroy.push(()=>l());let s;async function r(){c(t(1,s=await L()))}return a.$$.update=()=>{a.$$.dirty&1&&console.log(n)},[n,s,r]}class F extends v{constructor(e){super();w(this,e,z,G,B,{})}}export{F as default};
