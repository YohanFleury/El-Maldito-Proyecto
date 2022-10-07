import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../../components/Screen'
import AppTextInput from '../../components/AppTextInput/AppTextInput'
import ClassicBtn from '../../components/ClassicBtn/ClassicBtn'
import ErrorMessage from '../../components/ErrorMessage'


const validationSchema = Yup.object().shape({
   email: Yup.string().required().email().label('Email'),
   password: Yup.string().required().min(5).max(15).label('Password')
})

const LoginScreen = () => {
   return (
      <Screen>
         <View style={styles.container}>
         <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values: any) => console.log(values)}
            validationSchema={validationSchema}
         >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
               <>
                  <AppTextInput
                     autoCapitalize="none"
                     autoCorrect={false}
                     icon="email-outline"
                     keyboardType="email-address"
                     onBlur={() => setFieldTouched('email')}
                     onChangeText={handleChange("email")}
                     placeholder="Email"
                     textContentType="emailAddress"
                           />

                  <ErrorMessage error={errors.email} visible={touched.email} />

                  <AppTextInput 
                     autoCapitalize="none"
                     autoCorrect={false}
                     icon="lock-outline"
                     onBlur={() => setFieldTouched('password')}
                     onChangeText={handleChange('password')}
                     placeholder="Password"
                     isPassword
                     textContentType="password"
                  />
                  <ErrorMessage error={errors.password} visible={touched.password} />
                  <ClassicBtn title='Sign in' icon="arrow-right" onPress={handleSubmit} />
               </>
            )
             }
         </Formik>

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