import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/main';
import Product from './pages/product';

function App() {
  return (
    <Stack.Navigator
      initialRouteName="JSHunt"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="JSHunt" component={Main} />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({route}) => ({title: route.params.product.title})}
      />
    </Stack.Navigator>
  );
}

export default App;
