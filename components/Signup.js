import axios from 'axios';
import React, { useState } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import ToastManager, { Toast } from "toastify-react-native";
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation()
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const role = "client"
const data = {firstName,lastName,email,password,role}

const register = async() =>{
  try {
    const res = await axios.post('https://electronic-shop.onrender.com/api/auth/signup',data);
    console.log(res.data);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  } catch (error) {
    console.log(error);
  }
};

  const showToast = () =>{
    Toast.success('please check your email to verify.','top');
  }
  return (
    <View style={styles.container}>
      <View style={styles.toast}>
        <ToastManager style={{width:"100%",}} />
      </View>
      <Text style={styles.title}>SignUp</Text>
          <View>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} 
            placeholder='First Name'
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
             />
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input} 
            placeholder='Last Name'
            value={lastName}
            onChangeText={(value) => setLastName(value)}
             />
          </View>
          <View>
            <Text style={styles.label}>email</Text>
            <TextInput style={styles.input}  
            placeholder='Email'
            value={email}
            onChangeText={(value) => setEmail(value)}
             />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} 
            placeholder='Password'
            value={password}
            onChangeText={(value) => setPassword(value)}
             />
          </View>
          
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.signupButton} onPress={() => register()}>
              <Text style={styles.signup}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}

export default Signup;


const styles = StyleSheet.create({
  // toast:{
  //   position:"relative",
  //   top:10,
  //   left:0
  // },
  container:{
    flex:1,
    width:"80%",
    alignSelf:'center',
    justifyContent:'center'
  },
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
      },
      buttons:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
      },
      signupButton:{
        backgroundColor:'green',
        paddingVertical:5,
        paddingHorizontal:35,
        borderRadius:8
      },
      signup:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
      },
      login:{
        paddingHorizontal:10,
        fontWeight:'bold',
        color:'blue',
        textDecorationLine:'underline',
      }
});