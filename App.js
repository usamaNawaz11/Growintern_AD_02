import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import News from './Project/News';
import Detail from './Project/Detail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="news" component={News} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;