import { handleSendRequest } from './utils';

export const BASE_URL = 'https://api.domainname.annamovie.nomoredomainsrocks.ru';
// export const BASE_URL = 'http://localhost:3003';

// User registration
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => handleSendRequest(res));
};

// User authorization
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => handleSendRequest(res));
};

// Sending a GET request to the server to get the user's content
export const fetchUserContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleSendRequest(res));
};

// Sending a GET request to the server to get the user's information
export const getUserProfile = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => handleSendRequest(res));
};

// Sending a PATCH request to the server to updating user's information
export const modifyUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => handleSendRequest(res));
};

// Getting a movies array from the server
export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => handleSendRequest(res));
};

// Adding a new movie to the server
export const createMovieOnServer = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: 'https://api.nomoreparties.co' + data.image.url,
      trailerLink: data.trailerLink,
      thumbnail:
        'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then((res) => handleSendRequest(res));
};

// Deleting a movie from the server
export const deleteMovieOnServer = (cardId) => {
  return fetch(`${BASE_URL}/movies/${cardId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => handleSendRequest(res));
};
