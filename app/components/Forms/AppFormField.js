import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput/AppTextInput'
import ErrorMessage from './ErrorMessage'


const AppFormField = ({ name, backgroundColor = 'white', ...otherProps }) => {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
   return (
   <>   
      <AppTextInput
         onBlur={() => setFieldTouched(name)}
         onChangeText={handleChange(name)}
         backgroundColor={backgroundColor}
         {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
   </>   
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default AppFormField