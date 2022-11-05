import FilmApiTrendFetch from './js/serviceApiFilmTrend';
import card from './templates/card.hbs';

const gallery = document.querySelector('.card-list');
const btnEn = document.querySelector('#en');
const btnUk = document.querySelector('#uk');


const filmApiTrendFetch = new FilmApiTrendFetch();
// --------- При открытии сайта ---------------------

fetchApiFilms();

// ------------Переключение языка--------------
btnEn.addEventListener('click', onEnClick);
btnUk.addEventListener('click', onUkClick);

// ------------Модальное окно----------------

// fetchFilmCard()



async function onEnClick() {
  try {
    filmApiTrendFetch.lang = 'en';
    await fetchApiFilms();
  } catch (error) {
    console.log(error);
  }
}

async function onUkClick() {
  try {
    filmApiTrendFetch.lang = 'uk';
    await fetchApiFilms();
  } catch (error) {
    console.log(error);
  }
}

// ------------------------------------

async function fetchApiFilms() {
  try {
    await filmApiTrendFetch.filmsAndGenres().then(data => {
      const makrup = card(data);
      console.log(data);
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', makrup);
      // 
      console.log("HiHi")
    });
  } catch (error) {
    console.log(error);
  }


  listFilms = document.querySelector(".card-list")
  console.log(listFilms);
  listFilms.addEventListener('click', onCardClick);


async function onCardClick(event) {      
    if (event.target.classList.contains('card-list')) {
        console.log('не тут');       
      return;
    }     
    console.log('это клик После');
    // event.target.classList.add('tomato')
    filmApiTrendFetch.idFilm = event.target.getAttribute('id');
  console.log(filmApiTrendFetch.idFilm); 
  await fetchModalCard();
  await filmApiTrendFetch.fetchFilmCard();  
} 

  async function fetchModalCard() {
    try {
      await filmApiTrendFetch.fetchFilmCard().then(data => {
        // const makrup = modal-card(data);
        console.dir(data);
        // console.log(data.overview);
        console.log(filmApiTrendFetch.movie_id); 
        // gallery.innerHTML = '';
        // gallery.insertAdjacentHTML('beforeend', makrup);
      });
    } catch (error) {
      console.log(error);
    }
  }  

}




    // console.log(event.currentTarget);
// console.log('это клик ДО');
    // const hasClass = event.target.classList.contains('card');
    // console.log(hasClass);
    // console.log(event.target);

  // 
  // const li = document.querySelector('li');
  // filmApiTrendFetch.idFilm  = li.getAttribute('id');
  // console.log(filmApiTrendFetch.idFilm);
  // console.log(filmApiTrendFetch); 

  // cardFilm = document.querySelectorAll('.card')
  // console.log(cardFilm);

  // cardFilm.addEventListener('click', onCardClick);

