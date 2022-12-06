import React, { useState } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {isFetching,error} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleLogin = () =>{
    const user = {
      username:email,
      password:password
    };
    login(dispatch,user);
  }
  return (
    <View style={styles.container}>
        <Image source={require("../assets/iconbg.png")} resizeMode='cover' style={styles.image} />
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
             onChangeText={(value) => setPassword(value)}
              />
          </View>
          <View style={styles.forgot}>
            <Text style={styles.textForgot}>Forgot Password</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
               <Text style={styles.Signup}>Signup</Text>
            </TouchableOpacity>
          </View>
         
    </View>
  )
}

export default Login;


const styles = StyleSheet.create({

  container:{
    flex:1,
    width:"80%",
    alignSelf:'center',
    justifyContent:'center'
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
        paddingVertical:5,
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
      }
     
});