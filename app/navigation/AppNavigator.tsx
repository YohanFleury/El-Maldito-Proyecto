import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, Fontisto, Octicons, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import routes from './routes'
import NotifsScreen from '../screens/NotifsScreen/NotifsScreen';
import FeedNavigator, { FeedRoutesParams } from './FeedNavigator';
import colors from '../config/colors';
import SearchNavigator from './SearchNavigator';
import MessageScreen from '../screens/MessagesScreen/MessageScreen';
import CreateNewFeed from '../screens/CreateNewFeed/CreateNewFeed';
import NewFeedBtn from '../components/NewFeedBtn';
import DrawerNavigator from './DrawerNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const TestScreen = () => <View style={{flex: 1, backgroundColor:'blue'}}></View>

const AppNavigator = () => {
   const navigation = useNavigation<NativeStackNavigationProp<FeedRoutesParams>>()
   return (
      <Tab.Navigator 
      screenOptions={({ route }) => ({
         tabBarIcon: ({ focused }) => {
           if (route.name === routes.DRAWERNAV) {
               return <MaterialCommunityIcons onPress={() => navigation.navigate(routes.HOME)} name={focused ? 'home' : 'home-outline'} color={colors.primary} size={27} />
           } else if (route.name === routes.NAVPROFIL) {
             return focused 
             ? <FontAwesome name="search" size={22} color={colors.primary} /> 
             : <Octicons name="search" size={23} color={colors.primary} />
           } else if (route.name === routes.NOTIFS) {
            return <Fontisto style={{marginBottom: 4}} name={focused ? "bell-alt" : "bell"} size={21} color={colors.primary} />
           } else if (route.name === routes.MESSAGES) {
            return  <MaterialCommunityIcons style={{marginTop: 2}} name={focused ? 'message-badge' : 'message-badge-outline'} color={colors.primary} size={22} />
           } else if (route.name === 'test') {
            return  <NewFeedBtn />
           } 
         },
         tabBarLabel:() => {return null},
         fullScreenGestureEnabled: true
       })}
       >
         <Tab.Screen name={routes.DRAWERNAV} component={DrawerNavigator} options={{headerShown: false, }} />
         <Tab.Screen name={routes.NAVPROFIL} component={SearchNavigator} options={{headerShown: false}} /> 
         <Tab.Screen name={"test"} component={TestScreen} options={{headerShown: false}} 
         listeners={({ navigation }) => ({
            tabPress: e => {
               e.preventDefault()
               navigation.navigate(routes.CREATENEWFEED)
            }
         })}
         /> 
         <Tab.Screen name={routes.NOTIFS} component={NotifsScreen} />
         <Tab.Screen name={routes.MESSAGES} component={MessageScreen} /> 
      </Tab.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default AppNavigator