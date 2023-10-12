import { View, Text, StyleSheet, Image, Button } from "react-native";

const Navbar = () => {
   return (
    <View style={styles.container}>
  <Image style={styles.image} source={require("../../assets/menu.png")} />
  <Text style={styles.text}>This is Navbar</Text>
  
</View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E7EAEF',
      flex: 0.08,
      justifyContent: "center",
      flexDirection: "row"
    },
    text: {
      fontSize: 16,
      color: 'brown',
    },
    image: {
        width: 50,
        height: 50
    }
  });
  

export default Navbar

