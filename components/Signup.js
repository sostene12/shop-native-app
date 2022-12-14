import axios from 'axios';
import React, { useState } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image,KeyboardAvoidingView,ScrollView,Platform, ActivityIndicator } from 'react-native';
import ToastManager, { Toast } from "toastify-react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from '../colors';

const Signup = () => {
  const navigation = useNavigation()
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [Loading,setLoading] = useState(false);

const role = "client"
const data = {firstName,lastName,email,password,role}

const register = async() =>{
  try {
    setLoading(true);
    const res = await axios.post('https://electronic-shop.onrender.com/api/auth/signup',data);
    console.log(res.data);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setLoading(false);
    showToast();
    navigation.navigate("Signup");
  } catch (error) {
    console.log(error.message);
    setLoading(false)
  }
};

  const showToast = () =>{
    Toast.success('please check your email to verify.','top');
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.toast}>
        <ToastManager style={{width:"100%",}} />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{alignSelf:'flex-start'}}>
          <Ionicons name='chevron-back-circle-sharp' size={30}  color={colors.green} />
        </TouchableOpacity>
      <Image source={require("../assets/iconbg.png")} resizeMode='cover' style={styles.image} />
      <KeyboardAvoidingView behavior={Platform.OS=='ios'?'padding':null}>
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
              <Text style={styles.signup}>{Loading ? <ActivityIndicator size='small' /> : 'Signup'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
    </View>
    </ScrollView>
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
    justifyContent:'center',
    alignItems:"center",
    marginTop:100
  },
  image:{
    width:80,
    height:80,
    alignSelf:'center'
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
        paddingVertical:Platform.OS=='ios'?10:4,
        borderColor:'green',
        borderWidth:1,
        paddingHorizontal:8,
        width:Platform.OS=='ios'?300:'100%'
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