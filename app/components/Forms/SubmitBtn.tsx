import React from 'react'
import { StyleSheet } from 'react-native'
import {useFormikContext} from 'formik'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import ClassicBtn from '../ClassicBtn/ClassicBtn'

interface SubmitBtnProps {
    title: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
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