import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

const SearchForm = ({ onSearch, searchAllMovies, setSearchAllMovies }) => {

    const handleSeach = (evt) => {
        evt.preventDefault();
        onSearch();
      };
    
      const handleSeachMake = (evt) => {
        setSearchAllMovies(evt.target.value);
      };

    return (
        <section className="search-form">
            <form className="search-form__form" noValidate autoComplete='off' onSubmit={handleSeach}>
                <input
                    type="text"
                    className="search-form__input"
                    minLength="2"
                    maxLength="30"
                    placeholder="Фильм"
                    required
                    value={searchAllMovies}
                    onChange={handleSeachMake}
                    autoComplete='nope'
                />
                <button
                    type="submit"
                    className="search-form__button"
                    aria-label="Поиск Фильма"
                />
            </form>
            {/* <FilterCheckbox /> */}
        </section>
    );
};

export default SearchForm;
