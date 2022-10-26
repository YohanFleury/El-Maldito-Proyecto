import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import {Amplify} from 'aws-amplify'
import awsconfig from './src/aws-exports'
import {Auth, Hub} from 'aws-amplify'

import {NavigationContainer} from '@react-navigation/native'
import ConfirmEmailScreen from './app/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import { useEffect, useState } from 'react';
import AppNavigator from './app/navigation/AppNavigator';


import { useAppDispatch, useAppSelector } from './app/hooks/useRedux';
import { setUser, setUserToken } from './app/redux/userSlice';

Amplify.configure(awsconfig)

const MyApp = () => {

   const dispatch = useAppDispatch()
   const userToken = useAppSelector((state) => state.user.jwtToken)

   const [currentUser, setCurrentUser] = useState<any>()
   const checkUser = async () => {
      try {
         const authUser = await Auth.currentAuthenticatedUser({bypassCache: true})
         setCurrentUser(authUser)
         dispatch(setUserToken(authUser.signInUserSession.accessToken.jwtToken))
      } catch (error) { 
         setCurrentUser(null) 
      }
   } 
   useEffect(() => {
      setCurrentUser(undefined)
     checkUser()
   }, [])

  useEffect(() => {
   const listener = (data: any) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
         checkUser()
      }
   }
   Hub.listen('auth', listener);
   return () => Hub.remove('auth', listener)
 }, [])

console.log('userr : ', currentUser?.signInUserSession.idToken)
   if(currentUser === undefined) {
      console.log('YOUUUUUUUu')
      return (
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <ActivityIndicator />
         </View>
      )
   }

   return (
      <NavigationContainer>
      {currentUser ? <AppNavigator /> :  <AuthNavigator />}
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'white',
   },
   view: {
     padding: 10,
     backgroundColor: "white"
   }
 });
export default MyApp