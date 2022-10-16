import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


interface SocialMediaLoginProps {
    onGooglePress?: any;
    onFacebookPress?: any;
    onApplePress?: any;
}

const SocialMediaLogin = ({ onApplePress, onFacebookPress, onGooglePress }: SocialMediaLoginProps) => {
   return (
    <View style={styles.container}>
      <Text style={styles.text}>Or create an account using social media</Text>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback onPress={onFacebookPress}>
            <View style={[styles.icon, {backgroundColor: '#1C54CC'}]}>
                <FontAwesome name="facebook-f" size={20} color="white" />
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onGooglePress}>
            <View style={[styles.icon, {backgroundColor: '#F14436'}]}>
                <MaterialCommunityIcons name="google" size={20} color="white" /> 
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onApplePress}>
            <View style={[styles.icon, {backgroundColor: '#343434'}]}>
                <MaterialCommunityIcons name="apple" size={20} color="white" />
            </View>
        </TouchableWithoutFeedback>
      </View>  
    </View>
   )
}

const styles = StyleSheet.create({
   container: {
    padding: 20,
    alignItems: 'center',
   },
   icon: {
    width: 40,
    height: 40,
    borderRadius: 50 ,
    alignItems: 'center',
    justifyContent: 'center'
   },
   iconContainer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
   },
   text: {
    fontSize: 14,
    fontWeight: '500',
    color: "#686D81",
    marginBottom: 20
   },
})

export default SocialMediaLogin