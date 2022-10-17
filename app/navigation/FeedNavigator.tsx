import React from 'react'
import { View, StyleSheet } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator()

const FeedNavigator = () => {
   return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.HOME} component={HomeScreen} />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default FeedNavigator