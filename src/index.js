import { genresEn, genresUkr } from './js/genres.js';
// import movieCard from './templates/card.hbs';

let genresAll = { genresEn, genresUkr };
console.log(genresAll.genresUkr);

// console.dir(movieCard());

const gallery = document.querySelector('.gallery');
const btnEn = document.querySelector('#en');
const btnUk = document.querySelector('#uk');

btnEn.addEventListener('click', onEnClick);
btnUk.addEventListener('click', onUkClick);

// const genresEn = [
//   { id: 28, name: 'Action' },
//   { id: 12, name: 'Adventure' },
//   { id: 16, name: 'Animation' },
//   { id: 35, name: 'Comedy' },
//   { id: 80, name: 'Crime' },
//   { id: 99, name: 'Documentary' },
//   { id: 18, name: 'Drama' },
//   { id: 10751, name: 'Family' },
//   { id: 14, name: 'Fantasy' },
//   { id: 36, name: 'History' },
//   { id: 27, name: 'Horror' },
//   { id: 10402, name: 'Music' },
//   { id: 9648, name: 'Mystery' },
//   { id: 10749, name: 'Romance' },
//   { id: 878, name: 'Science Fiction' },
//   { id: 10770, name: 'TV Movie' },
//   { id: 53, name: 'Thriller' },
//   { id: 10752, name: 'War' },
//   { id: 37, name: 'Western' },
// ];

// const genresUkr = [
//   { id: 28, name: 'Бойовик' },
//   { id: 12, name: 'Пригоди' },
//   { id: 16, name: 'Мультфільм' },
//   { id: 35, name: 'Комедія' },
//   { id: 80, name: 'Кримінал' },
//   { id: 99, name: 'Документальний' },
//   { id: 18, name: 'Драма' },
//   { id: 10751, name: 'Сімейний' },
//   { id: 14, name: 'Фентезі' },
//   { id: 36, name: 'Історичний' },
//   { id: 27, name: 'Жахи' },
//   { id: 10402, name: 'Музика' },
//   { id: 9648, name: 'Детектив' },
//   { id: 10749, name: 'Мелодрама' },
//   { id: 878, name: 'Фантастика' },
//   { id: 10770, name: 'Телефільм' },
//   { id: 53, name: 'Трилер' },
//   { id: 10752, name: 'Військовий' },
//   { id: 37, name: 'Вестерн' },
// ];

// let genresAll = { genresEn, genresUkr };
// console.log(genresAll.genresUkr);
let genres = genresAll.genresEn;

function onEnClick() {
  gallery.innerHTML = '';
  fetchApi('en');
  fetchGenres('en');
  localStorage.setItem('language', 'en');
  genres = genresAll.genresEn;
}
function onUkClick() {
  gallery.innerHTML = '';
  fetchApi('uk');
  fetchGenres('uk');
  localStorage.setItem('language', 'uk');
  genres = genresAll.genresUkr;
}

const currentLanguage = localStorage.getItem('language');
console.log(currentLanguage);

fetchGenres(currentLanguage);
async function fetchGenres(language) {
  const currentLang = language;
  await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=f87210516a7f6fda7a5c975f08793382&language=${currentLang}`
  )
    .then(response => {
      return response.json();
    })
    .then(async data => {
      console.log(data.genres);
      let genres = await data.genres;
      console.log(genres);
      return genres;
    })
    .catch(error => {
      console.log(error);
    });
}

// console.log(genres);

// let ids = 37;
// console.log(ids);

const searchGenresName = ids => {
  let genresNamesArr = [];
  const searchId = ids;
  let elGenreName;
  // console.log(searchId);

  for (var i = 0; i < ids.length; i++) {
    elGenreName = genres.find(list => list.id === searchId[i]).name;
    genresNamesArr.push(elGenreName);
    // continue;
  }
  return genresNamesArr;
};

fetchApi(currentLanguage);
async function fetchApi(language) {
  const currentLang = language;

  await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=f87210516a7f6fda7a5c975f08793382&page=1&language=${currentLang}`
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
      const markup = data.results
        .map(item => {
          // console.log(item.genre_ids);
          return `<li class='gallery-item'>
            <img src='https://image.tmdb.org/t/p/w500${
              item.poster_path
            }' alt='${item.title}' width='309' height='449'/>
            <div class='card-box'>
              <h3 class='card-title'>${item.title}</h3>
              <p class='text'>${searchGenresName(item.genre_ids)} | ${
            item.release_date
          }</p>
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
        })
        .join('');
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}
