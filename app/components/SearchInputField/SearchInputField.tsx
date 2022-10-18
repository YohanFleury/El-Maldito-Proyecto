import React, {useState} from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {MaterialCommunityIcons, Fontisto, Octicons, FontAwesome, Ionicons } from '@expo/vector-icons'

import colors from '../../config/colors'
import AppTextInput from '../AppTextInput/AppTextInput'
import { SearchInputFieldProps } from './SearchInputField-types'

const SearchInputField = ({placeholder}: SearchInputFieldProps) => {

    const [inputVisible, setInputVisible] = useState<boolean>(false)
    const [iconStyle, setIconStyle] = useState<boolean>(false)

    const handleClick = () => {
        setInputVisible(!inputVisible)
        setIconStyle(!iconStyle)
    }

    const textInput = inputVisible
        ? <AppTextInput
            placeholder={placeholder}
            autoFocus={inputVisible}
             />
        : <></>

    return (
        <View style={iconStyle ? styles.container : styles.containerBis}>
            {inputVisible &&
            <AppTextInput
            
            placeholder={placeholder}
            autoFocus={inputVisible}
             />
            }
            <TouchableWithoutFeedback onPress={handleClick}>
                {iconStyle 
                ? <MaterialCommunityIcons onPress={handleClick} name="close" color={colors.primary} size={37} /> 
                : <FontAwesome name="search" size={31} color={colors.primary} />}
            </TouchableWithoutFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    containerBis: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
})
export default SearchInputField