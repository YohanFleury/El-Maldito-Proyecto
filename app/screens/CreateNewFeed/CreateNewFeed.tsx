import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text, Switch, FlatList, Button, TextInput, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Image} from 'react-native'
import CircleIcon from '../../components/CircleIcon'
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import UploadView from '../../components/UploadView/UploadView';
import ClassicBtn from '../../components/ClassicBtn/ClassicBtn'
import Screen from '../../components/Screen'
import ProfilPicture from '../../components/UserPictures/ProfilPicture'
import colors from '../../config/colors'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { addImageUri, deleteImageUri, resetImagesUris } from '../../redux/feedSlice';
import routes from '../../navigation/routes';
import { FeedRoutesParams } from '../../navigation/FeedNavigator';

const CreateNewFeed = () => {

    const navigation = useNavigation<NativeStackNavigationProp<FeedRoutesParams>>()
    const dispatch = useAppDispatch()
    const imagesUrisArray = useAppSelector((state) => state.feed.imagesUris)

    const [disabled, setDisabled] = useState<boolean>(true)
    const [isEnabled, setisEnabled] = useState<boolean>(false)
    const [publish, setPublish] = useState<boolean>(false)
    const [uploadVisible, setUploadVisible] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
      dispatch(resetImagesUris())
    }, [])
    
    useEffect(() => {
        if (publish) navigation.goBack()
      }, [publish])

    const handleBtnState = (e: string) => {
        setInputValue(e)
        e.length > 0 
        ? setDisabled(false)
        : setDisabled(true)
    }

    const selectImage = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!granted) alert('Autorise wesh panique pas!')
        try {
            const result = await ImagePicker.launchImageLibraryAsync()
            if (!result.cancelled) {
                dispatch(addImageUri(result.uri))
            }
        } catch (error) {
            console.log(error)
        }
    }
    const takePhoto = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted) alert('Autorise wesh panique pas!')
        try {
            const result = await ImagePicker.launchCameraAsync()
            if (!result.cancelled) {
                dispatch(addImageUri(result.uri))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onDoneUpload = () => {
        setUploadVisible(false)
        setPublish(true)
    }
    
    console.log('porfjpij', uploadVisible)

   return (
      <Screen style={styles.container}>
        <UploadView visible={uploadVisible} onDone={onDoneUpload} />
        <KeyboardAvoidingView style={{flex: 1,}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback  style={{flex: 1}} onPress={Keyboard.dismiss} >
                <View style={{justifyContent: 'space-between', flex: 0.9, padding: 5}}> 
                    <View style={{ flex: 0.5, }}>
                        <View style={styles.header}>
                            <Button title='Annuler' onPress={() => navigation.goBack()} color="black" />
                            {!isEnabled && <MaterialCommunityIcons name="earth" size={28} color="black" />}
                            {isEnabled && <FontAwesome name="lock" size={28} color="black" />}
                            <ClassicBtn 
                                style={{width: 100, backgroundColor: disabled ? colors.medium : colors.primary}} 
                                title='POST' 
                                onPress={disabled ? () => console.log('go !') : () => setUploadVisible(true)}  />
                        </View>
                        <View style={{marginTop: 15}}>
                            <View style={styles.user}>
                                <ProfilPicture size={50} onPress={() => console.log('first')} source={require('../../assets/moichauve.jpg')} />
                                <View style={styles.audiance}>
                                    <Text style={{fontSize: 18}}>{!isEnabled ? 'Publique' : 'Privée'}</Text>
                                    <Switch
                                        style={{marginLeft: 10}}
                                        trackColor={{ false: colors.lightGrey, true: colors.lightGrey }}
                                        thumbColor={colors.primary}
                                        ios_backgroundColor={colors.lightGrey}
                                        onValueChange={() => setisEnabled(x => !x)}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.textArea}>
                            <TextInput 
                                style={styles.input}
                                placeholder='Exprime toi !'
                                numberOfLines={10}
                                multiline
                                autoFocus
                                onChangeText={e => handleBtnState(e)}
                            />
                        </View>
                    </View>
                    <View style={styles.picturesIcons}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            {imagesUrisArray.length < 2 &&
                            <>
                            <CircleIcon onPress={selectImage} height={50} width={50}>
                                <FontAwesome name="photo" size={27} color={colors.primary} />
                            </CircleIcon>
                            <CircleIcon onPress={takePhoto} height={50} width={50}>
                                <MaterialIcons name="photo-camera" size={31} color={colors.primary} />
                            </CircleIcon>
                                </>
                            }
                            {imagesUrisArray.length === 2 &&
                            <>
                            <CircleIcon height={50} width={50}>
                                <FontAwesome name="photo" size={27} color={colors.medium} />
                            </CircleIcon>
                            <CircleIcon height={50} width={50}>
                                <MaterialIcons name="photo-camera" size={31} color={colors.medium} />
                            </CircleIcon>
                                </>
                            }
                        </View>
                        <FlatList
                            keyboardShouldPersistTaps="always"
                            horizontal={true}
                            style={{flex: 1}}
                            data={imagesUrisArray}
                            keyExtractor={image => image}
                            renderItem={({ item }) => (
                                <>  
                                    <TouchableWithoutFeedback onPress={() => dispatch(deleteImageUri(item))}>
                                        <View style={styles.pastille}>
                                            <AntDesign name="close" size={12} color={colors.white} />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <Image source={{uri: item}} style={{width: 80, height: 80, borderRadius: 15, margin: 5, marginRight: 10}} />
                                </>
                            )}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </Screen>
   )
}

const styles = StyleSheet.create({
   audiance: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-evenly',
   },
   container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   },
   input: {
    fontSize: 20,
    padding: 20
   },
   textArea: {
    height: '115%'
   },
   pastille: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    right: 5,
    backgroundColor: 'black',
    opacity: 0.6,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
   },
   picturesIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 90
   },
   user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   }
})

export default CreateNewFeed