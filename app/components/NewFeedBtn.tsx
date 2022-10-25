import React from 'react'
import { View, StyleSheet } from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import { color } from 'react-native-elements/dist/helpers'


const NewFeedBtn = () => {
   return (
      <View style={styles.container}>
        <View style={styles.sousContainer}>
        <MaterialCommunityIcons name="plus-circle" size={37} color={colors.white} />
        </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
        backgroundColor: colors.white,
        height: 75,
        width: 75,
        borderRadius: 37.5,
        justifyContent: 'center',
       alignItems: 'center'
    },
    sousContainer: {
       backgroundColor: colors.primary,
       height: 70,
       width: 70,
       borderRadius: 35,
       justifyContent: 'center',
       alignItems: 'center'

   }
})

export default NewFeedBtn