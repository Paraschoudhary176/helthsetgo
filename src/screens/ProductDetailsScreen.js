import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/slices/cartSlice';

export default function ProductDetailsScreen({route}) {
  const {product} = route.params;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(addToCart(product))}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  image: {width: '100%', height: 300, resizeMode: 'contain'},
  title: {fontSize: 24, fontWeight: 'bold', marginVertical: 10},
  price: {fontSize: 20, color: '#007bff', marginBottom: 10},
  description: {fontSize: 16, color: '#555', marginBottom: 20},
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: 'bold'},
});
