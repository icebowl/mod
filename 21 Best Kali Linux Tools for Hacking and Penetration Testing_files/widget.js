!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="/0.1/",t(0)}([function(e,t,i){i(1),function(){function e(){var e=jQuery(h);A=!1,v.init(e),e.each(function(){var e=jQuery(this),n=e.config=jQuery.extend({},y,f(e[0].dataset));l(e);for(var r={title:"...",retail_price_in_cents:0,price_in_cents:0,permalink:"",img_360x270:g,publisher:{hostname:"..."}},o=0;o<n.itemsPerPage;o++)t(r,e,r);jQuery.getJSON("https://api.stacksocial.com/v0/search/sales",{per_page:n.itemsPerPage,publisher_id:n.publisherId,sort:n.sort,category_ids:n.categories.toString().split(",")},function(r){e.empty(),r.sales.forEach(function(i){t(i,e,r)}),u(e,r),"horizontal"!=n.layout&&"grid"!==n.layoutSize||i(e)}),jQuery(".scw-wrap").waypoint(s,{offset:"100%"})})}function t(e,t,i){var n=t.config,s=['<div class="scw-wrap">','  <div class="scw-item" style="background: {{colorBackground}}">',n.showDiscount?'<div     class="scw-discount"     style="background: {{colorDiscountBackground}}; color: {{colorDiscountText}}"  >    {{countDiscount}}% OFF  </div>':"",'    <div class="scw-image" style="width: {{imgWidthPercentage}}%">','      <a {{openNewTab}} href="https://{{url}}">','      <img alt="{{title}}" width="630" height="473" src="{{placeholder}}" data-src="{{img_360x270}}" alt="{{title}}"/></a>',"    </div>",n.showBuyBtn?'  <a {{openNewTab}}    href="https://{{url}}"    class="scw-price"    style="background: {{colorBtnBackground}}; color: {{colorBtnText}}">    <div class="scw-buy">Buy Now</div>    <span class="scw-price-original">${{priceOriginal}}</span> '+(n.showPrice?"  <span>${{priceFinal}}</span>":"")+"  </a>":"",'    <div class="scw-title" style="font-size:{{titleSize}}px; width:{{titleWidth}}%" >',"      <a {{openNewTab}}",'         style="color: {{colorForeground}}"','         href="https://{{url}}">','        <span class="ellipsis_text">{{titleAppendix}}{{title}}</span>',"      </a>","    </div>","  </div>","</div>"].join("\n"),l="vertical"==n.layout&&"medium"==n.layoutSize,u=l?n.imageWidth:100,p=jQuery.extend({},n,e,{openNewTab:n.openNewTab?'target="_blank"':"",imgWidthPercentage:u,titleWidth:l?100-u:100,titleAppendix:r(n,e),countDiscount:o(e.retail_price_in_cents,e.price_in_cents),url:i.publisher.hostname+e.permalink+a(e.permalink,n),priceOriginal:(e.retail_price_in_cents/100).toFixed(2),priceFinal:(e.price_in_cents/100).toFixed(2),placeholder:g});jQuery(t).append(d(s,p)).find(".scw-title a").ThreeDots({max_rows:3,whole_word:!1,ellipsis_string:"...",allow_dangle:!1,valid_delimiters:[" ",": "],alt_text_e:!0,alt_text_t:!0}).end().find("img").unveil().trigger("unveil").end().click(c)}function i(e){var t=function(){var t=0;return function(){clearTimeout(t),t=setTimeout(function(){n(e)},1e3/30)}}();jQuery(window).resize(t),n(e)}function n(e){var t=0;e.find(".scw-item").css("height","auto"),e.find(".scw-item").each(function(){t=Math.max(t,jQuery(this).height())}),e.find(".scw-item").each(function(){jQuery(this).css("height",t+"px")})}function r(e,t){if("vertical"==e.layout&&"medium"==e.layoutSize)switch(e.titleExtra){case"price":return"$"+(t.price_in_cents/100).toFixed(2)+" - ";case"discount":return o(t.retail_price_in_cents,t.price_in_cents)+"% Off - "}return""}function o(e,t){return 100-(t/(e/100)).toFixed(0)}function a(e,t){var i="?";return i+="utm_source="+encodeURIComponent(t.utmSource),i+="&utm_medium=js-dealfeed",i+="&utm_content="+t.utmContent.replace(/[^A-Z0-9]/gi,"-"),i+="&utm_campaign="+e.replace("/sales/",""),""!==t.utmAdditional&&(i+="&"+t.utmAdditional),""!==t.affiliateId&&m.indexOf(t.publisherId)!==-1&&(i+="&aid="+t.affiliateId),i}function c(){var e=window.location.href;ga("scJSDealFeedWidgetGA.send","event","outbound","click",e,{transport:"beacon"})}function s(){if(!A&&void 0!==window.ga){A=!0;var e=window.location.href;ga("scJSDealFeedWidgetGA.send","event","dealFeedView","view",e)}}function l(e){e.addClass("stackcommerce-widget"),"horizontal"===e.config.layout?e.addClass("scw-horizontal col"+e.config.colCount):e.addClass("vertical-"+e.config.layoutSize)}function u(e,t){if(e.config.showSeeAll){var i='<div class="scw-all-deals"><a target="_blank" href="{{url}}" style="text: {{titleSize}}px">{{seeAllDealsText}}</a></div>',n="https://"+t.publisher.hostname+a("see-all-deals",e.config),r=d(i,jQuery.extend({url:n},e.config));jQuery(e).append(r)}}function d(e,t){var i=function(e,i){return e.replace(new RegExp(i,"g"),t[i.replace(/[{}]/g,"")])},n=e.match(/{{[^}}]+}}/g);return n.reduce(i,e)}function p(e,t){var i=[],n=function(n){return function(){return i.push(n),i.length===e.length?t():void e.forEach(function(e){e.depends==n&&r[e.type](e)})}},r={script:function(e){var t=document.createElement("script");t.async=1,t.src=e.url,t.onload=n(e.name),document.head.appendChild(t)},style:function(e){var t=document.createElement("link");t.id=e.id,t.async=1,t.rel="stylesheet",t.type="text/css",t.href=e.url,t.onload=n(e.name),document.head.appendChild(t)}};e.forEach(function(e){e.presence?n(e.name)():e.depends||r[e.type](e)})}function f(e){function t(e){return"true"===e||"false"!==e&&(isNaN(e)?e:parseFloat(e))}return Object.keys(e).reduce(function(i,n){return i[n]=t(e[n]),i},{})}var A,g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAHZAQMAAAAxOOQcAAAAA1BMVEXMzMzKUkQnAAAAPElEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODHAJPQAAFjvJzXAAAAAElFTkSuQmCC",h="[data-sc-widget]",w=[{name:"jQuery",type:"script",url:"https://code.jquery.com/jquery-2.2.0.min.js",presence:window.jQuery},{name:"ThreeDots",type:"script",depends:"jQuery",url:"https://cdn.rawgit.com/theproductguy/ThreeDots/50f2b38b5dc3f92ff2095e5804e73baf66e5b2b5/js/jquery.ThreeDots.min.js",presence:window.jQuery&&window.jQuery.fn.ThreeDots},{name:"Unveil",type:"script",depends:"jQuery",url:"https://cdnjs.cloudflare.com/ajax/libs/unveil/1.3.0/jquery.unveil.min.js",presence:window.jQuery&&window.jQuery.fn.Unveil},{name:"widget.css",type:"style",id:"scw-css",url:"https://widgets.stackcommerce.com/js-deal-feed/0.1/widget.css",presence:document.getElementById(this.id)},{name:"Waypoints",type:"script",depends:"jQuery",url:"https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js",presence:window.jQuery&&window.jQuery.fn.waypoint}],m=[1,126,172,236],y={publisherId:"",affiliateId:"",layout:"horizontal",layoutSize:"large",sort:"best_sellers",categories:"",seeAllDealsText:"See all deals",showSeeAll:!0,showDiscount:!1,showPrice:!1,showBuyBtn:!0,titleSize:14,titleExtra:"none",imageWidth:50,itemsPerPage:3,colCount:3,openNewTab:!0,tracking:!0,utmSource:"",utmContent:"",utmAdditional:"",colorBackground:"#F7F7F7",colorForeground:"#6B6B6B",colorBtnBackground:"#2DB500",colorBtnText:"#FFFFFF",colorDiscountBackground:"#ffd300",colorDiscountText:"#000000"},v={load:function(){!function(e,t,i,n,r,o,a){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,o=t.createElement(i),a=t.getElementsByTagName(i)[0],o.async=1,o.src=n,a.parentNode.insertBefore(o,a)}(window,document,"script","//www.google-analytics.com/analytics.js","ga")},init:function(e){if(y.tracking){for(var t=0;t<e.length;t++){var i=jQuery(e[t]);if(f(i[0].dataset).tracking===!1)return}void 0===window.ga&&v.load(),ga("create","UA-21555618-14","auto","scDealFeedWidgetGA"),ga("scDealFeedWidgetGA.send","pageview")}}};p(w,function(){jQuery(e)}),window.SCWidget={init:e,defaults:y}}()},function(e,t){}]);