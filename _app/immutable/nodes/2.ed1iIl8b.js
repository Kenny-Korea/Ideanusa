import{s as D,e as X,u as Y,g as Z,f as tt,n as H,i as et,d as st,h as nt,o as it}from"../chunks/scheduler.CKj-VH_E.js";import{S as G,i as B,e as f,c as p,a as O,d,p as c,g as S,o as w,m as C,t as at,b as rt,h as u,j as lt,s as k,v as M,k as x,f as y,w as T,q as R,x as q,z as U,y as I}from"../chunks/index.ChNhXRln.js";function ot(l){let t,e;const s=l[1].default,n=X(s,l,l[0],null);return{c(){t=f("section"),n&&n.c(),this.h()},l(i){t=p(i,"SECTION",{class:!0});var o=O(t);n&&n.l(o),o.forEach(d),this.h()},h(){c(t,"class","svelte-12j41tf")},m(i,o){S(i,t,o),n&&n.m(t,null),e=!0},p(i,[o]){n&&n.p&&(!e||o&1)&&Y(n,s,i,i[0],e?tt(s,i[0],o,null):Z(i[0]),null)},i(i){e||(w(n,i),e=!0)},o(i){C(n,i),e=!1},d(i){i&&d(t),n&&n.d(i)}}}function ct(l,t,e){let{$$slots:s={},$$scope:n}=t;return l.$$set=i=>{"$$scope"in i&&e(0,n=i.$$scope)},[n,s]}class j extends G{constructor(t){super(),B(this,t,ct,ot,D,{})}}function ut(l){let t,e,s;return{c(){t=f("section"),e=f("span"),s=at(l[0]),this.h()},l(n){t=p(n,"SECTION",{class:!0});var i=O(t);e=p(i,"SPAN",{class:!0});var o=O(e);s=rt(o,l[0]),o.forEach(d),i.forEach(d),this.h()},h(){c(e,"class","title svelte-1qguayf"),c(t,"class","svelte-1qguayf")},m(n,i){S(n,t,i),u(t,e),u(e,s)},p(n,[i]){i&1&&lt(s,n[0])},i:H,o:H,d(n){n&&d(t)}}}function dt(l,t,e){let{title:s}=t;return l.$$set=n=>{"title"in n&&e(0,s=n.title)},[s]}class A extends G{constructor(t){super(),B(this,t,dt,ut,D,{title:0})}}function W(l,{delay:t=0,duration:e=400,easing:s=et}={}){const n=+getComputedStyle(l).opacity;return{delay:t,duration:e,easing:s,css:i=>`opacity: ${i*n}`}}function ft(l){let t,e=`<div class="grid-item svelte-trbk8p">Honesty</div> <div class="grid-item svelte-trbk8p">Emphasizing truthfulness, transparency, and integrity in all interactions.</div> <div class="grid-item svelte-trbk8p">Inspiration</div> <div class="grid-item svelte-trbk8p">Motivating and uplifting others through positive actions, words, and example.</div> <div class="grid-item svelte-trbk8p">Purpose-driven</div> <div class="grid-item svelte-trbk8p">Acting with intention and alignment toward a greater goal or mission that transcends
				individual interests.</div>`;return{c(){t=f("div"),t.innerHTML=e,this.h()},l(s){t=p(s,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1xlqjng"&&(t.innerHTML=e),this.h()},h(){c(t,"class","grid-container value svelte-trbk8p")},m(s,n){S(s,t,n)},p:H,d(s){s&&d(t)}}}function pt(l){let t,e="Empowering people to be able to contribute more to the nation";return{c(){t=f("span"),t.textContent=e,this.h()},l(s){t=p(s,"SPAN",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1q4qwsz"&&(t.textContent=e),this.h()},h(){c(t,"class","vision svelte-trbk8p")},m(s,n){S(s,t,n)},p:H,d(s){s&&d(t)}}}function $t(l){let t,e=`<div class="grid-item svelte-trbk8p">1.</div> <div class="grid-item svelte-trbk8p">Creating training materials and consulting services that are always developing, providing
				solutions that are right on target, easy to understand and easy to apply.</div> <div class="grid-item svelte-trbk8p">2.</div> <div class="grid-item svelte-trbk8p">Provide training and consulting services that are right on target and according to needs.</div>`;return{c(){t=f("div"),t.innerHTML=e,this.h()},l(s){t=p(s,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-ky4w45"&&(t.innerHTML=e),this.h()},h(){c(t,"class","grid-container mission svelte-trbk8p")},m(s,n){S(s,t,n)},p:H,d(s){s&&d(t)}}}function gt(l){let t,e,s=`<track src="subtitles_en.vtt" kind="captions" srclang="en" label="English"/><source src="./videos/video.mp4" type="video/mp4"/>
		브라우저가 비디오 태그를 지원하지 않습니다.`,n,i,o,$,L,h,P,g,V,_,N,m,z,b,F,v,E;return i=new A({props:{title:"Our Value"}}),$=new j({props:{$$slots:{default:[ft]},$$scope:{ctx:l}}}),h=new A({props:{title:"Our Vision"}}),g=new j({props:{$$slots:{default:[pt]},$$scope:{ctx:l}}}),_=new A({props:{title:"Our Mission"}}),m=new j({props:{$$slots:{default:[$t]},$$scope:{ctx:l}}}),{c(){t=f("section"),e=f("video"),e.innerHTML=s,n=k(),M(i.$$.fragment),o=k(),M($.$$.fragment),L=k(),M(h.$$.fragment),P=k(),M(g.$$.fragment),V=k(),M(_.$$.fragment),N=k(),M(m.$$.fragment),z=k(),b=f("img"),this.h()},l(a){t=p(a,"SECTION",{style:!0,class:!0});var r=O(t);e=p(r,"VIDEO",{width:!0,height:!0,preload:!0,class:!0,"data-svelte-h":!0}),x(e)!=="svelte-6qzyl5"&&(e.innerHTML=s),n=y(r),T(i.$$.fragment,r),o=y(r),T($.$$.fragment,r),L=y(r),T(h.$$.fragment,r),P=y(r),T(g.$$.fragment,r),V=y(r),T(_.$$.fragment,r),N=y(r),T(m.$$.fragment,r),z=y(r),b=p(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(d),this.h()},h(){c(e,"width","640"),c(e,"height","360"),e.controls=!0,c(e,"preload","auto"),e.autoplay=!0,e.muted=!0,c(e,"class","svelte-trbk8p"),st(b.src,F="./images/promo.png")||c(b,"src",F),c(b,"alt","promo"),c(b,"class","svelte-trbk8p"),R(t,"visibility",l[0]?"visible":"hidden"),c(t,"class","svelte-trbk8p")},m(a,r){S(a,t,r),u(t,e),u(t,n),q(i,t,null),u(t,o),q($,t,null),u(t,L),q(h,t,null),u(t,P),q(g,t,null),u(t,V),q(_,t,null),u(t,N),q(m,t,null),u(t,z),u(t,b),E=!0},p(a,[r]){const J={};r&2&&(J.$$scope={dirty:r,ctx:a}),$.$set(J);const K={};r&2&&(K.$$scope={dirty:r,ctx:a}),g.$set(K);const Q={};r&2&&(Q.$$scope={dirty:r,ctx:a}),m.$set(Q),(!E||r&1)&&R(t,"visibility",a[0]?"visible":"hidden")},i(a){E||(w(i.$$.fragment,a),w($.$$.fragment,a),w(h.$$.fragment,a),w(g.$$.fragment,a),w(_.$$.fragment,a),w(m.$$.fragment,a),a&&nt(()=>{E&&(v||(v=U(t,W,{duration:5e3},!0)),v.run(1))}),E=!0)},o(a){C(i.$$.fragment,a),C($.$$.fragment,a),C(h.$$.fragment,a),C(g.$$.fragment,a),C(_.$$.fragment,a),C(m.$$.fragment,a),a&&(v||(v=U(t,W,{duration:5e3},!1)),v.run(0)),E=!1},d(a){a&&d(t),I(i),I($),I(h),I(g),I(_),I(m),a&&v&&v.end()}}}function mt(l,t,e){let s=!1;return it(()=>{console.log("Page loaded"),e(0,s=!0)}),[s]}class _t extends G{constructor(t){super(),B(this,t,mt,gt,D,{})}}export{_t as component};
