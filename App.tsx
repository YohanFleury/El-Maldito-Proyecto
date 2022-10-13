import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import Screen from './app/components/Screen';

import ClassicBtn from './app/components/ClassicBtn/ClassicBtn';
import AppTextInput from './app/components/AppTextInput/AppTextInput';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import FormsTemplate from './app/components/Forms/FormsTemplate';
import RegisterScreen from './app/screens/RegisterScreen/RegisterScreen';
import NotifCard from './app/components/NotificationCard/NotifCard';
import NotifsScreen from './app/screens/NotifsScreen/NotifsScreen';
import ProfilScreen from './app/screens/ProfilScreen/ProfilScreen';

import {Amplify} from 'aws-amplify'
import awsconfig from './src/aws-exports'
import {Auth, Hub} from 'aws-amplify'

import {NavigationContainer} from '@react-navigation/native'
import ConfirmEmailScreen from './app/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import { useEffect, useState } from 'react';
import AppNavigator from './app/navigation/AppNavigator';

Amplify.configure(awsconfig)

const App = () => {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {

    const listener = (data: any) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut' ) {
        checkUser()
      }
    }

    Hub.listen('auth', listener)

    return () => Hub.remove('auth', listener)
  }, [])
  

  const checkUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({bypassCache: true})
    if (authUser) setUser(authUser)
  }

  return (
    <NavigationContainer>
     {user ? <AppNavigator /> :  <AuthNavigator />}
    </NavigationContainer>
  );
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

export default App


{/* <ProfilScreen
          userName='max_psg'
          accountName='Maxime Neymar'
          bio="Hello moi c'est maxime, ultra du psg depuis 27 ans ! Je vais vous faire 
          vivre ma passion avec ferveur. Allez Paris !!"
          followers={315450}
          coverPictureSource={require('./app/assets/psg.jpg')}
          profilPictureSource={require('./app/assets/maxime.jpg')}
          onPressProfilPicture={() => console.log('photo pressed')}
          ppSize={90}
        /> */}