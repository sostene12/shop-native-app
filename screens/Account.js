import React,{useState} from 'react';
import { View, Text,StatusBar,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

import Login from '../components/Login';
import Signup from '../components/Signup';

import colors from '../colors';


// const Tab = createMaterialTopTabNavigator();

const Account = ({navigation}) => {

  return (
    <View style={styles.main}>
        <StatusBar
        barStyle='light-content'
        backgroundColor={colors.green}
        />
        <View style={styles.container}>
          <Signup />
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
    width:'95%',
    paddingHorizontal:15,
    paddingVertical:10
  }
})