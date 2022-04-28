import React, { useEffect, useRef, useState } from "react";
import { View, Text, StatusBar, Dimensions, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { transactions, types } from "./home.data";
import TransactionItem from "../../components/items/TransactionItem/TransactionItem";
import styles from "./home.style";

const { width, height } = Dimensions.get('window');
const Home = ({ navigation }) => {
    const refRBSheet = useRef();
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [data, setData] = useState(transactions);

    useEffect(() => {
        // Just to show the bottom sheet effect
        setTimeout(() => {
            refRBSheet?.current?.open();
        }, 200);
    }, []);

    const filterData = (keyword) => {
        setSelectedFilter(keyword);
        if (keyword === 'All') {
            setData(transactions);
            setIsOpenFilter(false);
            return;
        }
        let draftData = transactions.filter((item) => item.type == keyword);
        setData(draftData);
        setIsOpenFilter(false);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#010A43" barStyle='light-content' />

            <View style={styles.topContainer}>
                <Text style={styles.subText}>Your current balance is</Text>
                <View style={[styles.row, { marginTop: 16, marginBottom: 32 }]}>
                    <MaterialCommunityIcons name="currency-ngn" color="#EEEEEE" size={40} />
                    <Text style={styles.balance}>200,000</Text>
                </View>
                <View style={[styles.row, styles.spaceBetn]}>
                    <TouchableOpacity onPress={() => navigation.navigate('request')}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Request Money</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('send')}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Send Money</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                dragFromTopOnly={true}
                height={height / 1.8}
                customStyles={{
                    container: styles.BSContainer,
                    wrapper: styles.BSWrapper,
                    draggableIcon: styles.BSDraggableIcon
                }}
            >
                <View style={{ flex: 1 }}>
                    <View style={[styles.row, styles.spaceBetn, { marginHorizontal: 16, marginTop: 20, marginBottom: 32 }]}>
                        <Text style={styles.BSTitle}>All Transactions</Text>

                        <View style={{ position: 'relative' }}>
                            <TouchableOpacity onPress={() => setIsOpenFilter(!isOpenFilter)}>
                                <View style={styles.row}>
                                    <Text style={styles.sortBy}>Sort By:</Text>
                                    <Text style={styles.sortVal}>{selectedFilter}</Text>
                                    <Feather name="chevron-down" size={20} color="#fff" />
                                </View>
                            </TouchableOpacity>

                            {isOpenFilter && (<View style={styles.filterComp}>
                                {types.map(item => (
                                    <TouchableOpacity key={item} style={styles.filter} onPress={() => filterData(item)}>
                                        <Text style={styles.filterText}>{item}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>)}
                        </View>
                    </View>

                    <FlatList
                        data={data}
                        renderItem={(props) => <TransactionItem {...props} />}
                        keyExtractor={(_, index) => index}
                    />
                </View>
            </RBSheet>

            <TouchableOpacity onPress={() => refRBSheet?.current?.open()}>
                <Feather name="chevron-up" size={40} color="#fff" style={{ alignSelf: 'center', marginBottom: 20 }} />
            </TouchableOpacity>
        </View>
    )
}

export default Home;