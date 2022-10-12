import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
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
    email: Yup.string().required().email()
 })

const ForgotPasswordScreen = ({navigation}: any) => {

    const resetPswd = async (data: any) => {
        console.log('dataaaa', data)
        try {
            await Auth.forgotPassword(data.email)
            navigation.navigate(routes.UPDATEPASSWORD)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <Screen>
           <FormsTemplate>
              <View style={styles.container}>
                 <Text style={styles.title}>Forgot Password</Text>
                 <AppForm
                    initialValues={{email: ''}}
                    onSubmit={(data: any) => resetPswd(data)}
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
                    
                    <SubmitBtn title='Confirm' />
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

export default ForgotPasswordScreen