import React from 'react';
import { StyleSheet, View } from 'react-native';
import FoodsList from './components/FoodList';
import Signup from './components/Signup';
import LoginUiComponent from './components/Welcome/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='LoginUiComponent' 
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name='LoginUiComponent' component={LoginUiComponent} />
        <Stack.Screen name='FoodsList' component={FoodsList} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Header />
    //   <LoginUiComponent />
    //   {/* <Home /> */}
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
