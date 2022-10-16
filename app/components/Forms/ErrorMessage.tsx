import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../../config/colors';

interface ErrorMsgProps {
    error: string | undefined;
    visible: boolean | undefined;
}

const ErrorMessage = ({ error, visible }: ErrorMsgProps) => {
    if(!error || !visible) return null

   return (
      <Text style={styles.error}>{error}</Text>
   )
}

const styles = StyleSheet.create({
   error: {
    color: colors.danger,
   }
})

export default ErrorMessage