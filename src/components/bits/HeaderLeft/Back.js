import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Feather from "react-native-vector-icons/Feather";

const Back = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Feather name="chevron-left" size={30} color="#D7C9C9" />
                <Text style={{ color: '#D7C9C9', fontFamily: 'Inter-Regular', fontWeight: '400', lineHeight: 24, fontSize: 14 }}>Back</Text>
            </View>
        </TouchableOpacity>
    )
};

export default Back;
