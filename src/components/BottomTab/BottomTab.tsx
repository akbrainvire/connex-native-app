import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Products from '../../screens/Products/Products';
import Inventory from '../../screens/Inventory/Inventory';
import Orders from '../../screens/Orders/Orders';
import Reports from '../../screens/Reports/Reports';
import {DrawerActions, TabActions, useRoute} from '@react-navigation/native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {CustomTabBar} from './CustomBottomTab';
const Tab = createBottomTabNavigator();

const BottomTab = ({navigation, route, activeScreen}: any) => {
  //   const route = useRoute();
  // useEffect(() => {
  //   console.log(
  //     'enter',
  //     navigation.getState().routeNames[navigation.getState().index],
  //   );
  //   TabActions.jumpTo(
  //     navigation.getState().routeNames[navigation.getState().index],
  //   );
  // }, [navigation.getState().index]);

  // console.log(navigation.getState(), route, 'route');

  // DrawerActions.jumpTo(
  //   navigation.getState().routeNames[navigation.getState().index],
  // );

  // if()

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      // screenOptions={{
      //   headerShown: false,
      //   tabBarStyle: {height: 70, backgroundColor: '#020024'}, //Uncomment this to change back to Dip style tab bar and comment out the above tab bar prop
      //   tabBarActiveTintColor: '#fff',
      //   tabBarLabelStyle: {fontSize: 12, marginBottom: 10},
      // }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          headerShown: false,

          // tabBarIcon: ({focused}) => (
          //   <IconMaterialIcons
          //     name="dashboard"
          //     size={20}
          //     color={focused ? '#fff' : 'grey'}
          //   />
          // ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: false,

          // tabBarIcon: ({focused}) => (
          //   <FontAwesome5Icons
          //     name="gift"
          //     size={20}
          //     color={focused ? '#fff' : 'grey'}
          //   />
          // ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          headerShown: false,
          // tabBarIcon: ({focused}) => (
          //   <IconMaterialIcons
          //     name="inventory"
          //     size={20}
          //     color={focused ? '#fff' : 'grey'}
          //   />
          // ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,

          // tabBarIcon: ({focused}) => (
          //   <IconMaterialIcons
          //     name="shopping-cart"
          //     size={20}
          //     color={focused ? '#fff' : 'grey'}
          //   />
          // ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          headerShown: false,

          // tabBarIcon: ({focused}) => (
          //   <IconMaterialIcons
          //     name="event-note"
          //     size={20}
          //     color={focused ? '#fff' : 'grey'}
          //   />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
