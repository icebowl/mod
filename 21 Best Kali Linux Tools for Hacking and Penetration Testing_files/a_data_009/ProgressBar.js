(window.webpackJsonp=window.webpackJsonp||[]).push([["ProgressBar"],{"1f623":function(n,e,t){"use strict";t.r(e);var r,a,o=t("11190"),i=t("b837c"),s=t("8ffb3"),p=t("4ee9a"),d=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},c=p.a.getThemeStyleFromProps(),l=Object(s.c)(function(n){n.visited,n.current,n.animated;var e=n.className;return o.createElement("div",{style:{overflow:"hidden",flex:1,margin:"5px 2px 0 2px",background:"hsla(0,0%,100%,.4)"}},o.createElement("div",{className:e}))}).withConfig({displayName:"StyledProgressBarItem"})(a||(a=d(["\n  ",";\n"],["\n  ",";\n"])),function(n){return Object(s.b)(r||(r=d(["\n    background: ",";\n    height: 3px;\n    ","\n  "],["\n    background: ",";\n    height: 3px;\n    ","\n  "])),function(n){var e=c(n,"progressBar","item","backgroundColor");return n.visited?e:n.animated&&n.current?e:n.current?e:"transparent"}(n),n.current&&n.animated?"\n    animation: progressAnimation 6.8s linear normal;\n    .animation-paused & {\n      animation-play-state: paused;\n    }\n    @keyframes progressAnimation {\n      from {\n\t\ttransform: translateX(-100%)\n\t}\n\tto {\n\t\ttransform: translateX(0)\n  }\n    };\n    ":"")});t.d(e,"ProgressBar",function(){return h});var u,f,m=(u=function(n,e){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}u(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),g=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},h=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return m(e,n),e.prototype.renderProgressBarItems=function(n){for(var e=[],t=0;t<n;t+=1)e[t]=o.createElement(l,{key:"bar-item-"+this.props.interactionId+"-"+t,visited:t<this.props.activeIndex,current:t===this.props.activeIndex,animated:this.props.isAnimated});return e},e.prototype.renderPausedState=function(){return o.createElement("div",{className:"pausedLabel"},"PAUSED")},e.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement("div",{className:this.props.className+" "+(this.props.isFrameProgressPaused?"animation-paused":"")},this.renderProgressBarItems(this.props.numberOfFrames),this.props.hasPauseLbel&&this.props.isFrameProgressPaused&&this.renderPausedState()))},e}(o.Component),y=Object(s.c)(h).withConfig({displayName:"StyledProgressBar"})(f||(f=g(["\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  right: 0;\n  top: 0;\n  direction: ltr;\n  padding: 0 5px;\n  .pausedLabel{\n    display: block;\n    position: absolute;\n    top: 20px;\n    right: 5px;\n    width: 100px;\n    height: 40px;\n    background: rgba(160, 170, 170, 0.5);\n    border-radius: 50px;\n    text-align: center;\n    line-height: 40px;\n    z-index: 2;\n    overflow: hidden;\n    font-family: LatoLatin, Helvetica, sans-serif;\n    color: #fff;\n    font-size: 13px;\n    letter-spacing: 3.4px;\n    font-weight: 700;\n    animation: fadeInFromNone 1s ease-out;\n\n    @keyframes fadeInFromNone {\n      0% {\n          display: none;\n          opacity: 0;\n      }\n  \n      30% {\n          display: block;\n          opacity: 0;\n      }\n  \n      100% {\n          display: block;\n          opacity: 1;\n      }\n    }\n  }\n"],["\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  right: 0;\n  top: 0;\n  direction: ltr;\n  padding: 0 5px;\n  .pausedLabel{\n    display: block;\n    position: absolute;\n    top: 20px;\n    right: 5px;\n    width: 100px;\n    height: 40px;\n    background: rgba(160, 170, 170, 0.5);\n    border-radius: 50px;\n    text-align: center;\n    line-height: 40px;\n    z-index: 2;\n    overflow: hidden;\n    font-family: LatoLatin, Helvetica, sans-serif;\n    color: #fff;\n    font-size: 13px;\n    letter-spacing: 3.4px;\n    font-weight: 700;\n    animation: fadeInFromNone 1s ease-out;\n\n    @keyframes fadeInFromNone {\n      0% {\n          display: none;\n          opacity: 0;\n      }\n  \n      30% {\n          display: block;\n          opacity: 0;\n      }\n  \n      100% {\n          display: block;\n          opacity: 1;\n      }\n    }\n  }\n"]))),b=Object(i.b)(function(n){return{isFrameProgressPaused:n.UIState.frames.isFrameProgressPaused}})(y);e.default=b}}]);