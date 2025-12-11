// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NotesScreen from './screens/NotesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import UserSettings from './screens/UserSettings';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Notes"
          component={NotesScreen}
          options={{ title: 'My Notes' }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ title: 'Favorites' }}
        />
        <Tab.Screen
          name="Settings"
          component={UserSettings}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
