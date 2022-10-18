import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen/ProfilScreen';
import colors from '../config/colors';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { setIsPrivateFeed } from '../redux/feedSlice';

export type FeedRoutesParams = {
   Home: undefined;
   Profil: undefined;
}

const Stack = createNativeStackNavigator<FeedRoutesParams>()

const FeedNavigator = () => {

   const dispatch = useAppDispatch()
   const showHeader = useAppSelector((state) => state.stackHeader.stackHome)
   const isPrivateFeed = useAppSelector((state) => state.feed.isPrivateFeed)

   return (
    <Stack.Navigator>
        <Stack.Screen name={routes.HOME} component={HomeScreen} 
        options={
         {headerTitle: () => {
         return (
         <View style={{flexDirection: 'row', width: "95%", justifyContent: 'space-between', alignItems: 'center'}}>
            <Text>???</Text>
            <Image source={require('../assets/vector.png')} style={{width: 35, height: 35}} />
            {!isPrivateFeed &&
            <MaterialIcons onPress={() => dispatch(setIsPrivateFeed(true))} name="vpn-lock" size={28} color={colors.primary} />}
            {isPrivateFeed && 
            <MaterialCommunityIcons onPress={() => dispatch(setIsPrivateFeed(false))} name="earth" size={29} color={colors.primary} />}
         </View>
         )
         }, 
         headerShown: true}
         
      }
        
        />
        <Stack.Screen name={routes.PROFIL} component={ProfilScreen} options={{headerShown: true, fullScreenGestureEnabled: true}}  />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default FeedNavigator