import React from 'react'
import { View, StyleSheet } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen/ProfilScreen';

export type FeedRoutesParams = {
   Home: undefined;
   Profil: undefined;
}

const Stack = createNativeStackNavigator<FeedRoutesParams>()

const FeedNavigator = () => {
   return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.HOME} component={HomeScreen} />
        <Stack.Screen name={routes.PROFIL} component={ProfilScreen} options={{headerShown: true, fullScreenGestureEnabled: true}}  />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default FeedNavigator