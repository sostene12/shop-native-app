import React from 'react';
import { View,StatusBar,StyleSheet } from 'react-native';

import Login from '../components/Login';
import colors from '../colors';

const Account = () => {
  return (
    <View style={styles.main}>
        <StatusBar
        barStyle='light-content'
        backgroundColor={colors.green}
        />
          <Login />
    </View>
  )
}

export default Account;


const styles = StyleSheet.create({
  main:{
    height:"100%",
    justifyContent:'center'
  }
})