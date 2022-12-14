import { View, Text,StyleSheet,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header';
import colors from '../../colors';
import OrderComponent from '../../components/OrderComponent';
import { useSelector } from 'react-redux';

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
      <View style={styles.titleContainer}>
            <View style={styles.firstContainer}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Title</Text>
                <Text style={{fontWeight:'bold',fontSize:18}}>quantity</Text>
            </View>
            <View style={styles.secondContainer}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Status</Text>
                <Text style={{fontWeight:'bold',fontSize:18}} >Total</Text>
            </View>
        </View>
        {orders.length > 0 ? (
          <FlatList data={orders} keyExtractor={(item) => item._id} renderItem={({item}) => <OrderComponent order={item} />} />
        ):<View style={styles.noOrder}>
            <Text style={styles.orderText}>You have No Orders Yet</Text>
          </View>}
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
  },
  titleContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:"100%",
},
firstContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:"55%"
},
secondContainer:{
  flexDirection:'row',
  paddingBottom:5,
  width:'40%',
  justifyContent:'space-between'
},
noOrder:{
  padding:10,
  marginTop:10
},
orderText:{
  fontWeight:'bold',
  fontSize:20
}
});