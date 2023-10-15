import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BlogScreen from './blog'; // Import the Blog.js screen

const Stack = createStackNavigator();

function BlogNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={{ title: 'Blog' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default BlogNav;
