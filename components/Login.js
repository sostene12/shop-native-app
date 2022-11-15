import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      <Text style={styles.title}>Login</Text>
          <View>
            <Text style={styles.label}>email</Text>
            <TextInput style={styles.input}  placeholder='name' />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder='name' />
          </View>
          
          <TouchableOpacity>
            <Text>login</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Login;


const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        borderBottomWidth:2,
        borderBottomColor:'green'
      },
      label:{
        fontSize:15,
        paddingVertical:3
      },
      input:{
        paddingVertical:4,
        borderColor:'green',
        borderWidth:1,
        paddingHorizontal:8,
      }
});