var cg=Object.defineProperty;var ug=(r,e,t)=>e in r?cg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Fe=(r,e,t)=>ug(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function $i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ka={duration:.5,overwrite:!1,delay:0},ju,mn,Lt,pi=1e8,Et=1/pi,zc=Math.PI*2,fg=zc/4,hg=0,Gd=Math.sqrt,dg=Math.cos,pg=Math.sin,un=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},or=function(e){return typeof e=="number"},ef=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},kn=function(e){return e!==!1},tf=function(){return typeof window<"u"},fo=function(e){return Ht(e)||un(e)},Vd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,mg=/random\([^)]+\)/g,gg=/,\s*/g,Kf=/(?:-?\.?\d|\.)+/gi,Wd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xd=/[+-]=-?[.\d]+/,_g=/[^,'"\[\]\s]+/gi,vg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Ri,kc,nf,si={},dl={},Yd,qd=function(e){return(dl=$s(e,si))&&Yn},rf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ha=function(e,t){return!t&&console.warn(e)},$d=function(e,t){return e&&(si[e]=t)&&dl&&(dl[e]=t)||si},Ga=function(){return 0},xg={suppressEvents:!0,isStart:!0,kill:!1},Jo={suppressEvents:!0,kill:!1},Sg={suppressEvents:!0},sf={},Ar=[],Hc={},Kd,jn={},jl={},Zf=30,Qo=[],af="",of=function(e){var t=e[0],n,i;if(zi(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Qo.length;i--&&!Qo[i].targetTest(t););n=Qo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new _p(e[i],n)))||e.splice(i,1);return e},Qr=function(e){return e._gsap||of(mi(e))[0]._gsap},Zd=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():ef(n)&&e.getAttribute&&e.getAttribute(t)||n},Hn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},zs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Mg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},pl=function(){var e=Ar.length,t=Ar.slice(0),n,i;for(Hc={},Ar.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},lf=function(e){return!!(e._initted||e._startAt||e.add)},Jd=function(e,t,n,i){Ar.length&&!mn&&pl(),e.render(t,n,!!(mn&&t<0&&lf(e))),Ar.length&&!mn&&pl()},Qd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(_g).length<2?t:un(e)?e.trim():e},jd=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},$s=function(e,t){for(var n in t)e[n]=t[n];return e},Jf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ml=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wa=function(e){var t=e.parent||Nt,n=e.keyframes?yg(bn(e.keyframes)):ai;if(kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Eg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ep=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},zl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Tg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gc=function(e,t,n,i){return e._startAt&&(mn?e._startAt.revert(Jo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},bg=function r(e){return!e||e._ts&&r(e.parent)},Qf=function(e){return e._repeat?Ks(e._tTime,e=e.duration()+e._rDelay)*e:0},Ks=function(e,t){var n=Math.floor(e=It(e/t));return e&&n===e?n-1:n},gl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kl=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Hl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=It(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kl(e),n._dirty||jr(n,e)),e},tp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=gl(e.rawTime(),t),(!t._dur||io(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Li=function(e,t,n,i){return t.parent&&Lr(t),t._start=It((or(n)?n:!n&&_l(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Nt?ui(e,n,t):e._time)+t._delay),t._end=It(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ep(e,t,"_first","_last",e._sort?"_start":0),_l(t)||(e._recent=t),i||tp(e,t),e._ts<0&&Hl(e,e._tTime),e},np=function(e,t){return(si.ScrollTrigger||rf("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},ip=function(e,t,n,i,s){if(uf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Kd!==ti.frame)return Ar.push(e),e._lazy=[s,i],1},wg=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},_l=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ag=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&wg(e)&&!(!e._initted&&_l(e))||(e._ts<0||e._dp._ts<0)&&!_l(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=io(0,e._tDur,t),u=Ks(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ks(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||mn||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&ip(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Gc(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Lr(e,1),!n&&!mn&&(ni(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Rg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zs=function(e,t,n,i){var s=e._repeat,a=It(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:It(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Hl(e,e._tTime=e._tDur*o),e.parent&&kl(e),n||jr(e.parent,e),e},jf=function(e){return e instanceof On?jr(e):Zs(e,e._dur)},Cg={_start:0,endTime:Ga,totalDuration:Ga},ui=function r(e,t,n){var i=e.labels,s=e._recent||Cg,a=e.duration()>=pi?s.endTime(!1):e._dur,o,l,c;return un(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Aa=function(e,t,n){var i=or(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;a.immediateRender=kn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Jt(t[0],a,t[s+1])},Fr=function(e,t){return e||e===0?t(e):t},io=function(e,t,n){return n<e?e:n>t?t:n},En=function(e,t){return!un(e)||!(t=vg.exec(e))?"":t[1]},Pg=function(e,t,n){return Fr(n,function(i){return io(e,t,i)})},Vc=[].slice,rp=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==Ri},Lg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return un(i)&&!t||rp(i,1)?(s=n).push.apply(s,mi(i)):n.push(i)})||n},mi=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):un(e)&&!n&&(kc||!Js())?Vc.call((t||nf).querySelectorAll(e),0):bn(e)?Lg(e,n):rp(e)?Vc.call(e,0):e?[e]:[]},Wc=function(e){return e=mi(e)[0]||Ha("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?Ha("Invalid scope")||nf.createElement("div"):e)}},sp=function(e){return e.sort(function(){return .5-Math.random()})},ap=function(e){if(Ht(e))return e;var t=zi(e)?e:{each:e},n=es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return un(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,m){var v=(m||t).length,p=a[v],g,x,b,S,T,w,_,E,P;if(!p){if(P=t.grid==="auto"?0:(t.grid||[1,pi])[1],!P){for(_=-pi;_<(_=m[P++].getBoundingClientRect().left)&&P<v;);P<v&&P--}for(p=a[v]=[],g=l?Math.min(P,v)*u-.5:i%P,x=P===pi?0:l?v*d/P-.5:i/P|0,_=0,E=pi,w=0;w<v;w++)b=w%P-g,S=x-(w/P|0),p[w]=T=c?Math.abs(c==="y"?S:b):Gd(b*b+S*S),T>_&&(_=T),T<E&&(E=T);i==="random"&&sp(p),p.max=_-E,p.min=E,p.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(P>v?v-1:c?c==="y"?v/P:P:Math.max(P,v/P))||0)*(i==="edges"?-1:1),p.b=v<0?s-v:s,p.u=En(t.amount||t.each)||0,n=n&&v<0?Wg(n):n}return v=(p[f]-p.min)/p.max||0,It(p.b+(n?n(v):v)*p.v)+p.u}},Xc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=It(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(or(n)?0:En(n))}},op=function(e,t){var n=bn(e),i,s;return!n&&zi(e)&&(i=n=e.radius||pi,e.values?(e=mi(e.values),(s=!or(e[0]))&&(i*=i)):e=Xc(e.increment)),Fr(t,n?Ht(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=pi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,s||u===a||or(a)?u:u+En(a)}:Xc(e))},lp=function(e,t,n,i){return Fr(bn(e)?!t:n===!0?!!(n=0):!i,function(){return bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Dg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Ig=function(e,t){return function(n){return e(parseFloat(n))+(t||En(n))}},Ng=function(e,t,n){return up(e,t,0,1,n)},cp=function(e,t,n){return Fr(n,function(i){return e[~~t(i)]})},Ug=function r(e,t,n){var i=t-e;return bn(e)?cp(e,r(0,e.length),t):Fr(n,function(s){return(i+(s-e)%i)%i+e})},Fg=function r(e,t,n){var i=t-e,s=i*2;return bn(e)?cp(e,r(0,e.length-1),t):Fr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Va=function(e){return e.replace(mg,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(gg);return lp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},up=function(e,t,n,i,s){var a=t-e,o=i-n;return Fr(s,function(l){return n+((l-e)/a*o||0)})},Og=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=un(e),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(m){m*=d;var v=Math.min(f,~~m);return u[v](m-v)},n=t}else i||(e=$s(bn(e)?[]:{},e));if(!u){for(l in t)cf.call(o,e,l,"get",t[l]);s=function(m){return df(m,o)||(a?e.p:e)}}}return Fr(n,s)},eh=function(e,t,n){var i=e.labels,s=pi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ni=function(e,t,n){var i=e.vars,s=i[t],a=Lt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ar.length&&pl(),o&&(Lt=o),u=l?s.apply(c,l):s.call(c),Lt=a,u},_a=function(e){return Lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&ni(e,"onInterrupt"),e},Os,fp=[],hp=function(e){if(e)if(e=!e.name&&e.default||e,tf()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ga,render:df,add:cf,kill:e_,modifier:jg,rawVars:0},a={targetTest:0,get:0,getSetter:hf,aliases:{},register:0};if(Js(),e!==i){if(jn[t])return;ai(i,ai(ml(e,s),a)),$s(i.prototype,$s(s,ml(e,a))),jn[i.prop=t]=i,e.targetTest&&(Qo.push(i),sf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$d(t,i),e.register&&e.register(Yn,i,Gn)}else fp.push(e)},At=255,va={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},ec=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},dp=function(e,t,n){var i=e?or(e)?[e>>16,e>>8&At,e&At]:0:va.black,s,a,o,l,c,u,d,f,h,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),va[e])i=va[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Kf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ec(l+1/3,s,a),i[1]=ec(l,s,a),i[2]=ec(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Wd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Kf)||va.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/At,a=i[1]/At,o=i[2]/At,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},pp=function(e){var t=[],n=[],i=-1;return e.split(Rr).forEach(function(s){var a=s.match(Fs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},th=function(e,t,n){var i="",s=(e+i).match(Rr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=dp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=pp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Rr,"1").split(Fs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Rr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Rr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in va)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Bg=/hsl[a]?\(/,mp=function(e){var t=e.join(" "),n;if(Rr.lastIndex=0,Rr.test(t))return n=Bg.test(t),e[1]=th(e[1],n),e[0]=th(e[0],n,pp(e[1])),!0},Wa,ti=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,m=function v(p){var g=r()-i,x=p===!0,b,S,T,w;if((g>e||g<0)&&(n+=g-t),i+=g,T=i-n,b=T-a,(b>0||x)&&(w=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,a+=b+(b>=s?0:s-b),S=1),x||(l=c(v)),S)for(h=0;h<o.length;h++)o[h](T,f,w,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Yd&&(!kc&&tf()&&(Ri=kc=window,nf=Ri.document||{},si.gsap=Yn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Yn.version),qd(dl||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),fp.forEach(hp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Wa=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Wa=0,c=Ga},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,g,x){var b=g?function(S,T,w,_){p(S,T,w,_),d.remove(b)}:p;return d.remove(p),o[x?"unshift":"push"](b),Js(),b},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&h>=g&&h--},_listeners:o},d})(),Js=function(){return!Wa&&ti.wake()},lt={},zg=/^[\d.\-M][\d.\-,\s]/,kg=/["']/g,Hg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(kg,"").trim():+c,i=l.substr(o+1).trim();return t},Gg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Vg=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Hg(t[1])]:Gg(e).split(",").map(Qd)):lt._CE&&zg.test(e)?lt._CE("",e):n},Wg=function(e){return function(t){return 1-e(1-t)}},es=function(e,t){return e&&(Ht(e)?e:lt[e]||Vg(e))||t},hs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Hn(e,function(o){lt[o]=si[o]=s,lt[a=o.toLowerCase()]=n;for(var l in s)lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[o+"."+l]=s[l]}),s},gp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},tc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/zc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*pg((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:gp(o);return s=zc/s,l.config=function(c,u){return r(e,c,u)},l},nc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:gp(n);return i.config=function(s){return r(e,s)},i};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;hs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;hs("Elastic",tc("in"),tc("out"),tc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};hs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);hs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});hs("Circ",function(r){return-(Gd(1-r*r)-1)});hs("Sine",function(r){return r===1?1:-dg(r*fg)+1});hs("Back",nc("in"),nc("out"),nc());lt.SteppedEase=lt.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Et;return function(o){return((i*io(0,a,o)|0)+s)*n}}};ka.ease=lt["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return af+=r+","+r+"Params,"});var _p=function(e,t){this.id=hg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Zd,this.set=t?t.getSetter:hf},Xa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zs(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),Wa||ti.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hl(this,n),!s._dp||s.parent||tp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Qf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Qf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ks(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?gl(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(io(-Math.abs(this._delay),o,s),i!==!1),kl(this),Tg(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Js(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Et,a;if(s)for(this._tTime-=Et,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+Et){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=It(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Li(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Sg);var i=mn;return mn=n,lf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,jf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ui(this,n),kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kn(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ht(n)?n:jd,l=function(){var u=i.then;i.then=null,s&&s(),Ht(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){_a(this)},r})();ai(Xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var On=(function(r){Hd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),Nt&&Li(n.parent||Nt,$i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&np($i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Aa(0,arguments,this),this},t.from=function(i,s,a){return Aa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Aa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Jt(i,s,ui(this,a),1),this},t.call=function(i,s,a){return Li(this,Jt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Jt(i,a,ui(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,wa(a).immediateRender=kn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,wa(o).immediateRender=kn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:It(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,m,v,p,g,x,b,S,T,w,_;if(this!==Nt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,b=this._ts,g=!b,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=It(u%p),u===l?(v=this._repeat,f=c):(T=It(u/p),v=~~T,v&&v===T&&(f=c,v--),f>c&&(f=c)),T=Ks(this._tTime,p),!o&&this._tTime&&T!==v&&this._tTime-T*p-this._dur<=0&&(T=v),w&&v&1&&(f=c-f,_=1),v!==T&&!this._lock){var E=w&&T&1,P=E===(w&&v&1);if(v<T&&(E=!E),o=E?0:u%c?c:u,this._lock=1,this.render(o||(_?0:It(v*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,T=v),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=E?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Rg(this,It(o),It(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!T&&(ni(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=-Et);break}}h=m}else{h=this._last;for(var R=i<0?i:f;h;){if(m=h._prev,(h._act||R<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,s,a||mn&&lf(h)),f!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=R?-Et:Et);break}}h=m}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-Et)._zTime=f>=o?1:-1,this._ts))return this._start=S,kl(this),this.render(i,s,a);this._onUpdate&&!s&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Lr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ni(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(or(s)||(s=ui(this,s,i)),!(i instanceof Xa)){if(bn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(un(i))return this.addLabel(i,s);if(Ht(i))i=Jt.delayedCall(0,i);else return this}return this!==i?Li(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Jt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return un(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(i.parent===this&&zl(this,i),i===this._recent&&(this._recent=this._last),jr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ui(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Jt.delayedCall(0,s||Ga,a);return o.data="isPause",this._hasPause=1,Li(this,o,ui(this,i))},t.removePause=function(i){var s=this._first;for(i=ui(this,i);s;)s._start===i&&s.data==="isPause"&&Lr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Mr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=mi(i),l=this._first,c=or(s),u;l;)l instanceof Jt?Mg(l._targets,o)&&(c?(!Mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ui(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,m=Jt.to(a,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Et,onStart:function(){if(a.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&Zs(m,p,0,1).render(m._time,!0,!0),h=1}u&&u.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ai({startAt:{time:ui(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),eh(this,ui(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),eh(this,ui(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=It(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return jr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),jr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=pi,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Li(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=It(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Zs(a,a===Nt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Nt._ts&&(Jd(Nt,gl(i,Nt)),Kd=ti.frame),ti.frame>=Zf){Zf+=ri.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&ri.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},e})(Xa);ai(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xg=function(e,t,n,i,s,a,o){var l=new Gn(this._pt,e,t,0,1,yp,null,s),c=0,u=0,d,f,h,m,v,p,g,x;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Va(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),f=n.match(Ql)||[];d=Ql.exec(i);)m=d[0],v=i.substring(c,d.index),h?h=(h+1)%5:v.substr(-5)==="rgba("&&(h=1),m!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:p,c:m.charAt(1)==="="?zs(p,m)-p:parseFloat(m)-p,m:h&&h<4?Math.round:0},c=Ql.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Xd.test(i)||g)&&(l.e=0),this._pt=l,l},cf=function(e,t,n,i,s,a,o,l,c,u){Ht(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:Ht(d)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Ht(d)?c?Zg:Sp:ff,m;if(un(i)&&(~i.indexOf("random(")&&(i=Va(i)),i.charAt(1)==="="&&(m=zs(f,i)+(En(f)||0),(m||m===0)&&(i=m))),!u||f!==i||Yc)return!isNaN(f*i)&&i!==""?(m=new Gn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?Qg:Mp,0,h),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&rf(t,i),Xg.call(this,e,t,f,i,h,l||ri.stringFilter,c))},Yg=function(e,t,n,i,s){if(Ht(e)&&(e=Ra(e,s,t,n,i)),!zi(e)||e.style&&e.nodeType||bn(e)||Vd(e))return un(e)?Ra(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ra(e[o],s,t,n,i);return a},vp=function(e,t,n,i,s,a){var o,l,c,u;if(jn[e]&&(o=new jn[e]).init(s,o.rawVars?t[e]:Yg(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Gn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Os))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Mr,Yc,uf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,m=e._dur,v=e._startAt,p=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:p,b=e._overwrite==="auto"&&!ju,S=e.timeline,T=i.easeReverse||d,w,_,E,P,R,I,N,U,L,z,Y,O,j;if(S&&(!f||!s)&&(s="none"),e._ease=es(s,ka.ease),e._rEase=T&&(es(T)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||f&&!i.stagger){if(U=p[0]?Qr(p[0]).harness:0,O=U&&i[U.prop],w=ml(i,sf),v&&(v._zTime<0&&v.progress(1),t<0&&u&&o&&!h?v.render(-1,!0):v.revert(u&&m?Jo:xg),v._lazy=0),a){if(Lr(e._startAt=Jt.set(p,ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!v&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!o&&!h)&&e._startAt.revert(Jo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!v){if(t&&(o=!1),E=ai({overwrite:!1,data:"isFromStart",lazy:o&&!v&&kn(l),immediateRender:o,stagger:0,parent:g},w),O&&(E[U.prop]=O),Lr(e._startAt=Jt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(Jo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&kn(l)||l&&!m,_=0;_<p.length;_++){if(R=p[_],N=R._gsap||of(p)[_]._gsap,e._ptLookup[_]=z={},Hc[N.id]&&Ar.length&&pl(),Y=x===p?_:x.indexOf(R),U&&(L=new U).init(R,O||w,e,Y,x)!==!1&&(e._pt=P=new Gn(e._pt,R,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(V){z[V]=P}),L.priority&&(I=1)),!U||O)for(E in w)jn[E]&&(L=vp(E,w,e,Y,R,x))?L.priority&&(I=1):z[E]=P=cf.call(e,R,E,"get",w[E],Y,x,0,i.stringFilter);e._op&&e._op[_]&&e.kill(R,e._op[_]),b&&e._pt&&(Mr=e,Nt.killTweensOf(R,z,e.globalTime(t)),j=!e.parent,Mr=0),e._pt&&l&&(Hc[N.id]=1)}I&&Ep(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&S.render(pi,!0,!0)},qg=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Yc=1,e.vars[t]="+=0",uf(e,o),Yc=0,l?Ha(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Vt(n)+En(d.e)),d.b&&(d.b=u.s+En(d.b))},$g=function(e,t){var n=e[0]?Qr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=$s({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Kg=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(bn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ra=function(e,t,n,i,s){return Ht(e)?e.call(t,n,i,s):un(e)&&~e.indexOf("random(")?Va(e):e},vl=af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",xp={};Hn(vl+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return xp[r]=1});vl=vl.split(",");var Jt=(function(r){Hd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:wa(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,m=l.keyframes,v=l.defaults,p=l.scrollTrigger,g=i.parent||Nt,x=(bn(n)||Vd(n)?or(n[0]):"length"in i)?[n]:mi(n),b,S,T,w,_,E,P,R;if(o._targets=x.length?of(x):Ha("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,m||f||fo(c)||fo(u)){i=o.vars;var I=i.easeReverse||i.yoyoEase;if(b=o.timeline=new On({data:"nested",defaults:v||{},targets:g&&g.data==="nested"?g.vars.targets:x}),b.kill(),b.parent=b._dp=$i(o),b._start=0,f||fo(c)||fo(u)){if(w=x.length,P=f&&ap(f),zi(f))for(_ in f)~vl.indexOf(_)&&(R||(R={}),R[_]=f[_]);for(S=0;S<w;S++)T=ml(i,xp),T.stagger=0,I&&(T.easeReverse=I),R&&$s(T,R),E=x[S],T.duration=+Ra(c,$i(o),S,E,x),T.delay=(+Ra(u,$i(o),S,E,x)||0)-o._delay,!f&&w===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),b.to(E,T,P?P(S,E,x):0),b._ease=lt.none;b.duration()?c=u=0:o.timeline=0}else if(m){wa(ai(b.vars.defaults,{ease:"none"})),b._ease=es(m.ease||i.ease||"none");var N=0,U,L,z;if(bn(m))m.forEach(function(Y){return b.to(x,Y,">")}),b.duration();else{T={};for(_ in m)_==="ease"||_==="easeEach"||Kg(_,m[_],T,m.easeEach);for(_ in T)for(U=T[_].sort(function(Y,O){return Y.t-O.t}),N=0,S=0;S<U.length;S++)L=U[S],z={ease:L.e,duration:(L.t-(S?U[S-1].t:0))/100*c},z[_]=L.v,b.to(x,z,N),N+=z.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return h===!0&&!ju&&(Mr=$i(o),Nt.killTweensOf(x),Mr=0),Li(g,$i(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!m&&o._start===It(g._time)&&kn(d)&&bg($i(o))&&g.data!=="nested")&&(o._tTime=-Et,o.render(Math.max(0,-u)||0)),p&&np($i(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Et&&!u?l:i<Et?0:i,f,h,m,v,p,g,x,b;if(!c)Ag(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,b=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+i,s,a);if(f=It(d%v),d===l?(m=this._repeat,f=c):(p=It(d/v),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=Ks(this._tTime,v),f===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==v&&this._initted&&(this._lock=a=1,this.render(It(v*m),!0).invalidate()._lock=0)}if(!this._initted){if(ip(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var T=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(ni(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Gc(this,i,s,a),ni(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&ni(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Gc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Lr(this,1),!s&&!(u&&!o)&&(d||o||g)&&(ni(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Wa||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||uf(this,c),u=this._ease(c/this._dur),qg(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Hl(this,0),this.parent||ep(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Mr&&Mr.vars.overwrite!==!0)._first||_a(this),this.parent&&a!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?mi(i):o,c=this._ptLookup,u=this._pt,d,f,h,m,v,p,g;if((!s||s==="all")&&Eg(o,l))return s==="all"&&(this._pt=0),_a(this);for(d=this._op=this._op||[],s!=="all"&&(un(s)&&(v={},Hn(s,function(x){return v[x]=1}),s=v),s=$g(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],s==="all"?(d[g]=s,m=f,h={}):(h=d[g]=d[g]||{},m=s);for(v in m)p=f&&f[v],p&&((!("kill"in p.d)||p.d.kill(v)===!0)&&zl(this,p,"_pt"),delete f[v]),h!=="all"&&(h[v]=1)}return this._initted&&!this._pt&&u&&_a(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Aa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Aa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Nt.killTweensOf(i,s,a)},e})(Xa);ai(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(r){Jt[r]=function(){var e=new On,t=Vc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ff=function(e,t,n){return e[t]=n},Sp=function(e,t,n){return e[t](n)},Zg=function(e,t,n,i){return e[t](i.fp,n)},Jg=function(e,t,n){return e.setAttribute(t,n)},hf=function(e,t){return Ht(e[t])?Sp:ef(e[t])&&e.setAttribute?Jg:ff},Mp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Qg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},df=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jg=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},e_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?zl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},t_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ep=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Gn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Mp,this.d=l||this,this.set=c||ff,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=t_,this.m=n,this.mt=s,this.tween=i},r})();Hn(af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return sf[r]=1});si.TweenMax=si.TweenLite=Jt;si.TimelineLite=si.TimelineMax=On;Nt=new On({sortChildren:!1,defaults:ka,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=mp;var ts=[],jo={},n_=[],nh=0,i_=0,ic=function(e){return(jo[e]||n_).map(function(t){return t()})},Ya=function(){var e=Date.now(),t=[];e-nh>2&&(ic("matchMediaInit"),ts.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ri.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ic("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),nh=e,ic("matchMedia"))},Tp=(function(){function r(t,n){this.selector=n&&Wc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=i_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ht(n)&&(s=i,i=n,n=Ht);var a=this,o=function(){var c=Lt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Wc(s)),Lt=a,d=i.apply(a,arguments),Ht(d)&&a._r.push(d),Lt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ht?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Jt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=ts.length;a--;)ts[a].id===this.id&&ts.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Ya):o.removeEventListener("change",Ya)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),r_=(function(){function r(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){zi(n)||(n={matches:n});var a=new Tp(0,s||this.scope),o=a.conditions={},l,c,u;Lt&&!a.selector&&(a.selector=Lt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ri.matchMedia(n[c]),l&&(ts.indexOf(a)<0&&ts.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ya):l.addEventListener("change",Ya),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),xl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return hp(i)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){un(e)&&(e=mi(e)[0]);var s=Qr(e||{}).get,a=n?jd:Qd;return n==="native"&&(n=""),e&&(t?a((jn[t]&&jn[t].get||s)(e,t,n,i)):function(o,l,c){return a((jn[o]&&jn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var i=e.map(function(u){return Yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=jn[t],o=Qr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Os._pt=0,d.init(e,n?u+n:u,Os,0,[e]),d.render(1,d),Os._pt&&df(1,Os)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Yn.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,ka.ease)),Jf(ka,e||{})},config:function(e){return Jf(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!jn[o]&&!si[o]&&Ha(t+" effect requires "+o+" plugin.")}),jl[t]=function(o,l,c){return n(mi(o),ai(l||{},s),c)},a&&(On.prototype[t]=function(o,l,c){return this.add(jl[t](o,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=es(t)},parseEase:function(e,t){return arguments.length?es(e,t):lt},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),i,s;for(n.smoothChildTiming=kn(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Jt&&i.vars.onComplete===i._targets[0]))&&Li(n,i,i._start-i._delay),i=s;return Li(Nt,n,0),n},context:function(e,t){return e?new Tp(e,t):Lt},matchMedia:function(e){return new r_(e)},matchMediaRefresh:function(){return ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ya()},addEventListener:function(e,t){var n=jo[e]||(jo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=jo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ug,wrapYoyo:Fg,distribute:ap,random:lp,snap:op,normalize:Ng,getUnit:En,clamp:Pg,splitColor:dp,toArray:mi,selector:Wc,mapRange:up,pipe:Dg,unitize:Ig,interpolate:Og,shuffle:sp},install:qd,effects:jl,ticker:ti,updateRoot:On.updateRoot,plugins:jn,globalTimeline:Nt,core:{PropTween:Gn,globals:$d,Tween:Jt,Timeline:On,Animation:Xa,getCache:Qr,_removeLinkedListItem:zl,reverting:function(){return mn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return ju=e}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return xl[r]=Jt[r]});ti.add(On.updateRoot);Os=xl.to({},{duration:0});var s_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},a_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=s_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},rc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},Hn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}a_(o,s)}}}},Yn=xl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},rc("roundProps",Xc),rc("modifiers"),rc("snap",op))||xl;Jt.version=On.version=Yn.version="3.15.1";Yd=1;tf()&&Js();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ih,yr,ks,pf,$r,rh,mf,o_=function(){return typeof window<"u"},lr={},Xr=180/Math.PI,Hs=Math.PI/180,ms=Math.atan2,sh=1e8,gf=/([A-Z])/g,l_=/(left|right|width|margin|padding|x)/i,c_=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},u_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},f_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},h_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},d_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},bp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},p_=function(e,t,n){return e.style[t]=n},m_=function(e,t,n){return e.style.setProperty(t,n)},g_=function(e,t,n){return e._gsap[t]=n},__=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},v_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},x_=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ut="transform",Vn=Ut+"Origin",S_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in lr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ki(i,o)}):this.tfm[e]=a.x?a[e]:Ki(i,e),e===Vn&&(this.tfm.zOrigin=a.zOrigin);else return Di.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},Ap=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},M_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mf(),(!s||!s.isStart)&&!n[Ut]&&(Ap(n),i.zOrigin&&n[Vn]&&(n[Vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Rp=function(e,t){var n={target:e,props:[],revert:M_,save:S_};return e._gsap||Yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Cp,$c=function(e,t){var n=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return n&&n.style?n:yr.createElement(e)},ii=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Qs(t)||t,1)||""},ah="O,Moz,ms,Ms,Webkit".split(","),Qs=function(e,t,n){var i=t||$r,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ah[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ah[a]:"")+e},Kc=function(){o_()&&window.document&&(ih=window,yr=ih.document,ks=yr.documentElement,$r=$c("div")||{style:{}},$c("div"),Ut=Qs(Ut),Vn=Ut+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cp=!!Qs("perspective"),mf=Yn.core.reverting,pf=1)},oh=function(e){var t=e.ownerSVGElement,n=$c("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ks.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ks.removeChild(n),s},lh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Pp=function(e){var t,n;try{t=e.getBBox()}catch{t=oh(e),n=1}return t&&(t.width||t.height)||n||(t=oh(e)),t&&!t.width&&!t.x&&!t.y?{x:+lh(e,["x","cx","x1"])||0,y:+lh(e,["y","cy","y1"])||0,width:0,height:0}:t},Lp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pp(e))},Dr=function(e,t){if(t){var n=e.style,i;t in lr&&t!==Vn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(gf,"-$1").toLowerCase())):n.removeAttribute(t)}},Er=function(e,t,n,i,s,a){var o=new Gn(e._pt,t,n,0,1,a?wp:bp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},ch={deg:1,rad:1,turn:1},y_={grid:1,flex:1},Ir=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=$r.style,l=l_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",m,v,p,g;if(i===a||!s||ch[i]||ch[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&Lp(e),(h||a==="%")&&(lr[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],Vt(h?s/m*d:s/100*m);if(o[l?"width":"height"]=d+(f?a:i),v=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===yr||!v.appendChild)&&(v=yr.body),p=v._gsap,p&&h&&p.width&&l&&p.time===ti.time&&!p.uncache)return Vt(s/p.width*d);if(h&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+i,m=e[u],x?e.style[t]=x:Dr(e,t)}else(h||a==="%")&&!y_[ii(v,"display")]&&(o.position=ii(e,"position")),v===e&&(o.position="static"),v.appendChild($r),m=$r[u],v.removeChild($r),o.position="absolute";return l&&h&&(p=Qr(v),p.time=ti.time,p.width=v[u]),Vt(f?m*s/d:m&&s?d/m*s:0)},Ki=function(e,t,n,i){var s;return pf||Kc(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),lr[t]&&t!=="transform"?(s=$a(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ml(ii(e,Vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sl[t]&&Sl[t](e,t,n)||ii(e,t)||Zd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ir(e,t,s,n)+n:s},E_=function(e,t,n,i){if(!n||n==="none"){var s=Qs(t,e,1),a=s&&ii(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ii(e,"borderTopColor"))}var o=new Gn(this._pt,e.style,t,0,1,yp),l=0,c=0,u,d,f,h,m,v,p,g,x,b,S,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(v=e.style[t],e.style[t]=i,i=ii(e,t)||i,v?e.style[t]=v:Dr(e,t)),u=[n,i],mp(u),n=u[0],i=u[1],f=n.match(Fs)||[],T=i.match(Fs)||[],T.length){for(;d=Fs.exec(i);)p=d[0],x=i.substring(l,d.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),p!==(v=f[c++]||"")&&(h=parseFloat(v)||0,S=v.substr((h+"").length),p.charAt(1)==="="&&(p=zs(h,p)+S),g=parseFloat(p),b=p.substr((g+"").length),l=Fs.lastIndex-b.length,b||(b=b||ri.units[t]||S,l===i.length&&(i+=b,o.e+=b)),S!==b&&(h=Ir(e,t,v,b)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:h,c:g-h,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?wp:bp;return Xd.test(i)&&(o.e=0),this._pt=o,o},uh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},T_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=uh[n]||n,t[1]=uh[i]||i,t.join(" ")},b_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],lr[o]&&(l=1,o=o==="transformOrigin"?Vn:Ut),Dr(n,o);l&&(Dr(n,Ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",$a(n,1),a.uncache=1,Ap(i)))}},Sl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Gn(e._pt,t,n,0,0,b_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},qa=[1,0,0,1,0,0],Dp={},Ip=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fh=function(e){var t=ii(e,Ut);return Ip(t)?qa:t.substr(7).match(Wd).map(Vt)},_f=function(e,t){var n=e._gsap||Qr(e),i=e.style,s=fh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?qa:s):(s===qa&&!e.offsetParent&&e!==ks&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ks.appendChild(e)),s=fh(e),l?i.display=l:Dr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ks.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zc=function(e,t,n,i,s,a){var o=e._gsap,l=s||_f(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],m=l[1],v=l[2],p=l[3],g=l[4],x=l[5],b=t.split(" "),S=parseFloat(b[0])||0,T=parseFloat(b[1])||0,w,_,E,P;n?l!==qa&&(_=h*p-m*v)&&(E=S*(p/_)+T*(-v/_)+(v*x-p*g)/_,P=S*(-m/_)+T*(h/_)-(h*x-m*g)/_,S=E,T=P):(w=Pp(e),S=w.x+(~b[0].indexOf("%")?S/100*w.width:S),T=w.y+(~(b[1]||b[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&o.smooth?(g=S-c,x=T-u,o.xOffset=d+(g*h+x*v)-g,o.yOffset=f+(g*m+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Vn]="0px 0px",a&&(Er(a,o,"xOrigin",c,S),Er(a,o,"yOrigin",u,T),Er(a,o,"xOffset",d,o.xOffset),Er(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},$a=function(e,t){var n=e._gsap||new _p(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ii(e,Vn)||"0",u,d,f,h,m,v,p,g,x,b,S,T,w,_,E,P,R,I,N,U,L,z,Y,O,j,V,C,ee,Ee,Oe,$,fe;return u=d=f=v=p=g=x=b=S=0,h=m=1,n.svg=!!(e.getCTM&&Lp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),_=_f(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Zc(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,_)),T=n.xOrigin||0,w=n.yOrigin||0,_!==qa&&(I=_[0],N=_[1],U=_[2],L=_[3],u=z=_[4],d=Y=_[5],_.length===6?(h=Math.sqrt(I*I+N*N),m=Math.sqrt(L*L+U*U),v=I||N?ms(N,I)*Xr:0,x=U||L?ms(U,L)*Xr+v:0,x&&(m*=Math.abs(Math.cos(x*Hs))),n.svg&&(u-=T-(T*I+w*U),d-=w-(T*N+w*L))):(fe=_[6],Oe=_[7],C=_[8],ee=_[9],Ee=_[10],$=_[11],u=_[12],d=_[13],f=_[14],E=ms(fe,Ee),p=E*Xr,E&&(P=Math.cos(-E),R=Math.sin(-E),O=z*P+C*R,j=Y*P+ee*R,V=fe*P+Ee*R,C=z*-R+C*P,ee=Y*-R+ee*P,Ee=fe*-R+Ee*P,$=Oe*-R+$*P,z=O,Y=j,fe=V),E=ms(-U,Ee),g=E*Xr,E&&(P=Math.cos(-E),R=Math.sin(-E),O=I*P-C*R,j=N*P-ee*R,V=U*P-Ee*R,$=L*R+$*P,I=O,N=j,U=V),E=ms(N,I),v=E*Xr,E&&(P=Math.cos(E),R=Math.sin(E),O=I*P+N*R,j=z*P+Y*R,N=N*P-I*R,Y=Y*P-z*R,I=O,z=j),p&&Math.abs(p)+Math.abs(v)>359.9&&(p=v=0,g=180-g),h=Vt(Math.sqrt(I*I+N*N+U*U)),m=Vt(Math.sqrt(Y*Y+fe*fe)),E=ms(z,Y),x=Math.abs(E)>2e-4?E*Xr:0,S=$?1/($<0?-$:$):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ip(ii(e,Ut)),O&&e.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=v<=0?180:-180,v+=v<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Vt(h),n.scaleY=Vt(m),n.rotation=Vt(v)+o,n.rotationX=Vt(p)+o,n.rotationY=Vt(g)+o,n.skewX=x+o,n.skewY=b+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Vn]=Ml(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?A_:Cp?Np:w_,n.uncache=0,n},Ml=function(e){return(e=e.split(" "))[0]+" "+e[1]},sc=function(e,t,n){var i=En(t);return Vt(parseFloat(t)+parseFloat(Ir(e,"x",n+"px",i)))+i},w_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Np(e,t)},zr="0deg",ca="0px",kr=") ",Np=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,m=n.scaleX,v=n.scaleY,p=n.transformPerspective,g=n.force3D,x=n.target,b=n.zOrigin,S="",T=g==="auto"&&e&&e!==1||g===!0;if(b&&(d!==zr||u!==zr)){var w=parseFloat(u)*Hs,_=Math.sin(w),E=Math.cos(w),P;w=parseFloat(d)*Hs,P=Math.cos(w),a=sc(x,a,_*P*-b),o=sc(x,o,-Math.sin(w)*-b),l=sc(x,l,E*P*-b+b)}p!==ca&&(S+="perspective("+p+kr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(T||a!==ca||o!==ca||l!==ca)&&(S+=l!==ca||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+kr),c!==zr&&(S+="rotate("+c+kr),u!==zr&&(S+="rotateY("+u+kr),d!==zr&&(S+="rotateX("+d+kr),(f!==zr||h!==zr)&&(S+="skew("+f+", "+h+kr),(m!==1||v!==1)&&(S+="scale("+m+", "+v+kr),x.style[Ut]=S||"translate(0, 0)"},A_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,m=n.xOrigin,v=n.yOrigin,p=n.xOffset,g=n.yOffset,x=n.forceCSS,b=parseFloat(a),S=parseFloat(o),T,w,_,E,P;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Hs,c*=Hs,T=Math.cos(l)*d,w=Math.sin(l)*d,_=Math.sin(l-c)*-f,E=Math.cos(l-c)*f,c&&(u*=Hs,P=Math.tan(c-u),P=Math.sqrt(1+P*P),_*=P,E*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),T*=P,w*=P)),T=Vt(T),w=Vt(w),_=Vt(_),E=Vt(E)):(T=d,E=f,w=_=0),(b&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(b=Ir(h,"x",a,"px"),S=Ir(h,"y",o,"px")),(m||v||p||g)&&(b=Vt(b+m-(m*T+v*_)+p),S=Vt(S+v-(m*w+v*E)+g)),(i||s)&&(P=h.getBBox(),b=Vt(b+i/100*P.width),S=Vt(S+s/100*P.height)),P="matrix("+T+","+w+","+_+","+E+","+b+","+S+")",h.setAttribute("transform",P),x&&(h.style[Ut]=P)},R_=function(e,t,n,i,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Xr:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*sh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*sh)%a-~~(c/a)*a)),e._pt=f=new Gn(e._pt,t,n,i,c,u_),f.e=u,f.u="deg",e._props.push(n),f},hh=function(e,t){for(var n in t)e[n]=t[n];return e},C_=function(e,t,n){var i=hh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ut]=t,o=$a(n,1),Dr(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],a[Ut]=t,o=$a(n,1),a[Ut]=c);for(l in lr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=En(c),m=En(u),d=h!==m?Ir(n,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new Gn(e._pt,o,l,d,f-d,qc),e._pt.u=m||0,e._props.push(l));hh(o,i)};Hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Sl[e>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(m){return Ki(o,m,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(m,v){return h[m]=f[v]=f[v]||f[(v-1)/2|0]}),o.init(l,h,d)}});var Up={name:"css",register:Kc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,m,v,p,g,x,b,S,T,w,_,E,P;pf||Kc(),this.styles=this.styles||Rp(e),E=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(u=t[v],!(jn[v]&&vp(v,t,n,i,e,s)))){if(h=typeof u,m=Sl[v],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Va(u)),m)m(this,e,v,u,n)&&(_=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Rr.lastIndex=0,Rr.test(c)||(p=En(c),g=En(u),g?p!==g&&(c=Ir(e,v,c,g)+g):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,v),a.push(v),E.push(v,0,o[v]);else if(h!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,e,s):l[v],un(c)&&~c.indexOf("random(")&&(c=Va(c)),En(c+"")||c==="auto"||(c+=ri.units[v]||En(Ki(e,v))||""),(c+"").charAt(1)==="="&&(c=Ki(e,v))):c=Ki(e,v),f=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),v in Di&&(v==="autoAlpha"&&(f===1&&Ki(e,"visibility")==="hidden"&&d&&(f=0),E.push("visibility",0,o.visibility),Er(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Di[v],~v.indexOf(",")&&(v=v.split(",")[0]))),b=v in lr,b){if(this.styles.save(v),P=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=ii(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=ii(e,"perspective"),R?e.style.perspective=R:Dr(e,"perspective")}d=parseFloat(u)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||$a(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Gn(this._pt,o,Ut,0,1,T.renderTransform,T,0,-1),S.dep=1),v==="scale")this._pt=new Gn(this._pt,T,"scaleY",T.scaleY,(x?zs(T.scaleY,x+d):d)-T.scaleY||0,qc),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){E.push(Vn,0,o[Vn]),u=T_(u),T.svg?Zc(e,u,0,w,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==T.zOrigin&&Er(this,T,"zOrigin",T.zOrigin,g),Er(this,o,v,Ml(c),Ml(u)));continue}else if(v==="svgOrigin"){Zc(e,u,1,w,0,this);continue}else if(v in Dp){R_(this,T,v,f,x?zs(f,x+u):u);continue}else if(v==="smoothOrigin"){Er(this,T,"smooth",T.smooth,u);continue}else if(v==="force3D"){T[v]=u;continue}else if(v==="transform"){C_(this,u,e);continue}}else v in o||(v=Qs(v)||v);if(b||(d||d===0)&&(f||f===0)&&!c_.test(u)&&v in o)p=(c+"").substr((f+"").length),d||(d=0),g=En(u)||(v in ri.units?ri.units[v]:p),p!==g&&(f=Ir(e,v,c,g)),this._pt=new Gn(this._pt,b?T:o,v,f,(x?zs(f,x+d):d)-f,!b&&(g==="px"||v==="zIndex")&&t.autoRound!==!1?d_:qc),this._pt.u=g||0,b&&P!==u?(this._pt.b=c,this._pt.e=P,this._pt.r=h_):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=f_);else if(v in o)E_.call(this,e,v,c,x?x+u:u);else if(v in e)this.add(e,v,c||e[v],x?x+u:u,i,s);else if(v!=="parseTransform"){rf(v,u);continue}b||(v in o?E.push(v,0,o[v]):typeof e[v]=="function"?E.push(v,2,e[v]()):E.push(v,1,c||e[v])),a.push(v)}}_&&Ep(this)},render:function(e,t){if(t.tween._time||!mf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ki,aliases:Di,getSetter:function(e,t,n){var i=Di[t];return i&&i.indexOf(",")<0&&(t=i),t in lr&&t!==Vn&&(e._gsap.x||Ki(e,"x"))?n&&rh===n?t==="scale"?__:g_:(rh=n||{})&&(t==="scale"?v_:x_):e.style&&!ef(e.style[t])?p_:~t.indexOf("-")?m_:hf(e,t)},core:{_removeProperty:Dr,_getMatrix:_f}};Yn.utils.checkPrefix=Qs;Yn.core.getStyleSaver=Rp;(function(r,e,t,n){var i=Hn(r+","+e+","+t,function(s){lr[s]=1});Hn(e,function(s){ri.units[s]="deg",Dp[s]=1}),Di[i[13]]=r+","+e,Hn(n,function(s){var a=s.split(":");Di[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ri.units[r]="px"});Yn.registerPlugin(Up);var ze=Yn.registerPlugin(Up)||Yn;ze.core.Tween;function P_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function L_(r,e,t){return e&&P_(r.prototype,e),r}/*!
 * Observer 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn,el,Bn,Tr,br,Gs,Fp,Yr,Vs,Op,Qi,Mi,Bp,zp=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},kp=1,Bs=[],et=[],Fi=[],Ca=Date.now,Jc=function(e,t){return t},D_=function(){var e=Vs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,Fi),et=n,Fi=i,Jc=function(a,o){return t[a](o)}},Cr=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},Pa=function(e){return!!~Op.indexOf(e)},Cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ho="scrollLeft",po="scrollTop",Qc=function(){return Qi&&Qi.isPressed||et.cache++},yl=function(e,t){var n=function i(s){if(s||s===0){kp&&Bn.history.scrollRestoration!=="manual"&&(Bn.history.scrollRestoration="manual");var a=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),e(s),i.cacheID=et.cache,a&&Jc("ss",s)}else(t||et.cache!==i.cacheID||Jc("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Nn={s:ho,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yl(function(r){return arguments.length?Bn.scrollTo(r,nn.sc()):Bn.pageXOffset||Tr[ho]||br[ho]||Gs[ho]||0})},nn={s:po,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:yl(function(r){return arguments.length?Bn.scrollTo(Nn.sc(),r):Bn.pageYOffset||Tr[po]||br[po]||Gs[po]||0})},Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},I_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Nr=function(e,t){var n=t.s,i=t.sc;Pa(e)&&(e=Tr.scrollingElement||br);var s=et.indexOf(e),a=i===nn.sc?1:2;!~s&&(s=et.push(e)-1),et[s+a]||Cn(e,"scroll",Qc);var o=et[s+a],l=o||(et[s+a]=yl(Cr(e,n),!0)||(Pa(e)?i:yl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},jc=function(e,t,n){var i=e,s=e,a=Ca(),o=a,l=t||50,c=Math.max(500,l*3),u=function(m,v){var p=Ca();v||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(m){var v=o,p=s,g=Ca();return(m||m===0)&&m!==i&&u(m),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-v)*1e3};return{update:u,reset:d,getVelocity:f}},ua=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},dh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Hp=function(){Vs=hn.core.globals().ScrollTrigger,Vs&&Vs.core&&D_()},Gp=function(e){return hn=e||zp(),!el&&hn&&typeof document<"u"&&document.body&&(Bn=window,Tr=document,br=Tr.documentElement,Gs=Tr.body,Op=[Bn,Tr,br,Gs],hn.utils.clamp,Bp=hn.core.context||function(){},Yr="onpointerenter"in Gs?"pointer":"mouse",Fp=Wt.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=Wt.eventTypes=("ontouchstart"in br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return kp=0},500),el=1),Vs||Hp(),el};Nn.op=nn;et.cache=0;var Wt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){el||Gp(hn)||console.warn("Please gsap.registerPlugin(Observer)"),Vs||Hp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,m=n.wheelSpeed,v=n.event,p=n.onDragStart,g=n.onDragEnd,x=n.onDrag,b=n.onPress,S=n.onRelease,T=n.onRight,w=n.onLeft,_=n.onUp,E=n.onDown,P=n.onChangeX,R=n.onChangeY,I=n.onChange,N=n.onToggleX,U=n.onToggleY,L=n.onHover,z=n.onHoverEnd,Y=n.onMove,O=n.ignoreCheck,j=n.isNormalizer,V=n.onGestureStart,C=n.onGestureEnd,ee=n.onWheel,Ee=n.onEnable,Oe=n.onDisable,$=n.onClick,fe=n.scrollSpeed,ie=n.capture,oe=n.allowClicks,ae=n.lockAxis,Se=n.onLockAxis;this.target=o=Un(o)||br,this.vars=n,h&&(h=hn.utils.toArray(h)),i=i||1e-9,s=s||0,m=m||1,fe=fe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bn.getComputedStyle(Gs).lineHeight)||22);var Xe,Te,ke,Ce,be,tt,Ye,W=this,Ze=0,Ot=0,xt=n.passive||!u&&n.passive!==!1,nt=Nr(o,Nn),yt=Nr(o,nn),Gt=nt(),B=yt(),mt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Mi[0]==="pointerdown",ft=Pa(o),We=o.ownerDocument||Tr,pe=[0,0,0],dt=[0,0,0],Ne=0,He=function(){return Ne=Ca()},A=function(_e,se){return(W.event=_e)&&h&&I_(_e.target,h)||se&&mt&&_e.pointerType!=="touch"||O&&O(_e,se)},M=function(){W._vx.reset(),W._vy.reset(),Te.pause(),d&&d(W)},H=function(){var _e=W.deltaX=dh(pe),se=W.deltaY=dh(dt),te=Math.abs(_e)>=i,xe=Math.abs(se)>=i;I&&(te||xe)&&I(W,_e,se,pe,dt),te&&(T&&W.deltaX>0&&T(W),w&&W.deltaX<0&&w(W),P&&P(W),N&&W.deltaX<0!=Ze<0&&N(W),Ze=W.deltaX,pe[0]=pe[1]=pe[2]=0),xe&&(E&&W.deltaY>0&&E(W),_&&W.deltaY<0&&_(W),R&&R(W),U&&W.deltaY<0!=Ot<0&&U(W),Ot=W.deltaY,dt[0]=dt[1]=dt[2]=0),(Ce||ke)&&(Y&&Y(W),ke&&(p&&ke===1&&p(W),x&&x(W),ke=0),Ce=!1),tt&&!(tt=!1)&&Se&&Se(W),be&&(ee(W),be=!1),Xe=0},le=function(_e,se,te){pe[te]+=_e,dt[te]+=se,W._vx.update(_e),W._vy.update(se),c?Xe||(Xe=requestAnimationFrame(H)):H()},re=function(_e,se){ae&&!Ye&&(W.axis=Ye=Math.abs(_e)>Math.abs(se)?"x":"y",tt=!0),Ye!=="y"&&(pe[2]+=_e,W._vx.update(_e,!0)),Ye!=="x"&&(dt[2]+=se,W._vy.update(se,!0)),c?Xe||(Xe=requestAnimationFrame(H)):H()},de=function(_e){if(!A(_e,1)){_e=ua(_e,u);var se=_e.clientX,te=_e.clientY,xe=se-W.x,ne=te-W.y,Ae=W.isDragging;W.x=se,W.y=te,(Ae||(xe||ne)&&(Math.abs(W.startX-se)>=s||Math.abs(W.startY-te)>=s))&&(ke||(ke=Ae?2:1),Ae||(W.isDragging=!0),re(xe,ne))}},ve=W.onPress=function(ce){A(ce,1)||ce&&ce.button||(W.axis=Ye=null,Te.pause(),W.isPressed=!0,ce=ua(ce),Ze=Ot=0,W.startX=W.x=ce.clientX,W.startY=W.y=ce.clientY,W._vx.reset(),W._vy.reset(),Cn(j?o:We,Mi[1],de,xt,!0),W.deltaX=W.deltaY=0,b&&b(W))},G=W.onRelease=function(ce){if(!A(ce,1)){Rn(j?o:We,Mi[1],de,!0);var _e=!isNaN(W.y-W.startY),se=W.isDragging,te=se&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),xe=ua(ce);!te&&_e&&(W._vx.reset(),W._vy.reset(),u&&oe&&hn.delayedCall(.08,function(){if(Ca()-Ne>300&&!ce.defaultPrevented){if(ce.target.click)ce.target.click();else if(We.createEvent){var ne=We.createEvent("MouseEvents");ne.initMouseEvent("click",!0,!0,Bn,1,xe.screenX,xe.screenY,xe.clientX,xe.clientY,!1,!1,!1,!1,0,null),ce.target.dispatchEvent(ne)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,d&&se&&!j&&Te.restart(!0),ke&&H(),g&&se&&g(W),S&&S(W,te)}},Q=function(_e){return _e.touches&&_e.touches.length>1&&(W.isGesturing=!0)&&V(_e,W.isDragging)},he=function(){return(W.isGesturing=!1)||C(W)},D=function(_e){if(!A(_e)){var se=nt(),te=yt();le((se-Gt)*fe,(te-B)*fe,1),Gt=se,B=te,d&&Te.restart(!0)}},J=function(_e){if(!A(_e)){_e=ua(_e,u),ee&&(be=!0);var se=(_e.deltaMode===1?l:_e.deltaMode===2?Bn.innerHeight:1)*m;le(_e.deltaX*se,_e.deltaY*se,0),d&&!j&&Te.restart(!0)}},Z=function(_e){if(!A(_e)){var se=_e.clientX,te=_e.clientY,xe=se-W.x,ne=te-W.y;W.x=se,W.y=te,Ce=!0,d&&Te.restart(!0),(xe||ne)&&re(xe,ne)}},me=function(_e){W.event=_e,L(W)},ue=function(_e){W.event=_e,z(W)},ge=function(_e){return A(_e)||ua(_e,u)&&$(W)};Te=W._dc=hn.delayedCall(f||.25,M).pause(),W.deltaX=W.deltaY=0,W._vx=jc(0,50,!0),W._vy=jc(0,50,!0),W.scrollX=nt,W.scrollY=yt,W.isDragging=W.isGesturing=W.isPressed=!1,Bp(this),W.enable=function(ce){return W.isEnabled||(Cn(ft?We:o,"scroll",Qc),a.indexOf("scroll")>=0&&Cn(ft?We:o,"scroll",D,xt,ie),a.indexOf("wheel")>=0&&Cn(o,"wheel",J,xt,ie),(a.indexOf("touch")>=0&&Fp||a.indexOf("pointer")>=0)&&(Cn(o,Mi[0],ve,xt,ie),Cn(We,Mi[2],G),Cn(We,Mi[3],G),oe&&Cn(o,"click",He,!0,!0),$&&Cn(o,"click",ge),V&&Cn(We,"gesturestart",Q),C&&Cn(We,"gestureend",he),L&&Cn(o,Yr+"enter",me),z&&Cn(o,Yr+"leave",ue),Y&&Cn(o,Yr+"move",Z)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Ce=ke=!1,W._vx.reset(),W._vy.reset(),Gt=nt(),B=yt(),ce&&ce.type&&ve(ce),Ee&&Ee(W)),W},W.disable=function(){W.isEnabled&&(Bs.filter(function(ce){return ce!==W&&Pa(ce.target)}).length||Rn(ft?We:o,"scroll",Qc),W.isPressed&&(W._vx.reset(),W._vy.reset(),Rn(j?o:We,Mi[1],de,!0)),Rn(ft?We:o,"scroll",D,ie),Rn(o,"wheel",J,ie),Rn(o,Mi[0],ve,ie),Rn(We,Mi[2],G),Rn(We,Mi[3],G),Rn(o,"click",He,!0),Rn(o,"click",ge),Rn(We,"gesturestart",Q),Rn(We,"gestureend",he),Rn(o,Yr+"enter",me),Rn(o,Yr+"leave",ue),Rn(o,Yr+"move",Z),W.isEnabled=W.isPressed=W.isDragging=!1,Oe&&Oe(W))},W.kill=W.revert=function(){W.disable();var ce=Bs.indexOf(W);ce>=0&&Bs.splice(ce,1),Qi===W&&(Qi=0)},Bs.push(W),j&&Pa(o)&&(Qi=W),W.enable(v)},L_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Wt.version="3.15.1";Wt.create=function(r){return new Wt(r)};Wt.register=Gp;Wt.getAll=function(){return Bs.slice()};Wt.getById=function(r){return Bs.filter(function(e){return e.vars.id===r})[0]};zp()&&hn.registerPlugin(Wt);/*!
 * ScrollTrigger 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,Is,je,St,ei,vt,vf,El,Ka,La,xa,mo,Mn,Gl,eu,Dn,ph,mh,Ns,Vp,ac,Wp,Ln,tu,Xp,Yp,vr,nu,xf,Ws,Sf,Pr,iu,oc,go=1,yn=Date.now,lc=yn(),gi=0,Sa=0,gh=function(e,t,n){var i=Qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},_h=function(e,t){return t&&(!Qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},N_=function r(){return Sa&&requestAnimationFrame(r)},vh=function(){return Gl=1},xh=function(){return Gl=0},Ci=function(e){return e},Ma=function(e){return Math.round(e*1e5)/1e5||0},qp=function(){return typeof window<"u"},$p=function(){return Pe||qp()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},ss=function(e){return!!~vf.indexOf(e)},Kp=function(e){return(e==="Height"?Sf:je["inner"+e])||ei["client"+e]||vt["client"+e]},Zp=function(e){return Cr(e,"getBoundingClientRect")||(ss(e)?function(){return sl.width=je.innerWidth,sl.height=Sf,sl}:function(){return Zi(e)})},U_=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Cr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Kp(s):e["client"+s])||0}},F_=function(e,t){return!t||~Fi.indexOf(e)?Zp(e):function(){return sl}},Ii=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Cr(e,n))?a()-Zp(e)()[s]:ss(e)?(ei[n]||vt[n])-Kp(i):e[n]-e["offset"+i])},_o=function(e,t){for(var n=0;n<Ns.length;n+=3)(!t||~t.indexOf(Ns[n+1]))&&e(Ns[n],Ns[n+1],Ns[n+2])},Qn=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},ya=function(e){return typeof e=="number"},qr=function(e){return typeof e=="object"},fa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},gs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},_s=Math.abs,Jp="left",Qp="top",Mf="right",yf="bottom",ns="width",is="height",Da="Right",Ia="Left",Na="Top",Ua="Bottom",Zt="padding",fi="margin",js="Width",Ef="Height",tn="px",hi=function(e){return je.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},O_=function(e){var t=hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Sh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zi=function(e,t){var n=t&&hi(e)[eu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Tl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},jp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},B_=function(e){return function(t){return Pe.utils.snap(jp(e),t)}},Tf=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},z_=function(e){return function(t,n){return Tf(jp(e))(t,n.direction)}},vo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Mh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},So={toggleActions:"play",anticipatePin:0},bl={top:0,left:0,center:.5,bottom:1,right:1},tl=function(e,t){if(Qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in bl?bl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Mo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,m=St.createElement("div"),v=ss(n)||Cr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=v?vt:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,b=x?c:u,S="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&v?"fixed;":"absolute;"),(p||l||!v)&&(S+=(i===nn?Mf:yf)+":"+(a+parseFloat(f))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=S,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],nl(m,0,i,x),m},nl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+js]=1,s["border"+o+js]=0,s[n.p]=t+"px",Pe.set(e,s)},Qe=[],ru={},Za,yh=function(){return yn()-gi>34&&(Za||(Za=requestAnimationFrame(tr)))},vs=function(){(!Ln||!Ln.isPressed||Ln.startX>vt.clientWidth)&&(et.cache++,Ln?Za||(Za=requestAnimationFrame(tr)):tr(),gi||os("scrollStart"),gi=yn())},cc=function(){Yp=je.innerWidth,Xp=je.innerHeight},Ea=function(e){et.cache++,(e===!0||!Mn&&!Wp&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!tu||Yp!==je.innerWidth||Math.abs(je.innerHeight-Xp)>je.innerHeight*.25))&&El.restart(!0)},as={},k_=[],em=function r(){return ln(Ge,"scrollEnd",r)||Kr(!0)},os=function(e){return as[e]&&as[e].map(function(t){return t()})||k_},Jn=[],tm=function(e){for(var t=0;t<Jn.length;t+=5)(!e||Jn[t+4]&&Jn[t+4].query===e)&&(Jn[t].style.cssText=Jn[t+1],Jn[t].getBBox&&Jn[t].setAttribute("transform",Jn[t+2]||""),Jn[t+3].uncache=1)},nm=function(){et.cache++,et.forEach(function(e){return Tn(e)&&(e.rec=e())})},bf=function(e,t){var n;for(Dn=0;Dn<Qe.length;Dn++)n=Qe[Dn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Pr=!0,t&&tm(t),t||os("revert")},im=function(e,t){et.cache++,(t||!In)&&et.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),Qn(e)&&(xf=e,je.history.scrollRestoration!==e&&(je.history.scrollRestoration=e))},In,rs=0,Eh,H_=function(){if(Eh!==rs){var e=Eh=rs;requestAnimationFrame(function(){return e===rs&&Kr(!0)})}},rm=function(){vt.appendChild(Ws),Sf=!Ln&&Ws.offsetHeight||je.innerHeight,vt.removeChild(Ws)},Th=function(e){return Ka(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Kr=function(e,t){if(ei=St.documentElement,vt=St.body,vf=[je,St,ei,vt],gi&&!e&&!Pr){cn(Ge,"scrollEnd",em);return}rm(),In=Ge.isRefreshing=!0,Pr||nm();var n=os("refreshInit");Vp&&Ge.sort(),t||bf(),et.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),Pr=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),iu=1,Th(!0),Qe.forEach(function(i){var s=Ii(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Th(!1),iu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),im(xf,1),El.pause(),rs++,In=2,tr(2),Qe.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=Ge.isRefreshing=!1,os("refresh")},su=0,il=1,Fa,tr=function(e){if(e===2||!In&&!Pr){Ge.isUpdating=!0,Fa&&Fa.update(0);var t=Qe.length,n=yn(),i=n-lc>=50,s=t&&Qe[0].scroll();if(il=su>s?-1:1,In||(su=s),i&&(gi&&!Gl&&n-gi>200&&(gi=0,os("scrollEnd")),xa=lc,lc=n),il<0){for(Dn=t;Dn-- >0;)Qe[Dn]&&Qe[Dn].update(0,i);il=1}else for(Dn=0;Dn<t;Dn++)Qe[Dn]&&Qe[Dn].update(0,i);Ge.isUpdating=!1}Za=0},au=[Jp,Qp,yf,Mf,fi+Ua,fi+Da,fi+Na,fi+Ia,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],rl=au.concat([ns,is,"boxSizing","max"+js,"max"+Ef,"position",fi,Zt,Zt+Na,Zt+Da,Zt+Ua,Zt+Ia]),G_=function(e,t,n){Xs(n);var i=e._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},uc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=au.length,a=t.style,o=e.style,l;s--;)l=au[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[yf]=o[Mf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ns]=Tl(e,Nn)+tn,a[is]=Tl(e,nn)+tn,a[Zt]=o[fi]=o[Qp]=o[Jp]="0",Xs(i),o[ns]=o["max"+js]=n[ns],o[is]=o["max"+Ef]=n[is],o[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},V_=/([A-Z])/g,Xs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(V_,"-$1").toLowerCase())}},yo=function(e){for(var t=rl.length,n=e.style,i=[],s=0;s<t;s++)i.push(rl[s],n[rl[s]]);return i.t=e,i},W_=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},sl={left:0,top:0},bh=function(e,t,n,i,s,a,o,l,c,u,d,f,h,m){Tn(e)&&(e=e(l)),Qn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?tl("0"+e.substr(3),n):0));var v=h?h.time():0,p,g,x;if(h&&h.seek(0),isNaN(e)||(e=+e),ya(e))h&&(e=Pe.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&nl(o,n,i,!0);else{Tn(t)&&(t=t(l));var b=(e||"0").split(" "),S,T,w,_;x=Un(t,l)||vt,S=Zi(x)||{},(!S||!S.left&&!S.top)&&hi(x).display==="none"&&(_=x.style.display,x.style.display="block",S=Zi(x),_?x.style.display=_:x.style.removeProperty("display")),T=tl(b[0],S[i.d]),w=tl(b[1]||"0",n),e=S[i.p]-c[i.p]-u+T+s-w,o&&nl(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var E=e+n,P=a._isStart;p="scroll"+i.d2,nl(a,E,i,P&&E>20||!P&&(d?Math.max(vt[p],ei[p]):a.parentNode[p])<=E+1),d&&(c=Zi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+tn))}return h&&x&&(p=Zi(x),h.seek(f),g=Zi(x),h._caScrollDist=p[i.p]-g[i.p],e=e/h._caScrollDist*f),h&&h.seek(v),h?e:Math.round(e)},X_=/(webkit|moz|length|cssText|inset)/i,wh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=hi(e);for(a in o)!+a&&!X_.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},sm=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Eo=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},Ah=function(e,t){var n=Nr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,m={};c=c||n();var v=sm(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return v(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){et.cache++,a.tween&&tr()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=Pe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",n.wheelHandler),Ge.isTouch&&cn(e,"touchmove",n.wheelHandler),s},Ge=(function(){function r(t,n){Is||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),nu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sa){this.update=this.refresh=this.kill=Ci;return}n=Sh(Qn(n)||ya(n)||n.nodeType?{trigger:n}:n,So);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,m=s.pinSpacing,v=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,b=s.once,S=s.snap,T=s.pinReparent,w=s.pinSpacer,_=s.containerAnimation,E=s.fastScrollEnd,P=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:nn,I=!d&&d!==0,N=Un(n.scroller||je),U=Pe.core.getCache(N),L=ss(N),z=("pinType"in n?n.pinType:Cr(N,"pinType")||L&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=I&&n.toggleActions.split(" "),j="markers"in n?n.markers:So.markers,V=L?0:parseFloat(hi(N)["border"+R.p2+js])||0,C=this,ee=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Ee=U_(N,L,R),Oe=F_(N,L),$=0,fe=0,ie=0,oe=Nr(N,R),ae,Se,Xe,Te,ke,Ce,be,tt,Ye,W,Ze,Ot,xt,nt,yt,Gt,B,mt,ft,We,pe,dt,Ne,He,A,M,H,le,re,de,ve,G,Q,he,D,J,Z,me,ue;if(C._startClamp=C._endClamp=!1,C._dir=R,p*=45,C.scroller=N,C.scroll=_?_.time.bind(_):oe,Te=oe(),Pr&&oe.rec==null&&(oe.rec=Te),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Vp=1,n.refreshPriority===-9999&&(Fa=C)),U.tweenScroll=U.tweenScroll||{top:Ah(N,nn),left:Ah(N,Nn)},C.tweenTo=ae=U.tweenScroll[R.p],C.scrubDuration=function(te){Q=ya(te)&&te,Q?G?G.duration(te):G=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return g&&g(C)}}):(G&&G.progress(1).kill(),G=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),de=0,l||(l=i.vars.id)),S&&((!qr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in vt.style&&Pe.set(L?[vt,ei]:N,{scrollBehavior:"auto"}),et.forEach(function(te){return Tn(te)&&te.target===(L?St.scrollingElement||ei:N)&&(te.smooth=!1)}),Xe=Tn(S.snapTo)?S.snapTo:S.snapTo==="labels"?B_(i):S.snapTo==="labelsDirectional"?z_(i):S.directional!==!1?function(te,xe){return Tf(S.snapTo)(te,yn()-fe<500?0:xe.direction)}:Pe.utils.snap(S.snapTo),he=S.duration||{min:.1,max:2},he=qr(he)?La(he.min,he.max):La(he,he),D=Pe.delayedCall(S.delay||Q/2||.1,function(){var te=oe(),xe=yn()-fe<500,ne=ae.tween;if((xe||Math.abs(C.getVelocity())<10)&&!ne&&!Gl&&$!==te){var Ae=(te-Ce)/nt,it=i&&!I?i.totalProgress():Ae,$e=xe?0:(it-ve)/(yn()-xa)*1e3||0,Ct=Pe.utils.clamp(-Ae,1-Ae,_s($e/2)*$e/.185),Yt=Ae+(S.inertia===!1?0:Ct),Pt,Tt,_t=S,Qt=_t.onStart,bt=_t.onInterrupt,gn=_t.onComplete;if(Pt=Xe(Yt,C),ya(Pt)||(Pt=Yt),Tt=Math.max(0,Math.round(Ce+Pt*nt)),te<=be&&te>=Ce&&Tt!==te){if(ne&&!ne._initted&&ne.data<=_s(Tt-te))return;S.inertia===!1&&(Ct=Pt-Ae),ae(Tt,{duration:he(_s(Math.max(_s(Yt-it),_s(Pt-it))*.185/$e/.05||0)),ease:S.ease||"power3",data:_s(Tt-te),onInterrupt:function(){return D.restart(!0)&&bt&&gs(C,bt)},onComplete:function(){C.update(),$=oe(),i&&!I&&(G?G.resetTo("totalProgress",Pt,i._tTime/i._tDur):i.progress(Pt)),de=ve=i&&!I?i.totalProgress():C.progress,x&&x(C),gn&&gs(C,gn)}},te,Ct*nt,Tt-te-Ct*nt),Qt&&gs(C,Qt,ae.tween)}}else C.isActive&&$!==te&&D.restart(!0)}).pause()),l&&(ru[l]=C),f=C.trigger=Un(f||h!==!0&&h),ue=f&&f._gsap&&f._gsap.stRevert,ue&&(ue=ue(C)),h=h===!0?f:Un(h),Qn(o)&&(o={targets:f,className:o}),h&&(m===!1||m===fi||(m=!m&&h.parentNode&&h.parentNode.style&&hi(h.parentNode).display==="flex"?!1:Zt),C.pin=h,Se=Pe.core.getCache(h),Se.spacer?yt=Se.pinState:(w&&(w=Un(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Se.spacerIsNative=!!w,w&&(Se.spacerState=yo(w))),Se.spacer=mt=w||St.createElement("div"),mt.classList.add("pin-spacer"),l&&mt.classList.add("pin-spacer-"+l),Se.pinState=yt=yo(h)),n.force3D!==!1&&Pe.set(h,{force3D:!0}),C.spacer=mt=Se.spacer,re=hi(h),He=re[m+R.os2],We=Pe.getProperty(h),pe=Pe.quickSetter(h,R.a,tn),uc(h,mt,re),B=yo(h)),j){Ot=qr(j)?Sh(j,Mh):Mh,W=Mo("scroller-start",l,N,R,Ot,0),Ze=Mo("scroller-end",l,N,R,Ot,0,W),ft=W["offset"+R.op.d2];var ge=Un(Cr(N,"content")||N);tt=this.markerStart=Mo("start",l,ge,R,Ot,ft,0,_),Ye=this.markerEnd=Mo("end",l,ge,R,Ot,ft,0,_),_&&(me=Pe.quickSetter([tt,Ye],R.a,tn)),!z&&!(Fi.length&&Cr(N,"fixedMarkers")===!0)&&(O_(L?vt:N),Pe.set([W,Ze],{force3D:!0}),M=Pe.quickSetter(W,R.a,tn),le=Pe.quickSetter(Ze,R.a,tn))}if(_){var ce=_.vars.onUpdate,_e=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){C.update(0,0,1),ce&&ce.apply(_,_e||[])})}if(C.previous=function(){return Qe[Qe.indexOf(C)-1]},C.next=function(){return Qe[Qe.indexOf(C)+1]},C.revert=function(te,xe){if(!xe)return C.kill(!0);var ne=te!==!1||!C.enabled,Ae=Mn;ne!==C.isReverted&&(ne&&(J=Math.max(oe(),C.scroll.rec||0),ie=C.progress,Z=i&&i.progress()),tt&&[tt,Ye,W,Ze].forEach(function(it){return it.style.display=ne?"none":"block"}),ne&&(Mn=C,C.update(ne)),h&&(!T||!C.isActive)&&(ne?G_(h,mt,yt):uc(h,mt,hi(h),A)),ne||C.update(ne),Mn=Ae,C.isReverted=ne)},C.refresh=function(te,xe,ne,Ae){if(!((Mn||!C.enabled)&&!xe)){if(h&&te&&gi){cn(r,"scrollEnd",em);return}!In&&ee&&ee(C),Mn=C,ae.tween&&!ne&&(ae.tween.kill(),ae.tween=0),G&&G.pause(),v&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var it=Ee(),$e=Oe(),Ct=_?_.duration():Ii(N,R),Yt=nt<=.01||!nt,Pt=0,Tt=Ae||0,_t=qr(ne)?ne.end:n.end,Qt=n.endTrigger||f,bt=qr(ne)?ne.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),gn=C.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,C),qn=f&&Math.max(0,Qe.indexOf(C))||0,Bt=qn,qt,jt,$n,ps,en,zt,li,la,co,ur,y,F,q;for(j&&qr(ne)&&(F=Pe.getProperty(W,R.p),q=Pe.getProperty(Ze,R.p));Bt-- >0;)zt=Qe[Bt],zt.end||zt.refresh(0,1)||(Mn=C),li=zt.pin,li&&(li===f||li===h||li===gn)&&!zt.isReverted&&(ur||(ur=[]),ur.unshift(zt),zt.revert(!0,!0)),zt!==Qe[Bt]&&(qn--,Bt--);for(Tn(bt)&&(bt=bt(C)),bt=gh(bt,"start",C),Ce=bh(bt,f,it,R,oe(),tt,W,C,$e,V,z,Ct,_,C._startClamp&&"_startClamp")||(h?-.001:0),Tn(_t)&&(_t=_t(C)),Qn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Qn(bt)?bt.split(" ")[0]:"")+_t:(Pt=tl(_t.substr(2),it),_t=Qn(bt)?bt:(_?Pe.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Ce):Ce)+Pt,Qt=f)),_t=gh(_t,"end",C),be=Math.max(Ce,bh(_t||(Qt?"100% 0":Ct),Qt,it,R,oe()+Pt,Ye,Ze,C,$e,V,z,Ct,_,C._endClamp&&"_endClamp"))||-.001,Pt=0,Bt=qn;Bt--;)zt=Qe[Bt]||{},li=zt.pin,li&&zt.start-zt._pinPush<=Ce&&!_&&zt.end>0&&(qt=zt.end-(C._startClamp?Math.max(0,zt.start):zt.start),(li===f&&zt.start-zt._pinPush<Ce||li===gn)&&isNaN(bt)&&(Pt+=qt*(1-zt.progress)),li===h&&(Tt+=qt));if(Ce+=Pt,be+=Pt,C._startClamp&&(C._startClamp+=Pt),C._endClamp&&!In&&(C._endClamp=be||-.001,be=Math.min(be,Ii(N,R))),nt=be-Ce||(Ce-=.01)&&.001,Yt&&(ie=Pe.utils.clamp(0,1,Pe.utils.normalize(Ce,be,J))),C._pinPush=Tt,tt&&Pt&&(qt={},qt[R.a]="+="+Pt,gn&&(qt[R.p]="-="+oe()),Pe.set([tt,Ye],qt)),h&&!(iu&&C.end>=Ii(N,R)))qt=hi(h),ps=R===nn,$n=oe(),dt=parseFloat(We(R.a))+Tt,!Ct&&be>1&&(y=(L?St.scrollingElement||ei:N).style,y={style:y,value:y["overflow"+R.a.toUpperCase()]},L&&hi(vt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(y.style["overflow"+R.a.toUpperCase()]="scroll")),uc(h,mt,qt),B=yo(h),jt=Zi(h,!0),la=z&&Nr(N,ps?Nn:nn)(),m?(A=[m+R.os2,nt+Tt+tn],A.t=mt,Bt=m===Zt?Tl(h,R)+nt+Tt:0,Bt&&(A.push(R.d,Bt+tn),mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Bt+tn)),Xs(A),gn&&Qe.forEach(function(k){k.pin===gn&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),z&&oe(J)):(Bt=Tl(h,R),Bt&&mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Bt+tn)),z&&(en={top:jt.top+(ps?$n-Ce:la)+tn,left:jt.left+(ps?la:$n-Ce)+tn,boxSizing:"border-box",position:"fixed"},en[ns]=en["max"+js]=Math.ceil(jt.width)+tn,en[is]=en["max"+Ef]=Math.ceil(jt.height)+tn,en[fi]=en[fi+Na]=en[fi+Da]=en[fi+Ua]=en[fi+Ia]="0",en[Zt]=qt[Zt],en[Zt+Na]=qt[Zt+Na],en[Zt+Da]=qt[Zt+Da],en[Zt+Ua]=qt[Zt+Ua],en[Zt+Ia]=qt[Zt+Ia],Gt=W_(yt,en,T),In&&oe(0)),i?(co=i._initted,ac(1),i.render(i.duration(),!0,!0),Ne=We(R.a)-dt+nt+Tt,H=Math.abs(nt-Ne)>1,z&&H&&Gt.splice(Gt.length-2,2),i.render(0,!0,!0),co||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ac(0)):Ne=nt,y&&(y.value?y.style["overflow"+R.a.toUpperCase()]=y.value:y.style.removeProperty("overflow-"+R.a));else if(f&&oe()&&!_)for(jt=f.parentNode;jt&&jt!==vt;)jt._pinOffset&&(Ce-=jt._pinOffset,be-=jt._pinOffset),jt=jt.parentNode;ur&&ur.forEach(function(k){return k.revert(!1,!0)}),C.start=Ce,C.end=be,Te=ke=In?J:oe(),!_&&!In&&!Pr&&(Te<J&&oe(J),C.scroll.rec=0),C.revert(!1,!0),fe=yn(),D&&($=-1,D.restart(!0)),Mn=0,i&&I&&(i._initted||Z)&&i.progress()!==Z&&i.progress(Z||0,!0).render(i.time(),!0,!0),(Yt||ie!==C.progress||_||v||i&&!i._initted)&&(i&&!I&&(i._initted||ie||i.vars.immediateRender!==!1)&&i.totalProgress(_&&Ce<-.001&&!ie?Pe.utils.normalize(Ce,be,0):ie,!0),C.progress=Yt||(Te-Ce)/nt===ie?0:ie),h&&m&&(mt._pinOffset=Math.round(C.progress*Ne)),G&&G.invalidate(),isNaN(F)||(F-=Pe.getProperty(W,R.p),q-=Pe.getProperty(Ze,R.p),Eo(W,R,F),Eo(tt,R,F-(Ae||0)),Eo(Ze,R,q),Eo(Ye,R,q-(Ae||0))),Yt&&!In&&C.update(),u&&!In&&!xt&&(xt=!0,u(C),xt=!1)}},C.getVelocity=function(){return(oe()-ke)/(yn()-xa)*1e3||0},C.endAnimation=function(){fa(C.callbackAnimation),i&&(G?G.progress(1):i.paused()?I||fa(i,C.direction<0,1):fa(i,i.reversed()))},C.labelToScroll=function(te){return i&&i.labels&&(Ce||C.refresh()||Ce)+i.labels[te]/i.duration()*nt||0},C.getTrailing=function(te){var xe=Qe.indexOf(C),ne=C.direction>0?Qe.slice(0,xe).reverse():Qe.slice(xe+1);return(Qn(te)?ne.filter(function(Ae){return Ae.vars.preventOverlaps===te}):ne).filter(function(Ae){return C.direction>0?Ae.end<=Ce:Ae.start>=be})},C.update=function(te,xe,ne){if(!(_&&!ne&&!te)){var Ae=In===!0?J:C.scroll(),it=te?0:(Ae-Ce)/nt,$e=it<0?0:it>1?1:it||0,Ct=C.progress,Yt,Pt,Tt,_t,Qt,bt,gn,qn;if(xe&&(ke=Te,Te=_?oe():Ae,S&&(ve=de,de=i&&!I?i.totalProgress():$e)),p&&h&&!Mn&&!go&&gi&&(!$e&&Ce<Ae+(Ae-ke)/(yn()-xa)*p?$e=1e-4:$e===1&&be>Ae+(Ae-ke)/(yn()-xa)*p&&($e=.9999)),$e!==Ct&&C.enabled){if(Yt=C.isActive=!!$e&&$e<1,Pt=!!Ct&&Ct<1,bt=Yt!==Pt,Qt=bt||!!$e!=!!Ct,C.direction=$e>Ct?1:-1,C.progress=$e,Qt&&!Mn&&(Tt=$e&&!Ct?0:$e===1?1:Ct===1?2:3,I&&(_t=!bt&&O[Tt+1]!=="none"&&O[Tt+1]||O[Tt],qn=i&&(_t==="complete"||_t==="reset"||_t in i))),P&&(bt||qn)&&(qn||d||!i)&&(Tn(P)?P(C):C.getTrailing(P).forEach(function($n){return $n.endAnimation()})),I||(G&&!Mn&&!go?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",$e,i._tTime/i._tDur):(G.vars.totalProgress=$e,G.invalidate().restart())):i&&i.totalProgress($e,!!(Mn&&(fe||te)))),h){if(te&&m&&(mt.style[m+R.os2]=He),!z)pe(Ma(dt+Ne*$e));else if(Qt){if(gn=!te&&$e>Ct&&be+1>Ae&&Ae+1>=Ii(N,R),T)if(!te&&(Yt||gn)){var Bt=Zi(h,!0),qt=Ae-Ce;wh(h,vt,Bt.top+(R===nn?qt:0)+tn,Bt.left+(R===nn?0:qt)+tn)}else wh(h,mt);Xs(Yt||gn?Gt:B),H&&$e<1&&Yt||pe(dt+($e===1&&!gn?Ne:0))}}S&&!ae.tween&&!Mn&&!go&&D.restart(!0),o&&(bt||b&&$e&&($e<1||!oc))&&Ka(o.targets).forEach(function($n){return $n.classList[Yt||b?"add":"remove"](o.className)}),a&&!I&&!te&&a(C),Qt&&!Mn?(I&&(qn&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),a&&a(C)),(bt||!oc)&&(c&&bt&&gs(C,c),Y[Tt]&&gs(C,Y[Tt]),b&&($e===1?C.kill(!1,1):Y[Tt]=0),bt||(Tt=$e===1?1:3,Y[Tt]&&gs(C,Y[Tt]))),E&&!Yt&&Math.abs(C.getVelocity())>(ya(E)?E:2500)&&(fa(C.callbackAnimation),G?G.progress(1):fa(i,_t==="reverse"?1:!$e,1))):I&&a&&!Mn&&a(C)}if(le){var jt=_?Ae/_.duration()*(_._caScrollDist||0):Ae;M(jt+(W._isFlipped?1:0)),le(jt)}me&&me(-Ae/_.duration()*(_._caScrollDist||0))}},C.enable=function(te,xe){C.enabled||(C.enabled=!0,cn(N,"resize",Ea),L||cn(N,"scroll",vs),ee&&cn(r,"refreshInit",ee),te!==!1&&(C.progress=ie=0,Te=ke=$=oe()),xe!==!1&&C.refresh())},C.getTween=function(te){return te&&ae?ae.tween:G},C.setPositions=function(te,xe,ne,Ae){if(_){var it=_.scrollTrigger,$e=_.duration(),Ct=it.end-it.start;te=it.start+Ct*te/$e,xe=it.start+Ct*xe/$e}C.refresh(!1,!1,{start:_h(te,ne&&!!C._startClamp),end:_h(xe,ne&&!!C._endClamp)},Ae),C.update()},C.adjustPinSpacing=function(te){if(A&&te){var xe=A.indexOf(R.d)+1;A[xe]=parseFloat(A[xe])+te+tn,A[1]=parseFloat(A[1])+te+tn,Xs(A)}},C.disable=function(te,xe){if(te!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,xe||G&&G.pause(),J=0,Se&&(Se.uncache=1),ee&&ln(r,"refreshInit",ee),D&&(D.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!L)){for(var ne=Qe.length;ne--;)if(Qe[ne].scroller===N&&Qe[ne]!==C)return;ln(N,"resize",Ea),L||ln(N,"scroll",vs)}},C.kill=function(te,xe){C.disable(te,xe),G&&!xe&&G.kill(),l&&delete ru[l];var ne=Qe.indexOf(C);ne>=0&&Qe.splice(ne,1),ne===Dn&&il>0&&Dn--,ne=0,Qe.forEach(function(Ae){return Ae.scroller===C.scroller&&(ne=1)}),ne||In||Pr||(C.scroll.rec=0),i&&(i.scrollTrigger=null,te&&i.revert({kill:!1}),xe||i.kill()),tt&&[tt,Ye,W,Ze].forEach(function(Ae){return Ae.parentNode&&Ae.parentNode.removeChild(Ae)}),Fa===C&&(Fa=0),h&&(Se&&(Se.uncache=1),ne=0,Qe.forEach(function(Ae){return Ae.pin===h&&ne++}),ne||(Se.spacer=0)),n.onKill&&n.onKill(C)},Qe.push(C),C.enable(!1,!1),ue&&ue(C),i&&i.add&&!nt){var se=C.update;C.update=function(){C.update=se,et.cache++,Ce||be||C.refresh()},Pe.delayedCall(.01,C.update),nt=.01,Ce=be=0}else C.refresh();h&&H_()},r.register=function(n){return Is||(Pe=n||$p(),qp()&&window.document&&r.enable(),Is=Sa),Is},r.defaults=function(n){if(n)for(var i in n)So[i]=n[i];return So},r.disable=function(n,i){Sa=0,Qe.forEach(function(a){return a[i?"kill":"disable"](n)}),ln(je,"wheel",vs),ln(St,"scroll",vs),clearInterval(mo),ln(St,"touchcancel",Ci),ln(vt,"touchstart",Ci),vo(ln,St,"pointerdown,touchstart,mousedown",vh),vo(ln,St,"pointerup,touchend,mouseup",xh),El.kill(),_o(ln);for(var s=0;s<et.length;s+=3)xo(ln,et[s],et[s+1]),xo(ln,et[s],et[s+2])},r.enable=function(){if(je=window,St=document,ei=St.documentElement,vt=St.body,Pe){if(Ka=Pe.utils.toArray,La=Pe.utils.clamp,nu=Pe.core.context||Ci,ac=Pe.core.suppressOverwrites||Ci,xf=je.history.scrollRestoration||"auto",su=je.pageYOffset||0,Pe.core.globals("ScrollTrigger",r),vt){Sa=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",rm(),N_(),Wt.register(Pe),r.isTouch=Wt.isTouch,vr=Wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),tu=Wt.isTouch===1,cn(je,"wheel",vs),vf=[je,St,ei,vt],Pe.matchMedia?(r.matchMedia=function(u){var d=Pe.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},Pe.addEventListener("matchMediaInit",function(){nm(),bf()}),Pe.addEventListener("matchMediaRevert",function(){return tm()}),Pe.addEventListener("matchMedia",function(){Kr(0,1),os("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return cc(),cc})):console.warn("Requires GSAP 3.11.0 or later"),cc(),cn(St,"scroll",vs);var n=vt.hasAttribute("style"),i=vt.style,s=i.borderTopStyle,a=Pe.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Zi(vt),nn.m=Math.round(o.top+nn.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),mo=setInterval(yh,250),Pe.delayedCall(.5,function(){return go=0}),cn(St,"touchcancel",Ci),cn(vt,"touchstart",Ci),vo(cn,St,"pointerdown,touchstart,mousedown",vh),vo(cn,St,"pointerup,touchend,mouseup",xh),eu=Pe.utils.checkPrefix("transform"),rl.push(eu),Is=yn(),El=Pe.delayedCall(.2,Kr).pause(),Ns=[St,"visibilitychange",function(){var u=je.innerWidth,d=je.innerHeight;St.hidden?(ph=u,mh=d):(ph!==u||mh!==d)&&Ea()},St,"DOMContentLoaded",Kr,je,"load",Kr,je,"resize",Ea],_o(cn),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<et.length;l+=3)xo(ln,et[l],et[l+1]),xo(ln,et[l],et[l+2])}else if(St){var c=function u(){r.enable(),St.removeEventListener("DOMContentLoaded",u)};St.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(oc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(mo)||(mo=i)&&setInterval(yh,i),"ignoreMobileResize"in n&&(tu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(_o(ln)||_o(cn,n.autoRefreshEvents||"none"),Wp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Un(n),a=et.indexOf(s),o=ss(s);~a&&et.splice(a,o?6:2),i&&(o?Fi.unshift(je,i,vt,i,ei,i):Fi.unshift(s,i))},r.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Qn(n)?Un(n):n).getBoundingClientRect(),o=a[s?ns:is]*i||0;return s?a.right-o>0&&a.left+o<je.innerWidth:a.bottom-o>0&&a.top+o<je.innerHeight},r.positionInViewport=function(n,i,s){Qn(n)&&(n=Un(n));var a=n.getBoundingClientRect(),o=a[s?ns:is],l=i==null?o/2:i in bl?bl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/je.innerWidth:(a.top+l)/je.innerHeight},r.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=as.killAll||[];as={},i.forEach(function(s){return s()})}},r})();Ge.version="3.15.1";Ge.saveStyles=function(r){return r?Ka(r).forEach(function(e){if(e&&e.style){var t=Jn.indexOf(e);t>=0&&Jn.splice(t,5),Jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),nu())}}):Jn};Ge.revert=function(r,e){return bf(!r,e)};Ge.create=function(r,e){return new Ge(r,e)};Ge.refresh=function(r){return r?Ea(!0):(Is||Ge.register())&&Kr(!0)};Ge.update=function(r){return++et.cache&&tr(r===!0?2:0)};Ge.clearScrollMemory=im;Ge.maxScroll=function(r,e){return Ii(r,e?Nn:nn)};Ge.getScrollFunc=function(r,e){return Nr(Un(r),e?Nn:nn)};Ge.getById=function(r){return ru[r]};Ge.getAll=function(){return Qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ge.isScrolling=function(){return!!gi};Ge.snapDirectional=Tf;Ge.addEventListener=function(r,e){var t=as[r]||(as[r]=[]);~t.indexOf(e)||t.push(e)};Ge.removeEventListener=function(r,e){var t=as[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ge.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=Pe.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(m){d.length||h.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Tn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Tn(s)&&(s=s(),cn(Ge,"refresh",function(){return s=e.batchMax()})),Ka(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ge.create(c))}),t};var Rh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},fc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Wt.isTouch?" pinch-zoom":""):"none",e===ei&&r(vt,t)},To={auto:1,scroll:1},Y_=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Pe.core.getCache(s),o=yn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(To[(l=hi(s)).overflowY]||To[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ss(s)&&(To[(l=hi(s)).overflowY]||To[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},am=function(e,t,n,i){return Wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Y_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(St,Wt.eventTypes[0],Ph,!1,!0)},onDisable:function(){return ln(St,Wt.eventTypes[0],Ph,!0)}})},q_=/(input|label|select|textarea)/i,Ch,Ph=function(e){var t=q_.test(e.target.tagName);(t||Ch)&&(e._gsapAllow=!0,Ch=t)},$_=function(e){qr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Un(e.target)||ei,u=Pe.core.globals().ScrollSmoother,d=u&&u.get(),f=vr&&(e.content&&Un(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Nr(c,nn),m=Nr(c,Nn),v=1,p=(Wt.isTouch&&je.visualViewport?je.visualViewport.scale*je.visualViewport.width:je.outerWidth)/je.innerWidth,g=0,x=Tn(i)?function(){return i(o)}:function(){return i||2.8},b,S,T=am(c,e.type,!0,s),w=function(){return S=!1},_=Ci,E=Ci,P=function(){l=Ii(c,nn),E=La(vr?1:0,l),n&&(_=La(0,Ii(c,Nn))),b=rs},R=function(){f._gsap.y=Ma(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(S){requestAnimationFrame(w);var j=Ma(o.deltaY/2),V=E(h.v-j);if(f&&V!==h.v+h.offset){h.offset=V-h.v;var C=Ma((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",h.cacheID=et.cache,tr()}return!0}h.offset&&R(),S=!0},N,U,L,z,Y=function(){P(),N.isActive()&&N.vars.scrollY>l&&(h()>l?N.progress(1)&&h(l):N.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return vr&&O.type==="touchmove"&&I()||v>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){S=!1;var O=v;v=Ma((je.visualViewport&&je.visualViewport.scale||1)/p),N.pause(),O!==v&&fc(c,v>1.01?!0:n?!1:"x"),U=m(),L=h(),P(),b=rs},e.onRelease=e.onGestureStart=function(O,j){if(h.offset&&R(),!j)z.restart(!0);else{et.cache++;var V=x(),C,ee;n&&(C=m(),ee=C+V*.05*-O.velocityX/.227,V*=Rh(m,C,ee,Ii(c,Nn)),N.vars.scrollX=_(ee)),C=h(),ee=C+V*.05*-O.velocityY/.227,V*=Rh(h,C,ee,Ii(c,nn)),N.vars.scrollY=E(ee),N.invalidate().duration(V).play(.01),(vr&&N.vars.scrollY>=l||C>=l-1)&&Pe.to({},{onUpdate:Y,duration:V})}a&&a(O)},e.onWheel=function(){N._ts&&N.pause(),yn()-g>1e3&&(b=0,g=yn())},e.onChange=function(O,j,V,C,ee){if(rs!==b&&P(),j&&n&&m(_(C[2]===j?U+(O.startX-O.x):m()+j-C[1])),V){h.offset&&R();var Ee=ee[2]===V,Oe=Ee?L+O.startY-O.y:h()+V-ee[1],$=E(Oe);Ee&&Oe!==$&&(L+=$-Oe),h($)}(V||j)&&tr()},e.onEnable=function(){fc(c,n?!1:"x"),Ge.addEventListener("refresh",Y),cn(je,"resize",Y),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),T.enable()},e.onDisable=function(){fc(c,!0),ln(je,"resize",Y),Ge.removeEventListener("refresh",Y),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new Wt(e),o.iOS=vr,vr&&!h()&&h(1),vr&&Pe.ticker.add(Ci),z=o._dc,N=Pe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sm(h,h(),function(){return N.pause()})},onUpdate:tr,onComplete:z.vars.onComplete}),o};Ge.sort=function(r){if(Tn(r))return Qe.sort(r);var e=je.pageYOffset||0;return Ge.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+je.innerHeight}),Qe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ge.observe=function(r){return new Wt(r)};Ge.normalizeScroll=function(r){if(typeof r>"u")return Ln;if(r===!0&&Ln)return Ln.enable();if(r===!1){Ln&&Ln.kill(),Ln=r;return}var e=r instanceof Wt?r:$_(r);return Ln&&Ln.target===e.target&&Ln.kill(),ss(e.target)&&(Ln=e),e};Ge.core={_getVelocityProp:jc,_inputObserver:am,_scrollers:et,_proxies:Fi,bridge:{ss:function(){gi||os("scrollStart"),gi=yn()},ref:function(){return Mn}}};$p()&&Pe.registerPlugin(Ge);var Lh="1.3.27";function om(r,e,t){return Math.max(r,Math.min(e,t))}function K_(r,e,t){return(1-t)*r+t*e}function Z_(r,e,t,n){return K_(r,e,1-Math.exp(-t*n))}function J_(r,e){return(r%e+e)%e}var Q_=class{constructor(){Fe(this,"isRunning",!1);Fe(this,"value",0);Fe(this,"from",0);Fe(this,"to",0);Fe(this,"currentTime",0);Fe(this,"lerp");Fe(this,"duration");Fe(this,"easing");Fe(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=om(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Z_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function j_(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var e0=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Fe(this,"width",0);Fe(this,"height",0);Fe(this,"scrollHeight",0);Fe(this,"scrollWidth",0);Fe(this,"debouncedResize");Fe(this,"wrapperResizeObserver");Fe(this,"contentResizeObserver");Fe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Fe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Fe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=j_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},lm=class{constructor(){Fe(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const t0=100/6,hr={passive:!1};function Dh(r,e){return r===1?t0:r===2?e:1}var n0=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Fe(this,"touchStart",{x:0,y:0});Fe(this,"lastDelta",{x:0,y:0});Fe(this,"window",{width:0,height:0});Fe(this,"emitter",new lm);Fe(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Fe(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Fe(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Fe(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Dh(n,this.window.width),s=Dh(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Fe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,hr),this.element.addEventListener("touchstart",this.onTouchStart,hr),this.element.addEventListener("touchmove",this.onTouchMove,hr),this.element.addEventListener("touchend",this.onTouchEnd,hr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,hr),this.element.removeEventListener("touchstart",this.onTouchStart,hr),this.element.removeEventListener("touchmove",this.onTouchMove,hr),this.element.removeEventListener("touchend",this.onTouchEnd,hr)}};const Ih=r=>Math.min(1,1.001-2**(-10*r));var i0=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:m=1,autoResize:v=!0,prevent:p,virtualScroll:g,overscroll:x=!0,autoRaf:b=!1,anchors:S=!1,autoToggle:T=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:E=_,stopInertiaOnNavigate:P=!1,respectReducedMotion:R=!0}={}){Fe(this,"_isScrolling",!1);Fe(this,"_isStopped",!1);Fe(this,"_isLocked",!1);Fe(this,"_preventNextNativeScrollEvent",!1);Fe(this,"_resetVelocityTimeout",null);Fe(this,"_rafId",null);Fe(this,"_isDraggingSelection",!1);Fe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Fe(this,"isTouching");Fe(this,"isIos");Fe(this,"time",0);Fe(this,"userData",{});Fe(this,"lastVelocity",0);Fe(this,"velocity",0);Fe(this,"direction",0);Fe(this,"options");Fe(this,"targetScroll");Fe(this,"animatedScroll");Fe(this,"animate",new Q_);Fe(this,"emitter",new lm);Fe(this,"dimensions");Fe(this,"virtualScroll");Fe(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Fe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Fe(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Fe(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Fe(this,"onPointerDown",r=>{r.button===1&&this.reset()});Fe(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>{var v,p,g,x,b;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent"))||u==="vertical"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-vertical"))||u==="horizontal"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-horizontal"))||i&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-touch"))||s&&((b=m.hasAttribute)==null?void 0:b.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,h=i&&n.type==="touchend";h&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Fe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Fe(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Lh,window.lenis||(window.lenis={}),window.lenis.version=Lh,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=Ih:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:h,wheelMultiplier:m,autoResize:v,prevent:p,virtualScroll:g,overscroll:x,autoRaf:b,anchors:S,autoToggle:T,allowNestedScroll:w,naiveDimensions:E,stopInertiaOnNavigate:P,respectReducedMotion:R},this.dimensions=new e0(r,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new n0(t,{touchMultiplier:h,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,h=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(m=f),m){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?S.left:S.top}const v=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),x=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);f=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof f=="number"){if(f+=h,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=om(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof a=="number"&&typeof o!="function"?o=Ih:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,f,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),v||this.emit(),v&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,d,f,h,m;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),a=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;d=r.scrollWidth,f=r.scrollHeight,h=r.clientWidth,m=r.clientHeight,o=d>h,l=f>m,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=h,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,h=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,g,x,b,S,T;if(v==="horizontal")p=Math.round(r.scrollLeft),g=d-h,x=e,b=s,S=o,T=c;else if(v==="vertical")p=Math.round(r.scrollTop),g=f-m,x=t,b=a,S=l,T=u;else return!1;return!T&&(p>=g||p<=0)?!0:(x>0?p<g:p>0)&&b&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?J_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const r0=[{id:"amuse",numeral:"I",title:"Amuse-Bouche",kicker:"Small plates & sharing",blurb:"The first bite sets the promise. Precise, cold-kitchen work built to be eaten in one or two mouthfuls."},{id:"appetisers",numeral:"II",title:"Appetisers",kicker:"Regional Indian starters",blurb:"Bold, spiced small plates to open the meal: fried crisp, finished with fresh herbs and lime."},{id:"mains",numeral:"III",title:"Mains",kicker:"Western · Italian · Regional Indian",blurb:"Hot-line cooking with discipline: sauces built properly, pasta cooked with nerve, plates that leave the pass clean."},{id:"stations",numeral:"IV",title:"Live Stations",kicker:"In full view of the guest",blurb:"Cooking as theatre. Carving, tossing, grilling and plating to order, while talking to the people you are cooking for."},{id:"confections",numeral:"V",title:"Confections",kicker:"Pastry & chocolate",blurb:"Where patience is non-negotiable. Tempered chocolate, set mousses and pâtisserie finished by hand."}],s0=JSON.parse(`[{"id":"mezze","featured":true,"category":"amuse","name":"Arabic Mezze Platter","short":"Ten Levantine components on one tray","description":"A ten-component Levantine spread, plated tray-style so every dip, crisp and crudité has its own place.","story":"Built like a map: cool labneh and smoky baba ganoush beside a sweet-hot muhammara and a vivid beetroot hummus, with sumac chickpeas, lavash, tortilla crisps, pita and crudités for crunch, and an arugula house salad served high in a coupe. Every element is portioned, garnished and placed with intent.","flavor":{"Freshness":85,"Acidity":65,"Spice":45,"Richness":55,"Texture":80},"components":["Labneh","Muhammara","Beetroot Hummus","Baba Ganoush","Sumac Chickpeas","Lavash","Tortilla Chips","Pita Bread","Crudités","Arugula House Salad"],"tags":["Levantine","Cold kitchen","Sharing"],"mood":{"accent":"#f0a73a","bg":"#170d03","name":"Saffron"},"images":["mezze-table","mezze-annotated","chef-mezze"]},{"id":"pate","featured":true,"category":"amuse","name":"Liver Pâté Canapé","short":"Silken pâté, crisp shell, textured glass","description":"Silken liver pâté piped into crisp tart shells, set on toasted pumpkin seeds over textured glass.","story":"A canapé is a test of control. The pâté is passed until completely smooth, piped at an even height and finished with a glossy garnish. Served on a bed of toasted pumpkin seeds over bubbled glass, so the light does half the plating.","flavor":{"Richness":85,"Salinity":60,"Crunch":70,"Acidity":30,"Finesse":90},"tags":["Canapé","Garde manger","Piping"],"mood":{"accent":"#9fd3e6","bg":"#040b10","name":"Glacier"},"images":["pate-canape","pate-canape-2"]},{"id":"phyllo","featured":true,"category":"amuse","name":"Forester Phyllo Blossoms","short":"Hors d’oeuvre from the Gala Dinner menu","description":"Buttery phyllo shells folded into blossoms and filled with a savoury mushroom mousse and sautéed spinach.","story":"The opening course of a gala menu. Sheets of phyllo are brushed, layered and shaped into open flowers, baked crisp, then filled with a woodland mushroom mousse. Served in a bamboo steamer with edible flowers, the forest presented as a small bite.","flavor":{"Earthiness":85,"Butter":75,"Crunch":80,"Herbal":55,"Finesse":70},"tags":["Gala Dinner","Pastry","Mushroom"],"mood":{"accent":"#9cc25a","bg":"#070c04","name":"Forest"},"images":["phyllo-blossoms","gala-menu"]},{"id":"stroganoff","featured":true,"category":"mains","name":"Chicken & Mushroom Stroganoff","short":"Gala Dinner main course","description":"Chicken and mushrooms in a velvet cream sauce, with buttery mash and honey-garlic glazed vegetables.","story":"The main course of the gala menu. The mushrooms are seared hard for colour before the sauce is built, and the cream is reduced slowly so it coats rather than floods. Plated alongside smooth mashed potato and vegetables glazed in a sweet and savoury honey-garlic reduction.","flavor":{"Umami":85,"Richness":80,"Earthiness":75,"Sweetness":35,"Comfort":95},"tags":["Gala Dinner","Sauce work","Continental"],"mood":{"accent":"#c8894b","bg":"#100804","name":"Umber"},"images":["stroganoff","forest-mushrooms","gala-menu"]},{"id":"carving","featured":true,"category":"stations","name":"The Carving Station","short":"Whole roasts, carved to order","description":"Whole roasts carved to order, surrounded by roasted roots, charred citrus and seasonal greens.","story":"A carving station is part kitchen, part stage. Whole birds and joints are roasted, rested and carved in front of the guest, with a ring of roasted vegetables and citrus that keeps the board as generous at the end of service as it was at the start.","flavor":{"Roast":90,"Savoury":85,"Citrus":40,"Herbal":50,"Generosity":95},"tags":["Live station","Roasting","Buffet"],"mood":{"accent":"#ff9a2e","bg":"#140902","name":"Amber"},"images":["carving-station"]},{"id":"pasta","featured":true,"category":"stations","name":"Thirteen Handmade Pastas","short":"One cook, thirteen shapes, one Gala Dinner","description":"Thirteen pasta varieties, all mixed, rolled, cut and filled by hand by one cook for a Gala Dinner pasta bar.","story":"Ribbons first: fettuccine, tagliatelle, pappardelle. Then the filled shapes: mezzelune, cappelletti, agnolotti. Then the small ones: sorpresine, barchette, farfalle. Naturally coloured doughs, all single-handed. \\"The ribbons teach you the dough. The filled shapes teach you patience, and that a rushed seal always shows.\\"","flavor":{"Craft":98,"Patience":95,"Colour":85,"Texture":80,"Precision":90},"tags":["Pasta fresca","Solo build","Gala Dinner"],"mood":{"accent":"#f0cd4a","bg":"#0f0b03","name":"Semolina"},"images":["pasta-bar","pasta-gala","pasta-bar-wide"],"video":"pasta-bar"},{"id":"chicken65","featured":true,"category":"appetisers","name":"Chicken 65","short":"Chennai’s fiery fried chicken","description":"Chicken marinated in chilli, ginger and curry leaf, fried crisp and finished with a tempered glaze and lime.","story":"Regional Indian food, cooked with the same precision as the Western menu. The marinade is balanced for heat and tang, the fry is done in two stages for a crunch that survives the glaze, and the plate is finished with fresh herbs and lime.","flavor":{"Heat":85,"Tang":65,"Crunch":85,"Aroma":80,"Spice":90},"tags":["South Indian","Fry","Tempering"],"mood":{"accent":"#ff5e3a","bg":"#140503","name":"Chilli"},"images":["chicken-65-slate"]},{"id":"salad","featured":true,"category":"stations","name":"Salad on the Go","short":"Crisp, bright and built for service","description":"Crisp leaves, pomegranate, shaved cheese and a bright vinaigrette, made fresh and fast for high-volume service.","story":"Freshness at volume. Leaves washed, spun and kept cold, dressings emulsified per batch, and garnishes such as pomegranate, cheese and microgreens placed so every bowl looks like the first one.","flavor":{"Freshness":95,"Acidity":70,"Crunch":75,"Lightness":90,"Colour":80},"tags":["Garde manger","Grab & go","Volume"],"mood":{"accent":"#4fd1a0","bg":"#03100b","name":"Verdant"},"images":["salad-slate"]},{"id":"patisserie","featured":true,"category":"confections","name":"Paris-Brest, Choux & Crème Brûlée","short":"Three classics of French pâtisserie","description":"A cream-filled Paris-Brest ring, velvet-coated choux finished with edible flowers, and a torched crème brûlée.","story":"Three classical techniques on one table: choux paste piped into a ring and baked hollow and crisp for the Paris-Brest, then filled with cream; choux buns coated in a velvet spray for a matte, mossy finish; and a custard set gently and torched to a glass-thin crust.","flavor":{"Sweetness":75,"Cream":85,"Crunch":55,"Finesse":90,"Vanilla":70},"tags":["Pâtisserie","Choux","Entremets"],"mood":{"accent":"#c98ae0","bg":"#0c0512","name":"Orchid"},"images":["patisserie","bonbons"]},{"id":"gianduja","featured":true,"category":"confections","name":"Gianduja Mousse","short":"30% hazelnut · 70% chocolate","description":"Thirty percent hazelnut, seventy percent chocolate: a glossy set mousse finished with a lace tuile and fresh fruit.","story":"Gianduja is Piedmont’s marriage of hazelnut and chocolate. Here it is folded into a mousse with a 30/70 balance, set until it slices clean, and finished with a crisp lace tuile and fruit for acidity.","flavor":{"Chocolate":90,"Nuttiness":80,"Sweetness":60,"Silkiness":90,"Bitterness":45},"tags":["Mousse","Chocolate","Plated dessert"],"mood":{"accent":"#d99a62","bg":"#0d0603","name":"Cacao"},"images":["gianduja-mousse"]},{"id":"cheese","category":"amuse","name":"Cheese Board Under Glass","short":"Cheeses, fruit, nuts & crackers","description":"A curated cheese board served under a glass cloche: hard and soft cheeses, fruit, nuts, olives and crackers.","story":"Cheese service is about temperature, cut and rhythm. Each cheese is cut to suit its texture and arranged from mild to bold, then paired with fruit, nuts and crackers so the guest can build every bite.","flavor":{"Richness":80,"Salinity":65,"Sweetness":40,"Texture":75,"Pairing":90},"tags":["Fromagerie","Presentation"],"mood":{"accent":"#e8c35c","bg":"#0e0b04","name":"Brie"},"images":["cheese-cloche"]},{"id":"glazed-chicken","category":"mains","name":"Roast Chicken","short":"Pan jus, scored potato, asparagus","description":"Roast chicken glazed with its pan jus, with charred asparagus, herbed rice and scored potato on a fluted plate.","story":"A Western main plated for symmetry: protein dead centre, a glaze reduced until it mirrors the light, asparagus laid in parallel and the starch shaped beneath. Clean rim, no smears.","flavor":{"Savoury":85,"Sweetness":45,"Char":60,"Herbal":50,"Balance":85},"tags":["Western","Glaze","Plating"],"mood":{"accent":"#e2a443","bg":"#100903","name":"Lacquer"},"images":["glazed-chicken"]},{"id":"awadhi","featured":true,"category":"mains","name":"Awadhi Thali","short":"A Lucknowi feast on brass","description":"A full Awadhi thali on brass: galouti and tikka to begin, then biryani, korma and sides in katoris, with sheermal.","story":"Awadhi cooking is about slow, layered aroma. The thali is built course by course: a kebab plate to begin, then a brass thali with fragrant pulao topped with fried onions, curries and raita in individual katoris, crisp rolls and breads on the side. It is styled on red cloth with whole spices, makhana and wheat sheaves, so the presentation tells the story before the first bite.","flavor":{"Aroma":95,"Richness":85,"Spice":70,"Warmth":85,"Festivity":95},"tags":["Awadhi","Regional Indian","Thali"],"mood":{"accent":"#ff6a3d","bg":"#140604","name":"Vermilion"},"images":["awadhi-thali","festive-platter"]},{"id":"assassina","featured":true,"category":"mains","name":"Spaghetti all'Assassina","short":"Pan-charred, risotto-style spaghetti from Bari","description":"Bari's \\"assassin's\\" spaghetti, cooked straight in a ferociously hot pan until the strands char, crackle and caramelise.","story":"No pot of boiling water. Raw spaghetti goes into a blistering pan with garlic, chilli and oil, then is fed ladle by ladle with a light tomato broth. The skill is nerve: letting the pasta catch and blacken without burning, so every strand carries a smoky crunch around a soft, sticky centre. Finished with Parmigiano and parsley.","flavor":{"Smoke":85,"Heat":70,"Umami":80,"Acidity":45,"Crunch":75},"tags":["Pugliese","Pan-charred","Tomato brodo"],"mood":{"accent":"#ff4a1c","bg":"#1a0604","name":"Ember"},"images":["assassina"]},{"id":"paneer-cafreal","category":"appetisers","name":"Paneer Cafreal","short":"Goan green masala, made with paneer","description":"Paneer in a Goan-style cafreal masala of fresh coriander, green chilli and spice, finished with lime.","story":"Cafreal is a Goan green masala: coriander, green chilli, garlic, ginger and whole spices ground fresh and cooked down until fragrant. Here it coats paneer, served on an oval plate with lime and herbs.","flavor":{"Herbal":90,"Heat":70,"Tang":65,"Aroma":85,"Freshness":80},"tags":["Goan","Regional Indian","Vegetarian"],"mood":{"accent":"#7fd36b","bg":"#06100a","name":"Coriander"},"images":["indian-plate"]},{"id":"mushroom-hara-pyaaz","category":"mains","name":"Mushroom Hara Pyaaz","short":"Mushrooms tossed with spring onion","description":"Mushrooms cooked in a spiced masala with fresh spring onion greens, finished with julienned vegetables and cream.","story":"A regional Indian vegetarian main built on the freshness of hara pyaaz (spring onion). The mushrooms are seared before going into the masala so they stay meaty, and the onion greens go in at the end for colour and bite.","flavor":{"Umami":85,"Spice":65,"Freshness":70,"Earthiness":80,"Comfort":85},"tags":["Regional Indian","Vegetarian"],"mood":{"accent":"#c8894b","bg":"#100804","name":"Umber"},"images":["indian-curry"]},{"id":"caesar","category":"stations","name":"The Caesar Salad Station","short":"Conceptualised & run as a live station","description":"A live Caesar station I conceptualised and ran: dressing emulsified to order, toppings built in front of the guest.","story":"Responsible for conceptualising and operating a live Caesar Salad Station, offering a unique and engaging dining experience. Crisp romaine, croutons, Parmesan and a full spread of toppings, assembled and dressed to order while talking guests through every element.","flavor":{"Umami":75,"Acidity":65,"Crunch":85,"Freshness":80,"Theatre":95},"tags":["Live station","Concept","Guest interaction"],"mood":{"accent":"#d8c27a","bg":"#0d0b05","name":"Parmesan"},"images":["caesar-station","caesar-mise"]},{"id":"pizza","category":"stations","name":"Hand-Tossed Pizza","short":"Stretched, tossed & fired to order","description":"Dough stretched and tossed by hand at the live counter, then fired to order in the oven.","story":"Italian at the counter: dough balls proofed for the day, opened and tossed by hand in front of guests, topped with restraint and fired until the cornicione blisters.","flavor":{"Char":75,"Chew":85,"Tomato":70,"Craft":90,"Theatre":95},"tags":["Italian","Live counter","Dough"],"mood":{"accent":"#ffb347","bg":"#120a03","name":"Hearth"},"images":["pizza-toss","dough-roll","pizza-oven"],"video":"pizza-toss-2"},{"id":"grill","category":"stations","name":"Fire & Grill","short":"Open flame and flambé, cooked in the moment","description":"Open-fire grilling and flambé at a live outdoor station, with flame, smoke and timing in front of the guest.","story":"Cooking over live fire is all about reading heat. Flare-ups are managed, not feared, the flambé is timed for the guest, and every piece comes off the grate with char outside and juice inside.","flavor":{"Smoke":95,"Char":90,"Heat":80,"Juiciness":80,"Theatre":100},"tags":["Live fire","Flambé","Outdoor"],"mood":{"accent":"#ff7a1a","bg":"#140602","name":"Flame"},"images":["flame-grill","flame-grill-2"],"video":"flambe"},{"id":"pani-puri","category":"stations","name":"Pani Puri Station","short":"Street-food classic, set up for service","description":"A live pani puri setup: crisp puris, spiced potato, and chilled tamarind and mint waters in jugs, assembled to order.","story":"Street food at hotel standard. Puris fried crisp and kept dry, pani spiced and chilled in jugs, and every filling, chutney and masala portioned into its own bowl, so each puri is assembled and served the second it is ordered.","flavor":{"Tang":90,"Spice":75,"Crunch":90,"Freshness":85,"Theatre":85},"tags":["Street food","Live station","Chaat"],"mood":{"accent":"#9cc25a","bg":"#070c04","name":"Mint"},"images":["spice-mise"]},{"id":"south-indian","category":"stations","name":"South Indian Breakfast","short":"A full poolside breakfast operation","description":"Running the South Indian breakfast operation: dosa to order with chutneys, podi and accompaniments.","story":"Breakfast service at scale. Batters fermented the night before, chutneys and podis prepared fresh, and dosas spread thin and crisp to order, with the mise en place laid out like a palette.","flavor":{"Tang":70,"Crispness":90,"Spice":60,"Freshness":85,"Comfort":90},"tags":["Regional Indian","Breakfast","Volume"],"mood":{"accent":"#7fd36b","bg":"#06100a","name":"Curry leaf"},"images":["south-indian","condiments"]},{"id":"bonbons","category":"confections","name":"Hand-Piped Bonbons","short":"Tempered shells, piped ganache","description":"Moulded chocolate bonbons: tempered shells filled by hand with piped ganache and sealed clean.","story":"Chocolate rewards discipline. Shells are tempered for snap and shine, filled with a piping bag one cavity at a time, and capped without a smear, so the finished bonbon releases with a mirror finish.","flavor":{"Chocolate":95,"Snap":85,"Sweetness":65,"Shine":90,"Precision":95},"tags":["Chocolate","Tempering","Moulding"],"mood":{"accent":"#e0a070","bg":"#0e0604","name":"Ganache"},"images":["bonbons","chocolate-piping"]},{"id":"truffles","category":"confections","name":"Gooseberry & Beet Botanicals","short":"Coconut, beetroot & gooseberry, sugar-rolled","description":"Hand-rolled botanicals of coconut, beetroot and gooseberry, finished in crystal sugar and packed into glass.","story":"A confection built on natural colour and tang. Coconut is cooked down with sugar, beetroot for its deep jewel colour and gooseberry for a sharp, fruity bite, then weighed, rolled by hand into identical spheres and coated in sugar for sparkle and crunch.","flavor":{"Sweetness":75,"Tang":80,"Coconut":85,"Earthiness":55,"Crunch":60},"tags":["Confection","Coconut","Gooseberry"],"mood":{"accent":"#d0487a","bg":"#12040a","name":"Beetroot"},"images":["gooseberry-beet"],"video":"truffle-jar"},{"id":"classic-mousse","category":"confections","name":"The Classical Mousse","short":"Plated for a menu tasting","description":"A classical chocolate mousse, set and plated for a menu tasting alongside its menu card.","story":"Mousse is air held in place: chocolate, eggs and cream folded with a light hand so the bubbles survive, then set until it slices clean. Plated for a menu tasting, presented with the menu card beside it.","flavor":{"Chocolate":85,"Silkiness":90,"Sweetness":60,"Lightness":80,"Finesse":85},"tags":["Mousse","Menu tasting"],"mood":{"accent":"#d99a62","bg":"#0d0603","name":"Cacao"},"images":["classic-mousse"]},{"id":"couscous-bowls","category":"amuse","name":"Couscous & Feta Bowls","short":"Pomegranate, cucumber sail, crumbled feta","description":"Individual couscous bowls with pomegranate, cucumber and crumbled feta, portioned identically for service.","story":"Cold-kitchen work at volume: every bowl filled to the same line, garnished in the same order, with a cucumber sail for height, so the hundredth bowl looks like the first.","flavor":{"Freshness":90,"Tang":60,"Texture":70,"Colour":85,"Uniformity":95},"tags":["Garde manger","Volume"],"mood":{"accent":"#4fd1a0","bg":"#03100b","name":"Verdant"},"images":["salad-bowls"]}]`),a0=[{value:2,suffix:"",label:"Years in luxury hotel kitchens"},{value:13,suffix:"",label:"Pastas handmade solo for one Gala Dinner"},{value:6,suffix:"",label:"Years running a culinary content platform"},{value:3,suffix:"",label:"Languages: English, Hindi, Bengali"}],o0=[{years:"2024 — Present",role:"STEP · Kitchen Operations",org:"The Oberoi Centre of Learning & Development · Trident Agra",image:"chef-mezze",points:["High-volume service in line with SOPs, quality benchmarks and hygiene standards","Oversaw Western cuisine operations, Italian and Indian food","Led live stations in direct view of guests","Produced salads, cold cuts and handcrafted pastas","Worked with Finance on buffet & menu costing, food cost control and pricing","Built Excel costing; used AI tools for menu documentation & presentation decks"]},{years:"Certification",role:"Contemporary Equipment Training",org:"Welbilt Group",image:"pizza-oven",points:["Commercial kitchen equipment and its correct, efficient use"]},{years:"6 Years",role:"Creator",org:"Independent culinary content platform · @finelyytossed",image:"chef-plate",points:["Running an independent culinary content platform alongside training and studies"]},{years:"2024 — 2027",role:"Bachelor's Degree in Tourism Studies",org:"IGNOU · Tourism & Travel Services Management",image:"chef-book",points:["Pursuing alongside full-time kitchen training"]},{years:"2023",role:"Higher Secondary Education, Humanities",org:"Don Bosco School, Agartala, Tripura",image:"chef-bw",points:[]}],l0=["STEP of the Month, Trident Agra","Kudos for Managing Operations","Guest Recognitions","Certification for Grooming","Kudos for Guest Excellence","Appreciation for Cross-Departmental Support"],c0=["Western Cuisine","Italian Cuisine","Handmade Pasta","Live Stations","Regional Indian","High-Volume Service","Food Safety & Hygiene","SOP Adherence","Luxury Hospitality","Menu Costing","Food Cost Control","Pricing Support","Microsoft Excel","Presentation Decks","Conducting Training","Impeccable Grooming","Guest Interaction","Team Collaboration"],u0={cats:r0,dishes:s0,stats:a0,journey:o0,awards:l0,skills:c0};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="187",f0=0,Nh=1,h0=2,al=1,d0=2,Ta=3,ls=0,Wn=1,Ji=2,Ys=0,Oa=1,wl=2,Uh=3,Fh=4,p0=5,Us=100,m0=101,g0=102,_0=103,v0=104,x0=200,S0=201,M0=202,y0=203,cm=204,um=205,E0=206,T0=207,b0=208,w0=209,A0=210,R0=211,C0=212,P0=213,L0=214,ou=0,lu=1,cu=2,Ja=3,uu=4,fu=5,hu=6,du=7,fm=0,D0=1,I0=2,nr=0,hm=1,dm=2,pm=3,mm=4,gm=5,_m=6,vm=7,xm=300,ea=301,Qa=302,hc=303,dc=304,pu=1e3,ji=1001,mu=1002,dn=1003,N0=1004,bo=1005,zn=1006,pc=1007,er=1008,di=1009,Sm=1010,Mm=1011,ja=1012,Af=1013,ki=1014,Ni=1015,Hi=1016,Rf=1017,Cf=1018,ta=1020,ym=35902,Em=35899,Tm=1021,bm=1022,Ui=1023,Ur=1026,wr=1027,wm=1028,Pf=1029,cs=1030,Lf=1031,Df=1033,ol=33776,ll=33777,cl=33778,ul=33779,gu=35840,_u=35841,vu=35842,xu=35843,Su=36196,Mu=37492,yu=37496,Eu=37488,Tu=37489,Al=37490,bu=37491,wu=37808,Au=37809,Ru=37810,Cu=37811,Pu=37812,Lu=37813,Du=37814,Iu=37815,Nu=37816,Uu=37817,Fu=37818,Ou=37819,Bu=37820,zu=37821,ku=36492,Hu=36494,Gu=36495,Vu=36283,Wu=36284,Rl=36285,Xu=36286,U0=3200,Oh=0,F0=1,Sr="",Fn="srgb",Cl="srgb-linear",Pl="linear",Mt="srgb",mc=7680,O0=519,B0=512,z0=513,k0=514,Am=515,H0=516,G0=517,Rm=518,Cm=519,V0=35044,Bh="300 es",Ti=2e3,Ll=2001;function W0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function eo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function X0(){const r=eo("canvas");return r.style.display="block",r}const zh={};function kh(...r){const e="THREE."+r.shift();console.log(e,...r)}function Pm(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ve(...r){r=Pm(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function pt(...r){r=Pm(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function fl(...r){const e=r.join(" ");e in zh||(zh[e]=!0,Ve(...r))}function Y0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const q0={[ou]:ou,[cu]:hu,[uu]:uu,[Ja]:fu,[lu]:lu,[hu]:cu,[du]:du,[fu]:Ja};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hh=1234567;const Ba=Math.PI/180,to=180/Math.PI;function sa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function If(r,e){return(r%e+e)%e}function $0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function K0(r,e,t){return r!==e?(t-r)/(e-r):0}function za(r,e,t){return(1-t)*r+t*e}function Z0(r,e,t,n){return za(r,e,1-Math.exp(-t*n))}function J0(r,e=1){return e-Math.abs(If(r,e*2)-e)}function Q0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function j0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ev(r,e){return r+Math.floor(Math.random()*(e-r+1))}function tv(r,e){return r+Math.random()*(e-r)}function nv(r){return r*(.5-Math.random())}function iv(r){r!==void 0&&(Hh=r);let e=Hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rv(r){return r*Ba}function sv(r){return r*to}function av(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function ov(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Lm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lv(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*m,l*h,o*c);break;case"YXY":r.set(l*h,o*u,l*m,o*c);break;case"ZYZ":r.set(l*m,l*h,o*u,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dm(r,e){if(e.constructor===Float32Array)return r;const t=Nf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Im(r,e){if(e.constructor===Float32Array)return r;const t=Nf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}const cv={DEG2RAD:Ba,RAD2DEG:to,generateUUID:sa,clamp:at,euclideanModulo:If,mapLinear:$0,inverseLerp:K0,lerp:za,damp:Z0,pingpong:J0,smoothstep:Q0,smootherstep:j0,randInt:ev,randFloat:tv,randFloatSpread:nv,seededRandom:iv,degToRad:rv,radToDeg:sv,isPowerOfTwo:av,ceilPowerOfTwo:ov,floorPowerOfTwo:Lm,setQuaternionFromProperEuler:lv,normalize:Im,denormalize:Dm},Wf=class Wf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wf.prototype.isVector2=!0;let ut=Wf;class aa{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=s[a+0],h=s[a+1],m=s[a+2],v=s[a+3];if(d!==v||l!==f||c!==h||u!==m){let p=l*f+c*h+u*m+d*v;p<0&&(f=-f,h=-h,m=-m,v=-v,p=-p);let g=1-o;if(p<.9995){const x=Math.acos(p),b=Math.sin(x);g=Math.sin(g*x)/b,o=Math.sin(o*x)/b,l=l*g+f*o,c=c*g+h*o,u=u*g+m*o,d=d*g+v*o}else{l=l*g+f*o,c=c*g+h*o,u=u*g+m*o,d=d*g+v*o;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],m=s[a+3];return e[t]=o*m+u*d+l*h-c*f,e[t+1]=l*m+u*f+c*d-o*h,e[t+2]=c*m+u*h+o*f-l*d,e[t+3]=u*m-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xf=class Xf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xf.prototype.isVector3=!0;let K=Xf;const gc=new K,Gh=new aa,Yf=class Yf{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],m=n[8],v=i[0],p=i[3],g=i[6],x=i[1],b=i[4],S=i[7],T=i[2],w=i[5],_=i[8];return s[0]=a*v+o*x+l*T,s[3]=a*p+o*b+l*w,s[6]=a*g+o*S+l*_,s[1]=c*v+u*x+d*T,s[4]=c*p+u*b+d*w,s[7]=c*g+u*S+d*_,s[2]=f*v+h*x+m*T,s[5]=f*p+h*b+m*w,s[8]=f*g+h*S+m*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,m=t*d+n*f+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_c.makeScale(e,t)),this}rotate(e){return fl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return fl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yf.prototype.isMatrix3=!0;let qe=Yf;const _c=new qe,Vh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uv(){const r={enabled:!0,workingColorSpace:Cl,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Mt&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sr?Pl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Cl]:{primaries:e,whitePoint:n,transfer:Pl,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),r}const ot=uv();function ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xs;class fv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=eo("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ir(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hv=0;class Uf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(vc(i[a].image)):s.push(vc(i[a]))}else s=vc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function vc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let dv=0;const xc=new K;class wn extends ds{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,n=ji,i=ji,s=zn,a=er,o=Ui,l=di,c=wn.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=sa(),this.name="",this.source=new Uf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pu:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case mu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pu:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case mu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=xm;wn.DEFAULT_ANISOTROPY=1;const qf=class qf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(h+1)/2,T=(g+1)/2,w=(u+f)/4,_=(d+v)/4,E=(m+p)/4;return b>S&&b>T?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=w/n,s=_/n):S>T?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=E/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=_/s,i=E/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-m)*(p-m)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(d-v)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qf.prototype.isVector4=!0;let kt=qf;class pv extends ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new wn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Uf(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends pv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nm extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mv extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Bl=class Bl{constructor(e,t,n,i,s,a,o,l,c,u,d,f,h,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,f,h,m,v,p)}set(e,t,n,i,s,a,o,l,c,u,d,f,h,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bl().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,m=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+m*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=m+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,m=c*u,v=c*d;t[0]=f+v*o,t[4]=m*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-m,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,m=c*u,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=m+h*o,t[1]=h+m*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,m=o*u,v=o*d;t[0]=l*u,t[4]=m*c-h,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=h*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-f*d,t[8]=m*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+m,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,h=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=a*u,t[9]=h*d-m,t[2]=m*d-h,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gv,e,_v)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),dr.crossVectors(n,Kn),dr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),dr.crossVectors(n,Kn)),dr.normalize(),wo.crossVectors(Kn,dr),i[0]=dr.x,i[4]=wo.x,i[8]=Kn.x,i[1]=dr.y,i[5]=wo.y,i[9]=Kn.y,i[2]=dr.z,i[6]=wo.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],m=n[2],v=n[6],p=n[10],g=n[14],x=n[3],b=n[7],S=n[11],T=n[15],w=i[0],_=i[4],E=i[8],P=i[12],R=i[1],I=i[5],N=i[9],U=i[13],L=i[2],z=i[6],Y=i[10],O=i[14],j=i[3],V=i[7],C=i[11],ee=i[15];return s[0]=a*w+o*R+l*L+c*j,s[4]=a*_+o*I+l*z+c*V,s[8]=a*E+o*N+l*Y+c*C,s[12]=a*P+o*U+l*O+c*ee,s[1]=u*w+d*R+f*L+h*j,s[5]=u*_+d*I+f*z+h*V,s[9]=u*E+d*N+f*Y+h*C,s[13]=u*P+d*U+f*O+h*ee,s[2]=m*w+v*R+p*L+g*j,s[6]=m*_+v*I+p*z+g*V,s[10]=m*E+v*N+p*Y+g*C,s[14]=m*P+v*U+p*O+g*ee,s[3]=x*w+b*R+S*L+T*j,s[7]=x*_+b*I+S*z+T*V,s[11]=x*E+b*N+S*Y+T*C,s[15]=x*P+b*U+S*O+T*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],v=e[7],p=e[11],g=e[15],x=l*h-c*f,b=o*h-c*d,S=o*f-l*d,T=a*h-c*u,w=a*f-l*u,_=a*d-o*u;return t*(v*x-p*b+g*S)-n*(m*x-p*T+g*w)+i*(m*b-v*T+g*_)-s*(m*S-v*w+p*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],v=e[13],p=e[14],g=e[15],x=t*o-n*a,b=t*l-i*a,S=t*c-s*a,T=n*l-i*o,w=n*c-s*o,_=i*c-s*l,E=u*v-d*m,P=u*p-f*m,R=u*g-h*m,I=d*p-f*v,N=d*g-h*v,U=f*g-h*p,L=x*U-b*N+S*I+T*R-w*P+_*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=(o*U-l*N+c*I)*z,e[1]=(i*N-n*U-s*I)*z,e[2]=(v*_-p*w+g*T)*z,e[3]=(f*w-d*_-h*T)*z,e[4]=(l*R-a*U-c*P)*z,e[5]=(t*U-i*R+s*P)*z,e[6]=(p*S-m*_-g*b)*z,e[7]=(u*_-f*S+h*b)*z,e[8]=(a*N-o*R+c*E)*z,e[9]=(n*R-t*N-s*E)*z,e[10]=(m*w-v*S+g*x)*z,e[11]=(d*S-u*w-h*x)*z,e[12]=(o*P-a*I-l*E)*z,e[13]=(t*I-n*P+i*E)*z,e[14]=(v*b-m*T-p*x)*z,e[15]=(u*T-d*b+f*x)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,m=s*d,v=a*u,p=a*d,g=o*d,x=l*c,b=l*u,S=l*d,T=n.x,w=n.y,_=n.z;return i[0]=(1-(v+g))*T,i[1]=(h+S)*T,i[2]=(m-b)*T,i[3]=0,i[4]=(h-S)*w,i[5]=(1-(f+g))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(m+b)*_,i[9]=(p-x)*_,i[10]=(1-(f+v))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ss.set(i[0],i[1],i[2]).length();const o=Ss.set(i[4],i[5],i[6]).length(),l=Ss.set(i[8],i[9],i[10]).length();s<0&&(a=-a),vi.copy(this);const c=1/a,u=1/o,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,t.setFromRotationMatrix(vi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ti,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let m,v;if(l)m=s/(a-s),v=a*s/(a-s);else if(o===Ti)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ll)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ti,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i);let m,v;if(l)m=1/(a-s),v=a/(a-s);else if(o===Ti)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ll)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Bl.prototype.isMatrix4=!0;let Ft=Bl;const Ss=new K,vi=new Ft,gv=new K(0,0,0),_v=new K(1,1,1),dr=new K,wo=new K,Kn=new K,Xh=new Ft,Yh=new aa;class us{constructor(e=0,t=0,n=0,i=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class Ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vv=0;const qh=new K,Ms=new aa,Vi=new Ft,Ao=new K,ha=new K,xv=new K,Sv=new aa,$h=new K(1,0,0),Kh=new K(0,1,0),Zh=new K(0,0,1),Jh={type:"added"},Mv={type:"removed"},ys={type:"childadded",child:null},Sc={type:"childremoved",child:null};class Xn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new K,t=new us,n=new aa,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new qe}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(ha,Ao,this.up):Vi.lookAt(Ao,ha,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Ms.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),ys.child=e,this.dispatchEvent(ys),ys.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mv),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,xv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xn.DEFAULT_UP=new K(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zr extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yv={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function yc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=If(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=yc(a,s,e+1/3),this.g=yc(a,s,e),this.b=yc(a,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const n=Um[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return ot.workingToColorSpace(Sn.copy(this),e),Math.round(at(Sn.r*255,0,255))*65536+Math.round(at(Sn.g*255,0,255))*256+Math.round(at(Sn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Sn.copy(this),t);const n=Sn.r,i=Sn.g,s=Sn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Fn){ot.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,i=Sn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(Ro);const n=za(pr.h,Ro.h,t),i=za(pr.s,Ro.s,t),s=za(pr.l,Ro.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new ct;ct.NAMES=Um;class Ev extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xi=new K,Wi=new K,Ec=new K,Xi=new K,Es=new K,Ts=new K,Qh=new K,Tc=new K,bc=new K,wc=new K,Ac=new kt,Rc=new kt,Cc=new kt;class Ei{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),Wi.subVectors(n,t),Ec.subVectors(e,t);const a=xi.dot(xi),o=xi.dot(Wi),l=xi.dot(Ec),c=Wi.dot(Wi),u=Wi.dot(Ec),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,m=(a*u-o*l)*f;return s.set(1-h-m,m,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,n),Cc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ac,s.x),a.addScaledVector(Rc,s.y),a.addScaledVector(Cc,s.z),a}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),Wi.subVectors(e,t),xi.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),xi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Es.subVectors(i,n),Ts.subVectors(s,n),Tc.subVectors(e,n);const l=Es.dot(Tc),c=Ts.dot(Tc);if(l<=0&&c<=0)return t.copy(n);bc.subVectors(e,i);const u=Es.dot(bc),d=Ts.dot(bc);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Es,a);wc.subVectors(e,s);const h=Es.dot(wc),m=Ts.dot(wc);if(m>=0&&h<=m)return t.copy(s);const v=h*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ts,o);const p=u*m-h*d;if(p<=0&&d-u>=0&&h-m>=0)return Qh.subVectors(s,i),o=(d-u)/(d-u+(h-m)),t.copy(i).addScaledVector(Qh,o);const g=1/(p+v+f);return a=v*g,o=f*g,t.copy(n).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ro{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Po.subVectors(this.max,da),bs.subVectors(e.a,da),ws.subVectors(e.b,da),As.subVectors(e.c,da),mr.subVectors(ws,bs),gr.subVectors(As,ws),Hr.subVectors(bs,As);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Hr.z,Hr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Hr.z,0,-Hr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Hr.y,Hr.x,0];return!Pc(t,bs,ws,As,Po)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,bs,ws,As,Po))?!1:(Lo.crossVectors(mr,gr),t=[Lo.x,Lo.y,Lo.z],Pc(t,bs,ws,As,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new K,new K,new K,new K,new K,new K,new K,new K],Si=new K,Co=new ro,bs=new K,ws=new K,As=new K,mr=new K,gr=new K,Hr=new K,da=new K,Po=new K,Lo=new K,Gr=new K;function Pc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Gr.fromArray(r,s);const o=i.x*Math.abs(Gr.x)+i.y*Math.abs(Gr.y)+i.z*Math.abs(Gr.z),l=e.dot(Gr),c=t.dot(Gr),u=n.dot(Gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Kt=new K,Do=new ut;let Tv=0;class rr extends ds{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=V0,this.updateRanges=[],this.gpuType=Ni,this.version=0,this._normalizationScale=e!==void 0?Nf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Dm(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Im(e,this.array)}}class Fm extends rr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Om extends rr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sr extends rr{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bv=new ro,pa=new K,Lc=new K;class Vl{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const t=pa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Lc)),this.expandByPoint(pa.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wv=0;const ci=new Ft,Dc=new Xn,Rs=new K,Zn=new ro,ma=new ro,on=new K;class cr extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W0(e)?Om:Fm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ma.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Zn.min,ma.min),Zn.expandByPoint(on),on.addVectors(Zn.max,ma.max),Zn.expandByPoint(on)):(Zn.expandByPoint(ma.min),Zn.expandByPoint(ma.max))}Zn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)on.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(on));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),on.add(Rs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rr(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new K,l[P]=new K;const u=new K,d=new K,f=new K,h=new ut,m=new ut,v=new ut,p=new K,g=new K;function x(P,R,I){c[P]=c[R]=c[I]=1,u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,R),f.fromBufferAttribute(n,I),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,R),v.fromBufferAttribute(s,I),d.sub(u),f.sub(u),m.sub(h),v.sub(h);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(N),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(N),o[P].add(p),o[R].add(p),o[I].add(p),l[P].add(g),l[R].add(g),l[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,R=b.length;P<R;++P){const I=b[P],N=I.start,U=I.count;for(let L=N,z=N+U;L<z;L+=3)x(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new K,T=new K,w=new K,_=new K;function E(P){w.fromBufferAttribute(i,P),_.copy(w);const R=o[P];S.copy(R),S.sub(w.multiplyScalar(w.dot(R))).normalize(),T.crossVectors(_,R);const N=T.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,N)}for(let P=0,R=n.count;P<R;++P)c[P]&&E(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new rr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,d=new K;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,m=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let g=0;g<u;g++)f[m++]=c[h++]}return new rr(f,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ic=new K,Av=new K,Rv=new qe;class xr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ic.subVectors(n,t).cross(Av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Ic),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rv.getNormalMatrix(e),i=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Cv=0;class so extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=Oa,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cm,this.blendDst=um,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mc,this.stencilZFail=mc,this.stencilZPass=mc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qi=new K,Nc=new K,Io=new K,No=new K;class Of{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Nc.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),No.copy(this.origin).sub(Nc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Io),o=No.dot(this.direction),l=-No.dot(Io),c=No.lengthSq(),u=Math.abs(1-a*a);let d,f,h,m;if(u>0)if(d=a*l-o,f=a*o-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const v=1/u;d*=v,f*=v,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Nc).addScaledVector(Io,f),h}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,m=t.x-a.x,v=t.y-a.y,p=t.z-a.z,g=n.x-a.x,x=n.y-a.y,b=n.z-a.z,S=Math.abs(l),T=Math.abs(c),w=Math.abs(u);let _,E,P,R,I,N,U,L,z,Y,O,j;if(S>=T&&S>=w?(P=l,N=d,z=m,j=g,l>=0?(_=c,E=u,R=f,I=h,U=v,L=p,Y=x,O=b):(_=u,E=c,R=h,I=f,U=p,L=v,Y=b,O=x)):T>=w?(P=c,N=f,z=v,j=x,c>=0?(_=u,E=l,R=h,I=d,U=p,L=m,Y=b,O=g):(_=l,E=u,R=d,I=h,U=m,L=p,Y=g,O=b)):(P=u,N=h,z=p,j=b,u>=0?(_=l,E=c,R=d,I=f,U=m,L=v,Y=g,O=x):(_=c,E=l,R=f,I=d,U=v,L=m,Y=x,O=g)),P===0)return null;const V=_/P,C=E/P,ee=1/P,Ee=R-V*N,Oe=I-C*N,$=U-V*z,fe=L-C*z,ie=Y-V*j,oe=O-C*j,ae=ie*fe-oe*$,Se=Ee*oe-Oe*ie,Xe=$*Oe-fe*Ee;if(i){if(ae<0||Se<0||Xe<0)return null}else if((ae<0||Se<0||Xe<0)&&(ae>0||Se>0||Xe>0))return null;const Te=ae+Se+Xe;if(Te===0)return null;const ke=ee*(ae*N+Se*z+Xe*j);return(Te>0?ke<0:ke>0)?null:this.at(ke/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pv extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jh=new Ft,Vr=new Of,Uo=new Vl,ed=new K,Fo=new K,Oo=new K,Bo=new K,Uc=new K,zo=new K,td=new K,ko=new K;class Bi extends Xn{constructor(e=new cr,t=new Pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Uc.fromBufferAttribute(d,e),a?zo.addScaledVector(Uc,u):zo.addScaledVector(Uc.sub(t),u))}t.add(zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(Uo.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Uo,ed)===null||Vr.origin.distanceToSquared(ed)>(e.far-e.near)**2))&&(jh.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const p=f[m],g=a[p.materialIndex],x=Math.max(p.start,h.start),b=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let S=x,T=b;S<T;S+=3){const w=o.getX(S),_=o.getX(S+1),E=o.getX(S+2);i=Ho(this,g,e,n,c,u,d,w,_,E),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let p=m,g=v;p<g;p+=3){const x=o.getX(p),b=o.getX(p+1),S=o.getX(p+2);i=Ho(this,a,e,n,c,u,d,x,b,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const p=f[m],g=a[p.materialIndex],x=Math.max(p.start,h.start),b=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let S=x,T=b;S<T;S+=3){const w=S,_=S+1,E=S+2;i=Ho(this,g,e,n,c,u,d,w,_,E),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let p=m,g=v;p<g;p+=3){const x=p,b=p+1,S=p+2;i=Ho(this,a,e,n,c,u,d,x,b,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Lv(r,e,t,n,i,s,a,o){let l;if(e.side===Wn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ls,o),l===null)return null;ko.copy(o),ko.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:r}}function Ho(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Fo),r.getVertexPosition(l,Oo),r.getVertexPosition(c,Bo);const u=Lv(r,e,t,n,Fo,Oo,Bo,td);if(u){const d=new K;Ei.getBarycoord(td,Fo,Oo,Bo,d),i&&(u.uv=Ei.getInterpolatedAttribute(i,o,l,c,d,new ut)),s&&(u.uv1=Ei.getInterpolatedAttribute(s,o,l,c,d,new ut)),a&&(u.normal=Ei.getInterpolatedAttribute(a,o,l,c,d,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};Ei.getNormal(Fo,Oo,Bo,f.normal),u.face=f,u.barycoord=d}return u}class Dv extends wn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=dn,u=dn,d,f){super(null,a,o,l,c,u,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wr=new Vl,Iv=new ut(.5,.5),Go=new K;class Dl{constructor(e=new xr,t=new xr,n=new xr,i=new xr,s=new xr,a=new xr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],m=s[8],v=s[9],p=s[10],g=s[11],x=s[12],b=s[13],S=s[14],T=s[15];if(i[0].setComponents(c-a,h-u,g-m,T-x).normalize(),i[1].setComponents(c+a,h+u,g+m,T+x).normalize(),i[2].setComponents(c+o,h+d,g+v,T+b).normalize(),i[3].setComponents(c-o,h-d,g-v,T-b).normalize(),n)i[4].setComponents(l,f,p,S).normalize(),i[5].setComponents(c-l,h-f,g-p,T-S).normalize();else if(i[4].setComponents(c-l,h-f,g-p,T-S).normalize(),t===Ti)i[5].setComponents(c+l,h+f,g+p,T+S).normalize();else if(t===Ll)i[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const t=Iv.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Go.x=i.normal.x>0?e.max.x:e.min.x,Go.y=i.normal.y>0?e.max.y:e.min.y,Go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const nd=new Ft;class Bf{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];nd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Dl),n[i].setFromProjectionMatrix(nd,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Dl),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Bf().copy(this)}}class Nv extends so{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const id=new Ft,Yu=new Of,Vo=new Vl,Wo=new K;class Uv extends Xn{constructor(e=new cr,t=new Nv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=s,e.ray.intersectsSphere(Vo)===!1)return;id.copy(i).invert(),Yu.copy(e.ray).applyMatrix4(id);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let m=f,v=h;m<v;m++){const p=c.getX(m);Wo.fromBufferAttribute(d,p),rd(Wo,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let m=f,v=h;m<v;m++)Wo.fromBufferAttribute(d,m),rd(Wo,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rd(r,e,t,n,i,s,a){const o=Yu.distanceSqToPoint(r);if(o<t){const l=new K;Yu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bm extends wn{constructor(e=[],t=ea,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class na extends wn{constructor(e,t,n=ki,i,s,a,o=dn,l=dn,c,u=Ur,d=1){if(u!==Ur&&u!==wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class zm extends na{constructor(e,t=ki,n=ea,i,s,a=dn,o=dn,l,c=Ur){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class km extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ao extends cr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new sr(c,3)),this.setAttribute("normal",new sr(u,3)),this.setAttribute("uv",new sr(d,2));function m(v,p,g,x,b,S,T,w,_,E,P){const R=S/_,I=T/E,N=S/2,U=T/2,L=w/2,z=_+1,Y=E+1;let O=0,j=0;const V=new K;for(let C=0;C<Y;C++){const ee=C*I-U;for(let Ee=0;Ee<z;Ee++){const Oe=Ee*R-N;V[v]=Oe*x,V[p]=ee*b,V[g]=L,c.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[g]=w>0?1:-1,u.push(V.x,V.y,V.z),d.push(Ee/_),d.push(1-C/E),O+=1}}for(let C=0;C<E;C++)for(let ee=0;ee<_;ee++){const Ee=f+ee+z*C,Oe=f+ee+z*(C+1),$=f+(ee+1)+z*(C+1),fe=f+(ee+1)+z*C;l.push(Ee,Oe,fe),l.push(Oe,$,fe),j+=6}o.addGroup(h,j,P),h+=j,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ia extends cr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,h=[],m=[],v=[],p=[];for(let g=0;g<u;g++){const x=g*f-a;for(let b=0;b<c;b++){const S=b*d-s;m.push(S,-x,0),v.push(0,0,1),p.push(b/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const b=x+c*g,S=x+c*(g+1),T=x+1+c*(g+1),w=x+1+c*g;h.push(b,S,w),h.push(S,T,w)}this.setIndex(h),this.setAttribute("position",new sr(m,3)),this.setAttribute("normal",new sr(v,3)),this.setAttribute("uv",new sr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.widthSegments,e.heightSegments)}}function ra(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(sd(i))i.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(sd(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Pn(r){const e={};for(let t=0;t<r.length;t++){const n=ra(r[t]);for(const i in n)e[i]=n[i]}return e}function sd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Fv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Hm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Gm={clone:ra,merge:Pn};var Ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ov,this.fragmentShader=Bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=Fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(i.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(i.value);break;case"v3":this.uniforms[n].value=new K().fromArray(i.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class zv extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kv extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hv extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(ad(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!ad(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function ad(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Gv{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],m=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vv=new Gv;class zf{constructor(e){this.manager=e!==void 0?e:Vv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}zf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cs=new WeakMap;class Wv extends zf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Fc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Cs.get(a);d===void 0&&(d=[],Cs.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=eo("img");function l(){u(),t&&t(this);const d=Cs.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Cs.delete(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),Fc.remove(`image:${e}`);const f=Cs.get(this)||[];for(let h=0;h<f.length;h++){const m=f[h];m.onError&&m.onError(d)}Cs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fc.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class Xv extends zf{constructor(e){super(e)}load(e,t,n,i){const s=new wn,a=new Wv(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}const Xo=new K,Yo=new aa,wi=new K;class Vm extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xo,Yo,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,Yo,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xo,Yo,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,Yo,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _r=new K,od=new ut,ld=new ut;class yi extends Vm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,od,ld),t.subVectors(ld,od)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yv extends Vm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=-90,Ls=1;class qu extends Xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yi(Ps,Ls,e,t);i.layers=this.layers,this.add(i);const s=new yi(Ps,Ls,e,t);s.layers=this.layers,this.add(s);const a=new yi(Ps,Ls,e,t);a.layers=this.layers,this.add(a);const o=new yi(Ps,Ls,e,t);o.layers=this.layers,this.add(o);const l=new yi(Ps,Ls,e,t);l.layers=this.layers,this.add(l);const c=new yi(Ps,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ll)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class qv extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const cd=new Ft;class $v{constructor(e,t,n=0,i=1/0){this.ray=new Of(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cd),this}intersectObject(e,t=!0,n=[]){return $u(e,this,n,t),n.sort(ud),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)$u(e[i],this,n,t);return n.sort(ud),n}}function ud(r,e){return r.distance-e.distance}function $u(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)$u(s[a],e,t,!0)}}class Kv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ve("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fd(r,e,t,n){const i=Zv(n);switch(t){case Tm:return r*e;case wm:return r*e/i.components*i.byteLength;case Pf:return r*e/i.components*i.byteLength;case cs:return r*e*2/i.components*i.byteLength;case Lf:return r*e*2/i.components*i.byteLength;case bm:return r*e*3/i.components*i.byteLength;case Ui:return r*e*4/i.components*i.byteLength;case Df:return r*e*4/i.components*i.byteLength;case ol:case ll:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _u:case xu:return Math.max(r,16)*Math.max(e,8)/4;case gu:case vu:return Math.max(r,8)*Math.max(e,8)/2;case Su:case Mu:case Eu:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yu:case Al:case bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Au:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Du:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case zu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ku:case Hu:case Gu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Vu:case Wu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Rl:case Xu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zv(r){switch(r){case di:case Sm:return{byteLength:1,components:1};case ja:case Mm:case Hi:return{byteLength:2,components:1};case Rf:case Cf:return{byteLength:2,components:4};case ki:case Af:case Ni:return{byteLength:4,components:1};case ym:case Em:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wm(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Jv(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],v=d[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const v=d[h];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jv=`#ifdef USE_ALPHAHASH
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
#endif`,ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fx=`#ifdef USE_IRIDESCENCE
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
#endif`,hx=`#ifdef USE_BUMPMAP
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,yx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
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
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Vx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Kx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,Zx=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oS=`#if defined( USE_POINTS_UV )
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
#endif`,lS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`#ifdef USE_MORPHTARGETS
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
#endif`,pS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,SS=`#ifdef USE_NORMALMAP
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
#endif`,MS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ES=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,US=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,FS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,OS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,zS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,HS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XS=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,ZS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QS=`uniform sampler2D t2D;
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
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`#include <common>
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
}`,rM=`#if DEPTH_PACKING == 3200
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
}`,sM=`#define DISTANCE
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
}`,aM=`#define DISTANCE
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
void main() {
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`uniform float scale;
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
}`,uM=`uniform vec3 diffuse;
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
}`,fM=`#include <common>
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
}`,hM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,pM=`#define LAMBERT
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
#include <envmap_physical_pars_fragment>
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
}`,mM=`#define MATCAP
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
}`,gM=`#define MATCAP
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
}`,_M=`#define NORMAL
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
}`,vM=`#define NORMAL
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
}`,xM=`#define PHONG
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
}`,SM=`#define PHONG
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
#include <envmap_physical_pars_fragment>
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
}`,MM=`#define STANDARD
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
}`,yM=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,EM=`#define TOON
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
}`,TM=`#define TOON
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
}`,bM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,RM=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,CM=`uniform float rotation;
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
}`,PM=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Qv,alphahash_pars_fragment:jv,alphamap_fragment:ex,alphamap_pars_fragment:tx,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:sx,batching_pars_vertex:ax,batching_vertex:ox,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:ux,iridescence_fragment:fx,bumpmap_pars_fragment:hx,clipping_planes_fragment:dx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:_x,color_pars_fragment:vx,color_pars_vertex:xx,color_vertex:Sx,common:Mx,defaultnormal_vertex:yx,displacementmap_pars_vertex:Ex,displacementmap_vertex:Tx,emissivemap_fragment:bx,emissivemap_pars_fragment:wx,colorspace_fragment:Ax,colorspace_pars_fragment:Rx,envmap_fragment:Cx,envmap_common_pars_fragment:Px,envmap_pars_fragment:Lx,envmap_pars_vertex:Dx,envmap_physical_pars_fragment:Vx,envmap_vertex:Ix,fog_vertex:Nx,fog_pars_vertex:Ux,fog_fragment:Fx,fog_pars_fragment:Ox,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:zx,lights_lambert_fragment:kx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Gx,lights_toon_fragment:Wx,lights_toon_pars_fragment:Xx,lights_phong_fragment:Yx,lights_phong_pars_fragment:qx,lights_physical_fragment:$x,lights_physical_pars_fragment:Kx,lights_fragment_begin:Zx,lights_fragment_maps:Jx,lights_fragment_end:Qx,lightprobes_pars_fragment:jx,logdepthbuf_fragment:eS,logdepthbuf_pars_fragment:tS,logdepthbuf_pars_vertex:nS,logdepthbuf_vertex:iS,map_fragment:rS,map_pars_fragment:sS,map_particle_fragment:aS,map_particle_pars_fragment:oS,metalnessmap_fragment:lS,metalnessmap_pars_fragment:cS,morphinstance_vertex:uS,morphcolor_vertex:fS,morphnormal_vertex:hS,morphtarget_pars_vertex:dS,morphtarget_vertex:pS,normal_fragment_begin:mS,normal_fragment_maps:gS,normal_pars_fragment:_S,normal_pars_vertex:vS,normal_vertex:xS,normalmap_pars_fragment:SS,clearcoat_normal_fragment_begin:MS,clearcoat_normal_fragment_maps:yS,clearcoat_pars_fragment:ES,iridescence_pars_fragment:TS,opaque_fragment:bS,packing:wS,premultiplied_alpha_fragment:AS,project_vertex:RS,dithering_fragment:CS,dithering_pars_fragment:PS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:DS,shadowmap_pars_fragment:IS,shadowmap_pars_vertex:NS,shadowmap_vertex:US,shadowmask_pars_fragment:FS,skinbase_vertex:OS,skinning_pars_vertex:BS,skinning_vertex:zS,skinnormal_vertex:kS,specularmap_fragment:HS,specularmap_pars_fragment:GS,tonemapping_fragment:VS,tonemapping_pars_fragment:WS,transmission_fragment:XS,transmission_pars_fragment:YS,uv_pars_fragment:qS,uv_pars_vertex:$S,uv_vertex:KS,worldpos_vertex:ZS,background_vert:JS,background_frag:QS,backgroundCube_vert:jS,backgroundCube_frag:eM,cube_vert:tM,cube_frag:nM,depth_vert:iM,depth_frag:rM,distance_vert:sM,distance_frag:aM,equirect_vert:oM,equirect_frag:lM,linedashed_vert:cM,linedashed_frag:uM,meshbasic_vert:fM,meshbasic_frag:hM,meshlambert_vert:dM,meshlambert_frag:pM,meshmatcap_vert:mM,meshmatcap_frag:gM,meshnormal_vert:_M,meshnormal_frag:vM,meshphong_vert:xM,meshphong_frag:SM,meshphysical_vert:MM,meshphysical_frag:yM,meshtoon_vert:EM,meshtoon_frag:TM,points_vert:bM,points_frag:wM,shadow_vert:AM,shadow_frag:RM,sprite_vert:CM,sprite_frag:PM},we={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Pi={basic:{uniforms:Pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Pn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Pn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ct(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Pn([we.points,we.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Pn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Pn([we.common,we.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Pn([we.sprite,we.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Pn([we.common,we.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Pn([we.lights,we.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Pi.physical={uniforms:Pn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const qo={r:0,b:0,g:0},LM=new Ft,Xm=new qe;Xm.set(-1,0,0,0,1,0,0,0,1);function DM(r,e,t,n,i,s){const a=new ct(0);let o=i===!0?0:1,l,c,u=null,d=0,f=null;function h(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const S=x.backgroundBlurriness>0;b=e.get(b,S)}return b}function m(x){let b=!1;const S=h(x);S===null?p(a,o):S&&S.isColor&&(p(S,1),b=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(x,b){const S=h(b);S&&S.isCubeTexture?(c===void 0&&(c=new Bi(new ao(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:ra(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(b.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xm),c.material.toneMapped=ot.getTransfer(S.colorSpace)!==Mt,(u!==S||d!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Bi(new ia(2,2),new bi({name:"BackgroundMaterial",uniforms:ra(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ot.getTransfer(S.colorSpace)!==Mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,b){x.getRGB(qo,Hm(r)),t.buffers.color.setClear(qo.r,qo.g,qo.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:m,addToRenderList:v,dispose:g}}function IM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(I,N,U,L,z){let Y=!1;const O=d(I,L,U,N);s!==O&&(s=O,c(s.object)),Y=h(I,L,U,z),Y&&m(I,L,U,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(I,N,U,L),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function u(I){return r.deleteVertexArray(I)}function d(I,N,U,L){const z=L.wireframe===!0;let Y=n[N.id];Y===void 0&&(Y={},n[N.id]=Y);const O=I.isInstancedMesh===!0?I.id:0;let j=Y[O];j===void 0&&(j={},Y[O]=j);let V=j[U.id];V===void 0&&(V={},j[U.id]=V);let C=V[z];return C===void 0&&(C=f(l()),V[z]=C),C}function f(I){const N=[],U=[],L=[];for(let z=0;z<t;z++)N[z]=0,U[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:L,object:I,attributes:{},index:null}}function h(I,N,U,L){const z=s.attributes,Y=N.attributes;let O=0;const j=U.getAttributes();for(const V in j)if(j[V].location>=0){const ee=z[V];let Ee=Y[V];if(Ee===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(Ee=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(Ee=I.instanceColor)),ee===void 0||ee.attribute!==Ee||Ee&&ee.data!==Ee.data)return!0;O++}return s.attributesNum!==O||s.index!==L}function m(I,N,U,L){const z={},Y=N.attributes;let O=0;const j=U.getAttributes();for(const V in j)if(j[V].location>=0){let ee=Y[V];ee===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const Ee={};Ee.attribute=ee,ee&&ee.data&&(Ee.data=ee.data),z[V]=Ee,O++}s.attributes=z,s.attributesNum=O,s.index=L}function v(){const I=s.newAttributes;for(let N=0,U=I.length;N<U;N++)I[N]=0}function p(I){g(I,0)}function g(I,N){const U=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;U[I]=1,L[I]===0&&(r.enableVertexAttribArray(I),L[I]=1),z[I]!==N&&(r.vertexAttribDivisor(I,N),z[I]=N)}function x(){const I=s.newAttributes,N=s.enabledAttributes;for(let U=0,L=N.length;U<L;U++)N[U]!==I[U]&&(r.disableVertexAttribArray(U),N[U]=0)}function b(I,N,U,L,z,Y,O){O===!0?r.vertexAttribIPointer(I,N,U,z,Y):r.vertexAttribPointer(I,N,U,L,z,Y)}function S(I,N,U,L){v();const z=L.attributes,Y=U.getAttributes(),O=N.defaultAttributeValues;for(const j in Y){const V=Y[j];if(V.location>=0){let C=z[j];if(C===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(C=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(C=I.instanceColor)),C!==void 0){const ee=C.normalized,Ee=C.itemSize,Oe=e.get(C);if(Oe===void 0)continue;const $=Oe.buffer,fe=Oe.type,ie=Oe.bytesPerElement,oe=fe===r.INT||fe===r.UNSIGNED_INT||C.gpuType===Af;if(C.isInterleavedBufferAttribute){const ae=C.data,Se=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,Xe=C.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let Te=0;Te<V.locationSize;Te++)g(V.location+Te,ae.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Te=0;Te<V.locationSize;Te++)p(V.location+Te);r.bindBuffer(r.ARRAY_BUFFER,$);for(let Te=0;Te<V.locationSize;Te++)b(V.location+Te,Ee/V.locationSize,fe,ee,Se*ie,(Xe+Ee/V.locationSize*Te)*ie,oe)}else{if(C.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)g(V.location+ae,C.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae);r.bindBuffer(r.ARRAY_BUFFER,$);for(let ae=0;ae<V.locationSize;ae++)b(V.location+ae,Ee/V.locationSize,fe,ee,Ee*ie,Ee/V.locationSize*ae*ie,oe)}}else if(O!==void 0){const ee=O[j];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(V.location,ee);break;case 3:r.vertexAttrib3fv(V.location,ee);break;case 4:r.vertexAttrib4fv(V.location,ee);break;default:r.vertexAttrib1fv(V.location,ee)}}}}x()}function T(){P();for(const I in n){const N=n[I];for(const U in N){const L=N[U];for(const z in L){const Y=L[z];for(const O in Y)u(Y[O].object),delete Y[O];delete L[z]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;const N=n[I.id];for(const U in N){const L=N[U];for(const z in L){const Y=L[z];for(const O in Y)u(Y[O].object),delete Y[O];delete L[z]}}delete n[I.id]}function _(I){for(const N in n){const U=n[N];for(const L in U){const z=U[L];if(z[I.id]===void 0)continue;const Y=z[I.id];for(const O in Y)u(Y[O].object),delete Y[O];delete z[I.id]}}}function E(I){for(const N in n){const U=n[N],L=I.isInstancedMesh===!0?I.id:0,z=U[L];if(z!==void 0){for(const Y in z){const O=z[Y];for(const j in O)u(O[j].object),delete O[j];delete z[Y]}delete U[L],Object.keys(U).length===0&&delete n[N]}}}function P(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function NM(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function UM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==Ui&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==di&&_!==Ni&&!E&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:S,maxSamples:T,samples:w}}function FM(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new xr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,b=x*4;let S=g.clippingState||null;l.value=S,S=u(m,f,b,h);for(let T=0;T!==b;++T)S[T]=t[T];g.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,m){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=h+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,S=h;b!==v;++b,S+=4)a.copy(d[b]).applyMatrix4(x,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class kf extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ao(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:ra(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:Ys});s.uniforms.tEquirect.value=t;const a=new Bi(i,s),o=t.minFilter;return t.minFilter===er&&(t.minFilter=zn),new qu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const hd=256,OM=3,BM=20,Ym=256,qm=16,zM=3,kM=new K,HM=new ct;class Il{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qu(1,10,null),this._boxMesh=new Bi(new ao(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=kM}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,m=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(HM));const p=new qu(n,i,u);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=m,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hd,Lm(e))}_fromTexture(e,t){e.mapping===ea||e.mapping===Qa?this._setSize(e.image.length===0?hd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=dd(e,!1,!1),n=Math.log2(e)-OM;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ea||e.mapping===Qa?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=GM(),this._integrationMaterial=VM());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/qm);for(let a=0;a<=n;a++){const o=Il.lodToRoughness(a,n);if(a>n-zM)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Ym*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=WM());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function dd(r,e,t){return new kf(r,{minFilter:er,generateMipmaps:e,type:Hi,colorSpace:Cl,depthBuffer:t})}function oo(r,e,t){return new bi({name:r,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:Wn,blending:Ys,depthTest:!1,depthWrite:!1})}function GM(){return oo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ym}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function VM(){return oo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function WM(){return oo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${BM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function pd(){return oo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function md(){return oo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function XM(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===hc||h===dc)if(e.has(f)){const m=e.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const v=new kf(m.height);return v.fromEquirectangularTexture(r,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const h=f.mapping,m=h===hc||h===dc,v=h===ea||h===Qa;if(m||v){let p=t.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Il(r)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return m&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Il(r)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===hc?f.mapping=ea:h===dc&&(f.mapping=Qa),f}function l(f){let h=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function YM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fl("WebGLRenderer: "+n+" extension not supported."),i}}}function qM(r,e,t,n){const i={},s=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(const p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);const v=s.get(m);v&&(e.remove(v),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,v){return i[v.id]!==void 0||(v.addEventListener("dispose",o),i[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function u(m){const v=m.attributes;for(const p in v)e.update(v[p],r.ARRAY_BUFFER)}function d(m){const v=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const x=v!==null?v.array.length:p.array.length/3-1,b=p.count>=65535?Om:Fm,S=new b(Math.ceil(x/3)*6,1),T=S.array;if(v!==null){const _=v.array;g=v.version;for(let E=0,P=0;E<x;E+=3){const R=_[E+0],I=_[E+1],N=_[E+2];T[P++]=R,T[P++]=I,T[P++]=I,T[P++]=N,T[P++]=N,T[P++]=R}}else{g=p.version;for(let _=0,E=0;_<x;_+=3){const P=_+0,R=_+1,I=_+2;T[E++]=P,T[E++]=R,T[E++]=R,T[E++]=I,T[E++]=I,T[E++]=P}}S.version=g;const w=s.get(m);w&&e.remove(w),s.set(m,S)}function f(m){const v=s.get(m);if(v){const p=m.index;p!==null&&v.version<p.version&&d(m)}else d(m);return s.get(m)}function h(){for(const m in i){const v=i[m].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function $M(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,h){h!==0&&(r.drawElementsInstanced(n,f,s,d*a,h),t.update(f,n,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,h);let v=0;for(let p=0;p<h;p++)v+=f[p];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function KM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ZM(r,e,t){const n=new WeakMap,i=new kt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let R=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var h=R;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let T=o.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const _=new Float32Array(T*w*4*d),E=new Nm(_,T,w,d);E.type=Ni,E.needsUpdate=!0;const P=S*4;for(let I=0;I<d;I++){const N=g[I],U=x[I],L=b[I],z=T*w*4*I;for(let Y=0;Y<N.count;Y++){const O=Y*P;m===!0&&(i.fromBufferAttribute(N,Y),_[z+O+0]=i.x,_[z+O+1]=i.y,_[z+O+2]=i.z,_[z+O+3]=0),v===!0&&(i.fromBufferAttribute(U,Y),_[z+O+4]=i.x,_[z+O+5]=i.y,_[z+O+6]=i.z,_[z+O+7]=0),p===!0&&(i.fromBufferAttribute(L,Y),_[z+O+8]=i.x,_[z+O+9]=i.y,_[z+O+10]=i.z,_[z+O+11]=L.itemSize===4?i.w:1)}}f={count:d,texture:E,size:new ut(T,w)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function JM(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const QM={[hm]:"LINEAR_TONE_MAPPING",[dm]:"REINHARD_TONE_MAPPING",[pm]:"CINEON_TONE_MAPPING",[mm]:"ACES_FILMIC_TONE_MAPPING",[_m]:"AGX_TONE_MAPPING",[vm]:"NEUTRAL_TONE_MAPPING",[gm]:"CUSTOM_TONE_MAPPING"};function jM(r,e,t,n,i,s){const a=new Oi(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new cr;u.setAttribute("position",new sr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new sr([0,2,0,0,2,0],2));const d=new zv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Bi(u,d),h=new Yv(-1,1,1,-1,0,1);let m=null,v=null,p=!1,g,x=null,b=[],S=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<b.length;_++){const E=b[_];E.setSize&&E.setSize(T,w)}},this.setEffects=function(T){b=T,S=b.length>0&&b[0].isRenderPass===!0;const w=a.width,_=a.height;b.length>0&&o===null&&(o=new Oi(w,_,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new Oi(w,_,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));const E=i===!0&&b.some(P=>P.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new na(w,_),s===!0&&(c.format=wr,c.type=ta)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let P=0;P<b.length;P++){const R=b[P];R.setSize&&R.setSize(w,_),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,w){if(p||T.toneMapping===nr&&b.length===0)return!1;if(x=w,w!==null){const _=w.width,E=w.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return S===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=nr,!0},this.hasRenderPass=function(){return S},this.end=function(T,w){T.toneMapping=g,p=!0;let _=a,E=o;for(let P=0;P<b.length;P++){const R=b[P];R.enabled!==!1&&(R.render(T,E,_,w),R.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(m!==T.outputColorSpace||v!==T.toneMapping){m=T.outputColorSpace,v=T.toneMapping,d.defines={},ot.getTransfer(m)===Mt&&(d.defines.SRGB_TRANSFER="");const P=QM[v];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(x),T.render(f,h),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const $m=new wn,Km=new na(1,1),Zm=new zm(1),Jm=new Nm,Qm=new mv,jm=new Bm,gd=[],_d=[],vd=new Float32Array(16),xd=new Float32Array(9),Sd=new Float32Array(4);function oa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=gd[i];if(s===void 0&&(s=new Float32Array(i),gd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wl(r,e){let t=_d[e];t===void 0&&(t=new Int32Array(e),_d[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ey(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ty(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function ny(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function iy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function ry(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Sd.set(n),r.uniformMatrix2fv(this.addr,!1,Sd),sn(t,n)}}function sy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;xd.set(n),r.uniformMatrix3fv(this.addr,!1,xd),sn(t,n)}}function ay(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;vd.set(n),r.uniformMatrix4fv(this.addr,!1,vd),sn(t,n)}}function oy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function cy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function uy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function fy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function dy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function py(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function Xl(r){return r.version===0&&(r.compareFunction=Cm,r.needsUpdate=!0),r}function my(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Xl(Km):s=$m,t.setTexture2D(e||s,i)}function gy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qm,i)}function _y(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Xl(Zm):s=jm,t.setTextureCube(e||s,i)}function vy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jm,i)}function xy(r){switch(r){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return ry;case 35675:return sy;case 35676:return ay;case 5124:case 35670:return oy;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return uy;case 5125:return fy;case 36294:return hy;case 36295:return dy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return vy}}function Sy(r,e){r.uniform1fv(this.addr,e)}function My(r,e){const t=oa(e,this.size,2);r.uniform2fv(this.addr,t)}function yy(r,e){const t=oa(e,this.size,3);r.uniform3fv(this.addr,t)}function Ey(r,e){const t=oa(e,this.size,4);r.uniform4fv(this.addr,t)}function Ty(r,e){const t=oa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function by(r,e){const t=oa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wy(r,e){const t=oa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ay(r,e){r.uniform1iv(this.addr,e)}function Ry(r,e){r.uniform2iv(this.addr,e)}function Cy(r,e){r.uniform3iv(this.addr,e)}function Py(r,e){r.uniform4iv(this.addr,e)}function Ly(r,e){r.uniform1uiv(this.addr,e)}function Dy(r,e){r.uniform2uiv(this.addr,e)}function Iy(r,e){r.uniform3uiv(this.addr,e)}function Ny(r,e){r.uniform4uiv(this.addr,e)}function Uy(r,e,t){const n=this.cache,i=e.length,s=Wl(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Xl(Km):a=$m;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Fy(r,e,t){const n=this.cache,i=e.length,s=Wl(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qm,s[a])}function Oy(r,e,t){const n=this.cache,i=e.length,s=Wl(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Xl(Zm):a=jm;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function By(r,e,t){const n=this.cache,i=e.length,s=Wl(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jm,s[a])}function zy(r){switch(r){case 5126:return Sy;case 35664:return My;case 35665:return yy;case 35666:return Ey;case 35674:return Ty;case 35675:return by;case 35676:return wy;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return Dy;case 36295:return Iy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return By}}class ky{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xy(t.type)}}class Hy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zy(t.type)}}class Gy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Oc=/(\w+)(\])?(\[|\.)?/g;function Md(r,e){r.seq.push(e),r.map[e.id]=e}function Vy(r,e,t){const n=r.name,i=n.length;for(Oc.lastIndex=0;;){const s=Oc.exec(n),a=Oc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Md(t,c===void 0?new ky(o,r,e):new Hy(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Gy(o),Md(t,d)),t=d}}}class hl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Vy(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function yd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Wy=37297;let Xy=0;function Yy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ed=new qe;function qy(r){ot._getMatrix(Ed,ot.workingColorSpace,r);const e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case Pl:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Td(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Yy(r.getShaderSource(e),o)}else return s}function $y(r,e){const t=qy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ky={[hm]:"Linear",[dm]:"Reinhard",[pm]:"Cineon",[mm]:"ACESFilmic",[_m]:"AgX",[vm]:"Neutral",[gm]:"Custom"};function Zy(r,e){const t=Ky[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $o=new K;function Jy(){ot.getLuminanceCoefficients($o);const r=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function jy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ba(r){return r!==""}function bd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(r){return r.replace(tE,nE)}function nE(r,e){const t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ku(t)}const iE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(r){return r.replace(iE,rE)}function rE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sE={[al]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};function aE(r){return sE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oE={[Qa]:"ENVMAP_MODE_REFRACTION"};function lE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":oE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cE={[fm]:"ENVMAP_BLENDING_MULTIPLY",[D0]:"ENVMAP_BLENDING_MIX",[I0]:"ENVMAP_BLENDING_ADD"};function uE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cE[r.combine]||"ENVMAP_BLENDING_NONE"}function fE(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=aE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=lE(t),d=uE(t),f=Qy(t),h=jy(s),m=i.createProgram();let v,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(ba).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(ba).join(`
`),p.length>0&&(p+=`
`)):(v=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),p=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Je.tonemapping_pars_fragment:"",t.toneMapping!==nr?Zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,$y("linearToOutputTexel",t.outputColorSpace),Jy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),a=Ku(a),a=bd(a,t),a=wd(a,t),o=Ku(o),o=bd(o,t),o=wd(o,t),a=Ad(a),o=Ad(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=g+v+a,b=g+p+o,S=yd(i,i.VERTEX_SHADER,x),T=yd(i,i.FRAGMENT_SHADER,b);i.attachShader(m,S),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(R){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(m)||"",N=i.getShaderInfoLog(S)||"",U=i.getShaderInfoLog(T)||"",L=I.trim(),z=N.trim(),Y=U.trim();let O=!0,j=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,S,T);else{const V=Td(i,S,"vertex"),C=Td(i,T,"fragment");pt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+V+`
`+C)}else L!==""?Ve("WebGLProgram: Program Info Log:",L):(z===""||Y==="")&&(j=!1);j&&(R.diagnostics={runnable:O,programLog:L,vertexShader:{log:z,prefix:v},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(S),i.deleteShader(T),_=new hl(i,m),E=eE(i,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,Wy)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=T,this}let hE=0;class dE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pE(e),t.set(e,n)),n}}class pE{constructor(e){this.id=hE++,this.code=e,this.usedTimes=0}}function mE(r){return r===cs||r===Al||r===Rl}function gE(r,e,t,n,i,s){const a=new Ff,o=new dE,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,E,P,R,I,N){const U=R.fog,L=I.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||z,Y),j=f[_.type];let V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));const C=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=C!==void 0?C.length:0;let Ee=0;L.morphAttributes.position!==void 0&&(Ee=1),L.morphAttributes.normal!==void 0&&(Ee=2),L.morphAttributes.color!==void 0&&(Ee=3);let Oe,$,fe,ie;if(j){const ne=Pi[j];Oe=ne.vertexShader,$=ne.fragmentShader}else{Oe=_.vertexShader,$=_.fragmentShader;const ne=o.getVertexShaderStage(_),Ae=o.getFragmentShaderStage(_);o.update(_,ne,Ae),fe=ne.id,ie=Ae.id}const oe=r.getRenderTarget(),ae=r.state.buffers.depth.getReversed(),Se=I.isInstancedMesh===!0,Xe=I.isBatchedMesh===!0,Te=!!_.map,ke=!!_.matcap,Ce=!!O,be=Ce&&O.isPMREMTexture===!0,tt=!!_.aoMap,Ye=!!_.lightMap,W=!!_.bumpMap&&_.wireframe===!1,Ze=!!_.normalMap,Ot=!!_.displacementMap,xt=!!_.emissiveMap,nt=!!_.metalnessMap,yt=!!_.roughnessMap,Gt=_.anisotropy>0,B=_.clearcoat>0,mt=_.diffuseRoughness>0,ft=_.dispersion>0,We=_.retroreflectivity>0,pe=_.iridescence>0,dt=_.sheen>0,Ne=_.transmission>0,He=Gt&&!!_.anisotropyMap,A=B&&!!_.clearcoatMap,M=B&&!!_.clearcoatNormalMap,H=B&&!!_.clearcoatRoughnessMap,le=mt&&!!_.diffuseRoughnessMap,re=pe&&!!_.iridescenceMap,de=pe&&!!_.iridescenceThicknessMap,ve=dt&&!!_.sheenColorMap,G=dt&&!!_.sheenRoughnessMap,Q=!!_.specularMap,he=!!_.specularColorMap,D=!!_.specularIntensityMap,J=Ne&&!!_.transmissionMap,Z=Ne&&!!_.thicknessMap,me=!!_.gradientMap,ue=!!_.alphaMap,ge=_.alphaTest>0,ce=!!_.alphaHash,_e=!!_.extensions;let se=nr;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(se=r.toneMapping);const te=be?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,xe={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:Oe,fragmentShader:$,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:Xe,batchingColor:Xe&&I._colorsTexture!==null,instancing:Se,instancingColor:Se&&I.instanceColor!==null,instancingMorph:Se&&I.morphTexture!==null,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Te,matcap:ke,envMap:Ce,envMapMode:Ce&&O.mapping,envMapPMREM:be,envMapMaxLod:be?te.length-1:null,envMapSize:be?te[0].width:null,aoMap:tt,lightMap:Ye,bumpMap:W,normalMap:Ze,displacementMap:Ot,emissiveMap:xt,normalMapObjectSpace:Ze&&_.normalMapType===F0,normalMapTangentSpace:Ze&&_.normalMapType===Oh,packedNormalMap:Ze&&_.normalMapType===Oh&&mE(_.normalMap.format),metalnessMap:nt,roughnessMap:yt,anisotropy:Gt,anisotropyMap:He,clearcoat:B,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:H,diffuseRoughness:mt,diffuseRoughnessMap:le,dispersion:ft,retroreflection:We,iridescence:pe,iridescenceMap:re,iridescenceThicknessMap:de,sheen:dt,sheenColorMap:ve,sheenRoughnessMap:G,specularMap:Q,specularColorMap:he,specularIntensityMap:D,transmission:Ne,transmissionMap:J,thicknessMap:Z,gradientMap:me,opaque:_.transparent===!1&&_.blending===Oa&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:ge,alphaHash:ce,combine:_.combine,mapUv:Te&&h(_.map.channel),aoMapUv:tt&&h(_.aoMap.channel),lightMapUv:Ye&&h(_.lightMap.channel),bumpMapUv:W&&h(_.bumpMap.channel),normalMapUv:Ze&&h(_.normalMap.channel),displacementMapUv:Ot&&h(_.displacementMap.channel),emissiveMapUv:xt&&h(_.emissiveMap.channel),metalnessMapUv:nt&&h(_.metalnessMap.channel),roughnessMapUv:yt&&h(_.roughnessMap.channel),anisotropyMapUv:He&&h(_.anisotropyMap.channel),clearcoatMapUv:A&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&h(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&h(_.diffuseRoughnessMap.channel),iridescenceMapUv:re&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:G&&h(_.sheenRoughnessMap.channel),specularMapUv:Q&&h(_.specularMap.channel),specularColorMapUv:he&&h(_.specularColorMap.channel),specularIntensityMapUv:D&&h(_.specularIntensityMap.channel),transmissionMapUv:J&&h(_.transmissionMap.channel),thicknessMapUv:Z&&h(_.thicknessMap.channel),alphaMapUv:ue&&h(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ze||Gt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Te||ue),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Ze===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ee,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.filter(ne=>ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:Te&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===Mt,decodeVideoTextureEmissive:xt&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===Mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ji,flipSided:_.side===Wn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function v(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(E,_),g(E,_),E.push(r.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function g(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const E=f[_.type];let P;if(E){const R=Pi[E];P=Gm.clone(R.uniforms)}else P=_.uniforms;return P}function b(_,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new fE(r,E,_,i),c.push(P),u.set(E,P)),P}function S(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:x,acquireProgram:b,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:w}}function _E(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function vE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Cd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Pd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,m,v,p,g){let x=r[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:m,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:g},r[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=m,x.materialVariant=a(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=p,x.group=g),e++,x}function l(f,h,m,v,p,g,x){x.reversedDepth===!0&&(p=-p);const b=o(f,h,m,v,p,g);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function c(f,h,m,v,p,g){const x=o(f,h,m,v,p,g);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function u(f,h){t.length>1&&t.sort(f||vE),n.length>1&&n.sort(h||Cd),i.length>1&&i.sort(h||Cd)}function d(){for(let f=e,h=r.length;f<h;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function xE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Pd,r.set(n,[a])):i>=s.length?(a=new Pd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function SE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new ct};break;case"SpotLight":t={position:new K,direction:new K,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function ME(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yE=0;function EE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function TE(r){const e=new SE,t=ME(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const i=new K,s=new Ft,a=new Ft;function o(c){let u=0,d=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let h=0,m=0,v=0,p=0,g=0,x=0,b=0,S=0,T=0,w=0,_=0,E=0,P=0,R=0;c.sort(EE);for(let N=0,U=c.length;N<U;N++){const L=c[N],z=L.color,Y=L.intensity,O=L.distance;let j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===cs?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=z.r*Y,d+=z.g*Y,f+=z.b*Y;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],Y);R++}else if(L.isSunLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const C=L.shadow,ee=t.get(L);ee.shadowIntensity=C.intensity,ee.shadowBias=C.bias,ee.shadowNormalBias=C.normalBias,ee.shadowRadius=C.radius,ee.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=j;const Ee=C.getViewportCount();for(let Oe=0;Oe<Ee;Oe++)n.sunShadowMatrix[v+Oe]=C.getMatrix(Oe),n.sunShadowCascade[v+Oe]=C._cascadeData[Oe];v+=Ee,m++}n.sun[h]=V,h++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const C=L.shadow,ee=t.get(L);ee.shadowIntensity=C.intensity,ee.shadowBias=C.bias,ee.shadowNormalBias=C.normalBias,ee.shadowRadius=C.radius,ee.shadowMapSize=C.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=V,p++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(z).multiplyScalar(Y),V.distance=O,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[x]=V;const C=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,C.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[x]=C.matrix,L.castShadow){const ee=t.get(L);ee.shadowIntensity=C.intensity,ee.shadowBias=C.bias,ee.shadowNormalBias=C.normalBias,ee.shadowRadius=C.radius,ee.shadowMapSize=C.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=j,_++}x++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(z).multiplyScalar(Y),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[b]=V,b++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const C=L.shadow,ee=t.get(L);ee.shadowIntensity=C.intensity,ee.shadowBias=C.bias,ee.shadowNormalBias=C.normalBias,ee.shadowRadius=C.radius,ee.shadowMapSize=C.mapSize,ee.shadowCameraNear=C.camera.near,ee.shadowCameraFar=C.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,w++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(Y),V.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[S]=V,S++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.sunLength!==h||I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==b||I.hemiLength!==S||I.numSunShadows!==m||I.numDirectionalShadows!==T||I.numPointShadows!==w||I.numSpotShadows!==_||I.numSpotMaps!==E||I.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=p,n.spot.length=x,n.rectArea.length=b,n.point.length=g,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-P,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,I.sunLength=h,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=b,I.hemiLength=S,I.numSunShadows=m,I.numDirectionalShadows=T,I.numPointShadows=w,I.numSpotShadows=_,I.numSpotMaps=E,I.numLightProbes=R,n.version=yE++)}function l(c,u){let d=0,f=0,h=0,m=0,v=0,p=0;const g=u.matrixWorldInverse;for(let x=0,b=c.length;x<b;x++){const S=c[x];if(S.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(g),d++}else if(S.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(S.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const T=n.point[h];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){const T=n.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Ld(r){const e=new TE(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bE(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ld(r),e.set(i,[o])):s>=a.length?(o=new Ld(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AE=`uniform sampler2D shadow_pass;
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
}`,RE=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],CE=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Dd=new Ft,ga=new K,Bc=new K;function PE(r,e,t){let n=new Dl;const i=new ut,s=new ut,a=new kt,o=new kv,l=new Hv,c={},u=t.maxTextureSize,d={[ls]:Wn,[Wn]:ls,[Ji]:Ji},f=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:wE,fragmentShader:AE}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new cr;m.setAttribute("position",new rr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bi(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let g=this.type;this.render=function(w,_,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===d0&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=al);const P=r.getRenderTarget(),R=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Ys),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=g!==this.type;U&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=w.length;L<z;L++){const Y=w[L],O=Y.shadow;if(O===void 0){Ve("WebGLShadowMap:",Y,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const j=O.getFrameExtents();i.multiply(j),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,O.mapSize.y=s.y));const V=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ta){if(Y.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Oi(i.x,i.y,{format:cs,type:Hi,minFilter:zn,magFilter:zn,generateMipmaps:!1}),O.map.texture.name=Y.name+".shadowMap",O.map.depthTexture=new na(i.x,i.y,Ni),O.map.depthTexture.name=Y.name+".shadowMapDepth",O.map.depthTexture.format=Ur,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=dn,O.map.depthTexture.magFilter=dn}else Y.isPointLight?(O.map=new kf(i.x),O.map.depthTexture=new zm(i.x,ki)):(O.map=new Oi(i.x,i.y),O.map.depthTexture=new na(i.x,i.y,ki)),O.map.depthTexture.name=Y.name+".shadowMap",O.map.depthTexture.format=Ur,this.type===al?(O.map.depthTexture.compareFunction=V?Rm:Am,O.map.depthTexture.minFilter=zn,O.map.depthTexture.magFilter=zn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=dn,O.map.depthTexture.magFilter=dn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);const C=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();Y.isPointLight!==!0&&O.updateMatrices(Y,E);const ee=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:E.layers;for(let Ee=0;Ee<C;Ee++){const Oe=O.getCamera(Ee);if(Y.isPointLight){const $=O.camera,fe=O.matrix,ie=Y.distance||$.far;ie!==$.far&&($.far=ie,$.updateProjectionMatrix()),ga.setFromMatrixPosition(Y.matrixWorld),$.position.copy(ga),Bc.copy($.position),Bc.add(RE[Ee]),$.up.copy(CE[Ee]),$.lookAt(Bc),$.updateMatrixWorld(),fe.makeTranslation(-ga.x,-ga.y,-ga.z),Dd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Dd,$.coordinateSystem,$.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,Ee),r.clear();else{Ee===0&&(r.setRenderTarget(O.map),r.clear());const $=O.getViewport(Ee);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),N.viewport(a)}n=O.getFrustum(Ee),S(_,E,Oe,Y,ee,this.type)}O.isPointLightShadow!==!0&&this.type===Ta&&x(O,E),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,R,I)};function x(w,_){const E=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new Oi(i.x,i.y,{format:cs,type:Hi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(_,null,E,f,v,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(_,null,E,h,v,null)}function b(w,_,E,P){let R=null;const I=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)R=I;else if(R=E.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const N=R.uuid,U=_.uuid;let L=c[N];L===void 0&&(L={},c[N]=L);let z=L[U];z===void 0&&(z=R.clone(),L[U]=z,_.addEventListener("dispose",T)),R=z}if(R.visible=_.visible,R.wireframe=_.wireframe,P===Ta?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=r.properties.get(R);N.light=E}return R}function S(w,_,E,P,R,I){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Ta)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const L=e.update(w),z=w.material;if(Array.isArray(z)){const Y=L.groups;for(let O=0,j=Y.length;O<j;O++){const V=Y[O],C=z[V.materialIndex];if(C&&C.visible){const ee=b(w,C,P,I);w.onBeforeShadow(r,w,_,E,L,ee,V),r.renderBufferDirect(E,null,L,ee,w,V),w.onAfterShadow(r,w,_,E,L,ee,V)}}}else if(z.visible){const Y=b(w,z,P,I);w.onBeforeShadow(r,w,_,E,L,Y,null),r.renderBufferDirect(E,null,L,Y,w,null),w.onAfterShadow(r,w,_,E,L,Y,null)}}const U=w.children;for(let L=0,z=U.length;L<z;L++)S(U[L],_,E,P,R,I)}function T(w){w.target.removeEventListener("dispose",T);for(const E in c){const P=c[E],R=w.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function LE(r,e){function t(){let D=!1;const J=new kt;let Z=null;const me=new kt(0,0,0,0);return{setMask:function(ue){Z!==ue&&!D&&(r.colorMask(ue,ue,ue,ue),Z=ue)},setLocked:function(ue){D=ue},setClear:function(ue,ge,ce,_e,se){se===!0&&(ue*=_e,ge*=_e,ce*=_e),J.set(ue,ge,ce,_e),me.equals(J)===!1&&(r.clearColor(ue,ge,ce,_e),me.copy(J))},reset:function(){D=!1,Z=null,me.set(-1,0,0,0)}}}function n(){let D=!1,J=!1,Z=null,me=null,ue=null;return{setReversed:function(ge){if(J!==ge){const ce=e.get("EXT_clip_control");ge?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),J=ge;const _e=ue;ue=null,this.setClear(_e)}},getReversed:function(){return J},setTest:function(ge){ge?ae(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(ge){Z!==ge&&!D&&(r.depthMask(ge),Z=ge)},setFunc:function(ge){if(J&&(ge=q0[ge]),me!==ge){switch(ge){case ou:r.depthFunc(r.NEVER);break;case lu:r.depthFunc(r.ALWAYS);break;case cu:r.depthFunc(r.LESS);break;case Ja:r.depthFunc(r.LEQUAL);break;case uu:r.depthFunc(r.EQUAL);break;case fu:r.depthFunc(r.GEQUAL);break;case hu:r.depthFunc(r.GREATER);break;case du:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ue!==ge&&(ue=ge,J&&(ge=1-ge),r.clearDepth(ge))},reset:function(){D=!1,Z=null,me=null,ue=null,J=!1}}}function i(){let D=!1,J=null,Z=null,me=null,ue=null,ge=null,ce=null,_e=null,se=null;return{setTest:function(te){D||(te?ae(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(te){J!==te&&!D&&(r.stencilMask(te),J=te)},setFunc:function(te,xe,ne){(Z!==te||me!==xe||ue!==ne)&&(r.stencilFunc(te,xe,ne),Z=te,me=xe,ue=ne)},setOp:function(te,xe,ne){(ge!==te||ce!==xe||_e!==ne)&&(r.stencilOp(te,xe,ne),ge=te,ce=xe,_e=ne)},setLocked:function(te){D=te},setClear:function(te){se!==te&&(r.clearStencil(te),se=te)},reset:function(){D=!1,J=null,Z=null,me=null,ue=null,ge=null,ce=null,_e=null,se=null}}}const s=new t,a=new n,o=new i;let l={};const c=new WeakMap;let u={},d={},f={},h=new WeakMap,m=[],v=null,p=!1,g=null,x=null,b=null,S=null,T=null,w=null,_=null,E=new ct(0,0,0),P=0,R=!1,I=null,N=null,U=null,L=null,z=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=j>=2);let C=null,ee={};const Ee=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),$=new kt().fromArray(Ee),fe=new kt().fromArray(Oe);function ie(D,J,Z,me){const ue=new Uint8Array(4),ge=r.createTexture();r.bindTexture(D,ge),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<Z;ce++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(J+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return ge}const oe={};oe[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(r.DEPTH_TEST),a.setFunc(Ja),W(!1),Ze(Nh),ae(r.CULL_FACE),tt(Ys);function ae(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function Se(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Xe(D,J){return f[D]!==J?(r.bindFramebuffer(D,J),f[D]=J,D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=J),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=J),!0):!1}function Te(D,J){let Z=m,me=!1;if(D){Z=h.get(J),Z===void 0&&(Z=[],h.set(J,Z));const ue=D.textures;if(Z.length!==ue.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,ce=ue.length;ge<ce;ge++)Z[ge]=r.COLOR_ATTACHMENT0+ge;Z.length=ue.length,me=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,me=!0);me&&r.drawBuffers(Z)}function ke(D){return v!==D?(r.useProgram(D),v=D,!0):!1}const Ce={[Us]:r.FUNC_ADD,[m0]:r.FUNC_SUBTRACT,[g0]:r.FUNC_REVERSE_SUBTRACT};Ce[_0]=r.MIN,Ce[v0]=r.MAX;const be={[x0]:r.ZERO,[S0]:r.ONE,[M0]:r.SRC_COLOR,[cm]:r.SRC_ALPHA,[A0]:r.SRC_ALPHA_SATURATE,[b0]:r.DST_COLOR,[E0]:r.DST_ALPHA,[y0]:r.ONE_MINUS_SRC_COLOR,[um]:r.ONE_MINUS_SRC_ALPHA,[w0]:r.ONE_MINUS_DST_COLOR,[T0]:r.ONE_MINUS_DST_ALPHA,[R0]:r.CONSTANT_COLOR,[C0]:r.ONE_MINUS_CONSTANT_COLOR,[P0]:r.CONSTANT_ALPHA,[L0]:r.ONE_MINUS_CONSTANT_ALPHA};function tt(D,J,Z,me,ue,ge,ce,_e,se,te){if(D===Ys){p===!0&&(Se(r.BLEND),p=!1);return}if(p===!1&&(ae(r.BLEND),p=!0),D!==p0){if(D!==g||te!==R){if((x!==Us||T!==Us)&&(r.blendEquation(r.FUNC_ADD),x=Us,T=Us),te)switch(D){case Oa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wl:r.blendFunc(r.ONE,r.ONE);break;case Uh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:pt("WebGLState: Invalid blending: ",D);break}else switch(D){case Oa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Uh:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",D);break}b=null,S=null,w=null,_=null,E.set(0,0,0),P=0,g=D,R=te}return}ue=ue||J,ge=ge||Z,ce=ce||me,(J!==x||ue!==T)&&(r.blendEquationSeparate(Ce[J],Ce[ue]),x=J,T=ue),(Z!==b||me!==S||ge!==w||ce!==_)&&(r.blendFuncSeparate(be[Z],be[me],be[ge],be[ce]),b=Z,S=me,w=ge,_=ce),(_e.equals(E)===!1||se!==P)&&(r.blendColor(_e.r,_e.g,_e.b,se),E.copy(_e),P=se),g=D,R=!1}function Ye(D,J){D.side===Ji?Se(r.CULL_FACE):ae(r.CULL_FACE);let Z=D.side===Wn;J&&(Z=!Z),W(Z),D.blending===Oa&&D.transparent===!1?tt(Ys):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const me=D.stencilWrite;o.setTest(me),me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),xt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function W(D){I!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),I=D)}function Ze(D){D!==f0?(ae(r.CULL_FACE),D!==N&&(D===Nh?r.cullFace(r.BACK):D===h0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),N=D}function Ot(D){D!==U&&(O&&r.lineWidth(D),U=D)}function xt(D,J,Z){D?(ae(r.POLYGON_OFFSET_FILL),(L!==J||z!==Z)&&(L=J,z=Z,a.getReversed()&&(J=-J,Z=-Z),r.polygonOffset(J,Z))):Se(r.POLYGON_OFFSET_FILL)}function nt(D){D?ae(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function yt(D){D===void 0&&(D=r.TEXTURE0+Y-1),C!==D&&(r.activeTexture(D),C=D)}function Gt(D,J,Z){Z===void 0&&(C===null?Z=r.TEXTURE0+Y-1:Z=C);let me=ee[Z];me===void 0&&(me={type:void 0,texture:void 0},ee[Z]=me),(me.type!==D||me.texture!==J)&&(C!==Z&&(r.activeTexture(Z),C=Z),r.bindTexture(D,J||oe[D]),me.type=D,me.texture=J)}function B(){const D=ee[C];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function mt(){try{r.compressedTexImage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function ft(){try{r.compressedTexImage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function We(){try{r.texSubImage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function pe(){try{r.texSubImage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function He(){try{r.texStorage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function A(){try{r.texStorage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function M(){try{r.texImage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function H(){try{r.texImage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function le(D){return d[D]!==void 0?d[D]:r.getParameter(D)}function re(D,J){d[D]!==J&&(r.pixelStorei(D,J),d[D]=J)}function de(D){$.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function ve(D){fe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),fe.copy(D))}function G(D,J){let Z=c.get(J);Z===void 0&&(Z=new WeakMap,c.set(J,Z));let me=Z.get(D);me===void 0&&(me=r.getUniformBlockIndex(J,D.name),r.uniformBlockBinding(J,me,me),Z.set(D,me))}function Q(D,J,Z){const ue=c.get(J).get(D);l[ue]!==Z&&(r.bindBufferBase(r.UNIFORM_BUFFER,ue,Z),l[ue]=Z)}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},C=null,ee={},f={},l={},h=new WeakMap,m=[],v=null,p=!1,g=null,x=null,b=null,S=null,T=null,w=null,_=null,E=new ct(0,0,0),P=0,R=!1,I=null,N=null,U=null,L=null,z=null,$.set(0,0,r.canvas.width,r.canvas.height),fe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Se,bindFramebuffer:Xe,drawBuffers:Te,useProgram:ke,setBlending:tt,setMaterial:Ye,setFlipSided:W,setCullFace:Ze,setLineWidth:Ot,setPolygonOffset:xt,setScissorTest:nt,activeTexture:yt,bindTexture:Gt,unbindTexture:B,compressedTexImage2D:mt,compressedTexImage3D:ft,texImage2D:M,texImage3D:H,pixelStorei:re,getParameter:le,updateUBOMapping:G,uniformBlockBinding:Q,texStorage2D:He,texStorage3D:A,texSubImage2D:We,texSubImage3D:pe,compressedTexSubImage2D:dt,compressedTexSubImage3D:Ne,scissor:de,viewport:ve,reset:he}}function DE(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap,d=new Set;let f;const h=new WeakMap,m=new Set,v=new FinalizationRegistry(A=>m.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):eo("canvas")}function x(A,M,H){let le=1;const re=He(A);if((re.width>H||re.height>H)&&(le=H/Math.max(re.width,re.height)),le<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const de=Math.floor(le*re.width),ve=Math.floor(le*re.height);f===void 0&&(f=g(de,ve));const G=M?g(de,ve):f;return G.width=de,G.height=ve,G.getContext("2d").drawImage(A,0,0,de,ve),Ve("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+de+"x"+ve+")."),G}else return"data"in A&&Ve("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),A;return A}function b(A){return A.generateMipmaps}function S(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(A,M,H,le,re,de=!1){if(A!==null){if(r[A]!==void 0)return r[A];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ve;le&&(ve=e.get("EXT_texture_norm16"),ve||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=M;if(M===r.RED&&(H===r.FLOAT&&(G=r.R32F),H===r.HALF_FLOAT&&(G=r.R16F),H===r.UNSIGNED_BYTE&&(G=r.R8),H===r.UNSIGNED_SHORT&&ve&&(G=ve.R16_EXT),H===r.SHORT&&ve&&(G=ve.R16_SNORM_EXT)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(G=r.R8UI),H===r.UNSIGNED_SHORT&&(G=r.R16UI),H===r.UNSIGNED_INT&&(G=r.R32UI),H===r.BYTE&&(G=r.R8I),H===r.SHORT&&(G=r.R16I),H===r.INT&&(G=r.R32I)),M===r.RG&&(H===r.FLOAT&&(G=r.RG32F),H===r.HALF_FLOAT&&(G=r.RG16F),H===r.UNSIGNED_BYTE&&(G=r.RG8),H===r.UNSIGNED_SHORT&&ve&&(G=ve.RG16_EXT),H===r.SHORT&&ve&&(G=ve.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(G=r.RG8UI),H===r.UNSIGNED_SHORT&&(G=r.RG16UI),H===r.UNSIGNED_INT&&(G=r.RG32UI),H===r.BYTE&&(G=r.RG8I),H===r.SHORT&&(G=r.RG16I),H===r.INT&&(G=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(G=r.RGB8UI),H===r.UNSIGNED_SHORT&&(G=r.RGB16UI),H===r.UNSIGNED_INT&&(G=r.RGB32UI),H===r.BYTE&&(G=r.RGB8I),H===r.SHORT&&(G=r.RGB16I),H===r.INT&&(G=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),H===r.UNSIGNED_INT&&(G=r.RGBA32UI),H===r.BYTE&&(G=r.RGBA8I),H===r.SHORT&&(G=r.RGBA16I),H===r.INT&&(G=r.RGBA32I)),M===r.RGB&&(H===r.UNSIGNED_SHORT&&ve&&(G=ve.RGB16_EXT),H===r.SHORT&&ve&&(G=ve.RGB16_SNORM_EXT),H===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),M===r.RGBA){const Q=de?Pl:ot.getTransfer(re);H===r.FLOAT&&(G=r.RGBA32F),H===r.HALF_FLOAT&&(G=r.RGBA16F),H===r.UNSIGNED_BYTE&&(G=Q===Mt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT&&ve&&(G=ve.RGBA16_EXT),H===r.SHORT&&ve&&(G=ve.RGBA16_SNORM_EXT),H===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(A,M){let H;return A?M===null||M===ki||M===ta?H=r.DEPTH24_STENCIL8:M===Ni?H=r.DEPTH32F_STENCIL8:M===ja&&(H=r.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===ta?H=r.DEPTH_COMPONENT24:M===Ni?H=r.DEPTH_COMPONENT32F:M===ja&&(H=r.DEPTH_COMPONENT16),H}function E(A,M){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==dn&&A.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){const M=new WeakRef(A);n.get(A).__ref=M,m.add(M),v.register(A,M,M)}function R(A){const M=n.get(A).__ref;M!==void 0&&(m.delete(M),v.unregister(M))}function I(A){U(A.target)}function N(A){L(A.target)}function U(A){A.removeEventListener("dispose",I),R(A),Y(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&d.delete(A)}function L(A){A.removeEventListener("dispose",N),R(A),j(A)}function z(){for(const A of m){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?L(M):U(M))}m.clear(),d.clear()}function Y(A){const M=n.get(A);if(M.__webglInit===void 0)return;const H=A.source,le=h.get(H);if(le){const re=le[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&O(A),Object.keys(le).length===0&&h.delete(H)}n.remove(A)}function O(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const H=A.source,le=h.get(H);delete le[M.__cacheKey],a.memory.textures--}function j(A){const M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const H=A.depthTexture;if(H&&H.renderTarget===A&&U(H),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let de=0;de<M.__webglFramebuffer[re].length;de++)r.deleteFramebuffer(M.__webglFramebuffer[re][de]);else r.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)r.deleteFramebuffer(M.__webglFramebuffer[re]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const le=A.textures;for(let re=0,de=le.length;re<de;re++){const ve=n.get(le[re]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(le[re])}n.remove(A)}let V=0;function C(){V=0}function ee(){return V}function Ee(A){V=A}function Oe(){const A=V;return A>=i.maxTextures&&Ve("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,A}function $(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function fe(A,M){const H=n.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const le=A.image;if(le===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(H,A,M);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function ie(A,M){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ye(H,A,M);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function oe(A,M){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ye(H,A,M);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function ae(A,M){const H=n.get(A);if(A.version>0&&H.__version!==A.version){W(H,A,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const Se={[pu]:r.REPEAT,[ji]:r.CLAMP_TO_EDGE,[mu]:r.MIRRORED_REPEAT},Xe={[dn]:r.NEAREST,[N0]:r.NEAREST_MIPMAP_NEAREST,[bo]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[pc]:r.LINEAR_MIPMAP_NEAREST,[er]:r.LINEAR_MIPMAP_LINEAR},Te={[B0]:r.NEVER,[Cm]:r.ALWAYS,[z0]:r.LESS,[Am]:r.LEQUAL,[k0]:r.EQUAL,[Rm]:r.GEQUAL,[H0]:r.GREATER,[G0]:r.NOTEQUAL};function ke(A,M){if(M.type===Ni&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===pc||M.magFilter===bo||M.magFilter===er||M.minFilter===zn||M.minFilter===pc||M.minFilter===bo||M.minFilter===er)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,Se[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Se[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Se[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,Xe[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,Xe[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==bo&&M.minFilter!==er||M.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(A,M){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",I),P(M));const le=M.source;let re=h.get(le);re===void 0&&(re={},h.set(le,re));const de=$(M);if(de!==A.__cacheKey){re[de]===void 0&&(re[de]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),re[de].usedTimes++;const ve=re[A.__cacheKey];ve!==void 0&&(re[A.__cacheKey].usedTimes--,ve.usedTimes===0&&O(M)),A.__cacheKey=de,A.__webglTexture=re[de].texture}return H}function be(A,M,H){return Math.floor(Math.floor(A/H)/M)}function tt(A,M,H,le){const de=A.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,H,le,M.data);else{de.sort((D,J)=>D.start-J.start);let ve=0;for(let D=1;D<de.length;D++){const J=de[ve],Z=de[D],me=J.start+J.count,ue=be(Z.start,M.width,4),ge=be(J.start,M.width,4);Z.start<=me+1&&ue===ge&&be(Z.start+Z.count-1,M.width,4)===ue?J.count=Math.max(J.count,Z.start+Z.count-J.start):(++ve,de[ve]=Z)}de.length=ve+1;const G=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),he=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let D=0,J=de.length;D<J;D++){const Z=de[D],me=Math.floor(Z.start/4),ue=Math.ceil(Z.count/4),ge=me%M.width,ce=Math.floor(me/M.width),_e=ue,se=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(r.UNPACK_SKIP_ROWS,ce),t.texSubImage2D(r.TEXTURE_2D,0,ge,ce,_e,se,H,le,M.data)}A.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,G),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function Ye(A,M,H){let le=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=r.TEXTURE_3D);const re=Ce(A,M),de=M.source;t.bindTexture(le,A.__webglTexture,r.TEXTURE0+H);const ve=n.get(de);if(de.version!==ve.__version||re===!0){if(t.activeTexture(r.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const se=ot.getPrimaries(ot.workingColorSpace),te=M.colorSpace===Sr?null:ot.getPrimaries(M.colorSpace),xe=M.colorSpace===Sr||se===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=x(M.image,!1,i.maxTextureSize);Q=Ne(M,Q);const he=s.convert(M.format,M.colorSpace),D=s.convert(M.type);let J=w(M.internalFormat,he,D,M.normalized,M.colorSpace,M.isVideoTexture);ke(le,M);let Z;const me=M.mipmaps,ue=M.isVideoTexture!==!0,ge=ve.__version===void 0||re===!0,ce=de.dataReady,_e=E(M,Q);if(M.isDepthTexture)J=_(M.format===wr,M.type),ge&&(ue?t.texStorage2D(r.TEXTURE_2D,1,J,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,J,Q.width,Q.height,0,he,D,null));else if(M.isDataTexture)if(me.length>0){ue&&ge&&t.texStorage2D(r.TEXTURE_2D,_e,J,me[0].width,me[0].height);for(let se=0,te=me.length;se<te;se++)Z=me[se],ue?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Z.width,Z.height,he,D,Z.data):t.texImage2D(r.TEXTURE_2D,se,J,Z.width,Z.height,0,he,D,Z.data);M.generateMipmaps=!1}else ue?(ge&&t.texStorage2D(r.TEXTURE_2D,_e,J,Q.width,Q.height),ce&&tt(M,Q,he,D)):t.texImage2D(r.TEXTURE_2D,0,J,Q.width,Q.height,0,he,D,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ue&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,J,me[0].width,me[0].height,Q.depth);for(let se=0,te=me.length;se<te;se++)if(Z=me[se],M.format!==Ui)if(he!==null)if(ue){if(ce)if(M.layerUpdates.size>0){const xe=fd(Z.width,Z.height,M.format,M.type);for(const ne of M.layerUpdates){const Ae=Z.data.subarray(ne*xe/Z.data.BYTES_PER_ELEMENT,(ne+1)*xe/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,ne,Z.width,Z.height,1,he,Ae)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Z.width,Z.height,Q.depth,he,Z.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,J,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Z.width,Z.height,Q.depth,he,D,Z.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,J,Z.width,Z.height,Q.depth,0,he,D,Z.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ue&&ge&&t.texStorage2D(r.TEXTURE_2D,_e,J,me[0].width,me[0].height);for(let se=0,te=me.length;se<te;se++)Z=me[se],M.format!==Ui?he!==null?ue?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,Z.width,Z.height,he,Z.data):t.compressedTexImage2D(r.TEXTURE_2D,se,J,Z.width,Z.height,0,Z.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Z.width,Z.height,he,D,Z.data):t.texImage2D(r.TEXTURE_2D,se,J,Z.width,Z.height,0,he,D,Z.data)}else if(M.isDataArrayTexture)if(ue){if(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,J,Q.width,Q.height,Q.depth),ce)if(M.layerUpdates.size>0){const se=fd(Q.width,Q.height,M.format,M.type);for(const te of M.layerUpdates){const xe=Q.data.subarray(te*se/Q.data.BYTES_PER_ELEMENT,(te+1)*se/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,Q.width,Q.height,1,he,D,xe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,D,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,J,Q.width,Q.height,Q.depth,0,he,D,Q.data);else if(M.isData3DTexture)ue?(ge&&t.texStorage3D(r.TEXTURE_3D,_e,J,Q.width,Q.height,Q.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,D,Q.data)):t.texImage3D(r.TEXTURE_3D,0,J,Q.width,Q.height,Q.depth,0,he,D,Q.data);else if(M.isFramebufferTexture){if(ge)if(ue)t.texStorage2D(r.TEXTURE_2D,_e,J,Q.width,Q.height);else{let se=Q.width,te=Q.height;for(let xe=0;xe<_e;xe++)t.texImage2D(r.TEXTURE_2D,xe,J,se,te,0,he,D,null),se>>=1,te>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const se=r.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Q.parentNode!==se){se.appendChild(Q),d.add(M),se.onpaint=te=>{const xe=te.changedElements;for(const ne of d)xe.includes(ne.image)&&(ne.needsUpdate=!0)},se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{const xe=r.RGBA,ne=r.RGBA,Ae=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xe,ne,Ae,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(me.length>0){if(ue&&ge){const se=He(me[0]);t.texStorage2D(r.TEXTURE_2D,_e,J,se.width,se.height)}for(let se=0,te=me.length;se<te;se++)Z=me[se],ue?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,he,D,Z):t.texImage2D(r.TEXTURE_2D,se,J,he,D,Z);M.generateMipmaps=!1}else if(ue){if(ge){const se=He(Q);t.texStorage2D(r.TEXTURE_2D,_e,J,se.width,se.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,D,Q)}else t.texImage2D(r.TEXTURE_2D,0,J,he,D,Q);b(M)&&M.mipmapsAutoUpdate===!0&&S(le),ve.__version=de.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function W(A,M,H){if(M.image.length!==6)return;const le=Ce(A,M),re=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+H);const de=n.get(re);if(re.version!==de.__version||le===!0){t.activeTexture(r.TEXTURE0+H);const ve=ot.getPrimaries(ot.workingColorSpace),G=M.colorSpace===Sr?null:ot.getPrimaries(M.colorSpace),Q=M.colorSpace===Sr||ve===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const he=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,J=[];for(let ne=0;ne<6;ne++)!he&&!D?J[ne]=x(M.image[ne],!0,i.maxCubemapSize):J[ne]=D?M.image[ne].image:M.image[ne],J[ne]=Ne(M,J[ne]);const Z=J[0],me=s.convert(M.format,M.colorSpace),ue=s.convert(M.type);let ge=w(M.internalFormat,me,ue,M.normalized,M.colorSpace);const ce=M.isVideoTexture!==!0,_e=de.__version===void 0||le===!0,se=re.dataReady;let te=E(M,Z);ke(r.TEXTURE_CUBE_MAP,M);let xe;if(M.isDepthTexture){if(ge=_(M.format===wr,M.type),_e)if(ce)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,ge,Z.width,Z.height);else for(let ne=0;ne<6;ne++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,Z.width,Z.height,0,me,ue,null)}else if(he){ce&&_e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,ge,Z.width,Z.height);for(let ne=0;ne<6;ne++){xe=J[ne].mipmaps;for(let Ae=0;Ae<xe.length;Ae++){const it=xe[Ae];M.format!==Ui?me!==null?ce?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,it.width,it.height,me,it.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,ge,it.width,it.height,0,it.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,it.width,it.height,me,ue,it.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,ge,it.width,it.height,0,me,ue,it.data)}}}else{if(xe=M.mipmaps,ce&&_e){xe.length>0&&te++;const ne=He(J[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(D){ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,J[ne].width,J[ne].height,me,ue,J[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,J[ne].width,J[ne].height,0,me,ue,J[ne].data);for(let Ae=0;Ae<xe.length;Ae++){const $e=xe[Ae].image[ne].image;ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,$e.width,$e.height,me,ue,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,ge,$e.width,$e.height,0,me,ue,$e.data)}}else{ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me,ue,J[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,me,ue,J[ne]);for(let Ae=0;Ae<xe.length;Ae++){const it=xe[Ae];ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,me,ue,it.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,ge,me,ue,it.image[ne])}}}b(M)&&M.mipmapsAutoUpdate===!0&&S(r.TEXTURE_CUBE_MAP),de.__version=re.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ze(A,M,H,le,re,de){const ve=s.convert(H.format,H.colorSpace),G=s.convert(H.type),Q=w(H.internalFormat,ve,G,H.normalized,H.colorSpace),he=n.get(M),D=n.get(H);if(D.__renderTarget=M,!he.__hasExternalTextures){const J=Math.max(1,M.width>>de),Z=Math.max(1,M.height>>de);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,de,Q,J,Z,M.depth,0,ve,G,null):t.texImage2D(re,de,Q,J,Z,0,ve,G,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),pe(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,re,D.__webglTexture,0,We(M)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,re,D.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(A,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){const le=M.depthTexture,re=le&&le.isDepthTexture?le.type:null,de=_(M.stencilBuffer,re),ve=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pe(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We(M),de,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,We(M),de,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,de,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,A)}else{const le=M.textures;for(let re=0;re<le.length;re++){const de=le[re],ve=s.convert(de.format,de.colorSpace),G=s.convert(de.type),Q=w(de.internalFormat,ve,G,de.normalized,de.colorSpace);pe(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We(M),Q,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,We(M),Q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Q,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(A,M,H){const le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=n.get(M.depthTexture);re.__renderTarget=M;const de=le?M.depthTexture.image[0]:M.depthTexture.image;(!re.__webglTexture||de.width!==M.width||de.height!==M.height)&&(de.width=M.width,de.height=M.height,M.depthTexture.needsUpdate=!0),le?ae(M.depthTexture,0):fe(M.depthTexture,0);const ve=re.__webglTexture,G=We(M),Q=le?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,he=M.depthTexture.format===wr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ur)pe(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,Q,ve,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,he,Q,ve,0);else if(M.depthTexture.format===wr)pe(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,Q,ve,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,he,Q,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){const M=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const le=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",re)};le.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=le}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let le=0;le<6;le++)xt(M.__webglFramebuffer[le],A,le);else A.texture.mipmaps.length>0?xt(M.__webglFramebuffer[0],A,0):xt(M.__webglFramebuffer,A,0);else if(H){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=r.createRenderbuffer(),Ot(M.__webglDepthbuffer[le],A,!1);else{const re=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,de)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ot(M.__webglDepthbuffer,A,!1);else{const re=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,de)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(A,M,H){const le=n.get(A);M!==void 0&&Ze(le.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&nt(A)}function Gt(A){const M=A.texture,H=n.get(A),le=n.get(M);A.addEventListener("dispose",N),P(A);const re=A.textures,de=A.isWebGLCubeRenderTarget===!0,ve=re.length>1;if(ve||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=M.version,a.memory.textures++),de){H.__webglFramebuffer=[];for(let G=0;G<6;G++)if(M.mipmaps.length>0){H.__webglFramebuffer[G]=[];for(let Q=0;Q<M.mipmaps.length;Q++)H.__webglFramebuffer[G][Q]=r.createFramebuffer()}else H.__webglFramebuffer[G]=r.createFramebuffer()}else{if(M.mipmaps.length>0){H.__webglFramebuffer=[];for(let G=0;G<M.mipmaps.length;G++)H.__webglFramebuffer[G]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(ve)for(let G=0,Q=re.length;G<Q;G++){const he=n.get(re[G]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&pe(A)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let G=0;G<re.length;G++){const Q=re[G];H.__webglColorRenderbuffer[G]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[G]);const he=s.convert(Q.format,Q.colorSpace),D=s.convert(Q.type),J=w(Q.internalFormat,he,D,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),Z=We(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,J,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+G,r.RENDERBUFFER,H.__webglColorRenderbuffer[G])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ot(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),ke(r.TEXTURE_CUBE_MAP,M);for(let G=0;G<6;G++)if(M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ze(H.__webglFramebuffer[G][Q],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,Q);else Ze(H.__webglFramebuffer[G],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);b(M)?S(r.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let G=0,Q=re.length;G<Q;G++){const he=re[G],D=n.get(he);let J=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(J,D.__webglTexture),ke(J,he),Ze(H.__webglFramebuffer,A,he,r.COLOR_ATTACHMENT0+G,J,0),b(he)&&S(J)}t.unbindTexture()}else{let G=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(G=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(G,le.__webglTexture),ke(G,M),M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ze(H.__webglFramebuffer[Q],A,M,r.COLOR_ATTACHMENT0,G,Q);else Ze(H.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,G,0);b(M)?S(G):M.mipmaps.length>0&&r.texParameteri(G,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&nt(A)}function B(A){const M=A.textures;for(let H=0,le=M.length;H<le;H++){const re=M[H];if(b(re)&&re.mipmapsAutoUpdate===!0){const de=T(A),ve=n.get(re).__webglTexture;t.bindTexture(de,ve),S(de),t.unbindTexture()}}}const mt=[];function ft(A){if(A.samples>0){if(pe(A)===!1){const M=A.textures,H=A.width,le=A.height;let re=r.COLOR_BUFFER_BIT;const de=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(A),G=M.length>1;if(G)for(let he=0;he<M.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<M.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),G){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const D=n.get(M[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,H,le,0,0,H,le,re,r.NEAREST),l===!0&&(mt.length=0,mt.push(r.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&mt.push(de),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),G)for(let he=0;he<M.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const D=n.get(M[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,D,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function We(A){return Math.min(i.maxSamples,A.samples)}function pe(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dt(A){const M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Ne(A,M){const H=A.colorSpace,le=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Cl&&H!==Sr&&(ot.getTransfer(H)===Mt?(le!==Ui||re!==di)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",H)),M}function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=C,this.getTextureUnits=ee,this.setTextureUnits=Ee,this.setTexture2D=fe,this.setTexture2DArray=ie,this.setTexture3D=oe,this.setTextureCube=ae,this.rebindTextures=yt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=pe,this.dispose=z}function IE(r,e){function t(n,i=Sr){let s;const a=ot.getTransfer(i);if(n===di)return r.UNSIGNED_BYTE;if(n===Rf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Cf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ym)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Em)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sm)return r.BYTE;if(n===Mm)return r.SHORT;if(n===ja)return r.UNSIGNED_SHORT;if(n===Af)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===Hi)return r.HALF_FLOAT;if(n===Tm)return r.ALPHA;if(n===bm)return r.RGB;if(n===Ui)return r.RGBA;if(n===Ur)return r.DEPTH_COMPONENT;if(n===wr)return r.DEPTH_STENCIL;if(n===wm)return r.RED;if(n===Pf)return r.RED_INTEGER;if(n===cs)return r.RG;if(n===Lf)return r.RG_INTEGER;if(n===Df)return r.RGBA_INTEGER;if(n===ol||n===ll||n===cl||n===ul)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gu||n===_u||n===vu||n===xu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_u)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Su||n===Mu||n===yu||n===Eu||n===Tu||n===Al||n===bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Su||n===Mu)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eu)return s.COMPRESSED_R11_EAC;if(n===Tu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Al)return s.COMPRESSED_RG11_EAC;if(n===bu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wu||n===Au||n===Ru||n===Cu||n===Pu||n===Lu||n===Du||n===Iu||n===Nu||n===Uu||n===Fu||n===Ou||n===Bu||n===zu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Au)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ru)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Du)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Iu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ou)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ku||n===Hu||n===Gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ku)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===Wu||n===Rl||n===Xu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ta?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const NE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UE=`
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

}`;class FE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new km(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bi({vertexShader:NE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bi(new ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OE extends ds{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",p=new FE,g={},x=t.getContextAttributes();let b=null,S=null;const T=[],w=[],_=new ut;let E=null,P=null;const R=new yi;R.viewport=new kt;const I=new yi;I.viewport=new kt;const N=[R,I],U=new qv;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=T[$];return fe===void 0&&(fe=new Mc,T[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=T[$];return fe===void 0&&(fe=new Mc,T[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=T[$];return fe===void 0&&(fe=new Mc,T[$]=fe),fe.getHandSpace()};function Y($){const fe=w.indexOf($.inputSource);if(fe===-1)return;const ie=T[fe];ie!==void 0&&(ie.update($.inputSource,$.frame,c||a),ie.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",j);for(let $=0;$<T.length;$++){const fe=w[$];fe!==null&&(w[$]=null,T[$].disconnect(fe))}L=null,z=null,p.reset();for(const $ in g)delete g[$];if(e.setRenderTarget(b),h=null,f=null,d=null,i=null,S=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),P!==null){const $=P.camera;$.fov=P.fov,$.zoom=P.zoom,$.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",O),i.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,oe=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=x.stencil?wr:Ur,oe=x.stencil?ta:ki);const Se={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Se),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Oi(f.textureWidth,f.textureHeight,{format:Ui,type:di,depthTexture:new na(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Oi(h.framebufferWidth,h.framebufferHeight,{format:Ui,type:di,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j($){for(let fe=0;fe<$.removed.length;fe++){const ie=$.removed[fe],oe=w.indexOf(ie);oe>=0&&(w[oe]=null,T[oe].disconnect(ie))}for(let fe=0;fe<$.added.length;fe++){const ie=$.added[fe];let oe=w.indexOf(ie);if(oe===-1){for(let Se=0;Se<T.length;Se++)if(Se>=w.length){w.push(ie),oe=Se;break}else if(w[Se]===null){w[Se]=ie,oe=Se;break}if(oe===-1)break}const ae=T[oe];ae&&ae.connect(ie)}}function V($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let fe=$.near,ie=$.far;p.texture!==null&&(p.depthNear>0&&(fe=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),U.near=I.near=R.near=fe,U.far=I.far=R.far=ie,(L!==U.near||z!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,z=U.far),U.layers.mask=$.layers.mask|6,R.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;const oe=$.parent,ae=U.cameras;V(U,oe);for(let Se=0;Se<ae.length;Se++)V(ae[Se],oe);U.projectionMatrix.copy(R.projectionMatrix),U.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&$.isPerspectiveCamera&&(P={camera:$,fov:$.fov,zoom:$.zoom}),C($,U,oe)};function C($,fe,ie){ie===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(ie.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=to*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function($){return g[$]};let ee=null;function Ee($,fe){if(u=fe.getViewerPose(c||a),m=fe,u!==null){const ie=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let oe=!1;ie.length!==U.cameras.length&&(U.cameras.length=0,oe=!0);for(let Te=0;Te<ie.length;Te++){const ke=ie[Te];let Ce=null;if(h!==null)Ce=h.getViewport(ke);else{const tt=d.getViewSubImage(f,ke);Ce=tt.viewport,Te===0&&(e.setRenderTargetTextures(S,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(S))}let be=N[Te];be===void 0&&(be=new yi,be.layers.enable(Te),be.viewport=new kt,N[Te]=be),be.matrix.fromArray(ke.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(ke.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Te===0&&(U.matrix.copy(be.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),oe===!0&&U.cameras.push(be)}const ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Te=d.getDepthInformation(ie[0]);Te&&Te.isValid&&Te.texture&&p.init(Te,i.renderState)}if(ae&&ae.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Te=0;Te<ie.length;Te++){const ke=ie[Te].camera;if(ke){let Ce=g[ke];Ce||(Ce=new km,g[ke]=Ce);const be=d.getCameraImage(ke);Ce.sourceTexture=be}}}}for(let ie=0;ie<T.length;ie++){const oe=w[ie],ae=T[ie];oe!==null&&ae!==void 0&&ae.update(oe,fe,c||a)}ee&&ee($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),m=null}const Oe=new Wm;Oe.setAnimationLoop(Ee),this.setAnimationLoop=function($){ee=$},this.dispose=function(){}}}const BE=new Ft,eg=new qe;eg.set(-1,0,0,0,1,0,0,0,1);function zE(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Hm(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,x,b,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,S)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),v(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,x,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Wn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Wn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=e.get(g),b=x.envMap,S=x.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(BE.makeRotationFromEuler(S)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(eg),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,x){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Wn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kE(r,e,t,n){let i={},s={};function a(x,b){const S=b.program;n.uniformBlockBinding(x,S,i[x.id])}function o(x,b){let S=i[x.id];S===void 0&&(m(x),S=l(x),i[x.id]=S,x.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(x,T);const w=e.render.frame;s[x.id]!==w&&(c(x),s[x.id]=w)}function l(x){const b=r.createBuffer(),S=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function c(x){const b=i[x.id],S=x.uniforms,T=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,_=S.length;w<_;w++){const E=S[w];if(Array.isArray(E))for(let P=0,R=E.length;P<R;P++)u(E[P],w,P,T);else u(E,w,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(x,b,S,T){if(f(x,b,S,T)===!0){const w=x.__offset,_=x.value;if(Array.isArray(_)){let E=0;for(let P=0;P<_.length;P++){const R=_[P],I=v(R,!0);d(R,x.__data,E),E+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,x.__data)}}function d(x,b,S){typeof x=="number"||typeof x=="boolean"?b[S]=x:x.isMatrix3?(b[S]=x.elements[0],b[S+1]=x.elements[1],b[S+2]=x.elements[2],b[S+3]=0,b[S+4]=x.elements[3],b[S+5]=x.elements[4],b[S+6]=x.elements[5],b[S+7]=0,b[S+8]=x.elements[6],b[S+9]=x.elements[7],b[S+10]=x.elements[8],b[S+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-S),S):x.toArray(b,S)}function f(x,b,S,T){const w=x.value,_=b+"_"+S;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);const E=T[_];let P=!1;for(let R=0;R<w.length;R++)h(w[R],E,R)===!0&&(P=!0);return P}return h(w,T,_)}function h(x,b,S){if(b[S]===void 0)return typeof x=="number"||typeof x=="boolean"?b[S]=x:ArrayBuffer.isView(x)?b[S]=x.slice():b[S]=x.clone(),!0;{const T=b[S];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return b[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function m(x){const b=x.uniforms;let S=0;const T=16;for(let _=0,E=b.length;_<E;_++){const P=Array.isArray(b[_])?b[_]:[b[_]];for(let R=0,I=P.length;R<I;R++){const N=P[R],U=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(b[_])||Array.isArray(N.value);let z=S;for(let O=0,j=U.length;O<j;O++){const V=U[O],C=v(V,L),ee=S%T,Ee=ee%C.boundary,Oe=ee+Ee;S+=Ee,Oe!==0&&T-Oe<C.storage&&(S+=T-Oe),O===0&&(z=S),S+=C.storage}const Y=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new Y((S-z)/Float32Array.BYTES_PER_ELEMENT),N.__offset=z}}const w=S%T;return w>0&&(S+=T-w),x.__size=S,x.__cache={},this}function v(x,b){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=16,S.storage=48):x.isMatrix4?(S.boundary=16,S.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(x){const b=x.target;b.removeEventListener("dispose",p),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);i={},s={}}return{bind:a,update:o,dispose:g}}const HE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function GE(){return Ai===null&&(Ai=new Dv(HE,16,16,cs,Hi),Ai.name="DFG_LUT",Ai.minFilter=zn,Ai.magFilter=zn,Ai.wrapS=ji,Ai.wrapT=ji,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class VE{constructor(e={}){const{canvas:t=X0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=di}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=h,p=new Set([Df,Lf,Pf]),g=new Set([di,ki,ja,ta,Rf,Cf]),x=new Uint32Array(4),b=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let T=null,w=null;const _=[],E=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,N=null,U=null,L=null,z=null;this._outputColorSpace=Fn;let Y=0,O=0,j=null,V=-1,C=null;const ee=new kt,Ee=new kt;let Oe=null;const $=new ct(0);let fe=0,ie=t.width,oe=t.height,ae=1,Se=null,Xe=null;const Te=new kt(0,0,ie,oe),ke=new kt(0,0,ie,oe);let Ce=!1;const be=new Dl,tt=new Bf;let Ye=!1,W=!1;const Ze=new Ft,Ot=new K,xt=new kt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Gt(){return j===null?ae:1}let B=n;function mt(y,F){return t.getContext(y,F)}let ft,We,pe,dt,Ne,He,A,M,H,le,re,de,ve,G,Q,he,D,J,Z,me,ue,ge,ce;try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wf}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ne,!1),B===null){const F="webgl2";if(B=mt(F,y),B===null)throw mt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_e()}catch(y){throw t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),pt("WebGLRenderer: "+y.message),y}function _e(){ft=new YM(B),ft.init(),ue=new IE(B,ft),We=new UM(B,ft,e,ue),pe=new LE(B,ft),We.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),U=B.createFramebuffer(),L=B.createFramebuffer(),z=B.createFramebuffer(),dt=new KM(B),Ne=new _E,He=new DE(B,ft,pe,Ne,We,ue,dt),A=new XM(R),M=new Jv(B),ge=new IM(B,M),H=new qM(B,M,dt,ge),le=new JM(B,H,M,ge,dt),J=new ZM(B,We,He),Q=new FM(Ne),re=new gE(R,A,ft,We,ge,Q),de=new zE(R,Ne),ve=new xE,G=new bE(ft),D=new DM(R,A,pe,le,m,l),he=new PE(R,le,We),ce=new kE(B,dt,We,pe),Z=new NM(B,ft,dt),me=new $M(B,ft,dt),dt.programs=re.programs,R.capabilities=We,R.extensions=ft,R.properties=Ne,R.renderLists=ve,R.shadowMap=he,R.state=pe,R.info=dt}v!==di&&(P=new jM(v,t.width,t.height,o,i,s));const se=new OE(R,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const y=ft.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ft.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(y){y!==void 0&&(ae=y,this.setSize(ie,oe,!1))},this.getSize=function(y){return y.set(ie,oe)},this.setSize=function(y,F,q=!0){if(se.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=y,oe=F,t.width=Math.floor(y*ae),t.height=Math.floor(F*ae),q===!0&&(t.style.width=y+"px",t.style.height=F+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(ie*ae,oe*ae).floor()},this.setDrawingBufferSize=function(y,F,q){ie=y,oe=F,ae=q,t.width=Math.floor(y*q),t.height=Math.floor(F*q),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(v===di){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ee)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,F,q,k){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,F,q,k),pe.viewport(ee.copy(Te).multiplyScalar(Gt()).round())},this.getScissor=function(y){return y.copy(ke)},this.setScissor=function(y,F,q,k){y.isVector4?ke.set(y.x,y.y,y.z,y.w):ke.set(y,F,q,k),pe.scissor(Ee.copy(ke).multiplyScalar(Gt()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(y){pe.setScissorTest(Ce=y)},this.setOpaqueSort=function(y){Se=y},this.setTransparentSort=function(y){Xe=y},this.getClearColor=function(y){return y.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,q=!0){let k=0;if(y){let X=!1;if(j!==null){const ye=j.texture.format;X=p.has(ye)}if(X){const ye=j.texture.type,Le=g.has(ye),Me=D.getClearColor(),Re=D.getClearAlpha(),Ue=Me.r,Ke=Me.g,rt=Me.b;Le?(x[0]=Ue,x[1]=Ke,x[2]=rt,x[3]=Re,B.clearBufferuiv(B.COLOR,0,x)):(b[0]=Ue,b[1]=Ke,b[2]=rt,b[3]=Re,B.clearBufferiv(B.COLOR,0,b))}else k|=B.COLOR_BUFFER_BIT}F&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),D.dispose(),ve.dispose(),G.dispose(),He.dispose(),Ne.dispose(),A.dispose(),le.dispose(),H.dispose(),ge.dispose(),ce.dispose(),re.dispose(),se.dispose(),se.removeEventListener("sessionstart",Tt),se.removeEventListener("sessionend",_t),Qt.stop()};function te(y){y.preventDefault(),kh("WebGLRenderer: Context Lost."),I=!0}function xe(){kh("WebGLRenderer: Context Restored."),I=!1;const y=dt.autoReset,F=he.enabled,q=he.autoUpdate,k=he.needsUpdate,X=he.type;_e(),dt.autoReset=y,he.enabled=F,he.autoUpdate=q,he.needsUpdate=k,he.type=X}function ne(y){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ae(y){const F=y.target;F.removeEventListener("dispose",Ae),it(F)}function it(y){$e(y),Ne.remove(y)}function $e(y){const F=Ne.get(y).programs;F!==void 0&&(F.forEach(function(q){re.releaseProgram(q)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,q,k,X,ye){F===null&&(F=nt);const Le=X.isMesh&&X.matrixWorld.determinantAffine()<0,Me=li(y,F,q,k,X);pe.setMaterial(k,Le);let Re=q.index,Ue=1;if(k.wireframe===!0){if(Re=H.getWireframeAttribute(q),Re===void 0)return;Ue=2}const Ke=q.drawRange,rt=q.attributes.position;let De=Ke.start*Ue,st=(Ke.start+Ke.count)*Ue;ye!==null&&(De=Math.max(De,ye.start*Ue),st=Math.min(st,(ye.start+ye.count)*Ue)),Re!==null?(De=Math.max(De,0),st=Math.min(st,Re.count)):rt!=null&&(De=Math.max(De,0),st=Math.min(st,rt.count));const $t=st-De;if($t<0||$t===1/0)return;ge.setup(X,k,Me,q,Re);let Rt,wt=Z;if(Re!==null&&(Rt=M.get(Re),wt=me,wt.setIndex(Rt)),X.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*Gt()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if(X.isLine){let _n=k.linewidth;_n===void 0&&(_n=1),pe.setLineWidth(_n*Gt()),X.isLineSegments?wt.setMode(B.LINES):X.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else X.isPoints?wt.setMode(B.POINTS):X.isSprite&&wt.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const _n=X._multiDrawStarts,Ie=X._multiDrawCounts,An=X._multiDrawCount,gt=Re?M.get(Re).bytesPerElement:1,Or=Ne.get(k).currentProgram.getUniforms();for(let vn=0;vn<An;vn++)Or.setValue(B,"_gl_DrawID",vn),wt.render(_n[vn]/gt,Ie[vn])}else if(X.isInstancedMesh)wt.renderInstances(De,$t,X.count);else if(q.isInstancedBufferGeometry){const _n=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,_n);wt.renderInstances(De,$t,Ie)}else wt.render(De,$t)};function Ct(y,F,q,k){N!==null&&y.isNodeMaterial&&N.setObject(k,y),Ye===!0&&Q.setState(y,q,!1),y.transparent===!0&&y.side===Ji&&y.forceSinglePass===!1?(y.side=Wn,y.needsUpdate=!0,$n(y,F,k),y.side=ls,y.needsUpdate=!0,$n(y,F,k),y.side=Ji):$n(y,F,k)}this.compile=function(y,F,q=null){q===null&&(q=y),N!==null&&N.renderStart(y,F,q),w=G.get(q),w.init(F),E.push(w),q.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),y!==q&&y.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),W=this.localClippingEnabled,Ye=Q.init(this.clippingPlanes,W),Ye===!0&&Q.setGlobalState(this.clippingPlanes,F),N!==null&&he.render(w.state.shadowsArray,q,F);const k=new Set;return y.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ye=X.material;if(ye)if(Array.isArray(ye))for(let Le=0;Le<ye.length;Le++){const Me=ye[Le];Ct(Me,q,F,X),k.add(Me)}else Ct(ye,q,F,X),k.add(ye)}),w=E.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(y,F,q=null){const k=this.compile(y,F,q);return new Promise(X=>{function ye(){if(k.forEach(function(Le){const Re=Ne.get(Le).currentProgram;(Re===void 0||Re.isReady())&&k.delete(Le)}),k.size===0){X(y);return}setTimeout(ye,10)}ft.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Yt=null;function Pt(y){Yt&&Yt(y)}function Tt(){Qt.stop()}function _t(){Qt.start()}const Qt=new Wm;Qt.setAnimationLoop(Pt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(y){Yt=y,se.setAnimationLoop(y),y===null?Qt.stop():Qt.start()},se.addEventListener("sessionstart",Tt),se.addEventListener("sessionend",_t),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(y,F);const q=se.enabled===!0&&se.isPresenting===!0,k=P!==null&&(j===null||q)&&P.begin(R,j);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,F,j),w=G.get(y,E.length),w.init(F),w.state.textureUnits=He.getTextureUnits(),E.push(w),Ze.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?tt.setFromArrayCamera(F):be.setFromProjectionMatrix(Ze,Ti,F.reversedDepth),W=this.localClippingEnabled,Ye=Q.init(this.clippingPlanes,W),T=ve.get(y,_.length),T.init(),_.push(T),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Le=R.xr.getDepthSensingMesh();Le!==null&&bt(Le,F,-1/0,R.sortObjects)}bt(y,F,0,R.sortObjects),T.finish(),N!==null&&N.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(Se,Xe),yt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,yt&&D.addToRenderList(T,y),this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Q.beginShadows();const X=w.state.shadowsArray;if(he.render(X,y,F),Ye===!0&&Q.endShadows(),(k&&P.hasRenderPass())===!1){const Le=T.opaque,Me=T.transmissive;if(w.setupLights(),F.isArrayCamera){const Re=F.cameras;if(Me.length>0)for(let Ue=0,Ke=Re.length;Ue<Ke;Ue++){const rt=Re[Ue];qn(Le,Me,y,rt)}yt&&D.render(y);for(let Ue=0,Ke=Re.length;Ue<Ke;Ue++){const rt=Re[Ue];gn(T,y,rt,rt.viewport)}}else Me.length>0&&qn(Le,Me,y,F),yt&&D.render(y),gn(T,y,F)}j!==null&&O===0&&(He.updateMultisampleRenderTarget(j),He.updateRenderTargetMipmap(j)),k&&P.end(R),y.isScene===!0&&y.onAfterRender(R,y,F),ge.resetDefaultState(),V=-1,C=null,E.pop(),E.length>0?(w=E[E.length-1],He.setTextureUnits(w.state.textureUnits),Ye===!0&&Q.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,N!==null&&N.renderEnd()};function bt(y,F,q,k){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){const Le=F.isArrayCamera?tt:be;if(!y.frustumCulled||y.intersectsFrustum(Le)){k&&xt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ze);const Me=le.update(y),Re=y.material;Re.visible&&T.push(y,Me,Re,q,xt.z,null,F)}}else if(y.isMesh||y.isLine||y.isPoints){const Le=F.isArrayCamera?tt:be;if(!y.frustumCulled||y.intersectsFrustum(Le)){const Me=le.update(y),Re=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),xt.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),xt.copy(Me.boundingSphere.center)),xt.applyMatrix4(y.matrixWorld).applyMatrix4(Ze)),Array.isArray(Re)){const Ue=Me.groups;for(let Ke=0,rt=Ue.length;Ke<rt;Ke++){const De=Ue[Ke],st=Re[De.materialIndex];st&&st.visible&&T.push(y,Me,st,q,xt.z,De,F)}}else Re.visible&&T.push(y,Me,Re,q,xt.z,null,F)}}}const ye=y.children;for(let Le=0,Me=ye.length;Le<Me;Le++)bt(ye[Le],F,q,k)}function gn(y,F,q,k){const{opaque:X,transmissive:ye,transparent:Le}=y;w.setupLightsView(q),Ye===!0&&Q.setGlobalState(R.clippingPlanes,q),k&&pe.viewport(ee.copy(k)),X.length>0&&Bt(X,F,q),ye.length>0&&Bt(ye,F,q),Le.length>0&&Bt(Le,F,q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function qn(y,F,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const De=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Oi(1,1,{generateMipmaps:!0,type:De?Hi:di,minFilter:er,samples:Math.max(4,We.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const ye=w.state.transmissionRenderTarget[k.id],Le=k.viewport||ee;ye.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);const Me=R.getRenderTarget(),Re=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor($),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),yt&&D.render(q);const Ke=R.toneMapping;R.toneMapping=nr;const rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Ye===!0&&Q.setGlobalState(R.clippingPlanes,k),Bt(y,q,k),He.updateMultisampleRenderTarget(ye),He.updateRenderTargetMipmap(ye),ft.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let st=0,$t=F.length;st<$t;st++){const Rt=F[st],{object:wt,geometry:_n,material:Ie,group:An}=Rt;if(Ie.side===Ji&&wt.layers.test(k.layers)){const gt=Ie.side;Ie.side=Wn,Ie.needsUpdate=!0,qt(wt,q,k,_n,Ie,An),Ie.side=gt,Ie.needsUpdate=!0,De=!0}}De===!0&&(He.updateMultisampleRenderTarget(ye),He.updateRenderTargetMipmap(ye))}R.setRenderTarget(Me,Re,Ue),R.setClearColor($,fe),rt!==void 0&&(k.viewport=rt),R.toneMapping=Ke}function Bt(y,F,q){const k=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ye=y.length;X<ye;X++){const Le=y[X],{object:Me,geometry:Re,group:Ue}=Le;let Ke=Le.material;Ke.allowOverride===!0&&k!==null&&(Ke=k),Me.layers.test(q.layers)&&qt(Me,F,q,Re,Ke,Ue)}}function qt(y,F,q,k,X,ye){N!==null&&X.isNodeMaterial&&N.setObject(y,X),y.onBeforeRender(R,F,q,k,X,ye),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),X.onBeforeRender(R,F,q,k,y,ye),X.transparent===!0&&X.side===Ji&&X.forceSinglePass===!1?(X.side=Wn,X.needsUpdate=!0,R.renderBufferDirect(q,F,k,X,y,ye),X.side=ls,X.needsUpdate=!0,R.renderBufferDirect(q,F,k,X,y,ye),X.side=Ji):R.renderBufferDirect(q,F,k,X,y,ye),y.onAfterRender(R,F,q,k,X,ye)}function jt(y){let F=0;for(const q of y)q.texture!==null&&F++;return F}function $n(y,F,q){F.isScene!==!0&&(F=nt);const k=Ne.get(y),X=w.state.lights,ye=w.state.shadowsArray,Le=X.state.version,Me=re.getParameters(y,X.state,ye,F,q,w.state.lightProbeGridArray),Re=re.getProgramCacheKey(Me);let Ue=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;const Ke=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=A.get(y.envMap||k.environment,Ke),k.envMapRotation=k.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",Ae),Ue=new Map,k.programs=Ue,k.programVariants=new Map);let rt=Ue.get(Re);if(rt!==void 0){if(k.currentProgram===rt&&k.lightsStateVersion===Le)return zt(y,Me),rt}else Me.uniforms=re.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,q,Me),y.onBeforeCompile(Me,R),rt=re.acquireProgram(Me,Re),Ue.set(Re,rt),k.uniforms=Me.uniforms;const De=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=Q.uniform),zt(y,Me),k.needsLights=co(y),k.lightsStateVersion=Le,k.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.sunLights.value=X.state.sun,De.sunLightShadows.value=X.state.sunShadow,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.sunShadowMatrix.value=X.state.sunShadowMatrix,De.sunShadowCascade.value=X.state.sunShadowCascade,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix),k.numLightProbeGrids=jt(w.state.lightProbeGridArray),k.currentProgram=rt,k.uniformsList=null,rt}function ps(y,F,q,k,X){const ye=Ne.get(y),Le=ye.currentProgram.id+","+k+","+X;let Me=ye.programVariants.get(Le);return Me===void 0?(Me=$n(y,F,q),ye.programVariants.set(Le,Me)):(ye.currentProgram=Me,ye.uniformsList=null,ye.outputColorSpace=k,ye.toneMapping=X),Me}function en(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=hl.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function zt(y,F){const q=Ne.get(y);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function li(y,F,q,k,X){F.isScene!==!0&&(F=nt),He.resetTextureUnits();const ye=F.fog,Le=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,Me=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ot.workingColorSpace,Re=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ue=A.get(k.envMap||Le,Re),Ke=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,rt=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,$t=!!q.morphAttributes.color;let Rt=nr;k.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Rt=R.toneMapping);const wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_n=wt!==void 0?wt.length:0,Ie=Ne.get(k),An=w.state.lights;if(Ye===!0&&(W===!0||y!==C)){const Dt=y===C&&k.id===V;Q.setState(k,y,Dt)}let gt=!1,Or=!1;k.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==An.state.version||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==Ue||k.fog===!0&&Ie.fog!==ye||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Q.numPlanes||Ie.numIntersection!==Q.numIntersection)||Ie.vertexAlphas!==Ke||Ie.vertexTangents!==rt||Ie.morphTargets!==De||Ie.morphNormals!==st||Ie.morphColors!==$t||Ie.morphTargetsCount!==_n||Ie.numLightProbeGrids!==jt(w.state.lightProbeGridArray)?gt=!0:(Ie.outputColorSpace!==Me||Ie.toneMapping!==Rt)&&(Or=!0):(gt=!0,Ie.__version=k.version);let vn=Ie.currentProgram;(gt===!0||Or===!0)&&(vn=Or===!0?ps(k,F,X,Me,Rt):$n(k,F,X),N&&k.isNodeMaterial&&N.onUpdateProgram(k,vn,Ie));let uo=!1,fr=!1,Br=!1;const ht=vn.getUniforms(),fn=Ie.uniforms;if(pe.useProgram(vn.program)&&(uo=!0,fr=!0,Br=!0),k.id!==V&&(V=k.id,fr=!0),uo||C!==y){pe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(B,"projectionMatrix",y.projectionMatrix),ht.setValue(B,"viewMatrix",y.matrixWorldInverse);const an=ht.map.cameraPosition;an!==void 0&&an.setValue(B,Ot.setFromMatrixPosition(y.matrixWorld)),We.logarithmicDepthBuffer&&ht.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),C!==y&&(C=y,fr=!0,Br=!0)}if(Ie.needsLights&&(An.state.sunShadowMap.length>0&&ht.setValue(B,"sunShadowMap",An.state.sunShadowMap,He),An.state.directionalShadowMap.length>0&&ht.setValue(B,"directionalShadowMap",An.state.directionalShadowMap,He),An.state.spotShadowMap.length>0&&ht.setValue(B,"spotShadowMap",An.state.spotShadowMap,He),An.state.pointShadowMap.length>0&&ht.setValue(B,"pointShadowMap",An.state.pointShadowMap,He)),X.isSkinnedMesh){ht.setOptional(B,X,"bindMatrix"),ht.setOptional(B,X,"bindMatrixInverse");const Dt=X.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ht.setValue(B,"boneTexture",Dt.boneTexture,He))}X.isBatchedMesh&&(ht.setOptional(B,X,"batchingTexture"),ht.setValue(B,"batchingTexture",X._matricesTexture,He),ht.setOptional(B,X,"batchingIdTexture"),ht.setValue(B,"batchingIdTexture",X._indirectTexture,He),ht.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&ht.setValue(B,"batchingColorTexture",X._colorsTexture,He));const _i=q.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&J.update(X,q,vn),(fr||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,ht.setValue(B,"receiveShadow",X.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(fn.envMapIntensity.value=F.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=GE()),fr){if(ht.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ie.needsLights&&la(fn,Br),ye&&k.fog===!0&&de.refreshFogUniforms(fn,ye),de.refreshMaterialUniforms(fn,k,ae,oe,w.state.transmissionRenderTarget[y.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){const Dt=S;let an=0;for(const Gi of w.state.lightProbeGridArray)Gi.texture!==null&&(Dt.textures[an]=Gi.texture,Dt.min[an]=Gi.boundingBox.min,Dt.max[an]=Gi.boundingBox.max,Dt.resolution[an]=Gi.resolution,an++);for(const Gi in Dt)Dt[Gi].length=an;fn.probesSH.value=Dt.textures,fn.probesMin.value=Dt.min,fn.probesMax.value=Dt.max,fn.probesResolution.value=Dt.resolution}hl.upload(B,en(Ie),fn,He)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(hl.upload(B,en(Ie),fn,He),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(B,"center",X.center),ht.setValue(B,"modelViewMatrix",X.modelViewMatrix),ht.setValue(B,"normalMatrix",X.normalMatrix),ht.setValue(B,"modelMatrix",X.matrixWorld),k.uniformsGroups!==void 0){const Dt=k.uniformsGroups;for(let an=0,Gi=Dt.length;an<Gi;an++){const $f=Dt[an];ce.update($f,vn),ce.bind($f,vn)}}return vn}function la(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.sunLights.needsUpdate=F,y.sunLightShadows.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function co(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(y,F,q){const k=Ne.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ne.get(y.texture).__webglTexture=F,Ne.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const q=Ne.get(y);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,q=0){j=y,Y=F,O=q;let k=null,X=!1,ye=!1;if(y){const Me=Ne.get(y);if(Me.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),ee.copy(y.viewport),Ee.copy(y.scissor),Oe=y.scissorTest,pe.viewport(ee),pe.scissor(Ee),pe.setScissorTest(Oe),V=-1;return}else if(Me.__webglFramebuffer===void 0)He.setupRenderTarget(y);else if(Me.__hasExternalTextures)He.rebindTextures(y,Ne.get(y.texture).__webglTexture,Ne.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ke=y.depthTexture;if(Me.__boundDepthTexture!==Ke){if(Ke!==null&&Ne.has(Ke)&&(y.width!==Ke.image.width||y.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(y)}}const Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ye=!0);const Ue=Ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?k=Ue[F][q]:k=Ue[F],X=!0):y.samples>0&&He.useMultisampledRTT(y)===!1?k=Ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[q]:k=Ue,ee.copy(y.viewport),Ee.copy(y.scissor),Oe=y.scissorTest}else ee.copy(Te).multiplyScalar(ae).floor(),Ee.copy(ke).multiplyScalar(ae).floor(),Oe=Ce;if(q!==0&&(k=U),pe.bindFramebuffer(B.FRAMEBUFFER,k)&&pe.drawBuffers(y,k),pe.viewport(ee),pe.scissor(Ee),pe.setScissorTest(Oe),X){const Me=Ne.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,q)}else if(ye){const Me=F;for(let Re=0;Re<y.textures.length;Re++){const Ue=Ne.get(y.textures[Re]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Re,Ue.__webglTexture,q,Me)}}else if(y!==null&&q!==0){const Me=Ne.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,q)}V=-1};function ur(y){const F=Ne.get(y);return(F.__readFormat!==y.format||F.__readType!==y.type)&&(F.__readFormat=y.format,F.__readType=y.type,F.__formatReadable=We.textureFormatReadable(y.format),F.__typeReadable=We.textureTypeReadable(y.type)),F}this.readRenderTargetPixels=function(y,F,q,k,X,ye,Le,Me=0){if(!(y&&y.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re){pe.bindFramebuffer(B.FRAMEBUFFER,Re);try{const Ue=y.textures[Me],Ke=Ue.format,rt=Ue.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const De=ur(Ue);if(De.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-k&&q>=0&&q<=y.height-X&&B.readPixels(F,q,k,X,ue.convert(Ke),ue.convert(rt),ye)}finally{const Ue=j!==null?Ne.get(j).__webglFramebuffer:null;pe.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,F,q,k,X,ye,Le,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re)if(F>=0&&F<=y.width-k&&q>=0&&q<=y.height-X){pe.bindFramebuffer(B.FRAMEBUFFER,Re);const Ue=y.textures[Me],Ke=Ue.format,rt=Ue.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const De=ur(Ue);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,st),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(F,q,k,X,ue.convert(Ke),ue.convert(rt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const $t=j!==null?Ne.get(j).__webglFramebuffer:null;pe.bindFramebuffer(B.FRAMEBUFFER,$t);const Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Y0(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,st),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(st),B.deleteSync(Rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,q=0){const k=Math.pow(2,-q),X=Math.floor(y.image.width*k),ye=Math.floor(y.image.height*k),Le=F!==null?F.x:0,Me=F!==null?F.y:0;He.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Le,Me,X,ye),pe.unbindTexture()},this.copyTextureToTexture=function(y,F,q=null,k=null,X=0,ye=0){let Le,Me,Re,Ue,Ke,rt,De,st,$t;const Rt=y.isCompressedTexture?y.mipmaps[ye]:y.image;if(q!==null)Le=q.max.x-q.min.x,Me=q.max.y-q.min.y,Re=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,Ke=q.min.y,rt=q.isBox3?q.min.z:0;else{const ht=Math.pow(2,-X);Le=Math.floor(Rt.width*ht),Me=Math.floor(Rt.height*ht),y.isDataArrayTexture?Re=Rt.depth:y.isData3DTexture?Re=Math.floor(Rt.depth*ht):Re=1,Ue=0,Ke=0,rt=0}k!==null?(De=k.x,st=k.y,$t=k.z):(De=0,st=0,$t=0);const wt=ue.convert(F.format),_n=ue.convert(F.type);let Ie;F.isData3DTexture?(He.setTexture3D(F,0),Ie=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),Ie=B.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),Ie=B.TEXTURE_2D),pe.activeTexture(B.TEXTURE0),pe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const An=pe.getParameter(B.UNPACK_ROW_LENGTH),gt=pe.getParameter(B.UNPACK_IMAGE_HEIGHT),Or=pe.getParameter(B.UNPACK_SKIP_PIXELS),vn=pe.getParameter(B.UNPACK_SKIP_ROWS),uo=pe.getParameter(B.UNPACK_SKIP_IMAGES);pe.pixelStorei(B.UNPACK_ROW_LENGTH,Rt.width),pe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Rt.height),pe.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),pe.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),pe.pixelStorei(B.UNPACK_SKIP_IMAGES,rt);const fr=y.isDataArrayTexture||y.isData3DTexture,Br=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const ht=Ne.get(y),fn=Ne.get(F),_i=Ne.get(ht.__renderTarget),Dt=Ne.get(fn.__renderTarget);pe.bindFramebuffer(B.READ_FRAMEBUFFER,_i.__webglFramebuffer),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let an=0;an<Re;an++)fr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(y).__webglTexture,X,rt+an),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(F).__webglTexture,ye,$t+an)),B.blitFramebuffer(Ue,Ke,Ue+Le,Ke+Me,De,st,De+Le,st+Me,B.DEPTH_BUFFER_BIT,B.NEAREST);pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||y.isRenderTargetTexture||Ne.has(y)){const ht=Ne.get(y),fn=Ne.get(F);pe.bindFramebuffer(B.READ_FRAMEBUFFER,L),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,z);for(let _i=0;_i<Re;_i++)fr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ht.__webglTexture,X,rt+_i):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ht.__webglTexture,X),Br?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,ye,$t+_i):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,ye),X!==0?B.blitFramebuffer(Ue,Ke,Ue+Le,Ke+Me,De,st,De+Le,st+Me,B.COLOR_BUFFER_BIT,B.NEAREST):Br?B.copyTexSubImage3D(Ie,ye,De,st,$t+_i,Ue,Ke,Le,Me):B.copyTexSubImage2D(Ie,ye,De,st,Ue,Ke,Le,Me);pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Br?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(Ie,ye,De,st,$t,Le,Me,Re,wt,_n,Rt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Ie,ye,De,st,$t,Le,Me,Re,wt,Rt.data):B.texSubImage3D(Ie,ye,De,st,$t,Le,Me,Re,wt,_n,Rt):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,De,st,Le,Me,wt,_n,Rt.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,De,st,Rt.width,Rt.height,wt,Rt.data):B.texSubImage2D(B.TEXTURE_2D,ye,De,st,Le,Me,wt,_n,Rt);pe.pixelStorei(B.UNPACK_ROW_LENGTH,An),pe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),pe.pixelStorei(B.UNPACK_SKIP_PIXELS,Or),pe.pixelStorei(B.UNPACK_SKIP_ROWS,vn),pe.pixelStorei(B.UNPACK_SKIP_IMAGES,uo),ye===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(Ie),pe.unbindTexture()},this.initRenderTarget=function(y){Ne.get(y).__webglFramebuffer===void 0&&He.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?He.setTextureCube(y,0):y.isData3DTexture?He.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?He.setTexture2DArray(y,0):He.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){Y=0,O=0,j=null,pe.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const Id=`
  uniform float uBend;
  uniform float uLift;
  uniform float uReflect;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    // gentle concave bend toward the viewer, like a sheet of glass
    p.z -= (p.x * p.x) * uBend;
    p.y += uLift * (1.0 - uReflect * 2.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,Nd=`
  uniform sampler2D uTex;
  uniform vec2 uPlane;
  uniform vec2 uImage;
  uniform float uOpacity;
  uniform float uDim;
  uniform float uRadius;
  uniform float uReflect;
  uniform float uActive;
  uniform vec3 uMood;
  varying vec2 vUv;

  float roundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }

  void main() {
    vec2 uv = vUv;
    if (uReflect > 0.5) uv.y = 1.0 - uv.y;

    // object-fit: cover
    float pr = uPlane.x / uPlane.y;
    float ir = uImage.x / uImage.y;
    vec2 s = pr > ir ? vec2(1.0, ir / pr) : vec2(pr / ir, 1.0);
    vec2 tuv = (uv - 0.5) * s + 0.5;
    vec3 col = texture2D(uTex, tuv).rgb;

    // rounded corners with soft edge
    vec2 p = (vUv - 0.5) * uPlane;
    float d = roundedBox(p, uPlane * 0.5, uRadius);
    float mask = 1.0 - smoothstep(-0.006, 0.006, d);

    // thin luminous rim on the active card
    float rim = (1.0 - smoothstep(0.0, 0.018, abs(d + 0.012))) * uActive;
    col = mix(col, uMood, rim * 0.85);

    // fade neighbours toward the dark stage
    col *= mix(1.0, 0.32, uDim);

    float a = mask * uOpacity;
    if (uReflect > 0.5) {
      // reflection: fade out quickly away from the floor line
      float f = smoothstep(0.55, 1.0, vUv.y);
      a *= f * 0.22;
    }
    if (a < 0.002) discard;
    gl_FragColor = vec4(col, a);
  }
`,WE=(r,e,t)=>r+(e-r)*t,Ds=(r,e,t,n)=>WE(r,e,1-Math.exp(-t*n));function XE(r,e,{mediaUrl:t,onChange:n,onOpen:i,onProgress:s}){const a=new VE({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"});a.setClearColor(0,0),a.outputColorSpace=Fn;const o=new Ev,l=new yi(32,1,.1,100),c=new Zr,u=new Zr;c.add(u),o.add(c);const d=e.length,f=Math.PI*2/d;let h=4.2,m=1.62,v=2.16;const p=new Xv,g=new ct(e[0].mood.accent),x=[];let b=0;const S=new ia(1,1,40,1);e.forEach((ie,oe)=>{const ae={uTex:{value:null},uPlane:{value:new ut(m,v)},uImage:{value:new ut(1,1)},uOpacity:{value:0},uDim:{value:1},uRadius:{value:.12},uReflect:{value:0},uActive:{value:0},uBend:{value:.05},uLift:{value:0},uMood:{value:new ct(ie.mood.accent)}},Se=new bi({vertexShader:Id,fragmentShader:Nd,uniforms:ae,transparent:!0,depthWrite:!1}),Xe=new Bi(S,Se);Xe.userData.index=oe;const Te=Gm.clone(ae);Te.uReflect.value=1;const ke=new bi({vertexShader:Id,fragmentShader:Nd,uniforms:Te,transparent:!0,depthWrite:!1}),Ce=new Bi(S,ke),be=new Zr;be.add(Xe,Ce),u.add(be);const tt=ie.images[0];p.load(t(`sm/${tt}.webp`),W=>{W.colorSpace=Fn,W.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy()),W.generateMipmaps=!0,W.minFilter=er,[ae,Te].forEach(Ze=>{Ze.uTex.value=W,Ze.uImage.value.set(W.image.width,W.image.height)}),Ye.ready=!0,b++,s&&s(b/d)},void 0,()=>{b++,s&&s(b/d)});const Ye={mesh:Xe,refl:Ce,holder:be,uniforms:ae,refUniforms:Te,ready:!1,hover:0,show:0};x.push(Ye)});const T=new bi({transparent:!0,depthWrite:!1,blending:wl,uniforms:{uColor:{value:g.clone()},uAlpha:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uColor; uniform float uAlpha; varying vec2 vUv;
      void main(){ vec2 p = vUv - 0.5; float r = length(p) * 2.0;
        float ring = smoothstep(0.05, 0.0, abs(r - 0.8)) * 0.45;
        float glow = smoothstep(1.0, 0.0, r) * 0.22;
        gl_FragColor = vec4(uColor, (ring + glow) * uAlpha); }`}),w=new Bi(new ia(1,1),T);w.rotation.x=-Math.PI/2,c.add(w);const _=420,E=new Float32Array(_*3),P=new Float32Array(_);for(let ie=0;ie<_;ie++)E[ie*3]=(Math.random()-.5)*16,E[ie*3+1]=(Math.random()-.3)*8,E[ie*3+2]=(Math.random()-.5)*12-3,P[ie]=Math.random();const R=new cr;R.setAttribute("position",new rr(E,3)),R.setAttribute("aSeed",new rr(P,1));const I=new bi({transparent:!0,depthWrite:!1,blending:wl,uniforms:{uTime:{value:0},uColor:{value:g.clone()},uPx:{value:1}},vertexShader:`uniform float uTime; uniform float uPx; attribute float aSeed; varying float vA;
      void main(){ vec3 p = position; p.y += mod(uTime * (0.08 + aSeed * 0.12) + aSeed * 8.0, 8.0) - 2.0;
        p.x += sin(uTime * 0.3 + aSeed * 20.0) * 0.25;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
        gl_PointSize = (1.0 + aSeed * 2.5) * uPx * (8.0 / -mv.z);
        vA = 0.25 + 0.75 * fract(aSeed * 7.13); }`,fragmentShader:`uniform vec3 uColor; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d) * vA * 0.55; gl_FragColor = vec4(uColor, a); }`}),N=new Uv(R,I);o.add(N);const U={rot:-d*.5,target:0,vel:0,dragging:!1,moved:0,lastX:0,intro:0,scroll:0,scrollTarget:0,mx:0,my:0,smx:0,smy:0,active:0,hover:-1,visible:!0},L=()=>(Math.round(U.target)%d+d)%d;function z(ie){const oe=Math.round(U.target);let ae=((ie-oe)%d+d)%d;ae>d/2&&(ae-=d),U.target=oe+ae}function Y(ie){U.target=Math.round(U.target)+ie}function O(){const ie=r.clientWidth,oe=r.clientHeight,ae=Math.min(window.devicePixelRatio||1,2);a.setPixelRatio(ae),a.setSize(ie,oe,!1),l.aspect=ie/oe;const Se=ie<700;m=Se?1.42:1.4,v=Se?1.9:1.86,h=Se?3.2:3.8,l.fov=Se?44:32,l.updateProjectionMatrix(),x.forEach(Xe=>{Xe.mesh.scale.set(m,v,1),Xe.refl.scale.set(m,v,1),Xe.refl.position.y=-v-.04,Xe.uniforms.uPlane.value.set(m,v),Xe.refUniforms.uPlane.value.set(m,v)}),w.scale.set(m*2.2,m*2.2,1),w.position.set(0,-v/2-.02,0),I.uniforms.uPx.value=ae*(oe/900)}window.addEventListener("resize",O),O();const j=new $v,V=new ut;function C(ie){const oe=r.getBoundingClientRect();V.set((ie.clientX-oe.left)/oe.width*2-1,-((ie.clientY-oe.top)/oe.height)*2+1),j.setFromCamera(V,l);const ae=j.intersectObjects(x.map(Se=>Se.mesh),!1).filter(Se=>Se.object.material.uniforms.uOpacity.value>.3);return ae.length?ae[0].object.userData.index:-1}r.addEventListener("pointerdown",ie=>{U.dragging=!0,U.moved=0,U.lastX=ie.clientX,U.vel=0,r.classList.add("dragging"),r.setPointerCapture(ie.pointerId)}),r.addEventListener("pointermove",ie=>{const oe=r.getBoundingClientRect();if(U.mx=(ie.clientX-oe.left)/oe.width-.5,U.my=(ie.clientY-oe.top)/oe.height-.5,U.dragging){const ae=ie.clientX-U.lastX;U.lastX=ie.clientX,U.moved+=Math.abs(ae);const Se=5.5/oe.width;U.target-=ae*Se,U.vel=-ae*Se}else ie.pointerType==="mouse"&&(U.hover=C(ie),r.style.cursor=U.hover>=0?"pointer":"")});const ee=ie=>{if(U.dragging)if(U.dragging=!1,r.classList.remove("dragging"),U.moved<6){const oe=C(ie);oe>=0&&(oe===L()?i&&i(e[oe].id):z(oe))}else U.target=Math.round(U.target+U.vel*6)};r.addEventListener("pointerup",ee),r.addEventListener("pointercancel",ee),r.addEventListener("pointerleave",()=>{U.hover=-1});const Ee=new Kv,Oe=new ct;let $=0;function fe(){$=requestAnimationFrame(fe);const ie=Math.min(Ee.getDelta(),.05),oe=Ee.elapsedTime;if(!U.visible)return;U.rot=Ds(U.rot,U.target,U.dragging?18:5.2,ie),U.scroll=Ds(U.scroll,U.scrollTarget,9,ie),U.smx=Ds(U.smx,U.mx,3,ie),U.smy=Ds(U.smy,U.my,3,ie);const ae=L();ae!==U.active&&(U.active=ae,n&&n(ae));const Se=U.scroll,Xe=U.intro,Te=r.clientWidth<700,ke=Te?8.6:9.6;l.position.set(U.smx*.6,.25+Se*2.6-U.smy*.3,ke+(1-Xe)*3+Se*4.5),l.lookAt(0,-.25-Se*.4,-h*.35),c.position.y=Te?-.55:-.62,c.rotation.x=Se*.22,c.rotation.z=Math.sin(oe*.25)*.006,u.position.z=-h,g.lerp(Oe.set(e[ae].mood.accent),1-Math.exp(-3*ie)),T.uniforms.uColor.value.copy(g),T.uniforms.uAlpha.value=Xe*(1-Se*.6),I.uniforms.uColor.value.copy(g),I.uniforms.uTime.value=oe,N.rotation.y=U.rot*.02+Se*.4;const Ce=U.rot;x.forEach((be,tt)=>{let Ye=(tt-Ce)*f;Ye=Math.atan2(Math.sin(Ye),Math.cos(Ye)),be.holder.position.set(Math.sin(Ye)*h,0,Math.cos(Ye)*h),be.holder.rotation.y=Ye;const W=1-Math.min(Math.abs(Ye)/f,1),Ze=1-cv.smoothstep(Math.abs(Ye),Math.PI*.42,Math.PI*.62);be.show=Ds(be.show,be.ready?1:0,4,ie),be.hover=Ds(be.hover,U.hover===tt?1:0,8,ie);const Ot=Ze*be.show*Xe,xt=1-Math.max(W,be.hover*.6),nt=W*.035+be.hover*.03+Math.sin(oe*1.2+tt)*.008*W;[be.uniforms,be.refUniforms].forEach(yt=>{yt.uOpacity.value=Ot,yt.uDim.value=xt,yt.uActive.value=W*W,yt.uLift.value=nt,yt.uBend.value=.28+(1-W)*.25}),be.mesh.renderOrder=Math.round(W*10)}),a.render(o,l)}return fe(),{next:()=>Y(1),prev:()=>Y(-1),goTo:z,get active(){return L()},setScroll(ie){U.scrollTarget=ie},setVisible(ie){U.visible=ie},intro(ie=2.6){const oe=performance.now(),ae=U.rot;U.target=0;const Se=Xe=>{const Te=Math.min((Xe-oe)/(ie*1e3),1),ke=1-Math.pow(1-Te,4);U.intro=ke,Te<1&&requestAnimationFrame(Se)};U.rot=ae,requestAnimationFrame(Se)},dispose(){cancelAnimationFrame($),a.dispose()}}}ze.registerPlugin(Ge);const Be=(r,e=document)=>e.querySelector(r),Xt=(r,e=document)=>[...e.querySelectorAll(r)],lo=r=>`./media/${r}`,YE=r=>lo(`sm/${r}.webp`),tg=r=>lo(`lg/${r}.webp`),Yl=r=>lo(`video/${r}.mp4`),ql=r=>lo(`video/${r}.jpg`),fs=r=>String(r).padStart(2,"0"),qE=matchMedia("(prefers-reduced-motion: reduce)").matches,$E=document.documentElement,{cats:$l,dishes:Kl,stats:KE,journey:ZE,awards:JE,skills:ng}=u0,Zl=Kl.filter(r=>r.featured),QE=Object.fromEntries(Kl.map(r=>[r.id,r])),Ko=$l.flatMap(r=>Kl.filter(e=>e.category===r.id)),oi=new i0({duration:1.15,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),smoothWheel:!qE});oi.on("scroll",Ge.update);ze.ticker.add(r=>oi.raf(r*1e3));ze.ticker.lagSmoothing(0);oi.stop();Xt("[data-scroll]").forEach(r=>r.addEventListener("click",e=>{const t=r.getAttribute("href");!t||!t.startsWith("#")||(e.preventDefault(),eT(),oi.scrollTo(t==="#top"?0:t,{offset:0,duration:1.6}))}));function jE(r){ze.to($E,{"--mood":r.mood.accent,duration:1.1,ease:"power2.out"})}const Nl=Be("#gnav"),Zu=Be(".gnav__burger");function eT(){Nl.classList.remove("open"),Zu.setAttribute("aria-expanded","false"),oi.start()}Zu.addEventListener("click",()=>{const r=!Nl.classList.contains("open");Nl.classList.toggle("open",r),Zu.setAttribute("aria-expanded",String(r)),r?oi.stop():oi.start()});const tT=Be("#loaderBar");let pn;const Ud=Be(".hero__dish-meta");function Ju(r){const e=Zl[r];Ud.classList.add("swap"),clearTimeout(Ju.t),Ju.t=setTimeout(()=>{Be("#dishIndex").textContent=fs(r+1),Be("#dishName").textContent=e.name,Be("#dishShort").textContent=e.short,Be("#dishMood").textContent=e.mood.name,Ud.classList.remove("swap")},220),jE(e)}Be("#dishTotal").textContent=fs(Zl.length);let ig=!0;try{pn=XE(Be("#ring"),Zl,{mediaUrl:lo,onChange:Ju,onOpen:r=>Vf(r),onProgress:r=>{tT.style.transform=`scaleX(${r})`,r>=1&&rg()}})}catch(r){ig=!1,console.warn("WebGL unavailable",r)}setTimeout(rg,ig?6e3:0);Be("#prevDish").addEventListener("click",()=>pn&&pn.prev());Be("#nextDish").addEventListener("click",()=>pn&&pn.next());Be("#inspectDish").addEventListener("click",()=>Vf(Zl[pn?pn.active:0].id));window.addEventListener("keydown",r=>{ar.classList.contains("open")||window.scrollY>innerHeight||(r.key==="ArrowRight"&&pn&&pn.next(),r.key==="ArrowLeft"&&pn&&pn.prev())});Ge.create({trigger:"#hero",start:"top top",end:"bottom top",onUpdate:r=>pn&&pn.setScroll(r.progress),onToggle:r=>pn&&pn.setVisible(r.isActive)});ze.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"45% top",scrub:!0}}).to(".hero__copy",{yPercent:-40,opacity:0,scale:.94,ease:"none"},0).to(".hero__hint",{opacity:0,ease:"none"},0);ze.timeline({scrollTrigger:{trigger:"#hero",start:"55% top",end:"bottom top",scrub:!0}}).to(".hero__dish",{y:-40,opacity:0,ease:"none"},0).to("#ring",{opacity:0,ease:"none"},0);let Fd=!1;function rg(){Fd||(Fd=!0,Be("#loader").classList.add("done"),window.scrollTo(0,0),oi.scrollTo(0,{immediate:!0}),oi.start(),pn&&pn.intro(2.8),ze.from("[data-intro]",{y:40,opacity:0,duration:1.6,stagger:.09,ease:"expo.out",delay:.15}),ze.from(".hero__title span",{yPercent:60,opacity:0,duration:1.8,stagger:.08,ease:"expo.out",delay:.2}),Ge.refresh())}const Ul=Be("#introText");Ul.innerHTML=Ul.textContent.trim().split(/\s+/).map(r=>`<span class="w">${r}</span>`).join(" ");const Od=Xt(".w",Ul);Ge.create({trigger:Ul,start:"top 80%",end:"bottom 45%",scrub:!0,onUpdate:r=>{const e=Math.round(r.progress*Od.length);Od.forEach((t,n)=>t.classList.toggle("on",n<e))}});Xt("[data-zoom]").forEach(r=>{ze.fromTo(r,{clipPath:"inset(8% 10% round 40px)"},{clipPath:"inset(0% 0% round 28px)",ease:"none",scrollTrigger:{trigger:r,start:"top 95%",end:"top 25%",scrub:!0}}),ze.fromTo(Be("img",r),{scale:1.3},{scale:1,ease:"none",scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:!0}})});Be("#stats").innerHTML=KE.map(r=>`<div class="stat"><span class="stat__num" data-count="${r.value}">0</span><span class="stat__label">${r.label}</span></div>`).join("");Xt("[data-count]").forEach(r=>{const e={v:0};ze.to(e,{v:+r.dataset.count,duration:2,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 85%"},onUpdate:()=>r.textContent=Math.round(e.v)})});ze.from(".stat",{y:50,opacity:0,stagger:.1,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:"#stats",start:"top 85%"}});ze.timeline({scrollTrigger:{trigger:"#live",start:"top top",end:"bottom bottom",scrub:!0}}).fromTo("#expandMedia",{clipPath:"inset(24% 30% round 44px)"},{clipPath:"inset(0% 0% round 0px)",ease:"power1.inOut",duration:.55},0).fromTo("#expandMedia video",{scale:1.25},{scale:1,ease:"power1.inOut",duration:.55},0).to(".expand__shade",{opacity:1,duration:.2},.45).fromTo(".expand__copy",{opacity:0,y:60},{opacity:1,y:0,duration:.25,ease:"power2.out"},.55).to({},{duration:.2});const nT=[{title:"Mise en place",text:"Every service is won before it starts. Spices measured, condiments cut and portioned, stations set so service can move at full speed without losing precision.",a:{src:"spice-mise",cap:"Pani puri station mise en place"},b:{src:"condiments",cap:"Breakfast station prep"}},{title:"Plating precision",text:"Ten components on one tray, each with its own place, garnish and height. Mapped out first, then placed with patience.",a:{src:"mezze-annotated",cap:"Mezze, component map"},b:{src:"chef-mezze",cap:"Final placement"}},{title:"Chocolate & pastry",text:"Tempered shells, piped ganache, clean seals. Pastry leaves no room for “close enough”, and that is why I love it.",a:{src:"chocolate-piping",cap:"Piping ganache"},b:{src:"bonbons",cap:"Finished bonbons"}},{title:"Dough work",text:"From pizza dough tossed at the counter to thirteen fresh pasta shapes rolled single-handed. The dough tells you everything if you listen.",a:{src:"dough-roll",cap:"Rolling at the live counter"},b:{video:"pizza-toss-2",cap:"Tossing pizza dough"}},{title:"Sauce & finish",text:"Glazes reduced until they mirror the light, sauces that coat rather than flood, and a clean rim before anything leaves the pass.",a:{src:"glazed-chicken",cap:"Glaze, reduced to a mirror"},b:{src:"stroganoff",cap:"Velvet cream, seared mushrooms"}}],Bd=(r,e="")=>`<figure class="card ${e}">${r.video?`<video src="${Yl(r.video)}" poster="${ql(r.video)}" muted loop playsinline preload="metadata" data-autoplay data-px></video>`:`<img src="${tg(r.src)}" alt="${r.cap}" loading="lazy" decoding="async" data-px />`}<figcaption>${r.cap}</figcaption></figure>`;Be("#craftTrack").insertAdjacentHTML("beforeend",nT.map((r,e)=>`
  <article class="chapter">
    <div class="chapter__text"><span class="chapter__no">${fs(e+1)}</span><h3 class="chapter__title">${r.title}</h3><p class="chapter__copy">${r.text}</p></div>
    ${Bd(r.a)}${Bd(r.b,"card--b")}
  </article>`).join("")+'<div style="flex:0 0 4vw"></div>');const sg=ze.matchMedia();sg.add("(min-width: 1024px)",()=>{const r=Be("#craftTrack"),e=()=>r.scrollWidth-innerWidth,t=ze.to(r,{x:()=>-e(),ease:"none",scrollTrigger:{trigger:".craft__pin",start:"top top",end:()=>`+=${e()}`,scrub:1,pin:!0,invalidateOnRefresh:!0,anticipatePin:1}});ze.to("#craftBar",{scaleX:1,ease:"none",scrollTrigger:{trigger:".craft__pin",start:"top top",end:()=>`+=${e()}`,scrub:!0}}),Xt("[data-px]",r).forEach(n=>ze.fromTo(n,{xPercent:-7},{xPercent:7,ease:"none",scrollTrigger:{trigger:n.parentElement,containerAnimation:t,start:"left right",end:"right left",scrub:!0}})),Xt(".chapter",r).forEach(n=>ze.from(Xt(".card",n),{rotateY:-18,z:-120,opacity:.4,transformPerspective:1400,ease:"none",stagger:.1,scrollTrigger:{trigger:n,containerAnimation:t,start:"left right",end:"left 40%",scrub:!0}}))});sg.add("(max-width: 1023px)",()=>{Xt("#craftTrack [data-px]").forEach(r=>ze.fromTo(r,{yPercent:-6},{yPercent:6,ease:"none",scrollTrigger:{trigger:r.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})),ze.utils.toArray("#craftTrack .card").forEach(r=>ze.from(r,{y:80,opacity:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 90%"}}))});const iT=[["Discipline is","the first ingredient."],["The guest","sees everything."],["Clean station,","clear mind."],["Cost is a craft","too."]];Be("#philoLines").innerHTML=iT.map(([r,e])=>`<div class="philo__line"><span class="a">${r}</span><span class="b">${e}</span></div>`).join("");Xt(".philo__line").forEach(r=>{ze.timeline({scrollTrigger:{trigger:r,start:"top 92%",end:"center 50%",scrub:!0}}).fromTo(Be(".a",r),{opacity:.12,y:60,scale:.94},{opacity:1,y:0,scale:1,ease:"none"},0).fromTo(Be(".b",r),{opacity:0,y:90,scale:.94},{opacity:1,y:0,scale:1,ease:"none"},.15),ze.to(r,{opacity:.25,ease:"none",scrollTrigger:{trigger:r,start:"center 30%",end:"bottom top",scrub:!0}})});ze.fromTo("[data-iris]",{clipPath:"circle(12% at 50% 50%)"},{clipPath:"circle(75% at 50% 50%)",ease:"none",scrollTrigger:{trigger:"[data-iris]",start:"top 85%",end:"center 45%",scrub:!0}});ze.fromTo("[data-iris] img",{scale:1.35},{scale:1,ease:"none",scrollTrigger:{trigger:"[data-iris]",start:"top bottom",end:"bottom top",scrub:!0}});const rT=[{n:"01",t:"Precision",d:"Consistent cuts, measured portions, identical plates from the first cover to the last."},{n:"02",t:"Standards",d:"Food safety, hygiene compliance and SOPs are non-negotiable. Luxury starts with what the guest never sees."},{n:"03",t:"Commercial sense",d:"Menu costing, food cost control and pricing, built in Excel with Finance, because a great dish must also make sense."},{n:"04",t:"Presence",d:"Impeccable grooming, warm guest interaction and calm leadership at the live station and in training sessions."}];Be("#principles").innerHTML=rT.map(r=>`<li class="principle"><span class="principle__n">${r.n}</span><p class="principle__t">${r.t}</p><p class="principle__d">${r.d}</p></li>`).join("");ze.from(".philo__quote",{y:50,opacity:0,duration:1.4,ease:"expo.out",scrollTrigger:{trigger:".philo__quote",start:"top 85%"}});ze.from(".principle",{y:60,opacity:0,stagger:.1,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:"#principles",start:"top 85%"}});let zd=0;Be("#courses").innerHTML=$l.map(r=>{const e=Kl.filter(t=>t.category===r.id);return`<div class="course" id="course-${r.id}" data-cat="${r.id}">
    <div class="course__head">
      <span class="course__num">${r.numeral}</span>
      <div><h3 class="course__title">${r.title}</h3><p class="course__kicker">${r.kicker}</p></div>
      <span class="course__count">${fs(e.length)} courses</span>
      <p class="course__blurb">${r.blurb}</p>
    </div>
    <div class="tiles">${e.map(t=>(zd++,`<div class="tile" data-tile>
        <button class="tile__btn" data-open="${t.id}" style="--tile-accent:${t.mood.accent}">
          <div class="tile__img">${t.video?`<video src="${Yl(t.video)}" poster="${ql(t.video)}" muted loop playsinline preload="none" data-autoplay></video>`:`<img src="${YE(t.images[0])}" alt="${t.name}" loading="lazy" decoding="async" />`}
            <span class="tile__no">N° ${fs(zd)}</span>
          </div>
          <div class="tile__body"><div><h4 class="tile__name">${t.name}</h4><p class="tile__short">${t.short}</p></div><span class="tile__plus"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span></div>
        </button>
      </div>`)).join("")}</div>
  </div>`}).join("");const Jr=Be("#seg");Jr.innerHTML='<span class="seg__thumb"></span>'+$l.map(r=>`<button role="tab" data-target="course-${r.id}">${r.title}</button>`).join("");const kd=Be(".seg__thumb",Jr),Fl=Xt("button",Jr);function Hf(r){Fl.forEach((t,n)=>t.classList.toggle("on",r===n));const e=Fl[r];e&&(kd.style.width=`${e.offsetWidth}px`,kd.style.transform=`translateX(${e.offsetLeft}px)`,Jr.scrollWidth>Jr.clientWidth&&Jr.scrollTo({left:e.offsetLeft-Jr.clientWidth/2+e.offsetWidth/2,behavior:"smooth"}))}Fl.forEach(r=>r.addEventListener("click",()=>oi.scrollTo(`#${r.dataset.target}`,{offset:-120,duration:1.4})));Xt(".course").forEach((r,e)=>Ge.create({trigger:r,start:"top 55%",end:"bottom 55%",onToggle:t=>t.isActive&&Hf(e)}));Hf(0);window.addEventListener("resize",()=>Hf(Math.max(0,Fl.findIndex(r=>r.classList.contains("on")))));ze.fromTo("#segbar",{opacity:0,y:20},{opacity:1,y:0,scrollTrigger:{trigger:"#courses",start:"top 85%",end:"top 70%",scrub:!0}});Ge.create({trigger:"#courses",start:"bottom 30%",onEnter:()=>ze.to("#segbar",{opacity:0,duration:.3}),onLeaveBack:()=>ze.to("#segbar",{opacity:1,duration:.3})});Xt(".course").forEach(r=>{ze.from(Be(".course__num",r),{yPercent:50,opacity:0,duration:1.4,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 80%"}}),Ge.batch(Xt("[data-tile]",r),{start:"top 92%",onEnter:e=>ze.fromTo(e,{y:90,opacity:0,rotateX:10},{y:0,opacity:1,rotateX:0,transformPerspective:1200,stagger:.08,duration:1.3,ease:"expo.out",overwrite:!0})})});matchMedia("(hover: hover)").matches&&Xt(".tile__btn").forEach(r=>{const e=ze.quickTo(r,"rotateX",{duration:.7,ease:"power3"}),t=ze.quickTo(r,"rotateY",{duration:.7,ease:"power3"});r.addEventListener("pointermove",n=>{const i=r.getBoundingClientRect();t(((n.clientX-i.left)/i.width-.5)*9),e(-((n.clientY-i.top)/i.height-.5)*9)}),r.addEventListener("pointerleave",()=>{e(0),t(0)})});ze.fromTo("#pastaNum",{scale:.55,opacity:.15},{scale:1,opacity:1,ease:"none",transformOrigin:"left bottom",scrollTrigger:{trigger:"#pasta",start:"top bottom",end:"center center",scrub:1}});ze.fromTo(".pasta__bg",{yPercent:-8},{yPercent:8,ease:"none",scrollTrigger:{trigger:"#pasta",start:"top bottom",end:"bottom top",scrub:!0}});const sT=[{video:"flambe",title:"Flambé on the open grill",tag:"Live fire"},{video:"pizza-toss-2",title:"Hand-tossed at the Italian counter",tag:"Dough"},{video:"pasta-bar",title:"The handmade pasta bar",tag:"Gala Dinner"}];Be("#reelGrid").innerHTML=sT.map((r,e)=>`<figure class="reel"><span class="reel__badge">Reel ${fs(e+1)}</span>
  <video src="${Yl(r.video)}" poster="${ql(r.video)}" muted loop playsinline preload="metadata" data-autoplay></video>
  <figcaption><p class="reel__tag">${r.tag}</p><p class="reel__title">${r.title}</p></figcaption></figure>`).join("");ze.from(".reel",{y:140,opacity:0,rotateY:r=>(r-1)*-14,transformPerspective:1400,stagger:.12,duration:1.5,ease:"expo.out",scrollTrigger:{trigger:"#reelGrid",start:"top 85%"}});Be("#timeline").innerHTML=ZE.map(r=>`<li class="tl">
  <span class="tl__years">${r.years}</span>
  <div><h3 class="tl__role">${r.role}</h3><p class="tl__org">${r.org}</p></div>
  ${r.points.length?`<ul class="tl__points">${r.points.map(e=>`<li>${e}</li>`).join("")}</ul>`:"<div></div>"}
</li>`).join("");Be("#awards").innerHTML=JE.map((r,e)=>`<li>${r}<span>${fs(e+1)}</span></li>`).join("");ze.utils.toArray(".tl, .awards__list li").forEach(r=>ze.from(r,{y:50,opacity:0,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 92%"}}));function Gf(r,e,t=!1){const n=e.map(a=>`<span class="marquee__item">${a}<i>●</i></span>`).join("");r.innerHTML=`<div class="marquee__track">${n}${n}</div>`;const i=r.firstElementChild,s=ze.to(i,{xPercent:t?0:-50,startAt:{xPercent:t?-50:0},duration:e.length*4.5,ease:"none",repeat:-1});return Ge.create({trigger:r,start:"top bottom",end:"bottom top",onToggle:a=>a.isActive?s.play():s.pause()}),s}const Jl=[];Xt(".marquee[data-items]").forEach(r=>Jl.push(Gf(r,r.dataset.items.split(","))));Jl.push(Gf(Be("#skillsA"),ng.slice(0,9)));Jl.push(Gf(Be("#skillsB"),ng.slice(9),!0));oi.on("scroll",({velocity:r})=>{const e=1+Math.min(Math.abs(r)*.12,3);Jl.forEach(t=>ze.to(t,{timeScale:e,duration:.3,overwrite:!0}))});ze.fromTo(".contact__bg",{scale:1.25},{scale:1,ease:"none",scrollTrigger:{trigger:"#contact",start:"top bottom",end:"bottom bottom",scrub:!0}});ze.from(".contact__title",{y:100,opacity:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".contact__title",start:"top 85%"}});ze.from(".contact__links li",{y:40,opacity:0,stagger:.08,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:".contact__links",start:"top 95%"}});Be("#copyEmail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("udddipandatta@gmail.com"),Be("#copyIcon").textContent="Copied",setTimeout(()=>Be("#copyIcon").textContent="Copy",1800)}catch{location.href="mailto:udddipandatta@gmail.com"}});Be("#year").textContent=new Date().getFullYear();const aT=new IntersectionObserver(r=>r.forEach(e=>{const t=e.target;e.isIntersecting?(t.preload==="none"&&(t.preload="metadata"),t.play().catch(()=>{})):t.pause()}),{threshold:.15});Xt("video[data-autoplay]").forEach(r=>aT.observe(r));const ar=Be("#inspector"),no=Be(".inspector__sheet",ar);let ag=null,Zo=0,Qu;function og(r){ag=r;const e=$l.find(o=>o.id===r.category);no.style.setProperty("--dish",r.mood.accent),Be("#insKicker").textContent=`${e.title} · ${r.mood.name}`,Be("#insKicker").style.color=`color-mix(in srgb, ${r.mood.accent} 72%, #1d1d1f)`,Be("#insName").textContent=r.name,Be("#insDesc").textContent=r.description,Be("#insStory").textContent=r.story,Be("#insComponents").innerHTML=r.components?`<p class="inspector__label">Components</p><div class="chips" style="margin-top:0">${r.components.map(o=>`<span class="chip">${o}</span>`).join("")}</div>`:"",Be("#insFlavour").innerHTML='<p class="inspector__label" style="margin-bottom:2px">Flavour profile</p>'+Object.entries(r.flavor).map(([o,l])=>`<div class="flavour__row"><span>${o}</span><div class="flavour__bar"><i style="transform:scaleX(0)" data-v="${l/100}"></i></div><span>${l}</span></div>`).join(""),Be("#insTags").innerHTML=r.tags.map(o=>`<span class="chip">${o}</span>`).join("");const t=r.images.map(o=>`<img src="${tg(o)}" alt="${r.name}" decoding="async" />`);r.video&&t.unshift(`<video src="${Yl(r.video)}" poster="${ql(r.video)}" muted loop playsinline autoplay></video>`),Be("#insMedia").innerHTML=t.join("")+(t.length>1?`<div class="inspector__dots">${t.map((o,l)=>`<button aria-label="Image ${l+1}"></button>`).join("")}</div>`:"");const n=Xt("#insMedia > img, #insMedia > video"),i=Xt(".inspector__dots button"),s=o=>{Zo=(o+n.length)%n.length,n.forEach((l,c)=>l.classList.toggle("on",c===Zo)),i.forEach((l,c)=>l.classList.toggle("on",c===Zo))};i.forEach((o,l)=>o.addEventListener("click",()=>{s(l),a()}));const a=()=>{clearInterval(Qu),n.length>1&&(Qu=setInterval(()=>s(Zo+1),4200))};s(0),a(),requestAnimationFrame(()=>requestAnimationFrame(()=>Xt(".flavour__bar i").forEach((o,l)=>{o.style.transitionDelay=`${.15+l*.07}s`,o.style.transform=`scaleX(${o.dataset.v})`}))),no.scrollTop=0}function Vf(r){const e=QE[r];e&&(og(e),ar.classList.add("open"),ar.setAttribute("aria-hidden","false"),oi.stop(),ze.killTweensOf([no,".inspector__scrim"]),ze.to(".inspector__scrim",{opacity:1,duration:.5,ease:"power2.out"}),ze.fromTo(no,{opacity:0,y:60,scale:.96},{opacity:1,y:0,scale:1,duration:.8,ease:"expo.out"}),Be(".inspector__close").focus({preventScroll:!0}))}function lg(){ar.classList.contains("open")&&(clearInterval(Qu),ze.to(".inspector__scrim",{opacity:0,duration:.4}),ze.to(no,{opacity:0,y:40,scale:.97,duration:.45,ease:"power2.in",onComplete:()=>{ar.classList.remove("open"),ar.setAttribute("aria-hidden","true"),Be("#insMedia").innerHTML=""}}),oi.start())}function Ol(r){const e=Ko.indexOf(ag),t=Ko[(e+r+Ko.length)%Ko.length];ze.to(".inspector__body",{opacity:0,x:-20*r,duration:.2,onComplete:()=>{og(t),ze.fromTo(".inspector__body",{opacity:0,x:20*r},{opacity:1,x:0,duration:.5,ease:"expo.out"})}})}Xt("[data-close]",ar).forEach(r=>r.addEventListener("click",lg));Be("#insPrev").addEventListener("click",()=>Ol(-1));Be("#insNext").addEventListener("click",()=>Ol(1));window.addEventListener("keydown",r=>{ar.classList.contains("open")&&(r.key==="Escape"&&lg(),r.key==="ArrowRight"&&Ol(1),r.key==="ArrowLeft"&&Ol(-1))});document.addEventListener("click",r=>{const e=r.target.closest("[data-open]");e&&Vf(e.dataset.open)});Xt(".light").forEach(r=>Ge.create({trigger:r,start:"top 26px",end:"bottom 26px",onToggle:e=>Nl.classList.toggle("on-light",e.isActive)}));["chef","craft","philosophy","menu","journey"].forEach(r=>{const e=Be(`.gnav__links a[href="#${r}"]`);Ge.create({trigger:`#${r}`,start:"top 50%",end:"bottom 50%",onToggle:t=>e.classList.toggle("is-active",t.isActive)})});Ge.sort();Ge.refresh();window.addEventListener("load",()=>Ge.refresh());
