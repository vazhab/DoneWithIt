import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../Button";


function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton title={title} onPress={handleSubmit} />
    )
}

export default SubmitButton;
