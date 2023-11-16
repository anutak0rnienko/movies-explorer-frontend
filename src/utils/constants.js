// export const CodeMessage = {
//     BAD_REQUEST: "Что-то пошло не так",
//     SUCCESS: "Всё прошло успешно",
//     REGISTER_SUCCESS: "Вы успешно зарегистрировались!",
//     UPDATE_SUCCESS: "Ваши данные успешно изменены",
//     ERROR: "Во время запроса произошла ошибка",
// };

// export const CodeError = {
//     BADREQUEST_ERROR: 400,
//     UNAUTHORIZED_ERROR: 401,
//     NOTFOUND_ERROR: 404,
//     CONFLICT_ERROR: 409,
//     HANDLER_ERROR: 500,
// };

// export const SearchMessage = {
//     EMPTY: "Нужно ввести ключевое слово",
//     NOT_FOUND: "Ничего не найдено",
//     NOT_SAVED: "У вас нет сохранённых фильмов",
//     SEARCH_ERROR: "Во время загрузки произошла ошибка",
// };
const MoviesApi_URL = "https://api.nomoreparties.co/";

export const validation = {
    username: {
        pattern: "^[\\sa-zA-Zа-яА-ЯёЁ-]+$",
        message:
            "Имя должно содержать только латиницу, кириллицу, пробел или дефис",
    },
    email: {
        pattern: "^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$",
        message: "Укажите корректный email-адрес",
    },
};

export {
    MoviesApi_URL,
};

const ScreenSizeMap = {
    xl: { cards: 16, addCardsNumber: 4 },
    lg: { cards: 8, addCardsNumber: 2 },
    md: { cards: 5, addCardsNumber: 2 }
  };
  
  const MaxScreenSize = 1150;
  const MinScreenSize = 720;
  
  const ShortFilmDuration = 40;
  
  export {
    ScreenSizeMap,
    ShortFilmDuration,
    MaxScreenSize,
    MinScreenSize,
  };

// export const regexName = /^[а-яА-ЯёЁa-zA-Z -]+$/u;
// export const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
