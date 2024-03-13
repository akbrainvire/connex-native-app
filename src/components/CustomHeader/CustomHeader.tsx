import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomHeaderStyle from './CustomHeaderStyle';

const CustomHeader = (props: any) => {
  return (
    <View style={CustomHeaderStyle.navigationMain}>
      <View style={CustomHeaderStyle.navigationLeft}>
        <IconEntypo
          name="menu"
          size={20}
          color="#fff"
          onPress={() => props.navigation.openDrawer()}
        />
        <Text style={CustomHeaderStyle.title}>{props?.route?.name}</Text>
      </View>
      <View style={CustomHeaderStyle.navigationRight}>
        <IconMaterialIcons name="notifications" size={20} color="#fff" />
        {/* <IconFontAwesome5 name="user-circle" size={20} color="#fff" /> */}
        <Image
          source={require('../../../assets/images/profile4.webp')}
          style={{height: 20, width: 20, borderRadius: 20}}
        />
      </View>
    </View>
  );
};

export default CustomHeader;
