const e=document.querySelector(".gallery"),t=document.querySelector("#en"),n=document.querySelector("#uk");t.addEventListener("click",(function(){e.innerHTML="",l("en"),localStorage.setItem("language","en")})),n.addEventListener("click",(function(){e.innerHTML="",l("uk"),localStorage.setItem("language","uk")}));const a=localStorage.getItem("language");function l(t){return result=fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=f87210516a7f6fda7a5c975f08793382&language=${t}&page=1`).then((e=>e.json())).then((t=>{console.log(t);const n=t.results.map((e=>`<li class='gallery-item'>\n  <img src='https://image.tmdb.org/t/p/w342${e.poster_path}' alt='big' width='309' height='449'/>\n  <div class='card-box'>\n    <h3 class='card-title'>${e.title}</h3>\n    <p class='text'>${e.genre_ids} | ${e.release_date}</p>\n  </div>\n   <div class="over">\n   \n    </div>\n                        <div class="rating">\n                        <span class="rating-value">${e.vote_average.toFixed(1)}</span>\n                    </div>\n</li>`));e.innerHTML="",e.insertAdjacentHTML("beforeend",n)})).catch((e=>console.log(e)))}console.log(a),l(a);
//# sourceMappingURL=index.dbb08b08.js.map
