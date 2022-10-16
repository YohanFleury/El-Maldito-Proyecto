import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Button, ActivityIndicator } from 'react-native'
import Screen from '../../components/Screen'

import {Auth} from 'aws-amplify'
import useAuthFlow from '../../hooks/useAuthFlow'

const HomeScreen = () => {

  useEffect(() => {
    getCurrentUser(Auth.currentUserInfo())
  }, [])
  
  
  const {request} = useAuthFlow()
  const {request: getCurrentUser, data} = useAuthFlow()
  
    
   return (
     <Screen >
      <>
       {!data &&
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
       <ActivityIndicator />
       </View>
       }
       </>
        {data &&
        <View style={{flex: 1, alignItems: 'center' ,justifyContent: 'space-between'}}>
         <Text style={{marginTop: 100, fontSize: 20}}>Welcome @{data?.attributes.name} ! </Text>
         <Text style={{ fontSize: 20}}> La suite arrive bientôt ... </Text>
         <Button title='Log out' onPress={() => request(Auth.signOut())} />
        </View>}
     </Screen>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default HomeScreen