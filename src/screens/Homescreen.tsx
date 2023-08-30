import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import ProductForm from '../components/Productform';
import ProductList from '../components/Productlist';
import { Product } from '../types/Index';



const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const maxProductCount = 5;

  
const handleAddProduct = (product: Product) => {
  if (products.length < maxProductCount) {
    setProducts([...products, product]);
  } else {
    Alert.alert('Maximum number of products added.');
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Uploader App</Text>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
