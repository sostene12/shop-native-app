import { View, Text,StyleSheet,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header';
import colors from '../../colors';
import OrderComponent from '../../components/OrderComponent';

const Orders = () => {
  const [orders,setOrders] = useState([]);
  const getAllOrders = async () =>{
    try {
      const res = await axios.get('https://electronic-shop.onrender.com/api/orders/allOrders');
      console.log("Orders",res.data);
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    getAllOrders();
  },[]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.ordersContainer}>
      <Text style={styles.title}>Orders</Text>
      <FlatList data={orders} keyExtractor={(item) => item._id} renderItem={({item}) => <OrderComponent order={item} />} />
      </View>
    </View>
  )
}

export default Orders;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  ordersContainer:{
    marginTop:10,
    paddingHorizontal:15
  },
  title:{
    color:colors.green,
    fontWeight:"bold",
    textTransform:'uppercase',
    paddingBottom:10
  }
});