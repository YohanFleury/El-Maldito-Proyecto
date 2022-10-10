import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'

import AppForm from '../../components/Forms/AppForm'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import Screen from '../../components/Screen'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import CtaPhrase from '../../components/Forms/CtaPhrase'

const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(3).max(13),
    email: Yup.string().required().email().label('Email'),
    phoneNumber: Yup.string().required().label('Phone number') ,
    password: Yup.string().required().min(5).max(15).label('Password')
 })

const RegisterScreen = () => {
   return (
      <Screen>
        <FormsTemplate>
            <View style={styles.container}>
                <Text style={styles.title}>Sign up</Text>
                <AppForm
                    initialValues={{username: '', email: '', phoneNumber: '', password: ''}}
                    onSubmit={(values: any) => console.log(values)}
                    validationSchema={validationSchema}
                >
                     <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="human-greeting-variant"
                        name="username"
                        keyboardType="default"
                        placeholder="Username"
                        textContentType="username"
                                />
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
                    <SubmitBtn title="Sign up" icon="arrow-right" />
                    <CtaPhrase 
                        phrase='Already have an account ?'
                        callToAction='Sign in'
                        onPress={() => console.log('go to sign in')}
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
})

export default RegisterScreen