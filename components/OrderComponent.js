import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const OrderComponent = ({order}) => {
    console.log("products",order.products)
  return (
    <View style={styles.orderContainer}>
     
        <View style={styles.order}>
            <View style={styles.producCont}>
            {order.products.map(product => (
                <View style={styles.product}>
                    <Text>{product.title}</Text>
                    <Text style={styles.quantity}>{product.quantity}</Text>
                </View>
            ))}
            </View>
            <View style={styles.statusTotal}>
                <Text style={{color:'pink',fontWeight:'bold'}}>{order.status}</Text>
                <Text>{order.amount}$</Text>
            </View>

        </View>
    </View>
  )
}

export default OrderComponent;

const styles = StyleSheet.create({
    orderContainer:{
        marginVertical:5,
        width:'100%',
    },
    order:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
        borderBottomColor:'green',
        paddingBottom:5,
        marginTop:10,
        borderBottomWidth:1
    },
    producCont:{
        width:'55%'
    },
    product:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:3,
        alignItems:'center'
    },
    statusTotal:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'40%',
    },
    quantity:{
        alignSelf:"center",
        width:'30%',
        textAlign:'center'
    }
});