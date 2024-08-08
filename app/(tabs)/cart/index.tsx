import { Image, StyleSheet, Platform,SafeAreaView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ItemGrid from '@/components/Products/ItemGrid';
import Cart from '@/components/cart/Cart';


export default function HomeScreen() {
  
 

  return (
   < SafeAreaView style= {styles.Container}>
      
      <Cart/>
     

   </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
 Container: {
  flex: 1,
 }
});
