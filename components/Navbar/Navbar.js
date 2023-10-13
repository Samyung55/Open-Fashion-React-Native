import { View, Text, StyleSheet, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Navbar = () => {
   return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image style={{ width: 35, height: 27, marginLeft: -10 }} source={require("../../assets/menu.png")} />
        </TouchableOpacity>
        
            <Image style={{ width: 100, height: 65, marginLeft: 70, marginRight: 20  }} source={require("../../assets/logo.png")} />
        
        <TouchableOpacity>
        <Image style={{ width: 25, height: 25, marginLeft: 40  }} source={require("../../assets/search.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width: 22, height: 25, marginLeft: 25 }} source={require("../../assets/shopping-bag.png")} />
        </TouchableOpacity>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E7EAEF',
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
    }
  });
  

export default Navbar

