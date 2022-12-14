import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const OrderComponent = ({order}) => {
    console.log("products",order.products)
  return (
    <View style={styles.orderContainer}>
        <View style={styles.order}>
            {order.products.map(product => (
                <View>
                    <Text>{product.title}</Text>
                    <Text>{product.quantity}</Text>
                </View>
            ))}
            <Text>{order.amount}</Text>
            <Text>{order.status}</Text>

        </View>
    </View>
  )
}

export default OrderComponent;

const styles = StyleSheet.create({
    orderContainer:{
        marginVertical:5
    },
    order:{
        // flexDirection:'row',
        // justifyContent:'space-between'
    }
});