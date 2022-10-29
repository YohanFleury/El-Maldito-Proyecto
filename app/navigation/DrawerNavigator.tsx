import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createDrawerNavigator, } from '@react-navigation/drawer'
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import routes from './routes'
import AppNavigator from './AppNavigator'
import FeedNavigator from './FeedNavigator'
import MyProfilScreen from '../screens/MyProfilScreen/MyProfilScreen'
import WalletScreen from '../screens/WalletScreen/WalletScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
   return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.FEED} component={FeedNavigator} options={{headerShown: false,}} />
      <Drawer.Screen name={routes.MYPROFIL} component={MyProfilScreen} />
      <Drawer.Screen name={routes.SETTINGS} component={SettingsScreen} />
      <Drawer.Screen name={routes.WALLET} component={WalletScreen} />
    </Drawer.Navigator>
);
}

const styles = StyleSheet.create({
   container: {}
})

export default DrawerNavigator