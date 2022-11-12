import React,{useState} from 'react';
import { View, Text,StatusBar,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

import colors from '../colors';

const Account = ({navigation}) => {

  return (
    <View style={styles.main}>
        <StatusBar
        barStyle='light-content'
        backgroundColor={colors.green}
        />
        <View style={styles.container}>
          <Text style={styles.title}>SignUp</Text>
          <View>
            <Text>Name</Text>
            <TextInput style={styles.input} placeholder='name' />
          </View>
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
  main:{
    height:"100%",
    justifyContent:'center'
  },
  container:{
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'pink',
    width:'95%',
    paddingHorizontal:15,
    paddingVertical:10
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    borderBottomWidth:2,
    borderBottomColor:'green'
  },
  input:{
    paddingVertical:5,
    borderColor:'white',
    borderWidth:1,
    paddingHorizontal:5,
  }
})