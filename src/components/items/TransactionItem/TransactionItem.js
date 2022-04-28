import React from "react";
import { View, Text, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "./transactionItem.style";

const TransactionItem = ({ item, index }) => {
    let backgroundColor = "#192259";
    if ((index + 1) % 2 == 0) backgroundColor = "transparent";
    let badgeColor = "#1DC7AC";
    if (item.type === 'Failed') badgeColor = "#FE4A54";
    if (item.type === 'Sent') badgeColor = "#FAAD39";
    let icon = <AntDesign name="adduser" color={badgeColor} size={10} />
    if (item.type === 'Failed') icon = <Ionicons name="ios-alert-sharp" color={badgeColor} size={15} />;

    return (
        <View style={[styles.row, styles.spaceBetn, { padding: 16, backgroundColor }]}>
            <View style={styles.row}>
                <View style={styles.imageWrapper}>
                    <Image source={item.image} style={styles.userImage} />
                </View>
                <View style={{ marginLeft: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <View style={[styles.badge, { backgroundColor: badgeColor }]}>
                        <View style={styles.badgeIcon}>
                            {icon}
                        </View>
                        <Text style={styles.badgeText}>{item.type}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <MaterialCommunityIcons name="currency-ngn" color={badgeColor} size={15} />
                <Text style={[styles.amount, { color: badgeColor }]}>{`${item.amount}`}</Text>
            </View>
        </View>
    );
}

export default TransactionItem;
