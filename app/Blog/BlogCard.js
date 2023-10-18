import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { ProductContext } from "../../contexts/productContext";
import Navbar from "../../components/Navbar/Navbar";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";


const BlogCard = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const { blogs, setBlogs } = useContext(ProductContext);
  const [selectedItem, setSelectedItem] = useState(1);

  const [filteredProducts, setFilteredProducts] = useState([]);

    // ...
    
    useEffect(() => {
      let filteredProducts = [];
    
      if (selectedItem === 1) {
    
        filteredProducts = blogs.slice(0, 4);
    
      } else {
    
        filteredProducts = blogs.filter((blog) => blog.category === menuItems[selectedItem - 1].label);
      
      }
    
      setFilteredProducts(filteredProducts);
    }, [selectedItem, blogs]);
    
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
        <>
        {filteredProducts.map((blog, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('Post')}>
        <View style={{ padding: 20, marginTop: 20, overflow: "hidden" }}>
            <ImageBackground source={blog.image}>
                <TouchableOpacity>
                <Image style={styles.bookmark} source={require("../../assets/blogs/bookmark.png")} />
                </TouchableOpacity>
                <View style={styles.blogGradient}>
                <LinearGradient
                    colors={['transparent', 'black']}
                    start={{ x: 0, y: 0 }} // Adjust the starting point (0,0 is top-left corner)
                    end={{ x: 0, y: 1}}
                    style={styles.gradient}>
                    <Text style={styles.blogTitle}>
                        {blog.title}
                    </Text>
                    </LinearGradient>
                </View>
            </ImageBackground>
        </View>
        <View style={styles.blogFooter}>
            <View style={{ flexDirection: "row"}}>
            <Text style={{ fontFamily: "TenorSans", fontSize: 14, color: "#9F9E9E", marginRight: 5, justifyContent: "space-between"}}>{blog.tags} </Text>
            </View>
            <Text style={{ fontFamily: "TenorSans", fontSize: 14, color: "#9F9E9E", marginRight: 22}}>{blog.time}</Text>
        </View>
        </TouchableOpacity>
        ))}
        
        
        </>
    )

    }

    const styles = StyleSheet.create({
        blogGradient: {
            padding: 20, 
            marginTop: 80,
            overflow: "hidden",
        },
        bookmark: {
            width: 25,
            height: 25,
            alignSelf: "flex-end",
            margin: 10,
        }, 
        gradient: {
            height: 80,
            width: 360,
            marginLeft: -20,
            marginBottom: -20
        },
        blogTitle: {
            fontFamily: "TenorSans",
            fontSize: 17,
            padding: 15,
            color: "white",
            marginTop: 5,
            lineHeight: 24
        },
        blogFooter: {
            flexDirection: "row",
            marginLeft: 20,
            justifyContent: "space-between"
        }
    })

    export default BlogCard

