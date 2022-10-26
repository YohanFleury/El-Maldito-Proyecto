import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors'

type CircleIconProps = {
   children: 
   | JSX.Element
   | JSX.Element[];
   width?: number;
   height?: number;
   onPress?: () => void;
}

const CircleIcon = ({children, width = 50, height = 50, onPress}: CircleIconProps) => {
   return (
   <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, {height: height, width: width, borderRadius: width/2}]}>
        {children}
      </View>
   </TouchableWithoutFeedback>
   )
}

const styles = StyleSheet.create({
   container: {
    padding: 5,
    margin: 10,
    borderColor: colors.medium,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   }
})

export default CircleIcon