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
import CartItem from "../CartScreen/CartItem";
import Navbar from "../../components/Navbar/Navbar";

const Confirmation = ({ shippingAddress }) => {
    
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

  const goToShippingAddress = () => {
    navigation.navigate('AddNow');
  };


  
  if (!fontLoaded) {
    return null; // Wait for the font to load before rendering
  }

    return (
        <ScrollView style={styles.cartScreen}>
            <Navbar />
        <View style={styles.cartScreenLeft}>
          <Text style={styles.cartScreenTitle}>CHECKOUT</Text>
        <Image style={{ marginTop: 2,  marginBottom: 5 }} source={require("../../assets/3.png")}/>
        </View>

        <View style={{ marginTop: 20}} >

        {shippingAddress ? (
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "#F2F2F2",
              padding: 15,
              width: 350,
              alignSelf: "center",
              justifyContent: "space-between",
              borderRadius: 20,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontFamily: "TenorSans" }}>
                {shippingAddress.firstName} {shippingAddress.lastName}
              </Text>
              <Text
                style={{
                  fontFamily: "TenorSans",
                  width: 250,
                  marginTop: 5,
                  marginBottom: 5,
                  lineHeight: 22,
                }}
              >
                {shippingAddress.address}
              </Text>
              <Text style={{ fontFamily: "TenorSans" }}>
                {shippingAddress.phoneNumber}
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                style={{ width: 20, height: 20, marginRight: 15, marginTop: 30 }}
                source={require("../../assets/go.png")}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 20,
            backgroundColor: "#F2F2F2",
            padding: 15,
            marginTop: 70
          }}
          onPress={goToShippingAddress}
        >
          <Text
            style={{
              fontFamily: "TenorSans",
              fontSize: 16,
            }}
          >
            Add Shipping Address
          </Text>
        </TouchableOpacity>
      )}

        </View>

         
          <View style={styles.cartScreenRight}>

            <View style={styles.cartScreenInfo}>  
           
              <Text style={{ fontFamily: "TenorSans", fontSize: 15}}>TOTAL</Text>
              <Text style={{ color: "#DD8560", fontFamily: "TenorSans", fontSize: 17 }}>${getCartSubTotal()}</Text>
            </View>
  
            <TouchableOpacity style={{ backgroundColor: "black", padding: 25, width: 400, marginLeft: -20, flexDirection: "row", justifyContent: "center", marginTop: 25 }} 
              onPress={() => {}}>
              <Image style={{ width: 25, height: 25, marginTop: -5, marginRight: 15 }} source={require("../../assets/shopping.png")} />
  
              <Text style={styles.continue}>
               CHECKOUT
              </Text>
            </TouchableOpacity> 
          
          </View>

       
      </ScrollView>
    )
}


const styles = StyleSheet.create({
    cartScreen: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "white",
    },
    cartScreenLeft: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30
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
      marginTop: 215,
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
    },
    container: {
        backgroundColor: '#white',
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
  });
  

export default Confirmation