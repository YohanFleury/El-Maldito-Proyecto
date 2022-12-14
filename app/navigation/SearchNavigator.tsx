import React from 'react'
import { View, StyleSheet } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import ProfilScreen from '../screens/ProfilScreen/ProfilScreen';

export type SearchRoutesParams = {
    Profil: undefined;
    Search: undefined;
 }

const Stack = createNativeStackNavigator<SearchRoutesParams>()

const SearchNavigator = () => {
   return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.SEARCH} component={SearchScreen} />
        <Stack.Screen name={routes.PROFIL} component={ProfilScreen} options={{headerShown: true, fullScreenGestureEnabled: true}} />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default SearchNavigator