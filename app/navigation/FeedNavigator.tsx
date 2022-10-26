import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen/ProfilScreen';
import colors from '../config/colors';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { setIsPrivateFeed } from '../redux/feedSlice';
import { useNavigation } from '@react-navigation/native';
import CreateNewFeed from '../screens/CreateNewFeed/CreateNewFeed';

export type FeedRoutesParams = {
   Home: undefined;
   Profil: undefined;
   CreateNewFeed: undefined;
}

const Stack = createNativeStackNavigator<FeedRoutesParams>()

const FeedNavigator = ({navigation}: any) => {

   const dispatch = useAppDispatch()
   const showHeader = useAppSelector((state) => state.stackHeader.stackHome)
   const isPrivateFeed = useAppSelector((state) => state.feed.isPrivateFeed)

   return (
    <Stack.Navigator>
        <Stack.Screen name={routes.HOME} component={HomeScreen} 
        options={
         {headerTitle: () => {
         return (
         <View style={{flexDirection: 'row', width: "95%", justifyContent: 'space-between', alignItems: 'center', marginBottom: 5}}>
            <FontAwesome onPress={() => navigation.openDrawer()} name="user-circle-o" size={27} color={colors.dark} />
            <Foundation name="social-skillshare" size={45} color={colors.primary} />
            {!isPrivateFeed &&
               <MaterialCommunityIcons onPress={() => dispatch(setIsPrivateFeed(true))} name="earth" size={29} color={colors.dark} />}
            {isPrivateFeed && 
               <MaterialIcons onPress={() => dispatch(setIsPrivateFeed(false))} name="vpn-lock" size={28} color={colors.secondary} />}
         </View>
         )
         }, 
         headerShown: true, fullScreenGestureEnabled: true}
         
      }
        
        />
        <Stack.Screen  name={routes.PROFIL} component={ProfilScreen} options={{headerShown: true, fullScreenGestureEnabled: true}} />
        <Stack.Screen  name={routes.CREATENEWFEED} component={CreateNewFeed} options={{animationTypeForReplace: 'pop', presentation: 'fullScreenModal', headerShown: false,}} />

    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default FeedNavigator