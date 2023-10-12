import { Text, Image, View } from "react-native";
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero";

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
        <Navbar />
        <Hero />
        </View>
    )
}

export default Home