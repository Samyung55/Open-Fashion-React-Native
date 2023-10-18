import React, { useState, useEffect} from "react";
import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero";
import Arrival from "../components/Arrival/Arrival";
import { ProductContextProvider } from "../contexts/productContext"
import Collection from "../components/Collection/Collection";
import About from "../components/About/About";
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadCustomFonts() {
          await Font.loadAsync({
            'BodoniModa-BoldItalic': require('../assets/fonts/BodoniModa_28pt-BoldItalic.ttf'),
            'TenorSans': require("../assets/fonts/TenorSans-Regular.ttf"),
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
        <ScrollView style={{ flex: 1 }}>
        <Navbar />
        <Hero />
        <ProductContextProvider>
            <Arrival />
            <Collection />
            </ProductContextProvider>
            <About />

            <View style={{ justifyContent: "center", alignItems: "center"}}>
            <View style={{ flexDirection: "row", }}>
            <TouchableOpacity>
            <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{ marginRight: 40, fontSize: 16, fontFamily: "TenorSans" }}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Blog')}>
        <Text style={{ fontSize: 16, fontFamily: "TenorSans", marginBottom: 30 }}>Blog</Text>
      </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 12, fontFamily: "TenorSans", marginBottom: 8, }}>
          Copyright &copy; Samyung All Rights Reserved.
          </Text>
            </View>
        </ScrollView>
        </>
    )
}

export default Home