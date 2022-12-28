import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import * as Yup from 'yup';
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo-red.png')} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    textContentType="Password"
                    secureTextEmtry
                />
                <SubmitButton title="Login" />
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

export default LoginScreen;
