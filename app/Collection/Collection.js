import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import * as Font from 'expo-font';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import BlogCard from "./BlogCard";
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
    
      if (!fontLoaded) {
        return null;
      }
  

    return (
        <ScrollView>
            <Text> This is Collection Page </Text>
        </ScrollView>
    )
}

export default Collection