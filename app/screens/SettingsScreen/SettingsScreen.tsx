import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import {Auth} from 'aws-amplify'

import useAuthFlow from '../../hooks/useAuthFlow'

const SettingsScreen = () => {

   const {request} = useAuthFlow()

   return (
      <>
      <Text style={styles.container}>
        SETTINGSSSSS baby
      </Text>
      <Button title='Log out' onPress={() => request(Auth.signOut())} />
      </>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default SettingsScreen