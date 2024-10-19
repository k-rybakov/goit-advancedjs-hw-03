import{S as p,i}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d="46595178-4dac5182a4d6048d037515019",u="https://pixabay.com/api?",m=async s=>{const o={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0},n=new URLSearchParams(o).toString(),e=u+n;return(await fetch(e)).json()},f="Sorry, there are no images matching your search query. Please try again!",y=new p(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250}),c=document.querySelector(".loader");i.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});const h=s=>{if(s.length==0){i.error({message:f,position:"topRight"});return}const o=document.querySelector(".gallery");o.innerHTML="";const n=s.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
            />
        <div class="gallery-footer">
          <div class="footer-item">
            <span class="item-title">Likes</span>
            <span class="item-value">${e.likes}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Views</span>
            <span class="item-value">${e.views}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Comments</span>
            <span class="item-value">${e.comments}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Downloads</span>
            <span class="item-value">${e.downloads}</span>
          </div>
        </div>
        </a>
    </li>`).join("");o.insertAdjacentHTML("beforeend",n),y.refresh()},l=(s,o)=>{i.error({message:s})},g=()=>c.style.display="block",v=()=>c.style.display="none";try{const s=document.querySelector("form");s.addEventListener("submit",async o=>{o.preventDefault();const n=s.elements.search.value.trim();if(!n){l("Query mustn't be empty","error");return}g();const e=await m(n);v(),h((e==null?void 0:e.hits)??[]),s.reset()})}catch(s){l(s.message)}
//# sourceMappingURL=index.js.map
