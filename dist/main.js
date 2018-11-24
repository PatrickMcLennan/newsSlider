!function(e){var t={};function r(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var a={slider:document.querySelector(".slider"),main:document.querySelector("main"),currentArticle:document.querySelector(".currentArticle"),heading:document.querySelector(".heading"),pic:document.querySelector(".heading__pic img"),title:document.querySelector(".heading__header")};const i={stories:[],arrayPosition:-1,apiKey:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903"};(async()=>{const e=(await async function(){return(await fetch(i.apiKey)).json()}()).articles;i.stories=[...e]})();var n=i;var c=class{constructor(e){this.article=n.stories[e],this.slider=a.slider,this.author=this.article.author,this.date=this.article.publishedAt,this.outlet=this.article.source.name,this.url=this.article.url,this.pic=this.article.urlToImage,this.title=this.article.title}createImg(){const e=document.createElement("img"),t=this.pic;return e.setAttribute("src",t),e.classList.add("article__pic"),e.style.animationDelay=`${1*Math.random()}s`,e}createTitle(){const e=this.title,t=document.createElement("h3"),r=document.createElement("span");return t.appendChild(r),t.classList.add("article__title"),r.style.animationDelay=`${1*Math.random()}s`,r.innerText=e,t}createFigure(){const e=document.createElement("figure"),t=[this.createImg(),this.createTitle()];return e.classList.add("article__figure"),t.forEach(t=>e.appendChild(t)),e}createAuthor(){const e=this.author,t=document.createElement("h5");return t.classList.add("article__author"),t.innerText=`- ${e}`,t.style.animationDelay=`${1*Math.random()}s`,t}createOutlet(){const e=this.outlet,t=document.createElement("h4");return t.classList.add("article__outlet"),t.innerText=e,t.style.animationDelay=`${1*Math.random()}s`,t}createDate(){const e=this.date,t=["Jan","Feb","March","April","May","June","July","August","Sept","Oct","Nov","Dec"][e.substring(5,7)-1],r=`20${e.substring(2,4)}`,a=e.substring(8,10),i=document.createElement("h5");return i.classList.add("article__date"),i.innerText=`${t} ${a}, ${r}`,i.style.animationDelay=`${1*Math.random()}s`,i}createArticle(){const e=document.createElement("article"),t=[this.createFigure(),this.createAuthor(),this.createOutlet(),this.createDate()];return a.main.appendChild(e),e.classList.add("article"),e.classList.add("fadeIn"),e.classList.add("currentArticle"),t.forEach(t=>{e.appendChild(t),t.style.animationDelay=`${1*Math.random()}s`,t.classList.add("animateShadowsIn")}),e}};function s(){n.arrayPosition+=1;const e=new c(n.arrayPosition);return null===e.pic?s():e.createArticle()}a.slider.addEventListener("click",function(){const{slider:e}=a,t=[...a.main.querySelectorAll(".currentArticle")];e.classList.toggle("move"),t.forEach(e=>e.classList.toggle("fadeIn")),setTimeout(()=>{t.forEach(e=>e.remove()),s(),s()},800)})}]);