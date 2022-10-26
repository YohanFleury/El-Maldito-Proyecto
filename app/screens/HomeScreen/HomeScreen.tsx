import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import {Auth} from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'

import Screen from '../../components/Screen'
import useAuthFlow from '../../hooks/useAuthFlow'
import FeedCard from '../../components/FeedCard/FeedCard'
import { SearchRoutesParams } from '../../navigation/SearchNavigator'
import routes from '../../navigation/routes'
import { FeedRoutesParams } from '../../navigation/FeedNavigator'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { setShowStackHome } from '../../redux/stackHeaderSlice'
import useApi from '../../hooks/useApi'
import categories from '../../api/categories'
import { ApiResponse } from 'apisauce'

const dataFeed = [
  {
    id: 1,
    userName: "max_psg",
    name: "Maxime Ney",
    avatarSource: require("../../assets/maxime.jpg"),
    nbLikes: 2895,
    nbComments: 310,
    textContent: "Le prono safe passe encore une fois ! Hier le PSG, mon club de coeur, s'est imposé au parc contre l'OM.",
    imageSource:require('../../assets/classico.png'),
    publicationTime: '1 j',
  },
  {
    id: 2,
    userName: "faridouuune",
    name: "Farid le F",
    avatarSource: require("../../assets/farid.png"),
    nbLikes: 971,
    nbComments: 77,
    textContent: "Ce soir le dodge coin va passer à 1$, faut investir tout votre patrimoine les gars ! Dodge to the moooon !!",
    publicationTime: '3 h',
  },
  {
    id: 3,
    userName: "faridouuune",
    name: "Farid le F",
    avatarSource: require("../../assets/farid.png"),
    nbLikes: 1915,
    nbComments: 272,
    textContent: "Y a une nouvelle crypto, elle s'appelle le Bitcoin, ça sert à rien les gars ça pétera jamais là j'ai vendu mes 8k de Btc pour 50e",
    publicationTime: '13 a',
  },
  {
    id: 4,
    userName: "Tedddd",
    name: "Teddy Parabarap",
    avatarSource: require("../../assets/teddy.png"),
    imageSource:require('../../assets/parabarap.jpg'),
    nbLikes: 385,
    nbComments: 272,
    textContent: "Hola chicos after au parabarap ce soir si vous venez de ma part, vous avez un cubalitro 2.0 offert pour 3 achetés ! ",
    publicationTime: '2 h',
  },
  {
    id: 5,
    userName: "rudy_immo",
    name: "El Investor",
    avatarSource: require("../../assets/rudy.jpg"),
    nbLikes: 894,
    nbComments: 72,
    textContent: "Le prix de l'immobilier à Alicante a chuté de 80%, suite à notre dernier investissement. C'est pas très grave on va se refaire on attend que la chute se stabilise. Je reviens très vite vers vous",
    publicationTime: '2 h',
  },
  
]

const HomeScreen = () => {

 
  useEffect(() => {
    getCurrentUser(Auth.currentUserInfo())
  }, [])
  
  const isPrivateFeed = useAppSelector((state) => state.feed.isPrivateFeed)
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<FeedRoutesParams>>()
  const {request} = useAuthFlow()
  const {request: getCurrentUser, data} = useAuthFlow()
  const [offset, SetOffset] = React.useState(0)
    
   return (
     <Screen style={{backgroundColor: 'white'}} >
      {isPrivateFeed 
      ? <Text>Ceci sera le feed avec UNIQUEMENT les abonnements privés !</Text>
      : <FlatList
          onScroll={(e: any) => {
            let currentOffset = e.nativeEvent.contentOffset.y;
            if (currentOffset > 0 && currentOffset < 600){
              currentOffset > offset 
              ? dispatch(setShowStackHome(false)) 
              : dispatch(setShowStackHome(true))
              SetOffset(currentOffset)
            }
          }}
          horizontal={false}
          data={dataFeed}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) => (
            <FeedCard
            onPpPress={() => navigation.navigate(routes.PROFIL)}
            name={item.name}
            avatarSource={item.avatarSource}
            nbComments={item.nbComments}
            nbLikes={item.nbLikes}
            textContent={item.textContent}
            imageSource={item.imageSource}
            userName={item.userName}
            publicationTime={item.publicationTime}
          />
          )}
           />}
      
     </Screen>
   )
  }
  
  const styles = StyleSheet.create({
    container: {}
  })
  
  export default HomeScreen
  
  
  //<Button title='Log out' onPress={() => request(Auth.signOut())} />