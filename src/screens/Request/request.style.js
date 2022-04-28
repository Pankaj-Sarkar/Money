import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const CIRCLE_WIDTH = width - 150;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderStartColor: 'red'
    },

    image: {
        height,
        width,
        resizeMode: 'cover',
        flex: 1,
    },

    circle1: {
        width: CIRCLE_WIDTH,
        height: CIRCLE_WIDTH,
        borderRadius: CIRCLE_WIDTH,
        backgroundColor: '#10194E',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        alignSelf: 'center',
    },

    circle2: {
        width: CIRCLE_WIDTH - 50,
        height: CIRCLE_WIDTH - 50,
        borderRadius: CIRCLE_WIDTH - 50,
        backgroundColor: '#192259',
        justifyContent: 'center',
        alignItems: 'center',
    },

    circle3: {
        width: CIRCLE_WIDTH - 100,
        height: CIRCLE_WIDTH - 100,
        borderRadius: CIRCLE_WIDTH - 100,
        backgroundColor: '#10194E',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    userImage: {
        width: CIRCLE_WIDTH - 100,
        height: CIRCLE_WIDTH - 100,
        borderRadius: CIRCLE_WIDTH - 100,
        resizeMode: 'cover',
    },

    dataContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },

    userName: {
        fontFamily: 'Inter-Regular',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 32,
        color: '#EEEEEE',
    },

    subText: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        color: '#EEEEEE',
        marginVertical: 24,
    },

    amount: {
        fontFamily: 'Inter-Regular',
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 54,
        color: '#EEEEEE',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    btn: {
        width: 173,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnBorder: {
        borderWidth: 1,
        borderColor: '#464E8A',
        borderStyle: 'solid',
        borderRadius: 10,
        marginTop: 24,
    },

    btnText: {
        fontFamily: 'Inter-Regular',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 28,
        color: '#464E8A',
    },
});

export default styles;