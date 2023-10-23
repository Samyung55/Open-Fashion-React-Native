import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import * as Font from 'expo-font';
import { ProductContext } from "../../contexts/productContext";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from '@react-navigation/native';
import Navbar from "../../components/Navbar/Navbar";

const BlogPost = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    const [isMenuVisible, setMenuVisible] = useState(false);
    const { blogs } = useContext(ProductContext);

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

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
      };

    if (!blogs || blogs.length === 0) {
        return null; 
    }

    const route = useRoute();
    const selectedBlogIndex = route.params.selectedBlogIndex;

    const selectedBlog = blogs[selectedBlogIndex];

    return (
        <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
            {/* Navbar */}
            <Navbar />

            {/* Blog Details */}
            <Image style={styles.blogimg} source={selectedBlog.image} />
            <Text style={styles.blogtitle}>{selectedBlog.title}</Text>
            <Text style={styles.blogdesc}>{selectedBlog.description}</Text>
            <Image style={styles.blogimg2} source={selectedBlog.image2} />
            <Text style={styles.blogdesc}>{selectedBlog.description2}</Text>
            <Text style={styles.blogdesc}>Posted by {selectedBlog.creator} | {selectedBlog.time} </Text>
            <Text style={styles.blogtag}>{selectedBlog.tags}</Text>

            {/* Footer */}
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
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 0.08,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      padding: 15
    },
    blogimg: {
        width: 400,
        height: 250
    },
    blogtitle: {
        fontFamily: "TenorSans",
        fontSize: 14,
        padding: 20,
    },
    blogdesc: {
        padding: 20,
        fontSize: 15,
        fontFamily: "TenorSans",
        marginRight: 10,
        marginTop: -30,
        color: "#333333",
        lineHeight: 23
    },
    blogimg2: { 
        width: 350, 
        height: 500, padding: 20, 
        alignSelf: "center", 
        marginBottom: 25,
        color: "#555555"
    },
    blogtag: {
        fontFamily: "TenorSans",
        fontSize: 14,
        padding: 20,
        color: "#9F9E9E",
        marginTop: -25
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
})

export default BlogPost