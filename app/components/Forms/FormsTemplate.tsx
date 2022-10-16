import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import colors from '../../config/colors'
import SocialMediaLogin from './SocialMediaLogin'

interface FormsTemplateProps {
    children: any;
    socialMedia?: boolean;
    onGooglePress?: any
    onFacebookPress?: any
    onApplePress?: any
}

const FormsTemplate = ({
    children,
    socialMedia = false, 
    onApplePress, 
    onFacebookPress, 
    onGooglePress 
    }: FormsTemplateProps) => {
   return (
    <View style={styles.background}>
        <View style={styles.containerUp}></View>
        <View style={styles.containerDown}>
            {socialMedia &&
            <SocialMediaLogin 
                onApplePress={onApplePress} 
                onFacebookPress={onFacebookPress}
                onGooglePress={onGooglePress} 
            />}
        </View>
        <View style={styles.formContainer}>
            {children}
        </View>
        <View style={styles.logo}>
            <Image source={require('../../assets/vector.png')} />
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
   background: {
    flex: 1,
   }, 
   containerUp: {
    flex: 1,
    backgroundColor: colors.primary
   },
   containerDown: {
    flex: 2,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
   },
   formContainer: {
    position: 'absolute',
    top: '22.67%',
    left: 20,
    borderRadius: 21,
    backgroundColor: colors.white,
    shadowColor: "#00000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7.49,
    elevation: 12,
    width: '90%'
   },
   logo:{
    width: 119,
    height: 119,
    position: 'absolute',
    top: '14.5%',
    left: '36%',
    borderRadius: 24,
    backgroundColor: colors.white,
    shadowColor: "#00000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7.49,
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center'
   }
})

export default FormsTemplate