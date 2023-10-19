import React, { useState, useEffect } from "react";
import { Text, Image, View, ScrollView, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Arrival from "../components/Arrival/Arrival";
import { ProductContextProvider } from "../contexts/productContext";
import Collection from "../components/Collection/Collection";
import About from "../components/About/About";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Menu from "../components/Menu/Menu";

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    async function loadCustomFonts() {
      await Font.loadAsync({
        'BodoniModa-BoldItalic': require("../assets/fonts/BodoniModa_28pt-BoldItalic.ttf"),
        'TenorSans': require("../assets/fonts/TenorSans-Regular.ttf"),
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
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image style={{ width: 35, height: 27, marginLeft: -10 }} source={require("../assets/menu.png")} />
          </TouchableOpacity>
          <Image style={{ width: 100, height: 65, marginLeft: 70, marginRight: 20 }} source={require("../assets/logo.png")} />
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25, marginLeft: 40 }} source={require("../assets/search.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: 22, height: 25, marginLeft: 25 }} source={require("../assets/shopping-bag.png")} />
          </TouchableOpacity>
        </View>

        <Hero />
        <ProductContextProvider>
          <Arrival />
          <Collection />
        </ProductContextProvider>
        <About />

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Blog")}>
              <Text style={{ fontSize: 16, fontFamily: "TenorSans", marginBottom: 30 }}>Blog</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 12, fontFamily: "TenorSans", marginBottom: 8 }}>
            Copyright &copy; Samyung All Rights Reserved.
          </Text>
        </View>
      </ScrollView>

      {/* Modal for the menu */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => {
          toggleMenu();
        }}
      >
        <View style={styles.menu}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image style={{width:40, height: 40, marginTop: -30 }} source={require("../assets/Close.png")} />
            <View>
              <Menu />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

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
  text: {
    fontSize: 16,
    color: "brown",
  },
  image1: {
    width: 35,
    height: 35,
    marginRight: 0,
    marginLeft: -120
  }
});

export default Home;
