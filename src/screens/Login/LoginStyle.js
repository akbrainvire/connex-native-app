import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    loginMain: {
        padding: 30,
        display: 'flex',
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        backgroundColor: '#fff',
        //backgroundColor: '#020024',
    },
    topSection: {
        marginBottom: 20
    },
    topTitle: {
        //color: '#fff',
        color: '#020024',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 26
    },
    topDesc: {
        //color: '#fff',
        color: '#020024',
        textAlign: 'center'
    },
    middleSection: {

    },
    bottomSection: {
        marginTop: 40
    },
    inputContainer: {
        marginTop: 20
    },
    label: {
        fontWeight: 'bold',
        //color: '#fff',
        color: '#020024',
        marginBottom: 10
    },
    input: {
        paddingLeft: 15,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f5f5f5',
        height: 50
    },
    checkboxDiv: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 10,
    },
    checkbox: {
        // backgroundColor: '#f5f5f5',
        // borderColor: '#ddd'
    },
    DontHaveAcc: {
        // display: 'flex',
        // flexDirection: 'row',
        // gap: 10,
        // justifyContent: 'center',
        // alignItems: 'flex-start',
        textAlign: 'center',
        marginTop: 20,
        //color: '#fff'
        color: '#020024',
    },
    errorMsg: {
        fontSize: 12,
        color: 'red',
        marginTop: 7
    }
});