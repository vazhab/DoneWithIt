import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from '../components/Card';
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings"
import AppText from "../components/Text";
import Button from "../components/Button";
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && <>
        <AppText>Couldn't retreive the listings</AppText>
        <Button title="Retry" onPress={loadListings} />
      </>}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  }
});

export default ListingsScreen;