import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";
import { useFonts, BodoniModa_700Bold_Italic } from '@expo-google-fonts/bodoni-moda';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { TouchableOpacity } from "react-native-gesture-handler";

const Hero = () => {
    
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

  
  if (!fontLoaded) {
    return null; // Wait for the font to load before rendering
  }
    
  return (
    <View style={{ flex: 1, backgroundColor: "#E7EAEF", overflow: "hidden" }}>
      <ImageBackground style={{ flex: 1, marginTop: -15 }} source={require("../../assets/bg.png")}>
        <View style={{ marginTop: 285.16 }}>
        <Text style={styles.heading1}>LUXURY</Text>
        <Text style={styles.heading2}>FASHION</Text>
        <Text style={styles.heading3}>& ACCESSORIES</Text>
        </View>
        <TouchableOpacity style={styles.herobtn}>
            <Text style={{ fontSize: 16, textAlign: "center", fontFamily: "TenorSans", color: "white" }}>EXPLORE COLLECTION</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};



const styles = StyleSheet.create({
  heading1: {
    fontSize: 40.66,
    fontFamily: 'BodoniModa-BoldItalic',
    marginLeft: 60,
    marginTop: -15,
    color: "#555555",
    marginLeft: 43.49,
  },
  heading2: {
    fontSize: 40.66,
    fontFamily: 'BodoniModa-BoldItalic',
    marginLeft: 60,
    marginTop: -15,
    color: "#555555",
    marginLeft: 79.49,
  },
  heading3: {
    fontSize: 40.66,
    fontFamily: 'BodoniModa-BoldItalic',
    marginLeft: 60,
    marginTop: -15,
    color: "#555555",
    marginLeft: 43.49,
  },
   herobtn: {
    width: 290,
    marginTop: 170, 
    marginBottom: 20,
    backgroundColor: "#00000040",
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 14,
    paddingBottom: 14
   }
});

export default Hero;
