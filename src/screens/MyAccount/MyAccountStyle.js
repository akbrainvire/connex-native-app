import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    myAccountMain: {
        backgroundColor: '#020024',
        flex: 1,
        //paddingBottom: 30
    },
    myAccountTop: {
        padding: 20,
        paddingBottom: 40,
    },
    topDetailsMain: {
        marginTop: 20
    },
    topDetailsTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    topDetailsDesc: {
        color: 'grey',
        marginTop: 7
    },
    myAccountBottom: {
        padding: 30,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        minHeight: Dimensions.get('window').height - 258,
        backgroundColor: '#fff',
        paddingBottom: 0
    },
    profileTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20
    },
    profilePart: {
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
    },
    profileName: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    emailPlan: {
        color: '#fff',
        marginBottom: 7
    }
});