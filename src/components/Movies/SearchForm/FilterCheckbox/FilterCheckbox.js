import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <section className="search__checkbox">
      <label className="search__content">
        <input className="search__input" type="checkbox" />
        <span className="search__slider" />
        <span className="search__film">Короткометражки</span>
      </label>
    </section>
  );
}
export default FilterCheckbox;