import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";
import { EMAIL_VALIDATION } from "../../utils/constants";
import useForm from "../../hooks/useForm";

function Register({ isLoading, onRegister }) {
  const { enteredValues, isErrors, handleChangeInput, isFormValid } = useForm();

  function handleSubmitForm(event) {
    event.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText="Войти"
      link="/signin"
      onSubmit={handleSubmitForm}
      isDisabled={!isFormValid}
      isLoading={isLoading}
    >
      <label className="form__label">
        Name
        <input
          name="name"
          className="form__input"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="name"
          onChange={handleChangeInput}
          value={enteredValues.name || ""}
        />
        <span className="form__input-error">{isErrors.name}</span>
      </label>
      <label className="form__label">
        Email
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="email"
          onChange={handleChangeInput}
          pattern={EMAIL_VALIDATION}
          value={enteredValues.email || ""}
        />
        <span className="form__input-error">{isErrors.email}</span>
      </label>
      <label className="form__label">
        Password
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
          placeholder="password"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
          minLength="6"
          maxLength="12"
        />
        <span className="form__input-error">{isErrors.password}</span>
      </label>
    </Form>
  );
}

export default Register;
