import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

import { ClassicBtnPorps } from './classicbtn-types' 
import colors from '../../config/colors'


const ClassicBtn = ({ title, onPress, color = colors.primary, icon }: ClassicBtnPorps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: color}]}>
                <Text style={styles.text}> {title} </Text>
                {icon &&
                <Image source={icon} style={styles.image} />
                }
            </View>  
        </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: 342,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        marginLeft: 10,
        width: 16.22,
        height: 17.44,
    }
})
export default ClassicBtn