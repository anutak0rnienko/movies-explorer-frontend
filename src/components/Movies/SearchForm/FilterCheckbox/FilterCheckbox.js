import "./FilterCheckbox.css";

const FilterCheckbox = ({ onFilterMovies, isShortMovies }) => {
  return (
    <section className="search__checkbox">
      <label className="search__content">
        <input
          className="search__input"
          type="checkbox"
          onChange={onFilterMovies}
          checked={isShortMovies}
          required
        />
        <span className="search__slider" />
      </label>
      <span className="search__film">Короткометражки</span>
    </section>



  );
};
export default FilterCheckbox;
