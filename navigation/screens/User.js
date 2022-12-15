import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../colors";
import { useIsFocused } from "@react-navigation/native";

const User = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [myEmail,setMyEmail] = useState('');
  const [token,setToken] = useState('');

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Home");
  };

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

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ alignSelf: "flex-start" }}
        >
          <Ionicons
            name="chevron-back-circle-sharp"
            size={30}
            color={colors.green}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.profilTitle}>Your Profile</Text>
        </View>
        <View style={styles.profile}>
          <View>
            <Text style={styles.profilContent}>Frist Name: {lastName}</Text>
            <Text style={styles.profilContent}>Last Name: {firstName}</Text>
            <Text style={styles.profilContent}>Email: {myEmail}</Text>
          </View>
        </View>
      </View>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  profile:{
    justifyContent:'center',
    alignItems:'center',
    // flex:1,
    marginVertical:50,
    width:"90%",
    alignSelf:'center',
    borderRadius:'20%',
    padding:10,
    backgroundColor:'#CFDFAF'
  },
  profilTitle:{
    fontSize:32,
    fontWeight:'bold',
    borderColor:'none',
    marginTop:'60%',
    marginBottom:-40,
    marginLeft:25,
  },
  profilContent:{
    fontSize:20,
    padding:5,
  }
});
