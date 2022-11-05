// ------------Модальное окно----------------

// filmApiTrendFetch.idFilm()

// listFilms = document.querySelector(".card-list")
// console.log(listFilms);

// listFilms.addEventListener('click', onCardClick);

// async function onCardClick(event) {      
//     if (event.target.classList.contains('card-list')) {
//         console.log('не тут');       
//       return;
//     }     
//     console.log('это клик После');
//     // event.target.classList.add('tomato')
//     filmApiTrendFetch.idFilm  = event.target.getAttribute('id');
//   console.log(filmApiTrendFetch.idFilm);
//   await fetchModalCard();
//   }

//   async function fetchModalCard() {
//     try {
//       await filmApiTrendFetch.fetchFilmCard().then(data => {
//         // const makrup = modal-card(data);
//         console.log(data);
//         // console.log(data.overview);
//         console.log(filmApiTrendFetch.movie_id); 
//         // gallery.innerHTML = '';
//         // gallery.insertAdjacentHTML('beforeend', makrup);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }




// listFilms = document.querySelector(".card-list")
// console.log(listFilms);
// cardFilm = document.querySelector('.card')
// console.log(cardFilm);


// listFilms.addEventListener('click', onCardClick);

// function onCardClick(e) {   
//     // console.log('это клик ДО'); 
        
//     // if (e.target.nodeName === "li") {
//     //   console.log('это не li');
//     //   return;
//     // }
//     if (e.target.hasAttribute("id")) {
//         console.log('есть атрибут id');
//         return
//     }    
//     if (!e.target.classList.contains('.card')) {
//         console.log('не тут');
//       return;
//     }    console.log(e.target);
//     console.log('это клик После');
  
//     // const swatchEl = e.target;
//     // color = swatchEl.dataset.hex;
//     // shadowColor = swatchEl.dataset.rgb;
//     // console.log(swatchEl.dataset.hex);
//     // console.log(swatchEl.dataset.rgb);
//   }