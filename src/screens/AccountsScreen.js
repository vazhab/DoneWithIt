import React from "react";
import { Image, StyleSheet, View, FlatList } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        }
    }
]

function ViewImageScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem title='William Marshal' subTitle='test@test.com' image={require('../../assets/user.png')} />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            keyExtractor={menuItem => menuItem.title}
                        />
                    )}
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
});

export default ViewImageScreen;
