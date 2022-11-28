import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar,SafeAreaView,Image } from 'react-native';
import { Constants } from 'expo-constants';

import { useSelector } from 'react-redux';
// const height = Constants.statusBarHeight;
// console.log(height);


const Cart = () => {
  console.log(StatusBar.currentHeight)
  const cart = useSelector(state => state.cart);
  console.log(cart.products)
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar
        barStyle='dark-content'
        backgroundColor='green'
         />
        <Text>Cart</Text>
        <View style={styles.product}>
          {cart.products.map(product => (
            <View>
            <Image source={{uri:product.image}} resizeMode="contain"  />
            <Text>{product.title}</Text>
            </View>
          ))}
         <Text> {cart.total}</Text>
         <Text> {cart.quantity}</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10
  },
  product:{
    // flexDirection:'row',
    backgroundColor:"blue"
  }
})