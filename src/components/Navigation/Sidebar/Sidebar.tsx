import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import LandingStyle from '../../../screens/Landing/LandingStyle';
import SidebarStyle from './SidebarStyle';
import {useDispatch} from 'react-redux';
import {logout} from '../../../redux/slice/AuthenticSlice';

const Sidebar = ({state, navigation, ...props}: any) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  const handlePress = (route: any) => {
    if (route.name === 'Dashboard') {
      navigation.navigate('Dashboard', {
        screen: 'Dashboard',
      });
    } else {
      navigation.navigate(route.name);
    }
  };
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: '#020024',
        paddingVertical: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <View style={{...LandingStyle.logo, marginLeft: -25, marginTop: 10}}>
        <Image
          source={require('../../../../assets/images/profile4.webp')}
          style={{width: 55, height: 55, borderRadius: 55}}
        />
        <View>
          <Text
            style={{
              ...LandingStyle.logoTextTop,
              fontSize: 24,
              marginBottom: 3,
            }}>
            Test User{' '}
          </Text>
          <Text style={{...LandingStyle.logoTextBottom, fontSize: 12}}>
            test@brainvire.com
          </Text>
        </View>
      </View>
      <View style={SidebarStyle.sidebarBottom}>
        {state.routes.map((route: any) => (
          <DrawerItem
            key={route.key}
            label={route.name}
            labelStyle={{color: '#020024', paddingLeft: 0, marginLeft: -10}}
            activeBackgroundColor={'#020024'}
            icon={({focused, color, size}) => {
              if (route.name == 'Dashboard') {
                return (
                  <IconMaterialIcons
                    name="dashboard"
                    size={20}
                    color="#020024"
                  />
                );
              } else if (route.name == 'Products') {
                return (
                  <FontAwesome5Icons name="gift" size={20} color="#020024" />
                );
              } else if (route.name == 'Inventory') {
                return (
                  <IconMaterialIcons
                    name="inventory"
                    size={20}
                    color="#020024"
                  />
                );
              } else if (route.name == 'Orders') {
                return (
                  <IconMaterialIcons
                    name="shopping-cart"
                    size={20}
                    color="#020024"
                  />
                );
              } else if (route.name == 'Goals') {
                return (
                  <IconMaterialIcons
                    name="shopping-cart"
                    size={20}
                    color="#020024"
                  />
                );
              } else if (route.name == 'Reports') {
                return (
                  <IconMaterialIcons
                    name="event-note"
                    size={20}
                    color="#020024"
                  />
                );
              } else if (route.name == 'Customers') {
                return <IconAntDesign name="user" size={20} color="#020024" />;
              } else if (route.name == 'Amazon') {
                return (
                  <IconAntDesign name="amazon" size={20} color="#020024" />
                );
              } else if (route.name == 'Settings') {
                return (
                  <IconAntDesign name="setting" size={20} color="#020024" />
                );
              } else if (route.name == 'Profile') {
                return (
                  <FontAwesome5Icons
                    name="user-alt"
                    size={20}
                    color="#020024"
                  />
                );
              }
            }}
            onPress={() => handlePress(route)}
          />
        ))}
        <TouchableOpacity style={SidebarStyle.logout} onPress={handleLogOut}>
          <IconMaterialIcons name="logout" size={20} color="#020024" />
          <Text style={SidebarStyle.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default Sidebar;
