import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomActivityIndicator from '../generic/CustomActivityIndicator';

const RootNavigation = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.authenticate.isAuthorized,
  );

  const [userLoggedBefore, setUserLoggedBefore] = useState<
    null | boolean | string
  >(false);
  const [loading, setLoading] = useState(false);
  // console.log(
  //   useSelector((state: any) => state.authenticate),
  //   'userSelector authenticate',
  // );

  const checkIfuserLoggedBefore = async () => {
    setLoading(true);
    const userLoggedBefore = await AsyncStorage.getItem('userLoggedBefore');
    console.log(userLoggedBefore, 'userloggedbefore');
    setUserLoggedBefore(userLoggedBefore); // change here to userloggedbefore for that one time landing page functionality or false to not want that
    setLoading(false);
  };

  useEffect(() => {
    checkIfuserLoggedBefore();
  }, [isAuthenticated]);

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNav = ({navigation, route}: any) => {
    return (
      <Drawer.Navigator
        screenOptions={{
          header: props => <CustomHeader {...props} />,
        }}
        drawerContent={props => <Sidebar {...props} />}
        initialRouteName="Dashboard">
        <Drawer.Screen
          name="Dashboard"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        {/* <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Inventory" component={Inventory} /> */}
        {/* <Drawer.Screen
          name="Customers"
          component={Customers}
          options={{
            headerShown: true,
          }}
        /> */}
        {/* <Drawer.Screen name="Orders" component={Orders} /> */}
        {/* <Drawer.Screen
          name="Goals"
          component={Goals}
          options={{
            headerShown: true,
          }}
        /> */}
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
    return (
      <Stack.Navigator
        initialRouteName={userLoggedBefore ? 'Login' : 'Landing'}
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
          options={{headerShown: true, headerTitle: ''}}
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
      {loading ? (
        <CustomActivityIndicator color="#000" />
      ) : isAuthenticated ? (
        <AfterLoginStack />
      ) : (
        <LandingStack />
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
