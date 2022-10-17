import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Button, ActivityIndicator, ScrollView } from 'react-native'
import Screen from '../../components/Screen'

import {Auth} from 'aws-amplify'
import useAuthFlow from '../../hooks/useAuthFlow'
import FeedCard from '../../components/FeedCard/FeedCard'

const HomeScreen = () => {

  useEffect(() => {
    getCurrentUser(Auth.currentUserInfo())
  }, [])
  
  
  const {request} = useAuthFlow()
  const {request: getCurrentUser, data} = useAuthFlow()
  
    
   return (
     <Screen >
      <ScrollView>
      <FeedCard
        name="Maxime Ney"
        avatarSource={require('../../assets/maxime.jpg')}
        nbComments={387}
        nbLikes={2987}
        textContent="Le prono safe passe encore une fois ! Hier le PSG, mon club de coeur, s'est imposé au 
        parc contre l'OM."
        imageSource={require('../../assets/classico.png')}
        userName="max_psg"
        publicationTime='1h'
      />
      <FeedCard
        name="Maxime Ney"
        avatarSource={require('../../assets/maxime.jpg')}
        nbComments={387}
        nbLikes={2987}
        textContent="Le prono safe passe encore une fois ! Hier le PSG, mon club de coeur, s'est imposé au 
        parc contre l'OM.
        Restez branchés le prochain prono arrive dans la journée !"
        userName="max_psg"
        publicationTime='1h'
      />
      <FeedCard
        name="Maxime Ney"
        avatarSource={require('../../assets/maxime.jpg')}
        nbComments={387}
        nbLikes={2987}
        textContent="Le prono safe passe encore une fois ! Hier le PSG, mon club de coeur, s'est imposé au 
        parc contre l'OM.
        Restez branchés le prochain prono arrive dans la journée !"
        imageSource={require('../../assets/classico.png')}
        userName="max_psg"
        publicationTime='1h'
      />
      </ScrollView>
     </Screen>
   )
  }
  
  const styles = StyleSheet.create({
    container: {}
  })
  
  export default HomeScreen
  
  
  //<Button title='Log out' onPress={() => request(Auth.signOut())} />