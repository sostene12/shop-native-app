import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const SingleProduct = ({route}) => {
  const id = route.params.id;
  console.log(id);

  const getProduct = async () =>{
    try {
      const product = await fetch(`https://electronic-backend-ji2zaqxur-sostene12.vercel.app/api/products/singleProduct/${id}`);
      console.log(product)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    getProduct();
  },[])

  return (
    <View>
      <Text>singleProduct</Text>
    </View>
  )
}

export default SingleProduct