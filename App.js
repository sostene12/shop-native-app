import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import colors from './colors';

// redux
import store from './redux/store';

// Screens
import Home from './screens/Home';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Account from './screens/Account';
import SingleProduct from './screens/SingleProduct';

// components
import Login from './components/Login';
import Signup from './components/Signup';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route}) => ({
          tabBarIcon:({focused,color,size}) =>{
            let icon;
            let routeName=route.name;
          
            if(routeName=== 'Home'){
              icon= focused ? 'home':'home-outline';
              size=focused ? 32:30;
            }
            else if(routeName=== 'Cart'){
              icon= focused ? 'cart':'cart-outline';
              size=focused ? 32:30;
            } else if(routeName==='Account'){
              icon= focused ? 'person-circle':'person-circle-outline';
              size=focused ? 32:30;
            }
            else if(routeName === 'Orders'){
              icon = focused ? 'ios-basket':'ios-basket-outline';
              size=focused ? 32:30;
            }
            return <Ionicons name={icon} size={size} color={color}/>
          },
          headerShown:false,
          tabBarActiveTintColor:colors.white,
          tabBarInactiveTintColor:colors.black,
          tabBarShowLabel:false,
          tabBarStyle:{
            paddingBottom:15,
            padding:10,
            height:50,
            alignItems:'center',
            height:65,
            backgroundColor:colors.green
          }
        })}
        
        >
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Cart' component={Cart} />
          {/* <Tab.Screen name='Order' component={Orders} /> */}
          <Tab.Screen name='Account' component={Account} />
          <Tab.Screen name='Login' component={Login} />
          <Tab.Screen name='Signup' component={Signup} />
          <Tab.Screen name='Product' component={SingleProduct} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}