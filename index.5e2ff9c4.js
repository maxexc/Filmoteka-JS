const e=document.querySelector(".gallery"),n=document.querySelector("#en"),a=document.querySelector("#uk");n.addEventListener("click",(function(){e.innerHTML="",r("en"),i("en"),localStorage.setItem("language","en")})),a.addEventListener("click",(function(){e.innerHTML="",r("uk"),i("uk"),localStorage.setItem("language","uk")}));const t=localStorage.getItem("language");async function i(e){const n=e;await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=f87210516a7f6fda7a5c975f08793382&language=${n}`).then((e=>e.json())).then((async e=>{console.log(e.genres);let n=await e.genres;return console.log(n),n})).catch((e=>{console.log(e)}))}console.log(t),i(t);const o=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function r(n){return result=fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=f87210516a7f6fda7a5c975f08793382&language=${n}&page=1`).then((e=>e.json())).then((n=>{console.log(n);const a=n.results.map((e=>`<li class='gallery-item'>\n            <img src='https://image.tmdb.org/t/p/w500${e.poster_path}' alt='${e.title}' width='309' height='449'/>\n            <div class='card-box'>\n              <h3 class='card-title'>${e.title}</h3>\n              <p class='text'>${(e=>{let n=[];const a=e;for(var t=0;t<e.length;t++)elGenreName=o.find((e=>e.id===a[t])).name,n.push(elGenreName);return n})(e.genre_ids)} | ${e.release_date}</p>\n            </div>\n             <div class="over">\n              <p>${e.overview}</p>\n              </div>\n                  <div class="rating">\n                   <span class="rating-value">${e.vote_average.toFixed(1)}</span>\n                  </div>\n          </li>`)).join("");e.innerHTML="",e.insertAdjacentHTML("beforeend",a)})).catch((e=>console.log(e)))}r(t);
//# sourceMappingURL=index.5e2ff9c4.js.map