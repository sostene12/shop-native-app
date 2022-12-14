import React, { useState } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image,ScrollView,KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from '../colors';

const Login = () =>  {
  const navigation = useNavigation();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {isFetching,error} = useSelector(state => state.user);
  const [Loading,setLoading] = useState(false)
  const dispatch = useDispatch();
  const handleLogin = async () =>{
    const user = {
      username:email,
      password:password
    };
   try {
    setLoading(true);
    const res = await axios.post('https://electronic-shop.onrender.com/api/auth/login',user);
    const {firstName,accessToken} = res.data;
    await AsyncStorage.setItem('name',firstName);
    await AsyncStorage.setItem('token',accessToken);
    setEmail(''),
    setPassword('');
    setLoading(false);
    navigation.navigate("Home");
   } catch (error) {
    console.log(error);
    setLoading(false)
   }
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS=='ios'?'padding':null}>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={{alignSelf:'flex-start'}}>
          <Ionicons name='chevron-back-circle-sharp' size={30}  color={colors.green} />
        </TouchableOpacity>
        <Image source={require("../assets/iconbg.png")} resizeMode='cover' style={styles.image} />
        {error && 
        <View style={styles.errorContainer}>
        <Text style={styles.error}>Invalid Credetials</Text>
      </View>
        }
      <Text style={styles.title}>Login</Text>
          <View>
            <Text style={styles.label}>email</Text>
            <TextInput 
            style={styles.input} 
             placeholder='Eamil' 
             value={email}
             onChangeText={(value) => setEmail(value)}
             />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput 
            style={styles.input}
             placeholder='Password'
             value={password}
             secureTextEntry={true}
             onChangeText={(value) => setPassword(value)}
              />
          </View>
          <View style={styles.forgot}>
            <Text style={styles.textForgot}>Forgot Password</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
              <Text style={styles.login}>{Loading ? <ActivityIndicator size='small' /> :"Login" }</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
               <Text style={styles.Signup}>Signup</Text>
            </TouchableOpacity>
          </View>
         
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Login;


const styles = StyleSheet.create({

  container:{
    flex:1,
    width:"80%",
    alignSelf:'center',
    justifyContent:'center',
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
        paddingVertical:4,
        borderColor:'green',
        borderWidth:1,
        paddingHorizontal:8,
      },
      forgot:{
        paddingVertical:5
      },
      textForgot:{
        textDecorationStyle:'solid',
        textDecorationLine:'underline',
        color:'blue',
      },
      buttons:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
      },
      loginButton:{
        backgroundColor:'green',
        paddingVertical:8,
        paddingHorizontal:35,
        borderRadius:8
      },
      login:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
      },
      Signup:{
        paddingHorizontal:10,
        fontWeight:'bold',
        color:'blue',
        textDecorationLine:'underline',
      },
      errorContainer:{
        backgroundColor:'pink',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:8
      },
      error:{
        color:"white",
        textAlign:'center',
        fontWeight:'bold'
      }
     
});