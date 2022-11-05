import React from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../colors';
import Ionicons from "react-native-vector-icons/Ionicons";

const Product = ({item}) => {
  return (
    <View key={item.id} style={styles.productContainer}>
      <Image source={{uri:item.image}} style={styles.image} />
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.categories[0]}</Text>
      <View>
        <Text>
            Ratings: 
            <Ionicons name='star-outline' color='yellow' />
            <Ionicons name='star-outline' color='yellow' />
            <Ionicons name='star-outline' color='yellow' />
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:colors.white}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
     
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
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center'
    }
})