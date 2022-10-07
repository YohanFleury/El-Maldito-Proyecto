import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Formik } from 'formik'

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