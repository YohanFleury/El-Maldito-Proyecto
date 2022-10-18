import React, {useState} from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import {MaterialCommunityIcons, Fontisto, Octicons, FontAwesome, Ionicons } from '@expo/vector-icons'

import colors from '../../config/colors'
import AppTextInput from '../AppTextInput/AppTextInput'
import { SearchInputFieldProps } from './SearchInputField-types'

const SearchInputField = ({placeholder}: SearchInputFieldProps) => {

    const [inputVisible, setInputVisible] = useState<boolean>(false)

    const handleClick = () => {
        setInputVisible(!inputVisible)
    }

    return (
        <View style={inputVisible ? styles.container : styles.containerBis}>
            {inputVisible &&
            <>
                <AppTextInput
                placeholder={placeholder}
                autoFocus
                widthContainer='80%'
                />
                <Text style={{fontWeight: 'bold'}} onPress={handleClick}>Annuler</Text>
            </>
            }
            {!inputVisible &&
            <TouchableWithoutFeedback onPress={handleClick}>
                <FontAwesome name="search" size={24} color={colors.primary} />
            </TouchableWithoutFeedback>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
    },
    containerBis: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
})
export default SearchInputField