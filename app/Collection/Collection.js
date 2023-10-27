import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import * as Font from 'expo-font';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ProductContext } from "../../contexts/productContext";
import { ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Menu from "../../components/Menu/Menu";

const Collection = () => {
    
    useEffect(() => {
        async function loadCustomFonts() {
          await Font.loadAsync({
            'BodoniModa-BoldItalic': require('../../assets/fonts/BodoniModa_28pt-BoldItalic.ttf'),
            'TenorSans': require("../../assets/fonts/TenorSans-Regular.ttf"),
          });
          setFontLoaded(true);
        }
    
        loadCustomFonts();
      }, []);
    
  

    return (
        <ScrollView>
             <View style={styles.container}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image style={{ width: 35, height: 27, marginLeft: -10 }} source={require("../assets/menu.png")} />
          </TouchableOpacity>
          <Image style={{ width: 100, height: 65, marginLeft: 70, marginRight: 20 }} source={require("../assets/logo.png")} />
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25, marginLeft: 40 }} source={require("../assets/search.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image  style={{ width: 22, height: 25, marginLeft: 25 }} source={require("../assets/shopping-bag.png")} />
          </TouchableOpacity>
        </View>
            <Text> This is Collection Page </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E7EAEF',
      flex: 0.08,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      padding: 15
    },
    menu: {
      flex: 1,
      backgroundColor: "white", // Change this to your menu background color
      paddingTop: 50,
      paddingHorizontal: 20,
    },
})


export default Collection