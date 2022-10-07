import React from 'react'
import { View, StyleSheet} from 'react-native'
import * as Yup from 'yup'

import Screen from '../../components/Screen'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import AppForm from '../../components/Forms/AppForm'


const validationSchema = Yup.object().shape({
   email: Yup.string().required().email().label('Email'),
   password: Yup.string().required().min(5).max(15).label('Password')
})

const LoginScreen = () => { 
   return (
      <Screen>
         <View style={styles.container}>
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
                  <SubmitBtn title='Sign in' icon="arrow-right" />
               
         </AppForm>

         </View>
      </Screen>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "white",
      padding: 15
   }
})

export default LoginScreen