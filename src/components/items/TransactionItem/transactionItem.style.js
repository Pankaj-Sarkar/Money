import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    spaceBetn: {
        justifyContent: 'space-between',
    },
    
    imageWrapper: {
        height: 48,
        width: 48,
        borderRadius: 48,
        overflow: 'hidden',
        backgroundColor: 'red'
    },

    userImage: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
    },

    userName: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        color: '#858EC5',
    },

    badge: {
        borderRadius: 18,
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },

    badgeText: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: '#fff',
        marginLeft: 6,
    },

    badgeIcon: {
        height: 15,
        width: 15,
        borderRadius: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    amount: {
        color: '##FE4A54',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
    },
});

export default styles;