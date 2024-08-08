import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import AdressPicker from '@/components/checkout/AdressPicker'
import PaymentPicker from '@/components/checkout/PaymentPicker'

const checkout = () => {
  return (
    <View style={styles.outerContainer}>
        <Text style={styles.title}>Ödeme</Text>
      <AdressPicker />
      <PaymentPicker />
        <Pressable style={styles.button}>
            <Text style={{ color: 'white' }}>Satın Al</Text>
        </Pressable>


    </View>
  )
}

export default checkout

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
    },
    verticalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
 button: {
        backgroundColor: '#0a7ea4',
        padding: 10,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
  title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 30,
    },

})