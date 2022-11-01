const gallery = document.querySelector('.gallery');
const btnEn = document.querySelector('#en');
const btnUk = document.querySelector('#uk');

btnEn.addEventListener('click', onEnClick);
btnUk.addEventListener('click', onUkClick);

function onEnClick() {
  gallery.innerHTML = '';
  fetchApi('en');
  localStorage.setItem('language', 'en');
}
function onUkClick() {
  gallery.innerHTML = '';
  fetchApi('uk');
  localStorage.setItem('language', 'uk');
}

const currentLanguage = localStorage.getItem('language');
console.log(currentLanguage);

fetchApi(currentLanguage);
async function fetchApi(language) {
  const currentLang = language;

  // "genres": [
  //   {
  //     "id": 28,
  //     "name": "Action"
  //   }
  // ]

  await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=f87210516a7f6fda7a5c975f08793382&language=${currentLang}&page=1`
    // `https://api.themoviedb.org/3/movie/541134/videos?api_key=f87210516a7f6fda7a5c975f08793382&language=${currentLang}`
    // `https://api.themoviedb.org/3/search/movie?api_key=f87210516a7f6fda7a5c975f08793382&language=${currentLang}&page=1&include_adult=false`
    // `https://api.themoviedb.org/3/trending/all/day?api_key=f87210516a7f6fda7a5c975f08793382&page=1&language=${currentLang}`
    // `https://api.themoviedb.org/3/genre/tv/list?api_key=f87210516a7f6fda7a5c975f08793382&page=1&language=${currentLang}`
    // `https://api.themoviedb.org/3/genre/movie/list?api_key=f87210516a7f6fda7a5c975f08793382&page=1&language=${currentLang}`
    // `https://api.themoviedb.org/3/trending/movie/day?api_key=f87210516a7f6fda7a5c975f08793382&page=1&language=${currentLang}`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const markup = data.results.map(item => {
        return `<li class='gallery-item'>
  <img src='https://image.tmdb.org/t/p/w342${
    item.poster_path
  }' alt='big' width='395' />
  <div class='card-box'>
    <h3 class='card-title'>${item.title}</h3>
    <p class='text'>${item.genre_ids} | ${item.release_date}</p>
  </div>
   <div class="over">
    <p>${item.overview}</p>
    </div>
                        <div class="rating">
                        <span class="rating-value">${item.vote_average.toFixed(
                          1
                        )}</span>
                    </div>
</li>`;
      });
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(err => console.log(err));
}
