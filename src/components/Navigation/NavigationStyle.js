import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    navigationMain: {
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#020024'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    navigationLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    navigationRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }
})