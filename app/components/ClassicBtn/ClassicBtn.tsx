import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ClassicBtnPorps } from './classicbtn-types' 
import colors from '../../config/colors'


const ClassicBtn = ({ title, onPress, color = colors.primary, icon }: ClassicBtnPorps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: color}]}>
                <Text style={styles.text}> {title} </Text>
                {icon &&
                <MaterialCommunityIcons name={icon} size={25} color={colors.white} style={styles.icon} />
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
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        marginLeft: 10,
    }
})
export default ClassicBtn