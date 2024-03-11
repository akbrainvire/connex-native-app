import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MenuStyle from './MenuStyle';
import { useNavigation } from '@react-navigation/native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

const Menu = (props: any) => {
    console.log(props, 'props')
    const navigation = useNavigation();
    const menuData = [
        {
            name: 'Dashboard',
            icon: <IconMaterialIcons name="dashboard" size={20} color="#020024" />
        },
        {
            name: 'Products',
            icon: <FontAwesome5Icons name="gift" size={20} color="#020024" />
        },
        {
            name: 'Inventory',
            icon: <IconMaterialIcons name="inventory" size={20} color="#020024" />
        },
        {
            name: 'Orders',
            icon: <IconMaterialIcons name="shopping-cart" size={20} color="#020024" />
        },
        {
            name: 'Reports',
            icon: <IconMaterialIcons name="event-note" size={20} color="#020024" />
        },
    ];

    return (
        <View style={MenuStyle.menuContainer}>
            {menuData?.map((data) => {
                return (
                    <TouchableOpacity
                        key={data?.name}
                        style={MenuStyle.menuButton}
                        onPress={() => navigation.navigate(`${data?.name}`)}
                    >
                        {/* <Image
                            style={styles.iconStyle}
                            source={{
                                uri: `${data?.img}`
                            }}
                        /> */}
                        {data?.icon}
                        <Text style={MenuStyle.menuText}>{data?.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default Menu