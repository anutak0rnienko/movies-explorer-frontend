import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import logo from '../../images/logo.svg';

function Form({
  linkText,
  link,
  children,
  title,
  buttonText,
  question,
  onSubmit,
  isDisabled,
  isLoading,
}) {
  return (
    <section className="form">
      <Link to="/" className="form__logo">
        <img src={logo} alt="logo" />
      </Link>
      <h3 className="form__title">{title}</h3>
      <form className="forma" id="form" onSubmit={onSubmit} noValidate>
        {children}
        <button
            className={
              isDisabled || isLoading
                ? "form__button-save form__button-save_inactive"
                : "form__button-save"
            }
            type="submit"
            disabled={isDisabled ? true : false}
          >
          {buttonText}
        </button>
      </form>
      <p className="form__text">
        {question}
        <Link to={link} className="form__link">
          {linkText}
        </Link>
      </p>
    </section>
  );
}

export default Form;
