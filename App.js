import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import colors from './colors';

// Screens
import Home from './screens/Home';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Account from './screens/Account';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
          padding:5,
          height:50,
          backgroundColor:colors.green
        }
      })}
      
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Cart' component={Cart} />
        {/* <Tab.Screen name='Order' component={Orders} /> */}
        <Tab.Screen name='Account' component={Account} />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}