!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var n={slider:document.querySelector(".slider"),main:document.querySelector(".main"),heading:document.querySelector(".heading"),pic:document.querySelector(".heading__pic img"),title:document.querySelector(".heading__header")};const r={stories:[],arrayPosition:-1,apiKey:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903"};(async()=>{const t=(await async function(){return(await fetch(r.apiKey)).json()}()).articles;r.stories=[...t]})();var c=r;var a=class{constructor(t){this.article=c.stories[t],this.author=this.article.author,this.content=this.article.content,this.description=this.article.description,this.date=this.article.date,this.outlet=this.article.source.name,this.title=this.article.title,this.url=this.article.url,this.pic=this.article.urlToImage}createArticle(){const t=document.createElement("section");return t.classList.add("article"),t.innerHTML=`\n      <div class="article__pic">\n        <img src=${this.pic} alt="${this.title}">\n        <h5 class="article__pic__outlet">${this.outlet}</h5>\n        <h4 class="article__pic__title">${this.title}</h4>\n      </div>\n\n      <div class="article__info">\n\n        <div class="article__info__content">\n        <p>\n        ${this.content}\n        </p>\n        </div>\n\n        <div class="article__info__links">\n          <h5 class="article__info__author"><span>Written By :</span> ${this.author}</h5>\n          <h5 class="article__info__date">${this.date}</h5>\n        </div>\n\n      </div>\n    `,t}};n.slider.addEventListener("click",function t(){c.arrayPosition+=1;const e=new a(c.arrayPosition),i=null===e.pic?t():e.createArticle();console.log(i)})}]);