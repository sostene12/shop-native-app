import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import {PUBLISHABLE_KEY} from '@env';
import PaymentComponent from '../components/PaymentComponent';


const Payment = ({route}) => {

  return (
    <View>
      <Text>Payment</Text>
      <StripeProvider
      publishableKey={PUBLISHABLE_KEY}
      merchantIdentifier={`merchant.com.Native`}>
        <PaymentComponent />
      </StripeProvider>
    </View>
  )
}

export default Payment