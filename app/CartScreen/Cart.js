import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { ProductContext } from "../../contexts/productContext";
import { useCartContext } from '../../contexts/cartContext';
import * as cartActionTypes from '../../contexts/utils/cart';
import CartItem from "./CartItem";

const Cart = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const navigation = useNavigation();
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

  if (!fontLoaded) {
    return null; // Wait for the font to load before rendering
  }

  
  return (
    <View style={styles.cartScreen}>
      <View style={styles.cartScreenLeft}>
        <Text style={styles.cartScreenTitle}>CART</Text>
                <CartItem />
      </View>

      {cartItems.length > 0 && (
        <View style={styles.cartScreenRight}>
          <Image style={{ width: 360, marginBottom: 20, height: 2 }} source={require("../../assets/line.png")} />
          <View style={styles.cartScreenInfo}>
            <Text style={{ fontFamily: "TenorSans", fontSize: 15}}>SUB TOTAL</Text>
            <Text style={{ color: "#DD8560", fontFamily: "TenorSans", fontSize: 17 }}>${getCartSubTotal()}</Text>
          </View>

          <Text style={{ fontFamily: "TenorSans", fontSize: 15, color: "#9F9E9E", lineHeight: 26, marginTop: 8, width: 320, marginBottom: 80 }}>
            shipping charges, taxes and discount codes are calculated at the time of accounting.
          </Text>

          <TouchableOpacity style={{ backgroundColor: "black", padding: 25, width: 400, marginLeft: -20, flexDirection: "row", justifyContent: "center", marginTop: 25 }} 
            onPress={() => {}}>
            <Image style={{ width: 25, height: 25, marginTop: -5, marginRight: 15 }} source={require("../../assets/shopping.png")} />

            <Text style={styles.continue}>
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartScreen: {
    flex: 1,
    flexDirection: 'column',
  },
  cartScreenLeft: {
    flex: 1,
    padding: 10,
  },
  cartScreenTitle: {
    fontSize: 20,
    fontFamily: "TenorSans",
    paddingTop: 15,
    letterSpacing: 2
  },
  cartScreenRight: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    marginTop: 150,
  },
  cartScreenInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  continue: {
    fontFamily: "TenorSans",
    fontSize: 16,
    textAlign: "center",
    color: "white"
  }
});

export default Cart;
