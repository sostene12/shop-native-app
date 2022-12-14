import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../colors";
import { useSelector } from "react-redux";

const User = () => {
  const navigation = useNavigation();
  const user= useSelector(state => state.user.currentUser);
  const [customer,setCustomer] = useState({})
  if(user != null){
    setCustomer(...user);
  }
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
          {
            customer.length > 0 && (
              <>
               <Text>{customer.lastName}</Text>
              <Text>{customer.FirstName}</Text>
              </>
             
            )
          }
       
        </View>
      </View>
      <Button title="Logout" />
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({});
