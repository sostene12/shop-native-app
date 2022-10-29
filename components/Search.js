import { Text, View,TextInput,StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from '../colors';

const Search = () => {
    return (
      <View style={styles.container}>
        <Ionicons name='ios-search-outline' size={22} />
        <TextInput placeholder='Search a product' style={styles.input} />
      </View>
    )
}

export default Search;

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:colors.white,
        width:"95%",
        paddingVertical:4,
        paddingHorizontal:10,
        borderRadius:18
    },
    input:{
        paddingLeft:8
    }
})