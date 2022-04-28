import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        height,
        width,
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'flex-end',
    },

    contentWrapper: {
        width: width - 70,
        backgroundColor: '#17288E',
        borderTopRightRadius: 70,
        padding: 32,
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 16,
    },

    one: {
        width: 16,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#FDD590',
    },

    two: {
        width: 32,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#FFB129',
        marginLeft: 4,
    },

    three: {
        width: 16,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#FDD590',
        marginLeft: 4,
    },

    title: {
        fontFamily: 'Inter-Regular',
        fontWeight: '700',
        fontSize: 18,
        color: '#fff'
    },

    subText: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
        marginTop: 6,
    },

    btn: {
        height: 50,
        width: 145,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },

    btnText: {
        color: '#17288E',
        fontFamily: 'Inter-Regular',
        fontWeight: '500',
        fontSize: 16,
    },
});

export default styles;