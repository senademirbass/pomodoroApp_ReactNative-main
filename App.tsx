import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Tabs/Home';
import Profile from './components/Tabs/Profile';
import Settings from './components/Tabs/Settings';
import Welcome from './components/Welcome';

const Tab = createBottomTabNavigator();

export default function Table() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Welcome' component={Welcome} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name='Settings' component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
