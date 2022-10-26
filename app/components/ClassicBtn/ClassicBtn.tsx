import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ClassicBtnPorps } from './classicbtn-types' 
import colors from '../../config/colors'
import { color } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const ClassicBtn = ({ title, onPress, color = colors.primary, icon, style }: ClassicBtnPorps) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.button, { backgroundColor: color}, style]}>
                <Text style={styles.text}> {title} </Text>
                {icon &&
                <MaterialCommunityIcons name={icon} size={25} color={colors.white} style={styles.icon} />
                }
            </View>  
        </TouchableWithoutFeedback>
        
    )
}
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
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