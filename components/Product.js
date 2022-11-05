import React from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../colors';

const Product = ({item}) => {
  return (
    <View key={item.id} style={styles.productContainer}>
      <Image source={{uri:item.image}} style={styles.image} />
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Add to cart</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Product;

const styles = StyleSheet.create({
    productContainer:{
        width:'100%',
        backgroundColor:colors.white,
        marginVertical:3,
        borderRadius:8,
        padding:10
    },
    image:{
        width: '50%',
         height: 180 ,
         alignSelf:'center'
    },
    button:{
        backgroundColor:colors.green,
        width:'35%',
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius:5,
        alignSelf:'flex-end',
        marginVertical:5
    }
})