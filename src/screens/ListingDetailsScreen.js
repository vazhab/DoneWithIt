import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from '../components/Text';
import ListItem from "../components/ListItem";

import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../../assets/jacket.jpg')} />
            <View style={styles.container}>
                <AppText style={styles.title}>Red Jacket For Sale</AppText>
                <AppText style={styles.price}>$1000</AppText>
                <View style={styles.userContainer}><ListItem
                    image={require('../../assets/user.png')}
                    title="William"
                    subTitle='5 listings' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }
});

export default ListingDetailsScreen;
