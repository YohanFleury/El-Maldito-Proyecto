import React from 'react'
import { View, Image, TouchableWithoutFeedback } from 'react-native'

import { ProfilPictureProps } from './UserPicture-types'

const ProfilPicture = ({ size, source, onPress }: ProfilPictureProps) => {
    return (
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
                width: size,
                height: size,
                borderRadius: size/2,
                overflow: 'hidden',
            }}>
                <Image source={source} style={{
                height: size,
                width: size
                }} />
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}


export default ProfilPicture