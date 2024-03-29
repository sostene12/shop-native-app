import React, { useState } from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../colors';
import Ionicons from "react-native-vector-icons/Ionicons";
// redux
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/cart/cartSlice';

const Product = ({item,navigation}) => {
  const dispatch = useDispatch();

  // console.log(item);

  const cart = useSelector(state => state.cart);

  // const addToCart = (product) =>{
  //   dispatch(addProduct({...product}));
  //   console.log("product added");
  // }

  return (
    <View key={item.id} style={styles.productContainer}  >
      <TouchableOpacity onPress={() => navigation.navigate('Product',{id:item._id})}>
         <Image source={{uri:item.image}} style={styles.image}  />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.name}>${item.price}</Text>
      </View>
      <View>
        <Text>
            Ratings: 
            <Ionicons name='star-outline' color='yellow' />
            <Ionicons name='star-outline' color='yellow' />
            <Ionicons name='star-outline' color='yellow' />
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => dispatch(addProduct(item))}>
          <Text style={{color:colors.white}}>addToCart</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  )
};

export default Product;

const styles = StyleSheet.create({
    productContainer:{
        width:'100%',
        backgroundColor:"#B6CFB5",
        marginVertical:3,
        borderRadius:8,
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:12,
    },
    image:{
        width: '50%',
         height: 180 ,
         alignSelf:'center'
    },
    title:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingBottom:5
    },
    name:{
      fontWeight:'bold'
    },
    button:{
        backgroundColor:colors.green,
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius:5,
        alignSelf:'flex-end',
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center'
    }
})