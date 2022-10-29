import { View, Text,SafeAreaView ,StatusBar, StyleSheet,Platform} from 'react-native';
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView>
        <StatusBar 
        backgroundColor='#50c878'
        translucent
        />
        <View style={styles.container}>
            <Text>This is the change Test</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS == 'android' ? StatusBar.currentHeight:0,
    }
})