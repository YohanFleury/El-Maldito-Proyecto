import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, Fontisto, Octicons, FontAwesome, Ionicons } from '@expo/vector-icons'

import routes from './routes'
import NotifsScreen from '../screens/NotifsScreen/NotifsScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import FeedNavigator from './FeedNavigator';
import colors from '../config/colors';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
   return (
      <Tab.Navigator screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
           if (route.name === routes.FEED) {
               return <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={colors.primary} size={30} />
           } else if (route.name === routes.SEARCH) {
             return focused 
             ? <FontAwesome name="search" size={size} color={colors.primary} /> 
             : <Octicons name="search" size={size} color={colors.primary} />
           } else if (route.name === routes.NOTIFS) {
            return <Fontisto name={focused ? "bell-alt" : "bell"} size={size} color={colors.primary} />
           } else if (route.name === routes.SETTINGS) {
            return <Ionicons name={focused ? 'md-settings' : 'md-settings-outline'} size={size} color={colors.primary} />
           }
         },
         tabBarLabel:() => {return null}
       })}>
        <Tab.Screen name={routes.FEED} component={FeedNavigator} />
         <Tab.Screen name={routes.SEARCH} component={SearchScreen} /> 
         <Tab.Screen name={routes.NOTIFS} component={NotifsScreen} />
         <Tab.Screen name={routes.SETTINGS} component={SettingsScreen} /> 
      </Tab.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default AppNavigator