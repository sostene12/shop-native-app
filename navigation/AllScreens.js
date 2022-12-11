import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// screens
import MainScreen from './MainScreen';
import Login from '../components/Login';
import Signup from '../components/Signup';
import SingleProduct from './screens/SingleProduct';
import Payment from './screens/Payment';



const Stack = createStackNavigator();

const AllScreens = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Main' component={MainScreen} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}} />
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
            <Stack.Screen name="Product" component={SingleProduct} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AllScreens;