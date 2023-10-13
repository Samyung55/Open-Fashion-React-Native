import react, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Font from 'expo-font';

const Arrival = () => {

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
      return null; // Wait for the font to load before rendering
    }

    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}> 
            <Text style={styles.arrival}>
                NEW ARRIVAL
            </Text>
            <Image style={styles.borderImg} source={require("../../assets/3.png")} />
        </View>
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
        marginBottom: 35,
        marginTop: -20
    }
})

export default Arrival