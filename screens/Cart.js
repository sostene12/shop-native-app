import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar,SafeAreaView,Image,TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import colors from '../colors';


const Cart = ({navigation}) => {
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
        <Text style={styles.cartTitle}>Cart</Text>
        {!cart.length ? <View ><Text style={styles.noCart}>There is No items in the cart!</Text></View> : (
          <>
          <View >
          {cart.map(product => (
            <View style={styles.product}>
              <Image source={{uri:product.image}} resizeMode="contain" style={{width:50,height:50}} />
              <Text>{product.title}</Text>
              <Text>${product.price}</Text>
               <Text> {product.quantity}</Text>
              <Text> $ {product.total}</Text>
            </View>
          ))}
        
        </View>
          <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate('Payment')}>
            <Text>Pay Now</Text>
          </TouchableOpacity>
          </>
        ) }
        
      </SafeAreaView>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  noCart:{
    textAlign:'center',
    padding:20,
    fontWeight:"bold"
  },
  container:{
    paddingHorizontal:25,
    paddingVertical:20,
    flex:1
  },
  cartTitle:{
    fontWeight:'bold',
    fontSize:20,
    color:colors.green,
    borderBottomWidth:2,
    borderBottomColor:colors.green
  },
  product:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between'
  },
  payBtn:{
    backgroundColor:colors.green,
    marginVertical:30,
    width:'60%',
    alignSelf:'center',
    alignItems:'center',
    paddingVertical:10,
    borderRadius:8,
  }
})