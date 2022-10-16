import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Auth } from 'aws-amplify'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import Screen from '../../components/Screen'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import AppForm from '../../components/Forms/AppForm'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import CtaPhrase from '../../components/Forms/CtaPhrase'
import routes from '../../navigation/routes'
import useAuthFlow from '../../hooks/useAuthFlow'
import { AuthRoutesParams } from '../../navigation/AuthNavigator'
import { useAppDispatch } from '../../hooks/useRedux'
import { setEmailUser } from '../../redux/userSlice'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email()
 })

 type ForgotPasswordProps = {
    email: string;
 }


const ForgotPasswordScreen = () => {

    const dispatch = useAppDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<AuthRoutesParams>>()
    const {request, loading, data, error} = useAuthFlow()

    return (
        <Screen>
           <FormsTemplate>
              <View style={styles.container}>
                 <Text style={styles.title}>Forgot Password</Text>
                 <AppForm
                    initialValues={{email: ''}}
                    onSubmit={({email}: ForgotPasswordProps) => {
                        dispatch(setEmailUser(email))
                        request(Auth.forgotPassword(email)).then(() => {
                        if(!error) {navigation.navigate(routes.UPDATEPASSWORD, {email: email})}
                    })}}
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
                    
                    <SubmitBtn title={loading ? 'Loading...' : 'Confirm'} />
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