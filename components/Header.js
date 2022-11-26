import { View, Text, StyleSheet,Image } from 'react-native';
import React from 'react';

import colors from '../colors';

const Header = () => {
  return (
    <View style={styles.container}> 
        <View>
            <Image source={require("../assets/logo.png")} />
            <Text style={styles.title}>Hi 👋, Welcome to our shop 🥰</Text>
        </View>
        <View>
            <Text>User</Text>
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        paddingVertical:12,
        paddingHorizontal:8,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    title:{
        color:colors.white,
        fontWeight:'bold',
    }
})