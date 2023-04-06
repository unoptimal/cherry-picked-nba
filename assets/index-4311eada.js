(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function I(){}function ie(e){return e()}function Z(){return Object.create(null)}function K(e){e.forEach(ie)}function re(e){return typeof e=="function"}function se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let z;function ue(e,t){return z||(z=document.createElement("a")),z.href=t,e===z.href}function fe(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function k(){return g(" ")}function ce(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function U(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function G(e,t){t=""+t,e.data!==t&&(e.data=t)}function me(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let q;function R(e){q=e}function de(){if(!q)throw new Error("Function called outside component initialization");return q}function _e(e){de().$$.on_mount.push(e)}const x=[],ee=[];let H=[];const te=[],he=Promise.resolve();let Y=!1;function be(){Y||(Y=!0,he.then(oe))}function J(e){H.push(e)}const V=new Set;let A=0;function oe(){if(A!==0)return;const e=q;do{try{for(;A<x.length;){const t=x[A];A++,R(t),ye(t.$$)}}catch(t){throw x.length=0,A=0,t}for(R(null),x.length=0,A=0;ee.length;)ee.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];V.has(n)||(V.add(n),n())}H.length=0}while(x.length);for(;te.length;)te.pop()();Y=!1,V.clear(),R(e)}function ye(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}function ge(e){const t=[],n=[];H.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),H=t}const Pe=new Set;function $e(e,t){e&&e.i&&(Pe.delete(e),e.i(t))}function ve(e,t,n,i){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,n),i||J(()=>{const c=e.$$.on_mount.map(ie).filter(re);e.$$.on_destroy?e.$$.on_destroy.push(...c):K(c),e.$$.on_mount=[]}),a.forEach(J)}function we(e,t){const n=e.$$;n.fragment!==null&&(ge(n.after_update),K(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(e,t){e.$$.dirty[0]===-1&&(x.push(e),be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ke(e,t,n,i,r,a,c,P=[-1]){const b=q;R(e);const s=e.$$={fragment:null,ctx:[],props:a,update:I,not_equal:r,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(b?b.$$.context:[])),callbacks:Z(),dirty:P,skip_bound:!1,root:t.target||b.$$.root};c&&c(s.root);let _=!1;if(s.ctx=n?n(e,t.props||{},(h,p,...o)=>{const $=o.length?o[0]:p;return s.ctx&&r(s.ctx[h],s.ctx[h]=$)&&(!s.skip_bound&&s.bound[h]&&s.bound[h]($),_&&Te(e,h)),p}):[],s.update(),_=!0,K(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const h=pe(t.target);s.fragment&&s.fragment.l(h),h.forEach(u)}else s.fragment&&s.fragment.c();t.intro&&$e(e.$$.fragment),ve(e,t.target,t.anchor,t.customElement),oe()}R(b)}class Le{$destroy(){we(this,1),this.$destroy=I}$on(t,n){if(!re(n))return I;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ne(e,t,n){const i=e.slice();return i[3]=t[n],i}function Ee(e){let t;return{c(){t=v("p"),t.textContent="No matching players found."},m(n,i){f(n,t,i)},p:I,d(n){n&&u(t)}}}function Se(e){let t,n,i=e[1].length+"",r,a,c=e[0].length+"",P,b,s,_,h=e[1],p=[];for(let o=0;o<h.length;o+=1)p[o]=le(ne(e,h,o));return{c(){t=v("h2"),n=g("Filtered Players: ("),r=g(i),a=g("/"),P=g(c),b=g(")"),s=k(),_=v("ul");for(let o=0;o<p.length;o+=1)p[o].c()},m(o,$){f(o,t,$),y(t,n),y(t,r),y(t,a),y(t,P),y(t,b),f(o,s,$),f(o,_,$);for(let d=0;d<p.length;d+=1)p[d]&&p[d].m(_,null)},p(o,$){if($&2&&i!==(i=o[1].length+"")&&G(r,i),$&1&&c!==(c=o[0].length+"")&&G(P,c),$&2){h=o[1];let d;for(d=0;d<h.length;d+=1){const L=ne(o,h,d);p[d]?p[d].p(L,$):(p[d]=le(L),p[d].c(),p[d].m(_,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=h.length}},d(o){o&&u(t),o&&u(s),o&&u(_),ae(p,o)}}}function le(e){let t,n,i=e[3].name+"",r,a,c=e[3].stats.GP+"",P,b,s=S(e[3].stats.PTS,1)+"",_,h,p=S(e[3].stats.REB,1)+"",o,$,d=S(e[3].stats.STL,1)+"",L,j,F=S(e[3].stats.FG_PCT*100,1)+"",O,C,M=S(e[3].stats.FG3_PCT*100,1)+"",N,B;return{c(){t=v("li"),n=v("b"),r=g(i),a=g(" - GP: "),P=g(c),b=g(" - PTS: "),_=g(s),h=g(" - REB: "),o=g(p),$=g(" - STL: "),L=g(d),j=g(" - FG%: "),O=g(F),C=g("% - 3P%: "),N=g(M),B=g("%")},m(w,T){f(w,t,T),y(t,n),y(n,r),y(t,a),y(t,P),y(t,b),y(t,_),y(t,h),y(t,o),y(t,$),y(t,L),y(t,j),y(t,O),y(t,C),y(t,N),y(t,B)},p(w,T){T&2&&i!==(i=w[3].name+"")&&G(r,i),T&2&&c!==(c=w[3].stats.GP+"")&&G(P,c),T&2&&s!==(s=S(w[3].stats.PTS,1)+"")&&G(_,s),T&2&&p!==(p=S(w[3].stats.REB,1)+"")&&G(o,p),T&2&&d!==(d=S(w[3].stats.STL,1)+"")&&G(L,d),T&2&&F!==(F=S(w[3].stats.FG_PCT*100,1)+"")&&G(O,F),T&2&&M!==(M=S(w[3].stats.FG3_PCT*100,1)+"")&&G(N,M)},d(w){w&&u(t)}}}function Fe(e){let t,n,i,r,a,c,P,b,s,_,h,p,o,$,d,L,j,F,O,C,M,N,B,w,T,Q,W;function X(l,m){return l[1].length>0?Se:Ee}let D=X(e),E=D(e);return{c(){t=v("h1"),t.textContent="Find your own cherry-picked NBA stats",n=k(),i=v("p"),i.innerHTML='by <a href="https://unoptimal.com/">unoptimal</a>',r=k(),a=v("p"),a.innerHTML="Statistics are a very cool and fun part of sports. Hilariously, though, they can be sometimes be a bit <i>too</i> specific:",c=k(),P=v("img"),s=k(),_=v("p"),_.textContent="I love this graphic so much that I felt inspired to make a simple tool to replicate it's energy.",h=k(),p=v("p"),p.textContent="So I gathered the career statistics of every player in the NBA database (as of April 5th, 2023) and filtered out those with incomplete stats (including those who played before the 3 pointer was introduced).",o=k(),$=v("p"),$.textContent="Now, I hope you enjoy role-playing as a member of your local sports graphic team.",d=k(),L=v("p"),L.innerHTML="<i>Note: some players might still be missing due to rate-limited scraping issues. My bad.</i>",j=k(),F=v("p"),F.innerHTML='Oh, and by the way, the <a href="https://twitter.com/TheMMQBL/status/969017127264051200">13.5/5.9/1.4/49%/30%3point club</a> is now the 12.4/5.7/1.4/49%/30%3point club. Unfortunately, Father Time stops for no man, not even all-time great Thaddeus Young.',O=k(),C=v("form"),C.innerHTML=`<label>GP (Games Played):
    <input type="number" name="gp" value="800"/></label> 

  <label>PTS (Points):
    <input type="number" name="pts" step="0.1" value="12.4"/></label> 

  <label>REB (Rebounds):
    <input type="number" name="reb" step="0.1" value="5.7"/></label> 

  <label>STL (Steals):
    <input type="number" name="stl" step="0.1" value="1.4"/></label> 

  <label>FG% (Field Goal Percentage):
    <input type="number" name="fgPct" step="0.1" value="49"/></label> 

  <label>3P% (3 Point Percentage):
    <input type="number" name="fg3Pct" step="0.1" value="30"/></label> 

  <button type="submit">Find Players</button>`,M=k(),E.c(),N=k(),B=v("i"),B.innerHTML='<p style="text-align:center">View the source data <a href="https://github.com/unoptimal/cherry-picked-nba/blob/master/public/player_data.json">here</a>, and code <a href="https://github.com/unoptimal/cherry-picked-nba">here</a>.</p>',w=k(),T=v("i"),T.innerHTML='<p style="text-align:center">If you find anything silly, please let me know at <a href="https://twitter.com/thatsnotoptimal">@thatsnotoptimal</a>. I would also love to make the filtering options more elaborate in the future, so let me know if you&#39;re interested in this too.</p>',me(i,"text-align","center"),ue(P.src,b="./thaddeus.jpg")||U(P,"src",b),U(P,"alt","thaddeus"),U(P,"width","100%")},m(l,m){f(l,t,m),f(l,n,m),f(l,i,m),f(l,r,m),f(l,a,m),f(l,c,m),f(l,P,m),f(l,s,m),f(l,_,m),f(l,h,m),f(l,p,m),f(l,o,m),f(l,$,m),f(l,d,m),f(l,L,m),f(l,j,m),f(l,F,m),f(l,O,m),f(l,C,m),f(l,M,m),E.m(l,m),f(l,N,m),f(l,B,m),f(l,w,m),f(l,T,m),Q||(W=ce(C,"submit",e[2]),Q=!0)},p(l,[m]){D===(D=X(l))&&E?E.p(l,m):(E.d(1),E=D(l),E&&(E.c(),E.m(N.parentNode,N)))},i:I,o:I,d(l){l&&u(t),l&&u(n),l&&u(i),l&&u(r),l&&u(a),l&&u(c),l&&u(P),l&&u(s),l&&u(_),l&&u(h),l&&u(p),l&&u(o),l&&u($),l&&u(d),l&&u(L),l&&u(j),l&&u(F),l&&u(O),l&&u(C),l&&u(M),E.d(l),l&&u(N),l&&u(B),l&&u(w),l&&u(T),Q=!1,W()}}}function S(e,t){return e.toFixed(t)}function Ne(e,t,n){let i=[],r=[];_e(async()=>{const c=await fetch("./player_data.json");n(0,i=await c.json())});function a(c){c.preventDefault();const P=c.target,b=new FormData(P);n(1,r=i.filter(s=>{const _=s.stats;return _.GP>=b.get("gp")&&_.PTS>=b.get("pts")&&_.REB>=b.get("reb")&&_.STL>=b.get("stl")&&_.FG_PCT>=Number(b.get("fgPct"))*.01&&_.FG3_PCT>=Number(b.get("fg3Pct"))*.01}))}return[i,r,a]}class Ge extends Le{constructor(t){super(),ke(this,t,Ne,Fe,se,{})}}new Ge({target:document.getElementById("app")});