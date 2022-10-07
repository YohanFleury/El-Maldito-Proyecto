import React from 'react'
import { View, StyleSheet } from 'react-native'
import {useFormikContext} from 'formik'

import ClassicBtn from '../ClassicBtn/ClassicBtn'

interface SubmitBtnProps {
    title: string;
    icon?: any
}

const SubmitBtn = ({title, icon}: SubmitBtnProps) => {

    const {handleSubmit} = useFormikContext()

   return (
    <ClassicBtn title={title} icon={icon} onPress={handleSubmit} />

   )
}

const styles = StyleSheet.create({
   container: {}
})

export default SubmitBtn