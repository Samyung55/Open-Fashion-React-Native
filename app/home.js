import { Text, Image, View, ScrollView } from "react-native";
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero";
import Arrival from "../components/Arrival/Arrival";
import { ProductContextProvider } from "../contexts/productContext"
import Collection from "../components/Collection/Collection";
import About from "../components/About/About";


const Home = () => {
    return (
        
        <ScrollView style={{ flex: 1 }}>
        <Navbar />
        <Hero />
        <ProductContextProvider>
            <Arrival />
            <Collection />
            </ProductContextProvider>
            <About />
        </ScrollView>
    )
}

export default Home