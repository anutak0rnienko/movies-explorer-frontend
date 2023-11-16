import { ScreenSizeMap, ShortFilmDuration, MaxScreenSize, MinScreenSize } from './constants';

const updateFiltered = (movies, query, checked) => {
  let filteredResults = [];

  filteredResults = movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(query.toLowerCase()),
  );
  if (checked) {
    filteredResults = filteredResults.filter((movie) => movie.duration <= ShortFilmDuration);
  }

  return filteredResults;
};

const findScreenSizeMap = (screenWidth) => {
  if (screenWidth > MaxScreenSize) {
    return ScreenSizeMap.xl;
  } else if (screenWidth > MinScreenSize) {
    return ScreenSizeMap.lg;
  } else {
    return ScreenSizeMap.md;
  }
};


const duration = (number) => {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;
  return `${hours}ч. ${minutes}мин.`;
};

const ErrorMessage = "Такие данные уже используются";

export { updateFiltered, findScreenSizeMap, ErrorMessage, duration};