// fetch(
//         https://api.themoviedb.org/3/trending/movie/day?api_key=2f44dbe234f7609a16da7327d83f3eb3&page=1&language=${currentLang}
//     )
//         .then(res => res.json())
//         .then(data =>  console.log(data))
import genresAll from './js/genres.js';
import movieCard from './templates/card.hbs';

console.dir(movieCard());

// console.log(genresAll.genresUkr);
let genres = genresAll.genresEn;

const gallery = document.querySelector('.gallery');
const btnEn = document.querySelector('#en');
const btnUk = document.querySelector('#uk');

btnEn.addEventListener('click', onEnClick);
btnUk.addEventListener('click', onUkClick);

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

// const genres = [
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

// let ids = 37;
// console.log(ids);

const searchGenresName = ids => {
  let genresNamesArr = [];
  const searchId = ids;
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

  return await (result = fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=f87210516a7f6fda7a5c975f08793382&language=${currentLang}&page=1`
    // `https://api.themoviedb.org/3/movie/541134/videos?api_key=f87210516a7f6fda7a5c975f08793382&language=${currentLang}`
    // `https://api.themoviedb.org/3/search/movie?api_key=f87210516a7f6fda7a5c975f08793382&language=${currentLang}&page=1&include_adult=false`
    // `https://api.themoviedb.org/3/trending/all/day?api_key=f87210516a7f6fda7a5c975f08793382&page=1&language=${currentLang}`
    // `https://api.themoviedb.org/3/genre/tv/list?api_key=f87210516a7f6fda7a5c975f08793382&page=1&language=${currentLang}`
    // `https://api.themoviedb.org/3/genre/movie/list?api_key=f87210516a7f6fda7a5c975f08793382&page=1&language=${currentLang}`
    // `https://api.themoviedb.org/3/trending/movie/day?api_key=f87210516a7f6fda7a5c975f08793382&page=1&language=${currentLang}`
  )
    .then(res => res.json())
    .then(async data => {
      console.log(data);
      const markup = await data.results
        .map(item => {
          // src = `'https://image.tmdb.org/t/p/w500${item.poster_path}'`;
          console.log(item.img);
          // console.log(item.genre_ids);
          // console.log(movieCard());
          // return movieCard(data.results);
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
    .catch(error => console.log(error)));
}
