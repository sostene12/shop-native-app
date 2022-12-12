import React,{useState} from 'react';
import { View, Text,TextInput,Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useStripe } from '@stripe/stripe-react-native';

const PaymentComponent = ({total,products}) => {
    const [name,setName] = useState('');
    const [amount] = useState(total);
    const {initPaymentSheet,presentPaymentSheet} = useStripe();

    const subscribe = async () =>{
        try {
            const res = await axios.post("https://electronic-shop.onrender.com/api/checkout/stripePay",{name,amount});
            const data = await res.data;
            const { clientSecret } = data;
            console.log(clientSecret)
            const initSheet = await initPaymentSheet({
                merchantDisplayName: "Electronic Shop.",
                paymentIntentClientSecret:clientSecret,
                defaultBillingDetails: {
                    name: 'Jane Doe',
                  }
            });
            if(initSheet.error) return Alert.alert(initSheet.error.message);
            const openPaymentSheet = await presentPaymentSheet({clientSecret});
            if(openPaymentSheet.error) return Alert.alert(openPaymentSheet.error.message);
            const order = await axios.post("https://electronic-shop.onrender.com/api/orders/create",
            {
                products:products,
                amount:amount
            }
            );
            const ordersData = order.data;
            console.log(ordersData)
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <View>
        <TextInput 
        placeholder='Your Name' 
        value={name} 
        onChangeText={(value) => setName(value)}
        style={styles.TextInput}
         />
         <Button title="Checkout" variant="primary" onPress={subscribe} />
    </View>
  )
}

export default PaymentComponent;

const styles = StyleSheet.create({
    TextInput:{
        width:300,
        fontSize:20,
        padding:6,
        borderWidth:1,
        borderColor:'green',
        marginBottom:10,
        borderRadius:5
    }
});