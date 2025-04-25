import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function ProductsScreen({navigation}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={{marginRight: 10, fontWeight: 'bold', color: '#007bff'}}>
            🛒 ({cart.length})
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, cart]);

  if (loading)
    return <ActivityIndicator style={{flex: 1}} size="large" color="#007bff" />;

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <ProductCard
          product={item}
          onPress={() => navigation.navigate('ProductDetails', {product: item})}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {padding: 10},
});
