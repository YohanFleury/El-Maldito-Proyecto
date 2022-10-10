import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'

const CircleIcon = ({children}: any) => {
   return (
      <View style={styles.container}>
        {children}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 5,
    marginBottom: 5,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   }
})

export default CircleIcon