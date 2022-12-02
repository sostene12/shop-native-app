import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from 'react-redux';

import colors from "../colors";

// Screens
import Home from "./Home";
import Cart from "./Cart";
import Orders from "./Orders";
import Account from "./Account";
import SingleProduct from "./SingleProduct";

// components
import Login from "../components/Login";
import Signup from "../components/Signup";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
      const cart = useSelector(state=> state.cart.length);
      console.log(cart)
    const badgeCount = cart;
  return (
    <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              let routeName = route.name;

              if (routeName === "Home") {
                icon = focused ? "home" : "home-outline";
                size = focused ? 32 : 30;
              } else if (routeName === "Cart") {
                icon = focused ? "cart" : "cart-outline";
                size = focused ? 32 : 30;
              } else if (routeName === "Account") {
                icon = focused ? "person-circle" : "person-circle-outline";
                size = focused ? 32 : 30;
              } else if (routeName === "Orders") {
                icon = focused ? "ios-basket" : "ios-basket-outline";
                size = focused ? 32 : 30;
              }
              return (
                <View>
                  <Ionicons name={icon} size={size} color={color} />
                  {badgeCount && routeName === "Cart"? (
                    <View
                      style={styles.badgeContainer}
                    >
                      <Text
                        style={styles.badgeLabel}>{badgeCount}</Text>
                    </View>
                  ) : ''}
                </View>
              );
            },
            headerShown: false,
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.black,
            tabBarShowLabel: false,
            tabBarStyle: {
              paddingBottom: 15,
              padding: 10,
              height: 50,
              alignItems: "center",
              height: 65,
              backgroundColor: colors.green,
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cart" component={Cart} />
          {/* <Tab.Screen name='Order' component={Orders} /> */}
          <Tab.Screen name="Account" component={Account} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Signup" component={Signup} />
          <Tab.Screen name="Product" component={SingleProduct} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default MainScreen;


const styles = StyleSheet.create({
    badgeContainer:{
      position: "absolute",
      right: -5,
      top: -1,
      backgroundColor: colors.black,
      borderRadius: 6,
      width: 14,
      height: 14,
      justifyContent: "center",
      alignItems: "center"
    },
    badgeLabel:{
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
    }
  })