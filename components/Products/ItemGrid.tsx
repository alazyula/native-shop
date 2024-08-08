import { Link } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import ItemCard from './ItemCard';

interface Item {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface ItemGridProps {
  data: Item[];
}

const ItemGrid = ({ data }: ItemGridProps) => {
  const id = 2
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <Link href={`/shopping/1`}>
          <ItemCard image={item.image} name={item.name} price={item.price} />
        </Link>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default ItemGrid;
