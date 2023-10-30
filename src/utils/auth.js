export const BASE_URL = "https://api.domainname.annamovie.nomoredomainsrocks.ru";

export function register(name, email, password) {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    }).then((res) => this._checkError(res));
}

export function authorize(email, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then((res) => this._checkError(res))
        .then((data) => {
            if (data.token) {
                localStorage.setItem("jwt", data.token);
                return data;
            }
        });
}

export function getContent(jwt) {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
    }).then((res) => checkError(res));
}

function checkError(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`${res.status}`);
}
