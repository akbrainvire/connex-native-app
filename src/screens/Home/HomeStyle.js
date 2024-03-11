import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    homeMain: {
        display: 'flex',
        flex: 1,
        //padding: 30,
        //backgroundColor: '#fff',
        paddingTop: 20,
        overflow: 'scroll'
    },
    homeTitle: {
        color: '#020024',
        fontSize: 26,
        fontWeight: 'bold',
        margin: 20
    },
    counterMain: {
        paddingRight: 20
    },
    chartMain: {
        padding: 20
    },
    chartSub: {
        backgroundColor: '#fff',
        marginBottom: 30,
        borderRadius: 16,
    },
    chartHead: {
        display: 'flex',
        alignItems: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#2C7D27',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    chartHeadText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'left'
    },
    chartSubBottom: {
        padding: 10,
    }
});