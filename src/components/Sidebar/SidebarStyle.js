import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    sidebarBottom: {
        backgroundColor: '#fff', 
        height: Dimensions.get('window').height - 150,
        paddingTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'relative'
    },
    logout: {
        borderColor: '#ddd',
        borderTopWidth: 1,
        padding: 20,
        display: 'flex',
        gap: 20,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    logoutText: {
        color: '#020024',
        fontWeight: 'bold'
    },
    profileSection: {
        // marginLeft: -25, 
        // marginTop: 10, 
        backgroundColor: '#020024', 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        position: 'absolute',
        left: 0,
        top: 0,
        height: 140,
        width: '100%'
    }
});