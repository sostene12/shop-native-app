import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar,SafeAreaView,Image } from 'react-native';
import { Constants } from 'expo-constants';

import { useSelector } from 'react-redux';
// const height = Constants.statusBarHeight;
// console.log(height);


const Cart = () => {
  // console.log(StatusBar.currentHeight)
  const cart = useSelector(state=> state.cart);
  console.log(cart)
  console.log(cart.length);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar
        barStyle='dark-content'
        backgroundColor='green'
         />
        <Text>Cart</Text>
        <View style={styles.product}>
          {cart.map(product => (
            <View>
            <Image source={{uri:product.image}} resizeMode="contain" style={{width:50,height:50}} />
            <Text>{product.title}</Text>
            <Text> {product.total}</Text>
             <Text> {product.quantity}</Text>
            </View>
          
          ))}
        
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
    flexDirection:'row',
  }
})