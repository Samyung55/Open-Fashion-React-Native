import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from 'expo-font';
import Menu from "../Menu/Menu";
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  
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


   return (
    <>
        <View style={styles.container}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image style={{ width: 35, height: 27, marginLeft: -10 }} source={require("../../assets/menu.png")} />
          </TouchableOpacity>
          <Image style={{ width: 100, height: 40, marginLeft: 100, marginRight: 20  }} source={require("../../assets/open.png")} />
           
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25, marginLeft: 40 }} source={require("../../assets/search.png")} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image style={{ width: 22, height: 25, marginLeft: 25 }} source={require("../../assets/shopping-bag.png")} />
          </TouchableOpacity>
        </View>

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
            <Image style={{width:40, height: 40, marginTop: -10 }} source={require("../../assets/Close.png")} />
            <Menu />
          </TouchableOpacity>
        </View>
      </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      flex: 0.08,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      padding: 15
    },
    text: {
      fontSize: 16,
      color: 'brown',
    },
    image1: {
        width: 35,
        height:35,
        marginRight: 0,
        marginLeft: -120
    },
    menu: {
      flex: 1,
      backgroundColor: "white", // Change this to your menu background color
      paddingTop: 50,
      paddingHorizontal: 20,
    },
  });
  

export default Navbar

