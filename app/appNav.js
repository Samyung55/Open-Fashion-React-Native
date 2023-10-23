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

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    
    <ProductContextProvider>
      <Stack.Navigator initialRouteName="SingleProduct" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Post" component={BlogPost} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
      </Stack.Navigator>
      </ProductContextProvider>
  );
};

export default AppNavigator;
