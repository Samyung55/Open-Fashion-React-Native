import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Font from 'expo-font';

const Arrival = () => {

    const [fontLoaded, setFontLoaded] = useState(false);
    const [selectedItem, setSelectedItem] = useState(1);

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
        <View style={{ justifyContent: "center", alignItems: "center" }}> 
            <Text style={styles.arrival}>
                NEW ARRIVAL
            </Text>
            <Image style={styles.borderImg} source={require("../../assets/3.png")} />
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
              {menuItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleMenuItemClick(item.id)}
                  style={[
                    styles.arrivalList,
                  ]}
                >
                  <Text style={[styles.arrivalHead, selectedItem === item.id && styles.selectedArrivalList ]}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
        </View>
      </>
    )
}

const styles = StyleSheet.create({
    arrival: {
        fontFamily: "TenorSans",
        fontSize: 18,
        padding: 20,
        alignSelf: "center",
        marginTop: 35,
    },
    borderImg: {
        marginBottom: 30,
        marginTop: -20
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
})

export default Arrival;
