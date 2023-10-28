import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Font from 'expo-font';
import { ProductContext } from "../../contexts/productContext";
import { useNavigation } from '@react-navigation/native';


const Arrival = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const { newArrival, setNewArrival } = useContext(ProductContext);
  
  const navigation = useNavigation();

  const menuItems = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Apparel' },
    { id: 3, label: 'Dress' },
    { id: 4, label: 'T-shirt' },
    { id: 5, label: 'Bag' },
  ];

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

// ...

useEffect(() => {
  let filteredProducts = [];

  if (selectedItem === 1) {

    filteredProducts = newArrival.slice(0, 4);

  } else {

    filteredProducts = newArrival.filter((product) => product.category === menuItems[selectedItem - 1].label);
  
  }

  setFilteredProducts(filteredProducts);
}, [selectedItem, newArrival]);




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
    <View style={styles.container}>
      <Text style={styles.arrival}>
        NEW ARRIVAL
      </Text>
      <Image style={styles.borderImg} source={require("../../assets/3.png")} />
      <View style={{ flex: 1, flexDirection: "row", alignSelf: "center" }}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleMenuItemClick(item.id)}
            style={styles.arrivalList}
          >
            <Text style={[styles.arrivalHead, selectedItem === item.id && styles.selectedArrivalList ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.productContainer}>
        {filteredProducts.map((product, index) => (
          <TouchableOpacity style={styles.productRow} key={index} onPress={() => navigation.navigate("SingleArrival", { selectedProductIndex: index })}>
            <View style={styles.productColumn}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.desc}</Text>
              <Text style={styles.price}>${product.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={{flex: 1, flexDirection: "row", alignSelf: "center", marginBottom: 30, marginTop: 20}}>
          <Text style={{ fontFamily: "TenorSans", alignSelf: "center", fontSize: 16, marginBottom: 20}}>Explore More </Text>
       <Image style={{marginLeft: 5}} source={require("../../assets/arow.png")} />
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Image style={{ marginBottom: 30}} source={require("../../assets/3.png")}/>
        <View style={{flexDirection: "row"}}>
        <Image style={{ marginBottom: 25, marginRight: 40 }} source={require("../../assets/clients/Prada.png")}/>
        <Image style={{ marginBottom: 25, marginRight: 40}} source={require("../../assets/clients/Burberry.png")}/>
        <Image style={{ marginBottom: 25, }} source={require("../../assets/clients/Boss.png")}/>
        </View>
        <View style={{flexDirection: "row"}}>
        <Image style={{ marginBottom: 25, marginRight: 40}} source={require("../../assets/clients/Catier.png")}/>
        <Image style={{ marginBottom: 25, marginRight: 40}} source={require("../../assets/clients/Gucci.png")}/>
        <Image style={{ marginBottom: 25}} source={require("../../assets/clients/Tiffany.png")}/>
        </View>
        <Image style={{ marginTop: 2,  marginBottom: 35 }} source={require("../../assets/3.png")}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
    arrival: {
        fontFamily: "TenorSans",
        fontSize: 18,
        padding: 20,
        alignSelf: "center",
        marginTop: 30,
        letterSpacing: 5,
    },
    borderImg: {
        marginBottom: 30,
        marginTop: -20,
        alignSelf: "center"
    },
    arrivalList: {
      marginBottom: 10
    },
    arrivalHead: {
      fontFamily: "TenorSans",
      fontSize: 14,
      marginRight: 16,
      marginBottom: 16,
      color: "#9E9E9E",
    },

    selectedArrivalList: {
      color: "#000000",
      borderBottomWidth: 3,
      borderBottomColor: '#DD8560',
      paddingBottom: 5,
      borderBottomEndRadius: 50,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      borderBottomStartRadius: 50
    },
    container: {
      flexDirection: 'column', 
      overflow: "hidden"

    },

      productContainer: {
        flexDirection: 'row', // Set the direction to row
        flexWrap: 'wrap',
        marginLeft: 29     // Allow items to wrap to the next row
      },

    productRow: {
      flexDirection: 'row', 
      marginLeft: 5
    },
    productColumn: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,
      marginLeft: -10,
    },
    
    productName: {
      fontFamily: "TenorSans",
      fontSize: 12,
      padding: 2,
      width: 150,
      textAlign: "center",
      lineHeight: 16,
      marginBottom: 4
    },
    price: {
      fontFamily: "TenorSans",
      fontSize: 15,
      color: "#DD8560",
      marginBottom: 10
    },
    productImage: {
        width: 170,
        height: 220
    }
})

export default Arrival;
