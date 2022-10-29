import React from 'react'
import { View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import { ProfilPictureProps } from './UserPicture-types'
import colors from '../../config/colors';


const ProfilPicture = ({ size, source, onPress, isCertified = false }: ProfilPictureProps) => {
    return (
    <>
        <TouchableWithoutFeedback onPress={onPress}>
        <View
         style={{
            width: size+10,
            height: size+10,
            borderRadius: (size+10)/2,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                width: size+3,
                height: size+3,
                borderRadius: (size+3)/2,
                overflow: 'hidden',
            }}>
                <Image source={source} style={{
                height: size+3,
                width: size+3
                }} />
            </View>
        </View>
    </TouchableWithoutFeedback>
</>
    )
}

const styles = StyleSheet.create({
    certification: {
        position: 'absolute',
        top: '96%'
    }
 })

export default ProfilPicture