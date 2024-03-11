import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationStyle from './NavigationStyle'
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Navigation = (props: any) => {
    return (
        <View style={NavigationStyle.navigationMain}>
            <View style={NavigationStyle.navigationLeft}>
                <IconEntypo name="menu" size={20} color="#fff" onPress={() => props.navigation.openDrawer()} />
                <Text style={NavigationStyle.title}>{props?.route?.name}</Text>
            </View>
            <View style={NavigationStyle.navigationRight}>
                <IconMaterialIcons name="notifications" size={20} color="#fff" />
                {/* <IconFontAwesome5 name="user-circle" size={20} color="#fff" /> */}
                <Image source={require('../../../assets/images/profile4.webp')} style={{ height: 20, width: 20, borderRadius: 20 }} />
            </View>
        </View>
    )
}

export default Navigation