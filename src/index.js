// fetch(
//         https://api.themoviedb.org/3/trending/movie/day?api_key=2f44dbe234f7609a16da7327d83f3eb3&page=1&language=${currentLang}
//     )
//         .then(res => res.json())
//         .then(data =>  console.log(data))

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
function fetchApi(language) {
  const currentLang = language;

  return (result = fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=f87210516a7f6fda7a5c975f08793382&language=${currentLang}&page=1`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const markup = data.results.map(item => {
        return `<li class='gallery-item'>
  <img src='https://image.tmdb.org/t/p/w342${
    item.poster_path
  }' alt='big' width='309' height='449'/>
  <div class='card-box'>
    <h3 class='card-title'>${item.title}</h3>
    <p class='text'>${item.genre_ids} | ${item.release_date}</p>
  </div>
   <div class="over">
   
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
    .catch(err => console.log(err)));
}
