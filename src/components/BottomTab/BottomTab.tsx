import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Products from '../../screens/Products/Products';
import Inventory from '../../screens/Inventory/Inventory';
import Orders from '../../screens/Orders/Orders';
import Reports from '../../screens/Reports/Reports';
import {CustomTabBar} from './CustomBottomTab';
import CustomHeader from '../Navigation/CustomHeader/CustomHeader';
const Tab = createBottomTabNavigator();

const BottomTab = ({navigation, route, activeScreen}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: props => <CustomHeader {...props} />,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
