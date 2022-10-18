import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback, Alert } from 'react-native'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify'
import { useNavigation, useRoute } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import Screen from '../../components/Screen'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import CtaPhrase from '../../components/Forms/CtaPhrase'
import colors from '../../config/colors'
import routes from '../../navigation/routes'
import useAuthFlow from '../../hooks/useAuthFlow'
import { AuthRoutesParams } from '../../navigation/AuthNavigator'
import type { RouteProp } from '@react-navigation/native';


const validationSchema = Yup.object().shape({
    code: Yup.string().required(),

 })

 type ConfirmEmailProps = {
    code: string;
 }

const ConfirmEmailScreen = () => {
    
    const {params} = useRoute<RouteProp<AuthRoutesParams>>()

    const [loading, setLoading] = useState<boolean>(false)
    const navigation = useNavigation<NativeStackNavigationProp<AuthRoutesParams>>()
    const {request: reSendCode, loading: loadCode, error: errorCode} = useAuthFlow()

    const confirmEmail = async (code: string) => {
        setLoading(true)
        try {
            if (params?.email) {
                await Auth.confirmSignUp(params?.email, code)
                Alert.alert('Success : Account confirmed')
                setTimeout(() => {
                    navigation.navigate(routes.LOGIN)
                }, 2000);
            }
        } catch (error) {
           Alert.alert('Wrong code, try again.')
        }
        setLoading(false)
    }

    const forgetUser = async () => {
        try {
            await Auth.deleteUser()
            navigation.navigate(routes.LOGIN)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(params?.email)
    return (
    <Screen>
    <FormsTemplate>
        <View style={styles.container}>
            <Text style={styles.title}>Confirm your email</Text>
            <AppForm
                initialValues={{code: ''}}
                onSubmit={({code}: ConfirmEmailProps) => confirmEmail(code) }
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
                        value={params?.email}
                        editable={false}
                        backgroundColor={colors.lightGrey}
                                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="code"
                    keyboardType="numeric"
                    placeholder="Confirmation code"
                    textContentType="oneTimeCode"
                            />
                <SubmitBtn title={loading || loadCode ? "Loading..." : "Confirm"} icon="arrow-right" />
                <TouchableWithoutFeedback onPress={() => {
                    if (params?.email) {reSendCode(Auth.resendSignUp(params?.email))}}}>
                    <Text style={{ fontSize: 16, color: colors.primary, textAlign: 'center' }}>Not reiceved ? Resend code </Text>
                </TouchableWithoutFeedback>
                <CtaPhrase 
                    phrase='Go back to'
                    callToAction='Sign in'
                    onPress={() => navigation.push(routes.LOGIN)}
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

export default ConfirmEmailScreen