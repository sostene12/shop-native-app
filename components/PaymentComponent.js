import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { useStripe } from '@stripe/stripe-react-native';

const PaymentComponent = () => {
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
    </View>
  )
}

export default PaymentComponent