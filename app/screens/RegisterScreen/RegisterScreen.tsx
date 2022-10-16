import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import AppForm from '../../components/Forms/AppForm'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import Screen from '../../components/Screen'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import CtaPhrase from '../../components/Forms/CtaPhrase'
import routes from '../../navigation/routes'
import useAuthFlow from '../../hooks/useAuthFlow'
import { AuthRoutesParams } from '../../navigation/AuthNavigator'
import { useAppDispatch } from '../../hooks/useRedux'
import { setConfirmEmail } from '../../redux/userSlice'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().matches(/^[a-zA-Z0-9]+$/, "Only alphabets are allowed for this field ").min(3).max(13),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).max(15).label('Password'),
 })
 interface DataSignUpProps {
    email: string
    password: string
    name: string
 }

const RegisterScreen = () => {

    const dispatch = useAppDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<AuthRoutesParams>>() 
    const {request, loading, error} = useAuthFlow()
    const [fuckingMail, setfuckingMail] = useState<string>('')
    const [goToConfirm, setGoToConfirm] = useState<boolean>(false)
    useEffect(() => {
        if(goToConfirm) {
            navigation.navigate(routes.CONFIRMEMAIL, {email: fuckingMail}) 
        } 
    }, [goToConfirm])
    

   return (
      <Screen>
        <FormsTemplate>
            <View style={styles.container}>
                <Text style={styles.title}>Sign up</Text>
                <AppForm
                    initialValues={{name: '', email: '', password: '', confirmPassword: ''}}
                    onSubmit={({email, password, name}: DataSignUpProps) => {
                        setfuckingMail(email)
                        request(Auth.signUp({
                        username: email,
                        password,
                        attributes: {name: name}
                    }).then(() => setGoToConfirm(true))
                    )}}
                    validationSchema={validationSchema}
                >
                     <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="at"
                        name="name"
                        keyboardType="default"
                        placeholder="username"
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
                    <SubmitBtn title={loading ? "Loading..." : "Sign up"} icon="arrow-right" />
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