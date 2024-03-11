import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    counterCardMain: {
        backgroundColor: '#fff',
        padding: 15,
        // shadowRadius: 10,
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowColor: '#ddd',
        // elevation: 1,
        height: 150,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: 20,
        width: Dimensions.get('window').width - 110
    },
    titleText: {
        fontSize: 20,
        color: '#000',
    },
    countText: {
        fontSize: 26,
        color: '#000',
        fontWeight: 'bold',
    },
    round: {
        height: 60,
        width: 60,
        borderRadius: 60,
        //backgroundColor: 'red',
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowColor: '#ddd',
        elevation: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomMain: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
});