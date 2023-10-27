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

const PlaceOrder = () => {
    
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  const { cart } = useCartContext();
  const { cartItems } = cart;

  const handlePlaceOrder = () => {
    navigation.navigate("Confirmation"); // Navigate to the "Confirmation" screen
  };


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

  
    return (
        <ScrollView style={styles.cartScreen}>
            <Navbar />
        <View style={styles.cartScreenLeft}>
          <Text style={styles.cartScreenTitle}>CHECKOUT</Text>
        <Image style={{ marginTop: 2,  marginBottom: 5 }} source={require("../../assets/3.png")}/>
        </View>

        <View>
            <Text style={{ fontFamily: "TenorSans", padding: 20, color: "#B3B0B0"}}>
                SHIPPING ADDRESS
            </Text>

            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#F2F2F2", padding: 15, width: 350, alignSelf: "center", justifyContent: "space-between", borderRadius: 20 }}
              onPress={navigation.navigate("AddNow")}
            >
                <Text  style={{ fontFamily: "TenorSans", }}>Add Shipping Address</Text>
                <Image style={{ width: 20, height: 20, marginRight: 15 }} source={require("../../assets/plus.png")}/>

            </TouchableOpacity>
        </View>

        <View>
            <Text style={{ fontFamily: "TenorSans", padding: 20, color: "#B3B0B0", marginTop: 30}}>
                SHIPPING METHOD
            </Text>

            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#F2F2F2", padding: 15, width: 350, alignSelf: "center", justifyContent: "space-between", borderRadius: 20 }}>
                <Text  style={{ fontFamily: "TenorSans", }}>Pickup at store</Text>
                <Text  style={{ fontFamily: "TenorSans", marginRight: 20}}>Free</Text>

            </TouchableOpacity>
        </View>

        <View>
            <Text style={{ fontFamily: "TenorSans", padding: 20, color: "#B3B0B0", marginTop: 30}}>
                PAYMENT METHOD
            </Text>

            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#F2F2F2", padding: 15, width: 350, alignSelf: "center", justifyContent: "space-between", borderRadius: 20 }}
            onPress={() => navigation.navigate("PaymentMethod")}
            >
                <Text  style={{ fontFamily: "TenorSans", }}>Select Payment Method</Text>
                <Image style={{ width: 20, height: 20, marginRight: 15 }} source={require("../../assets/Forward.png")}/>

            </TouchableOpacity>
        </View>
         
          <View style={styles.cartScreenRight}>

            <View style={styles.cartScreenInfo}>  
           
              <Text style={{ fontFamily: "TenorSans", fontSize: 15}}>EST. TOTAL</Text>
              <Text style={{ color: "#DD8560", fontFamily: "TenorSans", fontSize: 17 }}>${getCartSubTotal()}</Text>
            </View>
  
            <TouchableOpacity
        style={{ backgroundColor: "black", padding: 25, width: 400, marginLeft: -20, flexDirection: "row", justifyContent: "center", marginTop: 25 }}
        onPress={handlePlaceOrder} // Use the function to navigate
      >
        <Image style={{ width: 25, height: 25, marginTop: -5, marginRight: 15 }} source={require("../../assets/shopping.png")} />
        <Text style={styles.continue}>PLACE ORDER</Text>
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
      marginTop: 55,
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
  

export default PlaceOrder