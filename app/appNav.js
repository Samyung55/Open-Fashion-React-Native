import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../components/About/About';
import Home from './home';
import BlogScreen from './Blog/blog';
import { ProductContextProvider } from "../contexts/productContext";
import BlogPost from "./Blog/blogPost"
import Menu from './../components/Menu/Menu';
import ProductList from '../components/ProductList/ProductList';
import SingleProduct from './../components/SingleProduct/SingleProduct';
import SingleArrival from '../components/SingleProduct/SingleArrival';
import SingleForYou from '../components/SingleProduct/SingleForYou';
import Cart from './CartScreen/Cart';
import { CartProvider } from '../contexts/cartContext';
import Collection from './Collection/Collection';
import Checkout from './Checkout/Checkout';
import PlaceOrder from './Checkout/PlaceOrder';
import AddNow from './Checkout/AddNow';
import PaymentMethod from './Checkout/PaymentMethod';
import Confirmation from './Checkout/Confirmation';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    
    <ProductContextProvider>
      <CartProvider>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Post" component={BlogPost} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
        <Stack.Screen name="SingleArrival" component={SingleArrival} />
        <Stack.Screen name="SingleForYou" component={SingleForYou} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Collection" component={Collection} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="AddNow" component={AddNow} />
        <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>
      </CartProvider>
      </ProductContextProvider>
  );
};

export default AppNavigator;
