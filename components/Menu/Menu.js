import React, { useState, useEffect } from "react";
import { Text, Image, View, ScrollView, TouchableOpacity, StyleSheet, Modal } from "react-native";
import * as Font from "expo-font";
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [selectedItem, setSelectedItem] = useState(1);
    const navigation = useNavigation();

    const menuItems = [
        { id: 1, label: 'WOMEN' },
        { id: 2, label: 'MEN' },
        { id: 3, label: 'KIDS' }
      ];

      const womenItems = [
        { id: 1, label: 'New' },
        { id: 2, label: 'Apparel' },
        { id: 3, label: 'Bags' },
        { id: 4, label: 'Shoes' },
        { id: 5, label: 'Beauty' },
        { id: 6, label: 'Accessories' }
      ];

      const menItems = [
        { id: 1, label: 'Watches' },
        { id: 2, label: 'Sunglasses' },
        { id: 3, label: 'Leather Belt' },
        { id: 4, label: 'Neckties' },
        { id: 5, label: 'Cufflinks' },
        { id: 6, label: 'Pocket Squares' }
      ];

      const kidItems = [
        { id: 1, label: 'Accessories' },
        { id: 2, label: 'Apparel' },
        { id: 3, label: 'Pajamas' },
        { id: 4, label: 'Scarves and Gloves' },
        { id: 5, label: 'Cufflinks' },
        { id: 6, label: 'Sunglasses' }
      ];

      const handleMenuItemClick = (item) => {
        setSelectedItem(item);
      };
   
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

    return (
        <>
        <View style={styles.menuContainer}>
            {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleMenuItemClick(item.id)}
          >
            <Text style={ [styles.header, selectedItem === item.id && styles.selectedlist ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}

        
        </View>
        <View style={{ flexDirection: "column",  marginLeft: 10, marginTop: 40 }} >
        {selectedItem === 1 && (
  <>
    {womenItems.map((item) => (
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate('ProductList')}
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <Text style={styles.menudrop}>{item.label}</Text>
        <Image style={{ width: 25, height: 25, marginTop: -3 }} source={require("../../assets/Forward.png")} />
      </TouchableOpacity>
    ))}
  </>
)}

{selectedItem === 2 && (
          <>
            {menItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('ProductList')}
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <Text style={styles.menudrop}>{item.label}</Text>
                <Image style={{ width: 25, height: 25, marginTop: -3 }} source={require("../../assets/Forward.png")} />
              </TouchableOpacity>
            ))}
          </>
                )}
              

                {selectedItem === 3 && (
                   <>
                   {kidItems.map((item) => (
                     <TouchableOpacity
                       key={item.id}
                       style={{ flexDirection: "row", justifyContent: "space-between" }}
                     >
                       <Text style={styles.menudrop}>{item.label}</Text>
                       <Image style={{ width: 25, height: 25, marginTop: -3 }} source={require("../../assets/Forward.png")} />
                     </TouchableOpacity>
                   ))}
                 </>
                )}
            </View>
      


    {/* Contact */}
    <View style={{marginTop: 20, marginLeft: 10}}>
        <Text style={styles.menudrop}> 
        <Image style={{width: 20, height: 20, marginRight: 20 }} source={require("../../assets/Call.png")} />  
           (786) 713-8616
        </Text>
        <Text style={styles.menudrop}>
        <Image style={{width: 20, height: 20, marginRight: 20 }} source={require("../../assets/Location.png")} />
            Store Locator
          </Text>
    </View>
    {/* Social Icons */}
    <Image style={{ alignSelf: "center", marginTop: 10,  marginBottom: 5 }} source={require("../../assets/3.png")}/>
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
    </>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
    },
    header: {
        fontFamily: "TenorSans",
        marginRight: 55,
        fontSize: 15,
        marginTop: 20,
        marginLeft: 10,
      color: "#9E9E9E",
      letterSpacing: 2
    },
    selectedlist: {
        color: "#000000",
      borderBottomWidth: 3,
      borderBottomColor: '#DD8560',
      paddingBottom: 5,
      borderBottomEndRadius: 50,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      borderBottomStartRadius: 50
    },
    menudrop: {
        fontFamily: "TenorSans",
        fontSize: 15,
        marginBottom: 35,
    },
    
    socials: {
        flexDirection: "row",
        marginBottom: 1,
        alignSelf:  "center",
        marginLeft: 30
      },
      icons: {
        marginTop: 25,
        width: 25,
        height: 25,
        marginRight: 30,
        marginBottom: 30,
      }
})

export default Menu