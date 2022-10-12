import React from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { Auth } from 'aws-amplify'
import * as Yup from 'yup'

import Screen from '../../components/Screen'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import AppForm from '../../components/Forms/AppForm'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import CtaPhrase from '../../components/Forms/CtaPhrase'
import routes from '../../navigation/routes'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    code: Yup.string().required(),
    password: Yup.string().required().min(5).max(15).label('Password')
 })

const UpdatePasswordScreen = ({navigation}: any) => {

    const upDatePswd = async (data: any) => {
        console.log('dataaa', data)
        try {
            await Auth.forgotPasswordSubmit(data.email, data.code, data.password)
            navigation.navigate(routes.LOGIN)
        } catch (error) {
            console.log('erreur', error)
        }
    }

    return (
        <Screen>
           <FormsTemplate>
              <View style={styles.container}>
                 <Text style={styles.title}>Update Password</Text>
                 <AppForm
                    initialValues={{email: '', code: '', password: ''}}
                    onSubmit={(data: any) => upDatePswd(data)}
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
                    name="code"
                    keyboardType="numeric"
                    placeholder="Confirmation code"
                    textContentType="oneTimeCode"
                            />
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock-outline"
                        name="password"
                        placeholder="Enter new password"
                        isPassword
                        textContentType="password"
               />
                    <SubmitBtn title='Update' />
                    <CtaPhrase 
                       phrase="Go back to" 
                       callToAction='Sign in' 
                       onPress={() => navigation.navigate(routes.LOGIN) }   
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
})

export default UpdatePasswordScreen