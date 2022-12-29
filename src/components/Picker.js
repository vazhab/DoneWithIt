import React, { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';
import Screen from './Screen';
import AppText from './Text';

function AppPicker({ icon, items, onSelectItem, numberOfColumns = 1, PickerItemComponent = PickerItem, placeholder, selectedItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <AppText style={styles.text}>{placeholder}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}

                    <MaterialCommunityIcons
                        name={'chevron-down'}
                        size={20}
                        color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        numColumns={numberOfColumns}
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
    }
})

export default AppPicker;