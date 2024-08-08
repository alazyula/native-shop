import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from './CartItem'
import { ButtonColor } from '@/constants/ButtonColor'
import { useRouter } from 'expo-router'


export default function Cart()  {
  const router = useRouter()
  function redirectToCheckout() {
    router.push('/cart/checkout')
  }
  return (
    <View style={styles.Container}>

        <Text style={styles.TitleText}>Sepetim</Text>
        <CartItem/>
        <CartItem/>
        <CartItem/>

      <Pressable style={styles.Button} onPress={redirectToCheckout}>
        <Text style={{ color: 'white' }}>Satın Al</Text>
      </Pressable>
     
    </View>
  )
}

const styles = StyleSheet.create({

Container : {
    flex: 1,
    flexDirection: 'column',
    
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    
}
,
TitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 30,
},
Button: {
    backgroundColor: ButtonColor,
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
},



})