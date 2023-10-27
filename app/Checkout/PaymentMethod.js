import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const PaymentMethod = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  const [paymentInfo, setPaymentInfo] = useState({
    nameOnCard: "",
    cardNumber: "",
    expMonth: "",
    expiryDate: "",
    cvv: ""
  });

  const isPaymentInfoValid = () => {
    for (const key in paymentInfo) {
      if (!paymentInfo[key]) {
        return false;
      }
    }
    return true;
  };

 
  const handleAddressSave = () => {
    if (isPaymentInfoValid()) {
      console.log("Payment Information:", paymentInfo);

      // Navigate to the Confirmation screen if payment information is valid
      navigation.navigate('Confirmation'); // Use the navigate function to move to the Confirmation screen
    } else {
      console.log("Please fill out all fields");
    }
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

  return (
    <ScrollView style={styles.cartScreen}>
      <View style={styles.cartScreenLeft}>
        <Text style={styles.cartScreenTitle}>PAYMENT METHOD</Text>
        <Image style={{ marginTop: 2, marginBottom: 5 }} source={require("../../assets/3.png")} />
      </View>

      <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
        <Image style={{ width: 370, height: 220 }} source={require("../../assets/card1.png")} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: 320, marginTop: -70 }}>
          <Text style={{ fontFamily: "TenorSans", fontSize: 16, color: "white" }}>{paymentInfo.nameOnCard}</Text>
          <Text style={{ fontFamily: "TenorSans", fontSize: 16, color: "white", marginBottom: 15 }}>{paymentInfo.expiryDate}/{paymentInfo.expMonth}</Text>
        </View>
        <Text style={{ alignSelf: "flex-start", marginLeft: 35, fontFamily: "TenorSans", fontSize: 16, color: "white" }}>
          {paymentInfo.cardNumber}
        </Text>
      </View>

      <TextInput
        style={{
          borderBottomColor: "#979797",
          borderBottomWidth: 1,
          width: 350,
          height: 45,
          marginLeft: 20,
          fontFamily: "TenorSans",
          marginTop: 30
        }}
        underlineColorAndroid="transparent"
        placeholder="Name On Card"
        placeholderTextColor="#979797"
        onChangeText={(text) => setPaymentInfo({ ...paymentInfo, nameOnCard: text })}
      />

      <TextInput
        style={{
          borderBottomColor: "#979797",
          borderBottomWidth: 1,
          width: 350,
          height: 45,
          marginLeft: 20,
          fontFamily: "TenorSans",
          marginTop: 30
        }}
        underlineColorAndroid="transparent"
        placeholder="Card Number"
        placeholderTextColor="#979797"
        onChangeText={(text) => setPaymentInfo({ ...paymentInfo, cardNumber: text })}
      />

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TextInput
          style={{
            borderBottomColor: "#979797",
            borderBottomWidth: 1,
            width: 160,
            height: 45,
            marginLeft: 20,
            fontFamily: "TenorSans"
          }}
          underlineColorAndroid="transparent"
          placeholder="Exp Month"
          placeholderTextColor="#979797"
          onChangeText={(text) => setPaymentInfo({ ...paymentInfo, expMonth: text })}
        />
        <TextInput
          style={{
            borderBottomColor: "#979797",
            borderBottomWidth: 1,
            width: 160,
            height: 45,
            marginLeft: 20,
            fontFamily: "TenorSans",
            marginLeft: 30
          }}
          underlineColorAndroid="transparent"
          placeholder="Expiry Date"
          placeholderTextColor="#979797"
          onChangeText={(text) => setPaymentInfo({ ...paymentInfo, expiryDate: text })}
        />
      </View>

      <TextInput
        style={{
          borderBottomColor: "#979797",
          borderBottomWidth: 1,
          width: 350,
          height: 45,
          marginLeft: 20,
          fontFamily: "TenorSans",
          marginTop: 30
        }}
        underlineColorAndroid="transparent"
        placeholder="CVV"
        placeholderTextColor="#979797"
        onChangeText={(text) => setPaymentInfo({ ...paymentInfo, cvv: text })}
      />

      <View style={styles.cartScreenRight}>
        <TouchableOpacity
          style={{ backgroundColor: "black", padding: 25, width: 400, marginLeft: -20, flexDirection: "row", justifyContent: "center" }}
          onPress={handleAddressSave}
        >
          <Image style={{ width: 25, height: 25, marginTop: -5, marginRight: 15 }} source={require("../../assets/shopping.png")} />

          <Text style={styles.continue}>ADD CARD</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cartScreen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "white",
    marginBottom: 0
  },
  cartScreenLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  cartScreenTitle: {
    fontSize: 16,
    fontFamily: "TenorSans",
    paddingTop: 15,
    letterSpacing: 2
  },
  cartScreenRight: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    marginTop: 55
  },
  cartScreenInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  continue: {
    fontFamily: "TenorSans",
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
  container: {
    backgroundColor: '#white',
    flex: 0.08,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 15
  },
  menu: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});

export default PaymentMethod;
