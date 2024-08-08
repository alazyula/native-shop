import { StyleSheet, Text, View, Image, ImageSourcePropType, Pressable } from 'react-native'
import React from 'react'
import { TestImageLink } from '@/constants/TestImageLink'
import { ButtonColor } from '@/constants/ButtonColor'

function CartItem  ()  {
  return (
    <View style={styles.OuterContainer}>
        <Image style={styles.Image} source={{ uri: TestImageLink }} />
        <View style={styles.VerticalContainer}>
            <Text>Ayfon 7 128GB Gümüş</Text>
            <View style={styles.HorizontalContainer}>
                <Text>₺ 5000</Text>
                <View style={styles.HorizontalContainer}>
                <Pressable style={styles.SquareButton}>
                    <Text style={{ color: 'white' }}>-</Text>
                </Pressable>
                <Text>1</Text>
                <Pressable style={styles.SquareButton}>
                    <Text style={{ color: 'white' }}>+</Text>
                </Pressable>

                </View>
                </View>
            </View>

    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    OuterContainer: {
       
       flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        padding: 10,
     
        
        
        
    },
    HorizontalContainer: {
       flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    VerticalContainer: {
        
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SquareButton: {
        width: 20,
        height: 20,
        backgroundColor: ButtonColor,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        width: 50,
        height: 50,
        objectFit: 'contain',
    },
})