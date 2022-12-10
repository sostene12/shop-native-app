import React,{useEffect, useState} from 'react';
import { View, Text,ActivityIndicator,StatusBar,StyleSheet,TouchableOpacity,Image } from 'react-native';
import axios from 'axios';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cart/cartSlice';

import colors from '../../colors';
import { useNavigation } from '@react-navigation/native';

const SingleProduct = ({route}) => {
  const navigation = useNavigation();
  const id = route.params.id;
  console.log(id);
  const dispatch = useDispatch();
  const [product,setProduct] = useState({});
  const [loading,setLoading] = useState(false);
  const [quantity] = useState(1);

  const getProduct = async () =>{
    try {
      setLoading(true)
      const res = await axios.get(`https://electronic-shop.onrender.com/api/products/${id}`);
      setProduct(res.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const addToCart = (product) =>{
    // let quantity = quantity;
    let total = product.price * quantity
    let newProduct = {...product,quantity,total}
    dispatch(addProduct(newProduct));
    console.log("product added");
    navigation.navigate('Main');

  }

  useEffect(() =>{
    getProduct();
  },[])

  return (
    <View style={styles.container}>
       <StatusBar
        hidden
        />
        {loading ? <ActivityIndicator size="large" color="#00ff00" /> : 
        <>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle-sharp' size={30}  color={colors.green} />
        </TouchableOpacity>
        <Image source={{uri:product?.image}} style={styles.image}  />
        <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(product)} >
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity></>}
    </View>
  )
}

export default SingleProduct;

const styles = StyleSheet.create({
  container:{
    padding:30,
    backgroundColor:colors.white,
    flex:1
  },
  image:{
    width:"100%",
    height:300
  },
  title:{
    fontWeight:'bold',
    paddingVertical:10
  },
  button:{
    backgroundColor:colors.green,
    paddingVertical:5,
    width:"60%",
    alignSelf:"center",
    borderRadius:10,
    marginTop:20
  },
  btnText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
  }
})