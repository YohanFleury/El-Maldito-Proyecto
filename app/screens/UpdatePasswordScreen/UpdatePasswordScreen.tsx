import React from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { Auth } from 'aws-amplify'
import * as Yup from 'yup'
import { useNavigation, useRoute } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RouteProp } from '@react-navigation/native';

import Screen from '../../components/Screen'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitBtn from '../../components/Forms/SubmitBtn'
import AppForm from '../../components/Forms/AppForm'
import FormsTemplate from '../../components/Forms/FormsTemplate'
import CtaPhrase from '../../components/Forms/CtaPhrase'
import routes from '../../navigation/routes'
import useAuthFlow from '../../hooks/useAuthFlow'
import { AuthRoutesParams } from '../../navigation/AuthNavigator'

const validationSchema = Yup.object().shape({
    code: Yup.string().required(),
    password: Yup.string().required().min(5).max(15).label('Password')
 })

 type UpdatePasswordProps = {
    email: string;
    code: string;
    password: string;
 }

const UpdatePasswordScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AuthRoutesParams>>()
    const {params} = useRoute<RouteProp<AuthRoutesParams>>()
    const {request, loading} = useAuthFlow()

    return (
        <Screen>
           <FormsTemplate>
              <View style={styles.container}>
                 <Text style={styles.title}>Update Password</Text>
                 <AppForm
                    initialValues={{email: '', code: '', password: ''}}
                    onSubmit={({email,code, password}: UpdatePasswordProps) => {
                        request(Auth.forgotPasswordSubmit(email, code, password))}
                        
                    }
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
                    <SubmitBtn title={loading ? 'Loading...' : 'Update'} />
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