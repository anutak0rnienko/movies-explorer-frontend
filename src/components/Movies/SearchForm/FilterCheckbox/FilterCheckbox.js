import "./FilterCheckbox.css";

const FilterCheckbox = ({ onCheckboxChange, isTimeMovieChecked }) => {
    const handleChange = (evt) => onCheckboxChange(evt.target.checked);

    return (
        <section className="search__checkbox">
            <div className="search__container">
                <label className="search__content">
                    <input
                        className="search__input"
                        type="checkbox"
                        onChange={handleChange}
                        checked={isTimeMovieChecked}
                    />
                    <span className="search__slider" />
                </label>
                <span className="search__film">Короткометражки</span>
            </div>
        </section>
    );
};
export default FilterCheckbox;
