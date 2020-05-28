import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/Main';

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="JSHunt" component={Main} />
    </Stack.Navigator>
  );
}

export default App;
