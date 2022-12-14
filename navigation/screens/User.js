import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../colors";

const User = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const getName = async () => {
    const name = await AsyncStorage.getItem("name");
    setName(name);
  };
  console.log(name);

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Home");
  };

  useEffect(() => {
    getName();
  }, []);
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
          <Text>{name}</Text>
        </View>
      </View>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({});
