import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Formik, FormikProps, FormikValues } from 'formik'

interface AppFormProps {
   initialValues: FormikProps<FormikValues>,
   onSubmit: () => void;
}

const AppForm = ({ initialValues, onSubmit, validationSchema, children }: any) => {
   return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
        { () => ( <>{children}</> )}
    </Formik>

   )
}

const styles = StyleSheet.create({
   container: {}
})

export default AppForm