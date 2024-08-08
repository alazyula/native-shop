import { Image, StyleSheet, Platform,SafeAreaView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ItemGrid from '@/components/Products/ItemGrid';
import { TestImageLink } from '@/constants/TestImageLink';

export default function HomeScreen() {
  
  const data = [
    { id: 1, image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111943_iphone7-rosegold.png', name: 'Ayfon 7 128GB', price: '5000 TL' },
    { id: 2, image: TestImageLink, name: 'Ayfon 23 MaxPro 256TB', price: '200000 TL' },
    // Add more items here
  ];

  return (
   < SafeAreaView style= {styles.Container}>
      <ItemGrid data={data} />

   </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
 Container: {
  flex: 1,
 }
});
