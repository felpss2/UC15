import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type ProductDetailsRouteProp = RouteProp<
  { Details: { product: any } },
  "Details"
>;

const ProductDetails = () => {
  const route = useRoute<ProductDetailsRouteProp>(); // Hook para acessar parâmetros
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Preço: ${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
  },
});

export default ProductDetails;
