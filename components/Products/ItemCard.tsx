// ItemCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ItemCardProps {
  image: string;
  name: string;
  price: string;
}

const ItemCard = ({ image, name, price }: ItemCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    maxWidth: '40%',
  },
  image: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ItemCard;
