import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import colors from '../colors';

const Header = () => {
  return (
    <View style={styles.container}> 
        <View>
            <Text style={styles.title}>Electronics Shop</Text>
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
        justifyContent:'space-between'
    },
    title:{
        color:colors.white,
        fontWeight:'bold',
        fontSize:18,
        textTransform:'uppercase'
    }
})