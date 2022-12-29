import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} icon={'email'} size={20} color={colors.medium} style={styles.icon} />}
            <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;