import React, {useState} from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import colors from '../../config/colors'
import { AppTextInputProps } from './AppTextInput-types'

import { MaterialCommunityIcons } from '@expo/vector-icons';


const AppTextInput = ({ icon, isPassword = false, size=20, backgroundColor, autoFocus, widthContainer = "100%", ...otherProps }: AppTextInputProps) => {
    const [isHidden, setIsHidden] = useState<boolean>(isPassword)
   return (
      <View style={[styles.container, {backgroundColor: backgroundColor, width: widthContainer }]}>
        <View style={styles.secondContainer}>
            {icon && 
            <MaterialCommunityIcons name={icon} size={size} color="#293241" style={styles.icon} />
            }
            <TextInput 
                testID='test'
                placeholderTextColor='#777E90'
                style={styles.input}
                {...otherProps}
                autoFocus={autoFocus}
                secureTextEntry={isHidden}
                maxLength={25}
                returnKeyType='done'
                />
            {isPassword &&
            <MaterialCommunityIcons 
                name={isHidden ? "eye-outline" : "eye-off-outline"} 
                onPress={() => setIsHidden(x => !x)}
                size={20} 
                color="#293241" 
                style={styles.password} />
            }
        </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: colors.white,
    borderColor: '#E6E8EC',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    width: '100%',
    
    marginVertical: 10
   },
   secondContainer: {
    flexDirection: 'row',
    padding: 15,
   },
   input: {
    width: '95%',
    borderWidth: 0
   },
   icon: {
    marginRight: 10,
   },
   password: {
    marginLeft: -30,
   }
})

export default AppTextInput