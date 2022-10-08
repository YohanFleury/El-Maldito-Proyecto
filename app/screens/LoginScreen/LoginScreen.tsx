import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import * as Yup from 'yup'

import Screen from '../../components/Screen'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import AppForm from '../../components/Forms/AppForm'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import CtaPhrase from '../../components/Forms/CtaPhrase'


const validationSchema = Yup.object().shape({
   email: Yup.string().required().email().label('Email'),
   password: Yup.string().required().min(5).max(15).label('Password')
})

const LoginScreen = () => { 
   return (
   <Screen>
      <FormsTemplate socialMedia>
         <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <AppForm
               initialValues={{email: '', password: ''}}
               onSubmit={(values: any) => console.log(values)}
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
               <Text onPress={() => console.log("change pswd")} style={styles.forgotPassword}>Forgot Password ?</Text>
               <SubmitBtn title='Sign in' icon="arrow-right" />
               <CtaPhrase 
                  phrase="Don't have an account ?" 
                  callToAction='Sign up' 
                  onPress={() => console.log('go to register screen')}   
               />
            </AppForm>
         </View>
      </FormsTemplate>
   </Screen>
   )
}

const styles = StyleSheet.create({
   container: {
      marginTop: 80,
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