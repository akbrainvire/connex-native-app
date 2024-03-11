import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Products from '../../screens/Products/Products';
import Inventory from '../../screens/Inventory/Inventory';
import Orders from '../../screens/Orders/Orders';
import Reports from '../../screens/Reports/Reports';
import { Menu } from '..';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { height: 70, backgroundColor: '#020024' },
            //tabBarActiveBackgroundColor: '#020024',
            tabBarActiveTintColor: '#fff',
            tabBarLabelStyle: { fontSize: 12, marginBottom: 10 }
        }}
        >
            <Tab.Screen name='Dashboard' component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IconMaterialIcons name="dashboard" size={20} color={focused ? "#fff" : 'grey'} />
                    ),
                }}
            />
            <Tab.Screen name="Products" component={Products}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5Icons name="gift" size={20} color={focused ? "#fff" : 'grey'} />
                    ),
                }}
            />
            <Tab.Screen name="Inventory" component={Inventory}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IconMaterialIcons name="inventory" size={20} color={focused ? "#fff" : 'grey'} />
                    ),
                }}
            />
            <Tab.Screen name="Orders" component={Orders}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IconMaterialIcons name="shopping-cart" size={20} color={focused ? "#fff" : 'grey'} />
                    ),
                }}
            />
            <Tab.Screen name="Reports" component={Reports}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IconMaterialIcons name="event-note" size={20} color={focused ? "#fff" : 'grey'} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab