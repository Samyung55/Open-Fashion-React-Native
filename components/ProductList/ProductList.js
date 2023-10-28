import React, { useState, useEffect, useContext } from "react";
import { Text, Image, View, ScrollView, TouchableOpacity, StyleSheet, Modal } from "react-native";
import * as Font from "expo-font";
import Menu from "../Menu/Menu";
import { ProductContext } from "../../contexts/productContext";
import { useNavigation } from '@react-navigation/native';

const ProductList = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [selectedItem, setSelectedItem] = useState(1);
    const [isMenuVisible, setMenuVisible] = useState(false);
    const { products, setProducts } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(''); 
   const navigation = useNavigation();


  

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const isSizeSelected = (size) => {
    return size === selectedSize ? { backgroundColor: '#E0CFBA', } : {};
  };
  
const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const pagination = [
    { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' },
  ]

  useEffect(() => {
    let filteredProducts = [];
  
    if (selectedItem === 1) {
  
      filteredProducts = products.slice(0, 6);
  
    } 
    
    else if (selectedItem === 2)  {
  
        filteredProducts = products.slice(6);
    } 

    else if (selectedItem === 3)  {
  
        filteredProducts = products.slice(0, 6);
    }

    else if (selectedItem === 4)  {
  
        filteredProducts = products.slice(6);
    } 

    else if (selectedItem === 5)  {
  
        filteredProducts = products.slice(0, 6);
    } 
  
    setFilteredProducts(filteredProducts);
  }, [selectedItem, products]);


  useEffect(() => {
    async function loadCustomFonts() {
      await Font.loadAsync({
        'BodoniModa-BoldItalic': require("../../assets/fonts/BodoniModa_28pt-BoldItalic.ttf"),
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
    return null;
  }
    return (
        <ScrollView style={{backgroundColor: "#FFFFFF"}}>
        
        {/* Navbar */}
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleMenu}>
            <Image style={{ width: 35, height: 27, marginLeft: -10 }} source={require("../../assets/menu.png")} />
        </TouchableOpacity>
            <Image style={{ width: 100, height: 40, marginLeft: 70, marginRight: 20  }} source={require("../../assets/open.png")} />
           
        <TouchableOpacity>
        <Image style={{ width: 25, height: 25, marginLeft: 40  }} source={require("../../assets/search.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width: 22, height: 25, marginLeft: 25 }} source={require("../../assets/shopping-bag.png")} />
        </TouchableOpacity>
      </View>

      {/* Modal for the menu */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => {
          toggleMenu();
        }}
      >
        <View style={styles.menu}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image style={{width:40, height: 40, marginTop: -30 }} source={require("../../assets/Close.png")} />
            <View>
              <Menu />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* List Header */}
      <View style={styles.listHeader}>
        <Text style={styles.listText}>4500 APPAREL</Text>

        <TouchableOpacity style={{flexDirection: "row", }}>
        <Text style={styles.listText2}>New</Text>
        <Image style={{width: 6, height: 6, marginTop: 25,}} source={require("../../assets/Polygon.png")}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Image style={{width: 25, height: 25, marginLeft: 35, marginTop: 18}} source={require("../../assets/grid.png")}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Image style={{width: 25, height: 25, marginLeft: 35, marginTop: 18}}  source={require("../../assets/Filter.png")}/>
        </TouchableOpacity>

      </View>

      {/* Products */}
      {filteredProducts.map((product, index) => (
      <View key={index}  style={{ marginTop: 30, marginLeft: 20, flexDirection: "row"}}>
        <TouchableOpacity  onPress={() => navigation.navigate("SingleProduct", { selectedProductIndex: index })}>
        <Image style={{width: 110, height: 140, marginRight: 15}} source={product.image} />
        </TouchableOpacity>
        <View>
            <Text style={{ fontFamily: "TenorSans", fontSize: 13.5, letterSpacing: 2, marginBottom: 10}}>{product.name}</Text>
            <Text style={{ fontFamily: "TenorSans", fontSize: 11.5, color: '#555555'}}>{product.desc}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>

            <View style={{flexDirection: "row", marginTop: 10}}>
                <Image style={{width: 15, height: 15, marginRight: 5}} source={require("../../assets/products/Star.png")} />
                <Text style={{fontFamily: "TenorSans", fontSize: 14, color: '#555555'}}>{product.ratings} ratings</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10, }}>
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

          <TouchableOpacity>
                <Image style={{width: 22, height: 20, marginLeft: 50, alignSelf: "center"}} source={require("../../assets/products/Union.png")} />
          </TouchableOpacity>
            </View>
        </View>
        
      </View>
      ))}

      <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}>
       {pagination.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleMenuItemClick(item.id)}
          >
            <Text style={ [styles.page, selectedItem === item.id && styles.selectedpage ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
        </View>

        <View style={styles.socials}>
          <TouchableOpacity>
          <Image style={styles.icons} source={require("../../assets/socials/Instagram-full.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.icons} source={require("../../assets/socials/Twitter.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.icons} source={require("../../assets/socials/YouTube.png")} />
          </TouchableOpacity>
          </View>

        <View>
            <Image style={{ marginTop: 2,  marginBottom: 20, alignSelf: "center" }} source={require("../../assets/3.png")}/>
            <Text style={{ fontFamily: "TenorSans", width: 200, textAlign: "center", alignSelf: "center", lineHeight: 27 }}>
                samyung05@gmail.com{'\n'}
                (+234)9060177530 {'\n'}
                08:00 - 22:00 - Everyday
            </Text>
            <Image style={{ marginTop: 20,  marginBottom: 30, alignSelf: "center" }} source={require("../../assets/3.png")}/>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center"}}>
            <View style={{ flexDirection: "row", }}>
            <TouchableOpacity>
            <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity>
        <Text style={{ fontSize: 16, fontFamily: "TenorSans", marginBottom: 30 }}>Blog</Text>
      </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 12, fontFamily: "TenorSans", marginBottom: 8, }}>
          Copyright &copy; Samyung All Rights Reserved.
          </Text>
            </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 0.08,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      padding: 15
    },
    text: {
      fontSize: 16,
      color: 'brown',
    },
    image1: {
        width: 35,
        height:35,
        marginRight: 0,
        marginLeft: -120
    },
    menu: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        paddingHorizontal: 20,
      },

      listHeader: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 10
      },
      listText: {
        fontFamily: "TenorSans",
        marginTop: 20,
        fontSize: 15,
        letterSpacing: 1,
        marginRight: 10
      },
      listText2: {
        fontFamily: "TenorSans",
        marginTop: 20,
        fontSize: 15,
        letterSpacing: 1,
        marginRight: 5,
        marginLeft: 55
      },
      productPrice: {
        color: "#DD8560",
        fontFamily: "TenorSans",
        fontSize: 16,
        marginTop: 10
      },
      
      size1: {
        fontFamily: "TenorSans", 
        fontSize: 14, 
        color: '#555555', 
        alignSelf: "center"
      },

      size: {
        fontFamily: "TenorSans", 
        fontSize: 13, 
        color: '#555555', 
        alignSelf: "center"
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
      page: {
        padding: 5,
        width: 28,
        backgroundColor: "#DEDEDE",
        marginRight: 10,
        textAlign: "center"
      },
      selectedpage: {
        padding: 5,
        width: 28,
        backgroundColor: "#333333",
        marginRight: 10,
        textAlign: "center",
        color: "white"
      },
      socials: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 1,
        marginTop: 10
      },
      icons: {
        marginTop: 30,
        width: 25,
        height: 25,
        marginRight: 20,
        marginBottom: 30,
      },
})

export default ProductList