import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";

import styles from './splash.style';
import splash from '../../assets/images/splash.jpg';

const Splash = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={splash} style={styles.image}>
                <View style={styles.contentWrapper}>
                    <View style={styles.row}>
                        <View style={styles.one} />
                        <View style={styles.two} />
                        <View style={styles.three} />
                    </View>
                    <Text style={styles.title}>Transfer That Is Safe</Text>
                    <Text style={styles.subText}>You have nothing to be scared about, we got you covered.</Text>
                    <Pressable style={styles.btn} onPress={() => navigation.navigate('home')}>
                        <Text style={styles.btnText}>Start banking</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Splash;