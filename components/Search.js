import { Text, View,TextInput,StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from '../colors';

const Search = () => {
    return (
      <View style={styles.container}>
        <Ionicons name='ios-search-outline' />
        <TextInput placeholder='Search a product' />
      </View>
    )
}

export default Search;

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:colors.black,
        width:"95%",
        paddingVertical:3,
        paddingHorizontal:10,
        borderRadius:18
    }
})