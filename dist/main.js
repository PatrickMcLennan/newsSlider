!function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var r={slider:document.querySelector(".slider"),main:document.querySelector("main"),currentArticle:document.querySelector(".currentArticle"),heading:document.querySelector(".heading"),pic:document.querySelector(".heading__pic img"),title:document.querySelector(".heading__header")};const n={stories:[],arrayPosition:-1,apiKey:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903"};(async()=>{const t=(await async function(){return(await fetch(n.apiKey)).json()}()).articles;n.stories=[...t]})();var c=n;var s=class{constructor(t){this.article=c.stories[t],this.slider=r.slider,this.author=this.article.author,this.content=this.article.content,this.description=this.article.description,this.date=this.article.date,this.outlet=this.article.source.name,this.title=this.article.title,this.url=this.article.url,this.pic=this.article.urlToImage}createArticle(){const t=document.createElement("section");return t.classList.add("article"),t.innerHTML=`\n      <div class="article__pic">\n        <img src=${this.pic} alt="${this.title}">\n        <h5 class="article__pic__outlet">${this.outlet}</h5>\n        <h4 class="article__pic__title">${this.title}</h4>\n      </div>\n\n      <div class="article__info">\n        <div class="article__info__content">\n        <p>\n        ${this.content}\n        </p>\n        </div>\n        <div class="article__info__links">\n          <h5 class="article__info__author"><span>Written By :</span> ${this.author}</h5>\n          <h5 class="article__info__date">${this.date}</h5>\n        </div>\n      </div>\n    `,t}};r.slider.addEventListener("click",function(){const{slider:t}=r,e=r.main.querySelector(".currentArticle"),i=function t(){c.arrayPosition+=1;const e=new s(c.arrayPosition);return null===e.pic?t():e.createArticle()}(),n=[e,i];t.classList.toggle("move");const a=t.classList.contains("move")?n.forEach(t=>t.classList.add("placeLeft")):n.forEach(t=>t.classList.add("placeRight"));return function(t,e){r.main.removeChild(t),r.main.appendChild(e),e.classList.add("currentArticle")}(e,i),a})}]);