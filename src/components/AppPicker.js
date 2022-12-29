import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from '../config/styles';
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native';
import Screen from './Screen';
import { FlatList } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
                    <TextInput style={defaultStyles.text} {...otherProps} />
                    {selectedItem ? <AppText style={styles.text}>{placeholder}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                    <MaterialCommunityIcons name={'chevron-down'} size={20} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
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
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 20,
        alignItems: 'center',
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