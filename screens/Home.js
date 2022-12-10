import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { View ,SafeAreaView,StatusBar, StyleSheet,Platform,FlatList,ActivityIndicator} from 'react-native';
import LoaderKit from 'react-native-loader-kit';
// import { SafeAreaView } from 'react-navigation';

import colors from '../colors';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Search from '../components/Search';
import Product from "../components/Product";

// SafeAreaView.setStatusBarHeight(0);


const Home = ({navigation}) => {
  const [allProducts,setAllProducts] = useState([]);
  const [filterItems,setFilterItems] = useState([]);
  const [loading,setLoading] = useState(false);

  const getAllProducts = async () =>{
  
    try {
      setLoading(true);
      const res = await axios.get('https://electronic-shop.onrender.com/api/products');
      setAllProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
   
  }

  const filteredItems = (item) =>{
    const filtes = allProducts.filter(product => product.categories.includes(item));
    return !filtes.length? setFilterItems(allProducts) : setFilterItems(filtes) ;
  };

  const searchProduct = (item) =>{
    const search = allProducts.filter(product => product.title.toLowerCase().includes((item.toLowerCase())));
    return !search.length ? setFilterItems(allProducts) : setFilterItems(search);
  }

  useEffect(() =>{
    getAllProducts();
  },[filteredItems])
  return (
    <View>
        <StatusBar 
        barStyle='light-content'
        backgroundColor={colors.green}
          /> 
        <View >
        <Header />
        <Navigation filteredItems={filteredItems} />
        <Search searchProduct={searchProduct} />
       
        {/* {loading && <ActivityIndicator size="large" color="#00ff00" />} */}
          <View style={styles.products}>
          <FlatList data={ filterItems.length != 0 ? filterItems : allProducts} keyExtractor={(item) => item.id} renderItem={({item}) => (
            <Product item={item} navigation={navigation} />
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