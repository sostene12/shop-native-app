import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState} from 'react';

import NavContents from '../navContents';
import colors from '../colors';

const Navigation = () => {
    const [selected,setSelected] = useState('All');

    const handlePress = (item) =>{
        setSelected(item);
    }

  return (
    <View style={styles.container}>
      {NavContents.map(item => (
        <TouchableOpacity
         key={item.id} 
         onPress={() => handlePress(item.title)}
         style={[styles.button,{backgroundColor:selected===item.title ? colors.black:colors.white}]}
          >
            <Text style={{
                color:selected===item.title ? colors.white:colors.black,
                textAlign:'center'
            }}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Navigation;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    button:{
        paddingVertical:2,
        paddingHorizontal:15,
        borderRadius:10,
        marginHorizontal:8
    }
})