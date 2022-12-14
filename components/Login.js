import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image,ScrollView,KeyboardAvoidingView, ActivityIndicator, SafeAreaView } from 'react-native';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from '../colors';
import { Token } from '@stripe/stripe-react-native';

const Login = () =>  {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {isFetching,error} = useSelector(state => state.user);
  const [Loading,setLoading] = useState(false)
  const dispatch = useDispatch();

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [myEmail,setMyEmail] = useState('');
  const [token,setToken] = useState('');

  const handleLogin = async () =>{
    const user = {
      username:email,
      password:password
    };
   try {
    setLoading(true);
    const res = await axios.post('https://electronic-shop.onrender.com/api/auth/login',user);
    console.log(res.data);
    const {firstName,accessToken,lastName,email} = res.data;
    await AsyncStorage.setItem('name',firstName);
    await AsyncStorage.setItem('namelast',lastName);
    await AsyncStorage.setItem('email',email);
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

  const getData =  async () => {
   const token = await AsyncStorage.getItem('token');
   setToken(token)
   const firstName = await AsyncStorage.getItem('name');
   setFirstName(firstName)
   const lastName = await AsyncStorage.getItem('namelast');
   setLastName(lastName)
   const myEmail = await AsyncStorage.getItem('email');
   setMyEmail(myEmail)
  }


  useEffect(() =>{
    getData();
  },[isFocused]);

  console.log("token",token)

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS=='ios'?'padding':null}>
      {
        token !=null ? (
          <SafeAreaView>
        <View style={styles.profile}>
          <View >
            <Text>Your Profile</Text>
          </View>
          <View>
            <Text>{lastName}</Text>
            <Text>{firstName}</Text>
            <Text>{email}</Text>

          </View>
        </View>
        </SafeAreaView>
        ) :(
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
        )
      }
   
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
      },
      profile:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:"red",
        marginVertical:50,
        width:"90%",
        alignSelf:'center'
      }
     
});