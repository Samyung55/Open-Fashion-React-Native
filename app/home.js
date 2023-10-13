import { Text, Image, View, ScrollView } from "react-native";
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero";
import Arrival from "../components/Arrival/Arrival";

const Home = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
        <Navbar />
        <Hero />
        <Arrival />
        </ScrollView>
    )
}

export default Home