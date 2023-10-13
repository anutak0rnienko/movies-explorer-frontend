import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search-form'>
      <form className='search-form__form' >
        <input type='text' className="search-form__input" minLength="2" maxLength="30" placeholder="Фильм" required />
        <button type='submit' className="search-form__button" aria-label="Поиск Фильма" />
      </form>
      <FilterCheckbox />
    </section>
  );
};

export default SearchForm;