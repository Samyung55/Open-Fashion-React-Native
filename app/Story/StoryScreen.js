import React, { useState, useEffect } from "react";
import { Text, Image, View, ScrollView, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import * as Font from "expo-font";
import Menu from "../../components/Menu/Menu";
import { useNavigation } from '@react-navigation/native';


const Story = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadCustomFonts() {
      await Font.loadAsync({
        'BodoniModa-BoldItalic': require("../../assets/fonts/BodoniModa_28pt-BoldItalic.ttf"),
        'TenorSans': require("../../assets/fonts/TenorSans-Regular.ttf"),
      });
      setFontLoaded(true);
    }

    loadCustomFonts();
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <ScrollView style={{ backgroundColor: "white"}}>
        <Navbar />
      <View style={styles.ScreenLeft}>
        <Text style={styles.ScreenTitle}>OUR STORY</Text>
        <Image style={{ marginTop: 2, }} source={require("../../assets/3.png")}/>
      </View>
    <View>
    <Text style = {{ fontFamily: "TenorSans", fontSize: 15, padding: 15, lineHeight: 25}}>
    Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You can open Open Fashion - Free Ecommerce UI Kit file by Figma.
    {'\n'}
    {'\n'}
    Create stunning shop with bulletproof guidelines and thoughtful components. Its library contains more than 50+ components supporting Light & Dark Mode and 60+ ready to use mobile screens.
</Text>
    <Image style={{ width: 400, height: 250 }} source={require("../../assets/story.png")} />
    </View>

    <View style={styles.ScreenLeft}>
        <Text style={styles.ScreenTitle}>SIGN UP</Text>
        <Image style={{ marginTop: 2, }} source={require("../../assets/3.png")}/>
    </View>

      <Text style = {{ fontFamily: "TenorSans", fontSize: 15, padding: 15, lineHeight: 25, textAlign: "center", color: "#9F9E9E"}}>
      Receive early access to new arrivals, sales, exclusive content, events and much more!
    </Text>

    <TextInput
        style={{ borderBottomColor: "#979797", borderBottomWidth: 1, width: 350, height: 45, marginLeft: 20, fontFamily: "TenorSans", marginTop: 30, marginBottom: 50 }}
        underlineColorAndroid="transparent"
        placeholder="Email address"
        placeholderTextColor="#979797"
      />

<View style={styles.cartScreenRight}>
        <TouchableOpacity style={{ backgroundColor: "black", padding: 25, width: 400, marginLeft: -20, flexDirection: "row", justifyContent: "center", marginTop: 25 }} >
          <Text style={styles.continue}>
            SUBMIT
          </Text>
          
          <Image style={{ width: 25, height: 25, marginTop: -5, marginLeft: 15 }} source={require("../../assets/arrow-white.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )

  }

  const styles = StyleSheet.create({
    Screen: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "white",
    },
    ScreenLeft: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30
    },
    ScreenTitle: {
      fontSize: 18,
      fontFamily: "TenorSans",
      paddingTop: 15,
      letterSpacing: 2
    },
    cartScreenRight: {
        paddingBottom: 0,
      padding: 20,
      flexDirection: "column",
      marginTop: -45,
    },
    continue: {
      fontFamily: "TenorSans",
      fontSize: 16,
      textAlign: "center",
      color: "white"
    },

  })

  export default Story