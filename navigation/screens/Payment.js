import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert,StyleSheet } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import {PUBLISHABLE_KEY} from '@env';
import PaymentComponent from '../../components/PaymentComponent';


const Payment = ({route}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <StripeProvider
      publishableKey={PUBLISHABLE_KEY}
      merchantIdentifier={`merchant.com.Native`}>
        <PaymentComponent />
      </StripeProvider>
    </View>
  )
}

export default Payment;


const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:10
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    paddingBottom:5,
    textAlign:"center",
  }
});