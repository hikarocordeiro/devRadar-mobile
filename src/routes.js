import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#7d40E7'},
          headerTintColor: '#FFF',
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'DevRadar'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Perfil no Github'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
