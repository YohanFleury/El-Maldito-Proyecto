import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify'

import AppForm from '../../components/Forms/AppForm'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import Screen from '../../components/Screen'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import CtaPhrase from '../../components/Forms/CtaPhrase'
import routes from '../../navigation/routes'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(13),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).max(15).label('Password'),
 })
 interface DataSignInProps {
    email: string
    password: string
    name: string
 }

const RegisterScreen = ({navigation}: any) => {

    const registerUser = async ({email, password, name}: DataSignInProps) => {
        console.log('data : ', email, password, name)
        try {
            const response = await Auth.signUp({
                username: email,
                password,
                attributes: {name}
            })
            console.log('reponse : ',response)
        } catch (e) {
            console.log('erreur reçue : ',e)
        }
    }

   return (
      <Screen>
        <FormsTemplate>
            <View style={styles.container}>
                <Text style={styles.title}>Sign up</Text>
                <AppForm
                    initialValues={{name: '', email: '', password: '', confirmPassword: ''}}
                    onSubmit={(values: any) => registerUser(values)}
                    validationSchema={validationSchema}
                >
                     <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="human-greeting-variant"
                        name="name"
                        keyboardType="default"
                        placeholder="Username"
                        textContentType="name"
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
                        onPress={() => navigation.navigate(routes.LOGIN)}
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

export default RegisterScreen