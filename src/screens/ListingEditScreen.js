import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from 'yup';
import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Desctiption"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: "Clothing", value: 2, backgroundColor: 'green', icon: 'email'},
    { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock'},
]

function ListingEditScreen(props) {

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ title: '', price: '', description: '', category: null }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>
                <AppFormField
                    maxLength={255}
                    name={"title"}
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <AppFormPicker
                    items={categories}
                    name={"category"}
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder={"Category"}
                />
                <AppFormField
                    name={"description"}
                    maxLength={255}
                    multiLine
                    numberOfLines={3}
                    placeholder={"Description"}
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }

});

export default ListingEditScreen;
