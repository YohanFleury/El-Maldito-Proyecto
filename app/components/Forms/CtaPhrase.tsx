import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../../config/colors';

interface CtaPhraseProps {
    phrase: string;
    callToAction: string;
    onPress: () => void;
}

const CtaPhrase = ({ phrase, callToAction, onPress }: CtaPhraseProps) => {
   return (
    <View style={styles.container}>
        <Text style={styles.phrase}>{phrase}</Text>
        <Text style={styles.callToAction} onPress={onPress} >{callToAction}</Text>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
     },
    callToAction: {
        color: colors.primary,
        marginLeft: 5,
        fontWeight: '600',
        fontSize: 15
    },
    phrase: {
        color: '#23262F',
        fontSize: 15
    }
})

export default CtaPhrase