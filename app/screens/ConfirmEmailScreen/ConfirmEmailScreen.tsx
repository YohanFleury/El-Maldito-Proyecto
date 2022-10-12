import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify'

import Screen from '../../components/Screen'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import CtaPhrase from '../../components/Forms/CtaPhrase'
import colors from '../../config/colors'
import routes from '../../navigation/routes'


const validationSchema = Yup.object().shape({
    code: Yup.string().required(),
    email: Yup.string().required().email().label('Email'),

 })

const ConfirmEmailScreen = ({ navigation }: any) => {

    const onConfirm = async (data: any) => {
      try {
        await Auth.confirmSignUp(data.email, data.code)
        navigation.navigate(routes.LOGIN)
      } catch (error) {
        console.log(error)
      }
    }

   return (
    <Screen>
    <FormsTemplate>
        <View style={styles.container}>
            <Text style={styles.title}>Confirm your email</Text>
            <AppForm
                initialValues={{code: '', email: ''}}
                onSubmit={(values: any) => onConfirm(values)}
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
                <SubmitBtn title="Confirm" icon="arrow-right" />
                <TouchableWithoutFeedback onPress={() => console.log('')}>
                    <Text style={{ fontSize: 16, color: colors.primary, textAlign: 'center' }}>Not reiceved ? Resend code </Text>
                </TouchableWithoutFeedback>
                <CtaPhrase 
                    phrase='Go back to'
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