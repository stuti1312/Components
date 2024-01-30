import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SoundImplementation from './src/components/SoundImplementation';
import Permissions from './src/components/Permissions';
import Animations from './src/components/Animations';
import ScreenA from './src/components/Screens/ScreenA';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Animations"
      >
        <Stack.Screen
          name="SoundImplementation"
          component={SoundImplementation}
        />
        <Stack.Screen name="Permissions" component={Permissions} />
        <Stack.Screen name="Animations" component={Animations} />
        <Stack.Screen name="ScreenA" component={ScreenA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
