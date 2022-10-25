import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Screen from '../../components/Screen'

const CreateNewFeed = () => {

    const navigation = useNavigation()

   return (
      <View style={styles.container}>
        <Text>
            Crée une nouvelle publication
        </Text>
        <Button title='Annuler' onPress={() => navigation.goBack()} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 10
   }
})

export default CreateNewFeed