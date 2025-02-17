// Import React
import React, { useContext } from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/drawerscreens/Home';
import Settings from '../screens/drawerscreens/Settings';
import Profile from '../screens/drawerscreens/Profile';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import {fonts} from '../utills/fonts';
import { AuthContext } from '../utills/Context';
// Import Screens

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const ThirdScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={Profile} />
    </Stack.Navigator>
  );
};

const SecondScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={Settings} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = props => {
  const {...fonts} = useContext(AuthContext);

  
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'back',
        drawerStyle: {
          fontFamily: fonts.boldFont,
          backgroundColor: '#FDF4EC', //Set Drawer background
          width: 200, //Set Drawer width
        },
        drawerItemStyle: {
          fontFamily: fonts.boldFont,
          fontWeight: 'bold', //Set Header text style
        },
        drawerLabelStyle: {
          color: '#000000',
          fontSize:24,
          textAlign:'right',
          fontFamily: fonts.boldFont,
        },
      }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="planner"
        options={{
          headerShown: false,
        }}
        component={FirstScreenStack}
      />
        <Drawer.Screen
        name="account"
        options={{
          headerShown: false,
        }}
        component={ThirdScreenStack}
      />
      <Drawer.Screen
        name="settings"
        options={{
          headerShown: false,
        }}
        component={SecondScreenStack}
      />
    
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
