import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Landing} from '../screens/Landing';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Summary} from '../screens/Summary';
import {AddExpense} from '../screens/AddExpense';
import {Statistics} from '../screens/Statistics';
import {Setting} from '../screens/Setting';
import HomeIcon from '../assets/icons/HomeIcon';
import MarketIcon from '../assets/icons/MarketIcon';
import MoneyIcon from '../assets/icons/MoneyIcon';
import AddIcon from '../assets/icons/AddIcon';
import SettingIcon from '../assets/icons/SettingIcon';
import {tabStyle} from './style';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Category} from '../screens/Category';
import {Filter} from '../screens/Filter';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Account} from '../screens/Account';

// Botton Tab Navigation//
const Tab = createBottomTabNavigator();

const screenOptions = ({route}: any) => ({
  tabBarShowLabel: false,
  headerShown: false,
  tabBarIcon: () => {
    if (route.name === 'Home') {
      return <HomeIcon />;
    } else if (route.name === 'Summary') {
      return <MarketIcon />;
    } else if (route.name === 'AddExpense') {
      return <AddIcon />;
    } else if (route.name === 'Statistics') {
      return <MoneyIcon />;
    } else if (route.name === 'Setting') {
      return <SettingIcon />;
    }
  },
  tabBarStyle: tabStyle.tabStyle,
});

function TabScreen() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Landing} />
      <Tab.Screen name="Summary" component={Summary} />
      <Tab.Screen name="AddExpense" component={AddExpense} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

//Stack Navigation //
const Stack = createNativeStackNavigator();

function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabScreen"
        component={TabScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
}

//Drawer Navigation//
const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="StackGroup"
        component={StackGroup}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
}
