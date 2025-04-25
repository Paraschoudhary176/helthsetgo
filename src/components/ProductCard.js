import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ProductCard = ({product, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{uri: product.image}} style={styles.image} />
    <Text numberOfLines={1} style={styles.title}>
      {product.title}
    </Text>
    <Text style={styles.price}>${product.price}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    color: '#007bff',
    marginTop: 5,
  },
});

export default ProductCard;
