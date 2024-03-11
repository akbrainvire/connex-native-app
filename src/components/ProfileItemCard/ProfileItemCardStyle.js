import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    itemCardMain: {
        display: 'flex',
        //alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        //borderWidth: 1,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 5,
        marginBottom: 30
    },
    itemTitle: {
        //color: '#fff',
        color: '#020024',
        fontSize: 22,
        fontWeight: 'bold'
    },
    itemDesc: {
        marginVertical: 20,
        lineHeight: 20,
        fontStyle: 'italic'
    },
    itemButton: {
        backgroundColor: '#020024',
        width: 100,
        height: 38,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
});