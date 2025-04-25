import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart} from '../redux/slices/cartSlice';

export default function CartScreen() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>${item.price}</Text>
            <TouchableOpacity onPress={() => dispatch(removeFromCart(item))}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text>Your cart is empty.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  item: {
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
  },
  title: {fontSize: 16, fontWeight: 'bold'},
  remove: {color: 'red', marginTop: 5},
});
