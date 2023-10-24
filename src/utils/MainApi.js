class MainApi {
    constructor(options) {
        this._url = options._url;
    }

    getUserInfoApi() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        }).then((res) => this._checkError(res));
    }

    updateUser(data) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify(data),
        }).then((res) => this._checkError(res));
    }

    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        }).then((res) => this._checkError(res));
    }

    addMovie(data) {
        return fetch(`${this._url}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify({
                duration: data.duration,
                year: data.year,
                country: data.country,
                director: data.director,
                description: data.description,
                // thumbnail: `${MoviesApi_Base_URL}${data.image.url}`,
                // image: `${MoviesApi_Base_URL}${data.image.url}`,
                movieId: data.id,
                trailerLink: data.trailerLink,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
        }).then((res) => this._checkError(res));
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        }).then((res) => this._checkError(res));
    }

    _checkError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const mainApi = new MainApi({
    url: "api.domainname.annamovie.nomoredomainsrocks.ru",
});

export default mainApi;
