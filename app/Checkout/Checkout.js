import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import * as Font from 'expo-font';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ProductContext } from "../../contexts/productContext";
import { ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Menu from "../../components/Menu/Menu";
import { useCartContext } from '../../contexts/cartContext';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
    
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  const { cart } = useCartContext();
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => price + item.price * item.quantity, 0);
  };

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
        <ScrollView>
            <Text>Checkout Now</Text>
        </ScrollView>
    )
}

export default Checkout