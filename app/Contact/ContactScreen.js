import React, { useState, useEffect } from "react";
import { Text, Image, View, ScrollView, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import * as Font from "expo-font";
import Menu from "../../components/Menu/Menu";
import { useNavigation } from '@react-navigation/native';


const Contact = () => {
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
        <Text style={styles.ScreenTitle}>CONTACT</Text>
        <Image style={{ marginTop: 2, }} source={require("../../assets/3.png")}/>
      </View>
    <View>
    <Image style={{ marginTop: 32, alignSelf: "center", width: 50, height: 50 }} source={require("../../assets/brown3.png")}/>
    <Text style = {{ fontFamily: "TenorSans", fontSize: 15, padding: 15, lineHeight: 25}}>
    Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, please call us.
    </Text>
    </View>

    <View style={styles.cartScreenRight}>
        <TouchableOpacity style={{ backgroundColor: "black", padding: 20, width: 200, marginLeft: -20, flexDirection: "row", justifyContent: "center", marginTop: 45, alignSelf: "center" }} >
          <Text style={styles.continue}>
           CHAT WITH US
          </Text>
        </TouchableOpacity>
      </View>

      <View>
    <Image style={{ marginTop: 32, alignSelf: "center", width: 50, height: 50 }} source={require("../../assets/brown2.png")}/>

    <Text style = {{ fontFamily: "TenorSans", fontSize: 15, padding: 15, lineHeight: 25}}>
    You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. 
    Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. 
    Consent is not required for any purchase. Message and data rates may apply. 
    Text messaging may not be available via all carriers.
    </Text>
    </View>
    <View style={styles.cartScreenRight}>
        <TouchableOpacity style={{ backgroundColor: "black", padding: 20, width: 200, marginLeft: -20, flexDirection: "row", justifyContent: "center", marginTop: 45, alignSelf: "center" }} >
          <Text style={styles.continue}>
           TEXT US
          </Text>
        </TouchableOpacity>
      </View>

      <View>
    <Image style={{ marginTop: 32, alignSelf: "center", width: 50, height: 50 }} source={require("../../assets/brown1.png")}/>

    <Text style = {{ fontFamily: "TenorSans", fontSize: 15, padding: 15, lineHeight: 25}}>
    To send us a private or direct message, like @Open Fashion on Facebook or follow us on Twitter. We’ll get back to you ASAP. Please include your name, order number, and email address for a faster response!
    </Text>
    </View>
    

    <View style={styles.socials}>
          <TouchableOpacity>
          <Image style={styles.icons} source={require("../../assets/socials/Instagram-full.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.icons} source={require("../../assets/socials/Twitter.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.icons} source={require("../../assets/socials/YouTube.png")} />
          </TouchableOpacity>
          </View>
          <View>
            <Image style={{ marginTop: 2,  marginBottom: 20, alignSelf: "center" }} source={require("../../assets/3.png")}/>
            <Text style={{ fontFamily: "TenorSans", width: 200, textAlign: "center", alignSelf: "center", lineHeight: 27 }}>
                samyung05@gmail.com{'\n'}
                (+234)9060177530 {'\n'}
                08:00 - 22:00 - Everyday
            </Text>
            <Image style={{ marginTop: 20,  marginBottom: 30, alignSelf: "center" }} source={require("../../assets/3.png")}/>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center"}}>
            <View style={{ flexDirection: "row", }}>

            <TouchableOpacity 
            onPress={navigation.navigate("Story")}
            >
            <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={navigation.navigate("Blog")}> 
        <Text style={{ fontSize: 16, fontFamily: "TenorSans", marginBottom: 30 }}>Blog</Text>
      </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 12, fontFamily: "TenorSans", marginBottom: 8, }}>
          Copyright &copy; Samyung All Rights Reserved.
          </Text>
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
  socials: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 1,
    marginTop: 10
  },
  icons: {
    marginTop: 30,
    width: 25,
    height: 25,
    marginRight: 30,
    marginBottom: 25,
  },

  })

  export default Contact