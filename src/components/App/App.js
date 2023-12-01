import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import InfoToolTipEdit from "../InfoToolTipEdit/InfoToolTipEdit";
import * as api from "../../utils/MainApi";
import CurrentUserContext from "../CurrentUserContext/CurrentUserContext";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  const [isInfoToolTipUpdatePopupOpen, setInfoToolTipUpdatePopupOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isOpen = isInfoToolTipPopupOpen || isInfoToolTipUpdatePopupOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserProfile()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .getMovies()
        .then((cardsData) => {
          setSavedMovies(cardsData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .fetchUserContent(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies");
            setIsLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeAllPopups() {
    setInfoToolTipPopupOpen(false);
    setInfoToolTipUpdatePopupOpen(false);
  }

  function closeByOverlayPopups(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups();
    }
  }

  function handleRegistratration({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(true);
        handleLogin({ email, password });
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      });
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setInfoToolTipPopupOpen(true);
          setIsSuccess(true);
          localStorage.setItem("jwt", res.token);
          navigate("/movies", { replace: true });
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUserInfo(newUserInfo) {
    setIsLoading(true);
    api
      .modifyUserInfo(newUserInfo)
      .then((data) => {
        setInfoToolTipUpdatePopupOpen(true);
        setisEdit(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        setInfoToolTipUpdatePopupOpen(true);
        setisEdit(false);
        console.log(err);
        handleAuthorizationError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleCardLike(card) {
    api
      .createMovieOnServer(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleAuthorizationError(err);
      });
  }

  function handleCardRemoveLike(card) {
    api
      .deleteMovieOnServer(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        ); // Удаляем карточку из списка избранных карточек
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleAuthorizationError(err);
      });
  }

  function handleAuthorizationError(err) {
    if (err === "Error: 401") {
      handleWebsiteExit();
    }
  }

  const handleWebsiteExit = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.clear();
    navigate("/");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <Header loggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path={"/signin"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Login onAuthorization={handleLogin} isLoading={isLoading} />
                )
              }
            />
            <Route
              path={"/signup"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register
                    onRegister={handleRegistratration}
                    isLoading={isLoading}
                  />
                )
              }
            />
            <Route path={"*"} element={<PageNotFound />} />
            <Route
              path={"/movies"}
              element={
                <ProtectedRoute
                  path="/movies"
                  component={Movies}
                  loggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  handleLikeFilm={handleCardLike}
                  onDeleteCard={handleCardRemoveLike}
                />
              }
            />
            <Route
              path={"/saved-movies"}
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleCardRemoveLike}
                />
              }
            />
            <Route
              path={"/profile"}
              element={
                <ProtectedRoute
                  path="/profile"
                  component={Profile}
                  loggedIn={isLoggedIn}
                  isLoading={isLoading}
                  signOut={handleWebsiteExit}
                  onUpdateUser={handleUpdateUserInfo}
                />
              }
            />
          </Routes>
          <InfoToolTip
            isOpen={isInfoToolTipPopupOpen}
            isSuccess={isSuccess}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlayPopups}
          />
          <InfoToolTipEdit
            isOpen={isInfoToolTipUpdatePopupOpen}
            isEdit={isEdit}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlayPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
