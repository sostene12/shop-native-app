import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { View, Text ,StatusBar, StyleSheet,Platform} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import colors from '../colors';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Search from '../components/Search';

SafeAreaView.setStatusBarHeight(0);


const Home = () => {
  const [allProducts,setAllProducts] = useState([]);

  const getAllProducts = async () =>{
    try {
      const res = await axios.get('https://electronic-backend-ji2zaqxur-sostene12.vercel.app/api/products');
      console.log(res.data);
      setAllProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    getAllProducts();
  },[])
  return (
    <View>
        <StatusBar hidden={true} /> 
        <View >
        <Header />
        <Navigation />
        <Search />
            <Text>This is the change Test</Text>
        </View>
    </View>
  )
}

export default Home;
