import React from 'react'
import { View, StyleSheet } from 'react-native'

import {createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import colors from '../config/colors'


const Stack = createNativeStackNavigator()

const AppNavigator = () => {
   return (
      <Stack.Navigator>
        <Stack.Screen name={routes.HOME} 
        component={HomeScreen} 
        options={{ headerShown: false }}        />
      </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default AppNavigator