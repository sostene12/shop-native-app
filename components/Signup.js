import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <View>
      <Text style={styles.title}>SignUp</Text>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder='name' />
          </View>
          <View>
            <Text style={styles.label}>email</Text>
            <TextInput style={styles.input}  placeholder='name' />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder='name' />
          </View>
          
          <TouchableOpacity>
            <Text>Signup</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Signup;


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