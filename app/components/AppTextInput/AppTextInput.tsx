import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Image } from 'react-native'
import colors from '../../config/colors'
import { AppTextInputProps } from './AppTextInput-types'

import { MaterialCommunityIcons } from '@expo/vector-icons';


const AppTextInput = ({ placeholder, icon, isPassword = false, size=20 }: AppTextInputProps) => {
    const [isHidden, setIsHidden] = useState<boolean>(isPassword)
   return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
            {icon && <MaterialCommunityIcons name={icon} size={size} color="#293241" style={styles.icon} />
            }
            <TextInput 
                placeholder={placeholder}
                placeholderTextColor='#777E90'
                style={styles.input}
                onChangeText={e => console.log('input changed',e)}
                secureTextEntry={isHidden}
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
   },
   icon: {
    marginRight: 10,
   },
   password: {
    marginLeft: -35,
   }
})

export default AppTextInput