import { View, Text, StyleSheet,Image,Platform,StatusBar,AsyncStorage,TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';

import colors from '../colors';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    const user = useSelector(state => state.user.currentUser);
    const [name,setName] = useState('');
    const [token,setToken] = useState(null);
    const getName = async () =>{
      try {
        const name = await AsyncStorage.getItem('name');
        const token = await AsyncStorage.getItem('token');
        setToken(token)
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
            <TouchableOpacity onPress={() => token !=null? navigation.navigate("User") : navigation.navigate('Home')}>
                <Image source={require("../assets/avatar.png")} resizeMode="cover" style={styles.profile} />
            </TouchableOpacity>
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