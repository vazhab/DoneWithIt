import Constants from "expo-constants";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    }
})

export default Screen;