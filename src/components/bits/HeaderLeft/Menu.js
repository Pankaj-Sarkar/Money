import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const Menu = () => {
    return (
        <TouchableOpacity>
            <View style={{ height: 48, width: 48, borderRadius: 48, backgroundColor: '#212A6B', justifyContent: 'center', marginRight: 16 }}>
                <View style={{ width: 24, height: 2, backgroundColor: '#FF2E63', marginLeft: 12 }} />
                <View style={{ width: 18, height: 2, backgroundColor: '#FF2E63', marginLeft: 12, marginTop: 6 }} />
            </View>
        </TouchableOpacity>
    )
};

export default Menu;
