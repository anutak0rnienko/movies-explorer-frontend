import { useState, useEffect } from "react";
import React from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import * as auth from "../../utils/auth";

export default function App() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { pathname, search } = useLocation();

    React.useEffect(() => {
        if (loggedIn) {
            mainApi.getUserInfoApi().then((res) =>
                setCurrentUser({
                    email: res.email,
                    name: res.name,
                })
            );
        }
    }, [loggedIn]);

    React.useEffect(() => {
        if (loggedIn) {
            const jwt = localStorage.getItem("jwt");
            auth.getContent(jwt)
                .then((res) => {
                    if (res) {
                        setLoggedIn(true);
                        navigate("/", { replace: true });
                    }
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn]);

    function handleOnLogin(password, email) {
        auth.authorize(password, email)
            .then((res) => {
                localStorage.setItem("jwt", res.token);
                setLoggedIn(true);
                handleOnLoginIn(password, email);
                navigate("/movies", { replace: true });
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }

    const handleOnLoginIn = (user) => {
        setLoggedIn(true);
    };

    function handleOnRegister(name, email, password) {
        auth.register(name, password, email)
            .then(() => {
                navigate("/movies", { replace: true });
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }

    function signOut() {
        localStorage.removeItem("jwt");
        setLoggedIn(false);
    }

    const tokenCheck = () => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            auth.getContent(jwt)
                .then((user) => {
                    handleOnLoginIn(user);
                    navigate(`${pathname}${search}`, { replace: true });
                })
                .catch((err) => console.log(err));
        }
    };
    useEffect(() => {
        tokenCheck();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn]);

    function handleUserUpdate(user) {
        setIsLoading(true);
        try {
            const userUpdate = mainApi.setUserInfoApi(user);
            setCurrentUser(userUpdate.data);
        } catch (err) {
            console.log(`Ошибка: ${err}`);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Routes>
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/" element={<Main />} />
                    <Route
                        path="/movies"
                        element={
                            <ProtectedRoute
                                element={Movies}
                                loggedIn={loggedIn}
                                textButton="Сохр"
                            />
                        }
                    />
                    <Route path="*" element={<PageNotFound />} />
                    <Route
                        path="/signup"
                        element={<Register onRegister={handleOnRegister} />}
                    />
                    <Route
                        path="/signin"
                        element={<Login onLogin={handleOnLogin} />}
                    />
                    <Route
                        path="/saved-movies"
                        element={
                            <SavedMovies
                                element={SavedMovies}
                                loggedIn={loggedIn}
                                textButton="x"
                            />
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <Profile
                                element={Profile}
                                signOut={signOut}
                                loggedIn={loggedIn}
                                // handleLogaut={handleLogaut}
                                handleUserUpdate={handleUserUpdate}
                            />
                        }
                    />
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    );
}


