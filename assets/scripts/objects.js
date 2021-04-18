const addMovieButton = document.getElementById('add-movie-btn');
const searchBox = document.getElementById('search-btn');

const movies = [];

const renderMovie = () => {
   const movieList = document.getElementById('movie-list');

   if (movies.length === 0) {
     movieList.classList.remove('visible');
     return;
   } else {
     movieList.classList.add('visible');
   } 
   movieList.innerHTML = '' // it is used to remove all the existing files is the code

   movies.forEach((movie) => {
       const movieEL = document.createElement('li');
       movieEL.textContent = movies.info.title;
       movieList.append(movieEL);
   });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }
  
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random(),
  };
  
  movies.push(newMovie);
  renderMovie();
};

addMovieButton.addEventListener('click', addMovieHandler);

