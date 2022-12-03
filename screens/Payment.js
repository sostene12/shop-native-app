import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import {PUBLISHABLE_KEY} from '@env';
import axios from 'axios';

const Payment = ({route}) => {
    const [name,setName] = useState('');
    const [amount,setAmount] = useState(400);
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
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
   
    <View>
      <Text>Payment</Text>
      <StripeProvider
      publishableKey={PUBLISHABLE_KEY}
      merchantIdentifier={`merchant.com.Native`}
      >
        <TextInput 
        placeholder='Your Name' 
        value={name} 
        onChangeText={(value) => setName(value)}
        style={{
            width:300,
            fontSize:20,
            padding:10,
            borderWidth:1,
            borderColor:'green'
        }}
         />
         <Button title="Checkout" variant="primary" onPress={subscribe} />
      </StripeProvider>
    </View>
  )
}

export default Payment