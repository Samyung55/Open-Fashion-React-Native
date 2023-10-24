import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useCartContext } from '../../contexts/cartContext';
import * as cartActionTypes from '../../contexts/utils/cart';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


const CartItem = () => {
  const { cart, dispatch } = useCartContext();
  const { cartItems } = cart;
  const navigation = useNavigation();

  if (cartItems.length === 0) {
    return (
      <View>
        <Text style={styles.noitems}>You have no items in your Shopping Bag.</Text>
        <TouchableOpacity style={{ backgroundColor: "black", padding: 25, width: 400, marginLeft: -10, flexDirection: "row", justifyContent: "center" }} 
        onPress={() => navigation.navigate('ProductList')}>
          <Image style={{ width: 25, height: 25, marginTop: -5, marginRight: 15}} source={require("../../assets/shopping.png")} />
          <Text style={styles.continue}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = (cartItem) => {
    const { id, name: productName, imageUrl, price, countInStock, quantity } = cartItem;

    return (
      <View style={styles.cartItem} key={id}>
        <Image source={imageUrl} style={styles.cartItemImage} />

        <TouchableOpacity onPress={() => navigation.navigate('Product', { productId: id })}>
          <Text style={styles.cartItemName}>{productName}</Text>
        </TouchableOpacity>
        <Text style={styles.cartItemPrice}>${price}</Text>

        <Picker
  selectedValue={quantity}
  style={styles.cartItemSelect}
  onValueChange={(itemValue) => {
    dispatch({
      type: cartActionTypes.ADD_TO_CART,
      payload: {
        id,
        name: productName,
        imageUrl,
        price,
        countInStock,
        quantity: parseInt(itemValue),
      },
    });
  }}
>
  {[...Array(countInStock).keys()].map((x) => (
    <Picker.Item key={x + 1} value={x + 1} label={`${x + 1}`} />
  ))}
</Picker>

        <TouchableOpacity
          style={styles.cartItemDeleteBtn}
          onPress={() => {
            dispatch({ type: cartActionTypes.REMOVE_FROM_CART, payload: id });
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return <View>{cartItems.map(renderItem)}</View>;
};

const styles = {
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cartItemImage: {
    width: 100,
    height: 100,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
  },
  cartItemSelect: {
    width: 100,
  },
  cartItemDeleteBtn: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  noitems: { 
    fontFamily: "TenorSans", 
    textAlign: "center", 
    marginTop: 300, 
    marginBottom: 300, 
    color: "#9F9E9E" 
},
continue: {
    fontFamily: "TenorSans",
    fontSize: 16,
    textAlign: "center",
    color: "white"
}
};

export default CartItem;
