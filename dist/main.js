!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var i={slider:document.querySelector(".slider"),main:document.querySelector("main"),currentArticle:document.querySelector(".currentArticle"),heading:document.querySelector(".heading"),pic:document.querySelector(".heading__pic img"),title:document.querySelector(".heading__header")};const n={stories:[],arrayPosition:-1,apiKey:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903"};(async()=>{const e=(await async function(){return(await fetch(n.apiKey)).json()}()).articles;n.stories=[...e]})();var c=n;var a=class{constructor(e){this.article=c.stories[e],this.slider=i.slider,this.author=this.article.author,this.date=this.article.date,this.outlet=this.article.name,this.url=this.article.url,this.pic=this.article.urlToImage,this.title=this.article.title}createImg(){const e=document.createElement("img"),t=this.pic;return e.setAttribute("src",t),e.classList.add("article__pic"),e}createTitle(){const e=this.title,t=document.createElement("h3");return t.classList.add("article__title"),t.innerText=e,t}createAuthor(){const e=this.author,t=document.createElement("h5");return t.classList.add("article__author"),t.innerText=e,t}createOutlet(){const e=this.outlet,t=document.createElement("h4");return t.classList.add("article__outlet"),t.innerText=e,t}createDate(){const e=this.date,t=document.createElement("h5");return t.innerText=e,t}createArticle(){const e=document.createElement("article"),t=[this.createImg(),this.createTitle(),this.createAuthor(),this.createOutlet(),this.createDate()];return i.main.appendChild(e),e.classList.add("article"),t.forEach(t=>e.appendChild(t)),e}};function o(){c.arrayPosition+=1;const e=new a(c.arrayPosition);return null===e.pic?o():e.createArticle()}i.slider.addEventListener("click",function(){const{slider:e}=i,t=[...i.main.querySelectorAll(".currentArticle")],r=[o(),o()];return e.classList.toggle("move"),function(e,t){e.forEach(e=>document.removeChild(e)),t.forEach(e=>e.classList.add("currentArticle"))}(t,r),()=>{t.forEach(e=>e.classList.toggle("fadeIn")),r.forEach(e=>e.classList.toggle("fadeIn"))}})}]);