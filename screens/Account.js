import React,{useState} from 'react';
import { View, Text,StatusBar,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

import colors from '../colors';

const Account = ({navigation}) => {

  return (
    <View >
        <StatusBar
        barStyle='light-content'
        backgroundColor={colors.green}
        />
        <View style={styles.container}>
          <Text>SignUp</Text>
          <Text>Name</Text>
          <TextInput placeholder='name' />
          <Text>email</Text>
          <TextInput placeholder='name' />
          <Text>Password</Text>
          <TextInput placeholder='name' />
          <TouchableOpacity>
            <Text>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>login</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Account;


const styles = StyleSheet.create({
  container:{
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'pink',
    width:'95%',
  }
})