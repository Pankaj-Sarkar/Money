import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010A43',
        justifyContent: 'space-between',
    },

    topContainer: {
        paddingHorizontal: 16,
        paddingVertical: 40,
    },

    subText: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 12,
        color: '#E7E4E4',
    },

    balance: {
        fontFamily: 'Inter-Regular',
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 48,
        color: '#EEEEEE',
    },

    btn: {
        width: (width - 48) / 2,
        height: 60,
        borderWidth: 1,
        borderColor: "#464E8A",
        borderStyle: 'solid',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        fontFamily: 'Inter-Regular',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 28,
        color: '#464E8A',
    },

    BSContainer: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#10194E',
    },

    BSWrapper: {
        backgroundColor: "transparent",
    },

    BSDraggableIcon: {
        backgroundColor: "#4E589F",
        width: 64,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    spaceBetn: {
        justifyContent: 'space-between',
    },

    BSTitle: {
        fontFamily: 'Inter-Regular',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
    },

    sortBy: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        color: '#4E589F',
    },

    sortVal: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        color: '#DDD9D9',
        marginHorizontal: 6
    },

    filterComp: {
        position: 'absolute',
        right: 0,
        top: 25,
        backgroundColor: '#fff',
        zIndex: 9,
        alignItems: 'flex-end',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 4,
        backgroundColor: '#010A43',
    },

    filter: {
        paddingBottom: 5,
    },

    filterText: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        color: '#4E589F',
    },
});

export default styles;