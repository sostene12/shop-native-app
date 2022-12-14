import { View, Text, StyleSheet,Image,Platform,StatusBar,AsyncStorage } from 'react-native';
import React,{useState,useEffect} from 'react';

import colors from '../colors';
import { useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(state => state.user.currentUser);
    const [name,setName] = useState('');
    const getName = async () =>{
      try {
        const name = await AsyncStorage.getItem('name');
        console.log(name);
        setName(name);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() =>{
        getName();
    },[]);
  
  return (
    <View style={styles.container}> 
        <View>
            <Image source={require("../assets/logo.png")} resizeMode='cover' />
            <Text style={styles.title}>Hi 👋, Welcome to our shop 🥰</Text>
        </View>
        <View style={styles.profileContainer}>
            {name && <Text style={styles.username}>{name}</Text>}
            <Image source={require("../assets/avatar.png")} resizeMode="cover" style={styles.profile} />
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        paddingVertical:Platform.OS =='ios' ? StatusBar.currentHeight + 16: 12,
        paddingHorizontal:8,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    title:{
        color:colors.white,
        fontWeight:'bold',
    },
    profileContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    profile:{
        width:40,
        height:40,
        borderColor:"white",
        borderWidth:2,
        borderRadius:50,
        marginLeft:5
    },
    username:{
        color:colors.white,
        fontWeight:'bold',
    }
})