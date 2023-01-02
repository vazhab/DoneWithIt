import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./Text";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <AppText style={styles.label}>{item.label}</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    }
})

export default CategoryPickerItem;
