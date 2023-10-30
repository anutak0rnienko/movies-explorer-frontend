import React from "react";
import { validation } from "./constants";

function useFormValidation() {
    const [values, setValues] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [errs, setErrs] = React.useState({});

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        switch (name) {
            case "username":
                target.validity.patternMismatch
                    ? target.setCustomValidity(validation.username.message)
                    : target.setCustomValidity("");
                break;
            case "email":
                target.validity.patternMismatch
                    ? target.setCustomValidity(validation.email.message)
                    : target.setCustomValidity("");
                break;
            default:
                target.setCustomValidity("");
        }

        setValues({ ...values, [name]: value });
        setErrs({ ...errs, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = React.useCallback(
        (newValues = {}, newErrors = {}, newValid = false) => {
            setValues(newValues);
            setErrs(newErrors);
            setIsValid(newValid);
        },
        [setValues, setIsValid, setErrs]
    );

    return {
        values,
        isValid,
        errs,
        setIsValid,
        setValues,
        handleChange,
        resetForm,
    };
}

export default useFormValidation;
