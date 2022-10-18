import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ImageBackground, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

import colors from '../../config/colors'
import { SearchCardProps } from './SearchCard-types'


const SearchCard = ({ imageUri, userName, onPressInfos }: SearchCardProps) => {
    return (
            <TouchableWithoutFeedback onPress={onPressInfos}>
               <View style={styles.card}>
                    <ImageBackground resizeMode="cover" style={styles.image} source={imageUri}></ImageBackground>
                    <LinearGradient colors={['transparent', 'black',]} style={styles.container} >
                        <Text style={styles.text}> {userName} </Text>
                    </LinearGradient>
                </View>
            </TouchableWithoutFeedback>
 
    )
}
const styles = StyleSheet.create({
    card: {
        height: 320,
        justifyContent: 'flex-end',
        overflow: "hidden",
        flex: 0.5,
        margin: 2,
        borderRadius: 10,
    },
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 50,
        padding: 5,
    },
    button: {
        borderRadius: 50,
        padding: 5,
        width: 60,
        height: 40,
        borderWidth: 2,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        position: 'absolute'
    },
    textBtn: {
        color: colors.primary,
        fontSize: 15,
    },
    text: {
        color: colors.white,
        fontSize: 17,
        fontWeight: 'bold',
    }
})

export default SearchCard