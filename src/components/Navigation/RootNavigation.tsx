import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useSelector} from 'react-redux';
import Sidebar from './Sidebar/Sidebar';
import BottomTab from '../BottomTab/BottomTab';
import Products from '../../screens/Products/Products';
import Inventory from '../../screens/Inventory/Inventory';
import Customers from '../../screens/Customers/Customers';
import Orders from '../../screens/Orders/Orders';
import Goals from '../../screens/Goals/Goals';
import Amazon from '../../screens/Amazon/Amazon';
import Reports from '../../screens/Reports/Reports';
import Settings from '../../screens/Settings/Settings';
import MyAccount from '../../screens/MyAccount/MyAccount';
import Landing from '../../screens/Landing/Landing';
import Login from '../../screens/Login/Login';
import SignUp from '../../screens/SignUp/SignUp';
import ResetPassword from '../../screens/ResetPassword/ResetPassword';
import CustomHeader from './CustomHeader/CustomHeader';

const RootNavigation = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.authenticate.isAuthorized,
  );

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNav = ({navigation, route}: any) => {
    return (
      <Drawer.Navigator
        screenOptions={{
          header: props => <CustomHeader {...props} />,
        }}
        drawerContent={props => <Sidebar {...props} />}>
        <Drawer.Screen
          name="Dashboard"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        {/* <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Inventory" component={Inventory} /> */}
        <Drawer.Screen
          name="Customers"
          component={Customers}
          options={{
            headerShown: true,
          }}
        />
        {/* <Drawer.Screen name="Orders" component={Orders} /> */}
        <Drawer.Screen
          name="Goals"
          component={Goals}
          options={{
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="Amazon"
          component={Amazon}
          options={{
            headerShown: true,
          }}
        />
        {/* <Drawer.Screen name="Reports" component={Reports} /> */}
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={MyAccount}
          options={{
            headerShown: true,
          }}
        />
      </Drawer.Navigator>
    );
  };

  const AfterLoginStack = () => {
    console.log('first');
    return (
      <Stack.Navigator
        initialRouteName="DrawerNav"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const LandingStack = () => {
    console.log('first landing');

    return (
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? <AfterLoginStack /> : <LandingStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
