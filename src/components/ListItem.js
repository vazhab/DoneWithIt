import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons"

function ListItem({ title, image, subTitle, IconComponent, onPress, renderRightActions, showShevron }) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}>
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                        </View>
                        {showShevron ? <MaterialCommunityIcons name={"chevron-right"} size={25} color={colors.medium} /> : null}
                    </View>
                </TouchableHighlight>
            </Swipeable></GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium,
    },
})

export default ListItem;