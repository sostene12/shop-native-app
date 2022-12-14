import React,{useEffect, useState} from 'react';
import { View, Text,TextInput,Button, StyleSheet ,TouchableOpacity, AsyncStorage} from 'react-native';
import axios from 'axios';
import { useStripe } from '@stripe/stripe-react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from '../colors';
import { useNavigation,useIsFocused } from '@react-navigation/native';

const PaymentComponent = ({total,products}) => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
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
    };

    const getName = async () =>{
        const name = await AsyncStorage.getItem('name');
        setName(name);
    }

    useEffect(() =>{
        getName();
    },[isFocused])

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} >
               <Ionicons name='chevron-back-circle-sharp' size={30}  color={colors.green} />
             </TouchableOpacity>
        <TextInput 
        placeholder='Your Name' 
        value={name} 
        onChangeText={(value) => setName(value)}
        style={styles.TextInput}
         />
         <TouchableOpacity onPress={() => subscribe()} style={styles.payButton}>
            <Text style={styles.payText}>Checkout</Text>
         </TouchableOpacity>
    </View>
  )
}

export default PaymentComponent;

const styles = StyleSheet.create({
    container:{
        marginTop:30,
    },
    backButton:{
        alignSelf:'flex-start',
        marginBottom:20
    },
    TextInput:{
        width:300,
        fontSize:20,
        padding:6,
        borderWidth:1,
        borderColor:'green',
        marginBottom:10,
        borderRadius:5,
        alignSelf:'center'
    },
    payButton:{
        backgroundColor:colors.green,
        paddingVertical:10,
        width:"50%",
        alignSelf:'center',
    },
    payText:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:colors.white,
        textTransform:'uppercase'
    }
});