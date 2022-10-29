import { View, Text,SafeAreaView ,StatusBar, StyleSheet,Platform} from 'react-native';
import React from 'react';

import colors from '../colors';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Search from '../components/Search';

const Home = () => {
  return (
    <SafeAreaView style={sy}>
        {/* <StatusBar hidden={true} /> */}
        <View style={styles.container}>
        <Header />
        <Navigation />
        <Search />
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