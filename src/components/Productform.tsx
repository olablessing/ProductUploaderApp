import React, { useState } from 'react';
import { Button, Image, StyleSheet, TextInput, View } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'; // Import the library
import { Product } from '../types';

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<string | null>(null); // Store image URI

const handleImagePick = () => {

launchCamera( {
  mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
  }, (response) => {
    if (!response.didCancel && response.assets && response.assets.length > 0) {
      const selectedImageUri = response.assets[0].uri;
      setImage(selectedImageUri || null); // Set image URI or null
    }
  });
};

  

  const handleAddProduct = () => {
    const newProduct: Product = {
      name,
      price: parseFloat(price),
      image, // Assign the selected image URI
    };
    onAddProduct(newProduct);
    setName('');
    setPrice('');
    setImage(null);
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Pick Image" onPress={handleImagePick} />
      <TextInput
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default ProductForm;
