import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Screen from '../../components/Screen'

const MyProfilScreen = () => {
   return (
    <Screen>
      <View style={styles.container}>
        <Text>Hello !</Text>
      </View>
    </Screen>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default MyProfilScreen