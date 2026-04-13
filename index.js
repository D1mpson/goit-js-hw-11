/* empty css                      */import{a as d,S as f,i as n}from"./assets/vendor-C2ySes1p.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=d.create({baseURL:"https://pixabay.com/api/",params:{key:"55276537-fb8dc5fad44054a48b25df817",image_type:"photo",orientation:"horizontal",safesearch:!0}});async function m(a){return(await p.get("/",{params:{q:a}})).data}const l=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const r=a.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:s,comments:c,downloads:u})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${i}" alt="${e}" loading="lazy"/>
        </a>
        <ul class="info">
          <li><b>Likes</b><span>${t}</span></li>
          <li><b>Views</b><span>${s}</span></li>
          <li><b>Comments</b><span>${c}</span></li>
          <li><b>Downloads</b><span>${u}</span></li>
        </ul>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function h(){l.innerHTML=""}function b(){document.querySelector(".loader").classList.add("visible")}function L(){document.querySelector(".loader").classList.remove("visible")}const w=document.querySelector(".form");w.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(r){h(),b();try{const o=(await m(r)).hits;if(o.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L()}}});
//# sourceMappingURL=index.js.map
