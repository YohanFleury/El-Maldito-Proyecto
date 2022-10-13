import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Screen from '../../components/Screen'

import {Auth} from 'aws-amplify'
import useAuthFlow from '../../hooks/useAuthFlow'

const HomeScreen = () => {

    const {request} = useAuthFlow()
    
   return (
     <Screen>
         <Text>Welcome Home !! </Text>
         <Button title='Log out' onPress={() => request(Auth.signOut())} />
     </Screen>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default HomeScreen