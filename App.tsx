import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Landing from './src/screens/Landing/Landing';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/SignUp/SignUp';
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import Home from './src/screens/Home/Home';
import { Menu, Navigation, Sidebar } from './src/components';
import Products from './src/screens/Products/Products';
import Inventory from './src/screens/Inventory/Inventory';
import Customers from './src/screens/Customers/Customers';
import Orders from './src/screens/Orders/Orders';
import Goals from './src/screens/Goals/Goals';
import Amazon from './src/screens/Amazon/Amazon';
import Reports from './src/screens/Reports/Reports';
import Settings from './src/screens/Settings/Settings';
import BottomTab from './src/components/BottomTab/BottomTab';
import MyAccount from './src/screens/MyAccount/MyAccount';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props) => <Navigation {...props} />,
      }}
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={BottomTab} />
      <Drawer.Screen name="Products" component={BottomTab} />
      <Drawer.Screen name="Inventory" component={BottomTab} />
      <Drawer.Screen name="Customers" component={Customers} />
      <Drawer.Screen name="Orders" component={BottomTab} />
      <Drawer.Screen name="Goals" component={Goals} />
      <Drawer.Screen name="Amazon" component={Amazon} />
      <Drawer.Screen name="Reports" component={BottomTab} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Profile" component={MyAccount} />
    </Drawer.Navigator>
  )
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <Text>Bottom</Text>}
    >
      <Tab.Screen name="Dashboard" component={Home} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Inventory" component={Inventory} />
      <Tab.Screen name="Customers" component={Customers} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Goals" component={Goals} />
      <Tab.Screen name="Amazon" component={Amazon} />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: 'Updates',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarLabel: 'Profile',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Sidebar"
        // screenOptions={{
        //   header: (props) => <Navigation {...props} />,
        // }}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={Home}
          //options={{ headerTitleAlign: 'center',  headerTintColor: '#fff', headerStyle: { backgroundColor: '#020024' } }} 
          //options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Sidebar"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
        {/* <BottomTabs /> */}
        {/* <Stack.Screen
          name="BottomBar"
          component={MyTabs}
        //options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App