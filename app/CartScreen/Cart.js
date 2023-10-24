import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
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

      const { cart } = useCartContext();
      const { cartItems } = cart;
    
      const getCartCount = () => {
        return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0);
      };
    
      const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => price + item.price * item.quantity, 0);
      };
    
      return (
        <View style={styles.cartScreen}>
          <View style={styles.cartScreenLeft}>
            <Text style={styles.cartScreenTitle}>CART</Text>
            <CartItem />
          </View>
    
          {cartItems.length > 0 && (
          <View style={styles.cartScreenRight}>
            <View style={styles.cartScreenInfo}>
              <Text>Subtotal ({getCartCount()} items)</Text>
              <Text>${getCartSubTotal()}</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
                <Text>
                    Click to Proceed to Checkout
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
        padding: 10,
        flexDirection: "column"
      },
      cartScreenInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    });
    

export default Cart