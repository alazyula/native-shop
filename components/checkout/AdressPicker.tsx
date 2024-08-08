import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react'
import { ButtonColor } from '@/constants/ButtonColor'

const AdressPicker = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([
        {label: 'İş', value: 'İş'},
        {label: 'Ev', value: 'Ev'},
       
      ])
  return (
    <View style={styles.OuterContainer}>

        <View style={styles.HorizontalContainer}>
            <Text style={styles.Text}>  Adres Seçiniz </Text>
            <Pressable>
                <Text style={styles.ButtonText}>+</Text>
            </Pressable>
        </View>
 
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
     
    </View>
  )
}

export default AdressPicker

const styles = StyleSheet.create({
    OuterContainer: {
        
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        marginBottom: 20,
    },
    HorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20,
    },
    ButtonText: {
       color: ButtonColor,
       fontSize: 24,
        
    },
    Text: {
        fontSize: 16,
        textAlign: 'center',
       
    },
})