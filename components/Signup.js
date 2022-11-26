import React from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Pressable } from 'react-native';
import ToastManager, { Toast } from "toastify-react-native";

const Signup = ({navigation}) => {
  const showToast = () =>{
    Toast.success('please check your email to verify.','top');
  }
  return (
    <View>
      <View style={styles.toast}>
        <ToastManager style={{width:"100%",}} />
      </View>
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
          
          <View style={styles.bottomCont}>
            <TouchableOpacity style={styles.button} onPress={showToast}>
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
      bottomCont:{
        flexDirection:'row',
        alignItems:'center'
      },
      button:{
        backgroundColor:'green',
        width:'30%',
        paddingVertical:5,
        borderRadius:5,
        marginTop:15
      },
      signup:{
        color:'white',
        textAlign:'center'
      },
      login:{
        alignContent:'center',
        color:"blue",
        
      }
});