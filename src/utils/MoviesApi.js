class MoviesApi {
    constructor(options) {
        this._url = options._url;
    }

    getMovies() {
        return fetch(`${this._url}`, {
            method: "GET",
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

export const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
