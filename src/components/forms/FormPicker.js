import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[name]}>
            </AppPicker>
            <ErrorMessage
                error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;
