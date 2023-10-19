import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';


import BlogScreen from '../../app/Blog/blog'; // Import the Blog.js screen



const About = ({ navigation }) => {
    const [fontLoaded, setFontLoaded] = useState(false);

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
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/open.png")} />
            <Text style={styles.description}>Making a luxurious lifestyle accessible for a generous group of women is our daily drive</Text>
            <Image style={{ alignSelf: "center", marginTop: 10,  marginBottom: 35 }} source={require("../../assets/3.png")}/>
            <View style={styles.aboutContainer}>
            <View>
                <Image style={styles.miroodles} source={require("../../assets/miroodles/miroodles-1.png")} />
                <Text style={styles.aboutText}>
                  Fast Shipping. Free on orders over $25
                </Text>
            </View>
            <View>
                <Image style={styles.miroodles} source={require("../../assets/miroodles/miroodles-2.png")} />
                <Text style={styles.aboutText}>
                Sustainable process from start to finish.
                </Text>
            </View>
            <View>
                <Image style={styles.miroodles} source={require("../../assets/miroodles/miroodles-3.png")} />
                <Text style={styles.aboutText}>
                Unique designs and high-quality materials.
                </Text>
            </View>
            <View>
                <Image style={styles.miroodles} source={require("../../assets/miroodles/miroodles-4.png")} />
                <Text style={styles.aboutText}>
                Fast shipping. Free on orders over $25.
                </Text>
            </View>
            </View>
            <Image style={styles.miroodles2} source={require("../../assets/miroodles/miroodles-5.png")} />
          <View>
            <Text style={styles.follow}>FOLLOW US</Text>
            <Image style={styles.instagram1} source={require("../../assets/socials/Instagram.png")} />
          </View>
          <View style={styles.teamwrap}>
            <TouchableOpacity>
            <Image style={styles.team} source={require("../../assets/team/team1.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.team} source={require("../../assets/team/team2.png")} />
            </TouchableOpacity>
            </View>
            <View style={styles.teamwrap}>
            <TouchableOpacity>
            <Image style={styles.team} source={require("../../assets/team/team3.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.team} source={require("../../assets/team/team4.png")} />
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
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F2"
    },
    logo: {
        width: 132,
        height: 53,
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 40,
    },
    description: {
        fontFamily: "TenorSans",
        color: "#555555",
        width: 300,
        alignSelf: "center",
        textAlign: "center"
    },
    aboutContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 300,
      marginBottom: 10
    },
    miroodles: {
      width: 40,
      height: 40,
      alignSelf: "center",
      marginBottom: 12
    },
    aboutText: {
      width: 150,
      textAlign: 'center',
      marginBottom: 25,
      fontFamily: "TenorSans",
      fontSize: 13
    },
    miroodles2: {
      width: 70,
      height: 40,
      alignSelf: "center",
      marginBottom: 12
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
      marginBottom: 1,
      marginTop: 20
    },
    icons: {
      marginTop: 30,
      width: 25,
      height: 25,
      marginRight: 20,
      marginBottom: 30,
    }
})

export default About