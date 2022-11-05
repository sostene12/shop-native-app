import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { View, Text ,StatusBar, StyleSheet,Platform,FlatList} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import colors from '../colors';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Search from '../components/Search';
import Product from "../components/Product";

SafeAreaView.setStatusBarHeight(0);


const Home = () => {
  const [allProducts,setAllProducts] = useState([]);
  const [filteredItems,setFilteredItems] = useState([]);

  const getAllProducts = async () =>{
    try {
      const res = await axios.get('https://electronic-backend-ji2zaqxur-sostene12.vercel.app/api/products');
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
        <View style={styles.products}>
          <FlatList data={allProducts} keyExtractor={(item) => item.id} renderItem={({item}) => (
            <Product item={item} />
          )} />
        </View>
        </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  products:{
    marginHorizontal:10,
    marginVertical:15
  }
});