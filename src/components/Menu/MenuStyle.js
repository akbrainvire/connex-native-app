import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    menuContainer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        //backgroundColor: '#020024',
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        paddingVertical: 20,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowColor: '#ddd',
        elevation: 1,
        height: 65
    },
    menuButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    menuText: {
        color: '#020024',
        fontSize: 12,
        fontWeight: 'bold'
    }
});