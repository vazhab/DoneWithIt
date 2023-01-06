import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Card from '../components/Card';
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings"
import AppText from "../components/Text";
import Button from "../components/Button";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    if (!response.ok) { return setError(true); }
    setLoading(false);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Couldn't retreive the listings</AppText>
        <Button title="Retry" onPress={loadListings} />
      </>}
<ActivityIndicator animating={loading} size={'large'}/>
      <FlatList
        data={listings}
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