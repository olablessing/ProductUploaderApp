import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id?.toString() ?? ''}
     renderItem={({ item }) => (
  <View style={styles.productContainer}>
    <Image
      source={{ uri: item.image || '' }} // Provide a default empty string
      style={styles.productImage}
    />
    <View>
      <Text>{item.name}</Text>
      <Text>Price: ${item.price.toFixed(2)}</Text>
    </View>
  </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default ProductList;
