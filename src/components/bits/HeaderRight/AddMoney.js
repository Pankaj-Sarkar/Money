import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./addMoney.style";

const HeaderRight = () => {
    return (
        <TouchableOpacity>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Add money</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HeaderRight;
