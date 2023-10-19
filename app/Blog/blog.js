import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import * as Font from 'expo-font';
import Navbar from "../../components/Navbar/Navbar";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import BlogCard from "./BlogCard";
import { ProductContext } from "../../contexts/productContext";
import { ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Menu from "../../components/Menu/Menu";

const BlogScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { blogs, setBlogs } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };


 const menuItems = [
    { id: 1, label: 'Fashion' },
    { id: 2, label: 'Promo' },
    { id: 3, label: 'Policy' },
    { id: 4, label: 'Lookbook' },
    { id: 5, label: 'Sale' },
    
  ];

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
            <Menu />
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Menu Lists */}
      <View>
      <Text style={{ fontFamily: "TenorSans", fontSize: 20, alignSelf: "center", marginTop: 45, letterSpacing: 5}}>BLOG</Text>
      
      <Image style={{ alignSelf: "center", marginTop: 5,  marginBottom: 35 }} source={require("../../assets/3.png")}/>
      <View style={styles.menuList}>
      {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleMenuItemClick(item.id)}>
          <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
          ))}
          
      </View>
    </View>

      {/* Blog Cards */}
    {filteredProducts.map((blog, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('Post', { selectedBlogIndex: index })}>
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
        
    <View style={{  alignSelf: "center", margin: 20, borderWidth: 1, borderColor: "#DEDEDE", marginTop: 50}}>
      <TouchableOpacity style={{flexDirection: "row", padding: 15 }}>
      <Text style={{ fontFamily: "TenorSans", fontSize: 20, letterSpacing: 4}}>
        LOAD MORE  
      </Text>
      <Image style={{width: 20, height: 23, marginLeft: 10 }} source={require("../../assets/plus.png")} />
      </TouchableOpacity>
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
  menuList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,

  },
  menuText: {
    fontFamily: "TenorSans",
    fontSize: 14,
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 15
  },
  
  follow: {
    marginTop: 30,
    fontSize: 18,
    fontFamily: "TenorSans",
    letterSpacing: 5
  },
  instagram1: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  teamwrap: {
    flexDirection: "row",
    width: 310,
  },
  team: {
    width: 150,
    height: 150,
    marginTop: 15,
    marginRight: 15
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
},
menu: {
  flex: 1,
  backgroundColor: "white", // Change this to your menu background color
  paddingTop: 50,
  paddingHorizontal: 20,
},
});


export default BlogScreen