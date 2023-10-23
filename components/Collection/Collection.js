import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import * as Font from 'expo-font';
    import { useNavigation } from '@react-navigation/native';
    import { ProductContext } from "../../contexts/productContext";

const Collection = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const { forYou, setForYou } = useContext(ProductContext);
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
        <>
        <View style={styles.container}>
            <Text style={{ fontFamily: "TenorSans", fontSize: 18, color: "#202224", letterSpacing: 5,}}>
                COLLECTIONS
            </Text>
            <Image style={{ marginTop: 28, width: 400, height: 250 }} source={require("../../assets/collection.png")} />
            <Image style={{ marginTop: 48, height: 300, width: 300 }} source={require("../../assets/autumn.png")} />
            <Image style={{ marginTop: 48, width: 400, height: 200 }} source={require("../../assets/video.png")} />
        </View>
        <View style={styles.container}>
        <Text style={{ fontFamily: "TenorSans", fontSize: 20, color: "#202224", marginTop: 35, letterSpacing: 5,}}>
                JUST FOR YOU
        </Text>
        <Image style={{ marginTop: 2,  marginBottom: 35 }} source={require("../../assets/3.png")}/>
        </View>

        <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productContainer}
                onScroll={(event) => {
                    const slideWidth = 300; // Adjust this value based on your product item width
                    const currentSlide = Math.floor(event.nativeEvent.contentOffset.x / slideWidth);
                    setActiveSlide(currentSlide);
                }}
                pagingEnabled
            >
                {forYou.map((product, index) => (
                    <TouchableOpacity style={styles.productRow} key={index} onPress={() => navigation.navigate("SingleForYou", { selectedProductIndex: index })}>
                       <View style={styles.productColumn}>
                    <Image source={product.image} style={styles.productImage} />
                    <Text style={styles.productName}>{product.desc}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.dotsContainer}>
                {forYou.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === activeSlide ? "#9F9E9E" : "white",
                         }
                        ]}
                    />
                ))}
            </View>
            <View>
                <Text style={{ marginTop: 30, fontFamily: "TenorSans", fontSize: 20, marginBottom: 20, letterSpacing: 8, textAlign: "center" }}>@TRENDING</Text>
                <View style={styles.trendingcontainer}>
                    <Text style={styles.trending}>#collection</Text>
                    <Text style={styles.trending}>#spring</Text>
                    <Text style={styles.trending}>#2023</Text>
                    <Text style={styles.trending}>#fall</Text>
                    <Text style={styles.trending}>#dress</Text>
                    <Text style={styles.trending}>#autumncollection</Text>
                    <Text style={styles.trending}>#openfashion</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
        marginTop: 20
    },
    productContainer: {
        flexDirection: "row",
        margin: 20,
        marginLeft: 10,
        marginTop: 0
    },
    productColumn: {
        marginLeft: 10,
        alignItems: "center"
    },
    productName: {
        fontFamily: "TenorSans",
        fontSize: 18,
        padding: 2,
        width: 250,
        textAlign: "center",
        marginBottom: 4,
        lineHeight: 22,
        marginTop: 10
      },
      price: {
        fontFamily: "TenorSans",
        fontSize: 20,
        color: "#DD8560",
        marginBottom: 10,
        textAlign: "center"
      },
      productImage: {
       height: 370, 
        width: 300
      },
      dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: -8,
    },
    dot: {
        width: 7,
        height: 7,
        transform: [{ rotate: '45deg' }],
        marginHorizontal: 5,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: "#9F9E9E",
        borderCurve: 30
    },
    trendingcontainer: {
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "row",
        flexWrap: "wrap",
        width: 350,
        marginLeft: 30,
        marginBottom: 20
    },
    trending: {
        marginRight: 25,
        lineHeight: 30,
        textAlign: "left",
        fontFamily: "TenorSans"
    }
})

export default Collection