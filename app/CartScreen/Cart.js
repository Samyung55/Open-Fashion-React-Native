import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import * as Font from 'expo-font';
    import { useNavigation } from '@react-navigation/native';
    import { ProductContext } from "../../contexts/productContext";

const Cart = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    
  const navigation = useNavigation();

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
        <ScrollView>
            <Text>This is Cart Screen</Text>
        </ScrollView>
      )

}

export default Cart