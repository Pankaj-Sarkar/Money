import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from './request.style';
import background from '../../assets/images/background.jpg';
import user from '../../assets/images/user1.jpg';

const Request = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.image}>
                <View style={styles.circle1}>
                    <View style={styles.circle2}>
                        <View style={styles.circle3}>
                            <Image source={user} style={styles.userImage} />
                        </View>
                    </View>
                </View>

                <View style={styles.dataContainer}>
                    <Text style={styles.userName}>Adeleke Ramon</Text>
                    <Text style={styles.subText}>is requesting for:</Text>
                    <View style={[styles.row, { marginBottom: 48 }]}>
                        <MaterialCommunityIcons name="currency-ngn" color="#EEEEEE" size={48} />
                        <Text style={styles.amount}>200,000</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={[styles.btn, { backgroundColor: '#FF2E63' }]}>
                                <Text style={[styles.btnText, { color: '#fff' }]}>Send Money</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.btn, styles.btnBorder]}>
                                <Text style={styles.btnText}>Don't send</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Request;