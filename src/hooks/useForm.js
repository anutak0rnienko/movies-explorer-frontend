import { useState, useCallback } from "react";

const useForm = () => {
  const [enteredValues, setenteredValues] = useState({ name: '', email: '', password: ''});
  const [isErrors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChangeInput = (event) => {
    const name = event.target.name
    const value = event.target.value


    setenteredValues({
      ...enteredValues,
      [name]: value,
    })

    setErrors({
      ...isErrors,
      [name]: event.target.validationMessage,
    })

    setIsFormValid(event.target.closest("#form").checkValidity())
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setenteredValues(newValues)
      setErrors(newErrors)
      setIsFormValid(newIsFormValid)
    },
    [setenteredValues, setErrors, setIsFormValid]
  )
  return {
    enteredValues,
    handleChangeInput,
    isFormValid,
    isErrors,
    resetForm,
  }
}

export default useForm;
