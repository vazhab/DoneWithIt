import { useFormikContext } from "formik";
import React from "react";
import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {

    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                width={width}
                value={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormField;
