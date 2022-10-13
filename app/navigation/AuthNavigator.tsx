import React from 'react'
import {createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen'
import UpdatePasswordScreen from '../screens/UpdatePasswordScreen/UpdatePasswordScreen'
import routes from './routes'

export type AuthRoutesParams = {
   Login: undefined;
   Register: undefined;
   ConfirmEmail: undefined;
   ForgotPassword: undefined;
   UpdatePassword: {email: string};
}

const Stack = createNativeStackNavigator<AuthRoutesParams>()

const AuthNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name={routes.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
         <Stack.Screen name={routes.REGISTER} component={RegisterScreen} options={{ headerShown: false }} />
         <Stack.Screen name={routes.CONFIRMEMAIL} component={ConfirmEmailScreen} options={{ headerShown: false }} />
         <Stack.Screen name={routes.FORGOTPASSWORD} component={ForgotPasswordScreen} options={{ headerShown: false }} />
         <Stack.Screen name={routes.UPDATEPASSWORD} component={UpdatePasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
   )
}


export default AuthNavigator