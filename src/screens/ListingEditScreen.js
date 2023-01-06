import { StyleSheet } from "react-native";
import * as Yup from 'yup';
import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import FormImagePicker from "../components/forms/FormImagePicker";
import AppFormPicker from "../components/forms/FormPicker";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import { useState } from "react";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Desctiption"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: "Clothing", value: 2, backgroundColor: 'green', icon: 'email' },
    { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' },
]

function ListingEditScreen(props) {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );

        if (!result.ok) {
            setUploadVisible(false);
            return alert('Could not save the listing.');
        }

        resetForm();
    }

    return (
        <Screen style={styles.container}>
            <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: [],
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <FormImagePicker
                    name="images" />
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
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name={"category"}
                    numberOfColumns={3}
                    width="50%"
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
