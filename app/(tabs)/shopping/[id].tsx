import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Button } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react'

const Id = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    {label: 'Altın', value: 'Altın'},
    {label: 'Gümüş', value: 'Gümüş'},
    {label: 'Beyaz', value: 'Beyaz'},
    {label: 'Siyah', value: 'Siyah'},
  ])
  return (
    <View style={styles.outerContainer}>
      <Image source={{uri: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111943_iphone7-rosegold.png'}} style={styles.Image} />
      <Text style={styles.TitleText}> Ayfon 7 128GB</Text>
      <Text style={styles.Text}> Epıl markasının çıkardığı son telefon  </Text>
      <View style={styles.dropDownContainer}>
        <DropDownPicker
          style={styles.DropDownPicker}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={'Renk Seçiniz'}
        />
      </View>
      <Pressable style={styles.Button}>
        <Text style={styles.ButtonText}> 5000TL </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  Image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  TitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  Text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  dropDownContainer: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  DropDownPicker: {
    width: '100%',
  },
  Button: {
      backgroundColor: '#0a7ea4',
      padding: 10,
      alignItems: 'center',
      marginVertical: 10,
      borderRadius: 4,
  },
  ButtonText : {
    color: 'white',
  },
})

export default Id