import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { CoverPictureProps } from './UserPicture-types'

const CoverPicture = ({ source }: CoverPictureProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={source} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
    },
    image: {
        width: "100%",
        height: 200,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    }
})
export default CoverPicture