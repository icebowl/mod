(function(){
var e,h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,k="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function l(){l=function(){};h.Symbol||(h.Symbol=m)}var m=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function n(){l();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&k(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return q(this)}});n=function(){}}function q(a){var b=0;return r(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function r(a){n();a={next:a};a[h.Symbol.iterator]=function(){return this};return a}
function u(a){if(!(a instanceof Array)){n();var b=a[Symbol.iterator];a=b?b.call(a):q(a);for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function v(){var a="IntersectionObserver";a=void 0===a?null:a;return new Promise(function(b,c){try{var d=document.createElement("script"),f=!1,g;if(a){var t=function(){window[a]?b(null):f?(g="ScriptUtils::loadScript() timed-out waiting for window['"+a+"'] to be exposed",c(g)):setTimeout(t,50)};t();setTimeout(function(){f=!0},5E3)}else"object"==typeof d.onload?(d.onload=b,d.onerror=function(){c("ScriptUtils::loadScript() Error loading script : https://playtime.tubemogul.com/ud/prod/pullins/io_polyfill-1061c5.js")}):
b(null);d.src="https://playtime.tubemogul.com/ud/prod/pullins/io_polyfill-1061c5.js";document.getElementsByTagName("head")[0].appendChild(d)}catch(p){c("ScriptUtils::loadScript() : Error caught loading https://playtime.tubemogul.com/ud/prod/pullins/io_polyfill-1061c5.js")}})};l();var w=Symbol("Observer");l();var x=Symbol("Observer");function y(a){if(a!==x)throw"Observer is a singleton: Cannot construct directly. Use 'Observer.instance'";this.intersectionRatio=0}function z(){for(var a=window;a!==window.top;)try{a=a.parent,y.a.intersectionRatio=a.document.href?0:.1}catch(b){return!0}return!1}y.prototype.s=function(a){this.target=a;this.Z=new window.IntersectionObserver(this.Ka.bind(this),{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});this.Z.observe(this.target)};
y.prototype.stop=function(){this.Z.unobserve(this.target)};y.prototype.Ka=function(a){var b=this;0==a.length?this.intersectionRatio=0:a.forEach(function(a){b.intersectionRatio=a.intersectionRatio})};y.prototype.xa=function(){return this.intersectionRatio};h.Object.defineProperties(y,{a:{configurable:!0,enumerable:!0,get:function(){this[w]||(this[w]=new y(x));return this[w]}}});var A=window.BEACON_SIZE?window.BEACON_SIZE:9,B=window.BEACON_ZINDEX?window.BEACON_ZINDEX:-9999,C=window.BEACON_OPACITY?window.BEACON_OPACITY:.01;l();var D=Symbol("Beacons");l();var E=Symbol("Beacons");function F(a){if(a!==E)throw"Beacons is a singleton: Cannot construct directly. Use 'Observer.instance'";this.uid=((new Date).getTime()+""+Math.floor(1E7*Math.random())).substr(0,16)}e=F.prototype;
e.s=function(a,b){var c=this;this.m=a;this.I=b;this.J=[];this.b=Array(14);this.ua=0;this.M=1;this.P=2;this.R=3;this.N=4;this.O=5;this.ha=6;this.ia=7;this.fa=8;this.ga=9;this.da=10;this.ea=11;this.ba=12;this.ca=13;G(this,!0);return new Promise(function(a,b){for(var d=[],f=0;f<c.w.length;f++){var p=new H(c.m,f,c.uid,c.w[f],c.za.bind(c));c.J.push(p);d.push(p.s())}Promise.all(d).then(c.qa.bind(c)).then(a).catch(b)})};
function G(a,b){b=void 0===b?!1:b;a.ka=a.m.getBoundingClientRect();a.c=a.ka.width;a.g=a.ka.height;var c=Math.sqrt(2),d=a.c/(1+c),f=a.g/(1+c),g=a.c/c;c=a.g/c;a.w=[{name:"CONTROL",left:b?a.c/2:-1E4,top:b?a.c/2:-1E4},{name:"CENTER",left:(a.c-A)/2,top:(a.g-A)/2},{name:"OUTER_TOP_LEFT",left:1,top:1},{name:"OUTER_TOP_RIGHT",left:a.c-A-1,top:1},{name:"OUTER_BOTTOM_LEFT",left:1,top:a.g-A-1},{name:"OUTER_BOTTOM_RIGHT",left:a.c-A-1,top:a.g-A-1},{name:"MIDDLE_TOP_LEFT",left:(a.c-g-A)/2,top:(a.g-c-A)/2},{name:"MIDDLE_TOP_RIGHT",
left:(a.c+g-A)/2,top:(a.g-c-A)/2},{name:"MIDDLE_BOTTOM_LEFT",left:(a.c-g-A)/2,top:(a.g+c-A)/2},{name:"MIDDLE_BOTTOM_RIGHT",left:(a.c+g-A)/2,top:(a.g+c-A)/2},{name:"INNER_TOP_LEFT",left:(a.c-d-A)/2,top:(a.g-f-A)/2},{name:"INNER_TOP_RIGHT",left:(a.c+d-A)/2,top:(a.g-f-A)/2},{name:"INNER_BOTTOM_LEFT",left:(a.c-d-A)/2,top:(a.g+f-A)/2},{name:"INNER_BOTTOM_RIGHT",left:(a.c+d-A)/2,top:(a.g+f-A)/2}]}
e.qa=function(){G(this);for(var a=0;a<this.w.length;a++){var b=this.J[a].o,c=this.w[a];b.style.top=c.top+"px";b.style.left=c.left+"px"}};e.za=function(a){switch(a.type){case "ready":this.J[a.index].resolve();this.b[a.index]=a.state;break;case "inview":this.b[a.index]=!0;break;case "outofview":this.b[a.index]=!1}};
e.ya=function(){var a=0,b=0,c=0,d=0;if(this.b[this.ua])return"unmeasurable";for(var f=this.J.length-1,g=1;g<this.b.length;g++)if(this.b[g])switch(a++,g){case this.P:case this.R:case this.N:case this.O:b++;break;case this.ha:case this.ia:case this.fa:case this.ga:c++;break;case this.da:case this.ea:case this.ba:case this.ca:d++}if(a===f)c="viewable";else if(100==this.I)c="unviewable";else{a:{d=[[this.P,this.ha,this.da,this.M,this.ca,this.ga,this.O],[this.R,this.ia,this.ea,this.M,this.ba,this.fa,this.N]];
for(f=0;2>f;f++){g=d[f];for(var t=b=0;t<g.length;t++)if(a=this.b[g[t]],!0===a&&0==b)b++;else if(!1===a&&1==b)b++;else if(!0===a&&2==b){a=!0;break a}}a=!1}c=a?"unmeasurable":!0===this.b[this.M]&&(!0===this.b[this.P]&&!0===this.b[this.R]||!0===this.b[this.P]&&!0===this.b[this.N]||!0===this.b[this.R]&&!0===this.b[this.O]||!0===this.b[this.N]&&!0===this.b[this.O])||!0===this.b[this.M]&&4==c?"viewable":"unviewable"}return c};e.stop=function(){this.J.forEach(function(a){clearInterval(a.wa);a.o.parentNode.removeChild(a.o)})};
h.Object.defineProperties(F,{a:{configurable:!0,enumerable:!0,get:function(){this[D]||(this[D]=new F(E));return this[D]}}});function H(a,b,c,d,f){this.A=a;this.index=b;this.X="frame_"+b+c;this.h="beaconProcess_"+b+c;this.w=d;this.resolve=null;this.j="number"===typeof window.mozPaintCount;this.l=f;this.o=document.createElement("iframe")}
H.prototype.s=function(){var a=this,b="";b=this.j?"parent.window."+this.h+"()":"window.frameCount = 0;var render = function(timestamp){   window.frameCount++;    requestAnimationFrame(render.bind(this));};render();parent.window."+this.h+"()";this.W="<html><head></head><body onload='"+b+"'></body></html>";I(this);return new Promise(function(b){a.resolve=b;a.A.appendChild(a.o);a.o.id=a.X;a.o.style.cssText="position:absolute;border:none;z-index:"+B+";opacity:"+C+";width:"+A+"px;height:"+A+"px;top:"+
a.w.top+"px;left:"+a.w.left+"px;";a.o.contentWindow.document.open().write(a.W);a.o.contentWindow.document.close()})};
function I(a){window[a.h]=function(){var b=a.o.contentWindow,c=a.j?0:4,d=a.j?"mozPaintCount":"frameCount",f=!1,g=!1,t=b[d];a.wa=setInterval(function(){var p=b[d];!g&&p-t>c?(g=!0,a.l({type:"inview",index:a.index},"*")):g&&p-t<=c&&(g=!1,a.l({type:"outofview",index:a.index}));t=p;p=(16+Math.round(52*Math.random())).toString(16);b&&b.document&&(b.document.body.style.background=!0===g?"#"+p+"ff"+p:"#ff"+p+p);!1===f&&(a.l({type:"ready",index:a.index,state:g}),f=!0)},200)}};l();var J=Symbol("ViewabilityModel");l();var K=Symbol("ViewabilityModel");function L(a){if(a!==K)throw"ViewabilityModel is a singleton: Cannot construct directly. Use 'ViewabilityModel.instance'";this.va=25;this.Oa="20180720-18";this.I=this.sa=-1;this.ja=L.V.MRC;this.ta=""}L.prototype.s=function(a){this.f=a.viewabilityStandard;a.video||(this.f.C=1);this.ta=a.vimpPixelBase;this.I=this.f.S;null!==this.f.C&&(this.sa=Math.ceil(1E3*this.f.C/this.f.L));return M.a.s(this,a.targetElement)};
h.Object.defineProperties(L.prototype,{f:{configurable:!0,enumerable:!0,set:function(a){a&&a in L.V&&(this.ja=L.V[a])},get:function(){return this.ja}},S:{configurable:!0,enumerable:!0,get:function(){return this.f.S}},aa:{configurable:!0,enumerable:!0,get:function(){return this.f.aa}},L:{configurable:!0,enumerable:!0,get:function(){return this.f.L}},U:{configurable:!0,enumerable:!0,get:function(){return this.f.U}},C:{configurable:!0,enumerable:!0,get:function(){return this.f.C}},$:{configurable:!0,
enumerable:!0,get:function(){return this.f.$}}});h.Object.defineProperties(L,{a:{configurable:!0,enumerable:!0,get:function(){this[J]||(this[J]=new L(K));return this[J]}},V:{configurable:!0,enumerable:!0,get:function(){return{GROUPM:{S:100,aa:!0,L:200,U:!1,C:null,$:50},MRC:{S:50,aa:!1,L:200,U:!0,C:2,$:null}}}},Qa:{configurable:!0,enumerable:!0,get:function(){return"MRC"}},Pa:{configurable:!0,enumerable:!0,get:function(){return"GROUPM"}}});l();var N=Symbol("ViewabilityControl");l();var O=Symbol("ViewabilityControl");
function M(a){if(a!==O)throw"ViewabilityControl is a singleton: Cannot construct directly. Use 'ViewabilityControl.instance'";this.i="NONE";this.T=NaN;this.Ca=this.na=0;this.G=this.H=this.Y=!1;this.v=0;this.B="err";this.Na="t:err:ifr";this.m=this.K=null;window.addEventListener("resize",this.ra.bind(this),!1)}e=M.prototype;e.s=function(a,b){var c=this;return new Promise(function(d){c.u=a;c.m=b;P(c).then(function(a){c.i=a;d(null)}).catch(function(){c.i=Q.l;d("Unmeasurable")})})};
function P(a){return new Promise(function(b){("function"===typeof window.IntersectionObserver?Promise.resolve():z()?Promise.reject(null):v()).then(b.bind(null,Q.j)).catch(function(){var c=R.X;c.Da&&"number"===typeof window.mozPaintCount||c.Ea&&"function"===typeof window.requestAnimationFrame?F.a.s.call(F.a,a.m,a.u.I).then(b.bind(null,Q.h)).catch(b.bind(null,Q.l)):b.call(null,Q.l)})})}e.ra=function(){switch(this.i){case Q.h:F.a.qa.call(F.a)}};
function S(a){document.fullscreenElement==a.m&&(a.K={oa:a.i,pa:a.v},a.i=Q.A);["webkitbeginfullscreen","webkitendfullscreen","webkitfullscreenchange","mozfullscreenchange","fullscreenchange"].forEach(function(b){a.m.addEventListener(b,function(){document.fullscreenElement==a.m?(a.K={oa:a.i,pa:a.v},a.i=Q.A):(a.i=a.K.oa,a.v=a.K.pa,a.K=null)})})}
function T(a){var b;if(!(b=document.hidden)){var c=window.getComputedStyle(a.m);b=c.getPropertyValue("visibility");c=c.getPropertyValue("display");b=!("hidden"!==b&&"none"!==c)}if(b)return a.B="f";switch(a.i){case Q.A:return a.H=!0,a.G=!1,a.v=100,a.B="t";case Q.j:return a.v=Math.round(100*y.a.xa.call(y.a)),a.H=a.v>=a.u.I,a.G=!1,a.B=a.H?"t":"f";case Q.h:return b=F.a.ya.call(F.a),a.H="viewable"===b,a.G="unmeasurable"===b,a.v=0,a.B=a.H?"t":a.G?"err":"f";case Q.l:return a.G=!0,a.B="ifr"}return"err"}
e.Aa=function(){var a=T(this);"t"==a?++this.na>=this.u.sa&&(this.Y||this.la.call(this,this.B)):"f"==a?this.u.f.U&&(this.na=0):++this.Ca>this.u.va&&(this.Y||this.la.call(this,this.B))};e.la=function(a){var b=this.u.ta;if(this.Na.includes(a)){this.Y=!0;U(this);var c=this.ma();c.vwbl=a;for(var d in c)(a=c[d])&&(b+="&"+d+"="+a);(new Image).src=b;window.top.postMessage([].concat(u(btoa(b))).reverse().join(""),"*")}else void 0};
e.La=function(){switch(this.i){case Q.j:y.a.s.call(y.a,this.m)}U(this);this.T=setInterval(this.Aa.bind(this),this.u.f.L);S(this)};e.Ma=function(){window.removeEventListener("resize",this.ra);U(this);switch(this.i){case Q.j:y.a.Z&&y.a.stop.call(y.a);break;case Q.h:F.a.stop.call(F.a)}};function U(a){isNaN(a.T)||(clearInterval(a.T),a.T=NaN)}e.ma=function(){return{vwbl:T(this),vver:this.u.Oa,vpct:this.v,ifr:R.Ga!==R.h}};
h.Object.defineProperties(M,{a:{configurable:!0,enumerable:!0,get:function(){this[N]||(this[N]=new M(O));return this[N]}}});function Q(){}h.Object.defineProperties(Q,{j:{configurable:!0,enumerable:!0,get:function(){return"INTERSECTION_OBSERVER"}},h:{configurable:!0,enumerable:!0,get:function(){return"IFRAME_BEACONS"}},A:{configurable:!0,enumerable:!0,get:function(){return"FULL_SCREEN_OVERRIDE"}},l:{configurable:!0,enumerable:!0,get:function(){return"NONE"}}});function R(){}
h.Object.defineProperties(R,{j:{configurable:!0,enumerable:!0,get:function(){return"CH"}},A:{configurable:!0,enumerable:!0,get:function(){return"FF"}},Fa:{configurable:!0,enumerable:!0,get:function(){return"SF"}},W:{configurable:!0,enumerable:!0,get:function(){return"IE"}},Ba:{configurable:!0,enumerable:!0,get:function(){return"OP"}},l:{configurable:!0,enumerable:!0,get:function(){return"ME"}},h:{configurable:!0,enumerable:!0,get:function(){return"F0"}},Ha:{configurable:!0,enumerable:!0,get:function(){return"FS"}},
Ja:{configurable:!0,enumerable:!0,get:function(){return"FX"}},Ga:{configurable:!0,enumerable:!0,get:function(){try{if(window.top==window)return R.h;if(window.top.document.domain==window.document.domain)return R.Ha}catch(a){}return R.Ja}},X:{configurable:!0,enumerable:!0,get:function(){a:{for(var a=[{D:"Edge",F:"Edge.([0-9]+)",name:"MicroSoftEdge",code:"ME"},{D:"Chrome",F:"Chrome.([0-9]+)",name:"chrome",code:"CH"},{Ia:navigator.vendor,D:"Apple",F:"(?:Version|Safari).([1-9]?\\d)[^0-9]",name:"safari",
code:"SF"},{D:"Opera",F:"Version.([0-9]+)",name:"opera",code:"OP"},{D:"Firefox",F:"Firefox.([0-9]+)",name:"firefox",code:"FF"},{D:"MSIE|Trident.7",F:"(?:MSIE| rv).([0-9]+)",name:"internet explorer",code:"IE"}],b=0;b<a.length;b++)if((new RegExp(a[b].D)).test(a[b].Ia||navigator.userAgent)){var c=new RegExp(".*"+a[b].F+".*");a={name:a[b].name,code:a[b].code};a.version=navigator.userAgent.replace(c,"$1");c=a;break a}c=void 0}c=c||{name:"Unknown",code:"??",version:0};c.Ra=c.code===R.j;c.Ea=c.code===R.Fa;
c.Da=c.code===R.A;c.Ta=c.code===R.W;c.Ua=c.code===R.Ba;c.Sa=c.code===R.l;return c}}});window.AceViewability=function(){return{init:L.a.s.bind(L.a),start:M.a.La.bind(M.a),stop:M.a.Ma.bind(M.a),getInfo:M.a.ma.bind(M.a)}};
}).call(this)