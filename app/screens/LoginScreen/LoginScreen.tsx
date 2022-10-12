import React from 'react'
import { View, StyleSheet, Text, Alert} from 'react-native'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify'

import Screen from '../../components/Screen'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import AppForm from '../../components/Forms/AppForm'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import CtaPhrase from '../../components/Forms/CtaPhrase'
import routes from '../../navigation/routes'


const validationSchema = Yup.object().shape({
   email: Yup.string().required().email().label('Email'),
   password: Yup.string().required().min(5).max(15).label('Password')
})

interface DataSignInProps {
   email: string
   password: string
}

const LoginScreen = ({navigation}: any) => { 

   const onSignIn = async ({ email, password}: DataSignInProps) => {
      console.log('data: ', email, password )
      try {
         const response = await Auth.signIn(email, password)
         console.log('response : ', response)
      } catch (e: any) {
         console.log(e)
         Alert.alert('oups !', e.message)
      }
   }

   return (
   <Screen>
      <FormsTemplate socialMedia>
         <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <AppForm
               initialValues={{email: '', password: ''}}
               onSubmit={(data: DataSignInProps) => onSignIn(data)}
               validationSchema={validationSchema}
            >
               <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email-outline"
                  name="email"
                  keyboardType="email-address"
                  placeholder="Email"
                  textContentType="emailAddress"
                        />
               <AppFormField 
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock-outline"
                  name="password"
                  placeholder="Password"
                  isPassword
                  textContentType="password"
               />
               <Text onPress={() => navigation.navigate(routes.FORGOTPASSWORD)} style={styles.forgotPassword}>Forgot Password ?</Text>
               <SubmitBtn title='Sign in' icon="arrow-right" />
               <CtaPhrase 
                  phrase="Don't have an account ?" 
                  callToAction='Sign up' 
                  onPress={() => navigation.navigate(routes.REGISTER) }   
               />
            </AppForm>
         </View>
      </FormsTemplate>
   </Screen>
   )
}

const styles = StyleSheet.create({
   container: {
      marginTop: '15%',
      padding: 20
   },
   title: {
      fontSize: 27,
      fontWeight: "600",
      textAlign: 'center',
      marginBottom: 30
   },
   forgotPassword: {
      textAlign: 'right',
      marginBottom: 20,
      color: '#23262F'
   }
})

export default LoginScreen