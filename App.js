import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home/Home';
import Crear from './components/Crear/Crear';
import Persona from './components/Persona/Persona';
import Editar from './components/Editar/Editar'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Persona" component={Persona} options={{title: false, headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{title: false, headerShown:false}} />
        <Stack.Screen name="Crear" component={Crear} options={{title: false, headerShown:false}} />
        <Stack.Screen name="Editar" component={Editar} options={{title: false, headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
