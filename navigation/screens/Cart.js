import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar,SafeAreaView,Image,TouchableOpacity, FlatList } from 'react-native';

import { useSelector } from 'react-redux';
import colors from '../../colors';

import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';


const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector(state=> state.cart);
  const [qty,setQty] = useState(cart.quantity);
  console.log(cart);

  const calculateTotal = cart.reduce((accumulator,product) => accumulator+product.quantity* product.price,0);
  console.log("calculateTotal",calculateTotal);

  return (
    <View style={styles.mainContainer}>
        <StatusBar
        barStyle='dark-content'
        backgroundColor='green'
        />
         <Header />
         <View style={styles.container}>
        {/* <SafeAreaView> */}
        <Text style={styles.cartTitle}>Cart</Text>
        {!cart.length ? <View ><Text style={styles.noCart}>There is No items in the cart!</Text></View> : (
          <>
          <View >
            <View style={styles.productsTitle}>
              <Text style={{fontWeight:'bold'}}>Img</Text>
              <Text style={{fontWeight:'bold'}}>Name</Text>
              <Text style={{fontWeight:'bold'}}>Price</Text>
            </View>
            <FlatList data={cart} keyExtractor={(item) => item.id} renderItem={({item}) => (
              <CartItem product={item} />
            )} />

          <View style={styles.total}>
            <Text style={{fontWeight:"bold"}}>Total:</Text>
            <Text style={{fontWeight:"bold"}}>{calculateTotal}$</Text>
          </View>
        
        </View>
          <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate('Payment',{total:calculateTotal,cart:cart})}>
            <Text>Pay Now</Text>
          </TouchableOpacity>
          </>
        ) }
        
      {/* </SafeAreaView> */}
      </View>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  noCart:{
    textAlign:'center',
    padding:20,
    fontWeight:"bold"
  },
  container:{
    paddingHorizontal:15,
    paddingVertical:20,
    flex:1,
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
    justifyContent:'space-between',
    
  },
  payBtn:{
    backgroundColor:colors.green,
    marginVertical:30,
    width:'60%',
    alignSelf:'center',
    alignItems:'center',
    paddingVertical:10,
    borderRadius:8,
  },
  productsTitle:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:5
  },
  total:{
    flexDirection:'row',
    justifyContent:"space-between"
  },
  quantity:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"80%",
    alignSelf:"center"
  },
  qtyValue:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-around',
    width:"50%"
  },
  icon:{
    color:"white",
    backgroundColor:"green",
    borderRadius:30
  }
})