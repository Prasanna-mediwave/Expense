import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Landing} from '../screens/Landing/Landing';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Summary} from '../screens/Summary/Summary';
import {AddExpense} from '../screens/AddExpense/AddExpense';
import {Statistics} from '../screens/Statistics/Statistics';
import {Setting} from '../screens/Settingpage/Setting';
import HomeIcon from '../assets/icons/HomeIcon';
import MarketIcon from '../assets/icons/MarketIcon';
import MoneyIcon from '../assets/icons/MoneyIcon';
import AddIcon from '../assets/icons/AddIcon';
import SettingIcon from '../assets/icons/SettingIcon';
import {tabStyle} from './style';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Category} from '../screens/ModulerScreen/Category/Category';
import {Filter} from '../screens/ModulerScreen/Filter/Filter';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Account} from '../screens/Account/Account';
import {View} from 'react-native';
import {color} from '../styles/commonStyle';

// Botton Tab Navigation//
const Tab = createBottomTabNavigator();

const screenOptions = ({route}: any) => ({
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarIcon: ({focused}: any) => {
    if (route.name === 'Home') {
      return (
        <View style={focused ? tabStyle.selectedBtn : undefined}>
          <View>
            {focused ? (
              <HomeIcon fillColor={color.primaryHeader} />
            ) : (
              <HomeIcon />
            )}
          </View>
        </View>
      );
    } else if (route.name === 'Summary') {
      return (
        <View style={focused ? tabStyle.selectedBtn : undefined}>
          <View>
            {focused ? (
              <MarketIcon fillColor={color.primaryHeader} />
            ) : (
              <MarketIcon />
            )}
          </View>
        </View>
      );
    } else if (route.name === 'AddExpense') {
      return (
        <View style={tabStyle.addContainer}>
          <View
            style={focused ? [tabStyle.addBtn, tabStyle.add] : tabStyle.addBtn}>
            <AddIcon />
          </View>
        </View>
      );
    } else if (route.name === 'Statistics') {
      return (
        <View style={focused ? tabStyle.selectedBtn : undefined}>
          <View>
            {focused ? (
              <MoneyIcon fillColor={color.primaryHeader} />
            ) : (
              <MoneyIcon />
            )}
          </View>
        </View>
      );
    } else if (route.name === 'Setting') {
      return (
        <View style={focused ? tabStyle.selectedBtn : undefined}>
          <View>
            {focused ? (
              <SettingIcon fillColor={color.primaryHeader} />
            ) : (
              <SettingIcon />
            )}
          </View>
        </View>
      );
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
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          animation: 'slide_from_bottom',
          headerShown: false,
          presentation: 'containedTransparentModal',
        }}
      />
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
