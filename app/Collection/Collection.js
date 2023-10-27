import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import * as Font from 'expo-font';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ProductContext } from "../../contexts/productContext";
import { ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Menu from "../../components/Menu/Menu";
import { useNavigation } from '@react-navigation/native';

const Collection = () => {
    
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

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

  
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };


  
  if (!fontLoaded) {
    return null; // Wait for the font to load before rendering
  }

    return (
        <ScrollView style={{ backgroundColor: "black"}}>
             <View style={styles.container}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image style={{ width: 35, height: 27, marginLeft: -10 }} source={require("../../assets/menu-white.png")} />
          </TouchableOpacity>
          <Image style={{ width: 120, height: 49, marginLeft: 70, marginRight: 20 }} source={require("../../assets/logo-white.png")} />
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25, marginLeft: 40 }} source={require("../../assets/search-white.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image  style={{ width: 22, height: 25, marginLeft: 25 }} source={require("../../assets/shopping-bag-white.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ width: 400 }}>
            <Text style={{ color: "#222222", fontFamily: "BodoniModa-BoldItalic", fontSize: 140, alignSelf: "center", letterSpacing: -14, width: 140 }}>10</Text>
            <Text style={{ color: "white", fontFamily: "BodoniModa-BoldItalic", fontSize: 35, alignSelf: "center", marginTop: -105, letterSpacing: 3 }}>October</Text>
            <Text style={{ color: "white", fontFamily: "TenorSans", fontSize: 18, alignSelf: "center", marginTop: -10, letterSpacing: 3 }}>COLLECTION</Text>
            </View>

        <View>
            <TouchableOpacity>
            <Image style={{ width: 370, height: 500, marginTop: -20, alignSelf: "center" }} source={require("../../assets/collection/collection1.png")} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", padding: 10, marginBottom: 40 }}>
                <Text style={{ color: "white", fontFamily: "BodoniModa-BoldItalic", fontSize: 15}} >01</Text>
                <Text style={{ color: "white", fontFamily: "TenorSans", fontSize: 15}}>OCTOBER COLLECTION</Text>
            </View>
        </View>

        <View>
            <TouchableOpacity>
            <Image style={{ width: 370, height: 500, marginTop: -20, alignSelf: "center" }} source={require("../../assets/collection/collection2.png")} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", padding: 10, marginBottom: 40 }}>
                <Text style={{ color: "white", fontFamily: "BodoniModa-BoldItalic", fontSize: 15}} >02</Text>
                <Text style={{ color: "white", fontFamily: "TenorSans", fontSize: 15}}>BLACK COLLECTION</Text>
            </View>
        </View>

        <View>
            <TouchableOpacity>
            <Image style={{ width: 370, height: 500, marginTop: -20, alignSelf: "center" }} source={require("../../assets/collection/collection3.png")} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", padding: 10, marginBottom: 40 }}>
                <Text style={{ color: "white", fontFamily: "BodoniModa-BoldItalic", fontSize: 15}} >03</Text>
                <Text style={{ color: "white", fontFamily: "TenorSans", fontSize: 15}}>HAE BY HAEKIM</Text>
            </View>
        </View>
<View style={{ backgroundColor: "white"}}>
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
            <TouchableOpacity>
            <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity>
        <Text style={{ fontSize: 16, fontFamily: "TenorSans", marginBottom: 30 }}>Blog</Text>
      </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 12, fontFamily: "TenorSans", marginBottom: 8, }}>
          Copyright &copy; Samyung All Rights Reserved.
          </Text>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
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

    socials: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 1,
        marginTop: 10,
        backgroundColor: "white"
      },
      icons: {
        marginTop: 30,
        width: 25,
        height: 25,
        marginRight: 20,
        marginBottom: 30,
      },
})


export default Collection