import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Modal, Text, Button, TextInput, Pressable, KeyboardAvoidingView, Keyboard, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Divider } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location';
import { Octicons } from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LottieView from 'lottie-react-native'

import Screen from '../Screen';
import colors from '../../config/colors'
import ProfilPicture from '../UserPictures/ProfilPicture';
import CoverPicture from '../UserPictures/CoverPicture';



const EditProfil = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [coverPic, setCoverPic] = useState<null | string >(null)
    const [pp, setPp] = useState<null | string >(null)
    const [city, setCity] = useState<null | string >(null)
    const [locationLoading, setLocationLoading] = useState<boolean>(false)

    useEffect(() => {
      setCity(null)
      setCoverPic(null)
      setPp(null)
    }, [isVisible])
    

    const updateCover = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!granted) alert('Autorise wesh panique pas!')
        try {
            const result = await ImagePicker.launchImageLibraryAsync()
            if (!result.cancelled) {
                setCoverPic(result.uri)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const updatePp = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!granted) alert('Autorise wesh panique pas!')
        try {
            const result = await ImagePicker.launchImageLibraryAsync()
            if (!result.cancelled) {
                setPp(result.uri)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getLocation = async () => {
        const {granted} = await Location.requestForegroundPermissionsAsync()
        if(!granted) alert('Autorise wesh panique pas!')
        try {
            setLocationLoading(true)
            const location = await Location.getCurrentPositionAsync({})
            const region = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
            setCity(region[0].city)
        } catch (error) {
            console.log(error)
        }
        setLocationLoading(false)
    }
    console.log(locationLoading)
   return (
    <>
        <Button title='Editer' onPress={() => setIsVisible(true)} />
        <GestureRecognizer style={{flex: 1}} onSwipeDown={() => setIsVisible(false)}>
            <Modal visible={isVisible} animationType='slide' presentationStyle='pageSheet'>
                <Screen>
                    <KeyboardAwareScrollView keyboardOpeningTime={100}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Button title='Annuler' onPress={() => setIsVisible(false)} color='black' />
                            <Text style={{fontSize: 17}}>Modifier profil</Text>
                            <Button title='Terminé' onPress={() => setIsVisible(false)} color={colors.primary} />
                        </View>
                        <Divider />
                        <View style={styles.photos}>
                            <CoverPicture onPress={updateCover} source={coverPic == null ? require('../../assets/psg.jpg') : {uri: coverPic} } />
                            <View style={[styles.ppContainer, {width: 90+10, height: 90+10, borderRadius: (90+10)/2}]}>
                                <ProfilPicture onPress={updatePp} size={90} source={pp == null ? require('../../assets/maxime.jpg') : {uri: pp}} isCertified />
                            </View>
                        </View>
                        <Divider style={{marginTop: 15}} />
                        <View style={styles.miniContainer}>
                            <Text style={{paddingTop: 5}}>Nom</Text>
                            <TextInput maxLength={15} style={{width: '70%', height: 30, padding: 5}} placeholderTextColor={colors.medium} placeholder='Ajoute un nom' />
                        </View>
                        <Divider />
                        <View style={styles.miniContainer}>
                            <Text style={{paddingTop: 5}}>Bio</Text>
                            <TextInput multiline numberOfLines={6} style={{width: '70%', height: 110, padding: 5}} placeholderTextColor={colors.medium} placeholder='Ajoute une description' />
                        </View>
                        <Divider />
                        <View style={styles.locationContainer}>
                            <Text>Localisation</Text>
                            <View style={{width: '70%',}}>
                                {locationLoading &&
                                    <LottieView 
                                        autoPlay
                                        loop
                                        source={require('../../assets/animations/loading.json')}
                                        
                                    />
                                }
                                {city == null && !locationLoading &&
                                    <Pressable onPress={getLocation}>
                                        <Text style={{marginLeft: 5, color: colors.medium}}>Ajouter ma position</Text>
                                    </Pressable>}
                                {city !== null &&  !locationLoading &&
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Octicons style={{marginRight: 10}} name="location" size={18} color="black" />
                                        <Text>{city}</Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <Divider />
                        <View style={styles.miniContainer}>
                            <Text style={{paddingTop: 5}}>Site web</Text>
                            <TextInput style={{width: '70%', height: 30, padding: 5}} placeholderTextColor={colors.medium} placeholder='Ajoute ton site web' />
                        </View>
                    </View>
                    </KeyboardAwareScrollView>
                </Screen>
            </Modal>
        </GestureRecognizer>
    </>
   )
}

const styles = StyleSheet.create({
   container: {
    flex: 1
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60
   },
   miniContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
   },
   locationContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70
   },
   photos: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginBottom: -50
    },
   ppContainer: {
    backgroundColor:colors.white,
    alignItems: 'center',
    bottom: 50,
    left: "35%",
    },
})

export default EditProfil