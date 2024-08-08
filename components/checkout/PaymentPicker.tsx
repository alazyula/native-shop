import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react'

const PaymentPicker = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([
        {label: 'Kredi Kartı', value: 'Kredi Kartı'},
        {label: 'Nakit', value: 'Nakit'},
        
      ])
  return (

    <View style={styles.outerContainer}>

        <View style={styles.horizontalContainer}>
            <Text style = {styles.Text}>  Ödeme Seçiniz </Text>
       
        </View>
 
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={'Ödeme Seçiniz'}
        />
    
    </View>
  )
}

export default PaymentPicker

const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
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
    buttonText: {
        backgroundColor: '#0a7ea4',
       
    },
    Text: {
        fontSize: 16,
        textAlign: 'center',
       
    },
})