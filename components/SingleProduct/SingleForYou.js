import React, { useState, useEffect, useContext } from "react";
import { Text, Image, View, ScrollView, TouchableOpacity, StyleSheet, Modal } from "react-native";
import * as Font from "expo-font";
import Menu from "../Menu/Menu";
import { ProductContext } from "../../contexts/productContext";
import Navbar from "../Navbar/Navbar";
import { useRoute } from '@react-navigation/native';

const SingleProduct = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [selectedItem, setSelectedItem] = useState(1);
    const [isMenuVisible, setMenuVisible] = useState(false);
    const { forYou, setForYou } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(''); 
  const [selectedColor, setSelectedColor] = useState(''); 

  
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const route = useRoute();
  const selectedProductIndex = route.params.selectedProductIndex;
  const selectedProduct = forYou[selectedProductIndex];

  const isSizeSelected = (size) => {
    return size === selectedSize ? { backgroundColor: 'black', } : {};
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const isColorSelected = (color) => {
    return color === selectedColor ? { borderWidth: 1 } : {};
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
    <ScrollView style={{ backgroundColor: "#FFFFFF"}}>
        <Navbar />
    <View>
        <Image style={{ width: 360, height: 550, marginTop: 20, alignSelf: "center" }} source={selectedProduct.image} />
        <TouchableOpacity>
        <Image style={{ width: 40, height: 40, marginTop: -50, alignSelf: "flex-end", marginRight: 30, marginBottom: 30 }} source={(require("../../assets/expand.png"))} />
        </TouchableOpacity>
    </View>
    <View style={{ marginLeft: 20, flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Text style={{ fontFamily: "TenorSans", fontSize: 20, letterSpacing: 2 }}>{selectedProduct.name}</Text>

        <TouchableOpacity>
        <Image style={{ width: 20, height: 20, marginRight: 20 }} source={require("../../assets/Export.png")} />
        </TouchableOpacity>
    </View>
    <View style={{ marginLeft: 20, marginBottom: 20 }}>
    <Text style={{ fontFamily: "TenorSans", fontSize: 16, marginTop: 10  }}>{selectedProduct.desc}</Text>
    <Text style={{ fontFamily: "TenorSans", fontSize: 18, marginTop: 10, color: "#DD8560"  }}>{selectedProduct.price}</Text>
    </View>

    <View style={{ flexDirection: "row", marginTop: -10, marginBottom: 30 }}>

    <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 20 }}>
    <Text style={styles.size1}>Color</Text>
                <TouchableOpacity
            style={[styles.selectionBlack, isColorSelected('Black')]}
            onPress={() => handleColorSelection('Black')}
          >
            <Text style={styles.size}></Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.selectionBrown, isColorSelected('Brown')]}
            onPress={() => handleSizeSelection('Brown')}
          >
            <Text style={styles.size}></Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.selectionGrey, isColorSelected('Gray')]}
            onPress={() => handleSizeSelection('Gray')}
          >
            <Text style={styles.size}></Text>
          </TouchableOpacity>
    </View>

    <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 20 }}>

    

    <Text style={styles.size1}>Size</Text>
                <TouchableOpacity
            style={[styles.selection, isSizeSelected('S')]}
            onPress={() => handleSizeSelection('S')}
          >
            <Text style={styles.size}>S</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.selection, isSizeSelected('M')]}
            onPress={() => handleSizeSelection('M')}
          >
            <Text style={styles.size}>M</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.selection, isSizeSelected('L')]}
            onPress={() => handleSizeSelection('L')}
          >
            <Text style={styles.size}>L</Text>
          </TouchableOpacity>

          </View>
          </View>

          <TouchableOpacity style={{ backgroundColor: "black", flexDirection: "row", justifyContent: "space-between", padding: 20}}>
            <View style={{ flexDirection: "row"}}>
            <Image style={{ width: 30, height: 30 }} source={require("../../assets/white.png")} />
            <Text style={{ color: "white", marginLeft: 10, fontFamily: "TenorSans", fontSize: 16, marginTop: 5 }}>ADD TO BASKET</Text>
            </View>
            <TouchableOpacity>
                <Image style={{ width: 30, height: 30 }}  source={require("../../assets/Heart.png")} />
            </TouchableOpacity>
          </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

    size1: {
        fontFamily: "TenorSans", 
        fontSize: 14, 
        color: '#555555', 
        alignSelf: "center",
        marginRight: 5
      },

      size: {
        fontFamily: "TenorSans", 
        fontSize: 13, 
        color: '#555555', 
        alignSelf: "center",
      },

      selection: {
        width: 25,
        height: 25, 
        marginLeft: 10, 
        borderRadius: 30, 
        borderWidth: 0.5, 
        borderColor: "#555555", 
        justifyContent: "center", 
        alignItems: "center"
      },

      selectionBlack: {
        width: 25,
        height: 25, 
        marginLeft: 10, 
        borderRadius: 30, 
        borderWidth: 0, 
        backgroundColor: "black",
        justifyContent: "center", 
        alignItems: "center"
      },

      selectionBrown: {
        width: 25,
        height: 25, 
        marginLeft: 10, 
        borderRadius: 30, 
        borderWidth: 0, 
        backgroundColor: "#DD8560",
        justifyContent: "center", 
        alignItems: "center"
      },

      selectionGrey: {
        width: 25,
        height: 25, 
        marginLeft: 10, 
        borderRadius: 30, 
        borderWidth: 0, 
        backgroundColor: "#E1E0DB",
        justifyContent: "center", 
        alignItems: "center"
      },

    })
export default SingleProduct